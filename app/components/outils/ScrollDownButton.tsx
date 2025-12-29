'use client';

import { motion } from 'framer-motion';

/**
 * ScrollDownButton - Dia style scroll indicator
 * Smooth animated arrow that scrolls to content
 */
export default function ScrollDownButton() {
  const scrollToContent = () => {
    const contentSection = document.getElementById('content-start');
    if (contentSection) {
      contentSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <motion.button
      onClick={scrollToContent}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1 }}
      className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 group"
      aria-label="Défiler vers le bas"
    >
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="flex flex-col items-center gap-2"
      >
        {/* Arrow Icon */}
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm border border-gray-200/60 shadow-lg group-hover:shadow-xl group-hover:bg-white transition-all duration-300">
          <svg
            className="w-6 h-6 text-black"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </motion.div>
    </motion.button>
  );
}
