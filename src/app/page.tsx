import Link from "next/link";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import MosaicBg from "@/components/MosaicBg";
import Portrait from "@/components/Portrait";
import LawyerCard from "@/components/LawyerCard";
import AreaCard from "@/components/AreaCard";
import ArticleCard from "@/components/ArticleCard";
import Testimonials from "@/components/Testimonials";
import Book3D from "@/components/Book3D";
import { IconArrow, IconBook } from "@/components/Icons";
import { featuredLawyers, getLawyer } from "@/data/lawyers";
import { AREAS } from "@/data/areas";
import { ARTICLES } from "@/data/articles";

export default function Home() {
  const featured = featuredLawyers();
  const faceLawyer = getLawyer("sardor-qodirov") ?? featured[0];
  const latest = ARTICLES.slice(0, 3);

  return (
    <>
      <Hero />
      <Stats />

      {/* ABOUT */}
      <section className="container-x grid items-center gap-16 py-24 lg:grid-cols-2">
        <Reveal className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-line shadow-[var(--shadow-lg)]">
            <div className="absolute inset-0">
              <MosaicBg tile={24} />
            </div>
            <div className="absolute inset-0 grid place-items-center">
              <div className="h-[82%] w-[58%] overflow-hidden rounded-xl border-[3px] border-white/20 shadow-[var(--shadow-soft)]">
                <Portrait name={faceLawyer.name} c1={faceLawyer.c1} c2={faceLawyer.c2} photo={faceLawyer.photo || undefined} />
              </div>
            </div>
          </div>
          <span className="absolute -bottom-4 right-2 rounded-xl bg-gold px-5 py-3.5 text-[0.82rem] font-semibold uppercase tracking-[0.14em] text-ink shadow-[var(--shadow-soft)]">
            Ishonchli himoya
          </span>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="eyebrow mb-4">Biz haqimizda</p>
          <h2 className="display text-[clamp(2rem,4vw,3rem)] text-ink">
            Har bir masala uchun
            <br />
            ishonchli yurist
          </h2>
          <p className="mt-4 text-[1.05rem] text-muted">
            QALQON — O‘zbekistondagi malakali advokatlarni yagona platformada jamlaydigan katalog.
            Biz sizga sohangiz bo‘yicha eng mos mutaxassisni topishda yordam beramiz.
          </p>
          <p className="mt-4 text-[1.05rem] text-muted">
            Har bir yurist profilida tajriba, yo‘nalish, yutuqlar va bevosita aloqa ma’lumotlari
            keltirilgan. Shaffof, tezkor va ishonchli.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/yuristlar" className="btn btn-dark">
              Yuristlarni ko‘rish <IconArrow size={18} />
            </Link>
            <Link href="/biz-haqimizda" className="btn btn-outline">
              Batafsil
            </Link>
          </div>
        </Reveal>
      </section>

      {/* FEATURED LAWYERS */}
      <section className="bg-cream py-24">
        <div className="container-x">
          <div className="mb-14 flex flex-col items-end justify-between gap-6 sm:flex-row">
            <SectionHeading
              align="left"
              eyebrow="Tanlangan mutaxassislar"
              title="Yetakchi yuristlar"
              subtitle="Yuqori reyting va boy tajribaga ega advokatlarimiz."
            />
            <Link href="/yuristlar" className="btn btn-outline shrink-0">
              Barcha yuristlar <IconArrow size={18} />
            </Link>
          </div>
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((l, i) => (
              <Reveal key={l.slug} delay={(i % 4) * 0.08}>
                <LawyerCard lawyer={l} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PRACTICE AREAS */}
      <section className="container-x py-24">
        <SectionHeading
          eyebrow="Yo‘nalishlar"
          title="Amaliyot sohalari"
          subtitle="Har bir sohada tajribali mutaxassislarni toping."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {AREAS.map((a, i) => (
            <Reveal key={a.slug} delay={(i % 4) * 0.07}>
              <AreaCard area={a} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* BOOK CTA */}
      <section className="grid items-center gap-14 bg-ink py-24 lg:grid-cols-2" style={{ backgroundImage: "radial-gradient(1200px 500px at 80% -10%, rgba(200,162,74,0.18), transparent 60%)" }}>
        <div className="container-x lg:justify-self-end lg:pr-10">
          <Reveal className="max-w-md">
            <p className="eyebrow !text-gold-soft mb-4">Onlayn kitob</p>
            <h2 className="display text-[clamp(2rem,4vw,3rem)] text-ivory">
              Yuristlarimizni
              <br />
              varaqlab tanishing
            </h2>
            <p className="mt-4 text-[1.08rem] text-ivory/75">
              Barcha mutaxassislar profili — chiroyli, sahifalari varaqlanadigan onlayn kitobda.
              Haqiqiy kitob kabi, lekin bir marta bosish bilan.
            </p>
            <Link href="/kitob" className="btn btn-gold mt-8">
              <IconBook size={18} /> Kitobni ochish
            </Link>
          </Reveal>
        </div>
        <Reveal delay={0.1} className="flex justify-center lg:justify-start">
          <Book3D />
        </Reveal>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24">
        <div className="mb-12">
          <SectionHeading eyebrow="E’tiroflar" title="Mijozlar fikri" />
        </div>
        <Testimonials />
      </section>

      {/* LATEST ARTICLES */}
      <section className="bg-cream py-24">
        <div className="container-x">
          <div className="mb-14 flex flex-col items-end justify-between gap-6 sm:flex-row">
            <SectionHeading
              align="left"
              eyebrow="Blog"
              title="So‘nggi maqolalar"
              subtitle="Foydali huquqiy maslahatlar va yangiliklar."
            />
            <Link href="/maqolalar" className="btn btn-outline shrink-0">
              Barcha maqolalar <IconArrow size={18} />
            </Link>
          </div>
          <div className="grid gap-7 md:grid-cols-3">
            {latest.map((a, i) => (
              <Reveal key={a.slug} delay={i * 0.08}>
                <ArticleCard article={a} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="container-x py-24">
        <div className="relative overflow-hidden rounded-3xl bg-ink px-8 py-16 text-center text-ivory sm:px-16">
          <div className="absolute inset-0 opacity-30">
            <MosaicBg tile={28} />
          </div>
          <div className="relative">
            <h2 className="display mx-auto max-w-2xl text-[clamp(1.8rem,4vw,2.8rem)]">
              Huquqiy yordam kerakmi? Mutaxassis bilan bog‘laning
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-ivory/75">
              Bepul dastlabki maslahat uchun murojaat qoldiring — sizga mos yuristni tanlashda yordam beramiz.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/aloqa" className="btn btn-gold">Konsultatsiya olish</Link>
              <Link href="/yuristlar" className="btn btn-ghost">Yuristlarni ko‘rish</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
