import { site } from "@/data/links";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const questions = [
  { q: "Why do public-service systems make simple things feel impossible?", tag: "PUBLIC SERVICES" },
  { q: "Could better data make a hospital queue predictable or unnecessary?", tag: "HEALTH SYSTEMS" },
  { q: "What would transport look like if it were designed around people, not vehicles?", tag: "TRANSPORTATION" },
  { q: "Why does waste stay invisible until it becomes a crisis?", tag: "WASTE MANAGEMENT" },
  { q: "What if government services were built with the care of good products?", tag: "GOVERNMENT" },
  { q: "How many broken processes stay broken simply because nobody mapped them?", tag: "INEFFICIENT PROCESSES" },
  { q: "Which problems in our technology ecosystems are we solving brilliantly and which are we ignoring?", tag: "TECH ECOSYSTEMS" },
];

export default function Problems() {
  return (
    <section id="notebook" className="mx-auto max-w-shell px-6 py-24 md:px-10 md:py-32">
      <SectionHeading
        index="05"
        eyebrow="PROBLEMS WORTH SOLVING"
        title={
          <>
            A notebook of questions{" "}
            <span className="italic text-brass">I keep returning to.</span>
          </>
        }
        intro="Not a list of services. These are open questions the kind I would happily spend a career on. Answers not guaranteed; curiosity guaranteed."
      />

      <Reveal className="mt-14">
        <div className="border border-ink-line bg-ink-soft">
          <div className="flex items-center justify-between border-b border-ink-line px-6 py-4 font-mono text-[10px] tracking-[0.25em] text-paper-dim md:px-8">
            <span>FIELD NOTES - VOL. 1</span>
            <span className="text-brass">OPEN QUESTIONS</span>
          </div>
          <ul>
            {questions.map((item, i) => (
              <li
                key={item.tag}
                className="group flex flex-col gap-2 border-b border-ink-line px-6 py-6 last:border-b-0 md:flex-row md:items-baseline md:justify-between md:px-8"
              >
                <p className="max-w-2xl font-serif text-lg italic leading-relaxed text-paper transition-colors duration-300 group-hover:text-brass md:text-xl">
                  &ldquo;{item.q}&rdquo;
                </p>
                <span className="shrink-0 font-mono text-[10px] tracking-[0.2em] text-paper-dim">
                  [{String(i + 1).padStart(2, "0")}] {item.tag}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      <Reveal delay={120}>
        <p className="mt-8 font-mono text-[10px] tracking-[0.22em] text-paper-dim">
          IF ONE OF THESE IS YOUR PROBLEM TOO {" "}
          <a 
            href="#contact"
            className="text-brass underline-offset-4 transition-colors hover:underline"
          >
            I&rsquo;D LIKE TO HEAR ABOUT IT
          </a>
        </p>
      </Reveal>
    </section>
  );
}
