import sharp from "sharp";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const src = join(__dirname, "..", "public", "logo-ref.jpg");
const dst = join(__dirname, "..", "public", "logo.png");

const { data, info } = await sharp(src)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const { width, height } = info;

// Pass 1 — build alpha from inverted luminosity.
// Lower gamma (1.3 vs 1.8) so thinner/lighter marks like "DEFINED" don't vanish.
// Remap dark marks to pure black, preserve red "?".
for (let i = 0; i < data.length; i += 4) {
  const r = data[i];
  const g = data[i + 1];
  const b = data[i + 2];

  const lum = 0.299 * r + 0.587 * g + 0.114 * b;

  // Inverted luminance → alpha basis
  let raw = (255 - lum) / 255;
  raw = Math.pow(raw, 1.3); // gentler curve — keeps mid-tones
  const alpha = Math.round(Math.min(255, Math.max(0, raw * 255)));

  // Detect red pixels (the "?" mark)
  const isRed = r > 100 && r > g * 1.4 && r > b * 1.4 && r - g > 30;

  if (alpha > 8) {
    if (isRed) {
      data[i] = Math.min(255, r + 30);
      data[i + 1] = Math.max(0, g - 10);
      data[i + 2] = Math.max(0, b - 10);
    } else {
      // White — visible against dark #262626 background
      data[i] = 255;
      data[i + 1] = 255;
      data[i + 2] = 255;
    }
  }

  data[i + 3] = alpha;
}

// Helper
function getAlpha(buf, x, y) {
  if (x < 0 || x >= width || y < 0 || y >= height) return 0;
  return buf[(y * width + x) * 4 + 3];
}

function setAlpha(buf, x, y, a) {
  buf[(y * width + x) * 4 + 3] = a;
}

// Pass 2 — dilation (run twice for 2px total expansion)
function dilatePass(srcBuf, dstBuf) {
  srcBuf.copy(dstBuf);

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * 4;
      const currentAlpha = srcBuf[idx + 3];

      if (currentAlpha > 100) continue;

      let maxNeighbor = 0;
      let bestNx = 0, bestNy = 0;
      for (let dy = -1; dy <= 1; dy++) {
        for (let dx = -1; dx <= 1; dx++) {
          if (dx === 0 && dy === 0) continue;
          const na = getAlpha(srcBuf, x + dx, y + dy);
          if (na > maxNeighbor) {
            maxNeighbor = na;
            bestNx = dx;
            bestNy = dy;
          }
        }
      }

      if (maxNeighbor > 150) {
        const nidx = ((y + bestNy) * width + (x + bestNx)) * 4;
        dstBuf[idx] = srcBuf[nidx];
        dstBuf[idx + 1] = srcBuf[nidx + 1];
        dstBuf[idx + 2] = srcBuf[nidx + 2];
        setAlpha(dstBuf, x, y, Math.round(maxNeighbor * 0.7));
      }
    }
  }
}

const pass1 = Buffer.alloc(data.length);
dilatePass(data, pass1);

const pass2 = Buffer.alloc(data.length);
dilatePass(pass1, pass2);

await sharp(pass2, { raw: info }).png().toFile(dst);
console.log(`Done → logo.png (${width}x${height})`);
