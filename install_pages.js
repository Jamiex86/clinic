const fs = require('fs');
const path = require('path');

// Ensure we are in the right place (or use absolute path if needed)
// The user provided path: /Users/jamiemarshall/Documents/clinic/clinic
const targetDir = path.join(process.cwd(), 'src', 'app', 'treatments');

console.log(`Target Directory: ${targetDir}`);

if (!fs.existsSync(targetDir)) {
  console.log("Creating 'treatments' directory...");
  fs.mkdirSync(targetDir, { recursive: true });
}

// --- DATA FOR ALL 5 PAGES ---

const pages = [
  {
    name: 'zirconia-crowns',
    content: `import Link from "next/link";
import Image from "next/image";

export default function ZirconiaPage() {
  return (
    <div className="bg-white min-h-screen pb-24">
      <div className="relative h-[60vh] bg-slate-900 flex items-center justify-center overflow-hidden">
        <Image 
          src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80" 
          alt="Zirconia Crowns" 
          fill 
          className="object-cover opacity-40"
        />
        <div className="relative z-10 text-center text-white px-4">
          <span className="text-yellow-500 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Dental Excellence</span>
          <h1 className="text-5xl md:text-7xl font-serif mb-6">Zirconia Crowns</h1>
          <Link href="/contact" className="inline-block bg-gradient-to-r from-yellow-600 to-yellow-500 text-white px-8 py-4 font-bold uppercase tracking-widest text-sm hover:shadow-lg transition">
            Get Free Quote
          </Link>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="mb-16">
          <h2 className="text-3xl font-serif text-slate-900 mb-6">What Are They?</h2>
          <p className="text-slate-600 leading-relaxed text-lg">
            Zirconia crowns are made from high-quality zirconium, which is extremely durable and looks just like natural teeth. 
            They are known for their strength and compatibility with the human body.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="bg-slate-50 p-8 border-l-4 border-yellow-500">
            <h3 className="text-xl font-serif text-slate-900 mb-4">Advantages</h3>
            <ul className="space-y-4 text-slate-600">
              <li className="flex gap-3"><span className="text-green-500">✓</span> <strong>Aesthetic:</strong> They look like real teeth.</li>
              <li className="flex gap-3"><span className="text-green-500">✓</span> <strong>Durability:</strong> Highly resistant to wear.</li>
              <li className="flex gap-3"><span className="text-green-500">✓</span> <strong>Biocompatibility:</strong> No allergic reactions.</li>
            </ul>
          </div>
          <div className="bg-slate-50 p-8 border-l-4 border-slate-300">
            <h3 className="text-xl font-serif text-slate-900 mb-4">Disadvantages</h3>
            <ul className="space-y-4 text-slate-600">
              <li className="flex gap-3"><span className="text-slate-400">•</span> <strong>Cost:</strong> More expensive than traditional crowns, but worth the investment for longevity.</li>
            </ul>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-serif text-slate-900 mb-8">The Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {["Consultation & Exam", "Tooth Preparation", "Fabrication (5 Days)", "Final Placement"].map((step, i) => (
              <div key={i} className="bg-slate-900 text-white p-6 text-center rounded-lg">
                <span className="text-4xl text-yellow-500 font-serif block mb-2">{i + 1}</span>
                <span className="font-bold text-sm uppercase tracking-wide">{step}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-yellow-50 p-8 text-center rounded-2xl">
          <h3 className="text-2xl font-serif text-slate-900 mb-4">Who Is It For?</h3>
          <p className="text-slate-700">Ideal for those looking to restore damaged teeth while achieving a natural-looking smile.</p>
        </div>
      </div>
    </div>
  );
}
`
  },
  {
    name: 'e-max-veneers',
    content: `import Link from "next/link";
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
`
  },
  {
    name: 'composite-veneers',
    content: `import Link from "next/link";
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
`
  },
  {
    name: 'dental-implants',
    content: `import Link from "next/link";
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
`
  },
  {
    name: 'hair-transplant',
    content: `import Link from "next/link";
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
`
  }
];

// --- WRITING FILES ---

pages.forEach(page => {
  const dirPath = path.join(targetDir, page.name);
  const filePath = path.join(dirPath, 'page.tsx');

  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  fs.writeFileSync(filePath, page.content);
  console.log(`Created: ${page.name}/page.tsx`);
});

console.log("✅ Success! All 5 treatment pages are installed.");