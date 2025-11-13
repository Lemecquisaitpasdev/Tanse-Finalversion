"use client";

import { useEffect, useRef } from 'react';

interface TrustpilotWidgetProps {
  templateId?: string; // ID du template TrustBox (par défaut: carousel)
  businessUnitId?: string; // ID de votre entreprise sur Trustpilot
  theme?: 'light' | 'dark';
  stars?: '1' | '2' | '3' | '4' | '5';
  reviewLanguages?: string; // ex: 'fr,en'
  height?: string;
  width?: string;
  className?: string;
}

/**
 * Composant TrustpilotWidget - Affiche un widget Trustpilot
 *
 * Pour configurer:
 * 1. Obtenez votre Business Unit ID sur https://businessapp.b2b.trustpilot.com/#/integrations/trustbox
 * 2. Choisissez un template (carousel, mini, horizontal, etc.)
 * 3. Configurez les options selon vos besoins
 *
 * Templates populaires:
 * - 53aa8912dec7e10d38f59f36 (Carousel - 5 avis défilants)
 * - 539ad60defb9600b94d7df2c (Horizontal - liste d'avis)
 * - 5419b6a8b0d04a076446a9ad (Mini - étoiles + note)
 * - 54ad5defc6454f065c28af8b (Slider - défilement auto)
 */
export default function TrustpilotWidget({
  templateId = '53aa8912dec7e10d38f59f36', // Carousel par défaut
  businessUnitId = process.env.NEXT_PUBLIC_TRUSTPILOT_BUSINESS_UNIT_ID || '',
  theme = 'light',
  stars = '5',
  reviewLanguages = 'fr',
  height = '400px',
  width = '100%',
  className = ''
}: TrustpilotWidgetProps) {
  const trustboxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Vérifier que le Business Unit ID est configuré
    if (!businessUnitId) {
      console.warn('⚠️ Trustpilot Business Unit ID not configured. Set NEXT_PUBLIC_TRUSTPILOT_BUSINESS_UNIT_ID in your .env file.');
      return;
    }

    // Charger le script Trustpilot s'il n'est pas déjà chargé
    if (!window.Trustpilot) {
      const script = document.createElement('script');
      script.src = '//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js';
      script.async = true;
      script.onload = () => {
        if (window.Trustpilot && trustboxRef.current) {
          window.Trustpilot.loadFromElement(trustboxRef.current, true);
        }
      };
      document.head.appendChild(script);
    } else {
      // Si le script est déjà chargé, initialiser le widget
      if (trustboxRef.current) {
        window.Trustpilot.loadFromElement(trustboxRef.current, true);
      }
    }
  }, [businessUnitId]);

  // Si pas de Business Unit ID configuré, afficher un placeholder
  if (!businessUnitId) {
    return (
      <div className={`flex items-center justify-center bg-gray-100 rounded-xl p-8 ${className}`}>
        <div className="text-center space-y-3">
          <div className="text-gray-400">
            <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
          </div>
          <p className="text-gray-600 font-medium">Widget Trustpilot</p>
          <p className="text-sm text-gray-500">
            Configurez NEXT_PUBLIC_TRUSTPILOT_BUSINESS_UNIT_ID<br />
            dans votre fichier .env
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
      <div
        ref={trustboxRef}
        className="trustpilot-widget"
        data-locale="fr-FR"
        data-template-id={templateId}
        data-businessunit-id={businessUnitId}
        data-style-height={height}
        data-style-width={width}
        data-theme={theme}
        data-stars={stars}
        data-review-languages={reviewLanguages}
        data-text-color="#0b0b0c"
      >
        {/* Fallback content si le script ne charge pas */}
        <a
          href={`https://fr.trustpilot.com/review/${businessUnitId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Voir nos avis sur Trustpilot
        </a>
      </div>
    </div>
  );
}

// Type declarations pour TypeScript
declare global {
  interface Window {
    Trustpilot?: {
      loadFromElement: (element: HTMLElement, force?: boolean) => void;
    };
  }
}
