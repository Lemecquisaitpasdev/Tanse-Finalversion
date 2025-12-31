const SkillCard = ({ title, description, color, offset = 0 }: { title: string; description: string; color: string; offset?: number }) => (
  <div
    className="flex-shrink-0 w-[280px] rounded-2xl p-6 transition-transform hover:scale-105"
    style={{ backgroundColor: color, transform: `translateY(${offset}px)` }}
  >
    <h3 className="font-display text-xl italic mb-2">{title}</h3>
    <p className="text-sm text-foreground/70 leading-relaxed">{description}</p>
  </div>
);

const MarqueeText = ({ text }: { text: string }) => {
  const colors = ["#FF6B6B", "#FF8E53", "#FFD93D", "#6BCB77", "#4D96FF", "#9B59B6", "#FF6B9D", "#00D4AA"];
  const textArray = Array(20).fill(text).join("");

  return (
    <div className="overflow-hidden py-6 bg-foreground">
      <div className="animate-marquee whitespace-nowrap flex">
        {textArray.split("").map((char, i) => (
          <span key={i} className="text-2xl font-display italic" style={{ color: colors[i % colors.length] }}>
            {char}
          </span>
        ))}
      </div>
    </div>
  );
};

export const SkillsSection = () => {
  const skills = [
    { title: "Reading", description: "Summarize articles, highlight key points, and understand complex texts faster.", color: "#E8E4DF" },
    { title: "Researching", description: "Find sources, compare viewpoints, and organize your findings in one place.", color: "#FFE4B5" },
    { title: "Organizing", description: "Keep tabs organized, create collections, and never lose track of important links.", color: "#E0F4FF" },
    { title: "Summarizing", description: "Get the gist of long documents, videos, and web pages in seconds.", color: "#F0E6FF" },
    { title: "Writing", description: "Draft essays, brainstorm ideas, and refine your writing with AI assistance.", color: "#FFE4E4" },
    { title: "Citing", description: "Format citations correctly and keep track of all your sources effortlessly.", color: "#E4FFE9" },
  ];

  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-sm font-mono uppercase tracking-wider">
              Skills are your shortcut
            </p>
            <h2 className="font-display text-4xl md:text-5xl italic mt-2">
              A smarter way to learn.
            </h2>
          </div>
          <p className="text-lg text-muted-foreground">
            Skills are like superpowers for your browser.
          </p>
        </div>
      </div>

      {/* Horizontal Scroll Cards */}
      <div className="flex gap-6 overflow-x-auto pb-8 px-6 scrollbar-hide">
        {skills.map((skill, i) => (
          <SkillCard key={i} {...skill} offset={i % 2 === 0 ? 0 : 20} />
        ))}
      </div>

      {/* Rainbow Marquee */}
      <MarqueeText text="Get our Student Pack! " />
    </section>
  );
};
