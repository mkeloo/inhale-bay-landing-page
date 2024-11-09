"use client";
import React from "react";
import VideoPlayer from "@/components/ReusableComponents/VideoPlayer";
import DealsBentoBox from "@/components/DealsBentoBox";
import DealsShortVideo from "@/components/ReusableComponents/DealsShortVideo";
import DealsLongVideo from "@/components/ReusableComponents/DealsLongVideo";

const LostMaryLongVideo = "/assets/bespoke_ads/lostmarylong.mp4";
const LostMaryShortVideo1 = "/assets/bespoke_ads/lostmaryshort1.mp4";
const LostMaryShortVideo2 = "/assets/bespoke_ads/lostmaryshort2.mp4";

const BespokeAdsPage = () => {
  return (
    <div className="max-w-screen-2xl mx-auto w-full h-full px-8 py-12">
      {/* Title */}
      {/* <div className="flex items-center justify-center mb-12">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-lime-500 to-emerald-500 bg-clip-text text-transparent">
          Bespoke Ads Page
        </h1>
      </div> */}

      {/* Long Wide Ad */}
      <div className="mb-12  max-w-[1600px] h-[750px] px-4">
        <VideoPlayer
          src={LostMaryLongVideo}
          className="w-full h-full mx-auto rounded-2xl shadow-lg"
          autoPlay
          muted
        />
      </div>

      <div className="mb-12">
        <DealsLongVideo />
      </div>

      <div className="mb-12">
        <DealsShortVideo />
      </div>

      {/* Row of Short Tall Ads */}
      {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12  px-4">
        <VideoPlayer
          src={LostMaryShortVideo1}
          className="w-full h-full rounded-2xl shadow-lg"
          autoPlay
          muted
        />
        <VideoPlayer
          src={LostMaryShortVideo2}
          className="w-full h-full rounded-2xl shadow-lg"
          autoPlay
          muted
        />
        <VideoPlayer
          src={LostMaryShortVideo1}
          className="w-full h-full rounded-2xl shadow-lg"
          autoPlay
          muted
        />
      </div> */}

      {/* <div className="mb-12">
        <DealsBentoBox />
      </div> */}
    </div>
  );
};

export default BespokeAdsPage;
