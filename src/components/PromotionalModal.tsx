"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function PromotionalModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // DEV MODE: Always show the modal on refresh
    const timer = setTimeout(() => {
      setIsOpen(true); 
    }, 500); // 0.5s delay for smooth entrance
    
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    // sessionStorage.setItem('promo_seen', 'true'); // DISABLED FOR DEV
  };

  if (!isOpen) return null;

  return (
    // Z-Index 9999 ensures this is the top-most layer
    <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4">
      
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity" 
        onClick={handleClose}
      ></div>

      {/* Modal Content */}
      <div className="relative z-[10000] bg-white rounded-2xl shadow-2xl overflow-hidden max-w-4xl w-full flex flex-col md:flex-row animate-in fade-in zoom-in-95 duration-300">
        
        {/* Close Button */}
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 z-20 w-8 h-8 flex items-center justify-center bg-white/80 rounded-full text-slate-500 hover:bg-red-500 hover:text-white transition backdrop-blur-md"
        >
          ✕
        </button>

        {/* Left Side - Image */}
        <div className="relative w-full md:w-1/2 h-64 md:h-auto bg-slate-100">
          <Image 
            src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80" 
            alt="Winter Smile Sale"
            fill
            className="object-cover"
          />
          {/* Luxury Overlay Effect */}
          <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay"></div>
          <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-lg shadow-lg border border-white">
             <p className="font-bold text-slate-900 text-sm">✨ New Year Special</p>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-2">
            New Year,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-yellow-500">
              New Smile!
            </span>
          </h2>
          
          <p className="text-slate-600 mb-6 text-sm leading-relaxed">
            Start 2025 with confidence. Book your treatment before January 31st and receive our exclusive VIP Winter Package.
          </p>

          {/* Benefits List */}
          <div className="space-y-3 mb-8">
            <div className="flex items-center gap-3 bg-slate-50 p-3 rounded-lg border border-slate-100">
              <span className="text-2xl">🏨</span>
              <div className="text-left">
                <p className="font-bold text-slate-900 text-sm">Free 5-Star Hotel</p>
                <p className="text-xs text-slate-500">7 Nights Accommodation included</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-slate-50 p-3 rounded-lg border border-slate-100">
              <span className="text-2xl">🚐</span>
              <div className="text-left">
                <p className="font-bold text-slate-900 text-sm">VIP Transfers</p>
                <p className="text-xs text-slate-500">Airport & Clinic chauffeur</p>
              </div>
            </div>
          </div>

          <Link 
            href="/contact" 
            onClick={handleClose}
            className="w-full bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-yellow-500/30 hover:scale-[1.02] transition-all transform uppercase tracking-widest text-sm"
          >
            Claim Offer Now
          </Link>
          
          <p className="text-[10px] text-slate-400 mt-4 uppercase tracking-wider">Valid until Jan 31, 2025 • Limited spots</p>
        </div>
      </div>
    </div>
  );
}