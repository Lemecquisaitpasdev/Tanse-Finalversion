// app/api/test-db/route.ts
// Endpoint de diagnostic pour tester la connexion à la base de données

import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const diagnostics: any = {
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV,
    checks: {},
  };

  try {
    // 1. Vérifier que les variables d'environnement existent
    diagnostics.checks.envVars = {
      DATABASE_URL: process.env.DATABASE_URL ? "✅ Définie" : "❌ Manquante",
      DIRECT_URL: process.env.DIRECT_URL ? "✅ Définie" : "❌ Manquante",
      databaseUrlPreview: process.env.DATABASE_URL
        ? process.env.DATABASE_URL.substring(0, 50) + "..."
        : "Non définie",
    };

    // 2. Tester la connexion à la base de données
    try {
      await prisma.$connect();
      diagnostics.checks.connection = "✅ Connexion réussie";
    } catch (err: any) {
      diagnostics.checks.connection = `❌ Erreur: ${err.message}`;
      return NextResponse.json(diagnostics, { status: 500 });
    }

    // 3. Tester une requête simple
    try {
      const count = await prisma.lead.count();
      diagnostics.checks.query = `✅ Requête réussie - ${count} leads dans la DB`;
    } catch (err: any) {
      diagnostics.checks.query = `❌ Erreur de requête: ${err.message}`;
      return NextResponse.json(diagnostics, { status: 500 });
    }

    // 4. Essayer de créer un lead de test
    try {
      const testLead = await prisma.lead.create({
        data: {
          email: `test-${Date.now()}@tanse.fr`,
          name: "Test Diagnostic",
          company: "TANSE Diagnostic",
          phone: "+33612345678",
          message: "Lead de test créé par l'endpoint de diagnostic",
          source: "diagnostic",
          status: "new",
        },
      });
      diagnostics.checks.insert = `✅ Insertion réussie - ID: ${testLead.id}`;
      diagnostics.testLeadId = testLead.id;
    } catch (err: any) {
      diagnostics.checks.insert = `❌ Erreur d'insertion: ${err.message}`;
      return NextResponse.json(diagnostics, { status: 500 });
    }

    // 5. Récupérer les 5 derniers leads
    try {
      const recentLeads = await prisma.lead.findMany({
        orderBy: { createdAt: 'desc' },
        take: 5,
        select: {
          id: true,
          email: true,
          name: true,
          source: true,
          createdAt: true,
        },
      });
      diagnostics.checks.select = `✅ Sélection réussie - ${recentLeads.length} leads récents`;
      diagnostics.recentLeads = recentLeads;
    } catch (err: any) {
      diagnostics.checks.select = `❌ Erreur de sélection: ${err.message}`;
    }

    // Tout est OK !
    diagnostics.status = "✅ SUCCÈS - La base de données fonctionne parfaitement !";
    diagnostics.message = "Si vous voyez ce message, votre DB est opérationnelle.";

    return NextResponse.json(diagnostics, { status: 200 });

  } catch (error: any) {
    diagnostics.status = "❌ ERREUR GÉNÉRALE";
    diagnostics.error = error.message;
    diagnostics.stack = error.stack;

    return NextResponse.json(diagnostics, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
