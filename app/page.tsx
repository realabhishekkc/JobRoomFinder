import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { HeroShowcase } from "@/components/home/HeroShowcase";
import { AankhiJhyal } from "@/components/motifs/AankhiJhyal";

export default function HomePage() {
  return (
    <div className="overflow-x-clip">
      {/* Hero */}
      <section className="relative">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 md:grid-cols-[1.05fr_0.95fr] md:py-24">
          <div>
            <p className="mb-4 inline-flex items-center gap-2 rounded-pill border border-line bg-paper-raised px-3 py-1 text-sm font-medium text-crimson elev-1">
              Jobs &amp; rooms · जागिर र कोठा
            </p>
            <h1 className="font-display text-[2.6rem] font-semibold leading-[1.04] text-ink sm:text-6xl">
              The Nepali community board for jobs and rooms in Australia.
            </h1>
            <p className="mt-5 max-w-md text-lg text-ink-soft">
              Real posts from real people. Everyone&apos;s phone-verified, so
              it&apos;s calmer and safer than the Facebook groups. Posting takes
              30 seconds.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
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

          <div className="py-6 md:py-0">
            <HeroShowcase />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="font-display text-3xl font-semibold text-ink">
          How it works
        </h2>
        <div className="mt-8 grid gap-px overflow-hidden rounded-card border border-line bg-line md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n} className="bg-paper-raised p-7">
              <span className="font-display text-4xl font-semibold text-crimson/90">
                {s.n}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-ink">{s.title}</h3>
              <p className="mt-1.5 text-sm text-ink-soft">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4">
        <AankhiJhyal className="h-8" />
      </div>

      {/* Why it's better than the groups */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div>
            <h2 className="font-display text-3xl font-semibold text-ink">
              Built for trust, not for scrolling
            </h2>
            <p className="mt-3 max-w-sm text-ink-soft">
              The groups are noisy and full of throwaway accounts. This is the
              opposite — verified people, private contact details, and posts
              that actually expire.
            </p>
          </div>
          <div className="surface rounded-card">
            <ul className="divide-y divide-line">
              {trust.map((t) => (
                <li key={t.title} className="flex gap-4 p-5">
                  <span className="mt-0.5 shrink-0 text-crimson">{t.icon}</span>
                  <div>
                    <p className="font-semibold text-ink">{t.title}</p>
                    <p className="text-sm text-ink-soft">{t.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-6xl px-4 pb-20 pt-8">
        <div className="relative overflow-hidden rounded-card bg-gradient-to-br from-crimson to-crimson-deep p-9 text-center elev-3 sm:p-12">
          <span aria-hidden className="sheen pointer-events-none absolute inset-0" />
          <h2 className="relative font-display text-3xl font-semibold text-white sm:text-4xl">
            Looking for work or a room? Start here.
          </h2>
          <p className="relative mx-auto mt-3 max-w-md text-white/85">
            Verify your Australian mobile once and you&apos;re in. Three free
            posts a day, every day.
          </p>
          <div className="relative mt-7 flex flex-wrap justify-center gap-3">
            <Link href="/board">
              <Button size="lg" variant="boost">
                Browse the board
              </Button>
            </Link>
            <Link href="/login">
              <Button
                size="lg"
                variant="outline"
                className="border-white/40 bg-white/10 text-white hover:border-white hover:bg-white/15 hover:text-white"
              >
                Sign in to post
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

const steps = [
  {
    n: "1",
    title: "Post in 30 seconds",
    body: "Pick job or room, fill a few fields, done. Three free posts a day.",
  },
  {
    n: "2",
    title: "Browse or filter",
    body: "Jobs and rooms near you. Filter by suburb, rent or pay — no endless scrolling.",
  },
  {
    n: "3",
    title: "Message directly",
    body: "See the poster's phone, Viber or WhatsApp once you're verified. You talk, no middleman.",
  },
];

const trust = [
  {
    title: "Everyone's phone-verified",
    body: "No throwaway accounts. Every poster verified their Australian mobile first.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M9 12l2 2 4-4"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Contact details stay private",
    body: "Numbers only show to verified members, so scrapers and spammers stay out.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="4" y="10" width="16" height="10" rx="2" stroke="currentColor" strokeWidth="1.6" />
        <path d="M8 10V7a4 4 0 1 1 8 0v3" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    ),
  },
  {
    title: "Old posts drop off",
    body: "Posts expire after 30 days, so what you see is actually still available.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
        <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
];
