"use client";

import { useEffect, useState } from "react";
import { StatusIndicator } from "@/components/ui/StatusIndicator";
import { profile } from "@/data/profile";

type HeaderProps = {
  onOpenNav: () => void;
};

export function Header({ onOpenNav }: HeaderProps) {
  const [clock, setClock] = useState("--:--");

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const hh = String(now.getHours()).padStart(2, "0");
      const mm = String(now.getMinutes()).padStart(2, "0");
      setClock(`${hh}:${mm}`);
    };
    tick();
    const id = window.setInterval(tick, 30_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <header className="flex h-12 items-center justify-between gap-3 border-b border-line bg-bg px-3 sm:px-4">
      <div className="flex min-w-0 items-center gap-3">
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-panel border border-line text-ink lg:hidden"
          onClick={onOpenNav}
          aria-label="Open navigation"
        >
          <span aria-hidden="true">☰</span>
        </button>
        <p className="truncate font-mono text-[11px] uppercase tracking-[0.16em] text-ink sm:text-xs">
          {profile.headerTitle}
        </p>
      </div>
      <div className="flex shrink-0 items-center gap-3 sm:gap-4">
        <span className="hidden font-mono text-[11px] uppercase tracking-[0.12em] text-dim sm:inline">
          {profile.location}
        </span>
        <time className="hidden font-mono text-[11px] text-mute md:inline" dateTime={clock}>
          {clock}
        </time>
        <StatusIndicator label={profile.status} />
      </div>
    </header>
  );
}
