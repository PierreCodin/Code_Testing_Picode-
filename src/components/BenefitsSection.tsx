import { Button } from "@/components/ui/button";

const BenefitsSection = () => {
  return (
    <section className="py-24 px-6 bg-white/30 backdrop-blur-sm">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 lg:mb-8 px-4">
            Fidélisez vos clients{" "}
            <span className="text-primary">simplement</span>
          </h2>
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content - Animated Image */}
          <div className="relative order-first lg:order-first">
            <div className="relative z-10 shadow-card rounded-2xl overflow-hidden">
               <img 
                 src="/lovable-uploads/revwheel_client.png" 
                 alt="Résultats clients RevWheel" 
                 className="w-full h-auto object-contain rounded-2xl"
                 loading="lazy"
                 style={{ 
                   imageRendering: 'crisp-edges', 
                   maxHeight: 'none',
                   objectFit: 'contain',
                   width: '100%',
                   height: 'auto'
                 }}
               />
              
              {/* Floating animation overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-smooth"></div>
            </div>
            
            {/* Animated decorations */}
            <div className="absolute -top-4 -right-4 w-16 h-16 lg:w-24 lg:h-24 gradient-hero rounded-full opacity-20 blur-xl animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-20 h-20 lg:w-32 lg:h-32 gradient-primary rounded-full opacity-15 blur-2xl animate-pulse delay-1000"></div>
          </div>

          {/* Right Content - Metrics */}
          <div className="space-y-8 lg:space-y-12 order-last lg:order-last w-full">
            <div className="grid grid-cols-2 gap-4 lg:gap-8">
              {[
                { number: "100%", label: "satisfaits", color: "text-primary" },
                { number: "0€", label: "1 mois offert", color: "text-green-500" },
                { number: "89", label: "Avis par mois", color: "text-primary" },
                { number: "+55%", label: "gain sur leur note", color: "text-green-500" }
              ].map((stat, index) => (
                <div key={index} className="text-center space-y-2 group p-4 lg:p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-soft border border-primary/10 relative">
                  {/* Néon effect */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  <div className="absolute inset-0 rounded-xl shadow-[0_0_15px_rgba(99,102,241,0.1)] opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  
                  <div className={`text-3xl lg:text-5xl font-bold ${stat.color} group-hover:scale-110 transition-smooth relative z-10`}>
                    {stat.number}
                  </div>
                  <div className="text-xs lg:text-sm text-muted-foreground font-medium relative z-10">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center lg:text-left">
              <Button variant="hero" size="xl" className="hover:bg-white hover:text-primary transition-smooth w-full sm:w-auto">
                Commencer ici
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;