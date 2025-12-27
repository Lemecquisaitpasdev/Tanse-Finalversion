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
            Un partenariat stratégique pour l'optimisation IA
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-slate-700 text-center max-w-2xl bg-white/90 backdrop-blur-sm px-8 py-4 rounded-xl">
            Chez TANSE, nous nous appuyons sur les recherches <span className="font-semibold text-[#444684]">OkurAI</span> pour développer nos stratégies GEO
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[1680px] mx-auto px-8">
          <div className="max-w-4xl">
            <h2 className="text-4xl font-bold text-slate-900 mb-8">
              Pourquoi OkurAI
            </h2>
            <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
              <p>
                Chez TANSE, nous avons fait le choix de baser nos stratégies GEO sur la recherche scientifique plutôt que sur l'expérimentation empirique. OkurAI est le premier média francophone entièrement dédié à l'analyse rigoureuse de l'intelligence artificielle générative.
              </p>
              <p>
                Cette collaboration nous permet d'offrir à nos clients des services basés sur des données vérifiables et une méthodologie scientifique stricte. Les recherches d'OkurAI analysent comment plus de 30 modèles d'IA (ChatGPT, Claude, Perplexity, Gemini) sélectionnent et citent l'information.
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
              Rigueur journalistique
            </h2>
            <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
              <p>
                Les articles d'OkurAI suivent une méthodologie de recherche stricte. Chaque affirmation renvoie à des papers de recherche, de la documentation officielle ou des données mesurables. Les benchmarks incluent les méthodologies complètes, permettant la reproduction des résultats.
              </p>
              <p>
                Cette approche nous garantit que nos stratégies reposent sur des faits documentés, pas sur des tendances passagères. Quand OkurAI a publié son analyse comparative des patterns de citation entre ChatGPT, Claude et Perplexity, nous avons pu adapter nos recommandations clients et augmenter de 40% la visibilité moyenne sur les requêtes professionnelles.
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
