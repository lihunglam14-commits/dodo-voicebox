# DoDo VoiceBox 90-Second Demo Production Asset Plan

## Purpose

This document defines how to organise future production assets for the DoDo
VoiceBox 90-second product demo. It supports the approved storyboard and filming
checklist while keeping private material, working files, review exports, and
public deliverables clearly separated.

Related documents:

- `docs/dodo-90-second-product-demo-script-storyboard.md`
- `docs/dodo-90-second-demo-filming-checklist.md`

This plan does not authorise publication of any footage or a website update.

## Recommended Folder Structure

Create the production workspace outside the public website repository unless the
product owner explicitly approves individual public assets.

```text
production/dodo-90-second-demo/
  00-production-admin/
    shot-list/
    asset-register/
    claims-review/
  01-raw-footage/
    scene-01-everyday-gap/
    scene-02-meet-dodo/
    scene-03-speak-respond-remind/
    scene-04-daily-needs/
    scene-05-trusted-updates/
    scene-06-pilot-collaboration/
  02-screen-recordings/
    website/
    workflow-display/
  03-voice-over/
    english/
    cantonese/
    room-tone/
  04-subtitles/
    source/
    review/
    final/
  05-graphics/
    disclosure-labels/
    title-cards/
    prototype-illustrations/
    end-card/
  06-release-forms-private/
    people/
    locations/
    music-and-media/
  07-edit-project/
    project-files/
    proxies/
    cache/
  08-review-exports/
    internal/
    claims-review/
    product-owner-review/
  09-final-exports/
    masters/
    captioned/
    web/
    thumbnails/
```

### Folder Rules

- `00-production-admin/` contains the current shot list, asset register, prototype
  version record, and claims-review notes.
- `01-raw-footage/` contains original camera and production audio files. Preserve
  originals and do not overwrite them.
- `02-screen-recordings/` contains only approved public website captures and the
  partner-facing workflow display.
- `03-voice-over/` contains narration masters, pickups, and room tone.
- `04-subtitles/` separates editable subtitle sources from reviewed final files.
- `05-graphics/` contains disclosure labels, title cards, illustrations, and the
  end card. Every illustration must retain its disclosure label.
- `06-release-forms-private/` contains personal and contractual records. Keep it
  in restricted private storage and never commit it to a public repository.
- `07-edit-project/` contains editor project files, proxies, render cache, and
  temporary working files.
- `08-review-exports/` contains watermarked or clearly versioned review copies.
- `09-final-exports/` contains only approved final deliverables. Public files may
  be copied elsewhere only after the publication gate passes.

## Naming Convention

Use lowercase ASCII, hyphens between words, and ISO dates in `YYYYMMDD` format.
Do not put participant names, health details, addresses, or other personal data
in file names.

### Common Pattern

```text
dodo90-<asset-type>-<scene-or-language>-<description>-<date>-v<version>.<ext>
```

Examples:

```text
dodo90-footage-s03-wide-actor-speaks-20260620-v01.mov
dodo90-footage-s03-close-dodo-response-20260620-v02.mov
dodo90-screen-homepage-hero-en-20260620-v01.mp4
dodo90-screen-workflow-display-tc-20260620-v01.mp4
dodo90-vo-en-full-20260621-v03.wav
dodo90-vo-yue-scene-03-pickup-20260621-v01.wav
dodo90-subtitles-en-final-20260624-v02.srt
dodo90-subtitles-tc-final-20260624-v02.vtt
dodo90-graphic-prototype-illustration-en-v01.png
dodo90-review-claims-20260625-v04.mp4
dodo90-final-en-captioned-1080p-20260627-v01.mp4
```

### Footage

```text
dodo90-footage-s<scene>-<shot-size>-<description>-<date>-v<version>.<ext>
```

Use shot sizes such as `wide`, `medium`, `close`, and `detail`. Keep camera-card
originals unchanged; apply the convention to copied production masters or
catalogue references.

### Screenshots and Screen Recordings

```text
dodo90-screen-<page-or-section>-<language>-<date>-v<version>.<ext>
```

Use language codes:

- `en` for English;
- `tc` for Traditional Chinese;
- `sc` for Simplified Chinese.

### Voice-Over and Production Audio

```text
dodo90-vo-<language>-<full-or-scene>-<date>-v<version>.wav
dodo90-audio-room-tone-<location>-<date>-v<version>.wav
```

Use `yue` for Cantonese audio where a technical language code is useful.

### Subtitles

```text
dodo90-subtitles-<language>-<status>-<date>-v<version>.<ext>
```

Use `draft`, `review`, or `final` as the status. Keep editable source, `.srt`, and
`.vtt` versions together by version number.

### Graphics and Prototype Illustrations

```text
dodo90-graphic-<type>-<language>-v<version>.<ext>
```

Types include `title-card`, `disclosure`, `workflow`, `prototype-illustration`,
`end-card`, and `thumbnail`.

### Review and Final Exports

```text
dodo90-review-<review-stage>-<date>-v<version>.mp4
dodo90-final-<language>-<caption-status>-<resolution>-<date>-v<version>.mp4
```

Review stages include `internal`, `claims`, and `product-owner`. Caption status
should be `captioned` or `clean`.

### Release Forms

Use private identifiers rather than names:

```text
dodo90-release-person-p001-20260620-signed.pdf
dodo90-release-location-l001-20260620-signed.pdf
dodo90-release-media-m001-20260620-signed.pdf
```

Keep the identifier-to-person mapping in restricted private storage, separate
from the production repository.

## Required Raw Assets

- Current physical VoiceBox prototype footage, if the device is shown as real.
- Scene 1 staged home footage labelled as an illustrative or staged scene.
- Scene 2 real prototype wide shot and confirmed-detail close-ups.
- Scene 3 continuous or honestly edited prototype voice-interaction footage.
- Scene 4 appointment, grocery, and medicine-collection illustrative inserts.
- Scene 5 partner-facing workflow display capture and human-review staged footage.
- Scene 6 prototype or labelled illustration, website pilot section, and end card.
- Clean location sound and room tone.
- English narration master.
- Cantonese narration master.
- English subtitle source and final files.
- Traditional Chinese subtitle source and final files.
- Approved disclosure-label graphics.
- Approved DoDo logo and end-card contact details.
- Asset register recording source, owner, consent status, disclosure status, and
  publication approval for every item.

## Optional Assets

- Secondary camera angles for prototype interaction.
- Close-up footage of confirmed lights, speakers, or controls.
- Additional neutral home-environment inserts.
- Simplified Chinese subtitles.
- Separate vertical or square crops for social media, approved after the main
  16:9 version.
- Licensed background music and proof of licence.
- Approved ambient sound effects.
- Behind-the-scenes documentation that does not reveal private data or unverified
  product functionality.
- Thumbnail variations for accessibility and platform testing.

Optional assets must follow the same disclosure, consent, claims, and approval
rules as required assets.

## Screenshot and Screen-Recording Requirements

- Capture the live public website, not a local development build, unless a local
  capture is explicitly identified.
- Record the browser at a clean 16:9 resolution, preferably `1920x1080`.
- Hide bookmarks, personal accounts, notifications, unrelated tabs, and browser
  extensions.
- Capture the hero with the full DoDo logo and `Working prototype` status.
- Capture `Speak`, `Respond`, `Understand needs`, and `Connect` only with their
  cautious product-stage context.
- Capture `What exists now`, `What comes next`, and the pilot CTA.
- Keep the Phase 4A workflow image and its explanatory caption together.
- Keep the label `Prototype workflow display for partners` visible.
- Do not frame the public website or workflow display as the elderly-facing
  VoiceBox interface.
- Do not record internal dashboards, admin pages, tokens, private data, or
  unverified Care Console functionality.
- Confirm there are no missing assets, loading states, visible cursors, selection
  highlights, or console errors in the retained capture.
- Store the page language, live URL, capture date, and website commit SHA in the
  asset register.

## Voice-Over File Requirements

- Record English and Cantonese as separate tracks.
- Use uncompressed `WAV`, preferably `48 kHz`, `24-bit`, mono.
- Preserve untouched recording masters and edit copies separately.
- Record at least two complete takes plus pickups.
- Record at least 10 seconds of room tone.
- Use a warm, calm, conversational delivery.
- Do not rush `working prototype`, consent, limitation, or pilot-collaboration
  wording.
- Do not improvise claims about safety, health, monitoring, validation, pilots,
  partners, deployment, or hardware readiness.
- Include language, take, date, and version in every file name.
- Export a review mix only after checking pronunciation and script alignment.

## Subtitle File Requirements

- Prepare English and Traditional Chinese subtitle tracks.
- Keep an editable source plus final `.srt` and `.vtt` files.
- Match subtitles to the approved final narration and dialogue.
- Subtitle the actor and DoDo interaction as well as the narrator.
- Keep disclosure labels separate from subtitles so they remain continuously
  visible when required.
- Use short lines, natural phrase breaks, high contrast, and mobile-readable size.
- Verify Cantonese and Traditional Chinese with a fluent reviewer.
- Check timing, punctuation, arrows, product naming, and limitation wording.
- Export both captioned video and clean video with separate subtitle files where
  the publishing platform supports them.

## Consent and Release Storage Rules

- Never commit private consent or release forms to a public repository.
- Never commit identifiable raw footage without explicit written approval.
- Store `06-release-forms-private/` in access-controlled, encrypted private
  storage with backups appropriate to the sensitivity of the records.
- Limit access to named production and product-owner personnel.
- Keep personal contact details out of file names, edit projects, and public asset
  registers.
- Use private participant identifiers such as `p001`.
- Store the identifier-to-person mapping separately from media and release files.
- Record consent scope, approved channels, expiry or withdrawal terms, and
  publication status.
- Do not use footage beyond the signed scope.
- Remove real health, address, appointment, medication, and care information from
  all footage, props, screenshots, and metadata.
- Do not describe actors as users, pilot participants, caregivers, NGO staff, or
  research participants.
- Review metadata before sharing files; camera and document metadata may contain
  names, locations, or device information.

## Prototype Illustration and Staged-Scene Labelling

Use these exact labels:

- `Prototype illustration` / `原型示意圖`
- `Illustrative scene` / `情境示意`
- `Staged demonstration` / `模擬示範`

Use `Controlled working-prototype demonstration` only when the physical prototype
performs the behaviour shown and the edit does not materially change what
happened.

Labelling requirements:

- Place the label on the image or video while the relevant material is visible.
- Use high-contrast text that remains readable on mobile.
- Do not hide the label behind subtitles, logos, or platform controls.
- Include the disclosure status in the asset register and file metadata.
- Keep labels through review and final exports; do not treat them as temporary
  editor notes.
- Label simulated, reconstructed, animated, or post-produced product behaviour as
  `Prototype illustration`.
- Label actors performing daily-life situations as `Illustrative scene` or
  `Staged demonstration`.
- Do not present website screens as the elderly-facing product interface.
- Do not imply completed pilots, emergency detection, medical monitoring,
  clinical validation, reliable hands-free wake behaviour, or production-ready
  hardware.

## Repository and Storage Policy

The recommended `production/` tree is a production-workspace design, not a list
of folders to add automatically to the public website repository.

Do not publicly commit:

- `06-release-forms-private/`;
- identifiable raw footage without approval;
- private contact or participant records;
- editor cache, proxies, autosaves, or temporary renders;
- unreviewed exports;
- footage containing real health, address, appointment, or care information;
- internal dashboards, tokens, credentials, or private software screens.

Files that may be considered for public storage after explicit approval:

- final public video exports;
- final subtitle files;
- approved thumbnails;
- approved disclosure graphics;
- assets with confirmed licences and consent.

Final public exports should be added only after claims review, accessibility
review, product-owner approval, and confirmation of the intended hosting method.

## Final Export Checklist

- [ ] Final runtime is close to 90 seconds.
- [ ] Master export is `1920x1080`, 16:9, with an approved delivery codec.
- [ ] A high-quality master and web-optimised copy are retained separately.
- [ ] English and Traditional Chinese narration versions are correctly identified.
- [ ] Captioned exports and separate `.srt` or `.vtt` files are present.
- [ ] Audio levels are consistent and dialogue is clear.
- [ ] Disclosure labels remain readable for the full relevant shot.
- [ ] Real prototype footage shows only behaviour that occurred.
- [ ] Staged scenes and illustrations are labelled correctly.
- [ ] The workflow display remains identified as partner-facing.
- [ ] The website is not presented as the elderly-facing product interface.
- [ ] `Working prototype` and the emergency-service and medical-device limitation
      are readable.
- [ ] No completed pilot, partner, deployment, validation, emergency, monitoring,
      or hardware-readiness claim is implied.
- [ ] No private data, credentials, internal screen, or identifiable record appears.
- [ ] Website URL, QR code, contact method, logo, and product name are correct.
- [ ] Music, fonts, footage, voices, people, and locations have documented rights.
- [ ] Claims review, subtitle review, and product-owner review are complete.
- [ ] Final files have checksums or another integrity record.
- [ ] Approved final exports are copied to `09-final-exports/`.
- [ ] Review exports and final exports cannot be confused by file name or folder.

## Website Update Conditions

Keep the website text:

`90-second product demo coming next`

Do not replace it with:

`Watch the 90-second product demo`

until all of these conditions are met:

1. The final 90-second video has been produced.
2. Product capability and marketing claims have been reviewed.
3. English and Traditional Chinese subtitles have been added and checked.
4. Prototype, illustration, illustrative-scene, and staged-demonstration labels
   are visible wherever required.
5. The product owner has approved publication.
6. A stable final video URL is available.

Before changing the website, also confirm:

- the final video reflects the current prototype version;
- the emergency-service and medical-device limitation remains available;
- the video URL and poster image work on desktop and mobile;
- the hosting platform supports captions or accessible subtitle files;
- the recording month and prototype version can be stated accurately;
- no partner, pilot, user-feedback, validation, or deployment claim has been
  introduced without verification.

Only after these checks should the website placeholder, CTA target, transcript,
captions, and accessible description be updated.
