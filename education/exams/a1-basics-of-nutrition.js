/* Gemini Education — FINAL EXAM data for A1 (classic script, no modules).
   Loaded by exam.html as: exams/<slug>.js  ->  sets window.GEM_EXAM.
   *** PLACEHOLDER QUESTIONS *** — replace with the real, content-locked final exam
   once the A1 chapters are finalized. The engine, scoring, pass-gate, and certificate
   issuance all work against whatever questions live here.
   Format per question: { q: "...", options: ["a","b","c","d"], answer: <index of correct option> } */
window.GEM_EXAM = {
  slug: "a1-basics-of-nutrition",
  title: "Basics of Nutrition",
  contact_hours: 8,        // structured learning hours
  ceu_value: 0.8,          // NASM: 0.1 CEU per hour
  pass_threshold: 80,      // percent required to pass (NASM-aligned)
  placeholder: true,       // flag so the UI can warn this is a draft exam
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
      options: ["The body does not extract every calorie a lab can, especially from protein", "Labels are printed wrong on purpose", "Calories change after cooking every time", "Scales are inaccurate"], answer: 0 },
    { q: "Two 350-calorie breakfasts can affect you very differently mainly because of:",
      options: ["Their fuel-vs-building-material makeup and how fast they release energy", "Their color", "The time of day only", "Their price"], answer: 0 },
    { q: "Which of the four domains nutrition affects is felt fastest, often within an hour?",
      options: ["Energy", "Long-term disease risk", "Body composition", "Bone density"], answer: 0 },
    { q: "An 'essential' nutrient means:",
      options: ["The body cannot make it, so it must come from the diet", "It is the most important nutrient", "It is only needed by athletes", "It is found in every food"], answer: 0 },
    { q: "Fiber, water, and electrolytes are best described as:",
      options: ["Often-overlooked components that quietly support digestion and hydration", "Macronutrients that provide most energy", "Types of protein", "Vitamins"], answer: 0 }
  ]
};
