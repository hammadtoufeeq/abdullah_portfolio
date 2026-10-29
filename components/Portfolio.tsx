"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { projects, type ProjectCategory } from "@/data/resume";
import FadeIn from "./FadeIn";
import ProjectCard from "./ProjectCard";
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
        text="A selection of full-stack, AI and frontend projects I've designed and built."
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

      <motion.div layout className="grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {shown.map((p) => (
            <ProjectCard key={p.title} project={p} index={projects.indexOf(p)} />
          ))}
        </AnimatePresence>
      </motion.div>
      </div>
    </section>
  );
}
