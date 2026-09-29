// Generates public/og-image.png (1200x630), the link preview image.
//
// sharp is not a project dependency. To regenerate:
//   npm install --no-save sharp
//   node scripts/generate-og-image.mjs

import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = (path) => fileURLToPath(new URL(`../${path}`, import.meta.url));

const LOGO = root('src/assets/EduMap Logo 300dpi.png');
const WIDTH = 1200;
const HEIGHT = 630;
const NAVY = '#0f172a'; // Tailwind slate-900, the navbar colour
const NAVY_LIGHT = '#1e293b'; // slate-800
const ORANGE = '#f97316'; // orange-500, the site's button colour
const FONT = "'Helvetica Neue', Helvetica, Arial, sans-serif";

const PIN_HEIGHT = 380;
const TEXT_X = 500;

const background = Buffer.from(`
<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}">
    <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="${NAVY}"/>
            <stop offset="1" stop-color="${NAVY_LIGHT}"/>
        </linearGradient>
    </defs>
    <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#bg)"/>
    <rect x="0" y="${HEIGHT - 12}" width="${WIDTH}" height="12" fill="${ORANGE}"/>

    <text x="${TEXT_X}" y="275" font-family="${FONT}" font-size="124" font-weight="700" fill="#ffffff">EduMap</text>
    <rect x="${TEXT_X + 4}" y="308" width="120" height="8" rx="4" fill="${ORANGE}"/>
    <text font-family="${FONT}" font-size="46" fill="#e2e8f0">
        <tspan x="${TEXT_X}" y="390">Find mentors for your</tspan>
        <tspan x="${TEXT_X}" y="448">university journey</tspan>
    </text>
    <text x="${TEXT_X}" y="535" font-family="${FONT}" font-size="28" fill="#94a3b8">edumap.daniel-liu.dev</text>
</svg>`);

const pin = await sharp(LOGO).trim().resize({ height: PIN_HEIGHT }).toBuffer();
const { width: pinWidth } = await sharp(pin).metadata();

await sharp(background)
    .composite([{
        input: pin,
        left: Math.round((TEXT_X - pinWidth) / 2),
        top: Math.round((HEIGHT - PIN_HEIGHT) / 2),
    }])
    .png()
    .toFile(root('public/og-image.png'));

console.log('wrote public/og-image.png');
