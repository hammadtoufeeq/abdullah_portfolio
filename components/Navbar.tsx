"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import Logo from "./Logo";

const links = [
  { id: "about", label: "About Me" },
  { id: "services", label: "Services" },
  { id: "portfolio", label: "Portfolio" },
  { id: "experience", label: "Experience" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact Us" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("about");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
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
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-bg/90 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.9)] backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex h-[72px] max-w-6xl items-stretch justify-between px-4 sm:px-6">
          <div className="flex items-center">
            <Logo />
          </div>

          <ul className="hidden items-stretch lg:flex">
            {links.map((l) => (
              <li key={l.id} className="relative flex">
                {active === l.id && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 bg-orange"
                    transition={{ type: "spring", stiffness: 380, damping: 34 }}
                  />
                )}
                <a
                  href={`#${l.id}`}
                  className={`relative flex items-center px-4 text-[13px] font-medium transition-colors ${
                    active === l.id ? "text-white" : "text-white/80 hover:text-orange"
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden rounded-md bg-orange px-5 py-2.5 text-sm font-medium text-white shadow-[0_8px_24px_-8px_rgba(255,91,15,0.9)] transition-all hover:-translate-y-0.5 hover:bg-orange-hover sm:inline-block"
            >
              Hire Me!
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="flex h-10 w-10 items-center justify-center rounded-md border border-line text-white lg:hidden"
              aria-label="Open menu"
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-[80] bg-black/70 lg:hidden"
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 34 }}
              className="fixed inset-y-0 right-0 z-[90] flex w-[80%] max-w-sm flex-col border-l border-line bg-bg-2 p-6 lg:hidden"
            >
              <div className="flex items-center justify-between">
                <Logo />
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-md bg-orange text-white"
                  aria-label="Close menu"
                >
                  <FontAwesomeIcon icon={faXmark} />
                </button>
              </div>
              <ul className="mt-10 space-y-1">
                {links.map((l, i) => (
                  <motion.li key={l.id} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 + i * 0.05 }}>
                    <a
                      href={`#${l.id}`}
                      onClick={() => setOpen(false)}
                      className={`block rounded-md px-4 py-3 font-medium ${active === l.id ? "bg-orange text-white" : "text-white/85 hover:bg-card"}`}
                    >
                      {l.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
              <a href="#contact" onClick={() => setOpen(false)} className="mt-auto rounded-md bg-orange py-3.5 text-center font-semibold text-white">
                Hire Me!
              </a>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
