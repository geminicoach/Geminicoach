/* Gemini Education: B3 (Cortisol & the Stress-Hormone System) FULL exam bank (all question types).
   PARKED until the portal thread upgrades exam.html to render matching / multi-select /
   word-bank / write-in. The live exam (b3-cortisol.js) is an interim MC+TF subset
   on the current engine. Swap this in when the new-type renderers + appeal grader ship.
   Schema: education/EXAM-SPEC.md. */
window.GEM_EXAM = {
  slug: "b3-cortisol",
  title: "Cortisol & the Stress-Hormone System",
  contact_hours: 13, ceu_value: 1.3, pass_threshold: 80, placeholder: false,
  draw: { mc: 13, multi: 4, tf: 4, match: 2, fill: 3, free: 0 },
  shuffle: { questions: true, options: true },
  questions: [
    {
      "id": "b3-c1-mc-1",
      "chapter": 1,
      "type": "mc",
      "q": "A learner buys a supplement marketed to block cortisol so their level stays as low as possible, on the belief that lower is always healthier. Which response is best grounded in the chapter?",
      "options": [
        "Driving cortisol toward zero would be ideal, since cortisol is fundamentally a toxin the body is better off without",
        "Cortisol is an essential glucocorticoid, and a near-total shortfall (as in untreated adrenal insufficiency) is a medical emergency, so the goal is a healthy rhythm, not a minimal level",
        "The plan is fine as long as the morning peak is preserved, because only nighttime cortisol is harmful",
        "Blocking cortisol is safe because the liver would simply manufacture more to compensate"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "Cortisol mobilizes glucose, restrains inflammation, supports blood pressure, and drives the morning waking surge. Reduce it toward zero and the picture is untreated adrenal insufficiency, a genuine emergency. The target is an intact pattern, never a smaller number for its own sake."
    },
    {
      "id": "b3-c1-tf-1",
      "chapter": 1,
      "type": "tf",
      "q": "Because a hormone's meaning as a signal lives in its pattern, two people with an identical 24-hour total cortisol output can be in very different states of health, one with a robust morning peak and deep nighttime trough and one running flat around the clock.",
      "answer": true,
      "points": 1,
      "explanation": "Cortisol is information, judged by its shape rather than its total. The same daily area under the curve can hide a healthy peak-and-trough rhythm or a flattened one, and only the shaped rhythm carries a usable schedule to the tissues."
    },
    {
      "id": "b3-c1-fill-1",
      "chapter": 1,
      "type": "fill",
      "q": "The detox pitch fails on chemistry: cortisol is not an accumulating waste product but is built on demand and then broken down and cleared by the {{1}}, with a half-life of roughly an hour or two. Its meaning lies in its pattern, so it is best understood as a regulated {{2}} rather than a substance to be flushed.",
      "bank": [
        "liver",
        "signal",
        "kidney medulla",
        "reservoir"
      ],
      "answers": {
        "1": "liver",
        "2": "signal"
      },
      "points": 2
    },
    {
      "id": "b3-c2-mc-1",
      "chapter": 2,
      "type": "mc",
      "q": "A product claims chronic stress drains the adrenal glands like a battery until they run empty. Using the chapter's account of how cortisol is produced, why is this depletion picture chemically implausible?",
      "options": [
        "Cortisol is a steroid synthesized on demand from cholesterol, not a peptide stockpiled in vesicles, so there is no finished reserve that overuse could exhaust",
        "The adrenal cortex stores several days of finished cortisol, which is why depletion takes months",
        "Cortisol is stored in the adrenal medulla alongside adrenaline and released together",
        "The glands cannot be drained because cortisol is never actually cleared from the blood"
      ],
      "answer": 0,
      "points": 1,
      "explanation": "Unlike peptide hormones such as adrenocorticotropic hormone (ACTH) that can be pre-made and stored, cortisol is built to order from cholesterol every time it is needed, so there is no warehouse of finished hormone to run dry."
    },
    {
      "id": "b3-c2-match-1",
      "chapter": 2,
      "type": "match",
      "q": "Match each element of the hypothalamic-pituitary-adrenal (HPA) axis to its correct description.",
      "pairs": [
        {
          "left": "Hypothalamus (PVN)",
          "right": "Releases corticotropin-releasing hormone (CRH) into a private portal blood system to the pituitary"
        },
        {
          "left": "Anterior pituitary",
          "right": "Cleaves POMC to release adrenocorticotropic hormone (ACTH) into the general circulation"
        },
        {
          "left": "Adrenal cortex (zona fasciculata)",
          "right": "Reads ACTH at the MC2R and manufactures cortisol on demand from cholesterol"
        },
        {
          "left": "Fast negative feedback",
          "right": "Endocannabinoid, retrograde, non-genomic, acting within seconds"
        },
        {
          "left": "Slow negative feedback",
          "right": "Glucocorticoid-receptor-mediated suppression of the CRH and POMC genes over hours"
        }
      ],
      "points": 5
    },
    {
      "id": "b3-c2-fill-1",
      "chapter": 2,
      "type": "fill",
      "q": "The rate-limiting first step of cortisol synthesis is the delivery of cholesterol across the mitochondrial membrane by the {{1}} protein, after which the enzyme P450scc cleaves it to make {{2}}. This is the step adrenocorticotropic hormone (ACTH) most directly accelerates.",
      "bank": [
        "StAR",
        "pregnenolone",
        "aldosterone",
        "transcortin"
      ],
      "answers": {
        "1": "StAR",
        "2": "pregnenolone"
      },
      "points": 2
    },
    {
      "id": "b3-c2-tf-1",
      "chapter": 2,
      "type": "tf",
      "q": "Roughly 80 to 90 percent of blood cortisol is bound to cortisol-binding globulin (CBG) and only about 5 to 10 percent circulates free, so a rise in body temperature or local inflammation can loosen CBG and increase active free cortisol without any new signal from the brain.",
      "answer": true,
      "points": 1,
      "explanation": "CBG is not passive packaging: its affinity falls with heat and with cleavage by neutrophil elastase at inflamed sites, releasing extra active cortisol locally without changing total cortisol or requiring a new central order."
    },
    {
      "id": "b3-c3-mc-1",
      "chapter": 3,
      "type": "mc",
      "q": "A person draws a single blood cortisol sample one morning, sees a value flagged as high, and concludes they are heading for burnout. What is the strongest reason this conclusion is premature?",
      "options": [
        "Morning cortisol is meaningless because cortisol does not vary across the day",
        "A high value actually proves the opposite, that cortisol is low",
        "Cortisol swings roughly tenfold from its morning peak to its midnight trough, so a value without a timestamp read against the correct time-of-day band is uninterpretable, and morning is when a healthy curve is supposed to peak",
        "Blood can never measure cortisol, so the number is simply an artifact"
      ],
      "answer": 2,
      "points": 1,
      "explanation": "The diurnal rhythm peaks around 08:30 and troughs near midnight, a roughly tenfold swing. A robust morning value is the expected shape, and a single number without its draw time cannot show whether a rhythm is healthy or disordered."
    },
    {
      "id": "b3-c3-tf-1",
      "chapter": 3,
      "type": "tf",
      "q": "The cortisol awakening response (CAR) is a reliable 50 to 75 percent rise in free cortisol within the roughly 30 minutes after waking, but it is interpretable only when the exact time of awakening is verified, because an unrecorded twenty minutes can turn a normal result into a scary-looking one.",
      "answer": true,
      "points": 1,
      "explanation": "The CAR is defined by its timing, so it is easy to measure badly. Expert consensus guidelines require objective verification of waking time and repeated sampling; a mis-timed first tube can miss the sharpest part of the rise entirely."
    },
    {
      "id": "b3-c3-multi-1",
      "chapter": 3,
      "type": "multi",
      "q": "Which statements about the diurnal cortisol rhythm and its timekeeping are accurate? Select all that apply.",
      "options": [
        "The rhythm is anticipatory: cortisol rises before waking to mobilize fuel and alertness in advance",
        "The suprachiasmatic nucleus (SCN) reads light through melanopsin-containing retinal cells and paces the axis",
        "The adrenal gland has its own peripheral clock that gates how strongly it answers ACTH",
        "A cortisol value is fully interpretable without knowing what time it was drawn",
        "Shift work tends to blunt the morning peak and raise evening cortisol"
      ],
      "answers": [
        0,
        1,
        2,
        4
      ],
      "scoring": "all_or_nothing",
      "points": 1,
      "explanation": "The rhythm is anticipatory, light-entrained through the SCN, and shaped by a bimodal system in which the adrenal's own clock tunes its ACTH sensitivity. A value without a timestamp is uninterpretable, so that option is false."
    },
    {
      "id": "b3-c4-mc-1",
      "chapter": 4,
      "type": "mc",
      "q": "Right after a near miss in traffic, a person's heart is pounding within seconds yet they still feel shaky ten minutes later. Which explanation fits the two-arm design of the acute stress response?",
      "options": [
        "Both effects come from cortisol, which acts within milliseconds",
        "The instant pounding is the fast sympathetic-adrenal-medullary (SAM) axis releasing adrenaline in seconds, while the lingering buzz reflects cortisol from the slower hypothalamic-pituitary-adrenal (HPA) axis still climbing toward its 15-to-30-minute peak",
        "Adrenaline and cortisol both peak instantly, so the lingering feeling must be a malfunction",
        "The shakiness proves the stress response failed to shut off and has become pathological"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "The SAM axis releases catecholamines within seconds; the HPA axis is slower, with cortisol peaking about 15 to 30 minutes in. Feeling the fast arm clear while the slow arm still rises is the staggered timing the design produces, not a fault."
    },
    {
      "id": "b3-c4-multi-1",
      "chapter": 4,
      "type": "multi",
      "q": "During an acute emergency, which of the following are adaptive actions of cortisol described in the chapter? Select all that apply.",
      "options": [
        "Raising circulating glucose through gluconeogenesis and mobilizing fatty acids",
        "Permissively enabling catecholamines to support blood pressure and cardiovascular tone",
        "Sharpening arousal and consolidating memory of a survival-relevant event",
        "Permanently shutting down digestion and reproduction with no way to restore them",
        "Dampening non-essential functions for the duration of the emergency"
      ],
      "answers": [
        0,
        1,
        2,
        4
      ],
      "scoring": "all_or_nothing",
      "points": 1,
      "explanation": "Cortisol mobilizes fuel, permissively supports the cardiovascular surge, sharpens the mind, and temporarily dampens non-urgent systems. The dampening is a reversible wartime rationing, not a permanent shutdown, so that option is false."
    },
    {
      "id": "b3-c4-free-1",
      "chapter": 4,
      "type": "free",
      "q": "Malik came to the course convinced his stress response is too big and out of proportion after a near miss, because his hands shook and his heart raced for several minutes after the danger had passed. Using the two-arm design, the off-switch, and the acute-versus-chronic distinction, explain in an educational, role-neutral way why almost everything he experienced is his physiology working as designed, and then state clearly where your explanation must stop and hand off to a clinician.",
      "model": "Malik felt two systems on two clocks. The instant pounding and dry mouth were the sympathetic-adrenal-medullary (SAM) axis firing before conscious thought, releasing adrenaline within seconds; adrenaline then cleared quickly, which is why the sharpest edge softened. Meanwhile cortisol from the slower hypothalamic-pituitary-adrenal (HPA) axis was still climbing toward its 15-to-30-minute peak, which is why the low buzz lingered after the van was gone. The vivid memory is stress-enhanced consolidation stamping a survival lesson, and the trembling in the pulled-over car is the off-switch engaging, the visible edge of a system powering down on schedule. The strength of the on-switch and the reliability of the shutdown are two sides of one well-built, self-limiting response. What this explanation cannot do is judge whether Malik in particular is healthy. A racing heart and shaking hands are a textbook acute response, and they can also, in a different person or context, be a symptom a clinician would want to evaluate. The mechanism does not tell you which, so the honest move is to give Malik an accurate model and real reassurance about the physiology, and to leave any verdict about his own health to a qualified clinician who can take a history and interpret it in context.",
      "key_points": [
        "SAM axis releases adrenaline in seconds (the instant pounding), then clears quickly",
        "HPA axis cortisol peaks 15 to 30 minutes in, explaining the lingering buzz",
        "Vivid memory is adaptive stress-enhanced consolidation of a survival lesson",
        "Trembling afterward is the off-switch engaging, the sign of a self-limiting response",
        "Role-neutral boundary: describe the mechanism, but defer any verdict on his health to a clinician"
      ],
      "rubric": {
        "pass_threshold": 70,
        "points": [
          {
            "desc": "Distinguishes the fast SAM adrenaline surge from the slower HPA cortisol rise and uses the timing to explain the lingering feeling",
            "weight": 30
          },
          {
            "desc": "Identifies the trembling and the return to baseline as the off-switch of a self-limiting response, not a malfunction",
            "weight": 25
          },
          {
            "desc": "Frames the intense reaction as adaptive design rather than an oversized or broken response",
            "weight": 20
          },
          {
            "desc": "Keeps an educational, role-neutral framing and defers any judgment about Malik's own health to a qualified clinician",
            "weight": 25
          }
        ]
      },
      "points": 5,
      "appeal": true
    },
    {
      "id": "b3-c5-mc-1",
      "chapter": 5,
      "type": "mc",
      "q": "A stylized composite shows a person with a blunted morning cortisol rise, a higher-than-normal evening level, slightly elevated fasting glucose, and a resting blood pressure at the top of normal, with no single value flagged as abnormal. Which concept best reads this pattern?",
      "options": [
        "Adrenal fatigue, since the flattened curve proves the glands have run empty",
        "Nothing meaningful, because every individual value is within range",
        "Allostatic load, a cumulative multi-system wear read across systems together rather than from any single marker, reflecting dysregulation rather than exhausted glands",
        "Acute stress, since the values would return to normal within minutes"
      ],
      "answer": 2,
      "points": 1,
      "explanation": "Allostatic load is a multi-system index; the signal is in the accumulation across systems. A flattened diurnal slope is a robust biomarker of chronic stress, and the pathology is dysregulation, not glands that have run out."
    },
    {
      "id": "b3-c5-match-1",
      "chapter": 5,
      "type": "match",
      "q": "Match each of the four modes of allostatic overload to its description.",
      "pairs": [
        {
          "left": "Repeated hits",
          "right": "The same stress response is mounted too often, so peaks stack before recovery completes"
        },
        {
          "left": "Failure to habituate",
          "right": "The response does not dampen to a familiar, repeated stressor"
        },
        {
          "left": "Failure to shut off",
          "right": "The response fires appropriately but negative feedback fails to terminate it"
        },
        {
          "left": "Inadequate response",
          "right": "The axis under-responds or flattens, releasing cortisol's restraint on inflammation"
        }
      ],
      "points": 4
    },
    {
      "id": "b3-c5-tf-1",
      "chapter": 5,
      "type": "tf",
      "q": "The chapter presents the cardiovascular system as the place where allostatic load tends to declare itself first, citing evidence that a single mental stressor can impair the vessel lining for hours and that a persistently active stress-processing brain predicts later cardiac events.",
      "answer": true,
      "points": 1,
      "explanation": "Ghiadoni showed a brief mental stressor impaired endothelial function for hours; Kivimaki tied job strain to coronary risk across populations; and Tawakol linked resting amygdalar activity to later cardiovascular events through sympathetic and inflammatory pathways."
    },
    {
      "id": "b3-c6-mc-1",
      "chapter": 6,
      "type": "mc",
      "q": "A supplement promises to measure and block your cortisol to melt visceral fat. What is a decisive problem with the measure half of that claim?",
      "options": [
        "Blood cortisol is impossible to measure at all",
        "The enzyme 11-beta-HSD1 regenerates active cortisol locally inside adipose and liver tissue, so tissue glucocorticoid exposure can be high even when blood cortisol is normal and is invisible to any single blood or saliva number",
        "Cortisol has no effect on metabolism, so measuring it is pointless",
        "Visceral fat is caused entirely by cortisol acting alone, so the measurement is the only thing that matters"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "11-beta-HSD1 in fat and liver regenerates active cortisol from cortisone, so the biologically relevant exposure is generated partly within tissues and cannot be captured by a systemic number."
    },
    {
      "id": "b3-c6-fill-1",
      "chapter": 6,
      "type": "fill",
      "q": "Cortisol's core metabolic job is fuel mobilization: it drives hepatic {{1}} by upregulating enzymes such as PEPCK, manufacturing new glucose. It is also catabolic to muscle, activating the ubiquitin-proteasome system and preferentially wasting fast-twitch type {{2}} fibers.",
      "bank": [
        "gluconeogenesis",
        "II",
        "glycogenolysis",
        "I"
      ],
      "answers": {
        "1": "gluconeogenesis",
        "2": "II"
      },
      "points": 2
    },
    {
      "id": "b3-c6-multi-1",
      "chapter": 6,
      "type": "multi",
      "q": "Which statements about cortisol and metabolism are accurate per the chapter? Select all that apply.",
      "options": [
        "Cortisol antagonizes insulin, raising hepatic glucose output and reducing muscle and fat glucose uptake",
        "Chronic excess biases fat toward the visceral depot, especially alongside the high insulin of insulin resistance",
        "The stress-diabetes link runs partly through a flattened diurnal cortisol curve and partly through behavior",
        "Cortisol single-handedly causes obesity regardless of sleep, diet, and activity",
        "Local 11-beta-HSD1 activity means tissue cortisol exposure can be high even when blood cortisol is normal"
      ],
      "answers": [
        0,
        1,
        2,
        4
      ],
      "scoring": "all_or_nothing",
      "points": 1,
      "explanation": "Cortisol shifts the metabolic environment through insulin antagonism, visceral redistribution, a flattened curve, and local reactivation, but it does not cause obesity alone; it interacts with sleep, food, and movement. That absolute claim is false."
    },
    {
      "id": "b3-c7-mc-1",
      "chapter": 7,
      "type": "mc",
      "q": "Chronically stressed people often show higher circulating inflammatory markers even though cortisol, an anti-inflammatory hormone, is elevated. Which mechanism resolves this paradox?",
      "options": [
        "Chronic stress lowers cortisol to zero, removing its anti-inflammatory effect",
        "Glucocorticoid receptor (GR) resistance: under sustained high cortisol, immune cells stop hearing the anti-inflammatory signal, so inflammation rises even while cortisol stays high",
        "Inflammatory markers are unrelated to cortisol in any way",
        "Cortisol becomes a pro-inflammatory molecule when stress is chronic"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "The resolution is glucocorticoid receptor resistance. Prolonged high cortisol downregulates and desensitizes the receptor, so target immune cells respond less to the shut-off signal, and inflammation climbs despite an elevated cortisol level."
    },
    {
      "id": "b3-c7-tf-1",
      "chapter": 7,
      "type": "tf",
      "q": "In the Dhabhar and McEwen work, the same category of stressor enhanced a cell-mediated skin immune response when applied acutely but suppressed it when applied chronically, isolating duration as the variable that flips the sign of the effect.",
      "answer": true,
      "points": 1,
      "explanation": "Varying only the duration of the stress flipped the delayed-type hypersensitivity response from enhanced (acute) to suppressed (chronic), showing duration as the factor that reverses the sign."
    },
    {
      "id": "b3-c7-multi-1",
      "chapter": 7,
      "type": "multi",
      "q": "The glucocorticoid-resistance model predicts several documented outcomes of chronic stress. Which of the following are among them? Select all that apply.",
      "options": [
        "Raised susceptibility to infection such as the common cold",
        "Slowed wound healing",
        "Blunted responses to vaccination",
        "Permanent sterilization of the immune system",
        "Reactivation of latent viruses"
      ],
      "answers": [
        0,
        1,
        2,
        4
      ],
      "scoring": "all_or_nothing",
      "points": 1,
      "explanation": "Chronic stress raises infection susceptibility, slows wound healing, blunts vaccine responses, and reactivates latent viruses. It shifts susceptibility rather than destroying the immune system permanently, so that option is false."
    },
    {
      "id": "b3-c8-mc-1",
      "chapter": 8,
      "type": "mc",
      "q": "The chapter links chronic stress to low-grade inflammation by way of the gut. Which sequence best captures the mechanism?",
      "options": [
        "Chronic stress sterilizes the gut, which triggers inflammation",
        "Chronic stress loosens the intestinal barrier's tight junctions, letting lipopolysaccharide (LPS) translocate into circulation to produce metabolic endotoxemia and drive low-grade inflammation",
        "Chronic stress thickens the gut wall, trapping nutrients",
        "Chronic stress has no documented effect on the intestinal barrier"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "The intestinal barrier is a single cell layer sealed by tight junctions. Chronic stress loosens it, allowing LPS translocation and metabolic endotoxemia, which feeds systemic low-grade inflammation. Mast cells act as translators of neural stress signals into barrier changes."
    },
    {
      "id": "b3-c8-fill-1",
      "chapter": 8,
      "type": "fill",
      "q": "The brain-gut axis is bidirectional, but most of the traffic along the vagus nerve runs {{1}} from gut to brain, making the gut largely a sensor. A defined circuit from the paraventricular hypothalamus to the colon uses {{2}} to provide causal evidence that the brain can break the gut barrier.",
      "bank": [
        "up",
        "CRH",
        "down",
        "insulin"
      ],
      "answers": {
        "1": "up",
        "2": "CRH"
      },
      "points": 2
    },
    {
      "id": "b3-c9-mc-1",
      "chapter": 9,
      "type": "mc",
      "q": "Scheer and colleagues found circadian misalignment worsened glucose, insulin, leptin, and blood pressure even when total sleep was held constant. What does this establish?",
      "options": [
        "Only the amount of sleep matters, not its timing",
        "Timing itself is an independent axis of harm: misaligning the cortisol rhythm from the sleep-wake schedule damages metabolism apart from sleep loss",
        "Circadian misalignment has no measurable metabolic consequences",
        "Blood pressure is the only variable affected by misalignment"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "Because the derangements appeared independent of sleep loss, timing is its own axis of harm. Scrambling the cortisol rhythm relative to the sleep-wake schedule carries risk even when sleep duration is preserved."
    },
    {
      "id": "b3-c9-tf-1",
      "chapter": 9,
      "type": "tf",
      "q": "A low nighttime cortisol trough is permissive for slow-wave sleep, and because sleep loss impairs the axis's negative feedback and raises cortisol the following evening, poor sleep and a dysregulated cortisol rhythm form a self-reinforcing loop.",
      "answer": true,
      "points": 1,
      "explanation": "Centrally, CRH and cortisol act as alerting signals that suppress deep sleep, so a low trough permits it. Leproult showed sleep loss raises next-evening cortisol, and an elevated evening cortisol then worsens sleep, closing the loop."
    },
    {
      "id": "b3-c10-mc-1",
      "chapter": 10,
      "type": "mc",
      "q": "Chronic stress remodels three glucocorticoid-sensitive brain regions in different directions. Which description matches the chapter?",
      "options": [
        "All three regions (hippocampus, prefrontal cortex, amygdala) shrink uniformly",
        "Dendritic atrophy in the hippocampus and prefrontal cortex versus dendritic growth in the amygdala, producing impaired regulation and memory alongside heightened reactivity",
        "All three regions grow, improving mood and memory",
        "Only the amygdala is affected, and it atrophies"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "Prolonged glucocorticoid exposure drives dendritic atrophy in the hippocampus and prefrontal cortex while the amygdala shows dendritic growth, yielding weaker top-down regulation with a more reactive threat system."
    },
    {
      "id": "b3-c10-match-1",
      "chapter": 10,
      "type": "match",
      "q": "Match each brain receptor or region to its role in cortisol signaling, per the chapter.",
      "pairs": [
        {
          "left": "Mineralocorticoid receptor (MR)",
          "right": "High-affinity, occupied at basal cortisol, maintaining baseline tone"
        },
        {
          "left": "Glucocorticoid receptor (GR)",
          "right": "Lower-affinity, recruited as cortisol climbs during stress"
        },
        {
          "left": "Hippocampus",
          "right": "GR-dense sensor and inhibitory brake on the HPA axis, and a vulnerable target"
        },
        {
          "left": "Amygdala",
          "right": "Shows dendritic growth under chronic stress, raising threat reactivity"
        }
      ],
      "points": 4
    },
    {
      "id": "b3-c11-mc-1",
      "chapter": 11,
      "type": "mc",
      "q": "Overtrained athletes often have normal resting hormone levels. What is the more informative functional marker of overtraining syndrome?",
      "options": [
        "A single resting morning cortisol value",
        "The hypothalamic-pituitary-adrenal (HPA) axis's responsiveness under stimulation, which is blunted in overtraining syndrome and enhanced in healthy athletes",
        "Total daily calorie intake",
        "Resting heart rate alone"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "Because resting levels are often normal, the functional signal is how the axis responds to a stimulus. Healthy training enhances HPA responsiveness, whereas overtraining syndrome blunts it."
    },
    {
      "id": "b3-c11-fill-1",
      "chapter": 11,
      "type": "fill",
      "q": "Fitness is built during {{1}}, not during the session itself. The adrenal androgen {{2}}, made on the same steroidogenic pathway as cortisol, acts as an anabolic counterweight, and its ratio with cortisol indexes anabolic-catabolic balance, best read as a trend rather than a single verdict.",
      "bank": [
        "recovery",
        "DHEA",
        "the workout",
        "aldosterone"
      ],
      "answers": {
        "1": "recovery",
        "2": "DHEA"
      },
      "points": 2
    },
    {
      "id": "b3-c12-mc-1",
      "chapter": 12,
      "type": "mc",
      "q": "A learner argues their adrenal glands might be just a little fatigued, quietly under-producing cortisol for years. Using the feedback logic of the axis, why is this not a coherent state?",
      "options": [
        "A quietly under-producing cortex is the normal state of adrenal fatigue",
        "A cortex genuinely failing to meet demand would let cortisol fall, which releases the pituitary and drives adrenocorticotropic hormone (ACTH) up steeply, a loud, measurable disease signature, not a quiet coast",
        "The pituitary cannot detect low cortisol, so nothing would change",
        "Cortisol is stored in a reserve, so slow depletion is expected"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "The axis is a feedback loop, not a draining tank. Falling cortisol removes restraint on the pituitary, ACTH climbs sharply, and that rising ACTH is the fingerprint of real insufficiency. There is no stable resting state of quiet underproduction."
    },
    {
      "id": "b3-c12-tf-1",
      "chapter": 12,
      "type": "tf",
      "q": "Because estrogen-containing contraceptives raise cortisol-binding globulin (CBG), a person taking them can show a high total blood cortisol even though the biologically active free fraction is essentially unchanged.",
      "answer": true,
      "points": 1,
      "explanation": "Total cortisol sums bound and free pools, so it moves whenever binding proteins move. Estrogen raises CBG, inflating total cortisol while the free, active fraction stays about the same."
    },
    {
      "id": "b3-c12-free-1",
      "chapter": 12,
      "type": "free",
      "q": "Roland brings a direct-to-consumer saliva panel that a wellness site says proves adrenal fatigue, and he is considering an adaptogen protocol to refill his depleted glands. Using the systematic-review evidence, the on-demand biology of cortisol, and the contrast with genuine adrenal insufficiency, explain in an educational, role-neutral way why the adrenal-fatigue framing is unsupported, why it can be harmful even when it feels kind, and where your role stops.",
      "model": "Adrenal fatigue is not a recognized diagnosis. Cadegiani and Kater systematically reviewed 58 studies and found no substantiation, cataloguing unvalidated assays, single-sample comparisons that ignore the diurnal curve, and unwarranted causal claims, and no endocrinology society recognizes the label. The reservoir metaphor also contradicts the biology: cortisol is built on demand from cholesterol, not stored like insulin, so there is no tank to drain, and a cortex genuinely failing would let cortisol fall, releasing the pituitary and driving adrenocorticotropic hormone (ACTH) up steeply, a loud disease signature rather than a quiet coast. Real adrenal insufficiency is a distinct, dangerous, diagnosable condition confirmed by a short corticotropin stimulation test, not a resting saliva panel with invented reference ranges. The harm in the fatigue label is not cruelty; it often feels kind. The harm is that a comforting wrong answer can park Roland on an adaptogen protocol for a year while a real and treatable cause of his exhaustion, such as sleep apnea, hypothyroidism, iron deficiency, or depression, goes unnamed. His fatigue is real and deserves a proper workup. My role is to explain the mechanism and the evidence and to point him toward a qualified clinician who can order and interpret the right tests; it is never to diagnose, to endorse a reset, or to interpret his panel as a verdict.",
      "key_points": [
        "A systematic review of 58 studies found no support for adrenal fatigue and no society recognizes it",
        "Cortisol is made on demand, not stored, so a depletion or reservoir model is physiologically wrong",
        "A truly failing cortex drives ACTH up, a loud measurable signature, unlike the quiet-fatigue story",
        "Genuine adrenal insufficiency is real and confirmed by a corticotropin stimulation test, not a saliva panel",
        "The comforting wrong label can delay a real, treatable diagnosis; educate and refer rather than diagnose"
      ],
      "rubric": {
        "pass_threshold": 70,
        "points": [
          {
            "desc": "Cites the systematic-review evidence and the absence of any recognized diagnosis or validated test",
            "weight": 25
          },
          {
            "desc": "Uses on-demand cortisol biology and the ACTH-feedback signature to show why quiet gland exhaustion cannot exist on this axis",
            "weight": 25
          },
          {
            "desc": "Distinguishes the myth from genuine adrenal insufficiency and its stimulation-test workup",
            "weight": 20
          },
          {
            "desc": "Explains the real harm (delaying a treatable cause) and keeps a role-neutral educate-and-refer boundary",
            "weight": 30
          }
        ]
      },
      "points": 5,
      "appeal": true
    },
    {
      "id": "b3-c13-mc-1",
      "chapter": 13,
      "type": "mc",
      "q": "The chapter reframes stress management as recovery management. Which filter does it offer for judging any proposed intervention?",
      "options": [
        "Whether the intervention lowers cortisol as much as possible",
        "Whether the intervention improves recovery between activations, restores the healthy diurnal rhythm, or reduces the frequency and duration of activations",
        "Whether the intervention is marketed as natural",
        "Whether the intervention prevents the stress response from ever firing"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "Every evidence-based strategy earns its place by improving recovery, restoring the diurnal rhythm, or reducing how often and how long the axis is activated. An intervention that prevents activation entirely is dangerous, not healthy."
    },
    {
      "id": "b3-c13-tf-1",
      "chapter": 13,
      "type": "tf",
      "q": "The meta-analytic evidence on mindfulness and relaxation supports the claim that lowering cortisol as much as possible is the goal, since any reduction in cortisol is a health win.",
      "answer": false,
      "points": 1,
      "explanation": "The finding (Rogerson et al., 2024) is that these practices shift a dysregulated pattern back toward a healthy one, with the cortisol awakening response the measure that moves most. Blunting a healthy morning rise would be a harm. The target is a restored rhythm, not a smaller number."
    },
    {
      "id": "b3-c13-multi-1",
      "chapter": 13,
      "type": "multi",
      "q": "Which statements about evidence-based stress management are accurate per the chapter? Select all that apply.",
      "options": [
        "Consistent sleep and wake timing restores the diurnal rhythm by anchoring the circadian clock",
        "Adequately-recovered exercise is associated with a steeper, healthier diurnal slope over time, though the acute bout raises cortisol",
        "Mindfulness and relaxation have moderate, replicated effects, with the cortisol awakening response more responsive than the diurnal slope",
        "A cortisol blocker or detox is the shortcut with the strongest evidence base",
        "Perceived control and social support are genuine neuroendocrine modulators of the stress response"
      ],
      "answers": [
        0,
        1,
        2,
        4
      ],
      "scoring": "all_or_nothing",
      "points": 1,
      "explanation": "Sleep timing, adequately-recovered exercise, mindfulness and relaxation, and social support and control are the evidence-supported levers. There is no cortisol blocker or detox shortcut; a true blocker would be harmful, so that option is false."
    }
  ]
};
