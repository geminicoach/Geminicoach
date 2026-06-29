/* Gemini Education — FINAL EXAM data for A1 (classic script, no modules).
   Loaded by exam.html as exams/<slug>.js  ->  sets window.GEM_EXAM.

   *** PLACEHOLDER QUESTIONS *** — the CLASSBUILD / REVISION thread replaces these
   with the real, content-locked final exam once A1's chapters are tonally final.

   FORMAT
   - Exam meta: contact_hours, ceu_value, pass_threshold, draw_mc, placeholder.
   - draw_mc: how many multiple-choice questions to randomly draw per attempt
     (from the MC pool below). Leave unset to use all of them.
   - Multiple choice:  { q, options:[...], answer:<index of correct option>, points?:1 }
   - Written (AI-graded) questions are PARKED for now (grader disabled until we circle
     back and set ANTHROPIC_API_KEY). The engine still supports them — to re-enable,
     add objects like { type:"free", q, model, key_points:[...], points } to this array.
     Nothing else needs to change. See BUILD-STATUS.md. */
window.GEM_EXAM = {
  slug: "a1-basics-of-nutrition",
  title: "Basics of Nutrition",
  contact_hours: 8,        // structured learning hours
  ceu_value: 0.8,          // NASM: 0.1 CEU per hour
  pass_threshold: 80,      // percent required to pass (NASM-aligned)
  draw_mc: 12,             // draw 12 random MC per attempt
  placeholder: true,       // flag so the UI warns this is a draft exam
  questions: [
    { q: "What are the two simultaneous jobs every food does?",
      options: ["Fuel for energy and building material for the body", "Protein and water", "Vitamins and minerals only", "Taste and texture"], answer: 0 },
    { q: "Why can someone eat enough calories yet still develop a deficiency disease like scurvy?",
      options: ["The diet lacked an essential nutrient the body cannot make", "They ate too much fat", "Calories block vitamin absorption", "Deficiencies only come from eating too little total food"], answer: 0 },
    { q: "About how many calories per gram does fat provide, versus carbohydrate and protein?",
      options: ["About 9, versus about 4", "About 4, versus about 9", "The same, about 4 each", "About 2 each"], answer: 0 },
    { q: "The \"Calorie\" with a capital C on a food label is actually a:",
      options: ["Kilocalorie (1,000 small calories)", "Single small calorie", "Gram of fat", "Measure of fullness"], answer: 0 },
    { q: "Why is body composition more informative than the number on a scale?",
      options: ["It distinguishes fat mass from lean mass, which the scale treats as identical", "It weighs you more accurately", "It only counts muscle", "It measures height"], answer: 0 },
    { q: "Which is the best reason calorie counts on labels are estimates, not exact?",
      options: ["The body does not extract every calorie a lab can, especially from whole foods", "Labels are printed wrong on purpose", "Calories change after cooking every time", "Scales are inaccurate"], answer: 0 },
    { q: "Two 350-calorie breakfasts can affect you very differently mainly because of:",
      options: ["Their fuel-vs-building-material makeup and how fast they release energy", "Their color", "The time of day only", "Their price"], answer: 0 },
    { q: "Which domain that nutrition affects is felt fastest, often within an hour?",
      options: ["Energy", "Long-term disease risk", "Body composition", "Bone density"], answer: 0 },
    { q: "An 'essential' nutrient means:",
      options: ["The body cannot make it, so it must come from the diet", "It is the most important nutrient", "It is only needed by athletes", "It is found in every food"], answer: 0 },
    { q: "Fiber, water, and electrolytes are best described as:",
      options: ["Often-overlooked components that quietly support digestion and hydration", "Macronutrients that provide most energy", "Types of protein", "Vitamins"], answer: 0 },
    { q: "Which three nutrients are the macronutrients?",
      options: ["Protein, carbohydrate, and fat", "Vitamins, minerals, and water", "Fiber, sugar, and salt", "Calcium, iron, and zinc"], answer: 0 },
    { q: "'Energy balance' refers to:",
      options: ["The relationship between calories taken in and calories used", "Eating at balanced times of day", "Balancing macros on every plate", "How energetic you feel"], answer: 0 },
    { q: "Protein's standout role compared with carbohydrate and fat is that it:",
      options: ["Supplies amino acids used to build and repair tissue", "Is the body's fastest fuel", "Cannot be used for energy", "Is stored as body fat most easily"], answer: 0 },
    { q: "A 'nutrient-dense' food is one that:",
      options: ["Delivers a lot of nutrients relative to its calories", "Has the most calories", "Is always low in fat", "Contains no carbohydrate"], answer: 0 },
    { q: "Why is 'calories out' more than just exercise?",
      options: ["Most energy is spent on basic functions like breathing, circulation, and digestion", "Exercise is the only thing that burns calories", "Calories out only counts steps", "The body burns no energy at rest"], answer: 0 },
    { q: "The most practical first habit for a true beginner is usually to:",
      options: ["Build awareness of what and how much they currently eat", "Cut out an entire food group", "Count every micronutrient", "Train for a marathon"], answer: 0 }
  ]
};
