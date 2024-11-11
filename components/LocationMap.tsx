"use client";
import React from "react";
import Image from "next/image";
import ContactForm from "./ContactForm";

const locationImage = "/assets/location/LocationImageS.jpg";

const LocationMap = () => {
  return (
    <div className="w-full h-[100vh]] flex flex-col md:flex-row items-start justify-center gap-8 px-4 md:px-12 py-8">
      {/* Location Details & Contact Form */}
      <div className="w-full md:w-1/2 bg-gray-100 p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-emerald-600 mb-4">
          Inhale Bay Smoke Shop
        </h2>
        <p className="text-lg mb-2 text-gray-700">
          123 Smoke Avenue, Jacksonville, FL 32256
        </p>
        <p className="text-lg mb-2 text-gray-700">
          Hours: Mon - Sat, 10:00 AM - 9:00 PM | Sun, 12:00 PM - 6:00 PM
        </p>
        <p className="text-lg mb-6 text-gray-700">
          Contact: (123) 456-7890 |{" "}
          <a
            href="mailto:info@inhalebay.com"
            className="text-blue-600 underline hover:text-blue-800 transition duration-200"
          >
            info@inhalebay.com
          </a>
        </p>

        <ContactForm />
      </div>

      {/* Map & Location Image */}
      <div className="w-full md:w-1/2 flex flex-col gap-6 items-center md:items-start">
        {/* Map */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d399.8839927706971!2d-81.65004248473093!3d30.375641192942126!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e5b1f5522ae43f%3A0x38c6fe019b5911a8!2sInhale%20Bay%20Smoke%20Shop!5e0!3m2!1sen!2sus!4v1731225942948!5m2!1sen!2sus"
          width="100%"
          height="400"
          style={{ border: 0, borderRadius: "0.75rem" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="shadow-lg"
        ></iframe>

        {/* Location Image */}
        <div className="w-full">
          <Image
            src={locationImage}
            alt="Location Image"
            layout="responsive"
            width={600}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default LocationMap;
