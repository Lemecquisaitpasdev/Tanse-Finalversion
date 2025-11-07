// app/api/checkout/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { prisma } from '@/lib/prisma';
import { sendEmail, emailTemplates } from '@/lib/email';

const checkoutSchema = z.object({
  plan: z.string().min(1, 'Le plan est requis'),

  // Contact
  firstname: z.string().min(1, 'Le prénom est requis'),
  lastname: z.string().min(1, 'Le nom est requis'),
  email: z.string().email('Email invalide'),
  phone: z.string().optional(),

  // Billing
  company: z.string().optional(),
  siren: z.string().optional(),
  address: z.string().min(1, 'L\'adresse est requise'),
  city: z.string().min(1, 'La ville est requise'),
  zip: z.string().min(1, 'Le code postal est requis'),
  country: z.string().default('France'),

  // Slot
  slotDate: z.string().optional(),
  slotTime: z.string().optional(),

  // Add-ons & pricing
  coupon: z.string().optional(),
  addOns: z.array(z.string()).default([]),
  planPrice: z.number(),
  addOnsTotal: z.number().default(0),
  discount: z.number().default(0),
  total: z.number(),
});

// Plan definitions (aligned with checkout page)
const PLANS: Record<string, { label: string; price: number }> = {
  'seo-geo': { label: 'SEO + GEO — PME (1 site)', price: 1490 },
  'seo-geo-site': { label: 'SEO + GEO + Site web / Refonte', price: 2490 },
  'grand-groupes': { label: 'Grand groupes — multi-sites', price: 0 },
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = checkoutSchema.parse(body);

    // Check if plan exists
    const planInfo = PLANS[validatedData.plan];
    if (!planInfo) {
      return NextResponse.json(
        { success: false, error: 'Plan invalide' },
        { status: 400 }
      );
    }

    // If "grand-groupes" (quote), redirect to contact
    if (validatedData.plan === 'grand-groupes') {
      return NextResponse.json({
        success: false,
        error: 'Ce plan nécessite un devis. Veuillez nous contacter.',
        redirect: '/contact?plan=grand-groupes',
      });
    }

    // Save order to database
    const order = await prisma.order.create({
      data: {
        plan: validatedData.plan,
        firstname: validatedData.firstname,
        lastname: validatedData.lastname,
        email: validatedData.email,
        phone: validatedData.phone || null,
        company: validatedData.company || null,
        siren: validatedData.siren || null,
        address: validatedData.address,
        city: validatedData.city,
        zip: validatedData.zip,
        country: validatedData.country,
        slotDate: validatedData.slotDate || null,
        slotTime: validatedData.slotTime || null,
        coupon: validatedData.coupon || null,
        addOns: validatedData.addOns,
        planPrice: validatedData.planPrice,
        addOnsTotal: validatedData.addOnsTotal,
        discount: validatedData.discount,
        total: validatedData.total,
        status: 'pending',
      },
    });

    // For now, we'll simulate payment (in production, integrate Stripe)
    // TODO: Integrate Stripe Checkout Session

    // Send confirmation email to customer
    try {
      await sendEmail({
        to: validatedData.email,
        subject: 'Votre commande TANSE - Confirmation',
        html: emailTemplates.orderConfirmation(
          validatedData.firstname,
          validatedData.lastname,
          planInfo.label,
          validatedData.total,
          validatedData.slotDate,
          validatedData.slotTime
        ),
        type: 'order_confirmation',
      });
    } catch (emailError) {
      console.error('Failed to send order confirmation email:', emailError);
    }

    // Send notification to TANSE team
    try {
      await sendEmail({
        to: process.env.CONTACT_EMAIL || 'hello@tanse.io',
        subject: `Nouvelle commande: ${planInfo.label} - ${validatedData.firstname} ${validatedData.lastname}`,
        html: `
          <h2>Nouvelle commande reçue</h2>
          <p><strong>Plan:</strong> ${planInfo.label}</p>
          <p><strong>Client:</strong> ${validatedData.firstname} ${validatedData.lastname}</p>
          <p><strong>Email:</strong> ${validatedData.email}</p>
          <p><strong>Téléphone:</strong> ${validatedData.phone || 'N/A'}</p>
          <p><strong>Entreprise:</strong> ${validatedData.company || 'N/A'}</p>
          <p><strong>Total:</strong> ${new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(validatedData.total)} HT</p>
          ${validatedData.slotDate && validatedData.slotTime ? `<p><strong>Rendez-vous:</strong> ${validatedData.slotDate} à ${validatedData.slotTime}</p>` : ''}
          <p><strong>Add-ons:</strong> ${validatedData.addOns.join(', ') || 'Aucun'}</p>
        `,
        type: 'order_notification',
      });
    } catch (emailError) {
      console.error('Failed to send order notification email:', emailError);
    }

    return NextResponse.json({
      success: true,
      message: 'Commande créée avec succès',
      orderId: order.id,
      // In production, return Stripe checkout URL
      // checkoutUrl: stripeSession.url,
    });
  } catch (error) {
    console.error('Checkout error:', error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, error: 'Données invalides', details: error.issues },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: false, error: 'Une erreur est survenue. Veuillez réessayer.' },
      { status: 500 }
    );
  }
}
