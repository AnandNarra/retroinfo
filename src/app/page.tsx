"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CommoditiesShowcase from "@/components/CommoditiesShowcase";
import OnboardingMechanism from "@/components/OnboardingMechanism";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import RetailerApplicationModal from "@/components/RetailerApplicationModal";

export default function Home() {
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Main Top Header */}
      <Navbar onOpenApply={() => setIsApplyModalOpen(true)} />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* Full-Screen Autoplay Video Hero Section */}
        <Hero />

        {/* Loose Bulk Commodities Showcase */}
        <CommoditiesShowcase onOpenApply={() => setIsApplyModalOpen(true)} />

        {/* 4-Tier Field Verification & Onboarding Pipeline */}
        <OnboardingMechanism />

        {/* Contact Desk & Registered Office Details */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Retailer Application Modal (Stage I) */}
      <RetailerApplicationModal
        isOpen={isApplyModalOpen}
        onClose={() => setIsApplyModalOpen(false)}
      />
    </div>
  );
}
