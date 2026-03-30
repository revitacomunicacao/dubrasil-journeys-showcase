import { Quote } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const testimonials = [
  {
    quote: "A DuBrasil transformou completamente nosso controle de ponto. Saímos de planilhas manuais para um sistema integrado que nos dá total segurança jurídica.",
    name: "Maria Fernanda",
    role: "Gerente de RH",
    segment: "Indústria Alimentícia",
  },
  {
    quote: "No agro, o desafio é enorme. A equipe da DuBrasil entendeu nossas particularidades e entregou uma solução que funciona até em áreas sem conexão.",
    name: "Carlos Eduardo",
    role: "Diretor de Operações",
    segment: "Agronegócio",
  },
  {
    quote: "O BPO de fechamento nos liberou para focar no estratégico. A qualidade e a pontualidade são impecáveis.",
    name: "Ana Paula",
    role: "Coordenadora de DP",
    segment: "Rede de Varejo",
  },
];

const TestimonialsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 lg:py-28">
      <div className={`container mx-auto px-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Quem confia na DuBrasil
          </h2>
          <p className="text-muted-foreground text-lg">
            Empresas de diversos segmentos confiam no nosso trabalho para operar com conformidade e eficiência.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, i) => (
            <div
              key={i}
              className="bg-card rounded-xl p-8 border border-border shadow-md relative"
            >
              <Quote className="w-10 h-10 text-secondary/20 absolute top-6 right-6" />
              <p className="text-foreground leading-relaxed mb-6 italic">"{item.quote}"</p>
              <div className="border-t border-border pt-4">
                <p className="font-heading font-bold text-foreground">{item.name}</p>
                <p className="text-muted-foreground text-sm">{item.role}</p>
                <p className="text-secondary text-sm font-medium">{item.segment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
