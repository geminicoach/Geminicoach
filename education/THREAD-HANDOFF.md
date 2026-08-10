# Gemini Education — Classbuild & Revision thread HANDOFF

*Purpose: let a fresh thread continue the course build without re-deriving context. This thread owns COURSE CONTENT (expand ClassBuild exports to CE depth, homework, exams, standards). The portal/front-end/login lives in a SEPARATE thread. Read education/CONTENT-STATUS.md, CLASSBUILD-BRIEFS.md, EXAM-SPEC.md too.*

## Locations (two different places, do not confuse)
- **Repo = deployed site** (GitHub, geminicoach): `C:\Users\pjgru\OneDrive\Documents\Claude\Projects\Geminicoach\` ; course content under `education/courses/<slug>/`, catalog in `education/courses-data.js`, exams in `education/exams/`.
- **Desktop master archive** (raw ClassBuild exports, per module, NOT deployed): `C:\Users\pjgru\OneDrive\Desktop\Gemini\Education platform\Courses\<CODE - Name>\`.
- **ClassBuild exports land in**: `C:\Users\pjgru\Downloads\` (as `<slug>.zip` + `.classbuild.json` + `-learning-outcomes.csv/html`).
- ClassBuild itself is a hosted Chrome web app (PWA), NOT local code; its model is not editable from disk. Keep image generation ON. It uses Anthropic (Opus) for text + OpenAI for images.

## The pipeline (per course)
1. PJ runs ClassBuild (Stage 0) -> export to Downloads. (Briefs to paste are in CLASSBUILD-BRIEFS.md; give SELF-CONTAINED prompts, ClassBuild has no cross-course memory.)
2. File the raw export into the Desktop master folder for that module (extract the zip, flatten the top folder).
3. Copy chapter-*.html, quiz-*.html, weekly-challenge-*.html, learning-outcomes.html into repo `education/courses/<slug>/`.
4. IMAGES: extract embedded base64 images to files in `education/courses/<slug>/img/` and replace the `data:image...` src with `img/chN-imgK.ext` (a Python script does this; keeps files light so expansion agents never touch base64). PRESERVE these GPT images, do NOT strip them.
5. Expand each chapter to CE depth with subagents (model: sonnet), IN PLACE, matching template `education/courses/b3-cortisol/chapter-1-the-most-misunderstood-molecule.html`. Each agent must keep the `img/` references as `<figure>` blocks with captions.
6. Homework: 3 files per chapter (worksheet / case-assignment / cheat-sheet), matching templates in `education/courses/b1-digestive-system/*-1-the-eight-meter-machine-*`. Hidden AI-grader rubric comment (pass_threshold:70), localStorage key `gemHw:<code>:caseN`, textarea + counter, visible <details> rubric, gem-theme-paper.css.
7. Exam bank: `education/exams/<slug>.js` (interim: ~20 MC + ~6 TF as 2-option MC, draw 20, pass 80) + `<slug>.full.js` (richer types, parked). Match `education/exams/b3-cortisol.js` / `.full.js`.
8. Scrub the ClassBuild quizzes/weekly-challenges: convert en/em dashes to hyphens/commas, replace "ClassBuild" with "Gemini Education".
9. Wire into `education/courses-data.js`: replace the stub with a full entry (chapters array with position/title/subtitle/reading/quiz/challenge/worksheet/caseAssignment/cheatsheet), set `image:"covers/<code>.png"` if a cover exists, `published:true`, `minutes_per_chapter`. Verify with `node -e 'global.window={};require("./courses-data.js");...'`.
10. Commit `education/`. PJ pushes (no git creds in sandbox).

## LOCKED STANDARDS (every chapter/homework/exam)
- ZERO em-dashes AND en-dashes anywhere (use commas/parentheses/hyphens). No "ClassBuild". No "client".
- Role-neutral: address "a learner" reading/understanding for themselves; never assume they coach clients.
- Boundary callout labeled "Where education ends" with EXACT line: "This course builds understanding, not a license to diagnose or treat, in yourself or anyone else. When a situation calls for diagnosis or treatment, that belongs to a qualified clinician." Red flags = "signs that warrant medical evaluation," never a diagnosis exercise.
- Spell out EVERY abbreviation/receptor in full on first use, then the acronym, e.g. "glucocorticoid receptor (GR)", "hypothalamic-pituitary-adrenal (HPA) axis".
- Depth ~6,300-7,600 words/chapter; one named case-study persona (unique per chapter); ~8 callouts; exactly 2 interactive widgets; verified citations phrased "According to [author] ([year])..." + a References section.
- PRESERVE the ClassBuild GPT images (as img/ files in <figure> blocks). Parker voice: direct, no-fluff, evidence-forward, myth-correcting.
- B4-specific LOCKED rule: age-banded / life-stage ranges per marker; "in range is not optimal"; reference range vs decision limit; confounders. (See CLASSBUILD-BRIEFS.md B4 note.)

## STATUS (2026-08-10)
- PUBLISHED + complete: A1, A2, A3, A4, B1, B2, B3, B4.
- Covers wired: A1, A3, A4, B1, B2 (jpg); B4 (covers/b4.png by portal thread). A2 + B3 covers pending (PJ generating individually with the style block in chat).
- **B5 (Nervous System I) IN PROGRESS**: raw staged in repo `courses/b5-nervous-system-i/`; 18 images extracted to `img/`; quizzes/challenges scrubbed.
  - Chapters EXPANDED (images preserved): Ch1, Ch2, Ch3, Ch4, Ch5.
  - Chapters STILL RAW (need expansion): **Ch6 (listening-from-the-inside), Ch7 (from-intention-to-movement), Ch8 (the-brain-that-rewires-itself), Ch9 (the-night-shift-how-rest-rebuilds-the-system)**. Personas already used Ch1-5: Theo, Lena, Amara, Ravi, Josephine. Suggested for Ch6-9: Cato, Bianca, Dmitri, Halle.
  - REMAINING for B5: expand Ch6-9, then 27 homework files (9 ch x3; case names gemHw:b5:case1-9), exam bank (contact_hours ~9, ceu 0.9, slug b5-nervous-system-i), wire into courses-data.js + publish.
- B6 (Nervous System II): ClassBuild prompt written (in chat + CLASSBUILD-BRIEFS.md). Not yet generated by PJ.
- REMAINING courses to build: B6, C1, C2, D1, D2, E1, E2, E3.
- OPEN: D-track peptide module decision (see CLASSBUILD-BRIEFS.md D2 note); catalog-wide SVG/figure task #25 (superseded by "preserve GPT images" approach); retrofit GPT images into B3 + B4 (they were built before the preserve-images decision, so their in-chapter images were dropped; originals safe in the Downloads/Desktop zips, recover from there).

## Git / environment gotchas
- OneDrive-synced repo, no .gitattributes -> Windows re-adds CRLF and creates phantom "modified" churn (files show huge diffs that are 0 real change under `git diff --ignore-all-space`). Do NOT blind `git pull --rebase --autostash` (it conflicts). Reconcile: discard CRLF-only churn, then pull/merge, then push.
- Sandbox has NO git push creds; PJ pushes from PowerShell: `cd <repo>; git push origin main`.
- Verify on the real FS with Read/Grep/Glob (authoritative), not bash word counts, for freshly written files.
- Build subagents run on model: sonnet to conserve credits.
