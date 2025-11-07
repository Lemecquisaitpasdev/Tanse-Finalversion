"use client";

import { useState, FormEvent } from "react";

export default function Page() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "rdv",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Une erreur est survenue");
      }

      setStatus({
        type: "success",
        message: data.message || "Votre demande a été envoyée avec succès !",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "rdv",
        message: "",
      });
    } catch (err: any) {
      setStatus({
        type: "error",
        message: err.message || "Une erreur est survenue. Veuillez réessayer.",
      });
    } finally {
      setSubmitting(false);
    }
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
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl bg-white p-6 shadow-md ring-1 ring-black/5"
          >
            {status && (
              <div
                className={`mb-4 rounded-xl p-4 ${
                  status.type === "success"
                    ? "bg-green-50 text-green-800 ring-1 ring-green-200"
                    : "bg-red-50 text-red-800 ring-1 ring-red-200"
                }`}
              >
                {status.message}
              </div>
            )}

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm font-medium">Prénom & Nom</label>
                <input
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full rounded-xl border border-black/10 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-[#444684]"
                  placeholder="Alex Martin"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">E-mail</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full rounded-xl border border-black/10 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-[#444684]"
                  placeholder="vous@entreprise.fr"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">Téléphone (optionnel)</label>
                <input
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full rounded-xl border border-black/10 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-[#444684]"
                  placeholder="+33 6 12 34 56 78"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">Entreprise</label>
                <input
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full rounded-xl border border-black/10 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-[#444684]"
                  placeholder="TANSE Auto"
                />
              </div>
              <div className="md:col-span-2">
                <label className="mb-1 block text-sm font-medium">Sujet</label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
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
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full rounded-xl border border-black/10 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-[#444684]"
                  placeholder="Contexte, objectifs, villes concernées…"
                />
              </div>
              <div className="md:col-span-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center rounded-full bg-[#444684] px-5 py-3 text-sm font-medium text-white shadow-md hover:opacity-90 disabled:opacity-60"
                >
                  {submitting ? "Envoi en cours..." : "Envoyer ma demande / Prendre RDV"}
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