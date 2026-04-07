import SolutionCard from "./SolutionCard";
import solucaoPonto from "@/assets/ponto.jpeg";
import solucaoAgro from "@/assets/agro.jpeg";
import solucaoAcesso from "@/assets/controle.jpeg";
import solucaoIdentificacao from "@/assets/identificacao corporativa.jpeg";

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
      "Projeto, implantação e operação de sistemas de controle de acesso físico: catracas, cancelas, leitores biométricos e integração com ponto.",
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
      "Produção e gestão de crachás corporativos com tecnologia embarcada (proximidade, código de barras, QR Code), integrados aos sistemas de ponto e acesso.",
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
  return (
    <section aria-labelledby="solucoes-heading">
      <div>
        {solutions.map((solution, i) => (
          <SolutionCard
            key={i}
            {...solution}
            align={i % 2 === 0 ? "right" : "left"}
          />
        ))}
      </div>
    </section>
  );
};

export default SolutionsSection;
