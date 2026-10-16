(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7565],{5837:(e,t,a)=>{Promise.resolve().then(a.bind(a,51044))},19776:(e,t,a)=>{"use strict";a.d(t,{N:()=>d,R:()=>l});var r=a(95155),s=a(12115),n=a(94514),i=a(67635),o=a(89239);function d({code:e,language:t="sql",filename:a,highlight:d=[]}){let[l,h]=(0,s.useState)(!1),c=e.replace(/\n$/,"").split("\n"),p=async()=>{try{await navigator.clipboard.writeText(e),h(!0),setTimeout(()=>h(!1),1500)}catch{}};return(0,r.jsxs)("div",{className:"rounded-md border border-border/60 bg-[oklch(0.16_0.005_240)] text-[oklch(0.97_0.005_60)] overflow-hidden",children:[(0,r.jsxs)("div",{className:"flex items-center justify-between px-3 py-1.5 border-b border-white/10 bg-white/5",children:[(0,r.jsxs)("div",{className:"flex items-center gap-2 text-[11px] text-white/60 font-mono",children:[(0,r.jsx)("span",{className:"h-2 w-2 rounded-full bg-rose-400"}),(0,r.jsx)("span",{className:"h-2 w-2 rounded-full bg-amber-400"}),(0,r.jsx)("span",{className:"h-2 w-2 rounded-full bg-emerald-400"}),(0,r.jsx)("span",{className:"ml-2 uppercase tracking-wider",children:t}),a&&(0,r.jsxs)("span",{className:"text-white/40",children:["\xb7 ",a]})]}),(0,r.jsxs)(o.$,{variant:"ghost",size:"sm",className:"h-6 px-2 text-[11px] text-white/70 hover:text-white hover:bg-white/10",onClick:p,"aria-label":"Copy code",children:[l?(0,r.jsx)(n.A,{className:"h-3 w-3 mr-1"}):(0,r.jsx)(i.A,{className:"h-3 w-3 mr-1"}),l?"Copied":"Copy"]})]}),(0,r.jsx)("pre",{className:"code-scroll overflow-x-auto p-3 text-[12.5px] leading-relaxed font-mono",children:(0,r.jsx)("code",{children:c.map((e,t)=>{let a=t+1,s=d.includes(a);return(0,r.jsxs)("div",{className:["flex",s?"bg-primary/20 -mx-3 px-3 border-l-2 border-primary":""].join(" "),children:[(0,r.jsx)("span",{className:"select-none text-white/30 w-8 inline-block text-right pr-3 shrink-0",children:a}),(0,r.jsx)("span",{className:"whitespace-pre",children:e||" "})]},a)})})})]})}function l({children:e}){return(0,r.jsx)("code",{className:"rounded bg-muted px-1.5 py-0.5 text-[12px] font-mono text-foreground/90 border border-border/60",children:e})}},22164:(e,t,a)=>{"use strict";a.d(t,{A:()=>r});let r=(0,a(6404).A)("external-link",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]])},51044:(e,t,a)=>{"use strict";a.d(t,{TransformerPage:()=>M});var r=a(95155),s=a(12115),n=a(39430),i=a(98500),o=a.n(i),d=a(58381),l=a(27774),h=a(19776),c=a(66349),p=a(60508),m=a(92194),x=a(85757),u=a(45160),f=a(83036),g=a(69260),y=a(53961),v=a(90718),j=a(10762),b=a(33024),w=a(65576),k=a(44071);let N=[{label:"Attention heads",value:"12-96",hint:"BERT-base: 12, GPT-3 175B: 96",deltaTone:"flat"},{label:"Context window",value:"4k-128k",hint:"GPT-4: 128k tokens, Claude: 200k",deltaTone:"flat"},{label:"Key equation",value:"softmax(QK^T/√d)V",hint:"The attention formula",deltaTone:"flat"},{label:"Params (GPT-3)",value:"175B",hint:"96 layers \xd7 96 heads \xd7 12288 dim",deltaTone:"flat"}];function A(){let[e,t]=(0,s.useState)(0);(0,s.useEffect)(()=>{let e=setInterval(()=>t(e=>(e+1)%4),1e3);return()=>clearInterval(e)},[]);let a=["The","cat","sat","on","the","mat"],i=["var(--chart-2)","var(--chart-1)","var(--chart-3)","var(--chart-4)","var(--chart-5)","var(--chart-1)"];return(0,r.jsxs)("div",{className:"rounded-md border border-border/60 bg-card p-4",children:[(0,r.jsx)("style",{children:`
        .attn-3d { perspective: 600px; }
        .attn-card { transform: rotateX(10deg); transform-style: preserve-3d; }
      `}),(0,r.jsx)("div",{className:"attn-3d",children:(0,r.jsxs)("div",{className:"attn-card",children:[(0,r.jsx)("div",{className:"flex justify-center gap-1 mb-3",children:a.map((t,a)=>(0,r.jsx)(n.P.div,{animate:{scale:0===e&&2===a?1.3:1,backgroundColor:0===e&&2===a?"var(--primary)":"var(--muted)",color:0===e&&2===a?"var(--primary-foreground)":"var(--muted-foreground)"},className:"rounded px-2 py-1 text-xs font-mono",children:t},a))}),(0,r.jsxs)("svg",{viewBox:"0 0 300 80",className:"w-full h-20",children:[a.map((t,a)=>(0,r.jsx)(n.P.line,{x1:150,y1:5,x2:25+50*a,y2:70,stroke:e>=1?i[a]:"transparent",strokeWidth:e>=2?2===a?3:1.5:.5,opacity:e>=1?2===a?.9:.4:0,initial:{pathLength:0},animate:{pathLength:+(e>=1)},transition:{delay:.05*a}},a)),a.map((t,a)=>(0,r.jsx)(n.P.text,{x:25+50*a,y:78,textAnchor:"middle",fontSize:7,fill:"var(--muted-foreground)",initial:{opacity:0},animate:{opacity:+(e>=3)},children:[.05,.15,.05,.5,.05,.2][a]},`w-${a}`))]})]})}),(0,r.jsx)("div",{className:"flex justify-center gap-2 mt-2",children:["1. Query","2. Score (Q\xb7K)","3. Softmax","4. Weight V"].map((t,a)=>(0,r.jsx)("div",{className:`text-[10px] px-2 py-0.5 rounded ${e===a?"bg-primary text-primary-foreground":"text-muted-foreground"}`,children:t},t))}),(0,r.jsxs)("p",{className:"text-[10px] text-muted-foreground text-center mt-2",children:['Self-attention: "sat" attends to all tokens. Q="sat", K=all tokens. Scores = Q\xb7K',(0,r.jsx)("sup",{children:"T"}),"/√d. Softmax → weights. Output = Σ(weight \xd7 V)."]})]})}function T(){let[e,t]=(0,s.useState)(0);return(0,s.useEffect)(()=>{let e=setInterval(()=>t(e=>(e+1)%8),400);return()=>clearInterval(e)},[]),(0,r.jsxs)("div",{className:"rounded-md border border-border/60 bg-card p-4",children:[(0,r.jsx)("p",{className:"text-sm font-semibold mb-2",children:"Positional Encoding — sinusoidal"}),(0,r.jsx)("div",{className:"overflow-x-auto",children:(0,r.jsxs)("table",{className:"mx-auto",children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{className:"text-[10px] text-muted-foreground px-2 py-1",children:"pos\\d"}),Array.from({length:8},(e,t)=>(0,r.jsx)("th",{className:"text-[10px] text-muted-foreground px-1",children:t},t))]})}),(0,r.jsx)("tbody",{children:Array.from({length:6},(t,a)=>(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{className:"text-[10px] font-mono text-muted-foreground px-2 py-1",children:a}),Array.from({length:8},(t,s)=>{let i,o,d=(i=1/Math.pow(1e4,2*Math.floor(s/2)/8),s%2==0?Math.sin(a*i):Math.cos(a*i)),l=s===e;return(0,r.jsx)("td",{className:"p-0.5",children:(0,r.jsx)(n.P.div,{animate:{backgroundColor:(o=(d+1)/2)>.7?"oklch(0.55 0.16 165 / 0.8)":o>.4?"oklch(0.70 0.15 75 / 0.5)":"oklch(0.7 0 0 / 0.15)",scale:l?1.2:1,boxShadow:l?"0 0 8px oklch(0.55 0.16 165 / 0.5)":"none"},className:"h-8 w-10 rounded flex items-center justify-center text-[9px] font-mono text-white",children:d.toFixed(2)})},s)})]},a))})]})}),(0,r.jsxs)("p",{className:"text-[10px] text-muted-foreground text-center mt-2",children:["PE(pos, 2i) = sin(pos / 10000",(0,r.jsx)("sup",{children:"2i/d"}),"), PE(pos, 2i+1) = cos(pos / 10000",(0,r.jsx)("sup",{children:"2i/d"}),"). Each position gets a unique encoding — the model learns relative positions from these."]})]})}function _(){return(0,r.jsxs)("div",{className:"rounded-md border border-border/60 bg-card p-4",children:[(0,r.jsxs)("svg",{viewBox:"0 0 400 200",className:"w-full h-auto",children:[(0,r.jsx)("text",{x:"20",y:"100",fill:"var(--foreground)",fontSize:10,fontWeight:600,children:"Input"}),(0,r.jsx)("text",{x:"20",y:"112",fill:"var(--muted-foreground)",fontSize:8,children:"(seq, d_model)"}),(0,r.jsx)("line",{x1:"55",y1:"100",x2:"90",y2:"50",stroke:"var(--chart-2)",strokeWidth:1}),(0,r.jsx)("line",{x1:"55",y1:"100",x2:"90",y2:"100",stroke:"var(--chart-3)",strokeWidth:1}),(0,r.jsx)("line",{x1:"55",y1:"100",x2:"90",y2:"150",stroke:"var(--chart-4)",strokeWidth:1}),(0,r.jsx)("text",{x:"75",y:"42",fill:"var(--chart-2)",fontSize:9,children:"Q"}),(0,r.jsx)("text",{x:"75",y:"95",fill:"var(--chart-3)",fontSize:9,children:"K"}),(0,r.jsx)("text",{x:"75",y:"165",fill:"var(--chart-4)",fontSize:9,children:"V"}),[0,1,2,3].map(e=>{let t=30+40*e;return(0,r.jsxs)("g",{children:[(0,r.jsx)("rect",{x:"110",y:t,width:"60",height:"25",rx:"3",fill:`oklch(0.55 0.16 ${165+30*e} / 0.15)`,stroke:`oklch(0.55 0.16 ${165+30*e} / 0.4)`,strokeWidth:1}),(0,r.jsxs)("text",{x:"140",y:t+16,fill:"var(--foreground)",fontSize:8,textAnchor:"middle",fontWeight:600,children:["Head ",e+1]}),(0,r.jsxs)("text",{x:"140",y:t+24,fill:"var(--muted-foreground)",fontSize:6,textAnchor:"middle",children:["d_k=","\xb7"]}),(0,r.jsx)("line",{x1:"55",y1:"50",x2:"110",y2:t+12,stroke:"var(--chart-2)",strokeWidth:.5,opacity:.3}),(0,r.jsx)("line",{x1:"55",y1:"100",x2:"110",y2:t+12,stroke:"var(--chart-3)",strokeWidth:.5,opacity:.3}),(0,r.jsx)("line",{x1:"55",y1:"150",x2:"110",y2:t+12,stroke:"var(--chart-4)",strokeWidth:.5,opacity:.3})]},e)}),(0,r.jsx)("line",{x1:"170",y1:"100",x2:"210",y2:"100",stroke:"var(--muted-foreground)",strokeWidth:1}),(0,r.jsx)("text",{x:"190",y:"92",fill:"var(--muted-foreground)",fontSize:7,textAnchor:"middle",children:"concat"}),(0,r.jsx)("rect",{x:"210",y:"85",width:"50",height:"30",rx:"3",fill:"var(--primary)",opacity:.15,stroke:"var(--primary)",strokeWidth:1}),(0,r.jsx)("text",{x:"235",y:"100",fill:"var(--primary)",fontSize:9,textAnchor:"middle",fontWeight:600,children:"W_O"}),(0,r.jsx)("text",{x:"235",y:"110",fill:"var(--primary)",fontSize:6,textAnchor:"middle",children:"Linear"}),(0,r.jsx)("line",{x1:"260",y1:"100",x2:"310",y2:"100",stroke:"var(--muted-foreground)",strokeWidth:1}),(0,r.jsx)("text",{x:"330",y:"100",fill:"var(--foreground)",fontSize:10,fontWeight:600,children:"Output"}),(0,r.jsx)("text",{x:"330",y:"112",fill:"var(--muted-foreground)",fontSize:8,children:"(seq, d_model)"})]}),(0,r.jsx)("p",{className:"text-[10px] text-muted-foreground text-center mt-2",children:"Multi-head attention: h parallel attention heads, each with learned Q/K/V projections. Concatenate + linear (W_O) → output. h=12 (BERT), h=96 (GPT-3)."})]})}let P=`# Self-Attention computation in pure Python
# Shows the 4 steps: Q, K, V → scores → softmax → weighted sum

import math

def softmax(vec):
    exps = [math.exp(v) for v in vec]
    total = sum(exps)
    return [e / total for e in exps]

# Synthetic Q, K, V for 3 tokens (4-dim each)
# In a real Transformer: Q = x @ W_Q, K = x @ W_K, V = x @ W_V
Q = [[1.0, 0.5, -0.3, 0.8],   # token "The"
     [0.2, 0.9, 0.4, -0.1],   # token "cat"
     [-0.5, 0.3, 1.2, 0.6]]    # token "sat"

K = [[1.0, 0.5, -0.3, 0.8],
     [0.2, 0.9, 0.4, -0.1],
     [-0.5, 0.3, 1.2, 0.6]]

V = [[0.1, 0.9, 0.3, 0.7],
     [0.8, 0.2, 0.5, 0.1],
     [0.3, 0.6, 0.9, 0.4]]

d_k = len(Q[0])  # dimension of keys = 4

print("=" * 60)
print("Self-Attention Computation")
print("=" * 60)
print(f"\\nTokens: 3, Dimension: {d_k}")

# Step 1: Compute scores = Q @ K^T / sqrt(d_k)
print("\\n--- Step 1: Attention Scores (Q . K^T / sqrt(d_k)) ---")
scores = []
for i in range(3):
    row = []
    for j in range(3):
        dot = sum(Q[i][d] * K[j][d] for d in range(d_k))
        row.append(dot / math.sqrt(d_k))
    scores.append(row)
    
for i in range(3):
    print(f"  Token {i}: scores = {[f'{s:.3f}' for s in scores[i]]}")

# Step 2: Softmax normalisation
print("\\n--- Step 2: Softmax (normalise to probabilities) ---")
attn_weights = [softmax(scores[i]) for i in range(3)]
for i in range(3):
    print(f"  Token {i}: weights = {[f'{w:.3f}' for w in attn_weights[i]]}")

# Step 3: Weighted sum of values
print("\\n--- Step 3: Weighted sum (attention @ V) ---")
output = []
for i in range(3):
    out = [0.0] * d_k
    for j in range(3):
        for d in range(d_k):
            out[d] += attn_weights[i][j] * V[j][d]
    output.append(out)

for i in range(3):
    print(f"  Token {i}: output = {[f'{v:.3f}' for v in output[i]]}")

print(f"\\n{'=' * 60}")
print("RESULT: Self-Attention(Q, K, V) = softmax(Q\xb7K^T/√d_k) \xb7 V")
print(f"\\nKey insight: each token's output is a weighted average of ALL")
print(f"tokens' values, weighted by how much it 'attends' to each.")
print(f"\\nThis is the core of the Transformer — no recurrence, no")
print(f"convolution, just attention. The model LEARNS Q/K/V weights.")
print("=" * 60)`,S=`# Positional Encoding — sinusoidal (from "Attention Is All You Need")
import math

def positional_encoding(seq_len, d_model):
    "PE(pos, 2i) = sin(pos/10000^(2i/d)), PE(pos, 2i+1) = cos(pos/10000^(2i/d))"
    pe = []
    for pos in range(seq_len):
        row = []
        for i in range(d_model):
            freq = 1 / math.pow(10000, 2 * (i // 2) / d_model)
            if i % 2 == 0:
                row.append(math.sin(pos * freq))
            else:
                row.append(math.cos(pos * freq))
        pe.append(row)
    return pe

# Generate PE for 6 positions \xd7 8 dimensions
pe = positional_encoding(6, 8)

print("=" * 60)
print("Positional Encoding — Sinusoidal")
print("=" * 60)
print(f"\\nPositions: 6, Dimensions: 8")
print(f"\\n{'Pos':>4}", end="")
for d in range(8):
    print(f"  d{d:02d}", end="")
print()

for pos in range(6):
    print(f"{pos:>4}", end="")
    for d in range(8):
        print(f" {pe[pos][d]:>5.2f}", end="")
    print()

# Show that relative positions are learnable
print(f"\\n{'=' * 60}")
print("KEY PROPERTY: dot product of PEs encodes RELATIVE position")
print()

# Dot product of PE(pos=0) and PE(pos=k) for k=0..5
for k in range(6):
    dot = sum(pe[0][d] * pe[k][d] for d in range(8))
    print(f"  PE(0) . PE({k}) = {dot:+.4f}  (closer positions → higher dot product)")

print(f"\\nThe sinusoidal encoding lets the model learn relative positions")
print(f"via linear projections of PE — no recurrence needed.")
print("=" * 60)`;function M(){return(0,r.jsxs)("div",{className:"space-y-8",children:[(0,r.jsx)(d.zY,{eyebrow:"Transformer \xb7 deep architecture",title:"Transformer Architecture Deep Dive",description:"The architecture behind GPT, BERT, Claude, and every modern LLM. Animated self-attention mechanism, sinusoidal positional encoding heatmap, multi-head attention diagram, and Pyodide demos computing real attention scores + positional encodings. With low-level PyTorch code showing exactly how MultiheadAttention is implemented.",right:(0,r.jsxs)("div",{className:"flex gap-2",children:[(0,r.jsxs)(u.E,{variant:"outline",className:"gap-1.5",children:[(0,r.jsx)(g.A,{className:"h-3 w-3"})," 3D animated"]}),(0,r.jsxs)(u.E,{variant:"outline",className:"gap-1.5",children:[(0,r.jsx)(y.A,{className:"h-3 w-3"})," Pyodide"]})]})}),(0,r.jsx)("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-3",children:N.map(e=>(0,r.jsx)(d.nO,{label:e.label,value:e.value,hint:e.hint,deltaTone:e.deltaTone},e.label))}),(0,r.jsx)(d.iv,{title:"3D Animation: Self-Attention Mechanism",description:"Watch 'sat' attend to all other tokens. 4-step cycle: Query → Score (Q\xb7K) → Softmax → Weight V. The attention weights determine how much each token contributes to the output.",icon:(0,r.jsx)(g.A,{className:"h-5 w-5"}),badge:"3D animated",children:(0,r.jsx)(A,{})}),(0,r.jsxs)(d.iv,{title:"The equation that changed AI",description:"'Attention Is All You Need' (2017). One equation that replaced recurrence + convolution with pure attention.",icon:(0,r.jsx)(v.A,{className:"h-5 w-5"}),badge:"mathematics",children:[(0,r.jsx)("div",{className:"rounded-md border border-primary/30 bg-primary/5 p-4 text-center",children:(0,r.jsxs)("p",{className:"font-mono text-lg text-primary",children:["Attention(Q, K, V) = softmax(Q \xb7 K",(0,r.jsx)("sup",{children:"T"})," / √d",(0,r.jsx)("sub",{children:"k"}),") \xb7 V"]})}),(0,r.jsxs)("div",{className:"mt-3 grid md:grid-cols-4 gap-2 text-xs",children:[(0,r.jsxs)("div",{className:"rounded-md border border-border/60 p-2",children:[(0,r.jsx)("p",{className:"font-semibold",children:"Q (Query)"}),(0,r.jsx)("p",{className:"text-muted-foreground text-[11px]",children:'"What am I looking for?" — x @ W_Q'})]}),(0,r.jsxs)("div",{className:"rounded-md border border-border/60 p-2",children:[(0,r.jsx)("p",{className:"font-semibold",children:"K (Key)"}),(0,r.jsx)("p",{className:"text-muted-foreground text-[11px]",children:'"What do I contain?" — x @ W_K'})]}),(0,r.jsxs)("div",{className:"rounded-md border border-border/60 p-2",children:[(0,r.jsx)("p",{className:"font-semibold",children:"V (Value)"}),(0,r.jsx)("p",{className:"text-muted-foreground text-[11px]",children:'"What do I contribute?" — x @ W_V'})]}),(0,r.jsxs)("div",{className:"rounded-md border border-border/60 p-2",children:[(0,r.jsxs)("p",{className:"font-semibold",children:["√d",(0,r.jsx)("sub",{children:"k"})]}),(0,r.jsx)("p",{className:"text-muted-foreground text-[11px]",children:"Scaling factor — prevents softmax saturation in high dimensions"})]})]})]}),(0,r.jsx)(d.iv,{title:"Try it: Self-attention computation (Pyodide)",description:"Computes real attention scores, softmax weights, and weighted value sums on 3 synthetic tokens. The 4-step computation that powers every Transformer. Pure Python — no PyTorch, no NumPy.",icon:(0,r.jsx)(j.A,{className:"h-5 w-5"}),badge:"executable",children:(0,r.jsx)(c.l,{code:P,buttonLabel:"Run attention computation (Pyodide)"})}),(0,r.jsx)(d.iv,{title:"Animation: Positional Encoding Heatmap",description:"Sinusoidal positional encoding gives each position a unique signature. The model learns relative positions from these encodings. Watch the dimension highlight cycle through.",icon:(0,r.jsx)(b.A,{className:"h-5 w-5"}),badge:"animated",children:(0,r.jsx)(T,{})}),(0,r.jsx)(d.iv,{title:"Try it: Positional encoding computation (Pyodide)",description:"Generates the full sinusoidal PE matrix (6 positions \xd7 8 dimensions) and shows that dot products encode relative position.",icon:(0,r.jsx)(j.A,{className:"h-5 w-5"}),badge:"executable",children:(0,r.jsx)(c.l,{code:S,buttonLabel:"Run positional encoding (Pyodide)"})}),(0,r.jsx)(d.iv,{title:"Multi-Head Attention Diagram",description:"h parallel attention heads, each with learned Q/K/V projections. Concatenate + linear (W_O) → output. h=12 (BERT-base), h=96 (GPT-3 175B).",icon:(0,r.jsx)(g.A,{className:"h-5 w-5"}),children:(0,r.jsx)(_,{})}),(0,r.jsx)(d.iv,{title:"Low-level code: MultiheadAttention in PyTorch",description:"The actual implementation. Every nn.MultiheadAttention in PyTorch is built on this pattern. Q/K/V projections, scaled dot-product, softmax, weighted sum.",icon:(0,r.jsx)(w.A,{className:"h-5 w-5"}),badge:"low-level",children:(0,r.jsx)(h.N,{language:"python",filename:"multihead_attention.py",highlight:[8,9,10,13,14,15,16,19,20,21,22,23,24,25,26,29,30,31,32,33],code:`import torch
import torch.nn as nn
import torch.nn.functional as F
import math

class MultiHeadAttention(nn.Module):
    def __init__(self, d_model=512, n_heads=8):
        super().__init__()
        self.d_model = d_model
        self.n_heads = n_heads
        self.d_k = d_model // n_heads  # dimension per head
        
        # Learnable projections
        self.W_q = nn.Linear(d_model, d_model)  # query projection
        self.W_k = nn.Linear(d_model, d_model)  # key projection
        self.W_v = nn.Linear(d_model, d_model)  # value projection
        self.W_o = nn.Linear(d_model, d_model)  # output projection
    
    def forward(self, x, mask=None):
        batch, seq_len, _ = x.shape
        
        # Project to Q, K, V
        Q = self.W_q(x)  # (batch, seq, d_model)
        K = self.W_k(x)
        V = self.W_v(x)
        
        # Reshape to (batch, n_heads, seq, d_k)
        Q = Q.view(batch, seq_len, self.n_heads, self.d_k).transpose(1, 2)
        K = K.view(batch, seq_len, self.n_heads, self.d_k).transpose(1, 2)
        V = V.view(batch, seq_len, self.n_heads, self.d_k).transpose(1, 2)
        
        # Scaled dot-product attention
        scores = torch.matmul(Q, K.transpose(-2, -1)) / math.sqrt(self.d_k)
        if mask is not None:
            scores = scores.masked_fill(mask == 0, float('-inf'))
        attn = F.softmax(scores, dim=-1)  # (batch, heads, seq, seq)
        
        # Weighted sum of values
        output = torch.matmul(attn, V)  # (batch, heads, seq, d_k)
        
        # Concatenate heads + output projection
        output = output.transpose(1, 2).contiguous().view(batch, seq_len, self.d_model)
        return self.W_o(output)  # (batch, seq, d_model)

# Usage
attn = MultiHeadAttention(d_model=512, n_heads=8)
x = torch.randn(1, 10, 512)  # batch=1, seq=10, dim=512
out = attn(x)  # → (1, 10, 512)
print(f"Input:  {x.shape}")
print(f"Output: {out.shape}")
print(f"Params: {sum(p.numel() for p in attn.parameters()):,}")`})}),(0,r.jsx)(d.iv,{title:"The full Transformer block",description:"One layer of a Transformer: multi-head attention + add&norm + feed-forward + add&norm. Stacked N times (N=6 for base, N=96 for GPT-3).",icon:(0,r.jsx)(b.A,{className:"h-5 w-5"}),children:(0,r.jsx)(h.N,{language:"text",filename:"transformer_block.txt",code:`┌──────────────────────────────────────────────────────────┐
│  TRANSFORMER BLOCK (repeated N times)                     │
│                                                          │
│  ┌────────────────────────────────────────────────────┐ │
│  │  Multi-Head Self-Attention                         │ │
│  │  Q = x @ W_Q, K = x @ W_K, V = x @ W_V             │ │
│  │  Attention = softmax(Q\xb7K^T/√d_k)\xb7V                 │ │
│  │  Output = concat(heads) @ W_O                       │ │
│  └────────────────────────────────────────────────────┘ │
│  ↓ + residual (x)                                        │
│  ↓ LayerNorm                                            │
│  ↓                                                      │
│  ┌────────────────────────────────────────────────────┐ │
│  │  Feed-Forward Network (2-layer MLP)               │ │
│  │  FFN(x) = max(0, x\xb7W_1 + b_1) \xb7 W_2 + b_2          │ │
│  │  d_model → d_ff (4\xd7) → d_model                      │ │
│  │  Activation: ReLU (original) or GELU (GPT/BERT)    │ │
│  └────────────────────────────────────────────────────┘ │
│  ↓ + residual                                           │
│  ↓ LayerNorm                                            │
│  ↓                                                      │
│  → output to next block (same shape: seq \xd7 d_model)      │
└──────────────────────────────────────────────────────────┘

GPT-3 175B: 96 blocks \xd7 96 heads \xd7 d_model=12288 \xd7 d_ff=49152
= 175,000,000,000 parameters`})}),(0,r.jsx)(d.iv,{title:"My deeper thought: attention IS content-addressable memory",description:"The deepest way to understand attention: it's content-addressable memory. Each token asks 'who has information relevant to me?' and retrieves it.",icon:(0,r.jsx)(k.A,{className:"h-5 w-5"}),badge:"Insight",children:(0,r.jsxs)("div",{className:"space-y-3 text-sm text-muted-foreground leading-relaxed",children:[(0,r.jsxs)("p",{children:['The standard explanation of attention is "tokens look at each other." But the deeper truth is: ',(0,r.jsx)("strong",{className:"text-foreground/80",children:"attention is a content-addressable memory system"}),'. Q is the query ("what do I need?"), K is the index ("what do I have?"), V is the content ("what do I contribute?"). The dot product Q\xb7K measures similarity — how relevant is each memory to the query. Softmax normalises to a probability distribution over memories. The weighted sum of V is the retrieved content.']}),(0,r.jsxs)("p",{children:["This connects directly to the platform's RAG architecture (ADR-022): ",(0,r.jsx)("strong",{className:"text-foreground/80",children:"RAG IS attention over an external knowledge base"}),". The user's question is Q. The Gold table embeddings are K+V. Cosine similarity is the dot product Q\xb7K. The top-k retrieved rows are the attention weights. The LLM's context window is the weighted sum of V. RAG is attention, just with the K+V stored in pgvector instead of in the model's parameters."]}),(0,r.jsxs)("p",{children:[(0,r.jsx)("strong",{className:"text-foreground/80",children:"The unified semantic layer (ADR-024)"})," is the final convergence: MetricFlow entities define what the K+V vectors contain (the schema). RAG (pgvector) provides the retrieval mechanism. LoRA (ADR-023) adapts the Q/K/V projections to the platform's domain. The user asks \"what was UK revenue?\" → the LoRA-adapted Q projection embeds the question → pgvector retrieves the matching Gold table rows (K\xb7V) → the LLM generates a grounded answer. Attention IS retrieval. RAG IS attention. The platform IS the Transformer's external memory."]}),(0,r.jsxs)("p",{children:["The multi-head mechanism is the model's way of attending to ",(0,r.jsx)("em",{children:"different aspects"}),' simultaneously — one head might attend to "revenue" (the number), another to "UK" (the region), another to "Q3" (the time). Each head is a different "perspective" on the same data. The multi-head attention diagram on this page shows how h parallel heads each compute their own attention, then concatenate into the final output. In the RAG analogy: each head is a different search query against the vector DB — "revenue AND UK AND Q3" vs "customers AND VIP AND churn" — each retrieving different rows, all combined into the final answer.']})]})}),(0,r.jsxs)(f.S,{pageTitle:"Transformer Architecture Deep Dive",children:[(0,r.jsx)(f.P,{title:"Transformer Architecture Deep Dive IS part of a larger system — no page stands alone",connectedTo:"ADR-001 (platform architecture)",children:(0,r.jsx)("p",{children:"This page about Transformer Architecture Deep Dive is not an isolated reference — it's a node in a graph. The platform's thesis is that the same math appears across genomics, fintech, maritime, and audio. Transformer Architecture Deep Dive connects to the elegant-code cards via shared equations, and to the living-equation pages via live demos. The reader who arrives here looking for facts leaves with a map of where Transformer Architecture Deep Dive sits in the computational-science landscape."})}),(0,r.jsx)(f.P,{title:"The technology will change; the math won't",connectedTo:"ADR-055 (cross-disciplinary scope)",children:(0,r.jsx)("p",{children:"In a decade, the specific tools on this page (Transformer Architecture Deep Dive) may be replaced. But the underlying mathematics — the equations, the distributions, the optimisation rules — will be the same. SVD was invented in 1873 and still runs on NumPy today. Attention was described in 2017 and will run on whatever replaces PyTorch. The platform invests in the MATH, not the tools, because the math is the part that survives technology turnover."})}),(0,r.jsx)(f.P,{title:"The fold pattern respects the reader's attention",connectedTo:"ADR-050 (fold-section architecture)",children:(0,r.jsx)("p",{children:"This page has fold sections (collapsed by default) that reveal deeper content on demand — equation family comparisons, LaTeX derivations, production patterns, expected outputs, and citations. The basic content is visible immediately; the deeper phases are there when the reader is ready. Progressive disclosure isn't just UX — it's epistemological. A reader who wants the summary gets it; a reader who wants the derivation clicks to expand. Both are served by the same page."})}),(0,r.jsx)(f.P,{title:"The output IS the proof — not just the equation",connectedTo:"ADR-034 (ESM-2 + AlphaFold2 adoption)",children:(0,r.jsx)("p",{children:"Where this page has interactive demos (Pyodide + sliders + charts), the visual output IS the argument. Seeing a chart update as you drag a slider communicates the math in a way no formula can. The brain's pattern-recognition system processes the visual output faster than the verbal/analytical pathway. That's why the platform pairs every equation with a live demo — the output plays to a different level of the brain than the prose."})}),(0,r.jsx)(f.P,{title:"In a decade, this page will evolve — and that's the point",connectedTo:"ADR-022 (pgvector for variant embeddings)",children:(0,r.jsx)("p",{children:"The datasets, libraries, and tools on this page will be updated as technology evolves. The 1000-Genomes Project will become the 10M-Genomes Project. NumPy may be replaced by a WebGPU-native array library. PyTorch may give way to a successor. But the math — SVD, Attention, Poisson, FFT, Bayes, Kalman, GBM — will be the same. The platform is designed for this evolution: the equations are the anchor, the tools are the amplifier, and the fold sections let us update the tools without rewriting the page."})})]}),(0,r.jsx)(p.R,{pageId:"transformer"}),(0,r.jsx)(m.B,{pageId:"transformer"}),(0,r.jsx)(l.T,{relatedPages:[{id:"connections",reason:"Trace this topic's connections across the platform's math graph"},{id:"neural-networks",reason:"Continue to neural networks — see also from this page"},{id:"fine-tuning",reason:"Continue to fine tuning — see also from this page"}]}),(0,r.jsxs)("div",{className:"flex flex-wrap gap-2",children:[(0,r.jsx)(o(),{href:(0,x.ZJ)("neural-networks"),className:"text-sm text-primary hover:underline",children:"→ Neural Networks (activation functions + backprop)"}),(0,r.jsx)("span",{className:"text-muted-foreground",children:"\xb7"}),(0,r.jsx)(o(),{href:(0,x.ZJ)("fine-tuning"),className:"text-sm text-primary hover:underline",children:"→ LLM Fine-Tuning (LoRA + DPO)"}),(0,r.jsx)("span",{className:"text-muted-foreground",children:"\xb7"}),(0,r.jsx)(o(),{href:(0,x.ZJ)("rag-llms"),className:"text-sm text-primary hover:underline",children:"→ RAG & LLMs (attention IS retrieval)"}),(0,r.jsx)("span",{className:"text-muted-foreground",children:"\xb7"}),(0,r.jsx)(o(),{href:(0,x.ZJ)("knowledge"),className:"text-sm text-primary hover:underline",children:"→ ADR-024 (semantic layer)"})]})]})}},53961:(e,t,a)=>{"use strict";a.d(t,{A:()=>r});let r=(0,a(6404).A)("zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]])},60508:(e,t,a)=>{"use strict";a.d(t,{R:()=>v});var r=a(95155),s=a(12115),n=a(45160),i=a(89239),o=a(66349),d=a(85404),l=a(58381),h=a(79275),c=a(48368),p=a(22164),m=a(86901),x=a(89123),u=a(21628),f=a(98500),g=a.n(f),y=a(85757);function v({pageId:e}){let t=(0,h.C6)(e);return 0===t.length?null:(0,r.jsxs)(l.iv,{title:"Recent research (2023-2025)",description:"Modern papers that extend the math, code, and tools on this page.",icon:(0,r.jsx)(c.A,{className:"h-5 w-5"}),badge:`${t.length} paper${1===t.length?"":"s"}`,badgeVariant:"outline",contentClassName:"space-y-4",children:[t.map((e,t)=>(0,r.jsx)(j,{entry:e},t)),(0,r.jsxs)("p",{className:"text-[11px] text-muted-foreground italic",children:[t.length," paper",1===t.length?"":"s"," mapped to this page. Each shows the key algorithm + expected output (rendered as charts when the code produces JSON). Run the code in-browser via Pyodide."]})]})}function j({entry:e}){let[t,a]=(0,s.useState)(!1),[l,h]=(0,s.useState)(null);return(0,r.jsxs)("div",{className:"rounded-lg border border-border/60 p-4 space-y-3 hover:border-primary/30 transition-colors",children:[(0,r.jsxs)("div",{className:"space-y-1",children:[(0,r.jsxs)("div",{className:"flex items-start justify-between gap-3",children:[(0,r.jsx)("h4",{className:"text-sm font-semibold leading-tight flex-1",children:e.paperTitle}),(0,r.jsx)(n.E,{variant:"outline",className:"text-[10px] shrink-0",children:e.venue})]}),(0,r.jsxs)("p",{className:"text-[11px] text-muted-foreground",children:[e.authors," \xb7 ",e.year]}),e.arxivId&&(0,r.jsxs)("a",{href:`https://arxiv.org/abs/${e.arxivId}`,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-1 text-[11px] text-primary hover:underline",children:[(0,r.jsx)(p.A,{className:"h-3 w-3"}),"arXiv:",e.arxivId]}),e.doi&&!e.arxivId&&(0,r.jsxs)("a",{href:`https://doi.org/${e.doi}`,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-1 text-[11px] text-primary hover:underline",children:[(0,r.jsx)(p.A,{className:"h-3 w-3"}),"DOI:",e.doi]})]}),(0,r.jsx)("p",{className:"text-[12px] text-muted-foreground leading-relaxed",children:e.abstract}),(0,r.jsxs)(i.$,{variant:"outline",size:"sm",onClick:()=>a(!t),className:"h-7 text-[11px] gap-1.5",children:[(0,r.jsx)(m.A,{className:"h-3 w-3"}),t?"Hide expected code":"Show expected code + visualization"]}),t&&(0,r.jsxs)("div",{className:"space-y-2",children:[(0,r.jsx)(o.l,{code:e.expectedCode,buttonLabel:"Run in browser",onOutput:e=>{try{let t=e.indexOf("{"),a=e.lastIndexOf("}");if(t>=0&&a>t){let r=e.substring(t,a+1);h(JSON.parse(r))}}catch{}},hideTextOutput:!!l,compact:!0}),l?(0,r.jsxs)("div",{className:"space-y-2",children:[(0,r.jsxs)("div",{className:"flex items-center gap-1.5",children:[(0,r.jsx)(x.A,{className:"h-3.5 w-3.5 text-primary"}),(0,r.jsx)("p",{className:"text-[10px] uppercase tracking-wider text-muted-foreground",children:"Visualization (rendered from code output)"})]}),(0,r.jsx)(d.D,{data:l,accent:"oklch(0.65 0.18 250)",sourceCode:e.expectedCode})]}):(0,r.jsxs)("div",{className:"rounded-md border border-primary/20 bg-primary/5 p-2.5",children:[(0,r.jsx)("p",{className:"text-[10px] uppercase tracking-wider text-muted-foreground mb-1",children:"Expected output"}),(0,r.jsx)("pre",{className:"text-[11px] font-mono whitespace-pre-wrap leading-relaxed",children:e.expectedOutput})]}),(0,r.jsxs)("div",{className:"rounded-md border border-emerald-500/30 bg-emerald-500/5 p-2.5",children:[(0,r.jsx)("p",{className:"text-[10px] uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-1",children:"Key insight"}),(0,r.jsx)("p",{className:"text-[12px] text-foreground/80 leading-relaxed",children:e.keyInsight})]})]}),(0,r.jsxs)(g(),{href:(0,y.ZJ)("analytics-outputs"),className:"inline-flex items-center gap-1 text-[11px] text-primary hover:underline",children:["See this math visualized on Analytics Outputs ",(0,r.jsx)(u.A,{className:"h-3 w-3"})]})]})}},65576:(e,t,a)=>{"use strict";a.d(t,{A:()=>r});let r=(0,a(6404).A)("cpu",[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]])},67635:(e,t,a)=>{"use strict";a.d(t,{A:()=>r});let r=(0,a(6404).A)("copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]])},69260:(e,t,a)=>{"use strict";a.d(t,{A:()=>r});let r=(0,a(6404).A)("network",[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]])},83036:(e,t,a)=>{"use strict";a.d(t,{P:()=>l,S:()=>h});var r=a(95155),s=a(98500),n=a.n(s),i=a(44071),o=a(97810),d=a(85757);function l({title:e,connectedTo:t,researchHref:a,children:s}){return(0,r.jsxs)("div",{className:"rounded-md border border-primary/30 bg-primary/5 p-4 space-y-2",children:[(0,r.jsxs)("div",{className:"flex items-start gap-2",children:[(0,r.jsx)(i.A,{className:"h-4 w-4 text-primary mt-0.5 shrink-0"}),(0,r.jsxs)("div",{className:"flex-1 min-w-0",children:[(0,r.jsx)("p",{className:"text-sm font-semibold text-foreground/90 leading-tight",children:e}),t&&(0,r.jsxs)("div",{className:"flex items-center gap-1.5 mt-1",children:[(0,r.jsx)(o.A,{className:"h-3 w-3 text-muted-foreground"}),(0,r.jsxs)(n(),{href:a??(0,d.ZJ)("research"),className:"text-[10px] text-muted-foreground hover:text-primary hover:underline",children:["Connected to: ",t," →"]})]})]})]}),(0,r.jsx)("div",{className:"text-xs text-muted-foreground leading-relaxed space-y-2 pl-6",children:s})]})}function h({pageTitle:e,children:t}){return(0,r.jsxs)("div",{className:"space-y-4",children:[(0,r.jsxs)("div",{className:"flex items-center gap-2 border-b border-border/60 pb-2",children:[(0,r.jsx)(i.A,{className:"h-5 w-5 text-primary"}),(0,r.jsxs)("h2",{className:"text-base font-bold text-foreground/90",children:["My deeper thoughts — ",e]})]}),(0,r.jsx)("p",{className:"text-xs text-muted-foreground italic leading-relaxed",children:"These are not summaries. They are arguments — the kind of connections a reader with serious grey matter would make after living with the material for years. Each thought connects to the platform's research section (ADRs, papers, decision records) so it's traceable, not just opinionated."}),(0,r.jsx)("div",{className:"space-y-3",children:t})]})}},86901:(e,t,a)=>{"use strict";a.d(t,{A:()=>r});let r=(0,a(6404).A)("sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]])},90718:(e,t,a)=>{"use strict";a.d(t,{A:()=>r});let r=(0,a(6404).A)("brain",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]])},94514:(e,t,a)=>{"use strict";a.d(t,{A:()=>r});let r=(0,a(6404).A)("check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]])},97810:(e,t,a)=>{"use strict";a.d(t,{A:()=>r});let r=(0,a(6404).A)("book-open",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]])}},e=>{e.O(0,[6919,8500,9430,3493,9760,7591,6012,9237,4843,9620,6722,5404,9275,2194,8441,3794,7358],()=>e(e.s=5837)),_N_E=e.O()}]);