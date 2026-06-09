// Pre-launch "coming soon" curtain for the education section.
// NOTE: this is obscurity, not security — the passcode is visible in page source
// and is only meant to keep the public out of an unfinished preview. Real course
// content is protected separately by Supabase auth + RLS + the subscription gate.

export const PREVIEW_PASSCODE = "gemini-preview"; // <-- change this to whatever you like
const KEY = "gemEduPreviewUnlocked";

export function isUnlocked() {
  try { return sessionStorage.getItem(KEY) === "yes"; } catch { return false; }
}
export function unlock(code) {
  if (code === PREVIEW_PASSCODE) { sessionStorage.setItem(KEY, "yes"); return true; }
  return false;
}
// Call at the top of any page you want hidden. Bounces to the splash if locked.
export function guard() {
  if (!isUnlocked()) location.href = "coming-soon.html";
}
