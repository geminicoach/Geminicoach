/* Gemini Education: B2 (Endocrine / Hormones 101) FINAL EXAM, interim live version.
   Current exam.html renders MC and free-response only, so this ships 18 MC + 6 true/false
   (as 2-option MC), drawing 20 per attempt, options shuffled, 80% to pass. 24 in the pool.
   Full bank (matching, word-bank, multi-select, write-ins; 43 items) is in b2-endocrine-hormones.full.js. */
window.GEM_EXAM = {
  slug: "b2-endocrine-hormones",
  title: "Endocrine System / Hormones 101",
  contact_hours: 12, ceu_value: 1.2, pass_threshold: 80, draw_mc: 20, placeholder: false,
  questions: [
    {
      "id": "b2-c1-mc-1",
      "chapter": 1,
      "type": "mc",
      "q": "A hormone is released into the blood and floods every tissue at the same concentration, yet only the liver and skeletal muscle change their behavior in response. According to the chapter, what best explains this selective effect?",
      "options": [
        "The hormone was chemically addressed to those two tissues before release",
        "Only the liver and muscle carry the matching receptor, so specificity lives in the receiver",
        "The hormone is too large to physically reach other tissues",
        "Other tissues cleared the hormone before it could arrive"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "A hormone is an unaddressed broadcast; the cell with the matching receptor decides whether to respond."
    },
    {
      "id": "b2-c2-mc-1",
      "chapter": 2,
      "type": "mc",
      "q": "A clinician finds a person has low thyroid hormone output together with a low TSH. Using the two-number logic of the axis, where does this pattern localize the problem?",
      "options": [
        "The thyroid gland itself (primary problem)",
        "The target tissue receptors for thyroid hormone",
        "The pituitary or hypothalamus (secondary or tertiary)",
        "The carrier proteins transporting thyroid hormone"
      ],
      "answer": 2,
      "points": 1,
      "explanation": "Low output with a LOW upstream signal points up the chain: the command floor is failing, not the gland."
    },
    {
      "id": "b2-c3-mc-1",
      "chapter": 3,
      "type": "mc",
      "q": "A person has insulin resistance in the classic type 2 pattern. Which description best captures their insulin state?",
      "options": [
        "Insulin is typically low because the pancreas has run out of supply",
        "Insulin is usually normal or high while cells respond weakly, so the signal must shout to move the same glucose",
        "Insulin binding to the receptor is completely blocked",
        "Insulin is normal but glucagon has been eliminated"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "Resistance is not silence or deficiency; it is usually high insulin with deaf cells, so the signal has to shout to do the same work."
    },
    {
      "id": "b2-c3-mc-2",
      "chapter": 3,
      "type": "mc",
      "q": "Why does a brisk walk after a meal lower blood glucose even in a person whose insulin signaling relay is impaired?",
      "options": [
        "Walking raises circulating insulin enough to overcome the resistance",
        "Walking shrinks the liver's glycogen stores directly",
        "Exercise converts glucagon into insulin",
        "Muscle contraction recruits GLUT4 via an AMPK pathway that bypasses the insulin signal entirely"
      ],
      "answer": 3,
      "points": 1,
      "explanation": "Contraction opens a separate door: AMPK-driven GLUT4 recruitment needs no insulin, so it routes around the jammed relay."
    },
    {
      "id": "b2-c4-mc-1",
      "chapter": 4,
      "type": "mc",
      "q": "A clinician notes that under-eating and illness can lower a person's active T3 while TSH and T4 stay essentially unchanged. Which mechanism from the chapter best explains this?",
      "options": [
        "Tissue deiodinase activity is a tunable dial, so conversion of T4 to T3 can fall independently of the upper axis",
        "The thyroid stops secreting T4 during illness",
        "The pituitary permanently loses the ability to sense thyroid hormone",
        "Iodine is destroyed by the illness, halting all hormone production"
      ],
      "answer": 0,
      "points": 1,
      "explanation": "Conversion is a tunable dial: deiodinases can shift T4 to T3 output (or toward inactive reverse T3) while TSH and T4 stay put."
    },
    {
      "id": "b2-c4-mc-2",
      "chapter": 4,
      "type": "mc",
      "q": "Thyroid hormone is chemically an amine, yet the chapter says it behaves like a steroid. What is the key reason for that classification of its action?",
      "options": [
        "It circulates freely without any carrier proteins",
        "It acts within minutes through surface receptors and second messengers",
        "T3 binds nuclear receptors and changes which genes are read, so effects build over days and weeks",
        "It is stored in vesicles and released by nerve endings"
      ],
      "answer": 2,
      "points": 1,
      "explanation": "Like a steroid, T3 enters the cell and binds nuclear receptors (TR-alpha, TR-beta) to change gene expression, giving slow, durable effects."
    },
    {
      "id": "b2-c5-mc-1",
      "chapter": 5,
      "type": "mc",
      "q": "A person brings a four-point salivary cortisol curve from a wellness lab and says it proves he has adrenal fatigue and needs supplements to refill his depleted glands. Which response is best grounded in the chapter?",
      "options": [
        "The curve confirms the adrenal glands are running empty, so a rest-and-refill protocol is appropriate.",
        "Adrenal fatigue is not a recognized diagnosis; that curve mostly captures normal diurnal rhythm noise, and genuine adrenal disease is diagnosed by a clinician with tests such as an ACTH stimulation test.",
        "The HPA axis is a reservoir that empties under chronic stress, so the low points prove the tank is drained.",
        "A DHEA capsule is a benign vitamin that will safely top up the depleted reserve."
      ],
      "answer": 1,
      "points": 1,
      "explanation": "Adrenal fatigue failed a systematic review and is not recognized by any endocrinology society. The HPA axis is a self-correcting negative-feedback loop, not a reservoir that empties. A wellness saliva curve captures rhythm noise, not a diagnosis; real disease (Addison's, Cushing's) is confirmed by clinician-ordered endocrine testing. DHEA is a hormone precursor, not a benign vitamin."
    },
    {
      "id": "b2-c6-mc-1",
      "chapter": 6,
      "type": "mc",
      "q": "A hormone therapy delivers GnRH to the pituitary as a flat, continuous signal rather than in pulses. Based on how the HPG axis works, what is the expected effect on LH and FSH output?",
      "options": [
        "It suppresses the axis, because pulse frequency and amplitude, not a flat continuous signal, drive gonadotropin release.",
        "It steadily amplifies LH and FSH output.",
        "It speeds aromatase conversion of testosterone into estradiol.",
        "It has no effect, because GnRH acts directly on the gonads."
      ],
      "answer": 0,
      "points": 1,
      "explanation": "GnRH is normally released in pulses set by upstream kisspeptin (KNDy) neurons, and pulse frequency and amplitude shape the whole axis. A flat, continuous GnRH signal suppresses the pituitary rather than stimulating it."
    },
    {
      "id": "b2-c6-mc-2",
      "chapter": 6,
      "type": "mc",
      "q": "An educator sees only a male person's total testosterone value and wonders what it tells him about estradiol. Which statement is best grounded in the chapter?",
      "options": [
        "Estradiol is a female-only hormone and is irrelevant to male physiology.",
        "Men synthesize estradiol directly in the pituitary, independent of testosterone.",
        "Estradiol in men is aromatized from testosterone and is essential for bone, brain, and fertility, so a testosterone value alone does not reveal how much becomes estradiol.",
        "Blocking estradiol reliably improves outcomes in men, so its level does not matter."
      ],
      "answer": 2,
      "points": 1,
      "explanation": "Estradiol is the same molecule in both sexes and is essential in males for bone, brain, metabolism, mood, and fertility. It is made from testosterone by aromatase, largely in peripheral tissue, so a testosterone number does not reveal how much is aromatized or how well tissue responds."
    },
    {
      "id": "b2-c7-mc-1",
      "chapter": 7,
      "type": "mc",
      "q": "How is estradiol's principal action on the adult skeleton best described?",
      "options": [
        "It directly builds new bone matrix as the primary osteoblast stimulus.",
        "It restrains resorption by shortening osteoclast lifespan and dampening resorptive cytokines, keeping breakdown matched to building.",
        "It raises bone density only by increasing calcium absorption in the gut.",
        "It plays essentially no role in the male skeleton."
      ],
      "answer": 1,
      "points": 1,
      "explanation": "Estradiol is mostly a break-down-less signal: it shortens osteoclast lifespan and dampens resorptive cytokines. Lose estradiol and a resorption-formation gap opens, so breakdown outruns building. This matters in both sexes, since men rely on estradiol aromatized locally from testosterone."
    },
    {
      "id": "b2-c8-mc-1",
      "chapter": 8,
      "type": "mc",
      "q": "Which description of ghrelin is most accurate?",
      "options": [
        "A satiety hormone released by fat cells in proportion to fat mass.",
        "A slow, smoothed signal that reports energy stores over a scale of weeks.",
        "The only known circulating hormone that raises appetite, rising 1 to 2 hours before habitual meals.",
        "A pancreatic hormone whose main job is to lower blood glucose."
      ],
      "answer": 2,
      "points": 1,
      "explanation": "Ghrelin is made mainly in the stomach lining and is the only known orexigenic (appetite-raising) circulating hormone. It rises 1 to 2 hours before habitual meals in a pre-prandial surge, peaks near mealtime, and falls when nutrients arrive. Leptin, by contrast, is the slow adipose signal of stored fuel."
    },
    {
      "id": "b2-c8-mc-2",
      "chapter": 8,
      "type": "mc",
      "q": "A year after successful diet-induced weight loss, a person reports persistent, elevated hunger and blames a lack of willpower. Which explanation is best grounded in the chapter?",
      "options": [
        "The person simply lost motivation, and the hunger has no physiological basis.",
        "A leptin supplement would have corrected the hunger by refilling a deficiency.",
        "The thyroid began overproducing hormone, which raised appetite.",
        "Leptin stayed low and ghrelin stayed elevated long after the loss, reflecting the body's asymmetric defense of its setpoint against fat loss."
      ],
      "answer": 3,
      "points": 1,
      "explanation": "In Sumithran et al. (2011), a year after diet-induced loss leptin was still low, ghrelin still high, and hunger still elevated. The setpoint is defended asymmetrically, harder against loss than against gain. This is the biology behind weight regain, not lost motivation, and injected leptin barely helps ordinary obesity."
    },
    {
      "id": "b2-c9-mc-1",
      "chapter": 9,
      "type": "mc",
      "q": "A supplement seller points to a single random morning blood draw showing a low GH value and calls it proof of growth-hormone deficiency. What is the strongest reason this reading is nearly uninformative?",
      "options": [
        "GH is secreted in short bursts and cleared within minutes, so one random value tells you almost nothing; deficiency is established by dynamic testing interpreted by a clinician",
        "GH is stable across the day, so any single draw is definitive and the seller is correct",
        "Only IGF-1 matters, so the GH value should simply be ignored in every situation",
        "A low value always means the pituitary has stopped working and treatment is required"
      ],
      "answer": 0,
      "points": 1,
      "explanation": "GH is pulsatile and minutes-lived, so a lone draw cannot honestly capture it. A pulsatile hormone is assessed with dynamic testing by qualified clinicians, not one number sold as a verdict."
    },
    {
      "id": "b2-c9-mc-2",
      "chapter": 9,
      "type": "mc",
      "q": "Someone cites the 1990 study as proof that growth hormone is a safe anti-aging therapy for healthy older adults. What is the most accurate skeptical response?",
      "options": [
        "The launch study was tiny and measured body composition rather than health outcomes; later controlled trials show small composition change, no proven strength or function gain, and real adverse effects, so GH is not recommended for anti-aging",
        "The study enrolled thousands and proved strength gains, so the claim is well supported",
        "GH reliably reverses aging because reduced GH signaling shortens lifespan in animals",
        "The study proves GH cures age-related disease, so wider use is justified"
      ],
      "answer": 0,
      "points": 1,
      "explanation": "The founding study had 12 men and tracked body composition, not health. Controlled trials in healthy elderly show modest composition change, no proven function gain, and adverse effects such as swelling, joint pain, and glucose trouble. More GH is not simply younger; reduced GH signaling even extends lifespan in mice."
    },
    {
      "id": "b2-c10-mc-1",
      "chapter": 10,
      "type": "mc",
      "q": "A clinician-diagnosed person with chronically elevated cortisol has normal fasting glucose but clearly elevated fasting insulin. Which cross-talk route best explains this pairing?",
      "options": [
        "Cortisol directly increased pancreatic insulin production as its primary action, unrelated to the tissues",
        "Cortisol lowered insulin sensitivity in muscle, liver, and fat, so the pancreas compensates with more insulin to hold glucose normal",
        "Cortisol raised SHBG, which trapped insulin and forced the level upward",
        "Cortisol converted directly into insulin in the liver, inflating the measured value"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "This is the sensitivity route, the workhorse of the chapter. Cortisol reduces insulin sensitivity; the pancreas answers with more insulin, so glucose can look normal while the effort behind it rises. The level hides the changed effect."
    },
    {
      "id": "b2-c10-mc-2",
      "chapter": 10,
      "type": "mc",
      "q": "Two men have identical total testosterone, but one is insulin resistant with low SHBG and the other is insulin sensitive with higher SHBG. Why can their free, active testosterone differ?",
      "options": [
        "Total testosterone always equals free testosterone, so no difference is possible",
        "Insulin raises SHBG, so the insulin-resistant man must have more bound hormone",
        "SHBG binds nothing, so the split is fixed regardless of insulin status",
        "Insulin suppresses liver SHBG, tilting the split toward the free fraction; with less SHBG, more of the same total is free and able to reach receptors"
      ],
      "answer": 3,
      "points": 1,
      "explanation": "Total counts every molecule, most of it bound and inactive; only the free portion acts. Insulin lowers SHBG, shifting the split toward free hormone, which is why SHBG tracks insulin sensitivity better than total testosterone does. Same total, different usable amount."
    },
    {
      "id": "b2-c11-mc-1",
      "chapter": 11,
      "type": "mc",
      "q": "A person sleeping about five hours a night reports sudden ravenous appetite despite eating enough calories. Which sleep readout best accounts for this?",
      "options": [
        "Short sleep raised testosterone, which drove hunger upward",
        "Short sleep improved insulin sensitivity, which increased appetite",
        "Short sleep lowered leptin and raised ghrelin, producing a false energy alarm",
        "Short sleep flattened the GH pulse, which is the direct cause of hunger"
      ],
      "answer": 2,
      "points": 1,
      "explanation": "Short sleep lowers leptin (roughly 15.5%) and raises ghrelin (roughly 14.9%) independent of BMI, a false energy alarm from one behavior. Appetite is one of several readouts that move when sleep is cut."
    },
    {
      "id": "b2-c12-mc-1",
      "chapter": 12,
      "type": "mc",
      "q": "During an acute illness a person's thyroid setpoint drops and outputs fall, then recover as they heal. Which concept best frames this as adaptation rather than disease?",
      "options": [
        "Homeostasis, because the body defended a single fixed number throughout",
        "Negative feedback failure, because the axis lost its ability to shut itself down",
        "Cross-talk, because one axis physically replaced another",
        "Allostasis, because the system achieves stability through change by moving the target to fit the situation"
      ],
      "answer": 3,
      "points": 1,
      "explanation": "Allostasis is stability through change: a lower thyroid setpoint during illness is an intentional, temporary adjustment, not a broken gland. Reading it as disease misses that setpoints move on purpose."
    },
    {
      "id": "b2-c1-tf-1",
      "chapter": 1,
      "type": "mc",
      "q": "A clinician measures a person's total cortisol as normal, but the person still shows signs consistent with low hormone activity; because only the free fraction reaches receptors, a normal total value can still mislead when carrier-protein binding is high.",
      "options": [
        "True",
        "False"
      ],
      "answer": 0,
      "points": 1,
      "explanation": "Only the free (unbound) fraction acts at receptors, so a total measurement can misrepresent the biologically active amount."
    },
    {
      "id": "b2-c4-tf-1",
      "chapter": 4,
      "type": "mc",
      "q": "Because the TSH-to-hormone relationship is steep, TSH functions as a sensitive early gauge, meaning a small drop in thyroid hormone can produce a comparatively large rise in TSH.",
      "options": [
        "True",
        "False"
      ],
      "answer": 0,
      "points": 1,
      "explanation": "The steep curve makes TSH move sharply for small hormone changes, so it is an early, sensitive indicator of thyroid status."
    },
    {
      "id": "b2-c5-tf-1",
      "chapter": 5,
      "type": "mc",
      "q": "The SAM axis releases adrenaline directly from the adrenal medulla into the blood without routing through the pituitary, which is part of why it acts within seconds while the HPA axis takes minutes to hours.",
      "options": [
        "True",
        "False"
      ],
      "answer": 0,
      "points": 1,
      "explanation": "The fast SAM axis runs nerve to adrenal medulla to adrenaline, skipping the pituitary, and adrenaline binds surface receptors to flip switches already installed (no gene changes). The slow HPA axis runs hypothalamus to pituitary to cortex and cortisol changes gene transcription, so its effect builds and lingers."
    },
    {
      "id": "b2-c8-tf-1",
      "chapter": 8,
      "type": "mc",
      "q": "Because leptin levels are already high in obesity, taking a leptin supplement is an effective treatment for common obesity.",
      "options": [
        "True",
        "False"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "The problem in common obesity is leptin resistance, not deficiency, so adding more leptin to an already loud but unheard signal does little. Injected leptin barely helps ordinary obesity, and oral leptin is a protein that gets digested. It works only where leptin is truly absent, as in congenital leptin deficiency."
    },
    {
      "id": "b2-c9-tf-1",
      "chapter": 9,
      "type": "mc",
      "q": "In adult men, roughly 70% of sleep-related GH pulses coincide with deep slow-wave sleep, and the largest daily pulse tracks the descent into deep sleep rather than the clock, so delaying sleep delays the pulse.",
      "options": [
        "True",
        "False"
      ],
      "answer": 0,
      "points": 1,
      "explanation": "The biggest, most reproducible daily GH pulse fires shortly after sleep onset, tied to the first slow-wave episode; about 70% of sleep-related pulses coincide with deep sleep. Sleep is the lever and the hormone is downstream, so protecting the first cycle matters more than any releaser."
    },
    {
      "id": "b2-c12-tf-1",
      "chapter": 12,
      "type": "mc",
      "q": "Because the endocrine axes are coupled and share a finite energy budget, a symptom cluster in which several outputs drift together more likely points to one shared upstream input than to several independent failures.",
      "options": [
        "True",
        "False"
      ],
      "answer": 0,
      "points": 1,
      "explanation": "When multiple outputs move together, suspect one shared cause before assuming several separate breakdowns. Coupled, budget-sharing axes make clustered symptoms the expected signature of a common input such as stress, short sleep, or low energy availability."
    }
  ]
};
