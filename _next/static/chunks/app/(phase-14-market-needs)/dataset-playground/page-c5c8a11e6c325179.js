(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4479],{7915:(e,a,t)=>{"use strict";t.d(a,{A:()=>s});let s=(0,t(6404).A)("eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]])},14180:(e,a,t)=>{"use strict";t.d(a,{A:()=>s});let s=(0,t(6404).A)("git-compare",[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M13 6h3a2 2 0 0 1 2 2v7",key:"1yeb86"}],["path",{d:"M11 18H8a2 2 0 0 1-2-2V9",key:"19pyzm"}]])},42763:(e,a,t)=>{"use strict";t.d(a,{Cf:()=>m,Es:()=>p,L3:()=>f,c7:()=>u,lG:()=>o,rr:()=>h,zM:()=>l});var s=t(95155);t(12115);var r=t(49115),n=t(33210),i=t(40980);function o({...e}){return(0,s.jsx)(r.bL,{"data-slot":"dialog",...e})}function l({...e}){return(0,s.jsx)(r.l9,{"data-slot":"dialog-trigger",...e})}function d({...e}){return(0,s.jsx)(r.ZL,{"data-slot":"dialog-portal",...e})}function c({className:e,...a}){return(0,s.jsx)(r.hJ,{"data-slot":"dialog-overlay",className:(0,i.cn)("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",e),...a})}function m({className:e,children:a,showCloseButton:t=!0,...o}){return(0,s.jsxs)(d,{"data-slot":"dialog-portal",children:[(0,s.jsx)(c,{}),(0,s.jsxs)(r.UC,{"data-slot":"dialog-content",className:(0,i.cn)("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",e),...o,children:[a,t&&(0,s.jsxs)(r.bm,{"data-slot":"dialog-close",className:"ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",children:[(0,s.jsx)(n.A,{}),(0,s.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})}function u({className:e,...a}){return(0,s.jsx)("div",{"data-slot":"dialog-header",className:(0,i.cn)("flex flex-col gap-2 text-center sm:text-left",e),...a})}function p({className:e,...a}){return(0,s.jsx)("div",{"data-slot":"dialog-footer",className:(0,i.cn)("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",e),...a})}function f({className:e,...a}){return(0,s.jsx)(r.hE,{"data-slot":"dialog-title",className:(0,i.cn)("text-lg leading-none font-semibold",e),...a})}function h({className:e,...a}){return(0,s.jsx)(r.VY,{"data-slot":"dialog-description",className:(0,i.cn)("text-muted-foreground text-sm",e),...a})}},56842:(e,a,t)=>{"use strict";t.d(a,{A:()=>s});let s=(0,t(6404).A)("arrow-down",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]])},65091:(e,a,t)=>{"use strict";function s(e){let a=e.trim(),t=a.indexOf("(");if(-1===t||!a.endsWith(")"))throw Error(`Expected "func(args)" — got "${a}"`);let s=a.slice(0,t).trim();if(!/^[a-z_][a-z0-9_]*$/i.test(s))throw Error(`Invalid function name "${s}"`);let r=function(e){let a=[],t=0,s=0;for(let r=0;r<e.length;r++){let n=e[r];"["===n||"("===n?t++:"]"===n||")"===n?t--:","===n&&0===t&&(a.push(e.slice(s,r)),s=r+1)}return a.push(e.slice(s)),a.filter(e=>""!==e.trim())}(a.slice(t+1,-1)),n=[],i={};for(let e of r){let a=/^[a-z_][a-z0-9_]*\s*=/.test(e.trim()),t=function e(a,t){let s=a.trim();if(t){let a=s.indexOf("=");if(-1===a)throw Error(`Expected name=value in "${s}"`);return{name:s.slice(0,a).trim(),value:e(s.slice(a+1).trim(),!1).value}}if(s.startsWith("[")&&s.endsWith("]")){let e=s.slice(1,-1).trim();if(""===e)return{value:[]};let a=e.split(",").map(e=>e.trim()),t=[];for(let e of a)/^-?\d+(\.\d+)?$/.test(e)?t.push(parseFloat(e)):"true"===e||"false"===e?t.push("true"===e):e.startsWith('"')||e.startsWith("'")?t.push(e.slice(1,-1)):t.push(e);return{value:t}}return/^-?\d+(\.\d+)?$/.test(s)?{value:parseFloat(s)}:"true"===s?{value:!0}:"false"===s?{value:!1}:s.startsWith('"')&&s.endsWith('"')||s.startsWith("'")&&s.endsWith("'")?{value:s.slice(1,-1)}:{value:s}}(e,a);if(a&&t.name)i[t.name]=t.value;else if(a)throw Error(`Could not parse argument "${e}"`);else n.push(t.value)}return{func:s,positional:n,named:i,raw:a}}function r(e,a,t){let s=e[a];if("number"==typeof s)return s;if("string"==typeof s){let e=parseFloat(s);return Number.isNaN(e)?t:e}return t}function n(e,a,t){let s=e[a];return"string"==typeof s?s:"number"==typeof s?String(s):t}t.d(a,{Mf:()=>s,i:()=>r,oJ:()=>n})},65576:(e,a,t)=>{"use strict";t.d(a,{A:()=>s});let s=(0,t(6404).A)("cpu",[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]])},66088:(e,a,t)=>{"use strict";t.d(a,{A:()=>s});let s=(0,t(6404).A)("chevron-down",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]])},67233:(e,a,t)=>{"use strict";t.d(a,{A:()=>s});let s=(0,t(6404).A)("github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]])},71816:(e,a,t)=>{"use strict";t.d(a,{E:()=>l});var s=t(95155),r=t(39430),n=t(77784),i=t(6296),o=t(66088);function l({children:e,title:a,badge:t,height:l=520}){let{ref:d,inView:c}=(0,n.W)();return(0,s.jsx)("div",{ref:d,style:{minHeight:c?void 0:l},className:"relative",children:c?e:(0,s.jsxs)(r.P.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.4},style:{height:l},className:"rounded-xl border border-dashed border-zinc-200/10 bg-zinc-900/20 flex flex-col items-center justify-center gap-2 text-zinc-600",children:[(0,s.jsxs)("div",{className:"flex items-center gap-2",children:[(0,s.jsx)(i.A,{className:"h-3.5 w-3.5 animate-spin text-zinc-500"}),(0,s.jsx)("span",{className:"text-xs uppercase tracking-wider",children:"Pending lazy evaluation"}),t&&(0,s.jsx)("span",{className:"text-[10px] px-1.5 py-0.5 rounded-full bg-zinc-500/10 border border-zinc-500/20",children:t})]}),(0,s.jsx)("p",{className:"text-sm text-zinc-500",children:a}),(0,s.jsx)(o.A,{className:"h-4 w-4 text-zinc-600 animate-bounce mt-1"})]})})}},77784:(e,a,t)=>{"use strict";t.d(a,{W:()=>n});var s=t(12115);let r="u">typeof IntersectionObserver;function n(e){let a=(0,s.useRef)(null),[t,n]=(0,s.useState)(!r);return(0,s.useEffect)(()=>{if(!r)return;let t=a.current;if(!t)return;let s=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n(!0),s.disconnect();break}},e??{rootMargin:"200px"});return s.observe(t),()=>s.disconnect()},[e]),{ref:a,inView:t}}},79444:(e,a,t)=>{"use strict";t.d(a,{Cg:()=>r,pH:()=>i});let s=null,r="0.26.2",n=`https://cdn.jsdelivr.net/pyodide/v${r}/full/`;async function i(){return s||(s=(async()=>{let e=window;return await new Promise((a,t)=>{if(e.loadPyodide)return void a();let s=document.createElement("script");s.src=`${n}pyodide.js`,s.onload=()=>a(),s.onerror=()=>t(Error("Failed to load Pyodide bootstrap")),document.head.appendChild(s)}),await e.loadPyodide({indexURL:n})})())}},86901:(e,a,t)=>{"use strict";t.d(a,{A:()=>s});let s=(0,t(6404).A)("sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]])},86932:(e,a,t)=>{Promise.resolve().then(t.bind(t,94256))},92906:(e,a,t)=>{"use strict";t.d(a,{j:()=>l});var s=t(12115),r=t(79444);let n=null,i=new Set;async function o(e=["numpy","scipy"]){n||(n=(0,r.pH)());let a=await n,t=e.filter(e=>!i.has(e));return t.length>0&&(await a.loadPackage(t),t.forEach(e=>i.add(e))),a}function l(e=["numpy","scipy"]){let[a,t]=(0,s.useState)("idle"),[r,n]=(0,s.useState)(null),[i,d]=(0,s.useState)(null),c=(0,s.useRef)(0);return{status:a,error:r,output:i,run:(0,s.useCallback)(async a=>{let s=++c.current;t("loading"),n(null);try{let r=await o(e),n="";if(r.setStdout({batched:e=>{n+=e+"\n"}}),r.setStderr({batched:e=>{}}),await r.runPythonAsync(a),s!==c.current)return;let i=n.trim().split("\n").filter(e=>e.trim().startsWith("{")||e.trim().startsWith("[")),l=i.length>0?i[i.length-1]:n.trim();d(l),t("ok")}catch(e){if(s!==c.current)return;n(e?.message??String(e)),t("error")}},[e]),reset:(0,s.useCallback)(()=>{c.current++,t("idle"),n(null),d(null)},[])}}},94256:(e,a,t)=>{"use strict";t.d(a,{default:()=>C});var s=t(95155),r=t(39430),n=t(86901),i=t(56842),o=t(8195),l=t(14180),d=t(53961),c=t(65576),m=t(67233),u=t(65091);let p=[{id:"iris",name:"Iris (Fisher 1936)",url:"https://raw.githubusercontent.com/mwaskom/seaborn-data/master/iris.csv",description:"150 irises \xd7 4 measurements (sepal/petal length & width) + species",rows:150,numericColumns:["sepal_length","sepal_width","petal_length","petal_width"],groupColumn:"species"},{id:"penguins",name:"Palmer Penguins",url:"https://raw.githubusercontent.com/mwaskom/seaborn-data/master/penguins.csv",description:"344 penguins \xd7 4 measurements (bill/culmen + flipper) + 3 species + sex",rows:344,numericColumns:["bill_length_mm","bill_depth_mm","flipper_length_mm","body_mass_g"],groupColumn:"species"},{id:"titanic",name:"Titanic passengers",url:"https://raw.githubusercontent.com/datasciencedojo/datasets/master/titanic.csv",description:"891 passengers \xd7 12 fields (age, fare, class, sex, survived, etc.)",rows:891,numericColumns:["Age","Fare","SibSp","Parch"],groupColumn:"Pclass"},{id:"boston-housing",name:"Boston Housing",url:"https://raw.githubusercontent.com/selva86/datasets/master/BostonHousing.csv",description:"506 suburbs \xd7 14 features (crime rate, rooms, age, median home value)",rows:506,numericColumns:["crim","zn","indus","nox","rm","age","dis","tax","ptratio","lstat","medv"],groupColumn:"chas"},{id:"wine",name:"Wine (UCI ML)",url:"https://raw.githubusercontent.com/plotly/datasets/master/wine_data.csv",description:"178 wines \xd7 13 chemical measurements + 3 cultivars (sklearn Wine)",rows:178,numericColumns:["Alcohol","Malic acid","Ash","Alcalinity of ash","Magnesium","Total phenols","Flavanoids","Nonflavanoid phenols","Proanthocyanins","Color intensity","Hue","OD280/OD315 of diluted wines","Proline"],groupColumn:"Class"}],f=[{id:"playground-dataset-histogram",title:"Distribution & Density on Real Data",badge:"Univariate",description:"Histogram + Gaussian KDE of a numeric column from a real public dataset. Pick a dataset, pick a column, change the bin count, and watch the distribution shape emerge from actual measurements — not synthetic data.",defaultDatasetId:"iris",defaultExpr:"histogram(dataset=iris, column=petal_length, bins=18)",mathToCode:[{symbol:"xᵢ",code:"df[col].dropna().tolist()",explanation:"values of the selected column"},{symbol:"n",code:"len(xs)",explanation:"sample count after dropping NaN"},{symbol:"bins",code:"np.histogram(xs, bins=N)",explanation:"partition range into N equal-width bins"},{symbol:"σᵢ (edges)",code:"edges[i], edges[i+1]",explanation:"boundaries of the i-th bin"},{symbol:"count_i",code:"hist[i]",explanation:"number of samples in bin i"},{symbol:"f̂(x)",code:"KDE: mean(exp(-0.5\xb7((v-xs)/bw)\xb2)) / (bw\xb7√2π)",explanation:"Gaussian kernel density estimate"},{symbol:"bw",code:"1.06\xb7σ\xb7n^(-1/5)",explanation:"Silverman's rule-of-thumb bandwidth"},{symbol:"μ",code:"np.mean(xs)",explanation:"sample mean"},{symbol:"σ",code:"np.std(xs, ddof=1)",explanation:"sample standard deviation (Bessel-corrected)"}],placeholder:"histogram(dataset=iris, column=petal_length, bins=18)",generateCode:(e,a)=>{let t=(0,u.oJ)(e.named,"column",a.numericColumns[0]),s=Math.max(2,Math.floor((0,u.i)(e.named,"bins",18))),r=(0,u.i)(e.named,"nrows",999999);return`# ============================================================
# Mathematical Expression → Code Mapping
# Each line below implements part of the math expression.
# Annotated with # ← <math symbol> showing the mapping.
# ============================================================

from pyodide.http import pyfetch
import pandas as pd, numpy as np, json
from io import StringIO

URL = "${a.url}"
resp = await pyfetch(URL)
csv = await resp.string()
df_full = pd.read_csv(StringIO(csv))
df = df_full.iloc[:${r}]  # lazy eval: only first segment
total_rows = len(df_full)
col = ${JSON.stringify(t)}
xs = df[col].dropna().tolist()
n = len(xs)
mean = float(np.mean(xs))
std = float(np.std(xs, ddof=1))
median = float(np.median(xs))
q1 = float(np.percentile(xs, 25))
q3 = float(np.percentile(xs, 75))
iqr = q3 - q1
hist, edges = np.histogram(xs, bins=${s})
mids = [(edges[i] + edges[i+1]) / 2 for i in range(len(edges) - 1)]
# KDE (Gaussian, Silverman bw)
bw = 1.06 * std * n ** (-1/5) if std > 0 else 1.0
lo, hi = min(xs), max(xs)
kde_x = np.linspace(lo, hi, 50)
kde_y = np.array([np.mean(np.exp(-0.5 * ((v - xs) / bw) ** 2)) for v in kde_x]) / (bw * np.sqrt(2 * np.pi))
print(json.dumps({
  "chart_type": "composed",
  "title": f"Histogram of {col} ({df.shape[0]} rows, bins=${s})",
  "series": [
    {"name": "count", "data": [{"x": float(m), "y": int(c)} for m, c in zip(mids, hist)]},
    {"name": "KDE", "data": [{"x": float(x), "y": float(y * n * (edges[1] - edges[0]))} for x, y in zip(kde_x, kde_y)]},
  ],
  "x_label": col,
  "y_label": "count",
  "stats": [
    {"label": "observed rows", "value: str(len(df))},
    {"label": "total rows", "value: str(total_rows)},
    {"label": "n (after dropna)", "value: str(n)},
    {"label": "mean", "value: f"{mean:.3f}"},
    {"label": "std", "value: f"{std:.3f}"},
    {"label": "median", "value: f"{median:.3f}"},
    {"label": "IQR", "value: f"{iqr:.3f}", "hint": f"Q1={q1:.2f} \xb7 Q3={q3:.2f}"},
    {"label": "bins", "value: str(${s})},
  ],
  "summary": f"Distribution of {col} from {n} {${JSON.stringify(a.id)}} samples (URL-fetched). Mean {mean:.3f}, std {std:.3f}. {" + ".join([f"Q1={q1:.2f}", f"median={median:.2f}", f"Q3={q3:.2f}"])}. {("Right-skewed" if mean > median else "Left-skewed" if mean < median else "Symmetric")} (mean vs median)."
}))`},parseOutput:e=>{let a=JSON.parse(e);return{chart:a,stats:(a.stats??[]).map(e=>({label:e.label,value:e.value,hint:e.hint})),summary:{text:a.summary??"Histogram computed.",caveat:"Bin choice via Sturges' rule (default) — small samples can be sensitive to bin count. Try bins=10 vs bins=30 to see the shape shift."}}}},{id:"playground-dataset-regression",title:"Linear Regression on Real Data",badge:"Bivariate",description:"Ordinary least-squares fit y = β₀ + β₁\xb7x on two numeric columns from a real dataset. Pearson r and R\xb2 show how much of the y-variance the linear model explains.",defaultDatasetId:"iris",defaultExpr:"regression(dataset=iris, x=sepal_length, y=petal_length)",mathToCode:[{symbol:"x, y",code:"df[[x_col, y_col]].dropna()",explanation:"two numeric columns from the dataset"},{symbol:"n",code:"len(x)",explanation:"number of (x,y) pairs"},{symbol:"x̄, ȳ",code:"np.mean(x), np.mean(y)",explanation:"sample means"},{symbol:"β₁ (slope)",code:"Σ(x-x̄)(y-ȳ) / Σ(x-x̄)\xb2",explanation:"OLS slope estimator"},{symbol:"β₀ (intercept)",code:"ȳ - β₁\xb7x̄",explanation:"OLS intercept estimator"},{symbol:"ŷ",code:"β₀ + β₁\xb7x",explanation:"predicted y values (fitted line)"},{symbol:"r",code:"np.corrcoef(x, y)[0,1]",explanation:"Pearson correlation coefficient"},{symbol:"R\xb2",code:"1 - SS_res/SS_tot",explanation:"coefficient of determination (variance explained)"}],placeholder:"regression(dataset=iris, x=sepal_length, y=petal_length)",generateCode:(e,a)=>{let t=(0,u.oJ)(e.named,"x",a.numericColumns[0]),s=(0,u.oJ)(e.named,"y",a.numericColumns[1]),r=(0,u.i)(e.named,"nrows",999999);return`# ============================================================
# Mathematical Expression → Code Mapping
# Each line below implements part of the math expression.
# Annotated with # ← <math symbol> showing the mapping.
# ============================================================

from pyodide.http import pyfetch
import pandas as pd, numpy as np, json
from io import StringIO

URL = "${a.url}"
resp = await pyfetch(URL)
csv = await resp.string()
df_full = pd.read_csv(StringIO(csv))
df = df_full.iloc[:${r}]  # lazy eval: only first segment
total_rows = len(df_full)
x_col = ${JSON.stringify(t)}
y_col = ${JSON.stringify(s)}
sub = df[[x_col, y_col]].dropna()
x = sub[x_col].tolist()
y = sub[y_col].tolist()
n = len(x)
x_mean = np.mean(x); y_mean = np.mean(y)
slope = float(np.sum((x - x_mean) * (y - y_mean)) / np.sum((x - x_mean) ** 2))
intercept = float(y_mean - slope * x_mean)
y_pred = [intercept + slope * xi for xi in x]
ss_res = float(np.sum((y - y_pred) ** 2))
ss_tot = float(np.sum((y - y_mean) ** 2))
r2 = 1 - ss_res / ss_tot if ss_tot > 0 else 0
r = float(np.corrcoef(x, y)[0, 1]) if n > 1 else 0
# line for chart
lo, hi = min(x), max(x)
line = [{"x": float(lo + (hi - lo) * i / 50), "y": float(intercept + slope * (lo + (hi - lo) * i / 50))} for i in range(51)]
print(json.dumps({
  "chart_type": "scatter",
  "title": f"{y_col} vs {x_col} (n={n})",
  "series": [
    {"name": "data", "data": [{"x": float(xi), "y": float(yi)} for xi, yi in zip(x, y)]},
    {"name": f"OLS y={intercept:.2f}+{slope:.2f}x", "data": line},
  ],
  "x_label": x_col,
  "y_label": y_col,
  "stats": [
    {"label": "slope β₁", "value: f"{slope:.4f}"},
    {"label": "intercept β₀", "value: f"{intercept:.4f}"},
    {"label": "Pearson r", "value: f"{r:.4f}"},
    {"label": "R\xb2", "value: f"{r2:.4f}", "hint": "variance explained"},
  ],
  "summary": f"OLS on {n} {${JSON.stringify(a.id)}} samples: ŷ = {intercept:.3f} + {slope:.3f}\xb7{x_col} predicts {y_col}. R\xb2 = {r2:.3f} means {r2*100:.1f}% of {y_col} variance is linearly explained by {x_col}. {"Strong" if r2 > 0.7 else "Moderate" if r2 > 0.4 else "Weak"} linear relationship."
}))`},parseOutput:e=>{let a=JSON.parse(e);return{chart:a,stats:(a.stats??[]).map(e=>({label:e.label,value:e.value,hint:e.hint})),summary:{text:a.summary??"Regression computed.",caveat:"OLS assumes linear relationship, homoscedastic residuals, no autocorrelation. Inspect the scatter for non-linearity or influential outliers before trusting R\xb2."}}}},{id:"playground-dataset-correlation",title:"Correlation Matrix on Real Data",badge:"Multivariate",description:"Pairwise Pearson r across all numeric columns of a real dataset. Cells with |r| > 0.7 are flagged for potential multicollinearity if both columns go into a downstream linear model.",defaultDatasetId:"boston-housing",defaultExpr:"correlation(dataset=boston-housing)",mathToCode:[{symbol:"X",code:"df[cols].dropna()",explanation:"numeric features matrix (n \xd7 k)"},{symbol:"r_ij",code:"np.corrcoef(X.T)[i,j]",explanation:"Pearson r between feature i and j"},{symbol:"r",code:"Σ(x-x̄)(y-ȳ) / (σ_x\xb7σ_y\xb7(n-1))",explanation:"Pearson correlation formula"},{symbol:"heatmap",code:"cells = [{x:j, y:i, v:r_ij}]",explanation:"k\xd7k matrix of pairwise correlations"},{symbol:"|r| > 0.7",code:"flag for multicollinearity",explanation:"features with strong correlation → redundant in linear models"}],placeholder:"correlation(dataset=boston-housing)",generateCode:(e,a)=>{let t=a.numericColumns.slice(0,6),s=(0,u.i)(e.named,"nrows",999999);return`from pyodide.http import pyfetch
import pandas as pd, numpy as np, json
from io import StringIO

URL = "${a.url}"
resp = await pyfetch(URL)
csv = await resp.string()
df_full = pd.read_csv(StringIO(csv))
df = df_full.iloc[:${s}]  # lazy eval: only first segment
total_rows = len(df_full)
cols = ${JSON.stringify(t)}
sub = df[cols].dropna()
M = sub.corr().values.tolist()
# Build heatmap cells
cells = []
for i in range(len(cols)):
  for j in range(len(cols)):
    v = float(M[i][j])
    cells.append({"x": j, "y": i, "v": v, "label": f"{cols[j]}↔{cols[i]}\\nr={v:.2f}"})
# find strongest pair (off-diagonal)
strongest = None; strongest_v = 0
for i in range(len(cols)):
  for j in range(i + 1, len(cols)):
    v = abs(float(M[i][j]))
    if v > strongest_v:
      strongest_v = v
      strongest = (cols[i], cols[j], float(M[i][j]))
print(json.dumps({
  "chart_type": "heatmap",
  "title": f"Correlation matrix ({len(cols)} features, n={sub.shape[0]})",
  "series": [{"name": "r", "data": cells}],
  "x_label": "feature j",
  "y_label": "feature i",
  "stats": [
    {"label": "observed rows", "value: str(len(df))},
    {"label": "total rows", "value: str(total_rows)},
    {"label": "features", "value: str(len(cols))},
    {"label": "n (after dropna)", "value: str(sub.shape[0])},
    {"label": "strongest pair", "value: f"{strongest[0]} ↔ {strongest[1]}", "hint": f"r = {strongest[2]:.3f}"},
    {"label": "|r| > 0.7", "value: str(sum(1 for i in range(len(cols)) for j in range(i+1, len(cols)) if abs(M[i][j]) > 0.7)) + " pairs", "hint": "potential multicollinearity"},
  ],
  "summary": f"Correlation matrix on {len(cols)} numeric features from {${JSON.stringify(a.id)}} (n={sub.shape[0]}). Strongest correlation: {strongest[0]} ↔ {strongest[1]} (r={strongest[2]:.3f}). Cells with |r| > 0.7 are flagged — putting both into a linear model risks multicollinearity."
}))`},parseOutput:e=>{let a=JSON.parse(e);return{chart:a,stats:(a.stats??[]).map(e=>({label:e.label,value:e.value,hint:e.hint})),summary:{text:a.summary??"Correlation computed.",caveat:"Pearson r measures linear association only. Two features can be strongly dependent yet have r ≈ 0 (e.g. quadratic). Always pair with a scatter."}}}},{id:"playground-dataset-pca",title:"PCA — High-Dim to 2D on Real Data",badge:"Dimensionality Reduction",description:"Principal Component Analysis reduces a multi-feature dataset onto the 2 axes of greatest variance. If the dataset has a categorical group column, points are coloured by group — you can see whether the variance structure separates the classes.",defaultDatasetId:"iris",defaultExpr:"pca(dataset=iris)",mathToCode:[{symbol:"X",code:"df[cols].dropna().values",explanation:"data matrix (n \xd7 k, k features)"},{symbol:"μ",code:"X.mean(axis=0)",explanation:"column means (feature means)"},{symbol:"X_c",code:"X - μ",explanation:"centered data (subtract column means)"},{symbol:"U, S, Vᵀ",code:"np.linalg.svd(X_c)",explanation:"SVD of centered data"},{symbol:"PC1",code:"X_c @ Vᵀ[0]",explanation:"first principal component (max variance direction)"},{symbol:"PC2",code:"X_c @ Vᵀ[1]",explanation:"second principal component (orthogonal to PC1)"},{symbol:"var₁",code:"S[0]\xb2 / Σ S\xb2",explanation:"fraction of variance explained by PC1"},{symbol:"var₂",code:"S[1]\xb2 / Σ S\xb2",explanation:"fraction of variance explained by PC2"}],placeholder:"pca(dataset=iris)",generateCode:(e,a)=>{let t=a.numericColumns.slice(0,6),s=a.groupColumn??null,r=(0,u.i)(e.named,"nrows",999999);return`from pyodide.http import pyfetch
import pandas as pd, numpy as np, json
from io import StringIO

URL = "${a.url}"
resp = await pyfetch(URL)
csv = await resp.string()
df_full = pd.read_csv(StringIO(csv))
df = df_full.iloc[:${r}]  # lazy eval: only first segment
total_rows = len(df_full)
cols = ${JSON.stringify(t)}
group_col = ${JSON.stringify(s)}
sub = df[cols].dropna()
X = sub.values
# center
mu = X.mean(axis=0)
Xc = X - mu
# SVD
U, S, Vt = np.linalg.svd(Xc, full_matrices=False)
pc1 = (Xc @ Vt[0]).tolist()
pc2 = (Xc @ Vt[1]).tolist()
total_var = float(np.sum(S ** 2))
v1 = float(S[0] ** 2 / total_var)
v2 = float(S[1] ** 2 / total_var)
# group coloring if available
if group_col and group_col in df.columns:
  groups = df.loc[sub.index, group_col].astype(str).tolist()
else:
  groups = ["all"] * len(pc1)
unique_groups = sorted(set(groups))
group_to_pts = {g: [] for g in unique_groups}
for g, x, y in zip(groups, pc1, pc2):
  group_to_pts[g].append({"x": float(x), "y": float(y)})
series = [{"name": g, "data": pts} for g, pts in group_to_pts.items()]
print(json.dumps({
  "chart_type": "scatter",
  "title": f"PCA 2D projection ({len(cols)} features → 2, n={sub.shape[0]})",
  "series": series,
  "x_label": f"PC1 ({v1*100:.1f}% var)",
  "y_label": f"PC2 ({v2*100:.1f}% var)",
  "stats": [
    {"label": "observed rows", "value: str(len(df))},
    {"label": "total rows", "value: str(total_rows)},
    {"label": "features", "value: str(len(cols))},
    {"label": "n", "value: str(sub.shape[0])},
    {"label": "PC1 var", "value: f"{v1*100:.1f}%"},
    {"label": "PC2 var", "value: f"{v2*100:.1f}%"},
    {"label": "Σ PC1+PC2", "value: f"{(v1+v2)*100:.1f}%", "hint": "variance retained"},
    {"label": "groups", "value: str(len(unique_groups)), "hint": "colored in chart"},
  ],
  "summary": f"PCA on {len(cols)} features from {${JSON.stringify(a.id)}} (n={sub.shape[0]}). PC1 captures {v1*100:.1f}% of variance, PC2 captures {v2*100:.1f}% — total {(v1+v2)*100:.1f}% in the 2D plane. {"Groups separate visibly on PC1/PC2 — variance structure is class-discriminative." if len(unique_groups) > 1 else "No group column — variance structure is unsupervised."}"
}))`},parseOutput:e=>{let a=JSON.parse(e);return{chart:a,stats:(a.stats??[]).map(e=>({label:e.label,value:e.value,hint:e.hint})),summary:{text:a.summary??"PCA computed.",caveat:"PCA is unsupervised — it picks axes of maximum variance, not axes that maximise class separation. For supervised dim. reduction, try LDA (Linear Discriminant Analysis)."}}}},{id:"playground-dataset-anomaly",title:"Anomaly Detection — Z-score / IQR / Modified Z-score",badge:"Outlier Detection",description:"Detects outliers in a numeric column using three methods: Z-score (|z| > 3 = outlier), IQR (outside [Q1-1.5*IQR, Q3+1.5*IQR]), and Modified Z-score (|MAD| > 3.5). Each method has different assumptions about the distribution.",defaultDatasetId:"iris",defaultExpr:"anomaly(dataset=iris, column=sepal_width, method=zscore, threshold=3.0)",placeholder:"anomaly(dataset=iris, column=sepal_width, method=zscore)",mathToCode:[{symbol:"Z-score",code:"(x - mean) / std",explanation:"standard deviations from mean (|z|>3 = outlier)"},{symbol:"IQR",code:"Q1 - 1.5*(Q3-Q1), Q3 + 1.5*(Q3-Q1)",explanation:"Tukey fences (1.5x IQR)"},{symbol:"Modified Z",code:"0.6745 * (x - median) / MAD",explanation:"robust to outliers (uses median+MAD)"},{symbol:"threshold",code:"config threshold (default 3.0)",explanation:"cutoff for flagging outliers"},{symbol:"outliers",code:"mask = abs(z) > threshold",explanation:"boolean mask of outlier positions"}],generateCode:(e,a)=>{let t=(0,u.oJ)(e.named,"column",a.numericColumns[0]),s=(0,u.oJ)(e.named,"method","zscore"),r=(0,u.i)(e.named,"threshold",3),n=(0,u.i)(e.named,"nrows",999999);return`# Anomaly Detection — ${s} method
from pyodide.http import pyfetch
import pandas as pd, numpy as np, json
from io import StringIO

URL = "${a.url}"
resp = await pyfetch(URL)
csv = await resp.string()
df_full = pd.read_csv(StringIO(csv))
df = df_full.iloc[:${n}]
total_rows = len(df_full)
col = ${JSON.stringify(t)}
method = "${s}"
threshold = ${r}

xs = df[col].dropna().values

if method == "zscore":
    mean, std = np.mean(xs), np.std(xs, ddof=1)
    scores = (xs - mean) / std
    outlier_mask = np.abs(scores) > threshold
elif method == "iqr":
    q1, q3 = np.percentile(xs, [25, 75])
    iqr = q3 - q1
    lower, upper = q1 - 1.5 * iqr, q3 + 1.5 * iqr
    scores = xs.copy()
    outlier_mask = (xs < lower) | (xs > upper)
    mean, std = float(np.mean(xs)), float(np.std(xs, ddof=1))
elif method == "modified_z":
    median = np.median(xs)
    mad = np.median(np.abs(xs - median))
    scores = 0.6745 * (xs - median) / mad if mad > 0 else np.zeros_like(xs)
    outlier_mask = np.abs(scores) > 3.5
    threshold = 3.5
    mean, std = float(median), float(mad)
else:
    mean, std = float(np.mean(xs)), float(np.std(xs, ddof=1))
    scores = (xs - mean) / std
    outlier_mask = np.abs(scores) > threshold

n_outliers = int(np.sum(outlier_mask))
normal = xs[~outlier_mask]
outlier_vals = xs[outlier_mask]

series_data = [{"x": float(i), "y": float(v), "outlier": bool(m)} for i, (v, m) in enumerate(zip(xs, outlier_mask))]

print(json.dumps({
  "chart_type": "scatter",
  "title": f"Anomaly detection ({method}) on {col} ({n_outliers} outliers / {len(xs)})",
  "series": [
    {"name": "normal", "data": [{"x": float(i), "y": float(v)} for i, (v, m) in enumerate(zip(xs, outlier_mask)) if not m]},
    {"name": "outlier", "data": [{"x": float(i), "y": float(v)} for i, (v, m) in enumerate(zip(xs, outlier_mask)) if m]},
  ],
  "x_label": "index", "y_label": col,
  "stats": [
    {"label": "observed rows", "value": str(len(df))},
    {"label": "total rows", "value": str(total_rows)},
    {"label": "method", "value": method},
    {"label": "threshold", "value": str(threshold)},
    {"label": "outliers", "value": str(n_outliers), "hint": f"{n_outliers/len(xs)*100:.1f}% of data"},
    {"label": "mean", "value": f"{float(mean):.3f}"},
    {"label": "std", "value": f"{float(std):.3f}"},
  ],
  "summary": f"Anomaly detection ({method}) found {n_outliers} outliers ({n_outliers/len(xs)*100:.1f}%) in {col} using threshold={threshold}. Outlier values: {outlier_vals[:5].tolist() if len(outlier_vals) > 0 else 'none'}."
}))`},parseOutput:e=>{let a=JSON.parse(e);return{chart:a,stats:(a.stats??[]).map(e=>({label:e.label,value:e.value,hint:e.hint})),summary:{text:a.summary??"Anomaly detection computed.",caveat:"Z-score assumes normal distribution. IQR is distribution-free but less sensitive. Modified Z-score is robust to extreme outliers."}}}},{id:"playground-dataset-kmeans",title:"K-Means Clustering — unsupervised grouping",badge:"Clustering",description:"Groups data points into K clusters using Lloyd's algorithm (iterative assignment + centroid update). Shows the cluster assignments, centroids, and inertia (within-cluster sum of squares). The user can pick K and which two features to cluster on.",defaultDatasetId:"iris",defaultExpr:"kmeans(dataset=iris, x=petal_length, y=petal_width, k=3)",placeholder:"kmeans(dataset=iris, x=petal_length, y=petal_width, k=3)",mathToCode:[{symbol:"K",code:"number of clusters (parameter)",explanation:"user-specified cluster count"},{symbol:"x, y",code:"two features to cluster on",explanation:"the 2D space for clustering"},{symbol:"assignment",code:"argmin_j ||x_i - mu_j||^2",explanation:"assign each point to nearest centroid"},{symbol:"update",code:"mu_j = mean(points in cluster j)",explanation:"move centroid to cluster mean"},{symbol:"inertia",code:"sum ||x_i - mu_{c_i}||^2",explanation:"within-cluster sum of squares (WCSS)"}],generateCode:(e,a)=>{let t=(0,u.oJ)(e.named,"x",a.numericColumns[0]),s=(0,u.oJ)(e.named,"y",a.numericColumns[1]),r=Math.max(2,Math.floor((0,u.i)(e.named,"k",3))),n=(0,u.i)(e.named,"nrows",999999);return`# K-Means Clustering — Lloyd's algorithm
from pyodide.http import pyfetch
import pandas as pd, numpy as np, json
from io import StringIO

URL = "${a.url}"
resp = await pyfetch(URL)
csv = await resp.string()
df_full = pd.read_csv(StringIO(csv))
df = df_full.iloc[:${n}]
total_rows = len(df_full)
x_col = ${JSON.stringify(t)}
y_col = ${JSON.stringify(s)}
k = ${r}

sub = df[[x_col, y_col]].dropna()
X = sub.values
n = len(X)

# Initialize centroids (k-means++ style — pick random points)
np.random.seed(42)
centroids = X[np.random.choice(n, k, replace=False)]

for iteration in range(100):
    # Assign each point to nearest centroid
    dists = np.array([[np.sum((x - c)**2) for c in centroids] for x in X])
    labels = np.argmin(dists, axis=1)
    # Update centroids
    new_centroids = np.array([X[labels == j].mean(axis=0) if np.sum(labels == j) > 0 else centroids[j] for j in range(k)])
    if np.allclose(centroids, new_centroids):
        break
    centroids = new_centroids

inertia = float(np.sum([np.sum((X[labels == j] - centroids[j])**2) for j in range(k)]))

series = []
for j in range(k):
    mask = labels == j
    pts = [{"x": float(X[i, 0]), "y": float(X[i, 1])} for i in range(n) if mask[i]]
    series.append({"name": f"cluster {j}", "data": pts})
# Add centroids as separate series
series.append({"name": "centroids", "data": [{"x": float(centroids[j, 0]), "y": float(centroids[j, 1])} for j in range(k)]})

print(json.dumps({
  "chart_type": "scatter",
  "title": f"K-Means (k={k}) on {x_col} vs {y_col} (n={n}, inertia={inertia:.1f})",
  "series": series,
  "x_label": x_col, "y_label": y_col,
  "stats": [
    {"label": "observed rows", "value": str(len(df))},
    {"label": "total rows", "value": str(total_rows)},
    {"label": "k", "value": str(k)},
    {"label": "iterations", "value": str(iteration + 1)},
    {"label": "inertia (WCSS)", "value": f"{inertia:.2f}", "hint": "lower = tighter clusters"},
    {"label": "cluster sizes", "value": ", ".join(f"c{j}={int(np.sum(labels==j))}" for j in range(k))},
  ],
  "summary": f"K-Means with k={k} on {x_col} vs {y_col}: converged in {iteration+1} iterations. Inertia={inertia:.2f}. Cluster sizes: {', '.join(f'c{j}={int(np.sum(labels==j))}' for j in range(k))}. Lower inertia = tighter clusters."
}))`},parseOutput:e=>{let a=JSON.parse(e);return{chart:a,stats:(a.stats??[]).map(e=>({label:e.label,value:e.value,hint:e.hint})),summary:{text:a.summary??"K-Means computed.",caveat:"K-Means assumes spherical clusters of similar size. For non-convex shapes, use DBSCAN. For hierarchical structure, use agglomerative clustering."}}}},{id:"playground-dataset-timeseries",title:"Time Series Forecasting — AR(1) model",badge:"Forecasting",description:"Fits an AR(1) model (autoregressive, lag=1) to a numeric column treated as a time series: y_t = c + phi * y_{t-1} + eps_t. Forecasts the next H steps with confidence intervals. Also computes ACF (autocorrelation function) to check for remaining structure.",defaultDatasetId:"iris",defaultExpr:"forecast(dataset=iris, column=sepal_length, horizon=20)",placeholder:"forecast(dataset=iris, column=sepal_length, horizon=20)",mathToCode:[{symbol:"y_t",code:"time series values",explanation:"the column treated as sequential observations"},{symbol:"phi",code:"cov(y_t, y_{t-1}) / var(y_{t-1})",explanation:"AR(1) coefficient — OLS regression on lagged values"},{symbol:"c",code:"mean(y) - phi * mean(y)",explanation:"intercept (unconditional mean correction)"},{symbol:"forecast",code:"c + phi * last_value (iterated H times)",explanation:"recursive forecast for H steps ahead"},{symbol:"ACF",code:"cov(y_t, y_{t-k}) / var(y)",explanation:"autocorrelation at lag k — checks for remaining structure"}],generateCode:(e,a)=>{let t=(0,u.oJ)(e.named,"column",a.numericColumns[0]),s=Math.max(5,Math.floor((0,u.i)(e.named,"horizon",20))),r=(0,u.i)(e.named,"nrows",999999);return`# Time Series Forecasting — AR(1) model
from pyodide.http import pyfetch
import pandas as pd, numpy as np, json
from io import StringIO

URL = "${a.url}"
resp = await pyfetch(URL)
csv = await resp.string()
df_full = pd.read_csv(StringIO(csv))
df = df_full.iloc[:${r}]
total_rows = len(df_full)
col = ${JSON.stringify(t)}
H = ${s}  # forecast horizon

y = df[col].dropna().values
n = len(y)

# AR(1): y_t = c + phi * y_{t-1} + eps
# OLS: phi = cov(y_t, y_{t-1}) / var(y_{t-1})
y_lag = y[:-1]
y_curr = y[1:]
phi = np.cov(y_curr, y_lag)[0, 1] / np.var(y_lag, ddof=1) if np.var(y_lag, ddof=1) > 0 else 0
c = np.mean(y) - phi * np.mean(y)
residuals = y_curr - (c + phi * y_lag)
sigma = np.std(residuals, ddof=1)

# Forecast H steps
last_val = y[-1]
forecasts = []
ci_upper = []
ci_lower = []
curr = last_val
for h in range(1, H + 1):
    curr = c + phi * curr
    ci_width = 1.96 * sigma * np.sqrt(h)  # growing CI
    forecasts.append(float(curr))
    ci_upper.append(float(curr + ci_width))
    ci_lower.append(float(curr - ci_width))

# ACF (autocorrelation function) for lags 0-10
max_lag = min(10, n // 4)
acf = []
for k in range(max_lag + 1):
    if k == 0:
        acf.append(1.0)
    else:
        ac = np.corrcoef(y[k:], y[:-k])[0, 1] if len(y[k:]) > 1 else 0
        acf.append(float(ac))

# Build chart: actual + forecast + CI
actual_data = [{"x": i, "y": float(y[i])} for i in range(n)]
forecast_data = [{"x": n + i, "y": f} for i, f in enumerate(forecasts)]
ci_upper_data = [{"x": n + i, "y": u} for i, u in enumerate(ci_upper)]
ci_lower_data = [{"x": n + i, "y": l} for i, l in enumerate(ci_lower)]

print(json.dumps({
  "chart_type": "line",
  "title": f"AR(1) forecast: {col} (phi={phi:.3f}, H={H} steps, sigma={sigma:.3f})",
  "series": [
    {"name": "actual", "data": actual_data},
    {"name": "forecast", "data": forecast_data},
    {"name": "95% CI upper", "data": ci_upper_data},
    {"name": "95% CI lower", "data": ci_lower_data},
  ],
  "x_label": "time index", "y_label": col,
  "stats": [
    {"label": "observed rows", "value": str(len(df))},
    {"label": "total rows", "value": str(total_rows)},
    {"label": "phi (AR coef)", "value": f"{float(phi):.4f}", "hint": "|phi|<1 = stationary"},
    {"label": "intercept (c)", "value": f"{float(c):.4f}"},
    {"label": "sigma (residual std)", "value": f"{float(sigma):.4f}"},
    {"label": "ACF(1)", "value": (f"{acf[1]:.3f}" if len(acf) > 1 else "N/A"), "hint": "= phi for AR(1)"},
    {"label": "horizon (H)", "value": str(H)},
  ],
  "summary": f"AR(1) model: phi={float(phi):.4f}, sigma={float(sigma):.4f}. Forecast {H} steps ahead with 95% CI (growing with sqrt(h)). ACF(1)={(f'{acf[1]:.3f}' if len(acf) > 1 else 'N/A')}. {'Stationary' if abs(phi) < 1 else 'NON-stationary (|phi| >= 1)'}"
}))`},parseOutput:e=>{let a=JSON.parse(e);return{chart:a,stats:(a.stats??[]).map(e=>({label:e.label,value:e.value,hint:e.hint})),summary:{text:a.summary??"Forecast computed.",caveat:"AR(1) assumes linear dependence on the previous value only. For seasonal patterns, use SARIMA. For nonlinear, use LSTM. Always check ACF for remaining structure."}}}},{id:"playground-dataset-feature-importance",title:"Feature Importance — correlation-based ranking",badge:"Feature Selection",description:"Ranks features by their correlation with a target variable. Uses Pearson r (linear), Spearman rho (monotonic), and mutual information (information-theoretic). The user picks the target column, and all other numeric features are ranked by importance.",defaultDatasetId:"iris",defaultExpr:"feature_importance(dataset=iris, target=species)",placeholder:"feature_importance(dataset=iris, target=species)",mathToCode:[{symbol:"target",code:"the column to predict (parameter)",explanation:"what we're ranking features for"},{symbol:"Pearson r",code:"cov(x, y) / (std(x) * std(y))",explanation:"linear correlation with target"},{symbol:"Spearman rho",code:"Pearson on ranked data",explanation:"monotonic (nonlinear) correlation"},{symbol:"|r|",code:"abs(correlation coefficient)",explanation:"importance = strength of correlation"},{symbol:"ranking",code:"sort features by |r| descending",explanation:"feature importance ranking"}],generateCode:(e,a)=>{let t=(0,u.oJ)(e.named,"target",a.groupColumn??a.numericColumns[0]),s=(0,u.i)(e.named,"nrows",999999);return`# Feature Importance — correlation-based
from pyodide.http import pyfetch
import pandas as pd, numpy as np, json
from io import StringIO

URL = "${a.url}"
resp = await pyfetch(URL)
csv = await resp.string()
df_full = pd.read_csv(StringIO(csv))
df = df_full.iloc[:${s}]
total_rows = len(df_full)
target_col = ${JSON.stringify(t)}

# If target is categorical, encode to numeric
if df[target_col].dtype == 'object':
    categories = df[target_col].astype('category').cat.codes
    target = categories.values
else:
    target = df[target_col].dropna().values

# Get all other numeric columns
all_cols = [c for c in df.select_dtypes(include=[np.number]).columns if c != target_col]
features = [c for c in all_cols if c != target_col]

# Compute correlations
results = []
for feat in features:
    vals = df[feat].dropna()
    # Align with target
    min_len = min(len(vals), len(target))
    x = vals.values[:min_len]
    t = target[:min_len]
    if len(x) < 2:
        continue
    # Pearson r
    if np.std(x) > 0 and np.std(t) > 0:
        r = float(np.corrcoef(x, t)[0, 1])
    else:
        r = 0.0
    # Spearman rho (rank-based)
    from scipy.stats import spearmanr
    rho, _ = spearmanr(x, t)
    rho = float(rho) if not np.isnan(rho) else 0.0
    results.append({"feature": feat, "pearson": r, "spearman": rho, "abs_r": abs(r), "abs_rho": abs(rho)})

# Sort by |Pearson r|
results.sort(key=lambda x: x["abs_r"], reverse=True)

# Build chart
bar_data = [{"x": r["feature"], "y": r["abs_r"]} for r in results]
spearman_data = [{"x": r["feature"], "y": r["abs_rho"]} for r in results]

print(json.dumps({
  "chart_type": "bar",
  "title": f"Feature importance for {target_col} (n={len(df)})",
  "series": [
    {"name": "|Pearson r|", "data": bar_data},
    {"name": "|Spearman rho|", "data": spearman_data},
  ],
  "x_label": "feature", "y_label": "|correlation|",
  "stats": [
    {"label": "observed rows", "value": str(len(df))},
    {"label": "total rows", "value": str(total_rows)},
    {"label": "target", "value": target_col},
    {"label": "features", "value": str(len(features))},
    {"label": "top feature", "value": (results[0]["feature"] if results else "N/A"), "hint": (f"|r|={results[0]['abs_r']:.3f}" if results else "")},
  ],
  "summary": f"Feature importance for {target_col}: top feature = {results[0]['feature'] if results else 'N/A'} (|r|={results[0]['abs_r']:.3f}). {len(features)} features ranked. Pearson captures linear, Spearman captures monotonic relationships."
}))`},parseOutput:e=>{let a=JSON.parse(e);return{chart:a,stats:(a.stats??[]).map(e=>({label:e.label,value:e.value,hint:e.hint})),summary:{text:a.summary??"Feature importance computed.",caveat:"Correlation != causation. For causal feature importance, use SHAP values or permutation importance on a trained model."}}}},{id:"playground-dataset-cross-domain",title:"Cross-Domain Equation Comparison — Pearson r vs Mutual Information",badge:"Cross-Domain",description:"Applies TWO equations from different mathematical traditions to the same feature pair: Pearson r (classical statistics, Galton 1888) measures LINEAR dependence; Mutual Information (information theory, Shannon 1948) measures ANY dependence. For Gaussian data, MI = -0.5*log2(1-r^2). The gap between |r| and sqrt(2*MI) measures how non-Gaussian / non-linear the relationship is.",defaultDatasetId:"iris",defaultExpr:"cross_domain(dataset=iris, x=petal_length, y=petal_width, bins=10)",placeholder:"cross_domain(dataset=iris, x=petal_length, y=petal_width)",mathToCode:[{symbol:"Pearson r",code:"cov(x,y) / (std(x) * std(y))",explanation:"linear correlation (Galton 1888, Pearson 1895) — range [-1, +1]"},{symbol:"cov(x,y)",code:"mean((x - x̄)(y - ȳ))",explanation:"how much x and y co-vary"},{symbol:"MI",code:"Σ P(x,y) \xb7 log2(P(x,y) / (P(x)\xb7P(y)))",explanation:"Mutual Information (Shannon 1948) — any dependence, range [0, ∞)"},{symbol:"P(x,y)",code:"histogram2d(x, y, bins=B) / total",explanation:"joint distribution estimated by 2D histogram"},{symbol:"Gaussian bridge",code:"MI = -0.5 \xb7 log2(1 - r\xb2)",explanation:"if data is 2D Gaussian, MI and r are equivalent"},{symbol:"normalized MI",code:"sqrt(2 \xb7 MI)",explanation:"scales MI to [0, 1] for direct comparison with |r|"},{symbol:"gap = ||r| - √(2\xb7MI)|",code:"abs(abs(r) - sqrt(2*MI))",explanation:"0 → perfectly Gaussian-linear; >0 → nonlinear or non-Gaussian"}],generateCode:(e,a)=>{let t=(0,u.oJ)(e.named,"x",a.numericColumns[0]),s=(0,u.oJ)(e.named,"y",a.numericColumns[1]),r=Math.max(3,Math.floor((0,u.i)(e.named,"bins",10))),n=(0,u.i)(e.named,"nrows",999999),i=a.groupColumn??"";return`# Cross-Domain Equation Comparison
# Equation 1: Pearson r  (classical statistics, Galton 1888, Pearson 1895)
# Equation 2: Mutual Information  (information theory, Shannon 1948)
# Both applied to the same feature pair on the same dataset.
from pyodide.http import pyfetch
import pandas as pd, numpy as np, json
from io import StringIO

URL = "${a.url}"
resp = await pyfetch(URL)
csv = await resp.string()
df_full = pd.read_csv(StringIO(csv))
df = df_full.iloc[:${n}]
total_rows = len(df_full)
x_col = ${JSON.stringify(t)}
y_col = ${JSON.stringify(s)}
n_bins = ${r}
group_col = ${JSON.stringify(i)}

sub = df[[x_col, y_col]].dropna()
x = sub[x_col].values
y = sub[y_col].values
n = len(x)

# ============= EQUATION 1: Pearson r (classical statistics) =============
mean_x, mean_y = float(np.mean(x)), float(np.mean(y))
std_x, std_y = float(np.std(x, ddof=1)), float(np.std(y, ddof=1))
cov_xy = float(np.mean((x - mean_x) * (y - mean_y)) * n / (n - 1))
r = float(cov_xy / (std_x * std_y)) if std_x > 0 and std_y > 0 else 0.0

# ============= EQUATION 2: Mutual Information (information theory) =============
# Estimate joint distribution via 2D histogram (no sklearn needed)
H, _, _ = np.histogram2d(x, y, bins=n_bins, density=False)
total = H.sum()
if total == 0:
    mi = 0.0
else:
    Pxy = H / total
    Px = Pxy.sum(axis=1, keepdims=True)
    Py = Pxy.sum(axis=0, keepdims=True)
    P_indep = Px @ Py
    mask = (Pxy > 0) & (P_indep > 0)
    mi = float(np.sum(Pxy[mask] * np.log2(Pxy[mask] / P_indep[mask])))

# ============= Gaussian bridge: MI_theoretical = -0.5 * log2(1 - r^2) =============
mi_theoretical = float(-0.5 * np.log2(1 - r * r)) if abs(r) < 1 else 0.0
mi_normalized = float(np.sqrt(2 * mi)) if mi > 0 else 0.0
gap = float(abs(abs(r) - mi_normalized))

# ============= Visualization: scatter colored by group (if available) =============
series = []
if group_col and group_col in df.columns:
    sub_g = df[[x_col, y_col, group_col]].dropna()
    gx = sub_g[x_col].values
    gy = sub_g[y_col].values
    gspecies = sub_g[group_col].values
    for sp in pd.unique(gspecies):
        mask_sp = gspecies == sp
        pts = [{"x": float(gx[i]), "y": float(gy[i])} for i in range(len(gx)) if mask_sp[i]]
        series.append({"name": str(sp), "data": pts})
else:
    pts = [{"x": float(x[i]), "y": float(y[i])} for i in range(n)]
    series.append({"name": "data", "data": pts})

print(json.dumps({
  "chart_type": "scatter",
  "title": f"Cross-domain: Pearson r={r:.4f} vs MI={mi:.4f} bits on {x_col} vs {y_col}",
  "series": series,
  "x_label": x_col, "y_label": y_col,
  "reference_lines": [{"y": abs(r), "label": f"|r| = {abs(r):.3f}"}],
  "stats": [
    {"label": "observed rows", "value": str(n)},
    {"label": "total rows", "value": str(total_rows)},
    {"label": "feature pair", "value": f"{x_col} vs {y_col}"},
    {"label": "bins (MI estimate)", "value": str(n_bins)},
    {"label": "Pearson r", "value": f"{r:.4f}", "hint": "classical statistics (1888)"},
    {"label": "Mutual Information", "value": f"{mi:.4f} bits", "hint": "information theory (1948)"},
    {"label": "MI theoretical (Gaussian bridge)", "value": f"{mi_theoretical:.4f} bits", "hint": "= -0.5*log2(1-r^2)"},
    {"label": "sqrt(2*MI) normalized", "value": f"{mi_normalized:.4f}", "hint": "scaled to [0,1] for comparison with |r|"},
    {"label": "gap ||r| - sqrt(2*MI)|", "value": f"{gap:.4f}", "hint": "0 = Gaussian-linear; >0 = nonlinear/non-Gaussian"},
  ],
  "summary": f"Cross-domain comparison on {x_col} vs {y_col} (n={n}): Pearson r={r:.4f} (linear), MI={mi:.4f} bits (any-dep). Theoretical Gaussian MI={mi_theoretical:.4f}. Normalized sqrt(2*MI)={mi_normalized:.4f} vs |r|={abs(r):.4f}. Gap={gap:.4f}. {'Strong agreement - relationship is Gaussian-linear.' if gap < 0.1 else 'Divergence detected - relationship is nonlinear or non-Gaussian.'}"
}))`},parseOutput:e=>{let a=JSON.parse(e);return{chart:a,stats:(a.stats??[]).map(e=>({label:e.label,value:e.value,hint:e.hint})),summary:{text:a.summary??"Cross-domain comparison computed.",caveat:"Pearson r (statistics) and Mutual Information (information theory) measure dependence with completely different assumptions. For 2D Gaussian data they are equivalent via MI = -0.5*log2(1-r^2). For non-Gaussian or nonlinear relationships, they diverge — and the divergence itself is informative."}}}},{id:"playground-dataset-gradient-boosting",title:"Gradient Boosting — iterative residual fitting",badge:"Ensemble",description:"Simulates a simple gradient boosting loop: initialize predictions to the mean, compute residuals, fit weak learners (decision stumps), update predictions with learning rate eta. Shows training loss decreasing per iteration + feature importance from the stumps.",defaultDatasetId:"iris",defaultExpr:"gradient_boosting(dataset=iris, target=petal_length, n_estimators=20, eta=0.1)",placeholder:"gradient_boosting(dataset=iris, target=petal_length, n_estimators=20)",mathToCode:[{symbol:"y_0",code:"mean(y)",explanation:"initial prediction = mean of target"},{symbol:"residual_i",code:"y - y_pred",explanation:"residuals = actual - current prediction"},{symbol:"h_i(x)",code:"decision_stump(residuals, feature)",explanation:"weak learner = 1-level decision tree"},{symbol:"y_pred",code:"y_pred += eta * h_i(x)",explanation:"update prediction with learning rate eta"},{symbol:"loss",code:"mean((y - y_pred)^2)",explanation:"MSE loss per iteration"}],generateCode:(e,a)=>{let t=(0,u.oJ)(e.named,"target",a.numericColumns[0]),s=Math.max(5,Math.floor((0,u.i)(e.named,"n_estimators",20))),r=(0,u.i)(e.named,"eta",.1),n=(0,u.i)(e.named,"nrows",999999);return`# Gradient Boosting - iterative residual fitting
from pyodide.http import pyfetch
import pandas as pd, numpy as np, json
from io import StringIO

URL = "${a.url}"
resp = await pyfetch(URL)
csv = await resp.string()
df_full = pd.read_csv(StringIO(csv))
df = df_full.iloc[:${n}]
total_rows = len(df_full)
target_col = ${JSON.stringify(t)}
n_est = ${s}
eta = ${r}

# Encode categorical columns to numeric
for col in df.columns:
    if df[col].dtype == 'object':
        df[col] = df[col].astype('category').cat.codes

y = df[target_col].values
X = df.drop(columns=[target_col])
features = list(X.columns)
X_vals = X.values

# Initialize predictions to mean
y_pred = np.full(len(y), np.mean(y))
losses = []
stump_features = []

for i in range(n_est):
    residuals = y - y_pred
    # Find best decision stump (1 split on 1 feature)
    best_loss = float('inf')
    best_feat = 0
    best_thresh = 0
    best_left_val = 0
    best_right_val = 0
    for fi, fname in enumerate(features):
        col = X_vals[:, fi]
        for thresh in np.percentile(col, [25, 50, 75]):
            left = residuals[col <= thresh]
            right = residuals[col > thresh]
            if len(left) == 0 or len(right) == 0:
                continue
            left_val = np.mean(left)
            right_val = np.mean(right)
            pred = np.where(col <= thresh, left_val, right_val)
            loss = np.mean((residuals - pred) ** 2)
            if loss < best_loss:
                best_loss = loss
                best_feat = fi
                best_thresh = thresh
                best_left_val = left_val
                best_right_val = right_val
    # Apply the stump
    col = X_vals[:, best_feat]
    y_pred += eta * np.where(col <= best_thresh, best_left_val, best_right_val)
    stump_features.append(features[best_feat])
    losses.append(float(np.mean((y - y_pred) ** 2)))

# Feature importance = how often each feature was chosen as the best split
from collections import Counter
feat_counts = Counter(stump_features)
feat_imp = [{"x": f, "y": c} for f, c in feat_counts.most_common()]

loss_data = [{"x": i + 1, "y": l} for i, l in enumerate(losses)]

print(json.dumps({
  "chart_type": "line",
  "title": f"Gradient Boosting loss ({n_est} stumps, eta={eta}) on {target_col}",
  "series": [{"name": "MSE loss", "data": loss_data}],
  "x_label": "iteration", "y_label": "MSE loss",
  "stats": [
    {"label": "observed rows", "value": str(len(df))},
    {"label": "total rows", "value": str(total_rows)},
    {"label": "target", "value": target_col},
    {"label": "n_estimators", "value": str(n_est)},
    {"label": "eta (learning rate)", "value": str(eta)},
    {"label": "initial loss", "value": f"{losses[0]:.4f}"},
    {"label": "final loss", "value": f"{losses[-1]:.4f}"},
    {"label": "loss reduction", "value": f"{(1 - losses[-1] / losses[0]) * 100:.1f}%", "hint": "improvement from initial"},
  ],
  "summary": f"Gradient Boosting with {n_est} decision stumps (eta={eta}) on {target_col}. Loss decreased from {losses[0]:.4f} to {losses[-1]:.4f} ({(1 - losses[-1] / losses[0]) * 100:.1f}% reduction). Most-used feature: {feat_counts.most_common(1)[0][0]}."
}))`},parseOutput:e=>{let a=JSON.parse(e);return{chart:a,stats:(a.stats??[]).map(e=>({label:e.label,value:e.value,hint:e.hint})),summary:{text:a.summary??"Gradient boosting computed.",caveat:"This is a simplified gradient boosting (decision stumps only). Real XGBoost/LightGBM uses deeper trees + regularization + second-order gradients."}}}},{id:"playground-dataset-shap",title:"SHAP-style Feature Importance — marginal contributions",badge:"Explainability",description:"Computes SHAP-style feature importance by perturbing each feature to its mean and measuring the prediction change. The bigger the change, the more important the feature. Shows a bar chart of |SHAP| per feature + a summary.",defaultDatasetId:"iris",defaultExpr:"shap(dataset=iris, target=species, n_samples=50)",placeholder:"shap(dataset=iris, target=species)",mathToCode:[{symbol:"phi_i",code:"E[f(x)|x_i] - E[f(x)]",explanation:"SHAP value = marginal contribution of feature i"},{symbol:"f(x)",code:"model.predict(x)",explanation:"model prediction (here: mean-based)"},{symbol:"baseline",code:"E[f(x)] = mean(y)",explanation:"expected prediction without any features"},{symbol:"perturbation",code:"replace x_i with mean(x_i)",explanation:"marginalize feature i to its average"},{symbol:"importance",code:"|phi_i| / sum(|phi_j|)",explanation:"normalized importance"}],generateCode:(e,a)=>{let t=(0,u.oJ)(e.named,"target",a.groupColumn??a.numericColumns[0]),s=Math.max(10,Math.floor((0,u.i)(e.named,"n_samples",50))),r=(0,u.i)(e.named,"nrows",999999);return`# SHAP-style feature importance - marginal contributions
from pyodide.http import pyfetch
import pandas as pd, numpy as np, json
from io import StringIO

URL = "${a.url}"
resp = await pyfetch(URL)
csv = await resp.string()
df_full = pd.read_csv(StringIO(csv))
df = df_full.iloc[:${r}]
total_rows = len(df_full)
target_col = ${JSON.stringify(t)}
n_samples = ${s}

# Encode target if categorical
if df[target_col].dtype == 'object':
    y = df[target_col].astype('category').cat.codes.values
else:
    y = df[target_col].values

# Features = all numeric columns except target
feature_cols = [c for c in df.select_dtypes(include=[np.number]).columns if c != target_col]
if len(feature_cols) == 0:
    # Encode all object columns
    for c in df.columns:
        if c != target_col and df[c].dtype == 'object':
            df[c] = df[c].astype('category').cat.codes
    feature_cols = [c for c in df.columns if c != target_col]

X = df[feature_cols].values
n_feat = len(feature_cols)

# Simple model: mean(y) + sum(feature_effect_i)
# Feature effect = correlation * (x_i - mean(x_i))
feature_means = np.mean(X, axis=0)
feature_stds = np.std(X, axis=0)
correlations = np.array([np.corrcoef(X[:, i], y)[0, 1] if feature_stds[i] > 0 else 0 for i in range(n_feat)])

def predict(x):
    """Simple model: baseline + sum of feature effects"""
    baseline = np.mean(y)
    effects = correlations * (x - feature_means) / (feature_stds + 1e-8)
    return baseline + np.sum(effects)

# SHAP: perturb each feature to its mean, measure prediction change
sample_idx = np.random.choice(len(y), min(n_samples, len(y)), replace=False)
shap_values = np.zeros((len(sample_idx), n_feat))

for si, idx in enumerate(sample_idx):
    x_orig = X[idx]
    f_orig = predict(x_orig)
    for fi in range(n_feat):
        x_perturbed = x_orig.copy()
        x_perturbed[fi] = feature_means[fi]
        f_perturbed = predict(x_perturbed)
        shap_values[si, fi] = f_orig - f_perturbed

mean_abs_shap = np.mean(np.abs(shap_values), axis=0)
total_shap = np.sum(mean_abs_shap)
normalized = mean_abs_shap / (total_shap + 1e-8)

bar_data = [{"x": feature_cols[i], "y": float(normalized[i])} for i in range(n_feat)]
bar_data.sort(key=lambda d: d["y"], reverse=True)

print(json.dumps({
  "chart_type": "bar",
  "title": f"SHAP-style feature importance for {target_col} (n={n_samples} samples)",
  "series": [{"name": "|SHAP| (normalized)", "data": bar_data}],
  "x_label": "feature", "y_label": "importance",
  "stats": [
    {"label": "observed rows", "value": str(len(df))},
    {"label": "total rows", "value": str(total_rows)},
    {"label": "target", "value": target_col},
    {"label": "n_samples", "value": str(n_samples)},
    {"label": "n_features", "value": str(n_feat)},
    {"label": "top feature", "value": bar_data[0]["x"], "hint": f"importance = {bar_data[0]['y']:.3f}"},
  ],
  "summary": f"SHAP-style importance for {target_col}: top feature = {bar_data[0]['x']} (importance={bar_data[0]['y']:.3f}). {n_feat} features ranked by mean |SHAP| value across {n_samples} samples."
}))`},parseOutput:e=>{let a=JSON.parse(e);return{chart:a,stats:(a.stats??[]).map(e=>({label:e.label,value:e.value,hint:e.hint})),summary:{text:a.summary??"SHAP values computed.",caveat:"This is a simplified SHAP approximation (mean-based perturbation). Real SHAP uses Shapley values from game theory with exact marginalization. Use the 'shap' Python package for production-grade explainability."}}}},{id:"playground-dataset-ts-decomposition",title:"Time Series Decomposition — trend + seasonality + residual",badge:"Decomposition",description:"Decomposes a numeric column treated as a time series into trend (moving average), seasonality (periodic component), and residual (noise). Shows 4 line series: original, trend, seasonal, residual. Helps understand whether a time series has structure or is pure noise.",defaultDatasetId:"iris",defaultExpr:"ts_decompose(dataset=iris, column=sepal_length, period=10)",placeholder:"ts_decompose(dataset=iris, column=sepal_length, period=10)",mathToCode:[{symbol:"y(t)",code:"trend(t) + seasonal(t) + residual(t)",explanation:"additive decomposition"},{symbol:"trend(t)",code:"moving_average(y, window=period)",explanation:"centered moving average smooths short-term fluctuations"},{symbol:"detrended",code:"y - trend",explanation:"remove trend to isolate seasonal + residual"},{symbol:"seasonal(t)",code:"mean(detrended[t::period])",explanation:"average detrended values at each phase"},{symbol:"residual(t)",code:"y - trend - seasonal",explanation:"what remains after removing trend + seasonality"}],generateCode:(e,a)=>{let t=(0,u.oJ)(e.named,"column",a.numericColumns[0]),s=Math.max(2,Math.floor((0,u.i)(e.named,"period",10))),r=(0,u.i)(e.named,"nrows",999999);return`# Time Series Decomposition - trend + seasonality + residual
from pyodide.http import pyfetch
import pandas as pd, numpy as np, json
from io import StringIO

URL = "${a.url}"
resp = await pyfetch(URL)
csv = await resp.string()
df_full = pd.read_csv(StringIO(csv))
df = df_full.iloc[:${r}]
total_rows = len(df_full)
col = ${JSON.stringify(t)}
period = ${s}

y = df[col].dropna().values
n = len(y)

# 1. Trend: centered moving average with window = period
half = period // 2
trend = np.full(n, np.nan)
for t in range(half, n - half):
    window = y[t - half : t + half + 1]
    trend[t] = np.mean(window)
# Forward/backward fill the edges
for t in range(half):
    trend[t] = trend[half] if not np.isnan(trend[half]) else y[t]
for t in range(n - half, n):
    trend[t] = trend[n - half - 1] if not np.isnan(trend[n - half - 1]) else y[t]

# 2. Detrended
detrended = y - trend

# 3. Seasonal: average detrended values at each phase position
seasonal = np.zeros(n)
for phase in range(period):
    mask = np.arange(n) % period == phase
    vals = detrended[mask]
    vals = vals[~np.isnan(vals)]
    seasonal[mask] = np.mean(vals) if len(vals) > 0 else 0

# 4. Residual
residual = y - trend - seasonal

# Build chart: 4 line series
actual_data = [{"x": i, "y": float(y[i])} for i in range(n)]
trend_data = [{"x": i, "y": float(trend[i])} for i in range(n)]
seasonal_data = [{"x": i, "y": float(seasonal[i])} for i in range(n)]
residual_data = [{"x": i, "y": float(residual[i])} for i in range(n)]

# Variance explained
var_y = np.var(y)
var_trend = np.var(trend)
var_seasonal = np.var(seasonal)
var_residual = np.var(residual)

print(json.dumps({
  "chart_type": "line",
  "title": f"Time series decomposition: {col} (period={period}, n={n})",
  "series": [
    {"name": "actual", "data": actual_data},
    {"name": "trend", "data": trend_data},
    {"name": "seasonal", "data": seasonal_data},
    {"name": "residual", "data": residual_data},
  ],
  "x_label": "time index", "y_label": col,
  "stats": [
    {"label": "observed rows", "value": str(n)},
    {"label": "total rows", "value": str(total_rows)},
    {"label": "column", "value": col},
    {"label": "period", "value": str(period)},
    {"label": "var(y)", "value": f"{var_y:.4f}"},
    {"label": "var(trend)", "value": f"{var_trend:.4f}", "hint": f"{var_trend/var_y*100:.1f}% of total"},
    {"label": "var(seasonal)", "value": f"{var_seasonal:.4f}", "hint": f"{var_seasonal/var_y*100:.1f}% of total"},
    {"label": "var(residual)", "value": f"{var_residual:.4f}", "hint": f"{var_residual/var_y*100:.1f}% of total"},
  ],
  "summary": f"Decomposed {col} (n={n}, period={period}). Trend explains {var_trend/var_y*100:.1f}% of variance, seasonal {var_seasonal/var_y*100:.1f}%, residual {var_residual/var_y*100:.1f}%. {'Strong trend + seasonal structure.' if var_residual/var_y < 0.3 else 'Mostly noise - weak structure.'}"
}))`},parseOutput:e=>{let a=JSON.parse(e);return{chart:a,stats:(a.stats??[]).map(e=>({label:e.label,value:e.value,hint:e.hint})),summary:{text:a.summary??"Decomposition computed.",caveat:"Additive decomposition assumes trend + seasonal + residual are independent. For multiplicative series (amplitude grows with trend), use log-transform first. The period parameter controls the seasonal window - try different values to find the best fit."}}}}];var h=t(12115),x=t(7915),g=t(6296),y=t(42763),b=t(11408),v=t(71816),_=t(77784),w=t(92906),j=t(85404);function N({spec:e}){let a=p.find(a=>a.id===e.defaultDatasetId)??p[0],[t,n]=(0,h.useState)(e.defaultDatasetId),i=(0,h.useMemo)(()=>p.find(e=>e.id===t)??a,[t,a]),[l,d]=(0,h.useState)(20),[c,m]=(0,h.useState)(0),[f,N]=(0,h.useState)(!1),S=(0,h.useCallback)((e,a,t)=>a.replace(/,?\s*nrows=\d+/g,"").replace(/\)$/,`, nrows=${t})`),[]),[C,k]=(0,h.useState)(()=>S(a,e.defaultExpr,20)),[P,z]=(0,h.useState)(()=>S(a,e.defaultExpr,20)),{ref:M,inView:A}=(0,_.W)(),{status:O,error:I,output:$,run:D}=(0,w.j)(["numpy","scipy","pandas"]);(0,h.useEffect)(()=>{if($&&"ok"===O)try{let e=JSON.parse($);if(e.stats){let a=e.stats.find(e=>"total rows"===e.label);a&&m(parseInt(a.value))}}catch{}},[$,O]);let R=(0,h.useCallback)(e=>{n(e);let a=p.find(a=>a.id===e);a&&(d(20),k(e=>S(a,e,20)))},[S]),E=(0,h.useMemo)(()=>{try{let a=(0,u.Mf)(P),t=p.find(e=>e.id===a.named.dataset)??i;return e.generateCode(a,t)}catch(e){return`# Error: ${e?.message??String(e)}`}},[P,e,i]),L=(0,h.useMemo)(()=>{if(!$||"ok"!==O)return{chart:null,stats:[],summary:{text:"Not yet computed. The popup will load only the first 20 rows initially — click 'Observe more' to progressively load more data."}};try{return e.parseOutput($)}catch(e){return{chart:null,stats:[],summary:{text:`Failed to parse: ${e?.message??String(e)}`}}}},[$,O,e]),F=(0,h.useCallback)(()=>{z(C);try{let a=(0,u.Mf)(C),t=p.find(e=>e.id===a.named.dataset)??i,s=e.generateCode(a,t);D(s)}catch(e){console.error("Parse error:",e)}},[C,e,D,i]),J=(0,h.useCallback)(()=>{let a=Math.min(l+20,c||l+20);d(a);let t=S(i,C,a);k(t),z(t);try{let a=(0,u.Mf)(t),s=p.find(e=>e.id===a.named.dataset)??i,r=e.generateCode(a,s);D(r)}catch(e){console.error("Parse error:",e)}},[l,c,C,i,S,e,D]),{chart:q,stats:T,summary:H}=L,X=c>0?(l/c*100).toFixed(1):"0",U=c>0&&l<c;return(0,s.jsx)("div",{ref:M,children:(0,s.jsx)(v.E,{title:e.title,badge:e.badge,height:120,children:(0,s.jsxs)(r.P.div,{initial:{opacity:0,y:16},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.4},className:"relative rounded-xl border border-zinc-200/10 bg-gradient-to-br from-zinc-900/80 to-zinc-950/80 backdrop-blur-sm overflow-hidden",children:[(0,s.jsx)("div",{className:"pointer-events-none absolute -top-px left-12 right-12 h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent"}),(0,s.jsxs)("div",{className:"p-5",children:[(0,s.jsx)("div",{className:"flex items-start justify-between gap-3",children:(0,s.jsxs)("div",{className:"space-y-1",children:[(0,s.jsxs)("div",{className:"flex items-center gap-2",children:[(0,s.jsx)("h3",{className:"text-base font-semibold text-zinc-100",children:e.title}),(0,s.jsx)("span",{className:"text-[10px] px-1.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",children:e.badge})]}),(0,s.jsx)("p",{className:"text-xs text-zinc-400 leading-relaxed max-w-2xl",children:e.description})]})}),(0,s.jsx)("div",{className:"mt-3 flex flex-wrap gap-1.5",children:p.map(e=>{let a=e.id===t;return(0,s.jsxs)("button",{type:"button",onClick:()=>R(e.id),className:`text-[10px] px-2 py-0.5 rounded-md border transition-colors ${a?"bg-emerald-500/20 border-emerald-500 text-emerald-300":"bg-zinc-900/40 border-zinc-200/10 text-zinc-400 hover:text-zinc-200"}`,title:e.description,children:[e.name.split("(")[0].trim()," \xb7 ",e.rows," rows"]},e.id)})}),(0,s.jsxs)(y.lG,{open:f,onOpenChange:N,children:[(0,s.jsx)(y.zM,{asChild:!0,children:(0,s.jsxs)("button",{type:"button",className:"mt-3 flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-md bg-emerald-500/90 text-white hover:bg-emerald-500 transition-colors",onClick:()=>{N(!0),"idle"===O&&setTimeout(()=>F(),200)},children:[(0,s.jsx)(x.A,{className:"h-3.5 w-3.5"}),"Open Demo (lazy: loads first ",20," rows)"]})}),(0,s.jsxs)(y.Cf,{className:"max-w-5xl max-h-[90vh] overflow-y-auto",children:[(0,s.jsx)(y.c7,{children:(0,s.jsxs)(y.L3,{className:"flex items-center gap-2",children:[(0,s.jsx)(o.A,{className:"h-4 w-4 text-emerald-400"}),e.title,(0,s.jsx)("span",{className:"text-[10px] px-1.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",children:e.badge})]})}),(0,s.jsx)("div",{className:"rounded-md border border-zinc-200/10 bg-zinc-950/60 p-2 mb-2",children:(0,s.jsxs)("div",{className:"flex items-center gap-2 text-[10px] text-zinc-500",children:[(0,s.jsx)(o.A,{className:"h-3 w-3 text-emerald-400"}),(0,s.jsx)("span",{children:i.name}),(0,s.jsx)("span",{children:"\xb7"}),(0,s.jsx)("code",{className:"text-emerald-400/70 font-mono text-[10px]",children:i.url.split("/").slice(-2).join("/")})]})}),(0,s.jsx)(b.s,{id:e.id,title:e.title,badge:e.badge,description:e.description,mathExpr:C,onMathChange:k,onRun:F,status:A?O:"idle",error:I,code:E,stats:T,summary:H,mathToCode:e.mathToCode,chart:q?(0,s.jsx)(j.D,{data:q,accent:"#10b981"}):null}),(0,s.jsxs)("div",{className:"mt-4 rounded-md border border-emerald-500/20 bg-emerald-500/5 p-3",children:[(0,s.jsxs)("div",{className:"flex items-center justify-between gap-3",children:[(0,s.jsxs)("div",{className:"text-xs text-zinc-400",children:[(0,s.jsx)("span",{className:"text-emerald-400 font-medium",children:"Lazy Evaluation:"})," ","Observing rows ",(0,s.jsxs)("span",{className:"font-mono text-zinc-200",children:["1–",l]}),c>0&&(0,s.jsxs)(s.Fragment,{children:[" ","of ",(0,s.jsx)("span",{className:"font-mono text-zinc-200",children:c})]})," ","(",X,"%)"]}),U&&(0,s.jsxs)("button",{type:"button",onClick:J,disabled:"loading"===O,className:"flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-md bg-emerald-500/90 text-white hover:bg-emerald-500 disabled:opacity-50 transition-colors whitespace-nowrap",children:["loading"===O?(0,s.jsx)(g.A,{className:"h-3 w-3 animate-spin"}):(0,s.jsx)(x.A,{className:"h-3 w-3"}),"Observe more (rows ",l+1,"–",Math.min(l+20,c),")"]})]}),c>0&&(0,s.jsx)("div",{className:"mt-2 h-1.5 rounded-full bg-zinc-800 overflow-hidden",children:(0,s.jsx)("div",{className:"h-full bg-emerald-500 transition-all duration-300",style:{width:`${X}%`}})}),(0,s.jsxs)("p",{className:"mt-2 text-[10px] text-zinc-500 leading-relaxed",children:["Only the first ",20,' rows are analyzed initially. Click "Observe more" to load the next ',20," rows — the analysis re-runs on the accumulated data and the chart updates. This is lazy evaluation: small segment observed first, further observation on request."]})]})]})]})]})]})})})}function S({demoId:e,demoTitle:a,demoBadge:t,demoDescription:n,buildCodeForDataset:i,parseOutput:o}){let{ref:d,inView:c}=(0,_.W)(),{status:m,error:u,output:f,run:x}=(0,w.j)(["numpy","scipy","pandas"]),[y,b]=(0,h.useState)(!1),v=(0,h.useMemo)(()=>{let e=p.map(e=>`
# === ${e.id} ===
${i(e)}
`).join("\n");return`import json
results = []
${e}
print(json.dumps(results))
`},[i]),N=(0,h.useMemo)(()=>{if(!f||"ok"!==m)return null;try{let e=JSON.parse(f);if(!Array.isArray(e))return null;return e.filter(e=>e.chart_type||e.error).map((e,a)=>{if(e.error)return{dataset:e.dataset||p[a]?.id,error:e.error};let t=o(JSON.stringify(e));return{dataset:e.dataset||p[a]?.id,...t}})}catch{return null}},[f,m,o]),S=(0,h.useCallback)(()=>{x(v),b(!0)},[v,x]);return(0,s.jsxs)("div",{ref:d,className:"rounded-xl border border-zinc-200/10 bg-gradient-to-br from-zinc-900/80 to-zinc-950/80 backdrop-blur-sm overflow-hidden",children:[(0,s.jsx)("div",{className:"pointer-events-none absolute -top-px left-12 right-12 h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent"}),(0,s.jsx)("header",{className:"p-5 pb-3 border-b border-zinc-200/10",children:(0,s.jsxs)("div",{className:"flex items-start justify-between gap-3",children:[(0,s.jsxs)("div",{className:"space-y-1",children:[(0,s.jsxs)("div",{className:"flex items-center gap-2",children:[(0,s.jsx)(l.A,{className:"h-4 w-4 text-emerald-400"}),(0,s.jsx)("h3",{className:"text-base font-semibold text-zinc-100",children:a}),(0,s.jsxs)("span",{className:"text-[10px] px-1.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",children:[t," \xd7 5 datasets"]})]}),(0,s.jsx)("p",{className:"text-xs text-zinc-400 leading-relaxed max-w-2xl",children:n})]}),(0,s.jsx)("button",{type:"button",onClick:S,disabled:!c||"loading"===m,className:"text-xs px-3 py-1.5 rounded-md bg-emerald-500/90 text-white hover:bg-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed",children:"loading"===m?(0,s.jsxs)("span",{className:"flex items-center gap-1.5",children:[(0,s.jsx)(g.A,{className:"h-3 w-3 animate-spin"})," Computing..."]}):y?"Re-run":"Run on all 5"})]})}),(0,s.jsxs)("div",{className:"p-5",children:[u&&(0,s.jsx)("div",{className:"text-xs text-red-400 bg-red-500/10 border border-red-500/20 rounded-md p-3 mb-4 font-mono",children:u}),!y&&"idle"===m&&(0,s.jsxs)("div",{className:"flex flex-col items-center justify-center h-48 text-zinc-500",children:[(0,s.jsx)(l.A,{className:"h-8 w-8 text-zinc-600 mb-2"}),(0,s.jsx)("p",{className:"text-xs",children:'Press "Run on all 5" to fetch + analyze all 5 datasets in one Pyodide session.'}),(0,s.jsx)("p",{className:"text-[10px] text-zinc-600 mt-1",children:"Compares how the same math behaves on different data shapes."})]}),"loading"===m&&(0,s.jsxs)("div",{className:"flex flex-col items-center justify-center h-48 text-zinc-500",children:[(0,s.jsx)(g.A,{className:"h-6 w-6 animate-spin text-emerald-400 mb-2"}),(0,s.jsx)("p",{className:"text-xs",children:"Fetching 5 CSVs + parsing with pandas + analyzing with numpy/scipy..."})]}),N&&(0,s.jsx)("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-4",children:N.map((e,a)=>(0,s.jsxs)(r.P.div,{initial:{opacity:0,y:16},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.3,delay:.05*a},className:"rounded-md border border-zinc-200/10 bg-zinc-950/40 p-3",children:[(0,s.jsxs)("div",{className:"flex items-center justify-between mb-2",children:[(0,s.jsx)("h4",{className:"text-sm font-semibold text-zinc-200",children:p.find(a=>a.id===e.dataset)?.name??e.dataset}),(0,s.jsxs)("span",{className:"text-[10px] text-zinc-500",children:[p.find(a=>a.id===e.dataset)?.rows??"?"," rows"]})]}),e.error?(0,s.jsx)("div",{className:"text-[10px] text-red-400 font-mono p-2 bg-red-500/10 rounded",children:e.error}):e.chart?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"h-48",children:(0,s.jsx)(j.D,{data:e.chart,accent:"#10b981"})}),e.summary&&(0,s.jsx)("p",{className:"text-[10px] text-zinc-500 leading-relaxed mt-2 border-t border-zinc-200/10 pt-2",children:e.summary})]}):(0,s.jsx)("div",{className:"text-[10px] text-zinc-500",children:"No chart output."})]},e.dataset))})]})]})}function C(){return(0,s.jsxs)("div",{className:"min-h-screen bg-background text-foreground",children:[(0,s.jsxs)("header",{className:"relative overflow-hidden border-b border-border/40",children:[(0,s.jsxs)("div",{className:"pointer-events-none absolute inset-0 -z-10",children:[(0,s.jsx)("div",{className:"absolute -top-24 -left-24 h-96 w-96 rounded-full bg-emerald-500/20 blur-3xl"}),(0,s.jsx)("div",{className:"absolute top-0 right-0 h-96 w-96 rounded-full bg-amber-500/15 blur-3xl"}),(0,s.jsx)("div",{className:"absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl"})]}),(0,s.jsxs)("div",{className:"mx-auto max-w-6xl px-4 py-12 sm:py-16",children:[(0,s.jsx)(r.P.div,{initial:{opacity:0,y:16},animate:{opacity:1,y:0},transition:{duration:.6},className:"flex items-center gap-2 mb-6",children:(0,s.jsxs)("span",{className:"inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full bg-zinc-900/60 border border-zinc-200/10 text-zinc-300",children:[(0,s.jsx)(n.A,{className:"h-3 w-3 text-emerald-400"}),"Real public datasets \xb7 fetched live \xb7 analyzed in-browser"]})}),(0,s.jsxs)(r.P.h1,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.05},className:"text-4xl sm:text-5xl font-bold tracking-tight",children:["Dataset ",(0,s.jsx)("span",{className:"text-emerald-500",children:"Playground"})]}),(0,s.jsxs)(r.P.p,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.1},className:"mt-4 max-w-3xl text-muted-foreground leading-relaxed text-base sm:text-lg",children:["Four canonical data-science demos —"," ",(0,s.jsx)("span",{className:"font-mono text-foreground",children:"histogram + KDE"}),","," ",(0,s.jsx)("span",{className:"font-mono text-foreground",children:"linear regression"}),","," ",(0,s.jsx)("span",{className:"font-mono text-foreground",children:"correlation matrix"}),", and"," ",(0,s.jsx)("span",{className:"font-mono text-foreground",children:"PCA 2D projection"})," — running the same Lazy DS pipeline on real public datasets: Fisher Iris, Palmer Penguins, Titanic passengers, Boston Housing, UCI Wine. Same pattern as the Living Equations Playground:"," ",(0,s.jsx)("span",{className:"font-mono text-foreground",children:"math expression"})," → ",(0,s.jsx)("span",{className:"font-mono text-foreground",children:"generated code"})," → ",(0,s.jsx)("span",{className:"font-mono text-foreground",children:"observed output"})," → ",(0,s.jsx)("span",{className:"font-mono text-foreground",children:"zoom + stats + summary"}),". Each card fetches the CSV from a public URL into Pyodide, parses with pandas, analyzes with numpy/scipy, and renders the chart + stats + summary in your browser."]}),(0,s.jsxs)(r.P.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.15},className:"mt-8 grid grid-cols-2 sm:grid-cols-4 gap-2",children:[(0,s.jsx)(k,{label:"demo types",value:"4",sub:"hist \xb7 reg \xb7 corr \xb7 PCA"}),(0,s.jsx)(k,{label:"datasets",value:"5",sub:"Iris \xb7 Penguins \xb7 Titanic \xb7 Boston \xb7 Wine"}),(0,s.jsx)(k,{label:"rows total",value:"2,069",sub:"150+344+891+506+178"}),(0,s.jsx)(k,{label:"backend",value:"0",sub:"all client-side (Pyodide + pandas)"})]}),(0,s.jsx)(r.P.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.4},className:"mt-8 flex justify-center pb-2",children:(0,s.jsxs)("div",{className:"flex flex-col items-center gap-1 text-muted-foreground/60",children:[(0,s.jsx)("span",{className:"text-[10px] uppercase tracking-widest",children:"scroll to load"}),(0,s.jsx)(i.A,{className:"h-3 w-3 animate-bounce"})]})})]})]}),(0,s.jsxs)("main",{className:"mx-auto max-w-6xl px-4 pb-12 space-y-8",children:[f.map((e,a)=>(0,s.jsxs)("section",{className:"space-y-4",children:[(0,s.jsxs)("div",{className:"flex items-start gap-3",children:[(0,s.jsx)("span",{className:"text-2xl font-mono text-emerald-500/40",children:String(a+1).padStart(2,"0")}),(0,s.jsx)("div",{className:"pt-1",children:(0,s.jsxs)("div",{className:"flex items-center gap-2 text-xs text-muted-foreground",children:[(0,s.jsx)(o.A,{className:"h-3 w-3 text-emerald-400"}),(0,s.jsx)("span",{className:"uppercase tracking-wider",children:e.badge})]})})]}),(0,s.jsx)(N,{spec:e})]},e.id)),(0,s.jsxs)("section",{className:"rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-5",children:[(0,s.jsxs)("div",{className:"flex items-center gap-2 mb-3",children:[(0,s.jsx)(l.A,{className:"h-5 w-5 text-emerald-400"}),(0,s.jsx)("h2",{className:"text-lg font-semibold",children:"Compare Datasets — same math, different shapes"})]}),(0,s.jsx)("p",{className:"text-sm text-muted-foreground leading-relaxed max-w-3xl mb-4",children:"Run the same analysis on all 5 datasets simultaneously — see how the distribution shape, regression slope, correlation structure, or PCA separation varies across Iris, Palmer Penguins, Titanic, Boston Housing, and Wine. One Pyodide session fetches all 5 CSVs and runs the analysis in parallel."}),(0,s.jsxs)("div",{className:"space-y-6",children:[(0,s.jsx)(S,{demoId:"compare-histogram",demoTitle:"Compare: Histogram of first numeric column",demoBadge:"Distribution",demoDescription:"Same histogram + KDE applied to the first numeric column of each dataset. Watch how Iris petal_length is tri-modal, Titanic Age is right-skewed, and Boston Housing medv is left-skewed.",buildCodeForDataset:P,parseOutput:e=>A(e,"Histogram")}),(0,s.jsx)(S,{demoId:"compare-correlation",demoTitle:"Compare: Correlation matrix (top 4 numeric features)",demoBadge:"Multivariate",demoDescription:"Same 4\xd74 Pearson r matrix computed on the top 4 numeric features of each dataset. Shows how feature inter-dependence varies — Iris has |r|>0.9 between petal_length and petal_width, Boston Housing has fewer strong pairs.",buildCodeForDataset:z,parseOutput:e=>A(e,"Correlation")}),(0,s.jsx)(S,{demoId:"compare-pca",demoTitle:"Compare: PCA 2D projection (top 4 features)",demoBadge:"Dim. Reduction",demoDescription:"Same PCA on top 4 numeric features of each dataset, colored by group column where available. Iris separates cleanly (3 species), Boston Housing spreads continuously (no real groups).",buildCodeForDataset:M,parseOutput:e=>A(e,"PCA")})]})]}),(0,s.jsxs)("section",{className:"rounded-xl border border-border/60 bg-muted/30 p-6 text-center",children:[(0,s.jsxs)("p",{className:"text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed",children:[(0,s.jsx)(o.A,{className:"inline h-4 w-4 text-emerald-500 mr-1.5 align-text-bottom"}),"Every card fetches a ",(0,s.jsx)("strong",{className:"text-foreground",children:"real public CSV"})," from raw.githubusercontent.com or stooq.com (CORS-enabled), parses it with"," ",(0,s.jsx)("strong",{className:"text-foreground",children:"pandas"})," in Pyodide, analyzes with"," ",(0,s.jsx)("strong",{className:"text-foreground",children:"numpy + scipy"}),", and renders the chart with"," ",(0,s.jsx)("strong",{className:"text-foreground",children:"Recharts"}),". The reader can verify every number against the public source — no synthetic data, no hidden server. Multiple forms of confirmation: math (Layer 1) + code (Layer 2) + chart (Layer 5) + stats (Layer 3) + narrative (Layer 4). If any two layers disagree, something is wrong."]}),(0,s.jsxs)("div",{className:"mt-4 flex items-center justify-center gap-6 text-[11px] text-muted-foreground",children:[(0,s.jsxs)("span",{className:"flex items-center gap-1.5",children:[(0,s.jsx)(d.A,{className:"h-3 w-3 text-amber-400"})," Pyodide v0.26.2"]}),(0,s.jsxs)("span",{className:"flex items-center gap-1.5",children:[(0,s.jsx)(o.A,{className:"h-3 w-3 text-emerald-400"})," pandas + numpy + scipy"]}),(0,s.jsxs)("span",{className:"flex items-center gap-1.5",children:[(0,s.jsx)(c.A,{className:"h-3 w-3 text-violet-400"})," Recharts 2.15"]}),(0,s.jsxs)("span",{className:"flex items-center gap-1.5",children:[(0,s.jsx)(m.A,{className:"h-3 w-3 text-blue-400"})," CORS public URLs"]})]})]})]})]})}function k({label:e,value:a,sub:t}){return(0,s.jsxs)("div",{className:"rounded-lg border border-border/60 bg-muted/30 p-3",children:[(0,s.jsx)("div",{className:"text-[10px] uppercase tracking-wider text-muted-foreground",children:e}),(0,s.jsx)("div",{className:"text-2xl font-semibold mt-1 font-mono",children:a}),(0,s.jsx)("div",{className:"text-[10px] text-muted-foreground mt-0.5",children:t})]})}function P(e){let a=e.numericColumns[0];return`resp = await pyfetch("${e.url}")
csv = await resp.string()
df = pd.read_csv(StringIO(csv))
col = ${JSON.stringify(a)}
xs = df[col].dropna().tolist()
hist, edges = np.histogram(xs, bins=15)
mids = [(edges[i] + edges[i+1]) / 2 for i in range(len(edges) - 1)]
mean, std = float(np.mean(xs)), float(np.std(xs, ddof=1))
results.append({
  "chart_type": "bar",
  "title": f"{col} ({len(xs)} samples)",
  "series": [{"name": "count", "data": [{"x": float(m), "y": int(c)} for m, c in zip(mids, hist)]}],
  "x_label": col, "y_label": "count",
  "stats": [
    {"label": "n", "value": str(len(xs))},
    {"label": "mean", "value": f"{mean:.2f}"},
    {"label": "std", "value": f"{std:.2f}"},
  ],
  "summary": f"{ds.name}: {col} has mean={mean:.2f}, std={std:.2f}, n={len(xs)}. Shape: {"unimodal" if max(hist) / sum(hist) < 0.3 else "peaked"}."
})`}function z(e){let a=e.numericColumns.slice(0,4);return`resp = await pyfetch("${e.url}")
csv = await resp.string()
df = pd.read_csv(StringIO(csv))
cols = ${JSON.stringify(a)}
sub = df[cols].dropna()
M = sub.corr().values.tolist()
cells = []
for i in range(len(cols)):
  for j in range(len(cols)):
    cells.append({"x": j, "y": i, "v": float(M[i][j]), "label": f"r={float(M[i][j]):.2f}"})
strongest = max(((abs(M[i][j]), cols[i], cols[j], M[i][j]) for i in range(len(cols)) for j in range(i+1, len(cols))), default=(0, "?", "?", 0))
results.append({
  "chart_type": "heatmap",
  "title": f"{len(cols)} features (n={sub.shape[0]})",
  "series": [{"name": "r", "data": cells}],
  "x_label": "feature", "y_label": "feature",
  "stats": [
    {"label": "n", "value": str(sub.shape[0])},
    {"label": "strongest", "value": f"{strongest[1]}↔{strongest[2]}", "hint": f"r={strongest[3]:.2f}"},
  ],
  "summary": f"{ds.name}: strongest correlation {strongest[1]}↔{strongest[2]} (r={strongest[3]:.2f}). Multicollinearity risk if |r|>0.7."
})`}function M(e){let a=e.numericColumns.slice(0,4),t=e.groupColumn??null;return`resp = await pyfetch("${e.url}")
csv = await resp.string()
df = pd.read_csv(StringIO(csv))
cols = ${JSON.stringify(a)}
group_col = ${JSON.stringify(t)}
sub = df[cols].dropna()
X = sub.values
mu = X.mean(axis=0)
Xc = X - mu
U, S, Vt = np.linalg.svd(Xc, full_matrices=False)
pc1 = (Xc @ Vt[0]).tolist()
pc2 = (Xc @ Vt[1]).tolist()
total = float(np.sum(S**2))
v1, v2 = float(S[0]**2/total), float(S[1]**2/total)
if group_col and group_col in df.columns:
    groups = df.loc[sub.index, group_col].astype(str).tolist()
else:
    groups = ["all"] * len(pc1)
gp = {}
for g, x, y in zip(groups, pc1, pc2):
    gp.setdefault(g, []).append({"x": float(x), "y": float(y)})
results.append({
  "chart_type": "scatter",
  "title": f"PCA ({len(cols)} features → 2, n={sub.shape[0]})",
  "series": [{"name": str(g), "data": pts} for g, pts in gp.items()],
  "x_label": f"PC1 ({v1*100:.1f}%)", "y_label": f"PC2 ({v2*100:.1f}%)",
  "stats": [
    {"label": "PC1", "value": f"{v1*100:.1f}%"},
    {"label": "PC2", "value": f"{v2*100:.1f}%"},
    {"label": "Σ", "value": f"{(v1+v2)*100:.1f}%"},
  ],
  "summary": f"{ds.name}: PC1+PC2 capture {(v1+v2)*100:.1f}% of variance. {len(gp)} group(s) in plot."
})`}function A(e,a){let t=JSON.parse(e);return{chart:t,stats:(t.stats??[]).map(e=>({label:e.label,value:e.value,hint:e.hint})),summary:t.summary??`${a} computed.`}}}},e=>{e.O(0,[6919,9430,9760,7591,6012,9237,4843,8656,5404,8338,8441,3794,7358],()=>e(e.s=86932)),_N_E=e.O()}]);