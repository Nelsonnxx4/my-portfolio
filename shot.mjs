import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage();
await page.setViewportSize({ width: 900, height: 500 });
const errors = [];
page.on('console', msg => { if (msg.type() === 'error') errors.push(msg.text()); });
await page.goto('http://localhost:5177/#top', { waitUntil: 'domcontentloaded' });
await page.waitForSelector('#top');
await page.waitForTimeout(2200); // let draw-in + pop-in settle
await page.screenshot({ path: '/tmp/hero_arrow.png', clip: { x: 0, y: 0, width: 900, height: 320 } });
console.log('errors:', JSON.stringify(errors));
await browser.close();
