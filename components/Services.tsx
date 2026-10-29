"use client";

import { motion } from "motion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { services } from "@/data/resume";
import SectionTitle from "./SectionTitle";

export default function Services() {
  return (
    <section id="services" className="bg-bg-2 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle
          title="My Services"
          text="From pixel-perfect interfaces to secure APIs and AI integrations — here's how I can help bring your product to life."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
              className={`group relative overflow-hidden rounded-sm p-7 ring-1 transition-colors duration-500 ${
                i === 0 ? "bg-orange ring-orange" : "bg-card ring-line hover:ring-orange"
              }`}
            >
              {/* orange fill sweeps in on hover */}
              {i !== 0 && (
                <span className="absolute inset-0 origin-left scale-x-0 bg-orange transition-transform duration-500 ease-out group-hover:scale-x-100" />
              )}
              <div className="relative flex items-start justify-between">
                <span
                  className={`flex h-14 w-14 items-center justify-center rounded-full transition-colors duration-500 ${
                    i === 0 ? "bg-white text-orange" : "bg-bg text-orange group-hover:bg-white"
                  }`}
                >
                  <FontAwesomeIcon icon={s.icon} className="h-6 w-6" />
                </span>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className={`h-4 w-4 transition-all duration-500 group-hover:translate-x-1 ${i === 0 ? "text-white" : "text-orange group-hover:text-white"}`}
                />
              </div>
              <h3 className="relative mt-6 text-lg font-semibold">{s.title}</h3>
              <p className={`relative mt-2 text-sm leading-relaxed transition-colors duration-500 ${i === 0 ? "text-white/90" : "text-muted group-hover:text-white/90"}`}>
                {s.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
