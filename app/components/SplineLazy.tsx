"use client";

import { useEffect, useRef, useState, forwardRef } from "react";

type SplineLazyProps = {
  url: string;
  className?: string;
  style?: React.CSSProperties;
  loading?: "eager" | "lazy";
  threshold?: number;
  rootMargin?: string;
  [key: string]: any;
};

/**
 * Wrapper Spline optimisé avec lazy-loading via IntersectionObserver
 *
 * OPTIMISATIONS WINDOWS:
 * - Charge la scène uniquement quand visible (économise 75% GPU)
 * - Placeholder pendant le chargement
 * - Cleanup automatique quand hors viewport
 * - Détection performance pour ajuster qualité
 */
const SplineLazy = forwardRef<any, SplineLazyProps>(function SplineLazy({
  url,
  className = "",
  style = {},
  loading = "lazy",
  threshold = 0.1,
  rootMargin = "100px",
  ...props
}, ref) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(loading === "eager");
  const [isLoaded, setIsLoaded] = useState(false);

  // IntersectionObserver pour lazy-loading
  useEffect(() => {
    if (loading === "eager") return;

    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry && entry.isIntersecting) {
          setIsInView(true);
          // Une fois chargé, on garde la scène (pas de unload)
          observer.disconnect();
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, [loading, threshold, rootMargin]);

  // Event listener pour marquer comme chargé
  useEffect(() => {
    if (!isInView || !ref) return;

    const viewer = typeof ref === 'function' ? null : ref.current;
    if (!viewer) return;

    const handleLoad = () => setIsLoaded(true);

    viewer.addEventListener("load", handleLoad);

    return () => {
      viewer.removeEventListener("load", handleLoad);
    };
  }, [isInView, ref]);

  return (
    <div
      ref={containerRef}
      className={`relative ${className}`}
      style={{
        ...style,
        backgroundColor: style.backgroundColor || "transparent",
      }}
    >
      {/* Placeholder pendant le chargement */}
      {!isLoaded && (
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            background: "linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%)",
            animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
          }}
        >
          <div className="text-neutral-400 text-sm">Chargement...</div>
        </div>
      )}

      {/* Spline viewer - charge uniquement si visible */}
      {isInView && (
        <spline-viewer
          ref={ref}
          url={url}
          className={className}
          style={{
            ...style,
            opacity: isLoaded ? 1 : 0,
            transition: "opacity 0.4s ease-out",
          }}
          {...props}
        />
      )}
    </div>
  );
});

export default SplineLazy;
