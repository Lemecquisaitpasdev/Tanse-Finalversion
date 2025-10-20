"use client";

import "@splinetool/viewer"; // enregistre le web-component <spline-viewer>
import SectionFrame from "./SectionFrame";

const BRAIN_SCENE_URL =
  process.env.NEXT_PUBLIC_BRAIN_URL ||
  "https://prod.spline.design/XSkv44gM1WnjUqWh/scene.splinecode";

const STATS = [
  { value: "+212%", label: "recherches via IA en 2025" },
  { value: "70%", label: "des recherches locales via assistants" },
  { value: "60%", label: "plus de confiance pour une recommandation IA" },
  { value: "+48%", label: "taux de conversion moyen après adaptation" },
];

export default function BrainReflexes() {
  return (
    <SectionFrame id="reflexes" className="bg-[#E4E4E4]">
      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* Texte */}
          <div>
            <p className="text-xs tracking-[0.25em] text-neutral-500 mb-4">
              CHANGEMENT DE COMPORTEMENT
            </p>

            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
              Les réflexes changent.
            </h2>

            <div className="space-y-4 text-neutral-700 leading-relaxed max-w-xl">
              <p>
                Autrefois, vos clients <strong className="text-[#444684]">cherchaient</strong> — ils
                tapaient des mots-clés, comparaient et cliquaient. Aujourd’hui,
                pour la première fois dans l’histoire du web, la part de
                recherches via navigateur a nettement diminué. En{" "}
                <strong className="text-[#444684]">2025</strong>, ce mouvement s’est
                accéléré. Les consommateurs{" "}
                <strong className="text-[#444684]">posent des questions à une IA</strong> et obtiennent une réponse unique
                souvent suffisante pour agir.
              </p>

              <p>
                En <strong className="text-[#444684]">2025</strong>, plus de{" "}
                <strong className="text-[#444684]">70 %</strong> des recherches locales passent par
                des assistants conversationnels. Les utilisateurs ne veulent plus
                « naviguer ». Ils veulent comprendre et décider immédiatement.
              </p>

              <p>
                Les moteurs n’affichent plus seulement des liens. Ils interprètent
                l’intention, filtrent les signaux de confiance et{" "}
                <strong className="text-[#444684]">recommandent</strong> ce qui paraît le plus
                fiable. La confiance s’est déplacée{" "}
                <strong className="text-[#444684]">du navigateur vers la réponse</strong>. Les
                études montrent qu’un utilisateur accorde environ{" "}
                <strong className="text-[#444684]">60 %</strong> de confiance en plus à une
                recommandation d’un assistant (ex. ChatGPT) qu’à un simple lien.
              </p>

              <p>
                Ce changement impacte la visibilité mais surtout la conversion et
                le chiffre d’affaires. Les entreprises qui adaptent leur présence
                au langage des IA constatent des gains mesurables en trafic
                qualifié, en conversions et en revenus.
              </p>

              <p>
                <strong className="text-[#444684]">TANSE</strong> structure votre visibilité pour
                qu’elle soit comprise par les intelligences conversationnelles et
                choisie par les humains.
              </p>
            </div>

            {/* Stat cards */}
            <div className="mt-8 grid grid-cols-2 gap-4 max-w-xl">
              {STATS.map((s) => (
                <div
                  key={s.value}
                  className="relative rounded-2xl bg-white p-4 shadow-md transition-transform transform hover:-translate-y-1 border border-transparent"
                  style={{ boxShadow: "0 8px 28px rgba(3,7,18,0.06)" }}
                >
                  <div className="flex items-center gap-3">
                    <div className="text-lg font-bold" style={{ color: "#444684" }}>
                      {s.value}
                    </div>
                    <div className="text-xs text-neutral-600">{s.label}</div>
                  </div>

                  <div
                    aria-hidden
                    className="absolute -right-6 -top-6 w-20 h-20 rounded-full pointer-events-none"
                    style={{
                      background:
                        "radial-gradient(circle at 30% 30%, rgba(68,70,132,0.06), transparent 40%)",
                      filter: "blur(10px)",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Animation */}
          <div className="relative flex items-center justify-center">
            <spline-viewer
              className="block w-full h-[360px] md:h-[520px] lg:h-[640px] rounded-2xl"
              url={BRAIN_SCENE_URL}
              style={{ background: "transparent", display: "block", width: "100%", height: "100%" }}
              aria-label="Animation cerveau"
            />
          </div>
        </div>
      </div>
    </SectionFrame>
  );
}