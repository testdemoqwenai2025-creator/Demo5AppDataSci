(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5177],{9088:(e,t,i)=>{"use strict";i.d(t,{A:()=>s});let s=(0,i(6404).A)("beaker",[["path",{d:"M4.5 3h15",key:"c7n0jr"}],["path",{d:"M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3",key:"m1uhx7"}],["path",{d:"M6 14h12",key:"4cwo0f"}]])},14023:(e,t,i)=>{"use strict";i.d(t,{A:()=>s});let s=(0,i(6404).A)("atom",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["path",{d:"M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z",key:"1l2ple"}],["path",{d:"M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z",key:"1wam0m"}]])},19776:(e,t,i)=>{"use strict";i.d(t,{N:()=>l,R:()=>c});var s=i(95155),r=i(12115),n=i(94514),a=i(67635),o=i(89239);function l({code:e,language:t="sql",filename:i,highlight:l=[]}){let[c,d]=(0,r.useState)(!1),m=e.replace(/\n$/,"").split("\n"),p=async()=>{try{await navigator.clipboard.writeText(e),d(!0),setTimeout(()=>d(!1),1500)}catch{}};return(0,s.jsxs)("div",{className:"rounded-md border border-border/60 bg-[oklch(0.16_0.005_240)] text-[oklch(0.97_0.005_60)] overflow-hidden",children:[(0,s.jsxs)("div",{className:"flex items-center justify-between px-3 py-1.5 border-b border-white/10 bg-white/5",children:[(0,s.jsxs)("div",{className:"flex items-center gap-2 text-[11px] text-white/60 font-mono",children:[(0,s.jsx)("span",{className:"h-2 w-2 rounded-full bg-rose-400"}),(0,s.jsx)("span",{className:"h-2 w-2 rounded-full bg-amber-400"}),(0,s.jsx)("span",{className:"h-2 w-2 rounded-full bg-emerald-400"}),(0,s.jsx)("span",{className:"ml-2 uppercase tracking-wider",children:t}),i&&(0,s.jsxs)("span",{className:"text-white/40",children:["\xb7 ",i]})]}),(0,s.jsxs)(o.$,{variant:"ghost",size:"sm",className:"h-6 px-2 text-[11px] text-white/70 hover:text-white hover:bg-white/10",onClick:p,"aria-label":"Copy code",children:[c?(0,s.jsx)(n.A,{className:"h-3 w-3 mr-1"}):(0,s.jsx)(a.A,{className:"h-3 w-3 mr-1"}),c?"Copied":"Copy"]})]}),(0,s.jsx)("pre",{className:"code-scroll overflow-x-auto p-3 text-[12.5px] leading-relaxed font-mono",children:(0,s.jsx)("code",{children:m.map((e,t)=>{let i=t+1,r=l.includes(i);return(0,s.jsxs)("div",{className:["flex",r?"bg-primary/20 -mx-3 px-3 border-l-2 border-primary":""].join(" "),children:[(0,s.jsx)("span",{className:"select-none text-white/30 w-8 inline-block text-right pr-3 shrink-0",children:i}),(0,s.jsx)("span",{className:"whitespace-pre",children:e||" "})]},i)})})})]})}function c({children:e}){return(0,s.jsx)("code",{className:"rounded bg-muted px-1.5 py-0.5 text-[12px] font-mono text-foreground/90 border border-border/60",children:e})}},21964:(e,t,i)=>{"use strict";i.d(t,{SingleCellMultiOmicsPage:()=>P});var s=i(95155),r=i(12115),n=i(39430),a=i(98500),o=i.n(a),l=i(58381),c=i(27774),d=i(60508),m=i(92194),p=i(19776),h=i(66349),u=i(93697),g=i(85757),x=i(45160),f=i(83036),b=i(30971),N=i(53961),v=i(14023),_=i(90718),y=i(10762),A=i(9088),j=i(93219),w=i(65576),k=i(44071);let T=[{label:"10x Genomics",value:"10K-100K cells/run",hint:"$1500 per Chromium Next GEM run",deltaTone:"flat"},{label:"scVI likelihood",value:"ZINB(θ, π)",hint:"Zero-Inflated Negative Binomial",deltaTone:"flat"},{label:"RNA velocity",value:"du/dt = α - β\xb7u",hint:"Spliced/unspliced kinetic ODE",deltaTone:"flat"},{label:"WNN integration",value:"Weighted KNN",hint:"Per-cell modality weights (Seurat v4)",deltaTone:"flat"}];function I(){let[e,t]=(0,r.useState)(0);return(0,r.useEffect)(()=>{let e=setInterval(()=>t(e=>(e+1)%6),900);return()=>clearInterval(e)},[]),(0,s.jsxs)("div",{className:"rounded-md border border-border/60 bg-card p-4",children:[(0,s.jsx)("style",{children:`
        .rv-3d { perspective: 900px; }
        .rv-stage { transform: rotateX(15deg); transform-style: preserve-3d; }
      `}),(0,s.jsxs)("p",{className:"text-sm font-semibold mb-3 flex items-center gap-2",children:[(0,s.jsx)(b.A,{className:"h-4 w-4 text-primary"}),"RNA velocity — spliced/unspliced kinetic arrows (loop)",(0,s.jsxs)("span",{className:"text-[10px] font-mono text-muted-foreground ml-auto",children:["phase ",e+1,"/6"]})]}),(0,s.jsx)("div",{className:"rv-3d",children:(0,s.jsx)("div",{className:"rv-stage",children:(0,s.jsxs)("svg",{width:"340",height:"280",viewBox:"0 0 340 280",children:[[{id:0,x:80,y:80,vx:1.2,vy:.5},{id:1,x:110,y:95,vx:1,vy:.4},{id:2,x:140,y:110,vx:.8,vy:.3},{id:3,x:170,y:130,vx:.5,vy:.1},{id:4,x:200,y:145,vx:.2,vy:-.1},{id:5,x:230,y:160,vx:-.1,vy:-.2},{id:6,x:260,y:175,vx:-.2,vy:-.3},{id:7,x:60,y:120,vx:.8,vy:.6},{id:8,x:90,y:150,vx:.5,vy:.7},{id:9,x:130,y:180,vx:.1,vy:.8},{id:10,x:160,y:210,vx:-.1,vy:.5}].map(t=>{let i=t.id<3,r=t.id>=3&&t.id<7;t.id;let a=i?"oklch(0.55 0.16 250)":r?"oklch(0.6 0.15 75)":"oklch(0.55 0.16 165)";return(0,s.jsxs)(n.P.g,{children:[(0,s.jsx)(n.P.circle,{cx:t.x,cy:t.y,r:"6",fill:a,animate:{scale:0===e?.7:1}}),1===e&&(0,s.jsx)(n.P.circle,{cx:t.x,cy:t.y,r:"14",fill:"none",stroke:"oklch(0.6 0.20 25 / 0.6)",strokeWidth:"2",strokeDasharray:"3 2",initial:{opacity:0},animate:{opacity:1}}),2===e&&(0,s.jsx)(n.P.circle,{cx:t.x,cy:t.y,r:"9",fill:a,opacity:"0.7",initial:{opacity:0},animate:{opacity:.7}}),e>=3&&(0,s.jsx)(n.P.line,{x1:t.x,y1:t.y,x2:t.x+25*t.vx,y2:t.y+25*t.vy,stroke:a,strokeWidth:"2",markerEnd:"url(#arrow-rv)",initial:{pathLength:0},animate:{pathLength:e>=4?1:.5}})]},t.id)}),(0,s.jsx)("defs",{children:(0,s.jsx)("marker",{id:"arrow-rv",markerWidth:"6",markerHeight:"6",refX:"3",refY:"3",orient:"auto",children:(0,s.jsx)("path",{d:"M0,0 L6,3 L0,6 z",fill:"var(--primary)"})})}),(0,s.jsx)("text",{x:"170",y:"20",textAnchor:"middle",fontSize:"10",fill:"var(--muted-foreground)",children:["1. Cells on UMAP","2. Unspliced mRNA (intronic)","3. Spliced mRNA (exonic)","4. Velocity = spliced/unspliced","5. Trajectory arrows","6. Cell-state transition"][e]}),e>=5&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("text",{x:"80",y:"60",textAnchor:"middle",fontSize:"9",fill:"oklch(0.55 0.16 250)",fontWeight:"bold",children:"Progenitor"}),(0,s.jsx)("text",{x:"200",y:"115",textAnchor:"middle",fontSize:"9",fill:"oklch(0.6 0.15 75)",fontWeight:"bold",children:"Transitional"}),(0,s.jsx)("text",{x:"260",y:"190",textAnchor:"middle",fontSize:"9",fill:"oklch(0.55 0.16 165)",fontWeight:"bold",children:"Differentiated A"}),(0,s.jsx)("text",{x:"160",y:"240",textAnchor:"middle",fontSize:"9",fill:"oklch(0.55 0.16 165)",fontWeight:"bold",children:"Differentiated B"})]})]})})}),(0,s.jsxs)("div",{className:"grid grid-cols-2 gap-2 mt-3 text-[10px]",children:[(0,s.jsxs)("div",{className:"rounded-md border border-border/60 p-2",children:[(0,s.jsx)("p",{className:"font-semibold mb-0.5",children:"Kinetic ODE"}),(0,s.jsx)("p",{className:"text-muted-foreground",children:"du/dt = α - β\xb7u \xa0\xb7\xa0 ds/dt = β\xb7u - γ\xb7s"})]}),(0,s.jsxs)("div",{className:"rounded-md border border-border/60 p-2",children:[(0,s.jsx)("p",{className:"font-semibold mb-0.5",children:"Velocity estimate"}),(0,s.jsx)("p",{className:"text-muted-foreground",children:"v ≈ ds/dt = β\xb7u - γ\xb7s"})]})]}),(0,s.jsx)("p",{className:"text-[10px] text-muted-foreground text-center mt-3",children:"Phase 1: cells on UMAP. Phase 2: unspliced (intronic) mRNA counts. Phase 3: spliced (exonic) mRNA. Phase 4: velocity = (spliced - γ\xb7unspliced) ratio. Phase 5: arrows on embedding. Phase 6: trajectory branches."})]})}let M=`# scVI VAE + WNN integration + RNA velocity + Harmony (Pyodide)
# The math behind single-cell multi-omics

import math, random
from collections import defaultdict

# ============================================================
# 1. 10x Genomics GEM barcoding — Poisson statistics
# ============================================================
# Cells loaded at low concentration so Poisson(λ=0.1) cells per droplet
# Most droplets are empty (~90%), ~10% have one cell, ~1% have doublets

def simulate_gems(n_droplets, cell_concentration=0.1):
    """Simulate 10x GEM (Gel bead-in-EMulsion) cell loading.
    
    Poisson(λ) cells per droplet. Most are empty, ~1% are doublets.
    """
    droplets = []
    for _ in range(n_droplets):
        # Poisson sampling
        n_cells = 0
        u = random.random()
        # Poisson inverse transform
        cdf = math.exp(-cell_concentration)
        prob = cdf
        k = 0
        while u > cdf:
            k += 1
            prob *= cell_concentration / k
            cdf += prob
        n_cells = k
        droplets.append(n_cells)
    return droplets

print("=" * 60)
print("10x Genomics GEM Barcoding — Poisson Statistics")
print("=" * 60)

random.seed(42)
droplets = simulate_gems(10000, cell_concentration=0.1)
empty = sum(1 for d in droplets if d == 0)
single = sum(1 for d in droplets if d == 1)
doublet = sum(1 for d in droplets if d == 2)
multiplet = sum(1 for d in droplets if d > 2)
print(f"\\nSimulated 10K droplets, λ=0.1 cells/droplet:")
print(f"  Empty droplets:     {empty:5d}  ({empty/100:.1f}%)")
print(f"  Single-cell droplets: {single:5d}  ({single/100:.1f}%)")
print(f"  Doublet droplets:    {doublet:5d}  ({doublet/100:.2f}%)")
print(f"  Multiplet droplets:  {multiplet:5d}  ({multiplet/100:.3f}%)")
print(f"\\n  → ~90% empty (wasted reagents)")
print(f"  → ~9% single-cell (useful)")
print(f"  → ~1% doublets (must filter via DoubletFinder/Scrublet)")
print(f"  → 10x Chromium targets λ=0.1 to balance cost vs doublet rate")

# ============================================================
# 2. UMI (Unique Molecular Identifier) — PCR duplicate removal
# ============================================================
print(f"\\n{'=' * 60}")
print("UMI — Unique Molecular Identifier Collisions")
print("=" * 60)
print("""
UMI: 10-12 bp random sequence appended to each cDNA before PCR.
After PCR + sequencing, identical (cell_barcode, gene, UMI) = 1 original molecule.

UMI collision: two different original molecules happen to get same UMI.
Probability per (cell, gene) pair with k UMIs:
  P(collision) ≈ 1 - (1 - 1/k^L)^n  where L=UMI length, n=count

For L=10 (10bp UMI), k=4, n=10 reads per (cell, gene):
  P(collision) ≈ 1 - (1 - 1/4^10)^10 ≈ 1e-5  → negligible

UMI deduplication: count distinct UMIs per (cell, gene) → gene count matrix
""")

# Simulate UMI counting
random.seed(42)
def simulate_umi_counting(true_count=5, umi_length=10):
    """Simulate UMI counting for one (cell, gene) pair."""
    umis = set()
    for _ in range(true_count * 3):  # PCR amplification ~3x
        umi = ''.join(random.choices('ACGT', k=umi_length))
        umis.add(umi)
    return len(umis)  # observed count

print("Simulated UMI counting (true count = 5, 3x PCR amp):")
for _ in range(5):
    observed = simulate_umi_counting()
    print(f"  True: 5  →  Observed (UMI-deduplicated): {observed}")

# ============================================================
# 3. scVI — VAE with zero-inflated negative binomial (ZINB)
# ============================================================
print(f"\\n{'=' * 60}")
print("scVI — VAE for scRNA-seq with ZINB likelihood")
print("=" * 60)
print("""
scVI (Lopez 2018) architecture:
  Encoder: gene counts → (μ_z, σ_z) → latent z (30-dim)
           Conditional on batch (one-hot) for batch correction
  Decoder: z → (μ, π) → ZINB(μ, π) likelihood

ZINB likelihood:
  P(x | μ, θ, π) = π \xb7 δ(x=0) + (1-π) \xb7 NB(x | μ, θ)
  where:
    μ  = mean (positive, exp of decoder output)
    θ  = dispersion (per-gene)
    π  = dropout probability (per-cell, per-gene)

Loss: -log p(x | z) + KL(q(z | x) || N(0, I))

Production:
  - scVI: counts → latent z → cell type, batch correction
  - scANVI: semi-supervised extension for cell type annotation
  - totalVI: multi-modal (RNA + protein via CITE-seq)
""")

# ============================================================
# 4. WNN — Weighted Nearest Neighbours (Seurat v4)
# ============================================================
print(f"{'=' * 60}")
print("WNN — Weighted Nearest Neighbours Integration")
print("=" * 60)
print("""
WNN (Hao 2021, Seurat v4) for paired multi-modal data (RNA + ATAC on same cell):

For each cell i:
  1. Find k-NN in RNA space: {j_1, j_2, ..., j_k}
  2. Find k-NN in ATAC space: {l_1, l_2, ..., l_k}
  3. Compute cell-specific modality weights:
       w_RNA(i) = exp(-d_RNA(i) / σ_RNA)  (degradation if RNA neighbours are bad)
       w_ATAC(i) = exp(-d_ATAC(i) / σ_ATAC)
       w_RNA(i), w_ATAC(i) = softmax(w_RNA(i), w_ATAC(i))
  4. Combined k-NN: top-k cells ranked by w_RNA(i)\xb7sim_RNA(i,j) + w_ATAC(i)\xb7sim_ATAC(i,l)

Output: cell \xd7 cell WNN graph → clustering → cell types
""")

# Simulate WNN
random.seed(42)
n_cells = 5
# Each cell has RNA embedding (10-dim) and ATAC embedding (10-dim)
rna_emb = [[random.gauss(0, 1) for _ in range(10)] for _ in range(n_cells)]
atac_emb = [[random.gauss(0, 1) for _ in range(10)] for _ in range(n_cells)]

def cosine_sim(a, b):
    dot = sum(x*y for x, y in zip(a, b))
    na = math.sqrt(sum(x*x for x in a))
    nb = math.sqrt(sum(y*y for y in b))
    return dot / (na * nb) if na > 0 and nb > 0 else 0

# Compute WNN
print(f"\\nWNN matrix (cell-cell similarity, combined RNA + ATAC):")
print(f"  {'Cell':>6s}", end='')
for j in range(n_cells):
    print(f"  C{j}", end='')
print()
for i in range(n_cells):
    print(f"  C{i}", end='')
    for j in range(n_cells):
        sim_rna = cosine_sim(rna_emb[i], rna_emb[j])
        sim_atac = cosine_sim(atac_emb[i], atac_emb[j])
        # Equal weights (production: learned per-cell)
        wnn = 0.5 * sim_rna + 0.5 * sim_atac
        print(f"  {wnn:+.2f}", end='')
    print()
print(f"\\n  → Cells with high WNN sim = same cell type (despite batch effects)")

# ============================================================
# 5. RNA velocity — kinetic ODE
# ============================================================
print(f"\\n{'=' * 60}")
print("RNA Velocity — Spliced/Unspliced Kinetic ODE")
print("=" * 60)
print("""
La Manno 2018, Bergen 2020 (scVelo):

For each gene in each cell:
  u = unspliced mRNA (intronic reads)
  s = spliced mRNA (exonic reads)
  
  ODE: du/dt = α - β\xb7u          (transcription - splicing)
      ds/dt = β\xb7u - γ\xb7s          (splicing - degradation)
  
  Steady state (du/dt = ds/dt = 0):
    u* = α/β, s* = α/γ
    → Linear regression: u = (γ/β) \xb7 s + offset
  
  Velocity: v = ds/dt = β\xb7u - γ\xb7s
    v > 0: cell is being upregulated (differentiation direction)
    v < 0: cell is being downregulated
    v = 0: at steady state (mature cell type)
""")

# Simulate RNA velocity
random.seed(42)
n_cells_v = 10
# Two genes: GATA1 (differentiation), CD34 (progenitor)
# Spliced and unspliced counts per cell
cells_v = []
for i in range(n_cells_v):
    # Linear trajectory: high CD34 unspliced → high GATA1 spliced
    t = i / n_cells_v  # pseudotime 0 (progenitor) → 1 (differentiated)
    u_gata1 = 5 * (1 - t) + 0.5 * t  # GATA1 unspliced decreases
    s_gata1 = 0.5 * (1 - t) + 8 * t  # GATA1 spliced increases
    u_cd34 = 8 * (1 - t) + 1 * t    # CD34 unspliced decreases
    s_cd34 = 10 * (1 - t) + 2 * t   # CD34 spliced decreases
    cells_v.append({
        'id': i,
        'GATA1_u': u_gata1, 'GATA1_s': s_gata1,
        'CD34_u': u_cd34, 'CD34_s': s_cd34,
    })

# Compute velocities (assume γ=1, β=1 for demo)
print(f"\\nVelocity per cell (γ=1, β=1, simplified):")
print(f"  {'Cell':>4s} {'GATA1_u':>8s} {'GATA1_s':>8s} {'GATA1_v':>8s} {'CD34_u':>8s} {'CD34_s':>8s} {'CD34_v':>8s}")
for c in cells_v:
    # v = β\xb7u - γ\xb7s (simplified, production: γ/β via regression)
    v_gata1 = 1.0 * c['GATA1_u'] - 1.0 * c['GATA1_s']
    v_cd34 = 1.0 * c['CD34_u'] - 1.0 * c['CD34_s']
    print(f"  C{c['id']:>3d} {c['GATA1_u']:>8.2f} {c['GATA1_s']:>8.2f} {v_gata1:>+8.2f} {c['CD34_u']:>8.2f} {c['CD34_s']:>8.2f} {v_cd34:>+8.2f}")
print(f"\\n  → Cell 0 (progenitor): high CD34 (up), low GATA1")
print(f"  → Cell 9 (differentiated): low CD34, high GATA1")
print(f"  → Velocity arrows on UMAP show direction of differentiation")
print("=" * 60)`,R=`import torch
import torch.nn as nn
import torch.nn.functional as F
import math
from typing import List, Tuple, Optional, Dict

# ============================================================
# 1. scVI — VAE for scRNA-seq with ZINB likelihood
# ============================================================

class ZINBLoss(nn.Module):
    """Zero-Inflated Negative Binomial loss.
    
    P(x | μ, θ, π) = π \xb7 δ(x=0) + (1-π) \xb7 NB(x | μ, θ)
    
    where NB(x | μ, θ) = Γ(x+θ) / (Γ(θ) \xb7 x!) \xb7 (θ/(θ+μ))^θ \xb7 (μ/(θ+μ))^x
    
    Production: scVI library (Lopez 2018).
    """
    def __init__(self):
        super().__init__()
    
    def forward(self, x: torch.Tensor, mu: torch.Tensor,
                theta: torch.Tensor, pi: torch.Tensor) -> torch.Tensor:
        """Compute ZINB negative log-likelihood.
        
        Args:
            x: (B, G) observed counts
            mu: (B, G) mean (positive, exp of decoder output)
            theta: (G,) dispersion (positive)
            pi: (B, G) dropout probability (0-1)
        """
        eps = 1e-8
        # Negative binomial log-likelihood
        log_theta_mu = torch.log(theta + mu + eps)
        # Γ terms approximated via lgamma
        log_nb = (
            torch.lgamma(x + theta) - torch.lgamma(theta) - torch.lgamma(x + 1)
            + theta * (torch.log(theta + eps) - log_theta_mu)
            + x * (torch.log(mu + eps) - log_theta_mu)
        )
        # Zero-inflation mixture
        log_pi_zero = torch.log(pi + eps)  # log P(x=0 | dropout)
        log_one_minus_pi = torch.log(1 - pi + eps)
        # Mixture: P(x | ...) = π \xb7 δ(x=0) + (1-π) \xb7 NB
        log_prob = torch.where(
            x == 0,
            torch.logsumexp(torch.stack([log_pi_zero, log_one_minus_pi + log_nb], dim=-1), dim=-1),
            log_one_minus_pi + log_nb,
        )
        return -log_prob.sum(dim=-1).mean()

class scVI(nn.Module):
    """scVI (Lopez 2018) — Variational Autoencoder for scRNA-seq.
    
    Architecture:
        Encoder: counts (B, G) + batch (B, B_dim) → (μ_z, σ_z) → latent z (B, latent_dim)
        Decoder: z + batch → (μ, π) → ZINB likelihood
    
    Latent z captures cell-type identity, batch-corrected via conditional encoder.
    """
    def __init__(self, n_genes: int = 20000, latent_dim: int = 30,
                 hidden_dim: int = 256, n_batch: int = 10):
        super().__init__()
        self.n_genes = n_genes
        self.latent_dim = latent_dim
        
        # Encoder: (counts, batch_onehot) → (μ_z, log_var_z)
        encoder_input_dim = n_genes + n_batch
        self.encoder = nn.Sequential(
            nn.Linear(encoder_input_dim, hidden_dim),
            nn.LayerNorm(hidden_dim),
            nn.ReLU(),
            nn.Dropout(0.1),
            nn.Linear(hidden_dim, hidden_dim),
            nn.LayerNorm(hidden_dim),
            nn.ReLU(),
        )
        self.fc_mu = nn.Linear(hidden_dim, latent_dim)
        self.fc_logvar = nn.Linear(hidden_dim, latent_dim)
        
        # Decoder: (z, batch_onehot) → (μ, log_θ, π)
        decoder_input_dim = latent_dim + n_batch
        self.decoder = nn.Sequential(
            nn.Linear(decoder_input_dim, hidden_dim),
            nn.LayerNorm(hidden_dim),
            nn.ReLU(),
            nn.Dropout(0.1),
            nn.Linear(hidden_dim, n_genes),
        )
        # Per-gene dispersion (learnable)
        self.theta = nn.Parameter(torch.randn(n_genes))
        # Dropout (per-cell, per-gene)
        self.dropout = nn.Linear(decoder_input_dim, n_genes)
    
    def encode(self, x: torch.Tensor, batch: torch.Tensor) -> Tuple[torch.Tensor, torch.Tensor]:
        """Encode (counts, batch) → (μ, log_var)."""
        h = torch.cat([x, batch], dim=-1)
        h = self.encoder(h)
        return self.fc_mu(h), self.fc_logvar(h)
    
    def reparameterize(self, mu: torch.Tensor, logvar: torch.Tensor) -> torch.Tensor:
        """Reparameterisation trick: z = mu + std * eps."""
        std = torch.exp(0.5 * logvar)
        eps = torch.randn_like(std)
        return mu + eps * std
    
    def decode(self, z: torch.Tensor, batch: torch.Tensor) -> Dict[str, torch.Tensor]:
        """Decode (z, batch) → (μ, θ, π) for ZINB likelihood."""
        h = torch.cat([z, batch], dim=-1)
        # Mean (positive)
        mu = torch.exp(self.decoder(h))  # (B, G)
        # Dispersion (per-gene, positive)
        theta = torch.exp(self.theta)  # (G,)
        # Dropout (per-cell, per-gene)
        pi = torch.sigmoid(self.dropout(h))  # (B, G)
        return {'mu': mu, 'theta': theta, 'pi': pi}
    
    def forward(self, x: torch.Tensor, batch: torch.Tensor) -> Dict[str, torch.Tensor]:
        """Forward pass.
        
        Args:
            x: (B, G) gene count matrix (sparse-encoded as dense for simplicity)
            batch: (B, n_batch) one-hot batch IDs
        
        Returns: dict with 'latent', 'mu', 'theta', 'pi', 'kl'
        """
        mu_z, logvar_z = self.encode(x, batch)
        z = self.reparameterize(mu_z, logvar_z)
        out = self.decode(z, batch)
        out['latent'] = z
        out['mu_z'] = mu_z
        out['logvar_z'] = logvar_z
        # KL divergence: 0.5 * Σ (1 + logvar - mu\xb2 - exp(logvar))
        out['kl'] = -0.5 * torch.sum(1 + logvar_z - mu_z.pow(2) - logvar_z.exp(), dim=-1)
        return out
    
    def loss(self, x: torch.Tensor, batch: torch.Tensor) -> torch.Tensor:
        """scVI loss: ZINB reconstruction + KL."""
        out = self.forward(x, batch)
        # Reconstruction (ZINB)
        zinb = ZINBLoss()
        recon_loss = zinb(x, out['mu'], out['theta'], out['pi'])
        # KL
        kl_loss = out['kl'].mean()
        return recon_loss + 1e-4 * kl_loss

# ============================================================
# 2. WNN — Weighted Nearest Neighbours integration
# ============================================================

class WNN(nn.Module):
    """WNN (Hao 2021, Seurat v4) — Weighted Nearest Neighbours integration.
    
    For paired multi-modal data (e.g. 10x Multiome: RNA + ATAC on same cell):
        1. Embed RNA via scVI (this class wraps)
        2. Embed ATAC via LSI (TF-IDF + SVD)
        3. For each cell: find k-NN in each modality
        4. Compute per-cell modality weights (softmax over k-NN quality)
        5. Combined k-NN graph: rank by w_RNA \xb7 sim_RNA + w_ATAC \xb7 sim_ATAC
    
    Output: cell \xd7 cell WNN graph for clustering / UMAP.
    """
    def __init__(self, rna_dim: int, atac_dim: int, k: int = 30):
        super().__init__()
        self.k = k
        # Modality embeddings (pre-computed by scVI / LSI)
        # Here: learned projectors for demo
        self.rna_proj = nn.Linear(rna_dim, 30)
        self.atac_proj = nn.Linear(atac_dim, 30)
        # Per-cell modality weights (softmax over 2 modalities)
        self.weight_scorer = nn.Sequential(
            nn.Linear(30 * 2, 16),
            nn.ReLU(),
            nn.Linear(16, 2),  # (w_RNA, w_ATAC)
        )
    
    def forward(self, rna_emb: torch.Tensor, atac_emb: torch.Tensor) -> Dict[str, torch.Tensor]:
        """Compute WNN graph.
        
        Args:
            rna_emb: (N, rna_dim) RNA embeddings
            atac_emb: (N, atac_dim) ATAC embeddings
        
        Returns: dict with 'wnn_graph' (N, N), 'modality_weights' (N, 2)
        """
        # Project to common space
        rna_proj = self.rna_proj(rna_emb)  # (N, 30)
        atac_proj = self.atac_proj(atac_emb)  # (N, 30)
        
        # Normalise for cosine similarity
        rna_proj = F.normalize(rna_proj, dim=-1)
        atac_proj = F.normalize(atac_proj, dim=-1)
        
        # Per-cell modality weights
        combined = torch.cat([rna_proj, atac_proj], dim=-1)  # (N, 60)
        modality_weights = F.softmax(self.weight_scorer(combined), dim=-1)  # (N, 2)
        
        # Compute similarities (N, N)
        sim_rna = rna_proj @ rna_proj.T  # cosine similarity
        sim_atac = atac_proj @ atac_proj.T
        
        # WNN: weighted combination per cell
        # w_cell = (w_RNA, w_ATAC) per cell — broadcast to (N, 1, 2)
        w = modality_weights.unsqueeze(1)  # (N, 1, 2)
        # sim: (N, N, 2) where dim=-1 is (RNA, ATAC)
        sim_stack = torch.stack([sim_rna, sim_atac], dim=-1)  # (N, N, 2)
        wnn = (w * sim_stack).sum(dim=-1)  # (N, N)
        
        return {'wnn_graph': wnn, 'modality_weights': modality_weights}

# ============================================================
# 3. RNA velocity — kinetic ODE solver
# ============================================================

class RNAVelocitySolver:
    """RNA velocity (La Manno 2018, Bergen 2020 scVelo).
    
    For each gene per cell:
        u = unspliced mRNA (intronic reads)
        s = spliced mRNA (exonic reads)
        
    Kinetic ODE:
        du/dt = α - β\xb7u
        ds/dt = β\xb7u - γ\xb7s
        
    Velocity:
        v = ds/dt = β\xb7u - γ\xb7s  (cell-state transition rate)
    
    Production: scVelo (Bergen 2020) uses EM for kinetic parameter estimation.
    """
    @staticmethod
    def estimate_gamma(unspliced: torch.Tensor, spliced: torch.Tensor) -> torch.Tensor:
        """Estimate γ per gene via linear regression on steady-state cells.
        
        At steady state: u = (γ/β) \xb7 s
        → Linear regression: u = slope \xb7 s + offset
        → slope ≈ γ/β (assuming β=1)
        
        Args:
            unspliced: (N_cells, N_genes) intronic counts
            spliced: (N_cells, N_genes) exonic counts
        
        Returns: gamma (N_genes,)
        """
        # Per-gene linear regression via least squares
        # u = γ \xb7 s + offset
        n_cells, n_genes = unspliced.shape
        
        # Center: subtract means
        u_mean = unspliced.mean(dim=0)  # (N_genes,)
        s_mean = spliced.mean(dim=0)
        u_centered = unspliced - u_mean
        s_centered = spliced - s_mean
        
        # γ = (s \xb7 u) / (s \xb7 s) per gene
        numerator = (s_centered * u_centered).sum(dim=0)  # (N_genes,)
        denominator = (s_centered ** 2).sum(dim=0) + 1e-8
        gamma = numerator / denominator  # (N_genes,)
        return torch.clamp(gamma, min=0.01, max=10.0)
    
    @staticmethod
    def compute_velocity(unspliced: torch.Tensor, spliced: torch.Tensor,
                         gamma: torch.Tensor = None, beta: float = 1.0) -> torch.Tensor:
        """Compute per-cell velocity.
        
        v = β \xb7 u - γ \xb7 s  (per gene, per cell)
        
        Args:
            unspliced: (N_cells, N_genes)
            spliced: (N_cells, N_genes)
            gamma: (N_genes,) — if None, estimate from data
            beta: scalar splicing rate
        
        Returns: (N_cells, N_genes) velocity per gene per cell
        """
        if gamma is None:
            gamma = RNAVelocitySolver.estimate_gamma(unspliced, spliced)
        # v = β \xb7 u - γ \xb7 s
        v = beta * unspliced - gamma.unsqueeze(0) * spliced
        return v
    
    @staticmethod
    def project_velocity_to_embedding(velocity: torch.Tensor, embedding: torch.Tensor,
                                       neighbour_graph: torch.Tensor) -> torch.Tensor:
        """Project gene-space velocity to embedding space (UMAP / PCA).
        
        For each cell, average velocity of k nearest neighbours.
        
        Args:
            velocity: (N_cells, N_genes) per-gene velocity
            embedding: (N_cells, 2) 2D embedding (UMAP)
            neighbour_graph: (N_cells, k) indices of k-NN
        
        Returns: (N_cells, 2) velocity arrows in embedding space
        """
        N, k = neighbour_graph.shape
        # For each cell, compute transition probability to each neighbour
        # (based on cosine similarity of velocity vectors)
        # Then sum: weighted displacement in embedding space
        arrows = torch.zeros(N, 2)
        for i in range(N):
            nbrs = neighbour_graph[i]  # (k,)
            # Velocity of cell i in gene space
            v_i = velocity[i]  # (N_genes,)
            # Cosine sim of v_i with delta_embedding to each neighbour
            delta_emb = embedding[nbrs] - embedding[i]  # (k, 2)
            # Project v_i onto delta_emb (simplified: just use cosine sim of velocity)
            # Production: project via kernel matrix (scVelo uses Gaussian kernel)
            weights = F.cosine_similarity(v_i.unsqueeze(0).expand(k, -1),
                                            delta_emb, dim=-1)  # (k,)
            weights = F.softmax(weights, dim=0)  # normalise
            # Weighted sum of deltas
            arrows[i] = (weights.unsqueeze(-1) * delta_emb).sum(dim=0)
        return arrows

# ============================================================
# 4. Harmony — fast batch correction
# ============================================================

class Harmony(nn.Module):
    """Harmony (Korsunsky 2019) — fast batch correction.
    
    Algorithm:
        1. PCA on combined data (all batches)
        2. Initialise k cluster centres
        3. For each iteration:
           a. Soft cluster assignment per cell (responsibilities)
           b. For each cell: subtract batch-specific mean
           c. Re-assign clusters
    
    Converges in &lt;10 iterations, ~1000\xd7 faster than scVI's full VAE training.
    """
    def __init__(self, n_clusters: int = 20, max_iter: int = 10):
        super().__init__()
        self.n_clusters = n_clusters
        self.max_iter = max_iter
        # Cluster centres (learned)
        self.cluster_centres = nn.Parameter(torch.randn(n_clusters, 30))
        # Batch correction: per-batch means
        # (computed at runtime, not stored)
    
    def forward(self, embeddings: torch.Tensor, batch_ids: torch.Tensor) -> torch.Tensor:
        """Harmony batch correction.
        
        Args:
            embeddings: (N, 30) PCA-reduced cell embeddings
            batch_ids: (N,) integer batch IDs
        
        Returns: (N, 30) batch-corrected embeddings
        """
        corrected = embeddings.clone()
        for _ in range(self.max_iter):
            # Soft cluster assignment: cosine sim to centres
            sim = F.cosine_similarity(
                corrected.unsqueeze(1),  # (N, 1, 30)
                self.cluster_centres.unsqueeze(0),  # (1, K, 30)
                dim=-1
            )  # (N, K)
            responsibilities = F.softmax(sim * 10, dim=-1)  # (N, K) — temperature 10
            
            # For each cell, compute batch-specific mean
            for batch_id in torch.unique(batch_ids):
                mask = (batch_ids == batch_id)
                # Weighted mean of cluster centres for this batch
                weighted_centres = responsibilities[mask] @ self.cluster_centres  # (n_batch_cells, 30)
                batch_mean = weighted_centres.mean(dim=0)  # (30,)
                # Subtract batch mean (correction)
                corrected[mask] = embeddings[mask] - batch_mean + self.cluster_centres.mean(dim=0)
        
        return corrected

# Sanity check
if __name__ == "__main__":
    # scVI
    scvi = scVI(n_genes=100, latent_dim=10, hidden_dim=64, n_batch=3)
    n_params = sum(p.numel() for p in scvi.parameters())
    print(f"scVI: {n_params:,} params")
    
    x = torch.randint(0, 50, (16, 100)).float()  # 16 cells \xd7 100 genes
    batch = F.one_hot(torch.randint(0, 3, (16,)), 3).float()
    out = scvi(x, batch)
    print(f"  Latent: {tuple(out['latent'].shape)}, mu: {tuple(out['mu'].shape)}")
    loss = scvi.loss(x, batch)
    print(f"  Loss: {loss.item():.3f}")
    
    # WNN
    wnn = WNN(rna_dim=100, atac_dim=50, k=10)
    rna_emb = torch.randn(20, 100)
    atac_emb = torch.randn(20, 50)
    out_wnn = wnn(rna_emb, atac_emb)
    print(f"\\nWNN: graph {tuple(out_wnn['wnn_graph'].shape)}, weights {tuple(out_wnn['modality_weights'].shape)}")
    
    # RNA velocity
    n_cells, n_genes = 50, 100
    unspliced = torch.rand(n_cells, n_genes) * 10
    spliced = torch.rand(n_cells, n_genes) * 20
    gamma = RNAVelocitySolver.estimate_gamma(unspliced, spliced)
    velocity = RNAVelocitySolver.compute_velocity(unspliced, spliced, gamma)
    print(f"\\nRNA velocity: gamma {tuple(gamma.shape)}, velocity {tuple(velocity.shape)}")
    print(f"  Mean velocity per gene (first 5): {velocity.mean(dim=0)[:5].tolist()}")
    
    # Project to embedding
    embedding = torch.randn(n_cells, 2)
    neighbour_graph = torch.randint(0, n_cells, (n_cells, 10))
    arrows = RNAVelocitySolver.project_velocity_to_embedding(velocity, embedding, neighbour_graph)
    print(f"  Velocity arrows in embedding: {tuple(arrows.shape)}")
    
    # Harmony
    harmony = Harmony(n_clusters=10, max_iter=5)
    embeddings = torch.randn(50, 30)
    batch_ids = torch.randint(0, 3, (50,))
    corrected = harmony(embeddings, batch_ids)
    print(f"\\nHarmony: corrected embeddings {tuple(corrected.shape)}")`;function P(){return(0,s.jsxs)("div",{className:"space-y-8",children:[(0,s.jsx)(l.zY,{eyebrow:"Single-cell Multi-omics \xb7 scVI \xb7 WNN \xb7 RNA velocity \xb7 Harmony",title:"Single-cell Multi-omics — Million-cell Scale with scVI + WNN",description:"The math behind single-cell multi-omics: 10x Genomics droplet barcoding (Poisson λ=0.1 cells/droplet, 1% doublet rate, UMI deduplication), scVI VAE with zero-inflated negative binomial (ZINB) likelihood for batch-corrected cell embeddings, WNN (Weighted Nearest Neighbours, Hao 2021 Seurat v4) for paired RNA + ATAC integration with per-cell modality weights, RNA velocity (La Manno 2018, Bergen 2020 scVelo) solving the kinetic ODE du/dt = α - β\xb7u, ds/dt = β\xb7u - γ\xb7s, and Harmony (Korsunsky 2019) for fast batch correction. With 4 AI illustrations + a looping RNA velocity 'short'. Low-level PyTorch: scVI VAE, WNN integration, RNAVelocitySolver, Harmony.",right:(0,s.jsxs)("div",{className:"flex gap-2",children:[(0,s.jsxs)(x.E,{variant:"outline",className:"gap-1.5",children:[(0,s.jsx)(b.A,{className:"h-3 w-3"})," scVI + WNN + scVelo"]}),(0,s.jsxs)(x.E,{variant:"outline",className:"gap-1.5",children:[(0,s.jsx)(N.A,{className:"h-3 w-3"})," Pyodide"]})]})}),(0,s.jsx)("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-3",children:T.map(e=>(0,s.jsx)(l.nO,{label:e.label,value:e.value,hint:e.hint,deltaTone:e.deltaTone},e.label))}),(0,s.jsx)(l.iv,{title:"AI-generated single-cell illustrations — click to expand",description:"Four original 3D-rendered illustrations via AI image generation. Click any thumbnail for inline modal; 'Open in new tab' opens the high-resolution PNG in a new browser tab.",icon:(0,s.jsx)(v.A,{className:"h-5 w-5"}),badge:"AI gallery",children:(0,s.jsxs)("div",{className:"grid md:grid-cols-2 gap-4",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)(u.j,{src:"/images/singlecell/umap-clusters.png",alt:"UMAP clustering of single cells",caption:"UMAP clustering of single cells — scattered points colour-coded by cell type (T cells blue, B cells green, monocytes amber, NK cells violet). 1M cells \xd7 20K genes → 30-dim latent → 2D UMAP embedding for visualisation. Cluster assignment via Louvain community detection on WNN graph. Rendered via AI image generation."}),(0,s.jsx)("p",{className:"text-[11px] text-muted-foreground mt-2 text-center",children:"UMAP clusters — 1M cells, 2D embedding"})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)(u.j,{src:"/images/singlecell/gem-droplet.png",alt:"10x GEM droplet",caption:"10x Genomics Gel bead-in-EMulsion (GEM) droplet — microfluidic device encapsulates one cell (with intact nucleus, blue) and one barcoded bead (multi-colour) per droplet. The bead's barcode + UMI + poly-T captures the cell's mRNA. ~10K-100K droplets per Chromium run, 1% doublet rate. Poisson(λ=0.1) cell loading. Rendered via AI image generation."}),(0,s.jsx)("p",{className:"text-[11px] text-muted-foreground mt-2 text-center",children:"10x GEM droplet — cell + barcoded bead"})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)(u.j,{src:"/images/singlecell/rna-velocity.png",alt:"RNA velocity arrows on embedding",caption:"RNA velocity arrows — black arrows on UMAP embedding showing direction of cell-state transition. Spliced/unspliced mRNA ratio (La Manno 2018) computes per-cell velocity; arrows are projected to embedding space via k-NN graph. Reveals differentiation trajectories (progenitor → transitional → differentiated). scVelo (Bergen 2020) refines kinetic parameters. Rendered via AI image generation."}),(0,s.jsx)("p",{className:"text-[11px] text-muted-foreground mt-2 text-center",children:"RNA velocity — kinetic arrows on UMAP"})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)(u.j,{src:"/images/singlecell/multimodal-integration.png",alt:"Multi-modal RNA + ATAC integration",caption:"Multi-modal integration — two UMAP plots side by side (RNA on left, ATAC on right) connected by arrows showing the same cells in both modalities. WNN (Weighted Nearest Neighbours, Hao 2021 Seurat v4) integrates by computing per-cell modality weights, then ranking cells by weighted combination. 10x Multiome measures RNA + ATAC on the same cell. Rendered via AI image generation."}),(0,s.jsx)("p",{className:"text-[11px] text-muted-foreground mt-2 text-center",children:"Multi-modal integration — RNA + ATAC via WNN"})]})]})}),(0,s.jsx)(l.iv,{title:"RNA velocity short — kinetic arrows on UMAP (loop)",description:"Continuous-loop animation showing RNA velocity: phase 1 positions cells on a UMAP embedding, phase 2 reveals unspliced (intronic) mRNA halo around each cell, phase 3 shows spliced (exonic) mRNA inner core, phase 4 computes velocity v = ds/dt = β\xb7u - γ\xb7s, phase 5 draws trajectory arrows on embedding, phase 6 reveals cell-state branches (progenitor → transitional → differentiated).",icon:(0,s.jsx)(b.A,{className:"h-5 w-5"}),badge:"short",children:(0,s.jsx)(I,{})}),(0,s.jsx)(l.iv,{title:"10x GEM + UMI math — Poisson barcoding with error correction",description:"10x Genomics loads cells at Poisson(λ=0.1) per droplet — 90% empty (wasted), 9% single-cell (useful), 1% doublets (filtered). UMIs (10-12bp random sequences) are appended to each cDNA before PCR, allowing deduplication of PCR duplicates. UMI collision (two originals sharing same UMI) is ~10⁻⁵ per (cell, gene) — negligible.",icon:(0,s.jsx)(_.A,{className:"h-5 w-5"}),badge:"mathematics",children:(0,s.jsxs)("div",{className:"space-y-3",children:[(0,s.jsxs)("div",{className:"rounded-md border border-primary/30 bg-primary/5 p-3 text-center",children:[(0,s.jsxs)("p",{className:"font-mono text-xs text-primary",children:["P(k cells/droplet) = e",(0,s.jsx)("sup",{children:"-λ"}),"\xb7λ",(0,s.jsx)("sup",{children:"k"}),"/k! \xa0\xb7\xa0 P(doublet) ≈ λ\xb2/2"]}),(0,s.jsx)("p",{className:"text-[11px] text-muted-foreground mt-1",children:"λ=0.1 cells/droplet. P(doublet) = 0.005 (0.5%). UMI length 10bp \xd7 4 bases = 4\xb9⁰ ≈ 10⁶ codes per (cell, gene)."})]}),(0,s.jsxs)("div",{className:"grid md:grid-cols-3 gap-2 text-xs",children:[(0,s.jsxs)("div",{className:"rounded-md border border-emerald-500/40 bg-emerald-500/5 p-2.5",children:[(0,s.jsx)("p",{className:"font-semibold text-sm text-emerald-600 dark:text-emerald-400 mb-1",children:"Poisson loading"}),(0,s.jsx)("p",{className:"font-mono text-[11px]",children:"λ = 0.1 cells/droplet"}),(0,s.jsx)("p",{className:"text-muted-foreground text-[11px] mt-1",children:"10x Chromium: 90% empty droplets (wasted), 9% single-cell, 1% doublets. Optimal balance — cost vs quality."})]}),(0,s.jsxs)("div",{className:"rounded-md border border-amber-500/40 bg-amber-500/5 p-2.5",children:[(0,s.jsx)("p",{className:"font-semibold text-sm text-amber-600 dark:text-amber-400 mb-1",children:"UMI deduplication"}),(0,s.jsx)("p",{className:"font-mono text-[11px]",children:"count = |distinct UMIs|"}),(0,s.jsx)("p",{className:"text-muted-foreground text-[11px] mt-1",children:"PCR amplifies each cDNA ~3\xd7. Without UMI, would count PCR duplicates as separate molecules. With UMI: collapse to original count."})]}),(0,s.jsxs)("div",{className:"rounded-md border border-violet-500/40 bg-violet-500/5 p-2.5",children:[(0,s.jsx)("p",{className:"font-semibold text-sm text-violet-600 dark:text-violet-400 mb-1",children:"UMI collision"}),(0,s.jsx)("p",{className:"font-mono text-[11px]",children:"P ≈ n / 4^L"}),(0,s.jsx)("p",{className:"text-muted-foreground text-[11px] mt-1",children:"n reads per (cell, gene), L=10 UMI length. P(collision) ~10⁻⁵ — negligible. Longer UMIs (12bp) reduce further."})]})]})]})}),(0,s.jsx)(l.iv,{title:"scVI math — ZINB likelihood for zero-inflated count data",description:"scRNA-seq counts have two features: (1) zero-inflation (90%+ of (cell, gene) pairs are zero — most genes are not expressed in most cells), (2) over-dispersion (variance > mean, captured by negative binomial). scVI's ZINB likelihood = π\xb7δ(x=0) + (1-π)\xb7NB(x|μ,θ) handles both. The VAE encoder compresses 20K-dim counts → 30-dim latent (cell-type identity, batch-corrected via conditional encoder).",icon:(0,s.jsx)(_.A,{className:"h-5 w-5"}),badge:"mathematics",children:(0,s.jsxs)("div",{className:"space-y-3",children:[(0,s.jsxs)("div",{className:"rounded-md border border-primary/30 bg-primary/5 p-3 text-center",children:[(0,s.jsx)("p",{className:"font-mono text-xs text-primary",children:"P(x | μ, θ, π) = π \xb7 δ(x=0) + (1-π) \xb7 NB(x | μ, θ) \xa0\xb7\xa0 KL(q(z|x,batch) || N(0, I))"}),(0,s.jsx)("p",{className:"text-[11px] text-muted-foreground mt-1",children:"π = dropout probability (per-cell, per-gene), μ = mean (positive), θ = dispersion (per-gene). VAE encoder compresses counts → 30-dim latent."})]}),(0,s.jsxs)("div",{className:"grid md:grid-cols-3 gap-2 text-xs",children:[(0,s.jsxs)("div",{className:"rounded-md border border-border/60 p-2.5",children:[(0,s.jsx)("p",{className:"font-semibold mb-1",children:"Negative Binomial"}),(0,s.jsxs)("p",{className:"font-mono text-[11px]",children:["NB(x|μ,θ) = Γ(x+θ)/(Γ(θ)\xb7x!) \xb7 (θ/(θ+μ))",(0,s.jsx)("sup",{children:"θ"})," \xb7 (μ/(θ+μ))",(0,s.jsx)("sup",{children:"x"})]}),(0,s.jsx)("p",{className:"text-muted-foreground text-[11px] mt-1",children:"Models over-dispersion: Var = μ + μ\xb2/θ. θ→∞: Poisson. θ small: highly over-dispersed."})]}),(0,s.jsxs)("div",{className:"rounded-md border border-border/60 p-2.5",children:[(0,s.jsx)("p",{className:"font-semibold mb-1",children:"Zero-inflation π"}),(0,s.jsx)("p",{className:"font-mono text-[11px]",children:"π = sigmoid(W\xb7z + b)"}),(0,s.jsx)("p",{className:"text-muted-foreground text-[11px] mt-1",children:"Per-cell, per-gene dropout. If π high: dropout dominates (technical zero). If π low: true biological zero."})]}),(0,s.jsxs)("div",{className:"rounded-md border border-border/60 p-2.5",children:[(0,s.jsx)("p",{className:"font-semibold mb-1",children:"KL regularisation"}),(0,s.jsxs)("p",{className:"font-mono text-[11px]",children:["KL = -0.5 \xb7 Σ (1 + logvar - μ\xb2 - e",(0,s.jsx)("sup",{children:"logvar"}),")"]}),(0,s.jsx)("p",{className:"text-muted-foreground text-[11px] mt-1",children:"Pulls latent posterior q(z|x) toward N(0, I) prior. Prevents overfitting; allows sampling for downstream."})]})]})]})}),(0,s.jsx)(l.iv,{title:"RNA velocity math — kinetic ODE for cell-state transitions",description:"La Manno 2018 measured unspliced (intronic) vs spliced (exonic) mRNA per cell. The ratio reveals whether a gene is being transcribed (high u/s) or degraded (low u/s). Solving the kinetic ODE du/dt = α - β\xb7u, ds/dt = β\xb7u - γ\xb7s gives per-cell velocity v = ds/dt = β\xb7u - γ\xb7s — the rate of cell-state transition. Projecting velocities onto UMAP reveals differentiation arrows.",icon:(0,s.jsx)(_.A,{className:"h-5 w-5"}),badge:"mathematics",children:(0,s.jsxs)("div",{className:"space-y-3",children:[(0,s.jsxs)("div",{className:"rounded-md border border-primary/30 bg-primary/5 p-3 text-center",children:[(0,s.jsx)("p",{className:"font-mono text-sm text-primary",children:"du/dt = α - β\xb7u \xa0\xb7\xa0 ds/dt = β\xb7u - γ\xb7s \xa0\xb7\xa0 v = β\xb7u - γ\xb7s"}),(0,s.jsx)("p",{className:"text-[11px] text-muted-foreground mt-1",children:"α = transcription rate, β = splicing rate, γ = degradation rate. Steady state: u* = α/β, s* = α/γ → estimate γ via linear regression of u vs s."})]}),(0,s.jsxs)("div",{className:"grid md:grid-cols-3 gap-2 text-xs",children:[(0,s.jsxs)("div",{className:"rounded-md border border-emerald-500/40 bg-emerald-500/5 p-2.5",children:[(0,s.jsx)("p",{className:"font-semibold text-sm text-emerald-600 dark:text-emerald-400 mb-1",children:"Steady state"}),(0,s.jsx)("p",{className:"font-mono text-[11px]",children:"u* = (γ/β)\xb7s*"}),(0,s.jsx)("p",{className:"text-muted-foreground text-[11px] mt-1",children:"Linear regression of u vs s across cells. Slope ≈ γ/β. Bergens 2020 scVelo improves via EM (relaxation of constant-rate assumption)."})]}),(0,s.jsxs)("div",{className:"rounded-md border border-amber-500/40 bg-amber-500/5 p-2.5",children:[(0,s.jsx)("p",{className:"font-semibold text-sm text-amber-600 dark:text-amber-400 mb-1",children:"Velocity sign"}),(0,s.jsx)("p",{className:"font-mono text-[11px]",children:"v > 0: up-regulating (active transcription)"}),(0,s.jsx)("p",{className:"text-muted-foreground text-[11px] mt-1",children:"v < 0: down-regulating (degradation dominates). v = 0: at steady state (mature cell)."})]}),(0,s.jsxs)("div",{className:"rounded-md border border-violet-500/40 bg-violet-500/5 p-2.5",children:[(0,s.jsx)("p",{className:"font-semibold text-sm text-violet-600 dark:text-violet-400 mb-1",children:"Projection to embedding"}),(0,s.jsx)("p",{className:"font-mono text-[11px]",children:"arrow_i = Σ w_ij \xb7 (e_j - e_i)"}),(0,s.jsx)("p",{className:"text-muted-foreground text-[11px] mt-1",children:"For each cell, weight k-NN displacements by cosine sim of gene-space velocity. Sum gives embedding-space arrow."})]})]})]})}),(0,s.jsx)(l.iv,{title:"Try it: GEM Poisson + UMI + scVI ZINB + WNN + RNA velocity (Pyodide)",description:"Simulates 10K GEM droplets via Poisson(λ=0.1) (90% empty, 9% single, 1% doublet), simulates UMI counting with PCR duplicates (true count 5, observed 5 via dedup), explains scVI architecture + ZINB likelihood, computes WNN matrix on 5 cells with RNA + ATAC embeddings, and full RNA velocity computation on 10 cells (progenitor → differentiated) for GATA1 + CD34 genes.",icon:(0,s.jsx)(y.A,{className:"h-5 w-5"}),badge:"executable",children:(0,s.jsx)(h.l,{code:M,buttonLabel:"Run single-cell (Pyodide)"})}),(0,s.jsx)(l.iv,{title:"Modern papers — scVI, WNN/Seurat v4, RNA velocity, Harmony",description:"The four reference methods for single-cell multi-omics: (1) scVI (Lopez 2018, Nature Methods) — VAE with ZINB likelihood. (2) Seurat v4 + WNN (Hao 2021, Cell) — weighted KNN integration. (3) RNA velocity (La Manno 2018, Bergen 2020) — kinetic ODE. (4) Harmony (Korsunsky 2019, Nature Methods) — fast batch correction.",icon:(0,s.jsx)(A.A,{className:"h-5 w-5"}),children:(0,s.jsxs)("div",{className:"space-y-3 text-sm text-muted-foreground leading-relaxed",children:[(0,s.jsxs)("p",{children:[(0,s.jsx)("strong",{className:"text-foreground/80",children:"scVI (Lopez et al. 2018, Nature Methods):"})," Variational autoencoder for scRNA-seq with zero-inflated negative binomial likelihood. Encoder: counts + batch → 30-dim latent. Decoder: latent + batch → (μ, θ, π) for ZINB. Handles zero-inflation (90%+ zeros in count matrix) and over-dispersion (variance > mean). Production: scVI-tools ecosystem (scANVI for semi-supervised, totalVI for CITE-seq). Replaces PCA + Harmony for batch-corrected embeddings."]}),(0,s.jsxs)("p",{children:[(0,s.jsx)("strong",{className:"text-foreground/80",children:"Seurat v4 + WNN (Hao et al. 2021, Cell):"})," Weighted Nearest Neighbours integration for paired multi-modal data (10x Multiome: RNA + ATAC on same cell). For each cell: find k-NN in each modality, compute per-cell modality weights via softmax of k-NN quality, rank combined neighbours by weighted similarity. Output: cell \xd7 cell WNN graph for clustering. Outperforms simple concatenation (RNA + ATAC) by 30%+ on cell-type identification. The reference for 10x Multiome analysis."]}),(0,s.jsxs)("p",{children:[(0,s.jsx)("strong",{className:"text-foreground/80",children:"RNA velocity (La Manno et al. 2018, Nature; Bergen et al. 2020 scVelo, Nature Biotechnology):"})," Measures unspliced (intronic) vs spliced (exonic) mRNA per cell. The ratio u/s reveals transcription direction. Solves the kinetic ODE du/dt = α - β\xb7u, ds/dt = β\xb7u - γ\xb7s to estimate per-cell velocity v = β\xb7u - γ\xb7s. scVelo (2020) extends via EM for kinetic parameter estimation (relaxes the constant-rate assumption). Reveals differentiation trajectories invisible to static embeddings."]}),(0,s.jsxs)("p",{children:[(0,s.jsx)("strong",{className:"text-foreground/80",children:"Harmony (Korsunsky et al. 2019, Nature Methods):"})," Fast iterative batch correction. Algorithm: PCA on combined data, initialise k cluster centres, soft cluster assignment per cell, subtract batch-specific means, re-assign clusters. Converges in <10 iterations, ~1000\xd7 faster than scVI VAE training. When batch effects are simple (technical, not biological), Harmony is preferred. When batch effects are complex (multi-site, mixed protocols), scVI's VAE handles better. Production: try Harmony first, fall back to scVI if needed."]})]})}),(0,s.jsx)(l.iv,{title:"HPC pipeline — BCL → 1M-cell \xd7 20K-gene matrix in Parquet",description:"End-to-end single-cell multi-omics: BCL raw → FASTQ via bcl2fastq → cell \xd7 gene matrix via Cell Ranger → scrublet doublet filter → scVI VAE → batch correction → WNN integration (for Multiome) → RNA velocity → UMAP → cell type annotation → Parquet via Spark. For 1M cells \xd7 20K genes = 2\xd710\xb9⁰ sparse entries (~5% non-zero) → 100GB Parquet, queryable via Spark SQL.",icon:(0,s.jsx)(j.A,{className:"h-5 w-5"}),children:(0,s.jsx)(p.N,{language:"text",filename:"singlecell_pipeline.txt",code:`┌──────────────────────────────────────────────────────────────────────┐
│  SINGLE-CELL MULTI-OMICS PIPELINE (1M cells, ~$30K)                 │
│                                                                            │
│  Wet lab: 10x Chromium Next GEM ($1500/run, 10K-100K cells)         │
│    + 10x Multiome (RNA + ATAC paired, $3000/run)                     │
│         ↓                                                                 │
│  ┌──────────────────────────────────────────────────────┐              │
│  │ BCL → FASTQ via bcl2fastq (Illumina)                  │              │
│  │   - Demultiplex by sample barcode                      │              │
│  │   - Output: R1 (cell barcode + UMI), R2 (cDNA)           │              │
│  └──────────────────────────────────────────────────────┘              │
│         ↓                                                                 │
│  ┌──────────────────────────────────────────────────────┐              │
│  │ Cell Ranger count (10x Genomics, pipeline)            │              │
│  │   - Align reads to transcriptome (STAR)               │              │
│  │   - Group by (cell_barcode, gene) → UMI dedup          │              │
│  │   - Output: cell \xd7 gene count matrix (HDF5)            │              │
│  └──────────────────────────────────────────────────────┘              │
│         ↓                                                                 │
│  ┌──────────────────────────────────────────────────────┐              │
│  │ Quality control + doublet removal                      │              │
│  │   - Filter cells: <500 genes, >10% mito genes          │              │
│  │   - Doublet removal: Scrublet (simulated doublets)    │              │
│  │   - Output: ~80% of original cells kept                 │              │
│  └──────────────────────────────────────────────────────┘              │
│         ↓                                                                 │
│  ┌──────────────────────────────────────────────────────┐              │
│  │ scVI VAE (Lopez 2018, GPU)                            │              │
│  │   - Encoder: counts + batch → 30-dim latent             │              │
│  │   - Decoder: latent → ZINB(μ, θ, π)                    │              │
│  │   - Train: ~1 hour per 100K cells on 1 GPU              │              │
│  │   - Output: cell embeddings (N_cells \xd7 30)               │              │
│  └──────────────────────────────────────────────────────┘              │
│         ↓                                                                 │
│  ┌──────────────────────────────────────────────────────┐              │
│  │ Optional: WNN integration (for Multiome)               │              │
│  │   - RNA scVI + ATAC LSI (TF-IDF + SVD, 30 dim)         │              │
│  │   - Per-cell modality weights (softmax)                 │              │
│  │   - Combined k-NN graph                                │              │
│  └──────────────────────────────────────────────────────┘              │
│         ↓                                                                 │
│  ┌──────────────────────────────────────────────────────┐              │
│  │ Clustering + UMAP visualisation                        │              │
│  │   - Louvain / Leiden on WNN graph                       │              │
│  │   - UMAP: 30-dim → 2D for visualisation                 │              │
│  │   - Cell type annotation via marker genes               │              │
│  └──────────────────────────────────────────────────────┘              │
│         ↓                                                                 │
│  ┌──────────────────────────────────────────────────────┐              │
│  │ RNA velocity (scVelo, Bergen 2020)                     │              │
│  │   - Compute spliced + unspliced counts via velocyto     │              │
│  │   - Estimate γ per gene via steady-state regression     │              │
│  │   - v = β\xb7u - γ\xb7s per cell per gene                     │              │
│  │   - Project to UMAP embedding (k-NN weighted)         │              │
│  └──────────────────────────────────────────────────────┘              │
│         ↓                                                                 │
│  ┌──────────────────────────────────────────────────────┐              │
│  │ Spark: store cell \xd7 gene matrix in Parquet             │              │
│  │   - 1M cells \xd7 20K genes = 2\xd710\xb9⁰ entries (sparse)     │              │
│  │   - Compressed Parquet: ~100GB                          │              │
│  │   - Queryable: SELECT gene, AVG(count) FROM ...         │              │
│  │   - Cell metadata: cell type, batch, sample → Parquet   │              │
│  └──────────────────────────────────────────────────────┘              │
└──────────────────────────────────────────────────────────────────────────┘`})}),(0,s.jsx)(l.iv,{title:"Low-level PyTorch — scVI VAE, WNN, RNAVelocitySolver, Harmony",description:"The actual production code. scVI implements the full VAE: encoder (counts + batch one-hot → 2-layer MLP → μ, logvar), reparameterise trick, decoder (z + batch → μ via exp, θ per-gene, π via sigmoid), ZINBLoss with lgamma for Γ terms. WNN does paired integration: project RNA + ATAC to common 30-dim, compute per-cell modality weights via softmax of 2-layer MLP, weighted combination of cosine similarities. RNAVelocitySolver estimates γ via least-squares regression of unspliced vs spliced, computes v = β\xb7u - γ\xb7s, projects to embedding via cosine sim of velocities with k-NN displacements. Harmony does iterative batch correction via soft cluster responsibilities + per-batch mean subtraction.",icon:(0,s.jsx)(w.A,{className:"h-5 w-5"}),badge:"low-level",children:(0,s.jsx)(p.N,{language:"python",filename:"singlecell.py",highlight:[10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300],code:R})}),(0,s.jsx)(l.iv,{title:"My deeper thought: single-cell multi-omics IS matrix factorisation across modalities",description:"scVI's VAE is matrix factorisation (X = U\xb7V^T where U=cell embeddings, V=gene factors). WNN is multi-matrix factorisation (X_RNA + X_ATAC). RNA velocity adds temporal information via kinetic ODE. The same matrix factorisation principle underlies recommender systems (Netflix), NLP (word2vec), and single-cell analysis — different domains, same math.",icon:(0,s.jsx)(k.A,{className:"h-5 w-5"}),badge:"Insight",children:(0,s.jsxs)("div",{className:"space-y-3 text-sm text-muted-foreground leading-relaxed",children:[(0,s.jsxs)("p",{children:[(0,s.jsx)("strong",{className:"text-foreground/80",children:"scVI IS non-negative matrix factorisation with VAE."})," The cell \xd7 gene count matrix X (1M \xd7 20K) is decomposed as X ≈ Decoder(z) where z is the 30-dim latent. This is structurally identical to NMF (Lee & Seung 1999, popularised by Netflix Prize 2009) — decompose a high-dim matrix into low-dim factors. The difference: scVI's VAE uses a non-linear decoder (vs NMF's linear), and ZINB likelihood (vs NMF's Gaussian). The platform's recommender system (recommend products to users based on their latent) is the same algorithm as cell-type identification (recommend cell type to a cell based on its latent) — different domain, same math."]}),(0,s.jsxs)("p",{children:[(0,s.jsx)("strong",{className:"text-foreground/80",children:"WNN is multi-matrix factorisation with shared latent."})," For paired multi-modal data (RNA + ATAC on same cell), WNN finds a shared latent space that explains both modalities. This is structurally identical to MOFA+ (ADR-039 multi-omics) — both decompose multi-matrix data into shared + modality-specific factors. The difference: WNN uses k-NN-based integration (graph), MOFA+ uses Bayesian factor analysis (matrix). The principle is the same: shared structure across modalities. The platform's multi-modal RAG (ADR-033 SigLIP + ADR-035 ChemBERTa + ADR-034 ESM-2) is the same pattern — different encoder per modality, shared embedding space."]}),(0,s.jsxs)("p",{children:[(0,s.jsx)("strong",{className:"text-foreground/80",children:"RNA velocity IS ODE-constrained matrix factorisation."})," The kinetic ODE du/dt = α - β\xb7u, ds/dt = β\xb7u - γ\xb7s constrains the temporal evolution of (u, s) per gene per cell. The velocity v = β\xb7u - γ\xb7s is the time-derivative of the embedding. This is structurally identical to a continuous dynamical system (comp-sci-materials ADR-036 — Langevin equation, Anfinsen's free-energy principle). The cell IS a dynamical system; the embedding IS the state; the velocity IS the time-derivative. scVI gives the position, RNA velocity gives the velocity — together, a phase-space trajectory. The platform's molecular modelling stack (ADR-036 AMBER force fields + Verlet integration) is the same pattern — position + velocity + ODE. Cell biology IS molecular dynamics at the cell-state level. The unification: every temporal system (molecular, cellular, organism) is position + velocity + ODE. The platform's GenAI stack (scVI, AlphaFold, AMBER, single-cell) is one family of dynamical systems, simulated cell-by-cell, molecule-by-molecule."]})]})}),(0,s.jsxs)(f.S,{pageTitle:"Single-cell Multi-omics",children:[(0,s.jsx)(f.P,{title:"Single-cell Multi-omics IS part of a larger system — no page stands alone",connectedTo:"ADR-001 (platform architecture)",children:(0,s.jsx)("p",{children:"This page about Single-cell Multi-omics is not an isolated reference — it's a node in a graph. The platform's thesis is that the same math appears across genomics, fintech, maritime, and audio. Single-cell Multi-omics connects to the elegant-code cards via shared equations, and to the living-equation pages via live demos. The reader who arrives here looking for facts leaves with a map of where Single-cell Multi-omics sits in the computational-science landscape."})}),(0,s.jsx)(f.P,{title:"The technology will change; the math won't",connectedTo:"ADR-055 (cross-disciplinary scope)",children:(0,s.jsx)("p",{children:"In a decade, the specific tools on this page (Single-cell Multi-omics) may be replaced. But the underlying mathematics — the equations, the distributions, the optimisation rules — will be the same. SVD was invented in 1873 and still runs on NumPy today. Attention was described in 2017 and will run on whatever replaces PyTorch. The platform invests in the MATH, not the tools, because the math is the part that survives technology turnover."})}),(0,s.jsx)(f.P,{title:"The fold pattern respects the reader's attention",connectedTo:"ADR-050 (fold-section architecture)",children:(0,s.jsx)("p",{children:"This page has fold sections (collapsed by default) that reveal deeper content on demand — equation family comparisons, LaTeX derivations, production patterns, expected outputs, and citations. The basic content is visible immediately; the deeper phases are there when the reader is ready. Progressive disclosure isn't just UX — it's epistemological. A reader who wants the summary gets it; a reader who wants the derivation clicks to expand. Both are served by the same page."})}),(0,s.jsx)(f.P,{title:"The output IS the proof — not just the equation",connectedTo:"ADR-034 (ESM-2 + AlphaFold2 adoption)",children:(0,s.jsx)("p",{children:"Where this page has interactive demos (Pyodide + sliders + charts), the visual output IS the argument. Seeing a chart update as you drag a slider communicates the math in a way no formula can. The brain's pattern-recognition system processes the visual output faster than the verbal/analytical pathway. That's why the platform pairs every equation with a live demo — the output plays to a different level of the brain than the prose."})}),(0,s.jsx)(f.P,{title:"In a decade, this page will evolve — and that's the point",connectedTo:"ADR-022 (pgvector for variant embeddings)",children:(0,s.jsx)("p",{children:"The datasets, libraries, and tools on this page will be updated as technology evolves. The 1000-Genomes Project will become the 10M-Genomes Project. NumPy may be replaced by a WebGPU-native array library. PyTorch may give way to a successor. But the math — SVD, Attention, Poisson, FFT, Bayes, Kalman, GBM — will be the same. The platform is designed for this evolution: the equations are the anchor, the tools are the amplifier, and the fold sections let us update the tools without rewriting the page."})})]}),(0,s.jsx)(d.R,{pageId:"singlecell-multiomics"}),(0,s.jsx)(m.B,{pageId:"singlecell-multiomics"}),(0,s.jsx)(c.T,{relatedPages:[{id:"connections",reason:"Trace this topic's connections across the platform's math graph"},{id:"spatial-transcriptomics",reason:"Continue to spatial transcriptomics — see also from this page"},{id:"systems-biology",reason:"Continue to systems biology — see also from this page"}]}),(0,s.jsxs)("div",{className:"flex flex-wrap gap-2",children:[(0,s.jsx)(o(),{href:(0,g.ZJ)("spatial-transcriptomics"),className:"text-sm text-primary hover:underline",children:"→ Spatial Transcriptomics (with spatial coordinates)"}),(0,s.jsx)("span",{className:"text-muted-foreground",children:"\xb7"}),(0,s.jsx)(o(),{href:(0,g.ZJ)("systems-biology"),className:"text-sm text-primary hover:underline",children:"→ Systems Biology (MOFA+ multi-omics)"}),(0,s.jsx)("span",{className:"text-muted-foreground",children:"\xb7"}),(0,s.jsx)(o(),{href:(0,g.ZJ)("genetic-materials"),className:"text-sm text-primary hover:underline",children:"→ Genetic Materials (variant → cell)"}),(0,s.jsx)("span",{className:"text-muted-foreground",children:"\xb7"}),(0,s.jsx)(o(),{href:(0,g.ZJ)("molecular-modelling"),className:"text-sm text-primary hover:underline",children:"→ Molecular Modelling (Verlet — same ODE pattern)"}),(0,s.jsx)("span",{className:"text-muted-foreground",children:"\xb7"}),(0,s.jsx)(o(),{href:(0,g.ZJ)("vector-db"),className:"text-sm text-primary hover:underline",children:"→ Vector DB (pgvector for cell embeddings)"}),(0,s.jsx)("span",{className:"text-muted-foreground",children:"\xb7"}),(0,s.jsx)(o(),{href:(0,g.ZJ)("knowledge"),className:"text-sm text-primary hover:underline",children:"→ ADR-042 (scVI + WNN + RNA velocity)"})]})]})}},30971:(e,t,i)=>{"use strict";i.d(t,{A:()=>s});let s=(0,i(6404).A)("workflow",[["rect",{width:"8",height:"8",x:"3",y:"3",rx:"2",key:"by2w9f"}],["path",{d:"M7 11v4a2 2 0 0 0 2 2h4",key:"xkn7yn"}],["rect",{width:"8",height:"8",x:"13",y:"13",rx:"2",key:"1cgmvn"}]])},38880:(e,t,i)=>{Promise.resolve().then(i.bind(i,21964))},60508:(e,t,i)=>{"use strict";i.d(t,{R:()=>N});var s=i(95155),r=i(12115),n=i(45160),a=i(89239),o=i(66349),l=i(85404),c=i(58381),d=i(79275),m=i(48368),p=i(22164),h=i(86901),u=i(89123),g=i(21628),x=i(98500),f=i.n(x),b=i(85757);function N({pageId:e}){let t=(0,d.C6)(e);return 0===t.length?null:(0,s.jsxs)(c.iv,{title:"Recent research (2023-2025)",description:"Modern papers that extend the math, code, and tools on this page.",icon:(0,s.jsx)(m.A,{className:"h-5 w-5"}),badge:`${t.length} paper${1===t.length?"":"s"}`,badgeVariant:"outline",contentClassName:"space-y-4",children:[t.map((e,t)=>(0,s.jsx)(v,{entry:e},t)),(0,s.jsxs)("p",{className:"text-[11px] text-muted-foreground italic",children:[t.length," paper",1===t.length?"":"s"," mapped to this page. Each shows the key algorithm + expected output (rendered as charts when the code produces JSON). Run the code in-browser via Pyodide."]})]})}function v({entry:e}){let[t,i]=(0,r.useState)(!1),[c,d]=(0,r.useState)(null);return(0,s.jsxs)("div",{className:"rounded-lg border border-border/60 p-4 space-y-3 hover:border-primary/30 transition-colors",children:[(0,s.jsxs)("div",{className:"space-y-1",children:[(0,s.jsxs)("div",{className:"flex items-start justify-between gap-3",children:[(0,s.jsx)("h4",{className:"text-sm font-semibold leading-tight flex-1",children:e.paperTitle}),(0,s.jsx)(n.E,{variant:"outline",className:"text-[10px] shrink-0",children:e.venue})]}),(0,s.jsxs)("p",{className:"text-[11px] text-muted-foreground",children:[e.authors," \xb7 ",e.year]}),e.arxivId&&(0,s.jsxs)("a",{href:`https://arxiv.org/abs/${e.arxivId}`,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-1 text-[11px] text-primary hover:underline",children:[(0,s.jsx)(p.A,{className:"h-3 w-3"}),"arXiv:",e.arxivId]}),e.doi&&!e.arxivId&&(0,s.jsxs)("a",{href:`https://doi.org/${e.doi}`,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-1 text-[11px] text-primary hover:underline",children:[(0,s.jsx)(p.A,{className:"h-3 w-3"}),"DOI:",e.doi]})]}),(0,s.jsx)("p",{className:"text-[12px] text-muted-foreground leading-relaxed",children:e.abstract}),(0,s.jsxs)(a.$,{variant:"outline",size:"sm",onClick:()=>i(!t),className:"h-7 text-[11px] gap-1.5",children:[(0,s.jsx)(h.A,{className:"h-3 w-3"}),t?"Hide expected code":"Show expected code + visualization"]}),t&&(0,s.jsxs)("div",{className:"space-y-2",children:[(0,s.jsx)(o.l,{code:e.expectedCode,buttonLabel:"Run in browser",onOutput:e=>{try{let t=e.indexOf("{"),i=e.lastIndexOf("}");if(t>=0&&i>t){let s=e.substring(t,i+1);d(JSON.parse(s))}}catch{}},hideTextOutput:!!c,compact:!0}),c?(0,s.jsxs)("div",{className:"space-y-2",children:[(0,s.jsxs)("div",{className:"flex items-center gap-1.5",children:[(0,s.jsx)(u.A,{className:"h-3.5 w-3.5 text-primary"}),(0,s.jsx)("p",{className:"text-[10px] uppercase tracking-wider text-muted-foreground",children:"Visualization (rendered from code output)"})]}),(0,s.jsx)(l.D,{data:c,accent:"oklch(0.65 0.18 250)",sourceCode:e.expectedCode})]}):(0,s.jsxs)("div",{className:"rounded-md border border-primary/20 bg-primary/5 p-2.5",children:[(0,s.jsx)("p",{className:"text-[10px] uppercase tracking-wider text-muted-foreground mb-1",children:"Expected output"}),(0,s.jsx)("pre",{className:"text-[11px] font-mono whitespace-pre-wrap leading-relaxed",children:e.expectedOutput})]}),(0,s.jsxs)("div",{className:"rounded-md border border-emerald-500/30 bg-emerald-500/5 p-2.5",children:[(0,s.jsx)("p",{className:"text-[10px] uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-1",children:"Key insight"}),(0,s.jsx)("p",{className:"text-[12px] text-foreground/80 leading-relaxed",children:e.keyInsight})]})]}),(0,s.jsxs)(f(),{href:(0,b.ZJ)("analytics-outputs"),className:"inline-flex items-center gap-1 text-[11px] text-primary hover:underline",children:["See this math visualized on Analytics Outputs ",(0,s.jsx)(g.A,{className:"h-3 w-3"})]})]})}},86901:(e,t,i)=>{"use strict";i.d(t,{A:()=>s});let s=(0,i(6404).A)("sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]])}},e=>{e.O(0,[6919,8500,9430,3493,9760,7591,6012,9237,4843,9620,6722,5404,9275,2194,3039,8441,3794,7358],()=>e(e.s=38880)),_N_E=e.O()}]);