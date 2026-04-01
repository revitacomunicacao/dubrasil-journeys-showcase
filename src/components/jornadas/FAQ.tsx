import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Como o sistema de controle de jornada ajuda minha empresa?",
    answer: (
      <>
        <p>
          Ele organiza a rotina da equipe, automatiza cálculos de horas e traz
          clareza para a gestão da jornada.
        </p>
        <p className="mt-4">
          Com a configuração correta e o acompanhamento adequado, sua empresa
          reduz erros na folha, evita retrabalho e fortalece a segurança
          trabalhista.
        </p>
        <p className="mt-4">
          Mais do que registrar horários, a solução contribui para organização
          interna, previsibilidade financeira e tomada de decisão com base em
          dados confiáveis.
        </p>
      </>
    ),
  },
  {
    question: "Como funciona o suporte da DuBrasil Jornadas?",
    answer: (
      <>
        <p>Nosso suporte é consultivo e organizado.</p>
        <p className="mt-4">
          O atendimento começa com a abertura de chamado. A partir disso, nossa
          equipe analisa a demanda considerando a operação e o segmento da
          empresa.
        </p>
        <p className="mt-4">
          Cada orientação é direcionada conforme a realidade do cliente,
          garantindo clareza e segurança no uso do sistema.
        </p>
        <p className="mt-4">
          Também oferecemos serviços específicos para diferentes tipos de
          operação, sempre alinhados à necessidade de cada empresa.
        </p>
        <p className="mt-4 text-sm font-medium text-foreground/80">
          Suporte próximo, alinhado à sua rotina.
        </p>
      </>
    ),
  },
  {
    question: "O sistema é homologado conforme a Portaria 671?",
    answer: (
      <>
        <p>Sim. A solução atende às exigências da legislação vigente.</p>
        <p className="mt-4">
          Além disso, orientamos a empresa sobre como aplicar corretamente as
          regras internas para evitar riscos trabalhistas.
        </p>
        <p className="mt-4 text-sm font-medium text-foreground/80">
          Conformidade legal com orientação prática.
        </p>
      </>
    ),
  },
  {
    question: "Por que o controle de jornada é importante para a empresa?",
    answer: (
      <>
        <p>
          Porque ele organiza a rotina da equipe, traz clareza sobre horas
          trabalhadas e reduz riscos trabalhistas.
        </p>
        <p className="mt-4">
          Quando a jornada está estruturada, a empresa ganha previsibilidade na
          folha, evita retrabalho e fortalece sua segurança jurídica.
        </p>
        <p className="mt-4 text-sm font-medium text-foreground/80">
          Controle da jornada com segurança e organização.
        </p>
      </>
    ),
  },
  {
    question: "Preciso obrigatoriamente de relógio de ponto físico?",
    answer: (
      <>
        <p>Não.</p>
        <p className="mt-4">
          Trabalhamos com soluções modernas de ponto web que utilizam
          dispositivos eletrônicos, como tablets com registro facial ou
          aplicativo, conforme a necessidade da empresa.
        </p>
        <p className="mt-4">
          Indicamos o modelo mais adequado de acordo com a operação e a
          estrutura do cliente.
        </p>
        <p className="mt-4 text-sm font-medium text-foreground/80">
          Solução moderna, alinhada à realidade da sua empresa.
        </p>
      </>
    ),
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="bg-[#ededed] py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-4">
            FAQ
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-foreground">
            Perguntas frequentes
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Respostas rápidas sobre controle de jornada, suporte e conformidade
            para você implementar com segurança.
          </p>
        </div>

        <div className="rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-sm">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={faq.question} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-base sm:text-lg hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
