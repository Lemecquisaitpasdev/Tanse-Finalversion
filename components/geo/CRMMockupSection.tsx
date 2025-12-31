const CRMMockupSection = () => {
  return (
    <section className="py-24 px-6 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display italic text-4xl md:text-5xl lg:text-6xl text-center mb-4 leading-tight">
          La réalité de vos<br />clients en 2025.
        </h2>

        <p className="text-center text-lg text-foreground/70 mb-12 max-w-3xl mx-auto">
          Votre client ne va plus sur Google taper 'meilleur CRM'. Il a une conversation avec ChatGPT, explique son contexte précis, et reçoit 2-3 recommandations personnalisées. Question : est-ce que vous êtes dans ces recommandations ?
        </p>

        {/* Browser Mockup */}
        <div className="bg-background rounded-2xl shadow-2xl overflow-hidden border border-border">
          {/* Browser Chrome */}
          <div className="h-12 bg-muted flex items-center px-4 gap-3 border-b border-border">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
            <div className="flex-1 mx-4 bg-card rounded-lg px-3 py-1.5 text-sm text-muted-foreground border border-border">
              chat.openai.com
            </div>
          </div>

          {/* Chat Content */}
          <div className="p-8 min-h-[400px] space-y-6">
            {/* User Prompt */}
            <div className="flex justify-end">
              <div className="bg-primary text-primary-foreground rounded-2xl rounded-tr-sm px-5 py-3 max-w-2xl">
                <p className="font-mono text-sm leading-relaxed">
                  Je cherche une solution de CRM pour mon agence de 15 personnes, budget ~500€/mois, besoin de bien intégrer avec Gmail
                </p>
              </div>
            </div>

            {/* ChatGPT Response */}
            <div className="flex justify-start">
              <div className="bg-muted rounded-2xl rounded-tl-sm px-5 py-4 max-w-3xl">
                <p className="font-mono text-sm text-foreground mb-4 leading-relaxed">
                  Voici 3 options adaptées à votre besoin :
                </p>
                <div className="space-y-3 text-sm">
                  <div className="border-l-4 border-primary pl-3">
                    <p className="font-mono font-bold">1. [Votre Concurrent #1]</p>
                    <p className="font-mono text-muted-foreground">Intégration Gmail native, tarif équipe à 450€/mois...</p>
                  </div>
                  <div className="border-l-4 border-border pl-3">
                    <p className="font-mono font-bold">2. [Votre Concurrent #2]</p>
                    <p className="font-mono text-muted-foreground">Solution complète avec synchronisation Gmail...</p>
                  </div>
                  <div className="border-l-4 border-border pl-3">
                    <p className="font-mono font-bold">3. [Votre Concurrent #3]</p>
                    <p className="font-mono text-muted-foreground">Option économique avec bon rapport qualité/prix...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <p className="text-center text-base text-muted-foreground mt-8 max-w-2xl mx-auto">
          C'est ça le nouveau parcours d'achat. Conversationnel, contextuel, instantané. <span className="font-semibold text-foreground">Si les LLMs ne vous connaissent pas, vous n'existez pas.</span>
        </p>
      </div>
    </section>
  );
};

export default CRMMockupSection;
