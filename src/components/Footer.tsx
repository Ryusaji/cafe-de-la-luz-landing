const Footer = () => {
  return (
    <footer className="bg-luxury-900 pt-32 pb-12 px-8 text-white relative overflow-hidden">
      {/* Decorative gradient overlay to ensure darkness */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>
      
      <div className="max-w-screen-2xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-32">
          {/* Brand Column */}
          <div className="col-span-1 lg:col-span-2 space-y-8">
            <div className="font-sans font-black text-6xl tracking-tighter italic">CAFÉ DE LA LUZ</div>
            <p className="font-serif text-white/40 italic max-w-sm text-xl leading-relaxed">
              "Donde el grano encuentra su alma y el tiempo su pausa en el centro de Madrid."
            </p>
          </div>

          {/* Navigation Column */}
          <div className="space-y-10">
            <h4 className="font-sans font-black text-xs tracking-[0.4em] uppercase text-white/20">Explora</h4>
            <ul className="space-y-6 font-serif text-lg text-white/50">
              <li><a href="#inicio" className="hover:text-white transition-colors flex items-center gap-2 group"><span className="w-0 group-hover:w-4 h-px bg-white transition-all"></span>Inicio</a></li>
              <li><a href="#about" className="hover:text-white transition-colors flex items-center gap-2 group"><span className="w-0 group-hover:w-4 h-px bg-white transition-all"></span>Nosotros</a></li>
              <li><a href="#menu" className="hover:text-white transition-colors flex items-center gap-2 group"><span className="w-0 group-hover:w-4 h-px bg-white transition-all"></span>Menú</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors flex items-center gap-2 group"><span className="w-0 group-hover:w-4 h-px bg-white transition-all"></span>Galería</a></li>
            </ul>
          </div>

          {/* Social & Contact Column */}
          <div className="space-y-10">
            <h4 className="font-sans font-black text-xs tracking-[0.4em] uppercase text-white/20">Síguenos</h4>
            <div className="flex gap-6">
              {/* Instagram */}
              <a href="#" className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-luxury-900 transition-all group overflow-hidden relative">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="z-10 group-hover:scale-110 transition-transform">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              {/* Twitter */}
              <a href="#" className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-luxury-900 transition-all group overflow-hidden relative">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="z-10 group-hover:scale-110 transition-transform">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="#" className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-luxury-900 transition-all group overflow-hidden relative">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="z-10 group-hover:scale-110 transition-transform">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
            <div className="space-y-2 font-serif text-white/60 text-sm">
              <p>hola@cafedelaluz.com</p>
              <p>+34 915 23 11 99</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-8 text-[11px] font-sans font-bold tracking-[0.4em] uppercase text-white/40">
          <p>&copy; 2026 Café de la Luz. El arte de la paciencia.</p>
          <div className="flex gap-12">
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Legal</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
