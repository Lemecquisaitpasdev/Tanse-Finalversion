'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import PixelTrail from '../components/entreprise/PixelTrail';

/**
 * Tanse Enterprise Page - Arc/Dia exact replica
 * Pixel-perfect implementation with exact typography and spacing
 */
export default function EntreprisePage() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const currentYear = new Date().getFullYear();

  return (
    <main className="relative min-h-screen bg-[#1B1B1B] text-white overflow-hidden">
      {/* Pixel Trail Effect - Color #444684 */}
      <PixelTrail />

      {/* Four-Corner Grid Layout - 40px from edges */}
      <div className="fixed inset-0 p-10">
        {/* Top-Left: Status Indicators */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-10 left-10 flex flex-col gap-3"
          style={{
            fontFamily: '"ABCDiatypeMono", monospace',
            fontSize: '14px',
            fontWeight: 400,
            fontStyle: 'normal',
            lineHeight: 'normal',
            color: 'rgb(255, 255, 255)',
          }}
        >
          {/* Row 1: Blue square + Company count */}
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-[#0047FF]" />
            <span className="uppercase">46 Entreprises collaborent avec Tanse</span>
          </div>
          {/* Row 2: Theme toggle */}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="flex items-center gap-2 hover:opacity-70 transition-opacity group"
          >
            <div className="w-3 h-3 border border-white" />
            <span className="uppercase">THEME</span>
          </button>
        </motion.div>

        {/* Center Hero */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl px-6 text-center">
          {/* Circular Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="flex justify-center mb-12"
          >
            <div className="w-40 h-40 relative rounded-full bg-gradient-to-br from-[#658AFF]/20 to-transparent border border-[#658AFF]/30 backdrop-blur-xl flex items-center justify-center">
              <Image
                src="/brand/tanse-logo.png?v=3"
                alt="TANSE"
                width={120}
                height={120}
                className="object-contain opacity-90"
              />
            </div>
          </motion.div>

          {/* Slogan - Exact typography specs */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="text-[#658AFF] mb-12"
            style={{
              fontFamily: '"EB Garamond", serif',
              fontStyle: 'italic',
              fontSize: '28px',
              fontWeight: 400,
              lineHeight: '33.6px',
            }}
          >
            Nous créons de meilleures façons d'utiliser
            <br />
            Internet avec{' '}
            <Link href="/forfaits-geo-seo" className="underline decoration-1 underline-offset-4 hover:opacity-80 transition-opacity">
              Tanse
            </Link>{' '}
            et{' '}
            <Link href="/geo" className="underline decoration-1 underline-offset-4 hover:opacity-80 transition-opacity">
              Tanse GEO Index
            </Link>
            .
          </motion.h1>

          {/* CTA Buttons - Pill shaped with thin borders */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Link
              href="/forfaits-geo-seo"
              className="group relative px-8 py-3 bg-transparent border border-white/30 hover:border-[#658AFF] hover:bg-[#658AFF]/10 transition-all duration-300 flex items-center gap-3"
              style={{ borderRadius: '50%' }}
            >
              <span className="w-5 h-5 rounded-full border border-white/60 group-hover:border-[#658AFF] flex items-center justify-center text-xs">
                O
              </span>
              <span
                className="group-hover:text-[#658AFF] uppercase"
                style={{
                  fontFamily: '"ABCDiatypeMono", monospace',
                  fontSize: '14px',
                  fontWeight: 400,
                  fontStyle: 'normal',
                  lineHeight: 'normal',
                  color: 'rgb(255, 255, 255)',
                }}
              >
                TANSE
              </span>
            </Link>

            <Link
              href="/geo"
              className="group relative px-8 py-3 bg-transparent border border-white/30 hover:border-[#658AFF] hover:bg-[#658AFF]/10 transition-all duration-300 flex items-center gap-3"
              style={{ borderRadius: '50%' }}
            >
              <span className="w-5 h-5 rounded-full border border-white/60 group-hover:border-[#658AFF] flex items-center justify-center text-xs">
                A
              </span>
              <span
                className="group-hover:text-[#658AFF] uppercase"
                style={{
                  fontFamily: '"ABCDiatypeMono", monospace',
                  fontSize: '14px',
                  fontWeight: 400,
                  fontStyle: 'normal',
                  lineHeight: 'normal',
                  color: 'rgb(255, 255, 255)',
                }}
              >
                TANSE GEO INDEX
              </span>
            </Link>
          </motion.div>

          {/* Bottom Navigation - French */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-6"
            style={{
              fontFamily: '"ABCDiatypeMono", monospace',
              fontSize: '14px',
              fontWeight: 400,
              fontStyle: 'normal',
              lineHeight: 'normal',
            }}
          >
            <Link
              href="/agence-geo-paris-lyon#values"
              className="text-white hover:text-[#658AFF] transition-colors uppercase relative group"
            >
              ENTREPRISE
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#658AFF] group-hover:w-full transition-all duration-300" />
            </Link>
            <Link
              href="/agence-geo-paris-lyon#method"
              className="text-white hover:text-[#658AFF] transition-colors uppercase relative group"
            >
              VALEURS
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#658AFF] group-hover:w-full transition-all duration-300" />
            </Link>
            <Link
              href="/collaboration-okurai"
              className="text-white hover:text-[#658AFF] transition-colors uppercase relative group"
            >
              EMPLOIS
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#658AFF] group-hover:w-full transition-all duration-300" />
            </Link>
            <Link
              href="/blog-seo-geo#newsletter"
              className="text-white hover:text-[#658AFF] transition-colors uppercase relative group"
            >
              NEWSLETTER
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#658AFF] group-hover:w-full transition-all duration-300" />
            </Link>
            <a
              href="https://x.com/tanse_fr"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 border border-white/30 text-white hover:text-[#658AFF] hover:border-[#658AFF] transition-all uppercase"
            >
              @TANSE
            </a>
          </motion.nav>
        </div>

        {/* Bottom-Left: Logo + Globe */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 1 }}
          className="absolute bottom-10 left-10 flex items-center gap-4"
        >
          <Link href="/" className="opacity-60 hover:opacity-100 transition-opacity">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="text-white"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
          </Link>
          <div className="w-px h-8 bg-white/20" />
          <div className="relative w-12 h-12">
            <Image
              src="/brand/tanse-mark.png?v=3"
              alt="TANSE"
              width={48}
              height={48}
              className="object-contain opacity-60 hover:opacity-100 transition-opacity"
            />
          </div>
        </motion.div>

        {/* Bottom-Right: Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 1 }}
          className="absolute bottom-10 right-10 text-right"
          style={{
            fontFamily: '"ABCDiatypeMono", "JetBrains Mono", monospace',
            fontSize: '14px',
            fontWeight: 400,
            letterSpacing: '0.15em',
          }}
        >
          <p className="text-white/60 uppercase">| COPYRIGHT {currentYear} |</p>
        </motion.div>
      </div>
    </main>
  );
}
