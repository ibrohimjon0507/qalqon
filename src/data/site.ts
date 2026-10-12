/* =====================================================================
   Sayt konfiguratsiyasi (brand, nav, stats, testimonials, aloqa)
   ===================================================================== */

export const SITE = {
  name: "QALQON",
  tagline: "Huquqiy himoya va ishonch",
  description:
    "QALQON — malakali yuristlar katalogi. O'z sohangiz bo'yicha ishonchli advokatni toping, profilini o'rganing va bevosita bog'laning.",
  contact: {
    address: "Toshkent shahri, Amir Temur ko'chasi, 1",
    phone: "+998 71 200 00 00",
    email: "info@qalqon.uz",
    hours: "Dush–Shan: 9:00 – 18:00",
  },
  socials: [
    { label: "Telegram", href: "#", icon: "telegram" },
    { label: "Instagram", href: "#", icon: "instagram" },
    { label: "Facebook", href: "#", icon: "facebook" },
    { label: "YouTube", href: "#", icon: "youtube" },
  ],
};

export const NAV = [
  { label: "Bosh sahifa", href: "/" },
  { label: "Yuristlar", href: "/yuristlar" },
  { label: "Amaliyot sohalari", href: "/sohalar" },
  { label: "Maqolalar", href: "/maqolalar" },
  { label: "Kitob", href: "/kitob" },
  { label: "Biz haqimizda", href: "/biz-haqimizda" },
  { label: "Aloqa", href: "/aloqa" },
];

export type Stat = {
  value: number;
  suffix?: string;
  label: string;
  format?: "k";
};

export const STATS: Stat[] = [
  { value: 120, suffix: "+", label: "Malakali yurist" },
  { value: 2500, suffix: "+", label: "Yakunlangan ish" },
  { value: 8, suffix: "", label: "Amaliyot sohasi" },
  { value: 15000, suffix: "+", label: "Qoniqqan mijoz", format: "k" },
];

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "QALQON orqali o'z ishim bo'yicha aniq mutaxassis topdim. Advokat professional va e'tiborli bo'ldi, ishim ijobiy hal bo'ldi.",
    author: "Aziz M.",
    role: "Tadbirkor, Toshkent",
  },
  {
    quote:
      "Oilaviy masalada juda nozik yondashuvga muhtoj edim. Bu yerda topgan yurist menga katta yordam berdi.",
    author: "Dilnoza R.",
    role: "Mijoz, Samarqand",
  },
  {
    quote:
      "Platforma orqali yuristni tanlash juda qulay — profil, tajriba va sohani darhol ko'rish mumkin. Vaqtni tejadim.",
    author: "Jasur T.",
    role: "IT-kompaniya rahbari",
  },
];
