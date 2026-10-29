"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faCheck, faCopy, faEnvelope, faLocationDot, faPaperPlane, faPhone } from "@fortawesome/free-solid-svg-icons";
import { profile } from "@/data/resume";
import FadeIn from "./FadeIn";
import SectionHeading from "./SectionHeading";
import Window from "./Window";

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

  const rows = [
    { key: "email", icon: faEnvelope, value: profile.email, href: `mailto:${profile.email}` },
    { key: "phone", icon: faPhone, value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
    { key: "location", icon: faLocationDot, value: profile.location },
    { key: "github", icon: faGithub, value: "github", href: profile.github },
    { key: "linkedin", icon: faLinkedinIn, value: "linkedin", href: profile.linkedin },
  ];

  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-4 pb-28 pt-8 sm:px-6">
      <SectionHeading index="06" file="contact" title="./contact.sh" />

      <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <FadeIn>
          <h3 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            Got a project or a role?
            <br />
            <span className="text-mint">Let&apos;s ship it.</span>
          </h3>
          <p className="mt-5 max-w-md text-lg text-muted">
            Open to full-time roles, internships and freelance work. My inbox is always open — I&apos;ll get back to you
            soon.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-md bg-mint px-6 py-3.5 font-mono text-sm font-semibold text-bg-deep shadow-[0_0_30px_-8px_#2ee6a6] transition-colors hover:bg-mint-hover"
            >
              <FontAwesomeIcon icon={faPaperPlane} className="h-3.5 w-3.5" /> send_message()
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="button"
              onClick={copyEmail}
              className="inline-flex min-w-[150px] items-center justify-center rounded-md border border-line bg-surface px-5 py-3.5 font-mono text-sm transition-colors hover:border-mint hover:text-mint"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={copied ? "y" : "n"}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.15 }}
                  className="flex items-center gap-2"
                >
                  <FontAwesomeIcon icon={copied ? faCheck : faCopy} className="h-3.5 w-3.5" />
                  {copied ? "copied!" : "copy email"}
                </motion.span>
              </AnimatePresence>
            </motion.button>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <Window title="bash — contact.sh" bodyClassName="p-5 font-mono text-[13px] sm:p-6">
            <p>
              <span className="text-mint">➜</span> <span className="text-mint-hover">~</span> ./contact.sh --all
            </p>
            <ul className="mt-4 space-y-1">
              {rows.map((r) => (
                <li key={r.key}>
                  {r.href ? (
                    <a
                      href={r.href}
                      target={r.href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      className="group flex items-center gap-3 rounded-md px-2 py-2 transition-colors hover:bg-surface"
                    >
                      <FontAwesomeIcon icon={r.icon} className="h-4 w-5 text-mint" />
                      <span className="w-20 shrink-0 text-muted">{r.key}:</span>
                      <span className="min-w-0 break-all text-fg group-hover:text-mint">{r.value}</span>
                    </a>
                  ) : (
                    <span className="flex items-center gap-3 px-2 py-2">
                      <FontAwesomeIcon icon={r.icon} className="h-4 w-5 text-mint" />
                      <span className="w-20 shrink-0 text-muted">{r.key}:</span>
                      <span className="text-fg">{r.value}</span>
                    </span>
                  )}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-muted">
              <span className="text-mint">➜</span> <span className="text-mint-hover">~</span>{" "}
              <span className="inline-block h-4 w-2 translate-y-0.5 animate-blink bg-mint" />
            </p>
          </Window>
        </FadeIn>
      </div>
    </section>
  );
}
