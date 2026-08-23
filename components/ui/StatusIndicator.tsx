type StatusIndicatorProps = {
  label: string;
};

export function StatusIndicator({ label }: StatusIndicatorProps) {
  return (
    <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-ok">
      <span className="relative flex h-2 w-2" aria-hidden="true">
        <span className="absolute inline-flex h-full w-full rounded-full bg-ok opacity-50 motion-safe:animate-ping" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-ok" />
      </span>
      {label}
    </span>
  );
}
