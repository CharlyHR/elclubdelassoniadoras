import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const url      = process.argv[2] || 'http://127.0.0.1:5500';
const filename = process.argv[3] || 'screenshot';

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();

  // Desktop viewport
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });

  // Wait a moment for animations to settle
  await new Promise(r => setTimeout(r, 1200));

  const outPath = path.join(__dirname, 'temporary-screenshots', `${filename}-desktop.png`);
  await page.screenshot({ path: outPath, fullPage: true });
  console.log('Desktop screenshot saved:', outPath);

  // Mobile viewport
  await page.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true });
  await page.reload({ waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 1000));

  const mobileOut = path.join(__dirname, 'temporary-screenshots', `${filename}-mobile.png`);
  await page.screenshot({ path: mobileOut, fullPage: true });
  console.log('Mobile screenshot saved:', mobileOut);

  await browser.close();
})();
