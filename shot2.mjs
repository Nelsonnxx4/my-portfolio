import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage();
await page.setViewportSize({ width: 900, height: 500 });
await page.goto('http://localhost:5177/#top', { waitUntil: 'domcontentloaded' });
await page.waitForSelector('#top');
await page.waitForTimeout(1300); // right as arrowhead pops in, green phase
const el = await page.$('.hero-arrow');
await el.screenshot({ path: '/tmp/arrow_zoom.png' });
await browser.close();
