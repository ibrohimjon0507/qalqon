"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [done, setDone] = useState(false);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const form = e.currentTarget;
        if (!form.checkValidity()) return form.reportValidity();
        setDone(true);
        form.reset();
        setTimeout(() => setDone(false), 5000);
      }}
      className="mx-auto mt-7 flex max-w-md flex-wrap justify-center gap-3"
    >
      <input
        type="email"
        required
        placeholder="Email manzilingiz"
        aria-label="Email"
        className="min-w-[220px] flex-1 rounded-full border border-white/20 bg-white/5 px-5 py-3 text-white placeholder:text-white/50 outline-none focus:border-gold"
      />
      <button type="submit" className="btn btn-gold">Obuna bo‘lish</button>
      {done && (
        <p className="w-full text-gold-soft">Obuna bo‘lganingiz uchun rahmat! ✓</p>
      )}
    </form>
  );
}
