import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import Navbar from "../components/Navbar";
import PromotionalModal from "../components/PromotionalModal";
import Footer from "../components/Footer"; // NEW IMPORT
import { LanguageProvider } from "../context/LanguageContext";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "ML Clinic | Premium Dental & Hair Transplant in Turkey",
  description: "European quality dental care and hair transplants in Antalya. VIP service.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${inter.variable} antialiased bg-white text-slate-900`}>
        <LanguageProvider>
          <Navbar />
          <PromotionalModal />
          <main className="pt-36 min-h-screen">
            {children}
          </main>
          <Footer /> {/* The Component */}
          <FloatingWhatsApp />
        </LanguageProvider>
      </body>
    </html>
  );
}