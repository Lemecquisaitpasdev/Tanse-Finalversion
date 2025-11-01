// app/api/forfait-request/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { email, name, company, phone, forfaitType, forfaitName, budget, message } = body;

    // Validation basique
    if (!email || !name || !forfaitType || !forfaitName) {
      return NextResponse.json(
        { error: 'Email, nom, type de forfait et nom de forfait sont requis' },
        { status: 400 }
      );
    }

    // Créer la demande de forfait
    const forfaitRequest = await prisma.forfaitRequest.create({
      data: {
        email,
        name,
        company,
        phone,
        forfaitType,
        forfaitName,
        budget,
        message,
        status: 'new',
      },
    });

    // Créer également un lead
    await prisma.lead.create({
      data: {
        email,
        name,
        company,
        phone,
        message: `Demande de forfait: ${forfaitName}. ${message || ''}`,
        source: 'forfaits',
        status: 'new',
      },
    });

    // TODO: Envoyer un email de notification (Resend, SendGrid, etc.)
    // TODO: Envoyer un email de confirmation au client

    return NextResponse.json(
      {
        success: true,
        message: 'Demande enregistrée avec succès',
        id: forfaitRequest.id
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('Erreur lors de la création de la demande:', error);
    return NextResponse.json(
      { error: 'Erreur serveur lors de l\'enregistrement' },
      { status: 500 }
    );
  }
}

// GET pour récupérer les demandes (admin uniquement - à sécuriser)
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');

    const where = status ? { status } : {};

    const requests = await prisma.forfaitRequest.findMany({
      where,
      orderBy: { createdAt: 'desc' },
      take: 50,
    });

    return NextResponse.json({ requests });
  } catch (error) {
    console.error('Erreur lors de la récupération des demandes:', error);
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    );
  }
}
