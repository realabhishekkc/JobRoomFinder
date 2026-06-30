import Link from "next/link";
import { AankhiJhyal } from "@/components/motifs/AankhiJhyal";

const cols = [
  {
    title: "The board",
    links: [
      { href: "/board", label: "Browse jobs & rooms" },
      { href: "/post", label: "Post a job" },
      { href: "/post", label: "Find a room" },
    ],
  },
  {
    title: "Community",
    links: [
      { href: "/about", label: "About us" },
      { href: "/contact", label: "Contact" },
      { href: "/sponsor", label: "Advertise with us" },
    ],
  },
  {
    title: "The rules",
    links: [
      { href: "/terms", label: "Terms & conditions" },
      { href: "/privacy", label: "Privacy policy" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="above-grain mt-16 border-t border-line bg-paper-raised">
      <AankhiJhyal />
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <p className="font-display text-lg font-semibold text-ink">
            JobRoomFinder
          </p>
          <p className="mt-2 max-w-xs text-sm text-ink-soft">
            Jobs and rooms for the Nepali community in Australia. Posted by real
            people, phone-verified, no Facebook scrolling.
          </p>
        </div>
        {cols.map((col) => (
          <nav key={col.title} aria-label={col.title}>
            <p className="mb-3 text-sm font-semibold text-ink">{col.title}</p>
            <ul className="space-y-2">
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-ink-soft transition-colors hover:text-crimson"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-5 text-xs text-ink-soft sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} JobRoomFinder. Made for the community.</p>
          <p>Posts are from members. Always meet safely and check details yourself.</p>
        </div>
      </div>
    </footer>
  );
}
