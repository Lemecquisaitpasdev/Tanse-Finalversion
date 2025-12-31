import { Button } from "./Button";

const DiaLogo = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <rect x="4" y="12" width="24" height="8" fill="currentColor"/>
    <path d="M8 12 L16 4 L24 12" fill="currentColor"/>
  </svg>
);

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 font-display italic text-lg">
          <DiaLogo />
          <span>Dia</span>
        </a>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8 text-sm">
          <a href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">
            Skills
          </a>
          <a href="#students" className="text-muted-foreground hover:text-foreground transition-colors">
            Students
          </a>
        </div>

        {/* CTA Button */}
        <Button className="rounded-full">
          Join the Waitlist
        </Button>
      </nav>
    </header>
  );
};
