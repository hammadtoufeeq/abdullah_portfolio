"use client";

import { motion } from "motion/react";
import { profile, skillLevels } from "@/data/resume";
import Counter from "./Counter";
import FadeIn from "./FadeIn";

// Grayscale "developer at work" scene drawn with HTML/CSS (no stock photo needed)
function CodeScene() {
  const lines = [70, 45, 85, 30, 60, 90, 40, 75, 55, 35, 80, 50, 65, 25];
  return (
    <div className="relative aspect-[4/3.3] overflow-hidden rounded-sm bg-gradient-to-br from-[#e9e9e9] to-[#bdbdbd]">
      {/* monitor */}
      <div className="absolute left-[8%] top-[8%] w-[62%] rounded-md bg-[#1b1b1b] p-2 shadow-2xl">
        <div className="flex gap-1 pb-2">
          <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
          <span className="h-1.5 w-1.5 rounded-full bg-orange" />
        </div>
        <div className="space-y-1.5 rounded bg-black p-3">
          {lines.map((w, i) => (
            <motion.span
              key={i}
              initial={{ width: 0 }}
              whileInView={{ width: `${w}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.07 }}
              className={`block h-1.5 rounded-full ${i % 5 === 2 ? "bg-orange/80" : "bg-white/35"}`}
              style={{ marginLeft: `${(i % 4) * 6}%` }}
            />
          ))}
        </div>
      </div>
      <div className="absolute left-[34%] top-[64%] h-[8%] w-[8%] bg-[#2b2b2b]" />
      {/* second monitor */}
      <div className="absolute right-[-6%] top-[4%] w-[34%] rounded-md bg-[#2a2a2a] p-2 shadow-xl">
        <div className="space-y-1.5 rounded bg-[#f3f3f3] p-2">
          {[80, 60, 70, 40, 65, 50, 75].map((w, i) => (
            <span key={i} className="block h-1 rounded-full bg-black/30" style={{ width: `${w}%` }} />
          ))}
        </div>
      </div>
      {/* keyboard + mouse */}
      <div className="absolute bottom-[12%] left-[16%] h-[11%] w-[46%] -rotate-3 rounded-md bg-[#f7f7f7] shadow-lg [background-image:repeating-linear-gradient(90deg,#d9d9d9_0_10px,transparent_10px_14px),repeating-linear-gradient(0deg,#d9d9d9_0_6px,transparent_6px_10px)] [background-size:100%_100%]" />
      <div className="absolute bottom-[14%] right-[18%] h-[10%] w-[6%] rounded-full bg-[#111] shadow-lg" />
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
      <div className="grid items-center gap-16 lg:grid-cols-2">
        <FadeIn className="relative pb-10 pl-6 sm:pl-10">
          <CodeScene />
          {/* experience badge */}
          <motion.div
            initial={{ opacity: 0, y: 30, rotate: -4 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="absolute bottom-0 left-0 w-40 rounded-sm bg-card p-5 shadow-2xl ring-1 ring-line"
          >
            <div className="mb-3 flex gap-1.5">
              {[0, 1, 2, 3, 4].map((i) => (
                <span key={i} className="h-3 w-1.5 bg-white" />
              ))}
            </div>
            <p className="text-4xl font-bold">
              <Counter to={profile.yearsExperience} suffix="+" />
            </p>
            <p className="mt-1 text-sm font-semibold leading-tight">
              Years of
              <br />
              Experience
            </p>
          </motion.div>
        </FadeIn>

        <div>
          <FadeIn>
            <p className="text-sm font-medium uppercase tracking-widest text-orange">About Me</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
              Read About My
              <br />
              Developer Journey!
            </h2>
            <p className="mt-6 leading-relaxed text-muted">{profile.summary}</p>
          </FadeIn>

          <div className="mt-8 space-y-6">
            {skillLevels.map((s, i) => (
              <FadeIn key={s.name} delay={i * 0.08} y={16}>
                <div className="flex justify-between text-xs font-semibold uppercase tracking-wide">
                  <span>{s.name}</span>
                  <span className="text-orange">{s.level}%</span>
                </div>
                <div className="mt-2.5 h-[3px] w-full bg-line">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.4, delay: 0.2 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="relative h-full bg-gradient-to-r from-orange to-orange-hover"
                  >
                    <span className="absolute -right-1 -top-[3px] h-[9px] w-[9px] rounded-full bg-orange shadow-[0_0_10px_#ff5b0f]" />
                  </motion.div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.3} className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-md bg-orange px-8 py-3.5 text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-orange-hover"
            >
              Hire Me!
            </a>
            <a
              href={profile.resume}
              download
              className="rounded-md border border-white px-8 py-3.5 text-sm font-medium transition-all hover:-translate-y-0.5 hover:border-orange hover:bg-orange"
            >
              Download CV
            </a>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
