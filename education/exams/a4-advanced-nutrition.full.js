/* Gemini Education: A4 FULL exam bank (all types). PARKED until portal thread upgrades exam.html. Schema: education/EXAM-SPEC.md. */
window.GEM_EXAM = {
  slug: "a4-advanced-nutrition", title: "Advanced Nutrition",
  contact_hours: 8, ceu_value: 0.8, pass_threshold: 80, placeholder: false,
  draw: { mc: 12, multi: 4, tf: 4, match: 2, fill: 3, free: 0 }, shuffle: { questions: true, options: true },
  questions: [
    {
      "id": "a4-c1-mc-1",
      "chapter": 1,
      "type": "mc",
      "q": "A person ten weeks into a steady deficit sees fat loss stall despite an unchanged food log. Which component of adaptive thermogenesis is usually the largest and most invisible contributor to the closing energy gap?",
      "options": [
        "Resting metabolic rate crashing by 800 kcal/day",
        "Non-exercise activity thermogenesis falling a few hundred calories below awareness",
        "The thermic effect of food rising as digestion becomes less efficient",
        "Exercise activity thermogenesis increasing to defend body weight"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "NEAT collapses dramatically and invisibly under a deficit and is typically the single largest quiet contributor, often mistaken for a crashed RMR."
    },
    {
      "id": "a4-c1-mc-2",
      "chapter": 1,
      "type": "mc",
      "q": "Why does the chapter argue that a slower, more person deficit is not merely gentler but actually more effective per unit of fat kept off?",
      "options": [
        "It raises the thermic effect of food above its normal 10 percent share",
        "It converts reverse-T3 back into active T3 within days",
        "The defensive response tracks the size of the energy gap, so a whisper provokes less leptin decline, suppression, and lean-mass loss than a shout",
        "It permanently raises the set point so regain becomes impossible"
      ],
      "answer": 2,
      "points": 1,
      "explanation": "Depth and duration scale the defense; a smaller gap drives a smaller leptin drop and preserves more lean mass, making slow loss more efficient (Trexler 2014)."
    },
    {
      "id": "a4-c1-multi-1",
      "chapter": 1,
      "type": "multi",
      "q": "Before attributing a stall to metabolic adaptation, the chapter says to rule out the three impostors. Which of the following are those impostors that masquerade as adaptation?",
      "options": [
        "Water and glycogen shifts swinging the scale kilograms in a day",
        "Intake creep as portions drift and weekends go unlogged",
        "Reduced NEAT that fell below awareness",
        "A permanent thyroid gland failure",
        "The set point being genetically relocated overnight"
      ],
      "answers": [
        0,
        1,
        2
      ],
      "scoring": "all_or_nothing",
      "points": 1,
      "explanation": "The three impostors are water and glycogen, intake creep, and reduced NEAT; true adaptation runs only a few hundred kcal/day and should be diagnosed after these are excluded."
    },
    {
      "id": "a4-c1-tf-1",
      "chapter": 1,
      "type": "tf",
      "q": "The best synthesis of set point versus settling point is that the body defends the floor hard and holds the ceiling loosely, which is why losing weight is a war but regaining is easy.",
      "answer": true,
      "points": 1,
      "explanation": "Speakman et al. (2011): the floor is defended fiercely while the ceiling drifts, explaining both fierce defense on the way down and easy regain."
    },
    {
      "id": "a4-c1-match-1",
      "chapter": 1,
      "type": "match",
      "q": "Match each component of total daily energy expenditure to its defining description.",
      "pairs": [
        {
          "left": "RMR",
          "right": "Energy to stay alive at rest, roughly 60 to 70 percent of the total"
        },
        {
          "left": "TEF",
          "right": "About 10 percent of intake, the cost of digesting and processing food"
        },
        {
          "left": "EAT",
          "right": "Deliberate structured training, often just 5 to 10 percent for non-athletes"
        },
        {
          "left": "NEAT",
          "right": "Unplanned movement that can differ up to 2000 kcal/day between similar people"
        }
      ],
      "points": 4
    },
    {
      "id": "a4-c2-mc-3",
      "chapter": 2,
      "type": "mc",
      "q": "The static 3,500-kcal rule predicts a pound of fat loss per week forever from a 500 kcal/day deficit. Why does the dynamic model (Hall 2011) say real loss is a decelerating curve instead?",
      "options": [
        "Fat becomes denser as you lose it, so each pound holds fewer calories",
        "As body mass shrinks, resting metabolism, movement cost, and digestion all fall, so the paper deficit narrows on its own toward a plateau",
        "The body stops absorbing dietary fat once glycogen is depleted",
        "Hunger hormones physically block fat from leaving adipose tissue"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "The dynamic model treats expenditure as variable: about 10 kcal/day of maintenance is lost per pound lost, so the deficit shrinks and loss settles at a predicted plateau."
    },
    {
      "id": "a4-c2-mc-4",
      "chapter": 2,
      "type": "mc",
      "q": "A lean person wants to keep as much muscle as possible while cutting. Following the chapter's rate-first logic, which prescription best fits?",
      "options": [
        "A 1.4 percent/week loss rate with protein at 0.8 g/kg to avoid excess",
        "A fixed 500 kcal/day cut regardless of bodyweight, protein optional",
        "About 0.5 percent/week or less, protein toward 2.3 to 3.1 g/kg of fat-free mass, plus resistance training",
        "The steepest tolerable deficit, since muscle loss is unavoidable anyway"
      ],
      "answer": 2,
      "points": 1,
      "explanation": "Leaner dieters need a gentler rate and higher protein relative to fat-free mass; Garthe showed 0.7 percent/week preserved muscle where 1.4 percent/week did not."
    },
    {
      "id": "a4-c2-multi-2",
      "chapter": 2,
      "type": "multi",
      "q": "The chapter frames a steeper deficit as coming with predictable 'bills.' Which costs does a steeper deficit reliably charge?",
      "options": [
        "More fuel pulled from lean mass",
        "A stronger adaptive response with more hormonal pushback and dropped daily movement",
        "Worse adherence from hunger, irritability, and food preoccupation",
        "Guaranteed faster muscle gain during the cut",
        "Elimination of the plateau entirely"
      ],
      "answers": [
        0,
        1,
        2
      ],
      "scoring": "all_or_nothing",
      "points": 1,
      "explanation": "The three bills are lean mass, adaptation, and adherence; a bigger imbalance buys speed at the price of all three."
    },
    {
      "id": "a4-c2-fill-1",
      "chapter": 2,
      "type": "fill",
      "q": "The chapter urges choosing a {{1}} first and letting it set the calories. Among the macros, {{2}} should be set first, aiming roughly 1.6 to 2.0 g/kg for general dieters.",
      "bank": [
        "rate",
        "protein",
        "calorie number",
        "fat"
      ],
      "answers": {
        "1": "rate",
        "2": "protein"
      },
      "points": 2
    },
    {
      "id": "a4-c3-mc-5",
      "chapter": 3,
      "type": "mc",
      "q": "In the hierarchy of impact for meal timing, which item sits at the very bottom because its measurable spike never becomes a visible outcome?",
      "options": [
        "Total energy balance across the day",
        "Total daily protein intake",
        "Spreading protein across roughly four meals",
        "Whether creatine is taken at 8 a.m. or 8 p.m."
      ],
      "answer": 3,
      "points": 1,
      "explanation": "Supplement timing is the decorative vase at the bottom; total energy and total protein sit at the top, distribution is a second-order refinement."
    },
    {
      "id": "a4-c3-mc-6",
      "chapter": 3,
      "type": "mc",
      "q": "A fed lifter panics that they missed the 30-minute post-workout anabolic window. What does the evidence actually say?",
      "options": [
        "They lost the entire session; protein must arrive within 30 minutes",
        "Muscle stays sensitized to protein for at least 24 hours and the pre-workout meal is still releasing amino acids, so urgency is low",
        "The window only matters for supplement timing, never for whole-food protein",
        "Post-workout carbohydrate is the only thing that can reopen the window"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "The window is a barn door, not a keyhole (Aragon and Schoenfeld); sensitization lasts at least 24 hours, so a fed lifter has little urgency."
    },
    {
      "id": "a4-c3-tf-2",
      "chapter": 3,
      "type": "tf",
      "q": "Trials show that eating breakfast independently causes weight loss, which is why it is safe to treat the breakfast habit as a metabolic lever rather than a correlation.",
      "answer": false,
      "points": 1,
      "explanation": "This is the correlation-causation trap; trials (Sievert 2019) show breakfast adds calories and does not cause weight loss."
    },
    {
      "id": "a4-c3-fill-2",
      "chapter": 3,
      "type": "fill",
      "q": "A real biological process such as insulin moving nutrients is a {{1}}, while what happens to a person over weeks and months is an {{2}}. Most bad advice lives in the gap between them.",
      "bank": [
        "mechanism",
        "outcome",
        "placebo",
        "deficit"
      ],
      "answers": {
        "1": "mechanism",
        "2": "outcome"
      },
      "points": 2
    },
    {
      "id": "a4-c4-mc-7",
      "chapter": 4,
      "type": "mc",
      "q": "DIETFITS (Gardner 2018) randomized 609 adults to healthy low-fat or healthy low-carb for 12 months. What was the central finding about which diet won?",
      "options": [
        "Low-carb produced roughly double the fat loss of low-fat",
        "Baseline insulin secretion cleanly predicted who succeeded on each arm",
        "The between-group difference was about 0.7 kg, a wash, and neither genotype nor insulin secretion predicted the winner",
        "Low-fat won decisively once protein was equated"
      ],
      "answer": 2,
      "points": 1,
      "explanation": "Weight change was -5.3 kg vs -6.0 kg, a difference of 0.7 kg with a CI crossing zero; predicted moderators did not pan out."
    },
    {
      "id": "a4-c4-mc-8",
      "chapter": 4,
      "type": "mc",
      "q": "Using the three-layer model (rules, mechanism, outcome), where does most misleading diet marketing operate?",
      "options": [
        "It makes layer-three outcome promises by way of loud claims about a layer-two mechanism",
        "It ignores the rules entirely and focuses only on measurable outcomes",
        "It proves every mechanism translates one-to-one into an outcome",
        "It admits energy balance and protein are the only levers that matter"
      ],
      "answer": 0,
      "points": 1,
      "explanation": "Branding lives on the rules layer and inflates a real mechanism into an outcome it cannot support; the honest move is to follow the chain to outcome."
    },
    {
      "id": "a4-c4-multi-3",
      "chapter": 4,
      "type": "multi",
      "q": "Once calories and protein are matched, which four levers does the chapter say actually separate one diet from another?",
      "options": [
        "Food preference",
        "Satiety on the allowed calories",
        "Social and schedule fit",
        "Sustainability over time",
        "The measurable size of the ketone or autophagy signal"
      ],
      "answers": [
        0,
        1,
        2,
        3
      ],
      "scoring": "all_or_nothing",
      "points": 1,
      "explanation": "Fit and consistency, not the branded mechanism, decide outcomes; the four levers are preference, satiety, social and schedule fit, and sustainability."
    },
    {
      "id": "a4-c4-tf-3",
      "chapter": 4,
      "type": "tf",
      "q": "The meta-analysis by Cioffi et al. (2018) found that intermittent fasting produced a large and meaningful fat-loss advantage over continuous calorie restriction.",
      "answer": false,
      "points": 1,
      "explanation": "Across 11 RCTs the weighted mean difference was -0.61 kg with p 0.87, meaning no meaningful advantage over continuous restriction."
    },
    {
      "id": "a4-c4-match-2",
      "chapter": 4,
      "type": "match",
      "q": "Match each named study to the finding it established.",
      "pairs": [
        {
          "left": "Gardner (DIETFITS 2018)",
          "right": "Low-fat versus low-carb over 12 months was a wash, about 0.7 kg apart"
        },
        {
          "left": "Cioffi (2018)",
          "right": "Intermittent fasting showed no meaningful advantage over continuous restriction"
        },
        {
          "left": "Burke (2020)",
          "right": "Ketogenic adaptation impaired economy and slowed elite race walkers by 2.3 percent"
        },
        {
          "left": "Conlin (2021)",
          "right": "Flexible and rigid dieting lost equal fat, but flexible kept better fat-free mass and psychology"
        }
      ],
      "points": 4
    },
    {
      "id": "a4-c4-fill-3",
      "chapter": 4,
      "type": "fill",
      "q": "A diet is essentially a delivery system for two things: an {{1}} that decides fat loss, and a {{2}} intake that protects muscle and drives fullness. Match these two and keto, fasting, and flexible converge.",
      "bank": [
        "energy balance",
        "protein",
        "ketone level",
        "meal frequency"
      ],
      "answers": {
        "1": "energy balance",
        "2": "protein"
      },
      "points": 2
    },
    {
      "id": "a4-c4-free-1",
      "chapter": 4,
      "type": "free",
      "q": "Two people ask you to settle a bet: 'Is keto better than fasting for fat loss?' Using the shared-mechanism model and the role of adherence, explain why this is the wrong question and what you would ask instead.",
      "model": "Both keto and fasting are just delivery systems for the same two things that actually drive fat loss: a sustained energy deficit and adequate protein. Neither escapes energy-balance accounting, so once calories and protein are matched their fat-loss differences shrink toward nothing (Cioffi found no meaningful IF advantage; DIETFITS found low-carb versus low-fat a wash). What separates diets in practice is not the branded mechanism but the four real levers: food preference, satiety, social and schedule fit, and sustainability. Adherence, not diet name, predicts long-term loss (A TO Z study). So the better question is not 'which diet is superior in the abstract' but 'better for what outcome, for whom, and which one can this specific person actually stick to,' since the diet you follow beats the better diet you abandon.",
      "key_points": [
        "Both diets are delivery systems for the same shared mechanism: energy deficit plus adequate protein",
        "Matched calories and protein make between-diet fat-loss differences shrink toward nothing",
        "Adherence predicts long-term results better than diet group (A TO Z; DIETFITS; Cioffi)",
        "Reframe to better for what, for whom, and can they sustain it, weighing preference, satiety, fit, and sustainability"
      ],
      "rubric": {
        "pass_threshold": 70,
        "points": [
          {
            "desc": "Identifies energy balance and protein as the shared mechanism both diets deliver",
            "weight": 30
          },
          {
            "desc": "Explains that matching calories and protein collapses the between-diet difference, citing evidence",
            "weight": 25
          },
          {
            "desc": "Centers adherence and the four levers (preference, satiety, fit, sustainability) as what really separates diets",
            "weight": 25
          },
          {
            "desc": "Reframes the question to better for what, for whom, and sustainable by whom",
            "weight": 20
          }
        ]
      },
      "points": 5,
      "appeal": true
    },
    {
      "id": "a4-c5-mc-1",
      "chapter": 5,
      "type": "mc",
      "q": "A person on a sustained calorie deficit reports that hunger has grown louder and that the same meals now feel less satisfying. Which hormonal shift best explains both changes at once?",
      "options": [
        "Falling leptin, which simultaneously amplifies hunger drive and blunts satiety signaling in the hypothalamus",
        "Rising leptin, which sharpens the reward value of food",
        "A permanent drop in ghrelin that resets the hunger set point downward",
        "Elevated insulin overriding every appetite signal from the gut"
      ],
      "answer": 0,
      "points": 1,
      "explanation": "A sustained deficit lowers leptin. At the arcuate nucleus that fall pushes the balance toward AgRP/NPY hunger neurons and away from POMC satiety neurons, so hunger gets louder and satiety gets quieter together. This is the body defending its fat stores, not a failure of willpower."
    },
    {
      "id": "a4-c5-mc-2",
      "chapter": 5,
      "type": "mc",
      "q": "According to the chapter, what best describes what GLP-1 receptor agonists such as semaglutide and liraglutide actually do?",
      "options": [
        "They introduce a brand-new hunger hormone the body cannot otherwise produce",
        "They are engineered to resist breakdown so a normally short-lived satiety signal stays active for hours or days",
        "They speed gastric emptying so meals clear the stomach faster",
        "They raise leptin output directly from fat tissue to reset the fuel gauge"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "GLP-1 is a naturally short-lived gut satiety peptide. These medications are engineered analogs that resist enzymatic breakdown, so the signal persists far longer; people report food is less interesting and fullness lasts. They are prescribed and managed by clinicians only."
    },
    {
      "id": "a4-c5-multi-1",
      "chapter": 5,
      "type": "multi",
      "q": "Which of the following are described as satiety or fullness signals that help report 'enough' to the brain? Select all that apply.",
      "options": [
        "CCK released from the upper small intestine within minutes of eating",
        "PYY from the lower gut that sustains fullness over the next hour or two",
        "Ghrelin secreted from the stomach before a habitual meal",
        "GLP-1 from the lower gut that slows gastric emptying",
        "Insulin acting centrally as an 'enough' signal"
      ],
      "answers": [
        0,
        1,
        3,
        4
      ],
      "scoring": "all_or_nothing",
      "points": 1,
      "explanation": "CCK, PYY, GLP-1, and centrally acting insulin all report satiety. Ghrelin is the exception: it is the fast hunger alarm that rises before a meal and falls once food arrives, so it starts the meal rather than ending it."
    },
    {
      "id": "a4-c5-tf-1",
      "chapter": 5,
      "type": "tf",
      "q": "Under controlled feeding studies, fat can be stored without dietary carbohydrate or elevated insulin, and total fat balance tracks total energy rather than insulin levels.",
      "answer": true,
      "points": 1,
      "explanation": "True. The strong carbohydrate-insulin model fails under controlled feeding. Insulin governs the timing of nutrient storage and release and acts centrally as a satiety signal, but the total fat a person carries tracks energy balance."
    },
    {
      "id": "a4-c5-free-1",
      "chapter": 5,
      "type": "free",
      "q": "A person who has lost significant weight says they still feel intensely hungry, crave highly palatable foods in the evening even after eating enough to meet their needs, and asks whether they should start a GLP-1 medication. Using the chapter's framework, explain what is likely happening physiologically and how you would respond within an educator role.",
      "model": "After meaningful weight loss, leptin falls and the hypothalamus reads that fall as a threat, so homeostatic hunger gets louder and satiety gets quieter while adaptive thermogenesis trims expenditure. That is the body defending its fat stores, not weak willpower. Separately, the hedonic (reward-based) appetite can override physical fullness for engineered, energy-dense foods, which is why someone can be full and still want dessert. The practical move is to interpret hunger as a signal and manage the environment (protein and high-volume, high-fiber foods, sleep, stress, and reducing exposure to hyper-palatable cues) rather than just resisting harder. On the medication question, GLP-1 and other weight-loss drugs are prescribed and managed by a qualified clinician; the right response is to explain the mechanism, validate that the hunger is real and physiological, and refer the decision to their clinician while staying within scope.",
      "key_points": [
        "Weight loss lowers leptin, which increases homeostatic hunger and reduces satiety as the body defends fat stores",
        "Adaptive thermogenesis lowers expenditure during and after weight loss",
        "Hedonic (reward-based) appetite can override physical fullness for highly palatable food",
        "Environment management (protein, food volume, fiber, sleep, stress) is more effective than willpower alone",
        "Hunger is a signal to interpret, not a moral failure",
        "GLP-1 and weight-loss medications are decisions for a qualified clinician, not the educator"
      ],
      "rubric": {
        "pass_threshold": 70,
        "points": [
          {
            "desc": "Explains the leptin fall and its effect on hunger and satiety (defense of fat stores)",
            "weight": 30
          },
          {
            "desc": "Distinguishes homeostatic from hedonic appetite to explain cravings despite adequate intake",
            "weight": 25
          },
          {
            "desc": "Offers environment-first, signal-based strategies rather than 'try harder'",
            "weight": 20
          },
          {
            "desc": "Correctly defers the medication decision to a clinician and stays within role",
            "weight": 25
          }
        ]
      },
      "points": 5,
      "appeal": true
    },
    {
      "id": "a4-c6-mc-1",
      "chapter": 6,
      "type": "mc",
      "q": "Where does almost all fiber fermentation take place, and what is the central payoff of that process?",
      "options": [
        "In the stomach, producing hydrochloric acid",
        "In the small intestine, producing bile acids",
        "In the colon, producing short-chain fatty acids",
        "In the liver, producing ketone bodies"
      ],
      "answer": 2,
      "points": 1,
      "explanation": "The colon is slow-moving and less acidic and receives fermentable fiber and resistant starch the small intestine could not absorb. Microbes ferment that fuel into short-chain fatty acids, the payoff at the center of the chapter."
    },
    {
      "id": "a4-c6-mc-2",
      "chapter": 6,
      "type": "mc",
      "q": "Which statement about the three main short-chain fatty acids is accurate?",
      "options": [
        "Acetate is the preferred fuel for the colon-lining cells",
        "Propionate is the most abundant and circulates most widely in the body",
        "Butyrate travels to the liver where it is involved in glucose metabolism",
        "Butyrate is the preferred fuel for colon-lining cells, so the gut wall eats what the microbes make"
      ],
      "answer": 3,
      "points": 1,
      "explanation": "Butyrate is the preferred fuel of colonocytes. Propionate travels to the liver and is involved in glucose metabolism, and acetate is the most abundant and circulates more widely. Together they influence barrier integrity, glucose handling, immune signaling, and appetite."
    },
    {
      "id": "a4-c6-tf-1",
      "chapter": 6,
      "type": "tf",
      "q": "There is a single ideal microbiome composition that defines gut health, best described as a fixed list of specific 'good bacteria' everyone should have.",
      "answer": false,
      "points": 1,
      "explanation": "False. There is no single ideal microbiome. The chapter grades function (diversity, SCFA-producing capacity, a stable barrier) rather than checking off a list of named 'good bugs.'"
    },
    {
      "id": "a4-c6-match-1",
      "chapter": 6,
      "type": "match",
      "q": "Match each fiber type to the feature described in the chapter.",
      "pairs": [
        {
          "left": "Inulin",
          "right": "Highly fermentable; found in onions, garlic, chicory, and asparagus"
        },
        {
          "left": "Resistant starch",
          "right": "Feeds butyrate producers; found in cooked-and-cooled potatoes, legumes, and green bananas"
        },
        {
          "left": "Beta-glucan",
          "right": "Viscous; from oats and barley; affects cholesterol and blood sugar"
        },
        {
          "left": "Wheat bran",
          "right": "Poorly fermented; adds bulk and speeds transit"
        }
      ],
      "points": 4
    },
    {
      "id": "a4-c6-fill-1",
      "chapter": 6,
      "type": "fill",
      "q": "The gut barrier is a single cell layer sealed by {{1}} and a mucus coat. When bacterial {{2}} leaks through, the resulting metabolic endotoxemia is a plausible, actively studied route to low-grade inflammation.",
      "bank": [
        "tight junctions",
        "LPS",
        "villi",
        "bile salts"
      ],
      "answers": {
        "1": "tight junctions",
        "2": "LPS"
      },
      "points": 2
    },
    {
      "id": "a4-c7-mc-1",
      "chapter": 7,
      "type": "mc",
      "q": "Fed identical meals, healthy people showed roughly 103% variation in triglyceride response and 68% in glucose (Berry et al., 2020). What is the best interpretation for practice?",
      "options": [
        "A reported result is a mean, so 'this works' is a bet with decent odds rather than a promise, and many apparent non-responses are just the tail of the spread",
        "The study must be flawed, because responses to the same meal should be identical",
        "Population averages are useless and should be discarded once individual variation is known",
        "Triglyceride and glucose responses are fixed by genetics alone"
      ],
      "answer": 0,
      "points": 1,
      "explanation": "A published result is the center of a distribution no single person has to occupy. The average tells you where to begin; the person tells you where to go. Variation bends the defaults, it does not delete them."
    },
    {
      "id": "a4-c7-mc-2",
      "chapter": 7,
      "type": "mc",
      "q": "An older adult is losing muscle and currently spreads a small amount of protein thinly across the day. Which approach best fits the chapter's guidance on anabolic resistance?",
      "options": [
        "Lower total protein to reduce strain, since older adults respond less anyway",
        "Rely on resistance training alone, since added protein no longer helps past a certain age",
        "Push protein toward 1.2 to 1.5 g/kg/day with a real dose per meal, paired with resistance training",
        "Hold protein at 0.8 g/kg/day and add steady-state cardio instead"
      ],
      "answer": 2,
      "points": 1,
      "explanation": "Anabolic resistance is a dimmed dial, not a broken wire: the muscle response to amino acids and load is blunted but intact. The chapter pushes protein toward 1.2 to 1.5 g/kg/day at a meaningful per-meal dose, and protein plus resistance training together beats either alone."
    },
    {
      "id": "a4-c7-multi-1",
      "chapter": 7,
      "type": "multi",
      "q": "Which statements about DNA-diet test kits and single genes match the chapter? Select all that apply.",
      "options": [
        "Most diet-relevant traits are polygenic, so a few tested variants cannot write someone's diet",
        "The FTO variant reliably predicts which specific diet will work best for a person",
        "MTHFR has a modest effect that is managed by adequate folate",
        "Ordinary diet and activity can counteract the FTO variant's association with weight",
        "CYP1A2 genotyping is the only reliable way to learn one's caffeine tolerance"
      ],
      "answers": [
        0,
        2,
        3
      ],
      "scoring": "all_or_nothing",
      "points": 1,
      "explanation": "Most traits are polygenic, FTO is linked to weight but does not predict which diet works (ordinary diet and activity counteract it), and MTHFR is a modest effect managed by folate. CYP1A2 caffeine response is learned faster by paying attention than by genotyping, so option 5 is wrong."
    },
    {
      "id": "a4-c7-match-1",
      "chapter": 7,
      "type": "match",
      "q": "Match each concept to its description from the chapter.",
      "pairs": [
        {
          "left": "Anabolic resistance",
          "right": "A blunted muscle response to amino acids and load; a dimmed dial, not a broken wire"
        },
        {
          "left": "Energy availability (EA)",
          "right": "Intake minus exercise energy divided by kg fat-free mass, with a target near 45 kcal/kg FFM/day"
        },
        {
          "left": "A disrupted or absent menstrual cycle",
          "right": "A warning light in the REDs spectrum, addressed with more food rather than more discipline"
        },
        {
          "left": "PDCAAS and DIAAS",
          "right": "Protein-quality scores on which plant proteins rate lower yet are not inadequate when dosed"
        }
      ],
      "points": 4
    },
    {
      "id": "a4-c7-fill-1",
      "chapter": 7,
      "type": "fill",
      "q": "When building a plant-based diet, parity with omnivorous diets is achievable, and the one variable to manage on purpose is {{1}}. Among the nutrients to plan for, the truly non-negotiable one to supplement is {{2}}.",
      "bank": [
        "protein",
        "B12",
        "sodium",
        "vitamin C"
      ],
      "answers": {
        "1": "protein",
        "2": "B12"
      },
      "points": 2
    },
    {
      "id": "a4-c8-mc-1",
      "chapter": 8,
      "type": "mc",
      "q": "A supplement company promotes a study in which cells in a dish responded to their ingredient. Where does this evidence sit, and what does it justify?",
      "options": [
        "Randomized trial: strong evidence of cause and effect in people",
        "Mechanistic: it shows a plausible pathway, not a real-world result, so it is a hypothesis rather than advice",
        "Meta-analysis: the top of the evidence ladder",
        "Observational: it proves the ingredient works in humans"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "Cell and animal work is mechanistic. It can show a plausible pathway but not a real-world outcome, so it is a hypothesis, not advice. Treating it as proof of a human benefit skips several rungs of the ladder."
    },
    {
      "id": "a4-c8-mc-2",
      "chapter": 8,
      "type": "mc",
      "q": "A headline claims a food 'cuts risk 40%.' The underlying absolute change is from 5 in 1,000 down to 3 in 1,000. What should you take away?",
      "options": [
        "A 40% relative reduction always means a large, useful benefit",
        "Statistical significance (p less than 0.05) guarantees the effect is important",
        "Relative risk is the more honest number to lead with",
        "The absolute change of 2 fewer per 1,000 is the real-world move; always ask 'a percentage of what starting number?'"
      ],
      "answer": 3,
      "points": 1,
      "explanation": "Relative risk can sound dramatic while the absolute change is small. The honest question is always the size of the move in absolute terms and off what baseline. Significance says 'probably real,' not 'large' or 'useful.'"
    },
    {
      "id": "a4-c8-multi-1",
      "chapter": 8,
      "type": "multi",
      "q": "Which of the following make nutrition studies especially hard to interpret, according to the chapter? Select all that apply.",
      "options": [
        "You cannot blind a diet, because people know what they are eating",
        "Adherence drift: the diet on paper is not the diet on the plate",
        "Recall error in food-frequency questionnaires",
        "Randomization is impossible in all nutrition research",
        "Publication bias: the studies you never get to see"
      ],
      "answers": [
        0,
        1,
        2,
        4
      ],
      "scoring": "all_or_nothing",
      "points": 1,
      "explanation": "Blinding failure, adherence drift, recall error, and publication bias all make nutrition evidence harder to read. Randomized trials are still possible in nutrition and sit high on the ladder, so the claim that randomization is impossible is false."
    },
    {
      "id": "a4-c8-tf-1",
      "chapter": 8,
      "type": "tf",
      "q": "In an observational study, finding that a food correlates with lower disease risk is enough to conclude that the food causes the reduction.",
      "answer": false,
      "points": 1,
      "explanation": "False. Correlation is not causation. An observed link could reflect reverse causation, a confounder driving both variables, or chance. With an observational finding you should be able to name a plausible confounder within seconds."
    },
    {
      "id": "a4-c8-fill-1",
      "chapter": 8,
      "type": "fill",
      "q": "Besides 'A causes B,' an observed correlation could reflect {{1}}, in which B actually causes A, or a {{2}}, in which a third factor drives both variables at once.",
      "bank": [
        "reverse causation",
        "confounder",
        "p-hacking",
        "publication bias"
      ],
      "answers": {
        "1": "reverse causation",
        "2": "confounder"
      },
      "points": 2
    }
  ]
};
