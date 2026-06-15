# DoDo Plain-Language Copy Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make the approved DoDo homepage warmer, simpler, and more product-led while preserving its structure, safeguards, translations, and pilot focus.

**Architecture:** Keep the existing Vite and GitHub Pages setup, single React homepage module, translation helper, contact links, section order, and visual system. Update the source-content contract first, then revise the aligned English, Traditional Chinese, and Simplified Chinese copy in place.

**Tech Stack:** React 19, Vite 7, plain JavaScript, inline CSS, Node.js built-in modules.

---

### Task 1: Add the Phase 3 content contract

**Files:**
- Modify: `scripts/check-homepage-content.mjs`

- [x] **Step 1: Replace Phase 2 hero markers with Phase 3 plain-language markers**

Require:

```js
const plainLanguageRequired = [
  "Working prototype · Exploring Hong Kong pilot partners",
  "A Cantonese voice box for everyday companionship and support.",
  "Talk to DoDo",
  "daily needs",
  "community support",
  "no apps or touchscreens",
  "Speak",
  "Respond",
  "Understand needs",
  "Connect",
];
```

- [x] **Step 2: Keep safety and legacy-content rejection**

Continue requiring `not an emergency service`, the pilot CTA, illustrative qualification, product-stage language, and the existing unsupported-claim rejection list.

- [x] **Step 3: Run the contract and confirm it fails**

Run: `npm run check:content`

Expected: non-zero exit because the Phase 3 hero and simple four-step language are not present yet.

### Task 2: Simplify the main product story

**Files:**
- Modify: `dodo-launch.js`

- [x] **Step 1: Refine the hero**

Use a direct voice-box headline, a short explanation of conversation, reminders, daily needs, community connection, and no apps or touchscreens. Keep `Explore a Pilot Collaboration` primary and use the existing project presentation as a secondary `View Product Demo` action.

- [x] **Step 2: Broaden the unmet need**

Cover small needs between calls or visits, reluctance to use apps, and everyday worries that may not justify an emergency call.

- [x] **Step 3: Rewrite the four-step flow**

Use `Speak → Respond → Understand needs → Connect`, with careful language that describes intended support rather than detection, diagnosis, or automatic action.

- [x] **Step 4: Make the illustrative journey more everyday**

Show a Cantonese conversation, a reminder, difficulty buying an item or collecting medicine, and a trusted person deciding whether to help. Keep the scenario explicitly illustrative.

- [x] **Step 5: Make benefits and differentiation practical**

Add daily companionship, reminders, expressing small needs, updates for trusted people, support between visits, local Cantonese use, and connection to real community resources.

### Task 3: Keep professional language where it belongs

**Files:**
- Modify: `dodo-launch.js`

- [x] **Step 1: Make pilot evaluation concrete**

Describe testing whether older adults talk to DoDo, what daily needs they share, and whether service teams can use simple updates responsibly.

- [x] **Step 2: Preserve privacy and limitation language**

Keep consent, trusted contacts, authorised access, summary-level sharing, human decisions, and the explicit emergency and medical limitations.

- [x] **Step 3: Keep translations aligned**

Check every changed `tr(EN, TC, SC)` value for equivalent meaning and cautious capability framing.

### Task 4: Verify source and rendering

**Files:**
- Verify: `dodo-launch.js`
- Verify: `scripts/check-homepage-content.mjs`

- [x] **Step 1: Run source checks**

Run:

```powershell
npm run check:content
npm run build
git diff --check
```

Expected: all commands exit 0.

- [x] **Step 2: Verify desktop and mobile**

Check `1440 × 1000` and `390 × 844` for hero length, product visual position, card wrapping, CTA legibility, and horizontal overflow.

- [x] **Step 3: Verify all languages**

Confirm the hero, four-step headings, pilot copy, privacy wording, and final CTA switch consistently among English, Traditional Chinese, and Simplified Chinese.
