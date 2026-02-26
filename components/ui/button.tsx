import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  fullWidth?: boolean;
  onClick?: () => void;
  ariaLabel?: string;
  disabled?: boolean;
};

const baseStyles =
  "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold tracking-wide transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

const variants = {
  primary:
    "bg-accent text-white hover:bg-red-700 focus-visible:outline-accent shadow-card",
  secondary:
    "border border-border bg-surface text-text hover:border-accent hover:text-accent focus-visible:outline-accent",
  ghost:
    "text-text hover:text-accent focus-visible:outline-accent"
};

export function Button({
  children,
  href,
  type = "button",
  variant = "primary",
  className,
  fullWidth,
  onClick,
  ariaLabel,
  disabled
}: ButtonProps) {
  const classes = cn(
    baseStyles,
    variants[variant],
    fullWidth && "w-full",
    disabled && "cursor-not-allowed opacity-60",
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      aria-label={ariaLabel}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
