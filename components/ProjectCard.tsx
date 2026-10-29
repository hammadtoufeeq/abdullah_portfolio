"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import type { Project } from "@/data/resume";

// Unsplash serves the photo at this address (redirects to images.unsplash.com)
const unsplash = (id: string, w = 900) => `https://unsplash.com/photos/${id}/download?w=${w}`;

// `ref` is forwarded so AnimatePresence's popLayout mode can measure the card (React 19 ref-as-prop)
export default function ProjectCard({
  project: p,
  index,
  ref,
}: {
  project: Project;
  index: number;
  ref?: React.Ref<HTMLElement>;
}) {
  const [imgOk, setImgOk] = useState(true);

  return (
    <motion.article
      ref={ref}
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.92 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8 }}
      className="group flex flex-col overflow-hidden rounded-xl bg-card ring-1 ring-line transition-[box-shadow] duration-500 hover:shadow-[0_30px_60px_-30px_rgba(255,91,15,0.55)] hover:ring-orange/60"
    >
      {/* cover image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-[#2a2a2a] to-[#111]">
        {imgOk ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={unsplash(p.image)}
            alt={`${p.title} cover`}
            loading="lazy"
            onError={() => setImgOk(false)}
            className="h-full w-full object-cover grayscale-[60%] transition-all duration-700 ease-out group-hover:scale-110 group-hover:grayscale-0"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <FontAwesomeIcon icon={p.icon} className="h-14 w-14 text-orange/70" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-card via-black/20 to-black/10" />
        {/* orange wash on hover */}
        <div className="absolute inset-0 bg-orange/0 mix-blend-multiply transition-colors duration-500 group-hover:bg-orange/25" />

        <span className="absolute left-4 top-4 rounded-full bg-black/60 px-3 py-1 text-[11px] font-medium text-white ring-1 ring-white/15 backdrop-blur">
          {p.category}
        </span>
        <span className="absolute right-4 top-4 font-bold text-white/80 drop-shadow">{String(index + 1).padStart(2, "0")}</span>

        {/* links revealed on hover */}
        {(p.repo || p.live) && (
          <div className="absolute inset-x-0 bottom-4 flex justify-center gap-3 opacity-0 transition-all duration-500 group-hover:opacity-100">
            {p.repo && (
              <a href={p.repo} target="_blank" rel="noreferrer" aria-label={`${p.title} source`} className="grid h-10 w-10 place-items-center rounded-full bg-white text-bg hover:bg-orange hover:text-white">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            )}
            {p.live && (
              <a href={p.live} target="_blank" rel="noreferrer" aria-label={`${p.title} live demo`} className="grid h-10 w-10 place-items-center rounded-full bg-white text-bg hover:bg-orange hover:text-white">
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
            )}
          </div>
        )}
      </div>

      {/* body */}
      <div className="relative flex flex-1 flex-col px-6 pb-6 pt-9">
        <span className="absolute -top-7 left-6 grid h-14 w-14 place-items-center rounded-xl bg-orange text-white shadow-[0_10px_25px_-8px_rgba(255,91,15,0.9)] ring-4 ring-card transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110">
          <FontAwesomeIcon icon={p.icon} className="h-6 w-6" />
        </span>
        <p className="text-xs font-medium uppercase tracking-wider text-orange">{p.type}</p>
        <h3 className="mt-1.5 text-xl font-semibold leading-snug">{p.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{p.description}</p>

        <ul className="mt-5 flex flex-wrap gap-1.5">
          {p.tech.map((t) => (
            <li
              key={t}
              className="rounded-full border border-line bg-bg px-2.5 py-1 text-[11px] text-white/75 transition-colors duration-300 group-hover:border-orange/40"
            >
              {t}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex items-center justify-between border-t border-line pt-4 text-sm">
          <span className="text-muted">{p.tech.length} technologies</span>
          <span className="flex items-center gap-2 font-medium text-white transition-colors group-hover:text-orange">
            {p.live ? "View project" : p.featured ? "Featured" : "Case study"}
            <FontAwesomeIcon icon={faArrowRight} className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </motion.article>
  );
}
