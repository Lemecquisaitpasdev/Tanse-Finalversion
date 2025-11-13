/**
 * Google Analytics 4 tracking utilities
 * Respecte le consentement RGPD - n'envoie les événements que si le consentement est donné
 */

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

/**
 * Vérifie si l'utilisateur a donné son consentement pour les analytics
 */
function hasAnalyticsConsent(): boolean {
  if (typeof window === 'undefined') return false;

  try {
    const consentData = localStorage.getItem("tanse-cookie-consent");
    if (!consentData) return false;

    const { type, preferences } = JSON.parse(consentData);
    return type === "all" || preferences?.analytics;
  } catch {
    return false;
  }
}

/**
 * Envoie un événement à Google Analytics 4
 * @param eventName - Nom de l'événement
 * @param eventParams - Paramètres additionnels de l'événement
 */
export function trackEvent(eventName: string, eventParams?: Record<string, any>) {
  // Vérifier le consentement
  if (!hasAnalyticsConsent()) {
    if (process.env.NODE_ENV === 'development') {
      console.log(`[GA4] Event blocked (no consent): ${eventName}`, eventParams);
    }
    return;
  }

  // Vérifier que gtag est disponible
  if (typeof window === 'undefined' || !window.gtag) {
    if (process.env.NODE_ENV === 'development') {
      console.warn(`[GA4] gtag not loaded: ${eventName}`, eventParams);
    }
    return;
  }

  try {
    window.gtag('event', eventName, eventParams);

    if (process.env.NODE_ENV === 'development') {
      console.log(`[GA4] Event tracked: ${eventName}`, eventParams);
    }
  } catch (error) {
    console.error('[GA4] Error tracking event:', error);
  }
}

/**
 * Événements personnalisés pour TANSE
 */

export const trackFormStart = (formName: string) => {
  trackEvent('form_start', {
    form_name: formName,
    timestamp: new Date().toISOString()
  });
};

export const trackFormSubmit = (formName: string, success: boolean = true) => {
  trackEvent('form_submit', {
    form_name: formName,
    success,
    timestamp: new Date().toISOString()
  });
};

export const trackCTAClick = (ctaName: string, ctaLocation?: string) => {
  trackEvent('cta_click', {
    cta_name: ctaName,
    cta_location: ctaLocation || 'unknown',
    timestamp: new Date().toISOString()
  });
};

export const trackFAQOpen = (question: string, questionIndex: number) => {
  trackEvent('faq_open', {
    question,
    question_index: questionIndex,
    timestamp: new Date().toISOString()
  });
};

export const trackTrustpilotClick = (linkLocation: string) => {
  trackEvent('trustpilot_link_click', {
    link_location: linkLocation,
    timestamp: new Date().toISOString()
  });
};

/**
 * Track page view (appelé automatiquement par GA4 normalement)
 */
export const trackPageView = (pagePath: string, pageTitle: string) => {
  trackEvent('page_view', {
    page_path: pagePath,
    page_title: pageTitle
  });
};

/**
 * Initialize GA4 with consent
 * À appeler au chargement de l'app si le consentement est donné
 */
export function initializeGA4(measurementId: string) {
  if (typeof window === 'undefined') return;

  // Check if already initialized
  if (window.gtag) {
    console.log('[GA4] Already initialized');
    return;
  }

  // Créer dataLayer si n'existe pas
  window.dataLayer = window.dataLayer || [];

  // Définir gtag
  window.gtag = function gtag() {
    window.dataLayer!.push(arguments);
  };

  // Initialize with timestamp
  window.gtag('js', new Date());

  // Configure with measurement ID
  window.gtag('config', measurementId, {
    send_page_view: true,
    anonymize_ip: true // RGPD compliance
  });

  console.log('[GA4] Initialized with ID:', measurementId);
}
