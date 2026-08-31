/* Gemini Education: E3 (Female Physiology, the Cycle & Reproductive Health) FULL exam bank (all question types).
   PARKED until the portal thread upgrades exam.html to render matching / multi-select /
   word-bank / write-in. The live exam (e3-female-physiology.js) is an interim MC+TF subset
   on the current engine. Swap this in when the new-type renderers + appeal grader ship.
   Schema: education/EXAM-SPEC.md. */
window.GEM_EXAM = {
  slug: "e3-female-physiology",
  title: "Female Physiology, the Cycle & Reproductive Health",
  contact_hours: 10, ceu_value: 1.0, pass_threshold: 80, placeholder: false,
  draw: { mc: 14, multi: 3, tf: 4, match: 2, fill: 2, free: 0 },
  shuffle: { questions: true, options: true },
  questions: [
    {
      "id": "e3-c1-mc-1",
      "chapter": 1,
      "type": "mc",
      "q": "A 2021 audit found that despite decades of policy reform, women made up about 34% of participants across thousands of exercise and sports-science publications from 2014 to 2020, with performance-enhancement research drawing only about 3% of its participants from women. What does the chapter identify as the root cause of this persistence, rather than an unsolvable scientific complexity?",
      "options": [
        "A lack of specialist knowledge and established design standards for studying a cycling reproductive system, not an unsolvable barrier",
        "Women are inherently too biologically variable to ever be studied in controlled research",
        "Funding agencies have always required equal representation, so the gap reflects women declining to participate",
        "The menstrual cycle makes any female-inclusive study impossible to interpret"
      ],
      "answer": 0,
      "points": 1,
      "explanation": "Elliott-Sale and colleagues (2021) trace the persistent gap to a lack of specialist knowledge and design standards for studying a cycling system, not to an unsolvable biological complexity. Treating the cycle as noise to control for, rather than a system worth designing for, made recruiting men look like the cheaper, cleaner option."
    },
    {
      "id": "e3-c1-mc-2",
      "chapter": 1,
      "type": "mc",
      "q": "A learner reads a single small study claiming a supplement dramatically improves recovery in women and wants to know how much weight to give it. Using the chapter's three-tier grading system, what should the learner check first?",
      "options": [
        "Whether the study has a compelling headline",
        "Whether the finding is strong and replicated across multiple independent studies with female participants of defined reproductive status, or whether it is mixed, limited, or merely speculative",
        "Whether the supplement is described as natural",
        "Whether the study was published in the current year"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "The chapter's tiers, strong and replicated, mixed or limited, and weak or speculative, ask whether a claim rests on multiple independent studies with clearly defined female participants pointing the same direction, or on a single small study, a mechanism alone, or extrapolation from men. A single study, however exciting the headline, sits at best in the mixed-or-limited tier until it is replicated."
    },
    {
      "id": "e3-c1-tf-1",
      "chapter": 1,
      "type": "tf",
      "q": "According to the chapter, when a topic has not been studied in women, that absence itself counts as evidence that the topic is not relevant to female physiology.",
      "answer": false,
      "points": 1,
      "explanation": "The chapter cites Sims and Heather (2018) directly against this reasoning: absence from a study is not evidence of irrelevance, and often the opposite is true. Historically, women's exclusion reflected convenience and complexity treated as an excuse, not a finding that the questions did not matter."
    },
    {
      "id": "e3-c2-mc-1",
      "chapter": 2,
      "type": "mc",
      "q": "In the hypothalamic-pituitary-gonadal axis, the same pulse generator produces different downstream effects depending on its tempo. Which pairing is correct?",
      "options": [
        "Fast GnRH pulses favor follicle-stimulating hormone (FSH), while slow pulses favor luteinizing hormone (LH)",
        "Pulse tempo has no effect on which gonadotropin is released; FSH and LH always rise together in fixed proportion",
        "Slow GnRH pulses (roughly every 2 to 3 hours) favor FSH, while fast pulses (less than an hour apart) favor LH",
        "Continuous, non-pulsed GnRH produces the strongest gonadotropin response of all"
      ],
      "answer": 2,
      "points": 1,
      "explanation": "The pituitary reads tempo, not just presence. Slow pulses bias output toward FSH and fast pulses toward LH, while continuous, non-pulsed GnRH actually desensitizes the pituitary within days rather than driving a stronger response."
    },
    {
      "id": "e3-c2-match-1",
      "chapter": 2,
      "type": "match",
      "q": "Match each element of the hypothalamic-pituitary-gonadal (HPG) axis to its correct description.",
      "pairs": [
        {
          "left": "Hypothalamus (KNDy neurons)",
          "right": "Generates rhythmic GnRH pulses using kisspeptin, neurokinin B as accelerator, and dynorphin as brake"
        },
        {
          "left": "Anterior pituitary (gonadotropes)",
          "right": "Reads GnRH pulse tempo and answers with FSH (slow pulses) or LH (fast pulses)"
        },
        {
          "left": "Theca cells",
          "right": "Respond to LH by manufacturing androgens"
        },
        {
          "left": "Granulosa cells",
          "right": "Respond to FSH by converting androgens to estradiol via aromatase"
        },
        {
          "left": "Corpus luteum",
          "right": "Forms after ovulation and produces progesterone, which slows pulse tempo"
        }
      ],
      "points": 5
    },
    {
      "id": "e3-c2-fill-1",
      "chapter": 2,
      "type": "fill",
      "q": "The hypothalamus generates rhythmic GnRH pulses through KNDy neurons; within this circuit, {{1}} acts as the accelerator that triggers each kisspeptin burst, while {{2}} acts as the brake that shuts it off.",
      "bank": [
        "neurokinin B",
        "dynorphin",
        "progesterone",
        "aromatase"
      ],
      "answers": {
        "1": "neurokinin B",
        "2": "dynorphin"
      },
      "points": 2
    },
    {
      "id": "e3-c2-tf-1",
      "chapter": 2,
      "type": "tf",
      "q": "Because the pituitary reads the tempo of gonadotropin-releasing hormone (GnRH) pulses rather than just its presence, continuous, non-pulsed GnRH actually desensitizes the pituitary within days instead of producing a stronger hormonal response.",
      "answer": true,
      "points": 1,
      "explanation": "Pulsatility itself carries the message. Fast and slow pulses selectively favor luteinizing hormone (LH) and follicle-stimulating hormone (FSH) respectively, while a steady, non-pulsed signal desensitizes gonadotropin release rather than amplifying it."
    },
    {
      "id": "e3-c3-mc-1",
      "chapter": 3,
      "type": "mc",
      "q": "Comparing cycles of different total lengths, researchers consistently find that most of the extra days show up in one phase while the other stays comparatively steady. Which phase absorbs most of the variability, and what is the evidence?",
      "options": [
        "The luteal phase; Henry et al. (2024) found luteal variability nearly double the follicular phase",
        "The follicular phase; Bull et al. (2019) found it stretched by up to 66% in longer cycles, while Henry et al. (2024) found its median within-person variability (about 5.2 days) exceeded the luteal phase's (about 3.0 days)",
        "Both phases vary by an identical, fixed number of days in every study",
        "Neither phase varies meaningfully once ovulation has been confirmed"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "The follicular phase is the variable act, stretching or compressing with cycle length, while the luteal phase is comparatively steadier, though not perfectly fixed. Bull and colleagues (2019) and Henry and colleagues (2024) both quantify this asymmetry rather than treating the two phases as interchangeable."
    },
    {
      "id": "e3-c3-fill-1",
      "chapter": 3,
      "type": "fill",
      "q": "Sustained high estradiol, roughly above 200 pg/mL for about 50 hours, flips feedback from negative to positive and provokes the {{1}} surge. Ovulation then follows about 24 to 36 hours later, and if no pregnancy occurs, {{2}} ends the corpus luteum's progesterone production after about 14 days.",
      "bank": [
        "LH",
        "luteolysis",
        "FSH",
        "fertilization"
      ],
      "answers": {
        "1": "LH",
        "2": "luteolysis"
      },
      "points": 2
    },
    {
      "id": "e3-c3-tf-1",
      "chapter": 3,
      "type": "tf",
      "q": "Research comparing cycles of different lengths shows that the luteal phase varies in duration just as much as the follicular phase does.",
      "answer": false,
      "points": 1,
      "explanation": "The two phases are asymmetric rather than equally variable. Bull and colleagues (2019) found the follicular phase stretched by up to 66% in longer cycles while the luteal phase moved only about 5%, and Henry and colleagues (2024) found roughly 5.2 days of within-person follicular variability versus about 3.0 days luteal."
    },
    {
      "id": "e3-c4-mc-1",
      "chapter": 4,
      "type": "mc",
      "q": "A large study found that 37% of cycles that looked entirely ordinary in length and bleeding pattern were actually anovulatory. What practical implication does the chapter draw from this finding?",
      "options": [
        "A regular-length cycle can be safely assumed to be ovulatory without any further evidence",
        "Anovulatory cycles are rare enough in practice that they can be ignored",
        "Only cycles outside the 26-to-35-day band should ever be questioned",
        "A regular, normal-length cycle is not automatically ovulatory, so appearance alone cannot substitute for a functional sign like a sustained temperature shift"
      ],
      "answer": 3,
      "points": 1,
      "explanation": "The 37% figure is a caution against equating a normal-looking calendar with a functioning axis. Confirming ovulation requires a functional sign, most practically a sustained luteal-phase temperature rise, rather than an assumption based on cycle length or regularity alone."
    },
    {
      "id": "e3-c4-multi-1",
      "chapter": 4,
      "type": "multi",
      "q": "Which of the following statements about the three self-observed fertility signs are accurate? Select all that apply.",
      "options": [
        "Basal body temperature confirms after the fact, since progesterone raises resting temperature only after ovulation has already occurred",
        "Cervical mucus changes forecast ahead of time, since rising estrogen produces clear, stretchy mucus in the days before ovulation",
        "A positive LH test strip proves an egg was released, not merely that a surge occurred",
        "Reading a single sign in isolation gives the same confidence as reading the three together over time",
        "A regularly ovulatory cycle functions as a fifth vital sign, reporting on whole-system health"
      ],
      "answers": [
        0,
        1,
        4
      ],
      "scoring": "all_or_nothing",
      "points": 1,
      "explanation": "Basal body temperature confirms after the fact, cervical mucus forecasts ahead of time, and a regularly ovulatory cycle is treated as a meaningful vital sign of whole-system health. An LH strip only predicts an imminent surge, it does not prove release occurred, and reading any single sign in isolation is weaker than reading the pattern of several together over time."
    },
    {
      "id": "e3-c4-tf-1",
      "chapter": 4,
      "type": "tf",
      "q": "A cycle that falls within the everyday population band of roughly 26 to 35 days can, on that basis alone, be assumed to have included ovulation.",
      "answer": false,
      "points": 1,
      "explanation": "A study found that 37% of cycles that looked entirely ordinary in length were actually anovulatory, so a normal-looking calendar cannot substitute for a functional sign such as a sustained luteal-phase temperature shift. Length and regularity describe the container, not what happened inside it."
    },
    {
      "id": "e3-c5-mc-1",
      "chapter": 5,
      "type": "mc",
      "q": "Comparing two progestin-only methods, the etonogestrel implant and the progestin-only pill, the chapter draws a distinction in how reliably each suppresses ovulation. What is that distinction?",
      "options": [
        "The implant's dominant route is reliable ovulation suppression, while evidence for the pill relying mainly on mucus thickening is thinner and its ovulation suppression is inconsistent",
        "Both methods suppress ovulation with identical, high reliability",
        "Neither method has any effect on ovulation; both work purely by thickening cervical mucus",
        "The pill reliably suppresses ovulation while the implant works only by thickening cervical mucus"
      ],
      "answer": 0,
      "points": 1,
      "explanation": "The implant's steady dose reliably suppresses ovulation, while the progestin-only pill is often described as working mainly through mucus thickening, a mechanism with thinner direct evidence, and its ovulation suppression is inconsistent. Sorting methods by mechanism, rather than by a shared progestin-only label, is the chapter's organizing habit."
    },
    {
      "id": "e3-c5-match-1",
      "chapter": 5,
      "type": "match",
      "q": "Match each contraceptive method to the mechanism that defines it.",
      "pairs": [
        {
          "left": "Combined hormonal pill, patch, or ring",
          "right": "Suppresses gonadotropins and blocks the LH surge, stopping ovulation"
        },
        {
          "left": "Etonogestrel implant",
          "right": "Delivers a steady progestin dose whose dominant route is reliable ovulation suppression"
        },
        {
          "left": "Hormonal IUD",
          "right": "Acts mainly locally on the endometrium with minimal systemic ovarian suppression"
        },
        {
          "left": "Copper IUD",
          "right": "Carries no hormones; is spermicidal and prevents fertilization while the axis runs unchanged"
        }
      ],
      "points": 4
    },
    {
      "id": "e3-c5-multi-1",
      "chapter": 5,
      "type": "multi",
      "q": "Which statements about contraceptive mechanisms are accurate per the chapter? Select all that apply.",
      "options": [
        "A withdrawal bleed during a hormone-free interval on combined hormonal contraception is not the same as a true menstrual period",
        "Neither the hormonal IUD nor the copper IUD works by disrupting an already-implanted embryo; both act before fertilization",
        "Typical-use effectiveness can trail perfect-use effectiveness for methods that require action every time, such as barrier methods",
        "Fertility awareness based methods work identically regardless of whether the underlying cycle is being read accurately",
        "The copper IUD suppresses ovulation through a systemic hormonal mechanism"
      ],
      "answers": [
        0,
        1,
        2
      ],
      "scoring": "all_or_nothing",
      "points": 1,
      "explanation": "A withdrawal bleed is a medically induced event distinct from a true period, both IUD types act before fertilization rather than after implantation, and methods requiring consistent user action show a real gap between typical-use and perfect-use effectiveness. Fertility awareness methods depend entirely on accurately reading an intact cycle, and the copper IUD is non-hormonal and does not suppress ovulation."
    },
    {
      "id": "e3-c5-mc-3",
      "chapter": 5,
      "type": "mc",
      "q": "Across reversible contraceptive methods, what does the pooled evidence show about the return of fertility after stopping, and which method is the clear exception?",
      "options": [
        "Return of fertility is fastest after stopping the copper IUD and slowest after stopping the pill",
        "No method shows any meaningful return of fertility within two years of stopping",
        "The hormonal IUD is the exception, with a fertility delay lasting several years",
        "About 83% become pregnant within 12 months of stopping, with no significant difference by method type or duration of use, except the injectable progestin (DMPA), which carries a longer and more variable delay tied to its slow-clearing depot dose"
      ],
      "answer": 3,
      "points": 1,
      "explanation": "The pooled 83%-within-12-months figure holds across most reversible methods regardless of type or how long they were used. The injectable progestin is the named exception because its depot dose clears the body more slowly and unpredictably than other methods."
    },
    {
      "id": "e3-c6-mc-1",
      "chapter": 6,
      "type": "mc",
      "q": "A learner asks whether it is possible to look at someone whose cycle has stopped and tell whether the cause is functional (hypothalamic) or pathological, such as polycystic ovary syndrome or a prolactinoma. What is the chapter's answer?",
      "options": [
        "Yes, functional causes always present with visible weight loss, so appearance is diagnostic",
        "Yes, pathological causes always produce visible symptoms within days",
        "No; functional and pathological amenorrhea cannot be reliably told apart by observation alone, which is why amenorrhea is a diagnosis of exclusion requiring labs, and imaging if needed",
        "No, because amenorrhea is always medically induced and therefore never worth referring"
      ],
      "answer": 2,
      "points": 1,
      "explanation": "Amenorrhea is a symptom with several possible causes, some benign and expected, some reversible, and some requiring specific medical treatment, and none of them can be reliably sorted by looking. That is exactly why a diagnosis of exclusion, worked up with labs and imaging as needed, is the appropriate path, not an educated guess."
    },
    {
      "id": "e3-c6-match-1",
      "chapter": 6,
      "type": "match",
      "q": "Match each amenorrhea bucket to its description.",
      "pairs": [
        {
          "left": "Medically induced",
          "right": "Expected, deliberate, and benign, such as an absent bleed from a progestin-based method"
        },
        {
          "left": "Functional / hypothalamic",
          "right": "The axis powers itself down under low energy availability, stress, or overload; reversible but still needs a clinician to confirm"
        },
        {
          "left": "Pathological",
          "right": "Conditions such as PCOS, thyroid disease, prolactinoma, or primary ovarian insufficiency that cannot be told apart from functional causes by looking"
        }
      ],
      "points": 3
    },
    {
      "id": "e3-c6-tf-1",
      "chapter": 6,
      "type": "tf",
      "q": "Amenorrhea is properly treated as a diagnosis of exclusion, meaning pathological causes are ruled out with labs, and imaging if needed, before a functional or medically induced explanation is accepted.",
      "answer": true,
      "points": 1,
      "explanation": "Because functional and pathological amenorrhea can look identical from the outside, from missed periods to normal body weight, the chapter frames a proper workup as a process of ruling causes out with objective testing, not a process of pattern-matching by appearance."
    },
    {
      "id": "e3-c6-free-1",
      "chapter": 6,
      "type": "free",
      "q": "Priya's period has been absent for four months during a heavy training block with reduced eating, and a training partner tells her that's normal for athletes and nothing to worry about. Using the chapter's account of amenorrhea as a diagnosis of exclusion, the three buckets (medically induced, functional, and pathological), and the recognize-and-refer boundary, explain in an educational, role-neutral way why the training partner's reassurance is not appropriate, and state clearly where your own explanation must stop.",
      "model": "The training partner's reassurance assumes the cause of Priya's absent cycle without any evaluation, but functional and pathological amenorrhea can look identical from the outside, so an educated guess is not a substitute for a workup. Common in athletic populations is not the same as automatically benign in Priya specifically: her four months without a period sits well past the three-month secondary amenorrhea threshold, and even if the cause turns out to be functional hypothalamic amenorrhea tied to low energy availability, that diagnosis can only be reached properly by ruling out pathological causes such as polycystic ovary syndrome, thyroid disease, a prolactinoma, or primary ovarian insufficiency with labs and, if needed, imaging. Functional causes are also not harmless simply because they are reversible; a quiet cycle reflects a suppressed axis with real downstream consequences for bone and other systems the longer it continues. What this explanation can do is describe the categories and explain why a confident reassurance skips a needed step. What it cannot do is guess which bucket Priya is actually in, tell her the missed periods are fine, or recommend she change her training or eating on her own. The appropriate response is to recognize the pattern and encourage her to see a qualified clinician, not to diagnose or manage it here.",
      "key_points": [
        "Functional and pathological amenorrhea cannot be told apart by observation alone",
        "Four months exceeds the three-month secondary amenorrhea threshold that warrants evaluation",
        "Amenorrhea is a diagnosis of exclusion requiring labs and, if needed, imaging before a functional cause is accepted",
        "Functional causes are reversible but not harmless while ongoing (bone and other systems are affected)",
        "Role-neutral boundary: recognize the pattern and refer, do not diagnose, reassure, or prescribe a fix"
      ],
      "rubric": {
        "pass_threshold": 70,
        "points": [
          {
            "desc": "Explains why functional and pathological amenorrhea cannot be distinguished by observation alone",
            "weight": 25
          },
          {
            "desc": "Correctly applies the secondary amenorrhea threshold and the diagnosis-of-exclusion framing",
            "weight": 25
          },
          {
            "desc": "Notes that a reversible functional cause is not automatically harmless while it persists",
            "weight": 20
          },
          {
            "desc": "Keeps an educational, role-neutral framing and defers diagnosis and management to a qualified clinician",
            "weight": 30
          }
        ]
      },
      "points": 5,
      "appeal": true
    },
    {
      "id": "e3-c7-mc-1",
      "chapter": 7,
      "type": "mc",
      "q": "The chapter defines energy availability using a specific formula. Why does the chapter insist this is not the same thing as simply tracking calorie intake or overall energy balance?",
      "options": [
        "Because energy availability is measured only during the luteal phase",
        "Because energy availability is (dietary intake minus exercise energy expended), divided by fat-free mass, so two people eating the same calories can have very different energy availability depending on their training load and body composition",
        "Because energy availability is identical to total daily calorie intake",
        "Because energy availability only matters for people trying to lose weight"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "The formula divides intake-minus-exercise-cost by fat-free mass, so the same calorie intake can leave very different amounts left over for basic physiological function depending on how much was spent training and how much lean mass there is to support. That is why intake alone, or a simple calorie deficit, can miss a real energy availability problem."
    },
    {
      "id": "e3-c7-multi-1",
      "chapter": 7,
      "type": "multi",
      "q": "Relative Energy Deficiency in Sport (RED-S) is described as one root cause with effects across many systems. Which of the following are among the systems the chapter lists as affected? Select all that apply.",
      "options": [
        "Menstrual function, through a slowed GnRH pulse generator and reduced LH pulsatility",
        "Bone, through suppressed estrogen combined with an energy shortfall tipping remodeling toward loss",
        "Immune function, through more illness and more training days lost",
        "Eye color, which shifts measurably under sustained low energy availability",
        "Cardiovascular health, through an unfavorable lipid shift and impaired vessel lining function"
      ],
      "answers": [
        0,
        1,
        2,
        4
      ],
      "scoring": "all_or_nothing",
      "points": 1,
      "explanation": "The chapter lists menstrual, bone, thyroid and endocrine, cardiovascular, immune, and performance systems as downstream of the same energy shortfall, one cause producing effects across a whole portfolio at once. Eye color is not a physiological pathway described anywhere in the chapter and is included here only as an implausible distractor."
    },
    {
      "id": "e3-c7-mc-2",
      "chapter": 7,
      "type": "mc",
      "q": "An athlete's weight has stayed perfectly stable for months, and they feel this rules out any concern about energy availability. What does the chapter say about that reasoning?",
      "options": [
        "Weight stability is a reliable, sufficient sign that energy availability is adequate",
        "Weight stability can only occur when energy availability is high",
        "Weight stability does not rule out low energy availability, because core systems such as the menstrual, bone, and endocrine axes can be downshifted while the number on the scale holds steady",
        "Weight stability is only relevant for weight-class sports"
      ],
      "answer": 2,
      "points": 1,
      "explanation": "The chapter explicitly warns that a stable scale weight can coexist with a body quietly triaging away from reproductive and skeletal function. That is part of why low energy availability accumulates unnoticed over months rather than announcing itself with one dramatic moment."
    },
    {
      "id": "e3-c7-free-1",
      "chapter": 7,
      "type": "free",
      "q": "A coach notices that one of the athletes on the team is lean, trains hard, has missed several periods over the past year, catches frequent minor illnesses, and has stalled in performance despite consistent training, and the coach's plan is to quietly suggest she eat a bit more protein and see how it goes. Using the chapter's energy availability framework, the see the set, not the symptom principle, and the chapter's firmest recognize-and-refer line, explain in an educational, role-neutral way why a private food tweak is not an adequate response, and state where your own role in this explanation must stop.",
      "model": "Read individually, a missed period, a cold, and a performance plateau might each seem minor, but the chapter's framing is to see the set: a quiet cycle, plus frequent illness, plus a stalled pace, is a pattern consistent with one shared mechanism, chronically low energy availability, disrupting the menstrual, immune, and performance systems together, rather than three coincidences. Weight or leanness alone does not resolve the question either, since core systems can be downshifted while an athlete's physique looks fine or is even praised as disciplined. The chapter treats persistent low energy availability, menstrual dysfunction beyond a cycle or two, and any sign of disordered eating as its firmest recognize-and-refer line, explicitly not something to coach around, track privately, or wait out. A quiet suggestion to eat a bit more protein, decided and managed one-to-one without any professional evaluation, does exactly what the chapter warns against: it treats a possible multi-system pattern as a private food tweak. My role here is to explain why the pattern warrants a full evaluation, ideally involving a physician, a registered dietitian, and a mental-health professional together, and to be clear that recommending a specific intake change, ruling out an eating disorder, or deciding whether this athlete can keep training is not something to determine from this description. That belongs to qualified clinicians working with the athlete directly.",
      "key_points": [
        "See the set, not the symptom: missed periods, illness, and plateaued performance may share one root cause (low energy availability)",
        "Weight stability or a lean physique does not rule out low energy availability",
        "This is named as the course's firmest recognize-and-refer line, not something to coach around or track privately",
        "Proper evaluation involves multiple professionals (physician, dietitian, mental-health) working together",
        "Role-neutral boundary: explain why referral is warranted, do not prescribe an intake change or manage the situation directly"
      ],
      "rubric": {
        "pass_threshold": 70,
        "points": [
          {
            "desc": "Connects the three symptoms to one shared low-energy-availability mechanism (see the set, not the symptom)",
            "weight": 25
          },
          {
            "desc": "States that weight stability or leanness does not rule out low energy availability",
            "weight": 20
          },
          {
            "desc": "Identifies this as the course's firmest recognize-and-refer situation, not one to coach around privately",
            "weight": 25
          },
          {
            "desc": "Keeps a role-neutral boundary, deferring intake decisions and diagnosis to qualified professionals",
            "weight": 30
          }
        ]
      },
      "points": 5,
      "appeal": true
    },
    {
      "id": "e3-c7-mc-3",
      "chapter": 7,
      "type": "mc",
      "q": "A learner argues that low energy availability can only occur when a person is deliberately restricting food. What does the chapter say about this claim?",
      "options": [
        "Low energy availability can also occur entirely unintentionally, when training volume rises faster than intake, so the shortfall itself, with or without deliberate restriction or an eating disorder, is what drives harm",
        "Low energy availability is always the result of a diagnosed eating disorder",
        "Low energy availability can never occur unintentionally in a healthy person",
        "Low energy availability is exclusively a concern for weight-class sports"
      ],
      "answer": 0,
      "points": 1,
      "explanation": "The chapter distinguishes intentional causes, such as deliberate weight cutting or leanness pressure, from unintentional ones, where training volume creeps up across a season without a matching rise in intake. Either path can produce the same physiological shortfall and the same downstream harm."
    },
    {
      "id": "e3-c8-mc-1",
      "chapter": 8,
      "type": "mc",
      "q": "By what mechanism does estrogen restrain bone breakdown at the cellular level?",
      "options": [
        "Estrogen raises osteoprotegerin, a decoy receptor, and lowers RANKL, so fewer osteoclast precursors mature, while also shortening osteoclast lifespan and lengthening osteoblast and osteocyte lifespan",
        "Estrogen directly dissolves old bone mineral itself, taking over the osteoclasts' job",
        "Estrogen has no measurable effect on osteoclasts or osteoblasts; its bone effects are purely coincidental",
        "Estrogen only affects bone after menopause, never before"
      ],
      "answer": 0,
      "points": 1,
      "explanation": "Estrogen works through the RANKL and osteoprotegerin system to limit how many osteoclast precursors mature, and it separately tips cell survival, shortening osteoclast lifespan while extending that of the bone-building osteoblasts and osteocytes. When estrogen falls, this multi-pronged brake releases from several directions at once."
    },
    {
      "id": "e3-c8-match-1",
      "chapter": 8,
      "type": "match",
      "q": "Match each bone cell type to its role in remodeling.",
      "pairs": [
        {
          "left": "Osteoclasts",
          "right": "The demolition crew that attaches to bone surface and dissolves mineral, clearing old matrix"
        },
        {
          "left": "Osteoblasts",
          "right": "The construction crew that lays down new osteoid in the cleared pit"
        },
        {
          "left": "Osteocytes",
          "right": "Former osteoblasts embedded in bone that sense strain and direct remodeling"
        }
      ],
      "points": 3
    },
    {
      "id": "e3-c8-fill-1",
      "chapter": 8,
      "type": "fill",
      "q": "Estrogen restrains bone breakdown partly through the RANKL and {{1}} system: estrogen raises this decoy receptor and lowers RANKL, so fewer osteoclast precursors mature. Roughly four years around the mid-teens capture about {{2}} percent of total adult bone mineral, a window that does not reopen.",
      "bank": [
        "osteoprotegerin",
        "39",
        "calcitonin",
        "60"
      ],
      "answers": {
        "1": "osteoprotegerin",
        "2": "39"
      },
      "points": 2
    },
    {
      "id": "e3-c8-mc-2",
      "chapter": 8,
      "type": "mc",
      "q": "The chapter describes a roughly four-year window around the mid-teens as disproportionately important for skeletal health. Why?",
      "options": [
        "It is when bone density is at its lowest point across the entire lifespan",
        "It captures about 39% of total adult bone mineral, and this window does not reopen later in life",
        "It is the only period when a T-score is the appropriate reference range",
        "It has no special significance compared to any other four-year span in adulthood"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "Roughly four years around the mid-teens builds close to two-fifths of total adult bone mineral, a window that does not reopen. Later years can hold onto a peak that was built, through regular ovulatory cycles and their cyclical estradiol exposure, but they cannot recreate that original building window."
    },
    {
      "id": "e3-c9-mc-1",
      "chapter": 9,
      "type": "mc",
      "q": "Marketing for phase-based (cycle-syncing) strength training programs claims large, reliable performance differences across the cycle. How does the chapter grade this specific claim?",
      "options": [
        "Strong and replicated, based on dozens of large, hormone-verified trials all pointing the same direction",
        "The claim is entirely unstudied and no relevant research exists at all",
        "Largely noise: an umbrella review found scant, low-quality, inconsistent evidence, and the largest performance meta-analysis found at most trivial effects",
        "Confirmed true only for elite athletes, and confirmed false for everyone else"
      ],
      "answer": 2,
      "points": 1,
      "explanation": "Colenso-Semple and colleagues' umbrella review found the underlying evidence scant, low-quality, and inconsistent, and the largest relevant meta-analysis found effects that were at most trivial. That graded honesty is the chapter's point: a popular claim is not automatically a well-supported one."
    },
    {
      "id": "e3-c9-multi-1",
      "chapter": 9,
      "type": "multi",
      "q": "Which of the following statements reflect the chapter's honest grading of cycle-related training and nutrition claims? Select all that apply.",
      "options": [
        "Phase-based (cycle-syncing) strength training claims rest on scant, low-quality, and inconsistent evidence",
        "Only 44% of exercise studies verify cycle phase with actual hormone testing, so many rely on calendar counting alone",
        "Iron loss tied to menstrual bleeding is a well-supported, straightforward accounting concern",
        "Every claim about the menstrual cycle and training is equally well supported by current evidence",
        "A contradicting outlier study is automatically more trustworthy than a consistent body of higher-level reviews"
      ],
      "answers": [
        0,
        1,
        2
      ],
      "scoring": "all_or_nothing",
      "points": 1,
      "explanation": "The chapter grades claims individually rather than treating the whole topic as uniformly solid or uniformly weak: phase-based training claims and the underlying measurement problem are flagged as thin ground, while iron loss from bleeding is flagged as basic, solid accounting. Treating all claims as equally supported, or trusting an outlier over consistent higher-level reviews, is exactly the sloppy reasoning the chapter's decision frame is built to prevent."
    },
    {
      "id": "e3-c9-tf-1",
      "chapter": 9,
      "type": "tf",
      "q": "Iron status deserves more confidence as a genuine, evidence-based concern across the menstrual years than most cycle-phase-based training claims do, because menstrual bleeding predictably removes iron-containing blood on a recurring basis.",
      "answer": true,
      "points": 1,
      "explanation": "The chapter grades iron and the bleed as signal, a matter of basic, well-supported accounting, in contrast to the largely inconsistent, low-quality evidence behind phase-based training claims. That said, the chapter is equally clear that iron screening, interpretation, and supplementation decisions belong to a clinician, since too much iron carries real risk."
    },
    {
      "id": "e3-c9-mc-2",
      "chapter": 9,
      "type": "mc",
      "q": "Janse de Jonge and colleagues (2019) found that only 44% of exercise studies verified cycle phase using actual hormone testing. Why does the chapter treat this as a serious measurement problem?",
      "options": [
        "Because hormone testing is unnecessary once bleeding is tracked on a calendar",
        "Because calendar counting is always more accurate than hormone testing",
        "Because 44% is considered an unusually high and fully acceptable verification rate",
        "Because calendar-only counting can misclassify anovulatory or luteal-deficient cycles as normal ones, so a study built on assumed phases may be studying something other than what it claims"
      ],
      "answer": 3,
      "points": 1,
      "explanation": "Without hormone confirmation, a study assumes a participant ovulated and landed in the intended phase based on calendar counting alone, but anovulatory or luteal-deficient cycles can look ordinary on a calendar. That gap helps explain why the phase-based training literature looks busy yet fragile."
    },
    {
      "id": "e3-c10-mc-1",
      "chapter": 10,
      "type": "mc",
      "q": "Two people have visually similar amounts of midline separation (diastasis) after childbirth, but one has good force transmission through the area under load and the other does not. What does the chapter say this illustrates?",
      "options": [
        "Width alone is a complete and sufficient measure of diastasis severity",
        "Width alone is incomplete; tension, meaning force transmission through the midline under load, matters at least as much, and greater separation has been linked to altered pelvic floor muscle activity",
        "Diastasis is purely cosmetic and never relates to function elsewhere in the body",
        "Diastasis cannot be assessed by any method other than a visual measurement"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "The chapter frames diastasis as a whole-canister, system-level issue rather than a single measurement: separation width and functional tension under load are different things, and Fu and colleagues (2025) linked greater separation to altered pelvic floor muscle activity, tying the front and floor of the pressure canister together."
    },
    {
      "id": "e3-c10-fill-1",
      "chapter": 10,
      "type": "fill",
      "q": "Pregnancy shifts the balance of the linea alba's connective tissue toward type {{1}} collagen, which is thinner and more elastic and is prevalent during active remodeling; postpartum rebuild slowly restores type {{2}} collagen, which is denser, cross-linked, and gives tensile strength, over months.",
      "bank": [
        "III",
        "I",
        "II",
        "IV"
      ],
      "answers": {
        "1": "III",
        "2": "I"
      },
      "points": 2
    },
    {
      "id": "e3-c10-mc-2",
      "chapter": 10,
      "type": "mc",
      "q": "A postpartum person is medically cleared for exercise at six weeks and assumes their connective tissue has now fully rebuilt. What does the chapter say about this assumption?",
      "options": [
        "Six-week clearance means acute risks have settled, not that connective tissue has rebuilt tension; progression should instead be staged and guided by demonstrated readiness and symptoms rather than weeks elapsed",
        "Six-week clearance means the linea alba has fully returned to its pre-pregnancy collagen composition",
        "There is no meaningful tissue remodeling process after childbirth at all",
        "A universal ceiling exists for return to running at exactly six weeks"
      ],
      "answer": 0,
      "points": 1,
      "explanation": "The chapter is explicit that six-week clearance addresses acute medical risk, not the months-long collagen remodeling of the linea alba from a type III-dominant to a type I-dominant composition. Bo and colleagues (2017) frame progression as staged and readiness-guided, with a sensible floor of avoiding running before twelve weeks (Goom et al., 2019) rather than a fixed calendar date."
    }
  ]
};
