// Generates the favicon / app icon set in public/ from the EduMap logo.
//
// sharp is not a project dependency. To regenerate:
//   npm install --no-save sharp
//   node scripts/generate-icons.mjs

import { writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = (path) => fileURLToPath(new URL(`../${path}`, import.meta.url));

const LOGO = root('src/assets/EduMap Logo 300dpi.png');
const NAVY = '#0f172a'; // Tailwind slate-900, the navbar colour
const PIN_SCALE = 0.7; // pin height as a share of the icon size
const CORNER_RADIUS = 0.22; // rounded corner as a share of the icon size

// Orange pin with the transparent margin trimmed off
const pin = await sharp(LOGO).trim().toBuffer();

// Navy square with the pin centred; rounded=false gives a full-bleed square
async function renderIcon(size, { rounded = true } = {}) {
    const radius = rounded ? Math.round(size * CORNER_RADIUS) : 0;
    const background = Buffer.from(
        `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}">
            <rect width="${size}" height="${size}" rx="${radius}" fill="${NAVY}"/>
        </svg>`
    );
    const box = Math.round(size * PIN_SCALE);
    const scaledPin = await sharp(pin).resize({ width: box, height: box, fit: 'inside' }).toBuffer();

    return sharp(background)
        .composite([{ input: scaledPin, gravity: 'center' }])
        .png()
        .toBuffer();
}

// ICO container holding a single PNG image (supported by all current browsers)
function pngToIco(png, size) {
    const header = Buffer.alloc(6);
    header.writeUInt16LE(0, 0); // reserved
    header.writeUInt16LE(1, 2); // type: icon
    header.writeUInt16LE(1, 4); // image count

    const entry = Buffer.alloc(16);
    entry.writeUInt8(size >= 256 ? 0 : size, 0); // width
    entry.writeUInt8(size >= 256 ? 0 : size, 1); // height
    entry.writeUInt8(0, 2); // palette size
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // colour planes
    entry.writeUInt16LE(32, 6); // bits per pixel
    entry.writeUInt32LE(png.length, 8); // image data size
    entry.writeUInt32LE(header.length + entry.length, 12); // image data offset

    return Buffer.concat([header, entry, png]);
}

const outputs = [
    ['public/favicon-16x16.png', await renderIcon(16)],
    ['public/favicon-32x32.png', await renderIcon(32)],
    ['public/favicon.ico', pngToIco(await renderIcon(32), 32)],
    // iOS applies its own rounded mask, so this one stays square
    ['public/apple-touch-icon.png', await renderIcon(180, { rounded: false })],
    ['public/icon-192.png', await renderIcon(192)],
    ['public/icon-512.png', await renderIcon(512)],
];

for (const [path, data] of outputs) {
    await writeFile(root(path), data);
    console.log(`wrote ${path} (${data.length} bytes)`);
}
