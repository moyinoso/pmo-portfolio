import Image from "next/image";
import {
  ArrowDown,
  ArrowUpRight,
  FileText,
  Github,
  Globe,
  Linkedin,
  Link as LinkIcon,
} from "lucide-react";
import { links, site } from "@/data/links";
import Reveal from "./Reveal";

const socials = [
  { label: "GitHub", href: links.github, Icon: Github },
  { label: "LinkedIn", href: links.linkedin, Icon: Linkedin },
  { label: "DataSciencePortfol.io", href: links.portfolio, Icon: Globe },
  { label: "Carrd", href: links.carrd, Icon: LinkIcon },
  { label: "Résumé", href: links.resume, Icon: FileText },
];

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center">
      <div className="mx-auto grid w-full max-w-shell gap-16 px-6 pb-28 pt-36 md:px-10 lg:grid-cols-12 lg:gap-10">
        {/* left — the signal */}
        <div className="lg:col-span-7">
          <Reveal>
            <p className="flex items-center gap-3 font-mono text-[11px] tracking-[0.3em] text-paper-dim">
              <span className="inline-block h-1.5 w-1.5 animate-pulseDot rounded-full bg-brass" />
              THE PMO PORTFOLIO, 2026
            </p>
          </Reveal>

          <Reveal delay={90}>
            <h1 className="mt-9 font-serif text-[13vw] leading-[0.95] tracking-tight text-paper sm:text-6xl md:text-7xl lg:text-[5.1rem]">
              Moyinoluwa
              <span className="block italic text-paper/90">Oso Ogooluwa</span>
            </h1>
          </Reveal>

          <Reveal delay={180}>
            <p className="mt-8 font-mono text-xs tracking-[0.35em] text-brass">
              DATA <span className="text-paper-dim">·</span> AI{" "}
              <span className="text-paper-dim">·</span> TECHNOLOGY
            </p>
          </Reveal>

          <Reveal delay={270}>
            <p className="mt-9 max-w-xl font-serif text-2xl italic leading-snug text-paper md:text-[1.9rem]">
              &ldquo;I follow the clues in the data until the bigger picture
              starts to make sense.&rdquo;
            </p>
          </Reveal>

          <Reveal delay={360}>
            <p className="mt-7 max-w-xl text-[15px] leading-relaxed text-paper-dim">
              Also known as <span className="text-paper">PMO</span>. I work
              across data analysis, technology, AI exploration, automation,
              research and problem-solving and I&apos;d rather stay curious
              than stay categorised.
            </p>
          </Reveal>

          <Reveal delay={450}>
            <div className="mt-11 flex flex-wrap items-center gap-5">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 bg-brass px-6 py-3.5 font-mono text-[11px] tracking-[0.18em] text-ink transition-colors duration-300 hover:bg-paper"
              >
                LET&apos;S TALK
                <ArrowUpRight
                  size={15}
                  strokeWidth={1.75}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>

              <div className="flex items-center gap-1">
                {socials.map(({ label, href, Icon }) =>
                  href ? (
                    <a
                      key={label}
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      aria-label={label}
                      title={label}
                      className="p-2.5 text-paper-dim transition-colors duration-300 hover:text-brass"
                    >
                      <Icon size={18} strokeWidth={1.5} />
                    </a>
                  ) : (
                    <span
                      key={label}
                      aria-label={`${label} — link coming soon`}
                      title={`${label} — coming soon`}
                      className="p-2.5 text-paper-dim/35"
                    >
                      <Icon size={18} strokeWidth={1.5} />
                    </span>
                  )
                )}
              </div>
            </div>
          </Reveal>
        </div>

        {/* right — portrait */}
        <div className="lg:col-span-5">
          <Reveal delay={320} className="lg:mt-14">
            <figure className="relative border border-ink-line bg-ink-soft p-3">
              <span className="absolute -left-px -top-px h-4 w-4 border-l border-t border-brass" />
              <span className="absolute -right-px -top-px h-4 w-4 border-r border-t border-brass" />
              <span className="absolute -bottom-px -left-px h-4 w-4 border-b border-l border-brass" />
              <span className="absolute -bottom-px -right-px h-4 w-4 border-b border-r border-brass" />
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/images/portrait.jpg"
                  alt="Portrait of Moyinoluwa Oso Ogooluwa"
                  fill
                  priority
                  sizes="(min-width: 1024px) 38vw, 100vw"
                  className="portrait-image object-cover grayscale transition-all duration-700 hover:scale-[1.02] hover:grayscale-0"                />
              </div>
              <figcaption className="flex items-center justify-between px-1 pt-3 font-mono text-[10px] tracking-[0.22em] text-paper-dim">
                <span>MOYINOLUWA</span>
                <span className="text-brass">A.K.A. PMO</span>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>

      {/* bottom strip */}
      <div className="absolute inset-x-0 bottom-0">
        <div className="mx-auto flex max-w-shell items-center justify-between border-t border-ink-line px-6 py-4 font-mono text-[10px] tracking-[0.28em] text-paper-dim md:px-10">
          <span className="flex items-center gap-2">
            <ArrowDown size={12} className="animate-bounce" /> SCROLL
          </span>
          <span className="hidden sm:inline">{site.email.toUpperCase()}</span>
        </div>
      </div>
    </section>
  );
}
