
const STORAGE_PREFIX = 'springfield_images_';

// Pre-loaded SSC result images
const SSC_RESULT_IMAGES = [
  {
    filename: 'ssc_2024_results.png',
    path: '/lovable-uploads/87064bbb-2ca9-4368-a24b-e307ca5c5eb8.png',
    title: 'SSC 2024 Board Results - Outstanding Achievement',
    description: 'Celebrating our students\' exceptional performance in SSC 2024 with 9.7 GPA top scorers and 91.6% pass rate',
    category: 'ssc-results',
    event_date: '2024-05-15'
  },
  {
    filename: 'ssc_2025_results.png', 
    path: '/lovable-uploads/348111d4-ea13-461f-b87c-9235d7372d9b.png',
    title: 'SSC 2025 Board Results - 100% Pass Rate Achievement',
    description: 'Remarkable success with 100% pass rate in SSC 2025, featuring top scorers Annam Akshith (580) and Eravelli Indhu (569)',
    category: 'ssc-results',
    event_date: '2025-05-15'
  }
];

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
  
  // For lovable-uploads, return as is
  if (imagePath.startsWith('/lovable-uploads/')) {
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

// Get pre-loaded SSC results
export const getSSCResultImages = () => {
  return SSC_RESULT_IMAGES;
};

// Utility to get all stored images including SSC results
export const getAllStoredImages = () => {
  const images = [];
  
  // Add pre-loaded SSC results first
  images.push(...SSC_RESULT_IMAGES);
  
  // Add user uploaded images
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
