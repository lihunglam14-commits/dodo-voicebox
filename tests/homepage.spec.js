import { expect, test } from "@playwright/test";

import { HERO } from "../content.js";

test.beforeEach(async ({ context, baseURL }) => {
  // The release check serves the built site locally, including when offline.
  const origin = new URL(baseURL).origin;
  await context.route("**/*", (route) =>
    new URL(route.request().url()).origin === origin ? route.continue() : route.abort()
  );
});

test("English and simplified Chinese survive reopening and unavailable storage", async ({ page }) => {
  await page.addInitScript(() => {
    for (const name of ["localStorage", "sessionStorage"]) {
      Object.defineProperty(window, name, {
        get() { throw new DOMException("Storage disabled for this test", "SecurityError"); },
      });
    }
  });
  await page.goto("./");
  for (const [label, code, lang] of [
    ["English", "en", "EN"],
    ["Simplified Chinese", "zh-Hans", "SC"],
  ]) {
    const selection = page.getByRole("button", { name: label, exact: true });
    await selection.click();
    await expect(selection).toHaveAttribute("aria-pressed", "true");
    await expect(page.locator("html")).toHaveAttribute("lang", code);
    expect(new URL(page.url()).searchParams.get("lang")).toBeTruthy();
    await page.reload();
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(HERO.h1[lang]);
    await expect(selection).toHaveAttribute("aria-pressed", "true");
    await expect(page.locator("html")).toHaveAttribute("lang", code);
  }
});

test("desktop chapter links and all hero and timeline anchors have real targets", async ({ page }) => {
  await page.goto("./?lang=en");
  const nav = page.getByRole("navigation", { name: "Main navigation" });
  await expect(nav.getByRole("link")).toHaveCount(4);
  const links = page.locator(".brand, .nav a, .hero .btn.secondary, .heroChips a, .milestoneLink");
  await expect(links).toHaveCount(10);
  for (const link of await links.all()) {
    const href = await link.getAttribute("href");
    expect(href).toMatch(/^#[a-z-]+$/);
    await expect(page.locator(href)).toHaveCount(1);
  }
  const experience = page.getByRole("link", { name: "How DoDo works" });
  await experience.focus();
  await page.keyboard.press("Enter");
  await expect(page).toHaveURL(/\?lang=en#experience$/);
  await expect(page.locator("#experience")).toBeFocused();
  await page.goBack();
  await expect(page).toHaveURL(/\?lang=en$/);
  await expect(page.getByRole("heading", { level: 1 })).toBeInViewport();
});

test("carousel stops on keyboard focus and manual selection until played", async ({ page }) => {
  await page.clock.install();
  await page.goto("./?lang=en");
  const frame = page.locator(".frameLabel");
  const carousel = page.getByRole("region", { name: HERO.carousel.title.EN });
  const pause = carousel.getByRole("button", { name: "Pause slideshow" });
  const play = carousel.getByRole("button", { name: "Play slideshow" });
  const [morning, afternoon, evening] = HERO.carousel.frames.map(({ label }) => label.EN);
  await expect(frame).toHaveText(morning);
  await page.clock.runFor(5_100);
  await expect(frame).toHaveText(afternoon);

  await pause.focus();
  await expect(play).toBeFocused();
  await page.clock.runFor(5_100);
  await expect(frame).toHaveText(afternoon);
  await page.keyboard.press("Space");
  await page.clock.runFor(5_100);
  await expect(frame).toHaveText(evening);

  await carousel.getByRole("button", { name: morning }).focus();
  await page.keyboard.press("Enter");
  await expect(frame).toHaveText(morning);
  await page.keyboard.press("ArrowRight");
  await expect(carousel.getByRole("button", { name: afternoon })).toBeFocused();
  await expect(frame).toHaveText(afternoon);
  await page.clock.runFor(10_200);
  await expect(frame).toHaveText(afternoon);
});

test("arrow keys move from the focused slide after tabbing past the selected slide", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("./?lang=en");
  const region = page.getByRole("region", { name: HERO.carousel.title.EN });
  const dots = HERO.carousel.frames.map(({ label }) => region.getByRole("button", { name: label.EN }));
  await dots[0].focus();
  await page.keyboard.press("Tab");
  await expect(dots[1]).toBeFocused();
  await expect(dots[0]).toHaveAttribute("aria-pressed", "true");
  await page.keyboard.press("ArrowRight");
  await expect(dots[2]).toBeFocused({ timeout: 1000 });
  await expect(dots[2]).toHaveAttribute("aria-pressed", "true");
  await page.keyboard.press("ArrowRight");
  await expect(dots[0]).toBeFocused();
  await page.keyboard.press("ArrowLeft");
  await expect(dots[2]).toBeFocused();
});

test("carousel pause works by pointer and reduced motion starts paused", async ({ page }) => {
  await page.clock.install();
  await page.goto("./?lang=en");
  const frame = page.locator(".frameLabel");
  const morning = HERO.carousel.frames[0].label.EN;
  await page.getByRole("button", { name: "Pause slideshow" }).click();
  await page.mouse.move(0, 0);
  await expect(page.getByRole("button", { name: "Play slideshow" })).toBeVisible();
  await page.clock.runFor(5_100);
  await expect(frame).toHaveText(morning);
  await page.getByRole("button", { name: "Play slideshow" }).click();
  await page.clock.runFor(5_100);
  await expect(frame).toHaveText(HERO.carousel.frames[1].label.EN);

  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.reload();
  await expect(page.getByRole("button", { name: "Play slideshow" })).toBeVisible();
  await page.clock.runFor(10_200);
  await expect(frame).toHaveText(morning);
  await expect(page.locator(".vignette")).toHaveCSS("animation-delay", "0s");
  await expect(page.locator(".vignette")).toHaveCSS("opacity", "1");
  await expect(page.locator(".voiceBars span").first()).toHaveCSS("animation-play-state", "paused");
  await page.getByRole("button", { name: HERO.carousel.frames[2].label.EN }).click();
  await expect(frame).toHaveText(HERO.carousel.frames[2].label.EN);
});

test("missing IntersectionObserver keeps the page visible and navigable", async ({ page }) => {
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.addInitScript(() => { window.IntersectionObserver = undefined; });
  await page.goto("./?lang=en#caregivers");
  await expect(page.locator("#caregivers")).toBeFocused();
  await expect(page.locator("#caregivers")).toHaveCSS("opacity", "1");
  await expect(page.locator("#caregivers img")).toHaveCount(3);
  await expect(page.getByRole("navigation", { name: "Main navigation" })
    .getByRole("link", { name: "For caregivers" })).toHaveAttribute("aria-current", "location");
  await page.getByRole("link", { name: "Experience", exact: true }).click();
  await expect(page).toHaveURL(/#experience$/);
  await expect(page.locator("#experience")).toBeFocused();
  expect(errors).toEqual([]);
});

test.describe("touch and narrow navigation", () => {
  test.use({ viewport: { width: 320, height: 800 }, hasTouch: true, isMobile: true });

  test("section menu opens by keyboard and touch, focuses anchors and restores them on back", async ({ page }) => {
    await page.goto("./?lang=en#experience");
    const menu = page.locator("summary", { hasText: "Sections" });
    await expect(menu).toBeInViewport();
    await expect(page.locator("#experience")).toBeFocused();

    await menu.focus();
    await page.keyboard.press("Enter");
    const nav = page.getByRole("navigation", { name: "Main navigation" });
    await expect(nav.getByRole("link")).toHaveCount(4);
    await page.keyboard.press("Tab");
    await expect(nav.getByRole("link").first()).toBeFocused();
    await page.keyboard.press("Escape");
    await expect(menu).toBeFocused();
    await expect(nav).toBeHidden();

    await menu.tap();
    await nav.getByRole("link", { name: "For caregivers" }).tap();
    await expect(page).toHaveURL(/\?lang=en#caregivers$/);
    const target = page.locator("#caregivers");
    await expect(target).toBeFocused();
    await expect(target).toHaveCSS("opacity", "1");
    await expect(nav).toBeHidden();
    await expect.poll(() => target.evaluate((section) =>
      section.getBoundingClientRect().top - document.querySelector("header").getBoundingClientRect().bottom
    )).toBeGreaterThanOrEqual(0);
    await expect(target.getByRole("heading", { level: 2 })).toBeInViewport();

    await page.goBack();
    await expect(page).toHaveURL(/\?lang=en#experience$/);
    await expect(page.locator("#experience")).toBeFocused();
    await expect(page.locator("#experience h2")).toBeInViewport();

    await page.goto("./?lang=en#caregivers");
    await expect(target).toBeFocused();
    await expect(target.getByRole("heading", { level: 2 })).toBeInViewport();
  });

  test("touch swipe changes slides and cancels autoplay", async ({ page, context }) => {
    await page.clock.install();
    await page.goto("./?lang=en");
    const stage = page.locator(".vignetteStage");
    await stage.scrollIntoViewIfNeeded();
    const box = await stage.boundingBox();
    const y = Math.max(box.y, 70) + 45;
    const startX = box.x + Math.floor(box.width * 0.8);
    const endX = box.x + Math.floor(box.width * 0.2);
    const session = await context.newCDPSession(page);
    await session.send("Input.dispatchTouchEvent", { type: "touchStart", touchPoints: [{ x: startX, y }] });
    await session.send("Input.dispatchTouchEvent", { type: "touchMove", touchPoints: [{ x: endX, y }] });
    await session.send("Input.dispatchTouchEvent", { type: "touchEnd", touchPoints: [] });

    const frame = page.locator(".frameLabel");
    const expected = HERO.carousel.frames[1].label.EN;
    await expect(frame).toHaveText(expected);
    await page.clock.runFor(10_200);
    await expect(frame).toHaveText(expected);
  });
});

test("families can read who sees saved answers and what each sharing choice covers", async ({ page }) => {
  await page.goto("./#why-trust");
  const messages = [
    ["English", "family members they have authorized can read their exact words", "typed from start to finish", "stay out of the summary, even if they edit the draft", "If a paired voice box plays the question, a typed answer also stays out of the summary"],
    ["Cantonese Traditional Chinese", "獲佢哋授權嘅家人可以睇返原文", "由頭到尾打字答，可以揀將自己嘅感受計入七日摘要", "用過聽寫草稿，就算之後改過字，今次感受都唔會計入摘要", "由配對聲盒播嘅問候，就算打字答，感受亦唔會計入摘要"],
    ["Simplified Chinese", "经他们授权的家人可以查看原文", "全程打字回答时，可以选择把自己的感受计入七天摘要", "用过听写草稿，即使后来改过文字，这次的感受也不会计入摘要", "如果由配对的语音设备播放问候，即使打字回答，感受也不会计入摘要"],
  ];
  for (const [language, access, typed, dictated, voiceBox] of messages) {
    await page.getByRole("button", { name: language, exact: true }).click();
    const notice = page.locator("#why-trust article").filter({ hasText: access });
    await expect(notice).toBeVisible();
    await expect(notice).toContainText(typed);
    await expect(notice).toContainText(dictated);
    await expect(notice).toContainText(voiceBox);
  }
});

test("families can tell when an answer is saved and what the charts measure", async ({ page }) => {
  const copies = [
    ["zh-Hant", "保存今次回答", "六種感受", "對話輪數"],
    ["zh-Hans", "保存这次回答", "六种感受", "对话轮数"],
    ["en", "Save my answer", "six feelings", "stored conversation turns"],
  ];
  for (const [locale, save, feelings, turns] of copies) {
    await page.goto(`./?lang=${locale}#experience`);
    await expect(page.locator("#experience .sectionBody")).toContainText(save);
    const images = page.locator("#caregivers figure img");
    await expect(images).toHaveCount(3);
    await expect(images.nth(1)).toHaveAttribute("alt", new RegExp(feelings, "i"));
    await expect(images.nth(2)).toHaveAttribute("alt", new RegExp(turns, "i"));
    for (const img of await images.all()) {
      await img.scrollIntoViewIfNeeded();
      await expect.poll(() => img.evaluate(el => el.naturalWidth)).toBeGreaterThan(0);
      await img.evaluate(el => el.decode());
      expect(await img.evaluate(el => el.naturalWidth === Number(el.getAttribute("width")) &&
        el.naturalHeight === Number(el.getAttribute("height")))).toBe(true);
    }
  }
});

for (const [locale, title, family, demo, care, settings, preview] of [
  ["zh-Hant", "簡單易用", [
    "照顧者畀你嘅家庭連結", "輸入有效授權碼", "重開或重新載入", "重新連結",
    "向照顧者攞新碼", "見到「開始講」再撳", "等畫面顯示收音先開口",
  ], [
    "獨立示範", "畫面提示可以插話", "等 DoDo 諗答案時，咪係閂住嘅", "停止傾偈",
    "下一句我想講", "咪仍然閂住", "見到「開始講」再撳", "講完送出", "棄錄",
  ], ["家庭照護頁", "授權碼嘅範圍", "家人關心摘要", "長者記憶", "邊個睇到啲乜，由父母話事"], "提醒設定", "開發中版本"],
  ["zh-Hans", "简单易用", [
    "照顾者提供的家庭链接", "输入有效授权码", "重新打开或刷新", "重新连接",
    "向照顾者索取新码", "看到开始说话按钮后再点", "等页面显示正在录音再开口",
  ], [
    "独立演示", "页面提示可以插话", "等 DoDo 想答案时，麦克风是关着的", "停止",
    "预约下一句", "麦克风仍然关闭", "开始录音按钮出现后再点", "发送", "丢弃录音",
  ], ["家庭照护页面", "授权码的范围", "家人关心摘要", "长者记忆", "谁看到什么，由父母说了算"], "提醒设置", "开发中版本"],
  ["en", "Simple to use", [
    "family link from your caregiver", "valid chat access code", "reopening or reloading", "connect again",
    "ask your caregiver for a new code", "Tap “Start talking” when it appears", "wait for the page to show it is listening",
  ], [
    "separate demo", "the page says you can interrupt", "the microphone is off while DoDo is thinking",
    "Stop Conversation", "I want the next turn", "reserve a turn with the mic off", "When “Start speaking” appears",
    "Send recording", "Discard recording",
  ], ["family care page", "records your access code covers", "family care summary", "elder memories", "Your parents decide who sees what"], "reminder settings", "In-development build"],
]) {
  test(`families can distinguish family access from demo voice in ${locale}`, async ({ page }) => {
    await page.goto(`./?lang=${locale}#why-trust`);
    const article = page.locator("#why-trust article").filter({ has: page.getByRole("heading", { name: title, exact: true }) });
    await expect(article).toBeVisible({ timeout: 2500 });
    const advice = article.locator("p");
    const familyAdvice = advice.filter({ hasText: family[0] });
    const demoAdvice = advice.filter({ hasText: demo[0] });
    await expect(familyAdvice).toBeVisible({ timeout: 2500 });
    await expect(demoAdvice).toBeVisible({ timeout: 2500 });
    for (const instruction of family) await expect(familyAdvice).toContainText(instruction, { ignoreCase: true });
    for (const instruction of demo) await expect(demoAdvice).toContainText(instruction, { ignoreCase: true });
    await expect(familyAdvice).not.toContainText(/下一句我想講|预约下一句|I want the next turn/);

    const careCopy = page.locator("#caregivers .caregiverCopy .sectionBody");
    for (const instruction of care) await expect(careCopy).toContainText(instruction, { ignoreCase: true });
    await expect(careCopy).not.toContainText(settings, { ignoreCase: true });
    const developmentPreview = page.locator("#caregivers .shotStack");
    await expect(developmentPreview.locator(".previewBadge")).toContainText(preview);
    await expect(developmentPreview).toContainText(settings, { ignoreCase: true });
  });
}
