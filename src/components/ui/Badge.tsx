import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "gold" | "outline";
  className?: string;
}

export function Badge({
  children,
  variant = "primary",
  className = "",
}: BadgeProps) {
  const variantClasses = {
    primary: "bg-[var(--color-badge-bg)] text-[var(--color-badge-text)] border-[var(--color-border)]",
    secondary: "bg-[var(--color-surface-subtle)] text-[var(--color-text-muted)] border-[var(--color-border)]",
    gold: "bg-[rgba(212,175,55,0.18)] text-[var(--color-primary)] border-[var(--color-primary)]",
    outline: "bg-transparent text-[var(--color-text-muted)] border-[var(--color-border-strong)]",
  }[variant];

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium tracking-wide border ${variantClasses} ${className}`}
    >
      {children}
    </span>
  );
}
