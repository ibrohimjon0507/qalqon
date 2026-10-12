import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import LawyerCatalog from "@/components/LawyerCatalog";
import { LAWYERS } from "@/data/lawyers";
import { AREAS } from "@/data/areas";

export const metadata: Metadata = {
  title: "Yuristlar",
  description: "Malakali yuristlar katalogi — soha, shahar va tajriba bo‘yicha qidiring.",
};

export default function LawyersPage() {
  return (
    <>
      <PageHero
        eyebrow="Katalog"
        title="Yuristlar"
        subtitle="Sohangiz bo‘yicha ishonchli advokatni toping — qidiruv va filtrlardan foydalaning."
        crumbs={[{ label: "Yuristlar" }]}
      />
      <section className="container-x py-16">
        <LawyerCatalog lawyers={LAWYERS} areas={AREAS} />
      </section>
    </>
  );
}
