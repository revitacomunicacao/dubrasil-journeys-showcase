import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/fullbanner JORNADAS-DBS.jpeg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] max-lg:min-h-[85dvh] flex items-center overflow-hidden">
      <img
        src={heroImage}
        alt="Equipe DuBrasil trabalhando com tecnologia"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover object-center max-lg:object-[center_25%] max-md:object-[center_20%]"
      />
      <div
        className="absolute inset-0 max-lg:bg-black/45 max-md:bg-black/50"
        aria-hidden="true"
      />
      <div className="relative z-10 container mx-auto px-6 max-lg:px-4 pt-28 md:pt-32 max-lg:pt-24 max-md:pt-20 pb-20 max-lg:pb-14">
        <div className="max-w-2xl animate-fade-in">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl max-lg:text-3xl max-lg:md:text-4xl font-bold text-white leading-tight mb-6 max-lg:mb-4">
            Jornadas, Acessos e Identificação com{" "}
            <span className="text-[#094385]">Segurança Jurídica</span>
          </h1>
          <p className="text-xl max-lg:text-base text-white/80 leading-relaxed mb-8 max-lg:mb-6 max-w-xl">
            Implantamos, configuramos e operamos sistemas de controle de ponto, gestão de jornadas, 
            controle de acesso e identificação corporativa, com foco em conformidade legal e eficiência operacional.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <a href="#contato">
              <Button
                size="lg"
                className="bg-[#094385] text-white hover:bg-[#094385]/90 gap-2 text-xl max-lg:text-base max-lg:px-6 max-lg:h-auto max-lg:whitespace-normal max-lg:py-3 w-full sm:w-auto"
              >
                Quero ser direcionado para a solução certa
                <ArrowRight className="w-5 h-5" />
              </Button>
            </a>
          </div>
          <p className="text-white/50 text-xl max-lg:text-base">
            Resposta rápida • Atendimento humano • Sem compromisso
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
