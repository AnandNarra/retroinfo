import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 pt-16 pb-12 text-slate-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-200">
          {/* Col 1: Corporate Identity */}
          <div className="space-y-4">
            <div className="relative h-11 w-48">
              <Image
                src="/retro-logo.png"
                alt="Retro Infotech Private Limited"
                width={220}
                height={55}
                className="object-contain"
              />
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Specialized Business-to-Business (B2B) digital marketplace engineered to bridge upstream grocery producers and agricultural aggregators directly with downstream retail kiranas and supermarkets.
            </p>
            <div className="text-xs space-y-1.5 pt-1 font-mono text-slate-500">
              <p>
                <strong className="text-slate-800">CIN:</strong> U62011AP2026PTC128463
              </p>
              <p>
                <strong className="text-slate-800">Entity:</strong> Private Limited Company
              </p>
              <p>
                <strong className="text-slate-800">Territory:</strong> Andhra Pradesh & Telangana
              </p>
            </div>
          </div>

          {/* Col 2: Registered Office & Branch Hubs */}
          <div className="space-y-3">
            <h5 className="text-sm font-bold text-slate-900 tracking-wide uppercase">
              Registered Office
            </h5>
            <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
              <MapPin className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <p className="font-semibold text-slate-800">
                  Retro Infotech Private Limited
                </p>
                <p className="leading-relaxed">
                  D No. 77-222-29, Plot No. 622,
                  <br />
                  LBS Nagar, Payakapuram,
                  <br />
                  Vijayawada - 520015,
                  <br />
                  Andhra Pradesh, India
                </p>
              </div>
            </div>
            <div className="pt-2 space-y-2 text-xs">
              <a
                href="tel:+919121404929"
                className="flex items-center gap-2 text-slate-700 hover:text-blue-600 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-amber-500" />
                <span>+91 9121404929</span>
              </a>
              <a
                href="mailto:retroinfotech1@gmail.com"
                className="flex items-center gap-2 text-slate-700 hover:text-blue-600 transition-colors break-all"
              >
                <Mail className="w-3.5 h-3.5 text-blue-500" />
                <span>retroinfotech1@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Col 3: Operational Links */}
          <div className="space-y-3">
            <h5 className="text-sm font-bold text-slate-900 tracking-wide uppercase">
              Operations & Verification
            </h5>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link
                  href="/#commodities"
                  className="hover:text-blue-600 transition-colors flex items-center gap-1.5"
                >
                  <span>Loose Bulk Commodities Catalog</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/#onboarding"
                  className="hover:text-blue-600 transition-colors flex items-center gap-1.5"
                >
                  <span>4-Stage Field Verification Mechanism</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="hover:text-blue-600 transition-colors flex items-center gap-1.5"
                >
                  <span>Regional Delivery Desk & Office</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Statutory Compliance & Governance */}
          <div className="space-y-3">
            <h5 className="text-sm font-bold text-slate-900 tracking-wide uppercase">
              Statutory Governance
            </h5>
            <div className="space-y-2 text-xs sm:text-sm">
              <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                <p className="font-semibold text-slate-900 text-xs">
                  Founder & Directors
                </p>
                <div className="mt-1.5 space-y-1 text-xs">
                  <p className="text-slate-800 font-medium">
                    • Naru Naga Venkata Charan Kumar{" "}
                    <span className="text-slate-500 font-normal">
                      (Founder & Director)
                    </span>
                  </p>
                  <p className="text-slate-600">
                    • Gajula Venkata Nanda Kishore (Director)
                  </p>
                  <p className="text-slate-600">
                    • Kakarlapudi Pallavi (Director)
                  </p>
                </div>
              </div>

              <p className="text-[11px] text-slate-600 leading-tight pt-2">
                All transactions strictly pertain to loose, unbranded wholesale grocery commodities supplied in commercial bulk formats.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <p>
            © 2026 Retro Infotech Private Limited. All rights reserved. CIN: U62011AP2026PTC128463
          </p>
          <div className="flex items-center gap-6 text-slate-600">
            <Link href="/#onboarding" className="hover:text-slate-900">
              Onboarding Process
            </Link>
            <span>•</span>
            <Link href="/#contact" className="hover:text-slate-900">
              Field KYC Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
