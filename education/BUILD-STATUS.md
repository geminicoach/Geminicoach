# Gemini Education — Build status / resume here

*Last updated 2026-06-22. This thread owns the education front-end (`Geminicoach/education/`).*

## What got built this session (the CE platform machinery — no course content needed)

**Accounts (live):** `auth.js` (Supabase client + helpers, classic script — NOT an ES module, which dodges the GitHub Pages MIME problem) and `account.html` (sign up / sign in / magic link / account view). Supabase project `btnqyetimebksqxxvqxl` was paused; it has been **restored (active)**.

**Database:** migration `ce_exam_attempts_and_certificates` applied — two new tables, both RLS per-user:
- `exam_attempts` (user_id, course_slug, score, passed, …)
- `certificates` (certificate_no, user_id, course_slug, course_title, learner_name, ceu_value, contact_hours, provider_number, score, issued_at)

**Final-exam engine (new):** `exam.html?slug=<course>` — login-gated, shuffles questions and answers, enforces an **80% pass mark**, records the attempt, and on a pass **auto-issues the certificate**. Exam questions live per-course in `exams/<slug>.js`.

**Certificate (new):** `certificate.html?slug=<course>` — renders the earned certificate (learner name, course title, CEUs, contact hours, exam score, date, unique Certificate No., NASM provider line) with a **Print / Save PDF** button.

**Sample exam:** `exams/a1-basics-of-nutrition.js` — *PLACEHOLDER questions* so the whole flow is testable now.

### The full flow now works end to end:
sign up (`account.html`) → take exam (`exam.html?slug=a1-basics-of-nutrition`) → score ≥ 80% → certificate auto-issued → `certificate.html?slug=a1-basics-of-nutrition` → print to PDF.

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
- **Nav links not wired yet:** "Sign in / My account", "Final exam", and "Certificate" are reachable by URL but not yet linked from `index.html`/`course.html` nav — left alone to avoid colliding with the parallel cover-image edits. Wire them once that settles.
- **Security hardening before public CE launch:** certificate issuance is currently client-side. Move it to a Supabase Edge Function that verifies a passing `exam_attempts` row before inserting a certificate, so a cert can't be self-created without passing.
- **Progress/chapter tracking (deferred):** the original `progress` table FKs to DB course/chapter rows, but our catalog is static (`courses-data.js`). Needs a slug/position-based redesign before wiring chapter-completion. Not blocking exams/certs.
- **Provider number:** certificate shows "NASM CE provider approval pending" until approved; then set `certificates.provider_number`.
- **NASM instructor-credential concern:** de-risk by adding a credentialed subject-matter-expert co-author/reviewer. Platform also serves the no-accreditation "certificate of completion" model.
- **Supabase free tier re-pauses after ~1 week idle** — go Pro (~$25/mo) at launch so accounts/exams don't sleep.
- **Still parked:** payments/subscription (built earlier), course cover images (other thread), slides.
