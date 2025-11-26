"use client";
import CompareSlider from "../components/ CompareSlider";
import VideoTestimonials from "../components/VideoTestimonials";
import HeroSlider from "../components/HeroSlider";
import CustomerJourney from "../components/CustomerJourney";
import { useLanguage } from "../context/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* 1. HERO SLIDER */}
      <HeroSlider />

      {/* 2. KEY BENEFITS */}
      <section className="bg-white py-20 relative -mt-10 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 md:p-12 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-blue-50 rounded-full flex items-center justify-center text-3xl mb-4">🇪🇺</div>
              <h3 className="font-bold text-slate-900 mb-2">{t.benefits.european}</h3>
              <p className="text-sm text-slate-500">{t.benefits.european_desc}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-blue-50 rounded-full flex items-center justify-center text-3xl mb-4">🔬</div>
              <h3 className="font-bold text-slate-900 mb-2">{t.benefits.tech}</h3>
              <p className="text-sm text-slate-500">{t.benefits.tech_desc}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-blue-50 rounded-full flex items-center justify-center text-3xl mb-4">🗣️</div>
              <h3 className="font-bold text-slate-900 mb-2">{t.benefits.team}</h3>
              <p className="text-sm text-slate-500">{t.benefits.team_desc}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-blue-50 rounded-full flex items-center justify-center text-3xl mb-4">🏖️</div>
              <h3 className="font-bold text-slate-900 mb-2">{t.benefits.vip}</h3>
              <p className="text-sm text-slate-500">{t.benefits.vip_desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CUSTOMER JOURNEY */}
      <CustomerJourney />

      {/* 4. BEFORE & AFTER */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-4">{t.results.title}</h2>
            <p className="text-slate-500">{t.results.subtitle}</p>
          </div>
          <CompareSlider />
        </div>
      </section>

      {/* 5. SERVICES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
             <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-4">{t.services.title}</h2>
             <p className="text-slate-500 max-w-2xl mx-auto">{t.services.subtitle}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100 hover:shadow-xl transition-all group">
              <span className="text-5xl mb-6 block">🦷</span>
              <h3 className="text-2xl font-serif text-slate-900 mb-3">{t.services.implants}</h3>
              <p className="text-slate-500 mb-6">{t.services.implants_desc}</p>
              <a href="/treatments" className="text-blue-600 font-bold group-hover:underline">{t.services.learn_more} &rarr;</a>
            </div>
             <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100 hover:shadow-xl transition-all group">
              <span className="text-5xl mb-6 block">✨</span>
              <h3 className="text-2xl font-serif text-slate-900 mb-3">{t.services.veneers}</h3>
              <p className="text-slate-500 mb-6">{t.services.veneers_desc}</p>
              <a href="/treatments" className="text-blue-600 font-bold group-hover:underline">{t.services.learn_more} &rarr;</a>
            </div>
             <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100 hover:shadow-xl transition-all group">
              <span className="text-5xl mb-6 block">💎</span>
              <h3 className="text-2xl font-serif text-slate-900 mb-3">{t.services.crowns}</h3>
              <p className="text-slate-500 mb-6">{t.services.crowns_desc}</p>
              <a href="/treatments" className="text-blue-600 font-bold group-hover:underline">{t.services.learn_more} &rarr;</a>
            </div>
          </div>
        </div>
      </section>

      {/* 6. VIDEO TESTIMONIALS */}
      <VideoTestimonials />

    </div>
  );
}