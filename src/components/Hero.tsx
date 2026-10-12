"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import MosaicBg from "./MosaicBg";
import { IconArrow, IconBook } from "./Icons";

const SLIDES = [
  {
    eyebrow: "Huquqiy himoya va ishonch",
    title: ["Ishonchli yuristni", "bir joydan toping"],
    lead: "QALQON — malakali advokatlar katalogi. Sohangiz bo‘yicha eng mos mutaxassisni tanlang va bevosita bog‘laning.",
    primary: { label: "Yuristlarni ko‘rish", href: "/yuristlar" },
  },
  {
    eyebrow: "8 ta amaliyot sohasi",
    title: ["Har bir masalaga", "o‘z mutaxassisi"],
    lead: "Jinoyat, fuqarolik, oila, biznes va boshqa sohalar bo‘yicha tajribali yuristlar.",
    primary: { label: "Sohalarni ko‘rish", href: "/sohalar" },
  },
  {
    eyebrow: "Bilim — himoyaning kaliti",
    title: ["Huquqingizni", "biling"],
    lead: "Foydali huquqiy maqolalar va yuristlarimiz hikoyalarini onlayn kitob shaklida o‘qing.",
    primary: { label: "Onlayn kitob", href: "/kitob" },
  },
];

export default function Hero() {
  const [idx, setIdx] = useState(0);
  const n = SLIDES.length;

  const go = useCallback((i: number) => setIdx(((i % n) + n) % n), [n]);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % n), 6500);
    return () => clearInterval(t);
  }, [n]);

  const s = SLIDES[idx];

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-[var(--nav-h)] text-white">
      <div className="absolute inset-0 z-0">
        <MosaicBg tile={36} />
      </div>
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(100deg, rgba(8,14,26,0.94) 0%, rgba(8,14,26,0.72) 42%, rgba(8,14,26,0.3) 100%), linear-gradient(180deg, rgba(8,14,26,0.5) 0%, transparent 30%, rgba(8,14,26,0.75) 100%)",
        }}
      />

      <div className="container-x relative z-[2]">
        <div key={idx} className="max-w-3xl" style={{ animation: "fadeUp 0.7s var(--ease-out)" }}>
          <p className="eyebrow !text-gold-soft mb-5">{s.eyebrow}</p>
          <h1 className="display text-[clamp(2.6rem,7.5vw,5.8rem)] font-extrabold leading-[0.98] [text-shadow:0_10px_40px_rgba(0,0,0,0.4)]">
            {s.title[0]}
            <br />
            {s.title[1]}
          </h1>
          <p className="mt-6 max-w-xl text-[clamp(1.05rem,1.6vw,1.3rem)] text-white/85">{s.lead}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href={s.primary.href} className="btn btn-gold">
              {s.primary.label} <IconArrow size={18} />
            </Link>
            <Link href="/kitob" className="btn btn-ghost">
              <IconBook size={18} /> Onlayn kitob
            </Link>
          </div>
        </div>
      </div>

      {/* arrows */}
      <button
        onClick={() => go(idx - 1)}
        aria-label="Oldingi"
        className="absolute left-4 top-1/2 z-[3] grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/30 bg-white/5 text-2xl backdrop-blur transition-colors hover:border-gold hover:bg-gold hover:text-ink md:left-7 md:h-14 md:w-14"
      >
        ‹
      </button>
      <button
        onClick={() => go(idx + 1)}
        aria-label="Keyingi"
        className="absolute right-4 top-1/2 z-[3] grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/30 bg-white/5 text-2xl backdrop-blur transition-colors hover:border-gold hover:bg-gold hover:text-ink md:right-7 md:h-14 md:w-14"
      >
        ›
      </button>

      {/* dots */}
      <div className="absolute bottom-11 left-1/2 z-[3] flex -translate-x-1/2 gap-3">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            aria-label={`Slayd ${i + 1}`}
            className="h-[11px] rounded-full transition-all"
            style={{
              width: i === idx ? 30 : 11,
              background: i === idx ? "var(--color-gold)" : "rgba(255,255,255,0.4)",
            }}
          />
        ))}
      </div>
    </section>
  );
}
