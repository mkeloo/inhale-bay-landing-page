"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Store } from "lucide-react";
import VideoPlayer from "@/components/ReusableComponents/VideoPlayer";


interface DealsCardProps {
    vape_company: string;
    base_deal: { buy_1: string; buy_2: string }[];
    discount_percent: number;
    deal_tagline: string;
    short_title: string;
    imgSrc: string;
    bgGradient: string;
    is_enabled?: boolean;
}

const DealsCard: React.FC<DealsCardProps> = ({
    vape_company,
    base_deal,
    discount_percent,
    deal_tagline,
    short_title,
    imgSrc,
    bgGradient,
    is_enabled,
}) => {
    const [isLoaded, setIsLoaded] = useState(false);

    if (is_enabled === false) return null;

    return (
        <div
            className={`relative h-full w-[102%] group/image rounded-2xl shadow-md text-white overflow-hidden  bg-gradient-to-r ${bgGradient} `}
        // style={{ height: "350px", width: "102%" }}
        >
            {/* Background Video */}
            {/* <VideoPlayer
                src={heroBgVideo2}
                className="absolute inset-0 w-full rounded-2xl h-full object-cover z-0 opacity-65"
                autoPlay
                loop
                playsInline
                muted
            /> */}




            {/* Vape Company Badge */}
            <div
                className="absolute top-4 left-3 px-4 py-2 rounded-full text-black text-sm md:text-md font-bold flex justify-center items-center bg-gradient-to-r from-lime-500 to-emerald-500 text-opacity-100 z-[15]"
            // style={{
            //     "--pulse-color": "rgba(0, 0, 255, 0.5)", // Tailwind's blue-500 in RGBA
            //     "--duration": "1.5s", // Customize the duration
            // } as React.CSSProperties}
            >
                <div className="relative">{vape_company}</div>
                {/* <div className="absolute top-1/2 left-1/2 w-full h-full rounded-full bg-inherit animate-pulse -translate-x-1/2 -translate-y-1/2" /> */}
            </div>

            {/* Discount Percent Badge */}
            <div
                className="absolute top-4 right-2 w-[50px] h-[50px] md:w-[60px] md:h-[60px] rounded-full text-white text-base font-bold flex justify-center items-center bg-red-500 shadow-lg z-[15]"
                style={{
                    "--pulse-color": "rgba(255, 0, 0, 0.5)", // Tailwind's red-500 in RGBA
                    "--duration": "1.5s", // Customize the duration

                } as React.CSSProperties}
            >
                <div className="relative z-10">{discount_percent}%</div>
                <div className="absolute top-1/2 left-1/2 w-full h-full rounded-full bg-inherit animate-pulsing -translate-x-1/2 -translate-y-1/2" />
            </div>


            <div className="flex flex-col items-center justify-between w-full h-full backdrop-blur-3xl">
                {/* Background Image */}
                <Image
                    src={imgSrc}
                    width={500}
                    height={500}
                    alt={`${vape_company} deal`}
                    loading="lazy"
                    onLoadingComplete={() => setIsLoaded(true)}
                    className={`opacity-100 w-full h-full m-auto object-cover transform transition-transform duration-300 group-hover/image:scale-110 mt-10 px-4 ${!isLoaded ? "filter blur-lg" : "filter blur-0"
                        } transition-all duration-700`}
                />

                {/* Content Overlay */}
                <div className="flex flex-col justify-end  w-full z-[12] -mt-3">
                    <div className="bg-blue-800 bg-opacity-80 px-4 py-2 flex flex-col">
                        <h3 className="text-xl md:text-2xl text-center font-bold mb-1 md:mb-2">
                            {short_title}
                        </h3>
                        <div className="flex flex-col md:flex-row items-center justify-center w-full gap-4 md:gap-2">
                            <p className="w-full md:w-[55%] text-center text-lg md:text-xl font-semibold italic md:mr-4">
                                {deal_tagline.split(', ').map((line, index) => (
                                    <React.Fragment key={index}>
                                        {line.split(' ').map((word, i) => (
                                            <React.Fragment key={i}>
                                                {/^\d+$/.test(word) || /\$\d+/.test(word) ? ( // Check if the word is a number or matches a price pattern
                                                    <span className="text-2xl md:text-3xl bg-clip text-lime-300 font-bold">
                                                        {word}
                                                    </span>
                                                ) : (
                                                    word
                                                )}
                                                {' '}
                                            </React.Fragment>
                                        ))}
                                        {index < deal_tagline.split(', ').length - 1 && <br />}
                                    </React.Fragment>
                                ))}
                            </p>

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

export default DealsCard;