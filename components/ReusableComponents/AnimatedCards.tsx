"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";

type Testimonial = {
    id: number;
    src: string;
    colors: string;
};
export const AnimatedCards = ({
    testimonials,
    autoplay = true,
}: {
    testimonials: Testimonial[];
    autoplay?: boolean;
}) => {
    const [active, setActive] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);


    const handleNext = () => {
        setActive((prev) => (prev + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const isActive = (index: number) => index === active;

    useEffect(() => {
        if (autoplay) {
            const interval = setInterval(handleNext, 3000);
            return () => clearInterval(interval);
        }
    }, [autoplay]);

    const randomRotateY = () => {
        return Math.floor(Math.random() * 21) - 10;
    };
    return (
        <div className="w-full font-sans antialiased flex items-center justify-center">
            <div className="w-full max-w-lg relative grid grid-cols-1 gap-6 ">
                <div>
                    <div className="relative h-80 w-full">
                        <AnimatePresence>
                            {testimonials.map((testimonial, index) => (
                                <motion.div
                                    key={testimonial.id}
                                    initial={{
                                        opacity: 0,
                                        scale: 0.9,
                                        z: -100,
                                        rotate: randomRotateY(),
                                    }}
                                    animate={{
                                        opacity: isActive(index) ? 1 : 0.7,
                                        scale: isActive(index) ? 1 : 0.95,
                                        z: isActive(index) ? 0 : -100,
                                        rotate: isActive(index) ? 0 : randomRotateY(),
                                        zIndex: isActive(index) ? 40 : testimonials.length + 2 - index,
                                        y: isActive(index) ? [0, -80, 0] : 0,
                                    }}
                                    exit={{
                                        opacity: 0,
                                        scale: 0.9,
                                        z: 100,
                                        rotate: randomRotateY(),
                                    }}
                                    transition={{
                                        duration: 0.4,
                                        ease: "easeInOut",
                                    }}
                                    className="absolute inset-0 origin-bottom"
                                >
                                    <Image
                                        src={testimonial.src}
                                        alt={`Testimonial ${testimonial.id}`}
                                        width={500}
                                        height={500}
                                        loading="lazy"
                                        onLoad={() => setIsLoaded(true)}
                                        draggable={false}
                                        sizes="(max-width: 768px) 100vw, 500px"
                                        className={`h-full w-full rounded-3xl object-cover object-center bg-gradient-to-br ${testimonial.colors} shadow-lg hover:shadow-blue-600 shadow-gray-300/75 border-dotted border-[3px] border-neutral-200 ${!isLoaded ? "filter blur-lg" : "filter blur-0"
                                            } transition-all duration-700`}
                                    />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
                <div className="w-full flex flex-col justify-between gap-y-4">

                    <div className="w-full flex items-center justify-center gap-4">
                        <button
                            onClick={handlePrev}
                            className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
                        >
                            <span className="sr-only">Left Slide Button</span>
                            <ArrowLeft className="h-5 w-5 transition-transform duration-300 group-hover/button:rotate-12 text-neutral-400" />
                        </button>
                        <button
                            onClick={handleNext}
                            className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
                        >
                            <span className="sr-only">Right Slide Button</span>
                            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover/button:-rotate-12 text-neutral-400" />
                        </button>
                    </div>

                    <div className="flex items-center justify-center gap-2 px-4 font-bold text-base md:text-lg text-center ">
                        Premium vapes, THC-A flower, bongs & more — with exclusive deals just for you.
                    </div>
                </div>
            </div>
        </div>
    );
};

