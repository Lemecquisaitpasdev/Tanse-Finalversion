// scripts/test-api-contact.ts
// Script pour tester l'API de contact en local

import { randomBytes } from 'crypto';

const API_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

async function testContactAPI() {
  console.log('🧪 Test de l\'API Contact');
  console.log('========================\n');

  // Générer des données de test uniques
  const timestamp = new Date().toISOString();
  const testId = randomBytes(4).toString('hex');

  const testData = {
    nom: `Test User ${testId}`,
    email: `test-${testId}@tanse.fr`,
    telephone: '+33612345678',
    entreprise: 'TANSE Test Corp',
    sujet: 'Test de la base de données',
    message: `Message de test envoyé le ${timestamp}`,
  };

  console.log('📤 Envoi des données de test:');
  console.log(JSON.stringify(testData, null, 2));
  console.log('');

  try {
    const response = await fetch(`${API_URL}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData),
    });

    const responseData = await response.json();

    console.log(`📥 Réponse (Status ${response.status}):`);
    console.log(JSON.stringify(responseData, null, 2));
    console.log('');

    if (response.ok) {
      console.log('✅ SUCCESS! Le formulaire fonctionne!');
      console.log('');
      console.log('📋 Prochaine étape: Vérifiez dans Neon Dashboard');
      console.log('   → SQL Editor → Exécutez:');
      console.log('   SELECT * FROM "Lead" ORDER BY "createdAt" DESC LIMIT 5;');
      console.log('');
      console.log(`   Cherchez l'email: ${testData.email}`);
    } else {
      console.log('❌ ERREUR: Le formulaire a renvoyé une erreur');
      console.log('   Vérifiez les variables d\'environnement Vercel');
    }
  } catch (error: any) {
    console.error('❌ ERREUR lors de l\'appel API:');
    console.error(error.message);
    console.log('');
    console.log('💡 Assurez-vous que le serveur Next.js tourne:');
    console.log('   npm run dev');
  }
}

testContactAPI();
