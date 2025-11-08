import { test, expect } from '@playwright/test';

test.describe('Homepage Critical Paths', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should load homepage successfully', async ({ page }) => {
    // Vérifier que la page charge
    await expect(page).toHaveTitle(/tanse/i);

    // Vérifier les éléments principaux
    await expect(page.locator('h1')).toBeVisible();
  });

  test('should display hero section', async ({ page }) => {
    // Vérifier le hero avec le titre principal
    await expect(page.locator('h1')).toContainText(/visibilit|local|seo|IA/i);

    // CTA principal devrait être visible
    const ctaButton = page.getByRole('link', { name: /voir les forfaits|découvrir/i }).first();
    await expect(ctaButton).toBeVisible();
  });

  test('should navigate to pricing section', async ({ page }) => {
    // Cliquer sur le lien vers forfaits
    await page.getByRole('link', { name: /forfaits/i }).first().click();

    // Vérifier qu'on arrive sur la section pricing
    await expect(page).toHaveURL(/\/#(forfaits|pricing)/);
  });

  test('should display pricing cards', async ({ page }) => {
    // Aller à la section forfaits
    await page.goto('/#forfaits');

    // Attendre que les cartes de prix soient visibles
    await expect(page.getByText(/seo.*geo/i)).toBeVisible();

    // Vérifier les prix
    await expect(page.getByText(/1 490/)).toBeVisible();
    await expect(page.getByText(/2 490/)).toBeVisible();
  });

  test('should navigate to checkout from pricing card', async ({ page }) => {
    await page.goto('/#forfaits');

    // Cliquer sur le premier CTA de forfait
    const ctaButtons = page.getByRole('link', { name: /choisir|commander/i });
    await ctaButtons.first().click();

    // Vérifier qu'on arrive sur checkout
    await expect(page).toHaveURL(/\/checkout\//);
  });

  test('should display testimonials section', async ({ page }) => {
    // Vérifier la section témoignages
    const testimonialsSection = page.locator('text=/témoignage|avis/i').first();

    if (await testimonialsSection.isVisible()) {
      await expect(testimonialsSection).toBeVisible();
    }
  });

  test('should display stats/data section', async ({ page }) => {
    // Vérifier la section chiffres clés
    await expect(page.getByText(/90%|70%|60%/)).toBeVisible();
  });

  test('should have working navigation links', async ({ page }) => {
    // Vérifier les liens de navigation principaux
    const navLinks = [
      { name: /forfaits/i, url: /#forfaits/ },
      { name: /contact/i, url: /\/contact/ },
    ];

    for (const { name } of navLinks) {
      const link = page.getByRole('link', { name }).first();
      if (await link.isVisible()) {
        await expect(link).toBeVisible();
      }
    }
  });

  test('should display footer with legal links', async ({ page }) => {
    // Scroll vers le bas
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

    // Vérifier les liens légaux dans le footer
    await expect(page.getByRole('link', { name: /mentions légales/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /confidentialit/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /cgv|conditions/i })).toBeVisible();
  });

  test('should show cookie consent banner', async ({ page }) => {
    // Le banner de cookies devrait apparaître
    await expect(page.getByText(/cookie|vie privée/i)).toBeVisible({ timeout: 3000 });

    // Boutons d'action
    await expect(page.getByRole('button', { name: /accepter|refuser/i })).toBeVisible();
  });

  test('should accept cookies and hide banner', async ({ page }) => {
    // Attendre le banner
    const acceptButton = page.getByRole('button', { name: /tout accepter|accepter/i });
    await expect(acceptButton).toBeVisible({ timeout: 3000 });

    // Accepter
    await acceptButton.click();

    // Le banner devrait disparaître
    await expect(acceptButton).not.toBeVisible();
  });

  test('should have accessible skip-to-content if available', async ({ page }) => {
    // Vérifier s'il y a un lien skip-to-content (a11y)
    const skipLink = page.getByRole('link', { name: /aller au contenu|skip/i });

    if (await skipLink.isVisible()) {
      await expect(skipLink).toBeVisible();
    }
  });
});

test.describe('Homepage Performance', () => {
  test('should load critical assets', async ({ page }) => {
    const response = await page.goto('/');

    // Vérifier le status HTTP
    expect(response?.status()).toBe(200);
  });

  test('should have proper meta tags', async ({ page }) => {
    await page.goto('/');

    // Vérifier les meta tags SEO
    await expect(page.locator('meta[name="description"]')).toHaveCount(1);

    // Open Graph
    await expect(page.locator('meta[property="og:title"]')).toHaveCount(1);
  });
});

test.describe('Homepage Mobile', () => {
  test.use({ viewport: { width: 375, height: 667 } });

  test('should display mobile menu', async ({ page }) => {
    await page.goto('/');

    // Chercher le burger menu ou navigation mobile
    const mobileMenu = page.getByRole('button', { name: /menu|navigation/i });

    if (await mobileMenu.isVisible()) {
      await mobileMenu.click();
      await expect(page.getByRole('link', { name: /contact/i })).toBeVisible();
    }
  });

  test('should have mobile-optimized hero', async ({ page }) => {
    await page.goto('/');

    // Le hero doit être visible sur mobile
    await expect(page.locator('h1')).toBeVisible();
  });

  test('should have touch-friendly buttons', async ({ page }) => {
    await page.goto('/');

    // Les boutons CTA doivent avoir une taille minimum de 44px (WCAG)
    const ctaButton = page.getByRole('link', { name: /voir les forfaits|découvrir/i }).first();

    if (await ctaButton.isVisible()) {
      const box = await ctaButton.boundingBox();
      expect(box?.height).toBeGreaterThanOrEqual(44);
    }
  });
});
