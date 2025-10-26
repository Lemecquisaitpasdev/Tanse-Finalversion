import { ImageResponse } from '@vercel/og';
import { logger } from '@/lib/logger';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

/**
 * API Route pour générer des images Open Graph dynamiques
 * Usage: /api/og?title=Mon+Titre&subtitle=Sous-titre
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    // Paramètres personnalisables
    const title = searchParams.get('title') || 'TANSE — Visibilité locale & SEO';
    const subtitle = searchParams.get('subtitle') || 'Optimisation locale SEO + GEO pour PME et grands groupes';
    const price = searchParams.get('price') || null;
    const cta = searchParams.get('cta') || 'www.tanse.fr';

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            background: 'linear-gradient(135deg, #FFE7C2 0%, #E7E9FF 50%, #FAFAFA 100%)',
            padding: '80px',
            fontFamily: 'system-ui, sans-serif',
          }}
        >
          {/* Header avec logo */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
            }}
          >
            <div
              style={{
                width: '80px',
                height: '80px',
                borderRadius: '20px',
                background: '#444684',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '40px',
                fontWeight: 'bold',
                color: 'white',
              }}
            >
              T
            </div>
            <div
              style={{
                fontSize: '32px',
                fontWeight: '600',
                color: '#444684',
                letterSpacing: '0.05em',
              }}
            >
              TANSE
            </div>
          </div>

          {/* Contenu principal */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '30px',
              maxWidth: '900px',
            }}
          >
            <h1
              style={{
                fontSize: '72px',
                fontWeight: '700',
                color: '#030712',
                lineHeight: '1.1',
                margin: 0,
              }}
            >
              {title}
            </h1>

            <p
              style={{
                fontSize: '36px',
                color: '#52525b',
                lineHeight: '1.4',
                margin: 0,
              }}
            >
              {subtitle}
            </p>

            {/* Points clés */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                fontSize: '28px',
                color: '#444684',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span>✓</span>
                <span>Fiche Google Business optimisée</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span>✓</span>
                <span>Citations locales et NAP</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span>✓</span>
                <span>Site web orienté conversion</span>
              </div>
            </div>
          </div>

          {/* Footer avec prix et CTA */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
            }}
          >
            {price && (
              <div
                style={{
                  fontSize: '40px',
                  fontWeight: '600',
                  color: '#444684',
                }}
              >
                À partir de {price}
              </div>
            )}
            <div
              style={{
                fontSize: '32px',
                color: '#71717a',
                fontWeight: '500',
                marginLeft: 'auto',
              }}
            >
              {cta}
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (error) {
    logger.error({ err: error }, 'Failed to generate OG image');

    // Fallback en cas d'erreur
    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#444684',
            fontSize: 60,
            color: 'white',
          }}
        >
          TANSE
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  }
}
