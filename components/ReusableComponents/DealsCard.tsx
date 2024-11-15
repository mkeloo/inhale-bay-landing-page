"use client";
import React from "react";
import Image from "next/image";
import { Store } from "lucide-react";
import VideoPlayer from "@/components/ReusableComponents/VideoPlayer";
const heroBgVideo2 = "/assets/hero/hero-vape-smoke.mp4";


interface DealsCardProps {
    vape_company: string;
    base_deal: { buy_1: string; buy_2: string }[];
    discount_percent: string;
    deal_tagline: string;
    short_title: string;
    imgSrc: string;
    bgGradient: string;
}

const DealsCard: React.FC<DealsCardProps> = ({
    vape_company,
    base_deal,
    discount_percent,
    deal_tagline,
    short_title,
    imgSrc,
    bgGradient,
}) => {
    return (
        <div
            className={`relative group/image rounded-lg shadow-md text-white overflow-hidden bg-gradient-to-r ${bgGradient}`}
            style={{ height: "350px", width: "100%" }}
        >
            {/* Background Video */}
            <VideoPlayer
                src={heroBgVideo2}
                className="absolute inset-0 w-full h-full object-cover z-0 opacity-65"
                autoPlay
                loop
                playsInline
                muted
            />

            {/* Background Image */}
            <Image
                src={imgSrc}
                width={500}
                height={500}
                alt={`${vape_company} deal`}
                className="opacity-100 absolute inset-0 object-cover transform transition-transform duration-200 group-hover/image:scale-110"
                style={{
                    width: "90%", // Adjust the width to your preference
                    height: "90%", // Adjust the height to your preference
                    margin: "auto", // Center the image within the container

                }}
            />


            {/* Vape Company Badge */}
            <div
                className="absolute top-4 left-3 px-4 py-2 rounded-full text-black text-md font-bold flex justify-center items-center bg-gradient-to-r from-lime-500 to-emerald-500 text-opacity-100"
            // style={{
            //     "--pulse-color": "rgba(0, 0, 255, 0.5)", // Tailwind's blue-500 in RGBA
            //     "--duration": "1.5s", // Customize the duration
            // } as React.CSSProperties}
            >
                <div className="relative z-10">{vape_company}</div>
                {/* <div className="absolute top-1/2 left-1/2 w-full h-full rounded-full bg-inherit animate-pulse -translate-x-1/2 -translate-y-1/2" /> */}
            </div>

            {/* Discount Percent Badge */}
            <div
                className="absolute top-4 right-2 rounded-full text-white text-base font-bold flex justify-center items-center bg-red-500 shadow-lg"
                style={{
                    "--pulse-color": "rgba(255, 0, 0, 0.5)", // Tailwind's red-500 in RGBA
                    "--duration": "1.5s", // Customize the duration
                    width: "60px", // Ensure consistent sizing
                    height: "60px",
                } as React.CSSProperties}
            >
                <div className="relative z-10">{discount_percent}%</div>
                <div className="absolute top-1/2 left-1/2 w-full h-full rounded-full bg-inherit animate-pulse -translate-x-1/2 -translate-y-1/2" />
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 flex flex-col justify-end p-4">
                <div className="bg-blue-800 bg-opacity-80 p-4 rounded-lg">
                    <h3 className="text-2xl font-bold mb-2">{short_title}</h3>
                    <div className="flex items-center justify-between w-full">
                        <p className="w-[55%] text-xl font-semibold italic mr-4">
                            {deal_tagline.split(', ').map((line, index) => (
                                <React.Fragment key={index}>
                                    {line.split(' ').map((word, i) => (
                                        <React.Fragment key={i}>
                                            {/^\d+$/.test(word) || /\$\d+/.test(word) ? ( // Check if the word is a number or matches a price pattern
                                                <span className="text-3xl bg-clip text-lime-300 font-bold">{word}</span>
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
                        <button className="w-[40%] uppercase text-lg group/btn bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-pink-600 hover:to-red-600 text-black hover:text-white px-2 py-3 rounded-lg flex items-center justify-center  font-bold hover:scale-105 duration-200 transition-transform">
                            Visit
                            <Store
                                strokeWidth={2}
                                className="ml-1 transform transition-transform duration-200 group-hover/btn:rotate-12"
                            />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DealsCard;