type SectionHeaderProps = {
  id?: string;
  kicker?: string;
  title: string;
  description?: string;
};

export function SectionHeader({
  id,
  kicker,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <header className="mb-6">
      {kicker ? (
        <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.18em] text-dim">
          {kicker}
        </p>
      ) : null}
      <h2
        id={id}
        className="text-xl font-semibold tracking-tight text-ink sm:text-2xl"
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-mute sm:text-base">
          {description}
        </p>
      ) : null}
    </header>
  );
}
