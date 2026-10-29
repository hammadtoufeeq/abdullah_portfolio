"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileCode } from "@fortawesome/free-solid-svg-icons";
import { skills } from "@/data/resume";
import FadeIn from "./FadeIn";
import SectionHeading from "./SectionHeading";

const fileName = (g: string) => g.toLowerCase().replace(/[^a-z]+/g, "-").replace(/-$/, "") + ".ts";
const varName = (g: string) => g.toLowerCase().replace(/[^a-z]+(.)/g, (_, c: string) => c.toUpperCase());

export default function Skills() {
  const [active, setActive] = useState(0);
  const group = skills[active];

  return (
    <section id="skills" className="border-y border-line bg-bg-deep">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
        <SectionHeading index="04" file="skills" title="code ./tech-stack" />

        <FadeIn>
          <div className="overflow-hidden rounded-xl border border-line bg-bg shadow-[0_30px_60px_-30px_rgba(0,0,0,0.9)]">
            {/* editor file tabs */}
            <div role="tablist" className="flex overflow-x-auto border-b border-line bg-surface">
              {skills.map((s, i) => (
                <button
                  key={s.group}
                  role="tab"
                  aria-selected={active === i}
                  onClick={() => setActive(i)}
                  className={`relative flex shrink-0 items-center gap-2 border-r border-line px-4 py-3 font-mono text-xs transition-colors ${
                    active === i ? "bg-bg text-fg" : "text-muted hover:text-fg"
                  }`}
                >
                  <FontAwesomeIcon icon={faFileCode} className={`h-3.5 w-3.5 ${active === i ? "text-mint" : ""}`} />
                  {fileName(s.group)}
                  {active === i && <motion.span layoutId="skill-tab" className="absolute inset-x-0 top-0 h-0.5 bg-mint" />}
                </button>
              ))}
            </div>

            <div className="grid min-h-[300px] gap-0 md:grid-cols-[1fr_1.2fr]">
              {/* code view */}
              <div className="border-b border-line p-5 font-mono text-[13px] leading-7 md:border-b-0 md:border-r">
                <AnimatePresence mode="wait">
                  <motion.pre
                    key={group.group}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-x-auto"
                  >
                    <code>
                      <span className="select-none pr-4 text-line">1</span>
                      <span className="text-mint">export const</span> <span className="text-fg">{varName(group.group)}</span>{" "}
                      <span className="text-muted">= [</span>
                      {"\n"}
                      {group.items.map((s, i) => (
                        <span key={s.name}>
                          <span className="select-none pr-4 text-line">{i + 2}</span>
                          {"  "}
                          <span className="text-mint-hover">&quot;{s.name}&quot;</span>
                          <span className="text-muted">,</span>
                          {"\n"}
                        </span>
                      ))}
                      <span className="select-none pr-4 text-line">{group.items.length + 2}</span>
                      <span className="text-muted">];</span>
                    </code>
                  </motion.pre>
                </AnimatePresence>
              </div>

              {/* rendered tiles */}
              <div className="p-5">
                <p className="mb-4 font-mono text-xs text-muted">{"// preview"}</p>
                <AnimatePresence mode="wait">
                  <motion.ul key={group.group} className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {group.items.map((s, i) => (
                      <motion.li
                        key={s.name}
                        initial={{ opacity: 0, y: 14, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.12 } }}
                        transition={{ delay: i * 0.04, type: "spring", stiffness: 380, damping: 24 }}
                        whileHover={{ y: -4 }}
                        className="group flex flex-col items-center gap-2 rounded-lg border border-line bg-surface px-3 py-5 text-center transition-[border-color,box-shadow] duration-300 hover:border-mint/60 hover:shadow-[0_0_30px_-12px_#2ee6a6]"
                      >
                        <FontAwesomeIcon icon={s.icon} className="h-7 w-7 text-mint transition-transform duration-500 group-hover:scale-110" />
                        <span className="font-mono text-xs text-fg">{s.name}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
