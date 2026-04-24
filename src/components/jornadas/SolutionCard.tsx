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
    <section ref={ref} className="relative min-h-[600px] flex items-center overflow-hidden w-full">
      <img
        src={image}
        alt={title}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Overlay only on the content half (full width on mobile). */}
      <div
        className={[
          "absolute inset-y-0 w-full lg:w-1/2 bg-dubrasil-navy/80",
          isLeft ? "left-0" : "right-0",
        ].join(" ")}
      />

      <div className="relative z-10 w-full">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className={["flex", isLeft ? "justify-start" : "justify-end"].join(" ")}>
            <div className="w-full lg:w-1/2 lg:min-h-[600px] lg:flex lg:items-center">
              <div
                className={[
                  "w-full",
                  "transition-all duration-700 delay-100",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
                ].join(" ")}
              >
                <div className={["max-w-xl", isLeft ? "lg:pr-10" : "lg:pl-10"].join(" ")}>
                  <h3 className="font-heading text-3xl lg:text-4xl font-bold text-white mb-4">
                    {title}
                  </h3>
                  <p className="text-white/80 leading-relaxed mb-8 text-xl">
                    {description}
                  </p>
                  <ul className="space-y-3 mb-8 text-left">
                    {benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#094385] shrink-0 mt-0.5" />
                        <span className="text-white/90 text-xl">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <div>
                    <a href={ctaLink}>
                      <Button className="bg-[#094385] text-white hover:bg-[#094385]/90 gap-2 text-xl">
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
