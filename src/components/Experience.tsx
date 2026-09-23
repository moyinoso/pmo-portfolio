import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const roles = [
  {
    title: "Data Analyst & Administrative Support",
    org: "2 Division, Nigerian Army",
    dates: "JAN 2025 — DEC 2025",
    desc: "Working with records, reports and day-to-day information and learning how much of good analysis is simply making things legible for the people who need them.",
  },
  {
    title: "Finance & Administrative Intern",
    org: "Cedar Care",
    dates: "SEP 2024 — NOV 2024",
    desc: "A first look at how finance and administration actually work inside an organisation records, receipts, and the quiet discipline of getting details right.",
  },
];

export default function Experience() {
  return (
    <section id="about" className="mx-auto max-w-shell px-6 py-24 md:px-10 md:py-32">
      <SectionHeading
        index="06"
        eyebrow="ABOUT EXPERIENCE"
        title={
          <>
            Where I&rsquo;ve been{" "}
            <span className="italic text-brass">so far.</span>
          </>
        }
        intro="The résumé part is short two roles, one throughline. Keep scrolling for the parts a résumé can't hold."
      />

      <div className="mt-14 border-t border-ink-line">
        {roles.map((role) => (
          <Reveal key={role.title}>
            <div className="grid gap-3 border-b border-ink-line py-9 md:grid-cols-12 md:gap-8">
              <div className="md:col-span-5">
                <h3 className="font-serif text-2xl leading-snug tracking-tight text-paper">
                  {role.title}
                </h3>
                <p className="mt-2 text-sm text-paper-dim">{role.org}</p>
              </div>
              <p className="font-mono text-[11px] tracking-[0.18em] text-brass md:col-span-3 md:pt-2">
                {role.dates}
              </p>
              <p className="text-[15px] leading-relaxed text-paper-dim md:col-span-4">
                {role.desc}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
