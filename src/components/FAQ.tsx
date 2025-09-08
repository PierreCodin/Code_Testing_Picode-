import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";

const FAQ = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const itemObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems(prev => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) itemObserver.observe(ref);
    });

    return () => itemObserver.disconnect();
  }, []);

  const faqs = [
    {
      question: "Cela fonctionnera-t-il pour mon entreprise (restaurant, salon de coiffure, boutique, café, hôtel, etc.) ?",
      answer: "Absolument ! RevWheel est conçu pour tout type d'entreprise locale ou de commerce de proximité. Tant que vos clients ont un téléphone, vous êtes prêt à démarrer."
    },
    {
      question: "Pourquoi choisir RevWheel ?",
      answer: `C'est simple : RevWheel vous aide à augmenter l'engagement, la fidélisation et la visibilité de vos clients avec un minimum d'effort.

Augmentez vos avis Google sans même avoir à demander — les clients laissent un avis pour accéder à la roue, ce qui améliore instantanément votre visibilité en ligne.

Faites revenir vos clients et attirez-en de nouveaux — chaque réclamation de prix génère du trafic : les clients reviennent pour récupérer leur gain, consomment à nouveau ou reviennent accompagnés. Résultat : plus de visites, plus de ventes, plus d'avis.

Collectez des données précieuses à chaque spin — emails, numéros de téléphone, profils clients... Idéal pour les recontacter lors de vos événements, promotions ou campagnes marketing et les inciter à revenir.

Tableau de bord analytique : visualisez vos performances en un coup d'œil et suivez les métriques clés (scans de QR codes, prix distribués, taux de rédemption, profils enrichis). Utilisez ces insights pour affiner vos stratégies marketing et commerciales.

Juste et sécurisé : un seul spin par client — pas de triche, pas d'abus.`
    },
    {
      question: "Comment l'installer ?",
      answer: "C'est super simple. Créez votre compte RevWheel, personnalisez votre roue à prix, et téléchargez votre QR code. Collez le QR code sur un poster dans votre magasin, et le tour est joué !"
    },
    {
      question: "Puis-je personnaliser la roue ?",
      answer: "Oui – entièrement. Vous pouvez modifier les couleurs, les prix, les probabilités de prix, le texte, le logo, et plus encore. Vous avez un contrôle total sur ce que dit votre roue et les récompenses que vous proposez."
    },
    {
      question: "Les clients doivent-ils installer une application ?",
      answer: "Non. Tout fonctionne directement dans le navigateur. Les clients n'ont qu'à scanner le QR code avec leur téléphone, et l'expérience RevWheel commence immédiatement."
    },
    {
      question: "Quelles données est-ce que je collecte ?",
      answer: "Vous collectez les prénoms, adresses e-mail et numéros de téléphone à chaque spin. Vous pouvez également enrichir ces données plus tard en ajoutant des informations comme des dates de naissance, des préférences, ou l'historique des visites pour améliorer vos campagnes marketing."
    },
    {
      question: "Puis-je suivre les résultats ?",
      answer: "Bien sûr. Votre tableau de bord affiche toutes les statistiques clés en un seul endroit. Vous pouvez suivre les scans des QR codes, les avis laissés, les prix distribués, les taux de rédemption, les comptes créés, et les profils clients enrichis. Vous pouvez également exporter vos données à tout moment pour créer des campagnes et ramener vos clients."
    },
    {
      question: "Est-ce que ça fonctionne sur mobile ?",
      answer: "Absolument. RevWheel est conçu en priorité pour mobile et fonctionne parfaitement sur les smartphones."
    },
    {
      question: "Les clients vont-ils faire tourner la roue à chaque fois ?",
      answer: "Non, chaque e-mail et numéro de téléphone ne peuvent être utilisés qu'une seule fois. Si un client essaie de tourner la roue avec les mêmes informations, cela ne fonctionnera pas. Cela garantit l'équité et la sécurité. Une fois qu'ils ont tourné la roue, ils doivent entrer leur prénom, et si nécessaire, vous pouvez toujours vérifier leur identité lorsqu'ils viennent réclamer leur prix."
    },
    {
      question: "Est-ce conforme au RGPD ?",
      answer: "Oui ! Nous veillons à ce que vous soyez conforme. Chaque client doit accepter vos conditions avant de soumettre ses informations."
    },
    {
      question: "Comment les clients réclament-ils leur prix ?",
      answer: "Lors de leur prochaine visite, les clients peuvent facilement réclamer leur lot. Il vous suffit de vous connecter à RevWheel, d'accéder à l'onglet \"Clients\", puis de retrouver la personne — soit directement, soit en effectuant une recherche par prénom, numéro de téléphone ou e-mail. Vous verrez immédiatement si un lot a été gagné, et lequel. Il ne vous reste plus qu'à le marquer comme \"récupéré\" grâce à notre fonctionnalité dédiée en un clic… et c'est terminé !"
    },
    {
      question: "Puis-je le traduire ?",
      answer: "Oui – à 100%. Tout le texte de l'application est modifiable, vous pouvez donc l'utiliser en français ou anglais."
    }
  ];

  return (
    <section ref={sectionRef} className="py-16 lg:py-24 px-4 lg:px-6 bg-white/30 backdrop-blur-sm relative overflow-hidden">
      {/* Animated shapes - hidden on mobile */}
      <div className="hidden lg:block absolute inset-0 opacity-20">
        <div className="absolute top-20 right-10 w-16 h-16 bg-primary/20 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-16 w-8 h-8 bg-primary/25 rotate-45 animate-bounce delay-2000"></div>
        <div className="absolute top-1/2 right-1/4 w-6 h-6 border-2 border-primary/30 rounded-full animate-spin" style={{animationDuration: '8s'}}></div>
        <div className="absolute bottom-1/4 right-1/3 w-4 h-4 bg-primary/35 animate-pulse delay-3000"></div>
      </div>

      <div className="container mx-auto max-w-4xl relative">
        <div className={`text-center mb-12 lg:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4">
            Questions <span className="text-primary">Fréquentes</span>
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground px-2">
            Tout ce que vous devez savoir sur RevWheel
          </p>
        </div>

        <div>
          <Accordion type="single" collapsible className="space-y-3 lg:space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                ref={(el) => (itemRefs.current[index] = el)}
                data-index={index}
                className={`transition-all duration-1000 ${
                  visibleItems.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <AccordionItem 
                  value={`item-${index}`}
                  className="bg-white/80 backdrop-blur-sm rounded-xl border border-primary/10 px-4 lg:px-6"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary transition-smooth text-sm lg:text-base py-4 lg:py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed whitespace-pre-line text-sm lg:text-base pb-4 lg:pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </div>
            ))}
          </Accordion>
        </div>

        <div className={`text-center mt-8 lg:mt-12 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} id="contact">
          <p className="text-muted-foreground mb-4 text-sm lg:text-base">
            Vous avez d'autres questions ?
          </p>
           <Button 
             variant="outline" 
             size="lg" 
             className="hover:bg-primary hover:text-white transition-smooth w-full sm:w-auto"
             onClick={() => window.location.href = 'mailto:revwheelpro@gmail.com?subject=Demande d\'information RevWheel&body=Bonjour, je souhaiterais avoir plus d\'informations sur RevWheel.'}
           >
             Contactez-nous
           </Button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;