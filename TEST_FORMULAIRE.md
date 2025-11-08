# 🧪 Guide de Test du Formulaire de Contact

Ce guide vous explique comment tester que le formulaire de contact enregistre bien les données dans la base de données Neon.

## ✅ Prérequis

Avant de tester, assurez-vous que :
- ✅ Les tables sont créées dans Neon (Lead, Booking, ForfaitRequest, Newsletter)
- ✅ Les variables d'environnement sont configurées dans Vercel (`DATABASE_URL`, `DIRECT_URL`)
- ✅ Le dernier déploiement Vercel est terminé avec succès

---

## 🚀 Méthode 1 : Test via l'Interface Web (Recommandé)

### Sur Vercel (Production/Preview)

1. **Trouvez l'URL de déploiement**
   - Allez sur Vercel Dashboard → Deployments
   - Copiez l'URL du dernier déploiement (ex: `tanse-finalversion-xxx.vercel.app`)

2. **Allez sur la page de contact**
   ```
   https://[votre-url-vercel]/contact-audit-gratuit
   ```

3. **Remplissez le formulaire**
   - Nom : `Test User`
   - Email : `votre-email-test@gmail.com` (utilisez un vrai email pour recevoir la confirmation)
   - Téléphone : `+33612345678`
   - Entreprise : `TANSE Test`
   - Sujet : `Test base de données`
   - Message : `Je teste que les données arrivent bien dans Neon`

4. **Soumettez le formulaire**
   - Cliquez sur "Envoyer"
   - Vous devriez voir un message de succès

5. **Vérifiez dans Neon Dashboard**
   - Allez sur https://console.neon.tech
   - SQL Editor
   - Exécutez cette requête :
   ```sql
   SELECT * FROM "Lead" ORDER BY "createdAt" DESC LIMIT 10;
   ```
   - Vous devriez voir votre entrée avec toutes les infos !

### En Local (Development)

1. **Démarrez le serveur**
   ```bash
   npm run dev
   ```

2. **Ouvrez votre navigateur**
   ```
   http://localhost:3000/contact-audit-gratuit
   ```

3. **Remplissez et soumettez le formulaire**

4. **Vérifiez les logs du terminal**
   - Vous devriez voir des logs Prisma si la connexion fonctionne

5. **Vérifiez dans Neon** (même requête SQL ci-dessus)

---

## 🧪 Méthode 2 : Test API Automatique

### Test via Script (En Local)

```bash
# Assurez-vous que le serveur dev tourne
npm run dev

# Dans un autre terminal
npm run test:contact
```

Le script va :
- ✅ Envoyer une requête POST à `/api/contact`
- ✅ Afficher la réponse de l'API
- ✅ Vous indiquer si le test a réussi

---

## 🔍 Vérification des Données dans Neon

### Requête SQL de base
```sql
SELECT * FROM "Lead" ORDER BY "createdAt" DESC LIMIT 10;
```

### Voir tous les champs
```sql
SELECT
  id,
  name,
  email,
  company,
  phone,
  message,
  source,
  status,
  "createdAt"
FROM "Lead"
ORDER BY "createdAt" DESC;
```

### Filtrer par source
```sql
SELECT * FROM "Lead" WHERE source = 'contact' ORDER BY "createdAt" DESC;
```

### Compter les leads
```sql
SELECT
  source,
  COUNT(*) as total
FROM "Lead"
GROUP BY source;
```

---

## ✅ Ce qui doit fonctionner

Quand vous soumettez le formulaire, voici ce qui se passe :

1. **Validation Zod** : Les données sont validées côté serveur
2. **Enregistrement DB** : Un nouveau lead est créé dans la table `Lead` avec :
   - ✅ `email` : Votre email
   - ✅ `name` : Votre nom
   - ✅ `company` : Votre entreprise
   - ✅ `phone` : Votre téléphone
   - ✅ `message` : "Sujet: [sujet]. [message]"
   - ✅ `source` : "contact"
   - ✅ `status` : "new"
   - ✅ `createdAt` : Timestamp automatique
3. **Email (si configuré)** : Notification envoyée via Resend
4. **Réponse** : Message de succès affiché

---

## 🐛 Dépannage

### Le formulaire ne soumet pas

**Vérifiez :**
1. La console du navigateur (F12) pour les erreurs JavaScript
2. Que tous les champs requis sont remplis
3. Que l'email est au bon format

### Erreur 500 lors de la soumission

**Vérifiez dans Vercel :**
1. Deployments → Dernier déploiement → Functions
2. Cliquez sur `/api/contact`
3. Regardez les logs d'erreur

**Causes communes :**
- `DATABASE_URL` mal configurée
- Les tables n'existent pas dans Neon
- Problème de connexion réseau Vercel → Neon

### Les données n'apparaissent pas dans Neon

**Vérifiez :**
1. Que vous êtes sur la bonne base de données (dropdown en haut de Neon)
2. Que la table `Lead` existe : `\dt` ou onglet Tables
3. Les logs de l'API dans Vercel pour voir si l'insertion a réussi

**Requête de debug :**
```sql
SELECT COUNT(*) FROM "Lead";
```
Si le nombre augmente, c'est que ça marche !

---

## 📊 Structure des Données

Voici à quoi ressemble une entrée dans la table `Lead` :

```json
{
  "id": "clxxx...",
  "email": "test@tanse.fr",
  "name": "Test User",
  "company": "TANSE Test",
  "phone": "+33612345678",
  "message": "Sujet: Test. Je teste la base de données",
  "source": "contact",
  "status": "new",
  "createdAt": "2025-11-08T12:34:56.789Z",
  "updatedAt": "2025-11-08T12:34:56.789Z"
}
```

---

## 🎯 Checklist de Test Complète

- [ ] Variables d'environnement configurées dans Vercel
- [ ] Déploiement Vercel réussi
- [ ] Tables créées dans Neon (Lead, Booking, ForfaitRequest, Newsletter)
- [ ] Formulaire accessible sur `/contact-audit-gratuit`
- [ ] Soumission du formulaire réussie (message de succès)
- [ ] Données visibles dans Neon avec la requête SQL
- [ ] Tous les champs sont correctement enregistrés
- [ ] `createdAt` et `updatedAt` sont automatiques
- [ ] `source` est bien "contact"
- [ ] `status` est bien "new"

---

**🎉 Si tous les points sont validés, votre base de données Prisma fonctionne parfaitement !**

Pour toute question : Consultez `SETUP_DATABASE.md` ou les logs Vercel.
