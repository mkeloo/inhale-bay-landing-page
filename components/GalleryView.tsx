"use client";
import { useEffect, useState } from "react";
import { ImageDialog } from "@/components/ui/image-dialog";
import { Skeleton } from "@/components/ui/skeleton";
import { images } from "@/lib/stuff";

export default function ImageDialogDemo() {
    const [loadedImages, setLoadedImages] = useState<{ [key: number]: boolean }>({});

    useEffect(() => {
        // Set a timer for each image to simulate loading time
        images.forEach((_, index) => {
            setTimeout(() => {
                setLoadedImages((prevState) => ({
                    ...prevState,
                    [index]: true,
                }));
            }, 2000); // 2000ms delay
        });
    }, []);

    return (
        <div className="max-w-screen-2xl mx-auto px-4 md:px-12 py-20 my-10">
            <h1 className="flex items-center justify-center text-6xl font-extrabold bg-gradient-to-r from-yellow-500 to-pink-500 bg-clip-text text-transparent">
                Take a look at our Store!
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8 my-14">
                {images.map((imageSrc, index) => (
                    <div key={index} className="relative flex items-center justify-center">
                        {/* Show Skeleton while timer is running */}
                        {!loadedImages[index] && (
                            <Skeleton className="w-full h-full aspect-[4/3] rounded-md" />
                        )}
                        {/* Display ImageDialog after timer completes */}
                        {loadedImages[index] && (
                            <ImageDialog
                                animationStyle="from-top"
                                imageSrc={imageSrc.src}
                                imageAlt={`Gallery Image ${index + 1}`}
                            />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}