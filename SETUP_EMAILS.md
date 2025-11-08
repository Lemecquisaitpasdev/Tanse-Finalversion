# 📧 Configuration des Emails - TANSE

Ce guide vous explique comment configurer l'envoi d'emails automatiques avec Resend.

---

## 🎯 Types d'Emails Envoyés

Le système envoie **2 types d'emails** pour chaque formulaire :

### 1. **Emails de Notification** (vers l'équipe TANSE)
- Destinataire : `contact@tanse.fr` (ou `NOTIFICATION_EMAIL`)
- Pour : Lead, Booking, ForfaitRequest, Newsletter
- Contient : Toutes les données soumises par l'utilisateur

### 2. **Emails de Confirmation** (vers l'utilisateur)
- Destinataire : L'utilisateur qui a rempli le formulaire
- Design : Couleurs TANSE (#444684), logo, minimaliste
- Types :
  - ✉️ **Contact** : "Nous avons bien reçu votre message"
  - 📅 **Rendez-vous** : "Votre demande de rendez-vous est confirmée"
  - 💼 **Forfait** : "Demande de forfait reçue"
  - 🚀 **Newsletter** : "Bienvenue dans la communauté TANSE !"

---

## ⚙️ ÉTAPE 1 : Créer un Compte Resend

1. **Allez sur https://resend.com**
2. **Créez un compte gratuit** (100 emails/jour, 3000/mois)
3. **Confirmez votre email**

---

## 🔑 ÉTAPE 2 : Obtenir une API Key

1. **Dans Resend Dashboard**, allez dans **API Keys**
2. **Cliquez sur "Create API Key"**
3. **Nom** : `TANSE Production`
4. **Permission** : `Sending access` (Full access)
5. **Cliquez sur "Create"**
6. **⚠️ COPIEZ LA CLÉ IMMÉDIATEMENT** (vous ne pourrez plus la voir après)

Exemple de clé : `re_123abc456def789ghi`

---

## 🌐 ÉTAPE 3 : Vérifier votre Domaine (IMPORTANT !)

Pour que les emails arrivent bien (et pas en spam), vous devez vérifier votre domaine.

### Option A : Utiliser votre domaine tanse.fr (Recommandé)

1. **Dans Resend Dashboard** → **Domains**
2. **Cliquez sur "Add Domain"**
3. **Entrez** : `tanse.fr`
4. **Resend vous donne des enregistrements DNS à ajouter** :

#### DNS Records à ajouter chez votre hébergeur :

```
Type: TXT
Name: @
Value: v=spf1 include:_spf.resend.com ~all

Type: TXT
Name: resend._domainkey
Value: (valeur fournie par Resend, commence par p=...)

Type: CNAME (optionnel mais recommandé)
Name: rs
Value: feedback.resend.com
```

5. **Ajoutez ces enregistrements dans votre DNS** (chez votre hébergeur de domaine)
6. **Attendez la vérification** (quelques minutes à quelques heures)
7. **Vérifiez que le domaine est vert ✅ dans Resend**

### Option B : Utiliser le domaine de test Resend (Pour tester uniquement)

⚠️ **Limitation** : Les emails n'iront QUE vers les adresses que vous avez vérifiées dans Resend.

1. Utilisez `onboarding@resend.dev` comme email d'envoi
2. Ajoutez votre email de test dans Resend → Settings → **Verified Emails**

---

## 🔧 ÉTAPE 4 : Configurer les Variables d'Environnement

### Sur Vercel (Production)

1. **Vercel Dashboard** → Votre projet → **Settings** → **Environment Variables**

2. **Ajoutez ces variables** :

```
RESEND_API_KEY=re_votre_cle_api_resend
NOTIFICATION_EMAIL=contact@tanse.fr
```

3. **Cochez** : ✅ Production, ✅ Preview, ✅ Development

4. **Sauvegardez**

### En Local (.env.local)

Ajoutez dans votre fichier `.env.local` :

```env
# RESEND EMAIL
RESEND_API_KEY=re_votre_cle_api_resend
NOTIFICATION_EMAIL=contact@tanse.fr
```

---

## ✅ ÉTAPE 5 : Tester l'Envoi d'Emails

### Test 1 : Formulaire de Contact

1. **Allez sur** : https://[votre-url-vercel]/contact-audit-gratuit
2. **Remplissez le formulaire** avec votre vrai email
3. **Soumettez**

**Vous devriez recevoir** :
- ✅ Un email de confirmation à votre adresse
- ✅ L'équipe TANSE reçoit une notification à `contact@tanse.fr`

### Test 2 : Vérifiez dans Resend Dashboard

1. **Resend Dashboard** → **Emails**
2. Vous devriez voir 2 emails envoyés :
   - `Nous avons bien reçu votre message - TANSE` → vers vous
   - `[CONTACT] Votre nom vous a contacté` → vers l'équipe

3. **Cliquez dessus pour voir le rendu**

---

## 📊 Aperçu des Templates d'Emails

### 1. Email de Confirmation Contact (Lead)
```
Sujet : Nous avons bien reçu votre message - TANSE

Contenu :
- Remerciement personnalisé
- Confirmation de la réception
- Délai de réponse (24h)
- CTA : Message de réassurance
```

### 2. Email de Confirmation Rendez-vous (Booking)
```
Sujet : Votre demande de rendez-vous est confirmée - TANSE

Contenu :
- Récapitulatif du service demandé
- Date et heure souhaitées
- Prochaines étapes
- Conseils de préparation
```

### 3. Email de Confirmation Forfait (ForfaitRequest)
```
Sujet : Demande de forfait "[Nom du forfait]" reçue - TANSE

Contenu :
- Forfait demandé mis en avant
- Ce qui va suivre (proposition sous 48h)
- CTA : Voir tous les forfaits
```

### 4. Email de Bienvenue Newsletter
```
Sujet : Bienvenue dans la communauté TANSE ! 🚀

Contenu :
- Message de bienvenue personnalisé
- Ce que l'utilisateur va recevoir
- Fréquence d'envoi
- Liens vers le blog et ressources
```

---

## 🎨 Design des Emails

Tous les emails utilisent :
- **Couleur primaire** : #444684 (bleu-violet TANSE)
- **Logo** : Logo TANSE PNG
- **Police** : System fonts (-apple-system, Helvetica, Arial)
- **Style** : Minimaliste, "less is more"
- **Responsive** : Compatible mobile et desktop
- **Compatible** : Tous les clients email (Gmail, Outlook, Apple Mail, etc.)

---

## 🐛 Dépannage

### Les emails n'arrivent pas

**Vérifications** :

1. ✅ `RESEND_API_KEY` est bien définie dans Vercel ?
2. ✅ Le domaine est vérifié dans Resend (vert ✅) ?
3. ✅ Vérifiez les **Spam/Courrier indésirable**
4. ✅ Vérifiez les logs Vercel : Deployments → Functions → `/api/contact`
5. ✅ Vérifiez dans Resend Dashboard → Emails si l'email a été envoyé

### Les emails arrivent en spam

**Solutions** :

1. ✅ Vérifiez que le domaine est bien vérifié avec SPF et DKIM
2. ✅ Ajoutez l'enregistrement DMARC :
   ```
   Type: TXT
   Name: _dmarc
   Value: v=DMARC1; p=none; rua=mailto:dmarc@tanse.fr
   ```
3. ✅ Évitez les mots spam dans les sujets
4. ✅ Utilisez un domaine vérifié (pas `@resend.dev`)

### Erreur "Invalid API Key"

- La clé API n'est pas valide ou mal copiée
- Vérifiez qu'il n'y a pas d'espaces avant/après
- Régénérez une nouvelle clé si nécessaire

### Erreur "Domain not verified"

- Le domaine n'est pas vérifié dans Resend
- Ajoutez les enregistrements DNS
- Attendez la propagation (quelques heures max)

---

## 📈 Limites et Quotas Resend

### Plan Gratuit
- ✅ 100 emails / jour
- ✅ 3000 emails / mois
- ✅ Vérification d'1 domaine

### Plan Pro (si nécessaire)
- 50 000 emails / mois
- Domaines illimités
- Support prioritaire

---

## 📝 Structure du Code

```
lib/
├── email.ts                  # Fonctions d'envoi (notifications + confirmations)
├── email-templates.ts        # Templates HTML des emails de confirmation

app/api/
├── contact/route.ts          # API Contact (envoie 2 emails)
├── booking/route.ts          # API Booking (envoie 2 emails)
├── forfait-request/route.ts  # API Forfait (envoie 2 emails)
└── newsletter/route.ts       # API Newsletter (envoie 2 emails)
```

### Fonctions Disponibles

**Notifications (vers l'équipe)** :
- `sendLeadNotification()`
- `sendBookingNotification()`
- `sendForfaitRequestNotification()`
- `sendNewsletterNotification()`

**Confirmations (vers l'utilisateur)** :
- `sendLeadConfirmation()`
- `sendBookingConfirmation()`
- `sendForfaitConfirmation()`
- `sendNewsletterWelcome()`

---

## ✨ Prochaines Améliorations (Optionnel)

- [ ] Email de rappel de rendez-vous (J-1)
- [ ] Email de suivi post-rendez-vous
- [ ] Séquence d'onboarding newsletter (série de 3 emails)
- [ ] Email de relance pour les leads non convertis
- [ ] Rapports mensuels automatiques

---

## 🔗 Ressources

- Documentation Resend : https://resend.com/docs
- API Reference : https://resend.com/docs/api-reference
- Templates d'emails : https://react.email
- Tester les emails : https://www.mail-tester.com

---

**🎉 Une fois configuré, vos utilisateurs recevront de magnifiques emails de confirmation automatiquement !**

Pour toute question : contact@tanse.fr
