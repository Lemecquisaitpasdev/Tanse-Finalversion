import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

const TOTAL_PLACES = 5;

/**
 * GET /api/places-remaining
 * Récupère le nombre de places restantes pour l'offre 5 places
 * Calcule automatiquement en comptant les leads avec source='offre-5-places'
 */
export async function GET() {
  try {
    // Compter le nombre de candidatures déjà reçues
    const candidaturesCount = await prisma.lead.count({
      where: { source: 'offre-5-places' }
    });

    // Calculer les places restantes
    const placesRemaining = Math.max(0, TOTAL_PLACES - candidaturesCount);

    return NextResponse.json({
      success: true,
      placesRemaining,
      placesTotal: TOTAL_PLACES,
      candidaturesReceived: candidaturesCount,
      active: placesRemaining > 0
    });
  } catch (error) {
    console.error('Error fetching places remaining:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la récupération des places restantes' },
      { status: 500 }
    );
  }
}
