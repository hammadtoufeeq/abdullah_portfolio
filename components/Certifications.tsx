"use client";

import { motion } from "motion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAws, faPython } from "@fortawesome/free-brands-svg-icons";
import { faBrain, faGraduationCap, faPaperPlane, faRobot } from "@fortawesome/free-solid-svg-icons";
import { certifications, education } from "@/data/resume";
import SectionTitle from "./SectionTitle";

const icons = [faAws, faBrain, faPaperPlane, faRobot, faPython];

// Blog-card layout from the reference, used for education & certifications
export default function Certifications() {
  const cards = [
    { title: education.degree, issuer: education.school, meta: education.period, icon: faGraduationCap, label: "Education" },
    ...certifications.map((c, i) => ({ title: c.title, issuer: c.issuer, meta: "Certified", icon: icons[i % icons.length], label: "Certification" })),
  ];

  return (
    <section id="certifications" className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
      <SectionTitle title="Education & Certifications" text="Formal education plus industry certifications in cloud, APIs, AI and programming." />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((c, i) => (
          <motion.article
            key={c.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
            className="group overflow-hidden rounded-sm bg-card ring-1 ring-line transition-shadow duration-500 hover:shadow-[0_25px_50px_-25px_rgba(255,91,15,0.6)]"
          >
            <div className="relative flex h-36 items-center justify-center overflow-hidden bg-gradient-to-br from-[#262626] to-[#111]">
              <span className="absolute inset-0 origin-bottom scale-y-0 bg-orange transition-transform duration-500 ease-out group-hover:scale-y-100" />
              <FontAwesomeIcon icon={c.icon} className="relative h-12 w-12 text-orange transition-all duration-500 group-hover:scale-110 group-hover:text-white" />
              <span className="absolute left-4 top-4 rounded-sm bg-orange px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-white transition-colors duration-500 group-hover:bg-white group-hover:text-orange">
                {c.label}
              </span>
            </div>
            <div className="p-6">
              <p className="text-xs text-orange">{c.meta}</p>
              <h3 className="mt-2 font-semibold leading-snug">{c.title}</h3>
              <p className="mt-1 text-sm text-muted">{c.issuer}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
