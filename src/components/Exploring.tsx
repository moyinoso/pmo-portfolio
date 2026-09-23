import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const pursuits = [
  {
    name: "Artificial Intelligence",
    status: "STUDYING",
    note: "How models behave, where they are genuinely useful, and where they quietly fail.",
  },
  {
    name: "Prompt Engineering",
    status: "PRACTISING",
    note: "Learning to ask precisely and to notice when an answer is confidently wrong.",
  },
  {
    name: "AI Automation",
    status: "BUILDING",
    note: "Small workflows where machines handle the repetitive so people can handle the important.",
  },
  {
    name: "AI Agents",
    status: "EXPERIMENTING",
    note: "Early experiments in giving models tools, memory and guardrails. Mostly small, mostly instructive.",
  },
  {
    name: "Data Science",
    status: "DEEPENING",
    note: "The craft underneath all of it from messy data to conclusions that can be defended.",
  },
  {
    name: "Machine Learning",
    status: "LEARNING",
    note: "From predicting churn to predicting the next move on a chessboard.",
  },
  {
    name: "Technology Systems",
    status: "MAPPING",
    note: "How the pieces data, software, people fit into systems that actually work.",
  },
];

export default function Exploring() {
  return (
    <section id="exploring" className="mx-auto max-w-shell px-6 py-24 md:px-10 md:py-32">
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              index="04"
              eyebrow="CURRENTLY EXPLORING"
              title={
                <>
                  What I&rsquo;m chasing{" "}
                  <span className="italic text-brass">right now.</span>
                </>
              }
              intro="An honest list, deliberately labelled. These are pursuits in progress not a claim of mastery. The status tags are the point."
            />
          </div>
        </div>

        <div className="lg:col-span-7">
          {pursuits.map((p, i) => (
            <Reveal key={p.name} delay={i * 60}>
              <div className="group flex flex-col gap-3 border-b border-ink-line py-6 first:border-t sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                <div className="flex items-baseline gap-5">
                  <span className="font-mono text-[11px] text-brass">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-serif text-xl tracking-tight text-paper transition-colors duration-300 group-hover:text-brass md:text-2xl">
                      {p.name}
                    </h3>
                    <p className="mt-2 max-w-md text-sm leading-relaxed text-paper-dim">
                      {p.note}
                    </p>
                  </div>
                </div>
                <span className="shrink-0 border border-brass/40 px-2.5 py-1 font-mono text-[10px] tracking-[0.2em] text-brass sm:mt-1">
                  {p.status}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
