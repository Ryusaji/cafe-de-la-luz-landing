import { motion } from 'framer-motion';

const WhatsAppBtn = () => {
  return (
    <motion.a
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 260, damping: 20 }}
      href="https://wa.me/34915231199"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-10 right-10 z-[100] w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_10px_40px_rgba(37,211,102,0.4)] hover:scale-110 active:scale-90 transition-transform group"
    >
      <svg
        viewBox="0 0 24 24"
        width="32"
        height="32"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="group-hover:rotate-12 transition-transform"
      >
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-7.6 8.38 8.38 0 0 1 3.8.9L22 2l-1.5 5.5Z" />
      </svg>
      
      {/* Tooltip */}
      <span className="absolute right-20 bg-white text-luxury-900 px-4 py-2 rounded-xl text-xs font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-luxury-100">
        ¿Necesitas ayuda?
      </span>
    </motion.a>
  );
};

export default WhatsAppBtn;
