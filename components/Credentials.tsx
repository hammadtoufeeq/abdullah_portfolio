"use client";

import { motion } from "motion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward } from "@fortawesome/free-solid-svg-icons";
import { certifications } from "@/data/resume";
import SectionHeading from "./SectionHeading";
import Window from "./Window";

export default function Credentials() {
  return (
    <section id="credentials" className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
      <SectionHeading index="05" file="credentials" title="npm test --certs" />

      <Window title="certifications.test.ts" bodyClassName="p-5 font-mono text-sm sm:p-6">
        <p className="text-muted">
          <span className="text-mint">PASS</span> certifications.test.ts
        </p>
        <ul className="mt-4 space-y-1">
          {certifications.map((c, i) => (
            <motion.li
              key={c.title}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="group flex flex-wrap items-center gap-x-3 gap-y-1 rounded-md px-3 py-2.5 transition-colors hover:bg-surface"
            >
              <span className="text-mint">✓</span>
              <FontAwesomeIcon icon={faAward} className="h-4 w-4 text-mint/70 transition-transform group-hover:scale-125" />
              <span className="text-fg">{c.title}</span>
              <span className="text-xs text-muted">({c.issuer})</span>
            </motion.li>
          ))}
        </ul>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: certifications.length * 0.12 + 0.2 }}
          className="mt-5 border-t border-line pt-4 text-xs text-muted"
        >
          Tests: <span className="text-mint">{certifications.length} passed</span>, {certifications.length} total
        </motion.p>
      </Window>
    </section>
  );
}
