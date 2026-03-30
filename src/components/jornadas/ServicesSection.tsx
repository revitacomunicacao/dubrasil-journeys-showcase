import { ClipboardCheck, Headphones, Calculator, Settings, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    desc: "Terceirização completa do fechamento de ponto — da coleta ao envio para folha de pagamento.",
  },
  {
    icon: Monitor,
    title: "Portal do Cliente",
    desc: "Plataforma online para acompanhamento de chamados, relatórios e indicadores em tempo real.",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Serviços que colocam sua operação no controle
          </h2>
          <p className="text-primary-foreground/70 text-lg">
            Serviços recorrentes e projetos sob medida para manter sua operação funcionando com precisão.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors group"
            >
              <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-heading text-lg font-bold mb-2">{service.title}</h3>
              <p className="text-primary-foreground/70 text-sm leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
