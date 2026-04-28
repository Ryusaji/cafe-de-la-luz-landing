import { motion } from 'framer-motion';

const Gallery = () => {
  const images = [
    { src: "/images/Interior.png", span: "col-span-2 row-span-2" },
    { src: "/images/Alimento.png", span: "" },
    { src: "/images/La parte afuera.png", span: "row-span-2" },
    { src: "/images/Otro interior.png", span: "" },
  ];

  return (
    <section id="gallery" className="py-32 px-8 max-w-screen-2xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-sans font-black text-5xl tracking-tighter mb-16"
      >
        Nuestro Espacio
      </motion.h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[250px] md:auto-rows-[350px]">
        {images.map((img, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className={`overflow-hidden rounded-3xl ${img.span}`}
          >
            <motion.img
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.8 }}
              src={img.src}
              alt={`Gallery ${idx}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
