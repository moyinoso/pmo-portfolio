import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { site } from "@/data/links";
import Reveal from "./Reveal";

type CaseStudyProps = {
  project: Project;
  prev: Project;
  next: Project;
};

export default function CaseStudy({ project, prev, next }: CaseStudyProps) {
  const cover = project.images[0];

  return (
    <article className="mx-auto max-w-shell px-6 pb-28 pt-32 md:px-10 md:pt-40">
      {/* breadcrumb */}
      <Reveal>
        <div className="flex items-center justify-between font-mono text-[10px] tracking-[0.25em] text-paper-dim">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 transition-colors hover:text-brass"
          >
            <ArrowLeft size={13} strokeWidth={1.5} /> ALL WORK
          </Link>
          <span>
            CASE {project.index} <span className="text-brass">/ 06</span>
          </span>
        </div>
      </Reveal>

      {/* title + question */}
      <Reveal delay={90}>
        <h1 className="mt-10 max-w-4xl font-serif text-3xl leading-[1.1] tracking-tight text-paper md:text-5xl">
          {project.title}
        </h1>
      </Reveal>

      <Reveal delay={180}>
        <div className="mt-10 max-w-3xl border-l-2 border-brass pl-6 md:pl-8">
          <p className="font-mono text-[10px] tracking-[0.28em] text-brass">
            THE QUESTION
          </p>
          <p className="mt-4 font-serif text-2xl italic leading-snug text-paper md:text-3xl">
            &ldquo;{project.question}&rdquo;
          </p>
        </div>
      </Reveal>

      {/* meta */}
      <Reveal delay={240}>
        <div className="mt-10 flex flex-wrap items-center gap-3">
          {project.tools.map((tool) => (
            <span
              key={tool}
              className="border border-ink-line px-3 py-1.5 font-mono text-[10px] tracking-[0.18em] text-paper-dim"
            >
              {tool.toUpperCase()}
            </span>
          ))}
          {project.href && (
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 border border-brass/40 px-3 py-1.5 font-mono text-[10px] tracking-[0.18em] text-brass transition-colors hover:bg-brass hover:text-ink"
            >
              OPEN PROJECT <ArrowUpRight size={12} strokeWidth={1.75} />
            </a>
          )}
        </div>
      </Reveal>

      {/* cover */}
      <Reveal delay={300}>
        <figure className="mt-12 border border-ink-line bg-ink-soft p-2 md:p-3">
          <Image
            src={project.cover}
            alt={`${project.title} — cover`}
            width={cover.w}
            height={cover.h}
            priority
            className="h-auto w-full"
            sizes="(min-width: 1024px) 72rem, 100vw"
          />
        </figure>
      </Reveal>

      {/* investigation */}
      <div className="mt-20 grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <p className="border-t border-ink-line pt-8 font-mono text-[11px] tracking-[0.3em] text-brass">
                THE INVESTIGATION
              </p>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-paper-dim">
                How the question was pursued what was measured, cut and
                compared.
              </p>
            </Reveal>
          </div>
        </div>
        <div className="lg:col-span-8">
          {project.investigation.map((step, i) => (
            <Reveal key={i} delay={i * 60}>
              <div className="flex gap-5 border-b border-ink-line py-7 first:border-t md:gap-7">
                <span className="pt-1 font-mono text-[11px] text-brass">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-[15px] leading-relaxed text-paper/85 md:text-base">
                  {step}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* evidence */}
      <div className="mt-24">
        <Reveal>
          <p className="border-t border-ink-line pt-8 font-mono text-[11px] tracking-[0.3em] text-brass">
            EVIDENCE
          </p>
          <p className="mt-4 text-sm leading-relaxed text-paper-dim">
            Screenshots and recordings from the actual work exactly as built.
          </p>
        </Reveal>

        <div className="mt-10 space-y-16">
          {project.evidenceGroups ? (
            project.evidenceGroups.map((group, groupIndex) => (
              <section key={group.title} className="border-t border-ink-line pt-8">
                <Reveal>
                  <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                    <div>
                      <p className="font-mono text-[11px] tracking-[0.3em] text-brass">
                        EVIDENCE {String(groupIndex + 1).padStart(2, "0")}
                      </p>
                      <h3 className="mt-3 font-serif text-2xl italic text-paper md:text-3xl">
                        {group.title}
                      </h3>
                    </div>
                    <p className="max-w-xl text-sm leading-relaxed text-paper-dim md:text-right">
                      {group.description}
                    </p>
                  </div>
                </Reveal>

                <div className="mt-8 space-y-10">
                  {group.video && (
                    <Reveal>
                      <figure className="border border-ink-line bg-ink-soft p-2 md:p-3">
                        <video
                          src={group.video.src}
                          controls
                          preload="none"
                          className="h-auto w-full"
                        />
                        <figcaption className="flex items-baseline justify-between gap-4 px-1 pt-3 font-mono text-[10px] tracking-[0.18em] text-paper-dim">
                          <span className="shrink-0 text-brass">WALKTHROUGH</span>
                          <span className="text-right">{group.video.caption}</span>
                        </figcaption>
                      </figure>
                    </Reveal>
                  )}

                  {group.images.map((image, imageIndex) => (
                    <Reveal key={image.src} delay={(imageIndex % 3) * 80}>
                      <figure className="border border-ink-line bg-ink-soft p-2 md:p-3">
                        <Image
                          src={image.src}
                          alt={image.caption}
                          width={image.w}
                          height={image.h}
                          className="h-auto w-full"
                          sizes="(min-width: 1024px) 72rem, 100vw"
                        />
                        <figcaption className="flex items-baseline justify-between gap-4 px-1 pt-3 font-mono text-[10px] tracking-[0.18em] text-paper-dim">
                          <span className="shrink-0 text-brass">
                            EXHIBIT {String.fromCharCode(65 + imageIndex)}
                          </span>
                          <span className="text-right">{image.caption}</span>
                        </figcaption>
                      </figure>
                    </Reveal>
                  ))}
                </div>
              </section>
            ))
          ) : (
            <>
              {project.video && (
                <Reveal>
                  <figure className="border border-ink-line bg-ink-soft p-2 md:p-3">
                    <video
                      src={project.video.src}
                      controls
                      preload="none"
                      className="h-auto w-full"
                    />
                    <figcaption className="flex items-baseline justify-between gap-4 px-1 pt-3 font-mono text-[10px] tracking-[0.18em] text-paper-dim">
                      <span className="shrink-0 text-brass">WALKTHROUGH</span>
                      <span className="text-right">{project.video.caption}</span>
                    </figcaption>
                  </figure>
                </Reveal>
              )}

              {project.images.map((image, i) => (
                <Reveal key={image.src} delay={(i % 3) * 80}>
                  <figure className="border border-ink-line bg-ink-soft p-2 md:p-3">
                    <Image
                      src={image.src}
                      alt={image.caption}
                      width={image.w}
                      height={image.h}
                      className="h-auto w-full"
                      sizes="(min-width: 1024px) 72rem, 100vw"
                    />
                    <figcaption className="flex items-baseline justify-between gap-4 px-1 pt-3 font-mono text-[10px] tracking-[0.18em] text-paper-dim">
                      <span className="shrink-0 text-brass">
                        EXHIBIT {String.fromCharCode(65 + i)}
                      </span>
                      <span className="text-right">{image.caption}</span>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </>
          )}
        </div>
      </div>

      {/* learnings */}
      <div className="mt-24">
        <Reveal>
          <p className="border-t border-ink-line pt-8 font-mono text-[11px] tracking-[0.3em] text-brass">
            WHAT I LEARNED
          </p>
        </Reveal>
        <div className="mt-8 grid gap-px border border-ink-line bg-ink-line md:grid-cols-3">
          {project.learnings.map((learning, i) => (
            <Reveal key={i} delay={i * 80} className="h-full">
              <div className="h-full bg-ink p-6 md:p-7">
                <span className="font-mono text-[11px] text-brass">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-4 font-serif text-lg italic leading-snug text-paper/90">
                  {learning}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* prev / next */}
      <nav
        aria-label="Case studies"
        className="mt-24 grid gap-px border border-ink-line bg-ink-line md:grid-cols-2"
      >
        <Link
          href={`/work/${prev.slug}`}
          className="group bg-ink p-6 transition-colors hover:bg-ink-soft md:p-8"
        >
          <p className="flex items-center gap-2 font-mono text-[10px] tracking-[0.25em] text-paper-dim">
            <ArrowLeft
              size={13}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />{" "}
            PREVIOUS CASE
          </p>
          <p className="mt-3 font-serif text-xl italic text-paper transition-colors group-hover:text-brass">
            {prev.title}
          </p>
        </Link>
        <Link
          href={`/work/${next.slug}`}
          className="group bg-ink p-6 text-right transition-colors hover:bg-ink-soft md:p-8"
        >
          <p className="flex items-center justify-end gap-2 font-mono text-[10px] tracking-[0.25em] text-paper-dim">
            NEXT CASE{" "}
            <ArrowRight
              size={13}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </p>
          <p className="mt-3 font-serif text-xl italic text-paper transition-colors group-hover:text-brass">
            {next.title}
          </p>
        </Link>
      </nav>

      <Reveal className="mt-16 text-center">
        <p className="text-sm text-paper-dim">
          Working on something with a question like this?
        </p>
        <a
          href={`mailto:${site.email}`}
          className="mt-3 inline-block font-mono text-[11px] tracking-[0.2em] text-brass underline-offset-4 hover:underline"
        >
          {site.email.toUpperCase()}
        </a>
      </Reveal>
    </article>
  );
}
