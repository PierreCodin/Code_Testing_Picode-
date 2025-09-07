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
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 px-4">
            Obtenez des milliers d'Avis Google{" "}
            <span className="text-primary">sans rien faire</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-8 lg:mb-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center space-y-4 lg:space-y-6 group px-4">
              {/* Icône */}
              <div className="flex justify-center mb-4 lg:mb-6">
                <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                  <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-lg gradient-hero flex items-center justify-center">
                    <span className="text-white text-sm lg:text-base font-bold">{step.number}</span>
                  </div>
                </div>
              </div>
              
              <h3 className="text-lg lg:text-xl font-semibold text-foreground px-2">
                {step.title}
              </h3>
              
              <p className="text-sm lg:text-base text-muted-foreground px-2">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="hero" size="xl" className="hover:bg-white hover:text-primary transition-smooth w-full sm:w-auto">
            30 jours gratuits
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;