// pages/bespoke.tsx
"use client";
import React, { useEffect, useState } from "react";
import VideoPlayer from "@/components/ReusableComponents/VideoPlayer";
import DealsShortVideo from "@/components/ReusableComponents/DealsShortVideo";
import DealsLongVideo from "@/components/ReusableComponents/DealsLongVideo";
import Loader from "@/components/Loader";

const LostMaryLongVideo = "/assets/bespoke_ads/lostmarylong.mp4";
const Budzooka1LongVideo = "/assets/bespoke_ads/budzooka_vape_gun1.mp4";
const Budzooka2LongVideo = "/assets/bespoke_ads/budzooka_vape_gun2.mp4";


const BespokeAdsPage = () => {
  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    // Automatically mark loading as complete after 3 seconds
    const timeout = setTimeout(() => {
      setLoadingComplete(true);
    }, 2700); // Adjust to the duration of your animations

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {/* Render Loader until loading is complete */}
      {!loadingComplete && <Loader />}

      {/* Main content fades in immediately after loading is complete */}
      <div
        className={`${loadingComplete ? "opacity-100" : "opacity-0"
          } transition-opacity duration-300 max-w-screen-2xl mx-auto w-full h-full px-8 py-12`}
      >
        {/* Title */}
        {/* <div className="flex items-center justify-center mb-12">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-lime-500 to-emerald-500 bg-clip-text text-transparent">
            Bespoke Ads Page
          </h1>
        </div> */}

        {/* Deal Long Video Ad */}
        {/* <div className="mb-12">
          <DealsLongVideo />
        </div> */}

        {/* Long Wide Ad */}
        <div className="mb-12 max-w-[1600px] h-[750px] px-4">
          <VideoPlayer
            src={Budzooka1LongVideo}
            className="w-full h-full mx-auto rounded-2xl shadow-lg"
            autoPlay
            muted
          />
        </div>
        <div className="mb-12 max-w-[1600px] h-[750px] px-4">
          <VideoPlayer
            src={Budzooka2LongVideo}
            className="w-full h-full mx-auto rounded-2xl shadow-lg"
            autoPlay
            muted
          />
        </div>
        <div className="mb-12 max-w-[1600px] h-[750px] px-4">
          <VideoPlayer
            src={Budzooka1LongVideo}
            className="w-full h-full mx-auto rounded-2xl shadow-lg"
            autoPlay
            muted
          />
        </div>

        {/* Deal Short Video Ad */}
        {/* <div className="mb-12">
          <DealsShortVideo />
        </div> */}
      </div>
    </>
  );
};

export default BespokeAdsPage;
