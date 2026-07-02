/**
 * Generates the site's visual assets (Claude-starburst style):
 *   public/favicon.svg          – orange tile + cream starburst
 *   public/apple-touch-icon.png – 180×180, square (iOS applies its own mask)
 *   public/icon-192.png / icon-512.png – PWA/manifest icons
 *   public/og.png               – 1200×630 Open Graph card
 *
 * Run: node scripts/gen-assets.mjs
 */
import sharp from 'sharp';
import { writeFile } from 'node:fs/promises';

const ORANGE = '#D97757'; // Claude terracotta
const CREAM = '#FAF9F5'; // ivory
const BONE = '#F0EEE6';
const SLATE = '#1F1E1D';
const MUTED = '#63615B';
const FAINT = '#8A887F';

/** Irregular 12-ray starburst, echoing Claude's mark. */
function burst(cx, cy, inner, outers, strokeW, color) {
  const jitter = [0, 4, -2, 3, -1, 4, -3, 2, -2, 3, -1, 2];
  const lines = [];
  for (let i = 0; i < 12; i++) {
    const a = ((i * 30 + jitter[i]) * Math.PI) / 180;
    const x1 = (cx + inner * Math.cos(a)).toFixed(2);
    const y1 = (cy + inner * Math.sin(a)).toFixed(2);
    const x2 = (cx + outers[i % outers.length] * Math.cos(a)).toFixed(2);
    const y2 = (cy + outers[i % outers.length] * Math.sin(a)).toFixed(2);
    lines.push(`<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"/>`);
  }
  return `<g stroke="${color}" stroke-width="${strokeW}" stroke-linecap="round">${lines.join('')}</g>`;
}

const FAV_OUTERS = [24, 18, 23, 17.5, 24, 19, 23, 17.5, 24, 18, 22.5, 19];

function tileSvg(rx) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
  <rect width="64" height="64" rx="${rx}" fill="${ORANGE}"/>
  ${burst(32, 32, 9, FAV_OUTERS, 4, CREAM)}
</svg>`;
}

const OG_OUTERS = FAV_OUTERS.map((o) => o * 5.3);
const ogSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="${CREAM}"/>
  <circle cx="280" cy="315" r="205" fill="${BONE}"/>
  ${burst(280, 315, 46, OG_OUTERS, 21, ORANGE)}
  <text x="530" y="190" font-family="Helvetica, Arial, sans-serif" font-size="25" font-weight="700" letter-spacing="8" fill="${ORANGE}">FUCK CLAUDE</text>
  <text x="525" y="280" font-family="Georgia, 'Times New Roman', serif" font-size="70" font-weight="700" fill="${SLATE}">Are you a Claude</text>
  <text x="525" y="370" font-family="Georgia, 'Times New Roman', serif" font-size="70" font-weight="700" font-style="italic" fill="${ORANGE}">“China user”?</text>
  <text x="530" y="442" font-family="Helvetica, Arial, sans-serif" font-size="25" fill="${MUTED}">Timezone · Language · Fonts · Locale</text>
  <text x="530" y="482" font-family="Helvetica, Arial, sans-serif" font-size="25" fill="${MUTED}">Checked 100% locally in your browser</text>
  <text x="530" y="556" font-family="Menlo, monospace" font-size="23" fill="${FAINT}">fuck-claude.vercel.app</text>
</svg>`;

const px = (svg, size) =>
  sharp(Buffer.from(svg), { density: 72 * (size / 64) }).resize(size, size);

await writeFile('public/favicon.svg', tileSvg(14) + '\n');
await px(tileSvg(0), 180).png().toFile('public/apple-touch-icon.png');
await px(tileSvg(14), 192).png().toFile('public/icon-192.png');
await px(tileSvg(14), 512).png().toFile('public/icon-512.png');
await sharp(Buffer.from(ogSvg)).png().toFile('public/og.png');

console.log('assets written to public/');
