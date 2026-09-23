import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/data/projects";
import Reveal from "./Reveal";

type ProjectCardProps = {
  project: Project;
  delay?: number;
};

export default function ProjectCard({ project, delay = 0 }: ProjectCardProps) {
  return (
    <Reveal delay={delay} className="h-full">
      <Link
        href={`/work/${project.slug}`}
        className="group flex h-full flex-col border border-ink-line bg-ink-soft transition-colors duration-500 hover:border-brass/40"
      >
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={project.cover}
            alt={`${project.title} — dashboard preview`}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover object-top transition-transform duration-700 ease-smooth group-hover:scale-[1.04]"
          />
          <span className="absolute left-4 top-4 border border-ink-line bg-ink/70 px-2.5 py-1 font-mono text-[10px] tracking-[0.25em] text-paper backdrop-blur-sm">
            CASE {project.index}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-6 md:p-8">
          <p className="font-mono text-[10px] tracking-[0.28em] text-brass">
            THE QUESTION
          </p>
          <h3 className="mt-3 font-serif text-xl italic leading-snug tracking-tight text-paper md:text-2xl">
            {project.question}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-paper-dim">
            {project.context}
          </p>

          <div className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-ink-line pt-5 md:pt-6">
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="border border-ink-line px-2.5 py-1 font-mono text-[10px] tracking-[0.15em] text-paper-dim"
                >
                  {tool.toUpperCase()}
                </span>
              ))}
            </div>
            <span className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[0.2em] text-paper-dim transition-colors duration-300 group-hover:text-brass">
              OPEN CASE FILE
              <ArrowRight
                size={13}
                strokeWidth={1.75}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </span>
          </div>
        </div>
      </Link>
    </Reveal>
  );
}
