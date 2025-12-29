'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

interface OutilCardProps {
  icon: string;
  title: string;
  description: string;
  href: string;
  index?: number;
}

// Gradient halos colors for each card - diabrowser style
const haloColors = [
  'rgba(255,200,87,0.35)',   // Yellow/orange
  'rgba(139,92,246,0.3)',     // Purple/violet
  'rgba(255,107,168,0.3)',    // Pink/rose
];

/**
 * OutilCard - diabrowser.com design with colorful gradient halos
 */
export default function OutilCard({ icon, title, description, href, index = 0 }: OutilCardProps) {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.8 + index * 0.15,
        ease: [0.2, 0.7, 0.2, 1] as const,
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      className="relative"
    >
      {/* Gradient halo behind card - diabrowser style */}
      <div
        className="absolute -inset-4 rounded-[40px] opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500"
        style={{ background: `radial-gradient(circle at center, ${haloColors[index % 3]} 0%, transparent 70%)` }}
      />

      <Link
        href={href}
        className="group block relative overflow-hidden rounded-[32px] bg-white border border-gray-200/60 p-10 md:p-12 transition-all duration-300 hover:border-gray-300/80 hover:shadow-xl shadow-md"
      >
        {/* Subtle hover gradient */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 via-transparent to-transparent" />
        </div>

        <div className="relative z-10">
          {/* Icon */}
          <motion.div
            className="text-7xl mb-8"
            whileHover={{ scale: 1.1, rotate: 8 }}
            transition={{ duration: 0.3, ease: [0.2, 0.7, 0.2, 1] }}
          >
            {icon}
          </motion.div>

          {/* Title */}
          <h3 className="text-4xl font-[800] text-black mb-5 group-hover:text-gray-900 transition-colors"
              style={{ letterSpacing: '-0.03em' }}>
            {title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 text-lg leading-relaxed mb-10">
            {description}
          </p>

          {/* CTA Button - BLACK diabrowser style */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2, ease: [0.2, 0.7, 0.2, 1] }}
            className="inline-flex items-center gap-3 rounded-full bg-black px-7 py-3.5 font-semibold text-white text-sm transition-all duration-200 group-hover:bg-gray-900 shadow-md group-hover:shadow-lg"
          >
            <span>Commencer</span>
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </motion.div>
        </div>
      </Link>
    </motion.div>
  );
}
