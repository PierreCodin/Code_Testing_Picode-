
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const BeforeAfterSection = () => {
  const benefits = [
    {
      title: "Gagnez des avis Google",
      subtitle: "sans effort"
    },
    {
      title: "Récupérez les coordonnées clients", 
      subtitle: "emails et téléphones pour vos campagnes"
    },
    {
      title: "Devenez numéro 1 sur Google",
      subtitle: "grâce aux avis collectés"
    }
  ];

  return (
    <section className="py-16 lg:py-24 px-4 lg:px-6 bg-gradient-to-br from-primary/5 to-primary/10">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-6">
            En 7 jours avec <span className="text-primary">RevWheel</span>
          </h2>
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content - Image */}
          <div className="relative order-1 lg:order-1">
            <div className="relative z-10 shadow-card rounded-2xl overflow-hidden">
              <img 
                src="/lovable-uploads/13933107-865a-4ba9-b64a-78be09cffad7.png" 
                alt="Avant/Après - Résultats RevWheel" 
                className="w-full h-auto"
              />
            </div>
            
            {/* Floating decorations - hidden on mobile */}
            <div className="hidden lg:block absolute -top-4 -right-4 w-24 h-24 gradient-hero rounded-full opacity-20 blur-xl"></div>
            <div className="hidden lg:block absolute -bottom-4 -left-4 w-32 h-32 gradient-primary rounded-full opacity-15 blur-2xl"></div>
          </div>

          {/* Right Content - Benefits */}
          <div className="space-y-6 lg:space-y-8 order-2 lg:order-2">
            <div className="grid gap-4 lg:gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-soft">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full gradient-hero flex items-center justify-center mt-1">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <div>
                    <h3 className="text-base lg:text-lg font-semibold text-foreground">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {benefit.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center lg:text-left">
              <Button variant="hero" size="xl" className="w-full sm:w-auto">
                Commencer maintenant
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
