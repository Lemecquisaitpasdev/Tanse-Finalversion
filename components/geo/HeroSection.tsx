import Link from "next/link";
import { Button } from "./Button";
import {
  PixelComputer,
  PixelSearch,
  PixelSmiley,
  PixelQuestion,
  PixelTypewriter,
  PixelGear,
  PixelStar,
  PixelPencil,
} from "./PixelIcons";

const HeroSection = () => {
  return (
    <section className="relative min-h-[70vh] flex flex-col items-center justify-center pt-24 pb-16 px-6 overflow-hidden">
      {/* Floating Pixel Icons */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Left side icons */}
        <PixelSmiley className="absolute left-[10%] top-[25%] w-16 h-16 text-foreground animate-float" style={{ animationDelay: "0s" }} />
        <PixelQuestion className="absolute left-[8%] top-[55%] w-14 h-14 text-foreground animate-float" style={{ animationDelay: "1s" }} />
        <PixelTypewriter className="absolute left-[22%] top-[42%] w-16 h-16 text-foreground animate-float" style={{ animationDelay: "0.5s" }} />
        <PixelComputer className="absolute left-[25%] top-[15%] w-12 h-12 text-foreground animate-float" style={{ animationDelay: "1.5s" }} />

        {/* Right side icons */}
        <PixelSearch className="absolute right-[18%] top-[15%] w-16 h-16 text-foreground animate-float" style={{ animationDelay: "0.3s" }} />
        <PixelGear className="absolute right-[8%] top-[30%] w-14 h-14 text-foreground animate-float" style={{ animationDelay: "0.8s" }} />
        <PixelStar className="absolute right-[18%] top-[45%] w-14 h-14 text-foreground animate-float" style={{ animationDelay: "1.2s" }} />
        <PixelPencil className="absolute right-[6%] top-[55%] w-14 h-14 text-foreground animate-float" style={{ animationDelay: "2s" }} />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight italic">
          40% de vos prospects<br />
          cherchent sur ChatGPT,<br />
          pas sur Google.
        </h1>

        <p className="mt-8 text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed">
          Si les LLMs ne connaissent pas votre entreprise, vous perdez un marché considérable. Voici ce qu'est le GEO, pourquoi ça compte, et comment vous y adapter.
        </p>

        <Link href="/contact-audit-gratuit">
          <Button
            className="mt-10 px-8 py-6 text-base font-medium rounded-full bg-foreground text-background hover:bg-foreground/90 transition-all"
          >
            Avoir un audit gratuit
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
