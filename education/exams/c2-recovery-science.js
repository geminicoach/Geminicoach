/* Gemini Education: C2 (Recovery Science) FINAL EXAM, interim live version.
   Current exam.html renders MC and free-response only, so this ships 20 MC + 6 true/false
   (as 2-option MC), drawing 20 per attempt, options shuffled, 80% to pass. 26 in the pool.
   Full bank (matching, word-bank, multi-select, write-ins) is in c2-recovery-science.full.js. */
window.GEM_EXAM = {
  slug: "c2-recovery-science",
  title: "Recovery Science",
  contact_hours: 9, ceu_value: 0.9, pass_threshold: 80, draw_mc: 20, placeholder: false,
  questions: [
    {
      "id": "c2-c1-mc-1",
      "chapter": 1,
      "type": "mc",
      "q": "A learner judges every session by how it felt in the moment, treating a workout that left them feeling wrecked as proof of progress and a workout that felt easy as a wasted session. Using the stimulus, recovery, adaptation loop, why is this a misreading?",
      "options": [
        "The workout is a controlled disruption that temporarily lowers capacity, and progress is the body's overshooting response during the recovery period that follows, not the disruption itself",
        "Feeling wrecked always means more muscle was built, so the belief is accurate",
        "Recovery happens entirely during the workout, so a felt sense of exhaustion is a direct readout of adaptation",
        "Adaptation cannot be judged at all, by any method, so the learner's approach is as good as any other"
      ],
      "answer": 0,
      "points": 1,
      "explanation": "The workout is the stimulus, a deliberate, dosed disruption to homeostasis whose immediate effect is negative. Adaptation is banked during the recovery period afterward, when repair and remodeling processes overshoot the prior baseline. A felt sense of exhaustion in the moment is not a reliable readout of that later process."
    },
    {
      "id": "c2-c1-mc-2",
      "chapter": 1,
      "type": "mc",
      "q": "A runner tests their 5k time the morning after the hardest interval session of their block and is discouraged by a slow result, despite weeks of consistent training. Using the fitness-fatigue model, what is the most likely explanation?",
      "options": [
        "Fitness has genuinely declined and the training block has failed",
        "Fatigue and fitness are the same quantity, so a slow time always means low fitness",
        "Testing the day after a hard session is the only valid way to measure fitness",
        "The test measured fitness minus a large, still-elevated fatigue aftereffect, so preparedness looked low even though fitness had risen"
      ],
      "answer": 3,
      "points": 1,
      "explanation": "Preparedness equals fitness minus fatigue. Immediately after a hard session, fitness has genuinely risen, but a large, fast-decaying fatigue aftereffect masks it. Testing under heavy accumulated fatigue underestimates the fitness that has actually been built."
    },
    {
      "id": "c2-c1-tf-1",
      "chapter": 1,
      "type": "mc",
      "q": "Supercompensation and Selye's General Adaptation Syndrome are useful working scaffolds for reasoning about the timing between a stimulus and the recovery that follows it, but they are simplified teaching models rather than literal, precise mechanisms the body follows.",
      "options": [
        "True",
        "False"
      ],
      "answer": 0,
      "points": 1,
      "explanation": "Real physiology does not produce one clean performance curve; different tissues and systems recover on different clocks. Supercompensation and General Adaptation Syndrome are instructive scaffolds for reasoning about timing, not literal ledgers of what is happening inside the body."
    },
    {
      "id": "c2-c2-mc-1",
      "chapter": 2,
      "type": "mc",
      "q": "Two people each lose one hour of sleep, one by going to bed an hour later and one by waking an hour earlier for an early alarm. Using what the chapter establishes about sleep architecture, why do they pay different physiological costs for losing the same single hour?",
      "options": [
        "Both lose an equal share of every sleep stage, so the cost is identical either way",
        "Losing sleep at the end of the night has no physiological consequence at all",
        "Sleep stages are distributed randomly across the night, so timing of the loss does not matter",
        "Slow-wave sleep is front-loaded early in the night while rapid eye movement (REM) sleep is back-loaded near morning, so a late bedtime disproportionately cuts the growth-hormone-rich deep sleep and an early alarm disproportionately cuts REM"
      ],
      "answer": 3,
      "points": 1,
      "explanation": "Slow-wave sleep dominates the first one or two cycles of the night, which is also when growth hormone pulses hardest. REM sleep lengthens with each later cycle. An hour trimmed from the start of the night and an hour trimmed from the end cost the body two different things."
    },
    {
      "id": "c2-c2-mc-2",
      "chapter": 2,
      "type": "mc",
      "q": "A person insists they perform fine on six hours of sleep a night because they feel fine. What do Van Dongen and colleagues (2003), combined with Windred and colleagues (2023) on sleep regularity, suggest is wrong with using how one feels as evidence?",
      "options": [
        "Subjective sleepiness ratings plateaued while objective performance kept declining over two weeks, so felt sleepiness is an unreliable gauge of accumulating impairment, and duration is not even the whole story since regularity independently predicts health outcomes",
        "Feeling fine on six hours proves six hours is adequate for everyone, since subjective report is the gold standard",
        "Performance impairment from chronic restriction appears immediately and cannot be missed, so the person's report is reliable",
        "Regularity of sleep timing has no bearing on health outcomes once duration is accounted for"
      ],
      "answer": 0,
      "points": 1,
      "explanation": "In the six-hour restriction group, subjective sleepiness ratings rose briefly then plateaued while objective performance kept sliding for the full two weeks. Windred and colleagues separately found sleep regularity to be a stronger independent predictor of mortality than duration alone."
    },
    {
      "id": "c2-c2-tf-1",
      "chapter": 2,
      "type": "mc",
      "q": "Sleeping in for two long nights on the weekend blunts the felt impairment of a short work week, but it does not fully restore baseline function or retroactively recover the specific anabolic windows that were missed on the nights sleep was cut short.",
      "options": [
        "True",
        "False"
      ],
      "answer": 0,
      "points": 1,
      "explanation": "Catch-up sleep only partially repays accumulated debt. A missed growth hormone pulse from a Tuesday night cannot be retroactively recovered by an extra-long Saturday night, even though the extra sleep genuinely reduces felt impairment."
    },
    {
      "id": "c2-c3-mc-1",
      "chapter": 3,
      "type": "mc",
      "q": "A learner worries they missed the anabolic window because their post-workout meal landed ninety minutes late, despite already hitting 1.8 g/kg/day of protein spread across four meals. Based on Aragon and Schoenfeld (2013) and Schoenfeld, Aragon, and Krieger (2013), what should this person actually take away?",
      "options": [
        "Almost nothing to worry about; once total daily protein intake is statistically controlled for, the independent effect of precise timing on hypertrophy is not significant, so a delayed meal inside an otherwise adequate diet is a minor issue",
        "Their gains from that session are entirely lost because the window closed at sixty minutes",
        "They should stop eating protein entirely, since timing has been shown to have no value in any context",
        "The delay guarantees a loss of existing muscle mass"
      ],
      "answer": 0,
      "points": 1,
      "explanation": "The pooled meta-analysis found an apparent timing benefit only until total daily protein intake was controlled for; once controlled, the independent effect of timing on hypertrophy was not significant. Total daily protein is the big rock; a ninety-minute delay inside an adequate diet is a rounding error."
    },
    {
      "id": "c2-c3-mc-2",
      "chapter": 3,
      "type": "mc",
      "q": "A runner's post-run cramping traces to real dehydration, but her diet shows no obvious protein or carbohydrate shortfall on paper. Placed in the chapter's hierarchy of nutrition budgets, why is energy availability described as the gate before everything else?",
      "options": [
        "Because it is the only budget that affects performance on race day",
        "Because carbohydrate and protein needs disappear entirely once energy availability is adequate",
        "Because hydration status becomes irrelevant once energy availability is controlled",
        "Because sustained low energy availability impairs a broad spectrum of functions, including protein synthesis itself, so it sits upstream of protein dose, carbohydrate timing, and every other lever in the chapter"
      ],
      "answer": 3,
      "points": 1,
      "explanation": "The International Olympic Committee consensus on relative energy deficiency in sport describes how sustained low energy availability impairs protein synthesis and much else. It is a recovery gate, sitting logically upstream of protein dose and light years upstream of nutrient timing."
    },
    {
      "id": "c2-c3-tf-1",
      "chapter": 3,
      "type": "mc",
      "q": "Because thirst cannot be trusted as a hydration guide, every athlete should follow a fixed daily fluid target, such as a specific number of liters regardless of body size, climate, or sweat rate, in order to avoid underhydrating.",
      "options": [
        "True",
        "False"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "The chapter states the opposite: thirst is a well-calibrated signal for most people in most situations, and a rigid, one-size-fits-all fluid target is more likely to produce overdrinking, including the rare but real risk of exercise-associated hyponatremia, than to prevent underdrinking. The evidence-consistent approach matches intake to individual sweat losses."
    },
    {
      "id": "c2-c4-mc-1",
      "chapter": 4,
      "type": "mc",
      "q": "A person attributes the deep ache in their legs two days after a new lunge variation to lactic acid that pooled overnight and needs to be flushed out with a foam roller. What does the chapter identify as the decisive problem with this explanation?",
      "options": [
        "Lactic acid cannot be measured in blood at all",
        "Foam rolling has been proven to eliminate lactic acid faster than any other method",
        "Lactic acid causes soreness only in beginners, never in trained individuals",
        "Blood lactate returns to baseline within about an hour of exercise, long before delayed onset muscle soreness (DOMS) even begins to build, and the exercise that produces the most lactate is not the exercise that produces the most soreness"
      ],
      "answer": 3,
      "points": 1,
      "explanation": "The lactic acid hypothesis fails on timing: lactate clears from blood within roughly an hour while DOMS builds over a day or two and peaks at 24 to 72 hours. Eccentric exercise, which produces comparatively little lactate, produces the most soreness of any modality studied."
    },
    {
      "id": "c2-c4-mc-2",
      "chapter": 4,
      "type": "mc",
      "q": "Damas and colleagues (2016) tracked muscle protein synthesis and muscle damage markers across ten weeks of training. Early in the block, when soreness and damage markers were highest, protein synthesis was strongly elevated but did not predict eventual hypertrophy. Only later, once damage markers had settled, did synthesis reliably track growth. What does this dissociation establish?",
      "options": [
        "Soreness and muscle damage always rise and fall together with hypertrophy, confirming soreness as a useful gauge",
        "Protein synthesis has no relationship to muscle damage at any point in training",
        "Hypertrophy can only occur in the total absence of any measurable muscle damage",
        "The early, high-soreness protein synthesis was largely directed at repairing disrupted structures rather than building new tissue, so the phase of maximum soreness is not the phase where most growth is being built"
      ],
      "answer": 3,
      "points": 1,
      "explanation": "The early, soreness-accompanied protein synthesis was mostly a repair crew undoing disruption, not a foreman laying new foundation. Synthesis became reliably linked to hypertrophy only once muscle damage markers attenuated, showing that soreness and growth are not paid in the same currency."
    },
    {
      "id": "c2-c4-tf-1",
      "chapter": 4,
      "type": "mc",
      "q": "Because the repeated bout effect means a single prior bout of eccentric exercise confers protection against damage and soreness from a similar subsequent bout, a well-matched, progressively loaded program that stops producing noticeable soreness over time is usually a sign of successful adaptation rather than evidence that training has stalled.",
      "options": [
        "True",
        "False"
      ],
      "answer": 0,
      "points": 1,
      "explanation": "Adaptation itself suppresses soreness through the repeated bout effect. Fading soreness under a consistent, well-matched program is exactly what should be expected as tissue adapts, not a signal to chase novelty for its own sake."
    },
    {
      "id": "c2-c5-mc-1",
      "chapter": 5,
      "type": "mc",
      "q": "A coach recommends the fastest possible easy recovery ride, reasoning that since blood lactate clears fastest near lactate threshold, riding harder during recovery must clear fatigue fastest too. What is the flaw in this reasoning, per the chapter?",
      "options": [
        "Lactate clearance and fatigue clearance were never the same thing, and an effort near threshold is itself a training stimulus that adds to accumulated load rather than protecting the recovery window",
        "Lactate clearance is completely unrelated to exercise intensity",
        "Fatigue can only be cleared by remaining completely motionless",
        "There is no such thing as lactate threshold in trained individuals"
      ],
      "answer": 0,
      "points": 1,
      "explanation": "Lactate does clear fastest near threshold, but that intensity is training, not recovery. Lactate clearance was never the mechanism carrying most of active recovery's real benefit, and chasing it converts a rest day into another moderate training day."
    },
    {
      "id": "c2-c5-mc-2",
      "chapter": 5,
      "type": "mc",
      "q": "An athlete's recovery ride regularly drifts to a pace where conversation requires real effort, and they usually finish more emptied than refreshed, yet the session is logged as easy every week. Using the chapter's intensity trap concept, what has actually happened?",
      "options": [
        "The athlete has found the ideal recovery intensity, since some added effort maximizes circulatory benefit",
        "Nothing has changed, because active recovery has no intensity ceiling",
        "The session has crossed from genuine recovery into an unplanned training stimulus, consuming recovery capacity rather than protecting it, even though it is labeled easy",
        "The athlete's fatigue is unrelated to the ride and must come from an unrelated illness"
      ],
      "answer": 2,
      "points": 1,
      "explanation": "Active recovery is only recovery if it stays genuinely easy. Past a low intensity ceiling it becomes another stimulus, a slow leak in the recovery budget rather than a protection of it, regardless of what the training log calls the session."
    },
    {
      "id": "c2-c5-tf-1",
      "chapter": 5,
      "type": "mc",
      "q": "Because active recovery is generally beneficial, the chapter recommends treating it as an appropriate substitute for genuine rest even during a stretch of accumulated sleep debt or the early window after an injury.",
      "options": [
        "True",
        "False"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "The chapter explicitly names accumulated sleep debt, genuine energy depletion, and the early post-injury window as situations where complete rest, or a clinician's evaluation, outperforms active recovery. Treating movement as an interchangeable substitute for rest in these situations is exactly the error the chapter warns against."
    },
    {
      "id": "c2-c6-mc-1",
      "chapter": 6,
      "type": "mc",
      "q": "A hypertrophy-focused lifter ices in a cold tub immediately after every strength session for months, reasoning that anything that reduces soreness must be helping recovery. According to Roberts and colleagues (2015) and Piñero and colleagues (2024), what is the actual tradeoff being made?",
      "options": [
        "Cold water immersion improves both perceived soreness and long-term hypertrophy equally, so there is no tradeoff",
        "Habitual post-strength-training cold water immersion reliably reduces perceived soreness but blunts satellite cell activation and mTOR signaling, producing less muscle growth than active recovery over a training block, while showing negligible interference for endurance adaptation",
        "Cold water immersion has no effect on soreness or on muscle growth",
        "Cold water immersion only affects endurance adaptation and never influences strength training outcomes"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "A twelve-week randomized trial found less muscle mass and strength gain with habitual cold water immersion than with active recovery, and a Bayesian meta-analysis found high-confidence interference with hypertrophy specifically, alongside negligible effects on endurance-type adaptations. The interference is training-mode specific."
    },
    {
      "id": "c2-c6-mc-2",
      "chapter": 6,
      "type": "mc",
      "q": "Comparing modalities under the chapter's honest-grading rubric, why does massage earn a strong grade while foam rolling gets relocated from the recovery tier to the warm-up tier?",
      "options": [
        "Massage produced the largest reductions in soreness and perceived fatigue among the modalities compared, with no evidence of interfering with adaptation, while foam rolling's measured effects on recovery of function were small and short-lived, with stronger evidence supporting its use before training rather than after",
        "Foam rolling has been proven to physically break up scar tissue, which massage cannot do",
        "Massage and foam rolling are equally effective for accelerating structural muscle repair",
        "Foam rolling interferes with adaptation the same way cold water immersion does"
      ],
      "answer": 0,
      "points": 1,
      "explanation": "A ninety-nine-study meta-analysis found massage the single most powerful technique for reducing soreness and fatigue, with no adaptive downside. A separate meta-analysis described foam rolling's recovery effects as rather minor and partly negligible, with stronger evidence for it as a pre-training warm-up tool."
    },
    {
      "id": "c2-c6-tf-1",
      "chapter": 6,
      "type": "mc",
      "q": "According to Ahokas and colleagues (2025), the clearest evidence for post-exercise heat and sauna use is not as an acute rescue for yesterday's session, but as a repeated stimulus that can build heat-acclimation adaptations, such as expanded plasma volume, that are useful for endurance performance in hot conditions.",
      "options": [
        "True",
        "False"
      ],
      "answer": 0,
      "points": 1,
      "explanation": "Acute recovery effects from a single heat exposure were found genuinely unclear, while regular, repeated heat exposure showed a more durable link to improved endurance performance through heat-acclimation mechanisms, reframing sauna use as a training stimulus rather than a rescue tool."
    },
    {
      "id": "c2-c7-mc-1",
      "chapter": 7,
      "type": "mc",
      "q": "A lifter believes that needing a deload is an admission that his recovery cannot keep up with his ambition, so he skips two scheduled lighter weeks in a row. Using the chapter's definition of a deload, what is wrong with this belief?",
      "options": [
        "A deload is only appropriate for beginners, never for competitive athletes",
        "A deload is an intentional, planned reduction in training stress that lets the fast-decaying fatigue term fall away so already-banked fitness can express itself as improved performance, making it a mechanism for converting hard training into progress, not a concession to weakness",
        "Deloading should only be used after a lifter has already developed overtraining syndrome",
        "Deloads work by increasing training volume temporarily to shock the body into adapting"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "A deload is intentional and proactive, designed to mitigate fatigue and enhance preparedness. Every athlete surveyed in one large cross-sectional study deloaded, because skipping the retreat does not make a lifter tougher, it defers a larger fatigue bill."
    },
    {
      "id": "c2-c7-mc-2",
      "chapter": 7,
      "type": "mc",
      "q": "Two lifters each experience a stalled lift after several weeks of hard training. One's performance rebounds and supercompensates after a reduced-load week; the other's stall persists for weeks despite the same reduction. Per Meeusen and colleagues (2012), how are functional and non-functional overreaching actually distinguished?",
      "options": [
        "By how heavy the training felt in the moment, since functional overreaching always feels easier",
        "By a single resting hormone value measured during the stall",
        "Retrospectively, by the response to a period of reduced load: functional overreaching resolves into supercompensation within days to a couple of weeks, while non-functional overreaching fails to resolve and can take weeks to reverse, often with mood and sleep disturbance",
        "By whether the lifter reports feeling motivated during the stall"
      ],
      "answer": 2,
      "points": 1,
      "explanation": "Functional and early non-functional overreaching can feel nearly identical while living through them. The distinction is defined by what happens after a period of reduced load, not by any single marker checked mid-stall, which is exactly why calendar-based deloading matters."
    },
    {
      "id": "c2-c7-mc-3",
      "chapter": 7,
      "type": "mc",
      "q": "When shaping a routine, pre-planned deload after a normal hard training block, what does the convergent evidence from the tapering meta-analysis, the survey of practice, and the expert consensus recommend cutting first, and what should be protected?",
      "options": [
        "Cut exercise selection and frequency drastically while keeping volume and intensity unchanged",
        "Cut sets and reps (volume) by roughly 40 to 60 percent for a routine reset while keeping intensity reasonably high on fewer hard sets and largely preserving training frequency and exercise selection",
        "Cut intensity to near zero while doubling the number of sets performed",
        "Cut nothing at all; a deload should look identical to a normal training week"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "Volume is the primary lever. A 41 to 60 percent volume reduction captured the largest tapering gains in the meta-analytic data, and surveyed athletes overwhelmingly cut sets and reps while keeping frequency and exercise selection intact."
    },
    {
      "id": "c2-c8-mc-1",
      "chapter": 8,
      "type": "mc",
      "q": "A trainee assumes that stress from a demanding work deadline and stress from a heavy squat session are handled by separate systems in the body, so only the squat session should count against recovery capacity. What does McEwen's allostatic load model say is wrong with this assumption?",
      "options": [
        "The hypothalamic-pituitary-adrenal (HPA) axis, sympathetic nervous system, and immune and cardiovascular systems are recruited regardless of whether a stressor is physical, psychological, or environmental, so training stress and life stress draw on the same finite regulatory capacity rather than separate ledgers",
        "Work stress has no measurable physiological effect on the body at all",
        "Training stress is processed by an entirely separate nervous system from psychological stress",
        "Only physical stressors can produce cortisol release"
      ],
      "answer": 0,
      "points": 1,
      "explanation": "The same regulatory machinery responds regardless of a stressor's source. Cortisol released from a hard set and cortisol released from work stress are chemically identical and land on the same downstream tissues, because building separate ledgers for each source of demand was never worth the cost."
    },
    {
      "id": "c2-c8-mc-2",
      "chapter": 8,
      "type": "mc",
      "q": "Hamlin and colleagues (2019) tracked student-athletes and found that academic stress, low mood, and short sleep each independently predicted injury risk, even after statistically controlling for how much the athletes trained. What is the practical implication for programming?",
      "options": [
        "Life stress should be ignored by a training plan, since only training volume matters",
        "Injury risk during stressful periods is purely a matter of athletes rushing their warm-ups, not a physiological load issue",
        "Life stress is a legitimate programming variable in its own right; a demanding non-training stretch, such as exams, a rotating shift schedule, or a caregiving load, justifies reducing training load in the same way a hard training block would justify a deload",
        "Academic stress only affects performance and never affects injury risk"
      ],
      "answer": 2,
      "points": 1,
      "explanation": "The academic-stress effect on injury held up even after training volume was controlled for, ruling out sloppier technique as the explanation. Total load, training plus life, determines capacity, so non-training stress is a legitimate reason to reduce training load."
    },
    {
      "id": "c2-c8-mc-3",
      "chapter": 8,
      "type": "mc",
      "q": "A nurse switches from a fixed day schedule to a rotating shift roster and, despite running the identical training program that worked before, stalls, feels persistently run down, and catches a cold that lingers for three weeks. Using the concept of recovery debt, why is this outcome self-reinforcing rather than a simple, fixed cost?",
      "options": [
        "Recovery debt is capped at a fixed amount and cannot compound further once it appears",
        "Sustained recovery debt lowers the very capacity that would repay it; for example, disrupted sleep timing raises evening cortisol, which further degrades sleep architecture, which further undercuts appetite and recovery, so the deficit deepens the hole it already dug rather than staying constant",
        "Recovery debt only affects sleep and has no bearing on immune function or training performance",
        "Rotating shift schedules have no effect on cortisol rhythm according to the chapter"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "Abrupt shifts in sleep timing disrupt the daily cortisol rhythm. The debt compounds because under-recovery degrades the very systems that would otherwise repay it, which is exactly the mechanism behind the case's stalled lifts and prolonged cold."
    },
    {
      "id": "c2-c9-mc-1",
      "chapter": 9,
      "type": "mc",
      "q": "A person wakes up feeling sore and assumes today's session should be skipped, without checking anything else. Based on the chapter's convergence principle, what is the strongest argument against relying on a single signal like soreness to make that call?",
      "options": [
        "Soreness is always a reliable signal and should be trusted above every other measurement",
        "Every individual signal, including soreness, sleep, resting heart rate, and mood, has a poor signal-to-noise ratio on its own; meaning emerges when several independent signals agree, since weak signals that disagree tend to cancel out ordinary noise while weak signals that agree multiply their significance",
        "Only objective, device-measured signals are ever informative, so subjective ratings should be ignored entirely",
        "A single soreness rating is more informative than any combination of other signals"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "Soreness is described as the signal that lies most confidently. The chapter's core statistical argument is convergence across a small chorus of weak signals rather than trust in any single one, because agreeing weak signals multiply their meaning while disagreeing ones cancel out noise."
    },
    {
      "id": "c2-c9-mc-2",
      "chapter": 9,
      "type": "mc",
      "q": "A wearable device flashes a sharply lower overnight heart rate variability (HRV) reading and recommends a full rest day. Resting heart rate, sleep quality, and mood all sit at the person's normal baseline that same morning. What does the chapter say is the appropriate response?",
      "options": [
        "Cancel the day's plan immediately, since HRV is the single most trustworthy signal available",
        "Ignore HRV completely going forward, since it is a useless measurement",
        "Treat the isolated HRV dip with real skepticism, since a single night's HRV reading is highly noisy, affected by hydration, alcohol, and sleep position among other things, and only becomes informative as a rolling average, then weigh it against the other signals that disagree with it that same morning",
        "Average all six signals into one blended number and act only on that composite score"
      ],
      "answer": 2,
      "points": 1,
      "explanation": "Heart rate variability is described as the noisiest signal on the list, meaningful mainly as a rolling average against personal baseline. When several other signals disagree with an isolated HRV dip, the dip is more likely noise than a genuine readiness drop."
    }
  ]
};
