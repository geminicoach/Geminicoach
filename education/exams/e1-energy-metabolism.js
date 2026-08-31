/* Gemini Education: E1 (Energy Systems & Metabolism) FINAL EXAM, interim live version.
   Current exam.html renders MC and free-response only, so this ships 22 MC + 6 true/false
   (as 2-option MC), drawing 20 per attempt, options shuffled, 80% to pass. 28 in the pool.
   Full bank (matching, word-bank, multi-select, write-ins) is in e1-energy-metabolism.full.js. */
window.GEM_EXAM = {
  slug: "e1-energy-metabolism",
  title: "Energy Systems & Metabolism",
  contact_hours: null, ceu_value: null, pass_threshold: 80, draw_mc: 20, placeholder: false,
  questions: [
    {
      "id": "e1-c1-mc-1",
      "chapter": 1,
      "type": "mc",
      "q": "A textbook states that energy is stored in the high-energy bond between the second and third phosphate groups of adenosine triphosphate (ATP), and is released when that bond is broken. What is the precise error in this statement, according to the chapter's explanation of ATP hydrolysis?",
      "options": [
        "There is no error; the bond genuinely stores energy like a compressed spring that snaps when cut",
        "The error is that ATP has four phosphate groups, not three",
        "Breaking any chemical bond by itself requires an input of energy; ATP hydrolysis releases energy overall because the products, adenosine diphosphate and inorganic phosphate, are more stable than the reactants, due to relieved electrostatic repulsion, resonance stabilization, and better solvation",
        "The error is that hydrolysis requires oxygen, which the statement omits"
      ],
      "answer": 2,
      "points": 1,
      "explanation": "Breaking a bond in isolation always costs energy; it never releases it. ATP hydrolysis is exergonic overall because the products end up more stable than the reactants, through relieved electrostatic strain, resonance stabilization, and improved solvation, not because the bond itself was a tiny warehouse of stored energy waiting to be sprung."
    },
    {
      "id": "e1-c1-mc-2",
      "chapter": 1,
      "type": "mc",
      "q": "Careful measurement shows that resting muscle holds only about two seconds' worth of ATP for maximal effort, yet the body hydrolyzes and resynthesizes roughly its own body weight in ATP every day. What does the chapter identify as the actual advantage of keeping such a tiny, tightly held reserve rather than a large stockpile?",
      "options": [
        "A small reserve keeps the ratio of ATP to ADP and AMP, called the energy charge, a sensitive gauge that lets enzymes such as phosphofructokinase respond within seconds, without waiting for a hormone or nerve signal",
        "ATP is too unstable to be stored in any quantity and would explode if concentrated",
        "A small reserve prevents muscles from ever contracting too strongly and injuring themselves",
        "The body actually does store a large reserve of ATP in the liver for emergencies"
      ],
      "answer": 0,
      "points": 1,
      "explanation": "A cell drowning in stored ATP would be blind to its own energy status. Keeping the pool small and closely defended means the ATP to ADP and AMP ratio, the energy charge, stays a sensitive dashboard gauge, so enzymes like phosphofructokinase can react to a falling charge within seconds, without waiting for any external signal to arrive."
    },
    {
      "id": "e1-c1-tf-1",
      "chapter": 1,
      "type": "mc",
      "q": "Rigor mortis, the postmortem stiffening of skeletal muscle, occurs because myosin heads remain locked onto actin once ATP resynthesis stops, since a fresh ATP molecule, not its absence, is required for myosin to detach from actin.",
      "options": [
        "True",
        "False"
      ],
      "answer": 0,
      "points": 1,
      "explanation": "The cross-bridge cycle requires a fresh ATP molecule binding to the myosin head in order to release its grip on actin. After death, once the small remaining ATP pool is exhausted and cannot be replaced, every cross-bridge attached at that moment stays attached, locking the muscle rigid rather than letting it go limp."
    },
    {
      "id": "e1-c2-mc-1",
      "chapter": 2,
      "type": "mc",
      "q": "What single biochemical feature makes the creatine kinase reaction the fastest way the body has to rebuild ATP?",
      "options": [
        "It uses oxygen efficiently through a shortened electron transport chain",
        "It directly transfers one phosphate group from creatine phosphate to adenosine diphosphate in a single enzymatic step, requiring no oxygen and no multi-step assembly line",
        "It relies on glycogen stored directly next to the mitochondria",
        "It requires calcium to first activate a hormone cascade before any phosphate transfer occurs"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "Creatine phosphate plus ADP, in the presence of creatine kinase, becomes ATP plus free creatine in a single step. There is no oxygen, no glucose, and no long assembly line of intermediates, which is exactly why it is the fastest resynthesis reaction in the body."
    },
    {
      "id": "e1-c2-mc-2",
      "chapter": 2,
      "type": "mc",
      "q": "The phosphagen system is described as trading speed for capacity. Which pair of facts best captures this trade-off?",
      "options": [
        "It offers the lowest power output but can sustain effort indefinitely because it never depletes",
        "It requires oxygen delivery to start, so it takes minutes to reach peak output",
        "It has unlimited capacity but only works in fast-twitch fibers",
        "It offers the highest power output of any resynthesis system, but stored creatine phosphate can sustain maximal effort for only about ten seconds before it runs low"
      ],
      "answer": 3,
      "points": 1,
      "explanation": "The phosphagen system buys unmatched speed, delivering full power from the first millisecond of effort, but pays for it with a brutally small capacity: stored creatine phosphate is largely spent within about ten seconds of maximal work."
    },
    {
      "id": "e1-c2-tf-1",
      "chapter": 2,
      "type": "mc",
      "q": "The phosphagen system generates lactate as a byproduct, because it shares the same enzyme, lactate dehydrogenase, used by glycolysis.",
      "options": [
        "True",
        "False"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "The phosphagen system is described as the alactic anaerobic system: it regenerates ATP anaerobically without producing lactate at all. Lactate production is specific to the glycolytic system, not the phosphagen system."
    },
    {
      "id": "e1-c3-mc-1",
      "chapter": 3,
      "type": "mc",
      "q": "During an all-out 400 meter race, muscle pH falls substantially and the legs feel like they are burning. According to the chapter's biochemical analysis, what is the actual primary source of the accumulating protons that cause this acidosis?",
      "options": [
        "The hydrolysis of ATP itself, which releases a proton with every molecule spent, not the production of lactate",
        "Lactate dehydrogenase releasing hydrogen ions as it converts pyruvate to lactate",
        "Carbon dioxide dissolving directly into muscle tissue",
        "Excess oxygen reacting with glycogen"
      ],
      "answer": 0,
      "points": 1,
      "explanation": "Robergs, Ghiasvand, and Parker (2004) showed there is no biochemical support for lactate causing acidosis. The lactate-forming reaction actually consumes a proton. The real source of accumulating protons during hard effort is the breakdown of ATP itself."
    },
    {
      "id": "e1-c3-mc-2",
      "chapter": 3,
      "type": "mc",
      "q": "Roughly what share of the lactate produced during exercise is estimated to be reused as fuel by tissues such as oxidative muscle fibers, the heart, and the brain, or recycled into glucose by the liver via the Cori cycle, rather than being discarded as waste?",
      "options": [
        "Less than five percent",
        "Exactly fifty percent, with the remainder always excreted in urine",
        "Seventy five to eighty percent",
        "None; lactate cannot be reused once it is produced"
      ],
      "answer": 2,
      "points": 1,
      "explanation": "Brooks (2018) reported that most of the lactate produced, on the order of seventy five to eighty percent, is either used within the working muscle itself or redistributed to the heart, brain, liver, and kidneys, with very little going to waste."
    },
    {
      "id": "e1-c3-mc-3",
      "chapter": 3,
      "type": "mc",
      "q": "A trainee attributes the ache felt two mornings after an unfamiliar leg workout to lingering lactic acid. What does the chapter identify as the actual, evidence-supported cause of delayed onset muscle soreness (DOMS)?",
      "options": [
        "Lactic acid that remains trapped in the muscle for two to three days after exercise",
        "Mechanical microdamage from eccentric contractions, particularly disruption of the Z-disk, followed by a local inflammatory repair response over the following one to three days",
        "A buildup of carbon dioxide in the muscle fibers",
        "Dehydration of the connective tissue surrounding the muscle"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "Cheung, Hume, and Maxwell (2003) identified eccentric contractions as the primary driver of delayed onset muscle soreness, producing mechanical microdamage, including Z-disk disruption, followed by an inflammatory repair process. Lactate clears within about an hour, long before the soreness even begins."
    },
    {
      "id": "e1-c3-tf-1",
      "chapter": 3,
      "type": "mc",
      "q": "Because the reaction catalyzed by lactate dehydrogenase actually consumes a hydrogen ion rather than releasing one, lactate production slightly buffers the muscle instead of causing acidosis.",
      "options": [
        "True",
        "False"
      ],
      "answer": 0,
      "points": 1,
      "explanation": "The lactate-forming reaction consumes a proton, so producing lactate slightly buffers the muscle rather than acidifying it. The true source of the accumulating protons during hard effort is the hydrolysis of ATP itself."
    },
    {
      "id": "e1-c4-mc-1",
      "chapter": 4,
      "type": "mc",
      "q": "Inside the electron transport chain, at which point does oxygen actually participate in the reaction, and what does it do there?",
      "options": [
        "At Complex I, where it is directly attached to NADH before any electrons are transferred",
        "Throughout the citric acid cycle, where it combines with acetyl-CoA at every step",
        "In the cytosol, where it is required for glycolysis to proceed",
        "At Complex IV, where it serves as the final electron acceptor, combining with spent electrons and hydrogen ions to form water"
      ],
      "answer": 3,
      "points": 1,
      "explanation": "Complex IV is the single point in the entire chain that reacts with oxygen, combining spent electrons with oxygen and hydrogen ions to produce water. Without oxygen waiting at the end of the line, the whole chain backs up and ATP production by this route stops."
    },
    {
      "id": "e1-c4-mc-2",
      "chapter": 4,
      "type": "mc",
      "q": "Older textbooks state that aerobic metabolism yields thirty six or thirty eight ATP per glucose molecule. What does the chapter say about the modern, more accurate estimate, and why did the number change?",
      "options": [
        "The modern estimate is roughly thirty to thirty two ATP per glucose; the number was revised downward because more precise measurements of the actual proton-pumping stoichiometry of the electron transport chain complexes, and a fuller accounting of shuttle costs, replaced the older fixed whole-number assumptions",
        "The modern estimate is exactly forty ATP, because new mitochondria were discovered to be more efficient than previously thought",
        "The number changed because glycolysis was found to produce more ATP than previously believed",
        "The estimate has always been exactly thirty six ATP and has never been revised"
      ],
      "answer": 0,
      "points": 1,
      "explanation": "The older figure assumed a fixed, whole-number ATP yield per NADH and FADH2. More precise measurements of proton-pumping stoichiometry, plus accounting for the cost of shuttling cytosolic NADH into the mitochondrion, revised the consensus down to roughly thirty to thirty two ATP per glucose. The underlying biology did not change, only the precision of the accounting."
    },
    {
      "id": "e1-c4-mc-3",
      "chapter": 4,
      "type": "mc",
      "q": "Why can the anaerobic systems, the phosphagen and glycolytic systems, never oxidize fat as fuel, while the aerobic system can?",
      "options": [
        "Fat molecules are too large to ever enter a muscle cell",
        "Fat can only be used as fuel by the liver, never by muscle",
        "Fat can only be broken down through beta-oxidation and processed through the citric acid cycle and electron transport chain inside mitochondria, all of which require oxygen as the final electron acceptor; there is no anaerobic shortcut for fat",
        "Anaerobic glycolysis actually can burn fat, just at a slower rate than carbohydrate"
      ],
      "answer": 2,
      "points": 1,
      "explanation": "Beta-oxidation and the citric acid cycle feed the electron transport chain, which depends on oxygen as the final electron acceptor at Complex IV. Fat has no anaerobic route to ATP at all, which is why only the oxidative system can unlock this enormous fuel reserve."
    },
    {
      "id": "e1-c5-mc-1",
      "chapter": 5,
      "type": "mc",
      "q": "A learner mixes up muscle glycogen and liver glycogen, assuming they serve the same purpose. What is the key functional distinction the chapter draws between the two?",
      "options": [
        "Liver glycogen fuels muscle contraction directly, while muscle glycogen only defends blood glucose",
        "Muscle glycogen fuels the contraction of the very muscle that stores it and cannot be exported back to the blood, while liver glycogen's job is to defend circulating blood glucose for the whole body, including the brain",
        "Both stores are functionally identical and interchangeable in every respect",
        "Muscle glycogen is only used during fasting, while liver glycogen is only used during exercise"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "Muscle lacks glucose-6-phosphatase, so muscle glycogen exists solely to fuel the contraction of the fiber that stores it. The liver possesses that enzyme, so liver glycogen's job is to defend blood glucose for the whole body, above all the brain, rather than to power muscle directly."
    },
    {
      "id": "e1-c5-mc-2",
      "chapter": 5,
      "type": "mc",
      "q": "The intensity at which lactate production begins to outpace clearance by a wide, rapidly growing margin has historically been called the anaerobic threshold. What does the chapter say is misleading about that name?",
      "options": [
        "The name is accurate and not misleading in any way",
        "The threshold actually only occurs when oxygen delivery to the heart, not the muscle, is compromised",
        "The name should instead be called the phosphagen threshold, because it marks phosphocreatine depletion",
        "The name implies the muscle has run out of oxygen and switched to anaerobic metabolism out of desperation, but the modern understanding is that rising lactate reflects accelerated glycolysis, driven by faster contraction, more fast-twitch fiber recruitment, and rising catecholamines, not oxygen deprivation"
      ],
      "answer": 3,
      "points": 1,
      "explanation": "Modern review literature is emphatic that the muscle is not suffocating at this threshold. Rising lactate reflects accelerated glycolysis outpacing the mitochondria's ability to absorb pyruvate, plus reduced clearance capacity, not a genuine lack of oxygen. The word anaerobic survives for historical reasons, not as an accurate mechanism."
    },
    {
      "id": "e1-c5-mc-3",
      "chapter": 5,
      "type": "mc",
      "q": "Even a lean adult carries over one hundred thousand kilocalories of energy stored as fat, more than thirty times the energy stored as carbohydrate, yet a person cannot sprint on fat alone. What explains this apparent contradiction?",
      "options": [
        "Fat can only be oxidized through the slow, oxygen-limited aerobic pathway, so its maximum rate of ATP delivery is capped no matter how much is stored; carbohydrate can also be broken down anaerobically for a much faster, though less efficient, rate of ATP production",
        "Fat actually contains less usable chemical energy per gram than carbohydrate",
        "Muscle fibers physically cannot absorb fatty acids under any circumstances",
        "The body always burns through all available carbohydrate before touching any fat, regardless of intensity"
      ],
      "answer": 0,
      "points": 1,
      "explanation": "Fat has no anaerobic shortcut, so its rate of ATP delivery is capped by how fast oxygen can be delivered and mitochondria can process it. Carbohydrate can be broken down anaerobically for a rapid, if less efficient, top-up, which is why only carbohydrate can meet the steep demand of a sprint."
    },
    {
      "id": "e1-c6-mc-1",
      "chapter": 6,
      "type": "mc",
      "q": "According to Gastin's (2001) reframing of energy system interaction, how should the three resynthesis systems be understood during a maximal effort, such as an eight-second hill sprint?",
      "options": [
        "Each system runs at full strength for a fixed number of seconds and then shuts off completely before the next one begins, like a relay handoff",
        "Only the phosphagen system is active for the first ten seconds of any effort, with the other two systems remaining completely dormant",
        "All three systems are active from the very first instant, running as continuously overlapping ramps rather than a sequence of switches; what changes over time is only the proportion each contributes",
        "The oxidative system is switched off entirely during any effort lasting less than two minutes"
      ],
      "answer": 2,
      "points": 1,
      "explanation": "Gastin described the three systems as distinct yet closely integrated processes that operate together, not in sequence. From the very first stride, all three are running simultaneously, and only the proportional contribution of each shifts as the effort continues."
    },
    {
      "id": "e1-c6-mc-2",
      "chapter": 6,
      "type": "mc",
      "q": "Using the accumulated oxygen deficit method, Spencer and Gastin (2001) measured the aerobic contribution to total energy supply across several running events. Which finding most directly overturns the popular assumption that middle-distance races are almost purely anaerobic?",
      "options": [
        "The aerobic system supplied zero percent of energy for any race under three minutes",
        "The aerobic system already supplied about sixty six percent of total energy for an eight hundred meter race, making it a majority-aerobic event despite feeling like a brutal anaerobic ordeal",
        "The anaerobic systems supplied over ninety percent of energy even in a five kilometer run",
        "Aerobic contribution was identical across all race distances from one hundred to fifteen hundred meters"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "Spencer and Gastin (2001) found aerobic contribution rose to about sixty six percent for the eight hundred meter run, making it already a majority-aerobic event by total energy, even though it feels like pure anaerobic suffering."
    },
    {
      "id": "e1-c6-tf-1",
      "chapter": 6,
      "type": "mc",
      "q": "Gastin (2001) located the crossover point, where cumulative aerobic energy supply overtakes cumulative anaerobic energy supply during a sustained maximal effort, at roughly seventy five seconds, far earlier than the traditional model assumed.",
      "options": [
        "True",
        "False"
      ],
      "answer": 0,
      "points": 1,
      "explanation": "Gastin found the crossover point at roughly seventy five seconds of sustained maximal work, meaning by the time an all-out effort has lasted about a minute and a quarter, the oxidative system is already carrying half the load, far earlier than the traditional two-to-three-minute estimate assumed."
    },
    {
      "id": "e1-c7-mc-1",
      "chapter": 7,
      "type": "mc",
      "q": "Several converging signals inside a muscle fiber, including a rising AMP-to-ATP ratio sensed by AMP-activated protein kinase (AMPK) and repeated calcium transients from contraction, ultimately activate the same downstream regulator. What is that regulator, and what does it do?",
      "options": [
        "Lactate dehydrogenase, which converts pyruvate into lactate to regenerate NAD-plus",
        "Insulin, which is the sole trigger for building new mitochondria",
        "Myoglobin, which directly synthesizes new mitochondrial DNA",
        "Peroxisome proliferator-activated receptor gamma coactivator one-alpha (PGC-1 alpha), a coactivator that switches on the nuclear and mitochondrial genes needed to build new mitochondria, a process called mitochondrial biogenesis"
      ],
      "answer": 3,
      "points": 1,
      "explanation": "AMPK, sensing energy charge, and calcium-sensitive enzymes, sensing contraction, both converge on activating PGC-1 alpha, the master regulator that switches on the genes needed to build new mitochondria and grow the muscle's aerobic capacity."
    },
    {
      "id": "e1-c7-mc-2",
      "chapter": 7,
      "type": "mc",
      "q": "Holloszy and Coyle (1984) documented that more mitochondria change the thresholds established in earlier chapters. What specifically happens to the crossover point and the lactate threshold as mitochondrial density increases with endurance training?",
      "options": [
        "Both shift to a higher exercise intensity, because a muscle with abundant mitochondria needs only a small rise in ADP to produce a given amount of ATP, reducing the glycolytic, lactate-producing response at any given power output",
        "Both shift to a lower exercise intensity, making hard efforts feel harder sooner",
        "The crossover point shifts higher but the lactate threshold is completely unaffected by mitochondrial density",
        "Neither threshold is affected by mitochondrial density; they are fixed by genetics alone"
      ],
      "answer": 0,
      "points": 1,
      "explanation": "More mitochondria mean a muscle needs only a small rise in ADP to drive a given rate of ATP production, so the glycolytic, lactate-producing response is smaller at any given power output. This raises both the crossover point and the lactate threshold, meaning a trained person can work harder before tipping toward carbohydrate and before lactate escapes control."
    },
    {
      "id": "e1-c7-tf-1",
      "chapter": 7,
      "type": "mc",
      "q": "Metabolic flexibility means that a person's body oxidizes roughly the same fuel mixture no matter what the situation demands, such as fasting, eating a carbohydrate-rich meal, or beginning hard exercise.",
      "options": [
        "True",
        "False"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "That description is metabolic inflexibility, being stuck in the wrong fuel mixture regardless of the situation. Metabolic flexibility is the opposite: the capacity to switch cleanly between fat and carbohydrate to match fasting, feeding, and exercise demands."
    },
    {
      "id": "e1-c8-mc-1",
      "chapter": 8,
      "type": "mc",
      "q": "A gym poster claims that a hard workout keeps your body burning calories for 48 hours afterward. What does the chapter's review of the evidence conclude about excess post-exercise oxygen consumption (EPOC)?",
      "options": [
        "EPOC reliably burns over one thousand kilocalories after any moderate workout",
        "EPOC does not exist and has never been measured",
        "EPOC is real and scales with intensity and duration, but for most sustainable training it amounts to only tens of kilocalories, a small fraction of daily energy expenditure, not a major fat-loss engine",
        "EPOC only occurs during low-intensity, long-duration exercise, never after intense effort"
      ],
      "answer": 2,
      "points": 1,
      "explanation": "Borsheim and Bahr (2003) and Panissa and colleagues (2020) documented that EPOC rises with intensity and duration but, even at the high end of sustainable training, amounts to roughly the food energy in a small banana, well under four percent of a typical day's intake."
    },
    {
      "id": "e1-c8-mc-2",
      "chapter": 8,
      "type": "mc",
      "q": "The Minnesota Starvation Experiment and its modern reanalysis (Muller et al., 2015) are often cited to support the idea of starvation mode. What does the evidence actually show about adaptive thermogenesis during sustained caloric restriction?",
      "options": [
        "It permanently and irreversibly destroys the ability to lose weight in the future",
        "It is a real, measurable, and mostly reversible reduction in resting energy expenditure, on the order of about one hundred kilocalories per day beyond what tissue loss alone would predict, not a total metabolic shutdown that halts weight loss entirely",
        "It has never been observed or measured in any controlled study",
        "It causes resting metabolic rate to double as the body tries to conserve energy"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "Adaptive thermogenesis is genuine and mechanistically well understood, but its typical magnitude in controlled studies of moderate weight loss is on the order of a hundred kilocalories per day, a real but modest and reversible adjustment, not the dramatic, unstoppable collapse the popular starvation mode myth describes."
    },
    {
      "id": "e1-c8-mc-3",
      "chapter": 8,
      "type": "mc",
      "q": "Ohkawara and colleagues (2012) found that non-exercise activity thermogenesis (NEAT) can differ by up to two thousand kilocalories per day between two similarly sized people. What practical conclusion does the chapter draw from this finding?",
      "options": [
        "NEAT is a fixed, unchangeable trait that cannot vary based on environment or occupation",
        "NEAT is negligible compared to the afterburn from a single hard workout",
        "NEAT only matters for people who never exercise deliberately",
        "The accumulated, unglamorous movement of ordinary daily life often matters more to total daily energy expenditure than the intensity of a single deliberate workout and its afterburn"
      ],
      "answer": 3,
      "points": 1,
      "explanation": "A two thousand kilocalorie daily swing in NEAT dwarfs the afterburn from any workout by two orders of magnitude, which is why the chapter argues that the accumulated movement of ordinary life is often the more powerful lever on total daily energy expenditure."
    },
    {
      "id": "e1-c9-mc-1",
      "chapter": 9,
      "type": "mc",
      "q": "Two people weigh the same but have different body composition. According to the chapter's discussion of resting metabolic rate, which person would be expected to have the higher resting metabolic rate, and why?",
      "options": [
        "The person with more lean mass, because organs such as the liver, brain, heart, and kidneys, along with skeletal muscle, are metabolically far more expensive per unit mass than fat tissue",
        "The person with more fat mass, because fat tissue has the highest metabolic rate per unit mass of any tissue",
        "Both would have identical resting metabolic rates regardless of composition, since only total body weight matters",
        "Resting metabolic rate is unrelated to body composition and depends only on age"
      ],
      "answer": 0,
      "points": 1,
      "explanation": "A mechanistic analysis of organ-specific metabolic rates found that the liver, brain, heart, and kidneys, together with skeletal muscle, are far more metabolically expensive per unit mass than adipose tissue. Two people of identical weight but different composition can therefore have meaningfully different resting energy needs."
    },
    {
      "id": "e1-c9-mc-2",
      "chapter": 9,
      "type": "mc",
      "q": "Why do a one hundred meter sprinter and a marathon runner represent opposite ends of the same performance-limiting framework, according to the chapter's integration of the three energy systems?",
      "options": [
        "Both athletes rely on exactly the same energy system in the same proportion, differing only in total distance covered",
        "The sprinter relies primarily on the oxidative system, while the marathoner relies primarily on the phosphagen system",
        "The sprinter is limited almost entirely by phosphagen availability and fast-twitch contractile power, since the event ends before oxidative metabolism becomes a major contributor, while the marathoner is limited by oxidative capacity, mitochondrial density, and how well glycogen is spared through fat oxidation",
        "Neither athlete's performance is meaningfully explained by energy system contribution; only muscle fiber color matters"
      ],
      "answer": 2,
      "points": 1,
      "explanation": "A one hundred meter sprint ends before oxidative metabolism becomes a major contributor, so phosphagen availability and contractile power decide it. A marathon is run almost entirely on the oxidative system, so mitochondrial density, capillary supply, and fat-sparing of glycogen decide it instead."
    },
    {
      "id": "e1-c9-tf-1",
      "chapter": 9,
      "type": "mc",
      "q": "When people increase their structured exercise, the added activity energy expenditure is always fully additive to total daily energy expenditure, with no offsetting reduction in spontaneous movement or resting expenditure elsewhere.",
      "options": [
        "True",
        "False"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "Doubly labelled water studies show that increases in exercise are often partially offset by compensation: reduced spontaneous non-exercise movement and a modest decline in resting expenditure. This means added exercise does not simply add its full energetic cost to the daily total."
    }
  ]
};
