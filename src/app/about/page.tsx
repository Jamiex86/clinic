import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-slate-950 py-32 text-center text-white relative">
        <div className="max-w-3xl mx-auto px-4">
           <span className="text-yellow-500 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">The ML Clinic Difference</span>
           <h1 className="text-5xl font-serif mb-6">About Our Clinic</h1>
           <p className="text-slate-400 text-lg font-light leading-relaxed">
             Situated in Antalya, the heart of medical tourism, we combine European-certified materials with 5-star Turkish hospitality.
           </p>
        </div>
      </div>

      {/* Story Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div className="relative h-[600px] shadow-2xl">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-yellow-500/30 z-0"></div>
              <div className="relative z-10 h-full w-full overflow-hidden bg-slate-100">
                 <Image 
                   src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80"
                   alt="Our Clinic Reception"
                   fill
                   className="object-cover"
                 />
              </div>
            </div>
            <div>
              <span className="text-yellow-600 font-bold uppercase tracking-widest text-xs mb-4 block">Our Philosophy</span>
              <h2 className="text-4xl font-serif text-slate-900 mb-8 leading-tight">We don't just treat teeth. <br/>We treat people.</h2>
              
              <div className="space-y-6 text-slate-600 leading-relaxed font-light">
                <p>
                  We understand that visiting the dentist can be daunting. That's why we've designed our clinic to be a relaxing environment, ensuring your comfort every step of the way.
                </p>
                <p>
                  From the waiting area to the treatment rooms, every detail is tailored to make your visit pleasant. Our multilingual team speaks English, Czech, Polish, and Turkish, ensuring you never feel lost in translation.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-8 mt-12">
                <div className="border-l-2 border-yellow-500 pl-6">
                  <p className="font-serif text-2xl text-slate-900 mb-1">15+</p>
                  <p className="text-xs text-slate-500 uppercase tracking-widest">Years Experience</p>
                </div>
                <div className="border-l-2 border-yellow-500 pl-6">
                  <p className="font-serif text-2xl text-slate-900 mb-1">10k+</p>
                  <p className="text-xs text-slate-500 uppercase tracking-widest">Happy Patients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}