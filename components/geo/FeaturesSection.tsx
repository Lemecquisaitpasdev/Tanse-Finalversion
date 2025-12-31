const FeaturesSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display italic text-4xl md:text-5xl lg:text-6xl text-center mb-4 leading-tight">
          Features so good,<br />they feel illegal
        </h2>
        <p className="text-center text-lg text-muted-foreground mb-16 max-w-2xl mx-auto font-sans">
          Level up across the board with powerful features that help you stay on top of it all.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* Memory Card */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative bg-[#E8E4DF] rounded-2xl overflow-hidden flex-1 min-h-[350px]">
              <div className="absolute left-0 top-0 bottom-0 w-16 bg-[#FF4D4D]" />
              <div className="p-6 pl-20">
                <div className="bg-background rounded-lg shadow-lg p-4 max-w-sm">
                  <div className="space-y-2 text-xs font-mono">
                    <p className="text-muted-foreground">• companies are finally starting to raise prices after months of holding out against new tariffs. <span className="text-primary">axios.com</span></p>
                    <div className="mt-3">
                      <p className="font-bold text-foreground">brooklyn weather today</p>
                      <p className="text-muted-foreground">• high: 84°f, low: 71°f, mostly sunny, humid. <span className="text-primary">accuweather.com</span></p>
                    </div>
                  </div>
                  <div className="mt-3 bg-muted rounded-lg p-3 text-xs">
                    <span className="font-medium">Memories used for this answer</span>
                    <p className="text-muted-foreground">You are based in Brooklyn, NY.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-background border border-border rounded-2xl p-6 mt-4">
              <h3 className="font-display text-2xl font-bold mb-2">Memory</h3>
              <p className="font-mono text-sm text-muted-foreground leading-relaxed">
                Keep track of your work across tabs and sessions so you can pick up where you left off.
              </p>
            </div>
          </div>

          {/* Mention Tabs Card */}
          <div className="lg:col-span-4 flex flex-col">
            <div className="bg-background border border-border rounded-2xl p-6 mb-4">
              <h3 className="font-display text-2xl font-bold mb-2">Mention Tabs</h3>
              <p className="font-mono text-sm text-muted-foreground leading-relaxed">
                Just @ any open tab in any query to pull them in as powerful context.
              </p>
            </div>
            <div className="bg-[#FFB800] rounded-2xl overflow-hidden flex-1 min-h-[300px] p-6">
              <div className="bg-background rounded-lg shadow-lg p-4">
                <div className="flex gap-2 mb-4 flex-wrap">
                  <span className="px-2 py-1 bg-primary/20 text-primary rounded text-[10px] font-mono">School</span>
                  <span className="px-2 py-1 bg-muted rounded text-[10px] font-mono">Abu Dhabi</span>
                  <span className="px-2 py-1 bg-muted rounded text-[10px] font-mono">Berlin</span>
                </div>
                <div className="border border-border rounded-lg p-3">
                  <p className="text-sm text-muted-foreground">◎ which study abroad program is best for comp sci majors?</p>
                  <div className="flex gap-2 mt-3 flex-wrap">
                    <span className="px-2 py-1 bg-primary/10 border border-primary rounded text-[10px] font-mono">Abu Dhabi</span>
                    <span className="px-2 py-1 bg-primary/10 border border-primary rounded text-[10px] font-mono">Berlin</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Magazine covers */}
          <div className="lg:col-span-3 bg-[#FFB8D9] rounded-2xl overflow-hidden p-4 min-h-[500px]">
            <div className="space-y-2 text-right">
              <p className="font-mono text-sm font-bold text-pink-900">29 THE RISK ISSUE</p>
              <p className="font-mono text-sm font-bold text-pink-900">Matters Of The Heart ♡</p>
              <p className="font-mono text-sm font-bold text-pink-900">28 The Beauty Issue ☆</p>
              <p className="font-mono text-sm font-bold text-pink-900">27 The Summer Disp...</p>
              <p className="font-mono text-sm font-bold text-pink-900">26 Music To Our Ear...</p>
              <p className="font-mono text-sm font-bold text-pink-900">25 FREAKING OUT !!!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
