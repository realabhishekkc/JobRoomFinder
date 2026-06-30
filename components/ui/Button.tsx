import { forwardRef } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "outline" | "ghost" | "boost";
type Size = "sm" | "md" | "lg";

const base =
  "relative inline-flex items-center justify-center gap-2 font-medium rounded-pill transition-[transform,box-shadow,background-color,border-color,color] duration-150 ease-out focus-visible:ring-2 focus-visible:ring-crimson focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none disabled:shadow-none select-none active:translate-y-px overflow-hidden";

// Tactile depth: brand gradient + soft elevation + a thin top sheen line.
const sheen =
  "before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-1/2 before:bg-gradient-to-b before:from-white/25 before:to-transparent";

const variants: Record<Variant, string> = {
  primary: `bg-gradient-to-b from-crimson to-crimson-deep text-white shadow-[0_1px_2px_rgb(143_11_34/0.4),0_8px_18px_-8px_rgb(143_11_34/0.55)] hover:shadow-[0_2px_4px_rgb(143_11_34/0.45),0_14px_26px_-10px_rgb(143_11_34/0.6)] hover:-translate-y-0.5 active:translate-y-0 ${sheen}`,
  outline:
    "hairline bg-paper-raised/60 text-ink shadow-[var(--edge)] hover:border-crimson/50 hover:text-crimson hover:-translate-y-0.5 hover:shadow-[var(--edge),var(--shadow-1)]",
  ghost: "bg-transparent text-ink-soft hover:text-ink hover:bg-ink/5",
  // Boost uses the festival marigold so it reads differently from the primary CTA.
  boost: `bg-gradient-to-b from-marigold-soft to-marigold text-[rgb(74_45_12)] shadow-[0_1px_2px_rgb(120_86_36/0.35),0_8px_18px_-8px_rgb(120_86_36/0.5)] hover:-translate-y-0.5 hover:shadow-[0_2px_4px_rgb(120_86_36/0.4),0_14px_26px_-10px_rgb(120_86_36/0.55)] active:translate-y-0 ${sheen}`,
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-3.5 text-sm",
  md: "h-11 px-5 text-[15px]",
  lg: "h-12 px-6 text-base",
};

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => (
    <button
      ref={ref}
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    />
  )
);
Button.displayName = "Button";
