'use client';

import { useState, FormEvent, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * OutilsHero - The Browser Company (Dia) pixel-perfect design
 * Features: Cycling words with vertical fade, floating search bar with chips
 */
export default function OutilsHero() {
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [shake, setShake] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [chips, setChips] = useState<string[]>([]);
  const router = useRouter();

  // Cycling words for hero title
  const cyclingWords = ['Optimiser', 'Analyser', 'Mesurer'];

  // Cycle through words
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % cyclingWords.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

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

  const addChip = (text: string) => {
    if (!chips.includes(text)) {
      setChips([...chips, text]);
    }
  };

  const removeChip = (text: string) => {
    setChips(chips.filter(chip => chip !== text));
  };

  // Animation variants
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section className="relative overflow-hidden py-32 md:py-48">
      <div className="container relative z-10 mx-auto max-w-5xl px-6">
        {/* Animated Title with Cycling Words */}
        <motion.div variants={titleVariants} initial="hidden" animate="visible" className="mb-12 text-center">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium text-black leading-[1.1]" style={{ letterSpacing: '-0.02em', fontFamily: 'var(--font-geist-sans), Inter, -apple-system, sans-serif' }}>
            <AnimatePresence mode="wait">
              <motion.span key={currentWordIndex} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -30 }} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }} className="inline-block">
                {cyclingWords[currentWordIndex]}
              </motion.span>
            </AnimatePresence>
            <br />
            votre visibilité IA
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p variants={subtitleVariants} initial="hidden" animate="visible" className="mb-16 text-center text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Découvrez comment ChatGPT, Claude et Perplexity voient votre site
        </motion.p>

        {/* Floating Search Bar with Chips - Dia Style */}
        <motion.form variants={formVariants} initial="hidden" animate="visible" onSubmit={handleSubmit} className="mx-auto max-w-3xl">
          <div className={`relative ${shake ? 'animate-shake' : ''}`}>
            {/* Search Bar Container */}
            <div className="flex flex-col gap-3 rounded-[24px] border border-gray-200/80 bg-white/95 backdrop-blur-xl px-6 py-5 shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)]">
              {/* Chips Display */}
              {chips.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {chips.map((chip) => (
                    <motion.span key={chip} initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1.5 text-sm text-gray-700">
                      <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                      </svg>
                      <span>{chip}</span>
                      <button type="button" onClick={() => removeChip(chip)} className="ml-1 rounded-full hover:bg-gray-200 p-0.5 transition-colors">
                        <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </motion.span>
                  ))}
                </div>
              )}

              {/* Input Row */}
              <div className="flex items-center gap-4">
                {/* Search Icon */}
                <svg className="h-5 w-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>

                {/* Input */}
                <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="Entrez l'URL de votre site..." className="flex-1 bg-transparent text-base text-gray-900 placeholder:text-gray-400 focus:outline-none" disabled={isLoading} />

                {/* Submit Button */}
                <motion.button type="submit" disabled={isLoading} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="rounded-[20px] bg-black px-8 py-3 text-sm font-medium text-white transition-all duration-200 disabled:opacity-50 hover:bg-gray-900 whitespace-nowrap">
                  {isLoading ? 'Analyse...' : 'Analyser'}
                </motion.button>
              </div>
            </div>
          </div>

          {/* Quick Action Chips */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 0.6 }} className="mt-6 flex flex-wrap justify-center gap-3">
            <button type="button" onClick={() => addChip('E-commerce')} className="rounded-full border border-gray-200 bg-white/80 px-4 py-2 text-sm text-gray-600 transition-all duration-200 hover:border-gray-300 hover:bg-white hover:shadow-sm">
              E-commerce
            </button>
            <button type="button" onClick={() => addChip('SaaS')} className="rounded-full border border-gray-200 bg-white/80 px-4 py-2 text-sm text-gray-600 transition-all duration-200 hover:border-gray-300 hover:bg-white hover:shadow-sm">
              SaaS
            </button>
            <button type="button" onClick={() => addChip('Blog')} className="rounded-full border border-gray-200 bg-white/80 px-4 py-2 text-sm text-gray-600 transition-all duration-200 hover:border-gray-300 hover:bg-white hover:shadow-sm">
              Blog
            </button>
          </motion.div>
        </motion.form>
      </div>
    </section>
  );
}
