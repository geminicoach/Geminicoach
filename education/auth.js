/* Gemini Education — auth + Supabase client (classic script, NO ES modules).
   IMPORTANT: load the Supabase UMD bundle BEFORE this file:
     <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/dist/umd/supabase.js"></script>
     <script src="auth.js"></script>
   The publishable key is safe in the browser; RLS enforces per-user access. */
(function () {
  var SUPABASE_URL = "https://btnqyetimebksqxxvqxl.supabase.co";
  var SUPABASE_KEY = "sb_publishable_hnDaEyTkttG2Q4yF_YmDpw_tWYcY7c4";

  if (!window.supabase || !window.supabase.createClient) {
    console.error("Supabase library failed to load before auth.js");
    window.GEM = { ready: false };
    return;
  }
  var sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY, {
    auth: { persistSession: true, autoRefreshToken: true }
  });

  window.GEM = {
    ready: true,
    sb: sb,

    signUp: function (email, password, fullName) {
      return sb.auth.signUp({
        email: email, password: password,
        options: { data: { full_name: fullName || "" } }
      });
    },
    signIn: function (email, password) {
      return sb.auth.signInWithPassword({ email: email, password: password });
    },
    magicLink: function (email, redirectTo) {
      return sb.auth.signInWithOtp({ email: email, options: { emailRedirectTo: redirectTo } });
    },
    signOut: function () { return sb.auth.signOut(); },

    // resolves to the user object or null
    getUser: function () {
      return sb.auth.getUser().then(function (r) { return (r && r.data) ? r.data.user : null; })
        .catch(function () { return null; });
    },
    onChange: function (cb) { return sb.auth.onAuthStateChange(function (_e, s) { cb(s ? s.user : null); }); },

    // --- CE: exams + certificates (course_slug based; no FK to static catalog) ---
    _uid: function () { return sb.auth.getUser().then(function (r) { return (r && r.data && r.data.user) ? r.data.user.id : null; }); },

    recordExamAttempt: function (slug, score, passed, total, correct) {
      return this._uid().then(function (id) {
        if (!id) return { error: { message: "Not signed in" } };
        return sb.from("exam_attempts").insert({
          user_id: id, course_slug: slug, score: score, passed: !!passed,
          total_questions: total, correct_count: correct
        });
      });
    },
    // upsert a certificate (one per user+course). NOTE: hardening TODO — before public
    // CE launch, move issuance to an Edge Function that verifies a passing exam_attempt,
    // so a cert can't be created without actually passing.
    issueCertificate: function (cert) {
      return this._uid().then(function (id) {
        if (!id) return { error: { message: "Not signed in" } };
        cert.user_id = id;
        return sb.from("certificates").upsert(cert, { onConflict: "user_id,course_slug" }).select();
      });
    },
    getCertificate: function (slug) {
      return this._uid().then(function (id) {
        if (!id) return null;
        return sb.from("certificates").select("*").eq("user_id", id).eq("course_slug", slug)
          .maybeSingle().then(function (r) { return r.data; });
      });
    },
    listCertificates: function () {
      return this._uid().then(function (id) {
        if (!id) return [];
        return sb.from("certificates").select("*").eq("user_id", id)
          .order("issued_at", { ascending: false }).then(function (r) { return r.data || []; });
      });
    },

    // current session access token (a real Supabase JWT) or null
    getAccessToken: function () {
      return sb.auth.getSession().then(function (r) {
        return (r && r.data && r.data.session) ? r.data.session.access_token : null;
      }).catch(function () { return null; });
    },

    // AI grader for free-response answers (and homework). Calls the grade-response
    // Edge Function, which compares the student answer to the model answer/key points
    // and returns { score:0-100, feedback, matched:[], missing:[] }.
    gradeResponse: function (payload) {
      return this.getAccessToken().then(function (tok) {
        return fetch(SUPABASE_URL + "/functions/v1/grade-response", {
          method: "POST",
          headers: {
            "content-type": "application/json",
            "apikey": SUPABASE_KEY,
            "Authorization": "Bearer " + (tok || SUPABASE_KEY)
          },
          body: JSON.stringify(payload || {})
        }).then(function (r) { return r.json(); });
      });
    }
  };
})();
