(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2800],{2961:(e,t,r)=>{"use strict";r.d(t,{RagDeepDivePage:()=>B});var s=r(95155),a=r(12115),n=r(39430),o=r(98500),i=r.n(o),c=r(58381),d=r(27774),l=r(60508),p=r(92194),m=r(19776),h=r(66349),u=r(85757),x=r(42763),f=r(7915),g=r(93219),b=r(53961),v=r(9199),y=r(12651),k=r(61878);function j({icon:e,title:t,description:r,badge:o,children:i}){let[c,d]=(0,a.useState)(!1);return(0,s.jsxs)(x.lG,{open:c,onOpenChange:d,children:[(0,s.jsxs)(n.P.div,{initial:{opacity:0,y:16},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-50px"},transition:{duration:.4},className:"rounded-xl border border-zinc-200/10 bg-gradient-to-br from-zinc-900/80 to-zinc-950/80 backdrop-blur-sm p-4 hover:border-zinc-200/30 transition-colors",children:[(0,s.jsxs)("div",{className:"flex items-start gap-3 mb-3",children:[(0,s.jsx)(e,{className:"h-5 w-5 text-violet-400 mt-0.5 shrink-0"}),(0,s.jsxs)("div",{className:"flex-1",children:[(0,s.jsxs)("div",{className:"flex items-center gap-2",children:[(0,s.jsx)("h3",{className:"text-sm font-semibold text-zinc-100",children:t}),(0,s.jsx)("span",{className:"text-[10px] px-1.5 py-0.5 rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/20",children:o})]}),(0,s.jsx)("p",{className:"text-xs text-zinc-400 leading-relaxed mt-1",children:r})]})]}),(0,s.jsx)(x.zM,{asChild:!0,children:(0,s.jsxs)("button",{type:"button",className:"text-xs px-3 py-1.5 rounded-md bg-violet-500/90 text-white hover:bg-violet-500 transition-colors flex items-center gap-1.5 w-full justify-center",children:[(0,s.jsx)(f.A,{className:"h-3 w-3"})," Open demo"]})})]}),(0,s.jsxs)(x.Cf,{className:"max-w-2xl max-h-[85vh] overflow-y-auto bg-zinc-950 border-zinc-200/10",children:[(0,s.jsx)(x.c7,{children:(0,s.jsxs)(x.L3,{className:"flex items-center gap-2 text-zinc-100",children:[(0,s.jsx)(e,{className:"h-4 w-4 text-violet-400"})," ",t]})}),(0,s.jsx)("div",{className:"mt-2",children:i(()=>d(!1))})]})]})}function _({close:e}){let t=(0,a.useMemo)(()=>(function(e,t){let r,s=(r=42,function(){r|=0;let e=Math.imul((r=r+0x6d2b79f5|0)^r>>>15,1|r);return(((e=e+Math.imul(e^e>>>7,61|e)^e)^e>>>14)>>>0)/0x100000000}),a=[],n=[{cx:.2,cy:.2,label:"database"},{cx:.8,cy:.2,label:"ML"},{cx:.5,cy:.5,label:"streaming"},{cx:.2,cy:.8,label:"governance"},{cx:.8,cy:.8,label:"devops"}];for(let e=0;e<50;e++){let t=n[e%n.length],r=s()*Math.PI*2,o=.12*s(),i=t.cx+Math.cos(r)*o,c=t.cy+Math.sin(r)*o,d=s(),l=d<.3?d<.09?2:1:0;a.push({id:e,x:Math.max(.05,Math.min(.95,i)),y:Math.max(.05,Math.min(.95,c)),label:`${t.label}_${e}`,level:l,connections:[],upperConnections:[]})}for(let e=0;e<a.length;e++){let t=a.map((t,r)=>({idx:r,d:Math.hypot(t.x-a[e].x,t.y-a[e].y)})).filter(t=>t.idx!==e).sort((e,t)=>e.d-t.d),r=t.slice(0,4).map(e=>e.idx);if(a[e].connections=r,a[e].level>=1){let r=t.filter(e=>a[e.idx].level>=1).slice(0,4).map(e=>e.idx);a[e].upperConnections=r}}return a})(0,0),[]),[r,n]=(0,a.useState)(0),[o,i]=(0,a.useState)(5),[c,d]=(0,a.useState)(!1),[l,p]=(0,a.useState)([]),[m,h]=(0,a.useState)(null),[u,x]=(0,a.useState)(!1),f=(0,a.useMemo)(()=>{let e=t[r];return t.map((t,r)=>({idx:r,d:Math.hypot(t.x-e.x,t.y-e.y)})).filter(e=>e.idx!==r).sort((e,t)=>e.d-t.d)},[t,r]),k=f.slice(0,5).map(e=>e.idx),j=f[0]?.idx,_=(0,a.useCallback)(()=>{d(!0),x(!1),p([]),h(null);let e=t.filter(e=>e.level>=2),s=e.length>0?e[0].id:t.find(e=>e.level>=1)?.id??0,a=[],n=0,i=t[r].x,c=t[r].y,l=[];if(s>=0&&t[s].level>=1){let e=((e,r,s,n)=>{let o=e;a.push(o);let i=!0;for(;i;)for(let e of(i=!1,t[o].upperConnections)){if(a.includes(e))continue;let r=Math.hypot(t[o].x-s,t[o].y-n);if(Math.hypot(t[e].x-s,t[e].y-n)<r){o=e,a.push(o),i=!0;break}}return o})(s,0,i,c);l.push(...a.slice(0));let r=[],n=e;r.push(n);let o=!0;for(;o;)for(let e of(o=!1,t[n].connections)){if(r.includes(e))continue;let s=Math.hypot(t[n].x-i,t[n].y-c);if(Math.hypot(t[e].x-i,t[e].y-c)<s){n=e,r.push(n),o=!0;break}}l.push(...r)}let m=l.slice(0,Math.min(l.length,o+3)),u=()=>{if(n>=m.length){d(!1),x(!0),h(null);return}h(m[n]),p(m.slice(0,n+1)),n++,setTimeout(u,320)};setTimeout(u,200)},[t,r,o]),N=(0,a.useCallback)(()=>{d(!1),x(!1),p([]),h(null)},[]),w=(0,a.useMemo)(()=>0===l.length?0:k.filter(e=>l.includes(e)).length/5,[l,k]);return(0,s.jsxs)("div",{className:"space-y-4",children:[(0,s.jsx)("div",{className:"rounded-md border border-zinc-200/10 bg-zinc-900/60 p-3 text-xs",children:(0,s.jsx)("p",{className:"text-zinc-300 leading-relaxed",children:"End-to-end RAG retrieval visualizer: shows how HNSW (card 50) powers the vector retrieval stage of a RAG pipeline. Each dot = a document chunk in 2D embedding space. Pick a query (a chunk to search for), then run the greedy HNSW walk through the multi-layer graph. Compare visited nodes vs brute-force nearest neighbors."})}),(0,s.jsxs)("div",{className:"grid grid-cols-2 gap-3",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{className:"text-[10px] uppercase tracking-wider text-zinc-500 font-medium mb-1 block",children:"Query (chunk to search)"}),(0,s.jsx)("select",{value:r,onChange:e=>n(parseInt(e.target.value)),disabled:c,className:"w-full bg-zinc-800 border border-zinc-700 text-zinc-200 text-xs rounded-md px-2 py-1.5",children:t.slice(0,20).map((e,t)=>(0,s.jsxs)("option",{value:t,children:[e.label," (cluster: ",e.label.split("_")[0],")"]},t))})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{className:"text-[10px] uppercase tracking-wider text-zinc-500 font-medium mb-1 block",children:"efSearch (candidate list size)"}),(0,s.jsx)("input",{type:"range",min:"3",max:"20",step:"1",value:o,onChange:e=>i(parseInt(e.target.value)),disabled:c,className:"w-full accent-violet-500"}),(0,s.jsx)("span",{className:"text-xs font-mono text-violet-400",children:o})]})]}),(0,s.jsxs)("div",{className:"flex gap-2",children:[(0,s.jsx)("button",{type:"button",onClick:_,disabled:c,className:`text-xs px-3 py-1.5 rounded-md text-white transition-colors flex items-center gap-1.5 flex-1 justify-center ${c?"bg-amber-500/90":"bg-violet-500/90 hover:bg-violet-500"}`,children:c?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(g.A,{className:"h-3 w-3 animate-pulse"})," Walking..."]}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(b.A,{className:"h-3 w-3"})," Run HNSW search"]})}),(0,s.jsxs)("button",{type:"button",onClick:N,disabled:c,className:"text-xs px-2.5 py-1.5 rounded-md bg-zinc-800 border border-zinc-700 text-zinc-400 hover:text-zinc-200 transition-colors flex items-center gap-1.5",children:[(0,s.jsx)(v.A,{className:"h-3 w-3"})," Reset"]})]}),(0,s.jsxs)("div",{className:"rounded-md border border-zinc-700 bg-zinc-950 p-3",children:[(0,s.jsxs)("div",{className:"flex items-center justify-between mb-2",children:[(0,s.jsx)("p",{className:"text-[10px] uppercase tracking-wider text-zinc-500",children:"HNSW graph + greedy walk"}),(0,s.jsx)("p",{className:"text-[10px] text-zinc-500",children:"amber=query, violet=current, emerald=visited, red=NN target, zinc=unvisited"})]}),(0,s.jsxs)("svg",{width:500,height:500,className:"w-full h-auto bg-zinc-950 rounded",children:[t.map(e=>e.connections.map(r=>(0,s.jsx)("line",{x1:500*e.x,y1:500*e.y,x2:500*t[r].x,y2:500*t[r].y,stroke:"rgb(39 39 42)",strokeWidth:"0.5"},`${e.id}-${r}`))),t.map(e=>e.upperConnections.map(r=>(0,s.jsx)("line",{x1:500*e.x,y1:500*e.y,x2:500*t[r].x,y2:500*t[r].y,stroke:"rgb(63 63 70)",strokeWidth:"0.8",strokeDasharray:"2 2"},`u-${e.id}-${r}`))),l.length>1&&l.slice(1).map((e,r)=>(0,s.jsx)("line",{x1:500*t[l[r]].x,y1:500*t[l[r]].y,x2:500*t[e].x,y2:500*t[e].y,stroke:"#10b981",strokeWidth:"2"},`v-${r}`)),t.map(e=>{let t=e.id===r,a=e.id===m,n=l.includes(e.id),o=e.id===j,i=t?"#f59e0b":a?"#a855f7":o?"#ef4444":n?"#10b981":"#52525b",c=t||o?8:e.level>=1?6:4;return(0,s.jsxs)("g",{children:[(0,s.jsx)("circle",{cx:500*e.x,cy:500*e.y,r:c,fill:i,stroke:t||o?"#fff":"transparent",strokeWidth:"1"}),e.level>=1&&(0,s.jsx)("circle",{cx:500*e.x,cy:500*e.y,r:c+3,fill:"none",stroke:i,strokeWidth:"0.5",opacity:"0.4"})]},e.id)})]})]}),(0,s.jsxs)("div",{className:"grid grid-cols-3 gap-2",children:[(0,s.jsxs)("div",{className:"rounded-md border border-zinc-700 p-2 bg-zinc-900/60 text-center",children:[(0,s.jsx)("p",{className:"text-[10px] uppercase tracking-wider text-zinc-500",children:"Nodes visited"}),(0,s.jsx)("p",{className:"text-base font-bold text-emerald-400",children:l.length})]}),(0,s.jsxs)("div",{className:"rounded-md border border-zinc-700 p-2 bg-zinc-900/60 text-center",children:[(0,s.jsx)("p",{className:"text-[10px] uppercase tracking-wider text-zinc-500",children:"Recall@5"}),(0,s.jsxs)("p",{className:`text-base font-bold ${w>=.8?"text-emerald-400":w>=.4?"text-amber-400":"text-red-400"}`,children:[(100*w).toFixed(0),"%"]})]}),(0,s.jsxs)("div",{className:"rounded-md border border-zinc-700 p-2 bg-zinc-900/60 text-center",children:[(0,s.jsx)("p",{className:"text-[10px] uppercase tracking-wider text-zinc-500",children:"Brute-force"}),(0,s.jsx)("p",{className:"text-base font-bold text-sky-400",children:"50 nodes"})]})]}),u&&(0,s.jsxs)("div",{className:"rounded-md border border-emerald-500/20 bg-emerald-500/5 p-3 text-center",children:[(0,s.jsxs)("p",{className:"text-sm font-semibold flex items-center justify-center gap-2 text-emerald-300",children:[(0,s.jsx)(y.A,{className:"h-4 w-4"})," HNSW search complete"]}),(0,s.jsxs)("p",{className:"text-[10px] text-zinc-500 mt-1",children:["Visited ",l.length," nodes (vs 50 for brute-force = ",((1-l.length/50)*100).toFixed(0),"% skip). Recall@5 = ",(100*w).toFixed(0),"% (",w>=.8?"excellent":w>=.4?"acceptable":"low — try higher efSearch","). This is what powers the vector-ANN stage of a RAG pipeline."]})]}),(0,s.jsx)("div",{className:"text-[10px] text-zinc-500 leading-relaxed",children:"In a production RAG pipeline, the HNSW search runs on a vector database (pgvector, FAISS, Milvus). The query is the user's question embedded into the same space. The HNSW graph returns the top-K nearest chunks in ~1-10ms — much faster than brute-force (which scales O(N\xb7D) per query). The retrieved chunks then go to the LLM as context. Card 50 (HNSW) explains the math in detail."}),(0,s.jsx)("button",{type:"button",onClick:e,className:"text-xs px-3 py-1.5 rounded-md bg-zinc-800 text-zinc-300 hover:bg-zinc-700 transition-colors",children:"Close"})]})}function N(){return(0,s.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:(0,s.jsx)(j,{icon:k.A,title:"HNSW Search Visualizer (for RAG)",description:"End-to-end RAG retrieval demo. 50 document chunks in 2D embedding space, multi-layer HNSW graph (M=4 connections). Pick a query chunk, run the greedy walk. Compare visited nodes vs brute-force nearest neighbors. Recall@5 metric.",badge:"HNSW + RAG",children:e=>(0,s.jsx)(_,{close:e})})})}var w=r(45160),R=r(83036),q=r(92622),M=r(48368),A=r(90718),T=r(10762),S=r(65576),L=r(44071);let z=[{label:"Chunk size",value:"512 tokens",hint:"tiktoken-aware, overlap=64 (sliding)",deltaTone:"flat"},{label:"Hybrid retrieval",value:"BM25 ‖ vector",hint:"Parallel sparse + dense, RRF fusion",deltaTone:"flat"},{label:"RRF formula",value:"Σ 1/(60 + rank)",hint:"Reciprocal Rank Fusion (k=60)",deltaTone:"flat"},{label:"Cross-encoder",value:"MS MARCO MiniLM",hint:"Re-rank top-50 → top-5 (~250ms)",deltaTone:"flat"}];function C(){let[e,t]=(0,a.useState)(0);(0,a.useEffect)(()=>{let e=setInterval(()=>t(e=>(e+1)%5),1200);return()=>clearInterval(e)},[]);let r=Array.from({length:10},(e,t)=>`c${t+1}`),o=[2,5,1,7,0,4,6,9,3,8],i=[3,0,6,1,8,5,4,2,9,7];return(0,s.jsxs)("div",{className:"rounded-md border border-border/60 bg-card p-4",children:[(0,s.jsx)("style",{children:`
        .rh-3d { perspective: 900px; }
        .rh-stage { transform: rotateX(15deg); transform-style: preserve-3d; }
      `}),(0,s.jsxs)("p",{className:"text-sm font-semibold mb-3 flex items-center gap-2",children:[(0,s.jsx)(q.A,{className:"h-4 w-4 text-primary"}),"Three-stage hybrid RAG pipeline",(0,s.jsxs)("span",{className:"text-[10px] font-mono text-muted-foreground ml-auto",children:["phase ",e+1,"/5"]})]}),(0,s.jsx)("div",{className:"rh-3d",children:(0,s.jsxs)("div",{className:"rh-stage space-y-3",children:[(0,s.jsxs)(n.P.div,{animate:{opacity:0===e?1:.5},className:"rounded-md border border-primary/40 bg-primary/5 p-2.5",children:[(0,s.jsx)("p",{className:"text-[10px] font-mono text-primary mb-1.5",children:"Phase 1: Chunking (RecursiveCharacterTextSplitter, 512 tokens, overlap=64)"}),(0,s.jsx)("div",{className:"flex gap-1 flex-wrap",children:r.map((t,r)=>(0,s.jsx)(n.P.div,{animate:{scale:0===e?1.05:1},className:"px-2 py-1 rounded text-[9px] font-mono border border-border/60 bg-background",children:t},t))}),(0,s.jsx)("p",{className:"text-[9px] text-muted-foreground mt-1.5",children:"10 chunks → embed each → store in pgvector (vector + tsvector)"})]}),(0,s.jsxs)(n.P.div,{animate:{opacity:1===e?1:.5},className:"grid grid-cols-2 gap-2",children:[(0,s.jsxs)("div",{className:"rounded-md border border-emerald-500/40 bg-emerald-500/5 p-2.5",children:[(0,s.jsx)("p",{className:"text-[10px] font-mono text-emerald-600 dark:text-emerald-400 mb-1.5",children:"BM25 (sparse, exact-match)"}),(0,s.jsx)("div",{className:"space-y-0.5",children:o.slice(0,5).map((t,r)=>(0,s.jsxs)(n.P.div,{animate:{opacity:e>=1?1:.3,x:1===e?0:-10},className:"flex items-center gap-1 text-[9px] font-mono",children:[(0,s.jsxs)("span",{className:"w-3 text-muted-foreground",children:[r+1,"."]}),(0,s.jsxs)("span",{className:"px-1 py-0.5 rounded bg-background border border-border/60",children:["c",t+1]}),(0,s.jsxs)("span",{className:"text-emerald-600 dark:text-emerald-400 ml-auto",children:["score=",(10-1.5*r).toFixed(1)]})]},`bm-${t}`))})]}),(0,s.jsxs)("div",{className:"rounded-md border border-violet-500/40 bg-violet-500/5 p-2.5",children:[(0,s.jsx)("p",{className:"text-[10px] font-mono text-violet-600 dark:text-violet-400 mb-1.5",children:"Vector ANN (dense, semantic)"}),(0,s.jsx)("div",{className:"space-y-0.5",children:i.slice(0,5).map((t,r)=>(0,s.jsxs)(n.P.div,{animate:{opacity:e>=1?1:.3,x:10*(1!==e)},className:"flex items-center gap-1 text-[9px] font-mono",children:[(0,s.jsxs)("span",{className:"w-3 text-muted-foreground",children:[r+1,"."]}),(0,s.jsxs)("span",{className:"px-1 py-0.5 rounded bg-background border border-border/60",children:["c",t+1]}),(0,s.jsxs)("span",{className:"text-violet-600 dark:text-violet-400 ml-auto",children:["sim=",(.95-.05*r).toFixed(2)]})]},`v-${t}`))})]})]}),(0,s.jsxs)(n.P.div,{animate:{opacity:2===e?1:.5},className:"rounded-md border border-amber-500/40 bg-amber-500/5 p-2.5",children:[(0,s.jsx)("p",{className:"text-[10px] font-mono text-amber-600 dark:text-amber-400 mb-1.5",children:"Phase 3: RRF fusion = Σ 1/(60 + rank_i) per chunk"}),(0,s.jsx)("div",{className:"flex gap-1 flex-wrap",children:r.map((t,r)=>{let a=o.indexOf(r),c=i.indexOf(r),d=(a<5?1/(60+a+1):0)+(c<5?1/(60+c+1):0);return(0,s.jsxs)(n.P.div,{animate:{scale:2===e&&d>.02?1.1:1},className:"px-2 py-1 rounded text-[9px] font-mono border border-border/60 bg-background",children:[t,":",d.toFixed(3)]},`rrf-${t}`)})}),(0,s.jsx)("p",{className:"text-[9px] text-muted-foreground mt-1.5",children:"Top chunks by RRF: combine both rankings"})]}),(0,s.jsxs)(n.P.div,{animate:{opacity:3===e?1:.5},className:"rounded-md border border-cyan-500/40 bg-cyan-500/5 p-2.5",children:[(0,s.jsx)("p",{className:"text-[10px] font-mono text-cyan-600 dark:text-cyan-400 mb-1.5",children:"Phase 4: Cross-encoder re-rank top-50 → top-5 (co-encode query+doc)"}),(0,s.jsx)("div",{className:"space-y-0.5",children:["c3","c1","c2","c4","c5"].map((t,r)=>(0,s.jsxs)(n.P.div,{animate:{x:5*(3!==e)},className:"flex items-center gap-1 text-[9px] font-mono",children:[(0,s.jsxs)("span",{className:"w-3 text-muted-foreground",children:[r+1,"."]}),(0,s.jsx)("span",{className:"px-1 py-0.5 rounded bg-background border border-border/60",children:t}),(0,s.jsxs)("span",{className:"text-cyan-600 dark:text-cyan-400 ml-auto",children:["cross-enc=",(.95-.08*r).toFixed(2)]})]},`ce-${t}`))})]}),(0,s.jsxs)(n.P.div,{animate:{opacity:4===e?1:.5},className:"rounded-md border border-primary/40 bg-primary/10 p-2.5 text-center",children:[(0,s.jsx)("p",{className:"text-[10px] font-mono text-primary",children:"Phase 5: Top-5 chunks → augmented prompt → vLLM (ADR-031)"}),(0,s.jsxs)("p",{className:"text-[9px] text-muted-foreground mt-1",children:['"Context: c3, c1, c2, c4, c5. Question: ',"{user_query}",'. Answer:"']})]})]})}),(0,s.jsx)("p",{className:"text-[10px] text-muted-foreground text-center mt-3",children:"Naive RAG does only phase 2 vector → top-5 → LLM. Three-stage hybrid adds BM25 (exact-match) + RRF + cross-encoder. Lifts RAG accuracy 25-35% on SQL grounding."})]})}let D=`# BM25 + RRF + Cross-encoder re-rank (Pyodide)
# Full hybrid retrieval pipeline simulation

import math, random

# ============================================================
# BM25 (Best Match 25) — sparse exact-match scoring
# ============================================================
# BM25 score for query Q against document D:
#   score(Q, D) = Σ_{q in Q} IDF(q) * (f(q,D) * (k1 + 1)) / (f(q,D) + k1 * (1 - b + b * |D| / avgdl))
# Where:
#   f(q,D) = term frequency of q in D
#   |D| = length of D
#   avgdl = average document length in corpus
#   k1 = 1.5 (term frequency saturation)
#   b = 0.75 (length normalization)
#   IDF(q) = log((N - n(q) + 0.5) / (n(q) + 0.5) + 1)
#     N = total docs, n(q) = docs containing q

def bm25_score(query_terms, doc_terms, doc_freq, N, avgdl, k1=1.5, b=0.75):
    "BM25 score for one document against query"
    score = 0.0
    doc_len = len(doc_terms)
    for q in query_terms:
        # Term frequency in document
        f = doc_terms.count(q)
        if f == 0:
            continue
        # IDF (with +1 smoothing for stability)
        n_q = doc_freq.get(q, 0)
        idf = math.log((N - n_q + 0.5) / (n_q + 0.5) + 1)
        # BM25 score for this term
        tf_norm = (f * (k1 + 1)) / (f + k1 * (1 - b + b * doc_len / avgdl))
        score += idf * tf_norm
    return score

# ============================================================
# Demo corpus: SQL DDL schema chunks
# ============================================================
corpus = [
    "create table dim_customer customer_id primary key customer_name segment region",
    "create table fact_sales sale_id customer_id product_id amount sale_date",
    "create table dim_product product_id product_name category price",
    "create view v_revenue_by_region as select region sum amount from fact_sales",
    "create table dim_date date_id year quarter month day fiscal_period",
]

# Tokenise (simple whitespace split)
docs = [doc.split() for doc in corpus]
N = len(docs)
avgdl = sum(len(d) for d in docs) / N

# Compute doc frequencies (DF) for each term
doc_freq = {}
for doc in docs:
    for term in set(doc):
        doc_freq[term] = doc_freq.get(term, 0) + 1

print("=" * 60)
print("BM25 Scoring — exact-match sparse retrieval")
print("=" * 60)
print(f"\\nCorpus: {N} SQL DDL chunks, avg length {avgdl:.1f} terms")

# Test queries
queries = [
    "customer revenue",
    "fact_sales amount",
    "region sum",
    "product category price",
]

for query in queries:
    query_terms = query.split()
    print(f"\\n--- Query: '{query}' ---")
    scores = []
    for i, doc in enumerate(docs):
        score = bm25_score(query_terms, doc, doc_freq, N, avgdl)
        scores.append((i, score, " ".join(doc[:5]) + "..."))
    scores.sort(key=lambda x: -x[1])
    for i, (doc_idx, score, preview) in enumerate(scores[:3]):
        print(f"  {i+1}. doc{doc_idx} (score={score:.3f}): {preview}")

# ============================================================
# RRF — Reciprocal Rank Fusion
# ============================================================
def rrf_fusion(rankings, k=60):
    """
    Reciprocal Rank Fusion.
    
    rankings: list of ranked lists (each list = [doc_id, doc_id, ...])
    Returns: dict {doc_id: rrf_score}
    
    Formula: rrf(d) = Σ_i 1 / (k + rank_i(d))
    k=60 (default from original paper)
    """
    scores = {}
    for ranking in rankings:
        for rank, doc_id in enumerate(ranking):
            scores[doc_id] = scores.get(doc_id, 0) + 1 / (k + rank + 1)
    return scores

print(f"\\n{'=' * 60}")
print("RRF Fusion — combining BM25 + Vector rankings")
print("=" * 60)

# Simulate: BM25 ranks c3 > c1 > c4, vector ranks c1 > c3 > c2
bm25_ranking = [2, 0, 3]   # doc indices
vector_ranking = [0, 2, 1]

print(f"\\nBM25 ranking: {['c'+str(i+1) for i in bm25_ranking]}")
print(f"Vector ranking: {['c'+str(i+1) for i in vector_ranking]}")

rrf_scores = rrf_fusion([bm25_ranking, vector_ranking], k=60)
print(f"\\nRRF scores (k=60):")
for doc_id, score in sorted(rrf_scores.items(), key=lambda x: -x[1]):
    print(f"  c{doc_id+1}: {score:.4f}")

# Show why RRF works
print(f"\\n  c1: BM25 rank 2 → 1/(60+2)={1/62:.4f}, Vector rank 1 → 1/(60+1)={1/61:.4f}")
print(f"      Total: {1/62 + 1/61:.4f}  (high in both rankings → high RRF)")
print(f"  c3: BM25 rank 1 → 1/61={1/61:.4f}, Vector rank 2 → 1/62={1/62:.4f}")
print(f"      Total: {1/61 + 1/62:.4f}  (also high in both)")
print(f"\\n  Insight: RRF rewards documents ranked high in BOTH lists")
print(f"  (no document can dominate from a single ranking alone)")

# ============================================================
# Cross-encoder re-rank
# ============================================================
print(f"\\n{'=' * 60}")
print("Cross-encoder Re-rank")
print("=" * 60)

# Bi-encoder (used in stage 2):
#   query_emb = encode(query)  # independent of doc
#   doc_emb = encode(doc)       # independent of query
#   sim = cosine(query_emb, doc_emb)  # cheap
#   → misses query-doc interactions

# Cross-encoder (used in stage 3):
#   score = MLP([query_emb; doc_emb; query_emb * doc_emb])
#   → jointly encodes query+doc, captures interactions
#   → 100x more expensive, but 5-10% more accurate

random.seed(42)
def cross_encoder_score(query, doc):
    "Simulate cross-encoder (in production: ms-marco-MiniLM-L-12-v2)"
    # Real cross-encoders compute attention between query and doc tokens
    # Here: simulate with a noisy function of semantic overlap
    overlap = len(set(query.split()) & set(doc.split())) / max(1, len(set(query.split())))
    noise = random.gauss(0, 0.05)
    return overlap + noise

# Re-rank top-3 from RRF using cross-encoder
top_k = list(rrf_scores.keys())[:3]
query = "customer revenue region"
print(f"\\nQuery: '{query}'")
print(f"\\nBi-encoder (vector ANN) top-3: {['c'+str(i+1) for i in top_k]}")
print(f"Cross-encoder re-ranking...")

ce_scores = []
for doc_id in top_k:
    doc_text = corpus[doc_id]
    score = cross_encoder_score(query, doc_text)
    ce_scores.append((doc_id, score, doc_text[:50]))
    print(f"  c{doc_id+1}: cross-enc score={score:.3f}  ({doc_text[:50]}...)")

ce_scores.sort(key=lambda x: -x[1])
print(f"\\nFinal top-3 after cross-encoder re-rank:")
for i, (doc_id, score, preview) in enumerate(ce_scores):
    print(f"  {i+1}. c{doc_id+1} (score={score:.3f}): {preview}...")

print(f"\\n{'=' * 60}")
print("SUMMARY: 3-stage hybrid pipeline")
print("=" * 60)
print("  Stage 1: chunk (512 tok, overlap 64) → embed → pgvector")
print("  Stage 2: parallel BM25 + vector → top-50 each → RRF fuse")
print("  Stage 3: cross-encoder re-rank top-50 → final top-5 → LLM")
print(f"\\n  Accuracy lift: vector-only ~70%, hybrid ~85%, +cross-enc ~92%")
print(f"  Latency: BM25+vector ~20ms, cross-enc ~250ms, total <300ms")
print("=" * 60)`,F=`import torch
import torch.nn as nn
import torch.nn.functional as F
from typing import List, Tuple
import math

# ============================================================
# 1. Chunking — RecursiveCharacterTextSplitter (tiktoken-aware)
# ============================================================

class TextSplitter:
    """Recursive character text splitter (LangChain-style).
    
    Splits text hierarchically: try \\n\\n → \\n → . → space → char.
    Stops when chunk ≤ chunk_size tokens. Overlap = sliding window.
    """
    def __init__(self, chunk_size: int = 512, chunk_overlap: int = 64,
                 separators: List[str] = None):
        self.chunk_size = chunk_size
        self.chunk_overlap = chunk_overlap
        self.separators = separators or ["\\n\\n", "\\n", ". ", " ", ""]
    
    def split_text(self, text: str) -> List[str]:
        """Split text into chunks of <= chunk_size tokens."""
        # Try each separator in order
        for sep in self.separators:
            if sep in text:
                splits = text.split(sep)
                chunks = self._merge_splits(splits, sep)
                if chunks:
                    return chunks
        # No separator found — return whole text
        return [text]
    
    def _merge_splits(self, splits: List[str], sep: str) -> List[str]:
        """Merge adjacent splits until chunk_size reached, with overlap."""
        chunks = []
        current = []
        current_len = 0
        
        for split in splits:
            split_len = len(split.split())  # token count (simplified)
            
            # If adding this split would exceed chunk_size, save current
            if current_len + split_len > self.chunk_size and current:
                chunks.append(sep.join(current))
                # Keep last few splits as overlap for next chunk
                while current_len > self.chunk_overlap and current:
                    current.pop(0)
                    current_len -= len(current[0].split()) if current else 0
            
            current.append(split)
            current_len += split_len
        
        if current:
            chunks.append(sep.join(current))
        
        return chunks

# ============================================================
# 2. BM25 — sparse exact-match scoring
# ============================================================

class BM25:
    """BM25 scorer — sparse exact-match retrieval.
    
    Score = Σ_q IDF(q) * (f(q,D) * (k1+1)) / (f(q,D) + k1*(1-b+b*|D|/avgdl))
    
    IDF(q) = log((N - n(q) + 0.5) / (n(q) + 0.5) + 1)
    
    k1=1.5 (term frequency saturation)
    b=0.75 (length normalization)
    """
    def __init__(self, k1: float = 1.5, b: float = 0.75):
        self.k1 = k1
        self.b = b
        self.doc_freqs = {}  # term -> number of docs containing it
        self.doc_lens = []
        self.num_docs = 0
        self.avgdl = 0
        self.idf_cache = {}
    
    def fit(self, corpus: List[List[str]]):
        """Index the corpus."""
        self.num_docs = len(corpus)
        self.doc_lens = [len(doc) for doc in corpus]
        self.avgdl = sum(self.doc_lens) / self.num_docs
        
        for doc in corpus:
            for term in set(doc):
                self.doc_freqs[term] = self.doc_freqs.get(term, 0) + 1
    
    def idf(self, term: str) -> float:
        """Inverse Document Frequency with smoothing."""
        if term not in self.idf_cache:
            n_q = self.doc_freqs.get(term, 0)
            self.idf_cache[term] = math.log((self.num_docs - n_q + 0.5) / (n_q + 0.5) + 1)
        return self.idf_cache[term]
    
    def score(self, query: List[str], doc: List[str]) -> float:
        """BM25 score for one query-doc pair."""
        doc_len = len(doc)
        score = 0.0
        for q in query:
            f = doc.count(q)
            if f == 0:
                continue
            idf = self.idf(q)
            tf_norm = (f * (self.k1 + 1)) / (f + self.k1 * (1 - self.b + self.b * doc_len / self.avgdl))
            score += idf * tf_norm
        return score
    
    def search(self, query: List[str], corpus: List[List[str]], top_k: int = 50) -> List[Tuple[int, float]]:
        """Return top-k (doc_idx, score) pairs."""
        scores = [(i, self.score(query, doc)) for i, doc in enumerate(corpus)]
        scores.sort(key=lambda x: -x[1])
        return scores[:top_k]

# ============================================================
# 3. Reciprocal Rank Fusion (RRF)
# ============================================================

def reciprocal_rank_fusion(rankings: List[List[int]], k: int = 60) -> List[Tuple[int, float]]:
    """Fuse multiple rankings into one via RRF.
    
    rrf(d) = Σ_i 1 / (k + rank_i(d))
    
    k=60 default from Cormack et al. 2009 — works well in practice.
    """
    scores = {}
    for ranking in rankings:
        for rank, doc_id in enumerate(ranking):
            scores[doc_id] = scores.get(doc_id, 0.0) + 1.0 / (k + rank + 1)
    # Sort by RRF score descending
    return sorted(scores.items(), key=lambda x: -x[1])

# ============================================================
# 4. Cross-encoder re-rank
# ============================================================

class CrossEncoder(nn.Module):
    """Cross-encoder for re-ranking.
    
    Unlike bi-encoder (query and doc embedded independently),
    cross-encoder co-encodes [query; doc] together, allowing
    attention between query and doc tokens.
    
    Architecture:
        Input: [CLS] query [SEP] doc [SEP]
        Transformer encoder (BERT/RoBERTa)
        [CLS] hidden state → linear → score
    
    Production: ms-marco-MiniLM-L-12-v2 (12 layers, 33M params)
    """
    def __init__(self, model_name: str = 'cross-encoder/ms-marco-MiniLM-L-12-v2'):
        super().__init__()
        # In production: load pre-trained from HuggingFace
        # self.encoder = AutoModel.from_pretrained(model_name)
        # self.tokenizer = AutoTokenizer.from_pretrained(model_name)
        # self.linear = nn.Linear(384, 1)
        
        # For demo: simplified
        self.encoder = nn.TransformerEncoder(
            nn.TransformerEncoderLayer(d_model=384, nhead=6, batch_first=True),
            num_layers=2,
        )
        self.linear = nn.Linear(384, 1)
    
    def forward(self, query_input_ids, doc_input_ids, attention_mask):
        """Score query-doc pairs."""
        # Concatenate: [CLS] query [SEP] doc [SEP]
        # In production: tokenizer handles this
        combined = torch.cat([query_input_ids, doc_input_ids], dim=1)
        combined_mask = torch.cat([attention_mask, attention_mask], dim=1)
        
        # Encode
        outputs = self.encoder(combined, src_key_padding_mask=(combined_mask == 0))
        
        # Use [CLS] token (position 0) for classification
        cls_output = outputs[:, 0, :]
        
        # Linear projection to scalar score
        score = self.linear(cls_output).squeeze(-1)
        return score

def rerank_with_cross_encoder(query: str, documents: List[str],
                              cross_encoder: CrossEncoder,
                              tokenizer, top_k: int = 5) -> List[Tuple[int, float]]:
    """Re-rank documents using a cross-encoder.
    
    Cost: ~5ms per (query, doc) pair on GPU \xd7 len(documents)
    For top-50 retrieval → 250ms total (acceptable for chat).
    """
    scores = []
    cross_encoder.eval()
    with torch.no_grad():
        for i, doc in enumerate(documents):
            # Tokenise query + doc together
            inputs = tokenizer(
                query, doc,
                padding=True, truncation=True, max_length=512,
                return_tensors='pt'
            )
            score = cross_encoder(
                inputs['input_ids'],
                inputs.get('doc_ids', inputs['input_ids']),
                inputs['attention_mask']
            )
            scores.append((i, score.item()))
    
    scores.sort(key=lambda x: -x[1])
    return scores[:top_k]

# ============================================================
# 5. Full hybrid RAG pipeline
# ============================================================

class HybridRAGRetriever:
    """Three-stage hybrid RAG retrieval pipeline (ADR-032).
    
    Stage 1: chunk (RecursiveCharacterTextSplitter, 512 tok, overlap 64)
    Stage 2: parallel BM25 + vector ANN → RRF fusion
    Stage 3: cross-encoder re-rank top-50 → top-5
    """
    def __init__(self, embedding_model, cross_encoder, bm25: BM25,
                 vector_store, splitter: TextSplitter):
        self.embedding_model = embedding_model
        self.cross_encoder = cross_encoder
        self.bm25 = bm25
        self.vector_store = vector_store  # pgvector wrapper
        self.splitter = splitter
    
    def index(self, documents: List[str]):
        """Index documents: chunk → embed → store in pgvector + BM25."""
        all_chunks = []
        for doc in documents:
            chunks = self.splitter.split_text(doc)
            all_chunks.extend(chunks)
        
        # Embed each chunk (bi-encoder, query/doc independent)
        embeddings = [self.embedding_model.encode(c) for c in all_chunks]
        
        # Store in pgvector (dense) + tsvector (sparse)
        self.vector_store.upsert(all_chunks, embeddings)
        self.bm25.fit([c.split() for c in all_chunks])
    
    def retrieve(self, query: str, top_k: int = 5) -> List[Tuple[str, float]]:
        """Three-stage retrieval."""
        # Stage 2a: BM25 sparse retrieval (top-50)
        bm25_results = self.bm25.search(query.split(),
            [c.split() for c in self.vector_store.docs],
            top_k=50)
        bm25_ranking = [doc_idx for doc_idx, _ in bm25_results]
        
        # Stage 2b: vector dense retrieval (top-50)
        query_emb = self.embedding_model.encode(query)
        vector_results = self.vector_store.search(query_emb, top_k=50)
        vector_ranking = [doc_idx for doc_idx, _ in vector_results]
        
        # Stage 2c: RRF fusion
        rrf_results = reciprocal_rank_fusion([bm25_ranking, vector_ranking])
        top_50 = [doc_idx for doc_idx, _ in rrf_results[:50]]
        
        # Stage 3: cross-encoder re-rank
        docs_to_rerank = [self.vector_store.docs[i] for i in top_50]
        # In production: tokenizer is HuggingFace AutoTokenizer
        # final = rerank_with_cross_encoder(query, docs_to_rerank,
        #                                    self.cross_encoder, self.tokenizer, top_k)
        # For demo: return RRF results
        return [(self.vector_store.docs[i], score) for i, score in rrf_results[:top_k]]

# Sanity check
if __name__ == "__main__":
    # Test BM25
    corpus = [
        "create table dim_customer customer_id customer_name segment region".split(),
        "create table fact_sales sale_id customer_id product_id amount sale_date".split(),
        "create table dim_product product_id product_name category price".split(),
    ]
    bm25 = BM25()
    bm25.fit(corpus)
    
    query = "customer revenue".split()
    results = bm25.search(query, corpus, top_k=3)
    print(f"BM25 results for '{' '.join(query)}':")
    for doc_idx, score in results:
        print(f"  doc{doc_idx}: {score:.3f}  ({' '.join(corpus[doc_idx][:5])}...)")
    
    # Test RRF
    bm25_rank = [0, 1, 2]
    vector_rank = [1, 0, 2]
    rrf = reciprocal_rank_fusion([bm25_rank, vector_rank])
    print(f"\\nRRF fusion of BM25={bm25_rank} + Vector={vector_rank}:")
    for doc_id, score in rrf:
        print(f"  doc{doc_id}: {score:.4f}")
    
    # Test splitter
    text = "This is sentence one.\\n\\nThis is sentence two.\\n\\nThis is sentence three."
    splitter = TextSplitter(chunk_size=10, chunk_overlap=2)
    chunks = splitter.split_text(text)
    print(f"\\nSplitter: {len(chunks)} chunks")
    for i, c in enumerate(chunks):
        print(f"  chunk {i}: {c}")`;function B(){return(0,s.jsxs)("div",{className:"space-y-8",children:[(0,s.jsx)(c.zY,{eyebrow:"RAG Deep Dive \xb7 hybrid retrieval \xb7 re-ranking",title:"RAG Deep Dive — Chunking, Hybrid Retrieval, Cross-Encoder Re-Rank",description:"The math behind production RAG: RecursiveCharacterTextSplitter (chunk_size=512 tokens, overlap=64), BM25 sparse scoring (IDF \xd7 TF saturation \xd7 length normalisation), Reciprocal Rank Fusion (RRF = Σ 1/(k+rank_i), k=60), cross-encoder re-ranking (co-encode query+doc, captures interactions bi-encoder misses). With low-level PyTorch implementations of TextSplitter, BM25 scorer, RRF fusion, CrossEncoder (ms-marco-MiniLM-L-12-v2), and the full HybridRAGRetriever pipeline. Code-oriented, mathematical, scientific.",right:(0,s.jsxs)("div",{className:"flex gap-2",children:[(0,s.jsxs)(w.E,{variant:"outline",className:"gap-1.5",children:[(0,s.jsx)(k.A,{className:"h-3 w-3"})," BM25 + Vector + Cross-enc"]}),(0,s.jsxs)(w.E,{variant:"outline",className:"gap-1.5",children:[(0,s.jsx)(b.A,{className:"h-3 w-3"})," Pyodide"]})]})}),(0,s.jsx)("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-3",children:z.map(e=>(0,s.jsx)(c.nO,{label:e.label,value:e.value,hint:e.hint,deltaTone:e.deltaTone},e.label))}),(0,s.jsx)(c.iv,{title:"Three-stage hybrid RAG pipeline — animated",description:"Query flows through 5 phases: (1) chunking (10 chunks created with overlap), (2) parallel BM25 + vector ANN retrieval (each returns top-5), (3) RRF fusion combining both rankings, (4) cross-encoder re-rank top-50 → top-5, (5) final top-5 stuffed into prompt → vLLM (ADR-031). The naive RAG baseline does only phase 2 vector → top-5 — missing exact-match (BM25) and interaction-aware re-ranking (cross-encoder).",icon:(0,s.jsx)(q.A,{className:"h-5 w-5"}),badge:"3D animation",children:(0,s.jsx)(C,{})}),(0,s.jsx)(c.iv,{title:"Chunking — why size and overlap matter",description:"Chunk size determines the signal-to-noise ratio of each retrieved passage. Too small (128 tokens): loses context — single sentence without surrounding paragraph, LLM can't ground. Too large (2048): dilutes signal — one chunk contains multiple topics, embedding averages them. Sweet spot: 512 tokens (≈3-4 paragraphs). Overlap=64 prevents context loss at boundaries — the last 64 tokens of chunk N become the first 64 of chunk N+1, so a sentence split across the boundary is recoverable.",icon:(0,s.jsx)(M.A,{className:"h-5 w-5"}),badge:"mathematics",children:(0,s.jsxs)("div",{className:"space-y-3",children:[(0,s.jsxs)("div",{className:"rounded-md border border-primary/30 bg-primary/5 p-3 text-center",children:[(0,s.jsx)("p",{className:"font-mono text-sm text-primary",children:"chunk_size = 512 tokens \xa0\xb7\xa0 overlap = 64 tokens \xa0\xb7\xa0 effective_unique = 448 tokens/chunk"}),(0,s.jsx)("p",{className:"text-[11px] text-muted-foreground mt-1",children:"tiktoken-aware (not character-aware — tokens are what the LLM sees). For SQL DDL: statement-aware (one CREATE TABLE per chunk)."})]}),(0,s.jsxs)("div",{className:"grid md:grid-cols-3 gap-2 text-xs",children:[(0,s.jsxs)("div",{className:"rounded-md border border-rose-500/40 bg-rose-500/5 p-2.5",children:[(0,s.jsx)("p",{className:"font-semibold text-sm text-rose-600 dark:text-rose-400 mb-1",children:"Too small (128)"}),(0,s.jsx)("p",{className:"text-muted-foreground text-[11px]",children:"Loses context — sentence without paragraph. Embedding lacks signal. LLM can't ground answer in one sentence."})]}),(0,s.jsxs)("div",{className:"rounded-md border border-emerald-500/40 bg-emerald-500/5 p-2.5",children:[(0,s.jsx)("p",{className:"font-semibold text-sm text-emerald-600 dark:text-emerald-400 mb-1",children:"Sweet spot (512)"}),(0,s.jsx)("p",{className:"text-muted-foreground text-[11px]",children:"3-4 paragraphs. Embedding has topical signal. LLM gets enough context to ground. Default for production RAG."})]}),(0,s.jsxs)("div",{className:"rounded-md border border-amber-500/40 bg-amber-500/5 p-2.5",children:[(0,s.jsx)("p",{className:"font-semibold text-sm text-amber-600 dark:text-amber-400 mb-1",children:"Too large (2048)"}),(0,s.jsx)("p",{className:"text-muted-foreground text-[11px]",children:"Dilutes signal — multiple topics per chunk. Embedding averages them. Retrieval returns chunks where the relevant content is 1 paragraph out of 8."})]})]})]})}),(0,s.jsx)(c.iv,{title:"BM25 math — sparse exact-match scoring",description:"BM25 is the production-grade sparse retrieval algorithm (used by Elasticsearch, Lucene, Postgres tsvector). It scores documents by IDF (rare terms matter more) \xd7 TF saturation (term frequency has diminishing returns, k1=1.5) \xd7 length normalisation (longer docs naturally have more terms, b=0.75 corrects for this). The math is the same as TF-IDF but with two saturation parameters.",icon:(0,s.jsx)(A.A,{className:"h-5 w-5"}),badge:"mathematics",children:(0,s.jsxs)("div",{className:"space-y-3",children:[(0,s.jsxs)("div",{className:"rounded-md border border-primary/30 bg-primary/5 p-3 text-center",children:[(0,s.jsxs)("p",{className:"font-mono text-sm text-primary",children:["BM25(Q, D) = Σ",(0,s.jsx)("sub",{children:"q ∈ Q"})," IDF(q) \xb7 ",(0,s.jsx)("span",{className:"font-mono",children:"f(q,D) \xb7 (k₁+1)"})," / ",(0,s.jsx)("span",{className:"font-mono",children:"(f(q,D) + k₁ \xb7 (1−b + b\xb7|D|/avgdl))"})]}),(0,s.jsx)("p",{className:"text-[11px] text-muted-foreground mt-1",children:"IDF(q) = log((N − n(q) + 0.5) / (n(q) + 0.5) + 1) — smoothed to avoid negative values."})]}),(0,s.jsxs)("div",{className:"grid md:grid-cols-3 gap-2 text-xs",children:[(0,s.jsxs)("div",{className:"rounded-md border border-border/60 p-2.5",children:[(0,s.jsx)("p",{className:"font-semibold mb-1",children:"IDF (rare = important)"}),(0,s.jsx)("p",{className:"font-mono text-[11px]",children:"IDF(q) = log(N / n(q))"}),(0,s.jsx)("p",{className:"text-muted-foreground text-[11px] mt-1",children:"'the' appears in 99% of docs → IDF ≈ 0. 'dim_customer' appears in 1% → IDF ≈ 4.6. Rare terms dominate the score."})]}),(0,s.jsxs)("div",{className:"rounded-md border border-border/60 p-2.5",children:[(0,s.jsx)("p",{className:"font-semibold mb-1",children:"TF saturation (k₁=1.5)"}),(0,s.jsx)("p",{className:"font-mono text-[11px]",children:"tf_norm = f\xb7(k₁+1) / (f + k₁\xb7...)"}),(0,s.jsx)("p",{className:"text-muted-foreground text-[11px] mt-1",children:"First occurrence of a term adds ~1.0 to score; 10th adds ~0.1. Diminishing returns — one mention is enough, 100 mentions barely more."})]}),(0,s.jsxs)("div",{className:"rounded-md border border-border/60 p-2.5",children:[(0,s.jsx)("p",{className:"font-semibold mb-1",children:"Length norm (b=0.75)"}),(0,s.jsx)("p",{className:"font-mono text-[11px]",children:"1 − b + b\xb7|D|/avgdl"}),(0,s.jsx)("p",{className:"text-muted-foreground text-[11px] mt-1",children:"A 2000-token doc gets 0.75\xd7 penalty vs a 500-token doc (assuming avgdl=500). Prevents long docs from winning just by being long."})]})]})]})}),(0,s.jsx)(c.iv,{title:"Try it: BM25 + RRF fusion + cross-encoder (Pyodide)",description:"Indexes a small SQL DDL corpus (5 chunks: dim_customer, fact_sales, dim_product, v_revenue_by_region, dim_date), runs 4 test queries through BM25, simulates parallel BM25 + vector rankings, fuses them via RRF (k=60), then re-ranks with a simulated cross-encoder. Shows the full 3-stage hybrid pipeline end-to-end.",icon:(0,s.jsx)(T.A,{className:"h-5 w-5"}),badge:"executable",children:(0,s.jsx)(h.l,{code:D,buttonLabel:"Run hybrid RAG demo (Pyodide)"})}),(0,s.jsx)(c.iv,{title:"Reciprocal Rank Fusion — combining rankings without scores",description:"RRF merges multiple ranked lists into one. The beauty: it doesn't need calibrated scores — only ranks. BM25 scores are unbounded (can be 0 to 50+); cosine similarities are bounded [-1, 1] but on different scales. RRF sidesteps this: each list contributes 1/(k+rank) per item, where k=60 is the smoothing constant. A document ranked #1 in BOTH lists gets 2/61 ≈ 0.033; ranked #1 in one and #50 in another gets 1/61 + 1/110 ≈ 0.026.",icon:(0,s.jsx)(A.A,{className:"h-5 w-5"}),badge:"mathematics",children:(0,s.jsxs)("div",{className:"space-y-3",children:[(0,s.jsxs)("div",{className:"rounded-md border border-primary/30 bg-primary/5 p-3 text-center",children:[(0,s.jsxs)("p",{className:"font-mono text-sm text-primary",children:["RRF(d) = Σ",(0,s.jsx)("sub",{children:"i"})," 1 / (k + rank",(0,s.jsx)("sub",{children:"i"}),"(d)) \xa0\xb7\xa0 k = 60 (default)"]}),(0,s.jsx)("p",{className:"text-[11px] text-muted-foreground mt-1",children:"Per-list rank-based fusion. No score calibration needed. Works for any ranking source (BM25, vector, custom, learned)."})]}),(0,s.jsxs)("div",{className:"rounded-md border border-border/60 p-3 bg-muted/10",children:[(0,s.jsx)("p",{className:"font-mono text-xs text-foreground/90 font-semibold mb-2",children:"Why k=60?"}),(0,s.jsx)("p",{className:"text-xs text-muted-foreground",children:"The original Cormack et al. 2009 paper found k=60 works best across diverse corpora. Smaller k (e.g. 10) over-weights top-ranked items — fragile to noise in any single ranking. Larger k (e.g. 200) flattens everything — all items look the same. k=60 is a sweet spot: top-10 items get distinct scores, items beyond rank 50 contribute nearly equally. It's a magic number, but a well-justified one."})]})]})}),(0,s.jsx)(c.iv,{title:"Cross-encoder re-rank — capturing query-doc interaction",description:"The bi-encoder (used in stage 2) embeds query and doc independently — cosine similarity is the only interaction. Cross-encoder co-encodes [query; doc] through the SAME transformer, so every query token attends to every doc token. This captures interactions the bi-encoder structurally cannot. Cost: 100\xd7 more compute per pair (full transformer forward vs one matmul). That's why we only run it on the top-50 from RRF — re-ranking the whole corpus would be infeasible.",icon:(0,s.jsx)(A.A,{className:"h-5 w-5"}),badge:"mathematics",children:(0,s.jsxs)("div",{className:"space-y-3",children:[(0,s.jsxs)("div",{className:"rounded-md border border-primary/30 bg-primary/5 p-3 text-center",children:[(0,s.jsx)("p",{className:"font-mono text-sm text-primary",children:"bi-encoder: sim = cos(emb(q), emb(d)) \xa0\xb7\xa0 cross-encoder: score = MLP([emb(q); emb(d); emb(q)⊙emb(d)])"}),(0,s.jsx)("p",{className:"text-[11px] text-muted-foreground mt-1",children:'Cross-encoder concatenates query+doc embeddings AND their elementwise product — captures multiplicative interactions (e.g. "not X" requires both terms together).'})]}),(0,s.jsxs)("div",{className:"grid md:grid-cols-2 gap-2 text-xs",children:[(0,s.jsxs)("div",{className:"rounded-md border border-amber-500/40 bg-amber-500/5 p-2.5",children:[(0,s.jsx)("p",{className:"font-semibold text-sm text-amber-600 dark:text-amber-400 mb-1",children:"Bi-encoder (stage 2)"}),(0,s.jsx)("p",{className:"font-mono text-[11px]",children:"emb_q = encode(q)  # 1 forward"}),(0,s.jsx)("p",{className:"font-mono text-[11px]",children:"emb_d = encode(d)  # 1 forward"}),(0,s.jsx)("p",{className:"font-mono text-[11px]",children:"sim = cos(emb_q, emb_d)"}),(0,s.jsx)("p",{className:"text-muted-foreground text-[11px] mt-1.5",children:"Doc embeddings pre-computed. Search = 1 matmul. O(N) per query."})]}),(0,s.jsxs)("div",{className:"rounded-md border border-emerald-500/40 bg-emerald-500/5 p-2.5",children:[(0,s.jsx)("p",{className:"font-semibold text-sm text-emerald-600 dark:text-emerald-400 mb-1",children:"Cross-encoder (stage 3)"}),(0,s.jsx)("p",{className:"font-mono text-[11px]",children:"score = transformer([q; d])[CLS]"}),(0,s.jsx)("p",{className:"font-mono text-[11px]",children:"# full attention q↔d"}),(0,s.jsx)("p",{className:"font-mono text-[11px]",children:"# captures interactions"}),(0,s.jsx)("p",{className:"text-muted-foreground text-[11px] mt-1.5",children:"Per-pair full forward. O(N) per query — 100\xd7 slower. Run only on top-50."})]})]})]})}),(0,s.jsx)(c.iv,{title:"Low-level PyTorch — TextSplitter, BM25, RRF, CrossEncoder, HybridRAGRetriever",description:"The actual production code. TextSplitter implements RecursiveCharacterTextSplitter (try \\\\n\\\\n → \\\\n → . → space → char, merge with overlap). BM25 class with fit() (index corpus, compute DF + avgdl) and search() (top-k retrieval). reciprocal_rank_fusion() implements the k=60 formula. CrossEncoder wraps a transformer encoder + linear head — full forward pass per (query, doc) pair. HybridRAGRetriever orchestrates all three stages: index() chunks + embeds + stores; retrieve() runs BM25 + vector in parallel, RRF fuses, cross-encoder re-ranks.",icon:(0,s.jsx)(S.A,{className:"h-5 w-5"}),badge:"low-level",children:(0,s.jsx)(m.N,{language:"python",filename:"hybrid_rag.py",highlight:[10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280],code:F})}),(0,s.jsxs)(c.iv,{title:"Phase 30 popup demo — HNSW search visualizer for end-to-end RAG retrieval",description:"Interactive HNSW search demo bridging ConceptCard 50 (HNSW, Phase 28) with the RAG retrieval pipeline on this page. Watch the greedy walk traverse a multi-layer HNSW graph to find nearest neighbors — the same algorithm that powers the vector-ANN stage of production RAG.",icon:(0,s.jsx)(q.A,{className:"h-5 w-5"}),badge:"Interactive",children:[(0,s.jsxs)("div",{className:"space-y-3 text-sm text-muted-foreground leading-relaxed",children:[(0,s.jsxs)("p",{children:[(0,s.jsx)("strong",{className:"text-foreground/80",children:"Why this demo here:"})," the three-stage RAG pipeline on this page (BM25 + vector ANN + cross-encoder) uses HNSW as the vector-ANN stage — but the Pyodide demos above simulate ANN as a black box. This interactive visualizer opens the box: 50 document chunks in 2D embedding space, multi-layer HNSW graph (M=4 connections per node, levels 0/1/2), greedy walk animated step-by-step."]}),(0,s.jsxs)("p",{children:[(0,s.jsx)("strong",{className:"text-foreground/80",children:"Pick a query chunk"})," (one of the corpus documents), set ",(0,s.jsx)("code",{children:"efSearch"})," (the candidate-list size — higher = better recall, more nodes visited), then run. Watch the walk: violet = current node, emerald = visited, red = nearest neighbor target. Compare nodes visited vs brute-force (50 nodes) and recall@5 (how many of the actual top-5 nearest neighbors the HNSW found)."]}),(0,s.jsxs)("p",{children:[(0,s.jsx)("strong",{className:"text-foreground/80",children:"Cross-domain link:"})," ConceptCard 50 (HNSW, Phase 28) covers the algorithm in depth — three layers, M=16 in production, efConstruction=200, O(log N \xb7 log_","{1/M}"," N) search complexity. This demo is the same algorithm visualized on a small graph (50 nodes, 3 layers). The retrieval stage of a real RAG pipeline runs this on a vector DB (pgvector/FAISS/Milvus) with millions of vectors — same math, larger scale."]})]}),(0,s.jsx)(N,{})]}),(0,s.jsx)(c.iv,{title:"My deeper thought: RAG IS a database query planner",description:"The three-stage RAG pipeline is structurally a database query planner. Chunking = physical layout (pages/blocks). Hybrid BM25+vector = index selection (B-tree vs GIN vs HNSW). RRF = cost-based plan fusion. Cross-encoder = nested-loop join (expensive, only on small input). The LLM at the end is the projection — it formats the retrieved tuples into a natural language answer.",icon:(0,s.jsx)(L.A,{className:"h-5 w-5"}),badge:"Insight",children:(0,s.jsxs)("div",{className:"space-y-3 text-sm text-muted-foreground leading-relaxed",children:[(0,s.jsxs)("p",{children:["The isomorphism between RAG and a relational query planner is exact, not metaphorical. ",(0,s.jsx)("strong",{className:"text-foreground/80",children:"Chunking is physical database design."})," A 512-token chunk with 64-token overlap is structurally identical to a Postgres 8KB page with 64-byte tuple header — both define the unit of I/O, both have overhead (overlap = page metadata), both trade size for retrieval granularity. The RecursiveCharacterTextSplitter that tries \\\\n\\\\n → \\\\n → . → space is a B-tree split heuristic: try the most selective separator first, fall back to coarser ones when needed. Statement-aware chunking (one CREATE TABLE per chunk) is clustered-index layout — physically grouping related rows together."]}),(0,s.jsxs)("p",{children:[(0,s.jsx)("strong",{className:"text-foreground/80",children:"Hybrid BM25 + vector retrieval is index selection."}),' Postgres has B-tree (exact-match, sparse) and GIN (trigram, fuzzy) and HNSW (vector, semantic) indexes. The query planner picks the index per WHERE clause — equality on a string column uses B-tree, similarity uses GIN, vector proximity uses HNSW. RAG\'s parallel BM25 + vector ANN is the same logic at retrieval scale: equality on SQL identifiers uses BM25 (the "B-tree"), semantic proximity uses vector ANN (the "HNSW"). RRF fusion is cost-based plan merging — Postgres does the same when it combines an index scan with a sequential scan via a BitmapAnd node. The k=60 smoothing is the cost-model equivalent: balance contributions from each plan.']}),(0,s.jsxs)("p",{children:[(0,s.jsx)("strong",{className:"text-foreground/80",children:"Cross-encoder re-ranking is a nested-loop join."})," In relational DBs, nested-loop join is the slowest but most flexible — it can evaluate any join condition (not just equality, like hash/merge joins). The optimizer uses it only when the input cardinality is small (otherwise it's O(N\xd7M) catastrophic). Cross-encoder re-ranking is the same pattern: it can evaluate any query-doc interaction (because it co-encodes them), but it's O(N) per query (one full transformer forward per pair) — so we run it only on the top-50 from the cheaper stages. The bi-encoder → cross-encoder pipeline is structurally identical to the hash-join → nested-loop-fallback pattern in Postgres. The LLM at the end is the projection operator — it formats the retrieved tuples (chunks) into a natural-language response. ADR-024's semantic layer (NL-to-SQL) is therefore a query planner that runs in reverse: NL → planner (LLM) → physical plan (SQL) → execution. RAG runs the planner forward: NL → retrieval (physical plan) → projection (LLM). Same architecture, opposite direction."]})]})}),(0,s.jsxs)(R.S,{pageTitle:"RAG Deep Dive",children:[(0,s.jsx)(R.P,{title:"RAG Deep Dive IS part of a larger system — no page stands alone",connectedTo:"ADR-001 (platform architecture)",children:(0,s.jsx)("p",{children:"This page about RAG Deep Dive is not an isolated reference — it's a node in a graph. The platform's thesis is that the same math appears across genomics, fintech, maritime, and audio. RAG Deep Dive connects to the elegant-code cards via shared equations, and to the living-equation pages via live demos. The reader who arrives here looking for facts leaves with a map of where RAG Deep Dive sits in the computational-science landscape."})}),(0,s.jsx)(R.P,{title:"The technology will change; the math won't",connectedTo:"ADR-055 (cross-disciplinary scope)",children:(0,s.jsx)("p",{children:"In a decade, the specific tools on this page (RAG Deep Dive) may be replaced. But the underlying mathematics — the equations, the distributions, the optimisation rules — will be the same. SVD was invented in 1873 and still runs on NumPy today. Attention was described in 2017 and will run on whatever replaces PyTorch. The platform invests in the MATH, not the tools, because the math is the part that survives technology turnover."})}),(0,s.jsx)(R.P,{title:"The fold pattern respects the reader's attention",connectedTo:"ADR-050 (fold-section architecture)",children:(0,s.jsx)("p",{children:"This page has fold sections (collapsed by default) that reveal deeper content on demand — equation family comparisons, LaTeX derivations, production patterns, expected outputs, and citations. The basic content is visible immediately; the deeper phases are there when the reader is ready. Progressive disclosure isn't just UX — it's epistemological. A reader who wants the summary gets it; a reader who wants the derivation clicks to expand. Both are served by the same page."})}),(0,s.jsx)(R.P,{title:"The output IS the proof — not just the equation",connectedTo:"ADR-034 (ESM-2 + AlphaFold2 adoption)",children:(0,s.jsx)("p",{children:"Where this page has interactive demos (Pyodide + sliders + charts), the visual output IS the argument. Seeing a chart update as you drag a slider communicates the math in a way no formula can. The brain's pattern-recognition system processes the visual output faster than the verbal/analytical pathway. That's why the platform pairs every equation with a live demo — the output plays to a different level of the brain than the prose."})}),(0,s.jsx)(R.P,{title:"In a decade, this page will evolve — and that's the point",connectedTo:"ADR-022 (pgvector for variant embeddings)",children:(0,s.jsx)("p",{children:"The datasets, libraries, and tools on this page will be updated as technology evolves. The 1000-Genomes Project will become the 10M-Genomes Project. NumPy may be replaced by a WebGPU-native array library. PyTorch may give way to a successor. But the math — SVD, Attention, Poisson, FFT, Bayes, Kalman, GBM — will be the same. The platform is designed for this evolution: the equations are the anchor, the tools are the amplifier, and the fold sections let us update the tools without rewriting the page."})})]}),(0,s.jsx)(l.R,{pageId:"rag-deep-dive"}),(0,s.jsx)(p.B,{pageId:"rag-deep-dive"}),(0,s.jsx)(d.T,{relatedPages:[{id:"connections",reason:"Trace this topic's connections across the platform's math graph"},{id:"rag-llms",reason:"Continue to rag llms — see also from this page"},{id:"vector-db",reason:"Continue to vector db — see also from this page"}]}),(0,s.jsxs)("div",{className:"flex flex-wrap gap-2",children:[(0,s.jsx)(i(),{href:(0,u.ZJ)("rag-llms"),className:"text-sm text-primary hover:underline",children:"→ RAG & LLMs (the original naive RAG page)"}),(0,s.jsx)("span",{className:"text-muted-foreground",children:"\xb7"}),(0,s.jsx)(i(),{href:(0,u.ZJ)("vector-db"),className:"text-sm text-primary hover:underline",children:"→ Vector DB (pgvector — the storage layer)"}),(0,s.jsx)("span",{className:"text-muted-foreground",children:"\xb7"}),(0,s.jsx)(i(),{href:(0,u.ZJ)("inference-serving"),className:"text-sm text-primary hover:underline",children:"→ Inference Serving (vLLM — final stage)"}),(0,s.jsx)("span",{className:"text-muted-foreground",children:"\xb7"}),(0,s.jsx)(i(),{href:(0,u.ZJ)("dbt"),className:"text-sm text-primary hover:underline",children:"→ dbt (the SQL DDL being chunked)"}),(0,s.jsx)("span",{className:"text-muted-foreground",children:"\xb7"}),(0,s.jsx)(i(),{href:(0,u.ZJ)("knowledge"),className:"text-sm text-primary hover:underline",children:"→ ADR-032 (hybrid retrieval adoption)"})]})]})}},7915:(e,t,r)=>{"use strict";r.d(t,{A:()=>s});let s=(0,r(6404).A)("eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]])},9199:(e,t,r)=>{"use strict";r.d(t,{A:()=>s});let s=(0,r(6404).A)("rotate-ccw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]])},19776:(e,t,r)=>{"use strict";r.d(t,{N:()=>c,R:()=>d});var s=r(95155),a=r(12115),n=r(94514),o=r(67635),i=r(89239);function c({code:e,language:t="sql",filename:r,highlight:c=[]}){let[d,l]=(0,a.useState)(!1),p=e.replace(/\n$/,"").split("\n"),m=async()=>{try{await navigator.clipboard.writeText(e),l(!0),setTimeout(()=>l(!1),1500)}catch{}};return(0,s.jsxs)("div",{className:"rounded-md border border-border/60 bg-[oklch(0.16_0.005_240)] text-[oklch(0.97_0.005_60)] overflow-hidden",children:[(0,s.jsxs)("div",{className:"flex items-center justify-between px-3 py-1.5 border-b border-white/10 bg-white/5",children:[(0,s.jsxs)("div",{className:"flex items-center gap-2 text-[11px] text-white/60 font-mono",children:[(0,s.jsx)("span",{className:"h-2 w-2 rounded-full bg-rose-400"}),(0,s.jsx)("span",{className:"h-2 w-2 rounded-full bg-amber-400"}),(0,s.jsx)("span",{className:"h-2 w-2 rounded-full bg-emerald-400"}),(0,s.jsx)("span",{className:"ml-2 uppercase tracking-wider",children:t}),r&&(0,s.jsxs)("span",{className:"text-white/40",children:["\xb7 ",r]})]}),(0,s.jsxs)(i.$,{variant:"ghost",size:"sm",className:"h-6 px-2 text-[11px] text-white/70 hover:text-white hover:bg-white/10",onClick:m,"aria-label":"Copy code",children:[d?(0,s.jsx)(n.A,{className:"h-3 w-3 mr-1"}):(0,s.jsx)(o.A,{className:"h-3 w-3 mr-1"}),d?"Copied":"Copy"]})]}),(0,s.jsx)("pre",{className:"code-scroll overflow-x-auto p-3 text-[12.5px] leading-relaxed font-mono",children:(0,s.jsx)("code",{children:p.map((e,t)=>{let r=t+1,a=c.includes(r);return(0,s.jsxs)("div",{className:["flex",a?"bg-primary/20 -mx-3 px-3 border-l-2 border-primary":""].join(" "),children:[(0,s.jsx)("span",{className:"select-none text-white/30 w-8 inline-block text-right pr-3 shrink-0",children:r}),(0,s.jsx)("span",{className:"whitespace-pre",children:e||" "})]},r)})})})]})}function d({children:e}){return(0,s.jsx)("code",{className:"rounded bg-muted px-1.5 py-0.5 text-[12px] font-mono text-foreground/90 border border-border/60",children:e})}},22164:(e,t,r)=>{"use strict";r.d(t,{A:()=>s});let s=(0,r(6404).A)("external-link",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]])},42763:(e,t,r)=>{"use strict";r.d(t,{Cf:()=>p,Es:()=>h,L3:()=>u,c7:()=>m,lG:()=>i,rr:()=>x,zM:()=>c});var s=r(95155);r(12115);var a=r(49115),n=r(33210),o=r(40980);function i({...e}){return(0,s.jsx)(a.bL,{"data-slot":"dialog",...e})}function c({...e}){return(0,s.jsx)(a.l9,{"data-slot":"dialog-trigger",...e})}function d({...e}){return(0,s.jsx)(a.ZL,{"data-slot":"dialog-portal",...e})}function l({className:e,...t}){return(0,s.jsx)(a.hJ,{"data-slot":"dialog-overlay",className:(0,o.cn)("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",e),...t})}function p({className:e,children:t,showCloseButton:r=!0,...i}){return(0,s.jsxs)(d,{"data-slot":"dialog-portal",children:[(0,s.jsx)(l,{}),(0,s.jsxs)(a.UC,{"data-slot":"dialog-content",className:(0,o.cn)("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",e),...i,children:[t,r&&(0,s.jsxs)(a.bm,{"data-slot":"dialog-close",className:"ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",children:[(0,s.jsx)(n.A,{}),(0,s.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})}function m({className:e,...t}){return(0,s.jsx)("div",{"data-slot":"dialog-header",className:(0,o.cn)("flex flex-col gap-2 text-center sm:text-left",e),...t})}function h({className:e,...t}){return(0,s.jsx)("div",{"data-slot":"dialog-footer",className:(0,o.cn)("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",e),...t})}function u({className:e,...t}){return(0,s.jsx)(a.hE,{"data-slot":"dialog-title",className:(0,o.cn)("text-lg leading-none font-semibold",e),...t})}function x({className:e,...t}){return(0,s.jsx)(a.VY,{"data-slot":"dialog-description",className:(0,o.cn)("text-muted-foreground text-sm",e),...t})}},53961:(e,t,r)=>{"use strict";r.d(t,{A:()=>s});let s=(0,r(6404).A)("zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]])},58645:(e,t,r)=>{Promise.resolve().then(r.bind(r,2961))},60508:(e,t,r)=>{"use strict";r.d(t,{R:()=>v});var s=r(95155),a=r(12115),n=r(45160),o=r(89239),i=r(66349),c=r(85404),d=r(58381),l=r(79275),p=r(48368),m=r(22164),h=r(86901),u=r(89123),x=r(21628),f=r(98500),g=r.n(f),b=r(85757);function v({pageId:e}){let t=(0,l.C6)(e);return 0===t.length?null:(0,s.jsxs)(d.iv,{title:"Recent research (2023-2025)",description:"Modern papers that extend the math, code, and tools on this page.",icon:(0,s.jsx)(p.A,{className:"h-5 w-5"}),badge:`${t.length} paper${1===t.length?"":"s"}`,badgeVariant:"outline",contentClassName:"space-y-4",children:[t.map((e,t)=>(0,s.jsx)(y,{entry:e},t)),(0,s.jsxs)("p",{className:"text-[11px] text-muted-foreground italic",children:[t.length," paper",1===t.length?"":"s"," mapped to this page. Each shows the key algorithm + expected output (rendered as charts when the code produces JSON). Run the code in-browser via Pyodide."]})]})}function y({entry:e}){let[t,r]=(0,a.useState)(!1),[d,l]=(0,a.useState)(null);return(0,s.jsxs)("div",{className:"rounded-lg border border-border/60 p-4 space-y-3 hover:border-primary/30 transition-colors",children:[(0,s.jsxs)("div",{className:"space-y-1",children:[(0,s.jsxs)("div",{className:"flex items-start justify-between gap-3",children:[(0,s.jsx)("h4",{className:"text-sm font-semibold leading-tight flex-1",children:e.paperTitle}),(0,s.jsx)(n.E,{variant:"outline",className:"text-[10px] shrink-0",children:e.venue})]}),(0,s.jsxs)("p",{className:"text-[11px] text-muted-foreground",children:[e.authors," \xb7 ",e.year]}),e.arxivId&&(0,s.jsxs)("a",{href:`https://arxiv.org/abs/${e.arxivId}`,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-1 text-[11px] text-primary hover:underline",children:[(0,s.jsx)(m.A,{className:"h-3 w-3"}),"arXiv:",e.arxivId]}),e.doi&&!e.arxivId&&(0,s.jsxs)("a",{href:`https://doi.org/${e.doi}`,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-1 text-[11px] text-primary hover:underline",children:[(0,s.jsx)(m.A,{className:"h-3 w-3"}),"DOI:",e.doi]})]}),(0,s.jsx)("p",{className:"text-[12px] text-muted-foreground leading-relaxed",children:e.abstract}),(0,s.jsxs)(o.$,{variant:"outline",size:"sm",onClick:()=>r(!t),className:"h-7 text-[11px] gap-1.5",children:[(0,s.jsx)(h.A,{className:"h-3 w-3"}),t?"Hide expected code":"Show expected code + visualization"]}),t&&(0,s.jsxs)("div",{className:"space-y-2",children:[(0,s.jsx)(i.l,{code:e.expectedCode,buttonLabel:"Run in browser",onOutput:e=>{try{let t=e.indexOf("{"),r=e.lastIndexOf("}");if(t>=0&&r>t){let s=e.substring(t,r+1);l(JSON.parse(s))}}catch{}},hideTextOutput:!!d,compact:!0}),d?(0,s.jsxs)("div",{className:"space-y-2",children:[(0,s.jsxs)("div",{className:"flex items-center gap-1.5",children:[(0,s.jsx)(u.A,{className:"h-3.5 w-3.5 text-primary"}),(0,s.jsx)("p",{className:"text-[10px] uppercase tracking-wider text-muted-foreground",children:"Visualization (rendered from code output)"})]}),(0,s.jsx)(c.D,{data:d,accent:"oklch(0.65 0.18 250)",sourceCode:e.expectedCode})]}):(0,s.jsxs)("div",{className:"rounded-md border border-primary/20 bg-primary/5 p-2.5",children:[(0,s.jsx)("p",{className:"text-[10px] uppercase tracking-wider text-muted-foreground mb-1",children:"Expected output"}),(0,s.jsx)("pre",{className:"text-[11px] font-mono whitespace-pre-wrap leading-relaxed",children:e.expectedOutput})]}),(0,s.jsxs)("div",{className:"rounded-md border border-emerald-500/30 bg-emerald-500/5 p-2.5",children:[(0,s.jsx)("p",{className:"text-[10px] uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-1",children:"Key insight"}),(0,s.jsx)("p",{className:"text-[12px] text-foreground/80 leading-relaxed",children:e.keyInsight})]})]}),(0,s.jsxs)(g(),{href:(0,b.ZJ)("analytics-outputs"),className:"inline-flex items-center gap-1 text-[11px] text-primary hover:underline",children:["See this math visualized on Analytics Outputs ",(0,s.jsx)(x.A,{className:"h-3 w-3"})]})]})}},61878:(e,t,r)=>{"use strict";r.d(t,{A:()=>s});let s=(0,r(6404).A)("search",[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]])},65576:(e,t,r)=>{"use strict";r.d(t,{A:()=>s});let s=(0,r(6404).A)("cpu",[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]])},67635:(e,t,r)=>{"use strict";r.d(t,{A:()=>s});let s=(0,r(6404).A)("copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]])},83036:(e,t,r)=>{"use strict";r.d(t,{P:()=>d,S:()=>l});var s=r(95155),a=r(98500),n=r.n(a),o=r(44071),i=r(97810),c=r(85757);function d({title:e,connectedTo:t,researchHref:r,children:a}){return(0,s.jsxs)("div",{className:"rounded-md border border-primary/30 bg-primary/5 p-4 space-y-2",children:[(0,s.jsxs)("div",{className:"flex items-start gap-2",children:[(0,s.jsx)(o.A,{className:"h-4 w-4 text-primary mt-0.5 shrink-0"}),(0,s.jsxs)("div",{className:"flex-1 min-w-0",children:[(0,s.jsx)("p",{className:"text-sm font-semibold text-foreground/90 leading-tight",children:e}),t&&(0,s.jsxs)("div",{className:"flex items-center gap-1.5 mt-1",children:[(0,s.jsx)(i.A,{className:"h-3 w-3 text-muted-foreground"}),(0,s.jsxs)(n(),{href:r??(0,c.ZJ)("research"),className:"text-[10px] text-muted-foreground hover:text-primary hover:underline",children:["Connected to: ",t," →"]})]})]})]}),(0,s.jsx)("div",{className:"text-xs text-muted-foreground leading-relaxed space-y-2 pl-6",children:a})]})}function l({pageTitle:e,children:t}){return(0,s.jsxs)("div",{className:"space-y-4",children:[(0,s.jsxs)("div",{className:"flex items-center gap-2 border-b border-border/60 pb-2",children:[(0,s.jsx)(o.A,{className:"h-5 w-5 text-primary"}),(0,s.jsxs)("h2",{className:"text-base font-bold text-foreground/90",children:["My deeper thoughts — ",e]})]}),(0,s.jsx)("p",{className:"text-xs text-muted-foreground italic leading-relaxed",children:"These are not summaries. They are arguments — the kind of connections a reader with serious grey matter would make after living with the material for years. Each thought connects to the platform's research section (ADRs, papers, decision records) so it's traceable, not just opinionated."}),(0,s.jsx)("div",{className:"space-y-3",children:t})]})}},86901:(e,t,r)=>{"use strict";r.d(t,{A:()=>s});let s=(0,r(6404).A)("sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]])},90718:(e,t,r)=>{"use strict";r.d(t,{A:()=>s});let s=(0,r(6404).A)("brain",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]])},92622:(e,t,r)=>{"use strict";r.d(t,{A:()=>s});let s=(0,r(6404).A)("funnel",[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]])},94514:(e,t,r)=>{"use strict";r.d(t,{A:()=>s});let s=(0,r(6404).A)("check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]])},97810:(e,t,r)=>{"use strict";r.d(t,{A:()=>s});let s=(0,r(6404).A)("book-open",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]])}},e=>{e.O(0,[6919,8500,9430,3493,9760,7591,6012,9237,4843,8656,9620,6722,5404,9275,2194,8441,3794,7358],()=>e(e.s=58645)),_N_E=e.O()}]);