"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faDownload, faXmark } from "@fortawesome/free-solid-svg-icons";
import { profile } from "@/data/resume";

const links = [
  { id: "about", label: "about" },
  { id: "experience", label: "experience" },
  { id: "projects", label: "projects" },
  { id: "skills", label: "skills" },
  { id: "contact", label: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // Highlight whichever section sits in the middle of the viewport
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
        initial={{ y: -64, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
          scrolled ? "border-line bg-bg/80 backdrop-blur-md" : "border-transparent"
        }`}
      >
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 font-mono sm:px-6">
          <a href="#top" className="group flex items-center gap-1 text-sm font-semibold">
            <span className="text-mint">~/</span>
            <span>abdullah</span>
            <span className="h-4 w-2 animate-blink bg-mint" />
          </a>

          <ul className="hidden items-center md:flex">
            {links.map((l, i) => (
              <li key={l.id} className="relative">
                <a
                  href={`#${l.id}`}
                  className={`relative block px-4 py-2 text-sm transition-colors duration-200 ${
                    active === l.id ? "text-mint" : "text-muted hover:text-fg"
                  }`}
                >
                  <span className="text-mint/60">0{i + 1}.</span>
                  {l.label}
                </a>
                {active === l.id && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute inset-x-4 -bottom-[1px] h-0.5 bg-mint shadow-[0_0_10px_#2ee6a6]"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
              </li>
            ))}
          </ul>

          <a
            href={profile.resume}
            download
            className="hidden items-center gap-2 rounded-md border border-mint px-4 py-2 text-sm text-mint transition-all duration-200 hover:bg-mint hover:text-bg-deep hover:shadow-[0_0_20px_-4px_#2ee6a6] md:inline-flex"
          >
            <FontAwesomeIcon icon={faDownload} className="h-3.5 w-3.5" /> resume.pdf
          </a>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-md border border-line text-mint md:hidden"
            aria-label="Open menu"
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] bg-bg-deep/95 backdrop-blur-md md:hidden"
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex h-full flex-col px-5 py-4 font-mono"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm">
                  <span className="text-mint">~/</span>abdullah
                </span>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-md border border-line text-mint"
                  aria-label="Close menu"
                >
                  <FontAwesomeIcon icon={faXmark} />
                </button>
              </div>
              <p className="mt-12 text-sm text-muted">$ ls ./sections</p>
              <ul className="mt-4 space-y-1">
                {links.map((l, i) => (
                  <motion.li
                    key={l.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.06 }}
                  >
                    <a href={`#${l.id}`} onClick={() => setOpen(false)} className="flex items-baseline gap-3 py-3 text-2xl">
                      <span className="text-sm text-mint">0{i + 1}.</span>
                      {l.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
              <a
                href={profile.resume}
                download
                className="mt-auto flex items-center justify-center gap-2 rounded-md bg-mint py-4 font-semibold text-bg-deep"
              >
                <FontAwesomeIcon icon={faDownload} /> resume.pdf
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
