"use client";

import { useEffect, useState } from "react";

export default function ScrollTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Yuqoriga"
      className="fixed bottom-6 right-6 z-40 grid h-12 w-12 place-items-center rounded-full bg-gold text-lg text-ink shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1"
      style={{
        opacity: show ? 1 : 0,
        visibility: show ? "visible" : "hidden",
        transform: show ? "translateY(0)" : "translateY(16px)",
      }}
    >
      ↑
    </button>
  );
}
