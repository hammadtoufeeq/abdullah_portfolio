"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot, faPaperPlane, faPhone } from "@fortawesome/free-solid-svg-icons";
import { profile } from "@/data/resume";
import FadeIn from "./FadeIn";
import SectionTitle from "./SectionTitle";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  // No backend needed: opens the visitor's mail app with the message pre-filled
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  const info = [
    { icon: faEnvelope, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { icon: faPhone, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
    { icon: faLocationDot, label: "Location", value: profile.location },
  ];

  const input =
    "w-full rounded-sm border border-line bg-bg px-4 py-3.5 text-sm text-white placeholder:text-white/35 outline-none transition-colors focus:border-orange";

  return (
    <section id="contact" className="bg-bg-2 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle title="Contact Me" text="Have a project, a role or just a question? Send a message and I'll get back to you soon." />

        <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr]">
          <div className="space-y-4">
            {info.map((it, i) => (
              <FadeIn key={it.label} delay={i * 0.08}>
                <div className="group flex items-center gap-5 rounded-sm bg-card p-6 ring-1 ring-line transition-colors hover:ring-orange">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-orange text-white transition-transform duration-500 group-hover:rotate-[360deg]">
                    <FontAwesomeIcon icon={it.icon} className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-wider text-muted">{it.label}</p>
                    {it.href ? (
                      <a href={it.href} className="mt-1 block break-all font-medium hover:text-orange">
                        {it.value}
                      </a>
                    ) : (
                      <p className="mt-1 font-medium">{it.value}</p>
                    )}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.15}>
            <form onSubmit={submit} className="space-y-4 rounded-sm bg-card p-6 ring-1 ring-line sm:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <input required placeholder="Your Name" aria-label="Your name" className={input} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                <input required type="email" placeholder="Your Email" aria-label="Your email" className={input} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
              </div>
              <textarea required rows={6} placeholder="Your Message" aria-label="Your message" className={`${input} resize-none`} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="inline-flex items-center gap-2 rounded-md bg-orange px-8 py-3.5 text-sm font-medium text-white shadow-[0_12px_30px_-10px_rgba(255,91,15,0.9)] transition-colors hover:bg-orange-hover"
              >
                <FontAwesomeIcon icon={faPaperPlane} className="h-3.5 w-3.5" /> Send Message
              </motion.button>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
