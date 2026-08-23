import { type ButtonHTMLAttributes, type AnchorHTMLAttributes } from "react";

const base =
  "inline-flex items-center justify-center gap-2 rounded-panel border px-3.5 py-2 text-sm font-medium transition-colors min-h-11";

const variants = {
  primary:
    "border-accent/40 bg-accent/10 text-ink hover:bg-accent/20",
  ghost:
    "border-line bg-transparent text-ink hover:bg-elevated",
  subtle:
    "border-line bg-surface text-mute hover:text-ink hover:bg-elevated",
} as const;

type Variant = keyof typeof variants;

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
};

export function Button({
  variant = "ghost",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props} />
  );
}

type LinkButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant;
};

export function LinkButton({
  variant = "ghost",
  className = "",
  ...props
}: LinkButtonProps) {
  return (
    <a className={`${base} ${variants[variant]} ${className}`} {...props} />
  );
}
