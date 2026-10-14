import React from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const alignClasses = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  }[align];

  return (
    <div className={`flex flex-col max-w-3xl mb-12 sm:mb-16 ${alignClasses} ${className}`}>
      {eyebrow && (
        <span className="inline-block text-xs uppercase tracking-[0.25em] font-semibold text-[var(--color-primary)] mb-3 px-3 py-1 rounded-full bg-[var(--color-badge-bg)] border border-[var(--color-border)]">
          {eyebrow}
        </span>
      )}
      <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[var(--color-text)] leading-[1.15]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-[var(--color-text-muted)] font-normal leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}
      <div className={`mt-5 h-[2px] w-12 bg-[var(--color-primary)] rounded-full ${align === "center" ? "mx-auto" : ""}`} />
    </div>
  );
}
