// scripts/check-database-tables.ts
// Script pour vérifier si les tables existent dans la base de données

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({
  log: ['error', 'warn'],
});

async function checkTables() {
  console.log('🔍 Vérification des tables de la base de données...\n');

  const requiredTables = [
    'Lead',
    'Booking',
    'ForfaitRequest',
    'Newsletter',
  ];

  try {
    // Test de connexion
    await prisma.$connect();
    console.log('✅ Connexion à la base de données réussie!\n');

    const results: { table: string; exists: boolean; count?: number }[] = [];

    // Vérifier chaque table
    for (const table of requiredTables) {
      try {
        let count = 0;

        switch(table) {
          case 'Lead':
            count = await prisma.lead.count();
            break;
          case 'Booking':
            count = await prisma.booking.count();
            break;
          case 'ForfaitRequest':
            count = await prisma.forfaitRequest.count();
            break;
          case 'Newsletter':
            count = await prisma.newsletter.count();
            break;
        }

        results.push({ table, exists: true, count });
        console.log(`✅ Table "${table}" existe (${count} entrées)`);
      } catch (error: any) {
        results.push({ table, exists: false });
        console.log(`❌ Table "${table}" N'EXISTE PAS ou erreur: ${error.message}`);
      }
    }

    console.log('\n📊 RÉSUMÉ :');
    const missingTables = results.filter(r => !r.exists);
    const existingTables = results.filter(r => r.exists);

    console.log(`  ✅ ${existingTables.length} tables existent`);
    console.log(`  ❌ ${missingTables.length} tables manquantes`);

    if (missingTables.length > 0) {
      console.log('\n🔴 ACTION REQUISE :');
      console.log('  Les tables suivantes sont manquantes :');
      missingTables.forEach(t => console.log(`    - ${t.table}`));
      console.log('\n  Pour les créer, lancez :');
      console.log('  npx prisma db push\n');
      console.log('  📖 Voir scripts/fix-database.md pour plus de détails\n');
      process.exit(1);
    } else {
      console.log('\n✅ Toutes les tables existent ! La base de données est correctement configurée.\n');

      // Afficher un résumé des données
      console.log('📈 DONNÉES STOCKÉES :');
      existingTables.forEach(t => {
        console.log(`  ${t.table}: ${t.count} entrées`);
      });
      console.log('');
    }

  } catch (error: any) {
    console.error('\n❌ ERREUR DE CONNEXION À LA BASE DE DONNÉES:');
    console.error(error.message);
    console.log('\n🔧 SOLUTIONS POSSIBLES :');
    console.log('  1. Vérifiez que DATABASE_URL est configuré dans .env.local');
    console.log('  2. Vérifiez que votre base de données est accessible');
    console.log('  3. Consultez scripts/fix-database.md pour les étapes de configuration\n');
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

checkTables();
