import { Button } from "@/components/ui/button";

const BenefitsSection = () => {
  return (
    <section className="py-24 px-6 bg-white/30 backdrop-blur-sm">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-8">
            Fidélisez vos clients{" "}
            <span className="text-primary">simplement</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Animated Image */}
          <div className="relative">
            <div className="relative z-10 shadow-card rounded-2xl overflow-hidden">
               <img 
                 src="/lovable-uploads/revwheel_client.png" 
                 alt="Résultats clients RevWheel" 
                 className="w-full h-auto object-cover rounded-2xl"
                 loading="lazy"
                 style={{ imageRendering: 'crisp-edges', maxHeight: 'none' }}
               />
              
              {/* Floating animation overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-smooth"></div>
            </div>
            
            {/* Animated decorations */}
            <div className="absolute -top-4 -right-4 w-24 h-24 gradient-hero rounded-full opacity-20 blur-xl animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 gradient-primary rounded-full opacity-15 blur-2xl animate-pulse delay-1000"></div>
          </div>

          {/* Right Content - Metrics */}
          <div className="space-y-12">
            <div className="grid grid-cols-2 gap-8">
              {[
                { number: "117", label: "avis par mois", color: "text-primary" },
                { number: "+38%", label: "gain sur leur note", color: "text-green-500" },
                { number: "100%", label: "satisfaits", color: "text-primary" },
                { number: "0€", label: "avec 7 jours offert", color: "text-green-500" }
              ].map((stat, index) => (
                <div key={index} className="text-center space-y-2 group p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-soft border border-primary/10 relative">
                  {/* Néon effect */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  <div className="absolute inset-0 rounded-xl shadow-[0_0_15px_rgba(99,102,241,0.1)] opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  
                  <div className={`text-5xl font-bold ${stat.color} group-hover:scale-110 transition-smooth relative z-10`}>
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground font-medium relative z-10">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center lg:text-left">
              <Button variant="hero" size="xl" className="hover:bg-white hover:text-primary transition-smooth">
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