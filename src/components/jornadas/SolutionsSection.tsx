import SolutionCard from "./SolutionCard";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import solucaoPonto from "@/assets/solucao-ponto.jpg";
import solucaoAgro from "@/assets/solucao-agro.jpg";
import solucaoAcesso from "@/assets/solucao-acesso.jpg";
import solucaoIdentificacao from "@/assets/solucao-identificacao.jpg";

const solutions = [
  {
    title: "Controle de Ponto",
    description:
      "Implantação e gestão completa de sistemas de ponto eletrônico, com parametrização de regras, integração com folha e conformidade legal total.",
    benefits: [
      "Implantação e configuração de REP e ponto alternativo",
      "Parametrização de escalas, turnos e regras de jornada",
      "Integração com folha de pagamento e eSocial",
      "Tratamento de exceções e gestão de banco de horas",
    ],
    image: solucaoPonto,
  },
  {
    title: "Gestão de Jornadas no Agro",
    description:
      "Soluções específicas para o agronegócio: controle de jornada em campo, gestão de safristas, adequação a convenções coletivas rurais e operação em áreas remotas.",
    benefits: [
      "Ponto em áreas remotas com sincronização offline",
      "Gestão de jornadas de safristas e trabalhadores rurais",
      "Conformidade com convenções coletivas do setor",
      "Relatórios específicos para operação agrícola",
    ],
    image: solucaoAgro,
  },
  {
    title: "Controle de Acesso",
    description:
      "Projeto, implantação e operação de sistemas de controle de acesso físico — catracas, cancelas, leitores biométricos e integração com ponto.",
    benefits: [
      "Projeto de fluxo de acesso e segurança patrimonial",
      "Catracas, cancelas e leitores biométricos",
      "Integração completa com sistema de ponto",
      "Gestão de visitantes e prestadores de serviço",
    ],
    image: solucaoAcesso,
  },
  {
    title: "Identificação Corporativa",
    description:
      "Produção e gestão de crachás corporativos com tecnologia embarcada — proximidade, código de barras, QR Code — integrados aos sistemas de ponto e acesso.",
    benefits: [
      "Crachás com tecnologia de proximidade e QR Code",
      "Layout personalizado com identidade da empresa",
      "Integração com ponto e controle de acesso",
      "Gestão de emissão, substituição e desativação",
    ],
    image: solucaoIdentificacao,
  },
];

const SolutionsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="solucoes">
      <div
        ref={ref}
        className={`text-center max-w-3xl mx-auto py-16 px-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      >
        <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
          Nossas Soluções
        </span>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
          Soluções completas para cada necessidade
        </h2>
      </div>
      <div>
        {solutions.map((solution, i) => (
          <SolutionCard key={i} {...solution} />
        ))}
      </div>
    </section>
  );
};

export default SolutionsSection;
