import re
f = 'chapter-7-rebuilding-the-engine-evidence-based-gut-support.html'
html = open(f, encoding='utf-8').read()
def repl(old, new, count=1):
    global html
    assert html.count(old) >= 1, f"NOT FOUND: {old[:80]!r}"
    html = html.replace(old, new, count)

# ---- Add a claims-reading framework + case study as a new section before "Putting the four pillars together" ----
old = '''  <section class="ch-section">
    <h2>Putting the four pillars together for a real week</h2>'''
new = '''  <section class="ch-section">
    <h2>How to weigh a gut-support claim</h2>
    <p>Everything in this chapter has been training one underlying skill, so let us make it explicit and portable. When any claim about a gut product crosses your path, run it through a short series of questions before it earns any belief. This is the filter that will still work after every product on today's shelf has been replaced by next year's.</p>
    <p>First, ask what kind of claim it is. "Supports gut health" is a structure-function phrase that, in supplement marketing, is carefully chosen because it sounds like a medical claim while legally promising nothing specific. "Treats," "cures," or "heals" are medical claims that supplements are not permitted to make and cannot back, and seeing them on a supplement is a red flag rather than a reassurance. Train your ear for the gap between the impression a label creates and what it has actually committed to.</p>
    <p>Second, ask what the evidence behind the claim actually is. Is there a human randomized controlled trial, or a single cell-culture or mouse study stretched into a headline? Was it the specific strain, dose, and population in front of you, or a cousin of it? Was the effect on a real outcome people care about, or on a surrogate marker in a lab? The Wastyk and Zheng work we leaned on earlier are useful precisely because they are human trials with the caveats stated out loud; much of what is sold has nothing comparable behind it.</p>
    <p>Third, ask who benefits from your believing it, and notice when the most aggressive marketing sits on the weakest evidence. The free, low-margin foundations, food, water, movement, sleep, and stress regulation, have the strongest and broadest support and almost no advertising budget. The expensive, single-target products tend to have the loudest claims and the thinnest trials. That inverse relationship between marketing volume and evidence quality is not a coincidence, and once you see it you cannot unsee it.</p>
    <aside class="ch-callout">
      <div class="ch-callout-label">Think About It</div>
      <p>Pick any gut-health product you have seen advertised. Run it through the three questions: what kind of claim, what evidence, who benefits. Notice how quickly the filter sorts a real tool from a sales pitch, without you needing to know anything special about the specific brand.</p>
    </aside>
  </section>

  <hr class="ch-divider">

  <section class="ch-section">
    <h2>Case study: the stack that could not outrun a five-hour night</h2>
    <aside class="ch-callout">
      <div class="ch-callout-label">Case</div>
      <p>Priya is 38, a project manager with two young kids, and she has been bloated and foggy for months. She is conscientious and motivated, so she has done what the internet told her: a premium "gut healing" stack that runs her about a hundred and forty dollars a month, a daily probiotic with an impressive number of billions on the front, a scoop of prebiotic fiber, and a glutamine powder for "leaky gut." She eats reasonably, mostly the same handful of safe foods. She sleeps about five and a half hours because that is what is left after the kids and the inbox, and she describes her stress as "constant but manageable." Three months and four hundred dollars in, she feels roughly the same and is starting to wonder which expensive thing to add next.</p>
    </aside>
    <p>Run Priya through this chapter and the diagnosis writes itself, with the important caveat that a coach does not diagnose anything, medical or otherwise, and Priya's persistent symptoms deserve a proper workup with her physician before anyone assumes they are benign. Setting the medical question aside, the structural problem in her plan is plain: she has built an elaborate roof on a cracked foundation. She is spending real money at the very top of the support stack while the load-bearing pillars underneath are visibly failing. Five and a half hours of sleep, per the Sun and colleagues (2023) review, is actively thinning her mucus layer, loosening her tight junctions, and reducing the butyrate producers her supplements are supposed to be helping. Constant low-grade stress is degranulating mast cells in the very wall she is trying to repair (Madison and Bailey, 2024). And her "reasonable" diet is in fact a narrow rotation of safe foods, which means low plant diversity and not much for the fermenters to eat (Fu and colleagues, 2022).</p>
    <p>So the supplements were never going to win. The probiotic, even if it contains a real, named, evidence-backed strain at the labeled dose, which on the Mazzantini and colleagues (2021) findings is not guaranteed, is being asked to fortify a barrier that sleep loss and stress are knocking down faster than any capsule can shore up. The glutamine is chasing a "leaky gut" framing that, for a generally healthy person, has weak support, while the actual permeability driver, her sleep and stress, goes untouched. The prebiotic fiber is the one item closest to the foundation, but fed into a low-diversity gut without the rest of the plant variety, it may simply be making her bloating worse. She has assembled a plan that is almost perfectly inverted.</p>
    <p>The better path costs less, not more, and follows the stack in order. The highest-leverage single move is the hour of sleep she keeps trading away, because it is upstream of everything else; protecting it is worth more than any bottle she owns. Next is widening her plate, slowly, from a handful of safe foods toward more kinds of plants and a fermented food she will actually keep eating, with the fiber ramped gently so it calms rather than aggravates the bloating. A couple of reliable daily downshifts address the stress pathway directly. Only once those are genuinely in place is there any point evaluating whether a single, well-chosen, named-strain probiotic adds anything on top, and the premium stack and the glutamine can almost certainly go. A coach can walk her through all of that as education. What a coach cannot and must not do is tell her the bloating and fog are nothing to worry about, promise her any of this will cure her, or substitute for the medical evaluation that new, persistent symptoms warrant. The line is bright: educate and refer, never diagnose, treat, or promise.</p>
  </section>

  <hr class="ch-divider">

  <section class="ch-section">
    <h2>Putting the four pillars together for a real week</h2>'''
repl(old, new)

open(f, 'w', encoding='utf-8').write(html)
body=re.sub(r'<script.*?</script>','',html,flags=re.S); body=re.sub(r'<style.*?</style>','',body,flags=re.S)
print('words:', len(re.sub(r'<[^>]+>',' ',body).split()))
print('em-dashes:', html.count(chr(8212)))
print('callouts:', html.count('ch-callout-label'))
