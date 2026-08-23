"use client";

import { useEffect, useState } from "react";
import { Header } from "@/components/command-center/Header";
import { Sidebar } from "@/components/command-center/Sidebar";
import { StatusBar } from "@/components/command-center/StatusBar";
import { navItems } from "@/data/profile";

const SECTION_IDS = navItems.map((item) => item.id);

export function CommandCenter({ children }: { children: React.ReactNode }) {
  const [activeId, setActiveId] = useState("overview");
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => Boolean(el),
    );

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) {
          setActiveId(visible.target.id);
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: [0.1, 0.25, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!navOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setNavOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [navOpen]);

  return (
    <div className="flex min-h-dvh flex-col bg-bg">
      <a
        href="#overview"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-panel focus:bg-elevated focus:px-3 focus:py-2"
      >
        Skip to content
      </a>
      <Header onOpenNav={() => setNavOpen(true)} />
      <div className="flex min-h-0 flex-1">
        <aside className="hidden w-56 shrink-0 border-r border-line bg-bg p-4 lg:block xl:w-60">
          <Sidebar activeId={activeId} />
        </aside>
        {navOpen ? (
          <div className="fixed inset-0 z-40 lg:hidden">
            <button
              type="button"
              className="absolute inset-0 bg-black/60"
              aria-label="Close navigation"
              onClick={() => setNavOpen(false)}
            />
            <aside className="relative z-10 h-full w-64 max-w-[85vw] border-r border-line bg-bg p-4">
              <div className="mb-4 flex items-center justify-between">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-dim">
                  Menu
                </p>
                <button
                  type="button"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-panel border border-line"
                  onClick={() => setNavOpen(false)}
                  aria-label="Close navigation"
                >
                  ×
                </button>
              </div>
              <Sidebar activeId={activeId} onNavigate={() => setNavOpen(false)} />
            </aside>
          </div>
        ) : null}
        <main className="min-w-0 flex-1 overflow-y-auto px-4 py-8 sm:px-6 lg:px-10 lg:py-10">
          <div className="mx-auto flex max-w-5xl flex-col gap-16 pb-8 lg:gap-20">
            {children}
          </div>
        </main>
      </div>
      <StatusBar />
    </div>
  );
}
