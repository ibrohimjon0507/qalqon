import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import LawyerCard from "@/components/LawyerCard";
import { AreaIcon, IconArrow } from "@/components/Icons";
import { AREAS, getArea } from "@/data/areas";
import { lawyersByArea } from "@/data/lawyers";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return AREAS.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const a = getArea(slug);
  if (!a) return { title: "Soha topilmadi" };
  return { title: a.name, description: a.short };
}

export default async function AreaDetail({ params }: Params) {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) notFound();

  const lawyers = lawyersByArea(area.slug);
  const others = AREAS.filter((a) => a.slug !== area.slug);

  return (
    <>
      <PageHero
        title={area.name}
        subtitle={area.short}
        crumbs={[{ label: "Amaliyot sohalari", href: "/sohalar" }, { label: area.name }]}
      />

      <section className="container-x py-16">
        <div className="grid gap-12 lg:grid-cols-[1fr_300px]">
          <div>
            <div className="mb-8 flex items-center gap-4">
              <div className="grid h-16 w-16 place-items-center rounded-2xl bg-ink text-gold">
                <AreaIcon name={area.icon} size={32} />
              </div>
              <h2 className="display text-2xl text-ink">{area.name} bo‘yicha yordam</h2>
            </div>
            <div className="space-y-4">
              {area.description.map((p, i) => (
                <p key={i} className="text-[1.08rem] leading-relaxed text-[#3a4452]">{p}</p>
              ))}
            </div>

            <h3 className="display mt-14 text-2xl text-ink">
              {area.name} yuristlari <span className="text-muted">({lawyers.length})</span>
            </h3>
            {lawyers.length > 0 ? (
              <div className="mt-6 grid gap-7 sm:grid-cols-2">
                {lawyers.map((l) => (
                  <LawyerCard key={l.slug} lawyer={l} />
                ))}
              </div>
            ) : (
              <p className="mt-6 text-muted">Hozircha bu sohada yurist qo‘shilmagan.</p>
            )}
          </div>

          {/* sidebar: other areas */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border border-line bg-white p-6">
              <h3 className="display text-lg text-ink">Boshqa sohalar</h3>
              <ul className="mt-4 space-y-1">
                {others.map((a) => (
                  <li key={a.slug}>
                    <Link
                      href={`/sohalar/${a.slug}`}
                      className="flex items-center justify-between rounded-lg px-3 py-2.5 text-sm text-ink/80 transition-colors hover:bg-cream hover:text-ink"
                    >
                      {a.name}
                      <IconArrow size={16} className="text-gold" />
                    </Link>
                  </li>
                ))}
              </ul>
              <Link href="/aloqa" className="btn btn-gold mt-6 w-full justify-center">
                Konsultatsiya olish
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
