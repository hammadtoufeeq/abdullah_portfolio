"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faCheck, faCopy, faEnvelope, faLocationDot, faPaperPlane, faPhone } from "@fortawesome/free-solid-svg-icons";
import { profile } from "@/data/resume";
import FadeIn from "./FadeIn";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  const details = [
    { icon: faEnvelope, label: profile.email, href: `mailto:${profile.email}` },
    { icon: faPhone, label: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
    { icon: faLocationDot, label: profile.location },
  ];

  return (
    <section id="contact" className="px-4 pb-16 sm:px-6">
      <FadeIn>
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-terra px-6 py-20 text-center text-sand sm:px-12 sm:py-28">
          {/* decorative rings */}
          <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 animate-spin-slow rounded-full border-2 border-dashed border-sand/20" />
          <div className="pointer-events-none absolute -bottom-32 -right-20 h-96 w-96 rounded-full border border-sand/15" />

          <p className="relative font-mono text-xs uppercase tracking-[0.3em] text-sand-dark">06 — What&apos;s next?</p>
          <h2 className="relative mt-6 font-serif text-5xl font-semibold leading-[1.05] sm:text-7xl">
            Let&apos;s build something
            <br />
            <em className="font-normal text-sand-dark">together.</em>
          </h2>
          <p className="relative mx-auto mt-6 max-w-xl text-lg text-sand/90">
            Open to full-time roles, internships and freelance projects. Whether you have a question or just want to say
            hi, my inbox is always open.
          </p>

          <div className="relative mt-10 flex flex-wrap items-center justify-center gap-3">
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-3 rounded-full bg-sand px-8 py-4 font-semibold text-terra shadow-xl"
            >
              <FontAwesomeIcon icon={faPaperPlane} /> Say hello
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              type="button"
              onClick={copyEmail}
              className="inline-flex min-w-[170px] items-center justify-center gap-3 rounded-full border-2 border-sand px-6 py-3.5 font-semibold"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={copied ? "done" : "copy"}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-2"
                >
                  <FontAwesomeIcon icon={copied ? faCheck : faCopy} />
                  {copied ? "Copied!" : "Copy email"}
                </motion.span>
              </AnimatePresence>
            </motion.button>
          </div>

          <ul className="relative mt-14 flex flex-col items-center justify-center gap-4 text-sm sm:flex-row sm:gap-10">
            {details.map((d) => (
              <li key={d.label}>
                {d.href ? (
                  <a href={d.href} className="inline-flex items-center gap-2 break-all transition-opacity hover:opacity-75">
                    <FontAwesomeIcon icon={d.icon} className="text-sand-dark" /> {d.label}
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2">
                    <FontAwesomeIcon icon={d.icon} className="text-sand-dark" /> {d.label}
                  </span>
                )}
              </li>
            ))}
          </ul>

          <div className="relative mt-8 flex justify-center gap-3">
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
                className="flex h-12 w-12 items-center justify-center rounded-full bg-sand/10 ring-1 ring-sand/30 transition-all duration-300 hover:-translate-y-1 hover:bg-sand hover:text-terra"
              >
                <FontAwesomeIcon icon={s.icon} className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
