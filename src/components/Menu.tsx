import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { menuItems } from '../data/menu';

const Menu = () => {
  const [activeTab, setActiveTab] = useState<'cafes' | 'postres' | 'brunch'>('cafes');

  const categories = [
    { id: 'cafes', name: 'Cafés' },
    { id: 'postres', name: 'Postres' },
    { id: 'brunch', name: 'Brunch' },
  ];

  const filteredItems = menuItems.filter(item => item.category === activeTab);

  return (
    <section id="menu" className="py-32 px-8 bg-luxury-100 rounded-[3rem] mx-4 md:mx-8 mb-32">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-sans font-black text-5xl md:text-7xl tracking-tighter text-luxury-900"
          >
            Nuestras<br />estrellas.
          </motion.h2>
          
          <div className="flex bg-white/50 p-2 rounded-full backdrop-blur-md">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id as any)}
                className={`px-8 py-3 rounded-full font-serif text-sm font-medium transition-all ${
                  activeTab === cat.id ? 'bg-white shadow-sm' : 'hover:bg-white/50'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        <div className="relative min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredItems.length > 0 ? (
                filteredItems.map((item) => (
                  <motion.div
                    key={item.id}
                    whileHover={{ y: -10 }}
                    className="bg-white rounded-3xl p-6 shadow-soft hover:shadow-2xl transition-shadow duration-500 group"
                  >
                    <div className="h-64 mb-6 overflow-hidden rounded-2xl">
                      <motion.img
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-sans font-black text-2xl mb-2">{item.name}</h3>
                    <p className="font-serif text-sm text-luxury-800/60 mb-6">{item.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="font-sans font-black text-xl">{item.price}</span>
                      <button className="bg-luxury-900 text-white px-6 py-2 rounded-full font-sans text-sm transition-all hover:scale-105 active:scale-95">
                        Añadir
                      </button>
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="col-span-full text-center py-20 font-serif text-xl italic text-luxury-800/50">
                  Próximamente...
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Menu;
