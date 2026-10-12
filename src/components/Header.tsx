"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { NAV, SITE } from "@/data/site";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // solid background when not home, or scrolled, or mobile menu open
  const solid = !isHome || scrolled || open;

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-all duration-300"
      style={{
        height: scrolled ? 64 : "var(--nav-h)",
        background: solid ? "rgba(10,18,32,0.92)" : "transparent",
        backdropFilter: solid ? "blur(12px)" : "none",
        boxShadow: solid && scrolled ? "0 10px 30px -18px rgba(0,0,0,0.6)" : "none",
      }}
    >
      <div className="container-x flex h-full items-center gap-5">
        <Link href="/" className="flex items-center gap-3 text-white" aria-label={`${SITE.name} bosh sahifa`}>
          <Logo size={scrolled ? 34 : 40} className="text-gold shrink-0 transition-all" />
          <span className="flex flex-col leading-none">
            <strong className="display text-[1.2rem] tracking-[0.18em]">{SITE.name}</strong>
            <em className="mt-1 text-[0.6rem] not-italic uppercase tracking-[0.2em] text-white/70">
              {SITE.tagline}
            </em>
          </span>
        </Link>

        {/* desktop nav */}
        <nav className="ml-auto hidden items-center gap-7 lg:flex">
          {NAV.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`link-underline text-[0.92rem] font-medium transition-colors ${
                  active ? "text-gold" : "text-white/85 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/aloqa"
          className="btn btn-gold ml-auto hidden h-9 !px-5 !py-0 text-[0.85rem] lg:ml-6 lg:inline-flex"
        >
          Konsultatsiya
        </Link>

        {/* burger */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Menyu"
          aria-expanded={open}
          className="ml-auto flex h-11 w-11 flex-col items-center justify-center gap-[5px] lg:hidden"
        >
          <span
            className="h-[2.5px] w-6 rounded bg-white transition-all duration-300"
            style={open ? { transform: "translateY(7.5px) rotate(45deg)" } : undefined}
          />
          <span
            className="h-[2.5px] w-6 rounded bg-white transition-all duration-300"
            style={open ? { opacity: 0 } : undefined}
          />
          <span
            className="h-[2.5px] w-6 rounded bg-white transition-all duration-300"
            style={open ? { transform: "translateY(-7.5px) rotate(-45deg)" } : undefined}
          />
        </button>
      </div>

      {/* mobile menu */}
      <div
        className="overflow-hidden bg-[rgba(10,18,32,0.98)] backdrop-blur-xl transition-all duration-300 lg:hidden"
        style={{ maxHeight: open ? 520 : 0 }}
      >
        <nav className="container-x flex flex-col py-2">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="border-b border-white/5 py-4 text-white/85 hover:text-gold"
            >
              {item.label}
            </Link>
          ))}
          <Link href="/aloqa" className="btn btn-gold my-4 justify-center">
            Konsultatsiya olish
          </Link>
        </nav>
      </div>
    </header>
  );
}
