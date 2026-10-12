/* =====================================================================
   Maqolalar / blog (sample)
   ===================================================================== */

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO
  category: string;
  readMinutes: number;
  authorSlug: string; // lawyer slug
  content: string[];
  c1: string;
  c2: string;
};

export const ARTICLES: Article[] = [
  {
    slug: "shartnoma-tuzishda-5-xato",
    title: "Shartnoma tuzishda ko'p uchraydigan 5 ta xato",
    excerpt:
      "Noto'g'ri tuzilgan shartnoma katta moliyaviy yo'qotishlarga olib kelishi mumkin. Eng keng tarqalgan xatolarni ko'rib chiqamiz.",
    date: "2026-09-28",
    category: "Fuqarolik huquqi",
    readMinutes: 6,
    authorSlug: "feruza-sodiqova",
    content: [
      "Shartnoma — har qanday bitimning huquqiy asosi. Afsuski, ko'pchilik uning shartlariga yetarlicha e'tibor bermaydi va keyinchalik nizolarga duch keladi.",
      "Birinchi xato — tomonlar majburiyatlarini noaniq belgilash. Har bir majburiyat aniq, o'lchanadigan va muddatli bo'lishi kerak.",
      "Ikkinchi xato — javobgarlik va nizolarni hal qilish tartibini ko'rsatmaslik. Shartnomada nizo yuzaga kelganda qanday yo'l tutilishi yozilishi shart.",
      "Qolgan xatolarni oldini olish uchun shartnomani imzolashdan oldin advokat bilan maslahatlashish tavsiya etiladi.",
    ],
    c1: "#0f2e2a",
    c2: "#c8a24a",
  },
  {
    slug: "ajrim-jarayoni-huquqlar",
    title: "Ajrim jarayonida sizning huquqlaringiz",
    excerpt:
      "Nikohni bekor qilish — murakkab jarayon. Mol-mulk, aliment va bolalar masalasida qonun nimani kafolatlaydi?",
    date: "2026-09-15",
    category: "Oila huquqi",
    readMinutes: 7,
    authorSlug: "nodira-usmonova",
    content: [
      "Ajrim nafaqat hissiy, balki huquqiy jihatdan ham murakkab jarayon. O'z huquqlaringizni bilish bu davrda muhim ahamiyatga ega.",
      "Birgalikda orttirilgan mol-mulk, qoida tariqasida, teng taqsimlanadi. Biroq istisnolar ham mavjud.",
      "Bolalar bilan bog'liq masalalarda sud har doim bolaning manfaatini birinchi o'ringa qo'yadi.",
      "Malakali advokat yordamida jarayonni adolatli va kamroq stress bilan o'tkazish mumkin.",
    ],
    c1: "#2a1c3a",
    c2: "#b07cc6",
  },
  {
    slug: "biznes-royxatdan-otkazish",
    title: "Biznesni ro'yxatdan o'tkazishdan oldin bilishingiz kerak",
    excerpt:
      "Yangi kompaniya ochyapsizmi? Tashkiliy-huquqiy shaklni to'g'ri tanlash kelajakdagi muvaffaqiyat uchun muhim.",
    date: "2026-08-30",
    category: "Biznes huquqi",
    readMinutes: 8,
    authorSlug: "sardor-qodirov",
    content: [
      "Biznesni rasmiylashtirishdan oldin to'g'ri tashkiliy-huquqiy shaklni tanlash kerak: MChJ, YaTT yoki boshqa.",
      "Har bir shakl soliq, javobgarlik va boshqaruv jihatidan o'ziga xos xususiyatlarga ega.",
      "Ta'sis hujjatlarini puxta tayyorlash kelajakdagi korporativ nizolarning oldini oladi.",
      "To'g'ri boshlangan biznes — kamroq huquqiy muammo demakdir.",
    ],
    c1: "#13233a",
    c2: "#4a90c2",
  },
  {
    slug: "mehnat-shartnomasi-haqlar",
    title: "Mehnat shartnomasi: xodim nimalarni talab qila oladi?",
    excerpt:
      "Ish beruvchi bilan munosabatlarda qonun sizni qanday himoya qiladi? Asosiy kafolatlar haqida.",
    date: "2026-08-12",
    category: "Mehnat huquqi",
    readMinutes: 5,
    authorSlug: "kamola-yusupova",
    content: [
      "Mehnat shartnomasi xodim va ish beruvchi o'rtasidagi munosabatlarning asosidir.",
      "Qonun minimal mehnat haqi, ta'til, ish vaqti va dam olish vaqti bo'yicha kafolatlar beradi.",
      "Noqonuniy ishdan bo'shatilgan taqdirda xodim sudga murojaat qilib, ishga tiklanishni talab qilishi mumkin.",
      "O'z huquqlaringizni bilish — ularni himoya qilishning birinchi qadami.",
    ],
    c1: "#1a2e2a",
    c2: "#59a6a0",
  },
  {
    slug: "tovar-belgisi-himoya",
    title: "Brendingizni qanday himoya qilish kerak?",
    excerpt:
      "Tovar belgisini ro'yxatdan o'tkazish — biznesingiz nomini raqobatchilardan himoya qilishning eng ishonchli yo'li.",
    date: "2026-07-25",
    category: "Intellektual mulk",
    readMinutes: 6,
    authorSlug: "malika-ergasheva",
    content: [
      "Brend — kompaniyaning eng qimmatli aktivlaridan biri. Uni huquqiy himoya qilmaslik katta xatar.",
      "Tovar belgisini ro'yxatdan o'tkazish sizga uning mualliflik huquqini beradi.",
      "Ro'yxatdan o'tmagan belgini raqobatchilar o'zlashtirib olishi mumkin.",
      "Ro'yxatdan o'tkazish jarayonini mutaxassis bilan boshlash vaqt va mablag'ni tejaydi.",
    ],
    c1: "#1c2b45",
    c2: "#e0c889",
  },
  {
    slug: "soliq-tekshiruvi-tayyorgarlik",
    title: "Soliq tekshiruviga qanday tayyorlanish kerak?",
    excerpt:
      "Soliq tekshiruvi har qanday biznes uchun stressli vaziyat. To'g'ri tayyorgarlik xatarlarni kamaytiradi.",
    date: "2026-07-08",
    category: "Soliq huquqi",
    readMinutes: 7,
    authorSlug: "bekzod-aliyev",
    content: [
      "Soliq tekshiruvi — biznes faoliyatining tabiiy qismi. Unga oldindan tayyorlanish muhim.",
      "Barcha moliyaviy hujjatlar tartibli va to'liq saqlanishi lozim.",
      "Tekshiruv davomida advokat ishtiroki sizning huquqlaringiz buzilmasligini ta'minlaydi.",
      "Nizo yuzaga kelsa, uni sud tartibida hal qilish imkoniyati mavjud.",
    ],
    c1: "#13233a",
    c2: "#4a90c2",
  },
];

export const getArticle = (slug: string) => ARTICLES.find((a) => a.slug === slug);
