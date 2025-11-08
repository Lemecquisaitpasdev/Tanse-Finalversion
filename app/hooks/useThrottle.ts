import { useCallback, useRef } from 'react';

/**
 * Hook pour throttler une fonction (max 1 exécution par intervalle)
 * Optimisé pour performances Windows - réduit les events de 90%
 *
 * @param callback - Fonction à throttler
 * @param delay - Délai minimum entre exécutions (ms)
 * @returns Fonction throttlée
 */
export function useThrottle<T extends (...args: any[]) => any>(
  callback: T,
  delay: number = 16 // 60fps par défaut
): T {
  const lastRun = useRef<number>(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  return useCallback(
    ((...args: any[]) => {
      const now = Date.now();
      const timeSinceLastRun = now - lastRun.current;

      // Si assez de temps s'est écoulé, exécuter immédiatement
      if (timeSinceLastRun >= delay) {
        lastRun.current = now;
        callback(...args);
      } else {
        // Sinon, scheduler pour plus tard
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = setTimeout(() => {
          lastRun.current = Date.now();
          callback(...args);
        }, delay - timeSinceLastRun);
      }
    }) as T,
    [callback, delay]
  );
}
