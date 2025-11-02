// app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import { contactSchema, formatZodErrors } from "@/lib/validations";
import { logger } from "@/lib/logger";
import { prisma } from "@/lib/prisma";
import { sendLeadNotification } from "@/lib/email";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Validation avec Zod
    const validation = contactSchema.safeParse(body);

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
    const { nom, email, telephone, entreprise, sujet, message } = validation.data;

    // Créer un lead dans Prisma
    const lead = await prisma.lead.create({
      data: {
        email,
        name: nom,
        company: entreprise || null,
        phone: telephone || null,
        message: `Sujet: ${sujet}. ${message || ''}`,
        source: 'contact',
        status: 'new',
      },
    });

    // Envoyer l'email de notification
    await sendLeadNotification({
      email: lead.email,
      name: lead.name,
      company: lead.company,
      phone: lead.phone,
      message: lead.message,
      source: lead.source,
    });

    logger.info(
      {
        email: lead.email,
        name: lead.name,
        company: lead.company,
        id: lead.id,
      },
      "Contact form submitted successfully"
    );

    return NextResponse.json({
      success: true,
      message: "Votre message a été envoyé avec succès. Nous vous recontacterons sous 24h.",
    });
  } catch (error: any) {
    logger.error({ err: error }, "Contact form submission failed");
    return NextResponse.json(
      { error: "Une erreur s'est produite. Veuillez réessayer." },
      { status: 500 }
    );
  }
}

// GET pour récupérer les soumissions (admin uniquement - à sécuriser)
export async function GET(req: NextRequest) {
  const apiKey = req.headers.get("x-api-key");

  if (apiKey !== process.env.ADMIN_API_KEY) {
    return NextResponse.json(
      { error: "Non autorisé" },
      { status: 401 }
    );
  }

  try {
    const leads = await prisma.lead.findMany({
      where: { source: 'contact' },
      orderBy: { createdAt: 'desc' },
      take: 50,
    });

    return NextResponse.json({ submissions: leads });
  } catch (error) {
    logger.error({ err: error }, "Failed to fetch contact submissions");
    return NextResponse.json(
      { error: "Erreur de récupération des données" },
      { status: 500 }
    );
  }
}
