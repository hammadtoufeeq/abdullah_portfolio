"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faDownload, faXmark } from "@fortawesome/free-solid-svg-icons";
import { profile } from "@/data/resume";

const links = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // Highlight the link of whichever section is in the middle of the screen
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    for (const l of links) {
      const el = document.getElementById(l.id);
      if (el) io.observe(el);
    }
    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed inset-x-0 top-3 z-50 px-4"
      >
        <nav
          className={`mx-auto flex h-14 max-w-5xl items-center justify-between rounded-full pl-5 pr-2 transition-all duration-500 ${
            scrolled ? "bg-sand-light/85 shadow-[0_8px_30px_-12px_rgba(58,26,16,0.35)] ring-1 ring-sand-dark backdrop-blur-md" : ""
          }`}
        >
          <a href="#top" className="font-serif text-xl font-bold italic text-terra">
            Abdullah<span className="text-ink">.</span>
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <li key={l.id} className="relative">
                <a
                  href={`#${l.id}`}
                  className={`relative z-10 block rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                    active === l.id ? "text-sand" : "text-ink hover:text-terra"
                  }`}
                >
                  {l.label}
                </a>
                {active === l.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-terra"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </li>
            ))}
          </ul>

          <a
            href={profile.resume}
            download
            className="hidden items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-sand transition-all duration-300 hover:bg-terra md:inline-flex"
          >
            <FontAwesomeIcon icon={faDownload} className="h-3.5 w-3.5" /> Resume
          </a>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-terra text-sand md:hidden"
            aria-label="Open menu"
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "circle(0% at 90% 5%)" }}
            animate={{ clipPath: "circle(150% at 90% 5%)" }}
            exit={{ clipPath: "circle(0% at 90% 5%)" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[80] flex flex-col bg-terra px-6 py-6 text-sand md:hidden"
          >
            <div className="flex items-center justify-between">
              <span className="font-serif text-xl font-bold italic">Abdullah.</span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-sand text-terra"
                aria-label="Close menu"
              >
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </div>
            <ul className="mt-16 space-y-2">
              {links.map((l, i) => (
                <motion.li
                  key={l.id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 + i * 0.07 }}
                >
                  <a href={`#${l.id}`} onClick={() => setOpen(false)} className="flex items-baseline gap-4 py-2 font-serif text-4xl">
                    <span className="font-mono text-sm text-sand-dark">0{i + 1}</span>
                    {l.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <a
              href={profile.resume}
              download
              className="mt-auto flex items-center justify-center gap-2 rounded-full bg-sand py-4 font-semibold text-terra"
            >
              <FontAwesomeIcon icon={faDownload} /> Download Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
