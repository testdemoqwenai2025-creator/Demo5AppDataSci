(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5640],{25777:(e,t,a)=>{"use strict";a.d(t,{A:()=>s});let s=(0,a(6404).A)("lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]])},38443:(e,t,a)=>{Promise.resolve().then(a.bind(a,52947))},52947:(e,t,a)=>{"use strict";a.d(t,{ServiceMeshDataPage:()=>A});var s=a(95155),r=a(98500),i=a.n(r),o=a(58381),n=a(87069),c=a(75041),l=a(27774),d=a(60508),p=a(92194),h=a(19776),m=a(49345),u=a(85757),x=a(10277),f=a(45160),g=a(83036),b=a(86901),v=a(65576),y=a(69260),S=a(93219),w=a(439),k=a(25777),j=a(33024);let C=[{label:"mTLS overhead",value:"~5-10ms",hint:"per-RPC handshake (cert cache hit; cold start ~50ms)",deltaTone:"flat"},{label:"Lineage per RPC",value:"1 edge",hint:"every RPC records (src_table, dst_table) — sub-second freshness",deltaTone:"flat"},{label:"Shadow traffic",value:"10%",hint:"mirror VirtualService (responses dropped — prod response is what client sees)",deltaTone:"flat"},{label:"Sidecar memory",value:"~50-100MB",hint:"Envoy per pod (Istio); ~10MB for Linkerd2 (Rust)",deltaTone:"flat"}],P=[{num:1,name:"Per-table RBAC at sidecar",card:"ConceptCard #54",color:"text-emerald-400",desc:"AuthorizationPolicy checks Unity Catalog scope in the JWT — denies RPCs to tables the caller has no scope for, BEFORE the backend sees the request. Sidecar propagates the scope from the JWT.",focus:"security",math:"AuthorizationPolicy: scope ∈ {finance.read, marketing.read, unity.admin}"},{num:2,name:"Traffic mirroring for shadow pipelines",card:"ConceptCard #54",color:"text-violet-400",desc:"VirtualService mirrors 10% of prod RPCs to shadow cluster running new pipeline. Shadow responses are DROPPED — prod response is what client sees. Diff prod vs shadow to validate new transform.",focus:"testing",math:"mirrorPercentage.value = 10.0"},{num:3,name:"Lineage tracking per RPC",card:"ConceptCard #54",color:"text-sky-400",desc:"Envoy HTTP filter inspects query plan or gRPC metadata, extracts (source_table, destination_table), emits OpenLineage event. Sub-second freshness — feeds Unity Catalog, DataHub, Marquez.",focus:"observability",math:"lineage(r) = (src_table, dst_table)"},{num:4,name:"Retry semantics for at-least-once",card:"ConceptCard #54",color:"text-amber-400",desc:"Mesh retries 3x on 5xx/refused-stream/connect-failure. For READS: safe. For WRITES: use idempotency keys (Delta MERGE INTO is idempotent — MERGE^k = MERGE).",focus:"reliability",math:"retries.attempts=3, retryOn=connect-failure,refused-stream,5xx"},{num:5,name:"mTLS Spark ↔ object stores",card:"ConceptCard #54",color:"text-rose-400",desc:"Spark executors reach S3 through egress gateway (ServiceEntry). All egress mTLS-terminated at the gateway — credential rotation centralized, not per-executor.",focus:"egress",math:"ServiceEntry: MESH_EXTERNAL, port 443/HTTPS, DNS resolution"},{num:6,name:"Sidecar resource overhead",card:"ConceptCard #54",color:"text-fuchsia-400",desc:"Envoy sidecar: ~50-100MB memory + 0.1-0.5 CPU per pod. Linkerd2 (Rust): ~10MB. Cost scales with pod count — for 1000-pod Spark cluster, that's 50-100GB just for sidecars.",focus:"cost",math:"sidecar_cost = pods \xd7 (mem + cpu)"},{num:7,name:"gRPC vs Postgres wire routing",card:"ConceptCard #54",color:"text-cyan-400",desc:"Data plane has both: gRPC between microservices (spark-driver → delta-lake), Postgres wire for client DB connections (Lakebase proxy). Mesh routes by protocol on the same port-443 listener.",focus:"wire protocol",math:"routeByProtocol: postgres|http|grpc|data-api"}],N=[{symbol:"R(t)",code:"ClusterLoadAssignment in xDS API (LDS/RDS/CDS/EDS)",explanation:"the routing table: list of (service, endpoint, health, weight). Pushed from control plane to sidecars via xDS stream."},{symbol:"ep (endpoint)",code:"10.0.1.5:8080 (IP + port, in a K8s pod)",explanation:"specific instance of a service. Mesh holds O(1000s) per service. Ejected after 5 consecutive 5xx."},{symbol:"health(s, ep)",code:"consecutive5xxErrors: 5, interval: 10s, baseEjectionTime: 30s",explanation:"active probe + passive failure counter. Ejected endpoints get 0 weight — load balancer skips them."},{symbol:"w_i (weight)",code:"weight: 95 stable, 5 canary",explanation:"load weight. Canary: new version gets 5% traffic via weight=0.05 vs 0.95 for stable."},{symbol:"Lb(eps, w)",code:"LEAST_CONN / ROUND_ROBIN / PASSTHROUGH",explanation:"load balancing strategy. Mesh default: power-of-2-choices (pick 2 random endpoints, choose less loaded)."},{symbol:"lineage(r)",code:"Envoy HTTP filter → OpenLineage event",explanation:"every RPC records (src_table, dst_table) — feeds Unity Catalog lineage + OpenLineage + DataHub in sub-second freshness."},{symbol:"mTLS via SPIFFE",code:"WorkloadIdentity = spiffe://cluster/ns/sa",explanation:"SPIRE issues short-lived (1h) certs to sidecars. mTLS handshake validates SPIFFE ID — no cert rotation ops."}],T=`# ============================================================
# Istio DestinationRule for Databricks microservices — mesh-for-data
# mTLS + circuit breaker + outlier detection + retry + locality LB
# Free: OSS (Apache 2.0).
# ============================================================

apiVersion: networking.istio.io/v1beta1
kind: DestinationRule
metadata:
  name: spark-driver-data-mesh
  namespace: databricks
spec:
  host: spark-driver.databricks.svc.cluster.local
  trafficPolicy:
    # 1. mTLS — all east-west traffic is encrypted
    tls:
      mode: ISTIO_MUTUAL  # certs auto-rotated by Istio CA (SPIRE/SPIFFE)
    # 2. Load balancing — LEAST_CONN + locality-aware (prefer same-AZ)
    loadBalancer:
      simple: LEAST_CONN
      localityLbSetting:
        enabled: true       # prefer same-AZ endpoints (lower latency)
    # 3. Outlier detection — passive health via 5xx counts
    outlierDetection:
      consecutive5xxErrors: 5
      interval: 10s
      baseEjectionTime: 30s
      maxEjectionPercent: 50    # never evict >50% of endpoints
    # 4. Circuit breaker — protect against cascade failures
    connectionPool:
      tcp:
        maxConnections: 100
      http:
        http1MaxPendingRequests: 10
        http2MaxRequests: 100
        maxRequestsPerConnection: 10
    # 5. Retries — at-least-once (writes need idempotency keys)
    retries:
      attempts: 3
      perTryTimeout: 2s
      retryOn: connect-failure,refused-stream,5xx

---
# VirtualService — 90% prod + 10% shadow (traffic mirroring)
apiVersion: networking.istio.io/v1beta1
kind: VirtualService
metadata:
  name: spark-shadow-pipeline
  namespace: databricks
spec:
  hosts: ["delta-lake.databricks.svc.cluster.local"]
  http:
    - route:
        - destination:
            host: delta-lake.databricks.svc.cluster.local
            subset: stable
          weight: 100
      # Mirror 10% of prod RPCs to the shadow pipeline (v2 transform).
      # Shadow responses are DROPPED — prod response is what client sees.
      # Diff prod vs shadow to validate new pipeline before 100% cutover.
      mirror:
        host: delta-lake.databricks.svc.cluster.local
        subset: shadow
      mirrorPercentage:
        value: 10.0`,R=`# ============================================================
# Envoy HTTP filter for lineage tracking per RPC
# Free: OSS (Apache 2.0). Pattern from OpenLineage + Istio EnvoyFilter.
# Each RPC records (source_table, destination_table) — feeds the lineage graph.
# ============================================================

from datetime import datetime
import json, os

# This runs as an Envoy external authz / Lua filter (Python equivalent below).
# In production, deploy as a sidecar service receiving Envoy ext_authz calls.

LINEAGE_LOG = "/var/log/lineage/lineage_events.jsonl"

def extract_table_pair(request_headers):
    """Extract (source_table, destination_table) from request metadata.

    Two strategies depending on the wire protocol:
    1. gRPC: read 'x-lineage-source' and 'x-lineage-destination' headers
       (set by the Spark driver's lineage interceptor).
    2. SQL over Postgres wire: parse the SQL statement in the first packet.
    """
    src = request_headers.get("x-lineage-source", "")
    dst = request_headers.get("x-lineage-destination", "")
    if src and dst:
        return src, dst
    # Fallback: parse SQL (very simplified; real impl uses sqlglot)
    sql = request_headers.get("x-sql", "")
    if "INSERT INTO" in sql and "SELECT" in sql:
        target = sql.split("INSERT INTO")[1].split("SELECT")[0].strip().split()[0]
        source = sql.split("FROM")[1].strip().split()[0]
        return source, target
    return "", ""

def emit_lineage_event(src_table, dst_table, rpc_id, principal):
    """Write a lineage event to the JSONL log — OpenLineage-compatible schema."""
    event = {
        "eventType": "START",
        "eventTime": datetime.utcnow().isoformat() + "Z",
        "run": {"runId": rpc_id},
        "job": {"namespace": "databricks", "name": f"rpc:{src_table}->{dst_table}"},
        "inputs":  [{"namespace": "unity", "name": src_table, "facets": {}}],
        "outputs": [{"namespace": "unity", "name": dst_table, "facets": {}}],
        "producer": principal,  # from JWT — Unity Catalog principal
    }
    with open(LINEAGE_LOG, "a") as f:
        f.write(json.dumps(event) + "\\n")

def envoy_on_request(request_headers, rpc_id, principal):
    """Envoy calls this on every RPC. Returns ALLOW or DENY."""
    src, dst = extract_table_pair(request_headers)
    if not src or not dst:
        return "ALLOW"  # not a data-moving RPC (e.g., metadata call)
    emit_lineage_event(src, dst, rpc_id, principal)
    return "ALLOW"

# The lineage log is consumed by:
# 1. OpenLineage collector -> Marquez/DataHub (catalog + lineage UI)
# 2. Unity Catalog (updates the table-lineage table)
# 3. Snowflake ACCESS_HISTORY (similar pattern, vendor-native)
# Every RPC produces one lineage edge — sub-second freshness.`,E=`# ============================================================
# Istio AuthorizationPolicy — per-table RBAC at the sidecar
# Sidecar checks Unity Catalog scope in JWT before backend sees RPC.
# Free: OSS (Apache 2.0).
# ============================================================

apiVersion: security.istio.io/v1beta1
kind: AuthorizationPolicy
metadata:
  name: unity-scope-rbac
  namespace: databricks
spec:
  selector:
    matchLabels:
      app: delta-lake   # applies to delta-lake pods (the data backend)
  action: DENY
  rules:
    # Block RPCs to the finance schema unless the caller's JWT has
    # scope 'finance.read' or 'unity.admin'.
    - from:
        - source:
            requestPrincipals: ["https://databricks/unity/*"]
      to:
        - operation:
            # Path encodes the target table: /v1/tables/{schema}/{table}/read
            paths: ["/v1/tables/finance/*"]
      when:
        - key: source.request_auth_claims["scope"]
          notValues: ["finance.read", "unity.admin"]

---
# PeerAuthentication — enforce mTLS for all inter-pod traffic
apiVersion: security.istio.io/v1beta1
kind: PeerAuthentication
metadata:
  name: default-mtls
  namespace: databricks
spec:
  mtls:
    mode: STRICT       # STRICT = reject plaintext. PERMISSIVE = accept both.
  portLevelMtls:
    5432:              # Postgres wire (Lakebase)
      mode: STRICT     # DB connections also mTLS-encrypted
    443:               # HTTPS / gRPC
      mode: STRICT`,L=`# ============================================================
# Istio ServiceEntry — external S3 access from Spark executors
# All egress mTLS-terminated at the egress gateway (centralized cred rotation).
# Free: OSS (Apache 2.0).
# ============================================================

apiVersion: networking.istio.io/v1beta1
kind: ServiceEntry
metadata:
  name: s3-egress
  namespace: databricks
spec:
  hosts:
    - "my-bucket.s3.amazonaws.com"
    - "*.s3.amazonaws.com"      # wildcard for cross-region buckets
  location: MESH_EXTERNAL       # treat as external (not in-mesh)
  ports:
    - number: 443
      name: https
      protocol: HTTPS
  resolution: DNS              # resolve S3 hostname at request time

---
# Sidecar resource overhead — set explicit requests/limits to control cost
apiVersion: v1
kind: Pod
metadata:
  name: spark-executor-with-sidecar
  annotations:
    sidecar.istio.io/proxyCPU: "200m"      # 0.2 CPU
    sidecar.istio.io/proxyMemory: "256Mi"  # 256MB memory
    sidecar.istio.io/proxyCPULimit: "500m"
    sidecar.istio.io/proxyMemoryLimit: "512Mi"
spec:
  containers:
    - name: spark-executor
      image: ghcr.io/databricks/spark:3.5.0
      resources:
        requests: {cpu: "4", memory: "8Gi"}
        limits:   {cpu: "8", memory: "16Gi"}
    # Istio injects the Envoy sidecar automatically via sidecar-injector.
    # Cost: ~5% CPU + 5% memory overhead per pod for the sidecar.
    # For a 1000-pod Spark cluster: ~50GB just for sidecars.`;function A(){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.zY,{eyebrow:"Phase 29 \xb7 Service Mesh for Data \xb7 Phase 15 Data Platform & Infrastructure",title:"Service Mesh for Data — universal east-west traffic for data platforms",description:"Consolidated deep-dive into the 7 mesh-for-data primitives that turn a standard service mesh (Istio/Linkerd/Consul) into a data-plane-aware mesh. Per-table RBAC at the sidecar (Unity Catalog scope propagation), traffic mirroring for shadow pipelines, lineage tracking per RPC, retry semantics for at-least-once (writes need idempotency), mTLS between Spark and object stores, sidecar resource overhead, and gRPC vs Postgres wire protocol routing. Each concept is summarized inline and made interactive with the 2 Phase 29 popup demos (Schema Evolution Visualizer + Service Mesh Traffic Visualizer) embedded below. The page consolidates ConceptCard 54 (SERVICE_MESH_DATA) and complements /infrastructure/ (Phase 15 placeholder) which covers the broader data platform infrastructure."}),(0,s.jsx)("div",{className:"grid gap-4 md:grid-cols-2 lg:grid-cols-4",children:C.map(e=>(0,s.jsxs)("div",{className:"rounded-xl border border-zinc-200/20 bg-zinc-900/60 p-4 backdrop-blur",children:[(0,s.jsx)("p",{className:"text-[10px] uppercase tracking-wider text-zinc-500 font-medium",children:e.label}),(0,s.jsx)("p",{className:"text-2xl font-bold text-zinc-100 mt-1",children:e.value}),(0,s.jsx)("p",{className:"text-[11px] text-zinc-400 mt-0.5",children:e.hint})]},e.label))}),(0,s.jsx)(o.iv,{title:"The 7 mesh-for-data primitives — structured learning path",description:"Seven primitives, each rooted in ConceptCard 54. Walk through them in order: security (per-table RBAC) → testing (shadow pipelines) → observability (lineage per RPC) → reliability (retry semantics) → egress (mTLS to object stores) → cost (sidecar overhead) → wire protocol (gRPC vs Postgres).",icon:(0,s.jsx)(b.A,{className:"h-5 w-5"}),badge:"Learning Path",children:(0,s.jsx)("div",{className:"space-y-2",children:P.map(e=>(0,s.jsxs)("div",{className:"flex items-start gap-3 p-3 rounded-md border border-border/40 hover:border-primary/40 hover:bg-primary/3 transition-colors",children:[(0,s.jsx)("div",{className:"flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-primary/10 font-mono text-xs font-bold text-primary",children:e.num}),(0,s.jsxs)("div",{className:"min-w-0 flex-1",children:[(0,s.jsxs)("div",{className:"flex items-center gap-2 flex-wrap",children:[(0,s.jsx)("p",{className:`text-sm font-semibold ${e.color}`,children:e.name}),(0,s.jsx)(f.E,{variant:"outline",className:"text-[10px] gap-1 px-1.5 py-0",children:e.card}),(0,s.jsxs)("span",{className:"text-[10px] text-zinc-500 uppercase tracking-wider",children:["focus: ",e.focus]})]}),(0,s.jsx)("p",{className:"text-xs text-muted-foreground mt-1 leading-relaxed",children:e.desc}),(0,s.jsx)("p",{className:"text-[10px] font-mono text-zinc-500 mt-1",children:e.math})]})]},e.num))})}),(0,s.jsx)(o.iv,{title:"Math → Code mapping — the 7 primitives in 7 symbols",description:"Each mesh-for-data primitive maps to a single mathematical invariant. The table shows the symbol, the Istio/Envoy/SPIFFE code that implements it, and the conceptual explanation.",icon:(0,s.jsx)(v.A,{className:"h-5 w-5"}),children:(0,s.jsx)("div",{className:"overflow-x-auto",children:(0,s.jsxs)("table",{className:"w-full text-xs",children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{className:"border-b border-border/60 text-[10px] uppercase tracking-wider text-muted-foreground",children:[(0,s.jsx)("th",{className:"text-left px-3 py-2 font-medium",children:"Math symbol"}),(0,s.jsx)("th",{className:"text-left px-3 py-2 font-medium",children:"Code (Istio / Envoy / SPIFFE)"}),(0,s.jsx)("th",{className:"text-left px-3 py-2 font-medium",children:"Explanation"})]})}),(0,s.jsx)("tbody",{children:N.map(e=>(0,s.jsxs)("tr",{className:"border-b border-border/20",children:[(0,s.jsx)("td",{className:"px-3 py-2 font-mono text-emerald-400 whitespace-nowrap",children:e.symbol}),(0,s.jsx)("td",{className:"px-3 py-2 font-mono text-sky-400 text-[11px]",children:e.code}),(0,s.jsx)("td",{className:"px-3 py-2 text-muted-foreground",children:e.explanation})]},e.symbol))})]})})}),(0,s.jsxs)(o.iv,{title:"Istio DestinationRule — mTLS + circuit breaker + retry for Databricks service",description:"The standard DestinationRule with 5 mesh concerns: mTLS (ISTIO_MUTUAL), locality-aware load balancing (LEAST_CONN), outlier detection (5 consecutive 5xx = eject 30s), circuit breaker (maxConnections=100), retries (3 attempts, 2s per-try, on connect-failure/refused-stream/5xx). VirtualService adds traffic mirroring — 10% shadow to a v2 transform subset.",icon:(0,s.jsx)(y.A,{className:"h-5 w-5"}),children:[(0,s.jsx)("div",{className:"prose prose-sm dark:prose-invert max-w-none",children:(0,s.jsx)("p",{className:"text-sm text-muted-foreground leading-relaxed",children:"DestinationRule + VirtualService is the data plane configuration — the control plane (istiod) pushes it to sidecars via xDS. mTLS uses ISTIO_MUTUAL: Istio's CA (SPIRE-backed since 1.10+) issues 1-hour certs to sidecars — no cert rotation ops. The 5 mesh concerns (mTLS, LB, outlier, circuit breaker, retries) are the standard service-mesh primitives. The 2 data-plane additions (per-table RBAC via AuthorizationPolicy + lineage via EnvoyFilter) are what make this a mesh FOR DATA — described in the next two sections."})}),(0,s.jsx)("div",{className:"mt-4",children:(0,s.jsx)(h.N,{code:T,language:"yaml",filename:"istio_destination_rule.yaml"})})]}),(0,s.jsxs)(o.iv,{title:"Envoy HTTP filter — lineage tracking per RPC",description:"Every RPC records (source_table, destination_table) — feeds Unity Catalog lineage, OpenLineage, Marquez, DataHub. Sub-second freshness — one event per RPC streamed to the collector. The filter inspects gRPC headers (x-lineage-source / x-lineage-destination) or parses SQL over the Postgres wire protocol.",icon:(0,s.jsx)(S.A,{className:"h-5 w-5"}),badge:"Observability",children:[(0,s.jsx)("div",{className:"prose prose-sm dark:prose-invert max-w-none",children:(0,s.jsx)("p",{className:"text-sm text-muted-foreground leading-relaxed",children:"Lineage per RPC is the data-plane addition that turns a standard mesh into a mesh for data. The sidecar inspects every RPC's metadata (gRPC headers or SQL statement), extracts the source and destination table pair, and emits an OpenLineage event. The lineage graph updates in sub-second freshness — when a Spark executor reads from silver.events and writes to gold.users, the edge (silver.events → gold.users) appears in Unity Catalog within a second. Compare this to batch-processed lineage (nightly cron that parses query logs) — sub-second vs next-day freshness is the difference between real-time lineage and stale lineage."})}),(0,s.jsx)("div",{className:"mt-4",children:(0,s.jsx)(h.N,{code:R,language:"python",filename:"envoy_lineage_filter.py"})})]}),(0,s.jsxs)(o.iv,{title:"AuthorizationPolicy — per-table RBAC at the sidecar",description:"Sidecar checks Unity Catalog scope in the JWT before the backend sees the RPC. A Spark executor with finance.read scope can read silver.events but cannot read finance.transactions. PeerAuthentication enforces STRICT mTLS for all inter-pod traffic, including Postgres wire on port 5432.",icon:(0,s.jsx)(w.A,{className:"h-5 w-5"}),badge:"Security",children:[(0,s.jsx)("div",{className:"prose prose-sm dark:prose-invert max-w-none",children:(0,s.jsxs)("p",{className:"text-sm text-muted-foreground leading-relaxed",children:["Per-table RBAC at the sidecar is the most powerful data-plane addition. Standard RBAC runs at the application layer — the database or lakehouse checks authorization after the RPC reaches it. Sidecar RBAC runs at the network layer — the RPC is denied BEFORE the backend sees it. This means a compromised Spark executor with a leaked JWT can't read finance.transactions even if Delta Lake has a vulnerability — the sidecar rejects the RPC at the network boundary. The Unity Catalog scope (finance.read, marketing.read, unity.admin) is propagated from the JWT issued at workspace login; the sidecar uses",(0,s.jsx)("code",{children:' source.request_auth_claims["scope"]'})," to read it."]})}),(0,s.jsx)("div",{className:"mt-4",children:(0,s.jsx)(h.N,{code:E,language:"yaml",filename:"authorization_policy.yaml"})})]}),(0,s.jsxs)(o.iv,{title:"ServiceEntry — external S3 access + sidecar resource overhead",description:"Spark executors reach S3 through the egress gateway (ServiceEntry). All egress is mTLS-terminated at the gateway — credential rotation centralized, not per-executor. Sidecar resource annotations set explicit CPU/memory requests/limits — ~5% overhead per pod for the Envoy sidecar.",icon:(0,s.jsx)(k.A,{className:"h-5 w-5"}),children:[(0,s.jsx)("div",{className:"prose prose-sm dark:prose-invert max-w-none",children:(0,s.jsxs)("p",{className:"text-sm text-muted-foreground leading-relaxed",children:["Egress through a ServiceEntry is the cost-security tradeoff. Without it, each Spark executor talks directly to S3 with IAM role credentials baked into the pod — credential rotation is per-executor, audit is per-executor, and a compromised executor can reach any S3 bucket the role can. With it, all egress goes through the egress gateway — one place to enforce per-bucket RBAC, one place to rotate credentials, one place to log every S3 access. The cost is the sidecar overhead: ~5% CPU + 5% memory per pod (set via ",(0,s.jsx)("code",{children:"sidecar.istio.io/proxyCPU"})," annotations). For a 1000-pod Spark cluster, that's 50GB just for sidecars — worth it for the centralized egress control."]})}),(0,s.jsx)("div",{className:"mt-4",children:(0,s.jsx)(h.N,{code:L,language:"yaml",filename:"service_entry_s3.yaml"})})]}),(0,s.jsxs)(o.iv,{title:"Phase 29 popup demos — make the mesh-for-data interactive",description:"Two interactive visualizers. The Service Mesh Traffic Visualizer shows 100 RPCs animating through a 4-service mesh with mTLS handshake + lineage tracking + shadow traffic. The Schema Evolution Visualizer is the sibling Phase 29 demo for the /schema-registry-deep-dive/ page.",icon:(0,s.jsx)(b.A,{className:"h-5 w-5"}),badge:"Interactive",children:[(0,s.jsxs)("div",{className:"space-y-3 text-sm text-muted-foreground leading-relaxed",children:[(0,s.jsxs)("p",{children:[(0,s.jsx)("strong",{className:"text-foreground/80",children:"1. Service Mesh Traffic Visualizer"}),' — 4 services in a mesh: spark-driver, delta-lake, unity-catalog, mlflow. Click "Send 100 RPCs" to watch each animate through the mesh with mTLS handshake (purple) → routing (blue) → response (green). Side panel shows the lineage graph (per-RPC source_table → destination_table edges). Toggle "Enable shadow traffic (10%)" to see duplicated RPCs in amber. Stats: total RPCs, mTLS handshakes, lineage edges captured, shadow traffic count.']}),(0,s.jsxs)("p",{children:[(0,s.jsx)("strong",{className:"text-foreground/80",children:"2. Schema Evolution Visualizer"}),' — the sibling Phase 29 demo for /schema-registry-deep-dive/. Start with v1 User schema, evolve to v2 (add optional field — BACKWARD-compatible), then try v3 (rename field — BREAKING). Color-coded: green=compatible, red=breaking. Status banner: "v2 is BACKWARD-compatible (safe deploy)" or "v3 is BREAKING (requires blue-green or rollback)".']})]}),(0,s.jsx)(x.j,{})]}),(0,s.jsx)(o.iv,{title:"Cross-vendor comparison — what each mesh does uniquely for data",description:"Each mesh implementation has a unique strength for data platforms. The table shows where Istio leads (Databricks), where Linkerd2 follows (Snowflake), and where Consul Connect matches (hybrid K8s+VMs).",icon:(0,s.jsx)(w.A,{className:"h-5 w-5"}),children:(0,s.jsx)("div",{className:"overflow-x-auto",children:(0,s.jsxs)("table",{className:"w-full text-xs",children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{className:"border-b border-border/60 text-[10px] uppercase tracking-wider text-muted-foreground",children:[(0,s.jsx)("th",{className:"text-left px-3 py-2 font-medium",children:"Feature"}),(0,s.jsx)("th",{className:"text-left px-3 py-2 font-medium",children:"Istio (Databricks)"}),(0,s.jsx)("th",{className:"text-left px-3 py-2 font-medium",children:"Linkerd2 (Snowflake)"}),(0,s.jsx)("th",{className:"text-left px-3 py-2 font-medium",children:"Consul Connect (hybrid)"})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{className:"border-b border-border/20",children:[(0,s.jsx)("td",{className:"px-3 py-2 font-mono text-emerald-400",children:"Sidecar"}),(0,s.jsx)("td",{className:"px-3 py-2 text-zinc-300",children:"Envoy (C++)"}),(0,s.jsx)("td",{className:"px-3 py-2 text-zinc-400",children:"Linkerd2-proxy (Rust)"}),(0,s.jsx)("td",{className:"px-3 py-2 text-zinc-400",children:"Envoy (K8s + VMs)"})]}),(0,s.jsxs)("tr",{className:"border-b border-border/20",children:[(0,s.jsx)("td",{className:"px-3 py-2 font-mono text-violet-400",children:"Sidecar memory"}),(0,s.jsx)("td",{className:"px-3 py-2 text-zinc-300",children:"~50-100 MB"}),(0,s.jsx)("td",{className:"px-3 py-2 text-zinc-400",children:"~10 MB (10\xd7 lighter)"}),(0,s.jsx)("td",{className:"px-3 py-2 text-zinc-400",children:"~50-100 MB"})]}),(0,s.jsxs)("tr",{className:"border-b border-border/20",children:[(0,s.jsx)("td",{className:"px-3 py-2 font-mono text-sky-400",children:"mTLS"}),(0,s.jsx)("td",{className:"px-3 py-2 text-zinc-300",children:"ISTIO_MUTUAL (SPIRE)"}),(0,s.jsx)("td",{className:"px-3 py-2 text-zinc-400",children:"linkerd-identity (SPIFFE-compat)"}),(0,s.jsx)("td",{className:"px-3 py-2 text-zinc-400",children:"Consul Connect CA (Vault)"})]}),(0,s.jsxs)("tr",{className:"border-b border-border/20",children:[(0,s.jsx)("td",{className:"px-3 py-2 font-mono text-amber-400",children:"Per-table RBAC"}),(0,s.jsx)("td",{className:"px-3 py-2 text-zinc-300",children:"AuthorizationPolicy + JWT scope"}),(0,s.jsx)("td",{className:"px-3 py-2 text-zinc-400",children:"ServerPolicy (similar but simpler)"}),(0,s.jsx)("td",{className:"px-3 py-2 text-zinc-400",children:"Consul intentions (similar)"})]}),(0,s.jsxs)("tr",{className:"border-b border-border/20",children:[(0,s.jsx)("td",{className:"px-3 py-2 font-mono text-rose-400",children:"Traffic mirroring"}),(0,s.jsx)("td",{className:"px-3 py-2 text-zinc-300",children:"VirtualService.mirror (full feature)"}),(0,s.jsx)("td",{className:"px-3 py-2 text-zinc-400",children:"— (no native mirror)"}),(0,s.jsx)("td",{className:"px-3 py-2 text-zinc-400",children:"Envoy filter (manual config)"})]}),(0,s.jsxs)("tr",{className:"border-b border-border/20",children:[(0,s.jsx)("td",{className:"px-3 py-2 font-mono text-fuchsia-400",children:"Lineage filter"}),(0,s.jsx)("td",{className:"px-3 py-2 text-zinc-300",children:"EnvoyFilter (Lua / WASM)"}),(0,s.jsx)("td",{className:"px-3 py-2 text-zinc-400",children:"Tap API (read-only)"}),(0,s.jsx)("td",{className:"px-3 py-2 text-zinc-400",children:"Envoy filter (same as Istio)"})]}),(0,s.jsxs)("tr",{className:"border-b border-border/20",children:[(0,s.jsx)("td",{className:"px-3 py-2 font-mono text-cyan-400",children:"Hybrid K8s+VMs"}),(0,s.jsx)("td",{className:"px-3 py-2 text-zinc-300",children:"— (K8s only)"}),(0,s.jsx)("td",{className:"px-3 py-2 text-zinc-400",children:"— (K8s only)"}),(0,s.jsx)("td",{className:"px-3 py-2 text-zinc-400",children:"Yes — Consul agents on VMs"})]}),(0,s.jsxs)("tr",{className:"border-b border-border/20",children:[(0,s.jsx)("td",{className:"px-3 py-2 font-mono text-zinc-400",children:"Best fit"}),(0,s.jsx)("td",{className:"px-3 py-2 text-zinc-300",children:"Databricks microservices"}),(0,s.jsx)("td",{className:"px-3 py-2 text-zinc-400",children:"Snowflake-ext microservices"}),(0,s.jsx)("td",{className:"px-3 py-2 text-zinc-400",children:"Spark-on-EMR + Spark-on-EKS"})]})]})]})})}),(0,s.jsx)(o.iv,{title:"ConceptCard #54 — Service Mesh for Data (click to expand all 5 layers)",description:"The actual interactive ConceptCard component. Click the card header to expand: Layer 1 Math (LaTeX), Layer 2 Code (multi-language), Layer 3 Tools (3-vendor comparison), Layer 4 Analysis (Pyodide runnable), Layer 4.5 Interactive demo (sliders + animations), Layer 5 Visualization (chart).",icon:(0,s.jsx)(j.A,{className:"h-5 w-5"}),badge:"5-layer pattern",contentClassName:"p-4 md:p-5",children:(0,s.jsx)(n.j,{spec:c.Ny})}),(0,s.jsxs)(g.S,{pageTitle:"Service Mesh for Data",children:[(0,s.jsx)(g.P,{title:"Mesh for data IS standard mesh + 1 layer for lineage — the routing math is unchanged, the additions are policies",connectedTo:"ADR-001 (platform architecture)",children:(0,s.jsx)("p",{children:"Mesh for data is structurally standard service mesh (Istio/Linkerd/Consul) + 3 data-plane policies: per-table RBAC, traffic mirroring, lineage per RPC. The routing math (R(t) = {(service, endpoint, health, weight)}, route via weighted Lb) is unchanged. The additions are POLICIES layered on top: (1) per-table RBAC via AuthorizationPolicy checking Unity Catalog scope in the JWT — the sidecar denies the RPC before the backend sees it. (2) traffic mirroring via VirtualService mirrorPercentage — duplicate 10% of prod RPCs to a shadow cluster, drop shadow responses, diff prod vs shadow to validate new transforms. (3) lineage per RPC via Envoy HTTP filter — every RPC records (source_table, destination_table) and emits an OpenLineage event in sub-second freshness. An Istio operator, a Linkerd admin, and a Consul Connect user all run the same routing math — the data concerns are 3 policies, not 3 protocols. This is why the same mesh binary (Envoy) serves web microservices (Netflix, Lyft) AND data microservices (Databricks, Snowflake) — the substrate is identical, only the policies differ. The mesh-for-data label is a deployment profile, not a separate product."})}),(0,s.jsx)(g.P,{title:"Traffic mirroring IS production data preview — the same shadow-traffic pattern runs in canary deploys, A/B tests, and replay pipelines",connectedTo:"ADR-022 (pgvector for variant embeddings)",children:(0,s.jsx)("p",{children:"Traffic mirroring is structurally production data preview — duplicate prod traffic to a shadow cluster, drop the shadow responses, compare prod vs shadow outputs. The same pattern appears in 4 places: (1) Mesh canary deploy (Istio VirtualService.mirror) — test v2 of a transform on 10% of prod data without affecting prod response. (2) A/B test infrastructure — duplicate traffic to variant B, compare conversion rates. (3) Replay pipelines (Confluent Schema Registry mode) — re-process prod Kafka topics against a new pipeline, compare row counts. (4) Blue-green for breaking schema changes — feed prod data to the new schema version, verify it decodes. The math is invariant: shadow_traffic = sample(prod_traffic, p); diff = abs(prod_output - shadow_output); if diff < threshold: promote shadow to prod. The same diff-threshold logic governs a canary deploy of a Spark job, an A/B test of a recommendation model, a replay validation of a new schema version, and a blue-green cutover of a breaking schema rename. Four deployment scenarios, one mirror-and-diff pattern. This is why traffic mirroring ships with every mesh (Istio, Linkerd, Consul) AND every streaming platform (Kafka MirrorMaker, Pulsar Geo-Replication, Kinesis Cross-Region) — the math is universal."})})]}),(0,s.jsx)(m.a,{topics:[{id:"infrastructure",reason:"Phase 15 placeholder — this deep-dive complements the broader data platform infrastructure"},{id:"lakebase-deep-dive",reason:"Phase 27: Lakebase Postgres proxy (the other data-plane edge — read/write splitting)"},{id:"finops-platform",reason:"Phase 27: FinOps — sidecar resource overhead feeds into cloud cost attribution"},{id:"observability",reason:"Phase 16: observability — mesh golden signals (RPS / p99 / error rate) overlap with platform obs"},{id:"api-gateway",reason:"Phase 16: API gateway — the north-south complement to mesh east-west"},{id:"multi-region-failover",reason:"Phase 18: multi-region — mesh locality LB + cross-region failover"},{id:"postmortems",reason:"Phase 19: postmortems — mesh-related incidents (sidecar OOM, cert rotation bug)"},{id:"runbook",reason:"Phase 21: runbook — per-service runbooks (Bronze Kafka, Snowflake, MLflow, DuckDB)"}]}),(0,s.jsx)(d.R,{pageId:"service-mesh-data"}),(0,s.jsx)(p.B,{pageId:"service-mesh-data"}),(0,s.jsx)(l.T,{relatedPages:[{id:"infrastructure",reason:"Start with the Phase 15 placeholder this deep-dive complements"},{id:"lakebase-deep-dive",reason:"Phase 27 sibling: Lakebase Postgres proxy (the other data-plane edge)"},{id:"observability",reason:"Phase 16: observability — mesh golden signals + platform obs overlap"}]}),(0,s.jsxs)("div",{className:"flex flex-wrap gap-2",children:[(0,s.jsx)(i(),{href:(0,u.ZJ)("infrastructure"),className:"text-sm text-primary hover:underline",children:"→ Infrastructure (Phase 15 placeholder)"}),(0,s.jsx)("span",{className:"text-muted-foreground",children:"\xb7"}),(0,s.jsx)(i(),{href:(0,u.ZJ)("lakebase-deep-dive"),className:"text-sm text-primary hover:underline",children:"→ Lakebase Deep Dive (Phase 27 sibling)"}),(0,s.jsx)("span",{className:"text-muted-foreground",children:"\xb7"}),(0,s.jsx)(i(),{href:(0,u.ZJ)("observability"),className:"text-sm text-primary hover:underline",children:"→ Observability (Phase 16)"}),(0,s.jsx)("span",{className:"text-muted-foreground",children:"\xb7"}),(0,s.jsx)(i(),{href:(0,u.ZJ)("connections"),className:"text-sm text-primary hover:underline",children:"→ Connections (cross-platform math graph)"})]})]})}}},e=>{e.O(0,[6919,8500,9430,3493,9760,7591,6012,9237,4843,8656,9620,6722,5404,9275,2194,663,7069,5041,6446,8441,3794,7358],()=>e(e.s=38443)),_N_E=e.O()}]);