/* =====================================================================
   Canvas helpers: monogram portrait + photo-mosaic wall
   ===================================================================== */

export function initials(name: string): string {
  const parts = name.replace(/['’`]/g, "").split(/\s+/).filter(Boolean);
  let s = parts[0]?.[0] ?? "";
  if (parts[1]) s += parts[1][0];
  return s.toUpperCase();
}

function toRGB(hex: string) {
  let h = hex.replace("#", "");
  if (h.length === 3) h = h.split("").map((c) => c + c).join("");
  return {
    r: parseInt(h.slice(0, 2), 16),
    g: parseInt(h.slice(2, 4), 16),
    b: parseInt(h.slice(4, 6), 16),
  };
}
function hexA(hex: string, a: number) {
  const { r, g, b } = toRGB(hex);
  return `rgba(${r},${g},${b},${a})`;
}
const clampByte = (v: number) => Math.max(0, Math.min(255, v));
function shade(hex: string, pct: number) {
  let { r, g, b } = toRGB(hex);
  const f = pct / 100;
  r = clampByte(Math.round(r + r * f));
  g = clampByte(Math.round(g + g * f));
  b = clampByte(Math.round(b + b * f));
  return `rgb(${r},${g},${b})`;
}

function roundRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number
) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

export function drawPortrait(
  canvas: HTMLCanvasElement,
  opts: { name: string; c1?: string; c2?: string }
) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  const W = canvas.width;
  const H = canvas.height;
  const c1 = opts.c1 || "#13233a";
  const c2 = opts.c2 || "#c8a24a";

  const g = ctx.createLinearGradient(0, 0, W, H);
  g.addColorStop(0, c1);
  g.addColorStop(1, shade(c1, -18));
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, W, H);

  const rg = ctx.createRadialGradient(W * 0.5, H * 0.42, 20, W * 0.5, H * 0.42, W * 0.8);
  rg.addColorStop(0, hexA(c2, 0.28));
  rg.addColorStop(1, "rgba(0,0,0,0)");
  ctx.fillStyle = rg;
  ctx.fillRect(0, 0, W, H);

  ctx.fillStyle = "rgba(255,255,255,0.03)";
  for (let y = 20; y < H; y += 26) {
    for (let x = 20; x < W; x += 26) {
      ctx.beginPath();
      ctx.arc(x, y, 1.1, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  ctx.strokeStyle = hexA(c2, 0.55);
  ctx.lineWidth = 2.5;
  roundRect(ctx, 26, 26, W - 52, H - 52, 10);
  ctx.stroke();
  ctx.strokeStyle = hexA(c2, 0.25);
  ctx.lineWidth = 1.2;
  roundRect(ctx, 38, 38, W - 76, H - 76, 8);
  ctx.stroke();

  ctx.fillStyle = hexA(c2, 0.95);
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.font = "700 220px 'Playfair Display', Georgia, serif";
  ctx.shadowColor = "rgba(0,0,0,0.35)";
  ctx.shadowBlur = 24;
  ctx.shadowOffsetY = 10;
  ctx.fillText(initials(opts.name), W / 2, H * 0.46);
  ctx.shadowColor = "transparent";

  ctx.strokeStyle = hexA(c2, 0.6);
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(W / 2 - 54, H * 0.64);
  ctx.lineTo(W / 2 + 54, H * 0.64);
  ctx.stroke();
  ctx.fillStyle = hexA(c2, 0.9);
  ctx.beginPath();
  ctx.arc(W / 2, H * 0.64, 4, 0, Math.PI * 2);
  ctx.fill();

  const bg = ctx.createLinearGradient(0, H * 0.6, 0, H);
  bg.addColorStop(0, "rgba(0,0,0,0)");
  bg.addColorStop(1, "rgba(5,9,17,0.55)");
  ctx.fillStyle = bg;
  ctx.fillRect(0, H * 0.6, W, H * 0.4);
}

export function drawMosaic(canvas: HTMLCanvasElement, tile = 36) {
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const rect = canvas.getBoundingClientRect();
  const W = Math.max(rect.width, 320);
  const H = Math.max(rect.height, 320);
  canvas.width = W * dpr;
  canvas.height = H * dpr;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  ctx.scale(dpr, dpr);

  const palette = [
    "#13233a", "#1c2b45", "#294066", "#375d86", "#4a90c2",
    "#c8a24a", "#b78e38", "#e0c889", "#8a6d2f", "#5b6675",
    "#2a1c3a", "#0f2e2a", "#3a1c1c", "#59a6a0", "#efe9dd",
  ];
  const gap = 2;
  ctx.fillStyle = "#0b1320";
  ctx.fillRect(0, 0, W, H);
  for (let y = 0; y < H; y += tile) {
    for (let x = 0; x < W; x += tile) {
      ctx.fillStyle = palette[(Math.random() * palette.length) | 0];
      ctx.globalAlpha = 0.55 + Math.random() * 0.45;
      ctx.fillRect(x, y, tile - gap, tile - gap);
      if (Math.random() > 0.7) {
        ctx.globalAlpha = 0.18;
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(x + 3, y + 3, (tile - gap) * 0.5, (tile - gap) * 0.5);
      }
    }
  }
  ctx.globalAlpha = 1;
}
