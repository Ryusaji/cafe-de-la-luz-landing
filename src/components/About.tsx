import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-32 px-8 max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="space-y-10"
      >
        <span className="text-sm font-sans font-black tracking-[0.2em] uppercase text-luxury-800/30">Nuestra Filosofía</span>
        <h2 className="font-sans font-black text-6xl md:text-8xl tracking-tighter text-luxury-900 leading-[0.9]">
          Luz, calma y<br />buen café.
        </h2>
        <p className="font-serif text-xl md:text-2xl text-luxury-800/70 max-w-lg leading-relaxed italic">
          "Cada grano cuenta una historia, cada taza es un refugio."
        </p>
        <p className="font-sans text-lg text-luxury-800/50 max-w-lg leading-relaxed">
          En Café de la Luz, curamos experiencias. Desde nuestro obrador artesanal hasta la selección de granos de especialidad, cada detalle está diseñado para elevar tus sentidos en el centro de Madrid.
        </p>
        
        <div className="flex gap-12 pt-8">
          <div>
            <div className="text-4xl font-black font-sans text-luxury-900 mb-1">4.3</div>
            <div className="font-serif text-sm opacity-50 uppercase tracking-widest">En Google Maps</div>
          </div>
          <div>
            <div className="text-4xl font-black font-sans text-luxury-900 mb-1">+4k</div>
            <div className="font-serif text-sm opacity-50 uppercase tracking-widest">Reseñas Reales</div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative h-[500px] md:h-[700px] w-full"
      >
        {/* Main Image */}
        <div className="absolute right-0 top-0 w-4/5 h-4/5 overflow-hidden rounded-[3rem] shadow-2xl z-10">
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 1.2, ease: "circOut" }}
            src="/images/Interior 2.png"
            alt="Interior acogedor"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Overlapping Image */}
        <div className="absolute left-0 bottom-0 w-3/5 h-1/2 overflow-hidden rounded-[2rem] shadow-glow z-20 translate-y-10 translate-x-4 border-[12px] border-luxury-50">
          <motion.img
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 1.2, ease: "circOut" }}
            src="/images/Interior 3.png"
            alt="Detalle interior"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default About;
