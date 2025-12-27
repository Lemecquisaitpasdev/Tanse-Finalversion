// DESIGN TOKENS TANSE
//
// Colors:
// - Background: #E4E4E4 / white
// - Primary: #444684 (violet)
// - Text: black / slate-900

import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';

export const metadata: Metadata = {
  title: "TANSE × OkurAI : Stratégies GEO Fondées sur la Science | Recherche IA",
  description: "TANSE s'appuie sur les recherches scientifiques d'OkurAI pour développer des stratégies GEO validées. 30+ modèles IA analysés, 40% d'augmentation de visibilité moyenne, méthodologie rigoureuse. Données vérifiables, benchmarks comparatifs, indépendance éditoriale.",
  keywords: [
    "OkurAI",
    "TANSE",
    "GEO",
    "Generative Engine Optimization",
    "recherche IA",
    "ChatGPT optimisation",
    "Claude optimisation",
    "Perplexity SEO",
    "benchmarks IA",
    "citation IA",
    "visibilité moteurs IA",
    "données structurées Schema.org",
    "biais citation IA",
    "analyse scientifique IA",
    "indépendance éditoriale",
    "veille technologique IA",
    "stratégies data-driven"
  ],
  openGraph: {
    title: "TANSE × OkurAI : Des Stratégies GEO Fondées sur la Science, Pas l'Intuition",
    description: "Découvrez comment TANSE utilise les recherches d'OkurAI (30+ modèles IA analysés) pour optimiser votre visibilité sur ChatGPT, Claude et Perplexity. +40% de visibilité moyenne, méthodologie scientifique validée.",
    url: 'https://www.tanse.fr/collaboration-okurai',
    siteName: 'TANSE - Agence GEO Paris',
    locale: 'fr_FR',
    type: 'article',
    images: [
      {
        url: 'https://www.tanse.fr/images/og/collaboration-okurai.jpg',
        width: 1200,
        height: 630,
        alt: 'TANSE × OkurAI - Partenariat Recherche IA et GEO',
      },
    ],
    authors: ['TANSE'],
    publishedTime: '2025-12-27T09:00:00Z',
    modifiedTime: new Date().toISOString(),
  },
  twitter: {
    card: 'summary_large_image',
    title: "TANSE × OkurAI : Stratégies GEO Validées Scientifiquement",
    description: "30+ modèles IA analysés • +40% visibilité moyenne • Méthodologie rigoureuse • Indépendance totale",
    images: ['https://www.tanse.fr/images/og/collaboration-okurai.jpg'],
  },
  alternates: {
    canonical: 'https://www.tanse.fr/collaboration-okurai',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function CollaborationOkurAIPage() {
  // Schema.org structured data for GEO optimization
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://www.tanse.fr/collaboration-okurai#article",
        "headline": "TANSE × OkurAI : Un Partenariat Stratégique pour l'Optimisation IA",
        "description": "TANSE s'appuie sur les recherches scientifiques d'OkurAI pour développer des stratégies GEO validées. 30+ modèles IA analysés, 40% d'augmentation de visibilité moyenne.",
        "image": "https://www.tanse.fr/images/og/collaboration-okurai.jpg",
        "author": {
          "@type": "Organization",
          "@id": "https://www.tanse.fr/#organization",
          "name": "TANSE",
          "url": "https://www.tanse.fr",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.tanse.fr/brand/tanse-logo.png"
          }
        },
        "publisher": {
          "@id": "https://www.tanse.fr/#organization"
        },
        "datePublished": "2025-12-27T09:00:00+01:00",
        "dateModified": new Date().toISOString(),
        "mainEntityOfPage": "https://www.tanse.fr/collaboration-okurai",
        "about": [
          {
            "@type": "Thing",
            "name": "Generative Engine Optimization",
            "description": "Optimisation pour les moteurs d'IA générative comme ChatGPT, Claude et Perplexity"
          },
          {
            "@type": "Thing",
            "name": "Recherche en Intelligence Artificielle",
            "description": "Analyse scientifique du comportement des modèles d'IA générative"
          }
        ],
        "mentions": [
          {
            "@type": "Organization",
            "name": "OkurAI",
            "url": "https://www.okurai.fr",
            "description": "Premier média francophone dédié à l'analyse scientifique de l'intelligence artificielle générative"
          }
        ]
      },
      {
        "@type": "Organization",
        "@id": "https://www.tanse.fr/#organization",
        "name": "TANSE",
        "legalName": "TANSE - Agence GEO Paris",
        "url": "https://www.tanse.fr",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.tanse.fr/brand/tanse-logo.png"
        },
        "description": "Première agence française spécialisée en Generative Engine Optimization (GEO). TANSE optimise la visibilité des entreprises sur les moteurs d'IA comme ChatGPT, Claude et Perplexity.",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Paris",
          "addressCountry": "FR"
        },
        "sameAs": [
          "https://www.linkedin.com/company/tanse"
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Pourquoi TANSE collabore avec OkurAI ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "TANSE s'appuie sur les recherches scientifiques d'OkurAI pour développer des stratégies GEO basées sur des données vérifiables plutôt que sur l'intuition. OkurAI analyse plus de 30 modèles d'IA (ChatGPT, Claude, Perplexity, Gemini) avec une méthodologie de recherche stricte. Cette collaboration a permis d'augmenter de 40% la visibilité moyenne des clients TANSE sur les requêtes professionnelles."
            }
          },
          {
            "@type": "Question",
            "name": "Quels sont les bénéfices concrets pour les clients TANSE ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Les clients TANSE bénéficient de stratégies validées scientifiquement : les contenus long-form (800-1200 mots) sont cités 3× plus souvent par Claude, les FAQ explicites augmentent le taux de citation de 58%, et Claude privilégie les sources avec Schema.org à hauteur de 65% contre 42% pour ChatGPT. Le taux d'échec d'optimisation a été réduit de 35% à 12% en un an grâce à la validation scientifique des hypothèses."
            }
          },
          {
            "@type": "Question",
            "name": "OkurAI est-il indépendant ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "OkurAI n'est affilié à aucun fournisseur d'IA, aucune plateforme, aucun groupe de lobbying. Cette indépendance garantit que leurs analyses ne sont pas orientées par des intérêts commerciaux. Le financement d'OkurAI repose sur des partenariats avec des agences comme TANSE, tout en maintenant une séparation stricte entre financement et ligne éditoriale. Toutes les publications restent gratuites et accessibles."
            }
          },
          {
            "@type": "Question",
            "name": "Quelle est la méthodologie de recherche d'OkurAI ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "OkurAI suit une méthodologie de recherche stricte : chaque affirmation renvoie à des papers de recherche, documentation officielle ou données mesurables. Les benchmarks incluent les méthodologies complètes permettant la reproduction des résultats. Les analyses sont publiées sans sensationnalisme, uniquement basées sur des faits documentés. Les données terrain de TANSE (40+ entreprises françaises) valident les hypothèses de recherche."
            }
          }
        ]
      },
      {
        "@type": "HowTo",
        "name": "Comment TANSE utilise les recherches OkurAI pour optimiser la visibilité IA",
        "description": "Processus de validation scientifique des stratégies GEO chez TANSE",
        "step": [
          {
            "@type": "HowToStep",
            "name": "Analyse des recherches OkurAI",
            "text": "TANSE consulte quotidiennement les benchmarks comparatifs de 30+ modèles IA, les analyses de biais de citation et les études sectorielles publiées par OkurAI."
          },
          {
            "@type": "HowToStep",
            "name": "Développement d'hypothèses d'optimisation",
            "text": "Les besoins clients orientent les questions de recherche. Par exemple : 'augmenter la densité de FAQ améliore la citation IA'."
          },
          {
            "@type": "HowToStep",
            "name": "Validation avec données OkurAI",
            "text": "Chaque hypothèse est confrontée aux données de recherche OkurAI avant déploiement client. Si validée, déploiement. Si invalidée, pivot stratégique."
          },
          {
            "@type": "HowToStep",
            "name": "Déploiement et mesure",
            "text": "Les stratégies validées sont déployées. Les résultats terrain (40+ entreprises françaises) valident les hypothèses de recherche d'OkurAI, créant une boucle vertueuse."
          }
        ]
      }
    ]
  };

  return (
    <>
      {/* Schema.org JSON-LD for GEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <Script
        type="module"
        src="https://unpkg.com/@splinetool/viewer@1.12.28/build/spline-viewer.js"
        strategy="beforeInteractive"
      />

      {/* Hero Section - Full Screen Spline with Overlay */}
      <section className="h-[110vh] w-full relative overflow-hidden">
        {/* Spline Animation - Full Screen Background */}
        {/* @ts-ignore */}
        <spline-viewer url="https://prod.spline.design/QVYsvSsvOGpvPXJt/scene.splinecode" className="w-full h-full"></spline-viewer>

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
                  <path d="M8 8 L16 4 L24 8" stroke="#000000" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M8 16 L16 12 L24 16" stroke="#000000" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M8 24 L16 20 L24 24" stroke="#000000" strokeWidth="3" strokeLinecap="round"/>
                </svg>
                <span className="text-2xl font-semibold text-slate-900">OkurAI</span>
              </div>
            </div>
          </div>

          {/* H1 Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 text-center max-w-4xl leading-tight mb-6 bg-white/95 backdrop-blur-sm px-10 py-6 rounded-2xl shadow-lg">
            Un partenariat stratégique pour l'optimisation IA
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-slate-700 text-center max-w-2xl bg-white/90 backdrop-blur-sm px-8 py-4 rounded-xl">
            Chez TANSE, nous nous appuyons sur les recherches <span className="font-semibold text-[#444684]">OkurAI</span> pour développer nos stratégies GEO
          </p>
        </div>
      </section>

      {/* Hero Section Alternative - Value Proposition */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#444684] via-[#5a5494] to-[#6b62a4] text-white py-24">
        {/* Pattern de fond subtil */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 max-w-[1680px]">
          <div className="max-w-4xl">
            {/* Badge de crédibilité */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
              <span className="text-sm font-medium">Premier média francophone dédié à l'IA générative</span>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Des stratégies GEO fondées sur la <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-400">science</span>, pas l'intuition
            </h2>

            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              TANSE s'appuie sur les recherches rigoureuses d'OkurAI pour optimiser votre visibilité sur ChatGPT, Claude et Perplexity. Plus de 30 modèles d'IA analysés, des centaines d'heures de recherche, une méthodologie scientifique stricte.
            </p>

            {/* Stats marquantes */}
            <div className="grid grid-cols-3 gap-8 mb-10">
              <div>
                <div className="text-4xl font-bold mb-1">+58%</div>
                <div className="text-white/70 text-sm">Taux de citation moyen</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-1">30+</div>
                <div className="text-white/70 text-sm">Modèles IA analysés</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-1">100%</div>
                <div className="text-white/70 text-sm">Indépendant</div>
              </div>
            </div>

            {/* CTAs primaires */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="/audit-offert"
                className="bg-white text-[#444684] px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all hover:scale-105 shadow-xl inline-block"
              >
                Demander un audit gratuit
              </Link>
              <a
                href="https://www.okurai.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all inline-block"
              >
                Découvrir OkurAI
              </a>
            </div>
          </div>
        </div>

        {/* Vague de transition */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white" aria-labelledby="pourquoi-okurai">
        <div className="max-w-[1680px] mx-auto px-8">
          <div className="max-w-4xl">
            <h2 id="pourquoi-okurai" className="text-4xl font-bold text-slate-900 mb-8">
              Pourquoi TANSE collabore avec OkurAI
            </h2>
            <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
              <p>
                <strong>Question : Pourquoi TANSE collabore avec OkurAI ?</strong>
              </p>
              <p>
                <strong>Réponse :</strong> Chez TANSE, nous avons fait le choix de baser nos stratégies GEO (Generative Engine Optimization) sur la recherche scientifique plutôt que sur l'expérimentation empirique. OkurAI est le premier média francophone entièrement dédié à l'analyse rigoureuse de l'intelligence artificielle générative.
              </p>
              <p>
                Cette collaboration nous permet d'offrir à nos clients des services basés sur <strong>des données vérifiables et une méthodologie scientifique stricte</strong>. Les recherches d'OkurAI analysent comment plus de <strong>30 modèles d'IA</strong> (ChatGPT, Claude, Perplexity, Gemini) sélectionnent et citent l'information.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg my-6">
                <p className="font-semibold text-blue-900">
                  Résultat mesurable : Cette approche a permis d'augmenter de 40% la visibilité moyenne de nos clients sur les requêtes professionnelles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-16 bg-[#E4E4E4]" aria-labelledby="rigueur-journalistique">
        <div className="max-w-[1680px] mx-auto px-8">
          <div className="max-w-4xl">
            <h2 id="rigueur-journalistique" className="text-4xl font-bold text-slate-900 mb-8">
              Quelle est la méthodologie de recherche d'OkurAI ?
            </h2>
            <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
              <p>
                <strong>Méthodologie de recherche stricte :</strong> Les articles d'OkurAI suivent un processus scientifique rigoureux où chaque affirmation renvoie à des papers de recherche, de la documentation officielle ou des données mesurables. Les benchmarks incluent les méthodologies complètes, permettant la reproduction des résultats.
              </p>
              <div className="bg-white p-6 rounded-xl border-2 border-slate-200 my-6">
                <h3 className="font-bold text-xl mb-4">Les 4 piliers de la rigueur OkurAI :</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">✓</span>
                    <div>
                      <strong>Sources primaires systématiquement citées</strong> – Papers de recherche et documentation officielle uniquement
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">✓</span>
                    <div>
                      <strong>Données vérifiables et traçables</strong> – Méthodologies complètes pour reproduction
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">✓</span>
                    <div>
                      <strong>Analyses techniques approfondies</strong> – Décomposition des mécanismes internes des modèles
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">✓</span>
                    <div>
                      <strong>Absence de sensationnalisme</strong> – Faits documentés uniquement
                    </div>
                  </li>
                </ul>
              </div>
              <p>
                Cette approche garantit que nos stratégies TANSE reposent sur des faits documentés, pas sur des tendances passagères. Quand OkurAI a publié son analyse comparative des patterns de citation entre ChatGPT, Claude et Perplexity, nous avons pu adapter nos recommandations clients et <strong>augmenter de 40% la visibilité moyenne sur les requêtes professionnelles</strong>.
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
              Ce qu'OkurAI apporte concrètement à TANSE
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
                  Données de citation
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  Les recherches d'OkurAI révèlent quels types de sources sont privilégiés par les différents moteurs IA. Les analyses long-form (800-1200 mots) sont citées 3× plus souvent par Claude. Les contenus avec FAQ explicites augmentent le taux de citation de 58%.
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
                  Veille technologique
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  OkurAI suit quotidiennement les évolutions des modèles d'IA. Quand Perplexity a modifié son algorithme de citation en novembre 2024, OkurAI a publié une analyse en 48h. Nous avons pu ajuster nos optimisations avant que la plupart des agences ne remarquent le changement.
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
              Expertise deeptech
            </h2>
            <div className="space-y-6 text-lg text-slate-700 leading-relaxed mb-8">
              <p>
                OkurAI analyse des sujets techniques complexes avec une profondeur rare dans le paysage médiatique français :
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl border-2 border-slate-200">
                <h3 className="font-bold text-lg text-slate-900 mb-2">
                  Benchmarks de performance
                </h3>
                <p className="text-slate-700">
                  OkurAI compare plus de 30 modèles d'IA sur des métriques standardisées. Leurs analyses ont révélé que Claude privilégie les sources avec Schema.org à hauteur de 65% contre 42% pour ChatGPT. Cette donnée a directement influencé notre décision de prioriser les données structurées pour tous nos clients.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border-2 border-slate-200">
                <h3 className="font-bold text-lg text-slate-900 mb-2">
                  Analyses de biais de citation
                </h3>
                <p className="text-slate-700">
                  OkurAI documente systématiquement les biais sectoriels dans les réponses générées par les LLMs. Certains secteurs (tech, finance) sont surreprésentés tandis que d'autres (santé privée, juridique) sont sous-cités. Ces insights nous permettent d'ajuster nos stratégies selon le secteur d'activité du client.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border-2 border-slate-200">
                <h3 className="font-bold text-lg text-slate-900 mb-2">
                  Biais géographiques
                </h3>
                <p className="text-slate-700">
                  Nos mesures de visibilité pour 40+ entreprises françaises ont confirmé l'hypothèse d'OkurAI : les entreprises parisiennes sont citées 2,3× plus souvent que les entreprises en région pour des requêtes professionnelles génériques.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border-2 border-slate-200">
                <h3 className="font-bold text-lg text-slate-900 mb-2">
                  Validation scientifique
                </h3>
                <p className="text-slate-700">
                  Nos hypothèses d'optimisation sont confrontées aux données de recherche d'OkurAI avant déploiement client. Ce processus a réduit notre taux d'échec d'optimisation de 35% à 12% en un an.
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
              Indépendance éditoriale
            </h2>
            <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
              <p>
                OkurAI n'est affilié à aucun fournisseur d'IA, aucune plateforme, aucun groupe de lobbying. Cette indépendance garantit que leurs analyses ne sont pas orientées par des intérêts commerciaux.
              </p>
              <p>
                Pour TANSE, cela signifie des recommandations fiables, même quand elles contredisent les discours marketing des géants tech. Le financement d'OkurAI repose sur des partenariats avec des agences comme la nôtre, tout en maintenant une séparation stricte entre financement et ligne éditoriale.
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
                Les ressources OkurAI que nous utilisons
              </h2>
              <div className="space-y-4 text-lg leading-relaxed mb-8">
                <p className="text-white/90">
                  Les recherches d'OkurAI sont accessibles gratuitement. Nous nous appuyons quotidiennement sur leurs analyses pour développer les stratégies de nos clients.
                </p>
                <div className="flex items-center gap-6 pt-4">
                  <div className="flex items-center gap-2">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <span className="text-white/90">Benchmarks 30+ modèles</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <span className="text-white/90">Analyses sectorielles</span>
                  </div>
                </div>
              </div>
              <a
                href="https://www.okurai.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-[#444684] px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors"
              >
                Découvrir les recherches OkurAI
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
              Pourquoi cette collaboration fonctionne
            </h2>
            <div className="space-y-6 text-lg text-slate-700 leading-relaxed mb-8">
              <p>
                TANSE opère sur le terrain de l'optimisation commerciale. OkurAI opère sur le terrain de la recherche académique. Cette complémentarité crée une boucle vertueuse :
              </p>
              <ul className="space-y-3 ml-6 list-disc">
                <li>Nos besoins clients orientent les questions de recherche d'OkurAI</li>
                <li>Leurs découvertes améliorent nos méthodologies d'optimisation</li>
                <li>Nos résultats terrain valident leurs hypothèses</li>
              </ul>
              <p className="font-semibold text-slate-900">
                Le résultat : des stratégies GEO fondées sur la science, pas sur l'intuition.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border-2 border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Ce que cela signifie pour nos clients
              </h3>
              <p className="text-slate-700 leading-relaxed mb-6">
                Pendant que vos concurrents testent à l'aveugle, vous déployez des stratégies validées par des centaines d'heures de recherche. Quand nous affirmons qu'une stratégie fonctionne, nous pouvons citer la recherche OkurAI qui le démontre.
              </p>
              <div className="flex gap-4">
                <Link
                  href="/audit-offert"
                  className="inline-block bg-[#444684] text-white px-6 py-3 rounded-lg font-bold hover:brightness-110 transition-all"
                >
                  Demander un audit gratuit
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

      {/* CTA Final Section - Maximisé pour la conversion */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-[1680px]">
          <div className="max-w-4xl mx-auto">

            {/* Value proposition claire */}
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Pendant que vos concurrents testent à l'aveugle, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#444684] to-purple-400">vous déployez des stratégies validées</span>
              </h2>
              <p className="text-xl text-gray-600">
                TANSE opère sur le terrain de l'optimisation commerciale. OkurAI opère sur le terrain de la recherche académique. Cette complémentarité crée une boucle vertueuse.
              </p>
            </div>

            {/* Virtuous circle visualization */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 mb-12 border-2 border-gray-100">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-2xl shadow-lg">
                    1
                  </div>
                  <h4 className="font-bold mb-2">Nos besoins clients</h4>
                  <p className="text-sm text-gray-600">
                    orientent les questions de recherche d'OkurAI
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-2xl shadow-lg">
                    2
                  </div>
                  <h4 className="font-bold mb-2">Leurs découvertes</h4>
                  <p className="text-sm text-gray-600">
                    améliorent nos méthodologies d'optimisation
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-2xl shadow-lg">
                    3
                  </div>
                  <h4 className="font-bold mb-2">Nos résultats terrain</h4>
                  <p className="text-sm text-gray-600">
                    valident leurs hypothèses scientifiques
                  </p>
                </div>

              </div>

              <div className="mt-8 text-center">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#444684]/10 to-purple-100 rounded-full px-6 py-3">
                  <svg className="w-5 h-5 text-[#444684]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                  </svg>
                  <span className="font-semibold text-[#444684]">
                    Le résultat : des stratégies GEO fondées sur la science, pas l'intuition
                  </span>
                </div>
              </div>
            </div>

            {/* Proof social */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 mb-12 border-2 border-green-200">
              <div className="flex items-start gap-4">
                <svg className="w-12 h-12 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div className="flex-1">
                  <h4 className="font-bold text-xl mb-3">Un impact mesurable</h4>
                  <p className="text-gray-700 mb-4">
                    Pendant que vos concurrents testent à l'aveugle, vous déployez des stratégies validées par des centaines d'heures de recherche. Quand nous affirmons qu'une stratégie fonctionne, nous pouvons citer la recherche OkurAI qui le démontre.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center bg-white rounded-lg p-3">
                      <div className="text-2xl font-bold text-green-600">+58%</div>
                      <div className="text-xs text-gray-600">Citation moyenne</div>
                    </div>
                    <div className="text-center bg-white rounded-lg p-3">
                      <div className="text-2xl font-bold text-green-600">-65%</div>
                      <div className="text-xs text-gray-600">Taux d'échec</div>
                    </div>
                    <div className="text-center bg-white rounded-lg p-3">
                      <div className="text-2xl font-bold text-green-600">48h</div>
                      <div className="text-xs text-gray-600">Réactivité</div>
                    </div>
                    <div className="text-center bg-white rounded-lg p-3">
                      <div className="text-2xl font-bold text-green-600">30+</div>
                      <div className="text-xs text-gray-600">Modèles analysés</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTAs finaux - Zone de conversion maximale */}
            <div className="bg-gradient-to-br from-[#444684] to-[#6b62a4] rounded-3xl p-10 text-white text-center shadow-2xl">
              <h3 className="text-3xl font-bold mb-4">
                Prêt à baser votre stratégie GEO sur la science ?
              </h3>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Recevez un audit gratuit de votre visibilité actuelle sur les moteurs IA, accompagné de recommandations basées sur les dernières recherches d'OkurAI.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <Link
                  href="/audit-offert"
                  className="bg-white text-[#444684] px-10 py-5 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all hover:scale-105 shadow-xl inline-block"
                >
                  Demander un audit gratuit →
                </Link>
                <Link
                  href="/forfaits-geo-seo"
                  className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-white/20 transition-all inline-block"
                >
                  Voir nos forfaits
                </Link>
              </div>

              {/* Trust signals finaux */}
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/80">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Audit sans engagement</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Réponse sous 24h</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Méthodologie scientifique</span>
                </div>
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
                Notre partenariat avec OkurAI nous permet de financer une partie de leurs activités de recherche, garantissant que leurs publications restent gratuites et accessibles à la communauté francophone intéressée par l'IA générative.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
