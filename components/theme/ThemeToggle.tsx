"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

/** Light/dark toggle. Persists the choice; mirrors the no-flash script. */
export function ThemeToggle({ className }: { className?: string }) {
  const [dark, setDark] = useState<boolean | null>(null);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggle() {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
    setDark(next);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className={cn(
        "inline-flex h-9 w-9 items-center justify-center rounded-pill hairline text-ink-soft transition-colors hover:text-ink hover:border-crimson/40",
        className
      )}
    >
      {/* sun / moon, swapped by current theme; hidden from AT (label covers it) */}
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
        {dark ? (
          <path
            d="M21 12.8A8.5 8.5 0 1 1 11.2 3a6.5 6.5 0 0 0 9.8 9.8Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        ) : (
          <g stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
            <circle cx="12" cy="12" r="4" />
            {Array.from({ length: 8 }).map((_, i) => (
              <line
                key={i}
                x1="12"
                y1="2.5"
                x2="12"
                y2="4.5"
                transform={`rotate(${i * 45} 12 12)`}
              />
            ))}
          </g>
        )}
      </svg>
    </button>
  );
}
