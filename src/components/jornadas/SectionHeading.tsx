interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

const SectionHeading = ({ eyebrow, title, description }: SectionHeadingProps) => {
  const titleLines = title.split("\n");

  return (
    <div className="text-center max-w-3xl mx-auto">
      {eyebrow ? (
        <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
          {eyebrow}
        </span>
      ) : null}

      <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground whitespace-pre-line">
        {titleLines.map((line, i) => (
          <span key={i}>
            {line}
            {i < titleLines.length - 1 ? <br /> : null}
          </span>
        ))}
      </h2>

      {description ? (
        <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
          {description}
        </p>
      ) : null}
    </div>
  );
};

export default SectionHeading;

