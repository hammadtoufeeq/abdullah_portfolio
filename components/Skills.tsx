"use client";

import { motion } from "motion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { skills } from "@/data/resume";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="bg-terra py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading index="04" eyebrow="Skills" title="My" italic="toolkit" light />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, gi) => (
            <motion.div
              key={group.group}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (gi % 3) * 0.1 }}
              className="rounded-[2rem] bg-sand p-7"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-terra text-sand">
                  <FontAwesomeIcon icon={group.icon} />
                </span>
                <h3 className="font-serif text-2xl font-semibold">{group.group}</h3>
              </div>
              <ul className="mt-6 grid grid-cols-2 gap-2">
                {group.items.map((s, i) => (
                  <motion.li
                    key={s.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.05, type: "spring", stiffness: 260, damping: 20 }}
                    whileHover={{ y: -4 }}
                    className="group flex cursor-default items-center gap-2.5 rounded-xl bg-sand-light px-3 py-2.5 text-sm font-medium ring-1 ring-sand-dark transition-colors duration-300 hover:bg-ink hover:text-sand"
                  >
                    <FontAwesomeIcon
                      icon={s.icon}
                      className="h-4 w-4 text-terra transition-transform duration-500 group-hover:rotate-[360deg] group-hover:text-sand"
                    />
                    {s.name}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
