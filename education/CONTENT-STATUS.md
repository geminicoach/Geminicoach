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
| B2 | Endocrine / Hormones 101 | 12 | Stage 1 done (intake-clean, raw). Needs 2 expand → 3 → 4 → 5 → 6 |
| B3 | Cortisol & the Stress-Hormone System | ? | Stage 0 — not yet generated in ClassBuild |
| B4 | Reading Your Bloodwork | ? | Stage 0 — not yet generated |
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
