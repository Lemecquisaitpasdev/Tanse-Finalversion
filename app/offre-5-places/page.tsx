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
  Users
} from "lucide-react";

export default function OffreCinqPlacesPage() {
  const [placesRemaining, setPlacesRemaining] = useState<number | null>(null);
  const [loadingPlaces, setLoadingPlaces] = useState(true);

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

    // Validation côté client
    if (formData.motivation.length > 200) {
      setError("La motivation ne doit pas dépasser 200 caractères");
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
      setError(err?.message || "Une erreur s'est produite. Veuillez réessayer.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="bg-[#E4E4E4] text-[#0b0b0c]">
      {/* Hero Section - Offre Limitée */}
      <section className="relative mx-auto w-full max-w-7xl px-6 py-16 md:py-24 overflow-hidden">
        {/* Animated background gradients */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-[#FFB800]/20 to-[#FF5757]/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-[#444684]/20 to-purple-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s' }} />

        <div className="relative z-10">
          {/* Badge Offre Limitée */}
          <div className="flex items-center gap-2 mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="p-1.5 rounded-lg bg-gradient-to-br from-[#FFB800] to-[#FF5757] shadow-lg animate-pulse">
              <Gift className="h-4 w-4 text-white" />
            </div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] bg-gradient-to-r from-[#FF5757] to-[#FFB800] bg-clip-text text-transparent">
              Offre Limitée — {loadingPlaces ? "..." : `${placesRemaining} place${placesRemaining !== 1 ? 's' : ''} restante${placesRemaining !== 1 ? 's' : ''}`}
            </p>
          </div>

          <h1 className="text-[clamp(36px,5vw,64px)] font-bold leading-[1.1] bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-700 bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
            Offre Exclusive : 5 entreprises seulement
          </h1>

          <p className="mt-6 max-w-2xl text-[19px] leading-relaxed text-neutral-700 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            Bénéficiez <strong className="text-neutral-900">gratuitement</strong> d'une{" "}
            <span className="bg-gradient-to-r from-[#444684] to-[#524e7d] bg-clip-text text-transparent font-bold">
              mise en place complète SEO + GEO
            </span>{" "}
            d'une valeur de <strong className="text-[#FF5757]">2 990 €</strong>.
            <br />
            <span className="text-neutral-600 text-[17px]">
              Places limitées pour garantir un accompagnement premium et personnalisé.
            </span>
          </p>

          {/* Compteur de places - Mise en avant */}
          <div className="mt-10 inline-block animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#FFB800] via-[#FF5757] to-[#FF5757] p-1 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
              <div className="relative bg-white rounded-xl px-8 py-6">
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#FF5757] to-[#FFB800] shadow-lg">
                    <span className="text-3xl font-bold text-white">
                      {loadingPlaces ? "..." : placesRemaining}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-neutral-600 uppercase tracking-wide">
                      Places restantes
                    </p>
                    <p className="text-2xl font-bold bg-gradient-to-r from-[#FF5757] to-[#FFB800] bg-clip-text text-transparent">
                      sur 5 au total
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bénéfices de l'offre */}
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-400">
            <div className="flex items-start gap-3 px-5 py-4 rounded-2xl bg-white/70 backdrop-blur-sm border border-white shadow-sm hover:shadow-md transition-shadow">
              <div className="flex-shrink-0 p-2 rounded-lg bg-gradient-to-br from-[#444684] to-[#524e7d]">
                <TrendingUp className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-neutral-900">Optimisation SEO</h3>
                <p className="text-sm text-neutral-600">Configuration technique complète</p>
              </div>
            </div>

            <div className="flex items-start gap-3 px-5 py-4 rounded-2xl bg-white/70 backdrop-blur-sm border border-white shadow-sm hover:shadow-md transition-shadow">
              <div className="flex-shrink-0 p-2 rounded-lg bg-gradient-to-br from-[#444684] to-[#524e7d]">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-neutral-900">Optimisation GEO</h3>
                <p className="text-sm text-neutral-600">Visibilité sur moteurs IA</p>
              </div>
            </div>

            <div className="flex items-start gap-3 px-5 py-4 rounded-2xl bg-white/70 backdrop-blur-sm border border-white shadow-sm hover:shadow-md transition-shadow">
              <div className="flex-shrink-0 p-2 rounded-lg bg-gradient-to-br from-[#444684] to-[#524e7d]">
                <Users className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-neutral-900">Accompagnement</h3>
                <p className="text-sm text-neutral-600">Suivi personnalisé premium</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formulaire de candidature */}
      <section className="mx-auto w-full max-w-4xl px-6 pb-20">
        {submitted ? (
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 p-8 md:p-12 border border-green-200/50 shadow-xl">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-200/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-200/20 rounded-full blur-3xl" />

            <div className="relative z-10 text-center">
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-emerald-500 shadow-lg animate-in zoom-in duration-500">
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
                <p className="text-sm text-neutral-600 mb-1">
                  Email de confirmation envoyé à
                </p>
                <p className="font-bold text-neutral-900 text-lg">{formData.email || "votre adresse"}</p>
              </div>

              <div className="mt-10 p-6 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200/50 max-w-xl mx-auto">
                <p className="text-sm text-neutral-700">
                  <strong className="text-neutral-900">Note :</strong> Cette offre est soumise à validation.
                  Nous sélectionnons les entreprises ayant le meilleur potentiel de croissance.
                </p>
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
            {/* Decorative gradient orbs */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#444684]/10 to-purple-200/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-[#FFB800]/10 to-[#FF5757]/10 rounded-full blur-3xl" />

            {/* Header */}
            <div className="relative z-10 p-8 md:p-10 border-b border-neutral-100 bg-white/60 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-xl bg-gradient-to-br from-[#444684] to-[#524e7d] shadow-lg">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#444684] to-[#524e7d] bg-clip-text text-transparent">
                  Formulaire de candidature
                </h2>
              </div>
              <p className="text-neutral-600">
                Remplissez ce formulaire pour postuler à l'une des 5 places disponibles.
                <br />
                <span className="text-sm text-neutral-500">
                  Les candidatures sont étudiées selon le potentiel de croissance de votre entreprise.
                </span>
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="relative z-10 p-8 md:p-10 space-y-6">
              {error && (
                <div className="rounded-2xl bg-gradient-to-br from-red-50 to-rose-50 border-2 border-red-200 p-5 text-sm text-red-800 animate-in fade-in slide-in-from-top-2 duration-300">
                  <div className="flex items-center gap-2 font-semibold mb-1">
                    <div className="h-2 w-2 rounded-full bg-red-500" />
                    Erreur
                  </div>
                  {error}
                </div>
              )}

              <div className="grid gap-5 md:grid-cols-2">
                {/* Nom entreprise */}
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

                {/* Secteur d'activité */}
                <div className="group">
                  <label className="mb-2 block text-sm font-semibold text-neutral-700">
                    Secteur d'activité <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="secteurActivite"
                    value={formData.secteurActivite}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl bg-white border-2 border-neutral-200 px-4 py-3 outline-none focus:border-[#444684] focus:ring-2 focus:ring-[#444684]/20 transition-all duration-300 placeholder:text-neutral-400"
                    placeholder="Ex: Automobile, Immobilier, Santé..."
                  />
                </div>

                {/* URL du site */}
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

                {/* Email */}
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

              {/* Téléphone */}
              <div className="group">
                <label className="mb-2 block text-sm font-semibold text-neutral-700">
                  Téléphone (optionnel)
                </label>
                <input
                  type="tel"
                  name="telephone"
                  value={formData.telephone}
                  onChange={handleChange}
                  className="w-full rounded-xl bg-white border-2 border-neutral-200 px-4 py-3 outline-none focus:border-[#444684] focus:ring-2 focus:ring-[#444684]/20 transition-all duration-300 placeholder:text-neutral-400"
                  placeholder="+33 6 12 34 56 78"
                />
              </div>

              {/* Motivation */}
              <div className="group">
                <label className="mb-2 block text-sm font-semibold text-neutral-700">
                  Pourquoi votre entreprise mérite cette offre ? <span className="text-red-500">*</span>
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
                  placeholder="Expliquez-nous en quelques mots pourquoi votre entreprise serait un excellent candidat pour cette offre (objectifs, situation actuelle, ambitions...)"
                />
              </div>

              {/* Submit Button */}
              <div className="flex flex-col gap-4 pt-2">
                <button
                  type="submit"
                  disabled={submitting || placesRemaining === 0}
                  className="group relative inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#444684] to-[#524e7d] hover:from-[#3d3f75] hover:to-[#4a4770] px-8 py-4 text-base font-bold text-white shadow-lg shadow-[#444684]/30 hover:shadow-xl hover:shadow-[#444684]/40 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300 overflow-hidden"
                >
                  {/* Shimmer effect */}
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
                      <span>Soumettre ma candidature</span>
                    </>
                  )}
                </button>

                <p className="text-xs text-center text-neutral-500">
                  En soumettant ce formulaire, vous acceptez que TANSE traite vos données pour étudier votre candidature.
                  <br />
                  Les candidatures sont sélectionnées selon des critères de potentiel de croissance.
                </p>
              </div>
            </form>
          </div>
        )}
      </section>

      {/* Section d'information - Ce qui est inclus */}
      <section className="mx-auto w-full max-w-7xl px-6 pb-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-neutral-900 to-neutral-700 bg-clip-text text-transparent">
            Ce qui est inclus (valeur 2 990 €)
          </h2>
          <p className="mt-3 text-neutral-600 max-w-2xl mx-auto">
            Un accompagnement complet pour booster votre visibilité en ligne
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="group relative overflow-hidden rounded-3xl bg-white/70 backdrop-blur-sm p-8 border border-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#444684]/20 to-purple-200/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="inline-flex p-3 rounded-2xl bg-gradient-to-br from-[#444684] to-[#524e7d] shadow-lg mb-4">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-2">Audit SEO complet</h3>
              <p className="text-neutral-600 leading-relaxed">
                Analyse technique approfondie de votre site web, identification des points d'amélioration et opportunités.
              </p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-3xl bg-white/70 backdrop-blur-sm p-8 border border-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-200/20 to-[#444684]/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="inline-flex p-3 rounded-2xl bg-gradient-to-br from-[#444684] to-[#524e7d] shadow-lg mb-4">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-2">Configuration GEO</h3>
              <p className="text-neutral-600 leading-relaxed">
                Optimisation de votre présence sur les moteurs de recherche IA (ChatGPT, Perplexity, etc.).
              </p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-3xl bg-white/70 backdrop-blur-sm p-8 border border-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-200/20 to-[#444684]/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="inline-flex p-3 rounded-2xl bg-gradient-to-br from-[#444684] to-[#524e7d] shadow-lg mb-4">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-2">Suivi pendant 3 mois</h3>
              <p className="text-neutral-600 leading-relaxed">
                Accompagnement personnalisé avec un expert dédié pendant 3 mois pour garantir les résultats.
              </p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-3xl bg-white/70 backdrop-blur-sm p-8 border border-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#FFB800]/20 to-[#FF5757]/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="inline-flex p-3 rounded-2xl bg-gradient-to-br from-[#444684] to-[#524e7d] shadow-lg mb-4">
                <Building2 className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-2">Optimisations techniques</h3>
              <p className="text-neutral-600 leading-relaxed">
                Corrections SEO on-page, optimisation des balises, structure, et performances de votre site.
              </p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-3xl bg-white/70 backdrop-blur-sm p-8 border border-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-200/20 to-emerald-200/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="inline-flex p-3 rounded-2xl bg-gradient-to-br from-[#444684] to-[#524e7d] shadow-lg mb-4">
                <Globe className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-2">Stratégie de contenu</h3>
              <p className="text-neutral-600 leading-relaxed">
                Plan éditorial sur-mesure pour améliorer votre visibilité organique et votre autorité.
              </p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-3xl bg-white/70 backdrop-blur-sm p-8 border border-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-200/20 to-purple-200/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="inline-flex p-3 rounded-2xl bg-gradient-to-br from-[#444684] to-[#524e7d] shadow-lg mb-4">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-2">Formation personnalisée</h3>
              <p className="text-neutral-600 leading-relaxed">
                Sessions de formation pour votre équipe sur les bonnes pratiques SEO et GEO.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
