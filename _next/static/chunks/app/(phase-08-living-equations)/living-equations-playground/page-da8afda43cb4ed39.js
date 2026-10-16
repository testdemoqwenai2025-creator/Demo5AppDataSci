(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[272],{7915:(e,a,t)=>{"use strict";t.d(a,{A:()=>n});let n=(0,t(6404).A)("eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]])},21362:(e,a,t)=>{"use strict";t.d(a,{A:()=>n});let n=(0,t(6404).A)("chevron-right",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]])},22333:(e,a,t)=>{"use strict";t.d(a,{default:()=>N});var n=t(95155),s=t(39430),i=t(86901),r=t(56842),o=t(65576),l=t(87557),m=t(53961),p=t(8195),d=t(65091);let c=[{id:"playground-svd",title:"Singular Value Decomposition",badge:"Linear Algebra",description:"Decomposes a matrix A into U Σ Vᵀ. The singular values σᵢ measure how much each orthogonal axis contributes to the spectral energy. Truncating to the top-k components gives optimal low-rank approximation (Eckart–Young).",mathLatex:"A = U Σ Vᵀ,   A_k = argmin_rank(A_k) ≤ k ‖A − A_k‖_F",mathToCode:[{symbol:"A",code:"img",explanation:"input matrix (n\xd7n)"},{symbol:"U",code:"U[:, :k]",explanation:"left singular vectors, n\xd7k"},{symbol:"Σ",code:"np.diag(S[:k])",explanation:"singular values, k\xd7k diagonal"},{symbol:"Vᵀ",code:"Vt[:k, :]",explanation:"right singular vectors, k\xd7n"},{symbol:"σᵢ",code:"S[i]",explanation:"i-th singular value"},{symbol:"A_k",code:"U[:,:k] @ np.diag(S[:k]) @ Vt[:k,:]",explanation:"truncated rank-k reconstruction"},{symbol:"‖A−A_k‖_F",code:"np.linalg.norm(img - compressed)",explanation:"Frobenius reconstruction error"},{symbol:"energy",code:"np.sum(S[:k]**2) / np.sum(S**2)",explanation:"fraction of spectral energy retained"}],observeMore:{param:"k",initial:2,steps:[5,10,20],label:"k (components)",unit:"components"},defaultExpr:"svd(matrix=golay, k=5)",placeholder:"svd(matrix=golay, k=5)",generateCode:e=>{let a=(0,d.oJ)(e.named,"matrix","golay"),t=(0,d.i)(e.named,"k",5);return`# ============================================================
# Mathematical Expression:
#   A = U Σ Vᵀ
#   A_k = U_k Σ_k V_kᵀ  (truncated, rank-k approximation)
#   Eckart–Young: A_k = argmin_rank(B)≤k ‖A − B‖_F
#
# Math → Code mapping:
#   A           → img                    (input matrix, n\xd7n)
#   U           → U[:, :k]               (left singular vectors, n\xd7k)
#   Σ           → np.diag(S[:k])         (singular values, k\xd7k diagonal)
#   Vᵀ          → Vt[:k, :]              (right singular vectors, k\xd7n)
#   σᵢ          → S[i]                   (singular values array)
#   A_k         → U[:, :k] @ np.diag(S[:k]) @ Vt[:k, :]
#   ‖A − A_k‖_F → np.linalg.norm(img - compressed)
#   energy      → Σ(σᵢ\xb2 for i≤k) / Σ(σᵢ\xb2)
# ============================================================

import numpy as np, json
np.random.seed(42)
n = 32  # matrix dimension
matrix_kind = "${a}"  # ← matrix parameter from the expression
if matrix_kind == "golay":
    a = [1,1,1,-1]
    for _ in range(4):
        a = a + a
        a2 = [-x for x in a]
        a = a + a2[-len(a):]
    img = np.outer(a[:n], a[:n])  # ← A (structured matrix)
elif matrix_kind == "noise":
    img = np.random.randn(n, n)   # ← A (random matrix)
else:
    img = np.eye(n) + 0.1 * np.random.randn(n, n)  # ← A

U, S, Vt = np.linalg.svd(img)    # ← A = U Σ Vᵀ  (full decomposition)
k = ${t}                          # ← k parameter from the expression
compressed = U[:, :k] @ np.diag(S[:k]) @ Vt[:k, :]  # ← A_k = U_k Σ_k V_kᵀ
error = float(np.linalg.norm(img - compressed) / np.linalg.norm(img))  # ← ‖A−A_k‖_F / ‖A‖_F
energy = float(np.sum(S[:k]**2) / np.sum(S**2))  # ← Σ σᵢ\xb2(i≤k) / Σ σᵢ\xb2(all)
print(json.dumps({
  "chart_type": "bar",
  "title": f"Singular values σᵢ (k={k})",
  "series": [{"name": "σᵢ", "data": [{"x": i+1, "y": float(s)} for i, s in enumerate(S)]}],
  "stats": [
    {"label": "k", "value": str(k)},
    {"label": "compression", "value": f"{k}/{n} = {k/n:.1%}"},
    {"label": "reconstruction error", "value": f"{error:.4f}"},
    {"label": "energy retained", "value": f"{energy:.1%}"},
  ],
  "summary": f"SVD with k={k} of {n} components captures {energy:.1%} of spectral energy. Reconstruction error = {error:.4f} (relative Frobenius). Per Eckart–Young, this is the optimal rank-k approximation."
}))`},parseOutput:e=>{let a=JSON.parse(e);return{chart:a,stats:(a.stats??[]).map(e=>({label:e.label,value:e.value})),summary:{text:a.summary??"SVD computed.",caveat:"Eckart–Young theorem: the truncated SVD is the best rank-k approximation in Frobenius / spectral norm."}}}},{id:"playground-attention",title:"Self-Attention (Vaswani et al. 2017)",badge:"Transformers",description:"Scaled dot-product self-attention. Three projections Q, K, V map a sequence of token embeddings to a contextualised representation. The softmax over QKᵀ/√d_k determines which tokens attend to which.",mathLatex:"Attention(Q, K, V) = softmax(Q Kᵀ / √d_k) \xb7 V",mathToCode:[{symbol:"Q",code:"np.random.randn(n, d_k)",explanation:"query projections (random for demo)"},{symbol:"K",code:"np.random.randn(n, d_k)",explanation:"key projections (random for demo)"},{symbol:"V",code:"np.random.randn(n, d_k)",explanation:"value projections (random for demo)"},{symbol:"QKᵀ",code:"Q @ K.T",explanation:"dot product, n\xd7n"},{symbol:"√d_k",code:"np.sqrt(d_k)",explanation:"scaling factor (prevents saturation)"},{symbol:"softmax(\xb7)",code:"exp(x-max) / sum(exp(x-max))",explanation:"numerically stable softmax"},{symbol:"\xb7V",code:"attn @ V",explanation:"apply attention weights to values"}],observeMore:{param:"d_k",initial:8,steps:[32,64,128],label:"d_k (head dim)",unit:"dimensions"},defaultExpr:'attention(seq="the cat sat on mat", d_k=64)',placeholder:'attention(seq="the cat sat on mat", d_k=64)',generateCode:e=>{let a=(0,d.oJ)(e.named,"seq","the cat sat on mat"),t=(0,d.i)(e.named,"d_k",64);return`# ============================================================
# Mathematical Expression:
#   Attention(Q, K, V) = softmax(Q Kᵀ / √d_k) \xb7 V
#
# Math → Code mapping:
#   Q              → Q = np.random.randn(n, d_k)    (query projections)
#   K              → K = np.random.randn(n, d_k)    (key projections)
#   V              → V = np.random.randn(n, d_k)    (value projections)
#   Q Kᵀ           → Q @ K.T                         (dot product, n\xd7n)
#   √d_k           → np.sqrt(d_k)                    (scaling factor)
#   Q Kᵀ / √d_k    → scores = Q @ K.T / np.sqrt(d_k)
#   softmax(\xb7)     → exp(x-max) / sum(exp(x-max))     (numerically stable)
#   softmax(\xb7) \xb7 V → attn @ V                         (apply attention to values)
# ============================================================

import numpy as np, json
np.random.seed(42)
seq = "${a}".split()  # ← input token sequence (math: the sequence to attend over)
n = len(seq)               # ← n (sequence length)
d_k = ${t}                # ← d_k parameter from the expression (head dimension)
Q = np.random.randn(n, d_k)  # ← Q (query projection — random for demo; real: Q = X @ W_Q)
K = np.random.randn(n, d_k)  # ← K (key projection — random for demo; real: K = X @ W_K)
V = np.random.randn(n, d_k)  # ← V (value projection — random for demo; real: V = X @ W_V)
scores = Q @ K.T / np.sqrt(d_k)  # ← Q Kᵀ / √d_k  (scaled dot product)
exp_s = np.exp(scores - np.max(scores, axis=-1, keepdims=True))  # ← exp(\xb7) for softmax (stable)
attn = exp_s / np.sum(exp_s, axis=-1, keepdims=True)              # ← softmax(\xb7) (row-normalize)
out = attn @ V  # ← softmax(\xb7) \xb7 V  (apply attention weights to values)
matrix = [{"x": j, "y": i, "v": float(attn[i, j])} for i in range(n) for j in range(n)]
ent = float(-np.sum(attn * np.log(attn + 1e-12)) / n)  # ← H(attn) = -Σ p\xb7log(p) (entropy)
print(json.dumps({
  "chart_type": "heatmap",
  "title": f"Attention weights (n={n}, d_k={d_k})",
  "series": [{"name": "attn", "data": matrix}],
  "x_label": "key position",
  "y_label": "query position",
  "stats": [
    {"label": "seq_len", "value": str(n)},
    {"label": "d_k", "value": str(d_k)},
    {"label": "max_attn", "value": f"{float(attn.max()):.3f}"},
    {"label": "entropy", "value": f"{ent:.3f} nats", "hint": "low = sharp attention"},
  ],
  "summary": f"Self-attention over '{" ".join(seq)}' (d_k={d_k}). Row i shows how token i distributes attention across all keys. Entropy {ent:.3f} nats/token — {ent < 1.0 and 'sharp' or 'diffuse'} attention pattern."
}))`},parseOutput:e=>{let a=JSON.parse(e);return{chart:a,stats:(a.stats??[]).map(e=>({label:e.label,value:e.value})),summary:{text:a.summary??"Attention computed.",caveat:"1/√d_k scaling prevents the softmax from saturating to one-hot as d_k grows. Without it, dot products explode, gradients vanish."}}}},{id:"playground-black-scholes",title:"Black–Scholes Option Pricing",badge:"Quantitative Finance",description:"Closed-form price for a European call option under geometric Brownian motion. Inputs: S (spot), K (strike), T (years to expiry), r (risk-free rate), σ (volatility). The formula assumes log-normal returns, no dividends, continuous trading.",mathLatex:"C = S \xb7 N(d₁) − K \xb7 e^(−rT) \xb7 N(d₂),   d₁ = (ln(S/K) + (r + σ\xb2/2)T) / (σ√T)",mathToCode:[{symbol:"S",code:"spots = np.linspace(50, 150, 30)",explanation:"spot price range"},{symbol:"K",code:"K = 105",explanation:"strike price (parameter)"},{symbol:"T",code:"T = 0.5",explanation:"time to expiry in years (parameter)"},{symbol:"r",code:"r = 0.05",explanation:"risk-free rate (parameter)"},{symbol:"σ",code:"sigma = 0.2",explanation:"volatility (parameter)"},{symbol:"d₁",code:"(log(S/K) + (r+σ\xb2/2)\xb7T) / (σ\xb7√T)",explanation:"first argument of N(\xb7)"},{symbol:"d₂",code:"d₁ - σ\xb7√T",explanation:"second argument of N(\xb7)"},{symbol:"N(\xb7)",code:"norm_cdf(x) = 0.5\xb7(1 + erf(x/√2))",explanation:"standard normal CDF"},{symbol:"C",code:"S\xb7N(d₁) - K\xb7e^(-rT)\xb7N(d₂)",explanation:"call option price"}],defaultExpr:"black_scholes(S=100, K=105, T=0.5, r=0.05, sigma=0.2)",placeholder:"black_scholes(S=100, K=100, T=1, r=0.05, sigma=0.2)",generateCode:e=>{let a=(0,d.i)(e.named,"S",100),t=(0,d.i)(e.named,"K",105),n=(0,d.i)(e.named,"T",.5),s=(0,d.i)(e.named,"r",.05),i=(0,d.i)(e.named,"sigma",.2);return`# ============================================================
# Mathematical Expression:
#   C = S \xb7 N(d₁) − K \xb7 e^(−rT) \xb7 N(d₂),   d₁ = (ln(S/K) + (r + σ\xb2/2)T) / (σ√T)
#
# Each line below is annotated with # ← <math symbol> showing
# which part of the expression it implements.
# ============================================================

import numpy as np, json
from math import log, sqrt, exp, erf
S = ${a}; K = ${t}; T = ${n}; r = ${s}; sigma = ${i}
def norm_cdf(x): return 0.5 * (1 + erf(x / sqrt(2)))
def bs_call(s, k, t, rr, sg):
    if t <= 0: return max(s - k, 0)
    d1 = (log(s/k) + (rr + sg**2/2)*t) / (sg * sqrt(t))
    d2 = d1 - sg * sqrt(t)
    return s * norm_cdf(d1) - k * exp(-rr*t) * norm_cdf(d2)
spots = np.linspace(50, 150, 30)
bs_prices = [bs_call(s, K, T, r, sigma) for s in spots]
intrinsic = [max(s - K, 0) for s in spots]
atm = bs_call(K, K, T, r, sigma)
time_value = atm - max(K - K, 0)  # at-the-money time value
print(json.dumps({
  "chart_type": "line",
  "title": f"Call price vs spot (K={K}, T={T}y, σ={sigma})",
  "series": [
    {"name": "BS call", "data": [{"x": float(s), "y": float(p)} for s, p in zip(spots, bs_prices)]},
    {"name": "intrinsic", "data": [{"x": float(s), "y": float(i)} for s, i in zip(spots, intrinsic)]},
  ],
  "x_label": "spot price S",
  "y_label": "call price C",
  "reference_lines": [{"x": ${t}, "label": "strike K"}],
  "stats": [
    {"label": "S (spot)", "value": str(S)},
    {"label": "K (strike)", "value": str(K)},
    {"label": "T", "value": f"{T}y"},
    {"label": "r", "value": f"{r}"},
    {"label": "σ", "value": f"{sigma}"},
    {"label": "ATM price", "value": f"{atm:.2f}", "hint": "at-the-money call"},
  ],
  "summary": f"Black-Scholes call price across spot prices. ATM call (S=K) costs {atm:.2f}. The gap between BS price and intrinsic value (max(S−K, 0)) is the time value — decays as T→0."
}))`},parseOutput:e=>{let a=JSON.parse(e);return{chart:a,stats:(a.stats??[]).map(e=>({label:e.label,value:e.value})),summary:{text:a.summary??"Black-Scholes computed.",caveat:"BS assumes log-normal returns, constant volatility, no dividends, continuous trading. Real markets have volatility smiles/skews; use SABR or local-vol models for production pricing."}}}},{id:"playground-monte-carlo-pi",title:"Monte Carlo π Estimation",badge:"Stochastic Methods",description:"Estimates π by sampling N uniform points in [−1, 1]\xb2 and computing 4 \xd7 (fraction inside unit circle). Convergence is O(1/√N) by the Central Limit Theorem — slow but embarrassingly parallel.",mathLatex:"π̂ = 4/N \xb7 #|{xᵢ\xb2 + yᵢ\xb2 ≤ 1}|,   π̂ − π = O(1/√N)",mathToCode:[{symbol:"N",code:"N = 5000",explanation:"number of random samples (parameter)"},{symbol:"xᵢ, yᵢ",code:"np.random.uniform(-1, 1, (N, 2))",explanation:"uniform points in [-1,1]\xb2"},{symbol:"inside",code:"pts[:,0]**2 + pts[:,1]**2 <= 1",explanation:"count points inside unit circle"},{symbol:"π̂",code:"4 * np.sum(inside) / N",explanation:"Monte Carlo estimate of π"},{symbol:"error",code:"abs(π̂ - π)",explanation:"absolute error"},{symbol:"convergence",code:"O(1/√N)",explanation:"halve error → 4\xd7 samples (CLT)"}],observeMore:{param:"N",initial:100,steps:[500,2e3,5e3,1e4],label:"N (samples)",unit:"samples"},defaultExpr:"monte_carlo_pi(N=5000)",placeholder:"monte_carlo_pi(N=5000)",generateCode:e=>{let a=Math.max(10,Math.floor((0,d.i)(e.named,"N",5e3)));return`# ============================================================
# Mathematical Expression:
#   π̂ = 4/N \xb7 #|{xᵢ\xb2 + yᵢ\xb2 ≤ 1}|,   π̂ − π = O(1/√N)
#
# Each line below is annotated with # ← <math symbol> showing
# which part of the expression it implements.
# ============================================================

import numpy as np, json
np.random.seed(42)
N = ${a}
pts = np.random.uniform(-1, 1, (N, 2))
inside = pts[:, 0]**2 + pts[:, 1]**2 <= 1
pi_est = 4 * np.sum(inside) / N
# convergence: estimate π as N grows (log-spaced checkpoints)
checkpoints = sorted(set([10, 50, 100, 500, 1000, 2000, 5000, N]))
Ns = [n for n in checkpoints if n <= N]
pis = []
for n in Ns:
    sub = pts[:n]
    in_sub = sub[:, 0]**2 + sub[:, 1]**2 <= 1
    pis.append(4 * np.sum(in_sub) / n)
print(json.dumps({
  "chart_type": "line",
  "title": f"Monte Carlo π convergence (N={N})",
  "series": [{"name": "π estimate", "data": [{"x": n, "y": float(p)} for n, p in zip(Ns, pis)]}],
  "reference_lines": [{"y": 3.14159265, "label": "true π"}],
  "x_label": "N (samples)",
  "y_label": "π estimate",
  "stats": [
    {"label": "N", "value": str(N)},
    {"label": "π estimate", "value": f"{pi_est:.4f}"},
    {"label": "error", "value": f"{abs(pi_est - 3.141592653589793):.4f}"},
    {"label": "convergence", "value": "O(1/√N)", "hint": "halve error → 4\xd7 samples"},
  ],
  "summary": f"Monte Carlo estimate of π via {N} random points in [−1,1]\xb2. Estimate: {pi_est:.4f} (true π = 3.1416, error = {abs(pi_est - 3.141592653589793):.4f}). Convergence rate O(1/√N) — to halve the error, quadruple the samples."
}))`},parseOutput:e=>{let a=JSON.parse(e);return{chart:a,stats:(a.stats??[]).map(e=>({label:e.label,value:e.value})),summary:{text:a.summary??"Monte Carlo computed.",caveat:"Quasi-Monte Carlo (Sobol, Halton sequences) gives O((log N)^d / N) convergence — exponentially better than random sampling for smooth integrands."}}}},{id:"playground-fft",title:"Fast Fourier Transform",badge:"Signal Processing",description:"Decomposes a discrete signal into its constituent frequencies via the Cooley-Tukey algorithm (O(N log N) vs O(N\xb2) for the naive DFT). The same transform reveals audio chords, image edges (high-freq), and NMR chemical shifts.",mathLatex:"X[k] = \\sum_{n=0}^{N-1} x[n] \\, e^{-2\\pi i \\, k n / N}",mathToCode:[{symbol:"x[n]",code:"np.sin(2π\xb7f\xb7t)",explanation:"discrete signal (sum of sinusoids)"},{symbol:"X[k]",code:"np.fft.fft(x)",explanation:"DFT via Cooley-Tukey algorithm"},{symbol:"|X[k]|",code:"np.abs(X)[:N//2]",explanation:"magnitude spectrum (one-sided)"},{symbol:"f_k",code:"np.fft.fftfreq(N, 1/fs)[:N//2]",explanation:"frequency bins"},{symbol:"N",code:"N = 2048",explanation:"window size (power of 2 for O(N log N))"},{symbol:"fs",code:"fs = 8000",explanation:"sample rate in Hz"}],observeMore:{param:"N",initial:128,steps:[512,1024,2048],label:"N (window)",unit:"samples"},defaultExpr:"fft(signal='c-major', N=2048, fs=8000)",placeholder:"fft(signal='c-major', N=2048, fs=8000)",generateCode:e=>{let a=(0,d.oJ)(e.named,"signal","c-major"),t=Math.max(64,Math.floor((0,d.i)(e.named,"N",2048))),n=Math.max(100,Math.floor((0,d.i)(e.named,"fs",8e3)));return`# ============================================================
# Mathematical Expression:
#   X[k] = \\sum_{n=0}^{N-1} x[n] \\, e^{-2\\pi i \\, k n / N}
#
# Each line below is annotated with # ← <math symbol> showing
# which part of the expression it implements.
# ============================================================

import numpy as np, json
np.random.seed(42)
signal_kind = ${JSON.stringify(a)}
N = ${t}
fs = ${n}
t = np.arange(N) / fs

if signal_kind == "c-major":
    # C4 + E4 + G4 (a major chord)
    freqs_true = [261.63, 329.63, 392.00]
    x = sum(np.sin(2*np.pi*f*t) for f in freqs_true)
elif signal_kind == "a-minor":
    # A3 + C4 + E4 (a minor chord)
    freqs_true = [220.00, 261.63, 329.63]
    x = sum(np.sin(2*np.pi*f*t) for f in freqs_true)
elif signal_kind == "single-tone":
    freqs_true = [440.0]  # A4
    x = np.sin(2*np.pi*440*t)
elif signal_kind == "noise":
    freqs_true = []
    x = np.random.randn(N)
else:
    freqs_true = [440.0]
    x = np.sin(2*np.pi*440*t)

x = x + 0.05 * np.random.randn(N)  # add noise floor
X = np.fft.fft(x)
mag = np.abs(X)[:N//2]
freqs = np.fft.fftfreq(N, 1/fs)[:N//2]
top_idx = np.argsort(mag)[-5:][::-1]
peaks = [{"freq": float(freqs[i]), "mag": float(mag[i])} for i in top_idx if mag[i] > 0.01 * mag.max()]
peaks_sorted = sorted(peaks, key=lambda p: p["freq"])[:4]

print(json.dumps({
  "chart_type": "line",
  "title": f"FFT spectrum of '{signal_kind}' signal (N={N}, fs={fs})",
  "series": [{"name": "|X[k]|", "data": [{"x": float(f), "y": float(m)} for f, m in zip(freqs, mag)]}],
  "x_label": "frequency (Hz)",
  "y_label": "magnitude",
  "stats": [
    {"label": "N", "value": str(N)},
    {"label": "sample rate", "value": f"{fs} Hz"},
    {"label": "freq resolution", "value": f"{fs/N:.2f} Hz"},
    {"label": "peaks", "value": ", ".join(f"{p['freq']:.1f}" for p in peaks_sorted) or "none"},
  ],
  "summary": f"FFT reveals the frequency content of the '{signal_kind}' signal. Peaks at: {', '.join(f'{p['freq']:.1f} Hz' for p in peaks_sorted) or 'no clear peaks'}. The same algorithm reveals audio chords (Shazam), image edges (JPEG DCT), and NMR chemical shifts (protein structure)."
}))`},parseOutput:e=>{let a=JSON.parse(e);return{chart:a,stats:(a.stats??[]).map(e=>({label:e.label,value:e.value})),summary:{text:a.summary??"FFT computed.",caveat:"Cooley-Tukey FFT requires N to be a power of 2 for O(N log N). For arbitrary N, use Bluestein's algorithm (also O(N log N))."}}}},{id:"playground-poisson",title:"Poisson Distribution",badge:"Statistics",description:"Models the count of independent rare events in a fixed interval: P(k) = λ^k\xb7e^(-λ)/k!. Mean = variance = λ is the signature. Same distribution for sequencing read depth, call-center arrivals, and radioactive decays — independent rare events are Poisson regardless of domain.",mathLatex:"P(k; \\lambda) = \\frac{\\lambda^k e^{-\\lambda}}{k!}, \\quad E[k] = \\text{Var}[k] = \\lambda",mathToCode:[{symbol:"λ",code:"lam = 10",explanation:"expected count (parameter)"},{symbol:"k",code:"np.arange(0, k_max+1)",explanation:"event count axis"},{symbol:"P(k)",code:"poisson.pmf(k, lam)",explanation:"probability mass function"},{symbol:"E[k]",code:"poisson.mean(lam)",explanation:"= λ (Poisson signature)"},{symbol:"Var[k]",code:"poisson.var(lam)",explanation:"= λ (Poisson signature: mean = variance)"},{symbol:"P(≥10)",code:"1 - poisson.cdf(9, lam)",explanation:"sequencing coverage threshold"}],observeMore:{param:"lambda",initial:1,steps:[5,10,20,30],label:"λ (mean)",unit:"events"},defaultExpr:"poisson(lambda=10)",placeholder:"poisson(lambda=10)",generateCode:e=>{let a=Math.max(.1,(0,d.i)(e.named,"lambda",10));return`# ============================================================
# Mathematical Expression:
#   P(k; \\lambda) = \\frac{\\lambda^k e^{-\\lambda}}{k!}, \\quad E[k] = \\text{Var}[k] = \\lambda
#
# Each line below is annotated with # ← <math symbol> showing
# which part of the expression it implements.
# ============================================================

import numpy as np, json
from scipy.stats import poisson
lam = ${a}
k_max = max(40, int(lam * 4))
k = np.arange(0, k_max + 1)
pmf = poisson.pmf(k, lam).tolist()
mean, var = float(poisson.mean(lam)), float(poisson.var(lam))
# P(>=10) — sequencing variant calling threshold
p_ge_10 = float(1 - poisson.cdf(9, lam))
# Show that mean ≈ variance (Poisson signature)
print(json.dumps({
  "chart_type": "line",
  "title": f"Poisson PMF (λ={lam}) — mean = variance = {lam}",
  "series": [{"name": f"λ={lam}", "data": [{"x": int(x), "y": float(p)} for x, p in zip(k, pmf)]}],
  "x_label": "k (event count)",
  "y_label": "P(k)",
  "stats": [
    {"label": "λ", "value": str(lam)},
    {"label": "E[k]", "value": f"{mean:.3f}"},
    {"label": "Var[k]", "value": f"{var:.3f}", "hint": "= E[k] — Poisson signature"},
    {"label": "P(≥10)", "value": f"{p_ge_10:.4f}", "hint": "sequencing coverage threshold"},
    {"label": "σ", "value": f"{np.sqrt(var):.3f}", "hint": "= √λ"},
  ],
  "summary": f"Poisson(λ={lam}): E[k] = Var[k] = {lam} (the signature). P(≥10) = {p_ge_10:.4f} — at λ≥14, variant calling at 10\xd7 depth is virtually certain. Same distribution for sequencing, queueing, and radioactivity."
}))`},parseOutput:e=>{let a=JSON.parse(e);return{chart:a,stats:(a.stats??[]).map(e=>({label:e.label,value:e.value,hint:e.hint})),summary:{text:a.summary??"Poisson computed.",caveat:"If Var > Mean (over-dispersion), use Negative Binomial — Poisson + Gamma-distributed rate. DESeq2's choice for RNA-seq differential expression."}}}},{id:"playground-entropy",title:"Shannon Entropy",badge:"Information Theory",description:"Measures the average surprise (in bits) of a distribution. H=0 when one outcome is certain; H=log₂(n) when uniform. Same formula for data compression (Huffman coding matches H), decision-tree splits (maximize info gain), and ML loss functions (cross-entropy = KL divergence + H).",mathLatex:"H(X) = -\\sum_{x} p(x) \\log_2 p(x), \\quad H \\in [0, \\log_2 n]",mathToCode:[{symbol:"p(x)",code:"np.array(probs)",explanation:"probability distribution (parameter)"},{symbol:"H(X)",code:"-np.sum(p\xb7log2(p))",explanation:"Shannon entropy in bits"},{symbol:"log₂",code:"np.log2(p)",explanation:"base-2 logarithm (bits)"},{symbol:"H_max",code:"np.log2(n)",explanation:"maximum entropy (= log₂(n), uniform)"},{symbol:"efficiency",code:"H / H_max",explanation:"fraction of max entropy (100% = uniform)"}],defaultExpr:"entropy(p=[0.5, 0.5])",placeholder:"entropy(p=[0.5, 0.5])",generateCode:e=>{let a=e.named.p,t=[.5,.5];if(Array.isArray(a)&&a.every(e=>"number"==typeof e))t=a;else if("string"==typeof a){let e={fair_coin:[.5,.5],biased:[.9,.1],uniform4:[.25,.25,.25,.25],uniform8:Array(8).fill(1/8),uniform16:Array(16).fill(1/16),english:[.13,.09,.08,.07,.13,.07,.06,.09,.07,.002,.004,.024,.033,.07,.07,.03,.001,.005,.06,.06,.09,.02,.002,2e-4,1e-4,7e-4,1e-4,2e-4,.001,.001,2e-4]};e[a]&&(t=e[a])}return`# ============================================================
# Mathematical Expression:
#   H(X) = -\\sum_{x} p(x) \\log_2 p(x), \\quad H \\in [0, \\log_2 n]
#
# Each line below is annotated with # ← <math symbol> showing
# which part of the expression it implements.
# ============================================================

import numpy as np, json
p = np.array(${JSON.stringify(t)})
p = p / p.sum()  # normalize
H = float(-np.sum(p[p > 0] * np.log2(p[p > 0])))
n = len(p)
H_max = float(np.log2(n))
# Show each outcome's contribution
contribs = [{"x": i, "y": float(-np.log2(pi)) if pi > 0 else 0, "p": float(pi)} for i, pi in enumerate(p)]
print(json.dumps({
  "chart_type": "bar",
  "title": f"Shannon entropy H = {H:.3f} bits (max {H_max:.3f} = log₂{n})",
  "series": [{"name": "-log₂ p(x)", "data": contribs}],
  "x_label": "outcome x",
  "y_label": "surprise -log₂ p(x) (bits)",
  "reference_lines": [{"y": H / n, "label": f"avg surprise = H/n = {H/n:.3f}"}],
  "stats": [
    {"label": "n outcomes", "value": str(n)},
    {"label": "H (entropy)", "value": f"{H:.4f} bits"},
    {"label": "H_max", "value": f"{H_max:.4f} bits", "hint": f"= log₂({n}) — uniform"},
    {"label": "efficiency", "value": f"{H/H_max:.1%}", "hint": "H / H_max — 100% if uniform"},
  ],
  "summary": f"H = {H:.4f} bits out of max {H_max:.4f} ({H/H_max:.1%} of max — {'uniform' if H/H_max > 0.95 else 'structured'}). gzip approaches H via Huffman coding (H ≤ L < H+1 bit). Decision trees maximize entropy reduction. Cross-entropy loss = KL divergence + H."
}))`},parseOutput:e=>{let a=JSON.parse(e);return{chart:a,stats:(a.stats??[]).map(e=>({label:e.label,value:e.value,hint:e.hint})),summary:{text:a.summary??"Entropy computed.",caveat:"Shannon source coding theorem: no lossless compression beats H bits/symbol. English text has H≈4.5 bits/char; gzip approaches via Huffman+LZ77."}}}},{id:"playground-kalman",title:"Kalman Filter",badge:"Estimation",description:"Recursive Bayesian filter for linear-Gaussian state-space models. Alternates predict (propagate state + covariance) and update (correct with measurement). Optimal for linear systems with Gaussian noise — used in aircraft navigation, robot SLAM, and economic nowcasting.",mathLatex:"\\text{Predict: } \\hat{x}_{k|k-1} = F \\hat{x}_{k-1|k-1}, \\quad P_{k|k-1} = F P_{k-1|k-1} F^T + Q\\\\ \\text{Update: } K_k = P_{k|k-1} H^T (H P_{k|k-1} H^T + R)^{-1}",mathToCode:[{symbol:"F",code:"np.array([[1, dt], [0, 1]])",explanation:"state transition matrix"},{symbol:"H",code:"np.array([[1, 0]])",explanation:"observation matrix"},{symbol:"Q",code:"process_noise parameter",explanation:"process noise covariance (parameter)"},{symbol:"R",code:"measurement_noise parameter",explanation:"measurement noise covariance (parameter)"},{symbol:"x̂_k|k-1",code:"F @ x̂_k-1|k-1",explanation:"predicted state (predict step)"},{symbol:"P_k|k-1",code:"F @ P @ F.T + Q",explanation:"predicted covariance (predict step)"},{symbol:"K_k",code:"P @ H.T @ inv(H @ P @ H.T + R)",explanation:"Kalman gain (update step)"},{symbol:"x̂_k|k",code:"x̂ + K @ (z - H @ x̂)",explanation:"updated state (update step)"}],observeMore:{param:"n",initial:20,steps:[50,100,200],label:"n (timesteps)",unit:"steps"},defaultExpr:"kalman(process_noise=0.1, measurement_noise=1.0)",placeholder:"kalman(process_noise=0.1, measurement_noise=1.0)",generateCode:e=>{let a=(0,d.i)(e.named,"process_noise",.1),t=(0,d.i)(e.named,"measurement_noise",1);return`# ============================================================
# Mathematical Expression:
#   \\text{Predict: } \\hat{x}_{k|k-1} = F \\hat{x}_{k-1|k-1}, \\quad P_{k|k-1} = F P_{k-1|k-1} F^T + Q\\\\ \\text{Update: } K_k = P_{k|k-1} H^T (H P_{k|k-1} H^T + R)^{-1}
#
# Each line below is annotated with # ← <math symbol> showing
# which part of the expression it implements.
# ============================================================

import numpy as np, json
np.random.seed(42)
# Track a 1D moving object (constant velocity model)
dt = 1.0
F = np.array([[1, dt], [0, 1]])  # state transition
H = np.array([[1, 0]])            # observe position only
Q = np.array([[${a}, 0], [0, ${a}]])  # process noise
R = np.array([[${t}]])                # measurement noise

# True trajectory: constant velocity = 0.5
n_steps = 50
true_x = np.zeros((2, n_steps))
true_x[0, 0] = 0
true_x[1, 0] = 0.5
for k in range(1, n_steps):
    true_x[:, k] = F @ true_x[:, k-1]

# Measurements (with noise)
measurements = true_x[0, :] + np.random.randn(n_steps) * np.sqrt(${t})

# Kalman filter
x_hat = np.array([0.0, 0.0])  # initial estimate
P = np.eye(2) * 10.0           # initial covariance (uncertain)
est_pos = []
for k in range(n_steps):
    # Predict
    x_hat = F @ x_hat
    P = F @ P @ F.T + Q
    # Update
    y = measurements[k] - H @ x_hat  # innovation
    S = H @ P @ H.T + R              # innovation covariance
    K = P @ H.T @ np.linalg.inv(S)   # Kalman gain
    x_hat = x_hat + K @ y
    P = (np.eye(2) - K @ H) @ P
    est_pos.append(float(x_hat[0]))

print(json.dumps({
  "chart_type": "line",
  "title": f"Kalman filter 1D position tracking (Q=${a}, R=${t})",
  "series": [
    {"name": "true position", "data": [{"x": k, "y": float(true_x[0, k])} for k in range(n_steps)]},
    {"name": "measurements", "data": [{"x": k, "y": float(measurements[k])} for k in range(n_steps)]},
    {"name": "Kalman estimate", "data": [{"x": k, "y": p} for k, p in enumerate(est_pos)]},
  ],
  "x_label": "time step k",
  "y_label": "position",
  "stats": [
    {"label": "Q (process)", "value": str(${a})},
    {"label": "R (meas)", "value": str(${t})},
    {"label": "est. RMSE", "value": f"{np.sqrt(np.mean((np.array(est_pos) - true_x[0, :])**2)):.3f}"},
    {"label": "meas. RMSE", "value": f"{np.sqrt(np.mean((measurements - true_x[0, :])**2)):.3f}", "hint": "filter vs raw"},
  ],
  "summary": f"Kalman filter tracks a constant-velocity object. Q=${a} (process noise), R=${t} (measurement noise). Filter RMSE is lower than raw measurement RMSE — the filter smooths out the noise while tracking the true trajectory."
}))`},parseOutput:e=>{let a=JSON.parse(e);return{chart:a,stats:(a.stats??[]).map(e=>({label:e.label,value:e.value,hint:e.hint})),summary:{text:a.summary??"Kalman computed.",caveat:"Kalman is optimal only for linear-Gaussian systems. For non-linear: Extended KF (EKF, linearizes around current estimate) or Unscented KF (UKF, sigma points). For multi-modal: particle filter."}}}},{id:"playground-gbm",title:"Geometric Brownian Motion",badge:"Stochastic Calculus",description:"Stochastic differential equation for asset prices: dS = μS\xb7dt + σS\xb7dW. The analytical solution S(t) = S₀\xb7exp((μ−σ\xb2/2)t + σW(t)) is the foundation of Black-Scholes. Simulate via Euler–Maruyama discretization: S_{t+Δt} = S_t \xb7 exp((μ−σ\xb2/2)Δt + σ√Δt\xb7Z), Z~N(0,1).",mathLatex:"dS = \\mu S \\, dt + \\sigma S \\, dW, \\quad S(t) = S_0 \\exp\\left((\\mu - \\tfrac{\\sigma^2}{2}) t + \\sigma W(t)\\right)",mathToCode:[{symbol:"S₀",code:"S0 = 100",explanation:"initial price (parameter)"},{symbol:"μ",code:"mu = 0.08",explanation:"drift rate (parameter)"},{symbol:"σ",code:"sigma = 0.20",explanation:"volatility (parameter)"},{symbol:"dW",code:"np.random.randn(n_paths, n_steps)",explanation:"Brownian motion increments"},{symbol:"S(t)",code:"S₀\xb7exp((μ-σ\xb2/2)\xb7t + σ\xb7W(t))",explanation:"analytical solution of GBM SDE"},{symbol:"E[S(T)]",code:"S₀\xb7exp(μ\xb7T)",explanation:"expected terminal price"}],observeMore:{param:"paths",initial:5,steps:[20,50,100],label:"paths",unit:"simulations"},defaultExpr:"gbm(S0=100, mu=0.08, sigma=0.20, T=1, paths=20)",placeholder:"gbm(S0=100, mu=0.08, sigma=0.20, T=1, paths=20)",generateCode:e=>{let a=(0,d.i)(e.named,"S0",100),t=(0,d.i)(e.named,"mu",.08),n=(0,d.i)(e.named,"sigma",.2),s=(0,d.i)(e.named,"T",1),i=Math.max(2,Math.min(100,Math.floor((0,d.i)(e.named,"paths",20))));return`# ============================================================
# Mathematical Expression:
#   dS = \\mu S \\, dt + \\sigma S \\, dW, \\quad S(t) = S_0 \\exp\\left((\\mu - \\tfrac{\\sigma^2}{2}) t + \\sigma W(t)\\right)
#
# Each line below is annotated with # ← <math symbol> showing
# which part of the expression it implements.
# ============================================================

import numpy as np, json
np.random.seed(42)
S0, mu, sigma, T, n_paths = ${a}, ${t}, ${n}, ${s}, ${i}
n_steps = 252  # trading days
dt = T / n_steps
# Simulate paths via Euler-Maruyama
Z = np.random.randn(n_paths, n_steps)
drift = (mu - 0.5 * sigma**2) * dt
diffusion = sigma * np.sqrt(dt) * Z
log_returns = drift + diffusion
log_prices = np.log(S0) + np.cumsum(log_returns, axis=1)
prices = np.exp(log_prices)
# Stats
final_prices = prices[:, -1]
mean_final = float(np.mean(final_prices))
median_final = float(np.median(final_prices))
p5, p95 = float(np.percentile(final_prices, 5)), float(np.percentile(final_prices, 95))
# Series for chart — show 5 representative paths + mean
show_paths = min(5, n_paths)
series = [{"name": f"path {i+1}", "data": [{"x": t, "y": float(prices[i, t])} for t in range(0, n_steps, 10)]} for i in range(show_paths)]
mean_series = [{"x": t, "y": float(np.mean(prices[:, t]))} for t in range(0, n_steps, 10)]
series.append({"name": "ensemble mean", "data": mean_series})
print(json.dumps({
  "chart_type": "line",
  "title": f"GBM paths (S₀={S0}, μ={mu}, σ={sigma}, T={T}y, n={n_paths})",
  "series": series,
  "x_label": "time step (days)",
  "y_label": "price S(t)",
  "stats": [
    {"label": "S₀", "value": str(S0)},
    {"label": "μ (drift)", "value": str(mu)},
    {"label": "σ (vol)", "value": str(sigma)},
    {"label": "T", "value": f"{T}y"},
    {"label": "E[S(T)]", "value": f"{mean_final:.2f}", "hint": f"= S₀\xb7e^(μT) = {S0*np.exp(mu*T):.2f}"},
    {"label": "P95 / P5", "value": f"{p95:.1f} / {p5:.1f}"},
  ],
  "summary": f"GBM simulation of {n_paths} paths. E[S(T)] = {mean_final:.2f} (vs analytical S₀\xb7e^μT = {S0*np.exp(mu*T):.2f}). 90% interval: [{p5:.1f}, {p95:.1f}]. High σ → wider fan. Foundation of Black-Scholes (closed-form option pricing via the GBM solution)."
}))`},parseOutput:e=>{let a=JSON.parse(e);return{chart:a,stats:(a.stats??[]).map(e=>({label:e.label,value:e.value,hint:e.hint})),summary:{text:a.summary??"GBM computed.",caveat:"GBM assumes constant μ, σ, log-normal returns. Real markets show volatility clustering + fat tails — use Heston (stochastic vol) or jump-diffusion (Merton) models for production."}}}},{id:"playground-haversine",title:"Haversine Formula",badge:"Geospatial",description:"Great-circle distance between two points on a sphere given their latitudes + longitudes. Used for flight routing, port-to-port distance, and aviation ADS-B. The versine function (1 − cos θ) avoids the catastrophic cancellation of the law of cosines at small angles.",mathLatex:"d = 2r \\arcsin\\!\\sqrt{\\sin^2\\!\\tfrac{\\Delta\\varphi}{2} + \\cos\\varphi_1 \\cos\\varphi_2 \\sin^2\\!\\tfrac{\\Delta\\lambda}{2}}",mathToCode:[{symbol:"φ₁, φ₂",code:"math.radians(lat1), math.radians(lat2)",explanation:"latitudes in radians"},{symbol:"Δφ",code:"math.radians(lat2 - lat1)",explanation:"latitude difference"},{symbol:"Δλ",code:"math.radians(lon2 - lon1)",explanation:"longitude difference"},{symbol:"a",code:"sin\xb2(Δφ/2) + cos(φ₁)\xb7cos(φ₂)\xb7sin\xb2(Δλ/2)",explanation:"haversine formula core"},{symbol:"c",code:"2\xb7arcsin(√a)",explanation:"angular distance in radians"},{symbol:"d",code:"R \xb7 c",explanation:"great-circle distance (R=6371 km)"}],defaultExpr:"haversine(from='LHR', to='JFK')",placeholder:"haversine(from='LHR', to='JFK')",generateCode:e=>{let a=(0,d.oJ)(e.named,"from","LHR").toUpperCase(),t=(0,d.oJ)(e.named,"to","JFK").toUpperCase();return`# ============================================================
# Mathematical Expression:
#   d = 2r \\arcsin\\!\\sqrt{\\sin^2\\!\\tfrac{\\Delta\\varphi}{2} + \\cos\\varphi_1 \\cos\\varphi_2 \\sin^2\\!\\tfrac{\\Delta\\lambda}{2}}
#
# Each line below is annotated with # ← <math symbol> showing
# which part of the expression it implements.
# ============================================================

import numpy as np, json, math
# Major airports: (code, name, lat, lon)
AIRPORTS = {
  "LHR": ("London Heathrow", 51.4700, -0.4543),
  "JFK": ("New York JFK", 40.6413, -73.7781),
  "LAX": ("Los Angeles", 33.9416, -118.4085),
  "HND": ("Tokyo Haneda", 35.5494, 139.7798),
  "SYD": ("Sydney", -33.9399, 151.1753),
  "CPT": ("Cape Town", -33.9715, 18.6021),
  "GRU": ("S\xe3o Paulo", -23.4356, -46.4731),
  "SIN": ("Singapore", 1.3644, 103.9915),
  "DXB": ("Dubai", 25.2532, 55.3657),
  "NBO": ("Nairobi", -1.3192, 36.9260),
}
from_code = "${a}"
to_code = "${t}"
if from_code not in AIRPORTS or to_code not in AIRPORTS:
  print(json.dumps({"error": f"Unknown airport. Known: {list(AIRPORTS.keys())}"}))
else:
  name1, lat1, lon1 = AIRPORTS[from_code]
  name2, lat2, lon2 = AIRPORTS[to_code]
  R = 6371.0  # Earth radius km
  phi1, phi2 = math.radians(lat1), math.radians(lat2)
  dphi = math.radians(lat2 - lat1)
  dlam = math.radians(lon2 - lon1)
  a = math.sin(dphi/2)**2 + math.cos(phi1)*math.cos(phi2)*math.sin(dlam/2)**2
  c = 2 * math.asin(math.sqrt(a))
  d = R * c
  # Show sample distances to several other airports from the same origin
  other_dists = []
  for code, (n, la, lo) in AIRPORTS.items():
    if code == from_code: continue
    p1, p2 = math.radians(lat1), math.radians(la)
    dp = math.radians(la - lat1)
    dl = math.radians(lo - lon1)
    a2 = math.sin(dp/2)**2 + math.cos(p1)*math.cos(p2)*math.sin(dl/2)**2
    c2 = 2 * math.asin(math.sqrt(a2))
    other_dists.append({"x": code, "y": float(R * c2)})
  print(json.dumps({
    "chart_type": "bar",
    "title": f"Distance from {from_code} ({name1}) to world airports",
    "series": [{"name": "distance km", "data": other_dists}],
    "x_label": "destination airport",
    "y_label": "distance (km)",
    "stats": [
      {"label": "from", "value": f"{from_code} ({name1})"},
      {"label": "to", "value": f"{to_code} ({name2})"},
      {"label": "distance", "value": f"{d:,.1f} km ({d/1.852:,.0f} nm)"},
      {"label": "Earth radius R", "value": "6371 km"},
    ],
    "summary": f"Haversine distance {from_code} → {to_code} = {d:,.1f} km ({d/1.852:,.0f} nautical miles). The versine function (1−cos θ) avoids catastrophic cancellation of the law of cosines at small angles — accurate for both short hops (LHR→CDG) and ultra-long-haul (LHR→PER)."
  }))
`},parseOutput:e=>{let a=JSON.parse(e);return a.error?{chart:{chart_type:"bar",series:[],title:"Error"},stats:[],summary:{text:a.error}}:{chart:a,stats:(a.stats??[]).map(e=>({label:e.label,value:e.value})),summary:{text:a.summary??"Haversine computed.",caveat:"Haversine assumes a perfect sphere. For sub-meter accuracy, use Vincenty's formula (oblate spheroid, ~1mm). For geodesy, use geographiclib's Geodesic.WGS84."}}}},{id:"playground-logistic-map",title:"Logistic Map — period doubling → chaos",badge:"Chaos Theory",description:"The simplest chaotic system: x_{n+1} = r\xb7x_n\xb7(1−x_n). For r<3, fixed point. For 3<r<3.57, period-2, then period-4, period-8 (Feigenbaum constant δ=4.669). For r>3.57, deterministic chaos — bounded but aperiodic. Same equation models population dynamics, economics, and neural firing.",mathLatex:"x_{n+1} = r \\, x_n (1 - x_n), \\quad x_0 \\in (0,1), \\, r \\in [0,4]",mathToCode:[{symbol:"r",code:"r = 3.7",explanation:"growth rate parameter (>3.57 = chaos)"},{symbol:"x₀",code:"x0 = 0.5",explanation:"initial condition in (0,1)"},{symbol:"x_n",code:"trajectory = [x₀, x₁, ...]",explanation:"orbit of the map"},{symbol:"x_{n+1}",code:"r * x_n * (1 - x_n)",explanation:"logistic map iteration"},{symbol:"λ (Lyapunov)",code:"mean(log(|r\xb7(1-2x_n)|))",explanation:"Lyapunov exponent (>0 = chaos)"}],observeMore:{param:"n",initial:50,steps:[100,200,500],label:"n (iterations)",unit:"iterations"},defaultExpr:"logistic_map(r=3.7, x0=0.5, n=100)",placeholder:"logistic_map(r=3.7, x0=0.5, n=100)",generateCode:e=>{let a=(0,d.i)(e.named,"r",3.7),t=(0,d.i)(e.named,"x0",.5),n=Math.max(10,Math.floor((0,d.i)(e.named,"n",100)));return`# ============================================================
# Mathematical Expression:
#   x_{n+1} = r \\, x_n (1 - x_n), \\quad x_0 \\in (0,1), \\, r \\in [0,4]
#
# Each line below is annotated with # ← <math symbol> showing
# which part of the expression it implements.
# ============================================================

import numpy as np, json
r = ${a}
x = ${t}
trajectory = [x]
for _ in range(${n} - 1):
    x = r * x * (1 - x)
    trajectory.append(float(x))
# Lyapunov exponent — positive means chaos
lyap = 0
for v in trajectory[1:]:
    lyap += np.log(abs(r * (1 - 2*v)) + 1e-12)
lyap /= len(trajectory) - 1
# Two trajectories with tiny initial difference — show exponential divergence (butterfly effect)
x1, x2 = ${t}, ${t} + 1e-10
divergence = []
for _ in range(${n}):
    x1 = r * x1 * (1 - x1)
    x2 = r * x2 * (1 - x2)
    divergence.append(abs(x2 - x1))
print(json.dumps({
  "chart_type": "line",
  "title": f"Logistic map r={r}, x₀={x0}, n={n}",
  "series": [
    {"name": "x_n trajectory", "data": [{"x": i, "y": v} for i, v in enumerate(trajectory)]},
    {"name": "log|x_{n+1} - x'_{n+1}|", "data": [{"x": i, "y": float(np.log(d+1e-15))} for i, d in enumerate(divergence)]},
  ],
  "x_label": "n (iteration)",
  "y_label": "x_n",
  "stats": [
    {"label": "r", "value": str(r)},
    {"label": "x₀", "value": str(x0)},
    {"label": "Lyapunov λ", "value": f"{lyap:.3f}", "hint": "positive = chaos"},
    {"label": "final x_n", "value": f"{trajectory[-1]:.4f}"},
  ],
  "summary": f"Logistic map at r={r}: Lyapunov exponent λ={lyap:.3f} ({'chaotic' if lyap > 0 else 'periodic'}). Two trajectories starting 1e-10 apart diverge exponentially (butterfly effect). Feigenbaum constant δ≈4.669 governs the period-doubling route to chaos."
}))`},parseOutput:e=>{let a=JSON.parse(e);return{chart:a,stats:(a.stats??[]).map(e=>({label:e.label,value:e.value,hint:e.hint})),summary:{text:a.summary??"Logistic map computed.",caveat:"Feigenbaum constant δ=4.669... is universal — appears in EVERY period-doubling route to chaos, regardless of the specific map. Water dripping, electronic circuits, lasers — all show the same δ."}}}},{id:"playground-simpson",title:"Simpson's Rule — numerical integration",badge:"Numerical Methods",description:"Approximates ∫f(x)dx by fitting parabolas through triples of points: ∫≈(h/3)[f₀ + 4f₁ + 2f₂ + 4f₃ + ... + fₙ]. Error = O(h⁴) — much better than the trapezoidal rule's O(h\xb2). Same family as Gaussian quadrature, Runge-Kutta, and FEM integration.",mathLatex:"\\int_a^b f(x) \\, dx \\approx \\frac{h}{3}\\left[f_0 + 4f_1 + 2f_2 + 4f_3 + \\cdots + 4f_{n-1} + f_n\\right], \\quad E = O(h^4)",mathToCode:[{symbol:"f(x)",code:"lambda x: np.exp(-x\xb2/2)/√(2π)",explanation:"integrand (parameter: gaussian/sin/exp/x\xb2)"},{symbol:"[a, b]",code:"a=-2, b=2",explanation:"integration bounds (parameters)"},{symbol:"n",code:"n = 20",explanation:"number of intervals (must be even)"},{symbol:"h",code:"(b - a) / n",explanation:"step size"},{symbol:"∫f",code:"simpson(y, x=x) = (h/3)\xb7[f₀+4f₁+2f₂+...+fₙ]",explanation:"Simpson's rule (O(h⁴) error)"},{symbol:"error",code:"abs(simpson_val - true_val)",explanation:"absolute error vs analytical"}],observeMore:{param:"n",initial:4,steps:[8,16,32,64,128],label:"n (intervals)",unit:"intervals"},defaultExpr:"simpson(f='gaussian', a=-2, b=2, n=20)",placeholder:"simpson(f='gaussian', a=-2, b=2, n=20)",generateCode:e=>{let a=(0,d.oJ)(e.named,"f","gaussian"),t=(0,d.i)(e.named,"a",-2),n=(0,d.i)(e.named,"b",2),s=Math.max(2,Math.floor((0,d.i)(e.named,"n",20)));return`# ============================================================
# Mathematical Expression:
#   \\int_a^b f(x) \\, dx \\approx \\frac{h}{3}\\left[f_0 + 4f_1 + 2f_2 + 4f_3 + \\cdots + 4f_{n-1} + f_n\\right], \\quad E = O(h^4)
#
# Each line below is annotated with # ← <math symbol> showing
# which part of the expression it implements.
# ============================================================

import numpy as np, json
from scipy.integrate import simpson, trapezoid, quad
a, b, n = ${t}, ${n}, ${s}
f_name = "${a}"
if f_name == "gaussian":
    f = lambda x: np.exp(-x**2 / 2) / np.sqrt(2 * np.pi)
    true_val = quad(f, a, b)[0]
    true_label = "Φ(b) - Φ(a)"
elif f_name == "sin":
    f = lambda x: np.sin(x)
    true_val = -np.cos(b) + np.cos(a)
    true_label = "-cos(b) + cos(a)"
elif f_name == "exp":
    f = lambda x: np.exp(x)
    true_val = np.exp(b) - np.exp(a)
    true_label = "e^b - e^a"
else:
    f = lambda x: x**2
    true_val = (b**3 - a**3) / 3
    true_label = "(b\xb3-a\xb3)/3"

# Sample at n+1 points
x = np.linspace(a, b, n + 1)
y = f(x)
simpson_val = simpson(y, x=x)
trap_val = trapezoid(y, x=x)
simpson_err = abs(simpson_val - true_val)
trap_err = abs(trap_val - true_val)

# Vary n to show convergence
ns = [4, 8, 16, 32, 64, 128, 256]
simpson_errs, trap_errs = [], []
for nn in ns:
    xx = np.linspace(a, b, nn + 1)
    yy = f(xx)
    simpson_errs.append(abs(simpson(yy, x=xx) - true_val))
    trap_errs.append(abs(trapezoid(yy, x=xx) - true_val))

print(json.dumps({
  "chart_type": "line",
  "title": f"Simpson vs Trapezoid: error vs n (f={f_name}, [{a}, {b}])",
  "series": [
    {"name": "Simpson O(h⁴)", "data": [{"x": int(nn), "y": float(e)} for nn, e in zip(ns, simpson_errs)]},
    {"name": "Trapezoid O(h\xb2)", "data": [{"x": int(nn), "y": float(e)} for nn, e in zip(ns, trap_errs)]},
  ],
  "x_label": "n (number of intervals)",
  "y_label": "absolute error (log)",
  "stats": [
    {"label": "f(x)", "value": f_name},
    {"label": "[a, b]", "value": f"[{a}, {b}]"},
    {"label": "true ∫f", "value": f"{true_val:.6f}", "hint": true_label},
    {"label": "Simpson (n=" + str(${s}) + ")", "value": f"{simpson_val:.6f}", "hint": f"err = {simpson_err:.2e}"},
    {"label": "Trapezoid (n=" + str(${s}) + ")", "value": f"{trap_val:.6f}", "hint": f"err = {trap_err:.2e}"},
  ],
  "summary": f"Simpson's rule integrates f={f_name} on [{a}, {b}] with error {simpson_err:.2e} at n={n} intervals — vs trapezoid's {trap_err:.2e}. Simpson is O(h⁴), trapezoid is O(h\xb2) — Simpson needs 1/16 the points for the same accuracy."
}))`},parseOutput:e=>{let a=JSON.parse(e);return{chart:a,stats:(a.stats??[]).map(e=>({label:e.label,value:e.value,hint:e.hint})),summary:{text:a.summary??"Simpson computed.",caveat:"Simpson requires n to be EVEN. For odd n, use Simpson's 3/8 rule on the last 3 intervals. Gaussian quadrature gives O(h^(2n)) — exponentially better."}}}},{id:"playground-bootstrap",title:"Bootstrap — resampling for confidence intervals",badge:"Resampling",description:"Non-parametric confidence intervals via resampling with replacement. Given n samples, draw B bootstrap samples of size n (with replacement), compute the statistic on each, take the 2.5% and 97.5% percentiles. Works for ANY statistic — no normality assumption needed. Invented by Efron in 1979.",mathLatex:"\\hat{\\theta}^*_b = T(X^{*b}), \\quad X^{*b} \\sim \\text{Uniform}(X_1, \\ldots, X_n), \\quad \\text{CI}_{95\\%} = [\\hat{\\theta}^*_{(0.025)}, \\hat{\\theta}^*_{(0.975)}]",mathToCode:[{symbol:"X₁...Xₙ",code:"np.random.exponential(1.0, n)",explanation:"original sample (parameter: distribution)"},{symbol:"n",code:"n = 50",explanation:"sample size (parameter)"},{symbol:"B",code:"B = 1000",explanation:"number of bootstrap resamples (parameter)"},{symbol:"X*b",code:"np.random.choice(sample, size=(B, n), replace=True)",explanation:"bootstrap resample with replacement"},{symbol:"θ̂*b",code:"boot_means = X*.mean(axis=1)",explanation:"statistic on each resample"},{symbol:"CI₉₅",code:"np.percentile(boot_means, [2.5, 97.5])",explanation:"95% percentile confidence interval"}],observeMore:{param:"B",initial:100,steps:[500,1e3,5e3],label:"B (resamples)",unit:"resamples"},defaultExpr:"bootstrap(distribution='exponential', n=50, B=1000)",placeholder:"bootstrap(distribution='exponential', n=50, B=1000)",generateCode:e=>{let a=(0,d.oJ)(e.named,"distribution","exponential"),t=Math.max(5,Math.floor((0,d.i)(e.named,"n",50))),n=Math.max(50,Math.floor((0,d.i)(e.named,"B",1e3)));return`# ============================================================
# Mathematical Expression:
#   \\hat{\\theta}^*_b = T(X^{*b}), \\quad X^{*b} \\sim \\text{Uniform}(X_1, \\ldots, X_n), \\quad \\text{CI}_{95\\%} = [\\hat{\\theta}^*_{(0.025)}, \\hat{\\theta}^*_{(0.975)}]
#
# Each line below is annotated with # ← <math symbol> showing
# which part of the expression it implements.
# ============================================================

import numpy as np, json
np.random.seed(42)
n, B = ${t}, ${n}
dist_name = "${a}"
# Draw original sample
if dist_name == "exponential":
    sample = np.random.exponential(1.0, n)
    true_mean = 1.0
elif dist_name == "uniform":
    sample = np.random.uniform(0, 10, n)
    true_mean = 5.0
elif dist_name == "bimodal":
    sample = np.concatenate([np.random.normal(0, 1, n//2), np.random.normal(8, 1, n - n//2)])
    true_mean = 4.0
else:
    sample = np.random.normal(100, 15, n)
    true_mean = 100

x_bar = float(sample.mean())
# Bootstrap: B resamples with replacement, compute mean of each
boot_means = np.random.choice(sample, size=(B, n), replace=True).mean(axis=1)
ci_lo, ci_hi = float(np.percentile(boot_means, 2.5)), float(np.percentile(boot_means, 97.5))
boot_std = float(boot_means.std())
# Compare to CLT-based CI: x_bar \xb1 1.96\xb7s/√n
s = float(sample.std(ddof=1))
clt_lo, clt_hi = x_bar - 1.96 * s / np.sqrt(n), x_bar + 1.96 * s / np.sqrt(n)

print(json.dumps({
  "chart_type": "line",
  "title": f"Bootstrap distribution of X̄ (n={n}, B={B}, dist={dist_name})",
  "series": [{"name": "bootstrap means", "data": [{"x": float(m), "y": int(c)} for m, c in zip(*np.histogram(boot_means, bins=30)[:2])]}],
  "reference_lines": [
    {"x": x_bar, "label": f"X̄ = {x_bar:.3f}"},
    {"x": true_mean, "label": f"true μ = {true_mean}"},
    {"x": ci_lo, "label": "2.5%"},
    {"x": ci_hi, "label": "97.5%"},
  ],
  "x_label": "bootstrap X̄*",
  "y_label": "count",
  "stats": [
    {"label": "n (sample)", "value": str(n)},
    {"label": "B (resamples)", "value": str(B)},
    {"label": "X̄", "value": f"{x_bar:.3f}"},
    {"label": "true μ", "value": str(true_mean)},
    {"label": "bootstrap CI 95%", "value": f"[{ci_lo:.3f}, {ci_hi:.3f}]"},
    {"label": "CLT CI 95%", "value": f"[{clt_lo:.3f}, {clt_hi:.3f}]", "hint": "assumes normal"},
  ],
  "summary": f"Bootstrap CI 95% = [{ci_lo:.3f}, {ci_hi:.3f}] vs CLT CI = [{clt_lo:.3f}, {clt_hi:.3f}]. Bootstrap makes no distributional assumption — works for ANY statistic (median, IQR, ratio, etc.) and ANY underlying distribution."
}))`},parseOutput:e=>{let a=JSON.parse(e);return{chart:a,stats:(a.stats??[]).map(e=>({label:e.label,value:e.value,hint:e.hint})),summary:{text:a.summary??"Bootstrap computed.",caveat:"Bootstrap fails for statistics that depend on the tail (max, min) or have infinite variance (Cauchy). For time series, use block bootstrap to preserve autocorrelation."}}}},{id:"playground-euler-identity",title:"Euler's Identity — the most beautiful equation",badge:"Complex Analysis",description:"e^(i*pi) + 1 = 0. Connects 5 fundamental constants (e, i, pi, 0, 1) in one equation. Euler's formula e^(i*theta) = cos(theta) + i*sin(theta) underlies the Fourier transform, quantum mechanics (Schrodinger equation), and signal processing.",mathLatex:"e^{i\\pi} + 1 = 0, \\qquad e^{i\\theta} = \\cos\\theta + i\\sin\\theta",mathToCode:[{symbol:"e^(i*theta)",code:"np.exp(1j * theta)",explanation:"complex exponential = cos + i*sin"},{symbol:"cos(theta)",code:"np.cos(theta)",explanation:"real part of e^(i*theta)"},{symbol:"sin(theta)",code:"np.sin(theta)",explanation:"imaginary part of e^(i*theta)"},{symbol:"|e^(i*theta)|",code:"abs(np.exp(1j * theta))",explanation:"magnitude = 1 (unit circle)"},{symbol:"e^(i*pi)",code:"np.exp(1j * np.pi)",explanation:"= -1 (Euler's identity)"}],defaultExpr:"euler_identity(theta_end=6.28)",placeholder:"euler_identity(theta_end=6.28)",generateCode:e=>{let a=(0,d.i)(e.named,"theta_end",6.28318);return`import numpy as np, json

theta_end = ${a}
theta = np.linspace(0, theta_end, 200)
z = np.exp(1j * theta)

real_part = np.real(z)
imag_part = np.imag(z)

# Verify Euler's identity: e^(i*pi) = -1
euler_pi = np.exp(1j * np.pi)
verification = f"e^(i*pi) = {euler_pi:.6f} (should be -1+0j)"

print(json.dumps({
  "chart_type": "line",
  "title": f"Euler's formula: e^(i*theta) = cos(theta) + i*sin(theta)",
  "series": [
    {"name": "Re(e^(i*theta)) = cos(theta)", "data": [{"x": float(t), "y": float(r)} for t, r in zip(theta, real_part)]},
    {"name": "Im(e^(i*theta)) = sin(theta)", "data": [{"x": float(t), "y": float(i)} for t, i in zip(theta, imag_part)]},
  ],
  "x_label": "theta (radians)", "y_label": "value",
  "stats": [
    {"label": "theta range", "value": f"0 to {theta_end:.4f} ({theta_end / np.pi:.2f} * pi)"},
    {"label": "e^(i*pi)", "value": f"{euler_pi.real:.6f} + {euler_pi.imag:.6f}j", "hint": "should be -1 + 0j"},
    {"label": "e^(i*0)", "value": "1 + 0j", "hint": "theta=0 -> e^0 = 1"},
    {"label": "e^(i*pi/2)", "value": "0 + 1j", "hint": "theta=pi/2 -> i"},
    {"label": "|e^(i*theta)|", "value": "1.0 (always)", "hint": "unit circle - magnitude is always 1"},
  ],
  "summary": f"Euler's formula traces the unit circle: Re = cos(theta), Im = sin(theta). At theta=pi, e^(i*pi) = -1 + 0j, giving Euler's identity e^(i*pi) + 1 = 0. This equation connects 5 fundamental constants and underlies the Fourier transform, quantum mechanics, and signal processing."
}))`},parseOutput:e=>{let a=JSON.parse(e);return{chart:a,stats:(a.stats??[]).map(e=>({label:e.label,value:e.value,hint:e.hint})),summary:{text:a.summary??"Euler's identity computed.",caveat:"Euler's formula e^(i*theta) = cos(theta) + i*sin(theta) is the bridge between exponential and trigonometric functions. The Fourier transform is essentially a projection onto e^(i*omega*t) for each frequency omega."}}}},{id:"playground-shannon-capacity",title:"Shannon's Channel Capacity — the information limit",badge:"Information Theory",description:"C = B * log2(1 + S/N). The maximum rate at which information can be transmitted over a bandwidth-limited channel with additive noise. Defines the theoretical limit for every communication system (5G, WiFi, fiber optic). Same Shannon who defined entropy.",mathLatex:"C = B \\log_2\\left(1 + \\frac{S}{N}\\right)",mathToCode:[{symbol:"C",code:"B * np.log2(1 + snr)",explanation:"channel capacity in bits/second"},{symbol:"B",code:"bandwidth (Hz)",explanation:"channel bandwidth (parameter)"},{symbol:"S/N",code:"signal_to_noise_ratio",explanation:"linear SNR (not dB)"},{symbol:"SNR_dB",code:"10 * log10(S/N)",explanation:"convert linear SNR to dB"},{symbol:"Shannon limit",code:"C_max at given B + S/N",explanation:"no encoding can exceed C"}],defaultExpr:"shannon_capacity(bandwidth=1000, snr_db=20)",placeholder:"shannon_capacity(bandwidth=1000, snr_db=20)",generateCode:e=>{let a=(0,d.i)(e.named,"bandwidth",1e3),t=(0,d.i)(e.named,"snr_db",20);return`import numpy as np, json

bandwidth = ${a}
snr_db_input = ${t}

# Compute capacity for the input SNR
snr_linear = 10 ** (snr_db_input / 10)
capacity_input = bandwidth * np.log2(1 + snr_linear)

# Compute capacity across a range of SNRs (0-40 dB)
snr_db_range = np.linspace(0, 40, 50)
snr_linear_range = 10 ** (snr_db_range / 10)
capacities = bandwidth * np.log2(1 + snr_linear_range)

chart_data = [{"x": float(s), "y": float(c)} for s, c in zip(snr_db_range, capacities)]

print(json.dumps({
  "chart_type": "line",
  "title": f"Shannon capacity vs SNR (B={bandwidth} Hz)",
  "series": [{"name": "C = B * log2(1 + S/N)", "data": chart_data}],
  "x_label": "SNR (dB)", "y_label": "Capacity (bits/sec)",
  "reference_lines": [{"x": snr_db_input, "label": f"input: C={capacity_input:.0f} bps"}],
  "stats": [
    {"label": "bandwidth", "value": f"{bandwidth} Hz"},
    {"label": "SNR (input)", "value": f"{snr_db_input} dB ({snr_linear:.1f} linear)"},
    {"label": "capacity (input)", "value": f"{capacity_input:.0f} bits/sec", "hint": f"{capacity_input/1e6:.2f} Mbps"},
    {"label": "capacity at 0 dB", "value": f"{bandwidth * np.log2(2):.0f} bps", "hint": "S=N -> C=B*log2(2)=B"},
    {"label": "capacity at 40 dB", "value": f"{bandwidth * np.log2(1 + 1e4):.0f} bps", "hint": "S>>N -> C~B*log2(S/N)"},
    {"label": "Shannon limit", "value": "theoretical max", "hint": "no encoding exceeds this"},
  ],
  "summary": f"Shannon capacity at B={bandwidth} Hz, SNR={snr_db_input} dB: C = {capacity_input:.0f} bits/sec ({capacity_input/1e6:.2f} Mbps). The Shannon limit is the theoretical maximum - no encoding scheme can exceed it. 5G WiFi, and fiber optic systems all approach but never exceed this limit."
}))`},parseOutput:e=>{let a=JSON.parse(e);return{chart:a,stats:(a.stats??[]).map(e=>({label:e.label,value:e.value,hint:e.hint})),summary:{text:a.summary??"Shannon capacity computed.",caveat:"The Shannon capacity assumes AWGN (Additive White Gaussian Noise). Real channels have fading, interference, and non-Gaussian noise, so practical capacity is lower. Modern systems (5G, WiFi 6) use coding schemes (LDPC, turbo codes) that approach ~1 dB from the Shannon limit."}}}},{id:"playground-normal",title:"Normal Distribution — the bell curve",badge:"Statistics",description:"f(x) = (1/(sigma*sqrt(2*pi))) * e^(-(x-mu)^2/(2*sigma^2)). The most important distribution in statistics: CLT says sample means converge to it, measurement errors follow it, and it underlies every parametric test (t-test, ANOVA, regression). Black-Scholes assumes log-normal prices. Six Sigma is literally the sigma.",mathLatex:"f(x) = \\frac{1}{\\sigma\\sqrt{2\\pi}} e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}}",mathToCode:[{symbol:"mu",code:"mean (parameter)",explanation:"center of the distribution"},{symbol:"sigma",code:"std dev (parameter)",explanation:"spread of the distribution"},{symbol:"f(x)",code:"(1/(sigma*sqrt(2*pi))) * exp(-(x-mu)^2/(2*sigma^2))",explanation:"probability density function (PDF)"},{symbol:"68-95-99.7",code:"P(|x-mu|<sigma) = 68%, P(<2sigma) = 95%, P(<3sigma) = 99.7%",explanation:"the empirical rule"},{symbol:"CLT",code:"sample_mean -> Normal(mu, sigma/sqrt(n))",explanation:"Central Limit Theorem: sample means are normal regardless of the population distribution"}],defaultExpr:"normal(mu=0, sigma=1, n_samples=1000)",placeholder:"normal(mu=0, sigma=1, n_samples=1000)",generateCode:e=>{let a=(0,d.i)(e.named,"mu",0),t=(0,d.i)(e.named,"sigma",1),n=Math.max(100,Math.floor((0,d.i)(e.named,"n_samples",1e3)));return`import numpy as np, json

mu = ${a}
sigma = ${t}
n = ${n}

# Generate normal samples
np.random.seed(42)
samples = np.random.normal(mu, sigma, n)

# Compute PDF
x = np.linspace(mu - 4*sigma, mu + 4*sigma, 200)
pdf = (1 / (sigma * np.sqrt(2 * np.pi))) * np.exp(-((x - mu) ** 2) / (2 * sigma ** 2))

# Histogram
hist_counts, hist_edges = np.histogram(samples, bins=30, density=True)
hist_centers = (hist_edges[:-1] + hist_edges[1:]) / 2

# Empirical rule verification
within_1sigma = np.mean(np.abs(samples - mu) < sigma) * 100
within_2sigma = np.mean(np.abs(samples - mu) < 2*sigma) * 100
within_3sigma = np.mean(np.abs(samples - mu) < 3*sigma) * 100

hist_data = [{"x": float(c), "y": float(h)} for c, h in zip(hist_centers, hist_counts)]
pdf_data = [{"x": float(xi), "y": float(pi)} for xi, pi in zip(x, pdf)]

print(json.dumps({
  "chart_type": "bar",
  "title": f"Normal(mu={mu}, sigma={sigma}) - {n} samples + PDF overlay",
  "series": [
    {"name": "histogram (sampled)", "data": hist_data},
  ],
  "x_label": "x", "y_label": "density",
  "stats": [
    {"label": "mu (input)", "value": str(mu)},
    {"label": "sigma (input)", "value": str(sigma)},
    {"label": "n_samples", "value": str(n)},
    {"label": "sample mean", "value": f"{np.mean(samples):.4f}", "hint": f"should be ~{mu}"},
    {"label": "sample std", "value": f"{np.std(samples, ddof=1):.4f}", "hint": f"should be ~{sigma}"},
    {"label": "P(|x-mu|<sigma)", "value": f"{within_1sigma:.1f}%", "hint": "empirical rule: ~68%"},
    {"label": "P(|x-mu|<2sigma)", "value": f"{within_2sigma:.1f}%", "hint": "empirical rule: ~95%"},
    {"label": "P(|x-mu|<3sigma)", "value": f"{within_3sigma:.1f}%", "hint": "empirical rule: ~99.7%"},
  ],
  "summary": f"Normal(mu={mu}, sigma={sigma}) with {n} samples. Sample mean={np.mean(samples):.4f} (target {mu}), sample std={np.std(samples, ddof=1):.4f} (target {sigma}). Empirical rule: {within_1sigma:.1f}% within 1 sigma (target 68%), {within_2sigma:.1f}% within 2 sigma (target 95%), {within_3sigma:.1f}% within 3 sigma (target 99.7%)."
}))`},parseOutput:e=>{let a=JSON.parse(e);return{chart:a,stats:(a.stats??[]).map(e=>({label:e.label,value:e.value,hint:e.hint})),summary:{text:a.summary??"Normal distribution computed.",caveat:"The normal distribution is the cornerstone of parametric statistics. The CLT guarantees sample means are normal regardless of the population distribution. But not everything is normal - income, wealth, and insurance losses are heavy-tailed (Pareto, lognormal). Always check normality before applying t-tests, ANOVA, or linear regression."}}}}];var u=t(12115),h=t(11408),f=t(71816),x=t(77784),b=t(92906),g=t(85404),y=t(6296),_=t(7915),v=t(21362);function k({spec:e}){let a=(0,u.useCallback)(()=>{if(!e.observeMore)return e.defaultExpr;let{param:a,initial:t}=e.observeMore;return e.defaultExpr.replace(RegExp(a+"=\\d+"),a+"="+t)},[e]),[t,s]=(0,u.useState)(a),[i,r]=(0,u.useState)(a),[o,l]=(0,u.useState)(-1),{ref:p,inView:c}=(0,x.W)(),{status:k,error:N,output:S,run:w}=(0,b.j)(),j=(0,u.useMemo)(()=>{try{let a=(0,d.Mf)(i);return e.generateCode(a)}catch(e){return`# Error: ${e?.message??String(e)}`}},[i,e]),T=(0,u.useMemo)(()=>{if(!S||"ok"!==k)return{chart:null,stats:[],summary:{text:"Not yet computed."}};try{return e.parseOutput(S)}catch(e){return{chart:null,stats:[],summary:{text:`Failed to parse: ${e?.message??String(e)}`}}}},[S,k,e]),E=(0,u.useCallback)(()=>{r(t);try{let a=(0,d.Mf)(t),n=e.generateCode(a);w(n)}catch(e){console.error("Parse error:",e)}},[t,e,w]),C=(0,u.useCallback)(()=>{if(!e.observeMore)return;let{param:a,steps:n}=e.observeMore,i=Math.min(o+1,n.length-1),m=n[i],p=t.replace(RegExp(a+"=\\d+"),a+"="+m);s(p),r(p),l(i);try{let a=(0,d.Mf)(p),t=e.generateCode(a);w(t)}catch(e){console.error("Parse error:",e)}},[e,o,t,w]),{chart:M,stats:q,summary:A}=T,P=e.observeMore,H=P?o<0?P.initial:P.steps[o]:null,z=P&&o<P.steps.length-1?P.steps[o+1]:null,F=!P||o>=P.steps.length-1,O=P?o<0?"10":((o+1)/P.steps.length*100).toFixed(0):"100";return(0,n.jsx)("div",{ref:p,children:(0,n.jsxs)(f.E,{title:e.title,badge:e.badge,children:[(0,n.jsx)(h.s,{id:e.id,title:e.title,badge:e.badge,description:e.description,mathExpr:t,onMathChange:s,onRun:E,status:c?k:"idle",error:N,code:j,stats:q,summary:A,mathLatex:e.mathLatex,mathToCode:e.mathToCode,lazyEval:!0,chart:M?(0,n.jsx)(g.D,{data:M,accent:"#10b981"}):null}),P&&(0,n.jsxs)("div",{className:"mt-3 rounded-md border border-amber-500/20 bg-amber-500/5 p-3",children:[(0,n.jsxs)("div",{className:"flex items-center justify-between gap-3",children:[(0,n.jsxs)("div",{className:"text-xs text-zinc-400",children:[(0,n.jsx)(m.A,{className:"inline h-3 w-3 text-amber-400 mr-1"}),(0,n.jsx)("span",{className:"text-amber-400 font-medium",children:"Lazy eval:"})," ",P.label," ="," ",(0,n.jsx)("span",{className:"font-mono text-zinc-200",children:H}),z&&(0,n.jsxs)("span",{className:"text-zinc-500",children:[" → next: ",(0,n.jsx)("span",{className:"font-mono text-zinc-300",children:z})]})]}),!F&&(0,n.jsxs)("button",{type:"button",onClick:C,disabled:"loading"===k,className:"flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-md bg-amber-500/90 text-white hover:bg-amber-500 disabled:opacity-50 transition-colors whitespace-nowrap",children:["loading"===k?(0,n.jsx)(y.A,{className:"h-3 w-3 animate-spin"}):(0,n.jsx)(_.A,{className:"h-3 w-3"}),"Observe more",(0,n.jsx)(v.A,{className:"h-3 w-3"})]})]}),(0,n.jsx)("div",{className:"mt-2 h-1.5 rounded-full bg-zinc-800 overflow-hidden",children:(0,n.jsx)("div",{className:"h-full bg-amber-500 transition-all duration-300",style:{width:`${O}%`}})}),(0,n.jsxs)("p",{className:"mt-2 text-[10px] text-zinc-500 leading-relaxed",children:["Starts with ",P.initial," ",P.unit||"units",' — fast computation. Click "Observe more" to expand to ',P.steps.join(", ")," — progressively more accurate results. This is lazy evaluation: observe small first, request more on demand."]})]})]})})}function N(){return(0,n.jsxs)("div",{className:"min-h-screen bg-background text-foreground",children:[(0,n.jsxs)("header",{className:"relative overflow-hidden border-b border-border/40",children:[(0,n.jsxs)("div",{className:"pointer-events-none absolute inset-0 -z-10",children:[(0,n.jsx)("div",{className:"absolute -top-24 -left-24 h-96 w-96 rounded-full bg-emerald-500/20 blur-3xl"}),(0,n.jsx)("div",{className:"absolute top-0 right-0 h-96 w-96 rounded-full bg-amber-500/15 blur-3xl"}),(0,n.jsx)("div",{className:"absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl"})]}),(0,n.jsxs)("div",{className:"mx-auto max-w-6xl px-4 py-12 sm:py-16",children:[(0,n.jsx)(s.P.div,{initial:{opacity:0,y:16},animate:{opacity:1,y:0},transition:{duration:.6},className:"flex items-center gap-2 mb-6",children:(0,n.jsxs)("span",{className:"inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full bg-zinc-900/60 border border-zinc-200/10 text-zinc-300",children:[(0,n.jsx)(i.A,{className:"h-3 w-3 text-emerald-400"}),"Lazy-evaluated, browser-side, Pyodide-powered"]})}),(0,n.jsxs)(s.P.h1,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.05},className:"text-4xl sm:text-5xl font-bold tracking-tight",children:["Living Equations ",(0,n.jsx)("span",{className:"text-emerald-500",children:"Playground"})]}),(0,n.jsxs)(s.P.p,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.1},className:"mt-4 max-w-3xl text-muted-foreground leading-relaxed text-base sm:text-lg",children:["Four canonical equations — ",(0,n.jsx)("span",{className:"font-mono text-foreground",children:"SVD"}),","," ",(0,n.jsx)("span",{className:"font-mono text-foreground",children:"Self-Attention"}),","," ",(0,n.jsx)("span",{className:"font-mono text-foreground",children:"Black-Scholes"}),", and"," ",(0,n.jsx)("span",{className:"font-mono text-foreground",children:"Monte Carlo π"})," — each running the same pipeline: ",(0,n.jsx)("span",{className:"font-mono text-foreground",children:"mathematical expression"})," → ",(0,n.jsx)("span",{className:"font-mono text-foreground",children:"generated code"})," → ",(0,n.jsx)("span",{className:"font-mono text-foreground",children:"observed output"})," → ",(0,n.jsx)("span",{className:"font-mono text-foreground",children:"zoom + stats + summary"}),". Edit the expression on any card, hit Run, watch the math run live in your browser via Pyodide. Every card gives you multiple forms of confirmation: the LaTeX equation, the Python code, the rendered chart, and the narrative interpretation."]}),(0,n.jsxs)(s.P.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.15},className:"mt-8 grid grid-cols-2 sm:grid-cols-4 gap-2",children:[(0,n.jsx)(S,{label:"equations",value:"4",sub:"SVD \xb7 Attention \xb7 BS \xb7 MCπ"}),(0,n.jsx)(S,{label:"compute",value:"100%",sub:"browser-side (Pyodide)"}),(0,n.jsx)(S,{label:"backend",value:"0",sub:"no server, no API calls"}),(0,n.jsx)(S,{label:"lazy mount",value:"IO-gated",sub:"cards compute on scroll-in"})]}),(0,n.jsx)(s.P.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.4},className:"mt-8 flex justify-center pb-2",children:(0,n.jsxs)("div",{className:"flex flex-col items-center gap-1 text-muted-foreground/60",children:[(0,n.jsx)("span",{className:"text-[10px] uppercase tracking-widest",children:"scroll to load"}),(0,n.jsx)(r.A,{className:"h-3 w-3 animate-bounce"})]})})]})]}),(0,n.jsxs)("main",{className:"mx-auto max-w-6xl px-4 pb-12 space-y-8",children:[c.map((e,a)=>(0,n.jsxs)("section",{className:"space-y-4",children:[(0,n.jsxs)("div",{className:"flex items-start gap-3",children:[(0,n.jsx)("span",{className:"text-2xl font-mono text-emerald-500/40",children:String(a+1).padStart(2,"0")}),(0,n.jsx)("div",{className:"pt-1",children:(0,n.jsxs)("div",{className:"flex items-center gap-2 text-xs text-muted-foreground",children:[(0,n.jsx)(o.A,{className:"h-3 w-3 text-emerald-400"}),(0,n.jsx)("span",{className:"uppercase tracking-wider",children:e.badge})]})})]}),(0,n.jsx)(k,{spec:e})]},e.id)),(0,n.jsxs)("section",{className:"rounded-xl border border-border/60 bg-muted/30 p-6 text-center",children:[(0,n.jsxs)("p",{className:"text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed",children:[(0,n.jsx)(l.A,{className:"inline h-4 w-4 text-emerald-500 mr-1.5 align-text-bottom"}),"Every card follows the same 5-layer pattern:"," ",(0,n.jsx)("strong",{className:"text-foreground",children:"Math (LaTeX) → Code (Python) → Tools (Pyodide) → Analysis (stats + interpretation) → Visualization (Recharts)"}),". Each form confirms the others — if the chart and the summary disagree, you know something is wrong. The reader gets multiple forms of confirmation, not just one."]}),(0,n.jsxs)("div",{className:"mt-4 flex items-center justify-center gap-6 text-[11px] text-muted-foreground",children:[(0,n.jsxs)("span",{className:"flex items-center gap-1.5",children:[(0,n.jsx)(m.A,{className:"h-3 w-3 text-amber-400"})," Pyodide v0.26.2"]}),(0,n.jsxs)("span",{className:"flex items-center gap-1.5",children:[(0,n.jsx)(p.A,{className:"h-3 w-3 text-emerald-400"})," numpy + scipy"]}),(0,n.jsxs)("span",{className:"flex items-center gap-1.5",children:[(0,n.jsx)(o.A,{className:"h-3 w-3 text-violet-400"})," Recharts 2.15"]})]})]})]})]})}function S({label:e,value:a,sub:t}){return(0,n.jsxs)("div",{className:"rounded-lg border border-border/60 bg-muted/30 p-3",children:[(0,n.jsx)("div",{className:"text-[10px] uppercase tracking-wider text-muted-foreground",children:e}),(0,n.jsx)("div",{className:"text-2xl font-semibold mt-1 font-mono",children:a}),(0,n.jsx)("div",{className:"text-[10px] text-muted-foreground mt-0.5",children:t})]})}},49101:(e,a,t)=>{Promise.resolve().then(t.bind(t,22333))},56842:(e,a,t)=>{"use strict";t.d(a,{A:()=>n});let n=(0,t(6404).A)("arrow-down",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]])},65091:(e,a,t)=>{"use strict";function n(e){let a=e.trim(),t=a.indexOf("(");if(-1===t||!a.endsWith(")"))throw Error(`Expected "func(args)" — got "${a}"`);let n=a.slice(0,t).trim();if(!/^[a-z_][a-z0-9_]*$/i.test(n))throw Error(`Invalid function name "${n}"`);let s=function(e){let a=[],t=0,n=0;for(let s=0;s<e.length;s++){let i=e[s];"["===i||"("===i?t++:"]"===i||")"===i?t--:","===i&&0===t&&(a.push(e.slice(n,s)),n=s+1)}return a.push(e.slice(n)),a.filter(e=>""!==e.trim())}(a.slice(t+1,-1)),i=[],r={};for(let e of s){let a=/^[a-z_][a-z0-9_]*\s*=/.test(e.trim()),t=function e(a,t){let n=a.trim();if(t){let a=n.indexOf("=");if(-1===a)throw Error(`Expected name=value in "${n}"`);return{name:n.slice(0,a).trim(),value:e(n.slice(a+1).trim(),!1).value}}if(n.startsWith("[")&&n.endsWith("]")){let e=n.slice(1,-1).trim();if(""===e)return{value:[]};let a=e.split(",").map(e=>e.trim()),t=[];for(let e of a)/^-?\d+(\.\d+)?$/.test(e)?t.push(parseFloat(e)):"true"===e||"false"===e?t.push("true"===e):e.startsWith('"')||e.startsWith("'")?t.push(e.slice(1,-1)):t.push(e);return{value:t}}return/^-?\d+(\.\d+)?$/.test(n)?{value:parseFloat(n)}:"true"===n?{value:!0}:"false"===n?{value:!1}:n.startsWith('"')&&n.endsWith('"')||n.startsWith("'")&&n.endsWith("'")?{value:n.slice(1,-1)}:{value:n}}(e,a);if(a&&t.name)r[t.name]=t.value;else if(a)throw Error(`Could not parse argument "${e}"`);else i.push(t.value)}return{func:n,positional:i,named:r,raw:a}}function s(e,a,t){let n=e[a];if("number"==typeof n)return n;if("string"==typeof n){let e=parseFloat(n);return Number.isNaN(e)?t:e}return t}function i(e,a,t){let n=e[a];return"string"==typeof n?n:"number"==typeof n?String(n):t}t.d(a,{Mf:()=>n,i:()=>s,oJ:()=>i})},65576:(e,a,t)=>{"use strict";t.d(a,{A:()=>n});let n=(0,t(6404).A)("cpu",[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]])},66088:(e,a,t)=>{"use strict";t.d(a,{A:()=>n});let n=(0,t(6404).A)("chevron-down",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]])},71816:(e,a,t)=>{"use strict";t.d(a,{E:()=>l});var n=t(95155),s=t(39430),i=t(77784),r=t(6296),o=t(66088);function l({children:e,title:a,badge:t,height:l=520}){let{ref:m,inView:p}=(0,i.W)();return(0,n.jsx)("div",{ref:m,style:{minHeight:p?void 0:l},className:"relative",children:p?e:(0,n.jsxs)(s.P.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.4},style:{height:l},className:"rounded-xl border border-dashed border-zinc-200/10 bg-zinc-900/20 flex flex-col items-center justify-center gap-2 text-zinc-600",children:[(0,n.jsxs)("div",{className:"flex items-center gap-2",children:[(0,n.jsx)(r.A,{className:"h-3.5 w-3.5 animate-spin text-zinc-500"}),(0,n.jsx)("span",{className:"text-xs uppercase tracking-wider",children:"Pending lazy evaluation"}),t&&(0,n.jsx)("span",{className:"text-[10px] px-1.5 py-0.5 rounded-full bg-zinc-500/10 border border-zinc-500/20",children:t})]}),(0,n.jsx)("p",{className:"text-sm text-zinc-500",children:a}),(0,n.jsx)(o.A,{className:"h-4 w-4 text-zinc-600 animate-bounce mt-1"})]})})}},77784:(e,a,t)=>{"use strict";t.d(a,{W:()=>i});var n=t(12115);let s="u">typeof IntersectionObserver;function i(e){let a=(0,n.useRef)(null),[t,i]=(0,n.useState)(!s);return(0,n.useEffect)(()=>{if(!s)return;let t=a.current;if(!t)return;let n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){i(!0),n.disconnect();break}},e??{rootMargin:"200px"});return n.observe(t),()=>n.disconnect()},[e]),{ref:a,inView:t}}},79444:(e,a,t)=>{"use strict";t.d(a,{Cg:()=>s,pH:()=>r});let n=null,s="0.26.2",i=`https://cdn.jsdelivr.net/pyodide/v${s}/full/`;async function r(){return n||(n=(async()=>{let e=window;return await new Promise((a,t)=>{if(e.loadPyodide)return void a();let n=document.createElement("script");n.src=`${i}pyodide.js`,n.onload=()=>a(),n.onerror=()=>t(Error("Failed to load Pyodide bootstrap")),document.head.appendChild(n)}),await e.loadPyodide({indexURL:i})})())}},86901:(e,a,t)=>{"use strict";t.d(a,{A:()=>n});let n=(0,t(6404).A)("sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]])},92906:(e,a,t)=>{"use strict";t.d(a,{j:()=>l});var n=t(12115),s=t(79444);let i=null,r=new Set;async function o(e=["numpy","scipy"]){i||(i=(0,s.pH)());let a=await i,t=e.filter(e=>!r.has(e));return t.length>0&&(await a.loadPackage(t),t.forEach(e=>r.add(e))),a}function l(e=["numpy","scipy"]){let[a,t]=(0,n.useState)("idle"),[s,i]=(0,n.useState)(null),[r,m]=(0,n.useState)(null),p=(0,n.useRef)(0);return{status:a,error:s,output:r,run:(0,n.useCallback)(async a=>{let n=++p.current;t("loading"),i(null);try{let s=await o(e),i="";if(s.setStdout({batched:e=>{i+=e+"\n"}}),s.setStderr({batched:e=>{}}),await s.runPythonAsync(a),n!==p.current)return;let r=i.trim().split("\n").filter(e=>e.trim().startsWith("{")||e.trim().startsWith("[")),l=r.length>0?r[r.length-1]:i.trim();m(l),t("ok")}catch(e){if(n!==p.current)return;i(e?.message??String(e)),t("error")}},[e]),reset:(0,n.useCallback)(()=>{p.current++,t("idle"),i(null),m(null)},[])}}}},e=>{e.O(0,[6919,9430,9760,7591,6012,9237,4843,5404,8338,8441,3794,7358],()=>e(e.s=49101)),_N_E=e.O()}]);