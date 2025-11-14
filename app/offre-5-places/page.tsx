"use client";

import { useState, useEffect, FormEvent } from "react";
import {
  CheckCircle2,
  Loader2,
  Send,
  Sparkles,
  Clock,
  Gift,
  TrendingUp,
  Zap,
  Building2,
  Globe,
  Mail,
  Users,
  Target,
  Store,
  Briefcase,
  Heart,
  Scale,
  Home,
  ChevronDown,
  Phone,
  FileText,
  Award
} from "lucide-react";
import { trackFormStart, trackFormSubmit, trackCTAClick, trackFAQOpen } from "@/lib/analytics";

const SECTEURS = [
  "Sélectionnez votre secteur",
  "Automobile / Garage",
  "Restaurant / Café / Bar",
  "Commerce de proximité",
  "Services à la personne",
  "Santé (médecin, dentiste, kiné...)",
  "Juridique (avocat, notaire...)",
  "Immobilier",
  "Artisanat / BTP",
  "Franchise multi-sites",
  "Autre"
];

export default function OffreCinqPlacesPage() {
  const [placesRemaining, setPlacesRemaining] = useState<number | null>(null);
  const [loadingPlaces, setLoadingPlaces] = useState(true);
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  const [formData, setFormData] = useState({
    nomEntreprise: "",
    secteurActivite: "",
    urlSite: "",
    motivation: "",
    email: "",
    telephone: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [formStarted, setFormStarted] = useState(false);

  // FAQ data
  const faqs = [
    {
      question: "Pourquoi c'est gratuit ?",
      answer: "TANSE cherche à construire 5 études de cas pour prouver l'efficacité du GEO (Generative Engine Optimization). En échange de ce setup premium normalement à 2 990€, nous utiliserons vos résultats comme étude de cas (données anonymisées ou avec votre accord)."
    },
    {
      question: "Dois-je m'engager sur un contrat long ?",
      answer: "Non, le setup est offert sans engagement. À la fin des 3 mois d'accompagnement, vous décidez librement de continuer avec nous ou non, sans aucun engagement contractuel."
    },
    {
      question: "Que se passe-t-il après le setup ?",
      answer: "Après le setup initial, nous assurons un suivi de 3 mois pour garantir les résultats. À l'issue, vous pouvez choisir de continuer avec nos forfaits mensuels à partir de 850€/mois, mais c'est entièrement facultatif."
    },
    {
      question: "Comment suis-je sélectionné ?",
      answer: "Les candidatures sont étudiées selon plusieurs critères : potentiel de croissance, secteur d'activité, qualité du site web existant, et motivation. Nous sélectionnons les entreprises qui peuvent tirer le meilleur parti de cette offre."
    }
  ];

  // Charger le nombre de places restantes
  useEffect(() => {
    const fetchPlacesRemaining = async () => {
      try {
        const res = await fetch("/api/places-remaining");
        const data = await res.json();
        if (data.success) {
          setPlacesRemaining(data.placesRemaining);
        }
      } catch (err) {
        console.error("Error fetching places:", err);
        setPlacesRemaining(5); // Fallback
      } finally {
        setLoadingPlaces(false);
      }
    };

    fetchPlacesRemaining();
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    // Validation
    if (formData.motivation.length > 200) {
      setError("La motivation ne doit pas dépasser 200 caractères");
      setSubmitting(false);
      return;
    }

    if (formData.secteurActivite === "Sélectionnez votre secteur" || !formData.secteurActivite) {
      setError("Veuillez sélectionner un secteur d'activité");
      setSubmitting(false);
      return;
    }

    try {
      const res = await fetch("/api/offre-5-places", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.error) {
        throw new Error(data.error);
      }

      // Track successful form submission
      trackFormSubmit("offre-5-places", true);

      setSubmitted(true);
      setFormData({
        nomEntreprise: "",
        secteurActivite: "",
        urlSite: "",
        motivation: "",
        email: "",
        telephone: "",
      });

      // Rafraîchir le compteur
      const placesRes = await fetch("/api/places-remaining");
      const placesData = await placesRes.json();
      if (placesData.success) {
        setPlacesRemaining(placesData.placesRemaining);
      }
    } catch (err: any) {
      // Track failed form submission
      trackFormSubmit("offre-5-places", false);
      setError(err?.message || "Une erreur s'est produite. Veuillez réessayer.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    // Track form start on first interaction
    if (!formStarted) {
      trackFormStart("offre-5-places");
      setFormStarted(true);
    }

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
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
          <h1>Offre Exclusive : 5 entreprises seulement - Setup SEO + GEO offert (valeur 2 990€)</h1>
          <p>Soyez parmi les premières PME françaises visibles sur ChatGPT, Perplexity et Claude. TANSE offre gratuitement un setup SEO + GEO complet à 5 entreprises sélectionnées.</p>
          <h2>Ce qui est inclus (valeur 2 990€)</h2>
          <ul>
            <li>Audit SEO + GEO complet (valeur 990€)</li>
            <li>Optimisation Google Business Profile</li>
            <li>Setup call-tracking + Analytics</li>
            <li>20 citations locales + correction NAP</li>
            <li>Configuration Schema.org</li>
            <li>10 tests IA (ChatGPT, Perplexity, Claude)</li>
            <li>Plan d'action 30 jours</li>
          </ul>
          <p>Pour candidater, contactez-nous à contact@tanse.fr</p>
        </div>
      </noscript>

      {/* Hero Section */}
      <section className="relative mx-auto w-full max-w-7xl px-6 py-16 md:py-24 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-[#FFB800]/20 to-[#FF5757]/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-[#444684]/20 to-purple-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s' }} />

        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-4">
            <div className="p-1.5 rounded-lg bg-gradient-to-br from-[#FFB800] to-[#FF5757] shadow-lg animate-pulse">
              <Gift className="h-4 w-4 text-white" />
            </div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] bg-gradient-to-r from-[#FF5757] to-[#FFB800] bg-clip-text text-transparent">
              Offre Limitée — {loadingPlaces ? "..." : `${placesRemaining} place${placesRemaining !== 1 ? 's' : ''} restante${placesRemaining !== 1 ? 's' : ''}`}
            </p>
          </div>

          <h1 className="text-[clamp(36px,5vw,64px)] font-bold leading-[1.1] bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-700 bg-clip-text text-transparent">
            5 entreprises seulement : Setup SEO + GEO offert (valeur 2 990€)
          </h1>

          <p className="mt-6 max-w-2xl text-[19px] leading-relaxed text-neutral-700">
            Soyez parmi les <strong className="text-neutral-900">premières PME françaises</strong> visibles sur{" "}
            <span className="bg-gradient-to-r from-[#444684] to-[#524e7d] bg-clip-text text-transparent font-bold">
              ChatGPT, Perplexity et Claude
            </span>
          </p>

          {/* Compteur */}
          <div className="mt-10 inline-block">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#FFB800] via-[#FF5757] to-[#FF5757] p-1 shadow-2xl">
              <div className="relative bg-white rounded-xl px-8 py-6">
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#FF5757] to-[#FFB800] shadow-lg">
                    <span className="text-3xl font-bold text-white">
                      {loadingPlaces ? "..." : placesRemaining}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-neutral-600 uppercase tracking-wide">Places restantes</p>
                    <p className="text-2xl font-bold bg-gradient-to-r from-[#FF5757] to-[#FFB800] bg-clip-text text-transparent">sur 5 au total</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Badge */}
          <div className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/70 backdrop-blur-sm border border-white shadow-sm">
            <Award className="h-5 w-5 text-[#444684]" />
            <span className="font-semibold text-neutral-800">Pionniers du GEO en France</span>
          </div>
        </div>
      </section>

      {/* Section "Pourquoi cette offre ?" */}
      <section className="mx-auto w-full max-w-5xl px-6 pb-16">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#444684]/5 via-purple-50/50 to-blue-50/30 p-8 md:p-12 border border-white/80 shadow-lg">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#444684]/10 to-purple-200/10 rounded-full blur-3xl" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#444684] to-[#524e7d] bg-clip-text text-transparent mb-6">
              Pourquoi cette offre ?
            </h2>

            <div className="space-y-4 text-neutral-700 leading-relaxed">
              <p className="text-lg">
                <strong className="text-neutral-900">TANSE veut construire 5 cas d'étude</strong> pour prouver la puissance du GEO (Generative Engine Optimization) et son impact sur la visibilité des PME françaises.
              </p>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/60 backdrop-blur-sm">
                <Gift className="h-6 w-6 text-[#444684] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-neutral-900 mb-1">🎁 Bénéfice</p>
                  <p>Setup premium normalement à <strong className="text-[#FF5757]">2 990€</strong> offert intégralement. Vous ne payez rien.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/60 backdrop-blur-sm">
                <FileText className="h-6 w-6 text-[#444684] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-neutral-900 mb-1">🤝 Contrepartie</p>
                  <p>Utilisation de vos résultats comme <strong>étude de cas</strong> (données anonymisées possibles ou avec votre accord explicite). Aucun engagement financier de votre part.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section "Pour qui ?" */}
      <section className="mx-auto w-full max-w-7xl px-6 pb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-neutral-900 to-neutral-700 bg-clip-text text-transparent">Pour qui ?</h2>
          <p className="mt-3 text-neutral-600 max-w-2xl mx-auto">Cette offre s'adresse aux entreprises locales et multi-sites</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="group relative overflow-hidden rounded-3xl bg-white/70 backdrop-blur-sm p-6 border border-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#FFB800]/20 to-[#FF5757]/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 text-center">
              <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-[#444684] to-[#524e7d] shadow-lg mb-4">
                <Store className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-neutral-900 mb-2">PME locales</h3>
              <p className="text-sm text-neutral-600">Restaurants, services, commerce de proximité</p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-3xl bg-white/70 backdrop-blur-sm p-6 border border-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-200/20 to-[#444684]/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 text-center">
              <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-[#444684] to-[#524e7d] shadow-lg mb-4">
                <Building2 className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-neutral-900 mb-2">Franchises multi-sites</h3>
              <p className="text-sm text-neutral-600">Réseaux avec plusieurs établissements</p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-3xl bg-white/70 backdrop-blur-sm p-6 border border-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-200/20 to-indigo-200/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 text-center">
              <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-[#444684] to-[#524e7d] shadow-lg mb-4">
                <Briefcase className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-neutral-900 mb-2">Entreprises B2B</h3>
              <p className="text-sm text-neutral-600">Services aux professionnels</p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-3xl bg-white/70 backdrop-blur-sm p-6 border border-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-emerald-200/20 to-teal-200/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 text-center">
              <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-[#444684] to-[#524e7d] shadow-lg mb-4">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-neutral-900 mb-2">Secteurs prioritaires</h3>
              <p className="text-sm text-neutral-600">Santé, juridique, immobilier</p>
            </div>
          </div>
        </div>
      </section>

      {/* Critères d'éligibilité */}
      <section className="mx-auto w-full max-w-4xl px-6 pb-20">
        <div className="relative overflow-hidden rounded-3xl bg-white/80 backdrop-blur-sm p-8 md:p-10 border border-white shadow-xl">
          <div className="absolute top-0 left-0 w-48 h-48 bg-gradient-to-br from-[#444684]/10 to-transparent rounded-full blur-3xl" />

          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
              <Target className="h-8 w-8 text-[#444684]" />
              Critères d'éligibilité
            </h2>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#444684] flex items-center justify-center mt-0.5">
                  <CheckCircle2 className="h-4 w-4 text-white" />
                </div>
                <span className="text-neutral-700"><strong className="text-neutral-900">Entreprise basée en France</strong> (ou pays francophones)</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#444684] flex items-center justify-center mt-0.5">
                  <CheckCircle2 className="h-4 w-4 text-white" />
                </div>
                <span className="text-neutral-700"><strong className="text-neutral-900">Site web existant</strong> (même basique)</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#444684] flex items-center justify-center mt-0.5">
                  <CheckCircle2 className="h-4 w-4 text-white" />
                </div>
                <span className="text-neutral-700"><strong className="text-neutral-900">Engagement à suivre nos recommandations</strong> pendant 3 mois</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#444684] flex items-center justify-center mt-0.5">
                  <CheckCircle2 className="h-4 w-4 text-white" />
                </div>
                <span className="text-neutral-700"><strong className="text-neutral-900">Acceptation de partager les résultats</strong> (données anonymisées possibles)</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Formulaire de candidature */}
      <section className="mx-auto w-full max-w-4xl px-6 pb-20">
        {submitted ? (
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 p-8 md:p-12 border border-green-200/50 shadow-xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-200/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-200/20 rounded-full blur-3xl" />

            <div className="relative z-10 text-center">
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-emerald-500 shadow-lg">
                <CheckCircle2 className="h-14 w-14 text-white" />
              </div>

              <h3 className="mt-6 text-4xl font-bold bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent">
                Candidature envoyée ! 🎉
              </h3>

              <p className="mt-4 text-lg text-neutral-700 max-w-2xl mx-auto">
                Félicitations ! Votre candidature pour l'offre 5 places a bien été enregistrée.
                <br />
                <strong className="text-neutral-900">Notre équipe va l'étudier et vous recontacter sous 48h</strong> pour confirmer votre sélection.
              </p>

              <div className="mt-8 p-6 rounded-2xl bg-white/70 backdrop-blur-sm border border-white/80 shadow-md inline-block">
                <Mail className="h-10 w-10 text-green-600 mx-auto mb-3" />
                <p className="text-sm text-neutral-600 mb-1">Email de confirmation envoyé à</p>
                <p className="font-bold text-neutral-900 text-lg">{formData.email || "votre adresse"}</p>
              </div>

              <button
                onClick={() => setSubmitted(false)}
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-green-500/30 hover:shadow-xl hover:shadow-green-500/40 transition-all duration-300"
              >
                Retour
              </button>
            </div>
          </div>
        ) : (
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white via-neutral-50 to-white border border-white/80 shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#444684]/10 to-purple-200/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-[#FFB800]/10 to-[#FF5757]/10 rounded-full blur-3xl" />

            <div className="relative z-10 p-8 md:p-10 border-b border-neutral-100 bg-white/60 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-xl bg-gradient-to-br from-[#444684] to-[#524e7d] shadow-lg">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#444684] to-[#524e7d] bg-clip-text text-transparent">
                  Formulaire de candidature
                </h2>
              </div>
              <p className="text-neutral-600">Remplissez ce formulaire pour postuler à l'une des 5 places disponibles.</p>
            </div>

            <form onSubmit={handleSubmit} className="relative z-10 p-8 md:p-10 space-y-6">
              {error && (
                <div className="rounded-2xl bg-gradient-to-br from-red-50 to-rose-50 border-2 border-red-200 p-5 text-sm text-red-800">
                  <div className="flex items-center gap-2 font-semibold mb-1">
                    <div className="h-2 w-2 rounded-full bg-red-500" />
                    Erreur
                  </div>
                  {error}
                </div>
              )}

              <div className="grid gap-5 md:grid-cols-2">
                <div className="group">
                  <label className="mb-2 block text-sm font-semibold text-neutral-700">
                    Nom de l'entreprise <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-400" />
                    <input
                      name="nomEntreprise"
                      value={formData.nomEntreprise}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl bg-white border-2 border-neutral-200 pl-11 pr-4 py-3 outline-none focus:border-[#444684] focus:ring-2 focus:ring-[#444684]/20 transition-all duration-300 placeholder:text-neutral-400"
                      placeholder="TANSE Auto"
                    />
                  </div>
                </div>

                <div className="group">
                  <label className="mb-2 block text-sm font-semibold text-neutral-700">
                    Secteur d'activité <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <select
                      name="secteurActivite"
                      value={formData.secteurActivite}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl bg-white border-2 border-neutral-200 px-4 py-3 outline-none focus:border-[#444684] focus:ring-2 focus:ring-[#444684]/20 transition-all duration-300 appearance-none cursor-pointer"
                    >
                      {SECTEURS.map((secteur) => (
                        <option key={secteur} value={secteur === "Sélectionnez votre secteur" ? "" : secteur}>
                          {secteur}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-400 pointer-events-none" />
                  </div>
                </div>

                <div className="group">
                  <label className="mb-2 block text-sm font-semibold text-neutral-700">
                    URL de votre site web <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Globe className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-400" />
                    <input
                      type="url"
                      name="urlSite"
                      value={formData.urlSite}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl bg-white border-2 border-neutral-200 pl-11 pr-4 py-3 outline-none focus:border-[#444684] focus:ring-2 focus:ring-[#444684]/20 transition-all duration-300 placeholder:text-neutral-400"
                      placeholder="https://votre-site.fr"
                    />
                  </div>
                </div>

                <div className="group">
                  <label className="mb-2 block text-sm font-semibold text-neutral-700">
                    E-mail professionnel <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl bg-white border-2 border-neutral-200 pl-11 pr-4 py-3 outline-none focus:border-[#444684] focus:ring-2 focus:ring-[#444684]/20 transition-all duration-300 placeholder:text-neutral-400"
                      placeholder="contact@entreprise.fr"
                    />
                  </div>
                </div>
              </div>

              <div className="group">
                <label className="mb-2 block text-sm font-semibold text-neutral-700">Téléphone (optionnel)</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-400" />
                  <input
                    type="tel"
                    name="telephone"
                    value={formData.telephone}
                    onChange={handleChange}
                    className="w-full rounded-xl bg-white border-2 border-neutral-200 pl-11 pr-4 py-3 outline-none focus:border-[#444684] focus:ring-2 focus:ring-[#444684]/20 transition-all duration-300 placeholder:text-neutral-400"
                    placeholder="+33 6 12 34 56 78"
                  />
                </div>
              </div>

              <div className="group">
                <label className="mb-2 block text-sm font-semibold text-neutral-700">
                  Pourquoi vous voulez être parmi les 5 ? <span className="text-red-500">*</span>
                  <span className="ml-2 text-xs font-normal text-neutral-500">
                    ({formData.motivation.length}/200 caractères)
                  </span>
                </label>
                <textarea
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleChange}
                  required
                  maxLength={200}
                  rows={4}
                  className="w-full rounded-xl bg-white border-2 border-neutral-200 px-4 py-3 outline-none focus:border-[#444684] focus:ring-2 focus:ring-[#444684]/20 transition-all duration-300 resize-none placeholder:text-neutral-400"
                  placeholder="Expliquez-nous en quelques mots pourquoi votre entreprise serait un excellent candidat..."
                />
              </div>

              <div className="flex flex-col gap-3 pt-2">
                <button
                  type="submit"
                  disabled={submitting || placesRemaining === 0}
                  className="group relative inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#444684] to-[#524e7d] hover:from-[#3d3f75] hover:to-[#4a4770] px-8 py-4 text-base font-bold text-white shadow-lg shadow-[#444684]/30 hover:shadow-xl hover:shadow-[#444684]/40 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  {submitting ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      <span>Envoi en cours...</span>
                    </>
                  ) : placesRemaining === 0 ? (
                    <span>Places épuisées</span>
                  ) : (
                    <>
                      <Send className="h-5 w-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      <span>Postuler maintenant</span>
                    </>
                  )}
                </button>

                <p className="text-sm text-center text-[#444684] font-medium">⏱️ Réponse sous 48h</p>

                <p className="text-xs text-center text-neutral-500">
                  En soumettant ce formulaire, vous acceptez que TANSE traite vos données pour étudier votre candidature.
                </p>
              </div>
            </form>
          </div>
        )}
      </section>

      {/* FAQ Section */}
      <section className="mx-auto w-full max-w-4xl px-6 pb-20">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-neutral-900 to-neutral-700 bg-clip-text text-transparent">
            Questions fréquentes
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl bg-white/70 backdrop-blur-sm border border-white shadow-md hover:shadow-lg transition-all duration-300"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full p-6 text-left flex items-center justify-between gap-4"
              >
                <span className="font-semibold text-neutral-900 text-lg">{faq.question}</span>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-[#444684]/10 flex items-center justify-center transition-transform duration-300 ${faqOpen === index ? 'rotate-180' : ''}`}>
                  <ChevronDown className="h-5 w-5 text-[#444684]" />
                </div>
              </button>

              {faqOpen === index && (
                <div className="px-6 pb-6 text-neutral-700 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Section "Ce qui est inclus" - LISTE EXACTE DU BRIEF */}
      <section className="mx-auto w-full max-w-7xl px-6 pb-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-neutral-900 to-neutral-700 bg-clip-text text-transparent">
            Ce que vous obtenez GRATUITEMENT
          </h2>
          <p className="mt-3 text-neutral-600 max-w-2xl mx-auto">
            Checklist visuelle d'un setup complet (valeur 2 990€)
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div className="flex items-start gap-4 p-6 rounded-2xl bg-white/70 backdrop-blur-sm border border-white shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-neutral-900 mb-1">✅ Audit SEO + GEO complet</h3>
              <p className="text-sm text-neutral-600">Valeur 990€</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-6 rounded-2xl bg-white/70 backdrop-blur-sm border border-white shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-neutral-900 mb-1">✅ Optimisation Google Business Profile</h3>
              <p className="text-sm text-neutral-600">Setup complet GBP</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-6 rounded-2xl bg-white/70 backdrop-blur-sm border border-white shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-neutral-900 mb-1">✅ Setup call-tracking + Analytics</h3>
              <p className="text-sm text-neutral-600">Suivi des appels et conversions</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-6 rounded-2xl bg-white/70 backdrop-blur-sm border border-white shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-neutral-900 mb-1">✅ 20 citations locales + correction NAP</h3>
              <p className="text-sm text-neutral-600">Cohérence sur les annuaires</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-6 rounded-2xl bg-white/70 backdrop-blur-sm border border-white shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-neutral-900 mb-1">✅ Configuration Schema.org</h3>
              <p className="text-sm text-neutral-600">Données structurées SEO</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-6 rounded-2xl bg-white/70 backdrop-blur-sm border border-white shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-neutral-900 mb-1">✅ 10 tests IA</h3>
              <p className="text-sm text-neutral-600">ChatGPT, Perplexity, Claude</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-6 rounded-2xl bg-white/70 backdrop-blur-sm border border-white shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-neutral-900 mb-1">✅ Plan d'action 30 jours</h3>
              <p className="text-sm text-neutral-600">Roadmap personnalisée</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-6 rounded-2xl bg-gradient-to-br from-[#FFB800]/10 to-[#FF5757]/10 border-2 border-[#FFB800]/30 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <Gift className="h-6 w-6 text-[#FF5757] flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-neutral-900 mb-1">🎁 Suivi 3 mois</h3>
              <p className="text-sm text-neutral-600">Accompagnement personnalisé</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
