/* Gemini Education: B1 (The Digestive System) FINAL EXAM, interim live version.
   The current exam.html engine renders multiple-choice and free-response only. This file
   ships the 18 MC items plus 6 true/false items (rendered as 2-option MC),
   drawing 20 per attempt with options shuffled, 80% to pass. 24 in the pool so attempts rotate.
   The FULL bank (matching, word-bank, multi-select, write-ins; 43 items) is in
   b1-digestive-system.full.js, ready to go live when the PORTAL thread upgrades the engine
   to render those types + the write-in appeal grader. Schema: education/EXAM-SPEC.md. */
window.GEM_EXAM = {
  slug: "b1-digestive-system",
  title: "The Digestive System",
  contact_hours: 10,
  ceu_value: 1.0,
  pass_threshold: 80,
  draw_mc: 20,
  placeholder: false,
  questions: [
    {
      "id": "b1-c1-mc-1",
      "chapter": 1,
      "type": "mc",
      "q": "A client asks why the small intestine, rather than the stomach, is described as the main site of nutrient uptake. Which structural feature best explains the small intestine's absorptive capacity?",
      "options": [
        "Its thick muscular wall churns food more forcefully than the stomach",
        "Folds, villi, and microvilli multiply its surface area enormously",
        "Its low pH denatures proteins so they absorb faster",
        "It stores the meal longer than any other organ"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "Folds, villi, and microvilli stack to vastly expand surface area, and more surface means more absorption."
    },
    {
      "id": "b1-c2-mc-1",
      "chapter": 2,
      "type": "mc",
      "q": "A client takes a fiber supplement marketed for regularity but sees no change in symptoms tied to fermentation. Which distinction best explains why a fiber supplement is not automatically microbiome food?",
      "options": [
        "Fermentability, not solubility, drives the microbial biology, and not all fiber is fermentable",
        "All soluble fiber is non-fermentable and only adds bulk",
        "Supplemental fiber is always fully digested by human enzymes",
        "Only insoluble fiber such as wheat bran feeds butyrate producers"
      ],
      "answer": 0,
      "points": 1,
      "explanation": "Fermentability is what drives the biology; non-fermentable bulking fibers like wheat bran add bulk but do not feed the fermentation engine."
    },
    {
      "id": "b1-c2-mc-2",
      "chapter": 2,
      "type": "mc",
      "q": "In the virtuous butyrate loop, why does adequate fiber intake help keep the colon lumen low in oxygen and favorable to beneficial anaerobes?",
      "options": [
        "Fiber chemically binds free oxygen in the lumen",
        "Fiber slows transit so oxygen has time to diffuse out through the stool",
        "Butyrate from fermentation fuels colonocytes, which burn oxygen and keep the lumen anaerobic",
        "Fiber raises luminal pH, which displaces dissolved oxygen"
      ],
      "answer": 2,
      "points": 1,
      "explanation": "Colonocytes burn butyrate (and oxygen), keeping the lumen low-oxygen so anaerobic butyrate makers thrive, a self-reinforcing loop."
    },
    {
      "id": "b1-c3-mc-1",
      "chapter": 3,
      "type": "mc",
      "q": "A client read online that gut-made serotonin directly lifts mood. Based on the chapter, what is the most accurate correction?",
      "options": [
        "Gut serotonin is the same pool that the brain uses for mood",
        "The gut makes almost no serotonin, so the claim is backwards",
        "Most serotonin is gut-made, but it does not cross the blood-brain barrier; gut and brain pools are separate",
        "Gut serotonin crosses freely into the brain only during stress"
      ],
      "answer": 2,
      "points": 1,
      "explanation": "About 90 to 95 percent of serotonin is gut-made by enterochromaffin cells, but it does not cross the blood-brain barrier; the molecule stays in the gut while its signal travels up the vagus."
    },
    {
      "id": "b1-c4-mc-1",
      "chapter": 4,
      "type": "mc",
      "q": "A wellness product claims its swallowed digestive enzyme works throughout the whole gut. Using the pH address-system concept, what is the strongest scientific objection?",
      "options": [
        "Enzymes are too large to ever reach the small intestine intact",
        "Each enzyme has an optimal pH, so one outside its range unfolds and loses activity, like a key in the wrong lock",
        "Swallowed enzymes always raise stomach acid to dangerous levels",
        "Enzymes only work when bound to bile salts"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "Each enzyme has an optimal pH; pepsin needs the acidic stomach and pancreatic enzymes need the alkaline duodenum, so an enzyme in the wrong pH is a key in the wrong lock."
    },
    {
      "id": "b1-c4-mc-2",
      "chapter": 4,
      "type": "mc",
      "q": "A client with greasy, floating, foul-smelling stools and weight loss asks what such a pattern can indicate. Which condition does the chapter associate with this hallmark of steatorrhea?",
      "options": [
        "Lactose intolerance from a single missing brush border enzyme",
        "Acid reflux from a leaking valve",
        "Exocrine pancreatic insufficiency, where the pancreas cannot deliver enough enzymes",
        "Hypochlorhydria, or low stomach acid"
      ],
      "answer": 2,
      "points": 1,
      "explanation": "Steatorrhea (greasy, floating, foul stools plus weight loss) is the hallmark of exocrine pancreatic insufficiency; note this is educate-and-refer, not a coaching diagnosis."
    },
    {
      "id": "b1-c5-mc-1",
      "chapter": 5,
      "type": "mc",
      "q": "A client reports their belly looks visibly distended after meals, but a careful history suggests they are not eating unusual amounts. Based on the chapter's mechanism for distension, what is the best framing to offer?",
      "options": [
        "The visible bulge reliably reflects the actual volume of gas trapped in the gut, so reducing gas is the priority",
        "Visible girth and internal gas volume are only loosely coupled; a shape change in the muscular container (abdominophrenic dyssynergia) can produce the bulge",
        "Distension is almost always a sign of structural disease and should be treated as an alarm feature on its own",
        "The distension proves the person is producing far more gas than a healthy gut would"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "Measured studies show the gas volumes involved are often too small to explain the bulge. Abdominophrenic dyssynergia (diaphragm descends while the abdominal wall relaxes and protrudes) redistributes normal contents forward, so girth and gas volume are loosely coupled. Distension alone is not an alarm feature."
    },
    {
      "id": "b1-c5-mc-2",
      "chapter": 5,
      "type": "mc",
      "q": "A client says antacids relieve their occasional heartburn, and concludes this proves they make too much stomach acid. Reading the signal backwards, what does the relief actually demonstrate?",
      "options": [
        "That the stomach is overproducing acid and the factory needs to be slowed",
        "That the person has GERD and should start a long-term acid-suppression plan",
        "That acid is the irritant being exposed by a barrier or motility leak, not that acid is overproduced",
        "That the heartburn is unrelated to acid at all"
      ],
      "answer": 2,
      "points": 1,
      "explanation": "Reflux is primarily a barrier and motility failure (transient LES relaxations, weak tone, hiatal hernia). Acid is the irritant the leak exposes. Relief from antacids only proves acid is the irritant, not that the factory is overflowing."
    },
    {
      "id": "b1-c5-mc-3",
      "chapter": 5,
      "type": "mc",
      "q": "Two clients both report watery diarrhea. The chapter (per Keely and Barrett, 2022, and Camilleri and colleagues, 2017) stresses that this single complaint can arise from distinct physiologies. Which pairing correctly separates them?",
      "options": [
        "Fast transit leaving too little time to reabsorb water versus active secretion of chloride and water into the lumen",
        "Too much fiber versus too little fiber, with no other mechanism involved",
        "Excess stomach acid versus too little stomach acid",
        "A psychological cause versus a purely structural cause"
      ],
      "answer": 0,
      "points": 1,
      "explanation": "Diarrhea has at least two different physiologies: a transit route (fast transit leaves too little time to reabsorb water) and a secretory route (the epithelium actively pours chloride and water into the lumen). They are distinct mechanisms, not one."
    },
    {
      "id": "b1-c6-mc-4",
      "chapter": 6,
      "type": "mc",
      "q": "A new client states matter-of-factly, \"I have IBS, it flares whenever I eat.\" They have never seen a clinician. What is the most appropriate coaching response within scope?",
      "options": [
        "Agree that it is probably IBS and start an IBS-specific food plan right away",
        "Tell them it is likely SIBO instead and suggest a breath test",
        "Explain that IBS is a specific Rome IV criteria-based diagnosis that assumes a clinician has already excluded organic disease, and encourage a proper workup before applying the label",
        "Reassure them it is almost certainly nothing and no clinician visit is needed"
      ],
      "answer": 2,
      "points": 1,
      "explanation": "IBS is a positive, criteria-based clinical diagnosis (Rome IV) that presumes a clinician has considered and excluded organic mimics. A self-applied label skips that step, which the coach is not qualified to perform. Educate and refer; do not say someone probably has IBS or start an IBS plan on a self-label."
    },
    {
      "id": "b1-c6-mc-5",
      "chapter": 6,
      "type": "mc",
      "q": "A client suspects they have celiac disease and asks whether they should try cutting out gluten for a month to see if they feel better. What is the correct, in-scope guidance?",
      "options": [
        "Yes, a diagnostic gluten elimination is the simplest way to confirm celiac at home",
        "No; testing (serology plus confirming biopsy) must come first, while still eating gluten, so a clinician should be seen before any gluten change",
        "It does not matter when they remove gluten because the test is accurate either way",
        "Recommend they remove gluten now and get tested whenever is convenient afterward"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "Celiac is diagnosed by serology plus a confirming biopsy, which must happen before gluten is removed, because removing gluten first can mask the disease and invalidate testing. A coach should never suggest a diagnostic gluten elimination; testing, and therefore a clinician, comes first."
    },
    {
      "id": "b1-c7-mc-6",
      "chapter": 7,
      "type": "mc",
      "q": "A client sleeping five and a half hours a night asks which probiotic to buy to repair their gut barrier. Using the chapter's order of leverage and the Sun and colleagues (2023) findings on sleep loss, what is the highest-leverage response?",
      "options": [
        "Recommend the most expensive multi-strain probiotic, since barrier repair starts with supplements",
        "Suggest a butyrate supplement to bottle the molecule directly and skip the foundations",
        "Point out that chronic short sleep simultaneously thins mucus, loosens tight junctions, and reduces butyrate producers, so finding an extra hour of sleep is likely the single highest-leverage change first",
        "Tell them probiotics will fully offset the sleep loss, so the sleep does not need to change"
      ],
      "answer": 2,
      "points": 1,
      "explanation": "Supplements sit last and small in the stack. Sleep loss attacks nearly every component of barrier repair at once (less MUC2 and mucus, weaker Claudin/Occludin/ZO-1 junctions, fewer SCFA producers), so for an under-slept person sleep is upstream of butyrate, mucus, and junctions simultaneously and is the highest-leverage move."
    },
    {
      "id": "b1-c8-mc-1",
      "chapter": 8,
      "type": "mc",
      "q": "A client takes a large iron supplement with a cup of strong tea right after a meal and wonders why their iron status has not improved. Based on the chapter, which combination best explains the poor non-heme iron uptake?",
      "options": [
        "Tea polyphenols and the timing of a large dose with food both inhibit non-heme iron at the duodenum",
        "Iron is absorbed in the terminal ileum, so meal timing is irrelevant",
        "Vitamin C in the meal blocked the DMT1 transporter",
        "Heme and non-heme iron share one saturable transporter that the tea overwhelmed"
      ],
      "answer": 0,
      "points": 1,
      "explanation": "Non-heme iron is absorbed at the duodenum and is inhibited by tea/coffee polyphenols and by large competing loads; vitamin C and gastric acid are enhancers, not blockers. Heme iron uses its own pathway, largely shielded from meal company."
    },
    {
      "id": "b1-c8-mc-2",
      "chapter": 8,
      "type": "mc",
      "q": "Why does vitamin B12 have no backup absorption site when something goes wrong upstream?",
      "options": [
        "It is absorbed across the whole small intestine, so damage anywhere stops it",
        "It is absorbed only in the terminal ileum and only with intrinsic factor present",
        "It rides micelles and therefore depends entirely on bile",
        "It is absorbed paracellularly in the colon alongside water"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "B12 crosses only at the terminal ileum and requires stomach acid plus intrinsic factor plus an intact pancreas and ileum. There is no alternative site, which is why it has three potential failure points."
    },
    {
      "id": "b1-c8-mc-3",
      "chapter": 8,
      "type": "mc",
      "q": "A client splits their magnesium into smaller doses across the day rather than one large dose. Which absorption principle does this strategy use?",
      "options": [
        "Paracellular transport is faster for small volumes",
        "Bile is only available in small amounts at a time",
        "Active carrier-mediated uptake saturates, so a higher fraction of smaller doses is absorbed",
        "Magnesium competes with B12 for intrinsic factor"
      ],
      "answer": 2,
      "points": 1,
      "explanation": "Carriers can be overwhelmed (saturation). With magnesium the active route is favored by smaller doses spread out, so a larger fraction crosses than from one big dose that saturates the active door."
    },
    {
      "id": "b1-c8-mc-4",
      "chapter": 8,
      "type": "mc",
      "q": "Which statement most accurately captures how vitamin D \"breaks the rules\" of gut absorption discussed in the chapter?",
      "options": [
        "It is the only vitamin absorbed in the colon by microbial fermentation",
        "Its largest source is sunlight on skin, not food, yet it governs active calcium absorption",
        "It needs no bile because it is water-soluble",
        "It is absorbed in the ileum with intrinsic factor like B12"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "Vitamin D's largest source is sunlight on skin rather than gut absorption, and it controls active calcium uptake (low D becomes low calcium). Its dietary fraction still obeys the fat-soluble (A, D, E, K) rules, needing bile and dietary fat."
    },
    {
      "id": "b1-c9-mc-5",
      "chapter": 9,
      "type": "mc",
      "q": "A client reports that even a trace of peanut causes hives and lip swelling within minutes. According to the chapter, the single most important thing a coach should do is:",
      "options": [
        "Run a structured elimination and reintroduction to confirm the food",
        "Suggest an at-home IgG panel to map the reaction",
        "Refer to an allergist and never test the reaction by eating the suspected allergen",
        "Recommend a lower-dose version of peanut to build tolerance"
      ],
      "answer": 2,
      "points": 1,
      "explanation": "Fast, trace-triggered reactions like hives and lip swelling point to an IgE-mediated allergy, a medical condition. The coach refers to an allergist and never advises an eat-it-to-test approach; this can risk anaphylaxis."
    },
    {
      "id": "b1-c10-mc-6",
      "chapter": 10,
      "type": "mc",
      "q": "A client on a long-term PPI mentions new fatigue and asks if they should just stop the drug to fix their nutrient levels. Based on the chapter, the coach's correct response is to:",
      "options": [
        "Agree, since stopping the PPI will quickly restore B12 and iron",
        "Tell them to halve the dose to reduce nutrient losses",
        "Note the pattern, route them to the prescriber or pharmacist for testing, and never advise stopping",
        "Recommend high-dose calcium carbonate to offset the acid suppression"
      ],
      "answer": 2,
      "points": 1,
      "explanation": "PPIs can reduce B12, non-heme iron, magnesium, and some calcium. The coach may notice the pattern and route to a prescriber or pharmacist, but never advises stopping or changing the dose; rebound acid hypersecretion is real and tapering is clinical."
    },
    {
      "id": "b1-c2-tf-1",
      "chapter": 2,
      "type": "mc",
      "q": "Probiotics are live microbes that are swallowed and that mostly pass through transiently, rarely permanently recolonizing the gut, so feeding the resident microbes with fermentable fiber is generally a higher-leverage strategy.",
      "options": [
        "True",
        "False"
      ],
      "answer": 0,
      "points": 1,
      "explanation": "The chapter states probiotics are mostly transient and rarely recolonize, while feeding existing residents (prebiotic fiber) offers higher leverage."
    },
    {
      "id": "b1-c3-tf-1",
      "chapter": 3,
      "type": "mc",
      "q": "The vagus nerve carries traffic in roughly equal proportions in both directions, with signaling from the brain to the gut slightly outweighing signaling from the gut to the brain.",
      "options": [
        "True",
        "False"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "Vagal traffic is roughly 80 percent afferent (gut to brain) and 20 percent efferent (brain to gut); it is mostly an upload, not balanced."
    },
    {
      "id": "b1-c5-tf-2",
      "chapter": 5,
      "type": "mc",
      "q": "Because volume of gas is a strong and reliable predictor of how bloated a person feels, the most effective target for bloating is always to get the gas out.",
      "options": [
        "True",
        "False"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "Volume is a poor predictor of bloating. Bloating rides on three legs: fermentation load, gas transport and motility, and visceral sensitivity. Handling and sensitivity matter more than raw volume, so \"get the gas out\" is the wrong target."
    },
    {
      "id": "b1-c6-tf-1",
      "chapter": 6,
      "type": "mc",
      "q": "Increased intestinal permeability (\"leaky gut\") is a real, measurable phenomenon, but it is often a consequence of inflammation rather than the single root cause of nearly every condition.",
      "options": [
        "True",
        "False"
      ],
      "answer": 0,
      "points": 1,
      "explanation": "The chapter splits leaky gut in half: the real version is increased permeability via loosened tight junctions, measurable and raised by stress, exercise, NSAIDs, and IBD. The inflated marketing version casts it as the root cause of almost everything; in reality it is often a consequence of inflammation, and association is not causation."
    },
    {
      "id": "b1-c9-tf-1",
      "chapter": 9,
      "type": "mc",
      "q": "Allergy, intolerance, and sensitivity are three points on a single severity scale, with allergy simply being the most severe version of the same reaction.",
      "options": [
        "True",
        "False"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "They are different mechanisms, not one mechanism running at different speeds. The branch point is whether the immune system is involved (allergy yes, intolerance no), with sensitivity a mixed and often uncertain category."
    },
    {
      "id": "b1-c10-tf-2",
      "chapter": 10,
      "type": "mc",
      "q": "Because the colon does not develop tolerance to opioids, opioid-induced constipation tends to persist rather than resolve on its own.",
      "options": [
        "True",
        "False"
      ],
      "answer": 0,
      "points": 1,
      "explanation": "Opioids bind mu-opioid receptors in the enteric nervous system, slowing transit and cutting secretion. The colon does not develop tolerance, so constipation persists and often needs medical management; the coach supports fiber, fluids, and movement and refers."
    }
  ]
};
