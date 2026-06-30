import { cn } from "@/lib/cn";

/**
 * Mandala-inspired loading spinner (§4). Two concentric rings of petals
 * rotating slowly. Respects prefers-reduced-motion via the animate class
 * being overridable; keep it under the 300ms micro-interaction budget for
 * UI affordances, but a spinner is allowed to loop.
 */
export function MandalaSpinner({
  className,
  size = 40,
  label = "Loading",
}: {
  className?: string;
  size?: number;
  label?: string;
}) {
  return (
    <span
      role="status"
      aria-label={label}
      className={cn("inline-flex items-center justify-center", className)}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        className="animate-spin-slow text-crimson motion-reduce:animate-none"
      >
        <g stroke="currentColor" strokeWidth="1.5">
          {Array.from({ length: 8 }).map((_, i) => (
            <line
              key={i}
              x1="24"
              y1="6"
              x2="24"
              y2="13"
              transform={`rotate(${i * 45} 24 24)`}
              strokeLinecap="round"
            />
          ))}
        </g>
        <circle
          cx="24"
          cy="24"
          r="9"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-marigold"
          opacity="0.9"
        />
        <circle cx="24" cy="24" r="3" fill="currentColor" />
      </svg>
    </span>
  );
}
