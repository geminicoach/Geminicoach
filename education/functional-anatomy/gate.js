/* Functional Anatomy for Coaches — free-access gate.
   Any signed-in Gemini Education account may view this course (no GELL
   membership required). Visitors without a session are sent to the library
   sign-in and returned to the page they tried to open. The course is not
   listed in the catalog, so it is reachable only by direct link. */
(function () {
  function toLogin() {
    var next = encodeURIComponent(location.pathname + location.search);
    location.replace("../login.html?next=" + next);
  }
  function reveal() { document.documentElement.classList.remove("gated"); }
  function check() {
    // supabase/auth.js failed to load -> can't verify -> send to sign-in
    if (!window.GEM || !window.GEM.ready) { toLogin(); return; }
    window.GEM.getUser().then(function (u) {
      if (u) reveal(); else toLogin();
    }).catch(toLogin);
  }
  // hide the page until we confirm a session (prevents a content flash)
  document.documentElement.classList.add("gated");
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", check);
  } else { check(); }
})();
