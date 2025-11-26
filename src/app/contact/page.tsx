export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        
        <div className="text-center mb-16">
          <span className="text-yellow-600 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Start Your Journey</span>
          <h1 className="text-4xl md:text-6xl font-serif text-slate-900 mb-6">Get Your Free Quote</h1>
          <p className="text-slate-500 font-light">Send us a message or visit our clinic in Antalya.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Form */}
          <div className="bg-slate-50 p-8 md:p-12 border border-slate-100 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-600 to-yellow-400"></div>
            <form className="space-y-6 relative z-10">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">First Name</label>
                  <input type="text" className="w-full bg-white border border-slate-200 px-4 py-3 focus:outline-none focus:border-yellow-500 transition-colors" placeholder="John" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">Last Name</label>
                  <input type="text" className="w-full bg-white border border-slate-200 px-4 py-3 focus:outline-none focus:border-yellow-500 transition-colors" placeholder="Doe" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">Phone (WhatsApp)</label>
                <input type="tel" className="w-full bg-white border border-slate-200 px-4 py-3 focus:outline-none focus:border-yellow-500 transition-colors" placeholder="+44 7700 900000" />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">Interested Treatment</label>
                <select className="w-full bg-white border border-slate-200 px-4 py-3 focus:outline-none focus:border-yellow-500 text-slate-600">
                  <option>Dental Implants</option>
                  <option>Hollywood Smile (Veneers)</option>
                  <option>Zirconia Crowns</option>
                  <option>Teeth Whitening</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">Message</label>
                <textarea rows={4} className="w-full bg-white border border-slate-200 px-4 py-3 focus:outline-none focus:border-yellow-500 transition-colors" placeholder="Tell us about your needs..."></textarea>
              </div>

              <button className="w-full bg-gradient-to-r from-yellow-600 to-yellow-500 text-white font-bold py-4 hover:shadow-lg hover:shadow-yellow-500/30 transition-all uppercase tracking-widest text-sm">
                Send Message
              </button>
            </form>
          </div>

          {/* Info & Map */}
          <div className="space-y-12">
            {/* Info Cards */}
            <div>
              <h3 className="text-2xl font-serif text-slate-900 mb-8">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-6 group cursor-pointer">
                  <div className="w-12 h-12 bg-slate-950 text-white flex items-center justify-center text-xl border border-yellow-500 group-hover:bg-yellow-500 transition-colors">📞</div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Call Us</p>
                    <p className="text-slate-900 font-serif text-lg">+90 555 123 4567</p>
                  </div>
                </div>
                <div className="flex items-start gap-6 group cursor-pointer">
                  <div className="w-12 h-12 bg-slate-950 text-white flex items-center justify-center text-xl border border-yellow-500 group-hover:bg-yellow-500 transition-colors">✉️</div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Email Us</p>
                    <p className="text-slate-900 font-serif text-lg">info@mlclinic.vip</p>
                  </div>
                </div>
                <div className="flex items-start gap-6 group cursor-pointer">
                  <div className="w-12 h-12 bg-slate-950 text-white flex items-center justify-center text-xl border border-yellow-500 group-hover:bg-yellow-500 transition-colors">📍</div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Visit Us</p>
                    <p className="text-slate-900 font-serif text-lg">Antalya, Turkey</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="h-80 bg-slate-200 relative overflow-hidden shadow-lg border border-slate-200">
               <iframe 
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102127.46654032041!2d30.635839732646034!3d36.88390770631853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c39aaeddadadc1%3A0x95c69f73f9e32e33!2sAntalya%2C%20T%C3%BCrkiye!5e0!3m2!1sen!2suk!4v1709123456789!5m2!1sen!2suk" 
                 width="100%" 
                 height="100%" 
                 style={{ border: 0, filter: 'grayscale(100%)' }} 
                 loading="lazy"
               ></iframe>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}