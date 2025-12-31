import { Button } from "./Button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl italic leading-tight mb-8">
              The smartest thing<br />you can open<br />this semester.
            </h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="px-8 py-6 text-base font-medium rounded-full bg-foreground text-background hover:bg-foreground/90">
                Download Dia
              </Button>
              <a href="#" className="inline-flex items-center gap-2 text-base text-muted-foreground hover:text-foreground transition-colors group">
                Dreaming of skills? Join our Discord
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="w-full aspect-[4/3] bg-card rounded-2xl border border-border shadow-2xl overflow-hidden">
              <div className="h-10 bg-muted flex items-center px-4 gap-3 border-b border-border">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
              </div>
              <div className="p-6 grid grid-cols-2 gap-4">
                <div className="rounded-xl p-4 h-32" style={{ background: 'linear-gradient(135deg, #FF8A4C 0%, #E86A47 50%, #4F7DDE 100%)' }}>
                  <div className="text-white text-sm font-medium">Outline</div>
                </div>
                <div className="rounded-xl p-4 h-32 bg-[#FFB800]">
                  <div className="text-foreground text-sm font-medium">Cite</div>
                </div>
                <div className="rounded-xl p-4 h-32 bg-[#B8E8D9]">
                  <div className="text-foreground text-sm font-medium">Flashcards</div>
                </div>
                <div className="rounded-xl p-4 h-32 bg-[#FFB8D9]">
                  <div className="text-foreground text-sm font-medium">Job-fit</div>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#FFB800] rounded-xl animate-float" style={{ animationDelay: "0.5s" }}></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-[#FFB8D9] rounded-xl animate-float" style={{ animationDelay: "1s" }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
