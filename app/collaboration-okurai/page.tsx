'use client';

import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import dynamic from 'next/dynamic';
import BenchmarksChart from './components/BenchmarksChart';
import ProjectionChart from './components/ProjectionChart';

const SiteFooter = dynamic(() => import('../components/SiteFooter').then(m => m.default), { ssr: false });

// Logo OkurAI inline SVG component
const OkurAILogo = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none">
    <path d="M8 8 L16 4 L24 8" stroke="#10B981" strokeWidth="3" strokeLinecap="round"/>
    <path d="M8 16 L16 12 L24 16" stroke="#10B981" strokeWidth="3" strokeLinecap="round"/>
    <path d="M8 24 L16 20 L24 24" stroke="#10B981" strokeWidth="3" strokeLinecap="round"/>
  </svg>
);

export default function CollaborationOkurAIPage() {
  const navLinkBase = "pointer-events-auto rounded-full px-3 md:px-4 py-2 text-xs md:text-sm font-medium min-h-[36px] md:min-h-0 flex items-center justify-center transition-all duration-200";
  const navLinkDefault = "text-[#24243C] hover:bg-white";
  const navLinkPrimary = "text-white bg-[#444684] hover:opacity-90";

  return (
    <>
      <Script
        type="module"
        src="https://unpkg.com/@splinetool/viewer@1.12.28/build/spline-viewer.js"
        strategy="beforeInteractive"
      />

      <main className="bg-white">
        {/* HEAD SECTION - Hero avec Navigation */}
        <section className="relative w-full min-h-[70vh] bg-gradient-to-br from-slate-50 to-white overflow-hidden">
          {/* Navigation */}
          <div className="pointer-events-none absolute left-1/2 top-4 md:top-6 z-20 -translate-x-1/2 w-full max-w-[calc(100%-2rem)] md:max-w-none">
            <nav className="flex items-center justify-center gap-1 md:gap-2 rounded-full bg-white/80 md:bg-white/70 backdrop-blur px-2 py-2 shadow-lg ring-1 ring-black/5 mx-auto w-fit">
              <Link href="/forfaits-geo-seo" className={`${navLinkBase} ${navLinkDefault}`}>
                Forfaits
              </Link>
              <Link href="/agence-geo-paris-lyon" className={`${navLinkBase} ${navLinkDefault}`}>
                Entreprise
              </Link>
              <Link href="/geo" className={`${navLinkBase} ${navLinkDefault}`}>
                GEO
              </Link>
              <Link href="/blog-seo-geo" className={`${navLinkBase} ${navLinkDefault}`}>
                Blog
              </Link>
              <Link href="/contact-audit-gratuit" className={`${navLinkBase} ${navLinkPrimary}`}>
                Contact
              </Link>
            </nav>
          </div>

          {/* Hero Content */}
          <div className="relative pt-24 pb-16 px-6">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                {/* Logo Partnership */}
                <div className="flex items-center justify-center gap-6 mb-8">
                  <Image
                    src="/brand/tanse-logo.png?v=3"
                    alt="TANSE"
                    width={160}
                    height={40}
                    className="h-12 w-auto"
                  />
                  <span className="text-4xl font-light text-slate-400">×</span>
                  <div className="flex items-center gap-3">
                    <OkurAILogo className="w-12 h-12" />
                    <span className="text-3xl font-semibold text-slate-900">OkurAI</span>
                  </div>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
                  Un partenariat stratégique pour l'optimisation IA
                </h1>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                  Chez <span className="font-semibold text-[#444684]">TANSE</span>, nous nous appuyons sur les recherches{' '}
                  <span className="inline-flex items-center gap-1 font-semibold text-green-600">
                    <OkurAILogo className="w-4 h-4" />
                    OkurAI
                  </span>{' '}
                  pour développer nos stratégies GEO
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 1 - Pourquoi collaborer avec OkurAI (Violet/Vert) */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
                Pourquoi{' '}
                <span className="text-[#444684]">TANSE</span>{' '}
                collabore avec{' '}
                <span className="inline-flex items-center gap-2 text-green-600">
                  <OkurAILogo className="w-8 h-8" />
                  OkurAI
                </span>
              </h2>

              <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
                <p>
                  Chez <strong className="text-[#444684]">TANSE</strong>, nous avons fait le choix de baser nos stratégies GEO (Generative Engine Optimization) sur la recherche scientifique plutôt que sur l'expérimentation empirique.{' '}
                  <span className="inline-flex items-center gap-1 font-semibold text-green-600">
                    <OkurAILogo className="w-4 h-4" />
                    OkurAI
                  </span>{' '}
                  est le premier média francophone entièrement dédié à l'analyse rigoureuse de l'intelligence artificielle générative.
                </p>

                <p>
                  Cette collaboration nous permet d'offrir à nos clients des services basés sur{' '}
                  <strong>des données vérifiables et une méthodologie scientifique stricte</strong>. Les recherches d'{' '}
                  <span className="inline-flex items-center gap-1 font-semibold text-green-600">
                    <OkurAILogo className="w-4 h-4" />
                    OkurAI
                  </span>{' '}
                  analysent comment plus de <strong className="text-green-600">30 modèles d'IA</strong> (ChatGPT, Claude, Perplexity, Gemini) sélectionnent et citent l'information.
                </p>

                <div className="bg-gradient-to-r from-[#444684]/10 to-green-50 border-l-4 border-green-600 p-6 rounded-r-lg my-8">
                  <p className="font-semibold text-green-900">
                    <strong className="text-[#444684]">Résultat mesurable :</strong> Cette approche a permis d'augmenter de{' '}
                    <strong className="text-green-600">40%</strong> la visibilité moyenne de nos clients sur les requêtes professionnelles.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2 - Des stratégies fondées sur la science (Stats vertes) */}
        <section className="py-20 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
          {/* Motif de fond subtil */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2310B981' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}></div>
          </div>

          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-green-100 border border-green-300 rounded-full px-4 py-2 mb-6">
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                <span className="text-sm font-medium text-green-700">Premier média francophone dédié à l'IA générative</span>
              </div>

              <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-slate-900">
                Des stratégies GEO fondées sur la{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-500">
                  science
                </span>
                , pas l'intuition
              </h2>

              <p className="text-xl text-slate-700 mb-10 max-w-3xl mx-auto">
                <span className="font-semibold text-[#444684]">TANSE</span> s'appuie sur les recherches rigoureuses d'{' '}
                <span className="inline-flex items-center gap-1 font-semibold text-green-600">
                  <OkurAILogo className="w-5 h-5" />
                  OkurAI
                </span>{' '}
                pour optimiser votre visibilité sur ChatGPT, Claude et Perplexity. Plus de 30 modèles d'IA analysés, des centaines d'heures de recherche, une méthodologie scientifique stricte.
              </p>

              {/* Stats marquantes - VERT */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-green-200">
                  <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">+58%</div>
                  <div className="text-slate-600 text-sm">Taux de citation moyen</div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-green-200">
                  <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">30+</div>
                  <div className="text-slate-600 text-sm">Modèles IA analysés</div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-green-200">
                  <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">40+</div>
                  <div className="text-slate-600 text-sm">Entreprises accompagnées</div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-green-200">
                  <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">100%</div>
                  <div className="text-slate-600 text-sm">Indépendance éditoriale</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3 - Méthodologie (Spline à droite + couleurs) */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Texte à gauche */}
              <div>
                <h2 className="text-4xl font-bold text-slate-900 mb-8">
                  Quelle est la méthodologie de recherche d'{' '}
                  <span className="inline-flex items-center gap-2 text-green-600">
                    <OkurAILogo className="w-8 h-8" />
                    OkurAI
                  </span>{' '}
                  ?
                </h2>

                <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
                  <p>
                    <strong className="text-green-600">Méthodologie de recherche stricte :</strong> Les articles d'{' '}
                    <span className="inline-flex items-center gap-1 font-semibold text-green-600">
                      <OkurAILogo className="w-4 h-4" />
                      OkurAI
                    </span>{' '}
                    suivent un processus scientifique rigoureux où chaque affirmation renvoie à des papers de recherche, de la documentation officielle ou des données mesurables.
                  </p>

                  <div className="bg-white p-6 rounded-xl border-2 border-green-200 shadow-lg">
                    <h3 className="font-bold text-xl mb-4 text-green-700">Les 4 piliers de la rigueur OkurAI :</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="text-2xl text-green-600">✓</span>
                        <div>
                          <strong className="text-green-600">Sources primaires systématiquement citées</strong> – Papers de recherche et documentation officielle uniquement
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-2xl text-green-600">✓</span>
                        <div>
                          <strong className="text-green-600">Données vérifiables et traçables</strong> – Méthodologies complètes pour reproduction
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-2xl text-green-600">✓</span>
                        <div>
                          <strong className="text-green-600">Analyses techniques approfondies</strong> – Décomposition des mécanismes internes des modèles
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-2xl text-green-600">✓</span>
                        <div>
                          <strong className="text-green-600">Absence de sensationnalisme</strong> – Faits documentés uniquement
                        </div>
                      </li>
                    </ul>
                  </div>

                  <p>
                    Cette approche garantit que nos stratégies <span className="font-semibold text-[#444684]">TANSE</span> reposent sur des faits documentés, pas sur des tendances passagères. Quand{' '}
                    <span className="inline-flex items-center gap-1 font-semibold text-green-600">
                      <OkurAILogo className="w-4 h-4" />
                      OkurAI
                    </span>{' '}
                    a publié son analyse comparative des patterns de citation entre ChatGPT, Claude et Perplexity, nous avons pu adapter nos recommandations clients et{' '}
                    <strong className="text-green-600">augmenter de 40% la visibilité moyenne sur les requêtes professionnelles</strong>.
                  </p>
                </div>
              </div>

              {/* Spline à droite - réduite */}
              <div className="flex justify-center items-center">
                <div className="w-full max-w-sm h-[350px] relative">
                  {/* @ts-ignore */}
                  <spline-viewer
                    url="https://prod.spline.design/f9QdmbRuBjjU8rNc/scene.splinecode"
                    className="w-full h-full"
                  ></spline-viewer>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4 - Graphique Benchmarks OkurAI */}
        <section className="py-20 bg-gradient-to-br from-green-50/50 to-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Le travail de recherche d'{' '}
                <span className="inline-flex items-center gap-2 text-green-600">
                  <OkurAILogo className="w-10 h-10" />
                  OkurAI
                </span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                <span className="inline-flex items-center gap-1 font-semibold text-green-600">
                  <OkurAILogo className="w-5 h-5" />
                  OkurAI
                </span>{' '}
                analyse en profondeur les performances de plus de 30 modèles d'IA pour identifier les tendances et opportunités d'optimisation. Découvrez l'évolution des modèles au fil du temps.
              </p>
            </div>

            <BenchmarksChart />

            <div className="mt-8 bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg">
              <p className="text-slate-700">
                <strong className="text-green-700">Stratégie TANSE :</strong> Grâce aux données d'{' '}
                <span className="inline-flex items-center gap-1 font-semibold text-green-600">
                  <OkurAILogo className="w-4 h-4" />
                  OkurAI
                </span>
                , nous adaptons continuellement nos recommandations pour exploiter les forces de chaque modèle d'IA et maximiser votre visibilité.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 5 - Ce que ça vous apporte (Projections + Tableau) */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Ce que cette collaboration vous apporte
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Des projections précises qui vous permettent de dépasser vos concurrents et d'anticiper la demande grâce aux stratégies validées scientifiquement.
              </p>
            </div>

            {/* Graphique de projection */}
            <div className="mb-12">
              <ProjectionChart />
            </div>

            {/* Tableau des meilleurs résultats */}
            <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 border-2 border-slate-200 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
                📊 Tableau des meilleurs résultats clients
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b-2 border-slate-300">
                      <th className="py-4 px-4 font-semibold text-slate-700">Métrique</th>
                      <th className="py-4 px-4 font-semibold text-slate-700">Avant</th>
                      <th className="py-4 px-4 font-semibold text-slate-700">Après</th>
                      <th className="py-4 px-4 font-semibold text-green-600">Amélioration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-200 hover:bg-slate-50 transition">
                      <td className="py-4 px-4">Taux de citation IA</td>
                      <td className="py-4 px-4 text-slate-600">37%</td>
                      <td className="py-4 px-4 font-semibold">58%</td>
                      <td className="py-4 px-4 font-bold text-green-600">+58% ↗</td>
                    </tr>
                    <tr className="border-b border-slate-200 hover:bg-slate-50 transition">
                      <td className="py-4 px-4">Visibilité Claude</td>
                      <td className="py-4 px-4 text-slate-600">42%</td>
                      <td className="py-4 px-4 font-semibold">65%</td>
                      <td className="py-4 px-4 font-bold text-green-600">+55% ↗</td>
                    </tr>
                    <tr className="border-b border-slate-200 hover:bg-slate-50 transition">
                      <td className="py-4 px-4">Taux d'échec optimisation</td>
                      <td className="py-4 px-4 text-slate-600">35%</td>
                      <td className="py-4 px-4 font-semibold">12%</td>
                      <td className="py-4 px-4 font-bold text-green-600">-66% ↘</td>
                    </tr>
                    <tr className="border-b border-slate-200 hover:bg-slate-50 transition">
                      <td className="py-4 px-4">Réactivité aux changements</td>
                      <td className="py-4 px-4 text-slate-600">2-3 semaines</td>
                      <td className="py-4 px-4 font-semibold">48h</td>
                      <td className="py-4 px-4 font-bold text-green-600">10× plus rapide ⚡</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition">
                      <td className="py-4 px-4">CA additionnel mensuel (M+12)</td>
                      <td className="py-4 px-4 text-slate-600">0€</td>
                      <td className="py-4 px-4 font-semibold">27 300€</td>
                      <td className="py-4 px-4 font-bold text-green-600">+27 300€ 💰</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-6 bg-green-50 border-l-4 border-green-600 p-4 rounded-r-lg">
                <p className="text-sm text-green-900">
                  <strong>Impact mesuré sur 40+ entreprises françaises</strong> — Pendant que vos concurrents testent à l'aveugle, vous déployez des stratégies validées par les recherches d'{' '}
                  <span className="inline-flex items-center gap-1 font-semibold">
                    <OkurAILogo className="w-4 h-4" />
                    OkurAI
                  </span>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6 - CTA Final (copié de FinalCta) */}
        <section className="bg-[#E4E4E4] py-16 md:py-24">
          <div className="max-w-7xl mx-auto grid grid-cols-12 gap-8 md:gap-12 min-h-[600px] px-6">
            {/* Texte à gauche */}
            <div className="col-span-12 md:col-span-5 flex flex-col justify-center">
              <p className="text-xs tracking-[.25em] uppercase text-neutral-500 mb-4">
                Dernière étape
              </p>
              <h2 className="text-5xl md:text-7xl font-semibold leading-tight mb-8">
                Vos clients n'attendent que vous.
              </h2>
              <p className="text-neutral-700 text-lg md:text-xl leading-relaxed mb-10 max-w-prose">
                Rendez votre offre accessible au moment où l'intention est présente.
                Nous préparons la visibilité locale et facilitons l'action : appel,
                formulaire, visite. Simple, clair, orienté résultats.
              </p>

              <Link
                href="/forfaits-geo-seo"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#444684] text-white font-medium shadow-lg transition-all duration-200 hover:opacity-90 hover:-translate-y-1 hover:shadow-xl active:translate-y-0 active:shadow-md w-fit"
              >
                Choisir un forfait
              </Link>
            </div>

            {/* Image à droite */}
            <div className="col-span-12 md:col-span-7 flex items-center justify-center">
              <div className="rounded-3xl shadow-[0_25px_80px_-20px_rgba(0,0,0,0.35)] overflow-hidden w-full h-[400px] md:h-[600px]">
                <Image
                  src="/screenlesclientsnattendentquevous.png"
                  alt="Vos clients n'attendent que vous"
                  width={1920}
                  height={1080}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7 - Footer TANSE (composant importé) */}
        <SiteFooter />
      </main>
    </>
  );
}
