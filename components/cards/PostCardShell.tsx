import { cn } from "@/lib/cn";

/**
 * Shared shell for job/room cards. Hairline-first (no heavy shadow).
 * `promoted` gives the marigold-highlighted treatment used in the boosted
 * strip + mid-feed slot — visually distinct from the sponsor banner.
 */
export function PostCardShell({
  promoted,
  className,
  children,
}: {
  promoted?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <article
      className={cn(
        "group relative flex flex-col rounded-card bg-paper-raised p-4 transition-colors",
        promoted
          ? "border border-marigold/50 ring-1 ring-marigold/30 bg-marigold/[0.04]"
          : "hairline hover:border-crimson/30",
        className
      )}
    >
      {promoted ? (
        <span
          aria-hidden
          className="absolute inset-x-0 top-0 h-0.5 rounded-t-card bg-gradient-to-r from-marigold-soft via-marigold to-crimson"
        />
      ) : null}
      {children}
    </article>
  );
}
