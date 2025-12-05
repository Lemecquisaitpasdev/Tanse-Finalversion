'use client';

/**
 * Composant Calendly pour TANSE
 * Utilise l'iframe officielle Calendly (méthode la plus fiable)
 */
export default function CalendlyEmbed() {
  return (
    <div className="relative w-full bg-white rounded-2xl shadow-xl overflow-hidden border border-neutral-200/50">
      <iframe
        src="https://calendly.com/contact-tanse/30min?embed_domain=tanse.fr&embed_type=Inline&primary_color=444684"
        width="100%"
        height="700"
        frameBorder="0"
        title="Réserver un appel avec TANSE"
        className="calendly-iframe"
        style={{ minHeight: '700px' }}
      />
    </div>
  );
}
