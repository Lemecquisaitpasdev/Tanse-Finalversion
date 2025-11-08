import { useCallback, useRef } from 'react';

/**
 * Hook pour debouncer une fonction (attend la fin des appels)
 * Optimisé pour resize events sur Windows
 *
 * @param callback - Fonction à debouncer
 * @param delay - Délai d'attente après le dernier appel (ms)
 * @returns Fonction debouncée
 */
export function useDebounce<T extends (...args: any[]) => any>(
  callback: T,
  delay: number = 150
): T {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  return useCallback(
    ((...args: any[]) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        callback(...args);
      }, delay);
    }) as T,
    [callback, delay]
  );
}
