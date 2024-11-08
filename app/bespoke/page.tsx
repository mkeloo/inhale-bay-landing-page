"use client";
import React from "react";
import VideoPlayer from "@/components/ReusableComponents/VideoPlayer";

const LostMaryVideo = "/assets/bespoke_ads/lostmarylong.mp4";

const BespokeAdsPage = () => {
  return (
    <div>
      <h1>Bespoke Ads Page</h1>
      <VideoPlayer
        // src={LostMaryVideo}
        src="https://res.cloudinary.com/dftbfepcc/video/upload/v1731091258/samples/sea-turtle.mp4"
        className="w-[900px] h-[500px] mx-auto" // Tailwind classes for styling
        autoPlay
        muted
      />
    </div>
  );
};

export default BespokeAdsPage;
