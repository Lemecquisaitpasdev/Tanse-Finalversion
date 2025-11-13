"use client";

import { useEffect } from 'react';
import Script from 'next/script';

/**
 * Composant Facebook Pixel
 * Charge le pixel Facebook uniquement si l'utilisateur a donné son consentement marketing
 * Respecte le RGPD
 *
 * IMPORTANT: Pour activer, ajoutez votre Pixel ID dans .env.local :
 * NEXT_PUBLIC_FB_PIXEL_ID=votre_pixel_id_ici
 */
export default function FacebookPixel() {
  const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID;

  useEffect(() => {
    // Vérifier le consentement marketing
    const checkAndInitPixel = () => {
      if (typeof window === 'undefined' || !FB_PIXEL_ID) return;

      try {
        const consentData = localStorage.getItem("tanse-cookie-consent");
        if (!consentData) return;

        const { type, preferences } = JSON.parse(consentData);
        const hasConsent = type === "all" || preferences?.marketing;

        // Si consentement donné et pixel chargé, initialiser
        if (hasConsent && window.fbq) {
          window.fbq('init', FB_PIXEL_ID);
          window.fbq('track', 'PageView');
          console.log('[FB Pixel] Initialized with ID:', FB_PIXEL_ID);
        }
      } catch (error) {
        console.error('[FB Pixel] Error initializing:', error);
      }
    };

    // Vérifier au chargement
    checkAndInitPixel();

    // Écouter l'événement de consentement
    const handleConsent = () => checkAndInitPixel();
    window.addEventListener('cookiesAccepted', handleConsent);

    return () => {
      window.removeEventListener('cookiesAccepted', handleConsent);
    };
  }, [FB_PIXEL_ID]);

  // Vérifier si le consentement marketing est donné
  const hasMarketingConsent = () => {
    if (typeof window === 'undefined') return false;

    try {
      const consentData = localStorage.getItem("tanse-cookie-consent");
      if (!consentData) return false;

      const { type, preferences } = JSON.parse(consentData);
      return type === "all" || preferences?.marketing;
    } catch {
      return false;
    }
  };

  // Ne pas charger le pixel si :
  // - Pas de Pixel ID configuré
  // - Pas de consentement marketing
  if (!FB_PIXEL_ID || !hasMarketingConsent()) {
    return null;
  }

  return (
    <>
      {/* Facebook Pixel Code */}
      <Script
        id="fb-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${FB_PIXEL_ID}');
            fbq('track', 'PageView');
          `,
        }}
      />
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
    </>
  );
}
