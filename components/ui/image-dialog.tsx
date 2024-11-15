"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { XIcon } from "lucide-react";
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
    imageSrc: string;
    imageAlt?: string;
    className?: string;
}

const animationVariants = {
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
    imageSrc,
    imageAlt = "Gallery Image",
    className,
}: ImageDialogProps) {
    const [isImageOpen, setIsImageOpen] = useState(false);
    const selectedAnimation = animationVariants[animationStyle];

    // Add preload link when component mounts
    useEffect(() => {
        const link = document.createElement("link");
        link.rel = "preload";
        link.as = "image";
        link.href = imageSrc;
        document.head.appendChild(link);

        return () => {
            document.head.removeChild(link);
        };
    }, [imageSrc]);

    return (
        <div className={cn("relative", className)}>
            <div
                className="relative cursor-pointer group w-[320px] h-[300px] rounded-md overflow-hidden "
                onClick={() => setIsImageOpen(true)}
            >
                <Image
                    width={320}
                    height={300}
                    src={imageSrc}
                    alt={imageAlt}
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
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md"
                    >
                        <motion.div
                            {...selectedAnimation}
                            // transition={{ type: "spring", damping: 30, stiffness: 300 }}
                            className="relative w-full max-w-4xl mx-4 md:mx-0"
                        >
                            <motion.button
                                onClick={() => setIsImageOpen(false)}
                                className="absolute -top-10 -right-10 text-white text-xl bg-neutral-900/50 ring-1 backdrop-blur-md rounded-full p-2 dark:bg-neutral-100/50 dark:text-black"
                            >
                                <XIcon className="size-5" />
                            </motion.button>
                            <div className="w-full h-full max-w-[90vw] max-h-[80vh] rounded-2xl overflow-hidden isolate z-[1] relative">
                                <Image
                                    src={imageSrc}
                                    alt={imageAlt}
                                    loading="eager"
                                    width={700}
                                    height={700}
                                    className="w-full h-full object-cover rounded-2xl"
                                    priority
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}