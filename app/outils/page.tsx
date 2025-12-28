import type { Metadata } from 'next';
import OutilsHero from '../components/outils/OutilsHero';
import OutilCard from '../components/outils/OutilCard';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';

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
 * Outils Page - Free GEO Tools Hub
 * Features: Hero with URL analyzer, 3 tool cards, responsive design
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
    <>
      {/* Header */}
      <SiteHeader />

      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <OutilsHero />

        {/* Tools Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-7xl">
            {/* Section Title */}
            <div className="mb-12 text-center">
              <p className="text-lg text-gray-600 mb-4">Ou choisissez un outil spécifique</p>
              <div className="mx-auto h-1 w-24 bg-gradient-to-r from-[#444684] to-[#6b62a4] rounded-full" />
            </div>

            {/* Tools Grid */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {outils.map((outil) => (
                <OutilCard
                  key={outil.href}
                  icon={outil.icon}
                  title={outil.title}
                  description={outil.description}
                  href={outil.href}
                />
              ))}
            </div>

            {/* Additional CTA */}
            <div className="mt-16 text-center">
              <p className="mb-6 text-gray-600">
                Besoin d'une stratégie GEO complète ?
              </p>
              <a
                href="/forfaits-geo-seo"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-[#444684] bg-transparent px-8 py-4
                           font-semibold text-[#444684] transition-all duration-300 hover:bg-[#444684] hover:text-white
                           hover:shadow-lg hover:-translate-y-1"
              >
                Découvrir nos forfaits
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Trust Signals */}
        <section className="bg-[#E4E4E4] py-12 px-6">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="grid gap-8 md:grid-cols-3">
              <div>
                <div className="text-3xl font-bold text-[#444684] mb-2">30s</div>
                <p className="text-gray-600">Temps d'analyse</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#444684] mb-2">100%</div>
                <p className="text-gray-600">Gratuit & sans engagement</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#444684] mb-2">1000+</div>
                <p className="text-gray-600">Sites analysés</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <SiteFooter />
    </>
  );
}
