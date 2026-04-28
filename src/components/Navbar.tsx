import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Menú', href: '#menu' },
    { name: 'Nosotros', href: '#about' },
    { name: 'Galería', href: '#gallery' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "circOut" }}
      className="fixed w-full z-[100] px-4 md:px-12 py-6 flex justify-center pointer-events-none"
    >
      <motion.div
        animate={{
          backgroundColor: isScrolled ? "rgba(26, 25, 24, 0.9)" : "rgba(26, 25, 24, 0.7)",
          paddingTop: isScrolled ? "12px" : "16px",
          paddingBottom: isScrolled ? "12px" : "16px",
          width: isScrolled ? "95%" : "100%",
        }}
        className="max-w-screen-2xl flex justify-between items-center backdrop-blur-2xl border border-white/10 px-6 md:px-10 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.3)] pointer-events-auto transition-all duration-500"
      >
        {/* Logo */}
        <a href="#inicio" className="font-sans font-black text-xl md:text-2xl tracking-tighter text-white uppercase">
          Café de la Luz<span className="text-luxury-200">.</span>
        </a>
        
        {/* Navigation */}
        <div className="hidden lg:flex gap-10 items-center">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="font-sans text-[10px] font-black tracking-[0.2em] uppercase text-white/50 hover:text-white transition-all relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Action Button */}
        <a 
          href="#contact" 
          className="bg-white text-luxury-900 px-6 py-2.5 rounded-full font-sans font-black tracking-widest uppercase text-[10px] hover:bg-luxury-200 transition-all shadow-lg active:scale-95"
        >
          Reservar
        </a>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
