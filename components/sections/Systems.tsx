import { Badge } from "@/components/ui/Badge";
import { Panel } from "@/components/ui/Panel";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { systemsTrack } from "@/data/skills";

export function Systems() {
  return (
    <section id="systems" aria-labelledby="systems-heading" className="scroll-mt-6">
      <SectionHeader
        id="systems-heading"
        kicker="Systems / concurrency track"
        title="Systems"
        description="BACKEND → CONCURRENCY → DISTRIBUTED SYSTEMS → SYSTEM DESIGN. This is a learning trajectory, not a claim of mastery at every level."
      />
      <ol className="flex flex-col gap-3 lg:flex-row lg:items-stretch lg:gap-2">
        {systemsTrack.map((stage, index) => (
          <li key={stage.id} className="flex min-w-0 flex-1 flex-col lg:flex-row lg:items-stretch">
            <Panel className="flex h-full min-w-0 flex-1 flex-col p-5">
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
                {stage.stage}
              </p>
              <h3 className="mt-2 text-base font-medium">{stage.title}</h3>
              <p className="mt-1 text-sm text-mute">{stage.summary}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {stage.items.map((item) => (
                  <Badge key={item}>{item}</Badge>
                ))}
              </div>
            </Panel>
            {index < systemsTrack.length - 1 ? (
              <p
                className="flex items-center justify-center py-2 font-mono text-dim lg:px-1 lg:py-0"
                aria-hidden="true"
              >
                <span className="lg:hidden">↓</span>
                <span className="hidden lg:inline">→</span>
              </p>
            ) : null}
          </li>
        ))}
      </ol>
    </section>
  );
}
