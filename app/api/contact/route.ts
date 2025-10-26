import { NextRequest, NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import { existsSync } from "fs";
import path from "path";
import { contactSchema, formatZodErrors } from "@/lib/validations";

type ContactSubmission = {
  nom: string;
  email: string;
  telephone?: string;
  entreprise?: string;
  sujet: string;
  message?: string;
  submittedAt: string;
  ip?: string;
};

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Validation avec Zod
    const validation = contactSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        {
          error: "Données invalides",
          details: formatZodErrors(validation.error.issues),
        },
        { status: 400 }
      );
    }

    // Données validées et type-safe
    const { nom, email, telephone, entreprise, sujet, message } = validation.data;

    const submission: ContactSubmission = {
      nom,
      email,
      telephone: telephone || "",
      entreprise: entreprise || "",
      sujet,
      message: message || "",
      submittedAt: new Date().toISOString(),
      ip: req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "unknown",
    };

    // Stocker dans un fichier JSON (data/contacts/)
    // Dans un environnement de production, utilisez une vraie base de données
    const dataDir = path.join(process.cwd(), "data", "contacts");

    // Créer le dossier s'il n'existe pas
    if (!existsSync(dataDir)) {
      await mkdir(dataDir, { recursive: true });
    }

    // Nom du fichier basé sur la date et timestamp
    const filename = `contact_${Date.now()}_${Math.random().toString(36).substring(7)}.json`;
    const filepath = path.join(dataDir, filename);

    // Écrire les données
    await writeFile(filepath, JSON.stringify(submission, null, 2), "utf-8");

    // TODO: Envoyer un email de notification
    // await sendEmailNotification(submission);

    // TODO: Intégrer avec un CRM (HubSpot, Salesforce, etc.)
    // await sendToCRM(submission);

    return NextResponse.json({
      success: true,
      message: "Votre message a été envoyé avec succès. Nous vous recontacterons sous 24h.",
    });
  } catch (error: any) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Une erreur s'est produite. Veuillez réessayer." },
      { status: 500 }
    );
  }
}

// Pour récupérer toutes les soumissions (protégé en production)
export async function GET(req: NextRequest) {
  // Dans un environnement de production, ajoutez de l'authentification ici
  const apiKey = req.headers.get("x-api-key");

  if (apiKey !== process.env.ADMIN_API_KEY) {
    return NextResponse.json(
      { error: "Non autorisé" },
      { status: 401 }
    );
  }

  try {
    const dataDir = path.join(process.cwd(), "data", "contacts");

    if (!existsSync(dataDir)) {
      return NextResponse.json({ submissions: [] });
    }

    const { readdir, readFile } = await import("fs/promises");
    const files = await readdir(dataDir);

    const submissions = await Promise.all(
      files
        .filter((file) => file.endsWith(".json"))
        .map(async (file) => {
          const content = await readFile(path.join(dataDir, file), "utf-8");
          return JSON.parse(content);
        })
    );

    // Trier par date décroissante
    submissions.sort((a, b) =>
      new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime()
    );

    return NextResponse.json({ submissions });
  } catch (error) {
    console.error("Error fetching submissions:", error);
    return NextResponse.json(
      { error: "Erreur de récupération des données" },
      { status: 500 }
    );
  }
}
