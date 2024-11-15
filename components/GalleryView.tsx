"use client";
import { useEffect, useState } from "react";
import { ImageDialog } from "@/components/ui/image-dialog";
import { Skeleton } from "@/components/ui/skeleton";
import { images } from "@/lib/stuff";

export default function ImageDialogDemo() {
    const [loadedImages, setLoadedImages] = useState<{ [key: number]: boolean }>({});

    useEffect(() => {
        // Simulate image loading with a 2000ms delay for each image
        const timer = setTimeout(() => {
            // Mark all images as loaded after the delay
            const loaded = images.reduce((acc, _, index) => {
                acc[index] = true;
                return acc;
            }, {} as { [key: number]: boolean });
            setLoadedImages(loaded);
        }, 2000);

        // Clean up the timer on unmount
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="max-w-screen-2xl mx-auto px-4 md:px-12 py-20 my-10">
            <h1 className="flex items-center justify-center text-6xl font-extrabold bg-gradient-to-r from-yellow-500 to-pink-500 bg-clip-text text-transparent">
                Take a look at our Store!
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8 my-14">
                {images.map((imageSrc, index) => (
                    <div key={index} className="relative flex items-center justify-center">
                        {/* Show Skeleton while loading is simulated */}
                        {!loadedImages[index] && (
                            <Skeleton className="w-full h-full aspect-[4/3] rounded-md" />
                        )}
                        {/* Display ImageDialog after loading completes */}
                        {loadedImages[index] && (
                            <ImageDialog
                                animationStyle="from-top"
                                images={images.map((img) => ({ src: img.src, alt: `Gallery Image ${index + 1}` }))}
                                initialIndex={index}
                                className="w-full h-full"
                            />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}