# Gemini Education — Certification Exam Spec

*Owner split: THIS (content) thread authors the question banks (`exams/<slug>.js`). The PORTAL thread builds the engine that renders, shuffles, scores, rotates, and runs the appeal/audit workflow. This doc is the contract between them.*

## Principles
- The credential's hard pass/fail rests on AUTO-SCORED objective items only (defensible, instant).
- Write-ins (free response) are OPTIONAL extras: auto first-pass score, with a human appeal/audit override. They never silently decide a pass on their own.
- Each attempt is account-linked, draws a randomized SUBSET from a larger bank, shuffles question order, and shuffles answer positions where applicable. Retakes differ.
- Pass mark: 80% (NASM-aligned). Bank size target: ~45 per course; draw ~25 per attempt.

## File format (extends the existing exam files)
`exams/<slug>.js` is a classic script that sets `window.GEM_EXAM`. Backward-compatible with the current A1 file (a bare MC object with no `type` still works as `mc`).

```js
window.GEM_EXAM = {
  slug: "b1-digestive-system",
  title: "The Digestive System",
  contact_hours: 10, ceu_value: 1.0, pass_threshold: 80,
  placeholder: false,
  // how many to draw per attempt, per type (random subset of each pool):
  draw: { mc: 12, multi: 4, tf: 4, match: 2, fill: 3, free: 0 }, // free:0 = write-ins available but off the graded path by default
  shuffle: { questions: true, options: true }, // option-shuffle applies to mc/multi
  questions: [ /* pool of all types, below */ ]
};
```

## Question-object schemas (all carry: id, chapter, type, points, explanation?)
`id` is stable (e.g. `b1-c2-mc-1`) so attempts/appeals can reference an exact item. `chapter` is provenance. `explanation` (optional) shows after submit.

- **Multiple choice** — `{ id, chapter, type:"mc", q, options:[...], answer:<index>, points:1, explanation? }`
- **Multi-select** — `{ id, chapter, type:"multi", q, options:[...], answers:[<indices>], scoring:"all_or_nothing", points:1 }` (all_or_nothing default; engine may offer proportional later)
- **True/False** — `{ id, chapter, type:"tf", q, answer:true|false, points:1 }` (cannot shuffle 2 options; engine draws these randomly and may store matched true/false pairs to vary polarity)
- **Matching** — `{ id, chapter, type:"match", q, pairs:[{left, right}], points:<#pairs> }` (engine shuffles the right column; score per correct pair)
- **Word-bank fill-in (drag-and-drop)** — `{ id, chapter, type:"fill", q:"... {{1}} ... {{2}} ...", bank:[tokens incl. distractors], answers:{ "1":"token", "2":"token" }, points:<#blanks> }` (engine renders draggable bank with a TAP-TO-PLACE fallback for mobile/accessibility; score per blank)
- **Write-in (free response)** — `{ id, chapter, type:"free", q, model:"model answer", key_points:[...], rubric:{ pass_threshold:70, points:[{desc,weight},...] }, points:5, appeal:true }` (auto first-pass via AI/keyword match; learner can appeal → human audit override → recompute → re-issue cert. Reuse the hidden rubric pattern already embedded in the case-assignment homework files.)

## Engine responsibilities (PORTAL thread)
1. Load `exams/<slug>.js`; per attempt draw the `draw` quotas at random per type; shuffle question order; shuffle mc/multi option order (track the mapping); shuffle matching right column.
2. Auto-score objective items; compute pass on objective points vs `pass_threshold`.
3. Persist per attempt to the account (extend `exam_attempts`): drawn item ids, learner answers, per-item score, total, pass/fail.
4. Write-ins: provisional auto score (server-side AI/keyword), store with an `appealable` flag; appeal pushes to a review queue; admin (PJ) view shows answer + rubric + auto-score with uphold/override; override recomputes and re-issues the certificate if it flips.
5. New renderers: matching, drag-and-drop word-bank (with tap fallback), multi-select; mc/tf/free already exist.

## Content responsibilities (THIS thread)
Author `exams/<slug>.js` to the schema above: ~45 grounded questions across the types, every item with a correct key, write-ins with model + rubric, 0 em-dashes, in Parker's voice. Status below.

### Banks
- A1: placeholder MC only (replace when A1 is tonally locked).
- B1: DONE (2026-06-23) — `exams/b1-digestive-system.js`, 43 questions grounded in the 10 chapters: 18 mc, 6 multi, 6 tf, 4 match, 6 fill, 3 free (write-ins parked via draw.free:0). 0 em-dashes, unique ids, all keys present. Draw ~25/attempt. Awaiting the portal thread's new-type renderers + rotation + write-in/appeal grader.
