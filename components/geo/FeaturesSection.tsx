const FeatureCard = ({ title, bgColor, accentBar, className = "" }: { title: string; bgColor?: string; accentBar?: string; className?: string }) => (
  <div
    className={`relative rounded-2xl p-8 h-full min-h-[280px] overflow-hidden ${className}`}
    style={{ backgroundColor: bgColor }}
  >
    {accentBar && <div className="absolute left-0 top-0 bottom-0 w-2" style={{ backgroundColor: accentBar }} />}
    <div className="relative z-10">
      <h3 className="font-display text-2xl italic">{title}</h3>
    </div>
  </div>
);

export const FeaturesSection = () => (
  <section className="py-24 px-6">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <p className="text-sm font-mono uppercase tracking-wider">
          Built for students
        </p>
        <h2 className="font-display text-4xl md:text-5xl italic mt-2">
          Features so good, they feel illegal.
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <FeatureCard title="Memory" bgColor="#E8E4DF" accentBar="#E53935" />
        <FeatureCard title="Mention Tabs" bgColor="#FFB800" />
        <FeatureCard title="Split View" bgColor="#FFB8D9" />
        <FeatureCard title="Command Bar" bgColor="#B8E8D9" />
        <FeatureCard title="Ad Block" bgColor="#E8E4DF" className="md:col-span-2" />
      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <FeatureCard title="Focus Mode" bgColor="#E6E0F8" />
        <FeatureCard title="Quick Notes" bgColor="#FFF4E0" />
      </div>
    </div>
  </section>
);
