"use client";
import { useEffect, useState } from "react";
import { ImageDialog } from "@/components/ui/image-dialog";
import { Skeleton } from "@/components/ui/skeleton";
import { images } from "@/lib/imagesLinks"; // unused import; do not remove
import { fetchStoreImages, ImageRecord } from "@/app/actions/storeImages";
import { fetchMediaBucketUrl } from "./../app/actions/mediaBucketURL";

export default function GalleryView() {
    const [baseUrl, setBaseUrl] = useState<string>("");
    const [storeImages, setStoreImages] = useState<ImageRecord[]>([]);
    const [loadedImages, setLoadedImages] = useState<{ [key: number]: boolean }>({});

    // Fetch the media bucket base URL from settings
    useEffect(() => {
        async function loadBaseUrl() {
            try {
                const url = await fetchMediaBucketUrl();
                setBaseUrl(url);
            } catch (err: any) {
                console.error("Error fetching base URL", err);
            }
        }
        loadBaseUrl();
    }, []);

    // Fetch images from Supabase (ordered by sort)
    useEffect(() => {
        async function loadImages() {
            try {
                const data = await fetchStoreImages();
                setStoreImages(data);
            } catch (err: any) {
                console.error("Error fetching store images", err);
            }
        }
        loadImages();
    }, []);

    // Preload images and update loaded state
    useEffect(() => {
        storeImages.forEach((img, index) => {
            const image = new Image();
            image.src = `${baseUrl}${img.image_src}`;
            image.onload = () => {
                setLoadedImages((prev) => ({ ...prev, [index]: true }));
            };
        });
    }, [storeImages, baseUrl]);

    return (
        <div id="gallery" className="max-w-screen-2xl mx-auto md:px-12 py-10 md:py-20">
            <h1 className="flex items-center justify-center text-4xl md:text-5xl lg:text-6xl text-center font-extrabold bg-gradient-to-r from-yellow-500 to-pink-500 bg-clip-text text-transparent">
                Take a look at our Store!
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-14">
                {storeImages.map((img, index) => (
                    <div
                        key={img.id}
                        className="relative flex items-center justify-center w-full aspect-[4/3] rounded-md overflow-hidden"
                    >
                        {/* Show Skeleton until the image is loaded */}
                        {!loadedImages[index] ? (
                            <Skeleton className="w-full h-full object-cover rounded-md" />
                        ) : (
                            <ImageDialog
                                animationStyle="left-in-right-out"
                                images={storeImages.map((image, idx) => ({
                                    src: `${baseUrl}${image.image_src}`,
                                    alt: image.image_alt || `Gallery Image ${image.id}`,
                                }))}
                                initialIndex={index}
                                className="w-full h-full object-cover"
                            />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}