import Link from "next/link";
import Logo from "./Logo";

export default function Book3D() {
  return (
    <Link href="/kitob" className="book3d-stage grid place-items-center" aria-label="Onlayn kitobni ochish">
      <div className="book3d">
        <div className="book3d__cover">
          <Logo size={56} className="text-gold" />
          <span className="display text-[1.5rem] tracking-[0.2em] text-ivory">QALQON</span>
          <span className="text-[0.72rem] uppercase tracking-[0.12em] text-gold-soft">
            Yuristlar kitobi
          </span>
          <span className="mt-4 border-t border-gold/30 pt-3 text-[0.72rem] text-ivory/60">
            Ochish uchun bosing
          </span>
        </div>
        <div className="book3d__pages" />
        <div className="book3d__spine" />
      </div>
    </Link>
  );
}
