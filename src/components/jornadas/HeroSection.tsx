import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/fullbanner JORNADAS-DBS.jpeg";

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
      <div className="relative z-10 container mx-auto px-6 pt-28 md:pt-32 pb-20">
        <div className="max-w-2xl animate-fade-in">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Jornadas, Acessos e Identificação com{" "}
            <span className="text-[#094385]">Segurança Jurídica</span>
          </h1>
          <p className="text-xl text-white/80 leading-relaxed mb-8 max-w-xl">
            Implantamos, configuramos e operamos sistemas de controle de ponto, gestão de jornadas, 
            controle de acesso e identificação corporativa, com foco em conformidade legal e eficiência operacional.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <a href="#contato">
              <Button
                size="lg"
                className="bg-[#094385] text-white hover:bg-[#094385]/90 gap-2 text-xl px-8"
              >
                Quero ser direcionado para a solução certa
                <ArrowRight className="w-5 h-5" />
              </Button>
            </a>
          </div>
          <p className="text-white/50 text-xl">
            Resposta rápida • Atendimento humano • Sem compromisso
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
