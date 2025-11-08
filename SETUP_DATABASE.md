# 🗄️ Configuration de la Base de Données - TANSE

## ⚠️ IMPORTANT : Initialisation de la Base de Données Neon

L'environnement de développement actuel ne peut pas se connecter directement à Neon pour des raisons de sécurité réseau. Vous devez initialiser la base de données manuellement.

## 🚀 Méthode 1 : Via l'interface Neon (Recommandé)

1. **Connectez-vous à Neon Dashboard**
   - Allez sur https://console.neon.tech
   - Sélectionnez votre projet `neondb`

2. **Ouvrez le SQL Editor**
   - Dans le menu de gauche, cliquez sur "SQL Editor"
   - Ou allez directement dans "Tables"

3. **Exécutez le script SQL**
   - Copiez le contenu du fichier `prisma/init.sql`
   - Collez-le dans l'éditeur SQL de Neon
   - Cliquez sur "Run" pour exécuter le script

4. **Vérifiez que les tables sont créées**
   - Allez dans l'onglet "Tables"
   - Vous devriez voir 4 tables : `Lead`, `Booking`, `ForfaitRequest`, `Newsletter`

## 🚀 Méthode 2 : Via psql en local (si vous avez psql installé)

```bash
# Depuis votre machine locale (pas dans l'environnement sandbox)
psql 'postgresql://neondb_owner:npg_AICGZ3NVpU0a@ep-falling-lab-abxb6bgy-pooler.eu-west-2.aws.neon.tech/neondb?sslmode=require' -f prisma/init.sql
```

## 🚀 Méthode 3 : Via Prisma sur Vercel (après déploiement)

Une fois déployé sur Vercel, vous pouvez utiliser Prisma :

1. **Ajoutez les variables d'environnement dans Vercel**
   - `DATABASE_URL` : `postgresql://neondb_owner:npg_AICGZ3NVpU0a@ep-falling-lab-abxb6bgy-pooler.eu-west-2.aws.neon.tech/neondb?sslmode=require`
   - `DIRECT_URL` : `postgresql://neondb_owner:npg_AICGZ3NVpU0a@ep-falling-lab-abxb6bgy.eu-west-2.aws.neon.tech/neondb?sslmode=require`

2. **Déployez sur Vercel**
   ```bash
   git add .
   git commit -m "feat: add database setup"
   git push
   ```

3. **Exécutez Prisma push depuis Vercel CLI**
   ```bash
   # Installez Vercel CLI si nécessaire
   npm i -g vercel

   # Liez votre projet
   vercel link

   # Téléchargez les variables d'environnement
   vercel env pull

   # Poussez le schéma
   npx prisma db push
   ```

## ✅ Vérifier que la Base de Données Fonctionne

### Option A : Via le script de test (après initialisation)

```bash
# Sur votre machine locale avec accès internet
npm run db:test
```

Ce script :
- ✅ Teste la connexion à la base de données
- ✅ Crée un lead de test
- ✅ Affiche les derniers leads

### Option B : Via l'API de contact

1. Démarrez le serveur de développement (sur votre machine locale)
   ```bash
   npm run dev
   ```

2. Allez sur http://localhost:3000/contact-audit-gratuit

3. Remplissez le formulaire de contact

4. Vérifiez dans Neon Dashboard → SQL Editor :
   ```sql
   SELECT * FROM "Lead" ORDER BY "createdAt" DESC LIMIT 10;
   ```

## 📊 Tables Créées

| Table | Description | Champs principaux |
|-------|-------------|-------------------|
| **Lead** | Leads/contacts généraux | email, name, company, phone, message, source |
| **Booking** | Prises de rendez-vous | email, name, phone, service, preferredDate |
| **ForfaitRequest** | Demandes de forfaits | email, name, forfaitType, forfaitName |
| **Newsletter** | Inscriptions newsletter | email, name, subscribed |

## 🔧 Commandes Utiles

```bash
# Tester la connexion à la base de données
npm run db:test

# Voir le schéma actuel (en local avec accès internet)
npx prisma db pull

# Ouvrir Prisma Studio pour visualiser les données
npx prisma studio

# Générer le client Prisma
npx prisma generate
```

## ⚠️ Troubleshooting

### Erreur : "Prisma Client not generated"
```bash
npm run postinstall
```

### Erreur : "Can't reach database server"
- Vérifiez que `DATABASE_URL` dans `.env.local` est correcte
- Vérifiez que votre IP est autorisée dans Neon (par défaut, Neon accepte toutes les IPs)
- Vérifiez votre connexion internet

### Les données ne s'enregistrent pas
1. Vérifiez les logs de l'API : console du navigateur + terminal du serveur
2. Vérifiez que les tables existent dans Neon Dashboard
3. Testez manuellement avec le script `npm run db:test`

## 📝 Notes

- Le schéma Prisma est dans `prisma/schema.prisma`
- Le script SQL d'initialisation est dans `prisma/init.sql`
- Les credentials Neon sont dans `.env.local` (ne pas commit!)
- En production, utilisez les variables d'environnement Vercel
