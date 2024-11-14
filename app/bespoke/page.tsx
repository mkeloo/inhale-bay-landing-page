// pages/bespoke.tsx
"use client";
import React, { useState, useEffect } from 'react';
import VideoPlayer from "@/components/ReusableComponents/VideoPlayer";
import DealsShortVideo from "@/components/ReusableComponents/DealsShortVideo";
import DealsLongVideo from "@/components/ReusableComponents/DealsLongVideo";
import Loader from "@/components/Loader";

// Budzooka Long Video Ads
const Budzooka1LongVideo = "/assets/bespoke_ads/budzooka_vape_gun1.mp4";
const Budzooka2LongVideo = "/assets/bespoke_ads/budzooka_vape_gun2.mp4";

const BudzookaVideos = [
  Budzooka1LongVideo,
  Budzooka2LongVideo,
  Budzooka1LongVideo, // Repeat as needed
];

// Vape Long Video Ads
const LostMaryLongVideo1 = "/assets/bespoke_ads/lostmarylong.mp4";
const LostMaryLongVideo2 = "/assets/bespoke_ads/lostmarylong2.mp4";
const RazLong = "/assets/bespoke_ads/razlong.mp4";
const SouthConnectLong = "/assets/bespoke_ads/southconnectlong.mp4";
const VapeWatchLong2 = "/assets/bespoke_ads/vapewatchlong2.mp4";
const VTouchLong = "/assets/bespoke_ads/vtouchlong.mp4";

// Array of vape video sources
const vapeVideos = [
  LostMaryLongVideo1,
  LostMaryLongVideo2,
  RazLong,
  SouthConnectLong,
  VapeWatchLong2,
  VTouchLong,
];



const BespokeAdsPage = () => {
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [showBudzooka, setShowBudzooka] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowBudzooka((prev) => !prev); // Toggle between Budzooka and Vape videos
    }, 35000); // Shortened to 5 seconds for testing; adjust to 30000 for production

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, []);

  useEffect(() => {
    // Automatically mark loading as complete after 3 seconds
    const timeout = setTimeout(() => {
      setLoadingComplete(true);
    }, 2700); // Adjust to the duration of your animations

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div key={showBudzooka ? "Budzooka" : "Vape"}>
      {showBudzooka ? (
        // Budzooka Long Video Ads
        <>
          {BudzookaVideos.map((videoSrc, index) => (
            <div key={index} className="mb-12 max-w-[1600px] h-[750px] px-4">
              <VideoPlayer
                src={videoSrc}
                className="w-full h-full mx-auto rounded-2xl shadow-lg"
                autoPlay
                muted
                loop
              />
            </div>
          ))}
        </>
      ) : (
        // Vape Long Video Ads
        <>
          {vapeVideos.slice(0, 3).map((videoSrc, index) => (
            <div key={index} className="mb-12 max-w-[1600px] h-[750px] px-4">
              <VideoPlayer
                src={videoSrc}
                className="w-full h-full mx-auto rounded-2xl shadow-lg"
                autoPlay
                muted
                loop
              />
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default BespokeAdsPage;
