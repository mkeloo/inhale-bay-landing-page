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
  const [isLocalStorageChecked, setIsLocalStorageChecked] = useState(false);
  const [isPageReload, setIsPageReload] = useState(false);

  useEffect(() => {
    // Check localStorage flags
    const ageVerified = localStorage.getItem("ageVerified");
    const pageVisited = sessionStorage.getItem("pageVisited");

    if (ageVerified === "true") {
      setIsAgeVerified(true);
    }

    if (!pageVisited) {
      // Mark this session as first visit
      sessionStorage.setItem("pageVisited", "true");
      setIsPageReload(true); // Consider as reload or first load
    } else {
      setLoadingComplete(true); // Skip loader for navigation back
    }

    setIsLocalStorageChecked(true);
  }, []);

  useEffect(() => {
    if (isAgeVerified && isPageReload && !loadingComplete) {
      // Mark loading as complete after 2.7 seconds for reloads
      const timeout = setTimeout(() => {
        setLoadingComplete(true);
        setIsPageReload(false); // Reset reload state
      }, 2700);

      return () => clearTimeout(timeout);
    }
  }, [isAgeVerified, isPageReload, loadingComplete]);

  const handleAgeAccept = () => {
    setIsAgeVerified(true);
    localStorage.setItem("ageVerified", "true");
  };

  if (!isLocalStorageChecked) {
    // Render nothing until localStorage is checked
    return null;
  }

  return (
    <>
      {/* Show Age Verification first */}
      {!isAgeVerified && <AgeVerification onAccept={handleAgeAccept} />}

      {/* Show Loader only for reloads */}
      {isAgeVerified && isPageReload && !loadingComplete && <Loader />}

      {/* Show main content after age verification and loading */}
      <div
        className={`${loadingComplete && isAgeVerified ? "opacity-100" : "opacity-0"
          } transition-opacity duration-300`}
      >
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