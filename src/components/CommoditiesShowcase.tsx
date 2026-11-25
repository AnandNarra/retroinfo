"use client";

import React, { useState } from "react";
import {
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

export default function CommoditiesShowcase({ onOpenApply }: { onOpenApply?: () => void }) {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Commodities" },
    { id: "rice", label: "Rice & Paddy" },
    { id: "pulses", label: "Pulses & Dals" },
    { id: "oils", label: "Edible Oils (15L)" },
    { id: "spices", label: "Whole Spices" },
    { id: "staples", label: "Sugar & Wheat" },
  ];

  const commodities = [
    {
      category: "rice",
      name: "Sona Masoori Raw / Steam Rice",
      variety: "BPT 5204 / RNR 15048 Standard Grade",
      packaging: "25 kg & 50 kg PP Woven Bags",
      moisture: "< 13.5% Assayed",
      minOrder: "5 Quintals (500 kg)",
      origin: "Kurnool & Krishna Delta Hubs",
      desc: "Aged 12-18 months premium non-basmati rice sourced from primary rice mill clusters with uniform grain elongation and zero polish adulteration.",
    },
    {
      category: "rice",
      name: "Telangana Sona (RNR 15048) Low-GI",
      variety: "Special Commercial Mill Grade",
      packaging: "25 kg & 50 kg Brandless Sacks",
      moisture: "< 13.0% Certified",
      minOrder: "5 Quintals (500 kg)",
      origin: "Telangana Agro Clusters",
      desc: "Superfine grain, low glycemic index wholesale rice sought by tier-1 supermarkets and high-turnover regional kirana stores.",
    },
    {
      category: "pulses",
      name: "Desi Toor Dal (Phatka / Unpolished)",
      variety: "Commercial Grade-A Sortex Cleaned",
      packaging: "30 kg & 50 kg Moisture-Proof Sacks",
      moisture: "< 11.0% Assayed",
      minOrder: "3 Quintals (300 kg)",
      origin: "Gulbarga & Latur Mill Clusters",
      desc: "100% natural water-washed toor dal without synthetic coloring, guaranteed fast-cooking yield for commercial consumption.",
    },
    {
      category: "pulses",
      name: "Urad Dal Gota (Whole White)",
      variety: "First Grade Machine Cleaned",
      packaging: "30 kg & 50 kg Bulk Bags",
      moisture: "< 11.5% Assayed",
      minOrder: "3 Quintals (300 kg)",
      origin: "Guntur & Coastal AP Region",
      desc: "High-protein whole urad dal ideal for commercial idli/dosa batter manufacturing and retail kirana loose repackaging.",
    },
    {
      category: "oils",
      name: "Refined Sunflower Oil (Commercial)",
      variety: "Fortified with Vitamin A & D",
      packaging: "15 Litre Heavy Gauge Tin / Jar",
      moisture: "Zero Moisture",
      minOrder: "20 Tins (300 Litres)",
      origin: "Kakinada Port Processing Refineries",
      desc: "Food-grade double refined oil for grocery retailers, packaged in tamper-evident sealed industrial tins.",
    },
    {
      category: "spices",
      name: "Guntur Stemless Dry Red Chilli",
      variety: "Teja / Sannam 334 Commercial",
      packaging: "25 kg & 40 kg Jute Bales",
      moisture: "< 10.0% Cold Store Stock",
      minOrder: "2 Quintals (200 kg)",
      origin: "Guntur Agricultural Market Yard",
      desc: "Pungent, vibrant red colour, cold-storage preserved chillies with minimal breakage, directly aggregated from market yard arrivals.",
    },
    {
      category: "spices",
      name: "Whole Cumin Seeds (Jeera)",
      variety: "Machine Cleaned 99% Purity",
      packaging: "25 kg HDPE Bags with Liner",
      moisture: "< 8.5% Assayed",
      minOrder: "1 Quintal (100 kg)",
      origin: "Regional Mandi Hubs",
      desc: "High essential oil content, zero stone and foreign seed impurity, tested for volatile oil consistency.",
    },
    {
      category: "staples",
      name: "Grade M-30 Commercial Sugar",
      variety: "Refined White Sparkling Crystals",
      packaging: "50 kg Standard Jute / PP Bags",
      moisture: "< 0.05% ICUMSA Tested",
      minOrder: "10 Quintals (1,000 kg)",
      origin: "Cooperative Sugar Mills (AP & TS)",
      desc: "Uniform grain crystal size, free-flowing, directly invoiced from cooperative sugar mills with zero intermediary broker cuts.",
    },
    {
      category: "staples",
      name: "Commercial Atta & Maida Bulk",
      variety: "Industrial Roller Flour Mill Grade",
      packaging: "50 kg Heavy Duty Bags",
      moisture: "< 13.5% Standard",
      minOrder: "5 Quintals (500 kg)",
      origin: "Regional Roller Flour Mills",
      desc: "High water absorption capacity flour tailored for high-volume bakeries, restaurants, and retail loose counter sales.",
    },
  ];

  const filtered =
    activeCategory === "all"
      ? commodities
      : commodities.filter((c) => c.category === activeCategory);

  return (
    <section id="commodities" className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider">
              Bulk Commodity Portfolio
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Loose & Unbranded Commercial Formats
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Procured directly from agricultural processing mills and agro clusters across Andhra Pradesh and Telangana. Wholesale pricing is displayed exclusively to verified accounts.
            </p>
          </div>

          <button
            onClick={onOpenApply}
            className="self-start md:self-end inline-flex items-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-xs"
          >
            <span>Unlock Wholesale Price Book</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 text-xs font-medium no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl whitespace-nowrap transition-all ${
                activeCategory === cat.id
                  ? "bg-blue-600 text-white shadow-xs font-semibold"
                  : "bg-white text-slate-700 border border-slate-200 hover:border-slate-300"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Commodity Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <h3 className="text-base font-bold text-slate-900 leading-snug">
                      {item.name}
                    </h3>
                    <p className="text-xs text-blue-600 font-medium mt-0.5">
                      {item.variety}
                    </p>
                  </div>
                  <span className="shrink-0 text-[10px] font-semibold bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md">
                    {item.origin}
                  </span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {item.desc}
                </p>

                {/* Specs Box */}
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-200/70 space-y-1.5 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 text-[11px]">Packaging Format:</span>
                    <strong className="text-slate-800 text-[11px] font-medium">{item.packaging}</strong>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 text-[11px]">Moisture Benchmark:</span>
                    <strong className="text-emerald-700 text-[11px] font-medium">{item.moisture}</strong>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 text-[11px]">Minimum Order Lot:</span>
                    <strong className="text-slate-900 text-[11px] font-medium">{item.minOrder}</strong>
                  </div>
                </div>
              </div>

              {/* Card Footer: Gated Pricing Notice */}
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-400 italic text-[11px]">
                  Price: Gated to Verified Stores
                </span>
                <button
                  onClick={onOpenApply}
                  className="text-xs font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1"
                >
                  Verify to Order
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Strict Bulk Quality Assaying Note */}
        <div className="mt-12 bg-white rounded-2xl p-6 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">
                Mandatory In-Lab Assay Testing Before Dispatch
              </h4>
              <p className="text-xs text-slate-600 mt-0.5">
                All bulk lots are checked for foreign matter, broken grains, moisture levels, and transit seal integrity prior to logistics handover.
              </p>
            </div>
          </div>
          <div className="text-xs font-mono text-slate-500 bg-slate-50 px-4 py-2 rounded-lg border border-slate-200 shrink-0">
            FSSAI & Weights/Measures Compliant
          </div>
        </div>

      </div>
    </section>
  );
}
