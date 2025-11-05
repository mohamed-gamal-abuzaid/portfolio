"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { DiJavascript } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import { AiOutlineJava } from "react-icons/ai";
import { SiSpringboot } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

export default function TopPage() {
  const texts = [
    "Welcome in my Portfolio 👋 ",
    "Front-End Developer ⚛️",
    "Back-end Developer ☕",
    "Full-Stack Developer 🌞",
  ];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < texts[index].length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + texts[index][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCharIndex(0);
        setText("");
        setIndex((prev) => (prev + 1) % texts.length);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, index, texts]);

  return (
    <>
      <Image
        src="/port.PNG"
        alt="profile"
        width={250}
        height={250}
        className="rounded-full mx-auto items-center mt-32 border-4 border-white"
      />
      <div className="text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-4xl  mx-auto items-center mt-12 h-40 font-bold text-white w-[50%]">
        Hi I'm Mohamed Gamal : {text}
        <span className="cursor">|</span>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-center mt-8 w-full px-4">
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/201122503776"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 text-sm sm:text-base lg:text-lg font-semibold text-black bg-white px-5 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-full hover:bg-gray-200 transition shadow-md w-full sm:w-auto"
        >
          <FaWhatsapp className="text-base sm:text-lg text-green-500" />
          Get in touch
        </a>

        {/* More About Me Button */}
        <button className="flex items-center justify-center gap-2 text-sm sm:text-base lg:text-lg font-semibold text-black bg-white px-5 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-full hover:bg-gray-200 transition shadow-md w-full sm:w-auto">
          More About Me
          <FaArrowRightLong className="text-base sm:text-lg" />
        </button>
      </div>
      <div className="flex flex-wrap text-white font-bold mx-auto items-center justify-center gap-4 mt-12 h-auto w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%]">
        <FaReact className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14" />
        <RiNextjsFill className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14" />
        <DiJavascript className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14" />
        <SiTypescript className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14" />
        <AiOutlineJava className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14" />
        <SiSpringboot className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14" />
        <FaGithub className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14" />
      </div>
    </>
  );
}
