export type ExperienceItem = {
  id: string;
  year: string;
  title: string;
  org: string;
  period?: string;
  stack?: string;
  description?: string;
  kind: "role" | "project";
};

export const experience: ExperienceItem[] = [
  {
    id: "xeeoff",
    year: "2025",
    title: "Software Engineering Intern",
    org: "XEEOFF Pvt Ltd",
    period: "Sep 2025 – Dec 2025",
    stack: ".NET",
    description:
      "Contributed to PhinExIntra, a cybersecurity SaaS platform, and SDrive Admin Portal as part of a .NET engineering team.",
    kind: "role",
  },
  {
    id: "devflow",
    year: "2026",
    title: "Backend Architecture",
    org: "DevFlow",
    stack: "ASP.NET Core · CQRS",
    kind: "project",
  },
  {
    id: "goscale",
    year: "2026",
    title: "Go / Concurrency / Systems",
    org: "GoScale",
    stack: "Go",
    kind: "project",
  },
];
