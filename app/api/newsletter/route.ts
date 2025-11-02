// app/api/newsletter/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { sendNewsletterNotification } from '@/lib/email';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, name, source } = body;

    // Validation
    if (!email) {
      return NextResponse.json(
        { error: 'Email est requis' },
        { status: 400 }
      );
    }

    // Vérifier si l'email existe déjà
    const existing = await prisma.newsletter.findUnique({
      where: { email },
    });

    if (existing) {
      if (existing.subscribed) {
        return NextResponse.json(
          { error: 'Cet email est déjà inscrit à la newsletter' },
          { status: 409 }
        );
      } else {
        // Réactiver l'abonnement
        await prisma.newsletter.update({
          where: { email },
          data: { subscribed: true },
        });

        return NextResponse.json({
          success: true,
          message: 'Votre abonnement a été réactivé avec succès!',
        });
      }
    }

    // Créer le nouvel abonné
    const subscriber = await prisma.newsletter.create({
      data: {
        email,
        name: name || null,
        source: source || 'blog',
        subscribed: true,
      },
    });

    // Envoyer l'email de notification
    await sendNewsletterNotification({
      email: subscriber.email,
      name: subscriber.name,
      source: subscriber.source,
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Inscription réussie! Merci de vous être abonné à notre newsletter.',
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Erreur lors de l\'inscription newsletter:', error);
    return NextResponse.json(
      { error: 'Erreur serveur lors de l\'inscription' },
      { status: 500 }
    );
  }
}

// GET pour récupérer les abonnés (admin uniquement - à sécuriser)
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const subscribed = searchParams.get('subscribed');

    const where = subscribed === 'true' ? { subscribed: true } : {};

    const subscribers = await prisma.newsletter.findMany({
      where,
      orderBy: { createdAt: 'desc' },
      take: 100,
    });

    return NextResponse.json({ subscribers, count: subscribers.length });
  } catch (error) {
    console.error('Erreur lors de la récupération des abonnés:', error);
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    );
  }
}

// DELETE pour se désabonner
export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const email = searchParams.get('email');

    if (!email) {
      return NextResponse.json(
        { error: 'Email requis' },
        { status: 400 }
      );
    }

    await prisma.newsletter.update({
      where: { email },
      data: { subscribed: false },
    });

    return NextResponse.json({
      success: true,
      message: 'Vous avez été désinscrit de la newsletter',
    });
  } catch (error) {
    console.error('Erreur lors de la désinscription:', error);
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    );
  }
}
