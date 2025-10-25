// app/components/ScrollToHash.tsx
"use client";

import { useEffect } from "react";

/**
 * OPTIMISÉ WINDOWS:
 * - Utilise smooth scroll optimisé au lieu de CSS scroll-behavior
 * - Meilleure performance sur Windows
 */
export default function ScrollToHash() {
  useEffect(() => {
    const go = () => {
      const hash = window.location.hash?.slice(1);
      if (!hash) return;
      const el = document.getElementById(hash);
      if (el) {
        // Smooth scroll optimisé
        const targetY = el.getBoundingClientRect().top + window.scrollY - 100;
        smoothScrollTo(targetY);
      }
    };

    // au chargement, puis si le hash change
    go();
    window.addEventListener("hashchange", go);
    return () => window.removeEventListener("hashchange", go);
  }, []);

  return null;
}

/**
 * Smooth scroll optimisé avec requestAnimationFrame
 */
function smoothScrollTo(targetY: number, duration: number = 600) {
  const startY = window.scrollY;
  const distance = targetY - startY;
  const startTime = performance.now();

  function scroll() {
    const currentTime = performance.now();
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);

    window.scrollTo(0, startY + distance * ease);

    if (progress < 1) {
      requestAnimationFrame(scroll);
    }
  }

  requestAnimationFrame(scroll);
}
