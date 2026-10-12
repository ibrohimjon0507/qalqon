import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { IconPhone, IconMail, IconPin, IconClock, SocialIcon } from "@/components/Icons";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Aloqa",
  description: "Biz bilan bog‘laning — bepul dastlabki maslahat uchun murojaat qoldiring.",
};

export default function ContactPage() {
  const info = [
    { icon: <IconPin className="text-gold" />, label: "Manzil", value: SITE.contact.address },
    { icon: <IconPhone className="text-gold" />, label: "Telefon", value: SITE.contact.phone, href: `tel:${SITE.contact.phone.replace(/\s/g, "")}` },
    { icon: <IconMail className="text-gold" />, label: "Email", value: SITE.contact.email, href: `mailto:${SITE.contact.email}` },
    { icon: <IconClock className="text-gold" />, label: "Ish vaqti", value: SITE.contact.hours },
  ];

  return (
    <>
      <PageHero
        eyebrow="Aloqa"
        title="Biz bilan bog‘laning"
        subtitle="Savolingiz bormi yoki yurist tanlashda yordam kerakmi? Murojaat qoldiring."
        crumbs={[{ label: "Aloqa" }]}
      />

      <section className="container-x grid gap-12 py-20 lg:grid-cols-[1fr_1.2fr]">
        {/* info */}
        <div>
          <h2 className="display text-2xl text-ink">Aloqa ma’lumotlari</h2>
          <ul className="mt-6 space-y-5">
            {info.map((it) => (
              <li key={it.label} className="flex items-start gap-4">
                <span className="mt-1 grid h-11 w-11 shrink-0 place-items-center rounded-full border border-gold/50">
                  {it.icon}
                </span>
                <span>
                  <span className="block text-sm text-muted">{it.label}</span>
                  {it.href ? (
                    <a href={it.href} className="font-medium text-ink hover:text-gold">{it.value}</a>
                  ) : (
                    <span className="font-medium text-ink">{it.value}</span>
                  )}
                </span>
              </li>
            ))}
          </ul>

          <h3 className="mt-10 text-sm font-semibold uppercase tracking-[0.14em] text-gold">Ijtimoiy tarmoqlar</h3>
          <div className="mt-4 flex gap-3">
            {SITE.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="grid h-11 w-11 place-items-center rounded-full border border-ink/15 text-ink transition-all hover:-translate-y-1 hover:bg-ink hover:text-ivory"
              >
                <SocialIcon name={s.icon} />
              </a>
            ))}
          </div>

          <div className="mt-10 aspect-[16/9] overflow-hidden rounded-2xl border border-line bg-cream">
            <div className="grid h-full place-items-center text-muted">
              <span className="flex items-center gap-2 text-sm"><IconPin className="text-gold" /> Xarita (demo)</span>
            </div>
          </div>
        </div>

        {/* form */}
        <div className="rounded-2xl border border-line bg-white p-7 shadow-[var(--shadow-soft)] sm:p-9">
          <h2 className="display text-2xl text-ink">Murojaat qoldiring</h2>
          <p className="mt-2 text-muted">Tez orada siz bilan bog‘lanamiz.</p>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
