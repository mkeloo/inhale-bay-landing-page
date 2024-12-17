"use client";
import { useEffect, useState } from "react";
import { ImageDialog } from "@/components/ui/image-dialog";
import { Skeleton } from "@/components/ui/skeleton";
import { images } from "@/lib/imagesLinks";

export default function GalleryView() {
    const [loadedImages, setLoadedImages] = useState<{ [key: number]: boolean }>({});

    useEffect(() => {
        const loadImages = () => {
            const loaded: { [key: number]: boolean } = {};
            images.forEach((_, index) => {
                const img = new Image();
                img.src = images[index];
                img.onload = () => {
                    loaded[index] = true;
                    setLoadedImages((prev) => ({ ...prev, [index]: true }));
                };
            });
        };
        loadImages();
    }, []);

    return (
        <div className="max-w-screen-2xl mx-auto px-4 md:px-12 py-20 my-10">
            <h1 className="flex items-center justify-center text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-yellow-500 to-pink-500 bg-clip-text text-transparent">
                Take a look at our Store!
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-14">
                {images.map((imageSrc, index) => (
                    <div
                        key={index}
                        className="relative flex items-center justify-center w-full aspect-[4/3] rounded-md overflow-hidden"
                    >
                        {/* Show Skeleton while loading */}
                        {!loadedImages[index] ? (
                            <Skeleton className="w-full h-full object-cover rounded-md" />
                        ) : (
                            <ImageDialog
                                animationStyle="left-in-right-out"
                                images={images.map((img, idx) => ({
                                    src: img,
                                    alt: `Gallery Image ${idx + 1}`,
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