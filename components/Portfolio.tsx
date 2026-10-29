"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowLeft, faArrowRight, faArrowUpRightFromSquare, faComments } from "@fortawesome/free-solid-svg-icons";
import { profile, projects, type Project } from "@/data/resume";
import FadeIn from "./FadeIn";
import SectionTitle from "./SectionTitle";

// Unsplash serves the photo at this address (redirects to images.unsplash.com)
const unsplash = (id: string, w = 1200) => `https://unsplash.com/photos/${id}/download?w=${w}`;

const stackGroups: [string, string[]][] = [
  ["Frontend", ["React", "Tailwind", "CSS", "HTML"]],
  ["Backend", ["Node", "Node.js", "Express", "Express.js", "FastAPI", "Flask"]],
  ["Database", ["MongoDB", "SQLite", "MySQL"]],
  ["AI / ML", ["SBERT"]],
  ["Cloud & Deploy", ["Firebase", "Firebase Hosting", "Vercel"]],
];

// Groups a project's tech list into labelled rows, keeping anything unrecognised under "Other"
function groupStack(tech: string[]) {
  const groups = stackGroups
    .map(([name, members]) => [name, tech.filter((t) => members.includes(t))] as const)
    .filter(([, items]) => items.length);
  const known = new Set(stackGroups.flatMap(([, m]) => m));
  const other = tech.filter((t) => !known.has(t));
  return other.length ? [...groups, ["Other", other] as const] : groups;
}

function Cover({ project: p }: { project: Project }) {
  const [ok, setOk] = useState(true);
  return (
    <div className="relative">
      <div className="overflow-hidden rounded-2xl border border-line bg-bg shadow-[0_30px_60px_-30px_rgba(0,0,0,0.9)]">
        <div className="flex items-center gap-2 border-b border-line bg-card px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-3 truncate rounded-md bg-bg px-3 py-1 font-mono text-[11px] text-muted">
            {p.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}.app
          </span>
        </div>
        <div className="relative aspect-[16/10] bg-gradient-to-br from-[#2a2a2a] to-[#111]">
          {ok ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={unsplash(p.image)}
              alt={`${p.title} illustration`}
              onError={() => setOk(false)}
              draggable={false}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full items-center justify-center">
              <FontAwesomeIcon icon={p.icon} className="h-16 w-16 text-orange/70" />
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
            <span className="rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white ring-1 ring-white/15 backdrop-blur">{p.type}</span>
            <span className="rounded-full bg-orange px-3 py-1 text-xs font-semibold text-white">{p.tech.length} technologies</span>
          </div>
        </div>
      </div>
      {/* floating icon badge */}
      <motion.span
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-3 -top-4 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-orange to-orange-hover text-white shadow-[0_15px_30px_-10px_rgba(255,91,15,0.9)]"
      >
        <FontAwesomeIcon icon={p.icon} className="h-6 w-6" />
      </motion.span>
      <p className="mt-3 text-center font-mono text-[11px] text-white/35">Illustration · photo via Unsplash</p>
    </div>
  );
}

function Slide({ project: p, index }: { project: Project; index: number }) {
  return (
    <article className="orange-border relative overflow-hidden rounded-[2rem] bg-card/70 p-5 sm:p-8 md:p-12">
      <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-orange/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-orange/10 blur-3xl" />

      <div className="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-2 [&>*]:min-w-0">
        <div>
          <div className="mb-5 flex flex-wrap items-center gap-2">
            {p.featured && (
              <span className="rounded-full bg-gradient-to-r from-orange to-orange-hover px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                Featured
              </span>
            )}
            <span className="rounded-full border border-orange/30 bg-orange/10 px-3 py-1 text-xs font-semibold text-orange-hover">● {p.category}</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60">Project {String(index + 1).padStart(2, "0")}</span>
          </div>
          <h3 className="text-4xl font-bold text-white md:text-5xl">{p.title}</h3>
          <p className="mt-3 bg-gradient-to-r from-orange via-orange-hover to-[#ffc08a] bg-clip-text text-xl font-medium text-transparent">{p.tagline}</p>
          <p className="mt-5 leading-relaxed text-white/65">{p.description}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            {p.live && (
              <a
                href={p.live}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-bg transition hover:scale-105"
              >
                Visit live site <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="h-3.5 w-3.5" />
              </a>
            )}
            <a
              href={p.repo ?? profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-bg transition hover:scale-105"
            >
              <FontAwesomeIcon icon={faGithub} className="h-4 w-4" /> {p.repo ? "Source code" : "View on GitHub"}
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 font-semibold text-white transition hover:border-orange hover:bg-orange/10"
            >
              <FontAwesomeIcon icon={faComments} className="h-4 w-4 text-orange" /> Discuss this project
            </a>
          </div>
        </div>

        <Cover project={p} />
      </div>

      <div className="relative mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {p.highlights.map((h, i) => (
          <motion.div
            key={h.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: i * 0.07, duration: 0.5 }}
            whileHover={{ y: -6 }}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-orange/50 hover:bg-white/[0.06]"
          >
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-orange/15 text-orange">
              <FontAwesomeIcon icon={h.icon} className="h-4 w-4" />
            </span>
            <h4 className="mt-4 text-lg font-semibold text-white">{h.title}</h4>
            <p className="mt-2 text-sm leading-relaxed text-white/60">{h.text}</p>
          </motion.div>
        ))}
      </div>

      <div className="relative mt-10 grid grid-cols-1 gap-6 lg:grid-cols-[1.4fr_1fr] [&>*]:min-w-0">
        <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-white/40">{"// tech stack"}</p>
          <div className="space-y-4">
            {groupStack(p.tech).map(([group, items]) => (
              <div key={group}>
                <p className="mb-2 text-sm font-semibold text-white/80">{group}</p>
                <div className="flex flex-wrap gap-2">
                  {items.map((t) => (
                    <span key={t} className="rounded-lg bg-white/5 px-2.5 py-1 font-mono text-xs text-white/70 ring-1 ring-white/10">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-white/40">{"// how it works"}</p>
          <ol className="space-y-2">
            {p.flow.map((f, i) => (
              <motion.li
                key={f}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-3"
              >
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-orange to-orange-hover font-mono text-xs font-bold text-white">
                  {i + 1}
                </span>
                <span className="font-mono text-sm text-white/80">{f}</span>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </article>
  );
}

function NavButton({ dir, onClick }: { dir: "prev" | "next"; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      aria-label={dir === "prev" ? "Previous project" : "Next project"}
      className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/15 bg-white/5 text-white transition hover:scale-105 hover:border-orange hover:bg-orange"
    >
      <FontAwesomeIcon icon={dir === "prev" ? faArrowLeft : faArrowRight} className="h-3.5 w-3.5" />
    </button>
  );
}

// Project showcase slider: pills + counter + arrows, swipeable slides, dots and "Next" hint
export default function Portfolio() {
  const [[index, direction], setState] = useState<[number, number]>([0, 0]);
  const sliderRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
  const n = projects.length;

  // Keep the selected project pill visible inside the scrollable tab row
  useEffect(() => {
    const row = tabsRef.current;
    const tab = row?.children[index] as HTMLElement | undefined;
    if (!row || !tab) return;
    row.scrollTo({ left: tab.offsetLeft - row.clientWidth / 2 + tab.offsetWidth / 2 });
  }, [index]);

  const go = (to: number) => {
    const next = (to + n) % n;
    setState([next, to > index || (index === n - 1 && next === 0) ? 1 : -1]);
    // After a long slide, bring the start of the new one back into view
    const top = sliderRef.current?.getBoundingClientRect().top ?? 0;
    if (top < 0) window.scrollBy({ top: top - 110, behavior: "smooth" });
  };

  const counter = (
    <span className="whitespace-nowrap font-mono text-sm text-white/45">
      {String(index + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}
    </span>
  );

  return (
    <section id="portfolio" className="relative">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
        <SectionTitle
          title="My Projects"
          text="Full-stack, AI and frontend projects I've designed and built. Use the arrows, the tabs or swipe to browse."
        />

        <div ref={sliderRef}>
          <FadeIn className="mb-6 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between lg:gap-6">
            <div
              ref={tabsRef}
              role="tablist"
              aria-label="Projects"
              className="relative -mx-4 flex min-w-0 gap-2 overflow-x-auto scroll-smooth px-4 pb-1 [scrollbar-width:none] sm:mx-0 sm:px-0 [&::-webkit-scrollbar]:hidden [mask-image:linear-gradient(to_right,black_92%,transparent)]"
            >
              {projects.map((p, i) => (
                <button
                  key={p.title}
                  role="tab"
                  onClick={() => i !== index && go(i)}
                  aria-selected={i === index}
                  className={`shrink-0 whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition ${
                    i === index ? "bg-white text-bg" : "border border-white/10 bg-white/5 text-white/65 hover:border-orange/50 hover:text-white"
                  }`}
                >
                  {p.title}
                </button>
              ))}
            </div>
            <div className="flex shrink-0 items-center justify-between gap-3 lg:justify-end">
              {counter}
              <div className="flex items-center gap-3">
                <NavButton dir="prev" onClick={() => go(index - 1)} />
                <NavButton dir="next" onClick={() => go(index + 1)} />
              </div>
            </div>
          </FadeIn>

          <div className="relative overflow-hidden">
            <AnimatePresence mode="popLayout" initial={false} custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                variants={{
                  enter: (d: number) => ({ x: d >= 0 ? "12%" : "-12%", opacity: 0 }),
                  center: { x: 0, opacity: 1 },
                  exit: (d: number) => ({ x: d >= 0 ? "-12%" : "12%", opacity: 0 }),
                }}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.18}
                dragDirectionLock
                onDragEnd={(_, { offset, velocity }) => {
                  if (offset.x < -80 || velocity.x < -500) go(index + 1);
                  else if (offset.x > 80 || velocity.x > 500) go(index - 1);
                }}
                className="cursor-grab active:cursor-grabbing"
              >
                <Slide project={projects[index]} index={index} />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-6 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              {projects.map((p, i) => (
                <button
                  key={p.title}
                  onClick={() => i !== index && go(i)}
                  aria-label={`Show ${p.title}`}
                  className={`h-2 rounded-full transition-all ${i === index ? "w-8 bg-orange" : "w-2 bg-white/25 hover:bg-white/50"}`}
                />
              ))}
            </div>
            <div className="flex items-center gap-3">
              <span className="hidden text-sm text-white/45 sm:inline">Next: {projects[(index + 1) % n].title}</span>
              <NavButton dir="prev" onClick={() => go(index - 1)} />
              <NavButton dir="next" onClick={() => go(index + 1)} />
            </div>
          </div>
        </div>

        <FadeIn className="mt-10 text-center">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 font-semibold text-white/70 transition hover:text-white"
          >
            <FontAwesomeIcon icon={faGithub} className="h-4 w-4" /> More on my GitHub
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="h-3 w-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
