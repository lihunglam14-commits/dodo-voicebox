// =============================================================================
// DoDo VoiceBox — 產品網站（presentation layer）v3
// 文案一律嚟自 content.js（single source of truth）——呢度唔准寫死 user-facing 字句。
// v10（owner 2026-07-06）：H1 一行 by construction（≥768 nowrap＋流體字級；17ch max-width
// 係舊 bug——CJK ch≈0.5em）、比較區四行（逐類別）、COMPARE 範圍 owner verbatim 豁免。
// =============================================================================

import { createElement as h, Fragment, useEffect, useLayoutEffect, useRef, useState } from "react";
import logoUrl from "./api/files/logo_dodo_20260412.png";
import {
  LANGS, CONTACT, NAV, NAV_COPY, HERO, EXPERIENCE, DESIGN, PROGRESS,
  WHY_TRUST, COMPARE, VISION, CAREGIVERS, PILOT, TEAM, FOOTER, text,
} from "./content.js";

const LOGO = logoUrl;
const TEL = `tel:${CONTACT.phone}`;
const MAILTO = `mailto:${CONTACT.email}`;
const ASSET = (file) => `${import.meta.env.BASE_URL}assets/${file}`;

const ICONS = {
  arrow: h(Fragment, null,
    h("path", { d: "M5 12h14" }),
    h("path", { d: "m13 6 6 6-6 6" }),
  ),
  phone: h("path", { d: "M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.3 19.3 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.7.6 2.5a2 2 0 0 1-.4 2.1L8 9.6a16 16 0 0 0 6.4 6.4l1.3-1.3a2 2 0 0 1 2.1-.4c.8.3 1.6.5 2.5.6a2 2 0 0 1 1.7 2Z" }),
  mail: h(Fragment, null,
    h("rect", { x: "3", y: "5", width: "18", height: "14", rx: "2" }),
    h("path", { d: "m3 7 9 6 9-6" }),
  ),
  message: h(Fragment, null,
    h("path", { d: "M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z" }),
    h("path", { d: "M8 9h8" }),
    h("path", { d: "M8 13h5" }),
  ),
  check: h("path", { d: "m5.5 12.5 4 4 9-9" }),
  clock: h(Fragment, null,
    h("circle", { cx: "12", cy: "12", r: "9" }),
    h("path", { d: "M12 7v5l3 2" }),
  ),
};

function Icon({ name, size = 18 }) {
  return h("svg", {
    width: size, height: size, viewBox: "0 0 24 24",
    fill: "none", stroke: "currentColor", strokeWidth: "1.8",
    strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true",
  }, ICONS[name]);
}

function CTA({ href, children, variant = "primary", icon, external = false }) {
  return h("a", {
    className: `btn ${variant}`,
    href,
    target: external ? "_blank" : undefined,
    rel: external ? "noreferrer" : undefined,
  }, children, icon ? h(Icon, { name: icon, size: 16 }) : null);
}

function SectionHead({ eyebrow, title, body, lang, headingId, dark = false }) {
  return h("div", { className: `sectionHead${dark ? " dark" : ""}` },
    h("p", { className: "eyebrow" }, text(eyebrow, lang)),
    h("h2", { id: headingId }, text(title, lang)),
    body ? h("p", { className: "sectionBody" }, text(body, lang)) : null,
  );
}

function useReducedMotion() {
  const [reduced, setReduced] = useState(() => window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false);
  useEffect(() => {
    if (!window.matchMedia) return;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(media.matches);
    onChange();
    media.addEventListener ? media.addEventListener("change", onChange) : media.addListener(onChange);
    return () => media.removeEventListener ? media.removeEventListener("change", onChange) : media.removeListener(onChange);
  }, []);
  return reduced;
}

function HeroCarousel({ lang, reduced }) {
  const [idx, setIdx] = useState(0);
  const [playing, setPlaying] = useState(() => !reduced);
  const [hovered, setHovered] = useState(false);
  const pointerAction = useRef(null);
  const touchStart = useRef(null);
  const frames = HERO.carousel.frames;
  const rotating = playing && !hovered;

  useEffect(() => {
    if (reduced) setPlaying(false);
  }, [reduced]);

  useEffect(() => {
    if (!rotating) return;
    const timer = setInterval(() => setIdx((i) => (i + 1) % frames.length), 5000);
    return () => clearInterval(timer);
  }, [rotating, frames.length]);

  function select(index) {
    setPlaying(false);
    setIdx(index);
  }

  function nextIndex(direction, from = idx) {
    return (from + direction + frames.length) % frames.length;
  }

  const frame = frames[idx];
  return h("div", {
    className: "vignette",
    role: "region",
    "aria-labelledby": "slideshow-title",
    "data-rotating": rotating,
    onFocus: () => setPlaying(false),
    onPointerEnter: (event) => { if (event.pointerType === "mouse") setHovered(true); },
    onPointerLeave: () => setHovered(false),
  },
    h("div", { className: "vignetteHeader" },
      h("span", { id: "slideshow-title", className: "vignetteTag" }, text(HERO.carousel.title, lang)),
      h("button", {
        type: "button",
        className: "navBtn carouselToggle",
        // Pointer focus pauses immediately. Keep the action the visitor pressed.
        onPointerDown: () => { pointerAction.current = !playing; },
        onPointerCancel: () => { pointerAction.current = null; },
        onClick: (event) => {
          const willPlay = event.detail > 0 ? pointerAction.current ?? !playing : !playing;
          setPlaying(willPlay);
          if (willPlay) setHovered(false);
          pointerAction.current = null;
        },
      }, text(playing ? HERO.carousel.pause : HERO.carousel.play, lang)),
    ),
    h("div", {
      className: "vignetteStage",
      onTouchStart: (event) => {
        const finger = event.touches[0];
        touchStart.current = event.touches.length === 1 ? { x: finger.clientX, y: finger.clientY } : null;
      },
      onTouchEnd: (event) => {
        const start = touchStart.current;
        touchStart.current = null;
        const finger = event.changedTouches[0];
        if (!start || !finger) return;
        const dx = finger.clientX - start.x;
        if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(finger.clientY - start.y)) {
          select(nextIndex(dx < 0 ? 1 : -1));
        }
      },
      onTouchCancel: () => { touchStart.current = null; },
    },
      h("div", { className: "voiceDevice" },
        h("div", { className: "deviceGlow", "aria-hidden": "true" }),
        h("div", {
          className: "deviceLogo",
          role: "img",
          "aria-label": "DoDo VoiceBox",
          style: { "--logo-image": `url("${LOGO}")` },
        }),
        h("div", { className: "voiceBars", "aria-hidden": "true" },
          [12, 24, 36, 20, 30, 16, 26].map((height, index) =>
            h("span", { key: height + index, style: { height: `${height}px`, "--delay": `${index * 90}ms` } }),
          ),
        ),
      ),
      h("div", { className: "carouselFrame", "aria-live": playing ? "off" : "polite", "aria-atomic": true },
        h("span", { className: "frameLabel", key: `label-${idx}` }, text(frame.label, lang)),
        h("p", { className: "bubble dodoBubble heroBubble frameSwap", key: `bubble-${idx}` }, text(frame.bubble, lang)),
      ),
      h("p", { className: "deviceCaption" }, text(HERO.deviceCaption, lang)),
      h("div", {
        className: "dots",
      },
        frames.map((f, i) => h("button", {
          key: i, type: "button",
          className: `dot${i === idx ? " active" : ""}`,
          "aria-label": text(f.label, lang),
          "aria-pressed": i === idx,
          onClick: () => select(i),
          onKeyDown: (event) => {
            if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
            event.preventDefault();
            const index = nextIndex(event.key === "ArrowRight" ? 1 : -1, i);
            select(index);
            event.currentTarget.parentElement.children[index].focus();
          },
        })),
      ),
    ),
  );
}

function languageFromURL() {
  const code = new URL(window.location.href).searchParams.get("lang");
  return LANGS.find((item) => item.code === code) ?? LANGS[0];
}

const anchor = (id, label) => ({ id, tabIndex: -1, "data-anchor": true, "aria-labelledby": label });

function DodoSite() {
  const [{ key: lang, code }, setLanguage] = useState(languageFromURL);
  const [active, setActive] = useState("");
  const rootRef = useRef(null);
  const reduced = useReducedMotion();
  const canObserve = typeof window.IntersectionObserver === "function";
  const canReveal = !reduced && canObserve;

  function changeLanguage(language) {
    const url = new URL(window.location.href);
    url.searchParams.set("lang", language.code);
    window.history.replaceState(window.history.state, "", url);
    setLanguage(language);
  }

  useLayoutEffect(() => { document.documentElement.lang = code; }, [code]);

  useLayoutEffect(() => {
    function followFragment() {
      // Direct visits can resolve the fragment only after React renders it.
      const target = document.getElementById(window.location.hash.slice(1));
      if (!target?.hasAttribute("data-anchor")) {
        setActive("");
        return;
      }
      setActive(target.closest("[data-section]")?.id ?? target.id);
      target.focus({ preventScroll: true });
      target.scrollIntoView({ block: "start" });
    }
    const readHistoryLanguage = () => setLanguage(languageFromURL());
    followFragment();
    window.addEventListener("hashchange", followFragment);
    window.addEventListener("popstate", readHistoryLanguage);
    return () => {
      window.removeEventListener("hashchange", followFragment);
      window.removeEventListener("popstate", readHistoryLanguage);
    };
  }, []);

  useEffect(() => {
    if (!canObserve) return;
    const node = rootRef.current;
    if (!node) return;
    const sections = [...node.querySelectorAll("[data-section]")];
    const observer = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible?.target?.id) setActive(visible.target.id);
    }, { threshold: [0.2, 0.45], rootMargin: "-18% 0px -58% 0px" });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [canObserve]);

  useEffect(() => {
    if (!canReveal) return;
    const node = rootRef.current;
    if (!node) return;
    const targets = [...node.querySelectorAll("[data-reveal]")];
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("inview");
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -10% 0px", threshold: 0.1 });
    targets.forEach((target) => io.observe(target));
    return () => io.disconnect();
  }, [canReveal]);

  function navLinks(onClick) {
    return NAV.map((item) => h("a", {
      key: item.id, href: `#${item.id}`,
      className: `navBtn ${active === item.id ? "active" : ""}`,
      "aria-current": active === item.id ? "location" : undefined,
      onClick,
    }, text(item.label, lang)));
  }

  return h("div", { ref: rootRef, className: `page${canReveal ? " reveal-ready" : ""}${lang === "EN" ? " lang-en" : ""}`, lang: code },
    h("style", null, CSS(lang)),

    h("header", { className: "topbar" },
      h("div", { className: "wrap topbarInner" },
        h("a", {
          href: "#hero", className: "brand",
          "aria-label": "DoDo VoiceBox",
        },
          h("span", { className: "brandMark", "aria-hidden": "true", style: { "--logo-image": `url("${LOGO}")` } }),
          h("span", null, "DoDo VoiceBox"),
        ),
        h("nav", { className: "nav", "aria-label": text(NAV_COPY.label, lang) }, navLinks()),
        h("details", {
          className: "mobileNav",
          onKeyDown: (event) => {
            if (event.key !== "Escape" || !event.currentTarget.open) return;
            event.preventDefault();
            event.currentTarget.open = false;
            event.currentTarget.firstElementChild.focus();
          },
        },
          h("summary", { className: "navBtn" }, text(NAV_COPY.sections, lang)),
          h("nav", { className: "navPanel", "aria-label": text(NAV_COPY.label, lang) },
            navLinks((event) => {
              if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
              event.currentTarget.closest("details").open = false;
            }),
          ),
        ),
        h("div", { className: "langs" },
          h("div", { className: "langSeg", role: "group", "aria-label": text(NAV_COPY.language, lang) },
            LANGS.map((item) => h("button", {
              key: item.key, type: "button",
              className: `langBtn ${lang === item.key ? "active" : ""}`,
              onClick: () => changeLanguage(item), "aria-label": item.aria,
              "aria-pressed": lang === item.key,
            }, item.label)),
          ),
          h(CTA, { href: MAILTO, variant: "primary", icon: "arrow" }, text(HERO.ctaPrimary, lang)),
        ),
      ),
    ),

    h("main", null,
      h("section", { ...anchor("hero", "hero-title"), className: "hero" },
        h("div", { className: "wrap heroGrid" },
          h("div", { className: "heroCopy" },
            h("h1", { id: "hero-title" },
              HERO.h1Parts[lang]
                ? [
                    h("span", { className: "nb", key: "a" }, HERO.h1Parts[lang][0]),
                    h("wbr", { key: "w" }),
                    h("span", { className: "nb", key: "b" }, HERO.h1Parts[lang][1]),
                  ]
                : text(HERO.h1, lang),
            ),
            h("p", { className: "heroLead" }, text(HERO.lead, lang)),
            h("div", { className: "ctaRow" },
              h(CTA, { href: MAILTO, variant: "primary", icon: "arrow" }, text(HERO.ctaPrimary, lang)),
              h(CTA, { href: "#experience", variant: "secondary", icon: "arrow" }, text(HERO.ctaSecondary, lang)),
            ),
            h("div", { className: "heroChips" },
              HERO.chips.map((chip) => h("a", {
                href: `#${chip.target}`, className: "chip chipLink", key: chip.label.EN,
              },
                h(Icon, { name: "check", size: 14 }), chip.label[lang],
              )),
            ),
          ),
          h(HeroCarousel, { lang, reduced }),
        ),
      ),

      h("section", { ...anchor("experience", "experience-title"), "data-section": true, className: "section wrap" },
        h(SectionHead, { lang, headingId: "experience-title", eyebrow: EXPERIENCE.eyebrow, title: EXPERIENCE.title, body: EXPERIENCE.body }),
        h("div", { className: "scenes" },
          EXPERIENCE.scenes.map((scene, index) => h("article", {
            ...anchor(`exp-${scene.k}`, `exp-${scene.k}-title`),
            className: `scene${index % 2 ? " flip" : ""}`, key: scene.k, "data-reveal": true,
          },
            h("div", { className: "sceneCopy" },
              h("span", { className: "sceneNumber" }, `0${index + 1}`),
              h("h3", { id: `exp-${scene.k}-title` }, text(scene.title, lang)),
              h("p", null, text(scene.body, lang)),
            ),
            h("div", { className: "sceneDialog" },
              scene.dialog.map((line, i) => h("p", {
                key: i,
                className: line.who === "update"
                  ? "bubble updateCard"
                  : `bubble ${line.who === "dodo" ? "dodoBubble" : "elderBubble"}`,
              }, text(line.say, lang))),
            ),
          )),
        ),
      ),

      h("section", { ...anchor("design"), "data-reveal": true, className: "section wrap" },
        h(SectionHead, { lang, eyebrow: DESIGN.eyebrow, title: DESIGN.title, body: DESIGN.body }),
        h("div", { className: "designPoints" },
          DESIGN.points.map((item) => h("article", { className: "designPoint", key: item.title.EN },
            h("h3", null, text(item.title, lang)),
            h("p", null, text(item.body, lang)),
          )),
        ),
        h("div", { className: "mascotBand" },
          h("div", { className: "characterGrid" },
            DESIGN.characters.map((item) => h("article", { className: "characterCard", key: item.img },
              h("div", { className: "characterArt" },
                h("img", {
                  src: ASSET(item.img), alt: text(item.alt, lang),
                  width: item.w, height: item.h,
                  loading: "lazy", decoding: "async",
                }),
              ),
              h("h4", null, text(item.name, lang)),
              h("p", null, text(item.desc, lang)),
            )),
          ),
        ),
        h("p", { className: "designNote" }, text(DESIGN.note, lang)),
      ),

      h("section", { ...anchor("progress", "progress-title"), "data-section": true, className: "progressSection" },
        h("div", { className: "wrap" },
          h(SectionHead, { lang, dark: true, headingId: "progress-title", eyebrow: PROGRESS.eyebrow, title: PROGRESS.title, body: PROGRESS.body }),
          h("ol", { className: "timeline" },
            PROGRESS.milestones.map((item) => h("li", { className: "milestone", key: item.title.EN, "data-reveal": true },
              h("span", { className: "milestoneDate" }, text(item.date, lang)),
              h("div", null,
                h("h3", null, text(item.title, lang)),
                h("p", null, text(item.body, lang)),
                item.link ? h("a", {
                  href: `#${item.link.target}`, className: "milestoneLink",
                }, text(item.link.label, lang), " →") : null,
              ),
            )),
          ),
        ),
      ),

      h("section", { ...anchor("why-trust", "trust-title"), "data-section": true, className: "section wrap" },
        h(SectionHead, { lang, headingId: "trust-title", eyebrow: WHY_TRUST.eyebrow, title: WHY_TRUST.title, body: WHY_TRUST.body }),
        h("div", { className: "trustBlocks" },
          WHY_TRUST.blocks.map((block, index) => h("article", { className: `trustBlock${index === 0 ? " feature" : ""}`, key: block.title.EN, "data-reveal": true },
            h("h3", null, text(block.title, lang)),
            block.intro && h("p", null, text(block.intro, lang)),
            h("p", null, text(block.body, lang)),
          )),
        ),
        h("div", { className: "principles", "data-reveal": true },
          h("h3", null, text(WHY_TRUST.principlesTitle, lang)),
          h("ol", null,
            WHY_TRUST.principles.map((item, index) => h("li", { key: item.EN },
              h("span", { className: "principleNumber" }, `0${index + 1}`),
              h("span", null, item[lang]),
            )),
          ),
        ),
      ),

      h("section", { ...anchor("not"), "data-reveal": true, className: "section wrap" },
        h(SectionHead, { lang, eyebrow: COMPARE.eyebrow, title: COMPARE.title, body: COMPARE.intro }),
        h("div", { className: "compareRows" },
          COMPARE.rows.map((row, index) => h("div", { className: "compareRow", key: index },
            h("div", { className: "compareCell them" },
              h("span", { className: "compareTag" }, text(row.themName, lang)),
              h("p", null, text(row.them, lang)),
            ),
            h("div", { className: "compareCell dodo" },
              h("span", { className: "compareTag" }, "DoDo"),
              h("p", null, text(row.dodo, lang)),
            ),
          )),
        ),
        h("p", { className: "comparePunch" }, text(COMPARE.punch, lang)),
        h("p", { className: "compareKeep" }, text(COMPARE.keepLine, lang)),
      ),

      h("section", { ...anchor("connect"), "data-reveal": true, className: "section wrap" },
        h("div", { className: "visionPanel" },
          h("p", { className: "eyebrow" }, text(VISION.eyebrow, lang)),
          h("p", { className: "visionStatement" }, text(VISION.statement, lang)),
          h("p", { className: "visionVolunteer" }, text(VISION.volunteer, lang)),
        ),
      ),

      h("section", { ...anchor("caregivers", "caregivers-title"), "data-section": true, "data-reveal": true, className: "section wrap" },
        h("div", { className: "caregiverGrid" },
          h("div", { className: "caregiverCopy" },
            h(SectionHead, { lang, headingId: "caregivers-title", eyebrow: CAREGIVERS.eyebrow, title: CAREGIVERS.title, body: CAREGIVERS.body }),
            h("span", { className: "chip consentChip" },
              h(Icon, { name: "check", size: 14 }), text(CAREGIVERS.consentChip, lang),
            ),
          ),
          h("div", { className: "shotStack" },
            h("span", { className: "previewBadge" }, text(CAREGIVERS.previewLabel, lang)),
            h("p", { className: "sectionBody" }, text(CAREGIVERS.previewNote, lang)),
            CAREGIVERS.shots.map((shot) => h("figure", { className: "shotFigure", key: shot.img },
              h("img", {
                src: ASSET(shot.img),
                alt: text(shot.alt, lang),
                width: shot.w, height: shot.h,
                loading: "lazy",
                decoding: "async",
              }),
              h("figcaption", null, text(shot.caption, lang)),
            )),
          ),
        ),
      ),

      h("section", { ...anchor("pilot", "pilot-title"), "data-section": true, "data-reveal": true, className: "section wrap" },
        h("div", { className: "pilotPanel" },
          h("p", { className: "eyebrow" }, text(PILOT.eyebrow, lang)),
          h("h2", { id: "pilot-title" }, text(PILOT.title, lang)),
          h("p", { className: "sectionBody" }, text(PILOT.body, lang)),
          h("div", { className: "contactRow" },
            h(CTA, { href: CONTACT.whatsapp, variant: "primary", icon: "message", external: true }, text(PILOT.whatsapp, lang)),
            h(CTA, { href: TEL, variant: "secondary", icon: "phone" }, text(PILOT.call, lang)),
            h(CTA, { href: MAILTO, variant: "secondary", icon: "mail" }, CONTACT.email),
          ),
          h("p", { className: "ngoLine" }, text(PILOT.ngoLine, lang)),
        ),
      ),

      h("section", { ...anchor("team"), "data-reveal": true, className: "section wrap" },
        h("div", { className: "teamPanel" },
          h("div", null,
            h("p", { className: "eyebrow" }, text(TEAM.eyebrow, lang)),
            h("h2", null, text(TEAM.title, lang)),
          ),
          h("div", null,
            h("p", null, text(TEAM.p1, lang)),
            h("p", null, text(TEAM.p2, lang)),
          ),
        ),
      ),
    ),

    h("footer", { ...anchor("contact"), "data-reveal": true, className: "footer" },
      h("div", { className: "wrap footerPanel" },
        h("h2", null, text(FOOTER.h2, lang)),
        h("p", null, text(FOOTER.p, lang)),
        h("div", { className: "contactRow" },
          h(CTA, { href: MAILTO, variant: "footerPrimary", icon: "arrow" }, text(HERO.ctaPrimary, lang)),
          h(CTA, { href: CONTACT.whatsapp, variant: "footerGhost", icon: "message", external: true }, text(PILOT.whatsapp, lang)),
        ),
        h("span", { className: "tagline" }, text(FOOTER.tagline, lang)),
      ),
    ),
  );
}

// =============================================================================
// 設計系統 v3：原色系（git 5411425）——湖水綠 #12877b、深墨綠 #17383b、
// 薄荷 #8ce3d2、暖白 #fff8ef。結構、字級、間距承 v2。
// AA 微調（報告有 flag）：文字/按鈕用舊 token #0f766d／#0d5f57，圖形保留 #12877b。
// =============================================================================

const CSS = (lang) => `
  * { box-sizing: border-box; }
  html, body, #root { margin: 0; min-height: 100%; }
  button { font: inherit; }
  a { color: inherit; text-decoration: none; }

  .page {
    --paper: #f5faf7;
    --card: rgba(255, 255, 255, .88);
    --card-solid: #ffffff;
    --ink: #17383b;
    --muted: #506c6d;
    --muted-2: #5e7576;
    --accent: #12877b;
    --accent-text: #0f766d;
    --accent-deep: #0d5f57;
    --accent-soft: #e5f5ef;
    --mint: #8ce3d2;
    --mint-bright: #9ee7d8;
    --dark: #173f40;
    --line: rgba(31, 89, 83, .12);

    min-height: 100vh;
    min-height: 100dvh;
    overflow-x: clip;
    background:
      radial-gradient(circle at 82% 8%, rgba(159, 225, 208, .23), transparent 30%),
      linear-gradient(180deg, #f8fcf9 0%, #eef8f3 48%, #fff8ef 100%);
    color: var(--ink);
    font-family: ${lang === "EN" ? "'Manrope', system-ui, sans-serif" : "'Noto Sans TC', 'Noto Sans SC', system-ui, sans-serif"};
    font-size: 18px;
    line-height: 1.85;
  }
  .wrap { width: min(1160px, calc(100% - 48px)); margin: 0 auto; }

  :focus-visible { outline: 2px solid var(--accent-deep); outline-offset: 3px; }
  h1, h2, h3, h4 { text-wrap: balance; letter-spacing: 0; }
  p, li { text-wrap: pretty; }

  .topbar {
    position: sticky; top: 0; z-index: 30;
    background: #f8fcf9;
    border-bottom: 1px solid rgba(31, 89, 83, .16);
  }
  .topbarInner { min-height: 74px; display: flex; align-items: center; gap: 16px; justify-content: space-between; }
  .brand {
    display: inline-flex; align-items: center; gap: 10px;
    min-height: 44px; padding: 0; border: 0; background: transparent; color: var(--ink);
    font-size: 19px; font-weight: 800; cursor: pointer; white-space: nowrap;
  }
  .brandMark {
    width: 46px; height: 29px; flex: 0 0 auto; border-radius: 8px;
    background-color: #fff; background-image: var(--logo-image);
    background-position: center; background-repeat: no-repeat; background-size: 350% auto;
    border: 1px solid var(--line);
  }
  .nav, .langs, .ctaRow, .contactRow, .heroChips { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
  .nav { flex: 1 1 auto; justify-content: center; }
  .mobileNav { display: none; position: relative; }
  .mobileNav summary { list-style: none; gap: 7px; }
  .mobileNav summary::-webkit-details-marker { display: none; }
  .mobileNav summary::after {
    content: ""; width: 6px; height: 6px; margin-top: -3px;
    border-right: 2px solid; border-bottom: 2px solid; transform: rotate(45deg);
  }
  .mobileNav[open] summary::after { transform: rotate(225deg); margin-top: 3px; }
  .navPanel {
    position: absolute; top: calc(100% + 6px); left: 0; z-index: 1;
    padding: 6px; min-width: max-content; background: var(--card-solid);
    border: 1px solid var(--line); border-radius: 16px;
    box-shadow: 0 8px 20px rgba(20, 95, 87, .12);
  }
  .navPanel .navBtn { display: flex; }
  .page [data-anchor] { scroll-margin-top: 90px; }
  .page [data-anchor]:focus-visible { outline-offset: -3px; }
  .navBtn, .langBtn {
    border: 0; border-radius: 999px; padding: 0 13px;
    min-height: 44px; display: inline-flex; align-items: center;
    background: transparent; color: var(--muted);
    font-size: 15.5px; font-weight: 700; cursor: pointer; line-height: 1.2;
    transition: color .16s ease, background .16s ease;
  }
  .navBtn:hover, .langBtn:hover { background: var(--accent-soft); color: var(--ink); }
  .navBtn.active, .langBtn.active { color: var(--accent-text); background: var(--accent-soft); }

  .btn {
    min-height: 48px; display: inline-flex; align-items: center; justify-content: center;
    gap: 9px; border-radius: 999px; padding: 0 22px; border: 1px solid transparent;
    font-size: 16.5px; font-weight: 750; line-height: 1.15; cursor: pointer;
    box-shadow: 0 8px 20px rgba(20, 95, 87, .09);
    transition: transform .16s ease, box-shadow .16s ease, background .16s ease;
  }
  .btn:hover { transform: translateY(-1px); box-shadow: 0 14px 30px rgba(20, 95, 87, .15); }
  .btn.primary { color: #fff; background: var(--accent-text); border-color: var(--accent-text); }
  .btn.primary:hover { background: var(--accent-deep); }
  .btn.secondary { color: var(--ink); background: var(--card-solid); border-color: rgba(23, 77, 76, .18); }
  .btn.footerPrimary { color: #153d3e; background: var(--mint-bright); border-color: var(--mint-bright); }
  .btn.footerGhost { color: #fff; background: transparent; border-color: rgba(255, 255, 255, .35); box-shadow: none; }

  .hero { padding: 74px 0 64px; }
  .heroGrid { display: grid; grid-template-columns: minmax(0, 1.05fr) minmax(380px, .95fr); gap: 56px; align-items: center; }
  .heroCopy, .vignette { animation: riseIn .6s cubic-bezier(.2, .8, .2, 1) both; }
  .vignette { animation-delay: .08s; }
  h1 {
    margin: 0; max-width: none; color: var(--ink);
    font-size: clamp(32px, 3.3vw, 40px); line-height: 1.22; font-weight: 900;
  }
  @media (min-width: 768px) {
    h1 { white-space: nowrap; } /* zh H1：≥768px 一行 by construction（wbr 喺 nowrap 下失效） */
    .lang-en h1 { white-space: normal; } /* EN 未有短版，准兩行，喺字邊界斷 */
  }
  .heroLead {
    max-width: 620px; margin: 24px 0 0; color: var(--muted);
    font-size: clamp(17.5px, 1.6vw, 20px); line-height: 1.9; font-weight: 500;
  }
  .ctaRow { margin-top: 30px; }
  .heroChips { margin-top: 26px; gap: 10px; }
  .chip {
    display: inline-flex; align-items: center; gap: 7px; padding: 9px 13px;
    border-radius: 999px; color: #31595a; background: rgba(255, 255, 255, .78);
    border: 1px solid rgba(31, 89, 83, .11); font-size: 14.5px; font-weight: 700; line-height: 1.2;
  }
  .chip svg { color: var(--accent); }

  .vignette {
    position: relative; padding: 22px;
    border-radius: 26px; background: rgba(255, 255, 255, .9);
    border: 1px solid var(--line); box-shadow: 0 26px 70px rgba(21, 83, 78, .14);
  }
  .vignetteHeader { display: flex; align-items: center; justify-content: space-between; gap: 8px; margin-bottom: 12px; }
  .carouselToggle { border: 1px solid var(--line); color: var(--accent-deep); white-space: nowrap; }
  .carouselFrame { display: flex; flex-direction: column; align-items: center; gap: 16px; }
  .vignette[data-rotating="false"] :is(.deviceGlow, .voiceBars span) { animation-play-state: paused; }
  .vignetteTag {
    display: inline-block; padding: 6px 11px; border-radius: 999px;
    background: var(--accent-soft); color: var(--accent-text); font-size: 13px; font-weight: 750;
  }
  .vignetteStage {
    display: flex; flex-direction: column; align-items: center; gap: 16px;
    padding: 26px 20px; border-radius: 18px; touch-action: pan-y;
    background:
      linear-gradient(rgba(18, 135, 123, .06) 1px, transparent 1px),
      linear-gradient(90deg, rgba(18, 135, 123, .06) 1px, transparent 1px),
      linear-gradient(145deg, #eff9f5, #fff8ef);
    background-size: 32px 32px, 32px 32px, auto;
    border: 1px solid rgba(31, 89, 83, .08);
  }
  .voiceDevice {
    position: relative; width: 150px; height: 166px;
    display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 13px;
    border-radius: 45% 45% 32% 32%;
    background: linear-gradient(180deg, #ffffff, #e8f5f1);
    border: 1px solid rgba(18, 135, 123, .18);
    box-shadow: 0 24px 60px rgba(21, 83, 78, .18);
  }
  .deviceGlow {
    position: absolute; inset: -22px; z-index: -1; border-radius: 50%;
    background: radial-gradient(circle, rgba(73, 187, 164, .22), transparent 66%);
    animation: signalBreath 4.6s ease-in-out infinite;
  }
  .deviceLogo {
    width: 106px; height: 64px; background-image: var(--logo-image);
    background-position: center; background-repeat: no-repeat; background-size: 350% auto;
  }
  .voiceBars { height: 32px; display: flex; align-items: center; gap: 4px; }
  .voiceBars span {
    width: 4px; border-radius: 999px; background: var(--accent);
    animation: voicePulse 1.8s ease-in-out infinite; animation-delay: var(--delay);
  }
  .deviceCaption { margin: 0; color: var(--muted-2); font-size: 14px; font-weight: 700; }

  .bubble {
    margin: 0; padding: 13px 16px; border-radius: 16px;
    font-size: 16px; line-height: 1.7; font-weight: 600; max-width: 46ch;
  }
  .dodoBubble {
    align-self: flex-start; color: var(--accent-deep); background: var(--accent-soft);
    border: 1px solid rgba(18, 135, 123, .18); border-bottom-left-radius: 5px;
  }
  .elderBubble {
    align-self: flex-end; color: #1d4f50; background: rgba(255, 255, 255, .96);
    border: 1px solid var(--line); border-bottom-right-radius: 5px;
  }
  .updateCard {
    align-self: stretch; color: var(--ink); background: rgba(255, 255, 255, .96);
    border: 1px dashed rgba(31, 89, 83, .3); border-radius: 14px;
  }
  .heroBubble { text-align: center; align-self: center; }

  .section { padding: 92px 0; }
  .sectionHead { max-width: 760px; margin-bottom: 44px; }
  .eyebrow {
    margin: 0 0 12px; color: var(--accent-text); font-size: 13.5px; line-height: 1.4;
    font-weight: 800; letter-spacing: .1em; text-transform: uppercase;
  }
  .sectionHead h2, .pilotPanel h2, .teamPanel h2 {
    margin: 0; color: var(--ink); font-size: clamp(29px, 3.6vw, 44px); line-height: 1.22; font-weight: 850;
  }
  .sectionBody { margin: 16px 0 0; color: var(--muted); font-size: 18.5px; line-height: 1.85; font-weight: 500; max-width: 66ch; }
  .sectionHead.dark h2 { color: #fff; }
  .sectionHead.dark .sectionBody { color: rgba(255, 255, 255, .76); }
  .sectionHead.dark .eyebrow { color: var(--mint); }

  .scenes { display: grid; gap: 18px; }
  .scene {
    display: grid; grid-template-columns: minmax(0, 1.1fr) minmax(0, .9fr);
    gap: clamp(24px, 4vw, 56px); align-items: center;
    padding: clamp(26px, 3.4vw, 44px); border-radius: 24px;
    background: var(--card); border: 1px solid var(--line);
    box-shadow: 0 12px 30px rgba(21, 83, 78, .07);
  }
  .scene.flip { grid-template-columns: minmax(0, .9fr) minmax(0, 1.1fr); }
  .scene.flip .sceneCopy { order: 2; }
  .scene.flip .sceneDialog { order: 1; }
  .sceneNumber {
    display: inline-block; margin-bottom: 10px; color: var(--accent-text);
    font-size: 15px; font-weight: 850; letter-spacing: .14em;
  }
  .sceneCopy h3 { margin: 0; font-size: clamp(22px, 2.3vw, 28px); line-height: 1.35; font-weight: 820; }
  .sceneCopy p { margin: 12px 0 0; color: var(--muted-2); font-size: 17px; line-height: 1.85; font-weight: 500; }
  .sceneDialog {
    display: flex; flex-direction: column; gap: 10px;
    padding: 20px; border-radius: 18px;
    background: linear-gradient(145deg, #eff9f5, #fff8ef);
    border: 1px solid rgba(31, 89, 83, .08);
  }

  .designPoints { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px; }
  .designPoint {
    padding: 26px; border-radius: 20px; background: var(--card);
    border: 1px solid var(--line); border-top: 3px solid var(--accent-soft);
    box-shadow: 0 12px 30px rgba(21, 83, 78, .07);
  }
  .designPoint h3 { margin: 0; font-size: 20.5px; line-height: 1.4; font-weight: 800; }
  .designPoint p { margin: 10px 0 0; color: var(--muted-2); font-size: 16px; line-height: 1.8; font-weight: 500; }
  .characterGrid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 16px; margin-top: 18px; }
  .characterCard {
    padding: 15px; border-radius: 20px; background: var(--card);
    border: 1px solid var(--line); text-align: center;
    box-shadow: 0 12px 30px rgba(21, 83, 78, .07);
  }
  .characterArt {
    aspect-ratio: 1 / 1; display: grid; place-items: center; margin-bottom: 13px;
    overflow: hidden; border-radius: 14px; background: #1b1c1e;
    border: 1px solid var(--line);
  }
  .characterArt img { width: 100%; height: 100%; object-fit: contain; display: block; }
  .characterCard h4 { margin: 0; font-size: 17.5px; line-height: 1.3; font-weight: 800; }
  .characterCard p { margin: 6px 0 0; color: var(--muted-2); font-size: 14.5px; line-height: 1.65; font-weight: 500; }
  .designNote { max-width: 720px; margin: 26px 0 0; color: #687f80; font-size: 14.5px; line-height: 1.75; font-weight: 500; }

  .progressSection { padding: 96px 0; background: var(--dark); }
  .timeline { margin: 0; padding: 0; list-style: none; display: grid; gap: 0; }
  .milestone {
    position: relative; display: grid; grid-template-columns: 170px 1fr;
    gap: 26px; padding: 24px 0 24px 26px;
    border-left: 2px solid rgba(255, 255, 255, .18);
  }
  .milestone::before {
    content: ""; position: absolute; left: -7px; top: 34px;
    width: 12px; height: 12px; border-radius: 50%;
    background: var(--mint); border: 2px solid var(--dark);
  }
  .milestoneDate { color: var(--mint); font-size: 15px; font-weight: 800; letter-spacing: .02em; padding-top: 2px; }
  .milestone h3 { margin: 0; color: #fff; font-size: 20.5px; line-height: 1.4; font-weight: 800; }
  .milestone p { margin: 9px 0 0; color: rgba(255, 255, 255, .72); font-size: 16px; line-height: 1.8; font-weight: 500; max-width: 62ch; }

  .trustBlocks { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px; }
  .trustBlock {
    padding: 26px 26px 26px 24px; border-radius: 20px; background: var(--card);
    border: 1px solid var(--line); border-left: 4px solid var(--accent);
    box-shadow: 0 12px 30px rgba(21, 83, 78, .07);
  }
  .trustBlock h3 { margin: 0; font-size: 20px; line-height: 1.45; font-weight: 800; }
  .trustBlock p { margin: 10px 0 0; color: var(--muted-2); font-size: 16px; line-height: 1.8; font-weight: 500; }
  .principles {
    margin-top: 18px; padding: clamp(26px, 3.4vw, 42px); border-radius: 24px;
    background: #e8f6f1; border: 1px solid rgba(18, 135, 123, .17);
  }
  .principles h3 { margin: 0 0 18px; font-size: 21px; font-weight: 850; }
  .principles ol { margin: 0; padding: 0; list-style: none; display: grid; gap: 0; }
  .principles li {
    display: grid; grid-template-columns: 58px 1fr; gap: 14px; align-items: baseline;
    padding: 15px 0; border-top: 1px solid rgba(18, 135, 123, .17);
    color: var(--ink); font-size: 17.5px; line-height: 1.7; font-weight: 650;
  }
  .principleNumber { color: var(--accent-text); font-size: 15px; font-weight: 850; letter-spacing: .1em; }

  .compareRows { display: grid; gap: 12px; }
  .compareRow { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
  .compareCell { padding: 18px 20px; border-radius: 16px; border: 1px solid var(--line); }
  .compareCell.them { background: #f0f4f1; }
  .compareCell.dodo { background: #eaf7f2; border-color: rgba(18, 135, 123, .24); }
  .compareTag {
    display: block; margin-bottom: 6px; font-size: 12.5px; font-weight: 800;
    letter-spacing: .06em; text-transform: uppercase; color: var(--muted);
  }
  .compareCell.dodo .compareTag { color: var(--accent-text); }
  .compareCell p { margin: 0; color: var(--ink); font-size: 17px; line-height: 1.65; font-weight: 700; }
  .compareCell.them p { color: var(--muted-2); font-weight: 600; }
  .comparePunch {
    max-width: 760px; margin: 22px 0 0; padding: 16px 20px;
    border-left: 4px solid var(--accent); border-radius: 4px 14px 14px 4px;
    background: var(--card-solid); color: var(--ink);
    font-size: 17.5px; line-height: 1.75; font-weight: 700;
  }
  .compareKeep { max-width: 760px; margin: 12px 0 0; color: var(--muted-2); font-size: 15px; line-height: 1.7; font-weight: 600; }
  .visionPanel {
    padding: clamp(34px, 5vw, 58px); border-radius: 28px; text-align: center;
    background: #fff5e9; border: 1px solid rgba(184, 111, 43, .14);
  }
  .visionPanel .eyebrow { color: #b36f3c; }
  .visionStatement {
    max-width: 24ch; margin: 0 auto; color: #563d2d;
    font-size: clamp(24px, 3vw, 36px); line-height: 1.45; font-weight: 850; text-wrap: balance;
  }
  .visionVolunteer { max-width: 640px; margin: 18px auto 0; color: #745e50; font-size: 16.5px; line-height: 1.8; font-weight: 600; }

  .caregiverGrid { display: grid; grid-template-columns: minmax(0, .9fr) minmax(0, 1.1fr); gap: clamp(28px, 4vw, 56px); align-items: start; }
  .caregiverGrid .sectionHead { margin-bottom: 22px; }
  .caregiverCopy { position: sticky; top: 100px; }
  .consentChip { background: var(--accent-soft); border-color: rgba(18, 135, 123, .24); color: var(--accent-deep); }
  .shotStack { display: grid; gap: 16px; }
  .previewBadge {
    justify-self: start; display: inline-flex; align-items: center; gap: 8px;
    padding: 8px 12px; border-radius: 999px;
    background: var(--accent-soft); color: var(--accent-text);
    font-size: 13px; font-weight: 800; letter-spacing: .02em;
  }
  .previewBadge::before {
    content: ""; width: 7px; height: 7px; border-radius: 50%; background: #20a68f;
  }
  .shotFigure {
    margin: 0; padding: 14px; border-radius: 18px;
    background: var(--card-solid); border: 1px solid var(--line);
    box-shadow: 0 18px 44px rgba(21, 83, 78, .08);
  }
  .shotFigure img {
    display: block; width: 100%; height: auto; border-radius: 10px;
    border: 1px solid rgba(31, 89, 83, .1);
  }
  .shotFigure figcaption {
    margin: 11px 2px 0; color: var(--muted-2); font-size: 14.5px; line-height: 1.6; font-weight: 650;
  }

  .pilotPanel {
    padding: clamp(32px, 5vw, 56px); border-radius: 28px;
    background: #eaf7f2; border: 1px solid rgba(18, 135, 123, .14);
  }
  .pilotPanel .sectionBody { color: #526f70; }
  .contactRow { margin-top: 26px; }
  .ngoLine { margin: 22px 0 0; color: #526f70; font-size: 15px; line-height: 1.7; font-weight: 600; }

  .teamPanel {
    display: grid; grid-template-columns: .9fr 1.1fr; gap: 40px;
    padding: clamp(28px, 4.4vw, 48px); border-radius: 24px;
    background: var(--card-solid); border: 1px solid var(--line);
    box-shadow: 0 12px 30px rgba(21, 83, 78, .05);
  }
  .teamPanel p { margin: 0; color: var(--muted); font-size: 17px; line-height: 1.85; font-weight: 500; }
  .teamPanel p + p { margin-top: 14px; }

  .footer { padding: 30px 0 64px; }
  .footerPanel {
    padding: clamp(38px, 6vw, 68px); border-radius: 28px; text-align: center;
    color: #fff;
    background:
      radial-gradient(circle at 86% 16%, rgba(93, 203, 181, .22), transparent 28%),
      #17383b;
  }
  .footerPanel h2 { max-width: 22ch; margin: 0 auto; font-size: clamp(28px, 4.2vw, 46px); line-height: 1.25; font-weight: 850; }
  .footerPanel > p { max-width: 640px; margin: 14px auto 0; color: rgba(255, 255, 255, .76); font-size: 18px; font-weight: 500; }
  .footerPanel .contactRow { justify-content: center; margin-top: 28px; }
  .tagline { display: block; margin-top: 26px; color: rgba(255, 255, 255, .62); font-weight: 750; font-size: 15px; }

  /* ---------- v9 additions ---------- */
  .frameLabel {
    display: inline-flex; align-items: center; gap: 7px;
    padding: 7px 12px; border-radius: 999px;
    background: var(--accent-soft); color: var(--accent-deep);
    font-size: 14px; font-weight: 800; line-height: 1.2;
  }
  .frameLabel, .frameSwap { animation: frameIn .45s ease both; }
  @keyframes frameIn { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: none; } }
  .dots { display: flex; align-items: center; justify-content: center; gap: 2px; }
  .dot {
    width: 12px; height: 12px; padding: 16px; box-sizing: content-box;
    border: 0; border-radius: 50%; cursor: pointer;
    background: transparent; position: relative;
  }
  .dot::after {
    content: ""; position: absolute; inset: 16px;
    border-radius: 50%; background: rgba(31, 89, 83, .25);
    transition: background .16s ease, transform .16s ease;
  }
  .dot.active::after { background: var(--accent); transform: scale(1.15); }
  .dot:hover::after { background: var(--accent-text); }

  /* ---------- v8 additions ---------- */
  .nb { white-space: nowrap; }

  /* ---------- v4 additions ---------- */
  .langSeg {
    display: inline-flex; align-items: stretch;
    border: 1px solid var(--line); border-radius: 999px;
    background: var(--card-solid); overflow: hidden;
  }
  .langSeg .langBtn { border-radius: 0; min-width: 52px; justify-content: center; }
  .langSeg .langBtn + .langBtn { border-left: 1px solid var(--line); }
  .langSeg .langBtn.active { background: var(--accent-text); color: #fff; }
  .langSeg .langBtn:focus-visible { outline-offset: -3px; }
  .langSeg .langBtn.active:focus-visible { outline-color: #fff; }
  .chipLink {
    cursor: pointer; min-height: 44px;
    border: 1px solid rgba(31, 89, 83, .18);
    transition: background .16s ease, transform .16s ease;
  }
  .chipLink:hover { background: var(--accent-soft); transform: translateY(-1px); }
  .milestoneLink {
    display: inline-flex; align-items: center; gap: 6px;
    min-height: 44px; margin-top: 4px; padding: 0 2px;
    border: 0; background: transparent; color: var(--mint);
    font-size: 16px; font-weight: 800; cursor: pointer;
  }
  .milestoneLink:hover { color: #fff; }
  .trustBlock.feature { grid-column: 1 / -1; background: var(--dark); border-color: var(--dark); border-left: 4px solid var(--mint); }
  .trustBlock.feature h3 { color: #fff; font-size: clamp(22px, 2.4vw, 27px); }
  .trustBlock.feature p { color: rgba(255, 255, 255, .78); font-size: 17px; max-width: 70ch; }
  .mascotBand { margin-top: 18px; padding: clamp(18px, 3vw, 32px); border-radius: 24px; background: var(--dark); }
  .mascotBand .characterGrid { margin-top: 0; }
  .mascotBand .characterCard { background: rgba(255, 255, 255, .05); border-color: rgba(255, 255, 255, .12); box-shadow: none; }
  .mascotBand .characterArt { border-color: rgba(255, 255, 255, .08); }
  .mascotBand .characterCard h4 { color: #fff; }
  .mascotBand .characterCard p { color: rgba(255, 255, 255, .66); }

  .lang-en { line-height: 1.7; }
  .lang-en h1 { max-width: 24ch; font-size: clamp(25px, 2.8vw, 36px); white-space: normal; }
  .lang-en .heroLead { line-height: 1.75; }
  .lang-en .sectionHead h2 { font-size: clamp(26px, 3.2vw, 40px); }

  @media (max-width: 1040px) {
    .nav { display: none; }
    .mobileNav { display: block; }
    .heroGrid { grid-template-columns: 1fr; gap: 36px; }
    .vignette { max-width: 560px; }
    .designPoints { grid-template-columns: 1fr; }
    .compareRow { grid-template-columns: 1fr; gap: 8px; }
    .characterGrid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .trustBlocks { grid-template-columns: 1fr; }
    .caregiverGrid, .teamPanel { grid-template-columns: 1fr; }
    .caregiverCopy { position: static; }
    .scene, .scene.flip { grid-template-columns: 1fr; }
    .scene.flip .sceneCopy { order: 1; }
    .scene.flip .sceneDialog { order: 2; }
  }
  @media (max-width: 620px) {
    .page { font-size: 17px; }
    .wrap { width: min(100% - 28px, 1080px); }
    .topbarInner { min-height: 60px; gap: 7px; }
    .brandMark { width: 36px; height: 22px; }
    .brand { font-size: 16px; }
    .langs { gap: 2px; margin-left: auto; flex-wrap: nowrap; }
    .langSeg .langBtn { min-width: 44px; padding: 0 10px; font-size: 14px; }
    .topbar .btn { display: none; }
    .hero { padding: 40px 0 44px; }
    h1 { font-size: clamp(27px, 7.4vw, 33px); }
    .heroLead { margin-top: 16px; font-size: 16.5px; }
    .ctaRow, .contactRow { width: 100%; align-items: stretch; }
    .ctaRow .btn, .contactRow .btn { flex: 1 1 100%; }
    .section { padding: 56px 0; }
    .page [data-anchor] { scroll-margin-top: 76px; }
    .progressSection { padding: 60px 0; }
    .sectionHead { margin-bottom: 26px; }
    .scene { padding: 20px 16px; }
    .sceneDialog { padding: 14px; }
    .bubble { font-size: 15px; max-width: 100%; }
    .milestone { grid-template-columns: 1fr; gap: 5px; padding: 18px 0 18px 18px; }
    .milestoneDate { font-size: 13.5px; }
    .milestone::before { top: 28px; }
    .principles li { grid-template-columns: 44px 1fr; font-size: 16px; }
    .characterGrid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px; }
    .pilotPanel, .footerPanel, .teamPanel, .principles { border-radius: 20px; }
    .shotFigure { padding: 10px; }
    .footer { padding-bottom: 40px; }
  }

  @media (max-width: 480px) {
    .characterGrid { grid-template-columns: 1fr; }
    .characterArt { width: 100%; max-width: 320px; margin: 0 auto 13px; }
  }

  @media (max-width: 440px) {
    .brand > span:last-child { display: none; }
    .mobileNav summary { padding-inline: 9px; }
    .carouselToggle { font-size: 14px; padding-inline: 10px; }
  }

  .reveal-ready [data-reveal] {
    opacity: 0; transform: translateY(20px);
    transition: opacity .65s cubic-bezier(.2, .8, .2, 1), transform .65s cubic-bezier(.2, .8, .2, 1);
  }
  .reveal-ready [data-reveal]:is(.inview, :target, :focus-within) { opacity: 1; transform: none; }
  .reveal-ready [data-reveal]:is(:target, :focus-within) { transition: none; }
  @keyframes riseIn { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: translateY(0); } }
  @keyframes signalBreath { 0%, 100% { opacity: .66; transform: scale(.97); } 50% { opacity: 1; transform: scale(1.04); } }
  @keyframes voicePulse { 0%, 100% { transform: scaleY(.55); opacity: .62; } 50% { transform: scaleY(1); opacity: 1; } }
  @media (prefers-reduced-motion: reduce) {
    * { scroll-behavior: auto !important; transition-duration: .01ms !important; animation-duration: .01ms !important; animation-delay: 0ms !important; animation-iteration-count: 1 !important; }
    .reveal-ready [data-reveal] { opacity: 1 !important; transform: none !important; }
  }
`;

export default DodoSite;
