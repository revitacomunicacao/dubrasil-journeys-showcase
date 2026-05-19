import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { renderFaqAnswer } from "@/lib/cms/render-utils";
import type { HomePageContent } from "@/lib/cms/types";

interface FAQProps {
  content: HomePageContent["faq"];
}

const FAQ = ({ content }: FAQProps) => {
  return (
    <section id="faq" className="bg-gradient-to-br from-[#094385] to-[#08284e] py-24 sm:py-32 max-lg:py-16 max-lg:sm:py-20">
      <div className="mx-auto max-w-5xl px-6 max-lg:px-4">
        <div className="text-center mb-14 max-lg:mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/90 mb-4">
            {content.badge}
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl max-lg:text-2xl max-lg:sm:text-3xl text-white">
            {content.title}
          </h2>
          <p className="mt-4 text-lg max-lg:text-base text-white/75 max-w-2xl mx-auto">
            {content.description}
          </p>
        </div>

        <div className="rounded-3xl border border-border bg-card p-6 sm:p-8 max-lg:p-5 shadow-sm">
          <Accordion type="single" collapsible className="w-full">
            {content.items.map((faq, index) => (
              <AccordionItem key={faq.question} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-base sm:text-lg max-lg:text-[0.9375rem] hover:no-underline py-4 max-lg:py-3">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 text-base leading-relaxed">
                  {renderFaqAnswer(faq.answer)}
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
