import { Button } from "./Button";
import Link from "next/link";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-background/80 backdrop-blur-sm">
      <div className="flex items-center gap-8">
        {/* Logo */}
        <a href="/" className="flex items-center gap-1.5">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 14C4 14 5 13 8 13C11 13 13 15 16 15C19 15 20 14 20 14V4C20 4 19 5 16 5C13 5 11 3 8 3C5 3 4 4 4 4V14Z" fill="currentColor"/>
            <path d="M4 14V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <span className="text-xl font-semibold tracking-tight">Dia</span>
        </a>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Index
          </Link>
          <Link href="/forfaits-geo-seo" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Forfaits
          </Link>
          <Link href="/agence-geo-paris-lyon" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Entreprise
          </Link>
          <Link href="/blog-seo-geo" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Blog
          </Link>
          <Link href="/contact-audit-gratuit" className="text-sm font-medium text-foreground hover:text-foreground/80 transition-colors">
            Contactez-nous
          </Link>
        </nav>
      </div>

      {/* CTA Button */}
      <Button
        variant="outline"
        className="rounded-full border-foreground/20 hover:bg-foreground hover:text-background transition-all"
      >
        Join the Waitlist
      </Button>
    </header>
  );
};

export default Header;
