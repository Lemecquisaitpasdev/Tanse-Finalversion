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
  Users,
  Shield,
  Sparkles,
  ChevronDown,
  ArrowRight,
  MessageSquare,
  Star
} from "lucide-react";
import { trackFormStart, trackFormSubmit, trackCTAClick, trackFAQOpen } from "@/lib/analytics";
import TrustpilotWidget from "@/app/components/TrustpilotWidget";

const COMMENT_CONNU_OPTIONS = [
  "Sélectionnez une option",
  "Recherche Google",
  "LinkedIn",
  "Recommandation",
  "Publicité en ligne",
  "Réseaux sociaux",
  "Autre"
];

export default function AuditGratuitPage() {
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
      trackFormStart("audit-gratuit");
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
      trackFormSubmit("audit-gratuit", true);

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
      trackFormSubmit("audit-gratuit", false);
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
    <main className="bg-[#E4E4E4] text-[#0b0b0c]">
      {/* Schema.org JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Fallback SEO pour crawlers */}
      <noscript>
        <div className="mx-auto max-w-4xl p-8 bg-white">
          <h1>Audit SEO + GEO Gratuit - TANSE</h1>
          <p>Obtenez un audit complet de votre visibilité sur Google ET les IA génératives (ChatGPT, Perplexity, Claude). Analyse gratuite sous 48h avec benchmark concurrentiel.</p>
          <h2>Ce que révèle notre audit</h2>
          <ul>
            <li>Analyse SEO complète de votre site</li>
            <li>Diagnostic GEO sur ChatGPT, Perplexity, Claude</li>
            <li>Benchmark avec 3 concurrents de votre choix</li>
            <li>Rapport PDF de 15-20 pages</li>
            <li>Recommandations priorisées</li>
          </ul>
          <h2>Contact</h2>
          <p>Email: contact@tanse.fr</p>
        </div>
      </noscript>

      {/* Hero Section - Split Screen */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-[#444684] via-[#5558a3] to-[#444684]">
        <div className="container mx-auto px-6 lg:px-12 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="text-white space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm">
                <Sparkles className="w-4 h-4 text-[#E94E87]" />
                <span>Analyse gratuite sous 48h</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Votre entreprise est-elle visible sur{" "}
                <span className="text-[#E94E87]">ChatGPT</span> ?
              </h1>

              <p className="text-xl text-white/90 leading-relaxed">
                Obtenez un audit <strong>SEO + GEO</strong> complet et gratuit. Découvrez votre positionnement sur Google
                ET les IA génératives (ChatGPT, Perplexity, Claude), avec benchmark de 3 concurrents.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-5 py-3 rounded-xl">
                  <CheckCircle2 className="w-5 h-5 text-[#00D9A5]" />
                  <span className="font-medium">100% Gratuit</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-5 py-3 rounded-xl">
                  <Clock className="w-5 h-5 text-[#00D9A5]" />
                  <span className="font-medium">Livré sous 48h</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-5 py-3 rounded-xl">
                  <Shield className="w-5 h-5 text-[#00D9A5]" />
                  <span className="font-medium">Sans engagement</span>
                </div>
              </div>

              <button
                onClick={() => {
                  trackCTAClick("hero-scroll-to-form");
                  document.getElementById("audit-form")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="mt-6 px-8 py-4 bg-[#E94E87] hover:bg-[#d63d73] text-white font-semibold rounded-xl transition-all hover:scale-105 flex items-center gap-2 text-lg shadow-lg"
              >
                Obtenir mon audit gratuit
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Right: Visual/Stats */}
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-center justify-between pb-4 border-b border-white/20">
                    <h3 className="text-white font-semibold text-lg">Votre audit inclut :</h3>
                    <Award className="w-6 h-6 text-[#00D9A5]" />
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                      <Search className="w-6 h-6 text-[#E94E87] mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="text-white font-medium mb-1">Analyse SEO complète</h4>
                        <p className="text-white/70 text-sm">Positionnement Google, mots-clés, optimisations techniques</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                      <Sparkles className="w-6 h-6 text-[#00D9A5] mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="text-white font-medium mb-1">Diagnostic GEO</h4>
                        <p className="text-white/70 text-sm">Visibilité sur ChatGPT, Perplexity, Claude, Gemini</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                      <BarChart3 className="w-6 h-6 text-[#E94E87] mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="text-white font-medium mb-1">Benchmark concurrentiel</h4>
                        <p className="text-white/70 text-sm">Comparaison détaillée avec vos 3 concurrents</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/20">
                    <div className="flex items-center justify-between text-white">
                      <span className="text-sm opacity-80">Valeur de l'audit</span>
                      <span className="text-2xl font-bold">490€</span>
                    </div>
                    <div className="mt-2 px-4 py-2 bg-[#00D9A5]/20 rounded-lg text-center">
                      <span className="text-[#00D9A5] font-semibold">Gratuit pour vous aujourd'hui</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Le Problème */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 rounded-full text-sm text-red-600 font-medium">
              <AlertTriangle className="w-4 h-4" />
              <span>Le problème</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-[#0b0b0c]">
              60% des recherches se font maintenant sur les <span className="text-[#E94E87]">IA génératives</span>
            </h2>

            <p className="text-xl text-gray-600 leading-relaxed">
              Vos clients ne cherchent plus seulement sur Google. Ils interrogent <strong>ChatGPT</strong>,
              <strong> Perplexity</strong>, <strong> Claude</strong> et <strong> Gemini</strong> pour trouver des
              entreprises locales, comparer des prestations, et prendre des décisions d'achat.
            </p>

            <div className="grid md:grid-cols-3 gap-8 pt-8">
              <div className="p-6 bg-gray-50 rounded-xl">
                <div className="text-4xl font-bold text-[#444684] mb-2">60%</div>
                <p className="text-gray-600">des recherches B2B se font sur IA</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-xl">
                <div className="text-4xl font-bold text-[#E94E87] mb-2">73%</div>
                <p className="text-gray-600">des PME sont invisibles sur ChatGPT</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-xl">
                <div className="text-4xl font-bold text-[#00D9A5] mb-2">2025</div>
                <p className="text-gray-600">L'année du basculement GEO</p>
              </div>
            </div>

            <p className="text-lg text-[#444684] font-medium pt-6">
              Si votre entreprise n'apparaît pas quand un prospect demande des recommandations à ChatGPT,
              <span className="text-[#E94E87]"> vous perdez des clients chaque jour</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Section: Ce que notre audit révèle */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#444684]/10 rounded-full text-sm text-[#444684] font-medium">
              <Eye className="w-4 h-4" />
              <span>Notre méthode</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0b0b0c]">
              Ce que notre audit <span className="text-[#E94E87]">révèle</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une analyse complète en 3 volets pour comprendre précisément où vous en êtes et comment progresser.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Volet 1: SEO */}
            <div className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#444684]/5 to-transparent rounded-bl-full"></div>

              <div className="relative space-y-6">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#444684] to-[#5558a3] rounded-xl flex items-center justify-center">
                    <Search className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-sm font-bold text-[#444684]">Volet 1</span>
                </div>

                <h3 className="text-2xl font-bold text-[#0b0b0c]">Analyse SEO</h3>

                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#00D9A5] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Positionnement sur vos mots-clés stratégiques</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#00D9A5] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Audit technique (vitesse, mobile, indexation)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#00D9A5] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Analyse Google Business Profile</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#00D9A5] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Opportunités de mots-clés à fort potentiel</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Volet 2: GEO */}
            <div className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border-2 border-[#E94E87]">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#E94E87] text-white text-xs font-bold rounded-full">
                EXCLUSIF
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#E94E87]/5 to-transparent rounded-bl-full"></div>

              <div className="relative space-y-6">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#E94E87] to-[#d63d73] rounded-xl flex items-center justify-center">
                    <Sparkles className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-sm font-bold text-[#E94E87]">Volet 2</span>
                </div>

                <h3 className="text-2xl font-bold text-[#0b0b0c]">Diagnostic GEO</h3>

                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#00D9A5] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Tests sur ChatGPT (20+ requêtes métier)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#00D9A5] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Tests sur Perplexity, Claude, Gemini</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#00D9A5] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Score de visibilité IA (0-100)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#00D9A5] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Analyse de vos mentions et tonalité</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Volet 3: Benchmark */}
            <div className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#00D9A5]/5 to-transparent rounded-bl-full"></div>

              <div className="relative space-y-6">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#00D9A5] to-[#00b88a] rounded-xl flex items-center justify-center">
                    <BarChart3 className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-sm font-bold text-[#00D9A5]">Volet 3</span>
                </div>

                <h3 className="text-2xl font-bold text-[#0b0b0c]">Benchmark Concurrentiel</h3>

                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#00D9A5] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Comparaison SEO avec 3 concurrents</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#00D9A5] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Comparaison GEO (visibilité IA vs concurrence)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#00D9A5] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Analyse de leurs stratégies gagnantes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#00D9A5] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Opportunités de différenciation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-[#444684]/5 rounded-xl">
              <Award className="w-6 h-6 text-[#E94E87]" />
              <span className="text-lg font-medium text-[#0b0b0c]">
                Rapport PDF de 15-20 pages + recommandations priorisées
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Comment ça marche (Timeline) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00D9A5]/10 rounded-full text-sm text-[#00D9A5] font-medium">
              <Target className="w-4 h-4" />
              <span>Processus simple</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0b0b0c]">
              Comment <span className="text-[#E94E87]">ça marche ?</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#444684] via-[#E94E87] to-[#00D9A5]"></div>

              <div className="space-y-12">
                {/* Step 1 */}
                <div className="relative flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#444684] to-[#5558a3] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg z-10">
                    1
                  </div>
                  <div className="flex-1 pt-3">
                    <h3 className="text-2xl font-bold text-[#0b0b0c] mb-2">Remplissez le formulaire</h3>
                    <p className="text-gray-600 text-lg">
                      Partagez-nous les infos sur votre entreprise et vos 3 principaux concurrents.
                      Cela prend <strong>moins de 2 minutes</strong>.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="relative flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#E94E87] to-[#d63d73] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg z-10">
                    2
                  </div>
                  <div className="flex-1 pt-3">
                    <h3 className="text-2xl font-bold text-[#0b0b0c] mb-2">Nos experts analysent</h3>
                    <p className="text-gray-600 text-lg">
                      Notre équipe SEO/GEO réalise une analyse manuelle complète : tests IA, audit technique,
                      benchmark concurrentiel. <strong>Livraison sous 48h</strong>.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="relative flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#00D9A5] to-[#00b88a] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg z-10">
                    3
                  </div>
                  <div className="flex-1 pt-3">
                    <h3 className="text-2xl font-bold text-[#0b0b0c] mb-2">Recevez votre audit</h3>
                    <p className="text-gray-600 text-lg">
                      Vous recevez un <strong>rapport PDF détaillé</strong> avec votre positionnement SEO/GEO,
                      le benchmark concurrentiel, et des recommandations actionnables priorisées.
                    </p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="relative flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#444684] to-[#E94E87] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg z-10">
                    4
                  </div>
                  <div className="flex-1 pt-3">
                    <h3 className="text-2xl font-bold text-[#0b0b0c] mb-2">Vous décidez de la suite</h3>
                    <p className="text-gray-600 text-lg">
                      L'audit est vôtre, sans engagement. Si vous souhaitez être accompagné dans votre stratégie
                      SEO/GEO, nous serons ravis d'en discuter. <strong>Sinon, aucune pression</strong>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Pourquoi TANSE (Badges) */}
      <section className="py-20 bg-gradient-to-br from-[#444684] to-[#5558a3] text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Pourquoi <span className="text-[#00D9A5]">TANSE</span> ?
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Nous sommes les <strong>pionniers du GEO en France</strong>. Première agence à maîtriser
              l'optimisation pour les IA génératives.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* Badge 1 */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/15 transition-colors">
              <Award className="w-10 h-10 text-[#00D9A5] mb-4" />
              <h3 className="text-xl font-bold mb-2">Pionniers GEO</h3>
              <p className="text-white/80 text-sm">
                1ère agence française spécialisée en Generative Engine Optimization
              </p>
            </div>

            {/* Badge 2 */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/15 transition-colors">
              <Users className="w-10 h-10 text-[#E94E87] mb-4" />
              <h3 className="text-xl font-bold mb-2">+150 clients</h3>
              <p className="text-white/80 text-sm">
                PME et ETI accompagnées dans leur transformation SEO/GEO
              </p>
            </div>

            {/* Badge 3 */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/15 transition-colors">
              <TrendingUp className="w-10 h-10 text-[#00D9A5] mb-4" />
              <h3 className="text-xl font-bold mb-2">+247% visibilité</h3>
              <p className="text-white/80 text-sm">
                Croissance moyenne de visibilité IA pour nos clients en 6 mois
              </p>
            </div>

            {/* Badge 4 */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/15 transition-colors">
              <Shield className="w-10 h-10 text-[#E94E87] mb-4" />
              <h3 className="text-xl font-bold mb-2">Méthodologie éprouvée</h3>
              <p className="text-white/80 text-sm">
                Framework propriétaire basé sur +500 tests IA et data SEO
              </p>
            </div>
          </div>

          {/* Trustpilot Widget Placeholder */}
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                <h3 className="text-2xl font-bold">Ce que disent nos clients</h3>
                <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
              </div>

              <TrustpilotWidget
                templateId="53aa8912dec7e10d38f59f36"
                theme="light"
                stars="5"
                reviewLanguages="fr"
                height="400px"
                width="100%"
                className="trustpilot-carousel"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section: FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12 space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-[#0b0b0c]">
                Questions <span className="text-[#E94E87]">fréquentes</span>
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-xl overflow-hidden hover:border-[#E94E87] transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-lg text-[#0b0b0c] pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-6 h-6 text-[#444684] transition-transform flex-shrink-0 ${
                        faqOpen === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {faqOpen === index && (
                    <div className="px-6 pb-6 text-gray-600 leading-relaxed bg-gray-50">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section: Formulaire */}
      <section id="audit-form" className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12 space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00D9A5]/10 rounded-full text-sm text-[#00D9A5] font-medium">
                <Zap className="w-4 h-4" />
                <span>Gratuit • Sans engagement • Sous 48h</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#0b0b0c]">
                Obtenez votre <span className="text-[#E94E87]">audit gratuit</span>
              </h2>
              <p className="text-xl text-gray-600">
                Remplissez le formulaire ci-dessous pour recevoir votre analyse complète SEO + GEO
              </p>
            </div>

            <div className="bg-white p-8 lg:p-12 rounded-2xl shadow-xl border border-gray-100">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Nom + Prénom */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nom *
                      </label>
                      <input
                        type="text"
                        name="nom"
                        value={formData.nom}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#E94E87] focus:border-transparent transition-all"
                        placeholder="Dupont"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Prénom *
                      </label>
                      <input
                        type="text"
                        name="prenom"
                        value={formData.prenom}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#E94E87] focus:border-transparent transition-all"
                        placeholder="Marie"
                      />
                    </div>
                  </div>

                  {/* Email + Téléphone */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email professionnel *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#E94E87] focus:border-transparent transition-all"
                        placeholder="marie@entreprise.fr"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Téléphone *
                      </label>
                      <input
                        type="tel"
                        name="telephone"
                        value={formData.telephone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#E94E87] focus:border-transparent transition-all"
                        placeholder="06 12 34 56 78"
                      />
                    </div>
                  </div>

                  {/* Entreprise + Site Web */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nom de l'entreprise *
                      </label>
                      <input
                        type="text"
                        name="entreprise"
                        value={formData.entreprise}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#E94E87] focus:border-transparent transition-all"
                        placeholder="Mon Entreprise SARL"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Site web *
                      </label>
                      <input
                        type="url"
                        name="siteWeb"
                        value={formData.siteWeb}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#E94E87] focus:border-transparent transition-all"
                        placeholder="https://monentreprise.fr"
                      />
                    </div>
                  </div>

                  {/* 3 Concurrents */}
                  <div className="space-y-4 p-6 bg-gradient-to-br from-[#444684]/5 to-[#E94E87]/5 rounded-xl border border-[#444684]/10">
                    <div className="flex items-center gap-2 mb-2">
                      <Target className="w-5 h-5 text-[#E94E87]" />
                      <h3 className="font-semibold text-[#0b0b0c]">Vos 3 principaux concurrents *</h3>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">
                      Indiquez les sites web de 3 concurrents directs pour le benchmark
                    </p>

                    <div className="space-y-3">
                      <input
                        type="url"
                        name="concurrent1"
                        value={formData.concurrent1}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#E94E87] focus:border-transparent transition-all"
                        placeholder="Concurrent 1 : https://concurrent1.fr"
                      />
                      <input
                        type="url"
                        name="concurrent2"
                        value={formData.concurrent2}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#E94E87] focus:border-transparent transition-all"
                        placeholder="Concurrent 2 : https://concurrent2.fr"
                      />
                      <input
                        type="url"
                        name="concurrent3"
                        value={formData.concurrent3}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#E94E87] focus:border-transparent transition-all"
                        placeholder="Concurrent 3 : https://concurrent3.fr"
                      />
                    </div>
                  </div>

                  {/* Comment nous avez-vous connu */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Comment nous avez-vous connu ? *
                    </label>
                    <select
                      name="commentConnu"
                      value={formData.commentConnu}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#E94E87] focus:border-transparent transition-all appearance-none cursor-pointer"
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
                    <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

                  {/* Submit button */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full px-8 py-4 bg-gradient-to-r from-[#E94E87] to-[#d63d73] hover:from-[#d63d73] hover:to-[#c02d63] text-white font-semibold rounded-xl transition-all hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 text-lg shadow-lg"
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

                  <p className="text-center text-sm text-gray-500">
                    ⏱️ Vous recevrez votre audit sous 48h ouvrées • 100% gratuit et sans engagement
                  </p>
                </form>
              ) : (
                <div className="text-center py-12 space-y-6">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-[#00D9A5]/10 rounded-full">
                    <CheckCircle2 className="w-10 h-10 text-[#00D9A5]" />
                  </div>
                  <h3 className="text-3xl font-bold text-[#0b0b0c]">
                    Demande envoyée avec succès ! 🎉
                  </h3>
                  <p className="text-xl text-gray-600 max-w-md mx-auto">
                    Merci pour votre confiance. Nos experts SEO/GEO analysent dès maintenant votre entreprise
                    et vos concurrents.
                  </p>
                  <div className="inline-flex items-center gap-2 px-6 py-3 bg-[#00D9A5]/10 rounded-xl text-[#00D9A5] font-medium">
                    <Clock className="w-5 h-5" />
                    <span>Vous recevrez votre audit sous 48h à {formData.email || "votre email"}</span>
                  </div>
                  <p className="text-gray-500 text-sm pt-4">
                    Pensez à vérifier vos spams si vous ne recevez rien d'ici 48h.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
