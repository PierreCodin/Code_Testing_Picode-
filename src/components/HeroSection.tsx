import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative py-12 px-6 overflow-hidden">
      {/* Background decorations with animated shapes */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-primary/5 rounded-full blur-2xl animate-pulse"></div>
        
        {/* Animated geometric shapes */}
        <div className="absolute top-1/4 left-1/3 w-6 h-6 bg-primary/35 rotate-45 animate-bounce delay-1000"></div>
        <div className="absolute bottom-1/3 right-1/4 w-8 h-8 bg-primary/30 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-primary/40 rotate-12 animate-bounce delay-3000"></div>
        <div className="absolute top-3/4 right-1/3 w-5 h-5 bg-primary/33 rounded-full animate-pulse delay-1500"></div>
        <div className="absolute bottom-1/4 left-1/2 w-7 h-7 border-2 border-primary/35 rotate-45 animate-bounce delay-2500"></div>
        <div className="absolute top-1/3 right-1/5 w-3 h-3 bg-primary/45 animate-pulse delay-500"></div>
        <div className="absolute bottom-2/3 left-1/6 w-6 h-6 border border-primary/30 rounded-full animate-spin" style={{animationDuration: '6s'}}></div>
        
        {/* Additional animated shapes */}
        <div className="absolute top-1/6 right-2/3 w-5 h-5 bg-primary/37 rotate-12 animate-bounce delay-4000"></div>
        <div className="absolute bottom-1/6 left-3/4 w-4 h-4 bg-primary/33 rounded-full animate-pulse delay-3500"></div>
        <div className="absolute top-2/3 left-1/5 w-6 h-6 border border-primary/35 rotate-45 animate-spin delay-1800" style={{animationDuration: '8s'}}></div>
        <div className="absolute bottom-1/2 right-1/6 w-3 h-3 bg-primary/40 animate-bounce delay-2800"></div>
      </div>
      
      <div className="container mx-auto max-w-7xl relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Collectez des Avis Google{" "}
                <span className="text-primary">(sans effort)</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                La meilleure solution pour avoir des avis positifs sur Google de la part de tous vos clients pour être premier dans les recherches.
              </p>
            </div>

            <Button variant="hero" size="xl" className="text-lg">
              Essayez gratuitement
            </Button>

            {/* Features List */}
            <div className="grid grid-cols-2 gap-4">
              {[
                "7 jours gratuits",
                "Pas de CB requise", 
                "Sans Engagement",
                "Mise en place en 5min"
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full gradient-subtle flex items-center justify-center">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-foreground/80 font-medium">{feature}</span>
                </div>
              ))}
            </div>
            
          </div>

          {/* Right Content - Video Mockup */}
          <div className="relative">
            <div className="relative z-10 shadow-card rounded-2xl overflow-hidden bg-white aspect-[9/16] max-w-xs mx-auto video-neon-glow">
              <video 
                src="/lovable-uploads/video.mp4" 
                className="w-full h-full object-cover"
                controls
                controlsList="nodownload"
                preload="metadata"
                poster="/lovable-uploads/revwheel_client.png"
                muted
                playsInline
                onLoadStart={() => console.log('Video loading started')}
                onError={(e) => console.log('Video error:', e)}
                key="revwheel-video-final"
              />
            </div>
            
            {/* Floating decorations */}
            <div className="absolute -top-4 -right-4 w-24 h-24 gradient-hero rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 gradient-primary rounded-full opacity-15 blur-2xl"></div>
            
            {/* Additional animated shapes */}
            <div className="absolute top-1/4 -right-8 w-5 h-5 bg-primary/30 rotate-45 animate-bounce delay-1500"></div>
            <div className="absolute bottom-1/3 -left-6 w-4 h-4 bg-primary/35 rounded-full animate-pulse delay-2500"></div>
            <div className="absolute top-2/3 -right-12 w-6 h-6 border border-primary/25 rounded-full animate-spin delay-3000" style={{animationDuration: '6s'}}></div>
          </div>
          
          <style dangerouslySetInnerHTML={{
            __html: `
              .video-neon-glow {
                box-shadow: 
                  0 0 25px rgba(99, 102, 241, 0.4),
                  0 0 50px rgba(99, 102, 241, 0.3),
                  0 0 75px rgba(99, 102, 241, 0.2);
                border: 2px solid rgba(99, 102, 241, 0.3);
              }
            `
          }} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;