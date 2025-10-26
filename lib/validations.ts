import { z } from "zod";

// ================================
// CONTACT FORM VALIDATION
// ================================

export const contactSchema = z.object({
  nom: z
    .string()
    .min(2, "Le nom doit contenir au moins 2 caractères")
    .max(100, "Le nom ne peut pas dépasser 100 caractères")
    .trim(),

  email: z
    .string()
    .email("Adresse email invalide")
    .toLowerCase()
    .trim(),

  telephone: z
    .string()
    .optional()
    .transform((val) => val?.trim() || undefined),

  entreprise: z
    .string()
    .max(200, "Le nom de l'entreprise ne peut pas dépasser 200 caractères")
    .optional()
    .transform((val) => val?.trim() || undefined),

  sujet: z.enum(["rdv", "devis", "question"], {
    message: "Sujet invalide. Choisissez parmi: rdv, devis, question",
  }),

  message: z
    .string()
    .max(2000, "Le message ne peut pas dépasser 2000 caractères")
    .optional()
    .transform((val) => val?.trim() || undefined),
});

export type ContactFormData = z.infer<typeof contactSchema>;

// ================================
// CHECKOUT VALIDATION
// ================================

export const checkoutSchema = z.object({
  plan: z.enum(["seo-geo", "pack-complet", "seo-geo-site"], {
    message: "Plan invalide",
  }),

  contact: z.object({
    email: z
      .string()
      .email("Adresse email invalide")
      .toLowerCase()
      .trim(),

    firstname: z
      .string()
      .min(2, "Le prénom doit contenir au moins 2 caractères")
      .max(100, "Le prénom ne peut pas dépasser 100 caractères")
      .trim(),

    lastname: z
      .string()
      .min(2, "Le nom doit contenir au moins 2 caractères")
      .max(100, "Le nom ne peut pas dépasser 100 caractères")
      .trim(),

    phone: z
      .string()
      .optional()
      .transform((val) => val?.trim() || undefined),
  }),

  billing: z
    .object({
      company: z
        .string()
        .max(200, "Le nom de l'entreprise ne peut pas dépasser 200 caractères")
        .optional()
        .transform((val) => val?.trim() || undefined),

      siren: z
        .string()
        .regex(/^\d{9}$/, "Le numéro SIREN doit contenir exactement 9 chiffres")
        .optional()
        .or(z.literal(""))
        .transform((val) => (val === "" ? undefined : val)),
    })
    .optional(),

  slot: z
    .object({
      date: z.string().min(1, "Date requise"),
      time: z.string().min(1, "Heure requise"),
    })
    .optional(),

  coupon: z
    .string()
    .max(50, "Le code promo ne peut pas dépasser 50 caractères")
    .optional()
    .transform((val) => val?.trim() || undefined),

  addOns: z
    .array(
      z.enum(["page-locale", "citations-10", "booster-avis", "formation"], {
        message: "Add-on invalide",
      })
    )
    .optional()
    .default([]),
});

export type CheckoutFormData = z.infer<typeof checkoutSchema>;

// ================================
// UTILITY: Safe Parse Helper
// ================================

/**
 * Helper function to safely parse and validate data
 * Returns a tuple: [success: boolean, data | errors]
 */
export function safeValidate<T>(
  schema: z.ZodSchema<T>,
  data: unknown
): [true, T] | [false, z.ZodIssue[]] {
  const result = schema.safeParse(data);

  if (result.success) {
    return [true, result.data];
  } else {
    return [false, result.error.issues];
  }
}

/**
 * Format Zod errors into user-friendly messages
 */
export function formatZodErrors(errors: z.ZodIssue[]): Record<string, string> {
  const formatted: Record<string, string> = {};

  errors.forEach((error) => {
    const path = error.path.join(".");
    formatted[path] = error.message;
  });

  return formatted;
}
