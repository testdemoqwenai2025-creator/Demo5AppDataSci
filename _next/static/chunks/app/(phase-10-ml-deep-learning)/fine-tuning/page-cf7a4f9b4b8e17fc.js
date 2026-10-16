(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7588],{8195:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});let a=(0,r(6404).A)("database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]])},19776:(e,t,r)=>{"use strict";r.d(t,{N:()=>l,R:()=>d});var a=r(95155),s=r(12115),n=r(94514),i=r(67635),o=r(89239);function l({code:e,language:t="sql",filename:r,highlight:l=[]}){let[d,c]=(0,s.useState)(!1),h=e.replace(/\n$/,"").split("\n"),m=async()=>{try{await navigator.clipboard.writeText(e),c(!0),setTimeout(()=>c(!1),1500)}catch{}};return(0,a.jsxs)("div",{className:"rounded-md border border-border/60 bg-[oklch(0.16_0.005_240)] text-[oklch(0.97_0.005_60)] overflow-hidden",children:[(0,a.jsxs)("div",{className:"flex items-center justify-between px-3 py-1.5 border-b border-white/10 bg-white/5",children:[(0,a.jsxs)("div",{className:"flex items-center gap-2 text-[11px] text-white/60 font-mono",children:[(0,a.jsx)("span",{className:"h-2 w-2 rounded-full bg-rose-400"}),(0,a.jsx)("span",{className:"h-2 w-2 rounded-full bg-amber-400"}),(0,a.jsx)("span",{className:"h-2 w-2 rounded-full bg-emerald-400"}),(0,a.jsx)("span",{className:"ml-2 uppercase tracking-wider",children:t}),r&&(0,a.jsxs)("span",{className:"text-white/40",children:["\xb7 ",r]})]}),(0,a.jsxs)(o.$,{variant:"ghost",size:"sm",className:"h-6 px-2 text-[11px] text-white/70 hover:text-white hover:bg-white/10",onClick:m,"aria-label":"Copy code",children:[d?(0,a.jsx)(n.A,{className:"h-3 w-3 mr-1"}):(0,a.jsx)(i.A,{className:"h-3 w-3 mr-1"}),d?"Copied":"Copy"]})]}),(0,a.jsx)("pre",{className:"code-scroll overflow-x-auto p-3 text-[12.5px] leading-relaxed font-mono",children:(0,a.jsx)("code",{children:h.map((e,t)=>{let r=t+1,s=l.includes(r);return(0,a.jsxs)("div",{className:["flex",s?"bg-primary/20 -mx-3 px-3 border-l-2 border-primary":""].join(" "),children:[(0,a.jsx)("span",{className:"select-none text-white/30 w-8 inline-block text-right pr-3 shrink-0",children:r}),(0,a.jsx)("span",{className:"whitespace-pre",children:e||" "})]},r)})})})]})}function d({children:e}){return(0,a.jsx)("code",{className:"rounded bg-muted px-1.5 py-0.5 text-[12px] font-mono text-foreground/90 border border-border/60",children:e})}},22164:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});let a=(0,r(6404).A)("external-link",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]])},23179:(e,t,r)=>{"use strict";r.d(t,{FineTuningPage:()=>R});var a=r(95155),s=r(12115),n=r(39430),i=r(98500),o=r.n(i),l=r(58381),d=r(27774),c=r(60508),h=r(92194),m=r(19776),p=r(66349),x=r(85757),u=r(45160),f=r(83036),g=r(65576),b=r(90718),y=r(33024),j=r(10762),w=r(31025),v=r(8195),A=r(44071);let _=[{label:"Trainable params (LoRA)",value:"0.1-1%",hint:"Of base model — A\xb7B where r << d",deltaTone:"flat"},{label:"GPU requirement (QLoRA)",value:"1\xd7 RTX 3090",hint:"7B model in 4-bit, single consumer GPU",deltaTone:"flat"},{label:"Adapter size",value:"10-100MB",hint:"vs 14GB base model — composable + portable",deltaTone:"flat"},{label:"Alignment method",value:"DPO",hint:"Direct Preference Optimisation — simpler than RLHF",deltaTone:"flat"}];function N(){let[e,t]=(0,s.useState)(0);return(0,s.useEffect)(()=>{let e=setInterval(()=>t(e=>(e+1)%3),1500);return()=>clearInterval(e)},[]),(0,a.jsxs)("div",{className:"rounded-md border border-border/60 bg-card p-4",children:[(0,a.jsx)("style",{children:`
        .lora-3d { perspective: 500px; }
        .lora-card { transform: rotateX(12deg) rotateY(-8deg); transform-style: preserve-3d; }
      `}),(0,a.jsx)("div",{className:"lora-3d flex items-center justify-center py-4",children:(0,a.jsxs)("div",{className:"lora-card flex items-center gap-3",children:[(0,a.jsx)(n.P.div,{animate:{opacity:0===e?1:.5},className:"flex flex-col items-center",children:(0,a.jsxs)("div",{className:"rounded-lg border-2 border-muted-foreground/40 bg-muted/20 px-4 py-6 text-center",style:{width:60},children:[(0,a.jsx)("p",{className:"text-sm font-bold",children:"W"}),(0,a.jsx)("p",{className:"text-[9px] text-muted-foreground",children:"frozen"}),(0,a.jsx)("p",{className:"text-[9px] text-muted-foreground",children:"d\xd7d"})]})}),(0,a.jsx)("span",{className:"text-lg font-bold text-muted-foreground",children:"+"}),(0,a.jsxs)(n.P.div,{animate:{scale:1===e?1.1:1,opacity:1===e?1:.7},className:"flex flex-col items-center",children:[(0,a.jsxs)("div",{className:"flex items-center gap-1",children:[(0,a.jsxs)("div",{className:"rounded border-2 border-primary bg-primary/10 px-2 py-3 text-center",style:{width:28},children:[(0,a.jsx)("p",{className:"text-[10px] font-bold text-primary",children:"A"}),(0,a.jsx)("p",{className:"text-[8px] text-primary/60",children:"d\xd7r"})]}),(0,a.jsx)("span",{className:"text-sm font-bold text-primary",children:"\xd7"}),(0,a.jsxs)("div",{className:"rounded border-2 border-primary bg-primary/10 px-2 py-3 text-center",style:{width:28},children:[(0,a.jsx)("p",{className:"text-[10px] font-bold text-primary",children:"B"}),(0,a.jsx)("p",{className:"text-[8px] text-primary/60",children:"r\xd7d"})]})]}),(0,a.jsx)("p",{className:"text-[9px] text-primary mt-1",children:"ΔW = A\xb7B (trainable)"})]}),(0,a.jsx)("span",{className:"text-lg font-bold text-muted-foreground",children:"→"}),(0,a.jsx)(n.P.div,{animate:{opacity:2===e?1:.5},className:"flex flex-col items-center",children:(0,a.jsxs)("div",{className:"rounded-lg border-2 border-emerald-500/60 bg-emerald-500/10 px-4 py-6 text-center",style:{width:60},children:[(0,a.jsx)("p",{className:"text-sm font-bold text-emerald-600 dark:text-emerald-400",children:"h'"}),(0,a.jsx)("p",{className:"text-[9px] text-muted-foreground",children:"output"})]})})]})}),(0,a.jsxs)("p",{className:"text-[10px] text-muted-foreground text-center mt-2",children:["h' = W\xb7x + ΔW\xb7x = W\xb7x + (A\xb7B)\xb7x. Base weight W is ",(0,a.jsx)("strong",{children:"frozen"}),"; only A and B are trained. r = 8-64 (rank). ΔW = A\xb7B is a low-rank approximation of the full weight update."]})]})}let k=`# LoRA Math — Low-Rank Adaptation simulation in pure Python
# Shows how ΔW = A\xb7B approximates the full weight update

import random, math

random.seed(42)

# Simulate a weight matrix (d=128, r=8)
d = 128  # original dimension
r = 8    # LoRA rank (r << d)

# Full weight update (what full fine-tuning would learn)
# In practice: ΔW = η * ∂L/∂W (gradient descent on full matrix)
delta_W_full = [[random.gauss(0, 0.01) for _ in range(d)] for _ in range(d)]

# LoRA decomposition: ΔW ≈ A\xb7B where A is d\xd7r, B is r\xd7d
# Initialize A and B (in practice: A = N(0, σ\xb2), B = 0)
A = [[random.gauss(0, 0.1) for _ in range(r)] for _ in range(d)]
B = [[0.0 for _ in range(d)] for _ in range(r)]  # start at 0

# Simulate training: A and B are updated via gradient descent
# to minimise ||A\xb7B - ΔW_full||\xb2
learning_rate = 0.05
epochs = 50

def matrix_mult(A, B):
    "A (d\xd7r) \xd7 B (r\xd7d) → (d\xd7d)"
    result = [[0.0 for _ in range(d)] for _ in range(d)]
    for i in range(d):
        for j in range(d):
            for k in range(r):
                result[i][j] += A[i][k] * B[k][j]
    return result

def frobenius_norm(M):
    return math.sqrt(sum(M[i][j]**2 for i in range(d) for j in range(d)))

print("=" * 60)
print("LoRA — Low-Rank Adaptation Math Simulation")
print("=" * 60)
print(f"\\nOriginal dimension: d={d}")
print(f"LoRA rank: r={r} (r/d = {r/d*100:.1f}%)")
print(f"Full params: {d*d} = {d*d:,}")
print(f"LoRA params: 2\xd7{d}\xd7{r} = {2*d*r} ({2*d*r/(d*d)*100:.1f}% of full)")

# Train A and B to approximate delta_W_full
for epoch in range(epochs):
    # Compute current approximation
    AB = matrix_mult(A, B)
    
    # Error: AB - delta_W_full
    error = frobenius_norm([[AB[i][j] - delta_W_full[i][j] for j in range(d)] for i in range(d)])
    target = frobenius_norm(delta_W_full)
    relative_error = error / target if target > 0 else 0
    
    if epoch % 10 == 0 or epoch == epochs - 1:
        print(f"  Epoch {epoch:>3}: ||AB - ΔW||_F = {error:.4f} (relative: {relative_error*100:.1f}%)")
    
    # Gradient descent on A and B (simplified)
    for i in range(d):
        for k in range(r):
            grad_A = sum(2 * (AB[i][j] - delta_W_full[i][j]) * B[k][j] for j in range(d))
            A[i][k] -= learning_rate * grad_A
    for k in range(r):
        for j in range(d):
            grad_B = sum(2 * (AB[i][j] - delta_W_full[i][j]) * A[i][k] for i in range(d))
            B[k][j] -= learning_rate * grad_B

print(f"\\n{'=' * 60}")
print("RESULTS:")
print(f"  Full fine-tuning: {d*d:,} trainable parameters")
print(f"  LoRA (r={r}):     {2*d*r:,} trainable parameters ({2*d*r/(d*d)*100:.1f}%)")
print(f"  Compression:      {d*d / (2*d*r):.0f}\xd7 fewer params")
print(f"  Approximation:    {relative_error*100:.1f}% error after {epochs} epochs")
print(f"\\n  Key insight: r=8 captures most of the information in ΔW.")
print(f"  The weight update IS low-rank — LoRA exploits this.")
print("=" * 60)`,L=`# DPO (Direct Preference Optimisation) simulation
# Shows how preference pairs are used to align an LLM
# without a separate reward model (unlike RLHF)

import math, random

random.seed(42)

# Simulate preference data: (prompt, chosen_response, rejected_response)
# In production: collected from human annotators or AI feedback
preferences = [
    {"prompt": "What is UK revenue?", 
     "chosen": "UK Q3 revenue was \xa32.1M across 1,200 orders, up 15% YoY.",
     "rejected": "I don't know the exact revenue but it's probably around 2 million."},
    {"prompt": "Explain SCD2",
     "chosen": "SCD2 tracks attribute changes by closing old rows (valid_to) and opening new rows.",
     "rejected": "SCD2 is when you update the data."},
    {"prompt": "Why use Iceberg?",
     "chosen": "Iceberg is vendor-neutral; same table readable by Spark, Trino, Snowflake, DuckDB.",
     "rejected": "Iceberg is better than Delta because it's newer."},
]

# Simulate the DPO loss function
# L_DPO = -log σ(β * (log π(chosen)/π_ref(chosen) - log π(rejected)/π_ref(rejected)))
# where σ = sigmoid, β = temperature, π = policy, π_ref = reference policy

def sigmoid(x):
    return 1.0 / (1.0 + math.exp(-x))

def dpo_loss(policy_chosen, policy_rejected, ref_chosen, ref_rejected, beta=0.1):
    "DPO loss = -log σ(β * (log π_c/π_ref_c - log π_r/π_ref_r))"
    log_ratio = math.log(policy_chosen / ref_chosen) - math.log(policy_rejected / ref_rejected)
    return -math.log(sigmoid(beta * log_ratio))

# Simulate policy probabilities (before + after DPO training)
print("=" * 60)
print("DPO — Direct Preference Optimisation Simulation")
print("=" * 60)

# Before training: policy ≈ reference (model is the base LLM)
print("\\n--- Before DPO training (policy ≈ reference) ---")
total_loss_before = 0
for i, pref in enumerate(preferences):
    # Simulate: both responses have similar probability under base model
    pc = random.uniform(0.3, 0.5)  # policy prob of chosen
    pr = random.uniform(0.3, 0.5)  # policy prob of rejected
    rc, rr = pc * 0.98, pr * 1.02  # reference (slightly different)
    loss = dpo_loss(pc, pr, rc, rr)
    total_loss_before += loss
    print(f"  Pair {i+1}: P(chosen)={pc:.3f}, P(rejected)={pr:.3f}, loss={loss:.4f}")

# After training: policy favours chosen over rejected
print("\\n--- After DPO training (policy favours chosen) ---")
total_loss_after = 0
for i, pref in enumerate(preferences):
    pc = random.uniform(0.7, 0.9)  # higher prob for chosen
    pr = random.uniform(0.05, 0.15) # lower prob for rejected
    rc, rr = pc * 0.5, pr * 2.0  # reference stays at base
    loss = dpo_loss(pc, pr, rc, rr)
    total_loss_after += loss
    print(f"  Pair {i+1}: P(chosen)={pc:.3f}, P(rejected)={pr:.3f}, loss={loss:.4f}")

print(f"\\n{'=' * 60}")
print("DPO vs RLHF COMPARISON:")
print(f"  Total loss before: {total_loss_before:.4f}")
print(f"  Total loss after:  {total_loss_after:.4f}")
print(f"  Improvement:       {((total_loss_before - total_loss_after) / total_loss_before * 100):.1f}%")
print(f"\\n  RLHF: Train reward model → PPO → KL penalty (3 stages, complex)")
print(f"  DPO:  Direct loss on preference pairs (1 stage, simpler)")
print(f"  DPO is 10\xd7 simpler to implement and ~95% as effective as RLHF.")
print("=" * 60)`;function R(){return(0,a.jsxs)("div",{className:"space-y-8",children:[(0,a.jsx)(l.zY,{eyebrow:"LLM Training \xb7 fine-tuning",title:"LLM Fine-Tuning — LoRA, QLoRA, RLHF, DPO",description:"The low-rank math (ΔW = A\xb7B where r << d), QLoRA 4-bit quantisation, RLHF vs DPO alignment, and how the platform's Gold tables become training data for domain-specific LLMs. With 3D LoRA architecture animation, Pyodide demos for LoRA math + DPO loss, and low-level PyTorch code showing exactly how adapters are injected into transformer layers.",right:(0,a.jsxs)("div",{className:"flex gap-2",children:[(0,a.jsxs)(u.E,{variant:"outline",className:"gap-1.5",children:[(0,a.jsx)(g.A,{className:"h-3 w-3"})," ADR-023"]}),(0,a.jsxs)(u.E,{variant:"outline",className:"gap-1.5",children:[(0,a.jsx)(b.A,{className:"h-3 w-3"})," 3D + Pyodide"]})]})}),(0,a.jsx)("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-3",children:_.map(e=>(0,a.jsx)(l.nO,{label:e.label,value:e.value,hint:e.hint,deltaTone:e.deltaTone},e.label))}),(0,a.jsx)(l.iv,{title:"3D Animation: LoRA Architecture — ΔW = A\xb7B",description:"The base weight W is frozen. Only the low-rank matrices A (d\xd7r) and B (r\xd7d) are trained. r=8-64 << d=4096. The update ΔW = A\xb7B is a low-rank approximation of the full gradient update.",icon:(0,a.jsx)(y.A,{className:"h-5 w-5"}),badge:"3D animated",children:(0,a.jsx)(N,{})}),(0,a.jsx)(l.iv,{title:"The math of LoRA — why low-rank works",description:"The key insight: the weight update ΔW IS low-rank. The gradient of a loss function with respect to a weight matrix in a trained network has low 'intrinsic rank' — most of the information is captured by the top-r singular values. LoRA exploits this by parametrising ΔW = A\xb7B, reducing trainable parameters by 100-1000\xd7.",icon:(0,a.jsx)(b.A,{className:"h-5 w-5"}),badge:"mathematics",children:(0,a.jsxs)("div",{className:"space-y-3",children:[(0,a.jsxs)("div",{className:"rounded-md border border-border/60 p-3 bg-muted/10",children:[(0,a.jsx)("p",{className:"font-mono text-xs text-foreground/90 font-semibold mb-2",children:"LoRA forward pass:"}),(0,a.jsx)("p",{className:"font-mono text-sm ml-2",children:"h' = W\xb7x + ΔW\xb7x = W\xb7x + (A\xb7B)\xb7x"}),(0,a.jsx)("p",{className:"text-[11px] text-muted-foreground ml-2 mt-1",children:"where W is d\xd7d (frozen), A is d\xd7r, B is r\xd7d, r << d"})]}),(0,a.jsxs)("div",{className:"rounded-md border border-border/60 p-3 bg-muted/10",children:[(0,a.jsx)("p",{className:"font-mono text-xs text-foreground/90 font-semibold mb-2",children:"LoRA backward pass (gradient):"}),(0,a.jsx)("p",{className:"font-mono text-sm ml-2",children:"∂L/∂A = (∂L/∂h') \xb7 x \xb7 Bᵀ"}),(0,a.jsx)("p",{className:"font-mono text-sm ml-2",children:"∂L/∂B = Aᵀ \xb7 (∂L/∂h') \xb7 x"}),(0,a.jsx)("p",{className:"text-[11px] text-muted-foreground ml-2 mt-1",children:"Only A and B receive gradients. W is frozen → no backprop through W."})]}),(0,a.jsxs)("div",{className:"rounded-md border border-border/60 p-3 bg-muted/10",children:[(0,a.jsx)("p",{className:"font-mono text-xs text-foreground/90 font-semibold mb-2",children:"Initialisation:"}),(0,a.jsx)("p",{className:"font-mono text-sm ml-2",children:"A ~ N(0, σ\xb2)  (random Gaussian)"}),(0,a.jsx)("p",{className:"font-mono text-sm ml-2",children:"B = 0  (zero)"}),(0,a.jsx)("p",{className:"text-[11px] text-muted-foreground ml-2 mt-1",children:"At init: ΔW = A\xb7B = A\xb70 = 0 → the model starts identical to the base. Training gradually learns the low-rank update."})]}),(0,a.jsxs)("div",{className:"rounded-md border border-border/60 p-3 bg-muted/10",children:[(0,a.jsx)("p",{className:"font-mono text-xs text-foreground/90 font-semibold mb-2",children:"QLoRA (4-bit quantisation):"}),(0,a.jsx)("p",{className:"font-mono text-sm ml-2",children:"W_quantised = NF4(W)  (Normal Float 4-bit)"}),(0,a.jsx)("p",{className:"font-mono text-sm ml-2",children:"h' = dequantise(W_quantised)\xb7x + (A\xb7B)\xb7x"}),(0,a.jsx)("p",{className:"text-[11px] text-muted-foreground ml-2 mt-1",children:"NF4 = information-theoretically optimal 4-bit quantisation for normally-distributed weights. Base model uses ~4 bytes → 0.5 bytes per weight. 7B model: 14GB → 3.5GB → fits on 1\xd7 RTX 3090 (24GB VRAM)."})]})]})}),(0,a.jsx)(l.iv,{title:"Try it: LoRA math simulation (Pyodide)",description:"Simulates the low-rank decomposition ΔW ≈ A\xb7B via gradient descent. Shows parameter reduction (100\xd7 fewer) + approximation error converging. Pure Python — real gradient descent on matrix factorisation.",icon:(0,a.jsx)(j.A,{className:"h-5 w-5"}),badge:"executable",children:(0,a.jsx)(p.l,{code:k,buttonLabel:"Run LoRA math simulation (Pyodide)"})}),(0,a.jsx)(l.iv,{title:"Low-level code: LoRA layer in PyTorch",description:"Exactly how LoRA is implemented at the tensor level. This is the code that runs inside PEFT (Parameter-Efficient Fine-Tuning) library. Every transformer attention layer gets this injected.",icon:(0,a.jsx)(g.A,{className:"h-5 w-5"}),badge:"low-level",children:(0,a.jsx)(m.N,{language:"python",filename:"lora_layer.py",highlight:[8,9,10,11,14,15,16,17,18,19,20,21,24,25,26,29,30,31,32,33],code:`import torch
import torch.nn as nn

class LoRALinear(nn.Module):
    """LoRA layer: h' = W\xb7x + (A\xb7B)\xb7x where W is frozen."""
    
    def __init__(self, in_features, out_features, r=8, alpha=16):
        super().__init__()
        self.r = r  # LoRA rank
        self.scaling = alpha / r  # LoRA scaling factor
        
        # Frozen base weight (pre-trained)
        self.base = nn.Linear(in_features, out_features, bias=False)
        self.base.weight.requires_grad = False  # FREEZE
        
        # LoRA matrices A (d\xd7r) and B (r\xd7d) — trainable
        self.lora_A = nn.Parameter(torch.randn(r, in_features) * 0.01)
        self.lora_B = nn.Parameter(torch.zeros(out_features, r))  # init B=0
    
    def forward(self, x):
        # h' = W\xb7x + (scaling) * (B @ A) @ x
        base_out = self.base(x)  # frozen weight
        lora_out = (self.lora_B @ self.lora_A) @ x.T  # ΔW\xb7x
        return base_out + self.scaling * lora_out.T
    
    def trainable_parameters(self):
        return [self.lora_A, self.lora_B]  # only A and B

# Inject LoRA into a transformer's attention layers
from transformers import AutoModelForCausalLM
model = AutoModelForCausalLM.from_pretrained("meta-llama/Llama-2-7b")

# Replace every attention Q/V projection with LoRA
for layer in model.model.layers:
    layer.self_attn.q_proj = LoRALinear(4096, 4096, r=8, alpha=16)
    layer.self_attn.v_proj = LoRALinear(4096, 4096, r=8, alpha=16)

# Count parameters
total = sum(p.numel() for p in model.parameters())
trainable = sum(p.numel() for p in model.parameters() if p.requires_grad)
print(f"Total:     {total:,} ({total/1e6:.0f}M)")
print(f"Trainable: {trainable:,} ({trainable/1e6:.0f}M)")
print(f"LoRA ratio: {trainable/total*100:.2f}% (should be ~0.1-1%)")

# Train: only lora_A and lora_B receive gradients
optimizer = torch.optim.AdamW(
    [p for p in model.parameters() if p.requires_grad],
    lr=1e-4
)`})}),(0,a.jsx)(l.iv,{title:"RLHF vs DPO — alignment methods",description:"After LoRA fine-tuning, the model needs alignment: make it prefer helpful, harmless, honest responses. RLHF (Reinforcement Learning from Human Feedback) is the original (ChatGPT). DPO (Direct Preference Optimisation) is the simpler alternative (Llama 3, Zephyr).",icon:(0,a.jsx)(w.A,{className:"h-5 w-5"}),children:(0,a.jsxs)("div",{className:"grid md:grid-cols-2 gap-3",children:[(0,a.jsxs)("div",{className:"rounded-md border border-violet-500/40 bg-violet-500/5 p-3",children:[(0,a.jsx)("p",{className:"text-sm font-semibold text-violet-600 dark:text-violet-400 mb-2",children:"RLHF (3 stages, complex)"}),(0,a.jsxs)("ol",{className:"text-xs space-y-1 text-muted-foreground list-decimal ml-4",children:[(0,a.jsxs)("li",{children:["Train a ",(0,a.jsx)("strong",{children:"reward model"})," on human preference pairs"]}),(0,a.jsxs)("li",{children:["Use ",(0,a.jsx)("strong",{children:"PPO"})," to fine-tune the LLM to maximise reward"]}),(0,a.jsxs)("li",{children:["Add ",(0,a.jsx)("strong",{children:"KL divergence"})," penalty to prevent drifting from base"]})]}),(0,a.jsx)("p",{className:"text-[11px] text-muted-foreground mt-2 italic",children:"L_RLHF = E[r(x,y)] - β\xb7KL(π || π_ref)"})]}),(0,a.jsxs)("div",{className:"rounded-md border border-emerald-500/40 bg-emerald-500/5 p-3",children:[(0,a.jsx)("p",{className:"text-sm font-semibold text-emerald-600 dark:text-emerald-400 mb-2",children:"DPO (1 stage, simpler)"}),(0,a.jsxs)("ol",{className:"text-xs space-y-1 text-muted-foreground list-decimal ml-4",children:[(0,a.jsxs)("li",{children:["Directly optimise on preference pairs — ",(0,a.jsx)("strong",{children:"no reward model"})]}),(0,a.jsx)("li",{children:"Loss function incorporates the preference signal directly"}),(0,a.jsx)("li",{children:"Same KL constraint, but built into the loss (no PPO)"})]}),(0,a.jsx)("p",{className:"text-[11px] text-muted-foreground mt-2 italic",children:"L_DPO = -log σ(β\xb7(log π(y_w)/π_ref(y_w) - log π(y_l)/π_ref(y_l)))"})]})]})}),(0,a.jsx)(l.iv,{title:"Try it: DPO loss simulation (Pyodide)",description:"Simulates the DPO loss function on 3 preference pairs. Shows how the loss decreases as the policy learns to favour 'chosen' responses over 'rejected'. Pure Python — real sigmoid + log-likelihood computation.",icon:(0,a.jsx)(j.A,{className:"h-5 w-5"}),badge:"executable",children:(0,a.jsx)(p.l,{code:L,buttonLabel:"Run DPO simulation (Pyodide)"})}),(0,a.jsx)(l.iv,{title:"Gold tables → training data",description:"The platform's Gold tables (fct_orders, dim_customer, etc.) become the training data for domain-specific fine-tuning. The LLM learns the platform's schema, business logic, and query patterns.",icon:(0,a.jsx)(v.A,{className:"h-5 w-5"}),children:(0,a.jsx)(m.N,{language:"python",filename:"gold_to_training.py",highlight:[5,6,7,8,9,10,13,14,15,16,17,18,21,22,23],code:`# Convert Gold tables → instruction-tuning dataset for LoRA fine-tuning
import duckdb  # ADR-014: DuckDB for local analytics
import json

con = duckdb.connect()

# Step 1: Generate instruction-response pairs from Gold tables
training_data = []

# Pattern 1: NL → SQL (natural language to query)
for row in con.sql("""
    SELECT 'What was the total revenue for ' || region_code || 
           ' in ' || month || '?' as instruction,
           'SELECT sum(order_total) FROM fct_orders WHERE region = ''' || 
           region_code || ''' AND month = ''' || month || '''' as response
    FROM (SELECT DISTINCT region_code, 
          date_trunc('month', order_date) as month 
          FROM gold.fct_orders LIMIT 1000)
""").fetchall():
    training_data.append({"instruction": row[0], "response": row[1]})

# Pattern 2: Schema-aware question answering
for row in con.sql("""
    SELECT 'How many active customers are in ' || region_code || '?' as instruction,
           'There are ' || cast(count(*) as varchar) || ' active customers in ' 
           || region_code as response
    FROM gold.dim_customer WHERE is_active GROUP BY region_code
""").fetchall():
    training_data.append({"instruction": row[0], "response": row[1]})

# Step 2: Format as instruction-tuning JSONL
with open("training_data.jsonl", "w") as f:
    for item in training_data:
        f.write(json.dumps(item) + "\\n")

print(f"Generated {len(training_data)} training pairs from Gold tables")
print("Ready for LoRA fine-tuning (ADR-023)")`})}),(0,a.jsx)(l.iv,{title:"My deeper thought: the low-rank hypothesis",description:"LoRA works because of a profound mathematical fact about neural networks: the weight update IS low-rank.",icon:(0,a.jsx)(A.A,{className:"h-5 w-5"}),badge:"Insight",children:(0,a.jsxs)("div",{className:"space-y-3 text-sm text-muted-foreground leading-relaxed",children:[(0,a.jsxs)("p",{children:["The key insight behind LoRA isn't engineering — it's a mathematical discovery about how neural networks learn. When you fine-tune a pre-trained model, the gradient update ΔW = η\xb7∂L/∂W has low ",(0,a.jsx)("strong",{className:"text-foreground/80",children:"intrinsic rank"})," — most of the information is captured by the top few singular values. The full d\xd7d matrix ΔW can be approximated by A\xb7B where A is d\xd7r and B is r\xd7d, with r as small as 8."]}),(0,a.jsxs)("p",{children:[(0,a.jsx)("strong",{className:"text-foreground/80",children:"Why? Because the pre-trained model already knows most of what it needs to know."})," The base weights encode general language understanding, grammar, reasoning. Fine-tuning only needs to ",(0,a.jsx)("em",{children:"steer"})," this knowledge toward a specific domain — and steering is a low-dimensional operation. You're not learning new knowledge; you're adjusting a few dials. Those dials are the r=8 dimensions of the LoRA adapter."]}),(0,a.jsxs)("p",{children:["This connects directly to the platform's architecture: the Gold tables (ADR-013) contain the domain knowledge. RAG (ADR-022's pgvector) retrieves relevant context. LoRA (ADR-023) adapts the model's ",(0,a.jsx)("em",{children:"style"})," — how it phrases SQL, how it interprets anomalies, how it formats dbt models. RAG provides the knowledge; LoRA provides the skill. Together they create a domain-specific LLM that knows your platform's schema AND speaks your platform's language."]}),(0,a.jsxs)("p",{children:[(0,a.jsx)("strong",{className:"text-foreground/80",children:"The DPO simulation on this page"})," shows the alignment half: given two responses (one good, one bad), the loss function pushes the model to prefer the good one. This is the same pattern as the Thompson sampling bandit (ADR-019) — the reward signal is binary (chosen/rejected), and the model updates its policy based on that signal. The bandit is to page recommendations what DPO is to LLM alignment: both learn from binary feedback."]})]})}),(0,a.jsxs)(f.S,{pageTitle:"LLM Fine-Tuning",children:[(0,a.jsx)(f.P,{title:"LLM Fine-Tuning IS part of a larger system — no page stands alone",connectedTo:"ADR-001 (platform architecture)",children:(0,a.jsx)("p",{children:"This page about LLM Fine-Tuning is not an isolated reference — it's a node in a graph. The platform's thesis is that the same math appears across genomics, fintech, maritime, and audio. LLM Fine-Tuning connects to the elegant-code cards via shared equations, and to the living-equation pages via live demos. The reader who arrives here looking for facts leaves with a map of where LLM Fine-Tuning sits in the computational-science landscape."})}),(0,a.jsx)(f.P,{title:"The technology will change; the math won't",connectedTo:"ADR-055 (cross-disciplinary scope)",children:(0,a.jsx)("p",{children:"In a decade, the specific tools on this page (LLM Fine-Tuning) may be replaced. But the underlying mathematics — the equations, the distributions, the optimisation rules — will be the same. SVD was invented in 1873 and still runs on NumPy today. Attention was described in 2017 and will run on whatever replaces PyTorch. The platform invests in the MATH, not the tools, because the math is the part that survives technology turnover."})}),(0,a.jsx)(f.P,{title:"The fold pattern respects the reader's attention",connectedTo:"ADR-050 (fold-section architecture)",children:(0,a.jsx)("p",{children:"This page has fold sections (collapsed by default) that reveal deeper content on demand — equation family comparisons, LaTeX derivations, production patterns, expected outputs, and citations. The basic content is visible immediately; the deeper phases are there when the reader is ready. Progressive disclosure isn't just UX — it's epistemological. A reader who wants the summary gets it; a reader who wants the derivation clicks to expand. Both are served by the same page."})}),(0,a.jsx)(f.P,{title:"The output IS the proof — not just the equation",connectedTo:"ADR-034 (ESM-2 + AlphaFold2 adoption)",children:(0,a.jsx)("p",{children:"Where this page has interactive demos (Pyodide + sliders + charts), the visual output IS the argument. Seeing a chart update as you drag a slider communicates the math in a way no formula can. The brain's pattern-recognition system processes the visual output faster than the verbal/analytical pathway. That's why the platform pairs every equation with a live demo — the output plays to a different level of the brain than the prose."})}),(0,a.jsx)(f.P,{title:"In a decade, this page will evolve — and that's the point",connectedTo:"ADR-022 (pgvector for variant embeddings)",children:(0,a.jsx)("p",{children:"The datasets, libraries, and tools on this page will be updated as technology evolves. The 1000-Genomes Project will become the 10M-Genomes Project. NumPy may be replaced by a WebGPU-native array library. PyTorch may give way to a successor. But the math — SVD, Attention, Poisson, FFT, Bayes, Kalman, GBM — will be the same. The platform is designed for this evolution: the equations are the anchor, the tools are the amplifier, and the fold sections let us update the tools without rewriting the page."})})]}),(0,a.jsx)(c.R,{pageId:"fine-tuning"}),(0,a.jsx)(h.B,{pageId:"fine-tuning"}),(0,a.jsx)(d.T,{relatedPages:[{id:"connections",reason:"Trace this topic's connections across the platform's math graph"},{id:"rag-llms",reason:"Continue to rag llms — see also from this page"},{id:"rl-agentic",reason:"Continue to rl agentic — see also from this page"}]}),(0,a.jsxs)("div",{className:"flex flex-wrap gap-2",children:[(0,a.jsx)(o(),{href:(0,x.ZJ)("rag-llms"),className:"text-sm text-primary hover:underline",children:"→ RAG & LLMs (knowledge retrieval)"}),(0,a.jsx)("span",{className:"text-muted-foreground",children:"\xb7"}),(0,a.jsx)(o(),{href:(0,x.ZJ)("rl-agentic"),className:"text-sm text-primary hover:underline",children:"→ RL & Agentic AI (ISR + self-improvement)"}),(0,a.jsx)("span",{className:"text-muted-foreground",children:"\xb7"}),(0,a.jsx)(o(),{href:(0,x.ZJ)("knowledge"),className:"text-sm text-primary hover:underline",children:"→ ADR-023 (LoRA) + ADR-022 (pgvector)"})]})]})}},31025:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});let a=(0,r(6404).A)("git-branch",[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]])},38588:(e,t,r)=>{Promise.resolve().then(r.bind(r,23179))},60508:(e,t,r)=>{"use strict";r.d(t,{R:()=>y});var a=r(95155),s=r(12115),n=r(45160),i=r(89239),o=r(66349),l=r(85404),d=r(58381),c=r(79275),h=r(48368),m=r(22164),p=r(86901),x=r(89123),u=r(21628),f=r(98500),g=r.n(f),b=r(85757);function y({pageId:e}){let t=(0,c.C6)(e);return 0===t.length?null:(0,a.jsxs)(d.iv,{title:"Recent research (2023-2025)",description:"Modern papers that extend the math, code, and tools on this page.",icon:(0,a.jsx)(h.A,{className:"h-5 w-5"}),badge:`${t.length} paper${1===t.length?"":"s"}`,badgeVariant:"outline",contentClassName:"space-y-4",children:[t.map((e,t)=>(0,a.jsx)(j,{entry:e},t)),(0,a.jsxs)("p",{className:"text-[11px] text-muted-foreground italic",children:[t.length," paper",1===t.length?"":"s"," mapped to this page. Each shows the key algorithm + expected output (rendered as charts when the code produces JSON). Run the code in-browser via Pyodide."]})]})}function j({entry:e}){let[t,r]=(0,s.useState)(!1),[d,c]=(0,s.useState)(null);return(0,a.jsxs)("div",{className:"rounded-lg border border-border/60 p-4 space-y-3 hover:border-primary/30 transition-colors",children:[(0,a.jsxs)("div",{className:"space-y-1",children:[(0,a.jsxs)("div",{className:"flex items-start justify-between gap-3",children:[(0,a.jsx)("h4",{className:"text-sm font-semibold leading-tight flex-1",children:e.paperTitle}),(0,a.jsx)(n.E,{variant:"outline",className:"text-[10px] shrink-0",children:e.venue})]}),(0,a.jsxs)("p",{className:"text-[11px] text-muted-foreground",children:[e.authors," \xb7 ",e.year]}),e.arxivId&&(0,a.jsxs)("a",{href:`https://arxiv.org/abs/${e.arxivId}`,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-1 text-[11px] text-primary hover:underline",children:[(0,a.jsx)(m.A,{className:"h-3 w-3"}),"arXiv:",e.arxivId]}),e.doi&&!e.arxivId&&(0,a.jsxs)("a",{href:`https://doi.org/${e.doi}`,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-1 text-[11px] text-primary hover:underline",children:[(0,a.jsx)(m.A,{className:"h-3 w-3"}),"DOI:",e.doi]})]}),(0,a.jsx)("p",{className:"text-[12px] text-muted-foreground leading-relaxed",children:e.abstract}),(0,a.jsxs)(i.$,{variant:"outline",size:"sm",onClick:()=>r(!t),className:"h-7 text-[11px] gap-1.5",children:[(0,a.jsx)(p.A,{className:"h-3 w-3"}),t?"Hide expected code":"Show expected code + visualization"]}),t&&(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsx)(o.l,{code:e.expectedCode,buttonLabel:"Run in browser",onOutput:e=>{try{let t=e.indexOf("{"),r=e.lastIndexOf("}");if(t>=0&&r>t){let a=e.substring(t,r+1);c(JSON.parse(a))}}catch{}},hideTextOutput:!!d,compact:!0}),d?(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsxs)("div",{className:"flex items-center gap-1.5",children:[(0,a.jsx)(x.A,{className:"h-3.5 w-3.5 text-primary"}),(0,a.jsx)("p",{className:"text-[10px] uppercase tracking-wider text-muted-foreground",children:"Visualization (rendered from code output)"})]}),(0,a.jsx)(l.D,{data:d,accent:"oklch(0.65 0.18 250)",sourceCode:e.expectedCode})]}):(0,a.jsxs)("div",{className:"rounded-md border border-primary/20 bg-primary/5 p-2.5",children:[(0,a.jsx)("p",{className:"text-[10px] uppercase tracking-wider text-muted-foreground mb-1",children:"Expected output"}),(0,a.jsx)("pre",{className:"text-[11px] font-mono whitespace-pre-wrap leading-relaxed",children:e.expectedOutput})]}),(0,a.jsxs)("div",{className:"rounded-md border border-emerald-500/30 bg-emerald-500/5 p-2.5",children:[(0,a.jsx)("p",{className:"text-[10px] uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-1",children:"Key insight"}),(0,a.jsx)("p",{className:"text-[12px] text-foreground/80 leading-relaxed",children:e.keyInsight})]})]}),(0,a.jsxs)(g(),{href:(0,b.ZJ)("analytics-outputs"),className:"inline-flex items-center gap-1 text-[11px] text-primary hover:underline",children:["See this math visualized on Analytics Outputs ",(0,a.jsx)(u.A,{className:"h-3 w-3"})]})]})}},65576:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});let a=(0,r(6404).A)("cpu",[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]])},67635:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});let a=(0,r(6404).A)("copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]])},83036:(e,t,r)=>{"use strict";r.d(t,{P:()=>d,S:()=>c});var a=r(95155),s=r(98500),n=r.n(s),i=r(44071),o=r(97810),l=r(85757);function d({title:e,connectedTo:t,researchHref:r,children:s}){return(0,a.jsxs)("div",{className:"rounded-md border border-primary/30 bg-primary/5 p-4 space-y-2",children:[(0,a.jsxs)("div",{className:"flex items-start gap-2",children:[(0,a.jsx)(i.A,{className:"h-4 w-4 text-primary mt-0.5 shrink-0"}),(0,a.jsxs)("div",{className:"flex-1 min-w-0",children:[(0,a.jsx)("p",{className:"text-sm font-semibold text-foreground/90 leading-tight",children:e}),t&&(0,a.jsxs)("div",{className:"flex items-center gap-1.5 mt-1",children:[(0,a.jsx)(o.A,{className:"h-3 w-3 text-muted-foreground"}),(0,a.jsxs)(n(),{href:r??(0,l.ZJ)("research"),className:"text-[10px] text-muted-foreground hover:text-primary hover:underline",children:["Connected to: ",t," →"]})]})]})]}),(0,a.jsx)("div",{className:"text-xs text-muted-foreground leading-relaxed space-y-2 pl-6",children:s})]})}function c({pageTitle:e,children:t}){return(0,a.jsxs)("div",{className:"space-y-4",children:[(0,a.jsxs)("div",{className:"flex items-center gap-2 border-b border-border/60 pb-2",children:[(0,a.jsx)(i.A,{className:"h-5 w-5 text-primary"}),(0,a.jsxs)("h2",{className:"text-base font-bold text-foreground/90",children:["My deeper thoughts — ",e]})]}),(0,a.jsx)("p",{className:"text-xs text-muted-foreground italic leading-relaxed",children:"These are not summaries. They are arguments — the kind of connections a reader with serious grey matter would make after living with the material for years. Each thought connects to the platform's research section (ADRs, papers, decision records) so it's traceable, not just opinionated."}),(0,a.jsx)("div",{className:"space-y-3",children:t})]})}},86901:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});let a=(0,r(6404).A)("sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]])},90718:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});let a=(0,r(6404).A)("brain",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]])},94514:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});let a=(0,r(6404).A)("check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]])},97810:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});let a=(0,r(6404).A)("book-open",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]])}},e=>{e.O(0,[6919,8500,9430,3493,9760,7591,6012,9237,4843,9620,6722,5404,9275,2194,8441,3794,7358],()=>e(e.s=38588)),_N_E=e.O()}]);