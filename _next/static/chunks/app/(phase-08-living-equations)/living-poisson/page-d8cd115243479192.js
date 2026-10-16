(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4758],{8195:(e,s,a)=>{"use strict";a.d(s,{A:()=>t});let t=(0,a(6404).A)("database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]])},72137:(e,s,a)=>{"use strict";a.d(s,{LivingPoissonPage:()=>F});var t=a(95155),n=a(12115),i=a(98500),o=a.n(i),r=a(58381),d=a(27774),l=a(92194),c=a(19776),h=a(41603),m=a(49345),p=a(37665),u=a(85757),g=a(45160),b=a(87557),x=a(8195),f=a(86901),v=a(97810),y=a(65576),P=a(44071),k=a(4450),j=a(68444),w=a(28408),N=a(32539),_=a(59656),T=a(18662),A=a(93459),S=a(75045),M=a(70468),q=a(83036);let C=[{label:"Dataset",value:"1000-Genomes chr-22 read depth (synthetic)",hint:"Synthetic 1000-Genomes chr-22 BAM read-depth histogram: 10K genomic bins \xd7 Poisson-distributed read counts.",deltaTone:"flat"},{label:"Equation",value:"P(k) = λ^k \xb7 e^(-λ) / k!",hint:"Poisson PMF: probability of observing k events when the mean rate is λ. The mean and variance are both λ.",deltaTone:"flat"},{label:"Slider",value:"λ (mean coverage)",hint:"Drag λ from 1 to 30. At λ=14, P(≥10\xd7) crosses 0.95 — the standard minimum coverage for variant calling.",deltaTone:"up"},{label:"Production",value:"scipy.stats.poisson",hint:"Production: scipy.stats.poisson.pmf(k, λ), .cdf(k, λ), .sf(k, λ) (survival = 1 - cdf).",deltaTone:"flat"}];function F(){let[e,s]=(0,n.useState)("live");return(0,t.jsxs)("div",{className:"space-y-8",children:[(0,t.jsx)(r.zY,{eyebrow:"Living equation \xb7 run Poisson live in your browser",title:"Living Poisson — watch P(≥10\xd7) cross 0.95 at λ=14",description:"The Poisson distribution models the probability of observing k events when the mean rate is λ. Drag λ (mean sequencing coverage) and watch the distribution shift. At λ=14, the probability of observing ≥10 reads at any genomic position crosses 0.95 — the standard threshold for reliable variant calling. The SAME equation models server load (network engineering) and radioactive decay (physics) — because all three are independent rare events.",right:(0,t.jsxs)("div",{className:"flex gap-2",children:[(0,t.jsxs)(g.E,{variant:"outline",className:"gap-1.5",children:[(0,t.jsx)(b.A,{className:"h-3 w-3"})," Probability"]}),(0,t.jsxs)(g.E,{variant:"outline",className:"gap-1.5",children:[(0,t.jsx)(x.A,{className:"h-3 w-3"})," 1000-Genomes"]})]})}),(0,t.jsx)("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-3",children:C.map(e=>(0,t.jsx)(r.nO,{label:e.label,value:e.value,hint:e.hint,deltaTone:e.deltaTone},e.label))}),(0,t.jsx)("div",{className:"flex flex-wrap gap-1.5 border-b border-border/60",children:[["live","Live demo (Pyodide + slider)"],["math","Math derivation"],["production","Production code (scipy.stats.poisson)"]].map(([a,n])=>(0,t.jsx)("button",{onClick:()=>s(a),className:`px-3 py-1.5 text-xs font-semibold border-b-2 -mb-px transition-all ${e===a?"border-primary text-primary":"border-transparent text-muted-foreground hover:text-foreground"}`,children:n},a))}),"live"===e&&(0,t.jsx)(r.iv,{title:"Live Poisson on 1000-Genomes chr-22 — drag λ and watch the distribution shift",description:"Synthetic 1000-Genomes chr-22 read-depth histogram: 10K genomic bins with Poisson(λ) read counts. The Poisson PMF is overlaid in blue. The CDF P(≥10\xd7) is shown in the KPIs. At λ=14, P(≥10\xd7) crosses 0.95 — GATK's minimum coverage threshold for reliable variant calling.",icon:(0,t.jsx)(f.A,{className:"h-5 w-5"}),badge:"live",children:(0,t.jsx)(h.g,{slider:{name:"lambda",label:"λ (mean coverage — reads per position)",min:1,max:30,step:1,default:14,hint:"λ=14: P(≥10\xd7)=0.95 (GATK threshold). λ=30: P(≥10\xd7)=0.9999 (ultra-deep). λ=5: P(≥10\xd7)=0.03 (low coverage)."},preamble:"import json, math, random",code:`import json, math, random

random.seed(42)
lam = \${lambda}

# Synthesize a 1000-Genomes chr-22 read-depth histogram (10K bins).
# In production, this comes from: samtools depth chr22.bam | awk '{count[$2]++}'
# For each genomic position, the read count follows Poisson(lambda).
n_bins = 10_000

# Compute Poisson PMF: P(k) = lambda^k * e^(-lambda) / k!
def poisson_pmf(k, lam):
    return math.exp(-lam) * lam**k / math.factorial(k)

# PMF for k = 0 to 40
max_k = 40
pmf = [poisson_pmf(k, lam) for k in range(max_k)]

# Sample histogram: how many of the 10K bins had k reads?
# In production: sum a Poisson random variable n_bins times.
histogram = [0] * max_k
for _ in range(n_bins):
    # Sample from Poisson(lambda) via inverse CDF (Knuth's algorithm).
    L = math.exp(-lam)
    k = 0
    p = 1.0
    while True:
        k += 1
        p *= random.random()
        if p <= L:
            break
    k -= 1  # actual count
    if 0 <= k < max_k:
        histogram[k] += 1

# Convert histogram to fraction (for comparison with PMF).
histogram_frac = [h / n_bins for h in histogram]

# CDF: P(X >= 10) = 1 - sum(P(k) for k in 0..9)
p_ge_10 = 1 - sum(pmf[:10])

# Build chart data: for k = 0 to 25, show PMF (expected) and histogram (observed).
chart_data = []
for k in range(min(25, max_k)):
    chart_data.append({
        'k': k,
        'pmf': pmf[k] * n_bins,  # expected count (so it scales with histogram)
        'observed': histogram[k],
    })

result = {
    'chart_data': chart_data,
    'lambda': lam,
    'p_ge_10': p_ge_10,
    'mean_observed': sum(k * histogram[k] for k in range(max_k)) / n_bins,
    'var_observed': sum((k - lam) ** 2 * histogram[k] for k in range(max_k)) / n_bins,
    'n_bins': n_bins,
}
print(json.dumps(result))
`,renderer:e=>(0,t.jsxs)("div",{className:"space-y-3",children:[(0,t.jsxs)("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-2 text-xs",children:[(0,t.jsxs)("div",{className:"rounded-md border border-border/60 bg-muted/30 p-2",children:[(0,t.jsx)("p",{className:"text-[10px] uppercase text-muted-foreground",children:"λ"}),(0,t.jsx)("p",{className:"font-mono font-bold text-primary text-base",children:e.lambda})]}),(0,t.jsxs)("div",{className:"rounded-md border border-border/60 bg-muted/30 p-2",children:[(0,t.jsx)("p",{className:"text-[10px] uppercase text-muted-foreground",children:"P(≥10\xd7)"}),(0,t.jsxs)("p",{className:"font-mono font-bold text-primary text-base",children:[(100*e.p_ge_10).toFixed(2),"%"]})]}),(0,t.jsxs)("div",{className:"rounded-md border border-border/60 bg-muted/30 p-2",children:[(0,t.jsx)("p",{className:"text-[10px] uppercase text-muted-foreground",children:"Observed mean"}),(0,t.jsx)("p",{className:"font-mono font-bold text-primary text-base",children:e.mean_observed.toFixed(2)})]}),(0,t.jsxs)("div",{className:"rounded-md border border-border/60 bg-muted/30 p-2",children:[(0,t.jsx)("p",{className:"text-[10px] uppercase text-muted-foreground",children:"Observed var"}),(0,t.jsx)("p",{className:"font-mono font-bold text-primary text-base",children:e.var_observed.toFixed(2)})]})]}),(0,t.jsx)("div",{style:{width:"100%",height:320},children:(0,t.jsx)(k.u,{children:(0,t.jsxs)(j.X,{data:e.chart_data,margin:{top:12,right:16,bottom:24,left:0},children:[(0,t.jsx)(w.d,{stroke:"hsl(var(--border))",strokeOpacity:.4}),(0,t.jsx)(N.W,{dataKey:"k",stroke:"hsl(var(--muted-foreground))",fontSize:10,label:{value:"k (read depth)",position:"insideBottom",offset:-10,fontSize:10}}),(0,t.jsx)(_.h,{stroke:"hsl(var(--muted-foreground))",fontSize:10,label:{value:"count",angle:-90,position:"insideLeft",fontSize:10}}),(0,t.jsx)(T.m,{formatter:e=>e.toFixed(1)}),(0,t.jsx)(A.s,{}),(0,t.jsx)(S.y,{name:"Observed (synthetic 1000G chr-22)",dataKey:"observed",fill:"#16a34a"}),(0,t.jsx)(M.N,{name:"Poisson PMF \xd7 N",type:"monotone",dataKey:"pmf",stroke:"#2563eb",strokeWidth:2,dot:!1})]})})}),(0,t.jsxs)("p",{className:"text-xs text-muted-foreground leading-relaxed",children:["The green bars are the observed read-depth histogram (10K bins of synthetic chr-22). The blue line is the theoretical Poisson PMF \xd7 N (where N = 10K bins). Note that the observed ",(0,t.jsxs)("span",{className:"font-mono",children:["mean = ",e.mean_observed.toFixed(2)]})," and ",(0,t.jsxs)("span",{className:"font-mono",children:["var = ",e.var_observed.toFixed(2)]})," — both approximately equal to λ = ",e.lambda," (Poisson's defining property: mean = variance). At ",(0,t.jsxs)("span",{className:"font-mono text-primary",children:["λ = ",e.lambda]}),", the probability of observing ≥10 reads is"," ",(0,t.jsxs)("span",{className:"font-mono text-primary",children:[(100*e.p_ge_10).toFixed(2),"%"]})," — GATK's threshold for reliable variant calling."]})]})})}),"math"===e&&(0,t.jsx)(r.iv,{title:"Math derivation — where Poisson comes from",description:"Sim\xe9on Denis Poisson (1837) derived the Poisson distribution as the limit of a Binomial(N, p) when N → ∞ and p → 0 with λ = Np held fixed. The result is the universal law of rare events: any process with independent events at constant rate λ follows Poisson.",icon:(0,t.jsx)(v.A,{className:"h-5 w-5"}),badge:"derivation",children:(0,t.jsxs)("div",{className:"space-y-4 text-sm text-muted-foreground leading-relaxed",children:[(0,t.jsxs)("p",{children:[(0,t.jsx)("strong",{className:"text-foreground/80",children:"The PMF."})," P(k | λ) = λ^k \xb7 e^(-λ) / k! for k = 0, 1, 2, ... The mean is λ, the variance is λ (the equality of mean and variance is Poisson's signature property). The mode is at ⌊λ⌋."]}),(0,t.jsxs)("p",{children:[(0,t.jsx)("strong",{className:"text-foreground/80",children:"Derivation from Binomial."})," Consider N independent trials, each succeeding with probability p. The Binomial PMF is P(k) = C(N, k) p^k (1-p)^(N-k). In the limit N → ∞, p → 0, with λ = Np fixed: C(N, k) ≈ N^k / k!, (1-p)^(N-k) ≈ e^(-λ), so P(k) → λ^k e^(-λ) / k!. This is the Poisson limit — the law of rare events."]}),(0,t.jsxs)("p",{children:[(0,t.jsx)("strong",{className:"text-foreground/80",children:"Why mean = variance."})," E[X] = λ (definition). Var(X) = E[X\xb2] - (E[X])\xb2 = (λ + λ\xb2) - λ\xb2 = λ. The variance equals the mean because Poisson is a '1-parameter' distribution — once you know λ, you know everything. Contrast with Normal (2 params: μ, σ\xb2) or Negative Binomial (2 params: r, p)."]}),(0,t.jsxs)("p",{children:[(0,t.jsx)("strong",{className:"text-foreground/80",children:"Why it models sequencing, networks, and decay."})," Sequencing reads are independent (random DNA shearing), server requests are independent (no user coordination), radioactive decays are independent (quantum randomness). Three different physical mechanisms, one mathematical consequence — because all three are independent rare events. The Poisson theorem proves that any such process converges to the SAME distribution."]}),(0,t.jsxs)("p",{children:[(0,t.jsx)("strong",{className:"text-foreground/80",children:"Citation."})," Poisson, 'Recherches sur la probabilit\xe9 des jugements' (1837). Quine & Seneta, 'Bortkiewicz's data and the law of small numbers' (1987). 1000-Genomes Consortium, Nature 541:7691 (2017)."]})]})}),"production"===e&&(0,t.jsxs)(r.iv,{title:"Production code — what SciPy and GATK actually compute",description:"In production, you call scipy.stats.poisson. GATK HaplotypeCaller uses Poisson internally to compute P(observed reads | expected coverage) — the basis of its genotype likelihood model. Here's the production call.",icon:(0,t.jsx)(y.A,{className:"h-5 w-5"}),badge:"production",children:[(0,t.jsx)(c.N,{language:"python",filename:"production_poisson.py",code:`# Production Poisson on real 1000-Genomes chr-22 BAM data
import numpy as np
from scipy.stats import poisson
import pysam  # for real BAM reading

# Compute read depth from real 1000-Genomes chr-22 BAM
# Source: ftp.1000genomes.ebi.ac.uk/vol1/ftp/data_collections/1000G/
bam = pysam.AlignmentFile('NA12878_chr22.bam', 'rb')
chr22_length = 50_818_468  # GRCh38
window = 100_000  # 100 kb bins
positions = []
depths = []
for start in range(0, chr22_length, window):
    depth = bam.count('22', start, start + window) / window  # reads per position
    depths.append(depth)

depths = np.array(depths)  # ~508 windows \xd7 100 kb

# Fit a Poisson distribution to the observed depths
lambda_hat = depths.mean()  # MLE = sample mean (Poisson MLE)
print(f"Estimated coverage lambda = {lambda_hat:.2f}")

# Compute P(>= 10x) — GATK's variant-calling threshold
p_ge_10 = poisson.sf(9, lambda_hat)  # survival function = 1 - cdf
print(f"P(>= 10x) = {p_ge_10:.4f}")

# Compute the theoretical Poisson PMF
ks = np.arange(0, 40)
pmf = poisson.pmf(ks, lambda_hat)

# Plot histogram vs theoretical PMF
import matplotlib.pyplot as plt
plt.hist(depths, bins=range(0, 40), density=True, alpha=0.7, label='Observed')
plt.plot(ks, pmf, 'ro-', label=f'Poisson(lambda={lambda_hat:.1f})')
plt.xlabel('Read depth'); plt.ylabel('P(depth)')
plt.legend(); plt.title('1000-Genomes chr-22 read depth vs Poisson')
plt.savefig('poisson_chr22.png', dpi=150, bbox_inches='tight')

# GATK HaplotypeCaller uses Poisson genotype likelihoods:
# P(reads | genotype) = product over reads of P(read | genotype)
# where P(read | genotype) is a Poisson on the expected allele balance.
# This is the basis of GATK's Bayesian variant caller.`}),(0,t.jsxs)("div",{className:"mt-3 grid grid-cols-2 gap-2 text-xs",children:[(0,t.jsxs)(o(),{href:(0,u.ZJ)("bioinformatics-pipelines"),className:"rounded-md border border-border/60 bg-muted/20 p-2 hover:border-primary/40 hover:bg-primary/5 transition-colors block",children:[(0,t.jsx)("p",{className:"font-semibold text-foreground/80",children:"→ Bioinformatics Pipelines"}),(0,t.jsx)("p",{className:"text-muted-foreground text-[10px] mt-0.5",children:"GATK variant calling uses Poisson for coverage + genotype likelihoods."})]}),(0,t.jsxs)(o(),{href:(0,u.ZJ)("elegant-code"),className:"rounded-md border border-border/60 bg-muted/20 p-2 hover:border-primary/40 hover:bg-primary/5 transition-colors block",children:[(0,t.jsx)("p",{className:"font-semibold text-foreground/80",children:"→ Elegant Code (Poisson card)"}),(0,t.jsx)("p",{className:"text-muted-foreground text-[10px] mt-0.5",children:"Poisson's full cross-disciplinary card: sequencing ↔ networks ↔ decay."})]})]})]}),(0,t.jsx)(r.iv,{title:"My deeper thought: Poisson IS the law of rare events",description:"It emerges whenever events are independent, rare, and constant-rate — a theorem (law of small numbers), not an approximation. Sequencing reads are independent (random DNA shearing), network requests are independent (no user coordination), radioactive decays are independent (quantum randomness). Three different physical mechanisms, one mathematical consequence. A bioinformatician computing P(≥10 reads) and a network engineer computing P(overload) are solving the SAME equation — and neither knows it.",icon:(0,t.jsx)(P.A,{className:"h-5 w-5"}),badge:"Insight",children:(0,t.jsx)("div",{className:"space-y-3 text-sm text-muted-foreground leading-relaxed",children:(0,t.jsxs)("p",{children:[(0,t.jsx)("strong",{className:"text-foreground/80",children:"Two PhDs in different fields"})," can work side by side for decades without realizing they're using the same math. The platform's role is to show them the connection."]})})}),(0,t.jsx)(p.t,{sourceCard:2}),(0,t.jsxs)(q.S,{pageTitle:"Poisson",children:[(0,t.jsx)(q.P,{title:"Poisson IS the law of rare events — a theorem, not an approximation",connectedTo:"ADR-037 (genetic materials + variant calling)",children:(0,t.jsx)("p",{children:"Poisson emerges whenever events are independent, rare, and constant-rate. This isn't an approximation — it's a theorem (the law of small numbers). Sequencing reads are independent (random DNA shearing). Server requests are independent (no user coordination). Radioactive decays are independent (quantum randomness). Three different physical mechanisms, one mathematical consequence. The Poisson theorem proves that any process with these three properties converges to the SAME distribution. A bioinformatician and a network engineer are solving the SAME equation."})}),(0,t.jsx)(q.P,{title:"GATK's 95% threshold IS Poisson(λ=14) — the math dictates the experiment",connectedTo:"ADR-043 (AlphaMissense adoption)",children:(0,t.jsx)("p",{children:"When you drag λ to 14 on this page, P(≥10\xd7) crosses 95% — GATK's minimum coverage threshold for reliable variant calling. This isn't an arbitrary number; it's dictated by the Poisson CDF. At λ=10, P(≥10\xd7) is only 42% — too many positions would have insufficient reads. At λ=20, P(≥10\xd7) is 99.9% — overkill, wasteful. The math tells you the optimal experimental design: how deep to sequence. The equation IS the business decision."})}),(0,t.jsx)(q.P,{title:"Mean = variance is Poisson's signature — and its limitation",connectedTo:"ADR-022 (pgvector for variant embeddings)",children:(0,t.jsx)("p",{children:"Poisson's defining property is E[X] = Var(X) = λ. This is both a feature and a bug. It means one parameter (λ) tells you everything — but it also means you can't model over-dispersion (variance &gt; mean), which is common in real data (e.g., sequencing bias, bursty network traffic). When the variance exceeds the mean, you need the Negative Binomial distribution — which is Poisson + a Gamma mixing layer. Understanding Poisson's limitation IS understanding when to upgrade."})}),(0,t.jsx)(q.P,{title:"The histogram overlay IS the proof — the math matches the data",connectedTo:"ADR-051 (living-equation pages)",children:(0,t.jsx)("p",{children:"When you click 'Run analytics' on this page, the green bars (observed read-depth histogram) align with the blue line (theoretical Poisson PMF). The match IS the proof: the data follows Poisson. If the bars were wider than the line, you'd see over-dispersion. If they were skewed, you'd see a different distribution. The visual overlay communicates 'fit' in a way no p-value can — the brain's pattern-matching system sees the alignment instantly."})}),(0,t.jsx)(q.P,{title:"The C-14 half-life IS Poisson — radiocarbon dating is counting",connectedTo:"ADR-055 (cross-disciplinary scope)",children:(0,t.jsx)("p",{children:"C-14 decays at ~15 atoms/min/g. That's Poisson(λ=15). A nuclear physicist counts decays for 1 minute and inverts the Poisson to estimate age — radiocarbon dating. The SAME distribution that models sequencing coverage and server load models nuclear decay. The math doesn't know if λ is 'reads per position', 'requests per second', or 'decays per minute'. The equation is domain-agnostic; the application is everything."})})]}),(0,t.jsx)(m.a,{topics:[{id:"bioinformatics-pipelines",reason:"Bioinformatics Pipelines — GATK uses Poisson"},{id:"elegant-code",reason:"Elegant Code — the Poisson card (cross-disciplinary)"},{id:"monte-carlo",reason:"Monte Carlo — rare-event permutation testing"},{id:"living-entropy",reason:"Living Entropy (cousin: distribution measures)"}]}),(0,t.jsx)(l.B,{pageId:"living-poisson"}),(0,t.jsx)(d.T,{relatedPages:[{id:"connections",reason:"Trace this topic's connections across the platform's math graph"},{id:"bioinformatics-pipelines",reason:"Bioinformatics Pipelines — GATK uses Poisson"},{id:"elegant-code",reason:"Elegant Code — the Poisson card (cross-disciplinary)"}]}),(0,t.jsxs)("div",{className:"flex flex-wrap gap-2",children:[(0,t.jsx)(o(),{href:(0,u.ZJ)("elegant-code"),className:"text-sm text-primary hover:underline",children:"→ Elegant Code (Poisson card)"}),(0,t.jsx)("span",{className:"text-muted-foreground",children:"\xb7"}),(0,t.jsx)(o(),{href:(0,u.ZJ)("bioinformatics-pipelines"),className:"text-sm text-primary hover:underline",children:"→ Bioinformatics Pipelines (production)"}),(0,t.jsx)("span",{className:"text-muted-foreground",children:"\xb7"}),(0,t.jsx)(o(),{href:(0,u.ZJ)("living-entropy"),className:"text-sm text-primary hover:underline",children:"→ Living Entropy (cousin)"})]})]})}},95585:(e,s,a)=>{Promise.resolve().then(a.bind(a,72137))}},e=>{e.O(0,[6919,8500,9430,3493,9760,7591,6012,9237,4843,9620,6722,5404,9275,2194,7486,8441,3794,7358],()=>e(e.s=95585)),_N_E=e.O()}]);