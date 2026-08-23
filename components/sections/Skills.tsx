import { Badge } from "@/components/ui/Badge";
import { Panel } from "@/components/ui/Panel";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { skills } from "@/data/skills";

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="scroll-mt-6">
      <SectionHeader
        id="skills-heading"
        kicker="Technology stack"
        title="Technical Skills"
      />
      <div className="grid gap-4 md:grid-cols-2">
        {skills.map((group) => (
          <Panel key={group.category} className="p-5">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-dim">
              {group.category}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <Badge key={item}>{item}</Badge>
              ))}
            </div>
          </Panel>
        ))}
      </div>
    </section>
  );
}
