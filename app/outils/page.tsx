import type { Metadata } from 'next';
import OutilsHero from '../components/outils/OutilsHero';
import OutilCard from '../components/outils/OutilCard';

export const metadata: Metadata = {
  title: 'Outils GEO Gratuits | TANSE - Optimisez votre Visibilité IA',
  description:
    'Testez votre visibilité sur ChatGPT, Claude et Perplexity gratuitement. Outils GEO : Score GEO, Audit Gratuit, Prompt Tracker. Analyse instantanée en 30 secondes.',
  keywords: [
    'outils GEO',
    'score GEO',
    'audit GEO gratuit',
    'visibilité IA',
    'ChatGPT',
    'Claude',
    'Perplexity',
    'TANSE',
    'Generative Engine Optimization',
  ],
  openGraph: {
    title: 'Outils GEO Gratuits | TANSE',
    description: 'Mesurez votre visibilité sur les moteurs IA en 30 secondes',
    type: 'website',
    url: 'https://www.tanse.fr/outils',
  },
};

/**
 * Outils Page - REAL diabrowser.com inspired design
 * Features: Gradient halos, typewriter animation, generous spacing (96-140px)
 */
export default function OutilsPage() {
  const outils = [
    {
      icon: '📊',
      title: 'GEO Score',
      description:
        'Évaluez instantanément votre visibilité sur ChatGPT, Claude et Perplexity. Score détaillé avec recommandations personnalisées.',
      href: '/geo-score',
    },
    {
      icon: '🔍',
      title: 'Audit Gratuit',
      description:
        'Analyse complète de votre stratégie GEO. Identifiez vos forces, faiblesses et opportunités d\'optimisation en 5 minutes.',
      href: '/audit-gratuit',
    },
    {
      icon: '⚡',
      title: 'Prompt Tracker',
      description:
        'Suivez les prompts qui mentionnent votre marque sur les moteurs IA. Détectez les opportunités et surveillez votre e-réputation.',
      href: '/prompt-tracker',
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <OutilsHero />

      {/* Tools Section - diabrowser generous spacing (py-32) */}
      <section
        className="relative py-32 md:py-40 px-6"
        style={{
          background: 'linear-gradient(180deg, #F5F4F1 0%, #FEFEFE 100%)',
        }}
      >
        <div className="container mx-auto max-w-7xl">
          {/* Section Title */}
          <div className="mb-24 text-center">
            <p className="text-xl md:text-2xl text-gray-600 mb-8">Ou choisissez un outil spécifique</p>
            <div className="mx-auto h-px w-32 bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
          </div>

          {/* Tools Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {outils.map((outil, index) => (
              <OutilCard
                key={outil.href}
                icon={outil.icon}
                title={outil.title}
                description={outil.description}
                href={outil.href}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Trust Signals - diabrowser generous spacing */}
      <section className="relative py-32 md:py-40 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-16 md:grid-cols-3 text-center">
            <div className="group">
              <div
                className="text-6xl md:text-7xl font-[800] text-black mb-6 transition-all duration-300 group-hover:scale-105"
                style={{ letterSpacing: '-0.04em' }}
              >
                30s
              </div>
              <p className="text-gray-600 text-lg md:text-xl">Temps d'analyse</p>
            </div>
            <div className="group">
              <div
                className="text-6xl md:text-7xl font-[800] text-black mb-6 transition-all duration-300 group-hover:scale-105"
                style={{ letterSpacing: '-0.04em' }}
              >
                100%
              </div>
              <p className="text-gray-600 text-lg md:text-xl">Gratuit & sans engagement</p>
            </div>
            <div className="group">
              <div
                className="text-6xl md:text-7xl font-[800] text-black mb-6 transition-all duration-300 group-hover:scale-105"
                style={{ letterSpacing: '-0.04em' }}
              >
                1000+
              </div>
              <p className="text-gray-600 text-lg md:text-xl">Sites analysés</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA - diabrowser generous spacing */}
      <section
        className="relative py-40 md:py-48 px-6"
        style={{
          background: 'linear-gradient(180deg, #FEFEFE 0%, #FAF9F7 50%, #F5F4F1 100%)',
        }}
      >
        <div className="container mx-auto max-w-4xl text-center">
          <h2
            className="text-5xl md:text-6xl lg:text-7xl font-[800] text-black mb-8"
            style={{ letterSpacing: '-0.04em' }}
          >
            Besoin d'une stratégie
            <br />
            GEO complète ?
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 mb-14 max-w-2xl mx-auto leading-relaxed">
            Découvrez nos forfaits d'accompagnement personnalisés pour maximiser votre visibilité sur les moteurs IA.
          </p>
          <a
            href="/forfaits-geo-seo"
            className="inline-flex items-center gap-3 rounded-full bg-black px-12 py-6 text-lg font-semibold text-white transition-all duration-200 hover:scale-105 hover:bg-gray-900 hover:shadow-xl shadow-lg active:scale-95"
          >
            Découvrir nos forfaits
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </section>

      {/* Footer Branding */}
      <footer className="relative py-16 px-6 bg-white border-t border-gray-200">
        <div className="container mx-auto max-w-7xl text-center">
          <p className="text-sm text-gray-500">
            © 2025 TANSE. Tous droits réservés.
          </p>
        </div>
      </footer>
    </main>
  );
}
