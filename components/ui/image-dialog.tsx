"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { XIcon, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

import { cn } from "@/lib/utils";

type AnimationStyle =
    | "from-bottom"
    | "from-center"
    | "from-top"
    | "from-left"
    | "from-right"
    | "fade"
    | "top-in-bottom-out"
    | "left-in-right-out";

interface ImageDialogProps {
    animationStyle?: AnimationStyle;
    images: { src: string; alt?: string }[];
    initialIndex?: number;
    className?: string;
}

// Define animation variants
const animationVariants: Record<
    AnimationStyle,
    {
        initial: { [key: string]: any };
        animate: { [key: string]: any };
        exit: { [key: string]: any };
    }
> = {
    "from-bottom": {
        initial: { y: "100%", opacity: 0 },
        animate: { y: 0, opacity: 1 },
        exit: { y: "100%", opacity: 0 },
    },
    "from-center": {
        initial: { scale: 0.5, opacity: 0 },
        animate: { scale: 1, opacity: 1 },
        exit: { scale: 0.5, opacity: 0 },
    },
    "from-top": {
        initial: { y: "-100%", opacity: 0 },
        animate: { y: 0, opacity: 1 },
        exit: { y: "-100%", opacity: 0 },
    },
    "from-left": {
        initial: { x: "-100%", opacity: 0 },
        animate: { x: 0, opacity: 1 },
        exit: { x: "-100%", opacity: 0 },
    },
    "from-right": {
        initial: { x: "100%", opacity: 0 },
        animate: { x: 0, opacity: 1 },
        exit: { x: "100%", opacity: 0 },
    },
    fade: {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
    },
    "top-in-bottom-out": {
        initial: { y: "-100%", opacity: 0 },
        animate: { y: 0, opacity: 1 },
        exit: { y: "100%", opacity: 0 },
    },
    "left-in-right-out": {
        initial: { x: "-100%", opacity: 0 },
        animate: { x: 0, opacity: 1 },
        exit: { x: "100%", opacity: 0 },
    },
};

export function ImageDialog({
    animationStyle = "from-center",
    images,
    initialIndex = 0,
    className,
}: ImageDialogProps) {
    const [isImageOpen, setIsImageOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(initialIndex);
    const selectedAnimation = animationVariants[animationStyle];

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const currentImage = images[currentIndex];

    return (
        <div className={cn("relative", className)}>
            <div
                className="relative cursor-pointer group w-[320px] h-[300px] rounded-md overflow-hidden"
                onClick={() => setIsImageOpen(true)}
            >
                <Image
                    width={320}
                    height={300}
                    src={images[initialIndex].src}
                    alt={images[initialIndex].alt || "Gallery Image"}
                    loading="lazy"
                    className="w-full h-full object-cover transition-all duration-200 group-hover:brightness-[0.8] ease-out rounded-md"
                />
            </div>
            <AnimatePresence>
                {isImageOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        onClick={() => setIsImageOpen(false)}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/50 backdrop-blur-md"
                    >
                        <motion.div {...selectedAnimation} className="relative w-full max-w-4xl mx-4 md:mx-0">
                            <motion.button
                                onClick={() => setIsImageOpen(false)}
                                className="absolute -top-10 -right-10 text-xl ring-1 backdrop-blur-md rounded-full p-2 bg-lime-400 text-black"
                            >
                                <XIcon strokeWidth={2} />
                            </motion.button>
                            <div className="w-full h-full max-w-[90vw] max-h-[80vh] rounded-2xl overflow-hidden isolate z-[1] relative">
                                <Image
                                    src={currentImage.src}
                                    alt={currentImage.alt || "Gallery Image"}
                                    loading="eager"
                                    width={700}
                                    height={700}
                                    sizes="100vw"
                                    className="w-full h-full object-cover rounded-2xl"
                                    priority={true}
                                />
                                {/* Previous and Next Buttons */}
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handlePrevious();
                                    }}
                                    className="absolute left-2 top-1/2 transform -translate-y-1/2 ring-1 backdrop-blur-md rounded-full p-2 bg-lime-400 text-black"
                                >
                                    <ChevronLeft strokeWidth={2} />
                                </button>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleNext();
                                    }}
                                    className="absolute right-2 top-1/2 transform -translate-y-1/2  ring-1 backdrop-blur-md rounded-full p-2 bg-lime-400 text-black"
                                >
                                    <ChevronRight strokeWidth={2} />
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}