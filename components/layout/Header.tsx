import Link from "next/link";
import { Logo } from "./Logo";
import { LungtaStrip } from "@/components/motifs/LungtaStrip";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { Button } from "@/components/ui/Button";

const nav = [
  { href: "/board", label: "Browse" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/sponsor", label: "Advertise" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 above-grain">
      <LungtaStrip />
      <div className="border-b border-line bg-paper-raised/90 backdrop-blur-md elev-1">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4">
          <Logo />

          <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-pill px-3 py-2 text-sm text-ink-soft transition-colors hover:bg-ink/5 hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link href="/login" className="hidden sm:block">
              <Button variant="ghost" size="sm">
                Sign in
              </Button>
            </Link>
            <Link href="/post">
              <Button size="sm">Post</Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
