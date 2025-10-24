"use client";

import Link from "next/link";
import SectionFrame from "./SectionFrame";
import {
  Plus,
  Minus,
  // Icônes add-ons
  FileText,
  Globe,
  MessageCircle,
  Link as LinkIcon,
  GraduationCap,
} from "lucide-react";

export default function PricingPlans() {
  return (
    <SectionFrame id="forfaits" className="bg-[#E4E4E4]">
      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-10 py-20 md:py-28">
        {/* Titre */}
        <header className="text-center mb-12 md:mb-16">
          <h2 className="text-[#0b0b0c] text-4xl md:text-5xl font-semibold tracking-tight">
            Nos forfaits
          </h2>
          <p className="mt-4 text-neutral-700">
            Des packs clairs, orientés résultats. Paiement sécurisé via Stripe. Prix <span className="font-medium">HT</span>.
          </p>
        </header>

        {/* Grille offres */}
        <div className="grid gap-6 md:gap-8 md:grid-cols-3">
          {/* Offre 1 — SEO + GEO */}
          <article
            tabIndex={0}
            className="group relative rounded-3xl bg-white p-7 md:p-8 ring-1 ring-[#444684]/12 shadow-[0_20px_60px_-28px_rgba(0,0,0,0.25)]
                       transition-all duration-300 ease-out hover:-translate-y-1 hover:ring-[#444684]/30
                       hover:shadow-[0_40px_120px_-40px_rgba(68,70,132,0.45)] focus-visible:-translate-y-1
                       focus-visible:ring-2 focus-visible:ring-[#444684]/50"
          >
            <header className="mb-6">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#444684]/10 text-[#444684]">⚡</div>
              <h3 className="mt-4 text-xl font-semibold text-[#0b0b0c]">SEO + GEO — PME (1 site)</h3>
              <p className="text-sm text-neutral-500">Visibilité locale + moteurs de réponse (IA)</p>

              <div className="mt-5">
                <div className="flex items-end gap-2">
                  <div className="text-4xl md:text-5xl font-bold tracking-tight text-[#0b0b0c]">1 490€</div>
                  <div className="pb-2 text-neutral-500">coût unique</div>
                </div>
                <div className="mt-2 inline-flex items-center gap-2 rounded-full bg-black/5 px-3 py-1 text-xs font-medium text-[#0b0b0c] ring-1 ring-black/10">
                  Maintenance GEO + SEO : <span className="font-semibold">850€ / mois</span>
                </div>
              </div>
            </header>

            <div className="mt-4">
              <div className="mb-2 text-sm font-medium text-[#0b0b0c]">Inclus au départ (setup) :</div>
              <ul className="space-y-3 text-sm text-neutral-800">
                {[
                  "Audit initial (GMB, NAP, 10 tests IA, top 5 requêtes) & plan d’action 30 jours",
                  "Mise en place call-tracking + objectifs Analytics",
                  "Optimisation Google Business Profile (catégories, description, 20+ visuels, 2 posts/mois, Q&R)",
                  "20 citations locales & correction NAP",
                  "Schema.org (LocalBusiness/FAQ) + contrôle vitesse & mobile",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-[#444684]/20" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 text-sm">
                <div className="mb-2 font-medium text-[#0b0b0c]">Maintenance mensuelle (850€ / mois) :</div>
                <ul className="space-y-2 text-neutral-800">
                  {[
                    "1 contenu local/mois (page service ou FAQ ~1 000 mots)",
                    "Cadence collecte d’avis (scripts + micro-incitations)",
                    "Dashboard temps réel (Positions, GMB, appels) + reporting mensuel",
                    "SLA : réponse < 24h • correctifs tech < 5j • livrables contenus < 10j",
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-[#444684]/12" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8">
              <Link
                href="/checkout/seo-geo"
                prefetch
                className="inline-flex w-full items-center justify-center rounded-full bg-black/5 px-5 py-3 text-sm font-medium text-[#0b0b0c] hover:bg-black/10"
              >
                Démarrer (coût unique 1 490€)
              </Link>
            </div>
          </article>

          {/* Offre 2 — SEO + GEO + Site web / Refonte */}
          <article
            tabIndex={0}
            className="group relative rounded-3xl p-7 md:p-8 ring-1 ring-[#444684]/20 bg-[#444684] text-white
                       shadow-[0_40px_120px_-40px_rgba(68,70,132,0.55)] transition-all duration-300 ease-out
                       hover:-translate-y-1 hover:shadow-[0_60px_160px_-40px_rgba(68,70,132,0.70)]
                       focus-visible:-translate-y-1 focus-visible:ring-2 focus-visible:ring-white/60"
          >
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-white/15 backdrop-blur px-3 py-1 text-xs font-medium">
              1er mois de maintenance OFFERT
            </span>

            <header className="mb-6">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/15">✨</div>
              <h3 className="mt-4 text-xl font-semibold">SEO + GEO + Site web / Refonte</h3>
              <p className="text-sm text-white/80">Fondations + visibilité + vitrine alignée IA</p>

              <div className="mt-5">
                <div className="flex items-end gap-2">
                  <div className="text-4xl md:text-5xl font-bold tracking-tight">2 490€</div>
                  <div className="pb-2 text-white/80">coût unique</div>
                </div>
                <div className="mt-2 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-medium">
                  Maintenance GEO + SEO : <span className="font-semibold">850€ / mois</span> <span className="opacity-80">(mois 1 offert)</span>
                </div>
              </div>
            </header>

            <div className="text-sm">
              <div className="mb-2 font-medium">Inclus au départ (setup) :</div>
              <ul className="space-y-3">
                {[
                  "Tout le setup de l’offre SEO + GEO",
                  "Site vitrine performant (ou refonte) : structure pages services, FAQ locales, formulaires & tracking",
                  "Design propre, mobile-first, optimisation Core Web Vitals de base",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/25 text-white text-[11px]">●</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <Link
                href="/checkout/seo-geo-site"
                prefetch
                className="inline-flex w-full items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-medium text-[#444684]
                           transition hover:opacity-90 group-hover:shadow-[0_10px_30px_-10px_rgba(255,255,255,0.6)]"
              >
                Démarrer (coût unique 2 490€)
              </Link>
            </div>
          </article>

          {/* Offre 3 — Grand groupes */}
          <article
            tabIndex={0}
            className="group relative rounded-3xl bg-white p-7 md:p-8 ring-1 ring-[#444684]/12 shadow-[0_20px_60px_-28px_rgba(0,0,0,0.25)]
                       transition-all duration-300 ease-out hover:-translate-y-1 hover:ring-[#444684]/30
                       hover:shadow-[0_40px_120px_-40px_rgba(68,70,132,0.45)] focus-visible:-translate-y-1
                       focus-visible:ring-2 focus-visible:ring-[#444684]/50"
          >
            <header className="mb-6">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#444684]/10 text-[#444684]">👑</div>
              <h3 className="mt-4 text-xl font-semibold text-[#0b0b0c]">Grand groupes — multi-sites</h3>
              <p className="text-sm text-neutral-500">Gouvernance, industrialisation & SLA avancés</p>
              <div className="mt-5 text-4xl md:text-5xl font-bold tracking-tight text-[#0b0b0c]">Sur devis</div>
            </header>

            <ul className="space-y-3 text-sm text-neutral-800">
              {[
                "Stratégie GEO/SEO à l’échelle (multi-pays / multi-marques)",
                "Playbooks, qualité NAP globale & par site, workflows d’approbation",
                "Reporting agrégé + par entité, connecteurs et API d’intégration",
                "Support prioritaire, formations, SLA contractuels",
              ].map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-[#444684]/20" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Link
                href="/contact?plan=grand-groupes"
                prefetch
                className="inline-flex w-full items-center justify-center rounded-full bg-black/5 px-5 py-3 text-sm font-medium text-[#0b0b0c] hover:bg-black/10"
              >
                Parler à un expert
              </Link>
            </div>
          </article>
        </div>

        {/* Add-ons — accordéon accessible avec icônes distinctes */}
        <section className="mt-12 md:mt-16">
          <details className="group rounded-3xl bg-white/70 p-5 md:p-6 ring-1 ring-black/10 backdrop-blur-sm">
            <summary
              className="flex cursor-pointer list-none items-center justify-between gap-4 [&::-webkit-details-marker]:hidden"
              aria-controls="addons-panel"
            >
              <div>
                <h3 className="text-xl font-semibold text-[#0b0b0c]">Offres supplémentaires</h3>
                <p className="mt-1 text-sm text-neutral-600">
                  Options à la carte pour accélérer ou étendre le périmètre.
                </p>
              </div>
              <span
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-white text-[#0b0b0c] shadow-sm transition group-open:rotate-180"
                aria-hidden
              >
                <Plus className="h-5 w-5 group-open:hidden" />
                <Minus className="hidden h-5 w-5 group-open:block" />
              </span>
            </summary>

            <div
              id="addons-panel"
              className="grid grid-cols-1 gap-4 pt-6 sm:grid-cols-2 lg:grid-cols-4
                         opacity-0 max-h-0 overflow-hidden transition-all duration-300 ease-out
                         group-open:opacity-100 group-open:max-h-[2000px]"
            >
              {[
                { t: "Page locale supplémentaire (service/ville ~1 000 mots)", p: "450€", Icon: FileText },
                { t: "Pack citations +10", p: "120€", Icon: Globe },
                { t: "Campagne avis « booster 30 jours »", p: "250€", Icon: MessageCircle },
                { t: "Netlinking (sélection & achat)", p: "Sur devis", Icon: LinkIcon },
                { t: "Formation équipe / playbook interne (atelier 2h)", p: "690€", Icon: GraduationCap },
              ].map(({ t, p, Icon }) => (
                <div
                  key={t}
                  className="group/card relative overflow-hidden rounded-2xl bg-white p-5 ring-1 ring-black/10
                             shadow-[0_10px_30px_-18px_rgba(68,70,132,0.25)] transition
                             hover:-translate-y-0.5 hover:shadow-[0_30px_80px_-30px_rgba(68,70,132,0.45)]"
                >
                  <div aria-hidden className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-[#444684]/10 blur-2xl" />

                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#444684]/10 text-[#444684]">
                      <Icon className="h-5 w-5" aria-hidden />
                    </div>
                    <div className="text-sm text-neutral-800">{t}</div>
                  </div>

                  <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-[#444684]/10 px-3 py-1 text-xs font-semibold text-[#444684] ring-1 ring-[#444684]/20">
                    {p}
                  </div>
                </div>
              ))}
            </div>
          </details>
        </section>

        {/* Attentes réalistes */}
        <section className="mt-12 md:mt-16">
          <h3 className="text-xl font-semibold text-[#0b0b0c] mb-3">Ce que vous mesurez (attentes réalistes)</h3>
          <ul className="space-y-2 text-sm text-neutral-800">
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[#444684]/20" />
              <span><span className="font-medium">J+30</span> : signaux visibles (positions locales, impressions GMB, cohérence NAP, premiers appels tracés)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[#444684]/20" />
              <span><span className="font-medium">J+45–60</span> : preuves d’impact (hausse appels/actions GMB, requêtes priorisées en top-3, citations IA qui apparaissent)</span>
            </li>
          </ul>
        </section>

        {/* FAQ express */}
        <section className="mt-12 md:mt-16">
          <h3 className="text-xl font-semibold text-[#0b0b0c] mb-3">FAQ express</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-5 ring-1 ring-black/10">
              <div className="font-medium">Engagement ?</div>
              <p className="mt-1 text-sm text-neutral-700">
                Packs à coût unique. La maintenance est au mois <span className="font-medium">850€</span> (résiliable avant renouvellement). Offre 2 : <span className="font-medium">1er mois offert</span>.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-5 ring-1 ring-black/10">
              <div className="font-medium">Résiliation ?</div>
              <p className="mt-1 text-sm text-neutral-700">
                Arrêt possible à tout moment avant la date de renouvellement mensuel de la maintenance.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-5 ring-1 ring-black/10">
              <div className="font-medium">Secteurs couverts ?</div>
              <p className="mt-1 text-sm text-neutral-700">
                Auto, services, retail, santé, restauration, immobilier — autres sur demande.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-5 ring-1 ring-black/10">
              <div className="font-medium">Prix affichés ?</div>
              <p className="mt-1 text-sm text-neutral-700">
                Prix HT. Multi-sites & international sur devis.
              </p>
            </div>
          </div>
        </section>

        {/* CTA final */}
        <div className="mt-12 md:mt-16 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/contact?type=audit"
            prefetch
            className="inline-flex items-center justify-center rounded-full bg-[#444684] px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-2 focus-visible:outline-[#444684] focus-visible:outline-offset-2"
          >
            Demander un audit gratuit (24-48h)
          </Link>
          <Link
            href="/contact?type=call"
            prefetch
            className="inline-flex items-center justify-center rounded-full bg-black/5 px-6 py-3 text-sm font-medium text-[#0b0b0c] hover:bg-black/10 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-2 focus-visible:outline-[#444684] focus-visible:outline-offset-2"
          >
            Réserver un appel de 30 min
          </Link>
        </div>
      </div>
    </SectionFrame>
  );
}