"use client";
import Link from "next/link";
import LanguageSelector from "./LanguageSelector";
import { useLanguage } from "../context/LanguageContext";
import { useState, useEffect } from "react";

export default function Navbar() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed w-full z-50 shadow-2xl">
      
      {/* TOP BAR - GOLD GRADIENT */}
      <div className="bg-gradient-to-r from-yellow-700 via-yellow-600 to-yellow-700 text-white py-2 relative z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-[10px] md:text-xs font-bold tracking-widest uppercase">
          
          {/* Left Side: Contact */}
          <div className="flex items-center space-x-6">
             <a href="https://wa.me/905551234567" className="flex items-center gap-2 hover:text-slate-200 transition-colors">
               <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382C17.119 14.205 15.396 13.36 15.078 13.251C14.76 13.142 14.529 13.088 14.298 13.439C14.067 13.791 13.409 14.558 13.206 14.79C13.004 15.021 12.801 15.05 12.454 14.873C12.107 14.697 10.988 14.331 9.661 13.149C8.616 12.217 7.91 11.066 7.707 10.713C7.505 10.36 7.686 10.173 7.86 10.001C8.017 9.845 8.209 9.596 8.383 9.394C8.557 9.192 8.615 9.043 8.73 8.811C8.846 8.58 8.788 8.378 8.701 8.206C8.615 8.033 7.919 6.32 7.63 5.626C7.348 4.956 7.065 5.047 6.871 5.047C6.69 5.047 6.488 5.043 6.285 5.043C6.083 5.043 5.756 5.119 5.488 5.41C5.22 5.701 4.467 6.407 4.467 7.842C4.467 9.277 5.512 10.663 5.664 10.865C5.816 11.066 7.729 14.017 10.658 15.281C11.355 15.582 11.898 15.762 12.32 15.896C13.155 16.161 13.916 16.12 14.516 16.031C15.187 15.931 16.582 15.187 16.871 14.372C17.161 13.557 17.161 12.856 17.074 12.704C16.988 12.552 16.756 12.461 16.402 12.285H16.409V12.288ZM12.008 21.821C10.268 21.821 8.643 21.378 7.213 20.603L7.104 20.536L3.454 21.516L4.475 18.067L4.397 17.939C3.541 16.539 3.09 14.931 3.09 13.256C3.09 8.286 7.087 4.234 12.015 4.234C14.398 4.234 16.638 5.162 18.324 6.848C20.01 8.534 20.938 10.774 20.938 13.256C20.931 18.232 16.928 21.821 12.001 21.821H12.008Z" /></svg>
               <span>WhatsApp</span>
             </a>
             <a href="tel:+905551234567" className="flex items-center gap-2 hover:text-slate-200 transition-colors">
               <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
               <span>Call Us</span>
             </a>
          </div>

          {/* Right Side: Extras */}
          <div className="flex items-center space-x-6">
             <Link href="/contact" className="hover:text-slate-200 transition-colors hidden md:block">Book Online</Link>
             <div className="h-3 w-px bg-white/30 hidden md:block"></div>
             <LanguageSelector />
          </div>

        </div>
      </div>

      {/* MAIN BAR - ALWAYS DARK LUXURY SLATE */}
      <div className={`transition-all duration-500 border-b border-slate-800 bg-slate-950 ${scrolled ? 'py-2 shadow-lg' : 'py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            
            {/* LOGO */}
            <div className="flex-shrink-0 flex items-center">
               <Link href="/" className="group flex items-center gap-3">
                 <div className="w-12 h-12 bg-white flex items-center justify-center text-slate-950 font-serif font-bold text-2xl border-2 border-yellow-500 rounded-sm">
                   ML
                 </div>
                 <div className="flex flex-col">
                   <span className="text-xl text-white font-serif font-bold tracking-tighter leading-none">
                     ML CLINIC
                   </span>
                   <span className="text-[10px] text-yellow-500 tracking-[0.3em] uppercase leading-none mt-1">
                     Vip Dental
                   </span>
                 </div>
               </Link>
            </div>

            {/* CENTER MENU */}
            <nav className="hidden lg:flex space-x-8 items-center">
              {[
                { href: '/', label: t.nav.home },
                { href: '/treatments', label: t.nav.services },
                { href: '/gallery', label: t.nav.gallery },
                { href: '/about', label: t.nav.about },
                { href: '/contact', label: t.nav.contact }
              ].map((link) => (
                <Link 
                  key={link.href}
                  href={link.href} 
                  className="text-sm font-medium text-slate-300 hover:text-white hover:border-b hover:border-yellow-500 pb-1 transition-all uppercase tracking-wider"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* RIGHT ACTION */}
            <div className="flex items-center gap-4">
              <Link 
                href="/contact" 
                className="hidden md:block bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 text-white px-6 md:px-8 py-2 md:py-3 rounded-none text-xs font-bold uppercase tracking-widest transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(234,179,8,0.4)]"
              >
                {t.nav.quote}
              </Link>
              
              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden text-white p-2 hover:text-yellow-500 transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* MOBILE MENU DRAWER */}
      <div 
        className={`lg:hidden bg-slate-950 border-t border-slate-800 transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? 'max-h-[70vh] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col space-y-1">
          {[
            { href: '/', label: t.nav.home },
            { href: '/treatments', label: t.nav.services },
            { href: '/gallery', label: t.nav.gallery },
            { href: '/about', label: t.nav.about },
            { href: '/contact', label: t.nav.contact }
          ].map((link) => (
            <Link 
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate-300 hover:text-white hover:bg-slate-900 px-4 py-3 rounded-sm transition-all uppercase tracking-wider border-l-2 border-transparent hover:border-yellow-500"
            >
              {link.label}
            </Link>
          ))}
          <Link 
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 text-white px-4 py-3 rounded-sm text-sm font-bold uppercase tracking-widest text-center mt-4"
          >
            {t.nav.quote}
          </Link>
        </nav>
      </div>

    </header>
  );
}
