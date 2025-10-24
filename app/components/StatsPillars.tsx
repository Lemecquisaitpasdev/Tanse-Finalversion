"use client";

import { useEffect, useRef, useState } from "react";

type Bar = { label: string; value: number; hint?: string };

const DATA: Bar[] = [
  { label: "Acheteurs auto recherchent en ligne", value: 90 },
  { label: "Avant un entretien, consultent Internet", value: 65 },
  { label: "Clics captés par le Local Pack", value: 42 },
  { label: "Recherche locale → appel/visite jour-même", value: 88 },
  { label: "Mobiles dans les recherches auto", value: 60, hint: "60+%" },
  { label: "Clics concentrés page 1 Google", value: 91 },
];

export default function StatsPillars() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="chiffres" className="relative bg-[#E4E4E4]" ref={sectionRef}>
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-16 py-24 md:py-28">
        <header className="text-center mb-12 md:mb-14">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold">
            Les chiffres le prouvent.
          </h2>
          <p className="mt-3 text-neutral-600">
            Vos clients vous cherchent en ligne. Si vous n'êtes pas visible, ils
            choisissent le concurrent suivant.
          </p>
        </header>

        <div className="rounded-3xl bg-white shadow-[0_10px_60px_-20px_rgba(0,0,0,.2)] ring-1 ring-black/5 px-6 md:px-10 py-10 md:py-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 items-end">
            {DATA.map((b, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-[72px] md:w-[88px] lg:w-[96px]">
                  <div className="h-[260px] md:h-[300px] lg:h-[340px] bg-neutral-100 rounded-2xl relative overflow-hidden">
                    <div
                      className="absolute inset-x-0 bottom-0 rounded-t-2xl liquid-fill"
                      style={{
                        height: isVisible ? `${b.value}%` : "0%",
                        background:
                          "linear-gradient(180deg,#e7e7ff 0%,#4a4570 100%)",
                        transition: `height 1.2s cubic-bezier(0.65, 0, 0.35, 1) ${i * 0.15}s`,
                      }}
                      title={`${b.label} : ${b.hint ?? b.value + "%"}`}
                    >
                      {/* Liquid wave effect at the top */}
                      <div
                        className="absolute inset-x-0 top-0 h-3"
                        style={{
                          background: "inherit",
                          filter: "blur(2px)",
                          opacity: 0.6,
                          animation: isVisible ? "wave 2s ease-in-out infinite" : "none",
                          animationDelay: `${i * 0.15}s`,
                        }}
                      />
                    </div>
                    <div
                      className="absolute top-2 left-1/2 -translate-x-1/2 text-[11px] font-medium bg-white/90 px-2 py-0.5 rounded-full shadow-sm transition-opacity duration-500"
                      style={{
                        opacity: isVisible ? 1 : 0,
                        transitionDelay: `${i * 0.15 + 0.6}s`,
                      }}
                    >
                      {b.hint ?? `${b.value}%`}
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-xs md:text-[13px] text-center text-neutral-600 max-w-[160px]">
                  {b.label}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-10 text-center text-sm text-neutral-600">
            Notre job : vous placer dans le Top local, structurer vos infos pour
            l'IA, et transformer cette visibilité en appels &amp; RDV.
          </p>

          <div className="mt-6 flex items-center justify-center gap-3">
            <a
              href="/forfaits"
              className="inline-flex h-10 items-center rounded-full px-5 text-sm font-medium text-white bg-[#3d3a66]"
            >
              Voir les forfaits
            </a>
            <a
              href="#faq"
              className="inline-flex h-10 items-center rounded-full px-4 text-sm font-medium bg-neutral-100 hover:bg-neutral-200"
            >
              FAQ
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes wave {
          0%, 100% {
            transform: translateY(0) scaleY(1);
          }
          50% {
            transform: translateY(-2px) scaleY(1.1);
          }
        }
      `}</style>
    </section>
  );
}
