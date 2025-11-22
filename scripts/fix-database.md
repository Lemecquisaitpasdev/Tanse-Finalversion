# FIX URGENT : Formulaires ne fonctionnent pas

## 🔴 PROBLÈME IDENTIFIÉ

Les formulaires de `/audit-offert` et `/offre-5-places` ne fonctionnent pas car **les tables n'existent pas dans votre base Neon**.

## ✅ SOLUTION (5 minutes)

### Étape 1 : Vérifier les variables d'environnement Vercel

1. Allez sur [vercel.com/dashboard](https://vercel.com/dashboard)
2. Sélectionnez votre projet **Tanse**
3. **Settings → Environment Variables**
4. Vérifiez que ces variables existent et **ne contiennent PAS "placeholder"** :
   - `DATABASE_URL`
   - `DIRECT_URL`

❌ **SI elles contiennent "placeholder"**, vous devez les remplacer par vos vraies URLs Neon :

1. Allez sur [console.neon.tech](https://console.neon.tech)
2. Sélectionnez votre projet/database
3. Cliquez sur **"Connection Details"**
4. Copiez la **Connection String** (format: `postgresql://user:pass@ep-xxx.aws.neon.tech/...`)
5. Collez cette URL dans Vercel pour `DATABASE_URL` ET `DIRECT_URL`
6. **IMPORTANT :** Sélectionnez "Production", "Preview" et "Development" pour les 2 variables
7. Cliquez **"Save"**

### Étape 2 : Créer les tables dans Neon

Une fois que vos vraies URLs Neon sont dans Vercel :

```bash
# 1. Récupérer les variables d'environnement de Vercel
vercel env pull .env.production

# 2. Créer les tables dans votre base Neon
npx prisma db push --skip-generate

# Si la commande précédente échoue avec une erreur d'engine, utilisez :
DATABASE_URL="<votre-url-neon-complete>" npx prisma db push --skip-generate
```

**Remplacez `<votre-url-neon-complete>` par l'URL de votre base Neon.**

Exemple :
```bash
DATABASE_URL="postgresql://user:password@ep-cool-darkness-12345.us-east-2.aws.neon.tech/neondb?sslmode=require" npx prisma db push --skip-generate
```

### Étape 3 : Redéployer sur Vercel

```bash
# Trigger un nouveau déploiement
vercel --prod
```

OU via le dashboard Vercel :
1. Allez dans **Deployments**
2. Cliquez sur le dernier déploiement
3. Cliquez **"Redeploy"** (menu avec 3 points)

### Étape 4 : Tester

1. Allez sur https://www.tanse.fr/audit-offert
2. Remplissez le formulaire
3. Soumettez
4. ✅ Vous devriez voir "Demande envoyée avec succès !"

5. Vérifiez dans Neon :
   - Allez sur [console.neon.tech](https://console.neon.tech)
   - Ouvrez votre database
   - Allez dans **"Tables"**
   - Cliquez sur **"AuditGratuit"**
   - Vous devriez voir votre soumission !

---

## 🔍 DIAGNOSTIC : Vérifier que les tables existent

Si vous avez accès à Neon Console :

1. Allez sur [console.neon.tech](https://console.neon.tech)
2. Sélectionnez votre projet/database
3. Cliquez sur **"Tables"** dans le menu de gauche
4. Vous devriez voir ces tables :
   - ✅ `Lead`
   - ✅ `AuditGratuit`
   - ✅ `OffreCinqPlaces`
   - ✅ `Booking`
   - ✅ `Campaign`
   - ✅ `ForfaitRequest`
   - ✅ `Newsletter`

❌ **Si ces tables n'existent PAS**, c'est confirmé : vous devez faire l'Étape 2 ci-dessus.

---

## 🆘 SI ÇA NE MARCHE TOUJOURS PAS

### Option A : Vérifier les logs Vercel

1. Allez sur votre projet Vercel
2. Cliquez sur **"Deployments"**
3. Cliquez sur le dernier déploiement
4. Cliquez sur **"Functions"** → Sélectionnez une fonction d'API
5. Regardez les **logs** pour voir l'erreur exacte

### Option B : Créer une nouvelle base Neon (recommandé si URL invalide)

Si votre URL Neon actuelle est invalide/expirée :

1. Allez sur [neon.tech](https://neon.tech)
2. Créez un **nouveau projet** : "tanse-production"
3. Copiez la **Connection String**
4. Mettez-la dans Vercel (DATABASE_URL + DIRECT_URL)
5. Lancez `npx prisma db push` avec cette nouvelle URL
6. Redéployez

---

## 📋 TABLES CRÉÉES PAR `prisma db push`

Voici ce qui sera créé dans votre base Neon :

```sql
CREATE TABLE "Lead" (...)
CREATE TABLE "Booking" (...)
CREATE TABLE "ForfaitRequest" (...)
CREATE TABLE "Newsletter" (...)
CREATE TABLE "OffreCinqPlaces" (...)    -- Pour /offre-5-places
CREATE TABLE "Campaign" (...)
CREATE TABLE "AuditGratuit" (...)       -- Pour /audit-offert
```

Toutes avec les bons champs, indexes, et contraintes définis dans `prisma/schema.prisma`.

---

## ✅ CONFIRMATION FINALE

Une fois fixé, testez les 2 formulaires :

1. **https://www.tanse.fr/audit-offert** → Formulaire audit gratuit
2. **https://www.tanse.fr/offre-5-places** → Formulaire 5 places

Les données doivent apparaître dans votre Neon Console dans les tables `AuditGratuit` et `OffreCinqPlaces`.
