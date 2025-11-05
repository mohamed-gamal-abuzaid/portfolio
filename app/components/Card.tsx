"use client";

import { useEffect, useState } from "react";

type CardProps = {
  images: string[];
  title: string;
  description: string;
  tags: string[];
  link: string;
};

function Card({ images, title, description, tags, link }: CardProps) {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img
          className="w-full transition-all duration-500"
          src={images[currentImage]}
          alt={title}
        />
        <div className="px-6 py-4 bg-amber-200">
          <div className="font-bold text-xl mb-2 text-black">{title}</div>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
        <div className="px-6 pt-4 pb-2 bg-amber-50 h-27">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              #{tag}
            </span>
          ))}
        </div>
      </a>
    </div>
  );
}
export default Card;
