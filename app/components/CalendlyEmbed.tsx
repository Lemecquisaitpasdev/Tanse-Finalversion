'use client';

import { Calendar, Clock, Video } from 'lucide-react';

/**
 * Composant Calendly pour TANSE
 * Utilise l'iframe officielle Calendly avec UI améliorée
 */
export default function CalendlyEmbed() {
  return (
    <div className="relative w-full">
      {/* Header personnalisé TANSE */}
      <div className="relative overflow-hidden rounded-t-2xl bg-gradient-to-br from-[#444684] via-[#524e7d] to-[#6b5d99] p-6 border border-[#444684]/20">
        {/* Decorative gradient orbs */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full blur-xl" />

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2.5 rounded-xl bg-white/20 backdrop-blur-sm shadow-lg">
              <Calendar className="h-5 w-5 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white">
              Planifier un appel avec TANSE
            </h3>
          </div>

          <p className="text-white/90 text-sm leading-relaxed mb-4">
            Discutons de vos objectifs GEO et de la stratégie adaptée à votre entreprise
          </p>

          {/* Quick Info Pills */}
          <div className="flex flex-wrap gap-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
              <Clock className="h-3.5 w-3.5 text-white" />
              <span className="text-xs font-medium text-white">30 minutes</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
              <Video className="h-3.5 w-3.5 text-white" />
              <span className="text-xs font-medium text-white">Visioconférence</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
              <span className="text-xs font-medium text-white">100% Gratuit</span>
            </div>
          </div>
        </div>
      </div>

      {/* Calendly Iframe - Seamless integration */}
      <div className="relative bg-white rounded-b-2xl shadow-xl overflow-hidden border-x border-b border-neutral-200/50">
        {/* Subtle gradient overlay at top for smooth transition */}
        <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-[#444684]/5 to-transparent pointer-events-none z-10" />

        <iframe
          src="https://calendly.com/contact-tanse/30min?embed_domain=tanse.fr&embed_type=Inline&primary_color=444684&hide_event_type_details=1"
          width="100%"
          height="700"
          frameBorder="0"
          title="Réserver un appel avec TANSE"
          className="calendly-iframe"
          style={{ minHeight: '700px' }}
        />
      </div>

      {/* Bottom info bar */}
      <div className="mt-4 p-4 rounded-xl bg-gradient-to-r from-blue-50 via-purple-50 to-blue-50 border border-[#444684]/10">
        <p className="text-xs text-neutral-600 text-center leading-relaxed">
          <span className="font-semibold text-[#444684]">Réponse garantie sous 24h</span> ·
          Vos données sont protégées et conformes RGPD ·
          Aucun engagement requis
        </p>
      </div>
    </div>
  );
}
