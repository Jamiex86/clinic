import Image from "next/image";

const images = [
  "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1629909615184-74f495363b63?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&q=80",
];

export default function GalleryPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-slate-950 text-white py-32 text-center">
        <span className="text-yellow-500 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Transformation Showcase</span>
        <h1 className="text-5xl font-serif mb-6">Smile Gallery</h1>
        <p className="text-slate-400 font-light">Real patients. Real results.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((src, index) => (
            <div key={index} className="relative aspect-square group overflow-hidden bg-slate-100 cursor-pointer">
              <Image 
                src={src}
                alt={`Gallery image ${index + 1}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 border-[10px] border-transparent group-hover:border-white/20 transition-all duration-300 z-10 pointer-events-none"></div>
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                <span className="text-white font-bold tracking-widest text-xs border border-white px-6 py-3 uppercase hover:bg-white hover:text-black transition">View Transformation</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}