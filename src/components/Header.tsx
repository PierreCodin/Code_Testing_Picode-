
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-20 items-center justify-between px-6">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img src="/lovable-uploads/logo.png" alt="RevWheel" className="h-12 w-auto" />
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="/" className="text-foreground/80 hover:text-foreground transition-smooth font-medium">
            Accueil
          </a>
          <a href="/#pricing" className="text-foreground/80 hover:text-foreground transition-smooth font-medium">
            Tarification
          </a>
          <a href="#" className="text-foreground/80 hover:text-foreground transition-smooth font-medium">
            Espace Pro
          </a>
          <a href="/#contact" className="text-foreground/80 hover:text-foreground transition-smooth font-medium">
            Contact
          </a>
          <a href="/blog" className="text-foreground/80 hover:text-foreground transition-smooth font-medium">
            Blog
          </a>
        </nav>

        {/* CTA Button */}
        <Button 
          variant="nav-cta" 
          className="hidden sm:inline-flex"
        >
          COMMENCER L'ESSAI GRATUIT
        </Button>

        {/* Mobile menu button */}
        <Button variant="ghost" size="icon" className="md:hidden">
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </Button>
      </div>
    </header>
  );
};

export default Header;
