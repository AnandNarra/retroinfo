"use client";

import React, { useState } from "react";
import {
  FileText,
  UserCheck,
  Building,
  KeyRound,
  CheckCircle2,
  ShieldCheck,
  Clock,
} from "lucide-react";

export default function OnboardingMechanism({ onOpenApply }: { onOpenApply?: () => void }) {
  const [activeStage, setActiveStage] = useState(0);

  const stages = [
    {
      stageNumber: "Stage I",
      title: "Digital Portal Application",
      badge: "Self-Service Submission (15 mins)",
      icon: <FileText className="w-6 h-6 text-blue-600" />,
      tagline: "Primary Store Credentials & Documentation",
      description:
        "The retail storekeeper submits their primary shop credentials, location coordinates, business license, and historical trade data through our website portal.",
      checklist: [
        "Store Name, Proprietor Identity & Phone Authentication",
        "Geographic GPS location coordinates in AP or Telangana",
        "GSTIN Number & Municipal Trade Registration Certificate",
        "Previous 6 months aggregate grocery procurement statements",
      ],
      turnaround: "Instant Submission confirmation with Unique Token",
    },
    {
      stageNumber: "Stage II",
      title: "In-Person Physical Store Inspection",
      badge: "On-Ground Verification (24-48 hrs)",
      icon: <UserCheck className="w-6 h-6 text-amber-600" />,
      tagline: "Field Verification Officer Visit",
      description:
        "An assigned Retro Infotech field verification officer visits the applicant's physical commercial storefront to inspect premise permanence, commercial signboard display, operational stocking capacity, and business vintage.",
      checklist: [
        "Premise Permanence check (Owned / Registered Lease agreement)",
        "Commercial Signboard display & active customer walk-in inspection",
        "Operational dry stocking storage capacity (minimum pallet space)",
        "Proof of uninterrupted continuous retail operations (min. 2 years)",
      ],
      turnaround: "Field Officer visit scheduled within 48 business hours",
    },
    {
      stageNumber: "Stage III",
      title: "Financial & Statutory Audit",
      badge: "Compliance Desk Review (24 hrs)",
      icon: <Building className="w-6 h-6 text-indigo-600" />,
      tagline: "Turnover & Regulatory Validation",
      description:
        "Our compliance desk examines GST filing status, active municipal trade licenses, and past banking transaction statements to validate continuous commercial turnover requirements.",
      checklist: [
        "Verification of active GSTIN status & clean filing history",
        "Validation of ₹25 Lakhs+ monthly turnover benchmark via bank statements",
        "Municipal shop establishment statutory license check",
        "Proprietor PAN & commercial credit suitability check",
      ],
      turnaround: "Automated GST validation & Risk desk clearance",
    },
    {
      stageNumber: "Stage IV",
      title: "Authorized Account Activation",
      badge: "Credential Issuance & Access",
      icon: <KeyRound className="w-6 h-6 text-emerald-600" />,
      tagline: "Wholesale Portal Gateway Unlocked",
      description:
        "Upon formal clearance by our verification executive and branch management, authenticated B2B procurement credentials are provided to the storekeeper.",
      checklist: [
        "Formal clearance issued by Branch Management & Verification Lead",
        "Issuance of secure encrypted login credentials & storekeeper ID",
        "Instant access to live wholesale pricing & volume price tiers",
        "Dedicated Relationship Manager assigned for scheduled doorstep supply",
      ],
      turnaround: "Instant portal access upon executive branch sign-off",
    },
  ];

  return (
    <section id="onboarding" className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider">
            Employee-Assisted Verification
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Four-Tier Mandatory Onboarding Pipeline
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Unlike open public e-commerce websites, Retro Infotech maintains a closed, gated commercial trading network. No retailer can view wholesale pricing or place orders without undergoing on-ground verification.
          </p>
        </div>

        {/* Desktop Step Progression Bar */}
        <div className="hidden lg:grid grid-cols-4 gap-4 mb-10">
          {stages.map((stg, i) => (
            <button
              key={i}
              onClick={() => setActiveStage(i)}
              className={`p-5 rounded-2xl border text-left transition-all ${
                activeStage === i
                  ? "bg-blue-50/60 border-blue-500 shadow-sm ring-1 ring-blue-500/20"
                  : "bg-white border-slate-200 hover:border-slate-300"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                  {stg.stageNumber}
                </span>
                <span
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                    activeStage === i
                      ? "bg-blue-600 text-white"
                      : "bg-slate-100 text-slate-500"
                  }`}
                >
                  {i + 1}
                </span>
              </div>
              <h3 className="text-sm font-bold text-slate-900 leading-snug">
                {stg.title}
              </h3>
              <p className="text-xs text-slate-500 mt-1 line-clamp-1">
                {stg.tagline}
              </p>
            </button>
          ))}
        </div>

        {/* Active Stage Detailed Card */}
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-bold uppercase tracking-wider">
                  {stages[activeStage].stageNumber}
                </span>
                <span className="text-xs font-semibold text-slate-600 bg-white border border-slate-200 px-3 py-1 rounded-full">
                  {stages[activeStage].badge}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                {stages[activeStage].title}
              </h3>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {stages[activeStage].description}
              </p>

              {/* Checklist */}
              <div className="space-y-2.5 pt-2">
                <p className="text-xs font-bold text-slate-800 uppercase tracking-wide">
                  Key Verification Checkpoints:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {stages[activeStage].checklist.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 text-xs text-slate-700 bg-white p-2.5 rounded-xl border border-slate-200/80"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Turnaround Box */}
              <div className="flex items-center gap-2 text-xs text-slate-600 bg-blue-50/70 border border-blue-100 p-3 rounded-xl">
                <Clock className="w-4 h-4 text-blue-600 shrink-0" />
                <span>
                  <strong>Standard SLA:</strong> {stages[activeStage].turnaround}
                </span>
              </div>
            </div>

            {/* Right side prompt */}
            <div className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl p-6 space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                  {stages[activeStage].icon}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    Gated Network Integrity
                  </h4>
                  <p className="text-xs text-slate-500">
                    Zero retail pricing leakages
                  </p>
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                By requiring an authorized on-ground field personnel visit, Retro Infotech ensures that genuine wholesale commercial pricing remains exclusive to qualifying physical storefronts.
              </p>

              <div className="pt-2 border-t border-slate-100 space-y-3">
                <button
                  onClick={onOpenApply}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-blue-600 text-white font-semibold text-xs hover:bg-blue-700 transition-colors shadow-xs"
                >
                  <ShieldCheck className="w-4 h-4 text-blue-200" />
                  <span>Initiate Stage I Application</span>
                </button>

                <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
                  <span>Questions about field visits?</span>
                  <a
                    href="tel:+918555020890"
                    className="font-medium text-blue-600 hover:underline"
                  >
                    +91 8555020890
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Mobile Stage Selector Switcher */}
        <div className="lg:hidden mt-6 flex justify-between gap-2">
          {stages.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveStage(i)}
              className={`flex-1 py-2 text-xs font-semibold rounded-lg border text-center ${
                activeStage === i
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-slate-700 border-slate-200"
              }`}
            >
              Stage {i + 1}
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}
