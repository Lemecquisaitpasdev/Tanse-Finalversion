'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';

/**
 * OutilsHero - Hero section with URL input and analyze button
 * Features: Form validation, smooth redirect, skeleton loader, easter egg on button
 */
export default function OutilsHero() {
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [shake, setShake] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Basic URL validation
    if (!url.trim()) {
      setShake(true);
      setTimeout(() => setShake(false), 500);
      return;
    }

    // Easter egg: Konami code detection (optional enhancement)
    setIsLoading(true);

    // Simulate analysis delay
    setTimeout(() => {
      router.push(`/geo-score?url=${encodeURIComponent(url)}`);
    }, 800);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#E4E4E4] via-[#f0f0f0] to-[#E4E4E4] py-24 md:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23444684' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto max-w-4xl px-6">
        {/* Title */}
        <h1 className="mb-6 text-center text-4xl font-bold leading-tight text-[#444684] md:text-6xl">
          Mesurez votre visibilité IA en{' '}
          <span className="bg-gradient-to-r from-[#444684] to-[#6b62a4] bg-clip-text text-transparent">
            30 secondes
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mb-12 text-center text-lg text-gray-600 md:text-xl">
          Découvrez comment ChatGPT, Claude et Perplexity voient votre site.
          <br />
          Analyse gratuite et instantanée de votre score GEO.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mx-auto max-w-2xl">
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
              className="flex-1 rounded-xl border border-gray-300 bg-white px-6 py-4 text-gray-900
                         shadow-md transition-all duration-200 placeholder:text-gray-400
                         focus:border-[#444684] focus:outline-none focus:ring-2 focus:ring-[#444684]/20"
              disabled={isLoading}
            />

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="group relative overflow-hidden rounded-xl bg-[#444684] px-8 py-4 font-semibold
                         text-white shadow-lg transition-all duration-300 hover:bg-[#5a5a9e]
                         hover:shadow-xl hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed
                         active:translate-y-0"
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
                <>
                  Analyser
                  <div className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-white/20 to-transparent
                                  translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                </>
              )}
            </button>
          </div>

          {/* Help text */}
          <p className="mt-4 text-center text-sm text-gray-500">
            Exemple : https://www.exemple.fr
          </p>
        </form>
      </div>

      {/* Decorative element */}
      <div className="absolute -bottom-1 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
