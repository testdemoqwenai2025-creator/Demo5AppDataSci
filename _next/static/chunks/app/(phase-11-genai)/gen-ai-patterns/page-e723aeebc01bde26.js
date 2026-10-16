(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3893],{19668:(e,t,s)=>{"use strict";s.d(t,{GenAiPatternsPage:()=>_});var r=s(95155),a=s(98500),i=s.n(a),n=s(58381),o=s(27774),d=s(60508),l=s(92194),p=s(19776),c=s(66349),m=s(85757),h=s(45160),u=s(83036),x=s(86901),g=s(53961),f=s(90718),b=s(10762),y=s(65576),v=s(44071);let k=[{label:"Generation pattern",value:"Autoregressive",hint:"P(y_t | y_1...y_{t-1}) — next-token prediction",deltaTone:"flat"},{label:"Tokenisation",value:"BPE",hint:"Byte Pair Encoding — subword units",deltaTone:"flat"},{label:"Sampling methods",value:"3",hint:"Greedy \xb7 Temperature \xb7 Top-k \xb7 Top-p (nucleus)",deltaTone:"flat"},{label:"Quality metric",value:"Perplexity",hint:"PP = exp(H) where H = entropy",deltaTone:"flat"}],w=`# BPE (Byte Pair Encoding) — the tokeniser behind GPT/BERT/Claude
# Shows how text is split into subword tokens

# Training: learn merge rules from a corpus
# 1. Start with characters
# 2. Find most frequent pair → merge
# 3. Repeat until vocab_size reached

def train_bpe(corpus, vocab_size=50):
    "Learn BPE merge rules from corpus."
    # Start with characters
    vocab = set()
    word_freqs = {}
    for word in corpus.split():
        chars = tuple(word)
        word_freqs[chars] = word_freqs.get(chars, 0) + 1
        vocab.update(chars)
    
    merges = []
    while len(vocab) < vocab_size:
        # Count adjacent pairs
        pair_counts = {}
        for word, freq in word_freqs.items():
            for i in range(len(word) - 1):
                pair = (word[i], word[i+1])
                pair_counts[pair] = pair_counts.get(pair, 0) + freq
        
        if not pair_counts:
            break
        
        # Find most frequent pair
        best_pair = max(pair_counts, key=pair_counts.get)
        merges.append(best_pair)
        vocab.add(best_pair[0] + best_pair[1])
        
        # Apply merge to corpus
        new_word_freqs = {}
        for word, freq in word_freqs.items():
            new_word = []
            i = 0
            while i < len(word):
                if i < len(word) - 1 and (word[i], word[i+1]) == best_pair:
                    new_word.append(word[i] + word[i+1])
                    i += 2
                else:
                    new_word.append(word[i])
                    i += 1
            new_word_freqs[tuple(new_word)] = new_word_freqs.get(tuple(new_word), 0) + freq
        word_freqs = new_word_freqs
    
    return vocab, merges

# Tokenise: apply learned merges
def tokenize_bpe(text, merges):
    tokens = list(text)
    for merge in merges:
        i = 0
        while i < len(tokens) - 1:
            if (tokens[i], tokens[i+1]) == merge:
                tokens[i:i+2] = [tokens[i] + tokens[i+1]]
            else:
                i += 1
    return tokens

# Demo
corpus = "revenue revenue revenue customer customer churn churn order order order order"
vocab, merges = train_bpe(corpus, vocab_size=20)

print("=" * 60)
print("BPE Tokeniser — Training + Tokenisation Demo")
print("=" * 60)
print(f"\\nCorpus: '{corpus}'")
print(f"\\nLearned merges ({len(merges)}):")
for i, (a, b) in enumerate(merges[:10]):
    print(f"  {i+1}. '{a}' + '{b}' → '{a+b}'")

# Tokenise a new text
text = "revenue customer churn order"
tokens = tokenize_bpe(text, merges)
print(f"\\nTokenise: '{text}'")
print(f"  Tokens: {tokens}")
print(f"  Count: {len(tokens)} tokens for {len(text)} chars")

print(f"\\n{'=' * 60}")
print("In production: GPT-4 uses ~100k BPE merges (tiktoken library).")
print(f"  'revenue' → [rev, enue] (2 tokens)")
print(f"  'customer' → [custom, er] (2 tokens)")
print(f"  Subword units balance vocabulary size with sequence length.")
print("=" * 60)`,j=`# Text Generation — Autoregressive Decoding + Sampling Strategies
# Shows greedy vs temperature vs top-k vs top-p (nucleus) sampling

import math, random

# Simulated logits (pre-softmax scores for next token)
# In a real LLM: logits = transformer(input_tokens) @ W_unembed
logits = {
    "revenue":  3.2,   # high confidence
    "orders":   2.1,
    "customer": 1.5,
    "churn":    0.8,
    "returns":  0.3,
    "inventory":-0.5,
    "supply":  -1.0,
    "marketing":-1.5,
}

def softmax(logits_dict, temp=1.0):
    "Softmax with temperature: p_i = exp(l_i/T) / sum(exp(l_j/T))"
    temp_logits = {k: v / temp for k, v in logits_dict.items()}
    exps = {k: math.exp(v) for v in temp_logits.values()}
    total = sum(exps.values())
    return {k: v / total for k, v in exps.items()}

def sample(probs, method="greedy", k=None, p=None):
    if method == "greedy":
        return max(probs, key=probs.get), probs
    elif method == "temperature":
        return random.choices(list(probs.keys()), weights=probs.values())[0], probs
    elif method == "top-k":
        sorted_p = sorted(probs.items(), key=lambda x: -x[1])[:k]
        top_k = {word: prob for word, prob in sorted_p}
        total = sum(top_k.values())
        top_k = {k: v/total for k, v in top_k.items()}
        return random.choices(list(top_k.keys()), weights=top_k.values())[0], top_k
    elif method == "top-p":
        sorted_p = sorted(probs.items(), key=lambda x: -x[1])
        cumsum = 0
        top_p = {}
        for word, prob in sorted_p:
            cumsum += prob
            top_p[word] = prob
            if cumsum >= p:
                break
        total = sum(top_p.values())
        top_p = {k: v/total for k, v in top_p.items()}
        return random.choices(list(top_p.keys()), weights=top_p.values())[0], top_p

print("=" * 60)
print("Text Generation — Sampling Strategies")
print("=" * 60)

# 1. Greedy (no sampling — pick argmax)
print("\\n--- 1. Greedy (always pick highest) ---")
probs = softmax(logits, temp=1.0)
token, _ = sample(probs, "greedy")
print(f"  Selected: '{token}' (p={probs[token]:.4f})")
print(f"  Always deterministic. Same input → same output.")

# 2. Temperature sampling
print("\\n--- 2. Temperature sampling ---")
for T in [0.5, 1.0, 2.0]:
    probs = softmax(logits, temp=T)
    random.seed(42)
    token = random.choices(list(probs.keys()), weights=probs.values())[0]
    print(f"  T={T}: probs = {dict(sorted(probs.items(), key=lambda x:-x[1])[:3])}")
    print(f"    → sampled: '{token}' (p={probs[token]:.4f})")

print(f"  T→0: greedy (deterministic)")
print(f"  T=1: original distribution")
print(f"  T→∞: uniform (random)")

# 3. Top-k
print("\\n--- 3. Top-k sampling (k=3) ---")
probs = softmax(logits, temp=1.0)
random.seed(42)
token, top_k = sample(probs, "top-k", k=3)
print(f"  Top-3: {dict(sorted(top_k.items(), key=lambda x:-x[1]))}")
print(f"  → sampled: '{token}' (p={top_k[token]:.4f})")
print(f"  Only considers top-k tokens — prevents low-probability 'hallucinations'")

# 4. Top-p (nucleus)
print("\\n--- 4. Top-p / nucleus sampling (p=0.9) ---")
random.seed(42)
token, top_p = sample(probs, "top-p", p=0.9)
print(f"  Nucleus (cumsum≥0.9): {dict(sorted(top_p.items(), key=lambda x:-x[1]))}")
print(f"  → sampled: '{token}' (p={top_p[token]:.4f})")
print(f"  Adaptive: includes more tokens when distribution is flat, fewer when peaked")

# Entropy + Perplexity
print(f"\\n{'=' * 60}")
print("ENTROPY & PERPLEXITY:")
probs = softmax(logits, temp=1.0)
entropy = -sum(p * math.log(p) for p in probs.values() if p > 0)
perplexity = math.exp(entropy)
print(f"  H = -Σ p(x)\xb7log(p(x)) = {entropy:.4f} bits")
print(f"  PP = exp(H) = {perplexity:.2f}")
print(f"  Lower PP = more confident model (less uncertain about next token)")
print(f"  GPT-4 on English text: PP ≈ 4-6 (very confident)")
print(f"  Random model (uniform): PP = {len(logits)} (maximally uncertain)")
print("=" * 60)`;function _(){return(0,r.jsxs)("div",{className:"space-y-8",children:[(0,r.jsx)(n.zY,{eyebrow:"Generative AI \xb7 patterns",title:"Generative AI Patterns — Autoregressive Decoding & Sampling",description:"The code and math behind text generation: BPE tokeniser training (byte pair encoding), autoregressive decoding P(y_t|y₁...yₜ₋₁), temperature/top-k/top-p sampling, entropy & perplexity. With low-level Python implementations of each algorithm + Pyodide demos that run real BPE training and text generation in the browser. Code-oriented, mathematical, scientific.",right:(0,r.jsxs)("div",{className:"flex gap-2",children:[(0,r.jsxs)(h.E,{variant:"outline",className:"gap-1.5",children:[(0,r.jsx)(x.A,{className:"h-3 w-3"})," BPE + sampling"]}),(0,r.jsxs)(h.E,{variant:"outline",className:"gap-1.5",children:[(0,r.jsx)(g.A,{className:"h-3 w-3"})," Pyodide"]})]})}),(0,r.jsx)("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-3",children:k.map(e=>(0,r.jsx)(n.nO,{label:e.label,value:e.value,hint:e.hint,deltaTone:e.deltaTone},e.label))}),(0,r.jsx)(n.iv,{title:"Autoregressive decoding — the math",description:"An LLM generates text one token at a time. Each token is sampled from the probability distribution P(y_t | y₁...yₜ₋₁) produced by the Transformer. This is autoregressive — the output feeds back as input.",icon:(0,r.jsx)(f.A,{className:"h-5 w-5"}),badge:"mathematics",children:(0,r.jsxs)("div",{className:"space-y-3",children:[(0,r.jsxs)("div",{className:"rounded-md border border-primary/30 bg-primary/5 p-3 text-center",children:[(0,r.jsx)("p",{className:"font-mono text-sm text-primary",children:"P(y₁, y₂, ..., yₙ) = ∏ₜ₌₁ⁿ P(yₜ | y₁, ..., yₜ₋₁)"}),(0,r.jsx)("p",{className:"text-[11px] text-muted-foreground mt-1",children:"Joint probability = product of conditional probabilities (chain rule)"})]}),(0,r.jsxs)("div",{className:"rounded-md border border-border/60 p-3 bg-muted/10",children:[(0,r.jsx)("p",{className:"font-mono text-xs text-foreground/90 font-semibold mb-2",children:"Forward pass per token:"}),(0,r.jsx)("p",{className:"font-mono text-sm ml-2",children:"logits = Transformer(input_ids) @ W_unembed  →  ℝ^vocab"}),(0,r.jsx)("p",{className:"font-mono text-sm ml-2",children:"probs = softmax(logits / T)                  →  ℝ^vocab"}),(0,r.jsx)("p",{className:"font-mono text-sm ml-2",children:"next_token = sample(probs, method)           →  int"}),(0,r.jsx)("p",{className:"font-mono text-sm ml-2",children:"input_ids.append(next_token)                →  autoregressive"}),(0,r.jsx)("p",{className:"text-[11px] text-muted-foreground ml-2 mt-1",children:"W_unembed ∈ ℝ^(d_model \xd7 vocab_size) — the output projection (tied with input embedding)"})]}),(0,r.jsxs)("div",{className:"rounded-md border border-border/60 p-3 bg-muted/10",children:[(0,r.jsx)("p",{className:"font-mono text-xs text-foreground/90 font-semibold mb-2",children:"KV cache optimisation:"}),(0,r.jsx)("p",{className:"text-[11px] text-muted-foreground",children:"At step t, we recompute K,V for ALL previous tokens — O(n\xb2) cost. The KV cache stores K,V from previous steps → O(n) per new token. This is why generation is fast (O(1) per token with KV cache) but attention during training is O(n\xb2)."})]})]})}),(0,r.jsx)(n.iv,{title:"Try it: BPE tokeniser training (Pyodide)",description:"Trains BPE merges on a synthetic corpus, then tokenises new text. Shows the merge rules learned. This is the algorithm behind tiktoken (OpenAI), sentencepiece (Google), and every modern tokeniser.",icon:(0,r.jsx)(b.A,{className:"h-5 w-5"}),badge:"executable",children:(0,r.jsx)(c.l,{code:w,buttonLabel:"Run BPE tokeniser (Pyodide)"})}),(0,r.jsx)(n.iv,{title:"Sampling strategies — temperature, top-k, top-p",description:"After the model produces a probability distribution over the vocabulary, how do we pick the next token? The choice of sampling strategy determines creativity vs determinism.",icon:(0,r.jsx)(y.A,{className:"h-5 w-5"}),children:(0,r.jsx)("div",{className:"space-y-3",children:(0,r.jsxs)("div",{className:"grid md:grid-cols-2 gap-3",children:[(0,r.jsxs)("div",{className:"rounded-md border border-emerald-500/40 bg-emerald-500/5 p-3",children:[(0,r.jsx)("p",{className:"font-semibold text-sm text-emerald-600 dark:text-emerald-400 mb-1",children:"Temperature (T)"}),(0,r.jsx)("p",{className:"font-mono text-xs",children:"p_i = exp(l_i / T) / Σ exp(l_j / T)"}),(0,r.jsx)("p",{className:"text-[11px] text-muted-foreground mt-1",children:"T→0: greedy (deterministic). T=1: original. T→∞: uniform (random). GPT-4 default: T=0.7."})]}),(0,r.jsxs)("div",{className:"rounded-md border border-amber-500/40 bg-amber-500/5 p-3",children:[(0,r.jsx)("p",{className:"font-semibold text-sm text-amber-600 dark:text-amber-400 mb-1",children:"Top-k"}),(0,r.jsx)("p",{className:"font-mono text-xs",children:"sample from top-k highest-prob tokens only"}),(0,r.jsx)("p",{className:"text-[11px] text-muted-foreground mt-1",children:"Prevents low-probability tokens. k=40 (GPT-3). k=0 = greedy."})]}),(0,r.jsxs)("div",{className:"rounded-md border border-violet-500/40 bg-violet-500/5 p-3",children:[(0,r.jsx)("p",{className:"font-semibold text-sm text-violet-600 dark:text-violet-400 mb-1",children:"Top-p / Nucleus"}),(0,r.jsx)("p",{className:"font-mono text-xs",children:"sample from smallest set with cumsum ≥ p"}),(0,r.jsx)("p",{className:"text-[11px] text-muted-foreground mt-1",children:"Adaptive: more tokens when flat, fewer when peaked. p=0.9 (typical)."})]}),(0,r.jsxs)("div",{className:"rounded-md border border-cyan-500/40 bg-cyan-500/5 p-3",children:[(0,r.jsx)("p",{className:"font-semibold text-sm text-cyan-600 dark:text-cyan-400 mb-1",children:"Entropy & Perplexity"}),(0,r.jsx)("p",{className:"font-mono text-xs",children:"H = -Σ p(x)\xb7log p(x),  PP = exp(H)"}),(0,r.jsx)("p",{className:"text-[11px] text-muted-foreground mt-1",children:"H measures uncertainty. PP = effective vocabulary size. GPT-4: PP≈4-6. Random: PP=vocab_size."})]})]})})}),(0,r.jsx)(n.iv,{title:"Try it: Text generation simulation — all 4 sampling methods (Pyodide)",description:"Shows greedy, temperature (T=0.5/1.0/2.0), top-k (k=3), and top-p (p=0.9) on the same logits. Computes entropy + perplexity. Real softmax + sampling computation in the browser.",icon:(0,r.jsx)(b.A,{className:"h-5 w-5"}),badge:"executable",children:(0,r.jsx)(c.l,{code:j,buttonLabel:"Run text generation demo (Pyodide)"})}),(0,r.jsx)(n.iv,{title:"Low-level code: autoregressive generation loop (PyTorch)",description:"The actual loop that generates text in production. KV cache + sampling + stopping criteria. This is what runs inside model.generate() in HuggingFace transformers.",icon:(0,r.jsx)(y.A,{className:"h-5 w-5"}),badge:"low-level",children:(0,r.jsx)(p.N,{language:"python",filename:"generate.py",highlight:[6,7,8,11,12,13,16,17,18,21,22,23,24,25,26,27,28,29,30,33,34,35],code:`import torch
import torch.nn.functional as F

def generate(model, input_ids, max_new_tokens=100, temperature=0.7,
             top_k=None, top_p=0.9):
    """Autoregressive text generation with KV cache + sampling."""
    model.eval()
    
    with torch.no_grad():
        # Initial forward pass — compute KV cache
        logits = model(input_ids)
        # logits: (batch, seq, vocab_size)
        
        for _ in range(max_new_tokens):
            # Get logits for the LAST token only (KV cache: O(1) per step)
            next_logits = logits[:, -1, :]  # (batch, vocab_size)
            
            # Temperature scaling
            next_logits = next_logits / temperature
            
            # Top-k filtering
            if top_k is not None:
                v, _ = torch.topk(next_logits, top_k)
                next_logits[next_logits < v[:, [-1]]] = float('-inf')
            
            # Top-p (nucleus) filtering
            if top_p is not None:
                sorted_logits, sorted_indices = torch.sort(next_logits, descending=True)
                cumulative_probs = F.softmax(sorted_logits, dim=-1).cumsum(dim=-1)
                sorted_indices_to_remove = cumulative_probs > top_p
                sorted_indices_to_remove[:, 0] = False  # keep at least 1
                indices_to_remove = sorted_indices_to_remove.scatter(
                    1, sorted_indices, sorted_indices_to_remove)
                next_logits[indices_to_remove] = float('-inf')
            
            # Sample
            probs = F.softmax(next_logits, dim=-1)
            next_token = torch.multinomial(probs, num_samples=1)
            
            # Append to sequence (autoregressive)
            input_ids = torch.cat([input_ids, next_token], dim=-1)
            
            # Forward pass with KV cache (only the new token)
            logits = model(next_token)  # uses cached K,V
            
            # Stop on EOS token
            if next_token.item() == eos_token_id:
                break
    
    return input_ids

# Usage
input_ids = tokenizer("The UK revenue", return_tensors="pt").input_ids
output = generate(model, input_ids, temperature=0.7, top_k=40, top_p=0.9)
print(tokenizer.decode(output[0]))`})}),(0,r.jsx)(n.iv,{title:"My deeper thought: generation IS iterative Bayesian inference",description:"Autoregressive decoding is iterative Bayesian inference. Each step updates the posterior P(y_t | y₁...yₜ₋₁) based on the evidence (previous tokens).",icon:(0,r.jsx)(v.A,{className:"h-5 w-5"}),badge:"Insight",children:(0,r.jsxs)("div",{className:"space-y-3 text-sm text-muted-foreground leading-relaxed",children:[(0,r.jsxs)("p",{children:["Autoregressive decoding P(y₁...yₙ) = ∏ₜ P(yₜ | y₁...yₜ₋₁) is the ",(0,r.jsx)("strong",{className:"text-foreground/80",children:"chain rule of probability"})," applied to sequence generation. Each step is a Bayesian update: the prior (model's learned distribution) is updated by the evidence (tokens generated so far) to produce the posterior P(yₜ | context). Temperature scaling is annealing — high T early (explore), low T late (exploit)."]}),(0,r.jsxs)("p",{children:[(0,r.jsx)("strong",{className:"text-foreground/80",children:"This connects to the platform's RL systems:"})," the Thompson sampling bandit (ADR-019) is a 1-step version of this — it samples from a Beta posterior at each step. Text generation is a multi-step version — it samples from a categorical posterior at each token. The bandit and the LLM use the same mathematical structure: posterior → sample → update. The bandit updates its Beta(α, β) parameters; the LLM updates its context window (KV cache)."]}),(0,r.jsxs)("p",{children:[(0,r.jsx)("strong",{className:"text-foreground/80",children:"The BPE tokeniser is the bridge between human language and the model's discrete space."})," Characters → subwords → tokens → embedding vectors. BPE learns the optimal granularity: too fine (characters) = long sequences = slow generation. Too coarse (whole words) = huge vocabulary = sparse embeddings. BPE finds the sweet spot — frequent words are single tokens, rare words are decomposed into subwords. This is the same trade-off as the platform's Medallion architecture: Bronze (raw) vs Gold (aggregated) — find the right granularity for the task."]}),(0,r.jsxs)("p",{children:[(0,r.jsx)("strong",{className:"text-foreground/80",children:"The unified semantic layer (ADR-024) is the generation's grounding."}),' Without grounding, the LLM generates fluent but hallucinated SQL. With MetricFlow entities + RAG context, the generation is constrained — the model can only generate tokens that reference entities the semantic layer knows. This is the same as top-k sampling constraining the vocabulary: the semantic layer constrains the "vocabulary" of valid SQL entities. Grounded generation IS constrained decoding.']})]})}),(0,r.jsxs)(u.S,{pageTitle:"Generative AI Patterns",children:[(0,r.jsx)(u.P,{title:"Generative AI Patterns IS part of a larger system — no page stands alone",connectedTo:"ADR-001 (platform architecture)",children:(0,r.jsx)("p",{children:"This page about Generative AI Patterns is not an isolated reference — it's a node in a graph. The platform's thesis is that the same math appears across genomics, fintech, maritime, and audio. Generative AI Patterns connects to the elegant-code cards via shared equations, and to the living-equation pages via live demos. The reader who arrives here looking for facts leaves with a map of where Generative AI Patterns sits in the computational-science landscape."})}),(0,r.jsx)(u.P,{title:"The technology will change; the math won't",connectedTo:"ADR-055 (cross-disciplinary scope)",children:(0,r.jsx)("p",{children:"In a decade, the specific tools on this page (Generative AI Patterns) may be replaced. But the underlying mathematics — the equations, the distributions, the optimisation rules — will be the same. SVD was invented in 1873 and still runs on NumPy today. Attention was described in 2017 and will run on whatever replaces PyTorch. The platform invests in the MATH, not the tools, because the math is the part that survives technology turnover."})}),(0,r.jsx)(u.P,{title:"The fold pattern respects the reader's attention",connectedTo:"ADR-050 (fold-section architecture)",children:(0,r.jsx)("p",{children:"This page has fold sections (collapsed by default) that reveal deeper content on demand — equation family comparisons, LaTeX derivations, production patterns, expected outputs, and citations. The basic content is visible immediately; the deeper phases are there when the reader is ready. Progressive disclosure isn't just UX — it's epistemological. A reader who wants the summary gets it; a reader who wants the derivation clicks to expand. Both are served by the same page."})}),(0,r.jsx)(u.P,{title:"The output IS the proof — not just the equation",connectedTo:"ADR-034 (ESM-2 + AlphaFold2 adoption)",children:(0,r.jsx)("p",{children:"Where this page has interactive demos (Pyodide + sliders + charts), the visual output IS the argument. Seeing a chart update as you drag a slider communicates the math in a way no formula can. The brain's pattern-recognition system processes the visual output faster than the verbal/analytical pathway. That's why the platform pairs every equation with a live demo — the output plays to a different level of the brain than the prose."})}),(0,r.jsx)(u.P,{title:"In a decade, this page will evolve — and that's the point",connectedTo:"ADR-022 (pgvector for variant embeddings)",children:(0,r.jsx)("p",{children:"The datasets, libraries, and tools on this page will be updated as technology evolves. The 1000-Genomes Project will become the 10M-Genomes Project. NumPy may be replaced by a WebGPU-native array library. PyTorch may give way to a successor. But the math — SVD, Attention, Poisson, FFT, Bayes, Kalman, GBM — will be the same. The platform is designed for this evolution: the equations are the anchor, the tools are the amplifier, and the fold sections let us update the tools without rewriting the page."})})]}),(0,r.jsx)(d.R,{pageId:"gen-ai-patterns"}),(0,r.jsx)(l.B,{pageId:"gen-ai-patterns"}),(0,r.jsx)(o.T,{relatedPages:[{id:"connections",reason:"Trace this topic's connections across the platform's math graph"},{id:"transformer",reason:"Continue to transformer — see also from this page"},{id:"fine-tuning",reason:"Continue to fine tuning — see also from this page"}]}),(0,r.jsxs)("div",{className:"flex flex-wrap gap-2",children:[(0,r.jsx)(i(),{href:(0,m.ZJ)("transformer"),className:"text-sm text-primary hover:underline",children:"→ Transformer (the model that generates)"}),(0,r.jsx)("span",{className:"text-muted-foreground",children:"\xb7"}),(0,r.jsx)(i(),{href:(0,m.ZJ)("fine-tuning"),className:"text-sm text-primary hover:underline",children:"→ Fine-Tuning (adapting the model)"}),(0,r.jsx)("span",{className:"text-muted-foreground",children:"\xb7"}),(0,r.jsx)(i(),{href:(0,m.ZJ)("comp-sci-materials"),className:"text-sm text-primary hover:underline",children:"→ Computational Science (the hardware)"}),(0,r.jsx)("span",{className:"text-muted-foreground",children:"\xb7"}),(0,r.jsx)(i(),{href:(0,m.ZJ)("rag-llms"),className:"text-sm text-primary hover:underline",children:"→ RAG (grounding the generation)"})]})]})}},19776:(e,t,s)=>{"use strict";s.d(t,{N:()=>d,R:()=>l});var r=s(95155),a=s(12115),i=s(94514),n=s(67635),o=s(89239);function d({code:e,language:t="sql",filename:s,highlight:d=[]}){let[l,p]=(0,a.useState)(!1),c=e.replace(/\n$/,"").split("\n"),m=async()=>{try{await navigator.clipboard.writeText(e),p(!0),setTimeout(()=>p(!1),1500)}catch{}};return(0,r.jsxs)("div",{className:"rounded-md border border-border/60 bg-[oklch(0.16_0.005_240)] text-[oklch(0.97_0.005_60)] overflow-hidden",children:[(0,r.jsxs)("div",{className:"flex items-center justify-between px-3 py-1.5 border-b border-white/10 bg-white/5",children:[(0,r.jsxs)("div",{className:"flex items-center gap-2 text-[11px] text-white/60 font-mono",children:[(0,r.jsx)("span",{className:"h-2 w-2 rounded-full bg-rose-400"}),(0,r.jsx)("span",{className:"h-2 w-2 rounded-full bg-amber-400"}),(0,r.jsx)("span",{className:"h-2 w-2 rounded-full bg-emerald-400"}),(0,r.jsx)("span",{className:"ml-2 uppercase tracking-wider",children:t}),s&&(0,r.jsxs)("span",{className:"text-white/40",children:["\xb7 ",s]})]}),(0,r.jsxs)(o.$,{variant:"ghost",size:"sm",className:"h-6 px-2 text-[11px] text-white/70 hover:text-white hover:bg-white/10",onClick:m,"aria-label":"Copy code",children:[l?(0,r.jsx)(i.A,{className:"h-3 w-3 mr-1"}):(0,r.jsx)(n.A,{className:"h-3 w-3 mr-1"}),l?"Copied":"Copy"]})]}),(0,r.jsx)("pre",{className:"code-scroll overflow-x-auto p-3 text-[12.5px] leading-relaxed font-mono",children:(0,r.jsx)("code",{children:c.map((e,t)=>{let s=t+1,a=d.includes(s);return(0,r.jsxs)("div",{className:["flex",a?"bg-primary/20 -mx-3 px-3 border-l-2 border-primary":""].join(" "),children:[(0,r.jsx)("span",{className:"select-none text-white/30 w-8 inline-block text-right pr-3 shrink-0",children:s}),(0,r.jsx)("span",{className:"whitespace-pre",children:e||" "})]},s)})})})]})}function l({children:e}){return(0,r.jsx)("code",{className:"rounded bg-muted px-1.5 py-0.5 text-[12px] font-mono text-foreground/90 border border-border/60",children:e})}},22164:(e,t,s)=>{"use strict";s.d(t,{A:()=>r});let r=(0,s(6404).A)("external-link",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]])},53961:(e,t,s)=>{"use strict";s.d(t,{A:()=>r});let r=(0,s(6404).A)("zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]])},60508:(e,t,s)=>{"use strict";s.d(t,{R:()=>y});var r=s(95155),a=s(12115),i=s(45160),n=s(89239),o=s(66349),d=s(85404),l=s(58381),p=s(79275),c=s(48368),m=s(22164),h=s(86901),u=s(89123),x=s(21628),g=s(98500),f=s.n(g),b=s(85757);function y({pageId:e}){let t=(0,p.C6)(e);return 0===t.length?null:(0,r.jsxs)(l.iv,{title:"Recent research (2023-2025)",description:"Modern papers that extend the math, code, and tools on this page.",icon:(0,r.jsx)(c.A,{className:"h-5 w-5"}),badge:`${t.length} paper${1===t.length?"":"s"}`,badgeVariant:"outline",contentClassName:"space-y-4",children:[t.map((e,t)=>(0,r.jsx)(v,{entry:e},t)),(0,r.jsxs)("p",{className:"text-[11px] text-muted-foreground italic",children:[t.length," paper",1===t.length?"":"s"," mapped to this page. Each shows the key algorithm + expected output (rendered as charts when the code produces JSON). Run the code in-browser via Pyodide."]})]})}function v({entry:e}){let[t,s]=(0,a.useState)(!1),[l,p]=(0,a.useState)(null);return(0,r.jsxs)("div",{className:"rounded-lg border border-border/60 p-4 space-y-3 hover:border-primary/30 transition-colors",children:[(0,r.jsxs)("div",{className:"space-y-1",children:[(0,r.jsxs)("div",{className:"flex items-start justify-between gap-3",children:[(0,r.jsx)("h4",{className:"text-sm font-semibold leading-tight flex-1",children:e.paperTitle}),(0,r.jsx)(i.E,{variant:"outline",className:"text-[10px] shrink-0",children:e.venue})]}),(0,r.jsxs)("p",{className:"text-[11px] text-muted-foreground",children:[e.authors," \xb7 ",e.year]}),e.arxivId&&(0,r.jsxs)("a",{href:`https://arxiv.org/abs/${e.arxivId}`,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-1 text-[11px] text-primary hover:underline",children:[(0,r.jsx)(m.A,{className:"h-3 w-3"}),"arXiv:",e.arxivId]}),e.doi&&!e.arxivId&&(0,r.jsxs)("a",{href:`https://doi.org/${e.doi}`,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-1 text-[11px] text-primary hover:underline",children:[(0,r.jsx)(m.A,{className:"h-3 w-3"}),"DOI:",e.doi]})]}),(0,r.jsx)("p",{className:"text-[12px] text-muted-foreground leading-relaxed",children:e.abstract}),(0,r.jsxs)(n.$,{variant:"outline",size:"sm",onClick:()=>s(!t),className:"h-7 text-[11px] gap-1.5",children:[(0,r.jsx)(h.A,{className:"h-3 w-3"}),t?"Hide expected code":"Show expected code + visualization"]}),t&&(0,r.jsxs)("div",{className:"space-y-2",children:[(0,r.jsx)(o.l,{code:e.expectedCode,buttonLabel:"Run in browser",onOutput:e=>{try{let t=e.indexOf("{"),s=e.lastIndexOf("}");if(t>=0&&s>t){let r=e.substring(t,s+1);p(JSON.parse(r))}}catch{}},hideTextOutput:!!l,compact:!0}),l?(0,r.jsxs)("div",{className:"space-y-2",children:[(0,r.jsxs)("div",{className:"flex items-center gap-1.5",children:[(0,r.jsx)(u.A,{className:"h-3.5 w-3.5 text-primary"}),(0,r.jsx)("p",{className:"text-[10px] uppercase tracking-wider text-muted-foreground",children:"Visualization (rendered from code output)"})]}),(0,r.jsx)(d.D,{data:l,accent:"oklch(0.65 0.18 250)",sourceCode:e.expectedCode})]}):(0,r.jsxs)("div",{className:"rounded-md border border-primary/20 bg-primary/5 p-2.5",children:[(0,r.jsx)("p",{className:"text-[10px] uppercase tracking-wider text-muted-foreground mb-1",children:"Expected output"}),(0,r.jsx)("pre",{className:"text-[11px] font-mono whitespace-pre-wrap leading-relaxed",children:e.expectedOutput})]}),(0,r.jsxs)("div",{className:"rounded-md border border-emerald-500/30 bg-emerald-500/5 p-2.5",children:[(0,r.jsx)("p",{className:"text-[10px] uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-1",children:"Key insight"}),(0,r.jsx)("p",{className:"text-[12px] text-foreground/80 leading-relaxed",children:e.keyInsight})]})]}),(0,r.jsxs)(f(),{href:(0,b.ZJ)("analytics-outputs"),className:"inline-flex items-center gap-1 text-[11px] text-primary hover:underline",children:["See this math visualized on Analytics Outputs ",(0,r.jsx)(x.A,{className:"h-3 w-3"})]})]})}},65576:(e,t,s)=>{"use strict";s.d(t,{A:()=>r});let r=(0,s(6404).A)("cpu",[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]])},67635:(e,t,s)=>{"use strict";s.d(t,{A:()=>r});let r=(0,s(6404).A)("copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]])},83036:(e,t,s)=>{"use strict";s.d(t,{P:()=>l,S:()=>p});var r=s(95155),a=s(98500),i=s.n(a),n=s(44071),o=s(97810),d=s(85757);function l({title:e,connectedTo:t,researchHref:s,children:a}){return(0,r.jsxs)("div",{className:"rounded-md border border-primary/30 bg-primary/5 p-4 space-y-2",children:[(0,r.jsxs)("div",{className:"flex items-start gap-2",children:[(0,r.jsx)(n.A,{className:"h-4 w-4 text-primary mt-0.5 shrink-0"}),(0,r.jsxs)("div",{className:"flex-1 min-w-0",children:[(0,r.jsx)("p",{className:"text-sm font-semibold text-foreground/90 leading-tight",children:e}),t&&(0,r.jsxs)("div",{className:"flex items-center gap-1.5 mt-1",children:[(0,r.jsx)(o.A,{className:"h-3 w-3 text-muted-foreground"}),(0,r.jsxs)(i(),{href:s??(0,d.ZJ)("research"),className:"text-[10px] text-muted-foreground hover:text-primary hover:underline",children:["Connected to: ",t," →"]})]})]})]}),(0,r.jsx)("div",{className:"text-xs text-muted-foreground leading-relaxed space-y-2 pl-6",children:a})]})}function p({pageTitle:e,children:t}){return(0,r.jsxs)("div",{className:"space-y-4",children:[(0,r.jsxs)("div",{className:"flex items-center gap-2 border-b border-border/60 pb-2",children:[(0,r.jsx)(n.A,{className:"h-5 w-5 text-primary"}),(0,r.jsxs)("h2",{className:"text-base font-bold text-foreground/90",children:["My deeper thoughts — ",e]})]}),(0,r.jsx)("p",{className:"text-xs text-muted-foreground italic leading-relaxed",children:"These are not summaries. They are arguments — the kind of connections a reader with serious grey matter would make after living with the material for years. Each thought connects to the platform's research section (ADRs, papers, decision records) so it's traceable, not just opinionated."}),(0,r.jsx)("div",{className:"space-y-3",children:t})]})}},86901:(e,t,s)=>{"use strict";s.d(t,{A:()=>r});let r=(0,s(6404).A)("sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]])},90718:(e,t,s)=>{"use strict";s.d(t,{A:()=>r});let r=(0,s(6404).A)("brain",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]])},94514:(e,t,s)=>{"use strict";s.d(t,{A:()=>r});let r=(0,s(6404).A)("check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]])},96079:(e,t,s)=>{Promise.resolve().then(s.bind(s,19668))},97810:(e,t,s)=>{"use strict";s.d(t,{A:()=>r});let r=(0,s(6404).A)("book-open",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]])}},e=>{e.O(0,[6919,8500,9430,3493,9760,7591,6012,9237,4843,9620,6722,5404,9275,2194,8441,3794,7358],()=>e(e.s=96079)),_N_E=e.O()}]);