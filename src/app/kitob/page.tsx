import type { Metadata } from "next";
import Flipbook from "@/components/Flipbook";
import { LAWYERS } from "@/data/lawyers";

export const metadata: Metadata = {
  title: "Onlayn kitob",
  description: "Yuristlar profilini chiroyli, sahifalari varaqlanadigan onlayn kitobda o‘qing.",
};

export default function BookPage() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-ink pt-[calc(var(--nav-h)+2rem)] pb-16">
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(1000px 600px at 50% 0%, rgba(200,162,74,0.14), transparent 60%)" }}
      />
      <div className="relative mb-8 text-center">
        <p className="eyebrow !text-gold-soft mb-3">Onlayn kitob</p>
        <h1 className="display text-[clamp(1.8rem,4vw,2.8rem)] text-ivory">Yuristlar kitobi</h1>
        <p className="mx-auto mt-3 max-w-md px-6 text-sm text-ivory/65">
          Sahifalarni varaqlang — strelkalar yoki klaviaturadagi ← → tugmalari bilan.
        </p>
      </div>
      <div className="relative w-full px-4">
        <Flipbook lawyers={LAWYERS} />
      </div>
    </section>
  );
}
