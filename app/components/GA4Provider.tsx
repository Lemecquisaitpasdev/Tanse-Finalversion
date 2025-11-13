"use client";

import { useEffect } from 'react';
import Script from 'next/script';
import { initializeGA4 } from '@/lib/analytics';

/**
 * Provider Google Analytics 4
 * Charge le script GA4 uniquement si l'utilisateur a donné son consentement
 * Respecte le RGPD
 */
export default function GA4Provider() {
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  useEffect(() => {
    // Vérifier le consentement
    const checkAndInitGA = () => {
      if (typeof window === 'undefined' || !GA_MEASUREMENT_ID) return;

      try {
        const consentData = localStorage.getItem("tanse-cookie-consent");
        if (!consentData) return;

        const { type, preferences } = JSON.parse(consentData);
        const hasConsent = type === "all" || preferences?.analytics;

        if (hasConsent && window.gtag) {
          initializeGA4(GA_MEASUREMENT_ID);
        }
      } catch (error) {
        console.error('[GA4] Error initializing:', error);
      }
    };

    // Vérifier au chargement
    checkAndInitGA();

    // Écouter l'événement de consentement
    const handleConsent = () => checkAndInitGA();
    window.addEventListener('cookiesAccepted', handleConsent);

    return () => {
      window.removeEventListener('cookiesAccepted', handleConsent);
    };
  }, [GA_MEASUREMENT_ID]);

  // Ne charger le script que si le consentement est déjà donné
  const hasConsent = () => {
    if (typeof window === 'undefined') return false;

    try {
      const consentData = localStorage.getItem("tanse-cookie-consent");
      if (!consentData) return false;

      const { type, preferences } = JSON.parse(consentData);
      return type === "all" || preferences?.analytics;
    } catch {
      return false;
    }
  };

  // Ne pas charger le script si pas de measurement ID ou pas de consentement
  if (!GA_MEASUREMENT_ID || !hasConsent()) {
    return null;
  }

  return (
    <>
      {/* Google tag (gtag.js) */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
              send_page_view: true,
              anonymize_ip: true
            });
          `,
        }}
      />
    </>
  );
}
