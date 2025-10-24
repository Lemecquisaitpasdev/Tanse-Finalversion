"use client";

import { useEffect, useState } from "react";

type Props = {
  targetId?: string;
  className?: string;
};

export default function ScrollToNextSection({ targetId, className = "" }: Props) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Cache le bouton si on est proche du bas de la page
      const scrolledToBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;
      setIsVisible(!scrolledToBottom);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToNext = () => {
    if (targetId) {
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }

    // Si pas de targetId, scroll d'une hauteur d'écran
    window.scrollBy({
      top: window.innerHeight * 0.9,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToNext}
      className={`group fixed bottom-8 right-8 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-[#444684] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl md:h-14 md:w-14 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      } ${className}`}
      aria-label="Aller à la section suivante"
    >
      <svg
        className="h-6 w-6 transition-transform group-hover:translate-y-1"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2.5}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>

      {/* Ripple effect on hover */}
      <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 group-hover:animate-ping" />
    </button>
  );
}
