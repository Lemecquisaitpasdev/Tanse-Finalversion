// DESIGN TOKENS TANSE
//
// Colors:
// - Background: #E4E4E4 / white
// - Primary: #444684 (violet)
// - Text: black / slate-900

import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: "TANSE × OkurAI | Collaboration Recherche GEO et IA Générative",
  description: "OkurAI collabore avec TANSE, première agence GEO en France, pour valider nos recherches sur le terrain et améliorer la visibilité des entreprises françaises.",
  openGraph: {
    title: "TANSE × OkurAI | Collaboration Recherche GEO et IA Générative",
    description: "Partenariat stratégique entre OkurAI et TANSE pour l'optimisation de la visibilité sur les moteurs IA.",
    url: 'https://www.tanse.fr/collaboration-okurai',
    siteName: 'TANSE',
    locale: 'fr_FR',
    type: 'website',
  },
};

export default function CollaborationOkurAIPage() {
  return (
    <>
      {/* Hero Section - Full Screen Spline with Overlay */}
      <section className="h-[110vh] w-full relative overflow-hidden">
        {/* Spline Animation - Full Screen Background */}
        <iframe
          src="https://prod.spline.design/QVYsvSsvOGpvPXJt/scene.splinecode"
          className="w-full h-full border-0"
          loading="lazy"
        />

        {/* Content Overlay - Centered */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-8">
          {/* Logo Partnership */}
          <div className="mb-8 bg-white/90 backdrop-blur-sm px-8 py-5 rounded-2xl shadow-lg">
            <div className="flex items-center gap-6">
              {/* TANSE Logo */}
              <Image
                src="/brand/tanse-logo.png?v=3"
                alt="TANSE"
                width={120}
                height={30}
                className="h-12 w-auto object-contain"
              />
              {/* X Separator */}
              <span className="text-3xl font-light text-slate-400">×</span>
              {/* OkurAI Logo */}
              <div className="flex items-center gap-3">
                <svg width="48" height="48" viewBox="0 0 32 32" fill="none">
                  <path d="M8 8 L16 4 L24 8" stroke="#444684" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M8 16 L16 12 L24 16" stroke="#444684" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M8 24 L16 20 L24 24" stroke="#444684" strokeWidth="3" strokeLinecap="round"/>
                </svg>
                <span className="text-2xl font-semibold text-slate-900">OkurAI</span>
              </div>
            </div>
          </div>

          {/* H1 Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 text-center max-w-4xl leading-tight mb-6 bg-white/95 backdrop-blur-sm px-10 py-6 rounded-2xl shadow-lg">
            Recherche appliquée sur l'IA Générative
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-slate-700 text-center max-w-2xl bg-white/90 backdrop-blur-sm px-8 py-4 rounded-xl">
            En collaboration avec <span className="font-semibold text-[#444684]">TANSE</span>, première agence GEO française
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[1680px] mx-auto px-8">
          <div className="max-w-4xl">
            <h2 className="text-4xl font-bold text-slate-900 mb-8">
              Notre mission de recherche
            </h2>
            <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
              <p>
                OkurAI étudie le comportement des modèles d'IA générative depuis 2023. Nos recherches analysent comment plus de 30 modèles (ChatGPT, Claude, Perplexity, Gemini) sélectionnent, citent et présentent l'information.
              </p>
              <p>
                Cette collaboration avec TANSE répond à un besoin : valider nos hypothèses de recherche sur le terrain, avec des données réelles d'entreprises françaises. Chaque optimisation mise en place par TANSE devient un cas d'étude qui enrichit nos analyses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-16 bg-[#E4E4E4]">
        <div className="max-w-[1680px] mx-auto px-8">
          <div className="max-w-4xl">
            <h2 className="text-4xl font-bold text-slate-900 mb-8">
              Pourquoi TANSE
            </h2>
            <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
              <p>
                TANSE est la première agence française à avoir développé une expertise en Generative Engine Optimization. Leurs clients représentent un échantillon diversifié de secteurs professionnels : juridique, santé privée, immobilier, services B2B.
              </p>
              <p>
                Cette diversité nous permet d'analyser les patterns de visibilité IA à travers différents marchés, avec des données terrain mesurables et un suivi temporel des évolutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Data Exchange Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[1680px] mx-auto px-8">
          <div className="max-w-4xl">
            <h2 className="text-4xl font-bold text-slate-900 mb-8">
              Échange de données
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl border-2 border-slate-200">
                <div className="w-16 h-16 bg-[#444684] rounded-full flex items-center justify-center mb-6">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <line x1="12" y1="18" x2="12" y2="12"/>
                    <line x1="9" y1="15" x2="15" y2="15"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  OkurAI → TANSE
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  Nos analyses sur les sources privilégiées, les biais de citation et les patterns de présentation informent les stratégies d'optimisation de TANSE. Chaque découverte est intégrée dans leur méthodologie avant même sa publication.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl border-2 border-slate-200">
                <div className="w-16 h-16 bg-[#444684] rounded-full flex items-center justify-center mb-6">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                    <line x1="12" y1="22.08" x2="12" y2="12"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  TANSE → OkurAI
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  Les données de visibilité collectées par TANSE valident ou invalident nos hypothèses. Cette boucle de feedback terrain → recherche → optimisation garantit que nos analyses restent ancrées dans la réalité du marché français.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas Section */}
      <section className="py-16 bg-[#E4E4E4]">
        <div className="max-w-[1680px] mx-auto px-8">
          <div className="max-w-4xl">
            <h2 className="text-4xl font-bold text-slate-900 mb-8">
              Axes de recherche
            </h2>
            <div className="space-y-6 text-lg text-slate-700 leading-relaxed mb-8">
              <p>
                Les données TANSE alimentent trois de nos programmes de recherche principaux :
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl border-2 border-slate-200">
                <h3 className="font-bold text-lg text-slate-900 mb-2">
                  Patterns de citation sectorielle
                </h3>
                <p className="text-slate-700">
                  Analyse des secteurs sur ou sous-représentés dans les réponses IA, avec mesure de l'évolution temporelle par type de requête
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border-2 border-slate-200">
                <h3 className="font-bold text-lg text-slate-900 mb-2">
                  Sources structurées vs non-structurées
                </h3>
                <p className="text-slate-700">
                  Corrélation entre optimisation Google Business, schémas structurés et taux de citation dans les LLMs
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border-2 border-slate-200">
                <h3 className="font-bold text-lg text-slate-900 mb-2">
                  Biais géographiques
                </h3>
                <p className="text-slate-700">
                  Impact de la localisation sur la visibilité IA (Paris vs régions, France vs autres marchés francophones)
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border-2 border-slate-200">
                <h3 className="font-bold text-lg text-slate-900 mb-2">
                  Évolution des modèles
                </h3>
                <p className="text-slate-700">
                  Suivi longitudinal des changements de comportement à chaque mise à jour majeure des LLMs
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Independence Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[1680px] mx-auto px-8">
          <div className="max-w-4xl">
            <h2 className="text-4xl font-bold text-slate-900 mb-8">
              Indépendance de la recherche
            </h2>
            <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
              <p>
                Le soutien financier de TANSE garantit notre indépendance vis-à-vis des éditeurs de modèles d'IA. Nous publions nos résultats sans validation préalable, y compris quand ils révèlent des biais ou des limites des systèmes actuels.
              </p>
              <p>
                Cette indépendance est essentielle : nos recherches servent autant TANSE que la communauté scientifique et le débat public sur l'accès à l'information à l'ère de l'IA générative.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Publications CTA */}
      <section className="py-16 bg-[#444684]">
        <div className="max-w-[1680px] mx-auto px-8">
          <div className="max-w-4xl">
            <div className="text-white">
              <h2 className="text-4xl font-bold mb-6">
                Accès aux publications
              </h2>
              <div className="space-y-4 text-lg leading-relaxed mb-8">
                <p className="text-white/90">
                  Nos rapports trimestriels analysent l'évolution des modèles d'IA et documentent les changements de comportement. Tous nos travaux sont publiés en open access.
                </p>
                <div className="flex items-center gap-6 pt-4">
                  <div className="flex items-center gap-2">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <span className="text-white/90">Publications trimestrielles</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <span className="text-white/90">Accès gratuit</span>
                  </div>
                </div>
              </div>
              <a
                href="https://www.okurai.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-[#444684] px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors"
              >
                Consulter nos recherches
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                  <polyline points="15 3 21 3 21 9"/>
                  <line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TANSE Services Section */}
      <section className="py-16 bg-[#E4E4E4]">
        <div className="max-w-[1680px] mx-auto px-8">
          <div className="max-w-4xl">
            <h2 className="text-4xl font-bold text-slate-900 mb-8">
              Services TANSE
            </h2>
            <div className="space-y-6 text-lg text-slate-700 leading-relaxed mb-8">
              <p>
                TANSE applique nos recherches pour optimiser la visibilité de ses clients sur les moteurs d'IA générative. Leurs services s'adressent aux professionnels qui cherchent à être visibles quand leurs prospects utilisent ChatGPT, Claude ou Perplexity.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border-2 border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Offre d'audit
              </h3>
              <p className="text-slate-700 leading-relaxed mb-6">
                Un audit gratuit révèle la présence (ou l'absence) d'une entreprise dans les réponses des principaux moteurs d'IA pour les requêtes clés de son secteur.
              </p>
              <div className="flex gap-4">
                <Link
                  href="/audit-offert"
                  className="inline-block bg-[#444684] text-white px-6 py-3 rounded-lg font-bold hover:brightness-110 transition-all"
                >
                  Demander un audit
                </Link>
                <Link
                  href="/forfaits-geo-seo"
                  className="inline-block border-2 border-[#444684] text-[#444684] px-6 py-3 rounded-lg font-bold hover:bg-[#444684] hover:text-white transition-all"
                >
                  Voir les forfaits
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Note */}
      <section className="py-12 bg-white">
        <div className="max-w-[1680px] mx-auto px-8">
          <div className="max-w-4xl">
            <div className="border-l-4 border-[#444684] pl-6">
              <p className="text-slate-700 leading-relaxed italic">
                Le soutien de TANSE permet à OkurAI de maintenir son indépendance de recherche tout en garantissant que nos travaux répondent aux besoins réels des entreprises françaises face aux moteurs d'IA générative.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
