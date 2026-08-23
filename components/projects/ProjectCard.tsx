import { ProjectDetails } from "@/components/projects/ProjectDetails";
import { Badge } from "@/components/ui/Badge";
import { LinkButton } from "@/components/ui/Button";
import { Panel } from "@/components/ui/Panel";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const cardCopy =
    project.id === "goscale"
      ? "Exploring how backend systems evolve toward distributed state."
      : "Modular backend focused on maintainability and testing.";

  return (
    <Panel as="article" className="p-5 sm:p-6" id={`project-${project.id}`}>
      <div className="flex flex-wrap items-start justify-between gap-3">
        <h3 className="font-mono text-sm uppercase tracking-[0.16em] text-ink">
          {project.name}
        </h3>
        {project.status ? <Badge tone="accent">{project.status}</Badge> : null}
      </div>
      <p className="mt-3 text-base font-medium text-ink">{project.subtitle}</p>
      <p className="mt-2 text-sm leading-relaxed text-mute">{cardCopy}</p>
      <p className="mt-4 text-xs uppercase tracking-[0.08em] text-dim">
        {project.stack.slice(0, 4).join(" · ")}
      </p>
      <div className="mt-5 flex flex-wrap gap-3">
        {project.github ? (
          <LinkButton
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
          >
            {project.ctaLabel ?? "VIEW SOURCE"}
          </LinkButton>
        ) : (
          <Badge>Project in progress</Badge>
        )}
      </div>
      <details className="mt-4">
        <summary className="cursor-pointer list-none rounded-panel border border-line px-3.5 py-2 text-sm font-medium min-h-11 inline-flex items-center hover:bg-elevated">
          View details
        </summary>
        <ProjectDetails project={project} />
      </details>
    </Panel>
  );
}
