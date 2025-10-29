import type { Metadata } from "next";
import ConsentPreferencesButton from "../components/ConsentPreferencesButton";

export const metadata: Metadata = {
  title: "Politique de confidentialité — TANSE",
  description:
    "Données collectées, finalités, sous-traitants, durées, transferts hors UE, vos droits RGPD, contact.",
  alternates: { canonical: "/confidentialite" },
  robots: { index: true, follow: true },
};

const LAST_UPDATED = "20/10/2025";

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="mb-2 text-3xl font-semibold">Politique de confidentialité</h1>
      <p className="text-sm text-neutral-600 mb-8">Dernière mise à jour : {LAST_UPDATED}</p>

      <h2 className="mt-8 text-xl font-semibold">1. Responsable de traitement</h2>
      <p>
        TANSE, SAS au capital de 10 000 EUR — SIREN 21090087 — 22 avenue Robert Schuman, 75007 Paris, France —{" "}
        <a className="underline" href="mailto:hello@tanse.io">hello@tanse.io</a>
      </p>

      <h2 className="mt-8 text-xl font-semibold">2. Données collectées</h2>
      <ul className="list-disc pl-5 space-y-2">
        <li><b>Formulaires</b> : nom, email, téléphone, entreprise, message.</li>
        <li><b>Données d’usage</b> : pages vues, événements (analytics), device, logs techniques.</li>
        <li><b>Exécution des prestations</b> : accès fournis (GBP, CMS, analytics), horaires, services, zones.</li>
      </ul>

      <h2 className="mt-8 text-xl font-semibold">3. Finalités & bases légales</h2>
      <ul className="list-disc pl-5 space-y-2">
        <li><b>Exécution du contrat</b> (art. 6-1-b) : livraison des prestations, support.</li>
        <li><b>Intérêt légitime</b> (art. 6-1-f) : amélioration produit, sécurité, prévention fraude.</li>
        <li><b>Obligations légales</b> (art. 6-1-c) : facturation, comptabilité.</li>
        <li><b>Consentement</b> (art. 6-1-a) : mesure d’audience/publicité (si activées).</li>
      </ul>

      <h2 className="mt-8 text-xl font-semibold">4. Sous-traitants</h2>
      <div className="rounded-xl border border-neutral-200 bg-white p-4 text-sm">
        <ul className="space-y-2">
          <li><b>Stripe</b> (paiement) — États-Unis/UE — Garanties : SCC/EEA — <i>nécessaire</i></li>
          <li><b>Hébergeur</b> (ex. Vercel) — États-Unis/UE — Garanties : SCC/EEA — <i>nécessaire</i></li>
          <li><b>Analytics</b> (optionnel) :
            <ul className="ml-4 list-disc">
              <li>Google Analytics 4 — États-Unis/UE — <i>consentement requis</i> — SCC ; désactivé sans consentement.</li>
              <li>Matomo/Plausible/Umami (self-host UE) — <i>consentement selon configuration</i>.</li>
            </ul>
          </li>
        </ul>
      </div>

      <h2 className="mt-8 text-xl font-semibold">5. Transferts hors UE</h2>
      <p>
        Le cas échéant (ex. États-Unis), des <b>Clauses Contractuelles Types</b> et mesures
        additionnelles sont mises en place. Les services facultatifs ne sont activés qu’avec
        votre consentement.
      </p>

      <h2 className="mt-8 text-xl font-semibold">6. Durées de conservation</h2>
      <ul className="list-disc pl-5 space-y-2">
        <li><b>Prospects</b> : 3 ans après le dernier contact.</li>
        <li><b>Clients & facturation</b> : 10 ans (obligations légales).</li>
        <li><b>Logs techniques</b> : 6 mois (sécurité).</li>
        <li><b>Analytics</b> : 13 mois max (si activé).</li>
      </ul>

      <h2 className="mt-8 text-xl font-semibold">7. Vos droits</h2>
      <p>
        Accès, rectification, effacement, opposition, limitation, portabilité.
        Demandes à <a className="underline" href="mailto:hello@tanse.io">hello@tanse.io</a>.
        Réclamation possible auprès de la CNIL.
      </p>

      <h2 className="mt-8 text-xl font-semibold">8. Contact DPO</h2>
      <p><b>DPO :</b> <i>à désigner</i> — <a className="underline" href="mailto:hello@tanse.io">hello@tanse.io</a></p>

      <h2 className="mt-8 text-xl font-semibold">9. Retrait du consentement</h2>
      <ConsentPreferencesButton />

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://tanse.io/confidentialite",
            "url": "https://tanse.io/confidentialite",
            "name": "Politique de confidentialité — TANSE",
            "inLanguage": "fr-FR",
            "dateModified": "2025-10-20"
          }),
        }}
      />
    </main>
  );
}