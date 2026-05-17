import { CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

interface SolutionCardProps {
  title: string;
  description: string;
  benefits: string[];
  image: string;
  ctaText?: string;
  ctaLink?: string;
  align?: "left" | "right";
}

const SolutionCard = ({
  title,
  description,
  benefits,
  image,
  ctaText = "Quero saber mais",
  ctaLink = "#contato",
  align = "left",
}: SolutionCardProps) => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const isLeft = align === "left";

  return (
    <section ref={ref} className="relative min-h-screen max-lg:min-h-0 max-lg:min-h-[75dvh] flex items-center overflow-hidden w-full">
      <img
        src={image}
        alt={title}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover object-center max-lg:object-[center_35%] max-md:object-[center_30%]"
      />
      {/* Overlay only on the content half (full width on mobile). */}
      <div
        className={[
          "absolute inset-y-0 w-full lg:w-1/2 bg-dubrasil-navy/80 max-lg:bg-dubrasil-navy/88",
          isLeft ? "left-0" : "right-0",
        ].join(" ")}
      />

      <div className="relative z-10 w-full">
        <div className="mx-auto max-w-6xl px-6 max-lg:px-4 py-16 max-lg:py-12 max-md:py-10">
          <div className={["flex", isLeft ? "justify-start" : "justify-end"].join(" ")}>
            <div className="w-full lg:w-1/2 lg:min-h-screen lg:flex lg:items-center">
              <div
                className={[
                  "w-full",
                  "transition-all duration-700 delay-100",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
                ].join(" ")}
              >
                <div className={["max-w-xl", isLeft ? "lg:pr-10" : "lg:pl-10"].join(" ")}>
                  <h3 className="font-heading text-3xl lg:text-4xl max-lg:text-2xl font-bold text-white mb-4 max-lg:mb-3">
                    {title}
                  </h3>
                  <p className="text-white/80 leading-relaxed mb-8 max-lg:mb-6 text-xl max-lg:text-base">
                    {description}
                  </p>
                  <ul className="space-y-3 mb-8 text-left">
                    {benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#094385] shrink-0 mt-0.5" />
                        <span className="text-white/90 text-xl max-lg:text-base">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <div>
                    <a href={ctaLink}>
                      <Button className="bg-[#094385] text-white hover:bg-[#094385]/90 gap-2 text-xl max-lg:text-base max-lg:w-full sm:max-lg:w-auto">
                        {ctaText}
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionCard;
