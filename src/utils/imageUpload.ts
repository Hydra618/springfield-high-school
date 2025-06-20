
export const handleLocalImageUpload = async (file: File): Promise<string> => {
  // Create a unique filename
  const timestamp = Date.now();
  const extension = file.name.split('.').pop();
  const filename = `image_${timestamp}.${extension}`;
  
  // Create FormData for the upload
  const formData = new FormData();
  formData.append('image', file);
  formData.append('filename', filename);
  
  // For now, we'll use a simple approach with URL.createObjectURL
  // In a real implementation, you'd send this to a backend endpoint
  const imageUrl = URL.createObjectURL(file);
  
  // Store the file reference for cleanup later if needed
  localStorage.setItem(`image_${filename}`, imageUrl);
  
  return `/images/${filename}`;
};

export const getImageUrl = (imagePath: string): string => {
  // If it's already a full URL, return as is
  if (imagePath.startsWith('http') || imagePath.startsWith('blob:')) {
    return imagePath;
  }
  
  // For local images, construct the path
  if (imagePath.startsWith('/images/')) {
    // Check if we have a blob URL in localStorage
    const filename = imagePath.split('/').pop();
    const blobUrl = localStorage.getItem(`image_${filename}`);
    if (blobUrl) {
      return blobUrl;
    }
  }
  
  return imagePath;
};
