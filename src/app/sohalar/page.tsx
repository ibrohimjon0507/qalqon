import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import AreaCard from "@/components/AreaCard";
import Reveal from "@/components/Reveal";
import { AREAS } from "@/data/areas";

export const metadata: Metadata = {
  title: "Amaliyot sohalari",
  description: "Jinoyat, fuqarolik, oila, biznes va boshqa huquq sohalari bo‘yicha mutaxassislar.",
};

export default function AreasPage() {
  return (
    <>
      <PageHero
        eyebrow="Yo‘nalishlar"
        title="Amaliyot sohalari"
        subtitle="Har bir sohada tajribali yuristlarni toping."
        crumbs={[{ label: "Amaliyot sohalari" }]}
      />
      <section className="container-x py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {AREAS.map((a, i) => (
            <Reveal key={a.slug} delay={(i % 3) * 0.08}>
              <AreaCard area={a} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
