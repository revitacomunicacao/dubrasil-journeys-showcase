import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { ClipboardCheck, Fingerprint, ShieldCheck } from "lucide-react";
import SectionHeading from "@/components/jornadas/SectionHeading";
import bgDiferenciais from "@/assets/bgMenosRisco.jpeg";

const PainSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      id="diferenciais"
      className="relative overflow-hidden pt-20 pb-0 lg:pt-28 lg:pb-0 text-[#002147]"
    >
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: `url(${bgDiferenciais})` }}
      />
      <div className="absolute inset-0 bg-background/40" />

      <div
        className={[
          "container mx-auto max-w-6xl relative z-10 px-6 transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
        ].join(" ")}
      >
        <SectionHeading
          eyebrow="O que a DuBrasil Serviços resolve"
          title={"Menos risco. Menos ajuste.\nMais rotina e controle."}
          description="Muitas empresas têm ferramenta, mas não têm processo, configuração correta e rotina estável. A DuBrasil Serviços entra para desenhar o cenário, padronizar regras e garantir execução, para você operar com segurança, evidências e previsibilidade."
        />

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="rounded-3xl border bg-card p-7">
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-5 w-5 text-primary" />
              <p className="font-semibold">Conformidade e evidências</p>
            </div>
            <p className="mt-3 text-xl text-muted-foreground">
              Padronização de regras e rastreabilidade para auditorias,
              fiscalizações e governança interna.
            </p>
          </div>

          <div className="rounded-3xl border bg-card p-7">
            <div className="flex items-center gap-3">
              <ClipboardCheck className="h-5 w-5 text-primary" />
              <p className="font-semibold">Rotina que fecha</p>
            </div>
            <p className="mt-3 text-xl text-muted-foreground">
              Menos retrabalho e menos ajuste manual com checklist, processo e
              acompanhamento nos ciclos críticos.
            </p>
          </div>

          <div className="rounded-3xl border bg-card p-7">
            <div className="flex items-center gap-3">
              <Fingerprint className="h-5 w-5 text-primary" />
              <p className="font-semibold">Execução assistida</p>
            </div>
            <p className="mt-3 text-xl text-muted-foreground">
              Implantação, configuração e treinamento por perfil para a
              operação rodar com previsibilidade.
            </p>
          </div>
        </div>

        {/* Solutions heading moved here to keep the same background */}
        <div id="solucoes" className="scroll-mt-28 mt-10">
          <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] bg-[#08284e] py-12">
            <div className="container mx-auto px-6 text-center max-w-3xl">
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white text-2xl font-medium mb-4">
                Nossas Soluções
              </span>
              <h2 id="solucoes-heading" className="font-heading text-3xl md:text-4xl font-bold text-white">
                Soluções completas para cada necessidade
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainSection;
