/* Gemini Education: A2 (Macro & Micronutrients + Building a Diet) FINAL EXAM, interim live version.
   Current exam.html renders MC + free-response only; ships 16 MC + 6 true/false (as 2-option MC), draw 16, options shuffled, 80% pass. Full bank (40) in a2-macro-micro-diet.full.js. */
window.GEM_EXAM = {
  slug: "a2-macro-micro-diet", title: "Macro & Micronutrients + Building a Diet",
  contact_hours: 8, ceu_value: 0.8, pass_threshold: 80, draw_mc: 16, placeholder: false,
  questions: [
    {
      "id": "a2-c1-mc-1",
      "chapter": 1,
      "type": "mc",
      "q": "Two people of similar size and weight can differ by up to roughly 2,000 kcal/day in daily energy expenditure. Which component of TDEE is responsible for most of that variability?",
      "options": [
        "Resting metabolic rate (RMR)",
        "Thermic effect of food (TEF)",
        "Exercise activity thermogenesis (EAT)",
        "Non-exercise activity thermogenesis (NEAT)"
      ],
      "answer": 3,
      "points": 1,
      "explanation": "NEAT (walking, fidgeting, chores) is the most variable component and can differ by up to about 2,000 kcal/day between similar people."
    },
    {
      "id": "a2-c1-mc-2",
      "chapter": 1,
      "type": "mc",
      "q": "A person held a genuine 500 kcal deficit and lost weight, but after several weeks the scale trend flattens despite unchanged adherence. Which chapter concept best explains the stall?",
      "options": [
        "Metabolic adaptation: RMR, NEAT, and TEF all drift down, so the effective deficit shrinks toward zero",
        "The 7,700 kcal-per-kg conversion stops applying once weight is lost",
        "Body fat physically cannot be lost faster than 0.5 kg per week",
        "The Mifflin-St Jeor equation becomes invalid below maintenance intake"
      ],
      "answer": 0,
      "points": 1,
      "explanation": "Intake and expenditure are linked. Cutting calories lowers RMR, NEAT, and TEF, so a 500 kcal deficit can quietly become 250 as the body adapts."
    },
    {
      "id": "a2-c2-mc-1",
      "chapter": 2,
      "type": "mc",
      "q": "A 72-year-old person eats about 20 g of quality protein per meal, the dose that maximizes MPS in young adults, yet is slowly losing muscle. What is the most defensible adjustment?",
      "options": [
        "Add a between-meals BCAA supplement to top up leucine",
        "Raise each meal to about 30 g protein (roughly 2.8 g leucine) to overcome anabolic resistance",
        "Consolidate the day's protein into one 60 g bolus at dinner",
        "Drop total protein to the 0.8 g/kg/day floor to reduce kidney load"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "Anabolic resistance raises the per-meal threshold in older adults to about 30 g protein and about 2.8 g leucine per meal."
    },
    {
      "id": "a2-c2-mc-2",
      "chapter": 2,
      "type": "mc",
      "q": "BCAA-only supplements do contain leucine and can transiently raise MPS, yet they fail to build new muscle protein. What is the reasoning behind this?",
      "options": [
        "BCAAs cannot be absorbed unless taken with carbohydrate",
        "Leucine is not actually an anabolic signal",
        "A new protein needs all 9 EAAs, so with only 3 supplied the cell breaks down muscle for the missing 6",
        "BCAAs permanently suppress muscle protein breakdown"
      ],
      "answer": 2,
      "points": 1,
      "explanation": "Leucine triggers the signal, but building protein requires all nine essential amino acids. BCAAs supply only three, forcing the body to cannibalize muscle for the rest: a wash at best."
    },
    {
      "id": "a2-c3-mc-1",
      "chapter": 3,
      "type": "mc",
      "q": "Watermelon has a glycemic index near 76 (high) but a glycemic load near 5 (low) per typical serving. What does this contrast best illustrate?",
      "options": [
        "GI can overstate real-world impact because it ignores how much available carbohydrate is actually in a serving",
        "Glycemic load is always numerically higher than glycemic index",
        "Any food with a high GI should be avoided regardless of portion",
        "Watermelon contains essentially no available carbohydrate"
      ],
      "answer": 0,
      "points": 1,
      "explanation": "GI rates a fixed 50 g of carbohydrate and ignores portion. GL folds in the small carb amount per serving, so watermelon's scary index becomes a trivial load."
    },
    {
      "id": "a2-c3-mc-2",
      "chapter": 3,
      "type": "mc",
      "q": "For which situation does carbohydrate timing genuinely change performance, rather than being a rounding error?",
      "options": [
        "A single morning weightlifting session",
        "A 20-minute recovery walk",
        "Repeated same-day high-intensity endurance efforts that deplete glycogen",
        "Any meal that happens to contain more than 50 g of carbohydrate"
      ],
      "answer": 2,
      "points": 1,
      "explanation": "Timing matters when carb availability is the limiter, such as long or repeated same-day high-intensity work. A single lift or a walk barely dents a full tank."
    },
    {
      "id": "a2-c4-mc-1",
      "chapter": 4,
      "type": "mc",
      "q": "A person's diet sits near a 15:1 omega-6 to omega-3 ratio and you want to move toward 4:1 or lower. Which approach fits the chapter's reasoning?",
      "options": [
        "Aggressively eliminate all omega-6 seed oils from the diet",
        "Add omega-3 sources such as fatty fish rather than merely torching omega-6",
        "Supplement arachidonic acid to rebalance the two lines",
        "Cut total fat below the 20 percent floor to reduce omega-6"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "Both fats individually track with lower mortality; the problem is too little omega-3. Fix the ratio by adding omega-3, not by slashing omega-6."
    },
    {
      "id": "a2-c4-mc-2",
      "chapter": 4,
      "type": "mc",
      "q": "A person orders a strictly fat-free salad to save calories. Based on the chapter, what is the main nutritional cost of removing all fat from that meal?",
      "options": [
        "Most of the vitamin C in the vegetables is destroyed",
        "The fat-soluble vitamins A, D, E, K and carotenoids go largely unabsorbed",
        "The fiber can no longer ferment into short-chain fatty acids",
        "Dietary protein becomes indigestible without fat present"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "Vitamins A, D, E, K and carotenoids need fat in the same meal to be absorbed, so a fat-free salad delivers almost none of them."
    },
    {
      "id": "a2-c5-mc-1",
      "chapter": 5,
      "type": "mc",
      "q": "A person eats an extremely low-fat diet for two years and now shows early night-vision trouble and dry eyes. Which mechanism best explains why these fat-soluble vitamin signs took so long to appear despite the ongoing low intake?",
      "options": [
        "Fat-soluble vitamins are stored in the liver and fat, so body reserves buffer intake gaps for months to years",
        "Fat-soluble vitamins wash out daily, so signs only appear once the kidneys are overwhelmed",
        "Vitamin A is a coenzyme that the body manufactures on demand from protein",
        "Night-vision loss is the first sign of any water-soluble vitamin shortfall"
      ],
      "answer": 0,
      "points": 1,
      "explanation": "Fat-soluble vitamins (A, D, E, K) are banked in liver and fat, so deficiencies develop over months to years and are often well advanced by the time signs surface. These patterns overlap with many conditions and require a clinician to confirm."
    },
    {
      "id": "a2-c5-mc-2",
      "chapter": 5,
      "type": "mc",
      "q": "On the dose-response spectrum, what do the RDA and the UL each represent, and what is the space between them called?",
      "options": [
        "The RDA is the toxicity ceiling and the UL is the deficiency floor; between them is the danger zone",
        "The RDA is a floor with cushion meeting most people's needs and the UL is the upper guardrail; the gap between them is the width of the sufficiency window",
        "Both mark the same point, since more of a vitamin is always simply better",
        "The RDA is the average of all intakes and the UL is double the RDA by definition"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "The RDA is a floor with cushion (meeting roughly 97 to 98 percent of people), and the UL is the guardrail at the top. The distance between them defines the healthy window, showing that more is a position on a curve that turns down at both ends."
    },
    {
      "id": "a2-c6-mc-1",
      "chapter": 6,
      "type": "mc",
      "q": "A plant-based person wants to maximize iron from a lentil-and-spinach meal. Which single change would most improve non-heme iron absorption at that meal?",
      "options": [
        "Drink a strong cup of tea or coffee alongside the meal",
        "Take a high-dose calcium supplement with the meal",
        "Add a source of vitamin C, such as peppers or citrus, to the meal",
        "Serve a large glass of milk to boost total mineral content"
      ],
      "answer": 2,
      "points": 1,
      "explanation": "Vitamin C is a strong enhancer of non-heme iron. Tea and coffee polyphenols block it, and a big calcium dose competes with iron in the same meal, so those choices would lower absorption instead."
    },
    {
      "id": "a2-c6-mc-2",
      "chapter": 6,
      "type": "mc",
      "q": "Two meals list identical iron in milligrams: one from beef, one from beans. Why can the absorbed amount differ so much?",
      "options": [
        "Heme iron from animal tissue absorbs at a stable 25 to 30 percent and resists inhibitors, while non-heme plant iron swings from roughly 2 to 20 percent depending on the meal",
        "Beans contain no real iron, so the label figure is an error",
        "Non-heme iron is always absorbed better because plants are healthier",
        "The two are identical in delivery because the label reports what you absorb"
      ],
      "answer": 0,
      "points": 1,
      "explanation": "The label reports total content, not what you absorb. Heme iron is stable at 25 to 30 percent and resists inhibitors, whereas non-heme iron ranges from about 2 to 20 percent set by enhancers and inhibitors in the meal."
    },
    {
      "id": "a2-c7-mc-1",
      "chapter": 7,
      "type": "mc",
      "q": "Using the remainder method for a 75 kg person at 2,000 kcal with protein locked at 135 g and fat at a floor of 53 g, roughly how many grams of carbohydrate remain? (Protein and carbohydrate about 4 kcal/g, fat about 9 kcal/g.)",
      "options": [
        "About 90 g",
        "About 175 g",
        "About 246 g",
        "About 320 g"
      ],
      "answer": 2,
      "points": 1,
      "explanation": "Protein 135 g x 4 = 540 kcal and fat 53 g x 9 = 475 kcal, totaling 1,015 kcal. The remaining 985 kcal divided by 4 kcal/g gives about 246 g of carbohydrate, the flexible macro that absorbs the day-to-day variation."
    },
    {
      "id": "a2-c7-mc-2",
      "chapter": 7,
      "type": "mc",
      "q": "A person cuts from 2,000 to 1,600 kcal for fat loss. Following the priority order for setting macros, which macro should absorb almost all of that 400 kcal reduction?",
      "options": [
        "Protein, which should be dropped first to save calories",
        "Fat, which should fall well below its floor during a cut",
        "Carbohydrate, the remainder, while protein and the fat floor hold",
        "All three should be cut by an equal percentage"
      ],
      "answer": 2,
      "points": 1,
      "explanation": "Protein is set first and even rises in a deficit to spare lean mass, and fat is held to its floor for hormones and vitamin absorption. Carbohydrate is the remainder, so it absorbs the cut, falling from about 246 g to roughly 146 g in the worked example."
    },
    {
      "id": "a2-c8-mc-1",
      "chapter": 8,
      "type": "mc",
      "q": "Why is the 0.8 g/kg protein RDA a poor optimization target for an older adult who resistance trains?",
      "options": [
        "The RDA is a deficiency floor, not an optimization target, and anabolic resistance raises the per-meal leucine threshold, so total protein should rise and be spread across meals",
        "The RDA is already too high for older adults and should be cut in half",
        "Older adults cannot use dietary protein, so the amount is irrelevant",
        "Protein needs fall with training, so 0.8 g/kg is generous"
      ],
      "answer": 0,
      "points": 1,
      "explanation": "The population RDA is a deficiency floor learned as a baseline, not an optimization goal. Anabolic resistance in older adults raises the per-meal leucine threshold, so total protein around 1.0 to 1.5 g/kg spread across meals is appropriate, and training raises needs further."
    },
    {
      "id": "a2-c8-mc-2",
      "chapter": 8,
      "type": "mc",
      "q": "A vegan endurance athlete asks about omega-3s. Which recommendation best fits the plant-based pressure points?",
      "options": [
        "Rely on ALA from flax alone, since the body converts it fully to EPA and DHA",
        "Because ALA-to-EPA/DHA conversion is limited, use an algae-based EPA/DHA source",
        "Omega-3s are unnecessary for anyone eating plants",
        "Take a high-dose zinc supplement to cover omega-3 needs"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "Plants supply ALA, but conversion to EPA and DHA is limited, so an algae-based EPA/DHA source is the fitting route. Zinc is unrelated, and assuming full conversion from flax alone would leave the athlete short."
    },
    {
      "id": "a2-c1-tf-1",
      "chapter": 1,
      "type": "mc",
      "q": "A 1.5 kg overnight jump on the scale reflects real fat gain and justifies an immediate calorie cut.",
      "options": [
        "True",
        "False"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "False. A single day can swing 1 to 2 kg on water, glycogen, gut contents, sodium, and hormones. Read the 7-day rolling trend over 2 to 4 weeks instead."
    },
    {
      "id": "a2-c2-tf-1",
      "chapter": 2,
      "type": "mc",
      "q": "Because leucine triggers muscle protein synthesis, a BCAA-only supplement can build new muscle protein just as effectively as a complete protein source of equal leucine content.",
      "options": [
        "True",
        "False"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "False. Triggering MPS is not the same as supplying materials. Without all nine EAAs, the cell must break down existing muscle for the missing amino acids, making BCAAs a wash once total protein is adequate."
    },
    {
      "id": "a2-c3-tf-1",
      "chapter": 3,
      "type": "mc",
      "q": "Muscle glycogen is 'selfish': it fuels only that muscle's own contractions and cannot be released to raise blood glucose for other tissues.",
      "options": [
        "True",
        "False"
      ],
      "answer": 0,
      "points": 1,
      "explanation": "True. Only liver glycogen feeds blood glucose between meals; muscle glycogen (about 300 to 500 g) is reserved for local contraction."
    },
    {
      "id": "a2-c5-tf-1",
      "chapter": 5,
      "type": "mc",
      "q": "Because B12 is water-soluble, a shortfall always shows up within a few weeks, just like vitamin C deficiency.",
      "options": [
        "True",
        "False"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "B12 is the exception: although water-soluble, it is banked in the liver, so a shortfall can take years to surface and then strikes the nerves. Vitamin C, by contrast, empties fast and shows in weeks to months."
    },
    {
      "id": "a2-c7-tf-1",
      "chapter": 7,
      "type": "mc",
      "q": "Evidence such as Sacks 2009 and Dansinger 2005 indicates that the specific macronutrient ratio barely predicts results, while adherence to the plan does.",
      "options": [
        "True",
        "False"
      ],
      "answer": 0,
      "points": 1,
      "explanation": "Across diets, the macro ratio barely predicts outcomes while sticking to the plan does. This is why flexible control beats rigid rules and why a deliberate slice for enjoyment is treated as the load-bearing wall of adherence."
    },
    {
      "id": "a2-c8-tf-1",
      "chapter": 8,
      "type": "mc",
      "q": "For plant-based eaters, vitamin B12 is best treated as a preference that can be met through careful food choices without supplementation or fortified foods.",
      "options": [
        "True",
        "False"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "For plant-based eaters, B12 is a hard requirement met through a supplement or fortified foods, not an optional preference. It is one of the structural pressure points of a plant-based pattern."
    }
  ]
};
