/* Gemini Education: A1 (Basics of Nutrition) FULL exam bank (all question types).
   PARKED until the portal thread upgrades exam.html to render matching/multi-select/word-bank/write-in.
   Live exam (a1-basics-of-nutrition.js) is an interim MC+TF subset on the current engine. Schema: education/EXAM-SPEC.md. */
window.GEM_EXAM = {
  slug: "a1-basics-of-nutrition", title: "Basics of Nutrition",
  contact_hours: 8, ceu_value: 0.8, pass_threshold: 80, placeholder: false,
  draw: { mc: 12, multi: 4, tf: 4, match: 2, fill: 3, free: 0 },
  shuffle: { questions: true, options: true },
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
      "id": "a1-c1-tf-1",
      "chapter": 1,
      "type": "tf",
      "q": "The saying 'a calorie is a calorie' is fully accurate inside the body because every Calorie is handled identically once it is eaten.",
      "answer": false,
      "points": 1,
      "explanation": "It is true in a furnace but only half the story in a body: it ignores food's role as building material and the different processing costs (thermic effect) of different foods."
    },
    {
      "id": "a1-c1-match-2",
      "chapter": 1,
      "type": "match",
      "q": "Match each thing food delivers to the job it primarily does.",
      "pairs": [
        {
          "left": "Protein",
          "right": "Energy plus the main building material"
        },
        {
          "left": "Carbohydrate",
          "right": "Quick fuel that also carries fiber"
        },
        {
          "left": "Fat",
          "right": "Dense fuel that also builds membranes and hormones"
        },
        {
          "left": "Vitamins",
          "right": "No energy; help run thousands of reactions"
        },
        {
          "left": "Water",
          "right": "No energy; the medium and the largest part of you"
        }
      ],
      "points": 5
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
      "id": "a1-c2-multi-1",
      "chapter": 2,
      "type": "multi",
      "q": "Which of the following are among the four line items on the 'calories out' side of total daily energy expenditure (TDEE)? Select all that apply.",
      "options": [
        "Basal metabolic rate (BMR)",
        "Thermic effect of food (TEF)",
        "Non-exercise activity thermogenesis (NEAT)",
        "Deliberate exercise",
        "Thermic effect of sleep (TES)"
      ],
      "answers": [
        0,
        1,
        2,
        3
      ],
      "scoring": "all_or_nothing",
      "points": 1,
      "explanation": "TDEE breaks into BMR, TEF, NEAT, and exercise. 'Thermic effect of sleep' is not one of the four components."
    },
    {
      "id": "a1-c2-tf-2",
      "chapter": 2,
      "type": "tf",
      "q": "When a person eats less for a sustained period, BMR, NEAT, and metabolic efficiency tend to drift in ways that defend the body's current state, which can produce a weight plateau.",
      "answer": true,
      "points": 1,
      "explanation": "This is metabolic adaptation: expenditure pushes back, so a plateau is an expected response rather than a personal failure."
    },
    {
      "id": "a1-c2-fill-1",
      "chapter": 2,
      "type": "fill",
      "q": "Energy balance states that the change in the body's energy stores equals energy {{1}} minus energy {{2}}.",
      "bank": [
        "intake",
        "expenditure",
        "storage",
        "absorption"
      ],
      "answers": {
        "1": "intake",
        "2": "expenditure"
      },
      "points": 2
    },
    {
      "id": "a1-c2-free-1",
      "chapter": 2,
      "type": "free",
      "q": "A person says they plan to lose fat by simply 'eating a lot less and running more every day.' Using the chapter's model of energy expenditure, explain at least two reasons this plan can stall, and describe a more sustainable approach.",
      "model": "Expenditure is dynamic, not a fixed number you set at the gym, so it pushes back against big cuts. First, metabolic adaptation: when intake drops sharply, BMR, NEAT, and metabolic efficiency all drift downward to defend the body's current state, which shows up as a plateau rather than a failure. Second, constrained expenditure means that at high activity total burn tends to plateau instead of climbing forever, and you cannot out-train the fork, since a single reward food can outweigh a workout. A more sustainable approach uses a moderate deficit rather than a crash, protects NEAT (walking, standing, chores) and keeps protein high and resistance training in to preserve lean mass and defend BMR, and judges progress by the bodyweight trend over two to four weeks. Signs like unexplained weight change or disordered eating warrant referral to a qualified clinician.",
      "key_points": [
        "Expenditure is dynamic and pushes back; it is not a fixed number",
        "Metabolic adaptation: BMR, NEAT, and efficiency drift down when intake is cut hard, producing a plateau",
        "Constrained TDEE and 'you cannot out-train the fork': added exercise does not raise burn without limit",
        "Sustainable fix: moderate deficit, protect NEAT, keep protein and resistance training to hold lean mass and BMR",
        "Judge progress over two to four weeks and refer red flags to a qualified clinician"
      ],
      "rubric": {
        "pass_threshold": 70,
        "points": [
          {
            "desc": "Identifies metabolic adaptation (expenditure drifts down to defend current state)",
            "weight": 30
          },
          {
            "desc": "Identifies a second limiter such as constrained TDEE or not out-training the fork",
            "weight": 25
          },
          {
            "desc": "Describes a sustainable approach: moderate deficit, protect NEAT, protein and training for lean mass",
            "weight": 30
          },
          {
            "desc": "Notes judging the multi-week trend and staying within role (refer red flags to a clinician)",
            "weight": 15
          }
        ]
      },
      "points": 5,
      "appeal": true
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
      "id": "a1-c3-multi-2",
      "chapter": 3,
      "type": "multi",
      "q": "Which of the following are genuine roles of dietary fat described in the chapter? Select all that apply.",
      "options": [
        "Building cell membranes",
        "Serving as raw material for steroid hormones",
        "Enabling absorption of vitamins A, D, E, and K",
        "Acting as the brain's preferred quick fuel",
        "Providing a dense energy store at about 9 kcal/g"
      ],
      "answers": [
        0,
        1,
        2,
        4
      ],
      "scoring": "all_or_nothing",
      "points": 1,
      "explanation": "Fat builds membranes and hormones, carries fat-soluble vitamins, and is a dense store. The brain's preferred quick fuel is glucose from carbohydrate, not fat."
    },
    {
      "id": "a1-c3-fill-2",
      "chapter": 3,
      "type": "fill",
      "q": "On a nutrition label, fat provides about {{1}} Calories per gram, while both carbohydrate and protein provide about {{2}} Calories per gram.",
      "bank": [
        "9",
        "4",
        "7",
        "2"
      ],
      "answers": {
        "1": "9",
        "2": "4"
      },
      "points": 2
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
      "id": "a1-c4-multi-3",
      "chapter": 4,
      "type": "multi",
      "q": "Which statements about dietary iron does the chapter support? Select all that apply.",
      "options": [
        "Heme iron from meat is absorbed more efficiently than non-heme iron from plants",
        "Vitamin C improves absorption of non-heme iron",
        "Tea and phytates can reduce iron absorption",
        "Iron's main job is building nerve myelin",
        "Iron is required for oxygen transport"
      ],
      "answers": [
        0,
        1,
        2,
        4
      ],
      "scoring": "all_or_nothing",
      "points": 1,
      "explanation": "Iron carries oxygen; heme absorbs well, non-heme poorly, vitamin C boosts it, tea and phytates cut it. Building nerve myelin is a role of vitamin B12, not iron."
    },
    {
      "id": "a1-c4-tf-3",
      "chapter": 4,
      "type": "tf",
      "q": "Because the liver banks a multi-year reserve of vitamin B12, a dietary shortfall of B12 typically produces symptoms only slowly.",
      "answer": true,
      "points": 1,
      "explanation": "B12 is the water-soluble exception: its large hepatic reserve fails slowly, so a deficiency can take a long time to surface and warrants clinical testing to confirm."
    },
    {
      "id": "a1-c4-match-1",
      "chapter": 4,
      "type": "match",
      "q": "Match each classic deficiency to the nutrient whose shortfall causes it.",
      "pairs": [
        {
          "left": "Scurvy",
          "right": "Vitamin C"
        },
        {
          "left": "Rickets",
          "right": "Vitamin D"
        },
        {
          "left": "Anemia (this type)",
          "right": "Iron"
        },
        {
          "left": "Goitre",
          "right": "Iodine"
        }
      ],
      "points": 4
    },
    {
      "id": "a1-c4-fill-3",
      "chapter": 4,
      "type": "fill",
      "q": "Vitamins A, D, E, and K are {{1}}, so the body can store them and excess can build toward toxicity, whereas the B vitamins and vitamin C are {{2}} and their surplus is largely flushed out in urine.",
      "bank": [
        "fat-soluble",
        "water-soluble",
        "heat-stable",
        "mineral-based"
      ],
      "answers": {
        "1": "fat-soluble",
        "2": "water-soluble"
      },
      "points": 2
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
      "id": "a1-c5-multi-1",
      "chapter": 5,
      "type": "multi",
      "q": "In the tightly controlled trial where an ultra-processed diet drove about 500 extra calories a day, which variables had been matched to the whole-food diet? Select all that apply.",
      "options": [
        "Total calories offered",
        "Macronutrients",
        "Sugar and sodium",
        "Fiber",
        "The brand of the food packaging"
      ],
      "answers": [
        0,
        1,
        2,
        3
      ],
      "scoring": "all_or_nothing",
      "points": 1,
      "explanation": "Calories, macros, sugar, sodium, and fiber were all matched, and the ultra-processed diet still drove about 500 extra calories a day. This shows calorie-counting alone is an incomplete model of how food behaves."
    },
    {
      "id": "a1-c5-tf-1",
      "chapter": 5,
      "type": "tf",
      "q": "Because a whole apple and a glass of apple juice contain the same sugars on paper, they raise blood sugar at the same speed.",
      "answer": false,
      "points": 1,
      "explanation": "The nutrients are the same on paper, but the whole apple's intact matrix slows release, while juice is sugar in free solution that digests fast. Same nutrients, different speed once the structure is broken."
    },
    {
      "id": "a1-c5-fill-1",
      "chapter": 5,
      "type": "fill",
      "q": "For whole foods, energy density and {{1}} density tend to run inversely, so an energy-dense food is usually nutrient-{{2}}.",
      "bank": [
        "nutrient",
        "poor",
        "protein",
        "rich"
      ],
      "answers": {
        "1": "nutrient",
        "2": "poor"
      },
      "points": 2
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
      "id": "a1-c6-tf-1",
      "chapter": 6,
      "type": "tf",
      "q": "The appetite system is built with a strong low-fuel alarm but a comparatively weak brake against surplus.",
      "answer": true,
      "points": 1,
      "explanation": "This asymmetry reflects that the system evolved to defend against starvation, not surplus. In obesity, leptin can be high yet unread (leptin resistance), so the body acts under-fueled amid plenty."
    },
    {
      "id": "a1-c6-match-1",
      "chapter": 6,
      "type": "match",
      "q": "Match each appetite signal to its description.",
      "pairs": [
        {
          "left": "Ghrelin",
          "right": "Fast hunger pulse from the stomach that rises before meals"
        },
        {
          "left": "Leptin",
          "right": "Slow signal from fat tissue reporting that energy stores are adequate"
        },
        {
          "left": "CCK",
          "right": "Early stop signal released within minutes of fat and protein"
        },
        {
          "left": "GLP-1 and PYY",
          "right": "Slower, longer-lasting fullness signals from the lower gut"
        }
      ],
      "points": 4
    },
    {
      "id": "a1-c6-free-1",
      "chapter": 6,
      "type": "free",
      "q": "A person says they 'have no willpower' because their cravings for sweet, dense food spike hardest on days after poor sleep and heavy stress. Using the appetite regulator, explain what is likely happening physiologically, then outline a role-appropriate approach that changes the inputs rather than relying on willpower. Note when this situation would warrant referral.",
      "model": "Poor sleep and chronic stress are shifting the appetite regulator, not revealing a character flaw. Two nights of short sleep lower leptin and raise ghrelin, so the body reads a false energy emergency and pushes cravings toward dense, sweet food. Chronic stress raises cortisol, which biases the reward system toward palatable, hedonic eating, and the same fatigue lowers spontaneous movement (NEAT), so intake rises while expenditure falls. Willpower is a poor long-term plan because it fatigues across the day while the regulator pushes steadily, which is why the fix is to change the inputs. A role-appropriate approach protects sleep first because it is invisible on a food log, builds meals around protein and viscous fiber and uses high-volume, low-energy-density foods to raise fullness per calorie, manages chronic stressors, and engineers the food environment so the easy choice is the helpful one. Referral to a qualified professional is warranted if there are signs of disordered eating, such as recurring loss of control around food, purging, severe restriction, or marked unexplained weight change. Work within your role and avoid diagnosing.",
      "key_points": [
        "Short sleep lowers leptin and raises ghrelin, creating a false energy emergency and cravings for dense, sweet food",
        "Chronic stress raises cortisol, biasing the reward system toward palatable, hedonic eating",
        "Fatigue also lowers spontaneous movement (NEAT), so intake rises while expenditure falls",
        "Willpower fatigues across the day while the regulator pushes steadily, so it is not a durable fix",
        "Change the inputs: protect sleep, build meals around protein and fiber, use volume, manage stress, and shape the food environment",
        "Refer for signs of disordered eating and stay within role rather than diagnosing"
      ],
      "rubric": {
        "pass_threshold": 70,
        "points": [
          {
            "desc": "Identifies that short sleep lowers leptin and raises ghrelin, driving cravings",
            "weight": 25
          },
          {
            "desc": "Explains chronic stress and cortisol shifting toward hedonic eating, and the NEAT drop",
            "weight": 20
          },
          {
            "desc": "Explains why willpower is not the real problem and not a durable fix",
            "weight": 15
          },
          {
            "desc": "Recommends changing inputs: sleep, protein and fiber, volume, stress, and food environment",
            "weight": 25
          },
          {
            "desc": "Flags referral for disordered-eating signs and staying within role",
            "weight": 15
          }
        ]
      },
      "points": 5,
      "appeal": true
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
      "id": "a1-c7-multi-1",
      "chapter": 7,
      "type": "multi",
      "q": "Which of the following are genuine jobs that dietary fiber performs? Select all that apply.",
      "options": [
        "Slowing digestion and flattening the blood-sugar spike",
        "Feeding gut bacteria that produce short-chain fatty acids",
        "Serving as the body's main source of calories",
        "Adding bulk that supports fullness and regularity",
        "Marking a food as minimally processed"
      ],
      "answers": [
        0,
        1,
        3,
        4
      ],
      "scoring": "all_or_nothing",
      "points": 1,
      "explanation": "Fiber slows digestion, feeds the microbiome, adds bulk, and its presence signals minimal processing. Because it is non-digestible carbohydrate, it is not a calorie source, which is why option three is wrong."
    },
    {
      "id": "a1-c7-match-1",
      "chapter": 7,
      "type": "match",
      "q": "Match each term to its role in water balance and hydration.",
      "pairs": [
        {
          "left": "Osmoreceptors",
          "right": "Sense the solute concentration of the blood"
        },
        {
          "left": "Baroreceptors",
          "right": "Sense blood volume and pressure"
        },
        {
          "left": "ADH (vasopressin)",
          "right": "Tells the kidneys to reabsorb water and drives thirst"
        },
        {
          "left": "Hyponatremia",
          "right": "Sodium diluted by drinking too much plain water too fast"
        }
      ],
      "points": 4
    },
    {
      "id": "a1-c7-fill-1",
      "chapter": 7,
      "type": "fill",
      "q": "General fiber targets are about {{1}} grams a day for women and about {{2}} grams a day for men, yet over 90% of adults fall short.",
      "bank": [
        "25",
        "38",
        "50",
        "15"
      ],
      "answers": {
        "1": "25",
        "2": "38"
      },
      "points": 2
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
      "id": "a1-c8-multi-1",
      "chapter": 8,
      "type": "multi",
      "q": "Which statements accurately describe the half-plate rule? Select all that apply.",
      "options": [
        "Half the plate is vegetables, fruit, or salad",
        "A quarter of the plate is protein",
        "A quarter of the plate is intact carbohydrate",
        "It requires weighing every food in grams",
        "It bans a specific list of forbidden foods"
      ],
      "answers": [
        0,
        1,
        2
      ],
      "scoring": "all_or_nothing",
      "points": 1,
      "explanation": "The half-plate rule uses geometry instead of arithmetic: half produce, a quarter protein, a quarter intact carbohydrate. It needs no grams or app and bans no food, so options four and five are wrong."
    },
    {
      "id": "a1-c8-tf-1",
      "chapter": 8,
      "type": "tf",
      "q": "The claim that a new habit becomes automatic in exactly 21 days is well supported, and most habits lock in on that timeline.",
      "answer": false,
      "points": 1,
      "explanation": "The '21 days' figure is a myth. The median time to automaticity is roughly 66 days with wide variation, one missed day does not break the curve, and the goal is automaticity rather than motivation."
    },
    {
      "id": "a1-c8-fill-1",
      "chapter": 8,
      "type": "fill",
      "q": "On the label, {{1}} sugars are isolated from what was poured in, while natural sugars arrive packaged with fiber and water. A quick %DV rule of thumb calls 5% or less low and {{2}} or more high.",
      "bank": [
        "added",
        "20%",
        "total",
        "40%"
      ],
      "answers": {
        "1": "added",
        "2": "20%"
      },
      "points": 2
    }
  ]
};
