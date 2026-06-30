import { cn } from "@/lib/cn";

/**
 * Aankhi-jhyal — faint Newari lattice divider (§4). Renders the repeating
 * lattice texture as a thin horizontal band. Purely decorative.
 */
export function AankhiJhyal({ className }: { className?: string }) {
  return <div aria-hidden className={cn("lattice h-6 w-full", className)} />;
}
