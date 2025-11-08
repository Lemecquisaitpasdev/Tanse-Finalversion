"use client";

import { useEffect, useRef } from "react";
import SectionFrame from "./SectionFrame";
import Script from "next/script";

/**
 * Composant d'intégration Trustpilot avec widget TrustBox officiel
 * Les avis sont automatiquement synchronisés depuis Trustpilot
 * Chaque avis est cliquable et redirige vers la page Trustpilot
 */
export default function TestimonialsMarquee() {
  const trustboxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Charger le widget Trustpilot quand le composant est monté
    if (window.Trustpilot) {
      window.Trustpilot.loadFromElement(trustboxRef.current, true);
    }
  }, []);

  return (
    <>
      {/* Script Trustpilot - chargé une seule fois */}
      <Script
        src="https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
        strategy="lazyOnload"
        onLoad={() => {
          // Charger le widget après que le script soit chargé
          if (trustboxRef.current && window.Trustpilot) {
            window.Trustpilot.loadFromElement(trustboxRef.current, true);
          }
        }}
      />

      <SectionFrame id="temoignages">
        <section className="relative h-full w-full bg-[var(--bg)] py-16 md:py-20">
          {/* Header personnalisé TANSE */}
          <div className="mx-auto w-full max-w-7xl px-6 md:px-12">
            <div className="mb-12 md:mb-16 text-center">
              <p className="text-xs tracking-[0.25em] uppercase text-[#444684] mb-4 font-semibold">
                TÉMOIGNAGES CLIENTS
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
                Nos clients génèrent des résultats
                <br className="hidden md:block" />
                <span className="text-[#444684]"> mesurables et durables</span>
              </h2>
              <p className="mx-auto mt-5 max-w-3xl text-base md:text-lg text-neutral-700 leading-relaxed">
                De la TPE au grand groupe, nos clients constatent une augmentation
                significative de leur visibilité locale, de leurs appels et de leurs
                conversions.
              </p>

              {/* CTA Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href="/forfaits-geo-seo"
                  className="inline-flex w-full sm:w-auto h-12 items-center justify-center rounded-full bg-[#444684] px-7 text-sm md:text-base font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 hover:opacity-95 focus-visible:outline-2 focus-visible:outline-[#444684] focus-visible:outline-offset-2 touch-manipulation min-h-[44px]"
                >
                  Découvrir nos forfaits
                </a>
                <a
                  href="/contact-audit-gratuit"
                  className="inline-flex w-full sm:w-auto h-12 items-center justify-center rounded-full border border-[#444684]/30 bg-white px-7 text-sm md:text-base font-medium text-[#444684] hover:bg-[#444684]/5 transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-[#444684] focus-visible:outline-offset-2 touch-manipulation min-h-[44px]"
                >
                  Demander un audit
                </a>
              </div>
            </div>
          </div>

          {/* Widget Trustpilot TrustBox - Carousel */}
          <div className="mx-auto w-full max-w-7xl px-6 md:px-12">
            <div
              ref={trustboxRef}
              className="trustpilot-widget"
              data-locale="fr-FR"
              data-template-id="53aa8912dec7e10d38f59f36"
              data-businessunit-id="675c07a7f40e16c45da82764"
              data-style-height="240px"
              data-style-width="100%"
              data-theme="light"
              data-stars="4,5"
              data-review-languages="fr"
              data-font-family="inherit"
              data-text-color="#0b0b0c"
            >
              <a
                href="https://fr.trustpilot.com/review/tanse.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#444684] hover:underline"
              >
                Trustpilot
              </a>
            </div>

            {/* Lien vers Trustpilot */}
            <div className="mt-8 text-center">
              <a
                href="https://fr.trustpilot.com/review/tanse.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-neutral-600 hover:text-[#444684] transition-colors"
              >
                <span>Voir tous nos avis sur Trustpilot</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </SectionFrame>
    </>
  );
}

// Déclaration TypeScript pour le widget Trustpilot
declare global {
  interface Window {
    Trustpilot?: {
      loadFromElement: (element: HTMLElement | null, refresh?: boolean) => void;
    };
  }
}
