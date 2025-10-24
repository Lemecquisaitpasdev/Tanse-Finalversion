"use client";

import { useState, useEffect } from "react";

/**
 * Hook SSR-safe pour détecter si on est sur mobile (≤768px)
 * Retourne null pendant le SSR pour éviter les hydration mismatches
 */
export function useIsMobile(): boolean | null {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    // Vérifie immédiatement au montage
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    // Écoute les changements
    const handleChange = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return isMobile;
}
