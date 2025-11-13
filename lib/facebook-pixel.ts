/**
 * Facebook Pixel tracking utilities
 * Pour utiliser : ajouter votre Pixel ID dans .env.local sous NEXT_PUBLIC_FB_PIXEL_ID
 */

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
    _fbq?: any;
  }
}

/**
 * Vérifie si l'utilisateur a donné son consentement pour les cookies marketing
 */
function hasMarketingConsent(): boolean {
  if (typeof window === 'undefined') return false;

  try {
    const consentData = localStorage.getItem("tanse-cookie-consent");
    if (!consentData) return false;

    const { type, preferences } = JSON.parse(consentData);
    // Facebook Pixel nécessite le consentement marketing
    return type === "all" || preferences?.marketing;
  } catch {
    return false;
  }
}

/**
 * Envoie un événement à Facebook Pixel
 */
export function fbTrackEvent(eventName: string, eventParams?: Record<string, any>) {
  // Vérifier le consentement
  if (!hasMarketingConsent()) {
    if (process.env.NODE_ENV === 'development') {
      console.log(`[FB Pixel] Event blocked (no consent): ${eventName}`, eventParams);
    }
    return;
  }

  // Vérifier que fbq est disponible
  if (typeof window === 'undefined' || !window.fbq) {
    if (process.env.NODE_ENV === 'development') {
      console.warn(`[FB Pixel] fbq not loaded: ${eventName}`, eventParams);
    }
    return;
  }

  try {
    window.fbq('track', eventName, eventParams);

    if (process.env.NODE_ENV === 'development') {
      console.log(`[FB Pixel] Event tracked: ${eventName}`, eventParams);
    }
  } catch (error) {
    console.error('[FB Pixel] Error tracking event:', error);
  }
}

/**
 * Envoie un événement custom à Facebook Pixel
 */
export function fbTrackCustomEvent(eventName: string, eventParams?: Record<string, any>) {
  // Vérifier le consentement
  if (!hasMarketingConsent()) {
    if (process.env.NODE_ENV === 'development') {
      console.log(`[FB Pixel] Custom event blocked: ${eventName}`, eventParams);
    }
    return;
  }

  if (typeof window === 'undefined' || !window.fbq) {
    if (process.env.NODE_ENV === 'development') {
      console.warn(`[FB Pixel] fbq not loaded for custom event: ${eventName}`, eventParams);
    }
    return;
  }

  try {
    window.fbq('trackCustom', eventName, eventParams);

    if (process.env.NODE_ENV === 'development') {
      console.log(`[FB Pixel] Custom event tracked: ${eventName}`, eventParams);
    }
  } catch (error) {
    console.error('[FB Pixel] Error tracking custom event:', error);
  }
}

/**
 * Événements personnalisés pour TANSE
 */

export const fbTrackFormStart = (formName: string) => {
  fbTrackCustomEvent('FormStart', {
    form_name: formName,
    timestamp: new Date().toISOString()
  });
};

export const fbTrackFormSubmit = (formName: string, success: boolean = true) => {
  if (success) {
    fbTrackEvent('Lead', {
      form_name: formName,
      content_name: formName,
      status: 'submitted'
    });
  }
  fbTrackCustomEvent('FormSubmit', {
    form_name: formName,
    success,
    timestamp: new Date().toISOString()
  });
};

export const fbTrackViewContent = (contentName: string, contentCategory?: string) => {
  fbTrackEvent('ViewContent', {
    content_name: contentName,
    content_category: contentCategory || 'landing_page'
  });
};

export const fbTrackCTAClick = (ctaName: string, ctaLocation?: string) => {
  fbTrackCustomEvent('CTAClick', {
    cta_name: ctaName,
    cta_location: ctaLocation || 'unknown',
    timestamp: new Date().toISOString()
  });
};

/**
 * Page View tracking (appelé automatiquement par le pixel normalement)
 */
export const fbTrackPageView = () => {
  if (!hasMarketingConsent()) return;

  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'PageView');
  }
};
