// Gemini Education Platform — shared frontend client + helpers.
// Everything here is PUBLIC and safe to ship in the browser. The publishable
// key only works through RLS; no secrets live in the frontend.

import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

export const CONFIG = {
  SUPABASE_URL: "https://btnqyetimebksqxxvqxl.supabase.co",
  SUPABASE_PUBLISHABLE_KEY: "sb_publishable_hnDaEyTkttG2Q4yF_YmDpw_tWYcY7c4",
  STRIPE_PAYMENT_LINK: "https://buy.stripe.com/6oU14o0yncl87Z802c7bW01",
  LOGIN_URL: "login.html",
  CATALOG_URL: "index.html",
};

export const supabase = createClient(
  CONFIG.SUPABASE_URL,
  CONFIG.SUPABASE_PUBLISHABLE_KEY,
);

// --- Auth helpers -----------------------------------------------------------

export async function getUser() {
  const { data: { user } } = await supabase.auth.getUser();
  return user; // null if signed out
}

export async function requireAuth() {
  const user = await getUser();
  if (!user) {
    const next = encodeURIComponent(location.pathname + location.search);
    location.href = `${CONFIG.LOGIN_URL}?next=${next}`;
    return null;
  }
  return user;
}

export async function signOut() {
  await supabase.auth.signOut();
  location.href = CONFIG.CATALOG_URL;
}

// --- Subscription / access --------------------------------------------------

// Uses the DB function has_active_subscription() (active or trialing).
export async function hasActiveSubscription() {
  const { data, error } = await supabase.rpc("has_active_subscription");
  if (error) { console.error(error); return false; }
  return data === true;
}

// Send the user to Stripe Checkout. We tack the Supabase user id on as
// client_reference_id so the webhook can match the subscription to the account.
export async function startCheckout() {
  const user = await requireAuth();
  if (!user) return;
  const url = new URL(CONFIG.STRIPE_PAYMENT_LINK);
  url.searchParams.set("client_reference_id", user.id);
  if (user.email) url.searchParams.set("prefilled_email", user.email);
  location.href = url.toString();
}

// --- Data -------------------------------------------------------------------

export async function listPublishedCourses() {
  const { data, error } = await supabase
    .from("courses")
    .select("id, slug, title, description, cover_url")
    .eq("is_published", true)
    .order("created_at", { ascending: true });
  if (error) { console.error(error); return []; }
  return data ?? [];
}

export async function listChapters(courseId) {
  const { data, error } = await supabase
    .from("chapters")
    .select("id, position, title, content_url, audio_url, est_minutes")
    .eq("course_id", courseId)
    .order("position", { ascending: true });
  if (error) { console.error(error); return []; } // RLS returns [] if not subscribed
  return data ?? [];
}
