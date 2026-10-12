/* =====================================================================
   ZIYOLILAR — Arboblar ma'lumotlar bazasi
   ---------------------------------------------------------------------
   Yangi arbob qo'shish uchun shu ro'yxatga yangi obyekt qo'shing.
   Maydonlar:
     id      - noyob qisqa nom (lotin, bo'sh joysiz)
     name    - Ism Familiya
     role    - kasbi / lavozimi (masalan: "Davlat arbobi, sarkarda")
     period  - yashagan davri yoki yillari
     place   - joyi / mamlakati
     short   - bitta qatorli qisqa ta'rif
     story   - to'liq hikoya (paragraflar massiv ko'rinishida)
     image   - rasm manzili (masalan: "assets/photos/temur.jpg").
               Bo'sh qoldirilsa, chiroyli monogramli placeholder chiziladi.
     c1, c2  - placeholder gradient ranglari (ixtiyoriy)
   ===================================================================== */

const FIGURES = [
  {
    id: "amir-temur",
    name: "Amir Temur",
    role: "Sohibqiron, davlat arbobi, sarkarda",
    period: "1336 – 1405",
    place: "Shahrisabz / Samarqand",
    short: "Buyuk Temuriylar saltanatiga asos solgan sohibqiron.",
    story: [
      "Amir Temur — jahon tarixidagi eng yirik davlat arboblaridan biri. U tarqoq va o‘zaro urushlardan charchagan Movarounnahrni yagona markazlashgan davlat ostida birlashtirdi va poytaxti Samarqandni dunyoning eng go‘zal shaharlaridan biriga aylantirdi.",
      "Uning davrida ilm-fan, me’morchilik va savdo gullab-yashnadi. Bibixonim masjidi, Go‘ri Amir maqbarasi kabi obidalar bugungi kungacha uning saltanati shuhratidan darak berib turibdi.",
      "“Kuch — adolatda” shiori ostida qurilgan davlat tartib-intizomi keyingi asrlar uchun ham namuna bo‘lib qoldi."
    ],
    image: "",
    c1: "#1c2b45", c2: "#c8a24a"
  },
  {
    id: "ulugbek",
    name: "Mirzo Ulug‘bek",
    role: "Astronom, matematik, davlat arbobi",
    period: "1394 – 1449",
    place: "Samarqand",
    short: "Samarqand rasadxonasini bunyod etgan olim-hukmdor.",
    story: [
      "Mirzo Ulug‘bek — Amir Temurning nabirasi, ham davlat arbobi, ham dunyoga tanilgan astronom. U Samarqandda o‘z davrining eng ilg‘or rasadxonasini qurdirdi.",
      "Uning rahbarligida tuzilgan “Ziji Jadidi Ko‘ragoniy” yulduz jadvali asrlar davomida Yevropa olimlari uchun ham asosiy manba bo‘lib xizmat qildi.",
      "“Ilm-ma’rifat — insoniyat ziynati” degan e’tiqod bilan u hukmronlikni ilmga xizmat qildirgan noyob arbob edi."
    ],
    image: "",
    c1: "#13233a", c2: "#4a90c2"
  },
  {
    id: "navoiy",
    name: "Alisher Navoiy",
    role: "Shoir, mutafakkir, davlat arbobi",
    period: "1441 – 1501",
    place: "Hirot",
    short: "O‘zbek adabiy tilining asoschisi, buyuk mutafakkir.",
    story: [
      "Alisher Navoiy — turkiy adabiyotning eng yorqin siymosi, o‘zbek adabiy tilini yuksak cho‘qqiga ko‘targan shoir va mutafakkir. U ayni paytda Hirot saroyida davlat arbobi sifatida ham xizmat qilgan.",
      "“Xamsa” besh dostoni, “Xazoyin ul-maoniy” devonlari orqali u inson qalbining eng nozik tuyg‘ularini so‘zga aylantira oldi.",
      "Navoiy madrasalar, shifoxonalar, ko‘priklar qurdirib, el-yurt farovonligi uchun shaxsiy mablag‘ini ayamadi."
    ],
    image: "",
    c1: "#0f2e2a", c2: "#c8a24a"
  },
  {
    id: "bobur",
    name: "Zahiriddin Muhammad Bobur",
    role: "Sarkarda, shoir, Boburiylar asoschisi",
    period: "1483 – 1530",
    place: "Andijon / Hindiston",
    short: "“Boburnoma” muallifi, Boburiylar saltanati asoschisi.",
    story: [
      "Bobur — Andijonda tug‘ilgan sarkarda va shoir. U Hindistonda uch asrdan ortiq hukm surgan Boburiylar saltanatiga asos soldi.",
      "Uning “Boburnoma” asari jahon memuar adabiyotining eng samimiy va aniq namunalaridan biri sifatida tan olingan.",
      "Qilich bilan birga qalamni ham mohirona boshqargan Bobur avlodlarga adabiy va tarixiy noyob meros qoldirdi."
    ],
    image: "",
    c1: "#2a1c3a", c2: "#b07cc6"
  },
  {
    id: "beruniy",
    name: "Abu Rayhon Beruniy",
    role: "Qomusiy olim, astronom, geograf",
    period: "973 – 1048",
    place: "Xorazm",
    short: "Yer radiusini o‘lchagan buyuk qomusiy olim.",
    story: [
      "Beruniy — astronomiya, geografiya, matematika, tarix va mineralogiya sohalarida 150 dan ortiq asar yozgan qomusiy olim.",
      "U Yer sharining radiusini hayratlanarli aniqlikda hisoblab chiqdi va Hindiston madaniyati haqida “Hindiston” nomli noyob asar qoldirdi.",
      "Uning ilmiy xolisligi va dalilga asoslangan yondashuvi zamonaviy fan uslubiga yaqin edi."
    ],
    image: "",
    c1: "#1a2e3a", c2: "#59a6a0"
  },
  {
    id: "ibn-sino",
    name: "Abu Ali ibn Sino",
    role: "Tabib, faylasuf, olim",
    period: "980 – 1037",
    place: "Buxoro",
    short: "Jahon tabobati otasi, “Al-Qonun fit-tib” muallifi.",
    story: [
      "Ibn Sino — Yevropada “Avitsenna” nomi bilan mashhur bo‘lgan buyuk tabib va faylasuf. Uning “Al-Qonun fit-tib” asari olti asr davomida dunyo tibbiyot maktablarida asosiy darslik bo‘lgan.",
      "U tibbiyotdan tashqari falsafa, mantiq, musiqa va astronomiyada ham chuqur iz qoldirdi.",
      "“Sog‘liq — eng katta boylik” g‘oyasi uning butun ijodidan qizil ip bo‘lib o‘tadi."
    ],
    image: "",
    c1: "#13233a", c2: "#c8a24a"
  },
  {
    id: "xorazmiy",
    name: "Muhammad al-Xorazmiy",
    role: "Matematik, algebra asoschisi",
    period: "783 – 850",
    place: "Xorazm / Bag‘dod",
    short: "“Algoritm” va “algebra” atamalariga nom bergan olim.",
    story: [
      "Al-Xorazmiy — algebra fanining asoschisi. Uning nomidan “algoritm” atamasi, asaridagi “al-jabr” so‘zidan esa “algebra” kelib chiqqan.",
      "U hind raqamlari va o‘nlik sanoq tizimini ilmiy asoslab, uni dunyoga tarqatishda hal qiluvchi rol o‘ynadi.",
      "Bugungi zamonaviy kompyuter fanlari aynan uning g‘oyalariga tayanadi."
    ],
    image: "",
    c1: "#1c2b45", c2: "#4a90c2"
  },
  {
    id: "fargoniy",
    name: "Ahmad al-Farg‘oniy",
    role: "Astronom, muhandis",
    period: "798 – 861",
    place: "Farg‘ona",
    short: "Yer egriligini aniqlagan mashhur astronom.",
    story: [
      "Al-Farg‘oniy — o‘rta asrlarning eng nufuzli astronomlaridan biri. Uning astronomiya bo‘yicha asarlari lotin tiliga tarjima qilinib, Yevropa fani rivojiga katta ta’sir ko‘rsatdi.",
      "U Nil daryosidagi mashhur “Miqyos” suv o‘lchagich inshootini loyihalashtirgan muhandis sifatida ham tanilgan.",
      "Dante uning asarlaridan ilhomlangani ma’lum — bu uning ta’siri qanchalik keng bo‘lganini ko‘rsatadi."
    ],
    image: "",
    c1: "#2a2415", c2: "#c8a24a"
  },
  {
    id: "qoshgariy",
    name: "Mahmud Qoshg‘ariy",
    role: "Tilshunos, qomusiy olim",
    period: "1029 – 1101",
    place: "Qashqar",
    short: "“Devonu lug‘otit turk” asarini yaratgan tilshunos.",
    story: [
      "Mahmud Qoshg‘ariy — turkiy xalqlar tili va madaniyatining birinchi qomusi bo‘lmish “Devonu lug‘otit turk” asarining muallifi.",
      "U turkiy qabilalar yashaydigan hududlarni kezib chiqib, so‘zlar, maqollar va ilk xaritani jamladi.",
      "Uning mehnati tufayli XI asr turkiy dunyosi haqidagi bebaho ma’lumotlar bizgacha yetib keldi."
    ],
    image: "",
    c1: "#1a2e2a", c2: "#59a6a0"
  },
  {
    id: "manguberdi",
    name: "Jaloliddin Manguberdi",
    role: "Sarkarda, vatan himoyachisi",
    period: "1198 – 1231",
    place: "Urganch",
    short: "Mo‘g‘ul istilosiga qarshi kurashgan jasur sarkarda.",
    story: [
      "Jaloliddin Manguberdi — Xorazmshohlar davlatining so‘nggi sultoni, mo‘g‘ul bosqiniga qarshi tengsiz jasorat bilan kurashgan sarkarda.",
      "U Parvon jangida mo‘g‘ullarga ilk bor katta mag‘lubiyat keltirib, mahalliy xalqlar qalbida ozodlik umidini uyg‘otdi.",
      "Uning nomi vatanparvarlik va mardlik ramzi sifatida asrlar osha hurmat bilan tilga olinadi."
    ],
    image: "",
    c1: "#3a1c1c", c2: "#c0392b"
  },
  {
    id: "forobiy",
    name: "Abu Nasr Forobiy",
    role: "Faylasuf, “Ikkinchi muallim”",
    period: "873 – 950",
    place: "Forob / Bag‘dod",
    short: "Sharq falsafasining asoschilaridan, “Ikkinchi muallim”.",
    story: [
      "Forobiy — Aristoteldan keyin “Ikkinchi muallim” unvoniga sazovor bo‘lgan buyuk faylasuf.",
      "U falsafa, mantiq, musiqa va siyosat nazariyasi bo‘yicha asarlar yozib, “Fozil shahar” g‘oyasi orqali adolatli jamiyat tasavvurini ilgari surdi.",
      "Uning musiqa nazariyasiga oid asarlari ham o‘z davrining noyob kashfiyoti edi."
    ],
    image: "",
    c1: "#13233a", c2: "#4a90c2"
  },
  {
    id: "buxoriy",
    name: "Imom al-Buxoriy",
    role: "Muhaddis, olim",
    period: "810 – 870",
    place: "Buxoro",
    short: "“Al-Jome’ as-Sahih” hadislar to‘plami muallifi.",
    story: [
      "Imom al-Buxoriy — islom olamida eng nufuzli muhaddislardan biri. U yuz minglab hadislarni to‘plab, ularni qat’iy mezonlar asosida sinchkovlik bilan tekshirdi.",
      "Uning “Al-Jome’ as-Sahih” to‘plami ishonchliligi bo‘yicha eng yuqori manbalardan biri sanaladi.",
      "Uning halollik va aniqlikka asoslangan ilmiy uslubi keyingi avlodlarga namuna bo‘ldi."
    ],
    image: "",
    c1: "#1a2a1a", c2: "#8aa35a"
  }
];

/* So'nggi hikoyalar bo'limi uchun tanlab olinadigan arboblar (id bo'yicha) */
const HIGHLIGHT_IDS = ["amir-temur", "navoiy", "ibn-sino"];

/* Testimonials / e'tiroflar */
const TESTIMONIALS = [
  {
    quote: "Bu loyiha ajdodlarimiz merosini zamonaviy va nafis shaklda avlodlarga yetkazmoqda. Har bir sahifa — tarix bilan jonli muloqot.",
    author: "Akademik tarix instituti",
    role: "Ilmiy hamkor"
  },
  {
    quote: "Portretlar va hikoyalar shu qadar puxta jamlanganki, sayt haqiqiy raqamli muzeyga aylangan. Dizayni jahon darajasida.",
    author: "Madaniyat jamg‘armasi",
    role: "Direktor"
  },
  {
    quote: "Onlayn kitob g‘oyasi — ayni muddao. Yoshlar endi buyuk arboblar hayotini qiziqish bilan varaqlab o‘qiydi.",
    author: "Ta’lim markazi",
    role: "Metodist"
  }
];

/* Statistika raqamlari (animatsion sanagich) */
const STATS = [
  { value: 120, suffix: "+", label: "Arboblar" },
  { value: 250, suffix: "+", label: "Hikoyalar" },
  { value: 1000, suffix: "+", label: "Yillik meros" },
  { value: 500000, suffix: "+", label: "O‘quvchilar", format: "k" }
];
