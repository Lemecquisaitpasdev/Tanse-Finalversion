"use client";

import { useState, useEffect, FormEvent } from "react";
import {
  CheckCircle2,
  Loader2,
  Send,
  Clock,
  TrendingUp,
  Zap,
  Building2,
  Users,
  Target,
  ChevronDown,
  Award,
  Sparkles,
  Shield,
  Rocket
} from "lucide-react";
import { trackFormStart, trackFormSubmit, trackFAQOpen } from "@/lib/analytics";
import SiteHeader from "@/app/components/SiteHeader";

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

export default function OffreCinqPlacesClient() {
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
      answer: "TANSE cherche à construire 5 études de cas pour prouver l'efficacité du GEO (Generative Engine Optimization). En échange de ce setup premium normalement à 1 490€, nous utiliserons vos résultats comme étude de cas (données anonymisées ou avec votre accord)."
    },
    {
      question: "Dois-je m'engager sur un contrat long ?",
      answer: "Non, le setup est offert sans aucun engagement. Après le setup initial, vous décidez librement de continuer avec nous ou non, sans aucun engagement contractuel."
    },
    {
      question: "Que se passe-t-il après le setup ?",
      answer: "Après le setup initial, vous pouvez choisir de continuer avec nos forfaits mensuels à partir de 850€/mois pour un suivi continu et l'optimisation de vos résultats, mais c'est entièrement facultatif."
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
          <h1>Offre Exclusive : 5 entreprises seulement - Setup SEO + GEO offert (valeur 1 490€)</h1>
          <p>Soyez parmi les premières PME françaises visibles sur ChatGPT, Perplexity et Claude. TANSE offre gratuitement un setup SEO + GEO complet à 5 entreprises sélectionnées.</p>
          <h2>Ce qui est inclus (valeur 1 490€)</h2>
          <ul>
            <li>Audit SEO + GEO complet (valeur 990€)</li>
            <li>Optimisation Google Business Profile</li>
            <li>Setup call-tracking + Analytics</li>
            <li>20 citations locales + correction NAP</li>
            <li>Configuration Schema.org</li>
            <li>10 tests IA (ChatGPT, Perplexity, Claude)</li>
          </ul>
        </div>
      </noscript>

      {/* Hero Section - Split Layout */}
      <section className="relative min-h-screen flex items-center px-6 lg:px-32 py-20">
        {/* Badge places restantes - Position sticky */}
        {!loadingPlaces && placesRemaining !== null && (
          <div className="fixed top-8 right-8 z-50 bg-[#444684] text-white px-6 py-3 rounded-full shadow-xl font-bold text-sm">
            {placesRemaining === 0 ? "PLACES ÉPUISÉES" : `${placesRemaining} PLACE${placesRemaining > 1 ? 'S' : ''} RESTANTE${placesRemaining > 1 ? 'S' : ''}`}
          </div>
        )}

        <div className="max-w-[1400px] mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Colonne gauche - Texte */}
            <div className="space-y-10">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#444684] text-white rounded-full text-sm font-medium">
                <Sparkles className="w-4 h-4" />
                OFFRE LIMITÉE
              </div>

              {/* Titre principal */}
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-[#444684] leading-[1.1]">
                  5 entreprises seulement : Setup SEO + GEO offert
                </h1>
                <p className="text-2xl lg:text-3xl text-[#444684] opacity-70 font-light">
                  (valeur 1 490€)
                </p>
              </div>

              {/* Description */}
              <p className="text-xl lg:text-2xl text-[#444684] leading-relaxed opacity-90">
                Soyez parmi les premières PME françaises visibles sur ChatGPT, Perplexity et Claude.
              </p>

              {/* CTA */}
              <button
                onClick={() => {
                  document.getElementById("candidature-form")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                  });
                }}
                className="inline-flex items-center gap-3 px-10 py-5 bg-[#444684] text-white text-lg font-semibold rounded-xl hover:opacity-90 transition-all shadow-lg"
              >
                Candidater maintenant
                <Send className="w-5 h-5" />
              </button>

              {/* Points clés */}
              <div className="flex flex-wrap gap-6 pt-6">
                <div className="flex items-center gap-2 text-[#444684]">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="font-medium">100% Gratuit</span>
                </div>
                <div className="flex items-center gap-2 text-[#444684]">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="font-medium">Sans engagement</span>
                </div>
                <div className="flex items-center gap-2 text-[#444684]">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="font-medium">Résultats mesurables</span>
                </div>
              </div>
            </div>

            {/* Colonne droite - Animation Spline 3D */}
            <div className="relative lg:order-last order-first">
              <div className="aspect-square w-full max-w-[600px] mx-auto">
                <script type="module" src="https://unpkg.com/@splinetool/viewer@1.11.4/build/spline-viewer.js"></script>
                <spline-viewer
                  url="https://prod.spline.design/JekVEQwYRU1hgUoK/scene.splinecode"
                  className="w-full h-full"
                ></spline-viewer>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section - Pourquoi cette offre */}
      <section className="px-6 lg:px-32 py-32">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-20 space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#444684]">
              Pourquoi cette offre ?
            </h2>
            <p className="text-xl text-[#444684] opacity-80 max-w-3xl mx-auto leading-relaxed">
              TANSE cherche à construire 5 études de cas pour prouver l'efficacité du GEO
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-md transition-all space-y-4">
              <div className="w-14 h-14 bg-[#444684]/5 rounded-xl flex items-center justify-center">
                <Target className="w-7 h-7 text-[#444684]" />
              </div>
              <h3 className="text-xl font-bold text-[#444684]">Visibilité IA</h3>
              <p className="text-[#444684] opacity-70 leading-relaxed">
                73% des PME sont invisibles sur ChatGPT. Soyez parmi les pionniers.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-md transition-all space-y-4">
              <div className="w-14 h-14 bg-[#444684]/5 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-7 h-7 text-[#444684]" />
              </div>
              <h3 className="text-xl font-bold text-[#444684]">Avantage concurrentiel</h3>
              <p className="text-[#444684] opacity-70 leading-relaxed">
                Prenez de l'avance avant que vos concurrents ne découvrent le GEO.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-md transition-all space-y-4">
              <div className="w-14 h-14 bg-[#444684]/5 rounded-xl flex items-center justify-center">
                <Rocket className="w-7 h-7 text-[#444684]" />
              </div>
              <h3 className="text-xl font-bold text-[#444684]">Setup premium offert</h3>
              <p className="text-[#444684] opacity-70 leading-relaxed">
                Setup normalement facturé 1 490€, offert en échange de votre retour d'expérience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section - Pour qui */}
      <section className="px-6 lg:px-32 py-32 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-20 space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#444684]">
              Pour qui ?
            </h2>
          </div>

          <div className="space-y-6">
            {/* Item 1 */}
            <div className="flex items-start gap-6 p-8 bg-[#e4e4e4] rounded-2xl hover:shadow-sm transition-all">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0">
                <Building2 className="w-6 h-6 text-[#444684]" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-[#444684]">PME locales</h3>
                <p className="text-[#444684] opacity-70 leading-relaxed">
                  Restaurants, garages, cabinets médicaux, commerces de proximité cherchant à augmenter leur visibilité locale.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-start gap-6 p-8 bg-[#e4e4e4] rounded-2xl hover:shadow-sm transition-all">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-[#444684]" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-[#444684]">Services professionnels</h3>
                <p className="text-[#444684] opacity-70 leading-relaxed">
                  Avocats, comptables, consultants souhaitant être recommandés par les IA génératives.
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex items-start gap-6 p-8 bg-[#e4e4e4] rounded-2xl hover:shadow-sm transition-all">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0">
                <Zap className="w-6 h-6 text-[#444684]" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-[#444684]">Entreprises motivées</h3>
                <p className="text-[#444684] opacity-70 leading-relaxed">
                  Vous êtes prêt(e) à investir du temps pour maximiser les résultats et partager votre retour d'expérience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section - Ce que vous obtenez GRATUITEMENT */}
      <section className="px-6 lg:px-32 py-32">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-20 space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#444684]">
              Ce que vous obtenez GRATUITEMENT
            </h2>
            <p className="text-2xl text-[#444684] opacity-60">
              Valeur totale : 1 490€
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: Award, text: "Audit SEO + GEO complet", value: "490€" },
              { icon: Target, text: "Optimisation Google Business Profile", value: "290€" },
              { icon: Clock, text: "Setup call-tracking + Analytics", value: "190€" },
              { icon: CheckCircle2, text: "20 citations locales + correction NAP", value: "290€" },
              { icon: Shield, text: "Configuration Schema.org avancée", value: "140€" },
              { icon: Sparkles, text: "10 tests IA (ChatGPT, Perplexity, Claude)", value: "90€" }
            ].map((item, index) => (
              <div key={`offer-item-${item.text.slice(0, 15)}`} className="flex items-start gap-5 p-6 bg-white rounded-xl shadow-sm">
                <div className="flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4">
                    <span className="text-[#444684] font-medium text-lg">{item.text}</span>
                    <span className="text-[#444684] opacity-50 text-sm whitespace-nowrap">{item.value}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section - Critères d'éligibilité */}
      <section className="px-6 lg:px-32 py-32 bg-white">
        <div className="max-w-[1000px] mx-auto">
          <div className="text-center mb-20 space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#444684]">
              Critères d'éligibilité
            </h2>
          </div>

          <div className="space-y-4">
            {[
              "Site web existant (même basique)",
              "Fiche Google Business Profile active",
              "Entreprise en activité depuis au moins 6 mois",
              "Motivation à partager votre retour d'expérience",
              "Secteur d'activité local (restaurant, commerce, services, etc.)",
              "Disponibilité pour quelques échanges durant le setup",
              "Accord pour utiliser vos résultats en étude de cas (données anonymisées ou avec consentement)"
            ].map((critere, index) => (
              <div key={`critere-${critere.slice(0, 20)}`} className="flex items-start gap-4 p-5 bg-[#e4e4e4] rounded-xl">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-[#444684] text-lg">{critere}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section - Formulaire de candidature */}
      <section id="candidature-form" className="px-6 lg:px-32 py-32">
        <div className="max-w-[800px] mx-auto">
          <div className="text-center mb-16 space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#444684]">
              Candidatez maintenant
            </h2>
            <p className="text-xl text-[#444684] opacity-70">
              ⏱️ Réponse sous 48h
            </p>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-8 bg-white p-10 lg:p-16 rounded-3xl shadow-sm">
              {/* Nom entreprise */}
              <div className="space-y-3">
                <label htmlFor="nomEntreprise" className="block text-[#444684] font-medium text-lg">
                  Nom de votre entreprise *
                </label>
                <input
                  type="text"
                  id="nomEntreprise"
                  name="nomEntreprise"
                  value={formData.nomEntreprise}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 border-2 border-[#444684]/20 rounded-xl focus:border-[#444684] focus:outline-none text-[#444684] text-lg placeholder:text-[#444684]/30 transition-all"
                  placeholder="Mon Entreprise SARL"
                />
              </div>

              {/* Secteur */}
              <div className="space-y-3">
                <label htmlFor="secteurActivite" className="block text-[#444684] font-medium text-lg">
                  Secteur d'activité *
                </label>
                <select
                  id="secteurActivite"
                  name="secteurActivite"
                  value={formData.secteurActivite}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 border-2 border-[#444684]/20 rounded-xl focus:border-[#444684] focus:outline-none text-[#444684] text-lg transition-all appearance-none cursor-pointer"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23444684' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 1.5rem center',
                    backgroundSize: '1.5rem'
                  }}
                >
                  {SECTEURS.map((secteur) => (
                    <option key={secteur} value={secteur}>
                      {secteur}
                    </option>
                  ))}
                </select>
              </div>

              {/* Email + Téléphone */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label htmlFor="email" className="block text-[#444684] font-medium text-lg">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 border-2 border-[#444684]/20 rounded-xl focus:border-[#444684] focus:outline-none text-[#444684] text-lg placeholder:text-[#444684]/30 transition-all"
                    placeholder="contact@entreprise.fr"
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
                    className="w-full px-6 py-4 border-2 border-[#444684]/20 rounded-xl focus:border-[#444684] focus:outline-none text-[#444684] text-lg placeholder:text-[#444684]/30 transition-all"
                    placeholder="06 12 34 56 78"
                  />
                </div>
              </div>

              {/* URL Site */}
              <div className="space-y-3">
                <label htmlFor="urlSite" className="block text-[#444684] font-medium text-lg">
                  URL de votre site web *
                </label>
                <input
                  type="url"
                  id="urlSite"
                  name="urlSite"
                  value={formData.urlSite}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 border-2 border-[#444684]/20 rounded-xl focus:border-[#444684] focus:outline-none text-[#444684] text-lg placeholder:text-[#444684]/30 transition-all"
                  placeholder="https://monentreprise.fr"
                />
              </div>

              {/* Motivation */}
              <div className="space-y-3">
                <label htmlFor="motivation" className="block text-[#444684] font-medium text-lg">
                  Pourquoi souhaitez-vous bénéficier de cette offre ? * (max 200 caractères)
                </label>
                <textarea
                  id="motivation"
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleChange}
                  required
                  maxLength={200}
                  rows={4}
                  className="w-full px-6 py-4 border-2 border-[#444684]/20 rounded-xl focus:border-[#444684] focus:outline-none text-[#444684] text-lg placeholder:text-[#444684]/30 transition-all resize-none"
                  placeholder="Décrivez brièvement votre motivation..."
                />
                <div className="text-right text-sm text-[#444684] opacity-50">
                  {formData.motivation.length}/200 caractères
                </div>
              </div>

              {/* Error message */}
              {error && (
                <div className="p-5 bg-red-50 border-2 border-red-200 rounded-xl text-red-600 text-center">
                  {error}
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
                    Envoyer ma candidature
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          ) : (
            <div className="text-center py-20 px-10 bg-white rounded-3xl shadow-sm space-y-8">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-green-100 rounded-full">
                <CheckCircle2 className="w-12 h-12 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-[#444684]">
                Candidature envoyée avec succès !
              </h3>
              <p className="text-xl text-[#444684] opacity-70 max-w-md mx-auto leading-relaxed">
                Merci pour votre candidature. Nous étudions votre profil et vous recontacterons sous 48h.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Section - FAQ */}
      <section className="px-6 lg:px-32 py-32 bg-white">
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
                className="bg-[#e4e4e4] rounded-2xl overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-8 text-left hover:bg-[#444684]/5 transition-all"
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
                  <div className="px-8 pb-8 text-[#444684] opacity-80 text-lg leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="px-6 lg:px-32 py-32 text-center">
        <div className="max-w-[800px] mx-auto space-y-10">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#444684]">
            Prêt à devenir visible sur les IA génératives ?
          </h2>
          <button
            onClick={() => {
              document.getElementById("candidature-form")?.scrollIntoView({
                behavior: "smooth",
                block: "start"
              });
            }}
            className="inline-flex items-center gap-3 px-12 py-6 bg-[#444684] text-white text-xl font-semibold rounded-xl hover:opacity-90 transition-all shadow-xl"
          >
            Candidater maintenant
            <Send className="w-6 h-6" />
          </button>
        </div>
      </section>
    </main>
  );
}
