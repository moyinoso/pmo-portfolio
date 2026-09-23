import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CaseStudy from "@/components/CaseStudy";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return {};
  return {
    title: project.title,
    description: `${project.question} ${project.context}`,
    openGraph: { images: [project.cover] },
  };
}

export default function CasePage({ params }: { params: { slug: string } }) {
  const index = projects.findIndex((p) => p.slug === params.slug);
  if (index === -1) notFound();

  const project = projects[index];
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  return (
    <>
      <Nav />
      <main>
        <CaseStudy project={project} prev={prev} next={next} />
      </main>
      <Footer />
    </>
  );
}
