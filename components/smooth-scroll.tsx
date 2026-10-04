"use client";

import { ReactLenis } from "lenis/react";
import type { ReactNode } from "react";

// Wrap document scrolling in Lenis. `root` makes Lenis control window scroll
// instead of a child container, keeping window.scrollY correct for the
// IntersectionObserver-based section tracking.
export default function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        duration: 1.4,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.4,
      }}
    >
      {children}
    </ReactLenis>
  );
}
