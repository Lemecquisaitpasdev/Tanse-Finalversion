"use client";

import { useState, FormEvent } from "react";
import {
  CheckCircle2,
  Loader2,
  Send,
  AlertTriangle,
  TrendingUp,
  Zap,
  Target,
  BarChart3,
  Search,
  Eye,
  Award,
  Clock,
  Shield,
  Sparkles,
  ChevronDown,
  ArrowRight,
  Rocket
} from "lucide-react";
import { trackFormStart, trackFormSubmit, trackCTAClick, trackFAQOpen } from "@/lib/analytics";
import SiteHeader from "@/app/components/SiteHeader";

const COMMENT_CONNU_OPTIONS = [
  "Sélectionnez une option",
  "Recherche Google",
  "LinkedIn",
  "Recommandation",
  "Publicité en ligne",
  "Réseaux sociaux",
  "Autre"
];

export default function AuditOffertClient() {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const [formStarted, setFormStarted] = useState(false);

  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    entreprise: "",
    siteWeb: "",
    concurrent1: "",
    concurrent2: "",
    concurrent3: "",
    commentConnu: ""
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  // FAQ data
  const faqs = [
    {
      question: "L'audit est-il vraiment gratuit ?",
      answer: "Oui, l'audit est 100% gratuit et sans engagement. Nous analysons votre présence SEO et GEO de manière approfondie et vous recevez un rapport détaillé par email sous 48h. Aucune carte bancaire requise."
    },
    {
      question: "Que contient exactement l'audit ?",
      answer: "L'audit comprend 3 volets : (1) Analyse SEO complète (positionnement Google, optimisations techniques), (2) Diagnostic GEO (visibilité sur ChatGPT, Perplexity, Claude), (3) Benchmark concurrentiel (comparaison avec vos 3 concurrents). Vous recevez un rapport PDF de 15-20 pages avec recommandations priorisées."
    },
    {
      question: "Pourquoi demandez-vous mes concurrents ?",
      answer: "L'analyse concurrentielle est essentielle pour contextualiser vos performances. En comparant votre visibilité SEO et GEO à celle de vos concurrents directs, nous identifions précisément vos opportunités de croissance et les stratégies gagnantes dans votre secteur."
    },
    {
      question: "Combien de temps prend l'audit ?",
      answer: "Une fois votre demande soumise, vous recevez votre audit complet sous 48h ouvrées. L'analyse est réalisée manuellement par nos experts SEO/GEO, garantissant des insights actionnables et personnalisés à votre business."
    },
    {
      question: "Vais-je être démarché après l'audit ?",
      answer: "Non. Vous recevez votre audit sans aucune pression commerciale. Si nos recommandations vous intéressent et que vous souhaitez être accompagné, nous serons ravis d'en discuter. Sinon, l'audit reste vôtre et exploitable immédiatement."
    },
    {
      question: "Quelle est la différence entre SEO et GEO ?",
      answer: "Le SEO (Search Engine Optimization) optimise votre visibilité sur les moteurs de recherche traditionnels comme Google. Le GEO (Generative Engine Optimization) optimise votre présence sur les IA génératives (ChatGPT, Perplexity, Claude) qui deviennent les nouveaux canaux de découverte pour 40% des recherches en 2025."
    }
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    // Track form start on first interaction
    if (!formStarted) {
      trackFormStart("audit-offert");
      setFormStarted(true);
    }

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    // Validation
    if (formData.commentConnu === "Sélectionnez une option" || !formData.commentConnu) {
      setError("Veuillez sélectionner comment vous nous avez connu");
      setSubmitting(false);
      return;
    }

    if (!formData.concurrent1 || !formData.concurrent2 || !formData.concurrent3) {
      setError("Veuillez renseigner vos 3 principaux concurrents");
      setSubmitting(false);
      return;
    }

    try {
      const res = await fetch("/api/submit-audit-gratuit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.error) {
        throw new Error(data.error);
      }

      // Track successful form submission
      trackFormSubmit("audit-offert", true);

      setSubmitted(true);
      setFormData({
        nom: "",
        prenom: "",
        email: "",
        telephone: "",
        entreprise: "",
        siteWeb: "",
        concurrent1: "",
        concurrent2: "",
        concurrent3: "",
        commentConnu: ""
      });
    } catch (err: any) {
      // Track failed form submission
      trackFormSubmit("audit-offert", false);
      setError(err?.message || "Une erreur s'est produite. Veuillez réessayer.");
    } finally {
      setSubmitting(false);
    }
  };

  const toggleFaq = (index: number) => {
    // Track FAQ open (only when opening, not closing)
    if (faqOpen !== index && faqs[index]) {
      trackFAQOpen(faqs[index].question, index);
    }
    setFaqOpen(faqOpen === index ? null : index);
  };

  // Schema.org JSON-LD pour FAQPage
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <main className="bg-[#e4e4e4] min-h-screen">
      {/* Navigation Header */}
      <SiteHeader />

      {/* Schema.org JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Fallback SEO pour crawlers */}
      <noscript>
        <div className="mx-auto max-w-4xl p-8 bg-white">
          <h1>Audit SEO + GEO Offert - TANSE</h1>
          <p>Obtenez un audit complet de votre visibilité sur Google ET les IA génératives (ChatGPT, Perplexity, Claude). Analyse gratuite sous 48h avec benchmark concurrentiel.</p>
          <h2>Ce que révèle notre audit</h2>
          <ul>
            <li>Analyse SEO complète de votre site</li>
            <li>Diagnostic GEO sur ChatGPT, Perplexity, Claude</li>
            <li>Benchmark avec 3 concurrents de votre choix</li>
            <li>Rapport PDF de 15-20 pages</li>
            <li>Recommandations priorisées</li>
          </ul>
        </div>
      </noscript>

      {/* Hero Section - Text Overlay on Spline Animation */}
      <section className="relative min-h-screen flex items-end bg-[#e4e4e4] overflow-hidden">
        {/* Animation Spline 3D - Background plein écran */}
        <div className="absolute inset-0 w-full h-full">
          <script type="module" src="https://unpkg.com/@splinetool/viewer@1.11.4/build/spline-viewer.js"></script>
          <spline-viewer
            url="https://prod.spline.design/Pz2yVJN1Qh3wp0np/scene.splinecode"
            className="w-full h-full"
          ></spline-viewer>
        </div>

        {/* Texte superposé en bas à gauche */}
        <div className="relative z-10 px-6 lg:px-16 py-12 lg:py-20 max-w-4xl">
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-[#e4e4e4] leading-[1.1]">
              Votre entreprise est-elle visible sur ChatGPT ?
            </h1>
            <p className="text-xl lg:text-2xl text-[#e4e4e4] opacity-90 max-w-2xl">
              Obtenez gratuitement votre audit SEO + GEO complet. Découvrez votre visibilité sur Google et les IA génératives.
            </p>
            <button
              onClick={() => {
                trackCTAClick("hero-scroll-to-form");
                document.getElementById("audit-form")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start"
                });
              }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#e4e4e4] text-[#444684] text-lg font-semibold rounded-xl hover:opacity-90 transition-all shadow-xl"
            >
              OBTENIR L'AUDIT
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Section - Le Problème */}
      <section className="px-6 lg:px-32 py-32 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-20 space-y-6">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-red-100 text-red-600 rounded-full text-sm font-medium">
              <AlertTriangle className="w-4 h-4" />
              LE PROBLÈME
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#444684]">
              60% des recherches se font maintenant sur les IA génératives
            </h2>
            <p className="text-xl text-[#444684] opacity-70 max-w-3xl mx-auto leading-relaxed">
              Vos clients ne cherchent plus seulement sur Google. Ils interrogent ChatGPT, Perplexity, Claude et Gemini pour trouver des entreprises locales.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-10 bg-[#e4e4e4] rounded-2xl text-center space-y-4">
              <div className="text-5xl lg:text-6xl font-bold text-[#444684]">60%</div>
              <p className="text-[#444684] opacity-70 text-lg">des recherches B2B se font sur IA</p>
            </div>
            <div className="p-10 bg-[#e4e4e4] rounded-2xl text-center space-y-4">
              <div className="text-5xl lg:text-6xl font-bold text-[#444684]">73%</div>
              <p className="text-[#444684] opacity-70 text-lg">des PME sont invisibles sur ChatGPT</p>
            </div>
            <div className="p-10 bg-[#e4e4e4] rounded-2xl text-center space-y-4">
              <div className="text-5xl lg:text-6xl font-bold text-[#444684]">2025</div>
              <p className="text-[#444684] opacity-70 text-lg">L'année du basculement GEO</p>
            </div>
          </div>

          <p className="text-center text-xl text-[#444684] font-medium pt-12 max-w-3xl mx-auto">
            Si votre entreprise n'apparaît pas quand un prospect demande des recommandations à ChatGPT, vous perdez des clients chaque jour.
          </p>
        </div>
      </section>

      {/* Section - Ce que notre audit révèle */}
      <section className="px-6 lg:px-32 py-32">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-20 space-y-6">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#444684]/10 text-[#444684] rounded-full text-sm font-medium">
              <Eye className="w-4 h-4" />
              NOTRE MÉTHODE
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#444684]">
              Ce que notre audit révèle
            </h2>
            <p className="text-xl text-[#444684] opacity-70 max-w-3xl mx-auto">
              Une analyse complète en 3 volets pour comprendre précisément où vous en êtes.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Volet 1: SEO */}
            <div className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-md transition-all space-y-6">
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 bg-[#444684] rounded-xl flex items-center justify-center">
                  <Search className="w-7 h-7 text-white" />
                </div>
                <span className="text-sm font-bold text-[#444684]">Volet 1</span>
              </div>

              <h3 className="text-2xl font-bold text-[#444684]">Analyse SEO</h3>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-[#444684] opacity-70">Positionnement sur mots-clés stratégiques</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-[#444684] opacity-70">Audit technique (vitesse, mobile, indexation)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-[#444684] opacity-70">Analyse Google Business Profile</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-[#444684] opacity-70">Opportunités à fort potentiel</span>
                </li>
              </ul>
            </div>

            {/* Volet 2: GEO */}
            <div className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-md transition-all space-y-6 border-2 border-[#444684]">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#444684] text-white text-xs font-bold rounded-full">
                EXCLUSIF
              </div>
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 bg-[#444684] rounded-xl flex items-center justify-center">
                  <Sparkles className="w-7 h-7 text-white" />
                </div>
                <span className="text-sm font-bold text-[#444684]">Volet 2</span>
              </div>

              <h3 className="text-2xl font-bold text-[#444684]">Diagnostic GEO</h3>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-[#444684] opacity-70">Tests sur ChatGPT (20+ requêtes métier)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-[#444684] opacity-70">Tests Perplexity, Claude, Gemini</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-[#444684] opacity-70">Score de visibilité IA (0-100)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-[#444684] opacity-70">Analyse mentions et tonalité</span>
                </li>
              </ul>
            </div>

            {/* Volet 3: Benchmark */}
            <div className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-md transition-all space-y-6">
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 bg-[#444684] rounded-xl flex items-center justify-center">
                  <BarChart3 className="w-7 h-7 text-white" />
                </div>
                <span className="text-sm font-bold text-[#444684]">Volet 3</span>
              </div>

              <h3 className="text-2xl font-bold text-[#444684]">Benchmark Concurrentiel</h3>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-[#444684] opacity-70">Comparaison SEO avec 3 concurrents</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-[#444684] opacity-70">Comparaison GEO (visibilité IA)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-[#444684] opacity-70">Leurs stratégies gagnantes</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-[#444684] opacity-70">Opportunités de différenciation</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-3 px-8 py-4 bg-white rounded-xl shadow-sm">
              <Award className="w-6 h-6 text-[#444684]" />
              <span className="text-lg font-medium text-[#444684]">
                Rapport PDF de 15-20 pages + recommandations priorisées
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Section - Comment ça marche */}
      <section className="px-6 lg:px-32 py-32 bg-white">
        <div className="max-w-[1000px] mx-auto">
          <div className="text-center mb-20 space-y-6">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-100 text-green-700 rounded-full text-sm font-medium">
              <Target className="w-4 h-4" />
              PROCESSUS SIMPLE
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#444684]">
              Comment ça marche ?
            </h2>
          </div>

          <div className="space-y-12">
            {/* Step 1 */}
            <div className="flex items-start gap-8">
              <div className="flex-shrink-0 w-16 h-16 bg-[#444684] rounded-full flex items-center justify-center text-white font-bold text-2xl">
                1
              </div>
              <div className="flex-1 pt-3 space-y-3">
                <h3 className="text-2xl font-bold text-[#444684]">Remplissez le formulaire</h3>
                <p className="text-xl text-[#444684] opacity-70 leading-relaxed">
                  Partagez-nous les infos sur votre entreprise et vos 3 principaux concurrents. Cela prend moins de 2 minutes.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start gap-8">
              <div className="flex-shrink-0 w-16 h-16 bg-[#444684] rounded-full flex items-center justify-center text-white font-bold text-2xl">
                2
              </div>
              <div className="flex-1 pt-3 space-y-3">
                <h3 className="text-2xl font-bold text-[#444684]">Nos experts analysent</h3>
                <p className="text-xl text-[#444684] opacity-70 leading-relaxed">
                  Notre équipe SEO/GEO réalise une analyse manuelle complète : tests IA, audit technique, benchmark concurrentiel. Livraison sous 48h.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start gap-8">
              <div className="flex-shrink-0 w-16 h-16 bg-[#444684] rounded-full flex items-center justify-center text-white font-bold text-2xl">
                3
              </div>
              <div className="flex-1 pt-3 space-y-3">
                <h3 className="text-2xl font-bold text-[#444684]">Recevez votre audit</h3>
                <p className="text-xl text-[#444684] opacity-70 leading-relaxed">
                  Vous recevez un rapport PDF détaillé avec votre positionnement SEO/GEO, le benchmark concurrentiel, et des recommandations actionnables priorisées.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex items-start gap-8">
              <div className="flex-shrink-0 w-16 h-16 bg-[#444684] rounded-full flex items-center justify-center text-white font-bold text-2xl">
                4
              </div>
              <div className="flex-1 pt-3 space-y-3">
                <h3 className="text-2xl font-bold text-[#444684]">Vous décidez de la suite</h3>
                <p className="text-xl text-[#444684] opacity-70 leading-relaxed">
                  L'audit est vôtre, sans engagement. Si vous souhaitez être accompagné dans votre stratégie SEO/GEO, nous serons ravis d'en discuter. Sinon, aucune pression.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section - FAQ */}
      <section className="px-6 lg:px-32 py-32">
        <div className="max-w-[900px] mx-auto">
          <div className="text-center mb-20 space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#444684]">
              Questions fréquentes
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden transition-all shadow-sm hover:shadow-md"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-8 text-left hover:bg-[#e4e4e4]/30 transition-all"
                >
                  <span className="font-bold text-xl text-[#444684] pr-6">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-7 h-7 text-[#444684] transition-transform flex-shrink-0 ${
                      faqOpen === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {faqOpen === index && (
                  <div className="px-8 pb-8 text-[#444684] opacity-80 text-lg leading-relaxed bg-[#e4e4e4]/30">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section - Formulaire */}
      <section id="audit-form" className="px-6 lg:px-32 py-32 bg-white">
        <div className="max-w-[800px] mx-auto">
          <div className="text-center mb-16 space-y-6">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-100 text-green-700 rounded-full text-sm font-medium">
              <Zap className="w-4 h-4" />
              GRATUIT • SANS ENGAGEMENT • SOUS 48H
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#444684]">
              Obtenez votre audit gratuit
            </h2>
            <p className="text-xl text-[#444684] opacity-70">
              Remplissez le formulaire ci-dessous pour recevoir votre analyse complète SEO + GEO
            </p>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-8 bg-[#e4e4e4] p-10 lg:p-16 rounded-3xl">
              {/* Nom + Prénom */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label htmlFor="nom" className="block text-[#444684] font-medium text-lg">
                    Nom *
                  </label>
                  <input
                    type="text"
                    id="nom"
                    name="nom"
                    value={formData.nom}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 border-2 border-[#444684]/20 rounded-xl focus:border-[#444684] focus:outline-none text-[#444684] text-lg placeholder:text-[#444684]/30 transition-all bg-white"
                    placeholder="Dupont"
                  />
                </div>
                <div className="space-y-3">
                  <label htmlFor="prenom" className="block text-[#444684] font-medium text-lg">
                    Prénom *
                  </label>
                  <input
                    type="text"
                    id="prenom"
                    name="prenom"
                    value={formData.prenom}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 border-2 border-[#444684]/20 rounded-xl focus:border-[#444684] focus:outline-none text-[#444684] text-lg placeholder:text-[#444684]/30 transition-all bg-white"
                    placeholder="Marie"
                  />
                </div>
              </div>

              {/* Email + Téléphone */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label htmlFor="email" className="block text-[#444684] font-medium text-lg">
                    Email professionnel *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 border-2 border-[#444684]/20 rounded-xl focus:border-[#444684] focus:outline-none text-[#444684] text-lg placeholder:text-[#444684]/30 transition-all bg-white"
                    placeholder="marie@entreprise.fr"
                  />
                </div>
                <div className="space-y-3">
                  <label htmlFor="telephone" className="block text-[#444684] font-medium text-lg">
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    id="telephone"
                    name="telephone"
                    value={formData.telephone}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 border-2 border-[#444684]/20 rounded-xl focus:border-[#444684] focus:outline-none text-[#444684] text-lg placeholder:text-[#444684]/30 transition-all bg-white"
                    placeholder="06 12 34 56 78"
                  />
                </div>
              </div>

              {/* Entreprise + Site Web */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label htmlFor="entreprise" className="block text-[#444684] font-medium text-lg">
                    Nom de l'entreprise *
                  </label>
                  <input
                    type="text"
                    id="entreprise"
                    name="entreprise"
                    value={formData.entreprise}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 border-2 border-[#444684]/20 rounded-xl focus:border-[#444684] focus:outline-none text-[#444684] text-lg placeholder:text-[#444684]/30 transition-all bg-white"
                    placeholder="Mon Entreprise SARL"
                  />
                </div>
                <div className="space-y-3">
                  <label htmlFor="siteWeb" className="block text-[#444684] font-medium text-lg">
                    Site web *
                  </label>
                  <input
                    type="url"
                    id="siteWeb"
                    name="siteWeb"
                    value={formData.siteWeb}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 border-2 border-[#444684]/20 rounded-xl focus:border-[#444684] focus:outline-none text-[#444684] text-lg placeholder:text-[#444684]/30 transition-all bg-white"
                    placeholder="https://monentreprise.fr"
                  />
                </div>
              </div>

              {/* 3 Concurrents */}
              <div className="space-y-4 p-8 bg-white rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <Target className="w-5 h-5 text-[#444684]" />
                  <h3 className="font-bold text-[#444684] text-lg">Vos 3 principaux concurrents *</h3>
                </div>
                <p className="text-sm text-[#444684] opacity-60 mb-4">
                  Indiquez les sites web de 3 concurrents directs pour le benchmark
                </p>

                <div className="space-y-3">
                  <input
                    type="url"
                    name="concurrent1"
                    value={formData.concurrent1}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 border-2 border-[#444684]/20 rounded-xl focus:border-[#444684] focus:outline-none text-[#444684] text-lg placeholder:text-[#444684]/30 transition-all"
                    placeholder="Concurrent 1 : https://concurrent1.fr"
                  />
                  <input
                    type="url"
                    name="concurrent2"
                    value={formData.concurrent2}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 border-2 border-[#444684]/20 rounded-xl focus:border-[#444684] focus:outline-none text-[#444684] text-lg placeholder:text-[#444684]/30 transition-all"
                    placeholder="Concurrent 2 : https://concurrent2.fr"
                  />
                  <input
                    type="url"
                    name="concurrent3"
                    value={formData.concurrent3}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 border-2 border-[#444684]/20 rounded-xl focus:border-[#444684] focus:outline-none text-[#444684] text-lg placeholder:text-[#444684]/30 transition-all"
                    placeholder="Concurrent 3 : https://concurrent3.fr"
                  />
                </div>
              </div>

              {/* Comment nous avez-vous connu */}
              <div className="space-y-3">
                <label htmlFor="commentConnu" className="block text-[#444684] font-medium text-lg">
                  Comment nous avez-vous connu ? *
                </label>
                <select
                  id="commentConnu"
                  name="commentConnu"
                  value={formData.commentConnu}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 border-2 border-[#444684]/20 rounded-xl focus:border-[#444684] focus:outline-none text-[#444684] text-lg transition-all appearance-none cursor-pointer bg-white"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23444684' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 1.5rem center',
                    backgroundSize: '1.5rem'
                  }}
                >
                  {COMMENT_CONNU_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              {/* Error message */}
              {error && (
                <div className="p-5 bg-red-50 border-2 border-red-200 rounded-xl text-red-600 flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              {/* Submit button */}
              <button
                type="submit"
                disabled={submitting}
                className="w-full px-10 py-5 bg-[#444684] text-white text-xl font-semibold rounded-xl hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 shadow-lg"
              >
                {submitting ? (
                  <>
                    <Loader2 className="w-6 h-6 animate-spin" />
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    Recevoir mon audit gratuit
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>

              <p className="text-center text-sm text-[#444684] opacity-60">
                ⏱️ Vous recevrez votre audit sous 48h ouvrées • 100% gratuit et sans engagement
              </p>
            </form>
          ) : (
            <div className="text-center py-20 px-10 bg-[#e4e4e4] rounded-3xl space-y-8">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-green-100 rounded-full">
                <CheckCircle2 className="w-12 h-12 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-[#444684]">
                Demande envoyée avec succès ! 🎉
              </h3>
              <p className="text-xl text-[#444684] opacity-70 max-w-md mx-auto leading-relaxed">
                Merci pour votre confiance. Nos experts SEO/GEO analysent dès maintenant votre entreprise et vos concurrents.
              </p>
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-green-100 rounded-xl text-green-700 font-medium">
                <Clock className="w-5 h-5" />
                <span>Vous recevrez votre audit sous 48h</span>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="px-6 lg:px-32 py-32 text-center">
        <div className="max-w-[800px] mx-auto space-y-10">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#444684]">
            Prêt à découvrir votre visibilité sur les IA ?
          </h2>
          <button
            onClick={() => {
              document.getElementById("audit-form")?.scrollIntoView({
                behavior: "smooth",
                block: "start"
              });
            }}
            className="inline-flex items-center gap-3 px-12 py-6 bg-[#444684] text-white text-xl font-semibold rounded-xl hover:opacity-90 transition-all shadow-xl"
          >
            Obtenir mon audit gratuit
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </section>
    </main>
  );
}
