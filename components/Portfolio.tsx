"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { projects, type ProjectCategory } from "@/data/resume";
import FadeIn from "./FadeIn";
import SectionTitle from "./SectionTitle";

const filters: ("All" | ProjectCategory)[] = ["All", "AI", "Full Stack", "Frontend"];

export default function Portfolio() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const shown = projects.filter((p) => filter === "All" || p.category === filter);

  return (
    <section id="portfolio" className="relative">
      {/* orange edge block on the right, echoing the reference layout */}
      <motion.div
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="absolute right-0 top-1/4 hidden h-2/3 w-[6%] origin-top bg-orange xl:block"
      />
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
      <SectionTitle
        title="My Portfolio"
        text="A selection of full-stack, AI and frontend projects I've designed and built. Hover a card to learn more."
      />

      <FadeIn className="mb-10 flex flex-wrap justify-center gap-6 text-sm">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`relative pb-2 transition-colors ${filter === f ? "text-white" : "text-muted hover:text-white"}`}
          >
            {f}
            {filter === f && <motion.span layoutId="port-underline" className="absolute inset-x-0 bottom-0 h-0.5 bg-orange" />}
          </button>
        ))}
      </FadeIn>

      <motion.div layout className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {shown.map((p, i) => (
            <motion.article
              layout
              key={p.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="group relative aspect-[4/3.6] overflow-hidden rounded-sm bg-card ring-1 ring-line"
            >
              {/* mock browser thumbnail */}
              <div className={`absolute inset-0 p-4 transition-transform duration-700 group-hover:scale-105 ${i % 3 === 1 ? "bg-[#ececec]" : "bg-[#1d1d1d]"}`}>
                <div className="flex gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-orange" />
                  <span className={`h-1.5 w-1.5 rounded-full ${i % 3 === 1 ? "bg-black/20" : "bg-white/20"}`} />
                  <span className={`h-1.5 w-1.5 rounded-full ${i % 3 === 1 ? "bg-black/20" : "bg-white/20"}`} />
                </div>
                <div className="mt-6 flex items-center gap-4">
                  <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-orange text-white">
                    <FontAwesomeIcon icon={p.icon} className="h-7 w-7" />
                  </span>
                  <div className="flex-1 space-y-2">
                    <span className={`block h-2 w-3/4 rounded ${i % 3 === 1 ? "bg-black/70" : "bg-white/70"}`} />
                    <span className={`block h-2 w-1/2 rounded ${i % 3 === 1 ? "bg-black/25" : "bg-white/25"}`} />
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-3 gap-2">
                  {[0, 1, 2].map((k) => (
                    <span key={k} className={`h-14 rounded ${i % 3 === 1 ? "bg-black/10" : "bg-white/[0.06]"}`} />
                  ))}
                </div>
                <div className="mt-3 space-y-1.5">
                  <span className={`block h-1.5 w-full rounded ${i % 3 === 1 ? "bg-black/10" : "bg-white/10"}`} />
                  <span className={`block h-1.5 w-4/5 rounded ${i % 3 === 1 ? "bg-black/10" : "bg-white/10"}`} />
                </div>
              </div>

              {/* title bar */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/85 to-transparent p-5 pt-12 transition-opacity duration-300 group-hover:opacity-0">
                <p className="text-xs font-medium text-orange">{p.type}</p>
                <h3 className="mt-1 text-lg font-semibold">{p.title}</h3>
              </div>

              {/* orange hover overlay, like the highlighted card in the reference */}
              <div className="absolute inset-0 flex translate-y-full flex-col justify-center bg-orange p-6 text-center transition-transform duration-500 ease-out group-hover:translate-y-0">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-1 text-xs text-white/85">{p.type}</p>
                <p className="mt-4 text-sm leading-relaxed text-white/95">{p.description}</p>
                <p className="mt-4 text-xs text-white/85">{p.tech.join(" · ")}</p>
                {(p.repo || p.live) && (
                  <div className="mt-5 flex justify-center gap-3">
                    {p.repo && (
                      <a href={p.repo} target="_blank" rel="noreferrer" aria-label={`${p.title} source`} className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-orange">
                        <FontAwesomeIcon icon={faGithub} />
                      </a>
                    )}
                    {p.live && (
                      <a href={p.live} target="_blank" rel="noreferrer" aria-label={`${p.title} live demo`} className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-orange">
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
      </div>
    </section>
  );
}
