import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import Portrait from "@/components/Portrait";
import LawyerCard from "@/components/LawyerCard";
import ArticleCard from "@/components/ArticleCard";
import SectionHeading from "@/components/SectionHeading";
import { IconPhone, IconMail, IconStar, IconArrow } from "@/components/Icons";
import { LAWYERS, getLawyer } from "@/data/lawyers";
import { getArea } from "@/data/areas";
import { ARTICLES } from "@/data/articles";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return LAWYERS.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const l = getLawyer(slug);
  if (!l) return { title: "Yurist topilmadi" };
  return { title: l.name, description: l.short };
}

export default async function LawyerProfile({ params }: Params) {
  const { slug } = await params;
  const l = getLawyer(slug);
  if (!l) notFound();

  const related = LAWYERS.filter(
    (x) => x.slug !== l.slug && x.areas.some((a) => l.areas.includes(a))
  ).slice(0, 3);
  const authored = ARTICLES.filter((a) => a.authorSlug === l.slug);

  return (
    <>
      <PageHero title={l.name} crumbs={[{ label: "Yuristlar", href: "/yuristlar" }, { label: l.name }]} />

      <section className="container-x -mt-10 pb-20">
        <div className="grid gap-10 lg:grid-cols-[360px_1fr]">
          {/* left: card */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="overflow-hidden rounded-2xl bg-white shadow-[var(--shadow-lg)]">
              <div className="aspect-[4/5]">
                <Portrait name={l.name} c1={l.c1} c2={l.c2} photo={l.photo || undefined} />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-1.5 text-gold">
                  <IconStar size={16} />
                  <span className="font-semibold">{l.rating.toFixed(1)}</span>
                  <span className="text-sm text-muted">· {l.casesWon}+ ish</span>
                </div>
                <h1 className="display mt-2 text-2xl text-ink">{l.name}</h1>
                <p className="mt-1 text-sm text-gold">{l.title}</p>

                <dl className="mt-5 space-y-2.5 text-sm">
                  <div className="flex justify-between border-b border-line pb-2">
                    <dt className="text-muted">Shahar</dt>
                    <dd className="font-medium">{l.city}</dd>
                  </div>
                  <div className="flex justify-between border-b border-line pb-2">
                    <dt className="text-muted">Tajriba</dt>
                    <dd className="font-medium">{l.experience} yil</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted">Tillar</dt>
                    <dd className="font-medium">{l.languages.join(", ")}</dd>
                  </div>
                </dl>

                <div className="mt-6 flex flex-col gap-3">
                  <a href={`tel:${l.phone.replace(/\s/g, "")}`} className="btn btn-dark justify-center">
                    <IconPhone size={18} /> Qo‘ng‘iroq qilish
                  </a>
                  <a href={`mailto:${l.email}`} className="btn btn-outline justify-center">
                    <IconMail size={18} /> Email yozish
                  </a>
                </div>
              </div>
            </div>
          </aside>

          {/* right: content */}
          <div className="lg:pt-14">
            <div className="mb-8 rounded-2xl border-l-4 border-gold bg-white p-6 shadow-[var(--shadow-soft)]">
              <p className="display text-[1.3rem] italic text-ink">{l.short}</p>
            </div>

            <h2 className="display text-2xl text-ink">Biografiya</h2>
            <div className="mt-4 space-y-4">
              {l.bio.map((p, i) => (
                <p key={i} className="text-[1.05rem] leading-relaxed text-[#3a4452]">{p}</p>
              ))}
            </div>

            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              <div>
                <h3 className="display text-xl text-ink">Ta’lim</h3>
                <ul className="mt-4 space-y-3">
                  {l.education.map((e) => (
                    <li key={e} className="flex gap-3 text-[0.98rem] text-[#3a4452]">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                      {e}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="display text-xl text-ink">Yutuqlar</h3>
                <ul className="mt-4 space-y-3">
                  {l.achievements.map((e) => (
                    <li key={e} className="flex gap-3 text-[0.98rem] text-[#3a4452]">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                      {e}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="display text-xl text-ink">Amaliyot sohalari</h3>
              <div className="mt-4 flex flex-wrap gap-3">
                {l.areas.map((a) => {
                  const area = getArea(a);
                  return (
                    <Link
                      key={a}
                      href={`/sohalar/${a}`}
                      className="rounded-full bg-cream px-4 py-2 text-sm font-medium text-ink/75 transition-colors hover:bg-gold hover:text-ink"
                    >
                      {area?.name ?? a}
                    </Link>
                  );
                })}
              </div>
            </div>

            {authored.length > 0 && (
              <div className="mt-12">
                <h3 className="display text-xl text-ink">Muallif maqolalari</h3>
                <div className="mt-5 grid gap-6 sm:grid-cols-2">
                  {authored.map((a) => (
                    <ArticleCard key={a.slug} article={a} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-cream py-20">
          <div className="container-x">
            <div className="mb-10 flex items-end justify-between gap-6">
              <SectionHeading align="left" eyebrow="Shunga o‘xshash" title="O‘xshash yuristlar" />
              <Link href="/yuristlar" className="btn btn-outline shrink-0">
                Barchasi <IconArrow size={18} />
              </Link>
            </div>
            <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => (
                <LawyerCard key={r.slug} lawyer={r} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
