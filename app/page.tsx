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

export default function Home() {
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
