"use client";

import { motion } from "motion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight, faEnvelope, faLocationDot, faTerminal } from "@fortawesome/free-solid-svg-icons";
import { profile } from "@/data/resume";
import Terminal from "./Terminal";
import Typewriter from "./Typewriter";

const ease = [0.22, 1, 0.36, 1] as const;
const up = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease },
});

export default function Hero() {
  const socials = [
    { href: profile.github, icon: faGithub, label: "GitHub" },
    { href: profile.linkedin, icon: faLinkedinIn, label: "LinkedIn" },
    { href: `mailto:${profile.email}`, icon: faEnvelope, label: "Email" },
  ];

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="dot-grid pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute left-1/2 top-24 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-mint/[0.07] blur-[120px]" />

      <div className="relative mx-auto grid min-h-[100svh] max-w-6xl items-center gap-14 px-4 pb-20 pt-28 sm:px-6 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <motion.p {...up(0.1)} className="inline-flex items-center gap-2 rounded-md border border-line bg-surface/60 px-3 py-1.5 font-mono text-xs text-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-mint" />
            </span>
            status: <span className="text-mint">available_for_hire</span>
          </motion.p>

          <motion.p {...up(0.2)} className="mt-8 font-mono text-mint">
            {"// hello world, I'm"}
          </motion.p>
          <motion.h1 {...up(0.3)} className="mt-3 text-5xl font-extrabold tracking-tight sm:text-7xl">
            {profile.name}
            <span className="text-mint">.</span>
          </motion.h1>

          <motion.p {...up(0.45)} className="mt-5 min-h-[2rem] font-mono text-lg text-muted sm:text-2xl">
            <span className="text-mint">&gt;</span> <Typewriter words={["Software Developer", "Full Stack Engineer", "MERN / Next.js Dev", "AI Chatbot Builder"]} />
          </motion.p>

          <motion.p {...up(0.55)} className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            {profile.tagline}
          </motion.p>

          <motion.div {...up(0.65)} className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-md bg-mint px-6 py-3.5 font-mono text-sm font-semibold text-bg-deep shadow-[0_0_30px_-8px_#2ee6a6] transition-all duration-200 hover:bg-mint-hover hover:shadow-[0_0_40px_-6px_#2ee6a6]"
            >
              <FontAwesomeIcon icon={faTerminal} className="h-3.5 w-3.5" />
              ./view-projects
              <FontAwesomeIcon icon={faArrowRight} className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-line bg-surface/50 px-6 py-3.5 font-mono text-sm text-fg transition-all duration-200 hover:border-mint hover:text-mint"
            >
              ./contact-me
            </a>
          </motion.div>

          <motion.div {...up(0.75)} className="mt-10 flex flex-wrap items-center gap-5">
            <div className="flex gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-md border border-line text-muted transition-all duration-200 hover:-translate-y-1 hover:border-mint hover:text-mint"
                >
                  <FontAwesomeIcon icon={s.icon} className="h-4 w-4" />
                </a>
              ))}
            </div>
            <span className="flex items-center gap-2 font-mono text-xs text-muted">
              <FontAwesomeIcon icon={faLocationDot} className="text-mint" /> {profile.location}
            </span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40, rotateX: 12 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1, delay: 0.4, ease }}
          style={{ perspective: 1000 }}
          className="relative"
        >
          <div className="absolute -inset-px rounded-xl bg-gradient-to-br from-mint/40 via-transparent to-mint/10 blur-sm" />
          <Terminal />
        </motion.div>
      </div>
    </section>
  );
}
