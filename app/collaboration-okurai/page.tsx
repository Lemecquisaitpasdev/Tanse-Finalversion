// DESIGN TOKENS TANSE
//
// Typography:
// - H1: text-5xl md:text-6xl lg:text-7xl font-bold leading-tight
// - H2: text-4xl font-bold
// - H3: text-2xl font-semibold
// - Body large: text-xl md:text-2xl leading-relaxed
// - Body standard: text-lg leading-relaxed
//
// Colors:
// - Primary: #444684
// - Gradient: from-[#667eea] to-[#764ba2]
// - Background: #fafafa / #E4E4E4
// - Text primary: text-slate-900
// - Text secondary: text-slate-700
// - Text tertiary: text-slate-600

import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: "TANSE × OkurAI | Collaboration Recherche GEO et IA Générative",
  description: "TANSE collabore avec OkurAI, institut de recherche français spécialisé dans l'étude des modèles d'IA générative et leur impact sur l'information.",
  openGraph: {
    title: "TANSE × OkurAI | Collaboration Recherche GEO et IA Générative",
    description: "Partenariat stratégique entre TANSE et OkurAI pour l'optimisation de la visibilité sur les moteurs IA.",
    url: 'https://www.tanse.fr/collaboration-okurai',
    siteName: 'TANSE',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "TANSE × OkurAI | Collaboration Recherche GEO",
    description: "Partenariat stratégique pour l'optimisation sur les moteurs IA génératifs.",
  },
};

export default function CollaborationOkurAIPage() {
  return (
    <main className="bg-[#fafafa]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white py-24 px-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_50%)]"></div>

        <div className="relative mx-auto w-full max-w-7xl">
          {/* Logo Partnership */}
          <div className="mb-12 flex justify-center">
            <div className="bg-white/95 backdrop-blur-sm px-8 py-5 rounded-2xl shadow-lg">
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
                    <path d="M8 8 L16 4 L24 8" stroke="#17B8BE" strokeWidth="3" strokeLinecap="round"/>
                    <path d="M8 16 L16 12 L24 16" stroke="#17B8BE" strokeWidth="3" strokeLinecap="round"/>
                    <path d="M8 24 L16 20 L24 24" stroke="#17B8BE" strokeWidth="3" strokeLinecap="round"/>
                  </svg>
                  <span className="text-2xl font-semibold text-slate-900">OkurAI</span>
                </div>
              </div>
            </div>
          </div>

          {/* Title */}
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Collaboration avec OkurAI
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Institut de recherche français spécialisé dans l'étude des modèles d'IA générative
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <h2 className="text-4xl font-bold text-slate-900 mb-8">
              Pourquoi cette collaboration
            </h2>
            <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
              <p>
                En tant que première agence française spécialisée en Generative Engine Optimization, TANSE a identifié un besoin critique : comprendre en profondeur le fonctionnement des modèles d'IA pour optimiser efficacement la visibilité de nos clients.
              </p>
              <p>
                OkurAI, institut de recherche indépendant basé à Paris, analyse depuis 2023 les comportements des grands modèles de langage (ChatGPT, Claude, Perplexity, Gemini) et leur impact sur l'accès à l'information. Cette expertise nous apporte les données scientifiques nécessaires pour affiner nos stratégies GEO.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise OkurAI Section */}
      <section className="py-16 bg-[#E4E4E4]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <h2 className="text-4xl font-bold text-slate-900 mb-8">
              L'expertise d'OkurAI
            </h2>
            <div className="space-y-6 text-lg text-slate-700 leading-relaxed mb-8">
              <p>
                OkurAI mène des recherches sur trois axes principaux qui alimentent directement notre méthodologie :
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-[#444684]/10 rounded-full flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#444684]">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                    <line x1="12" y1="22.08" x2="12" y2="12"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Sources citées
                </h3>
                <p className="text-slate-600">
                  Analyse des sources que les modèles privilégient dans leurs réponses
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-[#444684]/10 rounded-full flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#444684]">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
                    <line x1="9" y1="9" x2="9.01" y2="9"/>
                    <line x1="15" y1="9" x2="15.01" y2="9"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Biais sectoriels
                </h3>
                <p className="text-slate-600">
                  Identification des secteurs sur ou sous-représentés
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-[#444684]/10 rounded-full flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#444684]">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                    <polyline points="10 9 9 9 8 9"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Formats optimaux
                </h3>
                <p className="text-slate-600">
                  Étude des structures de contenu les plus efficaces
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <h2 className="text-4xl font-bold text-slate-900 mb-8">
              Bénéfices pour nos clients
            </h2>
            <div className="space-y-6 text-lg text-slate-700 leading-relaxed mb-8">
              <p>
                Cette collaboration nous permet d'offrir à nos clients des stratégies GEO basées sur des données scientifiques :
              </p>
            </div>

            <div className="bg-gradient-to-r from-[#667eea] to-[#764ba2] p-8 rounded-2xl text-white">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="flex-shrink-0 mt-1">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span>Accès aux dernières recherches sur les comportements des LLMs avant leur publication publique</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="flex-shrink-0 mt-1">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span>Optimisations basées sur l'analyse de plus de 30 modèles d'IA différents</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="flex-shrink-0 mt-1">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span>Stratégies adaptées aux évolutions des modèles (mises à jour mensuelles)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="flex-shrink-0 mt-1">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span>Méthodologie validée par des analyses terrain sur des milliers d'entreprises</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Data Exchange Section */}
      <section className="py-16 bg-[#E4E4E4]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <h2 className="text-4xl font-bold text-slate-900 mb-8">
              Échange de données
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="w-16 h-16 bg-[#444684] rounded-full flex items-center justify-center mb-6">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                    <line x1="12" y1="22.08" x2="12" y2="12"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                  OkurAI → TANSE
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Nous recevons les données de recherche d'OkurAI sur les patterns de citation, les sources privilégiées et les biais sectoriels. Ces insights informent directement nos stratégies d'optimisation pour nos clients.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="w-16 h-16 bg-[#444684] rounded-full flex items-center justify-center mb-6">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <line x1="12" y1="18" x2="12" y2="12"/>
                    <line x1="9" y1="15" x2="15" y2="15"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                  TANSE → OkurAI
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Nous partageons nos données terrain sur la visibilité réelle des entreprises dans les réponses IA. Ces cas pratiques permettent à OkurAI de valider leurs hypothèses et d'enrichir leurs recherches.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <h2 className="text-4xl font-bold text-slate-900 mb-8">
              Impact mesurable
            </h2>
            <div className="space-y-6 text-lg text-slate-700 leading-relaxed mb-8">
              <p>
                Depuis le début de cette collaboration, nos clients bénéficient d'une amélioration moyenne de leur visibilité de :
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-br from-[#667eea] to-[#764ba2] p-6 rounded-xl text-white text-center">
                <div className="text-5xl font-bold mb-2">+240%</div>
                <div className="text-white/90">Visibilité ChatGPT</div>
              </div>
              <div className="bg-gradient-to-br from-[#667eea] to-[#764ba2] p-6 rounded-xl text-white text-center">
                <div className="text-5xl font-bold mb-2">+185%</div>
                <div className="text-white/90">Citations Perplexity</div>
              </div>
              <div className="bg-gradient-to-br from-[#667eea] to-[#764ba2] p-6 rounded-xl text-white text-center">
                <div className="text-5xl font-bold mb-2">+310%</div>
                <div className="text-white/90">Présence Claude</div>
              </div>
            </div>

            <div className="bg-[#E4E4E4] p-6 rounded-xl">
              <p className="text-slate-700 leading-relaxed">
                Ces résultats sont mesurés sur une période de 3 mois après la mise en place de nos optimisations GEO, sur un échantillon de 127 entreprises clientes entre septembre et novembre 2024.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Link Section */}
      <section className="py-16 bg-[#E4E4E4]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <h2 className="text-4xl font-bold text-slate-900 mb-8">
              Accès aux recherches
            </h2>
            <div className="space-y-6 text-lg text-slate-700 leading-relaxed mb-8">
              <p>
                Les recherches d'OkurAI sont publiées sur leur site et mises à jour régulièrement. Ils analysent l'évolution des modèles d'IA et publient des rapports trimestriels sur les tendances de citation et les changements de comportement des LLMs.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-[#444684]">
              <p className="text-slate-700 leading-relaxed mb-6">
                Pour suivre leurs travaux et comprendre comment les moteurs d'IA évoluent :
              </p>
              <a
                href="https://www.okurai.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#444684] text-white px-6 py-3 rounded-lg font-semibold hover:brightness-110 transition-all"
              >
                Visiter OkurAI
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

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#667eea] to-[#764ba2]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Testez votre visibilité IA
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Découvrez comment votre entreprise apparaît (ou n'apparaît pas) dans les réponses de ChatGPT, Claude et Perplexity
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/audit-offert"
                className="inline-block bg-white text-[#444684] px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
              >
                Audit gratuit
              </Link>
              <Link
                href="/forfaits-geo-seo"
                className="inline-block bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/30 transition-colors border-2 border-white/50"
              >
                Nos forfaits GEO
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Note */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <div className="border-l-4 border-[#444684] pl-6">
              <p className="text-slate-600 leading-relaxed italic">
                TANSE soutient financièrement et techniquement le développement d'OkurAI. Cette collaboration garantit que nos stratégies GEO restent à la pointe des évolutions de l'IA, au bénéfice direct de nos clients.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
