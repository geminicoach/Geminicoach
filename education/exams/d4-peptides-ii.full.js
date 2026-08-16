/* Gemini Education: D4 (Peptides II: Repair, Immune, Neuro & Systemic) FULL exam bank (all question types).
   PARKED until the portal thread upgrades exam.html to render matching / multi-select /
   word-bank / write-in. The live exam (d4-peptides-ii.js) is an interim MC+TF subset
   on the current engine. Swap this in when the new-type renderers + appeal grader ship.
   Schema: education/EXAM-SPEC.md. */
window.GEM_EXAM = {
  slug: "d4-peptides-ii",
  title: "Peptides II: Repair, Immune, Neuro & Systemic",
  contact_hours: 9, ceu_value: 0.9, pass_threshold: 80, placeholder: false,
  draw: { mc: 10, multi: 4, tf: 4, match: 3, fill: 3, free: 0 },
  shuffle: { questions: true, options: true },
  questions: [
    {
      "id": "d4-c1-mc-1",
      "chapter": 1,
      "type": "mc",
      "q": "A learner insists that a peptide is really just a small molecule with a fancy name, since both are compact chemical products. Which response is best grounded in Chapter 1?",
      "options": [
        "A peptide is a short chain of roughly two to fifty amino acids, sitting structurally between a compact small molecule and a large, folded protein",
        "A peptide is defined mainly by whether a vendor's label calls it one",
        "A peptide is any hormone that acts on a receptor inside the cell rather than on the cell surface",
        "A peptide is defined by whether it has completed human clinical trials"
      ],
      "answer": 0,
      "points": 1,
      "explanation": "A peptide sits structurally between a compact small molecule such as aspirin and a large, folded protein such as an antibody, roughly two to fifty amino acids long. This module's own compounds span that range, from three-residue GHK-Cu to forty-three-residue thymosin beta-4."
    },
    {
      "id": "d4-c1-tf-1",
      "chapter": 1,
      "type": "tf",
      "q": "A rodent study demonstrating a peptide's mechanism sits on the same evidence rung as a human randomized controlled trial testing the same claim, because both are peer-reviewed science.",
      "answer": false,
      "points": 1,
      "explanation": "A rodent or cell-culture result is genuinely useful evidence, but it sits several rungs below a human randomized controlled trial on the evidence ladder. Species differences in metabolism, receptor distribution, and whole-body physiology mean an animal finding is not interchangeable with a demonstrated human effect."
    },
    {
      "id": "d4-c1-fill-1",
      "chapter": 1,
      "type": "fill",
      "q": "A peptide sits structurally between a compact {{1}}, generally under about 500 daltons and often taken as a pill, and a large, folded {{2}}, such as an antibody or growth hormone, that usually must be injected.",
      "bank": [
        "small molecule",
        "protein",
        "steroid",
        "enzyme"
      ],
      "answers": {
        "1": "small molecule",
        "2": "protein"
      },
      "points": 2
    },
    {
      "id": "d4-c2-mc-1",
      "chapter": 2,
      "type": "mc",
      "q": "A training partner tells Lars that BPC-157's tendon-healing effect is \"well established\" because of the extensive published research. Using Chapter 2's evidence review, what is the accurate correction?",
      "options": [
        "The claim is accurate; several large human randomized trials confirm BPC-157 accelerates tendon healing",
        "BPC-157 has been approved by the FDA for tendon repair specifically because of its rodent data",
        "BPC-157's tendon and ligament healing claims rest almost entirely on rodent and isolated-cell studies; no published controlled human trial has confirmed the effect in a person",
        "The research behind BPC-157 is entirely anecdotal, with no peer-reviewed studies of any kind"
      ],
      "answer": 2,
      "points": 1,
      "explanation": "According to Gwyer and colleagues (2019), every tendon, ligament, and muscle healing study on BPC-157 to date has been performed in small rodent models, and human efficacy remains unconfirmed, even though the underlying mechanistic research is real and peer-reviewed."
    },
    {
      "id": "d4-c2-tf-1",
      "chapter": 2,
      "type": "tf",
      "q": "Because BPC-157 and thymosin beta-4 promote angiogenesis and cell proliferation, the same pro-growth signaling that helps a torn tendon rebuild its blood supply is mechanistically similar to processes a growing tumor depends on, a theoretical concern that long-term controlled human safety data has not yet resolved.",
      "answer": true,
      "points": 1,
      "explanation": "Angiogenesis and cell proliferation are general biological programs, not tissue-specific switches, and they are also the programs a growing tumor depends on to expand its own blood supply. No controlled long-term human safety data exists to confirm or rule out this theoretical concern for either compound."
    },
    {
      "id": "d4-c2-match-1",
      "chapter": 2,
      "type": "match",
      "q": "Match each claim about BPC-157 or thymosin beta-4 (TB-500) to the evidence grade it actually earns.",
      "pairs": [
        {
          "left": "BPC-157 upregulates growth hormone receptor (GHR) expression in isolated rat Achilles tendon fibroblasts",
          "right": "Animal-only (preclinical) evidence"
        },
        {
          "left": "Thymosin beta-4 binds G-actin (globular actin) in a 1:1 ratio and regulates actin filament assembly",
          "right": "Established basic cell biology, independent of any injectable product's clinical effect"
        },
        {
          "left": "Thymosin beta-4-pretreated endothelial progenitor cells improved 6-minute walking distance in heart attack patients",
          "right": "Small human pilot data (n=10), narrow cardiac context"
        },
        {
          "left": "BPC-157 accelerates tendon and ligament healing in humans",
          "right": "Unproven claim; no published controlled human trial supports it"
        }
      ],
      "points": 4
    },
    {
      "id": "d4-c3-mc-1",
      "chapter": 3,
      "type": "mc",
      "q": "Mira finds \"GHK-Cu\" on both a firming serum's ingredient list and an injectable product a longevity forum discusses as whole-body regeneration. What does Chapter 3's evidence review actually show about these two uses?",
      "options": [
        "Topical GHK-Cu applied to skin has real human trial data supporting firmness and fine-line claims, while injectable or systemic \"regenerative\" claims rest mostly on a single transient rodent joint study and unrelated rodent lung-injury models",
        "GHK-Cu's evidence is identical regardless of route, since it is the same molecule either way",
        "Injectable GHK-Cu has stronger human trial evidence than the topical form",
        "Neither topical nor injectable GHK-Cu has any supporting evidence at all"
      ],
      "answer": 0,
      "points": 1,
      "explanation": "The same GHK-Cu chelate carries a genuinely different evidence grade depending on route. Topical application to skin has real randomized human trial data behind firmness and fine-line claims, while injectable, systemic regeneration claims rest on a rat ACL study whose benefit did not outlast the injection schedule, plus unrelated rodent lung-injury models."
    },
    {
      "id": "d4-c3-multi-1",
      "chapter": 3,
      "type": "multi",
      "q": "Which of the following statements about GHK-Cu are accurate per Chapter 3? Select all that apply.",
      "options": [
        "Topical GHK-Cu has real, randomized human trial data supporting firmness, elasticity, and fine-line improvement on aged skin",
        "Copper is a required cofactor for collagen-crosslinking enzymes such as lysyl oxidase",
        "A meaningful share of the foundational human skin literature on GHK-Cu comes from researchers affiliated with a company that also sells copper-peptide products",
        "Injectable GHK-Cu has been shown in a large, placebo-controlled human trial to sustain improved ligament graft strength",
        "GHK-Cu's rat anterior cruciate ligament (ACL) injection study found the mechanical benefit disappeared by twelve weeks, six weeks after injections stopped"
      ],
      "answers": [
        0,
        1,
        2,
        4
      ],
      "scoring": "all_or_nothing",
      "points": 1,
      "explanation": "Topical GHK-Cu has real human trial support and a solid copper-cofactor mechanism, alongside a research base with real commercial ties worth weighing. The injectable ACL study showed only a transient effect that did not persist past the dosing schedule, so no large, sustained placebo-controlled human benefit exists."
    },
    {
      "id": "d4-c4-mc-1",
      "chapter": 4,
      "type": "mc",
      "q": "KPV is the C-terminal tripeptide of alpha-melanocyte-stimulating hormone (alpha-MSH). How does it actually produce its anti-inflammatory effect?",
      "options": [
        "KPV binds melanocortin receptor 1 (MC1R) with high affinity, which is why it also produces tanning",
        "KPV works by physically disrupting bacterial cell membranes, the same mechanism LL-37 uses",
        "KPV lacks the structural motif to bind melanocortin receptors with meaningful affinity; it instead appears to act inside the cell to dampen NF-kB (nuclear factor kappa B) activation and downstream pro-inflammatory cytokine transcription",
        "KPV requires binding the growth hormone receptor to sensitize tendon fibroblasts"
      ],
      "answer": 2,
      "points": 1,
      "explanation": "KPV lacks the sequence needed to bind any of the five known melanocortin receptors, which is why it does not meaningfully affect pigmentation the way its parent hormone alpha-MSH does. Its anti-inflammatory action instead runs through a melanocortin-receptor-independent route centered on suppressing NF-kB activation inside the cell."
    },
    {
      "id": "d4-c4-multi-1",
      "chapter": 4,
      "type": "multi",
      "q": "Which of the following statements about KPV and LL-37 are accurate per Chapter 4? Select all that apply.",
      "options": [
        "KPV retains most of alpha-MSH's anti-inflammatory capacity while producing essentially none of its pigmentary effect",
        "LL-37 is cleaved from its precursor hCAP-18, most commonly by the enzyme proteinase 3",
        "LL-37 acts only as a direct microbial membrane disruptor and plays no role in wound healing or immune signaling",
        "Elevated LL-37 is documented in psoriatic skin lesions, not absent from them",
        "KPV's anti-inflammatory action requires binding melanocortin receptor 1 (MC1R)"
      ],
      "answers": [
        0,
        1,
        3
      ],
      "scoring": "all_or_nothing",
      "points": 1,
      "explanation": "KPV's melanocortin-independent action and LL-37's precursor cleavage are both accurate. LL-37 is genuinely pleiotropic, driving wound healing and immune signaling alongside microbial killing, and it is elevated, not absent, in psoriatic lesions, so both distractors describing it as single-purpose or receptor-dependent for KPV are false."
    },
    {
      "id": "d4-c4-free-1",
      "chapter": 4,
      "type": "free",
      "q": "Tomasz has read that KPV is \"gentle\" because it calms inflammation, and that LL-37 is a bit riskier because it is a more aggressive antimicrobial peptide with a documented disease link. Using the mechanism, the evidence-versus-safety distinction, and the double-edge concept from this chapter, explain in an educational, role-neutral way why that tidy \"KPV is safe, LL-37 is risky\" framing does not hold up, and state where your explanation must stop and hand off to a clinician.",
      "model": "Tomasz's framing mixes up two different axes: how much a peptide has been tested, and how risky its mechanism actually is. KPV's evidence base is thin specifically because it has barely been tested in humans at all, not because its mechanism looks dangerous; its NF-kB-suppressing action is real and well characterized in animal models across gut, skin, eye, and airway inflammation, but no controlled human trial has established a safe, effective dose for any condition. That same NF-kB-suppressing action, however, blunts a signal the immune system also relies on to fight real infection, so KPV is not risk-free simply because it is described as gentle. LL-37's disease associations, meanwhile, are documented precisely because it has been studied so extensively, in exactly the tissues where things can go wrong: the same amphipathic structure that lets it kill microbes and drive wound healing is implicated, when its release is dysregulated, in psoriasis and related inflammatory disease through a self-DNA, type I interferon mechanism. More study has revealed more nuance for LL-37, not more inherent danger relative to KPV. What this explanation cannot do is tell Tomasz, or anyone in his gut-health or biohacking forums, whether a specific product or dose is safe for a specific person. That judgment, for either peptide, belongs to a qualified clinician who can weigh an individual's actual health history against a research base that remains mechanism-heavy and human-trial-thin for both compounds.",
      "key_points": [
        "KPV's thin evidence reflects how little it has been tested in humans, not a mechanism known to be dangerous",
        "KPV's NF-kB suppression could blunt a signal the immune system needs against real infection",
        "LL-37's documented disease associations exist because it has been studied extensively, not because it is inherently more dangerous than KPV",
        "LL-37's double edge (wound healing versus dysregulated disease signaling) means more evidence, not simply more risk",
        "Role-neutral boundary: mechanism and evidence explain the biology; an individual's safety judgment belongs to a qualified clinician"
      ],
      "rubric": {
        "pass_threshold": 70,
        "points": [
          {
            "desc": "Separates evidence depth from mechanism-based safety for both peptides",
            "weight": 30
          },
          {
            "desc": "Explains KPV's NF-kB suppression and its trade-off with fighting real infection",
            "weight": 20
          },
          {
            "desc": "Explains LL-37's double edge, wound healing versus dysregulated disease signaling",
            "weight": 25
          },
          {
            "desc": "Keeps an educational, role-neutral framing and defers individual safety judgment to a clinician",
            "weight": 25
          }
        ]
      },
      "points": 5,
      "appeal": true
    },
    {
      "id": "d4-c5-mc-1",
      "chapter": 5,
      "type": "mc",
      "q": "What does Chapter 5 identify as thymosin alpha-1's mechanism of action?",
      "options": [
        "Thymosin alpha-1 engages toll-like receptors on dendritic cells and a tolerogenic tryptophan-catabolism pathway, promoting T-cell maturation and balanced immune signaling rather than acting through one single dedicated hormone receptor",
        "Thymosin alpha-1 acts through the androgen receptor inside target cells",
        "Thymosin alpha-1 binds G-actin monomers to regulate the actin cytoskeleton",
        "Thymosin alpha-1 physically disrupts microbial cell membranes the way LL-37 does"
      ],
      "answer": 0,
      "points": 1,
      "explanation": "According to King and Tuthill (2016), thymosin alpha-1 acts through toll-like receptors expressed on dendritic cells, and according to Stincardini and colleagues (2018), it also activates a tolerogenic tryptophan-catabolism pathway. No single, dedicated thymosin alpha-1 receptor has been definitively identified."
    },
    {
      "id": "d4-c5-mc-2",
      "chapter": 5,
      "type": "mc",
      "q": "A vendor page uses the word \"thymosin\" for a repair product without specifying alpha or beta. What is the accurate distinction Chapter 5 draws?",
      "options": [
        "Thymosin alpha-1 and thymosin beta-4 are simply two dosage strengths of the identical molecule",
        "Thymosin beta-4 is the immune modulator and thymosin alpha-1 is the tissue-repair peptide behind TB-500",
        "Thymosin alpha-1 (a 28-amino-acid immune modulator acting on dendritic cells and T-cell maturation) and thymosin beta-4 (a 43-amino-acid actin-binding peptide behind TB-500, tied to tissue repair) are structurally and functionally distinct molecules that share a name only because both were isolated from the same original crude thymic extract; alpha is immune, beta is repair",
        "Both peptides are structurally identical; only their marketed brand names differ"
      ],
      "answer": 2,
      "points": 1,
      "explanation": "Thymosin alpha-1 and thymosin beta-4 share a name only because both were isolated from the same original crude thymic extract decades ago. They differ in size, gene family, receptor engagement, and intended use: alpha modulates T-cell maturation and dendritic-cell signaling, beta binds G-actin to support cell migration in tissue repair."
    },
    {
      "id": "d4-c5-tf-1",
      "chapter": 5,
      "type": "tf",
      "q": "Because thymosin alpha-1 and thymosin beta-4 were both isolated from the same original crude thymic extract decades ago, they share a name only, not a mechanism, receptor family, or intended use.",
      "answer": true,
      "points": 1,
      "explanation": "The two peptides belong to separate gene families, alpha-thymosins and beta-thymosins, with different sizes, different binding partners, and different downstream biology, immune signaling for alpha-1 and cytoskeletal regulation for beta-4. The shared name traces back only to a shared point of historical extraction."
    },
    {
      "id": "d4-c5-match-1",
      "chapter": 5,
      "type": "match",
      "q": "Match each thymic peptide to its actual evidence profile.",
      "pairs": [
        {
          "left": "Thymosin alpha-1 (Zadaxin)",
          "right": "Approved or registered in over thirty countries with multiple large randomized controlled trials, though evidence in newer indications like sepsis is genuinely mixed"
        },
        {
          "left": "Thymulin",
          "right": "A well-characterized, zinc-dependent endogenous hormone; solid physiology, but thin exogenous therapeutic evidence in humans"
        },
        {
          "left": "Thymalin",
          "right": "A regionally studied thymic polypeptide complex with a real but narrow, less internationally replicated evidence base"
        },
        {
          "left": "Thymosin beta-4 (TB-500)",
          "right": "A separate beta-thymosin family peptide tied to tissue repair, not immune modulation, despite the shared name"
        }
      ],
      "points": 4
    },
    {
      "id": "d4-c6-mc-1",
      "chapter": 6,
      "type": "mc",
      "q": "What does the strongest independent evidence review say about cerebrolysin?",
      "options": [
        "Cerebrolysin is a manufactured mixture of peptide fragments from porcine brain tissue with the largest human trial base of the four neuro compounds in this chapter; a Cochrane review found little to no benefit on survival and a signal of increased non-fatal serious adverse events at higher doses",
        "Cerebrolysin has never been tested in a randomized controlled human trial",
        "A Cochrane systematic review of cerebrolysin trials for stroke found a strong, consistent survival benefit with no safety concerns",
        "Cerebrolysin is a single, defined 28-amino-acid peptide, unlike the other three compounds in this chapter"
      ],
      "answer": 0,
      "points": 1,
      "explanation": "Cerebrolysin, a manufactured mixture of peptide fragments and amino acids from porcine brain tissue, carries the largest and most rigorously reviewed human trial base of the four compounds in this chapter. A Cochrane systematic review found little to no benefit on survival, alongside a signal of increased non-fatal serious adverse events at higher doses."
    },
    {
      "id": "d4-c6-fill-1",
      "chapter": 6,
      "type": "fill",
      "q": "Semax is a fragment of {{1}}, stripped of the parent hormone's adrenal-stimulating activity, while selank is a fragment of {{2}}, an immune-system peptide, proposed to inhibit enzymatic breakdown of the body's own enkephalins.",
      "bank": [
        "adrenocorticotropic hormone (ACTH)",
        "tuftsin",
        "thymulin",
        "cerebrolysin"
      ],
      "answers": {
        "1": "adrenocorticotropic hormone (ACTH)",
        "2": "tuftsin"
      },
      "points": 2
    },
    {
      "id": "d4-c6-multi-1",
      "chapter": 6,
      "type": "multi",
      "q": "Which statements about the four neuro and cognitive peptides in Chapter 6 are accurate? Select all that apply.",
      "options": [
        "Semax's neurotrophic mechanism is drawn mainly from rat frontal cortex transcript studies",
        "Selank has completed a more advanced stage of Russian regulatory clinical testing than semax",
        "DSIP's human data comes from large, modern, multi-site randomized trials completed within the last decade",
        "Cerebrolysin is a manufactured mixture of peptide fragments and amino acids, not a single defined peptide",
        "A Cochrane review found cerebrolysin significantly reduces all-cause mortality in stroke with no safety signal"
      ],
      "answers": [
        0,
        1,
        3
      ],
      "scoring": "all_or_nothing",
      "points": 1,
      "explanation": "Semax's mechanism is rodent-derived, selank has a more advanced Russian regulatory trial history than semax, and cerebrolysin is a mixture rather than one defined peptide. DSIP's human data is old and small, not modern and large, and the Cochrane review found little to no survival benefit, not a strong one."
    },
    {
      "id": "d4-c7-mc-1",
      "chapter": 7,
      "type": "mc",
      "q": "How does bremelanotide's regulatory and evidence status compare with melanotan II's?",
      "options": [
        "Both bremelanotide and melanotan II are FDA-approved medicines with equivalent human trial support",
        "Melanotan II is the FDA-approved compound, while bremelanotide remains an unapproved research chemical",
        "Bremelanotide (Vyleesi) is an FDA-approved MC4R/MC3R agonist supported by randomized phase 3 trials for a specific diagnosis, while melanotan II is an unapproved, non-selective melanocortin agonist sold in the grey market with no completed controlled human trial behind its tanning or libido claims and a documented case-report association with darkening pigmented lesions and melanoma",
        "Bremelanotide and melanotan II are chemically identical compounds sold under two different brand names"
      ],
      "answer": 2,
      "points": 1,
      "explanation": "Bremelanotide (Vyleesi) is FDA-approved for acquired, generalized hypoactive sexual desire disorder, supported by the randomized, placebo-controlled RECONNECT phase 3 trials. Melanotan II has never been approved anywhere, and according to Hjuler and Lorentzen (2013), a published case report links its use to darkening pigmented lesions and a confirmed melanoma diagnosis."
    },
    {
      "id": "d4-c7-tf-1",
      "chapter": 7,
      "type": "tf",
      "q": "Bremelanotide is accurately described as \"a Viagra for women,\" since both drugs work through the identical peripheral mechanism of increasing genital blood flow.",
      "answer": false,
      "points": 1,
      "explanation": "Sildenafil (Viagra) is a PDE5 inhibitor acting peripherally on genital blood vessels to support blood flow once desire is already present. Bremelanotide acts centrally in the brain on MC4R and MC3R circuits implicated in desire itself, a fundamentally different mechanism aimed at a different clinical problem."
    },
    {
      "id": "d4-c7-match-1",
      "chapter": 7,
      "type": "match",
      "q": "Match each melanocortin receptor to the tissue and function it is primarily associated with.",
      "pairs": [
        {
          "left": "MC1R",
          "right": "Melanocytes; pigmentation switch and local anti-inflammatory tone"
        },
        {
          "left": "MC2R",
          "right": "Adrenal cortex; the ACTH receptor driving hypothalamic-pituitary-adrenal (HPA) axis cortisol output"
        },
        {
          "left": "MC3R / MC4R",
          "right": "Hypothalamus; energy balance, appetite and satiety, and central sexual arousal circuits"
        },
        {
          "left": "MC5R",
          "right": "Exocrine glands; sebaceous and lacrimal secretion"
        }
      ],
      "points": 4
    },
    {
      "id": "d4-c8-mc-1",
      "chapter": 8,
      "type": "mc",
      "q": "Among epithalon, humanin, ARA-290 (cibinetide), and vasoactive intestinal peptide (VIP), which compound carries the strongest human clinical evidence, and why?",
      "options": [
        "ARA-290 (cibinetide), engineered from erythropoietin to bind the innate repair receptor rather than the classical erythropoietin receptor, is the only one of the four compounds in this chapter with published, controlled phase 2 human trial data, showing reduced neuropathic pain and increased corneal nerve fiber density in sarcoidosis patients",
        "Humanin has the strongest human evidence of the four, backed by controlled phase 2 trials",
        "All four compounds in this chapter, epithalon, humanin, ARA-290, and VIP, sit at exactly the same evidence grade",
        "Vasoactive intestinal peptide (VIP) has been tested in large, multicenter, placebo-controlled phase 3 trials"
      ],
      "answer": 0,
      "points": 1,
      "explanation": "According to van Velzen and colleagues (2014), two published phase 2 trials found ARA-290 (cibinetide) reduced neuropathic pain scores and increased corneal nerve fiber density in sarcoidosis patients, the strongest human evidence tier represented among epithalon, humanin, ARA-290, and VIP in this chapter."
    },
    {
      "id": "d4-c8-fill-1",
      "chapter": 8,
      "type": "fill",
      "q": "Epithalon is proposed to activate {{1}}, the enzyme that rebuilds shortened telomeres, based on cell-culture and rodent work from largely one research group. Humanin is a {{2}}-derived peptide encoded within a small loop of DNA distinct from the cell nucleus, proposed to block programmed cell death in stressed tissue.",
      "bank": [
        "telomerase",
        "mitochondrial",
        "ribosomal",
        "lysosomal"
      ],
      "answers": {
        "1": "telomerase",
        "2": "mitochondrial"
      },
      "points": 2
    },
    {
      "id": "d4-c9-mc-1",
      "chapter": 9,
      "type": "mc",
      "q": "What does a \"research use only, not for human consumption\" label actually accomplish, according to Chapter 9?",
      "options": [
        "It certifies that a product is sterile and accurately dosed",
        "It is a piece of regulatory language that shifts legal exposure toward the buyer and says nothing about a specific vial's sterility, identity, or purity",
        "It means the product has completed FDA safety review for laboratory use only",
        "It is purely decorative boilerplate and carries no legal function at all"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "A research use only label shifts legal exposure toward the buyer and lets the seller avoid the manufacturing, testing, and labeling obligations that would otherwise apply to a product intended for human use. It certifies nothing about what is actually inside the vial."
    },
    {
      "id": "d4-c9-multi-1",
      "chapter": 9,
      "type": "multi",
      "q": "Which statements about grey-market peptide sourcing are accurate per Chapter 9? Select all that apply.",
      "options": [
        "A \"research use only\" label certifies a product's sterility and purity",
        "Independent testing found bacterial endotoxin in every tested sample of injectable peptide products from illegal online pharmacies",
        "The 2012 fungal meningitis outbreak traced to contaminated injections occurred at an unregulated overseas research-chemical seller, not a licensed pharmacy",
        "Independent chemical analysis found some peptide products contained more total milligram content than labeled while containing a much smaller fraction of correctly assembled peptide than claimed",
        "Careful reconstitution technique, such as using sterile water and fresh needles, eliminates every risk associated with unregulated peptide sourcing"
      ],
      "answers": [
        1,
        3
      ],
      "scoring": "all_or_nothing",
      "points": 1,
      "explanation": "Independent testing has documented universal endotoxin contamination and mismatched purity or content versus the label in unregulated peptide products. The 2012 outbreak actually occurred inside a licensed, inspected compounding pharmacy, and careful handling technique reduces only part of the risk, it cannot replace missing sterility, identity, or purity testing."
    },
    {
      "id": "d4-c9-free-1",
      "chapter": 9,
      "type": "free",
      "q": "Inga notices that two compounds in this module, bremelanotide and thymosin alpha-1, are genuinely approved medicines somewhere in the world, and wonders whether that means the rest of this module's compound list is probably closer to legitimate than earlier chapters suggested. Using the four-tier oversight framework and the sterility and identity findings from this chapter, explain in an educational, role-neutral way why her reasoning needs correcting, and where your explanation must stop and hand off to a clinician or qualified legal counsel.",
      "model": "Inga's observation is factually correct: bremelanotide holds a genuine FDA approval, and thymosin alpha-1 holds genuine regulatory approvals in more than thirty countries, each backed by real toxicology and clinical development programs. Where her reasoning needs correcting is the leap from two genuine exceptions to a general upgrade in confidence about the other fourteen compounds this module covers. This module's compounds actually span four separate tiers of oversight: an FDA-approved medicine, a compound approved elsewhere but not in the United States, a compounded product prepared by a licensed pharmacist, and an unapproved research chemical, the tier that holds nearly the entire remaining catalog, including BPC-157, thymosin beta-4, GHK-Cu, KPV, LL-37, semax, selank, DSIP, cerebrolysin, melanotan II, epithalon, humanin, ARA-290, and VIP. A vendor page selling melanotan II next to bremelanotide in similarly confident language is not evidence that melanotan II shares bremelanotide's regulatory status, it is evidence that marketing language is not a reliable signal of regulatory status at all. That gap matters practically, not just administratively: independent testing of injectable peptide products sold outside the approved pharmaceutical channel has found detectable bacterial endotoxin in every sample tested, and separate chemical analysis has found peptide purity and labeled milligram content diverging sharply from what packaging claims. None of that testing infrastructure exists for the research-chemical tier the way it does for an approved medicine. What this explanation cannot do is tell Inga, or any specific reader, whether any given product's legal status where they live, or its safety for their own situation, has been resolved. Those are separate questions for a qualified clinician and, where legal status is the concern, qualified legal counsel, not a conclusion this course can extend from two genuine regulatory exceptions to the rest of the list.",
      "key_points": [
        "Bremelanotide and thymosin alpha-1 are genuine regulatory exceptions with real approval and trial data behind them",
        "Most of this module's remaining compounds sit in the fourth, unapproved research-chemical tier with no equivalent review",
        "Confident, similar-sounding marketing language across products is not evidence of shared regulatory status",
        "Independent testing has found universal endotoxin contamination and mislabeled purity or content in unregulated peptide products",
        "Role-neutral boundary: individual legal and safety judgments belong to qualified clinicians and legal counsel, not this course"
      ],
      "rubric": {
        "pass_threshold": 70,
        "points": [
          {
            "desc": "Correctly affirms bremelanotide's and thymosin alpha-1's genuine approval status",
            "weight": 20
          },
          {
            "desc": "Explains the four-tier oversight framework and where most of the module's compounds actually sit",
            "weight": 25
          },
          {
            "desc": "Cites the sterility/endotoxin and identity/purity findings as concrete evidence the exception does not generalize",
            "weight": 30
          },
          {
            "desc": "Keeps an educational, role-neutral framing and defers legal and safety judgment to qualified clinicians and counsel",
            "weight": 25
          }
        ]
      },
      "points": 5,
      "appeal": true
    }
  ]
};
