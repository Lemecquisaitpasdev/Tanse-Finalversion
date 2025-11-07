"use client";

import { useMemo, useState, FormEvent, useId } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Lock,
  Star,
  Clock,
  Sparkles,
  Calendar as CalendarIcon,
  Plus,
} from "lucide-react";

/* --------------------------------- Plans --------------------------------- */
/** Plans réels TANSE (alignés avec /forfaits) */
type PlanKey = "seo-geo" | "seo-geo-site" | "grand-groupes";

const PLANS: Record<
  PlanKey,
  {
    label: string;
    price: number; // EUR HT (0 = sur devis)
    suffix: "one-shot" | "sur devis";
    outcomes: string[]; // bénéfices (pas juste features)
    features: string[]; // technique (si besoin dans le discours)
    promo?: string; // ex: "1er mois offert"
    maintenanceNote?: string; // rappel maintenance
  }
> = {
  "seo-geo": {
    label: "SEO + GEO — PME (1 site)",
    price: 1490,
    suffix: "one-shot",
    outcomes: [
      "Fiche Google Business propre & active",
      "Base GEO/SEO solide (NAP, schémas, citations)",
      "Premières requêtes locales visibles & traçables",
    ],
    features: [
      "Audit + plan 30 jours • tracking appels",
      "GBP (catégories, description, médias, posts, Q&R)",
      "20 citations locales + correction NAP • schéma LocalBusiness/FAQ",
    ],
    maintenanceNote: "Maintenance GEO + SEO : 850€ / mois (optionnelle)",
  },
  "seo-geo-site": {
    label: "SEO + GEO + Site web / Refonte",
    price: 2490,
    suffix: "one-shot",
    outcomes: [
      "Vitrine alignée sur la demande locale",
      "Mesure claire (objectifs, clic-to-call, RDV)",
      "Fondations prêtes pour la croissance locale",
    ],
    features: [
      "Tout l’offre SEO + GEO",
      "Site/refonte : structure services, FAQ locales, formulaires",
      "Optimisation mobile & base Core Web Vitals",
    ],
    promo: "1er mois de maintenance OFFERT",
    maintenanceNote: "Maintenance GEO + SEO : 850€ / mois (mois 1 offert)",
  },
  "grand-groupes": {
    label: "Grand groupes — multi-sites",
    price: 0,
    suffix: "sur devis",
    outcomes: [
      "Gouvernance et qualité NAP à l’échelle",
      "Industrialisation contenus/avis/process",
      "Reporting agrégé + connecteurs & SLA",
    ],
    features: [
      "Stratégie multi-pays/marques",
      "Playbooks, workflows d’approbation",
      "Support prioritaire & formations",
    ],
  },
};

function eur(n: number) {
  return new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR" }).format(n);
}

/* -------------------------------- Add-ons -------------------------------- */
type AddOn = { id: string; label: string; price: number; note?: string; disabled?: boolean };

const ADDONS: AddOn[] = [
  { id: "page-locale", label: "Page locale supplémentaire (~1 000 mots)", price: 450 },
  { id: "citations-10", label: "Pack 10 citations locales (annuaires)", price: 120 },
  { id: "booster-avis", label: "Campagne avis « booster 30 jours »", price: 250 },
  { id: "netlinking", label: "Netlinking (sélection & achat)", price: 0, note: "Sur devis", disabled: true },
  { id: "formation", label: "Formation équipe / playbook interne (atelier 2h)", price: 690 },
];

/* --------------------------------- Page ---------------------------------- */
export default function CheckoutPage({ params }: { params?: { plan?: string } }) {
  const router = useRouter();
  const rawKey = (params?.plan || "seo-geo").toLowerCase();
  const currentPlan: PlanKey = (["seo-geo", "seo-geo-site", "grand-groupes"] as PlanKey[]).includes(
    rawKey as PlanKey
  )
    ? (rawKey as PlanKey)
    : "seo-geo";

  const plan = PLANS[currentPlan];
  const isQuote = plan.price === 0;

  /* ---------------------------- States UI/Form ---------------------------- */
  const [contact, setContact] = useState({ email: "", firstname: "", lastname: "", phone: "" });
  const [billing, setBilling] = useState({
    company: "",
    siren: "",
    address: "",
    city: "",
    zip: "",
    country: "France",
  });

  const todayISO = useMemo(() => new Date().toISOString().slice(0, 10), []);
  const [slot, setSlot] = useState({ date: todayISO, time: "10:00" });

  const [coupon, setCoupon] = useState("");
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const liveRegionId = useId();

  const addOnsTotal = useMemo(
    () =>
      selectedAddOns
        .map((id) => ADDONS.find((a) => a.id === id))
        .filter((a): a is AddOn => !!a && !a.disabled && a.price > 0)
        .reduce((sum, a) => sum + a.price, 0),
    [selectedAddOns]
  );

  const discount = 0; // à calculer côté serveur si coupon valide
  const total = Math.max(plan.price + addOnsTotal - discount, 0);

  function toggleAddOn(id: string) {
    setSelectedAddOns((curr) => (curr.includes(id) ? curr.filter((x) => x !== id) : [...curr, id]));
  }

  /* --------------------------- Submit / Stripe ---------------------------- */
  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitting(true);

    try {
      if (isQuote || currentPlan === "grand-groupes") {
        // Pas de paiement ici → rediriger vers contact
        router.push("/contact?plan=grand-groupes");
        return;
      }

      // Appel API Checkout
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          plan: currentPlan,
          firstname: contact.firstname,
          lastname: contact.lastname,
          email: contact.email,
          phone: contact.phone,
          company: billing.company,
          siren: billing.siren,
          address: billing.address,
          city: billing.city,
          zip: billing.zip,
          country: billing.country,
          slotDate: slot.date,
          slotTime: slot.time,
          coupon,
          addOns: selectedAddOns,
          planPrice: plan.price,
          addOnsTotal,
          discount,
          total,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Une erreur est survenue");
      }

      // Pour l'instant, afficher un message de succès
      // TODO: Rediriger vers Stripe Checkout quand implémenté
      alert(
        `✅ Commande enregistrée avec succès !\n\n` +
          `Un email de confirmation a été envoyé à ${contact.email}\n\n` +
          `Notre équipe vous contactera sous 24-48h pour finaliser le paiement et lancer le projet.\n\n` +
          `Référence: ${data.orderId}`
      );

      // Reset form ou rediriger
      router.push("/");
    } catch (err: any) {
      alert(`❌ ${err?.message || "Erreur de commande. Veuillez réessayer."}`);
    } finally {
      setSubmitting(false);
    }
  }

  /* --------------------------------- UI ---------------------------------- */
  return (
    <main
      className="min-h-dvh w-full"
      style={{
        background:
          "radial-gradient(140% 120% at 0% 0%, #FFE7C2, rgba(255,231,194,0))," +
          "radial-gradient(120% 120% at 100% 0%, #E7E9FF, rgba(231,233,255,0))," +
          "linear-gradient(180deg, #FAFAFA 0%, #FFFFFF 100%)",
      }}
    >
      <div className="mx-auto w-full max-w-6xl px-6 py-8 md:py-12">
        {/* Hero / momentum */}
        <section className="relative overflow-hidden rounded-3xl border border-black/10 bg-white p-6 md:p-8 shadow-[0_16px_60px_-28px_rgba(0,0,0,0.25)]">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-[#444684]/10 px-3 py-1 text-xs font-medium text-[#444684]">
                <Sparkles className="h-3.5 w-3.5" />
                Lancement en 5 minutes — premiers signaux sous 30 jours*
              </div>
              <h1 className="mt-3 text-2xl md:text-3xl font-semibold">
                Finalisez votre {plan.label} {isQuote ? "— sur devis" : "et réservez votre 1er créneau"}
              </h1>
              <p className="mt-2 max-w-[52ch] text-neutral-700">
                On met en production, on mesure, on optimise. Vous validez, on s’occupe du reste.
              </p>

              {plan.promo ? (
                <p className="mt-3 inline-flex items-center gap-2 rounded-full bg-[#FFE79A] px-3 py-1 text-xs font-semibold text-black ring-1 ring-black/10">
                  <GiftIcon />
                  {plan.promo}
                </p>
              ) : null}
            </div>

            {/* Réassurance */}
            <div className="grid w-full max-w-sm grid-cols-3 gap-2 md:w-auto">
              {[
                { icon: ShieldCheck, label: "SLA < 24h" },
                { icon: Lock, label: "Paiement Stripe" },
                { icon: Clock, label: "Onboarding express" },
              ].map((i) => (
                <div
                  key={i.label}
                  className="flex items-center gap-2 rounded-2xl border border-black/10 bg-white/70 px-3 py-2 backdrop-blur"
                >
                  <i.icon className="h-4 w-4 text-[#444684]" />
                  <span className="text-xs font-medium">{i.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Social proof light */}
          <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-neutral-600">
            <div className="inline-flex items-center gap-1 rounded-full border border-black/10 bg-white px-2.5 py-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-[#444684] text-[#444684]" />
              ))}
              <span className="ml-1 font-medium">Note 5/5</span> — clients locaux
            </div>
            <span>•</span>
            <span>Réponse <b>&lt; 24h</b>, livrables dans les temps</span>
          </div>
        </section>

        {/* Form + récap */}
        <form id="checkout-form" onSubmit={onSubmit} className="mt-8 grid gap-6 md:grid-cols-[1.6fr_1fr]">
          {/* Colonne gauche */}
          <div className="space-y-6">
            {/* Coordonnées */}
            <Card title="Vos coordonnées">
              <TwoCol>
                <Field label="Prénom" required>
                  <Input value={contact.firstname} onChange={(e) => setContact({ ...contact, firstname: e.target.value })} />
                </Field>
                <Field label="Nom" required>
                  <Input value={contact.lastname} onChange={(e) => setContact({ ...contact, lastname: e.target.value })} />
                </Field>
                <Field label="E-mail" required>
                  <Input type="email" inputMode="email" value={contact.email} onChange={(e) => setContact({ ...contact, email: e.target.value })} />
                </Field>
                <Field label="Téléphone">
                  <Input inputMode="tel" placeholder="+33…" value={contact.phone} onChange={(e) => setContact({ ...contact, phone: e.target.value })} />
                </Field>
              </TwoCol>
            </Card>

            {/* Facturation */}
            <Card title="Facturation">
              <TwoCol>
                <Field label="Société (facultatif)" colSpan={2}>
                  <Input value={billing.company} onChange={(e) => setBilling({ ...billing, company: e.target.value })} />
                </Field>
                <Field label="SIREN (facultatif)">
                  <Input value={billing.siren} onChange={(e) => setBilling({ ...billing, siren: e.target.value })} />
                </Field>
                <Field label="Pays">
                  <Input value={billing.country} onChange={(e) => setBilling({ ...billing, country: e.target.value })} />
                </Field>
                <Field label="Adresse" required colSpan={2}>
                  <Input value={billing.address} onChange={(e) => setBilling({ ...billing, address: e.target.value })} />
                </Field>
                <Field label="Ville" required>
                  <Input value={billing.city} onChange={(e) => setBilling({ ...billing, city: e.target.value })} />
                </Field>
                <Field label="Code postal" required>
                  <Input value={billing.zip} onChange={(e) => setBilling({ ...billing, zip: e.target.value })} />
                </Field>
              </TwoCol>
            </Card>

            {/* Paiement + RDV (masqué si sur devis) */}
            <Card title={isQuote ? "Prise de contact" : "Paiement sécurisé"} aside={!isQuote && <span className="text-xs text-neutral-500">Propulsé par Stripe</span>}>
              {isQuote ? (
                <div className="rounded-xl border border-black/10 bg-neutral-50 p-4 text-sm text-neutral-700">
                  Ce plan est <b>sur devis</b>. Cliquez sur le bouton ci-dessous pour parler à un expert et recevoir une proposition adaptée (multi-sites, SLA, gouvernance).
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <Field label="Titulaire de la carte" colSpan={2}>
                      <Input placeholder="NOM Prénom" />
                    </Field>
                    <Field label="Carte" colSpan={2}>
                      <div id="card-element" className="mt-1 flex h-[46px] items-center rounded-xl border border-dashed border-black/15 bg-neutral-50 px-3 text-sm text-neutral-500">
                        Stripe Elements s'injectera ici (placeholder)
                      </div>
                    </Field>
                    <Field label="Code promo (facultatif)">
                      <Input value={coupon} onChange={(e) => setCoupon(e.target.value)} placeholder="EX: TANSE10" />
                    </Field>
                  </div>

                  {/* Créneau */}
                  <div className="mt-8">
                    <h3 className="text-base font-semibold">Réserver le 1er appel</h3>
                    <p className="mt-1 text-sm text-neutral-600">On confirme par e-mail dès le paiement validé.</p>
                    <div className="mt-3 grid grid-cols-1 gap-4 md:grid-cols-3">
                      <Field label="Date">
                        <Input type="date" min={todayISO} value={slot.date} onChange={(e) => setSlot({ ...slot, date: e.target.value })} />
                      </Field>
                      <Field label="Heure (locale)">
                        <select value={slot.time} onChange={(e) => setSlot({ ...slot, time: e.target.value })} className="mt-1 w-full rounded-xl border border-black/10 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-black/10">
                          {["09:00", "10:00", "11:30", "14:00", "15:30", "17:00"].map((t) => (
                            <option key={t} value={t}>{t}</option>
                          ))}
                        </select>
                      </Field>
                      <div className="flex items-end">
                        <a href="https://calendly.com/" target="_blank" rel="noreferrer" className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-black/10 bg-white px-4 text-sm font-medium shadow-sm hover:bg-neutral-50">
                          <CalendarIcon className="h-4 w-4" />
                          Ou ouvrir mon agenda
                        </a>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </Card>

            {/* FAQs brèves */}
            <Card title="Questions fréquentes">
              <ul className="grid gap-3 text-sm text-neutral-800 md:grid-cols-2">
                <li className="rounded-xl border border-black/10 bg-neutral-50 p-3">
                  <div className="font-medium">Quand démarrez-vous ?</div>
                  <div className="mt-1 text-neutral-600">Sous 24–48h après paiement et onboarding.</div>
                </li>
                <li className="rounded-xl border border-black/10 bg-neutral-50 p-3">
                  <div className="font-medium">Engagement ?</div>
                  <div className="mt-1 text-neutral-600">Packs one-shot. Maintenance au mois, résiliable avant renouvellement.</div>
                </li>
              </ul>
            </Card>
          </div>

          {/* Colonne droite : récap + add-ons */}
          <aside className="space-y-6">
            <div className="rounded-3xl border border-black/10 bg-white p-6 md:p-8 shadow-[0_16px_60px_-28px_rgba(0,0,0,0.25)]">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Votre commande</h2>
                <Link href="/#forfaits" className="text-sm text-neutral-500 hover:underline">Changer de plan</Link>
              </div>

              {/* Résultats concrets */}
              <div className="mt-4 rounded-2xl border border-black/10 bg-neutral-50 p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-base font-medium">{plan.label}</div>
                    <div className="text-xs text-neutral-500">{plan.suffix}</div>
                  </div>
                  <div className="text-xl font-semibold">{isQuote ? "—" : eur(plan.price)}</div>
                </div>
                <ul className="mt-3 space-y-2 text-sm">
                  {plan.outcomes.map((o) => (
                    <li key={o} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-[#444684]" />
                      <span>{o}</span>
                    </li>
                  ))}
                </ul>
                {plan.maintenanceNote && (
                  <div className="mt-3 rounded-lg border border-dashed border-black/10 bg-white p-3 text-xs text-neutral-700">
                    {plan.maintenanceNote}
                  </div>
                )}
              </div>

              {/* Add-ons */}
              {!isQuote && (
                <div className="mt-5">
                  <div className="mb-2 flex items-center gap-2">
                    <Plus className="h-4 w-4 text-[#444684]" />
                    <div className="text-sm font-medium">Offres supplémentaires</div>
                  </div>
                  <ul className="grid gap-2">
                    {ADDONS.map((a) => {
                      const checked = selectedAddOns.includes(a.id);
                      const price = a.price > 0 ? eur(a.price) : a.note || "—";
                      return (
                        <li
                          key={a.id}
                          className={`flex items-center justify-between rounded-xl border px-3 py-2 text-sm ${
                            checked ? "border-[#444684] bg-[#444684]/5" : "border-black/10 bg-white"
                          } ${a.disabled ? "opacity-60" : ""}`}
                        >
                          <label className="flex flex-1 cursor-pointer items-center gap-2">
                            <input
                              type="checkbox"
                              className="h-4 w-4 accent-[#444684]"
                              disabled={a.disabled}
                              checked={checked}
                              onChange={() => toggleAddOn(a.id)}
                            />
                            <span>{a.label}</span>
                          </label>
                          <span className="ml-3 font-medium">{price}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}

              {/* Totaux */}
              <div className="mt-5 space-y-2 text-sm">
                {!isQuote && (
                  <>
                    <div className="flex items-center justify-between">
                      <span>Add-ons</span>
                      <span className="font-medium">{addOnsTotal > 0 ? eur(addOnsTotal) : "—"}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Remise</span>
                      <span className="font-medium">—</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Total aujourd’hui</span>
                      <span className="text-xl font-semibold" aria-live="polite" id={liveRegionId}>
                        {eur(total)}
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-neutral-500">Prix HT. TVA calculée par Stripe au paiement.</p>
                  </>
                )}
                {isQuote && (
                  <p className="text-sm text-neutral-700">
                    Ce plan est établi <b>sur devis</b>. Nous vous recontactons sous 24h.
                  </p>
                )}
              </div>

              {/* CTA */}
              <button
                type="submit"
                form="checkout-form"
                disabled={submitting}
                className="mt-6 w-full rounded-2xl bg-[#444684] px-5 py-3 text-white font-medium shadow-[0_10px_30px_-10px_rgba(68,70,132,0.6)] transition hover:opacity-95 active:translate-y-px disabled:opacity-60"
              >
                {isQuote ? "Parler à un expert" : submitting ? "Traitement…" : `Payer et réserver — ${eur(total)}`}
              </button>

              <p className="mt-3 text-center text-xs text-neutral-500">
                <Lock className="mr-1 inline h-3.5 w-3.5" />
                {isQuote ? "Réponse sous 24h." : "Paiement chiffré. Reçu et e-mail de confirmation automatiques."}
              </p>
            </div>

            {/* Aide */}
            <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-[0_16px_60px_-28px_rgba(0,0,0,0.25)]">
              <h3 className="text-sm font-medium">Besoin d’aide ?</h3>
              <p className="mt-1 text-sm text-neutral-600">
                Écrivez-nous à <a className="underline" href="mailto:hello@tanse.io">hello@tanse.io</a> – réponse rapide.
              </p>
            </div>
          </aside>
        </form>

        {/* Sticky bar mobile */}
        {!isQuote && (
          <div className="pointer-events-none fixed inset-x-0 bottom-3 z-40 mx-auto w-full max-w-6xl px-6 md:hidden">
            <div className="pointer-events-auto flex items-center justify-between rounded-2xl border border-black/10 bg-white px-4 py-3 shadow-lg">
              <div className="text-sm">
                <div className="font-medium">{plan.label}</div>
                <div className="text-xs text-neutral-500">Total : {eur(total)} HT</div>
              </div>
              <button type="submit" form="checkout-form" className="inline-flex items-center gap-2 rounded-xl bg-[#444684] px-4 py-2 text-sm font-semibold text-white">
                Payer <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}

        {/* Lien retour */}
        <div className="mt-10 text-center">
          <Link href="/#forfaits" className="text-sm text-neutral-600 hover:underline">← Retour aux forfaits</Link>
        </div>

        <p className="mt-6 text-center text-[11px] text-neutral-500">
          * Basé sur des déploiements typiques avec assets fournis rapidement.
        </p>
      </div>
    </main>
  );
}

/* ------------------------------ UI helpers ------------------------------- */
function Card({ title, aside, children }: { title: string; aside?: React.ReactNode; children: React.ReactNode }) {
  return (
    <section className="rounded-3xl border border-black/10 bg-white p-6 md:p-8 shadow-[0_12px_50px_-20px_rgba(0,0,0,0.2)]">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        {aside}
      </div>
      <div className="mt-4">{children}</div>
    </section>
  );
}

function TwoCol({ children }: { children: React.ReactNode }) {
  return <div className="grid grid-cols-1 gap-4 md:grid-cols-2">{children}</div>;
}

function Field({
  label,
  children,
  colSpan,
  required,
}: {
  label: string;
  children: React.ReactNode;
  colSpan?: 1 | 2;
  required?: boolean;
}) {
  return (
    <div className={colSpan === 2 ? "md:col-span-2" : ""}>
      <label className="text-sm text-neutral-600">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {children}
    </div>
  );
}

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={
        "mt-1 w-full rounded-xl border border-black/10 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-black/10 " +
        (props.className || "")
      }
    />
  );
}

function GiftIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor" aria-hidden="true">
      <path d="M20 7h-2.18A3 3 0 0015 3a3 3 0 00-2.82 2H12A3 3 0 009 3a3 3 0 00-2.82 2H4a1 1 0 000 2h16a1 1 0 100-2zM7 5a1 1 0 012 0v2H7V5zm6 0a1 1 0 112 0v2h-2V5zM4 9h7v12H6a2 2 0 01-2-2V9zm9 0h7v10a2 2 0 01-2 2h-5V9z" />
    </svg>
  );
}