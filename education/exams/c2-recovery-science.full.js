/* Gemini Education: C2 (Recovery Science) FULL exam bank (all question types).
   PARKED until the portal thread upgrades exam.html to render matching / multi-select /
   word-bank / write-in. The live exam (c2-recovery-science.js) is an interim MC+TF subset
   on the current engine. Swap this in when the new-type renderers + appeal grader ship.
   Schema: education/EXAM-SPEC.md. */
window.GEM_EXAM = {
  slug: "c2-recovery-science",
  title: "Recovery Science",
  contact_hours: 9, ceu_value: 0.9, pass_threshold: 80, placeholder: false,
  draw: { mc: 14, multi: 3, tf: 4, match: 2, fill: 3, free: 0 },
  shuffle: { questions: true, options: true },
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
      "explanation": "The workout is the stimulus, a deliberate, dosed disruption to homeostasis whose immediate effect is negative. Adaptation is banked during the recovery period afterward, when repair and remodeling processes overshoot the prior baseline."
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
      "explanation": "Preparedness equals fitness minus fatigue. Immediately after a hard session, fitness has genuinely risen, but a large, fast-decaying fatigue aftereffect masks it."
    },
    {
      "id": "c2-c1-tf-1",
      "chapter": 1,
      "type": "tf",
      "q": "Supercompensation and Selye's General Adaptation Syndrome are useful working scaffolds for reasoning about the timing between a stimulus and the recovery that follows it, but they are simplified teaching models rather than literal, precise mechanisms the body follows.",
      "answer": true,
      "points": 1,
      "explanation": "Real physiology does not produce one clean performance curve; different tissues and systems recover on different clocks. Both models are instructive scaffolds, not literal ledgers."
    },
    {
      "id": "c2-c1-match-1",
      "chapter": 1,
      "type": "match",
      "q": "Match each stage or concept from the stimulus, recovery, adaptation loop to its correct description.",
      "pairs": [
        {
          "left": "Stimulus",
          "right": "A training bout that disturbs homeostasis; its immediate effect is a drop in capacity"
        },
        {
          "left": "Recovery",
          "right": "The active biological work of repair and remodeling that, given adequate time and resources, overshoots the prior baseline"
        },
        {
          "left": "Adaptation",
          "right": "The overshoot banked as a durable upward shift in capacity, if recovery completes before the next stimulus lands"
        },
        {
          "left": "Fitness (fitness-fatigue model)",
          "right": "The slow-building, long-lasting positive aftereffect of training"
        },
        {
          "left": "Fatigue (fitness-fatigue model)",
          "right": "The large but fast-decaying negative aftereffect that masks preparedness immediately after a hard session"
        }
      ],
      "points": 5
    },
    {
      "id": "c2-c1-free-1",
      "chapter": 1,
      "type": "free",
      "q": "Priya added a seventh weekly training day when her half-marathon pace stalled, reasoning that if one hard session produces adaptation, more sessions closer together must produce more. Within nine weeks her resting heart rate crept up, her legs felt heavy from the first mile, and her pace had not just plateaued, it had reversed. Using the stimulus, recovery, adaptation loop and the fitness-fatigue model, explain in an educational, role-neutral way why adding a seventh day likely made things worse rather than better, and then state clearly where your explanation must stop and hand off to a clinician.",
      "model": "Priya's reasoning assumed that adaptation lives in the sessions themselves, so more sessions should mean more adaptation. The loop says the opposite: the workout is the stimulus, and adaptation is banked during the recovery period between sessions, not during the session. Adding a seventh day did not give her body more opportunity to build. It gave the other six sessions less time to complete the rebuilding they had already set in motion, stacking a new stimulus on top of incomplete recovery. Her rising resting heart rate and persistent heaviness are exactly the fitness-fatigue signature of fatigue accumulating faster than it can clear: a large, still-growing negative aftereffect stacked on top of whatever fitness gains her training was producing, so her true preparedness, fitness minus fatigue, kept sliding even if her underlying fitness had not stopped improving. Her pattern matches the early stage of non-functional overreaching more closely than simple bad luck or insufficient effort, since a normal functional overreach should rebound once load is reduced, not continue sliding for weeks under an added session. What this reasoning cannot do is tell us whether her rising heart rate and persistent heaviness reflect ordinary non-functional overreaching that would resolve with a planned reduction in training, or something else worth a professional look, such as anemia, an infection, or a cardiovascular question a heart rate trend alone cannot answer. That distinction is outside what a training framework can responsibly diagnose. The honest, role-neutral move is to explain the mechanism clearly, recommend backing the training off and protecting recovery, and refer any persistent or worsening physical signs to a qualified clinician rather than interpreting them further from a training model.",
      "key_points": [
        "Adaptation happens during recovery between sessions, not during the session itself, so adding a session removes recovery time rather than adding stimulus value",
        "Fitness-fatigue model: rising resting heart rate and persistent heaviness reflect fatigue accumulating faster than it clears, masking true preparedness",
        "The pattern resembles non-functional overreaching (a stall that does not resolve with a short rest) rather than functional overreaching",
        "Role-neutral boundary: a training model cannot diagnose whether the physical signs are ordinary overreaching or a medical issue, and persistent or worsening signs warrant referral to a qualified clinician"
      ],
      "rubric": {
        "pass_threshold": 70,
        "points": [
          {
            "desc": "Correctly explains that adaptation happens during recovery, not during the session, so a seventh day removes recovery time rather than adding a valid stimulus",
            "weight": 30
          },
          {
            "desc": "Applies the fitness-fatigue model to explain the rising resting heart rate and heaviness as fatigue masking preparedness",
            "weight": 25
          },
          {
            "desc": "Identifies the pattern as consistent with non-functional overreaching rather than a healthy functional overreach",
            "weight": 20
          },
          {
            "desc": "Keeps an educational, role-neutral framing and clearly defers any verdict on the physical signs to a qualified clinician",
            "weight": 25
          }
        ]
      },
      "points": 5,
      "appeal": true
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
      "explanation": "Slow-wave sleep dominates the first cycles of the night, when growth hormone pulses hardest. REM sleep lengthens with each later cycle, so the two ends of the night cost the body different things."
    },
    {
      "id": "c2-c2-tf-1",
      "chapter": 2,
      "type": "tf",
      "q": "Sleeping in for two long nights on the weekend blunts the felt impairment of a short work week, but it does not fully restore baseline function or retroactively recover the specific anabolic windows that were missed on the nights sleep was cut short.",
      "answer": true,
      "points": 1,
      "explanation": "Catch-up sleep only partially repays accumulated debt. A missed growth hormone pulse cannot be retroactively recovered by an extra-long weekend night."
    },
    {
      "id": "c2-c2-fill-1",
      "chapter": 2,
      "type": "fill",
      "q": "Growth hormone is released in its largest pulses during {{1}} sleep, and this pulsatility drives downstream insulin-like growth factor 1 (IGF-1) signaling central to tissue repair. Beyond duration, Windred and colleagues (2023) found sleep {{2}}, the day-to-day consistency of sleep and wake timing, to be a stronger independent predictor of all-cause mortality than total hours slept.",
      "bank": [
        "slow-wave",
        "regularity",
        "rapid eye movement (REM)",
        "duration"
      ],
      "answers": {
        "1": "slow-wave",
        "2": "regularity"
      },
      "points": 2
    },
    {
      "id": "c2-c2-multi-1",
      "chapter": 2,
      "type": "multi",
      "q": "Which of the following are described in the chapter as genuine, evidence-supported findings about sleep and recovery? Select all that apply.",
      "options": [
        "Chronic mild sleep restriction to four to six hours a night accumulates rather than plateaus, compounding within two weeks to deficits resembling total sleep deprivation",
        "People chronically restricted to six hours a night can accurately judge their own performance decline by how sleepy they feel",
        "Regular, consistent sleep and wake timing is a lever in its own right, independent of total sleep duration",
        "Sleep loss is linked to autonomic imbalance that can resemble the symptoms of overtraining syndrome",
        "Two long weekend nights are a full, one-to-one repayment of a week's accumulated sleep debt"
      ],
      "answers": [
        0,
        2,
        3
      ],
      "scoring": "all_or_nothing",
      "points": 1,
      "explanation": "Chronic restriction compounds and is under-perceived by subjective sleepiness ratings, so option 1 is false. Consistency is an independent lever, and sleep loss is linked to autonomic imbalance resembling overtraining. Catch-up sleep is only a partial, not a full, repayment, so the last option is false."
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
      "explanation": "The apparent timing benefit disappeared once total daily protein intake was statistically controlled for. Total daily protein is the big rock; a ninety-minute delay inside an adequate diet is a rounding error."
    },
    {
      "id": "c2-c3-tf-1",
      "chapter": 3,
      "type": "tf",
      "q": "Because thirst cannot be trusted as a hydration guide, every athlete should follow a fixed daily fluid target, such as a specific number of liters regardless of body size, climate, or sweat rate, in order to avoid underhydrating.",
      "answer": false,
      "points": 1,
      "explanation": "Thirst is a well-calibrated signal for most people in most situations, and a rigid, one-size-fits-all fluid target is more likely to cause overdrinking, including the rare risk of exercise-associated hyponatremia, than to prevent underdrinking."
    },
    {
      "id": "c2-c3-match-1",
      "chapter": 3,
      "type": "match",
      "q": "Match each nutrition budget from the chapter to the question it answers.",
      "pairs": [
        {
          "left": "Protein",
          "right": "What is the building made of?"
        },
        {
          "left": "Carbohydrate",
          "right": "Is the tank full for the next session?"
        },
        {
          "left": "Hydration",
          "right": "Is the worksite running at the temperature and pressure it needs to get anything done?"
        },
        {
          "left": "Energy availability",
          "right": "Is the whole enterprise solvent, or is the body being forced to cut corners?"
        }
      ],
      "points": 4
    },
    {
      "id": "c2-c3-multi-1",
      "chapter": 3,
      "type": "multi",
      "q": "Which of the following are accurately described in the chapter's nutrition-for-recovery framework? Select all that apply.",
      "options": [
        "Carbohydrate provision clearly accelerates glycogen resynthesis, while adding protein to a calorie-matched carbohydrate dose contributes little to the resynthesis rate specifically",
        "Nutrient timing genuinely matters most when two hard sessions fall within about eight hours of each other",
        "Isolated protein powders are required to properly stimulate post-exercise muscle protein synthesis; whole foods are inadequate",
        "Sustained low energy availability can impair protein synthesis, bone health, immune function, and more, sitting upstream of protein or carbohydrate dosing",
        "A single missed post-workout snack reliably produces a measurable, individually detectable loss in training outcome"
      ],
      "answers": [
        0,
        1,
        3
      ],
      "scoring": "all_or_nothing",
      "points": 1,
      "explanation": "Whole foods support post-exercise remodeling at least as well as isolated protein, so that option is false. A single missed snack changes nothing measurable on its own; it is the chronic pattern that compounds, so that option is also false."
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
      "explanation": "The lactic acid hypothesis fails on timing: lactate clears within roughly an hour, DOMS peaks at 24 to 72 hours, and eccentric exercise, which produces comparatively little lactate, produces the most soreness."
    },
    {
      "id": "c2-c4-tf-1",
      "chapter": 4,
      "type": "tf",
      "q": "Because the repeated bout effect means a single prior bout of eccentric exercise confers protection against damage and soreness from a similar subsequent bout, a well-matched, progressively loaded program that stops producing noticeable soreness over time is usually a sign of successful adaptation rather than evidence that training has stalled.",
      "answer": true,
      "points": 1,
      "explanation": "Adaptation itself suppresses soreness through the repeated bout effect. Fading soreness under a consistent, well-matched program is expected, not a signal to chase novelty."
    },
    {
      "id": "c2-c4-fill-1",
      "chapter": 4,
      "type": "fill",
      "q": "Delayed onset muscle soreness (DOMS) is triggered chiefly by {{1}} loading (muscle lengthening under tension) combined with unaccustomed loading. Damas and colleagues (2016) found that early, high-soreness protein synthesis mostly reflects tissue {{2}} rather than new growth, with hypertrophy-linked synthesis emerging only after muscle damage markers had attenuated.",
      "bank": [
        "eccentric",
        "repair",
        "concentric",
        "storage"
      ],
      "answers": {
        "1": "eccentric",
        "2": "repair"
      },
      "points": 2
    },
    {
      "id": "c2-c4-free-1",
      "chapter": 4,
      "type": "free",
      "q": "Priya built a private rule that a soreness score of six or seven the morning after a session meant the workout had worked, and a pain-free morning meant she had coasted. Over six months, her numbers on the bar barely moved even though her soreness log looked, by her own scoring, like a runaway success. Using Damas et al. (2016) and the repeated bout effect, explain in an educational, role-neutral way why her soreness-chasing rule was actively working against her progress, and describe what a more accurate use of her soreness log would look like.",
      "model": "Priya's rule assumed soreness and adaptation move together, but the chapter's evidence shows they can point in opposite directions within the same training block. On weeks she manufactured extra soreness, by adding slow negatives, switching exercises, or chasing novelty, she was largely triggering first-bout effects. Per Damas and colleagues (2016), a large share of the protein synthesis behind that soreness is repair work, patching disruption from an unfamiliar stimulus, not new tissue growth. Meanwhile, on weeks her soreness faded because her body had adapted to a now-familiar movement, the repeated bout effect was suppressing exactly the signal she was using to judge whether the week counted, even though genuine training benefit from a well-matched, progressively loaded program was very likely still accruing. In effect, she built a feedback loop that rewarded the novelty undermining her consistency and punished the consistency that would have produced her results. A more accurate use of the log would treat a soreness score as one weak, easily manufactured input, useful mainly for flagging when a session was more novel or eccentrically demanding than intended, and would judge her program instead by whether the loads and volumes on the bar were progressing sensibly over months. This chapter can describe the general mechanism, but it cannot evaluate Priya's own aches or rule out an unrelated cause for any specific sensation she experiences; any pain that breaks the ordinary, diffuse, symmetric pattern of training soreness would call for a qualified professional's evaluation rather than a soreness-log interpretation.",
      "key_points": [
        "Soreness and adaptation are not the same currency; early high-soreness protein synthesis is largely repair, not new growth (Damas et al., 2016)",
        "The repeated bout effect suppresses soreness as adaptation accrues, so fading soreness under a well-matched program is a sign of success, not stagnation",
        "Priya's rule created a feedback loop rewarding novelty (manufactured soreness) over the consistency that actually builds results",
        "A better use of the log treats soreness as a weak, narrow signal (novelty/eccentric flag), with real progress judged by load and volume trends over months",
        "Role-neutral boundary: the mechanism can be explained generally, but any sensation breaking the ordinary DOMS pattern needs professional evaluation, not log interpretation"
      ],
      "rubric": {
        "pass_threshold": 70,
        "points": [
          {
            "desc": "Explains, using Damas et al. (2016), why high soreness early in a block reflects repair rather than growth",
            "weight": 25
          },
          {
            "desc": "Explains the repeated bout effect and why fading soreness under a consistent program signals success, not stagnation",
            "weight": 25
          },
          {
            "desc": "Identifies the feedback loop where Priya's rule rewarded novelty over productive consistency",
            "weight": 25
          },
          {
            "desc": "Proposes an accurate, narrow use for the soreness log and keeps a role-neutral boundary around diagnosing any specific pain",
            "weight": 25
          }
        ]
      },
      "points": 5,
      "appeal": true
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
      "explanation": "Lactate does clear fastest near threshold, but that intensity is training, not recovery. Chasing fast lactate clearance converts a rest day into another moderate training day."
    },
    {
      "id": "c2-c5-tf-1",
      "chapter": 5,
      "type": "tf",
      "q": "Because active recovery is generally beneficial, the chapter recommends treating it as an appropriate substitute for genuine rest even during a stretch of accumulated sleep debt or the early window after an injury.",
      "answer": false,
      "points": 1,
      "explanation": "The chapter names accumulated sleep debt, genuine energy depletion, and the early post-injury window as situations where complete rest, or a clinician's evaluation, outperforms active recovery."
    },
    {
      "id": "c2-c5-fill-1",
      "chapter": 5,
      "type": "fill",
      "q": "Active recovery reliably improves how a person {{1}}, supporting soreness perception, habit, and adherence, but its effect on deep tissue adaptation is modest. Pushed past a low intensity ceiling, a recovery session stops protecting the recovery {{2}} and starts consuming it, becoming another stimulus.",
      "bank": [
        "feels",
        "budget",
        "performs",
        "diet"
      ],
      "answers": {
        "1": "feels",
        "2": "budget"
      },
      "points": 2
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
      "explanation": "A twelve-week randomized trial found less muscle mass and strength gain with habitual cold water immersion than active recovery, and a Bayesian meta-analysis found high-confidence interference with hypertrophy specifically but negligible effects on endurance adaptations."
    },
    {
      "id": "c2-c6-tf-1",
      "chapter": 6,
      "type": "tf",
      "q": "According to Ahokas and colleagues (2025), the clearest evidence for post-exercise heat and sauna use is not as an acute rescue for yesterday's session, but as a repeated stimulus that can build heat-acclimation adaptations, such as expanded plasma volume, that are useful for endurance performance in hot conditions.",
      "answer": true,
      "points": 1,
      "explanation": "Acute recovery effects from a single heat exposure were found unclear, while regular, repeated heat exposure showed a more durable link to endurance performance through heat-acclimation mechanisms."
    },
    {
      "id": "c2-c6-match-1",
      "chapter": 6,
      "type": "match",
      "q": "Match each recovery modality to the honest grade the chapter assigns it.",
      "pairs": [
        {
          "left": "Cold water immersion, used habitually after strength training",
          "right": "Reliably lowers perceived soreness, but strong evidence of blunting hypertrophy specifically"
        },
        {
          "left": "Massage",
          "right": "Best-in-class for perceived recovery and soreness reduction, with no evidence of interfering with adaptation"
        },
        {
          "left": "Compression garments",
          "right": "Large but equivocal evidence base, a small positive effect on perceived soreness, no detected adaptive downside"
        },
        {
          "left": "Foam rolling",
          "right": "Minor and partly negligible for recovery specifically, more legitimate as a pre-training warm-up tool"
        },
        {
          "left": "Heat / sauna",
          "right": "Unclear as acute recovery, but a promising repeated stimulus for endurance-oriented heat acclimation"
        }
      ],
      "points": 5
    },
    {
      "id": "c2-c6-multi-1",
      "chapter": 6,
      "type": "multi",
      "q": "Which statements about grading recovery modalities honestly are accurate per the chapter? Select all that apply.",
      "options": [
        "The interference from cold water immersion is mode-specific, outcome-specific, and dose-dependent rather than a blanket warning against all cold water everywhere",
        "A modality that feels wonderful can still, in at least one well-documented case, quietly subtract from the training adaptation underneath it",
        "No recovery modality in the chapter ranks below the foundational levers of sleep and nutrition",
        "Cold water immersion's cost genuinely depends on the training block's goal and how close the next real competitive test is",
        "Every modality graded in the chapter earned a single, uniform letter grade regardless of context"
      ],
      "answers": [
        0,
        1,
        3
      ],
      "scoring": "all_or_nothing",
      "points": 1,
      "explanation": "Every modality in the chapter ranks below sleep and nutrition, so that option is false, and context, not a single uniform grade, determines the honest verdict for cold water immersion in particular."
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
      "explanation": "A deload is intentional and proactive, designed to mitigate fatigue and enhance preparedness, not a concession to weakness."
    },
    {
      "id": "c2-c7-tf-1",
      "chapter": 7,
      "type": "tf",
      "q": "Functional overreaching and early non-functional overreaching can feel nearly identical while a lifter is living through them, so the two states are distinguished retrospectively by how performance responds to a period of reduced load rather than by any single marker checked mid-stall.",
      "answer": true,
      "points": 1,
      "explanation": "Meeusen and colleagues (2012) are explicit that this distinction is defined by the response to relief, which is exactly why calendar-based deloading matters."
    },
    {
      "id": "c2-c7-match-1",
      "chapter": 7,
      "type": "match",
      "q": "Match each term on the overtraining continuum to its description.",
      "pairs": [
        {
          "left": "Functional overreaching (FOR)",
          "right": "A deliberate, short-term overload that, after reduced load, resolves into supercompensation"
        },
        {
          "left": "Non-functional overreaching (NFOR)",
          "right": "Performance stalls or declines and does not resolve with a short rest, often with mood and sleep disturbance"
        },
        {
          "left": "Overtraining syndrome (OTS)",
          "right": "Months, not weeks, of impaired performance and systemic dysfunction, a clinical matter rather than a training decision"
        },
        {
          "left": "Taper",
          "right": "A longer, deeper, one-time reduction in load aimed at a single competitive peak"
        }
      ],
      "points": 4
    },
    {
      "id": "c2-c7-fill-1",
      "chapter": 7,
      "type": "fill",
      "q": "The strong convergent finding across the tapering meta-analysis, the survey of practice, and the expert consensus is that {{1}} is the primary lever to reduce during a routine deload, while {{2}} is kept reasonably high on a much-reduced number of hard sets to preserve neuromuscular and skill qualities.",
      "bank": [
        "volume",
        "intensity",
        "frequency",
        "duration"
      ],
      "answers": {
        "1": "volume",
        "2": "intensity"
      },
      "points": 2
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
      "explanation": "The same regulatory machinery responds regardless of a stressor's source, because building separate ledgers for each source of demand was never worth the cost."
    },
    {
      "id": "c2-c8-tf-1",
      "chapter": 8,
      "type": "tf",
      "q": "In Hamlin and colleagues' (2019) study of student-athletes, academic stress, low mood, and short sleep each independently predicted injury risk, meaning the effect held up even after statistically accounting for how much the athletes trained.",
      "answer": true,
      "points": 1,
      "explanation": "The academic-stress effect on injury held up after controlling for training volume, ruling out sloppier technique under time pressure as the explanation."
    },
    {
      "id": "c2-c8-multi-1",
      "chapter": 8,
      "type": "multi",
      "q": "Which of the following are accurately described in the chapter's total-load and allostatic load framework? Select all that apply.",
      "options": [
        "Total load equals training stress plus life stress, and adaptive capacity is finite across both",
        "A rotating shift schedule, a caregiving load, or a punishing stretch at work can justify reducing training load in the same way a hard training block would justify a deload",
        "Recovery debt is self-reinforcing because sustained deficit lowers the very capacity that would repay it",
        "Overtraining syndrome is triggered exclusively by excessive training load, with non-training stressors playing no documented role",
        "Basal, single-draw hormone levels are described as strong, reliable predictors of who is sliding toward overreaching"
      ],
      "answers": [
        0,
        1,
        2
      ],
      "scoring": "all_or_nothing",
      "points": 1,
      "explanation": "The overtraining consensus names non-training stressors as part of the trigger for overreaching, so that option is false, and basal hormone levels are described as poor predictors, with dynamic stimulation tests being more informative."
    },
    {
      "id": "c2-c8-free-1",
      "chapter": 8,
      "type": "free",
      "q": "Renata kept running the exact strength program that had worked for years after her hospital moved her onto a rotating shift roster and her mother needed regular caregiving support. Over one full training block she gained no strength, felt persistently run down, and caught a cold that lingered for three weeks, despite nothing changing about her actual training. Using the allostatic load model and the concept of recovery debt, explain in an educational, role-neutral way why her training stalled, and describe what a corrected approach would look like.",
      "model": "Renata's training stimulus did not change, but her total load did, dramatically. Per McEwen's allostatic load model, the body's regulatory systems, the hypothalamic-pituitary-adrenal (HPA) axis, the sympathetic nervous system, and immune and cardiovascular systems, respond to demand regardless of its source, so a rotating shift schedule and a caregiving load are entries in the same ledger her training draws on. A rotating roster is precisely the kind of abrupt disruption to sleep timing that destabilizes the cortisol rhythm, and a destabilized rhythm raises the baseline cost of everything else her body has to do, training included. Layered with a caregiving load that turned her days off into an extension of her work week, Renata was carrying a real, sustained increase in total load even though nothing on her training log had changed. Recovery debt explains why the effects compounded rather than staying fixed: under-recovered sleep degrades the following day's recovery quality, elevated evening cortisol impairs the very sleep architecture that would otherwise correct it, and a fatigued, under-recovered body has less capacity to fight off an ordinary cold, which is consistent with her illness lasting three times longer than usual. Treating her stall as a training problem, adding intensity or pushing through, would have been exactly the wrong move, since the deficit was coming almost entirely from outside the gym. The corrected approach is to treat her rotating schedule and caregiving load as legitimate programming inputs: reduce training volume and frequency during weeks anchored around night shifts or her mother's appointments, and hold a more ambitious progression during calmer weeks, sizing the training to the capacity actually available that week rather than to a fixed template. This reasoning explains why her training stalled and what a sensible programming adjustment looks like, but it is not equipped to evaluate her fatigue or her recurring cold as medical questions; persistent unexplained fatigue or recurrent illness that does not resolve with reduced load and protected sleep is a signal that belongs with a qualified clinician, not something to keep adjusting from a training model alone.",
      "key_points": [
        "Allostatic load: the same regulatory systems respond to training stress and life stress alike, so a rotating schedule and caregiving load are real entries in the same capacity ledger as training",
        "A rotating shift schedule disrupts the cortisol rhythm, raising the baseline cost of recovery and explaining the prolonged illness",
        "Recovery debt is self-reinforcing (poor sleep degrades the next day's recovery, which further degrades sleep), explaining why the deficit compounded rather than staying fixed",
        "The corrected approach reduces training load during high-life-stress weeks and holds ambition during calmer weeks, matching training to actual weekly capacity",
        "Role-neutral boundary: persistent fatigue or recurrent illness that does not resolve with load reduction and protected sleep warrants a qualified clinician, not further self-adjustment"
      ],
      "rubric": {
        "pass_threshold": 70,
        "points": [
          {
            "desc": "Applies the allostatic load model to explain why non-training stress counts against the same recovery capacity as training",
            "weight": 25
          },
          {
            "desc": "Explains recovery debt as self-reinforcing and connects it to the disrupted cortisol rhythm and prolonged illness",
            "weight": 25
          },
          {
            "desc": "Describes a concrete, sensible programming correction (reduce load in high-stress weeks, hold ambition in calmer weeks)",
            "weight": 25
          },
          {
            "desc": "Keeps a role-neutral boundary, deferring persistent fatigue or recurrent illness to a qualified clinician",
            "weight": 25
          }
        ]
      },
      "points": 5,
      "appeal": true
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
      "explanation": "Soreness is described as the signal that lies most confidently. The chapter's core statistical argument is convergence across several weak signals rather than trust in any single one."
    },
    {
      "id": "c2-c9-tf-1",
      "chapter": 9,
      "type": "tf",
      "q": "Saw, Main, and Gastin (2016) found that subjective self-reported measures of athlete well-being tracked training load with superior sensitivity and consistency compared to commonly used objective measures.",
      "answer": true,
      "points": 1,
      "explanation": "Their systematic review's headline finding, stated in the title itself, is that subjective self-reported measures trump commonly used objective measures for tracking the training response."
    },
    {
      "id": "c2-c9-fill-1",
      "chapter": 9,
      "type": "fill",
      "q": "Heart rate variability (HRV) is the noisiest signal on the monitoring dashboard, meaningful mainly as a {{1}} average rather than a single morning's number. Meaning in a readiness dashboard lives in convergent, sustained deviation from a personal {{2}}, not in any single day's reading.",
      "bank": [
        "rolling",
        "baseline",
        "instant",
        "population"
      ],
      "answers": {
        "1": "rolling",
        "2": "baseline"
      },
      "points": 2
    },
    {
      "id": "c2-c9-multi-1",
      "chapter": 9,
      "type": "multi",
      "q": "Which of the following are accurate readiness-monitoring principles from the chapter? Select all that apply.",
      "options": [
        "Every signal should be interpreted relative to a personal rolling baseline rather than compared to someone else's raw number",
        "A branded wearable readiness score with an undisclosed formula and thin published validation deserves to be treated as one weak, opaque signal among several, not as the verdict",
        "Sharp, localized pain should be folded into the same push, hold, or back off decision as ordinary training fatigue",
        "Body weight swings of one to two kilograms day to day are almost entirely water and are better read as a weekly trend than a daily number",
        "Session rating of perceived exertion (RPE) is considered an invalid and unreliable measure of internal training load"
      ],
      "answers": [
        0,
        1,
        3
      ],
      "scoring": "all_or_nothing",
      "points": 1,
      "explanation": "Sharp, localized pain is a flag that warrants professional evaluation, never folded into an ordinary push, hold, or back off decision, so that option is false. Session RPE is validated across many studies as a reliable measure of internal training load, so the last option is also false."
    }
  ]
};
