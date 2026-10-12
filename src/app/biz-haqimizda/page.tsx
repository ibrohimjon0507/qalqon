import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Stats from "@/components/Stats";
import MosaicBg from "@/components/MosaicBg";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { AreaIcon, IconArrow } from "@/components/Icons";
import { SITE } from "@/data/site";

const VALUES = [
  { icon: "shield", title: "Ishonch", text: "Har bir yurist tajribasi va malakasi bo‘yicha tekshiriladi." },
  { icon: "scale", title: "Shaffoflik", text: "Profil, yo‘nalish va aloqa — barchasi ochiq va tushunarli." },
  { icon: "users", title: "Mijozga yo‘naltirilgan", text: "Sizga mos mutaxassisni topish bizning asosiy maqsadimiz." },
  { icon: "bulb", title: "Bilim", text: "Foydali huquqiy maqolalar orqali huquqiy savodxonlikni oshiramiz." },
];

export const metadata: Metadata = {
  title: "Biz haqimizda",
  description: SITE.description,
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Biz haqimizda"
        title="Huquq va odamlar o‘rtasidagi ko‘prik"
        subtitle={SITE.description}
        crumbs={[{ label: "Biz haqimizda" }]}
      />

      {/* mission */}
      <section className="container-x grid items-center gap-16 py-24 lg:grid-cols-2">
        <Reveal className="relative order-2 lg:order-1">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-line shadow-[var(--shadow-lg)]">
            <div className="absolute inset-0"><MosaicBg tile={26} /></div>
            <div className="absolute inset-0 grid place-items-center">
              <div className="rounded-full bg-ink/80 px-8 py-6 text-center text-ivory backdrop-blur">
                <div className="display text-3xl text-gold">QALQON</div>
                <div className="mt-1 text-xs uppercase tracking-[0.2em] text-gold-soft">{SITE.tagline}</div>
              </div>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1} className="order-1 lg:order-2">
          <p className="eyebrow mb-4">Bizning missiyamiz</p>
          <h2 className="display text-[clamp(1.8rem,3.6vw,2.8rem)] text-ink">
            Sifatli huquqiy yordamni har kimga yetkazish
          </h2>
          <p className="mt-4 text-[1.05rem] text-muted">
            Ko‘pchilik huquqiy muammoga duch kelganda, kimga murojaat qilishni bilmaydi. QALQON aynan
            shu muammoni hal qiladi — malakali yuristlarni bir joyda jamlab, ularni topishni oson qiladi.
          </p>
          <p className="mt-4 text-[1.05rem] text-muted">
            Platformamizda har bir mutaxassisning tajribasi, yo‘nalishi va yutuqlari shaffof ko‘rsatilgan.
            Siz esa o‘zingizga ishongan yuristni bemalol tanlaysiz.
          </p>
          <Link href="/yuristlar" className="btn btn-dark mt-8">
            Yuristlarni ko‘rish <IconArrow size={18} />
          </Link>
        </Reveal>
      </section>

      <Stats />

      {/* values */}
      <section className="container-x py-24">
        <SectionHeading eyebrow="Qadriyatlar" title="Nimaga tayanamiz" />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((v, i) => (
            <Reveal key={v.title} delay={(i % 4) * 0.08}>
              <div className="h-full rounded-2xl border border-line bg-white p-7">
                <div className="mb-5 grid h-14 w-14 place-items-center rounded-xl bg-ink text-gold">
                  <AreaIcon name={v.icon} size={28} />
                </div>
                <h3 className="display text-xl text-ink">{v.title}</h3>
                <p className="mt-2 text-[0.96rem] text-muted">{v.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* cta */}
      <section className="container-x pb-24">
        <div className="rounded-3xl bg-gradient-to-br from-ink-3 to-ink px-8 py-16 text-center text-ivory sm:px-16">
          <h2 className="display mx-auto max-w-2xl text-[clamp(1.6rem,3.4vw,2.4rem)]">
            Jamoamizga qo‘shilmoqchimisiz?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-ivory/75">
            Siz yuristmisiz? Platformamizda profil oching va yangi mijozlarga yaqinroq bo‘ling.
          </p>
          <Link href="/aloqa" className="btn btn-gold mt-8">Biz bilan bog‘laning</Link>
        </div>
      </section>
    </>
  );
}
