import { LinkButton } from "@/components/ui/Button";
import { Panel } from "@/components/ui/Panel";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { profile } from "@/data/profile";
import { competitiveProgramming } from "@/data/skills";

export function CompetitiveProgramming() {
  return (
    <section
      id="competitive-programming"
      aria-labelledby="cp-heading"
      className="scroll-mt-6"
    >
      <SectionHeader
        id="cp-heading"
        kicker="Algorithms track"
        title="Competitive Programming"
        description={competitiveProgramming.intro}
      />
      <Panel className="p-6 sm:p-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-dim">
          Primary statistic
        </p>
        <p className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
          {competitiveProgramming.statistic}
        </p>
        <ul className="mt-5 flex flex-col gap-2 text-sm text-mute">
          {competitiveProgramming.achievements.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap gap-3">
          <LinkButton
            href={profile.links.leetcode}
            target="_blank"
            rel="noopener noreferrer"
          >
            LeetCode profile
          </LinkButton>
          <LinkButton
            href={profile.links.codeforces}
            target="_blank"
            rel="noopener noreferrer"
          >
            Codeforces profile
          </LinkButton>
        </div>
      </Panel>
    </section>
  );
}
