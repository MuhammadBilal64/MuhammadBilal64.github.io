type BadgeProps = {
  children: React.ReactNode;
  tone?: "default" | "accent" | "ok";
};

export function Badge({ children, tone = "default" }: BadgeProps) {
  const tones = {
    default: "border-line text-mute",
    accent: "border-accent/40 text-accent",
    ok: "border-ok/40 text-ok",
  };

  return (
    <span
      className={`inline-flex items-center rounded-panel border px-2 py-0.5 font-mono text-[11px] tracking-wide uppercase ${tones[tone]}`}
    >
      {children}
    </span>
  );
}
