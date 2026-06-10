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
      slug: "a1-basics-of-nutrition", code: "A1", track: "A", title: "Basics of Nutrition",
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
    { slug:"a2-macro-micro-diet", code:"A2", track:"A", title:"Macro & Micronutrients + Building a Diet",
      description:"From “what they are” to setting real targets and building a diet you'll actually follow.", level:"Core", published:false },
    { slug:"a3-supplementation", code:"A3", track:"A", title:"Supplementation: When, Why & What",
      description:"A rational, evidence-first framework. Supplements fill gaps, they don't replace food.", level:"Core", published:false },
    { slug:"a4-advanced-nutrition", code:"A4", track:"A", title:"Advanced Nutrition",
      description:"Why diets behave the way they do: metabolism, adaptation, and strategy.", level:"Advanced", published:false },

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
