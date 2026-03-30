import { CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SolutionCardProps {
  title: string;
  description: string;
  benefits: string[];
  image: string;
  ctaText?: string;
  ctaLink?: string;
  reversed?: boolean;
}

const SolutionCard = ({
  title,
  description,
  benefits,
  image,
  ctaText = "Quero saber mais",
  ctaLink = "#contato",
  reversed = false,
}: SolutionCardProps) => {
  return (
    <div className={`flex flex-col ${reversed ? "lg:flex-row-reverse" : "lg:flex-row"} rounded-2xl overflow-hidden shadow-xl bg-card border border-border`}>
      <div className="lg:w-1/2 relative min-h-[300px] lg:min-h-[450px]">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dubrasil-navy/60 to-transparent" />
      </div>
      <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
        <h3 className="font-heading text-2xl lg:text-3xl font-bold text-foreground mb-4">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed mb-6">
          {description}
        </p>
        <ul className="space-y-3 mb-8">
          {benefits.map((benefit, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
              <span className="text-foreground text-sm">{benefit}</span>
            </li>
          ))}
        </ul>
        <a href={ctaLink}>
          <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 w-fit gap-2">
            {ctaText}
            <ArrowRight className="w-4 h-4" />
          </Button>
        </a>
      </div>
    </div>
  );
};

export default SolutionCard;
