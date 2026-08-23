import type { ComponentPropsWithoutRef, ElementType } from "react";

type PanelProps<T extends ElementType = "div"> = {
  as?: T;
  children: React.ReactNode;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

export function Panel<T extends ElementType = "div">({
  children,
  className = "",
  as,
  ...props
}: PanelProps<T>) {
  const Tag = as ?? "div";

  return (
    <Tag
      className={`rounded-panel border border-line bg-surface shadow-panel ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
}
