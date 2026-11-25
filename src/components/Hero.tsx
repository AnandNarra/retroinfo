"use client";

import React, { useRef, useState, useEffect } from "react";
import { Volume2, VolumeX, Play, Pause } from "lucide-react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);



  return (
    <section className="relative w-full h-[calc(100vh-4.5rem)] min-h-[520px] overflow-hidden bg-black select-none flex items-center justify-center">
      {/* Full-Screen Autoplay Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"

      >
        <source src="/gemini_generated_video_5a356d16.mp4" type="video/mp4" />
        <source src="/videos/hero-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Cinematic Dark Overlay for Text Legibility */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />

      {/* Centered 2-Line Matter */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-4 pointer-events-none">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.85)]">
          Direct-from-Source B2B Grocery Supply
        </h1>
        <p className="text-base sm:text-xl md:text-2xl text-slate-100 font-medium max-w-3xl mx-auto leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
          Connecting upstream agricultural millers directly with neighborhood kiranas across AP &amp; Telangana.
        </p>
      </div>


    </section>
  );
}
