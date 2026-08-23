export type Project = {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  status?: string;
  stack: string[];
  currentWork?: string[];
  next?: string[];
  architecture?: string[];
  modules?: string[];
  github?: string;
  ctaLabel?: string;
  trajectory?: string[];
};

export const projects: Project[] = [
  {
    id: "goscale",
    name: "GoScale",
    subtitle: "Mini Distributed Systems Lab in Go · In Progress",
    description:
      "A hands-on project for exploring how backend systems evolve from concurrent local storage toward distributed state, scaling, and fault tolerance through progressively more complex implementations.",
    status: "In Progress",
    stack: ["Go", "Concurrency", "Storage", "HTTP", "Systems"],
    currentWork: [
      "Concurrent in-memory key-value storage",
      "HTTP APIs and request handling",
      "Goroutines, channels, and synchronization",
      "Graceful shutdown and lifecycle management",
      "Unit testing concurrent components",
    ],
    next: [
      "Distributed storage",
      "Replication",
      "Fault tolerance",
      "Scalability",
    ],
    architecture: [
      "HTTP",
      "Handlers",
      "Storage",
      "Concurrency / Synchronization",
      "Future Distributed Layer",
    ],
    trajectory: [
      "Concurrent Local Storage",
      "Concurrency",
      "Distributed State",
      "Replication",
      "Fault Tolerance",
      "Scalability",
    ],
    github: "https://github.com/MuhammadBilal64/GoScale",
    ctaLabel: "VIEW SOURCE",
  },
  {
    id: "devflow",
    name: "DevFlow",
    subtitle: "Backend Platform for Team Collaboration",
    description:
      "A team collaboration backend built with ASP.NET Core, using Clean Architecture and CQRS with a focus on modularity, maintainability, and testing.",
    stack: [
      "ASP.NET Core",
      "CQRS",
      "Clean Architecture",
      "MediatR",
      "EF Core",
    ],
    architecture: [
      "HTTP API",
      "Application Layer",
      "CQRS / MediatR",
      "Domain",
      "Infrastructure",
      "Database",
    ],
    currentWork: [
      "Clean Architecture",
      "CQRS",
      "MediatR",
      "Entity Framework Core",
      "Pipeline Behaviors",
      "Global Exception Handling",
      "Authentication & Authorization",
      "Role-Based Access Control",
      "SignalR",
      "Unit Testing",
    ],
    modules: [
      "Authentication",
      "Workspace Management",
      "Project Management",
      "Task Management",
      "Notifications",
    ],
    github: "https://github.com/MuhammadBilal64/DevFlow",
    ctaLabel: "VIEW SOURCE",
  },
];
