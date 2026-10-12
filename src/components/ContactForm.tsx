"use client";

import { useState } from "react";
import { AREAS } from "@/data/areas";

export default function ContactForm() {
  const [done, setDone] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const form = e.currentTarget;
        if (!form.checkValidity()) return form.reportValidity();
        setDone(true);
        form.reset();
        setTimeout(() => setDone(false), 6000);
      }}
      className="flex flex-col gap-4"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium">Ism <b className="text-gold">*</b></span>
          <input name="name" required placeholder="Ismingiz" className="field-input" />
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium">Telefon <b className="text-gold">*</b></span>
          <input name="phone" required placeholder="+998 __ ___ __ __" className="field-input" />
        </label>
      </div>

      <label className="flex flex-col gap-2">
        <span className="text-sm font-medium">Soha</span>
        <select name="area" className="field-input" defaultValue="">
          <option value="" disabled>Sohani tanlang</option>
          {AREAS.map((a) => (
            <option key={a.slug} value={a.slug}>{a.name}</option>
          ))}
        </select>
      </label>

      <label className="flex flex-col gap-2">
        <span className="text-sm font-medium">Xabar <b className="text-gold">*</b></span>
        <textarea name="message" rows={5} required placeholder="Masalangizni qisqacha yozing..." className="field-input resize-y" />
      </label>

      <button type="submit" className="btn btn-dark self-start">Yuborish</button>
      {done && <p className="font-semibold text-[#1f8a4c]">Rahmat! Murojaatingiz qabul qilindi. ✓</p>}
    </form>
  );
}
