import Link from "next/link";
import MosaicBg from "./MosaicBg";

type Crumb = { label: string; href?: string };

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  crumbs = [],
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  crumbs?: Crumb[];
}) {
  return (
    <section className="relative overflow-hidden bg-ink pt-[calc(var(--nav-h)+3rem)] pb-16 text-ivory">
      <div className="absolute inset-0 opacity-30">
        <MosaicBg tile={30} />
      </div>
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(180deg, rgba(8,14,26,0.85), rgba(8,14,26,0.95))" }}
      />
      <div className="container-x relative">
        <nav className="mb-5 flex flex-wrap items-center gap-2 text-[0.82rem] text-ivory/60">
          <Link href="/" className="hover:text-gold">Bosh sahifa</Link>
          {crumbs.map((c) => (
            <span key={c.label} className="flex items-center gap-2">
              <span className="text-ivory/30">/</span>
              {c.href ? (
                <Link href={c.href} className="hover:text-gold">{c.label}</Link>
              ) : (
                <span className="text-gold">{c.label}</span>
              )}
            </span>
          ))}
        </nav>
        {eyebrow && <p className="eyebrow !text-gold-soft mb-3">{eyebrow}</p>}
        <h1 className="display text-[clamp(2.2rem,5vw,3.6rem)]">{title}</h1>
        {subtitle && <p className="mt-4 max-w-2xl text-[1.05rem] text-ivory/75">{subtitle}</p>}
      </div>
    </section>
  );
}
