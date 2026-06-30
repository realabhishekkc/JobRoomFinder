import { cn } from "@/lib/cn";

/**
 * Lungta — the thin prayer-flag colour strip used as a top accent bar on key
 * pages (§4). Five traditional colours, left→right. Decorative only, so it's
 * hidden from assistive tech.
 */
export function LungtaStrip({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn("flex h-1 w-full overflow-hidden", className)}
    >
      <span className="flex-1 bg-flag-blue" />
      <span className="flex-1 bg-flag-white" />
      <span className="flex-1 bg-flag-red" />
      <span className="flex-1 bg-flag-green" />
      <span className="flex-1 bg-flag-yellow" />
    </div>
  );
}
