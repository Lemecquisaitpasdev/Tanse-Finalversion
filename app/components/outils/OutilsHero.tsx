'use client';

import { useState, FormEvent, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

/**
 * OutilsHero - EXACT diabrowser.com pixel-perfect design
 * Features: Generous spacing (pt-96, pb-140px), large rounded frames, colorful gradient halos
 */
export default function OutilsHero() {
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [shake, setShake] = useState(false);
  const [displayText, setDisplayText] = useState('');
  const router = useRouter();

  // Typewriter effect
  const fullText = 'visibilité IA';
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 80);
    return () => clearInterval(timer);
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
    <section className="relative overflow-hidden" style={{ paddingTop: '24rem', paddingBottom: '10rem', background: 'linear-gradient(180deg, #FEFEFE 0%, #FAF9F7 50%, #F5F4F1 100%)' }}>
      {/* Massive gradient halos - diabrowser exact style */}
      <div className="absolute top-40 left-[10%] w-[800px] h-[800px] rounded-full opacity-[0.35] blur-[120px]" style={{ background: 'radial-gradient(circle, rgba(255,200,87,0.5) 0%, transparent 70%)' }} />
      <div className="absolute bottom-20 right-[15%] w-[900px] h-[900px] rounded-full opacity-[0.3] blur-[120px]" style={{ background: 'radial-gradient(circle, rgba(255,107,168,0.4) 0%, transparent 70%)' }} />
      <div className="absolute top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full opacity-[0.25] blur-[120px]" style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.3) 0%, transparent 70%)' }} />

      <div className="container relative z-10 mx-auto max-w-5xl px-6">
        {/* Animated Title with Typewriter */}
        <motion.div variants={titleVariants} initial="hidden" animate="visible" className="mb-16 text-center">
          <h1 className="text-6xl md:text-7xl lg:text-[96px] font-[800] text-black leading-[1.05]" style={{ letterSpacing: '-0.04em', fontFamily: 'var(--font-geist-sans), Inter, -apple-system, sans-serif' }}>
            Mesurez votre
            <br />
            <span className="inline-flex items-center gap-3">
              {displayText}
              <span className="inline-block w-1.5 h-20 md:h-24 bg-black" style={{ animation: 'blink 1s step-end infinite' }} />
            </span>
            {' '}en{' '}
            <span className="bg-gradient-to-r from-black via-gray-700 to-gray-500 bg-clip-text text-transparent">
              30 secondes
            </span>
          </h1>
        </motion.div>

        {/* Animated Subtitle */}
        <motion.p variants={subtitleVariants} initial="hidden" animate="visible" className="mb-20 text-center text-2xl md:text-3xl text-gray-600 max-w-3xl mx-auto leading-[1.4]">
          Découvrez comment ChatGPT, Claude et Perplexity voient votre site.
          <br className="hidden md:block" />
          Analyse gratuite et instantanée de votre score GEO.
        </motion.p>

        {/* Animated Form */}
        <motion.form variants={formVariants} initial="hidden" animate="visible" onSubmit={handleSubmit} className="mx-auto max-w-3xl">
          <div className={`flex flex-col gap-5 md:flex-row ${shake ? 'animate-shake' : ''}`}>
            {/* Input with larger border-radius */}
            <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="Entrez l'URL de votre site..." className="flex-1 rounded-full border-2 border-gray-200 bg-white/90 backdrop-blur-sm px-10 py-6 text-lg text-gray-900 transition-all duration-300 placeholder:text-gray-400 focus:border-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-100 hover:border-gray-300 shadow-lg hover:shadow-xl" disabled={isLoading} />

            {/* Submit Button - BLACK diabrowser style with larger size */}
            <motion.button type="submit" disabled={isLoading} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }} className="rounded-full bg-black px-12 py-6 text-lg font-semibold text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-900 shadow-xl hover:shadow-2xl whitespace-nowrap">
              {isLoading ? (
                <span className="flex items-center gap-3">
                  <svg className="h-6 w-6 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Analyse...
                </span>
              ) : (
                'Analyser →'
              )}
            </motion.button>
          </div>

          {/* Help text */}
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 0.6 }} className="mt-8 text-center text-base text-gray-500">
            Exemple : https://www.exemple.fr
          </motion.p>
        </motion.form>
      </div>

      {/* Blink animation for cursor */}
      <style jsx>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
    </section>
  );
}
