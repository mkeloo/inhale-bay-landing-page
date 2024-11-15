import React from "react";
import Image from "next/image";
import TestimonialsCards from "@/components/ReusableComponents/TestimonialsCards";
import { deals } from '@/lib/deals';


const heroBgImage = "/assets/hero/hero-bg2.jpg";

const Testimonials = () => {
    return (
        <div id="testimonials" className="relative w-full h-full py-8 pt-16 pb-16  bg-black">
            {/* <Image
                src={heroBgImage}
                alt="Background with smoke"
                layout="fill"
                objectFit="cover"
                quality={100}
                className="absolute inset-0 z-[-10] opacity-50"
            /> */}
            <div className="max-w-7xl mx-auto w-full h-full px-12">
                <div className="flex items-center justify-center mb-8 py-8">
                    <h1 className="text-6xl font-extrabold bg-gradient-to-r from-lime-500 to-emerald-500 bg-clip-text text-transparent">
                        What Customers Say About Us!


                    </h1>
                </div>

                {/*Testimonials Cards */}
                <TestimonialsCards />

            </div>
        </div>
    );
};

export default Testimonials;
