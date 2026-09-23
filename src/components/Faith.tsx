import Reveal from "./Reveal";

export default function Faith() {
  return (
    <section className="mx-auto max-w-shell px-6 py-24 md:px-10 md:py-32">
      <Reveal>
        <div className="mx-auto max-w-2xl border-y border-ink-line py-16 text-center md:py-20">
          <p className="font-serif text-3xl italic tracking-tight text-paper md:text-4xl">
            Faith. <span className="text-brass">Curiosity.</span> Service.{" "}
            <span className="text-brass">Growth.</span>
          </p>
          <p className="mx-auto mt-7 max-w-md text-sm leading-relaxed text-paper-dim">
            I'm a Seventh-day Adventist Christian. My faith quietly shapes
            how I think about people, purpose, and the kind of impact worth
            having in work and outside it.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
