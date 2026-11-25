import type { Metadata } from "next";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Retro Infotech | B2B Digital Grocery Supply Chain Platform",
  description: "Next-generation B2B digital marketplace bridging upstream agricultural producers and manufacturers with downstream retail enterprises and kiranas across Andhra Pradesh & Telangana.",
  icons: {
    icon: "/retro-logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-white text-slate-900 antialiased scroll-smooth">
      <body className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-900">
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
