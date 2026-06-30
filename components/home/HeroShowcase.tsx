"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { Tag, VerifiedBadge } from "@/components/ui/Tag";

/**
 * The hero focal element: a small stack of post cards on a 3D stage that tilts
 * toward the pointer, with chips floating at different depths for parallax.
 * Subtle (max ~9° tilt, spring-damped) and disabled under reduced-motion.
 */
export function HeroShowcase() {
  const reduce = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const rx = useSpring(useTransform(my, [-0.5, 0.5], [9, -9]), {
    stiffness: 150,
    damping: 18,
  });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-9, 9]), {
    stiffness: 150,
    damping: 18,
  });

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    if (reduce) return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  }
  function onLeave() {
    mx.set(0);
    my.set(0);
  }

  return (
    <div
      className="stage brand-glow relative mx-auto w-full max-w-md"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <motion.div
        className="preserve-3d relative"
        style={reduce ? undefined : { rotateX: rx, rotateY: ry }}
      >
        {/* Back card — a room, offset and pushed back in Z */}
        <div
          className="absolute -right-6 -top-8 w-[78%] rounded-card border border-line bg-paper-raised p-4 elev-2"
          style={{ transform: "translateZ(-60px) rotate(3deg)" }}
        >
          <div className="mb-2 flex items-center gap-2">
            <Tag tone="room">Room / कोठा</Tag>
          </div>
          <p className="text-sm font-semibold text-ink">
            Master room, Truganina
          </p>
          <p className="mt-1 font-display text-lg text-crimson">
            $260 <span className="text-xs font-normal text-ink-soft">/wk</span>
          </p>
        </div>

        {/* Front card — a boosted job, lifted toward the viewer */}
        <div
          className="relative w-full overflow-hidden rounded-card border border-marigold/50 bg-paper-raised p-5 elev-3"
          style={{ transform: "translateZ(40px)" }}
        >
          <span
            aria-hidden
            className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-marigold-soft via-marigold to-crimson"
          />
          <div className="mb-2 flex items-center gap-2">
            <Tag tone="job">Job / जागिर</Tag>
            <Tag tone="promoted">Promoted</Tag>
          </div>
          <p className="text-lg font-semibold leading-snug text-ink">
            Kitchen hand, Harris Park (weekends)
          </p>
          <p className="mt-1 line-clamp-2 text-sm text-ink-soft">
            Busy Nepali restaurant on Wigram St. Will train. Cash + super, paid
            weekly.
          </p>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="font-display text-2xl text-crimson">$28/hr</span>
            <span className="text-xs text-ink-soft">per hour</span>
          </div>
          <div className="mt-4 flex items-center justify-between border-t border-line pt-3">
            <VerifiedBadge />
            <span className="text-xs text-ink-soft">134 views</span>
          </div>
        </div>

        {/* Floating chips, seated in clear open space so they never z-fight
            with the card surfaces. Plain divs (no transform animation) so the
            translateZ parallax stays reliable under the tilt. */}
        <div
          className="absolute left-0 top-[68%] hidden rounded-pill border border-line bg-paper-raised px-3 py-1.5 text-xs font-medium text-jade elev-3 sm:block"
          style={{ transform: "translate(-108%, -50%) translateZ(55px)" }}
        >
          ✓ Phone-verified
        </div>
        <div
          className="absolute -bottom-5 left-8 rounded-pill border border-line bg-paper-raised px-3 py-1.5 text-xs font-medium text-crimson elev-3"
          style={{ transform: "translateZ(45px)" }}
        >
          New in Rockdale
        </div>
      </motion.div>
    </div>
  );
}
