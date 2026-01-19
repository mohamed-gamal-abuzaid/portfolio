"use client";
import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";

type CardProps = {
  images?: string[]; 
  title: string;
  description: string;
  tags: string[];
  link: string;
  video?: string;   
};

function Card({ images = [], title, description, tags, link, video }: CardProps) {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    if (!video && images && images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [images, video]);

  return (
    <div className="group relative bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-blue-500/40 transition-all duration-700 shadow-2xl">
      
      <div className="relative h-64 overflow-hidden bg-gray-900/50">
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent z-10 opacity-60" />
        
        {video ? (
          <video
            src={video}
            autoPlay
            muted
            loop
            playsInline
            /* التعديل هنا: grayscale-0 للموبايل و md:grayscale للشاشات الكبيرة */
            className="w-full h-full object-cover grayscale-0 md:grayscale md:group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-in-out"
          />
        ) : 
        images && images.length > 0 ? (
          <img
            /* التعديل هنا أيضاً */
            className="w-full h-full object-cover grayscale-0 md:grayscale md:group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-in-out"
            src={images[currentImage]}
            alt={title}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-700 italic">
            No Preview Available
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-8 relative">
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.slice(0, 3).map((tag) => (
            <span key={tag} className="text-[10px] uppercase tracking-[0.15em] font-medium text-blue-400/80">
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="text-2xl font-serif font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
          {title}
        </h3>
        
        <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-2 font-light">
          {description}
        </p>

        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-white border-b border-white/20 pb-1 hover:border-blue-500 transition-all group/link"
        >
          View Project <FaArrowRight className="group-hover/link:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  );
}

export default Card;