# ZIYOLILAR — Buyuk arboblar portretlari

Siyosat va jamiyat arboblari, mutafakkirlar va ziyolilarga bag'ishlangan nufuzli veb-sayt.
Portretlar, hikoyalar va **sahifalari varaqlanadigan onlayn kitob** (3D animatsiya) bilan.

Chet el saytlaridan (The People's Picture, Humans of New York, Atlas of Humanity)
ilhomlanib, mustaqil dizayn va kod asosida yaratilgan.

---

## Saytni ochish

Hech qanday o'rnatish yoki build kerak emas — toza HTML/CSS/JS.

**Eng oson yo'l:** `index.html` faylini brauzerda oching (ikki marta bosing).

**Agar rasmlar/shriftlar to'liq ko'rinmasa** (ba'zi brauzerlar `file://` ni cheklaydi),
loyiha papkasida lokal server ishga tushiring:

```bash
# Python o'rnatilgan bo'lsa:
python -m http.server 8000
```

So'ng brauzerda oching: http://127.0.0.1:8000

---

## Tuzilma

```
ziyolilar-inson/
├─ index.html        # Asosiy sahifa (barcha bo'limlar)
├─ css/styles.css    # Butun dizayn
├─ js/
│  ├─ data.js        # ⭐ ARBOBLAR MA'LUMOTLARI (shu yerni tahrirlang)
│  ├─ book.js        # Onlayn kitob (flipbook) dvigateli
│  └─ main.js        # Slayder, animatsiyalar, grid, modal, formalar
└─ assets/
   ├─ favicon.svg    # Sayt belgisi
   └─ photos/        # (ixtiyoriy) haqiqiy rasmlar shu yerga
```

---

## ✍️ Yangi arbob (siyosatchi) qo'shish

`js/data.js` faylidagi `FIGURES` ro'yxatiga yangi blok qo'shing:

```js
{
  id: "ism-familiya",                      // noyob, bo'sh joysiz
  name: "Ism Familiya",
  role: "Davlat arbobi, deputat",
  period: "1970 – hozir",                  // yoki tug'ilgan yili
  place: "Toshkent, O'zbekiston",
  short: "Bitta qatorli qisqa ta'rif.",
  story: [
    "Birinchi paragraf...",
    "Ikkinchi paragraf...",
    "Uchinchi paragraf..."
  ],
  image: "assets/photos/ism-familiya.jpg", // rasm bo'lsa
  c1: "#13233a", c2: "#c8a24a"             // rasm bo'lmasa — fon ranglari
}
```

Yangi arbob **avtomatik** ravishda galereyada, modal oynada va onlayn kitobda paydo bo'ladi.

### Haqiqiy rasm qo'yish

1. Rasmni `assets/photos/` papkasiga joylang (masalan `aliyev.jpg`).
2. O'sha arbobning `image` maydoniga manzilni yozing: `"assets/photos/aliyev.jpg"`.

> Hozircha rasm o'rniga arbob ism-sharifidan chiroyli **monogram** (bosh harflar) chiziladi.
> `image` to'ldirilsa, haqiqiy rasm ko'rsatiladi. *(Rasm qo'llab-quvvatlashini
> to'liq yoqish uchun ayting — `main.js` dagi portret chizuvchiga rasm yuklash qo'shib beraman.)*

---

## Boshqa sozlamalar (`js/data.js`)

| O'zgaruvchi      | Vazifasi |
|------------------|----------|
| `FIGURES`        | Barcha arboblar ro'yxati |
| `HIGHLIGHT_IDS`  | "So'nggi hikoyalar" bo'limida ko'rsatiladigan 3 ta arbob `id` si |
| `TESTIMONIALS`   | Hamkorlar e'tiroflari |
| `STATS`          | Yuqoridagi animatsion raqamlar |

Sayt matnlari (sarlavhalar, aloqa ma'lumotlari, ijtimoiy tarmoqlar) — `index.html` ichida.

---

## Imkoniyatlar

- Foto-mozaika fonli hero-slayder (avtomatik aylanadi)
- Animatsion statistika (scroll bo'lganda sanaydi)
- Arboblar galereyasi — bosilganda to'liq hikoya modali ochiladi
- **Onlayn kitob** — haqiqiy kitob kabi 3D sahifa varaqlash (klaviatura ← → bilan ham)
- Hamkorlar e'tiroflari karuseli
- Aloqa formasi va obuna
- To'liq moslashuvchan (telefon/planshet/kompyuter)
- Oltin · to'q ko'k · fil suyagi — nufuzli palitra
```
