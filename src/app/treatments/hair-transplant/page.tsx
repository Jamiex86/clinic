import Link from "next/link";
import Image from "next/image";

export default function HairPage() {
  return (
    <div className="bg-white min-h-screen pb-24">
      <div className="relative h-[60vh] bg-slate-900 flex items-center justify-center overflow-hidden">
        <Image 
          src="https://images.unsplash.com/photo-1616353986422-487627447814?auto=format&fit=crop&q=80" 
          alt="Hair Transplant" 
          fill 
          className="object-cover opacity-40"
        />
        <div className="relative z-10 text-center text-white px-4">
          <span className="text-yellow-500 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Lifetime Results</span>
          <h1 className="text-5xl md:text-7xl font-serif mb-6">Hair Transplant</h1>
          <Link href="/contact" className="inline-block bg-gradient-to-r from-yellow-600 to-yellow-500 text-white px-8 py-4 font-bold uppercase tracking-widest text-sm hover:shadow-lg transition">
            Get Free Quote
          </Link>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-20">
        
        {/* Method 1: FUE */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-6">
            <span className="bg-slate-900 text-white px-3 py-1 text-xs font-bold uppercase tracking-widest">Method 01</span>
            <h2 className="text-3xl md:text-4xl font-serif text-slate-900">FUE (Follicular Unit Extraction)</h2>
          </div>
          <p className="text-slate-600 leading-relaxed text-lg mb-8">
            FUE involves extracting individual hair follicles from the donor area (back of head) and transplanting them to areas with thinning hair using micro-motors.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-50 p-6 rounded-xl">
              <h3 className="font-bold text-slate-900 mb-3">Why Choose FUE?</h3>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li>• <strong>Minimal Scarring:</strong> Only tiny dot-like marks.</li>
                <li>• <strong>Natural Look:</strong> Hair grows in natural direction.</li>
                <li>• <strong>High Volume:</strong> Allows for maximum graft harvesting.</li>
              </ul>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl">
              <h3 className="font-bold text-slate-900 mb-3">Process</h3>
              <ol className="space-y-2 text-slate-600 text-sm list-decimal pl-4">
                <li>Consultation & Design</li>
                <li>Follicle Extraction</li>
                <li>Canal Opening</li>
                <li>Implantation</li>
              </ol>
            </div>
          </div>
        </div>

        <hr className="border-slate-200 mb-20" />

        {/* Method 2: DHI */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <span className="bg-yellow-500 text-white px-3 py-1 text-xs font-bold uppercase tracking-widest">Method 02</span>
            <h2 className="text-3xl md:text-4xl font-serif text-slate-900">DHI (Direct Hair Implantation)</h2>
          </div>
          <p className="text-slate-600 leading-relaxed text-lg mb-8">
            DHI is an advanced method where follicles are implanted directly into the scalp using a specialized "Choi Pen" tool, without the need to open canals beforehand.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-50 p-6 rounded-xl">
              <h3 className="font-bold text-slate-900 mb-3">Why Choose DHI?</h3>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li>• <strong>No Scarring:</strong> Zero visible scars.</li>
                <li>• <strong>Faster Recovery:</strong> Less trauma to the scalp.</li>
                <li>• <strong>Higher Density:</strong> Precision placement allows closer grafts.</li>
              </ul>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl">
              <h3 className="font-bold text-slate-900 mb-3">Process</h3>
              <ol className="space-y-2 text-slate-600 text-sm list-decimal pl-4">
                <li>Consultation & Design</li>
                <li>Follicle Extraction</li>
                <li>Immediate Implantation (Choi Pen)</li>
                <li>Post-Op Care</li>
              </ol>
            </div>
          </div>
        </div>

        <div className="bg-slate-900 text-white p-10 text-center rounded-3xl">
          <h3 className="text-2xl font-serif mb-4">Which is right for you?</h3>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            Our experts will analyze your hair density and goals to recommend the perfect method. Send us your photos for a free assessment.
          </p>
          <Link href="/contact" className="inline-block bg-white text-slate-900 px-8 py-4 font-bold uppercase tracking-widest text-sm hover:bg-yellow-500 hover:text-white transition rounded-full">
            Free Hair Analysis
          </Link>
        </div>

      </div>
    </div>
  );
}
