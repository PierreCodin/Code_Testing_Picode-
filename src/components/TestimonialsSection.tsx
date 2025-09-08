
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import marieImg from "@/assets/testimonial-marie.jpg";
import sophieImg from "@/assets/testimonial-sophie.jpg";
import jeromeImg from "@/assets/testimonial-jerome.jpg";

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const testimonials = [
    {
      name: "Marie D.",
      business: "Gérant, Le Bistrot Parisien",
      text: "Nos clients laissent enfin des avis sans qu'on ait besoin de leur demander. Et en plus, ils reviennent pour tenter leur chance à la roue ! RevWheel est un vrai game-changer.",
      image: marieImg
    },
    {
      name: "Sophie L.",
      business: "Directrice, Café de la Plage",
      text: "Notre score Google a explosé en quelques semaines ! Le système de récompenses motive vraiment les clients, et nous avons récupéré des centaines d'emails pour nos campagnes marketing.",
      image: sophieImg
    },
    {
      name: "Jérôme M.",
      business: "Gérant, Burger Avenue",
      text: "Grâce à RevWheel, nous avons triplé nos avis Google en un mois ! Les clients adorent le concept du jeu et reviennent plus souvent. Simple et efficace !",
      image: jeromeImg
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        setIsTransitioning(false);
      }, 250);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      setIsTransitioning(false);
    }, 250);
  };

  const prevTestimonial = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setIsTransitioning(false);
    }, 250);
  };

  return (
    <section className="py-16 lg:py-24 px-4 lg:px-6 bg-gradient-to-br from-primary/5 to-primary/10">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="max-md:text-2xl max-md:font-bold max-md:text-center max-md:mb-4 text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4">
            Ils nous font <span className="text-primary">confiance</span>
          </h2>
          <p className="max-md:text-base max-md:font-normal max-md:leading-6 max-md:text-center max-md:px-4 text-muted-foreground hidden max-md:block">
            Découvrez leurs retours d'expérience
          </p>
        </div>

        <div className="relative px-4 lg:px-24">
          <div className={`max-md:w-11/12 max-md:mx-auto max-md:rounded-xl max-md:shadow-soft max-md:p-6 bg-white rounded-2xl shadow-card p-6 lg:p-8 text-center max-w-3xl mx-auto transition-all duration-500 ease-in-out ${
            isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
          }`}>
            <div className="mb-4">
              <img 
                src={testimonials[currentIndex].image} 
                alt={testimonials[currentIndex].name}
                className="max-md:w-13 max-md:h-13 w-12 h-12 lg:w-14 lg:h-14 rounded-full mx-auto object-cover"
              />
            </div>
            
            {/* Stars */}
            <div className="flex justify-center mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="max-md:w-5 max-md:h-5 w-4 h-4 text-yellow-400 fill-current" />
              ))}
            </div>
            
            <blockquote className="max-md:text-sm max-md:leading-6 max-md:text-center max-md:mb-4 text-base lg:text-lg text-foreground leading-relaxed mb-4 italic px-2 lg:px-4">
              "{testimonials[currentIndex].text}"
            </blockquote>
            
            <div className="max-md:text-sm max-md:font-medium max-md:text-center text-primary font-semibold text-sm">
              — {testimonials[currentIndex].name}
            </div>
            <div className="max-md:text-xs max-md:text-center text-muted-foreground text-xs">
              {testimonials[currentIndex].business}
            </div>
          </div>

          {/* Navigation buttons - hidden on mobile */}
          <button 
            onClick={prevTestimonial}
            className="hidden lg:block absolute -left-12 top-1/2 transform -translate-y-1/2 bg-white shadow-soft rounded-full p-3 hover:bg-primary/10 transition-smooth z-10"
          >
            <ChevronLeft className="w-6 h-6 text-primary" />
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="hidden lg:block absolute -right-12 top-1/2 transform -translate-y-1/2 bg-white shadow-soft rounded-full p-3 hover:bg-primary/10 transition-smooth z-10"
          >
            <ChevronRight className="w-6 h-6 text-primary" />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsTransitioning(true);
                  setTimeout(() => {
                    setCurrentIndex(index);
                    setIsTransitioning(false);
                  }, 250);
                }}
                className={`w-3 h-3 lg:w-2 lg:h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-primary' : 'bg-primary/30'
                }`}
              />
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default TestimonialsSection;
