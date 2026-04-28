import { motion } from 'framer-motion';
import { reviews } from '../data/reviews';

const Testimonials = () => {
  return (
    <section id="reviews" className="py-32 px-8 max-w-screen-2xl mx-auto">
      <div className="text-center mb-20">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-sm tracking-widest uppercase text-luxury-800/40 font-bold"
        >
          Reseñas
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-sans font-black text-5xl md:text-6xl tracking-tighter text-luxury-900 mt-4"
        >
          Lo que dicen nuestros clientes
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((review, idx) => (
          <motion.div
            key={review.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="bg-white border border-luxury-200 p-8 rounded-[2rem] shadow-soft hover:shadow-xl transition-all"
          >
            <div className="text-yellow-500 mb-6 text-xl">
              {'★'.repeat(review.rating)}
            </div>
            <h4 className="font-sans font-black text-xl mb-4 leading-tight">{review.title}</h4>
            <p className="font-serif text-luxury-800/60 mb-8 leading-relaxed italic">
              "{review.text}"
            </p>
            <div className="flex items-center gap-4 border-t border-luxury-100 pt-6">
              <img src={review.avatar} alt={review.author} className="w-12 h-12 rounded-full object-cover" />
              <div className="font-sans font-bold text-sm text-luxury-900">{review.author}</div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <button className="bg-luxury-200/50 px-8 py-3 rounded-full font-sans font-bold text-sm hover:bg-luxury-200 transition-colors">
          Ver más reseñas
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
