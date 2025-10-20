"use client";

import Image from "next/image";
import SectionFrame from "./SectionFrame";

type T = { name: string; handle: string; text: string; initials: string };

/* ------------------------------------------------------------------ */
/* Données                                                             */
/* ------------------------------------------------------------------ */
const ROW1: T[] = [
  { name: "Ariel MI", handle: "@arielmi", text: "Site clair et rapide : taux de RDV en hausse.", initials: "AM" },
  { name: "Hasan Toor", handle: "@hasantoxr", text: "Plus d’appels, sans pub. Le local bien fait change tout.", initials: "HT" },
  { name: "Maria Martin", handle: "@marias_martin", text: "Fiche Google débloquée. +30 % d’essais en 90 jours.", initials: "MM" },
  { name: "Gleb Konon", handle: "@glebkonon", text: "La méthode GEO apporte des prospects très chauds.", initials: "GK" },
];

const ROW2: T[] = [
  { name: "Richard Manisa", handle: "@rmanisa", text: "Local + pages services : visibilité réelle sur Maps.", initials: "RM" },
  { name: "Anaïs Dupre", handle: "@anais_auto", text: "+22 % de demandes de devis carrosserie en 3 mois.", initials: "AD" },
  { name: "Eran Cohen", handle: "@erancohen", text: "Reporting simple. Les positions montent, les appels suivent.", initials: "EC" },
  { name: "Thatweb3guy", handle: "@myfootyfantasy", text: "On gère mieux les avis : la note grimpe → plus de visites.", initials: "TW" },
];

/* ------------------------------------------------------------------ */
/* Avatars (chemins dans /public/trust/)                              */
/* NB: utilise exactement les noms présents dans ton dossier           */
/* ------------------------------------------------------------------ */
const AVATARS: Record<string, string> = {
  "Ariel MI": "/trust/danny-postma-zNxOw2JFNKs-unsplash.jpg",
  "Hasan Toor": "/trust/greg-edwards-oz2wj86hGxA-unsplash.jpg",
  "Maria Martin": "/trust/woman-7895953_1280.jpg",
  "Gleb Konon": "/trust/linkedin-sales-solutions-pAtA8xe_iVM-unsplash.jpg",
  "Richard Manisa": "/trust/man-7450033_1280.jpg",

  // ← Tes ajouts
  "Anaïs Dupre": "/trust/clay-elliot-mpDV4xaFP8c-unsplash",
  "Eran Cohen": "/trust/the-connected-narrative-N8lRH2uxih4-unsplash.jpg",
  "Thatweb3guy": "/trust/brad-hanks-VR3nXEIfBzs-unsplash.jpg",
};

/* ------------------------------------------------------------------ */

function Card({ t }: { t: T }) {
  const src = AVATARS[t.name];

  return (
    <div className="min-w-[520px] max-w-[520px] rounded-3xl border border-[#444684]/22 bg-white/98 p-7 ring-1 ring-[#444684]/22 shadow-[0_22px_56px_-20px_rgba(68,70,132,0.35)] hover:ring-[#444684]/40 transition-shadow">
      <p className="text-[18px] leading-[1.6] text-neutral-900 whitespace-normal break-words">
        {t.text}
      </p>

      <div className="mt-5 flex items-center gap-3">
        {src ? (
          <Image
            src={src}
            alt={t.name}
            width={44}
            height={44}
            className="h-11 w-11 rounded-full object-cover ring-1 ring-black/5"
            loading="lazy"
          />
        ) : (
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#444684]/10 text-[12px] font-semibold text-[#444684]">
            {t.initials}
          </div>
        )}

        <div className="text-[15px]">
          <div className="font-medium text-neutral-900">{t.name}</div>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsMarquee() {
  return (
    <SectionFrame id="temoignages">
      <section className="relative h-full w-full overflow-hidden bg-[var(--bg)]">
        {/* Dégradé violet discret sur les côtés */}
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(90deg, rgba(68,70,132,0.12) 0%, rgba(68,70,132,0.07) 10%, var(--bg) 30%, var(--bg) 70%, rgba(68,70,132,0.07) 90%, rgba(68,70,132,0.12) 100%)",
          }}
        />

        {/* Fades bords */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-20 w-24 md:w-[16vw]"
          style={{ backgroundImage: "linear-gradient(to right, var(--bg), color-mix(in srgb, var(--bg) 70%, transparent), transparent)" }}
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-20 w-24 md:w-[16vw]"
          style={{ backgroundImage: "linear-gradient(to left, var(--bg), color-mix(in srgb, var(--bg) 70%, transparent), transparent)" }}
        />

        <div className="mx-auto mt-6 w-full max-w-[2100px] px-12">
          <div className="mb-10 text-center">
            <h2 className="text-6xl font-semibold">« Les résultats parlent d’eux-mêmes. »</h2>
            <p className="mx-auto mt-4 max-w-3xl text-xl text-neutral-700">
              Ce que nos clients constatent au quotidien.
            </p>
            <a
              href="/forfaits"
              className="mt-7 inline-flex h-12 items-center justify-center rounded-full bg-[#444684] px-6 text-[15px] font-medium text-white shadow-sm hover:shadow-lg"
            >
              Commencer
            </a>
          </div>
        </div>

        {/* Rangée 1 */}
        <div className="relative mb-8 overflow-hidden">
          <div className="marquee will-change-transform">
            {[...ROW1, ...ROW1].map((t, i) => (
              <div key={`r1-${i}`} className="mx-5 inline-block">
                <Card t={t} />
              </div>
            ))}
          </div>
        </div>

        {/* Rangée 2 */}
        <div className="relative overflow-hidden">
          <div className="marquee reverse will-change-transform">
            {[...ROW2, ...ROW2].map((t, i) => (
              <div key={`r2-${i}`} className="mx-5 inline-block">
                <Card t={t} />
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          .marquee {
            display: inline-block;
            white-space: nowrap;
            animation: marquee 34s linear infinite;
          }
          .marquee:hover { animation-play-state: paused; }
          .marquee.reverse { animation: marqueeReverse 38s linear infinite; }
          .marquee.reverse:hover { animation-play-state: paused; }

          @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
          @keyframes marqueeReverse { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
        `}</style>
      </section>
    </SectionFrame>
  );
}