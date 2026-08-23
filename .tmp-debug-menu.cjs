const { chromium } = require('playwright-core');
const { execSync } = require('child_process');
const fs = require('fs');
const os = require('os');
const path = require('path');

(async () => {
  const cacheDir = path.join(os.homedir(), 'AppData/Local/ms-playwright');
  const exe = path.join(cacheDir, 'chromium-1228', 'chrome-win64', 'chrome.exe');
  const browser = await chromium.launch({ executablePath: exe, headless: true });
  const page = await browser.newPage({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });
  await page.addInitScript(() => {
    try {
      localStorage.setItem('reelmark-state', JSON.stringify({ activeView: 'shows', profile: { displayName: 'Ritesh Ghost', username: '@yghosty' } }));
    } catch (e) {}
  });

  const errors = [];
  page.on('console', msg => { if (msg.type() === 'error') errors.push('console: ' + msg.text().slice(0, 200)); });
  page.on('pageerror', err => errors.push('pageerror: ' + String(err).slice(0, 300)));

  console.log('=== loading legacy app directly (mobile viewport, embedded) ===');
  await page.goto('https://tvnerd.netlify.app/legacy.html?embedded=1', { waitUntil: 'networkidle', timeout: 60000 }).catch(e => errors.push('goto: ' + e.message));

  await page.waitForTimeout(1500);
  console.log('url after load:', page.url());
  console.log('body classes:', await page.evaluate(() => document.body.className));
  console.log('auth gate hidden:', await page.evaluate(() => document.getElementById('auth-gate')?.classList.contains('hidden')));
  console.log('has app-shell:', await page.evaluate(() => !!document.querySelector('.app-shell')));
  console.log('has topbar:', await page.evaluate(() => !!document.querySelector('.topbar')));
  console.log('has sidebar:', await page.evaluate(() => !!document.querySelector('.sidebar')));
  console.log('has menu-toggle:', await page.evaluate(() => !!document.getElementById('menu-toggle')));
  console.log('body html length:', await page.evaluate(() => document.body.innerHTML.length));

  // Navigate to Library (My shows) via sidebar if visible, else bottom nav
  console.log('=== navigating to Library ===');
  const navTargets = await page.$$eval('[data-view="shows"]', els => els.map(e => ({ tag: e.tagName, cls: e.className, visible: !!(e.offsetWidth || e.offsetHeight) })));
  console.log('shows nav targets:', JSON.stringify(navTargets));
  const showsBtn = await page.$('.mobile-nav [data-view="shows"]') || await page.$('[data-view="shows"]');
  if (showsBtn) { await showsBtn.click(); await page.waitForTimeout(800); }
  await page.screenshot({ path: 'debug-library.png' });

  console.log('activeView state:', await page.evaluate(() => {
    try { return JSON.parse(localStorage.getItem('tvnerd-state') || '{}').activeView; } catch (e) { return 'n/a'; }
  }));
  const toggleVisible = await page.evaluate(() => {
    const t = document.getElementById('menu-toggle');
    if (!t) return 'no element';
    const r = t.getBoundingClientRect();
    return `visible=${r.width > 0 && r.height > 0} rect=${Math.round(r.x)},${Math.round(r.y)} ${Math.round(r.width)}x${Math.round(r.height)}`;
  });
  console.log('menu-toggle:', toggleVisible);

  console.log('=== clicking menu toggle ===');
  const before = await page.evaluate(() => document.body.className);
  await page.click('#menu-toggle', { timeout: 5000 }).catch(e => errors.push('click toggle: ' + e.message));
  await page.waitForTimeout(600);
  const after = await page.evaluate(() => document.body.className);
  const scrimHidden = await page.evaluate(() => document.getElementById('menu-scrim')?.hidden);
  const sidebarTransform = await page.evaluate(() => {
    const s = document.querySelector('.sidebar');
    return s ? getComputedStyle(s).transform : 'no sidebar';
  });
  console.log('before:', before);
  console.log('after:', after);
  console.log('scrim hidden:', scrimHidden, '| sidebar transform:', sidebarTransform);
  await page.screenshot({ path: 'debug-menu-open.png' });

  console.log('=== JS errors ===');
  console.log(errors.length ? errors.join('\n') : 'none');

  await browser.close();
})().catch(e => { console.error('FATAL:', e.message); process.exit(1); });
