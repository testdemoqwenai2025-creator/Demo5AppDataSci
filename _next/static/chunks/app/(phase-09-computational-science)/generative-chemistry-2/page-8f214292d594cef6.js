(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[530],{19776:(e,t,i)=>{"use strict";i.d(t,{N:()=>l,R:()=>d});var r=i(95155),n=i(12115),a=i(94514),s=i(67635),o=i(89239);function l({code:e,language:t="sql",filename:i,highlight:l=[]}){let[d,c]=(0,n.useState)(!1),m=e.replace(/\n$/,"").split("\n"),h=async()=>{try{await navigator.clipboard.writeText(e),c(!0),setTimeout(()=>c(!1),1500)}catch{}};return(0,r.jsxs)("div",{className:"rounded-md border border-border/60 bg-[oklch(0.16_0.005_240)] text-[oklch(0.97_0.005_60)] overflow-hidden",children:[(0,r.jsxs)("div",{className:"flex items-center justify-between px-3 py-1.5 border-b border-white/10 bg-white/5",children:[(0,r.jsxs)("div",{className:"flex items-center gap-2 text-[11px] text-white/60 font-mono",children:[(0,r.jsx)("span",{className:"h-2 w-2 rounded-full bg-rose-400"}),(0,r.jsx)("span",{className:"h-2 w-2 rounded-full bg-amber-400"}),(0,r.jsx)("span",{className:"h-2 w-2 rounded-full bg-emerald-400"}),(0,r.jsx)("span",{className:"ml-2 uppercase tracking-wider",children:t}),i&&(0,r.jsxs)("span",{className:"text-white/40",children:["\xb7 ",i]})]}),(0,r.jsxs)(o.$,{variant:"ghost",size:"sm",className:"h-6 px-2 text-[11px] text-white/70 hover:text-white hover:bg-white/10",onClick:h,"aria-label":"Copy code",children:[d?(0,r.jsx)(a.A,{className:"h-3 w-3 mr-1"}):(0,r.jsx)(s.A,{className:"h-3 w-3 mr-1"}),d?"Copied":"Copy"]})]}),(0,r.jsx)("pre",{className:"code-scroll overflow-x-auto p-3 text-[12.5px] leading-relaxed font-mono",children:(0,r.jsx)("code",{children:m.map((e,t)=>{let i=t+1,n=l.includes(i);return(0,r.jsxs)("div",{className:["flex",n?"bg-primary/20 -mx-3 px-3 border-l-2 border-primary":""].join(" "),children:[(0,r.jsx)("span",{className:"select-none text-white/30 w-8 inline-block text-right pr-3 shrink-0",children:i}),(0,r.jsx)("span",{className:"whitespace-pre",children:e||" "})]},i)})})})]})}function d({children:e}){return(0,r.jsx)("code",{className:"rounded bg-muted px-1.5 py-0.5 text-[12px] font-mono text-foreground/90 border border-border/60",children:e})}},25221:(e,t,i)=>{"use strict";i.d(t,{A:()=>r});let r=(0,i(6404).A)("flask-conical",[["path",{d:"M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2",key:"18mbvz"}],["path",{d:"M6.453 15h11.094",key:"3shlmq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}]])},27555:(e,t,i)=>{"use strict";i.d(t,{GenerativeChemistry2Page:()=>k});var r=i(95155),n=i(12115),a=i(39430),s=i(98500),o=i.n(s),l=i(58381),d=i(27774),c=i(19776),m=i(66349),h=i(93697),p=i(85757),u=i(45160),f=i(25221),x=i(53961),g=i(90718),_=i(10762),b=i(65576),v=i(44071),y=i(83036);let w=[{label:"EDM",value:"DDPM on R^(N\xd73)",hint:"SE(3)-equivariant 3D molecule diffusion",deltaTone:"flat"},{label:"DiffDock",value:"20%+ vs AutoDock",hint:"Diffusion over binding poses (Corso 2023)",deltaTone:"flat"},{label:"GFlowNet",value:"Match reward dist.",hint:"Diverse candidates (not mode-collapsed)",deltaTone:"flat"},{label:"Sinkhorn",value:"W_ε = min⟨T,C⟩+εH(T)",hint:"Geometry-aware molecular similarity",deltaTone:"flat"}];function j(){let[e,t]=(0,n.useState)(0);return(0,n.useEffect)(()=>{let e=setInterval(()=>t(e=>(e+1)%5),900);return()=>clearInterval(e)},[]),(0,r.jsxs)("div",{className:"rounded-md border border-border/60 bg-card p-4",children:[(0,r.jsx)("style",{children:".sk-3d { perspective: 800px; } .sk-stage { transform: rotateX(15deg); transform-style: preserve-3d; }"}),(0,r.jsxs)("p",{className:"text-sm font-semibold mb-3 flex items-center gap-2",children:[(0,r.jsx)(f.A,{className:"h-4 w-4 text-primary"})," Sinkhorn optimal transport — molecular similarity (loop)"," ",(0,r.jsx)("span",{className:"text-[10px] font-mono text-muted-foreground ml-auto",children:["1. Two molecule distributions (atoms)","2. Cost matrix C_ij = |x_i - y_j|\xb2","3. Sinkhorn iterations: T_ij ← K_ij \xb7 u_i \xb7 v_j","4. Transport plan converges","5. Wasserstein distance = ⟨T*, C⟩"][e]})]}),(0,r.jsx)("div",{className:"sk-3d",children:(0,r.jsx)("div",{className:"sk-stage flex justify-center",children:(0,r.jsxs)("svg",{width:"340",height:"200",viewBox:"0 0 340 200",children:[0===e&&(0,r.jsxs)(a.P.g,{initial:{opacity:0},animate:{opacity:1},children:[[[60,50],[80,70],[40,80]].map(([e,t],i)=>(0,r.jsx)("circle",{cx:e,cy:t,r:"5",fill:"oklch(0.55 0.16 250)"},`a${i}`)),[[260,50],[280,80],[240,90]].map(([e,t],i)=>(0,r.jsx)("circle",{cx:e,cy:t,r:"5",fill:"oklch(0.55 0.16 165)"},`b${i}`)),(0,r.jsx)("text",{x:"80",y:"120",textAnchor:"middle",fontSize:"9",fill:"oklch(0.55 0.16 250)",children:"Molecule A"}),(0,r.jsx)("text",{x:"260",y:"120",textAnchor:"middle",fontSize:"9",fill:"oklch(0.55 0.16 165)",children:"Molecule B"})]}),1===e&&(0,r.jsxs)(a.P.g,{initial:{opacity:0},animate:{opacity:1},children:[[[60,50],[80,70],[40,80]].map(function(e,t){return[[260,50],[280,80],[240,90]].map(function(i,n){return(0,r.jsx)("line",{x1:e[0],y1:e[1],x2:i[0],y2:i[1],stroke:"var(--muted)",strokeWidth:.5,opacity:.3},"c-"+t+"-"+n)})}),(0,r.jsx)("text",{x:"170",y:"150",textAnchor:"middle",fontSize:"9",fill:"var(--muted-foreground)",children:"Cost matrix C_ij"})]}),e>=2&&e<=3&&(0,r.jsxs)(a.P.g,{initial:{opacity:0},animate:{opacity:1},children:[[[60,50],[80,70],[40,80]].map(function(t,i){return[[260,50],[280,80],[240,90]].map(function(n,s){let o=2===e?.3:.5;return(0,r.jsx)(a.P.line,{x1:t[0],y1:t[1],x2:n[0],y2:n[1],stroke:"oklch(0.6 0.15 75)",strokeWidth:o,initial:{opacity:0},animate:{opacity:o}},"t-"+i+"-"+s)})}),(0,r.jsx)("text",{x:"170",y:"150",textAnchor:"middle",fontSize:"9",fill:"oklch(0.6 0.15 75)",children:2===e?"Sinkhorn iterations...":"Transport plan converged"})]}),4===e&&(0,r.jsxs)(a.P.g,{initial:{opacity:0},animate:{opacity:1},children:[[[60,50],[80,70],[40,80]].map(function(e,t){return[[260,50],[280,80],[240,90]].map(function(i,n){let a=[.5,.1,.4][n];return(0,r.jsx)("line",{x1:e[0],y1:e[1],x2:i[0],y2:i[1],stroke:"oklch(0.55 0.16 165)",strokeWidth:3*a},"w-"+t+"-"+n)})}),(0,r.jsx)("rect",{x:"100",y:"160",width:"140",height:"25",rx:"4",fill:"oklch(0.55 0.16 165 / 0.1)",stroke:"oklch(0.55 0.16 165)",strokeWidth:"1"}),(0,r.jsx)("text",{x:"170",y:"177",textAnchor:"middle",fontSize:"10",fill:"oklch(0.55 0.16 165)",fontWeight:"bold",children:"W = 2.3"})]})]})})}),(0,r.jsx)("p",{className:"text-[10px] text-muted-foreground text-center mt-3",children:"Phase 1: two molecule distributions. Phase 2: cost matrix. Phase 3-4: Sinkhorn iterations converge. Phase 5: Wasserstein distance = transport cost."})]})}let D=`# Generative Chemistry 2.0 — EDM + DiffDock + GFlowNet + Sinkhorn (Pyodide)
import math, random

# ============================================================
# 1. Sinkhorn optimal transport — geometry-aware molecular similarity
# ============================================================
# W_ε(μ, ν) = min_T ⟨T, C⟩ + ε\xb7H(T)
# where C_ij = |x_i - y_j|\xb2, H(T) = -Σ T_ij\xb7log(T_ij)
# Sinkhorn: T_ij = K_ij \xb7 u_i \xb7 v_j (alternating scaling)

def sinkhorn(x, y, eps=0.1, n_iter=50):
    """Sinkhorn algorithm for entropic OT.
    
    Args:
        x: (n, d) source points (atoms of molecule A)
        y: (m, d) target points (atoms of molecule B)
        eps: regularization parameter
    
    Returns: (transport_plan, wasserstein_distance)
    """
    n, m = len(x), len(y)
    # Cost matrix
    C = [[sum((x[i][k]-y[j][k])**2 for k in range(len(x[0]))) for j in range(m)] for i in range(n)]
    # Kernel K_ij = exp(-C_ij / eps)
    K = [[math.exp(-C[i][j] / eps) for j in range(m)] for i in range(n)]
    # Sinkhorn iterations
    u = [1.0/n]*n
    v = [1.0/m]*m
    for _ in range(n_iter):
        # u ← 1 / (K @ v)
        for i in range(n):
            s = sum(K[i][j] * v[j] for j in range(m))
            u[i] = 1.0 / s if s > 0 else 1e-10
        # v ← 1 / (K^T @ u)
        for j in range(m):
            s = sum(K[i][j] * u[i] for i in range(n))
            v[j] = 1.0 / s if s > 0 else 1e-10
    # Transport plan
    T = [[K[i][j] * u[i] * v[j] for j in range(m)] for i in range(n)]
    # Wasserstein distance
    W = sum(T[i][j] * C[i][j] for i in range(n) for j in range(m))
    return T, W

print("=" * 60)
print("Sinkhorn Optimal Transport — Molecular Similarity")
print("=" * 60)
random.seed(42)
# Molecule A: 3 atoms
mol_A = [[random.gauss(0, 1) for _ in range(3)] for _ in range(3)]
# Molecule B: 3 atoms (similar to A)
mol_B = [[a + random.gauss(0, 0.3) for a in atom] for atom in mol_A]
# Molecule C: 3 atoms (different from A)
mol_C = [[random.gauss(5, 1) for _ in range(3)] for _ in range(3)]

T_AB, W_AB = sinkhorn(mol_A, mol_B, eps=0.1)
T_AC, W_AC = sinkhorn(mol_A, mol_C, eps=0.1)

print(f"\\nMolecule A: {[[f'{v:.2f}' for v in a] for a in mol_A]}")
print(f"Molecule B: {[[f'{v:.2f}' for v in a] for a in mol_B]} (similar to A)")
print(f"Molecule C: {[[f'{v:.2f}' for v in a] for a in mol_C]} (different from A)")
print(f"\\nWasserstein distance:")
print(f"  W(A, B) = {W_AB:.4f} (similar — small distance)")
print(f"  W(A, C) = {W_AC:.4f} (different — large distance)")
print(f"  Ratio: W(A,C)/W(A,B) = {W_AC/W_AB:.1f}\xd7")

# Compare to Tanimoto (ADR-035 — 2D-only, no geometry)
print(f"\\n  → Tanimoto (ADR-035) ignores 3D geometry")
print(f"    Sinkhorn respects spatial shape — more informative")
print(f"    Geometry-aware: W measures 'work' to transform A into B")

# ============================================================
# 2. EDM diffusion — 3D molecule generation
# ============================================================
print(f"\\n{'=' * 60}")
print("EDM — Equivariant Diffusion Model (Hoogeboom 2022)")
print("=" * 60)
print("""
Architecture:
  - Data: x = (positions ∈ R^{N\xd73}, atom_types ∈ Z^N)
  - Forward: q(x_t | x_0) = N(√ᾱ_t \xb7 x_0, (1-ᾱ_t) \xb7 I)
    (same DDPM as ADR-027, but on R^{N\xd73} coordinates)
  - Reverse: p_θ(x_{t-1} | x_t) = N(μ_θ, σ_t \xb7 I)
    where θ = SE(3)-equivariant denoising network
  
Key: the noise is E(3)-equivariant — rotating input rotates output.
Same math as RFdiffusion (ADR-044) but on small molecules, not proteins.

Training: predict noise ε_θ(x_t, t, atom_types)
Sampling: reverse diffusion from x_T ~ N(0, I) → x_0 = new molecule

Production: generates novel 3D molecules not in training set.
Explores 10^60 chemical space via learned latent manifold.
""")

# ============================================================
# 3. GFlowNet — reward-matched generation
# ============================================================
print(f"{'=' * 60}")
print("GFlowNet — Generative Flow Network (Bengio 2023)")
print("=" * 60)
print("""
GFlowNet frames molecular design as an MDP:
  - States: partial molecules (atoms + bonds added sequentially)
  - Actions: add atom / add bond / terminate
  - Reward: R(x) = property score (e.g. binding affinity)
  - Objective: match the reward DISTRIBUTION (not maximise)

Key difference from RL (ADR-019):
  - RL: maximize E[R(x)] → mode collapse (all samples near optimum)
  - GFlowNet: match P(x) ∝ R(x) → diverse samples matching reward

Training: trajectory balance loss
  L = (log Z \xb7 Π_t P_F(s_{t+1}|s_t) - R(x) \xb7 Π_t P_B(s_t|s_{t+1}))\xb2

The flow network learns P_F (forward policy) and P_B (backward).
At inference: sample from P_F → diverse high-reward molecules.

Connection to ADR-019 (bandit): 
  - Bandit: 1-step decision, Thompson sampling
  - GFlowNet: multi-step MDP, flow matching
  - Both: sample from posterior/reward, not maximise
""")

# ============================================================
# 4. DiffDock — diffusion-based docking
# ============================================================
print(f"{'=' * 60}")
print("DiffDock — Diffusion-Based Docking (Corso 2023)")
print("=" * 60)
print("""
DiffDock replaces AutoDock Vina (ADR-036) with learned diffusion:

  Input: protein structure + ligand SMILES
  Output: binding pose (translation + rotation + torsion)

  Method: reverse diffusion over SE(3) manifold
  - Translation: R^3 diffusion (standard DDPM)
  - Rotation: SO(3) diffusion (on the manifold, not Euclidean)
  - Torsion: torus diffusion (periodic angles)

  Performance:
    - Top-1 RMSD &lt; 2\xc5: 38% (DiffDock) vs 23% (Vina)
    - 20%+ improvement over all baselines
    - 60\xd7 faster than Vina at inference

  Key: the SE(3) manifold IS the configuration space of docking.
  Diffusion on manifolds (not Euclidean) preserves geometry.
""")

# ============================================================
# 5. Sinkhorn vs Tanimoto comparison
# ============================================================
print(f"\\n{'=' * 60}")
print("Comparison: Sinkhorn (3D) vs Tanimoto (2D)")
print("=" * 60)
print("""
  Metric         | Modality | Geometry-aware? | Complexity
  ---------------|----------|-----------------|------------
  Tanimoto       | 2D graph | No              | O(n) per pair
  Sinkhorn       | 3D coords| Yes             | O(n\xb2\xb7k) per pair
  Wasserstein-p  | 3D dist  | Yes             | O(n\xb3) exact
  
  Trade-off: Sinkhorn is more informative but more expensive.
  For 100M compound library: Tanimoto (HNSW) is ms per query.
  Sinkhorn: ~100ms per pair (100\xd7 slower).
  
  Hybrid: use Tanimoto for fast pre-filter, Sinkhorn for top-100 rerank.
""")
print("=" * 60)`,N=`import torch
import torch.nn as nn
import torch.nn.functional as F
import math
from typing import Dict, Tuple, List, Optional

# ============================================================
# 1. Sinkhorn optimal transport (entropic regularisation)
# ============================================================

class SinkhornDistance(nn.Module):
    """Sinkhorn distance with entropic regularisation.
    
    W_ε(μ, ν) = min_T ⟨T, C⟩ + ε\xb7H(T)
    
    where C_ij = |x_i - y_j|\xb2, H(T) = -Σ T_ij\xb7log(T_ij)
    
    Production: used for 3D molecular similarity (replaces Tanimoto for 3D).
    """
    def __init__(self, eps: float = 0.1, n_iter: int = 50, 
                 reduction: str = 'mean'):
        super().__init__()
        self.eps = eps
        self.n_iter = n_iter
        self.reduction = reduction
    
    def forward(self, x: torch.Tensor, y: torch.Tensor) -> torch.Tensor:
        """Compute Sinkhorn distance.
        
        Args:
            x: (B, N, D) source atoms (molecule A)
            y: (B, M, D) target atoms (molecule B)
        
        Returns: (B,) Sinkhorn distance per batch
        """
        B, N, D = x.shape
        M = y.shape[1]
        
        # Cost matrix: C_ij = |x_i - y_j|\xb2
        # (B, N, M) — pairwise squared distances
        C = torch.cdist(x, y, p=2) ** 2  # (B, N, M)
        
        # Kernel: K_ij = exp(-C_ij / eps)
        K = torch.exp(-C / self.eps)
        
        # Sinkhorn iterations (log-domain for stability)
        log_K = torch.log(K + 1e-30)
        log_u = torch.zeros(B, N, device=x.device)
        log_v = torch.zeros(B, M, device=x.device)
        
        for _ in range(self.n_iter):
            # log_u ← log(1) - logsumexp(log_K + log_v)
            log_u = -torch.logsumexp(log_K + log_v.unsqueeze(1), dim=-1)
            # log_v ← log(1) - logsumexp(log_K + log_u.unsqueeze(2)
            log_v = -torch.logsumexp(log_K + log_u.unsqueeze(2), dim=-2)
        
        # Transport plan: T_ij = K_ij \xb7 u_i \xb7 v_j
        log_T = log_K + log_u.unsqueeze(2) + log_v.unsqueeze(1)
        T = torch.exp(log_T)
        
        # Wasserstein distance: W = ⟨T, C⟩
        W = (T * C).sum(dim=(-2, -1))  # (B,)
        
        if self.reduction == 'mean':
            return W.mean()
        return W

# ============================================================
# 2. Equivariant Diffusion Model (EDM) for 3D molecule generation
# ============================================================

class EDMDenoiser(nn.Module):
    """Equivariant Diffusion Model denoising network (Hoogeboom 2022).
    
    Predicts noise ε_θ(x_t, t, atom_types) where x_t ∈ R^{N\xd73}.
    
    Architecture:
        - Atom embedding (per element)
        - Time embedding (sinusoidal)
        - SE(3)-equivariant message passing (E(n)-equivariant, like ADR-036)
        - Noise prediction head (per-atom 3D vector)
    
    Production: trained on QM9 (130K molecules) or GEOM (5M conformers).
    """
    def __init__(self, n_atom_types: int = 20, hidden_dim: int = 128,
                 n_layers: int = 4, n_heads: int = 4,
                 n_diffusion_steps: int = 1000):
        super().__init__()
        self.n_diffusion_steps = n_diffusion_steps
        
        # Atom embedding
        self.atom_embed = nn.Embedding(n_atom_types, hidden_dim)
        
        # Time embedding (sinusoidal, like ADR-034 ESM-2)
        self.time_embed = nn.Sequential(
            nn.Linear(hidden_dim, hidden_dim),
            nn.SiLU(),
            nn.Linear(hidden_dim, hidden_dim),
        )
        
        # SE(3)-equivariant message passing layers
        # (simplified — production uses e3nn or similar)
        self.layers = nn.ModuleList([
            nn.TransformerEncoderLayer(
                d_model=hidden_dim, nhead=n_heads, batch_first=True,
                dim_feedforward=4*hidden_dim, activation='gelu',
                norm_first=True,
            ) for _ in range(n_layers)
        ])
        
        # Noise prediction head (per-atom 3D vector)
        self.noise_head = nn.Sequential(
            nn.Linear(hidden_dim, hidden_dim // 2),
            nn.SiLU(),
            nn.Linear(hidden_dim // 2, 3),
        )
        
        # Noise schedule (cosine)
        betas = torch.linspace(1e-4, 0.02, n_diffusion_steps)
        alphas = 1 - betas
        alpha_bars = torch.cumprod(alphas, dim=0)
        self.register_buffer('betas', betas)
        self.register_buffer('alphas', alphas)
        self.register_buffer('alpha_bars', alpha_bars)
    
    def forward(self, x_t: torch.Tensor, atom_types: torch.Tensor,
               t: int) -> torch.Tensor:
        """Predict noise ε_θ(x_t, t, atom_types).
        
        Args:
            x_t: (B, N, 3) noisy atom coordinates at step t
            atom_types: (B, N) atom type IDs
            t: int diffusion timestep
        
        Returns: (B, N, 3) predicted noise
        """
        B, N, _ = x_t.shape
        
        # Atom embedding
        h = self.atom_embed(atom_types)  # (B, N, hidden)
        
        # Time embedding
        t_emb = self._time_embedding(t, h.shape[-1], x_t.device)
        h = h + t_emb.unsqueeze(1)  # broadcast over atoms
        
        # Message passing (simplified — production uses E(n)-equivariant)
        for layer in self.layers:
            h = layer(h)
        
        # Predict noise (per-atom 3D vector)
        noise = self.noise_head(h)  # (B, N, 3)
        return noise
    
    def _time_embedding(self, t: int, dim: int, device: torch.device) -> torch.Tensor:
        """Sinusoidal time embedding."""
        half = dim // 2
        freqs = torch.exp(-math.log(10000) * torch.arange(half) / half).to(device)
        args = torch.tensor([t], dtype=torch.float, device=device) * freqs
        emb = torch.cat([torch.sin(args), torch.cos(args)], dim=-1)
        return emb
    
    @torch.no_grad()
    def sample(self, atom_types: torch.Tensor, n_steps: int = 50) -> torch.Tensor:
        """Reverse diffusion: generate 3D molecule from noise.
        
        Args:
            atom_types: (B, N) atom type IDs (conditioning)
            n_steps: number of denoising steps (DDIM-style)
        
        Returns: (B, N, 3) generated atom coordinates
        """
        B, N = atom_types.shape
        device = atom_types.device
        
        # Start from noise
        x = torch.randn(B, N, 3, device=device)
        
        # DDIM-style reverse diffusion
        timesteps = list(range(0, self.n_diffusion_steps, 
                               self.n_diffusion_steps // n_steps))
        timesteps = list(reversed(timesteps))
        
        for t in timesteps:
            # Predict noise
            eps = self.forward(x, atom_types, t)
            # DDIM update
            alpha_bar_t = self.alpha_bars[t]
            x0_pred = (x - torch.sqrt(1 - alpha_bar_t) * eps) / torch.sqrt(alpha_bar_t)
            if t > 0:
                alpha_bar_prev = self.alpha_bars[timesteps[-1] if t == timesteps[0] else timesteps[timesteps.index(t)+1]]
            else:
                alpha_bar_prev = torch.tensor(1.0, device=device)
            x = torch.sqrt(alpha_bar_prev) * x0_pred + torch.sqrt(1 - alpha_bar_prev) * eps
        
        return x

# ============================================================
# 3. GFlowNet — reward-matched molecular design
# ============================================================

class GFlowNet(nn.Module):
    """GFlowNet (Bengio 2023) for molecular design.
    
    Learns to sample from P(x) ∝ R(x) (reward distribution).
    
    Architecture:
        - Forward policy P_F(s_{t+1}|s_t): add atom/bond
        - Backward policy P_B(s_t|s_{t+1}): remove atom/bond
        - Trajectory balance: Z\xb7Π P_F = R\xb7Π P_B
    """
    def __init__(self, n_atom_types: int = 20, hidden_dim: int = 128):
        super().__init__()
        # Forward policy: (state, action) → probability
        self.forward_policy = nn.Sequential(
            nn.Linear(hidden_dim, hidden_dim),
            nn.ReLU(),
            nn.Linear(hidden_dim, n_atom_types + 1),  # +1 for terminate
        )
        # Backward policy
        self.backward_policy = nn.Sequential(
            nn.Linear(hidden_dim, hidden_dim),
            nn.ReLU(),
            nn.Linear(hidden_dim, n_atom_types),
        )
        # State encoder
        self.state_encoder = nn.Embedding(n_atom_types, hidden_dim)
        # Log partition function (learnable)
        self.log_Z = nn.Parameter(torch.zeros(1))
    
    def forward(self, states: torch.Tensor, 
                rewards: torch.Tensor = None) -> Dict[str, torch.Tensor]:
        """Compute forward/backward policies.
        
        Args:
            states: (B, L) state sequences (atom type IDs)
            rewards: (B,) reward values for terminal states
        
        Returns: dict with forward_logits, backward_logits, loss
        """
        B, L = states.shape
        h = self.state_encoder(states)  # (B, L, hidden)
        h_pooled = h.mean(dim=1)  # (B, hidden) — graph-level
        
        forward_logits = self.forward_policy(h_pooled)  # (B, n_actions)
        backward_logits = self.backward_policy(h_pooled)
        
        # Trajectory balance loss (if rewards provided)
        if rewards is not None:
            # log Z + Σ log P_F = log R + Σ log P_B
            # (simplified — production computes full trajectory)
            log_Z = self.log_Z
            log_R = torch.log(rewards + 1e-8)
            # Simple loss: match log_Z to log_R
            loss = F.mse_loss(log_Z, log_R.mean())
        else:
            loss = torch.tensor(0.0)
        
        return {
            'forward_logits': forward_logits,
            'backward_logits': backward_logits,
            'loss': loss,
        }
    
    @torch.no_grad()
    def sample(self, n_samples: int = 1, max_len: int = 20) -> torch.Tensor:
        """Sample molecules from forward policy.
        
        Returns: (n_samples, max_len) generated atom type sequences.
        """
        samples = []
        for _ in range(n_samples):
            state = torch.zeros(1, 1, dtype=torch.long)
            for step in range(max_len):
                h = self.state_encoder(state).mean(dim=1)
                logits = self.forward_policy(h)
                probs = F.softmax(logits, dim=-1)
                # Sample action
                action = torch.multinomial(probs, 1)
                if action.item() == self.forward_policy[-1].out_features - 1:
                    break  # terminate
                state = torch.cat([state, action.unsqueeze(0)], dim=1)
            samples.append(state)
        return torch.nn.utils.rnn.pad_sequence(samples, batch_first=True)

# Sanity check
if __name__ == "__main__":
    # Sinkhorn
    sinkhorn = SinkhornDistance(eps=0.1, n_iter=30)
    x = torch.randn(2, 5, 3)  # 2 batches, 5 atoms, 3D
    y = torch.randn(2, 5, 3)
    dist = sinkhorn(x, y)
    print(f"Sinkhorn distance: {dist.item():.4f}")
    
    # Same molecule (should be ~0)
    dist_self = sinkhorn(x, x)
    print(f"Self-distance: {dist_self.item():.4f}")
    
    # EDM
    edm = EDMDenoiser(n_atom_types=10, hidden_dim=32, n_layers=2, n_heads=4, n_diffusion_steps=100)
    n_params = sum(p.numel() for p in edm.parameters())
    print(f"\\nEDM denoiser: {n_params:,} params")
    x_t = torch.randn(2, 8, 3)  # 2 batches, 8 atoms, 3D
    atom_types = torch.randint(0, 10, (2, 8))
    noise = edm(x_t, atom_types, t=50)
    print(f"  Predicted noise: {tuple(noise.shape)}")
    
    # Sample
    samples = edm.sample(atom_types, n_steps=20)
    print(f"  Generated molecules: {tuple(samples.shape)}")
    
    # GFlowNet
    gfn = GFlowNet(n_atom_types=10, hidden_dim=32)
    n_params = sum(p.numel() for p in gfn.parameters())
    print(f"\\nGFlowNet: {n_params:,} params")
    states = torch.randint(0, 10, (4, 5))
    rewards = torch.rand(4) * 10  # random rewards
    out = gfn(states, rewards)
    print(f"  Forward logits: {tuple(out['forward_logits'].shape)}")
    print(f"  Loss: {out['loss'].item():.4f}")
    
    # Sample
    samples = gfn.sample(n_samples=3, max_len=10)
    print(f"  Sampled molecules: {samples.shape}")`;function k(){return(0,r.jsxs)("div",{className:"space-y-8",children:[(0,r.jsx)(l.zY,{eyebrow:"Generative Chemistry 2.0 \xb7 EDM \xb7 DiffDock \xb7 GFlowNet \xb7 Sinkhorn \xb7 optimal transport",title:"Generative Chemistry 2.0 — 3D Diffusion, Flow Networks, Optimal Transport",description:"The next frontier of molecular design: 3D molecule generation via Equivariant Diffusion Models (EDM, Hoogeboom 2022 — DDPM on R^(N\xd73) with SE(3)-equivariance), diffusion-based protein-ligand docking (DiffDock, Corso 2023 — replaces AutoDock Vina, 20%+ improvement), generative flow networks (GFlowNet, Bengio 2023 — matches reward distribution for diverse candidates), and geometry-aware molecular similarity via Sinkhorn optimal transport (Cuturi 2013 — Wasserstein distance replaces Tanimoto for 3D). With 4 AI illustrations + looping Sinkhorn 'short'. Low-level PyTorch: SinkhornDistance, EDMDenoiser, GFlowNet.",right:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(u.E,{variant:"outline",className:"gap-1.5",children:[(0,r.jsx)(f.A,{className:"h-3 w-3"})," EDM + DiffDock + GFlowNet"]}),(0,r.jsxs)(u.E,{variant:"outline",className:"gap-1.5",children:[(0,r.jsx)(x.A,{className:"h-3 w-3"})," Pyodide"]})]})}),(0,r.jsx)("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-3",children:w.map(e=>(0,r.jsx)(l.nO,{label:e.label,value:e.value,hint:e.hint,deltaTone:e.deltaTone},e.label))}),(0,r.jsx)(l.iv,{title:"AI-generated illustrations — click to expand",icon:(0,r.jsx)(f.A,{className:"h-5 w-5"}),badge:"AI gallery",children:(0,r.jsxs)("div",{className:"grid md:grid-cols-2 gap-4",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)(h.j,{src:"/images/genchem2/edm-diffusion.png",alt:"EDM diffusion",caption:"Equivariant Diffusion Model (EDM) — noise-to-structure denoising on 3D molecular graphs. Same DDPM math as ADR-027 (image diffusion) but on R^(N\xd73) atom coordinates with SE(3)-equivariance. Generates novel 3D molecules not in training set."}),(0,r.jsx)("p",{className:"text-[11px] text-muted-foreground mt-2 text-center",children:"EDM diffusion — 3D molecule generation"})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)(h.j,{src:"/images/genchem2/diffdock.png",alt:"DiffDock",caption:"DiffDock — diffusion-based protein-ligand docking. Replaces AutoDock Vina (ADR-036) with learned diffusion over SE(3) binding poses. Translation (R\xb3) + rotation (SO(3)) + torsion (torus) diffusion. 20%+ improvement over Vina, 60\xd7 faster. Corso et al. 2023, ICLR."}),(0,r.jsx)("p",{className:"text-[11px] text-muted-foreground mt-2 text-center",children:"DiffDock — diffusion-based docking"})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)(h.j,{src:"/images/genchem2/gflownet.png",alt:"GFlowNet",caption:"GFlowNet — generative flow network for molecular design. Directed acyclic graph of molecule construction steps (add atom → add bond → terminate). Matches reward distribution (not maximise) for diverse candidates. Bengio et al. 2023. The RL alternative to VAE (ADR-046)."}),(0,r.jsx)("p",{className:"text-[11px] text-muted-foreground mt-2 text-center",children:"GFlowNet — reward-matched generation"})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)(h.j,{src:"/images/genchem2/optimal-transport.png",alt:"Optimal transport",caption:"Optimal transport — Wasserstein distance between two molecular electron density distributions. The transport plan (arrows) shows how to transform molecule A into molecule B with minimum 'work'. Geometry-aware: respects 3D shape, unlike Tanimoto (ADR-035) which is 2D-only."}),(0,r.jsx)("p",{className:"text-[11px] text-muted-foreground mt-2 text-center",children:"Optimal transport — geometry-aware similarity"})]})]})}),(0,r.jsx)(l.iv,{title:"Sinkhorn short — optimal transport molecular similarity (loop)",icon:(0,r.jsx)(f.A,{className:"h-5 w-5"}),badge:"short",children:(0,r.jsx)(j,{})}),(0,r.jsx)(l.iv,{title:"EDM math — SE(3)-equivariant diffusion on 3D coordinates",description:"EDM applies the DDPM framework (ADR-027) to molecular coordinates x ∈ R^(N\xd73). Forward: q(x_t|x_0) = N(√ᾱ_t\xb7x_0, (1-ᾱ_t)\xb7I) — same Gaussian noise injection. Reverse: p_θ(x_{t-1}|x_t) = N(μ_θ, σ_t\xb7I) where θ is SE(3)-equivariant. The noise prediction ε_θ must be equivariant — rotating input rotates output. This IS the same inductive bias as ADR-036 (AlphaFold2 IPA) and ADR-044 (RFdiffusion).",icon:(0,r.jsx)(g.A,{className:"h-5 w-5"}),badge:"mathematics",children:(0,r.jsxs)("div",{className:"space-y-3",children:[(0,r.jsxs)("div",{className:"rounded-md border border-primary/30 bg-primary/5 p-3 text-center",children:[(0,r.jsxs)("p",{className:"font-mono text-sm text-primary",children:["q(x_t|x_0) = N(√ᾱ_t\xb7x_0, (1-ᾱ_t)\xb7I) \xa0\xb7\xa0 p_θ(x_","{t-1}","|x_t) = N(μ_θ, σ_t\xb7I)"]}),(0,r.jsx)("p",{className:"text-[11px] text-muted-foreground mt-1",children:"Same DDPM as ADR-027 but on R^(N\xd73) atom coordinates. SE(3)-equivariance ensures rotation-correct sampling."})]}),(0,r.jsxs)("div",{className:"grid md:grid-cols-3 gap-2 text-xs",children:[(0,r.jsxs)("div",{className:"rounded-md border border-emerald-500/40 bg-emerald-500/5 p-2.5",children:[(0,r.jsx)("p",{className:"font-semibold text-sm text-emerald-600 dark:text-emerald-400 mb-1",children:"Same as image diffusion"}),(0,r.jsx)("p",{className:"font-mono text-[11px]",children:"ADR-027 but on coordinates"}),(0,r.jsx)("p",{className:"text-muted-foreground text-[11px] mt-1",children:"The DDPM math is invariant to modality — pixels, protein backbones, or molecular coordinates."})]}),(0,r.jsxs)("div",{className:"rounded-md border border-amber-500/40 bg-amber-500/5 p-2.5",children:[(0,r.jsx)("p",{className:"font-semibold text-sm text-amber-600 dark:text-amber-400 mb-1",children:"SE(3)-equivariance"}),(0,r.jsx)("p",{className:"font-mono text-[11px]",children:"f(Rx) = Rf(x)"}),(0,r.jsx)("p",{className:"text-muted-foreground text-[11px] mt-1",children:"Same constraint as ADR-036 AlphaFold2 and ADR-044 RFdiffusion. Rotational symmetry is inductive bias."})]}),(0,r.jsxs)("div",{className:"rounded-md border border-violet-500/40 bg-violet-500/5 p-2.5",children:[(0,r.jsx)("p",{className:"font-semibold text-sm text-violet-600 dark:text-violet-400 mb-1",children:"Atom types"}),(0,r.jsx)("p",{className:"font-mono text-[11px]",children:"conditioning on Z^N"}),(0,r.jsx)("p",{className:"text-muted-foreground text-[11px] mt-1",children:"Atom type IDs (C, N, O, S) are conditioning — the model generates positions given the molecular graph."})]})]})]})}),(0,r.jsx)(l.iv,{title:"Sinkhorn optimal transport — geometry-aware molecular similarity",description:"The Wasserstein distance W_p(μ,ν) between two molecular distributions IS the minimum 'work' to transform one into the other. Entropic regularisation (Cuturi 2013) makes it tractable: W_ε = min_T ⟨T,C⟩ + ε\xb7H(T). Sinkhorn iteration: T_ij = K_ij\xb7u_i\xb7v_j (alternating scaling), converges in O(n\xb2) per iteration. This gives a geometry-aware metric that respects 3D shape — fundamentally more informative than Tanimoto on 2D fingerprints.",icon:(0,r.jsx)(g.A,{className:"h-5 w-5"}),badge:"mathematics",children:(0,r.jsxs)("div",{className:"space-y-3",children:[(0,r.jsxs)("div",{className:"rounded-md border border-primary/30 bg-primary/5 p-3 text-center",children:[(0,r.jsx)("p",{className:"font-mono text-sm text-primary",children:"W_ε(μ,ν) = min_T ⟨T, C⟩ + ε\xb7H(T) \xa0\xb7\xa0 T_ij = K_ij\xb7u_i\xb7v_j"}),(0,r.jsx)("p",{className:"text-[11px] text-muted-foreground mt-1",children:"C_ij = |x_i - y_j|\xb2 (cost), K_ij = exp(-C/ε) (kernel), H(T) = entropy. Sinkhorn: alternate u, v scaling until convergence."})]}),(0,r.jsxs)("div",{className:"grid md:grid-cols-3 gap-2 text-xs",children:[(0,r.jsxs)("div",{className:"rounded-md border border-emerald-500/40 bg-emerald-500/5 p-2.5",children:[(0,r.jsx)("p",{className:"font-semibold text-sm text-emerald-600 dark:text-emerald-400 mb-1",children:"Geometry-aware"}),(0,r.jsx)("p",{className:"text-muted-foreground text-[11px] mt-1",children:"Respects 3D molecular shape. Tanimoto (ADR-035) ignores geometry — two molecules with same graph but different 3D shape have Tanimoto=1 but W>0."})]}),(0,r.jsxs)("div",{className:"rounded-md border border-amber-500/40 bg-amber-500/5 p-2.5",children:[(0,r.jsx)("p",{className:"font-semibold text-sm text-amber-600 dark:text-amber-400 mb-1",children:"Sinkhorn iteration"}),(0,r.jsx)("p",{className:"font-mono text-[11px]",children:"T_ij = K_ij \xb7 u_i \xb7 v_j"}),(0,r.jsx)("p",{className:"text-muted-foreground text-[11px] mt-1",children:"Alternating matrix balancing. Same algorithm as attention normalisation in transformers — Sinkhorn IS softmax without normalisation."})]}),(0,r.jsxs)("div",{className:"rounded-md border border-violet-500/40 bg-violet-500/5 p-2.5",children:[(0,r.jsx)("p",{className:"font-semibold text-sm text-violet-600 dark:text-violet-400 mb-1",children:"Hybrid pipeline"}),(0,r.jsx)("p",{className:"text-muted-foreground text-[11px] mt-1",children:"Tanimoto for fast pre-filter (HNSW, ms), Sinkhorn for top-100 re-rank (100ms). Best of both worlds for 100M compound libraries."})]})]})]})}),(0,r.jsx)(l.iv,{title:"GFlowNet — reward-matched generation (not maximisation)",description:"GFlowNet (Bengio 2023) frames molecular design as a sequential MDP where each step adds an atom/bond. The objective is to match the reward distribution P(x) ∝ R(x) — not to maximise R(x). This produces diverse candidates matching the reward, unlike RL's mode collapse. The trajectory balance loss: L = (log Z \xb7 Π P_F - R \xb7 Π P_B)\xb2. The flow network learns forward policy P_F (generation) and backward policy P_B (inference).",icon:(0,r.jsx)(g.A,{className:"h-5 w-5"}),badge:"mathematics",children:(0,r.jsxs)("div",{className:"space-y-3",children:[(0,r.jsxs)("div",{className:"rounded-md border border-primary/30 bg-primary/5 p-3 text-center",children:[(0,r.jsxs)("p",{className:"font-mono text-sm text-primary",children:["L = (log Z \xb7 Π_t P_F(s_","{t+1}","|s_t) - R(x) \xb7 Π_t P_B(s_t|s_","{t+1}","))\xb2"]}),(0,r.jsx)("p",{className:"text-[11px] text-muted-foreground mt-1",children:"Trajectory balance loss. Z = partition function. P_F = forward (generation), P_B = backward (inference). At equilibrium: Z \xb7 Π P_F = R \xb7 Π P_B."})]}),(0,r.jsxs)("div",{className:"grid md:grid-cols-2 gap-2 text-xs",children:[(0,r.jsxs)("div",{className:"rounded-md border border-emerald-500/40 bg-emerald-500/5 p-2.5",children:[(0,r.jsx)("p",{className:"font-semibold text-sm text-emerald-600 dark:text-emerald-400 mb-1",children:"RL (ADR-019 bandit)"}),(0,r.jsx)("p",{className:"font-mono text-[11px]",children:"maximise E[R(x)]"}),(0,r.jsx)("p",{className:"text-muted-foreground text-[11px] mt-1",children:"Mode collapse — all samples cluster near optimum. Good for exploitation, bad for diversity."})]}),(0,r.jsxs)("div",{className:"rounded-md border border-violet-500/40 bg-violet-500/5 p-2.5",children:[(0,r.jsx)("p",{className:"font-semibold text-sm text-violet-600 dark:text-violet-400 mb-1",children:"GFlowNet"}),(0,r.jsx)("p",{className:"font-mono text-[11px]",children:"match P(x) ∝ R(x)"}),(0,r.jsx)("p",{className:"text-muted-foreground text-[11px] mt-1",children:"Diverse samples matching reward distribution. Good for drug discovery — need diverse candidates, not just the best one."})]})]})]})}),(0,r.jsx)(l.iv,{title:"Try it: Sinkhorn + EDM + DiffDock + GFlowNet (Pyodide)",icon:(0,r.jsx)(_.A,{className:"h-5 w-5"}),badge:"executable",children:(0,r.jsx)(m.l,{code:D,buttonLabel:"Run generative chemistry 2.0 (Pyodide)"})}),(0,r.jsx)(l.iv,{title:"Modern papers — EDM, DiffDock, GFlowNet, Sinkhorn",icon:(0,r.jsx)(f.A,{className:"h-5 w-5"}),children:(0,r.jsxs)("div",{className:"space-y-3 text-sm text-muted-foreground leading-relaxed",children:[(0,r.jsxs)("p",{children:[(0,r.jsx)("strong",{className:"text-foreground/80",children:"EDM (Hoogeboom et al. 2022, ICML W):"})," ","Equivariant Diffusion Model for 3D molecule generation. DDPM on R^(N\xd73) with SE(3)-equivariance. Same math as ADR-027 (image) and ADR-044 (RFdiffusion). Generates novel 3D molecules exploring 10^60 chemical space. Trained on QM9 (130K) or GEOM (5M conformers)."]}),(0,r.jsxs)("p",{children:[(0,r.jsx)("strong",{className:"text-foreground/80",children:"DiffDock (Corso et al. 2023, ICLR):"})," ","Diffusion-based protein-ligand docking. Replaces AutoDock Vina (ADR-036). Diffusion on SE(3) manifold: translation (R\xb3) + rotation (SO(3)) + torsion (torus). 20%+ improvement over Vina, 60\xd7 faster. The standard for AI-based docking."]}),(0,r.jsxs)("p",{children:[(0,r.jsx)("strong",{className:"text-foreground/80",children:"GFlowNet (Bengio et al. 2023, JMLR):"})," ","Generative flow networks that match the reward distribution. Frames molecular design as sequential MDP. Trajectory balance loss. Produces diverse candidates (vs RL's mode collapse). The RL alternative to VAE (ADR-046 Insilico)."]}),(0,r.jsxs)("p",{children:[(0,r.jsx)("strong",{className:"text-foreground/80",children:"Sinkhorn (Cuturi 2013, NeurIPS):"})," ","Sinkhorn distances — entropic optimal transport for fast Wasserstein computation. O(n\xb2) per iteration. The same algorithm as attention normalisation in transformers. Applied to molecular similarity: 3D-aware metric replacing Tanimoto (ADR-035) for shape-sensitive applications."]})]})}),(0,r.jsx)(l.iv,{title:"Low-level PyTorch — SinkhornDistance, EDMDenoiser, GFlowNet",icon:(0,r.jsx)(b.A,{className:"h-5 w-5"}),badge:"low-level",children:(0,r.jsx)(c.N,{language:"python",filename:"genchem2.py",code:N})}),(0,r.jsx)(l.iv,{title:"My deeper thought: diffusion IS the universal generative primitive",icon:(0,r.jsx)(v.A,{className:"h-5 w-5"}),badge:"Insight",children:(0,r.jsxs)("div",{className:"space-y-3 text-sm text-muted-foreground leading-relaxed",children:[(0,r.jsxs)("p",{children:[(0,r.jsx)("strong",{className:"text-foreground/80",children:"The same DDPM equation powers image generation, protein design, and molecule generation."})," ","ADR-027 (image diffusion): q(x_t|x_0) = N(√ᾱ_t\xb7x_0, (1-ᾱ_t)\xb7I) on R^(H\xd7W\xd7C). ADR-044 (RFdiffusion): same equation on R^(N_protein\xd73). ADR-051 (EDM): same equation on R^(N_atoms\xd73). The modality changes (pixels vs protein backbone vs molecular coordinates) but the mathematical skeleton is identical. The diffusion process IS the universal generative primitive — it works on any differentiable manifold where you can define a Gaussian noise process. The SE(3)-equivariance constraint (same for RFdiffusion, EDM, AlphaFold2, Boltz-1) is the specific inductive bias for 3D spatial data. The platform now has 5 instances of the same diffusion equation: images (ADR-027), proteins (ADR-044 RFdiffusion), molecules (ADR-051 EDM), protein complexes (ADR-045 Boltz-1), and molecular dynamics (ADR-050 Neural ODEs — continuous diffusion). Five modalities, one equation. The unification is mathematical, not metaphorical."]}),(0,r.jsxs)("p",{children:[(0,r.jsx)("strong",{className:"text-foreground/80",children:"Sinkhorn IS attention normalisation."}),' The Sinkhorn iteration T_ij = K_ij \xb7 u_i \xb7 v_j (alternating matrix balancing) IS the same operation as softmax normalisation in attention. In attention, we compute softmax(QK^T/√d) — which IS one step of Sinkhorn with uniform marginals. The Sinkhorn algorithm IS iterated softmax with marginal constraints. This means: molecular similarity via Sinkhorn IS the same mathematical operation as the attention mechanism in transformers. The connection: attention computes a "soft matching" between query and key positions — Sinkhorn computes a "soft matching" between source and target atoms. Both are optimal transport problems, regularised differently (entropy for Sinkhorn, softmax for attention). The platform\'s pgvector (ADR-022) uses HNSW for fast retrieval — Sinkhorn adds a geometry-aware re-ranking layer on top.']}),(0,r.jsxs)("p",{children:[(0,r.jsx)("strong",{className:"text-foreground/80",children:"GFlowNet IS the Bayesian alternative to maximum likelihood."})," ","VAE (ADR-046 Insilico) maximises likelihood: learn P(x|z) to reconstruct data. GFlowNet matches the reward distribution: learn P_F to sample from P(x) ∝ R(x). The difference: VAE is likelihood-based (needs data), GFlowNet is reward-based (needs a scoring function). For drug discovery, the scoring function (binding affinity, ADMET) is more informative than the data distribution (what molecules exist). GFlowNet explores the reward landscape, VAE explores the data landscape. The connection to ADR-019 (bandit): the bandit samples from a Beta posterior (1-step), GFlowNet samples from a trajectory posterior (multi-step). Both match a distribution, not maximise. The platform's drug discovery stack now has three generative paradigms: VAE (ADR-046, 1D SMILES), EDM (ADR-051, 3D coordinates), GFlowNet (ADR-051, graph-structured). Three modalities, three generative approaches, all feeding into the same pgvector (ADR-022) for downstream RAG (ADR-032) and LLM summary (ADR-031). The platform IS a multi-paradigm generative engine for molecular design."]})]})}),(0,r.jsxs)(y.S,{pageTitle:"Generative Chemistry 2.0",children:[(0,r.jsx)(y.P,{title:"Generative Chemistry 2.0 IS part of a larger system — no page stands alone",connectedTo:"ADR-001 (platform architecture)",children:(0,r.jsx)("p",{children:"This page about Generative Chemistry 2.0 is not an isolated reference — it's a node in a graph. The platform's thesis is that the same math appears across genomics, fintech, maritime, and audio. Generative Chemistry 2.0 connects to the elegant-code cards via shared equations, and to the living-equation pages via live demos. The reader who arrives here looking for facts leaves with a map of where Generative Chemistry 2.0 sits in the computational-science landscape."})}),(0,r.jsx)(y.P,{title:"The technology will change; the math won't",connectedTo:"ADR-055 (cross-disciplinary scope)",children:(0,r.jsx)("p",{children:"In a decade, the specific tools on this page (Generative Chemistry 2.0) may be replaced. But the underlying mathematics — the equations, the distributions, the optimisation rules — will be the same. SVD was invented in 1873 and still runs on NumPy today. Attention was described in 2017 and will run on whatever replaces PyTorch. The platform invests in the MATH, not the tools, because the math is the part that survives technology turnover."})}),(0,r.jsx)(y.P,{title:"The fold pattern respects the reader's attention",connectedTo:"ADR-050 (fold-section architecture)",children:(0,r.jsx)("p",{children:"This page has fold sections (collapsed by default) that reveal deeper content on demand — equation family comparisons, LaTeX derivations, production patterns, expected outputs, and citations. The basic content is visible immediately; the deeper phases are there when the reader is ready. Progressive disclosure isn't just UX — it's epistemological. A reader who wants the summary gets it; a reader who wants the derivation clicks to expand. Both are served by the same page."})}),(0,r.jsx)(y.P,{title:"The output IS the proof — not just the equation",connectedTo:"ADR-034 (ESM-2 + AlphaFold2 adoption)",children:(0,r.jsx)("p",{children:"Where this page has interactive demos (Pyodide + sliders + charts), the visual output IS the argument. Seeing a chart update as you drag a slider communicates the math in a way no formula can. The brain's pattern-recognition system processes the visual output faster than the verbal/analytical pathway. That's why the platform pairs every equation with a live demo — the output plays to a different level of the brain than the prose."})}),(0,r.jsx)(y.P,{title:"In a decade, this page will evolve — and that's the point",connectedTo:"ADR-022 (pgvector for variant embeddings)",children:(0,r.jsx)("p",{children:"The datasets, libraries, and tools on this page will be updated as technology evolves. The 1000-Genomes Project will become the 10M-Genomes Project. NumPy may be replaced by a WebGPU-native array library. PyTorch may give way to a successor. But the math — SVD, Attention, Poisson, FFT, Bayes, Kalman, GBM — will be the same. The platform is designed for this evolution: the equations are the anchor, the tools are the amplifier, and the fold sections let us update the tools without rewriting the page."})})]}),(0,r.jsx)(d.T,{relatedPages:[{id:"connections",reason:"Trace this topic's connections across the platform's math graph"},{id:"cheminformatics",reason:"Continue to cheminformatics — see also from this page"},{id:"ai-drug-discovery",reason:"Continue to ai drug discovery — see also from this page"}]}),(0,r.jsxs)("div",{className:"flex flex-wrap gap-2",children:[(0,r.jsx)(o(),{href:(0,p.ZJ)("cheminformatics"),className:"text-sm text-primary hover:underline",children:"→ Cheminformatics (ECFP + Tanimoto — the 2D baseline)"}),(0,r.jsx)("span",{className:"text-muted-foreground",children:"\xb7"}),(0,r.jsx)(o(),{href:(0,p.ZJ)("ai-drug-discovery"),className:"text-sm text-primary hover:underline",children:"→ AI Drug Discovery (Insilico VAE — the 1D predecessor)"}),(0,r.jsx)("span",{className:"text-muted-foreground",children:"\xb7"}),(0,r.jsx)(o(),{href:(0,p.ZJ)("diffusion-models"),className:"text-sm text-primary hover:underline",children:"→ Diffusion Models (same DDPM math)"}),(0,r.jsx)("span",{className:"text-muted-foreground",children:"\xb7"}),(0,r.jsx)(o(),{href:(0,p.ZJ)("alphaproteo"),className:"text-sm text-primary hover:underline",children:"→ AlphaProteo (RFdiffusion — same DDPM on proteins)"}),(0,r.jsx)("span",{className:"text-muted-foreground",children:"\xb7"}),(0,r.jsx)(o(),{href:(0,p.ZJ)("knowledge"),className:"text-sm text-primary hover:underline",children:"→ ADR-051 (EDM + DiffDock + GFlowNet)"})]})]})}},66349:(e,t,i)=>{"use strict";i.d(t,{l:()=>_});var r=i(95155),n=i(12115),a=i(80642),s=i(39430),o=i(89239),l=i(45160),d=i(6296),c=i(12651),m=i(13545),h=i(20232),p=i(10762);let u=null,f="0.26.2",x=`https://cdn.jsdelivr.net/pyodide/v${f}/full/`;async function g(){return u||(u=(async()=>(await new Promise((e,t)=>{if(window.loadPyodide)return void e();let i=document.createElement("script");i.src=`${x}pyodide.js`,i.onload=()=>e(),i.onerror=()=>t(Error("Failed to load Pyodide bootstrap")),document.head.appendChild(i)}),await window.loadPyodide({indexURL:x})))().catch(e=>{throw u=null,e}))}function _({code:e,buttonLabel:t="Run in browser",preamble:i,compact:u=!1,onOutput:x,hideTextOutput:_=!1}){let[b,v]=(0,n.useState)("idle"),[y,w]=(0,n.useState)(""),[j,D]=(0,n.useState)(null),[N,k]=(0,n.useState)(null),T=(0,n.useRef)(null),A=(0,n.useCallback)(async()=>{v("loading"),D(null),w("Loading Pyodide runtime (~10MB)…\nFirst run takes 5-10s on a typical connection.\nSubsequent runs are instant.\n");let t=performance.now();try{let r=await g(),n=Math.round(performance.now()-t);k(n);let a=[],s=e=>{a.push(e)};try{r.setStdout({batched:s}),r.setStderr({batched:s})}catch{try{r.setStdout(s),r.setStderr(s)}catch{}}let o=(i??"")+"\n"+e,l=[];if(/\bnumpy\b|\bnp\./.test(o)&&l.push("numpy"),/\bscipy\b|\bsp\./.test(o)&&l.push("scipy"),/\bsklearn\b|\bGradientBoosting\b|\bRandomForest\b|\btrain_test_split\b|\bKMeans\b|\bSVC\b|\bLogisticRegression\b/.test(o)&&l.push("scikit-learn"),/\bpandas\b|\bpd\./.test(o)&&l.push("pandas"),/\bpyarrow\b|\bpq\./.test(o)&&l.push("pyarrow"),l.length>0){w(e=>e+`
Loading packages: ${l.join(", ")}…
`);try{await r.loadPackage(l)}catch{}}v("running"),w(e=>e+`
Pyodide loaded in ${n}ms. Running analysis…

`),i&&await r.runPythonAsync(i),await r.runPythonAsync(e);let d=a.join("");w(e=>e+(d||"(no output)")),v("done"),x&&x(d)}catch(i){let e=i instanceof Error?i.message:String(i),t=e.includes("Failed to load Pyodide bootstrap")?"\n\nHint: check your internet connection — Pyodide loads from a CDN (jsdelivr.net). Click again to retry.":e.includes("NetworkError")||e.includes("Failed to fetch")?"\n\nHint: network error loading Pyodide. Check your connection and click again to retry.":"";D(e+t),v("error"),w(i=>i+`
Error: ${e}${t}`)}},[e,i,x]);return(0,n.useEffect)(()=>{T.current&&(T.current.scrollTop=T.current.scrollHeight)},[y]),(0,r.jsxs)("div",{className:`mt-3 ${u?"":"rounded-md border border-primary/30 bg-primary/3 p-3"}`,children:[(0,r.jsxs)("div",{className:"flex items-center gap-2",children:[(0,r.jsxs)(o.$,{size:u?"sm":"default",variant:"running"===b||"loading"===b?"outline":"error"===b?"destructive":"default",className:"gap-1.5",onClick:A,disabled:"loading"===b||"running"===b,children:["loading"===b||"running"===b?(0,r.jsx)(d.A,{className:"h-3.5 w-3.5 animate-spin"}):"done"===b?(0,r.jsx)(c.A,{className:"h-3.5 w-3.5"}):"error"===b?(0,r.jsx)(m.A,{className:"h-3.5 w-3.5"}):(0,r.jsx)(h.A,{className:"h-3.5 w-3.5"}),"error"===b?`Retry: ${t}`:"done"===b?`Re-run: ${t}`:t]}),!u&&(0,r.jsxs)(l.E,{variant:"outline",className:"text-[10px] gap-1",children:[(0,r.jsx)(p.A,{className:"h-2.5 w-2.5"}),"Pyodide v",f]}),null!==N&&"done"===b&&(0,r.jsxs)("span",{className:"text-[10px] text-muted-foreground",children:["Runtime: ",N,"ms load + execution"]})]}),(0,r.jsx)(a.N,{children:("idle"!==b||y)&&!_&&(0,r.jsx)(s.P.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},className:"mt-2",children:(0,r.jsx)("div",{ref:T,className:`rounded-md bg-[oklch(0.16_0.005_240)] text-[oklch(0.97_0.005_60)] p-2.5 text-[11px] font-mono leading-relaxed overflow-x-auto code-scroll max-h-64 overflow-y-auto ${j?"border border-rose-500/40":"border border-emerald-500/30"}`,children:(0,r.jsx)("pre",{className:"whitespace-pre-wrap",children:y})})})})]})}},87715:(e,t,i)=>{Promise.resolve().then(i.bind(i,27555))},89239:(e,t,i)=>{"use strict";i.d(t,{$:()=>l});var r=i(95155);i(12115);var n=i(42442),a=i(18460),s=i(40980);let o=(0,a.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",destructive:"bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9"}},defaultVariants:{variant:"default",size:"default"}});function l({className:e,variant:t,size:i,asChild:a=!1,...l}){let d=a?n.DX:"button";return(0,r.jsx)(d,{"data-slot":"button",className:(0,s.cn)(o({variant:t,size:i,className:e})),...l})}}},e=>{e.O(0,[6919,8500,9430,3493,9620,6722,3039,8441,3794,7358],()=>e(e.s=87715)),_N_E=e.O()}]);