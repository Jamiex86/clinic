"use client";
import { useState } from 'react';
import { useLanguage } from "../context/LanguageContext";

const videos = [
  {
    id: "7576975936352980226",
    title: "Hollywood Smile",
    desc: "Complete Transformation"
  },
  {
    id: "7573704386522696982",
    title: "Zirconia Crowns",
    desc: "Natural White Finish"
  },
  {
    id: "7572577996192746774",
    title: "Smile Design",
    desc: "Patient Confidence"
  }
];

export default function VideoTestimonials() {
  const { t } = useLanguage();
  const [loaded, setLoaded] = useState<Record<string, boolean>>({});

  const handleLoad = (id: string) => {
    setLoaded(prev => ({ ...prev, [id]: true }));
  };

  return (
    <section className="bg-slate-950 py-24 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <span className="text-yellow-500 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
            {t.reviews.tag}
          </span>
          <h2 className="text-4xl md:text-5xl font-serif mt-4">
            {t.reviews.title}
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto font-light">
            {t.reviews.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
          {videos.map((video) => (
            <div key={video.id} className="flex flex-col w-full max-w-[325px]">
              
              {/* Video Container */}
              <div className="relative w-full h-[580px] rounded-2xl overflow-hidden shadow-2xl border border-slate-800 bg-slate-900 group">
                
                {/* Skeleton */}
                {!loaded[video.id] && (
                  <div className="absolute inset-0 z-10 bg-slate-800 animate-pulse flex flex-col items-center justify-center">
                    <div className="w-12 h-12 rounded-full border-2 border-slate-700 border-t-yellow-500 animate-spin mb-4"></div>
                    <span className="text-xs font-bold tracking-widest text-slate-500 uppercase">{t.reviews.loading}</span>
                  </div>
                )}

                {/* TikTok Embed */}
                <iframe
                  src={`https://www.tiktok.com/embed/v2/${video.id}?lang=en-US`}
                  className={`w-full h-full transition-opacity duration-700 ${loaded[video.id] ? 'opacity-100' : 'opacity-0'}`}
                  allowFullScreen
                  scrolling="no"
                  style={{ border: 'none' }}
                  title={`TikTok Video ${video.id}`}
                  onLoad={() => handleLoad(video.id)}
                ></iframe>
              </div>

              {/* Info Below */}
              <div className="mt-6 text-center">
                <h3 className="text-xl font-serif font-bold text-white mb-1">{video.title}</h3>
                <p className="text-sm text-yellow-500 uppercase tracking-widest">{video.desc}</p>
                <div className="mt-3 w-12 h-px bg-slate-800 mx-auto"></div>
              </div>

            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
           <a 
             href="https://www.tiktok.com/@mlclinic.vip" 
             target="_blank" 
             rel="noopener noreferrer"
             className="inline-flex items-center gap-2 text-white hover:text-yellow-500 transition-colors font-bold tracking-widest text-xs uppercase border-b border-white/20 pb-1 hover:border-yellow-500"
           >
             <span>{t.reviews.view_more}</span>
             <span>→</span>
           </a>
        </div>

      </div>
    </section>
  );
}