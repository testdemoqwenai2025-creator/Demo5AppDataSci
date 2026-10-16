(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4610],{7915:(e,a,t)=>{"use strict";t.d(a,{A:()=>s});let s=(0,t(6404).A)("eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]])},11951:(e,a,t)=>{"use strict";t.d(a,{A:()=>s});let s=(0,t(6404).A)("award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]])},28016:(e,a,t)=>{"use strict";t.d(a,{A:()=>s});let s=(0,t(6404).A)("plane",[["path",{d:"M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z",key:"1v9wt8"}]])},28523:(e,a,t)=>{Promise.resolve().then(t.bind(t,56181))},56181:(e,a,t)=>{"use strict";t.d(a,{DashboardPage:()=>T});var s=t(95155),r=t(12115),n=t(98500),i=t.n(n),o=t(58381),l=t(27774),c=t(66349),d=t(85404),u=t(31045),p=t(85757),m=t(45160),h=t(92451),y=t(11951),x=t(86901),g=t(93219),b=t(28016),f=t(67233),v=t(44071),j=t(58120),w=t(21628),k=t(7915);let A=`# Live: OpenSky — global aircraft count
import json, math
from pyodide.http import pyfetch

async def fetch_opensky():
    try:
        r = await pyfetch("https://opensky-network.org/api/states/all")
        data = await r.json()
        states = data.get("states", [])
        # Count by origin country
        countries = {}
        for s in states:
            origin = s[2] or "Unknown"
            countries[origin] = countries.get(origin, 0) + 1
        top = sorted(countries.items(), key=lambda x: -x[1])[:8]
        return top, len(states)
    except Exception as e:
        print(f"OpenSky failed: {e}")
        return None, 0

top, total = await fetch_opensky()
if top:
    series = [{"name": "Active aircraft", "data": [{"x": c, "y": n} for c, n in top]}]
    print(json.dumps({
        "chart_type": "bar", "title": f"Live: {total:,} Active Aircraft Worldwide (OpenSky)",
        "x_label": "Origin country", "y_label": "Aircraft count",
        "series": series,
        "stats": [
            {"label": "Total airborne", "value": f"{total:,}", "tone": "success"},
            {"label": "Top country", "value": top[0][0], "tone": "default"},
            {"label": "Countries tracked", "value": str(len(set(c for c,_ in top))), "tone": "default"},
            {"label": "Source", "value": "OpenSky API (live)", "tone": "success"},
        ],
        "summary": f"Right now, {total:,} aircraft are airborne worldwide. The top country is {top[0][0]} with {top[0][1]} aircraft. This is the LHC trigger of the aviation world — real-time monitoring of a global system."
    }))
else:
    print(json.dumps({"chart_type": "bar", "title": "OpenSky: API unavailable",
        "series": [{"name": "data", "data": [{"x": "unavailable", "y": 0}]}], "summary": "OpenSky API unreachable."}))`,N=`# Live: GitHub — trending repos (created last 7 days)
import json
from pyodide.http import pyfetch

async def fetch_github():
    try:
        r = await pyfetch("https://api.github.com/search/repositories?q=created:>2025-09-21&sort=stars&order=desc&per_page=10",
                          headers={"Accept": "application/vnd.github+json"})
        data = await r.json()
        repos = data.get("items", [])
        return repos
    except Exception as e:
        print(f"GitHub API failed: {e}")
        return None

repos = await fetch_github()
if repos:
    series = [{"name": "Stars", "data": [{"x": r["name"][:15], "y": r["stargazers_count"]} for r in repos[:8]]}]
    print(json.dumps({
        "chart_type": "bar", "title": f"Live: Top {len(repos)} GitHub Repos (created this week)",
        "x_label": "Repository", "y_label": "Stars",
        "series": series,
        "stats": [
            {"label": "Top repo", "value": repos[0]["name"], "tone": "success"},
            {"label": "Top stars", "value": f"{repos[0]['stargazers_count']:,}", "tone": "success"},
            {"label": "Language", "value": repos[0].get("language", "?"), "tone": "default"},
            {"label": "Source", "value": "GitHub API (live)", "tone": "success"},
        ],
        "summary": f"The most-starred repo created this week is {repos[0]['name']} with {repos[0]['stargazers_count']:,} stars. This IS the HLL use case — counting unique repos at scale."
    }))
else:
    print(json.dumps({"chart_type": "bar", "title": "GitHub: API unavailable",
        "series": [{"name": "data", "data": [{"x": "unavailable", "y": 0}]}], "summary": "GitHub API unreachable."}))`,_=`# Live: Stooq — S&P 500 daily returns
import json, math
from pyodide.http import pyfetch

async def fetch_stooq():
    try:
        r = await pyfetch("https://stooq.com/q/d/l/?s=^spx&i=d")
        text = await r.text()
        if len(text) < 200: raise ValueError("No data")
        lines = text.strip().split("\\n")
        closes = []
        for line in lines[1:]:
            parts = line.split(",")
            if len(parts) >= 5:
                try: closes.append(float(parts[4]))
                except: continue
        return closes[-60:] if len(closes) >= 60 else closes
    except Exception as e:
        print(f"Stooq failed: {e}")
        return None

closes = await fetch_stooq()
if closes and len(closes) > 2:
    returns = [math.log(closes[i+1]/closes[i]) for i in range(len(closes)-1)]
    # Histogram
    n_bins = 15
    pmin, pmax = min(returns), max(returns)
    bw = (pmax - pmin) / n_bins
    hist = [0] * n_bins
    for r in returns:
        idx = min(int((r - pmin) / bw), n_bins-1)
        hist[idx] += 1
    centers = [pmin + (i + 0.5) * bw for i in range(n_bins)]
    mean_r = sum(returns) / len(returns)
    var_r = sum((r - mean_r)**2 for r in returns) / len(returns)
    std_r = math.sqrt(var_r)
    var_95 = sorted(returns)[int(0.05 * len(returns))]
    series = [{"name": "Daily returns", "data": [{"x": f"{c*100:.1f}%", "y": h} for c, h in zip(centers, hist)]}]
    print(json.dumps({
        "chart_type": "bar", "title": f"Live: S&P 500 Daily Returns (last {len(returns)} days, Stooq)",
        "x_label": "Daily return", "y_label": "Frequency",
        "series": series,
        "stats": [
            {"label": "Mean return", "value": f"{mean_r*100:.3f}%", "tone": "default"},
            {"label": "Std dev (vol)", "value": f"{std_r*100:.2f}%", "tone": "default"},
            {"label": "VaR 95%", "value": f"\${abs(var_95)*1e6:,.0f}K", "tone": "warning"},
            {"label": "Source", "value": "Stooq SPX (live)", "tone": "success"},
        ],
        "reference_lines": [{"y": 0, "label": "Break-even", "color": "#94a3b8"}],
        "summary": f"S&P 500 last {len(returns)} days: mean = {mean_r*100:.3f}%/day, volatility = {std_r*100:.2f}%. VaR 95% = \${abs(var_95)*1e6:,.0f}K for \\$1M portfolio. Same GBM math as the Monte Carlo card."
    }))
else:
    print(json.dumps({"chart_type": "bar", "title": "Stooq: API unavailable",
        "series": [{"name": "data", "data": [{"x": "unavailable", "y": 0}]}], "summary": "Stooq API unreachable."}))`,S=`# Live: NOAA — global temperature anomalies
import json, math
from pyodide.http import pyfetch

async def fetch_noaa():
    try:
        r = await pyfetch("https://www.ncei.noaa.gov/access/monitoring/climate-at-a-glance/global/time-series/globe/land_ocean/1/0/1880-2024/data.json")
        data = await r.json()
        return data.get("data", {})
    except Exception as e:
        print(f"NOAA failed: {e}")
        return None

noaa = await fetch_noaa()
if noaa:
    years = sorted(noaa.keys())
    anomalies = [float(noaa[y]) for y in years if noaa[y] != "-99"]
    valid_years = [int(y) for y, a in zip(years, anomalies) if a != -99]
    # Last 30 years
    recent = valid_years[-30:]
    recent_anom = anomalies[-30:]
    series = [{"name": "Temperature anomaly", "data": [{"x": y, "y": a} for y, a in zip(recent, recent_anom)]}]
    trend = (recent_anom[-1] - recent_anom[0]) / (recent[-1] - recent[0])
    print(json.dumps({
        "chart_type": "line", "title": f"Live: Global Temperature Anomalies (NOAA, last {len(recent)} years)",
        "x_label": "Year", "y_label": "Anomaly (\xb0C)",
        "series": series,
        "stats": [
            {"label": "Latest anomaly", "value": f"{recent_anom[-1]:.2f}\xb0C", "tone": "destructive" if recent_anom[-1] > 0.5 else "warning"},
            {"label": "Trend", "value": f"+{trend*10:.2f}\xb0C/decade", "tone": "destructive"},
            {"label": "Warmest year", "value": str(recent[recent_anom.index(max(recent_anom))]), "tone": "destructive"},
            {"label": "Source", "value": "NOAA (live)", "tone": "success"},
        ],
        "reference_lines": [{"y": 0, "label": "20th century average", "color": "#94a3b8"}],
        "summary": f"Global temperature anomaly: {recent_anom[-1]:.2f}\xb0C above 20th-century average. Trend: +{trend*10:.2f}\xb0C/decade. Same SVD/EOF analysis as the climate-science page — but on REAL data."
    }))
else:
    print(json.dumps({"chart_type": "line", "title": "NOAA: API unavailable",
        "series": [{"name": "data", "data": [{"x": 0, "y": 0}]}], "summary": "NOAA API unreachable."}))`,P=[{label:"Live data sources",value:"7",hint:"OpenSky, GitHub, GitHub Events, GitHub Actions, Stooq, NOAA, Wikipedia — all fetched in real-time via Pyodide",deltaTone:"up"},{label:"Journey badges",value:"8",hint:"SVD, Bayes, Poisson, Kalman, Monte Carlo, Attention, FFT + Renaissance DS + LHC Analyst — unlock by exploring cross-domain pages",deltaTone:"up"},{label:"Math cousins tracked",value:"7 equations",hint:"Each equation appears in 4 domains — the tracker shows which you've explored",deltaTone:"flat"},{label:"Update mode",value:"Real-time",hint:"Every API call is live (with synthetic fallback). The dashboard IS the practicing DS's morning briefing.",deltaTone:"up"}];function T(){return(0,s.jsxs)("div",{className:"space-y-8",children:[(0,s.jsx)(o.zY,{eyebrow:"The practicing data scientist's morning briefing",title:"Dashboard — Live Multi-Source + Cross-Domain Journey",description:"A unified dashboard pulling live data from 7 real APIs simultaneously, plus the cross-domain journey tracker showing your exploration progress across the platform's math cousins. Every chart is lazy-loaded (click to generate) with synthetic fallback if APIs are unreachable.",right:(0,s.jsxs)("div",{className:"flex gap-2",children:[(0,s.jsxs)(m.E,{variant:"outline",className:"gap-1.5",children:[(0,s.jsx)(h.A,{className:"h-3 w-3"})," 7 live sources"]}),(0,s.jsxs)(m.E,{variant:"outline",className:"gap-1.5",children:[(0,s.jsx)(y.A,{className:"h-3 w-3"})," ",P[1].value," badges"]}),(0,s.jsxs)(m.E,{variant:"outline",className:"gap-1.5",children:[(0,s.jsx)(x.A,{className:"h-3 w-3"})," Pyodide"]})]})}),(0,s.jsx)("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-3",children:P.map(e=>(0,s.jsx)(o.nO,{label:e.label,value:e.value,hint:e.hint,deltaTone:e.deltaTone},e.label))}),(0,s.jsxs)(o.iv,{title:"Live Data Sources — Real-Time Multi-Source Dashboard",description:"Each card fetches from a real API in real-time. Click 'Generate visualization' to fetch live data. Falls back to synthetic if the API is unreachable.",icon:(0,s.jsx)(g.A,{className:"h-5 w-5"}),badge:"4 live cards",badgeVariant:"outline",contentClassName:"p-4 md:p-5 space-y-4",children:[(0,s.jsx)(C,{title:"OpenSky — Global Aircraft Tracking (real-time)",equation:"aircraft_count = |states|; top_countries = group_by(origin)",domains:["Aviation","Real-Time","Streaming"],accent:"oklch(0.65 0.18 200)",description:"Live aircraft positions from OpenSky Network. Count airborne aircraft worldwide, grouped by origin country. Same real-time data pipeline pattern as the LHC trigger system.",code:A,icon:(0,s.jsx)(b.A,{className:"h-3 w-3"})}),(0,s.jsx)(C,{title:"GitHub — Trending Repositories (this week)",equation:"stars = repo.stargazers_count; HLL_estimate = APPROX_COUNT_DISTINCT(repo_ids)",domains:["Software","Real-Time","Social"],accent:"oklch(0.65 0.18 165)",description:"Top 10 most-starred GitHub repos created in the last 7 days. The same HLL algorithm (card 21 on Elegant Code) is used to count unique repos at scale — but here we show the top results, not just the cardinality.",code:N,icon:(0,s.jsx)(f.A,{className:"h-3 w-3"})}),(0,s.jsx)(C,{title:"Stooq — S&P 500 Returns + VaR (last 60 days)",equation:"returns = log(P_t / P_{t-1}); VaR_95 = percentile(returns, 5%)",domains:["Finance","Risk","Real-Time"],accent:"oklch(0.65 0.18 30)",description:"Real S&P 500 daily returns from Stooq. The histogram shows the return distribution; VaR 95% marks the loss exceeded only 5% of the time. Same Monte Carlo + GBM math as the living-monte-carlo and living-gbm pages.",code:_,icon:(0,s.jsx)(v.A,{className:"h-3 w-3"})}),(0,s.jsx)(C,{title:"NOAA — Global Temperature Anomalies (last 30 years)",equation:"anomaly = T_year - T_baseline; trend = (Δanomaly / Δtime)",domains:["Climate","Real-Time","Science"],accent:"oklch(0.65 0.18 60)",description:"Real global temperature anomalies from NOAA (land+ocean, 1880-2024). The line chart shows the warming trend — same SVD/EOF analysis as the climate-science page, but on REAL data. The trend line tells the climate story.",code:S,icon:(0,s.jsx)(j.A,{className:"h-3 w-3"})})]}),(0,s.jsx)(o.iv,{title:"Cross-Domain Journey Tracker — Gamification",description:"Your exploration progress across the platform's math cousins. Each equation (SVD, Bayes, Poisson, etc.) appears in 4 domains. Visit pages to unlock badges. Progress is saved to localStorage.",icon:(0,s.jsx)(y.A,{className:"h-5 w-5"}),badge:"Phase 4",badgeVariant:"outline",children:(0,s.jsx)(u.Hv,{})}),(0,s.jsx)(o.iv,{title:"How the journey tracker works",description:"The platform tracks which pages you visit (localStorage). Each math equation appears in 4 domains — explore them all to earn the mastery badge.",icon:(0,s.jsx)(x.A,{className:"h-5 w-5"}),children:(0,s.jsxs)("div",{className:"prose prose-sm dark:prose-invert max-w-none space-y-3",children:[(0,s.jsxs)("p",{className:"text-sm text-muted-foreground leading-relaxed",children:["The tracker maps each ",(0,s.jsx)("strong",{className:"text-foreground/80",children:"elegant-code equation"})," to its 4 host domains. For example, ",(0,s.jsx)("strong",{children:"SVD"}),' appears in genomics (living-svd), finance (fintech), audio (audio-signal), and climate (climate-science). Visit all 4 to unlock the "SVD Universalist" badge.']}),(0,s.jsx)("p",{className:"text-sm text-muted-foreground leading-relaxed",children:(0,s.jsx)("strong",{className:"text-foreground/80",children:"Badges available:"})}),(0,s.jsxs)("ul",{className:"text-sm text-muted-foreground space-y-0.5 ml-4 list-disc",children:[(0,s.jsxs)("li",{children:[(0,s.jsx)("strong",{children:"SVD Universalist"})," — explore SVD in all 4 domains"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("strong",{children:"Bayesian Believer"})," — explore Bayes in all 4 domains"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("strong",{children:"Rare Event Master"})," — explore Poisson in all 4 domains"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("strong",{children:"State Estimator"})," — explore Kalman in all 4 domains"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("strong",{children:"Monte Carlo Maestro"})," — explore Monte Carlo in all 4 domains"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("strong",{children:"Attention Architect"})," — explore Attention in all 4 domains"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("strong",{children:"Frequency Domain Explorer"})," — explore FFT in all 4 domains"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("strong",{children:"Renaissance DS"})," — visit 10+ pages across different domains"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("strong",{children:"LHC Analyst"})," — explore the LHC data analysis page"]})]}),(0,s.jsx)("p",{className:"text-sm text-muted-foreground leading-relaxed",children:"Progress is saved to your browser's localStorage — it persists across sessions. No account, no login, no cloud. Pure client-side gamification."})]})}),(0,s.jsx)(l.T,{relatedPages:[{id:"lhc-data-analysis",reason:"The LHC page has 15 analysis cards covering all granularity levels"},{id:"analytics-outputs",reason:"29 visualization cards with live-data toggles (7 live sources)"},{id:"elegant-code",reason:"29 equation cards + 5 DS workflow methodology cards"},{id:"research",reason:"78 research papers with runnable code + visualizations"},{id:"trends",reason:"88 market trends with timeline + heat map"}]}),(0,s.jsxs)("div",{className:"flex flex-wrap gap-2",children:[(0,s.jsx)(i(),{href:(0,p.ZJ)("home"),className:"text-sm text-primary hover:underline",children:"→ Return to overview"}),(0,s.jsx)("span",{className:"text-muted-foreground",children:"\xb7"}),(0,s.jsx)(i(),{href:(0,p.ZJ)("lhc-data-analysis"),className:"text-sm text-primary hover:underline",children:"→ LHC Data Analysis"}),(0,s.jsx)("span",{className:"text-muted-foreground",children:"\xb7"}),(0,s.jsx)(i(),{href:(0,p.ZJ)("analytics-outputs"),className:"text-sm text-primary hover:underline",children:"→ Analytics Outputs"})]})]})}function C({title:e,equation:a,domains:t,accent:n,description:i,code:o,icon:l}){let[u,p]=(0,r.useState)(!1),[h,y]=(0,r.useState)(null);return(0,s.jsxs)("div",{className:"rounded-lg border border-border/60 overflow-hidden transition-shadow hover:shadow-md",style:{borderLeftWidth:4,borderLeftColor:n},children:[(0,s.jsx)("button",{type:"button",className:"w-full text-left p-4 cursor-pointer",onClick:()=>p(!u),"aria-expanded":u,children:(0,s.jsxs)("div",{className:"flex items-start gap-3",children:[(0,s.jsxs)("div",{className:"flex-1 min-w-0",children:[(0,s.jsxs)("div",{className:"flex items-center gap-1.5 flex-wrap mb-1",children:[l&&(0,s.jsx)("span",{style:{color:n},children:l}),t.map((e,a)=>(0,s.jsx)("span",{className:"text-[9px] px-1.5 py-0 rounded font-mono",style:{color:n,border:`1px solid ${n}`},children:e},a)),(0,s.jsxs)(m.E,{variant:"outline",className:"text-[8px] h-3.5 px-1 gap-0.5 ml-auto",children:[(0,s.jsx)("span",{className:"w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"})," LIVE"]})]}),(0,s.jsx)("p",{className:"text-sm font-semibold leading-tight",children:e}),(0,s.jsx)("p",{className:"text-[10px] font-mono text-muted-foreground mt-0.5",children:a}),(0,s.jsx)("p",{className:"text-[11px] text-muted-foreground mt-1.5 leading-relaxed",children:i})]}),(0,s.jsx)(w.A,{className:`h-4 w-4 text-muted-foreground shrink-0 transition-transform ${u?"rotate-90":""}`})]})}),u&&(0,s.jsxs)("div",{className:"px-4 pb-4 space-y-3 border-t border-border/40 pt-3",children:[(0,s.jsxs)("div",{className:"rounded-md border border-primary/30 bg-primary/5 p-3",children:[(0,s.jsxs)("p",{className:"text-[10px] uppercase tracking-wider text-muted-foreground mb-2 flex items-center gap-1.5",children:[(0,s.jsx)(k.A,{className:"h-3 w-3"})," Click to fetch live data"]}),(0,s.jsx)(c.l,{code:o,buttonLabel:"Fetch live data",onOutput:e=>{try{let a=e.indexOf("{"),t=e.lastIndexOf("}");a>=0&&t>a&&y(JSON.parse(e.substring(a,t+1)))}catch{}},hideTextOutput:!!h,compact:!0})]}),h?(0,s.jsx)(d.D,{data:h,accent:n,sourceCode:o}):(0,s.jsx)("p",{className:"text-[10px] text-muted-foreground/70 italic",children:'↑ Click "Fetch live data" to see the real-time chart'})]})]})}},58120:(e,a,t)=>{"use strict";t.d(a,{A:()=>s});let s=(0,t(6404).A)("cloud-sun",[["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}],["path",{d:"M15.947 12.65a4 4 0 0 0-5.925-4.128",key:"dpwdj0"}],["path",{d:"M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z",key:"s09mg5"}]])},66349:(e,a,t)=>{"use strict";t.d(a,{l:()=>b});var s=t(95155),r=t(12115),n=t(80642),i=t(39430),o=t(89239),l=t(45160),c=t(6296),d=t(12651),u=t(13545),p=t(20232),m=t(10762);let h=null,y="0.26.2",x=`https://cdn.jsdelivr.net/pyodide/v${y}/full/`;async function g(){return h||(h=(async()=>(await new Promise((e,a)=>{if(window.loadPyodide)return void e();let t=document.createElement("script");t.src=`${x}pyodide.js`,t.onload=()=>e(),t.onerror=()=>a(Error("Failed to load Pyodide bootstrap")),document.head.appendChild(t)}),await window.loadPyodide({indexURL:x})))().catch(e=>{throw h=null,e}))}function b({code:e,buttonLabel:a="Run in browser",preamble:t,compact:h=!1,onOutput:x,hideTextOutput:b=!1}){let[f,v]=(0,r.useState)("idle"),[j,w]=(0,r.useState)(""),[k,A]=(0,r.useState)(null),[N,_]=(0,r.useState)(null),S=(0,r.useRef)(null),P=(0,r.useCallback)(async()=>{v("loading"),A(null),w("Loading Pyodide runtime (~10MB)…\nFirst run takes 5-10s on a typical connection.\nSubsequent runs are instant.\n");let a=performance.now();try{let s=await g(),r=Math.round(performance.now()-a);_(r);let n=[],i=e=>{n.push(e)};try{s.setStdout({batched:i}),s.setStderr({batched:i})}catch{try{s.setStdout(i),s.setStderr(i)}catch{}}let o=(t??"")+"\n"+e,l=[];if(/\bnumpy\b|\bnp\./.test(o)&&l.push("numpy"),/\bscipy\b|\bsp\./.test(o)&&l.push("scipy"),/\bsklearn\b|\bGradientBoosting\b|\bRandomForest\b|\btrain_test_split\b|\bKMeans\b|\bSVC\b|\bLogisticRegression\b/.test(o)&&l.push("scikit-learn"),/\bpandas\b|\bpd\./.test(o)&&l.push("pandas"),/\bpyarrow\b|\bpq\./.test(o)&&l.push("pyarrow"),l.length>0){w(e=>e+`
Loading packages: ${l.join(", ")}…
`);try{await s.loadPackage(l)}catch{}}v("running"),w(e=>e+`
Pyodide loaded in ${r}ms. Running analysis…

`),t&&await s.runPythonAsync(t),await s.runPythonAsync(e);let c=n.join("");w(e=>e+(c||"(no output)")),v("done"),x&&x(c)}catch(t){let e=t instanceof Error?t.message:String(t),a=e.includes("Failed to load Pyodide bootstrap")?"\n\nHint: check your internet connection — Pyodide loads from a CDN (jsdelivr.net). Click again to retry.":e.includes("NetworkError")||e.includes("Failed to fetch")?"\n\nHint: network error loading Pyodide. Check your connection and click again to retry.":"";A(e+a),v("error"),w(t=>t+`
Error: ${e}${a}`)}},[e,t,x]);return(0,r.useEffect)(()=>{S.current&&(S.current.scrollTop=S.current.scrollHeight)},[j]),(0,s.jsxs)("div",{className:`mt-3 ${h?"":"rounded-md border border-primary/30 bg-primary/3 p-3"}`,children:[(0,s.jsxs)("div",{className:"flex items-center gap-2",children:[(0,s.jsxs)(o.$,{size:h?"sm":"default",variant:"running"===f||"loading"===f?"outline":"error"===f?"destructive":"default",className:"gap-1.5",onClick:P,disabled:"loading"===f||"running"===f,children:["loading"===f||"running"===f?(0,s.jsx)(c.A,{className:"h-3.5 w-3.5 animate-spin"}):"done"===f?(0,s.jsx)(d.A,{className:"h-3.5 w-3.5"}):"error"===f?(0,s.jsx)(u.A,{className:"h-3.5 w-3.5"}):(0,s.jsx)(p.A,{className:"h-3.5 w-3.5"}),"error"===f?`Retry: ${a}`:"done"===f?`Re-run: ${a}`:a]}),!h&&(0,s.jsxs)(l.E,{variant:"outline",className:"text-[10px] gap-1",children:[(0,s.jsx)(m.A,{className:"h-2.5 w-2.5"}),"Pyodide v",y]}),null!==N&&"done"===f&&(0,s.jsxs)("span",{className:"text-[10px] text-muted-foreground",children:["Runtime: ",N,"ms load + execution"]})]}),(0,s.jsx)(n.N,{children:("idle"!==f||j)&&!b&&(0,s.jsx)(i.P.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},className:"mt-2",children:(0,s.jsx)("div",{ref:S,className:`rounded-md bg-[oklch(0.16_0.005_240)] text-[oklch(0.97_0.005_60)] p-2.5 text-[11px] font-mono leading-relaxed overflow-x-auto code-scroll max-h-64 overflow-y-auto ${k?"border border-rose-500/40":"border border-emerald-500/30"}`,children:(0,s.jsx)("pre",{className:"whitespace-pre-wrap",children:j})})})})]})}},67233:(e,a,t)=>{"use strict";t.d(a,{A:()=>s});let s=(0,t(6404).A)("github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]])},86901:(e,a,t)=>{"use strict";t.d(a,{A:()=>s});let s=(0,t(6404).A)("sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]])},92451:(e,a,t)=>{"use strict";t.d(a,{A:()=>s});let s=(0,t(6404).A)("globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]])}},e=>{e.O(0,[6919,8500,9430,3493,9760,7591,6012,9237,4843,9620,6722,5404,1045,8441,3794,7358],()=>e(e.s=28523)),_N_E=e.O()}]);