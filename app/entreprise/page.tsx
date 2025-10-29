import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import FadeIn from "../components/FadeIn";
import SplineLazy from "../components/SplineLazy";

export const metadata = {
  title: "TANSE — Notre histoire & Notre équipe",
  description:
    "Pourquoi TANSE existe, nos jalons par année, et l'équipe qui vous accompagne sur le SEO local, le GEO et la performance web.",
};

type YearItem = { year: string; bullets: ReactNode[]; accent?: string };

const TIMELINE: YearItem[] = [
  {
    year: "2025",
    accent: "bg-[#2E316B]",
    bullets: [
      "70 entreprises accompagnées (retail, services, industries)",
      "Méthode GEO v2 (answer engines + schémas avancés, multi-secteurs)",
      <>
        <span className="font-semibold text-[#444684]">+32%</span> de leads / prises de contact en moyenne (90 jours)
      </>,
    ],
  },
  {
    year: "2024",
    accent: "bg-[#444684]",
    bullets: [
      "25 entreprises accompagnées (PME & réseaux multi-sites)",
      "Méthode GEO v1 (fiches locales & entités de marque)",
      <>
        <span className="font-semibold text-[#444684]">+18%</span> de leads / prises de contact en moyenne (3–6 mois)
      </>,
    ],
  },
];

type Member = { name: string; role: string; bio: string };
const TEAM: Member[] = [
  {
    name: "D. Raphael",
    role: "Head of Local SEO",
    bio: "Optimisation locale multi-secteurs (retail, services, B2B). Focus entités et visibilité de proximité.",
  },
  {
    name: "M. Rayane",
    role: "Lead GEO (Answer Engines)",
    bio: "Structure l’information pour les moteurs de réponse (IA). Schémas, graphes de connaissances, gouvernance des sources.",
  },
  {
    name: "M. Valentin",
    role: "UX & Web Performance",
    bio: "UX et performance produit/web. Expériences très rapides qui convertissent, mobile-first et Core Web Vitals élevés.",
  },
  {
    name: "K. Guillaume",
    role: "Consultant",
    bio: "Conseil opérationnel et go to market local. Digital au service des équipes et des objectifs business.",
  },
];

export default function Page() {
  return (
    <main className="bg-[#E4E4E4] text-[#0b0b0c] border-t border-transparent overflow-x-hidden">
      {/* Intro */}
      <section className="mx-auto w-full max-w-6xl px-6 pt-0 pb-16 md:pb-20">
        {/* Bouton retour page principale */}
        <div className="mb-6 pt-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-black/5 px-4 py-2 text-sm hover:bg-black/10"
          >
            <span aria-hidden>←</span> Page principale
          </Link>
        </div>

        <div className="grid items-center gap-10 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-[#444684]">
              Notre raison d’être
            </p>
            <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
              Pourquoi nous venons travailler <br className="hidden md:block" /> tous les jours
            </h1>

            <p className="mt-6 text-[15px] leading-relaxed text-neutral-700">
              <span className="font-semibold text-[#444684]">
                Vous faites votre métier, on rend votre savoir-faire immanquable au moment où l’intention est la plus forte.
              </span>
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-neutral-700">
              Notre promesse est simple&nbsp;: <span className="font-semibold text-[#444684]">enlever la friction</span>. Les détours, les délais, les portes closes qui
              transforment une intention claire en opportunité manquée. Nous créons{" "}
              <span className="font-semibold text-[#444684]">un chemin direct</span> entre les besoins des gens et ce que vous faites le mieux,{" "}
              <span className="font-semibold text-[#444684]">du local au national</span>, du service à l’industrie.
            </p>
          </div>

          {/* Visuel (large) */}
          <div className="md:col-span-6">
            <div className="relative w-full h-[clamp(280px,80vh,680px)]">
              <Image
                src="/entreprise/stronger-together.webp"
                alt="Stronger together — l'équipe TANSE au travail"
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline (2 cartes) */}
      <section className="mx-auto w-full max-w-6xl px-6 pb-6 pt-4 md:py-10">
        <h2 className="mb-3 text-center text-3xl font-semibold">
          Ce que nous avons accompli jusqu’à présent
        </h2>
        <p className="mx-auto mb-10 max-w-3xl text-center text-neutral-700">
          <span className="font-semibold text-[#444684]">Avant que ce soit évident</span>, nous avons vu la transition : des listes de liens vers{" "}
          <span className="font-semibold text-[#444684]">des réponses directes</span>. TANSE est né de cette réalité. Nous avons conçu des systèmes{" "}
          <span className="font-semibold text-[#444684]">GEO/SEO</span> prêts pour{" "}
          <span className="font-semibold text-[#444684]">Google, Maps et les moteurs IA</span>, simplifié les parcours et installé{" "}
          <span className="font-semibold text-[#444684]">un cadre de performance clair</span>.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {TIMELINE.map((y) => (
            <div key={y.year} className="overflow-hidden rounded-3xl bg-white shadow-md ring-1 ring-black/5">
              <div className={`px-6 pb-10 pt-12 ${y.accent ?? "bg-[#444684]"} text-white`}>
                <div className="text-6xl font-extrabold tracking-tight">{y.year}</div>
              </div>
              <div className="px-6 py-6">
                <ul className="space-y-3 text-sm text-neutral-800">
                  {y.bullets.map((b, i) => (
                    <li key={i}>• {b}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Équipe */}
      <section className="mx-auto w-full max-w-6xl px-6 py-16">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-semibold">Notre équipe</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((m) => (
            <div key={m.name} className="rounded-3xl bg-white p-6 shadow-md ring-1 ring-black/5">
              <div className="mb-4 h-14 w-14 rounded-full bg-[#444684]/15" />
              <div className="text-base font-semibold">{m.name}</div>
              <div className="text-sm text-neutral-600">{m.role}</div>
              <p className="mt-3 text-sm text-neutral-700">{m.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Rejoignez TANSE */}
      <section className="relative overflow-hidden min-h-[78dvh] py-10 md:py-14 bg-[#E4E4E4]">
        <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
          <div className="grid items-center gap-10 md:grid-cols-12">
            <div className="md:col-span-5">
              <h2 className="text-[clamp(32px,4.2vw,48px)] font-semibold text-[#444684] leading-tight">
                Rejoignez TANSE
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-neutral-700">
                Ne donnez plus vos clients à la concurrence. TANSE déploie le GEO & SEO nouvelle génération pour que vos futurs clients vous trouvent en premier.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/forfaits"
                  className="rounded-full bg-[#444684] px-5 py-3 text-sm font-medium text-white shadow-md hover:opacity-90"
                >
                  Voir nos forfaits
                </Link>
                <a
                  href="mailto:contact@tanse.fr"
                  className="rounded-full bg-black/5 px-5 py-3 text-sm font-medium hover:bg-black/10"
                >
                  Nous contacter
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pointer-events-auto absolute inset-y-0 right-0 w-[75vw] md:w-[60vw]">
          <SplineLazy
            url="https://prod.spline.design/EZYaol9QTCXdiWrh/scene.splinecode"
            className="block w-full h-full"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-black/10 py-10">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
          <span className="text-sm text-neutral-600">© {new Date().getFullYear()} TANSE</span>
          <div className="flex gap-5 text-sm">
            <Link href="/forfaits" className="text-[#444684] hover:underline">Forfaits</Link>
            <Link href="/entreprise" className="text-[#444684] hover:underline">Entreprise</Link>
            <a href="mailto:contact@tanse.fr" className="text-[#444684] hover:underline">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}