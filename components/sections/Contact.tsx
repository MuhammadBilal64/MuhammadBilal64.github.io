import { LinkButton } from "@/components/ui/Button";
import { Panel } from "@/components/ui/Panel";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { profile } from "@/data/profile";

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="scroll-mt-6">
      <SectionHeader
        id="contact-heading"
        kicker="Connection endpoint"
        title={profile.contactHeading}
        description={profile.contactIntro}
      />
      <Panel className="p-6">
        <div className="flex flex-wrap gap-3">
          <LinkButton
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
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
          <LinkButton href={`mailto:${profile.links.email}`}>
            Email
          </LinkButton>
        </div>
        <p className="mt-4 font-mono text-sm text-mute">{profile.links.email}</p>
      </Panel>
    </section>
  );
}
