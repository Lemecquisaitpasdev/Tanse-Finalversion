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

/**
 * OutilCard - Reusable card component with diabrowser.com inspired design
 * Features: Framer Motion animations, pixel-perfect design, scale on hover
 */
export default function OutilCard({ icon, title, description, href, index = 0 }: OutilCardProps) {
  // Card animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.8 + index * 0.1,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
    >
      <Link
        href={href}
        className="group block relative overflow-hidden rounded-3xl bg-black border border-[#FFFFFF1A]
                   p-8 md:p-10 transition-all duration-200 hover:border-white/30
                   hover:bg-white/[0.02]"
      >
        {/* Hover gradient effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent" />
        </div>

        <div className="relative z-10">
          {/* Icon */}
          <motion.div
            className="text-6xl mb-6"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.2 }}
          >
            {icon}
          </motion.div>

          {/* Title */}
          <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-white/90 transition-colors">
            {title}
          </h3>

          {/* Description */}
          <p className="text-[#A1A1AA] text-lg leading-relaxed mb-8">
            {description}
          </p>

          {/* CTA Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-black
                       transition-all duration-200 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
          >
            <span>Commencer</span>
            <svg
              className="w-5 h-5 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </motion.div>
        </div>

        {/* Subtle corner accent */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </Link>
    </motion.div>
  );
}
