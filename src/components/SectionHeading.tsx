import Reveal from "./Reveal";

type SectionHeadingProps = {
  index: string;
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
  className?: string;
};

export default function SectionHeading({
  index,
  eyebrow,
  title,
  intro,
  className = "",
}: SectionHeadingProps) {
  return (
    <Reveal className={`border-t border-ink-line pt-8 ${className}`}>
      <p className="font-mono text-[11px] tracking-[0.3em] text-brass">
        {index} <span className="text-paper-dim"> {eyebrow}</span>
      </p>
      <h2 className="mt-5 max-w-3xl font-serif text-3xl leading-[1.1] tracking-tight text-paper md:text-5xl">
        {title}
      </h2>
      {intro && (
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-paper-dim">
          {intro}
        </p>
      )}
    </Reveal>
  );
}
