"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  Menu,
  X,
  ArrowRight,
} from "lucide-react";

export default function Navbar({ onOpenApply }: { onOpenApply?: () => void }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)]">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-4">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center shrink-0 group py-1">
          <div className="relative h-10 w-40 sm:w-48 flex items-center">
            <Image
              src="/retro-logo.png"
              alt="Retro Infotech Private Limited"
              width={220}
              height={52}
              priority
              className="object-contain h-full w-auto transition-transform group-hover:scale-[1.02]"
            />
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-7 text-[13.5px] font-medium text-slate-600">
          <Link
            href="/#commodities"
            className="hover:text-blue-600 transition-colors whitespace-nowrap py-1"
          >
            Commodities
          </Link>
          <Link
            href="/#onboarding"
            className="hover:text-blue-600 transition-colors whitespace-nowrap py-1"
          >
            Verification
          </Link>
          <Link
            href="/#contact"
            className="hover:text-blue-600 transition-colors whitespace-nowrap py-1"
          >
            Contact
          </Link>
        </div>

        {/* Desktop Action CTAs */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenApply}
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2.5 rounded-lg bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 transition-all shadow-sm shadow-blue-500/20 whitespace-nowrap"
          >
            <ShieldCheck className="w-4 h-4 text-blue-200 shrink-0" />
            <span>Apply for Access</span>
            <ArrowRight className="w-3.5 h-3.5 shrink-0" />
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={onOpenApply}
            className="text-xs font-semibold px-3 py-2 rounded-lg bg-blue-600 text-white whitespace-nowrap shadow-xs"
          >
            Apply
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-600 hover:text-slate-900 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-5 shadow-lg animate-in slide-in-from-top-2">
          <div className="flex flex-col gap-3.5 text-sm font-medium text-slate-700">
            <Link
              href="/#commodities"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-blue-600 border-b border-slate-100"
            >
              Bulk Commodities
            </Link>
            <Link
              href="/#onboarding"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-blue-600 border-b border-slate-100"
            >
              4-Tier Field Verification
            </Link>
            <Link
              href="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-blue-600"
            >
              Contact Desk
            </Link>

            <div className="pt-3 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenApply?.();
                }}
                className="w-full text-center py-3 bg-blue-600 text-white rounded-lg font-semibold text-xs shadow-sm flex items-center justify-center gap-2"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>Apply for Retailer Access</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
