"use client";

import React, { useState } from "react";
import {
  X,
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";

export default function RetailerApplicationModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [token, setToken] = useState("");

  // Form State
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
    preferredInspectionDate: "",
  });

  if (!isOpen) return null;

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
    const randomToken =
      "RI-" +
      (formData.state === "Andhra Pradesh" ? "AP" : "TS") +
      "-2026-" +
      Math.floor(1000 + Math.random() * 9000);
    setToken(randomToken);
    setSubmitted(true);
  };

  const resetModal = () => {
    setStep(1);
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-8">
        
        {/* Modal Top Bar */}
        <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xs">
              RI
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900">
                Stage I — Digital Portal Application
              </h3>
              <p className="text-[11px] text-slate-500">
                Retro Infotech B2B Closed Network Onboarding
              </p>
            </div>
          </div>
          <button
            onClick={resetModal}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Bar */}
        {!submitted && (
          <div className="px-6 pt-4 pb-2 bg-white flex items-center justify-between border-b border-slate-100">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex-1 flex items-center">
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                    step >= s
                      ? "bg-blue-600 text-white shadow-xs"
                      : "bg-slate-100 text-slate-400"
                  }`}
                >
                  {s}
                </div>
                <span className="ml-2 text-xs font-semibold text-slate-700 hidden sm:inline">
                  {s === 1
                    ? "Store Profile"
                    : s === 2
                    ? "Statutory & Turnover"
                    : "Contact & Schedule"}
                </span>
                {s < 3 && (
                  <div
                    className={`flex-1 h-1 mx-3 rounded-full ${
                      step > s ? "bg-blue-600" : "bg-slate-200"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        )}

        {/* Modal Content */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto">
          {submitted ? (
            /* Success State */
            <div className="text-center py-6 space-y-5">
              <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  Stage I Submitted Successfully
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900 mt-3">
                  Application Token: <span className="font-mono text-blue-600">{token}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-md mx-auto">
                  Your primary store credentials have been logged in the Retro Infotech central registry.
                </p>
              </div>

              {/* Next Steps card */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 text-left space-y-3 text-xs">
                <p className="font-bold text-slate-800 uppercase tracking-wide">
                  What Happens Next (Stages II, III & IV):
                </p>
                <div className="space-y-2 text-slate-600">
                  <div className="flex items-start gap-2">
                    <span className="font-bold text-blue-600">1.</span>
                    <span>
                      An authorized Retro Infotech <strong>Field Verification Officer</strong> will contact you at <strong>{formData.mobile || "+91 9121404929"}</strong> within 24-48 business hours to confirm store inspection.
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="font-bold text-blue-600">2.</span>
                    <span>
                      Please keep original <strong>GSTIN certificate</strong>, municipal license, and last 6 months bank turnover statements accessible at your storefront.
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="font-bold text-blue-600">3.</span>
                    <span>
                      Upon physical inspection clearance, your authenticated wholesale account credentials will be activated via SMS and email.
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={resetModal}
                  className="w-full sm:w-auto px-8 py-3 rounded-xl bg-blue-600 text-white font-semibold text-xs hover:bg-blue-700 transition-colors shadow-sm"
                >
                  Done & Return to Homepage
                </button>
              </div>
            </div>
          ) : (
            /* Multi-step Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Step 1: Store & Entity Information */}
              {step === 1 && (
                <div className="space-y-4">
                  <div>
                    <h4 className="text-base font-bold text-slate-900">
                      Storefront & Commercial Establishment
                    </h4>
                    <p className="text-xs text-slate-500">
                      Enter details of your active physical retail grocery business.
                    </p>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Store Name / Commercial Enterprise *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g., Sri Lakshmi Supermarket & Kirana"
                      value={formData.storeName}
                      onChange={(e) =>
                        setFormData({ ...formData, storeName: e.target.value })
                      }
                      className="w-full text-xs p-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Commercial Vintage (Operating Years) *
                      </label>
                      <select
                        value={formData.vintageYears}
                        onChange={(e) =>
                          setFormData({ ...formData, vintageYears: e.target.value })
                        }
                        className="w-full text-xs p-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                      >
                        <option value="2">2 - 3 Continuous Years</option>
                        <option value="4">4 - 5 Continuous Years</option>
                        <option value="6">6+ Years Established Vintage</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Legal Business Entity Type *
                      </label>
                      <select
                        value={formData.entityType}
                        onChange={(e) =>
                          setFormData({ ...formData, entityType: e.target.value })
                        }
                        className="w-full text-xs p-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                      >
                        <option value="Proprietorship">Sole Proprietorship</option>
                        <option value="Partnership">Partnership Firm</option>
                        <option value="LLP">Limited Liability Partnership</option>
                        <option value="Private Limited">Private Limited Company</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Physical Storefront Address (Commercial Signboard Premise) *
                    </label>
                    <textarea
                      required
                      rows={2}
                      placeholder="Door No, Street Name, Landmark, Commercial Complex"
                      value={formData.address}
                      onChange={(e) =>
                        setFormData({ ...formData, address: e.target.value })
                      }
                      className="w-full text-xs p-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                        className="w-full text-xs p-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                      >
                        <option value="Andhra Pradesh">Andhra Pradesh</option>
                        <option value="Telangana">Telangana</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        City / District Hub *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="e.g., Vijayawada / Guntur"
                        value={formData.city}
                        onChange={(e) =>
                          setFormData({ ...formData, city: e.target.value })
                        }
                        className="w-full text-xs p-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                        placeholder="e.g., 520015"
                        value={formData.pincode}
                        onChange={(e) =>
                          setFormData({ ...formData, pincode: e.target.value })
                        }
                        className="w-full text-xs p-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div className="pt-2 flex justify-end">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-blue-600 text-white font-semibold text-xs hover:bg-blue-700 transition-colors shadow-xs"
                    >
                      <span>Continue to Statutory Step</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: Statutory Documentation & Turnover */}
              {step === 2 && (
                <div className="space-y-4">
                  <div>
                    <h4 className="text-base font-bold text-slate-900">
                      Statutory Audit & Commercial Volume
                    </h4>
                    <p className="text-xs text-slate-500">
                      Section 3 requires verifiable proof of ₹25L+ monthly turnover.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        GSTIN Number (Mandatory) *
                      </label>
                      <input
                        required
                        type="text"
                        maxLength={15}
                        placeholder="e.g., 37AAAAA0000A1Z5"
                        value={formData.gstin}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            gstin: e.target.value.toUpperCase(),
                          })
                        }
                        className="w-full font-mono text-xs p-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Municipal Shop / Trade License No *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="e.g., VMC-TL-2024-9182"
                        value={formData.tradeLicenseNo}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            tradeLicenseNo: e.target.value,
                          })
                        }
                        className="w-full text-xs p-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Average Monthly Grocery Sales Volume *
                    </label>
                    <select
                      value={formData.monthlyTurnover}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          monthlyTurnover: e.target.value,
                        })
                      }
                      className="w-full text-xs p-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                    >
                      <option value="25">₹25 - 35 Lakhs / month (Benchmark Passed)</option>
                      <option value="50">₹35 - 60 Lakhs / month</option>
                      <option value="75">₹60 Lakhs - ₹1 Crore / month</option>
                      <option value="120">Exceeding ₹1 Crore / month (Institutional Buyer)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-2">
                      Primary Loose Commodities Required for Procurement:
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
                          className={`text-xs p-2.5 rounded-xl border text-left font-medium transition-all ${
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

                  <div className="pt-2 flex justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-slate-600 hover:bg-slate-100 text-xs font-semibold"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-blue-600 text-white font-semibold text-xs hover:bg-blue-700 transition-colors shadow-xs"
                    >
                      <span>Continue to Contact & Schedule</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Contact & Field Inspection Booking */}
              {step === 3 && (
                <div className="space-y-4">
                  <div>
                    <h4 className="text-base font-bold text-slate-900">
                      Proprietor Contact & Field Inspection
                    </h4>
                    <p className="text-xs text-slate-500">
                      Our field officer will coordinate with this designated contact.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Proprietor / Authorized Manager Name *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="e.g., Ramesh Kumar"
                        value={formData.ownerName}
                        onChange={(e) =>
                          setFormData({ ...formData, ownerName: e.target.value })
                        }
                        className="w-full text-xs p-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Mobile Number (OTP & Visit Coordination) *
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
                        className="w-full text-xs p-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Official Store Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="store@example.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full text-xs p-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Preferred Store Inspection Window
                      </label>
                      <select
                        value={formData.preferredInspectionDate}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            preferredInspectionDate: e.target.value,
                          })
                        }
                        className="w-full text-xs p-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                      >
                        <option value="Morning">Morning (10:00 AM - 1:00 PM)</option>
                        <option value="Afternoon">Afternoon (2:00 PM - 5:00 PM)</option>
                        <option value="Weekend">Saturday Window (11:00 AM - 4:00 PM)</option>
                      </select>
                    </div>
                  </div>

                  {/* Declaration check */}
                  <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 text-[11px] text-slate-600 space-y-1.5">
                    <label className="flex items-start gap-2 cursor-pointer font-medium text-slate-800">
                      <input
                        required
                        type="checkbox"
                        defaultChecked
                        className="mt-0.5 rounded text-blue-600"
                      />
                      <span>
                        I declare that our physical storefront has completed 2+ continuous operating years, meets the ₹25 Lakhs monthly sales benchmark, and agrees to in-person physical inspection as mandated by Retro Infotech Private Limited.
                      </span>
                    </label>
                  </div>

                  <div className="pt-2 flex justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-slate-600 hover:bg-slate-100 text-xs font-semibold"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      Back
                    </button>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-blue-600 text-white font-bold text-xs hover:bg-blue-700 transition-colors shadow-md shadow-blue-500/20"
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
    </div>
  );
}
