import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, CreditCard, CheckCircle2, XCircle } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-8 bg-luxury-50">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        {/* Left: Map/Location */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative w-full aspect-video lg:aspect-square bg-luxury-200 rounded-[3rem] overflow-hidden shadow-soft flex items-center justify-center border border-luxury-200"
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.472744315268!2d-3.7055!3d40.4222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42288094896739%3A0xc7cwvxmadrid!2zQy4gZGUgbGEgUHVlYmxhLCA4LCAyODAwNCBNYWRyaWQsIEVzcGHDsWE!5e0!3m2!1ses!2ses!4v1700000000000!5m2!1ses!2ses" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>

        {/* Right: Info & Hours */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div>
            <h2 className="font-sans font-black text-5xl tracking-tighter text-luxury-900 mb-8">Visítanos</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-luxury-900 mt-1" />
                <p className="font-serif text-lg text-luxury-800/70">C. de la Puebla, 8, Centro, 28004 Madrid, España</p>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-luxury-900" />
                <p className="font-serif text-lg text-luxury-800/70">+34 915 23 11 99</p>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-luxury-900 mt-1" />
                <div className="font-serif text-lg text-luxury-800/70">
                  <p>Abre a las 10:00 a.m.</p>
                  <p className="text-sm opacity-60 italic">Cerca de Callao y Gran Vía</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <CreditCard className="w-6 h-6 text-luxury-900" />
                <p className="font-serif text-lg text-luxury-800/70">€1 – 10 por persona</p>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-luxury-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 text-luxury-800/70 font-sans font-medium text-sm">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                Consumo en el lugar
              </div>
              <div className="flex items-center gap-3 text-luxury-800/70 font-sans font-medium text-sm">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                Para llevar
              </div>
              <div className="flex items-center gap-3 text-luxury-800/70 font-sans font-medium text-sm opacity-50">
                <XCircle className="w-5 h-5 text-red-500" />
                Entrega a domicilio
              </div>
            </div>
            <a 
              href="https://www.google.com/maps/dir//C.+de+la+Puebla,+8,+Centro,+28004+Madrid,+España"
              target="_blank"
              className="mt-12 group inline-flex items-center gap-2 font-sans font-black text-sm tracking-widest uppercase text-luxury-900 border-b-2 border-luxury-900 pb-2 hover:opacity-70 transition-all"
            >
              Cómo llegar
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
