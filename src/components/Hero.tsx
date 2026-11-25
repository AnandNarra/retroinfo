"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
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

      {/* Dark Overlay (Matching Jumbotail Reference) */}
      <div className="absolute inset-0 bg-black/55 pointer-events-none" />

      {/* Centered Jumbotail-Style Typography Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-4 sm:space-y-6 pointer-events-none">
        {/* Brand Logo in Crisp Monochrome White */}
        <div className="flex items-center justify-center">
          <div className="relative h-14 w-52 sm:h-20 sm:w-72 brightness-0 invert drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]">
            <Image
              src="/retro-logo.png"
              alt="Retro Infotech"
              fill
              priority
              className="object-contain"
            />
          </div>
        </div>

        {/* Line 1: Primary B2B Marketplace Statement */}
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[34px] text-white font-light tracking-wide max-w-4xl mx-auto leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.7)]">
          India&apos;s Leading Direct-from-Source B2B Marketplace for Food and Grocery
        </h1>

        {/* Line 2: Tagline / Regional Scope */}
        <p className="text-xs sm:text-sm md:text-base text-white/80 font-light tracking-widest uppercase drop-shadow-[0_1px_8px_rgba(0,0,0,0.7)]">
          Direct Farmgate &bull; Zero Mandi Middlemen &bull; Andhra Pradesh &amp; Telangana
        </p>
      </div>


    </section>
  );
}
