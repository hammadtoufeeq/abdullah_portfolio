"use client";

import { motion } from "motion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAws, faGithub, faJs, faLinkedinIn, faNodeJs, faReact } from "@fortawesome/free-brands-svg-icons";
import { faArrowDown, faArrowRight, faDatabase, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { profile } from "@/data/resume";
import Typewriter from "./Typewriter";

const ease = [0.22, 1, 0.36, 1] as const;

const badges = [
  { icon: faReact, className: "left-[-6%] top-[14%]", delay: 0 },
  { icon: faNodeJs, className: "right-[-8%] top-[30%]", delay: 1.2 },
  { icon: faDatabase, className: "left-[-10%] bottom-[22%]", delay: 0.6 },
  { icon: faJs, className: "right-[-2%] bottom-[8%]", delay: 1.8 },
  { icon: faAws, className: "left-[40%] top-[-6%]", delay: 2.4 },
];

export default function Hero() {
  const [first, last] = profile.name.split(" ");

  return (
    <section id="top" className="relative overflow-hidden">
      {/* soft terracotta glow */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-terra/15 blur-3xl" />

      <div className="relative mx-auto grid min-h-[100svh] max-w-6xl items-center gap-16 px-4 pb-20 pt-32 sm:px-6 lg:grid-cols-[1.25fr_1fr]">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 rounded-full border border-terra/30 bg-sand-light px-4 py-1.5 text-xs font-medium text-terra"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-terra opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-terra" />
            </span>
            Available for new opportunities
          </motion.span>

          <h1 className="mt-8 font-serif text-6xl font-semibold leading-[0.95] tracking-tight sm:text-8xl">
            {[first, last].map((word, wi) => (
              <span key={word} className="block overflow-hidden pb-2">
                <motion.span
                  className={`inline-block ${wi === 1 ? "italic text-terra" : ""}`}
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, delay: 0.3 + wi * 0.15, ease }}
                >
                  {word}
                  {wi === 1 && <span className="text-ink">.</span>}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-6 min-h-[2.5rem] font-mono text-lg text-ink sm:text-2xl"
          >
            I&apos;m a <Typewriter words={["Full Stack Developer", "MERN Stack Engineer", "Next.js Developer", "AI Chatbot Builder"]} />
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.15 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-3 rounded-full bg-terra px-7 py-4 font-semibold text-sand shadow-[0_12px_30px_-10px_rgba(181,71,43,0.7)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-terra-deep"
            >
              See my work
              <FontAwesomeIcon icon={faArrowRight} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border-2 border-ink px-7 py-3.5 font-semibold text-ink transition-all duration-300 hover:bg-ink hover:text-sand"
            >
              Let&apos;s talk
            </a>
            <div className="flex gap-2">
              {[
                { href: profile.github, icon: faGithub, label: "GitHub" },
                { href: profile.linkedin, icon: faLinkedinIn, label: "LinkedIn" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-terra/30 text-terra transition-all duration-300 hover:-translate-y-1 hover:bg-terra hover:text-sand"
                >
                  <FontAwesomeIcon icon={s.icon} className="h-5 w-5" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
            className="mt-8 flex items-center gap-2 text-sm text-ink-soft"
          >
            <FontAwesomeIcon icon={faLocationDot} className="text-terra" /> {profile.location}
          </motion.p>
        </div>

        {/* Arch visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.4, ease }}
          className="relative mx-auto w-full max-w-[270px] sm:max-w-[380px]"
        >
          <div className="relative aspect-[3/4] overflow-hidden rounded-t-full bg-terra shadow-[0_40px_80px_-30px_rgba(142,55,32,0.8)]">
            {/* concentric arches */}
            {[0.82, 0.64, 0.46].map((s) => (
              <div
                key={s}
                className="absolute bottom-0 left-1/2 aspect-[3/4] -translate-x-1/2 rounded-t-full border border-sand/25"
                style={{ width: `${s * 100}%` }}
              />
            ))}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-sand">
              <span className="font-serif text-8xl font-semibold italic sm:text-9xl">AA</span>
              <span className="mt-2 font-mono text-xs uppercase tracking-[0.3em] text-sand-dark">MERN · Next.js</span>
            </div>
          </div>

          {/* spinning circular text */}
          <div className="absolute -bottom-10 -left-8 h-32 w-32 rounded-full bg-sand-light shadow-lg ring-1 ring-sand-dark sm:h-36 sm:w-36">
            <svg viewBox="0 0 100 100" className="h-full w-full animate-spin-slow">
              <defs>
                <path id="circle" d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0" />
              </defs>
              <text className="fill-terra font-mono text-[9.5px] uppercase tracking-[0.18em]">
                <textPath href="#circle">Full Stack Developer • Open to work •</textPath>
              </text>
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-terra">
              <FontAwesomeIcon icon={faArrowDown} className="h-5 w-5" />
            </span>
          </div>

          {/* floating tech badges */}
          {badges.map((b) => (
            <div
              key={b.icon.iconName}
              className={`absolute ${b.className} flex h-14 w-14 animate-float items-center justify-center rounded-2xl bg-sand-light text-terra shadow-[0_10px_25px_-10px_rgba(58,26,16,0.45)] ring-1 ring-sand-dark`}
              style={{ animationDelay: `${b.delay}s` }}
            >
              <FontAwesomeIcon icon={b.icon} className="h-6 w-6" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
