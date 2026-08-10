/* Gemini Education: B5 (Nervous System I: Foundations) FINAL EXAM, interim live version.
   Current exam.html renders MC and free-response only, so this ships 20 MC + 6 true/false
   (as 2-option MC), drawing 20 per attempt, options shuffled, 80% to pass. 26 in the pool.
   Full bank (matching, word-bank, multi-select, write-ins) is in b5-nervous-system-i.full.js. */
window.GEM_EXAM = {
  slug: "b5-nervous-system-i",
  title: "Nervous System I: Foundations",
  contact_hours: 9, ceu_value: 0.9, pass_threshold: 80, draw_mc: 20, placeholder: false,
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
      "explanation": "The action potential is all or nothing: once threshold is crossed, every spike is identical in size, whether the triggering input barely crossed threshold or blew past it. Intensity is instead carried by frequency coding, how often the neuron fires, not by how large any single spike happens to be."
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
      "explanation": "The resting membrane potential of about negative 70 millivolts is not a fixed law of nature; it is an equilibrium point maintained by the sodium-potassium pump actively holding ion gradients in place. If the pump stopped, those gradients would begin to collapse and the resting potential would drift toward zero, leaving the cell unable to fire a normal action potential."
    },
    {
      "id": "b5-c1-mc-3",
      "chapter": 1,
      "type": "mc",
      "q": "A person claims that thicker myelin around an axon produces a bigger, stronger action potential once it reaches the next neuron. Is this an accurate description of what myelin actually does?",
      "options": [
        "Yes, myelin amplifies the spike's size at every node it passes",
        "No, myelin only changes how quickly an identical, fixed size spike travels, letting it leap between the bare nodes of Ranvier in saltatory conduction; it does not make the spike itself any larger",
        "Yes, but only for axons in the central nervous system (CNS), not the peripheral nervous system (PNS)",
        "No, myelin actually slows the spike down while making it easier to detect on a scan"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "Myelin does not make an action potential bigger. It insulates stretches of axon so the spike can leap between the bare nodes of Ranvier in saltatory conduction, dramatically increasing conduction speed while leaving the size of the spike itself unchanged. Speed and strength are separate questions, and myelin only ever answers the first one."
    },
    {
      "id": "b5-c1-tf-1",
      "chapter": 1,
      "type": "mc",
      "q": "Because the patch of axon membrane just behind an advancing action potential is briefly refractory and cannot fire again, the wave of depolarization is forced to propagate in one direction only, which is exactly what a one-way signaling cable needs.",
      "options": [
        "True",
        "False"
      ],
      "answer": 0,
      "points": 1,
      "explanation": "Because the patch of membrane just behind an advancing spike is briefly refractory and cannot fire again, depolarization can only propagate forward, never backward. This enforced one-way rule is exactly what a reliable, one-directional signaling cable needs, and it also caps the maximum rate at which a neuron can fire."
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
      "explanation": "The withdrawal reflex completes inside the spinal cord, part of the central nervous system (CNS): an interneuron integrates the incoming sensory signal locally and triggers the motor neuron directly, all within about a tenth of a second. A separate branch of the same sensory signal is still climbing toward the brain, which is why the hand is already withdrawn before the pain is consciously felt."
    },
    {
      "id": "b5-c2-mc-2",
      "chapter": 2,
      "type": "mc",
      "q": "A learner assumes afferent signals are always unpleasant or passive sensations while efferent signals are always deliberate, important commands. Using the definitions of afferent (carrying signals toward the central nervous system (CNS)) and efferent (carrying signals away from the CNS), what is the best correction to this assumption?",
      "options": [
        "The assumption is correct; afferent signals are always minor and efferent signals are always major",
        "Afferent and efferent describe only the direction of travel relative to the CNS, not importance or pleasantness; a pleasant sensation and a painful one can both be afferent, and a command to blink and a command to sprint can both be efferent",
        "Afferent signals only travel through the autonomic nervous system (ANS), while efferent signals only travel through the somatic division",
        "Efferent signals are always slower than afferent signals because they must pass through the brain first"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "Afferent and efferent describe direction of travel relative to the central nervous system (CNS) only, arriving versus exiting, never importance or pleasantness. A pleasant sensation and a painful one can both be afferent, and a command to blink and a command to sprint can both be efferent."
    },
    {
      "id": "b5-c2-tf-1",
      "chapter": 2,
      "type": "mc",
      "q": "The central nervous system (CNS) is enclosed in bone and wrapped in three protective membranes, while the peripheral nervous system (PNS) has no equivalent three-layer wrapping, an asymmetry that reflects how much harder it is for damaged central circuits to regrow compared with peripheral axons.",
      "options": [
        "True",
        "False"
      ],
      "answer": 0,
      "points": 1,
      "explanation": "The central nervous system (CNS) is sealed inside bone and wrapped in three protective membranes, while the peripheral nervous system (PNS) relies on simpler connective tissue sheaths built for flexibility and repair. This asymmetry reflects what each region can afford to lose: peripheral axons can regrow after injury, while central circuits largely cannot."
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
      "explanation": "Calcium is the internal trigger, not the neurotransmitter. It enters the presynaptic terminal through voltage gated calcium channels and binds a sensor protein that lets primed vesicles fuse with the membrane, but calcium itself never leaves the terminal to cross the synaptic cleft or bind a receptor on the receiving cell."
    },
    {
      "id": "b5-c3-mc-2",
      "chapter": 3,
      "type": "mc",
      "q": "Acetylcholine excites skeletal muscle by binding nicotinic receptors but slows the heart by binding muscarinic receptors on pacemaker cells. What does this demonstrate about how neurotransmitters work?",
      "options": [
        "Acetylcholine is a rare special case; every other neurotransmitter has one fixed effect regardless of receptor",
        "The effect of a neurotransmitter, excitatory or inhibitory, is determined by the receptor it binds rather than by the identity of the molecule itself, so the same molecule can excite one cell type and inhibit another",
        "This proves acetylcholine is actually two chemically distinct molecules that share one name",
        "The heart and skeletal muscle simply interpret voltage differently, which has nothing to do with receptors"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "The effect of a neurotransmitter, excitatory or inhibitory, fast or slow, lives in the receptor it binds rather than in the molecule's identity. Acetylcholine binds nicotinic receptors on skeletal muscle and excites it, then binds muscarinic receptors on the heart's pacemaker cells and inhibits it, the same key opening two very different locks."
    },
    {
      "id": "b5-c3-mc-3",
      "chapter": 3,
      "type": "mc",
      "q": "A medication blocks the reuptake transporter for a neurotransmitter without causing the presynaptic terminal to release any additional transmitter. Why does the signal at that synapse still become stronger and more prolonged?",
      "options": [
        "Blocking reuptake somehow increases the number of vesicles released per spike",
        "With the transporter blocked, transmitter molecules linger in the synaptic cleft longer, repeatedly binding and unbinding postsynaptic receptors before being cleared, which amplifies and prolongs the signal even though release itself is unchanged",
        "Reuptake inhibitors work by increasing the size of each individual action potential",
        "Blocking reuptake converts an inhibitory postsynaptic potential (IPSP) into an excitatory postsynaptic potential (EPSP)"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "Reuptake transporters normally clear neurotransmitter from the cleft quickly. Blocking that transporter does not add any new transmitter, it simply lets the existing molecules linger longer, repeatedly binding and unbinding postsynaptic receptors, which amplifies and prolongs the signal even though release itself is unchanged."
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
      "explanation": "A human heart's own intrinsic pacemaker would fire around 100 to 110 beats per minute if left alone. A resting rate closer to 60 or 70 exists because the parasympathetic branch of the autonomic nervous system (ANS) is continuously pressing the brake through the vagus nerve. Rest is an active, ongoing command, not the absence of one."
    },
    {
      "id": "b5-c4-mc-2",
      "chapter": 4,
      "type": "mc",
      "q": "A learner assumes that because the sympathetic branch generally releases norepinephrine at its organ targets, sweat glands, which are also sympathetically innervated, must respond to norepinephrine too. What is the actual chemical signature at sweat glands?",
      "options": [
        "Sweat glands are actually controlled by the parasympathetic branch, not the sympathetic branch",
        "Sweat glands are a well documented exception: the sympathetic nerves that drive most sweat glands release acetylcholine rather than norepinephrine, even though the fiber belongs to the sympathetic chain",
        "Sweat glands respond only to circulating epinephrine from the adrenal medulla and have no direct nerve supply at all",
        "Sweat glands are the only organ in the body with no autonomic innervation whatsoever"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "Sweat glands are a well documented exception to the general rule. The sympathetic nerves that drive most sweat glands release acetylcholine rather than norepinephrine, even though the fiber belongs to the sympathetic chain, which is why the clean parasympathetic equals acetylcholine, sympathetic equals norepinephrine pairing has to be held loosely."
    },
    {
      "id": "b5-c4-tf-1",
      "chapter": 4,
      "type": "mc",
      "q": "According to the chapter, the healthiest possible nervous system is one that spends as much time as possible in parasympathetic dominance, since sympathetic activation is inherently harmful.",
      "options": [
        "True",
        "False"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "The chapter explicitly rejects this framing. A body that cannot mobilize when a real demand arrives is impaired, not healthier. The evidence points toward flexible balance, the capacity to shift quickly and appropriately in either direction and then let go, not toward maximizing time spent in one branch."
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
      "explanation": "The sympathetic-adrenal-medullary (SAM) axis is a fast, nerve driven surge that resolves within minutes. The slower hypothalamic-pituitary-adrenal (HPA) axis, which releases cortisol, is often still climbing toward its fifteen to thirty minute peak well after the SAM surge has faded, which is exactly why a lingering, unsettled feeling can outlast the sharper in-the-moment tension."
    },
    {
      "id": "b5-c5-mc-2",
      "chapter": 5,
      "type": "mc",
      "q": "Two learners face an identical stressful week. One shows large stress spikes that resolve completely each night. The other shows modest spikes that never quite return to baseline before the next demand arrives. Which one is accumulating more allostatic load?",
      "options": [
        "The learner with large spikes, because bigger reactions are always worse for the body",
        "The learner whose modest spikes never fully return to baseline, because allostatic load accumulates largely from a failure of the stress response to shut off or resolve, not simply from the size of any single spike",
        "Neither learner is at any risk, because allostatic load depends only on total lifetime cortisol exposure",
        "Both learners face identical risk, because allostatic load depends only on the number of stressors, not their resolution"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "Three of the four routes to allostatic load concern the shape of the response over time, whether it habituates, whether it shuts off, rather than its size. A response that never fully returns to baseline before the next demand arrives accumulates load even if each individual spike is modest, which is why recovery, not spike size, is the true protagonist of the stress model."
    },
    {
      "id": "b5-c5-tf-1",
      "chapter": 5,
      "type": "mc",
      "q": "According to the chapter, calming down after a threat is essentially a passive process, in which sympathetic nerves simply stop firing and the body drifts back to baseline on its own without any active involvement from the parasympathetic branch.",
      "options": [
        "True",
        "False"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "Recovery is an active process, not a passive drift back to baseline. The parasympathetic branch, carried chiefly by the vagus nerve, actively re-engages its brake to slow the heart and quiet sympathetic outflow, and the speed of that active re-engagement is what heart rate variability (HRV) is measuring."
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
      "explanation": "Because every action potential looks alike, the nervous system assigns meaning by labeled lines, which specific pathway a spike travels on. A spike arriving on the optic nerve is read as light no matter what actually caused it, which is why mechanical pressure on a closed eyelid can produce a sensation of light that was never physically there."
    },
    {
      "id": "b5-c6-mc-2",
      "chapter": 6,
      "type": "mc",
      "q": "A person wearing a heart rate variability (HRV) ring reads a low morning score and then reports feeling unusually anxious for the rest of the day, even though nothing else about their body changed. Using the concept of interoceptive inference, what is the best explanation?",
      "options": [
        "The ring is directly transmitting an electrical signal into the person's nervous system that causes anxiety",
        "Because interoceptive signals like heart rate are often genuinely ambiguous, the brain relies on prediction to interpret them, and a low number can prime an expectation of threat that reshapes how ordinary bodily sensations are subsequently felt and labeled",
        "This proves the ring's measurement was inaccurate and should be ignored entirely",
        "Interoceptive inference only applies to gut sensations, not to heart related feelings"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "Interoceptive signals like heart rate are often genuinely ambiguous, so the brain relies heavily on prediction to interpret them, a process called interoceptive inference. A low heart rate variability (HRV) number can prime an expectation of threat, and that expectation then reshapes how ordinary bodily sensations are felt and labeled for the rest of the day."
    },
    {
      "id": "b5-c7-mc-1",
      "chapter": 7,
      "type": "mc",
      "q": "As a musician gradually increases bow pressure from a soft passage to a loud one, in what order does the size principle predict that motor units are recruited?",
      "options": [
        "Large, powerful, fast fatiguing units first, with small units added only for the loudest passages",
        "Small, fatigue resistant units are recruited first for gentle force, with larger, more powerful units added later and held in reserve for near maximal effort, giving fine control at low forces and raw power on demand",
        "All motor units are recruited simultaneously regardless of force level, and only firing rate changes",
        "Units are recruited in a completely random order determined by which axon happens to fire first"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "The size principle predicts an orderly recruitment order from small to large. Small, fatigue resistant motor units are recruited first, giving fine control at gentle force levels, while larger, more powerful, faster fatiguing units are held in reserve and recruited only as near maximal force is required."
    },
    {
      "id": "b5-c7-mc-2",
      "chapter": 7,
      "type": "mc",
      "q": "At a healthy neuromuscular junction (NMJ), the endplate potential produced by a single motor neuron spike is far larger than what is strictly needed to trigger a muscle fiber action potential. If a process gradually reduced the number of functioning acetylcholine receptors at the endplate, what would this built in safety margin predict about the reliability of the nerve to muscle relay?",
      "options": [
        "Reliability would be unaffected until every single receptor was lost, because the endplate potential is fixed regardless of receptor number",
        "As receptors are lost, the endplate potential would shrink toward threshold, and the relay would become progressively less reliable, particularly with repeated use, since the safety margin that normally guarantees one spike produces one twitch would be eroded",
        "Losing receptors would make the relay faster and more efficient by reducing wasted signal",
        "The muscle fiber would compensate by permanently lowering its own threshold to exactly cancel out the receptor loss"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "The neuromuscular junction (NMJ) normally produces an endplate potential far larger than what is strictly needed to cross threshold, a safety margin that guarantees one motor neuron spike reliably produces one muscle fiber action potential. Losing receptors shrinks that margin, so the relay becomes progressively less reliable, especially with repeated use as available receptor capacity is taxed further."
    },
    {
      "id": "b5-c7-tf-1",
      "chapter": 7,
      "type": "mc",
      "q": "According to the chapter, movement is normally an open loop process, meaning the nervous system fires a fixed pattern of commands in advance and does not use ongoing sensory feedback, such as from muscle spindles and Golgi tendon organs, to correct a movement while it is still underway.",
      "options": [
        "True",
        "False"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "Movement is never open loop. Proprioceptive feedback from muscle spindles and Golgi tendon organs continuously reports limb position, movement, and force back to the spinal cord and brain, and this ongoing feedback, along with fast spinal reflexes, is what allows real time correction while a movement is still underway."
    },
    {
      "id": "b5-c8-mc-1",
      "chapter": 8,
      "type": "mc",
      "q": "Two learners each practice a skill for a total of four hours. One completes all four hours in a single evening session. The other spreads the same four hours across four separate evenings, sleeping between each session. Based on the spacing effect and the timing of structural plasticity, which learner is predicted to retain the skill better a week later?",
      "options": [
        "The massed learner, because uninterrupted practice avoids the cost of restarting each session",
        "The spaced learner, because the slow, structural changes that consolidate a skill unfold over hours and days, and spacing gives those processes room to run between sessions rather than asking days of consolidation to happen inside one sitting",
        "Neither learner has an advantage, since total practice time is the only variable that matters for retention",
        "The massed learner, because long-term potentiation (LTP) only occurs during continuous, uninterrupted stimulation"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "The structural, consolidating changes that make a skill durable unfold over hours and days, not within a single session. Spacing practice across multiple days gives those slow processes room to run between sessions, while cramming the same total time into one sitting outruns the biology and front-loads fatigue instead."
    },
    {
      "id": "b5-c8-mc-2",
      "chapter": 8,
      "type": "mc",
      "q": "A person struggles to break a habit of reaching for their phone the moment they feel bored, describing it as a lack of willpower. How does the chapter's model of neuroplasticity reframe this experience?",
      "options": [
        "The habit is evidence of a permanently damaged circuit that can never be changed",
        "The habit reflects an ordinary, value neutral application of the same principle that builds any skill, cells that fire together wire together, meaning repetition has strengthened that specific pathway; because unused connections weaken, a competing pathway can be built up while the old one fades from disuse",
        "Habits are stored entirely in muscle tissue rather than in the nervous system, so willpower is irrelevant",
        "Once a habit is wired in, no amount of new repetition can ever change the underlying synaptic connections"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "Cells that fire together, wire together is a value neutral principle: it strengthens whatever pathway is repeated, whether or not that pathway is helpful. Because unused connections weaken under the same use it or lose it rule, a competing, more helpful pathway can be deliberately built up while the old one gradually fades from disuse."
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
      "explanation": "Sleep is not the brain switching off. During sleep the fluid filled interstitial space between brain cells expands, driving the glymphatic system, a convective flow of cerebrospinal fluid that clears metabolic waste from the brain at roughly double the rate seen during waking, direct physical evidence of active, organized nighttime work."
    },
    {
      "id": "b5-c9-mc-2",
      "chapter": 9,
      "type": "mc",
      "q": "A person takes a long nap at five in the afternoon to cope with an exhausting day, then struggles to fall asleep at their normal bedtime that night. Using the two-process model of sleep regulation, what is the most likely explanation?",
      "options": [
        "The nap increased the circadian wake maintenance zone, which always causes insomnia regardless of nap timing",
        "The late, long nap discharged too much of the homeostatic sleep pressure (Process S) that would normally have built up by bedtime, so the person arrived at their normal bedtime with low sleep pressure meeting a circadian rhythm (Process C) wake maintenance zone that had not yet released",
        "Naps have no effect on nighttime sleep onset because Process S and Process C are completely independent of each other",
        "The nap permanently reset the person's circadian clock by twelve hours"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "The two-process model describes sleep timing as the interaction of homeostatic sleep pressure, which builds across wakefulness, and the circadian rhythm, which oscillates independently. A long, late afternoon nap discharges too much of the pressure needed at bedtime, so the person arrives at their normal bedtime with low pressure meeting a circadian wake maintenance zone that has not yet released, delaying sleep onset."
    },
    {
      "id": "b5-c9-tf-1",
      "chapter": 9,
      "type": "mc",
      "q": "According to the chapter, deep slow-wave sleep and rapid eye movement (REM) sleep perform essentially the same memory function, so shortening either one produces an identical effect on what a person is able to remember and integrate the next day.",
      "options": [
        "True",
        "False"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "Deep slow-wave sleep and rapid eye movement (REM) sleep do different jobs. Deep sleep is where declarative memories are actively consolidated from the hippocampus into the cortex, while REM sleep supports procedural, emotional, and integrative processing. Shortening one versus the other costs a learner a different kind of consolidation, not an identical one."
    }
  ]
};
