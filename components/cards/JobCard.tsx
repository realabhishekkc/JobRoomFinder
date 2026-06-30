import { PostCardShell } from "./PostCardShell";
import { Tag, VerifiedBadge } from "@/components/ui/Tag";
import { Button } from "@/components/ui/Button";

export interface JobCardData {
  id: string;
  title: string;
  description: string;
  payRate: string; // e.g. "$28/hr" or "negotiable"
  payType: "hourly" | "weekly" | "fixed";
  suburb: string;
  state: string;
  postedLabel: string; // e.g. "2 days ago"
  viewCount: number;
  verified?: boolean;
  promoted?: boolean;
}

const payTypeLabel: Record<JobCardData["payType"], string> = {
  hourly: "per hour",
  weekly: "per week",
  fixed: "fixed",
};

export function JobCard({ data }: { data: JobCardData }) {
  return (
    <PostCardShell promoted={data.promoted}>
      <div className="mb-2 flex items-center gap-2">
        <Tag tone="job">Job / जागिर</Tag>
        {data.promoted ? <Tag tone="promoted">Promoted</Tag> : null}
      </div>

      <h3 className="text-lg font-semibold leading-snug text-ink">{data.title}</h3>

      <p className="mt-1 line-clamp-2 text-sm text-ink-soft">{data.description}</p>

      <div className="mt-3 flex flex-wrap items-baseline gap-x-2">
        <span className="font-display text-xl text-crimson">{data.payRate}</span>
        <span className="text-xs text-ink-soft">{payTypeLabel[data.payType]}</span>
      </div>

      <div className="mt-3 flex items-center gap-2 text-sm text-ink-soft">
        <PinIcon />
        <span>
          {data.suburb}, {data.state}
        </span>
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-line pt-3">
        <div className="flex items-center gap-2 text-xs text-ink-soft">
          {data.verified ? <VerifiedBadge /> : null}
          <span>· {data.postedLabel}</span>
          <span aria-hidden>·</span>
          <span>{data.viewCount} views</span>
        </div>
        <Button size="sm" variant="outline">
          Show contact
        </Button>
      </div>
    </PostCardShell>
  );
}

function PinIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle cx="12" cy="10" r="2.4" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}
