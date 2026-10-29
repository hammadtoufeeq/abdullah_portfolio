"use client";

import { useEffect, useState } from "react";

export default function Typewriter({ words }: { words: string[] }) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[i % words.length];
    if (!deleting && text === word) {
      const t = setTimeout(() => setDeleting(true), 1800);
      return () => clearTimeout(t);
    }
    if (deleting && text === "") {
      setDeleting(false);
      setI((n) => n + 1);
      return;
    }
    const t = setTimeout(
      () => setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1)),
      deleting ? 40 : 85,
    );
    return () => clearTimeout(t);
  }, [text, deleting, i, words]);

  return (
    <span className="text-terra">
      {text}
      <span className="ml-0.5 inline-block w-[3px] animate-blink bg-terra align-middle" style={{ height: "0.9em" }} />
    </span>
  );
}
