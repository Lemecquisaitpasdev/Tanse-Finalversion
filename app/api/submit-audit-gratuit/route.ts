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

    // Créer un lead avec toutes les informations de l'audit
    const auditDemand = await prisma.lead.create({
      data: {
        email,
        name: `${prenom} ${nom}`,
        company: entreprise,
        phone: telephone,
        message: `🎯 AUDIT GRATUIT SEO + GEO

Site web: ${siteWeb}

📊 Concurrents à analyser:
1. ${concurrent1}
2. ${concurrent2}
3. ${concurrent3}

💡 Comment nous avez-vous connu: ${commentConnu}`,
        source: 'audit-gratuit',
        status: 'new',
      },
    });

    // Envoyer les emails
    try {
      // 1. Email de notification à l'équipe TANSE
      await sendAuditGratuitNotification({
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
      });
    } catch (error) {
      console.error('Erreur envoi email notification audit gratuit:', error);
    }

    try {
      // 2. Email de confirmation à l'utilisateur
      await sendAuditGratuitConfirmation({
        email,
        prenom,
        nom,
        entreprise,
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

    const where: any = { source: 'audit-gratuit' };
    if (status) {
      where.status = status;
    }

    const audits = await prisma.lead.findMany({
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
