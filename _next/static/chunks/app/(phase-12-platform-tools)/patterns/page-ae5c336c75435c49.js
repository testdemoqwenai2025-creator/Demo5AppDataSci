(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1569],{14946:(e,t,r)=>{"use strict";r.d(t,{PatternsPage:()=>w});var s=r(95155),a=r(98500),i=r.n(a),n=r(58381),o=r(27774),l=r(19776),d=r(66349),c=r(85757),h=r(45160),m=r(83036),u=r(20232),p=r(53961),g=r(26075),f=r(31025),v=r(33024),y=r(44478),x=r(63888),b=r(44071);let _=[{label:"Interactive patterns",value:"5",hint:"Each with Pyodide executable demo",deltaTone:"flat"},{label:"Pattern category",value:"Core DE",hint:"Medallion \xb7 SCD2 \xb7 slim CI \xb7 RLS \xb7 rETL",deltaTone:"flat"},{label:"Execution runtime",value:"Pyodide",hint:"Python in WebAssembly, lazy-loaded",deltaTone:"flat"},{label:"Lines of demo code",value:"~200",hint:"Pure Python stdlib, runs in browser",deltaTone:"flat"}];function w(){return(0,s.jsxs)("div",{className:"space-y-8",children:[(0,s.jsx)(n.zY,{eyebrow:"Patterns \xb7 interactive guides",title:"Data Engineering Patterns — Interactive",description:"Five core data engineering patterns, each with a Pyodide executable demo. Click 'Run' to see the pattern in action — real Python executing in your browser via WebAssembly. No install, no signup. The same patterns are documented across the platform's 19 pages; this page brings them together as interactive guides.",right:(0,s.jsxs)("div",{className:"flex gap-2",children:[(0,s.jsxs)(h.E,{variant:"outline",className:"gap-1.5",children:[(0,s.jsx)(u.A,{className:"h-3 w-3"})," 5 demos"]}),(0,s.jsxs)(h.E,{variant:"outline",className:"gap-1.5",children:[(0,s.jsx)(p.A,{className:"h-3 w-3"})," Pyodide"]})]})}),(0,s.jsx)("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-3",children:_.map(e=>(0,s.jsx)(n.nO,{label:e.label,value:e.value,hint:e.hint,deltaTone:e.deltaTone},e.label))}),(0,s.jsxs)(n.iv,{title:"Pattern 1: Medallion Architecture (Bronze → Silver → Gold)",description:"Each layer has one job. Bronze = raw append. Silver = conformed. Gold = dimensional. The rule: you can't skip layers.",icon:(0,s.jsx)(g.A,{className:"h-5 w-5"}),badge:"interactive",children:[(0,s.jsxs)("p",{className:"text-sm text-muted-foreground leading-relaxed mb-3",children:["The Medallion pattern is the platform's canonical data flow. Bronze is append-only (evidence locker). Silver is conformed via idempotent MERGE. Gold is dimensional (star schemas for BI). The rule: each layer has exactly one responsibility, and skipping layers is forbidden (enforced by CI lint rules). See the ",(0,s.jsx)(i(),{href:(0,c.ZJ)("databricks"),className:"text-primary hover:underline",children:"Databricks page"})," for the full implementation."]}),(0,s.jsx)(d.l,{code:`# Medallion Architecture — Bronze -> Silver -> Gold simulation
# Shows how data flows through 3 layers, each with one job

# Bronze: raw ingest (append-only, schema-on-read)
bronze = [
    {"source": "shopify", "order_id": "ord_1", "email": "alice@mdse.io", "status": "ACTIVE", "region": "UK"},
    {"source": "shopify", "order_id": "ord_2", "email": "bob@mdse.io",   "status": "ACTIVE", "region": "EU"},
    {"source": "shopify", "order_id": "ord_3", "email": "carol@mdse.io",  "status": "INACTIVE", "region": None},
    {"source": "shopify", "order_id": "ord_4", "email": "dave@mdse.io",  "status": "ACTIVE", "region": "NA"},
]
print(f"Bronze: {len(bronze)} raw rows (append-only, schema-on-read)")

# Silver: conformed (deduplicate, normalise, hash PII)
import hashlib
silver = []
for r in bronze:
    email_hash = hashlib.md5(r["email"].lower().encode()).hexdigest()
    sk = hashlib.md5(f"{email_hash}|loaded".encode()).hexdigest()[:16]
    silver.append({
        "customer_sk": sk, "order_id": r["order_id"], "email_hash": email_hash,
        "is_active": r["status"] == "ACTIVE", "region_code": r["region"] or "UNKNOWN",
    })
print(f"Silver: {len(silver)} conformed rows (deduped, PII hashed, normalised)")

# Gold: dimensional (star schema for BI)
gold = [
    {"dim": "dim_customer", "rows": sum(1 for s in silver if s["is_active"])},
    {"dim": "fct_orders", "rows": len(silver)},
    {"metric": "active_customers", "value": sum(1 for s in silver if s["is_active"])},
    {"metric": "total_orders", "value": len(silver)},
]
print(f"Gold: {len(gold)} dimensional objects (star schema, BI-ready)")
print()
print("=" * 60)
print("MEDALLION FLOW:")
print("=" * 60)
print(f"  Bronze ({len(bronze)} raw) → Silver ({len(silver)} conformed) → Gold ({len(gold)} dimensional)")
print(f"  PII redacted: email → {silver[0]['email_hash'][:16]}...")
print(f"  Regions normalised: {set(s['region_code'] for s in silver)}")
print(f"  Active customers: {gold[0]['rows']}")
print(f"  Total orders: {gold[1]['rows']}")
print("=" * 60)`,buttonLabel:"Run Medallion simulation (Pyodide)"})]}),(0,s.jsxs)(n.iv,{title:"Pattern 2: SCD2 — Slowly Changing Dimensions",description:"When a customer's segment changes, don't overwrite — close the old row (valid_to) and open a new one (valid_from=NULL). Point-in-time correct.",icon:(0,s.jsx)(f.A,{className:"h-5 w-5"}),badge:"interactive",children:[(0,s.jsxs)("p",{className:"text-sm text-muted-foreground leading-relaxed mb-3",children:["SCD2 (Slowly Changing Dimension Type 2) is the pattern for tracking attribute changes over time. When a customer upgrades from Standard to VIP, you don't overwrite the old row — you close it (set valid_to) and open a new row with the new segment. This makes historical reporting point-in-time correct: the order from March sees the March segment, not the current one. See the ",(0,s.jsx)(i(),{href:(0,c.ZJ)("dbt"),className:"text-primary hover:underline",children:"dbt page"})," for the full implementation."]}),(0,s.jsx)(d.l,{code:`# SCD2 — Slowly Changing Dimensions simulation
# Shows row lifecycle when a customer's segment changes

from datetime import datetime

# Initial customer state (segment=Standard)
customer_v1 = {
    "customer_sk": "sk_001", "customer_id": "cust_1",
    "segment": "Standard", "valid_from": "2026-01-01", "valid_to": None,
}
print("=== Before segment change ===")
print(f"  Row 1: {customer_v1['segment']} | valid_from={customer_v1['valid_from']} | valid_to={customer_v1['valid_to']}")

# Customer upgrades to VIP — DON'T overwrite, CLOSE old row + OPEN new row
change_date = "2026-03-15"
customer_v1_closed = {**customer_v1, "valid_to": change_date}  # close old row
customer_v2 = {
    "customer_sk": "sk_002", "customer_id": "cust_1",
    "segment": "VIP", "valid_from": change_date, "valid_to": None,  # open new row
}
print()
print("=== After segment change (SCD2) ===")
print(f"  Row 1: {customer_v1_closed['segment']} | valid_from={customer_v1_closed['valid_from']} | valid_to={customer_v1_closed['valid_to']}")
print(f"  Row 2: {customer_v2['segment']} | valid_from={customer_v2['valid_from']} | valid_to={customer_v2['valid_to']}")

# Point-in-time query: what was the segment in February?
feb = "2026-02-15"
rows = [customer_v1_closed, customer_v2]
for r in rows:
    if r["valid_from"] <= feb and (r["valid_to"] is None or feb < r["valid_to"]):
        print()
print(f"\\n=== Point-in-time query: segment on {feb} ===")
for r in rows:
    if r["valid_from"] <= feb and (r["valid_to"] is None or feb < r["valid_to"]):
        print(f"  → segment = {r['segment']} (correct: this was before the upgrade)")
        break

# Point-in-time query: what was the segment in April?
apr = "2026-04-01"
print(f"\\n=== Point-in-time query: segment on {apr} ===")
for r in rows:
    if r["valid_from"] <= apr and (r["valid_to"] is None or apr < r["valid_to"]):
        print(f"  → segment = {r['segment']} (correct: this was after the upgrade)")
        break

print()
print("=" * 60)
print("SCD2 RULE: Don't overwrite history. Close it + open a new row.")
print("=" * 60)`,buttonLabel:"Run SCD2 simulation (Pyodide)"})]}),(0,s.jsxs)(n.iv,{title:"Pattern 3: dbt Slim CI — State-Aware Model Selection",description:"Run only changed models + downstream. CI runtime drops from 14m to 4m by comparing the new manifest against the previous one.",icon:(0,s.jsx)(v.A,{className:"h-5 w-5"}),badge:"interactive",children:[(0,s.jsxs)("p",{className:"text-sm text-muted-foreground leading-relaxed mb-3",children:["dbt slim CI compares the current manifest against the previous one (stored in S3). It runs ",(0,s.jsx)(l.R,{children:"dbt build --select state:modified+"})," — only changed models and their downstream dependencies. The CI runtime drops from 14 minutes (full build) to ~4 minutes (changed only). See the ",(0,s.jsx)(i(),{href:(0,c.ZJ)("cicd"),className:"text-primary hover:underline",children:"CI/CD page"})," for the full workflow."]}),(0,s.jsx)(d.l,{code:`# dbt Slim CI — state-aware model selection simulation
# Shows which models run when only 'stg_orders' changes

# All dbt models (312 in production; simplified to 8 here)
all_models = [
    {"name": "stg_shopify_orders",  "layer": "staging",      "deps": []},
    {"name": "stg_sfdc_accounts",    "layer": "staging",      "deps": []},
    {"name": "int_customer_conform", "layer": "intermediate", "deps": ["stg_sfdc_accounts"]},
    {"name": "int_orders_enriched",  "layer": "intermediate", "deps": ["stg_shopify_orders", "int_customer_conform"]},
    {"name": "fct_orders",           "layer": "marts",        "deps": ["int_orders_enriched"]},
    {"name": "dim_customer",         "layer": "marts",        "deps": ["int_customer_conform"]},
    {"name": "fct_returns",          "layer": "marts",        "deps": ["stg_shopify_orders"]},
    {"name": "fct_orders_serving",   "layer": "serving",     "deps": ["fct_orders", "dim_customer"]},
]

# Changed model (what the PR modified)
changed = {"stg_shopify_orders"}

# Compute downstream (state:modified+)
def downstream(model_name, all_deps):
    result = {model_name}
    changed_anything = True
    while changed_anything:
        changed_anything = False
        for m in all_deps:
            if m["name"] not in result and any(d in result for d in m["deps"]):
                result.add(m["name"])
                changed_anything = True
    return result

run_set = downstream("stg_shopify_orders", all_models)
skip_set = {m["name"] for m in all_models} - run_set

print("=" * 60)
print("dbt Slim CI — state:modified+ selection")
print("=" * 60)
print(f"\\nChanged model: stg_shopify_orders")
print(f"\\nWILL RUN ({len(run_set)} models):")
for m in sorted(run_set):
    layer = next((mm["layer"] for mm in all_models if mm["name"] == m), "?")
    print(f"  + {m} ({layer})")

print(f"\\nWILL SKIP ({len(skip_set)} models):")
for m in sorted(skip_set):
    layer = next((mm["layer"] for mm in all_models if mm["name"] == m), "?")
    print(f"  - {m} ({layer})")

print(f"\\nFull build: {len(all_models)} models = ~14 min")
print(f"Slim CI:    {len(run_set)} models = ~{max(1, len(run_set) * 14 // len(all_models))} min")
print(f"Saved:      {len(skip_set)} models skipped = ~{len(skip_set) * 14 // len(all_models)} min")
print("=" * 60)`,buttonLabel:"Run slim CI simulation (Pyodide)"})]}),(0,s.jsxs)(n.iv,{title:"Pattern 4: Session-Context Row-Level Security",description:"One SECURE VIEW + SESSION_CONTEXT() = 108 views replaced with 1. SSO attributes drive the session context; the view filters rows automatically.",icon:(0,s.jsx)(y.A,{className:"h-5 w-5"}),badge:"interactive",children:[(0,s.jsxs)("p",{className:"text-sm text-muted-foreground leading-relaxed mb-3",children:["The naive approach: one SECURE VIEW per role per region (108 views for 9 markets \xd7 12 roles). The right approach: ONE view + ",(0,s.jsx)(l.R,{children:"SESSION_CONTEXT('ROW_ACCESS_REGION')"}),". When the user logs in via SSO, their SAML attributes drive the session context. See the ",(0,s.jsx)(i(),{href:(0,c.ZJ)("snowflake"),className:"text-primary hover:underline",children:"Snowflake page"})," for the full SQL."]}),(0,s.jsx)(d.l,{code:`# Session-Context RLS simulation
# Shows how one view filters rows based on the user's session context

# Synthetic orders table (what a SECURE VIEW would query)
orders = [
    {"order_id": "ord_1", "region": "UK", "total": 42.50},
    {"order_id": "ord_2", "region": "EU", "total": 128.00},
    {"order_id": "ord_3", "region": "UK", "total": 15.99},
    {"order_id": "ord_4", "region": "NA", "total": 999.00},
    {"order_id": "ord_5", "region": "EU", "total": 67.30},
    {"order_id": "ord_6", "region": "UK", "total": 230.00},
]

# Simulate the SECURE VIEW with SESSION_CONTEXT
def secure_view(orders, session_region):
    """One view, filters by session context. Replaces 108 hand-coded views."""
    return [o for o in orders if o["region"] == session_region]

# Test: UK user logs in via SSO (session_region = "UK")
print("=" * 60)
print("Session-Context RLS — One view, infinite regions")
print("=" * 60)

for region in ["UK", "EU", "NA"]:
    result = secure_view(orders, region)
    total = sum(o["total"] for o in result)
    print(f"\\nUser with session_region={region}:")
    print(f"  Sees {len(result)} orders, total = \xa3{total:.2f}")
    for o in result:
        print(f"    {o['order_id']} | {o['region']} | \xa3{o['total']:.2f}")

print(f"\\nTotal orders in base table: {len(orders)}")
print(f"Views needed (naive approach): 9 regions x 12 roles = 108 views")
print(f"Views needed (session context): 1 view")
print(f"Reduction: 99.1%")
print("=" * 60)`,buttonLabel:"Run RLS simulation (Pyodide)"})]}),(0,s.jsxs)(n.iv,{title:"Pattern 5: Reverse-ETL via SQL Models",description:"Define the audience as a SQL model in Snowflake. Hightouch syncs it to Salesforce/Klaviyo/Meta. One definition, many destinations, zero drift.",icon:(0,s.jsx)(x.A,{className:"h-5 w-5"}),badge:"interactive",children:[(0,s.jsxs)("p",{className:"text-sm text-muted-foreground leading-relaxed mb-3",children:["Reverse-ETL pushes governed data OUT of the warehouse into business tools (CRM, CDP, ads). The audience is defined as a SQL model — versioned in Git, PII-masked, audit-logged. The same definition feeds Tableau (BI) and Hightouch (activation) — no metric drift. See the ",(0,s.jsx)(i(),{href:(0,c.ZJ)("fivetran-hightouch"),className:"text-primary hover:underline",children:"Fivetran & Hightouch page"})," for the full implementation."]}),(0,s.jsx)(d.l,{code:`# Reverse-ETL — SQL model audience + sync simulation
# Shows how one SQL definition feeds multiple destinations

# Synthetic customer data (what the SQL model would query)
customers = [
    {"customer_id": "cust_1", "ltv": 5200, "segment": "VIP",     "region": "UK", "email_hash": "a1b2c3..."},
    {"customer_id": "cust_2", "ltv": 850,  "segment": "Loyal",   "region": "EU", "email_hash": "d4e5f6..."},
    {"customer_id": "cust_3", "ltv": 1500, "segment": "VIP",    "region": "UK", "email_hash": "g7h8i9..."},
    {"customer_id": "cust_4", "ltv": 200,  "segment": "Active",  "region": "NA", "email_hash": "j0k1l2..."},
    {"customer_id": "cust_5", "ltv": 3200, "segment": "VIP",    "region": "EU", "email_hash": "m3n4o5..."},
]

# SQL model: top 5% by LTV (the "VIP audience")
sorted_by_ltv = sorted(customers, key=lambda c: c["ltv"], reverse=True)
threshold = sorted_by_ltv[0]["ltv"] * 0.95  # top 5%
vip_audience = [c for c in customers if c["ltv"] >= threshold]

print("=" * 60)
print("Reverse-ETL — One SQL model, multiple destinations")
print("=" * 60)
print(f"\\nSQL model: SELECT * FROM customers WHERE ltv >= {threshold:.0f}")
print(f"Audience size: {len(vip_audience)} customers")

# Sync to Salesforce (account team outreach)
sf_sync = [{"salesforce_account_id": c["customer_id"], "vip_label": c["segment"], "ltv": c["ltv"]} for c in vip_audience]
print(f"\\n→ Synced to Salesforce: {len(sf_sync)} records")
for r in sf_sync:
    print(f"    {r['salesforce_account_id']} | {r['vip_label']} | \xa3{r['ltv']}")

# Sync to Klaviyo (email retargeting) — PII masked
klaviyo_sync = [{"email_hash": c["email_hash"], "segment": c["segment"]} for c in vip_audience if c["region"] == "UK"]
print(f"\\n→ Synced to Klaviyo (UK only, PII masked): {len(klaviyo_sync)} records")
for r in klaviyo_sync:
    print(f"    {r['email_hash']} | {r['segment']}")

# Sync to Meta Ads (lookalike seeding)
meta_sync = [{"customer_id": c["customer_id"], "region": c["region"]} for c in vip_audience]
print(f"\\n→ Synced to Meta Ads (lookalike seeding): {len(meta_sync)} records")

print(f"\\nOne SQL definition → {len(sf_sync) + len(klaviyo_sync) + len(meta_sync)} total syncs across 3 destinations")
print(f"PII never leaves warehouse — email_hash only (not raw email)")
print(f"Audit log: every sync recorded with timestamp + record count")
print("=" * 60)`,buttonLabel:"Run reverse-ETL simulation (Pyodide)"})]}),(0,s.jsx)(n.iv,{title:"My deeper thought: patterns are the platform's API",description:"These 5 patterns are the reusable abstractions that make the platform defensible — not the technology choices, but the patterns those choices enable.",icon:(0,s.jsx)(b.A,{className:"h-5 w-5"}),badge:"Insight",children:(0,s.jsxs)("div",{className:"space-y-3 text-sm text-muted-foreground leading-relaxed",children:[(0,s.jsx)("p",{children:"Technologies change — Snowflake today, BigQuery tomorrow, DuckDB next year. But the patterns (Medallion, SCD2, slim CI, session RLS, reverse-ETL) are durable. They're the API of the platform — the reusable abstractions that survive technology churn."}),(0,s.jsxs)("p",{children:[(0,s.jsx)("strong",{className:"text-foreground/80",children:"The platform's value isn't in which tools it uses — it's in which patterns it has standardised."}),"A team that has internalised these 5 patterns can swap engines (Snowflake → BigQuery → DuckDB) without rewriting their data models. The patterns are engine-agnostic; the implementations are engine-specific. This separation is what makes the platform defensible."]}),(0,s.jsxs)("p",{children:["The interactive demos on this page make that abstraction concrete. Click ",(0,s.jsx)("strong",{children:"Run"})," on any pattern — see the logic execute. The same logic runs in production on Spark, Flink, or Snowflake. The pattern is the constant; the engine is the variable."]})]})}),(0,s.jsxs)(m.S,{pageTitle:"Data Engineering Patterns",children:[(0,s.jsx)(m.P,{title:"Data Engineering Patterns IS part of a larger system — no page stands alone",connectedTo:"ADR-001 (platform architecture)",children:(0,s.jsx)("p",{children:"This page about Data Engineering Patterns is not an isolated reference — it's a node in a graph. The platform's thesis is that the same math appears across genomics, fintech, maritime, and audio. Data Engineering Patterns connects to the elegant-code cards via shared equations, and to the living-equation pages via live demos. The reader who arrives here looking for facts leaves with a map of where Data Engineering Patterns sits in the computational-science landscape."})}),(0,s.jsx)(m.P,{title:"The technology will change; the math won't",connectedTo:"ADR-055 (cross-disciplinary scope)",children:(0,s.jsx)("p",{children:"In a decade, the specific tools on this page (Data Engineering Patterns) may be replaced. But the underlying mathematics — the equations, the distributions, the optimisation rules — will be the same. SVD was invented in 1873 and still runs on NumPy today. Attention was described in 2017 and will run on whatever replaces PyTorch. The platform invests in the MATH, not the tools, because the math is the part that survives technology turnover."})}),(0,s.jsx)(m.P,{title:"The fold pattern respects the reader's attention",connectedTo:"ADR-050 (fold-section architecture)",children:(0,s.jsx)("p",{children:"This page has fold sections (collapsed by default) that reveal deeper content on demand — equation family comparisons, LaTeX derivations, production patterns, expected outputs, and citations. The basic content is visible immediately; the deeper phases are there when the reader is ready. Progressive disclosure isn't just UX — it's epistemological. A reader who wants the summary gets it; a reader who wants the derivation clicks to expand. Both are served by the same page."})}),(0,s.jsx)(m.P,{title:"The output IS the proof — not just the equation",connectedTo:"ADR-034 (ESM-2 + AlphaFold2 adoption)",children:(0,s.jsx)("p",{children:"Where this page has interactive demos (Pyodide + sliders + charts), the visual output IS the argument. Seeing a chart update as you drag a slider communicates the math in a way no formula can. The brain's pattern-recognition system processes the visual output faster than the verbal/analytical pathway. That's why the platform pairs every equation with a live demo — the output plays to a different level of the brain than the prose."})}),(0,s.jsx)(m.P,{title:"In a decade, this page will evolve — and that's the point",connectedTo:"ADR-022 (pgvector for variant embeddings)",children:(0,s.jsx)("p",{children:"The datasets, libraries, and tools on this page will be updated as technology evolves. The 1000-Genomes Project will become the 10M-Genomes Project. NumPy may be replaced by a WebGPU-native array library. PyTorch may give way to a successor. But the math — SVD, Attention, Poisson, FFT, Bayes, Kalman, GBM — will be the same. The platform is designed for this evolution: the equations are the anchor, the tools are the amplifier, and the fold sections let us update the tools without rewriting the page."})})]}),(0,s.jsx)(o.T,{relatedPages:[{id:"connections",reason:"Trace this topic's connections across the platform's math graph"},{id:"knowledge",reason:"Continue to knowledge — see also from this page"},{id:"databricks",reason:"Continue to databricks — see also from this page"}]}),(0,s.jsxs)("div",{className:"flex flex-wrap gap-2",children:[(0,s.jsx)(i(),{href:(0,c.ZJ)("knowledge"),className:"text-sm text-primary hover:underline",children:"→ Knowledge Hub (ADRs + pattern library)"}),(0,s.jsx)("span",{className:"text-muted-foreground",children:"\xb7"}),(0,s.jsx)(i(),{href:(0,c.ZJ)("databricks"),className:"text-sm text-primary hover:underline",children:"→ Databricks (Medallion implementation)"}),(0,s.jsx)("span",{className:"text-muted-foreground",children:"\xb7"}),(0,s.jsx)(i(),{href:(0,c.ZJ)("arrow"),className:"text-sm text-primary hover:underline",children:"→ Apache Arrow (ADR-017: Flight protocol)"})]})]})}},19776:(e,t,r)=>{"use strict";r.d(t,{N:()=>l,R:()=>d});var s=r(95155),a=r(12115),i=r(94514),n=r(67635),o=r(89239);function l({code:e,language:t="sql",filename:r,highlight:l=[]}){let[d,c]=(0,a.useState)(!1),h=e.replace(/\n$/,"").split("\n"),m=async()=>{try{await navigator.clipboard.writeText(e),c(!0),setTimeout(()=>c(!1),1500)}catch{}};return(0,s.jsxs)("div",{className:"rounded-md border border-border/60 bg-[oklch(0.16_0.005_240)] text-[oklch(0.97_0.005_60)] overflow-hidden",children:[(0,s.jsxs)("div",{className:"flex items-center justify-between px-3 py-1.5 border-b border-white/10 bg-white/5",children:[(0,s.jsxs)("div",{className:"flex items-center gap-2 text-[11px] text-white/60 font-mono",children:[(0,s.jsx)("span",{className:"h-2 w-2 rounded-full bg-rose-400"}),(0,s.jsx)("span",{className:"h-2 w-2 rounded-full bg-amber-400"}),(0,s.jsx)("span",{className:"h-2 w-2 rounded-full bg-emerald-400"}),(0,s.jsx)("span",{className:"ml-2 uppercase tracking-wider",children:t}),r&&(0,s.jsxs)("span",{className:"text-white/40",children:["\xb7 ",r]})]}),(0,s.jsxs)(o.$,{variant:"ghost",size:"sm",className:"h-6 px-2 text-[11px] text-white/70 hover:text-white hover:bg-white/10",onClick:m,"aria-label":"Copy code",children:[d?(0,s.jsx)(i.A,{className:"h-3 w-3 mr-1"}):(0,s.jsx)(n.A,{className:"h-3 w-3 mr-1"}),d?"Copied":"Copy"]})]}),(0,s.jsx)("pre",{className:"code-scroll overflow-x-auto p-3 text-[12.5px] leading-relaxed font-mono",children:(0,s.jsx)("code",{children:h.map((e,t)=>{let r=t+1,a=l.includes(r);return(0,s.jsxs)("div",{className:["flex",a?"bg-primary/20 -mx-3 px-3 border-l-2 border-primary":""].join(" "),children:[(0,s.jsx)("span",{className:"select-none text-white/30 w-8 inline-block text-right pr-3 shrink-0",children:r}),(0,s.jsx)("span",{className:"whitespace-pre",children:e||" "})]},r)})})})]})}function d({children:e}){return(0,s.jsx)("code",{className:"rounded bg-muted px-1.5 py-0.5 text-[12px] font-mono text-foreground/90 border border-border/60",children:e})}},26075:(e,t,r)=>{"use strict";r.d(t,{A:()=>s});let s=(0,r(6404).A)("boxes",[["path",{d:"M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z",key:"lc1i9w"}],["path",{d:"m7 16.5-4.74-2.85",key:"1o9zyk"}],["path",{d:"m7 16.5 5-3",key:"va8pkn"}],["path",{d:"M7 16.5v5.17",key:"jnp8gn"}],["path",{d:"M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z",key:"8zsnat"}],["path",{d:"m17 16.5-5-3",key:"8arw3v"}],["path",{d:"m17 16.5 4.74-2.85",key:"8rfmw"}],["path",{d:"M17 16.5v5.17",key:"k6z78m"}],["path",{d:"M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z",key:"1xygjf"}],["path",{d:"M12 8 7.26 5.15",key:"1vbdud"}],["path",{d:"m12 8 4.74-2.85",key:"3rx089"}],["path",{d:"M12 13.5V8",key:"1io7kd"}]])},31025:(e,t,r)=>{"use strict";r.d(t,{A:()=>s});let s=(0,r(6404).A)("git-branch",[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]])},33024:(e,t,r)=>{"use strict";r.d(t,{A:()=>s});let s=(0,r(6404).A)("layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]])},41199:(e,t,r)=>{Promise.resolve().then(r.bind(r,14946))},44478:(e,t,r)=>{"use strict";r.d(t,{A:()=>s});let s=(0,r(6404).A)("shield-check",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]])},53961:(e,t,r)=>{"use strict";r.d(t,{A:()=>s});let s=(0,r(6404).A)("zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]])},63888:(e,t,r)=>{"use strict";r.d(t,{A:()=>s});let s=(0,r(6404).A)("arrow-left-right",[["path",{d:"M8 3 4 7l4 4",key:"9rb6wj"}],["path",{d:"M4 7h16",key:"6tx8e3"}],["path",{d:"m16 21 4-4-4-4",key:"siv7j2"}],["path",{d:"M20 17H4",key:"h6l3hr"}]])},66349:(e,t,r)=>{"use strict";r.d(t,{l:()=>y});var s=r(95155),a=r(12115),i=r(80642),n=r(39430),o=r(89239),l=r(45160),d=r(6296),c=r(12651),h=r(13545),m=r(20232),u=r(10762);let p=null,g="0.26.2",f=`https://cdn.jsdelivr.net/pyodide/v${g}/full/`;async function v(){return p||(p=(async()=>(await new Promise((e,t)=>{if(window.loadPyodide)return void e();let r=document.createElement("script");r.src=`${f}pyodide.js`,r.onload=()=>e(),r.onerror=()=>t(Error("Failed to load Pyodide bootstrap")),document.head.appendChild(r)}),await window.loadPyodide({indexURL:f})))().catch(e=>{throw p=null,e}))}function y({code:e,buttonLabel:t="Run in browser",preamble:r,compact:p=!1,onOutput:f,hideTextOutput:y=!1}){let[x,b]=(0,a.useState)("idle"),[_,w]=(0,a.useState)(""),[k,j]=(0,a.useState)(null),[S,N]=(0,a.useState)(null),A=(0,a.useRef)(null),T=(0,a.useCallback)(async()=>{b("loading"),j(null),w("Loading Pyodide runtime (~10MB)…\nFirst run takes 5-10s on a typical connection.\nSubsequent runs are instant.\n");let t=performance.now();try{let s=await v(),a=Math.round(performance.now()-t);N(a);let i=[],n=e=>{i.push(e)};try{s.setStdout({batched:n}),s.setStderr({batched:n})}catch{try{s.setStdout(n),s.setStderr(n)}catch{}}let o=(r??"")+"\n"+e,l=[];if(/\bnumpy\b|\bnp\./.test(o)&&l.push("numpy"),/\bscipy\b|\bsp\./.test(o)&&l.push("scipy"),/\bsklearn\b|\bGradientBoosting\b|\bRandomForest\b|\btrain_test_split\b|\bKMeans\b|\bSVC\b|\bLogisticRegression\b/.test(o)&&l.push("scikit-learn"),/\bpandas\b|\bpd\./.test(o)&&l.push("pandas"),/\bpyarrow\b|\bpq\./.test(o)&&l.push("pyarrow"),l.length>0){w(e=>e+`
Loading packages: ${l.join(", ")}…
`);try{await s.loadPackage(l)}catch{}}b("running"),w(e=>e+`
Pyodide loaded in ${a}ms. Running analysis…

`),r&&await s.runPythonAsync(r),await s.runPythonAsync(e);let d=i.join("");w(e=>e+(d||"(no output)")),b("done"),f&&f(d)}catch(r){let e=r instanceof Error?r.message:String(r),t=e.includes("Failed to load Pyodide bootstrap")?"\n\nHint: check your internet connection — Pyodide loads from a CDN (jsdelivr.net). Click again to retry.":e.includes("NetworkError")||e.includes("Failed to fetch")?"\n\nHint: network error loading Pyodide. Check your connection and click again to retry.":"";j(e+t),b("error"),w(r=>r+`
Error: ${e}${t}`)}},[e,r,f]);return(0,a.useEffect)(()=>{A.current&&(A.current.scrollTop=A.current.scrollHeight)},[_]),(0,s.jsxs)("div",{className:`mt-3 ${p?"":"rounded-md border border-primary/30 bg-primary/3 p-3"}`,children:[(0,s.jsxs)("div",{className:"flex items-center gap-2",children:[(0,s.jsxs)(o.$,{size:p?"sm":"default",variant:"running"===x||"loading"===x?"outline":"error"===x?"destructive":"default",className:"gap-1.5",onClick:T,disabled:"loading"===x||"running"===x,children:["loading"===x||"running"===x?(0,s.jsx)(d.A,{className:"h-3.5 w-3.5 animate-spin"}):"done"===x?(0,s.jsx)(c.A,{className:"h-3.5 w-3.5"}):"error"===x?(0,s.jsx)(h.A,{className:"h-3.5 w-3.5"}):(0,s.jsx)(m.A,{className:"h-3.5 w-3.5"}),"error"===x?`Retry: ${t}`:"done"===x?`Re-run: ${t}`:t]}),!p&&(0,s.jsxs)(l.E,{variant:"outline",className:"text-[10px] gap-1",children:[(0,s.jsx)(u.A,{className:"h-2.5 w-2.5"}),"Pyodide v",g]}),null!==S&&"done"===x&&(0,s.jsxs)("span",{className:"text-[10px] text-muted-foreground",children:["Runtime: ",S,"ms load + execution"]})]}),(0,s.jsx)(i.N,{children:("idle"!==x||_)&&!y&&(0,s.jsx)(n.P.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},className:"mt-2",children:(0,s.jsx)("div",{ref:A,className:`rounded-md bg-[oklch(0.16_0.005_240)] text-[oklch(0.97_0.005_60)] p-2.5 text-[11px] font-mono leading-relaxed overflow-x-auto code-scroll max-h-64 overflow-y-auto ${k?"border border-rose-500/40":"border border-emerald-500/30"}`,children:(0,s.jsx)("pre",{className:"whitespace-pre-wrap",children:_})})})})]})}},67635:(e,t,r)=>{"use strict";r.d(t,{A:()=>s});let s=(0,r(6404).A)("copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]])},83036:(e,t,r)=>{"use strict";r.d(t,{P:()=>d,S:()=>c});var s=r(95155),a=r(98500),i=r.n(a),n=r(44071),o=r(97810),l=r(85757);function d({title:e,connectedTo:t,researchHref:r,children:a}){return(0,s.jsxs)("div",{className:"rounded-md border border-primary/30 bg-primary/5 p-4 space-y-2",children:[(0,s.jsxs)("div",{className:"flex items-start gap-2",children:[(0,s.jsx)(n.A,{className:"h-4 w-4 text-primary mt-0.5 shrink-0"}),(0,s.jsxs)("div",{className:"flex-1 min-w-0",children:[(0,s.jsx)("p",{className:"text-sm font-semibold text-foreground/90 leading-tight",children:e}),t&&(0,s.jsxs)("div",{className:"flex items-center gap-1.5 mt-1",children:[(0,s.jsx)(o.A,{className:"h-3 w-3 text-muted-foreground"}),(0,s.jsxs)(i(),{href:r??(0,l.ZJ)("research"),className:"text-[10px] text-muted-foreground hover:text-primary hover:underline",children:["Connected to: ",t," →"]})]})]})]}),(0,s.jsx)("div",{className:"text-xs text-muted-foreground leading-relaxed space-y-2 pl-6",children:a})]})}function c({pageTitle:e,children:t}){return(0,s.jsxs)("div",{className:"space-y-4",children:[(0,s.jsxs)("div",{className:"flex items-center gap-2 border-b border-border/60 pb-2",children:[(0,s.jsx)(n.A,{className:"h-5 w-5 text-primary"}),(0,s.jsxs)("h2",{className:"text-base font-bold text-foreground/90",children:["My deeper thoughts — ",e]})]}),(0,s.jsx)("p",{className:"text-xs text-muted-foreground italic leading-relaxed",children:"These are not summaries. They are arguments — the kind of connections a reader with serious grey matter would make after living with the material for years. Each thought connects to the platform's research section (ADRs, papers, decision records) so it's traceable, not just opinionated."}),(0,s.jsx)("div",{className:"space-y-3",children:t})]})}},89239:(e,t,r)=>{"use strict";r.d(t,{$:()=>l});var s=r(95155);r(12115);var a=r(42442),i=r(18460),n=r(40980);let o=(0,i.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",destructive:"bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9"}},defaultVariants:{variant:"default",size:"default"}});function l({className:e,variant:t,size:r,asChild:i=!1,...l}){let d=i?a.DX:"button";return(0,s.jsx)(d,{"data-slot":"button",className:(0,n.cn)(o({variant:t,size:r,className:e})),...l})}},94514:(e,t,r)=>{"use strict";r.d(t,{A:()=>s});let s=(0,r(6404).A)("check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]])},97810:(e,t,r)=>{"use strict";r.d(t,{A:()=>s});let s=(0,r(6404).A)("book-open",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]])}},e=>{e.O(0,[6919,8500,9430,3493,9620,6722,8441,3794,7358],()=>e(e.s=41199)),_N_E=e.O()}]);