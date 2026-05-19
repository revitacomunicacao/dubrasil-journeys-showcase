import { splitParagraphs } from "./field-utils";

const HERO_TITLE_HIGHLIGHT = "Segurança Jurídica";

export function renderHeroTitle(title: string) {
  const index = title.indexOf(HERO_TITLE_HIGHLIGHT);
  if (index === -1) return title;

  return (
    <>
      {title.slice(0, index)}
      <span className="text-[#094385]">{HERO_TITLE_HIGHLIGHT}</span>
    </>
  );
}

export function renderMultilineHeading(title: string) {
  const lines = title.split(/\r?\n/).filter(Boolean);
  if (lines.length <= 1) return title;

  return lines.map((line, index) => (
    <span key={index}>
      {index > 0 && <br className="max-lg:hidden" />}
      {index > 0 && <span className="max-lg:inline lg:hidden"> </span>}
      {line}
    </span>
  ));
}

export function renderFaqAnswer(answer: string) {
  const paragraphs = splitParagraphs(answer);
  if (paragraphs.length === 0) return null;

  return paragraphs.map((paragraph, index) => {
    const isLast = index === paragraphs.length - 1;
    const isTagline =
      isLast && paragraphs.length >= 3 && paragraph.length < 100;

    const className =
      index === 0
        ? undefined
        : isTagline
          ? "mt-4 text-sm font-medium text-foreground/80"
          : "mt-4";

    return (
      <p key={index} className={className}>
        {paragraph}
      </p>
    );
  });
}
