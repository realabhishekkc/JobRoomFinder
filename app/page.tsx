import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { JobCard } from "@/components/cards/JobCard";
import { RoomCard } from "@/components/cards/RoomCard";
import { AankhiJhyal } from "@/components/motifs/AankhiJhyal";

/**
 * Placeholder home for Milestone 1 — just enough to eyeball the base layout,
 * fonts and tokens. The full SEO/AEO/GEO public landing arrives in Milestone 8.
 */
export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-4">
      <section className="grid items-center gap-8 py-14 md:grid-cols-[1.1fr_0.9fr] md:py-20">
        <div>
          <p className="mb-3 text-sm font-medium text-crimson">
            Jobs &amp; rooms · जागिर र कोठा
          </p>
          <h1 className="font-display text-4xl font-semibold leading-[1.05] text-ink sm:text-5xl">
            The Nepali community board for jobs and rooms in Australia.
          </h1>
          <p className="mt-4 max-w-md text-lg text-ink-soft">
            Real posts from real people. Everyone&apos;s phone-verified, so it&apos;s
            calmer and safer than the Facebook groups. Posting takes 30 seconds.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/board">
              <Button size="lg">Browse the board</Button>
            </Link>
            <Link href="/post">
              <Button size="lg" variant="outline">
                Post a job or room
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid gap-4">
          <JobCard data={sampleJob} />
          <RoomCard data={sampleRoom} />
        </div>
      </section>

      <AankhiJhyal />

      <p className="py-10 text-center text-sm text-ink-soft">
        Building this in milestones. Want to see the design system?{" "}
        <Link href="/style-guide" className="text-crimson underline-offset-2 hover:underline">
          Open the style guide
        </Link>
        .
      </p>
    </div>
  );
}

const sampleJob = {
  id: "j1",
  title: "Kitchen hand needed, Harris Park (weekends)",
  description:
    "Busy Nepali restaurant on Wigram St. Need a reliable kitchen hand Sat & Sun. Will train. Cash + super, paid weekly.",
  payRate: "$28/hr",
  payType: "hourly" as const,
  suburb: "Harris Park",
  state: "NSW",
  postedLabel: "2 days ago",
  viewCount: 134,
  verified: true,
};

const sampleRoom = {
  id: "r1",
  title: "Private room in Rockdale, close to station",
  roomType: "private" as const,
  weeklyRentCents: 23000,
  billsIncluded: true,
  suburb: "Rockdale",
  state: "NSW",
  postedLabel: "5 hours ago",
  viewCount: 58,
  verified: true,
  promoted: true,
};
