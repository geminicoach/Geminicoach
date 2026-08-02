/* Gemini Education: A1 (Basics of Nutrition) FINAL EXAM, interim live version (replaces the old placeholder).
   Current exam.html renders MC + free-response only, so this ships 16 MC + 6 true/false (as 2-option MC),
   drawing 16 per attempt, options shuffled, 80% to pass. 22 in the pool.
   Full bank (matching/word-bank/multi-select/write-ins; 40 items) is in a1-basics-of-nutrition.full.js. */
window.GEM_EXAM = {
  slug: "a1-basics-of-nutrition", title: "Basics of Nutrition",
  contact_hours: 8, ceu_value: 0.8, pass_threshold: 80, draw_mc: 16, placeholder: false,
  questions: [
    {
      "id": "a1-c1-mc-1",
      "chapter": 1,
      "type": "mc",
      "q": "A packaged bar lists 5 g of fat, 20 g of carbohydrate, and 5 g of protein. Using the standard energy values for the macronutrients, roughly how many Calories does it provide?",
      "options": [
        "120 kcal",
        "145 kcal",
        "165 kcal",
        "220 kcal"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "Fat is about 9 kcal/g and carbohydrate and protein about 4 kcal/g, so (5x9) plus (20x4) plus (5x4) equals 145 kcal."
    },
    {
      "id": "a1-c1-mc-2",
      "chapter": 1,
      "type": "mc",
      "q": "A person is discouraged because the scale is up two pounds after three days of consistent eating and training. Based on the chapter, the most accurate response is that:",
      "options": [
        "the two pounds are almost certainly new body fat that must be dieted off",
        "muscle weighs less than fat, so the gain proves the training is not working",
        "the scale is the single most reliable measure of body composition",
        "short-term swings of a few pounds are mostly water and glycogen, so the trend over two to four weeks matters more than any single day"
      ],
      "answer": 3,
      "points": 1,
      "explanation": "The scale reports total mass and cannot separate fat from lean or water. Daily fluctuations are largely water and glycogen, so judge the multi-week trend."
    },
    {
      "id": "a1-c2-mc-3",
      "chapter": 2,
      "type": "mc",
      "q": "Which component typically accounts for the largest share of total daily energy expenditure (TDEE) in a sedentary adult?",
      "options": [
        "The thermic effect of food (TEF)",
        "Deliberate exercise",
        "Basal metabolic rate (BMR)",
        "Non-exercise activity thermogenesis (NEAT)"
      ],
      "answer": 2,
      "points": 1,
      "explanation": "BMR, the cost of simply staying alive, is roughly 60 to 70 percent of TDEE, by far the largest slice."
    },
    {
      "id": "a1-c2-mc-4",
      "chapter": 2,
      "type": "mc",
      "q": "Two people of the same body weight can differ in daily energy expenditure by up to roughly 2,000 kcal. According to the chapter, the component most responsible for this gap is:",
      "options": [
        "basal metabolic rate",
        "the thermic effect of food",
        "structured gym exercise",
        "non-exercise activity thermogenesis (NEAT)"
      ],
      "answer": 3,
      "points": 1,
      "explanation": "NEAT (walking, standing, fidgeting, chores) is the great variable and the movable lever, capable of differing by up to about 2,000 kcal/day between similar people."
    },
    {
      "id": "a1-c3-mc-5",
      "chapter": 3,
      "type": "mc",
      "q": "A meal of rice and beans is often cited as a way to build complete protein because:",
      "options": [
        "both foods are already complete proteins on their own",
        "beans supply vitamin C that rice lacks",
        "grains are low in lysine and legumes are low in methionine, so together they cover each other's gaps",
        "cooking rice destroys its incomplete amino acids"
      ],
      "answer": 2,
      "points": 1,
      "explanation": "Grains and legumes are complementary: each is short on a different essential amino acid, so eaten across the day they supply all nine in usable amounts."
    },
    {
      "id": "a1-c3-mc-6",
      "chapter": 3,
      "type": "mc",
      "q": "Two 200-Calorie snacks hold identical energy: one is nearly all protein, the other nearly all fat. Compared with the fat snack, the protein snack will tend to:",
      "options": [
        "be stored more readily because protein is the body's preferred energy store",
        "cost more energy to process and leave you feeling fuller per calorie",
        "provide more Calories per gram",
        "be burned for fuel before anything else"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "Protein carries the highest thermic cost (about 20 to 30 percent) and is the most filling per calorie, while the body burns it for fuel only when it must."
    },
    {
      "id": "a1-c4-mc-7",
      "chapter": 4,
      "type": "mc",
      "q": "The chapter compares an enzyme to a power tool and its cofactor to the drill bit. The practical implication is that:",
      "options": [
        "cofactors supply most of the energy an enzyme needs",
        "enzymes work equally well with or without their cofactors",
        "a milligram-scale shortfall of a cofactor can halt a reaction that processes thousands of Calories",
        "cofactors are needed only for building bone"
      ],
      "answer": 2,
      "points": 1,
      "explanation": "No bit, no cut: remove a tiny amount of the required cofactor and the enzyme it serves stops working, even though that reaction may handle large amounts of energy."
    },
    {
      "id": "a1-c4-mc-8",
      "chapter": 4,
      "type": "mc",
      "q": "Why is the risk of vitamin toxicity generally higher for vitamins A, D, E, and K than for the B vitamins and vitamin C?",
      "options": [
        "fat-soluble vitamins are stored in the liver and fat rather than flushed out, so excess can accumulate",
        "water-soluble vitamins are far more chemically reactive in the body",
        "fat-soluble vitamins are needed in much larger daily amounts",
        "the body cannot absorb water-soluble vitamins at all"
      ],
      "answer": 0,
      "points": 1,
      "explanation": "Fat-soluble vitamins are stored rather than excreted, so a surplus (almost always from stacked supplements) can build to toxic levels, while water-soluble surpluses are largely flushed in urine."
    },
    {
      "id": "a1-c5-mc-1",
      "chapter": 5,
      "type": "mc",
      "q": "Two snacks have identical calories per serving. One is a raw vegetable soup, the other a small handful of dried fruit. Why is the soup likely to have far lower energy density?",
      "options": [
        "It contains more water, which adds weight and volume without adding calories",
        "Its calories come mostly from protein rather than carbohydrate",
        "It contains more added sugar per gram than the dried fruit",
        "Cooking destroys most of the calories in the vegetables"
      ],
      "answer": 0,
      "points": 1,
      "explanation": "Energy density (calories per gram) is governed mostly by water and fat. Water- and fiber-rich whole foods are bulky and low in calories per bite, so a watery soup lands far lower than a food from which water has been removed."
    },
    {
      "id": "a1-c5-mc-2",
      "chapter": 5,
      "type": "mc",
      "q": "Milling a whole grain into fine flour speeds up its digestion mainly because it:",
      "options": [
        "Adds extra calories to the grain",
        "Disrupts the food matrix, so nutrients are released faster",
        "Increases the protein content of the grain",
        "Removes all of the carbohydrate from the grain"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "Processing disrupts the intact matrix that normally slows nutrient release. Breaking the structure speeds digestion, and the effect hits carbohydrates hardest, protein and fat least."
    },
    {
      "id": "a1-c6-mc-1",
      "chapter": 6,
      "type": "mc",
      "q": "Which statement correctly contrasts ghrelin and leptin?",
      "options": [
        "Leptin is the fast hunger pulse released by the stomach",
        "Ghrelin is released by fat tissue in proportion to fat mass",
        "Ghrelin rises before meals to signal hunger, while leptin reports adequate fat stores over a longer timescale",
        "Both hormones act only to suppress appetite"
      ],
      "answer": 2,
      "points": 1,
      "explanation": "Ghrelin is the fast stomach pulse that rises before meals and falls after, the main hunger-raising hormone. Leptin comes from fat tissue in proportion to fat mass and slowly reports that stores are adequate."
    },
    {
      "id": "a1-c6-mc-2",
      "chapter": 6,
      "type": "mc",
      "q": "Two nights of roughly four hours of sleep tend to:",
      "options": [
        "Raise leptin and reduce overall hunger",
        "Lower leptin and raise ghrelin, increasing cravings for dense, sweet food",
        "Have no measurable effect on appetite hormones",
        "Permanently reset the appetite regulator to a lower set point"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "Short sleep drops leptin about 18% and raises ghrelin and hunger (Spiegel 2004). The body reads a false energy emergency and craves dense, sweet food, while fatigue also lowers spontaneous movement."
    },
    {
      "id": "a1-c7-mc-1",
      "chapter": 7,
      "type": "mc",
      "q": "A beginner person insists that everyone must drink exactly eight glasses of water a day. The most accurate educational response is:",
      "options": [
        "Eight glasses is the scientifically required minimum for all adults",
        "Coffee and tea do not count because they are dehydrating",
        "Drinking as much water as possible is always the safer choice",
        "Needs vary with body size, diet, activity, and climate, so drinking to thirst is a reasonable default"
      ],
      "answer": 3,
      "points": 1,
      "explanation": "The eight-glasses rule has no rigorous basis. Needs vary with size, diet, activity, and climate, tea and coffee count net positive, and drinking to thirst is a sensible default. Forcing large volumes of plain water can even risk hyponatremia."
    },
    {
      "id": "a1-c7-mc-2",
      "chapter": 7,
      "type": "mc",
      "q": "Which single dietary change most directly improves the sodium-to-potassium balance for a typical person eating a Western diet?",
      "options": [
        "Adding a high-dose electrolyte supplement",
        "Removing every trace of salt from cooking",
        "Switching from regular soda to diet soda",
        "Eating more whole plant foods"
      ],
      "answer": 3,
      "points": 1,
      "explanation": "One move fixes both sides: more whole plant foods raises under-eaten potassium and lowers the processed and restaurant sources that supply most sodium. The aim is balance, not zero salt, and high-dose pills are a medical decision."
    },
    {
      "id": "a1-c8-mc-1",
      "chapter": 8,
      "type": "mc",
      "q": "On a Nutrition Facts panel, why is serving size described as both the lens and the trick?",
      "options": [
        "Every other number is multiplied by it, and a package often holds more than one serving",
        "It lists the total calories for the whole container at once",
        "It is the only line on the panel that is legally regulated",
        "It tells you the fiber content of the food directly"
      ],
      "answer": 0,
      "points": 1,
      "explanation": "Serving size is the lens because every number on the panel is scaled to it, and the trick because a container often holds more than one serving. The honest question is how much you will actually eat."
    },
    {
      "id": "a1-c8-mc-2",
      "chapter": 8,
      "type": "mc",
      "q": "A cereal box front says 'Made with whole grains.' What does the back panel most need to confirm?",
      "options": [
        "That the product contains no sodium at all",
        "Whether whole grain is a minor ingredient behind mostly refined flour",
        "That the calorie count on the front is accurate",
        "Whether the product is certified gluten free"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "'Made with' sets no minimum, so a product can be mostly refined flour with a token amount of whole grain. Let the front raise a question and let the back answer it by checking the ingredient order and fiber line."
    },
    {
      "id": "a1-c1-tf-1",
      "chapter": 1,
      "type": "mc",
      "q": "The saying 'a calorie is a calorie' is fully accurate inside the body because every Calorie is handled identically once it is eaten.",
      "options": [
        "True",
        "False"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "It is true in a furnace but only half the story in a body: it ignores food's role as building material and the different processing costs (thermic effect) of different foods."
    },
    {
      "id": "a1-c2-tf-2",
      "chapter": 2,
      "type": "mc",
      "q": "When a person eats less for a sustained period, BMR, NEAT, and metabolic efficiency tend to drift in ways that defend the body's current state, which can produce a weight plateau.",
      "options": [
        "True",
        "False"
      ],
      "answer": 0,
      "points": 1,
      "explanation": "This is metabolic adaptation: expenditure pushes back, so a plateau is an expected response rather than a personal failure."
    },
    {
      "id": "a1-c4-tf-3",
      "chapter": 4,
      "type": "mc",
      "q": "Because the liver banks a multi-year reserve of vitamin B12, a dietary shortfall of B12 typically produces symptoms only slowly.",
      "options": [
        "True",
        "False"
      ],
      "answer": 0,
      "points": 1,
      "explanation": "B12 is the water-soluble exception: its large hepatic reserve fails slowly, so a deficiency can take a long time to surface and warrants clinical testing to confirm."
    },
    {
      "id": "a1-c5-tf-1",
      "chapter": 5,
      "type": "mc",
      "q": "Because a whole apple and a glass of apple juice contain the same sugars on paper, they raise blood sugar at the same speed.",
      "options": [
        "True",
        "False"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "The nutrients are the same on paper, but the whole apple's intact matrix slows release, while juice is sugar in free solution that digests fast. Same nutrients, different speed once the structure is broken."
    },
    {
      "id": "a1-c6-tf-1",
      "chapter": 6,
      "type": "mc",
      "q": "The appetite system is built with a strong low-fuel alarm but a comparatively weak brake against surplus.",
      "options": [
        "True",
        "False"
      ],
      "answer": 0,
      "points": 1,
      "explanation": "This asymmetry reflects that the system evolved to defend against starvation, not surplus. In obesity, leptin can be high yet unread (leptin resistance), so the body acts under-fueled amid plenty."
    },
    {
      "id": "a1-c8-tf-1",
      "chapter": 8,
      "type": "mc",
      "q": "The claim that a new habit becomes automatic in exactly 21 days is well supported, and most habits lock in on that timeline.",
      "options": [
        "True",
        "False"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "The '21 days' figure is a myth. The median time to automaticity is roughly 66 days with wide variation, one missed day does not break the curve, and the goal is automaticity rather than motivation."
    }
  ]
};
