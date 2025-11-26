import Image from "next/image";
import Link from "next/link";

const treatments = [
  {
    title: "Zirconia Crowns",
    desc: "Extremely durable, high-quality zirconium that looks just like natural teeth.",
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80",
    link: "/treatments/zirconia-crowns"
  },
  {
    title: "E-Max Veneers",
    desc: "Ultra-thin porcelain layers for creating a flawless, celebrity-style smile.",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80",
    link: "/treatments/e-max-veneers"
  },
  {
    title: "Composite Veneers",
    desc: "A quick, affordable smile makeover applied directly to the teeth in one visit.",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80",
    link: "/treatments/composite-veneers"
  },
  {
    title: "Dental Implants",
    desc: "Permanent titanium solution for missing teeth. Lasts a lifetime.",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80",
    link: "/treatments/dental-implants"
  },
  {
    title: "Hair Transplants",
    desc: "Advanced FUE & DHI techniques for natural, permanent hair restoration.",
    image: "https://images.unsplash.com/photo-1616353986422-487627447814?auto=format&fit=crop&q=80",
    link: "/treatments/hair-transplant"
  }
];

export default function TreatmentsPage() {
  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Luxury Hero Header */}
      <div className="bg-slate-950 text-white py-32 text-center relative overflow-hidden">
        <div className="relative z-10">
           <span className="text-yellow-500 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">World Class Care</span>
           <h1 className="text-5xl md:text-6xl font-serif mb-6">Our Treatments</h1>
           <p className="text-slate-400 mt-4 max-w-2xl mx-auto font-light text-lg">
             Premium procedures performed by expert surgeons in Antalya using European-certified materials.
           </p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-950 z-0"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 -mt-20 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {treatments.map((item, index) => (
            <Link 
              key={index} 
              href={item.link}
              className="bg-white group border border-slate-100 shadow-xl hover:shadow-2xl hover:shadow-yellow-500/10 transition-all duration-500 flex flex-col h-full overflow-hidden"
            >
              <div className="relative w-full h-64 overflow-hidden">
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/20 transition-colors duration-500"></div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-serif text-slate-900 mb-3 group-hover:text-yellow-600 transition-colors">{item.title}</h3>
                <p className="text-slate-500 mb-6 text-sm leading-relaxed flex-grow">{item.desc}</p>
                <div className="pt-6 border-t border-slate-100 flex items-center gap-2 text-yellow-600 font-bold text-xs uppercase tracking-widest">
                  View Details <span>→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}