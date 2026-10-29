"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faDownload, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { profile } from "@/data/resume";
import Typewriter from "./Typewriter";

const ease = [0.22, 1, 0.36, 1] as const;
const up = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease },
});

export default function Hero() {
  const initials = profile.name
    .split(" ")
    .map((w) => w[0])
    .join("");

  return (
    <section id="top" className="relative overflow-hidden bg-bg">
      {/* orange corner block, like the reference design */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1, ease }}
        className="absolute left-0 top-0 hidden h-[78%] w-[9%] origin-top bg-orange lg:block"
      />

      <div className="relative mx-auto grid min-h-[100svh] max-w-6xl items-center gap-10 px-4 pb-24 pt-28 sm:px-6 lg:grid-cols-2 lg:pt-24">
        <div className="relative z-10">
          <motion.span
            {...up(0.3)}
            className="relative inline-block bg-orange px-4 py-1.5 text-sm font-medium text-white after:absolute after:-bottom-[7px] after:left-1/2 after:h-0 after:w-0 after:-translate-x-1/2 after:border-x-[7px] after:border-t-[8px] after:border-x-transparent after:border-t-orange"
          >
            Hello, I am
          </motion.span>

          <motion.h1 {...up(0.45)} className="mt-6 text-5xl font-bold leading-[1.1] tracking-tight sm:text-6xl">
            {profile.name}
          </motion.h1>

          <motion.p {...up(0.55)} className="mt-4 min-h-[1.75rem] text-lg text-white/90">
            A Professional <Typewriter words={["Full Stack Developer", "MERN Stack Developer", "Next.js Developer", "AI Chatbot Developer"]} />
          </motion.p>

          <motion.p {...up(0.65)} className="mt-4 max-w-md leading-relaxed text-muted">
            {profile.tagline}
          </motion.p>

          <motion.div {...up(0.75)} className="mt-9 flex flex-wrap gap-4">
            <a
              href={profile.resume}
              download
              className="inline-flex items-center gap-2 rounded-md bg-orange px-7 py-3.5 text-sm font-medium text-white shadow-[0_12px_30px_-10px_rgba(255,91,15,0.9)] transition-all hover:-translate-y-0.5 hover:bg-orange-hover"
            >
              <FontAwesomeIcon icon={faDownload} className="h-3.5 w-3.5" /> Download CV
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center rounded-md border border-white px-7 py-3.5 text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:border-orange hover:bg-orange"
            >
              My Work
            </a>
          </motion.div>

          <motion.div {...up(0.85)} className="mt-10 flex items-center gap-3">
            <span className="h-px w-10 bg-orange" />
            {[
              { href: profile.github, icon: faGithub, label: "GitHub" },
              { href: profile.linkedin, icon: faLinkedinIn, label: "LinkedIn" },
              { href: `mailto:${profile.email}`, icon: faEnvelope, label: "Email" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                aria-label={s.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-white/80 transition-all hover:-translate-y-1 hover:border-orange hover:bg-orange hover:text-white"
              >
                <FontAwesomeIcon icon={s.icon} className="h-4 w-4" />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Portrait area */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.3, ease }}
          className="relative mx-auto aspect-square w-full max-w-[460px]"
        >
          <div className="absolute inset-[8%] overflow-hidden rounded-sm bg-gradient-to-b from-[#2a2a2a] via-[#141414] to-bg">
            {profile.photo ? (
              <Image src={profile.photo} alt={profile.name} fill priority className="object-cover grayscale" sizes="460px" />
            ) : (
              <div className="flex h-full items-center justify-center">
                <span className="text-outline select-none text-[9rem] font-extrabold leading-none sm:text-[11rem]">{initials}</span>
              </div>
            )}
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-bg to-transparent" />
          </div>

          {/* geometric line triangles (from the reference), slowly rotating */}
          <svg viewBox="0 0 400 400" className="pointer-events-none absolute inset-0 h-full w-full animate-spin-slow" fill="none">
            <polygon points="40,70 370,40 220,300" stroke="rgba(255,255,255,0.45)" strokeWidth="1" />
          </svg>
          <svg viewBox="0 0 400 400" className="pointer-events-none absolute inset-0 h-full w-full animate-spin-rev" fill="none">
            <polygon points="90,380 330,250 60,170" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
          </svg>

          <div className="absolute -right-2 bottom-[14%] animate-float rounded-md border border-line bg-card/90 px-4 py-3 shadow-xl backdrop-blur sm:-right-6">
            <p className="text-2xl font-bold text-orange">MERN</p>
            <p className="text-xs text-muted">+ Next.js</p>
          </div>
          <div className="absolute -left-2 top-[16%] animate-float rounded-md bg-orange px-4 py-3 shadow-xl [animation-delay:1.5s] sm:-left-6">
            <p className="text-xs font-medium text-white/90">Open to</p>
            <p className="text-sm font-semibold text-white">New Projects</p>
          </div>
        </motion.div>
      </div>

      {/* scroll indicator */}
      <a href="#about" aria-label="Scroll down" className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 sm:block">
        <span className="flex h-12 w-7 justify-center rounded-full border-2 border-orange pt-2">
          <span className="block h-2.5 w-1 animate-scroll-dot rounded-full bg-orange" />
        </span>
      </a>
    </section>
  );
}
