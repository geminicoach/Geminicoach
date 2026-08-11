# Gemini Education — Assessment Engine Spec (for the PORTAL/front-end thread)

*Requirements from PJ, 2026-08-11. The content thread has done what it can in the static files (item A below is DONE). Items B, C, D require the portal exam/quiz engine + Supabase backend and are the portal thread's build.*

## A. Quiz option randomization — DONE (content thread, all 86 quiz files)
Problem: ClassBuild always lists the correct answer as option "a", and the quiz JS rendered options in fixed a,b,c,d order, so the correct answer was always first (guessable without reading; also patterns like all-A).
Fix applied: each quiz's `startQuiz()` now calls `shuffleArray(q.options)` on every question in addition to shuffling question order. Correctness is checked by `correctOptionText` (answer text), so shuffling positions is safe. Re-runs on every attempt/retake, so positions re-randomize each time. No per-question answer-position pattern remains.
Portal action: none required for quizzes, but see B for the exam.

## B. Exam option randomization + reshuffle on retake (portal exam engine)
The exam banks (`education/exams/<slug>.js`) store each item's correct answer as an INDEX into `options`. The exam renderer (exam.html) MUST:
- Draw a fresh random subset of `draw_mc` questions per attempt (rotation).
- Shuffle the ORDER of options for each rendered question, and remap the stored correct index to the shuffled position (do not rely on position).
- Re-shuffle both question draw and option order on every retake attempt.
Verify this is actually happening; if the renderer currently shows options in stored order, apply the same fix as the quizzes.

## C. Exam retake with consequence (portal + Supabase) — NEW REQUIREMENT
Today retakes are unlimited/immediate. PJ wants friction after repeated failure so the exam is not brute-forced.
Data already exists: `exam_attempts` table (user_id, course_slug, score, passed, total_questions, correct_count, created_at) written by `GEM.recordExamAttempt` / the server exam function.
Required rule (tune the numbers with PJ):
- Attempts 1 and 2 after a fail: allowed immediately.
- After the 3rd consecutive failed attempt on a course, LOCK further retakes until the learner completes a REMEDIATION GATE, then unlock one more attempt (repeat the gate each additional 3 fails).
- Remediation gate options (pick/confirm with PJ): (i) a cooldown timer (e.g., 24 to 48 hours) since the last attempt; AND/OR (ii) re-open every chapter reading and pass each per-chapter quiz at >= 80%; AND/OR (iii) submit/complete every case assignment. Recommended default: cooldown (24h) + all per-chapter quizzes passed.
- ENFORCE SERVER-SIDE: the exam-start / exam-submit Edge Function must check `count(consecutive fails)` and gate eligibility; do not enforce only in the browser (bypassable). Surface a clear UI state ("Locked: complete review before retaking; N hours remaining" or "Pass all chapter quizzes to unlock").
- Track remediation completion (new columns/table, e.g., `remediation_completed_at` or a per-user per-course flag) so the gate can be verified.

## D. Auto-graded case assignments (portal engine + content thread, GATED on richer question types)
Constraint from PJ: do NOT use paid LLM grading (`grade-response`) for routine case grading, it costs per submission. Case work must auto-grade for free in-browser, the way quizzes/exams do.
Plan:
- Convert each case assignment from free-response into a machine-checkable SCENARIO exercise using structured item types: matching (mechanism -> marker), word-bank fill-in, select-all-that-apply, ordering/sequencing the reasoning steps, and numeric answers. Keep them scenario-driven so they still test APPLICATION, not vocabulary recall.
- Reuse the SAME engine that renders the exam. The richer item types are ALREADY AUTHORED in every course's `education/exams/<slug>.full.js` (matching, multi-select, word-bank fill), currently "parked" because exam.html only renders MC + true/false. The exam-engine upgrade to render these types is the gating dependency, and it is the same upgrade needed for richer exams. Do that ONCE, then case assignments can use it.
- Optionally keep a short, ungraded free-response reflection with a "reveal model answer" button (self-check, no cost) for learners who want to write.
- Certification note: the EXAM is the graded certification gate (80% pass). Case assignments are practice; auto-grading them is a UX improvement, not a certification requirement. So this can follow the engine upgrade without blocking course publishing.
Content-thread action once the engine renders richer types: author per-chapter auto-gradable case banks (or extend the `.full.js` pattern) catalog-wide or going-forward, PJ's call on scope.

## Sequencing recommendation
1. Portal: verify/fix exam option shuffling (B).
2. Portal: build the exam-engine upgrade to render matching/word-bank/select-all (unlocks both richer exams AND item D).
3. Portal + Supabase: implement retake-with-consequence (C).
4. Content thread: once (2) ships, convert case assignments to auto-graded scenario items (D).
