'use client';

import { InlineWidget } from 'react-calendly';
import { useEffect, useState } from 'react';
import { Loader2 } from 'lucide-react';

/**
 * Composant Calendly réutilisable pour TANSE
 * Intégration propre avec loading state et responsive design
 */
export default function CalendlyEmbed() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for better UX
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-neutral-200/50">
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
  );
}
