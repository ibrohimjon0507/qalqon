"use client";

import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import Portrait from "./Portrait";
import Logo from "./Logo";
import { getArea } from "@/data/areas";
import type { Lawyer } from "@/data/lawyers";

type Page =
  | { kind: "cover" }
  | { kind: "intro" }
  | { kind: "portrait"; lawyer: Lawyer }
  | { kind: "story"; lawyer: Lawyer }
  | { kind: "end" }
  | { kind: "blank" };

function buildPages(lawyers: Lawyer[]): Page[] {
  const pages: Page[] = [{ kind: "cover" }, { kind: "intro" }];
  lawyers.forEach((l) => {
    pages.push({ kind: "portrait", lawyer: l });
    pages.push({ kind: "story", lawyer: l });
  });
  pages.push({ kind: "end" });
  if (pages.length % 2 !== 0) pages.push({ kind: "blank" });
  return pages;
}

function PageContent({ page, num }: { page: Page; num: number }) {
  switch (page.kind) {
    case "cover":
      return (
        <div className="pg pg-cover">
          <Logo size={64} className="text-gold" />
          <span className="text-[0.74rem] uppercase tracking-[0.2em] text-gold-soft">
            Yuristlar kitobi
          </span>
          <span className="my-1.5 h-0.5 w-14 bg-gold" />
          <h2 className="display text-[2rem] tracking-[0.18em]">QALQON</h2>
          <span className="text-[0.74rem] uppercase tracking-[0.2em] text-gold-soft">
            Profillar &amp; hikoyalar
          </span>
        </div>
      );
    case "intro":
      return (
        <div className="pg justify-center">
          <span className="mb-2.5 text-2xl text-gold">❧</span>
          <h3 className="display mb-3.5 text-2xl text-ink">Muqaddima</h3>
          <p className="text-[0.98rem] text-muted">
            Ushbu kitob — malakali yuristlarimiz bilan tanishtiradi. Har bir sahifada bitta
            mutaxassisning yo‘nalishi, tajribasi va hikoyasi jamlangan.
          </p>
          <p className="mt-3 text-[0.98rem] text-muted">
            Sahifalarni varaqlab, o‘zingizga mos huquqiy himoyachini toping.
          </p>
          <span className="pg-num">{num}</span>
        </div>
      );
    case "portrait": {
      const l = page.lawyer;
      return (
        <div className="relative h-full w-full">
          <Portrait name={l.name} c1={l.c1} c2={l.c2} photo={l.photo || undefined} />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[rgba(8,13,24,0.92)] to-transparent px-7 pb-7 pt-16 text-white">
            <div className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-gold-soft">
              {l.title}
            </div>
            <div className="display mt-1.5 text-[1.5rem]">{l.name}</div>
            <div className="mt-1 text-[0.8rem] text-white/75">
              {l.city} · {l.experience} yil tajriba
            </div>
          </div>
        </div>
      );
    }
    case "story": {
      const l = page.lawyer;
      return (
        <div className="pg">
          <h4 className="display text-[1.35rem] text-ink">{l.name}</h4>
          <div className="mt-1 text-[0.74rem] uppercase tracking-[0.12em] text-gold">
            {l.areas.map((a) => getArea(a)?.name).filter(Boolean).join(" · ")}
          </div>
          <div className="thin-scroll mt-4 flex-1 overflow-auto pr-1">
            {l.bio.map((p, i) => (
              <p key={i} className="mb-3 text-[0.9rem] leading-relaxed text-[#3a4452]">
                {p}
              </p>
            ))}
            <p className="mt-2 text-[0.82rem] text-muted">
              ★ {l.rating.toFixed(1)} · {l.casesWon}+ yakunlangan ish
            </p>
          </div>
          <span className="pg-num">{num}</span>
        </div>
      );
    }
    case "end":
      return (
        <div className="pg pg-end">
          <Logo size={54} className="text-gold" />
          <h3 className="display tracking-[0.14em]">TAMOM</h3>
          <p className="max-w-[240px] text-[0.86rem] text-ivory/70">
            O‘zingizga mos yuristni topdingizmi? Katalogdan batafsil ko‘ring.
          </p>
        </div>
      );
    default:
      return <div className="pg" />;
  }
}

export default function Flipbook({ lawyers }: { lawyers: Lawyer[] }) {
  const pages = useMemo(() => buildPages(lawyers), [lawyers]);
  const sheetCount = pages.length / 2;
  const [current, setCurrent] = useState(0);
  const actx = useRef<AudioContext | null>(null);

  const flipSound = () => {
    try {
      type AC = typeof AudioContext;
      const Ctor: AC | undefined =
        window.AudioContext || (window as unknown as { webkitAudioContext?: AC }).webkitAudioContext;
      if (!Ctor) return;
      actx.current = actx.current || new Ctor();
      const ctx = actx.current;
      const dur = 0.18;
      const buf = ctx.createBuffer(1, ctx.sampleRate * dur, ctx.sampleRate);
      const data = buf.getChannelData(0);
      for (let i = 0; i < data.length; i++) {
        const t = i / data.length;
        data[i] = (Math.random() * 2 - 1) * Math.pow(1 - t, 3) * 0.5;
      }
      const src = ctx.createBufferSource();
      src.buffer = buf;
      const g = ctx.createGain();
      g.gain.value = 0.06;
      const f = ctx.createBiquadFilter();
      f.type = "highpass";
      f.frequency.value = 1200;
      src.connect(f);
      f.connect(g);
      g.connect(ctx.destination);
      src.start();
    } catch {
      /* audio optional */
    }
  };

  const next = () => {
    setCurrent((c) => {
      if (c >= sheetCount) return c;
      flipSound();
      return c + 1;
    });
  };
  const prev = () => {
    setCurrent((c) => {
      if (c <= 0) return c;
      flipSound();
      return c - 1;
    });
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sheetCount]);

  const sheets = Array.from({ length: sheetCount });

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex w-full items-center justify-center gap-3 md:gap-5">
        <button
          onClick={prev}
          disabled={current === 0}
          aria-label="Oldingi sahifa"
          className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-white/25 bg-white/5 text-2xl text-white transition-colors hover:border-gold hover:bg-gold hover:text-ink disabled:cursor-default disabled:opacity-25 md:h-14 md:w-14"
        >
          ‹
        </button>

        <div className="flipbook">
          <div className="flip-static">
            <div className="pg pg-end">
              <Logo size={46} className="text-gold" />
              <p className="text-[0.8rem] text-ivory/60">QALQON</p>
            </div>
          </div>
          {sheets.map((_, i) => {
            const flipped = i < current;
            return (
              <div
                key={i}
                className={`flip-sheet ${flipped ? "flipped" : ""}`}
                style={{ zIndex: flipped ? i : 1000 - i }}
              >
                <div className="flip-face flip-face-front">
                  <PageContent page={pages[i * 2]} num={i * 2 + 1} />
                </div>
                <div className="flip-face flip-face-back">
                  <PageContent page={pages[i * 2 + 1]} num={i * 2 + 2} />
                </div>
              </div>
            );
          })}
        </div>

        <button
          onClick={next}
          disabled={current >= sheetCount}
          aria-label="Keyingi sahifa"
          className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-white/25 bg-white/5 text-2xl text-white transition-colors hover:border-gold hover:bg-gold hover:text-ink disabled:cursor-default disabled:opacity-25 md:h-14 md:w-14"
        >
          ›
        </button>
      </div>

      <div className="text-[0.86rem] tracking-[0.1em] text-white/75">
        {Math.min(current * 2 + 1, pages.length)} / {pages.length}
      </div>
    </div>
  );
}
