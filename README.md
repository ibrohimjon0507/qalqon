# QALQON — Yuristlar katalogi

Malakali yuristlarni topish uchun nufuzli, ko'p sahifali veb-sayt.
Har bir yurist — profil, rasm/monogram, tajriba va hikoya bilan.
Qo'shimcha: **sahifalari varaqlanadigan onlayn kitob** (3D animatsiya).

**Stack:** Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4

---

## Ishga tushirish

```bash
npm install          # (bir marta, bog'liqliklar allaqachon o'rnatilgan)
npm run dev          # ishlab chiqish rejimi → http://localhost:3000
```

Production uchun:

```bash
npm run build
npm run start        # yoki: npm run start -- -p 3100
```

---

## Sahifalar

| Manzil | Tavsif |
|--------|--------|
| `/` | Bosh sahifa (hero, statistika, yetakchi yuristlar, sohalar, kitob, maqolalar) |
| `/yuristlar` | Yuristlar katalogi — qidiruv, soha/shahar filtri, tartiblash |
| `/yuristlar/[slug]` | Yurist profili (bio, ta'lim, yutuqlar, aloqa) |
| `/sohalar` | Amaliyot sohalari ro'yxati |
| `/sohalar/[slug]` | Soha sahifasi + shu sohadagi yuristlar |
| `/maqolalar` | Blog / maqolalar |
| `/maqolalar/[slug]` | Maqola sahifasi |
| `/kitob` | Onlayn kitob (flipbook, 3D varaqlash) |
| `/biz-haqimizda` | Biz haqimizda |
| `/aloqa` | Aloqa formasi va ma'lumotlar |

---

## Loyiha tuzilmasi

```
src/
├─ app/                 # Next.js sahifalar (App Router)
│  ├─ layout.tsx        # Umumiy layout (shriftlar, Header, Footer)
│  ├─ globals.css       # Dizayn tizimi (ranglar, shriftlar, flipbook)
│  └─ .../page.tsx      # Sahifalar
├─ components/          # UI komponentlar (Header, Hero, Flipbook, ...)
├─ data/                # ⭐ MA'LUMOTLAR (shu yerni tahrirlang)
│  ├─ lawyers.ts        # Yuristlar
│  ├─ areas.ts          # Amaliyot sohalari
│  ├─ articles.ts       # Maqolalar
│  └─ site.ts           # Brend, nav, statistika, e'tiroflar, aloqa
└─ lib/                 # Yordamchilar (canvas portret, sana formati)
```

> `legacy-static/` — eski HTML/CSS/JS prototip (referens uchun). O'chirsa bo'ladi.

---

## ✍️ Ma'lumotlarni tahrirlash

### Yangi yurist qo'shish — `src/data/lawyers.ts`

`LAWYERS` ro'yxatiga yangi obyekt qo'shing. U avtomatik katalog, profil,
soha sahifalari va onlayn kitobga tushadi:

```ts
{
  slug: "ism-familiya",            // noyob, URL uchun (bo'sh joysiz)
  name: "Ism Familiya",
  title: "Jinoyat ishlari bo'yicha advokat",
  areas: ["jinoyat-huquqi"],       // areas.ts dagi slug(lar)
  city: "Toshkent",
  experience: 10,
  languages: ["O'zbek", "Rus"],
  rating: 4.8,
  casesWon: 120,
  photo: "/photos/ism-familiya.jpg", // bo'sh "" => monogram chiziladi
  short: "Qisqa ta'rif.",
  bio: ["Paragraf 1...", "Paragraf 2..."],
  education: ["..."],
  achievements: ["..."],
  phone: "+998 90 000 00 00",
  email: "ism@qalqon.uz",
  featured: true,                  // bosh sahifada ko'rsatish
  c1: "#13233a", c2: "#c8a24a",    // monogram gradient ranglari
}
```

### Haqiqiy rasm qo'yish

1. Rasmni `public/photos/` papkasiga joylang (masalan `public/photos/dilshod.jpg`).
2. Yuristning `photo` maydoniga yozing: `"/photos/dilshod.jpg"`.

`photo` bo'sh bo'lsa — ism bosh harflaridan chiroyli monogram avtomatik chiziladi.

### Boshqa ma'lumotlar
- **Sohalar:** `src/data/areas.ts`
- **Maqolalar:** `src/data/articles.ts`
- **Brend nomi, nav, aloqa, statistika, e'tiroflar:** `src/data/site.ts`

---

## Brend nomini o'zgartirish

Hozirgi nom — **QALQON** (o'zbekcha "qalqon" = himoya ramzi).
O'zgartirish uchun `src/data/site.ts` dagi `SITE.name` va `SITE.tagline` ni tahrirlang.
Logoni o'zgartirish — `src/components/Logo.tsx`.

---

## Dizayn

- Palitra: to'q ko'k (ink) · oltin (gold) · fil suyagi (ivory) — `globals.css` dagi `@theme`
- Shriftlar: Playfair Display (sarlavha) + Inter (matn)
- To'liq moslashuvchan (mobil/planshet/kompyuter)

## Keyingi qadamlar (ixtiyoriy)
- Ma'lumotlarni haqiqiy bazaga (masalan Vercel Marketplace DB) ulash
- Aloqa formasini backend/email xizmatiga ulash
- Vercel'ga deploy qilish (`vercel` CLI yoki GitHub orqali)
