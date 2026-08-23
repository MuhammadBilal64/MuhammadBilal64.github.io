import { CommandCenter } from "@/components/command-center/CommandCenter";
import { Overview } from "@/components/sections/Overview";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Systems } from "@/components/sections/Systems";
import { CompetitiveProgramming } from "@/components/sections/CompetitiveProgramming";
import { Achievements } from "@/components/sections/Achievements";
import { Contact } from "@/components/sections/Contact";
import { Terminal } from "@/components/terminal/Terminal";

export default function HomePage() {
  return (
    <CommandCenter>
      <Overview />
      <Projects />
      <Experience />
      <Skills />
      <Systems />
      <CompetitiveProgramming />
      <Achievements />
      <Terminal />
      <Contact />
    </CommandCenter>
  );
}
