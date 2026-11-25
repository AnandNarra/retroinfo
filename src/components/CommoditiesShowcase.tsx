"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ShieldCheck,
  ArrowRight,
  Lock,
  Scale,
  Package,
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
      name: "Sona Masoori Rice (Raw / Steam)",
      variety: "BPT 5204 / RNR 15048 Standard Grade",
      packaging: "25kg & 50kg Bags",
      moisture: "< 13.5% Assayed",
      minOrder: "Min. 5 Quintals (500 kg)",
      origin: "Kurnool & Krishna Hubs",
      image: "/commodities/rice-sona-masoori.jpg",
    },
    {
      category: "rice",
      name: "Telangana Sona (RNR 15048) Low-GI",
      variety: "Special Commercial Mill Grade",
      packaging: "25kg & 50kg Sacks",
      moisture: "< 13.0% Certified",
      minOrder: "Min. 5 Quintals (500 kg)",
      origin: "Telangana Agro Cluster",
      image: "/commodities/rice-telangana-sona.jpg",
    },
    {
      category: "pulses",
      name: "Desi Toor Dal (Unpolished)",
      variety: "Commercial Grade-A Sortex Cleaned",
      packaging: "30kg & 50kg Sacks",
      moisture: "< 11.0% Assayed",
      minOrder: "Min. 3 Quintals (300 kg)",
      origin: "Latur Mill Cluster",
      image: "/commodities/toor-dal.jpg",
    },
    {
      category: "pulses",
      name: "Urad Dal Gota (Whole White)",
      variety: "First Grade Machine Cleaned",
      packaging: "30kg & 50kg Bags",
      moisture: "< 11.5% Assayed",
      minOrder: "Min. 3 Quintals (300 kg)",
      origin: "Guntur Region",
      image: "/commodities/urad-dal.jpg",
    },
    {
      category: "oils",
      name: "Refined Sunflower Oil",
      variety: "Commercial Double Refined Food Grade",
      packaging: "15L Industrial Tin / Jar",
      moisture: "Zero Moisture",
      minOrder: "Min. 20 Tins (300 Litres)",
      origin: "Kakinada Refinery",
      image: "/commodities/sunflower-oil.jpg",
    },
    {
      category: "spices",
      name: "Guntur Stemless Dry Red Chilli",
      variety: "Teja / Sannam 334 Commercial",
      packaging: "25kg & 40kg Jute Bales",
      moisture: "< 10.0% Cold Store Stock",
      minOrder: "Min. 2 Quintals (200 kg)",
      origin: "Guntur Market Yard",
      image: "/commodities/red-chilli.jpg",
    },
    {
      category: "spices",
      name: "Whole Cumin Seeds (Jeera)",
      variety: "Machine Cleaned 99% Purity",
      packaging: "25kg HDPE Bags",
      moisture: "< 8.5% Assayed",
      minOrder: "Min. 1 Quintal (100 kg)",
      origin: "Regional Mandi Hub",
      image: "/commodities/cumin-seeds.jpg",
    },
    {
      category: "staples",
      name: "Grade M-30 Commercial Sugar",
      variety: "Refined White Sparkling Crystals",
      packaging: "50kg Jute / PP Bags",
      moisture: "< 0.05% ICUMSA Tested",
      minOrder: "Min. 10 Quintals (1,000 kg)",
      origin: "AP & TS Sugar Mills",
      image: "/commodities/sugar-m30.jpg",
    },
    {
      category: "staples",
      name: "Commercial Atta & Maida Bulk",
      variety: "Industrial Roller Flour Mill Grade",
      packaging: "50kg Heavy Sacks",
      moisture: "< 13.5% Standard",
      minOrder: "Min. 5 Quintals (500 kg)",
      origin: "Regional Roller Flour Mills",
      image: "/commodities/atta-maida.jpg",
    },
  ];

  const filtered =
    activeCategory === "all"
      ? commodities
      : commodities.filter((c) => c.category === activeCategory);

  return (
    <section id="commodities" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider">
              Bulk Commodity Portfolio
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Loose &amp; Unbranded Commercial Formats
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Procured directly from agricultural processing mills and agro clusters across Andhra Pradesh and Telangana. Wholesale pricing is displayed exclusively to verified accounts.
            </p>
          </div>

          <button
            onClick={onOpenApply}
            className="self-start md:self-end inline-flex items-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-xs"
          >
            <span>Unlock Wholesale Price Book</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 text-xs font-medium no-scrollbar">
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
              className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden hover:border-blue-400 hover:shadow-lg transition-all group flex flex-col justify-between"
            >
              <div>
                {/* Bulk Stock Image Container */}
                <div className="relative h-48 sm:h-52 w-full bg-slate-900 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

                  {/* Origin Tag on Top-Right */}
                  <span className="absolute top-3 right-3 text-[10px] font-semibold bg-black/65 backdrop-blur-md text-white px-2.5 py-1 rounded-md border border-white/20">
                    {item.origin}
                  </span>

                  {/* Bulk Packaging Tag on Bottom-Left */}
                  <span className="absolute bottom-3 left-3 text-[11px] font-medium bg-black/65 backdrop-blur-md text-white px-2.5 py-1 rounded-md border border-white/15 flex items-center gap-1.5">
                    <Package className="w-3.5 h-3.5 text-amber-300" />
                    <span>{item.packaging}</span>
                  </span>
                </div>

                {/* Card Information */}
                <div className="p-5 pb-3">
                  <h3 className="text-base font-bold text-slate-900 leading-snug group-hover:text-blue-600 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs text-blue-600 font-medium mt-1">
                    {item.variety}
                  </p>

                  {/* Streamlined Specs Chips */}
                  <div className="flex flex-wrap items-center gap-2 mt-3.5">
                    <span className="inline-flex items-center gap-1 text-[11px] font-medium bg-slate-100 text-slate-700 px-2.5 py-1 rounded-lg">
                      <Scale className="w-3 h-3 text-slate-500" />
                      <span>{item.minOrder}</span>
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-medium bg-emerald-50 text-emerald-800 border border-emerald-200/60 px-2.5 py-1 rounded-lg">
                      <ShieldCheck className="w-3 h-3 text-emerald-600" />
                      <span>{item.moisture}</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Footer: Gated Pricing & Action */}
              <div className="px-5 py-3.5 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-500 text-[11px] flex items-center gap-1">
                  <Lock className="w-3 h-3 text-slate-400" />
                  <span>Wholesale Gated</span>
                </span>
                <button
                  onClick={onOpenApply}
                  className="text-xs font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1 group/btn cursor-pointer"
                >
                  <span>Verify to Order</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Strict Bulk Quality Assaying Note */}
        <div className="mt-12 bg-white rounded-2xl p-6 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
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
            FSSAI &amp; Weights/Measures Compliant
          </div>
        </div>

      </div>
    </section>
  );
}
