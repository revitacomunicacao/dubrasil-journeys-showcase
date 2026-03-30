import { Shield, Clock, FileCheck, TrendingUp } from "lucide-react";

const benefits = [
  { icon: Shield, title: "Segurança Jurídica", desc: "Conformidade com CLT, portarias MTE e convenções coletivas" },
  { icon: Clock, title: "Menos Retrabalho", desc: "Processos padronizados que eliminam ajustes manuais recorrentes" },
  { icon: FileCheck, title: "Controle Total", desc: "Visibilidade completa de jornadas, acessos e identificações" },
  { icon: TrendingUp, title: "Eficiência Operacional", desc: "Rotinas automatizadas que liberam tempo do seu time" },
];

const PainSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Menos risco. Menos ajuste.{" "}
            <span className="text-secondary">Mais rotina e controle.</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Nosso trabalho começa pelo processo — não pelo sistema. Antes de qualquer implantação, 
            entendemos como sua operação funciona e desenhamos a solução certa para padronizar, 
            automatizar e proteger sua empresa.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((item, i) => (
            <div
              key={i}
              className="bg-card rounded-xl p-6 shadow-md border border-border hover:shadow-lg transition-shadow group"
            >
              <div className="w-14 h-14 rounded-lg bg-secondary/10 flex items-center justify-center mb-5 group-hover:bg-secondary/20 transition-colors">
                <item.icon className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainSection;
