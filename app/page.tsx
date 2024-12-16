"use client";
import React, { useEffect, useState } from "react";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero2";
import Footer from "@/components/Footer";
import GalleryView from "@/components/GalleryView";
import DealsFlowerBuds from "@/components/DealsFlowerBuds";
import Deals from "@/components/Deals";
import LocationMap from "@/components/LocationMap";
import Testimonials from "@/components/Testimonials";
import AgeVerification from "@/components/AgeVerification";

export default function Home() {
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [isAgeVerified, setIsAgeVerified] = useState(false);
  const [isLocalStorageChecked, setIsLocalStorageChecked] = useState(false);

  useEffect(() => {
    // Check if age verification was already completed
    const ageVerified = localStorage.getItem("ageVerified");
    if (ageVerified === "true") {
      setIsAgeVerified(true);
    }
    setIsLocalStorageChecked(true); // Ensure this runs before rendering
  }, []);

  useEffect(() => {
    if (isAgeVerified) {
      // Mark loading as complete after 2.7 seconds
      const timeout = setTimeout(() => {
        setLoadingComplete(true);
      }, 2700);

      // Save the age verification status to localStorage
      localStorage.setItem("ageVerified", "true");

      return () => clearTimeout(timeout);
    }
  }, [isAgeVerified]);

  const handleAgeAccept = () => {
    setIsAgeVerified(true);
  };

  if (!isLocalStorageChecked) {
    // Render nothing until localStorage is checked
    return null;
  }

  return (
    <>
      {/* Show Age Verification first */}
      {!isAgeVerified && <AgeVerification onAccept={handleAgeAccept} />}

      {/* Show Loader after age is verified */}
      {isAgeVerified && !loadingComplete && <Loader />}

      {/* Show main content after both age verification and loading are complete */}
      <div
        className={`${loadingComplete && isAgeVerified ? "opacity-100" : "opacity-0"
          } transition-opacity duration-300 px-4 lg:px-0`}
      >
        <Navbar />
        <Hero />
        <DealsFlowerBuds />
        <Deals />
        <Testimonials />
        <LocationMap />
        <GalleryView />
        {/* <Footer /> */}
      </div>
    </>
  );
}