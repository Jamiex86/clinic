"use client";
import React, { useState, useEffect } from 'react';

export default function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Fade in after a short delay
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <a 
      href="https://wa.me/905551234567" 
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 group transition-all duration-500 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
      aria-label="Chat on WhatsApp"
    >
      {/* Label (Hidden on mobile initially, expands on hover) */}
      <div className="bg-white text-slate-900 px-4 py-2 rounded-full shadow-lg font-bold text-sm border border-slate-100 transition-all duration-300 origin-right scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 hidden md:block">
        Chat with us 👋
      </div>

      {/* Button Container with Pulse Effect */}
      <div className="relative flex items-center justify-center w-16 h-16 bg-[#25D366] rounded-full shadow-2xl hover:scale-110 hover:shadow-[#25D366]/40 transition-all duration-300">
        
        {/* Pulse Rings */}
        <div className="absolute inset-0 rounded-full border-2 border-[#25D366] opacity-0 animate-ping"></div>
        <div className="absolute inset-0 rounded-full bg-[#25D366] opacity-20 animate-pulse"></div>

        {/* WhatsApp Icon SVG */}
        <svg width="35" height="35" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg" className="relative z-10 drop-shadow-sm">
          <path d="M17.472 14.382C17.119 14.205 15.396 13.36 15.078 13.251C14.76 13.142 14.529 13.088 14.298 13.439C14.067 13.791 13.409 14.558 13.206 14.79C13.004 15.021 12.801 15.05 12.454 14.873C12.107 14.697 10.988 14.331 9.661 13.149C8.616 12.217 7.91 11.066 7.707 10.713C7.505 10.36 7.686 10.173 7.86 10.001C8.017 9.845 8.209 9.596 8.383 9.394C8.557 9.192 8.615 9.043 8.73 8.811C8.846 8.58 8.788 8.378 8.701 8.206C8.615 8.033 7.919 6.32 7.63 5.626C7.348 4.956 7.065 5.047 6.871 5.047C6.69 5.047 6.488 5.043 6.285 5.043C6.083 5.043 5.756 5.119 5.488 5.41C5.22 5.701 4.467 6.407 4.467 7.842C4.467 9.277 5.512 10.663 5.664 10.865C5.816 11.066 7.729 14.017 10.658 15.281C11.355 15.582 11.898 15.762 12.32 15.896C13.155 16.161 13.916 16.12 14.516 16.031C15.187 15.931 16.582 15.187 16.871 14.372C17.161 13.557 17.161 12.856 17.074 12.704C16.988 12.552 16.756 12.461 16.402 12.285H16.409V12.288ZM12.008 21.821C10.268 21.821 8.643 21.378 7.213 20.603L7.104 20.536L3.454 21.516L4.475 18.067L4.397 17.939C3.541 16.539 3.09 14.931 3.09 13.256C3.09 8.286 7.087 4.234 12.015 4.234C14.398 4.234 16.638 5.162 18.324 6.848C20.01 8.534 20.938 10.774 20.938 13.256C20.931 18.232 16.928 21.821 12.001 21.821H12.008Z" />
        </svg>
      </div>
    </a>
  );
}