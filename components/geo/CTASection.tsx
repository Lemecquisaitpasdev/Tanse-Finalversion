import { ArrowRight } from "lucide-react";
import { Button } from "./Button";

const BrowserIllustration = () => (
  <div className="grid grid-cols-2 gap-4">
    <div className="relative rounded-xl p-6 h-full min-h-[120px] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-yellow-400 to-cyan-400" />
      <div className="relative z-10">
        <h3 className="font-display text-lg italic">/outline</h3>
      </div>
    </div>
    <div className="rounded-xl p-6 h-full min-h-[120px]" style={{ backgroundColor: "#FFB800" }}>
      <h3 className="font-display text-lg italic">/cite</h3>
    </div>
    <div className="rounded-xl p-6 h-full min-h-[120px]" style={{ backgroundColor: "#B8E8D9" }}>
      <h3 className="font-display text-lg italic">/flashcards</h3>
    </div>
    <div className="rounded-xl p-6 h-full min-h-[120px]" style={{ backgroundColor: "#FFB8D9" }}>
      <h3 className="font-display text-lg italic">/job-fit</h3>
    </div>
  </div>
);

export const CTASection = () => (
  <section className="py-24 px-6">
    <div className="max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="font-display text-4xl md:text-6xl italic leading-tight mb-8">
            The smartest thing you can open this semester.
          </h2>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="px-8 py-6 rounded-full bg-foreground text-background hover:bg-foreground/90">
              Download Dia
            </Button>

            <a href="#" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              Dreaming of skills? Join our Discord
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Browser Illustration with colorful cards */}
        <BrowserIllustration />
      </div>
    </div>
  </section>
);
