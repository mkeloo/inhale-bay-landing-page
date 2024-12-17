"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { MapPin, Mail, ArrowUpRight, Menu, X } from "lucide-react";
import navbarLogo from "@/public/logo/inhalebayLogo-nav1.svg";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          if (currentScrollY === 0) {
            setIsVisible(true);
          } else if (currentScrollY > lastScrollY) {
            setIsVisible(false); // Hide on scroll down
          } else {
            setIsVisible(true); // Show on scroll up
          }

          setLastScrollY(currentScrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`w-full sticky top-0 bg-black mx-auto h-auto shadow-lg shadow-slate-800 z-[99] transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
    >
      <div className="w-full max-w-7xl mx-auto flex justify-between items-center px-6 py-4">




        {/* Links for large screens */}
        <div className="hidden lg:flex items-center space-x-10">
          <div className="px-6 py-3 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-emerald-500 font-semibold text-md space-x-2 shadow-md shadow-green-700">
            <a
              href="/"
              className="group relative text-black transition-all duration-300 py-1.5 px-2 rounded-lg hover:bg-lime-500 hover:translate-x-1 flex justify-center items-center"
            >
              Home
              <ArrowUpRight
                className="transition-transform duration-300 opacity-0 group-hover:opacity-100 group-hover:-translate-y-1"
                strokeWidth={2}
              />
            </a>
            <a
              href="#flowerDeals"
              className="group relative text-black transition-all duration-300 py-1.5 px-2 rounded-lg hover:bg-lime-500 hover:translate-x-1 flex items-center"
            >
              THC-A Buds
              <ArrowUpRight
                className="transition-transform duration-300 opacity-0 group-hover:opacity-100 group-hover:-translate-y-1"
                strokeWidth={2}
              />
            </a>
            <a
              href="#vapeDeals"
              className="group relative text-black transition-all duration-300 py-1.5 px-2 rounded-lg hover:bg-lime-500 hover:translate-x-1 flex items-center"
            >
              Vapes
              <ArrowUpRight
                className="transition-transform duration-300 opacity-0 group-hover:opacity-100 group-hover:-translate-y-1"
                strokeWidth={2}
              />
            </a>
          </div>
        </div>

        <div className="lg:hidden">

        </div>

        {/* Logo */}
        <div className="flex items-center">
          <a href="/" className="bg-black py-2 px-2 shadow-2xl">
            <Image
              src={navbarLogo}
              alt="Inhale Bay Logo"
              width={95}
              height={18}
              priority
            />
          </a>
        </div>

        {/* Hamburger Menu for small & medium screens */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
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
          <button className="p-[3px] relative">
            <div className="absolute inset-0 bg-gradient-to-r from-lime-500 to-emerald-500 rounded-lg" />
            <a
              href="#contact"
              className="flex justify-center items-center px-4 py-2 space-x-2 bg-black rounded-[6px] relative group transition duration-300 font-semibold text-white hover:text-black hover:bg-transparent"
            >
              <Mail className="w-5 h-5" strokeWidth={2} />
              <span>Contact</span>
            </a>
          </button>
          {/* Location */}
          <button className="p-[3px] relative">
            <div className="absolute inset-0 bg-gradient-to-r from-lime-500 to-emerald-500 rounded-lg" />
            <a
              href="https://www.google.com/maps/place/Inhale+Bay+Smoke+Shop/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center px-4 py-2 space-x-2 bg-black rounded-[6px] relative group transition duration-300 font-semibold text-white hover:text-black hover:bg-transparent"
            >
              <MapPin className="w-5 h-5" strokeWidth={2} />
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