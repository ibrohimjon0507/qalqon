/* =====================================================================
   ZIYOLILAR — Flipbook engine (dependency-free 3D page turn)
   Global: window.ZBook
   Relies on window.drawPortrait (defined in main.js) at build time.
   ===================================================================== */
(function () {
  "use strict";

  const ZBook = {
    built: false,
    sheets: [],
    current: 0,       // number of flipped sheets
    totalPages: 0,
    el: null,
    prevBtn: null,
    nextBtn: null,
    info: null
  };

  /* ---- soft paper-flip sound (synth, very quiet) ---- */
  let actx = null;
  function flipSound() {
    try {
      actx = actx || new (window.AudioContext || window.webkitAudioContext)();
      const dur = 0.18;
      const buf = actx.createBuffer(1, actx.sampleRate * dur, actx.sampleRate);
      const data = buf.getChannelData(0);
      for (let i = 0; i < data.length; i++) {
        const t = i / data.length;
        data[i] = (Math.random() * 2 - 1) * Math.pow(1 - t, 3) * 0.5;
      }
      const src = actx.createBufferSource(); src.buffer = buf;
      const g = actx.createGain(); g.gain.value = 0.06;
      const f = actx.createBiquadFilter(); f.type = "highpass"; f.frequency.value = 1200;
      src.connect(f); f.connect(g); g.connect(actx.destination);
      src.start();
    } catch (e) { /* audio optional */ }
  }

  /* ---- page content builders (return HTML string) ---- */
  function coverPage() {
    return `<div class="pg pg--cover">
      <svg class="cover-mark" viewBox="0 0 100 100" width="70" height="70" aria-hidden="true"><use href="#logo-mark"></use></svg>
      <span class="cover-sub">Buyuk arboblar kitobi</span>
      <span class="cover-line"></span>
      <h2>ZIYOLILAR</h2>
      <span class="cover-sub">Portretlar &amp; hikoyalar</span>
    </div>`;
  }
  function introPage(n) {
    return `<div class="pg pg--intro">
      <span class="pg__orn">❧</span>
      <h3>Muqaddima</h3>
      <p>Ushbu kitob tarixda o‘chmas iz qoldirgan davlat arboblari, mutafakkirlar va ziyolilarga bag‘ishlanadi. Har bir sahifada — bitta inson taqdiri, uning jasorati, ilmi va el-yurtga sadoqati haqida hikoya.</p>
      <p>Sahifalarni varaqlab, asrlar osha yetib kelgan merosga sayohat qiling.</p>
      <span class="pg__num">${n}</span>
    </div>`;
  }
  function portraitPage(fig, n) {
    return `<div class="pg pg--portrait">
      <div class="pg-portrait-media"><canvas data-portrait="${fig.id}" width="600" height="800"></canvas>
        <div class="pg-portrait-cap">
          <div class="pg-role">${fig.role}</div>
          <div class="pg-name">${fig.name}</div>
          <div class="pg-period">${fig.period} · ${fig.place}</div>
        </div>
      </div>
    </div>`;
  }
  function storyPage(fig, n) {
    const body = fig.story.map(p => `<p>${p}</p>`).join("");
    return `<div class="pg pg--story">
      <h4>${fig.name}</h4>
      <div class="pg-sub">${fig.short}</div>
      <div class="pg-body">${body}</div>
      <span class="pg__num">${n}</span>
    </div>`;
  }
  function endPage() {
    return `<div class="pg pg--end">
      <svg class="cover-mark" viewBox="0 0 100 100" width="56" height="56" aria-hidden="true"><use href="#logo-mark"></use></svg>
      <h3>TAMOM</h3>
      <p style="color:rgba(247,244,238,.7);font-size:.88rem;max-width:240px">Har bir inson — bir tarix.<br/>Rahmat!</p>
    </div>`;
  }
  function blankPage() { return `<div class="pg"></div>`; }

  /* ---- build pages list from figures ---- */
  function buildPages(figures) {
    const pages = [];
    pages.push({ kind: "cover" });
    pages.push({ kind: "intro" });
    figures.forEach(f => {
      pages.push({ kind: "portrait", fig: f });
      pages.push({ kind: "story", fig: f });
    });
    pages.push({ kind: "end" });
    if (pages.length % 2 !== 0) pages.push({ kind: "blank" });
    return pages;
  }

  function renderPage(page, pageNumber) {
    switch (page.kind) {
      case "cover": return coverPage();
      case "intro": return introPage(pageNumber);
      case "portrait": return portraitPage(page.fig, pageNumber);
      case "story": return storyPage(page.fig, pageNumber);
      case "end": return endPage();
      default: return blankPage();
    }
  }

  ZBook.build = function (figures) {
    this.el = document.getElementById("flipbook");
    this.prevBtn = document.getElementById("bookPrev");
    this.nextBtn = document.getElementById("bookNext");
    this.info = document.getElementById("bookPageInfo");
    if (!this.el) return;

    const pages = buildPages(figures);
    this.totalPages = pages.length;
    this.el.innerHTML = "";

    // static inside-cover on the left half
    const stat = document.createElement("div");
    stat.className = "flip-static";
    stat.innerHTML = `<div class="pg pg--end"><svg class="cover-mark" viewBox="0 0 100 100" width="48" height="48"><use href="#logo-mark"></use></svg><p style="color:rgba(247,244,238,.6);font-size:.8rem">ZIYOLILAR</p></div>`;
    this.el.appendChild(stat);

    const sheetCount = pages.length / 2;
    this.sheets = [];
    for (let i = 0; i < sheetCount; i++) {
      const sheet = document.createElement("div");
      sheet.className = "flip-sheet";
      const frontIndex = i * 2, backIndex = i * 2 + 1;
      sheet.innerHTML =
        `<div class="flip-face flip-face--front">${renderPage(pages[frontIndex], frontIndex + 1)}</div>` +
        `<div class="flip-face flip-face--back">${renderPage(pages[backIndex], backIndex + 1)}</div>`;
      this.el.appendChild(sheet);
      this.sheets.push(sheet);
    }

    // draw portrait canvases
    this.el.querySelectorAll("canvas[data-portrait]").forEach(cv => {
      const fig = figures.find(f => f.id === cv.getAttribute("data-portrait"));
      if (fig && typeof window.drawPortrait === "function") window.drawPortrait(cv, fig);
    });

    this.current = 0;
    this.updateStack();
    this.built = true;

    this.nextBtn.addEventListener("click", () => this.next());
    this.prevBtn.addEventListener("click", () => this.prev());
  };

  ZBook.updateStack = function () {
    const N = this.sheets.length;
    this.sheets.forEach((s, i) => {
      if (i < this.current) {
        s.classList.add("flipped");
        s.style.zIndex = i;            // flipped: later ones on top (left stack)
      } else {
        s.classList.remove("flipped");
        s.style.zIndex = 1000 - i;     // unflipped: next-to-turn on top (right stack)
      }
    });
    if (this.prevBtn) this.prevBtn.disabled = this.current === 0;
    if (this.nextBtn) this.nextBtn.disabled = this.current >= N;
    if (this.info) this.info.textContent = `${Math.min(this.current * 2 + 1, this.totalPages)} / ${this.totalPages}`;
  };

  ZBook.next = function () {
    if (this.current >= this.sheets.length) return;
    this.current++;
    this.updateStack();
    flipSound();
  };
  ZBook.prev = function () {
    if (this.current <= 0) return;
    this.current--;
    this.updateStack();
    flipSound();
  };

  ZBook.open = function () {
    const viewer = document.getElementById("bookViewer");
    if (!viewer) return;
    viewer.classList.add("is-open");
    viewer.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  };
  ZBook.close = function () {
    const viewer = document.getElementById("bookViewer");
    if (!viewer) return;
    viewer.classList.remove("is-open");
    viewer.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };
  ZBook.isOpen = function () {
    const viewer = document.getElementById("bookViewer");
    return viewer && viewer.classList.contains("is-open");
  };

  window.ZBook = ZBook;
})();
