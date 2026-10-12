"use client";

import { useEffect, useRef, useState } from "react";
import { STATS, type Stat } from "@/data/site";

function fmtK(v: number) {
  return v >= 1000 ? (v / 1000).toFixed(v % 1000 === 0 ? 0 : 1) + "K" : String(v);
}

function Counter({ stat, run }: { stat: Stat; run: boolean }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!run) return;
    const dur = 1600;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(stat.value * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [run, stat.value]);

  const text = (stat.format === "k" ? fmtK(val) : val.toLocaleString("en-US")) + (stat.suffix ?? "");
  return (
    <div className="relative text-center">
      <div className="display text-[clamp(2.2rem,4vw,3.2rem)] leading-none text-gold">{text}</div>
      <div className="mt-2.5 text-[0.84rem] uppercase tracking-[0.14em] text-ivory/70">{stat.label}</div>
    </div>
  );
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [run, setRun] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setRun(true)),
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="bg-ink py-16 text-ivory">
      <div ref={ref} className="container-x grid grid-cols-2 gap-x-5 gap-y-9 md:grid-cols-4">
        {STATS.map((s) => (
          <Counter key={s.label} stat={s} run={run} />
        ))}
      </div>
    </section>
  );
}
