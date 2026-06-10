/* Gemini Education — course catalog data (plain classic script, no modules/fetch).
   Loaded via <script src="courses-data.js"></script>, sets a global.
   To add a course: add its files under courses/<slug>/ and append an entry here. */
window.GEMINI_COURSES = {
  site: {
    brand: "Gemini Education",
    tagline: "College-level health science, taught like a coach actually talks."
  },
  courses: [
    {
      slug: "a1-basics-of-nutrition",
      code: "A1",
      track: "Nutrition Science",
      title: "Basics of Nutrition",
      description: "A true-beginner foundation: how to think about food as both fuel and building material, energy balance, the macros and micros at a working level, and the habits that make it all stick.",
      level: "Foundation",
      minutes_per_chapter: 60,
      outcomes: 14,
      published: true,
      chapters: [
        { position: 1, title: "More Than a Number: What Food Actually Does", subtitle: "Why every bite is two things at once — fuel to burn and substance to become.", minutes: 60,
          reading: "courses/a1-basics-of-nutrition/chapter-1-more-than-a-number-what-food-actually-does.html",
          quiz: "courses/a1-basics-of-nutrition/quiz-1-more-than-a-number-what-food-actually-does.html",
          challenge: "courses/a1-basics-of-nutrition/weekly-challenge-1-more-than-a-number-what-food-actually-does.html" },
        { position: 2, title: "The Body's Budget: Where Your Energy Goes", subtitle: "Energy balance is the master equation — but “calories out” is far more than exercise.", minutes: 60,
          reading: "courses/a1-basics-of-nutrition/chapter-2-the-body-s-budget-where-your-energy-goes.html",
          quiz: "courses/a1-basics-of-nutrition/quiz-2-the-body-s-budget-where-your-energy-goes.html",
          challenge: "courses/a1-basics-of-nutrition/weekly-challenge-2-the-body-s-budget-where-your-energy-goes.html" },
        { position: 3, title: "The Big Three: Protein, Carbs, and Fat", subtitle: "Putting names, numbers, and jobs to the substances that make up every meal.", minutes: 60,
          reading: "courses/a1-basics-of-nutrition/chapter-3-the-big-three-protein-carbs-and-fat.html",
          quiz: "courses/a1-basics-of-nutrition/quiz-3-the-big-three-protein-carbs-and-fat.html",
          challenge: "courses/a1-basics-of-nutrition/weekly-challenge-3-the-big-three-protein-carbs-and-fat.html" },
        { position: 4, title: "The Small Stuff That Runs Everything: Vitamins and Minerals", subtitle: "Needed in milligrams, indispensable in function.", minutes: 60,
          reading: "courses/a1-basics-of-nutrition/chapter-4-the-small-stuff-that-runs-everything-vitamins-and-minerals.html",
          quiz: "courses/a1-basics-of-nutrition/quiz-4-the-small-stuff-that-runs-everything-vitamins-and-minerals.html",
          challenge: "courses/a1-basics-of-nutrition/weekly-challenge-4-the-small-stuff-that-runs-everything-vitamins-and-minerals.html" },
        { position: 5, title: "Beyond the Label: Why Real Food Behaves Differently", subtitle: "Two foods can carry identical calories and behave completely differently.", minutes: 60,
          reading: "courses/a1-basics-of-nutrition/chapter-5-beyond-the-label-why-real-food-behaves-differently.html",
          quiz: "courses/a1-basics-of-nutrition/quiz-5-beyond-the-label-why-real-food-behaves-differently.html",
          challenge: "courses/a1-basics-of-nutrition/weekly-challenge-5-beyond-the-label-why-real-food-behaves-differently.html" },
        { position: 6, title: "The Hunger Thermostat: Appetite, Sleep, and Stress", subtitle: "Why willpower is the wrong tool for a problem the body solves with hormones.", minutes: 60,
          reading: "courses/a1-basics-of-nutrition/chapter-6-the-hunger-thermostat-appetite-sleep-and-stress.html",
          quiz: "courses/a1-basics-of-nutrition/quiz-6-the-hunger-thermostat-appetite-sleep-and-stress.html",
          challenge: "courses/a1-basics-of-nutrition/weekly-challenge-6-the-hunger-thermostat-appetite-sleep-and-stress.html" },
        { position: 7, title: "The Forgotten Nutrients: Water, Electrolytes, and Fiber", subtitle: "Three things you consume that quietly run hydration and digestion.", minutes: 60,
          reading: "courses/a1-basics-of-nutrition/chapter-7-the-forgotten-nutrients-water-electrolytes-and-fiber.html",
          quiz: "courses/a1-basics-of-nutrition/quiz-7-the-forgotten-nutrients-water-electrolytes-and-fiber.html",
          challenge: "courses/a1-basics-of-nutrition/weekly-challenge-7-the-forgotten-nutrients-water-electrolytes-and-fiber.html" },
        { position: 8, title: "Putting It on the Plate: Labels, Myths, and Habits That Last", subtitle: "Reading labels, busting myths, and building habits that actually last.", minutes: 60,
          reading: "courses/a1-basics-of-nutrition/chapter-8-putting-it-on-the-plate-labels-myths-and-habits-that-last.html",
          quiz: "courses/a1-basics-of-nutrition/quiz-8-putting-it-on-the-plate-labels-myths-and-habits-that-last.html",
          challenge: "courses/a1-basics-of-nutrition/weekly-challenge-8-putting-it-on-the-plate-labels-myths-and-habits-that-last.html" }
      ]
    }
  ]
};
