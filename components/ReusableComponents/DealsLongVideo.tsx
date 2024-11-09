"use client";
import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import VideoPlayer from "@/components/ReusableComponents/VideoPlayer";
import navbarLogo from "@/public/logo/inhalebayLogo-nav1.svg";

const RazLongVideo = "/assets/bespoke_ads/razlong.mp4";
const deal1Img = "/assets/deals/raz-deals1.webp";
const deal2Img = "/assets/deals/vtouch-deals2.png";
const deal3Img = "/assets/deals/orian-deals3.png";
const deal4Img = "/assets/deals/southconnect-deals4.png";
const deal5Img = "/assets/deals/southconnect-deals5.png";
const deal6Img = "/assets/deals/geekbar-deals6.png";

const DealsLongVideo = () => {
  // Define a fixed height for the video and deals section
  const videoHeight = "48rem"; // Adjust this to fit your design needs

  return (
    <div className="max-w-screen-2xl mx-auto w-full flex items-center justify-center gap-4">
      {/* Deals section with matching height */}
      <div
        className="w-[20%] flex flex-col gap-4"
        style={{ height: videoHeight }}
      >
        <div className="w-full h-full flex flex-col gap-4">
          <div className="group/image h-full w-full relative rounded-lg shadow-lg overflow-hidden bg-gradient-to-r from-red-400 to-blue-500">
            <Image
              src={deal5Img}
              alt="Deal 5"
              layout="fill"
              objectFit="cover"
              className="opacity-75 transform transition-transform duration-200 group-hover/image:scale-110"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
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
            </div>
          </div>
          <div className="group/image h-full w-full relative rounded-lg shadow-lg overflow-hidden bg-gradient-to-r from-yellow-400 to-orange-500">
            <Image
              src={deal6Img}
              alt="Deal 6"
              layout="fill"
              objectFit="cover"
              className="opacity-75 transform transition-transform duration-200 group-hover/image:scale-110"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
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
            </div>
          </div>
        </div>
      </div>

      {/* Long Video */}
      <div
        className="w-[60%] flex flex-col gap-4"
        style={{ height: videoHeight }}
      >
        {/* Top Gradient Section with overflow hidden */}
        <div className="w-full h-[14rem] bg-gradient-to-r from-green-400 to-teal-500 py-8 px-8 rounded-lg overflow-hidden flex items-center justify-between">
          <div className="bg-black px-4 py-2 rounded-xl shadow-2xl flex flex-col items-center justify-center mr-8">
            <Image
              src={navbarLogo}
              alt="Inhale Bay Logo"
              width={70}
              height={10}
              className="my-2"
            />
          </div>
          <div className="bg-blue-900  w-auto bg-opacity-70 flex flex-col items-center justify-center px-4 py-2 rounded-lg">
            <h2 className="text-3xl font-bold">Summer Specials</h2>
            <p className="text-lg">Enjoy hot deals this summer</p>
            <button className="group/btn bg-blue-500 p-2 rounded-lg mt-2 flex items-center text-white font-semibold hover:scale-105 duration-200 transition-transform">
              Shop Now
              <ArrowRight
                strokeWidth={3}
                className="ml-1 transform transition-transform duration-200 group-hover/btn:translate-x-2"
              />
            </button>
          </div>
          <div className="bg-black px-4 py-2 rounded-xl shadow-2xl flex flex-col items-center justify-center ml-8">
            <Image
              src={navbarLogo}
              alt="Inhale Bay Logo"
              width={70}
              height={10}
              className="my-2"
            />
          </div>
        </div>

        {/* Video Player with Flex Grow */}
        <div className="flex-grow w-full">
          <VideoPlayer
            src={RazLongVideo}
            className="w-full h-full rounded-2xl shadow-lg"
            autoPlay
            muted
          />
        </div>

        {/* Bottom Gradient Section with overflow hidden */}
        <div className="w-full h-[14rem] bg-gradient-to-r from-blue-400 to-indigo-900 py-8 px-8 rounded-lg overflow-hidden flex items-center justify-between">
          <div className="bg-black px-4 py-2 rounded-xl shadow-2xl flex flex-col items-center justify-center mr-8">
            <Image
              src={navbarLogo}
              alt="Inhale Bay Logo"
              width={70}
              height={10}
              className="my-2"
            />
          </div>
          <div className="bg-pink-400  w-auto bg-opacity-70 flex flex-col items-center justify-center px-4 py-2 rounded-lg">
            <h2 className="text-3xl font-bold">Summer Specials</h2>
            <p className="text-lg">Enjoy hot deals this summer</p>
            <button className="group/btn bg-blue-500 p-2 rounded-lg mt-2 flex items-center text-white font-semibold hover:scale-105 duration-200 transition-transform">
              Shop Now
              <ArrowRight
                strokeWidth={3}
                className="ml-1 transform transition-transform duration-200 group-hover/btn:translate-x-2"
              />
            </button>
          </div>
          <div className="bg-black px-4 py-2 rounded-xl shadow-2xl flex flex-col items-center justify-center ml-8">
            <Image
              src={navbarLogo}
              alt="Inhale Bay Logo"
              width={70}
              height={10}
              className="my-2"
            />
          </div>
        </div>
      </div>

      {/* Deals section with matching height */}
      <div
        className="w-[20%] flex flex-col gap-4"
        style={{ height: videoHeight }}
      >
        <div className="w-full h-full flex flex-col gap-4">
          <div className="group/image h-full w-full relative rounded-lg shadow-lg overflow-hidden bg-gradient-to-r from-red-400 to-blue-500">
            <Image
              src={deal5Img}
              alt="Deal 5"
              layout="fill"
              objectFit="cover"
              className="opacity-75 transform transition-transform duration-200 group-hover/image:scale-110"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
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
            </div>
          </div>
          <div className="group/image h-full w-full relative rounded-lg shadow-lg overflow-hidden bg-gradient-to-r from-yellow-400 to-orange-500">
            <Image
              src={deal6Img}
              alt="Deal 6"
              layout="fill"
              objectFit="cover"
              className="opacity-75 transform transition-transform duration-200 group-hover/image:scale-110"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealsLongVideo;
