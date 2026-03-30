import { MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-jornadas.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <img
        src={heroImage}
        alt="Equipe DuBrasil trabalhando com tecnologia"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-dubrasil-navy/95 via-dubrasil-navy/80 to-dubrasil-navy/50" />
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-2xl">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/20 text-secondary text-sm font-medium mb-6 border border-secondary/30">
            DuBrasil Serviços
          </span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Jornadas, Acessos e Identificação com{" "}
            <span className="text-secondary">Segurança Jurídica</span>
          </h1>
          <p className="text-lg text-white/80 leading-relaxed mb-8 max-w-xl">
            Implantamos, configuramos e operamos sistemas de controle de ponto, gestão de jornadas, 
            controle de acesso e identificação corporativa — com foco em conformidade legal e eficiência operacional.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <a href="https://wa.me/5500000000000" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 gap-2 text-base px-8">
                <MessageCircle className="w-5 h-5" />
                Quero um diagnóstico agora
              </Button>
            </a>
            <a href="#solucoes">
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 gap-2 text-base">
                Quero ser direcionado para a solução certa
                <ArrowRight className="w-5 h-5" />
              </Button>
            </a>
          </div>
          <p className="text-white/50 text-sm">
            Resposta rápida • Atendimento humano • Sem compromisso
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
