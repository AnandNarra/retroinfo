"use client";

import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Building,
  CheckCircle2,
} from "lucide-react";

export default function ContactSection() {
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    storeName: "",
    city: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
  };

  return (
    <section id="contact" className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider">
            Corporate Office & Regional Hubs
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Connect with Retro Infotech Desk
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Reach our field KYC compliance team, regional logistics dispatch, or corporate headquarters in Vijayawada.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Office Details & Hubs */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Registered Office Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center">
                  <Building className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    Registered Corporate Office
                  </h3>
                  <p className="text-xs text-slate-500 font-mono">
                    CIN: U62011AP2026PTC128463
                  </p>
                </div>
              </div>

              <div className="space-y-3 pt-2 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">
                      Retro Infotech Private Limited
                    </strong>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                      D No. 77-222-29, Plot No. 622,
                      <br />
                      LBS Nagar, Payakapuram,
                      <br />
                      Vijayawada - 520015, Andhra Pradesh
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                  <a
                    href="tel:+918555020890"
                    className="hover:text-blue-600 font-medium transition-colors"
                  >
                    +91 8555020890
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-blue-600 shrink-0" />
                  <a
                    href="mailto:retroinfotechpersonal@gmail.com"
                    className="hover:text-blue-600 font-medium transition-colors break-all"
                  >
                    retroinfotechpersonal@gmail.com
                  </a>
                </div>

                <div className="flex items-center gap-3 text-xs text-slate-500">
                  <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                  <span>Mon – Sat: 9:00 AM – 7:00 PM IST</span>
                </div>
              </div>
            </div>

            {/* Regional Logistics Corridors */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide">
                Key Distribution & Cross-Dock Hubs:
              </h4>
              <div className="grid grid-cols-2 gap-2.5 text-xs text-slate-600">
                <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200/70">
                  <strong className="text-slate-800 block">Vijayawada</strong>
                  <span className="text-[11px] text-slate-500">Central Consolidation</span>
                </div>
                <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200/70">
                  <strong className="text-slate-800 block">Guntur</strong>
                  <span className="text-[11px] text-slate-500">Spice & Pulses Yard</span>
                </div>
                <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200/70">
                  <strong className="text-slate-800 block">Hyderabad</strong>
                  <span className="text-[11px] text-slate-500">Telangana Transit Hub</span>
                </div>
                <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200/70">
                  <strong className="text-slate-800 block">Visakhapatnam</strong>
                  <span className="text-[11px] text-slate-500">Coastal AP Distribution</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Direct Query Form */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8">
            <div className="mb-6">
              <h3 className="text-lg font-bold text-slate-900">
                Commercial Inquiry / Field Visit Request
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Have questions regarding Section 3 eligibility or commodity pricing? Send our desk a message.
              </p>
            </div>

            {formSent ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center space-y-3">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-slate-900">
                  Message Transmitted Successfully
                </h4>
                <p className="text-xs text-slate-600 max-w-sm mx-auto">
                  Our Vijayawada compliance and logistics desk will review your store inquiry and contact you via phone within 1 business day.
                </p>
                <button
                  onClick={() => setFormSent(false)}
                  className="text-xs font-semibold text-blue-600 hover:underline pt-2"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Proprietor / Store Manager Name *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g., G. Nanda Kishore"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full text-xs p-3 rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      required
                      type="tel"
                      placeholder="+91 8555020890"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full text-xs p-3 rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Store Name / Supermarket
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., Kirana Supermarket"
                      value={formData.storeName}
                      onChange={(e) =>
                        setFormData({ ...formData, storeName: e.target.value })
                      }
                      className="w-full text-xs p-3 rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      City / District (AP / TS) *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g., Vijayawada"
                      value={formData.city}
                      onChange={(e) =>
                        setFormData({ ...formData, city: e.target.value })
                      }
                      className="w-full text-xs p-3 rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Inquiry or Bulk Requirement
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Specify commodity volumes (e.g. Sona Masoori 50 Quintals, Toor Dal 20 Quintals) or question about field KYC visit..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full text-xs p-3 rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold text-xs hover:bg-blue-700 transition-colors shadow-sm"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message to Retro Infotech Desk</span>
                  </button>
                </div>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
