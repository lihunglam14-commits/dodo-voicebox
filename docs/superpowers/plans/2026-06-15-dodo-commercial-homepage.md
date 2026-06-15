# DoDo Commercial Homepage Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reposition the existing DoDo VoiceBox homepage as an honest, pilot-partner-focused early-stage gerontechnology product landing page.

**Architecture:** Keep the existing Vite entry point, GitHub Pages base path, single React homepage module, translation object pattern, and direct contact links. Replace the homepage content and layout in `dodo-launch.js`, add a dependency-free source-content verification script, and expose that script through npm.

**Tech Stack:** React 19, Vite 7, plain JavaScript, inline CSS, Node.js built-in modules.

---

### Task 1: Add Homepage Content Contract

**Files:**
- Create: `scripts/check-homepage-content.mjs`
- Modify: `package.json`

- [ ] **Step 1: Write the failing content check**

Create a Node script that reads `dodo-launch.js` and asserts:

```js
const required = [
  "Working prototype seeking Hong Kong pilot partners",
  "Explore a Pilot Collaboration",
  "How DoDo works",
  "An illustrative journey",
  "Benefits by audience",
  "Why DoDo is different",
  "Pilot collaboration for NGOs and elderly service providers",
  "Current stage: working prototype",
  "Privacy and limitations",
  "About the project team",
];
```

The script must also reject an embedded YouTube iframe, animal-gallery imports, repeated FAQ data, and unsupported phrases such as `detects crisis`, `guarantees safety`, `prevents emergencies`, `monitors health`, `identifies medical risk`, and `clinically validated`.

- [ ] **Step 2: Add the npm command**

Add:

```json
"check:content": "node scripts/check-homepage-content.mjs"
```

- [ ] **Step 3: Run the check and verify it fails**

Run: `npm run check:content`

Expected: non-zero exit because the approved pilot-focused copy and section markers are not yet present.

### Task 2: Rewrite the Homepage In Place

**Files:**
- Modify: `dodo-launch.js`

- [ ] **Step 1: Replace the content model**

Keep `tr(EN, TC, SC)`, contact constants, language controls, icon rendering, and reduced-motion support. Replace the old problem, feature, connection, appearance, video, and FAQ data with aligned translations for:

```text
Hero
Unmet need
How DoDo works
Illustrative user journey
Benefits by audience
Why DoDo is different
Pilot collaboration
Evidence and progress
Privacy and limitations
Team
Final CTA
```

- [ ] **Step 2: Replace the rendered page structure**

Use the primary CTA label `Explore a Pilot Collaboration` and route it to `#pilot`. Keep the existing YouTube presentation URL only as a secondary `Full Project Presentation` link. Do not embed the presentation.

- [ ] **Step 3: Replace the page styles**

Preserve the existing warm green visual system, rounded cards, pill controls, and responsive breakpoints. Shorten the mobile hero, place the product/prototype visual before supporting detail on mobile, vary section treatments, and keep the pilot section visually prominent.

- [ ] **Step 4: Keep claims cautious**

Use `working prototype`, `designed to support`, `may receive`, `may include`, `explore`, and `illustrative`. Explicitly state that DoDo is not an emergency service, medical device, clinically validated monitoring system, or replacement for professional or human care.

### Task 3: Verify Content and Production Build

**Files:**
- Verify: `scripts/check-homepage-content.mjs`
- Verify: `dodo-launch.js`
- Verify: `package.json`

- [ ] **Step 1: Run the content contract**

Run: `npm run check:content`

Expected: exit 0 with all required sections and cautious-language checks passing.

- [ ] **Step 2: Run the production build**

Run: `npm run build`

Expected: Vite build exits 0 without compilation errors.

### Task 4: Verify Rendered Desktop and Mobile Experiences

**Files:**
- Verify rendered output only; do not add browser test artifacts to the repository.

- [ ] **Step 1: Start the local Vite server**

Run: `npm run dev -- --port 5173`

- [ ] **Step 2: Verify desktop at 1440 x 1000**

Confirm the hero shows the prototype status, product visual, pilot CTA, secondary demo/presentation action, and no horizontal overflow. Confirm all required sections render in the approved order.

- [ ] **Step 3: Verify mobile at 390 x 844**

Confirm the hero is concise, the visual appears early, CTAs remain legible, cards collapse to one column, and no content is clipped horizontally.

- [ ] **Step 4: Verify translations**

Switch among Traditional Chinese, Simplified Chinese, and English. Confirm the hero, navigation, pilot CTA, section headings, and final CTA change language consistently.

### Task 5: Final Review

**Files:**
- Review: `dodo-launch.js`
- Review: `scripts/check-homepage-content.mjs`
- Review: `package.json`
- Review: `docs/superpowers/plans/2026-06-15-dodo-commercial-homepage.md`

- [ ] **Step 1: Review the diff**

Run: `git diff --check` and `git diff --stat`.

- [ ] **Step 2: Re-run final verification**

Run:

```powershell
npm run check:content
npm run build
```

Expected: both commands exit 0.
