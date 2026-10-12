import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import Portrait from "@/components/Portrait";
import ArticleCard from "@/components/ArticleCard";
import { AreaIcon, IconArrow } from "@/components/Icons";
import { formatDateUz } from "@/lib/format";
import { ARTICLES, getArticle } from "@/data/articles";
import { getLawyer } from "@/data/lawyers";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) return { title: "Maqola topilmadi" };
  return { title: a.title, description: a.excerpt };
}

export default async function ArticlePage({ params }: Params) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const author = getLawyer(article.authorSlug);
  const more = ARTICLES.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={article.category}
        title={article.title}
        crumbs={[{ label: "Maqolalar", href: "/maqolalar" }, { label: article.category }]}
      />

      <article className="container-x py-16">
        <div className="mx-auto max-w-3xl">
          {/* meta */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 border-b border-line pb-6">
            {author && (
              <Link href={`/yuristlar/${author.slug}`} className="flex items-center gap-3">
                <span className="h-11 w-11 overflow-hidden rounded-full">
                  <Portrait name={author.name} c1={author.c1} c2={author.c2} photo={author.photo || undefined} resW={120} resH={120} />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-ink">{author.name}</span>
                  <span className="block text-xs text-muted">{author.title}</span>
                </span>
              </Link>
            )}
            <span className="ml-auto text-sm text-muted">
              {formatDateUz(article.date)} · {article.readMinutes} daq o‘qish
            </span>
          </div>

          {/* cover */}
          <div
            className="mt-8 flex aspect-[16/7] items-center justify-center rounded-2xl"
            style={{ background: `linear-gradient(140deg, ${article.c1}, ${article.c2})` }}
          >
            <AreaIcon name="scale" size={64} className="text-white/85" />
          </div>

          {/* body */}
          <div className="prose-uz mt-10">
            {article.content.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {/* author box */}
          {author && (
            <div className="mt-12 flex flex-col items-center gap-5 rounded-2xl bg-cream p-7 sm:flex-row">
              <span className="h-20 w-20 shrink-0 overflow-hidden rounded-full">
                <Portrait name={author.name} c1={author.c1} c2={author.c2} photo={author.photo || undefined} resW={200} resH={200} />
              </span>
              <div className="text-center sm:text-left">
                <p className="text-xs uppercase tracking-[0.14em] text-gold">Muallif</p>
                <h3 className="display text-xl text-ink">{author.name}</h3>
                <p className="mt-1 text-sm text-muted">{author.short}</p>
                <Link href={`/yuristlar/${author.slug}`} className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-gold hover:text-gold-deep">
                  Profilni ko‘rish <IconArrow size={16} />
                </Link>
              </div>
            </div>
          )}
        </div>
      </article>

      <section className="bg-cream py-20">
        <div className="container-x">
          <h2 className="display mb-10 text-2xl text-ink">Boshqa maqolalar</h2>
          <div className="grid gap-7 md:grid-cols-3">
            {more.map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
