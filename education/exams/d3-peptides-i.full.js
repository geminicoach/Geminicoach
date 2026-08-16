/* Gemini Education: D3 (Peptides I: Growth, Metabolic & Body Composition) FULL exam bank (all question types).
   PARKED until the portal thread upgrades exam.html to render matching / multi-select /
   word-bank / write-in. The live exam (d3-peptides-i.js) is an interim MC+TF subset
   on the current engine. Swap this in when the new-type renderers + appeal grader ship.
   Schema: education/EXAM-SPEC.md. */
window.GEM_EXAM = {
  slug: "d3-peptides-i",
  title: "Peptides I: Growth, Metabolic & Body Composition",
  contact_hours: 9, ceu_value: 0.9, pass_threshold: 80, placeholder: false,
  draw: { mc: 14, multi: 3, tf: 4, match: 2, fill: 2, free: 0 },
  shuffle: { questions: true, options: true },
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
      "explanation": "A peptide is a short chain of amino acids (roughly 2 to 50 residues, about 200 to 5,000 daltons) joined by peptide bonds, structurally distinct from both a compact small molecule and a large, folded protein. Chain length and structure, not marketing language, define the category."
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
      "explanation": "Most peptides are water soluble and carry charge, which prevents them from diffusing through the lipid membrane the way a compact steroid can, and leaves them vulnerable to the same digestive enzymes that break down dietary protein."
    },
    {
      "id": "d3-c1-tf-1",
      "chapter": 1,
      "type": "tf",
      "q": "Because a randomized controlled trial establishes strong evidence for what a specific peptide molecule does in a controlled human study, that same evidence also verifies the identity, sterility, and purity of any unregulated vial sold online under that molecule's name.",
      "answer": false,
      "points": 1,
      "explanation": "A clinical trial's evidence describes the studied, regulated formulation, not any vial obtained outside that system. Evidence quality about a molecule's effects and confidence in what a specific unverified product actually contains are two separate questions."
    },
    {
      "id": "d3-c1-match-1",
      "chapter": 1,
      "type": "match",
      "q": "Match each peptide world or evidence-ladder rung to its correct description.",
      "pairs": [
        {
          "left": "FDA-approved medicine",
          "right": "Passed preclinical testing, phase 1 through phase 3 human trials, and formal regulatory review before approval for a specific labeled use"
        },
        {
          "left": "Off-label use",
          "right": "A licensed physician prescribes an approved medicine for an indication or dose not on its official label"
        },
        {
          "left": "Grey-market research chemical",
          "right": "Sold online labeled not for human consumption, with no enforced sterility standard or independent verification of contents"
        },
        {
          "left": "Human randomized controlled trial (RCT)",
          "right": "Top rung of the evidence ladder, since randomization and blinding control for placebo effect and chance"
        },
        {
          "left": "Anecdote and vendor marketing",
          "right": "Bottom rung of the evidence ladder, with no built-in control for placebo effect, expectation, or seller conflict of interest"
        }
      ],
      "points": 5
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
      "explanation": "GHRH-R is a class B GPCR that signals through Gs, adenylate cyclase, and cyclic AMP to activate protein kinase A, which both releases stored growth hormone and increases its gene transcription."
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
      "explanation": "Sermorelin behaves close to the natural hormone, cleared from circulation quickly and producing something resembling a single physiologic pulse, while CJC-1295's DAC conjugation extends its presence to days."
    },
    {
      "id": "d3-c2-tf-1",
      "chapter": 2,
      "type": "tf",
      "q": "Tesamorelin is FDA-approved for reducing excess visceral fat specifically in people with HIV-associated lipodystrophy, and this approval does not automatically extend to general visceral fat reduction in people without HIV.",
      "answer": true,
      "points": 1,
      "explanation": "Tesamorelin's approval, under the brand name Egrifta, is specific to HIV-associated lipodystrophy. Use in other populations or for other goals is off-label and was not established by the pivotal trials behind the approval."
    },
    {
      "id": "d3-c2-fill-1",
      "chapter": 2,
      "type": "fill",
      "q": "Native GHRH(1-44) is rapidly cut apart by the enzyme {{1}}, giving it a very short functional half-life. CJC-1295 solves this by chemically attaching modified GRF (1-29) to a Drug Affinity Complex (DAC) that binds circulating {{2}}, extending its presence in the bloodstream from minutes to days.",
      "bank": [
        "dipeptidyl peptidase-4 (DPP-4)",
        "albumin",
        "insulin",
        "somatostatin"
      ],
      "answers": {
        "1": "dipeptidyl peptidase-4 (DPP-4)",
        "2": "albumin"
      },
      "points": 2
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
      "explanation": "The ghrelin receptor is a Gq coupled GPCR that signals through phospholipase C, IP3, DAG, and intracellular calcium, mechanistically distinct from GHRH-R's Gs, cyclic AMP, and PKA pathway, though both converge on the same somatotroph cell."
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
      "explanation": "Raun and colleagues found ipamorelin released growth hormone with potency comparable to GHRP-6 but, unlike GHRP-6 or GHRP-2, did not measurably raise ACTH or cortisol in that animal pharmacology, while hexarelin showed the most spillover of the class."
    },
    {
      "id": "d3-c3-multi-1",
      "chapter": 3,
      "type": "multi",
      "q": "Which statements about the ghrelin-receptor agonist class (GHRP-6, GHRP-2, hexarelin, ipamorelin, MK-677) are accurate? Select all that apply.",
      "options": [
        "All five compounds activate the identical GHS-R receptor",
        "MK-677 is a peptide chain, just like the other four compounds",
        "Hexarelin is generally described as the most potent GH-releasing peptide in the family, but also the one with the most pronounced spillover into ACTH, cortisol, and prolactin",
        "GHRP-6 is the class member most consistently associated with a pronounced appetite-stimulating effect",
        "MK-677 is taken orally because it is a nonpeptide small molecule that survives digestion intact"
      ],
      "answers": [
        0,
        2,
        3,
        4
      ],
      "scoring": "all_or_nothing",
      "points": 1,
      "explanation": "All five act on the same GHS-R. MK-677 is not a peptide, it is a nonpeptide small molecule, which is exactly why it can be taken orally, unlike the four injectable peptides. Hexarelin's high potency and spillover, and GHRP-6's pronounced appetite effect, are both documented in the chapter."
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
      "explanation": "GH binds the growth hormone receptor on hepatocytes, activating JAK2/STAT5 signaling that increases transcription of the IGF-1 gene, and most of GH's growth-promoting reach runs through this liver-derived, systemic IGF-1."
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
      "explanation": "A promising rodent signal led to placebo-controlled human obesity trials in the 2000s, but the human trials did not translate into a result supporting approval, and the program was discontinued."
    },
    {
      "id": "d3-c4-tf-1",
      "chapter": 4,
      "type": "tf",
      "q": "IGF-1 LR3 and IGF-1 DES are engineered to bind insulin-like growth factor binding proteins (IGFBPs) more tightly than native IGF-1, which is the basis of their marketing as longer-lasting and more potent.",
      "answer": false,
      "points": 1,
      "explanation": "LR3 and DES-IGF-1 are engineered with reduced, not increased, IGFBP binding affinity, which leaves a larger free, receptor-active fraction circulating at any given dose."
    },
    {
      "id": "d3-c4-multi-1",
      "chapter": 4,
      "type": "multi",
      "q": "Which statements about the growth hormone (GH) and IGF-1 family covered in the chapter are accurate? Select all that apply.",
      "options": [
        "GH has a direct, IGF-1-independent action on fat and muscle that opposes insulin",
        "AOD-9604 and fragment 176-191 correspond to the C-terminal 176-191 region of the GH molecule",
        "PEG-MGF pegylation shortens MGF's natural circulating presence, making it safer",
        "IGF-1 LR3 and IGF-1 DES are engineered to reduce binding to IGFBPs, increasing the free, receptor-active fraction",
        "GH itself carries the strongest evidence base of the entire family, tested directly in healthy, physically active adults"
      ],
      "answers": [
        0,
        1,
        3,
        4
      ],
      "scoring": "all_or_nothing",
      "points": 1,
      "explanation": "PEG-MGF's pegylation extends, not shortens, the molecule's circulating presence, directly undoing MGF's natural brief, local design, so that option is false. The other four statements match the chapter's account of GH's direct action, AOD-9604's origin, the LR3/DES engineering rationale, and GH's comparatively strong evidence base."
    },
    {
      "id": "d3-c4-free-1",
      "chapter": 4,
      "type": "free",
      "q": "Priya read a vendor page that lists GH, IGF-1 LR3, AOD-9604, and PEG-MGF together as a matched set of growth factor optimizers. Using the chapter's account of the GH-to-IGF-1 axis and the individual evidence base for each compound, explain in an educational, role-neutral way why treating these four as interchangeable is a mistake, and where your explanation must stop and hand off to a clinician.",
      "model": "These four are not a matched set, they sit at very different points along one shared axis and on very different rungs of the evidence ladder. GH itself has the strongest evidence in the group, tested directly in randomized trials in healthy, physically active adults, where it raised lean mass but did not improve strength, alongside real risks like edema. GH's growth-promoting reach runs mostly through a second hormone, IGF-1, made in the liver via the GHR, JAK2, and STAT5 pathway. IGF-1 LR3 is a laboratory tool re-purposed for sale, engineered specifically to escape the IGFBP buffering system that normally holds most circulating IGF-1 in reserve, which raises a real hypoglycemia risk rather than making it more targeted. AOD-9604, corresponding to the C-terminal 176-191 fragment of GH, looked promising in rodents but did not produce a result supporting approval when tested in human obesity trials, and its development program was discontinued. PEG-MGF is a pegylated synthetic mimic of a naturally local, transient muscle-repair signal, with no meaningful published human safety or efficacy data behind the synthetic product at all. Lumping these together erases exactly the distinctions, mechanism, evidence tier, and intended population, that matter most. What this explanation cannot do is tell Priya, or anyone else, whether any of these compounds is safe or appropriate to use; that determination belongs with a licensed clinician evaluating a specific person's health history.",
      "key_points": [
        "GH's growth-promoting effects run mainly through liver-derived IGF-1 (GHR/JAK2/STAT5), not direct muscle action",
        "IGF-1 LR3 escapes IGFBP buffering, raising hypoglycemia risk rather than improving precision",
        "AOD-9604's promising rodent data did not translate into human obesity trial results, and its program was discontinued",
        "PEG-MGF is a synthetic mimic of a locally acting signal with no meaningful human trial data",
        "Role-neutral boundary: mechanism and evidence grade are described, but any use decision belongs with a licensed clinician"
      ],
      "rubric": {
        "pass_threshold": 70,
        "points": [
          {
            "desc": "Explains that GH's growth effects run mainly through liver IGF-1 production, not direct action",
            "weight": 25
          },
          {
            "desc": "Correctly distinguishes each compound's evidence tier (GH strongest, IGF-1 LR3 mechanistic/animal, AOD-9604 discontinued human trials, PEG-MGF no human data)",
            "weight": 30
          },
          {
            "desc": "Identifies that escaping IGFBP buffering is a deregulation risk, not a precision improvement",
            "weight": 20
          },
          {
            "desc": "Keeps an educational, role-neutral framing and defers use decisions to a licensed clinician",
            "weight": 25
          }
        ]
      },
      "points": 5,
      "appeal": true
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
      "explanation": "Myostatin binds ActRIIB, activating Smad2/Smad3, which drives FoxO-dependent transcription that increases muscle protein breakdown while suppressing Akt-driven protein synthesis."
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
      "explanation": "Public trial registry records confirm the studies were stopped based on safety data, with a vascular symptom pattern linked to ACE-031 also trapping activin A alongside myostatin, since ActRIIB was never a myostatin-only receptor."
    },
    {
      "id": "d3-c5-match-1",
      "chapter": 5,
      "type": "match",
      "q": "Match each myostatin-pathway element to its correct role.",
      "pairs": [
        {
          "left": "Myostatin (GDF-8)",
          "right": "TGF-beta superfamily member that acts as a brake on skeletal muscle growth"
        },
        {
          "left": "ActRIIB",
          "right": "Cell-surface receptor myostatin binds, shared with activin and other ligands"
        },
        {
          "left": "Follistatin",
          "right": "The body's own broad-spectrum antagonist that binds myostatin before it reaches ActRIIB"
        },
        {
          "left": "ACE-031",
          "right": "Engineered soluble decoy receptor that intercepts myostatin, and activin A, in the bloodstream"
        },
        {
          "left": "Smad2/Smad3",
          "right": "Intracellular relay proteins activated by ActRIIB binding that drive FoxO-dependent transcription"
        }
      ],
      "points": 5
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
      "explanation": "GLP-1 acts on the pancreas to amplify glucose-dependent insulin secretion and suppress glucagon, on the stomach to slow gastric emptying, and on the brain, in the hypothalamus and brainstem, to reduce appetite."
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
      "explanation": "Semaglutide is a single-receptor GLP-1 agonist, tirzepatide is a dual GLP-1 and GIP agonist, and retatrutide, still investigational, is a triple agonist adding glucagon receptor activity on top of both."
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
      "explanation": "Semaglutide and tirzepatide are supported by large, randomized, placebo-controlled phase 3 trials (STEP and SURMOUNT) and full regulatory approval, a markedly stronger evidence tier than most grey-market peptides discussed elsewhere in the course."
    },
    {
      "id": "d3-c6-tf-1",
      "chapter": 6,
      "type": "tf",
      "q": "Gastrointestinal discomfort (nausea, vomiting, diarrhea, or constipation) was consistently the leading reason participants discontinued treatment across the pivotal trials of semaglutide, tirzepatide, and retatrutide.",
      "answer": true,
      "points": 1,
      "explanation": "Gastrointestinal effects were, by a wide margin, the most commonly reported effects across every trial the chapter covers, tracking directly to slowed gastric emptying and direct activation of brainstem nausea circuits."
    },
    {
      "id": "d3-c6-fill-1",
      "chapter": 6,
      "type": "fill",
      "q": "An incretin is a hormone released from the gut that amplifies insulin secretion beyond what the same rise in blood glucose alone would trigger, a phenomenon called the {{1}}. GLP-1's amplified insulin release is {{2}}-dependent, meaning it engages mainly when blood glucose is already elevated and tapers as glucose returns toward normal.",
      "bank": [
        "incretin effect",
        "glucose",
        "first-pass effect",
        "receptor"
      ],
      "answers": {
        "1": "incretin effect",
        "2": "glucose"
      },
      "points": 2
    },
    {
      "id": "d3-c6-multi-1",
      "chapter": 6,
      "type": "multi",
      "q": "Which of the following are part of the honest risk picture for GLP-1-based medicines described in the chapter? Select all that apply.",
      "options": [
        "Gastrointestinal effects (nausea, vomiting, diarrhea, constipation) are the most commonly reported effects across trials",
        "An increased risk of gallbladder or biliary disease has been documented",
        "A meaningful minority of total weight lost can come from lean tissue rather than fat mass",
        "Human surveillance data have found a clear, consistent rise in serum calcitonin across thousands of treated patients",
        "A rodent-derived thyroid C-cell signal produced a boxed warning and a contraindication for people with a personal or family history of medullary thyroid carcinoma or MEN2"
      ],
      "answers": [
        0,
        1,
        2,
        4
      ],
      "scoring": "all_or_nothing",
      "points": 1,
      "explanation": "Surveillance data following over five thousand human subjects found no consistent rise in serum calcitonin, the reassuring finding that contrasts with the rodent signal, so that option is false. Gastrointestinal effects, gallbladder risk, lean-tissue loss, and the thyroid boxed warning are all part of the chapter's honest risk accounting."
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
      "explanation": "SLU-PP-332 is a small molecule built through conventional medicinal chemistry, not a peptide, despite frequently being bundled onto peptide vendor lists alongside MOTS-c and elamipretide."
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
      "explanation": "Elamipretide showed sustained improvement on a six-minute walk test in the 168-week Barth syndrome open-label extension, but its broader MMPOWER-3 trial in primary mitochondrial myopathy did not meet its overall primary endpoint."
    },
    {
      "id": "d3-c7-tf-1",
      "chapter": 7,
      "type": "tf",
      "q": "MOTS-c's insulin-sensitizing and exercise-mimetic effects have been confirmed in a completed, controlled human clinical trial.",
      "answer": false,
      "points": 1,
      "explanation": "MOTS-c's insulin-sensitizing effects are consistently observed in rodent and cell-culture models, but no completed, controlled human clinical trial has tested administered MOTS-c as a therapeutic. The evidence grade remains preclinical."
    },
    {
      "id": "d3-c7-fill-1",
      "chapter": 7,
      "type": "fill",
      "q": "The mitochondrion's inner membrane is unusually rich in a four-tailed lipid called {{1}}, which anchors and organizes the electron transport chain. Elamipretide (SS-31) binds this lipid directly, while MOTS-c instead activates an enzyme called {{2}}, widely regarded as the cell's master fuel gauge.",
      "bank": [
        "cardiolipin",
        "AMP-activated protein kinase (AMPK)",
        "cholesterol",
        "insulin receptor"
      ],
      "answers": {
        "1": "cardiolipin",
        "2": "AMP-activated protein kinase (AMPK)"
      },
      "points": 2
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
      "explanation": "Kisspeptin acts one step upstream, exciting the GnRH neuron itself through the KISS1 receptor, while gonadorelin is structurally identical to native GnRH and binds the pituitary gonadotrope's GnRH receptor directly."
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
      "explanation": "Hourly pulses matching the natural rhythm fully reestablished normal LH and FSH secretion, while continuous infusion of the same total hormone failed, establishing that pattern, not the presence of the hormone, controls the outcome."
    },
    {
      "id": "d3-c8-tf-1",
      "chapter": 8,
      "type": "tf",
      "q": "A single dose of gonadorelin can be used clinically as a diagnostic test of pituitary gonadotrope function, distinct from its use in pulsatile pump therapy.",
      "answer": true,
      "points": 1,
      "explanation": "A single dose of gonadorelin with blood draws before and after, the GnRH stimulation test, is a well-established diagnostic tool for assessing pituitary responsiveness, separate from pulsatile pump therapy for hypogonadotropic hypogonadism."
    },
    {
      "id": "d3-c8-match-1",
      "chapter": 8,
      "type": "match",
      "q": "Match each tier of the hypothalamic-pituitary-gonadal (HPG) axis to what it does.",
      "pairs": [
        {
          "left": "Hypothalamus",
          "right": "Releases GnRH in pulses roughly every 60 to 120 minutes via the GnRH pulse generator"
        },
        {
          "left": "Anterior pituitary",
          "right": "Gonadotrope cells release LH and FSH in response to correctly patterned GnRH pulses"
        },
        {
          "left": "Gonads",
          "right": "LH and FSH drive testosterone, estradiol, progesterone, and gamete production"
        },
        {
          "left": "Kisspeptin (KNDy neurons)",
          "right": "Excites the GnRH neuron itself through KISS1R, one step upstream of GnRH release"
        }
      ],
      "points": 4
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
      "explanation": "The label shifts legal responsibility toward the buyer and lets the seller avoid the manufacturing, testing, and labeling obligations that apply to products sold for human use."
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
      "explanation": "An FDA-approved medicine has passed New Drug Application review with GMP-inspected manufacturing; a compounded product is prepared by a licensed pharmacist under 503A or 503B rules; an unapproved research chemical has none of that review, inspection, or accountability."
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
      "explanation": "Bacterial endotoxin is a fever-inducing byproduct that survives heat and persists even after the bacteria that produced it are dead, and only a validated laboratory test, not a visual check, can rule it out."
    },
    {
      "id": "d3-c9-multi-1",
      "chapter": 9,
      "type": "multi",
      "q": "Which of the following are examples of risks specifically tied to the absence of regulatory oversight in the grey market, as described in the chapter? Select all that apply.",
      "options": [
        "No validated sterility or batch-by-batch endotoxin testing before a product ships",
        "Independent testing has found some unregulated products do not contain the compound declared on the label",
        "A research use only label legally guarantees the buyer's use of the product is safe",
        "Heavy metal and process-impurity contamination can accumulate with no acute symptom to flag the problem",
        "Compounded GLP-1 products showed measurably higher adverse event reporting odds than approved products in FDA surveillance data"
      ],
      "answers": [
        0,
        1,
        3,
        4
      ],
      "scoring": "all_or_nothing",
      "points": 1,
      "explanation": "A research use only label is a liability shield, not a safety guarantee, so that option is false. The other four are documented risks or findings described in the chapter: sterility gaps, label mismatches from independent testing, silent heavy-metal accumulation, and elevated adverse-event reporting odds even in the more regulated compounded tier."
    },
    {
      "id": "d3-c9-free-1",
      "chapter": 9,
      "type": "free",
      "q": "Deshawn has built a strong understanding of receptor mechanisms across this course and is now weighing whether that knowledge is enough to safely source and use an unregulated peptide on his own. Using the chapter's three-tier framework and the evidence on sterility, identity, and contamination, explain in an educational, role-neutral way why mechanistic understanding does not resolve the sourcing question, and where your explanation must stop.",
      "model": "Deshawn's mechanistic literacy is genuinely valuable. It lets him evaluate a claim's plausibility and recognize overconfident marketing language. But understanding a receptor pathway answers a biology question, not a manufacturing or legal one. A peptide product occupies one of three structurally different tiers: an FDA-approved medicine with New Drug Application review and GMP-inspected manufacturing, a compounded product prepared by a licensed pharmacist under 503A or 503B rules, or an unapproved research chemical with no review, no inspection, and no batch record any regulator has ever seen. A research use only label is a liability shield, not a safety certification. Even inside the more regulated compounded tier, FDA surveillance data have shown measurably higher rates of contamination and preparation errors relative to approved medicines; the unregulated research-chemical tier, with no oversight at all, would be expected to carry at least as much risk. Independent testing of unregulated products has repeatedly found some do not contain the labeled compound at the labeled amount, and sterility failures like bacterial endotoxin contamination produce no visible sign and require validated laboratory testing to detect. None of Deshawn's understanding of GHRH-R or GLP-1 signaling can verify what is actually inside a specific vial he might order. That verification requires manufacturing oversight and testing infrastructure no individual buyer can replicate, and any decision about sourcing or using such a product, for himself or anyone else, belongs with a licensed clinician and a regulated supply chain, not with mechanism alone.",
      "key_points": [
        "Mechanistic understanding answers a biology question, not a manufacturing or legal one",
        "The three-tier framework (approved medicine, compounded product, unapproved research chemical) differs structurally in oversight",
        "A research use only label is a liability shield, not a safety or purity guarantee",
        "Sterility and identity failures (endotoxin, mislabeling) are often invisible without laboratory testing",
        "Role-neutral boundary: sourcing and use decisions belong with a licensed clinician and a regulated supply chain"
      ],
      "rubric": {
        "pass_threshold": 70,
        "points": [
          {
            "desc": "Distinguishes mechanistic and biology knowledge from manufacturing and sourcing verification",
            "weight": 25
          },
          {
            "desc": "Correctly describes the three-tier oversight framework",
            "weight": 25
          },
          {
            "desc": "Explains that sterility and identity failures are frequently undetectable without laboratory testing",
            "weight": 25
          },
          {
            "desc": "Keeps role-neutral framing and defers sourcing and use decisions to a clinician and regulated supply chain",
            "weight": 25
          }
        ]
      },
      "points": 5,
      "appeal": true
    }
  ]
};
