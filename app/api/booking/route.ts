// app/api/booking/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      email,
      name,
      company,
      phone,
      service,
      preferredDate,
      preferredTime,
      message
    } = body;

    // Validation
    if (!email || !name || !phone || !service) {
      return NextResponse.json(
        { error: 'Email, nom, téléphone et service sont requis' },
        { status: 400 }
      );
    }

    // Créer la prise de rendez-vous
    const booking = await prisma.booking.create({
      data: {
        email,
        name,
        company,
        phone,
        service,
        preferredDate: preferredDate ? new Date(preferredDate) : null,
        preferredTime,
        message,
        status: 'pending',
      },
    });

    // Créer également un lead
    await prisma.lead.create({
      data: {
        email,
        name,
        company,
        phone,
        message: `Prise de RDV: ${service}. Date souhaitée: ${preferredDate || 'Non spécifiée'}. ${message || ''}`,
        source: 'booking',
        status: 'qualified',
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Rendez-vous demandé avec succès. Nous vous recontacterons sous 24h.',
        id: booking.id
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('Erreur lors de la création du rendez-vous:', error);
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    );
  }
}
