import { cn } from "@/lib/cn";

type Tone =
  | "neutral"
  | "job"
  | "room"
  | "promoted"
  | "sponsored"
  | "verified"
  | "muted";

const tones: Record<Tone, string> = {
  neutral: "bg-ink/5 text-ink-soft",
  job: "bg-himal/10 text-himal",
  room: "bg-jade/12 text-jade",
  // Promoted = boosted post. Marigold, distinct from sponsor.
  promoted: "bg-marigold/15 text-[rgb(143_11_34)] dark:text-marigold",
  sponsored: "bg-ink/8 text-ink-soft",
  verified: "bg-jade/12 text-jade",
  muted: "bg-transparent text-ink-soft",
};

export function Tag({
  tone = "neutral",
  className,
  children,
}: {
  tone?: Tone;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-pill px-2.5 py-0.5 text-xs font-medium leading-5",
        tones[tone],
        className
      )}
    >
      {children}
    </span>
  );
}

/** "Phone-verified" trust badge (§12). */
export function VerifiedBadge({ className }: { className?: string }) {
  return (
    <Tag tone="verified" className={className}>
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M9 12.5l2 2 4-4.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
      </svg>
      Phone-verified
    </Tag>
  );
}
