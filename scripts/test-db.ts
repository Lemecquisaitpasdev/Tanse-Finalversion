// scripts/test-db.ts
// Script pour tester la connexion à la base de données et créer un lead de test

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({
  log: ['query', 'info', 'warn', 'error'],
});

async function main() {
  console.log('🔄 Test de connexion à la base de données...\n');

  try {
    // Test de connexion
    await prisma.$connect();
    console.log('✅ Connexion à la base de données réussie!\n');

    // Créer un lead de test
    console.log('📝 Création d\'un lead de test...');
    const testLead = await prisma.lead.create({
      data: {
        email: 'test@tanse.fr',
        name: 'Test User',
        company: 'TANSE Test',
        phone: '+33612345678',
        message: 'Ceci est un message de test pour vérifier la base de données.',
        source: 'test-script',
        status: 'new',
      },
    });

    console.log('✅ Lead de test créé avec succès!');
    console.log('📊 Données du lead:', JSON.stringify(testLead, null, 2));
    console.log('');

    // Récupérer tous les leads
    const allLeads = await prisma.lead.findMany({
      orderBy: { createdAt: 'desc' },
      take: 5,
    });

    console.log(`📋 Nombre total de leads: ${allLeads.length}`);
    console.log('📋 Derniers leads:');
    allLeads.forEach((lead, index) => {
      console.log(`  ${index + 1}. ${lead.name} (${lead.email}) - ${lead.source} - ${lead.createdAt}`);
    });

    console.log('\n✅ Test terminé avec succès!');
  } catch (error) {
    console.error('❌ Erreur lors du test de la base de données:');
    console.error(error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();
