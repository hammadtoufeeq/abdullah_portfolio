"use client";

import { motion } from "motion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward, faBriefcase, faCalendar, faFolderOpen } from "@fortawesome/free-solid-svg-icons";
import { certifications, experience, profile, projects } from "@/data/resume";
import Counter from "./Counter";

export default function Stats() {
  const stats = [
    { icon: faBriefcase, value: experience.length, suffix: "", label: "Roles Held" },
    { icon: faFolderOpen, value: projects.length, suffix: "+", label: "Projects", highlight: true },
    { icon: faAward, value: certifications.length, suffix: "", label: "Certifications" },
    { icon: faCalendar, value: profile.yearsExperience, suffix: "+", label: "Years Experience" },
  ];

  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#1c1c1c_0%,#0a0a0a_70%)]" />
      <div className="relative mx-auto grid max-w-5xl grid-cols-2 gap-4 px-4 sm:px-6 md:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1, type: "spring", stiffness: 200, damping: 18 }}
            whileHover={{ y: -6 }}
            className={`flex flex-col items-center rounded-sm px-4 py-8 text-center ${
              s.highlight ? "bg-orange shadow-[0_20px_40px_-15px_rgba(255,91,15,0.8)]" : "border border-dashed border-white/25 bg-card/60"
            }`}
          >
            <FontAwesomeIcon icon={s.icon} className={`mb-3 h-5 w-5 ${s.highlight ? "text-white" : "text-orange"}`} />
            <p className="text-4xl font-bold">
              <Counter to={s.value} suffix={s.suffix} />
            </p>
            <p className={`mt-1 text-sm ${s.highlight ? "text-white" : "text-muted"}`}>{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
