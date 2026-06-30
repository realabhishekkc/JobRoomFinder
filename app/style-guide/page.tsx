import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Tag, VerifiedBadge } from "@/components/ui/Tag";
import { Label, Input, Textarea, Select } from "@/components/ui/Field";
import { JobCard } from "@/components/cards/JobCard";
import { RoomCard } from "@/components/cards/RoomCard";
import {
  SponsorBanner,
  SponsorHouseAd,
} from "@/components/sponsor/SponsorBanner";
import { MandalaSpinner } from "@/components/motifs/MandalaSpinner";
import { AankhiJhyal } from "@/components/motifs/AankhiJhyal";
import { LungtaStrip } from "@/components/motifs/LungtaStrip";

export const metadata = { title: "Style guide", robots: { index: false } };

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-line py-10">
      <h2 className="mb-5 font-display text-2xl font-semibold text-ink">
        {title}
      </h2>
      {children}
    </section>
  );
}

const swatches: [string, string][] = [
  ["paper", "bg-paper"],
  ["paper-raised", "bg-paper-raised"],
  ["ink", "bg-ink"],
  ["ink-soft", "bg-ink-soft"],
  ["crimson", "bg-crimson"],
  ["crimson-deep", "bg-crimson-deep"],
  ["marigold", "bg-marigold"],
  ["marigold-soft", "bg-marigold-soft"],
  ["himal", "bg-himal"],
  ["jade", "bg-jade"],
];

export default function StyleGuide() {
  // Dev-only page (§4 deliverable). Hidden in production builds.
  if (process.env.NODE_ENV === "production") notFound();

  return (
    <div className="mx-auto max-w-5xl px-4 pb-20">
      <header className="py-10">
        <p className="text-sm text-crimson">Design system · §4</p>
        <h1 className="font-display text-4xl font-semibold text-ink">
          Style guide
        </h1>
        <p className="mt-2 max-w-xl text-ink-soft">
          Eyeball the tokens and components here before any feature work. Toggle
          dark mode from the header — every block below should hold up.
        </p>
      </header>

      <Section title="Colour tokens">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
          {swatches.map(([name, cls]) => (
            <div key={name} className="rounded-card hairline p-2">
              <div className={`${cls} h-14 w-full rounded-[8px]`} />
              <p className="mt-2 text-xs text-ink-soft">{name}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Typography">
        <div className="space-y-3">
          <h1 className="font-display text-5xl font-semibold text-ink">
            Find a room. कोठा खोज्नुहोस्.
          </h1>
          <h2 className="font-display text-3xl font-semibold text-ink">
            Post a job in 30 seconds
          </h2>
          <p className="max-w-2xl text-lg text-ink">
            Body text in Mukta — it carries English and नेपाली in one family, so a
            sentence can switch भाषा without changing font. Highly legible on a
            phone, on patchy data.
          </p>
          <p className="text-sm text-ink-soft">
            Muted caption text, used for meta and hints.
          </p>
        </div>
      </Section>

      <Section title="Buttons">
        <div className="flex flex-wrap items-center gap-3">
          <Button variant="primary">Post a job</Button>
          <Button variant="outline">Show me rooms only</Button>
          <Button variant="ghost">Cancel</Button>
          <Button variant="boost">Boost this post</Button>
          <Button variant="primary" disabled>
            Disabled
          </Button>
          <Button variant="primary" size="sm">
            Small
          </Button>
          <Button variant="primary" size="lg">
            Large
          </Button>
        </div>
      </Section>

      <Section title="Tags & badges">
        <div className="flex flex-wrap items-center gap-2">
          <Tag tone="job">Job / जागिर</Tag>
          <Tag tone="room">Room / कोठा</Tag>
          <Tag tone="promoted">Promoted</Tag>
          <Tag tone="sponsored">Sponsored</Tag>
          <Tag tone="neutral">Bills included</Tag>
          <VerifiedBadge />
        </div>
      </Section>

      <Section title="Form fields">
        <div className="grid max-w-xl gap-4">
          <div>
            <Label htmlFor="t">Title</Label>
            <Input id="t" placeholder="Kitchen hand needed, Harris Park" />
          </div>
          <div>
            <Label htmlFor="d" hint="(keep it real)">
              Description
            </Label>
            <Textarea id="d" placeholder="What's the job? When? How's the pay?" />
          </div>
          <div>
            <Label htmlFor="rt">Room type</Label>
            <Select id="rt" defaultValue="private">
              <option value="private">Private room</option>
              <option value="shared">Shared room</option>
              <option value="master">Master room</option>
              <option value="granny-flat">Granny flat</option>
            </Select>
          </div>
        </div>
      </Section>

      <Section title="Job card">
        <div className="grid gap-4 sm:grid-cols-2">
          <JobCard data={demoJob} />
          <JobCard data={{ ...demoJob, id: "j2", promoted: true }} />
        </div>
      </Section>

      <Section title="Room card">
        <div className="grid gap-4 sm:grid-cols-2">
          <RoomCard data={demoRoom} />
          <RoomCard data={{ ...demoRoom, id: "r2", promoted: true }} />
        </div>
      </Section>

      <Section title="Sponsor banner — active vs house ad">
        <div className="space-y-4">
          <SponsorBanner
            sponsor={{
              businessName: "Everest Migration & Education",
              tagline:
                "Student visas, skills assessments, PR pathways. Nepali-speaking team in Sydney.",
              websiteUrl: "#",
            }}
          />
          <SponsorHouseAd />
        </div>
      </Section>

      <Section title="Motifs">
        <div className="space-y-6">
          <div>
            <p className="mb-2 text-sm text-ink-soft">Lungta accent strip</p>
            <LungtaStrip />
          </div>
          <div>
            <p className="mb-2 text-sm text-ink-soft">Aankhi-jhyal divider</p>
            <AankhiJhyal className="h-10" />
          </div>
          <div>
            <p className="mb-2 text-sm text-ink-soft">Mandala spinner</p>
            <MandalaSpinner size={48} />
          </div>
        </div>
      </Section>

      <Section title="Empty state (human copy — §3)">
        <div className="rounded-card hairline bg-paper-raised p-10 text-center">
          <MandalaSpinner size={36} className="mb-3" />
          <p className="font-display text-xl text-ink">
            No rooms posted here yet.
          </p>
          <p className="mt-1 text-ink-soft">
            Be the first — it takes 30 seconds.
          </p>
          <Button className="mt-4">Post a room</Button>
        </div>
      </Section>
    </div>
  );
}

const demoJob = {
  id: "j1",
  title: "Kitchen hand needed, Harris Park (weekends)",
  description:
    "Busy Nepali restaurant on Wigram St. Sat & Sun, will train. Cash + super, paid weekly.",
  payRate: "$28/hr",
  payType: "hourly" as const,
  suburb: "Harris Park",
  state: "NSW",
  postedLabel: "2 days ago",
  viewCount: 134,
  verified: true,
};

const demoRoom = {
  id: "r1",
  title: "Private room in Rockdale, 5 min to station",
  roomType: "private" as const,
  weeklyRentCents: 23000,
  billsIncluded: true,
  suburb: "Rockdale",
  state: "NSW",
  postedLabel: "5 hours ago",
  viewCount: 58,
  verified: true,
};
