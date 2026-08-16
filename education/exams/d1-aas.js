/* Gemini Education: D1 (Anabolic-Androgenic Steroids & Ancillaries) FINAL EXAM, interim live version.
   Current exam.html renders MC and free-response only, so this ships 20 MC + 6 true/false
   (as 2-option MC), drawing 20 per attempt, options shuffled, 80% to pass. 26 in the pool.
   Full bank (matching, word-bank, multi-select, write-ins) is in d1-aas.full.js. */
window.GEM_EXAM = {
  slug: "d1-aas",
  title: "Anabolic-Androgenic Steroids & Ancillaries",
  contact_hours: 13, ceu_value: 1.3, pass_threshold: 80, draw_mc: 20, placeholder: false,
  questions: [
    {
      "id": "d1-c1-mc-1",
      "chapter": 1,
      "type": "mc",
      "q": "A marketing claim asserts that a certain steroid is purely anabolic with no androgenic activity at all, because it supposedly acts through a totally separate muscle receptor. What does the chapter's account of the androgen receptor say about this claim?",
      "options": [
        "Yes, because DHT and testosterone always bind two entirely different receptor proteins",
        "Yes, because a cell-surface muscle receptor distinct from the androgen receptor exists in skeletal muscle",
        "No, both anabolic and androgenic effects are mediated by the same androgen receptor, with the tissue-specific outcome determined by differing gene expression, not by separate receptors",
        "No, because steroids act through cell-surface receptors rather than gene transcription"
      ],
      "answer": 2,
      "points": 1,
      "explanation": "The chapter treats anabolic and androgenic effects as two readouts of one receptor, the androgen receptor, whose activation drives different genes in different tissues. There is no separate muscle-only receptor, so the dissociation between the two effect categories is always partial, never complete."
    },
    {
      "id": "d1-c1-tf-1",
      "chapter": 1,
      "type": "mc",
      "q": "Testosterone is a lipophilic steroid that can cross the cell membrane directly and bind a cytoplasmic androgen receptor, in contrast to protein hormones such as insulin, which must instead bind a receptor on the cell surface.",
      "options": [
        "True",
        "False"
      ],
      "answer": 0,
      "points": 1,
      "explanation": "Because testosterone is a small lipophilic steroid, it diffuses through the lipid membrane and binds an intracellular androgen receptor, unlike protein hormones such as insulin or growth hormone, which are too large and water soluble to cross the membrane and instead act through surface receptors. This location difference is also why steroid signaling is a slower, genomic process compared to fast surface signaling."
    },
    {
      "id": "d1-c2-mc-1",
      "chapter": 2,
      "type": "mc",
      "q": "A person claims that testosterone cypionate is a stronger or pharmacologically different hormone than testosterone propionate once both are in the bloodstream and hydrolyzed. What does the chapter's ester theory say about this claim?",
      "options": [
        "False, once hydrolyzed the released testosterone is molecularly identical regardless of which ester carried it; only the pharmacokinetics, such as release rate, differ",
        "True, longer esters bind the androgen receptor more tightly than shorter esters",
        "True, because longer esters convert preferentially to DHT",
        "False, because esters are never actually hydrolyzed in the body"
      ],
      "answer": 0,
      "points": 1,
      "explanation": "Esterification changes only absorption and clearance, never the pharmacology of the hormone itself. Once an esterase hydrolyzes the ester bond, the freed testosterone is identical whether it arrived attached to a short or long chain; the chain only shaped how fast it got there."
    },
    {
      "id": "d1-c2-mc-2",
      "chapter": 2,
      "type": "mc",
      "q": "For a long-chain ester such as testosterone undecanoate deposited intramuscularly in an oil depot, what is the rate-limiting step controlling how slowly testosterone becomes available in circulation, per the chapter?",
      "options": [
        "The speed of enzymatic hydrolysis of the ester bond, which the chapter describes as very slow for long-chain esters",
        "The rate of aromatization of the intact ester",
        "The rate of hepatic first-pass metabolism of the ester",
        "The rate at which the intact ester partitions out of the lipophilic oil depot into the bloodstream, since the intact ester is largely inert at the androgen receptor"
      ],
      "answer": 3,
      "points": 1,
      "explanation": "The chapter locates the bottleneck at the depot itself, not at the hydrolysis step. Because an intact ester is a poor fit for the androgen receptor, the slow part is the fatty tail's gradual partitioning out of the oil depot into the bloodstream, where esterase enzymes can then act quickly."
    },
    {
      "id": "d1-c3-mc-1",
      "chapter": 3,
      "type": "mc",
      "q": "A claim states that aromatase is a female enzyme and males have little to none of it. Which chapter fact most directly refutes this?",
      "options": [
        "Aromatase exists only in ovarian tissue and cannot be present in a male body at all",
        "Aromatase (CYP19A1) is expressed in adult male adipose tissue, which the chapter identifies as the single largest peripheral source of aromatization, alongside brain, bone, and skin",
        "Males lack the CYP19A1 gene entirely",
        "Aromatization only occurs in the testes, so removing the testes eliminates estrogen production"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "CYP19A1 is expressed across multiple tissues in adult males, with adipose tissue serving as the single largest peripheral source, alongside brain, bone, skin, and vascular tissue. Estrogen is baseline, functionally necessary male physiology, not a female-only signal that leaked in."
    },
    {
      "id": "d1-c3-mc-2",
      "chapter": 3,
      "type": "mc",
      "q": "According to the chapter, why is there no single fixed conversion ratio that predicts a person's estradiol level from their testosterone level?",
      "options": [
        "Because estradiol is entirely unrelated to testosterone levels",
        "Because aromatization only happens in the liver at a single fixed rate",
        "Because circulating estradiol depends on both substrate availability and the mass and activity of tissue aromatase, including body composition, not a constant conversion ratio",
        "Because estradiol is produced independently of any enzyme"
      ],
      "answer": 2,
      "points": 1,
      "explanation": "Estradiol output tracks both how much substrate is available and how much aromatase mass and activity a given body has, which varies with body composition and tissue distribution. That variability rules out any single fixed ratio for translating a testosterone number into an estradiol number."
    },
    {
      "id": "d1-c4-mc-1",
      "chapter": 4,
      "type": "mc",
      "q": "Why can dihydrotestosterone (DHT) and its structural derivatives never be converted to an estrogen by aromatase, per the chapter?",
      "options": [
        "Aromatase does not exist in any tissue where DHT is produced",
        "DHT binds so tightly to the androgen receptor that aromatase physically cannot access it",
        "DHT is broken down before aromatase has a chance to act on it",
        "DHT's A-ring is fully saturated by 5-alpha-reductase, and a saturated A-ring is not a chemical substrate aromatase can act on"
      ],
      "answer": 3,
      "points": 1,
      "explanation": "5-alpha-reductase saturates testosterone's A-ring to form DHT, and that saturation is exactly the chemical feature aromatase requires to be absent in order to act. This is the shared, defining trait across the entire chapter's family of DHT-derived compounds."
    },
    {
      "id": "d1-c4-tf-1",
      "chapter": 4,
      "type": "mc",
      "q": "Because 5-alpha-reductase is concentrated mainly in skin, hair follicles, and the prostate rather than in skeletal muscle, DHT itself, despite its high androgen receptor affinity, is a comparatively weak muscle-builder.",
      "options": [
        "True",
        "False"
      ],
      "answer": 0,
      "points": 1,
      "explanation": "5-alpha-reductase activity is highest in tissues like skin, hair follicles, and the prostate, not skeletal muscle, so relatively little DHT is generated where muscle growth would be driven. Despite DHT's strong androgen receptor affinity, this distribution pattern limits its practical anabolic effect in muscle."
    },
    {
      "id": "d1-c5-mc-1",
      "chapter": 5,
      "type": "mc",
      "q": "A person believes that because a 19-nortestosterone compound aromatizes poorly, it must carry a low risk of gynecomastia-type breast tissue changes. What does the chapter's progesterone-receptor mechanism say about this reasoning?",
      "options": [
        "The reasoning is flawed; removing the C19 methyl group opens binding to the progesterone receptor, and progesterone receptor activation can suppress dopamine and raise prolactin, producing similar visible effects through a pathway separate from aromatization",
        "The reasoning is sound, since breast tissue changes can only occur through the aromatization and estrogen receptor pathway",
        "The reasoning is flawed because 19-nortestosterones always aromatize more than testosterone does",
        "The reasoning is sound because progesterone receptors are not present in male tissue"
      ],
      "answer": 0,
      "points": 1,
      "explanation": "Losing the C19 methyl group opens a second, independent route to similar visible outcomes through the progesterone receptor and prolactin, so a low aromatization rate does not predict a low overall risk. The two pathways, estrogenic and progestogenic, operate separately and can each produce comparable effects."
    },
    {
      "id": "d1-c5-mc-2",
      "chapter": 5,
      "type": "mc",
      "q": "What structural feature distinguishes trenbolone from nandrolone within the 19-nortestosterone family, according to the chapter?",
      "options": [
        "Trenbolone restores the C19 methyl group that nandrolone lacks",
        "Trenbolone adds two further double bonds to the 19-nor backbone, which prevents any aromatization at all, while nandrolone retains some capacity for peripheral conversion",
        "Trenbolone is 17-alpha-alkylated while nandrolone is not",
        "Nandrolone is more androgenic than trenbolone because it retains the C19 methyl group"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "Both share the unmodified 19-nor backbone's loss of the C19 methyl group, but trenbolone adds two further double bonds that remove any aromatase substrate potential entirely. Nandrolone, without those extra double bonds, retains a low but real capacity for peripheral conversion."
    },
    {
      "id": "d1-c6-mc-1",
      "chapter": 6,
      "type": "mc",
      "q": "Per the chapter, androgens raise red blood cell mass through three convergent pathways. Which of the following correctly lists them?",
      "options": [
        "Increased spleen size, decreased kidney filtration, and increased vitamin B12 absorption",
        "Direct conversion of testosterone into hemoglobin, suppression of the immune system, and increased plasma volume",
        "Increased renal EPO transcription, a direct bone marrow effect on erythroid progenitors independent of EPO, and hepatic suppression of hepcidin that frees iron for hemoglobin synthesis",
        "Increased white blood cell production, decreased iron absorption, and increased platelet count"
      ],
      "answer": 2,
      "points": 1,
      "explanation": "The chapter traces three converging routes: androgen receptor activation raising kidney EPO transcription, a direct marrow effect on erythroid progenitors that does not require EPO, and hepatic suppression of hepcidin that frees iron for hemoglobin production. All three push red cell mass upward together."
    },
    {
      "id": "d1-c6-tf-1",
      "chapter": 6,
      "type": "mc",
      "q": "Because red blood cell mass rises with androgen exposure, blood viscosity increases in direct linear proportion to hematocrit, so there is no accelerating risk at higher hematocrit levels.",
      "options": [
        "True",
        "False"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "The chapter describes the hematocrit-viscosity relationship as non-linear and accelerating, not a straight line, so risk to cardiac workload and thrombosis grows disproportionately as hematocrit climbs. Past a certain point, added red cell mass raises viscosity more than it improves oxygen delivery."
    },
    {
      "id": "d1-c7-mc-1",
      "chapter": 7,
      "type": "mc",
      "q": "Why is unmodified testosterone never marketed as a swallowed tablet, per the chapter's explanation of first-pass metabolism?",
      "options": [
        "Testosterone is too large a molecule to be absorbed from the gut at all",
        "Testosterone is destroyed by hepatic enzymes on first pass through the portal vein before reaching systemic circulation, unless it is chemically modified, such as by 17-alpha-alkylation, to resist that oxidation",
        "Testosterone converts entirely to DHT in the stomach before it can be absorbed",
        "Oral testosterone would aromatize to estrogen immediately in the mouth"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "Swallowed testosterone travels through the portal vein straight to the liver, where hepatic enzymes oxidize it before it can reach systemic circulation in any useful amount. 17-alpha-alkylation sterically blocks that oxidation at C17, which is why alkylated compounds can survive as oral tablets while plain testosterone cannot."
    },
    {
      "id": "d1-c7-mc-2",
      "chapter": 7,
      "type": "mc",
      "q": "A learner assumes that a 17-alpha-alkylated compound with a reputation for being milder in androgenic side effects must also carry lower liver risk. What does the chapter's risk-reasoning say about this assumption?",
      "options": [
        "The assumption is correct, since androgenic mildness and liver risk always move together",
        "The assumption is correct because only aromatizing compounds can cause liver injury",
        "The assumption is irrelevant because 17-alpha-alkylated compounds cannot cause liver injury",
        "The assumption is incorrect; hepatotoxicity is driven by the shared 17-alpha-alkylation itself, through cholestasis and oxidative stress mechanisms, independent of a compound's androgenic reputation or other structural differences"
      ],
      "answer": 3,
      "points": 1,
      "explanation": "Hepatic strain traces to the 17-alpha-alkylation modification itself, working through cholestasis and oxidative stress, not to how androgenic or mild a compound feels. A milder side-effect reputation says nothing about whether the shared liver-risk mechanism is present."
    },
    {
      "id": "d1-c8-mc-1",
      "chapter": 8,
      "type": "mc",
      "q": "What distinguishes a steroidal aromatase inhibitor from a non-steroidal one mechanistically, per the chapter?",
      "options": [
        "A steroidal inhibitor, such as exemestane, is a false substrate that forms a permanent covalent bond, irreversibly destroying that aromatase molecule, while a non-steroidal inhibitor, such as anastrozole or letrozole, binds reversibly and competitively, with its effect tracking blood level",
        "A steroidal inhibitor is always gentler and more easily reversed than a non-steroidal one",
        "Non-steroidal inhibitors permanently destroy the aromatase enzyme while steroidal ones are fully reversible",
        "Both classes work identically and differ only in how they are administered"
      ],
      "answer": 0,
      "points": 1,
      "explanation": "Steroidal inhibitors act as false substrates that form a permanent covalent bond, a mechanism-based, irreversible inactivation of that enzyme molecule, while non-steroidal inhibitors bind reversibly and competitively so their effect rises and falls with blood level. Being irreversible makes the steroidal class more permanently destructive, not gentler."
    },
    {
      "id": "d1-c8-tf-1",
      "chapter": 8,
      "type": "mc",
      "q": "Estrogen in men follows a U-shaped risk curve, meaning both excessively high and excessively low estradiol are associated with harm, so driving estrogen down to a bare minimum is not supported as a safe goal.",
      "options": [
        "True",
        "False"
      ],
      "answer": 0,
      "points": 1,
      "explanation": "The chapter cites evidence that estradiol below roughly 10 pg/mL is generally associated with bone resorption and loss of bone mineral density even when testosterone is adequate, showing that too little estrogen carries real harm. Combined with the known risks of estrogen excess, this produces a U-shaped curve rather than a simple lower-is-better relationship."
    },
    {
      "id": "d1-c9-mc-1",
      "chapter": 9,
      "type": "mc",
      "q": "How does a selective estrogen receptor modulator (SERM) differ mechanistically from an aromatase inhibitor (AI), per the chapter?",
      "options": [
        "A SERM lowers circulating estradiol directly, in exactly the same way an aromatase inhibitor does",
        "Both a SERM and an aromatase inhibitor work by permanently destroying the aromatase enzyme",
        "A SERM acts downstream at the estrogen receptor itself, behaving as an antagonist in some tissues and an agonist in others, while an aromatase inhibitor acts upstream by blocking the enzyme that produces estrogen and does not itself change circulating estradiol",
        "A SERM works only in the liver, while an aromatase inhibitor works only in bone"
      ],
      "answer": 2,
      "points": 1,
      "explanation": "A SERM occupies the estrogen receptor itself, reading as an antagonist in some tissues and an agonist in others depending on receptor conformation and local coactivator balance, without changing the estrogen supply. An aromatase inhibitor instead works upstream at the enzyme that manufactures estrogen, which is why it does change circulating estradiol."
    },
    {
      "id": "d1-c9-mc-2",
      "chapter": 9,
      "type": "mc",
      "q": "Within the hypothalamic-pituitary-testicular (HPT) axis, what role does estradiol play in negative feedback, according to the chapter?",
      "options": [
        "Estradiol has no role in suppressing the HPT axis; only testosterone acting through the androgen receptor matters",
        "Estradiol, produced locally by aromatization of testosterone, acts on estrogen receptors at the hypothalamus and pituitary and is one of the most potent signals suppressing GnRH, LH, and FSH, alongside testosterone's own direct action through the androgen receptor",
        "Estradiol stimulates GnRH release, making the axis more active rather than suppressing it",
        "Estradiol only affects the testes directly and never reaches the brain"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "Local aromatization of testosterone produces estradiol that acts on estrogen receptors at the hypothalamus and pituitary, and that signal is one of the axis's most potent brakes on GnRH, LH, and FSH release. This runs alongside, not instead of, testosterone's own direct androgen receptor feedback."
    },
    {
      "id": "d1-c10-mc-1",
      "chapter": 10,
      "type": "mc",
      "q": "Why does clenbuterol carry cardiac risk despite being marketed as a fat-targeting beta-2 agonist, per the chapter?",
      "options": [
        "Clenbuterol converts to a steroid hormone that directly damages heart tissue",
        "Clenbuterol has no documented mechanism linking it to cardiac effects",
        "Clenbuterol works by binding the androgen receptor in heart tissue",
        "Clenbuterol is not perfectly receptor-selective, so alongside beta-2 activation in fat and airway tissue it also produces off-target activation of beta-1 receptors, which dominate cardiac tissue"
      ],
      "answer": 3,
      "points": 1,
      "explanation": "Clenbuterol is a beta-2 adrenergic receptor agonist, not a steroid, and it is not perfectly selective for beta-2 receptors. That imperfect selectivity means it also activates beta-1 receptors, which are the dominant adrenergic receptor in cardiac tissue, producing the basis of its cardiac risk."
    },
    {
      "id": "d1-c10-tf-1",
      "chapter": 10,
      "type": "mc",
      "q": "Clenbuterol produces its lipolytic effects by binding the androgen receptor and triggering the same slow, genomic transcription process used by anabolic steroids.",
      "options": [
        "True",
        "False"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "Clenbuterol is not a steroid and does not touch the androgen receptor at all; it is a beta-2 adrenergic receptor agonist that signals through a cell-surface G-protein-coupled receptor and a fast cyclic AMP and protein kinase A cascade. This minutes-scale surface signaling is fundamentally different from the slow, days-to-weeks genomic process steroids use."
    },
    {
      "id": "d1-c11-mc-1",
      "chapter": 11,
      "type": "mc",
      "q": "Why is T4 (thyroxine) best described as a prohormone rather than the primary active thyroid signal, per the chapter?",
      "options": [
        "T4 is inactive until peripheral deiodinase enzymes, D1 and D2, convert it locally to the more active T3, while D3 inactivates thyroid hormone to protect sensitive tissue",
        "T4 is never converted to T3 under any circumstance",
        "T4 is more potent than T3 at the thyroid hormone receptor",
        "T4 is produced only in the pituitary gland, not the thyroid"
      ],
      "answer": 0,
      "points": 1,
      "explanation": "The thyroid gland releases mostly T4, which peripheral deiodinases, D1 in liver and kidney and D2 in brain, pituitary, brown fat, and muscle, convert locally into the more biologically active T3. D3 works in the opposite direction, inactivating thyroid hormone to shield sensitive tissue."
    },
    {
      "id": "d1-c11-mc-2",
      "chapter": 11,
      "type": "mc",
      "q": "How does thyroid hormone receptor (TR) signaling differ from androgen receptor (AR) signaling, per the chapter?",
      "options": [
        "TR and AR use an identical cytoplasmic activation mechanism",
        "TR only acts on a cell-surface receptor and never enters the nucleus",
        "TR sits pre-bound to DNA at thyroid response elements even without hormone, held by corepressors, and T3 binding flips it to coactivator recruitment, whereas AR must first be freed from a cytoplasmic chaperone and translocate to the nucleus before binding DNA",
        "AR is pre-bound to DNA at all times, while TR must translocate from the cytoplasm to the nucleus"
      ],
      "answer": 2,
      "points": 1,
      "explanation": "TR already sits on its DNA response elements before any hormone arrives, held quiet by corepressors, and T3 binding flips the switch to coactivator recruitment. AR instead starts in the cytoplasm bound to a chaperone protein and must be released and translocate to the nucleus before it can engage DNA at all."
    },
    {
      "id": "d1-c12-mc-1",
      "chapter": 12,
      "type": "mc",
      "q": "What is the chapter's central distinction between combining two compounds from unrelated mechanistic classes versus combining two compounds from the same biochemical class?",
      "options": [
        "All combinations of compounds carry identical risk, regardless of shared or unrelated mechanisms",
        "Risks from unrelated mechanisms are genuinely additive, but risk from compounds sharing a class, such as two hepatically-strained 17-alpha-alkylated orals, does not simply add, it concentrates through a shared bottleneck, such as an enzyme pool, receptor population, or clearance pathway",
        "Combining compounds from the same biochemical class always cancels out the risk of each individual compound",
        "Only aromatizing compounds carry any combination risk; every other class is risk-free in combination"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "The chapter's core thesis is that a shared biochemical class means a shared bottleneck, whether an enzyme pool, receptor population, or clearance pathway, and stacking that bottleneck concentrates risk rather than merely adding it. Risk from genuinely unrelated mechanisms, by contrast, behaves in a more straightforwardly additive way."
    },
    {
      "id": "d1-c12-tf-1",
      "chapter": 12,
      "type": "mc",
      "q": "Because two compounds share a biochemical class, such as two hepatically-strained 17-alpha-alkylated orals, their combined risk simply adds together in the same way as combining two compounds from entirely unrelated mechanisms.",
      "options": [
        "True",
        "False"
      ],
      "answer": 1,
      "points": 1,
      "explanation": "The chapter draws exactly the opposite conclusion: risk from unrelated mechanisms is genuinely additive, but risk from compounds sharing a class concentrates through a shared bottleneck rather than simply adding. Two compounds leaning on the same hepatic oxidation machinery magnify the strain on that single shared pathway."
    },
    {
      "id": "d1-c13-mc-1",
      "chapter": 13,
      "type": "mc",
      "q": "What did Hammoud and colleagues' findings on global longitudinal strain add to the chapter's picture of cardiovascular risk?",
      "options": [
        "They showed that all cardiac changes fully reverse within weeks of stopping",
        "They showed that ejection fraction alone is sufficient to rule out any cardiac harm",
        "They showed cardiovascular risk applies only to compounds that aromatize",
        "They showed that subclinical reductions in heart function can persist in former users even when ejection fraction looks normal, meaning impairment can be asymptomatic and undetectable without specialized imaging"
      ],
      "answer": 3,
      "points": 1,
      "explanation": "The finding matters because it demonstrates that a normal-looking ejection fraction does not rule out meaningful cardiac impairment. Subclinical reductions in global longitudinal strain can persist in former users and remain invisible without specialized imaging."
    },
    {
      "id": "d1-c13-mc-2",
      "chapter": 13,
      "type": "mc",
      "q": "What is the chapter's stated professional and role boundary regarding laboratory monitoring?",
      "options": [
        "Understanding what a lab value generally means is not the same as having the clinical competence to interpret it within one person's full context, so educational explanation or self-monitoring cannot substitute for licensed clinical evaluation",
        "Anyone who understands the biochemistry of a lab panel is qualified to interpret their own results without clinical oversight",
        "Lab monitoring becomes unnecessary once a person understands the underlying mechanisms",
        "Only hematologic labs require clinical interpretation; all others can be safely self-interpreted"
      ],
      "answer": 0,
      "points": 1,
      "explanation": "The chapter draws a firm line between general mechanistic knowledge and the clinical competence needed to interpret a specific person's labs in their full context. That gap is exactly why educational explanation and self-monitoring are described as unable to substitute for licensed clinical evaluation."
    }
  ]
};
