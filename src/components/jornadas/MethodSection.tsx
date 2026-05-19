import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import type { HomePageContent } from "@/lib/cms/types";

interface MethodSectionProps {
  content: HomePageContent["method"];
}

const MethodSection = ({ content }: MethodSectionProps) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      id="metodo"
      className="relative py-20 max-lg:py-14 lg:py-28 lg:min-h-[850px] lg:flex lg:items-center overflow-hidden scroll-mt-28"
    >
      <img
        src={content.backgroundImage}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover object-center max-lg:object-[center_40%] max-md:object-[center_35%]"
      />
      <div className="absolute inset-0 bg-white/70 max-lg:bg-white/80 max-md:bg-white/85" />
      <div
        className={`relative z-10 w-full container mx-auto px-6 max-lg:px-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      >
        <div className="text-center max-w-3xl mx-auto mb-16 max-lg:mb-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#094385]/15 text-[#094385] text-2xl max-lg:text-lg font-medium mb-4 drop-shadow-sm">
            {content.badge}
          </span>
          <h2 className="font-heading text-3xl md:text-4xl max-lg:text-2xl max-lg:md:text-3xl font-bold text-dubrasil-navy drop-shadow-sm">
            {content.title}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-lg:gap-6 relative">
          <div className="hidden lg:block absolute top-[52px] left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-[#094385]/30 via-[#094385] to-[#094385]/30" />
          {content.steps.map((step) => (
            <div key={step.title} className="relative text-center">
              <div className="w-[104px] h-[104px] max-lg:w-20 max-lg:h-20 rounded-full bg-foreground/90 border-4 border-[#094385]/30 flex items-center justify-center mx-auto mb-6 max-lg:mb-4 relative z-10">
                <img
                  src={step.icon}
                  alt={step.title}
                  className="w-14 h-14 max-lg:w-10 max-lg:h-10 object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <span className="text-[#094385] font-heading font-bold text-xl max-lg:text-base mb-2 block drop-shadow-sm">
                {step.stageLabel}
              </span>
              <h3 className="font-heading text-xl max-lg:text-lg font-bold text-dubrasil-navy mb-2 drop-shadow-sm">
                {step.title}
              </h3>
              <p className="text-dubrasil-navy/80 text-xl max-lg:text-base leading-relaxed drop-shadow-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodSection;
