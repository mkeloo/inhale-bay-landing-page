"use client";
import React from "react";
import ContactForm from "./ContactForm";
import Image from "next/image";
import { Phone, MapPin, Clock } from 'lucide-react';
import StoreInformation from "./ReusableComponents/StoreInformation";
const heroBgImage = "/assets/hero/bg-smoke3.jpg";


const LocationMap = () => {
  return (
    <div id="contact" className="max-w-screen-2xl mx-auto bg-black   md:px-12 py-10 lg:py-20 ">

      <h1 className="flex items-center justify-center text-4xl md:text-5xl lg:text-6xl text-center font-extrabold bg-gradient-to-r from-yellow-500 to-pink-500 bg-clip-text text-transparent">
        How To Reach Us?
      </h1>

      <div className="relative w-full lg:min-h-[800px] flex flex-col-reverse lg:flex-row items-stretch gap-8 my-10">
        {/* Left: Contact Form */}
        <div className="w-full lg:w-1/2 flex flex-col flex-1">
          <ContactForm />
        </div>

        {/* Right: Store Info + Map */}
        <div className="w-full lg:w-1/2 flex flex-col flex-1">
          {/* Store Info (auto height) */}
          <StoreInformation />

          {/* Map (fills leftover space) */}
          <div className="h-[350px] md:h-[400px] lg:flex-1 mt-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d399.8839927706971!2d-81.65004248473093!3d30.375641192942126!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e5b1f5522ae43f%3A0x38c6fe019b5911a8!2sInhale%20Bay%20Smoke%20Shop!5e0!3m2!1sen!2sus!4v1731225942948!5m2!1sen!2sus"
              style={{ border: 0, borderRadius: "0.75rem" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full shadow-lg rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationMap;