/* =====================================================================
   ZIYOLILAR — main.js
   Portrait/mosaic rendering, hero slider, counters, grids, modal,
   book wiring, nav, scroll reveal, forms.
   ===================================================================== */
(function () {
  "use strict";

  const $  = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));

  /* ===============================================================
     PORTRAIT PLACEHOLDER (elegant monogram) — global for book.js
     =============================================================== */
  function initials(name) {
    const parts = name.replace(/[’'`]/g, "").split(/\s+/).filter(Boolean);
    let s = parts[0] ? parts[0][0] : "";
    if (parts[1]) s += parts[1][0];
    return s.toUpperCase();
  }

  window.drawPortrait = function (canvas, fig) {
    const ctx = canvas.getContext("2d");
    const W = canvas.width, H = canvas.height;
    const c1 = fig.c1 || "#13233a", c2 = fig.c2 || "#c8a24a";

    // base gradient
    const g = ctx.createLinearGradient(0, 0, W, H);
    g.addColorStop(0, c1);
    g.addColorStop(1, shade(c1, -18));
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, W, H);

    // soft radial glow in accent
    const rg = ctx.createRadialGradient(W * 0.5, H * 0.42, 20, W * 0.5, H * 0.42, W * 0.8);
    rg.addColorStop(0, hexA(c2, 0.28));
    rg.addColorStop(1, "rgba(0,0,0,0)");
    ctx.fillStyle = rg;
    ctx.fillRect(0, 0, W, H);

    // subtle dotted texture
    ctx.fillStyle = "rgba(255,255,255,0.03)";
    for (let y = 20; y < H; y += 26) {
      for (let x = 20; x < W; x += 26) {
        ctx.beginPath(); ctx.arc(x, y, 1.1, 0, Math.PI * 2); ctx.fill();
      }
    }

    // ornamental frame
    ctx.strokeStyle = hexA(c2, 0.55);
    ctx.lineWidth = 2.5;
    roundRect(ctx, 26, 26, W - 52, H - 52, 10); ctx.stroke();
    ctx.strokeStyle = hexA(c2, 0.25);
    ctx.lineWidth = 1.2;
    roundRect(ctx, 38, 38, W - 76, H - 76, 8); ctx.stroke();

    // monogram
    ctx.fillStyle = hexA(c2, 0.95);
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = "700 220px 'Playfair Display', Georgia, serif";
    ctx.shadowColor = "rgba(0,0,0,0.35)";
    ctx.shadowBlur = 24; ctx.shadowOffsetY = 10;
    ctx.fillText(initials(fig.name), W / 2, H * 0.46);
    ctx.shadowColor = "transparent";

    // small decorative divider under monogram
    ctx.strokeStyle = hexA(c2, 0.6);
    ctx.lineWidth = 2;
    ctx.beginPath(); ctx.moveTo(W / 2 - 54, H * 0.64); ctx.lineTo(W / 2 + 54, H * 0.64); ctx.stroke();
    ctx.fillStyle = hexA(c2, 0.9);
    ctx.beginPath(); ctx.arc(W / 2, H * 0.64, 4, 0, Math.PI * 2); ctx.fill();

    // bottom gradient for caption legibility
    const bg = ctx.createLinearGradient(0, H * 0.6, 0, H);
    bg.addColorStop(0, "rgba(0,0,0,0)");
    bg.addColorStop(1, "rgba(5,9,17,0.55)");
    ctx.fillStyle = bg;
    ctx.fillRect(0, H * 0.6, W, H * 0.4);
  };

  function roundRect(ctx, x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r);
    ctx.arcTo(x, y, x + w, y, r);
    ctx.closePath();
  }
  function hexA(hex, a) {
    const { r, g, b } = toRGB(hex);
    return `rgba(${r},${g},${b},${a})`;
  }
  function shade(hex, pct) {
    let { r, g, b } = toRGB(hex);
    const f = pct / 100;
    r = clamp(Math.round(r + r * f)); g = clamp(Math.round(g + g * f)); b = clamp(Math.round(b + b * f));
    return `rgb(${r},${g},${b})`;
  }
  function toRGB(hex) {
    hex = hex.replace("#", "");
    if (hex.length === 3) hex = hex.split("").map(c => c + c).join("");
    return { r: parseInt(hex.slice(0, 2), 16), g: parseInt(hex.slice(2, 4), 16), b: parseInt(hex.slice(4, 6), 16) };
  }
  const clamp = v => Math.max(0, Math.min(255, v));

  /* helper: create a portrait canvas element for a figure (used in cards) */
  function portraitCanvas(fig, w, h) {
    const cv = document.createElement("canvas");
    cv.width = w; cv.height = h;
    window.drawPortrait(cv, fig);
    return cv;
  }

  /* ===============================================================
     HERO PHOTO-MOSAIC (generated tile wall)
     =============================================================== */
  function drawMosaic(canvas, opts) {
    opts = opts || {};
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const rect = canvas.getBoundingClientRect();
    const W = Math.max(rect.width, 320), H = Math.max(rect.height, 320);
    canvas.width = W * dpr; canvas.height = H * dpr;
    const ctx = canvas.getContext("2d");
    ctx.scale(dpr, dpr);

    const palette = opts.palette || [
      "#13233a", "#1c2b45", "#294066", "#375d86", "#4a90c2",
      "#c8a24a", "#b78e38", "#e0c889", "#8a6d2f", "#5b6675",
      "#2a1c3a", "#0f2e2a", "#3a1c1c", "#59a6a0", "#efe9dd"
    ];
    const tile = opts.tile || 34;
    const gap = 2;
    ctx.fillStyle = "#0b1320";
    ctx.fillRect(0, 0, W, H);
    for (let y = 0; y < H; y += tile) {
      for (let x = 0; x < W; x += tile) {
        const col = palette[(Math.random() * palette.length) | 0];
        ctx.fillStyle = col;
        ctx.globalAlpha = 0.55 + Math.random() * 0.45;
        ctx.fillRect(x, y, tile - gap, tile - gap);
        // small inner highlight to mimic photos
        if (Math.random() > 0.7) {
          ctx.globalAlpha = 0.18;
          ctx.fillStyle = "#ffffff";
          ctx.fillRect(x + 3, y + 3, (tile - gap) * 0.5, (tile - gap) * 0.5);
        }
      }
    }
    ctx.globalAlpha = 1;
  }

  /* ===============================================================
     PRELOADER + YEAR
     =============================================================== */
  window.addEventListener("load", () => {
    const pre = $("#preloader");
    if (pre) setTimeout(() => pre.classList.add("is-hidden"), 500);
  });
  const yr = $("#year"); if (yr) yr.textContent = new Date().getFullYear();

  /* ===============================================================
     NAV
     =============================================================== */
  const nav = $("#nav");
  const burger = $("#burger");
  const navLinks = $("#navLinks");

  window.addEventListener("scroll", () => {
    nav.classList.toggle("is-scrolled", window.scrollY > 40);
    $("#toTop").classList.toggle("is-visible", window.scrollY > 500);
  });
  burger.addEventListener("click", () => {
    const open = nav.classList.toggle("menu-open");
    burger.setAttribute("aria-expanded", open ? "true" : "false");
  });
  $$("#navLinks a").forEach(a => a.addEventListener("click", () => {
    nav.classList.remove("menu-open");
    burger.setAttribute("aria-expanded", "false");
  }));
  $("#toTop").addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  /* ===============================================================
     HERO SLIDER
     =============================================================== */
  (function heroSlider() {
    const slides = $$(".hero__slide");
    const dotsWrap = $("#heroDots");
    let idx = 0, timer;
    slides.forEach((_, i) => {
      const b = document.createElement("button");
      b.setAttribute("aria-label", "Slayd " + (i + 1));
      if (i === 0) b.classList.add("is-active");
      b.addEventListener("click", () => go(i, true));
      dotsWrap.appendChild(b);
    });
    const dots = $$("#heroDots button");
    function go(n, manual) {
      slides[idx].classList.remove("is-active");
      dots[idx].classList.remove("is-active");
      idx = (n + slides.length) % slides.length;
      slides[idx].classList.add("is-active");
      dots[idx].classList.add("is-active");
      if (manual) restart();
    }
    function next() { go(idx + 1); }
    function prev() { go(idx - 1); }
    function restart() { clearInterval(timer); timer = setInterval(next, 6500); }
    $("#heroNext").addEventListener("click", () => { next(); restart(); });
    $("#heroPrev").addEventListener("click", () => { prev(); restart(); });
    restart();
  })();

  // mosaic backgrounds
  const mosaic = $("#mosaic");
  if (mosaic) drawMosaic(mosaic, { tile: 36 });
  let moResize;
  window.addEventListener("resize", () => {
    clearTimeout(moResize);
    moResize = setTimeout(() => { if (mosaic) drawMosaic(mosaic, { tile: 36 }); }, 250);
  });

  /* ===============================================================
     STATS COUNTER
     =============================================================== */
  (function stats() {
    const grid = $("#statsGrid");
    STATS.forEach(s => {
      const el = document.createElement("div");
      el.className = "stat reveal";
      el.innerHTML = `<div class="stat__num" data-target="${s.value}" data-format="${s.format || ''}" data-suffix="${s.suffix || ''}">0</div>
                      <div class="stat__label">${s.label}</div>`;
      grid.appendChild(el);
    });
    const nums = $$(".stat__num");
    let done = false;
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting && !done) { done = true; nums.forEach(countUp); }
      });
    }, { threshold: 0.4 });
    io.observe(grid);

    function countUp(el) {
      const target = +el.dataset.target;
      const suffix = el.dataset.suffix;
      const isK = el.dataset.format === "k";
      const dur = 1600, start = performance.now();
      function tick(now) {
        const p = Math.min((now - start) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        const val = Math.round(target * eased);
        el.textContent = (isK ? fmtK(val) : val.toLocaleString("en-US")) + suffix;
        if (p < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    }
    function fmtK(v) { return v >= 1000 ? (v / 1000).toFixed(v % 1000 === 0 ? 0 : 1) + "K" : v; }
  })();

  /* ===============================================================
     ABOUT portrait + mosaic
     =============================================================== */
  (function about() {
    const amos = $("#aboutMosaic");
    if (amos) drawMosaic(amos, { tile: 24 });
    const host = $("#aboutPortrait");
    if (host) {
      const fig = FIGURES.find(f => f.id === "ulugbek") || FIGURES[0];
      // large centered monogram framed in the mosaic
      host.style.cssText = "position:absolute;inset:0;display:grid;place-items:center;";
      const inner = document.createElement("div");
      inner.style.cssText = "width:58%;height:82%;border-radius:12px;overflow:hidden;box-shadow:0 20px 50px -20px rgba(0,0,0,.6);border:3px solid rgba(255,255,255,.18)";
      inner.appendChild(portraitCanvas(fig, 600, 800));
      inner.querySelector("canvas").style.cssText = "width:100%;height:100%;object-fit:cover";
      host.appendChild(inner);
    }
  })();

  /* ===============================================================
     FIGURES GRID
     =============================================================== */
  (function figuresGrid() {
    const grid = $("#figuresGrid");
    FIGURES.forEach((fig, i) => {
      const card = document.createElement("article");
      card.className = "fig-card reveal";
      card.setAttribute("data-delay", String((i % 4) + 1));
      card.setAttribute("role", "button");
      card.setAttribute("tabindex", "0");
      card.setAttribute("aria-label", fig.name + " — hikoyani ochish");

      const img = document.createElement("div");
      img.className = "fig-card__img";
      img.appendChild(portraitCanvas(fig, 600, 800));
      img.querySelector("canvas").style.cssText = "width:100%;height:100%;object-fit:cover";

      card.innerHTML =
        `<div class="fig-card__shade"></div>
         <svg class="fig-card__corner" viewBox="0 0 100 100" width="26" height="26"><use href="#logo-mark"></use></svg>
         <div class="fig-card__body">
           <div class="fig-card__role">${fig.role.split(",")[0]}</div>
           <h3 class="fig-card__name">${fig.name}</h3>
           <div class="fig-card__period">${fig.period}</div>
           <div class="fig-card__more">${fig.short}
             <span class="fig-card__read">Hikoyani o‘qish →</span>
           </div>
         </div>`;
      card.insertBefore(img, card.firstChild);
      card.addEventListener("click", () => openModal(fig));
      card.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openModal(fig); } });
      grid.appendChild(card);
    });
  })();

  /* ===============================================================
     MODAL (figure story)
     =============================================================== */
  const modal = $("#figureModal");
  function openModal(fig) {
    const body = $("#modalBody");
    const story = fig.story.map(p => `<p>${p}</p>`).join("");
    body.innerHTML =
      `<div class="m-hero">
         <div class="m-portrait" id="mPortrait"></div>
         <div>
           <div class="m-role">${fig.role}</div>
           <h2 class="m-name">${fig.name}</h2>
           <div class="m-meta">${fig.period} · ${fig.place}</div>
         </div>
       </div>
       <p class="m-short">${fig.short}</p>
       <div class="m-story">${story}</div>`;
    const ph = $("#mPortrait");
    ph.appendChild(portraitCanvas(fig, 600, 800));
    ph.querySelector("canvas").style.cssText = "width:100%;height:100%;object-fit:cover";
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }
  function closeModal() {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }
  $$("[data-close-modal]").forEach(el => el.addEventListener("click", closeModal));

  /* ===============================================================
     TESTIMONIALS CAROUSEL
     =============================================================== */
  (function testimonials() {
    const track = $("#tstTrack");
    const dotsWrap = $("#tstDots");
    let idx = 0, timer;
    TESTIMONIALS.forEach((t, i) => {
      const card = document.createElement("div");
      card.className = "tst-card";
      card.innerHTML = `<p class="tst-card__quote">${t.quote}</p>
        <div class="tst-card__author">${t.author}</div>
        <div class="tst-card__role">${t.role}</div>`;
      track.appendChild(card);
      const b = document.createElement("button");
      b.setAttribute("aria-label", "E'tirof " + (i + 1));
      if (i === 0) b.classList.add("is-active");
      b.addEventListener("click", () => go(i, true));
      dotsWrap.appendChild(b);
    });
    const dots = $$("#tstDots button");
    function go(n, manual) {
      idx = (n + TESTIMONIALS.length) % TESTIMONIALS.length;
      track.style.transform = `translateX(-${idx * 100}%)`;
      track.style.transition = "transform .6s cubic-bezier(.22,.61,.36,1)";
      track.firstElementChild && (track.style.display = "flex");
      track.style.transform = `translateX(-${idx * 100}%)`;
      dots.forEach((d, i) => d.classList.toggle("is-active", i === idx));
      if (manual) restart();
    }
    // make track slide via transform
    track.style.width = "100%";
    track.style.display = "flex";
    track.style.transition = "transform .6s cubic-bezier(.22,.61,.36,1)";
    $$(".tst-card", track).forEach(c => c.style.flex = "0 0 100%");
    function next() { go(idx + 1); }
    function restart() { clearInterval(timer); timer = setInterval(next, 6000); }
    $("#tstNext").addEventListener("click", () => { go(idx + 1); restart(); });
    $("#tstPrev").addEventListener("click", () => { go(idx - 1); restart(); });
    restart();
  })();

  /* ===============================================================
     STORIES (highlight cards)
     =============================================================== */
  (function stories() {
    const grid = $("#storiesGrid");
    const picks = HIGHLIGHT_IDS.map(id => FIGURES.find(f => f.id === id)).filter(Boolean);
    picks.forEach((fig, i) => {
      const card = document.createElement("article");
      card.className = "story-card reveal";
      card.setAttribute("data-delay", String(i + 1));
      const media = document.createElement("div");
      media.className = "story-card__media";
      media.appendChild(portraitCanvas(fig, 800, 550));
      media.querySelector("canvas").style.cssText = "width:100%;height:100%;object-fit:cover";
      card.appendChild(media);
      const body = document.createElement("div");
      body.className = "story-card__body";
      body.innerHTML =
        `<div class="story-card__meta"><span>${fig.role.split(",")[0]}</span><span>${fig.period}</span></div>
         <h3 class="story-card__title">${fig.name}</h3>
         <p class="story-card__text">${fig.short}</p>
         <span class="story-card__read">Batafsil o‘qish →</span>`;
      card.appendChild(body);
      card.addEventListener("click", () => openModal(fig));
      grid.appendChild(card);
    });
  })();

  /* ===============================================================
     BOOK wiring
     =============================================================== */
  if (window.ZBook) {
    ZBook.build(FIGURES);
    $$("[data-open-book]").forEach(el => {
      el.addEventListener("click", () => ZBook.open());
      el.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); ZBook.open(); } });
    });
    $$("[data-close-book]").forEach(el => el.addEventListener("click", () => ZBook.close()));
  }

  /* ===============================================================
     KEYBOARD (Esc / arrows)
     =============================================================== */
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") {
      if (ZBook && ZBook.isOpen()) ZBook.close();
      if (modal.classList.contains("is-open")) closeModal();
    }
    if (ZBook && ZBook.isOpen()) {
      if (e.key === "ArrowRight") ZBook.next();
      if (e.key === "ArrowLeft") ZBook.prev();
    }
  });

  /* ===============================================================
     FORMS (demo submit)
     =============================================================== */
  $("#contactForm").addEventListener("submit", e => {
    e.preventDefault();
    const f = e.target;
    if (!f.checkValidity()) { f.reportValidity(); return; }
    $("#formNote").hidden = false;
    f.reset();
    setTimeout(() => { $("#formNote").hidden = true; }, 5000);
  });
  $("#newsForm").addEventListener("submit", e => {
    e.preventDefault();
    if (!e.target.checkValidity()) { e.target.reportValidity(); return; }
    $("#newsThanks").hidden = false;
    e.target.reset();
    setTimeout(() => { $("#newsThanks").hidden = true; }, 5000);
  });

  /* ===============================================================
     SCROLL REVEAL
     =============================================================== */
  const revObserver = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("is-in"); revObserver.unobserve(e.target); } });
  }, { threshold: 0.12 });
  function observeReveals() { $$(".reveal:not(.is-in)").forEach(el => revObserver.observe(el)); }
  // sections that were static in HTML
  $$(".about__text, .about__media, .section__head, .stories__intro, .contact__find, .contact__form, .bookcta__text, .bookcta__visual")
    .forEach(el => el.classList.add("reveal"));
  observeReveals();

})();
