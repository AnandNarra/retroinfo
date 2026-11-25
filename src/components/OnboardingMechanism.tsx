"use client";

import React from "react";
import {
  FileText,
  UserCheck,
  Building,
  KeyRound,
  CheckCircle2,
  ShieldCheck,
  Clock,
} from "lucide-react";

export default function OnboardingMechanism() {
  const stages = [
    {
      step: "01",
      stageNumber: "Stage I",
      title: "Digital Portal Application",
      badge: "15 Mins",
      badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
      iconBg: "bg-blue-50 text-blue-600",
      icon: <FileText className="w-5 h-5" />,
      description:
        "Submit primary store credentials, geographic GPS coordinates, GSTIN, and municipal trade license through our online portal.",
      checkpoints: [
        "Proprietor Phone & Identity Auth",
        "GSTIN & Municipal Trade License",
        "GPS Store Location in AP / TS",
      ],
      sla: "Instant Token Generation",
    },
    {
      step: "02",
      stageNumber: "Stage II",
      title: "In-Person Store Inspection",
      badge: "24–48 Hrs",
      badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
      iconBg: "bg-amber-50 text-amber-600",
      icon: <UserCheck className="w-5 h-5" />,
      description:
        "An assigned Retro Infotech field officer visits the physical commercial storefront to inspect premise permanence, signboard, and stocking capacity.",
      checkpoints: [
        "Commercial Signboard & Walk-in Check",
        "Owned / Registered Lease Verification",
        "Dry Stocking & Pallet Storage Space",
      ],
      sla: "Officer Visit within 48 Hrs",
    },
    {
      step: "03",
      stageNumber: "Stage III",
      title: "Financial & Statutory Audit",
      badge: "24 Hrs",
      badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
      iconBg: "bg-indigo-50 text-indigo-600",
      icon: <Building className="w-5 h-5" />,
      description:
        "Our compliance desk validates active GSTIN filing history, municipal trade status, and past banking transaction turnover benchmarks.",
      checkpoints: [
        "Active GSTIN & Clean Filing Track",
        "₹25L+ Monthly Turnover Validation",
        "Proprietor PAN & Commercial Credit",
      ],
      sla: "Automated Risk Desk Clearance",
    },
    {
      step: "04",
      stageNumber: "Stage IV",
      title: "Authorized Account Activation",
      badge: "Instant",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
      iconBg: "bg-emerald-50 text-emerald-600",
      icon: <KeyRound className="w-5 h-5" />,
      description:
        "Upon branch sign-off, encrypted B2B procurement credentials and a dedicated relationship manager are issued to unlock live wholesale price books.",
      checkpoints: [
        "Encrypted Login Credentials & Store ID",
        "Live Wholesale Price Books Unlocked",
        "Dedicated Logistics Account Manager",
      ],
      sla: "Immediate Portal Gateway Access",
    },
  ];

  return (
    <section id="verification" className="py-14 sm:py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center space-y-2.5 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-[11px] font-bold uppercase tracking-wider border border-blue-100">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
            <span>Closed Gated Network</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Four-Tier Mandatory Onboarding Pipeline
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Wholesale pricing and direct-from-mill supply are exclusive to verified physical storefronts. All 4 verification stages must be completed prior to order placement.
          </p>
        </div>

        {/* Unified 4-Step Pipeline Grid: 2 Columns Mobile / 4 Columns Desktop (2/4 Layout) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 lg:gap-5">
          {stages.map((stg, i) => (
            <div
              key={i}
              className="relative bg-white rounded-xl sm:rounded-2xl border border-slate-200/90 p-3 sm:p-5 hover:border-blue-400 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Step Header */}
                <div className="flex items-center justify-between gap-1 mb-2.5 sm:mb-3.5">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] sm:text-xs font-mono font-bold text-slate-400">
                      {stg.step}
                    </span>
                    <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-slate-500">
                      {stg.stageNumber}
                    </span>
                  </div>
                  <span
                    className={`text-[8px] sm:text-[10px] font-semibold px-1.5 sm:px-2 py-0.5 rounded-full border truncate ${stg.badgeColor}`}
                  >
                    {stg.badge}
                  </span>
                </div>

                {/* Icon & Title */}
                <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-2.5">
                  <div
                    className={`w-7 h-7 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl ${stg.iconBg} flex items-center justify-center shrink-0 [&>svg]:w-3.5 [&>svg]:h-3.5 sm:[&>svg]:w-5 sm:[&>svg]:h-5`}
                  >
                    {stg.icon}
                  </div>
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug line-clamp-2">
                    {stg.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-[10px] sm:text-xs text-slate-600 leading-relaxed mb-2.5 sm:mb-4 line-clamp-3 sm:line-clamp-none">
                  {stg.description}
                </p>

                {/* Checkpoints */}
                <div className="space-y-1 sm:space-y-1.5 pt-2 sm:pt-3 border-t border-slate-100">
                  <span className="text-[8px] sm:text-[9px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                    Checkpoints:
                  </span>
                  {stg.checkpoints.map((cp, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-1 sm:gap-1.5 text-[9px] sm:text-[11px] text-slate-700 leading-tight"
                    >
                      <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="line-clamp-2 sm:line-clamp-none">{cp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* SLA Footer */}
              <div className="mt-3 sm:mt-4 pt-2 sm:pt-3 border-t border-slate-100 flex items-center gap-1 sm:gap-1.5 text-[9px] sm:text-[10px] text-slate-500">
                <Clock className="w-3 h-3 text-blue-600 shrink-0" />
                <span className="truncate">
                  <strong className="text-slate-700">SLA:</strong> {stg.sla}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
