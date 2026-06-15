# DoDo Credibility Text Layer Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add an honest product-proof roadmap, short demo placeholder, and evidence-transparency note to the existing Evidence and Progress section.

**Architecture:** Keep the current Vite setup, single React homepage module, translation helper, inline styling, workflow image, and section order. Replace the existing progress-card labels and items with the approved roadmap, then add two compact text cards inside the workflow figure caption area.

**Tech Stack:** React 19, Vite 7, plain JavaScript, inline CSS, Node.js built-in modules.

---

### Task 1: Extend the credibility content contract

**Files:**
- Modify: `scripts/check-homepage-content.mjs`

- [x] Require `What exists now`, `What comes next`, the 90-second demo copy, the transparency note, `to be verified`, and the existing emergency-service limitation.
- [x] Continue rejecting unsupported partnership, pilot, clinical, emergency, hardware-readiness, wake-word, and medical-monitoring claims.
- [x] Run `npm run check:content` and confirm it fails because the new Phase 4B markers are absent.

### Task 2: Add the credibility text layer

**Files:**
- Modify: `dodo-launch.js`

- [x] Replace the current progress lists with aligned English, Traditional Chinese, and Simplified Chinese `What exists now` and `What comes next` content.
- [x] Keep the existing two-card progress layout and workflow image.
- [x] Add the exact translated 90-second demo placeholder inside the workflow figure caption.
- [x] Add the exact translated evidence-transparency note and cautious verification/collection status.
- [x] Add only lightweight styles needed for the two compact notes.

### Task 3: Verify and commit

**Files:**
- Verify: `dodo-launch.js`
- Verify: `scripts/check-homepage-content.mjs`
- Verify: `public/assets/dodo-workflow-display-image-01.png`

- [x] Run `npm run check:content`, `npm run build`, and `git diff --check`.
- [x] Verify desktop and mobile layout, all three languages, image loading, and horizontal overflow.
- [x] Confirm no unsupported claims or out-of-scope files were added.
- [x] Commit with `Add product proof roadmap to DoDo website`.
