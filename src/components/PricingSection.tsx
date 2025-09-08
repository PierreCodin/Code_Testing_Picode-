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
    <section id="pricing" className="py-16 lg:py-24 px-4 lg:px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="max-md:text-xl max-md:font-bold max-md:text-center max-md:mb-6 text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4">
            Satisfait ou <span className="text-primary">Remboursé</span>
          </h2>
          
          <p className="max-md:text-sm max-md:font-normal max-md:leading-relaxed max-md:text-center max-md:px-4 max-md:mb-6 text-muted-foreground hidden max-md:block">
            Essayez 7 jours sans engagement
          </p>
          
           <div className="max-md:flex max-md:flex-col max-md:items-center max-md:space-y-3 max-md:w-5/6 max-md:mx-auto flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4 lg:space-x-8 mt-8">
             <button 
               onClick={() => {
                 setIsTransitioning(true);
                 setTimeout(() => {
                   setIsAnnual(false);
                   setIsTransitioning(false);
                 }, 250);
               }}
               className={`max-md:text-sm max-md:font-medium max-md:text-center max-md:w-full px-4 py-2 rounded-full text-base lg:text-lg font-medium transition-smooth w-full sm:w-auto ${!isAnnual ? 'bg-primary/10 text-primary font-semibold' : 'text-muted-foreground'}`}
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
               className={`max-md:text-sm max-md:font-medium max-md:text-center max-md:w-full px-4 py-2 rounded-full transition-smooth w-full sm:w-auto text-sm lg:text-base ${isAnnual ? 'bg-primary/10 text-primary font-semibold' : 'text-muted-foreground'}`}
             >
               Annuel -25% d'économie
             </button>
           </div>
        </div>

        <div className="max-md:w-11/12 max-md:mx-auto max-w-md mx-auto">
          <div className={`max-md:w-full max-md:rounded-xl max-md:shadow-soft max-md:p-6 bg-white rounded-2xl shadow-card p-6 lg:p-8 text-center border border-primary/20 transition-all duration-500 ease-in-out ${
            isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
          }`}>
            <div className="max-md:text-2xl max-md:mb-4 mb-6 lg:mb-8">
              <div className="max-md:text-2xl max-md:font-bold max-md:text-center text-5xl lg:text-6xl font-bold text-primary mb-2">
                {isAnnual ? "7€" : "9€"}
              </div>
              <div className="max-md:text-sm max-md:text-center text-muted-foreground text-sm lg:text-base">par mois</div>
            </div>

            <div className="max-md:space-y-4 max-md:mb-6 space-y-3 lg:space-y-4 mb-6 lg:mb-8">
              {features.map((feature, index) => (
                <div key={index} className="max-md:flex max-md:items-center max-md:justify-center max-md:text-center flex items-center space-x-3">
                  <div className="max-md:w-6 max-md:h-6 flex-shrink-0 w-5 h-5 rounded-full gradient-subtle flex items-center justify-center">
                    <Check className="max-md:w-4 max-md:h-4 w-3 h-3 text-primary" />
                  </div>
                  <span className="max-md:text-sm max-md:leading-relaxed max-md:text-center text-foreground/80 text-left text-sm lg:text-base">{feature}</span>
                </div>
              ))}
            </div>

            <Button variant="hero" size="xl" className="max-md:w-4/5 max-md:mx-auto max-md:rounded-2xl max-md:text-base max-md:font-semibold w-full hover:bg-white hover:text-primary transition-smooth">
              Démarrer maintenant
            </Button>
          </div>
        </div>

        {/* Video Section */}
        <div className="mt-16 lg:mt-20 text-center">
          <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-6 lg:mb-8">Mise en place immédiate</h3>
          <div className="relative max-w-2xl mx-auto bg-white rounded-2xl shadow-card overflow-hidden">
            <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
              <div className="w-16 h-16 lg:w-20 lg:h-20 bg-primary/90 rounded-full flex items-center justify-center hover:bg-primary hover:scale-110 transition-smooth cursor-pointer">
                <svg className="w-6 h-6 lg:w-8 lg:h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
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
              <div className="text-muted-foreground text-sm lg:text-base">Commerçants en France</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl lg:text-4xl font-bold text-primary">20k+</div>
              <div className="text-muted-foreground text-sm lg:text-base">Avis collectés</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl lg:text-4xl font-bold text-primary">4.8/5</div>
              <div className="text-muted-foreground text-sm lg:text-base">Note moyenne clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;