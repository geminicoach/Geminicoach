/* Gemini Education: B2 (Endocrine / Hormones 101) FULL exam bank (all question types).
   PARKED until the portal thread upgrades exam.html to render matching / multi-select /
   word-bank / write-in. The live exam (b2-endocrine-hormones.js) is an interim MC+TF subset
   on the current engine. Swap this in when the new-type renderers + appeal grader ship.
   Schema: education/EXAM-SPEC.md. */
window.GEM_EXAM = {
  slug: "b2-endocrine-hormones",
  title: "Endocrine System / Hormones 101",
  contact_hours: 12, ceu_value: 1.2, pass_threshold: 80, placeholder: false,
  draw: { mc: 12, multi: 4, tf: 4, match: 2, fill: 3, free: 0 },
  shuffle: { questions: true, options: true },
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
      "id": "b2-c1-tf-1",
      "chapter": 1,
      "type": "tf",
      "q": "A clinician measures a patient's total cortisol as normal, but the patient still shows signs consistent with low hormone activity; because only the free fraction reaches receptors, a normal total value can still mislead when carrier-protein binding is high.",
      "answer": true,
      "points": 1,
      "explanation": "Only the free (unbound) fraction acts at receptors, so a total measurement can misrepresent the biologically active amount."
    },
    {
      "id": "b2-c1-fill-1",
      "chapter": 1,
      "type": "fill",
      "q": "Chemistry predicts behavior: a {{1}} hormone such as testosterone enters the cell and acts on genes for slow, durable effects, while a {{2}} hormone such as insulin binds a surface receptor for a fast, brief effect.",
      "bank": [
        "fat-soluble",
        "water-soluble",
        "iodine-based",
        "carrier-bound"
      ],
      "answers": {
        "1": "fat-soluble",
        "2": "water-soluble"
      },
      "points": 2
    },
    {
      "id": "b2-c2-mc-1",
      "chapter": 2,
      "type": "mc",
      "q": "A clinician finds a patient has low thyroid hormone output together with a low TSH. Using the two-number logic of the axis, where does this pattern localize the problem?",
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
      "id": "b2-c2-multi-1",
      "chapter": 2,
      "type": "multi",
      "q": "Which of the following statements about the anterior versus posterior pituitary are accurate? Select all that apply.",
      "options": [
        "The posterior pituitary is displaced brain tissue whose nerve endings release oxytocin and vasopressin directly",
        "The anterior pituitary is controlled remotely through the hypophyseal portal blood system",
        "Cutting the pituitary stalk would lower prolactin because its main control signal is a releasing hormone",
        "The portal system lets a small hypothalamic whisper arrive as a concentrated order",
        "Somatostatin and dopamine act as inhibiting (brake) signals"
      ],
      "answers": [
        0,
        1,
        3,
        4
      ],
      "scoring": "all_or_nothing",
      "points": 1,
      "explanation": "Prolactin defaults to ON under dopamine braking; cutting the stalk removes the brake and prolactin RISES, so that option is false."
    },
    {
      "id": "b2-c2-match-1",
      "chapter": 2,
      "type": "match",
      "q": "Match each endocrine axis to its correct signaling sequence.",
      "pairs": [
        {
          "left": "HPA (stress) axis",
          "right": "CRH to ACTH to adrenal cortex to cortisol"
        },
        {
          "left": "HPT (thyroid) axis",
          "right": "TRH to TSH to thyroid to thyroid hormone"
        },
        {
          "left": "HPG (reproduction) axis",
          "right": "GnRH to LH/FSH to gonads to sex steroids"
        },
        {
          "left": "Growth hormone control",
          "right": "GHRH stimulates while somatostatin brakes GH release"
        }
      ],
      "points": 4
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
      "id": "b2-c3-multi-1",
      "chapter": 3,
      "type": "multi",
      "q": "Which statements about glucose storage and the insulin-to-glucagon ratio are accurate? Select all that apply.",
      "options": [
        "The liver reads the insulin-to-glucagon ratio rather than either hormone alone",
        "Liver glycogen can be exported to feed the whole body, while muscle glycogen feeds only that muscle",
        "Muscle lacks glucose-6-phosphatase, so it cannot release its glycogen back into the blood",
        "A high insulin-to-glucagon ratio signals the liver to release glucose",
        "When glycogen tanks are full and demand is low, surplus glucose is routed toward fat"
      ],
      "answers": [
        0,
        1,
        2,
        4
      ],
      "scoring": "all_or_nothing",
      "points": 1,
      "explanation": "A HIGH ratio means store, not release; the liver builds glycogen when insulin dominates, so that option is false."
    },
    {
      "id": "b2-c3-free-1",
      "chapter": 3,
      "type": "free",
      "q": "Ibrahim, age 44, has a desk job, gradual central weight gain, afternoon energy slumps, early return of hunger after large meals, and a fasting glucose that a clinician called on the higher side of normal. He concluded online that his problem is too much insulin and that he must fear and nearly eliminate carbohydrates. Explain, using the chapter's mechanisms, why his glucose can still look normal during developing resistance, and describe why his all-or-nothing carb conclusion oversteps what is appropriate for a non-clinician. Keep the framing educational, not diagnostic.",
      "model": "During early, compensated insulin resistance the beta cells secrete extra insulin to force glucose into reluctant cells, so the glucose reading stays roughly normal even though the pancreas is working harder; this is the quiet compensated phase, and skeletal muscle resistance may have been present for years before any glucose number moves. Ibrahim's central weight gain, afternoon slumps, and early hunger fit that developing picture, but a normal glucose is exactly the reassurance trap. Storage destination depends on context (how depleted the glycogen tanks are and how much energy is spent), not on food being clean or dirty, so demonizing carbohydrates confuses a slogan for a mechanism. Most importantly, Ibrahim has no diagnosis; estimating his insulin from the outside, naming a condition, or prescribing a near-zero-carb fix is clinical work that belongs to a qualified clinician using validated tests over time. The educational role is to explain the relay and point him toward proper evaluation and everyday levers such as movement, muscle, sleep, and meal balance.",
      "key_points": [
        "Compensated phase: beta cells shout with extra insulin, keeping glucose near normal while the pancreas works harder",
        "Muscle resistance can precede any abnormal glucose by years, so a normal reading is a reassurance trap",
        "Storage destination depends on demand and capacity, not on food being clean or dirty, so blanket carb fear is a slogan not a mechanism",
        "No diagnosis exists; interpreting his biology and prescribing a fix is clinical care for a qualified clinician",
        "Educational role: teach the mechanism, point to the clinician, and name everyday levers"
      ],
      "rubric": {
        "pass_threshold": 70,
        "points": [
          {
            "desc": "Explains that compensatory hyperinsulinemia keeps glucose looking normal during early resistance",
            "weight": 30
          },
          {
            "desc": "Notes muscle resistance can precede glucose changes, making a normal value misleading",
            "weight": 20
          },
          {
            "desc": "Corrects the carb-fear framing using context-dependent storage rather than food virtue",
            "weight": 20
          },
          {
            "desc": "Draws the education-versus-clinical-care boundary and points to a clinician",
            "weight": 30
          }
        ]
      },
      "points": 5,
      "appeal": true
    },
    {
      "id": "b2-c4-mc-1",
      "chapter": 4,
      "type": "mc",
      "q": "A clinician notes that under-eating and illness can lower a patient's active T3 while TSH and T4 stay essentially unchanged. Which mechanism from the chapter best explains this?",
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
      "id": "b2-c4-tf-1",
      "chapter": 4,
      "type": "tf",
      "q": "Because the TSH-to-hormone relationship is steep, TSH functions as a sensitive early gauge, meaning a small drop in thyroid hormone can produce a comparatively large rise in TSH.",
      "answer": true,
      "points": 1,
      "explanation": "The steep curve makes TSH move sharply for small hormone changes, so it is an early, sensitive indicator of thyroid status."
    },
    {
      "id": "b2-c4-fill-1",
      "chapter": 4,
      "type": "fill",
      "q": "The thyroid mostly secretes the storage form {{1}}, which tissue deiodinase enzymes activate by removing one iodine to make the active form {{2}} that enters cells and changes gene expression.",
      "bank": [
        "T4",
        "T3",
        "reverse T3",
        "TSH"
      ],
      "answers": {
        "1": "T4",
        "2": "T3"
      },
      "points": 2
    },
    {
      "id": "b2-c5-mc-1",
      "chapter": 5,
      "type": "mc",
      "q": "A client brings a four-point salivary cortisol curve from a wellness lab and says it proves he has adrenal fatigue and needs supplements to refill his depleted glands. Which response is best grounded in the chapter?",
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
      "id": "b2-c5-tf-1",
      "chapter": 5,
      "type": "tf",
      "q": "The SAM axis releases adrenaline directly from the adrenal medulla into the blood without routing through the pituitary, which is part of why it acts within seconds while the HPA axis takes minutes to hours.",
      "answer": true,
      "points": 1,
      "explanation": "The fast SAM axis runs nerve to adrenal medulla to adrenaline, skipping the pituitary, and adrenaline binds surface receptors to flip switches already installed (no gene changes). The slow HPA axis runs hypothalamus to pituitary to cortex and cortisol changes gene transcription, so its effect builds and lingers."
    },
    {
      "id": "b2-c5-fill-1",
      "chapter": 5,
      "type": "fill",
      "q": "DHEA is the most abundant steroid in the body but is weak on its own; it acts as an upstream {{1}} that tissues convert locally to hormones such as testosterone and estradiol, a process called {{2}}. This is why a blood level reflects supply, not the finished product.",
      "bank": [
        "precursor",
        "intracrinology",
        "catecholamine",
        "negative feedback"
      ],
      "answers": {
        "1": "precursor",
        "2": "intracrinology"
      },
      "points": 2
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
      "q": "A coach sees only a male client's total testosterone value and wonders what it tells him about estradiol. Which statement is best grounded in the chapter?",
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
      "id": "b2-c6-multi-1",
      "chapter": 6,
      "type": "multi",
      "q": "Which of the following statements about the steroid biosynthesis pathway and sex hormones are correct? Select all that apply.",
      "options": [
        "Cholesterol is the raw material from which every steroid hormone is built.",
        "Aromatase (CYP19A1) converts testosterone into estradiol.",
        "5-alpha-reductase converts testosterone into DHT, a more potent androgen.",
        "Aromatase converts estradiol back into cholesterol for storage.",
        "Testosterone and estradiol are present in both sexes, differing in ratio and concentration rather than presence."
      ],
      "answers": [
        0,
        1,
        2,
        4
      ],
      "scoring": "all_or_nothing",
      "points": 1,
      "explanation": "Cholesterol is the shared precursor; aromatase makes estradiol from testosterone; 5-alpha-reductase makes DHT. Both sex steroids exist in every body, differing in ratio. Aromatase does not run backward to regenerate cholesterol, so that option is false."
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
      "id": "b2-c7-match-1",
      "chapter": 7,
      "type": "match",
      "q": "Match each estradiol-related role or term to its description.",
      "pairs": [
        {
          "left": "Bone",
          "right": "Shortens osteoclast lifespan; a break-down-less signal that keeps building matched to breakdown"
        },
        {
          "left": "Brain",
          "right": "A locally made neurosteroid that drives new dendritic spines and synapses"
        },
        {
          "left": "Joints",
          "right": "Acts on chondrocyte receptors and restrains MMPs and inflammatory cytokines"
        },
        {
          "left": "Aromatase",
          "right": "Converts testosterone into estradiol in peripheral tissue"
        },
        {
          "left": "GPER1",
          "right": "A membrane estrogen receptor that mediates faster, non-genomic responses"
        }
      ],
      "points": 5
    },
    {
      "id": "b2-c7-free-1",
      "chapter": 7,
      "type": "free",
      "q": "A client tells you he plans to take a clinician-unprescribed aromatase inhibitor to crush his estrogen and maximize testosterone, believing this will boost his libido and training gains. Using the evidence in the chapter, explain why this single-hormone thinking is flawed and what the evidence actually shows, then frame the situation appropriately for your role.",
      "model": "Libido and skeletal health depend on both testosterone and estradiol, which travel together because estradiol is aromatized from testosterone. In the Finkelstein trial, testosterone was restored in all men, yet blocking estradiol still reduced sexual desire, and aromatase-deficient men show low libido despite high testosterone. Estradiol is also essential for bone: about 85 percent of a man's circulating estrogen is locally aromatized, and suppressing it opens a resorption-formation gap that silently weakens the skeleton. So crushing estradiol saws off the branch he is sitting on. The honest framing is balance, not more-is-better, and any decision to start, stop, or adjust hormone-affecting medication belongs with a qualified clinician, not with me in a coaching role.",
      "key_points": [
        "Testosterone and estradiol both matter and travel together because estradiol is aromatized from testosterone",
        "Finkelstein trial: blocking estradiol cut desire even when testosterone was restored",
        "Aromatase-deficient men have low libido despite high testosterone",
        "Estradiol is essential for male bone; suppressing it drives silent bone loss",
        "Correct framing is balance rather than more-is-better, and prescribing or adjusting therapy is a clinician's role"
      ],
      "rubric": {
        "pass_threshold": 70,
        "points": [
          {
            "desc": "Explains that testosterone and estradiol are linked via aromatase and both are needed",
            "weight": 25
          },
          {
            "desc": "Cites trial evidence (Finkelstein and/or aromatase-deficient men) that estradiol independently supports libido",
            "weight": 25
          },
          {
            "desc": "Notes the bone and broader health cost of crushing estradiol",
            "weight": 25
          },
          {
            "desc": "Frames the response within scope and defers prescribing decisions to a clinician",
            "weight": 25
          }
        ]
      },
      "points": 5,
      "appeal": true
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
      "q": "A year after successful diet-induced weight loss, a client reports persistent, elevated hunger and blames a lack of willpower. Which explanation is best grounded in the chapter?",
      "options": [
        "The client simply lost motivation, and the hunger has no physiological basis.",
        "A leptin supplement would have corrected the hunger by refilling a deficiency.",
        "The thyroid began overproducing hormone, which raised appetite.",
        "Leptin stayed low and ghrelin stayed elevated long after the loss, reflecting the body's asymmetric defense of its setpoint against fat loss."
      ],
      "answer": 3,
      "points": 1,
      "explanation": "In Sumithran et al. (2011), a year after diet-induced loss leptin was still low, ghrelin still high, and hunger still elevated. The setpoint is defended asymmetrically, harder against loss than against gain. This is the biology behind weight regain, not lost motivation, and injected leptin barely helps ordinary obesity."
    },
    {
      "id": "b2-c8-multi-1",
      "chapter": 8,
      "type": "multi",
      "q": "Which of the following statements about leptin are correct? Select all that apply.",
      "options": [
        "In common obesity the core problem is leptin resistance, not a leptin deficiency.",
        "Oral leptin supplements are ineffective because leptin is a protein that gets digested.",
        "Injecting leptin dramatically reverses ordinary (non-congenital) obesity.",
        "Leptin therapy is effective where leptin is truly absent, such as congenital leptin deficiency.",
        "Leptin defends harder against fat loss than against fat gain."
      ],
      "answers": [
        0,
        1,
        3,
        4
      ],
      "scoring": "all_or_nothing",
      "points": 1,
      "explanation": "In obesity leptin is high but the brain's response is muffled (resistance), so more hormone is needed for the old effect. Oral leptin is digested as a protein. Injected leptin barely helps ordinary obesity (Heymsfield et al., 1999) but works where leptin is genuinely absent (Farooqi et al., 1999). Leptin defends much harder against loss than gain."
    },
    {
      "id": "b2-c8-tf-1",
      "chapter": 8,
      "type": "tf",
      "q": "Because leptin levels are already high in obesity, taking a leptin supplement is an effective treatment for common obesity.",
      "answer": false,
      "points": 1,
      "explanation": "The problem in common obesity is leptin resistance, not deficiency, so adding more leptin to an already loud but unheard signal does little. Injected leptin barely helps ordinary obesity, and oral leptin is a protein that gets digested. It works only where leptin is truly absent, as in congenital leptin deficiency."
    },
    {
      "id": "b2-c8-fill-1",
      "chapter": 8,
      "type": "fill",
      "q": "In the hypothalamic arcuate nucleus, {{1}} neurons drive appetite up while {{2}} neurons drive appetite down; leptin and insulin inhibit the former and stimulate the latter, whereas ghrelin does the reverse.",
      "bank": [
        "NPY/AgRP",
        "POMC/CART",
        "KNDy",
        "osteoclast"
      ],
      "answers": {
        "1": "NPY/AgRP",
        "2": "POMC/CART"
      },
      "points": 2
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
      "id": "b2-c9-tf-1",
      "chapter": 9,
      "type": "tf",
      "q": "In adult men, roughly 70% of sleep-related GH pulses coincide with deep slow-wave sleep, and the largest daily pulse tracks the descent into deep sleep rather than the clock, so delaying sleep delays the pulse.",
      "answer": true,
      "points": 1,
      "explanation": "The biggest, most reproducible daily GH pulse fires shortly after sleep onset, tied to the first slow-wave episode; about 70% of sleep-related pulses coincide with deep sleep. Sleep is the lever and the hormone is downstream, so protecting the first cycle matters more than any releaser."
    },
    {
      "id": "b2-c10-mc-1",
      "chapter": 10,
      "type": "mc",
      "q": "A clinician-diagnosed patient with chronically elevated cortisol has normal fasting glucose but clearly elevated fasting insulin. Which cross-talk route best explains this pairing?",
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
      "id": "b2-c10-match-1",
      "chapter": 10,
      "type": "match",
      "q": "Match each documented cross-talk edge to its effect.",
      "pairs": [
        {
          "left": "Cortisol to insulin",
          "right": "Lowers insulin sensitivity, so the pancreas compensates with more insulin"
        },
        {
          "left": "Thyroid to adrenergic",
          "right": "Raises tissue responsiveness to adrenaline-type signals and sets metabolic tempo"
        },
        {
          "left": "Insulin to SHBG",
          "right": "Suppresses liver SHBG, shifting the free fractions of testosterone and estradiol"
        },
        {
          "left": "Ghrelin to GH",
          "right": "Stimulates growth-hormone release"
        },
        {
          "left": "Leptin, acting permissively",
          "right": "Grants axes permission to run when stored energy is adequate"
        }
      ],
      "points": 5
    },
    {
      "id": "b2-c10-fill-1",
      "chapter": 10,
      "type": "fill",
      "q": "Reading coupled symptoms: short sleep lowers {{1}} and raises {{2}}, independent of BMI, producing a false energy alarm that points to a shared input rather than an appetite defect.",
      "bank": [
        "leptin",
        "ghrelin",
        "insulin",
        "cortisol"
      ],
      "answers": {
        "1": "leptin",
        "2": "ghrelin"
      },
      "points": 2
    },
    {
      "id": "b2-c11-mc-1",
      "chapter": 11,
      "type": "mc",
      "q": "A client sleeping about five hours a night reports sudden ravenous appetite despite eating enough calories. Which sleep readout best accounts for this?",
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
      "id": "b2-c11-multi-1",
      "chapter": 11,
      "type": "multi",
      "q": "Select every item that is a durable, chronic payoff of consistent resistance training rather than a transient acute effect.",
      "options": [
        "Improved insulin sensitivity",
        "Upregulated androgen receptors",
        "The 15 to 30 minute post-workout testosterone spike as the proven driver of muscle growth",
        "Improved body composition over time",
        "A more graceful cortisol-androgen balance"
      ],
      "answers": [
        0,
        1,
        3,
        4
      ],
      "scoring": "all_or_nothing",
      "points": 1,
      "explanation": "The durable payoff is chronic: better insulin sensitivity, receptor upregulation, body composition, and a graceful cortisol-androgen balance. The acute 15 to 30 minute spike is real but modest and is not the proven driver of growth, so treating it as the cause is the marketing tell."
    },
    {
      "id": "b2-c11-fill-1",
      "chapter": 11,
      "type": "fill",
      "q": "Nutrition does two jobs. Under-eating to the point of low energy availability furloughs the {{1}} axis, because {{2}} is the raw-material backbone of every steroid hormone.",
      "bank": [
        "reproductive",
        "cholesterol",
        "thyroid",
        "glucagon"
      ],
      "answers": {
        "1": "reproductive",
        "2": "cholesterol"
      },
      "points": 2
    },
    {
      "id": "b2-c11-free-1",
      "chapter": 11,
      "type": "free",
      "q": "A supplement company sells a single capsule that 'naturally boosts testosterone,' citing a real study showing a genuine acute post-exercise testosterone rise. Using the four levers and the principle that you cannot move one hormone in isolation, explain in an educational, role-neutral way: (a) why the acute-rise evidence does not support the chronic promise, and (b) how insulin sensitivity shows that a single hack cannot replace the fundamentals.",
      "model": "The study is honest about a narrow fact and then swaps it for a broader claim. A modest acute testosterone rise for 15 to 30 minutes after exercise is real but is not the proven driver of durable adaptation; the durable payoff is chronic, from androgen-receptor upregulation, better body composition, and a graceful cortisol-androgen balance built by consistent training, sleep, and recovery. Stretching a genuine acute effect into a chronic promise, or selling a deficiency fix to people who are not deficient, is the marketing tell. On the deeper point, the endocrine system is one machine wired in loops, not four separate pipes. Insulin sensitivity is moved by all four levers at once, sleep, stress, nutrition, and training, so no capsule overrides them; the fundamentals are the substrate the capsule would have to act through. A nudge to one node propagates to the others, which is why improvements and problems both compound. Both fatalism and hack-chasing get this wrong: choices reach a system built to respond to inputs, but no single add-on compensates for chronically broken inputs. Anything persistent or clinical belongs with a qualified clinician working with measurements over time.",
      "key_points": [
        "A real acute effect (15 to 30 min post-exercise rise) is distinct from and does not prove a chronic outcome",
        "The durable payoff is chronic: receptor upregulation, body composition, cortisol-androgen balance from consistent training and recovery",
        "The bait-and-switch tell: a genuine narrow fact stretched into a broad promise, or a deficiency fix sold to non-deficient people",
        "The system is coupled loops, not isolated pipes; you cannot move one hormone in isolation",
        "Insulin sensitivity is moved by all four levers at once, so a single hack cannot replace the fundamentals it would have to act through",
        "Role-neutral close: persistent or clinical concerns go to a qualified clinician with measurements over time"
      ],
      "rubric": {
        "pass_threshold": 70,
        "points": [
          {
            "desc": "Distinguishes the acute rise from the chronic promise and explains why acute evidence does not support the chronic claim",
            "weight": 30
          },
          {
            "desc": "Names the bait-and-switch or marketing tell (narrow fact stretched to broad promise, or deficiency fix sold to non-deficient people)",
            "weight": 20
          },
          {
            "desc": "Explains cross-talk reasoning: coupled loops, cannot move one hormone in isolation, effects propagate",
            "weight": 25
          },
          {
            "desc": "Uses insulin sensitivity to show a single hack cannot replace the four fundamentals",
            "weight": 15
          },
          {
            "desc": "Keeps an educational, role-neutral framing and defers clinical judgment to a qualified clinician",
            "weight": 10
          }
        ]
      },
      "points": 5,
      "appeal": true
    },
    {
      "id": "b2-c12-mc-1",
      "chapter": 12,
      "type": "mc",
      "q": "During an acute illness a patient's thyroid setpoint drops and outputs fall, then recover as they heal. Which concept best frames this as adaptation rather than disease?",
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
      "id": "b2-c12-multi-1",
      "chapter": 12,
      "type": "multi",
      "q": "Select every statement that reflects correct whole-network reasoning about the endocrine system.",
      "options": [
        "Assume axes are coupled unless there is a specific reason to think otherwise",
        "Chronic HPA activation can suppress reproduction, thyroid, and growth at the same time",
        "A single hormone level is a definitive verdict on the health of its gland",
        "The axes draw on one finite, shared energy budget, so resilience can fail across systems together",
        "A single supplement can override chronically broken fundamental inputs"
      ],
      "answers": [
        0,
        1,
        3
      ],
      "scoring": "all_or_nothing",
      "points": 1,
      "explanation": "The isolated axis is the special case; coupling is the default. Chronic stress suppresses multiple axes together, and a shared budget means resilience fails across systems. A level is a snapshot of a conversation, not a verdict, and no single add-on overrides broken fundamentals."
    },
    {
      "id": "b2-c12-tf-1",
      "chapter": 12,
      "type": "tf",
      "q": "Because the endocrine axes are coupled and share a finite energy budget, a symptom cluster in which several outputs drift together more likely points to one shared upstream input than to several independent failures.",
      "answer": true,
      "points": 1,
      "explanation": "When multiple outputs move together, suspect one shared cause before assuming several separate breakdowns. Coupled, budget-sharing axes make clustered symptoms the expected signature of a common input such as stress, short sleep, or low energy availability."
    },
    {
      "id": "b2-c12-match-1",
      "chapter": 12,
      "type": "match",
      "q": "Match each core network concept to its description.",
      "pairs": [
        {
          "left": "Specificity",
          "right": "A hormone acts only where a matching receptor exists"
        },
        {
          "left": "Negative feedback",
          "right": "Output feeds back to shut down its own driver, like a thermostat"
        },
        {
          "left": "Allostasis",
          "right": "Stability through change; the setpoint moves to fit the situation"
        },
        {
          "left": "Allostatic load",
          "right": "The wear that accumulates from holding a temporary adjustment permanently"
        },
        {
          "left": "Opposing pairs",
          "right": "Two hormones pulling opposite ways defend a setpoint"
        }
      ],
      "points": 5
    }
  ]
};
