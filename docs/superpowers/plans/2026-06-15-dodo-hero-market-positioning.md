# DoDo Hero and Market Positioning Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Fix the existing DoDo hero logo presentation, warm the product identity language, and replace the dense comparison table with three respectful market-role cards.

**Architecture:** Keep the existing Vite entry point, single React homepage module, translation helper, inline CSS, contact links, workflow proof image, and section order. Make focused changes in `dodo-launch.js`, extend the dependency-free content contract, and add no assets or application/backend code.

**Tech Stack:** React 19, Vite 7, plain JavaScript, inline CSS, Node.js built-in modules.

---

### Task 1: Extend the Phase 4C content contract

**Files:**
- Modify: `scripts/check-homepage-content.mjs`

- [x] **Step 1: Add required product-identity and market-role markers**

Require these exact English strings:

```js
const phase4cRequired = [
  "A Cantonese smart companion for everyday support and connection.",
  "friendly voice companion",
  "Different roles in the elderly-care technology market",
  "Emergency alarm services",
  "General AI companions",
  "DoDo aims to explore",
  "complementary rather than replacement",
];
```

- [x] **Step 2: Reject aggressive or unsupported comparison claims**

Add these case-insensitive rejected phrases:

```js
[
  "better than all competitors",
  "only product in Hong Kong",
  "replaces emergency alarm services",
  "replaces 平安鐘",
  "replaces social workers",
  "reliable emergency detection",
]
```

- [x] **Step 3: Run the contract and verify the new requirements fail**

Run:

```powershell
npm run check:content
```

Expected: non-zero exit because the new hero and compact market-role copy are not yet present.

### Task 2: Fix the hero visual and refine product identity

**Files:**
- Modify: `dodo-launch.js`

- [x] **Step 1: Replace crop-based logo styling**

Keep the current logo image import. Remove oversized absolute-position transforms from `.brandMark img` and `.deviceLogo img`. Use the same asset as a centred CSS background so its transparent source margins can be handled without clipping the visible logo.

- [x] **Step 2: Update aligned hero copy**

Use:

```js
tr(
  "A Cantonese smart companion for everyday support and connection.",
  "陪伴長者日常生活的廣東話智能公仔。",
  "陪伴长者日常生活的粤语智能公仔。",
)
```

Update nearby explanatory copy and the visual-card label to use `friendly voice companion`, `智能陪伴公仔`, or equivalent cautious language while retaining `DoDo VoiceBox` as the brand and factual hardware name.

- [x] **Step 3: Keep all product-stage safeguards**

Do not change the existing working-prototype status, pilot-exploration status, emergency and medical limitations, or human-care replacement limitations.

### Task 3: Replace the dense comparison table

**Files:**
- Modify: `dodo-launch.js`

- [x] **Step 1: Replace comparison data**

Use three aligned role cards:

```text
Emergency alarm services
General AI companions
DoDo
```

Describe each as serving a different role. State that DoDo aims to explore Cantonese daily companionship, simple reminders, trusted updates, and community support connection.

- [x] **Step 2: Add a respectful section introduction**

Use `Different roles in the elderly-care technology market` and explain that emergency services, AI companions, and DoDo have different, complementary purposes.

- [x] **Step 3: Replace table CSS with responsive cards**

Render three equal-width cards on desktop and one column on mobile. Use neutral green/cream treatments, no red crosses, and no superiority language.

### Task 4: Verify and commit

**Files:**
- Verify: `dodo-launch.js`
- Verify: `scripts/check-homepage-content.mjs`
- Verify: `public/assets/dodo-workflow-display-image-01.png`
- Verify: `docs/superpowers/plans/2026-06-15-dodo-hero-market-positioning.md`

- [x] **Step 1: Run source and build checks**

Run:

```powershell
npm run check:content
npm run build
git diff --check
```

Expected: all commands exit 0.

- [x] **Step 2: Verify rendered desktop and mobile layouts**

At `1440 × 1000` and `390 × 844`, verify full logo visibility, vertical alignment, no covered hero content, no horizontal overflow, three comparison cards, and the Phase 4A image.

- [x] **Step 3: Verify all languages and browser console**

Switch among English, Traditional Chinese, and Simplified Chinese. Verify the hero identity and all three comparison cards change consistently, with no browser console errors.

- [x] **Step 4: Review and commit only approved files**

Run:

```powershell
git status --short
git diff --stat
git diff --cached --stat
```

Stage only the approved product-site source, checker, and plan, then commit:

```powershell
git commit -m "Refine DoDo product visual and market positioning"
```
