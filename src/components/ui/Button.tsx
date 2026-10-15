import React from "react";
import Link from "next/link";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "gold";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
  isLoading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  external = false,
  isLoading = false,
  icon,
  iconPosition = "right",
  className = "",
  disabled,
  children,
  ...props
}: ButtonProps) {
  const sizeClasses = {
    sm: "px-3.5 py-1.5 text-xs font-medium tracking-wider",
    md: "px-5 py-2.5 text-sm font-semibold tracking-wide",
    lg: "px-7 py-3.5 text-base font-semibold tracking-wide",
  }[size];

  const variantClasses = {
    primary:
      "bg-[var(--color-primary)] text-[var(--color-primary-foreground)] hover:bg-[var(--color-primary-hover)] shadow-md hover:shadow-lg focus-visible:ring-[var(--color-primary)] border border-transparent",
    secondary:
      "bg-[var(--color-secondary)] text-[var(--color-secondary-foreground)] hover:bg-[var(--color-secondary-hover)] focus-visible:ring-[var(--color-secondary)] border border-[var(--color-border)]",
    outline:
      "bg-transparent text-[var(--color-text)] hover:text-[var(--color-primary)] border border-[var(--color-border-strong)] hover:border-[var(--color-primary)] hover:bg-[var(--color-accent-subtle)] focus-visible:ring-[var(--color-primary)]",
    ghost:
      "bg-transparent text-[var(--color-text)] hover:text-[var(--color-primary)] hover:bg-[var(--color-surface-subtle)] focus-visible:ring-[var(--color-primary)] border border-transparent",
    gold:
      "bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#aa8c2c] text-[#0c0d10] font-bold hover:brightness-110 shadow-lg shadow-[rgba(212,175,55,0.2)] border border-transparent",
  }[variant];

  const baseClasses =
    "inline-flex items-center justify-center gap-2 rounded-[var(--border-radius,8px)] transition-all duration-200 cursor-pointer select-none outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98] max-w-full text-center";

  const combinedClasses = `${baseClasses} ${sizeClasses} ${variantClasses} ${className}`;

  const content = (
    <>
      {isLoading && (
        <svg
          className="animate-spin -ml-1 mr-2 h-4 w-4 text-current shrink-0"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {!isLoading && icon && iconPosition === "left" && <span className="inline-flex shrink-0">{icon}</span>}
      <span className="break-words leading-tight">{children}</span>
      {!isLoading && icon && iconPosition === "right" && <span className="inline-flex shrink-0">{icon}</span>}
    </>
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button
      className={combinedClasses}
      disabled={disabled || isLoading}
      {...props}
    >
      {content}
    </button>
  );
}
