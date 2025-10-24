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
    const OFFSET_TOP = 230; // Espace au-dessus du titre pour centrer la section

    if (targetId) {
      const target = document.getElementById(targetId);
      if (target) {
        // Cherche le titre (h1 ou h2) dans la section cible
        const heading = target.querySelector('h1, h2');
        const elementToScroll = heading || target;

        const elementTop = elementToScroll.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: elementTop - OFFSET_TOP,
          behavior: "smooth",
        });
        return;
      }
    }

    // Trouver automatiquement la prochaine section visible
    const currentScroll = window.scrollY + window.innerHeight / 3;
    const sections = document.querySelectorAll('section[id]');

    for (let i = 0; i < sections.length; i++) {
      const section = sections[i] as HTMLElement;
      const sectionTop = section.offsetTop;

      if (sectionTop > currentScroll) {
        // Scroll vers le titre de la section (h1 ou h2)
        const heading = section.querySelector('h1, h2');
        const elementToScroll = heading || section;

        const elementTop = elementToScroll.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: elementTop - OFFSET_TOP,
          behavior: "smooth",
        });
        return;
      }
    }

    // Si aucune section trouvée, scroll d'une hauteur d'écran
    window.scrollBy({
      top: window.innerHeight * 0.9,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToNext}
      className={`group fixed bottom-8 right-8 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-[#444684] text-white shadow-lg transition-all duration-200 hover:scale-110 hover:shadow-2xl hover:-translate-y-1 active:scale-95 active:shadow-md md:h-14 md:w-14 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      } ${className}`}
      style={{ transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)' }}
      aria-label="Aller à la section suivante"
    >
      <svg
        className="h-6 w-6 transition-all duration-200 group-hover:translate-y-1 group-active:translate-y-0"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2.5}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>

      {/* Ripple effect on hover - Plus rapide et nerveux */}
      <div className="absolute inset-0 rounded-full bg-white/25 opacity-0 group-hover:opacity-100 transition-opacity duration-150" style={{ animation: 'ping 0.8s cubic-bezier(0, 0, 0.2, 1) infinite' }} />
    </button>
  );
}
