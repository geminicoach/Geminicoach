/* Gemini Education — catalog + curriculum data (plain classic script, no modules/fetch).
   Loaded via <script src="courses-data.js"></script>, sets window.GEMINI_COURSES.
   To publish a course: add its files under courses/<slug>/, fill in `chapters`, set published:true.
   To feature a learning path: add/edit an entry in `stacks`. */
window.GEMINI_COURSES = {
  site: {
    brand: "Gemini Education",
    tagline: "College-level health science, taught like a coach actually talks."
  },

  // Track groupings (browse-by-topic)
  tracks: [
    { id: "A", name: "Nutrition Science" },
    { id: "B", name: "Physiology & Body Systems" },
    { id: "C", name: "Movement & Recovery" },
    { id: "D", name: "Applied & Advanced" },
    { id: "E", name: "Systems & Metabolism" }
  ],

  // Curated "builds" — ordered learning paths drawn from the prerequisite map.
  stacks: [
    { slug: "stack-nutrition", name: "Nutrition, front to back", advanced: false,
      blurb: "The complete nutrition path, from food literacy to advanced strategy.",
      courses: ["a1-basics-of-nutrition","a2-macro-micro-diet","a3-supplementation","a4-advanced-nutrition"] },
    { slug: "stack-hormones", name: "Hormones & your bloodwork", advanced: false,
      blurb: "Learn the hormonal control system, then learn to read your own labs.",
      courses: ["b2-endocrine-hormones","b3-cortisol","b4-reading-bloodwork"] },
    { slug: "stack-fatloss", name: "The fat-loss build", advanced: true,
      blurb: "Metabolism, advanced nutrition, and movement, built toward real fat-loss strategy.",
      courses: ["e1-energy-metabolism","a4-advanced-nutrition","c1-anatomy-biomechanics","d2-advanced-fat-loss"] },
    { slug: "stack-movement", name: "Movement & recovery", advanced: false,
      blurb: "How you move and how you recover, from anatomy to readiness.",
      courses: ["c1-anatomy-biomechanics","b5-nervous-system-i","b6-nervous-system-ii","c2-recovery-science"] }
  ],

  courses: [
    // ---- Track A: Nutrition Science ----
    {
      slug: "a1-basics-of-nutrition", code: "A1", track: "A", title: "Basics of Nutrition", image: "covers/a1.jpg",
      description: "A true-beginner foundation: food as fuel and building material, energy balance, the macros and micros at a working level, and habits that stick.",
      level: "Foundation", minutes_per_chapter: 60, outcomes: 14, published: true,
      chapters: [
        { position:1, title:"More Than a Number: What Food Actually Does", subtitle:"Why every bite is two things at once: fuel to burn and substance to become.", minutes:60,
          reading:"courses/a1-basics-of-nutrition/chapter-1-more-than-a-number-what-food-actually-does.html",
          quiz:"courses/a1-basics-of-nutrition/quiz-1-more-than-a-number-what-food-actually-does.html",
          challenge:"courses/a1-basics-of-nutrition/weekly-challenge-1-more-than-a-number-what-food-actually-does.html" },
        { position:2, title:"The Body's Budget: Where Your Energy Goes", subtitle:"Energy balance is the master equation, but “calories out” is far more than exercise.", minutes:60,
          reading:"courses/a1-basics-of-nutrition/chapter-2-the-body-s-budget-where-your-energy-goes.html",
          quiz:"courses/a1-basics-of-nutrition/quiz-2-the-body-s-budget-where-your-energy-goes.html",
          challenge:"courses/a1-basics-of-nutrition/weekly-challenge-2-the-body-s-budget-where-your-energy-goes.html" },
        { position:3, title:"The Big Three: Protein, Carbs, and Fat", subtitle:"Putting names, numbers, and jobs to the substances that make up every meal.", minutes:60,
          reading:"courses/a1-basics-of-nutrition/chapter-3-the-big-three-protein-carbs-and-fat.html",
          quiz:"courses/a1-basics-of-nutrition/quiz-3-the-big-three-protein-carbs-and-fat.html",
          challenge:"courses/a1-basics-of-nutrition/weekly-challenge-3-the-big-three-protein-carbs-and-fat.html" },
        { position:4, title:"The Small Stuff That Runs Everything: Vitamins and Minerals", subtitle:"Needed in milligrams, indispensable in function.", minutes:60,
          reading:"courses/a1-basics-of-nutrition/chapter-4-the-small-stuff-that-runs-everything-vitamins-and-minerals.html",
          quiz:"courses/a1-basics-of-nutrition/quiz-4-the-small-stuff-that-runs-everything-vitamins-and-minerals.html",
          challenge:"courses/a1-basics-of-nutrition/weekly-challenge-4-the-small-stuff-that-runs-everything-vitamins-and-minerals.html" },
        { position:5, title:"Beyond the Label: Why Real Food Behaves Differently", subtitle:"Two foods can carry identical calories and behave completely differently.", minutes:60,
          reading:"courses/a1-basics-of-nutrition/chapter-5-beyond-the-label-why-real-food-behaves-differently.html",
          quiz:"courses/a1-basics-of-nutrition/quiz-5-beyond-the-label-why-real-food-behaves-differently.html",
          challenge:"courses/a1-basics-of-nutrition/weekly-challenge-5-beyond-the-label-why-real-food-behaves-differently.html" },
        { position:6, title:"The Hunger Thermostat: Appetite, Sleep, and Stress", subtitle:"Why willpower is the wrong tool for a problem the body solves with hormones.", minutes:60,
          reading:"courses/a1-basics-of-nutrition/chapter-6-the-hunger-thermostat-appetite-sleep-and-stress.html",
          quiz:"courses/a1-basics-of-nutrition/quiz-6-the-hunger-thermostat-appetite-sleep-and-stress.html",
          challenge:"courses/a1-basics-of-nutrition/weekly-challenge-6-the-hunger-thermostat-appetite-sleep-and-stress.html" },
        { position:7, title:"The Forgotten Nutrients: Water, Electrolytes, and Fiber", subtitle:"Three things you consume that quietly run hydration and digestion.", minutes:60,
          reading:"courses/a1-basics-of-nutrition/chapter-7-the-forgotten-nutrients-water-electrolytes-and-fiber.html",
          quiz:"courses/a1-basics-of-nutrition/quiz-7-the-forgotten-nutrients-water-electrolytes-and-fiber.html",
          challenge:"courses/a1-basics-of-nutrition/weekly-challenge-7-the-forgotten-nutrients-water-electrolytes-and-fiber.html" },
        { position:8, title:"Putting It on the Plate: Labels, Myths, and Habits That Last", subtitle:"Reading labels, busting myths, and building habits that actually last.", minutes:60,
          reading:"courses/a1-basics-of-nutrition/chapter-8-putting-it-on-the-plate-labels-myths-and-habits-that-last.html",
          quiz:"courses/a1-basics-of-nutrition/quiz-8-putting-it-on-the-plate-labels-myths-and-habits-that-last.html",
          challenge:"courses/a1-basics-of-nutrition/weekly-challenge-8-putting-it-on-the-plate-labels-myths-and-habits-that-last.html" }
      ]
    },
        {
      slug:"a2-macro-micro-diet", code:"A2", track:"A", title:"Macro & Micronutrients + Building a Diet",
      description:"From the macros and micros to setting real targets and building a diet you'll actually follow.",
      level:"Core", minutes_per_chapter:33, published:true,
      chapters:[
        { position:1, title:"The Master Variable: The Number That Anchors Every Decision", subtitle:"Before you argue about protein timing or omega ratios, you have to agree on the budget.", minutes:34,
          reading:"courses/a2-macro-micro-diet/chapter-1-the-master-variable-the-number-that-anchors-every-decision.html",
          quiz:"courses/a2-macro-micro-diet/quiz-1-the-master-variable-the-number-that-anchors-every-decision.html",
          challenge:"courses/a2-macro-micro-diet/weekly-challenge-1-the-master-variable-the-number-that-anchors-every-decision.html" },
        { position:2, title:"Protein, Decoded: Muscle, Leucine, and the BCAA Myth", subtitle:"Why protein earns its priority, how much a meal actually needs, and the mechanistic reason the BCAA tub is mostly expensive flavoring.", minutes:32,
          reading:"courses/a2-macro-micro-diet/chapter-2-protein-decoded-muscle-leucine-and-the-bcaa-myth.html",
          quiz:"courses/a2-macro-micro-diet/quiz-2-protein-decoded-muscle-leucine-and-the-bcaa-myth.html",
          challenge:"courses/a2-macro-micro-diet/weekly-challenge-2-protein-decoded-muscle-leucine-and-the-bcaa-myth.html" },
        { position:3, title:"Carbohydrates Without the Fear: Glycemic Load, Fiber, and Fuel", subtitle:"Why the most feared macronutrient is mostly misunderstood, and how to choose, time, and explain it.", minutes:34,
          reading:"courses/a2-macro-micro-diet/chapter-3-carbohydrates-without-the-fear-glycemic-load-fiber-and-fuel.html",
          quiz:"courses/a2-macro-micro-diet/quiz-3-carbohydrates-without-the-fear-glycemic-load-fiber-and-fuel.html",
          challenge:"courses/a2-macro-micro-diet/weekly-challenge-3-carbohydrates-without-the-fear-glycemic-load-fiber-and-fuel.html" },
        { position:4, title:"Fat Is Not the Enemy", subtitle:"Fatty-acid families, omega balance, and the satiety you keep cutting away.", minutes:31,
          reading:"courses/a2-macro-micro-diet/chapter-4-fat-is-not-the-enemy-fatty-acid-families-omega-balance-and-satiety.html",
          quiz:"courses/a2-macro-micro-diet/quiz-4-fat-is-not-the-enemy-fatty-acid-families-omega-balance-and-satiety.html",
          challenge:"courses/a2-macro-micro-diet/weekly-challenge-4-fat-is-not-the-enemy-fatty-acid-families-omega-balance-and-satiety.html" },
        { position:5, title:"The Vitamin Spectrum: From Deficiency to Excess and the Window Between", subtitle:"Why a diet can pass every macro check and still fail a person quietly, one month at a time.", minutes:35,
          reading:"courses/a2-macro-micro-diet/chapter-5-the-vitamin-spectrum-from-deficiency-to-excess-and-the-window-between.html",
          quiz:"courses/a2-macro-micro-diet/quiz-5-the-vitamin-spectrum-from-deficiency-to-excess-and-the-window-between.html",
          challenge:"courses/a2-macro-micro-diet/weekly-challenge-5-the-vitamin-spectrum-from-deficiency-to-excess-and-the-window-between.html" },
        { position:6, title:"Minerals and the Food Matrix: Why Where You Get It Matters", subtitle:"It is not just what you eat. It is what you absorb.", minutes:34,
          reading:"courses/a2-macro-micro-diet/chapter-6-minerals-and-the-food-matrix-why-where-you-get-it-matters.html",
          quiz:"courses/a2-macro-micro-diet/quiz-6-minerals-and-the-food-matrix-why-where-you-get-it-matters.html",
          challenge:"courses/a2-macro-micro-diet/weekly-challenge-6-minerals-and-the-food-matrix-why-where-you-get-it-matters.html" },
        { position:7, title:"From Targets to Plate: Setting Macros and Building a Diet You'll Actually Follow", subtitle:"Turning a maintenance estimate into goal targets, macros into meals, and a clever plan into a livable one.", minutes:31,
          reading:"courses/a2-macro-micro-diet/chapter-7-from-targets-to-plate-setting-macros-and-building-a-diet-you-ll-actually-follow.html",
          quiz:"courses/a2-macro-micro-diet/quiz-7-from-targets-to-plate-setting-macros-and-building-a-diet-you-ll-actually-follow.html",
          challenge:"courses/a2-macro-micro-diet/weekly-challenge-7-from-targets-to-plate-setting-macros-and-building-a-diet-you-ll-actually-follow.html" },
        { position:8, title:"There Is No Average Eater", subtitle:"Individualizing the framework for people, stages, and patterns without breaking its logic.", minutes:37,
          reading:"courses/a2-macro-micro-diet/chapter-8-there-is-no-average-eater-individualizing-for-people-stages-and-patterns.html",
          quiz:"courses/a2-macro-micro-diet/quiz-8-there-is-no-average-eater-individualizing-for-people-stages-and-patterns.html",
          challenge:"courses/a2-macro-micro-diet/weekly-challenge-8-there-is-no-average-eater-individualizing-for-people-stages-and-patterns.html" }
      ]
    },
        {
      slug:"a3-supplementation", code:"A3", track:"A", title:"Supplementation: When, Why & What",
      description:"A rational, evidence-first framework. Supplements fill gaps, they don't replace food.",
      level:"Core", minutes_per_chapter:36, published:true,
      chapters:[
        { position:1, title:"Fill a Gap or Don't Bother", subtitle:"A decision pathway for supplements that starts from the shortfall, not the sales pitch.", minutes:34,
          reading:"courses/a3-supplementation/chapter-1-fill-a-gap-or-don-t-bother.html",
          quiz:"courses/a3-supplementation/quiz-1-fill-a-gap-or-don-t-bother.html",
          challenge:"courses/a3-supplementation/weekly-challenge-1-fill-a-gap-or-don-t-bother.html" },
        { position:2, title:"The Short List That Actually Earns Its Place", subtitle:"The handful of supplements with a real signal, and the hype layer sitting on top of each one.", minutes:38,
          reading:"courses/a3-supplementation/chapter-2-the-short-list-that-actually-earns-its-place.html",
          quiz:"courses/a3-supplementation/quiz-2-the-short-list-that-actually-earns-its-place.html",
          challenge:"courses/a3-supplementation/weekly-challenge-2-the-short-list-that-actually-earns-its-place.html" },
        { position:3, title:"Powders, Pumps, and What the Evidence Actually Shows", subtitle:"Protein, creatine, and caffeine, treated with the same cold logic as everything else.", minutes:33,
          reading:"courses/a3-supplementation/chapter-3-powders-pumps-and-what-the-evidence-actually-shows.html",
          quiz:"courses/a3-supplementation/quiz-3-powders-pumps-and-what-the-evidence-actually-shows.html",
          challenge:"courses/a3-supplementation/weekly-challenge-3-powders-pumps-and-what-the-evidence-actually-shows.html" },
        { position:4, title:"Test, Don't Guess", subtitle:"Iron, B12, and vitamin D are the supplements where measuring beats guessing, because both deficiency and excess carry real costs.", minutes:37,
          reading:"courses/a3-supplementation/chapter-4-test-don-t-guess.html",
          quiz:"courses/a3-supplementation/quiz-4-test-don-t-guess.html",
          challenge:"courses/a3-supplementation/weekly-challenge-4-test-don-t-guess.html" },
        { position:5, title:"The Gut Frontier: Hope, Hype, and Honest Uncertainty", subtitle:"Why fiber usually wins, why probiotics are not one thing, and when enzymes actually earn their place.", minutes:35,
          reading:"courses/a3-supplementation/chapter-5-the-gut-frontier-hope-hype-and-honest-uncertainty.html",
          quiz:"courses/a3-supplementation/quiz-5-the-gut-frontier-hope-hype-and-honest-uncertainty.html",
          challenge:"courses/a3-supplementation/weekly-challenge-5-the-gut-frontier-hope-hype-and-honest-uncertainty.html" },
        { position:6, title:"Reading the Bottle Like a Skeptic", subtitle:"Four questions that dismantle any label and any marketing claim in under a minute.", minutes:36,
          reading:"courses/a3-supplementation/chapter-6-reading-the-bottle-like-a-skeptic.html",
          quiz:"courses/a3-supplementation/quiz-6-reading-the-bottle-like-a-skeptic.html",
          challenge:"courses/a3-supplementation/weekly-challenge-6-reading-the-bottle-like-a-skeptic.html" },
        { position:7, title:"When More Becomes Harm", subtitle:"Why \"it can't hurt\" is the most expensive sentence in supplementation.", minutes:38,
          reading:"courses/a3-supplementation/chapter-7-when-more-becomes-harm.html",
          quiz:"courses/a3-supplementation/quiz-7-when-more-becomes-harm.html",
          challenge:"courses/a3-supplementation/weekly-challenge-7-when-more-becomes-harm.html" },
        { position:8, title:"Building a Stack You Can Defend", subtitle:"Turning eight weeks of reasoning into one repeatable process that ends in a short, justified plan or an honest \"nothing.\"", minutes:33,
          reading:"courses/a3-supplementation/chapter-8-building-a-stack-you-can-defend.html",
          quiz:"courses/a3-supplementation/quiz-8-building-a-stack-you-can-defend.html",
          challenge:"courses/a3-supplementation/weekly-challenge-8-building-a-stack-you-can-defend.html" }
      ]
    },
        {
      slug:"a4-advanced-nutrition", code:"A4", track:"A", title:"Advanced Nutrition",
      description:"Why diets behave the way they do: metabolism, adaptation, and strategy.",
      level:"Advanced", minutes_per_chapter:35, published:true,
      chapters:[
        { position:1, title:"The Body That Fights Back", subtitle:"Why metabolism is not a number on a spec sheet, but a living system that defends its fuel.", minutes:37,
          reading:"courses/a4-advanced-nutrition/chapter-1-the-body-that-fights-back.html",
          quiz:"courses/a4-advanced-nutrition/quiz-1-the-body-that-fights-back.html",
          challenge:"courses/a4-advanced-nutrition/weekly-challenge-1-the-body-that-fights-back.html" },
        { position:2, title:"Deficits, Surpluses, and the Math of Change", subtitle:"How to set the size of an energy imbalance, respect the physiology, and pick a rate of change your body and your life can actually support.", minutes:35,
          reading:"courses/a4-advanced-nutrition/chapter-2-deficits-surpluses-and-the-math-of-change.html",
          quiz:"courses/a4-advanced-nutrition/quiz-2-deficits-surpluses-and-the-math-of-change.html",
          challenge:"courses/a4-advanced-nutrition/weekly-challenge-2-deficits-surpluses-and-the-math-of-change.html" },
        { position:3, title:"When You Eat: Signal Versus Noise", subtitle:"Meal timing is real, mostly small, and badly oversold. Here is how to tell the difference.", minutes:34,
          reading:"courses/a4-advanced-nutrition/chapter-3-when-you-eat-signal-versus-noise.html",
          quiz:"courses/a4-advanced-nutrition/quiz-3-when-you-eat-signal-versus-noise.html",
          challenge:"courses/a4-advanced-nutrition/weekly-challenge-3-when-you-eat-signal-versus-noise.html" },
        { position:4, title:"Keto, Fasting, Flexible: What Actually Drives Results", subtitle:"Three diet tribes, one shared mechanism, and the variable that quietly decides almost everything.", minutes:33,
          reading:"courses/a4-advanced-nutrition/chapter-4-keto-fasting-flexible-what-actually-drives-results.html",
          quiz:"courses/a4-advanced-nutrition/quiz-4-keto-fasting-flexible-what-actually-drives-results.html",
          challenge:"courses/a4-advanced-nutrition/weekly-challenge-4-keto-fasting-flexible-what-actually-drives-results.html" },
        { position:5, title:"The Chemical Messengers of Hunger and Fullness", subtitle:"How ghrelin, leptin, insulin, and the gut's satiety peptides feed a hunger circuit in your brain, why palatable food overrides fullness, and what GLP-1 medications actually do.", minutes:36,
          reading:"courses/a4-advanced-nutrition/chapter-5-the-chemical-messengers-of-hunger-and-fullness.html",
          quiz:"courses/a4-advanced-nutrition/quiz-5-the-chemical-messengers-of-hunger-and-fullness.html",
          challenge:"courses/a4-advanced-nutrition/weekly-challenge-5-the-chemical-messengers-of-hunger-and-fullness.html" },
        { position:6, title:"The Ecosystem Inside You", subtitle:"The gut microbiome, digestion, and inflammation, graded honestly.", minutes:33,
          reading:"courses/a4-advanced-nutrition/chapter-6-the-ecosystem-inside-you.html",
          quiz:"courses/a4-advanced-nutrition/quiz-6-the-ecosystem-inside-you.html",
          challenge:"courses/a4-advanced-nutrition/weekly-challenge-6-the-ecosystem-inside-you.html" },
        { position:7, title:"One Size Fits No One", subtitle:"How to take the course's general rules and bend them, with reasons, to the actual human in front of you.", minutes:38,
          reading:"courses/a4-advanced-nutrition/chapter-7-one-size-fits-no-one.html",
          quiz:"courses/a4-advanced-nutrition/quiz-7-one-size-fits-no-one.html",
          challenge:"courses/a4-advanced-nutrition/weekly-challenge-7-one-size-fits-no-one.html" },
        { position:8, title:"How to Read Nutrition Science Without Getting Fooled", subtitle:"The meta-skill that protects everything you have learned from the next viral headline.", minutes:33,
          reading:"courses/a4-advanced-nutrition/chapter-8-how-to-read-nutrition-science-without-getting-fooled.html",
          quiz:"courses/a4-advanced-nutrition/quiz-8-how-to-read-nutrition-science-without-getting-fooled.html",
          challenge:"courses/a4-advanced-nutrition/weekly-challenge-8-how-to-read-nutrition-science-without-getting-fooled.html" }
      ]
    },

    // ---- Track B: Physiology & Body Systems ----
    { slug:"b1-digestive-system", code:"B1", track:"B", title:"The Digestive System",
      description:"How food becomes usable fuel, and what goes wrong, at CEU-style depth.", level:"Core", published:false },
    { slug:"b2-endocrine-hormones", code:"B2", track:"B", title:"Endocrine System / Hormones 101",
      description:"The hormonal control system: the major players and how they keep you in balance.", level:"Core", published:false },
    { slug:"b3-cortisol", code:"B3", track:"B", title:"Cortisol & the Stress-Hormone System",
      description:"Cortisol as a vital molecule, not a villain, and what chronic stress actually does.", level:"Advanced", published:false },
    { slug:"b4-reading-bloodwork", code:"B4", track:"B", title:"Reading Your Bloodwork",
      description:"Read your own common lab panels: normal vs. optimal, and what training and supplements shift.", level:"Advanced", published:false },
    { slug:"b5-nervous-system-i", code:"B5", track:"B", title:"Nervous System I: Foundations",
      description:"A working model of the nervous system: structure, signaling, stress, and recovery.", level:"Core", published:false },
    { slug:"b6-nervous-system-ii", code:"B6", track:"B", title:"Nervous System II: Applied",
      description:"Motor control, the neuromuscular system, skill acquisition, and CNS fatigue.", level:"Advanced", published:false },

    // ---- Track C: Movement & Recovery ----
    { slug:"c1-anatomy-biomechanics", code:"C1", track:"C", title:"Musculoskeletal Anatomy & Lifting Biomechanics",
      description:"The anatomy and mechanics behind why lifts look and feel the way they do.", level:"Core", published:false },
    { slug:"c2-recovery-science", code:"C2", track:"C", title:"Recovery Science",
      description:"How recovery actually works: the systems, the levers, and the truth about modalities.", level:"Core", published:false },

    // ---- Track D: Applied & Advanced ----
    { slug:"d1-aas-education", code:"D1", track:"D", title:"AAS: Education & Harm Reduction",
      description:"A rigorous, educational look at anabolic steroids: effects, risks, and what to monitor. Not a how-to.", level:"Advanced", published:false },
    { slug:"d2-advanced-fat-loss", code:"D2", track:"D", title:"Advanced Fat Loss",
      description:"Metabolism, training methods, and population strategy synthesized into real fat-loss strategy.", level:"Advanced", published:false },

    // ---- Track E: Systems & Metabolism ----
    { slug:"e1-energy-metabolism", code:"E1", track:"E", title:"Energy Systems & Metabolism",
      description:"How the body makes and uses energy at every level, plus body composition.", level:"Core", published:false },
    { slug:"e2-immune-inflammation", code:"E2", track:"E", title:"Immune System & Inflammation",
      description:"How immunity and inflammation work, and how training, stress, gut, and food shape them.", level:"Core", published:false },
    { slug:"e3-female-physiology", code:"E3", track:"E", title:"Female Physiology & the Menstrual Cycle",
      description:"Female-specific physiology done properly: the cycle, life stages, and their training and nutrition effects.", level:"Core", published:false }
  ]
};
