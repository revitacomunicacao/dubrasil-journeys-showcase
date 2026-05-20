import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { renderHeroTitle } from "@/lib/cms/render-utils";
import type { HomePageContent } from "@/lib/cms/types";

interface HeroSectionProps {
  content: HomePageContent["banner"];
}

const HeroSection = ({ content }: HeroSectionProps) => {
  return (
    <section className="relative min-h-[90vh] max-lg:min-h-[85dvh] flex items-center overflow-hidden">
      <img
        src={content.backgroundImage}
        alt="Equipe DuBrasil trabalhando com tecnologia"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover lg:object-center max-lg:object-right max-md:object-right"
      />
      <div
        className="absolute inset-0 lg:bg-transparent max-lg:bg-black/70 max-md:bg-black/75"
        aria-hidden="true"
      />
      <div className="relative z-10 container mx-auto px-6 max-lg:px-4 pt-28 md:pt-32 max-lg:pt-24 max-md:pt-20 pb-20 max-lg:pb-14">
        <div className="max-w-2xl animate-fade-in">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl max-lg:text-3xl max-lg:md:text-4xl font-bold text-white leading-tight mb-6 max-lg:mb-4">
            {renderHeroTitle(content.title)}
          </h1>
          <p className="text-xl max-lg:text-base text-white/80 leading-relaxed mb-8 max-lg:mb-6 max-w-xl">
            {content.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <a href={content.button.link}>
              <Button
                size="lg"
                className="bg-[#094385] text-white hover:bg-[#094385]/90 gap-2 text-xl max-lg:text-base max-lg:px-6 max-lg:h-auto max-lg:whitespace-normal max-lg:py-3 w-full sm:w-auto"
              >
                {content.button.texto}
                <ArrowRight className="w-5 h-5" />
              </Button>
            </a>
          </div>
          <p className="text-white/50 text-xl max-lg:text-base">{content.footerText}</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
