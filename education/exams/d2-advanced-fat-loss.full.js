/* Gemini Education: D2 (Advanced Fat Loss) FULL exam bank (all question types).
   PARKED until the portal thread upgrades exam.html to render matching / multi-select /
   word-bank / write-in. The live exam (d2-advanced-fat-loss.js) is an interim MC+TF subset
   on the current engine. Swap this in when the new-type renderers + appeal grader ship.
   Schema: education/EXAM-SPEC.md. */
window.GEM_EXAM = {
  slug: "d2-advanced-fat-loss",
  title: "Advanced Fat Loss",
  contact_hours: 9, ceu_value: 0.9, pass_threshold: 80, placeholder: false,
  draw: { mc: 8, multi: 2, tf: 4, match: 2, fill: 2, free: 0 },
  shuffle: { questions: true, options: true },
  questions: [
    {
      "id": "d2-c1-mc-1",
      "chapter": 1,
      "type": "mc",
      "q": "A supplement listing cites a peer-reviewed trial and states its product 'significantly increases resting energy expenditure.' Using the chapter's honest-effect-size framework, what is the key thing that sentence does not tell you?",
      "options": [
        "If a study reports a 'significant' effect, that alone tells a reader the effect is large enough to matter in daily life",
        "Effect size only needs to be considered for supplements, never for training, sleep, or diet interventions",
        "Statistical significance only signals that an effect is probably not zero; magnitude, reliability across people, and opportunity cost must be graded separately before a tool is worth adopting",
        "A result that fails to reach statistical significance always means the true effect size is zero"
      ],
      "answer": 2,
      "points": 1,
      "explanation": "A study can be statistically significant and practically trivial at the same time. The chapter's three grading questions, magnitude, reliability, and opportunity cost, convert a marketing claim into a number that can be weighed directly against the deficit already doing the work."
    },
    {
      "id": "d2-c1-tf-1",
      "chapter": 1,
      "type": "tf",
      "q": "Fothergill and colleagues found that among former 'Biggest Loser' contestants, metabolic adaptation had largely resolved within six years, with resting energy expenditure returning close to what body composition and age alone would predict.",
      "answer": false,
      "points": 1,
      "explanation": "The opposite was true. Six years later, metabolic adaptation was still present, averaging roughly 500 kilocalories per day below what body composition and age would predict, and it was largest in the contestants who had regained the most weight."
    },
    {
      "id": "d2-c1-fill-1",
      "chapter": 1,
      "type": "fill",
      "q": "Muller and Bosy-Westphal's review breaks adaptive thermogenesis into contributing pieces: reduced activity of the {{1}}, a fall in circulating triiodothyronine, improved muscular efficiency, and a drop in {{2}}, the energy spent on everyday fidgeting, posture, and incidental movement.",
      "bank": [
        "sympathetic nervous system",
        "non-exercise activity thermogenesis (NEAT)",
        "parasympathetic nervous system",
        "resting metabolic rate"
      ],
      "answers": {
        "1": "sympathetic nervous system",
        "2": "non-exercise activity thermogenesis (NEAT)"
      },
      "points": 2
    },
    {
      "id": "d2-c2-mc-1",
      "chapter": 2,
      "type": "mc",
      "q": "A catecholamine binds a beta-adrenergic receptor on a fat cell. Which sequence correctly traces what happens next?",
      "options": [
        "The receptor activates a stimulatory G-protein (Gs), which activates adenylyl cyclase, raising cyclic AMP and activating protein kinase A, which then phosphorylates perilipin and activates hormone-sensitive lipase",
        "The receptor activates an inhibitory G-protein (Gi), which lowers cyclic AMP and shuts down hormone-sensitive lipase",
        "The receptor cuts the fatty acids directly off the triglyceride without involving any intracellular messenger",
        "The receptor works by first lowering circulating insulin, which is the actual trigger for lipolysis"
      ],
      "answer": 0,
      "points": 1,
      "explanation": "Beta receptors couple to a stimulatory G-protein that activates adenylyl cyclase, raising cyclic AMP and activating protein kinase A. That kinase phosphorylates perilipin to unlock the lipid droplet and activates hormone-sensitive lipase, which then translocates to the droplet to cut."
    },
    {
      "id": "d2-c2-match-1",
      "chapter": 2,
      "type": "match",
      "q": "Match each component of the lipolysis cascade to its role.",
      "pairs": [
        {
          "left": "Beta-adrenergic receptor",
          "right": "Couples to a stimulatory G-protein (Gs) that activates adenylyl cyclase when a catecholamine binds"
        },
        {
          "left": "Alpha-2 adrenergic receptor",
          "right": "Couples to an inhibitory G-protein (Gi) that lowers cyclic AMP, acting as the brake on lipolysis"
        },
        {
          "left": "Perilipin",
          "right": "Protein coat that restricts access to the lipid droplet until phosphorylated by protein kinase A"
        },
        {
          "left": "Adipose triglyceride lipase (ATGL)",
          "right": "Performs the first cut, removing one fatty acid to leave a diglyceride"
        },
        {
          "left": "Hormone-sensitive lipase (HSL)",
          "right": "The rate-limiting enzyme; translocates to the droplet and removes the second fatty acid"
        }
      ],
      "points": 5
    },
    {
      "id": "d2-c2-fill-1",
      "chapter": 2,
      "type": "fill",
      "q": "Mauriege and colleagues measured adrenoceptor binding sites across fat depots and found that in subcutaneous fat cells from the abdominal and femoral sites, {{1}} binding sites outnumbered beta sites by roughly three to two, while in the internal, or {{2}}, depot the ratio flipped toward beta.",
      "bank": [
        "alpha-2",
        "omental",
        "beta-3",
        "gluteal"
      ],
      "answers": {
        "1": "alpha-2",
        "2": "omental"
      },
      "points": 2
    },
    {
      "id": "d2-c3-mc-1",
      "chapter": 3,
      "type": "mc",
      "q": "What does uncoupling protein 1 (UCP1) actually do inside a brown or beige fat mitochondrion?",
      "options": [
        "It provides a regulated channel that lets protons leak back into the mitochondrial matrix without passing through ATP synthase, so the energy dissipates as heat instead of being captured as ATP",
        "It blocks the electron transport chain entirely, stopping fuel oxidation altogether",
        "It converts glucose directly into stored triglyceride",
        "It increases ATP synthase activity so more chemical energy is captured per proton that crosses the membrane"
      ],
      "answer": 0,
      "points": 1,
      "explanation": "UCP1 is a regulated proton leak, activated by fatty acids and inhibited by purine nucleotides. Protons return to the matrix without passing through the ATP gate, so the energy stored in the gradient dissipates directly as warmth instead of being captured as ATP."
    },
    {
      "id": "d2-c3-tf-1",
      "chapter": 3,
      "type": "tf",
      "q": "Beige fat cells can shift from a resting, white-fat-like state toward a more thermogenic, UCP1-rich state under sustained adrenergic signaling, but the honest description of this shift is a modest recruitment of existing tissue rather than the creation of an entirely new organ.",
      "answer": true,
      "points": 1,
      "explanation": "Beige cells express near-zero UCP1 at rest and only sharply increase it under strong, sustained beta-3 adrenergic and cyclic AMP signaling over days to weeks. 'Recruit' is the chapter's deliberately chosen verb: a shift in behavior in existing tissue, not a wholesale new organ."
    },
    {
      "id": "d2-c3-multi-1",
      "chapter": 3,
      "type": "multi",
      "q": "Which statements about white, brown, and beige adipose tissue are accurate per the chapter? Select all that apply.",
      "options": [
        "White adipose tissue expresses essentially no UCP1 and functions mainly as storage and an endocrine signaling organ",
        "Brown adipose tissue is densely mitochondrial, arises from a precursor lineage more closely related to skeletal muscle than to white fat, and generates heat through nonshivering thermogenesis",
        "Beige fat cells express high levels of UCP1 at rest, indistinguishable from classical brown fat, even before any adrenergic stimulus arrives",
        "Adults were shown by PET-CT imaging in 2009 to retain functionally recruitable brown fat, overturning the older assumption that it was lost almost entirely after infancy",
        "Beiging is best described as an inducible, gradual recruitment of existing tissue toward a more thermogenic phenotype, not the creation of an entirely new organ"
      ],
      "answers": [
        0,
        1,
        3,
        4
      ],
      "scoring": "all_or_nothing",
      "points": 1,
      "explanation": "Beige cells are near-zero UCP1 at rest, indistinguishable from ordinary white fat, and only sharply increase UCP1 under strong, sustained adrenergic signaling. Treating them as already brown-like at baseline is the false option; the other four statements match the chapter's evidence."
    },
    {
      "id": "d2-c4-mc-1",
      "chapter": 4,
      "type": "mc",
      "q": "A learner claims a twenty-minute interval session 'burns calories for the rest of the day' through the afterburn effect. What do LaForgia's and Jiang's findings say about this claim?",
      "options": [
        "The afterburn (EPOC) is large enough on its own to explain most of the weekly fat loss produced by interval training",
        "EPOC does not exist, and intervals confer no metabolic advantage of any kind once the session ends",
        "EPOC only occurs after steady-state cardio and never after high-intensity intervals",
        "EPOC is real and rises with exercise intensity, but it is a small fraction of a session's total oxygen cost, and in a controlled head-to-head trial the advantage of intervals over matched continuous exercise was only about a dozen kilocalories"
      ],
      "answer": 3,
      "points": 1,
      "explanation": "LaForgia and colleagues found EPOC comprises only about 6 to 15 percent of a session's total oxygen cost even under conditions built to maximize it. Jiang and colleagues found the interval advantage over matched continuous running was roughly a dozen kilocalories, less than a bite of a banana."
    },
    {
      "id": "d2-c4-multi-1",
      "chapter": 4,
      "type": "multi",
      "q": "Which statements about exercise modality and fuel use are accurate per the chapter? Select all that apply.",
      "options": [
        "Low-intensity exercise burns a higher percentage of fat during the session, but this does not translate into greater weekly fat loss, because total energy balance over days is what governs the outcome",
        "Resistance training's primary contribution during a fat-loss phase is the calories burned during the lifting session itself",
        "Energy deficits impair gains in lean mass but not gains in strength, with lean-mass gains prevented near a deficit of roughly 500 kilocalories per day",
        "The excess post-exercise oxygen consumption (EPOC) comprises only a small share, roughly 6 to 15 percent, of a session's total oxygen cost even under conditions designed to maximize it",
        "High-intensity interval training and moderate-intensity continuous training produced no significant difference in body-composition outcomes in a meta-analysis of overweight and obese adults"
      ],
      "answers": [
        0,
        2,
        3,
        4
      ],
      "scoring": "all_or_nothing",
      "points": 1,
      "explanation": "Resistance training's calories burned during the session are unremarkable; its real contribution is defending lean tissue, not session-level energy expenditure, which makes that option false. The other four statements match the chapter's evidence on fuel use, EPOC, and modality comparisons."
    },
    {
      "id": "d2-c4-free-1",
      "chapter": 4,
      "type": "free",
      "q": "Desmond, an advanced trainee at roughly twelve percent body fat with cranky knees and a demanding job, built a plan alternating a punishing sprint-interval session, a long steady jog, and two rushed strength sessions, running a deficit near 700 kilocalories a day. He is convinced his stall means he needs an even harder interval session for a bigger afterburn. Using the chapter's evidence on EPOC, the HIIT-versus-steady-state comparison, the deficit threshold for lean-mass gains, and resistance training's role in defending lean mass, explain in an educational, role-neutral way what is actually happening physiologically and how his allocation of the three modalities could be reasoned through differently.",
      "model": "Desmond's plateau is not a metabolism that has failed; it is a resource-allocation problem. His belief that a harder interval session would keep his metabolism elevated for hours overstates the excess post-exercise oxygen consumption (EPOC): LaForgia and colleagues found EPOC comprises only about six to fifteen percent of a session's total oxygen cost even under conditions built to maximize it, and a controlled head-to-head trial found the interval advantage over matched continuous work was only about a dozen kilocalories. Wewege's meta-analysis also shows that intervals and steady-state cardio produce statistically equivalent body-composition outcomes, so trading steady state for more intervals is not buying him a superior fat-loss tool, only a higher recovery cost on knees that are already compromised. Meanwhile his deficit, near 700 kilocalories a day, sits well past the roughly 500 kilocalorie threshold at which Murphy and Koehler found lean-mass gains are prevented, and his two rushed strength sessions are not enough volume to reliably defend the muscle that deficit is placing at risk. The STRRIDE trial found only programs including resistance training increased lean body mass, even though aerobic and combined training moved the scale more. A physiologically reasoned redesign shifts intervals toward optional and low-impact, protects a strength-session count that can actually defend lean tissue, and narrows the deficit toward a more sustainable level, treating resistance training as the non-negotiable lever rather than the one being shortchanged. One more boundary is worth naming: this reasoning addresses expected training and recovery load, not a diagnosis of his knees. If pain becomes persistent, worsens, or shows signs of swelling or dysfunction beyond ordinary training fatigue, that is a sign that warrants evaluation by a qualified clinician, not something to program around indefinitely.",
      "key_points": [
        "EPOC is small in absolute terms (about 6 to 15 percent of session oxygen cost) and the interval-versus-continuous advantage measured directly was only about a dozen kilocalories",
        "HIIT and steady-state cardio produced statistically equivalent body-composition outcomes, so intervals are not a superior fat-loss tool, only a faster one",
        "His roughly 700 kilocalorie deficit exceeds the approximate 500 kilocalorie threshold at which lean-mass gains are prevented",
        "Only resistance training reliably defends or builds lean mass; aerobic training alone moves the scale more without protecting muscle",
        "Notes that persistent or worsening joint pain, as distinct from ordinary training fatigue, is a sign that warrants professional evaluation rather than being managed through programming alone"
      ],
      "rubric": {
        "pass_threshold": 70,
        "points": [
          {
            "desc": "Corrects the afterburn/EPOC misconception with the honest magnitude",
            "weight": 25
          },
          {
            "desc": "Uses the HIIT-versus-steady-state equivalence finding to reframe intervals as a time-cost tradeoff, not a superior tool",
            "weight": 20
          },
          {
            "desc": "Connects the deficit depth to the lean-mass threshold and explains why his strength sessions are insufficient to defend muscle",
            "weight": 35
          },
          {
            "desc": "Keeps an educational, role-neutral framing and flags that persistent joint pain would warrant clinician evaluation rather than being programmed around indefinitely",
            "weight": 20
          }
        ]
      },
      "points": 5,
      "appeal": true
    },
    {
      "id": "d2-c5-mc-1",
      "chapter": 5,
      "type": "mc",
      "q": "According to the chapter, what is insulin's most important action for fat loss specifically?",
      "options": [
        "Insulin directly burns stored fat for energy inside the fat cell itself",
        "Insulin has no meaningful interaction with the lipolysis pathway described earlier in the course",
        "Insulin suppresses lipolysis by lowering cyclic AMP, acting as the direct counterweight to the catecholamine-driven acceleration of fat release",
        "Insulin's only relevant action is on muscle tissue, with no effect on adipose tissue at all"
      ],
      "answer": 2,
      "points": 1,
      "explanation": "Insulin is the most potent physiological suppressor of fat release. It lowers cyclic AMP and restrains protein kinase A, running the same pathway catecholamines drive, only in reverse."
    },
    {
      "id": "d2-c5-match-1",
      "chapter": 5,
      "type": "match",
      "q": "Match each of the four honest levers for improving insulin sensitivity to the mechanism the chapter attributes to it.",
      "pairs": [
        {
          "left": "Exercise",
          "right": "Acutely recruits GLUT4 to the muscle cell surface through an insulin-independent pathway, and chronically raises the muscle's capacity to store and use glucose"
        },
        {
          "left": "Muscle mass",
          "right": "Expands the body's largest glucose sink, since skeletal muscle disposes of up to about eighty percent of an insulin-stimulated glucose load"
        },
        {
          "left": "Sleep",
          "right": "Even a few nights of restriction measurably lowers glucose tolerance and insulin sensitivity while raising ghrelin and lowering leptin"
        },
        {
          "left": "Fat loss itself",
          "right": "Lowers fatty acid mobilization from adipose tissue, which was shown to be the actual mediator of improved sensitivity, not an enhanced capacity to burn fat"
        }
      ],
      "points": 4
    },
    {
      "id": "d2-c5-tf-1",
      "chapter": 5,
      "type": "tf",
      "q": "Schenk and colleagues found that after weight loss, the improvement in insulin sensitivity was driven mainly by reduced fatty acid mobilization from fat tissue, not by an enhanced capacity to oxidize fat, since artificially restoring fatty acid mobilization reversed the sensitivity improvement even in people whose oxidative capacity had increased.",
      "answer": true,
      "points": 1,
      "explanation": "Both diet-alone and diet-plus-exercise groups improved insulin sensitivity by about 60 percent. Artificially restoring pre-loss fatty acid mobilization by overnight lipid infusion nearly reversed that improvement, pinning the mechanism on quieter fat tissue rather than a greater capacity to burn fat."
    },
    {
      "id": "d2-c6-mc-1",
      "chapter": 6,
      "type": "mc",
      "q": "Yohimbine is described as the standout compound on the thermogenic shelf because of its distinctive mechanism. What does it actually do, and for whom does the chapter say it is best suited?",
      "options": [
        "Yohimbine is a selective alpha-2 antagonist that releases the brake on lipolysis, a mechanism that matters most in lean, fasted, sympathetically driven people with a substantial alpha-2 brake to release, and matters far less in sedentary or higher body-fat populations",
        "Yohimbine raises the upstream catecholamine signal the same way caffeine does, and works equally well across sedentary and highly trained people alike",
        "Yohimbine blocks phosphodiesterase directly, working through an identical mechanism to caffeine",
        "Yohimbine permanently increases beta-receptor density in every fat depot it reaches"
      ],
      "answer": 0,
      "points": 1,
      "explanation": "Yohimbine is a selective alpha-2 antagonist, distinct from every other compound on the shelf. Releasing a brake that was barely engaged changes little, which is why its trial evidence comes from already-lean, sympathetically driven populations and does not generalize to sedentary or obese ones."
    },
    {
      "id": "d2-c6-fill-1",
      "chapter": 6,
      "type": "fill",
      "q": "The chapter organizes the thermogenic shelf around four intervention points: raising the upstream catecholamine signal, releasing the {{1}} brake at the fat cell, slowing the signal's breakdown by inhibiting {{2}}, the enzyme that degrades catecholamines, and triggering sympathetic outflow through a sensory receptor such as TRPV1.",
      "bank": [
        "alpha-2",
        "COMT (catechol-O-methyltransferase)",
        "beta-3",
        "PDE3B"
      ],
      "answers": {
        "1": "alpha-2",
        "2": "COMT (catechol-O-methyltransferase)"
      },
      "points": 2
    },
    {
      "id": "d2-c6-multi-1",
      "chapter": 6,
      "type": "multi",
      "q": "Which statements about the thermogenic supplement shelf are accurate per the chapter? Select all that apply.",
      "options": [
        "Caffeine's fat-oxidation effect is well documented but is substantially attenuated by tolerance in trained and habitual-caffeine users",
        "Synephrine's resting thermogenic reputation is most plausibly attributable to co-ingredients such as caffeine rather than to synephrine acting alone",
        "Yohimbine raises the upstream catecholamine signal in the same way caffeine does, rather than acting on the alpha-2 receptor",
        "Green-tea catechins slow the enzymatic breakdown of catecholamines, and their added benefit diminishes in people whose catecholamine tone is already elevated by habitual caffeine intake",
        "Capsaicinoids reach the sympathetic system through TRPV1 activation and may act as much on appetite as on heat"
      ],
      "answers": [
        0,
        1,
        3,
        4
      ],
      "scoring": "all_or_nothing",
      "points": 1,
      "explanation": "Yohimbine's distinctive move is releasing the alpha-2 brake, not raising the upstream signal, which makes that option false. The other four statements accurately describe caffeine, synephrine, green-tea catechins, and capsaicinoids as graded in the chapter."
    },
    {
      "id": "d2-c7-mc-1",
      "chapter": 7,
      "type": "mc",
      "q": "Two people lose the same absolute amount of fat mass, but the leaner one reports far more intense hunger. Using the leptin mechanism described in the chapter, why?",
      "options": [
        "Ghrelin is absent in leaner bodies, so hunger in a lean person must come from an unrelated source",
        "Leaner people have fundamentally different gut hormones that do not respond to leptin at all",
        "Hunger intensity is determined mainly by willpower and has little hormonal basis",
        "Leptin is proportional to fat stores rather than to pounds lost, so the same absolute fat loss represents a much larger fractional drop in stores, and therefore a stronger defense, in the leaner person"
      ],
      "answer": 3,
      "points": 1,
      "explanation": "Felt hunger tracks how close a body has come to what it perceives as dangerous depletion, not pounds lost. A person starting leaner has a smaller leptin reserve to begin with, so the identical absolute loss drops leptin toward the floor and drives a louder defense."
    },
    {
      "id": "d2-c7-tf-1",
      "chapter": 7,
      "type": "tf",
      "q": "Weigle and colleagues found that raising protein from fifteen to thirty percent of energy produced increased satiety and a spontaneous drop in intake, even though the change occurred alongside a decrease in leptin and an increase in ghrelin, meaning protein's satiating effect won out despite the classic hunger hormones moving in the unfavorable direction.",
      "answer": true,
      "points": 1,
      "explanation": "Protein produced a spontaneous drop of roughly 440 kilocalories per day in intake despite leptin falling and ghrelin rising, the hormonal pattern normally associated with more hunger, not less, which underscores how strong protein's own satiating effect is."
    },
    {
      "id": "d2-c7-match-1",
      "chapter": 7,
      "type": "match",
      "q": "Match each appetite-related signal to its role in the chapter's model of hunger and fullness.",
      "pairs": [
        {
          "left": "Ghrelin",
          "right": "Rises before meals and falls after them; the main gut hormone that reliably increases hunger"
        },
        {
          "left": "Leptin",
          "right": "Reports on long-term fat stores and sets the overall gain on the whole hunger system; falls faster than fat mass during a deficit"
        },
        {
          "left": "Glucagon-like peptide 1 (GLP-1) and peptide YY (PYY)",
          "right": "Released from the lower gut, slow gastric emptying, and signal fullness directly to the brain"
        },
        {
          "left": "Cholecystokinin (CCK)",
          "right": "Responds to fat and protein reaching the small intestine as part of the short-term satiety signal"
        }
      ],
      "points": 4
    },
    {
      "id": "d2-c7-multi-1",
      "chapter": 7,
      "type": "multi",
      "q": "Which statements about setpoint defense and adherence are accurate per the chapter? Select all that apply.",
      "options": [
        "The defense against fat loss is typically stronger and more coordinated than the response to fat gain, an asymmetry the chapter frames as an evolutionary mismatch",
        "A year after a structured weight-loss diet ended, Sumithran and colleagues found appetite hormones had returned fully to pre-diet levels",
        "Protein doses at or above roughly 35 grams per meal were needed to reach statistically significant hormonal shifts in ghrelin, cholecystokinin, and GLP-1, even though subjective appetite responded to smaller doses",
        "The MATADOR study found that alternating two-week blocks of dieting with two-week blocks at energy balance produced greater weight and fat loss than continuous restriction despite fewer total weeks in deficit",
        "Persistent distress, loss of control around food, or disordered eating patterns are simply an intensified form of ordinary hunger and can be managed with the same five levers used for typical dieting hunger"
      ],
      "answers": [
        0,
        2,
        3
      ],
      "scoring": "all_or_nothing",
      "points": 1,
      "explanation": "Sumithran found appetite hormones had not reverted a year later, so that option is false. Disordered patterns are a sign that warrants professional evaluation, not something to manage with adherence levers, so that option is false as well. The three remaining statements match the chapter's evidence."
    },
    {
      "id": "d2-c8-mc-1",
      "chapter": 8,
      "type": "mc",
      "q": "A learner hopes thyroid hormone could be used as a targeted dial that raises fat burning while leaving the rest of the body untouched. What does the chapter say about this idea?",
      "options": [
        "Thyroid hormone receptors are highly fat-specific, so raising thyroid hormone affects adipose tissue almost exclusively",
        "There is no such thing as a dial that only turns fat cells; thyroid hormone sets the pace of metabolism across nearly every tissue, so a hyperthyroid state also raises heart rate, strains cardiac tissue, accelerates bone turnover, and can drive muscle loss",
        "Thyroid hormone has no measurable effect on metabolic rate in any tissue",
        "Excess thyroid hormone affects only the thyroid gland itself, with no systemic consequences elsewhere in the body"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "Thyroid hormone acts through nuclear receptors expressed across nearly every tissue. Pushing the systemic metabolic-rate signal above what a person's own axis would choose pushes it everywhere at once, not only into fat cells."
    },
    {
      "id": "d2-c8-fill-1",
      "chapter": 8,
      "type": "fill",
      "q": "Much of the T3 that acts in a given tissue is made locally, when the enzyme type 2 {{1}} strips an iodine from T4 to produce active T3 inside brown adipose tissue, skeletal muscle, and the hypothalamus. Among the three beta-adrenergic receptor subtypes, the {{2}} receptor is the one whose activation is required for the lipolytic and thermogenic machinery of brown and beige fat to run.",
      "bank": [
        "deiodinase (D2)",
        "beta3",
        "peroxidase",
        "beta1"
      ],
      "answers": {
        "1": "deiodinase (D2)",
        "2": "beta3"
      },
      "points": 2
    },
    {
      "id": "d2-c8-free-1",
      "chapter": 8,
      "type": "free",
      "q": "Renata found a forum post promising a 'metabolic reset' compound, described in half-sentences borrowed from real biochemistry, such as mitochondrial and exercise mimetic. Using the chapter's evidence-ladder distinction between GLP-1 receptor agonists, MOTS-c, and SLU-PP-332, and the chapter's boundary between understanding a mechanism and deciding to use a compound, explain in an educational, role-neutral way how to grade this kind of claim and where the responsible response stops.",
      "model": "The words in Renata's forum post, mitochondrial, exercise mimetic, metabolic reset, are not fabricated; they are borrowed from real research questions. The problem is that they are stretched over an evidence base far thinner than the post implies. Grading the claim starts with the evidence ladder: GLP-1 receptor agonists are approved medicines with a large base of human trial evidence behind their appetite-circuitry mechanism. MOTS-c, a mitochondria-derived peptide, and SLU-PP-332, a synthetic small molecule that activates estrogen-related receptors, both carry a genuinely interesting mechanistic rationale, but the supporting evidence for both is overwhelmingly preclinical, built on cell and animal models, with human safety and efficacy not established. A compound occurring naturally in the body, or a molecule that mimics what exercise does at the gene-expression level in mice, is not the same claim as a manufactured version being a safe, tested product for a person to use, and the gap between those two sentences is exactly where a forum post like the one Renata found tends to live. The responsible response is to name the mechanism precisely, name the evidence grade precisely, and stop there. Deciding whether any pharmacological tool is appropriate for a specific person is a clinical decision requiring diagnosis, monitoring, and a duty of care that a course, a forum, or a well-informed friend does not hold. The honest move for Renata is not a verdict on whether the compound is good or bad; it is a clearer question to bring to a qualified clinician about whether any pharmacological support is appropriate for her specific situation, and who would manage it.",
      "key_points": [
        "Distinguishes GLP-1 receptor agonists (approved, large human evidence base) from MOTS-c and SLU-PP-332 (mechanistically plausible but overwhelmingly preclinical, animal-model evidence)",
        "Names the specific mechanism at least one compound is claimed to act through rather than accepting the marketing language at face value",
        "Identifies that borrowed scientific vocabulary can be technically accurate about a research question while still misrepresenting how established the evidence is for human use",
        "Keeps the response at the level of mechanism and evidence grading, not a recommendation for or against use",
        "Routes any decision about pharmacological support to a qualified clinician rather than answering it directly"
      ],
      "rubric": {
        "pass_threshold": 70,
        "points": [
          {
            "desc": "Correctly places GLP-1 agonists versus MOTS-c and SLU-PP-332 on the evidence ladder (approved and human-trial-backed versus preclinical and animal-model)",
            "weight": 30
          },
          {
            "desc": "Names the specific mechanism claimed for at least one compound accurately",
            "weight": 20
          },
          {
            "desc": "Explains why borrowed scientific language does not equal established human safety or efficacy",
            "weight": 20
          },
          {
            "desc": "Keeps an educational, role-neutral framing and defers the actual decision to a qualified clinician",
            "weight": 30
          }
        ]
      },
      "points": 5,
      "appeal": true
    },
    {
      "id": "d2-c9-mc-1",
      "chapter": 9,
      "type": "mc",
      "q": "The capstone chapter's three-axis decision framework asks about population fit, honest effect size, and risk. How do these three axes relate to each other when grading a tool for a specific person?",
      "options": [
        "The three axes should be averaged into a single overall score, so a strong showing on one axis can offset a weak showing on another",
        "The three axes are independent, and a failure on any single axis usually vetoes the tool regardless of how strong it looks on the other two",
        "Only honest effect size matters; population fit and risk are secondary considerations that rarely change a decision",
        "Risk applies only to prescription pharmacology and never to supplements, exercise choices, or diet structure"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "The three axes are deliberately independent so a failure on any one can veto a tool that looks strong on the others. Most 'advanced' tools fail on effect size, most 'aggressive' tools fail on risk, and most 'universal' tools fail on fit."
    },
    {
      "id": "d2-c9-tf-1",
      "chapter": 9,
      "type": "tf",
      "q": "Cifuentes and colleagues found that matching a lifestyle intervention to an individual's physiological or behavioral phenotype produced significantly more weight loss over twelve weeks than a standard, one-size lifestyle program, illustrating that population fit is often the decisive variable rather than the tool itself.",
      "answer": true,
      "points": 1,
      "explanation": "In 165 adults with obesity, phenotype-matched intervention produced roughly 7.4 kilograms of weight loss versus 4.3 kilograms with a standard program over twelve weeks. The tools themselves were not exotic; the difference was fit."
    },
    {
      "id": "d2-c9-match-1",
      "chapter": 9,
      "type": "match",
      "q": "Match each axis of the chapter's decision framework to its definition.",
      "pairs": [
        {
          "left": "Population fit",
          "right": "Whether this person's baseline physiology and life circumstances make them a plausible responder to the tool at all"
        },
        {
          "left": "Honest effect size",
          "right": "How much the tool actually moves the needle, expressed as a magnitude with a range rather than a binary claim that it works"
        },
        {
          "left": "Risk",
          "right": "What the tool can cost, including physiological harm, opportunity cost, financial cost, psychological cost, and scope cost, weighed asymmetrically"
        },
        {
          "left": "Scope",
          "right": "The gate that sits before the three axes; determines whether the decision belongs to education and coaching or to a licensed clinician"
        }
      ],
      "points": 4
    }
  ]
};
