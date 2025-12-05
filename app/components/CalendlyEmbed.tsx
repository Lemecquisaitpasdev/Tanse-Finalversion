'use client';

import { InlineWidget } from 'react-calendly';
import { useEffect, useState } from 'react';
import { Loader2, Calendar } from 'lucide-react';

/**
 * Composant Calendly réutilisable pour TANSE
 * Intégration propre avec loading state et responsive design
 */
export default function CalendlyEmbed() {
  const [isLoading, setIsLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Loading state
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Prevent SSR issues
  if (!mounted) {
    return (
      <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-neutral-200/50 min-h-[700px] flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <Calendar className="h-12 w-12 text-[#444684] animate-pulse" />
          <p className="text-sm text-neutral-600">Chargement du calendrier...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-neutral-200/50 min-h-[700px]">
      {/* Loading state */}
      {isLoading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-white z-10">
          <Loader2 className="h-10 w-10 text-[#444684] animate-spin mb-4" />
          <p className="text-sm text-neutral-600 animate-pulse">
            Chargement du calendrier...
          </p>
        </div>
      )}

      {/* Calendly Widget */}
      <div className="w-full" style={{ minHeight: '700px' }}>
        <InlineWidget
          url="https://calendly.com/contact-tanse/30min"
          styles={{
            height: '700px',
            minWidth: '100%',
          }}
          pageSettings={{
            backgroundColor: 'ffffff',
            hideEventTypeDetails: false,
            hideLandingPageDetails: false,
            primaryColor: '444684',
            textColor: '0b0b0c',
          }}
        />
      </div>
    </div>
  );
}
