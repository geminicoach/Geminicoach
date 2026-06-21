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
    onChange: function (cb) { return sb.auth.onAuthStateChange(function (_e, s) { cb(s ? s.user : null); }); }
    // progress/completion + certificate helpers are added in the next build phase
  };
})();
