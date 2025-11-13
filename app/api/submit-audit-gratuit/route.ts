// app/api/submit-audit-gratuit/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { sendAuditGratuitNotification, sendAuditGratuitConfirmation } from '@/lib/email';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      nom,
      prenom,
      email,
      telephone,
      entreprise,
      siteWeb,
      concurrent1,
      concurrent2,
      concurrent3,
      commentConnu
    } = body;

    // Validation basique
    if (!nom || !prenom || !email || !telephone || !entreprise || !siteWeb) {
      return NextResponse.json(
        { error: 'Tous les champs obligatoires doivent être remplis' },
        { status: 400 }
      );
    }

    if (!concurrent1 || !concurrent2 || !concurrent3) {
      return NextResponse.json(
        { error: 'Veuillez renseigner vos 3 principaux concurrents' },
        { status: 400 }
      );
    }

    if (commentConnu === "Sélectionnez une option" || !commentConnu) {
      return NextResponse.json(
        { error: 'Veuillez sélectionner comment vous nous avez connu' },
        { status: 400 }
      );
    }

    // Créer la demande d'audit
    const auditDemand = await prisma.auditGratuit.create({
      data: {
        nom,
        prenom,
        email,
        telephone,
        entreprise,
        siteWeb,
        concurrent1,
        concurrent2,
        concurrent3,
        commentConnu,
        status: 'pending',
      },
    });

    // Créer également un lead (pour tracking global)
    await prisma.lead.create({
      data: {
        email,
        name: `${prenom} ${nom}`,
        company: entreprise,
        phone: telephone,
        message: `Demande d'audit gratuit SEO + GEO. Concurrents: ${concurrent1}, ${concurrent2}, ${concurrent3}. Source: ${commentConnu}`,
        source: 'audit-gratuit',
        status: 'new',
      },
    });

    // Envoyer les emails
    try {
      // 1. Email de notification à l'équipe TANSE
      await sendAuditGratuitNotification({
        nom: auditDemand.nom,
        prenom: auditDemand.prenom,
        email: auditDemand.email,
        telephone: auditDemand.telephone,
        entreprise: auditDemand.entreprise,
        siteWeb: auditDemand.siteWeb,
        concurrent1: auditDemand.concurrent1,
        concurrent2: auditDemand.concurrent2,
        concurrent3: auditDemand.concurrent3,
        commentConnu: auditDemand.commentConnu,
      });
    } catch (error) {
      console.error('Erreur envoi email notification audit gratuit:', error);
    }

    try {
      // 2. Email de confirmation à l'utilisateur
      await sendAuditGratuitConfirmation({
        email: auditDemand.email,
        prenom: auditDemand.prenom,
        nom: auditDemand.nom,
        entreprise: auditDemand.entreprise,
      });
    } catch (error) {
      console.error('Erreur envoi email confirmation audit gratuit:', error);
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Demande d\'audit enregistrée avec succès',
        id: auditDemand.id
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('Erreur lors de la création de la demande d\'audit:', error);
    return NextResponse.json(
      { error: 'Erreur serveur lors de l\'enregistrement' },
      { status: 500 }
    );
  }
}

// GET pour récupérer les demandes d'audit (admin uniquement - à sécuriser)
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');

    const where = status ? { status } : {};

    const audits = await prisma.auditGratuit.findMany({
      where,
      orderBy: { createdAt: 'desc' },
      take: 50,
    });

    return NextResponse.json({ audits });
  } catch (error) {
    console.error('Erreur lors de la récupération des demandes d\'audit:', error);
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    );
  }
}
