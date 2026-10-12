import Link from "next/link";
import { AreaIcon } from "./Icons";
import { formatDateUz } from "@/lib/format";
import type { Article } from "@/data/articles";

export default function ArticleCard({ article }: { article: Article }) {
  return (
    <Link
      href={`/maqolalar/${article.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[var(--shadow-lg)]"
    >
      <div
        className="relative flex aspect-[16/10] items-center justify-center"
        style={{ background: `linear-gradient(140deg, ${article.c1}, ${article.c2})` }}
      >
        <AreaIcon name="scale" size={48} className="text-white/85" />
        <span className="absolute left-4 top-4 rounded-full bg-black/25 px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-wide text-white backdrop-blur">
          {article.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-3 text-[0.78rem] text-muted">
          <span>{formatDateUz(article.date)}</span>
          <span className="h-1 w-1 rounded-full bg-muted/50" />
          <span>{article.readMinutes} daq o‘qish</span>
        </div>
        <h3 className="display mt-2.5 text-[1.25rem] leading-snug text-ink">{article.title}</h3>
        <p className="mt-2 flex-1 text-[0.93rem] text-muted">{article.excerpt}</p>
        <span className="mt-4 text-sm font-semibold text-gold group-hover:text-gold-deep">
          Batafsil o‘qish →
        </span>
      </div>
    </Link>
  );
}
