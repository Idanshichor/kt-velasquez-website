// Builds the 1200x630 social share images (src/app/**/opengraph-image.jpg + twitter-image.jpg)
// and the favicons (src/app/icon.png, src/app/apple-icon.png).
// Run: node scripts/og-images.mjs   (needs Playwright's Chromium: npx playwright install chromium)
import { createRequire } from "module";
import { writeFileSync, readFileSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { execSync } from "child_process";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const require = createRequire(path.join(root, "package.json"));
const sharp = require("sharp");
// Playwright is not a project dependency: use a local copy if present, else the global one.
const loadPw = () => { try { return require("playwright"); } catch { return createRequire(execSync("npm root -g").toString().trim() + "/")("playwright"); } };
const { chromium } = loadPw();

const img = (n) => "data:image/webp;base64," + readFileSync(path.join(root, "public/images", n)).toString("base64");
const logo = img("KT_LOGO.webp");

const pages = [
  { dir: "", photo: "KT_About_Hero.webp", pos: "50% 30%", eyebrow: "Estratega 360°", title: "Consultoría Estratégica 360", sub: "Estructura, comunicación y mentalidad para fundadores y marcas que quieren escalar con claridad.", alt: "Katherine Velasquez, Consultoría Estratégica 360" },
  { dir: "sobre-mi", photo: "KTSecondPhoto.webp", pos: "60% 22%", size: "150%", eyebrow: "Sobre mí", title: "Mi historia", sub: "De ingeniera civil y emprendedora a estratega de negocios y marcas personales.", alt: "Katherine Velasquez con blazer blanco, sentada en un estudio" },
  { dir: "servicios", photo: "KT_Studio_Pink.webp", pos: "50% 24%", size: "175%", eyebrow: "Servicios", title: "Mentoría, consultoría y talleres", sub: "Marca personal, consultoría 1:1 para empresas y startups, y talleres in-company.", alt: "Katherine Velasquez con blazer rosado en un estudio" },
  { dir: "podcast", photo: "KT_Podcast_Katherine.webp", pos: "45% 14%", size: "165%", eyebrow: "Podcast", title: "Estrategia 360", sub: "Sin pelos en la lengua. Conversaciones honestas para CEOs, fundadores y emprendedores.", alt: "Katherine Velasquez, host del podcast Estrategia 360" },
  { dir: "privacidad", photo: "KT_Studio_Grey.webp", pos: "50% 14%", size: "170%", eyebrow: "Legal", title: "Política de Privacidad", sub: "Tratamiento de datos personales según la Ley 1581 de 2012 de Colombia.", alt: "Katherine Velasquez, Política de Privacidad" },
];

const html = (p) => `<!doctype html><html><head><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Playfair+Display:wght@600&display=block" rel="stylesheet">
<style>
*{margin:0;box-sizing:border-box}
body{width:1200px;height:630px;display:flex;background:#fff;font-family:Inter,sans-serif;color:#1A1A1A;overflow:hidden}
.l{flex:0 0 700px;padding:56px 64px;display:flex;flex-direction:column;position:relative}
.l::before{content:"";position:absolute;left:0;top:0;bottom:0;width:10px;background:#FFB4C8}
.logo{width:108px}
.mid{margin-top:auto;margin-bottom:auto}
.eb{display:flex;align-items:center;gap:14px;font-size:17px;font-weight:700;letter-spacing:.3em;text-transform:uppercase;color:#8F6A2A}
.eb::before{content:"";width:4px;height:26px;border-radius:2px;background:#FFB4C8}
h1{font-family:"Playfair Display",serif;font-weight:600;font-size:${p.title.length > 24 ? 58 : 68}px;line-height:1.08;margin:22px 0 22px;letter-spacing:-.01em}
p{font-size:25px;line-height:1.45;color:#444;max-width:560px}
.url{font-size:18px;font-weight:600;letter-spacing:.12em;color:#1A1A1A}
.url b{color:#FFB4C8;font-size:26px;vertical-align:-1px}
.r{flex:1;background:url(${img(p.photo)}) ${p.pos}/${p.size || "cover"} no-repeat;border-left:1px solid #eee}
</style></head><body>
<div class="l"><img class="logo" src="${logo}"><div class="mid"><div class="eb">${p.eyebrow}</div><h1>${p.title}</h1><p>${p.sub}</p></div><div class="url">KTVELASQUEZ<b>.</b>COM</div></div>
<div class="r"></div></body></html>`;

const browser = await chromium.launch().catch(() => chromium.launch({ channel: "chrome" }));
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
for (const p of pages) {
  await page.setContent(html(p), { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  const png = await page.screenshot({ type: "png" });
  const jpg = await sharp(png).jpeg({ quality: 82, mozjpeg: true }).toBuffer();
  const out = path.join(root, "src/app", p.dir);
  for (const name of ["opengraph-image", "twitter-image"]) {
    writeFileSync(path.join(out, `${name}.jpg`), jpg);
    writeFileSync(path.join(out, `${name}.alt.txt`), p.alt);
  }
  console.log(p.dir || "/", Math.round(jpg.length / 1024) + "KB");
}
await browser.close();

// Favicons: the "KT." mark from the logo (no wordmark), centred on white.
const mark = await sharp(path.join(root, "public/images/KT_LOGO.webp")).extract({ left: 0, top: 0, width: 322, height: 190 }).toBuffer().then((b) => sharp(b).trim().toBuffer());
const square = async (size, pad) => {
  const inner = Math.round(size * (1 - pad * 2));
  const m = await sharp(mark).resize(inner, inner, { fit: "inside" }).toBuffer();
  return sharp({ create: { width: size, height: size, channels: 4, background: "#ffffff" } })
    .composite([{ input: m, gravity: "center" }]).png().toBuffer();
};
const icon = async (size, pad, file) => {
  const inner = Math.round(size * (1 - pad * 2));
  const m = await sharp(mark).resize(inner, inner, { fit: "inside" }).toBuffer();
  await sharp({ create: { width: size, height: size, channels: 4, background: "#ffffff" } })
    .composite([{ input: m, gravity: "center" }]).png().toFile(path.join(root, "src/app", file));
  console.log(file, size);
};
await icon(512, 0.1, "icon.png");
await icon(180, 0.14, "apple-icon.png");

// favicon.ico for browsers that ask for it directly: an ICO file holding 16/32/48 PNGs.
const sizes = [16, 32, 48];
const pngs = await Promise.all(sizes.map((n) => square(n, 0.06)));
const head = Buffer.alloc(6 + 16 * sizes.length);
head.writeUInt16LE(0, 0); head.writeUInt16LE(1, 2); head.writeUInt16LE(sizes.length, 4);
let offset = head.length;
sizes.forEach((n, i) => {
  const e = 6 + 16 * i;
  head.writeUInt8(n, e); head.writeUInt8(n, e + 1); head.writeUInt16LE(1, e + 4); head.writeUInt16LE(32, e + 6);
  head.writeUInt32LE(pngs[i].length, e + 8); head.writeUInt32LE(offset, e + 12);
  offset += pngs[i].length;
});
writeFileSync(path.join(root, "src/app/favicon.ico"), Buffer.concat([head, ...pngs]));
console.log("favicon.ico", sizes.join("/"));
