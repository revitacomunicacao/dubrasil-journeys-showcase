import { useEffect, useState } from "react";
import { ClipboardCheck, Headphones, Calculator, Settings, Monitor } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import bgSuporte from "@/assets/bgsuporte.jpeg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { CarouselApi } from "@/components/ui/carousel";

const services = [
  {
    icon: ClipboardCheck,
    title: "Auditoria Técnica",
    desc: "Revisão completa de processos, parametrizações e conformidade dos sistemas de ponto e acesso.",
  },
  {
    icon: Headphones,
    title: "Suporte Especializado",
    desc: "Equipe dedicada para atendimento de chamados, dúvidas operacionais e suporte técnico contínuo.",
  },
  {
    icon: Calculator,
    title: "Fechamento Operacional",
    desc: "Processamento mensal de ponto com tratamento de exceções, conferência e geração de relatórios.",
  },
  {
    icon: Settings,
    title: "BPO de Fechamento",
    desc: "Terceirização completa do fechamento de ponto, da coleta ao envio para folha de pagamento.",
  },
  {
    icon: Monitor,
    title: "Portal do Cliente",
    desc: "Plataforma online para acompanhamento de chamados, relatórios e indicadores em tempo real.",
  },
];

const ServicesSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;

    let paused = false;

    const onMouseEnter = () => {
      paused = true;
    };
    const onMouseLeave = () => {
      paused = false;
    };
    const root = api.rootNode();
    root.addEventListener("mouseenter", onMouseEnter);
    root.addEventListener("mouseleave", onMouseLeave);

    const interval = window.setInterval(() => {
      if (!paused) api.scrollNext();
    }, 5000);

    return () => {
      window.clearInterval(interval);
      root.removeEventListener("mouseenter", onMouseEnter);
      root.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [api]);

  return (
    <section
      ref={ref}
      id="servicos"
      className="relative py-20 lg:py-28 overflow-hidden text-primary-foreground scroll-mt-28"
    >
      <img
        src={bgSuporte}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-primary/65" />
      <div className={`relative z-10 container mx-auto px-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Serviços que colocam sua operação no controle
          </h2>
          <p className="text-primary-foreground/70 text-lg">
            Serviços recorrentes e projetos sob medida para manter sua operação funcionando com precisão.
          </p>
        </div>
        <Carousel
          opts={{ align: "start", loop: true }}
          setApi={setApi}
          className="relative max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-6">
            {services.map((service, i) => (
              <CarouselItem
                key={i}
                className="pl-6 basis-[85%] sm:basis-1/2 lg:basis-1/3"
              >
                <div className="bg-white/90 backdrop-blur-sm border border-white/30 rounded-xl p-6 hover:bg-white/80 transition-colors group shadow-sm h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center shrink-0">
                      <service.icon className="w-6 h-6 text-secondary" />
                    </div>
                    <h3 className="font-heading text-lg font-bold text-dubrasil-navy leading-tight">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-dubrasil-navy/70 text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="hidden md:inline-flex bg-white/70 hover:bg-white/90 border-white/40" />
          <CarouselNext className="hidden md:inline-flex bg-white/70 hover:bg-white/90 border-white/40" />
        </Carousel>
      </div>
    </section>
  );
};

export default ServicesSection;
