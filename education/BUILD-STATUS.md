# Gemini Education — Build status / resume here

*Last updated 2026-06-22. This thread owns the education front-end (`Geminicoach/education/`).*

## What got built this session (the CE platform machinery — no course content needed)

**Accounts (live):** `auth.js` (Supabase client + helpers, classic script — NOT an ES module, which dodges the GitHub Pages MIME problem) and `account.html` (sign up / sign in / magic link / account view). Supabase project `btnqyetimebksqxxvqxl` was paused; it has been **restored (active)**.

**Database:** migration `ce_exam_attempts_and_certificates` applied — two new tables, both RLS per-user:
- `exam_attempts` (user_id, course_slug, score, passed, …)
- `certificates` (certificate_no, user_id, course_slug, course_title, learner_name, ceu_value, contact_hours, provider_number, score, issued_at)

**Final-exam engine (new):** `exam.html?slug=<course>` — login-gated, shuffles questions and answers, enforces an **80% pass mark**, records the attempt, and on a pass **auto-issues the certificate**. Exam questions live per-course in `exams/<slug>.js`.

**Certificate (new):** `certificate.html?slug=<course>` — renders the earned certificate (learner name, course title, CEUs, contact hours, exam score, date, unique Certificate No., NASM provider line) with a **Print / Save PDF** button.

**Sample exam:** `exams/a1-basics-of-nutrition.js` — *PLACEHOLDER questions* so the whole flow is testable now. Now in the richer format: a 16-question MC bank with `draw_mc:12` (random subset per attempt) plus 2 AI-graded written questions (with model answers + key_points).

**AI grader (built 2026-06-23, PARKED 2026-06-23):** Supabase Edge Function `grade-response` is deployed (ACTIVE, verify_jwt on) and grades free-response answers against a model answer + key_points semantically → `{score, feedback, matched, missing}`. It is currently **PARKED at PJ's request** — the A1 exam's written questions were removed, so the grader is never called and **no `ANTHROPIC_API_KEY` is needed right now**. To re-enable later: set the `ANTHROPIC_API_KEY` secret (Dashboard → Edge Functions → Secrets), then add `{type:"free", ...}` questions back into `exams/<slug>.js`. The function, `GEM.gradeResponse()`, and the exam-page free-response rendering all remain in place (dormant). Model via `GRADER_MODEL` env (default `claude-3-5-haiku-latest`). Reusable for homework.

**Tester bypass (new, 2026-06-23):** `?dev=gemini-dev` sets a local flag that unlocks gates (`?dev=off` clears it); the email allowlist `parker.gemini.coach@gmail.com` always bypasses the chapter-completion lock. `pjgrueny@gmail.com` is NOT allowlisted, so it sees the real locks — that's the two-account testing setup on ONE deployment. Allowlist lives in `course.html` and `exam.html` (`BYPASS_EMAILS`).

### The full flow now works end to end:
sign up (`account.html`) → finish chapters on the course page (or bypass) → take exam (`exam.html?slug=a1-basics-of-nutrition`, now MC + AI-graded written) → score ≥ 80% → certificate auto-issued → `certificate.html?slug=a1-basics-of-nutrition` → print to PDF.

## To deploy (push the new files — scoped so it won't touch the content/cover-image work)
```
cd "C:\Users\pjgru\OneDrive\Documents\Claude\Projects\Geminicoach"
git add education/auth.js education/account.html education/exam.html education/certificate.html education/exams education/BUILD-STATUS.md
git commit -m "CE machinery: exam engine + certificate generator + exam attempts/certificates tables"
git push
```
Then test at `geminicoach.com/education/account.html` (passcode `gemini-preview`) → create account → `…/exam.html?slug=a1-basics-of-nutrition`.

## Open TODOs / notes for next session
- **Real exam content:** replace the placeholder questions in `exams/a1-basics-of-nutrition.js` once A1's chapters are tonally final. Add `exams/<slug>.js` for each new course as it's published.
- **Nav links wired (done 2026-06-23):** `index.html` nav has a "Sign in" link that flips to "My account" when logged in; `course.html` has a "My account" nav link and an "Earn your certificate" callout with Final exam + Certificate buttons.
- **Progress tracking + exam lock (done 2026-06-23):** `course.html` shows a per-chapter "Done" checkbox + progress bar (localStorage `gemEduProgress:<slug>`, array of positions). Clicking "Read chapter" also marks it done. "Take the final exam" is LOCKED until all chapters complete, and `exam.html` re-checks the same gate (it now loads `courses-data.js`) so it can't be URL-skipped.
- **Hardening before public CE launch (client-side for now; PJ OK for testing):** (a) cert issuance is client-side — move to a Supabase Edge Function that verifies a passing `exam_attempts` row before inserting a cert; (b) completion gate is localStorage (per-device, devtools-bypassable) — for real CE, record chapter completion server-side per-user and verify in that Edge Function. Consider gating completion on passing each chapter QUIZ instead of a manual "Done" check.
- **Provider number:** certificate shows "NASM CE provider approval pending" until approved; then set `certificates.provider_number`.
- **NASM instructor-credential concern:** de-risk by adding a credentialed subject-matter-expert co-author/reviewer. Platform also serves the no-accreditation "certificate of completion" model.
- **Supabase free tier re-pauses after ~1 week idle** — go Pro (~$25/mo) at launch so accounts/exams don't sleep.
- **Still parked:** payments/subscription (built earlier), course cover images (other thread), slides.
