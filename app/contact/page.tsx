"use client";

import { useState, FormEvent } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";

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
      {/* 1) Hero simple */}
      <section className="mx-auto w-full max-w-6xl px-6 py-14 md:py-20">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-[#444684]">
          Contact
        </p>
        <h1 className="text-[clamp(32px,4.6vw,56px)] font-semibold leading-tight">
          Discutons de vos objectifs locaux
        </h1>
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-neutral-700">
          Dites-nous où vous en êtes (concession, garage, atelier, réseau) et ce que vous
          souhaitez atteindre. Nous revenons vers vous sous 24h ouvrées.
        </p>
      </section>

      {/* 2) Animation Spline (sans cadre) + Formulaire RDV */}
      <section className="relative mx-auto w-full max-w-6xl px-0 md:px-6">
        {/* Spline en haut de section, sans cadre, plein conteneur */}
        <div className="w-full">
          <spline-viewer
            className="block w-full h-[46vh] md:h-[58vh]"
            url="https://prod.spline.design/ffoyz4KXe2hyPcuJ/scene.splinecode"
          />
        </div>

        {/* Formulaire */}
        <div className="mx-auto w-full max-w-4xl px-6 pb-16">
          {submitted ? (
            <div className="rounded-3xl bg-white p-8 shadow-md ring-1 ring-black/5 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <CheckCircle2 className="h-10 w-10 text-green-600" />
              </div>
              <h2 className="mt-4 text-2xl font-semibold">Message envoyé !</h2>
              <p className="mt-2 text-neutral-600">
                Nous avons bien reçu votre message. Notre équipe vous recontactera sous 24h ouvrées.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 inline-flex items-center rounded-full bg-[#444684] px-5 py-3 text-sm font-medium text-white shadow-md hover:opacity-90"
              >
                Envoyer un autre message
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl bg-white p-6 shadow-md ring-1 ring-black/5"
            >
              {error && (
                <div className="mb-4 rounded-xl bg-red-50 border border-red-200 p-4 text-sm text-red-800">
                  {error}
                </div>
              )}
            <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm font-medium">
                    Prénom & Nom <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="nom"
                    value={formData.nom}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-black/10 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-[#444684]"
                    placeholder="Alex Martin"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium">
                    E-mail <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-black/10 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-[#444684]"
                    placeholder="vous@entreprise.fr"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium">Téléphone (optionnel)</label>
                  <input
                    name="telephone"
                    value={formData.telephone}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-black/10 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-[#444684]"
                    placeholder="+33 6 12 34 56 78"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium">Entreprise</label>
                  <input
                    name="entreprise"
                    value={formData.entreprise}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-black/10 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-[#444684]"
                    placeholder="TANSE Auto"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="mb-1 block text-sm font-medium">
                    Sujet <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="sujet"
                    value={formData.sujet}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-black/10 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-[#444684]"
                  >
                    <option value="rdv">Prendre un rendez-vous</option>
                    <option value="devis">Demander un devis</option>
                    <option value="question">Une question</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="mb-1 block text-sm font-medium">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full rounded-xl border border-black/10 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-[#444684]"
                    placeholder="Contexte, objectifs, villes concernées…"
                  />
                </div>
                <div className="md:col-span-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex items-center gap-2 rounded-full bg-[#444684] px-5 py-3 text-sm font-medium text-white shadow-md hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Envoi en cours...
                      </>
                    ) : (
                      "Envoyer ma demande / Prendre RDV"
                    )}
                  </button>
                  <span className="ml-3 text-sm text-neutral-600">
                    ou écrivez-nous :{" "}
                    <a className="underline hover:no-underline" href="mailto:hello@tanse.io">
                      hello@tanse.io
                    </a>
                  </span>
                </div>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* 3) Infos utiles / réassurance */}
      <section className="mx-auto w-full max-w-6xl px-6 pb-20">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl bg-white p-6 shadow-md ring-1 ring-black/5">
            <div className="text-base font-semibold">Délai de réponse</div>
            <p className="mt-2 text-sm text-neutral-700">
              Nous répondons sous <strong>24h ouvrées</strong>. Pour les urgences, indique-le dans
              le message.
            </p>
          </div>
          <div className="rounded-3xl bg-white p-6 shadow-md ring-1 ring-black/5">
            <div className="text-base font-semibold">Périmètre d’intervention</div>
            <p className="mt-2 text-sm text-neutral-700">
              France &amp; pays francophones. Concessions, garages, ateliers, réseaux.
            </p>
          </div>
          <div className="rounded-3xl bg-white p-6 shadow-md ring-1 ring-black/5">
            <div className="text-base font-semibold">RGPD</div>
            <p className="mt-2 text-sm text-neutral-700">
              Vos informations ne sont utilisées que pour traiter votre demande.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}