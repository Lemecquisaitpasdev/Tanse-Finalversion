import Link from "next/link";

export const metadata = {
  title: "TANSE — Nous contacter",
  description:
    "Écris-nous ou prends un rendez-vous avec l’équipe TANSE. Réponse sous 24h ouvrées.",
};

export default function Page() {
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
            // Fallback mailto (simple, sans backend). Remplace l’e-mail si besoin :
            action="mailto:hello@tanse.io"
            method="POST"
            encType="text/plain"
            className="rounded-3xl bg-white p-6 shadow-md ring-1 ring-black/5"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm font-medium">Prénom & Nom</label>
                <input
                  name="nom"
                  required
                  className="w-full rounded-xl border border-black/10 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-[#444684]"
                  placeholder="Alex Martin"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">E-mail</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full rounded-xl border border-black/10 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-[#444684]"
                  placeholder="vous@entreprise.fr"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">Téléphone (optionnel)</label>
                <input
                  name="telephone"
                  className="w-full rounded-xl border border-black/10 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-[#444684]"
                  placeholder="+33 6 12 34 56 78"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">Entreprise</label>
                <input
                  name="entreprise"
                  className="w-full rounded-xl border border-black/10 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-[#444684]"
                  placeholder="TANSE Auto"
                />
              </div>
              <div className="md:col-span-2">
                <label className="mb-1 block text-sm font-medium">Sujet</label>
                <select
                  name="sujet"
                  className="w-full rounded-xl border border-black/10 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-[#444684]"
                  defaultValue="rdv"
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
                  rows={5}
                  className="w-full rounded-xl border border-black/10 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-[#444684]"
                  placeholder="Contexte, objectifs, villes concernées…"
                />
              </div>
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="inline-flex items-center rounded-full bg-[#444684] px-5 py-3 text-sm font-medium text-white shadow-md hover:opacity-90"
                >
                  Envoyer ma demande / Prendre RDV
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