/* Gemini Education: B3 (Cortisol & the Stress-Hormone System) FINAL EXAM, interim live version.
   Current exam.html renders MC and free-response only, so this ships 20 MC + 6 true/false
   (as 2-option MC), drawing 20 per attempt, options shuffled, 80% to pass. 26 in the pool.
   Full bank (matching, word-bank, multi-select, write-ins) is in b3-cortisol.full.js. */
window.GEM_EXAM = {
  slug: "b3-cortisol",
  title: "Cortisol & the Stress-Hormone System",
  contact_hours: 13, ceu_value: 1.3, pass_threshold: 80, draw_mc: 20, placeholder: false,
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
      "explanation": "Cortisol mobilizes glucose, restrains inflammation, supports blood pressure, and drives the morning waking surge. Reduce it toward zero and the picture is untreated adrenal insufficiency, a genuine emergency, not calm health. The target is an intact pattern, never a smaller number for its own sake."
    },
    {
      "id": "b3-c1-tf-1",
      "chapter": 1,
      "type": "mc",
      "q": "Because a hormone's meaning as a signal lives in its pattern, two people with an identical 24-hour total cortisol output can be in very different states of health, one with a robust morning peak and deep nighttime trough and one running flat around the clock.",
      "options": [
        "True",
        "False"
      ],
      "answer": 0,
      "points": 1,
      "explanation": "Cortisol is information, judged by its shape rather than its total. The same daily area under the curve can hide a healthy peak-and-trough rhythm or a flattened one, and only the shaped rhythm carries a usable schedule to the tissues."
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
      "explanation": "Unlike peptide hormones such as adrenocorticotropic hormone (ACTH) that can be pre-made and stored, cortisol is built to order from cholesterol every time it is needed, so there is no warehouse of finished hormone to run dry. The adrenal medulla stores catecholamines, not cortisol."
    },
    {
      "id": "b3-c2-mc-2",
      "chapter": 2,
      "type": "mc",
      "q": "The zona glomerulosa of the adrenal cortex cannot make cortisol at all and instead specializes in aldosterone. According to the chapter, what accounts for this difference between adjacent floors fed by the same cholesterol?",
      "options": [
        "The glomerulosa receives no blood supply, so it cannot build steroids",
        "The glomerulosa lacks the enzyme P450c17 (CYP17), so its chemistry is routed toward aldosterone rather than cortisol",
        "The glomerulosa is the only zone controlled by ACTH, while the others are not",
        "Aldosterone and cortisol are the same molecule measured in different zones"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "Zonal identity is enzymatic identity. Lacking P450c17, the glomerulosa cannot make cortisol and instead produces aldosterone, and it answers mainly to the renin-angiotensin system and potassium rather than to ACTH."
    },
    {
      "id": "b3-c3-mc-1",
      "chapter": 3,
      "type": "mc",
      "q": "A person draws a single blood cortisol sample one morning, sees a value their kit flags as high, and concludes they are heading for burnout. Grounded in the chapter, what is the strongest reason this conclusion is premature?",
      "options": [
        "Morning cortisol is meaningless because cortisol does not vary across the day",
        "A high value actually proves the opposite, that cortisol is low",
        "Cortisol swings roughly tenfold from its morning peak to its midnight trough, so a value without a timestamp, read against the correct time-of-day band, is uninterpretable, and morning is when a healthy curve is supposed to peak",
        "Blood can never measure cortisol, so the number is simply an artifact"
      ],
      "answer": 2,
      "points": 1,
      "explanation": "The diurnal rhythm peaks around 08:30 and troughs near midnight, a roughly tenfold swing. A robust morning value is the expected, healthy shape, and a single number without its draw time and the correct band for that hour cannot show whether a rhythm is healthy or disordered."
    },
    {
      "id": "b3-c3-mc-2",
      "chapter": 3,
      "type": "mc",
      "q": "The cortisol awakening response (CAR) tends to be larger before a demanding Monday than before a relaxed Sunday. Which framing best explains this, per the chapter?",
      "options": [
        "The CAR is purely a fixed circadian output that ignores the day ahead",
        "The CAR follows a dual-control model, part circadian clock and part anticipatory forecast, so it scales with the demands the brain expects the coming day to require",
        "The CAR is random morning noise with no relationship to anything",
        "A larger CAR always signals disease and impending burnout"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "The CAR is a distinct 50 to 75 percent rise in the roughly 30 minutes after waking, jointly driven by an endogenous circadian process and an anticipatory neurocognitive signal. It is enhanced by anticipated workload and blunted in burnout and exhaustion."
    },
    {
      "id": "b3-c4-mc-1",
      "chapter": 4,
      "type": "mc",
      "q": "Right after a near miss in traffic, a person's heart is pounding within seconds, yet they still feel shaky and buzzed ten minutes later. Which explanation fits the two-arm design of the acute stress response?",
      "options": [
        "Both effects come from cortisol, which acts within milliseconds",
        "The instant pounding is the fast sympathetic-adrenal-medullary (SAM) axis releasing adrenaline in seconds, while the lingering buzz reflects cortisol from the slower hypothalamic-pituitary-adrenal (HPA) axis still climbing toward its 15-to-30-minute peak",
        "Adrenaline and cortisol both peak instantly, so the lingering feeling must be a malfunction",
        "The shakiness proves the stress response failed to shut off and has become pathological"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "The SAM axis is a fast neural route releasing catecholamines within seconds; the HPA axis is a slower hormonal cascade whose cortisol peaks about 15 to 30 minutes in. Feeling the fast arm clear while the slow arm still rises is the staggered timing the design produces, not a fault."
    },
    {
      "id": "b3-c4-mc-2",
      "chapter": 4,
      "type": "mc",
      "q": "During a sprint, cortisol makes fat and idle muscle transiently resistant to insulin. Why does the chapter call this a stroke of genius acutely, yet a road to disease when sustained?",
      "options": [
        "The mechanism changes chemically when it lasts longer",
        "Transient insulin resistance walls off glucose for the muscle and brain that decide survival, but the identical mechanism held for weeks and months becomes the insulin resistance of metabolic disease; only the duration changed",
        "Insulin resistance is always harmful and is never adaptive, even briefly",
        "Cortisol lowers glucose during a sprint, which is why it helps"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "Sparing glucose for the organs that decide a chase is adaptive over ninety seconds. The same insulin resistance sustained over ninety days is a well-trodden road toward metabolic disease. The mechanism does not change, only how long the signal stays switched on."
    },
    {
      "id": "b3-c4-tf-1",
      "chapter": 4,
      "type": "mc",
      "q": "Acute short-term stress lasting minutes to hours suppresses immune function, which is why any stressor, however brief, leaves a person more vulnerable to infection.",
      "options": [
        "True",
        "False"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "Dhabhar showed short-term stress enhances immune function by redistributing leukocytes to the body's frontiers ahead of a likely wound. Only chronic, sustained stress suppresses and derails immunity, so the two timescales can have opposite effects on the same system."
    },
    {
      "id": "b3-c5-mc-1",
      "chapter": 5,
      "type": "mc",
      "q": "The chapter's four modes of allostatic overload include a counterintuitive fourth mode in which the problem is too little cortisol activity. Why can an inadequate cortisol response be harmful?",
      "options": [
        "Low cortisol always means the adrenal glands are exhausted",
        "Because cortisol normally restrains inflammation, an inadequate or flattened response releases that brake and lets inflammation run unchecked",
        "Low cortisol raises blood glucose to dangerous levels",
        "Inadequate cortisol has no consequences, since less cortisol is always safer"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "The four modes are repeated hits, failure to habituate, failure to shut off, and inadequate response. The fourth is counterintuitive: because one of cortisol's jobs is to restrain inflammation, too little of its signal removes that restraint and lets inflammatory processes escape regulation."
    },
    {
      "id": "b3-c5-mc-2",
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
      "explanation": "Allostatic load is a multi-system index; the signal is in the accumulation across systems, not any one value. A flattened diurnal slope is a robust biomarker of chronic stress, and the pathology is dysregulation (downregulated receptors, blunted feedback), not glands that have run out."
    },
    {
      "id": "b3-c6-mc-1",
      "chapter": 6,
      "type": "mc",
      "q": "A supplement promises to measure and block your cortisol to melt visceral fat. Using the chapter's metabolism mechanisms, what is a decisive problem with the measure half of that claim?",
      "options": [
        "Blood cortisol is impossible to measure at all",
        "The enzyme 11-beta-HSD1 regenerates active cortisol locally inside adipose and liver tissue, so tissue glucocorticoid exposure can be high even when blood cortisol is normal and is invisible to any single blood or saliva number",
        "Cortisol has no effect on metabolism, so measuring it is pointless",
        "Visceral fat is caused entirely by cortisol acting alone, so the measurement is the only thing that matters"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "11-beta-HSD1 in fat and liver regenerates active cortisol from cortisone, so the biologically relevant exposure is generated partly within tissues and cannot be captured by a systemic number. Visceral fat and insulin resistance also emerge from cortisol dynamics interacting with sleep, energy balance, and activity, not from cortisol alone."
    },
    {
      "id": "b3-c6-mc-2",
      "chapter": 6,
      "type": "mc",
      "q": "The chapter describes a lipolysis paradox for cortisol. What is it?",
      "options": [
        "Cortisol builds fat acutely but burns it chronically",
        "Cortisol is acutely fat-mobilizing, yet chronic excess drives fat redistribution toward visceral depots, especially alongside the elevated insulin of insulin resistance",
        "Cortisol has no effect on fat in either the short or long term",
        "Cortisol converts fat directly into muscle over time"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "Acutely cortisol frees fatty acids as fuel, but chronic excess, in the presence of the high insulin that accompanies insulin resistance, biases fat toward the visceral compartment. The direction of the effect depends on duration and hormonal context."
    },
    {
      "id": "b3-c7-mc-1",
      "chapter": 7,
      "type": "mc",
      "q": "Chronically stressed people often show higher circulating inflammatory markers even though cortisol, an anti-inflammatory hormone, is elevated. Which mechanism resolves this paradox in the chapter?",
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
      "type": "mc",
      "q": "In the Dhabhar and McEwen work, the same category of stressor enhanced a cell-mediated skin immune response when applied acutely but suppressed it when applied chronically, with the duration of the stress being the variable that flipped the sign of the effect.",
      "options": [
        "True",
        "False"
      ],
      "answer": 0,
      "points": 1,
      "explanation": "Varying only the duration of the stress flipped the delayed-type hypersensitivity response from enhanced (acute) to suppressed (chronic), isolating duration as the factor that reverses the sign of the effect."
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
      "explanation": "The intestinal barrier is a single cell layer sealed by tight junctions. Chronic stress loosens it, allowing LPS translocation and metabolic endotoxemia, which feeds the systemic low-grade inflammation seen elsewhere in the course. Mast cells act as translators of neural stress signals into barrier changes."
    },
    {
      "id": "b3-c9-mc-1",
      "chapter": 9,
      "type": "mc",
      "q": "Scheer and colleagues found that circadian misalignment, as in shift work, worsened glucose, insulin, leptin, and blood pressure even when total sleep was held constant. What does this establish, per the chapter?",
      "options": [
        "Only the amount of sleep matters, not its timing",
        "Timing itself is an independent axis of harm: misaligning the cortisol rhythm from the sleep-wake schedule damages metabolism apart from sleep loss",
        "Circadian misalignment has no measurable metabolic consequences",
        "Blood pressure is the only variable affected by misalignment"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "Because the metabolic and cardiovascular derangements appeared independent of sleep loss, timing is its own axis of harm. Reversing or scrambling the cortisol rhythm relative to the sleep-wake schedule carries risk even when sleep duration is preserved."
    },
    {
      "id": "b3-c9-tf-1",
      "chapter": 9,
      "type": "mc",
      "q": "Losing sleep impairs the negative feedback of the hypothalamic-pituitary-adrenal (HPA) axis and is associated with elevated cortisol the following evening, one arrow in a self-reinforcing loop between poor sleep and a dysregulated axis.",
      "options": [
        "True",
        "False"
      ],
      "answer": 0,
      "points": 1,
      "explanation": "Leproult and colleagues found sleep loss elevates cortisol the next evening. Because a low evening cortisol is needed for the smooth descent into deep sleep, elevated evening cortisol worsens sleep further, closing a self-reinforcing loop."
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
      "explanation": "Prolonged glucocorticoid exposure drives dendritic atrophy in the hippocampus and prefrontal cortex while the amygdala shows dendritic growth. The net effect is weaker top-down regulation and memory with a more reactive threat system."
    },
    {
      "id": "b3-c10-mc-2",
      "chapter": 10,
      "type": "mc",
      "q": "The hippocampus both senses cortisol and acts as an inhibitory brake on the hypothalamic-pituitary-adrenal (HPA) axis. Why does the chapter call chronic cortisol exposure here a self-reinforcing loop?",
      "options": [
        "Because the hippocampus produces cortisol directly",
        "Because chronic cortisol degrades the hippocampus, which weakens its braking of the axis, which raises cortisol further, damaging a sensor that is also a target",
        "Because the hippocampus is insensitive to cortisol",
        "Because a damaged hippocampus lowers cortisol too far"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "The hippocampus is dense in glucocorticoid receptors, so it is both an excellent cortisol sensor and a vulnerable target. As chronic cortisol degrades it, its inhibitory brake on the HPA axis weakens, loosening feedback and raising cortisol further, a loop in which the sensor is also a casualty."
    },
    {
      "id": "b3-c11-mc-1",
      "chapter": 11,
      "type": "mc",
      "q": "The chapter notes that overtrained athletes often have normal resting hormone levels. What is described as the more informative functional marker of overtraining syndrome?",
      "options": [
        "A single resting morning cortisol value",
        "The hypothalamic-pituitary-adrenal (HPA) axis's responsiveness under stimulation, which is blunted in overtraining syndrome and enhanced in healthy athletes",
        "Total daily calorie intake",
        "Resting heart rate alone"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "Because resting levels are often normal, the functional signal is how the axis responds to a stimulus. Healthy training enhances HPA responsiveness, whereas overtraining syndrome blunts it, which is why a single resting value is a poor readout."
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
      "explanation": "The axis is a feedback loop, not a draining tank. If the cortex could not keep up, falling cortisol would remove restraint on the pituitary, ACTH would climb sharply, and that rising ACTH is the fingerprint of real insufficiency. There is no stable resting state of quiet underproduction."
    },
    {
      "id": "b3-c12-tf-1",
      "chapter": 12,
      "type": "mc",
      "q": "Because estrogen-containing contraceptives raise cortisol-binding globulin (CBG), a person taking them can show a high total blood cortisol even though the biologically active free fraction is essentially unchanged.",
      "options": [
        "True",
        "False"
      ],
      "answer": 0,
      "points": 1,
      "explanation": "Total cortisol sums the bound and free pools, so it moves whenever binding proteins move. Estrogen raises CBG, inflating total cortisol while the free, active fraction stays about the same, which is one reason a total value read without context can mislead."
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
      "explanation": "Every evidence-based strategy earns its place by improving recovery, restoring the diurnal rhythm, or reducing how often and how long the axis is activated. An intervention that cannot be located on that map deserves skepticism, and one that prevents activation entirely is dangerous, not healthy."
    },
    {
      "id": "b3-c13-mc-2",
      "chapter": 13,
      "type": "mc",
      "q": "Worried that workouts were spiking cortisol, a person cut their training back. Why does the chapter call this backward for someone seeking a healthier cortisol rhythm?",
      "options": [
        "Because exercise lowers cortisol instantly, so more is always better",
        "Because habitual, adequately-recovered activity is associated with a steeper, healthier diurnal slope over time; the acute exercise rise is the stimulus for adaptation, not evidence of harm",
        "Because cortisol has no relationship to exercise",
        "Because the only healthy option is high-intensity training every day"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "The evidence does not say exercise lowers cortisol; the acute bout raises it. Instead, regular activity followed by real recovery steepens the diurnal slope over months. The transient rise is the adaptive stimulus, so cutting training removes the stimulus rather than avoiding a toxin."
    },
    {
      "id": "b3-c13-tf-1",
      "chapter": 13,
      "type": "mc",
      "q": "The meta-analytic evidence on mindfulness and relaxation supports the claim that lowering cortisol as much as possible is the goal, since any reduction in cortisol is a health win.",
      "options": [
        "True",
        "False"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "The finding (Rogerson et al., 2024) is that these practices shift a dysregulated pattern back toward a healthy one, with the cortisol awakening response (CAR) the measure that moves most. Blunting a healthy morning rise would be a harm. The target is a restored rhythm, not a smaller number for its own sake."
    }
  ]
};
