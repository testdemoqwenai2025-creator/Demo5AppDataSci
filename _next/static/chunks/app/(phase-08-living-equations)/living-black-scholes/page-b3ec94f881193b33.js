(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3006],{8195:(e,t,a)=>{"use strict";a.d(t,{A:()=>i});let i=(0,a(6404).A)("database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]])},38760:(e,t,a)=>{Promise.resolve().then(a.bind(a,92393))},76498:(e,t,a)=>{"use strict";a.d(t,{A:()=>i});let i=(0,a(6404).A)("dollar-sign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]])},92393:(e,t,a)=>{"use strict";a.d(t,{LivingBlackScholesPage:()=>q});var i=a(95155),r=a(12115),o=a(98500),s=a.n(o),l=a(58381),n=a(27774),c=a(92194),d=a(19776),h=a(41603),p=a(49345),m=a(37665),u=a(85757),g=a(45160),f=a(76498),x=a(8195),v=a(86901),y=a(97810),b=a(65576),S=a(44071),T=a(4450),k=a(16746),j=a(28408),N=a(32539),w=a(59656),_=a(18662),B=a(93459),C=a(21973),M=a(70468),A=a(83036);let P=[{label:"Dataset",value:"SPX 30-day call option chain (synthetic)",hint:"S = $5,000 spot (SPX), T = 30/365 years, r = 5% (risk-free). Strikes K ∈ [$4,800, $5,200]. Real data: CME SPX option chain, 4M contracts/day.",deltaTone:"flat"},{label:"Equation",value:"C = S\xb7N(d1) − K\xb7e^(−rT)\xb7N(d2)",hint:"Black-Scholes call option price. d1 = (ln(S/K) + (r + σ\xb2/2)\xb7T) / (σ\xb7√T), d2 = d1 − σ\xb7√T. N() is the standard normal CDF.",deltaTone:"flat"},{label:"Slider",value:"σ (volatility)",hint:"Drag σ from 5% to 50%. At σ=15% (VIX historical): ATM call ≈ $30. At σ=50% (crisis): ATM call ≈ $100. Price scales linearly with σ at-the-money.",deltaTone:"up"},{label:"Production",value:"QuantLib",hint:"Production: QuantLib.blackVolatilityTermStructure + BlackScholesProcess + PricingEngine. BloomBerg BSM function. CME settlement uses Black-Scholes for ATM.",deltaTone:"flat"}];function q(){let[e,t]=(0,r.useState)("live");return(0,i.jsxs)("div",{className:"space-y-8",children:[(0,i.jsx)(l.zY,{eyebrow:"Living equation \xb7 run Black-Scholes live in your browser",title:"Living Black-Scholes — drag σ and watch the option-price curve steepen",description:"Black-Scholes prices a 30-day SPX call option across strikes. Drag σ (volatility, the only unobservable input) and watch the price curve steepen from a flat $0 (low vol, far-OTM) to a tall arc ($100+ at ATM, high vol). The SAME formula prices cargo options at Lloyd's, allele-substitution options in genetics, and your SPX calls — because all three price the right-but-not-obligation to act on a stochastic payoff.",right:(0,i.jsxs)("div",{className:"flex gap-2",children:[(0,i.jsxs)(g.E,{variant:"outline",className:"gap-1.5",children:[(0,i.jsx)(f.A,{className:"h-3 w-3"})," Stochastic Calculus"]}),(0,i.jsxs)(g.E,{variant:"outline",className:"gap-1.5",children:[(0,i.jsx)(x.A,{className:"h-3 w-3"})," CME SPX"]})]})}),(0,i.jsx)("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-3",children:P.map(e=>(0,i.jsx)(l.nO,{label:e.label,value:e.value,hint:e.hint,deltaTone:e.deltaTone},e.label))}),(0,i.jsx)("div",{className:"flex flex-wrap gap-1.5 border-b border-border/60",children:[["live","Live demo (Pyodide + slider)"],["math","Math derivation"],["production","Production code (QuantLib)"]].map(([a,r])=>(0,i.jsx)("button",{onClick:()=>t(a),className:`px-3 py-1.5 text-xs font-semibold border-b-2 -mb-px transition-all ${e===a?"border-primary text-primary":"border-transparent text-muted-foreground hover:text-foreground"}`,children:r},a))}),"live"===e&&(0,i.jsx)(l.iv,{title:"Live Black-Scholes on synthetic SPX 30-day call — drag σ and watch the curve",description:"S = $5,000 (SPX spot), T = 30/365 years (~30 days), r = 5% (annualised risk-free). Strikes K range from $4,800 to $5,200. The price curve C(K) is a downward arc that flattens at low σ (deterministic) and steepens at high σ (uncertain). At K=$5,000 (ATM), the price scales roughly linearly with σ.",icon:(0,i.jsx)(v.A,{className:"h-5 w-5"}),badge:"live",children:(0,i.jsx)(h.g,{slider:{name:"sigma",label:"σ (volatility — annualised std dev of returns)",min:5,max:50,step:1,default:15,hint:"σ=15% (VIX historical average): ATM call ≈ $30. σ=50% (crisis, 2008): ATM call ≈ $100. VIX > 30 indicates market stress."},preamble:"import json, math",code:`import json, math

# SPX 30-day call option (synthetic)
S = 5000.0      # spot price ($)
T = 30.0 / 365  # 30 days in years
r = 0.05        # risk-free rate (5% annual)
sigma = \${sigma} / 100.0   # slider value (volatility as decimal)

# Black-Scholes: C = S * N(d1) - K * e^(-rT) * N(d2)
# where d1 = (ln(S/K) + (r + sigma^2/2)*T) / (sigma * sqrt(T))
#       d2 = d1 - sigma * sqrt(T)

def norm_cdf(x):
    # Numerical Recipes 26.2.17 approximation (high accuracy)
    z = abs(x)
    c0 = 0.396683716
    c1 = -0.163087977
    c2 = -0.138048876
    c3 = 0.0860570825
    c4 = -0.019880294
    c5 = 0.00315329014
    p = 1.0
    if z > 0:
        p = 1.0 / (1.0 + 0.2316419 * z)
        p1 = ((((c5 * z + c4) * z + c3) * z + c2) * z + c1) * z + c0
        p1 *= p
        p = 1.0 - p1 * math.exp(-0.5 * z * z) / math.sqrt(2 * math.pi)
    if x < 0:
        p = 1.0 - p
    return p

def black_scholes_call(S, K, r, sigma, T):
    if T <= 0 or sigma <= 0:
        return max(S - K, 0.0)
    sqrtT = math.sqrt(T)
    d1 = (math.log(S / K) + (r + 0.5 * sigma * sigma) * T) / (sigma * sqrtT)
    d2 = d1 - sigma * sqrtT
    return S * norm_cdf(d1) - K * math.exp(-r * T) * norm_cdf(d2)

# Build price curve: C(K) for strikes K in [$4,800, $5,200]
strikes = [4800 + i * 25 for i in range(17)]  # 17 strikes from 4800 to 5200
chart_data = []
for K in strikes:
    C = black_scholes_call(S, K, r, sigma, T)
    intrinsic = max(S - K, 0.0)
    time_value = C - intrinsic
    chart_data.append({
        'strike': K,
        'price': C,
        'intrinsic': intrinsic,
        'time_value': time_value,
    })

# ATM call (K = S)
atm_call = black_scholes_call(S, S, r, sigma, T)

# For comparison: how does ATM call scale with sigma?
sigma_test = [0.05, 0.10, 0.15, 0.20, 0.30, 0.50]
atm_curve = []
for s in sigma_test:
    atm_curve.append({'sigma_pct': s * 100, 'atm_price': black_scholes_call(S, S, r, s, T)})

result = {
    'chart_data': chart_data,
    'sigma': sigma,
    'sigma_pct': sigma * 100,
    'atm_call': atm_call,
    'atm_curve': atm_curve,
    'S': S,
    'T': T,
    'r': r,
    'atm_call_linear_approx': S * sigma * math.sqrt(T) / math.sqrt(2 * math.pi),  # rough ATM approximation
}
print(json.dumps(result))
`,renderer:e=>(0,i.jsxs)("div",{className:"space-y-3",children:[(0,i.jsxs)("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-2 text-xs",children:[(0,i.jsxs)("div",{className:"rounded-md border border-border/60 bg-muted/30 p-2",children:[(0,i.jsx)("p",{className:"text-[10px] uppercase text-muted-foreground",children:"σ (volatility)"}),(0,i.jsxs)("p",{className:"font-mono font-bold text-primary text-base",children:[(100*e.sigma).toFixed(0),"%"]})]}),(0,i.jsxs)("div",{className:"rounded-md border border-border/60 bg-muted/30 p-2",children:[(0,i.jsx)("p",{className:"text-[10px] uppercase text-muted-foreground",children:"ATM call (K=S)"}),(0,i.jsxs)("p",{className:"font-mono font-bold text-primary text-base",children:["$",e.atm_call.toFixed(2)]})]}),(0,i.jsxs)("div",{className:"rounded-md border border-border/60 bg-muted/30 p-2",children:[(0,i.jsx)("p",{className:"text-[10px] uppercase text-muted-foreground",children:"σ \xd7 S \xd7 √T (≈ATM)"}),(0,i.jsxs)("p",{className:"font-mono font-bold text-primary text-base",children:["$",e.atm_call_linear_approx.toFixed(2)]})]}),(0,i.jsxs)("div",{className:"rounded-md border border-border/60 bg-muted/30 p-2",children:[(0,i.jsx)("p",{className:"text-[10px] uppercase text-muted-foreground",children:"Time value ATM"}),(0,i.jsxs)("p",{className:"font-mono font-bold text-primary text-base",children:["$",e.atm_call.toFixed(2)]})]})]}),(0,i.jsx)("div",{style:{width:"100%",height:320},children:(0,i.jsx)(T.u,{children:(0,i.jsxs)(k.b,{data:e.chart_data,margin:{top:12,right:16,bottom:24,left:8},children:[(0,i.jsx)(j.d,{stroke:"hsl(var(--border))",strokeOpacity:.4}),(0,i.jsx)(N.W,{dataKey:"strike",type:"number",domain:[4800,5200],stroke:"hsl(var(--muted-foreground))",fontSize:10,label:{value:"strike K ($)",position:"insideBottom",offset:-10,fontSize:10}}),(0,i.jsx)(w.h,{stroke:"hsl(var(--muted-foreground))",fontSize:10,label:{value:"call price C ($)",angle:-90,position:"insideLeft",fontSize:10}}),(0,i.jsx)(_.m,{formatter:e=>`$${e.toFixed(2)}`,labelFormatter:e=>`K = $${e}`}),(0,i.jsx)(B.s,{}),(0,i.jsx)(C.e,{x:e.S,stroke:"#16a34a",strokeDasharray:"4 4",label:{value:"S = $5,000 (ATM)",fontSize:9,fill:"#16a34a",position:"top"}}),(0,i.jsx)(M.N,{name:"Call price C(K)",type:"monotone",dataKey:"price",stroke:"#2563eb",strokeWidth:2.5,dot:!1}),(0,i.jsx)(M.N,{name:"Intrinsic max(S−K, 0)",type:"monotone",dataKey:"intrinsic",stroke:"#dc2626",strokeWidth:1.5,strokeDasharray:"4 4",dot:!1})]})})}),(0,i.jsxs)("p",{className:"text-xs text-muted-foreground leading-relaxed",children:["The blue curve is the call price ",(0,i.jsx)("span",{className:"font-mono",children:"C(K) = S\xb7N(d1) − K\xb7e^(-rT)\xb7N(d2)"})," across strikes K. The red dashed line is the intrinsic value ",(0,i.jsx)("span",{className:"font-mono",children:"max(S − K, 0)"})," — what the option would be worth at expiry. The gap between them is the ",(0,i.jsx)("strong",{className:"text-foreground/80",children:"time value"})," (the option's value from uncertainty). At ",(0,i.jsxs)("span",{className:"font-mono text-primary",children:["σ = ",e.sigma_pct.toFixed(0),"%"]}),", the ATM call (K = S = $5,000) costs"," ",(0,i.jsxs)("span",{className:"font-mono text-primary",children:["$",e.atm_call.toFixed(2)]}),". The rough approximation ",(0,i.jsxs)("span",{className:"font-mono",children:["σ \xd7 S \xd7 √T / √(2π) = $",e.atm_call_linear_approx.toFixed(2)]})," confirms the linear σ-scaling for ATM calls."]})]})})}),"math"===e&&(0,i.jsx)(l.iv,{title:"Math derivation — where Black-Scholes comes from",description:"Black, Scholes, and Merton (1973) derived the option-pricing formula by assuming the underlying follows Geometric Brownian Motion (GBM) and constructing a continuously-hedged riskless portfolio. The result is the only arbitrage-free price.",icon:(0,i.jsx)(y.A,{className:"h-5 w-5"}),badge:"derivation",children:(0,i.jsxs)("div",{className:"space-y-4 text-sm text-muted-foreground leading-relaxed",children:[(0,i.jsxs)("p",{children:[(0,i.jsx)("strong",{className:"text-foreground/80",children:"The setup."})," Assume the underlying S follows Geometric Brownian Motion: dS = μS\xb7dt + σS\xb7dW. A European call option with strike K and expiry T has payoff max(S_T − K, 0). We want its price C(S, t) — a function of the current spot and time-to-expiry."]}),(0,i.jsxs)("p",{children:[(0,i.jsx)("strong",{className:"text-foreground/80",children:"The hedge."})," Hold 1 option short and Δ = ∂C/∂S shares long. The portfolio value is Π = −C + Δ\xb7S. By Ito's lemma, dC = (∂C/∂t + μS∂C/∂S + \xbdσ\xb2S\xb2∂\xb2C/∂S\xb2)\xb7dt + σS∂C/∂S\xb7dW. Choosing Δ = ∂C/∂S cancels the dW term — the portfolio becomes riskless. By no-arbitrage, it must earn the risk-free rate: dΠ = r\xb7Π\xb7dt."]}),(0,i.jsxs)("p",{children:[(0,i.jsx)("strong",{className:"text-foreground/80",children:"The PDE."})," Substituting and simplifying gives the Black-Scholes PDE: ∂C/∂t + (1/2)σ\xb2S\xb2∂\xb2C/∂S\xb2 + rS∂C/∂S − rC = 0, with boundary condition C(S, T) = max(S − K, 0). The solution is C(S, t) = S\xb7N(d1) − K\xb7e^(−rT)\xb7N(d2), where d1 = (ln(S/K) + (r + σ\xb2/2)\xb7T) / (σ\xb7√T) and d2 = d1 − σ\xb7√T."]}),(0,i.jsxs)("p",{children:[(0,i.jsx)("strong",{className:"text-foreground/80",children:"Why N(d1) and N(d2) appear."})," The option's price is the discounted expected payoff under the risk-neutral measure. N(d2) is the risk-neutral probability the option expires in-the-money (S_T > K). N(d1) is the delta (hedge ratio) — the fraction of a share you should hold per option short. The first term S\xb7N(d1) is the present value of receiving the share if in-the-money; the second K\xb7e^(−rT)\xb7N(d2) is the present value of paying the strike if in-the-money."]}),(0,i.jsxs)("p",{children:[(0,i.jsx)("strong",{className:"text-foreground/80",children:"Citation."})," Black & Scholes, 'The Pricing of Options and Corporate Liabilities', J. Political Economy 81:3 (1973). Merton, 'Theory of Rational Option Pricing', Bell J. Econ. 4:1 (1973). Hull, 'Options, Futures, and Other Derivatives' (11th ed., 2021)."]})]})}),"production"===e&&(0,i.jsxs)(l.iv,{title:"Production code — what QuantLib and Bloomberg compute",description:"In production, you call QuantLib (the industry-standard C++ library with Python bindings) or Bloomberg's BSM function. Both implement the closed-form Black-Scholes formula plus numerical Greeks (delta, gamma, vega, theta, rho). Here's the production call.",icon:(0,i.jsx)(b.A,{className:"h-5 w-5"}),badge:"production",children:[(0,i.jsx)(d.N,{language:"python",filename:"production_black_scholes.py",code:`# Production Black-Scholes via QuantLib (C++ library, Python bindings)
import QuantLib as ql
from datetime import datetime, timedelta

# SPX 30-day ATM call option
evaluation_date = ql.Date.todaysDate()
ql.Settings.instance().evaluationDate = evaluation_date

expiry = evaluation_date + ql.Period(30, ql.Days)  # 30-day expiry
S = 5000.0      # SPX spot
K = 5000.0      # ATM strike
r = 0.05        # risk-free rate (5%)
sigma = 0.15    # implied vol (15%)
q = 0.015       # SPX dividend yield (1.5%)

# Build market data
spot_handle = ql.QuoteHandle(ql.SimpleQuote(S))
flat_ts = ql.YieldTermStructureHandle(ql.FlatForward(evaluation_date, r, ql.Actual365Fixed()))
dividend_ts = ql.YieldTermStructureHandle(ql.FlatForward(evaluation_date, q, ql.Actual365Fixed()))
vol_ts = ql.BlackVolTermStructureHandle(ql.BlackConstantVol(
    evaluation_date, ql.NullCalendar(), sigma, ql.Actual365Fixed()
))

# Black-Scholes process + engine
exercise = ql.EuropeanExercise(expiry)
payoff = ql.PlainVanillaPayoff(ql.Option.Call, K)
option = ql.VanillaOption(payoff, exercise)
process = ql.BlackScholesMertonProcess(spot_handle, dividend_ts, flat_ts, vol_ts)
engine = ql.AnalyticEuropeanEngine(process)
option.setPricingEngine(engine)

# Price + Greeks
price = option.NPV()
delta = option.delta()
gamma = option.gamma()
vega = option.vega()
theta = option.theta()
rho = option.rho()
print(f"SPX 30-day ATM call: price=\${price:.2f}, delta={delta:.4f}, "
      f"gamma={gamma:.6f}, vega=\${vega:.2f}, theta=\${theta:.4f}/day, rho=\${rho:.2f}")

# Real production: CME settlement uses Black-Scholes for ATM options.
# Market makers hedge with delta (option.delta() → shares per option).
# Risk officers compute VaR via option sensitivities + GBM simulation.`}),(0,i.jsxs)("div",{className:"mt-3 grid grid-cols-2 gap-2 text-xs",children:[(0,i.jsxs)(s(),{href:(0,u.ZJ)("fintech"),className:"rounded-md border border-border/60 bg-muted/20 p-2 hover:border-primary/40 hover:bg-primary/5 transition-colors block",children:[(0,i.jsx)("p",{className:"font-semibold text-foreground/80",children:"→ Fintech"}),(0,i.jsx)("p",{className:"text-muted-foreground text-[10px] mt-0.5",children:"QuantLib + Black-Scholes in production: Ed Thorp, Jim Simons, Medallion."})]}),(0,i.jsxs)(s(),{href:(0,u.ZJ)("elegant-code"),className:"rounded-md border border-border/60 bg-muted/20 p-2 hover:border-primary/40 hover:bg-primary/5 transition-colors block",children:[(0,i.jsx)("p",{className:"font-semibold text-foreground/80",children:"→ Elegant Code (Black-Scholes card)"}),(0,i.jsx)("p",{className:"text-muted-foreground text-[10px] mt-0.5",children:"Black-Scholes's full cross-disciplinary card: fintech ↔ maritime ↔ genetics."})]})]})]}),(0,i.jsx)(l.iv,{title:"My deeper thought: Black-Scholes IS the universal option-pricing equation",description:"A Lloyd's underwriter pricing a 90-day cargo-route option, a CME quant pricing a 30-day SPX call, and a population geneticist pricing an allele-substitution option under fluctuating selection all evaluate the SAME formula — because all three price the right-but-not-obligation to act on a future stochastic payoff. The math doesn't know if S is a freight rate, a stock price, or an allele frequency. The d1 = (ln(S/K) + (r + σ\xb2/2)\xb7T) / (σ\xb7√T) is universal: it measures how far in-the-money the option is, normalized by volatility.",icon:(0,i.jsx)(S.A,{className:"h-5 w-5"}),badge:"Insight",children:(0,i.jsx)("div",{className:"space-y-3 text-sm text-muted-foreground leading-relaxed",children:(0,i.jsxs)("p",{children:[(0,i.jsx)("strong",{className:"text-foreground/80",children:"A Lloyd's underwriter, a CME quant, and a Fisher-trained geneticist"})," are computing the same numbers — and none of them knows it. Black-Scholes IS the universal price of the right (not obligation) to act on a stochastic future payoff."]})})}),(0,i.jsx)(m.t,{sourceCard:10}),(0,i.jsxs)(A.S,{pageTitle:"Black Scholes",children:[(0,i.jsx)(A.P,{title:"Black-Scholes IS the price of the right to act — universal across cargo, stocks, and alleles",connectedTo:"ADR-054 (Black-Scholes + MC + GNN for fintech)",children:(0,i.jsx)("p",{children:"A Lloyd's underwriter pricing a 90-day cargo-route option, a CME quant pricing a 30-day SPX call, and a Fisher geneticist pricing an allele-substitution option under fluctuating selection all evaluate the SAME formula. The right-but-not-obligation to act on a future stochastic payoff is universal. The math doesn't know if S is a freight rate, a stock price, or an allele frequency. The d1 = (ln(S/K) + (r + σ\xb2/2)\xb7T) / (σ\xb7√T) measures how far in-the-money the option is, normalized by volatility — and that normalisation is the same whether you're shipping cargo, trading stocks, or modelling evolution."})}),(0,i.jsx)(A.P,{title:"σ is the only unobservable — and it's the market's belief about the future",connectedTo:"ADR-054 (Black-Scholes + MC + GNN for fintech)",children:(0,i.jsx)("p",{children:"Every Black-Scholes input is observable: S (spot price), K (strike), T (time to expiry), r (risk-free rate). Only σ (volatility) is not. Traders INVERT Black-Scholes — they observe the option price C and solve for σ. This 'implied volatility' IS the market's expectation of future risk. The VIX index IS this inversion: it's the implied volatility of S&P 500 options. When VIX spikes (2008, 2020, 2022), the market is telling you it expects turbulence. Black-Scholes isn't just a pricing formula — it's a BELIEF EXTRACTOR."})}),(0,i.jsx)(A.P,{title:"The ATM approximation C ≈ σ\xb7S\xb7√T/√(2π) is why volatility trades linearly",connectedTo:"ADR-051 (living-equation pages)",children:(0,i.jsx)("p",{children:"For at-the-money options (K=S), Black-Scholes simplifies to C ≈ σ\xb7S\xb7√(2T/π). This means the option price scales LINEARLY with σ. Double the volatility, double the option price. This is why VIX futures are tradable — each point of VIX corresponds to a dollar amount of option value. The approximation IS the product. The CBOE's VIX complex (futures, options, ETNs) is built on this one formula."})}),(0,i.jsx)(A.P,{title:"The price curve IS the proof — drag σ and watch it steepen",connectedTo:"ADR-051 (living-equation pages)",children:(0,i.jsx)("p",{children:"When you drag σ from 5% to 50% on this page, the blue call-price curve steepens from a flat $0 (low vol, far-OTM) to a tall arc ($100+ at ATM, high vol). The green dashed line (intrinsic value) doesn't change — but the GAP between intrinsic and price grows. That gap IS time value — the option's value from uncertainty. The visual output makes the relationship visceral: more volatility = more uncertainty = more time value. The brain sees the curve steepen and understands what σ means in a way the formula alone can't convey."})}),(0,i.jsx)(A.P,{title:"The Nobel Prize was for the PROOF, not the formula",connectedTo:"ADR-054 (Black-Scholes + MC + GNN for fintech)",children:(0,i.jsx)("p",{children:"Black and Scholes didn't invent their formula from scratch — they derived it from a hedging argument. Hold 1 option short + Δ shares long → the portfolio is riskless → it must earn r. This no-arbitrage argument (not the formula itself) is what won the 1997 Nobel Prize. The formula is the SOLUTION to the no-arbitrage PDE. The insight is that no-arbitrage PRICES the option — the market's structure, not the formula, is what determines the price. This is why Black-Scholes holds across domains: no-arbitrage is a structural constraint, not a model assumption."})})]}),(0,i.jsx)(p.a,{topics:[{id:"fintech",reason:"Fintech — QuantLib + Black-Scholes in production"},{id:"elegant-code",reason:"Elegant Code — the Black-Scholes card (cross-disciplinary)"},{id:"living-gbm",reason:"Living GBM — Black-Scholes derives from GBM (cousin)"},{id:"living-monte-carlo",reason:"Living Monte Carlo — alternative pricing via simulation (cousin)"}]}),(0,i.jsx)(c.B,{pageId:"living-black-scholes"}),(0,i.jsx)(n.T,{relatedPages:[{id:"connections",reason:"Trace this topic's connections across the platform's math graph"},{id:"fintech",reason:"Fintech — QuantLib + Black-Scholes in production"},{id:"elegant-code",reason:"Elegant Code — the Black-Scholes card (cross-disciplinary)"}]}),(0,i.jsxs)("div",{className:"flex flex-wrap gap-2",children:[(0,i.jsx)(s(),{href:(0,u.ZJ)("elegant-code"),className:"text-sm text-primary hover:underline",children:"→ Elegant Code (Black-Scholes card)"}),(0,i.jsx)("span",{className:"text-muted-foreground",children:"\xb7"}),(0,i.jsx)(s(),{href:(0,u.ZJ)("fintech"),className:"text-sm text-primary hover:underline",children:"→ Fintech (production)"}),(0,i.jsx)("span",{className:"text-muted-foreground",children:"\xb7"}),(0,i.jsx)(s(),{href:(0,u.ZJ)("living-gbm"),className:"text-sm text-primary hover:underline",children:"→ Living GBM (cousin)"})]})]})}}},e=>{e.O(0,[6919,8500,9430,3493,9760,7591,6012,9237,4843,9620,6722,5404,9275,2194,7486,8441,3794,7358],()=>e(e.s=38760)),_N_E=e.O()}]);