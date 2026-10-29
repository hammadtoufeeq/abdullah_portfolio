"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faCheck, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { experience } from "@/data/resume";
import FadeIn from "./FadeIn";
import SectionTitle from "./SectionTitle";

// Testimonial-style slider from the reference, used for work experience
export default function Experience() {
  const [[index, dir], setState] = useState<[number, number]>([0, 1]);
  const [paused, setPaused] = useState(false);
  const n = experience.length;
  const go = (d: number) => setState(([i]) => [(i + d + n) % n, d]);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setState(([i]) => [(i + 1) % n, 1]), 6000);
    return () => clearInterval(t);
  }, [paused, n]);

  const job = experience[index];
  const prev = experience[(index - 1 + n) % n];
  const next = experience[(index + 1) % n];

  return (
    <section id="experience" className="overflow-hidden bg-bg-2 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle title="Work Experience" text="Where I've been building, shipping and learning — from internships to client projects." />

        <FadeIn>
          <div className="relative" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
            {/* faded side cards (desktop) */}
            {[prev, next].map((j, side) => (
              <div
                key={side}
                className={`absolute top-1/2 hidden w-[24%] -translate-y-1/2 rounded-sm bg-card p-6 opacity-40 ring-1 ring-line lg:block ${side === 0 ? "-left-[6%]" : "-right-[6%]"}`}
              >
                <p className="text-sm font-semibold">{j.role}</p>
                <p className="mt-1 text-xs text-orange">{j.company}</p>
                <p className="mt-3 line-clamp-3 text-xs text-muted">{j.points[0]}</p>
              </div>
            ))}

            <div className="relative mx-auto max-w-2xl">
              <div className="relative z-10 mx-auto -mb-10 flex h-20 w-20 items-center justify-center rounded-full border-4 border-bg-2 bg-orange text-white shadow-[0_10px_30px_-8px_rgba(255,91,15,0.9)]">
                <FontAwesomeIcon icon={faBriefcase} className="h-7 w-7" />
              </div>
              <div className="relative min-h-[330px] overflow-hidden rounded-sm bg-card px-6 pb-8 pt-16 text-center ring-1 ring-line sm:px-10">
                <AnimatePresence mode="wait" custom={dir}>
                  <motion.div
                    key={job.company}
                    custom={dir}
                    initial={{ opacity: 0, x: dir * 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: dir * -60 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <p className="text-lg font-semibold text-orange">{job.company}</p>
                    <p className="mt-1 text-sm font-medium">{job.role}</p>
                    <p className="mt-1 text-xs text-muted">
                      {job.period}
                      {job.current && <span className="ml-2 rounded-sm bg-orange px-2 py-0.5 text-[10px] font-semibold uppercase text-white">Current</span>}
                    </p>
                    <ul className="mx-auto mt-6 max-w-lg space-y-3 text-left text-sm leading-relaxed text-muted">
                      {job.points.map((p) => (
                        <li key={p} className="flex gap-3">
                          <FontAwesomeIcon icon={faCheck} className="mt-1 h-3.5 w-3.5 shrink-0 text-orange" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* controls */}
            <div className="mt-8 flex items-center justify-center gap-5">
              <button
                onClick={() => go(-1)}
                aria-label="Previous"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-white transition-colors hover:border-orange hover:bg-orange"
              >
                <FontAwesomeIcon icon={faChevronLeft} className="h-3.5 w-3.5" />
              </button>
              <div className="flex gap-2">
                {experience.map((e, i) => (
                  <button
                    key={e.company}
                    onClick={() => setState([i, i > index ? 1 : -1])}
                    aria-label={`Show ${e.company}`}
                    className={`h-1.5 rounded-full transition-all duration-300 ${i === index ? "w-8 bg-orange" : "w-4 bg-white/30 hover:bg-white/60"}`}
                  />
                ))}
              </div>
              <button
                onClick={() => go(1)}
                aria-label="Next"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-white transition-colors hover:border-orange hover:bg-orange"
              >
                <FontAwesomeIcon icon={faChevronRight} className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
