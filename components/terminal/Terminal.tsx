"use client";

import { FormEvent, useRef, useState } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { runCommand, welcomeLines, type TerminalCommand } from "@/lib/terminal";

const QUICK_COMMANDS = [
  "help",
  "about",
  "projects",
  "skills",
  "experience",
  "systems",
  "achievements",
  "contact",
  "github",
  "clear",
];

export function Terminal() {
  const [history, setHistory] = useState<TerminalCommand[]>([]);
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  function submit(command: string) {
    const result = runCommand(command);
    if (result.input.toLowerCase() === "clear") {
      setHistory([]);
      return;
    }
    setHistory((current) => [...current, result]);
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    submit(value);
    setValue("");
  }

  return (
    <section id="terminal" aria-labelledby="terminal-heading" className="scroll-mt-6">
      <SectionHeader
        id="terminal-heading"
        kicker="Optional interaction"
        title="Terminal"
        description="A lightweight command list. Navigation does not depend on it."
      />
      <div className="rounded-panel border border-line bg-[#0C0C0C] p-4 sm:p-5">
        <div
          className="terminal-scroll max-h-80 overflow-auto font-mono text-sm leading-6 text-mute"
          role="log"
          aria-live="polite"
          onClick={() => inputRef.current?.focus()}
        >
          {welcomeLines.map((line) => (
            <p key={line} className={line.startsWith("$") ? "text-accent" : ""}>
              {line}
            </p>
          ))}
          {history.map((entry, index) => (
            <div key={`${entry.input}-${index}`} className="mt-3">
              <p className="text-accent">$ {entry.input}</p>
              {entry.output.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          ))}
        </div>
        <form onSubmit={onSubmit} className="mt-4 flex items-center gap-2 border-t border-line pt-4">
          <label htmlFor="terminal-input" className="font-mono text-accent">
            $
          </label>
          <input
            id="terminal-input"
            ref={inputRef}
            value={value}
            onChange={(event) => setValue(event.target.value)}
            className="min-h-11 w-full bg-transparent font-mono text-sm text-ink outline-none"
            autoComplete="off"
            spellCheck={false}
            aria-label="Terminal command"
          />
        </form>
        <div className="mt-4 flex flex-wrap gap-2">
          {QUICK_COMMANDS.map((command) => (
            <button
              key={command}
              type="button"
              className="min-h-10 rounded-panel border border-line px-3 font-mono text-xs text-mute hover:text-ink"
              onClick={() => submit(command)}
            >
              {command}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
