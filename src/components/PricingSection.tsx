import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useState } from "react";

const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const features = [
    "Configuration en 5 minutes",
    "Booster vos avis Google",
    "Votre roue sur-mesure",
    "Votre affiche personnalisée avec QR Code", 
    "Suivi des performances",
    "Extraction des données (email/tél.)",
    "Support Client 7/7j",
    "Sans engagement",
    "Sans frais de mise en service", 
    "Sans frais de résiliation"
  ];

  return (
    <section id="pricing" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Satisfait ou <span className="text-primary">Remboursé</span>
          </h2>
          
           <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 mt-8">
              <button 
                onClick={() => {
                  setIsTransitioning(true);
                  setTimeout(() => {
                    setIsAnnual(false);
                    setIsTransitioning(false);
                  }, 250);
                }}
                className={`px-3 sm:px-4 py-2 rounded-full text-base sm:text-lg font-medium transition-smooth ${!isAnnual ? 'bg-primary/10 text-primary font-semibold' : 'text-muted-foreground'}`}
              >
                Mensuel
              </button>
              <button 
                onClick={() => {
                  setIsTransitioning(true);
                  setTimeout(() => {
                    setIsAnnual(true);
                    setIsTransitioning(false);
                  }, 250);
                }}
                className={`px-3 sm:px-4 py-2 rounded-full text-base sm:text-lg transition-smooth ${isAnnual ? 'bg-primary/10 text-primary font-semibold' : 'text-muted-foreground'} text-center`}
              >
                Annuel -25% d'économie
              </button>
           </div>
        </div>

        <div className="max-w-md mx-auto">
          <div className={`bg-white rounded-2xl shadow-card p-8 text-center border border-primary/20 transition-all duration-500 ease-in-out ${
            isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
          }`}>
            <div className="mb-6 lg:mb-8">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-2">
                {isAnnual ? "7€" : "9€"}
              </div>
              <div className="text-muted-foreground">par mois</div>
            </div>

            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full gradient-subtle flex items-center justify-center">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-foreground/80 text-left">{feature}</span>
                </div>
              ))}
            </div>

            <Button variant="hero" size="xl" className="w-full hover:bg-white hover:text-primary transition-smooth">
              Démarrer maintenant
            </Button>
          </div>
        </div>

        {/* Video Section */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8">Mise en place immédiate</h3>
          <div className="relative max-w-2xl mx-auto bg-white rounded-2xl shadow-card overflow-hidden">
            <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
              <div className="w-20 h-20 bg-primary/90 rounded-full flex items-center justify-center hover:bg-primary hover:scale-110 transition-smooth cursor-pointer">
                <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Social Proof */}
        <div className="mt-16 lg:mt-20 text-center">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 mb-12">
            <div className="space-y-2">
              <div className="text-3xl lg:text-4xl font-bold text-primary">250+</div>
              <div className="text-sm lg:text-base text-muted-foreground">Commerçants en France</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl lg:text-4xl font-bold text-primary">20k+</div>
              <div className="text-sm lg:text-base text-muted-foreground">Avis collectés</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl lg:text-4xl font-bold text-primary">4.8/5</div>
              <div className="text-sm lg:text-base text-muted-foreground">Note moyenne clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;