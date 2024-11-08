"use client";
import React from "react";
import Image from "next/image";
import { MapPin, Mail } from "lucide-react";
import navbarLogo from "@/public/logo/inhalebayLogo-nav1.svg";

const Navbar = () => {
  return (
    <nav className="w-full sticky top-0 bg-black  mx-auto flex justify-center items-center h-auto   shadow-lg shadow-slate-800 z-[99]">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-3 ">
        {/* Links */}
        <div className="flex justify-center items-center ">
          <div className="px-8 py-4 rounded-full bg-gradient-to-r from-lime-500 to-emerald-500 font-semibold text-md space-x-8 shadow-md shadow-green-700">
            <a
              href="/"
              className="text-black transition-colors duration-300 p-2 rounded-lg hover:text-green-500 hover:bg-blue-600"
            >
              Home
            </a>
            <a
              href="/bespoke"
              className="text-black transition-colors duration-300 p-2 rounded-lg hover:text-green-500 hover:bg-blue-600"
            >
              Bespoke
            </a>
            <a
              href="#deals"
              className="text-black transition-colors duration-300 p-2 rounded-lg hover:text-green-500 hover:bg-blue-600"
            >
              Deals
            </a>
          </div>
        </div>

        {/* Logo */}
        <div className="flex justify-center">
          <a href="/">
            <Image
              src={navbarLogo}
              alt="Inhale Bay Logo"
              width={95}
              height={18}
              className="my-4"
            />
          </a>
        </div>

        {/* Buttons */}
        <div className="flex justify-center items-center space-x-10 px-4">
          {/* Contact Us Button */}
          <button className="p-[3px] relative">
            <div className="absolute inset-0 bg-gradient-to-r from-lime-500 to-emerald-500 rounded-lg" />
            <a
              href="#contact"
              className="flex justify-center items-center px-4 py-2 space-x-2 bg-black rounded-[6px]  relative group transition duration-300 font-semibold text-white hover:text-black hover:bg-transparent"
            >
              <Mail className="w-5 h-5" strokeWidth={2} />
              <span>Contact</span>
            </a>
          </button>

          {/* Map Button */}
          <button className="p-[3px] relative">
            <div className="absolute inset-0 bg-gradient-to-r from-lime-500 to-emerald-500 rounded-lg" />
            <a
              href="#location"
              className="flex justify-center items-center px-4 py-2 space-x-2 bg-black rounded-[6px] relative group transition duration-300 font-semibold text-white hover:text-black hover:bg-transparent"
            >
              <MapPin className="w-5 h-5" strokeWidth={2} />
              <span>Location</span>
            </a>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
