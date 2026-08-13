/* Gemini Education: C1 (Musculoskeletal Anatomy & Lifting Biomechanics) FULL exam bank (all question types).
   PARKED until the portal thread upgrades exam.html to render matching / multi-select /
   word-bank / write-in. The live exam (c1-anatomy-biomechanics.js) is an interim MC+TF subset
   on the current engine. Swap this in when the new-type renderers + appeal grader ship.
   Schema: education/EXAM-SPEC.md. */
window.GEM_EXAM = {
  slug: "c1-anatomy-biomechanics",
  title: "Musculoskeletal Anatomy & Lifting Biomechanics",
  contact_hours: 10, ceu_value: 1.0, pass_threshold: 80, placeholder: false,
  draw: { mc: 14, multi: 3, tf: 4, match: 2, fill: 2, free: 0 },
  shuffle: { questions: true, options: true },
  questions: [
    {
      "id": "c1-c1-mc-1",
      "chapter": 1,
      "type": "mc",
      "q": "A trainee notices that a calf raise carrying full body weight feels easier than a biceps curl carrying a light dumbbell, and concludes their arms must simply be weaker than their calves. Using the lever framework from the chapter, what is the more accurate explanation?",
      "options": [
        "The calf raise is a second-class lever (resistance between fulcrum and effort), which always favors force, while the biceps curl is a third-class lever (effort between fulcrum and resistance), which always costs force to buy range of motion (ROM); the trainee's arms are not weaker",
        "The calf muscles simply contain more total muscle mass than the biceps, so the comparison has nothing to do with lever mechanics",
        "Both movements are third-class levers, so the difference must be due to a real strength imbalance between the arms and the calves",
        "The dumbbell curl uses a first-class lever, which always produces the greatest possible mechanical disadvantage of the three lever classes"
      ],
      "answer": 0,
      "points": 1,
      "explanation": "In the calf raise, the ball of the foot is the fulcrum, body weight (the resistance) sits between the fulcrum and the heel, and the calf's pull through the Achilles tendon (the effort) acts farthest out, a second-class arrangement that always multiplies force. In the biceps curl, the elbow is the fulcrum, the biceps inserts close to it (effort in the middle), and the dumbbell (resistance) sits far out at the hand, a third-class arrangement that always costs force to buy speed and range of motion (ROM). The trainee is comparing two different lever classes, not two different strength levels."
    },
    {
      "id": "c1-c1-mc-2",
      "chapter": 1,
      "type": "mc",
      "q": "Comparative research found that small mammals run with crouched, flexed limbs while large mammals stand and move with more upright, columnar limbs, and that this postural difference, more than bone thickness alone, keeps peak bone and muscle stress within a similar safety factor across a huge range of body sizes. What does this reveal about lever mechanics in a moving body?",
      "options": [
        "Lever class itself changes from moment to moment as an animal moves faster or slower",
        "Bones become literally longer or shorter depending on posture, which is what changes the leverage",
        "The lever class at a joint is fixed by anatomy, but the effective mechanical advantage can still change substantially because posture changes where the effort and resistance act relative to the joint",
        "Only body mass determines how much torque a joint experiences, independent of any postural change"
      ],
      "answer": 2,
      "points": 1,
      "explanation": "A joint's lever class (first, second, or third) is set by anatomy and does not change. What changes with posture is the effective mechanical advantage, because a more upright, columnar posture shortens the effective distance between the ground reaction force and the joint, while a crouched posture lengthens it. This is why the same knee joint can face very different demands walking versus running, without ever changing lever class."
    },
    {
      "id": "c1-c1-tf-1",
      "chapter": 1,
      "type": "tf",
      "q": "Because nearly every limb joint in the human body is a third-class lever with a short effort arm, the muscles crossing those joints must generate more force than the external load itself demands, and this is a deliberate trade that buys speed and range of motion (ROM) rather than a design flaw.",
      "answer": true,
      "points": 1,
      "explanation": "Third-class levers place the effort between the fulcrum and the resistance, so the effort arm is always shorter than the resistance arm, meaning the muscle must produce a multiple of the load's force to move it. This is not inefficiency; it is the price paid for the speed and reach that a moving, throwing, grasping animal benefits from. The rare second-class exception, like the calf raise, favors force instead."
    },
    {
      "id": "c1-c1-fill-1",
      "chapter": 1,
      "type": "fill",
      "q": "In the lever framework, the {{1}} is the joint axis about which a bone rotates, and the {{2}} is the force the body itself applies, almost always a muscle pulling on bone through its tendon.",
      "bank": [
        "fulcrum",
        "effort",
        "resistance",
        "moment"
      ],
      "answers": {
        "1": "fulcrum",
        "2": "effort"
      },
      "points": 2
    },
    {
      "id": "c1-c2-mc-1",
      "chapter": 2,
      "type": "mc",
      "q": "Two healthy trainees squat to different depths with identical effort and coaching. One reaches a firm, abrupt stop at parallel with no pain; months of stretching does not change where the stop occurs. The other continues well past parallel with an easy, springy stop. Based on the chapter's distinction between end-range types, what does the first trainee's stop most likely represent?",
      "options": [
        "A soft-tissue end-range, meaning continued stretching should eventually resolve it",
        "A bony end-range, where the femoral neck contacts the rim of the acetabulum, a structural limit that stretching cannot lengthen because there is no tissue there to lengthen",
        "Simple deconditioning that any beginner would show regardless of anatomy",
        "Clear evidence of an underlying injury that requires immediate correction of technique"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "A bony end-range is produced by bone-on-bone contact and tends to feel abrupt and firm, arriving consistently and failing to change even with months of soft-tissue work, exactly as described. A soft-tissue end-range, by contrast, is set by capsule, ligament, and muscle tension and tends to feel springier and more gradual, and it is the kind of limit that can respond to sustained, appropriate loading over time. Individual hip morphology, such as acetabular depth and femoral neck angle, legitimately varies and predicts differences like this independent of effort or stretching."
    },
    {
      "id": "c1-c2-mc-2",
      "chapter": 2,
      "type": "mc",
      "q": "A lifter reaching overhead to place a box on a shelf stops with the elbow noticeably bent, but a training partner can gently guide the same arm farther with the person relaxed. What does this gap between the two ranges illustrate?",
      "options": [
        "Active range of motion (ROM), what the person's own muscles can produce, is normally less than passive range of motion (ROM), what an external force can move the joint through; the person ran out of active strength and control before the joint itself ran out of room",
        "The joint has reached a genuine bony end-range that a helper should never attempt to move past",
        "Passive range of motion (ROM) and active range of motion (ROM) are always identical in a healthy joint",
        "The person is intentionally sabotaging the reach to avoid a heavier lift later"
      ],
      "answer": 0,
      "points": 1,
      "explanation": "Active range of motion (ROM) is what a person's own muscles can move them through unassisted, while passive range of motion (ROM) is what an external force can produce; active is normally smaller because a muscle often lacks the leverage or coordination to complete the last portion of a stretched, awkward position. This gap is exactly the sensation of a movement feeling blocked even though the tissue could still travel farther, and a goniometric number alone cannot explain why without knowing which type of range was measured."
    },
    {
      "id": "c1-c2-tf-1",
      "chapter": 2,
      "type": "tf",
      "q": "When a joint's range of motion (ROM) stops short because of pain rather than because of a bony or soft-tissue limit, the chapter treats that pain as a signal that warrants professional evaluation rather than something to be assessed or pushed through by a learner using mechanical reasoning alone.",
      "answer": true,
      "points": 1,
      "explanation": "Research on painful hips found that the actual, clinically measured range of motion (ROM) can stop well short of the bony limit predicted by imaging, indicating the joint was restricted by pain rather than by mechanical impingement. The chapter is explicit that a restricted or painful range is a sign to refer to a qualified clinician, not a puzzle to solve with more mobility drilling or heavier loading."
    },
    {
      "id": "c1-c2-match-1",
      "chapter": 2,
      "type": "match",
      "q": "Match each range-of-motion concept to its correct description.",
      "pairs": [
        {
          "left": "Bony end-range",
          "right": "An abrupt, firm stop produced by bone-on-bone contact that stretching cannot lengthen"
        },
        {
          "left": "Soft-tissue end-range",
          "right": "A springier, more gradual stop set by tension in capsule, ligament, and muscle"
        },
        {
          "left": "Active range of motion (ROM)",
          "right": "What a person's own muscles can move a joint through unassisted"
        },
        {
          "left": "Passive range of motion (ROM)",
          "right": "What an external force, such as a partner or gravity, can move a joint through"
        }
      ],
      "points": 4
    },
    {
      "id": "c1-c3-mc-1",
      "chapter": 3,
      "type": "mc",
      "q": "Muscle A has short, four-centimeter fascicles set at a steep pennation angle. Muscle B has long, twelve-centimeter fascicles running parallel with no pennation, and both muscles occupy the same total volume of tissue. Using the chapter's account of fascicle length, pennation, and physiological cross-sectional area (PCSA), which muscle is built to produce more force, and which is built to shorten through a greater range?",
      "options": [
        "Muscle A produces more force because its short, angled fascicles allow more of them to be packed in parallel, raising physiological cross-sectional area (PCSA); Muscle B shortens through a greater range because tension scales with sarcomeres in parallel while range scales with sarcomeres in series, and its fascicles are longer",
        "Muscle B produces more force because it is larger in fascicle length, and Muscle A shortens through a greater range because it is smaller overall",
        "Both muscles produce identical force and identical range because they occupy the same total tissue volume",
        "Physiological cross-sectional area (PCSA) is unrelated to force production and depends only on total muscle mass"
      ],
      "answer": 0,
      "points": 1,
      "explanation": "For a fixed volume of tissue, shorter fascicles allow more of them to be packed in parallel against a broad tendon sheet, raising physiological cross-sectional area (PCSA), and tension is a function of sarcomeres arranged in parallel. Longer, more parallel fascicles instead stack more sarcomeres in series, and velocity and range of shortening are functions of sarcomeres arranged in series. No muscle can maximize both force and range from the same pool of tissue; architecture decides which one a given muscle is built to prioritize."
    },
    {
      "id": "c1-c3-mc-2",
      "chapter": 3,
      "type": "mc",
      "q": "With the arm hanging at the side, the deltoid's fibers run almost parallel to the humerus. As the arm rises toward horizontal, the fiber angle relative to the bone opens up considerably. What does this change predict about the deltoid's usefulness at each position?",
      "options": [
        "At the side, most of the deltoid's tension is a stabilizing (compressive) component pressing the humeral head into the socket, with little rotary component to actually lift the arm; near horizontal, more of that same tension becomes a rotary component that produces useful rotation",
        "The deltoid produces identical rotary force at every arm position because its own contractile force never changes",
        "Near horizontal, the deltoid's pull becomes almost entirely stabilizing rather than rotary",
        "The angle between a muscle's line of pull and the bone it acts on has no effect on how much of its force produces rotation"
      ],
      "answer": 0,
      "points": 1,
      "explanation": "A muscle's force splits into a rotary component (perpendicular to the bone, producing motion) and a stabilizing or compressive component (parallel to the bone, pressing the joint together). When the deltoid's line of pull runs nearly parallel to the humerus at the side, most of its force is compressive and only a small rotary component initiates abduction, which is why the first few degrees of a raise feel mechanically awkward. As the arm rises and the angle to the bone opens, more of the same tension becomes rotary and the movement becomes more effective."
    },
    {
      "id": "c1-c3-tf-1",
      "chapter": 3,
      "type": "tf",
      "q": "Because the gastrocnemius crosses both the knee and the ankle, bending the knee changes how much length and tension it has available to act on the ankle, which is one reason a seated calf raise (knee bent) can feel notably different from a standing calf raise (knee straight) even though both appear to target the same muscle.",
      "answer": true,
      "points": 1,
      "explanation": "The gastrocnemius is a biarticular muscle, and a biarticular muscle's excursion, tension, and mechanical advantage depend on the position of both joints it crosses together, not on either joint alone. Bending the knee shortens the gastrocnemius's usable length and reduces its leverage at the ankle, while the soleus, which crosses only the ankle, is largely unaffected by knee position and takes over a greater share of the work in a seated calf raise."
    },
    {
      "id": "c1-c3-multi-1",
      "chapter": 3,
      "type": "multi",
      "q": "Which of the following statements about muscle architecture are accurate, per the chapter? Select all that apply.",
      "options": [
        "For a fixed volume of tissue, shorter fascicles arranged at a pennation angle allow more of them to be packed in parallel, raising physiological cross-sectional area (PCSA)",
        "Tension is a function of sarcomeres arranged in parallel, while velocity and range of shortening are functions of sarcomeres arranged in series",
        "A muscle's total mass alone reliably predicts its maximum force output regardless of how its fascicles are arranged",
        "Pennation only ever reduces a muscle's force output because of the cosine loss at each fiber's angle to the tendon",
        "A biarticular muscle's mechanical advantage at one joint depends on the position of the other joint it crosses"
      ],
      "answers": [
        0,
        1,
        4
      ],
      "scoring": "all_or_nothing",
      "points": 1,
      "explanation": "Architecture, not mass alone, predicts function: shorter, pennate fascicles raise physiological cross-sectional area (PCSA) by packing more fibers in parallel, and tension scales with parallel sarcomeres while range scales with series sarcomeres. Modern modeling shows pennation is a net mechanical advantage, not simply a force penalty, because the extra fibers packed in parallel far outweigh the small cosine loss per fiber. Biarticular muscles like the gastrocnemius have mechanical advantage at one joint that depends on the position of the other joint they cross."
    },
    {
      "id": "c1-c4-mc-1",
      "chapter": 4,
      "type": "mc",
      "q": "A learner pushes directly toward the hinge axis of a door with substantial force, and the door does not move at all. Using the definition of torque as force multiplied by the perpendicular moment arm, what explains this result?",
      "options": [
        "The moment arm is zero because the line of the push passes straight through the hinge axis, so torque is zero regardless of how much force is applied",
        "The force itself must have been essentially zero, since any real force would rotate a door",
        "Doors require a minimum threshold force before any torque is generated, unrelated to where the force is applied",
        "Torque depends only on the magnitude of force, not on the direction or point of application"
      ],
      "answer": 0,
      "points": 1,
      "explanation": "The moment arm is the perpendicular distance from the joint (or hinge) axis to the line of action of the force. A force whose line of action passes directly through the axis has a moment arm of zero, and torque equals force multiplied by that moment arm, so torque is zero no matter how large the force is. This is the boundary condition showing that a force only contributes to rotation to the extent its line of action misses the axis."
    },
    {
      "id": "c1-c4-mc-2",
      "chapter": 4,
      "type": "mc",
      "q": "A lifter's deadlift bar drifts a few centimeters forward of the shins during the pull instead of staying close to the body. Using the relationship between external moment arm and torque, what is the direct mechanical consequence at the hip and lumbar spine?",
      "options": [
        "Nothing changes mechanically, because the load on the bar is identical either way",
        "The external moment arm at the hip and spine lengthens, which directly increases the external torque those joints must resist, meaning the muscles crossing them must produce more force to hold the same position",
        "Drifting the bar forward shortens the external moment arm and makes the pull easier",
        "Bar drift only affects the wrists and has no measurable effect on the hip or spine"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "The external moment arm at a joint is the horizontal distance from that joint to the load's vertical line of gravity. A bar that drifts even a few centimeters away from the body lengthens that horizontal distance at the hip and at every lumbar segment simultaneously, and because torque equals force multiplied by that distance, the demand on the muscles crossing those joints rises directly. This is the mechanical reasoning behind the coaching cue to keep the bar close."
    },
    {
      "id": "c1-c4-tf-1",
      "chapter": 4,
      "type": "tf",
      "q": "Electromyography (EMG) studies of the bench press sticking region found that muscle activation in the prime movers stays high, and does not drop, through the sticking point, which supports the idea that a sticking point is primarily a geometrically disadvantageous position rather than a moment of reduced muscular effort.",
      "answer": true,
      "points": 1,
      "explanation": "Researchers filming elite powerlifters found that electromyography (EMG) activity in the chest, anterior deltoid, and triceps peaked early and stayed elevated through the sticking region, while the moment arm at the elbow reached its minimum value precisely during that region. The bar slows not because effort drops but because the body arrives, briefly, at the mechanically worst combination of joint angles for converting muscular tension into bar velocity."
    },
    {
      "id": "c1-c4-free-1",
      "chapter": 4,
      "type": "free",
      "q": "A lifter named Priya is convinced her deadlift technique is flawed because the first few inches off the floor feel nearly impossible while the rest of the pull feels comparatively easy with the same weight. Using the concepts of external moment arm and torque from the chapter, explain in an educational, role-neutral way why this pattern is a predictable feature of conventional deadlift mechanics rather than evidence of a personal weakness, and state clearly where your explanation must stop and hand off to a qualified coach or clinician.",
      "model": "Priya is describing the ordinary shape of a conventional deadlift, not a personal flaw. At the bottom of the pull, her hips are low and her torso is inclined well forward, which places the bar far forward of both her hip axis and her lumbar spine, producing the longest external moment arms the lift ever produces. Because torque equals force multiplied by that horizontal distance, and the bar's weight is constant throughout the rep, the demand on her hip extensors and spinal extensors peaks at exactly this position. As the bar rises past her knees, her torso straightens and her hips extend, which shrinks the horizontal distance between the bar and those same joints rapidly, so the external moment arms that made the first few inches so demanding are mostly gone by the time the bar clears her knees. This is not a story about weakness; it is a story about geometry changing continuously through the range. What this explanation cannot do is tell Priya whether her specific technique, load, or any discomfort she may be feeling is appropriate for her body. That judgment requires an assessment by a qualified coach or clinician who can observe her lift directly and take her training history into account, which is outside what a mechanics explanation alone can offer.",
      "key_points": [
        "Identifies the bar's line of gravity as far forward of the hip and lumbar spine at the bottom of a conventional pull, producing the longest external moment arms in the lift",
        "Explains torque as force multiplied by that horizontal distance, and notes the bar's weight is constant while the moment arm is not",
        "Explains that torso straightening and hip extension as the bar rises past the knees shrinks the moment arms, explaining why the lift eases",
        "Frames the pattern as a predictable mechanical feature rather than a personal weakness",
        "Keeps an educational, role-neutral framing and defers judgment about Priya's specific technique or discomfort to a qualified coach or clinician"
      ],
      "rubric": {
        "pass_threshold": 70,
        "points": [
          {
            "desc": "Correctly identifies why the external moment arm at the hip and spine is longest at the bottom of a conventional deadlift",
            "weight": 30
          },
          {
            "desc": "Explains why the moment arm shrinks as the bar rises past the knees, using torso and hip position",
            "weight": 25
          },
          {
            "desc": "Frames the pattern as geometry, not weakness",
            "weight": 20
          },
          {
            "desc": "Keeps a role-neutral, educational boundary and defers judgment about her specific case to a qualified professional",
            "weight": 25
          }
        ]
      },
      "points": 5,
      "appeal": true
    },
    {
      "id": "c1-c5-mc-1",
      "chapter": 5,
      "type": "mc",
      "q": "Researchers had trained lifters squat once allowing natural forward knee travel and once with a barrier blocking the knees from passing the toes. Blocking forward knee travel lowered knee torque by roughly 22 percent, but because the lifters still had to reach the same depth with the bar over the mid-foot, what happened to hip torque?",
      "options": [
        "Hip torque also decreased by a similar amount, since less total torque was needed overall",
        "Hip torque rose by roughly tenfold, because the load was relocated from the knee to the hip and lumbar spine rather than eliminated",
        "Hip torque was completely unaffected by restricting knee travel",
        "The bar could no longer stay over the mid-foot once knee travel was restricted"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "With the shins pinned closer to vertical, the only way to keep descending to the same depth while keeping the bar over the mid-foot was to shove the hips back and pitch the torso sharply forward, which drove hip torque up by roughly tenfold in the study. Torque is relocated, not deleted, by cues that restrict one joint's motion; the total mechanical demand has to go somewhere in the kinetic chain."
    },
    {
      "id": "c1-c5-mc-2",
      "chapter": 5,
      "type": "mc",
      "q": "One lifter squats with the bar high on the trapezius (high-bar) and a relatively upright torso; another squats with the bar lower across the rear deltoids (low-bar) and a more pronounced forward lean. Both keep the bar tracking over the mid-foot. What best explains why their torso angles differ?",
      "options": [
        "The torso angle is a fixed personal habit unrelated to where the bar sits",
        "For the bar's vertical line of gravity to stay over the mid-foot, a lower bar position requires more forward trunk lean to bring that lower point back over the base of support, which shifts more torque onto the hip; a higher bar position requires less lean and shifts more torque onto the knee",
        "Bar height has no mechanical relationship to torso angle; only ankle mobility determines lean",
        "Low-bar squats always place the bar directly over the mid-foot without any change in torso angle"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "Because the combined line of gravity of body and bar must stay over the mid-foot for balance, where the bar sits on the back dictates how much the torso must lean to keep that point over the base of support. A lower bar requires more forward lean, which pushes the hips back and increases the hip's external moment arm; a higher bar allows a more upright torso, which increases the knee's external moment arm instead. Neither style is more correct; they distribute the same total torque differently."
    },
    {
      "id": "c1-c5-multi-1",
      "chapter": 5,
      "type": "multi",
      "q": "Which of the following statements about squat mechanics are accurate, per the chapter? Select all that apply.",
      "options": [
        "The barbell's vertical line of gravity has to stay over the mid-foot for the lift to remain balanced",
        "Restricting how far the knee travels forward removes torque from the body entirely rather than relocating it",
        "A more forward torso lean tends to reduce the knee moment while increasing the hip moment",
        "Forward knee travel past the toes is, by itself, proof that a squat is dangerous",
        "High-bar and low-bar squats are two different mechanical solutions to the same balance constraint, distributing torque differently between hip and knee"
      ],
      "answers": [
        0,
        2,
        4
      ],
      "scoring": "all_or_nothing",
      "points": 1,
      "explanation": "Balance requires the combined line of gravity of body and bar to stay over the base of support at the mid-foot. Restricting knee travel does not remove torque from the body; it relocates it toward the hip and lumbar spine, as shown by the roughly tenfold rise in hip torque when knee travel was blocked. A more forward trunk lean reduces the knee moment while raising the hip moment, and forward knee travel by itself is not evidence of danger. High-bar and low-bar styles are both valid mechanical solutions that distribute the identical total demand differently."
    },
    {
      "id": "c1-c6-mc-1",
      "chapter": 6,
      "type": "mc",
      "q": "A lifter's deadlift bar swings a few centimeters away from the shins right as it clears the knees, and the same weight suddenly feels much harder to move than on reps where the bar stays close. The lifter's one-repetition maximum (1RM) has not changed. What best explains the sudden increase in perceived difficulty?",
      "options": [
        "The plates on the bar effectively became heavier the moment the bar drifted",
        "The horizontal distance between the bar's line of gravity and the hip and lumbar spine grew, lengthening those external moment arms and increasing the torque those joints must resist, even though the load itself did not change",
        "Bar drift only matters near lockout and has no effect earlier in the pull",
        "The lifter's muscles instantaneously became weaker due to the drift"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "The moment arm at any joint is the horizontal distance from that joint to the bar's vertical plumb line. A bar drifting away from the body lengthens that distance at the hip and spine, and because torque equals force multiplied by moment arm, the demand climbs even though the bar's weight is unchanged. Because the moment arm also scales with the sine of torso inclination, this effect is especially pronounced when the torso is closer to horizontal."
    },
    {
      "id": "c1-c6-mc-2",
      "chapter": 6,
      "type": "mc",
      "q": "A biomechanical comparison found that sumo and conventional deadlifts produced no significant difference in hip moments, but the sumo style, with its wider stance and more upright torso, showed roughly a ten percent reduction in lumbar net joint moment compared with conventional pulling. What does this suggest about the popular claim that sumo pulling is universally easier on the lower back?",
      "options": [
        "The claim is fully accurate for every lifter regardless of body proportions",
        "Sumo shortens the spinal moment arm through a more upright torso and does measurably reduce lumbar demand, but hip demand is not eliminated, and how much a lifter benefits depends on individual proportions such as torso length, not on sumo being universally easier",
        "Sumo pulling eliminates all torque at the hip and spine simultaneously",
        "The comparison shows conventional pulling is always mechanically superior to sumo"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "The wider, more upright sumo stance shortens the horizontal distance from the barbell to the lumbar spine, which lowers the lumbar moment, but hip moments did not differ significantly between styles, meaning sumo does not make hip demand disappear. Whether sumo genuinely helps a given lifter depends heavily on their proportions, particularly torso length, since a longer torso benefits more from the upright sumo position than a shorter torso does."
    },
    {
      "id": "c1-c6-tf-1",
      "chapter": 6,
      "type": "tf",
      "q": "Bracing the trunk and raising intra-abdominal pressure (IAP) before a heavy pull does not shorten the external moment arm between the bar and the spine; instead, it changes how the load is transmitted through the stack of spinal segments, helping keep them in a more stable relationship as force passes through.",
      "answer": true,
      "points": 1,
      "explanation": "The barbell's horizontal distance from the spine is set by geometry and does not change because a lifter breathes or braces harder. What bracing and elevated intra-abdominal pressure (IAP) do is stiffen the trunk so the segmented spinal column behaves more like a single rigid unit, distributing load more evenly across motion segments rather than concentrating it wherever the column happens to be weakest that day."
    },
    {
      "id": "c1-c6-match-1",
      "chapter": 6,
      "type": "match",
      "q": "Match each deadlift variation or concept to its correct mechanical description.",
      "pairs": [
        {
          "left": "Sumo deadlift",
          "right": "Wide stance and more upright torso that shorten the spinal moment arm, especially beneficial for a longer torso"
        },
        {
          "left": "Conventional deadlift",
          "right": "Narrower stance and more forward torso lean, sagittally dominant and driven heavily by the posterior chain"
        },
        {
          "left": "Romanian deadlift (RDL)",
          "right": "Knees stay relatively fixed and the range stops above the floor, keeping the hip's moment arm long throughout a partial range"
        },
        {
          "left": "Bracing and intra-abdominal pressure (IAP)",
          "right": "Does not shorten the external moment arm, but helps the spinal segments hold a more stable relationship as load passes through them"
        }
      ],
      "points": 4
    },
    {
      "id": "c1-c7-mc-1",
      "chapter": 7,
      "type": "mc",
      "q": "During a heavy overhead press, the bar visibly slows just above the collarbones, yet if a lifter were wired for electromyography (EMG), the signal from the pressing muscles would hold steady or climb through that stall rather than drop. What does the chapter identify as the actual cause of this sticking region?",
      "options": [
        "The muscles briefly stop producing force at that exact point in the range",
        "Whenever the bar path drifts forward of the shoulder joint to clear the chin, the external moment arm at the shoulder lengthens at that instant, increasing the rotational demand even though the load itself has not changed",
        "The sticking region is caused entirely by a drop in oxygen delivery to the deltoid",
        "The bar becomes physically heavier as it passes the chin due to changes in barbell flex"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "To clear the chin, the bar has to travel forward and around before returning in over the head, and any segment of that path where the bar sits forward of the shoulder lengthens the perpendicular distance from the shoulder axis to the bar's line of gravity. That longer external moment arm increases the torque the shoulder must overcome at that instant. Studies found electromyography (EMG) activity in the prime movers stays elevated through the sticking region, confirming the stall is a geometry problem, not a drop in effort."
    },
    {
      "id": "c1-c7-mc-2",
      "chapter": 7,
      "type": "mc",
      "q": "The glenohumeral joint (the ball-and-socket joint of the shoulder) has a shallow socket covering only a fraction of the humeral head, unlike the deep, congruent socket of the hip. According to the chapter, what is the direct consequence of this shallow geometry for how the joint stays together during a press?",
      "options": [
        "The shallow socket provides more bony stability than a deep socket would",
        "Because bone and ligament alone cannot restrain the joint through most of a pressing range, active, continuous coordination between the deltoid and the rotator cuff (a group of four muscles including supraspinatus, infraspinatus, teres minor, and subscapularis) is required to keep the humeral head centered against the glenoid",
        "The shallow socket eliminates the need for any muscular stabilization during pressing",
        "A shallow socket has no relationship to the shoulder's exceptionally large range of motion"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "The shoulder trades bony stability for the greatest range of motion of any joint in the body; its shallow glenoid holds only a fraction of the humeral head. Because passive bone and ligament restraint is limited, the rotator cuff performs concavity compression, pulling the humeral head into the glenoid to counteract the largely compressive pull of the deltoid at low arm angles, forming a force couple that must operate continuously through the pressing range, not just at its extremes."
    },
    {
      "id": "c1-c7-multi-1",
      "chapter": 7,
      "type": "multi",
      "q": "Which of the following statements about the shoulder and pressing mechanics are accurate, per the chapter? Select all that apply.",
      "options": [
        "The glenohumeral joint trades bony stability for the greatest range of motion (ROM) of any joint in the body",
        "Scapulohumeral rhythm is a perfectly fixed ratio that never changes regardless of load or joint angle",
        "The rotator cuff helps keep the humeral head centered against the glenoid through a mechanism called concavity compression",
        "A wider grip on the bench press tends to shift more load toward the chest and shoulder while a narrower grip shifts more toward the triceps",
        "A pinching sensation near the top of an overhead press is always harmless and should be trained through"
      ],
      "answers": [
        0,
        2,
        3
      ],
      "scoring": "all_or_nothing",
      "points": 1,
      "explanation": "The shoulder's shallow socket buys range of motion (ROM) at the cost of bony stability, and the rotator cuff compensates through concavity compression, pulling the humeral head into the glenoid. Scapulohumeral rhythm is not fixed; it shifts with joint angle and with load. Grip width redistributes work between the chest, shoulder, and triceps as described. A pinching sensation during overhead work is a sign that warrants professional evaluation, never something to assume is harmless and push through."
    },
    {
      "id": "c1-c8-mc-1",
      "chapter": 8,
      "type": "mc",
      "q": "A lifter is coached to squeeze the shoulder blades together as hard as possible at the very start of every row, before the elbow has begun to bend. Using the chapter's account of which muscles are responsible for which scapular motions, what is the mechanical problem with this cue?",
      "options": [
        "Scapular retraction has no role in a row and should never occur at any point in the movement",
        "Retraction is primarily the job of the rhomboids and middle trapezius, not the latissimus dorsi (the prime mover for pulling the arm down and back); driving the scapula into full retraction before the elbow moves can shorten the lat's usable range and shift work onto muscles built mainly for holding position rather than for the bulk of the pulling force",
        "The latissimus dorsi is solely responsible for scapular retraction, so the cue is mechanically ideal",
        "Squeezing the shoulder blades together increases the row's total range of motion (ROM)"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "The latissimus dorsi is the long-range prime mover for pulling the humerus down and back, while the rhomboids and middle trapezius are primarily responsible for scapular retraction, a shorter, more postural job. Driving maximal retraction immediately, before the elbow has begun bending, spends the retractors' effort on a job the lat should still be doing and can shorten the lat's own usable range, illustrating why the scapula's position rewrites the leverage of every muscle attached to it."
    },
    {
      "id": "c1-c8-mc-2",
      "chapter": 8,
      "type": "mc",
      "q": "In a bent-over row, the load hangs straight down under gravity, and the external moment arm at the shoulder is largest when the arm is fully extended at the bottom of the movement. In a pull-up, the load is body weight acting through the body's center of mass (COM), and the external moment arm at the shoulder grows largest as the arm swings from overhead toward horizontal near the top. What does this predict about where each lift feels hardest?",
      "options": [
        "Both lifts should feel equally hard at every point in the range, since both involve pulling",
        "The row should feel hardest near the bottom of the pull, while the pull-up should feel hardest as the lifter approaches the top of the range, because each lift's external moment arm at the shoulder peaks at a different point in its respective range of motion (ROM)",
        "The row should feel hardest at the top of the pull and the pull-up hardest at the very bottom, opposite to the actual pattern",
        "Neither lift has a location where the external moment arm changes throughout the range"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "In a row, the load hangs farthest in front of the shoulder at the bottom of the pull, so torque demand is highest there and eases as the load is pulled back under the shoulder. In a pull-up, the upper arm is nearly vertical (and the shoulder's moment arm is small) at the dead hang, but as the arm swings toward horizontal near the top, the horizontal distance from the shoulder to the body-weight line grows, so torque demand climbs toward the top. This is why the two lifts are described as fighting a lifter at opposite ends of their ranges."
    },
    {
      "id": "c1-c8-fill-1",
      "chapter": 8,
      "type": "fill",
      "q": "The scapula slides away from the spine in {{1}} and back toward it in retraction. The glenoid fossa tips more toward the ceiling in upward rotation, which is largely produced by a force couple involving the trapezius and the {{2}}, a muscle that also keeps the scapula flush against the ribcage.",
      "bank": [
        "protraction",
        "serratus anterior",
        "depression",
        "rhomboid minor"
      ],
      "answers": {
        "1": "protraction",
        "2": "serratus anterior"
      },
      "points": 2
    },
    {
      "id": "c1-c9-mc-1",
      "chapter": 9,
      "type": "mc",
      "q": "A learner has a femur that is notably long relative to their torso. Using the chapter's account of how proportion drives squat form, what pattern would this learner most likely need to adopt to keep the bar over the mid-foot at depth, and why?",
      "options": [
        "A more forward trunk lean and, often, a wider stance, because a long femur pushes the knees or hips a greater horizontal distance from the bar's line of gravity, and leaning forward is the mechanically cheapest way to keep the combined system balanced over the base of support",
        "No change in technique at all, since femur length has no bearing on squat mechanics",
        "A perfectly vertical torso regardless of femur length, since torso angle is fixed by convention rather than geometry",
        "A narrower stance and less depth, since a long femur eliminates the need to balance the bar over the feet"
      ],
      "answer": 0,
      "points": 1,
      "explanation": "As a learner with a long femur relative to torso descends, the knees or hips must travel a greater horizontal distance to reach depth, and the barbell's line of gravity still has to pass over the mid-foot for balance. Leaning the trunk forward shortens the effective distance the hips travel behind the bar and redistributes demand between hip and knee; research also shows that widening the stance can offload some of the range of motion (ROM) demand this proportion imposes."
    },
    {
      "id": "c1-c9-mc-2",
      "chapter": 9,
      "type": "mc",
      "q": "Research on deadlift-naive participants found that a longer sitting-height-to-height ratio (indicating a relatively long torso) was associated with better sumo deadlift performance, while relatively shorter-torso participants tended to perform better with the conventional stance. What is the mechanical reasoning behind this finding?",
      "options": [
        "A long-torso lifter pulling conventional must fold a long lever forward, producing a large spinal moment arm before the bar even leaves the floor; the wide sumo stance lets that same lifter's hips sit closer to the bar with a more vertical trunk, shrinking that moment arm",
        "Torso length has no relationship to the spinal moment arm in either stance",
        "Sumo pulling requires a shorter torso because the stance is physically too wide for a long-torso lifter to use",
        "The finding shows that conventional pulling always produces a smaller spinal moment arm than sumo, regardless of torso length"
      ],
      "answer": 0,
      "points": 1,
      "explanation": "The dominant variable in the conventional deadlift is the spinal moment arm, the horizontal distance from the bar to the hips and lumbar spine. A long torso forced into a conventional stance has to fold forward substantially to reach the bar, generating a large moment arm before the pull begins. The wide sumo stance lets the hips drop closer to the bar with a more upright trunk, which shortens that same moment arm, an advantage that scales with how much forward lean the wider stance actually removes for that individual."
    },
    {
      "id": "c1-c9-tf-1",
      "chapter": 9,
      "type": "tf",
      "q": "According to the chapter's review of squat biomechanics, forward trunk inclination and forward tibia (shin) inclination have opposite effects on the knee flexion moment, so evaluating either variable alone, without considering the other, can lead to the wrong conclusion about which joint is under the greatest strain.",
      "answer": true,
      "points": 1,
      "explanation": "A more forward trunk actually reduces the knee moment while increasing the hip moment, while a more forward tibia does the reverse, increasing the knee moment while reducing the hip moment. Because these two variables often covary within a single repetition, judging a squat's knee demand from trunk angle alone, or from tibia angle alone, risks a mistaken conclusion; both must be read together."
    },
    {
      "id": "c1-c9-free-1",
      "chapter": 9,
      "type": "free",
      "q": "A training partner insists that a fellow lifter switch from a conventional deadlift to a sumo deadlift because sumo is supposedly universally easier on the back. The lifter has a shorter-than-average torso and proportionally long arms. Using the chapter's anthropometric evidence, explain in an educational, role-neutral way why this advice may not suit this particular lifter, and note where your explanation should stop.",
      "model": "The claim that sumo is universally easier on the back does not hold up against the anthropometric evidence in the chapter. The deadlift's dominant demand at the spine is the spinal moment arm, the horizontal distance from the bar to the hips and lumbar spine, and research found that a longer torso, not a shorter one, is what predicts a mechanical advantage from switching to sumo, because a long torso folded conventionally generates a large spinal moment arm that the wide, upright sumo stance can shorten. A lifter with a shorter torso already keeps that moment arm relatively compact in a conventional stance, so sumo does not offer the same geometric payoff, and research even found no significant difference in hip moments between the two styles, meaning sumo does not simply make hip and back demand vanish for everyone. This lifter's long arms compound the point: longer arms shorten the vertical bar path and let a conventional puller start with a more upright trunk from the outset, an advantage that a wide sumo stance would not add much to. What this explanation cannot do is say whether this specific lifter should switch stances, whether any current technique is safe for them, or whether a change in stance would be appropriate given their full training history. That judgment belongs to a qualified coach or clinician who can assess the lifter directly, not to a general rule about which stance is easier.",
      "key_points": [
        "Identifies the spinal moment arm as the dominant variable in deadlift spinal demand",
        "Cites that a longer torso, not a shorter one, is associated with a sumo advantage, while a shorter torso already keeps the spinal moment arm compact in conventional",
        "Notes hip moments did not differ significantly between sumo and conventional, so sumo does not eliminate hip and back demand universally",
        "Explains that long arms already give this lifter a conventional-stance advantage via a shorter bar path and more upright starting trunk",
        "Keeps a role-neutral, educational boundary and defers any individual technique decision to a qualified coach or clinician"
      ],
      "rubric": {
        "pass_threshold": 70,
        "points": [
          {
            "desc": "Correctly explains the spinal moment arm and why torso length, not a universal rule, predicts sumo's advantage",
            "weight": 30
          },
          {
            "desc": "Uses the finding that hip moments did not differ significantly between styles to challenge the universal claim",
            "weight": 20
          },
          {
            "desc": "Explains how this lifter's long arms already favor conventional pulling",
            "weight": 25
          },
          {
            "desc": "Keeps a role-neutral, educational boundary and defers the individual decision to a qualified professional",
            "weight": 25
          }
        ]
      },
      "points": 5,
      "appeal": true
    },
    {
      "id": "c1-c10-mc-1",
      "chapter": 10,
      "type": "mc",
      "q": "A motion-capture study of the barbell hip thrust found that, contrary to the common coaching belief that hip extensor demand stays roughly constant across the movement, the hip extension moment is actually greatest early in the lift and diminishes as the hips rise toward lockout. What does this illustrate about reading any unfamiliar lift?",
      "options": [
        "Peak demand at a joint is a property of the geometry at each instant (specifically, how the external moment arm changes through the range of motion (ROM)), not a fixed property of the exercise's name or a coaching assumption about where a lift should be hardest",
        "Every lift's hardest point is always at full lockout, without exception",
        "The hip thrust has no external moment arm at any point in its range",
        "Motion-capture data contradicts the general principle that torque equals force multiplied by moment arm"
      ],
      "answer": 0,
      "points": 1,
      "explanation": "In the hip thrust, the moment arm geometry shrinks as the femur approaches horizontal near lockout, so the hip extension moment is actually greatest early in the lift rather than at the top, opposite to a common assumption. This demonstrates the chapter's core lesson: where a lift feels hardest is decided by where the external moment arm is longest at that instant, which must be reasoned through the geometry rather than assumed from the exercise's name or from folklore about which part of a lift should be hardest."
    },
    {
      "id": "c1-c10-mc-2",
      "chapter": 10,
      "type": "mc",
      "q": "Presented with a movement pattern not explicitly covered anywhere in the course, such as a landmine press, the chapter recommends running a five-move framework: identify the pattern, locate the load's line of gravity relative to each joint, find where the external moment arm peaks, trace which muscles are best positioned to meet that demand, and check the prediction against the individual's proportions and honest range of motion (ROM). What is the main advantage of this framework over memorizing a list of approved exercises?",
      "options": [
        "It only works for lifts explicitly named in the course materials and fails on any novel movement",
        "Because it is built from underlying principles (moment arms, torque, muscle architecture, and anthropometry) rather than a fixed catalog, the framework transfers to any movement, including ones the learner has never personally seen, since torque and leverage do not depend on whether an exercise has a familiar name",
        "The framework eliminates the need to consider an individual's anthropometry or joint range of motion (ROM)",
        "The five moves are only valid for barbell exercises and cannot be applied to any other type of resistance"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "A lookup table of approved exercises fails the instant someone performs a movement that is not on the list, which happens constantly in real training. A framework built on the same underlying mechanics used throughout the course (pattern recognition, gravity line, moment arm, muscle matching, and anthropometry) engages with any novel movement because torque does not care whether the observer has personally seen that exercise before; the same reasoning that explains a squat or a deadlift explains a landmine press or an invented hybrid movement."
    },
    {
      "id": "c1-c10-match-1",
      "chapter": 10,
      "type": "match",
      "q": "Match each step of the five-move framework for reading an unfamiliar lift to its correct description.",
      "pairs": [
        {
          "left": "Identify the pattern",
          "right": "Classify the movement as a squat, hinge, press, or pull pattern before measuring anything"
        },
        {
          "left": "Locate the load's line of gravity",
          "right": "Drop a plumb line from the load's center of mass (COM) and note where it falls relative to each joint"
        },
        {
          "left": "Find where the external moment arm peaks",
          "right": "Determine at which phase of the range the horizontal distance from a joint to the load's line of gravity is longest"
        },
        {
          "left": "Check against proportions and honest ranges",
          "right": "Compare the mechanical prediction against the individual's actual segment lengths and range of motion (ROM) rather than a generic template"
        }
      ],
      "points": 4
    }
  ]
};
