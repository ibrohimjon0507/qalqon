import Link from "next/link";
import { AreaIcon, IconArrow } from "./Icons";
import { lawyersByArea } from "@/data/lawyers";
import type { Area } from "@/data/areas";

export default function AreaCard({ area }: { area: Area }) {
  const count = lawyersByArea(area.slug).length;
  return (
    <Link
      href={`/sohalar/${area.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:border-gold/40 hover:shadow-[var(--shadow-soft)]"
    >
      <div className="mb-5 grid h-14 w-14 place-items-center rounded-xl bg-ink text-gold transition-colors group-hover:bg-gold group-hover:text-ink">
        <AreaIcon name={area.icon} size={28} />
      </div>
      <h3 className="display text-[1.3rem] text-ink">{area.name}</h3>
      <p className="mt-2 flex-1 text-[0.95rem] text-muted">{area.short}</p>
      <div className="mt-5 flex items-center justify-between">
        <span className="text-[0.82rem] font-medium text-muted">{count} ta yurist</span>
        <IconArrow size={18} className="text-gold transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  );
}
