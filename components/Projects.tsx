"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare, faBookBookmark, faCircle } from "@fortawesome/free-solid-svg-icons";
import { projects, type ProjectCategory } from "@/data/resume";
import FadeIn from "./FadeIn";
import SectionHeading from "./SectionHeading";

const filters: ("all" | ProjectCategory)[] = ["all", "AI", "Full Stack", "Frontend"];
const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export default function Projects() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("all");
  const shown = projects.filter((p) => filter === "all" || p.category === filter);

  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
      <SectionHeading index="03" file="projects" title="ls ./repositories" />

      <FadeIn className="mb-8 flex flex-wrap items-center gap-2 font-mono text-sm">
        <span className="mr-1 text-muted">$ filter</span>
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`relative rounded-md border px-3.5 py-1.5 transition-colors duration-200 ${
              filter === f ? "border-mint text-bg-deep" : "border-line text-muted hover:border-mint/50 hover:text-fg"
            }`}
          >
            {filter === f && (
              <motion.span layoutId="proj-filter" className="absolute inset-0 rounded-[5px] bg-mint" transition={{ type: "spring", stiffness: 420, damping: 32 }} />
            )}
            <span className="relative">--{slug(f)}</span>
          </button>
        ))}
        <span className="ml-auto text-xs text-muted">
          {shown.length} result{shown.length === 1 ? "" : "s"}
        </span>
      </FadeIn>

      <motion.div layout className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {shown.map((p) => (
            <motion.article
              layout
              key={p.title}
              initial={{ opacity: 0, y: 20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className="group relative flex flex-col overflow-hidden rounded-xl border border-line bg-surface p-6 transition-[border-color,box-shadow] duration-300 hover:border-mint/60 hover:shadow-[0_0_50px_-24px_#2ee6a6]"
            >
              {/* top glow line on hover */}
              <span className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-gradient-to-r from-transparent via-mint to-transparent transition-transform duration-500 group-hover:scale-x-100" />

              <div className="flex items-center justify-between font-mono text-sm">
                <span className="flex min-w-0 items-center gap-2 text-mint">
                  <FontAwesomeIcon icon={faBookBookmark} className="h-4 w-4 shrink-0 text-muted" />
                  <span className="truncate font-semibold group-hover:underline">{slug(p.title)}</span>
                </span>
                <span className="shrink-0 rounded-full border border-line px-2 py-0.5 text-[11px] text-muted">
                  {p.featured ? "featured" : "public"}
                </span>
              </div>

              <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{p.description}</p>

              <ul className="mt-5 flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <li key={t} className="rounded-md bg-mint/10 px-2 py-0.5 font-mono text-[11px] text-mint">
                    {t}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex items-center justify-between border-t border-line pt-4 font-mono text-xs text-muted">
                <span className="flex items-center gap-1.5">
                  <FontAwesomeIcon icon={faCircle} className="h-2.5 w-2.5 text-mint" /> {p.type}
                </span>
                <span className="flex gap-3">
                  {p.repo && (
                    <a href={p.repo} target="_blank" rel="noreferrer" aria-label={`${p.title} source`} className="hover:text-mint">
                      <FontAwesomeIcon icon={faGithub} className="h-4 w-4" />
                    </a>
                  )}
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noreferrer" aria-label={`${p.title} live demo`} className="hover:text-mint">
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="h-4 w-4" />
                    </a>
                  )}
                </span>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
