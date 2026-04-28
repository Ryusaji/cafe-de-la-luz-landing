import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <header id="inicio" className="relative h-screen w-full overflow-hidden bg-luxury-900 flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          src="/images/Interior.png"
          alt="Interior Café de la Luz"
          className="w-full h-full object-cover opacity-60"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-luxury-900/90 z-0"></div>
      
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-sans font-black text-6xl md:text-8xl tracking-tighter text-white leading-none mb-6"
        >
          Café de la Luz
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-serif text-xl md:text-3xl text-white/80 italic font-light mb-12 max-w-2xl mx-auto"
        >
          Un rincón acogedor en el corazón de Madrid.<br />Sabor artesanal, ambiente único.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col md:flex-row justify-center items-center gap-6"
        >
          <a href="#menu" className="bg-white text-luxury-900 px-10 py-4 rounded-full font-sans font-medium transition-all hover:scale-105 active:scale-95 shadow-xl">
            Ver nuestra carta
          </a>
          <a href="#contact" className="bg-black/40 backdrop-blur-md border border-white/20 text-white px-10 py-4 rounded-full font-sans font-medium transition-all hover:scale-105 active:scale-95">
            Dónde estamos
          </a>
        </motion.div>
      </div>
    </header>
  );
};

export default Hero;
