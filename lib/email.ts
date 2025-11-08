// lib/email.ts
import { Resend } from 'resend';
import {
  generateLeadConfirmationEmail,
  generateBookingConfirmationEmail,
  generateForfaitConfirmationEmail,
  generateNewsletterWelcomeEmail
} from './email-templates';

const resend = new Resend(process.env.RESEND_API_KEY);

const NOTIFICATION_EMAIL = process.env.NOTIFICATION_EMAIL || 'contact@tanse.fr';
const FROM_EMAIL = 'TANSE Notifications <notifications@tanse.fr>';

// Template HTML de base pour tous les emails
const getEmailTemplate = (content: string) => `
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Notification TANSE</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 40px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.08);">

          <!-- Header avec logo TANSE -->
          <tr>
            <td style="background: linear-gradient(135deg, #444684 0%, #524e7d 100%); padding: 32px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 600;">
                TANSE
              </h1>
              <p style="color: rgba(255,255,255,0.9); margin: 8px 0 0 0; font-size: 14px;">
                Pionniers du GEO en France
              </p>
            </td>
          </tr>

          <!-- Contenu -->
          <tr>
            <td style="padding: 40px 32px;">
              ${content}
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f9fafb; padding: 24px 32px; text-align: center; border-top: 1px solid #e5e7eb;">
              <p style="margin: 0; font-size: 12px; color: #6b7280;">
                Cet email a été envoyé automatiquement par le système TANSE
              </p>
              <p style="margin: 8px 0 0 0; font-size: 12px; color: #6b7280;">
                <a href="https://www.tanse.fr" style="color: #444684; text-decoration: none;">www.tanse.fr</a> •
                <a href="mailto:contact@tanse.fr" style="color: #444684; text-decoration: none;">contact@tanse.fr</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;

// Fonction helper pour formater les données
const formatField = (label: string, value: string | null | undefined) => {
  if (!value) return '';
  return `
    <tr>
      <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
        <strong style="color: #374151; font-size: 14px;">${label}:</strong>
        <p style="margin: 4px 0 0 0; color: #1f2937; font-size: 15px;">${value}</p>
      </td>
    </tr>
  `;
};

// 1. Notification pour nouveau lead/contact
export async function sendLeadNotification(lead: {
  email: string;
  name?: string | null;
  company?: string | null;
  phone?: string | null;
  message?: string | null;
  source?: string | null;
}) {
  const content = `
    <div style="margin-bottom: 24px;">
      <h2 style="color: #1f2937; font-size: 20px; margin: 0 0 8px 0;">
        📬 Nouveau contact reçu
      </h2>
      <p style="color: #6b7280; margin: 0; font-size: 14px;">
        Un visiteur a rempli le formulaire de contact
      </p>
    </div>

    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 24px;">
      ${formatField('Nom', lead.name)}
      ${formatField('Email', lead.email)}
      ${formatField('Entreprise', lead.company)}
      ${formatField('Téléphone', lead.phone)}
      ${formatField('Source', lead.source)}
      ${lead.message ? `
        <tr>
          <td style="padding: 12px 0;">
            <strong style="color: #374151; font-size: 14px;">Message:</strong>
            <p style="margin: 8px 0 0 0; color: #1f2937; font-size: 15px; background-color: #f9fafb; padding: 16px; border-radius: 8px; border-left: 3px solid #444684;">
              ${lead.message.replace(/\n/g, '<br>')}
            </p>
          </td>
        </tr>
      ` : ''}
    </table>

    <div style="margin-top: 32px; padding-top: 24px; border-top: 2px solid #e5e7eb;">
      <a href="mailto:${lead.email}" style="display: inline-block; background: linear-gradient(135deg, #444684 0%, #524e7d 100%); color: #ffffff; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 14px;">
        Répondre au contact
      </a>
    </div>
  `;

  try {
    await resend.emails.send({
      from: FROM_EMAIL,
      to: NOTIFICATION_EMAIL,
      subject: `[CONTACT] ${lead.name || lead.email} vous a contacté`,
      html: getEmailTemplate(content),
    });
    console.log('✅ Email de notification lead envoyé');
  } catch (error) {
    console.error('❌ Erreur envoi email lead:', error);
  }
}

// 2. Notification pour inscription newsletter
export async function sendNewsletterNotification(subscriber: {
  email: string;
  name?: string | null;
  source?: string | null;
}) {
  const content = `
    <div style="margin-bottom: 24px;">
      <h2 style="color: #1f2937; font-size: 20px; margin: 0 0 8px 0;">
        📧 Nouvelle inscription newsletter
      </h2>
      <p style="color: #6b7280; margin: 0; font-size: 14px;">
        Un nouveau visiteur s'est abonné à votre newsletter
      </p>
    </div>

    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 24px;">
      ${formatField('Nom', subscriber.name)}
      ${formatField('Email', subscriber.email)}
      ${formatField('Source', subscriber.source)}
    </table>

    <div style="background-color: #f0fdf4; border: 1px solid #86efac; border-radius: 8px; padding: 16px; margin-top: 24px;">
      <p style="margin: 0; color: #166534; font-size: 14px;">
        💡 <strong>Action recommandée :</strong> Ajoutez cet abonné à votre liste Mailchimp/Brevo
      </p>
    </div>
  `;

  try {
    await resend.emails.send({
      from: FROM_EMAIL,
      to: NOTIFICATION_EMAIL,
      subject: `[NEWSLETTER] Nouvel abonné : ${subscriber.email}`,
      html: getEmailTemplate(content),
    });
    console.log('✅ Email de notification newsletter envoyé');
  } catch (error) {
    console.error('❌ Erreur envoi email newsletter:', error);
  }
}

// 3. Notification pour prise de rendez-vous
export async function sendBookingNotification(booking: {
  email: string;
  name: string;
  company?: string | null;
  phone: string;
  service: string;
  preferredDate?: Date | null;
  preferredTime?: string | null;
  message?: string | null;
}) {
  const formattedDate = booking.preferredDate
    ? new Date(booking.preferredDate).toLocaleDateString('fr-FR', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    : 'Non spécifiée';

  const content = `
    <div style="margin-bottom: 24px;">
      <h2 style="color: #1f2937; font-size: 20px; margin: 0 0 8px 0;">
        📅 Nouvelle demande de rendez-vous
      </h2>
      <p style="color: #6b7280; margin: 0; font-size: 14px;">
        Un prospect souhaite prendre rendez-vous avec vous
      </p>
    </div>

    <div style="background: linear-gradient(135deg, #444684 0%, #524e7d 100%); border-radius: 12px; padding: 20px; margin-bottom: 24px; text-align: center;">
      <p style="color: rgba(255,255,255,0.9); margin: 0 0 8px 0; font-size: 14px;">Service demandé</p>
      <h3 style="color: #ffffff; margin: 0; font-size: 22px; font-weight: 600;">
        ${booking.service}
      </h3>
    </div>

    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 24px;">
      ${formatField('Nom', booking.name)}
      ${formatField('Email', booking.email)}
      ${formatField('Téléphone', booking.phone)}
      ${formatField('Entreprise', booking.company)}
      ${formatField('Date souhaitée', formattedDate)}
      ${formatField('Créneau', booking.preferredTime)}
      ${booking.message ? `
        <tr>
          <td style="padding: 12px 0;">
            <strong style="color: #374151; font-size: 14px;">Message:</strong>
            <p style="margin: 8px 0 0 0; color: #1f2937; font-size: 15px; background-color: #f9fafb; padding: 16px; border-radius: 8px; border-left: 3px solid #444684;">
              ${booking.message.replace(/\n/g, '<br>')}
            </p>
          </td>
        </tr>
      ` : ''}
    </table>

    <div style="margin-top: 32px; padding-top: 24px; border-top: 2px solid #e5e7eb;">
      <a href="tel:${booking.phone}" style="display: inline-block; background: linear-gradient(135deg, #444684 0%, #524e7d 100%); color: #ffffff; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 14px; margin-right: 12px;">
        📞 Appeler ${booking.name}
      </a>
      <a href="mailto:${booking.email}" style="display: inline-block; background-color: #f3f4f6; color: #1f2937; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 14px;">
        ✉️ Envoyer un email
      </a>
    </div>
  `;

  try {
    await resend.emails.send({
      from: FROM_EMAIL,
      to: NOTIFICATION_EMAIL,
      subject: `[RENDEZ-VOUS] ${booking.name} - ${booking.service}`,
      html: getEmailTemplate(content),
    });
    console.log('✅ Email de notification rendez-vous envoyé');
  } catch (error) {
    console.error('❌ Erreur envoi email rendez-vous:', error);
  }
}

// 4. Notification pour demande de forfait
export async function sendForfaitRequestNotification(request: {
  email: string;
  name: string;
  company?: string | null;
  phone?: string | null;
  forfaitName: string;
  forfaitType: string;
  budget?: string | null;
  message?: string | null;
}) {
  const content = `
    <div style="margin-bottom: 24px;">
      <h2 style="color: #1f2937; font-size: 20px; margin: 0 0 8px 0;">
        💼 Nouvelle demande de forfait
      </h2>
      <p style="color: #6b7280; margin: 0; font-size: 14px;">
        Un prospect est intéressé par vos services
      </p>
    </div>

    <div style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); border-radius: 12px; padding: 20px; margin-bottom: 24px; text-align: center;">
      <p style="color: rgba(255,255,255,0.9); margin: 0 0 8px 0; font-size: 14px;">Forfait demandé</p>
      <h3 style="color: #ffffff; margin: 0; font-size: 22px; font-weight: 600;">
        ${request.forfaitName}
      </h3>
      ${request.budget ? `
        <p style="color: rgba(255,255,255,0.95); margin: 12px 0 0 0; font-size: 16px;">
          💰 Budget : <strong>${request.budget}</strong>
        </p>
      ` : ''}
    </div>

    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 24px;">
      ${formatField('Nom', request.name)}
      ${formatField('Email', request.email)}
      ${formatField('Téléphone', request.phone)}
      ${formatField('Entreprise', request.company)}
      ${formatField('Type de forfait', request.forfaitType)}
      ${request.message ? `
        <tr>
          <td style="padding: 12px 0;">
            <strong style="color: #374151; font-size: 14px;">Message:</strong>
            <p style="margin: 8px 0 0 0; color: #1f2937; font-size: 15px; background-color: #f9fafb; padding: 16px; border-radius: 8px; border-left: 3px solid #10b981;">
              ${request.message.replace(/\n/g, '<br>')}
            </p>
          </td>
        </tr>
      ` : ''}
    </table>

    <div style="background-color: #fef3c7; border: 1px solid #fbbf24; border-radius: 8px; padding: 16px; margin-top: 24px;">
      <p style="margin: 0; color: #92400e; font-size: 14px;">
        ⚡ <strong>Lead chaud !</strong> Ce prospect a montré un intérêt fort en demandant un forfait. Contactez-le rapidement.
      </p>
    </div>

    <div style="margin-top: 32px; padding-top: 24px; border-top: 2px solid #e5e7eb;">
      <a href="mailto:${request.email}" style="display: inline-block; background: linear-gradient(135deg, #10b981 0%, #059669 100%); color: #ffffff; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 14px;">
        Répondre immédiatement
      </a>
    </div>
  `;

  try {
    await resend.emails.send({
      from: FROM_EMAIL,
      to: NOTIFICATION_EMAIL,
      subject: `[FORFAIT] ${request.name} demande : ${request.forfaitName}`,
      html: getEmailTemplate(content),
    });
    console.log('✅ Email de notification forfait envoyé');
  } catch (error) {
    console.error('❌ Erreur envoi email forfait:', error);
  }
}

// ============================================
// EMAILS DE CONFIRMATION AUX UTILISATEURS
// ============================================

const FROM_EMAIL_USER = 'TANSE <hello@tanse.fr>'; // Email pour les confirmations utilisateurs

// 5. Email de confirmation - Contact (Lead)
export async function sendLeadConfirmation(lead: {
  email: string;
  name?: string | null;
  sujet?: string | null;
}) {
  if (!lead.name || !lead.email) {
    console.warn('⚠️ Impossible d\'envoyer l\'email de confirmation : nom ou email manquant');
    return;
  }

  const htmlContent = generateLeadConfirmationEmail({
    name: lead.name,
    email: lead.email,
    sujet: lead.sujet || undefined,
  });

  try {
    await resend.emails.send({
      from: FROM_EMAIL_USER,
      to: lead.email,
      subject: 'Nous avons bien reçu votre message - TANSE',
      html: htmlContent,
    });
    console.log(`✅ Email de confirmation Lead envoyé à ${lead.email}`);
  } catch (error) {
    console.error('❌ Erreur envoi email confirmation lead:', error);
    throw error;
  }
}

// 6. Email de confirmation - Rendez-vous (Booking)
export async function sendBookingConfirmation(booking: {
  email: string;
  name: string;
  service: string;
  preferredDate?: Date | null;
  preferredTime?: string | null;
}) {
  const formattedDate = booking.preferredDate
    ? new Date(booking.preferredDate).toISOString().split('T')[0]
    : undefined;

  const htmlContent = generateBookingConfirmationEmail({
    name: booking.name,
    email: booking.email,
    service: booking.service,
    preferredDate: formattedDate,
    preferredTime: booking.preferredTime || undefined,
  });

  try {
    await resend.emails.send({
      from: FROM_EMAIL_USER,
      to: booking.email,
      subject: 'Votre demande de rendez-vous est confirmée - TANSE',
      html: htmlContent,
    });
    console.log(`✅ Email de confirmation Booking envoyé à ${booking.email}`);
  } catch (error) {
    console.error('❌ Erreur envoi email confirmation booking:', error);
    throw error;
  }
}

// 7. Email de confirmation - Demande de forfait
export async function sendForfaitConfirmation(request: {
  email: string;
  name: string;
  forfaitName: string;
  company?: string | null;
}) {
  const htmlContent = generateForfaitConfirmationEmail({
    name: request.name,
    forfaitName: request.forfaitName,
    company: request.company || undefined,
  });

  try {
    await resend.emails.send({
      from: FROM_EMAIL_USER,
      to: request.email,
      subject: `Demande de forfait "${request.forfaitName}" reçue - TANSE`,
      html: htmlContent,
    });
    console.log(`✅ Email de confirmation Forfait envoyé à ${request.email}`);
  } catch (error) {
    console.error('❌ Erreur envoi email confirmation forfait:', error);
    throw error;
  }
}

// 8. Email de bienvenue - Newsletter
export async function sendNewsletterWelcome(subscriber: {
  email: string;
  name?: string | null;
}) {
  const htmlContent = generateNewsletterWelcomeEmail({
    name: subscriber.name || undefined,
    email: subscriber.email,
  });

  try {
    await resend.emails.send({
      from: FROM_EMAIL_USER,
      to: subscriber.email,
      subject: 'Bienvenue dans la communauté TANSE ! 🚀',
      html: htmlContent,
    });
    console.log(`✅ Email de bienvenue Newsletter envoyé à ${subscriber.email}`);
  } catch (error) {
    console.error('❌ Erreur envoi email bienvenue newsletter:', error);
    throw error;
  }
}

export { resend };
