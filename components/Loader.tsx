// components/Loader.tsx
"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "@/public/logo/inhalebayLogo-nav1.svg";

const heroBgImage1 = "/assets/hero/hero-bg2.jpg";
const heroBgImage2 = "/assets/hero/smoking-background.png";

const Loader: React.FC = () => {
  const [lineExpanded, setLineExpanded] = useState(false);
  const [startSlideOut, setStartSlideOut] = useState(false);

  useEffect(() => {
    // Start line expansion
    setTimeout(() => {
      setLineExpanded(true);
    }, 100); // Adjust timing for line expansion

    // Start sliding panels after line expansion
    setTimeout(() => {
      setStartSlideOut(true);
    }, 1500); // Start slide-out after line expansion
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      {/* Logo container with fade-out transition */}
      <div
        className={`relative z-20 transition-opacity duration-500 ${startSlideOut ? "opacity-0" : "opacity-100"
          }`}
      >
        <div className="bg-black sm:px-2 md:px-3 lg:px-4 py-2 rounded-xl shadow-2xl flex flex-col items-center justify-center">
          <Image
            src={logo}
            alt="Inhale Bay Logo"
            width={120}
            height={25}
            className="my-2 md:my-4"
          />
        </div>
      </div>

      {/* Expanding white line */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden z-10">
        <div
          className={`h-1 bg-white ${lineExpanded ? "animate-expand-line" : ""
            }`}
        ></div>
      </div>

      {/* Top and bottom panels with slide-out and background image */}
      <div className="absolute inset-0 flex flex-col">
        {/* Top panel with background image */}
        <div
          className={`relative h-1/2 w-full sm:rounded-bl-[50px] md:rounded-bl-[100px] lg:rounded-b-[100px] overflow-hidden bg-black transition-transform duration-500 ${startSlideOut ? "loader-up slide-out" : "loader-up"
            }`}
        >
          {/* <Image
            src={heroBgImage1}
            alt="Background with smoke"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="absolute inset-0 sm:rounded-bl-[50px] md:rounded-bl-[100px] lg:rounded-b-[100px] opacity-50"
          /> */}
        </div>

        {/* Bottom panel with background image */}
        <div
          className={`relative h-1/2 w-full sm:rounded-tr-[50px] md:rounded-tr-[100px] lg:rounded-t-[100px] overflow-hidden bg-black transition-transform duration-500 ${startSlideOut ? "loader-down slide-out" : "loader-down"
            }`}
        >
          {/* <Image
            src={heroBgImage1}
            alt="Background with smoke"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="absolute inset-0 sm:rounded-tr-[50px] md:rounded-tr-[100px] lg:rounded-t-[100px] opacity-50"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Loader;
