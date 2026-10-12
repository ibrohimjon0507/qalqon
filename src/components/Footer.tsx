import Link from "next/link";
import Logo from "./Logo";
import { NAV, SITE } from "@/data/site";
import { AREAS } from "@/data/areas";
import { IconMail, IconPhone, IconPin, SocialIcon } from "./Icons";
import NewsletterForm from "./NewsletterForm";
import Year from "./Year";

export default function Footer() {
  return (
    <footer className="bg-ink text-ivory">
      {/* newsletter */}
      <div className="border-b border-white/10 py-16 text-center">
        <div className="container-x">
          <h2 className="display text-[clamp(1.6rem,3.4vw,2.4rem)]">Yangiliklardan xabardor bo‘ling</h2>
          <p className="mx-auto mt-3 max-w-xl text-ivory/70">
            Yangi yuristlar, huquqiy maqolalar va foydali maslahatlar — pochtangizga.
          </p>
          <NewsletterForm />
        </div>
      </div>

      {/* columns */}
      <div className="container-x grid gap-10 py-16 md:grid-cols-4">
        <div className="md:col-span-1">
          <Link href="/" className="flex items-center gap-3 text-white">
            <Logo size={38} className="text-gold" />
            <span className="display text-xl tracking-[0.16em]">{SITE.name}</span>
          </Link>
          <p className="mt-4 text-sm text-ivory/65">{SITE.description}</p>
          <div className="mt-5 flex gap-3">
            {SITE.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="grid h-10 w-10 place-items-center rounded-full border border-gold/50 text-gold transition-all hover:-translate-y-1 hover:bg-gold hover:text-ink"
              >
                <SocialIcon name={s.icon} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-gold">Sahifalar</h3>
          <ul className="space-y-2.5 text-sm text-ivory/75">
            {NAV.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="hover:text-gold">{n.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-gold">Amaliyot sohalari</h3>
          <ul className="space-y-2.5 text-sm text-ivory/75">
            {AREAS.slice(0, 6).map((a) => (
              <li key={a.slug}>
                <Link href={`/sohalar/${a.slug}`} className="hover:text-gold">{a.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-gold">Aloqa</h3>
          <ul className="space-y-3 text-sm text-ivory/75">
            <li className="flex items-start gap-3"><IconPin className="mt-0.5 shrink-0 text-gold" /><span>{SITE.contact.address}</span></li>
            <li className="flex items-center gap-3"><IconPhone className="shrink-0 text-gold" /><a href={`tel:${SITE.contact.phone.replace(/\s/g, "")}`} className="hover:text-gold">{SITE.contact.phone}</a></li>
            <li className="flex items-center gap-3"><IconMail className="shrink-0 text-gold" /><a href={`mailto:${SITE.contact.email}`} className="hover:text-gold">{SITE.contact.email}</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <div className="container-x flex flex-col items-center justify-between gap-3 text-sm text-ivory/55 sm:flex-row">
          <p>© <Year /> {SITE.name}. Barcha huquqlar himoyalangan.</p>
          <p>Namuna ma’lumotlar bilan tayyorlangan demo sayt.</p>
        </div>
      </div>
    </footer>
  );
}
