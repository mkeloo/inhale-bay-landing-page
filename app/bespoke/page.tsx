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

// const BudzookaVideos: string[] = [
//   Budzooka1LongVideo,
//   Budzooka2LongVideo,
//   Budzooka1LongVideo, // Repeat as needed
// ];

// // Array of vape video sources
// const vapeVideos: string[] = [
//   LostMaryLongVideo1,
//   LostMaryLongVideo2,
//   RazLong,
//   SouthConnectLong,
//   VapeWatchLong2,
//   VTouchLong,
// ];

// Vape Long Video Ads
const LostMaryLongVideo1 = "/assets/bespoke_ads/lostmarylong.mp4";
const LostMaryLongVideo2 = "/assets/bespoke_ads/lostmarylong2.mp4";
const RazLong = "/assets/bespoke_ads/razlong.mp4";
const SouthConnectLong = "/assets/bespoke_ads/southconnectlong.mp4";
const VapeWatchLong2 = "/assets/bespoke_ads/vapewatchlong2.mp4";
const VTouchLong = "/assets/bespoke_ads/vtouchlong.mp4";




const BudzookaVideos: string[] = [Budzooka1LongVideo, Budzooka2LongVideo, Budzooka1LongVideo];
const vapeVideos: string[] = [LostMaryLongVideo1, LostMaryLongVideo2, RazLong, SouthConnectLong, VapeWatchLong2, VTouchLong];

// Helper function to shuffle an array
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}



const BespokeAdsPage = () => {
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [showBudzooka, setShowBudzooka] = useState<boolean>(true);
  const [randomVapeVideos, setRandomVapeVideos] = useState<string[]>([]); // Explicitly set type to string[]


  useEffect(() => {
    const interval = setInterval(() => {
      setShowBudzooka((prev) => !prev); // Toggle between Budzooka and Vape videos
    }, 35000); // 35 seconds for production

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, []);

  // Shuffle vape videos whenever showBudzooka changes to false
  useEffect(() => {
    if (!showBudzooka) {
      setRandomVapeVideos(shuffleArray(vapeVideos));
    }
  }, [showBudzooka]);

  return (
    <>
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
          // Randomized Vape Long Video Ads
          <>
            {randomVapeVideos.slice(0, 3).map((videoSrc, index) => (
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
      <h1 className="text-8xl flex items-center bg-clip text-lime-400 justify-center uppercase font-grotesk font-bold pb-2 tracking-widest">Inhale Bay Smoke Shop</h1>
    </>
  );
};

export default BespokeAdsPage;
