"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { MapPin, Mail, ArrowUpRight } from "lucide-react";
import navbarLogo from "@/public/logo/inhalebayLogo-nav1.svg";
import { motion } from "framer-motion";
import { slideDownVariant } from "@/lib/animation";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false); // Hide on scroll down
      } else {
        setIsVisible(true); // Show on scroll up
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`w-full sticky top-0 bg-black mx-auto flex justify-center items-center h-auto shadow-lg shadow-slate-800 z-[99] transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
    >
      <div className="w-full max-w-7xl mx-auto grid grid-cols-3">
        {/* Links */}
        <motion.div
          initial="offscreen"
          animate={"onscreen"}
          whileInView={"stay"}
          variants={slideDownVariant}
          className="flex justify-center items-center"
        >
          <div className="px-6 py-3 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-emerald-500 font-semibold text-md space-x-2 shadow-md shadow-green-700">
            <a
              href="/"
              className="group relative text-black transition-all duration-300 py-1.5 px-2 rounded-lg hover:bg-lime-500 hover:translate-x-1 flex justify-center items-center"
            >
              Home
              <ArrowUpRight className="transition-transform duration-300 opacity-0 group-hover:opacity-100 group-hover:-translate-y-1" strokeWidth={2} />
            </a>
            <a
              href="/bespoke"
              className="group relative text-black transition-all duration-300 py-1.5 px-2 rounded-lg hover:bg-lime-500 hover:translate-x-1 flex items-center"
            >
              Bespoke
              <ArrowUpRight className="transition-transform duration-300 opacity-0 group-hover:opacity-100 group-hover:-translate-y-1" strokeWidth={2} />
            </a>
            <a
              href="#deals"
              className="group relative text-black transition-all duration-300 py-1.5 px-2 rounded-lg hover:bg-lime-500 hover:translate-x-1 flex items-center"
            >
              Deals
              <ArrowUpRight className="transition-transform duration-300 opacity-0 group-hover:opacity-100 group-hover:-translate-y-1" strokeWidth={2} />
            </a>
          </div>
        </motion.div>

        {/* Logo */}
        <div className="flex justify-center">
          <a href="/" className="bg-black py-3.5 px-2 shadow-2xl">
            <Image src={navbarLogo} alt="Inhale Bay Logo" width={95} height={18} className="" />
          </a>
        </div>

        {/* Buttons */}
        <div className="flex justify-center items-center space-x-10 px-4">
          {/* Contact Us Button */}
          <motion.button
            initial="offscreen"
            animate={"onscreen"}
            whileInView={"stay"}
            variants={slideDownVariant}
            className="p-[3px] relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-lime-500 to-emerald-500 rounded-lg" />
            <a href="#contact" className="flex justify-center items-center px-4 py-2 space-x-2 bg-black rounded-[6px] relative group transition duration-300 font-semibold text-white hover:text-black hover:bg-transparent">
              <Mail className="w-5 h-5" strokeWidth={2} />
              <span>Contact</span>
            </a>
          </motion.button>

          {/* Map Button */}
          <motion.button
            initial="offscreen"
            animate={"onscreen"}
            whileInView={"stay"}
            variants={slideDownVariant}
            className="p-[3px] relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-lime-500 to-emerald-500 rounded-lg" />
            <a href="https://www.google.com/maps/place/Inhale+Bay+Smoke+Shop/@30.3758011,-81.6515435,18.1z/data=!4m6!3m5!1s0x88e5b1f5522ae43f:0x38c6fe019b5911a8!8m2!3d30.3756184!4d-81.6499491!16s%2Fg%2F11w8z4vl7w?entry=ttu&g_ep=EgoyMDI0MTEwNi4wIKXMDSoASAFQAw%3D%3D"
              target="_blank" rel="noopener noreferrer" className="flex justify-center items-center px-4 py-2 space-x-2 bg-black rounded-[6px] relative group transition duration-300 font-semibold text-white hover:text-black hover:bg-transparent"
            >
              <MapPin className="w-5 h-5" strokeWidth={2} />
              <span>Location</span>
            </a>
          </motion.button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;