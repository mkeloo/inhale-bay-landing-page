"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Store } from "lucide-react";
import VideoPlayer from "@/components/ReusableComponents/VideoPlayer";
const heroBgVideo2 = "https://pugmboivpnkoasgsgfyf.supabase.co/storage/v1/object/public/store-images/DealsVapesImages/hero-vape-smoke.mp4";


interface DealFlowerBudCardProps {
    id: number;
    budName: string;
    OneGramPrice: number;
    FourGramPrice: number;
    imgSrc: string;
    bgGradient: string;
    is_enabled?: boolean;
}

// remove 1, 2, 5, 8, 9, 14, 15, 17, 18, 23, 25, 27
// add 3 more.

const DealFlowerBudCard: React.FC<DealFlowerBudCardProps> = ({
    id,
    budName,
    OneGramPrice,
    FourGramPrice,
    imgSrc,
    bgGradient,
    is_enabled,
}) => {
    const [isLoaded, setIsLoaded] = useState(false);

    if (is_enabled === false) return null;

    return (
        <div
            className={`relative h-[450px] md:h-[500px] lg:h-[550px] w-[102%] group/image flex flex-col items-center justify-center rounded-2xl shadow-md text-white  overflow-clip  bg-gradient-to-r ${bgGradient}`}
        // style={{ height: "550px", width: "102%" }}
        >
            {/* Overlay Content */}
            <div className="relative flex flex-col items-center justify-end w-full h-full">
                {/* Background Image */}
                <Image
                    src={imgSrc}
                    width={500}
                    height={500}
                    alt={`${budName} deal`}
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 500px"
                    blurDataURL={'@/public/assets/skeleton/flower_placeholder.webp'}
                    onLoad={() => setIsLoaded(true)}
                    className={`opacity-100 w-full h-full max-h-[200px] md:max-h-[250px] lg:max-h-[300px] object-contain transform transition-transform duration-300 group-hover/image:scale-110 z-[9] ${!isLoaded ? "filter blur-lg" : "filter blur-0"
                        } transition-all duration-700`}
                />

                {/* Badge */}
                <div className="absolute top-4 left-4 px-4 z-[12] py-2 rounded-full text-black text-sm md:text-md font-bold flex justify-center items-center bg-gradient-to-r from-lime-500 to-emerald-500">
                    THC-A
                </div>

                {/* ID */}
                {/* <div className="absolute top-4 right-4 px-4 z-[12] py-2 rounded-full text-black text-md font-bold flex justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-200 shadow-xl">
                    {id}
                </div> */}

                {/* Content Overlay */}
                <div className="flex flex-col justify-end w-full z-[12] mt-4">
                    <div className="bg-blue-800 bg-opacity-80 px-4 py-2 flex flex-col gap-2">
                        {/* Header Section */}
                        <div className="flex items-center justify-center mt-2">
                            <h2 className="text-xl md:text-2xl font-bold text-center">{budName}</h2>
                        </div>

                        {/* Pricing Section */}
                        <div className="flex justify-center items-center gap-8 text-lg md:text-xl font-semibold italic">
                            <div className="flex flex-col items-center justify-center">
                                <p>
                                    <span className="text-2xl md:text-3xl text-lime-300 font-bold">1</span> gram at
                                </p>
                                <p>
                                    for <span className="text-2xl md:text-3xl text-lime-300 font-bold">${OneGramPrice}</span>
                                </p>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <p>
                                    <span className="text-2xl md:text-3xl text-lime-300 font-bold">4</span> gram at
                                </p>
                                <p>
                                    for <span className="text-2xl md:text-3xl text-lime-300 font-bold">${FourGramPrice}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <a
                    href="https://www.google.com/maps/place/Inhale+Bay+Smoke+Shop/@30.3758011,-81.6515435,18.1z/data=!4m6!3m5!1s0x88e5b1f5522ae43f:0x38c6fe019b5911a8!8m2!3d30.3756184!4d-81.6499491!16s%2Fg%2F11w8z4vl7w?entry=ttu&g_ep=EgoyMDI0MTEwNi4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full uppercase text-lg font-bold font-grotesk gap-x-4 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-pink-600 hover:to-red-600 text-black hover:text-white p-2 flex items-center justify-center hover:scale-105 duration-200 transition-transform group/tilt">
                    Visit Store
                    <Store
                        strokeWidth={2}
                        size={24}
                        className="transform transition-transform duration-200 group-hover/tilt:rotate-12"
                    />
                </a>

            </div>
        </div>
    );
};

export default DealFlowerBudCard;