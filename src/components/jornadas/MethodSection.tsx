import { Search, PenTool, Rocket, BarChart3 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import bgImage from "@/assets/background-como-apresentamos.jpeg";

const steps = [
  { icon: Search, title: "Diagnóstico", desc: "Mapeamos processos, sistemas e gaps para entender sua realidade operacional." },
  { icon: PenTool, title: "Planejamento", desc: "Projetamos a solução ideal com regras, fluxos e integrações sob medida." },
  { icon: Rocket, title: "Implantação", desc: "Configuramos, testamos e treinamos, com acompanhamento em cada etapa." },
  { icon: BarChart3, title: "Acompanhamento", desc: "Monitoramos indicadores e ajustamos continuamente para manter a excelência." },
];

const MethodSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      id="metodo"
      className="relative py-20 lg:py-28 overflow-hidden scroll-mt-28"
    >
      <img
        src={bgImage}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0" />
      <div className={`relative z-10 container mx-auto px-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/15 text-secondary text-2xl font-medium mb-4 drop-shadow-sm">
            Método DuBrasil
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-dubrasil-navy drop-shadow-sm">
            Como entregamos resultados
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          <div className="hidden lg:block absolute top-[52px] left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-secondary/30 via-secondary to-secondary/30" />
          {steps.map((step, i) => (
            <div key={i} className="relative text-center">
              <div className="w-[104px] h-[104px] rounded-full bg-foreground/90 border-4 border-secondary/30 flex items-center justify-center mx-auto mb-6 relative z-10">
                <step.icon className="w-12 h-12 text-secondary" />
              </div>
              <span className="text-secondary font-heading font-bold text-lg mb-2 block drop-shadow-sm">
                Etapa {i + 1}
              </span>
              <h3 className="font-heading text-xl font-bold text-dubrasil-navy mb-2 drop-shadow-sm">
                {step.title}
              </h3>
              <p className="text-dubrasil-navy/80 text-lg leading-relaxed drop-shadow-sm">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodSection;
