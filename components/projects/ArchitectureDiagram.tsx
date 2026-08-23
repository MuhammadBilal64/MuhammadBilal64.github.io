type ArchitectureDiagramProps = {
  steps: string[];
  caption?: string;
};

export function ArchitectureDiagram({ steps, caption }: ArchitectureDiagramProps) {
  return (
    <figure>
      {caption ? (
        <figcaption className="mb-3 font-mono text-[11px] uppercase tracking-[0.16em] text-dim">
          {caption}
        </figcaption>
      ) : null}
      <ol className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center">
        {steps.map((step, index) => (
          <li key={step} className="flex items-center gap-2">
            <span className="rounded-panel border border-line bg-elevated px-3 py-2 text-sm text-ink">
              {step}
            </span>
            {index < steps.length - 1 ? (
              <span className="hidden text-dim sm:inline" aria-hidden="true">
                →
              </span>
            ) : null}
            {index < steps.length - 1 ? (
              <span className="text-dim sm:hidden" aria-hidden="true">
                ↓
              </span>
            ) : null}
          </li>
        ))}
      </ol>
    </figure>
  );
}
