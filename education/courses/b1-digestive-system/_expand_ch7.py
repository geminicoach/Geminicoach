import re, io

f = 'chapter-7-rebuilding-the-engine-evidence-based-gut-support.html'
html = open(f, encoding='utf-8').read()

def repl(old, new, count=1):
    global html
    n = html.count(old)
    assert n >= 1, f"NOT FOUND: {old[:80]!r}"
    html = html.replace(old, new, count)

# ---------- 1. Expand the hook ----------
old_hook_end = '''<p>The gut is the same. After six chapters of learning how digestion is built and what goes wrong with it, this is the chapter where we ask the practical question: what genuinely helps? The honest answer is less exciting than the marketing and more powerful than most people expect. The biggest levers are unglamorous. They are food, sleep, stress, and a small, carefully chosen set of supportive tools. Get the order right and you fix most of what is fixable. Get it wrong and you spend money rebuilding a system whose foundation is still cracked.</p>
  </section>'''
new_hook_end = '''<p>The gut is the same. After six chapters of learning how digestion is built and what goes wrong with it, this is the chapter where we ask the practical question: what genuinely helps? The honest answer is less exciting than the marketing and more powerful than most people expect. The biggest levers are unglamorous. They are food, water, movement, sleep, stress, and a small, carefully chosen set of supportive tools. Get the order right and you fix most of what is fixable. Get it wrong and you spend money rebuilding a system whose foundation is still cracked.</p>
    <p>This is also, of every chapter in the course, the one most crowded with claims. The microbiome is having a cultural moment, and where there is a cultural moment there is an industry, and where there is an industry there is a torrent of confident language attached to bottles. Some of those claims rest on good trials. Some rest on a single mouse study stretched past anything it can hold. Some rest on nothing but a nice label and a plausible-sounding word. Your job, and the deeper purpose of this chapter, is not to memorize a list of products. It is to build a filter, a way of reading any claim about the gut and asking what is actually known, how well, and for whom. That filter will outlast every specific product on the shelf today, because the shelf will turn over and the filter will not.</p>
    <p>So keep two questions in your back pocket as you read. First, what is this intervention supposed to do mechanistically, and does that mechanism connect to the repair biology we have spent six chapters building? Second, what is the evidence that it does that thing in real people, and how strong is it? Almost everything that matters in gut support survives both questions. Almost everything that is marketing fails the second one quietly while shouting the first.</p>
  </section>'''
repl(old_hook_end, new_hook_end)

# ---------- 2. Expand section 1 (four pillars) before the callout ----------
old_p1 = '''<p>So we are going to build this chapter from the foundation up. We will revisit the butyrate engine from Chapter 2, because barrier repair is the mechanistic spine that ties all four pillars together. We will turn the gut-brain and stress physiology from Chapter 3 into an actionable lever rather than an interesting fact. And we will treat supplementation last and soberly, sorting the reasonable evidence from the wellness theater.</p>'''
new_p1 = '''<p>So we are going to build this chapter from the foundation up. We will revisit the butyrate engine from Chapter 2, because barrier repair is the mechanistic spine that ties all four pillars together. We will turn the gut-brain and stress physiology from Chapter 3 into an actionable lever rather than an interesting fact. And we will treat supplementation last and soberly, sorting the reasonable evidence from the wellness theater.</p>
    <p>One more word on the word "pillars," because the architecture of the metaphor is doing real work. A pillar is load-bearing. Remove one and the structure does not get slightly worse; it sags toward collapse at the point you removed it. That is a fair picture of how these inputs behave. Nutrition, movement, hydration, sleep, and stress regulation are not five items on a wellness checklist you complete for bonus points. They are the structural members that hold the system up, and they interact. Good sleep makes stress regulation easier, which makes consistent eating easier, which feeds the bacteria whose products calm the inflammation that was wrecking your sleep. The pillars lean on each other. This is why working on the foundation tends to produce broad, compounding improvement, while chasing a single supplement tends to produce, at best, a narrow effect on a system that is still under-supported everywhere else.</p>
    <p>It also explains a pattern you will see again and again in practice: the person who has genuinely optimized the foundation rarely needs much from the supplement aisle, and the person who needs the most from the aisle is usually the person who has optimized the foundation least. The aisle, in other words, sells most aggressively to exactly the people for whom it will do the least, because they are the ones still looking for a shortcut. Naming that out loud, gently and without judgment, is one of the most useful things a coach does.</p>'''
repl(old_p1, new_p1)

open(f, 'w', encoding='utf-8').write(html)
print("Phase 1 done. Word count check:")
body=re.sub(r'<script.*?</script>','',html,flags=re.S)
body=re.sub(r'<style.*?</style>','',body,flags=re.S)
text=re.sub(r'<[^>]+>',' ',body)
print('words:', len(text.split()))
print('em-dashes:', html.count(chr(8212)))
