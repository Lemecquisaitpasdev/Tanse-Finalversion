// app/api/offre-5-places/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { sendOffreCinqPlacesNotification, sendOffreCinqPlacesConfirmation } from '@/lib/email';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { email, nomEntreprise, secteurActivite, urlSite, motivation, telephone } = body;

    // Validation basique
    if (!email || !nomEntreprise || !secteurActivite || !urlSite || !motivation) {
      return NextResponse.json(
        { error: 'Email, nom d\'entreprise, secteur, URL du site et motivation sont requis' },
        { status: 400 }
      );
    }

    // Valider la longueur de la motivation (200 caractères max)
    if (motivation.length > 200) {
      return NextResponse.json(
        { error: 'La motivation ne peut pas dépasser 200 caractères' },
        { status: 400 }
      );
    }

    // Créer la candidature
    const candidature = await prisma.offreCinqPlaces.create({
      data: {
        email,
        nomEntreprise,
        secteurActivite,
        urlSite,
        motivation,
        telephone,
        status: 'pending',
      },
    });

    // Créer également un lead (pour tracking global)
    await prisma.lead.create({
      data: {
        email,
        name: nomEntreprise,
        company: nomEntreprise,
        phone: telephone,
        message: `Candidature Offre 5 places - ${secteurActivite}. Motivation: ${motivation}`,
        source: 'offre-5-places',
        status: 'new',
      },
    });

    // Envoyer les emails
    try {
      // 1. Email de notification à l'équipe TANSE
      await sendOffreCinqPlacesNotification({
        email: candidature.email,
        nomEntreprise: candidature.nomEntreprise,
        secteurActivite: candidature.secteurActivite,
        urlSite: candidature.urlSite,
        motivation: candidature.motivation,
        telephone: candidature.telephone,
      });
    } catch (error) {
      console.error('Erreur envoi email notification offre 5 places:', error);
    }

    try {
      // 2. Email de confirmation à l'utilisateur
      await sendOffreCinqPlacesConfirmation({
        email: candidature.email,
        nomEntreprise: candidature.nomEntreprise,
        secteurActivite: candidature.secteurActivite,
      });
    } catch (error) {
      console.error('Erreur envoi email confirmation offre 5 places:', error);
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Candidature enregistrée avec succès',
        id: candidature.id
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('Erreur lors de la création de la candidature:', error);
    return NextResponse.json(
      { error: 'Erreur serveur lors de l\'enregistrement' },
      { status: 500 }
    );
  }
}

// GET pour récupérer les candidatures (admin uniquement - à sécuriser)
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');

    const where = status ? { status } : {};

    const candidatures = await prisma.offreCinqPlaces.findMany({
      where,
      orderBy: { createdAt: 'desc' },
      take: 50,
    });

    return NextResponse.json({ candidatures });
  } catch (error) {
    console.error('Erreur lors de la récupération des candidatures:', error);
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    );
  }
}
