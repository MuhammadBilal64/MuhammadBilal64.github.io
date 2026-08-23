import { ProjectCard } from "@/components/projects/ProjectCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="scroll-mt-6">
      <SectionHeader
        id="projects-heading"
        kicker="Systems being built"
        title="Projects"
      />
      <div className="grid gap-5 lg:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
