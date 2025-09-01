import { Button } from "@/components/ui/button";
import step1Icon from "@/assets/process-step-1.png";
import step2Icon from "@/assets/process-step-2.png";
import step3Icon from "@/assets/process-step-3.png";
import step4Icon from "@/assets/process-step-4.png";

const ProcessSection = () => {
  const steps = [
    {
      number: "1",
      title: "Configurez votre roue",
      description: "on vous génère automatiquement une affiche.",
      icon: step1Icon
    },
    {
      number: "2", 
      title: "Exposez l'affiche QR Code",
      description: "à portée de vos clients : comptoir, tables, WC.",
      icon: step2Icon
    },
    {
      number: "3",
      title: "Laissez vos clients scanner", 
      description: "un avis laissé, une chance de remporter un cadeau.",
      icon: step3Icon
    },
    {
      number: "4",
      title: "Devancez vos concurrents",
      description: "Google met en avant les commerces avec le plus d'avis.",
      icon: step4Icon
    }
  ];

  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Faites exploser vos avis Google{" "}
            <span className="text-primary">sans rien faire</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center space-y-6 group">
              <div className="relative">
                <div className="w-16 h-16 mx-auto gradient-hero rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-button group-hover:scale-125 transition-smooth">
                  {step.number}
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary to-transparent opacity-30"></div>
                )}
              </div>
              
              <h3 className="text-xl font-semibold text-foreground">
                {step.title}
              </h3>
              
              <p className="text-muted-foreground mb-4">
                {step.description}
              </p>
              
              {/* Illustration */}
              <div className="flex justify-center">
                 <img 
                   src={step.icon} 
                   alt={`Illustration ${step.title}`}
                   className="w-20 h-20 object-contain opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                 />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="hero" size="xl" className="hover:bg-white hover:text-primary transition-smooth">
            7 jours gratuits
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;