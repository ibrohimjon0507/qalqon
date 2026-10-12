/* =====================================================================
   Amaliyot sohalari (practice areas)
   ===================================================================== */

export type Area = {
  slug: string;
  name: string;
  short: string;
  description: string[];
  icon: string; // short label used by the icon component
};

export const AREAS: Area[] = [
  {
    slug: "jinoyat-huquqi",
    name: "Jinoyat huquqi",
    short: "Jinoiy ishlar bo'yicha himoya va vakillik.",
    icon: "shield",
    description: [
      "Jinoiy javobgarlik bilan bog'liq ishlarda malakali himoya — dastlabki tergovdan sud jarayonigacha.",
      "Mijozning huquqlarini har bir bosqichda himoya qilish, oqlov va jazoni yengillashtirish bo'yicha strategiya tuzish.",
    ],
  },
  {
    slug: "fuqarolik-huquqi",
    name: "Fuqarolik huquqi",
    short: "Nizolar, shartnomalar va fuqarolik ishlari.",
    icon: "scale",
    description: [
      "Fuqarolik-huquqiy nizolarni sudgacha va sud tartibida hal qilish.",
      "Shartnomalar tuzish, zararni undirish, mulkiy nizolar bo'yicha professional yordam.",
    ],
  },
  {
    slug: "oila-huquqi",
    name: "Oila huquqi",
    short: "Nikoh, ajrim, aliment va bolalar huquqi.",
    icon: "heart",
    description: [
      "Oilaviy nizolar — nikohni bekor qilish, mol-mulkni taqsimlash, alimentlar.",
      "Bolalarning manfaatlarini birinchi o'ringa qo'ygan holda muvozanatli yechimlar.",
    ],
  },
  {
    slug: "biznes-huquqi",
    name: "Biznes va korporativ huquq",
    short: "Kompaniyalar, bitimlar va korporativ boshqaruv.",
    icon: "briefcase",
    description: [
      "Tadbirkorlik faoliyatini huquqiy jihatdan to'liq qo'llab-quvvatlash.",
      "Kompaniya tashkil etish, bitimlar, due diligence va korporativ nizolar.",
    ],
  },
  {
    slug: "mehnat-huquqi",
    name: "Mehnat huquqi",
    short: "Ishga qabul, ishdan bo'shatish va mehnat nizolari.",
    icon: "users",
    description: [
      "Xodim va ish beruvchi o'rtasidagi munosabatlarni huquqiy tartibga solish.",
      "Noqonuniy ishdan bo'shatish, mehnat haqi va mehnat nizolari bo'yicha vakillik.",
    ],
  },
  {
    slug: "kochmas-mulk",
    name: "Ko'chmas mulk",
    short: "Oldi-sotdi, ijaraga olish va mulk nizolari.",
    icon: "home",
    description: [
      "Ko'chmas mulk bilan bog'liq bitimlarni xavfsiz rasmiylashtirish.",
      "Mulk huquqini himoya qilish, ro'yxatdan o'tkazish va nizolarni hal qilish.",
    ],
  },
  {
    slug: "soliq-huquqi",
    name: "Soliq huquqi",
    short: "Soliq rejalashtirish va nizolar.",
    icon: "receipt",
    description: [
      "Soliq to'lovchilarning huquqlarini soliq organlari bilan nizolarda himoya qilish.",
      "Soliq optimallashtirish va qonuniy rejalashtirish bo'yicha maslahatlar.",
    ],
  },
  {
    slug: "intellektual-mulk",
    name: "Intellektual mulk",
    short: "Tovar belgilari, mualliflik va patentlar.",
    icon: "bulb",
    description: [
      "Intellektual mulk obyektlarini ro'yxatdan o'tkazish va himoya qilish.",
      "Tovar belgisi, mualliflik huquqi va patent nizolarida vakillik.",
    ],
  },
];

export const getArea = (slug: string) => AREAS.find((a) => a.slug === slug);
