'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import PixelTrail from '../components/entreprise/PixelTrail';

/**
 * Browser Company (Arc/Dia) inspired landing page
 * Four-corner grid layout with pixel trail effect
 */
export default function EntreprisePage() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const currentYear = new Date().getFullYear();

  return (
    <main className="relative min-h-screen bg-[#1B1B1B] text-white overflow-hidden">
      {/* Pixel Trail Effect */}
      <PixelTrail />

      {/* Four-Corner Grid Layout */}
      <div className="fixed inset-0 p-8 md:p-10">
        {/* Top-Left: Status Indicators */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-8 md:top-10 left-8 md:left-10 flex flex-col gap-3"
          style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '10px',
            letterSpacing: '0.15em',
          }}
        >
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-[#658AFF] rounded-sm animate-pulse" />
            <span className="text-[#e4e4e4] uppercase">EN LIGNE</span>
          </div>
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="flex items-center gap-2 hover:text-[#658AFF] transition-colors group"
          >
            <div className="w-3 h-3 border border-[#e4e4e4] group-hover:border-[#658AFF] transition-colors" />
            <span className="text-[#e4e4e4] group-hover:text-[#658AFF] uppercase">THEME</span>
          </button>
        </motion.div>

        {/* Center Hero */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl px-6 text-center">
          {/* Logo Circle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="flex justify-center mb-12"
          >
            <div className="w-32 h-32 md:w-40 md:h-40 relative rounded-full bg-gradient-to-br from-[#658AFF]/20 to-transparent border border-[#658AFF]/30 backdrop-blur-xl flex items-center justify-center">
              <Image
                src="/brand/tanse-logo.png?v=3"
                alt="TANSE"
                width={120}
                height={120}
                className="object-contain opacity-90"
              />
            </div>
          </motion.div>

          {/* Slogan */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="text-[#658AFF] italic mb-12"
            style={{
              fontFamily: 'EB Garamond, Times New Roman, serif',
              fontSize: 'clamp(1.5rem, 4vw, 2rem)',
              lineHeight: '1.4',
            }}
          >
            Nous créons de meilleures façons d'utiliser
            <br />
            Internet avec{' '}
            <Link href="/geo" className="underline decoration-1 underline-offset-4 hover:text-[#8AA8FF] transition-colors">
              GEO
            </Link>{' '}
            et{' '}
            <Link href="/forfaits-geo-seo" className="underline decoration-1 underline-offset-4 hover:text-[#8AA8FF] transition-colors">
              SEO
            </Link>
            .
          </motion.h1>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Link
              href="/forfaits-geo-seo"
              className="group relative px-8 py-3 bg-transparent border border-white/40 rounded-full hover:border-[#658AFF] hover:bg-[#658AFF]/10 transition-all duration-300 flex items-center gap-3"
            >
              <span className="w-5 h-5 rounded-full border border-white/60 group-hover:border-[#658AFF] flex items-center justify-center text-xs">
                O
              </span>
              <span
                className="text-white group-hover:text-[#658AFF]"
                style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '11px',
                  letterSpacing: '0.1em',
                }}
              >
                TANSE
              </span>
            </Link>

            <Link
              href="/geo"
              className="group relative px-8 py-3 bg-transparent border border-white/40 rounded-full hover:border-[#658AFF] hover:bg-[#658AFF]/10 transition-all duration-300 flex items-center gap-3"
            >
              <span className="w-5 h-5 rounded-full border border-white/60 group-hover:border-[#658AFF] flex items-center justify-center text-xs">
                A
              </span>
              <span
                className="text-white group-hover:text-[#658AFF]"
                style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '11px',
                  letterSpacing: '0.1em',
                }}
              >
                TANSE GEO INDEX
              </span>
            </Link>
          </motion.div>

          {/* Bottom Navigation */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-6"
            style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '11px',
              letterSpacing: '0.12em',
            }}
          >
            <Link
              href="/agence-geo-paris-lyon#values"
              className="text-[#e4e4e4] hover:text-[#658AFF] transition-colors uppercase relative group"
            >
              VALEURS
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#658AFF] group-hover:w-full transition-all duration-300" />
            </Link>
            <Link
              href="/collaboration-okurai"
              className="text-[#e4e4e4] hover:text-[#658AFF] transition-colors uppercase relative group"
            >
              PARTENAIRES
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#658AFF] group-hover:w-full transition-all duration-300" />
            </Link>
            <Link
              href="/blog-seo-geo"
              className="text-[#e4e4e4] hover:text-[#658AFF] transition-colors uppercase relative group"
            >
              BLOG
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#658AFF] group-hover:w-full transition-all duration-300" />
            </Link>
            <Link
              href="/blog-seo-geo#newsletter"
              className="text-[#e4e4e4] hover:text-[#658AFF] transition-colors uppercase relative group"
            >
              NEWSLETTER
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#658AFF] group-hover:w-full transition-all duration-300" />
            </Link>
            <a
              href="https://x.com/tanse_fr"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 border border-[#e4e4e4]/30 rounded text-[#e4e4e4] hover:text-[#658AFF] hover:border-[#658AFF] transition-all"
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
          className="absolute bottom-8 md:bottom-10 left-8 md:left-10 flex items-center gap-4"
        >
          <Link href="/" className="opacity-60 hover:opacity-100 transition-opacity">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="text-[#e4e4e4]"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
          </Link>
          <div className="w-px h-8 bg-[#e4e4e4]/20" />
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
          className="absolute bottom-8 md:bottom-10 right-8 md:right-10 text-right"
          style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '9px',
            letterSpacing: '0.1em',
          }}
        >
          <p className="text-[#e4e4e4]/60 uppercase">©PYRIGHT {currentYear}</p>
        </motion.div>
      </div>
    </main>
  );
}
