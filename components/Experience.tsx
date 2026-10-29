"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { experience } from "@/data/resume";
import FadeIn from "./FadeIn";

export default function Experience() {
  const [active, setActive] = useState(0);
  const job = experience[active];

  return (
    <section id="experience" className="bg-ink py-28 text-sand sm:py-36">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <FadeIn className="mb-14">
          <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-terra-soft">
            <span>02</span>
            <span className="h-px w-10 bg-terra-soft" />
            <span>Experience</span>
          </p>
          <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight sm:text-6xl">
            Where I&apos;ve <em className="font-normal text-terra-soft">worked</em>
          </h2>
        </FadeIn>

        <FadeIn delay={0.1} className="grid gap-8 lg:grid-cols-[280px_1fr]">
          {/* Company tabs */}
          <div role="tablist" className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-2 lg:mx-0 lg:flex-col lg:overflow-visible lg:px-0">
            {experience.map((e, i) => (
              <button
                key={e.company}
                role="tab"
                aria-selected={active === i}
                onClick={() => setActive(i)}
                className={`relative shrink-0 rounded-2xl px-5 py-4 text-left transition-colors duration-300 ${
                  active === i ? "text-sand" : "text-sand/60 hover:text-sand"
                }`}
              >
                {active === i && (
                  <motion.span
                    layoutId="exp-tab"
                    className="absolute inset-0 rounded-2xl bg-terra"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative block font-semibold">{e.company}</span>
                <span className="relative block font-mono text-xs opacity-80">{e.period}</span>
              </button>
            ))}
          </div>

          {/* Details */}
          <div className="relative min-h-[300px] rounded-[2rem] bg-sand/5 p-8 ring-1 ring-sand/10 sm:p-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={job.company}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-terra text-sand">
                    <FontAwesomeIcon icon={faBriefcase} />
                  </span>
                  {job.current && (
                    <span className="rounded-full bg-sand px-3 py-1 font-mono text-xs font-semibold uppercase tracking-wider text-terra">
                      Current
                    </span>
                  )}
                </div>
                <h3 className="mt-6 font-serif text-3xl font-semibold">
                  {job.role} <span className="italic text-terra-soft">@ {job.company}</span>
                </h3>
                <p className="mt-2 font-mono text-sm text-sand/60">{job.period}</p>
                <ul className="mt-8 space-y-4">
                  {job.points.map((p, i) => (
                    <motion.li
                      key={p}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + i * 0.08 }}
                      className="flex gap-4 leading-relaxed text-sand/85"
                    >
                      <FontAwesomeIcon icon={faCircleCheck} className="mt-1 h-4 w-4 shrink-0 text-terra-soft" />
                      {p}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
