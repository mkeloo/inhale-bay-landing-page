"use client";

import React, { useEffect, useState } from "react";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero2";
import Footer from "@/components/Footer";
import GalleryView from "@/components/GalleryView";
import DealsFlowerBuds from "@/components/DealsFlowerBuds";
import DealsVapes from "@/components/DealsVapes";
import LocationMap from "@/components/LocationMap";
import Testimonials from "@/components/Testimonials";
import AgeVerification from "@/components/AgeVerification";

export default function Home() {
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [isAgeVerified, setIsAgeVerified] = useState(false);
  const [isSessionStorageChecked, setIsSessionStorageChecked] = useState(false);

  // Check sessionStorage for age verification
  useEffect(() => {
    const ageVerified = sessionStorage.getItem("ageVerified");
    const verificationTime = sessionStorage.getItem("ageVerifiedTime");

    if (ageVerified === "true" && verificationTime) {
      const currentTime = new Date().getTime();
      const timeDifference = currentTime - Number(verificationTime);

      // Check if 2 hours (7200000 ms) have passed
      if (timeDifference < 7200000) {
        setIsAgeVerified(true);
      } else {
        sessionStorage.removeItem("ageVerified");
        sessionStorage.removeItem("ageVerifiedTime");
      }
    }

    setIsSessionStorageChecked(true);
  }, []);

  // Handle age verification accept
  const handleAgeAccept = () => {
    const currentTime = new Date().getTime();
    sessionStorage.setItem("ageVerified", "true");
    sessionStorage.setItem("ageVerifiedTime", currentTime.toString());
    setIsAgeVerified(true);
  };

  // Simulate a loader after age verification
  useEffect(() => {
    if (isAgeVerified) {
      const timeout = setTimeout(() => {
        setLoadingComplete(true);
      }, 2700);
      return () => clearTimeout(timeout);
    }
  }, [isAgeVerified]);

  if (!isSessionStorageChecked) {
    // Render nothing until sessionStorage is checked
    return null;
  }

  return (
    <>
      {/* 1) Show Age Verification first */}
      {!isAgeVerified && <AgeVerification onAccept={handleAgeAccept} />}

      {/* 2) Show Loader after age is verified */}
      {isAgeVerified && !loadingComplete && <Loader />}

      {/* 3) Show main content only after verification + loader */}
      {isAgeVerified && loadingComplete && (
        <>
          <Navbar />
          <Hero />
          <div className="px-4 lg:px-0">
            <DealsFlowerBuds />
            <DealsVapes />
            <Testimonials />
            <LocationMap />
            {/* <GalleryView /> */}
          </div>
          <Footer />
        </>
      )}
    </>
  );
}