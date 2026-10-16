(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9866],{13351:(e,t,a)=>{"use strict";a.d(t,{CompSciMaterialsPage:()=>w});var r=a(95155),i=a(98500),n=a.n(i),s=a(58381),o=a(27774),l=a(19776),d=a(66349),c=a(85757),m=a(45160),h=a(83036),p=a(65576),u=a(53961),x=a(33024),f=a(10762),g=a(90718),y=a(93219),b=a(44071);let j=[{label:"Core operation",value:"matmul",hint:"GEMM — all neural networks are matrix multiplies",deltaTone:"flat"},{label:"GPU FLOPS (A100)",value:"312 TFLOPS",hint:"FP16 tensor cores, 108 SMs \xd7 64 FP16",deltaTone:"flat"},{label:"Silicon node",value:"5nm (TSMC)",hint:"N5 → 3nm N3E → 2nm (future)",deltaTone:"flat"},{label:"Photoresist",value:"EUV chem",hint:"Chemically amplified resist for 13.5nm light",deltaTone:"flat"}],k=`┌─────────────────────────────────────────────────────────────────────────┐
│  THE MATERIALS → AI PIPELINE                                              │
│                                                                           │
│  Silica (SiO₂)                                                           │
│    ↓ carbothermic reduction (1900\xb0C, C)                                   │
│  Metallurgical silicon (98% Si)                                            │
│    ↓ Siemens process (HCl, 1100\xb0C)                                        │
│  Trichlorosilane (SiHCl₃)                                                 │
│    ↓ CVD (polysilicon deposition, Siemens reactor)                        │
│  Electronic-grade polysilicon (11N purity = 99.999999999%)               │
│    ↓ CZ crystal growth (melt, seed, rotate)                               │
│  Monocrystalline silicon ingot (300mm diameter)                            │
│    ↓ Diamond saw → wafers (775μm thick)                                   │
│  Bare silicon wafer                                                       │
│    ↓ Photoresist coating (CAR — chemically amplified resist)             │
│    ↓ EUV lithography (13.5nm light, ASML)                                 │
│    ↓ Etch (plasma: SF₆, C₄F₈)                                             │
│    ↓ Ion implantation (B, P, As — dopants)                                │
│    ↓ Metallisation (Cu damascene, W plugs)                                │
│    ↓ Repeat 60-90 layers                                                  │
│  Finished chip (A100 GPU: 54B transistors, 826mm\xb2, 5nm)                   │
│    ↓ HBM3 packaging (CoWoS, 80GB)                                        │
│    ↓ NVLink interconnect (900GB/s)                                        │
│    ↓ 8\xd7 A100 in DGX (640GB HBM3, 4.8TB NVLink)                           │
│    ↓ CUDA → cuBLAS → PyTorch → Transformer → LLM                         │
│    ↓                                                                       │
│  "What was UK revenue last quarter?" → \xa32.1M                              │
│                                                                           │
│  From sand to answer. Every LLM response is the end of a                  │
│  120-year materials engineering pipeline.                                  │
└─────────────────────────────────────────────────────────────────────────────────┘`,v=`# Matrix Multiplication — the core operation of ALL neural networks
# Shows ijk vs ikj loop order (cache effects)
# This is what GPUs do billions of times per second

import time, random

def matmul_ijk(A, B, n):
    "ijk order: cache-unfriendly (misses on B)"
    C = [[0.0]*n for _ in range(n)]
    for i in range(n):
        for j in range(n):
            s = 0.0
            for k in range(n):
                s += A[i][k] * B[k][j]  # B[k][j] strides by n each inner step
            C[i][j] = s
    return C

def matmul_ikj(A, B, n):
    "ikj order: cache-friendly (B accessed row-major)"
    C = [[0.0]*n for _ in range(n)]
    for i in range(n):
        for k in range(n):
            a_ik = A[i][k]
            for j in range(n):
                C[i][j] += a_ik * B[k][j]  # B[k][j] sequential → cache hit
    return C

def matmul_blocked(A, B, n, block=8):
    "Blocked (tiled): maximises L1/L2 cache reuse"
    C = [[0.0]*n for _ in range(n)]
    for ii in range(0, n, block):
        for kk in range(0, n, block):
            for jj in range(0, n, block):
                for i in range(ii, min(ii+block, n)):
                    for k in range(kk, min(kk+block, n)):
                        a_ik = A[i][k]
                        for j in range(jj, min(jj+block, n)):
                            C[i][j] += a_ik * B[k][j]
    return C

# Benchmark on 64\xd764 matrices
N = 64
random.seed(42)
A = [[random.gauss(0, 1) for _ in range(N)] for _ in range(N)]
B = [[random.gauss(0, 1) for _ in range(N)] for _ in range(N)]

print("=" * 60)
print("Matrix Multiply Benchmark — Cache Effects")
print("=" * 60)
print(f"\\nMatrix size: {N}\xd7{N} = {N*N} multiply-adds")
print(f"FLOPS: {2*N*N*N:,} (2\xd7 for multiply+add)")

# ijk
t0 = time.perf_counter()
_ = matmul_ijk(A, B, N)
t_ijk = time.perf_counter() - t0
print(f"\\nikj (cache-unfriendly):  {t_ijk*1000:.2f} ms")
print(f"  B[k][j] strides by {N} each inner step → cache miss")

# ikj
t0 = time.perf_counter()
C_ikj = matmul_ikj(A, B, N)
t_ikj = time.perf_counter() - t0
print(f"\\nikj (cache-friendly):    {t_ikj*1000:.2f} ms")
print(f"  B[k][j] sequential → L1 cache hit")
print(f"  Speedup: {t_ijk/t_ikj:.1f}\xd7")

# Blocked
t0 = time.perf_counter()
C_blocked = matmul_blocked(A, B, N, block=8)
t_blocked = time.perf_counter() - t0
print(f"\\nBlocked (8\xd78 tiles):     {t_blocked*1000:.2f} ms")
print(f"  Maximises L1/L2 reuse → best for large matrices")

print(f"\\n{'=' * 60}")
print("RESULTS:")
print(f"  ijk:     {t_ijk*1000:.2f} ms (baseline)")
print(f"  ikj:     {t_ikj*1000:.2f} ms ({t_ijk/t_ikj:.1f}\xd7 faster)")
print(f"  Blocked: {t_blocked*1000:.2f} ms ({t_ijk/t_blocked:.1f}\xd7 faster)")
print(f"\\n  GPU does this {312e12 / (2*N*N*N / (t_blocked)):.0f}\xd7 faster")
print(f"  (A100: 312 TFLOPS vs Python: ~{2*N*N*N / (t_blocked*1e6):.0f} MFLOPS)")
print("=" * 60)`,N=`# DFT (Density Functional Theory) → Loss Landscape Analogy
# Shows how the mathematical structure of materials science
# connects to deep learning optimisation

import math, random

# In DFT, the energy E[n] is a functional of the electron density n(r).
# The ground state = the density that MINIMISES E[n].
# This is the variational principle: E₀ ≤ E[n] for all n.

# In deep learning, the loss L(θ) is a function of the parameters θ.
# The optimal model = the parameters that MINIMISE L(θ).
# This is gradient descent: θ ← θ - η\xb7∂L/∂θ

# The analogy:
#   DFT:   E[n(r)]        → minimise → ground state energy
#   DL:    L[θ]           → minimise → optimal model
#
#   DFT:   Kohn-Sham equations (self-consistent iteration)
#   DL:    Backpropagation (gradient descent iteration)
#
#   DFT:   Exchange-correlation functional (unknown exact form)
#   DL:    Loss function (cross-entropy, MSE — known but complex)
#
#   DFT:   Local density approximation (LDA)
#   DL:    Stochastic gradient descent (SGD — local approximation)
#
#   DFT:   The energy landscape has many local minima
#   DL:    The loss landscape has many local minima (saddle points)

print("=" * 60)
print("DFT → Deep Learning: The Variational Connection")
print("=" * 60)

print("\\nDFT (Materials Science):")
print("  E[n(r)] = T[n] + V_ext[n] + J[n] + E_xc[n]")
print("  Minimise → ground state density n₀(r)")
print("  Method: Kohn-Sham self-consistent iteration")

print("\\nDeep Learning:")
print("  L(θ) = -Σ y_i\xb7log(ŷ_i)  (cross-entropy)")
print("  Minimise → optimal parameters θ*")
print("  Method: Gradient descent θ ← θ - η\xb7∂L/∂θ")

print("\\nBoth are variational problems:")
print("  - Find the configuration (density/parameters) that minimises energy/loss")
print("  - Both use iterative methods (SCF / SGD)")
print("  - Both face local minima (saddle points)")
print("  - Both benefit from momentum (SCF damping / Adam optimizer)")

print(f"\\n{'=' * 60}")
print("THE DEEP CONNECTION:")
print("  The same mathematical structure underpins both:")
print("  - Finding ground-state electron configurations (DFT)")
print("  - Training neural networks (gradient descent)")
print("  Both are high-dimensional optimisation on complex landscapes.")
print("  The 'loss landscape' of a neural network IS an energy landscape.")
print("  Saddle points in DL = transition states in chemistry.")
print("  Adam optimiser = damped SCF with momentum.")
print("=" * 60)`;function w(){return(0,r.jsxs)("div",{className:"space-y-8",children:[(0,r.jsx)(s.zY,{eyebrow:"Computational Science \xb7 materials → AI",title:"Computational Science & Materials for AI",description:"From silica sand to LLM answers: the 120-year materials engineering pipeline that enables every neural network. Silicon chemistry → semiconductor physics → GPU architecture → matrix multiplication → attention → LLM. With the DFT-to-loss-landscape mathematical analogy, Pyodide matrix multiply benchmarks (ijk vs ikj vs blocked — showing cache effects), and the roofline model connecting hardware to algorithms.",right:(0,r.jsxs)("div",{className:"flex gap-2",children:[(0,r.jsxs)(m.E,{variant:"outline",className:"gap-1.5",children:[(0,r.jsx)(p.A,{className:"h-3 w-3"})," silicon→GPU→LLM"]}),(0,r.jsxs)(m.E,{variant:"outline",className:"gap-1.5",children:[(0,r.jsx)(u.A,{className:"h-3 w-3"})," Pyodide"]})]})}),(0,r.jsx)("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-3",children:j.map(e=>(0,r.jsx)(s.nO,{label:e.label,value:e.value,hint:e.hint,deltaTone:e.deltaTone},e.label))}),(0,r.jsx)(s.iv,{title:"From sand to answer — the materials pipeline",description:"Every LLM response is the end of a 120-year materials engineering chain: silica → silicon → wafer → chip → GPU → CUDA → PyTorch → Transformer → LLM.",icon:(0,r.jsx)(x.A,{className:"h-5 w-5"}),children:(0,r.jsx)(l.N,{language:"text",filename:"materials_pipeline.txt",code:k})}),(0,r.jsx)(s.iv,{title:"Matrix multiplication — the ONE operation that powers all AI",description:"Every neural network — from a 2-layer MLP to GPT-4 — reduces to matrix multiplication (GEMM). Attention is matmul. Feed-forward is matmul. Convolutions are im2col + matmul. The entire GPU industry exists to accelerate this one operation.",icon:(0,r.jsx)(p.A,{className:"h-5 w-5"}),children:(0,r.jsxs)("div",{className:"space-y-3",children:[(0,r.jsxs)("div",{className:"rounded-md border border-primary/30 bg-primary/5 p-3 text-center",children:[(0,r.jsx)("p",{className:"font-mono text-sm text-primary",children:"C = A \xb7 B where A ∈ ℝ^(m\xd7k), B ∈ ℝ^(k\xd7n), C ∈ ℝ^(m\xd7n)"}),(0,r.jsx)("p",{className:"text-[11px] text-muted-foreground mt-1",children:"Cost: 2mkn FLOPs. For attention: m=n=seq_len, k=d_model → O(seq_len\xb2 \xd7 d_model)"})]}),(0,r.jsxs)("div",{className:"grid md:grid-cols-3 gap-2 text-xs",children:[(0,r.jsxs)("div",{className:"rounded-md border border-border/60 p-2.5",children:[(0,r.jsx)("p",{className:"font-semibold mb-1",children:"CPU matmul"}),(0,r.jsx)("p",{className:"text-muted-foreground text-[11px]",children:"~50 GFLOPS. BLAS library. Cache-bound. Python loop: ~100 MFLOPS."})]}),(0,r.jsxs)("div",{className:"rounded-md border border-border/60 p-2.5",children:[(0,r.jsx)("p",{className:"font-semibold mb-1",children:"GPU matmul (A100)"}),(0,r.jsx)("p",{className:"text-muted-foreground text-[11px]",children:"312 TFLOPS (FP16). Tensor cores: 4\xd74\xd74 matrix per clock per core. 108 SMs."})]}),(0,r.jsxs)("div",{className:"rounded-md border border-border/60 p-2.5",children:[(0,r.jsx)("p",{className:"font-semibold mb-1",children:"TPU matmul (v5)"}),(0,r.jsx)("p",{className:"text-muted-foreground text-[11px]",children:"Systolic array. 256\xd7256 MAC per cycle. Optimised for batched GEMM."})]})]})]})}),(0,r.jsx)(s.iv,{title:"Try it: Matrix multiply benchmark — ijk vs ikj vs blocked (Pyodide)",description:"Shows how loop order affects cache performance. ijk: B accessed column-major → cache miss. ikj: B accessed row-major → cache hit. Blocked (tiled): maximises L1/L2 reuse. This is why BLAS libraries use blocked algorithms — and why GPUs use tiled architectures.",icon:(0,r.jsx)(f.A,{className:"h-5 w-5"}),badge:"executable",children:(0,r.jsx)(d.l,{code:v,buttonLabel:"Run matmul benchmark (Pyodide)"})}),(0,r.jsx)(s.iv,{title:"DFT → Deep Learning: the variational connection",description:"Density Functional Theory (materials science) and gradient descent (deep learning) share the same mathematical structure: find the configuration that minimises an energy/loss functional.",icon:(0,r.jsx)(g.A,{className:"h-5 w-5"}),badge:"mathematics",children:(0,r.jsx)(l.N,{language:"python",filename:"dft_dl_analogy.py",code:N})}),(0,r.jsx)(s.iv,{title:"The roofline model — when are you compute-bound vs memory-bound?",description:"The roofline model tells you whether your kernel is limited by compute (FLOPS) or memory bandwidth (bytes/s). Below the ridge point: memory-bound. Above: compute-bound. GPU kernels for attention try to stay in the compute-bound regime.",icon:(0,r.jsx)(y.A,{className:"h-5 w-5"}),children:(0,r.jsx)(l.N,{language:"text",filename:"roofline.txt",code:`┌──────────────────────────────────────────────────────────────────┐
│  ROOFLINE MODEL (A100 GPU, FP16)                                │
│                                                                  │
│  Performance (TFLOPS)                                            │
│  312 ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─┐                   │
│      │                                       │  COMPUTE-BOUND   │
│      │                                       │  (matmul, attn)  │
│  200 │                                  ╱────┘                   │
│      │                              ╱                             │
│      │                          ╱                                 │
│  100 │                     ╱  MEMORY-BANDWIDTH RIDGE             │
│      │                 ╱        (ridge point ≈ 50 FLOP/byte)      │
│   50 │            ╱                                              │
│      │       ╱                                                    │
│       ╱                                                           │
│  0 ──└──────────────────────────────────────────────────────────  │
│      0    10    20    50    100   200   500  1000                 │
│                  Arithmetic Intensity (FLOP/byte)                 │
│                                                                  │
│  MEMORY-BOUND: low FLOP/byte (elementwise ops, reductions)       │
│  COMPUTE-BOUND: high FLOP/byte (matmul, attention, conv)        │
│                                                                  │
│  Attention: ~2\xd7seq_len\xd7d_model FLOPs / seq_len\xd7d_model bytes      │
│           = 2\xd7d_model FLOP/byte → compute-bound for d_model>25   │
└──────────────────────────────────────────────────────────────────┘`})}),(0,r.jsx)(s.iv,{title:"Materials science research → AI hardware",description:"arXiv cond-mat (condensed matter) papers drive the next generation of AI hardware. Neuromorphic materials, 2D semiconductors, and quantum materials are the FY30+ frontier.",icon:(0,r.jsx)(b.A,{className:"h-5 w-5"}),badge:"research",children:(0,r.jsxs)("div",{className:"space-y-3 text-sm text-muted-foreground leading-relaxed",children:[(0,r.jsx)("p",{children:"The connection between materials science and AI is not metaphorical — it is causal. Every improvement in LLM capability traces back to a materials breakthrough:"}),(0,r.jsxs)("ul",{className:"ml-4 space-y-1.5 text-xs",children:[(0,r.jsxs)("li",{children:[(0,r.jsx)("strong",{className:"text-foreground/80",children:"EUV photoresist chemistry"})," (2010s) → 7nm/5nm nodes → 2\xd7 transistor density → 2\xd7 FLOPS per GPU → 2\xd7 larger models trainable"]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("strong",{className:"text-foreground/80",children:"HBM3 memory materials"})," (2020s) → 80GB on-package memory → larger batch sizes → more stable training → better convergence"]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("strong",{className:"text-foreground/80",children:"Neuromorphic materials"})," (FY30+) → memristor crossbars → in-memory compute → 1000\xd7 lower power → edge LLMs"]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("strong",{className:"text-foreground/80",children:"2D semiconductors"})," (MoS₂, WSe₂) → sub-1nm transistors → post-silicon scaling → continuation of Moore's law"]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("strong",{className:"text-foreground/80",children:"Quantum materials"})," (topological insulators) → quantum error correction → fault-tolerant quantum computing → quantum ML"]})]}),(0,r.jsxs)("p",{children:[(0,r.jsx)("strong",{className:"text-foreground/80",children:"The platform's floating button (FloatingLiveButton)"})," fetches arXiv papers on each page. On this page, it surfaces cond-mat papers — the materials science research that will power the next generation of AI hardware. The data pipeline IS the materials research pipeline."]})]})}),(0,r.jsxs)(h.S,{pageTitle:"Comp Sci Materials",children:[(0,r.jsx)(h.P,{title:"Materials science IS the multi-scale problem — and it's the right framing",connectedTo:"ADR-034 (ESM-2 + AlphaFold2)",children:(0,r.jsx)("p",{children:"Materials science spans 12 orders of magnitude: quantum (10^-11 m, DFT) → atomistic (10^-9 m, MD) → mesoscale (10^-6 m, phase field) → continuum (10^-3 m, FEM) → structural (1 m, engineering). Each scale needs a different equation: Schr\xf6dinger (quantum), Newton (MD), Cahn-Hilliard (phase field), Navier-Stokes (FEM). The platform's thesis applies: the SAME math (PDEs) appears at every scale — just with different parameters and dimensions."})}),(0,r.jsx)(h.P,{title:"DFT IS the quantum ground state — and it's the foundation of materials",connectedTo:"ADR-034 (ESM-2 + AlphaFold2)",children:(0,r.jsx)("p",{children:"Density Functional Theory (DFT) solves the Kohn-Sham equations: [-\xbd∇\xb2 + V_eff]ψ = εψ. This IS a variant of the Schr\xf6dinger equation — the SAME equation that appears on the computational-chemistry page. DFT approximates the many-body electron problem with a single-particle effective potential. The math (eigenvalue problem for a PDE) IS the same as SVD (eigenvalue problem for a matrix). DFT IS SVD for quantum states."})}),(0,r.jsx)(h.P,{title:"Molecular dynamics at the materials scale IS Verlet — same as protein folding",connectedTo:"ADR-051 (living-equation pages)",children:(0,r.jsx)("p",{children:"Materials MD uses the SAME Verlet integrator as protein MD (AMBER/GROMACS). The difference: materials MD simulates 10^6-10^9 atoms (crystal lattice) vs protein MD's 10^4-10^5 atoms. The equation (F = ma, Verlet step) IS identical. The force field (EAM for metals vs AMBER for proteins) differs. The math (Verlet integration) IS the same — just different F(x). This IS the multi-disciplinary elegance: one integrator, two sciences."})}),(0,r.jsx)(h.P,{title:"Phase-field models ARE Cahn-Hilliard — and they're PDEs",connectedTo:"ADR-055 (cross-disciplinary scope)",children:(0,r.jsx)("p",{children:"Phase-field models use the Cahn-Hilliard equation: ∂c/∂t = ∇\xb7(M∇(δF/δc)). This IS a fourth-order PDE — the SAME class as Navier-Stokes (second-order). The phase field c represents the concentration; the free energy F drives the evolution. The pattern (free energy minimization via PDE) IS the same as gradient descent (loss minimization via gradient). Phase-field IS gradient descent for materials science."})}),(0,r.jsx)(h.P,{title:"The Materials Project IS the open database — and it's the right model",connectedTo:"ADR-022 (pgvector for variant embeddings)",children:(0,r.jsx)("p",{children:"The Materials Project (Berkeley 2011) computed 150,000+ materials via DFT and made the results open. Researchers query the database (not run DFT) to find materials with desired properties. This IS the SAME pattern as UniProt (computed protein structures, open database) and gnomAD (genetic variants, open database). The pattern (compute once → store → query → discover) IS the pattern of modern computational science. The Materials Project IS UniProt for materials."})})]}),(0,r.jsx)(o.T,{relatedPages:[{id:"connections",reason:"Trace this topic's connections across the platform's math graph"},{id:"transformer",reason:"Continue to transformer — see also from this page"},{id:"neural-networks",reason:"Continue to neural networks — see also from this page"}]}),(0,r.jsxs)("div",{className:"flex flex-wrap gap-2",children:[(0,r.jsx)(n(),{href:(0,c.ZJ)("transformer"),className:"text-sm text-primary hover:underline",children:"→ Transformer (attention = matmul + softmax)"}),(0,r.jsx)("span",{className:"text-muted-foreground",children:"\xb7"}),(0,r.jsx)(n(),{href:(0,c.ZJ)("neural-networks"),className:"text-sm text-primary hover:underline",children:"→ Neural Networks (the algorithms on top of the hardware)"}),(0,r.jsx)("span",{className:"text-muted-foreground",children:"\xb7"}),(0,r.jsx)(n(),{href:(0,c.ZJ)("knowledge"),className:"text-sm text-primary hover:underline",children:"→ ADR-025 (agentic roadmap)"})]})]})}},19776:(e,t,a)=>{"use strict";a.d(t,{N:()=>l,R:()=>d});var r=a(95155),i=a(12115),n=a(94514),s=a(67635),o=a(89239);function l({code:e,language:t="sql",filename:a,highlight:l=[]}){let[d,c]=(0,i.useState)(!1),m=e.replace(/\n$/,"").split("\n"),h=async()=>{try{await navigator.clipboard.writeText(e),c(!0),setTimeout(()=>c(!1),1500)}catch{}};return(0,r.jsxs)("div",{className:"rounded-md border border-border/60 bg-[oklch(0.16_0.005_240)] text-[oklch(0.97_0.005_60)] overflow-hidden",children:[(0,r.jsxs)("div",{className:"flex items-center justify-between px-3 py-1.5 border-b border-white/10 bg-white/5",children:[(0,r.jsxs)("div",{className:"flex items-center gap-2 text-[11px] text-white/60 font-mono",children:[(0,r.jsx)("span",{className:"h-2 w-2 rounded-full bg-rose-400"}),(0,r.jsx)("span",{className:"h-2 w-2 rounded-full bg-amber-400"}),(0,r.jsx)("span",{className:"h-2 w-2 rounded-full bg-emerald-400"}),(0,r.jsx)("span",{className:"ml-2 uppercase tracking-wider",children:t}),a&&(0,r.jsxs)("span",{className:"text-white/40",children:["\xb7 ",a]})]}),(0,r.jsxs)(o.$,{variant:"ghost",size:"sm",className:"h-6 px-2 text-[11px] text-white/70 hover:text-white hover:bg-white/10",onClick:h,"aria-label":"Copy code",children:[d?(0,r.jsx)(n.A,{className:"h-3 w-3 mr-1"}):(0,r.jsx)(s.A,{className:"h-3 w-3 mr-1"}),d?"Copied":"Copy"]})]}),(0,r.jsx)("pre",{className:"code-scroll overflow-x-auto p-3 text-[12.5px] leading-relaxed font-mono",children:(0,r.jsx)("code",{children:m.map((e,t)=>{let a=t+1,i=l.includes(a);return(0,r.jsxs)("div",{className:["flex",i?"bg-primary/20 -mx-3 px-3 border-l-2 border-primary":""].join(" "),children:[(0,r.jsx)("span",{className:"select-none text-white/30 w-8 inline-block text-right pr-3 shrink-0",children:a}),(0,r.jsx)("span",{className:"whitespace-pre",children:e||" "})]},a)})})})]})}function d({children:e}){return(0,r.jsx)("code",{className:"rounded bg-muted px-1.5 py-0.5 text-[12px] font-mono text-foreground/90 border border-border/60",children:e})}},33024:(e,t,a)=>{"use strict";a.d(t,{A:()=>r});let r=(0,a(6404).A)("layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]])},34421:(e,t,a)=>{Promise.resolve().then(a.bind(a,13351))},53961:(e,t,a)=>{"use strict";a.d(t,{A:()=>r});let r=(0,a(6404).A)("zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]])},65576:(e,t,a)=>{"use strict";a.d(t,{A:()=>r});let r=(0,a(6404).A)("cpu",[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]])},66349:(e,t,a)=>{"use strict";a.d(t,{l:()=>y});var r=a(95155),i=a(12115),n=a(80642),s=a(39430),o=a(89239),l=a(45160),d=a(6296),c=a(12651),m=a(13545),h=a(20232),p=a(10762);let u=null,x="0.26.2",f=`https://cdn.jsdelivr.net/pyodide/v${x}/full/`;async function g(){return u||(u=(async()=>(await new Promise((e,t)=>{if(window.loadPyodide)return void e();let a=document.createElement("script");a.src=`${f}pyodide.js`,a.onload=()=>e(),a.onerror=()=>t(Error("Failed to load Pyodide bootstrap")),document.head.appendChild(a)}),await window.loadPyodide({indexURL:f})))().catch(e=>{throw u=null,e}))}function y({code:e,buttonLabel:t="Run in browser",preamble:a,compact:u=!1,onOutput:f,hideTextOutput:y=!1}){let[b,j]=(0,i.useState)("idle"),[k,v]=(0,i.useState)(""),[N,w]=(0,i.useState)(null),[M,A]=(0,i.useState)(null),S=(0,i.useRef)(null),T=(0,i.useCallback)(async()=>{j("loading"),w(null),v("Loading Pyodide runtime (~10MB)…\nFirst run takes 5-10s on a typical connection.\nSubsequent runs are instant.\n");let t=performance.now();try{let r=await g(),i=Math.round(performance.now()-t);A(i);let n=[],s=e=>{n.push(e)};try{r.setStdout({batched:s}),r.setStderr({batched:s})}catch{try{r.setStdout(s),r.setStderr(s)}catch{}}let o=(a??"")+"\n"+e,l=[];if(/\bnumpy\b|\bnp\./.test(o)&&l.push("numpy"),/\bscipy\b|\bsp\./.test(o)&&l.push("scipy"),/\bsklearn\b|\bGradientBoosting\b|\bRandomForest\b|\btrain_test_split\b|\bKMeans\b|\bSVC\b|\bLogisticRegression\b/.test(o)&&l.push("scikit-learn"),/\bpandas\b|\bpd\./.test(o)&&l.push("pandas"),/\bpyarrow\b|\bpq\./.test(o)&&l.push("pyarrow"),l.length>0){v(e=>e+`
Loading packages: ${l.join(", ")}…
`);try{await r.loadPackage(l)}catch{}}j("running"),v(e=>e+`
Pyodide loaded in ${i}ms. Running analysis…

`),a&&await r.runPythonAsync(a),await r.runPythonAsync(e);let d=n.join("");v(e=>e+(d||"(no output)")),j("done"),f&&f(d)}catch(a){let e=a instanceof Error?a.message:String(a),t=e.includes("Failed to load Pyodide bootstrap")?"\n\nHint: check your internet connection — Pyodide loads from a CDN (jsdelivr.net). Click again to retry.":e.includes("NetworkError")||e.includes("Failed to fetch")?"\n\nHint: network error loading Pyodide. Check your connection and click again to retry.":"";w(e+t),j("error"),v(a=>a+`
Error: ${e}${t}`)}},[e,a,f]);return(0,i.useEffect)(()=>{S.current&&(S.current.scrollTop=S.current.scrollHeight)},[k]),(0,r.jsxs)("div",{className:`mt-3 ${u?"":"rounded-md border border-primary/30 bg-primary/3 p-3"}`,children:[(0,r.jsxs)("div",{className:"flex items-center gap-2",children:[(0,r.jsxs)(o.$,{size:u?"sm":"default",variant:"running"===b||"loading"===b?"outline":"error"===b?"destructive":"default",className:"gap-1.5",onClick:T,disabled:"loading"===b||"running"===b,children:["loading"===b||"running"===b?(0,r.jsx)(d.A,{className:"h-3.5 w-3.5 animate-spin"}):"done"===b?(0,r.jsx)(c.A,{className:"h-3.5 w-3.5"}):"error"===b?(0,r.jsx)(m.A,{className:"h-3.5 w-3.5"}):(0,r.jsx)(h.A,{className:"h-3.5 w-3.5"}),"error"===b?`Retry: ${t}`:"done"===b?`Re-run: ${t}`:t]}),!u&&(0,r.jsxs)(l.E,{variant:"outline",className:"text-[10px] gap-1",children:[(0,r.jsx)(p.A,{className:"h-2.5 w-2.5"}),"Pyodide v",x]}),null!==M&&"done"===b&&(0,r.jsxs)("span",{className:"text-[10px] text-muted-foreground",children:["Runtime: ",M,"ms load + execution"]})]}),(0,r.jsx)(n.N,{children:("idle"!==b||k)&&!y&&(0,r.jsx)(s.P.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},className:"mt-2",children:(0,r.jsx)("div",{ref:S,className:`rounded-md bg-[oklch(0.16_0.005_240)] text-[oklch(0.97_0.005_60)] p-2.5 text-[11px] font-mono leading-relaxed overflow-x-auto code-scroll max-h-64 overflow-y-auto ${N?"border border-rose-500/40":"border border-emerald-500/30"}`,children:(0,r.jsx)("pre",{className:"whitespace-pre-wrap",children:k})})})})]})}},67635:(e,t,a)=>{"use strict";a.d(t,{A:()=>r});let r=(0,a(6404).A)("copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]])},83036:(e,t,a)=>{"use strict";a.d(t,{P:()=>d,S:()=>c});var r=a(95155),i=a(98500),n=a.n(i),s=a(44071),o=a(97810),l=a(85757);function d({title:e,connectedTo:t,researchHref:a,children:i}){return(0,r.jsxs)("div",{className:"rounded-md border border-primary/30 bg-primary/5 p-4 space-y-2",children:[(0,r.jsxs)("div",{className:"flex items-start gap-2",children:[(0,r.jsx)(s.A,{className:"h-4 w-4 text-primary mt-0.5 shrink-0"}),(0,r.jsxs)("div",{className:"flex-1 min-w-0",children:[(0,r.jsx)("p",{className:"text-sm font-semibold text-foreground/90 leading-tight",children:e}),t&&(0,r.jsxs)("div",{className:"flex items-center gap-1.5 mt-1",children:[(0,r.jsx)(o.A,{className:"h-3 w-3 text-muted-foreground"}),(0,r.jsxs)(n(),{href:a??(0,l.ZJ)("research"),className:"text-[10px] text-muted-foreground hover:text-primary hover:underline",children:["Connected to: ",t," →"]})]})]})]}),(0,r.jsx)("div",{className:"text-xs text-muted-foreground leading-relaxed space-y-2 pl-6",children:i})]})}function c({pageTitle:e,children:t}){return(0,r.jsxs)("div",{className:"space-y-4",children:[(0,r.jsxs)("div",{className:"flex items-center gap-2 border-b border-border/60 pb-2",children:[(0,r.jsx)(s.A,{className:"h-5 w-5 text-primary"}),(0,r.jsxs)("h2",{className:"text-base font-bold text-foreground/90",children:["My deeper thoughts — ",e]})]}),(0,r.jsx)("p",{className:"text-xs text-muted-foreground italic leading-relaxed",children:"These are not summaries. They are arguments — the kind of connections a reader with serious grey matter would make after living with the material for years. Each thought connects to the platform's research section (ADRs, papers, decision records) so it's traceable, not just opinionated."}),(0,r.jsx)("div",{className:"space-y-3",children:t})]})}},89239:(e,t,a)=>{"use strict";a.d(t,{$:()=>l});var r=a(95155);a(12115);var i=a(42442),n=a(18460),s=a(40980);let o=(0,n.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",destructive:"bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9"}},defaultVariants:{variant:"default",size:"default"}});function l({className:e,variant:t,size:a,asChild:n=!1,...l}){let d=n?i.DX:"button";return(0,r.jsx)(d,{"data-slot":"button",className:(0,s.cn)(o({variant:t,size:a,className:e})),...l})}},90718:(e,t,a)=>{"use strict";a.d(t,{A:()=>r});let r=(0,a(6404).A)("brain",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]])},93219:(e,t,a)=>{"use strict";a.d(t,{A:()=>r});let r=(0,a(6404).A)("activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]])},94514:(e,t,a)=>{"use strict";a.d(t,{A:()=>r});let r=(0,a(6404).A)("check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]])},97810:(e,t,a)=>{"use strict";a.d(t,{A:()=>r});let r=(0,a(6404).A)("book-open",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]])}},e=>{e.O(0,[6919,8500,9430,3493,9620,6722,8441,3794,7358],()=>e(e.s=34421)),_N_E=e.O()}]);