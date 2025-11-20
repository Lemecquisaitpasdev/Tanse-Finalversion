/**
 * Détecte si le visiteur actuel est un bot (crawler SEO, bot IA, etc.)
 * Utilisé pour désactiver les modales et popups qui bloquent le crawl
 */
export function isBot(): boolean {
  if (typeof window === "undefined") return false;

  const userAgent = navigator.userAgent.toLowerCase();

  // Liste des bots à détecter (SEO crawlers + IA bots)
  const botPatterns = [
    // Crawlers moteurs de recherche
    'googlebot',
    'bingbot',
    'slurp', // Yahoo
    'duckduckbot',
    'baiduspider',
    'yandexbot',
    'sogou',
    'exabot',
    'ia_archiver', // Alexa

    // Bots sociaux
    'facebot',
    'facebookexternalhit',
    'twitterbot',
    'linkedinbot',
    'whatsapp',
    'telegram',
    'slackbot',
    'discordbot',

    // Bots IA génératives (critiques pour le GEO)
    'gptbot', // OpenAI
    'chatgpt',
    'chatgpt-user',
    'claudebot', // Anthropic
    'claude-web',
    'perplexitybot', // Perplexity
    'anthropic-ai',
    'google-extended', // Google Bard/Gemini

    // Autres crawlers et outils
    'crawler',
    'spider',
    'bot',
    'scraper',
    'http',
    'curl',
    'wget',
    'python-requests',
    'node-fetch',
    'axios'
  ];

  return botPatterns.some(pattern => userAgent.includes(pattern));
}

/**
 * Détecte si le visiteur est un bot headless (sans interaction UI)
 * Utile pour détecter des scrapers plus sophistiqués
 */
export function isHeadlessBrowser(): boolean {
  if (typeof window === "undefined") return false;

  // Détection de navigateurs headless (Puppeteer, Playwright, etc.)
  return (
    // @ts-ignore
    window.navigator.webdriver === true ||
    // @ts-ignore
    window.__nightmare !== undefined ||
    // @ts-ignore
    window._phantom !== undefined ||
    // @ts-ignore
    window.callPhantom !== undefined
  );
}

/**
 * Détecte si le visiteur doit être traité comme un bot
 * (combine détection user-agent + headless browser)
 */
export function shouldTreatAsBot(): boolean {
  return isBot() || isHeadlessBrowser();
}
