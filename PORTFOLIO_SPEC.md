# Muhammad Bilal — Portfolio Agent Specification

> **Source of truth for the portfolio build.**
> Target agents: Cursor, Claude Code, Antigravity, Codex, and other autonomous coding agents.

---

## 1. Project Objective

Build a distinctive personal portfolio for:

**Muhammad Bilal**

Primary professional identity:

> **Backend Engineer · .NET · Go & Systems**

Education:

> **Computer Science @ FAST NUCES Karachi · Class of 2027**

Trajectory the portfolio must communicate:

```
Backend Engineering
        ↓
C# / ASP.NET Core / .NET
        ↓
Go / Concurrency
        ↓
Distributed Systems
        ↓
System Design
```

The portfolio should make it immediately clear that:

- Backend engineering is the primary specialization.
- C# / .NET / ASP.NET Core is the primary professional stack.
- Go is a growing systems-oriented skill.
- Concurrency and distributed systems are current areas of development.
- Competitive programming demonstrates algorithmic problem-solving ability.
- Professional internship experience provides real engineering context.
- AI is an achievement/background area, **not** the primary professional identity.

The portfolio should feel like it belongs to a serious backend engineer rather than a generic frontend/developer portfolio.

---

## 2. Professional Positioning

**Established / professional areas** (present confidently):
C#, .NET, ASP.NET Core, Backend development, REST APIs, Databases, Authentication/Authorization, Entity Framework Core, Clean Architecture, CQRS, Unit Testing, Professional .NET internship experience.

**Current development areas** (present as active learning):
Go, Goroutines, Channels, Concurrency, Worker Pools, Fan-out/Fan-in, Pipelines, Distributed Systems, Replication, Consistency, Fault Tolerance, Scalability, System Design.

Do not blur these categories.

---

## 3. Anti-Overclaiming Rule

**Credibility is more important than sounding impressive.**

Do **not** describe Muhammad as: distributed-systems expert, Go expert, systems architect, production infrastructure expert, cloud architect, production-scale distributed systems engineer, highly scalable infrastructure engineer, enterprise architect — unless concrete future evidence supports those claims.

Do **not** claim: millions of requests, millions of users, production-scale infrastructure, enterprise adoption, high availability, fault tolerance in production, production distributed database, industry-leading architecture — unless concrete evidence is provided.

Use accurate language: building, exploring, learning, implementing, experimenting with, focused on, expanding into, currently working on.

---

## 4. Portfolio Concept — Theme: Engineering Command Center

Do **not** simply recreate the old Windows 98 portfolio. The previous portfolio used a Windows 98 desktop/OS metaphor; the new one should feel like an evolution — from a playful operating-system portfolio to a modern engineering workstation.

The visual language may borrow from IDEs, developer tools, observability dashboards, engineering control rooms, modern desktop environments, and system consoles — but this is still a personal portfolio. It must **not** become a fake operating system, a fake monitoring dashboard, a hacker terminal, or a fake infrastructure console.

---

## 5. Design Principle

The interface itself should reflect the engineer Muhammad is becoming.

| Section | Represents |
|---|---|
| Projects | Systems being built |
| Experience | Engineering history |
| Skills | Technology stack |
| GoScale | Systems / concurrency track |
| DevFlow | Backend architecture track |
| Competitive Programming | Algorithms track |
| Achievements | Verified milestones |
| Terminal | Optional developer-style interaction |
| Contact | Connection endpoint |

The interface should feel intentional rather than decorative.

---

## 6. First Impression Requirement

Within ~10–15 seconds, a recruiter should understand:

1. Who Muhammad Bilal is
2. What he specializes in
3. What his primary stack is
4. What he has built
5. Whether he has professional experience
6. What he is currently learning

The visual concept must never make these answers harder to find.

---

## 7. First Agent Action

Before implementing substantial code:

1. Inspect the repository.
2. Inspect `package.json`.
3. Inspect the existing application structure.
4. Inspect all existing components.
5. Inspect existing styling.
6. Inspect public assets.
7. Inspect deployment configuration.
8. Inspect the previous old-os-folio implementation if available.
9. Identify reusable code.
10. Identify obsolete code.
11. Determine whether extending or rebuilding is more efficient.

Do **not** blindly rewrite the repository. Do **not** blindly preserve the old design. Reuse useful infrastructure where appropriate.

---

## 8. Technology

**Preferred stack:** Next.js, React, TypeScript, Tailwind CSS
**Optional:** Framer Motion
**Deployment:** Vercel

No backend, database, or authentication is required — portfolio information should be static/local.

If the repository already uses a sensible modern stack, keep it unless there is a concrete reason to migrate. Do not introduce technologies merely to make the portfolio look more impressive.

---

## 9. Visual Direction

**Overall aesthetic:** Dark technical interface with a modern engineering-console feel.

Characteristics:
- Deep charcoal/black background
- Slightly lighter surfaces
- Thin borders
- Muted secondary text
- Strong white/off-white primary text
- One restrained accent color
- Subtle status indicators
- Clean typography
- Selective monospace typography
- Restrained motion

Should feel: technical, modern, professional, precise, experimental, memorable.
Should **not** feel: cyberpunk, gamer-themed, hacker-themed, excessively futuristic, neon-heavy, corporate-template-like.

---

## 10. Design Elements to Avoid

Giant gradient text, excessive glassmorphism, huge glowing borders, particle backgrounds, WebGL backgrounds, 3D developer avatars, floating programming logos everywhere, stock developer illustrations, fake code rain, excessive neon, unnecessary charts, fake analytics, fake user counts, giant skill percentage bars.

Avoid visual noise.

---

## 11. Main Layout (Conceptual)

```
┌─────────────────────────────────────────────────────────────────┐
│ BILAL // ENGINEERING COMMAND CENTER            ● AVAILABLE      │
├───────────────┬─────────────────────────────────────────────────┤
│               │                                                 │
│ NAVIGATION    │  MUHAMMAD BILAL                                │
│               │  Backend Engineer · .NET · Go & Systems         │
│ > OVERVIEW    │                                                 │
│ > PROJECTS    │  CS @ FAST NUCES Karachi · Class of 2027       │
│ > EXPERIENCE  │                                                 │
│ > SKILLS      │  [ View Projects ] [ GitHub ] [ LinkedIn ]     │
│ > SYSTEMS     │                                                 │
│ > ACHIEVEMENTS│─────────────────────────────────────────────────│
│ > TERMINAL    │                                                 │
│ > CONTACT     │  CURRENT FOCUS                                  │
│               │  Go · Concurrency · Distributed Systems        │
│               │                                                 │
│               │  FEATURED PROJECTS                              │
│               │  GoScale                    DevFlow             │
│               │                                                 │
├───────────────┴─────────────────────────────────────────────────┤
│ .NET BACKEND · GO · SYSTEMS · CP · KARACHI · 2026              │
└─────────────────────────────────────────────────────────────────┘
```

This is conceptual, not a rigid pixel specification. The actual implementation should be visually polished.

---

## 12. Navigation

Primary sections: Overview, Projects, Experience, Skills, Systems, Achievements, Terminal, Contact.

Navigation must remain simple. Important information should never be more than two interactions away. Desktop can use a persistent sidebar; mobile should use a compact navigation solution.

---

## 13. Header

- Display: `BILAL // ENGINEERING COMMAND CENTER`
- Status: `● AVAILABLE`
- Optional metadata: `KARACHI, PK`
- Optional decorative clock (e.g. `20:42`) — do not build real-time infrastructure for it.

---

## 14. Hero

- **Identity:** Muhammad Bilal
- **Subtitle:** Backend Engineer · .NET · Go & Systems
- **Education:** Computer Science @ FAST NUCES Karachi · Class of 2027
- **Description:**
  > I build backend systems with C# / ASP.NET Core, while exploring Go, concurrency, distributed systems, scalability, and system design.
- **Primary actions:** View Projects, GitHub, LinkedIn, Contact

Do **not** use "Hire Me" as the primary CTA.

---

## 15. Hero Secondary Information

Show a compact distinction between the main stack and current exploration:

```
PRIMARY STACK
C# · ASP.NET Core · .NET · SQL

CURRENTLY EXPLORING
Go · Concurrency · Distributed Systems · System Design
```

This distinction prevents the portfolio from making Go/distributed systems appear more mature than they currently are.

---

## 16. Overview

> I'm a Computer Science student at FAST NUCES Karachi focused on backend engineering and building reliable software systems.

**Core interests:**
- **Backend Engineering** — APIs, authentication, architecture, and databases.
- **.NET Development** — ASP.NET Core, Web APIs, Entity Framework Core, and SignalR.
- **Go & Concurrency** — Goroutines, channels, synchronization, and concurrent workloads.
- **Distributed Systems** — Exploring replication, consistency, fault tolerance, and scalability.
- **Competitive Programming** — Algorithms, data structures, and problem solving.

**Closing statement:**
> I'm particularly interested in understanding how backend systems behave under concurrency, load, and failure.

---

## 17. Currently Learning

> I'm expanding from backend development into systems and distributed computing.

- **Go** — Concurrency patterns, networking, and systems-oriented development.
- **Distributed Systems** — Replication, consistency, fault tolerance, and failure handling.
- **System Design** — Scalability, reliability, and system architecture.

These are active-development areas — do not visually present them as completed expertise.

---

## 18. Featured Projects

The two main projects — **GoScale** and **DevFlow** — should receive substantially more visual attention than minor repositories.

---

## 19. GoScale

- **Title:** GoScale
- **Subtitle:** Mini Distributed Systems Lab in Go · In Progress
- **Description:**
  > A hands-on project for exploring how backend systems evolve from concurrent local storage toward distributed state, scaling, and fault tolerance through progressively more complex implementations.
- **Current work:** Concurrent in-memory key-value storage; HTTP APIs and request handling; Goroutines, channels, and synchronization; Graceful shutdown and lifecycle management; Unit testing concurrent components.
- **Next direction:** Distributed storage, Replication, Fault tolerance, Scalability.
- **Repository:** https://github.com/MuhammadBilal64/GoScale (public — confirmed)
- **CTA:** `VIEW SOURCE` (link directly to the repo above)

---

## 20. GoScale Positioning

Do **not** call GoScale a production distributed database, a production distributed storage system, a finished distributed system, or a highly available infrastructure platform. Do not make "Phase 1" the main portfolio message.

The current implementation is foundational. The more interesting story is the trajectory:

```
Concurrent Local Storage → Concurrency → Distributed State → Replication → Fault Tolerance → Scalability
```

Communicate that GoScale is being built progressively to understand these concepts through implementation.

---

## 21. DevFlow

- **Title:** DevFlow
- **Subtitle:** Backend Platform for Team Collaboration
- **Description:**
  > A team collaboration backend built with ASP.NET Core, using Clean Architecture and CQRS with a focus on modularity, maintainability, and testing.
- **Architecture and engineering:** Clean Architecture, CQRS, MediatR, Entity Framework Core, Pipeline Behaviors, Global Exception Handling, Authentication & Authorization, Role-Based Access Control, SignalR, Unit Testing.
- **Implemented modules:** Authentication, Workspace Management, Project Management, Task Management, Notifications.
- **Repository:** https://github.com/MuhammadBilal64/DevFlow

---

## 22. DevFlow Accuracy

Do **not** claim enterprise adoption, production-scale deployment, large user base, millions of requests, or high-availability production infrastructure unless concrete evidence is later supplied.

Use: *"A backend platform built with ASP.NET Core using Clean Architecture and CQRS."*

---

## 23. Experience

**Software Engineering Intern — XEEOFF Pvt Ltd**
Sep 2025 – Dec 2025 · .NET

> Contributed to PhinExIntra, a cybersecurity SaaS platform, and SDrive Admin Portal as part of a .NET engineering team.

Use the official/actual job title if a more precise title is available in the current CV. Do not invent responsibilities, reveal confidential company information, or include salary.

---

## 24. Technical Skills

- **Languages:** C# · Go · C++ · Python · C
- **Backend:** ASP.NET Core · .NET · FastAPI · REST APIs · Entity Framework Core · SignalR
- **Databases:** PostgreSQL · SQL Server · Azure SQL
- **Architecture & Engineering:** Clean Architecture · CQRS · Concurrency · Authentication & Authorization · Unit Testing
- **Infrastructure & Tools:** Docker · Azure · Git · GitHub · Postman · Visual Studio · VS Code

---

## 25. Skill Presentation Rule

Never use arbitrary skill percentages (e.g. "C# 95%", "Go 80%", "Docker 75%") — these imply unjustifiable precision. Use categorized technologies instead.

---

## 26. Systems Section

Use the command-center concept to show progression:

```
BACKEND → CONCURRENCY → DISTRIBUTED SYSTEMS → SYSTEM DESIGN
```

- **Backend:** APIs · Authentication · Architecture · Databases
- **Concurrency:** Goroutines · Channels · Synchronization · Worker Pools
- **Distributed Systems:** Replication · Consistency · Fault Tolerance · Scalability
- **System Design:** Reliability · Failure Handling · Architecture

The visual should communicate progression — it must not imply mastery of all levels.

---

## 27. Systems Visualization

```
┌─────────────────┐
│ BACKEND         │
│ .NET · APIs     │
└────────┬────────┘
         ▼
┌─────────────────┐
│ CONCURRENCY     │
│ Go · Goroutines │
└────────┬────────┘
         ▼
┌─────────────────┐
│ DISTRIBUTED     │
│ Replication     │
└────────┬────────┘
         ▼
┌─────────────────┐
│ SYSTEM DESIGN   │
│ Reliability     │
└─────────────────┘
```

On mobile, this becomes a vertical timeline.

---

## 28. Competitive Programming

> I use competitive programming to strengthen algorithmic thinking, data structures, and problem-solving skills.

- **Primary statistic:** 600+ algorithmic problems solved (aggregate across LeetCode, VJudge, Codeforces, AtCoder, university contests, and other contests — do **not** list platform-specific counts).
- **Achievements:** ICPC Asia Regional Qualifier, Coders Cup 2025 Finalist.
- **Secondary links:** https://leetcode.com/u/bm64812111/ · https://codeforces.com/profile/bm64812111/ (should not dominate the portfolio)

---

## 29. Achievements

- 🥇 PROCOM 2026 — AI Grand Prix Winner
- 🏆 ICPC Asia Regional Qualifier
- 🏅 Coders Cup 2025 Finalist
- 🏅 AI Got Talent Competition — 4th Place
- 🎓 4× Dean's List

Keep the section compact — do not repeat achievements throughout the site.

---

## 30. Terminal

Optional secondary interaction for personality — must **not** be required for navigation.

Example session:
```
$ whoami
Muhammad Bilal

$ role
Backend Engineer

$ primary-stack
C# / ASP.NET Core / .NET

$ exploring
Go / Concurrency / Distributed Systems / System Design

$ problems
600+

$ location
Karachi, Pakistan
```

**Commands:** help, about, projects, skills, experience, systems, achievements, contact, github, clear

Terminal responses should be instant. Do not implement a complex shell, simulate a real OS, or add fake hacker behavior.

---

## 31. Terminal Design

Use terminal styling selectively — do not turn the entire portfolio into a terminal. Normal content must remain readable without interacting with the terminal.

---

## 32. Optional Architecture Views

Provide optional architecture diagrams for GoScale and DevFlow **if they reflect the actual repositories.**

**GoScale:**
```
HTTP → Handlers → Storage → Concurrency / Synchronization → Future Distributed Layer
```

**DevFlow:**
```
HTTP API → Application Layer → CQRS / MediatR → Domain → Infrastructure → Database
```

These diagrams **must** reflect actual repository architecture — do not invent components; update to match reality if the repo differs.

---

## 33. Mobile Design

Mobile is a first-class experience — do **not** simply shrink the desktop layout.

On mobile: compact navigation, full-width cards, stacked project details, responsive terminal, easy-to-tap buttons, no horizontal scrolling, no tiny text, no inaccessible controls.

**Test at:** 375px, 390px, 768px, 1024px, 1280px, 1440px

---

## 34. Responsive Layout

- **Desktop:** persistent sidebar, workspace content, panels/cards, optional secondary info panels.
- **Tablet:** reduce sidebar width, panel density, decorative information — maintain readability.
- **Mobile:** compact top nav or drawer, stacked sections, full-width project cards, vertical systems timeline, accessible terminal, large touch targets.

---

## 35. Interaction Design

Desktop may support navigation transitions, panel expansion, project focus, subtle hover effects, optional focusable panels. Do not make every component draggable — dragging is optional and should only exist if it adds meaningful value. Avoid gimmicky interactions.

---

## 36. Animation

**Good:** panel opening/closing, navigation transition, project expansion, focus transitions, subtle hover states.
**Avoid:** fake boot sequences, fake loading screens, long typing animations, infinite motion, scroll hijacking, excessive parallax, unnecessary page transitions.

Support `prefers-reduced-motion` — disable non-essential animations when enabled.

---

## 37. Accessibility

Required: semantic HTML, keyboard navigation, visible focus states, accessible buttons, appropriate aria-labels, logical heading hierarchy, sufficient contrast, reduced-motion support, keyboard-accessible navigation, meaningful link labels.

Do not rely on hover-only information or make essential content accessible only through JavaScript interactions.

---

## 38. SEO

- **Page title:** Muhammad Bilal — Backend Engineer | .NET · Go & Systems
- **Meta description:** Muhammad Bilal is a Computer Science student at FAST NUCES Karachi focused on backend engineering with .NET, Go, concurrency, and distributed systems.
- Include: favicon, Open Graph metadata, social metadata, semantic headings, descriptive link labels.
- Do not keyword stuff.

---

## 39. Performance

Avoid: large images, unnecessary fonts, unnecessary client-side rendering, background videos, WebGL, particle systems, unnecessary API requests, heavy libraries for simple UI, excessive animation.

Use static/local data wherever possible. Optimize images and bundles. Prefer server components where appropriate (Next.js); use client components only where interactivity requires them.

---

## 40. Data-Driven Content

Project and experience information should be separated from presentation.

```ts
type Project = {
  name: string
  subtitle: string
  description: string
  status?: string
  stack: string[]
  currentWork?: string[]
  next?: string[]
  github?: string
}
```

```
data/
  projects.ts
  experience.ts
  skills.ts
  achievements.ts
  profile.ts
```

Future projects should be addable without rewriting UI components.

---

## 41. Recommended Project Structure

```
app/
  page.tsx
  layout.tsx
  globals.css

components/
  command-center/
    CommandCenter.tsx
    Sidebar.tsx
    Header.tsx
    StatusBar.tsx

  sections/
    Overview.tsx
    Projects.tsx
    Experience.tsx
    Skills.tsx
    Systems.tsx
    CompetitiveProgramming.tsx
    Achievements.tsx
    Contact.tsx

  projects/
    ProjectCard.tsx
    ProjectDetails.tsx
    ArchitectureDiagram.tsx

  terminal/
    Terminal.tsx

  ui/
    Button.tsx
    Badge.tsx
    Panel.tsx
    Icon.tsx

data/
  profile.ts
  projects.ts
  experience.ts
  skills.ts
  achievements.ts

lib/
  ...
```

Exact structure is flexible — do not over-engineer.

---

## 42. Content Hierarchy

- **Tier 1:** Identity, Backend engineering, .NET, Projects (DevFlow, GoScale), Experience
- **Tier 2:** Go, Concurrency, Distributed systems, System design, Skills
- **Tier 3:** Competitive programming, Achievements, Terminal

Visual hierarchy should follow this order.

---

## 43. GitHub Profile Alignment

Both GitHub and portfolio identity should read: **Backend Engineer · .NET · Go & Systems**. Do not position the portfolio as primarily AI-focused — AI achievements remain visible, but backend engineering stays central.

---

## 44. GitHub Activity

A GitHub contribution graph is optional. Do not add multiple GitHub statistics widgets merely because they are common — GitHub already displays contribution activity. Emphasize projects, architecture, experience, and engineering direction rather than vanity metrics.

---

## 45. Contact

**Heading:** Let's Connect

> I'm interested in backend engineering, systems development, distributed systems, and open-source projects.

- **GitHub:** https://github.com/MuhammadBilal64
- **Email:** bilal.maliik.dev@gmail.com
- **LinkedIn:** https://www.linkedin.com/in/bilal-maliik/ (confirmed)

---

## 46. External Link Verification

**Confirmed links (use these exactly):**
- GitHub profile: https://github.com/MuhammadBilal64
- GoScale: https://github.com/MuhammadBilal64/GoScale (public)
- DevFlow: https://github.com/MuhammadBilal64/DevFlow
- LeetCode: https://leetcode.com/u/bm64812111/
- Codeforces: https://codeforces.com/profile/bm64812111/
- LinkedIn: https://www.linkedin.com/in/bilal-maliik/
- Email: bilal.maliik.dev@gmail.com

Before finalizing, agent should still test each link resolves (no 404s) and that DevFlow's repo is accessible in the same way GoScale is. Do not leave outdated URLs from an old portfolio.

---

## 47. What Not to Include

Old portfolio link in main navigation, fake testimonials, fake user counts, fake production metrics, fake benchmarks, arbitrary skill percentages, generic developer quotes, motivational quotes, stock images, AI-generated developer avatars, excessive programming-language logos, every university project, every GitHub repository, unnecessary GitHub statistics, fake loading screens, fake system boot sequences, audio, unnecessary 3D, WebGL, particle backgrounds.

---

## 48. No Fake Operating System

Do **not** implement: fake filesystem, fake kernel, fake CPU, fake memory manager, fake networking stack, fake process manager, fake package manager, fake authentication, fake distributed cluster, elaborate shell parser.

The engineering-console concept is a visual metaphor — the portfolio itself should remain simple.

---

## 49. Old Portfolio Relationship

The previous portfolio used a Windows 98 desktop concept. The new portfolio should **not** feel like "Windows 98 Portfolio v2." It should feel like: *the same developer grew from a playful OS concept into a modern engineering workstation.*

---

## 50. Professional Tone

**Use:** concise, technical, factual, confident.
**Avoid:** "Passionate software engineer who loves changing the world...", "Turning coffee into code ☕", "10x engineer", "Building the future of technology."

**Prefer:**
> I build backend systems with C# / ASP.NET Core while expanding into Go, concurrency, and distributed systems.

---

## 51. Visual Priority

- **Largest emphasis:** Muhammad Bilal, Backend Engineer · .NET · Go & Systems, Projects (DevFlow, GoScale), Experience
- **Secondary:** Skills, Systems, Competitive Programming, Achievements
- **Smallest:** Terminal, decorative interface information

---

## 52. Core Facts

- **Current professional stack:** C# / ASP.NET Core / .NET
- **Current systems direction:** Go / Concurrency / Distributed Systems / System Design
- **Competitive programming:** 600+ algorithmic problems solved
- **Professional experience:** Software Engineering Intern · XEEOFF Pvt Ltd · Sep 2025 – Dec 2025 · .NET
- **Major projects:** DevFlow, GoScale
- **Major achievements:** PROCOM 2026 — AI Grand Prix Winner, ICPC Asia Regional Qualifier, Coders Cup 2025 Finalist, AI Got Talent Competition — 4th Place, 4× Dean's List

---

## 53. Repository Facts

**GoScale:** https://github.com/MuhammadBilal64/GoScale

Direction: Concurrent local storage → concurrency → distributed state → replication → fault tolerance → scalability

Current implementation includes: thread-safe in-memory key-value storage, `sync.RWMutex`, GET/PUT/DELETE HTTP APIs, JSON validation/error handling, health endpoint, graceful shutdown, unit tests, concurrent access testing.

Do not dump all of these implementation details into the hero — use them selectively in the project detail view.

---

## 54. GoScale Public Visibility

**Confirmed: GoScale is public.** Use `VIEW SOURCE` linking directly to https://github.com/MuhammadBilal64/GoScale — no conditional logic needed for this project.

(General rule retained for any future project added to the portfolio: if a repo is private, use `PROJECT IN PROGRESS` or another truthful CTA instead of exposing a broken link. Only link directly to a repository when it is intentionally public and ready for visitors.)

---

## 55. DevFlow Details

DevFlow is the strongest representation of established backend architecture — use it to demonstrate ASP.NET Core, Clean Architecture, CQRS, MediatR, EF Core, authentication, authorization, RBAC, SignalR, testing, and modular backend design.

```
API → Application → Domain → Infrastructure → Database
```

Only if this matches the actual implementation.

---

## 56. Competitive Programming Count

Display: **600+ Algorithmic Problems Solved**

Do **not** display a platform-by-platform breakdown (e.g. "130 LeetCode, 160 VJudge..."). It's unnecessary for the main portfolio; add as a secondary view later if desired.

---

## 57. Achievement Priority

The portfolio should not become an achievement wall. Achievements support the professional story (Backend Engineering → .NET → Projects → Professional Experience → Systems Development) — they do not replace it.

---

## 58. UI Component Principles

Build reusable components for: Panel, Button, Badge, Section header, Status indicator, Project card, Skill group, Timeline item, Terminal line, Navigation item.

Avoid one giant page component; avoid excessive fragmentation.

---

## 59. Color System

Restrained palette, example direction:

| Token | Value |
|---|---|
| Background | `#0A0A0A` |
| Surface | `#111111` |
| Surface Elevated | `#171717` |
| Border | `#262626` |
| Primary Text | `#F5F5F5` |
| Secondary Text | `#A3A3A3` |
| Muted Text | `#737373` |
| Accent | One restrained technical accent (agent's choice) |

Do not use many accent colors. Status colors should be reserved for meaningful states.

---

## 60. Typography

Modern sans-serif for normal content. Monospace selectively for terminal, labels, system metadata, code-like elements, status information. Do not make the entire portfolio monospace — prioritize readability.

---

## 61. Panels

Subtle border, low/modest radius, clear hierarchy, restrained shadows, consistent spacing.
Avoid: excessive glass effects, glowing cards, huge shadows, decorative borders everywhere.

---

## 62. Command Center Status Bar (Optional Footer)

```
.NET BACKEND · GO · SYSTEMS · CP · KARACHI · 2026
```

Decorative metadata — must not replace meaningful content.

---

## 63. Navigation Behavior

Clicking a nav item should scroll to the relevant section, update active state, preserve accessibility, and work without JavaScript where possible. Use semantic section IDs, e.g.:

`#overview #projects #experience #skills #systems #achievements #terminal #contact`

---

## 64. URL / Routing Strategy

Single-page portfolio preferred unless the existing application benefits from routing. Potential future detail routes: `/projects/goscale`, `/projects/devflow`. Do not create multiple routes simply for visual complexity.

---

## 65. Interaction Priority

**Useful:** open project details, view source, navigate sections, expand architecture, terminal commands, external links.
**Unnecessary:** draggable cards everywhere, fake window resizing, fake OS controls, fake minimizing, fake process/task manager, fake command-line networking.

---

## 66. Terminal Implementation

Keep terminal state local — no server, no persistence required.

```ts
type TerminalCommand = {
  input: string
  output: string[]
}
```

Command parser supports only known commands. Unknown command:
```
command not found: <input>
Type "help" to see available commands.
```

No arbitrary code execution, no eval, no shell access.

---

## 67. Error Handling

Never display raw application errors.
- Terminal: `command not found`
- Navigation: fail gracefully
- Missing project data: render a safe fallback rather than crashing

---

## 68. Security

Do not: execute arbitrary terminal commands, expose environment variables, expose server credentials, expose API keys, include secrets in source, use unsafe HTML rendering, use eval. All external links should be deliberate.

---

## 69. SEO / Social Preview

Create appropriate Open Graph metadata. Suggested preview: "Muhammad Bilal — Backend Engineer · .NET · Go & Systems." Do not use an AI-generated face/avatar; preview image can use the engineering-console visual language.

---

## 70. Favicon

Simple favicon — e.g. "B", "B//", or another minimal mark derived from the portfolio identity. Do not create a complicated logo.

---

## 71. Content Rule

Never invent: projects, companies, responsibilities, awards, technologies, metrics, users, performance numbers, production claims. If information is missing, inspect repository/source data, preserve existing verified information, use neutral wording, and do not fabricate.

---

## 72. Source-of-Truth Content

- **Identity:** Muhammad Bilal — Backend Engineer · .NET · Go & Systems
- **Education:** Computer Science @ FAST NUCES Karachi · Class of 2027
- **Primary stack:** C#, ASP.NET Core, .NET, SQL
- **Systems direction:** Go, Concurrency, Distributed Systems, System Design
- **Experience:** Software Engineering Intern, XEEOFF Pvt Ltd, Sep 2025 – Dec 2025, .NET
- **Projects:** DevFlow, GoScale
- **CP:** 600+ algorithmic problems solved, ICPC Asia Regional Qualifier, Coders Cup 2025 Finalist
- **Achievements:** PROCOM 2026 — AI Grand Prix Winner, AI Got Talent Competition — 4th Place, 4× Dean's List

---

## 73. Project Card Design

Each card should include: Project name, subtitle, short description, status, technologies, current work / key engineering, "View Source." Do not overload cards with paragraphs — use progressive disclosure (Card → Details → Architecture/implementation).

---

## 74. GoScale Card

```
┌────────────────────────────────────┐
│ GOSCALE                    IN PROGRESS │
│                                    │
│ Mini Distributed Systems Lab       │
│ in Go                              │
│                                    │
│ Concurrency · Storage · Systems    │
│                                    │
│ Exploring how backend systems      │
│ evolve toward distributed state.   │
│                                    │
│ [ VIEW SOURCE ]                    │
└────────────────────────────────────┘
```

---

## 75. DevFlow Card

```
┌────────────────────────────────────┐
│ DEVFLOW                            │
│                                    │
│ Backend Platform                  │
│ for Team Collaboration             │
│                                    │
│ ASP.NET Core · CQRS · Clean Arch. │
│                                    │
│ Modular backend focused on         │
│ maintainability and testing.       │
│                                    │
│ [ VIEW SOURCE ]                    │
└────────────────────────────────────┘
```

---

## 76. Experience Timeline

```
2025
 │
 ├── XEEOFF Pvt Ltd
 │   Software Engineering Intern
 │   .NET
 │
2026
 │
 ├── DevFlow
 │   Backend Architecture
 │
 └── GoScale
     Go / Concurrency / Systems
```

Only include information supported by actual history.

---

## 77. Systems Learning Timeline

```
BACKEND (Established foundation)
   ↓
GO (Current development)
   ↓
CONCURRENCY (Current implementation)
   ↓
DISTRIBUTED SYSTEMS (Active exploration)
   ↓
SYSTEM DESIGN (Growing focus)
```

Reinforce professional growth rather than imply mastery.

---

## 78. Responsive Terminal

On mobile: full-width, readable monospace font, horizontally scrollable code lines only if unavoidable, command buttons optional, no tiny text. The terminal should never create page-level horizontal overflow.

---

## 79. Accessibility Checks

Tab navigation, Enter/Space activation, Escape where appropriate, visible focus, screen reader labels, heading hierarchy, contrast, reduced motion. Do not hide keyboard focus.

---

## 80. Performance Checks

Run `npm run build` (or the repository's build command). Check TypeScript, lint, console, hydration, broken assets, broken links. Do not ship with avoidable errors.

---

## 81. QA Checklist

**Identity**
- [ ] Muhammad Bilal displayed correctly
- [ ] Backend Engineer is primary identity
- [ ] .NET clearly positioned as primary stack
- [ ] Go positioned as emerging systems focus
- [ ] FAST NUCES Karachi correct
- [ ] Class of 2027 correct

**Projects**
- [ ] GoScale included, marked In Progress, not presented as finished distributed system
- [ ] DevFlow included, architecture accurate
- [ ] Project links work, no broken repository links

**Experience**
- [ ] XEEOFF included, dates correct, .NET context included
- [ ] No confidential information, no exaggerated responsibilities

**Skills**
- [ ] C#, ASP.NET Core, .NET, Go, databases, architecture skills, infrastructure/tools included
- [ ] No arbitrary percentages

**Competitive Programming**
- [ ] 600+ included, ICPC qualifier included, Coders Cup finalist included
- [ ] LeetCode and Codeforces links work

**Achievements**
- [ ] PROCOM AI Grand Prix Winner
- [ ] ICPC Regional Qualifier
- [ ] Coders Cup finalist
- [ ] AI Got Talent 4th Place
- [ ] 4× Dean's List

**UX**
- [ ] Desktop / tablet / mobile all work, no horizontal scrolling
- [ ] Navigation obvious, keyboard navigation works, focus states work
- [ ] Reduced motion works, no hover-only critical information, touch targets usable

**Performance**
- [ ] No unnecessary API calls, oversized assets, or unnecessary dependencies
- [ ] No heavy animation, no console errors, production build works

**Quality**
- [ ] No placeholders, Lorem Ipsum, fake metrics, fake claims, broken links, unfinished TODOs, overclaiming, or unnecessary UI

---

## 82. Acceptance Criteria

The portfolio is complete only when:

1. The design is distinctive without being gimmicky.
2. Backend engineering is immediately obvious.
3. .NET is clearly the primary professional stack.
4. Go is clearly presented as an expanding systems skill.
5. Distributed systems are presented as active development.
6. DevFlow demonstrates backend architecture.
7. GoScale demonstrates systems/concurrency learning.
8. XEEOFF demonstrates professional experience.
9. Competitive programming demonstrates algorithmic ability.
10. Achievements are visible but do not dominate.
11. Mobile is intentionally designed.
12. Accessibility is acceptable.
13. Performance is strong.
14. External links work.
15. Unsupported professional claims do not exist.
16. The interface adds personality without hiding content.
17. The portfolio feels like an evolution of the previous OS portfolio, not a clone.
18. The site is visually coherent.
19. The primary professional story is understandable without interacting with the terminal.
20. The site still works if all animations are disabled.

---

## 83. Implementation Order

Follow this order unless repository constraints require another sequence.

1. **Repository Inspection** — inspect source, dependencies, framework, assets, existing components, deployment, old portfolio. Determine reuse strategy. Do not code major UI yet.
2. **Design Foundation** — typography, colors, spacing, borders, panel system, buttons, badges, responsive foundation.
3. **Command Center Shell** — header, navigation, main workspace, status bar, responsive shell.
4. **Overview** — hero, professional identity, current focus, quick actions.
5. **Projects** — GoScale, DevFlow, project cards, detail views, architecture views where accurate.
6. **Experience** — XEEOFF, timeline.
7. **Skills** — technical stack, primary vs. developing distinction.
8. **Systems** — backend → concurrency → distributed systems → system design progression.
9. **Competitive Programming** — 600+ statistic, ICPC, Coders Cup, secondary LeetCode/Codeforces links.
10. **Achievements** — PROCOM, AI Got Talent, Dean's List, other verified achievements.
11. **Terminal** — lightweight, non-essential.
12. **Contact** — GitHub, LinkedIn, email.
13. **Mobile** — intentionally designed, not shrunk desktop.
14. **Accessibility** — keyboard, focus, semantics, labels, contrast, reduced motion.
15. **SEO** — title, description, favicon, Open Graph, social metadata, semantic structure.
16. **Performance** — images, bundle, client components, dependencies, animations.
17. **QA** — run complete QA.

---

## 84. Agent Behavior Rules

The coding agent must:

- Inspect before changing.
- Prefer reuse when reasonable.
- Avoid unnecessary rewrites and dependencies.
- Keep content data-driven and components maintainable.
- Preserve existing working infrastructure unless there is a reason to change it.
- Test after significant changes; fix errors rather than hiding them.
- Never fabricate information or create fake metrics.
- Never add technologies simply for appearance.
- Never expose secrets or execute arbitrary terminal input.
- Never make the portfolio dependent on the terminal.
- Never sacrifice readability for the visual concept.

---

## 85. When the Agent Has Doubts

If an implementation choice is ambiguous, prefer, in order:

1. Accuracy
2. Readability
3. Professional credibility
4. Performance
5. Accessibility
6. Maintainability
7. Visual novelty

Do not choose novelty over clarity.

---

## 86. Design Decision Rule

If a visual element looks cool but does not communicate useful information, remove it. If it communicates useful information *and* reinforces the engineering-console theme, keep it. The theme is a means of presentation, not the product itself.

---

## 87. No Visual Gimmick Dependency

The portfolio must still look professional if animations are disabled, the terminal is closed, decorative status information is removed, or JavaScript interactions are unavailable for basic navigation. The underlying content must remain strong.

---

## 88. Final Professional Story

```
Muhammad Bilal
      ↓
Backend Engineer
      ↓
C# / ASP.NET Core / .NET
      ↓
Real Backend Projects
      ↓
Professional .NET Experience
      ↓
Go + Concurrency
      ↓
Distributed Systems
      ↓
System Design
```

Competitive programming supports the algorithmic foundation. AI achievements support the broader achievement profile. Neither should replace the backend narrative.

---

## 89. Final Content Reference

**Hero**
> Muhammad Bilal
> Backend Engineer · .NET · Go & Systems
> Computer Science @ FAST NUCES Karachi · Class of 2027
> I build backend systems with C# / ASP.NET Core, while exploring Go, concurrency, distributed systems, scalability, and system design.

**Current Focus**
```
PRIMARY STACK
C# · ASP.NET Core · .NET · SQL

CURRENTLY EXPLORING
Go · Concurrency · Distributed Systems · System Design
```

**GoScale** — Mini Distributed Systems Lab in Go · In Progress
> A hands-on project for exploring how backend systems evolve from concurrent local storage toward distributed state, scaling, and fault tolerance through progressively more complex implementations.

Current work: Concurrent in-memory key-value storage; HTTP APIs and request handling; Goroutines, channels, and synchronization; Graceful shutdown and lifecycle management; Unit testing concurrent components.
Next: Distributed storage, Replication, Fault tolerance, Scalability.

**DevFlow** — Backend Platform for Team Collaboration
> A team collaboration backend built with ASP.NET Core, using Clean Architecture and CQRS with a focus on modularity, maintainability, and testing.

Architecture: Clean Architecture, CQRS, MediatR, Entity Framework Core, Pipeline Behaviors, Global Exception Handling, Authentication & Authorization, Role-Based Access Control, SignalR, Unit Testing.
Modules: Authentication, Workspace Management, Project Management, Task Management, Notifications.

**Experience**
Software Engineering Intern — XEEOFF Pvt Ltd — Sep 2025 – Dec 2025 · .NET
> Contributed to PhinExIntra, a cybersecurity SaaS platform, and SDrive Admin Portal as part of a .NET engineering team.

**Competitive Programming**
600+ Algorithmic Problems Solved
> I use competitive programming to strengthen algorithmic thinking, data structures, and problem-solving skills.
Achievements: ICPC Asia Regional Qualifier, Coders Cup 2025 Finalist.

**Achievements**
PROCOM 2026 — AI Grand Prix Winner · ICPC Asia Regional Qualifier · Coders Cup 2025 Finalist · AI Got Talent Competition — 4th Place · 4× Dean's List

**Contact**
> Let's Connect. I'm interested in backend engineering, systems development, distributed systems, and open-source projects.

---

## 90. Final Verification

Before declaring completion:

- Run the application and the production build.
- Fix TypeScript errors, meaningful lint errors, console errors.
- Test desktop, tablet, mobile, keyboard navigation, reduced-motion mode.
- Verify every external link, project description, date, and achievement claim.
- Verify the 600+ problem count, LinkedIn URL, GitHub URLs, email link.
- Check SEO metadata and social preview metadata.
- Inspect visual hierarchy; remove unnecessary UI, placeholder content, fake loading/boot behavior, unsupported claims, broken interactions.
- Check mobile overflow, accessibility, performance.
- Perform one final polish pass.

Do not declare the project finished until these checks are complete.

---

## 91. Final Product Principle

The portfolio should answer one question immediately: **What kind of engineer is Muhammad Bilal becoming?**

The answer should be visible without explanation: *a backend engineer grounded in .NET, strengthening his systems skills through Go, concurrency, distributed systems, and algorithmic problem solving.*

The interface should reinforce this story — it should not obscure it.

---

## 92. Final Agent Command

Build the portfolio completely according to this specification.

Before writing substantial code:

**INSPECT → UNDERSTAND → PLAN → IMPLEMENT → TEST → POLISH**

Do not blindly preserve the previous Windows 98 design. Do not blindly rewrite the existing project. Build a modern **Engineering Command Center**.

The result should feel like a serious backend engineer's personal engineering workstation — memorable because of its engineering-focused interface, real projects, accurate technical positioning, professional experience, systems-learning trajectory, and clean execution.

**NOT** because of gimmicks, fake dashboards, fake operating-system behavior, excessive animations, visual noise, or unsupported claims.

The final result must be: **TECHNICAL + PROFESSIONAL + MEMORABLE + FAST + ACCESSIBLE + ACCURATE**
and never: **GIMMICKY + OVERCLAIMED + SLOW + OVERDESIGNED**

---

*End of specification.*
