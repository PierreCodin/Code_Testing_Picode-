
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border/40">
      <div className="container mx-auto px-4 lg:px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Logo & Description */}
          <div className="space-y-4 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start space-x-3">
              <img src="/lovable-uploads/logo.png" alt="RevWheel" className="h-8 w-auto" />
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              La solution parfaite pour collecter des avis Google positifs et booster votre visibilité locale.
            </p>
          </div>

          {/* Product */}
          <div className="space-y-4 text-center sm:text-left">
            <h3 className="font-semibold text-foreground">Produit</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-smooth">Fonctionnalités</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-smooth">Tarifs</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-smooth">Essai gratuit</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-smooth">Démo</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4 text-center sm:text-left">
            <h3 className="font-semibold text-foreground">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-smooth">Centre d'aide</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-smooth">Contact</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-smooth">FAQ</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-smooth">Formation</a></li>
            </ul>
          </div>

          {/* CTA */}
          <div className="space-y-4 text-center sm:text-left">
            <h3 className="font-semibold text-foreground">Commencer</h3>
            <p className="text-muted-foreground text-sm">
              Prêt à booster vos avis Google ?
            </p>
            <Button 
              variant="hero" 
              size="sm" 
              className="hover:bg-white hover:text-primary transition-smooth w-full sm:w-auto"
              onClick={() => window.location.href = 'mailto:revwheelpro@gmail.com?subject=Demande d\'information RevWheel&body=Bonjour, je souhaiterais avoir plus d\'informations sur RevWheel.'}
              id="contact"
            >
              Contactez-nous
            </Button>
          </div>
        </div>

        <div className="border-t border-border/40 mt-8 lg:mt-12 pt-6 lg:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground text-center md:text-left">
              © 2024 RevWheel. Tous droits réservés.
            </div>
             <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-center">
               <a href="/terms" className="text-muted-foreground hover:text-primary transition-smooth">
                 Conditions d'utilisation
               </a>
               <a href="/privacy" className="text-muted-foreground hover:text-primary transition-smooth">
                 Politique de confidentialité
               </a>
               <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                 Mentions légales
               </a>
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
