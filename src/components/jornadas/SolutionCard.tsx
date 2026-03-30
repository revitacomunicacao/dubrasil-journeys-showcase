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
}

const SolutionCard = ({
  title,
  description,
  benefits,
  image,
  ctaText = "Quero saber mais",
  ctaLink = "#contato",
}: SolutionCardProps) => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section ref={ref} className="relative min-h-[600px] flex items-center justify-center overflow-hidden w-full">
      <img
        src={image}
        alt={title}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-dubrasil-navy/75" />
      <div className={`relative z-10 w-full px-6 py-16 text-center max-w-3xl mx-auto transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <h3 className="font-heading text-3xl lg:text-4xl font-bold text-white mb-4">
          {title}
        </h3>
        <p className="text-white/80 leading-relaxed mb-8 text-lg">
          {description}
        </p>
        <ul className="space-y-3 mb-8 inline-block text-left">
          {benefits.map((benefit, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
              <span className="text-white/90 text-sm">{benefit}</span>
            </li>
          ))}
        </ul>
        <div>
          <a href={ctaLink}>
            <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 gap-2">
              {ctaText}
              <ArrowRight className="w-4 h-4" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SolutionCard;
