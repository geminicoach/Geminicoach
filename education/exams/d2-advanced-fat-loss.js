/* Gemini Education: D2 (Advanced Fat Loss) FINAL EXAM, interim live version.
   Current exam.html renders MC and free-response only, so this ships 20 MC + 6 true/false
   (as 2-option MC), drawing 20 per attempt, options shuffled, 80% to pass. 26 in the pool.
   Full bank (matching, word-bank, multi-select, write-ins) is in d2-advanced-fat-loss.full.js. */
window.GEM_EXAM = {
  slug: "d2-advanced-fat-loss",
  title: "Advanced Fat Loss",
  contact_hours: 9, ceu_value: 0.9, pass_threshold: 80, draw_mc: 20, placeholder: false,
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
      "id": "d2-c1-mc-2",
      "chapter": 1,
      "type": "mc",
      "q": "A learner asks why the body seems to fight much harder against losing fat than against gaining it. Using the chapter's evolutionary framing, what is the best explanation?",
      "options": [
        "The body defends the upper and lower boundaries with identical force, so the asymmetry many dieters feel is an illusion",
        "The upper boundary is actually defended more fiercely, but modern food abundance simply hides that stronger defense",
        "Fat loss and fat gain are governed by entirely separate, unrelated systems, so no evolutionary comparison applies",
        "For nearly all of human history, running out of stored energy was a more urgent survival threat than carrying extra fat, so natural selection built a fiercer, faster defense against the lower boundary than against the upper one"
      ],
      "answer": 3,
      "points": 1,
      "explanation": "A body that responded weakly to falling fat mass faced a severe, immediate survival cost from starvation, while a body that responded weakly to rising fat mass faced a smaller, slower-acting cost. That asymmetric evolutionary pressure produced a lower boundary that engages hard and early and an upper boundary that is comparatively loose."
    },
    {
      "id": "d2-c1-tf-1",
      "chapter": 1,
      "type": "mc",
      "q": "Fothergill and colleagues found that among former 'Biggest Loser' contestants, metabolic adaptation had largely resolved within six years, with resting energy expenditure returning close to what body composition and age alone would predict.",
      "options": [
        "True",
        "False"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "The opposite was true. Six years later, metabolic adaptation was still present, averaging roughly 500 kilocalories per day below what body composition and age would predict, and it was largest in the contestants who had regained the most weight."
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
      "id": "d2-c2-mc-2",
      "chapter": 2,
      "type": "mc",
      "q": "A friend insists their lower-body fat is stubborn because they are not trying hard enough or because their metabolism is broken. Using the chapter's tissue-level evidence, what is the more accurate explanation?",
      "options": [
        "Stubborn fat cells are simply unreachable by catecholamines, so no hormonal signal ever arrives there",
        "Targeted exercises performed near the stubborn depot change its local receptor density and resolve the issue over a few weeks",
        "Stubborn depots carry measurably higher alpha-2-to-beta receptor ratios and comparatively sluggish local blood flow, so the identical catecholamine signal produces less net fat release there than elsewhere",
        "Stubborn fat is entirely a matter of visible muscle definition rather than adipose tissue physiology"
      ],
      "answer": 2,
      "points": 1,
      "explanation": "Human tissue studies show alpha-2-to-beta receptor ratios running roughly three to two in subcutaneous depots such as the femoral and abdominal regions, versus closer to parity in internal fat, with matching differences in local blood flow response to the same catecholamine dose. Spot-reduction exercise does not change either factor."
    },
    {
      "id": "d2-c2-mc-3",
      "chapter": 2,
      "type": "mc",
      "q": "For decades textbooks credited hormone-sensitive lipase (HSL) with the entire job of triglyceride breakdown. What correction did Zimmermann and colleagues introduce?",
      "options": [
        "Hormone-sensitive lipase (HSL) was found to do nothing, and adipose triglyceride lipase (ATGL) performs every cut in the sequence alone",
        "Perilipin, rather than any lipase, was shown to be the enzyme that actually removes fatty acids",
        "Lipolysis was shown to require no enzymes at all, only a change in membrane permeability",
        "Adipose triglyceride lipase (ATGL) performs the first cut, removing one fatty acid to form a diglyceride, before hormone-sensitive lipase (HSL) removes the second, correcting the older HSL-only textbook model"
      ],
      "answer": 3,
      "points": 1,
      "explanation": "ATGL was a genuine correction, not a footnote. It performs the first cut using a co-activator released when perilipin is phosphorylated, leaving a diglyceride that HSL, the rate-limiting enzyme, then acts on to remove the second fatty acid."
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
      "id": "d2-c3-mc-2",
      "chapter": 3,
      "type": "mc",
      "q": "A video claims cold plunges 'activate your brown fat to melt stubborn fat' and implies dramatic results for anyone who tries it. Using the population data from van Marken Lichtenbelt and Cypess, what is the honest correction?",
      "options": [
        "Brown fat activity is highest in older, higher body-fat adults, so the tool works best for exactly the population chasing a final stubborn stretch",
        "Cold exposure has no real physiological mechanism behind it and is pure marketing",
        "The added energy from cold-activated brown and beige fat is genuine but modest, roughly 50 to 150 kilocalories on a favorable day, and it tends to be largest in leaner, younger, already brown-fat-rich people, the population that typically needs it least",
        "Brown fat reliably contributes several hundred to over a thousand kilocalories per day in nearly everyone, making cold exposure a primary fat-loss tool"
      ],
      "answer": 2,
      "points": 1,
      "explanation": "Both studies found brown fat activity inversely related to age and body fat. Cold exposure pays the most, in a genuine but modest amount of added energy, to the person who arguably needs it least, and the least to the person carrying more body fat who is hoping for a shortcut."
    },
    {
      "id": "d2-c3-tf-1",
      "chapter": 3,
      "type": "mc",
      "q": "Beige fat cells can shift from a resting, white-fat-like state toward a more thermogenic, UCP1-rich state under sustained adrenergic signaling, but the honest description of this shift is a modest recruitment of existing tissue rather than the creation of an entirely new organ.",
      "options": [
        "True",
        "False"
      ],
      "answer": 0,
      "points": 1,
      "explanation": "Beige cells express near-zero UCP1 at rest and only sharply increase it under strong, sustained beta-3 adrenergic and cyclic AMP signaling over days to weeks. 'Recruit' is the chapter's deliberately chosen verb: a shift in behavior in existing tissue, not a wholesale new organ."
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
      "id": "d2-c4-mc-2",
      "chapter": 4,
      "type": "mc",
      "q": "Wewege and colleagues' meta-analysis compared high-intensity interval training against moderate-intensity continuous training for fat loss in overweight and obese adults. What did they find?",
      "options": [
        "High-intensity interval training produced significantly greater fat loss than moderate-intensity continuous training on every measure",
        "Neither modality was superior for body-composition outcomes; both produced significant fat-mass and waist-circumference reductions, and interval training simply achieved equivalent results in roughly 40 percent less training time",
        "Moderate-intensity continuous training produced significantly greater fat loss than intervals on every measure",
        "Neither modality produced any measurable fat loss compared with doing no structured exercise at all"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "Both modalities produced significant, statistically indistinguishable reductions in fat mass and waist circumference. The real difference between them was time cost and recovery cost, not fat-loss superiority."
    },
    {
      "id": "d2-c4-mc-3",
      "chapter": 4,
      "type": "mc",
      "q": "The STRRIDE AT/RT trial found that aerobic training and combined training reduced fat mass more than resistance training alone. What did only the programs that included resistance training accomplish?",
      "options": [
        "Only the programs that included resistance training increased lean body mass, even though aerobic training and the combined program reduced total fat mass more than resistance training alone",
        "Resistance training alone produced greater total fat loss than aerobic or combined training",
        "Adding resistance training raised resting heart rate to levels the researchers considered unsafe",
        "Resistance training was shown to eliminate any need for a dietary energy deficit"
      ],
      "answer": 0,
      "points": 1,
      "explanation": "Aerobic and combined training moved the scale more, but only programs including resistance training increased lean body mass. Fat-free mass is the primary determinant of resting metabolic rate, which is why defending it matters most for an advanced trainee."
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
      "id": "d2-c5-mc-2",
      "chapter": 5,
      "type": "mc",
      "q": "A person insists that controlling insulin, mainly by minimizing carbohydrate, is the real key to fat loss and that energy balance is secondary. Using Hall's (2017) appraisal of the carbohydrate-insulin model, how should this claim be corrected?",
      "options": [
        "The claim is correct: controlled inpatient feeding studies confirmed that a low-carbohydrate, low-insulin diet produces dramatically more fat loss than a matched-calorie, matched-protein higher-carbohydrate diet",
        "Insulin is irrelevant to fat loss, and insulin sensitivity never matters for anyone",
        "Carbohydrate intake has no measurable effect on insulin secretion in humans",
        "Controlled inpatient feeding studies swapping carbohydrate for fat at matched calories and protein did not show the predicted low-carbohydrate advantage; the strong carbohydrate-insulin model has been experimentally falsified, and fat loss over time still obeys energy balance"
      ],
      "answer": 3,
      "points": 1,
      "explanation": "Under tightly controlled inpatient conditions, swapping the carbohydrate-to-fat ratio at fixed calories and protein produced very similar fat loss. Insulin partitions energy moment to moment, but it does not exempt anyone from the energy-balance ledger across a full day."
    },
    {
      "id": "d2-c5-tf-1",
      "chapter": 5,
      "type": "mc",
      "q": "Schenk and colleagues found that after weight loss, the improvement in insulin sensitivity was driven mainly by reduced fatty acid mobilization from fat tissue, not by an enhanced capacity to oxidize fat, since artificially restoring fatty acid mobilization reversed the sensitivity improvement even in people whose oxidative capacity had increased.",
      "options": [
        "True",
        "False"
      ],
      "answer": 0,
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
      "id": "d2-c6-mc-2",
      "chapter": 6,
      "type": "mc",
      "q": "According to the fed-state meta-analysis discussed in the chapter, caffeine's fat-oxidation effect during exercise was present in untrained, caffeine-naive people but was essentially absent in which group?",
      "options": [
        "People who exercise only in a fasted state, regardless of training history",
        "Trained athletes and habitual caffeine consumers, in whom receptor-level tolerance attenuates the effect",
        "People who consume caffeine only once per week",
        "Older adults specifically, regardless of training status or caffeine habits"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "Chronic caffeine exposure upregulates adenosine receptor density and sensitivity, a classic tolerance mechanism, so the same dose disinhibits proportionally less sympathetic outflow in trained, habitual users. Caffeine's most defensible use in this group may be ergogenic rather than thermogenic."
    },
    {
      "id": "d2-c6-mc-3",
      "chapter": 6,
      "type": "mc",
      "q": "A learner plans to stack caffeine, yohimbine, and a synephrine-containing product together, reasoning that three mechanisms must multiply the fat-loss benefit. What does the chapter's 'stimulant ledger' concept say about this plan?",
      "options": [
        "Combining several adrenergic compounds multiplies both the fat-loss benefit and the stimulant cost by an equal factor",
        "Benefit tends to be sub-additive, since the compounds crowd overlapping downstream signaling space, while stimulant cost on heart rate and blood pressure is close to fully additive, making aggressive stacking a poor trade",
        "Stacking multiple adrenergic compounds has no measurable effect on cardiovascular markers",
        "Three mechanisms acting on the same pathway always cancel each other out completely"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "Four of the five compounds surveyed increase sympathetic drive through overlapping or redundant routes, so the combined thermogenic gain is smaller than the arithmetic sum of the parts. Heart rate and blood pressure, by contrast, do not distinguish which molecule raised them, so the stimulant cost adds up close to fully."
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
      "id": "d2-c7-mc-2",
      "chapter": 7,
      "type": "mc",
      "q": "A common assumption holds that once a diet ends, appetite-regulating hormones quickly return to their pre-diet baseline. What did Sumithran and colleagues find a full year after a ten-week diet?",
      "options": [
        "Ghrelin remained elevated and leptin, peptide YY, and cholecystokinin remained suppressed a full year after the diet ended, with subjective hunger still higher than at baseline",
        "All measured appetite hormones and subjective hunger had fully returned to pre-diet baseline within a few weeks",
        "Appetite hormones reset completely within 24 hours of the structured diet ending",
        "Leptin was the only hormone affected by the diet, and it normalized immediately afterward"
      ],
      "answer": 0,
      "points": 1,
      "explanation": "A year after the acute diet ended, the hormonal changes that push toward regain had not reverted. The brain was still running its defense program long after the structured diet itself was over, which is why maintenance often feels like a low-grade diet."
    },
    {
      "id": "d2-c7-tf-1",
      "chapter": 7,
      "type": "mc",
      "q": "Weigle and colleagues found that raising protein from fifteen to thirty percent of energy produced increased satiety and a spontaneous drop in intake, even though the change occurred alongside a decrease in leptin and an increase in ghrelin, meaning protein's satiating effect won out despite the classic hunger hormones moving in the unfavorable direction.",
      "options": [
        "True",
        "False"
      ],
      "answer": 0,
      "points": 1,
      "explanation": "Protein produced a spontaneous drop of roughly 440 kilocalories per day in intake despite leptin falling and ghrelin rising, the hormonal pattern normally associated with more hunger, not less, which underscores how strong protein's own satiating effect is."
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
      "id": "d2-c8-mc-2",
      "chapter": 8,
      "type": "mc",
      "q": "GLP-1 receptor agonists are described in the chapter as the sub-class where the 'shortcut' framing comes closest to reality. What keeps them squarely on the clinical side of the boundary despite their strong evidence base?",
      "options": [
        "They have no meaningful evidence base at all, which is the only reason they require a prescription",
        "They act only on adipose tissue directly, with no interaction with appetite signaling",
        "They act on appetite circuitry with a large, well-evidenced effect, but they remain medicines requiring clinical selection, monitoring, and management of concerns such as lean mass protection during rapid loss",
        "Once prescribed, no further clinical monitoring is needed because the mechanism is already fully understood"
      ],
      "answer": 2,
      "points": 1,
      "explanation": "GLP-1 receptor agonists act on the appetite circuitry mapped in the chapter, centrally and peripherally, with strong human trial evidence behind them. They are still medicines with defined indications, monitoring needs, and questions about nutrition and lean mass that belong to a prescribing clinician."
    },
    {
      "id": "d2-c8-tf-1",
      "chapter": 8,
      "type": "mc",
      "q": "MOTS-c and SLU-PP-332 have been established as safe and effective in large human clinical trials, placing their evidence base on par with the trial evidence already established for GLP-1 receptor agonists.",
      "options": [
        "True",
        "False"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "Both compounds are described as exercise mimetics with a real mechanistic rationale, but the supporting evidence for both is overwhelmingly preclinical, built on cell and animal models. Neither has established human safety and efficacy data comparable to the GLP-1 receptor agonist evidence base."
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
      "type": "mc",
      "q": "Cifuentes and colleagues found that matching a lifestyle intervention to an individual's physiological or behavioral phenotype produced significantly more weight loss over twelve weeks than a standard, one-size lifestyle program, illustrating that population fit is often the decisive variable rather than the tool itself.",
      "options": [
        "True",
        "False"
      ],
      "answer": 0,
      "points": 1,
      "explanation": "In 165 adults with obesity, phenotype-matched intervention produced roughly 7.4 kilograms of weight loss versus 4.3 kilograms with a standard program over twelve weeks. The tools themselves were not exotic; the difference was fit."
    }
  ]
};
