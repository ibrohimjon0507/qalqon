"use client";

import { useMemo, useState } from "react";
import LawyerCard from "./LawyerCard";
import { IconSearch } from "./Icons";
import type { Lawyer } from "@/data/lawyers";
import type { Area } from "@/data/areas";

type Props = {
  lawyers: Lawyer[];
  areas: Area[];
  initialArea?: string;
};

export default function LawyerCatalog({ lawyers, areas, initialArea = "" }: Props) {
  const [q, setQ] = useState("");
  const [area, setArea] = useState(initialArea);
  const [city, setCity] = useState("");
  const [sort, setSort] = useState<"experience" | "rating" | "name">("experience");

  const cities = useMemo(
    () => Array.from(new Set(lawyers.map((l) => l.city))).sort(),
    [lawyers]
  );

  const result = useMemo(() => {
    const needle = q.trim().toLowerCase();
    let list = lawyers.filter((l) => {
      const matchQ =
        !needle ||
        l.name.toLowerCase().includes(needle) ||
        l.title.toLowerCase().includes(needle);
      const matchArea = !area || l.areas.includes(area);
      const matchCity = !city || l.city === city;
      return matchQ && matchArea && matchCity;
    });
    list = [...list].sort((a, b) => {
      if (sort === "name") return a.name.localeCompare(b.name);
      if (sort === "rating") return b.rating - a.rating;
      return b.experience - a.experience;
    });
    return list;
  }, [lawyers, q, area, city, sort]);

  return (
    <div>
      {/* controls */}
      <div className="rounded-2xl border border-line bg-white p-4 shadow-[var(--shadow-soft)] sm:p-5">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
          <div className="relative flex-1">
            <IconSearch className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Ism yoki yo‘nalish bo‘yicha qidiring..."
              className="field-input !pl-11"
            />
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:flex">
            <select value={city} onChange={(e) => setCity(e.target.value)} className="field-input lg:w-40">
              <option value="">Barcha shaharlar</option>
              {cities.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as typeof sort)}
              className="field-input lg:w-44"
            >
              <option value="experience">Tajriba bo‘yicha</option>
              <option value="rating">Reyting bo‘yicha</option>
              <option value="name">Alifbo bo‘yicha</option>
            </select>
          </div>
        </div>

        {/* area chips */}
        <div className="mt-4 flex flex-wrap gap-2">
          <button
            onClick={() => setArea("")}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
              area === "" ? "bg-ink text-ivory" : "bg-cream text-ink/70 hover:bg-line"
            }`}
          >
            Barchasi
          </button>
          {areas.map((a) => (
            <button
              key={a.slug}
              onClick={() => setArea(a.slug === area ? "" : a.slug)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                area === a.slug ? "bg-ink text-ivory" : "bg-cream text-ink/70 hover:bg-line"
              }`}
            >
              {a.name}
            </button>
          ))}
        </div>
      </div>

      {/* count */}
      <p className="mt-6 text-sm text-muted">
        <b className="text-ink">{result.length}</b> ta yurist topildi
      </p>

      {/* grid */}
      {result.length > 0 ? (
        <div className="mt-4 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {result.map((l) => (
            <LawyerCard key={l.slug} lawyer={l} />
          ))}
        </div>
      ) : (
        <div className="mt-10 rounded-2xl border border-dashed border-line py-16 text-center text-muted">
          Hech narsa topilmadi. Filtrlarni o‘zgartirib ko‘ring.
        </div>
      )}
    </div>
  );
}
