import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { checkoutSchema, formatZodErrors } from "@/lib/validations";

// Prix Stripe (à créer dans le Dashboard Stripe)
const PRICE_IDS: Record<string, string> = {
  "seo-geo": process.env.STRIPE_PRICE_SEO_GEO || "price_xxx",
  "seo-geo-site": process.env.STRIPE_PRICE_SEO_GEO_SITE || "price_yyy",
  "pack-complet": process.env.STRIPE_PRICE_PACK_COMPLET || "price_zzz",
};

// Add-ons prix
const ADDON_PRICES: Record<string, number> = {
  "page-locale": 450,
  "citations-10": 120,
  "booster-avis": 250,
  "formation": 690,
};

// Fonction helper pour initialiser Stripe
function getStripe() {
  const apiKey = process.env.STRIPE_SECRET_KEY;

  if (!apiKey) {
    throw new Error(
      "STRIPE_SECRET_KEY n'est pas configurée. Veuillez ajouter cette variable d'environnement sur Vercel."
    );
  }

  return new Stripe(apiKey, {
    apiVersion: "2025-09-30.clover",
  });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Validation avec Zod
    const validation = checkoutSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        {
          error: "Données invalides",
          details: formatZodErrors(validation.error.issues),
        },
        { status: 400 }
      );
    }

    // Données validées et type-safe
    const { plan, contact, billing, slot, coupon, addOns } = validation.data;

    // Initialiser Stripe (uniquement quand on en a besoin)
    const stripe = getStripe();

    // Construire les line items
    const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] = [];

    // Prix principal
    const priceId = PRICE_IDS[plan];
    if (priceId && priceId !== "price_xxx" && priceId !== "price_yyy") {
      lineItems.push({
        price: priceId,
        quantity: 1,
      });
    } else {
      // Fallback: créer un prix dynamique si pas de Price ID configuré
      const planPrices: Record<string, number> = {
        "seo-geo": 1490,
        "pack-complet": 2490,
        "seo-geo-site": 2490,
      };

      const planNames: Record<string, string> = {
        "seo-geo": "SEO + GEO",
        "pack-complet": "Pack Complet (SEO + GEO + Site web / Refonte)",
        "seo-geo-site": "SEO + GEO + Site web / Refonte",
      };

      lineItems.push({
        price_data: {
          currency: "eur",
          product_data: {
            name: planNames[plan] || plan,
            description: `Pack ${plan}`,
          },
          unit_amount: (planPrices[plan] || 1490) * 100, // en centimes
        },
        quantity: 1,
      });
    }

    // Ajouter les add-ons
    addOns.forEach((addonId: string) => {
      const price = ADDON_PRICES[addonId];
      if (price && price > 0) {
        const addonNames: Record<string, string> = {
          "page-locale": "Page locale supplémentaire",
          "citations-10": "Pack 10 citations locales",
          "booster-avis": "Campagne avis booster 30 jours",
          "formation": "Formation équipe 2h",
        };

        lineItems.push({
          price_data: {
            currency: "eur",
            product_data: {
              name: addonNames[addonId] || addonId,
            },
            unit_amount: price * 100,
          },
          quantity: 1,
        });
      }
    });

    // Créer la session Stripe Checkout
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: lineItems,
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL || "https://tanse.fr"}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL || "https://tanse.fr"}/checkout/${plan}`,
      customer_email: contact.email,
      metadata: {
        plan,
        firstname: contact.firstname,
        lastname: contact.lastname,
        phone: contact.phone || "",
        company: billing?.company || "",
        siren: billing?.siren || "",
        slot_date: slot?.date || "",
        slot_time: slot?.time || "",
        coupon: coupon || "",
        addOns: addOns.join(","),
      },
      billing_address_collection: "required",
      automatic_tax: {
        enabled: true,
      },
      allow_promotion_codes: !!coupon,
    });

    return NextResponse.json({ url: session.url });
  } catch (error: any) {
    console.error("Stripe error:", error);
    return NextResponse.json(
      { error: error?.message || "Erreur de paiement" },
      { status: 500 }
    );
  }
}
