// lib/email.ts
import { Resend } from 'resend';
import { prisma } from './prisma';

const resend = new Resend(process.env.RESEND_API_KEY);

interface SendEmailParams {
  to: string;
  subject: string;
  html: string;
  type: string;
}

export async function sendEmail({ to, subject, html, type }: SendEmailParams) {
  try {
    const { data, error } = await resend.emails.send({
      from: process.env.FROM_EMAIL || 'noreply@tanse.io',
      to,
      subject,
      html,
    });

    // Log the email
    await prisma.emailLog.create({
      data: {
        to,
        subject,
        type,
        status: error ? 'failed' : 'sent',
        error: error?.message || null,
      },
    });

    if (error) {
      console.error('Email send error:', error);
      throw new Error(error.message);
    }

    return data;
  } catch (error: any) {
    console.error('Email error:', error);
    throw error;
  }
}

// Email templates
export const emailTemplates = {
  contactConfirmation: (name: string) => `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #444684; color: white; padding: 30px 20px; text-align: center; border-radius: 8px 8px 0 0; }
          .content { background: #f9f9f9; padding: 30px 20px; }
          .footer { background: #e4e4e4; padding: 20px; text-align: center; font-size: 12px; color: #666; border-radius: 0 0 8px 8px; }
          .button { display: inline-block; background: #444684; color: white; padding: 12px 30px; text-decoration: none; border-radius: 25px; margin: 20px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🎉 Merci ${name} !</h1>
          </div>
          <div class="content">
            <p>Nous avons bien reçu votre demande de contact.</p>
            <p>Notre équipe vous répondra sous <strong>24h ouvrées</strong>.</p>
            <p>En attendant, n'hésitez pas à consulter nos ressources ou à nous écrire directement à <a href="mailto:hello@tanse.io">hello@tanse.io</a>.</p>
          </div>
          <div class="footer">
            <p>TANSE — Visibilité locale & GEO</p>
            <p><a href="https://tanse.io">tanse.io</a></p>
          </div>
        </div>
      </body>
    </html>
  `,

  contactNotification: (name: string, email: string, phone: string | null, company: string | null, subject: string, message: string | null) => `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #444684; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
          .content { background: #fff; padding: 20px; border: 1px solid #e0e0e0; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #444684; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>📬 Nouveau contact reçu</h2>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">Nom :</div>
              <div>${name}</div>
            </div>
            <div class="field">
              <div class="label">Email :</div>
              <div><a href="mailto:${email}">${email}</a></div>
            </div>
            ${phone ? `
            <div class="field">
              <div class="label">Téléphone :</div>
              <div><a href="tel:${phone}">${phone}</a></div>
            </div>
            ` : ''}
            ${company ? `
            <div class="field">
              <div class="label">Entreprise :</div>
              <div>${company}</div>
            </div>
            ` : ''}
            <div class="field">
              <div class="label">Sujet :</div>
              <div>${subject}</div>
            </div>
            ${message ? `
            <div class="field">
              <div class="label">Message :</div>
              <div>${message}</div>
            </div>
            ` : ''}
          </div>
        </div>
      </body>
    </html>
  `,

  orderConfirmation: (firstname: string, lastname: string, plan: string, total: number, slotDate?: string, slotTime?: string) => `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #444684; color: white; padding: 30px 20px; text-align: center; border-radius: 8px 8px 0 0; }
          .content { background: #f9f9f9; padding: 30px 20px; }
          .footer { background: #e4e4e4; padding: 20px; text-align: center; font-size: 12px; color: #666; border-radius: 0 0 8px 8px; }
          .highlight { background: #fff; padding: 20px; border-left: 4px solid #444684; margin: 20px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>✅ Commande confirmée !</h1>
          </div>
          <div class="content">
            <p>Bonjour ${firstname} ${lastname},</p>
            <p>Merci d'avoir choisi TANSE ! Votre commande a été confirmée avec succès.</p>

            <div class="highlight">
              <p><strong>Plan :</strong> ${plan}</p>
              <p><strong>Total :</strong> ${new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(total)} HT</p>
              ${slotDate && slotTime ? `
              <p><strong>Rendez-vous :</strong> ${slotDate} à ${slotTime}</p>
              ` : ''}
            </div>

            <p>Notre équipe prendra contact avec vous sous <strong>24-48h</strong> pour lancer le projet.</p>
            <p>Pour toute question : <a href="mailto:hello@tanse.io">hello@tanse.io</a></p>
          </div>
          <div class="footer">
            <p>TANSE — Visibilité locale & GEO</p>
            <p><a href="https://tanse.io">tanse.io</a></p>
          </div>
        </div>
      </body>
    </html>
  `,
};
