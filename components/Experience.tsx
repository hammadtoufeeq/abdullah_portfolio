"use client";

import { motion } from "motion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodeCommit } from "@fortawesome/free-solid-svg-icons";
import { experience } from "@/data/resume";
import SectionHeading from "./SectionHeading";

// Stable fake short hash per company, purely decorative
const hash = (s: string) => {
  let h = 2166136261;
  for (const c of s) h = Math.imul(h ^ c.charCodeAt(0), 16777619);
  return (h >>> 0).toString(16).padStart(7, "0").slice(0, 7);
};

export default function Experience() {
  return (
    <section id="experience" className="border-y border-line bg-bg-deep">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
        <SectionHeading index="02" file="experience" title="git log --career" />

        <ol className="relative">
          {/* branch line */}
          <motion.span
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
            className="absolute bottom-4 left-[15px] top-4 w-0.5 origin-top bg-gradient-to-b from-mint via-line to-line"
          />
          {experience.map((job, i) => (
            <motion.li
              key={job.company}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="relative pb-10 pl-12 last:pb-0"
            >
              <span
                className={`absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full border-2 bg-bg-deep ${
                  job.current ? "border-mint text-mint shadow-[0_0_16px_-2px_#2ee6a6]" : "border-line text-muted"
                }`}
              >
                <FontAwesomeIcon icon={faCodeCommit} className="h-3.5 w-3.5" />
              </span>

              <div className="group rounded-xl border border-line bg-surface p-6 transition-all duration-300 hover:border-mint/50 hover:shadow-[0_0_40px_-20px_#2ee6a6]">
                <p className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs">
                  <span className="text-mint">commit {hash(job.company)}</span>
                  {job.current && (
                    <span className="rounded border border-mint/40 bg-mint/10 px-2 py-0.5 text-mint">HEAD -&gt; main</span>
                  )}
                  <span className="text-muted">{job.period}</span>
                </p>
                <h3 className="mt-3 text-xl font-semibold">
                  {job.role} <span className="font-mono text-mint">@{job.company}</span>
                </h3>
                <ul className="mt-4 space-y-2 font-mono text-sm">
                  {job.points.map((p) => (
                    <li key={p} className="flex gap-3 text-muted">
                      <span className="text-mint">+</span>
                      <span className="leading-relaxed">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
