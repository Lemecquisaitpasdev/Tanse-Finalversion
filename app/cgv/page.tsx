// app/cgv/page.tsx
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "CGV — TANSE",
  description: "Conditions Générales de Vente de TANSE : prestations, tarifs, paiements, livrables, responsabilité, données, droit applicable.",
  alternates: { canonical: "/cgv" },
  robots: { index: true, follow: true },
};

const LAST_UPDATED = "20/10/2025";

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="mb-6 text-3xl font-semibold">Conditions Générales de Vente (CGV)</h1>
      <p className="text-sm text-neutral-600 mb-8">Dernière mise à jour : {LAST_UPDATED}</p>

      <h2 className="mt-8 text-xl font-semibold">1. Objet</h2>
      <p>Les présentes CGV régissent la vente des prestations TANSE (SEO local, GEO, création/optimisation de sites vitrines, maintenance) aux clients professionnels.</p>

      <h2 className="mt-8 text-xl font-semibold">2. Commande & paiement</h2>
      <ul className="list-disc pl-5 space-y-2">
        <li>Commandes et abonnements réglés en ligne via Stripe. Facture PDF automatique.</li>
        <li>Les packs <b>Starter</b> et <b>Complet</b> sont facturés en one-shot.</li>
        <li>La <b>maintenance</b> est mensuelle, sans engagement, résiliable avant renouvellement depuis l’espace client Stripe.</li>
      </ul>

      <h2 className="mt-8 text-xl font-semibold">3. Prix</h2>
      <p>Les prix affichés sont en EUR HT (TVA en sus). TANSE peut mettre à jour ses tarifs ; les commandes passées restent au prix convenu.</p>

      <h2 className="mt-8 text-xl font-semibold">4. Délais & livrables</h2>
      <p>Délais indicatifs : 1–2 semaines pour un établissement ; réseaux multi-sites 2–4 semaines selon périmètre. Livrables : optimisations Google Business Profile, schémas/entités, contenus « réponse », intégrations site, rapports.</p>

      <h2 className="mt-8 text-xl font-semibold">5. Obligations du client</h2>
      <ul className="list-disc pl-5 space-y-2">
        <li>Informations exactes (services, zones, horaires, contacts) et accès nécessaires (GBP, site, analytics).</li>
        <li>Validation des contenus dans des délais raisonnables.</li>
      </ul>

      <h2 className="mt-8 text-xl font-semibold">6. Rétractation</h2>
      <p>Prestations B2B sur mesure, exécutées dès la commande : pas de droit de rétractation. En cas d’annulation avant démarrage, TANSE peut facturer les frais engagés.</p>

      <h2 className="mt-8 text-xl font-semibold">7. Durée & résiliation</h2>
      <p>Packs one-shot : fin à livraison. Maintenance : reconduction mensuelle, résiliable à tout moment ; le mois en cours reste dû.</p>

      <h2 className="mt-8 text-xl font-semibold">8. Propriété intellectuelle</h2>
      <p>Le client conserve la propriété de ses contenus et marques. Les méthodes/outils TANSE restent la propriété de TANSE. Les implémentations livrées sont cessibles pour l’usage propre du client.</p>

      <h2 className="mt-8 text-xl font-semibold">9. Responsabilité</h2>
      <p>Obligation de moyens. Pas de garantie de positionnement ou de volume. Aucune responsabilité pour pannes de services tiers (Google, hébergeur, etc.).</p>

      <h2 className="mt-8 text-xl font-semibold">10. Données</h2>
      <p>Traitements conformes au RGPD (voir Politique de confidentialité). Sous-traitants : Stripe (paiement), outils analytiques/hosting.</p>

      <h2 className="mt-8 text-xl font-semibold">11. Droit applicable</h2>
      <p>Droit français. Tribunal compétent : celui du siège de TANSE, sous réserve de dispositions impératives.</p>

      <hr className="my-8" />
      <p className="text-sm text-neutral-600">TANSE — SAS au capital de 10 000 EUR — SIREN 21090087 — TVA FR12 764678834 — Siège : 22 avenue Robert Schuman, 75007 Paris — <a className="underline" href="mailto:contact@tanse.fr">contact@tanse.fr</a></p>

      <Script id="ld-cgv" type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://www.tanse.fr/cgv",
            "url": "https://www.tanse.fr/cgv",
            "name": "Conditions Générales de Vente — TANSE",
            "inLanguage": "fr-FR",
            "dateModified": "2025-01-25"
          })
        }}
      />
    </main>
  );
}