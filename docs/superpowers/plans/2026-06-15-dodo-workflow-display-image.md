# DoDo Workflow Display Image Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add the single confirmed workflow image to the public product landing page with clear partner-facing prototype labelling and no implication that it is the elderly-facing interface.

**Architecture:** Preserve the current page structure and visual system. Move the supplied image unchanged into Vite’s `public/assets/` directory, represent it with a one-item proof-image data array, and render one responsive figure in the existing Progress section.

**Tech Stack:** React 19, Vite 7, plain JavaScript, inline CSS, Node.js built-in modules.

---

### Task 1: Add source and asset checks

**Files:**
- Modify: `scripts/check-homepage-content.mjs`

- [x] Require the exact English label and non-elderly-interface caption.
- [x] Require the GitHub Pages-safe `import.meta.env.BASE_URL` asset reference.
- [x] Verify `public/assets/dodo-workflow-display-image-01.png` exists.
- [x] Run `npm run check:content` and confirm it fails before implementation.

### Task 2: Add the confirmed image

**Files:**
- Move: `dodo-workflow-display-image-01.png`
- Create: `public/assets/dodo-workflow-display-image-01.png`
- Modify: `dodo-launch.js`

- [x] Move the supplied PNG unchanged into `public/assets/`.
- [x] Add a one-item `PROOF_IMAGES` data array with aligned English, Traditional Chinese, and Simplified Chinese label, caption, and alt text.
- [x] Render the figure below the existing Progress content.
- [x] Use `object-fit: contain`, rounded corners, a light border, and responsive sizing without cropping image text.
- [x] Do not add any gallery, empty proof card, product-photo substitute, or interface claim.

### Task 3: Verify

**Files:**
- Verify: `dodo-launch.js`
- Verify: `scripts/check-homepage-content.mjs`
- Verify: `public/assets/dodo-workflow-display-image-01.png`

- [x] Run `npm run check:content`, `npm run build`, and scoped `git diff --check`.
- [x] Verify the image request succeeds on the Vite base path.
- [x] Verify desktop and mobile layout with no horizontal overflow.
- [x] Verify all three labels and captions.
- [x] Confirm the caption explicitly says older adults do not need to operate the interface.
