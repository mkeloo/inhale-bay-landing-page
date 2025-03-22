import { ArrowBigLeft, ArrowBigRight, ExternalLink, Quote, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const heroBgImage = "/assets/hero/hero-bg2.webp";

export default function ReviewCard({
    name,
    body,
    stars,
    link,
}: {
    name: string;
    body: string;
    stars: number;
    link: string;
}) {
    return (
        <figure className="relative w-full h-full max-h-[300px] max-w-md rounded-2xl p-4 overflow-hidden flex flex-col justify-between border-dotted border-2 border-lime-300 shadow-lg shadow-lime-800">
            <img
                src={heroBgImage}
                alt="Background with smoke"
                className="absolute w-full h-full object-cover inset-0 z-[-10] opacity-50"
            />

            <div className="w-full flex justify-between items-center">
                {/* Quote Icon */}
                <Quote
                    // size={40}
                    strokeWidth={2}
                    className="w-8 h-8 md:w-10 md:h-10  fill-lime-400 text-lime-400 mb-2"
                />

                {link && (
                    <Link
                        href={link ?? "#"}
                        prefetch={false}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 underline flex items-center ml-2"
                    >
                        <span className=" font-oxanium font-semibold text-base">View Review</span>
                        <ExternalLink size={18} className="ml-1" />
                    </Link>
                )}
            </div>

            {/* Content */}
            <div className="flex flex-col justify-between h-full  max-h-[240px] overflow-y-scroll   mt-4 md:mt-10">
                <div className="max-h-[240px] overflow-y-auto mb-2">
                    <blockquote className="text-pretty text-base font-inter italic">
                        {body}
                    </blockquote>
                </div>
                {/* Star Ratings */}
                <div className="flex items-center mb-4">
                    {Array.from({ length: stars }).map((_, i) => (
                        <Star
                            key={i}
                            // size={20}
                            className="text-yellow-500 w-5 h-5 md:w-6 md:h-6 mr-1"
                            fill="currentColor"
                        />
                    ))}
                </div>

                {/* Reviewer Name & Link */}
                <div className="flex flex-col items-end font-oxanium font-semibold text-base md:text-lg">
                    - {name}
                </div>
            </div>
        </figure>
    );
};