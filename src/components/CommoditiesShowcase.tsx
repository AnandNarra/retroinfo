"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, Lock } from "lucide-react";

export default function CommoditiesShowcase({
  onOpenApply,
}: {
  onOpenApply?: () => void;
}) {
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
      image: "/commodities/rice-sona-masoori.png?v=2",
      packaging: "25 kg & 50 kg PP Bags",
      minOrder: "5 Quintals (500 kg)",
      origin: "Kurnool & Krishna Delta",
    },
    {
      category: "rice",
      name: "Telangana Sona (RNR 15048) Low-GI",
      variety: "Special Commercial Mill Grade",
      image: "/commodities/rice-telangana-sona.jpg?v=2",
      packaging: "25 kg & 50 kg Brandless Sacks",
      minOrder: "5 Quintals (500 kg)",
      origin: "Telangana Agro Clusters",
    },
    {
      category: "pulses",
      name: "Desi Toor Dal (Phatka / Unpolished)",
      variety: "Commercial Grade-A Sortex Cleaned",
      image: "/commodities/toor-dal.png?v=2",
      packaging: "30 kg & 50 kg Sacks",
      minOrder: "3 Quintals (300 kg)",
      origin: "Gulbarga & Latur Mills",
    },
    {
      category: "pulses",
      name: "Urad Dal Gota (Whole White)",
      variety: "First Grade Machine Cleaned",
      image: "/commodities/urad-dal.png?v=2",
      packaging: "30 kg & 50 kg Bulk Bags",
      minOrder: "3 Quintals (300 kg)",
      origin: "Guntur & Coastal AP",
    },
    {
      category: "oils",
      name: "Refined Sunflower Oil (Commercial)",
      variety: "Fortified with Vitamin A & D",
      image: "/commodities/sunflower-oil.png?v=2",
      packaging: "15 Litre Industrial Tin / Jar",
      minOrder: "20 Tins (300 Litres)",
      origin: "Kakinada Port Refineries",
    },
    {
      category: "spices",
      name: "Guntur Stemless Dry Red Chilli",
      variety: "Teja / Sannam 334 Commercial",
      image: "/commodities/red-chilli.png?v=2",
      packaging: "25 kg & 40 kg Jute Bales",
      minOrder: "2 Quintals (200 kg)",
      origin: "Guntur Market Yard",
    },
    {
      category: "spices",
      name: "Whole Cumin Seeds (Jeera)",
      variety: "Machine Cleaned 99% Purity",
      image: "/commodities/cumin-seeds.jpg?v=2",
      packaging: "25 kg HDPE Bags with Liner",
      minOrder: "1 Quintal (100 kg)",
      origin: "Regional Mandi Hubs",
    },
    {
      category: "staples",
      name: "Grade M-30 Commercial Sugar",
      variety: "Refined White Sparkling Crystals",
      image: "/commodities/sugar-m30.jpg?v=2",
      packaging: "50 kg Standard PP Bags",
      minOrder: "10 Quintals (1,000 kg)",
      origin: "Cooperative Sugar Mills",
    },
    {
      category: "staples",
      name: "Commercial Atta & Maida Bulk",
      variety: "Industrial Roller Flour Mill Grade",
      image: "/commodities/atta-maida.jpg?v=2",
      packaging: "50 kg Heavy Duty Bags",
      minOrder: "5 Quintals (500 kg)",
      origin: "Regional Flour Mills",
    },
  ];

  const filtered =
    activeCategory === "all"
      ? commodities
      : commodities.filter((c) => c.category === activeCategory);

  return (
    <section id="commodities" className="py-10 sm:py-14 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div className="max-w-xl space-y-1.5">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 text-[10px] font-bold uppercase tracking-wider">
              Bulk Commodity Portfolio
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Loose &amp; Unbranded Commercial Formats
            </h2>
            <p className="text-xs text-slate-600">
              Procured directly from agricultural processing mills across AP &amp; Telangana. Wholesale pricing displayed to verified accounts.
            </p>
          </div>

          <button
            onClick={onOpenApply}
            className="self-start md:self-end inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-xs cursor-pointer"
          >
            <span>Unlock Wholesale Price Book</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 mb-5 text-xs font-medium no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3 py-1.5 rounded-lg text-xs whitespace-nowrap transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-blue-600 text-white shadow-xs font-semibold"
                  : "bg-white text-slate-700 border border-slate-200 hover:border-slate-300"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Commodity Cards Grid: Compressed 70% Image / 30% Matter (2 Cols Mobile / 3 Cols Desktop) */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5 sm:gap-4">
          {filtered.map((item, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:border-blue-400 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* 70% Compressed Image Section */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    unoptimized
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Floating Origin Tag */}
                  <span className="absolute bottom-1.5 left-2 text-[8px] sm:text-[9px] font-medium bg-black/75 text-white backdrop-blur-md px-1.5 py-0.5 rounded border border-white/10 truncate max-w-[85%]">
                    {item.origin}
                  </span>
                </div>

                {/* 30% Compressed Matter Section */}
                <div className="p-2 sm:p-2.5 pb-1.5">
                  <h3 className="text-xs sm:text-[13px] font-bold text-slate-900 leading-snug group-hover:text-blue-600 transition-colors line-clamp-1">
                    {item.name}
                  </h3>
                  <p className="text-[10px] text-blue-600 font-medium mt-0.5 truncate">
                    {item.variety}
                  </p>

                  {/* Compact Streamlined Specs Bar */}
                  <div className="flex items-center justify-between gap-1 mt-1.5 bg-slate-50 rounded-md px-2 py-1 border border-slate-100 text-[9px] sm:text-[10px]">
                    <div className="truncate">
                      <span className="text-[8px] text-slate-400 uppercase font-bold block leading-none">
                        Pkg
                      </span>
                      <strong className="text-slate-800 text-[9px] sm:text-[10px] font-semibold block mt-0.5 truncate">
                        {item.packaging}
                      </strong>
                    </div>
                    <div className="h-4 w-px bg-slate-200 shrink-0" />
                    <div className="truncate text-right">
                      <span className="text-[8px] text-slate-400 uppercase font-bold block leading-none">
                        Min Order
                      </span>
                      <strong className="text-slate-800 text-[9px] sm:text-[10px] font-semibold block mt-0.5 truncate">
                        {item.minOrder}
                      </strong>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer: Compact Gated Action */}
              <div className="px-2 sm:px-2.5 py-1.5 bg-slate-50/70 border-t border-slate-100 flex items-center justify-between text-[9px] sm:text-[10px]">
                <span className="text-slate-500 italic text-[9px] flex items-center gap-1 truncate">
                  <Lock className="w-2.5 h-2.5 text-slate-400 shrink-0" />
                  <span className="hidden sm:inline">Wholesale</span> Gated
                </span>
                <button
                  onClick={onOpenApply}
                  className="text-[9px] sm:text-[10px] font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-0.5 cursor-pointer transition-colors shrink-0"
                >
                  <span>Verify</span>
                  <ArrowRight className="w-2.5 h-2.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
