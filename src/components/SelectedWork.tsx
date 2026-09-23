import { projects } from "@/data/projects";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";

export default function SelectedWork() {
  return (
    <section id="work" className="mx-auto max-w-shell px-6 py-24 md:px-10 md:py-32">
      <SectionHeading
        index="03"
        eyebrow="SELECTED WORK"
        title={
          <>
            Every project here began{" "}
            <span className="italic text-brass">as a question.</span>
          </>
        }
        intro="Six investigations across retail, subscriptions, health, HR and even football. Open a case file for the question, the method, the evidence, and what it taught me."
      />

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} delay={(i % 2) * 90} />
        ))}
      </div>
    </section>
  );
}
