// pages/index.tsx
"use client";
import React, { useEffect, useState } from "react";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero2";
import Footer from "@/components/Footer";
import GalleryView from "@/components/GalleryView";
import Deals from "@/components/Deals";
import LocationMap from "@/components/LocationMap";
import Testimonials from "@/components/Testimonials";
import AgeVerification from "@/components/AgeVerification";

export default function Home() {
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [isAgeVerified, setIsAgeVerified] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoadingComplete(true);
    }, 2700);

    return () => clearTimeout(timeout);
  }, []);

  const handleAgeAccept = () => {
    setIsAgeVerified(true);
  };

  return (
    <>
      {!loadingComplete && <Loader />}

      {loadingComplete && !isAgeVerified && <AgeVerification onAccept={handleAgeAccept} />}

      <div className={`${loadingComplete && isAgeVerified ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}>
        <Navbar />
        <Hero />
        <Deals />
        <Testimonials />
        <LocationMap />
        <GalleryView />
        <Footer />
      </div>
    </>
  );
}