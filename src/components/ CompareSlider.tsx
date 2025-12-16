"use client";
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';

const cases = [
  {
    id: 1,
    title: "Smile Makeover",
    before: "https://mlclinic.vip/wp-content/uploads/2025/05/7-a.png",
    after: "https://mlclinic.vip/wp-content/uploads/2025/05/7-b.png",
    tags: ["Zirconia Crowns", "Smile Design"]
  },
  {
    id: 2,
    title: "Full Restoration",
    before: "https://mlclinic.vip/wp-content/uploads/2025/05/1_1_550x300.jpg",
    after: "https://mlclinic.vip/wp-content/uploads/2025/05/1._1_550x300.jpg",
    tags: ["Implants", "Ceramic Bridge"]
  }
];

export default function CompareSlider() {
  const { t } = useLanguage();
  const [activeCase, setActiveCase] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setSliderPosition(50);
  }, [activeCase]);

  const handleMove = (event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = 'touches' in event ? event.touches[0].clientX : event.clientX;
    const position = ((x - rect.left) / rect.width) * 100;
    if (isDragging || event.type === 'click') {
      setSliderPosition(Math.min(100, Math.max(0, position)));
    }
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  return (
    <div className="w-full max-w-5xl mx-auto">
      
      <div className="bg-white p-4 rounded-3xl shadow-2xl shadow-blue-900/10 border border-slate-100 relative">
        
        {/* Title & Tags (Bottom Left) */}
        <div className="absolute bottom-8 left-8 z-30 hidden md:block pointer-events-none">
          <h3 className="text-2xl font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] mb-3">{cases[activeCase].title}</h3>
          <div className="flex gap-2">
            {cases[activeCase].tags.map(tag => (
              <span key={tag} className="bg-black/60 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full border border-white/20 shadow-lg">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div 
          ref={containerRef}
          className="relative w-full aspect-[4/3] md:aspect-[16/9] overflow-hidden rounded-2xl cursor-ew-resize select-none touch-none"
          onMouseMove={(e) => isDragging && handleMove(e)}
          onTouchMove={handleMove}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleMouseDown}
          onTouchEnd={handleMouseUp}
          onClick={(e) => {
             const rect = e.currentTarget.getBoundingClientRect();
             const position = ((e.clientX - rect.left) / rect.width) * 100;
             setSliderPosition(Math.min(100, Math.max(0, position)));
          }}
        >
          {/* AFTER Image (Base Layer) */}
          <div className="absolute inset-0 w-full h-full">
             <Image 
               src={cases[activeCase].after}
               alt="After Result"
               fill
               className="object-cover"
               priority
             />
             <span className="absolute top-4 right-4 bg-black/50 text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-widest backdrop-blur-sm z-10 border border-white/20 shadow-lg">{t.compare.after}</span>
          </div>

          {/* BEFORE Image (Top Layer - Clipped) */}
          <div 
            className="absolute inset-0 w-full h-full border-r-4 border-white overflow-hidden shadow-2xl"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
              <Image 
                src={cases[activeCase].before}
                alt="Before Result"
                fill
                className="object-cover" 
                priority
              />
              <span className="absolute top-4 left-4 bg-black/50 text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-widest backdrop-blur-sm z-10 border border-white/20 shadow-lg">{t.compare.before}</span>
          </div>

          {/* Slider Handle */}
          <div 
            className="absolute inset-y-0"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-14 h-14 bg-white rounded-full shadow-[0_0_20px_rgba(0,0,0,0.3)] flex items-center justify-center text-slate-900 cursor-grab active:cursor-grabbing hover:scale-110 transition-transform z-40">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
              </svg>
            </div>
          </div>
        </div>
        
        <div className="flex justify-between mt-4 text-[10px] font-bold tracking-widest text-slate-400 uppercase px-4">
          <span>{t.compare.original}</span>
          <span>{t.compare.slide}</span>
          <span>{t.compare.final}</span>
        </div>
      </div>

      {/* CASE SWITCHER */}
      <div className="flex justify-center gap-4 mt-8">
        {cases.map((item, index) => (
          <button
            key={item.id}
            onClick={() => setActiveCase(index)}
            className={`group relative w-20 h-20 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
              activeCase === index 
                ? 'border-yellow-500 scale-110 shadow-lg shadow-yellow-500/30' 
                : 'border-transparent opacity-60 hover:opacity-100'
            }`}
          >
            <Image 
              src={item.after} 
              alt={item.title} 
              fill 
              className="object-cover" 
            />
            {activeCase === index && (
               <div className="absolute inset-0 bg-yellow-500/20 mix-blend-overlay"></div>
            )}
          </button>
        ))}
      </div>
      
      {/* Mobile Title */}
      <div className="text-center mt-4 md:hidden">
        <p className="text-slate-900 font-serif font-bold text-lg">{cases[activeCase].title}</p>
        <p className="text-slate-500 text-sm">{cases[activeCase].tags.join(" • ")}</p>
      </div>

    </div>
  );
}