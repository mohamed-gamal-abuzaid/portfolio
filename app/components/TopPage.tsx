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
import { LiaTelegram } from "react-icons/lia";
import { FaArrowRightLong } from "react-icons/fa6";

export default function TopPage() {
  const texts = [
    "Welcome in my Portfolio 👋 ",
    "Front-End Developer ⚛️",
    "Backend Developer ☕",
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
      <div className="flex text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-4xl mx-auto items-center font-bold text-white w-[50%] gap-4 justify-center">
        <button className="flex items-center gap-2 text-sm text-black bg-white px-6 py-3 rounded-full hover:bg-gray-200 transition">
          <LiaTelegram />
          Get in touch
        </button>
        <button className="flex items-center gap-2 text-sm text-black bg-white px-6 py-3 rounded-full hover:bg-gray-200 transition">
          More About Me
          <FaArrowRightLong />
        </button>
      </div>
      <div className="flex text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-4xl mx-auto items-center mt-12 h-40 font-bold text-white w-[50%] gap-4 justify-center">
        <FaReact className="ml-4" />
        <RiNextjsFill className="ml-4" />
        <DiJavascript className="ml-4" />
        <SiTypescript className="ml-4" />
        <AiOutlineJava className="ml-4" />
        <SiSpringboot className="ml-4" />
        <FaGithub className="ml-4" />
      </div>
    </>
  );
}
