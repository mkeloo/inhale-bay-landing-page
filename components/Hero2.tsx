"use client";
import React, { useState } from "react";
import Image from "next/image";
import CustomSvgCursor from "./CustomSVGCursor";
import { Gem, ArrowRight } from "lucide-react";
import VideoPlayer from "@/components/ReusableComponents/VideoPlayer";
import { motion } from "framer-motion";
import {
  desVariants,
  tagVariants,
  titleVariants,
  slideInRightVariants,
  slideInVariants,
  fadeVariants,
  quickPopUpVariants,
} from "@/lib/animation";

const heroBgVideo2 = "/assets/hero/hero-smoking.mp4";

const deal1Img = "/assets/deals/vtouch-deals2.png";
const deal4Img = "/assets/deals/southconnect-deals4.png";
const deal5Img = "/assets/deals/geekbar-deals6.png";

// Hero Section Images
const vapesImg = "https://pugmboivpnkoasgsgfyf.supabase.co/storage/v1/object/public/store-images/SectionImages/HeroVapesRaz.webp";
const flowerBudsImag = 'https://pugmboivpnkoasgsgfyf.supabase.co/storage/v1/object/public/store-images/SectionImages/HeroTHC-A.webp';
const bongsImg = "https://pugmboivpnkoasgsgfyf.supabase.co/storage/v1/object/public/store-images/SectionImages/HeroBongsGeneric.webp";


const Hero2 = () => {
  const [showCustomCursor, setShowCustomCursor] = useState(true);

  return (
    <div
      className="relative w-full h-full lg:h-[85vh] px-4 lg:px-0 flex items-center justify-center text-white bg-black"
      onMouseEnter={() => setShowCustomCursor(true)}
      onMouseLeave={() => setShowCustomCursor(false)}
    >
      {/* Background Video */}
      <VideoPlayer
        src={heroBgVideo2}
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-65 "
        autoPlay
        loop
        playsInline
        muted
      />

      {/* Hero Content Container */}
      <div className="w-full h-full relative z-10 max-w-7xl mx-auto flex flex-col items-center justify-center gap-4 pb-8 pt-8">

        {/* Top Content */}
        <div className="w-full h-[75%] flex flex-col lg:flex-row items-center justify-center lg:gap-x-8 gap-y-6">

          {/* Left-Top Content */}
          <div className="w-full lg:w-1/2 h-auto lg:h-full gap-4 flex flex-col items-center justify-center">
            <div className="w-full h-1/2 flex items-center justify-center lg:justify-start">
              <motion.h1
                initial="offscreen"
                animate={"onscreen"}
                whileInView={"stay"}
                variants={slideInVariants}
                className="text-4xl md:text-6xl lg:text-7xl font-grotesk font-bold mb-2 py-2 text-center md:text-left"
              >
                Find Your Flow <br />
                at{" "}
                <span className="bg-clip text-lime-400 underline-animation">
                  Inhale Ba
                </span>
                <span className="bg-clip text-lime-400">y</span>
              </motion.h1>
            </div>

            {/* Image Containers */}
            <div className="w-full h-full lg:h-1/2 hidden lg:flex flex-col md:flex-row items-center justify-center gap-6">

              {/* 1st Image */}
              <motion.div
                initial="offscreen"
                animate={"onscreen"}
                whileInView={"stay"}
                variants={slideInVariants}
                style={{
                  background:
                    "linear-gradient(90deg, rgba(255,0,0,0.7) 0%, rgba(173,0,255,0.5) 50%, rgba(32,81,181,0.7) 100%)",
                }}
                className="group/image flex items-center justify-center w-full md:w-1/2 h-full relative rounded-lg shadow-lg overflow-hidden bg-gradient-to-r from-red-400 to-blue-500 hover:shadow-2xl hover:shadow-pink-500 duration-300 transition-shadow"
              >
                <Image
                  src={vapesImg}
                  alt="Hero Vapes Image"
                  width={500}
                  height={500}
                  className="opacity-100 object-contain transform transition-transform duration-200 group-hover/image:scale-110 backdrop-blur-md"
                />
              </motion.div>

              {/* 2nd Image */}
              <motion.div
                initial="offscreen"
                animate={"onscreen"}
                whileInView={"stay"}
                variants={quickPopUpVariants}
                style={{
                  background:
                    "linear-gradient(180deg, rgba(84,255,0,0.7) 0%, rgba(35,238,0,0.9) 50%, rgba(8,80,0,1) 100%)",
                }}
                className="group/image flex items-end justify-center w-full md:w-1/2 h-full relative rounded-lg shadow-lg overflow-hidden bg-gradient-to-r from-green-400 to-teal-500 hover:shadow-2xl hover:shadow-lime-500 duration-300 transition-shadow px-4"
              >
                {/* Badge */}
                <div className="absolute top-4 left-2 px-4 z-[12] py-2 rounded-full text-white text-sm font-bold flex justify-center items-center bg-blue-700">
                  THC-A
                </div>

                <Image
                  src={flowerBudsImag}
                  alt="Thc Flower Buds"
                  width={500}
                  height={500}
                  className="opacity-100 object-contain transform transition-transform duration-200 group-hover/image:scale-110 backdrop-blur-md -mb-6"
                />
              </motion.div>
            </div>

          </div>

          {/* Right-Top Content */}
          <motion.div
            initial="offscreen"
            animate={"onscreen"}
            whileInView={"stay"}
            variants={slideInRightVariants}
            style={{
              background:
                "linear-gradient(90deg, rgba(0,0,0,0.35) 0%, rgba(46,45,45,0.35) 50%, rgba(255,255,255,0.35) 100%)",
            }}
            className="group/image w-full lg:w-1/2 h-full relative rounded-lg shadow-lg overflow-hidden hover:shadow-2xl hover:shadow-blue-700 duration-300 transition-shadow flex items-center justify-center backdrop-blur-md"
          >
            <Image
              src={bongsImg}
              alt="Bongs"
              width={460}
              height={460}
              className="opacity-100 object-cover transform transition-transform duration-200 group-hover/image:scale-110"
            />
          </motion.div>
        </div>

        {/* Bottom Content */}
        <div className="w-full h-[25%] flex flex-col lg:flex-row items-center justify-end gap-4">
          <div className="w-full md:w-1/4 flex items-center justify-center md:justify-start">
            <motion.h3
              initial="offscreen"
              animate={"onscreen"}
              whileInView={"stay"}
              variants={slideInVariants}
              className="text-xl md:text-2xl lg:text-3xl font-poppins font-semibold mb-2 py-2 text-center md:text-left"
            >
              Where{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
                Quality{" "}
              </span>
              meets <span className="bg-clip text-lime-400">Excellence</span>
            </motion.h3>
          </div>

          <div className="w-full md:w-1/2 flex items-center justify-center">
            <motion.p
              initial="offscreen"
              animate={"onscreen"}
              whileInView={"stay"}
              variants={quickPopUpVariants}
              className="text-sm md:text-lg lg:text-[23px] lg:text-left font-medium font-inter text-center md:text-left"
            >
              Discover premium vapes, THC-A Flower, Bongs, & more. <br />
              <span className="font-inter font-semibold bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 to-lime-500">
                Enjoy exclusive deals & promotions for all your smoking needs.
              </span>
            </motion.p>
          </div>

          <div className="w-full md:w-1/4 flex items-center justify-center">
            <motion.a
              initial="offscreen"
              animate={"onscreen"}
              whileInView={"stay"}
              variants={slideInRightVariants}
              href="https://www.google.com/maps/place/Inhale+Bay+Smoke+Shop/"
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn my-2 text-sm md:text-lg bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-pink-600 hover:to-red-600 px-6 md:px-10 py-3 md:py-4 rounded-lg flex items-center text-black hover:text-white font-semibold duration-400 transition"
            >
              <span className="transition-transform duration-200 group-hover/btn:scale-110">
                Visit Our Store
              </span>
              <Gem
                strokeWidth={2}
                className="ml-2 transform transition-transform duration-200 group-hover/btn:scale-110 group-hover/btn:translate-x-2"
              />
            </motion.a>
          </div>
        </div>
      </div>

      {/* Custom SVG Cursor */}
      {/* <CustomSvgCursor isVisible={showCustomCursor} /> */}
    </div >
  );
};

export default Hero2;
