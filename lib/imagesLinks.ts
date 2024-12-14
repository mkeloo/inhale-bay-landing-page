const bucketBaseUrl = "https://pugmboivpnkoasgsgfyf.supabase.co/storage/v1/object/public/store-images/InsideStoreImagesExample/";

// Generate image URLs dynamically
export const images = Array.from({ length: 15 }, (_, i) => {
    const imageNumber = i + 1; // Image numbers start from 1
    const extension = imageNumber === 1 ? "webp" : "jpg"; // First image is webp, others are jpg
    return `${bucketBaseUrl}image${imageNumber}.${extension}`;
});