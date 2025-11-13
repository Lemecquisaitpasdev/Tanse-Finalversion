// lib/email-templates.ts
// Templates d'emails pour TANSE avec design minimaliste

const TANSE_COLORS = {
  primary: '#444684',
  white: '#ffffff',
  black: '#0b0b0c',
  gray: '#E4E4E4',
  grayDark: '#666666',
};

interface EmailBaseProps {
  logoUrl: string;
  content: string;
}

/**
 * Template de base pour tous les emails
 * Design minimaliste, responsive, compatible avec tous les clients email
 */
function emailBaseTemplate({ logoUrl, content }: EmailBaseProps): string {
  return `
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>TANSE</title>
  <!--[if mso]>
  <style type="text/css">
    body, table, td {font-family: Arial, sans-serif !important;}
  </style>
  <![endif]-->
</head>
<body style="margin: 0; padding: 0; background-color: ${TANSE_COLORS.gray}; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;">
  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: ${TANSE_COLORS.gray};">
    <tr>
      <td style="padding: 40px 20px;">
        <!-- Container principal -->
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="max-width: 600px; margin: 0 auto; background-color: ${TANSE_COLORS.white}; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">

          <!-- Header avec logo -->
          <tr>
            <td style="background-color: ${TANSE_COLORS.primary}; padding: 30px 40px; text-align: center;">
              <img src="${logoUrl}" alt="TANSE" style="max-width: 180px; height: auto; display: block; margin: 0 auto;" />
            </td>
          </tr>

          <!-- Contenu -->
          <tr>
            <td style="padding: 40px;">
              ${content}
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: ${TANSE_COLORS.gray}; padding: 30px 40px; text-align: center;">
              <p style="margin: 0 0 10px 0; font-size: 14px; color: ${TANSE_COLORS.grayDark};">
                <strong>TANSE</strong><br>
                Votre partenaire en référencement local et IA
              </p>
              <p style="margin: 0; font-size: 12px; color: ${TANSE_COLORS.grayDark};">
                <a href="https://tanse.fr" style="color: ${TANSE_COLORS.primary}; text-decoration: none;">tanse.fr</a> •
                <a href="mailto:contact@tanse.fr" style="color: ${TANSE_COLORS.primary}; text-decoration: none;">contact@tanse.fr</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

// ============================================
// 1. EMAIL DE CONFIRMATION - CONTACT (Lead)
// ============================================

interface LeadConfirmationProps {
  name: string;
  email: string;
  sujet?: string;
}

export function generateLeadConfirmationEmail({ name, email, sujet }: LeadConfirmationProps): string {
  const logoUrl = 'https://tanse.fr/brand/tanse-logo.png'; // À remplacer par l'URL publique

  const content = `
    <h1 style="margin: 0 0 20px 0; font-size: 28px; font-weight: 600; color: ${TANSE_COLORS.black}; line-height: 1.3;">
      Merci pour votre message !
    </h1>

    <p style="margin: 0 0 20px 0; font-size: 16px; color: ${TANSE_COLORS.black}; line-height: 1.6;">
      Bonjour <strong>${name}</strong>,
    </p>

    <p style="margin: 0 0 20px 0; font-size: 16px; color: ${TANSE_COLORS.black}; line-height: 1.6;">
      Nous avons bien reçu votre demande${sujet ? ` concernant <strong>${sujet}</strong>` : ''} et nous vous en remercions.
    </p>

    <div style="background-color: ${TANSE_COLORS.gray}; padding: 20px; border-radius: 6px; margin: 30px 0;">
      <p style="margin: 0; font-size: 15px; color: ${TANSE_COLORS.black};">
        ✅ <strong>Votre demande est en cours de traitement</strong><br>
        📧 Nous vous répondrons sous <strong>24 heures</strong>
      </p>
    </div>

    <p style="margin: 0 0 20px 0; font-size: 16px; color: ${TANSE_COLORS.black}; line-height: 1.6;">
      Notre équipe va analyser votre demande et vous proposer une solution adaptée à vos besoins en référencement local et visibilité sur l'IA.
    </p>

    <p style="margin: 0 0 30px 0; font-size: 16px; color: ${TANSE_COLORS.black}; line-height: 1.6;">
      À très bientôt,<br>
      <strong style="color: ${TANSE_COLORS.primary};">L'équipe TANSE</strong>
    </p>

    <hr style="border: none; border-top: 1px solid ${TANSE_COLORS.gray}; margin: 30px 0;" />

    <p style="margin: 0; font-size: 13px; color: ${TANSE_COLORS.grayDark}; line-height: 1.5;">
      <em>Vous recevez cet email car vous avez contacté TANSE via notre formulaire de contact. Si vous n'êtes pas à l'origine de cette demande, vous pouvez ignorer ce message.</em>
    </p>
  `;

  return emailBaseTemplate({ logoUrl, content });
}

// ============================================
// 2. EMAIL DE CONFIRMATION - RENDEZ-VOUS (Booking)
// ============================================

interface BookingConfirmationProps {
  name: string;
  email: string;
  service: string;
  preferredDate?: string;
  preferredTime?: string;
}

export function generateBookingConfirmationEmail({
  name,
  service,
  preferredDate,
  preferredTime
}: BookingConfirmationProps): string {
  const logoUrl = 'https://tanse.fr/brand/tanse-logo.png';

  const serviceNames: Record<string, string> = {
    'audit': 'Audit SEO Local Gratuit',
    'seo-local': 'Consultation SEO Local',
    'geo': 'Stratégie GEO',
    'pack-complet': 'Pack Complet SEO + GEO + IA'
  };

  const serviceName = serviceNames[service] || service;
  const dateInfo = preferredDate && preferredTime
    ? `le <strong>${new Date(preferredDate).toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</strong> ${preferredTime}`
    : 'dans les prochains jours';

  const content = `
    <h1 style="margin: 0 0 20px 0; font-size: 28px; font-weight: 600; color: ${TANSE_COLORS.black}; line-height: 1.3;">
      Rendez-vous confirmé ! 📅
    </h1>

    <p style="margin: 0 0 20px 0; font-size: 16px; color: ${TANSE_COLORS.black}; line-height: 1.6;">
      Bonjour <strong>${name}</strong>,
    </p>

    <p style="margin: 0 0 20px 0; font-size: 16px; color: ${TANSE_COLORS.black}; line-height: 1.6;">
      Merci pour votre demande de rendez-vous ! Nous sommes ravis de vous accompagner.
    </p>

    <div style="background-color: ${TANSE_COLORS.primary}; padding: 25px; border-radius: 6px; margin: 30px 0;">
      <h2 style="margin: 0 0 15px 0; font-size: 18px; font-weight: 600; color: ${TANSE_COLORS.white};">
        📋 Récapitulatif
      </h2>
      <table style="width: 100%; color: ${TANSE_COLORS.white};">
        <tr>
          <td style="padding: 8px 0; font-size: 15px;"><strong>Service :</strong></td>
          <td style="padding: 8px 0; font-size: 15px; text-align: right;">${serviceName}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-size: 15px;"><strong>Date souhaitée :</strong></td>
          <td style="padding: 8px 0; font-size: 15px; text-align: right;">${dateInfo}</td>
        </tr>
      </table>
    </div>

    <p style="margin: 0 0 20px 0; font-size: 16px; color: ${TANSE_COLORS.black}; line-height: 1.6;">
      Notre équipe va vous contacter <strong>sous 24 heures</strong> pour confirmer le créneau définitif et vous envoyer un lien de visioconférence.
    </p>

    <div style="background-color: ${TANSE_COLORS.gray}; padding: 20px; border-radius: 6px; margin: 30px 0;">
      <p style="margin: 0; font-size: 15px; color: ${TANSE_COLORS.black};">
        💡 <strong>En attendant, préparez :</strong><br>
        • L'URL de votre site web<br>
        • Vos objectifs business<br>
        • Vos questions sur le SEO local et l'IA
      </p>
    </div>

    <p style="margin: 0 0 30px 0; font-size: 16px; color: ${TANSE_COLORS.black}; line-height: 1.6;">
      À très vite,<br>
      <strong style="color: ${TANSE_COLORS.primary};">L'équipe TANSE</strong>
    </p>

    <hr style="border: none; border-top: 1px solid ${TANSE_COLORS.gray}; margin: 30px 0;" />

    <p style="margin: 0; font-size: 13px; color: ${TANSE_COLORS.grayDark}; line-height: 1.5;">
      <em>Besoin de modifier ou annuler ? Répondez simplement à cet email.</em>
    </p>
  `;

  return emailBaseTemplate({ logoUrl, content });
}

// ============================================
// 3. EMAIL DE CONFIRMATION - DEMANDE DE FORFAIT (ForfaitRequest)
// ============================================

interface ForfaitConfirmationProps {
  name: string;
  forfaitName: string;
  company?: string;
}

export function generateForfaitConfirmationEmail({
  name,
  forfaitName,
  company
}: ForfaitConfirmationProps): string {
  const logoUrl = 'https://tanse.fr/brand/tanse-logo.png';

  const content = `
    <h1 style="margin: 0 0 20px 0; font-size: 28px; font-weight: 600; color: ${TANSE_COLORS.black}; line-height: 1.3;">
      Demande de forfait reçue ! 🎯
    </h1>

    <p style="margin: 0 0 20px 0; font-size: 16px; color: ${TANSE_COLORS.black}; line-height: 1.6;">
      Bonjour <strong>${name}</strong>,
    </p>

    <p style="margin: 0 0 20px 0; font-size: 16px; color: ${TANSE_COLORS.black}; line-height: 1.6;">
      Merci pour votre intérêt pour nos services${company ? ` pour <strong>${company}</strong>` : ''} !
    </p>

    <div style="background-color: ${TANSE_COLORS.primary}; padding: 25px; border-radius: 6px; margin: 30px 0; text-align: center;">
      <p style="margin: 0 0 10px 0; font-size: 14px; color: rgba(255,255,255,0.9); text-transform: uppercase; letter-spacing: 1px;">
        Forfait demandé
      </p>
      <h2 style="margin: 0; font-size: 24px; font-weight: 700; color: ${TANSE_COLORS.white};">
        ${forfaitName}
      </h2>
    </div>

    <p style="margin: 0 0 20px 0; font-size: 16px; color: ${TANSE_COLORS.black}; line-height: 1.6;">
      Notre équipe commerciale va étudier votre demande et vous préparer une proposition personnalisée incluant :
    </p>

    <div style="background-color: ${TANSE_COLORS.gray}; padding: 20px; border-radius: 6px; margin: 30px 0;">
      <p style="margin: 0; font-size: 15px; color: ${TANSE_COLORS.black}; line-height: 1.8;">
        ✅ Une analyse de vos besoins spécifiques<br>
        ✅ Un devis détaillé et transparent<br>
        ✅ Un plan d'action personnalisé<br>
        ✅ Les délais de mise en œuvre
      </p>
    </div>

    <p style="margin: 0 0 20px 0; font-size: 16px; color: ${TANSE_COLORS.black}; line-height: 1.6;">
      Vous recevrez notre proposition <strong>sous 48 heures</strong>.
    </p>

    <table cellspacing="0" cellpadding="0" border="0" style="margin: 30px 0;">
      <tr>
        <td style="background-color: ${TANSE_COLORS.primary}; padding: 14px 30px; border-radius: 6px; text-align: center;">
          <a href="https://tanse.fr/forfaits-geo-seo" style="color: ${TANSE_COLORS.white}; text-decoration: none; font-weight: 600; font-size: 16px; display: block;">
            Voir tous nos forfaits
          </a>
        </td>
      </tr>
    </table>

    <p style="margin: 0 0 30px 0; font-size: 16px; color: ${TANSE_COLORS.black}; line-height: 1.6;">
      Nous avons hâte de collaborer avec vous,<br>
      <strong style="color: ${TANSE_COLORS.primary};">L'équipe TANSE</strong>
    </p>

    <hr style="border: none; border-top: 1px solid ${TANSE_COLORS.gray}; margin: 30px 0;" />

    <p style="margin: 0; font-size: 13px; color: ${TANSE_COLORS.grayDark}; line-height: 1.5;">
      <em>Des questions ? Répondez à cet email ou appelez-nous directement.</em>
    </p>
  `;

  return emailBaseTemplate({ logoUrl, content });
}

// ============================================
// 4. EMAIL DE BIENVENUE - NEWSLETTER
// ============================================

interface NewsletterWelcomeProps {
  name?: string;
  email: string;
}

export function generateNewsletterWelcomeEmail({ name, email }: NewsletterWelcomeProps): string {
  const logoUrl = 'https://tanse.fr/brand/tanse-logo.png';
  const firstName = name?.split(' ')[0] || 'Bonjour';

  const content = `
    <h1 style="margin: 0 0 20px 0; font-size: 28px; font-weight: 600; color: ${TANSE_COLORS.black}; line-height: 1.3;">
      Bienvenue dans la communauté TANSE ! 🚀
    </h1>

    <p style="margin: 0 0 20px 0; font-size: 16px; color: ${TANSE_COLORS.black}; line-height: 1.6;">
      ${firstName},
    </p>

    <p style="margin: 0 0 20px 0; font-size: 16px; color: ${TANSE_COLORS.black}; line-height: 1.6;">
      Merci de vous être inscrit(e) à notre newsletter ! Vous faites désormais partie d'une communauté de professionnels qui anticipent l'avenir du référencement local et de l'IA.
    </p>

    <div style="background-color: ${TANSE_COLORS.primary}; padding: 25px; border-radius: 6px; margin: 30px 0;">
      <h2 style="margin: 0 0 15px 0; font-size: 20px; font-weight: 600; color: ${TANSE_COLORS.white};">
        Ce que vous allez recevoir :
      </h2>
      <p style="margin: 0; font-size: 15px; color: ${TANSE_COLORS.white}; line-height: 1.8;">
        📊 Tendances SEO local et GEO<br>
        🤖 Actualités IA et recherche vocale<br>
        💡 Conseils pratiques et études de cas<br>
        🎁 Offres exclusives pour nos abonnés
      </p>
    </div>

    <p style="margin: 0 0 20px 0; font-size: 16px; color: ${TANSE_COLORS.black}; line-height: 1.6;">
      <strong>Fréquence :</strong> 1 à 2 emails par mois, pas de spam, que du contenu de qualité.
    </p>

    <div style="background-color: ${TANSE_COLORS.gray}; padding: 20px; border-radius: 6px; margin: 30px 0;">
      <p style="margin: 0 0 10px 0; font-size: 15px; color: ${TANSE_COLORS.black}; font-weight: 600;">
        🎯 Pendant ce temps, découvrez :
      </p>
      <p style="margin: 0; font-size: 15px; color: ${TANSE_COLORS.black};">
        <a href="https://tanse.fr/blog-seo-geo" style="color: ${TANSE_COLORS.primary}; text-decoration: none; font-weight: 500;">→ Notre blog SEO & GEO</a><br>
        <a href="https://tanse.fr/contact-audit-gratuit" style="color: ${TANSE_COLORS.primary}; text-decoration: none; font-weight: 500;">→ Audit SEO gratuit</a><br>
        <a href="https://tanse.fr/geo" style="color: ${TANSE_COLORS.primary}; text-decoration: none; font-weight: 500;">→ Qu'est-ce que le GEO ?</a>
      </p>
    </div>

    <table cellspacing="0" cellpadding="0" border="0" style="margin: 30px 0;">
      <tr>
        <td style="background-color: ${TANSE_COLORS.primary}; padding: 14px 30px; border-radius: 6px; text-align: center;">
          <a href="https://tanse.fr/contact-audit-gratuit" style="color: ${TANSE_COLORS.white}; text-decoration: none; font-weight: 600; font-size: 16px; display: block;">
            Demander un audit gratuit
          </a>
        </td>
      </tr>
    </table>

    <p style="margin: 0 0 30px 0; font-size: 16px; color: ${TANSE_COLORS.black}; line-height: 1.6;">
      Au plaisir d'échanger avec vous,<br>
      <strong style="color: ${TANSE_COLORS.primary};">L'équipe TANSE</strong>
    </p>

    <hr style="border: none; border-top: 1px solid ${TANSE_COLORS.gray}; margin: 30px 0;" />

    <p style="margin: 0; font-size: 13px; color: ${TANSE_COLORS.grayDark}; line-height: 1.5;">
      <em>Vous recevez cet email car vous vous êtes inscrit(e) à la newsletter TANSE avec l'adresse ${email}.
      <a href="https://tanse.fr/newsletter/unsubscribe?email=${encodeURIComponent(email)}" style="color: ${TANSE_COLORS.grayDark}; text-decoration: underline;">Se désinscrire</a></em>
    </p>
  `;

  return emailBaseTemplate({ logoUrl, content });
}

// ============================================
// 5. EMAIL DE CONFIRMATION - OFFRE 5 PLACES
// ============================================

interface OffreCinqPlacesConfirmationProps {
  nomEntreprise: string;
  email: string;
  secteurActivite: string;
}

export function generateOffreCinqPlacesConfirmation({ nomEntreprise, email, secteurActivite }: OffreCinqPlacesConfirmationProps): string {
  const logoUrl = 'https://tanse.fr/brand/tanse-logo.png';

  const content = `
    <h1 style="margin: 0 0 20px 0; font-size: 28px; font-weight: 600; color: ${TANSE_COLORS.black}; line-height: 1.3;">
      Candidature reçue ! 🎉
    </h1>

    <p style="margin: 0 0 20px 0; font-size: 16px; color: ${TANSE_COLORS.black}; line-height: 1.6;">
      Bonjour <strong>${nomEntreprise}</strong>,
    </p>

    <p style="margin: 0 0 20px 0; font-size: 16px; color: ${TANSE_COLORS.black}; line-height: 1.6;">
      Merci d'avoir postulé pour notre <strong>offre limitée à 5 entreprises</strong> pour bénéficier d'un setup SEO + GEO gratuit (valeur 2 990€) !
    </p>

    <div style="background-color: ${TANSE_COLORS.primary}; padding: 25px; border-radius: 6px; margin: 30px 0;">
      <h2 style="margin: 0 0 15px 0; font-size: 20px; font-weight: 600; color: ${TANSE_COLORS.white};">
        Ce qui va se passer maintenant :
      </h2>
      <p style="margin: 0; font-size: 15px; color: ${TANSE_COLORS.white}; line-height: 1.8;">
        ⏱️ Réponse sous 48 heures maximum<br>
        📊 Analyse approfondie de votre candidature<br>
        ✅ Si vous êtes sélectionné(e), nous vous contacterons<br>
        🚀 Démarrage du setup sous 5 jours ouvrés
      </p>
    </div>

    <p style="margin: 0 0 20px 0; font-size: 16px; color: ${TANSE_COLORS.black}; line-height: 1.6;">
      <strong>Rappel de votre candidature :</strong><br>
      Entreprise : ${nomEntreprise}<br>
      Secteur : ${secteurActivite}<br>
      Email : ${email}
    </p>

    <div style="background-color: ${TANSE_COLORS.gray}; padding: 20px; border-radius: 6px; margin: 30px 0;">
      <p style="margin: 0 0 10px 0; font-size: 15px; color: ${TANSE_COLORS.black}; font-weight: 600;">
        💡 En attendant :
      </p>
      <p style="margin: 0; font-size: 15px; color: ${TANSE_COLORS.black};">
        <a href="https://tanse.fr" style="color: ${TANSE_COLORS.primary}; text-decoration: none; font-weight: 500;">→ Découvrez TANSE</a><br>
        <a href="https://tanse.fr/geo" style="color: ${TANSE_COLORS.primary}; text-decoration: none; font-weight: 500;">→ Qu'est-ce que le GEO ?</a><br>
        <a href="https://tanse.fr/forfaits" style="color: ${TANSE_COLORS.primary}; text-decoration: none; font-weight: 500;">→ Nos forfaits</a>
      </p>
    </div>

    <p style="margin: 0 0 30px 0; font-size: 16px; color: ${TANSE_COLORS.black}; line-height: 1.6;">
      À très bientôt,<br>
      <strong style="color: ${TANSE_COLORS.primary};">L'équipe TANSE</strong>
    </p>

    <p style="margin: 0; font-size: 13px; color: ${TANSE_COLORS.grayDark}; line-height: 1.5;">
      <em>Des questions ? Répondez directement à cet email ou contactez-nous à contact@tanse.fr</em>
    </p>
  `;

  return emailBaseTemplate({ logoUrl, content });
}
