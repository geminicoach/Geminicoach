/* Gemini Education: B5 (Nervous System I: Foundations) FULL exam bank (all question types).
   PARKED until the portal thread upgrades exam.html to render matching / multi-select /
   word-bank / write-in. The live exam (b5-nervous-system-i.js) is an interim MC+TF subset
   on the current engine. Swap this in when the new-type renderers + appeal grader ship.
   Schema: education/EXAM-SPEC.md. */
window.GEM_EXAM = {
  slug: "b5-nervous-system-i",
  title: "Nervous System I: Foundations",
  contact_hours: 9, ceu_value: 0.9, pass_threshold: 80, placeholder: false,
  draw: { mc: 14, multi: 3, tf: 4, match: 2, fill: 2, free: 0 },
  shuffle: { questions: true, options: true },
  questions: [
    {
      "id": "b5-c1-mc-1",
      "chapter": 1,
      "type": "mc",
      "q": "A learner presses harder on a table and assumes a harder press must send a bigger, taller voltage spike up the nerve to the brain, the same way turning a dimmer switch further sends more current down a wire. Using the actual physiology of a neuron's action potential, what is wrong with this picture?",
      "options": [
        "Nothing is wrong; a harder press really does produce a larger, taller action potential",
        "An action potential is all or nothing, always the same size once threshold is crossed, so stimulus intensity is instead carried by how frequently the neuron fires, not by the size of any single spike",
        "Nerves cannot carry pressure information at all, only pain",
        "A harder press permanently lowers the neuron's threshold, which is why it feels more intense"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "The action potential is all or nothing: once threshold is crossed, every spike is identical in size. Intensity is instead carried by frequency coding, how often the neuron fires, not by how large any single spike happens to be."
    },
    {
      "id": "b5-c1-mc-2",
      "chapter": 1,
      "type": "mc",
      "q": "A cell biologist proposes that if the sodium-potassium pump (the Na+/K+-ATPase) stopped running for several minutes, a neuron's resting membrane potential would be unaffected because ion channels would simply compensate. Based on how the resting potential is actually maintained, is this correct?",
      "options": [
        "Yes, because the resting potential is a fixed law of nature that channels alone can maintain indefinitely",
        "No, because the resting potential of about negative 70 millivolts depends on ion gradients the pump actively maintains, and if the pump stopped, those gradients would begin to collapse and the resting potential would drift toward zero",
        "No, but only because sodium channels would slam permanently shut the moment the pump stopped",
        "Yes, because potassium's concentration gradient does not depend on the pump at all"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "The resting membrane potential is an equilibrium point maintained by the sodium-potassium pump actively holding ion gradients in place. If the pump stopped, gradients would collapse and the resting potential would drift toward zero."
    },
    {
      "id": "b5-c1-tf-1",
      "chapter": 1,
      "type": "tf",
      "q": "Because the patch of axon membrane just behind an advancing action potential is briefly refractory and cannot fire again, the wave of depolarization is forced to propagate in one direction only, which is exactly what a one-way signaling cable needs.",
      "answer": true,
      "points": 1,
      "explanation": "Because the patch of membrane just behind an advancing spike is briefly refractory, depolarization can only propagate forward, never backward, and the refractory period also caps the maximum firing rate."
    },
    {
      "id": "b5-c1-fill-1",
      "chapter": 1,
      "type": "fill",
      "q": "The resting membrane potential of about negative 70 millivolts reflects a balance between the outward chemical pull on {{1}} ions leaking through open channels and the electrical pull drawing them back in. Once excitatory input pushes the membrane up to about negative 55 millivolts, the {{2}}, voltage gated sodium channels snap open and the action potential fires.",
      "bank": [
        "potassium",
        "threshold",
        "calcium",
        "resting potential"
      ],
      "answers": {
        "1": "potassium",
        "2": "threshold"
      },
      "points": 2
    },
    {
      "id": "b5-c2-mc-1",
      "chapter": 2,
      "type": "mc",
      "q": "A person's hand withdraws from a hot stove before they consciously feel any pain. Which structure actually completed the loop that produced the withdrawal movement?",
      "options": [
        "The motor cortex consciously processed the sensation and commanded the withdrawal before the pain was felt",
        "An interneuron within the spinal cord, part of the central nervous system (CNS), integrated the incoming sensory signal locally and triggered the motor neuron directly, completing the reflex before a separate branch of the pain signal reached the brain",
        "The peripheral nervous system (PNS) alone, without the signal ever entering the spinal cord, made the decision to withdraw the hand",
        "The withdrawal only happened after the brain consciously registered pain and sent a delayed command back down"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "The withdrawal reflex completes inside the spinal cord: an interneuron integrates the incoming sensory signal locally and triggers the motor neuron directly, all within about a tenth of a second, before pain reaches conscious awareness."
    },
    {
      "id": "b5-c2-match-1",
      "chapter": 2,
      "type": "match",
      "q": "Match each component of the withdrawal reflex arc to its correct role.",
      "pairs": [
        {
          "left": "Sensory receptor",
          "right": "Transduces a physical stimulus, such as heat or stretch, into an electrical signal"
        },
        {
          "left": "Afferent (sensory) neuron",
          "right": "Carries the incoming signal into the spinal cord through the dorsal (back) root"
        },
        {
          "left": "Interneuron",
          "right": "Integrates the signal locally within the spinal cord, the decision maker of the reflex"
        },
        {
          "left": "Efferent (motor) neuron",
          "right": "Carries the outgoing command out of the spinal cord through the ventral (front) root"
        },
        {
          "left": "Effector (muscle)",
          "right": "Contracts to complete the protective withdrawal"
        }
      ],
      "points": 5
    },
    {
      "id": "b5-c2-tf-1",
      "chapter": 2,
      "type": "tf",
      "q": "The central nervous system (CNS) is enclosed in bone and wrapped in three protective membranes, while the peripheral nervous system (PNS) has no equivalent three-layer wrapping, an asymmetry that reflects how much harder it is for damaged central circuits to regrow compared with peripheral axons.",
      "answer": true,
      "points": 1,
      "explanation": "The CNS is sealed inside bone and wrapped in three protective membranes; the PNS relies on simpler connective tissue sheaths built for flexibility and repair, reflecting that peripheral axons can regrow while central circuits largely cannot."
    },
    {
      "id": "b5-c3-mc-1",
      "chapter": 3,
      "type": "mc",
      "q": "A learner assumes calcium must be one of the chemicals that crosses the synaptic cleft and binds a receptor on the receiving cell. Is calcium the neurotransmitter in this handshake?",
      "options": [
        "Yes, calcium is the primary neurotransmitter released from vesicles",
        "No, calcium is the internal trigger that enters the presynaptic terminal through voltage gated calcium channels and causes vesicles to fuse; it never leaves the terminal to cross the cleft itself",
        "Yes, but only at inhibitory synapses",
        "No, calcium instead breaks neurotransmitter down after it has already been released"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "Calcium is the internal trigger, not the neurotransmitter. It enters through voltage gated calcium channels and triggers vesicle fusion, but never leaves the terminal itself."
    },
    {
      "id": "b5-c3-mc-2",
      "chapter": 3,
      "type": "mc",
      "q": "Acetylcholine excites skeletal muscle by binding nicotinic receptors but slows the heart by binding muscarinic receptors on pacemaker cells. What does this demonstrate about how neurotransmitters work?",
      "options": [
        "Acetylcholine is a rare special case; every other neurotransmitter has one fixed effect regardless of receptor",
        "The effect of a neurotransmitter is determined by the receptor it binds rather than by the identity of the molecule itself, so the same molecule can excite one cell type and inhibit another",
        "This proves acetylcholine is actually two chemically distinct molecules that share one name",
        "The heart and skeletal muscle simply interpret voltage differently, which has nothing to do with receptors"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "The message lives in the lock, not the key: acetylcholine binds nicotinic receptors on muscle and excites it, then binds muscarinic receptors on the heart and inhibits it."
    },
    {
      "id": "b5-c3-multi-1",
      "chapter": 3,
      "type": "multi",
      "q": "Which statements about the neurotransmitters introduced in this chapter are accurate? Select all that apply.",
      "options": [
        "Glutamate is the brain's principal excitatory transmitter, acting largely through fast ionotropic receptors",
        "Gamma-aminobutyric acid (GABA) is the principal inhibitory transmitter of the mature brain",
        "Dopamine's best supported role is as a reward prediction error signal rather than a simple pleasure molecule",
        "Every neurotransmitter has one fixed, unchanging effect on every cell it contacts, regardless of receptor type",
        "Acetylcholine can excite skeletal muscle through nicotinic receptors while slowing the heart through muscarinic receptors"
      ],
      "answers": [
        0,
        1,
        2,
        4
      ],
      "scoring": "all_or_nothing",
      "points": 1,
      "explanation": "Glutamate, gamma-aminobutyric acid (GABA), dopamine, and acetylcholine's dual receptor effects are all accurate as described. The claim that every transmitter has one fixed effect regardless of receptor is false; the message lives in the receptor, not the molecule."
    },
    {
      "id": "b5-c4-mc-1",
      "chapter": 4,
      "type": "mc",
      "q": "A person believes their resting heart rate of 65 beats per minute means their parasympathetic branch is doing nothing since they feel calm. Is this accurate?",
      "options": [
        "Yes, at rest neither branch of the autonomic nervous system (ANS) is active",
        "No, resting heart rate is lower than the heart's own intrinsic pacemaker rate of about 100 to 110 beats per minute precisely because the parasympathetic branch is continuously and actively pressing the brake through the vagus nerve; rest is an active command, not an absence of one",
        "No, but only because the sympathetic branch is completely shut off at rest",
        "Yes, autonomic tone only exists during exercise, never at rest"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "A resting heart rate below the heart's own intrinsic pacemaker rate exists because the parasympathetic branch is continuously pressing the brake through the vagus nerve. Rest is an active command, not an absence of one."
    },
    {
      "id": "b5-c4-tf-1",
      "chapter": 4,
      "type": "tf",
      "q": "According to the chapter, the healthiest possible nervous system is one that spends as much time as possible in parasympathetic dominance, since sympathetic activation is inherently harmful.",
      "answer": false,
      "points": 1,
      "explanation": "The chapter explicitly rejects this framing. A body that cannot mobilize when a real demand arrives is impaired, not healthier. Health is flexible balance, not maximizing time in one branch."
    },
    {
      "id": "b5-c4-multi-1",
      "chapter": 4,
      "type": "multi",
      "q": "During a full sympathetic mobilization, such as the moment before a sprint, which of the following organ responses are part of the coordinated pattern described in the chapter? Select all that apply.",
      "options": [
        "Heart rate and force of contraction increase",
        "Pupils dilate to admit more light and sharpen peripheral motion detection",
        "Digestive blood flow and motility decrease as the gut pauses non-urgent activity",
        "Airways narrow to conserve oxygen for later use",
        "Sweat glands activate to prime the body to shed heat, even though this pathway is cholinergic rather than noradrenergic"
      ],
      "answers": [
        0,
        1,
        2,
        4
      ],
      "scoring": "all_or_nothing",
      "points": 1,
      "explanation": "Heart rate, pupil dilation, reduced digestion, and cholinergic sweating are all part of the sympathetic pattern. Airways actually widen under sympathetic activation to move more air, not narrow, so that option is false."
    },
    {
      "id": "b5-c4-free-1",
      "chapter": 4,
      "type": "free",
      "q": "Ravi wears a ring that scores his heart rate variability (HRV) every morning and has concluded his goal should be to live in parasympathetic mode as much as possible, since the app frames a low score as strain and he cancels workouts on low-score mornings. Using the two pedal model, dual innervation, and the concept of flexible balance from this chapter, explain in an educational, role neutral way why permanently minimizing sympathetic activity is not a coherent health goal, and state clearly where your explanation must stop and hand off to a clinician.",
      "model": "Ravi's plan mistakes one pedal for a villain. The autonomic nervous system (ANS) runs on two branches acting as pedals on the same organs, the sympathetic branch mobilizing energy and the parasympathetic branch conserving and restoring it, and most organs are dually innervated so their state reflects the running balance between the two rather than a verdict from either branch alone. A body that never pressed the sympathetic pedal could not raise its heart rate for a flight of stairs, could not raise blood pressure to avoid fainting on standing, and could not mobilize fuel and alertness for a genuine demand. Ravi's exercise induced dip in heart rate variability (HRV) is not damage; it is an appropriate, time limited press of the gas pedal, exactly the kind of flexible, quickly resolving response associated with a well regulated system rather than a poorly regulated one. What actually indexes a healthy autonomic system is flexibility, the capacity to shift quickly and appropriately in either direction and then let go, not the amount of time spent in parasympathetic dominance. A single morning HRV number is also a noisy read of a complex system, shifting for many ordinary reasons such as sleep timing, alcohol, or travel, so treating one morning's dip as a verdict overstates what any single measurement can show. What this explanation cannot do is evaluate Ravi's own physiology. If he notices something a mechanistic model cannot explain, such as an unusually fast heart rate while simply standing still or racing episodes with no clear trigger, that pattern belongs with a clinician who can examine him directly, not with a wearable device or an educational chapter.",
      "key_points": [
        "Two pedal model: sympathetic mobilizes, parasympathetic conserves, most organs are dually innervated",
        "A body that cannot mobilize (raise heart rate, raise blood pressure) is impaired, not healthier",
        "Exercise-induced HRV dips are an appropriate, resolving press of the gas pedal, not damage",
        "Flexibility (fast, appropriate shifts in both directions), not time spent in one branch, indexes health",
        "Role-neutral boundary: unexplained patterns (racing heart with no trigger) belong with a clinician, not a device or chapter"
      ],
      "rubric": {
        "pass_threshold": 70,
        "points": [
          {
            "desc": "Explains the two pedal model and dual innervation to show why permanently minimizing sympathetic activity is incoherent",
            "weight": 30
          },
          {
            "desc": "Identifies the exercise-induced HRV change as adaptive, resolving mobilization rather than damage",
            "weight": 20
          },
          {
            "desc": "States that flexibility, not time spent in one branch, is the actual marker of a healthy autonomic system",
            "weight": 25
          },
          {
            "desc": "Keeps an educational, role neutral framing and defers any judgment about Ravi's own physiology to a qualified clinician",
            "weight": 25
          }
        ]
      },
      "points": 5,
      "appeal": true
    },
    {
      "id": "b5-c5-mc-1",
      "chapter": 5,
      "type": "mc",
      "q": "Why might someone still feel unsettled thirty minutes after a stressful phone call ended, even though the instant, racing heart feeling faded within a few minutes?",
      "options": [
        "This is not physiologically possible; all stress mediators clear from the body within seconds",
        "The fast sympathetic-adrenal-medullary (SAM) axis surge resolves within minutes, but the slower hypothalamic-pituitary-adrenal (HPA) axis, which releases cortisol, is often still climbing toward its fifteen to thirty minute peak, producing a lingering feeling well after the nerve-driven surge has faded",
        "The lingering feeling proves the stress response has become permanently dysregulated",
        "Cortisol and adrenaline are released and cleared on the exact same timeline, so the lingering feeling must be unrelated to the call"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "The fast sympathetic-adrenal-medullary (SAM) axis surge resolves within minutes, while the slower hypothalamic-pituitary-adrenal (HPA) axis, releasing cortisol, is often still climbing toward its peak, explaining the lingering feeling."
    },
    {
      "id": "b5-c5-match-1",
      "chapter": 5,
      "type": "match",
      "q": "Match each stress-system term to its correct description.",
      "pairs": [
        {
          "left": "Sympathetic-adrenal-medullary (SAM) axis",
          "right": "Fast, nerve driven surge that reaches full effect within seconds and fades within minutes"
        },
        {
          "left": "Hypothalamic-pituitary-adrenal (HPA) axis",
          "right": "Slower hormonal cascade releasing cortisol, peaking around fifteen to thirty minutes and lingering over an hour"
        },
        {
          "left": "Allostasis",
          "right": "Stability through change, the active adjustment of internal parameters to meet anticipated demand"
        },
        {
          "left": "Allostatic load",
          "right": "The cumulative cost of a stress system that activates too often, fails to habituate, or fails to shut off"
        }
      ],
      "points": 4
    },
    {
      "id": "b5-c5-tf-1",
      "chapter": 5,
      "type": "tf",
      "q": "According to the chapter, calming down after a threat is essentially a passive process, in which sympathetic nerves simply stop firing and the body drifts back to baseline on its own without any active involvement from the parasympathetic branch.",
      "answer": false,
      "points": 1,
      "explanation": "Recovery is active: the parasympathetic branch, carried chiefly by the vagus nerve, actively re-engages its brake, and the speed of that re-engagement is what heart rate variability (HRV) measures."
    },
    {
      "id": "b5-c6-mc-1",
      "chapter": 6,
      "type": "mc",
      "q": "Gently pressing on a closed eyelid can produce a faint spot of light that was never actually there. What does this illustrate about how the nervous system assigns meaning to a sensory signal?",
      "options": [
        "It proves the eye can directly sense mechanical pressure as pressure, and the light sensation is a rare malfunction",
        "Because every action potential looks alike, meaning is carried largely by labeled lines, the specific pathway a spike travels on; a spike arriving on the optic nerve is read as light no matter what actually caused it",
        "It shows that mechanical energy is chemically converted into light energy inside the eye itself",
        "It demonstrates that the retina can transduce pressure but not light under low-light conditions"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "Because every action potential looks alike, meaning is carried largely by labeled lines, the specific pathway a spike travels on, regardless of what actually caused the spike."
    },
    {
      "id": "b5-c6-fill-1",
      "chapter": 6,
      "type": "fill",
      "q": "The conversion of a physical stimulus, such as skin pressure, into a graded shift in a neuron's membrane voltage is called the {{1}}. Because the sensory axon can only speak in all or nothing spikes, a stronger stimulus is ultimately encoded as a higher {{2}} of action potentials rather than as a larger individual spike.",
      "bank": [
        "receptor potential",
        "frequency",
        "action potential",
        "amplitude"
      ],
      "answers": {
        "1": "receptor potential",
        "2": "frequency"
      },
      "points": 2
    },
    {
      "id": "b5-c6-multi-1",
      "chapter": 6,
      "type": "multi",
      "q": "Which statements about interoception are accurate per the chapter? Select all that apply.",
      "options": [
        "Roughly eighty percent of the vagus nerve's fibers are afferent, carrying signals from the body up toward the brain",
        "A. D. Craig reframed interoception as the sense of the entire physiological condition of the body, not just crude visceral sensation",
        "Interoceptive accuracy and interoceptive awareness are the same thing, so a confident feeling is always an accurate one",
        "A healthy body in a steady homeostatic state generates almost no felt interoceptive signal, because a constant stimulus is exactly what adaptation quiets",
        "The insular cortex is where separate interoceptive signals are integrated into a unified sense of the body's condition"
      ],
      "answers": [
        0,
        1,
        3,
        4
      ],
      "scoring": "all_or_nothing",
      "points": 1,
      "explanation": "The vagus nerve's afferent dominance, Craig's reframing, adaptation to constant homeostatic states, and the insula's integrative role are all accurate. Interoceptive accuracy and awareness can diverge sharply, so they are not the same thing."
    },
    {
      "id": "b5-c7-mc-1",
      "chapter": 7,
      "type": "mc",
      "q": "As a musician gradually increases bow pressure from a soft passage to a loud one, in what order does the size principle predict that motor units are recruited?",
      "options": [
        "Large, powerful, fast fatiguing units first, with small units added only for the loudest passages",
        "Small, fatigue resistant units are recruited first for gentle force, with larger, more powerful units added later and held in reserve for near maximal effort",
        "All motor units are recruited simultaneously regardless of force level, and only firing rate changes",
        "Units are recruited in a completely random order determined by which axon happens to fire first"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "The size principle predicts small, fatigue resistant units are recruited first, with larger, more powerful units held in reserve for near maximal force."
    },
    {
      "id": "b5-c7-multi-1",
      "chapter": 7,
      "type": "multi",
      "q": "Which statements about motor units and force grading are accurate per the chapter? Select all that apply.",
      "options": [
        "A motor unit, one alpha motor neuron plus every muscle fiber it innervates, is the smallest element of movement the nervous system can command as a discrete choice",
        "The size principle predicts that small, fatigue resistant motor units are recruited before large, powerful ones",
        "Force can be graded by making a single action potential larger when more force is needed",
        "Rate coding grades force by firing an already recruited motor unit faster, fusing successive twitches toward tetanus",
        "Motor units built from type I, slow oxidative fibers are well suited to sustained postural work"
      ],
      "answers": [
        0,
        1,
        3,
        4
      ],
      "scoring": "all_or_nothing",
      "points": 1,
      "explanation": "Motor units, the size principle, rate coding, and type I fiber postural suitability are all accurate. Action potentials are all or nothing, so a single spike cannot be made larger to add force."
    },
    {
      "id": "b5-c7-tf-1",
      "chapter": 7,
      "type": "tf",
      "q": "According to the chapter, movement is normally an open loop process, meaning the nervous system fires a fixed pattern of commands in advance and does not use ongoing sensory feedback, such as from muscle spindles and Golgi tendon organs, to correct a movement while it is still underway.",
      "answer": false,
      "points": 1,
      "explanation": "Movement is never open loop. Proprioceptive feedback from muscle spindles and Golgi tendon organs continuously informs real time correction of an ongoing movement."
    },
    {
      "id": "b5-c8-mc-1",
      "chapter": 8,
      "type": "mc",
      "q": "Two learners each practice a skill for a total of four hours. One completes all four hours in a single evening session. The other spreads the same four hours across four separate evenings, sleeping between each session. Based on the spacing effect and the timing of structural plasticity, which learner is predicted to retain the skill better a week later?",
      "options": [
        "The massed learner, because uninterrupted practice avoids the cost of restarting each session",
        "The spaced learner, because the slow, structural changes that consolidate a skill unfold over hours and days, and spacing gives those processes room to run between sessions",
        "Neither learner has an advantage, since total practice time is the only variable that matters for retention",
        "The massed learner, because long-term potentiation (LTP) only occurs during continuous, uninterrupted stimulation"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "The slow, structural changes that consolidate a skill unfold over hours and days, so spacing practice across sessions outperforms cramming the same total time into one sitting."
    },
    {
      "id": "b5-c8-fill-1",
      "chapter": 8,
      "type": "fill",
      "q": "Donald Hebb's principle is often summarized as cells that fire together, {{1}} together. Bliss and Lomo gave this idea physiological support in 1973 when they discovered {{2}}, a persistent, use dependent increase in synaptic strength following intense stimulation.",
      "bank": [
        "wire",
        "long-term potentiation",
        "separate",
        "long-term memory"
      ],
      "answers": {
        "1": "wire",
        "2": "long-term potentiation"
      },
      "points": 2
    },
    {
      "id": "b5-c9-mc-1",
      "chapter": 9,
      "type": "mc",
      "q": "A learner believes that sleep is simply the brain switching off for the night with little happening until waking. Which finding most directly challenges this belief?",
      "options": [
        "During sleep, the brain's electrical activity disappears almost entirely, confirming that it is inactive",
        "During sleep, the interstitial space between brain cells expands, dramatically increasing the flow of cerebrospinal fluid and driving the glymphatic system, which clears metabolic waste from the brain at roughly double the rate seen during waking",
        "Sleep has no measurable effect on the electroencephalography (EEG) signal compared with quiet waking rest",
        "The brain only becomes active again in the final seconds before waking"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "The glymphatic system's expanded, faster clearance during sleep is direct physical evidence of active, organized nighttime work, not a switched-off brain."
    },
    {
      "id": "b5-c9-tf-1",
      "chapter": 9,
      "type": "tf",
      "q": "According to the chapter, deep slow-wave sleep and rapid eye movement (REM) sleep perform essentially the same memory function, so shortening either one produces an identical effect on what a person is able to remember and integrate the next day.",
      "answer": false,
      "points": 1,
      "explanation": "Deep sleep consolidates declarative memories from hippocampus to cortex, while REM sleep supports procedural, emotional, and integrative processing. Shortening one versus the other has different costs."
    },
    {
      "id": "b5-c9-free-1",
      "chapter": 9,
      "type": "free",
      "q": "Halle has been trimming forty minutes off each end of her sleep for three weeks to fit in more study time, and she reports feeling basically fine. Using the two-process model of sleep regulation, the synaptic homeostasis hypothesis, and the way non-rapid eye movement (NREM) and rapid eye movement (REM) sleep are distributed across the night, explain in an educational, role neutral way why her plan is likely costing her more than she realizes, and state clearly where your explanation must stop and hand off to a clinician.",
      "model": "Halle's plan treats every minute of sleep as interchangeable, but the architecture of a night is not a flat currency. Early cycles are rich in deep, slow-wave non-rapid eye movement (NREM) sleep, when homeostatic sleep pressure is highest and the brain does its heaviest physical restoration and declarative memory consolidation, gluing new facts into cortex through the coupled rhythms of slow oscillations, spindles, and hippocampal ripples. As the night proceeds, deep sleep shrinks and rapid eye movement (REM) sleep lengthens, so the final cycles before a normal wake time are dominated by REM sleep, which supports procedural, emotional, and integrative memory work, the kind of processing that lets new material connect to what she already knows. By trimming minutes off both ends, Halle is not losing a generic forty minutes twice over; she is disproportionately cutting into the REM-rich final cycles nearest her alarm, exactly the stage linked to integrating what she studied that evening. The synaptic homeostasis hypothesis adds a second cost: sleep is what allows the brain to downscale and renormalize the broad synaptic strengthening that waking learning produces, and a single shortened night has been shown to leave the cortex more excitable while blunting its capacity for further plasticity, meaning the very learning she is staying up to protect is less able to stick without adequate sleep. Feeling basically fine is also not strong evidence against a cost, since much of what shortened sleep degrades, integrative thinking, next day plasticity, memory consolidation, is not something a person can accurately judge from the inside in the moment. What this explanation cannot do is diagnose Halle's own sleep. If her sleep looks persistently disrupted rather than simply shortened by choice, for instance if she cannot fall asleep once she does go to bed or wakes repeatedly through the night, that pattern belongs with a clinician who can evaluate her directly, not with a course chapter.",
      "key_points": [
        "Sleep architecture is not flat: early cycles are deep-sleep rich, later cycles are REM-rich",
        "Trimming both ends of the night disproportionately cuts the REM-rich final cycles tied to integrative and procedural memory",
        "The synaptic homeostasis hypothesis: sleep loss leaves cortex more excitable and blunts capacity for further plasticity",
        "Feeling fine is not reliable evidence against a cost, since consolidation and integration are hard to self-assess",
        "Role-neutral boundary: persistent sleep disruption, as opposed to a scheduling choice, belongs with a clinician"
      ],
      "rubric": {
        "pass_threshold": 70,
        "points": [
          {
            "desc": "Explains why the shape of the night (early deep-sleep-rich cycles versus late REM-rich cycles) means trimmed sleep is not a flat cost",
            "weight": 30
          },
          {
            "desc": "Applies the synaptic homeostasis hypothesis to explain why sleep loss blunts the plasticity Halle is trying to protect",
            "weight": 25
          },
          {
            "desc": "Notes that feeling fine is not reliable evidence against a real cost to consolidation and integration",
            "weight": 20
          },
          {
            "desc": "Keeps an educational, role neutral framing and defers evaluation of persistent sleep disruption to a qualified clinician",
            "weight": 25
          }
        ]
      },
      "points": 5,
      "appeal": true
    }
  ]
};
