import Link from "next/link";
import { LungtaStrip } from "@/components/motifs/LungtaStrip";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

export interface SponsorData {
  businessName: string;
  tagline: string;
  websiteUrl: string;
  logoUrl?: string;
}

/**
 * The home-top sponsor banner (§10). A wide glassmorphic card with the
 * prayer-flag accent strip, logo, short tagline, a clear CTA, and an
 * unobtrusive "Sponsored" label. Deliberately richer than a grey ad box.
 */
export function SponsorBanner({ sponsor }: { sponsor: SponsorData }) {
  return (
    <div className="overflow-hidden rounded-card glass hairline shadow-soft">
      <LungtaStrip />
      <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[12px] bg-paper-raised hairline text-lg font-display text-crimson">
          {sponsor.logoUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={sponsor.logoUrl}
              alt={`${sponsor.businessName} logo`}
              className="h-full w-full rounded-[12px] object-contain"
            />
          ) : (
            initials(sponsor.businessName)
          )}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase tracking-wide text-ink-soft">
              Sponsored
            </span>
          </div>
          <p className="truncate text-lg font-semibold text-ink">
            {sponsor.businessName}
          </p>
          <p className="line-clamp-2 text-sm text-ink-soft">{sponsor.tagline}</p>
        </div>
        <Link href={sponsor.websiteUrl} className="shrink-0">
          <Button variant="primary">Visit</Button>
        </Link>
      </div>
    </div>
  );
}

/**
 * House ad shown when no sponsor is active, so the slot never looks broken (§10).
 */
export function SponsorHouseAd({ className }: { className?: string }) {
  return (
    <Link
      href="/sponsor"
      className={cn(
        "block overflow-hidden rounded-card glass hairline shadow-soft transition-colors hover:border-crimson/40",
        className
      )}
    >
      <LungtaStrip />
      <div className="flex flex-col items-start gap-3 p-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-lg font-semibold text-ink">
            This spot is open
          </p>
          <p className="text-sm text-ink-soft">
            Put your business in front of the Nepali community here — $50/week.
          </p>
        </div>
        <Button variant="boost">Sponsor your business</Button>
      </div>
    </Link>
  );
}

function initials(name: string) {
  return name
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");
}
