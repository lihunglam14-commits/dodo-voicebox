import { readFile } from "node:fs/promises";
import { access } from "node:fs/promises";

const source = await readFile(new URL("../dodo-launch.js", import.meta.url), "utf8");
const indexHtml = await readFile(new URL("../index.html", import.meta.url), "utf8");
const failures = [];
const workflowImageUrl = new URL(
  "../public/assets/dodo-workflow-display-image-01.png",
  import.meta.url,
);

const requiredPhrases = [
  "Working prototype · Exploring Hong Kong pilot partners",
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

const productSpecificRequired = [
  "voice box",
  "Cantonese",
  "daily needs",
  "community support",
  "no apps or touchscreens",
  "Talk to DoDo",
  "Share simple updates with trusted people",
  "Care Console",
  "Elderly → DoDo → Community",
  "Physical VoiceBox",
  "Understand needs",
  "What the pilot evaluates",
  "Current prototype includes",
  "Still being refined",
];

const plainLanguageFlow = ["Speak", "Respond", "Understand needs", "Connect"];

const workflowProofRequired = [
  "Prototype workflow display",
  "This screen is used to visualise the DoDo interaction flow for partners.",
  "Older adults would mainly use the VoiceBox through speech, without needing to operate this interface.",
  "import.meta.env.BASE_URL",
  "assets/dodo-workflow-display-image-01.png",
];

for (const phrase of requiredPhrases) {
  if (!source.includes(phrase)) {
    failures.push(`Missing required homepage phrase: "${phrase}"`);
  }
}

for (const phrase of productSpecificRequired) {
  if (!source.includes(phrase)) {
    failures.push(`Missing product-specific homepage phrase: "${phrase}"`);
  }
}

for (const phrase of plainLanguageFlow) {
  if (!source.includes(`"${phrase}"`)) {
    failures.push(`Missing plain-language flow step: "${phrase}"`);
  }
}

for (const phrase of workflowProofRequired) {
  if (!source.includes(phrase)) {
    failures.push(`Missing workflow proof marker: "${phrase}"`);
  }
}

try {
  await access(workflowImageUrl);
} catch {
  failures.push(
    "Missing workflow image at public/assets/dodo-workflow-display-image-01.png.",
  );
}

const pilotCtaCount = source.split("Explore a Pilot Collaboration").length - 1;
if (pilotCtaCount < 3) {
  failures.push(
    `Primary pilot CTA must be used consistently at least 3 times; found ${pilotCtaCount}.`,
  );
}

const removedPatterns = [
  ["embedded academic presentation", /youtube\.com\/embed/i],
  ["animal gallery image imports", /cute (panda|capybara|penguin|sloth)\.png/i],
  ["animal gallery data", /const APPEARANCES\s*=/],
  ["repetitive FAQ data", /const FAQ\s*=/],
  ["legacy video-first CTA", /Watch (the intro )?video/i],
];

for (const [label, pattern] of removedPatterns) {
  if (pattern.test(source)) {
    failures.push(`Legacy ${label} is still present.`);
  }
}

const unsupportedClaims = [
  "detects crisis",
  "detects distress",
  "guarantees safety",
  "prevents emergencies",
  "monitors health",
  "identifies medical risk",
  "clinically validated",
  "automatically alerts care teams",
  "automatically escalates",
  "predicts emergencies",
];

const lowerSource = source.toLowerCase();
for (const claim of unsupportedClaims) {
  if (lowerSource.includes(claim)) {
    failures.push(`Unsupported claim is present: "${claim}"`);
  }
}

for (const match of source.matchAll(/d:\s*"([^"]+)"/g)) {
  if (/\d\.\d\.\d\.\d/.test(match[1])) {
    failures.push(`Malformed SVG path number sequence: "${match[1]}"`);
  }
}

if (!source.includes("not an emergency service")) {
  failures.push('Missing explicit limitation: "not an emergency service".');
}

if (!source.includes("illustrative scenario")) {
  failures.push('Missing the user-journey qualifier: "illustrative scenario".');
}

if (!/<link\b[^>]*\brel=["']icon["'][^>]*\bhref=["'][^"']+["'][^>]*>/i.test(indexHtml)) {
  failures.push("Missing an explicit favicon link in index.html.");
}

if (failures.length > 0) {
  console.error("Homepage content checks failed:");
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log("Homepage content checks passed.");
