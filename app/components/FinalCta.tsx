"use client";

export default function FinalCta() {
  return (
    <section id="final-cta" className="section-guard bg-[#E4E4E4]">
      <div className="content-wrap max-w-7xl mx-auto grid grid-cols-12 gap-8 md:gap-12">
        {/* Texte à gauche */}
        <div className="col-span-12 md:col-span-5 flex flex-col justify-center">
          <p className="text-xs tracking-[.25em] uppercase text-neutral-500 mb-4">
            Dernière étape
          </p>
          <h2 className="text-5xl md:text-6xl font-semibold leading-tight mb-6">
            Vos clients n’attendent que vous.
          </h2>
          <p className="text-neutral-700 text-base md:text-lg leading-relaxed mb-8 max-w-prose">
            Rendez votre offre accessible au moment où l’intention est présente.
            Nous préparons la visibilité locale et facilitons l’action : appel,
            formulaire, visite. Simple, clair, orienté résultats.
          </p>

          <a
            href="#pricing"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#444684] text-white font-medium shadow-lg transition-all duration-200 hover:opacity-90 hover:-translate-y-1 hover:shadow-xl active:translate-y-0 active:shadow-md focus-visible:outline-2 focus-visible:outline-[#444684] focus-visible:outline-offset-2 touch-manipulation min-h-[44px] md:min-h-0"
          >
            Choisir un forfait
          </a>
        </div>

        {/* Animation à droite */}
        <div className="col-span-12 md:col-span-7">
          <div className="rounded-3xl bg-white shadow-[0_25px_80px_-20px_rgba(0,0,0,0.35)] overflow-hidden h-[min(70vh,760px)] min-h-[560px]">
            <spline-viewer
              className="w-full h-full"
              url="https://prod.spline.design/TNjZkjNxUjK9GBGW/scene.splinecode"
              style={{ background: "transparent", display: "block", width: "100%", height: "100%" }}
              aria-label="Animation finale"
            />
          </div>
        </div>
      </div>
    </section>
  );
}