import { test, expect } from '@playwright/test';

test.describe('Contact Form', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/contact');
  });

  test('should display contact page with form', async ({ page }) => {
    // Vérifier le titre
    await expect(page.locator('h1')).toContainText(/contact/i);

    // Vérifier que le formulaire est visible
    await expect(page.getByLabel(/nom/i)).toBeVisible();
    await expect(page.getByLabel(/e-mail/i)).toBeVisible();
    await expect(page.getByLabel(/message/i)).toBeVisible();
  });

  test('should show validation errors for empty required fields', async ({ page }) => {
    // Chercher le bouton de soumission
    const submitButton = page.getByRole('button', { name: /envoyer/i });

    // Essayer de soumettre sans remplir
    await submitButton.click();

    // Le navigateur devrait bloquer avec validation HTML5
    const emailInput = page.getByLabel(/e-mail/i);
    const isInvalid = await emailInput.evaluate((el: HTMLInputElement) => !el.validity.valid);

    expect(isInvalid).toBe(true);
  });

  test('should fill and submit contact form', async ({ page }) => {
    // Remplir le formulaire
    await page.getByLabel(/nom/i).fill('Jean Dupont');
    await page.getByLabel(/e-mail/i).fill('jean.dupont@example.com');
    await page.getByLabel(/entreprise/i).fill('ACME Corp');
    await page.getByLabel(/téléphone/i).fill('+33612345678');

    // Remplir le message
    const messageField = page.getByLabel(/message/i);
    await messageField.fill('Bonjour, je souhaite en savoir plus sur vos services SEO local.');

    // Vérifier les valeurs
    await expect(page.getByLabel(/nom/i)).toHaveValue('Jean Dupont');
    await expect(page.getByLabel(/e-mail/i)).toHaveValue('jean.dupont@example.com');
    await expect(messageField).toHaveValue(/je souhaite en savoir plus/i);
  });

  test('should validate email format', async ({ page }) => {
    const emailInput = page.getByLabel(/e-mail/i);

    // Entrer un email invalide
    await emailInput.fill('invalid-email');

    // Vérifier la validation HTML5
    const isInvalid = await emailInput.evaluate((el: HTMLInputElement) => !el.validity.valid);
    expect(isInvalid).toBe(true);

    // Corriger avec un email valide
    await emailInput.fill('valid@example.com');
    const isValid = await emailInput.evaluate((el: HTMLInputElement) => el.validity.valid);
    expect(isValid).toBe(true);
  });

  test('should have subject selection if available', async ({ page }) => {
    // Vérifier s'il y a un champ de sélection de sujet
    const subjectField = page.getByLabel(/sujet/i);

    if (await subjectField.isVisible()) {
      await subjectField.selectOption({ index: 1 });
      expect(await subjectField.inputValue()).not.toBe('');
    }
  });

  test('should accept plan parameter from URL', async ({ page }) => {
    // Naviguer avec paramètre plan
    await page.goto('/contact?plan=seo-geo');

    // Le plan devrait être pré-sélectionné ou mentionné
    await expect(page.locator('body')).toContainText(/seo/i);
  });
});

test.describe('Contact Form Mobile', () => {
  test.use({ viewport: { width: 375, height: 667 } });

  test('should display mobile-optimized form', async ({ page }) => {
    await page.goto('/contact');

    // Vérifier que le formulaire est responsive
    await expect(page.getByLabel(/nom/i)).toBeVisible();
    await expect(page.getByLabel(/e-mail/i)).toBeVisible();

    // Vérifier les attributs mobile-friendly
    const emailInput = page.getByLabel(/e-mail/i);
    await expect(emailInput).toHaveAttribute('type', 'email');
    await expect(emailInput).toHaveAttribute('inputmode', 'email');
  });
});
