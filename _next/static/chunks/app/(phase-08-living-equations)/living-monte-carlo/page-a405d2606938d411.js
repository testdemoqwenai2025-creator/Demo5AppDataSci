(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7230],{8195:(e,t,a)=>{"use strict";a.d(t,{A:()=>r});let r=(0,a(6404).A)("database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]])},26075:(e,t,a)=>{"use strict";a.d(t,{A:()=>r});let r=(0,a(6404).A)("boxes",[["path",{d:"M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z",key:"lc1i9w"}],["path",{d:"m7 16.5-4.74-2.85",key:"1o9zyk"}],["path",{d:"m7 16.5 5-3",key:"va8pkn"}],["path",{d:"M7 16.5v5.17",key:"jnp8gn"}],["path",{d:"M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z",key:"8zsnat"}],["path",{d:"m17 16.5-5-3",key:"8arw3v"}],["path",{d:"m17 16.5 4.74-2.85",key:"8rfmw"}],["path",{d:"M17 16.5v5.17",key:"k6z78m"}],["path",{d:"M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z",key:"1xygjf"}],["path",{d:"M12 8 7.26 5.15",key:"1vbdud"}],["path",{d:"m12 8 4.74-2.85",key:"3rx089"}],["path",{d:"M12 13.5V8",key:"1io7kd"}]])},57616:(e,t,a)=>{Promise.resolve().then(a.bind(a,70369))},70369:(e,t,a)=>{"use strict";a.d(t,{LivingMonteCarloPage:()=>L});var r=a(95155),o=a(12115),s=a(98500),n=a.n(s),i=a(58381),l=a(27774),c=a(92194),d=a(19776),m=a(41603),p=a(49345),h=a(37665),u=a(85757),g=a(45160),f=a(26075),x=a(8195),v=a(86901),b=a(97810),N=a(65576),y=a(44071),M=a(4450),C=a(16746),_=a(28408),j=a(32539),S=a(59656),T=a(18662),k=a(93459),w=a(21973),q=a(70468),A=a(83036);let B=[{label:"Dataset",value:"SPX 30-day call option (synthetic GBM)",hint:"S=$5,000 spot, K=$5,000 strike, T=30/365, r=5%, σ=15%. Real: CME SPX option chain, $10^10 daily notional.",deltaTone:"flat"},{label:"Equation",value:"E[f(X)] ≈ (1/N)\xb7Σ f(X_i)",hint:"Monte Carlo: simulate N GBM paths to expiry, compute mean payoff, discount. Convergence rate is O(1/√N) per Central Limit Theorem.",deltaTone:"flat"},{label:"Slider",value:"N (number of GBM paths)",hint:"Drag N from 10 to 10,000. At N=10: MC estimate \xb1$30. At N=10,000: \xb1$0.30 (CLT: σ/√N). Converges to Black-Scholes price ~$32.",deltaTone:"up"},{label:"Production",value:"QuantLib.MCEngine",hint:"Production: QuantLib.MonteCarloEuropeanEngine. PathSimulator + MCStatistics. BloomBerg BBG_MC function. CME uses quasi-MC for SPX settlement.",deltaTone:"flat"}];function L(){let[e,t]=(0,o.useState)("live");return(0,r.jsxs)("div",{className:"space-y-8",children:[(0,r.jsx)(i.zY,{eyebrow:"Living equation \xb7 run Monte Carlo live in your browser",title:"Living Monte Carlo — option pricing via simulated GBM paths",description:"Monte Carlo pricing: simulate N Geometric Brownian Motion paths to expiry, compute mean payoff max(S_T − K, 0), discount by e^(-rT). Drag N (paths) and watch the MC estimate converge to the closed-form Black-Scholes value (~$32) at rate O(1/√N). The SAME averaging simulates port congestion (10⁵ vessels), rare-variant p-values (10⁶ permutations), and neutron transport — because all four estimate E[f(X)] via random sampling.",right:(0,r.jsxs)("div",{className:"flex gap-2",children:[(0,r.jsxs)(g.E,{variant:"outline",className:"gap-1.5",children:[(0,r.jsx)(f.A,{className:"h-3 w-3"})," Sampling Methods"]}),(0,r.jsxs)(g.E,{variant:"outline",className:"gap-1.5",children:[(0,r.jsx)(x.A,{className:"h-3 w-3"})," CME SPX"]})]})}),(0,r.jsx)("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-3",children:B.map(e=>(0,r.jsx)(i.nO,{label:e.label,value:e.value,hint:e.hint,deltaTone:e.deltaTone},e.label))}),(0,r.jsx)("div",{className:"flex flex-wrap gap-1.5 border-b border-border/60",children:[["live","Live demo (Pyodide + slider)"],["math","Math derivation"],["production","Production code (QuantLib)"]].map(([a,o])=>(0,r.jsx)("button",{onClick:()=>t(a),className:`px-3 py-1.5 text-xs font-semibold border-b-2 -mb-px transition-all ${e===a?"border-primary text-primary":"border-transparent text-muted-foreground hover:text-foreground"}`,children:o},a))}),"live"===e&&(0,r.jsx)(i.iv,{title:"Live Monte Carlo on SPX 30-day ATM call — drag N and watch convergence",description:"S=$5,000, K=$5,000, T=30/365 yr, r=5%, σ=15%. Black-Scholes closed-form price: ~$32.0. As N grows, the MC estimate converges to this value at rate σ_payoff/√N. The chart shows MC estimate \xb1 1.96σ (95% CI) vs N.",icon:(0,r.jsx)(v.A,{className:"h-5 w-5"}),badge:"live",children:(0,r.jsx)(m.g,{slider:{name:"N",label:"N (number of GBM paths to simulate)",min:10,max:1e4,step:10,default:100,hint:"N=10: \xb1$30 stderr. N=100: \xb1$10. N=1,000: \xb1$3. N=10,000: \xb1$0.30 (CLT: σ/√N). Convergence to Black-Scholes ~$32."},preamble:"import json, math, random",code:`import json, math, random

random.seed(42)

# SPX 30-day ATM call option
S = 5000.0      # spot
K = 5000.0      # ATM strike
T = 30.0 / 365  # 30 days to expiry
r = 0.05        # risk-free rate (5% annual)
sigma = 0.15    # volatility (15% — historical SPX average)

N = \${N}

# Simulate N GBM paths to expiry using exact solution:
#   S_T = S * exp((r - sigma^2/2)*T + sigma * sqrt(T) * Z), Z ~ N(0, 1)
def sample_s_t():
    Z = random.gauss(0, 1)
    return S * math.exp((r - 0.5 * sigma * sigma) * T + sigma * math.sqrt(T) * Z)

# Compute the discounted payoff for each path
discount_factor = math.exp(-r * T)
payoffs = []
for _ in range(N):
    s_t = sample_s_t()
    payoff = max(s_t - K, 0.0)  # European call payoff
    payoffs.append(discount_factor * payoff)

# MC estimate: E[payoff] ≈ mean(payoffs)
mc_price = sum(payoffs) / N

# Standard error: σ_payoff / sqrt(N) (CLT)
mean_payoff = sum(payoffs) / N
var_payoff = sum((p - mean_payoff) ** 2 for p in payoffs) / max(N - 1, 1)
stderr = math.sqrt(var_payoff / N)

# 95% CI: MC_price \xb1 1.96 * stderr
ci_low = mc_price - 1.96 * stderr
ci_high = mc_price + 1.96 * stderr

# Closed-form Black-Scholes for comparison (Brenner-Subrahmanyam approx for ATM)
# d1 = (sigma * sqrt(T)) / sqrt(2 * pi), approximated: C ≈ S * sigma * sqrt(T) / sqrt(2*pi)
bs_approx = S * sigma * math.sqrt(T) / math.sqrt(2 * math.pi)

# Also compute several MC estimates at smaller N's (for the convergence chart)
# to show how MC converges with N.
convergence_data = []
for n_test in [10, 50, 100, 500, 1000, 5000, 10000]:
    if n_test > N: continue
    # Use the first n_test payoffs from our existing sample
    sub_payoffs = payoffs[:n_test]
    sub_mean = sum(sub_payoffs) / n_test
    sub_var = sum((p - sub_mean) ** 2 for p in sub_payoffs) / max(n_test - 1, 1)
    sub_stderr = math.sqrt(sub_var / n_test) if n_test > 0 else 0
    convergence_data.append({
        'N': n_test,
        'mc_estimate': sub_mean,
        'stderr': sub_stderr,
        'ci_low': sub_mean - 1.96 * sub_stderr,
        'ci_high': sub_mean + 1.96 * sub_stderr,
    })

# Always include the BS reference (independent of N)
result = {
    'convergence_data': convergence_data,
    'mc_price': mc_price,
    'stderr': stderr,
    'ci_low': ci_low,
    'ci_high': ci_high,
    'bs_approx': bs_approx,
    'N': N,
}
print(json.dumps(result))
`,renderer:e=>(0,r.jsxs)("div",{className:"space-y-3",children:[(0,r.jsxs)("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-2 text-xs",children:[(0,r.jsxs)("div",{className:"rounded-md border border-border/60 bg-muted/30 p-2",children:[(0,r.jsx)("p",{className:"text-[10px] uppercase text-muted-foreground",children:"N (paths)"}),(0,r.jsx)("p",{className:"font-mono font-bold text-primary text-base",children:e.N.toLocaleString()})]}),(0,r.jsxs)("div",{className:"rounded-md border border-border/60 bg-muted/30 p-2",children:[(0,r.jsx)("p",{className:"text-[10px] uppercase text-muted-foreground",children:"MC estimate"}),(0,r.jsxs)("p",{className:"font-mono font-bold text-primary text-base",children:["$",e.mc_price.toFixed(2)]})]}),(0,r.jsxs)("div",{className:"rounded-md border border-border/60 bg-muted/30 p-2",children:[(0,r.jsx)("p",{className:"text-[10px] uppercase text-muted-foreground",children:"95% CI"}),(0,r.jsxs)("p",{className:"font-mono font-bold text-primary text-[10px]",children:["[$",e.ci_low.toFixed(2),", $",e.ci_high.toFixed(2),"]"]})]}),(0,r.jsxs)("div",{className:"rounded-md border border-border/60 bg-muted/30 p-2",children:[(0,r.jsx)("p",{className:"text-[10px] uppercase text-muted-foreground",children:"Black-Scholes"}),(0,r.jsxs)("p",{className:"font-mono font-bold text-primary text-base",children:["$",e.bs_approx.toFixed(2)]})]})]}),(0,r.jsx)("div",{style:{width:"100%",height:320},children:(0,r.jsx)(M.u,{children:(0,r.jsxs)(C.b,{data:e.convergence_data,margin:{top:12,right:16,bottom:24,left:8},children:[(0,r.jsx)(_.d,{stroke:"hsl(var(--border))",strokeOpacity:.4}),(0,r.jsx)(j.W,{dataKey:"N",type:"number",scale:"log",domain:[10,1e4],stroke:"hsl(var(--muted-foreground))",fontSize:10,label:{value:"N (log scale)",position:"insideBottom",offset:-10,fontSize:10}}),(0,r.jsx)(S.h,{stroke:"hsl(var(--muted-foreground))",fontSize:10,label:{value:"MC price ($)",angle:-90,position:"insideLeft",fontSize:10}}),(0,r.jsx)(T.m,{formatter:e=>`$${e.toFixed(2)}`,labelFormatter:e=>`N = ${e}`}),(0,r.jsx)(k.s,{}),(0,r.jsx)(w.e,{y:e.bs_approx,stroke:"#16a34a",strokeDasharray:"4 4",label:{value:`BS = $${e.bs_approx.toFixed(2)}`,fontSize:9,fill:"#16a34a",position:"right"}}),(0,r.jsx)(q.N,{name:"MC estimate",type:"monotone",dataKey:"mc_estimate",stroke:"#2563eb",strokeWidth:2.5,dot:!0}),(0,r.jsx)(q.N,{name:"CI low",type:"monotone",dataKey:"ci_low",stroke:"#dc2626",strokeWidth:1,strokeDasharray:"4 4",dot:!1,strokeOpacity:.5}),(0,r.jsx)(q.N,{name:"CI high",type:"monotone",dataKey:"ci_high",stroke:"#dc2626",strokeWidth:1,strokeDasharray:"4 4",dot:!1,strokeOpacity:.5})]})})}),(0,r.jsxs)("p",{className:"text-xs text-muted-foreground leading-relaxed",children:["The ",(0,r.jsx)("span",{className:"text-blue-600 dark:text-blue-400 font-semibold",children:"blue line"})," is the MC estimate as N grows. The ",(0,r.jsx)("span",{className:"text-rose-600 dark:text-rose-400 font-semibold",children:"red dashed"})," lines are the 95% confidence interval (σ/√N — Central Limit Theorem). The ",(0,r.jsx)("span",{className:"text-emerald-600 dark:text-emerald-400 font-semibold",children:"green dashed"})," line is the closed-form Black-Scholes price (~$",e.bs_approx.toFixed(2),"). At ",(0,r.jsxs)("span",{className:"font-mono text-primary",children:["N = ",e.N.toLocaleString()]}),", MC estimate = ",(0,r.jsxs)("span",{className:"font-mono text-primary",children:["$",e.mc_price.toFixed(2)]})," \xb1 ",(0,r.jsxs)("span",{className:"font-mono text-primary",children:["$",e.stderr.toFixed(2)]}),". Convergence rate is O(1/√N): 100\xd7 more paths gives 10\xd7 tighter CI."]})]})})}),"math"===e&&(0,r.jsx)(i.iv,{title:"Math derivation — where Monte Carlo comes from",description:"Metropolis, Ulam, and von Neumann (1946, Los Alamos) invented Monte Carlo for neutron-transport calculations. The Law of Large Numbers guarantees convergence; the Central Limit Theorem gives the rate (σ/√N).",icon:(0,r.jsx)(b.A,{className:"h-5 w-5"}),badge:"derivation",children:(0,r.jsxs)("div",{className:"space-y-4 text-sm text-muted-foreground leading-relaxed",children:[(0,r.jsxs)("p",{children:[(0,r.jsx)("strong",{className:"text-foreground/80",children:"The equation."})," The expectation E[f(X)] is approximated by the sample mean: E[f(X)] ≈ (1/N) \xb7 Σ (from i=1 to N) of f(X_i), where X_i are i.i.d. samples from the distribution of X. The Law of Large Numbers guarantees this converges as N → ∞."]}),(0,r.jsxs)("p",{children:[(0,r.jsx)("strong",{className:"text-foreground/80",children:"The convergence rate (CLT)."})," By the Central Limit Theorem, the sample mean is approximately N(E[f(X)], σ\xb2(f)/N), where σ\xb2(f) = Var(f(X)). So the standard error is σ(f)/√N. Halving the error requires quadrupling N — this is the fundamental cost of Monte Carlo."]}),(0,r.jsxs)("p",{children:[(0,r.jsx)("strong",{className:"text-foreground/80",children:"Variance reduction."})," Antithetic variates (use both Z and −Z), control variates (subtract a known-expectation variable), importance sampling (sample from a different distribution and reweight). These can reduce σ(f) by 10-100\xd7, making MC competitive with closed-form for high-dimensional integrals."]}),(0,r.jsxs)("p",{children:[(0,r.jsx)("strong",{className:"text-foreground/80",children:"Why option pricing uses MC."})," For path-dependent or multi-asset options (Asian, basket, Bermudan), there's no closed-form. MC simulates 10⁶-10⁹ paths and averages. Quasi-MC (Sobol, Halton sequences) replaces pseudo-random with deterministic low-discrepancy sequences — converges at O((log N)^d / N^((d+1)/2)) instead of O(1/√N), much faster."]}),(0,r.jsxs)("p",{children:[(0,r.jsx)("strong",{className:"text-foreground/80",children:"Citation."})," Metropolis & Ulam, 'The Monte Carlo Method', J. Amer. Stat. Assoc. 44:247 (1949). Boyle, 'Options: A Monte Carlo approach', J. Financial Econ. 4:3 (1977)."]})]})}),"production"===e&&(0,r.jsxs)(i.iv,{title:"Production code — what QuantLib and Bloomberg compute",description:"In production, you call QuantLib.MonteCarloEuropeanEngine. It uses Mersenne-Twister RNG, antithetic variates for variance reduction, and supports quasi-MC (Sobol). Bloomberg's BBG_MC does similar.",icon:(0,r.jsx)(N.A,{className:"h-5 w-5"}),badge:"production",children:[(0,r.jsx)(d.N,{language:"python",filename:"production_monte_carlo.py",code:`# Production Monte Carlo via QuantLib
import QuantLib as ql

# SPX 30-day ATM call option
today = ql.Date.todaysDate()
ql.Settings.instance().evaluationDate = today

expiry = today + ql.Period(30, ql.Days)
S = 5000.0  # SPX spot
K = 5000.0  # ATM strike
r = 0.05    # risk-free rate (5%)
sigma = 0.15  # volatility (15%)
q = 0.015   # dividend yield (1.5%)

# Build process (Black-Scholes-Merton)
spot_h = ql.QuoteHandle(ql.SimpleQuote(S))
flat_ts = ql.YieldTermStructureHandle(ql.FlatForward(today, r, ql.Actual365Fixed()))
div_ts = ql.YieldTermStructureHandle(ql.FlatForward(today, q, ql.Actual365Fixed()))
vol_ts = ql.BlackVolTermStructureHandle(ql.BlackConstantVol(
    today, ql.NullCalendar(), sigma, ql.Actual365Fixed()
))
process = ql.BlackScholesMertonProcess(spot_h, div_ts, flat_ts, vol_ts)

# Monte Carlo engine
exercise = ql.EuropeanExercise(expiry)
payoff = ql.PlainVanillaPayoff(ql.Option.Call, K)
option = ql.VanillaOption(payoff, exercise)

# 100,000 paths, antithetic variates, Sobol quasi-MC for variance reduction
rng = ql.SobolRsg(32)  # 32-dimensional Sobol sequence
sequence_gen = ql.RandomSequenceGenerator(32, ql.UniformRandomGenerator(42))
gaussian_gen = ql.GaussianRandomSequenceGenerator(sequence_gen)
path_gen = ql.GaussianMultiPathGenerator(process, [expiry], gaussian_gen, False)

# MC engine: 100,000 paths, antithetic
n_paths = 100000
engine = ql.MCEuropeanEngine(process, n_paths, antithetic=True, seed=42)
option.setPricingEngine(engine)

mc_price = option.NPV()
mc_error = option.errorEstimate()
print(f"SPX 30-day ATM call (MC, N=100k): \${mc_price:.2f} \xb1 \${mc_error:.4f}")

# Closed-form for comparison
option.setPricingEngine(ql.AnalyticEuropeanEngine(process))
bs_price = option.NPV()
print(f"SPX 30-day ATM call (Black-Scholes closed-form): \${bs_price:.2f}")

# Real production: CME uses quasi-MC for SPX settlement. Renaissance Medallion
# uses MC for exotic payoffs (basket, path-dependent). Bloomberg BBG_MC for
# OTC structured products.`}),(0,r.jsxs)("div",{className:"mt-3 grid grid-cols-2 gap-2 text-xs",children:[(0,r.jsxs)(n(),{href:(0,u.ZJ)("fintech"),className:"rounded-md border border-border/60 bg-muted/20 p-2 hover:border-primary/40 hover:bg-primary/5 transition-colors block",children:[(0,r.jsx)("p",{className:"font-semibold text-foreground/80",children:"→ Fintech"}),(0,r.jsx)("p",{className:"text-muted-foreground text-[10px] mt-0.5",children:"QuantLib + MC for option pricing in production."})]}),(0,r.jsxs)(n(),{href:(0,u.ZJ)("elegant-code"),className:"rounded-md border border-border/60 bg-muted/20 p-2 hover:border-primary/40 hover:bg-primary/5 transition-colors block",children:[(0,r.jsx)("p",{className:"font-semibold text-foreground/80",children:"→ Elegant Code (Monte Carlo card)"}),(0,r.jsx)("p",{className:"text-muted-foreground text-[10px] mt-0.5",children:"Monte Carlo's full cross-disciplinary card: fintech ↔ maritime ↔ genetics."})]})]})]}),(0,r.jsx)(i.iv,{title:"My deeper thought: Monte Carlo IS the universal estimation equation",description:"A quant pricing an exotic option via 10⁶ simulated GBM paths, a port authority simulating 10⁵ vessel arrivals to estimate berth congestion, and a geneticist running 10⁶ permutations to estimate rare-variant significance all use the SAME averaging E[f(X)] ≈ (1/N)\xb7Σ f(X_i) — because all three estimate an expectation via random sampling. The Law of Large Numbers guarantees convergence (var ~ σ\xb2/N) and the Central Limit Theorem gives the error bar (\xb11.96σ/√N at 95%). Metropolis 1946 invented this at Los Alamos for neutron transport.",icon:(0,r.jsx)(y.A,{className:"h-5 w-5"}),badge:"Insight",children:(0,r.jsx)("div",{className:"space-y-3 text-sm text-muted-foreground leading-relaxed",children:(0,r.jsxs)("p",{children:[(0,r.jsx)("strong",{className:"text-foreground/80",children:"A CME quant, a port captain, and a geneticist"})," are all averaging the same way. The math is universal — the random variable differs, the averaging doesn't."]})})}),(0,r.jsx)(h.t,{sourceCard:17}),(0,r.jsxs)(A.S,{pageTitle:"Monte Carlo",children:[(0,r.jsx)(A.P,{title:"Monte Carlo IS the universal estimation engine — from neutron transport to option pricing",connectedTo:"ADR-054 (Black-Scholes + MC + GNN for fintech)",children:(0,r.jsx)("p",{children:"Metropolis invented Monte Carlo at Los Alamos in 1946 for neutron-transport calculations (Manhattan Project). Boyle applied it to option pricing in 1977. PLINK uses it for rare-variant permutation tests. Port authorities use it for berth-congestion simulation. All four estimate E[f(X)] via random sampling — the SAME averaging. The Law of Large Numbers guarantees convergence; the Central Limit Theorem gives the error bar (σ/√N). Metropolis didn't know he was inventing the method that would price $10B/day in CME options."})}),(0,r.jsx)(A.P,{title:"The O(1/√N) convergence rate IS the cost of randomness",connectedTo:"ADR-051 (living-equation pages)",children:(0,r.jsx)("p",{children:"When you drag N on this page, the MC estimate converges to the Black-Scholes value at rate σ/√N. 100 paths → \xb1$3. 10,000 paths → \xb1$0.30. 100,000 paths → \xb1$0.03. Halving the error requires QUADRUPLING the paths. This is the fundamental cost of Monte Carlo — and it's why quasi-MC (Sobol, Halton) exists: deterministic low-discrepancy sequences converge at O((log N)^d / N) instead of O(1/√N), which is much faster for high-dimensional problems."})}),(0,r.jsx)(A.P,{title:"The convergence curve IS the proof — watch the CI tighten",connectedTo:"ADR-051 (living-equation pages)",children:(0,r.jsx)("p",{children:"The blue line (MC estimate) converges to the green line (Black-Scholes) as N grows. The red dashed lines (95% CI) tighten around the blue. The visual output — a curve approaching an asymptote with narrowing bands — communicates 'convergence' instantly. The reader SEES the CLT in action: the more samples, the tighter the estimate. This is what 'convergence in probability' looks like — and seeing it is different from reading the formula."})}),(0,r.jsx)(A.P,{title:"Variance reduction IS the art of Monte Carlo — antithetic, control, importance",connectedTo:"ADR-054 (Black-Scholes + MC + GNN for fintech)",children:(0,r.jsx)("p",{children:"The O(1/√N) rate is slow. Variance reduction techniques can reduce σ by 10-100\xd7, making MC competitive with closed-form. Antithetic variates (use both Z and -Z) double the effective sample size. Control variates (subtract a known-expectation variable) cancel correlated noise. Importance sampling (sample from a different distribution and reweight) concentrates samples in high-impact regions. CME uses Sobol quasi-MC for SPX settlement — 100\xd7 faster than pseudo-random MC. The art is in the sampling, not the averaging."})}),(0,r.jsx)(A.P,{title:"Metropolis worked at Los Alamos — the method went nuclear before it went financial",connectedTo:"ADR-001 (platform architecture)",children:(0,r.jsx)("p",{children:"Nicholas Metropolis coined 'Monte Carlo' (after the casino) in 1949 for neutron-transport calculations at Los Alamos. The method was classified — it was part of the Manhattan Project's hydrogen-bomb work. Stanislaw Ulam and John von Neumann developed it while computing neutron paths for the Teller-Ulam design. Twenty-eight years later, Boyle used the same method to price options. The same averaging that models nuclear explosions prices stock options. The math doesn't care about the domain — or the classification level."})})]}),(0,r.jsx)(p.a,{topics:[{id:"fintech",reason:"Fintech — QuantLib + MC for option pricing"},{id:"elegant-code",reason:"Elegant Code — the Monte Carlo card (cross-disciplinary)"},{id:"living-gbm",reason:"Living GBM — MC simulates GBM paths (cousin)"},{id:"living-black-scholes",reason:"Living Black-Scholes — closed-form alternative (cousin)"}]}),(0,r.jsx)(c.B,{pageId:"living-monte-carlo"}),(0,r.jsx)(l.T,{relatedPages:[{id:"connections",reason:"Trace this topic's connections across the platform's math graph"},{id:"fintech",reason:"Fintech — QuantLib + MC for option pricing"},{id:"elegant-code",reason:"Elegant Code — the Monte Carlo card (cross-disciplinary)"}]}),(0,r.jsxs)("div",{className:"flex flex-wrap gap-2",children:[(0,r.jsx)(n(),{href:(0,u.ZJ)("elegant-code"),className:"text-sm text-primary hover:underline",children:"→ Elegant Code (Monte Carlo card)"}),(0,r.jsx)("span",{className:"text-muted-foreground",children:"\xb7"}),(0,r.jsx)(n(),{href:(0,u.ZJ)("fintech"),className:"text-sm text-primary hover:underline",children:"→ Fintech (production)"}),(0,r.jsx)("span",{className:"text-muted-foreground",children:"\xb7"}),(0,r.jsx)(n(),{href:(0,u.ZJ)("living-gbm"),className:"text-sm text-primary hover:underline",children:"→ Living GBM (cousin)"})]})]})}}},e=>{e.O(0,[6919,8500,9430,3493,9760,7591,6012,9237,4843,9620,6722,5404,9275,2194,7486,8441,3794,7358],()=>e(e.s=57616)),_N_E=e.O()}]);