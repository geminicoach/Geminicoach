# Gemini Education — In-Chapter Image Style Spec (for GPT / OpenAI image generation)

*Purpose: generate in-chapter illustrations that are UNIFORM with the existing ClassBuild GPT images across the whole catalog. Use this for the locally built courses that have no raster images yet (D1 AAS, and future D3/D4 peptides), and to retrofit courses built before images were funded (B3 Cortisol, B4 Bloodwork). The canonical reference image is `courses/b5-nervous-system-i/img/ch1-img1.jpg` (the labeled neuron).*

## The house style (what makes every image match)
- MEDIUM: antique watercolor-and-ink scientific illustration, like a hand-painted plate from a 19th-century natural-history or anatomy book.
- BACKGROUND: aged cream / parchment paper, soft paper texture, no hard border or frame, generous negative space (the subject floats).
- PALETTE: warm sepia and ochre browns for the subject and linework; soft, translucent sage-green and pale-gold watercolor washes behind or around the subject; muted throughout, nothing saturated or neon.
- LINEWORK: fine, confident hand-drawn ink lines; delicate detail; slightly imperfect, organic, not vector-crisp.
- LABELS: a few short labels only, set in an italic serif typeface, dark sepia ink, lowercase (e.g. *inputs*, *integrate*, *output*). Minimal text. No paragraphs, no titles baked into the image.
- COMPOSITION: single clear teaching subject, calm and uncluttered, educational-diagram clarity.
- ASPECT: landscape, 16:9, about 2048 x 1152 pixels.
- AVOID: photorealism, 3D render, glossy or digital look, hard drop shadows, bright/neon color, dense text, watermarks, borders, UI elements.

## STYLE BLOCK (paste this verbatim after any subject description)
```
Style: antique watercolor-and-ink scientific illustration on aged cream parchment paper, warm sepia and ochre tones with soft translucent sage-green and pale-gold washes, fine hand-drawn ink linework, delicate and organic, generous negative space, no border or frame, a few minimal labels in italic serif dark-sepia lowercase text only, calm educational natural-history plate aesthetic, landscape 16:9. No photorealism, no 3D, no glossy digital look, no neon color, no dense text, no watermark.
```

## How to keep them uniform (two methods)
1. REFERENCE-IMAGE METHOD (best, most consistent). In ChatGPT / the OpenAI image tool, start the session by uploading 1 or 2 canonical images (`b5-nervous-system-i/img/ch1-img1.jpg`, and optionally one more) and say: "Generate every image in the EXACT style of these references: match the palette, linework, parchment background, italic serif labels, and negative space." Then paste each subject prompt below. The model conditions on the reference and holds style across the batch.
2. STYLE-DESCRIPTOR METHOD (fallback if you cannot attach a reference). Append the STYLE BLOCK above to every single subject prompt.

Either way: generate one test image first, confirm it matches the neuron plate, then batch the rest in the same session so the style stays locked.

## File handling after generation
- Export each image landscape 16:9, save as `.jpg`.
- Name them `chN-imgK.jpg` (for example `ch3-img2.jpg`) and drop them in that course's `img/` folder, matching the existing ClassBuild convention.
- Tell me when they are in the folder and I will wire them into the chapters as `<figure>` blocks with captions (same pattern the ClassBuild courses use). For D1, the chapters currently use hand-drawn inline SVG diagrams; we can keep those as the precise technical diagrams and add the GPT images as the evocative chapter illustrations, or swap, your call per chapter.

---

## D1 (AAS) per-chapter image subjects
*Two per chapter. Each line is the SUBJECT to paste; add the STYLE BLOCK (or rely on the reference image). Labels are suggestions, keep them sparse and italic.*

Ch1 The Parent Molecule
- The steroid four-ring nucleus drawn as an elegant molecular skeleton, one arrow from a cholesterol motif to a testosterone motif. Labels: *cholesterol*, *testosterone*, *four rings*.
- A single cell showing a lipophilic hormone crossing the membrane, binding a receptor in the cytoplasm, and traveling to the nucleus to touch the DNA. Labels: *hormone*, *receptor*, *nucleus*, *DNA*.

Ch2 Ester Theory and Delivery
- A testosterone molecule with a long fatty-acid ester chain attached at one point, and a small scissors/water motif cleaving it. Labels: *ester*, *cleaved*, *free hormone*.
- Three soft release-over-time curves rising and falling at different rates (no numbers), one short, one medium, one long. Labels: *short*, *medium*, *long*.

Ch3 The Testosterones and Aromatization
- A pathway: a testosterone motif, an arrow through an enzyme, to an estradiol motif. Labels: *testosterone*, *aromatase*, *estradiol*.
- A calm human silhouette with soft washes marking where the enzyme lives (belly/adipose, brain, bone). Labels: *adipose*, *brain*, *bone*.

Ch4 The DHT-Derivatives
- A testosterone motif, an arrow through an enzyme, to a dihydrotestosterone motif. Labels: *testosterone*, *5-alpha-reductase*, *DHT*.
- One shared molecular scaffold in the center with delicate branches leading to small distinct variants. Labels: *shared base*, *variants*.

Ch5 The 19-Nortestosterones and Progestins
- Two side-by-side molecular skeletons, one testosterone and one with a single position removed, highlighted. Labels: *testosterone*, *19-nor (missing methyl)*.
- A soft pathway showing a progesterone receptor and a rising prolactin motif. Labels: *progesterone receptor*, *prolactin*.

Ch6 Boldenone and the Erythropoiesis Story
- A cascade: an androgen motif to a kidney/marrow motif releasing red blood cells into a vessel that thickens. Labels: *androgen*, *EPO*, *red cells*, *viscosity*.
- Testosterone vs boldenone skeletons side by side, the extra double bond highlighted. Labels: *testosterone*, *boldenone*.

Ch7 The 17-Alpha-Alkylated Orals
- A steroid skeleton with a small alkyl group highlighted at one corner, and an arrow surviving past a liver motif. Labels: *17-alpha group*, *survives first pass*, *liver*.
- A liver with soft strain washes and bile backing up. Labels: *cholestasis*, *oxidative stress*.

Ch8 Aromatase Inhibitors
- An enzyme motif blocked two ways: one lock sitting reversibly, one permanently disabled. Labels: *reversible*, *irreversible*, *aromatase*.
- A gentle U-shaped curve with soft harm washes at both low and high ends and a calm middle. Labels: *too low*, *balanced*, *too high*.

Ch9 SERMs and the HPTA
- The hypothalamus-pituitary-testes loop drawn as three linked nodes with a feedback arrow returning. Labels: *hypothalamus*, *pituitary*, *testes*, *feedback*.
- One molecule acting as a block in one tissue and a soft agonist glow in another. Labels: *antagonist here*, *agonist there*.

Ch10 Clenbuterol and Beta-Agonists
- A receptor on a cell triggering an internal cascade that opens a fat droplet. Labels: *beta-2 receptor*, *cyclic AMP*, *lipolysis*.
- Two contrasting motifs side by side, a nuclear-receptor steroid vs a surface-receptor agonist. Labels: *steroid (inside)*, *beta-agonist (surface)*.

Ch11 Thyroid Hormones (T3/T4)
- The hypothalamus-pituitary-thyroid loop with a T4 motif converting to a T3 motif in the periphery. Labels: *T4*, *T3*, *metabolic rate*.
- A dial of metabolic rate turned up while soft washes mark cost on muscle and heart. Labels: *rate up*, *muscle*, *heart*.

Ch12 Additive Risk and Biochemical Class
- Four biochemical-class motifs each connected to the one organ it stresses (liver, estrogen axis, blood, prolactin axis). Labels: *class*, *organ target*.
- A contrast: one base doubled with a single deep strain mark, versus different bases spreading the load thin. Labels: *concentrated*, *distributed*.

Ch13 Systemic Risk, Monitoring, and the Boundary
- A calm whole-body figure with soft washes over the systems at risk (heart, liver, endocrine, blood, mind). Labels: *heart*, *liver*, *hormones*, *blood*, *mind*.
- A small panel of lab vials each linked by a fine line to the risk it tracks. Labels: *lipids*, *hematocrit*, *liver enzymes*, *hormones*.

---

## Retrofit list (courses built before images were funded)
- B3 Cortisol (13 chapters): originals for its ClassBuild images are recoverable from the Downloads/Desktop export zips; if not, generate fresh from each chapter's figure concepts using this spec.
- B4 Reading Bloodwork (10 chapters): generate per-chapter images from each chapter's marker theme (for example a labeled complete-blood-count vial for Ch2, a lipid-panel motif for Ch4, a liver-enzyme motif for Ch5), same style.
- Approach for both: same reference-image method, 2 images per chapter, drop into each course's `img/` folder as `chN-imgK.jpg`, tell me, and I wire them in.
