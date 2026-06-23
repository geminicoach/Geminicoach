# -*- coding: utf-8 -*-
import re, io, sys

FN = "chapter-1-the-eight-meter-machine-a-tour-from-mouth-to-colon.html"
s = io.open(FN, encoding="utf-8").read()
orig = s
EM = "—"

def must(old):
    if s.count(old) != 1:
        print("FAIL not-unique-or-missing (count=%d):\n%s\n" % (s.count(old), old[:140]))
        sys.exit(2)

reps = []

# ---------- META: fix the 60 placeholder + source count (added 2 refs -> 10) ----------
reps.append((
'      <span>60 min read</span>\n      <span class="ch-meta-dot"></span>\n      <span>8 cited sources</span>',
'      <span>35 min read</span>\n      <span class="ch-meta-dot"></span>\n      <span>10 cited sources</span>'))

# ---------- HOOK: add a third paragraph framing the assembly/disassembly model ----------
reps.append((
'<p>This is not a party trick of definitions. It is the single most useful idea you can carry into everything that follows. Because the gut lumen is "outside," your body has to make a deliberate decision about every molecule it lets cross the wall. That gatekeeping is the whole story of digestion, absorption, gut immunity, and the microbiome. Before we can study any of those, we need the map. So let\'s walk the tube.</p>',
'<p>This is not a party trick of definitions. It is the single most useful idea you can carry into everything that follows. Because the gut lumen is "outside," your body has to make a deliberate decision about every molecule it lets cross the wall. That gatekeeping is the whole story of digestion, absorption, gut immunity, and the microbiome. Before we can study any of those, we need the map. So let\'s walk the tube.</p>\n    <p>One framing will carry you through the whole tour, so set it up now. A factory assembly line takes small parts and builds them into a finished product. Your gut runs that line in reverse. It takes a finished product, the meal on your plate, and disassembles it back down to parts small enough to cross the wall and enter you. Every station you are about to meet is a workstation on that disassembly line, and each one is shaped for the specific kind of taking-apart it does. When you start seeing the tract this way, the anatomy stops being a list of organs to memorize and becomes a sequence of stations with a job order: shred, then dissolve, then unwind, then cleave, then absorb, then reclaim. That job order is the spine of this entire course.</p>'))

# ---------- ONE TUBE section: add a paragraph after the surface-area-doorways paragraph ----------
reps.append((
'A whole almond and a crushed almond contain identical chemistry, but the crushed one gets broken down far faster because you handed the enzymes a thousand new doorways. Mechanical work sets the table; chemical work eats the meal.</p>',
'A whole almond and a crushed almond contain identical chemistry, but the crushed one gets broken down far faster because you handed the enzymes a thousand new doorways. Mechanical work sets the table; chemical work eats the meal.</p>\n    <p>This is also the first place the disassembly-line idea earns its keep. Surface area is the currency the whole tract trades in. Chewing buys it with teeth. The stomach buys it by churning. Bile buys it later by breaking fat globules into droplets. The small intestine buys it on a massive scale with folds and villi. Different tools, same purchase: expose more edges so the chemical step has more places to work at once. Keep that single thread in mind and most of the anatomy that follows will feel less like trivia and more like one problem being solved over and over with different hardware.</p>'))

# ---------- MOUTH: deepen the chewing/amylase para and add a paragraph ----------
reps.append((
'This is also why the old advice to chew thoroughly has a real physiological basis: more chewing means more surface area and more contact time with amylase before the bolus moves on.</p>',
'This is also why the old advice to chew thoroughly has a real physiological basis: more chewing means more surface area and more contact time with amylase before the bolus moves on. Saliva is not only enzyme and water. It is also mucus, which lubricates the bolus so it slides rather than scrapes, and bicarbonate, which keeps the mouth near neutral so amylase can work. A dry mouth is a digestive handicap before food has gone anywhere, which is part of why chewing a dry cracker with no water feels like such hard work.</p>\n    <p>Here is the part most people skip past. Salivary amylase only gets a head start, not a finish. It works for the minute or two the bolus sits in the mouth and the brief window before stomach acid shuts it down, so it converts only a small fraction of a meal\'s starch. The point of the mouth is not to finish carbohydrate digestion. It is to break the food down physically, wet it, and prime the chemical work that the small intestine will complete later with a fresh supply of amylase from the pancreas. In practice, the mouth is the shredding-and-wetting station, and almost nothing leaves it truly digested.</p>'))

# ---------- ESOPHAGUS: add a paragraph on secondary peristalsis / structure ----------
reps.append((
'The esophagus has no acid-proof lining like the stomach does, which is exactly why reflux hurts.</p>',
'The esophagus has no acid-proof lining like the stomach does, which is exactly why reflux hurts.</p>\n    <p>The esophagus also has a backup. The first wave that carries a swallow is primary peristalsis, triggered by the act of swallowing. If a bolus is sticky or large and part of it lingers on the wall, stretch receptors fire and launch a second wave, secondary peristalsis, that sweeps the leftovers down without you swallowing again. This is the tube clearing its own throat. It is a small example of a big theme: the gut runs almost entirely on local reflexes that need no conscious input and no help from the brain. Once you swallow, the enteric nervous system handles the rest, station by station, all the way down.</p>'))

# ---------- STOMACH: add a paragraph on reservoir/receptive relaxation + deepen emptying ----------
reps.append((
'It is a J-shaped, expandable reservoir that can hold roughly a liter or more, and it does three things: it stores, it churns, and it begins protein digestion in earnest.</p>',
'It is a J-shaped, expandable reservoir that can hold roughly a liter or more, and it does three things: it stores, it churns, and it begins protein digestion in earnest.</p>\n    <p>The storing job is easy to overlook and genuinely clever. You eat a meal in minutes, but the small intestine downstream can only handle a thin trickle at a time. So the stomach acts as a buffer tank. The upper stomach relaxes to receive the meal without its internal pressure spiking, a reflex called receptive relaxation, which is why you can swallow a large meal without feeling it press back up. Then the lower stomach goes to work grinding. This split of labor, a calm reservoir on top and a churning mill below, lets the stomach accept food fast and release it slow.</p>'))

# stomach emptying paragraph deepen
reps.append((
'This metering is deliberate. The small intestine can only process so much at a time, so the stomach acts as a buffer, holding the meal and feeding it forward at a rate the next station can handle. This is also why a high-fat meal "sits heavier" and keeps you full longer: it is literally still in your stomach.</p>',
'This metering is deliberate. The small intestine can only process so much at a time, so the stomach acts as a buffer, holding the meal and feeding it forward at a rate the next station can handle. This is also why a high-fat meal sits heavier and keeps you full longer: it is literally still in your stomach.</p>\n    <p>The rate is not fixed. It is controlled by feedback from the duodenum just downstream. When the small intestine senses a lot of fat or acid arriving, it signals the stomach to slow the release until it has caught up. This is a thermostat, not a timer. The stomach speeds up or slows down based on what the next station can handle, which is why the same volume of food can leave your stomach at very different rates depending on what it is made of. A glass of juice clears in well under an hour; a fatty restaurant meal can take four hours or more.</p>'))

# ---------- SMALL INTESTINE: deepen villi paragraph (small addition) ----------
reps.append((
'This is the architectural answer to a hard problem: how do you pull enough nutrients out of a moving slurry in only five hours? You make the wall enormous.</p>',
'This is the architectural answer to a hard problem: how do you pull enough nutrients out of a moving slurry in only five hours? You make the wall enormous.</p>\n    <p>The brush border is more than a sponge. The microvilli themselves carry enzymes built into their membrane, the brush-border enzymes, which perform the final snip on carbohydrates and proteins right at the absorptive surface, the instant before the nutrient crosses. Digestion and absorption happen in almost the same place, at almost the same moment. Lactase, the enzyme that splits milk sugar, lives here, which is why losing it produces lactose intolerance: the sugar arrives intact, never gets cleaved at the wall, and travels on to the colon where bacteria ferment it. That single detail, an enzyme missing from the brush border, is the whole mechanism behind a symptom millions of people live with.</p>'))

io_done = True

# ============ NEW SECTIONS ============

# Transit-times section + MMC section, inserted right before "The Brain in the Wall"
brain_anchor = '  <section class="ch-section">\n    <h2>The Brain in the Wall</h2>'

new_sections = '''  <hr class="ch-divider">

  <section class="ch-section">
    <h2>The Clock of the Tube: How Long Each Station Takes</h2>
    <p>We have been dropping transit times station by station. Now put them side by side, because the timing is not a footnote. It is one of the most clinically useful things you can carry out of this chapter. A meal does not move at one speed. It sprints through some stations and crawls through others, and the difference is by design.</p>
    <p>Here is the meal\'s itinerary, start to finish. The mouth holds a bite for seconds to a minute while you chew. The esophagus is the fastest leg of the trip: a single peristaltic wave delivers the bolus to the stomach in about eight to ten seconds. The stomach is the first long pause, holding and metering a mixed meal out over roughly two to four hours. The small intestine, the longest organ, takes a meal about three to five hours to traverse while it does the bulk of digestion and absorption. Then comes the real bottleneck. The large intestine is slow on purpose, and material can sit there for twelve to forty-eight hours while water is reclaimed. Add it up and the whole journey from mouth to exit usually runs one to three days, with the colon accounting for the large majority of that time (Azzouz &amp; Sharma, 2023; Fish et al., 2024).</p>
    <p>Two practical lessons fall out of those numbers. First, when people are surprised that something they ate "moved through fast," they are usually noticing color or volume, not actual transit. The residue leaving you today is mostly from meals one to three days ago. The tract is a long pipeline, not a chute. Second, the colon is where transit time is won or lost. The mouth, esophagus, stomach, and small intestine run on fairly tight schedules. The colon is the flexible one, and it is exactly where the variation between a comfortable day and an uncomfortable one tends to live.</p>
    <p>One more honest point about these numbers: they are averages, and the spread between healthy people is wide. Careful measurements in healthy volunteers show that the same person can vary noticeably from one week to the next, and that differences between individuals are larger still (Degen &amp; Phillips, 1996). So treat the figures here as a map of the typical terrain, not a stopwatch your own body is obligated to match. Sex, meal composition, activity, hydration, and stress all shift the timing. The pattern is reliable. The exact hours are personal.</p>

    <aside class="ch-callout">
      <div class="ch-callout-label">Coaching Translation</div>
      <p>In real life, this is why "regularity" is a range, not a rule. Anywhere from three times a day to three times a week can be normal for a healthy adult, because colonic transit is the loose, adjustable part of the system. What you can actually move are the inputs that feed the colon: fiber, which holds water and adds bulk, fluid, which keeps the residue workable, and physical movement, which nudges colonic contractions along. The takeaway: you cannot speed up your esophagus and you would not want to, but the slow end of the tube responds to how you eat and move.</p>
    </aside>
  </section>

  <section class="ch-section">
    <h2>The Housekeeper Wave: What the Tube Does Between Meals</h2>
    <p>Everything so far has described a tube with food in it. But you are not eating most of the time, and the gut does not simply sit idle between meals. It cleans. In the fasting state, the small intestine runs a slow, repeating cycle of activity called the <span class="ch-key">migrating motor complex</span>, the MMC, often nicknamed the gut\'s "housekeeper." Its job is to sweep out whatever the digestive phase left behind: undigested fiber, dead cells, mucus, and stray bacteria, clearing the tube in preparation for the next meal (Takahashi, 2013).</p>
    <p>The MMC runs in phases that repeat roughly every ninety minutes to two hours while you are not eating. There is a quiet phase of near silence, a build-up phase of irregular contractions, and then a short, dramatic burst of strong, regular contractions that march from the stomach down the length of the small intestine, pushing residue ahead of them toward the colon. Then the cycle resets and begins again. In the body this burst is coordinated in part by a hormone called <span class="ch-key">motilin</span>, released in the fasting state, which helps trigger the powerful sweeping phase (Takahashi, 2013). The moment you eat, the housekeeping stops. Food shuts the MMC off, the digestive pattern of mixing and metering takes over, and the cleaning wave does not resume until the meal has cleared and the fast resumes.</p>
    <p>This is the gold-standard analogy for how the gut budgets its time. Picture a house cleaner who can only work when the rooms are empty. The instant someone walks in tracking mud, the cleaner has to stop, wait, and start the whole sweep over once the room clears again. That is the MMC. It needs an empty tube to run, and every time you eat, you send it back to the start. Grazing all day, with food arriving every hour, can mean the housekeeper rarely gets a clean run at the tube. Going several hours between meals gives those sweeping waves room to actually finish.</p>
    <p>Why does this matter for a course on digestion? Because the housekeeper wave is the clearest evidence that motility is a managed process with two distinct modes, not a single conveyor belt. There is a fed pattern, built for mixing and absorbing, and a fasting pattern, built for clearing and resetting. The same muscle and the same nerves run both, switching between them based on whether food is present. When that sweeping function is weak, residue and bacteria can linger in the small intestine longer than they should, a mechanism that connects to several conditions covered later in this course. For now, file the headline: between meals, your gut is not resting. It is cleaning.</p>

    <aside class="ch-callout">
      <div class="ch-callout-label">Think About It</div>
      <p>If the housekeeper wave only runs on an empty tube, what would you predict happens to it in someone who eats small amounts continuously from morning to night versus someone who spaces meals several hours apart? You do not need a clinical answer yet. Just notice that "how often you eat," not only "what you eat," is an input the gut\'s machinery actually responds to.</p>
    </aside>
  </section>

  <hr class="ch-divider">

  <section class="ch-section">
    <h2>The Exit: Rectum and Anal Canal</h2>
    <p>The last station is short, but it is the one stretch of the tube where conscious control returns, and that detail is the whole point of it. By the time stool reaches the <span class="ch-key">rectum</span>, the digestive work is finished. The rectum is a holding chamber. It stays mostly empty until a mass movement in the colon pushes stool into it, stretching its wall. That stretch is the signal you recognize as the urge to defecate (Azzouz &amp; Sharma, 2023).</p>
    <p>What happens next is a small piece of elegant engineering. The exit is guarded by two rings of muscle. The <span class="ch-key">internal anal sphincter</span> is smooth muscle under involuntary control, and it relaxes automatically when the rectum fills. The <span class="ch-key">external anal sphincter</span> is skeletal muscle under voluntary control, and it stays closed until you decide otherwise. So the rectum gives the gut a polite way to ask permission: the inner gate opens on its own and signals readiness, while the outer gate waits for you. This is the same voluntary-to-involuntary handoff you met at the top of the tube during swallowing, run in reverse. The eight-meter machine begins and ends under your conscious control and runs on autopilot in between.</p>
  </section>'''

new_sections = new_sections.replace(EM, ", ")  # safety

must(brain_anchor)
s2 = s  # work on s below via reps first
# We'll do the brain_anchor insertion after applying reps.

# Apply all simple replacements
for old, new in reps:
    if EM in new:
        print("EMDASH in replacement:", new[:80]); sys.exit(3)
    must(old)
    s = s.replace(old, new, 1)

# Insert new sections before Brain in the Wall
must = None  # disable
if s.count(brain_anchor) != 1:
    print("brain anchor not unique after reps"); sys.exit(4)
s = s.replace(brain_anchor, new_sections + "\n\n" + brain_anchor, 1)

# ---------- TIC FIXES in existing prose ----------
def rep1(old, new):
    global s
    if s.count(old) != 1:
        print("TICFAIL (count=%d): %s" % (s.count(old), old[:90])); sys.exit(5)
    s = s.replace(old, new, 1)

# "The reality is more interesting and more robust."
rep1("The reality is more interesting and more robust.",
     "The reality is more layered, and more robust.")

# aphoristic: "Mechanical work sets the table; chemical work eats the meal." -> keep? it's fine, it's a clean analogy. Leave.

# "the chemistry of unraveling a knotted ball of yarn before you can cut it." (mid-sentence appositive analogy, fine) leave.

# "Hold that question; we answer it fully in Chapter 4."
rep1("What does this tell you about why \"where\" a nutrient is digested depends on \"which\" station you are in? Hold that question; we answer it fully in Chapter 4.",
     "What does this tell you about why the place a nutrient is digested depends on which station it is in? We answer that fully in Chapter 4.")

# "If you remember one thing about the GI tract, make it this:" (aphoristic colon)
rep1("If you remember one thing about the GI tract, make it this: the small intestine is the main event.",
     "If you remember one thing about the GI tract, let it be that the small intestine is the main event.")

# "the colon is a water-recovery and fermentation organ, full stop."
rep1("For now: the colon is a water-recovery and fermentation organ, full stop.",
     "For now, hold the simple version: the colon is a water-recovery and fermentation organ.")

# "This is why bile emulsification is a genuinely ambiguous event, which is precisely what makes it a useful test case in our sorter below." -> drop "precisely"
rep1("This is why bile emulsification is a genuinely ambiguous event, which is precisely what makes it a useful test case in our sorter below.",
     "This is why bile emulsification sits in a genuinely ambiguous spot, which is what makes it a useful test case in the sorter below.")

# "This is also why a high-fat meal" handled. Good.

# "This Is Why It Matters" callout label -> keep (it's a heading, not body tic). fine.

# "Knowing the pH of each station is knowing which enzymes are awake there." aphoristic-ish but clean, leave.

# ---------- CASE STUDY (Gordon) before takeaways ----------
takeaways_anchor = '  <section class="ch-takeaways">'
if s.count(takeaways_anchor) != 1:
    print("takeaways anchor not unique"); sys.exit(6)

case = '''  <section class="ch-section">
    <h2>Case study: Gordon\'s two-day mystery</h2>
    <aside class="ch-callout">
      <div class="ch-callout-label">Case</div>
      <p>Gordon, a 38-year-old who recently started an office job, is convinced something is wrong with his digestion. He eats a large, fatty lunch most days and feels uncomfortably full well into the afternoon. He has also started snacking lightly and continuously from mid-morning to bedtime to "keep his energy up." He notices that what he eats does not seem to leave him for a couple of days, and he wonders whether his gut has slowed down or "stopped working."</p>
    </aside>
    <p>Nothing in Gordon\'s description requires a diagnosis, and none of what follows is medical advice. It is a chance to map this chapter\'s mechanics onto an ordinary experience and see how much of it explains itself. Start with the afternoon fullness. Gordon is eating high-fat meals, and fat is the single strongest brake on gastric emptying. The duodenum senses the fat arriving and signals the stomach to release its contents more slowly, so a fatty lunch can genuinely still be sitting in the stomach hours later. The full feeling is not a malfunction. It is the metering system doing exactly what it evolved to do, holding the meal back so the small intestine is not overwhelmed.</p>
    <p>Now the "couple of days" observation. Gordon is treating transit as if food should pass through quickly, but the chapter\'s itinerary says otherwise. The colon alone can hold material for twelve to forty-eight hours while it reclaims water, and the whole mouth-to-exit journey running one to three days is squarely normal (Azzouz &amp; Sharma, 2023). What Gordon is noticing is not a slowed-down gut. It is the ordinary length of a long pipeline. The residue leaving him is from meals a day or two back, which is how the tract is supposed to work.</p>
    <p>His grazing habit is the most interesting piece. By eating small amounts almost continuously, Gordon keeps his gut in the fed pattern nearly all day. Remember the housekeeper wave: the migrating motor complex only runs the tube\'s cleaning sweep when no food is present, and every time food arrives, it switches off and resets (Takahashi, 2013). A person who never leaves a gap between bites rarely gives that sweep a clean run. This does not prove Gordon has any condition. It simply shows that "how often you eat" is an input his gut\'s machinery responds to, separate from "what you eat."</p>
    <p>Put together, Gordon\'s "mystery" is mostly normal physiology he had not been taught to read. The applied lesson is the one this whole chapter is built to deliver: when you understand the stations, their timing, and their two modes, ordinary digestive sensations stop feeling like alarms and start being legible. Anything that genuinely concerns him, or that persists and worries him, belongs with a qualified clinician. The map\'s job is to tell him which sensations are simply the eight-meter machine running as designed.</p>
  </section>

'''
s = s.replace(takeaways_anchor, case + takeaways_anchor, 1)

# ---------- LOOKAHEAD slight tic: "The architecture you just toured is the scaffold on which..." fine. leave.

# ---------- REFERENCES: add Takahashi 2013 and Degen & Phillips 1996, keep APA order ----------
# Insert Degen after Carabotti (alpha by author: Azzouz, Carabotti, Degen, Fish, Huizinga, Johnson, Patricia, Regulatory, Takahashi, Tobias)
carabotti_ref = '<p>Carabotti, M., Scirocco, A., Maselli, M. A., &amp; Severi, C. (2015). The gut-brain axis: Interactions between enteric microbiota, central and enteric nervous systems. <em>Annals of Gastroenterology, 28</em>(2), 203–209. https://pmc.ncbi.nlm.nih.gov/articles/PMC4367209/</p>'
if s.count(carabotti_ref) != 1:
    print("carabotti ref anchor not unique"); sys.exit(7)
degen_ref = '\n    <p>Degen, L. P., &amp; Phillips, S. F. (1996). Variability of gastrointestinal transit in healthy women and men. <em>Gut, 39</em>(2), 299–305. https://doi.org/10.1136/gut.39.2.299</p>'
s = s.replace(carabotti_ref, carabotti_ref + degen_ref, 1)

# Insert Takahashi after Regulatory Mechanisms (before Tobias)
regmech_ref = '<p>Regulatory Mechanisms in Biosystems. (2025). Peristalsis and regulation of gastrointestinal motility: From mechanisms to pathophysiology. <em>Regulatory Mechanisms in Biosystems</em>. https://medicine.dp.ua/index.php/med/article/view/1273</p>'
if s.count(regmech_ref) != 1:
    print("regmech ref anchor not unique"); sys.exit(8)
takahashi_ref = '\n    <p>Takahashi, T. (2013). Interdigestive migrating motor complex: Its mechanism and clinical importance. <em>Journal of Smooth Muscle Research, 49</em>, 99–111. https://doi.org/10.1540/jsmr.49.99</p>'
s = s.replace(regmech_ref, regmech_ref + takahashi_ref, 1)

# Final guards
if EM in s:
    print("EMDASH PRESENT after edits"); sys.exit(9)
if not s.endswith(orig[-60:]):
    print("ENDING CHANGED"); sys.exit(10)

io.open(FN, "w", encoding="utf-8", newline="").write(s)
print("WROTE OK. new chars:", len(s), "delta:", len(s)-len(orig))
