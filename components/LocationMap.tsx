"use client";
import React from "react";
import ContactForm from "./ContactForm";
import Image from "next/image";
import { Phone, MapPin, Clock } from 'lucide-react';
const heroBgImage = "/assets/hero/bg-smoke3.jpg";


const LocationMap = () => {
  return (
    <div id="contact" className="max-w-screen-2xl mx-auto bg-black relative w-full h-full flex flex-col md:flex-row items-start justify-between gap-8 px-4 md:px-12 py-20 my-10">

      {/* Contact Form on the Left Side */}
      <div className="w-full md:w-1/2 min-h-[800] z-10  rounded-lg shadow-lg flex flex-col items-stretch h-full flex-grow">
        <ContactForm />
      </div>

      {/* Location Details and Map on the Right Side */}
      <div className="w-full md:w-1/2 min-h-[800] flex flex-col gap-6 h-full flex-grow">

        {/* Location Details */}
        <div className="relative bg-black p-8 z-20 rounded-lg shadow-lg w-full text-white flex-grow flex flex-col">
          <Image
            src={heroBgImage}
            alt="Background with smoke"
            width={500}
            height={500}
            className="absolute inset-0 w-full rounded-lg h-full object-cover -z-10 opacity-60"
          />
          <h2 className="text-[40px] font-normal font-oxanium mb-6">Our Information</h2>

          {/* Phone Number */}
          <div className="flex items-center mb-4">
            <Phone className="text-yellow-500 mr-3" size={32} strokeWidth={2} />
            <div>
              <p className="text-xl font-grotesk font-semibold tracking-wider">904-290-3459</p>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-center mb-4">
            <MapPin className="text-yellow-500 mr-3" size={32} strokeWidth={2} />
            <div>
              <p className="text-xl font-grotesk font-semibold tracking-wider">5751 N Main St <br />
                Suite #108, <br />
                Jacksonville, FL 32208
              </p>
            </div>
          </div>

          {/* Hours */}
          <div className="flex items-center mb-6">
            <Clock className="text-yellow-500 mr-3" size={32} strokeWidth={2} />
            <div>
              <p className="text-xl font-grotesk font-semibold tracking-wider">
                <span className="font-bold font-poppins">Everyday:</span> 10:00 AM - 8:00 PM <br />
                {/* <span className="font-bold font-poppins">Sun:</span> 12:00 PM - 8:00 PM */}
              </p>
            </div>
          </div>
        </div>

        {/* Map */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d399.8839927706971!2d-81.65004248473093!3d30.375641192942126!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e5b1f5522ae43f%3A0x38c6fe019b5911a8!2sInhale%20Bay%20Smoke%20Shop!5e0!3m2!1sen!2sus!4v1731225942948!5m2!1sen!2sus"
          width="100%"
          height="370"
          style={{ border: 0, borderRadius: "0.75rem" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="shadow-lg w-full flex-grow min-h-[400px]"
        ></iframe>
      </div>
    </div>
  );
};

export default LocationMap;