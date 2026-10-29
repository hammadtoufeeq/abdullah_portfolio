"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { profile } from "@/data/resume";
import Window from "./Window";

type Line = { kind: "cmd" | "out"; node: React.ReactNode };

const k = (s: string) => <span className="text-mint">&quot;{s}&quot;</span>;
const v = (s: string) => <span className="text-fg">&quot;{s}&quot;</span>;

// Lines are revealed one by one to simulate a live terminal session
const lines: Line[] = [
  { kind: "cmd", node: "whoami" },
  { kind: "out", node: <span className="text-fg">abdullah-azhar</span> },
  { kind: "cmd", node: "cat profile.json" },
  { kind: "out", node: <span className="text-muted">{"{"}</span> },
  { kind: "out", node: <>&nbsp;&nbsp;{k("role")}: {v(profile.role)},</> },
  { kind: "out", node: <>&nbsp;&nbsp;{k("stack")}: [{v("MongoDB")}, {v("Express")}, {v("React")}, {v("Node")}, {v("Next.js")}],</> },
  { kind: "out", node: <>&nbsp;&nbsp;{k("focus")}: [{v("AI chatbots")}, {v("CRM systems")}, {v("REST APIs")}],</> },
  { kind: "out", node: <>&nbsp;&nbsp;{k("location")}: {v(profile.location)},</> },
  { kind: "out", node: <>&nbsp;&nbsp;{k("status")}: <span className="text-mint-hover">&quot;open_to_work&quot;</span></> },
  { kind: "out", node: <span className="text-muted">{"}"}</span> },
  { kind: "cmd", node: "npm run build:career" },
  { kind: "out", node: <span className="text-mint">✓ Compiled successfully — ready to ship 🚀</span> },
];

export default function Terminal() {
  const [shown, setShown] = useState(0);

  useEffect(() => {
    if (shown >= lines.length) return;
    const delay = lines[shown].kind === "cmd" ? 650 : 160;
    const t = setTimeout(() => setShown((n) => n + 1), shown === 0 ? 900 : delay);
    return () => clearTimeout(t);
  }, [shown]);

  return (
    <Window title="abdullah@portfolio: ~" bodyClassName="min-h-[340px] p-5 font-mono text-[12.5px] leading-relaxed sm:text-[13px]">
      {lines.slice(0, shown).map((l, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -6 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2 }}
          className={`break-words ${l.kind === "cmd" && i > 0 ? "mt-3" : ""}`}
        >
          {l.kind === "cmd" ? (
            <>
              <span className="text-mint">➜</span> <span className="text-mint-hover">~</span>{" "}
              <span className="text-fg">{l.node}</span>
            </>
          ) : (
            l.node
          )}
        </motion.div>
      ))}
      <div className={shown > 0 ? "mt-3" : ""}>
        <span className="text-mint">➜</span> <span className="text-mint-hover">~</span>{" "}
        <span className="inline-block h-4 w-2 translate-y-0.5 animate-blink bg-mint" />
      </div>
    </Window>
  );
}
