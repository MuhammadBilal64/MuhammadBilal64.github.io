import { navItems } from "@/data/profile";

type SidebarProps = {
  activeId: string;
  onNavigate?: () => void;
};

export function Sidebar({ activeId, onNavigate }: SidebarProps) {
  return (
    <nav aria-label="Primary" className="flex h-full flex-col">
      <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-dim">
        Navigation
      </p>
      <ul className="flex flex-col gap-1">
        {navItems.map((item) => {
          const active = item.id === activeId;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={onNavigate}
                aria-current={active ? "location" : undefined}
                className={`flex min-h-11 items-center gap-2 rounded-panel px-3 font-mono text-xs uppercase tracking-[0.12em] transition-colors ${
                  active
                    ? "bg-elevated text-ink"
                    : "text-mute hover:bg-elevated/70 hover:text-ink"
                }`}
              >
                <span className={active ? "text-accent" : "text-dim"} aria-hidden="true">
                  {active ? ">" : "·"}
                </span>
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
