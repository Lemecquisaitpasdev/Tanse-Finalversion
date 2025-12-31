import { Button } from "./Button";
import { PixelSmiley, PixelQuestion, PixelTypewriter, PixelSearch, PixelGear, PixelStar } from "./PixelIcons";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[70vh] flex flex-col items-center justify-center pt-24 pb-16 px-6 overflow-hidden">
      {/* Floating Pixel Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <PixelSmiley className="absolute left-[10%] top-[25%] w-16 h-16 animate-float" />
        <PixelQuestion className="absolute left-[8%] top-[55%] w-14 h-14 animate-float" />
        <PixelTypewriter className="absolute left-[22%] top-[42%] w-16 h-16 animate-float" />
        <PixelSearch className="absolute right-[18%] top-[15%] w-16 h-16 animate-float" />
        <PixelGear className="absolute right-[8%] top-[30%] w-14 h-14 animate-float" />
        <PixelStar className="absolute right-[18%] top-[45%] w-14 h-14 animate-float" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <h1 className="font-display text-5xl md:text-7xl leading-tight italic">
          You don't have to do it all alone.
        </h1>

        <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Dia is the AI browser that truly gets you — helping you think deeper,
          move faster, and level up across the board.
        </p>

        <Button className="mt-10 px-8 py-6 rounded-full bg-foreground text-background hover:bg-foreground/90">
          Download Dia
        </Button>
      </div>
    </section>
  );
};
