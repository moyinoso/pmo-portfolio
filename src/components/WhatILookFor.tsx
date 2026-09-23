import Reveal from "./Reveal";

const thread = [
  { word: "Data", gloss: "where the clues usually start" },
  { word: "Systems", gloss: "how the clues connect" },
  { word: "AI", gloss: "what the patterns might mean" },
  { word: "People", gloss: "who the patterns affect" },
  { word: "Problems", gloss: "what is actually worth fixing" },
];

export default function WhatILookFor() {
  return (
    <section className="mx-auto max-w-shell px-6 py-24 md:px-10 md:py-32">
      <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <Reveal>
            <p className="border-t border-ink-line pt-8 font-mono text-[11px] tracking-[0.3em] text-brass">
              02 <span className="text-paper-dim">WHAT I KEEP LOOKING FOR</span>
            </p>
          </Reveal>
          <Reveal delay={90}>
            <h2 className="mt-6 font-serif text-3xl leading-[1.15] tracking-tight text-paper md:text-[2.6rem]">
              I have always been curious about{" "}
              <span className="italic text-brass">how things work.</span>
            </h2>
          </Reveal>
          <Reveal delay={180}>
            <div className="mt-8 max-w-lg space-y-1 font-serif text-xl italic leading-relaxed text-paper/85 md:text-2xl">
              <p>A dataset.</p>
              <p>A broken process.</p>
              <p>A strange pattern.</p>
              <p className="text-paper-dim">
                A question nobody thought to ask.
              </p>
            </div>
          </Reveal>
          <Reveal delay={270}>
            <p className="mt-8 max-w-lg text-[15px] leading-relaxed text-paper-dim">
              I like pulling at the thread until I understand what is
              underneath. It has led me through spreadsheets, code, systems,
              and more often than I expected back to people.
            </p>
          </Reveal>
        </div>

        {/* the thread */}
        <div className="lg:pt-24">
          {thread.map((t, i) => (
            <Reveal key={t.word} delay={i * 80}>
              <div className="group flex items-baseline gap-5 border-b border-ink-line py-6 first:border-t">
                <span className="font-mono text-[11px] text-brass">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-serif text-3xl tracking-tight text-paper transition-colors duration-300 group-hover:text-brass md:text-4xl">
                  {t.word}
                </span>
                <span className="ml-auto hidden text-right font-mono text-[10px] tracking-[0.15em] text-paper-dim sm:inline">
                  {t.gloss.toUpperCase()}
                </span>
              </div>
            </Reveal>
          ))}
          <Reveal delay={450}>
            <p className="mt-6 font-mono text-[10px] tracking-[0.22em] text-paper-dim">
              THE THREAD I KEEP PULLING IN THAT ORDER, MOST DAYS.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
