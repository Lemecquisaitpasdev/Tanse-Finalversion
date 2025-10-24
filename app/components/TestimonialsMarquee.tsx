"use client";

import Image from "next/image";
import SectionFrame from "./SectionFrame";

type T = { name: string; handle: string; text: string; initials: string };

/* ------------------------------------------------------------------ */
/* Données                                                             */
/* ------------------------------------------------------------------ */
const ROW1: T[] = [
  { name: "Ariel Martinez", handle: "@arielmi", text: "Depuis que TANSE a restructuré notre présence locale, notre site convertit mieux et nos prises de rendez-vous ont augmenté de 40% en 4 mois. Le travail sur les fiches Google et l'optimisation locale fait vraiment la différence.", initials: "AM" },
  { name: "Hassan Toure", handle: "@hasantoxr", text: "Plus d'appels qualifiés sans dépenser un euro en publicité. Le référencement local bien fait change vraiment la donne pour notre garage. Les clients nous trouvent naturellement quand ils cherchent près de chez eux.", initials: "HT" },
  { name: "Maria Martin", handle: "@marias_martin", text: "Notre fiche Google Business était complètement délaissée. TANSE l'a optimisée avec les bons mots-clés et photos. Résultat : +30% d'essais routiers demandés en 90 jours. Le ROI est évident.", initials: "MM" },
  { name: "Gabriel Konovalov", handle: "@glebkonon", text: "La méthode GEO de TANSE apporte des prospects incroyablement qualifiés. Ce ne sont pas des curieux, ce sont des gens prêts à acheter. Notre taux de conversion a doublé depuis la mise en place.", initials: "GK" },
];

const ROW2: T[] = [
  { name: "Richard Manisse", handle: "@rmanisa", text: "L'association du référencement local et des pages services bien structurées nous donne une visibilité réelle sur Google Maps. Nous apparaissons maintenant dans le top 3 pour toutes nos spécialités dans un rayon de 25km.", initials: "RM" },
  { name: "Anaïs Dupré", handle: "@anais_auto", text: "Après seulement 3 mois d'accompagnement, nous avons constaté +22% de demandes de devis pour notre atelier carrosserie. Les positions sur les recherches locales ont explosé et les avis positifs se multiplient.", initials: "AD" },
  { name: "Eran Cohen", handle: "@erancohen", text: "Le reporting est simple et transparent : on voit les positions monter semaine après semaine, et surtout les appels téléphoniques suivent. C'est du concret, pas du vent. TANSE livre ce qu'ils promettent.", initials: "EC" },
  { name: "Thomas Weber", handle: "@thomasweber", text: "Nous gérons désormais mieux nos avis clients grâce à leur stratégie. Notre note Google est passée de 3.8 à 4.6 en 6 mois, et ça se voit immédiatement sur le nombre de visites en concession. Les gens font confiance.", initials: "TW" },
];

/* ------------------------------------------------------------------ */
/* Avatars (chemins dans /public/trust/)                              */
/* NB: utilise exactement les noms présents dans ton dossier           */
/* ------------------------------------------------------------------ */
const AVATARS: Record<string, string> = {
  "Ariel Martinez": "/trust/danny-postma-zNxOw2JFNKs-unsplash.jpg",
  "Hassan Toure": "/trust/greg-edwards-oz2wj86hGxA-unsplash.jpg",
  "Maria Martin": "/trust/woman-7895953_1280.jpg",
  "Gabriel Konovalov": "/trust/linkedin-sales-solutions-pAtA8xe_iVM-unsplash.jpg",
  "Richard Manisse": "/trust/man-7450033_1280.jpg",
  "Anaïs Dupré": "/trust/clay-elliot-mpDV4xaFP8c-unsplash",
  "Eran Cohen": "/trust/the-connected-narrative-N8lRH2uxih4-unsplash.jpg",
  "Thomas Weber": "/trust/brad-hanks-VR3nXEIfBzs-unsplash.jpg",
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