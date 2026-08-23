import { ArchitectureDiagram } from "@/components/projects/ArchitectureDiagram";
import { Badge } from "@/components/ui/Badge";
import type { Project } from "@/data/projects";

type ProjectDetailsProps = {
  project: Project;
};

export function ProjectDetails({ project }: ProjectDetailsProps) {
  return (
    <div className="mt-6 space-y-6 border-t border-line pt-5">
      <p className="text-sm leading-relaxed text-mute">{project.description}</p>

      {project.currentWork && project.currentWork.length > 0 ? (
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-dim">
            {project.id === "goscale" ? "Current work" : "Architecture and engineering"}
          </p>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {project.currentWork.map((item) => (
              <li key={item} className="text-sm text-mute">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {project.modules && project.modules.length > 0 ? (
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-dim">
            Implemented modules
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.modules.map((item) => (
              <Badge key={item}>{item}</Badge>
            ))}
          </div>
        </div>
      ) : null}

      {project.next && project.next.length > 0 ? (
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-dim">
            Next direction
          </p>
          <p className="mt-3 text-sm text-mute">{project.next.join(" · ")}</p>
        </div>
      ) : null}

      {project.trajectory && project.trajectory.length > 0 ? (
        <ArchitectureDiagram steps={project.trajectory} caption="Trajectory" />
      ) : null}

      {project.architecture && project.architecture.length > 0 ? (
        <ArchitectureDiagram
          steps={project.architecture}
          caption="Architecture"
        />
      ) : null}
    </div>
  );
}
