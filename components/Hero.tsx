import React from "react";
import Image from "next/image";
import heroBgImage from "@/public/hero/hero-bg2.jpg";
import heroVapePic from "@/public/hero/hero-vape2.webp";
import { Gem } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative w-full h-[85vh] flex items-center justify-center text-white bg-black">
      {/* Background Image */}
      {/* <Image
        src={heroBgImage}
        alt="Background with smoke"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="absolute inset-0 z-0 opacity-50"
      /> */}

      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-50"
      >
        <source src="/hero/hero-bg-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Hero Content Container */}
      <div className="w-full h-full max-w-7xl mx-auto flex items-center justify-center">
        <div className="relative z-10 flex items-center justify-between w-full h-[85vh]">
          {/* Left Content */}
          <div className="h-[80%] w-[60%] flex flex-col items-center justify-center mt-10">
            {/* Text Content */}
            <div className="px-6 space-y-2 flex flex-col items-start justify-center">
              <h1 className="text-7xl font-bold mb-2 py-2">
                Find Your Flow <br />
                at <span className="bg-clip text-lime-400">Inhale Bay</span>
              </h1>
              <p className="text-2xl text-left mb-6">
                Discover premium vapes, hookahs, e-cigarettes, and more. Enjoy
                exclusive deals and promotions for all your smoking needs.
              </p>
            </div>
            {/* CTA Button */}
            <div className="flex items-center justify-center my-6">
              <button className="p-[3px] relative my-2 ">
                <div className="absolute inset-0 bg-gradient-to-r  from-lime-500 to-emerald-500 rounded-lg" />
                <a
                  href="#location"
                  className="flex justify-center items-center px-4 py-2 space-x-2 bg-black rounded-[6px] relative group transition duration-300 font-semibold text-white hover:text-black hover:bg-transparent"
                >
                  <Gem className="w-5 h-5" strokeWidth={2} />
                  <span className="text-lg">Explore Deals</span>
                </a>
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="hidden md:flex w-1/2 h-full items-center justify-center">
            <Image
              src={heroVapePic}
              alt="Hero Vape Image"
              className="object-cover w-full h-[80%]	"
            />
          </div>
        </div>
      </div>

      {/* Optional Gradient Overlay */}
      {/* <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-50 z-0"></div> */}
    </div>
  );
};

export default Hero;
