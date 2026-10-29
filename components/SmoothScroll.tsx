"use client";

import { useEffect } from "react";
import Lenis from "lenis";

// Buttery smooth scrolling (Lenis) plus smooth in-page anchor links that land
// each section's content just below the floating navbar.
export default function SmoothScroll() {
  useEffect(() => {
    const smooth = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const lenis = smooth ? new Lenis({ duration: 1.1 }) : null;
    let frame = 0;
    const raf = (time: number) => {
      lenis?.raf(time);
      frame = requestAnimationFrame(raf);
    };
    if (lenis) frame = requestAnimationFrame(raf);

    const onClick = (e: MouseEvent) => {
      const link = (e.target as Element).closest<HTMLAnchorElement>('a[href^="#"]');
      const id = link?.getAttribute("href")?.slice(1);
      if (!id) return;
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();

      let y = 0;
      if (id !== "top") {
        // Skip the section's top padding (on the section or one of its direct wrappers) so the heading lands near the navbar
        const padded = [target, ...Array.from(target.children)].find((el) => parseFloat(getComputedStyle(el).paddingTop) > 0);
        const padding = padded ? parseFloat(getComputedStyle(padded).paddingTop) : 0;
        const navBottom = document.querySelector("header nav")?.getBoundingClientRect().bottom ?? 0;
        y = target.getBoundingClientRect().top + window.scrollY + padding - navBottom - 24;
      }
      history.replaceState(null, "", `#${id}`);
      if (lenis) lenis.scrollTo(Math.max(0, y));
      else window.scrollTo({ top: Math.max(0, y) });
    };
    document.addEventListener("click", onClick);

    return () => {
      document.removeEventListener("click", onClick);
      cancelAnimationFrame(frame);
      lenis?.destroy();
    };
  }, []);

  return null;
}
