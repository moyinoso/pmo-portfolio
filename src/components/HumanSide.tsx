import Reveal from "./Reveal";

const interests = [
  { name: "Chess", note: "Every move is a small hypothesis about what happens next." },
  { name: "Mind games", note: "I like being wrong in interesting ways." },
  { name: "Crime documentaries", note: "The best ones are about how people think, not just what they did." },
  { name: "Human behaviour", note: "People remain the most interesting dataset there is." },
  { name: "Call of Duty", note: "Fast reads, faster consequences." },
  { name: "FIFA", note: "And yes I have analysed the players too. See the work above." },
  { name: "Exploration", note: "New places, new tools, new questions." },
];

export default function HumanSide() {
  return (
    <section id="human" className="bg-paper text-ink">
      <div className="mx-auto max-w-shell px-6 py-24 md:px-10 md:py-32">
        <Reveal>
          <p className="border-t border-ink/15 pt-8 font-mono text-[11px] tracking-[0.3em] text-ink/50">
            07 <span className="text-brass-soft">THE HUMAN SIDE</span>
          </p>
        </Reveal>

        <Reveal delay={90}>
          <h2 className="mt-6 max-w-3xl font-serif text-3xl leading-[1.1] tracking-tight md:text-5xl">
            Curiosity is probably the thread connecting{" "}
            <span className="italic">most things I do.</span>
          </h2>
        </Reveal>

        <Reveal delay={180}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink/60">
            I ask questions. I look for patterns. I like trying to predict what
            comes next in data, in games, in people. These are a few of the
            places that habit comes from.
          </p>
        </Reveal>

        <Reveal delay={220}>
          <div className="mt-14 grid gap-px border border-ink/15 bg-ink/15 sm:grid-cols-2 lg:grid-cols-4">
            {interests.map((item) => (
              <div key={item.name} className="group bg-paper p-6 transition-colors duration-300 hover:bg-ink hover:text-paper md:p-7">
                <h3 className="font-serif text-xl italic tracking-tight">
                  {item.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/55 transition-colors duration-300 group-hover:text-paper/65">
                  {item.note}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={280}>
          <p className="mt-14 text-center font-serif text-xl italic text-ink/60 md:text-2xl">
            The work is the signal. This is the noise that keeps it human.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
