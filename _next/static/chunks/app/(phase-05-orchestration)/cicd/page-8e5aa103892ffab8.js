(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1699],{1407:(e,t,a)=>{"use strict";a.d(t,{A:()=>r});let r=(0,a(6404).A)("cloud",[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]])},15573:(e,t,a)=>{"use strict";a.d(t,{A:()=>r});let r=(0,a(6404).A)("server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]])},15989:(e,t,a)=>{"use strict";a.d(t,{n:()=>g});var r=a(95155),s=a(12115),i=a(80642),n=a(39430),o=a(89239),l=a(45160),d=a(6296),c=a(12651),h=a(13545),u=a(20232),m=a(65576);let p=new Uint8Array([0,97,115,109,1,0,0,0,1,7,1,96,2,127,127,1,127,3,2,1,0,7,7,1,3,97,100,100,0,0,10,9,1,7,0,32,0,32,1,106,11]);function g({buttonLabel:e="Run in browser (Wasm)",description:t="Loads a hand-assembled WebAssembly binary (41 bytes) and calls the exported `add(i32, i32) -> i32` function. In production, this would be a Rust/C binary compiled via `cargo build --target wasm32-wasi` or `emcc`.",sourceLanguage:a="Rust/C"}){let[g,f]=(0,s.useState)("idle"),[x,y]=(0,s.useState)(""),[b,k]=(0,s.useState)(null),v=(0,s.useCallback)(async()=>{f("running"),y("Instantiating WebAssembly module (41 bytes)…\n");let e=performance.now();try{let{instance:t}=await WebAssembly.instantiate(p),r=t.exports.add;if(!r)throw Error("Exported function 'add' not found in Wasm module");let s=Math.round(performance.now()-e);k(s);let i=[];for(let[e,t]of(i.push(`✓ Wasm module instantiated in ${s}ms (41 bytes)`),i.push(`  Source language: ${a} (compiled to wasm32)`),i.push("  Exported function: add(i32, i32) -> i32"),i.push(""),i.push("Test cases:"),[[2,3],[100,200],[42,58],[-10,20],[1e6,1]])){let a=r(e,t);i.push(`  add(${e}, ${t}) = ${a}`)}i.push(""),i.push("✓ All calls successful. The same .wasm binary would run in"),i.push("  any browser, any OS, any Wasm runtime — portable native code."),y(i.join("\n")),f("done")}catch(t){let e=t instanceof Error?t.message:String(t);y(t=>t+`
Error: ${e}`),f("error")}},[a]);return(0,r.jsxs)("div",{className:"mt-3 rounded-md border border-primary/30 bg-primary/3 p-3",children:[(0,r.jsxs)("div",{className:"flex items-center gap-2",children:[(0,r.jsxs)(o.$,{size:"sm",variant:"running"===g?"outline":"default",className:"gap-1.5",onClick:v,disabled:"running"===g,children:["running"===g?(0,r.jsx)(d.A,{className:"h-3.5 w-3.5 animate-spin"}):"done"===g?(0,r.jsx)(c.A,{className:"h-3.5 w-3.5"}):"error"===g?(0,r.jsx)(h.A,{className:"h-3.5 w-3.5"}):(0,r.jsx)(u.A,{className:"h-3.5 w-3.5"}),e]}),(0,r.jsxs)(l.E,{variant:"outline",className:"text-[10px] gap-1",children:[(0,r.jsx)(m.A,{className:"h-2.5 w-2.5"}),"WebAssembly \xb7 41 bytes"]}),null!==b&&"done"===g&&(0,r.jsxs)("span",{className:"text-[10px] text-muted-foreground",children:["Instantiated in ",b,"ms"]})]}),t&&(0,r.jsx)("p",{className:"text-[11px] text-muted-foreground mt-2 leading-relaxed",children:t}),(0,r.jsx)(i.N,{children:"idle"!==g&&x&&(0,r.jsx)(n.P.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},className:"mt-2",children:(0,r.jsx)("div",{className:`rounded-md bg-[oklch(0.16_0.005_240)] text-[oklch(0.97_0.005_60)] p-2.5 text-[11px] font-mono leading-relaxed overflow-x-auto code-scroll max-h-64 overflow-y-auto ${"error"===g?"border border-rose-500/40":"border border-emerald-500/30"}`,children:(0,r.jsx)("pre",{className:"whitespace-pre-wrap",children:x})})})})]})}},30971:(e,t,a)=>{"use strict";a.d(t,{A:()=>r});let r=(0,a(6404).A)("workflow",[["rect",{width:"8",height:"8",x:"3",y:"3",rx:"2",key:"by2w9f"}],["path",{d:"M7 11v4a2 2 0 0 0 2 2h4",key:"xkn7yn"}],["rect",{width:"8",height:"8",x:"13",y:"13",rx:"2",key:"1cgmvn"}]])},31025:(e,t,a)=>{"use strict";a.d(t,{A:()=>r});let r=(0,a(6404).A)("git-branch",[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]])},33024:(e,t,a)=>{"use strict";a.d(t,{A:()=>r});let r=(0,a(6404).A)("layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]])},34112:(e,t,a)=>{"use strict";a.d(t,{CicdPage:()=>L});var r=a(95155),s=a(98500),i=a.n(s),n=a(27774),o=a(58381),l=a(19776),d=a(37108),c=a(15989),h=a(10762),u=a(32824),m=a(85757),p=a(45160),g=a(83036),f=a(49235),x=a(1407),y=a(31025),b=a(30971),k=a(58411),v=a(15573),_=a(52484),w=a(44478),j=a(33024),A=a(27413),S=a(4450),N=a(48035),T=a(28408),C=a(32539),R=a(59656),D=a(18662),E=a(93459),P=a(75045);let M=`# ============================================================
# terraform/snowflake/main.tf — Snowflake as code
# ============================================================
terraform {
  required_version = ">= 1.6"
  backend "s3" {
    bucket = "moderndatascieng-tfstate"
    key    = "snowflake/prod/terraform.tfstate"
    region = "eu-west-1"
  }
}

provider "snowflake" {
  account  = data.aws_secretsmanager_secret_version.snowflake.account
  user     = "TERRAFORM_SVC"
  role     = "SYSADMIN"
  authenticator = "snowflake_jwt"
  private_key  = data.aws_secretsmanager_secret_version.snowflake.private_key
}

# Databases
resource "snowflake_database" "prod" {
  name = "MODERNDATASCIENG_PROD"
  comment = "Production analytics database"
}

# Schemas (one per business domain)
resource "snowflake_schema" "gold" {
  database = snowflake_database.prod.name
  name     = "GOLD"
  comment  = "Certified Gold marts"
}

# Warehouses — see Snowflake page for the sizing matrix
resource "snowflake_warehouse" "transform" {
  name           = "WH_DBT_TRANSFORM"
  warehouse_size = "MEDIUM"
  auto_suspend   = 30
  auto_resume    = true
  min_cluster_count = 1
  max_cluster_count = 8
  scaling_policy    = "STANDARD"
}

# Roles + grants — fully version-controlled
resource "snowflake_role" "transformer" {
  name = "TRANSFORMER"
}

resource "snowflake_grant_privileges_to_role" "transformer_dbt" {
  role = snowflake_role.transformer.name
  privileges = ["USAGE", "CREATE TABLE", "CREATE VIEW"]
  on_schema {
    schema = "\${snowflake_schema.gold.fully_qualified_name}"
  }
}

# Resource monitor — cap monthly credit burn
resource "snowflake_resource_monitor" "platform" {
  name           = "RM_PLATFORM"
  credit_quota  = 12000
  frequency     = "MONTHLY"
  start_timestamp = "IMMEDIATELY"
  notify_users   = ["DATA_PLATFORM@MODERNDATASCIENG.COM"]
  triggers {
    on_80_percent  = "NOTIFY"
    on_90_percent  = "SUSPEND"
    on_95_percent  = "SUSPEND_IMMEDIATE"
  }
}
`,O=`# .github/workflows/promote-dbt-prod.yml
name: Promote dbt → prod
on:
  workflow_dispatch:
    inputs:
      commit_sha:
        description: "Commit SHA to promote"
        required: true
permissions:
  idem-token: write
  contents: read

jobs:
  promote:
    runs-on: ubuntu-latest
    environment:
      name: production          # gated, manual approval
      url: https://github.com/moderndatascieng/data-platform
    env:
      DBT_PROFILES_DIR: transform/dbt
    steps:
      - uses: actions/checkout@v4
        with:
          ref: \${{ inputs.commit_sha }}

      - name: OIDC → Snowflake
        uses: snowflake-actions/login@v1
        with:
          role: TRANSFORMER
          authenticator: oidc

      - name: Install dbt
        run: pip install dbt-snowflake==1.7.0

      - name: dbt deps
        run: cd transform/dbt && dbt deps

      - name: dbt build — production target
        run: |
          cd transform/dbt
          dbt build --target prod \\
            --state ./target \\
            --select state:modified+ \\
            --defer --state ./target

      - name: dbt docs generate
        run: cd transform/dbt && dbt docs generate

      - name: Publish docs to internal site
        run: aws s3 sync target/ s3://docs.moderndatascieng.data/dbt/ --delete

      - name: Notify Slack
        run: |
          curl -X POST -H 'Content-type: application/json' \\
            --data "{"text": "✅ dbt promoted to prod @ \${{ inputs.commit_sha }}"}" \\
            \${SLACK_WEBHOOK}
`,G=`Git workflow — trunk-based with short-lived branches

  main (always green)
   │
   │ ▲ PR (signed commit + 2 reviews + dbt slim CI)
   │ │
   │ │ ▲ feature/data-platform/new-source-sap-ariba
   │ │ │   - 1 dbt staging model
   │ │ │   - 1 silver conform
   │ │ │   - 2 dbt tests
   │ │ │   - 1 schema-registry PR
   │ │ ▼
   │ ▼ merge → main
   │
   │   ┌────────────────────────────────────────────┐
   │   │  Daily 02:00 UTC — staging full dbt run    │
   │   └────────────────────────────────────────────┘
   │
   │   Manual approval gate (workflow_dispatch)
   ▼   ─────────────────────────────────────►  prod
                                              (dbt build --target prod)
                                              + Snowflake migrate apply
                                              + Databricks asset bundle deploy
`,I=u.wm.map(e=>({area:e.area,fy24:e.fy24,fy25:e.fy25,trend:e.trend}));function L(){return(0,r.jsxs)("div",{className:"space-y-8",children:[(0,r.jsx)(o.zY,{eyebrow:"Delivery — CI/CD & DevOps",title:"Git, GitHub Actions, Terraform, dbt slim CI",description:"Every change is shipped via PR with state-aware dbt CI, Terraform plan, schema-registry PR for drift, and OIDC-based workload identity (no long-lived secrets). Production promotion is gated by a manual approval and idempotent — re-runs are safe.",right:(0,r.jsxs)("div",{className:"flex gap-2",children:[(0,r.jsxs)(p.E,{variant:"outline",className:"gap-1.5",children:[(0,r.jsx)(f.A,{className:"h-3 w-3"})," Trunk-based"]}),(0,r.jsxs)(p.E,{variant:"outline",className:"gap-1.5",children:[(0,r.jsx)(x.A,{className:"h-3 w-3"})," IaC"]})]})}),(0,r.jsxs)("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-3",children:[(0,r.jsx)(o.nO,{label:"PR merge → prod (median)",value:"2h 11m",delta:"−43%",deltaTone:"up",hint:"state-aware CI"}),(0,r.jsx)(o.nO,{label:"CI runtime (dbt slim)",value:"4m 18s",delta:"−67%",deltaTone:"up",hint:"vs full run"}),(0,r.jsx)(o.nO,{label:"Production deploys / wk",value:"14",delta:"+6 YoY",deltaTone:"up",hint:"with rollback runbook"}),(0,r.jsx)(o.nO,{label:"Mean rollback time",value:"6 min",delta:"P95",deltaTone:"flat",hint:"git revert + dbt build"})]}),(0,r.jsx)(o.iv,{title:"Git workflow — trunk-based with short-lived branches",description:"Long-lived branches are forbidden. Every PR is a single feature, slim CI runs only changed models + downstream, and a daily staging run keeps the staging environment warm.",icon:(0,r.jsx)(y.A,{className:"h-5 w-5"}),children:(0,r.jsx)(l.N,{code:G,language:"text",filename:"git_flow.txt"})}),(0,r.jsx)(o.iv,{title:"Pipelines — at a glance",description:"Six pipelines cover the entire delivery surface: dbt CI, Terraform plan/apply, Snowflake migrate, Databricks asset bundle deploy, and prod promotion.",icon:(0,r.jsx)(b.A,{className:"h-5 w-5"}),contentClassName:"p-0",children:(0,r.jsx)("div",{className:"overflow-x-auto",children:(0,r.jsxs)("table",{className:"w-full text-sm",children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{className:"border-b border-border/60 bg-muted/40",children:[(0,r.jsx)("th",{className:"text-left px-4 py-2.5 text-xs uppercase tracking-wider text-muted-foreground",children:"Pipeline"}),(0,r.jsx)("th",{className:"text-left px-4 py-2.5 text-xs uppercase tracking-wider text-muted-foreground",children:"Trigger"}),(0,r.jsx)("th",{className:"text-left px-4 py-2.5 text-xs uppercase tracking-wider text-muted-foreground",children:"Steps"}),(0,r.jsx)("th",{className:"text-left px-4 py-2.5 text-xs uppercase tracking-wider text-muted-foreground",children:"Duration"}),(0,r.jsx)("th",{className:"text-left px-4 py-2.5 text-xs uppercase tracking-wider text-muted-foreground",children:"Env"})]})}),(0,r.jsx)("tbody",{children:u.mo.map(e=>(0,r.jsxs)("tr",{className:"border-b border-border/40 last:border-0",children:[(0,r.jsx)("td",{className:"px-4 py-2.5 font-mono text-xs font-semibold",children:e.name}),(0,r.jsx)("td",{className:"px-4 py-2.5 text-xs text-muted-foreground",children:e.trigger}),(0,r.jsx)("td",{className:"px-4 py-2.5 font-mono text-[11px]",children:e.steps}),(0,r.jsx)("td",{className:"px-4 py-2.5 font-mono text-xs tabular-nums",children:e.duration}),(0,r.jsx)("td",{className:"px-4 py-2.5",children:(0,r.jsx)(p.E,{variant:"outline",className:"text-[10px]",children:e.env})})]},e.name))})]})})}),(0,r.jsx)(o.iv,{title:"Terraform — Snowflake as code",description:"Every Snowflake object (databases, schemas, warehouses, roles, grants, resource monitors) is provisioned via Terraform. Manual SQL changes are forbidden.",icon:(0,r.jsx)(x.A,{className:"h-5 w-5"}),children:(0,r.jsx)(l.N,{code:M,language:"hcl",filename:"terraform/snowflake/main.tf",highlight:[15,16,17,18,24,25,26,27,33,34,35,36,37,38,39,40,41,54,55,56,57,58,59,60,61,62]})}),(0,r.jsx)(o.iv,{title:"Production promotion — gated workflow",description:"OIDC for auth (no long-lived secrets), state-aware build, docs published to internal site, Slack notification on success.",icon:(0,r.jsx)(k.A,{className:"h-5 w-5"}),children:(0,r.jsx)(l.N,{code:O,language:"yaml",filename:".github/workflows/promote-dbt-prod.yml",highlight:[10,11,12,13,14,15,16,17,18,35,36,37,38,39,40]})}),(0,r.jsxs)("div",{className:"grid lg:grid-cols-2 gap-4",children:[(0,r.jsx)(o.iv,{title:"FinOps — FY24 vs FY25 (synthetic)",description:"Platform cost tracking is fully attributed to workload. Photon, Z-ORDER and cluster pools drove a 19% cost-per-TB reduction YoY.",icon:(0,r.jsx)(v.A,{className:"h-5 w-5"}),badge:"Synthetic",children:(0,r.jsx)("div",{className:"h-56",children:(0,r.jsx)(S.u,{width:"100%",height:"100%",children:(0,r.jsxs)(N.E,{data:I,margin:{top:10,right:8,left:-10,bottom:5},children:[(0,r.jsx)(T.d,{strokeDasharray:"3 3",stroke:"oklch(0.85 0 0 / 0.3)"}),(0,r.jsx)(C.W,{dataKey:"area",tick:{fontSize:10},stroke:"oklch(0.5 0 0)",angle:-15,textAnchor:"end",height:50}),(0,r.jsx)(R.h,{tick:{fontSize:11},stroke:"oklch(0.5 0 0)"}),(0,r.jsx)(D.m,{formatter:e=>`\xa3${e}M`,contentStyle:{background:"var(--popover)",border:"1px solid var(--border)",borderRadius:6,fontSize:12}}),(0,r.jsx)(E.s,{wrapperStyle:{fontSize:11}}),(0,r.jsx)(P.y,{dataKey:"fy24",fill:"var(--chart-2)",name:"FY24",radius:[4,4,0,0]}),(0,r.jsx)(P.y,{dataKey:"fy25",fill:"var(--chart-1)",name:"FY25",radius:[4,4,0,0]})]})})})}),(0,r.jsx)(o.iv,{title:"DevOps practices",icon:(0,r.jsx)(_.A,{className:"h-5 w-5"}),children:(0,r.jsxs)("ul",{className:"text-sm space-y-2 text-muted-foreground",children:[(0,r.jsx)("li",{children:"• Trunk-based Git with short-lived feature branches"}),(0,r.jsx)("li",{children:"• Conventional commits + signed commits (GPG / Sigstore)"}),(0,r.jsx)("li",{children:"• 2-reviewer approval required on every PR"}),(0,r.jsx)("li",{children:"• CODEOWNERS per folder (dbt models, Terraform, Spark)"}),(0,r.jsx)("li",{children:"• Renovate for automated dependency bumps"}),(0,r.jsx)("li",{children:"• Pre-commit hooks: sqlfluff, tflint, ruff, prettier"}),(0,r.jsx)("li",{children:"• Runbooks in repo + status page (internal)"}),(0,r.jsx)("li",{children:"• Game days quarterly — chaos engineering on the pipeline"})]})})]}),(0,r.jsxs)("div",{className:"grid md:grid-cols-3 gap-4",children:[(0,r.jsx)(o.iv,{title:"Secrets & identity",icon:(0,r.jsx)(w.A,{className:"h-5 w-5"}),children:(0,r.jsxs)("ul",{className:"text-sm space-y-1.5 text-muted-foreground",children:[(0,r.jsx)("li",{children:"• OIDC for GitHub Actions → Snowflake / Databricks / AWS"}),(0,r.jsx)("li",{children:"• Workload identity, no long-lived keys"}),(0,r.jsx)("li",{children:"• Secrets in Azure Key Vault + AWS Secrets Manager"}),(0,r.jsx)("li",{children:"• Secret rotation automated via Lambda"}),(0,r.jsx)("li",{children:"• Audit log to Datadog + Splunk"})]})}),(0,r.jsx)(o.iv,{title:"Reproducibility",icon:(0,r.jsx)(j.A,{className:"h-5 w-5"}),children:(0,r.jsxs)("ul",{className:"text-sm space-y-1.5 text-muted-foreground",children:[(0,r.jsx)("li",{children:"• Every environment is reproducible from Git"}),(0,r.jsx)("li",{children:"• Terraform state in S3 with DynamoDB lock"}),(0,r.jsx)("li",{children:"• dbt state artefact shared via S3 (slim CI)"}),(0,r.jsx)("li",{children:"• Container images tagged with Git SHA"}),(0,r.jsx)("li",{children:"• Databricks asset bundles versioned"})]})}),(0,r.jsx)(o.iv,{title:"Reliability",icon:(0,r.jsx)(v.A,{className:"h-5 w-5"}),children:(0,r.jsxs)("ul",{className:"text-sm space-y-1.5 text-muted-foreground",children:[(0,r.jsx)("li",{children:"• Blue/green for dbt model changes (view swap)"}),(0,r.jsx)("li",{children:"• Snowflake time-travel 90d for instant rollback"}),(0,r.jsx)("li",{children:"• Delta time-travel 30d for Bronze/Silver"}),(0,r.jsx)("li",{children:"• Cross-region DR (Azure primary, AWS DR)"}),(0,r.jsx)("li",{children:"• Monthly DR drill — automated failover test"})]})})]}),(0,r.jsx)(o.iv,{title:"Multi-language: 5 idioms for Snowflake grant audit",description:"Bash (ops) \xb7 Go (single binary, ~30\xd7 faster) \xb7 Python (ecosystem) \xb7 Elixir (BEAM supervision tree, self-healing) \xb7 C (librdkafka, max perf). Click to open the drawer — keeps the page lightweight.",icon:(0,r.jsx)(A.A,{className:"h-5 w-5"}),badge:"5 languages \xb7 drawer",children:(0,r.jsx)(d.j,{drawerMode:!0,drawerButtonLabel:"View 5-language grant audit implementations",title:"Snowflake grant audit — 5 idiomatic implementations",description:"Same audit step in 5 languages. Bash = ops default. Go = single binary, type-safe. Python = ecosystem access. Elixir = BEAM-supervised, self-healing. C = librdkafka-backed, max perf.",samples:[{language:"bash",filename:"audit_grants.sh",note:"Bash + jq — the ops-friendly default. Runs everywhere, easy to read, but no type safety. File types: .sh (source), no compilation.",code:`#!/usr/bin/env bash
# Audit all Snowflake grants — flag any new grants since last run
set -euo pipefail

LAST_HASH=\${1:-$(cat .last_audit_hash 2>/dev/null || echo "")}
NEW_HASH=$(snowsql -q "SHOW GRANTS" -o csv | sort | sha256sum | cut -d' ' -f1)
echo "Current grant hash: $NEW_HASH"

if [[ "$LAST_HASH" != "$NEW_HASH" && -n "$LAST_HASH" ]]; then
  echo "⚠ Grant drift detected — diffing"
  diff <(echo "$LAST_HASH") <(echo "$NEW_HASH") || true
  # Page on-call
  curl -X POST "$PAGERDUTY_URL" -d "{\\"alert\\": \\"snowflake grant drift\\"}"
fi
echo "$NEW_HASH" > .last_audit_hash`,highlight:[4,5,6,8,9,10,11,12,13]},{language:"go",filename:"audit_grants.go",note:"Go — single binary, type-safe, fast. Compiled and shipped to CI as a static binary. ~30\xd7 faster than the bash version on large accounts. File types: .go (source), single static binary output.",code:`package main

import (
        "context"
        "crypto/sha256"
        "encoding/hex"
        "fmt"
        "os"
        "sort"
        "strings"

        "github.com/snowflakedb/gosnowflake"
)

type Grant struct {
        Role      string
        Privilege string
        Object    string
        Grantee   string
}

func auditGrants(ctx context.Context, dsn string) (string, error) {
        db, err := sql.Open("snowflake", dsn)
        if err != nil { return "", err }
        defer db.Close()

        rows, err := db.QueryContext(ctx, "SHOW GRANTS")
        if err != nil { return "", err }
        defer rows.Close()

        var grants []Grant
        for rows.Next() {
                var g Grant
                if err := rows.Scan(&g.Role, &g.Privilege, &g.Object, &g.Grantee); err != nil {
                        return "", err
                }
                grants = append(grants, g)
        }
        // Sort for deterministic hash
        sort.Slice(grants, func(i, j int) bool {
                return grants[i].Role < grants[j].Role
        })
        h := sha256.New()
        for _, g := range grants {
                h.Write([]byte(fmt.Sprintf("%s|%s|%s|%s", g.Role, g.Privilege, g.Object, g.Grantee)))
        }
        return hex.EncodeToString(h.Sum(nil)), nil
}

func main() {
        hash, err := auditGrants(context.Background(), os.Getenv("SNOWFLAKE_DSN"))
        if err != nil { fmt.Fprintln(os.Stderr, err); os.Exit(1) }
        fmt.Println(hash)
}`,highlight:[21,22,23,24,25,26,27,28,29,30,33,34,35,36,37]},{language:"python",filename:"audit_grants.py",note:"Python — when you need snowflake-connector + pandas + great_expectations in one script. The team's default for ad-hoc audits. File types: .py (source), interpreted.",code:`#!/usr/bin/env python3
"""Audit Snowflake grants; flag drift since last run."""
import hashlib, json, sys
from snowflake.connector import connect
from datetime import datetime, timezone

def audit_grants() -> str:
    with connect(
        user=os.environ["SNOWFLAKE_USER"],
        account=os.environ["SNOWFLAKE_ACCOUNT"],
        private_key_file=os.environ["SNOWFLAKE_KEY_PATH"],
    ) as conn:
        cur = conn.cursor()
        cur.execute("SHOW GRANTS")
        rows = sorted([tuple(r) for r in cur.fetchall()])
        h = hashlib.sha256()
        for r in rows:
            h.update("|".join(str(x) for x in r).encode())
        return h.hexdigest()

if __name__ == "__main__":
    current = audit_grants()
    last_path = ".last_audit_hash"
    try:
        last = open(last_path).read().strip()
    except FileNotFoundError:
        last = ""
    if last and last != current:
        print(f"⚠ Drift detected at {datetime.now(timezone.utc).isoformat()}", file=sys.stderr)
        # Page on-call via PagerDuty
        # requests.post(...)
    with open(last_path, "w") as f:
        f.write(current)
    print(f"Hash: {current}")`,highlight:[10,11,12,13,14,15,16,17,18,19]},{language:"elixir",filename:"audit_grants.ex",note:"Elixir + GenServer — self-healing via BEAM supervision tree. If the audit process crashes, the supervisor restarts it. ~1M concurrent lightweight processes per node. File types: .ex (source), .beam (compiled bytecode), .ez (release).",code:`defmodule ModernDataSciEng.Audit.Grants do
  @moduledoc """
  Audits Snowflake grants by querying via Postgres-wire-compatible endpoint.
  Idempotent — produces a stable SHA256 hash for drift detection.
  Self-healing: supervised by BEAM, auto-restarts on crash.
  """
  use GenServer

  require Logger

  @table :grant_audit_state

  def start_link(_opts), do: GenServer.start_link(__MODULE__, [], name: __MODULE__)

  @impl true
  def init(_) do
    :ets.new(@table, [:named_table, :public, :set])
    schedule_tick()
    {:ok, %{last_hash: load_last_hash()}}
  end

  @impl true
  def handle_info(:tick, state) do
    {:noreply, run_audit(state), 10_000}
  end

  @impl true
  def handle_call(:current_hash, _from, state) do
    {:reply, state.last_hash, state}
  end

  defp run_audit(state) do
    # Query via Postgres-wire protocol (Snowflake supports this)
    {:ok, rows} = Postgrex.query!(conn(), "SHOW GRANTS", [])

    hash =
      rows.rows
      |> Enum.map(&Tuple.to_list/1)
      |> Enum.sort()
      |> :erlang.term_to_binary()
      |> then(&:crypto.hash(:sha256, &1))
      |> Base.encode16(case: :lower)

    if state.last_hash && state.last_hash != hash do
      Logger.warn("Snowflake grant drift detected at #{DateTime.utc_now()}")
      # Page on-call via HTTP — async, doesn't block the audit loop
      Task.start(fn ->
        Finch.build(:post, System.get_env("PAGERDUTY_URL"),
          [{"content-type", "application/json"}],
          ~s({"alert": "snowflake grant drift"})
        ) |> Finch.request()
      end)
    end

    :ets.insert(@table, {:last_hash, hash})
    %{state | last_hash: hash}
  end

  defp load_last_hash, do: :ets.lookup(@table, :last_hash)[:last_hash] || ""
  defp conn, do: System.get_env("SNOWFLAKE_PG_CONN")
  defp schedule_tick, do: Process.send_after(self(), :tick, 10_000)
end

# File types: .ex (source), .beam (compiled bytecode), .ez (release archive)
# Run as a release: MIX_ENV=prod mix release; _build/prod/rel/audit/bin/audit start`,highlight:[11,12,13,14,15,16,24,25,26,27,32,33,34,35,36,37,38,49,50,51,52]},{language:"c",filename:"lag_audit.c",note:"C + librdkafka — high-perf Kafka topic-lag monitor. Compiles to single static binary; ~30\xd7 faster than Python equivalent. The lingua-franca of native systems programming. File types: .c/.h (source), .so (shared lib), single static binary output.",code:`// ============================================================
// librdkafka audit — high-perf Kafka topic-lag monitor
// Compiles to single binary; ~30x faster than Python equivalent
// Foundation for many high-level Kafka clients (confluent-kafka-python
// wraps librdkafka)
// ============================================================
#include <librdkafka/rdkafka.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <time.h>

int audit_lag(const char* brokers, const char* group_id) {
    rd_kafka_conf_t* conf = rd_kafka_conf_new();
    rd_kafka_conf_set(conf, "bootstrap.servers", brokers);
    rd_kafka_conf_set(conf, "group.id", group_id);
    rd_kafka_conf_set(conf, "enable.auto.commit", "false");

    rd_kafka_t* rk = rd_kafka_new(RD_KAFKA_CONSUMER, conf, NULL, 0);
    if (!rk) {
        fprintf(stderr, "Failed to create consumer: %s\\n",
                rd_kafka_err2str(rd_kafka_last_error()));
        return 1;
    }

    rd_kafka_topic_partition_list_t* topics = rd_kafka_topic_partition_list_new(1);
    rd_kafka_topic_partition_list_add(topics, "moderndatascieng.orders", -1);
    rd_kafka_assign(rk, topics);

    // Sample 1000 messages; measure latency
    int n = 0;
    int64_t total_lag = 0;
    time_t start = time(NULL);

    while (n < 1000 && difftime(time(NULL), start) < 60.0) {
        rd_kafka_message_t* msg = rd_kafka_consumer_poll(rk, 1000);
        if (msg) {
            int64_t ts = rd_kafka_message_timestamp(msg, NULL, NULL);
            int64_t lag = (int64_t)time(NULL) * 1000 - ts;
            total_lag += lag;
            n++;
            rd_kafka_message_destroy(msg);
        }
    }

    int64_t avg_lag = n > 0 ? total_lag / n : 0;
    printf("{\\"samples\\": %d, \\"avg_lag_ms\\": %lld}\\n", n, avg_lag);

    rd_kafka_destroy(rk);
    return avg_lag > 60000 ? 2 : 0;  // exit 2 = lag > 60s
}

int main(int argc, char** argv) {
    if (argc < 3) {
        fprintf(stderr, "Usage: %s <brokers> <group_id>\\n", argv[0]);
        return 1;
    }
    return audit_lag(argv[1], argv[2]);
}

// Compile: gcc -O2 -o lag_audit lag_audit.c -lrdkafka
// Run:     ./lag_audit broker-1:9092 moderndatascieng-silver-service`,highlight:[13,14,15,16,18,19,20,21,22,24,25,26,32,33,34,35,36,37,45,47,48,49]}]})}),(0,r.jsx)(o.iv,{title:"Try it: C/Rust audit tool compiled to WebAssembly",description:"The C (librdkafka lag audit) + Rust samples above, compiled to Wasm, would run in your browser. Demo uses a hand-assembled 41-byte Wasm binary — the pattern is the same for real C code compiled via emcc or Rust via wasm32-wasi.",icon:(0,r.jsx)(h.A,{className:"h-5 w-5"}),badge:"Wasm \xb7 ADR-016",children:(0,r.jsx)(c.n,{sourceLanguage:"C/Rust → wasm32-wasi",buttonLabel:"Run Wasm module (41 bytes)",description:"In production: compile the C librdkafka audit above with `emcc -o audit.wasm audit.c -lrdkafka` and host the .wasm binary. The WasmRunner loads it, calls the exported function — same pattern as the Rust/C UDFs on the Databricks page."})}),(0,r.jsxs)(g.S,{pageTitle:"Git, CI/CD & DevOps",children:[(0,r.jsx)(g.P,{title:"Git, CI/CD & DevOps IS part of a larger system — no page stands alone",connectedTo:"ADR-001 (platform architecture)",children:(0,r.jsx)("p",{children:"This page about Git, CI/CD & DevOps is not an isolated reference — it's a node in a graph. The platform's thesis is that the same math appears across genomics, fintech, maritime, and audio. Git, CI/CD & DevOps connects to the elegant-code cards via shared equations, and to the living-equation pages via live demos. The reader who arrives here looking for facts leaves with a map of where Git, CI/CD & DevOps sits in the computational-science landscape."})}),(0,r.jsx)(g.P,{title:"The technology will change; the math won't",connectedTo:"ADR-055 (cross-disciplinary scope)",children:(0,r.jsx)("p",{children:"In a decade, the specific tools on this page (Git, CI/CD & DevOps) may be replaced. But the underlying mathematics — the equations, the distributions, the optimisation rules — will be the same. SVD was invented in 1873 and still runs on NumPy today. Attention was described in 2017 and will run on whatever replaces PyTorch. The platform invests in the MATH, not the tools, because the math is the part that survives technology turnover."})}),(0,r.jsx)(g.P,{title:"The fold pattern respects the reader's attention",connectedTo:"ADR-050 (fold-section architecture)",children:(0,r.jsx)("p",{children:"This page has fold sections (collapsed by default) that reveal deeper content on demand — equation family comparisons, LaTeX derivations, production patterns, expected outputs, and citations. The basic content is visible immediately; the deeper phases are there when the reader is ready. Progressive disclosure isn't just UX — it's epistemological. A reader who wants the summary gets it; a reader who wants the derivation clicks to expand. Both are served by the same page."})}),(0,r.jsx)(g.P,{title:"The output IS the proof — not just the equation",connectedTo:"ADR-034 (ESM-2 + AlphaFold2 adoption)",children:(0,r.jsx)("p",{children:"Where this page has interactive demos (Pyodide + sliders + charts), the visual output IS the argument. Seeing a chart update as you drag a slider communicates the math in a way no formula can. The brain's pattern-recognition system processes the visual output faster than the verbal/analytical pathway. That's why the platform pairs every equation with a live demo — the output plays to a different level of the brain than the prose."})}),(0,r.jsx)(g.P,{title:"In a decade, this page will evolve — and that's the point",connectedTo:"ADR-022 (pgvector for variant embeddings)",children:(0,r.jsx)("p",{children:"The datasets, libraries, and tools on this page will be updated as technology evolves. The 1000-Genomes Project will become the 10M-Genomes Project. NumPy may be replaced by a WebGPU-native array library. PyTorch may give way to a successor. But the math — SVD, Attention, Poisson, FFT, Bayes, Kalman, GBM — will be the same. The platform is designed for this evolution: the equations are the anchor, the tools are the amplifier, and the fold sections let us update the tools without rewriting the page."})})]}),(0,r.jsx)(n.T,{relatedPages:[{id:"connections",reason:"Trace this topic's connections across the platform's math graph"},{id:"home",reason:"Continue to home — see also from this page"},{id:"architecture",reason:"Continue to architecture — see also from this page"}]}),(0,r.jsxs)("div",{className:"flex flex-wrap gap-2",children:[(0,r.jsx)(i(),{href:(0,m.ZJ)("home"),className:"text-sm text-primary hover:underline",children:"→ Back to overview"}),(0,r.jsx)("span",{className:"text-muted-foreground",children:"\xb7"}),(0,r.jsx)(i(),{href:(0,m.ZJ)("architecture"),className:"text-sm text-primary hover:underline",children:"→ Revisit the architecture"})]})]})}},44478:(e,t,a)=>{"use strict";a.d(t,{A:()=>r});let r=(0,a(6404).A)("shield-check",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]])},49235:(e,t,a)=>{"use strict";a.d(t,{A:()=>r});let r=(0,a(6404).A)("git-commit-horizontal",[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["line",{x1:"3",x2:"9",y1:"12",y2:"12",key:"1dyftd"}],["line",{x1:"15",x2:"21",y1:"12",y2:"12",key:"oup4p8"}]])},52484:(e,t,a)=>{"use strict";a.d(t,{A:()=>r});let r=(0,a(6404).A)("circle-check-big",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]])},58411:(e,t,a)=>{"use strict";a.d(t,{A:()=>r});let r=(0,a(6404).A)("git-merge",[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M6 21V9a9 9 0 0 0 9 9",key:"7kw0sc"}]])},65576:(e,t,a)=>{"use strict";a.d(t,{A:()=>r});let r=(0,a(6404).A)("cpu",[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]])},89239:(e,t,a)=>{"use strict";a.d(t,{$:()=>l});var r=a(95155);a(12115);var s=a(42442),i=a(18460),n=a(40980);let o=(0,i.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",destructive:"bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9"}},defaultVariants:{variant:"default",size:"default"}});function l({className:e,variant:t,size:a,asChild:i=!1,...l}){let d=i?s.DX:"button";return(0,r.jsx)(d,{"data-slot":"button",className:(0,n.cn)(o({variant:t,size:a,className:e})),...l})}},95107:(e,t,a)=>{Promise.resolve().then(a.bind(a,34112))}},e=>{e.O(0,[6919,8500,9430,3493,9760,7591,8656,9620,6722,8449,5079,8441,3794,7358],()=>e(e.s=95107)),_N_E=e.O()}]);