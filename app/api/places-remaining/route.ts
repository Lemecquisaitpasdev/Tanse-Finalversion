import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

/**
 * GET /api/places-remaining
 * Récupère le nombre de places restantes pour la campagne "offre-5-places"
 */
export async function GET() {
  try {
    // Récupérer ou créer la campagne "offre-5-places"
    let campaign = await prisma.campaign.findUnique({
      where: { name: 'offre-5-places' }
    });

    // Si la campagne n'existe pas, la créer avec 5 places
    if (!campaign) {
      campaign = await prisma.campaign.create({
        data: {
          name: 'offre-5-places',
          placesTotal: 5,
          placesRemaining: 5,
          active: true
        }
      });
    }

    return NextResponse.json({
      success: true,
      placesRemaining: campaign.placesRemaining,
      placesTotal: campaign.placesTotal,
      active: campaign.active
    });
  } catch (error) {
    console.error('Error fetching places remaining:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la récupération des places restantes' },
      { status: 500 }
    );
  }
}

/**
 * POST /api/places-remaining
 * Met à jour le nombre de places restantes (admin uniquement)
 * Body: { placesRemaining: number, active?: boolean }
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { placesRemaining, active } = body;

    // Validation
    if (typeof placesRemaining !== 'number' || placesRemaining < 0 || placesRemaining > 5) {
      return NextResponse.json(
        { error: 'placesRemaining doit être un nombre entre 0 et 5' },
        { status: 400 }
      );
    }

    // Récupérer ou créer la campagne
    let campaign = await prisma.campaign.findUnique({
      where: { name: 'offre-5-places' }
    });

    if (!campaign) {
      campaign = await prisma.campaign.create({
        data: {
          name: 'offre-5-places',
          placesTotal: 5,
          placesRemaining,
          active: active ?? true
        }
      });
    } else {
      // Mettre à jour la campagne
      campaign = await prisma.campaign.update({
        where: { name: 'offre-5-places' },
        data: {
          placesRemaining,
          ...(typeof active === 'boolean' && { active })
        }
      });
    }

    return NextResponse.json({
      success: true,
      message: 'Places restantes mises à jour',
      placesRemaining: campaign.placesRemaining,
      active: campaign.active
    });
  } catch (error) {
    console.error('Error updating places remaining:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la mise à jour des places restantes' },
      { status: 500 }
    );
  }
}
