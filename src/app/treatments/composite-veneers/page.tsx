import Link from "next/link";
import Image from "next/image";

export default function CompositePage() {
  return (
    <div className="bg-white min-h-screen pb-24">
      <div className="relative h-[60vh] bg-slate-900 flex items-center justify-center overflow-hidden">
        <Image 
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80" 
          alt="Composite Veneers" 
          fill 
          className="object-cover opacity-40"
        />
        <div className="relative z-10 text-center text-white px-4">
          <span className="text-yellow-500 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Quick Transformation</span>
          <h1 className="text-5xl md:text-7xl font-serif mb-6">Composite Veneers</h1>
          <Link href="/contact" className="inline-block bg-gradient-to-r from-yellow-600 to-yellow-500 text-white px-8 py-4 font-bold uppercase tracking-widest text-sm hover:shadow-lg transition">
            Get Free Quote
          </Link>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="mb-16">
          <h2 className="text-3xl font-serif text-slate-900 mb-6">What Are They?</h2>
          <p className="text-slate-600 leading-relaxed text-lg">
            Composite veneers are made from a resin composite material applied directly to the teeth by our artists, offering an affordable and fast alternative to porcelain veneers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="bg-slate-50 p-8 border-l-4 border-yellow-500">
            <h3 className="text-xl font-serif text-slate-900 mb-4">Advantages</h3>
            <ul className="space-y-4 text-slate-600">
              <li className="flex gap-3"><span className="text-green-500">✓</span> <strong>Speed:</strong> Can be applied in a single visit.</li>
              <li className="flex gap-3"><span className="text-green-500">✓</span> <strong>Cost:</strong> A budget-friendly aesthetic option.</li>
              <li className="flex gap-3"><span className="text-green-500">✓</span> <strong>Minimal Intervention:</strong> Only a tiny layer of enamel removed.</li>
            </ul>
          </div>
          <div className="bg-slate-50 p-8 border-l-4 border-slate-300">
            <h3 className="text-xl font-serif text-slate-900 mb-4">Disadvantages</h3>
            <ul className="space-y-4 text-slate-600">
              <li className="flex gap-3"><span className="text-slate-400">•</span> <strong>Durability:</strong> Less durable than porcelain; may need polishing over time.</li>
            </ul>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-serif text-slate-900 mb-8">The Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {["Consultation", "Application", "Shaping & Polishing"].map((step, i) => (
              <div key={i} className="bg-slate-900 text-white p-6 text-center rounded-lg">
                <span className="text-4xl text-yellow-500 font-serif block mb-2">{i + 1}</span>
                <span className="font-bold text-sm uppercase tracking-wide">{step}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-yellow-50 p-8 text-center rounded-2xl">
          <h3 className="text-2xl font-serif text-slate-900 mb-4">Who Is It For?</h3>
          <p className="text-slate-700">Ideal for those seeking a quick smile makeover with minimal intervention and immediate results.</p>
        </div>
      </div>
    </div>
  );
}
