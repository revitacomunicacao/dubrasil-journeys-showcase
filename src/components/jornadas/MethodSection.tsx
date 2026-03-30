import { Search, PenTool, Rocket, BarChart3 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const steps = [
  { icon: Search, title: "Diagnóstico", desc: "Mapeamos processos, sistemas e gaps para entender sua realidade operacional." },
  { icon: PenTool, title: "Desenho", desc: "Projetamos a solução ideal com regras, fluxos e integrações sob medida." },
  { icon: Rocket, title: "Implantação", desc: "Configuramos, testamos e treinamos — com acompanhamento em cada etapa." },
  { icon: BarChart3, title: "Acompanhamento", desc: "Monitoramos indicadores e ajustamos continuamente para manter a excelência." },
];

const MethodSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-muted/50">
      <div className={`container mx-auto px-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
            Método DuBrasil
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Como entregamos resultados
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          <div className="hidden lg:block absolute top-[52px] left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-secondary/30 via-secondary to-secondary/30" />
          {steps.map((step, i) => (
            <div key={i} className="relative text-center">
              <div className="w-[104px] h-[104px] rounded-full bg-card border-4 border-secondary/30 flex items-center justify-center mx-auto mb-6 relative z-10 shadow-lg">
                <step.icon className="w-10 h-10 text-secondary" />
              </div>
              <span className="text-secondary font-heading font-bold text-sm mb-2 block">
                Etapa {i + 1}
              </span>
              <h3 className="font-heading text-xl font-bold text-foreground mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodSection;
