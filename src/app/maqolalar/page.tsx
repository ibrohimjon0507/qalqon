import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ArticleCard from "@/components/ArticleCard";
import Reveal from "@/components/Reveal";
import { ARTICLES } from "@/data/articles";

export const metadata: Metadata = {
  title: "Maqolalar",
  description: "Huquqiy maslahatlar, tahlillar va yangiliklar.",
};

export default function ArticlesPage() {
  const sorted = [...ARTICLES].sort((a, b) => +new Date(b.date) - +new Date(a.date));
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Huquqiy maqolalar"
        subtitle="Foydali maslahatlar, qonunchilik yangiliklari va amaliy tahlillar."
        crumbs={[{ label: "Maqolalar" }]}
      />
      <section className="container-x py-20">
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {sorted.map((a, i) => (
            <Reveal key={a.slug} delay={(i % 3) * 0.08}>
              <ArticleCard article={a} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
