"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare, faBrain, faCubes, faLayerGroup, faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { projects, type ProjectCategory } from "@/data/resume";
import SectionHeading from "./SectionHeading";
import FadeIn from "./FadeIn";

const filters: ("All" | ProjectCategory)[] = ["All", "AI", "Full Stack", "Frontend"];
const categoryIcon = { AI: faBrain, "Full Stack": faCubes, Frontend: faLaptopCode } as const;

export default function Projects() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const shown = projects.filter((p) => filter === "All" || p.category === filter);

  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-28 sm:px-6 sm:py-36">
      <SectionHeading index="03" eyebrow="Projects" title="Selected" italic="work" />

      <FadeIn className="mb-10 flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`relative rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-300 ${
              filter === f ? "text-sand" : "text-ink ring-1 ring-sand-dark hover:text-terra"
            }`}
          >
            {filter === f && (
              <motion.span layoutId="proj-filter" className="absolute inset-0 rounded-full bg-terra" transition={{ type: "spring", stiffness: 380, damping: 30 }} />
            )}
            <span className="relative flex items-center gap-2">
              <FontAwesomeIcon icon={f === "All" ? faLayerGroup : categoryIcon[f]} className="h-3.5 w-3.5" />
              {f}
            </span>
          </button>
        ))}
      </FadeIn>

      <motion.div layout className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {shown.map((p) => (
            <motion.article
              layout
              key={p.title}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="group relative flex flex-col overflow-hidden rounded-[2rem] bg-sand-light p-7 ring-1 ring-sand-dark transition-shadow duration-500 hover:shadow-[0_30px_50px_-28px_rgba(142,55,32,0.7)]"
            >
              {/* terracotta fill that rises on hover */}
              <span className="absolute inset-x-0 bottom-0 h-0 bg-terra transition-all duration-500 ease-out group-hover:h-full" />

              <div className="relative flex items-start justify-between">
                <span className="font-serif text-5xl font-semibold italic text-terra/25 transition-colors duration-500 group-hover:text-sand/40">
                  {String(projects.indexOf(p) + 1).padStart(2, "0")}
                </span>
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-terra/10 text-terra transition-all duration-500 group-hover:-rotate-45 group-hover:bg-sand">
                  <FontAwesomeIcon icon={p.live ? faArrowUpRightFromSquare : categoryIcon[p.category]} className="h-4 w-4" />
                </span>
              </div>

              <p className="relative mt-8 font-mono text-xs uppercase tracking-widest text-terra transition-colors duration-500 group-hover:text-sand-dark">
                {p.type}
              </p>
              <h3 className="relative mt-2 font-serif text-2xl font-semibold transition-colors duration-500 group-hover:text-sand">{p.title}</h3>
              <p className="relative mt-3 flex-1 text-sm leading-relaxed text-ink-soft transition-colors duration-500 group-hover:text-sand/90">
                {p.description}
              </p>

              <ul className="relative mt-6 flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <li
                    key={t}
                    className="rounded-full bg-sand px-2.5 py-1 font-mono text-[11px] text-ink-soft ring-1 ring-sand-dark transition-colors duration-500 group-hover:bg-terra-deep group-hover:text-sand group-hover:ring-sand/20"
                  >
                    {t}
                  </li>
                ))}
              </ul>

              {(p.repo || p.live) && (
                <div className="relative mt-6 flex gap-4 text-sm font-medium">
                  {p.repo && (
                    <a href={p.repo} target="_blank" rel="noreferrer" className="flex items-center gap-2 group-hover:text-sand">
                      <FontAwesomeIcon icon={faGithub} /> Code
                    </a>
                  )}
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noreferrer" className="flex items-center gap-2 group-hover:text-sand">
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> Live
                    </a>
                  )}
                </div>
              )}
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
