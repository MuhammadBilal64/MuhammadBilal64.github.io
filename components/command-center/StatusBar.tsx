import { profile } from "@/data/profile";

export function StatusBar() {
  return (
    <footer className="flex h-9 items-center overflow-hidden border-t border-line bg-bg px-4">
      <p className="truncate font-mono text-[11px] uppercase tracking-[0.16em] text-dim">
        {profile.statusBar}
      </p>
    </footer>
  );
}
