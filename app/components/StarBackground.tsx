"use client";

import React, { useRef, useEffect } from "react";

interface Star {
  x: number;
  y: number;
  radius: number;
  vx: number;
  vy: number;
}

const StarBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const stars: Star[] = [];
    const numStars = 1000; 
    const speedScale = 0.2; 

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars(); 
    };

    const initStars = () => {
      stars.length = 0;
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.5, 
          vx: (Math.random() - 0.5) * speedScale, 
          vy: (Math.random() - 0.5) * speedScale, 
        });
      }
    };

    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height); 
      ctx.fillStyle = "rgba(255, 255, 255, 0.8)"; 

      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();

        star.x += star.vx;
        star.y += star.vy;

        if (star.x < 0) star.x = canvas.width;
        if (star.x > canvas.width) star.x = 0;
        if (star.y < 0) star.y = canvas.height;
        if (star.y > canvas.height) star.y = 0;
      });

      requestAnimationFrame(animate); 
    };

    resizeCanvas();
    animate();
    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-50 pointer-events-none opacity-60"
    />
  );
};

export default StarBackground;