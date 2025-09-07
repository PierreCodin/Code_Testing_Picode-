import { useState, useEffect } from "react";
import clientLogo1 from "@/assets/client-logo-1.png";
import clientLogo2 from "@/assets/client-logo-2.png";
import clientLogo3 from "@/assets/client-logo-3.png";
import clientLogo4 from "@/assets/client-logo-4.png";
import clientLogo5 from "@/assets/client-logo-5.png";
import clientLogo6 from "@/assets/client-logo-6.png";
import clientLogo7 from "@/assets/client-logo-7.png";
import clientLogo8 from "@/assets/client-logo-8.png";

const StatsSection = () => {
   const [currentCount, setCurrentCount] = useState(526);
   
   const clientLogos = [
     clientLogo1,
     clientLogo2,
     clientLogo3,
     clientLogo4,
     clientLogo5,
     clientLogo6,
     clientLogo7,
     clientLogo8
   ];
   
   useEffect(() => {
     const interval = setInterval(() => {
       setCurrentCount(prev => {
         if (prev < 531) {
           return prev + 1;
         }
         return 531;
       });
     }, 12000); // Increment every 12 seconds to reach 531 in 1 minute
     
     return () => clearInterval(interval);
   }, []);
  
  return (
    <section className="py-16 px-6 bg-white/50 backdrop-blur-sm">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-lg text-muted-foreground mb-4">
          Le nombre d'avis obtenus par nos clients aujourd'hui
        </h2>
        
        
        <div className="relative">
          <span className="text-4xl sm:text-6xl lg:text-8xl font-bold gradient-hero bg-clip-text text-transparent">
            {currentCount}+
          </span>
          
          {/* Animated counter effect */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 rounded-full gradient-subtle opacity-20 animate-pulse"></div>
          </div>
        </div>

        {/* Client logos carousel */}
        <div className="mt-12 lg:mt-16 overflow-hidden">
          <div className="flex space-x-6 sm:space-x-8 lg:space-x-12 items-center animate-scroll">
            {clientLogos.map((logo, i) => (
              <div key={i} className="flex-shrink-0 w-16 h-12 sm:w-20 sm:h-14 lg:w-24 lg:h-16 bg-white rounded-lg shadow-soft flex items-center justify-center p-2">
                <img 
                  src={logo}
                  alt={`Client ${i + 1}`}
                  className="w-full h-full object-contain rounded opacity-60"
                />
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {clientLogos.map((logo, i) => (
              <div key={`dup-${i}`} className="flex-shrink-0 w-16 h-12 sm:w-20 sm:h-14 lg:w-24 lg:h-16 bg-white rounded-lg shadow-soft flex items-center justify-center p-2">
                <img 
                  src={logo}
                  alt={`Client ${i + 1}`}
                  className="w-full h-full object-contain rounded opacity-60"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll {
            animation: scroll 20s linear infinite;
          }
        `
      }} />
    </section>
  );
};

export default StatsSection;