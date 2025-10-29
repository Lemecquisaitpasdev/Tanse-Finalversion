"use client";

import { useState, FormEvent } from "react";
import {
  CheckCircle2,
  Loader2,
  Mail,
  MessageSquare,
  Send,
  Sparkles,
  Clock,
  MapPin,
  Shield
} from "lucide-react";
import SplineLazy from "../components/SplineLazy";
import CallBooking from "../components/CallBooking";

export default function Page() {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    telephone: "",
    entreprise: "",
    sujet: "rdv",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
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
        nom: "",
        email: "",
        telephone: "",
        entreprise: "",
        sujet: "rdv",
        message: "",
      });
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
      {/* Hero Section - Modern & Dynamic */}
      <section className="relative mx-auto w-full max-w-7xl px-6 py-16 md:py-24 overflow-hidden">
        {/* Animated background gradients */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-indigo-200/40 to-purple-200/40 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-pink-200/40 to-rose-200/40 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s' }} />

        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="p-1.5 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg">
              <Sparkles className="h-4 w-4 text-white" />
            </div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Contactez-nous
            </p>
          </div>

          <h1 className="text-[clamp(36px,5vw,64px)] font-bold leading-[1.1] bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-700 bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
            Discutons de vos objectifs locaux
          </h1>

          <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-neutral-600 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            Que vous soyez concession, garage, atelier ou réseau, notre équipe d'experts SEO local
            est là pour vous accompagner. Réponse garantie sous 24h ouvrées.
          </p>

          {/* Quick stats */}
          <div className="mt-10 flex flex-wrap gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-white/80 shadow-sm">
              <Clock className="h-4 w-4 text-indigo-600" />
              <span className="text-sm font-medium text-neutral-700">Réponse sous 24h</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-white/80 shadow-sm">
              <MapPin className="h-4 w-4 text-indigo-600" />
              <span className="text-sm font-medium text-neutral-700">France & Pays francophones</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-white/80 shadow-sm">
              <Shield className="h-4 w-4 text-indigo-600" />
              <span className="text-sm font-medium text-neutral-700">Conforme RGPD</span>
            </div>
          </div>
        </div>
      </section>

      {/* Spline 3D Scene */}
      <section className="relative mx-auto w-full max-w-7xl px-0 md:px-6 mb-12">
        <div className="w-full overflow-hidden rounded-none md:rounded-3xl shadow-2xl border-y md:border border-white/60">
          <SplineLazy
            url="https://prod.spline.design/ffoyz4KXe2hyPcuJ/scene.splinecode"
            loading="lazy"
            threshold={0.2}
            className="block w-full h-[46vh] md:h-[58vh] bg-gradient-to-br from-neutral-100 to-neutral-50"
          />
        </div>
      </section>

      {/* Main Content Grid - Booking + Contact Form */}
      <section className="mx-auto w-full max-w-7xl px-6 pb-20">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left: Calendar Booking */}
          <div className="animate-in fade-in slide-in-from-left duration-700">
            <CallBooking />
          </div>

          {/* Right: Contact Form */}
          <div className="animate-in fade-in slide-in-from-right duration-700">
          {submitted ? (
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 p-8 md:p-10 border border-green-200/50 shadow-xl h-full flex flex-col items-center justify-center">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-green-200/20 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-200/20 rounded-full blur-3xl" />

                <div className="relative z-10 text-center">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-emerald-500 shadow-lg animate-in zoom-in duration-500">
                    <CheckCircle2 className="h-12 w-12 text-white" />
                  </div>

                  <h3 className="mt-6 text-3xl font-bold bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent">
                    Message envoyé !
                  </h3>

                  <p className="mt-3 text-neutral-600 max-w-md mx-auto">
                    Nous avons bien reçu votre message. Notre équipe vous recontactera sous 24h ouvrées
                    pour discuter de vos besoins en détail.
                  </p>

                  <div className="mt-8 p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/80 shadow-md inline-block">
                    <Mail className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <p className="text-sm text-neutral-600">
                      Email de confirmation envoyé à
                    </p>
                    <p className="font-semibold text-neutral-800 mt-1">{formData.email}</p>
                  </div>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-green-500/30 hover:shadow-xl hover:shadow-green-500/40 transition-all duration-300"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              </div>
            ) : (
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-50 via-neutral-50 to-stone-50 border border-white/60 shadow-2xl">
                {/* Decorative gradient orbs */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-slate-200/30 to-neutral-200/30 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-neutral-200/30 to-stone-200/30 rounded-full blur-3xl" />

                {/* Header */}
                <div className="relative z-10 p-8 md:p-10 border-b border-white/50 bg-white/40 backdrop-blur-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-xl bg-gradient-to-br from-neutral-700 to-neutral-900 shadow-lg">
                      <MessageSquare className="h-6 w-6 text-white" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-neutral-900 to-neutral-700 bg-clip-text text-transparent">
                      Formulaire de contact
                    </h2>
                  </div>
                  <p className="text-neutral-600">
                    Vous préférez nous écrire ? Remplissez le formulaire ci-dessous.
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
                    {/* Nom */}
                    <div className="group">
                      <label className="mb-2 block text-sm font-semibold text-neutral-700">
                        Nom complet <span className="text-red-500">*</span>
                      </label>
                      <input
                        name="nom"
                        value={formData.nom}
                        onChange={handleChange}
                        required
                        className="w-full rounded-xl bg-white/80 backdrop-blur-sm border-2 border-white/80 px-4 py-3 outline-none focus:border-neutral-400 focus:bg-white focus:shadow-lg focus:shadow-neutral-200/50 transition-all duration-300 placeholder:text-neutral-400"
                        placeholder="Alex Martin"
                      />
                    </div>

                    {/* Email */}
                    <div className="group">
                      <label className="mb-2 block text-sm font-semibold text-neutral-700">
                        E-mail <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full rounded-xl bg-white/80 backdrop-blur-sm border-2 border-white/80 px-4 py-3 outline-none focus:border-neutral-400 focus:bg-white focus:shadow-lg focus:shadow-neutral-200/50 transition-all duration-300 placeholder:text-neutral-400"
                        placeholder="alex@entreprise.fr"
                      />
                    </div>

                    {/* Téléphone */}
                    <div className="group">
                      <label className="mb-2 block text-sm font-semibold text-neutral-700">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        name="telephone"
                        value={formData.telephone}
                        onChange={handleChange}
                        className="w-full rounded-xl bg-white/80 backdrop-blur-sm border-2 border-white/80 px-4 py-3 outline-none focus:border-neutral-400 focus:bg-white focus:shadow-lg focus:shadow-neutral-200/50 transition-all duration-300 placeholder:text-neutral-400"
                        placeholder="+33 6 12 34 56 78"
                      />
                    </div>

                    {/* Entreprise */}
                    <div className="group">
                      <label className="mb-2 block text-sm font-semibold text-neutral-700">
                        Entreprise
                      </label>
                      <input
                        name="entreprise"
                        value={formData.entreprise}
                        onChange={handleChange}
                        className="w-full rounded-xl bg-white/80 backdrop-blur-sm border-2 border-white/80 px-4 py-3 outline-none focus:border-neutral-400 focus:bg-white focus:shadow-lg focus:shadow-neutral-200/50 transition-all duration-300 placeholder:text-neutral-400"
                        placeholder="TANSE Auto"
                      />
                    </div>
                  </div>

                  {/* Sujet */}
                  <div className="group">
                    <label className="mb-2 block text-sm font-semibold text-neutral-700">
                      Sujet <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="sujet"
                      value={formData.sujet}
                      onChange={handleChange}
                      className="w-full rounded-xl bg-white/80 backdrop-blur-sm border-2 border-white/80 px-4 py-3 outline-none focus:border-neutral-400 focus:bg-white focus:shadow-lg focus:shadow-neutral-200/50 transition-all duration-300 cursor-pointer"
                    >
                      <option value="rdv">💼 Prendre un rendez-vous</option>
                      <option value="devis">💰 Demander un devis</option>
                      <option value="question">💬 Une question</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="group">
                    <label className="mb-2 block text-sm font-semibold text-neutral-700">
                      Votre message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full rounded-xl bg-white/80 backdrop-blur-sm border-2 border-white/80 px-4 py-3 outline-none focus:border-neutral-400 focus:bg-white focus:shadow-lg focus:shadow-neutral-200/50 transition-all duration-300 resize-none placeholder:text-neutral-400"
                      placeholder="Parlez-nous de vos objectifs, du contexte de votre entreprise, des villes concernées..."
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="group relative inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-neutral-800 via-neutral-900 to-neutral-800 hover:from-neutral-700 hover:via-neutral-800 hover:to-neutral-700 px-8 py-4 text-base font-bold text-white shadow-lg shadow-neutral-900/30 hover:shadow-xl hover:shadow-neutral-900/40 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300 overflow-hidden"
                    >
                      {/* Shimmer effect */}
                      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                      {submitting ? (
                        <>
                          <Loader2 className="h-5 w-5 animate-spin" />
                          <span>Envoi en cours...</span>
                        </>
                      ) : (
                        <>
                          <Send className="h-5 w-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                          <span>Envoyer ma demande</span>
                        </>
                      )}
                    </button>

                    <span className="text-sm text-neutral-600">
                      ou directement par email :{" "}
                      <a
                        className="font-semibold text-neutral-800 underline hover:text-neutral-600 transition-colors"
                        href="mailto:contact@tanse.fr"
                      >
                        contact@tanse.fr
                      </a>
                    </span>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Info Cards - Reassurance */}
      <section className="mx-auto w-full max-w-7xl px-6 pb-24">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="group relative overflow-hidden rounded-3xl bg-white/60 backdrop-blur-sm p-8 border border-white/80 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="inline-flex p-3 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg mb-4">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-2">Délai de réponse</h3>
              <p className="text-neutral-600 leading-relaxed">
                Nous répondons sous <span className="font-bold text-neutral-800">24h ouvrées</span>.
                Pour les urgences, indiquez-le dans votre message.
              </p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-3xl bg-white/60 backdrop-blur-sm p-8 border border-white/80 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="inline-flex p-3 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-600 shadow-lg mb-4">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-2">Zone d'intervention</h3>
              <p className="text-neutral-600 leading-relaxed">
                France & pays francophones. Spécialistes des concessions, garages, ateliers et réseaux automobiles.
              </p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-3xl bg-white/60 backdrop-blur-sm p-8 border border-white/80 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="inline-flex p-3 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 shadow-lg mb-4">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-2">Protection RGPD</h3>
              <p className="text-neutral-600 leading-relaxed">
                Vos données sont sécurisées et utilisées uniquement pour traiter votre demande.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}