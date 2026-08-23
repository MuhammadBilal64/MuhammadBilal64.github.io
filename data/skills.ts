export type SkillGroup = {
  category: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    category: "Languages",
    items: ["C#", "Go", "C++", "Python", "C"],
  },
  {
    category: "Backend",
    items: [
      "ASP.NET Core",
      ".NET",
      "FastAPI",
      "REST APIs",
      "Entity Framework Core",
      "SignalR",
    ],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "SQL Server", "Azure SQL"],
  },
  {
    category: "Architecture & Engineering",
    items: [
      "Clean Architecture",
      "CQRS",
      "Concurrency",
      "Authentication & Authorization",
      "Unit Testing",
    ],
  },
  {
    category: "Infrastructure & Tools",
    items: [
      "Docker",
      "Azure",
      "Git",
      "GitHub",
      "Postman",
      "Visual Studio",
      "VS Code",
    ],
  },
];

export const systemsTrack = [
  {
    id: "backend",
    title: "Backend",
    stage: "Established foundation",
    summary: ".NET · APIs",
    items: ["APIs", "Authentication", "Architecture", "Databases"],
  },
  {
    id: "concurrency",
    title: "Concurrency",
    stage: "Current implementation",
    summary: "Go · Goroutines",
    items: ["Goroutines", "Channels", "Synchronization", "Worker Pools"],
  },
  {
    id: "distributed",
    title: "Distributed Systems",
    stage: "Active exploration",
    summary: "Replication",
    items: ["Replication", "Consistency", "Fault Tolerance", "Scalability"],
  },
  {
    id: "design",
    title: "System Design",
    stage: "Growing focus",
    summary: "Reliability",
    items: ["Reliability", "Failure Handling", "Architecture"],
  },
] as const;

export const competitiveProgramming = {
  intro:
    "I use competitive programming to strengthen algorithmic thinking, data structures, and problem-solving skills.",
  statistic: "600+ Algorithmic Problems Solved",
  achievements: ["ICPC Asia Regional Qualifier", "Coders Cup 2025 Finalist"],
};
