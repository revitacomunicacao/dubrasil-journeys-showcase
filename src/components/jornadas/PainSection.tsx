import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import SectionHeading from "@/components/jornadas/SectionHeading";
import iconConformidade from "@/assets/conformidade.png";
import iconRotina from "@/assets/Rotina.png";
import iconExecucao from "@/assets/execucao.png";
import type { HomePageContent } from "@/lib/cms/types";

const cardIcons = [iconConformidade, iconRotina, iconExecucao];

interface PainSectionProps {
  content: HomePageContent["pain"];
}

const PainSection = ({ content }: PainSectionProps) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      id="diferenciais"
      className="relative overflow-hidden pt-20 pb-0 max-lg:pt-14 lg:pt-28 lg:pb-0 text-[#002147]"
    >
      <div
        className="absolute inset-0 bg-center bg-cover max-lg:bg-[center_30%] max-md:bg-[center_25%]"
        style={{ backgroundImage: `url(${content.backgroundImage})` }}
      />
      <div className="absolute inset-0 bg-background/40 max-lg:bg-background/55 max-md:bg-background/60" />

      <div
        className={[
          "container mx-auto max-w-6xl relative z-10 px-6 max-lg:px-4 transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
        ].join(" ")}
      >
        <SectionHeading
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
        />

        <div className="mt-12 max-lg:mt-8 grid md:grid-cols-3 gap-6 max-lg:gap-4">
          {content.cards.map((card, index) => (
            <div key={card.title} className="rounded-3xl border bg-card p-7 max-lg:p-5">
              <div className="flex items-center gap-3">
                {cardIcons[index] ? (
                  <img
                    src={cardIcons[index]}
                    alt=""
                    aria-hidden="true"
                    className="h-14 w-14 max-lg:h-11 max-lg:w-11 object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                ) : null}
                <p className="font-semibold">{card.title}</p>
              </div>
              <p className="mt-3 text-xl max-lg:text-base text-muted-foreground">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        <div id="solucoes" className="scroll-mt-28 mt-10 max-lg:mt-8">
          <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] bg-[#08284e] py-12 max-lg:py-8 max-md:py-7">
            <div className="container mx-auto px-6 max-lg:px-4 text-center max-w-3xl">
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white text-2xl max-lg:text-lg font-medium mb-4 max-lg:mb-3">
                {content.solutionsEyebrow}
              </span>
              <h2
                id="solucoes-heading"
                className="font-heading text-3xl md:text-4xl max-lg:text-2xl max-lg:md:text-3xl font-bold text-white"
              >
                {content.solutionsTitle}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainSection;
