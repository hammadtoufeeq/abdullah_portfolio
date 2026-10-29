"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href="#top"
          aria-label="Back to top"
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ y: -4 }}
          className="fixed bottom-12 right-5 z-50 flex h-11 w-11 items-center justify-center rounded-lg border border-mint/40 bg-surface text-mint shadow-[0_0_24px_-6px_rgba(46,230,166,0.6)] transition-colors hover:bg-mint hover:text-bg-deep"
        >
          <FontAwesomeIcon icon={faArrowUp} />
        </motion.a>
      )}
    </AnimatePresence>
  );
}
