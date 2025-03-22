'use client';

import Marquee from "@/components/ui/marquee";
import { Quote, Star, ExternalLink } from 'lucide-react';
import Image from "next/image";
import Link from "next/link";

const heroBgImage = "/assets/hero/hero-bg2.webp";

const ReviewCard = ({
    name,
    body,
    stars,
    link,
}: {
    name: string;
    body: string;
    stars: number;
    link: string;
}) => {
    return (
        <figure className="relative max-w-md rounded-lg p-6 shadow-lg overflow-hidden flex flex-col justify-between">
            <Image
                src={heroBgImage}
                alt="Background with smoke"
                width={500}
                height={500}
                quality={100}
                className="absolute object-cover inset-0 z-[-10] opacity-50"
            />
            {/* Quote Icon */}
            <Quote
                // size={40}
                strokeWidth={2}
                className="absolute w-8 h-8 md:w-10 md:h-10 top-4 left-4 fill-lime-400 text-lime-400 mb-2"
            />

            {/* Content */}
            <div className="flex flex-col justify-between h-full mt-10">
                <blockquote className="text-base md:text-lg font-inter italic mb-2 flex-grow">{body}</blockquote>

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
                <div className="flex items-center font-oxanium font-semibold text-base md:text-lg">
                    - {name}
                    <Link
                        href={link}
                        prefetch={false}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 underline flex items-center ml-2"
                    >
                        <span>View Review</span>
                        <ExternalLink size={18} className="ml-1" />
                    </Link>
                </div>
            </div>
        </figure>
    );
};

interface TestimonialsCardsProps {
    reviews: Array<{
        name: string;
        body: string;
        stars: number;
        link: string;
    }>;
}

export default function TestimonialsCards({ reviews }: TestimonialsCardsProps) {
    const firstRow = reviews.slice(0, Math.ceil(reviews.length / 2));
    const secondRow = reviews.slice(Math.ceil(reviews.length / 2));

    return (
        <div className="relative hidden md:flex h-[550px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl">
            <Marquee pauseOnHover className="[--duration:50s]">
                {firstRow.map((review) => (
                    <ReviewCard key={review.name} {...review} />
                ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:50s]">
                {secondRow.map((review) => (
                    <ReviewCard key={review.name} {...review} />
                ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-background"></div>
        </div>
    );
}