import Link from "next/link";

/** Wordmark with a small Nepali subtitle. The mark is a simple lattice diamond. */
export function Logo() {
  return (
    <Link href="/" className="group inline-flex items-center gap-2.5">
      <span
        aria-hidden
        className="flex h-8 w-8 items-center justify-center rounded-[9px] bg-crimson text-white"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2l10 10-10 10L2 12 12 2Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path d="M12 7l5 5-5 5-5-5 5-5Z" fill="currentColor" opacity="0.35" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-lg font-semibold tracking-tight text-ink">
          JobRoomFinder
        </span>
        <span className="text-[11px] text-ink-soft">जागिर र कोठा</span>
      </span>
    </Link>
  );
}
