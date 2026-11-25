"use client";

import React, { useRef, useState, useEffect } from "react";
import { Volume2, VolumeX, Play, Pause, Sparkles } from "lucide-react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  // Guarantee seamless autoplay across modern browsers
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        setIsPlaying(false);
      });
    }
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    const newMuted = !isMuted;
    videoRef.current.muted = newMuted;
    setIsMuted(newMuted);
  };

  return (
    <section className="relative w-full h-[calc(100vh-4.5rem)] min-h-[520px] overflow-hidden bg-slate-950 select-none flex items-center justify-center">
      {/* Full-Screen Autoplay Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source src="/gemini_generated_video_5a356d16.mp4" type="video/mp4" />
        <source src="/videos/hero-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Cinematic Vignette Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-black/30 to-slate-950/60 pointer-events-none" />

      {/* Centered Glassmorphic Typography Card */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <div className="rounded-2xl sm:rounded-3xl bg-slate-950/60 backdrop-blur-xl border border-white/15 p-6 sm:p-10 shadow-[0_20px_70px_rgba(0,0,0,0.65)] ring-1 ring-white/10 space-y-3 sm:space-y-4">
          
          {/* Refined Brand Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-200 text-[11px] sm:text-xs font-medium tracking-wide">
            <Sparkles className="w-3 h-3 text-amber-300" />
            <span>Direct Sourcing B2B Network</span>
            <span className="text-blue-400/60">•</span>
            <span className="text-slate-300 font-normal">AP &amp; Telangana</span>
          </div>

          {/* Line 1: Refined Headline with Gradient Accent */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.2]">
            Direct-from-Source{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-amber-300">
              B2B Grocery Supply
            </span>
          </h1>

          {/* Line 2: Elegant High-Legibility Subtitle */}
          <p className="text-xs sm:text-base md:text-lg text-slate-200/90 font-normal max-w-2xl mx-auto leading-relaxed">
            Connecting upstream agricultural millers directly with neighborhood kirana stores across AP &amp; Telangana.
          </p>

        </div>
      </div>

      {/* Floating Audio & Playback Controls in Bottom-Right */}
      <div className="absolute bottom-6 right-6 z-20 flex items-center gap-2.5">
        <button
          onClick={togglePlay}
          className="p-2.5 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-md border border-white/20 transition-all shadow-md hover:scale-105 active:scale-95 cursor-pointer"
          title={isPlaying ? "Pause Video" : "Play Video"}
          aria-label={isPlaying ? "Pause Video" : "Play Video"}
        >
          {isPlaying ? (
            <Pause className="w-4 h-4 text-white" />
          ) : (
            <Play className="w-4 h-4 text-white fill-white ml-0.5" />
          )}
        </button>

        <button
          onClick={toggleMute}
          className="p-2.5 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-md border border-white/20 transition-all shadow-md hover:scale-105 active:scale-95 cursor-pointer"
          title={isMuted ? "Unmute Audio" : "Mute Audio"}
          aria-label={isMuted ? "Unmute Audio" : "Mute Audio"}
        >
          {isMuted ? (
            <VolumeX className="w-4 h-4 text-slate-300" />
          ) : (
            <Volume2 className="w-4 h-4 text-emerald-400" />
          )}
        </button>
      </div>
    </section>
  );
}
