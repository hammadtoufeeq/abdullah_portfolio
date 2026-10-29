"use client";

import { MotionConfig } from "motion/react";
import { config } from "@fortawesome/fontawesome-svg-core";

// Font Awesome CSS is imported (layered) in globals.css, so stop it injecting its own
// unlayered <style> tag in the browser, which would override Tailwind size classes.
config.autoAddCss = false;

// Respects the visitor's "reduce motion" OS setting for every animation.
export default function Providers({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
