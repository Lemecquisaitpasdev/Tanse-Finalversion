const Tab = ({ label, active }: { label: string; active?: boolean }) => (
  <div className={`px-3 py-1 text-xs rounded-t ${active ? 'bg-white' : 'bg-transparent text-muted-foreground'}`}>
    {label}
  </div>
);

const FeatureCard = ({ title, gradient, color }: { title: string; gradient?: boolean; color?: string }) => (
  <div
    className="relative rounded-xl p-6 h-full min-h-[120px] overflow-hidden"
    style={{ backgroundColor: gradient ? undefined : color }}
  >
    {gradient && (
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-yellow-400 to-cyan-400" />
    )}
    <div className="relative z-10">
      <h3 className="font-display text-lg italic">{title}</h3>
    </div>
  </div>
);

export const BrowserMockup = () => {
  return (
    <section className="px-6 pb-24">
      <div className="max-w-5xl mx-auto">
        <div className="bg-[hsl(var(--browser-bg))] rounded-2xl border border-[hsl(var(--border))] shadow-2xl overflow-hidden">
          {/* Browser Header */}
          <div className="h-12 bg-[hsl(var(--browser-tab-bg))] flex items-center px-4 gap-3">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            <div className="flex gap-1">
              <Tab label="Dia" active />
              <Tab label="New Tab" />
            </div>
          </div>

          {/* Browser Content - Feature Cards */}
          <div className="p-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            <FeatureCard title="Outline" gradient />
            <FeatureCard title="Cite" color="#FFB800" />
            <FeatureCard title="Flashcards" color="#B8E8D9" />
            <FeatureCard title="Job-fit" color="#FFB8D9" />
          </div>
        </div>
      </div>
    </section>
  );
};
