import { Panel } from "@/components/ui/Panel";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="scroll-mt-6">
      <SectionHeader
        id="experience-heading"
        kicker="Engineering history"
        title="Experience"
      />
      <ol className="relative space-y-4 border-l border-line pl-6">
        {experience.map((item) => (
          <li key={item.id} className="relative">
            <span
              className="absolute -left-[29px] top-5 h-2.5 w-2.5 rounded-full border border-accent bg-bg"
              aria-hidden="true"
            />
            <Panel className="p-5">
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-dim">
                {item.year}
                {item.period ? ` · ${item.period}` : ""}
              </p>
              <h3 className="mt-2 text-base font-medium">{item.org}</h3>
              <p className="mt-1 text-sm text-mute">
                {item.title}
                {item.stack ? ` · ${item.stack}` : ""}
              </p>
              {item.description ? (
                <p className="mt-3 text-sm leading-relaxed text-mute">
                  {item.description}
                </p>
              ) : null}
            </Panel>
          </li>
        ))}
      </ol>
    </section>
  );
}
