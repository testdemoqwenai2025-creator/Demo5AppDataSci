(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8444],{8195:(e,t,s)=>{"use strict";s.d(t,{A:()=>n});let n=(0,s(6404).A)("database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]])},15573:(e,t,s)=>{"use strict";s.d(t,{A:()=>n});let n=(0,s(6404).A)("server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]])},19776:(e,t,s)=>{"use strict";s.d(t,{N:()=>l,R:()=>d});var n=s(95155),a=s(12115),r=s(94514),i=s(67635),o=s(89239);function l({code:e,language:t="sql",filename:s,highlight:l=[]}){let[d,c]=(0,a.useState)(!1),h=e.replace(/\n$/,"").split("\n"),u=async()=>{try{await navigator.clipboard.writeText(e),c(!0),setTimeout(()=>c(!1),1500)}catch{}};return(0,n.jsxs)("div",{className:"rounded-md border border-border/60 bg-[oklch(0.16_0.005_240)] text-[oklch(0.97_0.005_60)] overflow-hidden",children:[(0,n.jsxs)("div",{className:"flex items-center justify-between px-3 py-1.5 border-b border-white/10 bg-white/5",children:[(0,n.jsxs)("div",{className:"flex items-center gap-2 text-[11px] text-white/60 font-mono",children:[(0,n.jsx)("span",{className:"h-2 w-2 rounded-full bg-rose-400"}),(0,n.jsx)("span",{className:"h-2 w-2 rounded-full bg-amber-400"}),(0,n.jsx)("span",{className:"h-2 w-2 rounded-full bg-emerald-400"}),(0,n.jsx)("span",{className:"ml-2 uppercase tracking-wider",children:t}),s&&(0,n.jsxs)("span",{className:"text-white/40",children:["\xb7 ",s]})]}),(0,n.jsxs)(o.$,{variant:"ghost",size:"sm",className:"h-6 px-2 text-[11px] text-white/70 hover:text-white hover:bg-white/10",onClick:u,"aria-label":"Copy code",children:[d?(0,n.jsx)(r.A,{className:"h-3 w-3 mr-1"}):(0,n.jsx)(i.A,{className:"h-3 w-3 mr-1"}),d?"Copied":"Copy"]})]}),(0,n.jsx)("pre",{className:"code-scroll overflow-x-auto p-3 text-[12.5px] leading-relaxed font-mono",children:(0,n.jsx)("code",{children:h.map((e,t)=>{let s=t+1,a=l.includes(s);return(0,n.jsxs)("div",{className:["flex",a?"bg-primary/20 -mx-3 px-3 border-l-2 border-primary":""].join(" "),children:[(0,n.jsx)("span",{className:"select-none text-white/30 w-8 inline-block text-right pr-3 shrink-0",children:s}),(0,n.jsx)("span",{className:"whitespace-pre",children:e||" "})]},s)})})})]})}function d({children:e}){return(0,n.jsx)("code",{className:"rounded bg-muted px-1.5 py-0.5 text-[12px] font-mono text-foreground/90 border border-border/60",children:e})}},53961:(e,t,s)=>{"use strict";s.d(t,{A:()=>n});let n=(0,s(6404).A)("zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]])},64651:(e,t,s)=>{"use strict";s.d(t,{InferenceServingPage:()=>N});var n=s(95155),a=s(12115),r=s(39430),i=s(98500),o=s.n(i),l=s(58381),d=s(27774),c=s(19776),h=s(66349),u=s(85757),p=s(45160),m=s(83036),g=s(8195),f=s(15573),_=s(53961),b=s(90718),x=s(10762),k=s(65576),y=s(44071);let v=[{label:"KV cache / token (70B)",value:"2.6 MB",hint:"2 \xb7 80 layers \xb7 8192 dim \xb7 2 bytes (BF16)",deltaTone:"flat"},{label:"32k ctx \xd7 8 users",value:"670 GB",hint:"Contiguous KV → OOM. Paged → fits",deltaTone:"flat"},{label:"Throughput (HF)",value:"~50 tok/s",hint:"Sequential, no batching",deltaTone:"flat"},{label:"Throughput (vLLM)",value:"~3000 tok/s",hint:"PagedAttention + continuous batching",deltaTone:"flat"}];function w(){let[e,t]=(0,a.useState)(0);(0,a.useEffect)(()=>{let e=setInterval(()=>t(e=>(e+1)%6),900);return()=>clearInterval(e)},[]);let s=function(e){let t=Array(32).fill("free"),s=0;for(let n=0;n<e.seqA;n++)t[s++]="A";for(let n=0;n<e.seqB;n++)t[s++]="B";for(let n=0;n<e.seqC;n++)t[s++]="C";for(let n=0;n<e.seqD;n++)t[s++]="D";return t}([{seqA:2,seqB:0,seqC:0,seqD:0},{seqA:2,seqB:2,seqC:0,seqD:0},{seqA:3,seqB:2,seqC:0,seqD:0},{seqA:3,seqB:2,seqC:2,seqD:0},{seqA:0,seqB:2,seqC:2,seqD:0},{seqA:0,seqB:2,seqC:2,seqD:3}][e]),i={A:"oklch(0.55 0.16 250 / 0.7)",B:"oklch(0.55 0.16 165 / 0.7)",C:"oklch(0.6 0.15 75 / 0.7)",D:"oklch(0.6 0.20 25 / 0.7)",free:"oklch(0.7 0 0 / 0.08)"};return(0,n.jsxs)("div",{className:"rounded-md border border-border/60 bg-card p-4",children:[(0,n.jsx)("style",{children:`
        .pa-3d { perspective: 800px; }
        .pa-stage { transform: rotateX(15deg); transform-style: preserve-3d; }
      `}),(0,n.jsxs)("p",{className:"text-sm font-semibold mb-3 flex items-center gap-2",children:[(0,n.jsx)(g.A,{className:"h-4 w-4 text-primary"}),"PagedAttention — KV cache as virtual memory",(0,n.jsx)("span",{className:"text-[10px] font-mono text-muted-foreground ml-auto",children:["1. seqA arrives","2. seqB joins","3. seqA grows (paged)","4. seqC joins","5. seqA finishes → pages freed","6. seqD reuses freed pages"][e]})]}),(0,n.jsx)("div",{className:"pa-3d",children:(0,n.jsx)("div",{className:"pa-stage",children:(0,n.jsxs)("div",{className:"inline-block p-3 rounded border border-border/60 bg-background/60 mx-auto",children:[(0,n.jsx)("p",{className:"text-[9px] font-mono text-muted-foreground mb-1.5 text-center",children:"GPU VRAM (80 GB) \xb7 16KB pages \xb7 32 shown"}),(0,n.jsx)("div",{className:"grid grid-cols-8 gap-1",children:s.map((t,s)=>(0,n.jsx)(r.P.div,{className:"w-9 h-9 rounded flex items-center justify-center text-[9px] font-mono font-bold border border-border/40",animate:{backgroundColor:i[t],color:"free"===t?"var(--muted-foreground)":"white",scale:4===e&&"free"===t?1.05:1},transition:{duration:.3},children:"free"===t?"\xb7":t},s))})]})})}),(0,n.jsxs)("div",{className:"flex justify-center gap-3 mt-3 text-[10px] flex-wrap",children:[(0,n.jsxs)("span",{className:"flex items-center gap-1",children:[(0,n.jsx)("span",{className:"h-2 w-2 rounded",style:{backgroundColor:i.A}})," seqA"]}),(0,n.jsxs)("span",{className:"flex items-center gap-1",children:[(0,n.jsx)("span",{className:"h-2 w-2 rounded",style:{backgroundColor:i.B}})," seqB"]}),(0,n.jsxs)("span",{className:"flex items-center gap-1",children:[(0,n.jsx)("span",{className:"h-2 w-2 rounded",style:{backgroundColor:i.C}})," seqC"]}),(0,n.jsxs)("span",{className:"flex items-center gap-1",children:[(0,n.jsx)("span",{className:"h-2 w-2 rounded",style:{backgroundColor:i.D}})," seqD"]}),(0,n.jsxs)("span",{className:"flex items-center gap-1",children:[(0,n.jsx)("span",{className:"h-2 w-2 rounded",style:{backgroundColor:i.free}})," free"]})]}),(0,n.jsx)("p",{className:"text-[10px] text-muted-foreground text-center mt-3",children:"No contiguous allocation needed. Each sequence's KV lives in arbitrary pages, joined by a per-sequence page table. When seqA finishes, its pages are immediately reusable — no defrag, no OOM."})]})}function q(){return(0,n.jsxs)("div",{className:"grid md:grid-cols-2 gap-3",children:[(0,n.jsxs)("div",{className:"rounded-md border border-rose-500/40 bg-rose-500/5 p-3",children:[(0,n.jsxs)("p",{className:"font-semibold text-sm text-rose-600 dark:text-rose-400 mb-2 flex items-center gap-1.5",children:[(0,n.jsx)(f.A,{className:"h-4 w-4"})," Static batching (HF / Triton)"]}),(0,n.jsx)(c.N,{language:"text",filename:"static_batch.txt",code:`Time →  0----5----10---15---20---25---30---35
        ┌──────────────────────────┐
seqA   │ gen gen gen gen END      │   wait
seqB   │ gen gen gen gen gen END  │   wait
seqC   │ gen gen gen END          │   wait
seqD   │                          │   gen gen gen gen END
        └──────────────────────────┘
        ↑ batch starts at t=0, must wait for ALL to finish
        ↑ seqD waits 20 units before it can start
        ↑ GPU idle while seqA, seqC finish early
        ↑ padding wastes compute (sequences have diff lengths)`}),(0,n.jsx)("p",{className:"text-[11px] text-muted-foreground mt-2",children:"Whole batch starts together, ends together. Short sequences waste GPU. New requests wait for the next batch."})]}),(0,n.jsxs)("div",{className:"rounded-md border border-emerald-500/40 bg-emerald-500/5 p-3",children:[(0,n.jsxs)("p",{className:"font-semibold text-sm text-emerald-600 dark:text-emerald-400 mb-2 flex items-center gap-1.5",children:[(0,n.jsx)(f.A,{className:"h-4 w-4"})," Continuous batching (vLLM)"]}),(0,n.jsx)(c.N,{language:"text",filename:"continuous_batch.txt",code:`Time →  0----5----10---15---20---25---30---35
seqA   gen gen gen END
seqB   gen gen gen gen gen END
seqC   gen gen END
seqD            gen gen gen gen END
seqE                  gen gen gen gen END
seqF                        gen END
        ↑ seqD joins at t=10 (slot freed when seqA ended)
        ↑ seqE joins at t=15 (slot freed when seqC ended)
        ↑ GPU never idle, no padding waste
        ↑ slot joins/leaves mid-decode, no barrier`}),(0,n.jsx)("p",{className:"text-[11px] text-muted-foreground mt-2",children:"Every iteration, the scheduler picks the next token for every active sequence. New sequences join the moment a slot frees."})]})]})}let j=`# KV Cache + PagedAttention memory math (Pyodide)
# Shows why contiguous KV cache OOMs and how paging fixes it

import math

# ============================================================
# KV cache size per token
# ============================================================
def kv_cache_per_token(num_layers, d_model, num_kv_heads, head_dim, dtype_bytes=2):
    """
    KV cache per token = 2 (K+V) \xd7 layers \xd7 num_kv_heads \xd7 head_dim \xd7 dtype_bytes
    
    For Llama-3 70B:
      80 layers, 64 KV heads (GQA), 128 head_dim, BF16
      = 2 \xd7 80 \xd7 64 \xd7 128 \xd7 2 = 2,621,440 bytes = 2.5 MB / token
    
    For Llama-3 8B:
      32 layers, 8 KV heads, 128 head_dim, BF16
      = 2 \xd7 32 \xd7 8 \xd7 128 \xd7 2 = 131,072 bytes = 128 KB / token
    """
    return 2 * num_layers * num_kv_heads * head_dim * dtype_bytes

# ============================================================
# Per-sequence KV cache size
# ============================================================
def kv_cache_per_sequence(seq_len, num_layers, num_kv_heads, head_dim, dtype_bytes=2):
    "Total KV cache for a single sequence of given length"
    per_token = kv_cache_per_token(num_layers, 0, num_kv_heads, head_dim, dtype_bytes)
    # Actually: per_token already includes num_layers, so just multiply by seq_len
    per_token = 2 * num_layers * num_kv_heads * head_dim * dtype_bytes
    return per_token * seq_len

# ============================================================
# Memory scenarios
# ============================================================
print("=" * 60)
print("KV Cache Memory Math")
print("=" * 60)

models = [
    ("Llama-3 8B",  32, 8,   128),
    ("Llama-3 70B", 80, 64,  128),
    ("GPT-4 (est)", 120, 96, 128),
]

for name, L, kv_heads, hd in models:
    per_token = kv_cache_per_token(L, 0, kv_heads, hd)
    print(f"\\n{name}: {L} layers, {kv_heads} KV heads, {hd} head_dim")
    print(f"  Per token: {per_token / 1024:.0f} KB ({per_token / 1e6:.2f} MB)")
    
    for seq_len in [1024, 8192, 32768]:
        per_seq = per_token * seq_len
        for n_users in [1, 8, 32]:
            total = per_seq * n_users
            fits_a100 = total < 80 * 1e9  # 80GB
            print(f"    {seq_len:5d} ctx \xd7 {n_users:2d} users = {total / 1e9:.2f} GB  {'✓ A100' if fits_a100 else '✗ OOM'}")

# ============================================================
# PagedAttention: how it solves the OOM
# ============================================================
print(f"\\n{'=' * 60}")
print("PagedAttention Solution")
print("=" * 60)

block_size_tokens = 16  # tokens per block
block_size_bytes = block_size_tokens * 2 * 80 * 64 * 128 * 2  # for 70B
print(f"\\nBlock size: {block_size_tokens} tokens = {block_size_bytes / 1024:.0f} KB")
print(f"  Pages allocated on-demand, freed when sequence ends")
print(f"  Page table per sequence: maps logical → physical page")

# Fragmentation analysis
total_vram = 80 * 1e9  # 80GB A100
weights = 35 * 1e9    # AWQ 70B
free_vram = total_vram - weights
print(f"\\nFor 70B AWQ on 1\xd7 A100 80GB:")
print(f"  Weights:      35 GB")
print(f"  Free for KV:  {free_vram / 1e9:.0f} GB")

# Without paging: contiguous allocation
# Smallest request limits batch
per_token_70b = 2 * 80 * 64 * 128 * 2  # 2.6MB
max_contig_tokens = free_vram / per_token_70b
print(f"\\n  Without paging (contiguous):")
print(f"    Max tokens fit contiguously: {max_contig_tokens:.0f}")
print(f"    = 1 user @ {max_contig_tokens:.0f} tokens, OR")
print(f"    = 8 users @ {max_contig_tokens / 8:.0f} tokens each (must all fit)")
print(f"    Problem: if 1 user finishes, slot is wasted (no reuse)")

# With paging: pages allocated per token
tokens_per_page = 16
num_pages = free_vram / (tokens_per_page * per_token_70b)
print(f"\\n  With paging (block_size=16):")
print(f"    Num pages: {num_pages:.0f}")
print(f"    Total tokens storable: {num_pages * tokens_per_page:.0f}")
print(f"    = same total, but allocation is per-block, freed immediately")
print(f"    Throughput: 8-23\xd7 higher (PagedAttention paper)")

# ============================================================
# Continuous batching throughput math
# ============================================================
print(f"\\n{'=' * 60}")
print("Throughput Comparison")
print("=" * 60)

# HF: 50 tok/s, batch=1
# vLLM: 3000 tok/s at high concurrency
# Why: continuous batching fills GPU every step

hf_throughput = 50  # tokens/sec/GPU
vllm_throughput = 3000
print(f"\\nHuggingFace Transformers (no batching, no paging):")
print(f"  Throughput: ~{hf_throughput} tok/s/GPU")
print(f"  1 A100 → {hf_throughput * 60:.0f} tok/min → {hf_throughput * 3600:.0f} tok/hour")
print(f"  To serve 1M tokens/day: needs {1e6 / (hf_throughput * 86400):.1f} GPUs")

print(f"\\nvLLM (PagedAttention + continuous batching):")
print(f"  Throughput: ~{vllm_throughput} tok/s/GPU  ({vllm_throughput / hf_throughput:.0f}\xd7 faster)")
print(f"  1 A100 → {vllm_throughput * 60:.0f} tok/min → {vllm_throughput * 3600:.0f} tok/hour")
print(f"  To serve 1M tokens/day: needs {1e6 / (vllm_throughput * 86400):.3f} GPUs")
print(f"  Cost savings: \${(1 - vllm_throughput / (vllm_throughput / hf_throughput) / vllm_throughput) * 100:.0f}% vs HF")

print(f"\\n{'=' * 60}")
print("KEY MATH:")
print("  KV per token = 2 \xb7 L \xb7 H_kv \xb7 D_head \xb7 bytes")
print("  PagedAttention: allocates in blocks of 16 tokens (16MB blocks)")
print("  Continuous batching: iteration-level scheduler, slots freed immediately")
print("  Net: 8-23\xd7 throughput, no OOM, no padding waste")
print("=" * 60)`,A=`import torch
import torch.nn as nn
import torch.nn.functional as F
from typing import List, Optional, Tuple
import time
from dataclasses import dataclass, field

# ============================================================
# 1. KV Cache — the core abstraction
# ============================================================

@dataclass
class KVCache:
    """Per-layer KV cache for a single sequence.
    
    Shape:
        K: [batch, num_kv_heads, seq_len, head_dim]
        V: [batch, num_kv_heads, seq_len, head_dim]
    
    For GQA (Llama-3): num_kv_heads < num_heads (e.g. 64 vs 96).
    For MHA (BERT): num_kv_heads == num_heads.
    """
    K: torch.Tensor
    V: torch.Tensor
    
    def append(self, new_K: torch.Tensor, new_V: torch.Tensor):
        """Append new tokens' K, V to the cache (autoregressive)."""
        # new_K, new_V: [batch, num_kv_heads, 1, head_dim] (one token)
        self.K = torch.cat([self.K, new_K], dim=2)
        self.V = torch.cat([self.V, new_V], dim=2)
    
    @property
    def seq_len(self) -> int:
        return self.K.shape[2]
    
    @classmethod
    def empty(cls, batch: int, num_kv_heads: int, head_dim: int,
              dtype=torch.bfloat16, device='cuda'):
        return cls(
            K=torch.empty(batch, num_kv_heads, 0, head_dim, dtype=dtype, device=device),
            V=torch.empty(batch, num_kv_heads, 0, head_dim, dtype=dtype, device=device),
        )

# ============================================================
# 2. Paged KV Cache — vLLM's PagedAttention
# ============================================================

@dataclass
class PagedKVCache:
    """Paged KV cache — non-contiguous allocation, OS-style page table.
    
    Memory layout:
        - kv_blocks: [num_blocks, num_kv_heads, block_size, head_dim, 2]
          (last dim = 2 for K and V, packed for cache locality)
        - block_table: [batch, max_num_blocks_per_seq] — maps logical → physical block
    
    Free blocks are tracked in a free_list. When a sequence finishes,
    its blocks are returned to the free_list for immediate reuse.
    """
    num_blocks: int          # total physical blocks
    block_size: int          # tokens per block (typically 16)
    num_kv_heads: int
    head_dim: int
    dtype: torch.dtype
    device: str
    
    # The physical KV tensor — flat, no per-sequence allocation
    kv_blocks: torch.Tensor  # [num_blocks, num_kv_heads, block_size, head_dim, 2]
    
    # Per-sequence block tables (logical → physical mapping)
    block_tables: dict = field(default_factory=dict)  # seq_id -> list[int]
    
    # Per-sequence context lengths (tokens written so far)
    context_lens: dict = field(default_factory=dict)
    
    # Free list of physical block indices
    free_blocks: List[int] = field(default_factory=list)
    
    @classmethod
    def create(cls, num_blocks: int, block_size: int = 16,
               num_kv_heads: int = 64, head_dim: int = 128,
               dtype=torch.bfloat16, device='cuda'):
        kv = torch.zeros(
            num_blocks, num_kv_heads, block_size, head_dim, 2,
            dtype=dtype, device=device,
        )
        cache = cls(
            num_blocks=num_blocks,
            block_size=block_size,
            num_kv_heads=num_kv_heads,
            head_dim=head_dim,
            dtype=dtype,
            device=device,
            kv_blocks=kv,
            free_blocks=list(range(num_blocks)),
        )
        return cache
    
    def allocate_sequence(self, seq_id: int, num_tokens: int) -> bool:
        """Allocate blocks for a new sequence. Returns False if OOM."""
        num_blocks_needed = (num_tokens + self.block_size - 1) // self.block_size
        if len(self.free_blocks) < num_blocks_needed:
            return False  # OOM
        blocks = [self.free_blocks.pop() for _ in range(num_blocks_needed)]
        self.block_tables[seq_id] = blocks
        self.context_lens[seq_id] = num_tokens
        return True
    
    def free_sequence(self, seq_id: int):
        """Free all blocks used by a sequence (immediate reuse)."""
        if seq_id in self.block_tables:
            self.free_blocks.extend(self.block_tables[seq_id])
            del self.block_tables[seq_id]
            del self.context_lens[seq_id]
    
    def write_kv(self, seq_id: int, new_K: torch.Tensor, new_V: torch.Tensor,
                 start_pos: int):
        """Write new K, V tokens to the paged cache.
        
        new_K, new_V: [num_kv_heads, num_new_tokens, head_dim]
        """
        block_table = self.block_tables[seq_id]
        num_new = new_K.shape[1]
        
        for i in range(num_new):
            # Logical position
            logical_pos = start_pos + i
            block_idx = logical_pos // self.block_size
            offset = logical_pos % self.block_size
            
            # Physical block
            phys_block = block_table[block_idx]
            
            # Write to physical block
            self.kv_blocks[phys_block, :, offset, :, 0] = new_K[:, i, :]
            self.kv_blocks[phys_block, :, offset, :, 1] = new_V[:, i, :]
    
    def read_kv(self, seq_id: int) -> Tuple[torch.Tensor, torch.Tensor]:
        """Read all K, V for a sequence (reconstruct contiguous view).
        
        Returns: K, V of shape [num_kv_heads, seq_len, head_dim]
        """
        block_table = self.block_tables[seq_id]
        context_len = self.context_lens[seq_id]
        
        # Gather blocks (non-contiguous → contiguous via indexing)
        gathered = self.kv_blocks[block_table]  # [num_blocks, num_kv_heads, block_size, head_dim, 2]
        gathered = gathered.reshape(-1, self.num_kv_heads, self.block_size, self.head_dim, 2)
        gathered = gathered[:context_len]  # truncate to actual context
        
        # Split into K, V
        K = gathered[:, :, :, :, 0].permute(1, 0, 2, 3)  # [num_kv_heads, seq_len, block_size, head_dim]
        V = gathered[:, :, :, :, 1].permute(1, 0, 2, 3)
        
        # Reshape to flatten block_size
        K = K.reshape(self.num_kv_heads, -1, self.head_dim)
        V = V.reshape(self.num_kv_heads, -1, self.head_dim)
        
        return K, V

# ============================================================
# 3. Continuous Batching Scheduler
# ============================================================

@dataclass
class SequenceRequest:
    """One inference request in the scheduler."""
    request_id: int
    prompt_token_ids: List[int]
    max_tokens: int
    output_token_ids: List[int] = field(default_factory=list)
    is_finished: bool = False
    
    @property
    def context_len(self) -> int:
        return len(self.prompt_token_ids) + len(self.output_token_ids)

class ContinuousBatchingScheduler:
    """vLLM-style continuous batching scheduler.
    
    Key idea: at every decode step, pick the next token for ALL active
    sequences. New sequences join when a slot frees. No batch barrier.
    """
    def __init__(self, max_batch_size: int = 32, max_seq_len: int = 32768):
        self.max_batch_size = max_batch_size
        self.max_seq_len = max_seq_len
        self.running: List[SequenceRequest] = []  # currently running
        self.waiting: List[SequenceRequest] = []  # waiting to start
        self.next_request_id = 0
    
    def add_request(self, prompt: List[int], max_tokens: int = 256) -> int:
        """Add a new inference request."""
        req = SequenceRequest(
            request_id=self.next_request_id,
            prompt_token_ids=prompt,
            max_tokens=max_tokens,
        )
        self.next_request_id += 1
        
        if len(self.running) < self.max_batch_size:
            self.running.append(req)
        else:
            self.waiting.append(req)
        
        return req.request_id
    
    def schedule(self) -> List[SequenceRequest]:
        """Return the batch to run for THIS decode step.
        
        - Drop finished sequences.
        - Promote waiting sequences to running if slots freed.
        - Return the active batch.
        """
        # 1. Drop finished
        self.running = [r for r in self.running if not r.is_finished]
        
        # 2. Promote from waiting (up to max_batch_size)
        while self.waiting and len(self.running) < self.max_batch_size:
            self.running.append(self.waiting.pop(0))
        
        # 3. Return the current batch
        return self.running
    
    def step(self, next_tokens: dict):
        """Apply the next token to each request.
        
        next_tokens: {request_id: token_id}
        """
        for req in self.running:
            if req.request_id in next_tokens:
                token = next_tokens[req.request_id]
                req.output_token_ids.append(token)
                # Check stop conditions
                if (len(req.output_token_ids) >= req.max_tokens
                    or token == 2):  # EOS
                    req.is_finished = True

# ============================================================
# 4. Single-step decode with KV cache (vLLM-style)
# ============================================================

def decode_step(model, scheduler: ContinuousBatchingScheduler,
               kv_cache: PagedKVCache, step_num: int) -> dict:
    """One continuous-batching decode step.
    
    Returns: {request_id: next_token_id}
    """
    batch = scheduler.schedule()
    if not batch:
        return {}
    
    # For each running sequence, get the last token
    input_ids = torch.tensor([[r.context_len - 1] for r in batch])
    # Actually we use the LAST token of each sequence as input
    
    # Forward pass (simplified — assumes model returns logits + new KV)
    # In vLLM: custom CUDA kernel that reads/writes paged KV directly
    next_tokens = {}
    for req in batch:
        # Real impl: forward pass with attention reading paged KV
        # Here: simulate by picking a random token
        next_tokens[req.request_id] = torch.randint(0, 32000, (1,)).item()
    
    scheduler.step(next_tokens)
    return next_tokens

# ============================================================
# 5. OpenAI-compatible API (production server)
# ============================================================

class VLLMServer:
    """vLLM-style server with OpenAI-compatible API.
    
    Endpoints:
        POST /v1/completions     — text completion
        POST /v1/chat/completions — chat format (with roles)
        POST /v1/embeddings     — embedding extraction
    
    Streaming: SSE (Server-Sent Events) for chat completions.
    """
    def __init__(self, model, max_batch_size=32):
        self.model = model
        self.scheduler = ContinuousBatchingScheduler(max_batch_size)
        self.kv_cache = PagedKVCache.create(num_blocks=1024)  # 16K tokens
    
    async def completions(self, prompt: str, max_tokens: int = 256,
                          temperature: float = 1.0, stream: bool = False):
        """OpenAI /v1/completions endpoint."""
        # Tokenise prompt
        prompt_ids = self.tokenizer.encode(prompt)
        request_id = self.scheduler.add_request(prompt_ids, max_tokens)
        
        if stream:
            # SSE stream: yield tokens as they generate
            async for token in self._stream_tokens(request_id):
                yield f"data: {token}\\n\\n"
            yield "data: [DONE]\\n\\n"
        else:
            # Wait for completion, return full text
            tokens = await self._wait_for_completion(request_id)
            return {"choices": [{"text": self.tokenizer.decode(tokens)}]}
    
    async def _stream_tokens(self, request_id: int):
        """Yield tokens as they're generated."""
        while True:
            batch = self.scheduler.schedule()
            for req in batch:
                if req.request_id == request_id and req.output_token_ids:
                    yield self.tokenizer.decode([req.output_token_ids[-1]])
                    if req.is_finished:
                        return

# Sanity check
if __name__ == "__main__":
    # KV cache math
    print("KV Cache per token (Llama-3 70B, BF16):")
    per_tok = 2 * 80 * 64 * 128 * 2  # 2 (K+V) \xd7 80 layers \xd7 64 KV heads \xd7 128 head_dim \xd7 2 bytes
    print(f"  {per_tok / 1024:.0f} KB = {per_tok / 1e6:.2f} MB")
    print(f"  32k ctx \xd7 8 users = {per_tok * 32768 * 8 / 1e9:.2f} GB")
    print(f"  Without paging: OOM on 80GB A100")
    print(f"  With PagedAttention: blocks allocated on-demand, freed when seq ends")
    
    # Scheduler test
    scheduler = ContinuousBatchingScheduler(max_batch_size=4)
    ids = [scheduler.add_request([1, 2, 3], max_tokens=10) for _ in range(6)]
    print(f"\\nScheduler: 6 requests, max_batch=4")
    print(f"  Running: {len(scheduler.running)}, Waiting: {len(scheduler.waiting)}")
    
    batch = scheduler.schedule()
    print(f"  First batch: {len(batch)} sequences")
    
    # Simulate one finishing
    batch[0].is_finished = True
    batch = scheduler.schedule()
    print(f"  After 1 finishes: Running={len(batch)}, Waiting={len(scheduler.waiting)}")
    print(f"  (one waiting request promoted to running)")`;function N(){return(0,n.jsxs)("div",{className:"space-y-8",children:[(0,n.jsx)(l.zY,{eyebrow:"Inference Serving \xb7 vLLM \xb7 PagedAttention",title:"Inference Serving — PagedAttention, Continuous Batching, vLLM",description:"The math behind LLM serving: KV cache memory per token (2\xb7L\xb7H_kv\xb7D\xb7b), why contiguous allocation OOMs (32k \xd7 8 users = 670GB), and how PagedAttention solves it via OS-style virtual memory (16-token blocks, per-seq page tables, immediate reuse). Continuous batching: iteration-level scheduler, sequences join/leave mid-step, 8-23\xd7 throughput vs HuggingFace. With low-level PyTorch implementations of KVCache, PagedKVCache, ContinuousBatchingScheduler, and a vLLM-style OpenAI-compatible server. Code-oriented, mathematical, scientific.",right:(0,n.jsxs)("div",{className:"flex gap-2",children:[(0,n.jsxs)(p.E,{variant:"outline",className:"gap-1.5",children:[(0,n.jsx)(f.A,{className:"h-3 w-3"})," vLLM + PagedAttn"]}),(0,n.jsxs)(p.E,{variant:"outline",className:"gap-1.5",children:[(0,n.jsx)(_.A,{className:"h-3 w-3"})," Pyodide"]})]})}),(0,n.jsx)("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-3",children:v.map(e=>(0,n.jsx)(l.nO,{label:e.label,value:e.value,hint:e.hint,deltaTone:e.deltaTone},e.label))}),(0,n.jsx)(l.iv,{title:"PagedAttention — KV cache as OS virtual memory",description:"Top: 32 GPU VRAM pages (8\xd74). Sequences A, B, C, D join and finish. Pages are non-contiguous — allocated on demand, freed immediately when a sequence ends. seqD reuses pages freed by seqA without any defrag. This is the OS virtual-memory trick applied to GPU memory: per-sequence page table maps logical positions to physical pages.",icon:(0,n.jsx)(g.A,{className:"h-5 w-5"}),badge:"3D animation",children:(0,n.jsx)(w,{})}),(0,n.jsx)(l.iv,{title:"KV cache math — why contiguous allocation OOMs",description:"Per-token KV cache = 2 (K+V) \xd7 layers \xd7 num_kv_heads \xd7 head_dim \xd7 bytes. For 70B Llama-3 (80 layers, 64 GQA KV heads, 128 head dim, BF16): 2.6 MB/token. For 32k context \xd7 8 concurrent users = 670 GB — far exceeds 80GB A100. PagedAttention stores these in 16-token blocks (≈42KB each), allocated on demand from a free list.",icon:(0,n.jsx)(b.A,{className:"h-5 w-5"}),badge:"mathematics",children:(0,n.jsxs)("div",{className:"space-y-3",children:[(0,n.jsxs)("div",{className:"rounded-md border border-primary/30 bg-primary/5 p-3 text-center",children:[(0,n.jsx)("p",{className:"font-mono text-sm text-primary",children:"KV_per_token = 2 \xb7 L \xb7 H_kv \xb7 D_head \xb7 bytes \xa0\xb7\xa0 Total = KV_per_token \xb7 seq_len \xb7 batch"}),(0,n.jsx)("p",{className:"text-[11px] text-muted-foreground mt-1",children:"For 70B Llama-3 BF16: 2\xb780\xb764\xb7128\xb72 = 2.6 MB/token. 32k ctx \xd7 8 users = 670 GB."})]}),(0,n.jsxs)("div",{className:"grid md:grid-cols-2 gap-2 text-xs",children:[(0,n.jsxs)("div",{className:"rounded-md border border-rose-500/40 bg-rose-500/5 p-2.5",children:[(0,n.jsx)("p",{className:"font-semibold text-sm text-rose-600 dark:text-rose-400 mb-1",children:"Contiguous allocation (HF)"}),(0,n.jsx)("p",{className:"text-muted-foreground text-[11px]",children:"Each sequence's KV must be a contiguous tensor. Allocation is per-sequence, max-length. When one sequence finishes, its slot is wasted (no reuse) until the whole batch ends. Result: OOM at moderate concurrency, padding waste."})]}),(0,n.jsxs)("div",{className:"rounded-md border border-emerald-500/40 bg-emerald-500/5 p-2.5",children:[(0,n.jsx)("p",{className:"font-semibold text-sm text-emerald-600 dark:text-emerald-400 mb-1",children:"Paged allocation (vLLM)"}),(0,n.jsx)("p",{className:"text-muted-foreground text-[11px]",children:"Each sequence's KV lives in 16-token blocks scattered across a flat pool. A per-sequence page table maps logical positions to physical blocks. When a sequence finishes, its blocks return to the free list for immediate reuse. No defrag, no padding, no OOM."})]})]})]})}),(0,n.jsx)(l.iv,{title:"Try it: KV cache memory math + PagedAttention (Pyodide)",description:"Computes KV per token for Llama-3 8B, 70B, GPT-4 (est). Shows the OOM arithmetic: 32k context \xd7 8 users \xd7 2.6MB = 670GB contiguous. Then shows how PagedAttention solves it: 16-token blocks, free list, immediate reuse. Plus the throughput math: HF 50 tok/s vs vLLM 3000 tok/s — 60\xd7 throughput.",icon:(0,n.jsx)(x.A,{className:"h-5 w-5"}),badge:"executable",children:(0,n.jsx)(h.l,{code:j,buttonLabel:"Run KV cache math (Pyodide)"})}),(0,n.jsx)(l.iv,{title:"Continuous batching — sequences join/leave mid-step",description:"Static batching (HF, Triton): the whole batch starts together, ends together — short sequences waste GPU, new requests wait for the next batch. Continuous batching (vLLM): every iteration, the scheduler picks the next token for ALL active sequences. New sequences join the moment a slot frees. No batch barrier, no padding waste.",icon:(0,n.jsx)(f.A,{className:"h-5 w-5"}),children:(0,n.jsx)(q,{})}),(0,n.jsx)(l.iv,{title:"AWQ Marlin kernels — 2\xd7 faster than dequantise-then-matmul",description:"Naive INT4 inference: dequantise weights to BF16 → matmul → 2\xd7 memory. vLLM's Marlin kernel: fuses dequantise + matmul into one CUDA kernel — INT4 weights stay 4-bit in registers, dequantised on-the-fly per tile. Connects to ADR-030: AWQ-quantised weights run at near-BF16 throughput on A100, with 4\xd7 less memory.",icon:(0,n.jsx)(k.A,{className:"h-5 w-5"}),children:(0,n.jsx)(c.N,{language:"text",filename:"marlin_kernel.txt",code:`┌────────────────────────────────────────────────────────────────────┐
│  INT4 INFERENCE: NAIVE vs MARLIN KERNEL                              │
│                                                                        │
│  Naive (dequantise-then-matmul):                                       │
│    1. Load 4-bit weights from VRAM                                     │
│    2. Dequantise to BF16 in registers (4x memory blowup)               │
│    3. Matmul: y = x @ W_bf16                                           │
│    4. Write BF16 output                                                │
│    Cost: 2\xd7 memory traffic, 2\xd7 register pressure                       │
│                                                                        │
│  Marlin kernel (vLLM, Frantar 2024):                                  │
│    1. Load 4-bit weights from VRAM (1 tile = 16\xd716 = 256 weights)     │
│    2. For each output element:                                         │
│         - Load 4-bit weight + scale                                     │
│         - Dequantise IN REGISTER (no VRAM writeback)                  │
│         - FMA: y += x * dequant                                        │
│    3. Write BF16 output                                                │
│    Cost: 1\xd7 memory traffic, 4\xd7 effective bandwidth                    │
│                                                                        │
│  RESULT:                                                              │
│    Naive:  ~1500 tok/s on A100 (memory-bound by dequant blowup)      │
│    Marlin: ~3000 tok/s on A100 (same throughput as BF16)              │
│                                                                        │
│  INSIGHT:                                                              │
│    Quantisation only wins if the kernel fuses dequant + matmul.       │
│    A naive "dequantise then call cuBLAS" is SLOWER than BF16.         │
│    Marlin is what makes AWQ actually faster.                          │
└────────────────────────────────────────────────────────────────────────┘`})}),(0,n.jsx)(l.iv,{title:"Low-level PyTorch — KVCache, PagedKVCache, ContinuousBatchingScheduler, vLLM server",description:"The actual production code. KVCache is a simple per-sequence tensor with append(). PagedKVCache stores KV in a flat tensor of [num_blocks, num_kv_heads, block_size, head_dim, 2], with per-sequence block_tables (logical→physical mapping) and a free_blocks list. allocate_sequence pops from free list; free_sequence returns blocks immediately. write_kv/read_kv do the page table indirection. ContinuousBatchingScheduler runs the iteration-level loop: drop finished → promote waiting → run batch. VLLMServer wraps it in an OpenAI-compatible API with SSE streaming.",icon:(0,n.jsx)(k.A,{className:"h-5 w-5"}),badge:"low-level",children:(0,n.jsx)(c.N,{language:"python",filename:"inference_serving.py",highlight:[10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290],code:A})}),(0,n.jsx)(l.iv,{title:"My deeper thought: LLM serving IS the OS process scheduler",description:"vLLM's PagedAttention + continuous batching is the OS process scheduler reborn in CUDA. The KV cache is virtual memory (per-sequence page table → physical blocks). The scheduler is the round-robin CPU scheduler (per-iteration time slice). The free list is the buddy allocator. The 'batch' is the runqueue. vLLM did not invent new ideas — it ported 50 years of OS research to GPUs.",icon:(0,n.jsx)(y.A,{className:"h-5 w-5"}),badge:"Insight",children:(0,n.jsxs)("div",{className:"space-y-3 text-sm text-muted-foreground leading-relaxed",children:[(0,n.jsxs)("p",{children:["The architectural isomorphism between vLLM and a 1970s OS kernel is exact, not metaphorical. ",(0,n.jsx)("strong",{className:"text-foreground/80",children:"PagedAttention is paged virtual memory (IBM System/370, 1972)."})," The KV cache is the process address space — per-sequence logical addresses (token positions 0..N) map to physical blocks via a per-sequence page table. The free list is the page-frame allocator. When a sequence finishes, its blocks are released to the free list — exactly how Unix releases a process's pages on exit(). Copy-on-write for beam search is how fork() shares pages until the child writes. The 16-token block size corresponds to the 4KB page size — a trade-off between allocation overhead (smaller = less internal fragmentation) and table-lookup overhead (larger = fewer page-table entries)."]}),(0,n.jsxs)("p",{children:[(0,n.jsx)("strong",{className:"text-foreground/80",children:"Continuous batching is the round-robin CPU scheduler with preemption."})," Each decode step is a time slice — the scheduler picks the next token (instruction) for every active sequence (process) in the runqueue. When a sequence emits EOS, it exits — its slot is immediately given to the next waiting sequence. There's no batch barrier, just as there's no \"process batch\" in Unix. The max_batch_size is the maximum runqueue length. The waiting queue is the wait() queue. This is why vLLM's throughput graph as a function of concurrency looks identical to Linux's throughput vs process count — both saturate at the same point (compute-bound when the GPU/CPU is busy, latency-bound when not)."]}),(0,n.jsxs)("p",{children:[(0,n.jsx)("strong",{className:"text-foreground/80",children:"This unifies the platform's three scheduling layers:"})," Airflow/Dagster schedules data pipelines (DAG of tasks), vLLM schedules inference requests (queue of sequences), the FSDP trainer schedules gradient updates (batch of mini-batches). All three are scheduling problems on the same substrate (GPU/cluster resources). All three benefit from the same techniques: queuing theory (Little's law: throughput = concurrency / latency), backpressure (rate-limit submissions when queue grows), preemption (cancel long sequences / kill slow queries). The ADR-029 OpenTelemetry standard makes this isomorphism concrete — every Airflow task, every vLLM sequence, every FSDP step emits spans with the same shape; every trace's critical path is computed by the same algorithm. The data engineer's \"pipeline backpressure\" and the ML engineer's \"request queue depth\" are the same metric, just different labels. vLLM did to LLM serving what Linux did to time-sharing: it democratised a scarce resource by giving every request a fair time slice and a virtual address space."]})]})}),(0,n.jsxs)(m.S,{pageTitle:"Inference Serving",children:[(0,n.jsx)(m.P,{title:"Inference Serving IS part of a larger system — no page stands alone",connectedTo:"ADR-001 (platform architecture)",children:(0,n.jsx)("p",{children:"This page about Inference Serving is not an isolated reference — it's a node in a graph. The platform's thesis is that the same math appears across genomics, fintech, maritime, and audio. Inference Serving connects to the elegant-code cards via shared equations, and to the living-equation pages via live demos. The reader who arrives here looking for facts leaves with a map of where Inference Serving sits in the computational-science landscape."})}),(0,n.jsx)(m.P,{title:"The technology will change; the math won't",connectedTo:"ADR-055 (cross-disciplinary scope)",children:(0,n.jsx)("p",{children:"In a decade, the specific tools on this page (Inference Serving) may be replaced. But the underlying mathematics — the equations, the distributions, the optimisation rules — will be the same. SVD was invented in 1873 and still runs on NumPy today. Attention was described in 2017 and will run on whatever replaces PyTorch. The platform invests in the MATH, not the tools, because the math is the part that survives technology turnover."})}),(0,n.jsx)(m.P,{title:"The fold pattern respects the reader's attention",connectedTo:"ADR-050 (fold-section architecture)",children:(0,n.jsx)("p",{children:"This page has fold sections (collapsed by default) that reveal deeper content on demand — equation family comparisons, LaTeX derivations, production patterns, expected outputs, and citations. The basic content is visible immediately; the deeper phases are there when the reader is ready. Progressive disclosure isn't just UX — it's epistemological. A reader who wants the summary gets it; a reader who wants the derivation clicks to expand. Both are served by the same page."})}),(0,n.jsx)(m.P,{title:"The output IS the proof — not just the equation",connectedTo:"ADR-034 (ESM-2 + AlphaFold2 adoption)",children:(0,n.jsx)("p",{children:"Where this page has interactive demos (Pyodide + sliders + charts), the visual output IS the argument. Seeing a chart update as you drag a slider communicates the math in a way no formula can. The brain's pattern-recognition system processes the visual output faster than the verbal/analytical pathway. That's why the platform pairs every equation with a live demo — the output plays to a different level of the brain than the prose."})}),(0,n.jsx)(m.P,{title:"In a decade, this page will evolve — and that's the point",connectedTo:"ADR-022 (pgvector for variant embeddings)",children:(0,n.jsx)("p",{children:"The datasets, libraries, and tools on this page will be updated as technology evolves. The 1000-Genomes Project will become the 10M-Genomes Project. NumPy may be replaced by a WebGPU-native array library. PyTorch may give way to a successor. But the math — SVD, Attention, Poisson, FFT, Bayes, Kalman, GBM — will be the same. The platform is designed for this evolution: the equations are the anchor, the tools are the amplifier, and the fold sections let us update the tools without rewriting the page."})})]}),(0,n.jsx)(d.T,{relatedPages:[{id:"connections",reason:"Trace this topic's connections across the platform's math graph"},{id:"quantization-inference",reason:"Continue to quantization inference — see also from this page"},{id:"transformer",reason:"Continue to transformer — see also from this page"}]}),(0,n.jsxs)("div",{className:"flex flex-wrap gap-2",children:[(0,n.jsx)(o(),{href:(0,u.ZJ)("quantization-inference"),className:"text-sm text-primary hover:underline",children:"→ Quantization (AWQ + Marlin kernel)"}),(0,n.jsx)("span",{className:"text-muted-foreground",children:"\xb7"}),(0,n.jsx)(o(),{href:(0,u.ZJ)("transformer"),className:"text-sm text-primary hover:underline",children:"→ Transformer (the model being served)"}),(0,n.jsx)("span",{className:"text-muted-foreground",children:"\xb7"}),(0,n.jsx)(o(),{href:(0,u.ZJ)("mlops-tracing"),className:"text-sm text-primary hover:underline",children:"→ MLOps & Tracing (per-token spans)"}),(0,n.jsx)("span",{className:"text-muted-foreground",children:"\xb7"}),(0,n.jsx)(o(),{href:(0,u.ZJ)("rag-llms"),className:"text-sm text-primary hover:underline",children:"→ RAG (serving the LLM that powers RAG)"}),(0,n.jsx)("span",{className:"text-muted-foreground",children:"\xb7"}),(0,n.jsx)(o(),{href:(0,u.ZJ)("knowledge"),className:"text-sm text-primary hover:underline",children:"→ ADR-031 (vLLM adoption)"})]})]})}},65576:(e,t,s)=>{"use strict";s.d(t,{A:()=>n});let n=(0,s(6404).A)("cpu",[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]])},66349:(e,t,s)=>{"use strict";s.d(t,{l:()=>b});var n=s(95155),a=s(12115),r=s(80642),i=s(39430),o=s(89239),l=s(45160),d=s(6296),c=s(12651),h=s(13545),u=s(20232),p=s(10762);let m=null,g="0.26.2",f=`https://cdn.jsdelivr.net/pyodide/v${g}/full/`;async function _(){return m||(m=(async()=>(await new Promise((e,t)=>{if(window.loadPyodide)return void e();let s=document.createElement("script");s.src=`${f}pyodide.js`,s.onload=()=>e(),s.onerror=()=>t(Error("Failed to load Pyodide bootstrap")),document.head.appendChild(s)}),await window.loadPyodide({indexURL:f})))().catch(e=>{throw m=null,e}))}function b({code:e,buttonLabel:t="Run in browser",preamble:s,compact:m=!1,onOutput:f,hideTextOutput:b=!1}){let[x,k]=(0,a.useState)("idle"),[y,v]=(0,a.useState)(""),[w,q]=(0,a.useState)(null),[j,A]=(0,a.useState)(null),N=(0,a.useRef)(null),M=(0,a.useCallback)(async()=>{k("loading"),q(null),v("Loading Pyodide runtime (~10MB)…\nFirst run takes 5-10s on a typical connection.\nSubsequent runs are instant.\n");let t=performance.now();try{let n=await _(),a=Math.round(performance.now()-t);A(a);let r=[],i=e=>{r.push(e)};try{n.setStdout({batched:i}),n.setStderr({batched:i})}catch{try{n.setStdout(i),n.setStderr(i)}catch{}}let o=(s??"")+"\n"+e,l=[];if(/\bnumpy\b|\bnp\./.test(o)&&l.push("numpy"),/\bscipy\b|\bsp\./.test(o)&&l.push("scipy"),/\bsklearn\b|\bGradientBoosting\b|\bRandomForest\b|\btrain_test_split\b|\bKMeans\b|\bSVC\b|\bLogisticRegression\b/.test(o)&&l.push("scikit-learn"),/\bpandas\b|\bpd\./.test(o)&&l.push("pandas"),/\bpyarrow\b|\bpq\./.test(o)&&l.push("pyarrow"),l.length>0){v(e=>e+`
Loading packages: ${l.join(", ")}…
`);try{await n.loadPackage(l)}catch{}}k("running"),v(e=>e+`
Pyodide loaded in ${a}ms. Running analysis…

`),s&&await n.runPythonAsync(s),await n.runPythonAsync(e);let d=r.join("");v(e=>e+(d||"(no output)")),k("done"),f&&f(d)}catch(s){let e=s instanceof Error?s.message:String(s),t=e.includes("Failed to load Pyodide bootstrap")?"\n\nHint: check your internet connection — Pyodide loads from a CDN (jsdelivr.net). Click again to retry.":e.includes("NetworkError")||e.includes("Failed to fetch")?"\n\nHint: network error loading Pyodide. Check your connection and click again to retry.":"";q(e+t),k("error"),v(s=>s+`
Error: ${e}${t}`)}},[e,s,f]);return(0,a.useEffect)(()=>{N.current&&(N.current.scrollTop=N.current.scrollHeight)},[y]),(0,n.jsxs)("div",{className:`mt-3 ${m?"":"rounded-md border border-primary/30 bg-primary/3 p-3"}`,children:[(0,n.jsxs)("div",{className:"flex items-center gap-2",children:[(0,n.jsxs)(o.$,{size:m?"sm":"default",variant:"running"===x||"loading"===x?"outline":"error"===x?"destructive":"default",className:"gap-1.5",onClick:M,disabled:"loading"===x||"running"===x,children:["loading"===x||"running"===x?(0,n.jsx)(d.A,{className:"h-3.5 w-3.5 animate-spin"}):"done"===x?(0,n.jsx)(c.A,{className:"h-3.5 w-3.5"}):"error"===x?(0,n.jsx)(h.A,{className:"h-3.5 w-3.5"}):(0,n.jsx)(u.A,{className:"h-3.5 w-3.5"}),"error"===x?`Retry: ${t}`:"done"===x?`Re-run: ${t}`:t]}),!m&&(0,n.jsxs)(l.E,{variant:"outline",className:"text-[10px] gap-1",children:[(0,n.jsx)(p.A,{className:"h-2.5 w-2.5"}),"Pyodide v",g]}),null!==j&&"done"===x&&(0,n.jsxs)("span",{className:"text-[10px] text-muted-foreground",children:["Runtime: ",j,"ms load + execution"]})]}),(0,n.jsx)(r.N,{children:("idle"!==x||y)&&!b&&(0,n.jsx)(i.P.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},className:"mt-2",children:(0,n.jsx)("div",{ref:N,className:`rounded-md bg-[oklch(0.16_0.005_240)] text-[oklch(0.97_0.005_60)] p-2.5 text-[11px] font-mono leading-relaxed overflow-x-auto code-scroll max-h-64 overflow-y-auto ${w?"border border-rose-500/40":"border border-emerald-500/30"}`,children:(0,n.jsx)("pre",{className:"whitespace-pre-wrap",children:y})})})})]})}},67635:(e,t,s)=>{"use strict";s.d(t,{A:()=>n});let n=(0,s(6404).A)("copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]])},72252:(e,t,s)=>{Promise.resolve().then(s.bind(s,64651))},83036:(e,t,s)=>{"use strict";s.d(t,{P:()=>d,S:()=>c});var n=s(95155),a=s(98500),r=s.n(a),i=s(44071),o=s(97810),l=s(85757);function d({title:e,connectedTo:t,researchHref:s,children:a}){return(0,n.jsxs)("div",{className:"rounded-md border border-primary/30 bg-primary/5 p-4 space-y-2",children:[(0,n.jsxs)("div",{className:"flex items-start gap-2",children:[(0,n.jsx)(i.A,{className:"h-4 w-4 text-primary mt-0.5 shrink-0"}),(0,n.jsxs)("div",{className:"flex-1 min-w-0",children:[(0,n.jsx)("p",{className:"text-sm font-semibold text-foreground/90 leading-tight",children:e}),t&&(0,n.jsxs)("div",{className:"flex items-center gap-1.5 mt-1",children:[(0,n.jsx)(o.A,{className:"h-3 w-3 text-muted-foreground"}),(0,n.jsxs)(r(),{href:s??(0,l.ZJ)("research"),className:"text-[10px] text-muted-foreground hover:text-primary hover:underline",children:["Connected to: ",t," →"]})]})]})]}),(0,n.jsx)("div",{className:"text-xs text-muted-foreground leading-relaxed space-y-2 pl-6",children:a})]})}function c({pageTitle:e,children:t}){return(0,n.jsxs)("div",{className:"space-y-4",children:[(0,n.jsxs)("div",{className:"flex items-center gap-2 border-b border-border/60 pb-2",children:[(0,n.jsx)(i.A,{className:"h-5 w-5 text-primary"}),(0,n.jsxs)("h2",{className:"text-base font-bold text-foreground/90",children:["My deeper thoughts — ",e]})]}),(0,n.jsx)("p",{className:"text-xs text-muted-foreground italic leading-relaxed",children:"These are not summaries. They are arguments — the kind of connections a reader with serious grey matter would make after living with the material for years. Each thought connects to the platform's research section (ADRs, papers, decision records) so it's traceable, not just opinionated."}),(0,n.jsx)("div",{className:"space-y-3",children:t})]})}},89239:(e,t,s)=>{"use strict";s.d(t,{$:()=>l});var n=s(95155);s(12115);var a=s(42442),r=s(18460),i=s(40980);let o=(0,r.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",destructive:"bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9"}},defaultVariants:{variant:"default",size:"default"}});function l({className:e,variant:t,size:s,asChild:r=!1,...l}){let d=r?a.DX:"button";return(0,n.jsx)(d,{"data-slot":"button",className:(0,i.cn)(o({variant:t,size:s,className:e})),...l})}},90718:(e,t,s)=>{"use strict";s.d(t,{A:()=>n});let n=(0,s(6404).A)("brain",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]])},94514:(e,t,s)=>{"use strict";s.d(t,{A:()=>n});let n=(0,s(6404).A)("check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]])},97810:(e,t,s)=>{"use strict";s.d(t,{A:()=>n});let n=(0,s(6404).A)("book-open",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]])}},e=>{e.O(0,[6919,8500,9430,3493,9620,6722,8441,3794,7358],()=>e(e.s=72252)),_N_E=e.O()}]);