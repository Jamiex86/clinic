import Link from "next/link";
import Image from "next/image";

export default function EmaxPage() {
  return (
    <div className="bg-white min-h-screen pb-24">
      <div className="relative h-[60vh] bg-slate-900 flex items-center justify-center overflow-hidden">
        <Image 
          src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80" 
          alt="E-Max Veneers" 
          fill 
          className="object-cover opacity-40"
        />
        <div className="relative z-10 text-center text-white px-4">
          <span className="text-yellow-500 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Celebrity Smile</span>
          <h1 className="text-5xl md:text-7xl font-serif mb-6">E-Max Veneers</h1>
          <Link href="/contact" className="inline-block bg-gradient-to-r from-yellow-600 to-yellow-500 text-white px-8 py-4 font-bold uppercase tracking-widest text-sm hover:shadow-lg transition">
            Get Free Quote
          </Link>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="mb-16">
          <h2 className="text-3xl font-serif text-slate-900 mb-6">What Are They?</h2>
          <p className="text-slate-600 leading-relaxed text-lg">
            E-max veneers are ultra-thin porcelain layers bonded to the front of teeth, perfect for creating a flawless smile. They are famous for their light-transmitting properties which mimic natural enamel perfectly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="bg-slate-50 p-8 border-l-4 border-yellow-500">
            <h3 className="text-xl font-serif text-slate-900 mb-4">Advantages</h3>
            <ul className="space-y-4 text-slate-600">
              <li className="flex gap-3"><span className="text-green-500">✓</span> <strong>Minimal Intervention:</strong> Only a small layer of enamel is removed.</li>
              <li className="flex gap-3"><span className="text-green-500">✓</span> <strong>Natural Appearance:</strong> Indistinguishable from real teeth.</li>
              <li className="flex gap-3"><span className="text-green-500">✓</span> <strong>Stain-Resistant:</strong> Highly durable surface.</li>
            </ul>
          </div>
          <div className="bg-slate-50 p-8 border-l-4 border-slate-300">
            <h3 className="text-xl font-serif text-slate-900 mb-4">Disadvantages</h3>
            <ul className="space-y-4 text-slate-600">
              <li className="flex gap-3"><span className="text-slate-400">•</span> <strong>Cost:</strong> Higher price point, but considered the gold standard in aesthetics.</li>
            </ul>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-serif text-slate-900 mb-8">The Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {["Smile Design", "Tooth Prep", "Fabrication (5 Days)", "Final Bonding"].map((step, i) => (
              <div key={i} className="bg-slate-900 text-white p-6 text-center rounded-lg">
                <span className="text-4xl text-yellow-500 font-serif block mb-2">{i + 1}</span>
                <span className="font-bold text-sm uppercase tracking-wide">{step}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-yellow-50 p-8 text-center rounded-2xl">
          <h3 className="text-2xl font-serif text-slate-900 mb-4">Who Is It For?</h3>
          <p className="text-slate-700">Perfect for those wanting to enhance their smile quickly and effectively with the highest aesthetic standards.</p>
        </div>
      </div>
    </div>
  );
}
