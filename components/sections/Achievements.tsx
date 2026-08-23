import { Panel } from "@/components/ui/Panel";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { achievements } from "@/data/achievements";

export function Achievements() {
  return (
    <section
      id="achievements"
      aria-labelledby="achievements-heading"
      className="scroll-mt-6"
    >
      <SectionHeader
        id="achievements-heading"
        kicker="Verified milestones"
        title="Achievements"
      />
      <ul className="grid gap-3 sm:grid-cols-2">
        {achievements.map((item) => (
          <li key={item.label}>
            <Panel className="flex items-start gap-3 p-4">
              <span className="mt-0.5 font-mono text-[11px] uppercase tracking-[0.12em] text-accent">
                {item.mark}
              </span>
              <p className="text-sm text-ink">{item.label}</p>
            </Panel>
          </li>
        ))}
      </ul>
    </section>
  );
}
