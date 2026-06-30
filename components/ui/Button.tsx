import { forwardRef } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "outline" | "ghost" | "boost";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-medium rounded-pill transition-colors duration-150 focus-visible:ring-2 focus-visible:ring-crimson focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none select-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-crimson text-white hover:bg-crimson-deep active:bg-crimson-deep",
  outline:
    "hairline bg-transparent text-ink hover:border-crimson/50 hover:text-crimson",
  ghost: "bg-transparent text-ink-soft hover:text-ink hover:bg-ink/5",
  // Boost uses the festival marigold so it reads differently from the primary CTA.
  boost: "bg-marigold text-[rgb(28_23_20)] hover:brightness-95 active:brightness-90",
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
