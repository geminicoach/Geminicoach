/* Gemini Education: B6 (Nervous System II: Applied) FINAL EXAM, interim live version.
   Current exam.html renders MC and free-response only, so this ships 20 MC + 6 true/false
   (as 2-option MC), drawing 20 per attempt, options shuffled, 80% to pass. 26 in the pool.
   Full bank (matching, word-bank, multi-select, write-ins) is in b6-nervous-system-ii.full.js. */
window.GEM_EXAM = {
  slug: "b6-nervous-system-ii",
  title: "Nervous System II: Applied",
  contact_hours: 9, ceu_value: 0.9, pass_threshold: 80, draw_mc: 20, placeholder: false,
  questions: [
    {
      "id": "b6-c1-mc-1",
      "chapter": 1,
      "type": "mc",
      "q": "A strength coach tells a lifter that an empty-bar warm-up set 'wakes up the fast-twitch fibers' so they will be ready for the heavy sets that follow. Using Henneman's size principle, what is the most accurate response?",
      "options": [
        "The warm-up set is doing exactly what the coach claims, since any voluntary contraction recruits every motor unit (MU) in the muscle at once",
        "A light warm-up set recruits mainly small, fatigue-resistant motor units near the bottom of the recruitment ladder; the large, high-threshold fast fatigable units are not switched on until effort or fatigue climbs much higher",
        "Motor units are recruited in a completely random order on each attempt, so the warm-up set may or may not reach the fast-twitch fibers",
        "Fast-twitch fibers respond only to conscious intention and are entirely independent of motor neuron size or recruitment order"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "Henneman's size principle orders recruitment strictly from small, fatigue-resistant motor units to large, fast fatigable ones, based on the electrical properties of the motor neuron itself. An empty-bar set lives near the bottom of that ladder; the large, high-threshold units that decide a true one-repetition maximum are not touched until the load, fatigue, or intent climbs high enough to demand them."
    },
    {
      "id": "b6-c1-mc-2",
      "chapter": 1,
      "type": "mc",
      "q": "A motor neuron that helps aim the eyes may control fewer than ten muscle fibers, while a motor neuron in the thigh can control well over a thousand. What does this difference in innervation ratio, the number of fibers one motor neuron commands, explain?",
      "options": [
        "A low innervation ratio (few fibers per neuron) allows fine, gradable control, while a high innervation ratio delivers large, coarse increments of force suited to gross power",
        "Innervation ratio reflects only the total size of the muscle and has no relationship to the fineness of motor control",
        "A low innervation ratio always means the motor unit is a fast fatigable type built for maximal power",
        "Eye muscles contain no true motor units because their movements are too fast for the size principle to apply"
      ],
      "answer": 0,
      "points": 1,
      "explanation": "Innervation ratio predicts what a motor unit is built for. Few fibers per neuron buys fine, gradable control, useful for aiming the eyes or moving a fingertip. Many fibers per neuron buys a big, coarse lump of force delivered by a single command, useful for gross power in a large limb muscle."
    },
    {
      "id": "b6-c1-tf-1",
      "chapter": 1,
      "type": "mc",
      "q": "Because motor unit recruitment order is set by the electrical properties of the motor neuron itself, simple effort or conscious intention cannot, in most ordinary voluntary contractions, reorder which motor units fire first.",
      "options": ["True", "False"],
      "answer": 0,
      "points": 1,
      "explanation": "Small motor neurons have higher electrical input resistance, so the same synaptic input produces a larger voltage swing and an earlier threshold crossing than in large motor neurons. This ordering is a property of the motor neuron pool's basic electrical architecture, and it is remarkably resistant to override by simple effort or intention in ordinary voluntary contractions."
    },
    {
      "id": "b6-c2-mc-1",
      "chapter": 2,
      "type": "mc",
      "q": "A person slowly closes their hand around an egg, grading the force smoothly from a light touch to just short of cracking it, with no sudden jumps in force along the way. Which mechanism explains this smooth ramp rather than a series of discrete steps?",
      "options": [
        "Rate coding, the graded increase in how fast each already-recruited motor unit fires, fills in the force between the discrete steps that newly recruited units would otherwise produce",
        "Every motor unit produces exactly the same fixed force regardless of firing frequency, so smoothness comes only from recruiting units one at a time very quickly",
        "Smoothness comes entirely from relaxing the antagonist muscle, with no contribution from the agonist's own firing rate",
        "The last motor unit recruited always fires at its lowest possible rate, which by itself accounts for the smooth ramp"
      ],
      "answer": 0,
      "points": 1,
      "explanation": "Recruitment alone would produce a staircase of force as each new motor unit switches on. Rate coding, the modulation of a motor unit's force by how frequently its motor neuron fires, fills in every intermediate value between those steps, which is what turns the staircase into a continuous ramp."
    },
    {
      "id": "b6-c2-mc-2",
      "chapter": 2,
      "type": "mc",
      "q": "Two lifters produce an identical peak force in a slow ramp to maximum, but one reaches that peak in 90 milliseconds while the other takes 300 milliseconds. Both have the same recruitment ceiling. What most likely differs between them, and is it trainable?",
      "options": [
        "Their recruitment ceilings actually differ; the faster lifter simply recruited more motor units overall",
        "Rate of force development (RFD), meaning how quickly force climbs from zero, differs because the faster lifter's motor neurons are recruited faster and reach a higher initial firing rate; this is trainable through explosive-intent work",
        "Muscle fiber type is fixed at birth, so no training difference between the two lifters could explain the gap",
        "Rate coding cannot affect how quickly force develops, only how much total force is eventually produced"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "Peak force being equal rules out a recruitment-ceiling difference. Rate of force development depends on how quickly motor units are recruited and how fast they fire in the opening tens of milliseconds of a contraction, and explosive-intent training specifically develops that speed of access."
    },
    {
      "id": "b6-c2-tf-1",
      "chapter": 2,
      "type": "mc",
      "q": "Once a motor unit has been recruited, it always contributes its full possible force immediately, so the only way to increase total force further is to recruit additional motor units.",
      "options": ["True", "False"],
      "answer": 1,
      "points": 1,
      "explanation": "A recruited unit behaves more like a dial than a switch. It can fire slowly and contribute a small twitch, or be driven toward its maximal firing rate and contribute several times as much force, all without a single additional unit being recruited."
    },
    {
      "id": "b6-c3-mc-1",
      "chapter": 3,
      "type": "mc",
      "q": "A lifter's squat rises by 20 percent over four weeks with no measurable change in thigh muscle cross-sectional area on magnetic resonance imaging (MRI). What best explains this early strength gain?",
      "options": [
        "Neural adaptations, including fuller recruitment of high-threshold motor units, increased firing rate, reduced antagonist co-contraction, and improved intermuscular coordination, dominate strength gains in the early weeks of training, before measurable hypertrophy occurs",
        "Muscle protein synthesis is always fastest in the first month, producing hypertrophy too small for magnetic resonance imaging to detect",
        "The strength gain must be an illusion, since a fixed external load cannot register a genuine increase in force output",
        "Cross-education from the untrained, opposite limb fully accounts for any early strength gain in the trained limb"
      ],
      "answer": 0,
      "points": 1,
      "explanation": "Moritani and deVries found that a neural factor accounted for most of the strength gain in the first three to five weeks of training, with hypertrophy becoming the dominant driver only later. Four specific neural contributors, recruitment, firing rate, reduced antagonist co-contraction, and coordination, explain gains that show up on a bar before they show up on a tape measure or a scan."
    },
    {
      "id": "b6-c3-mc-2",
      "chapter": 3,
      "type": "mc",
      "q": "Training only the right arm for several weeks measurably strengthens the untrained left arm too, by roughly 8 percent, with no hypertrophy occurring in that untrained arm at all. What does this cross-education effect demonstrate?",
      "options": [
        "The untrained arm must have secretly performed unconscious repetitions during the training sessions",
        "The adaptation is neural rather than muscular, since the untrained limb shows zero hypertrophy, and motor commands intended for the trained limb appear to spill over through pathways that cross at the spinal cord and brain",
        "Hypertrophy in one limb automatically produces hypertrophy in the opposite limb",
        "Cross-education occurs only in elite, highly trained athletes and never appears in beginners"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "Because the untrained arm gained strength with no hypertrophy, the adaptation cannot be muscular. Motor commands for the trained limb are not perfectly isolated to that side, and some of that drive spills over through neural pathways that reach the opposite limb, which is why the untrained side gains roughly half as much as the trained side."
    },
    {
      "id": "b6-c3-tf-1",
      "chapter": 3,
      "type": "mc",
      "q": "Because strength is highly specific to the exercise, joint angle, and velocity actually trained, a person who trains only slow, heavy partial-range holds should not expect that strength to transfer fully to a fast, deep range of the same joint.",
      "options": ["True", "False"],
      "answer": 0,
      "points": 1,
      "explanation": "Exercise-type, joint-angle, and velocity specificity mean that strength gains are largest under conditions that resemble the training itself. A position or speed that is never represented in training will not automatically appear at full strength somewhere else."
    },
    {
      "id": "b6-c4-mc-1",
      "chapter": 4,
      "type": "mc",
      "q": "A coach gives a near-autonomous performer detailed correction on every single repetition, and the athlete's technique looks excellent during that session. What does the guidance hypothesis predict about the athlete's learning?",
      "options": [
        "Constant feedback will improve both session performance and long-term retention equally, because more information always helps learning",
        "Constant feedback may flatter performance during the session but can prevent the learner's own error-detection system from developing fully, which impairs performance on a delayed retention test",
        "Feedback frequency has no effect on retention, only on how confident the athlete feels in the moment",
        "The guidance hypothesis predicts that feedback should increase as a skill becomes more automatic, not decrease"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "Winstein and Schmidt found that learners given feedback after every trial performed better during practice but worse on a delayed retention test than learners given feedback less often. Frequent feedback acts as a crutch that can prevent the internal error-detection system, which develops in the associative stage, from ever being forced to do its own work."
    },
    {
      "id": "b6-c4-mc-2",
      "chapter": 4,
      "type": "mc",
      "q": "In a comparison of practice orderings, blocked practice, repeating the same skill many times before switching, looks smoother during the session, but random, interleaved practice tends to produce better performance on a delayed retention test days later. Why?",
      "options": [
        "Random practice forces the learner to more fully reconstruct the movement plan on each attempt rather than simply repeating a plan already active from the previous attempt, and that effortful retrieval is what tends to make learning durable",
        "Random practice is simply less physically demanding, giving the muscles more rest between repetitions",
        "Blocked practice always produces better retention because consistent repetition guarantees a permanent memory trace",
        "Random practice only appears to work better because it takes more total time than blocked practice"
      ],
      "answer": 0,
      "points": 1,
      "explanation": "This is the contextual interference effect, first demonstrated by Shea and Morgan. Random practice cannot coast on a plan still active in short-term memory, so each attempt requires genuine retrieval, and that effortful reconstruction is what tends to strengthen the memory for later use."
    },
    {
      "id": "b6-c4-tf-1",
      "chapter": 4,
      "type": "mc",
      "q": "An external focus of attention, cueing a learner toward the effect a movement has on the environment, tends to produce better performance and learning than an internal focus on the body's own mechanics.",
      "options": ["True", "False"],
      "answer": 0,
      "points": 1,
      "explanation": "Gabriele Wulf's research program found this effect consistently across balance, throwing, striking, and complex sport skills. An internal focus drags conscious control back into a system that runs better automatically, while an external focus respects and supports that automaticity."
    },
    {
      "id": "b6-c5-mc-1",
      "chapter": 5,
      "type": "mc",
      "q": "Corey's ankle, sprained eight months ago, tests as fully strong and shows a clean scan, yet Corey still feels unsteady on uneven trail terrain. What best explains this gap between strength and stability?",
      "options": [
        "Joint position sense, fed partly by mechanoreceptors in the ligaments and joint capsule that an ankle sprain can damage, can lag behind muscular strength recovery, since these small receptors recover on their own, less predictable timeline",
        "If strength has fully returned, any remaining unsteadiness must be purely psychological and unrelated to any physiological system",
        "Golgi tendon organs are solely responsible for balance, and their recovery always exactly tracks strength recovery",
        "Vision fully substitutes for lost proprioceptive input, so unsteadiness after a healed sprain cannot have a sensory cause"
      ],
      "answer": 0,
      "points": 1,
      "explanation": "Strength and joint position sense are different systems that recover on different timelines. An ankle sprain routinely damages the small mechanoreceptors that feed joint position sense even when it leaves the muscle largely intact, which is exactly what an unresolved proprioceptive deficit looks like once the strength half of the picture has already recovered."
    },
    {
      "id": "b6-c5-mc-2",
      "chapter": 5,
      "type": "mc",
      "q": "A muscle contracts hard against a fixed, immovable resistance. Which sensory receptor is most strongly activated, and why?",
      "options": [
        "The muscle spindle, because it lies parallel to the muscle fibers and detects the fibers shortening under load",
        "The Golgi tendon organ (GTO), because it lies in series with the muscle fibers at the muscle-tendon junction and reports the resulting tension, whether that tension comes from active contraction or an external stretch",
        "Neither receptor responds meaningfully during an isometric contraction against a fixed resistance",
        "The muscle spindle, because it fires only once tension exceeds a damage threshold, acting purely as a circuit breaker"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "Because the Golgi tendon organ sits in series with the muscle fibers, in the direct line of pull, it reports tension with great fidelity across the whole working range, including hard isometric effort. The muscle spindle instead lies parallel to the fibers and is most sensitive to changes in muscle length and the velocity of stretch."
    },
    {
      "id": "b6-c5-tf-1",
      "chapter": 5,
      "type": "mc",
      "q": "The stretch reflex crosses only a single synapse in the spinal cord, which is a major reason it is faster than any consciously chosen reaction and cannot be voluntarily overridden in time.",
      "options": ["True", "False"],
      "answer": 0,
      "points": 1,
      "explanation": "With only one synapse in the loop, the stretch reflex closes in roughly 25 to 50 milliseconds, far faster than the 150 to 200 milliseconds a deliberate, consciously chosen reaction requires. A person cannot consciously decide not to react before the reflex has already fired."
    },
    {
      "id": "b6-c6-mc-1",
      "chapter": 6,
      "type": "mc",
      "q": "Yusuf spends a winter building his throwing arm and shoulder in isolation on machines. His fastball velocity does not improve, and his shoulder develops new soreness. Using proximal-to-distal sequencing, what is the most likely explanation?",
      "options": [
        "Isolated arm training strengthened one instrument in the ensemble without training the timing of the legs, trunk, and shoulder firing in sequence, so the arm may have been recruited to manufacture velocity that a well-sequenced kinetic chain would otherwise have supplied for free",
        "Because muscle strength is the only variable that determines throwing velocity, his stalled fastball simply proves his isolation training was not heavy enough",
        "Proximal-to-distal sequencing predicts that strengthening the most distal segment of the chain first is always the correct way to increase throwing velocity",
        "New shoulder soreness after isolation training is unrelated to sequencing and always indicates a normal, harmless adaptation"
      ],
      "answer": 0,
      "points": 1,
      "explanation": "Power is often a timing problem, not a force problem. Proximal-to-distal sequencing lets large segments transfer velocity to smaller ones in order; training a single prime mover in isolation, seated and trunk-supported, never rehearses that handoff, and research on injured throwers found the elbow-shoulder coupling specifically breaking down when the arm is asked to manufacture speed the chain should have delivered."
    },
    {
      "id": "b6-c6-mc-2",
      "chapter": 6,
      "type": "mc",
      "q": "A beginner grips a golf club with visible tension throughout the body, including strong activation of muscles opposing the intended movement, while an expert performing the same swing looks almost relaxed. What does the research on co-contraction and motor learning suggest about this difference?",
      "options": [
        "Learning a movement is mostly a matter of turning muscles up, so co-contraction should always be maximized for stability",
        "Learning is often as much about turning unnecessary muscles down as it is about adding activation; reliable markers of motor learning are cleaner timing and reduced antagonist co-contraction rather than higher overall muscle activity, though some co-contraction remains a useful strategy for stability in unfamiliar or unstable tasks",
        "Co-contraction is always a coordination mistake with no functional benefit under any circumstance",
        "Expert performers permanently eliminate all antagonist muscle activity once a skill is fully learned"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "A systematic review found that raw electromyography (EMG) amplitude, essentially how hard a muscle fires, correlates only weakly with performance improvement, while activation timing and reduced antagonist coactivation track learning reliably. Some co-contraction is a genuinely useful strategy for stiffness and stability when a task is new or unstable, so the tell is whether it persists once the task has become familiar."
    },
    {
      "id": "b6-c6-tf-1",
      "chapter": 6,
      "type": "mc",
      "q": "Coordination trained in one movement pattern transfers automatically and completely to a different movement pattern, even when the speed and load differ substantially, as long as the same prime mover muscles are involved.",
      "options": ["True", "False"],
      "answer": 1,
      "points": 1,
      "explanation": "Coordination is stored as a task-specific timing pattern, not a general attribute that floats free of context. The efficient firing sequence built for one movement, such as a barbell squat, is not automatically the sequence needed for a different movement, such as a vertical jump, even though the prime movers overlap almost completely."
    },
    {
      "id": "b6-c7-mc-1",
      "chapter": 7,
      "type": "mc",
      "q": "A lifter's warm-up sets and volume work at 70 percent of their maximum feel completely normal, with no local muscle burn, but a heavy single at 85 percent suddenly stalls. What does this pattern most likely indicate?",
      "options": [
        "Peripheral fatigue, because submaximal work always fails before maximal work whenever the muscle itself is the true limiter",
        "Central fatigue, because a true maximal effort requires nearly every available motor unit to be recruited and firing near its peak rate at once, leaving no slack to absorb even a small drop in the nervous system's outgoing drive",
        "A malfunction of the Golgi tendon organ (GTO), which is reporting inaccurately high tension and blocking the lift",
        "Definitive proof of nonfunctional overreaching that requires several weeks of complete rest before any further training"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "At submaximal loads there is slack, since the nervous system can quietly recruit reserve units to compensate for a small dip in drive. At true maximum there is no slack left, so any shortfall in central drive subtracts directly from peak force, which is exactly the signature of a single that dies while submaximal volume stays crisp."
    },
    {
      "id": "b6-c7-mc-2",
      "chapter": 7,
      "type": "mc",
      "q": "In the interpolated twitch technique, a person performs a maximal voluntary contraction (MVC) while a brief external electrical stimulus is delivered directly to the muscle or its nerve. A large superimposed twitch, meaning a big bump in force from that stimulus, appears. What does this indicate?",
      "options": [
        "Voluntary activation is complete, and any force deficit must be entirely peripheral in origin",
        "Voluntary activation is incomplete, meaning the central nervous system (CNS) is not calling on all the force the muscle could produce, so a meaningful reserve of central drive remains untapped",
        "The muscle fibers themselves have been permanently damaged and cannot recover",
        "The stimulus has overridden the central nervous system entirely, invalidating any further testing"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "If a person were fully activating every available motor unit, an external stimulus would add nothing to the force output. A large superimposed twitch shows extra force was available but not being called upon voluntarily, which is the defining evidence for central fatigue."
    },
    {
      "id": "b6-c7-mc-3",
      "chapter": 7,
      "type": "mc",
      "q": "In one study, ninety minutes of demanding cognitive work before a cycling test cut time to exhaustion by roughly 15 percent, with no measured difference in heart rate, blood lactate, or any peripheral neuromuscular marker compared to a control condition. What does this demonstrate about perceived effort?",
      "options": [
        "Perceived effort is generated centrally from a copy of the outgoing motor command, called the corollary discharge, so the identical physical task can feel harder without any actual change in the muscle's condition",
        "Perceived effort is a direct readout of blood lactate concentration building up in the working muscle",
        "Mental fatigue can only impair physical performance by directly damaging peripheral muscle tissue",
        "Perceived effort cannot be influenced by anything happening outside the muscle being tested"
      ],
      "answer": 0,
      "points": 1,
      "explanation": "Effort perception tracks the size of the outgoing motor command, not the condition of the muscle receiving it. When the muscle is already fatigued or the brain is already taxed, producing the same output requires a larger command, and a larger corollary discharge reads as more effort even when the measured physical output has not changed."
    },
    {
      "id": "b6-c8-mc-1",
      "chapter": 8,
      "type": "mc",
      "q": "Before every long jump attempt at practice, Anton performs three sets of heavy squat triples about ninety seconds beforehand, and his jump distance gets worse over the following weeks. Using the potentiation-versus-fatigue model, what most likely went wrong?",
      "options": [
        "Post-activation potentiation (PAP) does not actually exist, so any claimed benefit from his conditioning effort was fabricated",
        "His conditioning effort combined too much volume with too little rest for his training background, so residual fatigue was still dominant at the moment of his jump attempt rather than the enhancement effect outrunning it",
        "Ninety seconds is always too long a rest interval to capture any potentiation effect at all",
        "Squats cannot potentiate a jumping movement because the two exercises do not share any of the same muscles"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "Intensity drives potentiation while volume mostly drives fatigue. Three sets of heavy triples is a meaningful volume, and ninety seconds sits at the very short end of any reported useful rest interval, so Anton was attempting on top of largely unresolved fatigue rather than inside the enhancement window."
    },
    {
      "id": "b6-c8-mc-2",
      "chapter": 8,
      "type": "mc",
      "q": "Classic post-activation potentiation (PAP), driven by myosin light-chain phosphorylation, has a half-life of roughly twenty-eight seconds, yet athletes often perform better several minutes after a conditioning effort. What explains this longer-lasting benefit?",
      "options": [
        "Post-activation performance enhancement (PAPE), a related but distinct effect that persists for minutes rather than seconds and is driven substantially by neural mechanisms such as heightened motor unit recruitment, elevated firing frequency, and improved synchronization",
        "Light-chain phosphorylation itself actually lasts several minutes in every muscle fiber type, contradicting the twenty-eight second estimate entirely",
        "The delayed benefit is caused entirely by increased muscle glycogen stores replenished during the rest interval",
        "There is no genuine delayed benefit; any performance improvement observed minutes later is simply measurement error"
      ],
      "answer": 0,
      "points": 1,
      "explanation": "The mismatch between a twenty-eight-second mechanism and a multi-minute result is exactly why the field separates classic PAP from PAPE. PAPE runs on neural mechanisms including recruitment, firing frequency, and synchronization, which is the same recruitment and rate coding machinery covered earlier in the course, temporarily upshifted."
    },
    {
      "id": "b6-c8-mc-3",
      "chapter": 8,
      "type": "mc",
      "q": "Two athletes perform an identical heavy conditioning effort before an explosive attempt: one is a national-level lifter with a decade of training, the other is six months into structured training. Who is more likely to potentiate strongly and fatigue comparatively little from that identical dose?",
      "options": [
        "The newer trainee, since less-trained systems always recruit high-threshold motor units more efficiently",
        "The more resistance-trained athlete, since training status shifts the balance of the potentiation and fatigue curves toward greater potentiation and reduced fatigue from an identical conditioning dose",
        "Training status has no measurable effect on how a person responds to a conditioning effort",
        "Only complete beginners can reliably access post-activation potentiation, since trained athletes have already used up their neural reserve"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "Stronger, more resistance-trained athletes carry more type II fiber to phosphorylate, better-developed high-threshold recruitment to draw on, and greater resistance to fatigue, so an identical conditioning effort tends to potentiate them more and fatigue them less than it would a newer trainee."
    },
    {
      "id": "b6-c9-mc-1",
      "chapter": 9,
      "type": "mc",
      "q": "Priyanka logs every set and deloads only when her muscles feel sore, but her lift numbers stall while bar speed on a fixed submaximal load quietly drops across several weeks with no reported soreness. What is the most likely explanation?",
      "options": [
        "Central fatigue is accumulating even though peripheral, muscular soreness remains low, because soreness reports on the peripheral account and tells a program little about whether the central nervous system's (CNS) outgoing drive is ready to fire maximally",
        "Her tissue has permanently stopped adapting, and no programming change of any kind could help",
        "A dropping bar speed while feeling physically fresh always indicates equipment malfunction rather than a physiological signal",
        "Soreness is the single most reliable marker of central nervous system readiness for heavy training"
      ],
      "answer": 0,
      "points": 1,
      "explanation": "Central and peripheral fatigue recover on different timecourses, and soreness is a peripheral signal that says little about the wire. A stalling bar speed on a fixed load with no soreness is exactly the signature of accumulating central fatigue that a soreness-only monitoring approach would miss entirely."
    },
    {
      "id": "b6-c9-mc-2",
      "chapter": 9,
      "type": "mc",
      "q": "A learner schedules their heaviest max-intent strength session the day before their most important technical skill session each week, and the technical work consistently looks sloppy despite the learner feeling physically fresh. What does the chapter's model of weekly sequencing suggest?",
      "options": [
        "High-skill work requires a fresh central account, so placing max-intent work directly before it hands the learner central fatigue exactly when coordination is most sensitive to it; reordering the sessions or adding a lower-fatigue buffer day would likely improve technical quality",
        "Technical skill sessions are unaffected by prior training, because skill is stored entirely as tissue-level muscle memory",
        "Sloppy technical performance the day after heavy lifting always indicates a peripheral, muscular problem that only rest for the muscle itself can fix",
        "The order of sessions within a week has no measurable effect as long as total weekly volume stays constant"
      ],
      "answer": 0,
      "points": 1,
      "explanation": "Both high-skill and high-intent work draw on the same central account, and coordination is one of the first qualities to degrade under central fatigue, well before raw force output falls. Placing heavy neural work directly in front of a technical session predictably degrades that session, even though the muscle itself feels fine."
    }
  ]
};
