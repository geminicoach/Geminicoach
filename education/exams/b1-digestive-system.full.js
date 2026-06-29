/* B1 FULL exam bank (all question types) — PARKED until the portal thread upgrades
   exam.html to render matching / multi-select / word-bank / write-in. The live exam
   (b1-digestive-system.js) is an interim MC-only subset that runs on the current engine.
   Swap this in (and delete the interim) once the new-type renderers + appeal grader ship. */
/* Gemini Education: FINAL EXAM bank for B1 (The Digestive System).
   Classic script, no modules: sets window.GEM_EXAM. Loaded by exam.html as exams/<slug>.js.
   Authored by the Classbuild and Revision thread, grounded in the 10 B1 chapters.
   Schema and engine contract: see education/EXAM-SPEC.md.
   Types: mc, multi, tf, match, fill (drag-and-drop word bank), free (write-in).
   draw.free is 0 for now: the 3 write-ins are authored and ready, but stay OFF the
   graded path until the portal thread ships the first-pass grader and appeal workflow.
   Objective items (mc, multi, tf, match, fill) carry the 80 percent pass on their own. */
window.GEM_EXAM = {
  slug: "b1-digestive-system",
  title: "The Digestive System",
  contact_hours: 10,
  ceu_value: 1.0,
  pass_threshold: 80,
  placeholder: false,
  draw: { mc: 12, multi: 4, tf: 4, match: 2, fill: 3, free: 0 },
  shuffle: { questions: true, options: true },
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
      "id": "b1-c1-multi-1",
      "chapter": 1,
      "type": "multi",
      "q": "Select every statement that correctly matches an accessory organ or secretion to its role in chapter 1.",
      "options": [
        "Bile is made in the liver, stored in the gallbladder, and emulsifies fat",
        "The pancreas supplies digestive enzymes plus bicarbonate to neutralize acid",
        "Salivary amylase is produced by the stomach to start carbohydrate digestion",
        "Pepsin is secreted by stomach chief cells to begin protein digestion",
        "The esophagus secretes bile to break down fats before the stomach"
      ],
      "answers": [
        0,
        1,
        3
      ],
      "scoring": "all_or_nothing",
      "points": 1,
      "explanation": "Bile (liver/gallbladder), pancreatic enzymes plus bicarbonate, and chief-cell pepsin are correct; salivary amylase comes from salivary glands, and the esophagus performs no digestion."
    },
    {
      "id": "b1-c1-fill-1",
      "chapter": 1,
      "type": "fill",
      "q": "Two muscular movements organize the gut: {{1}} is the wave that pushes contents forward, while {{2}} mixes contents in place to aid absorption.",
      "bank": [
        "peristalsis",
        "segmentation",
        "emulsification",
        "denaturation"
      ],
      "answers": {
        "1": "peristalsis",
        "2": "segmentation"
      },
      "points": 2
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
      "id": "b1-c2-tf-1",
      "chapter": 2,
      "type": "tf",
      "q": "Probiotics are live microbes that are swallowed and that mostly pass through transiently, rarely permanently recolonizing the gut, so feeding the resident microbes with fermentable fiber is generally a higher-leverage strategy.",
      "answer": true,
      "points": 1,
      "explanation": "The chapter states probiotics are mostly transient and rarely recolonize, while feeding existing residents (prebiotic fiber) offers higher leverage."
    },
    {
      "id": "b1-c2-free-1",
      "chapter": 2,
      "type": "free",
      "q": "A client shares an at-home stool test report that assigns them a low microbiome score and recommends a specific probiotic product to fix it. Within a coaching scope, explain how you would respond: address the science of microbiome variation and the limits of such tests, what genuinely higher-leverage guidance you can offer, and where the clinical boundary lies.",
      "model": "I would explain that there is no single ideal microbiome and that individual variation is large, so a score that grades you against an ideal overstates what the science supports. Much mechanism comes from mouse and germ-free models and many human findings are correlational, so the direction of cause is often unclear; be skeptical of tests that score you and then sell the fix. Higher-leverage guidance is to feed the residents you already have by gradually building fiber variety from fermentable sources (inulin, pectin, resistant starch, beta-glucan) and adding fermented foods, since swallowed probiotics are mostly transient and rarely recolonize. I would stay in scope by educating on the fiber to fermentation to butyrate mechanism and not interpreting the test as a diagnosis, and I would refer red flags such as bloody stool, persistent or severe pain, unexplained weight loss, or suspected inflammatory bowel disease to a qualified clinician.",
      "key_points": [
        "There is no single ideal microbiome and variation is large; score-and-sell tests are not well supported and much evidence is correlational or from animal models",
        "Higher-leverage advice is feeding resident microbes with varied fermentable fiber and fermented foods, since probiotics are mostly transient",
        "Stay in scope: educate on the mechanism, do not diagnose from the test, and refer red flags (bloody stool, severe or persistent pain, unexplained weight loss, suspected IBD) to a clinician"
      ],
      "rubric": {
        "pass_threshold": 70,
        "points": [
          {
            "desc": "Accurately critiques the test and microbiome-variation science (no single ideal, correlational and animal-model limits)",
            "weight": 40
          },
          {
            "desc": "Offers higher-leverage, in-scope guidance (feed residents with varied fermentable fiber and fermented foods; probiotics mostly transient)",
            "weight": 30
          },
          {
            "desc": "Maintains the coaching boundary: educate not diagnose, and refers named red flags to a clinician",
            "weight": 30
          }
        ]
      },
      "points": 5,
      "appeal": true
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
      "id": "b1-c3-tf-1",
      "chapter": 3,
      "type": "tf",
      "q": "The vagus nerve carries traffic in roughly equal proportions in both directions, with signaling from the brain to the gut slightly outweighing signaling from the gut to the brain.",
      "answer": false,
      "points": 1,
      "explanation": "Vagal traffic is roughly 80 percent afferent (gut to brain) and 20 percent efferent (brain to gut); it is mostly an upload, not balanced."
    },
    {
      "id": "b1-c3-fill-1",
      "chapter": 3,
      "type": "fill",
      "q": "In the gut-brain axis, the body's sense of its own internal state is called {{1}}, and ongoing parasympathetic activity that tilts toward calm and smooth digestion is called {{2}}.",
      "bank": [
        "interoception",
        "vagal tone",
        "colonization resistance",
        "segmentation"
      ],
      "answers": {
        "1": "interoception",
        "2": "vagal tone"
      },
      "points": 2
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
      "id": "b1-c4-multi-1",
      "chapter": 4,
      "type": "multi",
      "q": "According to chapter 4, which of the following are genuine jobs of stomach acid (HCl)? Select all that apply.",
      "options": [
        "Denaturing protein so pepsin can reach buried bonds",
        "Activating pepsinogen into pepsin at low pH",
        "Directly digesting food by breaking its chemical bonds",
        "Killing most ingested microbes before they reach the gut",
        "Emulsifying dietary fat into small droplets"
      ],
      "answers": [
        0,
        1,
        3
      ],
      "scoring": "all_or_nothing",
      "points": 1,
      "explanation": "Acid denatures protein, activates pepsin, and defends against microbes; it does not digest food directly (enzymes do that) and does not emulsify fat (bile does)."
    },
    {
      "id": "b1-c4-match-1",
      "chapter": 4,
      "type": "match",
      "q": "Match each digestive enzyme or secretion to its correct source or primary action.",
      "pairs": [
        {
          "left": "Salivary amylase",
          "right": "Made by salivary glands; starts starch and is inactivated by stomach acid"
        },
        {
          "left": "Pepsin",
          "right": "From chief cells as pepsinogen, activated by HCl; begins protein digestion"
        },
        {
          "left": "Pancreatic lipase",
          "right": "From the pancreas; cuts triglycerides into fatty acids and monoglycerides after bile emulsifies them"
        },
        {
          "left": "Bile",
          "right": "From liver and gallbladder; emulsifies fat but breaks no chemical bonds"
        },
        {
          "left": "Brush border enzymes",
          "right": "On small intestine microvilli; disaccharidases and peptidases make the final cuts"
        }
      ],
      "points": 5
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
      "id": "b1-c5-multi-1",
      "chapter": 5,
      "type": "multi",
      "q": "Which of the following are alarm features from Chapter 5 that should stop the mechanism conversation and start a referral conversation? Select all that apply.",
      "options": [
        "Blood in the stool, black tarry stools, or coffee-ground vomit",
        "Passing flatus roughly a dozen times in a day",
        "Unexplained weight loss or signs of anemia",
        "Trouble swallowing, with food catching or hurting",
        "More gas on a day with extra fermentable fiber"
      ],
      "answers": [
        0,
        2,
        3
      ],
      "scoring": "all_or_nothing",
      "points": 1,
      "explanation": "Blood, unexplained weight loss or anemia, and trouble swallowing are alarm features that lower the threshold for a professional to look. Passing flatus a dozen times a day and more gas on a high-fiber day are normal fermentation, not red flags."
    },
    {
      "id": "b1-c5-tf-2",
      "chapter": 5,
      "type": "tf",
      "q": "Because volume of gas is a strong and reliable predictor of how bloated a person feels, the most effective target for bloating is always to get the gas out.",
      "answer": false,
      "points": 1,
      "explanation": "Volume is a poor predictor of bloating. Bloating rides on three legs: fermentation load, gas transport and motility, and visceral sensitivity. Handling and sensitivity matter more than raw volume, so \"get the gas out\" is the wrong target."
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
      "id": "b1-c6-tf-1",
      "chapter": 6,
      "type": "tf",
      "q": "Increased intestinal permeability (\"leaky gut\") is a real, measurable phenomenon, but it is often a consequence of inflammation rather than the single root cause of nearly every condition.",
      "answer": true,
      "points": 1,
      "explanation": "The chapter splits leaky gut in half: the real version is increased permeability via loosened tight junctions, measurable and raised by stress, exercise, NSAIDs, and IBD. The inflated marketing version casts it as the root cause of almost everything; in reality it is often a consequence of inflammation, and association is not causation."
    },
    {
      "id": "b1-c6-match-1",
      "chapter": 6,
      "type": "match",
      "q": "Match each named condition to the description of its underlying cause.",
      "pairs": [
        {
          "left": "IBS",
          "right": "Functional, multi-mechanism gut-brain disorder with real pain but no tissue damage"
        },
        {
          "left": "GERD",
          "right": "Mechanical: a weak or wrongly relaxing lower esophageal sphincter plus repeated acid exposure"
        },
        {
          "left": "IBD (Crohn's, UC)",
          "right": "Immune-mediated inflammation that genuinely damages the bowel wall"
        },
        {
          "left": "Celiac disease",
          "right": "Gluten-triggered autoimmune attack in HLA-DQ2/DQ8 carriers that flattens the villi"
        },
        {
          "left": "SIBO",
          "right": "Bacteria overgrowing a normally sparse small intestine, often downstream of impaired motility"
        }
      ],
      "points": 5
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
      "id": "b1-c7-multi-2",
      "chapter": 7,
      "type": "multi",
      "q": "According to Chapter 7, which statements about probiotics and the Zheng and colleagues (2023) meta-analysis are accurate? Select all that apply.",
      "options": [
        "The pooled results were positive: probiotics reduced markers like zonulin and LPS and increased transepithelial electrical resistance",
        "A probiotic claim is only worth believing when a specific strain is named at an adequate dose with demonstrated benefit",
        "The authors concluded the question is fully settled and no further trials are needed",
        "Effects are strain- and condition-specific, not a blanket benefit for everyone",
        "Many bottles on the market may not contain what their label claims"
      ],
      "answers": [
        0,
        1,
        3,
        4
      ],
      "scoring": "all_or_nothing",
      "points": 1,
      "explanation": "Zheng et al. found a genuinely positive pooled barrier effect yet still called for more high-quality RCTs, so the question is not settled. A believable claim names the strain, dose, and benefit; effects are strain- and condition-specific; and product quality is a real problem, since many bottles do not contain what the label claims."
    },
    {
      "id": "b1-c7-fill-1",
      "chapter": 7,
      "type": "fill",
      "q": "In the butyrate engine, fermentable fiber goes in and bacteria produce {{1}}, which fuels the colonocytes and upregulates {{2}} to thicken the protective mucus layer, while also maintaining the Claudin, Occludin, and ZO-1 tight junctions.",
      "bank": [
        "butyrate",
        "MUC2",
        "zonulin",
        "pepsin"
      ],
      "answers": {
        "1": "butyrate",
        "2": "MUC2"
      },
      "points": 2,
      "explanation": "Fermentable fiber feeds bacteria that make butyrate, which fuels colonocytes (up to 70% of their energy), upregulates the MUC2 mucin gene to thicken mucus, and maintains the Claudin, Occludin, and ZO-1 tight junctions. Zonulin is a leaky-barrier marker and pepsin is a stomach enzyme, not parts of this engine."
    },
    {
      "id": "b1-c7-fill-2",
      "chapter": 7,
      "type": "fill",
      "q": "Not all fiber does the same job: {{1}} fiber such as psyllium holds water and normalizes stool form through a mechanical effect, whereas {{2}} fiber such as inulin or resistant starch feeds microbes and drives short-chain fatty acid production and should be ramped slowly.",
      "bank": [
        "gel-forming",
        "fermentable",
        "insoluble bran",
        "synthetic"
      ],
      "answers": {
        "1": "gel-forming",
        "2": "fermentable"
      },
      "points": 2,
      "explanation": "Gel-forming fiber (psyllium) is mechanical, not microbial: it holds water and normalizes stool form. Fermentable fiber (inulin, resistant starch) feeds microbes and drives SCFAs but should be ramped slowly to avoid gas and bloating. Match the property to the job, not the word on the label."
    },
    {
      "id": "b1-c7-free-1",
      "chapter": 7,
      "type": "free",
      "q": "A client shows you a premium supplement marketed to \"heal your leaky gut and cure bloating,\" featuring a \"proprietary blend\" with no named strains or doses and citing a single mouse study. Using the chapter's framework, explain how you would help them evaluate this claim and what your scope-of-practice boundaries are. Address the kind of claim being made, the quality of the evidence, and what you can and cannot do as a coach.",
      "model": "I would walk the client through the three-question filter rather than give a verdict. First, what kind of claim is it: words like \"heal\" and \"cure\" are medical claims a supplement may not legitimately make and are a red flag, while \"supports\" would be a vague structure-function phrase. Second, what is the evidence: a single mouse study stretched into a human headline is weak evidence, and a \"proprietary blend\" with no named strain or dose means I cannot match strain, dose, and population to this person, so by the standard that no named strain equals no claim worth believing, there is nothing here to trust. I would contrast that with the stronger tiers, such as the Zheng (2023) meta-analysis of human RCTs or the Wastyk (2021) fermented-foods trial with its caveats stated. Third, who benefits: loud marketing tends to track thin evidence, while the free foundations (nutrition, sleep, stress, hydration, movement) have the strongest support and no ad budget. On scope, I would be explicit that supplements are not treatments, that I educate and weigh claims but do not diagnose or treat, that I would steer them toward the foundations first, and that I would advise checking with a provider before starting or stacking supplements. Crucially, \"leaky gut\" and \"bloating\" framed as a disease to be cured, and any persistent symptoms, pain, blood, or unexplained weight loss, belong to a physician, not a coaching plan. I would never promise a cure.",
      "key_points": [
        "Identifies \"heal\"/\"cure\" as illegitimate medical claims and a red flag, versus vague \"supports\" structure-function language",
        "Flags weak evidence: a single mouse study stretched to a human headline, and a proprietary blend with no named strain or dose (no strain named, no claim worth believing)",
        "Contrasts with stronger evidence tiers (human RCTs / meta-analysis such as Zheng 2023 or Wastyk 2021) and notes marketing volume tends to track thin evidence",
        "States the foundations (nutrition, sleep, stress, hydration, movement) come first and have the strongest, unmarketed support",
        "Holds scope of practice: educate and refer, do not diagnose or treat, supplements are not treatments, advise checking with a provider before starting or stacking",
        "Refers persistent symptoms, pain, blood, or unexplained weight loss to a physician and never promises a cure"
      ],
      "rubric": {
        "pass_threshold": 70,
        "points": [
          {
            "desc": "Correctly classifies the claim type (cure/heal as a medical-claim red flag, not a permitted structure-function claim)",
            "weight": 20
          },
          {
            "desc": "Critiques the evidence quality (mouse study, no named strain or dose) against the chapter's evidence tiers",
            "weight": 25
          },
          {
            "desc": "Centers the free foundations over the supplement and explains why marketing tracks thin evidence",
            "weight": 20
          },
          {
            "desc": "Maintains scope of practice: educate and refer, do not diagnose or treat, advise provider before supplementing",
            "weight": 25
          },
          {
            "desc": "Refers persistent or alarm symptoms to a physician and avoids promising a cure",
            "weight": 10
          }
        ]
      },
      "points": 5,
      "appeal": true
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
      "id": "b1-c8-multi-1",
      "chapter": 8,
      "type": "multi",
      "q": "Which of the following would impair absorption of the fat-soluble vitamins A, D, E, and K? Select all that apply.",
      "options": [
        "Absence of bile",
        "Missing or insufficient lipase",
        "A fat-free meal",
        "Eating the vitamins alongside vitamin C",
        "Absorption occurring mainly in the colon"
      ],
      "answers": [
        0,
        1,
        2
      ],
      "scoring": "all_or_nothing",
      "points": 1,
      "explanation": "Fat-soluble vitamins need bile to form micelles, lipase to hydrolyze fat, and dietary fat in the meal. Vitamin C does not impair them, and they are absorbed in the proximal/mid small intestine, not the colon."
    },
    {
      "id": "b1-c8-match-1",
      "chapter": 8,
      "type": "match",
      "q": "Match each nutrient to the primary site where it is absorbed.",
      "pairs": [
        {
          "left": "Vitamin B12 (with intrinsic factor)",
          "right": "Terminal ileum"
        },
        {
          "left": "Folate (B9), glucose, amino acids",
          "right": "Jejunum"
        },
        {
          "left": "Non-heme iron and calcium",
          "right": "Duodenum"
        },
        {
          "left": "Water, electrolytes, and short-chain fatty acids",
          "right": "Colon"
        }
      ],
      "points": 4
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
      "id": "b1-c9-multi-2",
      "chapter": 9,
      "type": "multi",
      "q": "Which statements about lactose intolerance are accurate per the chapter? Select all that apply.",
      "options": [
        "It is caused by low lactase, with undigested lactose reaching the colon",
        "Symptoms arise from osmosis pulling in water plus bacterial fermentation making gas",
        "It is dose-dependent, so a splash may be fine while a tall glass is not",
        "It is immune-mediated and a trace amount can trigger anaphylaxis",
        "Total lifelong elimination of all dairy is the only valid management"
      ],
      "answers": [
        0,
        1,
        2
      ],
      "scoring": "all_or_nothing",
      "points": 1,
      "explanation": "Lactose intolerance is a non-immune enzyme issue: low lactase leaves lactose to reach the colon, where osmosis and fermentation cause symptoms. It is dose-dependent and managed (thresholds, spacing, enzyme support), not necessarily eliminated. It is not immune-mediated."
    },
    {
      "id": "b1-c9-tf-1",
      "chapter": 9,
      "type": "tf",
      "q": "Allergy, intolerance, and sensitivity are three points on a single severity scale, with allergy simply being the most severe version of the same reaction.",
      "answer": false,
      "points": 1,
      "explanation": "They are different mechanisms, not one mechanism running at different speeds. The branch point is whether the immune system is involved (allergy yes, intolerance no), with sensitivity a mixed and often uncertain category."
    },
    {
      "id": "b1-c9-fill-1",
      "chapter": 9,
      "type": "fill",
      "q": "The valid test for a food allergy is an {{1}} or skin-prick test ordered by an allergist, while a suspected carbohydrate intolerance is evaluated with a {{2}} that should reproduce symptoms, not just gas.",
      "bank": [
        "IgE",
        "hydrogen breath test",
        "IgG panel",
        "hair analysis"
      ],
      "answers": {
        "1": "IgE",
        "2": "hydrogen breath test"
      },
      "points": 2
    },
    {
      "id": "b1-c9-free-1",
      "chapter": 9,
      "type": "free",
      "q": "A client says they feel bloated and foggy a day or two after eating bread and asks you to help them figure out what is wrong. Explain how you would respond within a coach's scope. Address the allergy versus intolerance versus sensitivity branch point, why certain tests are or are not valid, the celiac testing trap, and where you must refer rather than diagnose.",
      "model": "I would start from the branch point: is the immune system involved? Delayed bloat and fog with a weak link to a specific food fit the sensitivity category, but I cannot diagnose. Before removing anything, I would encourage ruling out mimics first, especially celiac disease (an autoimmune condition, not an allergy or sensitivity), because going gluten-free before testing makes celiac impossible to diagnose later, which is the celiac trap. I would explain that IgG panels, hair analysis, and similar tests are not valid because they measure exposure or fail under blinding; valid tools are IgE or skin-prick for allergy and a hydrogen breath test for carbohydrate intolerance, both ordered by a clinician. Within my lane, I can teach mechanisms, protect overall nutrition, and support a properly run elimination and reintroduction ideally with a dietitian. I would refer anything immune or uncertain to a physician or allergist, and I would treat any throat tightening, hives, or trouble breathing as a possible anaphylaxis emergency. I would never tell the client to test a reaction by eating a suspected allergen, and I would never diagnose.",
      "key_points": [
        "Applies the immune-involvement branch point to classify the situation",
        "Recommends ruling out mimics such as celiac while still eating the suspect food",
        "Names the celiac trap: do not go gluten-free before testing",
        "Distinguishes valid tests (IgE/skin-prick, hydrogen breath test) from invalid ones (IgG panels)",
        "Stays in scope: educate, protect nutrition, support proper elimination/reintroduction, refer to dietitian or physician",
        "Treats allergy as medical and never advises eating a suspected allergen; flags anaphylaxis as an emergency"
      ],
      "rubric": {
        "pass_threshold": 70,
        "points": [
          {
            "desc": "Correctly applies the allergy vs intolerance vs sensitivity branch point",
            "weight": 20
          },
          {
            "desc": "Explains valid vs invalid testing accurately",
            "weight": 20
          },
          {
            "desc": "Identifies the celiac testing trap and rule-out-mimics-first sequencing",
            "weight": 20
          },
          {
            "desc": "Keeps clear coaching boundaries: refers, does not diagnose, never tests an allergen by eating it",
            "weight": 25
          },
          {
            "desc": "Names red flags or anaphylaxis as an emergency and protects nutrition",
            "weight": 15
          }
        ]
      },
      "points": 5,
      "appeal": true
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
      "id": "b1-c10-tf-2",
      "chapter": 10,
      "type": "tf",
      "q": "Because the colon does not develop tolerance to opioids, opioid-induced constipation tends to persist rather than resolve on its own.",
      "answer": true,
      "points": 1,
      "explanation": "Opioids bind mu-opioid receptors in the enteric nervous system, slowing transit and cutting secretion. The colon does not develop tolerance, so constipation persists and often needs medical management; the coach supports fiber, fluids, and movement and refers."
    },
    {
      "id": "b1-c10-match-2",
      "chapter": 10,
      "type": "match",
      "q": "Match each drug class to its primary gut effect or key nutrient interaction.",
      "pairs": [
        {
          "left": "Antibiotics",
          "right": "Sharp drop in microbial diversity and lower butyrate"
        },
        {
          "left": "NSAIDs",
          "right": "Reduced protective prostaglandins, increased permeability, bleeding risk"
        },
        {
          "left": "Acid reducers (PPIs)",
          "right": "Higher gastric pH and reduced B12, iron, and magnesium"
        },
        {
          "left": "Metformin",
          "right": "Diarrhea and nausea, with lower B12 on long-term use"
        },
        {
          "left": "Opioids",
          "right": "Slowed transit causing persistent constipation"
        }
      ],
      "points": 5
    },
    {
      "id": "b1-c10-fill-2",
      "chapter": 10,
      "type": "fill",
      "q": "Stopping a PPI abruptly can trigger {{1}} acid hypersecretion, because suppressed pumps make gastrin rise and the acid machinery upregulate; the keep-or-stop call and any {{2}} belong to the clinician.",
      "bank": [
        "rebound",
        "tapering",
        "anaphylaxis",
        "fermentation"
      ],
      "answers": {
        "1": "rebound",
        "2": "tapering"
      },
      "points": 2
    }
  ]
};
