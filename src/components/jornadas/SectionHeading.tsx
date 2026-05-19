interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

const SectionHeading = ({ eyebrow, title, description }: SectionHeadingProps) => {
  const titleLines = title.split(/\r?\n/);

  return (
    <div className="text-center max-w-3xl mx-auto max-lg:px-2">
      {eyebrow ? (
        <span className="inline-block px-4 py-1.5 rounded-full bg-[#094385]/10 text-[#094385] text-xl max-lg:text-base font-medium mb-4">
          {eyebrow}
        </span>
      ) : null}

      <h2 className="font-heading text-3xl md:text-4xl max-lg:text-2xl max-lg:md:text-3xl font-bold text-foreground whitespace-pre-line">
        {titleLines.map((line, i) => (
          <span key={i}>
            {line}
            {i < titleLines.length - 1 ? <br /> : null}
          </span>
        ))}
      </h2>

      {description ? (
        <p className="mt-4 text-muted-foreground text-xl max-lg:text-base leading-relaxed">
          {description}
        </p>
      ) : null}
    </div>
  );
};

export default SectionHeading;

