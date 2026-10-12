import Link from "next/link";
import Logo from "@/components/Logo";

export default function NotFound() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-ink px-6 text-center text-ivory">
      <Logo size={72} className="text-gold" />
      <h1 className="display mt-6 text-[clamp(3rem,10vw,6rem)] text-gold">404</h1>
      <p className="mt-2 text-xl">Sahifa topilmadi</p>
      <p className="mt-2 max-w-md text-ivory/65">
        Kechirasiz, siz qidirgan sahifa mavjud emas yoki ko‘chirilgan.
      </p>
      <Link href="/" className="btn btn-gold mt-8">Bosh sahifaga qaytish</Link>
    </section>
  );
}
