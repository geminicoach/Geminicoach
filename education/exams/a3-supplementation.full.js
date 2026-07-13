/* Gemini Education: A3 FULL exam bank (all types). PARKED until portal thread upgrades exam.html. Schema: education/EXAM-SPEC.md. */
window.GEM_EXAM = {
  slug: "a3-supplementation", title: "Supplementation: When, Why & What",
  contact_hours: 8, ceu_value: 0.8, pass_threshold: 80, placeholder: false,
  draw: { mc: 12, multi: 4, tf: 4, match: 2, fill: 3, free: 0 }, shuffle: { questions: true, options: true },
  questions: [
    {
      "id": "a3-c1-mc-1",
      "chapter": 1,
      "type": "mc",
      "q": "A client with no identified shortfall asks whether they should start a general daily supplement 'just to be safe.' Applying the Gap Principle, what default does the framework set?",
      "options": [
        "Probably take it, since most supplements rarely cause harm",
        "Probably skip it, unless a real shortfall exists that food cannot close more reliably first",
        "Always run a full lab panel before making any decision",
        "Take a baseline multivitamin as a hedge regardless of status"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "The Gap Principle flips the default from 'probably take it' to 'probably skip it': the bottle is the fallback, not the starting point."
    },
    {
      "id": "a3-c1-mc-2",
      "chapter": 1,
      "type": "mc",
      "q": "A marketer tells a client whose status is completely normal that they are 'leaving performance on the table.' Which reading of the claim is this, and what is its usual tell?",
      "options": [
        "Deficiency, because correcting a true clinical shortfall is treatment",
        "Insufficiency, because it reflects a population odds nudge below a threshold",
        "Optimized, because normal status is repackaged as a gap and it usually has no anchored number",
        "Manufactured, because there is a defined requirement the client is short of"
      ],
      "answer": 2,
      "points": 1,
      "explanation": "The 'optimized' framing pitches normal status as underperformance and typically arrives with no anchored reference number."
    },
    {
      "id": "a3-c1-multi-1",
      "chapter": 1,
      "type": "multi",
      "q": "The chapter treats 'food first' as an evidence position, not a slogan. Which statements are reasons it gives to reach for food before a bottle?",
      "options": [
        "Whole foods deliver a matrix of fiber, protein, and minerals that shapes absorption",
        "Fortified staples already close many population gaps quietly",
        "Isolated extracts often fail to reproduce whole-food benefits in trials",
        "Supplements are always contaminated and therefore unsafe",
        "The bottle should be the starting point and food the fallback"
      ],
      "answers": [
        0,
        1,
        2
      ],
      "scoring": "all_or_nothing",
      "points": 1,
      "explanation": "Food first rests on the food matrix, quiet fortification, and the trial record on isolated extracts. Blanket contamination claims and reversing the bottle-food order are not part of it."
    },
    {
      "id": "a3-c1-fill-1",
      "chapter": 1,
      "type": "fill",
      "q": "A {{1}} decision uses a low dose to hedge a common shortfall shared by your group, while a {{2}} decision uses an adequate dose for a confirmed individual problem.",
      "bank": [
        "baseline",
        "targeted",
        "manufactured",
        "optimized"
      ],
      "answers": {
        "1": "baseline",
        "2": "targeted"
      },
      "points": 2
    },
    {
      "id": "a3-c1-free-1",
      "chapter": 1,
      "type": "free",
      "q": "A client says they take eight different supplements because 'it can't hurt.' Using the chapter's framework, explain why that reasoning is usually wrong and outline how you would walk them through the gap question while staying within a coaching, non-clinical role.",
      "model": "The phrase 'it can't hurt' is the signature of having skipped the gap question. Nutrients have upper limits, and overlapping products can stack past them, so more is not automatically safer; every supplement also carries a cost in money and attention. I would reverse the backward pattern (hear, buy, then invent a reason) and run the gates: is there a real gap, and is it a deficiency, insufficiency, or a manufactured claim; can the client's actual diet close it (food first); is this a baseline or targeted decision; and is the compound, dose, and ceiling supported. I would note the six inputs that shape any answer (diet, sun, training load, life stage, medications, measured status). I would stay in my role: I do not diagnose, prescribe, or treat, and a suspected deficiency, alarm symptoms, or a drug-nutrient interaction is a reason to refer to a qualified clinician.",
      "key_points": [
        "'It can't hurt' signals the gap question was skipped",
        "Nutrients have upper limits and overlapping products can stack past them",
        "Every supplement carries a cost in money and attention",
        "Walk the gates: gap type, food first, baseline vs targeted, evidence and dose",
        "Name the six inputs that decide any answer",
        "Stay role-neutral: refer suspected deficiency, alarm symptoms, or interactions to a clinician"
      ],
      "rubric": {
        "pass_threshold": 70,
        "points": [
          {
            "desc": "Explains why 'it can't hurt' is usually wrong (ceilings, stacking, cost)",
            "weight": 30
          },
          {
            "desc": "Applies the gap gates including food first and baseline vs targeted",
            "weight": 30
          },
          {
            "desc": "References the six decision inputs or evidence-and-dose gate",
            "weight": 20
          },
          {
            "desc": "Holds a non-clinical role and refers appropriately",
            "weight": 20
          }
        ]
      },
      "points": 5,
      "appeal": true
    },
    {
      "id": "a3-c2-mc-1",
      "chapter": 2,
      "type": "mc",
      "q": "A supplement is advertised as 'backed by science.' According to the chapter's operating rule, what must be specified before that phrase carries any weight?",
      "options": [
        "The brand's reputation and years on the market",
        "The named outcome, in whom, and how strong the evidence is",
        "Only the daily dose printed on the label",
        "Whether the pill is third-party tested"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "Strength of evidence is a property of a supplement paired with a named outcome, in a named population, at a stated strength, never of the pill alone."
    },
    {
      "id": "a3-c2-mc-2",
      "chapter": 2,
      "type": "mc",
      "q": "The VITAL trial is often cited in vitamin D marketing. What did it actually show in healthy adults?",
      "options": [
        "It raised blood levels but did not cut total cancer or major cardiovascular events",
        "It cut total cancer substantially across the healthy population",
        "It demonstrated that 4000 IU per day is the ideal maintenance dose",
        "It proved routine screening changes management for every adult"
      ],
      "answer": 0,
      "points": 1,
      "explanation": "VITAL raised serum levels but did not reduce total cancer or major cardiovascular events in healthy adults, which is why vitamin D is weak as a disease-prevention pill for that group."
    },
    {
      "id": "a3-c2-multi-1",
      "chapter": 2,
      "type": "multi",
      "q": "A client wants to choose an omega-3 product. Which statements match the chapter's guidance on source, dose, and evidence?",
      "options": [
        "EPA and DHA are the active marine forms, available from fish or algae",
        "Algae-sourced omega-3 is bioequivalent to fish oil",
        "ALA from flax converts to EPA and DHA poorly, in the low single digits",
        "Higher multi-gram doses are automatically safer",
        "The evidence is strongest for lowering triglycerides"
      ],
      "answers": [
        0,
        1,
        2,
        4
      ],
      "scoring": "all_or_nothing",
      "points": 1,
      "explanation": "EPA/DHA are the active forms, algae is bioequivalent, ALA converts poorly, and the strong signal is triglyceride lowering. Higher doses carry atrial-fibrillation and bleeding signals, so more is not automatically safer."
    },
    {
      "id": "a3-c2-tf-1",
      "chapter": 2,
      "type": "tf",
      "q": "A creatine loading protocol (about 20 g per day for 5 to 7 days) produces larger final gains than simply starting at 3 to 5 g per day, so loading is better rather than merely faster.",
      "answer": false,
      "points": 1,
      "explanation": "Loading only saturates the muscle sooner. The final result is the same, so loading is faster, not better."
    },
    {
      "id": "a3-c2-match-1",
      "chapter": 2,
      "type": "match",
      "q": "Match each short-list supplement to its best-evidenced primary use.",
      "pairs": [
        {
          "left": "Creatine",
          "right": "Best-evidenced ergogenic for strength and power at 3 to 5 g/day monohydrate"
        },
        {
          "left": "Caffeine",
          "right": "Endurance and alertness at 3 to 6 mg/kg about 60 minutes before"
        },
        {
          "left": "Omega-3 (EPA/DHA)",
          "right": "Lowering triglycerides, dose-dependent"
        },
        {
          "left": "Vitamin D",
          "right": "Repletion in defined groups such as children, adults 75+, pregnancy, prediabetes"
        },
        {
          "left": "Protein",
          "right": "A convenient way to hit a daily intake target that plateaus near 1.6 g/kg"
        }
      ],
      "points": 5
    },
    {
      "id": "a3-c3-mc-1",
      "chapter": 3,
      "type": "mc",
      "q": "A client already eating well asks whether adding more protein scoops will keep increasing training benefit. Near what intake does the added-protein training benefit plateau?",
      "options": [
        "About 0.8 g/kg/day",
        "About 1.2 g/kg/day",
        "About 1.62 g/kg/day",
        "About 3.0 g/kg/day"
      ],
      "answer": 2,
      "points": 1,
      "explanation": "Training benefit of added protein plateaus near 1.62 g/kg/day; above it, extra scoops are expensive redundancy."
    },
    {
      "id": "a3-c3-mc-2",
      "chapter": 3,
      "type": "mc",
      "q": "A well-fed client eating ample complete protein asks about BCAAs and glutamine. What does the mechanistic screen conclude before any trial is even consulted?",
      "options": [
        "They are essential add-ons required for muscle growth",
        "They are redundant by definition, because complete protein already supplies them",
        "They only work when stacked with creatine",
        "They burn fat effectively during an energy surplus"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "BCAAs supply only 3 of 9 essential amino acids and glutamine fills a pool a well-fed person never empties, so both are redundant when complete protein intake is adequate."
    },
    {
      "id": "a3-c3-multi-1",
      "chapter": 3,
      "type": "multi",
      "q": "Which statements about creatine are supported by the chapter?",
      "options": [
        "It does not damage healthy kidneys, with doses up to 30 g/day studied for years",
        "It is not a steroid; it is an amino-acid derivative you already eat",
        "It reliably causes cramps and the hair-loss claim is well replicated",
        "The early water gain sits inside muscle cells and is a real benefit",
        "Plain monohydrate is the well-evidenced form and premium blends do not beat it"
      ],
      "answers": [
        0,
        1,
        3,
        4
      ],
      "scoring": "all_or_nothing",
      "points": 1,
      "explanation": "Creatine is safe for healthy kidneys, is not a steroid, drives intracellular water gain, and works best as plain monohydrate. The cramp claim does not hold up and the hair-loss claim is unreplicated."
    },
    {
      "id": "a3-c3-tf-1",
      "chapter": 3,
      "type": "tf",
      "q": "Because a compound has strong evidence for a real effect, its label cannot also carry absurd marketing claims, since effectiveness and false claims are opposites.",
      "answer": false,
      "points": 1,
      "explanation": "Strong evidence and absurd marketing can live on the same label for the same compound at the same time. Effectiveness and false claims are not opposites."
    },
    {
      "id": "a3-c3-fill-1",
      "chapter": 3,
      "type": "fill",
      "q": "The performance range for caffeine is about {{1}} mg/kg taken roughly an hour before effort; above {{2}} mg/kg you mostly get jitters, not more performance.",
      "bank": [
        "3 to 6",
        "6",
        "1 to 2",
        "10"
      ],
      "answers": {
        "1": "3 to 6",
        "2": "6"
      },
      "points": 2
    },
    {
      "id": "a3-c4-mc-1",
      "chapter": 4,
      "type": "mc",
      "q": "Iron, B12, and vitamin D are 'measure first' nutrients. Why is creatine treated as 'just try it' instead?",
      "options": [
        "It has no usable biomarker of any kind",
        "Its excess is essentially harmless, so it lacks the asymmetry-of-consequence criterion",
        "Nobody can predict in advance who might respond",
        "It is a food rather than a supplement"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "Measure-first status needs asymmetry of consequence, nameable risk groups, and a real biomarker. Creatine's harmless excess breaks the first criterion, so trying it beats testing it."
    },
    {
      "id": "a3-c4-mc-2",
      "chapter": 4,
      "type": "mc",
      "q": "A single vitamin D result hugs the bottom of the lab's reference range. How does the chapter frame that value?",
      "options": [
        "It proves deficiency and calls for immediate high-dose treatment",
        "The reference range is a consequence-anchored decision limit, so the value is decisive",
        "Any 'optimal' target attached to a product for sale can be trusted here",
        "A reference range describes what is common, not what is good for you, so a single boundary-hugging value is weak evidence"
      ],
      "answer": 3,
      "points": 1,
      "explanation": "A reference range is the statistical middle 95%, answering 'is this common' rather than 'is this good for you.' A boundary-hugging single value, on a method- and population-specific range, is weak evidence."
    },
    {
      "id": "a3-c4-tf-1",
      "chapter": 4,
      "type": "tf",
      "q": "Because iron stores drain before anemia appears, ferritin can fall while a complete blood count still reads normal, so a normal CBC does not rule out low iron.",
      "answer": true,
      "points": 1,
      "explanation": "Stores such as ferritin deplete first, so a normal CBC can look fine while the tank runs low. This is why ferritin is the first-line marker, read in context."
    },
    {
      "id": "a3-c4-match-1",
      "chapter": 4,
      "type": "match",
      "q": "Match each nutrient status question to the more honest or recommended marker.",
      "pairs": [
        {
          "left": "Iron status",
          "right": "Ferritin first-line, paired with transferrin saturation"
        },
        {
          "left": "B12 status",
          "right": "Holo-TC and MMA, since total serum B12 can mislead"
        },
        {
          "left": "Vitamin D status",
          "right": "Serum 25(OH)D"
        },
        {
          "left": "Iron overload risk",
          "right": "Screen for undiagnosed hemochromatosis before loading blind"
        }
      ],
      "points": 4
    },
    {
      "id": "a3-c4-fill-1",
      "chapter": 4,
      "type": "fill",
      "q": "Before ordering a test, the flow asks whether you are in a nameable {{1}} group and whether a result would change {{2}}; if not, the test is not earning its cost.",
      "bank": [
        "risk",
        "what you do",
        "optimal",
        "dose"
      ],
      "answers": {
        "1": "risk",
        "2": "what you do"
      },
      "points": 2
    },
    {
      "id": "a3-c5-mc-1",
      "chapter": 5,
      "type": "mc",
      "q": "A client recovering from a course of antibiotics shows you a probiotic labeled \"50 billion CFU, 12 strains, clinically studied\" and asks if it will prevent the diarrhea she had last time. What is the best reasoning to offer?",
      "options": [
        "The high CFU count and strain number make it a strong, evidence-based choice for any gut problem",
        "Benefit lives at the strain-and-outcome level, so look for a named strain such as S. boulardii or L. rhamnosus GG shown at a matching dose for antibiotic-associated diarrhea",
        "There is a class effect for probiotics, so any product on the shelf will lower her risk",
        "The phrase \"clinically studied\" confirms this specific blend works for her specific symptom"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "Probiotic effects are strain-and-outcome specific with no class effect. A rational purchase needs a named strain with an evidenced outcome at a matching dose. High CFU counts and long strain lists are mostly theater, and \"clinically studied\" usually refers to some strain in some population, not this blend for her symptom."
    },
    {
      "id": "a3-c5-mc-2",
      "chapter": 5,
      "type": "mc",
      "q": "A client jumped from about 12 g to 30 g of fiber in two days and now has bloating and cramping. Which interpretation is most accurate?",
      "options": [
        "The fiber product is defective and she should switch brands",
        "She is intolerant to fiber and should stop and rely on a supplement instead",
        "This is usually a rate problem, not a fiber problem: ramp up gradually over weeks with water alongside, and fermentation gas is normal",
        "Only insoluble fiber causes this, so she should eliminate it entirely"
      ],
      "answer": 2,
      "points": 1,
      "explanation": "Fermentation makes gas, which is normal rather than a malfunction. Ramping too fast outruns the microbes and causes bloating and cramping. Going from roughly 12 to 28 g over a month is comfortable; doing it in two days is not. The fix is a gradual increase with added water."
    },
    {
      "id": "a3-c5-multi-1",
      "chapter": 5,
      "type": "multi",
      "q": "Based on the chapter, which statements about probiotics are true? Select all that apply.",
      "options": [
        "Benefit lives at the strain level, not at the genus or the \"probiotics\" category",
        "A high total CFU count alone is enough to prove a product will work",
        "S. boulardii and L. rhamnosus GG have evidence for antibiotic-associated diarrhea",
        "Most strains permanently colonize the gut in essentially everyone who takes them",
        "A rational purchase needs a named strain, an evidenced outcome, and a matching dose"
      ],
      "answers": [
        0,
        2,
        4
      ],
      "scoring": "all_or_nothing",
      "points": 1,
      "explanation": "Effects are strain-and-outcome specific, so genus, species, and CFU counts alone prove nothing. Specific strains such as S. boulardii and L. rhamnosus GG have evidence for antibiotic-associated diarrhea, and a rational buy requires a named strain, an evidenced outcome, and a matching dose. Most strains merely pass through, and colonization varies by individual gut."
    },
    {
      "id": "a3-c5-match-1",
      "chapter": 5,
      "type": "match",
      "q": "Match each gut-related product or term to its correct description.",
      "pairs": [
        {
          "left": "Fiber",
          "right": "Best-supported gut intervention, with dose-response links to lower mortality"
        },
        {
          "left": "S. boulardii",
          "right": "A strain with evidence for antibiotic-associated diarrhea"
        },
        {
          "left": "PERT",
          "right": "Prescribed enzyme therapy for exocrine pancreatic insufficiency"
        },
        {
          "left": "Prebiotic",
          "right": "Food for the microbes you already carry, not a dose of new ones"
        },
        {
          "left": "Butyrate",
          "right": "Short-chain fatty acid that fuels the colon lining cells"
        }
      ],
      "points": 5
    },
    {
      "id": "a3-c6-mc-1",
      "chapter": 6,
      "type": "mc",
      "q": "A pre-workout lists \"Energy Matrix 2,000 mg\" with six ingredients under that single total, and caffeine appears last in the list. What is the best interpretation?",
      "options": [
        "Caffeine is the largest component because it is the marquee active ingredient",
        "The individual amounts must be disclosed somewhere else on the panel",
        "Ingredients in a blend are listed by descending mass, so the impressive last-listed ingredient is likely the smallest; treat the hidden dose as absent",
        "The 2,000 mg total guarantees an effective dose of each ingredient inside it"
      ],
      "answer": 2,
      "points": 1,
      "explanation": "A proprietary blend gives one total weight and hides individual amounts, which is legal under DSHEA. Ingredients are listed in descending order of mass, so a named, impressive ingredient placed last is likely the smallest, often behind cheap bulk. A hidden dose should be treated as absent."
    },
    {
      "id": "a3-c6-mc-2",
      "chapter": 6,
      "type": "mc",
      "q": "Which of the following is a genuine third-party verification rather than marketing decoration?",
      "options": [
        "A \"GMP\" graphic paired with \"doctor formulated\" text and no named registry",
        "The words \"lab tested\" printed on the front of the bottle",
        "A \"natural\" badge that implies the product is free of contaminants",
        "NSF Certified for Sport or USP Verified, which verify identity, purity, and dose accuracy but not efficacy"
      ],
      "answer": 3,
      "points": 1,
      "explanation": "Real marks such as NSF Certified for Sport, Informed Sport, and USP Verified confirm identity, purity, and dose accuracy, which is honesty rather than proof that the product works for your goal. \"Lab tested,\" bare GMP graphics, and \"natural\" badges are unverified artwork."
    },
    {
      "id": "a3-c6-tf-1",
      "chapter": 6,
      "type": "tf",
      "q": "A structure-function claim such as \"supports a healthy immune system\" promises a measurable, proven benefit, so it is stronger evidence than a blank %DV.",
      "answer": false,
      "points": 1,
      "explanation": "Structure-function claims are vague and legal but promise nothing measurable. \"Supports\" is a weasel word signaling an association, not an improvement. Such a claim is not evidence of benefit at all, so it is not stronger than any panel figure."
    },
    {
      "id": "a3-c6-match-1",
      "chapter": 6,
      "type": "match",
      "q": "Match each label element to what it actually tells you.",
      "pairs": [
        {
          "left": "Serving size",
          "right": "Scales every number on the panel, so read it first"
        },
        {
          "left": "%DV",
          "right": "Quantity versus an average day, not proof of benefit"
        },
        {
          "left": "Proprietary blend",
          "right": "One total weight with the individual doses hidden"
        },
        {
          "left": "NSF Certified for Sport",
          "right": "Independent verification of identity, purity, and dose accuracy"
        },
        {
          "left": "Fairy dusting",
          "right": "A dose too small to act, added so the name can appear"
        }
      ],
      "points": 5
    },
    {
      "id": "a3-c6-fill-1",
      "chapter": 6,
      "type": "fill",
      "q": "A supplement can only work if all four questions pass: the right {{1}}, an effective {{2}}, a usable form, and an independent third-party check. Because the test is {{3}}, a single failure is enough to put the bottle back.",
      "bank": [
        "ingredient",
        "dose",
        "conjunctive",
        "scorecard",
        "optional",
        "brand"
      ],
      "answers": {
        "1": "ingredient",
        "2": "dose",
        "3": "conjunctive"
      },
      "points": 3
    },
    {
      "id": "a3-c7-mc-1",
      "chapter": 7,
      "type": "mc",
      "q": "Which scenario carries the greatest risk of chronic accumulation toward toxicity?",
      "options": [
        "A daily high dose of vitamin C",
        "A B-complex taken slightly above the RDA",
        "Daily high-dose vitamin A or D from supplements stacked on top of fortified foods",
        "An extra serving of dietary fiber each day"
      ],
      "answer": 2,
      "points": 1,
      "explanation": "Fat-soluble vitamins (A, D, E, K) are banked in fat and liver with no daily reset, so chronic excess accumulates toward hypervitaminosis. This toxicity almost always comes from supplements and hidden stacking across fortified products, not from food. Water-soluble surpluses are largely excreted, though not infinitely."
    },
    {
      "id": "a3-c7-mc-2",
      "chapter": 7,
      "type": "mc",
      "q": "A client on warfarin adds high-dose vitamin E and fish oil to feel healthier. How is this best described?",
      "options": [
        "A pharmacodynamic interaction that adds to bleeding risk, so the full list of everything taken should go to a clinician or pharmacist",
        "A pharmacokinetic interaction that speeds warfarin clearance and weakens it",
        "Harmless, because vitamin E and fish oil are natural products",
        "Beneficial, because antioxidants protect the blood vessels during anticoagulation"
      ],
      "answer": 0,
      "points": 1,
      "explanation": "Vitamin E and fish oil both add to bleeding risk on top of a fixed warfarin dose, which is a pharmacodynamic interaction (changing what an amount does rather than how much is present). Warfarin has a narrow therapeutic index, so disclosing the full list by name and dose to a clinician or pharmacist is the control measure."
    },
    {
      "id": "a3-c7-multi-1",
      "chapter": 7,
      "type": "multi",
      "q": "Which findings are supported by the antioxidant paradox and megadose evidence in the chapter? Select all that apply.",
      "options": [
        "Beta-carotene supplements raised lung cancer risk in smokers",
        "High-dose vitamin E was linked to increased prostate cancer",
        "High-dose vitamin C and E can blunt training adaptations",
        "High-dose zinc reliably prevents copper deficiency",
        "Selenium has a wide safety window with little risk of toxicity"
      ],
      "answers": [
        0,
        1,
        2
      ],
      "scoring": "all_or_nothing",
      "points": 1,
      "explanation": "Beta-carotene pills raised lung cancer in smokers (ATBC 1994; Omenn 1996), high-dose vitamin E raised prostate cancer (SELECT 2011), and high-dose C and E blunted training adaptations (Ristow 2009) because the exercise stress is a signal. High-dose zinc induces copper loss rather than preventing it, and selenium has the narrowest window of these minerals."
    },
    {
      "id": "a3-c7-tf-1",
      "chapter": 7,
      "type": "tf",
      "q": "Because the Upper Limit already has an uncertainty factor built in, reaching the UL each day is a safe target to aim for.",
      "answer": false,
      "points": 1,
      "explanation": "The UL is a conservative ceiling, not a target. It is the highest intake unlikely to harm almost anyone, and every step toward it climbs the harm side of the dose-response curve, not the benefit side. The goal is to land between what you need and the ceiling."
    },
    {
      "id": "a3-c7-fill-1",
      "chapter": 7,
      "type": "fill",
      "q": "For n items in a stack, the number of unique interaction pairs is {{1}}. Frequent interaction offenders include St. John's wort and {{2}}, while frequent victims are drugs with a {{3}} therapeutic index such as warfarin.",
      "bank": [
        "n(n-1)/2",
        "vitamin E",
        "narrow",
        "n squared",
        "vitamin C",
        "wide"
      ],
      "answers": {
        "1": "n(n-1)/2",
        "2": "vitamin E",
        "3": "narrow"
      },
      "points": 3
    },
    {
      "id": "a3-c8-mc-1",
      "chapter": 8,
      "type": "mc",
      "q": "When helping someone build a supplement plan, what is the correct first question?",
      "options": [
        "What is actually missing, and is a supplement the right tool to fix it?",
        "What is the best-rated supplement on the market right now?",
        "Which bottle has the highest CFU or the biggest dose?",
        "What could I add that might make me feel better overall?"
      ],
      "answer": 0,
      "points": 1,
      "explanation": "Running the process forward means starting with a real gap and asking whether a supplement is even the right tool, then food first, then evidence, then product, then an interaction screen. Starting from a bottle and hunting for a gap to justify it is the common backward mistake."
    },
    {
      "id": "a3-c8-mc-2",
      "chapter": 8,
      "type": "mc",
      "q": "A colleague wants to start a 65-year-old client on iron \"for energy\" with no blood work. What is the best response?",
      "options": [
        "Iron is a baseline low-risk item, so no test is needed before starting",
        "Iron is a test-first nutrient: excess is real harm with no exit route, so a measured number and a clinician belong before any dosing",
        "\"Low energy\" counts as a measured gap, so it is reasonable to proceed",
        "Double the starting dose to be safe and see if energy improves"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "Iron sits in the test-first (targeted) tier because surplus accumulates with no exit route and drives oxidative damage. The triage question is whether a reasonable clinician would be comfortable without a blood test; for iron the answer is no. Interpreting the number and dosing are clinical decisions."
    },
    {
      "id": "a3-c8-multi-1",
      "chapter": 8,
      "type": "multi",
      "q": "Which of the following are gates in the five-gate process for building a defensible stack? Select all that apply.",
      "options": [
        "A real gap from diet, life stage, context, or a measured deficiency",
        "Food first as the default answer",
        "Choosing the highest possible dose for maximum effect",
        "Evidence for the actual goal, the right population, at a realistic dose",
        "Screening the whole stack as a system for risk and interactions"
      ],
      "answers": [
        0,
        1,
        3,
        4
      ],
      "scoring": "all_or_nothing",
      "points": 1,
      "explanation": "The five gates in order are real gap, food first, evidence for the goal, quality and dose (studied form and trial-matched dose), and screen the stack. \"Highest possible dose\" is not a gate; the correct standard is a dose that matches the trials, since more is a direction, not always an improvement."
    },
    {
      "id": "a3-c8-tf-1",
      "chapter": 8,
      "type": "tf",
      "q": "\"You don't need anything, and here is why\" can be a complete and defensible output of the stack-building process.",
      "answer": true,
      "points": 1,
      "explanation": "Zero is a valid output. For a healthy general person the answer is often near-zero, and a clear, reasoned \"nothing\" that survives the skeptical-colleague test is a complete, defensible plan. Subtraction, not collecting, is the mark of competence."
    },
    {
      "id": "a3-c8-fill-1",
      "chapter": 8,
      "type": "fill",
      "q": "Building a stack forward means starting with the {{1}}, then defaulting to {{2}} first, then checking evidence, product quality, and interactions. The common mistake is reasoning {{3}}: falling in love with a bottle and hunting for a gap to justify it.",
      "bank": [
        "gap",
        "food",
        "backward",
        "dose",
        "brand",
        "forward"
      ],
      "answers": {
        "1": "gap",
        "2": "food",
        "3": "backward"
      },
      "points": 3
    },
    {
      "id": "a3-c8-free-1",
      "chapter": 8,
      "type": "free",
      "q": "A 68-year-old client on warfarin and two other medications asks you to help build a supplement stack \"to boost energy and immunity.\" Walk through how you would reason using the five-gate process, and state where your role ends.",
      "model": "I would run the five gates in order. Gate one, real gap: \"boost energy and immunity\" is a wish to feel better, not a measured shortfall, so I would ask what is actually missing from diet, life stage, or a documented number rather than starting from the goal. Gate two, food first: whatever gap emerges, food is the default answer, and a bottle earns a place only when a specific exception makes food-only fail. Gate three, evidence for the goal: any candidate needs adequate evidence for this goal, this older population, at a realistic dose, and most hyped energy and immunity products die here. Gate four, quality and dose: anything that survives must be third-party tested, in the studied form, at a trial-matched dose. Gate five, screen the stack: this is decisive here because the client is on warfarin plus two other drugs. The interaction risk surface grows geometrically, warfarin has a narrow therapeutic index, and items like vitamin E or fish oil add to bleeding risk. My role ends at interpreting labs, dosing test-first nutrients, and clearing supplement-drug interactions, which are clinical decisions. The control measure is to have the client bring the full list of everything taken, by name and dose, to a qualified clinician or pharmacist.",
      "key_points": [
        "Gate one: energy and immunity are wishes, not measured gaps; identify what is actually missing and whether a supplement is the right tool",
        "Gate two: food first is the default; a bottle earns its place only through a specific exception",
        "Gate three: evidence must match the actual goal, the older population, and a realistic dose, and most hyped items die here",
        "Gate four: require third-party testing, the studied form, and a trial-matched dose",
        "Gate five: screen the whole stack, noting the geometric growth of interaction pairs, warfarin's narrow therapeutic index, and additive bleeding risk from items like vitamin E or fish oil",
        "State the role boundary: interpreting labs, dosing, and clearing interactions belong to a clinician or pharmacist, and the client should disclose the full list by name and dose"
      ],
      "rubric": {
        "pass_threshold": 70,
        "points": [
          {
            "desc": "Starts from a real gap rather than the stated feel-better goal and questions whether a supplement is the right tool",
            "weight": 20
          },
          {
            "desc": "Applies food first and evidence-for-the-goal gates correctly",
            "weight": 20
          },
          {
            "desc": "Addresses quality and dose (third-party testing, studied form, trial-matched dose)",
            "weight": 15
          },
          {
            "desc": "Prioritizes the stack interaction screen given warfarin and polypharmacy, citing narrow therapeutic index or additive bleeding risk",
            "weight": 25
          },
          {
            "desc": "States the role boundary and routes interactions and dosing to a clinician or pharmacist with a full disclosed list",
            "weight": 20
          }
        ]
      },
      "points": 5,
      "appeal": true
    }
  ]
};
