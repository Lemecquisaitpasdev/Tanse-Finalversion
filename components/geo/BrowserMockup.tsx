const TabBadge = ({ icon, label, light }: { icon: string; label: string; light?: boolean }) => (
  <div className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm ${
    light
      ? "bg-white/20 text-white"
      : "bg-muted text-foreground/80"
  }`}>
    <span>{icon}</span>
    <span>{label}</span>
  </div>
);

const BrowserMockup = () => {
  const tabs = [
    { icon: "📝", label: "Essay research not..." },
    { icon: "📋", label: "Blackboard.edu" },
    { icon: "🌐", label: "Constantinople" },
    { icon: "🌐", label: "Greek colonisation" },
    { icon: "📰", label: "The Fall of Const..." },
    { icon: "📊", label: "Biology 101" },
    { icon: "🎬", label: "The Deadliest Be..." },
    { icon: "💼", label: "LinkedIn" },
  ];

  return (
    <section className="px-6 pb-24">
      <div className="max-w-6xl mx-auto">
        <div className="bg-muted rounded-2xl p-4 shadow-lg">
          {/* Browser Tab Bar */}
          <div className="flex items-center gap-2 pb-3">
            {/* Window controls */}
            <div className="flex items-center gap-1.5 px-2">
              <div className="w-3 h-3 rounded-full bg-foreground/20" />
              <div className="w-3 h-3 rounded-full bg-foreground/20" />
              <div className="w-3 h-3 rounded-full bg-foreground/20" />
            </div>

            {/* Tabs */}
            <div className="flex items-center gap-1 overflow-x-auto flex-1">
              {tabs.map((tab, index) => (
                <div
                  key={index}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-card rounded-lg text-xs whitespace-nowrap"
                >
                  <span className="text-sm">{tab.icon}</span>
                  <span className="text-muted-foreground">{tab.label}</span>
                </div>
              ))}
              <button className="p-1.5 text-muted-foreground hover:text-foreground transition-colors">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Browser Content */}
          <div className="relative mt-2 min-h-[380px]">
            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-start">
              {/* Outline Card - Gradient */}
              <div
                className="rounded-2xl p-5 min-h-[220px] flex flex-col justify-between"
                style={{
                  background: "linear-gradient(180deg, #FF8A4C 0%, #E86A47 35%, #4F7DDE 100%)"
                }}
              >
                <div className="space-y-2">
                  <TabBadge icon="📝" label="Essay research notes" light />
                  <TabBadge icon="📋" label="Blackboard" light />
                </div>
                <div className="text-white">
                  <h3 className="font-mono text-xl font-medium">/outline</h3>
                  <p className="mt-2 font-mono text-sm opacity-90 leading-relaxed">
                    Help structure a quick essay outline for my thesis based on the assignment guidelines
                  </p>
                </div>
              </div>

              {/* Cite Card */}
              <div className="bg-card rounded-2xl p-5 border border-border min-h-[220px] flex flex-col justify-between">
                <div className="space-y-2">
                  <TabBadge icon="🌐" label="Constantinople" />
                  <TabBadge icon="🌐" label="Greek colonization" />
                  <TabBadge icon="📰" label="The Fall of Constantinople" />
                </div>
                <div>
                  <h3 className="font-mono text-xl font-medium text-foreground">/cite</h3>
                  <p className="mt-2 font-mono text-sm text-muted-foreground leading-relaxed">
                    Format citations in APA for the attached content & sources
                  </p>
                </div>
              </div>

              {/* Flashcards Card */}
              <div className="bg-card rounded-2xl p-5 border border-border min-h-[220px] flex flex-col justify-between">
                <div className="space-y-2">
                  <TabBadge icon="📊" label="Biology 101" />
                  <TabBadge icon="🎬" label="The Deadliest Being on Pla.." />
                </div>
                <div>
                  <h3 className="font-mono text-xl font-medium text-foreground">/flashcards</h3>
                  <p className="mt-2 font-mono text-sm text-muted-foreground leading-relaxed">
                    Create 8-12 study flashcards for me with question on one side, answer on the other
                  </p>
                </div>
              </div>

              {/* Job-fit Card */}
              <div className="bg-card rounded-2xl p-5 border border-border min-h-[220px] flex flex-col justify-between">
                <div className="space-y-2">
                  <TabBadge icon="💼" label="LinkedIn" />
                </div>
                <div>
                  <h3 className="font-mono text-xl font-medium text-foreground">/job-fit</h3>
                  <p className="mt-2 font-mono text-sm text-muted-foreground leading-relaxed">
                    Cross-check your resume against any job description to instantly see if you're a good fit
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrowserMockup;
