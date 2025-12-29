'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface BentoSectionProps {
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  gradientFrom: string;
  gradientTo: string;
  index?: number;
}

/**
 * BentoSection - EXACT diabrowser.com "Dia is for X" style
 * Large rounded frames (60-80px) with colorful gradient backgrounds
 */
export default function BentoSection({
  title,
  subtitle,
  description,
  ctaText,
  ctaHref,
  gradientFrom,
  gradientTo,
  index = 0,
}: BentoSectionProps) {
  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.2 + index * 0.15,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      className="relative"
      style={{ padding: '10rem 1.5rem' }}
    >
      <div className="container mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-2 items-center">
          {/* Left: Text Content */}
          <div className="space-y-10">
            <div className="space-y-6">
              <p className="text-2xl md:text-3xl font-semibold text-gray-500" style={{ letterSpacing: '-0.02em' }}>
                {subtitle}
              </p>
              <h2 className="text-6xl md:text-7xl lg:text-[80px] font-[800] text-black leading-[1.05]" style={{ letterSpacing: '-0.04em' }}>
                {title}
              </h2>
            </div>
            <p className="text-xl md:text-2xl text-gray-600 leading-[1.5] max-w-xl">
              {description}
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}>
              <Link href={ctaHref} className="inline-flex items-center gap-3 rounded-full bg-black px-10 py-5 text-lg font-semibold text-white transition-all duration-300 hover:bg-gray-900 shadow-xl hover:shadow-2xl">
                <span>{ctaText}</span>
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>
          </div>

          {/* Right: Large Rounded Frame with Gradient Background */}
          <div className="relative">
            {/* Gradient halo behind frame */}
            <div className="absolute -inset-12 rounded-[80px] opacity-40 blur-[100px]" style={{ background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})` }} />

            {/* Main Frame - diabrowser style */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative overflow-hidden rounded-[60px] lg:rounded-[80px] bg-gradient-to-br shadow-2xl"
              style={{
                background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`,
                aspectRatio: '4/3',
              }}
            >
              {/* Content inside frame - placeholder for now */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white/20 text-9xl font-[800]">
                  {title.split(' ')[0]}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
