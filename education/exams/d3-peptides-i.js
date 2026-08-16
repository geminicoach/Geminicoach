/* Gemini Education: D3 (Peptides I: Growth, Metabolic & Body Composition) FINAL EXAM, interim live version.
   Current exam.html renders MC and free-response only, so this ships 20 MC + 6 true/false
   (as 2-option MC), drawing 20 per attempt, options shuffled, 80% to pass. 26 in the pool.
   Full bank (matching, word-bank, multi-select, write-ins) is in d3-peptides-i.full.js. */
window.GEM_EXAM = {
  slug: "d3-peptides-i",
  title: "Peptides I: Growth, Metabolic & Body Composition",
  contact_hours: 9, ceu_value: 0.9, pass_threshold: 80, draw_mc: 20, placeholder: false,
  questions: [
    {
      "id": "d3-c1-mc-1",
      "chapter": 1,
      "type": "mc",
      "q": "Which statement correctly describes what structurally distinguishes a peptide from a small molecule and from a protein?",
      "options": [
        "Peptides are short chains of roughly 2 to 50 amino acids, too small and unfolded to be a true protein, but too large and structurally specific to behave like a small molecule",
        "Peptides are lipid soluble molecules that diffuse through the cell membrane and act on intracellular receptors",
        "Peptides are always over 100 amino acids and require complex three dimensional folding to function",
        "Peptides are defined by their regulatory approval status rather than by their molecular structure"
      ],
      "answer": 0,
      "points": 1,
      "explanation": "A peptide is a short chain of amino acids (roughly 2 to 50 residues, about 200 to 5,000 daltons) joined by peptide bonds, structurally distinct from both a compact small molecule and a large, folded protein. Chain length and structure, not marketing language or regulatory status, define the category."
    },
    {
      "id": "d3-c1-mc-2",
      "chapter": 1,
      "type": "mc",
      "q": "Why do most peptides have to be delivered by injection rather than swallowed as a pill?",
      "options": [
        "Peptides are illegal to manufacture as oral tablets in most jurisdictions",
        "Peptides are hydrophilic and carry charge along their backbone, so they cannot easily cross the fatty cell membrane and are readily destroyed by digestive enzymes if swallowed",
        "Peptides are too expensive to formulate as capsules",
        "Peptides dissolve instantly in stomach acid before reaching the bloodstream, unlike small molecules, which are unaffected by digestion"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "Most peptides are water soluble and carry charge, which prevents them from diffusing through the lipid membrane the way a compact steroid can, and leaves them vulnerable to the same digestive enzymes that break down dietary protein. This is a large part of why most peptide medicines and products arrive as injectables rather than tablets."
    },
    {
      "id": "d3-c1-tf-1",
      "chapter": 1,
      "type": "mc",
      "q": "Because a randomized controlled trial establishes strong evidence for what a specific peptide molecule does in a controlled human study, that same evidence also verifies the identity, sterility, and purity of any unregulated vial sold online under that molecule's name.",
      "options": [
        "True",
        "False"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "A clinical trial's evidence describes the studied, regulated formulation, not any vial obtained outside that system. Evidence quality about a molecule's effects and confidence in what a specific unverified product actually contains are two separate questions, and strong trial evidence does not resolve the second one."
    },
    {
      "id": "d3-c2-mc-1",
      "chapter": 2,
      "type": "mc",
      "q": "What does the GHRH receptor (GHRH-R) do mechanistically once activated by sermorelin, CJC-1295, or tesamorelin?",
      "options": [
        "It is a Gq coupled receptor that triggers calcium release for immediate exocytosis of stored growth hormone",
        "It is an intracellular receptor that enters the nucleus to directly alter gene transcription over days to weeks",
        "It is a class B, Gs coupled G protein coupled receptor (GPCR) that activates adenylate cyclase, raising cyclic AMP and activating protein kinase A (PKA), which triggers growth hormone release and increases growth hormone gene transcription",
        "It is a receptor tyrosine kinase that directly phosphorylates growth hormone for immediate secretion"
      ],
      "answer": 2,
      "points": 1,
      "explanation": "GHRH-R is a class B G protein coupled receptor that signals through Gs, adenylate cyclase, and cyclic AMP to activate protein kinase A (PKA), which both releases stored growth hormone and increases growth hormone gene transcription. This is mechanistically distinct from the ghrelin receptor's calcium driven pathway covered in the next chapter."
    },
    {
      "id": "d3-c2-mc-2",
      "chapter": 2,
      "type": "mc",
      "q": "Among sermorelin, DAC-conjugated CJC-1295, and tesamorelin, which is structurally closest to producing a physiologic, pulsatile pattern of growth hormone release rather than a sustained, tonic elevation?",
      "options": [
        "CJC-1295, because its albumin binding chemistry mimics the body's own release pattern",
        "Tesamorelin, because it uses the same DAC conjugation chemistry as CJC-1295",
        "All three produce an identical pulsatile pattern because they act on the same receptor",
        "Sermorelin, because it is cleared from circulation quickly, closely mimicking native GHRH(1-29)"
      ],
      "answer": 3,
      "points": 1,
      "explanation": "Sermorelin behaves close to the natural hormone, cleared from circulation quickly and producing something resembling a single physiologic pulse. CJC-1295's DAC conjugation binds albumin and extends its presence to days, producing the tonic-leaning pattern documented in its own pivotal trial."
    },
    {
      "id": "d3-c2-tf-1",
      "chapter": 2,
      "type": "mc",
      "q": "Tesamorelin is FDA-approved for reducing excess visceral fat specifically in people with HIV-associated lipodystrophy, and this approval does not automatically extend to general visceral fat reduction in people without HIV.",
      "options": [
        "True",
        "False"
      ],
      "answer": 0,
      "points": 1,
      "explanation": "Tesamorelin's approval, under the brand name Egrifta, is specific to HIV-associated lipodystrophy, supported by multiple large randomized trials in that population. Use in other populations or for other goals is off-label and was not established by the pivotal trials that earned the approval."
    },
    {
      "id": "d3-c3-mc-1",
      "chapter": 3,
      "type": "mc",
      "q": "How does the ghrelin receptor (GHS-R) signal differently from the GHRH receptor at the somatotroph?",
      "options": [
        "GHS-R is Gq coupled, activating phospholipase C to generate IP3 and DAG, driving a fast, calcium driven exocytosis of stored growth hormone, distinct from GHRH-R's cyclic AMP and PKA pathway",
        "GHS-R is Gs coupled and uses cyclic AMP, identical to GHRH-R",
        "GHS-R signals only through direct gene transcription in the nucleus",
        "GHS-R has no known second messenger system and acts purely through physical contact with growth hormone granules"
      ],
      "answer": 0,
      "points": 1,
      "explanation": "The ghrelin receptor is a Gq coupled GPCR that signals through phospholipase C, IP3, DAG, and intracellular calcium, a fast, calcium driven route built for exocytosis, mechanistically distinct from GHRH-R's Gs, cyclic AMP, and PKA pathway. Both converge on the same somatotroph cell but through non overlapping intracellular machinery."
    },
    {
      "id": "d3-c3-mc-2",
      "chapter": 3,
      "type": "mc",
      "q": "According to the preclinical pharmacology reviewed in the chapter, what sets ipamorelin apart from GHRP-6 and hexarelin?",
      "options": [
        "Ipamorelin is a small molecule rather than a peptide",
        "Ipamorelin released growth hormone with potency comparable to GHRP-6 but did not measurably raise ACTH or cortisol, unlike GHRP-6 and hexarelin, which showed more hormonal spillover",
        "Ipamorelin is the only compound in the class that also activates the GHRH receptor",
        "Ipamorelin is orally bioavailable while the others must be injected"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "Raun and colleagues found ipamorelin released growth hormone with potency and efficacy comparable to GHRP-6, but unlike GHRP-6 or GHRP-2, it did not measurably raise ACTH or cortisol, even at much higher doses in that animal pharmacology. Hexarelin, by contrast, is described as the most potent but also the most prone to spillover into ACTH, cortisol, and prolactin."
    },
    {
      "id": "d3-c4-mc-1",
      "chapter": 4,
      "type": "mc",
      "q": "According to the chapter's account of growth hormone's two track mechanism, how does growth hormone (GH) produce most of its growth-promoting effects on tissue?",
      "options": [
        "GH directly binds muscle tissue receptors and stimulates protein synthesis without any intermediary",
        "GH works exclusively through the ghrelin receptor pathway",
        "GH mainly acts indirectly, binding the growth hormone receptor on the liver and triggering JAK2/STAT5 signaling that increases IGF-1 production, which then mediates most systemic growth-promoting effects",
        "GH's only action is suppressing insulin, with no role in tissue growth at all"
      ],
      "answer": 2,
      "points": 1,
      "explanation": "GH binds the growth hormone receptor on hepatocytes, activating JAK2/STAT5 signaling that increases transcription of the IGF-1 gene, and most of GH's growth-promoting reach runs through this liver-derived, systemic IGF-1. GH also has a separate, direct track acting on fat and muscle that opposes insulin, independent of IGF-1."
    },
    {
      "id": "d3-c4-mc-2",
      "chapter": 4,
      "type": "mc",
      "q": "What happened to AOD-9604 (and the related fragment 176-191) when the early rodent fat-loss findings were carried into a formal human drug-development program?",
      "options": [
        "The human trials confirmed the rodent findings and the drug was approved for weight loss",
        "No human trials were ever attempted because the compound was deemed too dangerous",
        "The compound was found to be chemically identical to tesamorelin and merged into that development program",
        "Placebo-controlled human obesity trials did not produce a result supporting approval, and the development program was ultimately discontinued"
      ],
      "answer": 3,
      "points": 1,
      "explanation": "A promising rodent signal from Ng and colleagues (2000) led to placebo-controlled human obesity trials in the 2000s, but the human trials did not translate into a result supporting approval, and the program was discontinued. What circulates in the grey market today rests on decades-old animal data rather than on the human trial outcome."
    },
    {
      "id": "d3-c4-tf-1",
      "chapter": 4,
      "type": "mc",
      "q": "IGF-1 LR3 and IGF-1 DES are engineered to bind insulin-like growth factor binding proteins (IGFBPs) more tightly than native IGF-1, which is the basis of their marketing as longer-lasting and more potent.",
      "options": [
        "True",
        "False"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "LR3 and DES-IGF-1 are engineered with reduced, not increased, IGFBP binding affinity, which leaves a larger free, receptor-active fraction circulating at any given dose. This escape from the body's own buffering system, not tighter binding, is the structural basis of the marketing built around both analogs."
    },
    {
      "id": "d3-c5-mc-1",
      "chapter": 5,
      "type": "mc",
      "q": "Myostatin normally restrains skeletal muscle growth by acting through which receptor and downstream pathway?",
      "options": [
        "Activin receptor type IIB (ActRIIB), activating Smad2/Smad3 signaling that increases protein breakdown and suppresses Akt-driven protein synthesis",
        "GHRH receptor, via cyclic AMP and protein kinase A",
        "Ghrelin receptor (GHS-R), via calcium and protein kinase C",
        "Insulin receptor, directly blocking glucose uptake"
      ],
      "answer": 0,
      "points": 1,
      "explanation": "Myostatin binds ActRIIB, activating Smad2/Smad3, which drives FoxO-dependent transcription that increases muscle protein breakdown while suppressing Akt-driven protein synthesis, a coordinated two-part brake. ActRIIB is shared with activin and other TGF-beta superfamily ligands rather than being a myostatin-exclusive receptor."
    },
    {
      "id": "d3-c5-mc-2",
      "chapter": 5,
      "type": "mc",
      "q": "Why were ACE-031's clinical trials in boys with Duchenne muscular dystrophy terminated?",
      "options": [
        "The drug failed to raise lean mass at all in any trial it entered",
        "The trials were stopped based on safety data, with vascular side effects (telangiectasia, nosebleeds, bleeding gums) consistent with off-target inhibition of activin A, a ligand ActRIIB also binds",
        "The sponsor ran out of funding before any results were collected",
        "Regulators rejected the trial design before it could begin enrolling patients"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "Public trial registry records confirm the studies were stopped based on safety data, with a vascular symptom pattern linked to ACE-031 also trapping activin A, a ligand important for vessel integrity, alongside myostatin. Because ActRIIB was never a myostatin-only receptor, an aggressive decoy built to intercept myostatin could not easily avoid trapping activin A as well."
    },
    {
      "id": "d3-c6-mc-1",
      "chapter": 6,
      "type": "mc",
      "q": "GLP-1 receptor activation produces effects at three distinct sites at once. Which option correctly matches all three?",
      "options": [
        "Kidney (fluid retention), liver (glucose storage), and skin (flushing)",
        "Bone (density), muscle (hypertrophy), and heart (increased contractility)",
        "Pancreas (amplified glucose-dependent insulin secretion and suppressed glucagon), stomach (slowed gastric emptying), and brain (reduced appetite via hypothalamus and brainstem)",
        "Adrenal cortex (cortisol), thyroid (T4), and gonads (testosterone)"
      ],
      "answer": 2,
      "points": 1,
      "explanation": "GLP-1 acts on the pancreas to amplify glucose-dependent insulin secretion and suppress glucagon, on the stomach to slow gastric emptying, and on the brain, in the hypothalamus and brainstem, to reduce appetite. Appetite suppression is one of three coordinated mechanisms, not the entire story behind these drugs' effects."
    },
    {
      "id": "d3-c6-mc-2",
      "chapter": 6,
      "type": "mc",
      "q": "How do semaglutide, tirzepatide, and retatrutide differ in the receptors they engage?",
      "options": [
        "Semaglutide activates GIP and glucagon receptors only; tirzepatide and retatrutide activate GLP-1 alone",
        "All three activate the identical single GLP-1 receptor at different doses",
        "Retatrutide activates only the glucagon receptor, with no GLP-1 or GIP activity",
        "Semaglutide activates only the GLP-1 receptor; tirzepatide adds the GIP receptor as a dual agonist; retatrutide adds the glucagon receptor on top of both as a triple agonist"
      ],
      "answer": 3,
      "points": 1,
      "explanation": "Semaglutide is a single-receptor GLP-1 agonist, tirzepatide is a dual GLP-1 and GIP agonist, and retatrutide, still investigational, is a triple agonist adding glucagon receptor activity on top of both. Each additional receptor engaged has been associated with progressively larger average weight loss in the trials described in the chapter."
    },
    {
      "id": "d3-c6-mc-3",
      "chapter": 6,
      "type": "mc",
      "q": "Where do semaglutide and tirzepatide sit on the evidence ladder introduced earlier in the course, compared with most other compounds covered elsewhere in the course?",
      "options": [
        "At the top rung, supported by large, randomized, placebo-controlled phase 3 trials and full regulatory approval, a markedly stronger evidence tier than most of the other compounds covered in this course",
        "At the very bottom, resting only on vendor marketing and anecdote, similar to most grey-market peptides",
        "Exactly in the middle, comparable to a single small pharmacology study",
        "Below animal-only data, because no human trials have been completed for either drug"
      ],
      "answer": 0,
      "points": 1,
      "explanation": "Semaglutide and tirzepatide are supported by large, multicenter, randomized, double-blind, placebo-controlled phase 3 trials (the STEP and SURMOUNT programs) and full regulatory approval, sitting at the top of the evidence ladder. This is a markedly stronger evidence tier than most grey-market peptides discussed elsewhere in the course, which often rest on animal data or anecdote alone."
    },
    {
      "id": "d3-c6-tf-1",
      "chapter": 6,
      "type": "mc",
      "q": "Gastrointestinal discomfort (nausea, vomiting, diarrhea, or constipation) was consistently the leading reason participants discontinued treatment across the pivotal trials of semaglutide, tirzepatide, and retatrutide.",
      "options": [
        "True",
        "False"
      ],
      "answer": 0,
      "points": 1,
      "explanation": "Gastrointestinal effects were, by a wide margin, the most commonly reported effects across every trial the chapter covers, and they were consistently the leading reason participants left the pivotal trials for all three drugs. This tracks directly to the mechanism: slowed gastric emptying and direct activation of brainstem nausea circuits."
    },
    {
      "id": "d3-c7-mc-1",
      "chapter": 7,
      "type": "mc",
      "q": "Which of the four compounds covered in the metabolic and mitochondrial chapter is not actually a peptide?",
      "options": [
        "MOTS-c, because it is a lipid rather than an amino acid chain",
        "SLU-PP-332, a synthetic small molecule that agonizes estrogen-related receptors (ERRs) and is not built from a chain of amino acids",
        "Elamipretide (SS-31), because it lacks any amino acid residues",
        "5-amino-1MQ, because it is a folded protein larger than growth hormone"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "SLU-PP-332 is a small molecule built through conventional medicinal chemistry, not a peptide, despite frequently being bundled onto peptide vendor lists alongside MOTS-c and elamipretide. It works as a synthetic agonist of estrogen-related receptors (ERRs), switching on a mitochondrial biogenesis and fat-oxidation gene program, a mechanism distinct from any peptide covered in that chapter."
    },
    {
      "id": "d3-c7-mc-2",
      "chapter": 7,
      "type": "mc",
      "q": "What is the honest evidence status of elamipretide (SS-31), as described in the chapter?",
      "options": [
        "It has never been tested in humans and remains entirely preclinical",
        "It was rejected by regulators in every trial it has ever entered",
        "It produced a durable, positive result in a Barth syndrome open-label extension, but a mixed, genotype-dependent result that did not meet its overall primary endpoint in a broader primary mitochondrial myopathy trial",
        "It is fully approved for general anti-aging use in healthy adults"
      ],
      "answer": 2,
      "points": 1,
      "explanation": "Elamipretide showed sustained improvement on a six-minute walk test in the 168-week Barth syndrome open-label extension, but its broader MMPOWER-3 trial in primary mitochondrial myopathy did not meet its overall primary endpoint, with only a genotype-specific subgroup showing benefit. Both findings are real and need to be held together rather than citing only one."
    },
    {
      "id": "d3-c7-tf-1",
      "chapter": 7,
      "type": "mc",
      "q": "MOTS-c's insulin-sensitizing and exercise-mimetic effects have been confirmed in a completed, controlled human clinical trial.",
      "options": [
        "True",
        "False"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "MOTS-c's insulin-sensitizing effects are consistently observed in rodent and cell-culture models, and circulating levels correlate with metabolic health in observational human studies, but no completed, controlled human clinical trial has tested administered MOTS-c as a therapeutic. The evidence grade remains preclinical, regardless of the 'clinically studied' language sometimes used in marketing."
    },
    {
      "id": "d3-c8-mc-1",
      "chapter": 8,
      "type": "mc",
      "q": "How does kisspeptin's site of action differ from gonadorelin's?",
      "options": [
        "Kisspeptin binds the pituitary GnRH receptor directly, while gonadorelin acts on the hypothalamus",
        "Both peptides act on the identical receptor at the identical anatomical site",
        "Kisspeptin acts on the gonads directly, while gonadorelin acts on the pituitary",
        "Kisspeptin excites the GnRH-producing neuron in the hypothalamus via the KISS1 receptor, one step upstream, while gonadorelin is a synthetic copy of GnRH itself that bypasses the hypothalamus and binds the pituitary gonadotrope's GnRH receptor directly"
      ],
      "answer": 3,
      "points": 1,
      "explanation": "Kisspeptin acts one step upstream, exciting the GnRH neuron itself through the KISS1 receptor as the output of a self-regulating KNDy pacemaker circuit. Gonadorelin is structurally identical to native GnRH and bypasses that upstream circuit, binding the pituitary gonadotrope's GnRH receptor directly."
    },
    {
      "id": "d3-c8-mc-2",
      "chapter": 8,
      "type": "mc",
      "q": "What did Belchetz and colleagues (1978) demonstrate about GnRH delivery pattern in lesioned rhesus monkeys?",
      "options": [
        "Hourly pulses of GnRH restored normal LH and FSH secretion, while continuous, unbroken infusion of the identical total hormone failed to do so, and switching a pulse-restored animal to continuous infusion caused secretion to fall again",
        "Continuous infusion and pulsatile infusion produced identical gonadotropin output",
        "Only very high doses of GnRH, delivered continuously, could restore gonadotropin secretion",
        "GnRH had no effect on gonadotropin secretion regardless of delivery pattern"
      ],
      "answer": 0,
      "points": 1,
      "explanation": "Hourly pulses matching the natural rhythm fully reestablished normal LH and FSH secretion, while continuous infusion of the same total hormone failed, and the effect was reversible in both directions within the same animals. This established that the pattern of delivery, not the presence or amount of the hormone, controls whether the pituitary is stimulated or desensitized."
    },
    {
      "id": "d3-c8-tf-1",
      "chapter": 8,
      "type": "mc",
      "q": "A single dose of gonadorelin can be used clinically as a diagnostic test of pituitary gonadotrope function, distinct from its use in pulsatile pump therapy.",
      "options": [
        "True",
        "False"
      ],
      "answer": 0,
      "points": 1,
      "explanation": "A single dose of gonadorelin with blood draws before and after, the GnRH stimulation test, is a well-established, low-risk diagnostic tool for assessing whether the pituitary responds appropriately, distinguishing a hypothalamic problem from a pituitary one. Pulsatile pump delivery is a separate, established therapeutic use for a defined population with hypogonadotropic hypogonadism."
    },
    {
      "id": "d3-c9-mc-1",
      "chapter": 9,
      "type": "mc",
      "q": "What does a 'research use only, not for human consumption' label on a grey-market peptide vial actually accomplish?",
      "options": [
        "It certifies the product has passed FDA sterility and purity testing",
        "It functions mainly as a liability shield that shifts legal exposure toward the buyer, without certifying the vial's sterility, identity, or purity",
        "It guarantees the seller operates a licensed compounding pharmacy",
        "It confirms the product meets United States Pharmacopeia (USP) manufacturing standards"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "The label shifts legal responsibility toward the buyer and lets the seller avoid the manufacturing, testing, and labeling obligations that apply to products sold for human use. It certifies nothing about what is actually inside the vial."
    },
    {
      "id": "d3-c9-mc-2",
      "chapter": 9,
      "type": "mc",
      "q": "According to the chapter, how do the three tiers of peptide product legitimacy differ from one another?",
      "options": [
        "All three tiers carry identical FDA oversight, differing only in price",
        "Compounded products carry more regulatory oversight than FDA-approved medicines",
        "They differ structurally in oversight: an approved medicine requires full FDA review and GMP-inspected manufacturing, a compounded product involves a licensed pharmacist under 503A or 503B rules, and an unapproved research chemical has no review, inspection, pharmacist, or batch record at all",
        "Research chemicals are simply an older, discontinued category of approved medicine"
      ],
      "answer": 2,
      "points": 1,
      "explanation": "An FDA-approved medicine has passed New Drug Application review with GMP-inspected manufacturing; a compounded product is prepared by a licensed pharmacist under 503A patient-specific or 503B FDA-registered facility rules; an unapproved research chemical has none of that review, inspection, or accountability. Oversight narrows sharply from the first tier to the third."
    },
    {
      "id": "d3-c9-mc-3",
      "chapter": 9,
      "type": "mc",
      "q": "Why is bacterial endotoxin contamination described as a particularly dangerous risk for grey-market injectable peptides?",
      "options": [
        "Endotoxin only affects oral medications, not injectables",
        "Endotoxin can be seen as cloudiness in the vial, so a visual check is sufficient to rule it out",
        "Endotoxin is destroyed automatically during standard subcutaneous injection technique",
        "Endotoxin survives even after the bacteria that produced it are dead, cannot be detected by visual inspection, and requires validated laboratory testing that unregulated manufacturers have no obligation to perform"
      ],
      "answer": 3,
      "points": 1,
      "explanation": "Bacterial endotoxin is a fever-inducing byproduct that survives heat and persists even after the bacteria that produced it are dead, and it does not cloud a solution or produce any visible sign. Only a validated laboratory test can rule it out, a step regulated manufacturers are required to perform and unregulated sellers are not."
    }
  ]
};
