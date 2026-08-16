/* Gemini Education: D4 (Peptides II: Repair, Immune, Neuro & Systemic) FINAL EXAM, interim live version.
   Current exam.html renders MC and free-response only, so this ships 20 MC + 6 true/false
   (as 2-option MC), drawing 20 per attempt, options shuffled, 80% to pass. 26 in the pool.
   Full bank (matching, word-bank, multi-select, write-ins) is in d4-peptides-ii.full.js. */
window.GEM_EXAM = {
  slug: "d4-peptides-ii",
  title: "Peptides II: Repair, Immune, Neuro & Systemic",
  contact_hours: 9, ceu_value: 0.9, pass_threshold: 80, draw_mc: 20, placeholder: false,
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
      "id": "d4-c1-mc-2",
      "chapter": 1,
      "type": "mc",
      "q": "A learner assumes a fast-acting peptide nasal spray must work the same slow, gene-transcription way an oral steroid hormone does. Why is that assumption wrong, per Chapter 1's account of peptide signaling?",
      "options": [
        "Because peptides are lipid-soluble and diffuse through the cell membrane exactly like steroids",
        "Because most peptides are hydrophilic and act at a surface receptor such as a G protein-coupled receptor (GPCR), triggering a fast intracellular relay within seconds to minutes rather than the slower genomic route steroids use",
        "Because peptides cannot signal a cell at all without first entering the nucleus",
        "Because peptides only produce an effect when delivered as an injection, never as a nasal spray"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "Most peptides are hydrophilic and cannot diffuse through a cell membrane the way a lipid-soluble steroid can. Instead they act at a surface receptor, often a G protein-coupled receptor (GPCR), which triggers a fast intracellular relay within seconds to minutes, a different clock than the slower, gene-transcription route a steroid uses."
    },
    {
      "id": "d4-c1-tf-1",
      "chapter": 1,
      "type": "mc",
      "q": "A rodent study demonstrating a peptide's mechanism sits on the same evidence rung as a human randomized controlled trial testing the same claim, because both are peer-reviewed science.",
      "options": [
        "True",
        "False"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "A rodent or cell-culture result is genuinely useful evidence, but it sits several rungs below a human randomized controlled trial on the evidence ladder. Species differences in metabolism, receptor distribution, and whole-body physiology mean an animal finding is not interchangeable with a demonstrated human effect."
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
      "id": "d4-c2-mc-2",
      "chapter": 2,
      "type": "mc",
      "q": "What is the documented cell-biology mechanism behind thymosin beta-4, the peptide marketed as TB-500?",
      "options": [
        "Thymosin beta-4 works by binding a melanocortin receptor to reduce inflammation",
        "Thymosin beta-4 works by inhibiting NF-kB translocation inside immune cells",
        "Thymosin beta-4 is a steroid that diffuses through the cell membrane to alter gene transcription",
        "Thymosin beta-4 binds free G-actin monomers in a 1-to-1 ratio, buffering the pool available for polymerization into F-actin, a mechanism that governs the cell migration relevant to wound repair"
      ],
      "answer": 3,
      "points": 1,
      "explanation": "Thymosin beta-4 is a naturally occurring, highly conserved 43-amino-acid peptide that binds G-actin (globular actin) in a 1-to-1 ratio, buffering the pool of free actin available for polymerization into F-actin, the structural change that lets endothelial cells, keratinocytes, and progenitor cells migrate toward a wound."
    },
    {
      "id": "d4-c2-tf-1",
      "chapter": 2,
      "type": "mc",
      "q": "Because BPC-157 and thymosin beta-4 promote angiogenesis and cell proliferation, the same pro-growth signaling that helps a torn tendon rebuild its blood supply is mechanistically similar to processes a growing tumor depends on, a theoretical concern that long-term controlled human safety data has not yet resolved.",
      "options": [
        "True",
        "False"
      ],
      "answer": 0,
      "points": 1,
      "explanation": "Angiogenesis and cell proliferation are general biological programs, not tissue-specific switches, and they are also the programs a growing tumor depends on to expand its own blood supply. No controlled long-term human safety data exists to confirm or rule out this theoretical concern for either compound."
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
      "id": "d4-c3-mc-2",
      "chapter": 3,
      "type": "mc",
      "q": "Why does GHK-Cu's mechanism depend on delivering copper in a chelated, chaperoned form rather than as a free ion?",
      "options": [
        "Copper is an inert filler with no functional role in GHK-Cu's biological activity",
        "Copper is a required cofactor for enzymes such as lysyl oxidase that cross-link collagen and elastin, but free, unbound copper ions are chemically reactive and can generate damaging reactive oxygen species, which is why a chaperoned, chelated delivery form matters",
        "Free, unbound copper ions are entirely inert and cannot generate oxidative damage at any concentration",
        "GHK-Cu's tissue effects are completely independent of copper; the tripeptide's copper-binding capacity plays no role in its proposed mechanism"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "Copper is a required cofactor for enzymes such as lysyl oxidase and superoxide dismutase, but free, unbound copper ions are chemically reactive and can generate damaging reactive oxygen species through Fenton-type chemistry. A chelating tripeptide like GHK is structurally suited to deliver copper in a controlled, chaperoned form."
    },
    {
      "id": "d4-c3-tf-1",
      "chapter": 3,
      "type": "mc",
      "q": "Because GHK levels in human plasma decline measurably with age, restoring GHK-Cu systemically by injection has been demonstrated in controlled human trials to reverse the aging processes associated with that decline.",
      "options": [
        "True",
        "False"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "GHK's decline with age is a correlation. Nothing about that decline, on its own, establishes that restoring the level systemically by injection reverses any part of the aging process it is associated with, and no controlled human trial has demonstrated that systemic anti-aging effect."
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
      "id": "d4-c4-mc-2",
      "chapter": 4,
      "type": "mc",
      "q": "Tomasz reads LL-37 described in one community as \"the body's natural antibiotic\" and, elsewhere, as a driver of psoriasis. Which statement best reconciles those two descriptions?",
      "options": [
        "LL-37 is a purely protective molecule with no documented role in disease",
        "LL-37 functions only in the gut and has no documented role in skin or airway defense",
        "LL-37 cannot be measured in psoriatic skin lesions, which is why its role in disease remains purely theoretical",
        "LL-37's amphipathic structure lets it disrupt microbial membranes and support wound healing through angiogenesis and keratinocyte migration, but dysregulated LL-37 is also implicated in driving inflammatory diseases such as psoriasis by forming complexes with self-DNA that trigger a type I interferon response"
      ],
      "answer": 3,
      "points": 1,
      "explanation": "Vandamme and colleagues (2012) describe LL-37 as genuinely pleiotropic: it kills microbes directly, promotes angiogenesis and keratinocyte migration for wound healing, and, according to Kahlenberg and Kaplan (2013), dysregulated LL-37 is implicated in psoriasis and other inflammatory and autoimmune conditions through a self-DNA and type I interferon mechanism."
    },
    {
      "id": "d4-c4-tf-1",
      "chapter": 4,
      "type": "mc",
      "q": "Because KPV and LL-37 are peptides the human body already produces naturally, that fact by itself establishes that adding more of either one by injection is inherently gentle and low-risk.",
      "options": [
        "True",
        "False"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "Both KPV and LL-37 are naturally occurring peptides, but natural describes origin, not risk. LL-37 in particular is elevated, not absent, in diseased psoriatic skin, which is exactly why dose, timing, and tissue context matter more than whether a peptide already circulates in the body."
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
      "q": "How did the evidence for thymosin alpha-1 in sepsis change between the 2013 ETASS trial and the 2025 TESTS trial?",
      "options": [
        "A single early positive trial is sufficient on its own to establish a treatment's efficacy",
        "The 2013 ETASS trial found a significant mortality benefit for thymosin alpha-1 in severe sepsis, but the larger, more rigorous 2025 TESTS phase 3 trial found no significant mortality benefit, illustrating why a single positive trial is not the end of an evidence chain",
        "Neither the ETASS nor the TESTS trial found any mortality benefit at any point",
        "Thymosin alpha-1 has never been tested in a randomized controlled trial for sepsis"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "According to Wu and colleagues (2013), the earlier ETASS trial found a significant mortality reduction with thymosin alpha-1 in severe sepsis. According to Wu and colleagues (2025), the larger, more rigorous TESTS phase 3 trial found no significant mortality benefit, a textbook example of why an early positive signal is not a confirmed result."
    },
    {
      "id": "d4-c5-mc-3",
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
      "id": "d4-c6-mc-1",
      "chapter": 6,
      "type": "mc",
      "q": "What is semax, and what is its proposed mechanism?",
      "options": [
        "Semax is a manufactured mixture of peptide fragments from porcine brain tissue",
        "Semax is derived from tuftsin, an immune-system peptide",
        "Semax was isolated from rabbit blood during research into deep, slow-wave sleep",
        "Semax is a short peptide fragment of adrenocorticotropic hormone (ACTH), proposed to act on brain-derived neurotrophic factor (BDNF) and dopaminergic pathways, stripped of the parent hormone's adrenal-stimulating activity, with thin and largely unreplicated Western human evidence for its cognitive-enhancement use"
      ],
      "answer": 3,
      "points": 1,
      "explanation": "Semax is a short fragment of adrenocorticotropic hormone (ACTH), proposed to act on brain-derived neurotrophic factor (BDNF) and dopaminergic and other monoamine pathways. The mechanistic data is largely rodent-derived, and Western human evidence for its off-label cognitive-enhancement use remains thin and largely unreplicated."
    },
    {
      "id": "d4-c6-mc-2",
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
      "id": "d4-c6-tf-1",
      "chapter": 6,
      "type": "mc",
      "q": "Delta sleep-inducing peptide (DSIP) is named for a specific brainwave state it was hypothesized to produce in the 1970s, and its human evidence, while real, is old, small in scale, and has not been meaningfully replicated by modern trial infrastructure.",
      "options": [
        "True",
        "False"
      ],
      "answer": 0,
      "points": 1,
      "explanation": "DSIP's name describes a 1970s research hypothesis about a specific sleep stage, not a confirmed, well-mapped receptor mechanism. The controlled human evidence that exists is real but decades old, drawn from small samples, and has not been meaningfully replicated since."
    },
    {
      "id": "d4-c7-mc-1",
      "chapter": 7,
      "type": "mc",
      "q": "Which melanocortin receptor did bremelanotide's developers engineer the drug to concentrate its activity on, and why?",
      "options": [
        "MC2R, because it is the receptor that governs skin pigmentation",
        "MC4R, which sits in the hypothalamus and participates in both appetite and satiety regulation and central circuits governing sexual arousal",
        "MC5R, because it is the primary receptor responsible for the adrenal cortex's cortisol output",
        "MC1R, because MC1R and MC4R are functionally identical and both expressed only in the adrenal cortex"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "MC3R and MC4R are concentrated in the hypothalamus and sit at the center of energy-balance circuitry, with MC4R also participating in central circuits governing sexual arousal and motivation, which is why bremelanotide was engineered to concentrate its activity there rather than on MC1R, the pigmentation receptor."
    },
    {
      "id": "d4-c7-mc-2",
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
      "type": "mc",
      "q": "Bremelanotide is accurately described as \"a Viagra for women,\" since both drugs work through the identical peripheral mechanism of increasing genital blood flow.",
      "options": [
        "True",
        "False"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "Sildenafil (Viagra) is a PDE5 inhibitor acting peripherally on genital blood vessels to support blood flow once desire is already present. Bremelanotide acts centrally in the brain on MC4R and MC3R circuits implicated in desire itself, a fundamentally different mechanism aimed at a different clinical problem."
    },
    {
      "id": "d4-c8-mc-1",
      "chapter": 8,
      "type": "mc",
      "q": "What is the honest evidence grade for epithalon's telomerase-activation and anti-aging claims?",
      "options": [
        "Epithalon is a mitochondrial-derived peptide encoded within mitochondrial DNA",
        "Epithalon's telomerase-activation claim is supported by multiple large, independently replicated human randomized controlled trials",
        "Epithalon has been approved by international regulators specifically for anti-aging use",
        "Epithalon is a synthetic tetrapeptide whose telomerase-activation and lifespan claims rest on cell-culture and rodent work concentrated largely in one research group, with no controlled human trial demonstrating a lifespan or aging-outcome benefit"
      ],
      "answer": 3,
      "points": 1,
      "explanation": "According to Khavinson and colleagues (2003, 2004), epithalon's telomerase-activation and cell-division findings come from cultured human fibroblasts and rodent work, largely from one research group. No controlled human trial has demonstrated a lifespan or aging-outcome benefit."
    },
    {
      "id": "d4-c8-mc-2",
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
      "id": "d4-c9-mc-2",
      "chapter": 9,
      "type": "mc",
      "q": "How does this module's compound catalog actually distribute across regulatory oversight tiers?",
      "options": [
        "All compounds covered in this module occupy the same tier of regulatory oversight",
        "Melanotan II and bremelanotide share the same FDA approval status because both target melanocortin receptors",
        "Bremelanotide is an FDA-approved medicine in the United States and thymosin alpha-1 is approved and clinically used in more than thirty other countries, while most of this module's remaining compounds are sold as unapproved research chemicals with no equivalent review",
        "A compounded product prepared by a licensed pharmacist carries no more oversight than an unapproved research chemical"
      ],
      "answer": 2,
      "points": 1,
      "explanation": "This module's compounds span four tiers of oversight. Bremelanotide holds FDA approval in the United States, and thymosin alpha-1 is approved and clinically used in more than thirty other countries. Nearly every other compound in this module is sold as an unapproved research chemical with no equivalent review."
    },
    {
      "id": "d4-c9-mc-3",
      "chapter": 9,
      "type": "mc",
      "q": "What did independent testing of injectable peptide products purchased from illegal online pharmacies find regarding sterility, and how can that risk be detected?",
      "options": [
        "Visual inspection of a clear, particle-free vial reliably confirms it is free of clinically significant bacterial endotoxin",
        "Endotoxin contamination only matters for oral peptide products, not injectable ones",
        "Sterility failures have only ever been documented among unregulated online sellers, never inside licensed compounding pharmacies",
        "Independent testing of injectable peptide products purchased from illegal online pharmacies found detectable bacterial endotoxin in every sample tested, a contamination that cannot be detected by looking at the vial and requires a validated laboratory test to identify"
      ],
      "answer": 3,
      "points": 1,
      "explanation": "According to Ashraf and colleagues (2024), test purchases of injectable peptide products from illegal online pharmacies found detectable bacterial endotoxin in every sample tested. Endotoxin does not require a living organism to be present and cannot be detected by visual inspection, only by a validated laboratory test."
    }
  ]
};
