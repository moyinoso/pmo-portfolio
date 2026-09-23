import { ArrowUpRight } from "lucide-react";
import { links } from "@/data/links";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const places = [
  { label: "GitHub", note: "CODE & EXPERIMENTS", href: links.github },
  { label: "LinkedIn", note: "PROFESSIONAL HOME", href: links.linkedin },
  { label: "Medium", note: "WRITING, OCCASIONALLY", href: links.medium },
  { label: "DataSciencePortfol.io", note: "THE PROJECT VAULT", href: links.portfolio },
  { label: "Carrd", note: "THE OTHER ME", href: links.carrd },
];

export default function Elsewhere() {
  return (
    <section id="elsewhere" className="mx-auto max-w-shell px-6 py-24 md:px-10 md:py-32">
      <SectionHeading
        index="09"
        eyebrow="ELSEWHERE"
        title={
          <>
            No blog here{" "}
            <span className="italic text-brass">I write and build in other rooms.</span>
          </>
        }
      />

      <ul className="mt-14 border-t border-ink-line">
        {places.map((place, i) => {
          const inner = (
            <>
              <div className="flex items-baseline gap-6">
                <span className="font-mono text-[11px] text-brass">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-serif text-2xl tracking-tight transition-all duration-300 group-hover:translate-x-2 group-hover:italic md:text-4xl">
                  {place.label}
                </span>
              </div>
              <div className="flex items-center gap-5">
                <span className="hidden font-mono text-[10px] tracking-[0.2em] text-paper-dim sm:inline">
                  {place.href ? place.note : `${place.note} — SOON`}
                </span>
                <ArrowUpRight
                  size={22}
                  strokeWidth={1.5}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </div>
            </>
          );

          return (
            <Reveal key={place.label} delay={i * 60}>
              <li className="border-b border-ink-line">
                {place.href ? (
                  <a
                    href={place.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between gap-4 py-6 text-paper-dim transition-colors duration-300 hover:text-paper md:py-7"
                  >
                    {inner}
                  </a>
                ) : (
                  <span
                    aria-label={`${place.label} — link coming soon`}
                    className="group flex cursor-not-allowed items-center justify-between gap-4 py-6 text-paper-dim/40 md:py-7"
                  >
                    {inner}
                  </span>
                )}
              </li>
            </Reveal>
          );
        })}
      </ul>
    </section>
  );
}
