"use client";
import { useState } from "react";
import { FaFileDownload, FaWhatsapp } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi"; // أيقونات المنيو

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-[100] w-[95%] max-w-7xl">
      {/* Main Navbar Container */}
      <div className="backdrop-blur-md bg-white/[0.03] border border-white/10 rounded-full px-6 py-3 flex items-center justify-between shadow-2xl">
        
        {/* 1. Logo (Left) */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center font-bold text-white shadow-[0_0_15px_rgba(37,99,235,0.4)] group-hover:scale-110 transition-transform">
            MG
          </div>
          <span className="hidden sm:block font-serif font-bold text-white tracking-wide">
            Mohamed Gamal
          </span>
        </div>

        {/* 2. Desktop Navigation (Center) - المختفية في الموبايل */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-gray-400 hover:text-blue-400 transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* 3. Actions (Right) */}
        <div className="flex items-center gap-3">
          {/* Resume & WhatsApp - Desktop only */}
          <div className="hidden lg:flex items-center gap-3">
            <a href="cv/cv.pdf" download className="text-xs text-gray-300 hover:text-white transition flex items-center gap-2 border border-white/10 px-4 py-2 rounded-full bg-white/5">
              <FaFileDownload /> Resume
            </a>
            <a href="https://wa.me/201122503776" target="_blank" className="text-xs bg-white text-black font-bold px-4 py-2 rounded-full hover:bg-blue-400 hover:text-white transition flex items-center gap-2">
              <FaWhatsapp className="text-green-600" /> Get in touch
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-2xl text-white p-1"
          >
            {isOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* 4. Mobile Menu Overlay (المنيو اللي بتفتح في الموبايل) */}
      <div className={`
        absolute top-16 left-0 right-0 md:hidden transition-all duration-300 ease-in-out
        ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none"}
      `}>
        <div className="mx-2 p-6 rounded-3xl bg-[#020617]/95 border border-white/10 backdrop-blur-xl shadow-2xl">
          <ul className="flex flex-col gap-6 text-center">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg text-gray-300 hover:text-blue-400 block"
                >
                  {link.name}
                </a>
              </li>
            ))}
            <hr className="border-white/5" />
            <div className="flex flex-col gap-4">
              <a href="cv/cv.pdf" className="flex items-center justify-center gap-2 text-white border border-white/10 py-3 rounded-2xl">
                <FaFileDownload /> Resume
              </a>
              <a href="https://wa.me/201122503776" className="flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-2xl font-bold">
                <FaWhatsapp /> WhatsApp
              </a>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;