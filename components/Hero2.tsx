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

const heroBgVideo = "/assets/hero/hero-bg-video.mp4";
const heroBgVideo2 = "/assets/hero/hero-smoking.mp4";
const heroVapePic = "/assets/hero/hero-vape2.webp";

const deal1Img = "/assets/deals/vtouch-deals2.png";
const deal4Img = "/assets/deals/southconnect-deals4.png";
const deal5Img = "/assets/deals/geekbar-deals6.png";

const Hero2 = () => {
  const [showCustomCursor, setShowCustomCursor] = useState(true);

  return (
    <div
      className="relative w-full h-[85vh] flex items-center justify-center text-white bg-black"
      onMouseEnter={() => setShowCustomCursor(true)}
      onMouseLeave={() => setShowCustomCursor(false)}
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

      {/* Hero Content Container */}
      <div className="w-full h-full relative z-10 max-w-7xl mx-auto flex flex-col items-center justify-center gap-4 pb-8 pt-8">
        {/* Top Content */}
        <div className="w-full h-[75%] flex items-center justify-center gap-x-8">
          {/* Left-Top Content */}
          <div className="w-1/2 h-full gap-4 flex flex-col items-center justify-center">
            <div className="w-full h-1/2 flex items-center justify-start">
              <motion.h1
                initial="offscreen"
                animate={"onscreen"}
                whileInView={"stay"}
                variants={slideInVariants}
                className="text-7xl font-grotesk font-bold mb-2 py-2"
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
            <div className="w-full h-1/2  flex items-center justify-center gap-6">
              <motion.div
                initial="offscreen"
                animate={"onscreen"}
                whileInView={"stay"}
                variants={slideInVariants}
                style={{
                  background:
                    "linear-gradient(to right, rgba(248, 113, 113, 0.7), rgba(59, 130, 246, 0.7))",
                }}
                className="group/image w-1/2 h-full relative rounded-lg shadow-lg overflow-hidden bg-gradient-to-r from-red-400 to-blue-500 hover:shadow-2xl hover:shadow-pink-500 duration-300 transition-shadow"
              >
                <Image
                  src={deal5Img}
                  alt="Deal 5"
                  layout="fill"
                  objectFit="cover"
                  className="opacity-100 transform transition-transform duration-200 group-hover/image:scale-110"
                />
                {/* <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
                  <div className="bg-blue-800 bg-opacity-60 p-4 rounded-lg">
                    <h2 className="text-3xl font-bold">Starter Kits</h2>
                    <p className="text-lg">Perfect for beginners</p>
                    <button className="group/btn bg-rose-400 p-4 rounded-lg mt-2 flex items-center text-white font-semibold hover:scale-105 duration-200 transition-transform">
                      Shop Now
                      <ArrowRight
                        strokeWidth={3}
                        className="ml-1 transform transition-transform duration-200 group-hover/btn:translate-x-2"
                      />
                    </button>
                  </div>
                </div> */}
              </motion.div>
              <motion.div
                initial="offscreen"
                animate={"onscreen"}
                whileInView={"stay"}
                variants={quickPopUpVariants}
                style={{
                  background:
                    "linear-gradient(to right, rgba(34, 197, 94, 0.7), rgba(13, 148, 136, 0.7))",
                }}
                className="group/image w-1/2 h-full relative rounded-lg shadow-lg overflow-hidden bg-gradient-to-r from-green-400 to-teal-500 hover:shadow-2xl hover:shadow-lime-500 duration-300 transition-shadow"
              >
                <Image
                  src={deal4Img}
                  alt="Deal 4"
                  layout="fill"
                  objectFit="cover"
                  className="opacity-100 transform transition-transform duration-200 group-hover/image:scale-110"
                />
                {/* <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
                  <div className="bg-teal-700 bg-opacity-60 p-4 rounded-lg">
                    <h2 className="text-3xl font-bold">Buy 1 Get 1 Free</h2>
                    <p className="text-md">Exclusive offer on select items</p>
                    <button className="group/btn bg-teal-500 p-4 rounded-lg mt-2 flex items-center text-white font-semibold hover:scale-105 duration-200 transition-transform">
                      Shop Now
                      <ArrowRight
                        strokeWidth={3}
                        className="ml-1 transform transition-transform duration-200 group-hover/btn:translate-x-2"
                      />
                    </button>
                  </div>
                </div> */}
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
                "linear-gradient(to right, rgba(96, 165, 250, 0.7), rgba(79, 70, 229, 0.7))",
            }}
            className="group/image w-1/2 h-full relative rounded-lg shadow-lg overflow-hidden bg-gradient-to-r from-blue-400 to-indigo-900 hover:shadow-2xl hover:shadow-blue-700 duration-300 transition-shadow"
          >
            <Image
              src={deal1Img}
              alt="Deal 6"
              layout="fill"
              objectFit="cover"
              className="opacity-100 transform transition-transform duration-200 group-hover/image:scale-110"
            />
            {/* <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
              <div className="bg-orange-700 bg-opacity-60 p-4 rounded-lg">
                <h2 className="text-3xl font-bold">Limited Edition</h2>
                <p className="text-lg">Exclusive limited-time items</p>
                <button className="group/btn bg-yellow-400 p-4 rounded-lg mt-2 flex items-center text-white font-semibold hover:scale-105 duration-200 transition-transform">
                  Shop Now
                  <ArrowRight
                    strokeWidth={3}
                    className="ml-1 transform transition-transform duration-200 group-hover/btn:translate-x-2"
                  />
                </button>
              </div>
            </div> */}
          </motion.div>
        </div>

        {/* Bottom Content */}
        <div className="w-full h-[25%] flex items-center justify-end gap-4">
          <div className="w-[25%] h-full flex items-center justify-start">
            <motion.h3
              initial="offscreen"
              animate={"onscreen"}
              whileInView={"stay"}
              variants={slideInVariants}
              className="text-3xl font-poppins font-semibold mb-2 py-2 "
            >
              Where{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
                Quality{" "}
              </span>
              meets <span className="bg-clip text-lime-400">Excellence</span>
            </motion.h3>
          </div>
          <div className="h-full w-[50%] flex items-center justify-center">
            <motion.p
              initial="offscreen"
              animate={"onscreen"}
              whileInView={"stay"}
              variants={quickPopUpVariants}
              className="text-[23px] text-left font-medium font-inter"
            >
              Discover premium vapes, hookahs, e-cigarettes, & more. <br />
              <span className="font-inter font-semibold bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 to-lime-500">
                Enjoy exclusive deals & promotions for all your smoking needs.
              </span>
            </motion.p>
          </div>
          <div className="w-[25%] h-full flex items-center justify-center ">
            <motion.a
              initial="offscreen"
              animate={"onscreen"}
              whileInView={"stay"}
              variants={slideInRightVariants}
              href="https://www.google.com/maps/place/Inhale+Bay+Smoke+Shop/@30.3758011,-81.6515435,18.1z/data=!4m6!3m5!1s0x88e5b1f5522ae43f:0x38c6fe019b5911a8!8m2!3d30.3756184!4d-81.6499491!16s%2Fg%2F11w8z4vl7w?entry=ttu&g_ep=EgoyMDI0MTEwNi4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn my-4 text-lg bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-pink-600 hover:to-red-600 px-10 py-4 rounded-lg mt-2 flex items-center text-black hover:text-white font-semibold hover:scale-105 duration-400 transition"
            >
              Visit Our Store
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
    </div>
  );
};

export default Hero2;
