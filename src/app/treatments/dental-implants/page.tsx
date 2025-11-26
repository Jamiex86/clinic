import Link from "next/link";
import Image from "next/image";

export default function ImplantsPage() {
  return (
    <div className="bg-white min-h-screen pb-24">
      <div className="relative h-[60vh] bg-slate-900 flex items-center justify-center overflow-hidden">
        <Image 
          src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80" 
          alt="Dental Implants" 
          fill 
          className="object-cover opacity-40"
        />
        <div className="relative z-10 text-center text-white px-4">
          <span className="text-yellow-500 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Permanent Solution</span>
          <h1 className="text-5xl md:text-7xl font-serif mb-6">Dental Implants</h1>
          <Link href="/contact" className="inline-block bg-gradient-to-r from-yellow-600 to-yellow-500 text-white px-8 py-4 font-bold uppercase tracking-widest text-sm hover:shadow-lg transition">
            Get Free Quote
          </Link>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="mb-16">
          <h2 className="text-3xl font-serif text-slate-900 mb-6">What Are They?</h2>
          <p className="text-slate-600 leading-relaxed text-lg">
            Dental implants are a permanent solution for missing teeth, consisting of a titanium screw inserted into the jawbone and a premium crown to replace the tooth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="bg-slate-50 p-8 border-l-4 border-yellow-500">
            <h3 className="text-xl font-serif text-slate-900 mb-4">Advantages</h3>
            <ul className="space-y-4 text-slate-600">
              <li className="flex gap-3"><span className="text-green-500">✓</span> <strong>Permanent:</strong> Lasts a lifetime with proper care.</li>
              <li className="flex gap-3"><span className="text-green-500">✓</span> <strong>Functionality:</strong> Restores full chewing power.</li>
              <li className="flex gap-3"><span className="text-green-500">✓</span> <strong>Aesthetic:</strong> Looks and feels exactly like natural teeth.</li>
            </ul>
          </div>
          <div className="bg-slate-50 p-8 border-l-4 border-slate-300">
            <h3 className="text-xl font-serif text-slate-900 mb-4">Considerations</h3>
            <ul className="space-y-4 text-slate-600">
              <li className="flex gap-3"><span className="text-slate-400">•</span> <strong>Time:</strong> Requires healing time for osseointegration (bonding with bone).</li>
            </ul>
          </div>
        </div>

        {/* Process Split */}
        <div className="mb-16">
          <h2 className="text-3xl font-serif text-slate-900 mb-8">Treatment Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             {/* Option 1 */}
             <div className="bg-slate-950 text-white p-8 rounded-xl border border-slate-800">
                <h3 className="text-2xl font-serif text-yellow-500 mb-4">Immediate Loading</h3>
                <p className="text-sm text-slate-400 mb-6 uppercase tracking-wider">Completed in 6 Nights</p>
                <ul className="space-y-3 text-slate-300 text-sm">
                  <li>1. Consultation & CT Scan</li>
                  <li>2. Surgical placement</li>
                  <li>3. Temporary crown placement</li>
                  <li>4. Final checkup</li>
                </ul>
             </div>
             {/* Option 2 */}
             <div className="bg-white text-slate-900 p-8 rounded-xl border border-slate-200 shadow-xl">
                <h3 className="text-2xl font-serif text-slate-900 mb-4">Two-Visit Method</h3>
                <p className="text-sm text-slate-500 mb-6 uppercase tracking-wider">Standard Protocol</p>
                <ul className="space-y-3 text-slate-600 text-sm">
                  <li><strong>Visit 1 (5 Days):</strong> Implant placement.</li>
                  <li><strong>Healing (3-6 Months):</strong> Bone fusion.</li>
                  <li><strong>Visit 2 (5 Days):</strong> Final Crown placement.</li>
                </ul>
             </div>
          </div>
        </div>

        <div className="bg-yellow-50 p-8 text-center rounded-2xl">
          <h3 className="text-2xl font-serif text-slate-900 mb-4">Who Is It For?</h3>
          <p className="text-slate-700">Perfect for those looking to replace missing teeth permanently and achieve a complete, functional smile.</p>
        </div>
      </div>
    </div>
  );
}
