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
    <div className={`flex flex-col max-w-3xl w-full mb-8 sm:mb-12 lg:mb-16 ${alignClasses} ${className}`}>
      {eyebrow && (
        <span className="inline-block text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] font-semibold text-[var(--color-primary)] mb-2.5 sm:mb-3 px-3 py-1 rounded-full bg-[var(--color-badge-bg)] border border-[var(--color-border)] max-w-full truncate">
          {eyebrow}
        </span>
      )}
      <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-normal tracking-tight text-[var(--color-text)] leading-[1.18] sm:leading-[1.15] text-balance break-words w-full">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 sm:mt-4 text-xs sm:text-base text-[var(--color-text-muted)] font-normal leading-relaxed max-w-2xl px-1 text-balance break-words">
          {subtitle}
        </p>
      )}
      <div className={`mt-4 sm:mt-5 h-[2px] w-10 sm:w-12 bg-[var(--color-primary)] rounded-full ${align === "center" ? "mx-auto" : ""}`} />
    </div>
  );
}
