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
 * OutilCard - Reusable card component with REAL diabrowser.com inspired design
 * Features: WHITE background, subtle borders, BLACK button, Framer Motion animations
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
        className="group block relative overflow-hidden rounded-3xl bg-white border border-gray-200
                   p-8 md:p-10 transition-all duration-200 hover:border-gray-300
                   hover:shadow-lg shadow-sm"
      >
        {/* Hover gradient effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-transparent to-transparent" />
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
          <h3 className="text-3xl font-bold text-black mb-4 group-hover:text-gray-800 transition-colors">
            {title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            {description}
          </p>

          {/* CTA Button - BLACK like diabrowser */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 font-semibold text-white
                       transition-all duration-200 group-hover:bg-gray-800 shadow-md group-hover:shadow-lg"
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
      </Link>
    </motion.div>
  );
}
