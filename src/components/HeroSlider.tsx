"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const { t } = useLanguage();

  const slides = [
    {
      id: 1,
      image: "https://mlclinic.vip/wp-content/uploads/2025/05/39d67080-65c6-4e54-906d-d91f2455fe81-scaled.jpg",
      title: t.hero.s1_title,
      subtitle: t.hero.s1_sub
    },
    {
      id: 2,
      image: "https://mlclinic.vip/wp-content/uploads/2025/04/dentist-doctor-in-glasses-filling-teeth-to-female-QGHT5GS.jpg",
      title: t.hero.s2_title,
      subtitle: t.hero.s2_sub
    },
    {
      id: 3,
      image: "https://mlclinic.vip/wp-content/uploads/2025/04/young-woman-at-dental-exam-3XD85GH-1-e1585310843295.jpg",
      title: t.hero.s3_title,
      subtitle: t.hero.s3_sub
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-slate-900">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div 
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image 
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover opacity-50"
            priority={index === 0}
          />
          {/* Luxurious Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-slate-900/50"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent"></div>
        </div>
      ))}

      {/* Text Content */}
      <div className="relative z-10 h-full flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-4xl animate-in fade-in slide-in-from-bottom-10 duration-700">
          
          <div className="inline-flex items-center gap-3 py-2 px-4 border border-white/20 bg-white/5 backdrop-blur-md mb-8">
            <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></span>
            <span className="text-white text-xs font-bold tracking-[0.2em] uppercase">
              {t.heroTag}
            </span>
          </div>

          <h1 className="text-5xl md:text-8xl font-serif text-white leading-[1.1] mb-8 drop-shadow-lg">
            {slides[current].title}
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-200 mb-12 leading-relaxed font-light max-w-2xl border-l-2 border-yellow-500 pl-6">
            {slides[current].subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5">
            <button className="bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 text-white px-10 py-5 text-sm font-bold uppercase tracking-widest hover:shadow-[0_0_30px_rgba(234,179,8,0.3)] transition-all duration-300 transform hover:-translate-y-1">
              {t.hero.cta_primary}
            </button>
            <button className="bg-transparent border border-white/30 text-white px-10 py-5 text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-slate-900 transition-all duration-300 backdrop-blur-sm">
              {t.hero.cta_secondary}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}