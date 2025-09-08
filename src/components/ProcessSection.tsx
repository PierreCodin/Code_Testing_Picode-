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
    <section className="py-16 lg:py-24 px-4 lg:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-6">
            Faites exploser vos avis Google{" "}
            <span className="text-primary">sans rien faire</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center space-y-4 lg:space-y-6 group">
              {/* Espace réservé sans icône */}
              <div className="flex justify-center mb-4 lg:mb-6">
                <div className="w-16 h-16 lg:w-20 lg:h-20"></div>
              </div>
              
              {/* Numéro de l'étape */}
              <div className="relative">
                <div className="w-12 h-12 lg:w-16 lg:h-16 mx-auto gradient-hero rounded-full flex items-center justify-center text-white text-lg lg:text-xl font-bold shadow-button hover:scale-[1.32] transition-all duration-300 cursor-pointer">
                  {step.number}
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-full w-full h-0.5 bg-gradient-to-r from-primary to-transparent opacity-30"></div>
                )}
              </div>
              
              <h3 className="text-lg lg:text-xl font-semibold text-foreground px-2">
                {step.title}
              </h3>
              
              <p className="text-muted-foreground text-sm lg:text-base px-2">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="hero" size="xl" className="hover:bg-white hover:text-primary transition-smooth w-full sm:w-auto">
            7 jours gratuits
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;