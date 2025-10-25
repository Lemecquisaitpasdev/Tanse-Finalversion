"use client";

import { useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

/**
 * Wrapper pour Vercel Analytics qui respecte le consentement cookies RGPD
 * N'active les analytics que si l'utilisateur a donné son consentement
 */
export default function AnalyticsWrapper() {
  useEffect(() => {
    // Vérifier le consentement stocké au chargement
    const checkConsent = () => {
      const consentData = localStorage.getItem("tanse-cookie-consent");

      if (consentData) {
        try {
          const { type, preferences } = JSON.parse(consentData);

          // Si l'utilisateur a accepté tous les cookies ou les analytics
          if (type === "all" || preferences?.analytics) {
            // Analytics déjà chargé via le composant, juste tracker l'événement
            if (typeof window.va !== 'undefined') {
              window.va('track', 'Page View with Analytics Consent');
            }
          }
        } catch (e) {
          console.error("Erreur parsing cookie consent:", e);
        }
      }
    };

    // Vérifier au chargement
    checkConsent();

    // Écouter l'événement de consentement
    const handleCookiesAccepted = () => {
      checkConsent();

      // Tracker l'acceptation des cookies
      if (typeof window.va !== 'undefined') {
        window.va('track', 'Cookie Consent Accepted');
      }
    };

    window.addEventListener('cookiesAccepted', handleCookiesAccepted);

    return () => {
      window.removeEventListener('cookiesAccepted', handleCookiesAccepted);
    };
  }, []);

  // Vérifier si le consentement existe déjà
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

  return (
    <>
      {/* Analytics activé seulement si consentement donné */}
      <Analytics mode={hasConsent() ? 'auto' : 'production'} />

      {/* Speed Insights toujours activé (considéré comme essentiel) */}
      <SpeedInsights />
    </>
  );
}
