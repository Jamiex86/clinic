"use client";
import { useLanguage } from "../context/LanguageContext";

export default function CustomerJourney() {
  const { t } = useLanguage();

  const steps = [
    {
      id: "01",
      title: t.process.step1,
      desc: t.process.step1_desc,
      icon: "💬"
    },
    {
      id: "02",
      title: t.process.step2,
      desc: t.process.step2_desc,
      icon: "✈️"
    },
    {
      id: "03",
      title: t.process.step3,
      desc: t.process.step3_desc,
      icon: "🦷"
    },
    {
      id: "04",
      title: t.process.step4,
      desc: t.process.step4_desc,
      icon: "🛡️"
    }
  ];

  return (
    <section className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-500 font-bold tracking-widest uppercase text-sm">{t.process.title}</span>
          <h2 className="text-4xl md:text-5xl font-serif mt-4">{t.process.heading}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Connector Line (Desktop Only) */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-slate-700"></div>

          {steps.map((step) => (
            <div key={step.id} className="relative z-0 text-center group">
              <div className="w-24 h-24 mx-auto bg-slate-800 border-4 border-slate-900 rounded-full flex items-center justify-center text-4xl mb-6 shadow-xl group-hover:scale-110 group-hover:bg-blue-600 transition duration-500">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">
                <span className="text-blue-500 block text-sm mb-1">Step {step.id}</span>
                {step.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed px-4">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}