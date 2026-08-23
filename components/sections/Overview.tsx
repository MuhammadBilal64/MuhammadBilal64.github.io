import { LinkButton } from "@/components/ui/Button";
import { Panel } from "@/components/ui/Panel";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";

export function Overview() {
  return (
    <section id="overview" aria-labelledby="overview-heading" className="scroll-mt-6">
      <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.18em] text-dim">
        Identity
      </p>
      <h1 id="overview-heading" className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
        {profile.name}
      </h1>
      <p className="mt-3 text-base text-accent sm:text-lg">{profile.identity}</p>
      <p className="mt-2 text-sm text-mute sm:text-base">{profile.education}</p>
      <p className="mt-6 max-w-3xl text-sm leading-relaxed text-mute sm:text-base">
        {profile.description}
      </p>

      <div className="mt-7 flex flex-wrap gap-3">
        <LinkButton href="#projects" variant="primary">
          View Projects
        </LinkButton>
        <LinkButton
          href={profile.links.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </LinkButton>
        <LinkButton
          href={profile.links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </LinkButton>
        <LinkButton href="#contact">Contact</LinkButton>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        <Panel className="p-5">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-dim">
            Primary stack
          </p>
          <p className="mt-3 text-sm text-ink">{profile.primaryStack.join(" · ")}</p>
        </Panel>
        <Panel className="p-5">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-dim">
            Currently exploring
          </p>
          <p className="mt-3 text-sm text-ink">{profile.exploring.join(" · ")}</p>
        </Panel>
      </div>

      <div className="mt-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-dim">
          Featured projects
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {projects.map((project) => (
            <a
              key={project.id}
              href={`#project-${project.id}`}
              className="rounded-panel border border-line bg-surface px-3 py-2 font-mono text-xs uppercase tracking-[0.12em] text-mute hover:text-ink"
            >
              {project.name}
            </a>
          ))}
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-xl font-semibold tracking-tight">Overview</h2>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-mute sm:text-base">
          {profile.overview}
        </p>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
          {profile.interests.map((item) => (
            <li key={item.title} className="rounded-panel border border-line bg-surface p-4">
              <p className="font-medium text-ink">{item.title}</p>
              <p className="mt-1 text-sm leading-relaxed text-mute">{item.detail}</p>
            </li>
          ))}
        </ul>
        <p className="mt-6 max-w-3xl text-sm leading-relaxed text-mute">
          {profile.overviewClose}
        </p>
      </div>

      <div className="mt-12">
        <h2 className="text-xl font-semibold tracking-tight">Currently Learning</h2>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-mute">
          {profile.currentlyLearningIntro}
        </p>
        <ul className="mt-6 grid gap-4 md:grid-cols-3">
          {profile.learning.map((item) => (
            <li key={item.title} className="rounded-panel border border-line bg-surface p-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent">
                In progress
              </p>
              <p className="mt-2 font-medium">{item.title}</p>
              <p className="mt-1 text-sm leading-relaxed text-mute">{item.detail}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
