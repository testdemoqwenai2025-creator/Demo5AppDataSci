(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5860],{10404:(e,t,s)=>{Promise.resolve().then(s.bind(s,13791))},13052:(e,t,s)=>{"use strict";s.d(t,{A:()=>a});let a=(0,s(6404).A)("waves",[["path",{d:"M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"knzxuh"}],["path",{d:"M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"2jd2cc"}],["path",{d:"M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"rd2r6e"}]])},13791:(e,t,s)=>{"use strict";s.d(t,{EnhancedSamplingPage:()=>C});var a=s(95155),i=s(12115),r=s(39430),n=s(98500),l=s.n(n),o=s(58381),c=s(27774),d=s(60508),m=s(92194),h=s(19776),p=s(66349),x=s(93697),g=s(85757),u=s(45160),f=s(13052),v=s(53961),y=s(90718),j=s(10762),b=s(14023),_=s(65576),T=s(44071),w=s(83036);let M=[{label:"Metadynamics",value:"V(s,t) = Σ W\xb7exp(-|s-s'|\xb2/2σ\xb2)",hint:"History-dependent bias fills free energy wells",deltaTone:"flat"},{label:"REMD swap",value:"P = min(1, exp(Δβ\xb7ΔE))",hint:"Metropolis criterion for temperature swaps",deltaTone:"flat"},{label:"MSM timescales",value:"τ_k = -τ/log(λ_k)",hint:"Eigenvalues of transition matrix give slow modes",deltaTone:"flat"},{label:"TICA",value:"C(τ) = ⟨x(t)\xb7x(t+τ)ᵀ⟩",hint:"Time-lagged covariance → slowest collective variables",deltaTone:"flat"}];function N(){let[e,t]=(0,i.useState)(0);return(0,i.useEffect)(()=>{let e=setInterval(()=>t(e=>(e+1)%5),1e3);return()=>clearInterval(e)},[]),(0,a.jsxs)("div",{className:"rounded-md border border-border/60 bg-card p-4",children:[(0,a.jsx)("style",{children:".fe-3d { perspective: 800px; } .fe-stage { transform: rotateX(20deg); transform-style: preserve-3d; }"}),(0,a.jsxs)("p",{className:"text-sm font-semibold mb-3 flex items-center gap-2",children:[(0,a.jsx)(f.A,{className:"h-4 w-4 text-primary"})," Enhanced sampling — free energy landscape exploration (loop)"," ",(0,a.jsx)("span",{className:"text-[10px] font-mono text-muted-foreground ml-auto",children:["1. Free energy landscape (valleys = states)","2. Metadynamics: bias fills wells","3. REMD: temperature scaling","4. MSM: transition matrix","5. TICA: slowest CVs discovered"][e]})]}),(0,a.jsx)("div",{className:"fe-3d",children:(0,a.jsx)("div",{className:"fe-stage flex justify-center",children:(0,a.jsxs)("svg",{width:"340",height:"180",viewBox:"0 0 340 180",children:[0===e&&(0,a.jsxs)(r.P.g,{initial:{opacity:0},animate:{opacity:1},children:[(0,a.jsx)("path",{d:"M20 120 Q60 40 100 90 T180 80 T260 100 T320 120",fill:"none",stroke:"oklch(0.55 0.16 250)",strokeWidth:"2"}),(0,a.jsx)("circle",{cx:"60",cy:"60",r:"6",fill:"oklch(0.6 0.15 75)"}),(0,a.jsx)("circle",{cx:"180",cy:"75",r:"6",fill:"oklch(0.6 0.15 75)"}),(0,a.jsx)("circle",{cx:"280",cy:"105",r:"6",fill:"oklch(0.6 0.15 75)"}),(0,a.jsx)("text",{x:"170",y:"150",textAnchor:"middle",fontSize:"9",fill:"var(--muted-foreground)",children:"Valleys = stable states, peaks = barriers"})]}),1===e&&(0,a.jsxs)(r.P.g,{initial:{opacity:0},animate:{opacity:1},children:[(0,a.jsx)("path",{d:"M20 120 Q60 40 100 90 T180 80 T260 100 T320 120",fill:"none",stroke:"oklch(0.55 0.16 250)",strokeWidth:"1.5"}),[60,180,280].map((e,t)=>(0,a.jsx)(r.P.rect,{x:e-15,y:40+15*t,width:"30",height:"40",fill:"oklch(0.6 0.20 25 / 0.3)",stroke:"oklch(0.6 0.20 25)",strokeWidth:"1",initial:{opacity:0},animate:{opacity:.3+.2*t}},t)),(0,a.jsx)("text",{x:"170",y:"150",textAnchor:"middle",fontSize:"9",fill:"oklch(0.6 0.20 25)",children:"Bias potential fills wells"})]}),2===e&&(0,a.jsxs)(r.P.g,{initial:{opacity:0},animate:{opacity:1},children:[[0,1,2,3].map(e=>(0,a.jsx)(r.P.line,{x1:40+80*e,y1:40,x2:40+80*e,y2:140,stroke:0===e?"oklch(0.55 0.16 250)":3===e?"oklch(0.6 0.20 25)":"var(--muted)",strokeWidth:"2"},e)),[0,1,2].map(e=>(0,a.jsx)(r.P.path,{d:`M${40+80*e} 50 Q${40+(e+1)*80} ${30+20*e} ${40+(e+1)*80} 50`,fill:"none",stroke:"oklch(0.55 0.16 165)",strokeWidth:"1.5",strokeDasharray:"3 2",initial:{opacity:0},animate:{opacity:1},transition:{delay:.2*e}},e)),(0,a.jsx)("text",{x:"170",y:"150",textAnchor:"middle",fontSize:"9",fill:"oklch(0.55 0.16 165)",children:"Swaps between temperature replicas"})]}),3===e&&(0,a.jsxs)(r.P.g,{initial:{opacity:0},animate:{opacity:1},children:[[0,1,2,3].map(e=>(0,a.jsx)("g",{children:[0,1,2,3].map(t=>(0,a.jsx)("rect",{x:60+50*t,y:20+35*e,width:"45",height:"30",fill:`oklch(0.55 0.16 250 / ${.1+.6*[[.8,.1,.05,.02],[.1,.7,.15,.05],[.05,.15,.65,.1],[.02,.05,.1,.83]][e][t]})`,stroke:"var(--border)",strokeWidth:"0.5"},t))},e)),(0,a.jsx)("text",{x:"170",y:"170",textAnchor:"middle",fontSize:"9",fill:"var(--chart-2)",children:"Transition matrix T(τ)"})]}),4===e&&(0,a.jsxs)(r.P.g,{initial:{opacity:0},animate:{opacity:1},children:[(0,a.jsx)("text",{x:"170",y:"40",textAnchor:"middle",fontSize:"10",fill:"var(--primary)",fontWeight:"bold",children:"TICA eigenvalues"}),[["λ₁",.9],["λ₂",.7],["λ₃",.3],["λ₄",.1]].map(([e,t],s)=>(0,a.jsxs)("g",{children:[(0,a.jsx)("text",{x:60+70*s,y:"70",textAnchor:"middle",fontSize:"9",fill:"var(--muted-foreground)",children:e}),(0,a.jsx)(r.P.rect,{x:50+70*s,y:"80",width:"40",height:60*t,fill:t>.5?"oklch(0.55 0.16 250)":"oklch(0.55 0.16 165)",initial:{height:0},animate:{height:60*t}},s)]},s)),(0,a.jsx)("text",{x:"170",y:"160",textAnchor:"middle",fontSize:"9",fill:"var(--muted-foreground)",children:"Slow modes (large λ) = rare events"})]})]})})}),(0,a.jsx)("p",{className:"text-[10px] text-muted-foreground text-center mt-3",children:"Phase 1: energy landscape. Phase 2: metadynamics fills wells. Phase 3: REMD temperature replicas. Phase 4: MSM transition matrix. Phase 5: TICA eigenvalues reveal slowest modes."})]})}let k=`# Enhanced Sampling — metadynamics + REMD + MSM + TICA (Pyodide)
import math, random

# ============================================================
# 1. Metadynamics — history-dependent bias
# ============================================================
# V(s,t) = Σ_{t'<t} W\xb7exp(-|s-s(t')|\xb2/(2σ\xb2))
# Well-tempered: W(t) = W₀\xb7exp(-V(s,t)/(kT\xb7γ))
# The inverse of accumulated bias ≈ free energy surface

def metadynamics(n_steps, cv_range=(0,10), W=0.1, sigma=0.5, gamma=10, kT=1.0):
    """Simulate well-tempered metadynamics."""
    hills = []
    trajectory = []
    s = random.uniform(*cv_range)
    for t in range(n_steps):
        # Add hill at current position
        hills.append((s, W))
        # Compute total bias
        V_bias = sum(w * math.exp(-(s-s_h)**2/(2*sigma**2)) for s_h, w in hills)
        # Well-tempered: reduce hill height
        W = 0.1 * math.exp(-V_bias/(kT*gamma))
        # Move (biased dynamics)
        force = -sum(w * (-(s-s_h)/sigma**2) * math.exp(-(s-s_h)**2/(2*sigma**2)) for s_h, w in hills)
        s += force * 0.01 + random.gauss(0, 0.1)
        s = max(cv_range[0], min(cv_range[1], s))
        trajectory.append(s)
    return hills, trajectory

print("=" * 60)
print("Metadynamics — Well-Tempered Bias")
print("=" * 60)
random.seed(42)
hills, traj = metadynamics(500, W=0.05, sigma=0.8, gamma=5)
# Reconstruct free energy
print(f"\\nReconstructed free energy surface (sample points):")
for s in [1.0, 3.0, 5.0, 7.0, 9.0]:
    V = sum(w * math.exp(-(s-s_h)**2/(2*0.8**2)) for s_h, w in hills)
    print(f"  s={s:.1f}: F(s) ≈ {-V:.3f}")

# ============================================================
# 2. REMD — Replica Exchange
# ============================================================
def remd_swap(energy_low, energy_high, T_low, T_high):
    """Metropolis swap criterion: P = min(1, exp(Δβ\xb7ΔE))"""
    beta_low = 1.0/T_low
    beta_high = 1.0/T_high
    delta_beta = beta_low - beta_high
    delta_E = energy_low - energy_high
    log_prob = delta_beta * delta_E
    return min(1.0, math.exp(log_prob))

print(f"\\n{'=' * 60}")
print("REMD — Replica Exchange")
print("=" * 60)
temperatures = [300, 350, 400, 450, 500]
energies = [-50, -45, -40, -38, -35]
print(f"\\nTemperatures: {temperatures}")
print(f"Energies:     {energies}")
print(f"\\nSwap probabilities (adjacent pairs):")
for i in range(len(temperatures)-1):
    p = remd_swap(energies[i], energies[i+1], temperatures[i], temperatures[i+1])
    print(f"  T={temperatures[i]} ↔ T={temperatures[i+1]}: P={p:.3f}")

# ============================================================
# 3. MSM — Markov State Models
# ============================================================
# T_ij(τ) = P(x(t+τ)∈j | x(t)∈i)
# Eigenvalues λ_k give timescales: τ_k = -τ/log(λ_k)

print(f"\\n{'=' * 60}")
print("MSM — Markov State Model")
print("=" * 60)

# Simple 4-state transition matrix
T = [
    [0.90, 0.08, 0.01, 0.01],
    [0.10, 0.80, 0.08, 0.02],
    [0.01, 0.10, 0.70, 0.19],
    [0.01, 0.02, 0.15, 0.82],
]

print(f"\\nTransition matrix T(τ=1ns):")
for i in range(4):
    print(f"  [{', '.join(f'{T[i][j]:.2f}' for j in range(4))}]")

# Eigenvalues (simplified — just iterate power method)
def power_iteration(T, n_iter=100):
    n = len(T)
    v = [1.0/n]*n
    for _ in range(n_iter):
        v_new = [sum(T[i][j]*v[j] for j in range(n)) for i in range(n)]
        norm = sum(v_new)
        v = [x/norm for x in v_new]
    # Rayleigh quotient for eigenvalue
    lambda_1 = sum(v[i]*sum(T[i][j]*v[j] for j in range(n)) for i in range(n)) / sum(v[i]*v[i] for i in range(n))
    return lambda_1, v

lambda_1, stat_dist = power_iteration(T)
print(f"\\nStationary distribution: {[f'{p:.3f}' for p in stat_dist]}")
print(f"Largest eigenvalue: λ₁ = {lambda_1:.4f}")
print(f"  → timescale τ₁ = ∞ (stationary)")

# ============================================================
# 4. TICA — Time-lagged Independent Component Analysis
# ============================================================
# C(τ) = ⟨x(t)\xb7x(t+τ)ᵀ⟩ — time-lagged covariance
# Eigenvectors of C(τ) = slowest collective variables
print(f"\\n{'=' * 60}")
print("TICA — Time-lagged ICA")
print("=" * 60)
print("""
TICA finds the slowest collective variables by:
1. Compute time-lagged covariance: C(τ) = ⟨x(t)\xb7x(t+τ)ᵀ⟩
2. Solve generalized eigenvalue: C(τ)v = λ\xb7C(0)v
3. Eigenvectors with largest λ = slowest CVs
4. Project MD trajectory onto top-k eigenvectors

The key insight: the slowest modes dominate the dynamics.
TICA discovers them automatically — no manual CV selection needed.

Connection to MSMs: TICA eigenvectors define the MSM state space.
The top-k TICA components discretise into N microstates.
MSM transition matrix estimated on these microstates.
""")
print("=" * 60)`,S=`import torch
import torch.nn as nn
import torch.nn.functional as F
import math
from typing import Dict, Tuple, List, Optional

# ============================================================
# 1. Neural ODE — continuous-depth dynamics (Chen 2018)
# ============================================================

class NeuralODE(nn.Module):
    """Neural ODE (Chen et al. 2018, NeurIPS).
    
    Learns continuous dynamics: dx/dt = f_θ(x, t)
    
    The ODE is solved via adjoint method (memory-efficient backprop):
    - Forward: ODE solver (RK4)
    - Backward: adjoint ODE (no need to store intermediate states)
    
    For MD: learn the effective dynamics from trajectory data.
    The learned vector field IS the effective force field.
    """
    def __init__(self, input_dim: int = 3, hidden_dim: int = 64):
        super().__init__()
        self.input_dim = input_dim
        # Vector field: f_θ(x, t) → dx/dt
        self.net = nn.Sequential(
            nn.Linear(input_dim + 1, hidden_dim),  # +1 for time
            nn.Tanh(),
            nn.Linear(hidden_dim, hidden_dim),
            nn.Tanh(),
            nn.Linear(hidden_dim, input_dim),
        )
    
    def forward(self, t: torch.Tensor, x: torch.Tensor) -> torch.Tensor:
        """Compute dx/dt = f_θ(x, t).
        
        Args:
            t: scalar time
            x: (B, input_dim) state
        
        Returns: (B, input_dim) time derivative
        """
        t_batch = t.expand(x.shape[0], 1)
        return self.net(torch.cat([x, t_batch], dim=-1))
    
    def integrate(self, x0: torch.Tensor, t_span: Tuple[float, float],
                  n_steps: int = 50) -> torch.Tensor:
        """Integrate ODE via RK4.
        
        Args:
            x0: (B, input_dim) initial state
            t_span: (t_start, t_end)
            n_steps: number of RK4 steps
        
        Returns: (B, n_steps+1, input_dim) trajectory
        """
        t_start, t_end = t_span
        dt = (t_end - t_start) / n_steps
        trajectory = [x0]
        x = x0
        for i in range(n_steps):
            t = torch.tensor(t_start + i * dt, device=x0.device)
            # RK4
            k1 = self.forward(t, x)
            k2 = self.forward(t + dt/2, x + dt/2 * k1)
            k3 = self.forward(t + dt/2, x + dt/2 * k2)
            k4 = self.forward(t + dt, x + dt * k3)
            x = x + dt/6 * (k1 + 2*k2 + 2*k3 + k4)
            trajectory.append(x)
        return torch.stack(trajectory, dim=1)
    
    def loss(self, x0: torch.Tensor, x_true: torch.Tensor,
             t_span: Tuple[float, float]) -> torch.Tensor:
        """MSE loss between predicted and true trajectory."""
        pred = self.integrate(x0, t_span, n_steps=x_true.shape[1]-1)
        return F.mse_loss(pred, x_true)

# ============================================================
# 2. Metadynamics simulator
# ============================================================

class MetadynamicsSimulator:
    """Well-tempered metadynamics simulator.
    
    V_bias(s, t) = Σ_{t'<t} W(t') \xb7 exp(-|s-s(t')|\xb2/(2σ\xb2))
    
    Free energy: F(s) ≈ -V_bias(s, t→∞) / (1 - 1/γ)
    """
    def __init__(self, cv_dim: int = 1, sigma: float = 0.5,
                 gamma: float = 10.0, kT: float = 1.0, W0: float = 0.05):
        self.sigma = sigma
        self.gamma = gamma
        self.kT = kT
        self.W0 = W0
        self.hills = []  # list of (cv_position, height)
    
    def add_hill(self, cv: torch.Tensor):
        """Add a Gaussian hill at current CV position."""
        V_current = self.compute_bias(cv)
        W = self.W0 * torch.exp(-V_current / (self.kT * self.gamma))
        self.hills.append((cv.detach().clone(), W))
    
    def compute_bias(self, cv: torch.Tensor) -> torch.Tensor:
        """Compute total bias at CV position."""
        if not self.hills:
            return torch.zeros_like(cv)
        bias = torch.zeros_like(cv)
        for h_cv, W in self.hills:
            dist = (cv - h_cv).pow(2).sum() if cv.dim() > 0 else (cv - h_cv).pow(2)
            bias = bias + W * torch.exp(-dist / (2 * self.sigma**2))
        return bias
    
    def compute_force(self, cv: torch.Tensor) -> torch.Tensor:
        """Compute bias force: F = -dV/ds."""
        cv.requires_grad_(True)
        bias = self.compute_bias(cv)
        force = -torch.autograd.grad(bias.sum(), cv, create_graph=True)[0]
        return force.detach()
    
    def free_energy(self, cv_values: torch.Tensor) -> torch.Tensor:
        """Reconstruct free energy from accumulated bias.
        
        F(s) ≈ -V_bias(s) / (1 - 1/γ)
        """
        bias = torch.tensor([self.compute_bias(cv.unsqueeze(0) if cv.dim()==0 else cv).item() 
                            for cv in cv_values])
        return -bias / (1 - 1/self.gamma)

# ============================================================
# 3. MSM estimator
# ============================================================

class MSMEstimator:
    """Markov State Model estimator.
    
    T_ij(τ) = P(x(t+τ) ∈ j | x(t) ∈ i)
    
    Eigenvalues λ_k give implied timescales: τ_k = -τ / log(λ_k)
    """
    def __init__(self, n_states: int = 10, lag_time: float = 1.0):
        self.n_states = n_states
        self.lag_time = lag_time
        self.transition_matrix = None
    
    def fit(self, state_trajectory: torch.Tensor) -> torch.Tensor:
        """Estimate transition matrix from state trajectory.
        
        Args:
            state_trajectory: (T,) integer state assignments
        
        Returns: (n_states, n_states) transition matrix
        """
        T = torch.zeros(self.n_states, self.n_states)
        for t in range(len(state_trajectory) - 1):
            i = state_trajectory[t].item()
            j = state_trajectory[t + 1].item()
            T[i, j] += 1
        # Normalize rows
        row_sums = T.sum(dim=1, keepdim=True)
        row_sums = row_sums.clamp(min=1)
        T = T / row_sums
        self.transition_matrix = T
        return T
    
    def implied_timescales(self) -> torch.Tensor:
        """Compute implied timescales from eigenvalues.
        
        τ_k = -lag_time / log(λ_k)
        """
        if self.transition_matrix is None:
            return torch.tensor([])
        eigenvalues = torch.linalg.eigvals(self.transition_matrix)
        # Sort by magnitude (descending)
        eigenvalues = eigenvalues[eigenvalues.abs().argsort(descending=True)]
        # Timescales (skip λ=1, which is stationary)
        timescales = []
        for i, lam in enumerate(eigenvalues[1:]):  # skip first (λ=1)
            if lam.abs() > 0:
                ts = -self.lag_time / torch.log(lam.abs())
                timescales.append(ts.real)
        return torch.tensor(timescales)
    
    def stationary_distribution(self) -> torch.Tensor:
        """Compute stationary distribution (left eigenvector of λ=1)."""
        if self.transition_matrix is None:
            return torch.tensor([])
        # Power iteration
        n = self.transition_matrix.shape[0]
        v = torch.ones(n) / n
        for _ in range(1000):
            v = v @ self.transition_matrix
            v = v / v.sum()
        return v

# ============================================================
# 4. TICA — Time-lagged Independent Component Analysis
# ============================================================

class TICA:
    """Time-lagged Independent Component Analysis.
    
    Finds the slowest collective variables by solving:
    C(τ) \xb7 v = λ \xb7 C(0) \xb7 v
    
    where C(τ) = ⟨x(t)\xb7x(t+τ)ᵀ⟩ is the time-lagged covariance.
    """
    def __init__(self, lag_time: int = 10, n_components: int = 2):
        self.lag_time = lag_time
        self.n_components = n_components
        self.eigenvectors = None
        self.eigenvalues = None
    
    def fit(self, trajectory: torch.Tensor) -> Tuple[torch.Tensor, torch.Tensor]:
        """Fit TICA from trajectory.
        
        Args:
            trajectory: (T, D) — D features per timestep
        
        Returns: (eigenvalues, eigenvectors) — sorted by eigenvalue descending
        """
        T, D = trajectory.shape
        tau = self.lag_time
        
        # Compute C(0) and C(τ)
        X = trajectory[:T-tau]  # (T-τ, D)
        Y = trajectory[tau:]     # (T-τ, D)
        
        # Time-lagged covariance: C(τ) = (1/(T-τ)) \xb7 X^T \xb7 Y
        C_tau = (X.T @ Y) / (T - tau)
        # Instantaneous covariance: C(0) = (1/(T-τ)) \xb7 X^T \xb7 X
        C_0 = (X.T @ X) / (T - tau)
        
        # Generalized eigenvalue: C(τ)\xb7v = λ\xb7C(0)\xb7v
        # → C_0^{-1} \xb7 C_τ \xb7 v = λ\xb7v
        C_0_inv = torch.linalg.inv(C_0 + 1e-6 * torch.eye(D))
        M = C_0_inv @ C_tau
        
        eigenvalues, eigenvectors = torch.linalg.eig(M)
        # Sort by eigenvalue (descending — largest = slowest)
        idx = eigenvalues.abs().argsort(descending=True)
        eigenvalues = eigenvalues[idx].real
        eigenvectors = eigenvectors[:, idx].real
        
        self.eigenvalues = eigenvalues[:self.n_components]
        self.eigenvectors = eigenvectors[:, :self.n_components]
        
        return self.eigenvalues, self.eigenvectors
    
    def transform(self, trajectory: torch.Tensor) -> torch.Tensor:
        """Project trajectory onto TICA components.
        
        Args:
            trajectory: (T, D)
        
        Returns: (T, n_components) — projected onto slowest CVs
        """
        if self.eigenvectors is None:
            raise ValueError("Must call fit() first")
        return trajectory @ self.eigenvectors

# Sanity check
if __name__ == "__main__":
    # Neural ODE
    node = NeuralODE(input_dim=3, hidden_dim=32)
    x0 = torch.randn(4, 3)
    traj = node.integrate(x0, (0, 10), n_steps=20)
    print(f"Neural ODE: trajectory {tuple(traj.shape)}")
    print(f"  Params: {sum(p.numel() for p in node.parameters()):,}")
    
    # Metadynamics
    meta = MetadynamicsSimulator(cv_dim=1, sigma=0.5, gamma=5.0)
    for _ in range(100):
        cv = torch.randn(1) * 3
        meta.add_hill(cv)
    cv_grid = torch.linspace(-5, 5, 20)
    F = meta.free_energy(cv_grid)
    print(f"\\nMetadynamics: {len(meta.hills)} hills deposited")
    print(f"  Free energy range: [{F.min():.2f}, {F.max():.2f}]")
    
    # MSM
    states = torch.randint(0, 5, (1000,))
    msm = MSMEstimator(n_states=5, lag_time=1.0)
    T = msm.fit(states)
    ts = msm.implied_timescales()
    sd = msm.stationary_distribution()
    print(f"\\nMSM: transition matrix {tuple(T.shape)}")
    print(f"  Implied timescales: {ts[:3].tolist()}")
    print(f"  Stationary dist: {sd.tolist()}")
    
    # TICA
    traj = torch.randn(500, 6)
    tica = TICA(lag_time=10, n_components=2)
    evals, evecs = tica.fit(traj)
    projected = tica.transform(traj)
    print(f"\\nTICA: eigenvalues {evals.tolist()}")
    print(f"  Eigenvectors: {tuple(evecs.shape)}")
    print(f"  Projected: {tuple(projected.shape)}")`;function C(){return(0,a.jsxs)("div",{className:"space-y-8",children:[(0,a.jsx)(o.zY,{eyebrow:"Enhanced Sampling \xb7 Metadynamics \xb7 REMD \xb7 MSMs \xb7 TICA \xb7 Neural ODEs",title:"Enhanced Sampling & Free Energy — Beyond μs-Timescale MD",description:"The timescale problem of molecular dynamics: biological processes occur on μs-ms timescales but MD can only reach μs. Five enhanced sampling methods solve this: (1) Metadynamics — history-dependent bias V(s,t)=Σ W\xb7exp(-|s-s'|\xb2/2σ\xb2) fills free energy wells; (2) REMD — N replicas at different temperatures, Metropolis swaps P=min(1,exp(Δβ\xb7ΔE)); (3) MSMs — transition matrix T_ij(τ), eigenvalues give timescales τ_k=-τ/log(λ_k); (4) TICA — time-lagged covariance C(τ)=⟨x(t)\xb7x(t+τ)ᵀ⟩ finds slowest collective variables; (5) Neural ODEs — continuous-depth models learn dynamics from MD trajectories. With 4 AI illustrations + looping free energy 'short'. Low-level PyTorch: NeuralODE, MetadynamicsSimulator, MSMEstimator, TICA.",right:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(u.E,{variant:"outline",className:"gap-1.5",children:[(0,a.jsx)(f.A,{className:"h-3 w-3"})," Metadynamics + REMD + MSM"]}),(0,a.jsxs)(u.E,{variant:"outline",className:"gap-1.5",children:[(0,a.jsx)(v.A,{className:"h-3 w-3"})," Pyodide"]})]})}),(0,a.jsx)("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-3",children:M.map(e=>(0,a.jsx)(o.nO,{label:e.label,value:e.value,hint:e.hint,deltaTone:e.deltaTone},e.label))}),(0,a.jsx)(o.iv,{title:"AI-generated illustrations — click to expand",icon:(0,a.jsx)(f.A,{className:"h-5 w-5"}),badge:"AI gallery",children:(0,a.jsxs)("div",{className:"grid md:grid-cols-2 gap-4",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)(x.j,{src:"/images/enhanced-sampling/metadynamics.png",alt:"Metadynamics",caption:"Metadynamics — 3D free energy surface with bias potential (red) filling the valleys (blue). The history-dependent Gaussian hills accumulate in energy minima, and the inverse of the accumulated bias approximates the free energy surface. Laio & Parrinello 2003, PNAS."}),(0,a.jsx)("p",{className:"text-[11px] text-muted-foreground mt-2 text-center",children:"Metadynamics — bias fills free energy wells"})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)(x.j,{src:"/images/enhanced-sampling/replica-exchange.png",alt:"Replica Exchange MD",caption:"Replica Exchange MD (REMD) — multiple temperature replicas with configuration swaps. High-T replicas explore broadly; low-T replicas refine. The Metropolis swap criterion P=min(1,exp(Δβ\xb7ΔE)) ensures detailed balance. Sugita & Okamoto 1999."}),(0,a.jsx)("p",{className:"text-[11px] text-muted-foreground mt-2 text-center",children:"REMD — temperature ladder with swaps"})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)(x.j,{src:"/images/enhanced-sampling/markov-state-model.png",alt:"Markov State Model",caption:"Markov State Model — network of conformational states (nodes) with transition probabilities (weighted edges). The transition matrix T_ij(τ) captures the kinetics. Eigenvalues λ_k give implied timescales τ_k=-τ/log(λ_k). Pande et al. 2010, Folding@home."}),(0,a.jsx)("p",{className:"text-[11px] text-muted-foreground mt-2 text-center",children:"MSM — states + transitions = kinetics"})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)(x.j,{src:"/images/enhanced-sampling/neural-ode.png",alt:"Neural ODE",caption:"Neural ODE — continuous-depth model showing learned vector field (arrows) and trajectory integration. The model learns dx/dt = f_θ(x,t) from MD trajectory data. Chen et al. 2018, NeurIPS. The adjoint method enables memory-efficient backprop through the ODE solver."}),(0,a.jsx)("p",{className:"text-[11px] text-muted-foreground mt-2 text-center",children:"Neural ODE — learned continuous dynamics"})]})]})}),(0,a.jsx)(o.iv,{title:"Free energy landscape short — metadynamics → REMD → MSM → TICA (loop)",icon:(0,a.jsx)(f.A,{className:"h-5 w-5"}),badge:"short",children:(0,a.jsx)(N,{})}),(0,a.jsx)(o.iv,{title:"Metadynamics math — history-dependent bias",description:"Well-tempered metadynamics deposits Gaussian hills at visited positions in collective variable (CV) space. The accumulated bias V(s,t) = Σ W(t')\xb7exp(-|s-s(t')|\xb2/2σ\xb2) fills the free energy wells. The well-tempered variant reduces hill height as bias accumulates: W(t) = W₀\xb7exp(-V(s,t)/(kT\xb7γ)). In the long-time limit, the free energy surface is recovered: F(s) ≈ -V_bias(s)/(1-1/γ).",icon:(0,a.jsx)(y.A,{className:"h-5 w-5"}),badge:"mathematics",children:(0,a.jsxs)("div",{className:"space-y-3",children:[(0,a.jsxs)("div",{className:"rounded-md border border-primary/30 bg-primary/5 p-3 text-center",children:[(0,a.jsx)("p",{className:"font-mono text-sm text-primary",children:"V(s,t) = Σ W\xb7exp(-|s-s(t')|\xb2/(2σ\xb2)) \xa0\xb7\xa0 W(t) = W₀\xb7exp(-V/(kT\xb7γ)) \xa0\xb7\xa0 F(s) ≈ -V/(1-1/γ)"}),(0,a.jsx)("p",{className:"text-[11px] text-muted-foreground mt-1",children:"History-dependent bias fills wells. Well-tempered: height decreases as bias grows. Free energy ≈ inverse of accumulated bias (scaled by γ)."})]}),(0,a.jsxs)("div",{className:"grid md:grid-cols-3 gap-2 text-xs",children:[(0,a.jsxs)("div",{className:"rounded-md border border-emerald-500/40 bg-emerald-500/5 p-2.5",children:[(0,a.jsx)("p",{className:"font-semibold text-sm text-emerald-600 dark:text-emerald-400 mb-1",children:"Hills"}),(0,a.jsx)("p",{className:"font-mono text-[11px]",children:"Gaussian bumps at visited positions"}),(0,a.jsx)("p",{className:"text-muted-foreground text-[11px] mt-1",children:"Each hill discourages revisiting the same region. Hills accumulate in wells (minima)."})]}),(0,a.jsxs)("div",{className:"rounded-md border border-amber-500/40 bg-amber-500/5 p-2.5",children:[(0,a.jsx)("p",{className:"font-semibold text-sm text-amber-600 dark:text-amber-400 mb-1",children:"Well-tempered"}),(0,a.jsx)("p",{className:"font-mono text-[11px]",children:"W(t) = W₀\xb7exp(-V/(kT\xb7γ))"}),(0,a.jsx)("p",{className:"text-muted-foreground text-[11px] mt-1",children:"Hill height decreases exponentially with accumulated bias. Prevents over-filling. γ = bias factor (10-50 typical)."})]}),(0,a.jsxs)("div",{className:"rounded-md border border-violet-500/40 bg-violet-500/5 p-2.5",children:[(0,a.jsx)("p",{className:"font-semibold text-sm text-violet-600 dark:text-violet-400 mb-1",children:"Free energy"}),(0,a.jsx)("p",{className:"font-mono text-[11px]",children:"F(s) ≈ -V_bias(s)/(1-1/γ)"}),(0,a.jsx)("p",{className:"text-muted-foreground text-[11px] mt-1",children:"Inverse of accumulated bias = free energy surface. Convergence: hours (vs years for brute-force MD)."})]})]})]})}),(0,a.jsx)(o.iv,{title:"REMD math — temperature-accelerated exploration",description:"Replica Exchange MD runs N replicas at different temperatures T₁ < T₂ < ... < Tₙ. Periodically, adjacent replicas attempt to swap configurations via the Metropolis criterion P_swap = min(1, exp(Δβ\xb7ΔE)) where Δβ = 1/T_i - 1/T_j and ΔE = E_i - E_j. High-T replicas explore broadly (surmount energy barriers); low-T replicas refine (sample important minima). The swaps transfer high-T exploration to low-T without changing the equilibrium distribution.",icon:(0,a.jsx)(y.A,{className:"h-5 w-5"}),badge:"mathematics",children:(0,a.jsx)("div",{className:"space-y-3",children:(0,a.jsxs)("div",{className:"rounded-md border border-primary/30 bg-primary/5 p-3 text-center",children:[(0,a.jsx)("p",{className:"font-mono text-sm text-primary",children:"P_swap = min(1, exp((1/T_i - 1/T_j)\xb7(E_i - E_j)))"}),(0,a.jsx)("p",{className:"text-[11px] text-muted-foreground mt-1",children:"Metropolis swap criterion. Swaps accepted when the low-T replica has higher energy than the high-T (likely to benefit from swap)."})]})})}),(0,a.jsx)(o.iv,{title:"MSM math — kinetics from trajectories",description:"Markov State Models discretise conformational space into N microstates, compute the transition matrix T_ij(τ) = P(x(t+τ)∈j | x(t)∈i). The eigenvalues λ_k give implied timescales τ_k = -τ/log(λ_k) — the slowest modes correspond to rare events (conformational transitions, ligand binding). The stationary distribution π (left eigenvector of λ=1) gives the equilibrium populations. MSMs extract kinetics from many short trajectories — no need for a single long one.",icon:(0,a.jsx)(y.A,{className:"h-5 w-5"}),badge:"mathematics",children:(0,a.jsx)("div",{className:"space-y-3",children:(0,a.jsxs)("div",{className:"rounded-md border border-primary/30 bg-primary/5 p-3 text-center",children:[(0,a.jsx)("p",{className:"font-mono text-sm text-primary",children:"T_ij(τ) = P(x(t+τ)∈j | x(t)∈i) \xa0\xb7\xa0 τ_k = -τ/log(λ_k) \xa0\xb7\xa0 π\xb7T = π"}),(0,a.jsx)("p",{className:"text-[11px] text-muted-foreground mt-1",children:"Transition matrix → eigenvalues → timescales. Stationary distribution π satisfies π\xb7T = π (left eigenvector of λ=1)."})]})})}),(0,a.jsx)(o.iv,{title:"TICA + Neural ODE — discovering slow modes",description:"TICA (Time-lagged ICA) finds the slowest collective variables by solving the generalized eigenvalue problem C(τ)\xb7v = λ\xb7C(0)\xb7v where C(τ) = ⟨x(t)\xb7x(t+τ)ᵀ⟩. The eigenvectors with largest eigenvalues are the slowest CVs — no manual selection needed. Neural ODEs (Chen 2018) learn continuous dynamics dx/dt = f_θ(x,t) from trajectory data via the adjoint method, providing a smooth, differentiable model of the dynamics.",icon:(0,a.jsx)(y.A,{className:"h-5 w-5"}),badge:"mathematics",children:(0,a.jsx)("div",{className:"space-y-3",children:(0,a.jsxs)("div",{className:"rounded-md border border-primary/30 bg-primary/5 p-3 text-center",children:[(0,a.jsx)("p",{className:"font-mono text-sm text-primary",children:"C(τ)\xb7v = λ\xb7C(0)\xb7v \xa0(TICA) \xa0\xb7\xa0 dx/dt = f_θ(x,t) \xa0(Neural ODE)"}),(0,a.jsx)("p",{className:"text-[11px] text-muted-foreground mt-1",children:"TICA: time-lagged covariance eigenvectors = slowest CVs. Neural ODE: learned vector field = effective dynamics."})]})})}),(0,a.jsx)(o.iv,{title:"Try it: Metadynamics + REMD + MSM + TICA (Pyodide)",icon:(0,a.jsx)(j.A,{className:"h-5 w-5"}),badge:"executable",children:(0,a.jsx)(p.l,{code:k,buttonLabel:"Run enhanced sampling (Pyodide)"})}),(0,a.jsx)(o.iv,{title:"Modern papers — metadynamics, REMD, MSMs, Neural ODEs",icon:(0,a.jsx)(b.A,{className:"h-5 w-5"}),children:(0,a.jsxs)("div",{className:"space-y-3 text-sm text-muted-foreground leading-relaxed",children:[(0,a.jsxs)("p",{children:[(0,a.jsx)("strong",{className:"text-foreground/80",children:"Metadynamics (Laio & Parrinello 2003, PNAS):"})," ","History-dependent bias potential for free energy surface mapping. Well-tempered variant (Barducci 2008) prevents over-filling. Converges in hours (vs years for brute-force MD). Nobel-adjacent: Parrinello won the 2017 Drexel Prize for this work."]}),(0,a.jsxs)("p",{children:[(0,a.jsx)("strong",{className:"text-foreground/80",children:"REMD (Sugita & Okamoto 1999, Chemical Physics Letters):"})," ","Parallel tempering — N replicas at different temperatures, Metropolis swaps. The standard method for enhanced sampling of protein folding. Folding@home uses REMD at massive scale."]}),(0,a.jsxs)("p",{children:[(0,a.jsx)("strong",{className:"text-foreground/80",children:"MSMs (Pande et al. 2010, Annual Review of Biophysics):"})," ","Markov State Models for kinetics from short MD trajectories. The Folding@home infrastructure (Pande Lab, Stanford) uses MSMs to simulate ms-timescale folding from μs-scale trajectories. 35,000 CPU cores distributed."]}),(0,a.jsxs)("p",{children:[(0,a.jsx)("strong",{className:"text-foreground/80",children:"Neural ODEs (Chen et al. 2018, NeurIPS best paper):"})," ","Continuous-depth neural networks via the adjoint method. For MD: learn effective dynamics from trajectory data. The adjoint method enables O(1) memory backprop through the ODE solver."]}),(0,a.jsxs)("p",{children:[(0,a.jsx)("strong",{className:"text-foreground/80",children:"TICA (P\xe9rez-Hern\xe1ndez et al. 2013, JCP):"})," ","Time-lagged Independent Component Analysis. Finds slowest collective variables automatically — no manual CV selection. Used as preprocessing for MSMs (TICA → discretise → MSM)."]})]})}),(0,a.jsx)(o.iv,{title:"Low-level PyTorch — NeuralODE, MetadynamicsSimulator, MSMEstimator, TICA",icon:(0,a.jsx)(_.A,{className:"h-5 w-5"}),badge:"low-level",children:(0,a.jsx)(h.N,{language:"python",filename:"enhanced_sampling.py",code:S})}),(0,a.jsx)(o.iv,{title:"My deeper thought: enhanced sampling IS importance sampling applied to physics",icon:(0,a.jsx)(T.A,{className:"h-5 w-5"}),badge:"Insight",children:(0,a.jsxs)("div",{className:"space-y-3 text-sm text-muted-foreground leading-relaxed",children:[(0,a.jsxs)("p",{children:[(0,a.jsx)("strong",{className:"text-foreground/80",children:"Metadynamics IS importance sampling with a learned proposal."})," ","The bias potential V(s,t) IS a proposal distribution that concentrates probability mass on under-sampled regions. The Gaussian hills are the 'replay buffer' — the system remembers where it's been and avoids re-visiting. This IS the same algorithmic structure as Thompson sampling (ADR-019 bandit): maintain a posterior over the free energy surface, sample from it to explore, update the posterior with each visit. The well-tempered variant IS annealed importance sampling — the temperature decreases as the bias grows, transitioning from exploration to exploitation. Metadynamics IS the molecular dynamics version of the bandit."]}),(0,a.jsxs)("p",{children:[(0,a.jsx)("strong",{className:"text-foreground/80",children:"MSMs IS spectral clustering applied to trajectory data."})," ",'The transition matrix T(τ) IS a stochastic matrix whose eigenvalues measure the slowest mixing modes. This IS the same math as PageRank (ADR-039 PPI networks): the eigenvector of λ=1 gives the stationary distribution (PageRank centrality). The implied timescales τ_k = -τ/log(λ_k) are the molecular analog of the "mixing time" in Markov chains — how long until the system reaches equilibrium. The connection to TICA: TICA finds the optimal basis for the MSM — the collective variables that diagonalise the transition matrix. The platform\'s pgvector (ADR-022) stores MSM state embeddings — the stationary distribution IS the embedding.']}),(0,a.jsxs)("p",{children:[(0,a.jsx)("strong",{className:"text-foreground/80",children:"Neural ODEs IS continuous normalising flows applied to dynamics."})," ","The vector field f_θ(x,t) IS a flow model — the same mathematical structure as normalising flows (Rezende 2015) and continuous-depth GNNs. For MD, the learned flow captures the effective dynamics — the coarse-grained force field that reproduces the slow modes. This connects to the platform's molecular modelling stack: ADR-036 (AMBER — hand-crafted force field) → ADR-049 (MACE — learned force field) → ADR-050 (Neural ODE — learned dynamics at the trajectory level). The progression: from explicit physics (AMBER) to learned potentials (MACE) to learned dynamics (Neural ODE). Each level abstracts away more detail — AMBER tracks every atom, MACE learns the potential surface, Neural ODE learns the trajectory distribution. The platform IS a multi-scale dynamics hierarchy, each level compressed relative to the one below."]})]})}),(0,a.jsxs)(w.S,{pageTitle:"Enhanced Sampling",children:[(0,a.jsx)(w.P,{title:"Enhanced sampling IS the explore-exploit trade-off — and it's multi-armed bandit",connectedTo:"ADR-006 (RL agentic)",children:(0,a.jsx)("p",{children:"MD simulations get stuck in local minima (exploit). Enhanced sampling methods (metadynamics, replica exchange, umbrella sampling) push the simulation to explore new minima. This IS the explore-exploit trade-off from RL. Replica exchange (run N simulations at different temperatures, swap) IS the multi-armed bandit: high-T replicas explore, low-T replicas exploit. Thompson sampling IS Bayesian enhanced sampling. The math (explore vs exploit) IS the same."})}),(0,a.jsx)(w.P,{title:"Metadynamics IS adaptive biasing — and it's the right approach",connectedTo:"ADR-050 (fold-section architecture)",children:(0,a.jsx)("p",{children:"Metadynamics adds history-dependent biasing potentials to the simulation. As the system visits a region, the bias increases (pushing it away to explore new regions). This IS adaptive biasing — the bias LEARNS from the simulation's history. The math (adaptive bias + free energy reconstruction) IS the SAME as adaptive importance sampling in Monte Carlo. Metadynamics IS adaptive MC for molecular simulation."})}),(0,a.jsx)(w.P,{title:"Replica exchange IS parallel tempering — and it's the right parallelisation",connectedTo:"ADR-034 (ESM-2 + AlphaFold2)",children:(0,a.jsx)("p",{children:"Replica exchange runs N simulations at temperatures T1 < T2 < ... < TN. Periodically, adjacent replicas swap configurations (if the swap is thermodynamically favorable). High-T replicas cross energy barriers (explore); low-T replicas find local minima (exploit). The swap IS a Metropolis-Hastings move in temperature space. This IS the SAME math as MCMC (accept/reject based on energy). Replica exchange IS parallel MCMC in temperature space."})}),(0,a.jsx)(w.P,{title:"Markov State Models (MSMs) ARE the discretisation of MD — and they're the right coarse-graining",connectedTo:"ADR-022 (pgvector for variant embeddings)",children:(0,a.jsx)("p",{children:"MSMs discretize the continuous MD trajectory into N conformational states. The transition matrix P[i][j] = probability of going from state i to state j. This IS a Markov chain — the SAME equation (π(t+1) = π(t)\xb7P) that models credit ratings and port states. The stationary distribution gives the equilibrium populations. MSMs ARE the Markov chain card applied to molecular dynamics. The math (transition matrix + stationary distribution) IS the same."})}),(0,a.jsx)(w.P,{title:"Enhanced sampling + MSMs = the full picture — and it's the fold pattern",connectedTo:"ADR-050 (fold-section architecture)",children:(0,a.jsx)("p",{children:"Enhanced sampling generates the trajectories (exploration). MSMs analyse the trajectories (understanding). Together, they form the complete picture: explore the free-energy landscape, then model the kinetics. This IS the fold pattern: enhanced sampling IS the 'brief' (generate data), MSMs ARE the 'deeper thought' (understand the data). The two are complementary — one generates, one analyses. The pattern (generate + analyse) IS the same as ML training (forward pass) + evaluation (metrics)."})})]}),(0,a.jsx)(d.R,{pageId:"enhanced-sampling"}),(0,a.jsx)(m.B,{pageId:"enhanced-sampling"}),(0,a.jsx)(c.T,{relatedPages:[{id:"connections",reason:"Trace this topic's connections across the platform's math graph"},{id:"molecular-modelling",reason:"Continue to molecular modelling — see also from this page"},{id:"neural-network-potentials",reason:"Continue to neural network potentials — see also from this page"}]}),(0,a.jsxs)("div",{className:"flex flex-wrap gap-2",children:[(0,a.jsx)(l(),{href:(0,g.ZJ)("molecular-modelling"),className:"text-sm text-primary hover:underline",children:"→ Molecular Modelling (AMBER + Verlet — the base)"}),(0,a.jsx)("span",{className:"text-muted-foreground",children:"\xb7"}),(0,a.jsx)(l(),{href:(0,g.ZJ)("neural-network-potentials"),className:"text-sm text-primary hover:underline",children:"→ Neural Network Potentials (MACE — the learned force field)"}),(0,a.jsx)("span",{className:"text-muted-foreground",children:"\xb7"}),(0,a.jsx)(l(),{href:(0,g.ZJ)("systems-biology"),className:"text-sm text-primary hover:underline",children:"→ Systems Biology (MSM = spectral clustering, same as PPI)"}),(0,a.jsx)("span",{className:"text-muted-foreground",children:"\xb7"}),(0,a.jsx)(l(),{href:(0,g.ZJ)("knowledge"),className:"text-sm text-primary hover:underline",children:"→ ADR-050 (enhanced sampling adoption)"})]})]})}},14023:(e,t,s)=>{"use strict";s.d(t,{A:()=>a});let a=(0,s(6404).A)("atom",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["path",{d:"M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z",key:"1l2ple"}],["path",{d:"M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z",key:"1wam0m"}]])},19776:(e,t,s)=>{"use strict";s.d(t,{N:()=>o,R:()=>c});var a=s(95155),i=s(12115),r=s(94514),n=s(67635),l=s(89239);function o({code:e,language:t="sql",filename:s,highlight:o=[]}){let[c,d]=(0,i.useState)(!1),m=e.replace(/\n$/,"").split("\n"),h=async()=>{try{await navigator.clipboard.writeText(e),d(!0),setTimeout(()=>d(!1),1500)}catch{}};return(0,a.jsxs)("div",{className:"rounded-md border border-border/60 bg-[oklch(0.16_0.005_240)] text-[oklch(0.97_0.005_60)] overflow-hidden",children:[(0,a.jsxs)("div",{className:"flex items-center justify-between px-3 py-1.5 border-b border-white/10 bg-white/5",children:[(0,a.jsxs)("div",{className:"flex items-center gap-2 text-[11px] text-white/60 font-mono",children:[(0,a.jsx)("span",{className:"h-2 w-2 rounded-full bg-rose-400"}),(0,a.jsx)("span",{className:"h-2 w-2 rounded-full bg-amber-400"}),(0,a.jsx)("span",{className:"h-2 w-2 rounded-full bg-emerald-400"}),(0,a.jsx)("span",{className:"ml-2 uppercase tracking-wider",children:t}),s&&(0,a.jsxs)("span",{className:"text-white/40",children:["\xb7 ",s]})]}),(0,a.jsxs)(l.$,{variant:"ghost",size:"sm",className:"h-6 px-2 text-[11px] text-white/70 hover:text-white hover:bg-white/10",onClick:h,"aria-label":"Copy code",children:[c?(0,a.jsx)(r.A,{className:"h-3 w-3 mr-1"}):(0,a.jsx)(n.A,{className:"h-3 w-3 mr-1"}),c?"Copied":"Copy"]})]}),(0,a.jsx)("pre",{className:"code-scroll overflow-x-auto p-3 text-[12.5px] leading-relaxed font-mono",children:(0,a.jsx)("code",{children:m.map((e,t)=>{let s=t+1,i=o.includes(s);return(0,a.jsxs)("div",{className:["flex",i?"bg-primary/20 -mx-3 px-3 border-l-2 border-primary":""].join(" "),children:[(0,a.jsx)("span",{className:"select-none text-white/30 w-8 inline-block text-right pr-3 shrink-0",children:s}),(0,a.jsx)("span",{className:"whitespace-pre",children:e||" "})]},s)})})})]})}function c({children:e}){return(0,a.jsx)("code",{className:"rounded bg-muted px-1.5 py-0.5 text-[12px] font-mono text-foreground/90 border border-border/60",children:e})}},60508:(e,t,s)=>{"use strict";s.d(t,{R:()=>y});var a=s(95155),i=s(12115),r=s(45160),n=s(89239),l=s(66349),o=s(85404),c=s(58381),d=s(79275),m=s(48368),h=s(22164),p=s(86901),x=s(89123),g=s(21628),u=s(98500),f=s.n(u),v=s(85757);function y({pageId:e}){let t=(0,d.C6)(e);return 0===t.length?null:(0,a.jsxs)(c.iv,{title:"Recent research (2023-2025)",description:"Modern papers that extend the math, code, and tools on this page.",icon:(0,a.jsx)(m.A,{className:"h-5 w-5"}),badge:`${t.length} paper${1===t.length?"":"s"}`,badgeVariant:"outline",contentClassName:"space-y-4",children:[t.map((e,t)=>(0,a.jsx)(j,{entry:e},t)),(0,a.jsxs)("p",{className:"text-[11px] text-muted-foreground italic",children:[t.length," paper",1===t.length?"":"s"," mapped to this page. Each shows the key algorithm + expected output (rendered as charts when the code produces JSON). Run the code in-browser via Pyodide."]})]})}function j({entry:e}){let[t,s]=(0,i.useState)(!1),[c,d]=(0,i.useState)(null);return(0,a.jsxs)("div",{className:"rounded-lg border border-border/60 p-4 space-y-3 hover:border-primary/30 transition-colors",children:[(0,a.jsxs)("div",{className:"space-y-1",children:[(0,a.jsxs)("div",{className:"flex items-start justify-between gap-3",children:[(0,a.jsx)("h4",{className:"text-sm font-semibold leading-tight flex-1",children:e.paperTitle}),(0,a.jsx)(r.E,{variant:"outline",className:"text-[10px] shrink-0",children:e.venue})]}),(0,a.jsxs)("p",{className:"text-[11px] text-muted-foreground",children:[e.authors," \xb7 ",e.year]}),e.arxivId&&(0,a.jsxs)("a",{href:`https://arxiv.org/abs/${e.arxivId}`,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-1 text-[11px] text-primary hover:underline",children:[(0,a.jsx)(h.A,{className:"h-3 w-3"}),"arXiv:",e.arxivId]}),e.doi&&!e.arxivId&&(0,a.jsxs)("a",{href:`https://doi.org/${e.doi}`,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-1 text-[11px] text-primary hover:underline",children:[(0,a.jsx)(h.A,{className:"h-3 w-3"}),"DOI:",e.doi]})]}),(0,a.jsx)("p",{className:"text-[12px] text-muted-foreground leading-relaxed",children:e.abstract}),(0,a.jsxs)(n.$,{variant:"outline",size:"sm",onClick:()=>s(!t),className:"h-7 text-[11px] gap-1.5",children:[(0,a.jsx)(p.A,{className:"h-3 w-3"}),t?"Hide expected code":"Show expected code + visualization"]}),t&&(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsx)(l.l,{code:e.expectedCode,buttonLabel:"Run in browser",onOutput:e=>{try{let t=e.indexOf("{"),s=e.lastIndexOf("}");if(t>=0&&s>t){let a=e.substring(t,s+1);d(JSON.parse(a))}}catch{}},hideTextOutput:!!c,compact:!0}),c?(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsxs)("div",{className:"flex items-center gap-1.5",children:[(0,a.jsx)(x.A,{className:"h-3.5 w-3.5 text-primary"}),(0,a.jsx)("p",{className:"text-[10px] uppercase tracking-wider text-muted-foreground",children:"Visualization (rendered from code output)"})]}),(0,a.jsx)(o.D,{data:c,accent:"oklch(0.65 0.18 250)",sourceCode:e.expectedCode})]}):(0,a.jsxs)("div",{className:"rounded-md border border-primary/20 bg-primary/5 p-2.5",children:[(0,a.jsx)("p",{className:"text-[10px] uppercase tracking-wider text-muted-foreground mb-1",children:"Expected output"}),(0,a.jsx)("pre",{className:"text-[11px] font-mono whitespace-pre-wrap leading-relaxed",children:e.expectedOutput})]}),(0,a.jsxs)("div",{className:"rounded-md border border-emerald-500/30 bg-emerald-500/5 p-2.5",children:[(0,a.jsx)("p",{className:"text-[10px] uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-1",children:"Key insight"}),(0,a.jsx)("p",{className:"text-[12px] text-foreground/80 leading-relaxed",children:e.keyInsight})]})]}),(0,a.jsxs)(f(),{href:(0,v.ZJ)("analytics-outputs"),className:"inline-flex items-center gap-1 text-[11px] text-primary hover:underline",children:["See this math visualized on Analytics Outputs ",(0,a.jsx)(g.A,{className:"h-3 w-3"})]})]})}},86901:(e,t,s)=>{"use strict";s.d(t,{A:()=>a});let a=(0,s(6404).A)("sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]])}},e=>{e.O(0,[6919,8500,9430,3493,9760,7591,6012,9237,4843,9620,6722,5404,9275,2194,3039,8441,3794,7358],()=>e(e.s=10404)),_N_E=e.O()}]);