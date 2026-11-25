"use client";

import React, { useRef, useState, useEffect } from "react";
import { Volume2, VolumeX, Play, Pause } from "lucide-react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section className="relative w-full h-[calc(100vh-4.5rem)] min-h-[500px] overflow-hidden bg-black select-none">
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


    </section>
  );
}
