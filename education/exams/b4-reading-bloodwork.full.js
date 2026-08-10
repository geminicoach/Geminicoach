/* Gemini Education: B4 (Reading Your Bloodwork) FULL exam bank (all question types).
   PARKED until the portal thread upgrades exam.html to render matching / multi-select /
   word-bank / write-in. The live exam (b4-reading-bloodwork.js) is an interim MC+TF subset
   on the current engine. Swap this in when the new-type renderers + appeal grader ship.
   Schema: education/EXAM-SPEC.md. */
window.GEM_EXAM = {
  slug: "b4-reading-bloodwork",
  title: "Reading Your Bloodwork",
  contact_hours: 10, ceu_value: 1.0, pass_threshold: 80, placeholder: false,
  draw: { mc: 10, multi: 3, tf: 2, match: 2, fill: 2, free: 0 },
  shuffle: { questions: true, options: true },
  questions: [
    {
      "id": "b4-c1-mc-1",
      "chapter": 1,
      "type": "mc",
      "q": "A learner notices that low-density lipoprotein (LDL) cholesterol thresholds are printed on a lab report the same way an ordinary reference range is. What distinguishes a clinical decision limit like the LDL cholesterol threshold from a statistical reference interval?",
      "options": [
        "A decision limit is set by outcome research linking a value to future risk, while a reference interval marks the middle 95 percent of a health-screened population",
        "Both are calculated the same way, simply using different percentiles of the same population",
        "A decision limit is always narrower than a reference interval built for the same marker",
        "A reference interval reflects disease risk directly, while a decision limit reflects population statistics"
      ],
      "answer": 0,
      "points": 1,
      "explanation": "A reference interval is a statistical description built from where a screened, healthy population's values cluster, typically the middle 95 percent. A decision limit, such as the low-density lipoprotein (LDL) cholesterol treatment threshold, is instead set by outcome research showing where risk of a future event rises meaningfully."
    },
    {
      "id": "b4-c1-tf-1",
      "chapter": 1,
      "type": "tf",
      "q": "Because each individual test in a comprehensive panel is built so that about 95 percent of healthy people fall inside its reference range, ordering many separate markers on the same panel makes it less likely, not more likely, that a genuinely healthy person will have at least one flagged result.",
      "answer": false,
      "points": 1,
      "explanation": "The opposite is true. If each of several independent tests carries roughly a 95 percent chance of landing in range for a healthy person, the probability that every single one clears falls quickly as more tests are added, reaching roughly 60 percent by ten tests. A single isolated flag on a large panel is the statistically expected outcome."
    },
    {
      "id": "b4-c2-mc-1",
      "chapter": 2,
      "type": "mc",
      "q": "Two people each have a lab result that falls comfortably inside the printed reference interval for a marker. One value sits near the extreme edge of the interval, and the other sits near the crowded center of the distribution that built the interval. What is the most accurate way to think about these two 'in range' results?",
      "options": [
        "Both are equally unremarkable, since a reference interval treats every point inside it as an identical, undifferentiated pass",
        "Both results are correctly called in range, but the near-edge value sits in a sparser part of the healthy distribution and deserves attention, not alarm",
        "The near-edge value actually indicates disease because it is statistically close to a clinical decision limit",
        "Only the central value is a genuinely healthy reading; the near-edge value should be treated as a laboratory error"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "A reference interval is not flat inside its boundaries. Values cluster near the center and thin out toward the edges, so a near-edge result and a central result are both correctly labeled in range while sitting in very different neighborhoods of the underlying distribution."
    },
    {
      "id": "b4-c2-fill-1",
      "chapter": 2,
      "type": "fill",
      "q": "A marker with a low index of {{1}} varies little within one person across repeated draws but a great deal from one person to the next, which means that person's own historical results, tracked as a {{2}} over time, can be a sharper yardstick for interpreting a new value than the wide population range.",
      "bank": [
        "individuality",
        "trend",
        "population",
        "reservoir"
      ],
      "answers": {
        "1": "individuality",
        "2": "trend"
      },
      "points": 2
    },
    {
      "id": "b4-c3-mc-1",
      "chapter": 3,
      "type": "mc",
      "q": "A person's hemoglobin comes back low, and their mean corpuscular volume (MCV), the average size of a red blood cell, comes back well above 100 femtoliters, a pattern described as macrocytic. Which nutrient deficiencies does this size pattern most directly point toward?",
      "options": [
        "Iron deficiency",
        "Vitamin B12 and folate deficiency",
        "Vitamin D deficiency",
        "Calcium and magnesium deficiency"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "Mean corpuscular volume (MCV) sorts anemia by cell size. Small cells, microcytic, point toward iron deficiency. Large cells, macrocytic, point toward vitamin B12 or folate deficiency, because both nutrients are needed for the DNA synthesis that lets a dividing red cell reach its proper, smaller size."
    },
    {
      "id": "b4-c3-multi-1",
      "chapter": 3,
      "type": "multi",
      "q": "Which of the following are accurate statements about reading a complete blood count (CBC)? Select all that apply.",
      "options": [
        "Hemoglobin and hematocrit are concentrations that can be shifted by hydration status without any change in true red cell mass",
        "Mean corpuscular volume (MCV) sorts anemia into microcytic, normocytic, and macrocytic categories that point toward different likely causes",
        "Red cell distribution width (RDW) can rise early in a developing deficiency, before the average cell size (MCV) has drifted out of range",
        "A single reference range for hemoglobin applies equally well to a newborn, a child, and an older adult",
        "Dilutional pseudoanemia in endurance athletes typically resolves within a few days of reduced training load"
      ],
      "answers": [
        0,
        1,
        2,
        4
      ],
      "scoring": "all_or_nothing",
      "points": 1,
      "explanation": "Hemoglobin and hematocrit are concentrations, MCV sorts anemia by cell size, RDW can be an early-warning sign before MCV drifts out of range, and dilutional pseudoanemia typically resolves within days of reduced training. A single reference range does not apply equally across the life span, since hemoglobin shifts substantially with age and sex."
    },
    {
      "id": "b4-c4-mc-1",
      "chapter": 4,
      "type": "mc",
      "q": "A person's fasting glucose and hemoglobin A1c (HbA1c) both come back within the normal range year after year on their annual panel. What can still be happening underneath those reassuring numbers, and which marker best captures it?",
      "options": [
        "Nothing meaningful can be happening if both glucose and hemoglobin A1c are normal, since these are the most sensitive markers available",
        "Fasting insulin can be quietly rising for years as the pancreas compensates for developing insulin resistance, a pattern captured by the homeostatic model assessment of insulin resistance (HOMA-IR), well before glucose or hemoglobin A1c show any change",
        "Only fasting glucose can detect early metabolic dysfunction; hemoglobin A1c is not useful for early detection at all",
        "A normal glucose and hemoglobin A1c prove that a person's pancreas has never needed to secrete extra insulin"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "Research tracking people for years before a diabetes diagnosis found that insulin sensitivity declined and insulin secretion rose to compensate three to six years before diagnosis, well before glucose or hemoglobin A1c crossed a decision limit. A rising homeostatic model assessment of insulin resistance (HOMA-IR) can be the earliest honest signal on the panel."
    },
    {
      "id": "b4-c4-mc-2",
      "chapter": 4,
      "type": "mc",
      "q": "A well-muscled person who lifted heavy weights the day before a blood draw shows a mildly elevated creatinine and a correspondingly lower estimated glomerular filtration rate (eGFR) than usual. What is the most likely explanation?",
      "options": [
        "This is nearly always a sign of acute kidney injury and should be treated as a medical emergency",
        "Creatinine is a byproduct of muscle metabolism, and both high muscle mass and recent hard exercise can raise creatinine and lower the calculated estimated glomerular filtration rate (eGFR) without any true decline in kidney filtration",
        "The estimated glomerular filtration rate (eGFR) does not depend on creatinine at all, so exercise cannot affect it",
        "Only dehydration, never muscle mass or recent exercise, can meaningfully move a creatinine reading"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "Creatinine is a waste product of muscle metabolism, and the estimated glomerular filtration rate (eGFR) is calculated from creatinine, age, and sex. High muscle mass and a recent hard workout both raise creatinine and can lower the calculated eGFR without reflecting any true decline in filtration."
    },
    {
      "id": "b4-c4-fill-1",
      "chapter": 4,
      "type": "fill",
      "q": "Two common, non-disease reasons a person's creatinine can rise and their estimated glomerular filtration rate can appear to fall are high {{1}} mass and a recent hard {{2}} session, neither of which reflects a true decline in kidney filtration.",
      "bank": [
        "muscle",
        "workout",
        "kidney",
        "water"
      ],
      "answers": {
        "1": "muscle",
        "2": "workout"
      },
      "points": 2
    },
    {
      "id": "b4-c5-mc-1",
      "chapter": 5,
      "type": "mc",
      "q": "Two people have an identical low-density lipoprotein (LDL) cholesterol reading of 120 mg/dL. One carries a moderate number of large, cholesterol-rich particles; the other carries a much larger number of smaller, cholesterol-depleted particles. Why does this discordance matter for cardiovascular risk?",
      "options": [
        "It does not matter, because low-density lipoprotein (LDL) cholesterol mass is the only thing that can enter and damage an artery wall",
        "Each atherogenic particle carries one molecule of apolipoprotein B (apoB) regardless of how much cholesterol it holds, so the person with more particles may carry a greater atherogenic burden even though the low-density lipoprotein (LDL) cholesterol mass reading is identical",
        "Discordance only matters for triglycerides, never for low-density lipoprotein (LDL) cholesterol",
        "A higher particle count always means lower cardiovascular risk because the cholesterol is spread across more particles"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "It is the particle, not the cholesterol it carries, that can lodge in an artery wall, and each atherogenic particle carries exactly one apolipoprotein B (apoB) molecule. Non-HDL cholesterol or apoB can reveal a discordance that low-density lipoprotein (LDL) cholesterol mass alone cannot."
    },
    {
      "id": "b4-c5-multi-1",
      "chapter": 5,
      "type": "multi",
      "q": "Which of the following are accurate statements about the lipid panel? Select all that apply.",
      "options": [
        "Non-HDL cholesterol, total cholesterol minus HDL cholesterol, captures the atherogenic burden of multiple particle classes at once, not just LDL cholesterol",
        "Fasting is required for essentially every part of a standard lipid profile to be interpretable",
        "Triglycerides are the lipid marker most responsive to recent diet and alcohol intake, often within days",
        "A high triglyceride to HDL ratio can be a pattern suggestive of smaller, denser LDL particles and insulin resistance",
        "Raising HDL cholesterol with medication has been reliably shown to reduce cardiovascular events on its own"
      ],
      "answers": [
        0,
        2,
        3
      ],
      "scoring": "all_or_nothing",
      "points": 1,
      "explanation": "Non-HDL cholesterol captures VLDL, IDL, LDL, and lipoprotein(a) at once, triglycerides respond quickly to diet and alcohol, and a high triglyceride to HDL ratio is a pattern suggestive of denser LDL particles. Fasting is not routinely required, and drugs built specifically to raise HDL cholesterol have largely failed to reduce cardiovascular events."
    },
    {
      "id": "b4-c6-mc-1",
      "chapter": 6,
      "type": "mc",
      "q": "A recreational lifter's aspartate aminotransferase (AST) comes back elevated two days after an unusually heavy squat and deadlift session, while alanine aminotransferase (ALT) is only mildly elevated and the rest of the liver panel, including bilirubin and alkaline phosphatase, stays normal. What does the chapter identify as the most likely explanation?",
      "options": [
        "Aspartate aminotransferase (AST) is highly liver-specific, so this pattern almost certainly indicates early liver disease",
        "Aspartate aminotransferase (AST) is abundant in skeletal muscle as well as the liver, and unaccustomed, intense exercise can elevate it disproportionately to alanine aminotransferase (ALT) for up to a week, while liver-specific markers like bilirubin and alkaline phosphatase stay normal",
        "A normal bilirubin and alkaline phosphatase rule out any possible explanation involving muscle",
        "Alanine aminotransferase (ALT) and aspartate aminotransferase (AST) always rise and fall together in exact proportion, so this pattern must reflect a measurement error"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "Aspartate aminotransferase (AST) is abundant in skeletal muscle, so an unaccustomed workout can push it up disproportionately relative to the more liver-specific alanine aminotransferase (ALT). A fingerprint that favors muscle over liver is elevated aminotransferases sitting beside a normal bilirubin and alkaline phosphatase."
    },
    {
      "id": "b4-c6-tf-1",
      "chapter": 6,
      "type": "tf",
      "q": "Alanine aminotransferase (ALT) and aspartate aminotransferase (AST) are best understood as leakage markers reflecting recent cellular stress or damage, not as direct measures of how well the liver is currently functioning, which is why the phrase 'liver function test' is considered something of a misnomer for these two enzymes.",
      "answer": true,
      "points": 1,
      "explanation": "Alanine aminotransferase (ALT) and aspartate aminotransferase (AST) rise when stressed or damaged cells leak their contents into the blood. Markers like bilirubin, albumin, and clotting time come closer to reflecting what the liver is actually accomplishing on a given day."
    },
    {
      "id": "b4-c7-mc-1",
      "chapter": 7,
      "type": "mc",
      "q": "A runner's ferritin rises from 18 to 62 micrograms per liter between two draws, with the second draw taken while she was fighting a head cold. Why might this rise be misleading, and what additional marker should be checked before concluding her iron stores have recovered?",
      "options": [
        "Ferritin cannot be affected by anything except true iron status, so the rise definitely means her iron stores improved",
        "Ferritin is also an acute-phase reactant that rises with inflammation regardless of true iron stores, so C-reactive protein (CRP) should be checked to determine whether the rise reflects genuine iron repletion or an inflammation-driven inflation",
        "A head cold has no measurable effect on any blood marker, so the explanation must lie elsewhere",
        "Only a repeat hemoglobin, never C-reactive protein (CRP), can clarify what happened to her ferritin"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "Ferritin does double duty as an iron-storage marker and as an acute-phase reactant. A ferritin drawn during even a mild inflammatory episode can be substantially inflated, which is why C-reactive protein (CRP) should always be checked alongside it."
    },
    {
      "id": "b4-c7-match-1",
      "chapter": 7,
      "type": "match",
      "q": "Match each iron-status marker or concept to its correct description.",
      "pairs": [
        {
          "left": "Ferritin",
          "right": "Stores iron and also rises as an acute-phase reactant during inflammation"
        },
        {
          "left": "C-reactive protein (CRP)",
          "right": "General inflammation marker used to judge whether a ferritin result can be trusted at face value"
        },
        {
          "left": "Transferrin saturation (TSAT)",
          "right": "Percentage of iron transport capacity actually carrying iron; stays low across nearly every pattern of true iron trouble"
        },
        {
          "left": "Hepcidin",
          "right": "Liver-made hormone that traps iron in storage and slows its release during inflammation"
        }
      ],
      "points": 4
    },
    {
      "id": "b4-c8-mc-1",
      "chapter": 8,
      "type": "mc",
      "q": "A person's 25-hydroxyvitamin D (25(OH)D) reads 26 ng/mL in March and again 26 ng/mL in September, six months later, in a temperate climate. They interpret the matching numbers as proof their vitamin D status is stable. Why might this conclusion be wrong?",
      "options": [
        "Vitamin D levels are essentially fixed year-round and do not respond to sunlight exposure, so the numbers should always match",
        "The March value is likely still descending from a winter low while the September value is likely descending from a summer peak, meaning the two matching numbers may sit on opposite slopes of the same annual curve rather than reflecting a stable, unchanging status",
        "A matching number across two draws always proves that a supplementation regimen is working correctly",
        "25-hydroxyvitamin D (25(OH)D) cannot be meaningfully affected by season at any latitude"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "25-hydroxyvitamin D (25(OH)D) follows a well-documented seasonal curve, rising through spring and summer and falling through winter to a late-winter trough. Two draws landing on opposite slopes of that curve can produce matching numbers while representing very different trajectories."
    },
    {
      "id": "b4-c8-mc-2",
      "chapter": 8,
      "type": "mc",
      "q": "A person's serum vitamin B12 comes back at 285 pg/mL, technically within the normal range but in the zone the chapter describes as ambiguous. They also take a long-term acid-reducing medication known to reduce B12 absorption. What is the appropriate next step, and why might the standard serum B12 test be insufficient on its own?",
      "options": [
        "No further testing is needed, since any value inside the reference range definitively rules out a functional B12 shortage",
        "Methylmalonic acid (MMA) and homocysteine can be checked, because standard serum B12 combines an inactive buffer fraction with the active fraction, and a functional shortage can hide behind a technically normal total, especially in this grey zone",
        "Folic acid supplementation alone is always the correct first step, regardless of the underlying cause",
        "The grey zone described in the chapter applies only to people over age eighty"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "A standard serum B12 result combines an inactive buffer fraction and the active fraction cells actually use, and it can sit in a grey zone, roughly 200 to 350 pg/mL, where the number alone is least trustworthy. Methylmalonic acid (MMA) and homocysteine add real information in exactly this situation."
    },
    {
      "id": "b4-c9-mc-1",
      "chapter": 9,
      "type": "mc",
      "q": "A learner assumes that because thyroid-stimulating hormone (TSH) has 'stimulating' in its name, a rising TSH means the thyroid gland itself is producing more hormone. Why is this backwards, and what does a high TSH actually indicate?",
      "options": [
        "The assumption is correct; thyroid-stimulating hormone (TSH) and thyroid hormone output always rise and fall together",
        "Thyroid-stimulating hormone (TSH) is produced by the pituitary gland as a demand signal, and it rises specifically when the thyroid is falling short of producing enough hormone, meaning a high TSH points toward an underactive thyroid, not an overactive one",
        "Thyroid-stimulating hormone (TSH) is produced directly by the thyroid gland and simply reports its own hormone output",
        "A high thyroid-stimulating hormone (TSH) always means the thyroid is producing too much hormone"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "Thyroid-stimulating hormone (TSH) is the pituitary's request for more thyroid hormone, not the thyroid's own output. It rises when the thyroid is falling behind that request and falls when the thyroid has already more than met it."
    },
    {
      "id": "b4-c9-match-1",
      "chapter": 9,
      "type": "match",
      "q": "Match each thyroid or testosterone concept to its correct description.",
      "pairs": [
        {
          "left": "Thyroid-stimulating hormone (TSH)",
          "right": "Pituitary demand signal that rises when the thyroid is under-producing and falls when it is over-producing"
        },
        {
          "left": "Free thyroxine (free T4)",
          "right": "The unbound, biologically active fraction of the thyroid's main circulating hormone"
        },
        {
          "left": "Sex hormone-binding globulin (SHBG)",
          "right": "Carrier protein that locks testosterone away from tissues, reshaping what a total testosterone number means"
        },
        {
          "left": "Diurnal rhythm",
          "right": "The daily pattern responsible for testosterone typically peaking in early morning and declining by afternoon"
        }
      ],
      "points": 4
    },
    {
      "id": "b4-c9-free-1",
      "chapter": 9,
      "type": "free",
      "q": "A 22-year-old orders a direct-to-consumer panel after weeks of low energy and brain fog. The report shows a thyroid-stimulating hormone (TSH) of 0.7, comfortably inside the printed reference range of roughly 0.4 to 4.5, and a total testosterone that also clears the printed range, drawn at 4 p.m. He feels reassured and closes the report. Using the demand-signal logic of TSH, the packaging and timing issues that shape a total testosterone reading, and a role-neutral, educational frame, explain why his report is not necessarily telling him what he thinks it is, and state clearly where your explanation must stop and hand off to a clinician.",
      "model": "A green checkmark on this report answers only whether each number cleared a wide population floor, not whether the underlying systems are running at their best for this particular 22-year-old. His thyroid-stimulating hormone (TSH) of 0.7 is not itself a diagnosis of anything; it clears the floor of the reference range. But TSH is a demand signal, not a supply gauge, and it moves opposite to actual thyroid output: a low TSH points toward the overactive side of the axis, not the underactive side. Sitting at 0.7, well under the roughly 1 to 2 mid-range many healthy young adults show, this value is a reasonable prompt to look at free thyroxine (free T4) and free triiodothyronine (free T3) before assuming the flag closes the question, not a reason for alarm and not a reason for reassurance on its own. His testosterone carries a separate problem: packaging and timing. Roughly half of circulating testosterone is bound to sex hormone-binding globulin (SHBG) and functionally unavailable to cells, so a total number alone cannot say how much is bioavailable without knowing SHBG. And testosterone follows a daily rhythm, commonly declining twenty to twenty-five percent from an early-morning peak by mid-afternoon in a young man, so a 4 p.m. draw is being read close to its daily low point rather than his true baseline. The responsible next step is a repeat morning draw, ideally alongside SHBG, before treating this number as representative at all. What this explanation cannot do is tell him whether his fatigue and brain fog trace back to his thyroid axis, his testosterone, his sleep, or something else entirely. That judgment, weighing symptoms against correctly timed, repeated labs, belongs to a clinician who can take a full history, not to a self-ordered panel or a course chapter. The honest use of this reasoning is to help him ask sharper, more specific questions and to know when to repeat a test correctly, never to diagnose himself or start any supplement or hormone regimen on his own.",
      "key_points": [
        "TSH is a demand signal, not a supply gauge; a low TSH points toward the overactive side of the axis, not toward reassurance by default",
        "A TSH near the floor of a wide range still warrants checking free T4 and free T3 rather than being treated as a closed question",
        "Total testosterone is reshaped by SHBG (bound testosterone is unavailable to cells) and by the diurnal rhythm (afternoon draws run lower than morning draws)",
        "The correct next step is a repeat, correctly timed test, not a supplement or self-treatment",
        "Role-neutral boundary: explain the mechanisms and the right next test, but defer any diagnosis or treatment decision to a qualified clinician"
      ],
      "rubric": {
        "pass_threshold": 70,
        "points": [
          {
            "desc": "Correctly explains TSH as an inverse demand signal and why a low-normal value still warrants a closer look at free T4 and free T3",
            "weight": 30
          },
          {
            "desc": "Explains how SHBG and the diurnal rhythm can each make a total testosterone reading misleading on its own",
            "weight": 30
          },
          {
            "desc": "Recommends a correctly timed repeat test rather than self-treatment or supplementation",
            "weight": 20
          },
          {
            "desc": "Keeps an educational, role-neutral framing and defers diagnosis or treatment to a qualified clinician",
            "weight": 20
          }
        ]
      },
      "points": 5,
      "appeal": true
    },
    {
      "id": "b4-c10-mc-1",
      "chapter": 10,
      "type": "mc",
      "q": "On a single lab report, a person's aspartate aminotransferase (AST) is flagged high in red, while three unflagged values in ordinary black text, a low-normal transferrin saturation, a low-normal hemoglobin, and a ferritin near the edge of its range, sit quietly nearby. Which pattern deserves more attention, and why?",
      "options": [
        "Only the red-flagged aspartate aminotransferase (AST) deserves attention, since unflagged values in black text are by definition unremarkable",
        "The quiet cluster of iron-related values, because several unflagged values drifting the same direction together can form a more coherent, meaningful pattern than a single flagged value that may be fully explained by a known confounder like recent exercise",
        "Flagged and unflagged values always carry identical weight, so no distinction should be made between them",
        "Whichever value is printed first on the report automatically deserves the most attention"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "Reading a full panel means downgrading a loud flag that a known confounder fully explains, and upgrading a quiet cluster of unflagged values that are drifting the same direction together. Three quiet, coherent values can outweigh one loud, fully explained flag."
    },
    {
      "id": "b4-c10-multi-1",
      "chapter": 10,
      "type": "multi",
      "q": "Which of the following are among the four moves the chapter recommends running on a notable value when reading a full panel? Select all that apply.",
      "options": [
        "Position within its own reference interval",
        "The correct age band and life stage",
        "Whether the boundary is a reference interval or a clinical decision limit",
        "Whether the value was printed in red or black text",
        "Plausible confounders such as recent exercise, hydration, or time of draw"
      ],
      "answers": [
        0,
        1,
        2,
        4
      ],
      "scoring": "all_or_nothing",
      "points": 1,
      "explanation": "The four moves are position within the interval, the correct age band and life stage, reference interval versus clinical decision limit, and plausible confounders. Whether a value happens to be printed in red or black text is a formatting choice, not a diagnostic input."
    },
    {
      "id": "b4-c10-free-1",
      "chapter": 10,
      "type": "free",
      "q": "Vera, a 47-year-old night-shift nurse, opens her annual panel and sees four values flagged in red: a low ferritin, a high aspartate aminotransferase (AST), a high thyroid-stimulating hormone (TSH), and a low vitamin D. A coworker tells her the AST means her liver needs rest; her sister suggests starting an iron supplement because of the ferritin. Using the four-move framework (position, age band, reference interval versus decision limit, confounders) and the cross-checks from this course, explain in an educational, role-neutral way how a trained reader would approach her page differently from her coworker and sister, and state clearly where that reading must stop and hand off to a clinician.",
      "model": "A trained reader would resist reacting to any one red flag before scanning the whole page, because meaning lives in the relationships between markers, not in which line happens to be printed in red. The aspartate aminotransferase (AST) flag, cross-checked against a normal gamma-glutamyl transferase (GGT) and bilirubin and a heavy leg workout roughly two days before the draw, fits the well-documented pattern of exercise-induced muscle leakage rather than liver injury; it needs a note in her chart, not a liver cleanse. The thyroid-stimulating hormone (TSH) flag needs its own confounder: Vera's draw happened at a clock time that reads as morning but landed right after a night shift, meaning her circadian phase was likely closer to the end of a waking day than its start, which is exactly the kind of timing artifact that calls for a standardized recheck rather than an immediate verdict about her thyroid. The ferritin flag deserves the opposite adjustment from what her sister suggested. Taken alone it looks like a small, forgettable flag, but cross-checked against a normal C-reactive protein (CRP), meaning inflammation is not propping up or masking the number, and a low-normal transferrin saturation and hemoglobin drifting the same direction, it becomes a coherent, confounder-resistant pattern worth raising with a clinician before anyone starts supplementing. Starting iron on her sister's advice, without knowing whether iron is even the right next step, is precisely the self-treatment this course has warned against. The vitamin D result has a plausible benign explanation, limited midday sun on a night-shift schedule, but it still deserves a conversation about bone health and appropriate dosing, since correcting a genuinely low level is well supported while chasing a higher number is not. What this reading cannot do, and should not try to do, is diagnose Vera with anything or recommend a specific treatment. Its entire value is producing a precise, sourced set of questions, whether the iron cluster warrants further testing, whether the TSH should be rechecked under standardized conditions, and whether vitamin D and bone health deserve a dosing conversation, for Vera to bring to a qualified clinician, who is the only one positioned to weigh her full history and decide what happens next.",
      "key_points": [
        "Reads the whole page rather than reacting to whichever value is printed in red",
        "Cross-checks AST against GGT, bilirubin, and recent exercise to identify a muscle-not-liver pattern",
        "Recognizes the TSH draw as confounded by night-shift circadian timing and recommends a standardized recheck",
        "Upgrades the quiet ferritin, transferrin saturation, and hemoglobin cluster as coherent and worth a clinician conversation, explicitly rejecting self-treatment with iron",
        "Role-neutral boundary: produces specific questions for a clinician rather than a diagnosis or a treatment recommendation"
      ],
      "rubric": {
        "pass_threshold": 70,
        "points": [
          {
            "desc": "Applies the four-move framework (position, age band, reference interval versus decision limit, confounders) rather than reacting to red flags alone",
            "weight": 25
          },
          {
            "desc": "Correctly cross-checks AST against GGT/bilirubin/exercise and TSH against draw timing and shift-work circadian misalignment",
            "weight": 25
          },
          {
            "desc": "Recognizes the ferritin/transferrin saturation/hemoglobin cluster as a coherent pattern worth escalating, and explicitly rejects self-treatment with iron",
            "weight": 25
          },
          {
            "desc": "Keeps an educational, role-neutral framing and produces clinician-directed questions rather than a diagnosis or treatment plan",
            "weight": 25
          }
        ]
      },
      "points": 5,
      "appeal": true
    }
  ]
};
