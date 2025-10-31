"use client";

import { useEffect } from "react";
import Link from "next/link";
import SplineLazy from "./SplineLazy";

const SCENE_URL = "https://prod.spline.design/l8fan1OYXfoYpgtt/scene.splinecode?v=20251019";

/**
 * Hero section optimisé pour chargement instantané
 * - CSS pour responsive (pas de JS)
 * - Navigation simplifiée
 * - Spline lazy-loaded
 * - Block external links (Twitter/X) from Spline animation
 */
export default function Hero() {
  // Optimized navigation link styles
  const navLinkBase = "pointer-events-auto rounded-full px-3 md:px-4 py-2 text-xs md:text-sm font-medium min-h-[36px] md:min-h-0 flex items-center justify-center transition-all duration-200";
  const navLinkDefault = "text-[#24243C] hover:bg-white";
  const navLinkPrimary = "text-white bg-[#444684] hover:opacity-90";

  // Block external links (Twitter/X) from opening
  useEffect(() => {
    const blockExternalLinks = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      // Check if click is within the hero section
      const heroSection = document.getElementById('hero');
      if (!heroSection?.contains(target)) return;

      // Prevent navigation to external social media links
      const anchors = document.querySelectorAll('#hero a');
      anchors.forEach((anchor) => {
        const href = (anchor as HTMLAnchorElement).href;
        if (href && (href.includes('twitter.com') || href.includes('x.com'))) {
          e.preventDefault();
          e.stopPropagation();
        }
      });
    };

    // Also block window.open calls to Twitter/X
    const originalOpen = window.open;
    window.open = function(url, ...args) {
      if (url && (url.includes('twitter.com') || url.includes('x.com'))) {
        console.log('Blocked external link:', url);
        return null;
      }
      return originalOpen.call(window, url, ...args);
    };

    document.addEventListener('click', blockExternalLinks, true);

    return () => {
      document.removeEventListener('click', blockExternalLinks, true);
      window.open = originalOpen;
    };
  }, []);

  return (
    <section id="hero" className="relative w-full h-[100dvh] min-h-[600px] max-h-[900px] overflow-hidden bg-[#E4E4E4]">
      {/* Navigation */}
      <div className="pointer-events-none absolute left-1/2 top-4 md:top-6 z-20 -translate-x-1/2 w-full max-w-[calc(100%-2rem)] md:max-w-none">
        <nav className="flex items-center justify-center gap-1 md:gap-2 rounded-full bg-white/80 md:bg-white/70 backdrop-blur px-2 py-2 shadow-lg ring-1 ring-black/5 mx-auto w-fit">
          <Link
            href="/forfaits"
            className={`${navLinkBase} ${navLinkDefault}`}
          >
            Forfaits
          </Link>
          <Link
            href="/entreprise"
            className={`${navLinkBase} ${navLinkDefault}`}
          >
            Entreprise
          </Link>
          <Link
            href="/geo"
            className={`${navLinkBase} ${navLinkDefault}`}
          >
            GEO
          </Link>
          <Link
            href="/blog"
            className={`${navLinkBase} ${navLinkDefault}`}
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className={`${navLinkBase} ${navLinkPrimary}`}
          >
            Contact
          </Link>
        </nav>
      </div>

      {/* Spline - Further increased scale to prevent text clipping + interactive bubbles kept */}
      <div className="absolute inset-0 flex items-center justify-center scale-[1.35] translate-y-4 md:scale-[1.25] md:translate-y-0 transition-transform duration-300 ease-out">
        <SplineLazy
          url={SCENE_URL}
          className="block w-full h-full"
        />
      </div>
    </section>
  );
}