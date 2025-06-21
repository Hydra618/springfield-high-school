
const STORAGE_PREFIX = 'springfield_images_';

export const handleLocalImageUpload = async (file: File): Promise<string> => {
  // Create a unique filename with timestamp
  const timestamp = Date.now();
  const extension = file.name.split('.').pop() || 'jpg';
  const filename = `${timestamp}_${Math.random().toString(36).substr(2, 9)}.${extension}`;
  
  try {
    // Convert file to base64 for persistent storage
    const base64 = await fileToBase64(file);
    
    // Store in localStorage with unique key
    const storageKey = `${STORAGE_PREFIX}${filename}`;
    localStorage.setItem(storageKey, base64);
    
    // Also store metadata
    const metadata = {
      filename,
      originalName: file.name,
      size: file.size,
      type: file.type,
      timestamp
    };
    localStorage.setItem(`${storageKey}_meta`, JSON.stringify(metadata));
    
    console.log('Image stored successfully:', filename);
    return `/images/${filename}`;
  } catch (error) {
    console.error('Error uploading image:', error);
    throw new Error('Failed to upload image');
  }
};

const fileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = error => reject(error);
  });
};

export const getImageUrl = (imagePath: string): string => {
  // If it's already a full URL, return as is
  if (imagePath.startsWith('http') || imagePath.startsWith('blob:')) {
    return imagePath;
  }
  
  // For local images, get from localStorage
  if (imagePath.startsWith('/images/')) {
    const filename = imagePath.split('/').pop();
    if (filename) {
      const storageKey = `${STORAGE_PREFIX}${filename}`;
      const base64Data = localStorage.getItem(storageKey);
      if (base64Data) {
        return base64Data;
      }
    }
  }
  
  // Fallback to placeholder
  return '/placeholder.svg';
};

// Utility to get all stored images
export const getAllStoredImages = () => {
  const images = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key && key.startsWith(STORAGE_PREFIX) && !key.endsWith('_meta')) {
      const filename = key.replace(STORAGE_PREFIX, '');
      const metaKey = `${key}_meta`;
      const metaData = localStorage.getItem(metaKey);
      
      images.push({
        filename,
        path: `/images/${filename}`,
        metadata: metaData ? JSON.parse(metaData) : null,
        base64: localStorage.getItem(key)
      });
    }
  }
  return images;
};

// Cleanup old images (optional)
export const cleanupOldImages = (daysOld = 30) => {
  const cutoffTime = Date.now() - (daysOld * 24 * 60 * 60 * 1000);
  
  for (let i = localStorage.length - 1; i >= 0; i--) {
    const key = localStorage.key(i);
    if (key && key.startsWith(STORAGE_PREFIX) && key.endsWith('_meta')) {
      const metaData = localStorage.getItem(key);
      if (metaData) {
        const meta = JSON.parse(metaData);
        if (meta.timestamp < cutoffTime) {
          const imageKey = key.replace('_meta', '');
          localStorage.removeItem(key);
          localStorage.removeItem(imageKey);
        }
      }
    }
  }
};
