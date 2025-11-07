// app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { prisma } from '@/lib/prisma';
import { sendEmail, emailTemplates } from '@/lib/email';

const contactSchema = z.object({
  name: z.string().min(1, 'Le nom est requis'),
  email: z.string().email('Email invalide'),
  phone: z.string().optional(),
  company: z.string().optional(),
  subject: z.string().min(1, 'Le sujet est requis'),
  message: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = contactSchema.parse(body);

    // Save to database
    const contact = await prisma.contact.create({
      data: validatedData,
    });

    // Send confirmation email to user
    try {
      await sendEmail({
        to: validatedData.email,
        subject: 'Votre demande a été reçue - TANSE',
        html: emailTemplates.contactConfirmation(validatedData.name),
        type: 'contact_confirmation',
      });
    } catch (emailError) {
      console.error('Failed to send confirmation email:', emailError);
      // Don't fail the request if email fails
    }

    // Send notification email to TANSE team
    try {
      await sendEmail({
        to: process.env.CONTACT_EMAIL || 'hello@tanse.io',
        subject: `Nouveau contact: ${validatedData.subject} - ${validatedData.name}`,
        html: emailTemplates.contactNotification(
          validatedData.name,
          validatedData.email,
          validatedData.phone || null,
          validatedData.company || null,
          validatedData.subject,
          validatedData.message || null
        ),
        type: 'contact_notification',
      });
    } catch (emailError) {
      console.error('Failed to send notification email:', emailError);
      // Don't fail the request if email fails
    }

    return NextResponse.json({
      success: true,
      message: 'Votre demande a été envoyée avec succès. Nous vous répondrons sous 24h.',
      contactId: contact.id,
    });
  } catch (error) {
    console.error('Contact form error:', error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, error: 'Données invalides', details: error.issues },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: false, error: 'Une erreur est survenue. Veuillez réessayer.' },
      { status: 500 }
    );
  }
}
