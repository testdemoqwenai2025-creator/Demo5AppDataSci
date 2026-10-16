"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[374],{9294:(e,t,a)=>{function s(e){if("number"==typeof e)return!isNaN(e);if("string"==typeof e){let t=e.trim();return""!==t&&!isNaN(Number(t))&&isFinite(Number(t))}return!1}function o(e){if(e instanceof Date)return!isNaN(e.getTime());if("string"==typeof e){let t=e.trim();if(""===t)return!1;if(/^\d{4}-\d{1,2}-\d{1,2}([T ]\d{1,2}:\d{1,2}(:\d{1,2})?)?$/.test(t)||/^\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4}([T ]\d{1,2}:\d{1,2}(:\d{1,2})?)?$/.test(t))return!isNaN(Date.parse(t))}return!1}function r(e){let t=e.columns.slice(0,20),a=t.map(t=>{let a=e.rows.map(e=>e[t]).filter(e=>void 0!==e),r=function(e){let t=e.filter(e=>null!=e&&""!==e);if(0===t.length)return"text";let a=t.slice(0,100),r=a.filter(s).length,n=a.filter(o).length,i=.8*a.length;return n>=i&&n>r?"temporal":r>=i?"numeric":new Set(a.map(e=>String(e))).size<=30?"categorical":"text"}(a),n={name:t,type:r};if("categorical"===r&&(n.cardinality=function(e){let t=new Set;for(let a of e)if(null!=a&&""!==a&&t.add(String(a)),t.size>50)break;return t.size}(a)),"numeric"===r){let e=a.map(e=>"number"==typeof e?e:parseFloat(String(e))).filter(e=>!isNaN(e));e.length>0&&(n.min=Math.min(...e.slice(0,1e3)),n.max=Math.max(...e.slice(0,1e3)))}return n}),r=JSON.stringify(e.rows.slice(0,1e3).map(e=>{let a={};for(let s of t)a[s]=e[s];return a}));return{name:e.name,rowCount:e.rows.length,columns:a,sampleJson:r,columnOrder:t}}function n(e){let t={numeric:0,categorical:0,temporal:0,text:0};for(let a of e.columns)t[a.type]++;let a=`${e.rowCount.toLocaleString()} rows \xd7 ${e.columns.length} columns (${t.numeric} numeric, ${t.categorical} categorical, ${t.temporal} temporal, ${t.text} text)`;return{numericCount:t.numeric,categoricalCount:t.categorical,temporalCount:t.temporal,textCount:t.text,summary:a}}a.d(t,{j:()=>n,o:()=>r})},49345:(e,t,a)=>{a.d(t,{a:()=>l});var s=a(95155),o=a(98500),r=a.n(o),n=a(33024),i=a(85757);function l({topics:e}){return 0===e.length?null:(0,s.jsxs)("div",{className:"rounded-md border border-border/60 bg-muted/20 p-4",children:[(0,s.jsxs)("p",{className:"text-xs font-semibold mb-2 flex items-center gap-1.5",children:[(0,s.jsx)(n.A,{className:"h-3.5 w-3.5 text-primary"})," Related topics — cross-page navigation"]}),(0,s.jsx)("div",{className:"flex flex-wrap gap-2 text-sm",children:e.map((t,a)=>(0,s.jsxs)("span",{className:"flex items-center gap-1",children:[(0,s.jsxs)(r(),{href:(0,i.ZJ)(t.id),className:"text-primary hover:underline",children:["→ ",t.reason]}),a<e.length-1&&(0,s.jsx)("span",{className:"text-muted-foreground",children:"\xb7"})]},t.id))})]})}},60508:(e,t,a)=>{a.d(t,{R:()=>b});var s=a(95155),o=a(12115),r=a(45160),n=a(89239),i=a(66349),l=a(85404),c=a(58381),u=a(79275),d=a(48368),m=a(22164),p=a(86901),f=a(89123),h=a(21628),y=a(98500),g=a.n(y),_=a(85757);function b({pageId:e}){let t=(0,u.C6)(e);return 0===t.length?null:(0,s.jsxs)(c.iv,{title:"Recent research (2023-2025)",description:"Modern papers that extend the math, code, and tools on this page.",icon:(0,s.jsx)(d.A,{className:"h-5 w-5"}),badge:`${t.length} paper${1===t.length?"":"s"}`,badgeVariant:"outline",contentClassName:"space-y-4",children:[t.map((e,t)=>(0,s.jsx)(x,{entry:e},t)),(0,s.jsxs)("p",{className:"text-[11px] text-muted-foreground italic",children:[t.length," paper",1===t.length?"":"s"," mapped to this page. Each shows the key algorithm + expected output (rendered as charts when the code produces JSON). Run the code in-browser via Pyodide."]})]})}function x({entry:e}){let[t,a]=(0,o.useState)(!1),[c,u]=(0,o.useState)(null);return(0,s.jsxs)("div",{className:"rounded-lg border border-border/60 p-4 space-y-3 hover:border-primary/30 transition-colors",children:[(0,s.jsxs)("div",{className:"space-y-1",children:[(0,s.jsxs)("div",{className:"flex items-start justify-between gap-3",children:[(0,s.jsx)("h4",{className:"text-sm font-semibold leading-tight flex-1",children:e.paperTitle}),(0,s.jsx)(r.E,{variant:"outline",className:"text-[10px] shrink-0",children:e.venue})]}),(0,s.jsxs)("p",{className:"text-[11px] text-muted-foreground",children:[e.authors," \xb7 ",e.year]}),e.arxivId&&(0,s.jsxs)("a",{href:`https://arxiv.org/abs/${e.arxivId}`,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-1 text-[11px] text-primary hover:underline",children:[(0,s.jsx)(m.A,{className:"h-3 w-3"}),"arXiv:",e.arxivId]}),e.doi&&!e.arxivId&&(0,s.jsxs)("a",{href:`https://doi.org/${e.doi}`,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-1 text-[11px] text-primary hover:underline",children:[(0,s.jsx)(m.A,{className:"h-3 w-3"}),"DOI:",e.doi]})]}),(0,s.jsx)("p",{className:"text-[12px] text-muted-foreground leading-relaxed",children:e.abstract}),(0,s.jsxs)(n.$,{variant:"outline",size:"sm",onClick:()=>a(!t),className:"h-7 text-[11px] gap-1.5",children:[(0,s.jsx)(p.A,{className:"h-3 w-3"}),t?"Hide expected code":"Show expected code + visualization"]}),t&&(0,s.jsxs)("div",{className:"space-y-2",children:[(0,s.jsx)(i.l,{code:e.expectedCode,buttonLabel:"Run in browser",onOutput:e=>{try{let t=e.indexOf("{"),a=e.lastIndexOf("}");if(t>=0&&a>t){let s=e.substring(t,a+1);u(JSON.parse(s))}}catch{}},hideTextOutput:!!c,compact:!0}),c?(0,s.jsxs)("div",{className:"space-y-2",children:[(0,s.jsxs)("div",{className:"flex items-center gap-1.5",children:[(0,s.jsx)(f.A,{className:"h-3.5 w-3.5 text-primary"}),(0,s.jsx)("p",{className:"text-[10px] uppercase tracking-wider text-muted-foreground",children:"Visualization (rendered from code output)"})]}),(0,s.jsx)(l.D,{data:c,accent:"oklch(0.65 0.18 250)",sourceCode:e.expectedCode})]}):(0,s.jsxs)("div",{className:"rounded-md border border-primary/20 bg-primary/5 p-2.5",children:[(0,s.jsx)("p",{className:"text-[10px] uppercase tracking-wider text-muted-foreground mb-1",children:"Expected output"}),(0,s.jsx)("pre",{className:"text-[11px] font-mono whitespace-pre-wrap leading-relaxed",children:e.expectedOutput})]}),(0,s.jsxs)("div",{className:"rounded-md border border-emerald-500/30 bg-emerald-500/5 p-2.5",children:[(0,s.jsx)("p",{className:"text-[10px] uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-1",children:"Key insight"}),(0,s.jsx)("p",{className:"text-[12px] text-foreground/80 leading-relaxed",children:e.keyInsight})]})]}),(0,s.jsxs)(g(),{href:(0,_.ZJ)("analytics-outputs"),className:"inline-flex items-center gap-1 text-[11px] text-primary hover:underline",children:["See this math visualized on Analytics Outputs ",(0,s.jsx)(h.A,{className:"h-3 w-3"})]})]})}},97136:(e,t,a)=>{function s(e,t){let a=e.columns.filter(e=>"numeric"===e.type).map(e=>e.name);return t?a.slice(0,t):a}function o(e,t){let a=e.columns.filter(e=>"categorical"===e.type&&(e.cardinality??0)>1&&(e.cardinality??0)<=30).map(e=>e.name);return t?a.slice(0,t):a}function r(e){return e.columns.find(e=>"temporal"===e.type)?.name}function n(e,t=4){return e.length<=t?e.join(", "):e.slice(0,t).join(", ")+", …"}function i(e){return Math.min(s(e).length,5)}a.d(t,{Ke:()=>u,g2:()=>c});let l=[{kind:"correlation",title:"Correlation Matrix — the universal similarity measure",applies:e=>s(e,2).length>=2,build:e=>{let t=s(e,8),a=n(t,6);return{id:`user-correlation-${e.name}`,lastVerified:"2026-10",longevity:"versioned",title:`Correlation Matrix — ${t.length} numeric columns in "${e.name}"`,subtitle:"\\rho_{X,Y} = \\frac{\\mathrm{cov}(X, Y)}{\\sigma_X \\, \\sigma_Y} = \\frac{\\mathbb{E}[(X - \\mu_X)(Y - \\mu_Y)]}{\\sigma_X \\sigma_Y}",domains:["Statistics","Data Analysis","Feature Engineering"],accent:"oklch(0.65 0.18 250)",toolBadges:["Pearson","Spearman","pandas.corr"],mathLatex:"\\rho_{X,Y} = \\frac{\\sum_{i=1}^{n}(x_i - \\bar{x})(y_i - \\bar{y})}{\\sqrt{\\sum_{i=1}^{n}(x_i - \\bar{x})^2 \\sum_{i=1}^{n}(y_i - \\bar{y})^2}} \\in [-1, +1]",mathExplanation:`Pearson correlation measures the linear relationship between two variables. Range: [-1, +1] where +1 is perfect positive linear, -1 is perfect negative, 0 is no linear correlation. Applied to ${t.length} numeric columns (${a}) in your dataset "${e.name}". Values > 0.7 or < -0.7 indicate strong correlation — useful for feature selection (drop redundant columns) and detecting multicollinearity (which hurts linear models). Spearman rank correlation (not shown) captures monotonic non-linear relationships.`,mathToCode:[{symbol:"Sample mean",code:"x_bar = df['col'].mean()",explanation:"μ̂ = (1/n) Σ x_i — arithmetic mean. Used as the centering constant."},{symbol:"Sample covariance",code:"cov = ((df - df.mean()) * (df - df.mean()).T).sum() / (n-1)",explanation:"(1/(n-1)) Σ (x_i - x̄)(y_i - ȳ). The numerator of ρ. Bessel's correction (n-1) gives unbiased estimate."},{symbol:"Pearson ρ",code:"rho = df['x'].corr(df['y'])  # pandas one-liner",explanation:"cov / (σ_x \xb7 σ_y). Standardized covariance — dimensionless, scale-invariant. Same formula whether x,y are temperatures in \xb0C or stock returns."},{symbol:"Matrix form",code:"corr_matrix = df.corr()  # NxN symmetric matrix",explanation:"Single pandas call computes all pairwise correlations. Diagonal is 1 (self-correlation). Off-diagonal is ρ between column i and j."},{symbol:"p-value (significance)",code:"from scipy.stats import pearsonr; r, p = pearsonr(x, y)",explanation:"Tests H0: ρ = 0. p < 0.05 → significant. Watch multiple-comparison fallacy when testing N(N-1)/2 pairs — use Bonferroni correction (α/N\xb2)."}],codeTabs:[{lang:"Python",filename:"correlation.py",code:`# Correlation matrix — applied to your uploaded dataset
import pandas as pd
import numpy as np
import json

# Your dataset is loaded as 'df' by the preamble.
# Compute the Pearson correlation matrix.
numeric_cols = [${t.map(e=>`'${e}'`).join(", ")}]
corr_matrix = df[numeric_cols].corr(method='pearson')

# Find the top-5 strongest absolute correlations (excluding diagonal)
pairs = []
for i in range(len(numeric_cols)):
    for j in range(i + 1, len(numeric_cols)):
        rho = corr_matrix.iloc[i, j]
        pairs.append({
            "x": numeric_cols[i],
            "y": numeric_cols[j],
            "rho": round(float(rho), 4),
            "abs_rho": round(abs(float(rho)), 4),
        })
pairs.sort(key=lambda p: p["abs_rho"], reverse=True)
top_pairs = pairs[:5]

# Output as chart spec (heatmap + top-pairs bar chart)
print(json.dumps({
    "chart_type": "bar",
    "title": "Top correlations in your dataset (Pearson ρ)",
    "series": [
        {"name": "ρ", "data": [{"x": f"{p['x']} ↔ {p['y']}", "y": p["rho"]} for p in top_pairs]},
        {"name": "|ρ|", "data": [{"x": f"{p['x']} ↔ {p['y']}", "y": p["abs_rho"]} for p in top_pairs]},
    ],
    "x_label": "column pair", "y_label": "correlation (range -1 to +1)",
    "stats": [
        {"label": "Numeric columns analyzed", "value": str(len(numeric_cols))},
        {"label": "Strongest correlation", "value": f"{top_pairs[0]['x']} ↔ {top_pairs[0]['y']} (ρ={top_pairs[0]['rho']})" if top_pairs else "n/a"},
        {"label": "Multicollinearity risk", "value": "HIGH" if any(p['abs_rho'] > 0.8 for p in top_pairs) else "MODERATE" if any(p['abs_rho'] > 0.6 for p in top_pairs) else "LOW"},
        {"label": "Interpretation", "value": "|ρ| > 0.7 → strong, 0.3-0.7 → moderate, < 0.3 → weak"},
        {"label": "Action", "value": "Drop one of any pair with |ρ| > 0.8 to avoid multicollinearity in linear models"},
        {"label": "Caveat", "value": "Pearson captures only LINEAR correlation. Use Spearman for monotonic non-linear; use mutual information for any dependence."},
    ],
    "summary": f"Computed Pearson correlation matrix on {len(numeric_cols)} numeric columns from your dataset. Top pair: {top_pairs[0]['x']} ↔ {top_pairs[0]['y']} (ρ={top_pairs[0]['rho']}) — {'strong' if top_pairs[0]['abs_rho'] > 0.7 else 'moderate' if top_pairs[0]['abs_rho'] > 0.3 else 'weak'} linear correlation. {sum(1 for p in top_pairs if p['abs_rho'] > 0.8)} pair(s) exceed |ρ|=0.8 → multicollinearity risk for linear models (drop redundant columns).",
}))`},{lang:"Bash",filename:"correlation_usage.sh",code:`# Correlation matrix in production

# 1. pandas (Python) — simplest
#    df.corr()  # Pearson by default
#    df.corr(method='spearman')  # rank correlation
#    df.corr(method='kendall')   # ordinal

# 2. Polars (Rust-backed, 5-50x faster on large frames)
#    pip install polars
#    import polars as pl
#    df_pl = pl.from_pandas(df)
#    corr = df_pl.select(pl.col(numeric_cols)).corr()  # returns DataFrame

# 3. DuckDB (in-process SQL, zero-copy if Arrow-backed)
#    pip install duckdb
#    import duckdb
#    corr_matrix = duckdb.sql("""
#      SELECT corr(\${cols[0]}, \${cols.length > 1 ? cols[1] : cols[0]}) AS rho
#      FROM df
#    """).fetchall()
#    # For full matrix: use CORR with each pair, or unpivot.

# 4. Spark (distributed, billions of rows)
#    from pyspark.sql.functions import corr
#    df_spark.stat.corr("\${cols[0]}", "\${cols.length > 1 ? cols[1] : cols[0]}")

# Production use cases:
# - Feature selection: drop |ρ| > 0.9 columns before training (sklearn VIF)
# - Causal inference: high correlation ≠ causation — confounder may drive both
# - Anomaly detection: low correlation between usually-correlated cols = data issue`}],tools:[{name:"pandas (Python)",functionCall:"df.corr()",notes:`Reference. O(N\xb2) memory for the matrix. Default method='pearson'; pass method='spearman' for rank correlation. Best for < 1M rows.`},{name:"Polars (Rust)",functionCall:"import polars as pl; df_pl.corr()",notes:"5-50x faster than pandas for large frames (Rust + Arrow). Same math, different engine. Best for 1M-1B rows in memory."},{name:"DuckDB (in-process SQL)",functionCall:'import duckdb; duckdb.sql("SELECT corr(a, b) FROM df").fetchall()',notes:"Zero-copy when Arrow-backed. SQL-native. Best when dataset is on disk (Parquet) — streams, doesn't load all into memory."}],toolsInsight:"All three implement the same Pearson formula. pandas is the reference. Polars is faster (Rust + Arrow columnar). DuckDB streams from disk. Same ρ — pick based on dataset size + access pattern.",runnablePreamble:`import pandas as pd, numpy as np, json, io
_USER_DATA_JSON = ${JSON.stringify(e.sampleJson)}
df = pd.DataFrame(json.loads(_USER_DATA_JSON))
`,runnableCode:`# Correlation matrix analysis on your uploaded dataset
import pandas as pd
import numpy as np
import json

numeric_cols = [${t.map(e=>`'${e}'`).join(", ")}]
corr_matrix = df[numeric_cols].corr(method='pearson')

pairs = []
for i in range(len(numeric_cols)):
    for j in range(i + 1, len(numeric_cols)):
        rho = corr_matrix.iloc[i, j]
        if pd.notna(rho):
            pairs.append({
                "x": numeric_cols[i],
                "y": numeric_cols[j],
                "rho": round(float(rho), 4),
                "abs_rho": round(abs(float(rho)), 4),
            })
pairs.sort(key=lambda p: p["abs_rho"], reverse=True)
top_pairs = pairs[:5]

# Build correlation matrix as heatmap cells
heatmap_cells = []
for i in range(len(numeric_cols)):
    for j in range(len(numeric_cols)):
        heatmap_cells.append({
            "row": i, "col": j,
            "value": round(float(corr_matrix.iloc[i, j]), 4),
        })

print(json.dumps({
    "chart_type": "heatmap",
    "title": f"Correlation matrix heatmap — {len(numeric_cols)} numeric columns",
    "heatmap": {
        "cells": heatmap_cells,
        "rows": len(numeric_cols),
        "cols": len(numeric_cols),
        "row_labels": numeric_cols,
        "col_labels": numeric_cols,
        "vmin": -1, "vmax": 1,
        "colormap": "RdBu",
    },
    "stats": [
        {"label": "Numeric columns", "value": str(len(numeric_cols))},
        {"label": "Pairs analyzed", "value": str(len(pairs))},
        {"label": "Strongest pair", "value": f"{top_pairs[0]['x']} ↔ {top_pairs[0]['y']} (ρ={top_pairs[0]['rho']})" if top_pairs else "n/a"},
        {"label": "Multicollinearity risk", "value": "HIGH (>0.8)" if any(p['abs_rho'] > 0.8 for p in top_pairs) else "MODERATE (>0.6)" if any(p['abs_rho'] > 0.6 for p in top_pairs) else "LOW"},
        {"label": "Interpretation", "value": "|ρ|>0.7 strong, 0.3-0.7 moderate, <0.3 weak"},
    ],
    "summary": f"Analyzed {len(pairs)} column pairs from your dataset. Strongest: {top_pairs[0]['x']} ↔ {top_pairs[0]['y']} (ρ={top_pairs[0]['rho']}). Multicollinearity risk: {'HIGH' if any(p['abs_rho']>0.8 for p in top_pairs) else 'LOW/MODERATE'}.",
}))`,outcomes:[{science:"Statistics",sector:"Feature selection for ML",value:"drop redundant columns to reduce overfitting",error:"Pearson misses non-linear relationships",description:`Pearson correlation is the first pass for feature selection. With ${t.length} numeric columns, the matrix is ${t.length}x${t.length}. Pairs with |ρ| > 0.8 typically indicate one feature is redundant. sklearn's VIF (Variance Inflation Factor) builds on this to detect multicollinearity in regression models.`},{science:"Data Analysis",sector:"Anomaly detection in pipelines",value:"low correlation between usually-correlated columns = data quality issue",error:"correlation ≠ causation — confounder may drive both",description:"When two columns historically correlate at ρ > 0.9 and suddenly drop to ρ < 0.3, it often signals a data pipeline issue (column renamed, units changed, upstream join broke). Great Expectations + correlation checks catch this."},{science:"Feature Engineering",sector:"Multicollinearity in linear models",value:"avoid unstable coefficients in regression",error:"non-linear dependence is invisible to Pearson — use mutual information",description:`Linear regression coefficients become unstable when features are highly correlated (|ρ| > 0.8). Detect via this matrix, drop one column per high-correlation pair, retrain. For tree-based models (XGBoost, RandomForest), multicollinearity is less harmful but interpretability suffers.`}],analysisInsight:`Correlation IS the universal similarity measure. Your ${t.length} numeric columns (${a}) form a ${t.length}x${t.length} correlation matrix. The top pair (revealed in the chart above) shows the strongest linear relationship in your data. Three domains — statistics (feature selection), data engineering (anomaly detection), ML (multicollinearity) — all rely on the same Pearson formula.`,hasChart:!0,insight:`Correlation IS the universal similarity measure. Feature selection, anomaly detection, and multicollinearity all use the same Pearson 1895 math: cov(X,Y)/(σ_X σ_Y).`,citations:["Pearson, K. (1895). Notes on regression and inheritance in the case of two parents. Proc. R. Soc. London 58.","Spearman, C. (1904). The Proof and Measurement of Association between Two Things. Am. J. Psychol. 15(1).","Farrar, D. E. & Glauber, R. R. (1967). Multicollinearity in Regression Analysis. Rev. Econ. Stat. 49(1)."]}}},{kind:"distribution",title:"Distribution & Skewness — the universal shape descriptor",applies:e=>s(e,1).length>=1,build:e=>{let t=s(e,4),a=n(t,3);return{id:`user-distribution-${e.name}`,lastVerified:"2026-10",longevity:"versioned",title:`Distribution & Skewness — ${t.length} numeric columns in "${e.name}"`,subtitle:"\\text{skew} = \\frac{\\mathbb{E}[(X - \\mu)^3]}{\\sigma^3}, \\quad \\text{kurt} = \\frac{\\mathbb{E}[(X - \\mu)^4]}{\\sigma^4} - 3",domains:["Statistics","Data Quality","Risk Modeling"],accent:"oklch(0.65 0.18 280)",toolBadges:["Skewness","Kurtosis","Histogram"],mathLatex:"\\text{skew}(X) = \\frac{\\tfrac{1}{n} \\sum_{i=1}^{n}(x_i - \\bar{x})^3}{\\left(\\sqrt{\\tfrac{1}{n} \\sum_{i=1}^{n}(x_i - \\bar{x})^2}\\right)^3}, \\quad \\text{skew} > 0 \\text{ (right-tail)}, < 0 \\text{ (left-tail)}, = 0 \\text{ (symmetric)}",mathExplanation:`Skewness measures the asymmetry of a distribution. Right-skewed (skew > 0) means a long tail to the right (common for income, prices, response times). Left-skewed (skew < 0) means a long tail to the left (less common — sometimes failure times, age at death in developed countries). Symmetric (skew ≈ 0) = normal-like. Kurtosis (excess) measures tail-heaviness: > 0 means heavier tails than normal (more outliers), < 0 means lighter. Applied to ${t.length} numeric columns (${a}) in your dataset. Skew > 1 or < -1 suggests a log transform may help for linear models. Heavy-tailed data (kurtosis > 3) needs robust statistics (median, IQR) over mean/std.`,mathToCode:[{symbol:"Sample mean",code:"mu = df['col'].mean()",explanation:"μ̂ — center of the distribution. Sensitive to outliers (median is more robust)."},{symbol:"Sample std",code:"sigma = df['col'].std()",explanation:"σ̂ — spread. Square root of variance. Also outlier-sensitive."},{symbol:"Skewness",code:"skew = ((df['col'] - mu) ** 3).mean() / sigma**3",explanation:"3rd standardized moment. Asymmetry. pandas: df['col'].skew(). Scipy: stats.skew()."},{symbol:"Kurtosis (excess)",code:"kurt = ((df['col'] - mu) ** 4).mean() / sigma**4 - 3",explanation:"4th standardized moment minus 3 (so normal=0). Tail weight. pandas: df['col'].kurt(). Positive = heavy-tailed."},{symbol:"Quantiles",code:"q1, q3 = df['col'].quantile([0.25, 0.75])",explanation:"Robust alternatives to mean/std. IQR = q3 - q1. Outlier-resistant."}],codeTabs:[{lang:"Python",filename:"distribution.py",code:`# Distribution analysis — applied to your uploaded dataset
import pandas as pd
import numpy as np
import json

numeric_cols = [${t.map(e=>`'${e}'`).join(", ")}]

results = []
for col in numeric_cols:
    s = df[col].dropna()
    if len(s) == 0:
        continue
    mu = s.mean()
    sigma = s.std()
    skew = s.skew()
    kurt = s.kurtosis()  # excess kurtosis (Fisher's definition; normal = 0)
    q1 = s.quantile(0.25)
    q3 = s.quantile(0.75)
    iqr = q3 - q1
    # Outlier count via IQR method
    lower = q1 - 1.5 * iqr
    upper = q3 + 1.5 * iqr
    outliers = ((s < lower) | (s > upper)).sum()
    outlier_pct = round(100 * outliers / len(s), 2)
    # Recommend transform
    if abs(skew) > 1:
        recommendation = "log1p or Box-Cox transform recommended (|skew|>1)"
    elif abs(skew) > 0.5:
        recommendation = "moderate skew — consider transform for linear models"
    else:
        recommendation = "approximately symmetric — no transform needed"
    results.append({
        "column": col,
        "mean": round(float(mu), 4),
        "std": round(float(sigma), 4),
        "skew": round(float(skew), 4),
        "kurtosis": round(float(kurt), 4),
        "min": round(float(s.min()), 4),
        "q1": round(float(q1), 4),
        "median": round(float(s.median()), 4),
        "q3": round(float(q3), 4),
        "max": round(float(s.max()), 4),
        "iqr": round(float(iqr), 4),
        "outliers": int(outliers),
        "outlier_pct": outlier_pct,
        "recommendation": recommendation,
    })

print(json.dumps({
    "chart_type": "bar",
    "title": "Skewness per numeric column in your dataset",
    "series": [
        {"name": "Skewness", "data": [{"x": r["column"], "y": r["skew"]} for r in results]},
        {"name": "Excess kurtosis", "data": [{"x": r["column"], "y": r["kurtosis"]} for r in results]},
    ],
    "x_label": "column", "y_label": "value (0 = normal-like)",
    "stats": [
        {"label": "Columns analyzed", "value": str(len(results))},
        {"label": "Most skewed column", "value": max(results, key=lambda r: abs(r["skew"]))["column"] if results else "n/a"},
        {"label": "Heavy-tailed (kurtosis > 3)", "value": str(sum(1 for r in results if r["kurtosis"] > 3))},
        {"label": "Outliers detected (IQR method)", "value": str(sum(r["outliers"] for r in results))},
        {"label": "Interpretation", "value": "|skew|>1 → log transform recommended; kurtosis>3 → use robust stats (median/IQR)"},
    ],
    "summary": f"Analyzed distribution of {len(results)} numeric columns. {sum(1 for r in results if abs(r['skew'])>1)} column(s) have |skew|>1 (recommend log1p/Box-Cox transform). {sum(1 for r in results if r['kurtosis']>3)} column(s) are heavy-tailed (kurtosis>3, excess). Total IQR-method outliers: {sum(r['outliers'] for r in results)}.",
}))`},{lang:"Bash",filename:"distribution_usage.sh",code:`# Distribution analysis in production

# 1. pandas — skew, kurtosis, quantiles (one-liner per column)
#    df['col'].skew()        # 3rd standardized moment
#    df['col'].kurtosis()    # 4th standardized moment (excess, Fisher's)
#    df['col'].describe()    # min, q1, median, q3, max, mean, std

# 2. scipy.stats — full statistical toolkit
#    from scipy import stats
#    stats.skew(x), stats.kurtosis(x)  # Fisher's by default
#    stats.shapiro(x)   # normality test (H0: x is normal)
#    stats.normaltest(x)  # D'Agostino's K\xb2 test (better for n>5000)
#    stats.boxcox(x)    # Box-Cox power transform (requires x > 0)

# 3. Plotting — matplotlib + seaborn
#    import seaborn as sns
#    sns.histplot(df['col'], kde=True)   # histogram + KDE
#    sns.boxplot(df['col'])              # boxplot shows IQR + outliers
#    sns.violinplot(df['col'])           # KDE mirrored — shows density shape

# Production use cases:
# - Data quality: alert when skew/kurtosis drifts > 50% from baseline
# - Feature engineering: log1p transform columns with skew > 1 before training
# - Anomaly detection: heavy-tailed columns (kurt > 3) → use median + IQR
# - Risk modeling: financial returns have fat tails — kurt > 5 is common`}],tools:[{name:"pandas",functionCall:"df['col'].skew(); df['col'].kurtosis(); df['col'].describe()",notes:"Reference. Skewness (Fisher-Pearson), kurtosis (excess, Fisher's). Single-pass describe() gives min/q1/median/q3/max + count + mean + std. Best for in-memory datasets."},{name:"scipy.stats",functionCall:"from scipy import stats; stats.skew(x); stats.kurtosis(x); stats.shapiro(x)",notes:"Full statistical toolkit. Shapiro-Wilk normality test (n<5000), D'Agostino K\xb2 (n>5000), Box-Cox transform. Use for hypothesis testing + transforms."},{name:"Polars",functionCall:"import polars as pl; df_pl.select(pl.col('col').skew(), pl.col('col').kurtosis())",notes:"Rust-backed. Same formulas. 5-50x faster than pandas on large frames. Streaming for out-of-core."}],toolsInsight:"All three compute the same 3rd/4th standardized moments. pandas is the reference. scipy.stats adds hypothesis tests + transforms. Polars is the fast path for large data.",runnablePreamble:`import pandas as pd, numpy as np, json, io
_USER_DATA_JSON = ${JSON.stringify(e.sampleJson)}
df = pd.DataFrame(json.loads(_USER_DATA_JSON))
`,runnableCode:`# Distribution analysis on your uploaded dataset
import pandas as pd
import numpy as np
import json

numeric_cols = [${t.map(e=>`'${e}'`).join(", ")}]
results = []
for col in numeric_cols:
    s = df[col].dropna()
    if len(s) == 0:
        continue
    mu = s.mean()
    sigma = s.std()
    skew = s.skew()
    kurt = s.kurtosis()
    q1 = s.quantile(0.25); q3 = s.quantile(0.75)
    iqr = q3 - q1
    lower = q1 - 1.5 * iqr; upper = q3 + 1.5 * iqr
    outliers = ((s < lower) | (s > upper)).sum()
    results.append({
        "column": col, "skew": round(float(skew), 4), "kurtosis": round(float(kurt), 4),
        "iqr": round(float(iqr), 4), "outliers": int(outliers),
        "recommendation": "log1p transform" if abs(skew) > 1 else "no transform",
    })

print(json.dumps({
    "chart_type": "histogram",
    "title": f"Distribution histograms — {len(results)} numeric columns (binned)",
    "series": [
        {"name": r["column"], "data": [
            {"x": f"{round(float(bin_edge), 2)}", "y": int(count)}
            for bin_edge, count in zip(
                np.histogram(df[r["column"]].dropna(), bins=15)[1][:-1],
                np.histogram(df[r["column"]].dropna(), bins=15)[0]
            )
        ]}
        for r in results[:4]  # max 4 columns overlaid
    ],
    "x_label": "value (binned)", "y_label": "count",
    "stats": [
        {"label": "Columns analyzed", "value": str(len(results))},
        {"label": "Columns with |skew|>1", "value": str(sum(1 for r in results if abs(r['skew'])>1))},
        {"label": "Heavy-tailed (kurt>3)", "value": str(sum(1 for r in results if r['kurtosis']>3))},
        {"label": "Total outliers (IQR)", "value": str(sum(r['outliers'] for r in results))},
    ],
    "summary": f"Analyzed {len(results)} numeric columns. Skew flagged {sum(1 for r in results if abs(r['skew'])>1)} column(s) for log transform. Kurtosis flagged {sum(1 for r in results if r['kurtosis']>3)} heavy-tailed column(s). Histograms show {min(4, len(results))} columns binned into 15 bins each.",
}))`,outcomes:[{science:"Statistics",sector:"Feature preprocessing for ML",value:"log1p transform right-skewed columns before linear models",error:"transform may not help tree-based models (RandomForest, XGBoost)",description:`Linear models (logistic regression, SVM, NN) assume Gaussian-distributed features. Skew > 1 violates this — apply np.log1p() (log(1+x), safe for zeros). Box-Cox is more flexible (requires x > 0). Tree-based models are invariant to monotonic transforms, so skew matters less.`},{science:"Data Quality",sector:"Distribution drift detection",value:"alert when skew/kurtosis shifts > 50% from baseline",error:"small samples give unstable skew estimates — use bootstrap CI",description:"Production pipelines track distribution stats as data quality signals. If skewness of a column drifts from 0.5 (baseline) to 2.0 (sudden), it signals upstream data corruption — column renamed, units changed, or sampling bias. Great Expectations + whylogs log these stats per batch."},{science:"Risk Modeling",sector:"Financial returns + tail risk",value:"heavy-tailed distributions (kurtosis > 5) → use median + IQR, VaR via historical simulation",error:"Gaussian assumption underestimates tail risk by 10-100x for fat-tailed data",description:"Financial returns have kurtosis 5-30 (vs normal's 0). The 2008 crisis was partly a failure of Gaussian risk models. For heavy-tailed data: use median (not mean), IQR (not std), and historical VaR (not parametric VaR). Mandelbrot's \"wild vs mild randomness\" distinction."}],analysisInsight:`Distribution shape IS the universal data descriptor. ML preprocessing (log transform), data quality monitoring (drift detection), and risk modeling (heavy tails) all rely on the same 3rd/4th standardized moments: skewness and kurtosis. Your ${t.length} numeric columns reveal ${a} — apply log1p where |skew|>1, use robust stats where kurtosis>3.`,hasChart:!0,insight:"Distribution shape IS the universal data descriptor. ML preprocessing, data quality monitoring, and risk modeling all use the same Fisher 1929 math: 3rd/4th standardized moments.",citations:["Fisher, R. A. (1929). Moments and Product Moments of Sample Distributions. Proc. R. Soc. Edinburgh 50.","Box, G. E. P. & Cox, D. R. (1964). An Analysis of Transformations. J. R. Stat. Soc. B 26(2).","Mandelbrot, B. (1963). The Variation of Certain Speculative Prices. J. Bus. 36(4)."]}}},{kind:"pca",title:"PCA / Variance Explained — the universal dimensionality reducer",applies:e=>s(e,3).length>=3,build:e=>{let t=s(e,10),a=n(t,5);return{id:`user-pca-${e.name}`,lastVerified:"2026-10",longevity:"versioned",title:`PCA / Variance Explained — ${t.length} numeric columns in "${e.name}"`,subtitle:"\\Sigma = \\frac{1}{n} X^\\top X = V \\Lambda V^\\top, \\quad \\text{PC}_k = X v_k",domains:["Linear Algebra","Dimensionality Reduction","Visualization"],accent:"oklch(0.65 0.18 100)",toolBadges:["SVD","PCA","scikit-learn"],mathLatex:"X = U \\Sigma V^\\top \\quad \\text{(SVD)}, \\quad \\text{PC}_k = X v_k, \\quad \\text{variance explained}_k = \\frac{\\sigma_k^2}{\\sum_j \\sigma_j^2}",mathExplanation:`Principal Component Analysis (Pearson 1901, Hotelling 1933) finds orthogonal directions of maximum variance. Via SVD: X = UΣV^T, the columns of V (right singular vectors) are the principal components. The singular values σ_k give the standard deviation along each PC. Variance explained = σ_k\xb2 / Σ σ_j\xb2. For your ${t.length} numeric columns (${a}), PCA produces ${Math.min(t.length,10)} PCs. The scree plot shows how many PCs you need to capture 95% of variance — typically 2-5 PCs explain most of the structure. Standardize (z-score) before PCA if columns have different scales (σ_X ≠ σ_Y), else high-variance columns dominate.`,mathToCode:[{symbol:"Standardize",code:"X_std = (X - X.mean()) / X.std()",explanation:"z-score each column so scale doesn't dominate. Critical when columns have different units (e.g. age vs income)."},{symbol:"Covariance matrix",code:"Sigma = (X_std.T @ X_std) / (n - 1)  # N\xd7N symmetric",explanation:"Pearson covariance. PCA eigendecomposes this. Equivalent to SVD on standardized X."},{symbol:"Eigendecomposition",code:"eigenvalues, eigenvectors = np.linalg.eigh(Sigma)",explanation:"Σ = V Λ V^T. Eigenvalues = variance along each PC. Sorted descending: PC1 has largest variance."},{symbol:"SVD (preferred)",code:"U, s, Vt = np.linalg.svd(X_std, full_matrices=False)",explanation:"X = U Σ V^T. s = singular values = sqrt(eigenvalues). V columns = principal components. Numerically more stable than eigh."},{symbol:"Variance explained",code:"var_explained = s**2 / (s**2).sum()",explanation:"σ_k\xb2 / Σ σ_j\xb2. Cumulative sum tells you how many PCs for 95% variance. Rule of thumb: keep PCs until cumulative ≥ 0.95."}],codeTabs:[{lang:"Python",filename:"pca.py",code:`# PCA — applied to your uploaded dataset
import pandas as pd
import numpy as np
import json
from numpy.linalg import svd

numeric_cols = [${t.map(e=>`'${e}'`).join(", ")}]
X = df[numeric_cols].dropna().values.astype(float)
n, p = X.shape

# Standardize (z-score)
mu = X.mean(axis=0)
sigma = X.std(axis=0)
sigma[sigma == 0] = 1.0  # avoid divide-by-zero on constant columns
X_std = (X - mu) / sigma

# SVD — numerically stable
U, s, Vt = svd(X_std, full_matrices=False)

# Variance explained per PC
var_explained = (s ** 2) / (s ** 2).sum()
cum_var = np.cumsum(var_explained)

# Number of PCs for 95% variance
n_95 = int(np.searchsorted(cum_var, 0.95) + 1)

# Top contributing features for PC1, PC2
pc1_loadings = Vt[0]
pc2_loadings = Vt[1]
feature_contrib = list(zip(numeric_cols, pc1_loadings.tolist(), pc2_loadings.tolist()))
feature_contrib.sort(key=lambda f: abs(f[1]), reverse=True)

print(json.dumps({
    "chart_type": "bar",
    "title": "PCA: variance explained per principal component",
    "series": [
        {"name": "Individual variance", "data": [{"x": f"PC{i+1}", "y": round(float(var_explained[i]), 4)} for i in range(min(p, 10))]},
        {"name": "Cumulative variance", "data": [{"x": f"PC{i+1}", "y": round(float(cum_var[i]), 4)} for i in range(min(p, 10))]},
    ],
    "x_label": "principal component", "y_label": "proportion of variance (0-1)",
    "stats": [
        {"label": "Numeric columns", "value": str(p)},
        {"label": "Rows (after dropna)", "value": str(n)},
        {"label": "PCs for 95% variance", "value": str(n_95)},
        {"label": "PC1 variance", "value": f"{var_explained[0]*100:.1f}%"},
        {"label": "PC2 variance", "value": f"{var_explained[1]*100:.1f}%" if p > 1 else "n/a"},
        {"label": "Top PC1 feature", "value": f"{feature_contrib[0][0]} (loading={round(feature_contrib[0][1], 4)})"},
        {"label": "Interpretation", "value": f"{n_95} PC(s) capture 95% of variance — can reduce from {p} to {n_95} dimensions"},
    ],
    "summary": f"PCA on {p} numeric columns ({n} rows). PC1 explains {var_explained[0]*100:.1f}% of variance. Need {n_95} PC(s) for 95% cumulative variance — potential dimensionality reduction from {p} to {n_95} (ratio {round(n_95/p, 2)}). Top PC1 loading: {feature_contrib[0][0]} ({round(feature_contrib[0][1], 3)}).",
}))`},{lang:"Bash",filename:"pca_usage.sh",code:`# PCA in production

# 1. scikit-learn — production-grade
#    from sklearn.decomposition import PCA
#    pca = PCA(n_components=0.95)  # auto-pick n for 95% variance
#    X_pca = pca.fit_transform(X_std)
#    print(pca.explained_variance_ratio_)  # per PC
#    print(pca.components_)  # V (loadings)

# 2. NumPy SVD — manual, full control
#    U, s, Vt = np.linalg.svd(X_std, full_matrices=False)
#    X_pca = U @ np.diag(s)  # equivalent to X_std @ Vt.T

# 3. Truncated SVD (sparse-friendly) — for text/tfidf matrices
#    from sklearn.decomposition import TruncatedSVD
#    svd = TruncatedSVD(n_components=100)
#    X_svd = svd.fit_transform(tfidf_matrix)

# 4. Incremental PCA — for datasets too big to fit in memory
#    from sklearn.decomposition import IncrementalPCA
#    ipca = IncrementalPCA(n_components=10, batch_size=1000)
#    X_ipca = ipca.fit_transform(big_X)

# Production use cases:
# - 2D visualization: project to PC1, PC2 → scatter plot
# - Feature compression: keep top-N PCs as new features for downstream ML
# - Anomaly detection: reconstruction error in low-rank subspace
# - Multicollinearity fix: PCA features are orthogonal by construction`}],tools:[{name:"scikit-learn (Python)",functionCall:"from sklearn.decomposition import PCA; X_pca = PCA(n_components=0.95).fit_transform(X_std)",notes:"Reference. Auto-picks n_components for target variance. IncrementalPCA for out-of-core. TruncatedSVD for sparse matrices."},{name:"NumPy SVD (manual)",functionCall:"U, s, Vt = np.linalg.svd(X_std, full_matrices=False)",notes:"Full control. Same math (SVD on standardized X). Use when you need loadings (V) or want custom post-processing."},{name:"PyTorch SVD (GPU)",functionCall:"U, s, Vt = torch.linalg.svd(X_std)",notes:"GPU-accelerated. For matrices > 10k x 10k, GPU SVD is 10-100x faster than NumPy. Same formula."}],toolsInsight:"All three implement SVD on the standardized matrix. sklearn wraps it with auto-component selection. NumPy gives raw SVD. PyTorch runs on GPU. Same variance-explained formula: σ_k\xb2 / Σ σ_j\xb2.",runnablePreamble:`import pandas as pd, numpy as np, json, io
from numpy.linalg import svd
_USER_DATA_JSON = ${JSON.stringify(e.sampleJson)}
df = pd.DataFrame(json.loads(_USER_DATA_JSON))
`,runnableCode:`# PCA on your uploaded dataset
import pandas as pd
import numpy as np
import json
from numpy.linalg import svd

numeric_cols = [${t.map(e=>`'${e}'`).join(", ")}]
X = df[numeric_cols].dropna().values.astype(float)
n, p = X.shape
mu = X.mean(axis=0)
sigma = X.std(axis=0)
sigma[sigma == 0] = 1.0
X_std = (X - mu) / sigma
U, s, Vt = svd(X_std, full_matrices=False)
var_explained = (s ** 2) / (s ** 2).sum()
cum_var = np.cumsum(var_explained)
n_95 = int(np.searchsorted(cum_var, 0.95) + 1)

print(json.dumps({
    "chart_type": "bar",
    "title": "PCA: variance explained per principal component",
    "series": [
        {"name": "Individual variance", "data": [{"x": f"PC{i+1}", "y": round(float(var_explained[i]), 4)} for i in range(min(p, 10))]},
        {"name": "Cumulative variance", "data": [{"x": f"PC{i+1}", "y": round(float(cum_var[i]), 4)} for i in range(min(p, 10))]},
    ],
    "x_label": "principal component", "y_label": "proportion of variance (0-1)",
    "stats": [
        {"label": "Numeric columns", "value": str(p)},
        {"label": "PCs for 95% variance", "value": str(n_95)},
        {"label": "PC1 variance %", "value": f"{var_explained[0]*100:.1f}%"},
        {"label": "Top PC1 loading", "value": numeric_cols[np.argmax(np.abs(Vt[0]))]},
    ],
    "summary": f"PCA on {p} numeric columns. PC1 explains {var_explained[0]*100:.1f}%. Need {n_95} PC(s) for 95% cumulative variance (potential reduction {p}→{n_95}).",
}))`,outcomes:[{science:"Linear Algebra",sector:"2D visualization of high-dim data",value:"project to PC1, PC2 → scatter plot reveals clusters + outliers",error:"PC1/PC2 may not capture the discriminative direction for classification",description:`Your ${t.length}D dataset is hard to visualize. PCA projects to 2D (PC1, PC2) capturing X% of variance — scatter plot reveals natural clusters, outliers, and major axes of variation. Used in genomics (1000s of genes → 2D PCA), image processing (pixel space → eigenfaces), and finance (yield curve factors).`},{science:"Dimensionality Reduction",sector:"Feature compression for ML",value:`${t.length} numeric cols → ${i(e)} PCs for 95% variance`,error:"PCs are linear combos — interpretability is lost vs original features",description:`Linear models + NNs benefit from orthogonal features. PCA guarantees uncorrelated inputs, speeding convergence. Keep top-N PCs (95% variance) as new features. For tree-based models (XGBoost), PCA usually doesn't help — trees handle correlated features natively. Always standardize first.`},{science:"Visualization",sector:"Anomaly detection via reconstruction error",value:"low-rank reconstruction error flags outliers",error:"linear method — misses non-linear anomalies (use IsolationForest or autoencoder)",description:'PCA finds the "normal" low-rank subspace. Points that reconstruct poorly (high residual when projected back) are anomalies. Used in network intrusion detection, fraud detection, image defect detection. Non-linear alternatives: IsolationForest, One-Class SVM, deep autoencoders.'}],analysisInsight:`PCA IS the universal dimensionality reducer. Visualization (2D scatter), feature compression (95% variance in N PCs), and anomaly detection (reconstruction error) all rely on the same SVD: X = UΣV^T. Your ${t.length}-column dataset can reduce to ${i(e)} PCs.`,hasChart:!0,insight:"PCA IS the universal dimensionality reducer. Visualization, feature compression, and anomaly detection all use the same Pearson 1901 / Hotelling 1933 math: SVD on the standardized matrix.",citations:["Pearson, K. (1901). On Lines and Planes of Closest Fit to Systems of Points in Space. Phil. Mag. 2(11).","Hotelling, H. (1933). Analysis of a Complex of Statistical Variables into Principal Components. J. Educ. Psychol. 24(6-7).","Golub, G. & Kahan, W. (1965). Calculating the Singular Values and Pseudo-Inverse of a Matrix. J. SIAM 13(2)."]}}},{kind:"frequency-entropy",title:"Frequency & Entropy — the universal categorical descriptor",applies:e=>o(e,1).length>=1,build:e=>{let t=o(e,4),a=n(t,3);return{id:`user-frequency-entropy-${e.name}`,lastVerified:"2026-10",longevity:"versioned",title:`Frequency & Entropy — ${t.length} categorical columns in "${e.name}"`,subtitle:"H(X) = -\\sum_{i=1}^{K} p_i \\log_2 p_i, \\quad p_i = \\frac{n_i}{n}",domains:["Information Theory","Categorical Analysis","Compression"],accent:"oklch(0.65 0.18 60)",toolBadges:["Entropy","Shannon","value_counts"],mathLatex:"H(X) = -\\sum_{i=1}^{K} p_i \\log_2 p_i \\quad \\text{(bits)}, \\quad \\log_2 K \\geq H(X) \\geq 0, \\quad H = 0 \\text{ if one category dominates}",mathExplanation:`Shannon entropy (1948) measures the uncertainty in a categorical variable. For K categories with probabilities p_i = n_i/n, H = -Σ p_i log₂ p_i. Range: [0, log₂ K]. 0 = perfectly deterministic (one category). log₂ K = uniform. High-entropy columns (H close to log₂ K) carry more information — better for splitting in decision trees. Low-entropy columns (H near 0) are nearly constant — candidate for dropping. Applied to ${t.length} categorical columns (${a}) in your dataset. Each column's value_counts() reveals its distribution; entropy summarizes it in one number.`,mathToCode:[{symbol:"Probabilities",code:"p = df['col'].value_counts(normalize=True)",explanation:"p_i = n_i / n. value_counts(normalize=True) gives the empirical distribution. Sum to 1."},{symbol:"Shannon entropy",code:"H = -sum(p * log2(p))",explanation:"-Σ p_i log₂ p_i. In bits. 0 = deterministic, log₂ K = uniform. scipy.stats.entropy(p, base=2)."},{symbol:"Max entropy",code:"H_max = log2(K)  # uniform distribution",explanation:"Upper bound. K = number of unique categories. Ratio H/H_max = 'relative entropy' or 'efficiency'."},{symbol:"Gini impurity",code:"G = 1 - sum(p_i**2)",explanation:"Alternative impurity measure used in CART decision trees. Range [0, 1-1/K]. Faster to compute than entropy (no log)."},{symbol:"Mode frequency",code:"mode_pct = df['col'].value_counts(normalize=True).iloc[0]",explanation:"Fraction of rows in the most common category. High mode_pct = low diversity = candidate to drop."}],codeTabs:[{lang:"Python",filename:"frequency_entropy.py",code:`# Frequency + entropy analysis — applied to your uploaded dataset
import pandas as pd
import numpy as np
import json
import math

categorical_cols = [${t.map(e=>`'${e}'`).join(", ")}]

results = []
for col in categorical_cols:
    counts = df[col].value_counts(dropna=True)
    if len(counts) == 0:
        continue
    p = counts.values / counts.values.sum()
    H = -np.sum(p * np.log2(p + 1e-12))  # entropy in bits
    H_max = math.log2(len(counts))
    efficiency = H / H_max if H_max > 0 else 0
    mode_pct = float(p[0])
    top5 = counts.head(5)
    results.append({
        "column": col,
        "unique": int(len(counts)),
        "entropy": round(float(H), 4),
        "max_entropy": round(float(H_max), 4),
        "efficiency": round(float(efficiency), 4),
        "mode_pct": round(mode_pct * 100, 2),
        "top5": [{"value": str(idx), "count": int(c), "pct": round(float(c) / counts.values.sum() * 100, 2)} for idx, c in top5.items()],
    })

print(json.dumps({
    "chart_type": "bar",
    "title": "Categorical entropy per column (bits; log2 K = max)",
    "series": [
        {"name": "Entropy H(X)", "data": [{"x": r["column"], "y": r["entropy"]} for r in results]},
        {"name": "Max possible (log2 K)", "data": [{"x": r["column"], "y": r["max_entropy"]} for r in results]},
        {"name": "Mode frequency %", "data": [{"x": r["column"], "y": r["mode_pct"]} for r in results]},
    ],
    "x_label": "column", "y_label": "entropy (bits) / mode %",
    "stats": [
        {"label": "Categorical columns", "value": str(len(results))},
        {"label": "Highest-entropy column", "value": max(results, key=lambda r: r["entropy"])["column"] if results else "n/a"},
        {"label": "Near-constant column (mode_pct>90%)", "value": str(sum(1 for r in results if r["mode_pct"] > 90))},
        {"label": "Action", "value": "Drop columns with mode_pct>95% (no signal). Tree-based models split high-entropy columns first."},
    ],
    "summary": f"Analyzed {len(results)} categorical columns. {sum(1 for r in results if r['mode_pct']>90)} column(s) are near-constant (mode>90%) — candidate for dropping. Top entropy: {max(results, key=lambda r: r['entropy'])['column'] if results else 'n/a'}.",
}))`},{lang:"Bash",filename:"frequency_usage.sh",code:`# Frequency + entropy in production

# 1. pandas — value_counts + manual entropy
#    counts = df['col'].value_counts()
#    p = counts.values / counts.sum()
#    H = -np.sum(p * np.log2(p))

# 2. scipy.stats — entropy function
#    from scipy.stats import entropy
#    H = entropy(counts, base=2)  # Shannon entropy in bits

# 3. scikit-learn — mutual information (entropy between cols)
#    from sklearn.feature_selection import mutual_info_classif
#    mi = mutual_info_classif(X, y)  # bits — useful for feature selection

# Production use cases:
# - Feature selection: drop low-entropy (near-constant) columns
# - Decision tree splitting: high-entropy columns are more discriminative
# - Compression: entropy is the theoretical lower bound on lossless compression
# - Privacy: high-cardinality + high-entropy columns are quasi-identifiers (k-anon risk)`}],tools:[{name:"pandas value_counts",functionCall:"df['col'].value_counts(normalize=True)",notes:"Reference. Returns empirical distribution. Pass normalize=True for probabilities."},{name:"scipy.stats.entropy",functionCall:"from scipy.stats import entropy; H = entropy(counts, base=2)",notes:"Shannon entropy. Default base=e (nats); pass base=2 for bits. Handles zero-probability gracefully."},{name:"scikit-learn mutual_info",functionCall:"from sklearn.feature_selection import mutual_info_classif; mi = mutual_info_classif(X, y)",notes:"Mutual information = entropy(X) - entropy(X|y). For feature selection — high MI features predict y well."}],toolsInsight:"All three compute entropy-like quantities. pandas gives the distribution. scipy.stats.entropy is the formula. sklearn's mutual_info extends to entropy between variables — the feature-selection version.",runnablePreamble:`import pandas as pd, numpy as np, json, io, math
_USER_DATA_JSON = ${JSON.stringify(e.sampleJson)}
df = pd.DataFrame(json.loads(_USER_DATA_JSON))
`,runnableCode:`# Frequency + entropy on your dataset
import pandas as pd, numpy as np, json, math

categorical_cols = [${t.map(e=>`'${e}'`).join(", ")}]
results = []
for col in categorical_cols:
    counts = df[col].value_counts(dropna=True)
    if len(counts) == 0: continue
    p = counts.values / counts.values.sum()
    H = -np.sum(p * np.log2(p + 1e-12))
    H_max = math.log2(len(counts))
    results.append({
        "column": col, "unique": int(len(counts)),
        "entropy": round(float(H), 4), "max_entropy": round(float(H_max), 4),
        "mode_pct": round(float(p[0]) * 100, 2),
    })

print(json.dumps({
    "chart_type": "bar",
    "title": "Categorical entropy per column",
    "series": [
        {"name": "Entropy", "data": [{"x": r["column"], "y": r["entropy"]} for r in results]},
        {"name": "Max (log2 K)", "data": [{"x": r["column"], "y": r["max_entropy"]} for r in results]},
    ],
    "x_label": "column", "y_label": "entropy (bits)",
    "stats": [
        {"label": "Columns analyzed", "value": str(len(results))},
        {"label": "Near-constant (mode>90%)", "value": str(sum(1 for r in results if r["mode_pct"]>90))},
        {"label": "Action", "value": "Drop near-constant columns; high-entropy columns = good tree-split candidates"},
    ],
    "summary": f"Analyzed {len(results)} categorical columns. {sum(1 for r in results if r['mode_pct']>90)} near-constant. Entropy range: {min(r['entropy'] for r in results) if results else 0:.2f}-{max(r['entropy'] for r in results) if results else 0:.2f} bits.",
}))`,outcomes:[{science:"Information Theory",sector:"Feature selection for ML",value:"drop near-constant columns (H ≈ 0) — they carry no signal",error:"entropy is univariate — doesn't measure relationship with target (use mutual information)",description:`A column where 99% of rows have the same value contributes almost no information. Drop columns with mode_pct > 95%. Conversely, high-entropy columns are good candidates for tree-based model splits — they have more discriminative power per node.`},{science:"Categorical Analysis",sector:"Compression (ZIP, gzip)",value:"entropy = theoretical lower bound on lossless compression ratio",error:"real compressors (LZ77, Huffman) don't reach the bound for finite inputs",description:`Shannon's source coding theorem: no lossless compressor can beat H bits per symbol. Your ${a} columns reveal which could compress well — low-entropy columns compress to near 0 bits/symbol. Used in gzip, Brotli, BSC, zstd. Huffman coding + arithmetic coding approach the bound asymptotically.`},{science:"Compression",sector:"Privacy / quasi-identifier detection",value:"high-cardinality + high-entropy columns = quasi-identifiers (re-identification risk)",error:"even low-entropy columns can be re-identifying when combined (combination disclosure)",description:`Columns like ZIP code, birth date, gender are quasi-identifiers — even partial entropy can re-identify individuals in large datasets. HIPAA Safe Harbor requires suppression of these. k-anonymity (Sweeney 2002) groups records so each combination appears at least k times — directly targets the high-entropy columns.`}],analysisInsight:`Entropy IS the universal categorical descriptor. ML feature selection (drop near-constant), compression (theoretical limit), and privacy (quasi-identifier detection) all use Shannon 1948's formula: H = -Σ p log p. Your ${t.length} categorical columns reveal which carry signal.`,hasChart:!0,insight:`Entropy IS the universal categorical descriptor. ML feature selection, compression, and privacy all use Shannon 1948 math: H = -Σ p log p.`,citations:["Shannon, C. E. (1948). A Mathematical Theory of Communication. Bell Syst. Tech. J. 27(3).","Sweeney, L. (2002). k-Anonymity: A Model for Protecting Privacy. Int. J. Uncertain. Quantif. 10(5).","Quinlan, J. R. (1986). Induction of Decision Trees (uses entropy for splitting). Mach. Learn. 1."]}}},{kind:"chi-square",title:"Chi-Square Independence — the universal categorical association",applies:e=>o(e,2).length>=2,build:e=>{let t=o(e,2);return{id:`user-chi-square-${e.name}`,lastVerified:"2026-10",longevity:"versioned",title:`Chi-Square Independence — "${t[0]}" \xd7 "${t[1]}" in "${e.name}"`,subtitle:"\\chi^2 = \\sum_{i,j} \\frac{(O_{ij} - E_{ij})^2}{E_{ij}}, \\quad E_{ij} = \\frac{(\\sum_i O_{ij})(\\sum_j O_{ij})}{n}",domains:["Hypothesis Testing","Categorical Analysis","A/B Testing"],accent:"oklch(0.65 0.18 30)",toolBadges:["χ\xb2","Pearson","scipy.stats"],mathLatex:"\\chi^2 = \\sum_{i=1}^{R}\\sum_{j=1}^{C} \\frac{(O_{ij} - E_{ij})^2}{E_{ij}}, \\quad E_{ij} = \\frac{R_i \\cdot C_j}{n}, \\quad \\text{df} = (R-1)(C-1)",mathExplanation:`Pearson's chi-square test (1900) measures whether two categorical variables are independent. Builds a contingency table (rows = categories of "${t[0]}", cols = categories of "${t[1]}"). Expected count E_ij = (row total \xd7 column total) / n (independence assumption). χ\xb2 = Σ (O-E)\xb2/E. Under H0 (independence), χ\xb2 ~ chi-square with df = (R-1)(C-1). p-value < 0.05 → reject independence → variables are associated. Effect size: Cram\xe9r's V = sqrt(χ\xb2 / (n \xd7 min(R-1, C-1))) — range [0, 1], 0.1=small, 0.3=medium, 0.5=large. Caveats: (1) expected counts should be ≥ 5 in 80%+ of cells (else use Fisher's exact test), (2) large n makes everything "significant" — always report effect size alongside p-value.`,mathToCode:[{symbol:"Contingency table",code:"ct = pd.crosstab(df['x'], df['y'])",explanation:"O_ij matrix of observed counts. pd.crosstab builds the RxC table. Row = category of x, column = category of y."},{symbol:"Expected counts",code:"E = np.outer(ct.sum(axis=1), ct.sum(axis=0)) / ct.values.sum()",explanation:"E_ij = R_i \xd7 C_j / n. The independence-model prediction. Sum to same row/col totals as observed."},{symbol:"Chi-square statistic",code:"chi2 = ((ct - E)**2 / E).values.sum()",explanation:"Σ (O-E)\xb2/E. Sum over all cells. Larger = more deviation from independence."},{symbol:"p-value",code:"from scipy.stats import chi2_contingency; chi2, p, dof, E = chi2_contingency(ct)",explanation:"scipy.stats.chi2_contingency() returns chi2, p, dof, expected array all at once. Use this — handles edge cases. p < 0.05 → reject independence. dof = (R-1)(C-1)."},{symbol:"Cram\xe9r's V (effect size)",code:"V = np.sqrt(chi2 / (n * min(R-1, C-1)))",explanation:"Normalized chi-square in [0, 1]. 0.1=small, 0.3=medium, 0.5=large. Use when n is huge to distinguish practical from statistical significance."}],codeTabs:[{lang:"Python",filename:"chi_square.py",code:`# Chi-square independence test — "${t[0]}" \xd7 "${t[1]}"
import pandas as pd
import numpy as np
import json
from scipy.stats import chi2_contingency

# Build contingency table
ct = pd.crosstab(df[${JSON.stringify(t[0])}], df[${JSON.stringify(t[1])}])
chi2, p_value, dof, expected = chi2_contingency(ct)
n = ct.values.sum()
R, C = ct.shape
cramers_v = np.sqrt(chi2 / (n * min(R - 1, C - 1))) if min(R, C) > 1 else 0.0

# Effect size interpretation
if cramers_v < 0.1:
    effect_label = "negligible"
elif cramers_v < 0.3:
    effect_label = "small"
elif cramers_v < 0.5:
    effect_label = "medium"
else:
    effect_label = "large"

# Check expected counts (Fisher's exact recommended if <5 in many cells)
low_expected = (expected < 5).sum()
total_cells = expected.size
pct_low_expected = round(100 * low_expected / total_cells, 1)
fisher_recommended = pct_low_expected > 20

print(json.dumps({
    "chart_type": "bar",
    "title": f"Contingency table: ${t[0]} \xd7 ${t[1]}",
    "series": [
        {"name": "χ\xb2 statistic", "data": [{"x": "chi2", "y": round(float(chi2), 4)}]},
        {"name": "p-value (log scale)", "data": [{"x": "p", "y": round(float(-np.log10(p_value + 1e-300)), 4)}]},
        {"name": "Cram\xe9r's V (effect size)", "data": [{"x": "V", "y": round(float(cramers_v), 4)}]},
        {"name": "Degrees of freedom", "data": [{"x": "dof", "y": int(dof)}]},
    ],
    "x_label": "metric", "y_label": "value",
    "stats": [
        {"label": "Contingency table size", "value": f"{R}x{C}"},
        {"label": "Total observations (n)", "value": str(int(n))},
        {"label": "χ\xb2 statistic", "value": f"{chi2:.2f}"},
        {"label": "p-value", "value": f"{p_value:.2e}"},
        {"label": "Degrees of freedom", "value": str(int(dof))},
        {"label": "Cram\xe9r's V (effect size)", "value": f"{cramers_v:.4f} ({effect_label})"},
        {"label": "Independence H0", "value": "REJECTED (p<0.05)" if p_value < 0.05 else "FAIL TO REJECT (p≥0.05)"},
        {"label": "Cells with E<5", "value": f"{low_expected}/{total_cells} ({pct_low_expected}%)" + (" → use Fisher's exact" if fisher_recommended else "")},
    ],
    "summary": f"χ\xb2 = {chi2:.2f}, dof = {dof}, p = {p_value:.2e}. Cram\xe9r's V = {cramers_v:.4f} ({effect_label}). Variables are {'ASSOCIATED' if p_value < 0.05 else 'likely INDEPENDENT'}. {pct_low_expected}% of cells have expected count < 5{' — Fisher exact test recommended' if fisher_recommended else ''}.",
}))`},{lang:"Bash",filename:"chi_square_usage.sh",code:`# Chi-square independence in production

# 1. scipy.stats — chi2_contingency (recommended)
#    from scipy.stats import chi2_contingency
#    chi2, p, dof, expected = chi2_contingency(pd.crosstab(df.x, df.y))

# 2. scipy.stats — chi2 (for goodness-of-fit, not independence)
#    from scipy.stats import chisquare
#    chi2, p = chisquare(observed, f_exp=expected)

# 3. Fisher's exact (for 2x2 with small expected counts)
#    from scipy.stats import fisher_exact
#    odds_ratio, p = fisher_exact(pd.crosstab(df.x, df.y))

# 4. statsmodels — log-linear models (for >2 categorical variables)
#    import statsmodels.api as sm
#    # Log-linear models extend chi-square to 3+ variables

# Production use cases:
# - A/B testing: conversion rate treatment vs control (2x2 chi-square)
# - Market basket: which product categories co-occur (itemset chi-square)
# - Survey analysis: demographic \xd7 response independence
# - Feature selection: high chi-square features → good for Naive Bayes`}],tools:[{name:"scipy.stats.chi2_contingency",functionCall:"from scipy.stats import chi2_contingency; chi2, p, dof, E = chi2_contingency(ct)",notes:"Reference. Returns chi2, p, dof, expected array. Handles RxC tables. Use for any categorical \xd7 categorical independence test."},{name:"scipy.stats.fisher_exact",functionCall:"from scipy.stats import fisher_exact; odds, p = fisher_exact(ct_2x2)",notes:"Exact test for 2x2 tables with small expected counts (< 5 in any cell). Slower than chi-square (factorial complexity) but more accurate for sparse tables."},{name:"statsmodels Logit",functionCall:"import statsmodels.api as sm; model = sm.Logit(y, X).fit()",notes:"Logistic regression — generalizes chi-square to >2 variables + continuous covariates. Use when you need to control for confounders."}],toolsInsight:"All three test categorical independence. chi2_contingency is the workhorse. Fisher's exact for small samples. Logit for multivariate. Same null hypothesis: H0: variables independent.",runnablePreamble:`import pandas as pd, numpy as np, json, io
from scipy.stats import chi2_contingency
_USER_DATA_JSON = ${JSON.stringify(e.sampleJson)}
df = pd.DataFrame(json.loads(_USER_DATA_JSON))
`,runnableCode:`# Chi-square on "${t[0]}" \xd7 "${t[1]}"
import pandas as pd, numpy as np, json
from scipy.stats import chi2_contingency

ct = pd.crosstab(df[${JSON.stringify(t[0])}], df[${JSON.stringify(t[1])}])
chi2, p_value, dof, expected = chi2_contingency(ct)
n = ct.values.sum()
R, C = ct.shape
cramers_v = float(np.sqrt(chi2 / (n * min(R-1, C-1)))) if min(R, C) > 1 else 0.0

print(json.dumps({
    "chart_type": "bar",
    "title": "Chi-square test of independence",
    "series": [
        {"name": "χ\xb2", "data": [{"x": "statistic", "y": round(float(chi2), 4)}]},
        {"name": "Cram\xe9r's V", "data": [{"x": "effect", "y": round(cramers_v, 4)}]},
        {"name": "dof", "data": [{"x": "dof", "y": int(dof)}]},
    ],
    "x_label": "metric", "y_label": "value",
    "stats": [
        {"label": "n", "value": str(int(n))},
        {"label": "Table size", "value": f"{R}x{C}"},
        {"label": "χ\xb2", "value": f"{chi2:.2f}"},
        {"label": "p-value", "value": f"{p_value:.2e}"},
        {"label": "Cram\xe9r's V", "value": f"{cramers_v:.4f}"},
        {"label": "Result", "value": "ASSOCIATED (reject H0)" if p_value < 0.05 else "INDEPENDENT (fail to reject H0)"},
    ],
    "summary": f"χ\xb2={chi2:.2f}, dof={dof}, p={p_value:.2e}, V={cramers_v:.4f}. {'Variables are associated.' if p_value < 0.05 else 'Variables appear independent.'}",
}))`,outcomes:[{science:"Hypothesis Testing",sector:"A/B testing conversion rates",value:"treatment vs control conversion = 2x2 chi-square test",error:"large samples make trivial differences 'significant' — always check effect size",description:`Classic A/B test: 2x2 contingency table (treatment/control \xd7 converted/not). Chi-square tells you if the conversion difference is statistically significant. With ${e.rowCount} rows, even small differences may show p<0.05 — always report the lift (effect size) alongside p-value. Cram\xe9r's V for 2x2 reduces to |φ| (phi coefficient).`},{science:"Categorical Analysis",sector:"Market basket co-occurrence",value:"which product categories tend to be bought together",error:"spurious correlations from confounders (seasonality, promotions)",description:`Retailers use chi-square on (product A bought) \xd7 (product B bought) to find associations. Categories with high Cram\xe9r's V are "lift" candidates — display them together. Apriori and FP-growth algorithms operationalize this for transaction mining. Same chi-square test, applied to each item pair.`},{science:"A/B Testing",sector:"Survey response bias detection",value:"demographic \xd7 response independence — detect biased samples",error:"non-response bias: who didn't answer may matter more than who did",description:`If you survey customers, chi-square on (demographic group) \xd7 (response) tells you if responses are independent of demographics. Rejecting independence = your sample is biased (e.g. younger users respond more positively). Weight post-stratification to correct. Critical for political polling.`}],analysisInsight:`Chi-square IS the universal categorical association test. A/B testing, market basket, and survey bias all use Pearson 1900's formula: Σ (O-E)\xb2/E. Your "${t[0]}" \xd7 "${t[1]}" test reveals whether they're associated (Cram\xe9r's V = effect size).`,hasChart:!0,insight:`Chi-square IS the universal categorical association test. A/B testing, market basket, and survey bias all use Pearson 1900 math: Σ (O-E)\xb2/E.`,citations:["Pearson, K. (1900). On the Criterion that a Given System of Deviations from the Probable. Phil. Mag. 50.","Fisher, R. A. (1922). On the Interpretation of χ\xb2 from Contingency Tables. J. R. Stat. Soc. 85(1).","Cram\xe9r, H. (1946). Mathematical Methods of Statistics. Princeton University Press."]}}},{kind:"trend-seasonality",title:"Trend & Seasonality — the universal time-series decomposition",applies:e=>!!r(e)&&s(e,1).length>=1,build:e=>{let t=r(e),a=s(e,1)[0];return{id:`user-trend-${e.name}`,lastVerified:"2026-10",longevity:"versioned",title:`Trend & Seasonality — "${a}" over "${t}" in "${e.name}"`,subtitle:"y_t = T_t + S_t + R_t, \\quad \\hat{\\beta}_1 = \\frac{\\sum (t - \\bar{t})(y - \\bar{y})}{\\sum (t - \\bar{t})^2}",domains:["Time Series","Forecasting","Signal Processing"],accent:"oklch(0.65 0.18 200)",toolBadges:["STL","OLS","seasonal"],mathLatex:"y_t = T_t + S_t + R_t \\quad \\text{(additive)}, \\quad y_t = T_t \\cdot S_t \\cdot R_t \\quad \\text{(multiplicative)}",mathExplanation:`Time series decomposition splits a series into trend (T), seasonality (S), and residual (R). Applied to "${a}" over "${t}". Trend = long-term direction (linear regression slope). Seasonality = repeating pattern at fixed period (daily, weekly, monthly, yearly). Residual = what's left (noise + anomalies). STL (Seasonal-Trend decomposition using Loess, Cleveland 1990) is the most flexible — handles changing seasonality and outliers better than classical decomposition. Linear trend slope β̂_1 = cov(t, y) / var(t) gives the average rate of change per time unit. R\xb2 = 1 - SS_res/SS_tot tells you how much variance the linear trend explains. If R\xb2 is low, the series is dominated by seasonality or noise — try STL or differencing.`,mathToCode:[{symbol:"Linear trend slope",code:"beta1 = np.cov(t, y)[0, 1] / np.var(t)",explanation:"β̂_1 = cov(t,y)/var(t). Rate of change per time unit. Scipy: stats.linregress(t, y)."},{symbol:"R\xb2 (trend strength)",code:"slope, intercept, r_value, _, _ = stats.linregress(t, y); R2 = r_value**2",explanation:"R\xb2 = 1 - SS_res/SS_tot. Fraction of variance explained by linear trend. 0=no trend, 1=perfect linear."},{symbol:"Classical decomposition",code:"from statsmodels.tsa.seasonal import seasonal_decompose; result = seasonal_decompose(y, model='additive', period=12)",explanation:"Splits y into trend + seasonal + residual via moving averages. Requires known period (e.g. 12 for monthly, 7 for daily-with-weekly-pattern)."},{symbol:"STL (loess-based)",code:"from statsmodels.tsa.seasonal import STL; stl = STL(y, period=12); result = stl.fit()",explanation:"Cleveland 1990. More flexible than classical — handles changing seasonality and outliers. Robust=True for outlier resistance."},{symbol:"Mann-Kendall trend test",code:"from scipy.stats import kendalltau; tau, p = kendalltau(t, y)",explanation:"Non-parametric trend test (no distributional assumption). Detects monotonic trends. Used in climate science (Helsel & Hirsch)."}],codeTabs:[{lang:"Python",filename:"trend.py",code:`# Trend + seasonality decomposition — "${a}" over "${t}"
import pandas as pd
import numpy as np
import json
from scipy import stats

# Parse temporal column and set as index
df_ts = df[[${JSON.stringify(t)}, ${JSON.stringify(a)}]].dropna().copy()
df_ts[${JSON.stringify(t)}] = pd.to_datetime(df_ts[${JSON.stringify(t)}], errors='coerce')
df_ts = df_ts.dropna().sort_values(${JSON.stringify(t)})

t_numeric = (df_ts[${JSON.stringify(t)}] - df_ts[${JSON.stringify(t)}].min()).dt.total_seconds().values / 86400  # days since first
y = df_ts[${JSON.stringify(a)}].values.astype(float)

# Linear trend
slope, intercept, r_value, p_value, std_err = stats.linregress(t_numeric, y)
r_squared = r_value ** 2

# STL decomposition (try common periods)
try:
    from statsmodels.tsa.seasonal import STL
    # Detect period: try daily (7), weekly (52), monthly (12), quarterly (4)
    n = len(y)
    candidate_periods = []
    if n >= 14:
        candidate_periods.append(("weekly", 7))
    if n >= 24:
        candidate_periods.append(("monthly", 12))
    if n >= 104:
        candidate_periods.append(("yearly", 52))

    best_period_label = "none detected"
    best_seasonal_strength = 0
    best_stl_result = None

    for label, period in candidate_periods:
        try:
            stl = STL(y, period=period, robust=True)
            result = stl.fit()
            # Seasonal strength: 1 - var(R) / var(T+R)
            var_resid = np.var(result.resid)
            var_trend_resid = np.var(result.trend + result.resid)
            seasonal_strength = max(0, 1 - var_resid / var_trend_resid) if var_trend_resid > 0 else 0
            if seasonal_strength > best_seasonal_strength:
                best_seasonal_strength = seasonal_strength
                best_period_label = label
                best_stl_result = result
        except Exception:
            pass

    trend_component = best_stl_result.trend if best_stl_result else y - slope * t_numeric - intercept
    seasonal_component = best_stl_result.seasonal if best_stl_result else np.zeros_like(y)
    resid_component = best_stl_result.resid if best_stl_result else y - trend_component - seasonal_component
except ImportError:
    trend_component = slope * t_numeric + intercept
    seasonal_component = np.zeros_like(y)
    resid_component = y - trend_component
    best_period_label = "statsmodels not available"
    best_seasonal_strength = 0

print(json.dumps({
    "chart_type": "line",
    "title": f"Time series decomposition: ${a} over ${t}",
    "series": [
        {"name": "Original y", "data": [{"x": str(t), "y": round(float(y[i]), 4)} for i, t in enumerate(df_ts[${JSON.stringify(t)}].dt.strftime('%Y-%m-%d').values)]},
        {"name": "Trend T_t", "data": [{"x": str(t), "y": round(float(trend_component[i]), 4)} for i, t in enumerate(df_ts[${JSON.stringify(t)}].dt.strftime('%Y-%m-%d').values)]},
        {"name": "Seasonal S_t", "data": [{"x": str(t), "y": round(float(seasonal_component[i]), 4)} for i, t in enumerate(df_ts[${JSON.stringify(t)}].dt.strftime('%Y-%m-%d').values)]},
    ],
    "x_label": "time", "y_label": "value",
    "stats": [
        {"label": "Observations", "value": str(len(y))},
        {"label": "Trend slope (per day)", "value": f"{slope:.6f}"},
        {"label": "R\xb2 (trend strength)", "value": f"{r_squared:.4f} ({'strong' if r_squared > 0.7 else 'moderate' if r_squared > 0.3 else 'weak'})"},
        {"label": "Trend p-value", "value": f"{p_value:.2e} ({'significant' if p_value < 0.05 else 'not significant'})"},
        {"label": "Best seasonal period", "value": best_period_label},
        {"label": "Seasonal strength (0-1)", "value": f"{best_seasonal_strength:.4f}"},
        {"label": "Direction", "value": "INCREASING" if slope > 0 else "DECREASING" if slope < 0 else "FLAT"},
    ],
    "summary": f"Trend slope = {slope:.6f} per day (R\xb2 = {r_squared:.4f}, p = {p_value:.2e}). Series is {'INCREASING' if slope > 0 else 'DECREASING'}. Strongest seasonality: {best_period_label} (strength = {best_seasonal_strength:.3f}). Trend explains {r_squared*100:.1f}% of variance; seasonality explains {best_seasonal_strength*100:.1f}% of remaining variance.",
}))`},{lang:"Bash",filename:"trend_usage.sh",code:`# Trend + seasonality in production

# 1. statsmodels — classical + STL decomposition
#    from statsmodels.tsa.seasonal import seasonal_decompose, STL
#    result = seasonal_decompose(y, model='additive', period=12)
#    # STL is more flexible:
#    stl = STL(y, period=12, robust=True).fit()
#    trend, seasonal, resid = stl.trend, stl.seasonal, stl.resid

# 2. Prophet (Meta) — handles trend + seasonality + holidays + changepoints
#    pip install prophet
#    from prophet import Prophet
#    m = Prophet(yearly_seasonality=True, weekly_seasonality=True, daily_seasonality=False)
#    m.fit(df_prophet)  # columns: ds (date), y (value)
#    future = m.make_future_dataframe(periods=30)
#    forecast = m.predict(future)

# 3. scipy.stats.linregress — linear trend only
#    slope, intercept, r_value, p_value, std_err = stats.linregress(t, y)

# 4. Mann-Kendall non-parametric trend test
#    # pip install pymannkendall
#    import pymannkendall as mk
#    result = mk.original_test(y)  # returns trend, h, p, z, Tau, s, var_s, slope

# Production use cases:
# - Forecasting: STL + ETS, Prophet, ARIMA on residuals
# - Anomaly detection: large |residual| = anomaly (STL robust=True helps)
# - Capacity planning: trend slope → linear extrapolation
# - A/B test on time series: causal impact (Brodersen 2015)`}],tools:[{name:"statsmodels STL",functionCall:"from statsmodels.tsa.seasonal import STL; result = STL(y, period=12, robust=True).fit()",notes:"Reference. Cleveland 1990. Loess-based. Handles changing seasonality + outliers. Most flexible decomposition."},{name:"Prophet (Meta)",functionCall:"from prophet import Prophet; m = Prophet().fit(df); forecast = m.predict(future)",notes:"Taylor & Letham 2018. Additive model with trend + multiple seasonalities + holidays + changepoints. Bayesian uncertainty intervals."},{name:"scipy linregress",functionCall:"from scipy import stats; slope, intercept, r, p, _ = stats.linregress(t, y)",notes:"Simple linear trend. Returns slope, intercept, R, p-value, std-err. Use for quick trend detection."}],toolsInsight:"All three decompose y into trend + (optional) seasonality + residual. STL is the workhorse. Prophet adds Bayesian forecasting + holidays. scipy.linregress is the simplest (linear only).",runnablePreamble:`import pandas as pd, numpy as np, json, io
from scipy import stats
_USER_DATA_JSON = ${JSON.stringify(e.sampleJson)}
df = pd.DataFrame(json.loads(_USER_DATA_JSON))
try:
    from statsmodels.tsa.seasonal import STL
except ImportError:
    STL = None
`,runnableCode:`# Trend + seasonality on "${a}" over "${t}"
import pandas as pd, numpy as np, json
from scipy import stats

df_ts = df[[${JSON.stringify(t)}, ${JSON.stringify(a)}]].dropna().copy()
df_ts[${JSON.stringify(t)}] = pd.to_datetime(df_ts[${JSON.stringify(t)}], errors='coerce')
df_ts = df_ts.dropna().sort_values(${JSON.stringify(t)})
t_numeric = (df_ts[${JSON.stringify(t)}] - df_ts[${JSON.stringify(t)}].min()).dt.total_seconds().values / 86400
y = df_ts[${JSON.stringify(a)}].values.astype(float)
slope, intercept, r_value, p_value, _ = stats.linregress(t_numeric, y)
r_squared = r_value ** 2

stl_seasonal_strength = 0
stl_label = "none"
if STL is not None and len(y) >= 14:
    for label, period in [("weekly", 7), ("monthly", 12), ("yearly", 52)]:
        if len(y) >= period * 2:
            try:
                result = STL(y, period=period, robust=True).fit()
                var_resid = np.var(result.resid)
                var_tr = np.var(result.trend + result.resid)
                s_strength = max(0, 1 - var_resid / var_tr) if var_tr > 0 else 0
                if s_strength > stl_seasonal_strength:
                    stl_seasonal_strength = s_strength
                    stl_label = label
            except Exception:
                pass

print(json.dumps({
    "chart_type": "bar",
    "title": "Trend + seasonality decomposition",
    "series": [
        {"name": "Trend slope (per day)", "data": [{"x": "slope", "y": round(float(slope), 6)}]},
        {"name": "R\xb2 trend", "data": [{"x": "R\xb2", "y": round(float(r_squared), 4)}]},
        {"name": "Seasonal strength", "data": [{"x": "season", "y": round(float(stl_seasonal_strength), 4)}]},
    ],
    "x_label": "metric", "y_label": "value",
    "stats": [
        {"label": "Observations", "value": str(len(y))},
        {"label": "Trend slope (per day)", "value": f"{slope:.6f}"},
        {"label": "R\xb2 trend", "value": f"{r_squared:.4f}"},
        {"label": "Trend p-value", "value": f"{p_value:.2e}"},
        {"label": "Direction", "value": "INCREASING" if slope > 0 else "DECREASING"},
        {"label": "Best seasonality", "value": stl_label},
        {"label": "Seasonal strength", "value": f"{stl_seasonal_strength:.4f}"},
    ],
    "summary": f"Trend slope = {slope:.6f}/day ({'INCREASING' if slope > 0 else 'DECREASING'}), R\xb2 = {r_squared:.4f}. Best seasonality: {stl_label} (strength = {stl_seasonal_strength:.3f}).",
}))`,outcomes:[{science:"Time Series",sector:"Sales/traffic forecasting",value:"decompose → forecast each component → reassemble",error:"STL assumes additive structure — multiplicative series need log transform first",description:`Your "${a}" over "${t}" decomposes into trend (slope revealed in chart above) + seasonality (best period detected by STL). Forecast each: linear/ARIMA for trend, repeat seasonal pattern, model residual as noise. Prophet automates this with Bayesian uncertainty.`},{science:"Forecasting",sector:"Anomaly detection in time series",value:"large residual after STL = anomaly",error:"concept drift changes the trend — re-fit STL periodically",description:"After STL decomposition, residuals should be ~stationary noise. Sudden spikes in residual = anomalies (outages, bot traffic, fraud). STL robust=True resists outlier contamination. Common in observability (Datadog), fraud (Stripe), and security (Splunk)."},{science:"Signal Processing",sector:"Capacity planning",value:"extrapolate linear trend to forecast when capacity will be exceeded",error:"linear extrapolation ignores S-curves (saturation) — use logistic for adoption curves",description:`If the trend slope (from the chart above) is positive and you're at 70% capacity, the trend line predicts when you'll hit 100%. Linear works for steady-growth metrics (storage, users). For viral/adoption metrics, use logistic or Bass diffusion model. Always report uncertainty interval (slope \xb1 2\xb7std_err).`}],analysisInsight:`Trend + seasonality IS the universal time-series decomposition. Forecasting, anomaly detection, and capacity planning all use Cleveland 1990's STL: y = T + S + R. Your "${a}" series reveals trend direction (see chart above) — strong/moderate/weak linear signal depending on R\xb2.`,hasChart:!0,insight:"Trend + seasonality IS the universal time-series decomposition. Forecasting, anomaly detection, and capacity planning all use Cleveland 1990 STL: y = T + S + R.",citations:["Cleveland, R. B. et al. (1990). STL: A Seasonal-Trend Decomposition Procedure Based on Loess. J. Off. Stat. 6(1).","Taylor, S. J. & Letham, B. (2018). Forecasting at Scale (Prophet). Am. Stat. 72(1).","Helsel, D. R. & Hirsch, R. M. (1992). Statistical Methods in Water Resources (Mann-Kendall trend test)."]}}},{kind:"autocorrelation",title:"Autocorrelation — the universal serial-dependence measure",applies:e=>!!r(e)&&s(e,1).length>=1,build:e=>{let t=r(e),a=s(e,1)[0];return{id:`user-autocorrelation-${e.name}`,lastVerified:"2026-10",longevity:"versioned",title:`Autocorrelation — "${a}" over "${t}" in "${e.name}"`,subtitle:"\\rho_k = \\frac{\\gamma_k}{\\gamma_0} = \\frac{\\sum_{t=k+1}^{n}(y_t - \\bar{y})(y_{t-k} - \\bar{y})}{\\sum_{t=1}^{n}(y_t - \\bar{y})^2}",domains:["Time Series","Signal Processing","Stochastic Processes"],accent:"oklch(0.65 0.18 0)",toolBadges:["ACF","PACF","statsmodels"],mathLatex:"\\rho_k = \\mathrm{corr}(y_t, y_{t-k}) = \\frac{\\mathbb{E}[(y_t - \\bar{y})(y_{t-k} - \\bar{y})]}{\\sigma^2}, \\quad \\rho_0 = 1, \\quad \\rho_k \\in [-1, +1]",mathExplanation:`Autocorrelation at lag k measures how correlated a series is with itself k steps earlier. ρ_k = corr(y_t, y_{t-k}). ρ_0 = 1 (trivially). ρ_1 = momentum (today's value related to yesterday). For "${a}" over "${t}": - High ρ_1 → series has memory (momentum) — predictable from recent past. - ρ_k decays exponentially → AR(p) process. - ρ_k cuts off to 0 after lag q → MA(q) process. - ρ_k has spikes at multiples of period m → seasonal pattern at lag m. Use ACF + PACF plots to identify ARIMA(p, d, q) orders. White noise: ρ_k ≈ 0 for all k > 0 (within \xb11.96/√n confidence band).`,mathToCode:[{symbol:"Sample autocovariance",code:"gamma_k = np.mean((y[k:] - y.mean()) * (y[:-k] - y.mean()))",explanation:"γ_k = (1/n) Σ (y_t - ȳ)(y_{t-k} - ȳ). Covariance of series with itself at lag k."},{symbol:"ACF (normalized)",code:"rho_k = gamma_k / gamma_0",explanation:"ρ_k = γ_k / γ_0. Range [-1, +1]. ρ_0 = 1. statsmodels.tsa.stattools.acf(y, nlags=20)."},{symbol:"PACF (partial)",code:"from statsmodels.tsa.stattools import pacf; pacf_vals = pacf(y, nlags=20)",explanation:"Removes indirect correlations via intermediate lags. PACF cuts off at p for AR(p). Use to identify AR order."},{symbol:"Confidence band",code:"ci = 1.96 / np.sqrt(n)  # 95% CI for white noise",explanation:"Under H0 (white noise), ACF ~ N(0, 1/n). 95% band = \xb11.96/√n. Spikes outside = significant autocorrelation."},{symbol:"Ljung-Box test",code:"from statsmodels.stats.diagnostic import acorr_ljungbox; lb = acorr_ljungbox(y, lags=10)",explanation:"Tests H0: ρ_1 = ρ_2 = ... = ρ_k = 0 (white noise). p < 0.05 → series has autocorrelation (not white noise)."}],codeTabs:[{lang:"Python",filename:"autocorrelation.py",code:`# Autocorrelation analysis — "${a}" over "${t}"
import pandas as pd
import numpy as np
import json

df_ts = df[[${JSON.stringify(t)}, ${JSON.stringify(a)}]].dropna().copy()
df_ts[${JSON.stringify(t)}] = pd.to_datetime(df_ts[${JSON.stringify(t)}], errors='coerce')
df_ts = df_ts.dropna().sort_values(${JSON.stringify(t)})
y = df_ts[${JSON.stringify(a)}].values.astype(float)
n = len(y)

# Compute ACF up to lag 20
max_lag = min(20, n - 1)
y_centered = y - y.mean()
gamma_0 = np.mean(y_centered ** 2)
acf = [1.0]  # rho_0 = 1
for k in range(1, max_lag + 1):
    gamma_k = np.mean(y_centered[k:] * y_centered[:-k])
    rho_k = gamma_k / gamma_0 if gamma_0 != 0 else 0
    acf.append(float(rho_k))

# Confidence band for white noise (95%)
ci = 1.96 / np.sqrt(n)
significant_lags = [k for k, rho in enumerate(acf) if k > 0 and abs(rho) > ci]

# Detect seasonality: spike at multiples of a period
seasonal_period = None
for period in [7, 12, 24, 52, 365]:
    if period <= max_lag and acf[period] > 0.3 and acf[period] > 0.5 * max(acf[1:], default=0):
        seasonal_period = period
        break

# AR vs MA signature
if len(acf) > 2 and abs(acf[1]) > ci:
    ar_or_ma = "AR signature: exponential decay in ACF" if abs(acf[2]) < abs(acf[1]) else "MA signature: sharp cut-off"
else:
    ar_or_ma = "white noise: no significant autocorrelation"

print(json.dumps({
    "chart_type": "bar",
    "title": f"Autocorrelation function (ACF) for ${a}",
    "series": [
        {"name": "ACF ρ_k", "data": [{"x": f"lag {k}", "y": round(rho, 4)} for k, rho in enumerate(acf)]},
        {"name": "95% CI", "data": [{"x": f"lag {k}", "y": round(ci, 4)} for k in range(len(acf))]},
        {"name": "-95% CI", "data": [{"x": f"lag {k}", "y": round(-ci, 4)} for k in range(len(acf))]},
    ],
    "x_label": "lag k", "y_label": "ACF ρ_k",
    "stats": [
        {"label": "Observations", "value": str(n)},
        {"label": "Max lag", "value": str(max_lag)},
        {"label": "ACF(1) — momentum", "value": f"{acf[1]:.4f} ({'significant' if abs(acf[1]) > ci else 'not significant'})"},
        {"label": "95% CI for white noise", "value": f"\xb1{ci:.4f}"},
        {"label": "Significant lags", "value": str(significant_lags[:10])},
        {"label": "Detected seasonality", "value": f"period = {seasonal_period}" if seasonal_period else "none"},
        {"label": "Process signature", "value": ar_or_ma},
    ],
    "summary": f"ACF analysis on {n} observations. ρ_1 = {acf[1]:.4f} ({'momentum' if abs(acf[1])>ci else 'no momentum'}). {len(significant_lags)} lags exceed 95% CI. {ar_or_ma}.",
}))`},{lang:"Bash",filename:"acf_usage.sh",code:`# Autocorrelation in production

# 1. statsmodels — ACF, PACF, Ljung-Box
#    from statsmodels.tsa.stattools import acf, pacf
#    from statsmodels.stats.diagnostic import acorr_ljungbox
#    acf_vals = acf(y, nlags=20, alpha=0.05)
#    pacf_vals = pacf(y, nlags=20)
#    lb_test = acorr_ljungbox(y, lags=10, return_df=True)

# 2. statsmodels — plot_acf, plot_pacf (matplotlib)
#    from statsmodels.graphics.tsaplots import plot_acf, plot_pacf
#    import matplotlib.pyplot as plt
#    fig, (ax1, ax2) = plt.subplots(2, 1)
#    plot_acf(y, lags=20, ax=ax1)
#    plot_pacf(y, lags=20, ax=ax2)

# 3. pandas built-in — quick ACF plot
#    pd.plotting.autocorrelation_plot(y)

# 4. PyFlux / pmdarima — auto-ARIMA order selection via ACF/PACF
#    from pmdarima import auto_arima
#    model = auto_arima(y, seasonal=True, m=12)  # finds best (p,d,q)(P,D,Q,m)

# Production use cases:
# - ARIMA order selection: ACF → MA(q), PACF → AR(p)
# - Anomaly detection: significant autocorrelation residuals = anomaly
# - Signal vs noise: Ljung-Box test for white-noise residual check
# - Market microstructure: high-frequency ACF for trade sign correlation`}],tools:[{name:"statsmodels.tsa.stattools",functionCall:"from statsmodels.tsa.stattools import acf, pacf; acf_vals = acf(y, nlags=20, alpha=0.05)",notes:"Reference. Computes ACF + PACF with confidence intervals. Returns arrays + confidence bands."},{name:"statsmodels.graphics.tsaplots",functionCall:"from statsmodels.graphics.tsaplots import plot_acf, plot_pacf; plot_acf(y, lags=20)",notes:"Visualization. Renders the classic ACF/PACF bar plots with confidence bands."},{name:"pmdarima auto_arima",functionCall:"from pmdarima import auto_arima; model = auto_arima(y, seasonal=True, m=12)",notes:"Auto-selects ARIMA orders (p,d,q)(P,D,Q,m) via ACF/PACF + information criteria. Hyndman & Khandakar 2008."}],toolsInsight:"All three use the same ACF math (Box & Jenkins 1970). statsmodels is the reference. pmdarima wraps it with auto-order-selection. Same ρ_k = γ_k / γ_0 formula.",runnablePreamble:`import pandas as pd, numpy as np, json, io
_USER_DATA_JSON = ${JSON.stringify(e.sampleJson)}
df = pd.DataFrame(json.loads(_USER_DATA_JSON))
`,runnableCode:`# ACF on "${a}"
import pandas as pd, numpy as np, json

df_ts = df[[${JSON.stringify(t)}, ${JSON.stringify(a)}]].dropna().copy()
df_ts[${JSON.stringify(t)}] = pd.to_datetime(df_ts[${JSON.stringify(t)}], errors='coerce')
df_ts = df_ts.dropna().sort_values(${JSON.stringify(t)})
y = df_ts[${JSON.stringify(a)}].values.astype(float)
n = len(y)
max_lag = min(20, n - 1)
y_centered = y - y.mean()
gamma_0 = np.mean(y_centered ** 2)
acf = [1.0]
for k in range(1, max_lag + 1):
    gamma_k = np.mean(y_centered[k:] * y_centered[:-k])
    acf.append(float(gamma_k / gamma_0) if gamma_0 != 0 else 0)
ci = 1.96 / np.sqrt(n)
significant = [k for k, rho in enumerate(acf) if k > 0 and abs(rho) > ci]

print(json.dumps({
    "chart_type": "bar",
    "title": f"Autocorrelation function for ${a}",
    "series": [
        {"name": "ACF ρ_k", "data": [{"x": f"lag {k}", "y": round(rho, 4)} for k, rho in enumerate(acf)]},
        {"name": "95% CI", "data": [{"x": f"lag {k}", "y": round(ci, 4)} for k in range(len(acf))]},
        {"name": "-95% CI", "data": [{"x": f"lag {k}", "y": round(-ci, 4)} for k in range(len(acf))]},
    ],
    "x_label": "lag k", "y_label": "ρ_k",
    "stats": [
        {"label": "n", "value": str(n)},
        {"label": "ρ_1 (momentum)", "value": f"{acf[1]:.4f}"},
        {"label": "Significant lags", "value": str(significant[:8])},
    ],
    "summary": f"ACF on {n} obs. ρ_1 = {acf[1]:.4f}. {len(significant)} lags beyond 95% CI ({'serial correlation present' if len(significant) > 0 else 'white noise-like'}).",
}))`,outcomes:[{science:"Time Series",sector:"ARIMA model identification",value:"ACF cuts at q → MA(q); PACF cuts at p → AR(p)",error:"ACF interpretation needs stationary series — difference first if non-stationary",description:`Box-Jenkins methodology: use ACF + PACF patterns to identify ARIMA(p, d, q) orders. ACF cuts off after lag q → MA(q). PACF cuts off after lag p → AR(p). Exponential decay in both → ARMA. Your "${a}" series shows ρ_1 = computed_at_runtime, suggesting momentum_or_white_noise pattern.`},{science:"Signal Processing",sector:"Anomaly detection in residuals",value:"after fitting ARIMA, residuals should be white noise (no autocorrelation)",error:"Ljung-Box may flag small residuals as autocorrelated when n is huge",description:`Fit ARIMA → check residuals with Ljung-Box test. If H0 (white noise) rejected, the model missed structure — add more lags or seasonality. Used in finance (volatility modeling, GARCH residuals), manufacturing (predictive maintenance — vibration analysis), and infrastructure (CPU/memory anomaly detection).`},{science:"Stochastic Processes",sector:"Market microstructure — trade sign autocorrelation",value:"high ACF(1) on trade signs = informed traders splitting orders",error:"ACF assumes stationarity — non-stationary prices need differencing",description:"In high-frequency finance, ACF of trade signs (buy=+1, sell=-1) reveals order-splitting behavior. ACF(1) > 0.5 for large trades suggests algorithmic execution (VWAP, TWAP). Used by exchanges to detect spoofing and layering (Reg NMS Rule 537)."}],analysisInsight:`Autocorrelation IS the universal serial-dependence measure. ARIMA identification, anomaly detection, and market microstructure all use Box & Jenkins 1970 math: ρ_k = γ_k / γ_0. Your "${a}" series reveals momentum via ρ_1.`,hasChart:!0,insight:`Autocorrelation IS the universal serial-dependence measure. ARIMA, anomaly detection, and market microstructure all use Box & Jenkins 1970 math: ρ_k = γ_k / γ_0.`,citations:["Box, G. E. P. & Jenkins, G. M. (1970). Time Series Analysis: Forecasting and Control. Holden-Day.","Ljung, G. M. & Box, G. E. P. (1978). On a Measure of Lack of Fit in Time Series Models. Biometrika 65(2).","Hyndman, R. J. & Khandakar, Y. (2008). Automatic Time Series Forecasting (auto.arima). J. Stat. Softw. 27(3)."]}}},{kind:"outliers-iqr",title:"Outliers (IQR) — the universal anomaly detector",applies:e=>s(e,1).length>=1,build:e=>{let t=s(e,4);return{id:`user-outliers-${e.name}`,lastVerified:"2026-10",longevity:"versioned",title:`Outliers (IQR) — ${t.length} numeric columns in "${e.name}"`,subtitle:"\\text{outlier if } x < Q_1 - 1.5 \\cdot \\text{IQR} \\text{ or } x > Q_3 + 1.5 \\cdot \\text{IQR}",domains:["Data Quality","Anomaly Detection","Robust Statistics"],accent:"oklch(0.65 0.18 320)",toolBadges:["IQR","Tukey","Robust"],mathLatex:"\\text{IQR} = Q_3 - Q_1, \\quad \\text{lower fence} = Q_1 - 1.5 \\cdot \\text{IQR}, \\quad \\text{upper fence} = Q_3 + 1.5 \\cdot \\text{IQR}",mathExplanation:`Tukey's IQR method (1977) is the most robust outlier detector for univariate distributions. IQR = Q3 - Q1 (interquartile range, the middle 50% of data). Outlier = any value below Q1 - 1.5\xb7IQR or above Q3 + 1.5\xb7IQR. The 1.5 multiplier is calibrated so ~0.7% of normally-distributed data falls outside (≈ 3σ equivalent). For "extreme" outliers, use 3\xb7IQR (≈ 5σ equivalent). Applied to ${t.length} numeric columns. Advantages over z-score: (1) IQR is robust to the outliers themselves (z-score uses mean+std, which are skewed by outliers). (2) No distributional assumption. (3) Single-pass computation. Multi-dimensional outliers: extend with IsolationForest (Liu 2008) or LOF (Breunig 2000).`,mathToCode:[{symbol:"Quantiles",code:"q1, q3 = df['col'].quantile([0.25, 0.75])",explanation:"25th and 75th percentiles. Robust to outliers (unlike mean/std). pandas .quantile() uses linear interpolation by default."},{symbol:"IQR",code:"iqr = q3 - q1",explanation:"Middle 50% spread. The most robust scale estimator. Equals 1.35\xb7σ for normal data."},{symbol:"Fences",code:"lower, upper = q1 - 1.5*iqr, q3 + 1.5*iqr",explanation:"Tukey 1977. 1.5 multiplier ≈ 3σ for normal data. Use 3.0 for 'extreme' outliers (≈ 5σ)."},{symbol:"Outlier mask",code:"is_outlier = (df['col'] < lower) | (df['col'] > upper)",explanation:"Boolean mask. Count: is_outlier.sum(). Filter: df[is_outlier]. Index: df.index[is_outlier]."},{symbol:"Robust z-score (MAD)",code:"mad = np.median(np.abs(x - np.median(x))); z_robust = 0.6745 * (x - np.median(x)) / mad",explanation:"Median Absolute Deviation — even more robust than IQR. z_robust > 3.5 = outlier. Use for highly skewed data."}],codeTabs:[{lang:"Python",filename:"outliers.py",code:`# Outlier detection (IQR) — applied to your uploaded dataset
import pandas as pd
import numpy as np
import json

numeric_cols = [${t.map(e=>`'${e}'`).join(", ")}]

results = []
total_outliers = 0
for col in numeric_cols:
    s = df[col].dropna()
    if len(s) == 0:
        continue
    q1 = s.quantile(0.25)
    q3 = s.quantile(0.75)
    iqr = q3 - q1
    lower = q1 - 1.5 * iqr
    upper = q3 + 1.5 * iqr
    is_outlier = (s < lower) | (s > upper)
    n_out = int(is_outlier.sum())
    total_outliers += n_out
    pct = round(100 * n_out / len(s), 2)
    # Extreme outliers (3*IQR)
    ext_lower = q1 - 3 * iqr
    ext_upper = q3 + 3 * iqr
    n_extreme = int(((s < ext_lower) | (s > ext_upper)).sum())
    # Median Absolute Deviation (for robust cross-check)
    median = s.median()
    mad = np.median(np.abs(s - median))
    results.append({
        "column": col,
        "n": int(len(s)),
        "q1": round(float(q1), 4),
        "q3": round(float(q3), 4),
        "iqr": round(float(iqr), 4),
        "lower_fence": round(float(lower), 4),
        "upper_fence": round(float(upper), 4),
        "outliers_1_5x": n_out,
        "outlier_pct": pct,
        "extreme_3x": n_extreme,
        "median": round(float(median), 4),
        "mad": round(float(mad), 4),
    })

print(json.dumps({
    "chart_type": "bar",
    "title": "Outlier count per numeric column (Tukey IQR method)",
    "series": [
        {"name": "Outliers (1.5x IQR)", "data": [{"x": r["column"], "y": r["outliers_1_5x"]} for r in results]},
        {"name": "Extreme (3x IQR)", "data": [{"x": r["column"], "y": r["extreme_3x"]} for r in results]},
        {"name": "Outlier %", "data": [{"x": r["column"], "y": r["outlier_pct"]} for r in results]},
    ],
    "x_label": "column", "y_label": "count / %",
    "stats": [
        {"label": "Columns analyzed", "value": str(len(results))},
        {"label": "Total outliers (1.5x IQR)", "value": str(total_outliers)},
        {"label": "Expected if normal", "value": f"~{round(0.7 * sum(r['n'] for r in results) / 100, 0):.0f} (0.7% of {sum(r['n'] for r in results)} values)"},
        {"label": "Most outlier-prone column", "value": max(results, key=lambda r: r["outlier_pct"])["column"] if results else "n/a"},
        {"label": "Action", "value": "Inspect extreme outliers (3x IQR); cap/floor or impute before training"},
    ],
    "summary": f"Analyzed {len(results)} numeric columns. Found {total_outliers} outliers (1.5x IQR method). Most outlier-prone: {max(results, key=lambda r: r['outlier_pct'])['column'] if results else 'n/a'} ({max(r['outlier_pct'] for r in results) if results else 0}% outliers). {sum(r['extreme_3x'] for r in results)} extreme outliers (3x IQR) — strong candidates for inspection or removal.",
}))`},{lang:"Bash",filename:"outliers_usage.sh",code:`# Outlier detection in production

# 1. pandas + IQR (Tukey 1977) — simplest
#    q1, q3 = df['col'].quantile([0.25, 0.75])
#    iqr = q3 - q1
#    is_outlier = (df['col'] < q1 - 1.5*iqr) | (df['col'] > q3 + 1.5*iqr)

# 2. scipy.stats.zscore — parametric (assumes normal)
#    from scipy.stats import zscore
#    z = zscore(df['col'])
#    is_outlier = np.abs(z) > 3  # >3 sigma = outlier

# 3. MAD (Median Absolute Deviation) — robust alternative
#    mad = np.median(np.abs(df['col'] - df['col'].median()))
#    z_robust = 0.6745 * (df['col'] - df['col'].median()) / mad
#    is_outlier = np.abs(z_robust) > 3.5

# 4. sklearn IsolationForest — multivariate
#    from sklearn.ensemble import IsolationForest
#    iso = IsolationForest(contamination=0.05, random_state=42)
#    is_outlier = iso.fit_predict(X) == -1

# 5. sklearn LocalOutlierFactor (LOF) — density-based
#    from sklearn.neighbors import LocalOutlierFactor
#    lof = LocalOutlierFactor(n_neighbors=20, contamination=0.05)
#    is_outlier = lof.fit_predict(X) == -1

# Production use cases:
# - Data quality: flag rows with extreme outliers for review
# - Fraud detection: multivariate outliers via IsolationForest
# - Manufacturing: 6-sigma process control (IQR + control charts)
# - Finance: market manipulation detection (LOF on order book features)`}],tools:[{name:"pandas quantile (Tukey IQR)",functionCall:"q1, q3 = df['col'].quantile([0.25, 0.75]); iqr = q3-q1",notes:"Reference. Robust to outliers. Single-pass. No distributional assumption. Best for univariate."},{name:"scipy.stats.zscore",functionCall:"from scipy.stats import zscore; z = zscore(df['col'])",notes:"Parametric. Assumes normal distribution. Sensitive to outliers themselves (uses mean+std). Use only when data is approximately normal."},{name:"sklearn IsolationForest",functionCall:"from sklearn.ensemble import IsolationForest; iso = IsolationForest().fit(X)",notes:"Multivariate. Liu 2008. Tree-based — handles non-linear outliers + high dimensions. Use when outliers depend on multiple features jointly."}],toolsInsight:"All three detect outliers. IQR is the univariate workhorse (robust, simple, no assumption). z-score is parametric (assumes normal). IsolationForest handles multivariate. Pick based on dimensionality + distribution.",runnablePreamble:`import pandas as pd, numpy as np, json, io
_USER_DATA_JSON = ${JSON.stringify(e.sampleJson)}
df = pd.DataFrame(json.loads(_USER_DATA_JSON))
`,runnableCode:`# Outlier detection on your dataset — boxplot view
import pandas as pd, numpy as np, json

numeric_cols = [${t.map(e=>`'${e}'`).join(", ")}]
results = []
boxplot_series = []
total = 0
for col in numeric_cols[:8]:
    s = df[col].dropna()
    if len(s) == 0: continue
    q1 = s.quantile(0.25); q3 = s.quantile(0.75)
    iqr = q3 - q1
    lower = q1 - 1.5*iqr; upper = q3 + 1.5*iqr
    n_out = int(((s < lower) | (s > upper)).sum())
    total += n_out
    results.append({"column": col, "outliers": n_out, "pct": round(100*n_out/len(s), 2)})
    # Boxplot data: each column becomes a series with Q1-Q3 bar + whisker + median
    boxplot_series.append({
        "name": col,
        "data": [
            {"x": col, "y": round(float(s.min()), 4)},  # whisker low
            {"x": col, "y": round(float(q1), 4)},       # Q1
            {"x": col, "y": round(float(s.median()), 4)}, # median
            {"x": col, "y": round(float(q3), 4)},        # Q3
            {"x": col, "y": round(float(s.max()), 4)},   # whisker high
        ],
    })

print(json.dumps({
    "chart_type": "boxplot",
    "title": "Box plot per numeric column — Tukey IQR outlier view",
    "series": boxplot_series,
    "x_label": "column", "y_label": "value",
    "stats": [
        {"label": "Columns analyzed", "value": str(len(results))},
        {"label": "Total outliers", "value": str(total)},
        {"label": "Most outlier-prone", "value": max(results, key=lambda r: r["pct"])["column"] if results else "n/a"},
    ],
    "summary": f"Analyzed {len(results)} columns. {total} outliers detected (1.5x IQR). Box plots show Q1-Q3 (box), median (center), and whiskers (min/max). Most outlier-prone: {max(results, key=lambda r: r['pct'])['column'] if results else 'n/a'}.",
}))`,outcomes:[{science:"Data Quality",sector:"Pipeline monitoring — outlier drift",value:"track outlier % per batch; alert when drift > 50%",error:"some columns legitimately have heavy tails — calibrate thresholds per column",description:`Tukey IQR is the production baseline for data quality. Your ${t.length} numeric columns reveal which have outlier-prone distributions. Track per-batch outlier counts; sudden spikes signal upstream data issues (parse errors, unit changes, sampling bias). Great Expectations + whylogs implement this.`},{science:"Anomaly Detection",sector:"Fraud detection — multivariate extension",value:"IQR per-column catches univariate outliers; IsolationForest catches multivariate",error:"outlier ≠ fraud — many are legitimate extreme events (Black Friday sales)",description:"Univariate IQR misses fraud patterns that look normal per-column but anomalous jointly (e.g. high amount + new IP + new device). IsolationForest + LOF extend to multidim. Always combine with domain rules: a $10M transaction from a brand-new account is suspicious regardless of univariate outlier status."},{science:"Robust Statistics",sector:"Robust regression + imputation",value:"outlier-resistant models: median regression, Huber loss, M-estimators",error:"removing outliers can bias the model if outliers are real signal (long-tail distributions)",description:`When outliers dominate (e.g. income, response times), use robust estimators: median + IQR instead of mean + std; Huber loss instead of MSE; RANSAC for linear regression. Or transform (log1p for right-skewed). Don't blindly drop outliers — investigate first. Some distributions are inherently heavy-tailed (Pareto, power-law).`}],analysisInsight:`Outliers IS the universal anomaly detector. Data quality monitoring, fraud detection, and robust statistics all use Tukey 1977's IQR method. Your ${t.length} numeric columns reveal counted_at_runtime outliers — investigate extreme ones (3x IQR) first.`,hasChart:!0,insight:`Outliers IS the universal anomaly detector. Data quality, fraud detection, and robust statistics all use Tukey 1977 math: IQR fences at Q1 \xb1 1.5\xb7(Q3-Q1).`,citations:["Tukey, J. W. (1977). Exploratory Data Analysis. Addison-Wesley.","Hampel, F. R. (1974). The Influence Curve and its Role in Robust Estimation. J. Am. Stat. Assoc. 69(346).","Liu, F. T. et al. (2008). Isolation Forest (multivariate extension). ICDM 2008."]}}}];function c(e,t=6){let a=l.filter(t=>t.applies(e)),s=["correlation","distribution","pca","frequency-entropy","trend-seasonality","autocorrelation","chi-square","outliers-iqr"];return a.sort((e,t)=>s.indexOf(e.kind)-s.indexOf(t.kind)).slice(0,t)}function u(e,t=6){return c(e,t).map(t=>t.build(e))}}}]);