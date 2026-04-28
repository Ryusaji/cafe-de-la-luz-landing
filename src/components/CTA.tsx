import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section className="py-32 px-4 md:px-8 bg-luxury-100">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto bg-luxury-900 rounded-[3rem] p-10 md:p-20 text-center relative overflow-hidden shadow-2xl"
      >
        {/* Background Texture/Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            alt="Coffee background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-luxury-900/50 to-luxury-900"></div>
        </div>

        <div className="relative z-10 space-y-10">
          <h2 className="font-sans font-black text-4xl md:text-7xl tracking-tighter text-white leading-tight">
            ¿Listo para disfrutar de<br /> una experiencia única?
          </h2>
          <p className="font-serif text-white/50 italic text-xl md:text-2xl max-w-2xl mx-auto">
            Reserva tu mesa y déjate llevar por el aroma del verdadero café de especialidad.
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center max-w-2xl mx-auto">
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="w-full bg-white/5 border border-white/10 rounded-full py-5 px-8 text-white placeholder:text-white/20 focus:outline-none focus:border-white/40 focus:bg-white/10 backdrop-blur-md transition-all font-sans"
            />
            <button className="w-full md:w-auto bg-white text-luxury-900 px-12 py-5 rounded-full font-sans font-black tracking-widest uppercase text-xs hover:scale-105 active:scale-95 transition-all shadow-glow whitespace-nowrap">
              Reservar ahora
            </button>
          </div>
          
          <div className="pt-8 flex justify-center gap-8 text-[10px] font-sans font-black tracking-[0.3em] uppercase text-white/20">
            <span>Disponibilidad limitada</span>
            <span>•</span>
            <span>Experiencia exclusiva</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CTA;
