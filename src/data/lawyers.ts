/* =====================================================================
   Yuristlar katalogi (sample data — fictional profiles)
   Haqiqiy yuristlar bilan almashtirish uchun shu ro'yxatni tahrirlang.
   `photo` bo'sh bo'lsa — ism bosh harflaridan chiroyli monogram chiziladi.
   ===================================================================== */

export type Lawyer = {
  slug: string;
  name: string;
  title: string;
  areas: string[]; // area slugs
  city: string;
  experience: number; // yillar
  languages: string[];
  rating: number; // 0–5
  casesWon: number;
  photo: string; // "" => monogram placeholder
  short: string;
  bio: string[];
  education: string[];
  achievements: string[];
  phone: string;
  email: string;
  featured?: boolean;
  c1: string;
  c2: string;
};

export const LAWYERS: Lawyer[] = [
  {
    slug: "dilshod-rahimov",
    name: "Dilshod Rahimov",
    title: "Jinoyat ishlari bo'yicha advokat",
    areas: ["jinoyat-huquqi", "fuqarolik-huquqi"],
    city: "Toshkent",
    experience: 18,
    languages: ["O'zbek", "Rus", "Ingliz"],
    rating: 4.9,
    casesWon: 340,
    photo: "",
    short: "18 yillik tajribaga ega jinoyat ishlari bo'yicha yetakchi advokat.",
    bio: [
      "Dilshod Rahimov — murakkab jinoiy ishlar bo'yicha 18 yildan ortiq tajribaga ega advokat. U mijozlarini dastlabki tergovdan boshlab Oliy sudgacha barcha bosqichlarda himoya qiladi.",
      "Karyerasi davomida 340 dan ortiq ishni muvaffaqiyatli yakunlagan, ko'plab ishlarda oqlov hukmiga erishgan.",
      "U har bir ishga individual yondashadi va mijoz manfaatlarini birinchi o'ringa qo'yadi.",
    ],
    education: [
      "Toshkent davlat yuridik universiteti (2006)",
      "Jinoyat huquqi magistratura (2008)",
    ],
    achievements: [
      "O'zbekiston Advokatlar palatasi a'zosi",
      "Yil advokati (2021) — nominant",
    ],
    phone: "+998 90 123 45 67",
    email: "d.rahimov@qalqon.uz",
    featured: true,
    c1: "#13233a",
    c2: "#c8a24a",
  },
  {
    slug: "nodira-usmonova",
    name: "Nodira Usmonova",
    title: "Oila huquqi bo'yicha advokat",
    areas: ["oila-huquqi", "fuqarolik-huquqi"],
    city: "Toshkent",
    experience: 12,
    languages: ["O'zbek", "Rus"],
    rating: 4.8,
    casesWon: 210,
    photo: "",
    short: "Oilaviy nizolarni muvozanat bilan hal qilishga ixtisoslashgan.",
    bio: [
      "Nodira Usmonova oila huquqi sohasida 12 yillik tajribaga ega. U nikohni bekor qilish, mol-mulk taqsimoti va aliment ishlarida mijozlarga yordam beradi.",
      "Uning ustuvor tamoyili — bolalar manfaatini himoya qilish va nizolarni imkon qadar tinch yo'l bilan hal etish.",
    ],
    education: [
      "Toshkent davlat yuridik universiteti (2012)",
    ],
    achievements: [
      "Oilaviy mediatsiya bo'yicha sertifikatlangan mutaxassis",
    ],
    phone: "+998 90 234 56 78",
    email: "n.usmonova@qalqon.uz",
    featured: true,
    c1: "#2a1c3a",
    c2: "#b07cc6",
  },
  {
    slug: "sardor-qodirov",
    name: "Sardor Qodirov",
    title: "Biznes va korporativ huquq bo'yicha advokat",
    areas: ["biznes-huquqi", "soliq-huquqi"],
    city: "Toshkent",
    experience: 15,
    languages: ["O'zbek", "Rus", "Ingliz"],
    rating: 4.9,
    casesWon: 180,
    photo: "",
    short: "Kompaniyalar va tadbirkorlar uchun korporativ huquq eksperti.",
    bio: [
      "Sardor Qodirov yirik va o'rta biznesni huquqiy qo'llab-quvvatlash bo'yicha 15 yillik tajribaga ega.",
      "U bitimlar tuzish, korporativ boshqaruv, due diligence va investitsiya loyihalarida maslahat beradi.",
    ],
    education: [
      "Toshkent davlat yuridik universiteti (2009)",
      "Korporativ huquq bo'yicha xalqaro kurs (London, 2014)",
    ],
    achievements: [
      "100 dan ortiq M&A bitimlarida huquqiy maslahatchi",
    ],
    phone: "+998 90 345 67 89",
    email: "s.qodirov@qalqon.uz",
    featured: true,
    c1: "#13233a",
    c2: "#4a90c2",
  },
  {
    slug: "kamola-yusupova",
    name: "Kamola Yusupova",
    title: "Mehnat huquqi bo'yicha advokat",
    areas: ["mehnat-huquqi", "fuqarolik-huquqi"],
    city: "Samarqand",
    experience: 10,
    languages: ["O'zbek", "Rus", "Tojik"],
    rating: 4.7,
    casesWon: 150,
    photo: "",
    short: "Xodimlar va ish beruvchilar o'rtasidagi nizolar mutaxassisi.",
    bio: [
      "Kamola Yusupova mehnat huquqi sohasida 10 yillik tajribaga ega. U noqonuniy ishdan bo'shatish, mehnat haqi va mehnat shartnomalari bo'yicha ishlaydi.",
      "Uning mijozlari orasida yirik kompaniyalar ham, alohida xodimlar ham bor.",
    ],
    education: [
      "Samarqand davlat universiteti, yuridik fakulteti (2014)",
    ],
    achievements: [
      "Mehnat nizolari bo'yicha 150+ muvaffaqiyatli ish",
    ],
    phone: "+998 91 456 78 90",
    email: "k.yusupova@qalqon.uz",
    c1: "#1a2e2a",
    c2: "#59a6a0",
  },
  {
    slug: "jahongir-tursunov",
    name: "Jahongir Tursunov",
    title: "Ko'chmas mulk bo'yicha advokat",
    areas: ["kochmas-mulk", "fuqarolik-huquqi"],
    city: "Toshkent",
    experience: 14,
    languages: ["O'zbek", "Rus"],
    rating: 4.8,
    casesWon: 230,
    photo: "",
    short: "Ko'chmas mulk bitimlari va mulkiy nizolar bo'yicha ekspert.",
    bio: [
      "Jahongir Tursunov ko'chmas mulk sohasida 14 yillik tajribaga ega. U oldi-sotdi bitimlarini xavfsiz rasmiylashtiradi va mulkiy nizolarni hal qiladi.",
      "Uning asosiy yo'nalishi — mijozni bitimdagi yashirin xatarlardan himoya qilish.",
    ],
    education: [
      "Toshkent davlat yuridik universiteti (2010)",
    ],
    achievements: [
      "500+ xavfsiz ko'chmas mulk bitimi",
    ],
    phone: "+998 90 567 89 01",
    email: "j.tursunov@qalqon.uz",
    c1: "#2a2415",
    c2: "#c8a24a",
  },
  {
    slug: "malika-ergasheva",
    name: "Malika Ergasheva",
    title: "Intellektual mulk bo'yicha advokat",
    areas: ["intellektual-mulk", "biznes-huquqi"],
    city: "Toshkent",
    experience: 9,
    languages: ["O'zbek", "Ingliz"],
    rating: 4.9,
    casesWon: 120,
    photo: "",
    short: "Tovar belgilari, patent va mualliflik huquqi himoyachisi.",
    bio: [
      "Malika Ergasheva intellektual mulk sohasida 9 yillik tajribaga ega. U brendlar, startaplar va ijodkorlar bilan ishlaydi.",
      "Tovar belgisini ro'yxatdan o'tkazish va huquqbuzarliklarga qarshi kurash uning asosiy yo'nalishi.",
    ],
    education: [
      "Toshkent davlat yuridik universiteti (2015)",
      "WIPO intellektual mulk akademiyasi kursi",
    ],
    achievements: [
      "300+ tovar belgisi ro'yxatdan o'tkazilgan",
    ],
    phone: "+998 90 678 90 12",
    email: "m.ergasheva@qalqon.uz",
    featured: true,
    c1: "#1c2b45",
    c2: "#e0c889",
  },
  {
    slug: "bekzod-aliyev",
    name: "Bekzod Aliyev",
    title: "Soliq huquqi bo'yicha advokat",
    areas: ["soliq-huquqi", "biznes-huquqi"],
    city: "Buxoro",
    experience: 11,
    languages: ["O'zbek", "Rus"],
    rating: 4.6,
    casesWon: 140,
    photo: "",
    short: "Soliq nizolari va qonuniy optimallashtirish eksperti.",
    bio: [
      "Bekzod Aliyev soliq huquqi sohasida 11 yillik tajribaga ega. U soliq organlari bilan nizolarda biznesni himoya qiladi.",
      "Qonuniy soliq rejalashtirish bo'yicha maslahatlari ko'plab kompaniyalarga mablag' tejashga yordam bergan.",
    ],
    education: [
      "Toshkent moliya instituti (2011)",
      "Toshkent davlat yuridik universiteti (2013)",
    ],
    achievements: [
      "Soliq nizolarida 90% muvaffaqiyat ko'rsatkichi",
    ],
    phone: "+998 93 789 01 23",
    email: "b.aliyev@qalqon.uz",
    c1: "#13233a",
    c2: "#4a90c2",
  },
  {
    slug: "feruza-sodiqova",
    name: "Feruza Sodiqova",
    title: "Fuqarolik huquqi bo'yicha advokat",
    areas: ["fuqarolik-huquqi", "oila-huquqi"],
    city: "Toshkent",
    experience: 13,
    languages: ["O'zbek", "Rus"],
    rating: 4.8,
    casesWon: 260,
    photo: "",
    short: "Fuqarolik nizolari va shartnoma huquqi mutaxassisi.",
    bio: [
      "Feruza Sodiqova fuqarolik huquqi sohasida 13 yillik tajribaga ega. U shartnoma nizolari, zararni undirish va meros ishlari bilan shug'ullanadi.",
      "Uning kuchli tomoni — murakkab ishlarda dalillarni puxta tayyorlash.",
    ],
    education: [
      "Toshkent davlat yuridik universiteti (2011)",
    ],
    achievements: [
      "260+ yakunlangan fuqarolik ishi",
    ],
    phone: "+998 90 890 12 34",
    email: "f.sodiqova@qalqon.uz",
    c1: "#0f2e2a",
    c2: "#c8a24a",
  },
  {
    slug: "otabek-nazarov",
    name: "Otabek Nazarov",
    title: "Jinoyat huquqi bo'yicha advokat",
    areas: ["jinoyat-huquqi"],
    city: "Farg'ona",
    experience: 16,
    languages: ["O'zbek", "Rus"],
    rating: 4.7,
    casesWon: 300,
    photo: "",
    short: "Iqtisodiy jinoyatlar bo'yicha himoya ixtisosligi.",
    bio: [
      "Otabek Nazarov jinoyat huquqi, xususan iqtisodiy jinoyatlar bo'yicha 16 yillik tajribaga ega.",
      "U korrupsiya, firibgarlik va iqtisodiy ishlarda mijozlarni himoya qiladi.",
    ],
    education: [
      "Toshkent davlat yuridik universiteti (2008)",
    ],
    achievements: [
      "Iqtisodiy ishlar bo'yicha 300+ himoya",
    ],
    phone: "+998 94 901 23 45",
    email: "o.nazarov@qalqon.uz",
    c1: "#3a1c1c",
    c2: "#c0392b",
  },
  {
    slug: "gulnora-islomova",
    name: "Gulnora Islomova",
    title: "Oila va fuqarolik huquqi bo'yicha advokat",
    areas: ["oila-huquqi", "fuqarolik-huquqi"],
    city: "Samarqand",
    experience: 8,
    languages: ["O'zbek", "Rus", "Tojik"],
    rating: 4.7,
    casesWon: 110,
    photo: "",
    short: "Oila va meros ishlari bo'yicha ishonchli maslahatchi.",
    bio: [
      "Gulnora Islomova oila va meros nizolari bo'yicha 8 yillik tajribaga ega.",
      "U mijozlarga nozik oilaviy masalalarda vijdonan va maxfiylik bilan yondashadi.",
    ],
    education: [
      "Samarqand davlat universiteti (2016)",
    ],
    achievements: [
      "Mediatsiya bo'yicha malaka oshirgan",
    ],
    phone: "+998 91 012 34 56",
    email: "g.islomova@qalqon.uz",
    c1: "#2a1c3a",
    c2: "#b07cc6",
  },
  {
    slug: "shahzod-mirzayev",
    name: "Shahzod Mirzayev",
    title: "Korporativ va mehnat huquqi bo'yicha advokat",
    areas: ["biznes-huquqi", "mehnat-huquqi"],
    city: "Toshkent",
    experience: 10,
    languages: ["O'zbek", "Rus", "Ingliz"],
    rating: 4.8,
    casesWon: 160,
    photo: "",
    short: "Startaplar va IT-kompaniyalar uchun huquqiy hamroh.",
    bio: [
      "Shahzod Mirzayev texnologiya kompaniyalari va startaplarni huquqiy qo'llab-quvvatlashga ixtisoslashgan.",
      "U mehnat shartnomalari, intellektual mulk va investitsiya masalalarida yordam beradi.",
    ],
    education: [
      "Toshkent davlat yuridik universiteti (2014)",
    ],
    achievements: [
      "50+ startapga huquqiy yo'l-yo'riq",
    ],
    phone: "+998 90 123 45 00",
    email: "sh.mirzayev@qalqon.uz",
    c1: "#13233a",
    c2: "#4a90c2",
  },
  {
    slug: "zarina-komilova",
    name: "Zarina Komilova",
    title: "Ko'chmas mulk va soliq huquqi bo'yicha advokat",
    areas: ["kochmas-mulk", "soliq-huquqi"],
    city: "Buxoro",
    experience: 9,
    languages: ["O'zbek", "Rus"],
    rating: 4.6,
    casesWon: 100,
    photo: "",
    short: "Mulk bitimlari va soliq masalalarida amaliy yondashuv.",
    bio: [
      "Zarina Komilova ko'chmas mulk bitimlari va ular bilan bog'liq soliq masalalarida 9 yillik tajribaga ega.",
      "U mijozlarga bitimni soliq jihatidan optimal rasmiylashtirshda yordam beradi.",
    ],
    education: [
      "Toshkent davlat yuridik universiteti (2015)",
    ],
    achievements: [
      "200+ rasmiylashtirilgan bitim",
    ],
    phone: "+998 93 234 56 00",
    email: "z.komilova@qalqon.uz",
    c1: "#2a2415",
    c2: "#c8a24a",
  },
];

export const getLawyer = (slug: string) => LAWYERS.find((l) => l.slug === slug);
export const lawyersByArea = (areaSlug: string) =>
  LAWYERS.filter((l) => l.areas.includes(areaSlug));
export const featuredLawyers = () => LAWYERS.filter((l) => l.featured);
