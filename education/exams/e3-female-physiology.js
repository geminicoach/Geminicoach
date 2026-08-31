/* Gemini Education: E3 (Female Physiology, the Cycle & Reproductive Health) FINAL EXAM, interim live version.
   Current exam.html renders MC and free-response only, so this ships 22 MC + 6 true/false
   (as 2-option MC), drawing 20 per attempt, options shuffled, 80% to pass. 28 in the pool.
   Full bank (matching, word-bank, multi-select, write-ins) is in e3-female-physiology.full.js. */
window.GEM_EXAM = {
  slug: "e3-female-physiology",
  title: "Female Physiology, the Cycle & Reproductive Health",
  contact_hours: 10, ceu_value: 1.0, pass_threshold: 80, draw_mc: 20, placeholder: false,
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
      "type": "mc",
      "q": "According to the chapter, when a topic has not been studied in women, that absence itself counts as evidence that the topic is not relevant to female physiology.",
      "options": [
        "True",
        "False"
      ],
      "answer": 1,
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
      "id": "e3-c2-mc-2",
      "chapter": 2,
      "type": "mc",
      "q": "For most of the cycle, moderate estradiol restrains GnRH and LH release. Near the cycle's pivot, that relationship flips. What triggers the flip from negative to positive feedback?",
      "options": [
        "A sudden drop in progesterone",
        "A single LH pulse detected directly by the ovary",
        "Neurokinin B acting alone, without any involvement from kisspeptin",
        "Estradiol sustained above roughly 200 pg/mL for about 50 hours, which switches kisspeptin neurons from restraining to provoking the axis"
      ],
      "answer": 3,
      "points": 1,
      "explanation": "The switch is threshold- and duration-dependent: a sustained high estradiol signal, not just a high single value, flips kisspeptin neurons from negative to positive feedback and provokes the LH surge. Progesterone, by contrast, reinforces restraint and slows tempo further, which is a luteal-phase event, not the pivot itself."
    },
    {
      "id": "e3-c2-tf-1",
      "chapter": 2,
      "type": "mc",
      "q": "Because the pituitary reads the tempo of gonadotropin-releasing hormone (GnRH) pulses rather than just its presence, continuous, non-pulsed GnRH actually desensitizes the pituitary within days instead of producing a stronger hormonal response.",
      "options": [
        "True",
        "False"
      ],
      "answer": 0,
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
      "id": "e3-c3-mc-2",
      "chapter": 3,
      "type": "mc",
      "q": "A person gets a positive result on an at-home LH test strip. What does the chapter say this result actually establishes?",
      "options": [
        "It predicts that the LH surge has occurred and that ovulation is likely in the next day or so; it is not proof that an egg was actually released",
        "It proves that ovulation has already happened and fertilization is now possible",
        "It measures progesterone directly, confirming that the luteal phase has already begun",
        "It has no established relationship to ovulation timing at all"
      ],
      "answer": 0,
      "points": 1,
      "explanation": "A positive LH strip detects the surge itself, a prediction that ovulation will likely follow about a day later, not proof that release actually occurred. Confirmed ovulation instead comes from a sustained luteal-phase progesterone rise, most often inferred indirectly from a basal body temperature shift."
    },
    {
      "id": "e3-c3-tf-1",
      "chapter": 3,
      "type": "mc",
      "q": "Research comparing cycles of different lengths shows that the luteal phase varies in duration just as much as the follicular phase does.",
      "options": [
        "True",
        "False"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "The two phases are asymmetric rather than equally variable. Bull and colleagues (2019) found the follicular phase stretched by up to 66% in longer cycles while the luteal phase moved only about 5%, and Henry and colleagues (2024) found roughly 5.2 days of within-person follicular variability versus about 3.0 days luteal."
    },
    {
      "id": "e3-c4-mc-1",
      "chapter": 4,
      "type": "mc",
      "q": "The chapter describes three self-observed fertility signs that relate to ovulation on different timelines. Which correctly matches each sign to its timing role?",
      "options": [
        "Basal body temperature forecasts ahead of time; cervical mucus confirms after the fact",
        "The LH test strip confirms after the fact; basal body temperature predicts imminently",
        "Cervical mucus forecasts ahead of time as estrogen rises, the LH strip predicts imminently by detecting the surge, and basal body temperature confirms after the fact once progesterone raises resting temperature",
        "All three signs measure exactly the same hormone at exactly the same point in the cycle"
      ],
      "answer": 2,
      "points": 1,
      "explanation": "Each sign sits on a different timeline: rising estrogen produces forecasting mucus changes before ovulation, the LH strip predicts an imminent surge, and the post-ovulation temperature shift driven by progesterone only confirms after the fact. Reading them together, rather than any single one, gives the fuller picture."
    },
    {
      "id": "e3-c4-mc-2",
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
      "id": "e3-c4-tf-1",
      "chapter": 4,
      "type": "mc",
      "q": "A cycle that falls within the everyday population band of roughly 26 to 35 days can, on that basis alone, be assumed to have included ovulation.",
      "options": [
        "True",
        "False"
      ],
      "answer": 1,
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
      "id": "e3-c5-mc-2",
      "chapter": 5,
      "type": "mc",
      "q": "The hormonal IUD and the copper IUD are often grouped together as IUDs, but the chapter stresses they work by opposite logic. How do they differ?",
      "options": [
        "Both suppress the entire hypothalamic-pituitary-ovarian axis and stop ovulation",
        "The hormonal IUD acts mainly locally on the endometrium, with minimal systemic ovarian suppression, so many users still ovulate; the copper IUD is non-hormonal, prevents fertilization, and leaves the axis, ovulation, and true periods unchanged",
        "The copper IUD works by systemic hormone suppression, while the hormonal IUD has no effect on the endometrium at all",
        "Neither device has any measurable effect on bleeding patterns"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "The hormonal IUD's main action is local, endometrial atrophy and thickened mucus, so systemic ovarian suppression is minimal and many users continue to ovulate while barely bleeding. The copper IUD carries no hormones at all; it is spermicidal and leaves the whole axis and true menstrual periods running, though bleeding is often heavier."
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
      "id": "e3-c6-mc-2",
      "chapter": 6,
      "type": "mc",
      "q": "Two lab patterns look superficially similar (an absent cycle, low estradiol) but point to opposite underlying problems. Which pairing is correct?",
      "options": [
        "Primary ovarian insufficiency shows high FSH with low estradiol (the ovary is not responding), while functional hypothalamic amenorrhea shows low LH pulsatility with low estradiol (the brain has powered the axis down)",
        "Both conditions always show identical FSH and LH values",
        "Primary ovarian insufficiency shows low FSH, while functional hypothalamic amenorrhea shows high FSH",
        "Neither condition affects FSH or LH in any measurable way"
      ],
      "answer": 0,
      "points": 1,
      "explanation": "In primary ovarian insufficiency, the ovary cannot respond, so FSH rises as the pituitary tries harder; in functional hypothalamic amenorrhea, the brain itself throttles the axis, so LH pulsatility and downstream estradiol fall together. The two conditions can look alike from the outside, which is exactly why lab evaluation, not observation, is what distinguishes them."
    },
    {
      "id": "e3-c6-tf-1",
      "chapter": 6,
      "type": "mc",
      "q": "Amenorrhea is properly treated as a diagnosis of exclusion, meaning pathological causes are ruled out with labs, and imaging if needed, before a functional or medically induced explanation is accepted.",
      "options": [
        "True",
        "False"
      ],
      "answer": 0,
      "points": 1,
      "explanation": "Because functional and pathological amenorrhea can look identical from the outside, from missed periods to normal body weight, the chapter frames a proper workup as a process of ruling causes out with objective testing, not a process of pattern-matching by appearance."
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
      "id": "e3-c7-mc-2",
      "chapter": 7,
      "type": "mc",
      "q": "A coach treats a training athlete's missed periods, recurring minor illnesses, and a nagging bone injury as three unrelated annoyances to manage separately. What does the chapter's see the set, not the symptom framing suggest instead?",
      "options": [
        "The three problems are unrelated and should be addressed by three separate specialists who never communicate",
        "Only the bone injury deserves attention; the other two are cosmetic",
        "Missed periods, illness, and injury are always coincidental and never share a common cause",
        "A quiet cycle, frequent illness, and a nagging bone injury may be one story rather than four, since low energy availability can downshift the menstrual, immune, and skeletal systems together through a single shared mechanism"
      ],
      "answer": 3,
      "points": 1,
      "explanation": "Relative Energy Deficiency in Sport is described as one cause with effects across many systems at once. Reading a cluster of seemingly separate symptoms together, rather than treating each in isolation, is the skill the chapter asks a learner to build, while leaving the actual clinical workup to trained professionals."
    },
    {
      "id": "e3-c7-mc-3",
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
      "id": "e3-c9-tf-1",
      "chapter": 9,
      "type": "mc",
      "q": "Iron status deserves more confidence as a genuine, evidence-based concern across the menstrual years than most cycle-phase-based training claims do, because menstrual bleeding predictably removes iron-containing blood on a recurring basis.",
      "options": [
        "True",
        "False"
      ],
      "answer": 0,
      "points": 1,
      "explanation": "The chapter grades iron and the bleed as signal, a matter of basic, well-supported accounting, in contrast to the largely inconsistent, low-quality evidence behind phase-based training claims. That said, the chapter is equally clear that iron screening, interpretation, and supplementation decisions belong to a clinician, since too much iron carries real risk."
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
