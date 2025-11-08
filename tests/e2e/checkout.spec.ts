import { test, expect } from '@playwright/test';

test.describe('Checkout Flow - SEO+GEO Plan', () => {
  test.beforeEach(async ({ page }) => {
    // Naviguer vers la page de checkout SEO+GEO
    await page.goto('/checkout/seo-geo');
  });

  test('should display checkout page with correct plan information', async ({ page }) => {
    // Vérifier le titre
    await expect(page.locator('h1')).toContainText('SEO + GEO — PME (1 site)');

    // Vérifier le prix
    await expect(page.getByText('1 490,00 €')).toBeVisible();

    // Vérifier les badges de réassurance
    await expect(page.getByText('SLA < 24h')).toBeVisible();
    await expect(page.getByText('Paiement Stripe')).toBeVisible();
    await expect(page.getByText('Onboarding express')).toBeVisible();
  });

  test('should show form validation errors for required fields', async ({ page }) => {
    // Essayer de soumettre le formulaire sans remplir les champs
    await page.getByRole('button', { name: /payer et réserver/i }).click();

    // Vérifier que les champs requis sont marqués (validation HTML5)
    const emailInput = page.getByLabel(/e-mail/i);
    await expect(emailInput).toBeFocused();
  });

  test('should fill contact form successfully', async ({ page }) => {
    // Remplir les coordonnées
    await page.getByLabel(/prénom/i).fill('Jean');
    await page.getByLabel(/nom/i).fill('Dupont');
    await page.getByLabel(/e-mail/i).fill('jean.dupont@example.com');
    await page.getByLabel(/téléphone/i).fill('+33612345678');

    // Vérifier que les valeurs sont bien enregistrées
    await expect(page.getByLabel(/prénom/i)).toHaveValue('Jean');
    await expect(page.getByLabel(/e-mail/i)).toHaveValue('jean.dupont@example.com');
  });

  test('should fill billing information', async ({ page }) => {
    // Remplir la facturation
    await page.getByLabel(/société/i).fill('ACME Corp');
    await page.getByLabel(/siren/i).fill('123456789');
    await page.getByLabel(/adresse/i).fill('123 Rue de la Paix');
    await page.getByLabel(/ville/i).fill('Paris');
    await page.getByLabel(/code postal/i).fill('75001');

    // Vérifier les valeurs
    await expect(page.getByLabel(/société/i)).toHaveValue('ACME Corp');
    await expect(page.getByLabel(/ville/i)).toHaveValue('Paris');
  });

  test('should toggle add-ons', async ({ page }) => {
    // Trouver et cliquer sur un add-on
    const pageLocaleCheckbox = page.getByRole('checkbox', { name: /page locale supplémentaire/i });

    // Vérifier que le checkbox n'est pas coché
    await expect(pageLocaleCheckbox).not.toBeChecked();

    // Cocher le checkbox
    await pageLocaleCheckbox.check();
    await expect(pageLocaleCheckbox).toBeChecked();

    // Le total devrait avoir augmenté
    await expect(page.getByText(/450,00 €/)).toBeVisible();

    // Décocher
    await pageLocaleCheckbox.uncheck();
    await expect(pageLocaleCheckbox).not.toBeChecked();
  });

  test('should update total price with add-ons', async ({ page }) => {
    // Prix de base
    await expect(page.getByText('1 490,00 €')).toBeVisible();

    // Ajouter un add-on (Page locale 450€)
    await page.getByRole('checkbox', { name: /page locale supplémentaire/i }).check();

    // Total devrait être 1490 + 450 = 1940€
    await expect(page.getByText('1 940,00 €')).toBeVisible();
  });

  test('should select appointment slot', async ({ page }) => {
    // Sélectionner une date (tomorrow)
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowStr = tomorrow.toISOString().split('T')[0];

    await page.getByLabel(/date/i).fill(tomorrowStr);

    // Sélectionner un horaire
    await page.getByLabel(/heure/i).selectOption('14:00');

    // Vérifier les valeurs
    await expect(page.getByLabel(/date/i)).toHaveValue(tomorrowStr);
    await expect(page.getByLabel(/heure/i)).toHaveValue('14:00');
  });

  test('should show coupon field', async ({ page }) => {
    const couponInput = page.getByLabel(/code promo/i);
    await expect(couponInput).toBeVisible();

    // Remplir un code promo
    await couponInput.fill('TANSE10');
    await expect(couponInput).toHaveValue('TANSE10');
  });

  test('should display FAQs', async ({ page }) => {
    await expect(page.getByText(/quand démarrez-vous/i)).toBeVisible();
    await expect(page.getByText(/engagement/i)).toBeVisible();
  });

  test('should have accessible navigation links', async ({ page }) => {
    // Lien retour aux forfaits
    const backLink = page.getByRole('link', { name: /retour aux forfaits/i });
    await expect(backLink).toBeVisible();
    await expect(backLink).toHaveAttribute('href', '/#forfaits');

    // Lien changer de plan
    const changePlanLink = page.getByRole('link', { name: /changer de plan/i });
    await expect(changePlanLink).toBeVisible();
  });
});

test.describe('Checkout Flow - Grand Groupes (Quote)', () => {
  test('should display quote message for grand-groupes plan', async ({ page }) => {
    await page.goto('/checkout/grand-groupes');

    // Vérifier que c'est un plan sur devis
    await expect(page.getByText(/sur devis/i)).toBeVisible();
    await expect(page.getByRole('button', { name: /parler à un expert/i })).toBeVisible();

    // Pas de prix affiché
    await expect(page.getByText(/1 490,00 €/i)).not.toBeVisible();
  });
});

test.describe('Checkout Mobile', () => {
  test.use({ viewport: { width: 375, height: 667 } });

  test('should display mobile sticky bar', async ({ page }) => {
    await page.goto('/checkout/seo-geo');

    // Vérifier la barre sticky mobile
    await expect(page.getByText(/total : 1 490,00 € ht/i)).toBeVisible();
  });
});
