"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { MapPin, Mail, ArrowUpRight, Menu, X } from "lucide-react";
import navbarLogo from "@/public/logo/inhalebayLogo-nav1.svg";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu

  // New state to control logo size
  const [logoSize, setLogoSize] = useState({ width: 95, height: 18 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      // If mobile menu is open, don't update navbar visibility or logo size
      if (isMenuOpen) return;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          // Update navbar visibility
          if (currentScrollY === 0) {
            setIsVisible(true);
          } else if (currentScrollY > lastScrollY) {
            setIsVisible(false); // Hide on scroll down
          } else {
            setIsVisible(true); // Show on scroll up
          }
          setLastScrollY(currentScrollY);

          // Update logo size: if at the very top, use original size; otherwise, reduce the size
          if (currentScrollY === 0) {
            setLogoSize({ width: 95, height: 18 });
          } else {
            setLogoSize({ width: 65, height: 14 });
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isMenuOpen]);


  return (
    <nav
      className={`w-full sticky top-0 bg-black/75 backdrop-blur-md mx-auto h-auto shadow-lg shadow-slate-800 z-[99] transition-transform duration-200 ${isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
    >
      <div className="w-full max-w-7xl mx-auto flex justify-between items-center px-6 py-2 md:py-4">




        {/* Links for large screens */}
        <div className="hidden lg:flex justify-center items-center space-x-10 px-4">
          {/* Contact Us */}
          <button className="w-32 p-[3px] relative group">
            <a
              href="#flowerDeals"
              className="flex justify-center items-center group-hover:scale-105 px-4 py-2 space-x-2 bg-gradient-to-r from-blue-500 to-emerald-500 hover:from-pink-600 hover:to-red-600 text-black hover:text-white shadow-md shadow-cyan-400 hover:shadow-pink-500 rounded-xl relative group transition duration-200 font-semibold"
            >
              <span>Flower</span>
            </a>
          </button>
          {/* Location */}
          <button className="w-32 p-[3px] relative group">
            <a
              href="#flowerDeals"
              className="flex justify-center items-center group-hover:scale-105 px-4 py-2 space-x-2 bg-gradient-to-r from-blue-500 to-emerald-500 hover:from-pink-600 hover:to-red-600 text-black hover:text-white shadow-md shadow-cyan-400 hover:shadow-pink-500 rounded-xl relative group transition duration-200 font-semibold "
            >
              <span>Vapes</span>
            </a>
          </button>
        </div>

        {/* Placeholder block for positioning */}
        {/* <div className="lg:hidden">

        </div> */}

        {/* Logo */}
        <div className="flex items-center">
          <a href="/" className="bg-black py-2 px-2 shadow-2xl rounded-2xl">
            <Image
              src={navbarLogo}
              alt="Inhale Bay Logo"
              width={logoSize.width}
              height={logoSize.height}
              priority={true}
              loading="eager"
              onLoad={() => setIsLoaded(true)}
              className={`${!isLoaded ? "filter blur-lg" : "filter blur-0"
                } transition-all duration-500`}
            />
          </a>
        </div>

        {/* Hamburger Menu for small & medium screens */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            <span className="sr-only">Hamburger Menu Open & Close buttons</span>
            {isMenuOpen ? (
              <X size={32} strokeWidth={2} />
            ) : (
              <Menu size={32} strokeWidth={2} />
            )}
          </button>
        </div>

        {/* Buttons for large screens */}
        <div className="hidden lg:flex justify-center items-center space-x-10 px-4">
          {/* Contact Us */}
          <button className="p-[3px] relative group">
            <a
              href="#contact"
              className="flex justify-center items-center group-hover:scale-105 px-4 py-2 space-x-2 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-pink-600 hover:to-red-600 text-black hover:text-white shadow-md shadow-yellow-400 hover:shadow-pink-500 rounded-xl relative group transition duration-200 font-semibold"
            >
              <Mail className="w-6 h-6" strokeWidth={2} />
              <span>Contact</span>
            </a>
          </button>
          {/* Location */}
          <button className="p-[3px] relative group">
            <a
              href="https://www.google.com/maps/place/Inhale+Bay+Smoke+Shop/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center group-hover:scale-105 px-4 py-2 space-x-2 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-pink-600 hover:to-red-600 text-black hover:text-white shadow-md shadow-yellow-400 hover:shadow-pink-500 rounded-xl relative group transition duration-200 font-semibold "
            >
              <MapPin className="w-6 h-6" strokeWidth={2} />
              <span>Location</span>
            </a>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden w-full bg-black py-4 px-6 ">
          <div className="w-full space-y-4 flex flex-col items-center justify-start">
            <a href="/" className="block text-white text-lg hover:bg-lime-500 duration-200  py-2 px-3 rounded-lg">
              Home
            </a>
            <a href="#flowerDeals" className="block text-white text-lg hover:bg-lime-500 py-2 px-3 rounded-lg">
              THC-A Buds
            </a>
            <a href="#vapeDeals" className="block text-white text-lg hover:bg-lime-500 py-2 px-3 rounded-lg">
              Vapes
            </a>
            <a href="#contact" className="block text-white text-lg hover:bg-lime-500 py-2 px-3 rounded-lg">
              Contact
            </a>
            <a
              href="https://www.google.com/maps/place/Inhale+Bay+Smoke+Shop/"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-white text-lg hover:bg-lime-500 py-2 px-3 rounded-lg"
            >
              Location
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;