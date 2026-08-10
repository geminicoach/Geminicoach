# Gemini Education — Content status (Classbuild & Revision thread)

*Last updated 2026-06-23. This thread owns COURSE CONTENT: expansion to CE depth, voice/tone scrub, homework + extra material. The other thread owns the front-end/portal/exam engine.*

## Depth spec (the bar every chapter must hit)
- ~6,800+ words of body prose per chapter (A-track and expanded B chapters run 6,700–8,100).
- One named case-study persona woven through the chapter.
- ~8 callouts (`<div class="ch-callout-label">Think About It</div>` pattern).
- Real, verifiable citations (WebSearch/PubMed-checked) in the phrasing "According to PubMed, [author] and [coauthor] ([year]) ..." plus a closing `<section class="ch-refs"><h2>References</h2>` list.
- Clinical-boundary language wherever conditions/symptoms/meds appear (coaches educate and refer; they do not diagnose or treat).
- NO em-dashes anywhere. NO "ClassBuild" branding.
- Two interactive `ch-widget` blocks per chapter preserved (came from ClassBuild export).

## CATALOG-WIDE SWEEP DONE 2026-08-03 (task #26)
Swept A1-A4, B1, B2, B3 + courses-data.js. Result: 0 em-dashes and 0 en-dashes remain in any course HTML (490 stray en-dashes, mostly citation page ranges and hyphenated compounds like sodium-potassium/dose-response, converted to plain hyphens; em-dashes were already 0). Acronym/receptor first-use expansion applied across 20 chapter files (49 flags reviewed; genuine biology first-uses expanded to full-name-then-acronym, e.g. glucagon-like peptide-1 (GLP-1), hypothalamic-pituitary-adrenal (HPA) axis, low-density lipoprotein (LDL), thyroid-stimulating hormone (TSH), adrenocorticotropic hormone (ACTH), gonadotropin-releasing hormone (GnRH), dehydroepiandrosterone (DHEA), irritable bowel syndrome (IBS), inflammatory bowel disease (IBD); base64/citation/id false positives skipped). B2's ER-alpha/ER-beta: chapters use plain "estrogen receptors" wording, no ER-a/ER-b notation existed to expand. NOTE: B2 was flagged as receptor-dense but the notation gap was smaller than expected. Committed f32930a; merged with origin (5ac6f23).
ENV NOTE: repo is OneDrive-synced with no .gitattributes, so Windows re-adds CRLF and creates phantom "modified" churn on files (shop.html/README/blog etc. showed 385+ line diffs that were 0 real changes under --ignore-all-space). A `.gitattributes` (e.g. `* text=auto eol=lf` or marking .html) would end this; deferred to avoid a mass renormalization commit mid-work.

## TWO STANDARDS LOCKED 2026-08-03 (apply to ALL modules + every future build)
1. **Em-dash regulation.** No em-dashes (—), no em-dash entities (&mdash;, &#8212;) anywhere in learner-facing content. Convert to commas or parentheses. En-dashes (–) in compound labels (e.g. "Brain–Gut–HPA") should be plain hyphens too. Applies to chapters, homework, quizzes, weekly challenges, exam banks. (Catalog-wide sweep of A1-A4/B1/B2 quiz+challenge files is task #26, still pending; B3 was authored clean. Two em-dashes remain in courses-data.js code COMMENTS only, lines 1 & 20, cosmetic.)
2. **Acronym / receptor expansion.** Spell out every abbreviation and receptor in FULL on first use, then the acronym in parentheses, e.g. "glucocorticoid receptor (GR)", "estrogen receptor alpha (ER-alpha)", "hypothalamic-pituitary-adrenal (HPA) axis", "cortisol awakening response (CAR)". Knowing the full receptor name is a learning objective, not optional. B2's ER-alpha/ER-beta gap is the origin of this rule; fix it in the #26 sweep. B3 authored to this standard throughout.

## Catalog state
- **Track A (A1–A4)** — complete, CE depth, QC-clean, **published**.
- **B1 — The Digestive System (10 ch: 8 core + 2 bonus)** — ✅ ALL 10 chapters expanded to CE depth AND voice/tone-swept to Parker's voice (2026-06-23). 0 em-dashes, 20 widgets intact (2/ch), References present. **Held from publish** until homework + extra material added.
  - Expanded: Ch1, 3, 4, 7, 8 (this session) + Ch2, 5, 6, 9, 10 (earlier).
  - Voice sweep done: nudged toward Parker's direct/no-fluff/myth-correcting register; killed repeated tics ("Here is the trap" now 0, plus "think of it as", "the truth is", "navigate", breathless hooks); lengths preserved (within ~2%).
  - Persona collisions RESOLVED: Ch3 Marisol→Renata, Ch4 Theo→Marcus, Ch8 Priya→Nadia. Final unique personas: Ch1 Marisol, Ch2 Sofia, Ch3 Renata, Ch4 Marcus, Ch5 Damon, Ch6 Hana, Ch7 Priya, Ch8 Nadia, Ch9 Theo, Ch10 Pearl.
  - REMAINING for B1: homework + additional material, then wire chapters array + cover image + publish:true.

### Parker's voice profile (use for all future sweeps)
Direct, declarative, no-fluff; confident and plain; calls out marketing/fads/myths head-on; evidence- and mechanism-forward but accessible; corrects misconceptions explicitly; second person used sparingly; NO em-dashes (commas + parenthetical asides); no hype, hedging filler, cutesy metaphors, or repeated catchphrases. Reference: his blog posts in the repo root (blog-*.html). Samples: "It is safe, it is effective." / "This is not a controversial claim. It is a thermodynamic reality."

---

# FULL CATALOG ROADMAP (17 courses) + build baseline

## The 7-stage pipeline (every course runs this)
0. **ClassBuild generate** (PJ) — produce the raw export (chapters + quizzes + weekly challenges + learning outcomes).
1. **Intake scrub** — strip em-dashes and ClassBuild branding; confirm self-contained; archive raw to Desktop master, scrubbed copy to repo.
2. **Expand to CE depth** — each chapter to ~6,800+ words, named case study, ~8 callouts, verified citations + References, clinical boundaries, keep 2 widgets.
3. **Voice sweep** — nudge to Parker's voice, kill tics, dedupe personas, preserve length/structure/citations/widgets.
4. **Homework + extra material** — SPEC TBD (see open question below).
5. **QC** — verify on real FS (Read/Grep, not bash): depth, 0 em-dash, 0 ClassBuild, widgets, citations, persona uniqueness.
6. **Publish** — build `chapters:[]` array in courses-data.js (template = A1/A2 entries), add cover image, set `published:true`, commit/push.

## Status table
| Code | Course | Ch | Pipeline stage reached |
|------|--------|----|------------------------|
| A1 | Basics of Nutrition | 8 | ✅ Published |
| A2 | Macro & Micronutrients + Building a Diet | 8 | ✅ Published |
| A3 | Supplementation | 8 | ✅ Published |
| A4 | Advanced Nutrition | 8 | ✅ Published |
| B1 | The Digestive System | 10 | Stages 2-5 done (expanded, voice-swept, homework built + QC'd). Needs 6 publish (wire homework + chapters[] + cover) |
| B2 | Endocrine / Hormones 101 | 12 | ✅ Chapters EXPANDED to CE depth (2026, role-neutral, branded, verified citations, 2 widgets each). Personas: Ch1 Colin, Ch2 Farah, Ch3 Ibrahim, Ch4 Lena, Ch5 Simone, Ch6 Diego, Ch7 Aisha, Ch8 Nate, Ch9 Bex, Ch10 Rafael, Ch11 Talia, Ch12 Grant. (Ch7 ~6,050w, slightly light.) STILL NEEDS: 36 homework files + exam bank. B2 is already published live by portal thread. |

### FULL-PARITY PROGRAM (in progress — autonomous)
Goal: bring B2 + A1-A4 to B1 parity (expanded chapters + homework + exam bank, all role-neutral + brand-linked). AESTHETIC: every new file must link the brand skin AFTER its inline style — chapters `<link rel="stylesheet" href="../../gem-theme-chapter.css">`, homework (worksheet/case/cheat-sheet) `<link rel="stylesheet" href="../../gem-theme-paper.css">`.
- ✅ B2 chapters expanded (12).
- ✅ B2 homework (36 files: 12 worksheet/case/cheat-sheet, branded via gem-theme-paper.css, role-neutral, hidden grader rubrics, localStorage gemHw:b2:caseN, 0 em-dash). Case clients: Dana, Owen, Rosa, Kenji, Bianca, Tariq, Noor, Victor, Elise, Sam, Gwen, Hugo.
- ✅ B2 exam bank: exams/b2-endocrine-hormones.js (interim 24 MC+TF, draw 20) + .full.js (43 all-types). exam.html auto-loads by slug, works now.
- ☐ WIRING (portal thread): add worksheet/caseAssignment/cheatsheet fields to B2's 12 chapter entries in courses-data.js so homework links show on the course page (same fields B1 uses). B2 exam needs no wiring (auto-loaded by slug). Also add these homework fields to B1 if the portal thread's courses-data.js rebuild dropped them.
- ✅ A1 homework (24, branded, role-neutral; cases Ben/Mira/Sean/Lucia/Cole/Nora/Wes/Tessa) + real exam (exams/a1-basics-of-nutrition.js interim 22 MC+TF draw16, +.full.js 40; placeholder replaced). Wiring: add homework fields to A1 chapter entries in courses-data.js (portal thread).
  NOTE: A-track CHAPTERS were authored pre-role-neutral-standard and may still contain coach/client framing in prose; homework is role-neutral. A full role-neutral sweep of A1-A4 chapters is a possible follow-up for total consistency (not done).
- ✅ A2 homework (24, cases Raj/Ellie/Marco/Sana/Dev/Kira/Jonah/Anya) + exam (exams/a2-macro-micro-diet.js interim + .full.js 40). Wiring → portal thread.
- ✅ A3 homework (24, cases Hank/Mel/Ravi/Jade/Tom/Lea/Kwan/Ruth) + exam (exams/a3-supplementation.js interim + .full.js 40). Wiring → portal thread.
- ◐ A4 (Advanced Nutrition) PARTIAL — session limit hit mid-build. DONE: Ch3 (all 3), Ch1 worksheet+case, Ch2 worksheet, Ch4 worksheet (7 files, some possibly unverified/incomplete from cutoff). REMAINING for A4:
    - Homework to finish: Ch1 cheat-sheet; Ch2 case+cheat-sheet; Ch4 case+cheat-sheet; Ch5, Ch6, Ch7, Ch8 all 3 each. (17 files) — verify the 7 partial ones are complete too. Case names used so far: Ch1 Omar, Ch3 Chris; assign Ch2 Bella, Ch4 Fatima, Ch5 Leon, Ch6 Rae, Ch7 Sil, Ch8 Dom. localStorage gemHw:a4:caseN.
    - A4 exam bank: author (2 fragments Ch1-4 + Ch5-8, ~40Q), assemble to exams/a4-advanced-nutrition.js interim + .full.js (contact_hours 8, ceu 0.8, title "Advanced Nutrition"). A4 slugs: 1 the-body-that-fights-back, 2 deficits-surpluses-and-the-math-of-change, 3 when-you-eat-signal-versus-noise, 4 keto-fasting-flexible-what-actually-drives-results, 5 the-chemical-messengers-of-hunger-and-fullness, 6 the-ecosystem-inside-you, 7 one-size-fits-no-one, 8 how-to-read-nutrition-science-without-getting-fooled.
- ✅ A4 (Advanced Nutrition) COMPLETE: 24 homework (cases Omar/Bella/Chris/Fatima/Leon/Rae/Sil/Dom) + exam (exams/a4-advanced-nutrition.js interim 22 MC+TF draw16, + .full.js 40).

## PROGRAM COMPLETE (all 6 courses at parity)
A1, A2, A3, A4, B1, B2 all have: CE-depth chapters + full homework (worksheet + case-assignment + cheat-sheet per chapter, role-neutral, gem-theme-paper.css branded, hidden grader rubrics) + exam bank (interim MC+TF live .js + full all-types .full.js). Exam files present for all 6 slugs.

### TWO cross-cutting items remain (NOT content — both are handoffs):
1. GIT PUSH: this entire multi-session run is UNCOMMITTED. `git add education/` then commit + push (clear .git/index.lock first if needed).
2. PORTAL THREAD: (a) wire homework links into courses-data.js — add worksheet/caseAssignment/cheatsheet fields to every chapter entry across all 6 courses so links render on course pages; (b) upgrade exam.html to render the new question types (matching / multi-select / word-bank / write-in) + rotation + the write-in first-pass grader & appeal workflow, then swap each course's *.full.js in for the interim MC+TF *.js. Spec: EXAM-SPEC.md.

### ✅ A-track chapters role-neutral (DONE): all 32 A1-A4 chapters swept role-neutral (prose + callout labels renamed to "In practice"/"Where education ends" + learner-visible widget-script feedback fixed). Verified: 0 "client", 0 coach-framing in prose across A1-A4. Only residuals are invisible JS identifiers (a `coach:` data key in one A4 widget) and one legitimate study description ("coached by health educators"). ENTIRE CATALOG (A1-A4, B1, B2) is now fully role-neutral and consistent.
NOTE: these A-track chapter edits (this sweep) are UNCOMMITTED - another `git add education/ && commit && push` needed.
Homework build pattern = B1's: worksheet (applied parts + CE-grade "Scope of Practice" section, role-neutral), case-assignment (role-neutral "Consider [Name]..." scenario + free-response + visible rubric + hidden machine-readable AI-grader rubric comment + unique localStorage key), cheat-sheet (one-page reference). Add the gem-theme-paper.css link to each. Then exam bank per EXAM-SPEC.md (full .full.js + interim MC/TF .js) and wire into courses-data.js + catalog.
| B3 | Cortisol & the Stress-Hormone System | 13 | ✅ COMPLETE + PUBLISHED. 13 chapters expanded to CE depth (0 em-dash, 2 widgets each, role-neutral, acronyms spelled out). 39 homework files (worksheet/case/cheat-sheet per ch, gem-theme-paper.css, hidden AI-grader rubrics pass_threshold:70, localStorage gemHw:b3:case1-13; case names Corinne/Bram/Noelle/Tomas/Greta/Amir/Selina/Otto/Della/Rourke/Petra/Cyrus/Willa). Exam bank exams/b3-cortisol.js (26 items, 20 MC+6 TF, draw 20, pass 80, contact_hours 13, ceu 1.3) + .full.js (36 all-types). Wired into courses-data.js (13-chapter array + homework fields, published:true). Chapter personas: Elias/Reuben/Sana/Malik/Wendy/Hector/Yara/Idris/Beatrice/Quentin/Freya/Roland/Sasha. |
| B4 | Reading Your Bloodwork | 10 | COMPLETE + PUBLISHED (2026-08-10). 10 CE-depth chapters (6,585-6,956 words, 0 dashes, 2 widgets each, role-neutral, LOCKED age-banded standard: per-marker ranges by age/life-stage, "in range is not optimal", reference-range-vs-decision-limit, confounders; Ch9 carries the TSH 0.7 young-adult worked example). Personas Marcus/Priya/Devon/Elena/Grant/Tobias/Nadia/Simone/Owen/Vera. 30 homework files (worksheet/case/cheat-sheet, gem-theme-paper.css, hidden AI-grader rubrics pass_threshold:70, localStorage gemHw:b4:case1-10; case names Harlan/Iris/Cole/Renata/Miles/Dahlia/Esther/Warren/Colby/Maren). Exam bank exams/b4-reading-bloodwork.js (26 items, 20 MC + 6 TF, draw 20, pass 80, contact_hours 10, ceu 1.0) + .full.js. ClassBuild quizzes/challenges intake-scrubbed (0 dashes, 0 ClassBuild). Wired into courses-data.js (10-chapter array + homework fields, image covers/b4.png, published:true). |
| B5 | Nervous System I: Foundations | ? | Stage 0 — not yet generated |
| B6 | Nervous System II: Applied | ? | Stage 0 — not yet generated |
| C1 | Musculoskeletal Anatomy & Lifting Biomechanics | ? | Stage 0 — not yet generated |
| C2 | Recovery Science | ? | Stage 0 — not yet generated |
| D1 | AAS: Education & Harm Reduction | ? | Stage 0 — not yet generated |
| D2 | Advanced Fat Loss | ? | Stage 0 — not yet generated |
| E1 | Energy Systems & Metabolism | ? | Stage 0 — not yet generated |
| E2 | Immune System & Inflammation | ? | Stage 0 — not yet generated |
| E3 | Female Physiology & the Menstrual Cycle | ? | Stage 0 — not yet generated |

Done: 4 / 17 published. Content-complete but unpublished: B1. Next in line: B2 (already exported, ready to expand).

## HOMEWORK SPEC (LOCKED 2026-06-23 — applies to every course)
On top of the per-chapter quiz + weekly challenge from ClassBuild, each chapter gets THREE homework artifacts (self-contained themed HTML, matching site fonts/palette, 0 em-dashes, Parker voice, clinical boundaries):
1. **Applied worksheet** — `worksheet-{n}-{slug}.html`. Problem sets / fill-ins / calculations / decision trees that make the learner APPLY the chapter. Print-friendly.
2. **Case assignment** — `case-assignment-{n}-{slug}.html`. Open-ended "apply it to a real client/scenario" prompt with a free-response area. Designed to feed the portal thread's AI free-response grader (include a model-answer/rubric block, kept in an HTML comment or a hidden section, for that grader).
3. **Cheat-sheet** — `cheat-sheet-{n}-{slug}.html`. One-page quick-reference summary of the chapter, print/download optimized.
(Not doing: separate further-reading lists / public answer keys — per PJ. Rubrics live with the case assignment for the grader.)
Status: B1 homework COMPLETE (2026-06-23). 30 files: 10 worksheets, 10 case assignments (each with a hidden machine-readable AI-grader rubric + visible self-check rubric), 10 cheat-sheets. All themed to match chapters, 0 em-dashes/entities, 0 ClassBuild, print-friendly. Case clients are unique across the course: Jordan, Andre, Wesley, Marcus, Carla, Mara, Priya, Hassan, Maya, Pearl.
CE-grade rule (learned from Ch1 review): NO glib one-word-answer exercises. Every applied/scope item must require reasoning (name the mechanism / red flag / boundary) plus the actual in-scope response. Scope of practice is treated as a real competency. Worksheet "Part F" is the model.

AUDIENCE & FRAMING STANDARD (LOCKED 2026-06-23 — applies to ALL courses, author this way from the start):
The reader is a LEARNER, not assumed to be a coach with clients. The audience includes lay learners, coaches, AND credentialed clinicians (e.g. RDs taking it for their own CE). So:
- Default to "you," a learner. Do NOT frame as "you, the coach, and your client." At most one optional "if you coach clients..." aside.
- Scope of practice = the LINE between general education and clinical care, plus "work within your role, whatever it is." Standard boundary line: "This course builds understanding, not a license to diagnose or treat, in yourself or anyone else. When a situation calls for diagnosis or treatment, that belongs to a qualified clinician."
- Red-flag symptoms are "signs that warrant medical evaluation" (health literacy), never a triage/diagnosis exercise. Never imply the learner diagnoses a named condition.
- Boundary callout label is "Where education ends" (not "Coaching boundary").
- B1 was retro-fitted to this on 2026-06-23 across all 10 chapters' boundary callouts + 30 homework files (0 em-dashes, 0 "client"/"Coaching boundary" in chapters/homework). KNOWN REMAINDER: the ClassBuild quiz + weekly-challenge files still contain 8 stray "client" mentions (1 each in 8 files); reframe those if full consistency is wanted.
STILL TO DO for B1 publish: wire the homework into the catalog/course page (courses-data.js chapter entries currently have reading/quiz/challenge fields only; add worksheet/case/cheatsheet fields + render them in course.html), build the chapters[] array, add cover image, set published:true.

## EXAM BANK (B1) — DONE 2026-06-23
`exams/b1-digestive-system.js`: 43-question certification bank grounded in the 10 chapters (18 mc, 6 multi-select, 6 T/F, 4 matching, 6 drag-drop word-bank fill-in, 3 write-ins). 0 em-dashes, unique ids, all answer keys present. Spec/schema in education/EXAM-SPEC.md. Write-ins parked (draw.free:0) until the PORTAL thread builds: new-type renderers (matching, word-bank, multi-select), random-subset rotation per attempt, and the write-in first-pass grader + appeal/audit workflow. Pass = 80% on objective items. Hand this spec + bank to the portal thread.

## Reusable prompt templates (for fast future builds)
- **Expansion** (proven this session): per chapter, read 2 expanded exemplars in the same course + the raw chapter; rewrite to 6,800+ words preserving structure/widgets/citations; add named case study + ~8 callouts + verified References + clinical boundaries; 0 em-dashes; verify on real FS.
- **Voice sweep** (proven this session): surgical edit toward Parker's voice profile (above); kill tics ("Here is the trap", "think of it as", "the truth is", "navigate", breathless hooks); preserve length within ~5%, structure, widgets, citations; assign unique persona name; verify on real FS via Read/Grep.
- **ClassBuild brief** (stage 0): per course, give ClassBuild the topic, target chapter count + titles, the "direct/no-fluff/evidence-forward" register, and the ch-section/2-widget/callout structure so exports come back close to spec.
- **B2 — Endocrine / Hormones 101 (12 ch)** — scrubbed/intaked, **all 12 still RAW** (3,065–4,445 words). Expansion **DEFERRED** (spend-cap caution). Resume in two waves of 6.
- **B3 (Cortisol), B4 (Reading Bloodwork), C/D/E tracks** — not yet generated.

## Pipeline per course (this thread)
ClassBuild export → scrub (em-dashes, ClassBuild branding) → expand to CE depth → voice/tone scrub → add homework + extra material → QC → publish.

## To PUBLISH a course (when ready)
In `courses-data.js`, the stub entry needs: a full `chapters:[...]` array (position, title, subtitle, minutes, reading/quiz/challenge paths — see A1/A2 entries as the template), an `image:` cover, `minutes_per_chapter`, and `published:true`. The chapter/quiz/weekly-challenge HTML files already exist for B1 and B2.

## Tooling gotcha (important)
This repo is OneDrive-synced. The Linux **bash mount lags/diverges** from the real files: it showed a stale word count for Edit-tool-written files and listed scratch files that do not exist on the real FS. **Authoritative tools = Read / Edit / Grep / Glob / Write** (these see the files git commits). Use those to verify, not bash word counts, for recently edited files.
