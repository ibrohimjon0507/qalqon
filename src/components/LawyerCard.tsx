import Link from "next/link";
import Portrait from "./Portrait";
import { IconStar, IconPin } from "./Icons";
import { getArea } from "@/data/areas";
import type { Lawyer } from "@/data/lawyers";

export default function LawyerCard({ lawyer }: { lawyer: Lawyer }) {
  return (
    <Link
      href={`/yuristlar/${lawyer.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[var(--shadow-lg)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-105">
          <Portrait name={lawyer.name} c1={lawyer.c1} c2={lawyer.c2} photo={lawyer.photo || undefined} />
        </div>
        <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-ink/80 px-2.5 py-1 text-[0.78rem] font-semibold text-gold backdrop-blur">
          <IconStar size={13} /> {lawyer.rating.toFixed(1)}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="display text-[1.3rem] text-ink">{lawyer.name}</h3>
        <p className="mt-1 text-sm text-gold">{lawyer.title}</p>

        <div className="mt-3 flex items-center gap-4 text-[0.82rem] text-muted">
          <span className="inline-flex items-center gap-1">
            <IconPin size={14} /> {lawyer.city}
          </span>
          <span>{lawyer.experience} yil tajriba</span>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {lawyer.areas.slice(0, 2).map((a) => {
            const area = getArea(a);
            return (
              <span
                key={a}
                className="rounded-full bg-cream px-2.5 py-1 text-[0.72rem] font-medium text-ink/70"
              >
                {area?.name ?? a}
              </span>
            );
          })}
        </div>

        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-gold transition-colors group-hover:text-gold-deep">
          Profilni ko‘rish →
        </span>
      </div>
    </Link>
  );
}
