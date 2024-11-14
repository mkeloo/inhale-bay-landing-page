import React from "react";
import Image from "next/image";
import { MapPin, Mail } from "lucide-react";
import navbarLogo from "@/public/logo/inhalebayLogo-nav1.svg";
import VideoPlayer from "@/components/ReusableComponents/VideoPlayer";

const heroBgVideo = "/assets/hero/hero-bg-video.mp4";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative h-[40vh] w-full text-white py-8 px-6 flex flex-col justify-between">
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
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
        {/* Logo */}
        <div className="w-1/3 flex items-center justify-start">
          <div className="bg-black px-4 py-2 rounded-xl shadow-2xl flex flex-col items-center justify-center ">
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
        <div className="w-2/3 flex items-start justify-between gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#deals" className="hover:underline">
                  Deals
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:underline">
                  Testimonials
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
                <a href="mailto:info@example.com" className="hover:underline">
                  info@example.com
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
                <a href="#terms" className="hover:underline">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#privacy" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 pt-4 text-center">
        <p className="text-md text-gray-400">
          © {currentYear} Inhale Bay. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
