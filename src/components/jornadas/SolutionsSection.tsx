import SolutionCard from "./SolutionCard";
import type { HomePageContent } from "@/lib/cms/types";

interface SolutionsSectionProps {
  solutions: HomePageContent["solutions"];
}

const SolutionsSection = ({ solutions }: SolutionsSectionProps) => {
  return (
    <section aria-labelledby="solucoes-heading">
      <div>
        {solutions.map((solution, i) => (
          <SolutionCard
            key={solution.title}
            title={solution.title}
            description={solution.description}
            benefits={solution.benefits}
            image={solution.image}
            ctaText={solution.button.texto}
            ctaLink={solution.button.link}
            align={i % 2 === 0 ? "right" : "left"}
          />
        ))}
      </div>
    </section>
  );
};

export default SolutionsSection;
