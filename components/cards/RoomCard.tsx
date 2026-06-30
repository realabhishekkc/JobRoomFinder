import { PostCardShell } from "./PostCardShell";
import { Tag, VerifiedBadge } from "@/components/ui/Tag";
import { Button } from "@/components/ui/Button";

export interface RoomCardData {
  id: string;
  title: string;
  roomType: "private" | "shared" | "master" | "granny-flat";
  weeklyRentCents: number;
  billsIncluded: boolean;
  suburb: string;
  state: string;
  postedLabel: string;
  viewCount: number;
  verified?: boolean;
  promoted?: boolean;
}

const roomTypeLabel: Record<RoomCardData["roomType"], string> = {
  private: "Private room",
  shared: "Shared room",
  master: "Master room",
  "granny-flat": "Granny flat",
};

function rent(cents: number) {
  return `$${Math.round(cents / 100)}`;
}

export function RoomCard({ data }: { data: RoomCardData }) {
  return (
    <PostCardShell promoted={data.promoted}>
      <div className="mb-2 flex items-center gap-2">
        <Tag tone="room">Room / कोठा</Tag>
        {data.promoted ? <Tag tone="promoted">Promoted</Tag> : null}
      </div>

      <h3 className="text-lg font-semibold leading-snug text-ink">{data.title}</h3>

      <div className="mt-2 flex flex-wrap gap-1.5">
        <Tag tone="neutral">{roomTypeLabel[data.roomType]}</Tag>
        <Tag tone="neutral">
          {data.billsIncluded ? "Bills included" : "Bills not included"}
        </Tag>
      </div>

      <div className="mt-3 flex flex-wrap items-baseline gap-x-1.5">
        <span className="font-display text-xl text-crimson">
          {rent(data.weeklyRentCents)}
        </span>
        <span className="text-xs text-ink-soft">per week</span>
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
