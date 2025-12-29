'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

interface DiaFooterProps {
  toolName: string;
  ctaText?: string;
  ctaHref?: string;
}

/**
 * DiaFooter - The Browser Company (Dia) style
 * Massive text "[Tool Name]. Tout faire." with ultra-rounded black CTA
 */
export default function DiaFooter({
  toolName,
  ctaText = 'Commencer gratuitement',
  ctaHref = '/geo-score',
}: DiaFooterProps) {
  return (
    <footer className="relative py-32 md:py-48 px-6 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/50 to-white" />

      <div className="container relative z-10 mx-auto max-w-6xl">
        {/* Massive Text */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="mb-16 text-center">
          <h2 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-medium text-black leading-[1.05]" style={{ letterSpacing: '-0.03em', fontFamily: 'var(--font-geist-sans), Inter, -apple-system, sans-serif' }}>
            {toolName}.
            <br />
            <span className="text-gray-400">Tout faire.</span>
          </h2>
        </motion.div>

        {/* Ultra-Rounded CTA Button */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }} className="flex justify-center">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.2 }}>
            <Link href={ctaHref} className="inline-flex items-center gap-4 rounded-[40px] bg-black px-12 py-6 text-lg font-medium text-white transition-all duration-300 hover:bg-gray-900 shadow-[0_20px_60px_rgba(0,0,0,0.25)] hover:shadow-[0_25px_70px_rgba(0,0,0,0.35)]">
              <span>{ctaText}</span>
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </motion.div>

        {/* Subtle Bottom Text */}
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }} className="mt-20 text-center text-sm text-gray-400">
          © 2025 TANSE. Tous droits réservés.
        </motion.p>
      </div>
    </footer>
  );
}
