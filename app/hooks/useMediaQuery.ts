"use client";

import { useEffect, useState } from 'react';

/**
 * Hook pour détecter les breakpoints mobile
 *
 * Usage:
 * const isMobile = useMediaQuery('(max-width: 768px)');
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    // Éviter l'erreur SSR
    if (typeof window === 'undefined') return;

    const media = window.matchMedia(query);

    // Set initial value
    setMatches(media.matches);

    // Listener pour les changements
    const listener = (event: MediaQueryListEvent) => setMatches(event.matches);

    // Modern browsers
    if (media.addEventListener) {
      media.addEventListener('change', listener);
      return () => media.removeEventListener('change', listener);
    } else {
      // Fallback pour anciens navigateurs
      media.addListener(listener);
      return () => media.removeListener(listener);
    }
  }, [query]);

  return matches;
}

/**
 * Hook simplifié pour détecter mobile (<768px)
 */
export function useIsMobile(): boolean {
  return useMediaQuery('(max-width: 768px)');
}
