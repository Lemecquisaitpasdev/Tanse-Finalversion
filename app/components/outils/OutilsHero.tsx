'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

/**
 * OutilsHero - Hero section with REAL diabrowser.com inspired design
 * Features: WHITE background, BLACK text, minimal gradient, Framer Motion animations
 */
export default function OutilsHero() {
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [shake, setShake] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!url.trim()) {
      setShake(true);
      setTimeout(() => setShake(false), 500);
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      router.push(`/geo-score?url=${encodeURIComponent(url)}`);
    }, 800);
  };

  // Animation variants
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.4,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.6,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section
      className="relative min-h-screen pt-40 pb-32 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #FFFFFF 0%, #FAFAF9 100%)',
      }}
    >
      <div className="container relative z-10 mx-auto max-w-5xl px-6">
        {/* Animated Title */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-8 text-center"
        >
          <motion.h1
            variants={titleVariants}
            className="text-6xl md:text-7xl lg:text-8xl font-[800] text-black leading-[1.1] mb-4"
            style={{ letterSpacing: '-0.04em', fontFamily: 'var(--font-geist-sans), Inter, sans-serif' }}
          >
            Mesurez votre
          </motion.h1>
          <motion.h1
            variants={titleVariants}
            className="text-6xl md:text-7xl lg:text-8xl font-[800] text-black leading-[1.1]"
            style={{ letterSpacing: '-0.04em', fontFamily: 'var(--font-geist-sans), Inter, sans-serif' }}
          >
            visibilité IA en{' '}
            <span className="bg-gradient-to-r from-black via-gray-700 to-gray-500 bg-clip-text text-transparent">
              30 secondes
            </span>
          </motion.h1>
        </motion.div>

        {/* Animated Subtitle */}
        <motion.p
          variants={subtitleVariants}
          initial="hidden"
          animate="visible"
          className="mb-16 text-center text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
        >
          Découvrez comment ChatGPT, Claude et Perplexity voient votre site.
          <br className="hidden md:block" />
          Analyse gratuite et instantanée de votre score GEO.
        </motion.p>

        {/* Animated Form */}
        <motion.form
          variants={formVariants}
          initial="hidden"
          animate="visible"
          onSubmit={handleSubmit}
          className="mx-auto max-w-2xl"
        >
          <div
            className={`flex flex-col gap-4 md:flex-row ${
              shake ? 'animate-shake' : ''
            }`}
          >
            {/* Input */}
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Entrez l'URL de votre site..."
              className="flex-1 rounded-full border border-gray-200 bg-white px-8 py-5 text-gray-900
                         transition-all duration-200 placeholder:text-gray-400
                         focus:border-gray-400 focus:outline-none focus:ring-4 focus:ring-gray-100
                         hover:border-gray-300 shadow-sm"
              disabled={isLoading}
            />

            {/* Submit Button - BLACK like diabrowser */}
            <motion.button
              type="submit"
              disabled={isLoading}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2, ease: 'easeInOut' }}
              className="rounded-full bg-black px-10 py-5 font-semibold text-white
                         transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed
                         hover:bg-gray-800 shadow-md hover:shadow-lg
                         whitespace-nowrap"
            >
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <svg
                    className="h-5 w-5 animate-spin"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Analyse...
                </span>
              ) : (
                'Analyser →'
              )}
            </motion.button>
          </div>

          {/* Help text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="mt-6 text-center text-sm text-gray-500"
          >
            Exemple : https://www.exemple.fr
          </motion.p>
        </motion.form>
      </div>
    </section>
  );
}
