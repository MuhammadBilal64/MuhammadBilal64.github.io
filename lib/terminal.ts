import { profile } from "@/data/profile";
import { achievements } from "@/data/achievements";
import { experience } from "@/data/experience";
import { projects } from "@/data/projects";
import { skills } from "@/data/skills";

export type TerminalCommand = {
  input: string;
  output: string[];
};

const HELP = [
  "Available commands:",
  "help, about, whoami, role, primary-stack, exploring, problems, location",
  "projects, skills, experience, systems, achievements, contact, github, clear",
];

const COMMANDS: Record<string, string[]> = {
  help: HELP,
  whoami: [profile.name],
  about: [
    profile.name,
    profile.identity,
    profile.education,
    profile.description,
  ],
  role: ["Backend Engineer"],
  "primary-stack": ["C# / ASP.NET Core / .NET"],
  exploring: ["Go / Concurrency / Distributed Systems / System Design"],
  problems: ["600+"],
  location: [profile.locationFull],
  projects: projects.map(
    (project) => `${project.name} — ${project.subtitle}`,
  ),
  skills: skills.map(
    (group) => `${group.category}: ${group.items.join(", ")}`,
  ),
  experience: experience.map((item) => {
    const period = item.period ? ` · ${item.period}` : "";
    return `${item.org} — ${item.title}${period}`;
  }),
  systems: [
    "BACKEND → CONCURRENCY → DISTRIBUTED SYSTEMS → SYSTEM DESIGN",
    "Backend: established foundation",
    "Go / Concurrency: current development",
    "Distributed systems: active exploration",
    "System design: growing focus",
  ],
  achievements: achievements.map((item) => item.label),
  contact: [
    `GitHub: ${profile.links.github}`,
    `LinkedIn: ${profile.links.linkedin}`,
    `Email: ${profile.links.email}`,
  ],
  github: [profile.links.github],
};

export function runCommand(raw: string): TerminalCommand {
  const input = raw.trim();
  const key = input.toLowerCase();

  if (!input) {
    return { input, output: [] };
  }

  if (key === "clear") {
    return { input, output: [] };
  }

  const output = COMMANDS[key];
  if (!output) {
    return {
      input,
      output: [
        `command not found: ${input}`,
        'Type "help" to see available commands.',
      ],
    };
  }

  return { input, output };
}

export const welcomeLines = [
  "Engineering Command Center — type help",
  "$ whoami",
  profile.name,
];
