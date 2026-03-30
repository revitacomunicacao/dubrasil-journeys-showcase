import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const FinalCTA = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} id="contato" className="py-20 lg:py-28 bg-primary text-primary-foreground">
      <div className={`container mx-auto px-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              Pronto para colocar sua operação{" "}
              <span className="text-secondary">no controle?</span>
            </h2>
            <p className="text-primary-foreground/70 text-lg leading-relaxed mb-8">
              Fale com um especialista DuBrasil. Fazemos um diagnóstico gratuito da sua operação 
              e indicamos o melhor caminho para sua empresa.
            </p>
            <a href="https://wa.me/5500000000000" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 gap-2 text-lg px-10">
                <MessageCircle className="w-5 h-5" />
                Falar pelo WhatsApp
              </Button>
            </a>
            <p className="text-primary-foreground/40 text-sm mt-4">
              Resposta rápida • Atendimento humano • Sem compromisso
            </p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="font-heading text-xl font-bold mb-6">Ou preencha o formulário</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <Input placeholder="Seu nome" className="bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/40" />
              <Input placeholder="E-mail corporativo" type="email" className="bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/40" />
              <Input placeholder="Telefone / WhatsApp" className="bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/40" />
              <Input placeholder="Empresa" className="bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/40" />
              <Button type="submit" className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90">
                Solicitar diagnóstico gratuito
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
