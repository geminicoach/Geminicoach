/* Gemini Education — in-page course nav (Back to course + Prev/Next activity).
   Drop-in: include on any courses/<slug>/*.html page, AFTER courses-data.js:
     <script src="../../courses-data.js"></script>
     <script src="../../gem-course-nav.js"></script>
   It derives the course + position from the URL and window.GEMINI_COURSES — no per-page config.
   Re-inject these two <script> tags after any ClassBuild regeneration (same as the theme CSS). */
(function () {
  try {
    var m = location.pathname.match(/\/courses\/([^\/]+)\/([^\/?#]+\.html)$/i);
    if (!m) return;
    var slug = m[1], file = decodeURIComponent(m[2]);
    var data = window.GEMINI_COURSES;
    if (!data || !data.courses) return;
    var course = null;
    for (var i = 0; i < data.courses.length; i++) { if (data.courses[i].slug === slug) { course = data.courses[i]; break; } }
    if (!course || !course.chapters) return;

    // Linear flow through the course, matching how course.html lists each chapter.
    var order = [["reading", "Reading"], ["quiz", "Quiz"], ["challenge", "Weekly challenge"],
                 ["worksheet", "Worksheet"], ["caseAssignment", "Case assignment"], ["cheatsheet", "Cheat-sheet"]];
    var chs = course.chapters.slice().sort(function (a, b) { return (a.position || 0) - (b.position || 0); });
    var flow = [];
    chs.forEach(function (ch) {
      order.forEach(function (o) {
        if (ch[o[0]]) flow.push({ file: String(ch[o[0]]).split("/").pop(), label: "Ch " + ch.position + " · " + o[1] });
      });
    });

    var idx = -1;
    for (var j = 0; j < flow.length; j++) { if (flow[j].file === file) { idx = j; break; } }
    var back = "../../course.html?slug=" + encodeURIComponent(slug);
    var prev = idx > 0 ? flow[idx - 1] : null;
    var next = (idx >= 0 && idx < flow.length - 1) ? flow[idx + 1] : null;

    function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]; }); }

    var btn = "display:inline-block;padding:11px 18px;border-radius:10px;font-weight:700;font-size:15px;text-decoration:none;line-height:1;white-space:nowrap;";
    var ghost = btn + "background:rgba(20,40,70,.55);border:1px solid #2e6bb0;color:#8fc0f5;";
    var solid = btn + "background:linear-gradient(135deg,#2e8de8,#1a6fc4);border:0;color:#fff;box-shadow:0 8px 20px rgba(26,111,196,.35);";

    var right = "";
    if (prev) right += '<a href="' + esc(prev.file) + '" style="' + ghost + '">&larr; ' + esc(prev.label) + '</a>';
    if (next) right += '<a href="' + esc(next.file) + '" style="' + solid + '">Next: ' + esc(next.label) + ' &rarr;</a>';
    else right += '<a href="' + esc(back) + '" style="' + solid + '">&#10003; Finish &middot; back to course</a>';

    var wrap = document.createElement("div");
    wrap.setAttribute("data-gem-nav", "1");
    wrap.style.cssText = "max-width:900px;margin:32px auto 60px;padding:18px 20px;border-top:1px solid rgba(120,150,200,.25);display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap;font-family:'Barlow',system-ui,sans-serif";
    wrap.innerHTML = '<a href="' + esc(back) + '" style="' + ghost + '">&larr; Back to course</a>' +
                     '<div style="display:flex;gap:10px;flex-wrap:wrap;align-items:center;justify-content:flex-end">' + right + '</div>';
    document.body.appendChild(wrap);
  } catch (e) { /* nav is non-critical; never break the page */ }
})();
