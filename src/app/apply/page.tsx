"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";

export default function ApplyPage() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [token, setToken] = useState("");

  const [formData, setFormData] = useState({
    storeName: "",
    entityType: "Proprietorship",
    vintageYears: "3",
    address: "",
    city: "Vijayawada",
    state: "Andhra Pradesh",
    pincode: "",
    gstin: "",
    tradeLicenseNo: "",
    monthlyTurnover: "30",
    commodities: ["Rice & Paddy", "Pulses & Dals"],
    ownerName: "",
    mobile: "",
    email: "",
    preferredInspectionDate: "Morning",
  });

  const handleCommodityToggle = (item: string) => {
    if (formData.commodities.includes(item)) {
      setFormData({
        ...formData,
        commodities: formData.commodities.filter((c) => c !== item),
      });
    } else {
      setFormData({
        ...formData,
        commodities: [...formData.commodities, item],
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedToken =
      "RI-" +
      (formData.state === "Andhra Pradesh" ? "AP" : "TS") +
      "-2026-" +
      Math.floor(1000 + Math.random() * 9000);
    setToken(generatedToken);
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 py-12 sm:py-16 bg-slate-50/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          
          {/* Header */}
          <div className="text-center space-y-3 mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
              Stage I Digital Application
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Retailer Onboarding Portal
            </h1>
            <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
              Submit your storefront credentials to initiate the mandatory 4-tier KYC verification and schedule your field officer inspection.
            </p>
          </div>

          {/* Stepper Header */}
          {!submitted && (
            <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200 mb-8 shadow-xs">
              <div className="flex items-center justify-between">
                {[
                  { num: 1, label: "Store Establishment" },
                  { num: 2, label: "Statutory & Turnover" },
                  { num: 3, label: "Field Inspection Schedule" },
                ].map((s) => (
                  <div key={s.num} className="flex-1 flex items-center">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                        step >= s.num
                          ? "bg-blue-600 text-white shadow-xs"
                          : "bg-slate-100 text-slate-400"
                      }`}
                    >
                      {s.num}
                    </div>
                    <span className="ml-2 text-xs font-semibold text-slate-700 hidden sm:inline">
                      {s.label}
                    </span>
                    {s.num < 3 && (
                      <div
                        className={`flex-1 h-1 mx-3 rounded-full ${
                          step > s.num ? "bg-blue-600" : "bg-slate-200"
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Application Form Box */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm">
            {submitted ? (
              <div className="text-center py-8 space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                    Application Logged Successfully
                  </span>
                  <h2 className="text-3xl font-extrabold text-slate-900 mt-3 font-mono">
                    Token: {token}
                  </h2>
                  <p className="text-sm text-slate-600 mt-2 max-w-lg mx-auto">
                    Your Stage I application for <strong>{formData.storeName}</strong> has been transmitted to our central compliance desk.
                  </p>
                </div>

                {/* Steps ahead */}
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-left space-y-4 max-w-2xl mx-auto text-xs sm:text-sm">
                  <h3 className="font-bold text-slate-900 text-xs uppercase tracking-wide">
                    Mandatory Field Inspection Next Steps:
                  </h3>
                  <div className="space-y-3 text-slate-600">
                    <div className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center shrink-0 text-xs">
                        1
                      </span>
                      <p>
                        An authorized <strong>Field Verification Officer</strong> will contact you at <strong>{formData.mobile}</strong> within 24 to 48 hours to confirm the physical storefront visit.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center shrink-0 text-xs">
                        2
                      </span>
                      <p>
                        Ensure your active commercial signboard, original <strong>GSTIN certificate</strong>, and municipal shop establishment documents are available at the store during inspection.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center shrink-0 text-xs">
                        3
                      </span>
                      <p>
                        Once cleared by Branch Management, your authenticated B2B portal login credentials will be dispatched to <strong>{formData.email || formData.mobile}</strong>.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
                  <Link
                    href="/"
                    className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-blue-600 text-white font-semibold text-xs hover:bg-blue-700 transition-colors shadow-sm"
                  >
                    <span>Return to Homepage</span>
                  </Link>
                  <Link
                    href="/#policy"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white border border-slate-300 text-slate-700 font-semibold text-xs hover:bg-slate-50 transition-colors shadow-2xs"
                  >
                    <span>Review B2B Operational Policy</span>
                  </Link>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Step 1 */}
                {step === 1 && (
                  <div className="space-y-4">
                    <div className="border-b border-slate-100 pb-3">
                      <h3 className="text-lg font-bold text-slate-900">
                        1. Storefront & Commercial Entity
                      </h3>
                      <p className="text-xs text-slate-500">
                        Provide primary business identity and operating address.
                      </p>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Commercial Store Name *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="e.g., Sri Venkateswara Supermarket"
                        value={formData.storeName}
                        onChange={(e) =>
                          setFormData({ ...formData, storeName: e.target.value })
                        }
                        className="w-full text-xs p-3.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Commercial Vintage (Continuous Years) *
                        </label>
                        <select
                          value={formData.vintageYears}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              vintageYears: e.target.value,
                            })
                          }
                          className="w-full text-xs p-3.5 rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="2">2 - 3 Years (Eligible)</option>
                          <option value="4">4 - 5 Years (Established)</option>
                          <option value="6">6+ Years (High Vintage)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Business Structure *
                        </label>
                        <select
                          value={formData.entityType}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              entityType: e.target.value,
                            })
                          }
                          className="w-full text-xs p-3.5 rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="Proprietorship">Sole Proprietorship</option>
                          <option value="Partnership">Partnership Firm</option>
                          <option value="LLP">Limited Liability Partnership</option>
                          <option value="Private Limited">Private Limited</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Storefront Physical Street Address *
                      </label>
                      <textarea
                        required
                        rows={2}
                        placeholder="Door / Plot No, Street, Commercial Landmark"
                        value={formData.address}
                        onChange={(e) =>
                          setFormData({ ...formData, address: e.target.value })
                        }
                        className="w-full text-xs p-3.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          State *
                        </label>
                        <select
                          value={formData.state}
                          onChange={(e) =>
                            setFormData({ ...formData, state: e.target.value })
                          }
                          className="w-full text-xs p-3.5 rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="Andhra Pradesh">Andhra Pradesh</option>
                          <option value="Telangana">Telangana</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          City / District *
                        </label>
                        <input
                          required
                          type="text"
                          placeholder="e.g., Vijayawada"
                          value={formData.city}
                          onChange={(e) =>
                            setFormData({ ...formData, city: e.target.value })
                          }
                          className="w-full text-xs p-3.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Pin Code *
                        </label>
                        <input
                          required
                          type="text"
                          maxLength={6}
                          placeholder="520015"
                          value={formData.pincode}
                          onChange={(e) =>
                            setFormData({ ...formData, pincode: e.target.value })
                          }
                          className="w-full text-xs p-3.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>

                    <div className="pt-4 flex justify-end">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold text-xs hover:bg-blue-700 transition-colors shadow-xs"
                      >
                        <span>Continue to Statutory Step</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 2 */}
                {step === 2 && (
                  <div className="space-y-4">
                    <div className="border-b border-slate-100 pb-3">
                      <h3 className="text-lg font-bold text-slate-900">
                        2. Statutory & Commercial Turnover
                      </h3>
                      <p className="text-xs text-slate-500">
                        Valid GSTIN and ₹25L+ monthly turnover benchmark are non-negotiable.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          GSTIN Registration Number *
                        </label>
                        <input
                          required
                          type="text"
                          maxLength={15}
                          placeholder="37AAAAA0000A1Z5"
                          value={formData.gstin}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              gstin: e.target.value.toUpperCase(),
                            })
                          }
                          className="w-full font-mono text-xs p-3.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Municipal Trade License Certificate No *
                        </label>
                        <input
                          required
                          type="text"
                          placeholder="e.g., TL-2024-9182"
                          value={formData.tradeLicenseNo}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              tradeLicenseNo: e.target.value,
                            })
                          }
                          className="w-full text-xs p-3.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Average Monthly Sales Turnover (Audited / Bank Statement) *
                      </label>
                      <select
                        value={formData.monthlyTurnover}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            monthlyTurnover: e.target.value,
                          })
                        }
                        className="w-full text-xs p-3.5 rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="25">₹25 - 35 Lakhs / month (Passed Threshold)</option>
                        <option value="50">₹35 - 60 Lakhs / month</option>
                        <option value="75">₹60 Lakhs - 1 Crore / month</option>
                        <option value="120">Above ₹1 Crore / month (Institutional Retailer)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-2">
                        Select Required Bulk Commodity Portfolios:
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {[
                          "Rice & Paddy",
                          "Pulses & Dals",
                          "Edible Oils (15L)",
                          "Whole Spices",
                          "Commercial Sugar",
                          "Atta & Maida",
                        ].map((item) => (
                          <button
                            key={item}
                            type="button"
                            onClick={() => handleCommodityToggle(item)}
                            className={`text-xs p-3 rounded-xl border text-left font-medium transition-all ${
                              formData.commodities.includes(item)
                                ? "bg-blue-50 border-blue-400 text-blue-800 font-semibold"
                                : "bg-slate-50 border-slate-200 text-slate-600"
                            }`}
                          >
                            {formData.commodities.includes(item) ? "✓ " : "+ "}
                            {item}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 flex justify-between">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-slate-600 hover:bg-slate-100 text-xs font-semibold"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        Back
                      </button>
                      <button
                        type="button"
                        onClick={() => setStep(3)}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold text-xs hover:bg-blue-700 transition-colors shadow-xs"
                      >
                        <span>Continue to Inspection Scheduling</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 3 */}
                {step === 3 && (
                  <div className="space-y-4">
                    <div className="border-b border-slate-100 pb-3">
                      <h3 className="text-lg font-bold text-slate-900">
                        3. Contact Person & Physical Store Inspection
                      </h3>
                      <p className="text-xs text-slate-500">
                        Designate authorized store representative for in-person officer visit.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Proprietor / Store Manager Name *
                        </label>
                        <input
                          required
                          type="text"
                          value={formData.ownerName}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              ownerName: e.target.value,
                            })
                          }
                          className="w-full text-xs p-3.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Direct Mobile Number (Active WhatsApp / Call) *
                        </label>
                        <input
                          required
                          type="tel"
                          maxLength={10}
                          placeholder="10-digit mobile number"
                          value={formData.mobile}
                          onChange={(e) =>
                            setFormData({ ...formData, mobile: e.target.value })
                          }
                          className="w-full text-xs p-3.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Store Official Email Address
                        </label>
                        <input
                          type="email"
                          placeholder="store@example.com"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="w-full text-xs p-3.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Preferred Store Inspection Window *
                        </label>
                        <select
                          value={formData.preferredInspectionDate}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              preferredInspectionDate: e.target.value,
                            })
                          }
                          className="w-full text-xs p-3.5 rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="Morning">Morning Window (10:00 AM – 1:00 PM)</option>
                          <option value="Afternoon">Afternoon Window (2:00 PM – 5:00 PM)</option>
                          <option value="Weekend">Saturday Window (11:00 AM – 4:00 PM)</option>
                        </select>
                      </div>
                    </div>

                    {/* Declaration */}
                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs text-slate-600">
                      <label className="flex items-start gap-2.5 cursor-pointer">
                        <input
                          required
                          type="checkbox"
                          defaultChecked
                          className="mt-0.5 rounded text-blue-600"
                        />
                        <span>
                          I certify that all details provided for <strong>{formData.storeName || "this store"}</strong> are genuine and agree to undergo an in-person physical store inspection by Retro Infotech Private Limited.
                        </span>
                      </label>
                    </div>

                    <div className="pt-4 flex justify-between">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-slate-600 hover:bg-slate-100 text-xs font-semibold"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        Back
                      </button>
                      <button
                        type="submit"
                        className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-blue-600 text-white font-bold text-xs hover:bg-blue-700 transition-colors shadow-md shadow-blue-500/20"
                      >
                        <ShieldCheck className="w-4 h-4 text-blue-200" />
                        <span>Submit Stage I Application</span>
                      </button>
                    </div>
                  </div>
                )}

              </form>
            )}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
