import React from "react";
import Image from "next/image";
import { MapPin, Mail } from "lucide-react";
import navbarLogo from "@/public/logo/inhalebayLogo-nav1.svg";
import VideoPlayer from "@/components/ReusableComponents/VideoPlayer";

const heroBgVideo = "/assets/hero/hero-bg-video.mp4";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative h-auto lg:h-[40vh] w-full text-white py-8 px-6 flex flex-col justify-between">
      {/* Background Video */}
      <VideoPlayer
        src={heroBgVideo}
        className="absolute inset-0 w-full h-full object-cover z-[-10] opacity-50"
        autoPlay
        loop
        playsInline
        muted
      />

      {/* Top Section */}
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8">
        {/* Logo */}
        <div className="w-full lg:w-1/3 flex items-center justify-center lg:justify-start mb-6 lg:mb-0">
          <div className="bg-black px-4 py-2 rounded-xl shadow-2xl flex flex-col items-center justify-center">
            <Image
              src={navbarLogo}
              alt="Inhale Bay Logo"
              width={120}
              height={25}
              className="my-4"
            />
            <p>Inhale Bay Inc.</p>
          </div>
        </div>

        {/* Main Navigation Links */}
        <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="grid grid-cols-2 gap-2">
              <li>
                <a href="#home" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#flowerDeals" className="hover:underline">
                  THC-A Buds
                </a>
              </li>
              <li>
                <a href="#vapeDeals" className="hover:underline">
                  Vapes
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:underline">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:underline">
                  Contact
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:underline">
                  Gallery
                </a>
              </li>
            </ul>
          </div>

          {/* Contact and Location */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="mr-2 w-5 h-5" />
                <a
                  href="mailto:inhalebaysmokeshop@gmail.com"
                  className="hover:underline"
                >
                  Email Us
                </a>
              </li>
              <li className="flex items-center">
                <MapPin className="mr-2 w-5 h-5" />
                <a
                  href="https://www.google.com/maps/place/Inhale+Bay+Smoke+Shop/@30.3758011,-81.6515435,18.1z/data=!4m6!3m5!1s0x88e5b1f5522ae43f:0x38c6fe019b5911a8!8m2!3d30.3756184!4d-81.6499491!16s%2Fg%2F11w8z4vl7w?entry=ttu&g_ep=EgoyMDI0MTEwNi4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Our Location
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="/terms-conditions" className="hover:underline">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="/privacy-policy" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 pt-4 mt-4 text-center">
        <p className="text-sm md:text-md text-gray-400">
          © {new Date().getFullYear()} Inhale Bay. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
