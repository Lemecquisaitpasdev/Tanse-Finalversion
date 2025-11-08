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

    let leadId: string | null = null;
    let dbError = false;

    // Essayer de créer un lead dans Prisma (optionnel)
    try {
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
      leadId = lead.id;
      logger.info({ leadId, email, name: nom }, "Lead saved to database");
    } catch (dbErr: any) {
      dbError = true;
      logger.warn({ err: dbErr }, "Failed to save lead to database, continuing with email");
    }

    // Envoyer l'email de notification (critique)
    try {
      await sendLeadNotification({
        email,
        name: nom,
        company: entreprise || null,
        phone: telephone || null,
        message: `Sujet: ${sujet}. ${message || ''}`,
        source: 'contact',
      });
      logger.info({ email, name: nom }, "Notification email sent successfully");
    } catch (emailErr: any) {
      logger.error({ err: emailErr }, "Failed to send notification email");

      // Si l'email échoue aussi, on retourne une erreur
      if (!leadId) {
        return NextResponse.json(
          { error: "Impossible d'envoyer votre message. Veuillez réessayer ou nous contacter directement à contact@tanse.fr" },
          { status: 500 }
        );
      }
    }

    // Succès si au moins la DB ou l'email a fonctionné
    logger.info(
      {
        email,
        name: nom,
        leadId: leadId || 'not_saved',
        dbSaved: !dbError,
      },
      "Contact form submitted successfully"
    );

    return NextResponse.json({
      success: true,
      message: "Votre message a été envoyé avec succès. Nous vous recontacterons sous 24h.",
    });
  } catch (error: any) {
    logger.error({ err: error }, "Contact form submission failed");

    // Erreur générique
    return NextResponse.json(
      { error: "Une erreur s'est produite. Veuillez réessayer ou nous contacter directement à contact@tanse.fr" },
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
