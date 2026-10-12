"use client";

import { useEffect, useState } from "react";
import { TESTIMONIALS } from "@/data/site";

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const n = TESTIMONIALS.length;
  const go = (i: number) => setIdx(((i % n) + n) % n);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % n), 6000);
    return () => clearInterval(t);
  }, [n]);

  return (
    <div className="container-x">
      <div className="relative flex items-center gap-3">
        <button
          onClick={() => go(idx - 1)}
          aria-label="Oldingi"
          className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-line text-xl transition-colors hover:border-ink hover:bg-ink hover:text-ivory"
        >
          ‹
        </button>

        <div className="flex-1 overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${idx * 100}%)` }}
          >
            {TESTIMONIALS.map((t, i) => (
              <figure key={i} className="w-full shrink-0 px-4 text-center md:px-16">
                <blockquote className="display text-[clamp(1.25rem,2.6vw,1.9rem)] italic leading-relaxed text-ink">
                  <span className="text-[2.4em] leading-[0] text-gold align-[-0.35em]">“</span>
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6">
                  <div className="font-bold tracking-wide">{t.author}</div>
                  <div className="mt-1 text-[0.84rem] uppercase tracking-[0.14em] text-gold">{t.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        <button
          onClick={() => go(idx + 1)}
          aria-label="Keyingi"
          className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-line text-xl transition-colors hover:border-ink hover:bg-ink hover:text-ivory"
        >
          ›
        </button>
      </div>

      <div className="mt-6 flex justify-center gap-2.5">
        {TESTIMONIALS.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            aria-label={`E'tirof ${i + 1}`}
            className="h-2.5 rounded-full transition-all"
            style={{
              width: i === idx ? 28 : 10,
              background: i === idx ? "var(--color-gold)" : "var(--color-line)",
            }}
          />
        ))}
      </div>
    </div>
  );
}
