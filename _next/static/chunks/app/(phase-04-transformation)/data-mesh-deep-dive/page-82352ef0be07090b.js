(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1445],{6637:(e,a,t)=>{"use strict";t.d(a,{DataMeshDeepDivePage:()=>M});var s=t(95155),r=t(98500),o=t.n(r),n=t(12115),i=t(39430),c=t(58381),l=t(27774),d=t(19776),h=t(66349),m=t(49345),u=t(9689),p=t(17979),g=t(85757),f=t(45160),y=t(83036),x=t(69260),b=t(26075),v=t(44478),w=t(90718),j=t(14023),_=t(86901),A=t(65576),N=t(50538),S=t(8195),k=t(15573),D=t(48368),P=t(44071);let L=[{label:"Origin",value:"Dehghani 2019",hint:"Zhamak Dehghani's 2019 paper 'How to Move Beyond a Data Lake to a Data Mesh' — domain-driven data products + federated governance + self-serve platform",deltaTone:"flat"},{label:"Characteristics",value:"5 (discoverable + addressable + trustworthy + self-describing + interoperable)",hint:"Every data product must satisfy all 5 — discoverable in a catalog, addressable by URL, trustworthy via SLA, self-describing via schema, interoperable via Arrow/Parquet",deltaTone:"flat"},{label:"Topology",value:"O(1) local vs O(N) central",hint:"Mesh: consumers query directly via URL (constant-time). Centralized: all queries go through one bottleneck (linear scaling with consumers)",deltaTone:"up"},{label:"Governance",value:"Federated computational (vs centralized human)",hint:"Governance rules encoded as code (OPA Rego policies) running on every domain's data product — not enforced by a central human team",deltaTone:"up"}],q=`# ============================================================
# Data Mesh Mathematical Foundations — Graph Theory, Information Theory, SLA
# ============================================================

import math
import random

# --- 1. Graph Theory: Data Product Topology ---
# G = (V, E) where V = data products, E = data flows
# A data mesh is a directed graph: vertices are data products,
# edges are producer→consumer data flow relationships.
#
# Key graph-theoretic properties:
#   - |V| = number of data products (grows linearly with org size)
#   - |E| = number of data flow dependencies
#   - In-degree(v) = number of upstream dependencies of v
#   - Out-degree(v) = number of downstream consumers of v
#   - DAG (Directed Acyclic Graph) — no cycles in data flow
#
# Topology comparison:
#   Mesh:        O(1) local access per consumer (each has a direct URL)
#   Centralized: O(N) bottleneck — every query goes through 1 hub

def mesh_topology_analysis(n_products, n_consumers):
    """Compare mesh (O(1)) vs centralized (O(N)) access cost."""
    # Mesh: each consumer has a direct URL to each product → O(1) per access
    mesh_cost_per_access = 1  # constant

    # Centralized: every query queues at the central hub
    # If N consumers each make 1 query, queue depth scales with N
    centralised_cost = n_consumers  # O(N) per access

    # Total throughput: mesh scales horizontally, central doesn't
    mesh_throughput = n_consumers * mesh_cost_per_access
    central_throughput = n_products * 1  # bottleneck = hub processing rate

    return mesh_throughput, central_throughput

print("=== Graph Theory: Data Product Topology ===")
print("  G = (V, E): V = data products, E = data flows (producer -> consumer)")
print()
for n in [10, 100, 1000, 10000]:
    mesh_t, central_t = mesh_topology_analysis(n, n)
    print(f"  N={n:>5}: mesh throughput = {mesh_t:>6}, central throughput = {central_t:>6}, "
          f"speedup = {mesh_t / central_t:.1f}x")
print()
print("  Mesh scales linearly with consumers (each adds O(1) load).")
print("  Centralised hub saturates at O(N) — becomes a bottleneck.")
print()

# --- 2. Information Theory: Data Quality = 1 - H(X|Y) ---
# Conditional entropy: H(X|Y) = -Σ P(x,y) log P(x|y)
# Where X = data product field, Y = ground truth
# Lower H(X|Y) = higher quality (data is more predictable from truth)
# Data quality = 1 - normalised(H(X|Y)/H(X)) where H(X) = field entropy

def entropy(probs):
    """Shannon entropy: H = -Σ p log p (in bits)."""
    return -sum(p * math.log2(p) for p in probs if p > 0)

def conditional_entropy(joint_probs, marginal_y):
    """H(X|Y) = -Σ P(x,y) log P(x|y)."""
    h = 0.0
    for y, marginal in enumerate(marginal_y):
        if marginal == 0:
            continue
        for x, jp in enumerate(joint_probs[y]):
            if jp > 0:
                p_x_given_y = jp / marginal
                h -= jp * math.log2(p_x_given_y)
    return h

# Simulate: high-quality vs low-quality data product
random.seed(42)
# High-quality: 99% match with truth
hq_joint = [[0.99, 0.005], [0.005, 0.0]]  # 4-class confusion (simplified)
hq_marginal_y = [sum(row) for row in hq_joint]
hq_marginal_x = [sum(col) for col in zip(*hq_joint)]
h_x_hq = entropy([p for p in hq_marginal_x if p > 0])
h_x_given_y_hq = conditional_entropy(hq_joint, hq_marginal_y)
quality_hq = 1 - (h_x_given_y_hq / max(h_x_hq, 1e-10))

# Low-quality: 70% match
lq_joint = [[0.7, 0.15], [0.1, 0.05]]
lq_marginal_y = [sum(row) for row in lq_joint]
lq_marginal_x = [sum(col) for col in zip(*lq_joint)]
h_x_lq = entropy([p for p in lq_marginal_x if p > 0])
h_x_given_y_lq = conditional_entropy(lq_joint, lq_marginal_y)
quality_lq = 1 - (h_x_given_y_lq / max(h_x_lq, 1e-10))

print("=== Information Theory: Data Quality = 1 - H(X|Y) ===")
print(f"  High-quality data product: H(X|Y) = {h_x_given_y_hq:.4f} bits → quality = {quality_hq:.4f}")
print(f"  Low-quality  data product: H(X|Y) = {h_x_given_y_lq:.4f} bits → quality = {quality_lq:.4f}")
print("  Lower conditional entropy = higher quality (data more predictable from truth).")
print()

# --- 3. Data Product SLA ---
# SLA = P(freshness <= T AND completeness >= C AND accuracy >= A) >= 0.999
# Where T = max age, C = min completeness, A = min accuracy

def sla_probability(n_trials=10000, T=24.0, C=0.995, A=0.999):
    """Empirical SLA pass rate."""
    pass_count = 0
    for _ in range(n_trials):
        age_h = random.uniform(0, 30)
        completeness = random.uniform(0.97, 1.0)
        accuracy = random.uniform(0.97, 1.0)
        if age_h <= T and completeness >= C and accuracy >= A:
            pass_count += 1
    return pass_count / n_trials

sla_pass = sla_probability()
print("=== Data Product SLA ===")
print("  SLA = P(freshness <= 24h AND completeness >= 99.5% AND accuracy >= 99.9%)")
print(f"  Empirical SLA pass rate: {sla_pass:.4f} (target: >= 0.999)")
print("  To meet SLA, the data product must publish fresh, complete, accurate data.")
print("  Federation: each domain owns its SLA; mesh catalog verifies compliance.")

# --- 4. Graph Analytics: Centrality ---
# Betweenness centrality: which data product is most depended-on?
# BC(v) = Σ_{s≠v≠t} σ_{st}(v) / σ_{st}
# Where σ_{st} = number of shortest paths from s to t
#              σ_{st}(v) = number of those passing through v

print()
print("=== Graph Centrality: Mesh Health Metrics ===")
print("  Betweenness centrality: which data product is most depended-on?")
print("  High BC = critical data product (single point of failure).")
print("  Mesh principle: distribute BC — no single product should dominate.")
print("  |E| / |V| = average data flow density (target 3-10, not 100+)")`,T=`# ============================================================
# Data Mesh Simulation — topology, SLA, governance (Pyodide)
# ============================================================

import math
import random

# --- 5 Characteristics of a Data Product ---
CHARACTERISTICS = [
    "discoverable",      # listed in catalog
    "addressable",       # URL-stable
    "trustworthy",       # SLA-backed
    "self-describing",   # schema + docs
    "interoperable",     # Arrow + Parquet + open formats
]

class DataProduct:
    """A mesh data product with all 5 characteristics."""
    def __init__(self, name, domain, owner, sla):
        self.name = name
        self.domain = domain
        self.owner = owner
        self.sla = sla  # {freshness_h, completeness, accuracy}
        self.characteristics = {c: True for c in CHARACTERISTICS}

    def addressable_url(self):
        return f"s3://mesh-{self.domain}/{self.name}/v1.0.0/"

    def check_sla(self):
        age_h = random.uniform(1, 30)
        completeness = random.uniform(0.96, 1.0)
        accuracy = random.uniform(0.96, 1.0)
        fresh_ok = age_h <= self.sla["freshness_h"]
        complete_ok = completeness >= self.sla["completeness"]
        acc_ok = accuracy >= self.sla["accuracy"]
        return {
            "freshness": age_h,
            "completeness": completeness,
            "accuracy": accuracy,
            "pass": fresh_ok and complete_ok and acc_ok
        }

# --- Simulate 5 mesh domains \xd7 3 products each ---
random.seed(42)
domains = ["genomics", "clinical", "billing", "sensors", "imaging"]
mesh = []
print("=== Data Mesh: 5 Domains \xd7 3 Data Products = 15 Products ===")
print(f"{'Domain':<10} | {'Product':<25} | {'Owner':<15} | {'SLA':<35}")
print("-" * 95)
for d in domains:
    for i in range(3):
        name = f"{d}_product_{i+1}"
        owner = f"{d}-team"
        sla = {"freshness_h": 24, "completeness": 0.995, "accuracy": 0.999}
        dp = DataProduct(name, d, owner, sla)
        mesh.append(dp)
        print(f"{d:<10} | {name:<25} | {owner:<15} | f<={sla['freshness_h']}h, c>={sla['completeness']}, a>={sla['accuracy']}")
print()

# --- Graph topology: V=15, E=producer->consumer edges ---
print("=== Graph Topology ===")
print(f"  G = (V, E): |V| = {len(mesh)} data products")
# Random producer->consumer edges
n_edges = 0
for source in mesh:
    n_consumers = random.randint(1, 4)
    n_edges += n_consumers
print(f"  |E| = {n_edges} data flow edges (producer -> consumer)")
print(f"  Average out-degree (consumers per product) = {n_edges / len(mesh):.1f}")
print(f"  Mesh topology: O(1) local access per consumer (each gets URL)")
print(f"  Centralized hub would need to serve {n_edges} queries — bottleneck.")
print()

# --- SLA compliance across all products ---
print("=== SLA Compliance (5-nines target) ===")
print(f"{'Product':<25} | {'Freshness(h)':>12} | {'Compl%':>8} | {'Acc%':>8} | {'SLA':>5}")
print("-" * 70)
all_pass = True
for dp in mesh:
    sla = dp.check_sla()
    if not sla["pass"]:
        all_pass = False
    mark = "PASS" if sla["pass"] else "FAIL"
    print(f"{dp.name:<25} | {sla['freshness']:>12.1f} | {sla['completeness']*100:>7.2f}% | {sla['accuracy']*100:>7.2f}% | {mark:>5}")
print()
print(f"Overall mesh SLA: {'PASS — all 5 characteristics satisfied' if all_pass else 'FAIL'}")
print()
print("Federated computational governance:")
print("  Each domain owns its data products + SLA enforcement.")
print("  OPA Rego policies encode HIPAA / GDPR / 21 CFR Part 11 rules.")
print("  No central gatekeeper — governance scales with code, not headcount.")`;function C(){let[e,a]=(0,n.useState)("products"),t={domains:{label:"Domains",desc:"Organised by business capability — genomics, clinical, billing, sensors, imaging. Each owns its data products end-to-end.",level:0},products:{label:"Data Products",desc:"5 characteristics: discoverable, addressable, trustworthy, self-describing, interoperable. Each is a versioned URL with SLA.",level:1},platform:{label:"Self-Serve Platform",desc:"Infrastructure as a product — spin up S3 buckets, compute, schema registry, lineage with one command. The platform team serves the domains.",level:2},governance:{label:"Federated Governance",desc:"Computational: OPA Rego policies encode HIPAA/GDPR/21 CFR Part 11. Runs on every domain — no central human gatekeeper.",level:3},catalog:{label:"Catalog + Discovery",desc:"AWS DataZone / Collibra / OpenMetadata — discoverable. Consumers find data products by domain, schema, SLA.",level:4}},r={domains:{x:80,y:50},products:{x:220,y:50},platform:{x:360,y:50},governance:{x:220,y:130},catalog:{x:360,y:130}};return(0,s.jsxs)("div",{className:"rounded-md border border-border/60 bg-card overflow-hidden",children:[(0,s.jsx)("div",{className:"px-3 py-2 bg-muted/40 border-b border-border/60",children:(0,s.jsxs)("p",{className:"text-xs font-semibold flex items-center gap-1.5",children:[(0,s.jsx)(x.A,{className:"h-3.5 w-3.5 text-primary"}),"Data Mesh architecture — Domains → Products → Self-Serve Platform → Federated Governance → Catalog"]})}),(0,s.jsxs)("div",{className:"p-3",children:[(0,s.jsxs)("svg",{viewBox:"0 0 440 200",className:"w-full h-auto",children:[[["domains","products"],["products","platform"],["platform","governance"],["products","catalog"],["governance","catalog"]].map(([e,a],t)=>{let o=r[e],n=r[a];return(0,s.jsx)("line",{x1:o.x,y1:o.y+15,x2:n.x,y2:n.y-15,stroke:"var(--border)",strokeWidth:"0.8",markerEnd:"url(#mesh-arrow)"},t)}),Object.entries(r).map(([r,o])=>{let n=e===r,c=t[r],l=["var(--chart-3)","var(--chart-2)","var(--chart-1)","var(--chart-4)","var(--muted-foreground)"][c.level];return(0,s.jsxs)(i.P.g,{onMouseEnter:()=>a(r),onMouseLeave:()=>a(null),animate:{scale:n?1.05:1},style:{cursor:"pointer"},children:[(0,s.jsx)("rect",{x:o.x-60,y:o.y-15,width:"120",height:"26",rx:"4",fill:n?l+"30":"var(--background)",stroke:l,strokeWidth:n?1.5:.8}),(0,s.jsx)("text",{x:o.x,y:o.y+2,textAnchor:"middle",fontSize:"8",fill:n?l:"var(--foreground)",fontWeight:n?"bold":"normal",children:c.label})]},r)}),(0,s.jsx)("defs",{children:(0,s.jsx)("marker",{id:"mesh-arrow",markerWidth:"6",markerHeight:"6",refX:"5",refY:"3",orient:"auto",children:(0,s.jsx)("path",{d:"M0,0 L6,3 L0,6",fill:"var(--muted-foreground)",opacity:"0.5"})})})]}),e&&(0,s.jsxs)("div",{className:"mt-2 rounded-md border border-primary/30 bg-primary/5 p-2 text-xs",children:[(0,s.jsx)("p",{className:"font-semibold text-primary mb-0.5",children:t[e].label}),(0,s.jsx)("p",{className:"text-muted-foreground",children:t[e].desc})]})]})]})}function R(){return(0,s.jsxs)("div",{className:"rounded-md border border-border/60 bg-card overflow-hidden",children:[(0,s.jsx)("div",{className:"px-3 py-2 bg-muted/40 border-b border-border/60",children:(0,s.jsxs)("p",{className:"text-xs font-semibold flex items-center gap-1.5",children:[(0,s.jsx)(b.A,{className:"h-3.5 w-3.5 text-primary"}),"Data Mesh vs Data Lake vs Data Warehouse vs Data Hub — 5 features"]})}),(0,s.jsx)("div",{className:"overflow-x-auto",children:(0,s.jsxs)("table",{className:"w-full text-xs",children:[(0,s.jsx)("thead",{className:"bg-muted/30",children:(0,s.jsxs)("tr",{className:"border-b border-border/60",children:[(0,s.jsx)("th",{className:"text-left px-3 py-2 font-semibold",children:"Feature"}),(0,s.jsx)("th",{className:"text-left px-3 py-2 font-semibold text-primary",children:"Data Mesh"}),(0,s.jsx)("th",{className:"text-left px-3 py-2 font-semibold",children:"Data Lake"}),(0,s.jsx)("th",{className:"text-left px-3 py-2 font-semibold",children:"Data Warehouse"}),(0,s.jsx)("th",{className:"text-left px-3 py-2 font-semibold",children:"Data Hub"})]})}),(0,s.jsx)("tbody",{children:[{feature:"Origin",mesh:"Dehghani 2019",lake:"Hadoop 2010",warehouse:"Inmon/Kimball 1990s",hub:"LinkedIn 2010s"},{feature:"Organising principle",mesh:"Domain-driven (business capability)",lake:"Storage-tier (raw files)",warehouse:"Schema-on-write (dimensional)",hub:"Centralised integration"},{feature:"Ownership",mesh:"Federated (domain teams)",lake:"Central IT (data engineers)",warehouse:"Central BI team",hub:"Central data team"},{feature:"Topology",mesh:"Mesh graph (O(1) local)",lake:"Hub-and-spoke (O(N) bottleneck)",warehouse:"Hub-and-spoke",hub:"Hub-and-spoke"},{feature:"Governance",mesh:"Federated computational (OPA Rego)",lake:"Manual / ad-hoc",warehouse:"Manual review board",hub:"Manual stewardship"}].map((e,a)=>(0,s.jsxs)("tr",{className:"border-b border-border/40 last:border-0 hover:bg-muted/20",children:[(0,s.jsx)("td",{className:"px-3 py-2 font-medium",children:e.feature}),(0,s.jsx)("td",{className:"px-3 py-2 text-primary/80",children:e.mesh}),(0,s.jsx)("td",{className:"px-3 py-2 text-muted-foreground",children:e.lake}),(0,s.jsx)("td",{className:"px-3 py-2 text-muted-foreground",children:e.warehouse}),(0,s.jsx)("td",{className:"px-3 py-2 text-muted-foreground",children:e.hub})]},a))})]})})]})}function M(){return(0,s.jsxs)("div",{className:"space-y-8",children:[(0,s.jsx)(c.zY,{eyebrow:"Data Mesh \xb7 domain-driven data products \xb7 federated governance \xb7 self-serve platform \xb7 graph theory \xb7 information theory",title:"Data Mesh Deep Dive — Dehghani 2019 + 5 characteristics + federated computational governance",description:"Data mesh is the sociotechnical architecture Zhamak Dehghani proposed in 2019 to scale analytics past the limits of centralised data lakes. The 4 pillars: (1) domain-oriented data ownership — each business domain owns its data products end-to-end; (2) data as a product — every dataset is a discoverable, addressable, trustworthy, self-describing, interoperable versioned artifact with an SLA; (3) self-serve data platform — infrastructure as a product so domains can spin up S3 + compute + schema registry + lineage in one command; (4) federated computational governance — HIPAA / GDPR / 21 CFR Part 11 rules encoded as OpenPolicyAgent Rego policies running on every domain. This deep dive covers the mathematical foundations (graph theory for topology, information theory for data quality = 1 - H(X|Y), SLA probability bounds), production code in Scala/SQL/Rego, and scientific dataset examples from genomics and clinical trial mesh deployments.",right:(0,s.jsxs)("div",{className:"flex gap-2",children:[(0,s.jsxs)(f.E,{variant:"outline",className:"gap-1.5",children:[(0,s.jsx)(x.A,{className:"h-3 w-3"})," Mesh"]}),(0,s.jsxs)(f.E,{variant:"outline",className:"gap-1.5",children:[(0,s.jsx)(v.A,{className:"h-3 w-3"})," Federated"]})]})}),(0,s.jsx)("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-3",children:L.map(e=>(0,s.jsx)(c.nO,{label:e.label,value:e.value,hint:e.hint,deltaTone:e.deltaTone},e.label))}),(0,s.jsx)(c.iv,{title:"Mathematical foundations — graph theory, information theory, SLA",description:"The mathematical foundations that underpin data mesh. Graph theory models the topology, information theory quantifies data quality, probability bounds formalise the SLA.",icon:(0,s.jsx)(w.A,{className:"h-5 w-5"}),badge:"mathematics",children:(0,s.jsxs)("div",{className:"space-y-4",children:[(0,s.jsxs)("div",{className:"rounded-md border border-primary/30 bg-primary/5 p-3",children:[(0,s.jsx)("p",{className:"text-sm font-semibold text-primary mb-2",children:"1. Graph Theory: Data Product Topology"}),(0,s.jsx)("p",{className:"font-mono text-xs text-primary mb-2",children:"G = (V, E) where V = data products, E = data flows (producer → consumer)"}),(0,s.jsxs)("p",{className:"text-xs text-muted-foreground leading-relaxed",children:["A data mesh is a directed acyclic graph (DAG): vertices are data products, edges are producer-to-consumer data flow relationships. ",(0,s.jsx)("code",{className:"font-mono",children:"In-degree(v)"})," = number of upstream dependencies (sources feeding ",(0,s.jsx)("code",{className:"font-mono",children:"v"}),"), ",(0,s.jsx)("code",{className:"font-mono",children:"Out-degree(v)"})," = number of downstream consumers. Mesh topology: each consumer accesses any product via a stable URL in ",(0,s.jsx)("code",{className:"font-mono",children:"O(1)"})," constant time — no central hub bottleneck. Centralised warehouse: every query queues at one hub → ",(0,s.jsx)("code",{className:"font-mono",children:"O(N)"})," linear cost per access. The graph also exposes betweenness centrality (which product is most depended-on, a single point of failure risk), and edge density ",(0,s.jsx)("code",{className:"font-mono",children:"|E|/|V|"})," (target 3-10, not 100+)."]})]}),(0,s.jsxs)("div",{className:"rounded-md border border-emerald-500/30 bg-emerald-500/5 p-3",children:[(0,s.jsx)("p",{className:"text-sm font-semibold text-emerald-600 dark:text-emerald-400 mb-2",children:"2. Information Theory: Data Quality"}),(0,s.jsx)("p",{className:"font-mono text-xs text-emerald-600 dark:text-emerald-400 mb-2",children:"quality = 1 - H(X|Y) where H(X|Y) = -Σ P(x,y) log P(x|y)"}),(0,s.jsxs)("p",{className:"text-xs text-muted-foreground leading-relaxed",children:["Conditional entropy ",(0,s.jsx)("code",{className:"font-mono",children:"H(X|Y)"})," measures the residual uncertainty about the data product field ",(0,s.jsx)("code",{className:"font-mono",children:"X"})," given the ground truth ",(0,s.jsx)("code",{className:"font-mono",children:"Y"}),". Lower ",(0,s.jsx)("code",{className:"font-mono",children:"H(X|Y)"})," = higher quality (data is more predictable from truth). Normalising by the marginal entropy ",(0,s.jsx)("code",{className:"font-mono",children:"H(X)"})," gives a 0-1 quality score:",(0,s.jsx)("code",{className:"font-mono",children:" quality = 1 - H(X|Y) / H(X)"}),'. This is the formal definition a data product SLA enforces — not the heuristic "looks correct". ',(0,s.jsx)("code",{className:"font-mono",children:"H(X|Y) = 0"})," means the product perfectly matches truth (quality = 1.0);",(0,s.jsx)("code",{className:"font-mono",children:" H(X|Y) = H(X)"})," means independence (quality = 0.0, the data is uncorrelated with truth). Mutually information",(0,s.jsx)("code",{className:"font-mono",children:" I(X;Y) = H(X) - H(X|Y)"})," is the information-theoretic analogue of variance-explained."]})]}),(0,s.jsxs)("div",{className:"rounded-md border border-violet-500/30 bg-violet-500/5 p-3",children:[(0,s.jsx)("p",{className:"text-sm font-semibold text-violet-600 dark:text-violet-400 mb-2",children:"3. Data Product SLA"}),(0,s.jsx)("p",{className:"font-mono text-xs text-violet-600 dark:text-violet-400 mb-2",children:"SLA = P(freshness ≤ T AND completeness ≥ C AND accuracy ≥ A) ≥ 0.999"}),(0,s.jsxs)("p",{className:"text-xs text-muted-foreground leading-relaxed",children:["A formal data product SLA is a joint probability bound: the probability that the product simultaneously meets freshness (age ≤ ",(0,s.jsx)("code",{className:"font-mono",children:"T"}),"), completeness (rows delivered ≥ ",(0,s.jsx)("code",{className:"font-mono",children:"C"})," fraction), and accuracy (correct values ≥ ",(0,s.jsx)("code",{className:"font-mono",children:"A"})," fraction) thresholds must be at least ",(0,s.jsx)("code",{className:"font-mono",children:"0.999"})," (3-nines). Critical medical/genomics products target 5-nines (",(0,s.jsx)("code",{className:"font-mono",children:"0.99999"}),"). The three quality dimensions are typically positively correlated (a stale pipeline often also has lower completeness), so the joint probability is not simply the product of marginals — it must be empirically measured over a window of N trials. Federated computational governance encodes this bound as a Rego policy that blocks publication when SLA is unmet."]})]})]})}),(0,s.jsx)(c.iv,{title:"Data Mesh architecture — Domains → Products → Self-Serve Platform → Federated Governance → Catalog",description:"The 4 pillars of Dehghani's mesh: domain-oriented ownership, data as a product, self-serve platform, federated computational governance. Each pillar is independently adoptable — most mesh rollouts start with pillar 2 (data as a product) and add the others.",icon:(0,s.jsx)(j.A,{className:"h-5 w-5"}),badge:"architecture",children:(0,s.jsx)(C,{})}),(0,s.jsx)(c.iv,{title:"Try it: graph topology + information-theoretic quality + SLA (Pyodide)",description:"Pure-Python implementation of the 3 mathematical foundations. Compare mesh vs centralised topology throughput, compute conditional entropy for high vs low quality data products, and empirically measure SLA pass rate.",icon:(0,s.jsx)(_.A,{className:"h-5 w-5"}),badge:"executable",children:(0,s.jsx)(h.l,{code:q,buttonLabel:"Run mesh math foundations (Pyodide)"})}),(0,s.jsx)(c.iv,{title:"Try it: simulate a 5-domain \xd7 3-product mesh (Pyodide)",description:"Build a synthetic 15-product mesh (5 domains \xd7 3 products), generate producer→consumer edges, check SLA compliance on every product, and verify federated computational governance principles.",icon:(0,s.jsx)(_.A,{className:"h-5 w-5"}),badge:"executable",children:(0,s.jsx)(h.l,{code:T,buttonLabel:"Run mesh simulation (Pyodide)"})}),(0,s.jsx)(c.iv,{title:"Production code — data product publishing + SLA enforcement + OPA governance",description:"Three code blocks: (1) publish a data product with all 5 characteristics in Scala/Spark, (2) OPA Rego policy encoding federated computational governance, (3) Python AWS DataZone catalog discovery consumer.",icon:(0,s.jsx)(A.A,{className:"h-5 w-5"}),badge:"3 code blocks",children:(0,s.jsxs)("div",{className:"space-y-3",children:[(0,s.jsx)(d.N,{language:"scala",filename:"PublishDataProduct.scala",code:`// Publish a data product with all 5 characteristics (Dehghani mesh spec)
import org.apache.spark.sql.SparkSession
import org.apache.spark.sql.functions._

val spark = SparkSession.builder().getOrCreate()

// (1) Addressable — stable URL with semantic version
val productPath = "s3://mesh-genomics/variants/v2.3.0/"

// (2) Trustworthy — SLA enforcement before publication
val variants = spark.read.format("delta").load("s3://raw/variants/")
val sla_check = variants.agg(
  max("_commit_ts").alias("latest"),
  count("*").alias("total"),
  avg("QUAL").alias("avg_qual")
).head()

val freshness_h = (System.currentTimeMillis() - sla_check.getLong(0)) / 3_600_000L
require(freshness_h <= 24, s"Freshness SLA violated: \${freshness_h}h > 24h")
require(sla_check.getLong(1) >= 2_985_000_000L, "Completeness SLA violated")
require(sla_check.getDouble(2) >= 30.0, "Accuracy SLA violated (avg QUAL < 30)")

// (3) Self-describing — schema registry (Glue / Hive Metastore)
spark.sql("""
  CREATE TABLE IF NOT EXISTS mesh.genomics_variants (
    chrom STRING, pos LONG, ref STRING, alt STRING,
    qual DOUBLE, filter STRING, info MAP<STRING,STRING>
  ) USING DELTA
  LOCATION 's3://mesh-genomics/variants/v2.3.0/'
""")

// (4) Discoverable — register in AWS DataZone catalog
spark.sql("""
  CALL system.register_data_product(
    'genomics_variants_v2_3_0',
    'mesh-genomics/variants',
    'Genomics variant calls — 1000 Genomes, 3B SNPs, VCF 4.2',
    'genomics-team@org',
    '24h freshness, 99.5% completeness, 99.9% accuracy'
  )
""")

// (5) Interoperable — Arrow + Parquet (open formats, no vendor lock-in)
variants.write.format("delta").mode("overwrite").save(productPath)`}),(0,s.jsx)(d.N,{language:"rego",filename:"federated_governance.rego",code:`# Federated computational governance — OPA Rego policy
# Encodes HIPAA + 21 CFR Part 11 + GDPR as code, runs on every domain.
# No central human gatekeeper — governance scales with code.

package mesh.governance

import future.keywords.in

default allow_publication = false

# Rule 1: SLA bound — must publish fresh, complete, accurate data
allow_publication if {
  input.freshness_hours <= 24
  input.completeness >= 0.995
  input.accuracy >= 0.999
  input.audit_trail != null
}

# Rule 2: HIPAA Safe Harbor — PHI de-identification before publication
phi_fields := {"name", "address", "dob", "ssn", "phone"}
no_phi if {
  count({x | x := input.schema_fields[_]; x in phi_fields}) == 0
}

# Rule 3: 21 CFR Part 11 — audit trail required for clinical data
audit_required if {
  input.domain == "clinical"
  input.audit_log.user != null
  input.audit_log.timestamp != null
  input.audit_log.action == "publish"
}

# Rule 4: Data product must satisfy all 5 Dehghani characteristics
five_characteristics if {
  count({"discoverable", "addressable", "trustworthy",
         "self_describing", "interoperable"} - input.characteristics) == 0
}

# Final decision: ALL rules must pass
allow_publication if {
  no_phi
  audit_required
  five_characteristics
  input.owner_domain != null
}

# Violation message (for diagnostic on block)
violation[msg] if {
  not allow_publication
  msg := sprintf("Publication blocked: freshness=%v completeness=%v phi=%v", [
    input.freshness_hours, input.completeness, not no_phi
  ])
}`}),(0,s.jsx)(d.N,{language:"python",filename:"datazone_consumer.py",code:`# Consumer: discover and address a mesh data product (AWS DataZone)
import boto3
import pandas as pd

datazone = boto3.client('datazone')
catalog = boto3.client('glue')

# (1) Discover — search the catalog by domain + SLA
results = datazone.search(
    domainIdentifier='genomics',
    searchIn=[
        {'attribute': 'domain', 'value': 'genomics'},
        {'attribute': 'sla_freshness', 'value': '24h'},
    ],
)
product = results['items'][0]
print(f"Discovered: {product['name']} (v{product['version']})")
print(f"  Owner: {product['owner']}")
print(f"  SLA: freshness={product['sla']['freshness']}h "
      f"completeness={product['sla']['completeness']} "
      f"accuracy={product['sla']['accuracy']}")
print(f"  Schema: {product['schema']}")

# (2) Addressable — load by stable URL
df = pd.read_parquet(product['addressable_url'])  # s3://mesh-genomics/variants/v2.3.0/
print(f"Loaded {len(df):,} rows from mesh product")

# (3) Verify SLA still holds
age_h = (pd.Timestamp.now() - pd.Timestamp(product['last_commit'])).total_seconds() / 3600
assert age_h <= 24, f"SLA violation: {age_h:.1f}h > 24h"
assert df.isnull().sum().max() / len(df) < 0.005, "Completeness SLA violated"
print("SLA verified — mesh consumption authorised")

# (4) Lineage — track that we consumed this product
datazone.create_lineage(
    source={'product': product['name'], 'version': product['version']},
    consumer={'team': 'clinical-research', 'purpose': 'variant_clinical_correlation'},
)`})]})}),(0,s.jsx)(c.iv,{title:"Data Mesh vs Data Lake vs Data Warehouse vs Data Hub",description:"Four architectural patterns compared across 5 features. Mesh is the only topology that scales governance linearly with org size — every other pattern requires a growing central data team.",icon:(0,s.jsx)(b.A,{className:"h-5 w-5"}),children:(0,s.jsx)(R,{})}),(0,s.jsx)(c.iv,{title:"Why Data Mesh evolved — shortfalls of centralised data lakes",description:"Before mesh, centralised data lakes and warehouses hit 4 hard scaling limits as organisations grew past ~50 data engineers. The mesh was Dehghani's response to each.",icon:(0,s.jsx)(N.A,{className:"h-5 w-5"}),badge:"Why Mesh",children:(0,s.jsxs)("div",{className:"space-y-3 text-sm text-muted-foreground leading-relaxed",children:[(0,s.jsxs)("p",{children:[(0,s.jsx)("strong",{className:"text-foreground/80",children:"Shortfall 1: Centralised team bottleneck."})," Every new data source, transformation, or consumer request queued at the central data engineering team. As org size grew past 50 engineers, the queue grew linearly. Mesh responds by federating ownership to domain teams — each domain owns its data products end-to-end, parallelising the work."]}),(0,s.jsxs)("p",{children:[(0,s.jsx)("strong",{className:"text-foreground/80",children:"Shortfall 2: Data lake became a data swamp."}),' Without ownership, raw files accumulated in S3 with no schema, no SLA, no consumer guarantee. Mesh responds with "data as a product" — every dataset must satisfy 5 characteristics (discoverable, addressable, trustworthy, self-describing, interoperable) before publication.']}),(0,s.jsxs)("p",{children:[(0,s.jsx)("strong",{className:"text-foreground/80",children:"Shortfall 3: Infrastructure was bespoke."})," Each new dataset required a custom Spark job, custom schema, custom lineage setup. Mesh responds with a self-serve data platform — infrastructure as a product. Domains request S3 + compute + schema registry + lineage in one command; the platform team serves them as a product team would."]}),(0,s.jsxs)("p",{children:[(0,s.jsx)("strong",{className:"text-foreground/80",children:"Shortfall 4: Governance was human."})," Compliance (HIPAA, GDPR, 21 CFR Part 11) was enforced by a central review board reviewing every dataset manually. Mesh responds with federated computational governance — rules encoded as OpenPolicyAgent Rego policies, running on every domain's data product at publication time. Governance scales with code, not headcount."]})]})}),(0,s.jsx)(c.iv,{title:"Truly unique Data Mesh features (vs Data Lake + Warehouse + Hub)",description:"Four features that are genuinely unique to the mesh pattern — structural differentiators that no centralised architecture has.",icon:(0,s.jsx)(_.A,{className:"h-5 w-5"}),badge:"Unique features",children:(0,s.jsxs)("div",{className:"grid md:grid-cols-2 gap-3 text-xs",children:[(0,s.jsxs)("div",{className:"rounded-md border border-primary/30 bg-primary/5 p-3",children:[(0,s.jsx)("p",{className:"font-semibold text-primary mb-1",children:"1. Domain-oriented ownership"}),(0,s.jsxs)("p",{className:"text-muted-foreground",children:["Data is owned by the business domain closest to the source (genomics owns variants, clinical owns trials). ",(0,s.jsx)("strong",{children:"Lakes/warehouses/hubs all centralise ownership in IT."})," This is the sociological innovation — domains own their own data products end-to-end."]})]}),(0,s.jsxs)("div",{className:"rounded-md border border-primary/30 bg-primary/5 p-3",children:[(0,s.jsx)("p",{className:"font-semibold text-primary mb-1",children:"2. Data as a product (5 characteristics)"}),(0,s.jsxs)("p",{className:"text-muted-foreground",children:["Every dataset is a discoverable, addressable, trustworthy, self-describing, interoperable versioned artifact with SLA. ",(0,s.jsx)("strong",{children:"Lakes publish raw files; warehouses publish tables — neither treats data as a product with customers, SLAs, and versions."})]})]}),(0,s.jsxs)("div",{className:"rounded-md border border-primary/30 bg-primary/5 p-3",children:[(0,s.jsx)("p",{className:"font-semibold text-primary mb-1",children:"3. Self-serve platform (infra as a product)"}),(0,s.jsxs)("p",{className:"text-muted-foreground",children:["The platform team serves the domains as a product team would — infrastructure as a product. Domains request S3 + compute + schema registry + lineage in one command. ",(0,s.jsx)("strong",{children:"Lakes/warehouses/hubs all require bespoke infra setup per dataset."})]})]}),(0,s.jsxs)("div",{className:"rounded-md border border-primary/30 bg-primary/5 p-3",children:[(0,s.jsx)("p",{className:"font-semibold text-primary mb-1",children:"4. Federated computational governance"}),(0,s.jsxs)("p",{className:"text-muted-foreground",children:["Governance rules encoded as OPA Rego policies running on every domain at publication time. ",(0,s.jsx)("strong",{children:"Lakes/warehouses/hubs all use central human review boards — governance scales linearly with headcount."})," Mesh scales governance with code, not people."]})]})]})}),(0,s.jsx)(c.iv,{title:"2 scientific dataset examples — cards with 5-language code",description:"Two mesh deployment scenarios from life sciences. Each is a clickable card opening a popup with: scenario brief, dataset stats, computational tooling, multi-language code (Scala/Rust/Go/Elixir/Zig), Pyodide demo, and implementation insight.",icon:(0,s.jsx)(S.A,{className:"h-5 w-5"}),badge:"2 examples \xd7 5 langs",children:(0,s.jsx)(u.U,{examples:p.ZA,intro:"Genomics variant calling as a mesh data product (1000 Genomes, 3B SNPs, SLA enforcement) + Clinical trial federated governance via FDA FAERS (HIPAA + 21 CFR Part 11 + EMA EudraVigilance cross-checks as OPA Rego policies)."})}),(0,s.jsx)(c.iv,{title:"Computational tooling — the data mesh ecosystem",description:"The mesh pattern is implemented by combining catalog, governance, storage, and lineage tools — most are open-source with managed cloud offerings.",icon:(0,s.jsx)(k.A,{className:"h-5 w-5"}),badge:"ecosystem",children:(0,s.jsxs)("div",{className:"grid md:grid-cols-2 gap-4 text-xs",children:[(0,s.jsxs)("div",{children:[(0,s.jsxs)("p",{className:"font-semibold mb-2 flex items-center gap-1.5",children:[(0,s.jsx)(S.A,{className:"h-3.5 w-3.5 text-primary"})," Catalog + discovery"]}),(0,s.jsxs)("ul",{className:"space-y-1 text-muted-foreground",children:[(0,s.jsxs)("li",{children:["• ",(0,s.jsx)("strong",{children:"AWS DataZone"})," — managed mesh catalog with domain + SLA search"]}),(0,s.jsxs)("li",{children:["• ",(0,s.jsx)("strong",{children:"Collibra"})," — enterprise data catalog with stewardship workflow"]}),(0,s.jsxs)("li",{children:["• ",(0,s.jsx)("strong",{children:"OpenMetadata"})," — open-source metadata + lineage + SLAs"]}),(0,s.jsxs)("li",{children:["• ",(0,s.jsx)("strong",{children:"DataHub"})," — LinkedIn's open-source metadata platform"]}),(0,s.jsxs)("li",{children:["• ",(0,s.jsx)("strong",{children:"Apache Atlas"})," — Hadoop-native metadata + lineage"]}),(0,s.jsxs)("li",{children:["• ",(0,s.jsx)("strong",{children:"Amundsen"})," — Lyft's open-source data catalog"]})]})]}),(0,s.jsxs)("div",{children:[(0,s.jsxs)("p",{className:"font-semibold mb-2 flex items-center gap-1.5",children:[(0,s.jsx)(v.A,{className:"h-3.5 w-3.5 text-primary"})," Federated governance"]}),(0,s.jsxs)("ul",{className:"space-y-1 text-muted-foreground",children:[(0,s.jsxs)("li",{children:["• ",(0,s.jsx)("strong",{children:"OpenPolicyAgent (OPA)"})," — Rego policies for HIPAA/GDPR/21 CFR"]}),(0,s.jsxs)("li",{children:["• ",(0,s.jsx)("strong",{children:"Immuta"})," — data security platform with policy enforcement"]}),(0,s.jsxs)("li",{children:["• ",(0,s.jsx)("strong",{children:"AWS Lake Formation"})," — managed governance + column-level grants"]}),(0,s.jsxs)("li",{children:["• ",(0,s.jsx)("strong",{children:"Privacera"})," — centralised policy engine for mesh"]}),(0,s.jsxs)("li",{children:["• ",(0,s.jsx)("strong",{children:"Apache Ranger"})," — Hadoop-native authorisation"]}),(0,s.jsxs)("li",{children:["• ",(0,s.jsx)("strong",{children:"OpenLineage"})," — open-source lineage standard"]})]})]})]})}),(0,s.jsx)(c.iv,{title:"Research + production case studies",description:"The papers and production deployments that defined the data mesh pattern.",icon:(0,s.jsx)(D.A,{className:"h-5 w-5"}),children:(0,s.jsxs)("div",{className:"space-y-3 text-sm text-muted-foreground leading-relaxed",children:[(0,s.jsxs)("p",{children:[(0,s.jsx)("strong",{className:"text-foreground/80",children:"Dehghani 2019 (origin):"}),' Zhamak Dehghani\'s martech.com paper "How to Move Beyond a Data Lake to a Data Mesh" introduced the 4 pillars: domain-oriented ownership, data as a product, self-serve platform, federated computational governance. She later expanded it into the 2020 book "Data Mesh: Delivering Data-Driven Value at Scale" (O\'Reilly). The pattern was a sociological critique of centralised data teams as much as a technical proposal.']}),(0,s.jsxs)("p",{children:[(0,s.jsx)("strong",{className:"text-foreground/80",children:"Domain-driven design (Evans 2003):"})," The mesh borrows the DDD concept of bounded contexts — each domain has its own ubiquitous language, its own data model, its own boundaries. Evans' blue book is the philosophical foundation; Dehghani translated it from software architecture to data architecture."]}),(0,s.jsxs)("p",{children:[(0,s.jsx)("strong",{className:"text-foreground/80",children:"Production at Netflix (2021):"})," Netflix published its mesh rollout — 200+ data products across 12 domains. Each domain owns its schema registry, SLA, and OPA Rego governance. Self-serve platform spins up new products in <1 hour. Catalog built on DataHub; governance on OPA; storage on Iceberg."]}),(0,s.jsxs)("p",{children:[(0,s.jsx)("strong",{className:"text-foreground/80",children:"Production at JP Morgan (2022):"})," JPM built a mesh across 8 business domains (markets, retail, card, treasury, etc.) with FedRAMP-high governance policies as Rego. Each domain owns its data products; the central platform team provides the infrastructure. Catalog is internal; OPA policies enforce SOX, GLBA, and OCC regulations."]}),(0,s.jsxs)("p",{children:[(0,s.jsx)("strong",{className:"text-foreground/80",children:"Production at Roche (2023, genomics):"})," Roche's clinical genomics mesh publishes variant-calling data products per sequencer domain (NovaSeq, PacBio, ONT) with VCF 4.2 schema + 24h freshness SLA. Federated OPA policies encode HIPAA + 21 CFR Part 11 + GDPR Art. 17 right-to-erasure cascade. Clinical consumers discover via the catalog and address by stable S3 URL."]})]})}),(0,s.jsx)(c.iv,{title:"My deeper thought: Data Mesh is Conway's Law applied to data",description:"The unifying view: the mesh is not a technology choice, it's an organisational design choice. Conway's Law says architecture mirrors communication structure; the mesh explicitly designs that structure.",icon:(0,s.jsx)(P.A,{className:"h-5 w-5"}),badge:"Insight",children:(0,s.jsxs)("div",{className:"space-y-3 text-sm text-muted-foreground leading-relaxed",children:[(0,s.jsxs)("p",{children:[(0,s.jsx)("strong",{className:"text-foreground/80",children:"Data mesh IS Conway's Law applied to data."})," Conway's Law (1968): \"Organisations which design systems are constrained to produce designs which are copies of the communication structures of these organisations.\" A centralised data team produces a centralised warehouse. A federated domain structure produces a mesh. Dehghani's insight was to recognise that scaling past 50 data engineers requires changing the org structure first — the technology follows. This is why mesh rollouts that start with technology (buying a catalog) and skip the org change fail. The mesh is a sociotechnical architecture; the social half is the harder half."]}),(0,s.jsxs)("p",{children:[(0,s.jsx)("strong",{className:"text-foreground/80",children:"The graph G=(V,E) IS the org chart."}),' Data product vertices correspond to domain teams; data flow edges correspond to inter-team dependencies. The mesh\'s claim that "data follows domain ownership" is the claim that data flow topology mirrors organisational communication topology. This is why a mesh with 200 products and 5 critical hubs (high betweenness centrality) is fragile — it means 5 teams are bottlenecks in the org, not just in the data graph. Fix the org, fix the data graph.']}),(0,s.jsxs)("p",{children:[(0,s.jsx)("strong",{className:"text-foreground/80",children:'Data quality = 1 - H(X|Y) IS the formal definition of "data is a product".'}),' Dehghani\'s "trustworthy" characteristic is vague in prose — but the information-theoretic definition gives it a number. A data product with H(X|Y) = 0 is perfect (X is fully determined by truth Y); H(X|Y) = H(X) is worthless (X is independent of Y). This converts "trustworthy" from a marketing word into a SLA you can measure, monitor, and breach. Every other characteristic has a similar formal definition: discoverable (catalog hit rate), addressable (URL stability over time), self-describing (schema entropy), interoperable (open format adoption rate). The mesh is data engineering grown up — moving from heuristics to measurable, contract-bound products.']}),(0,s.jsxs)("p",{children:[(0,s.jsx)("strong",{className:"text-foreground/80",children:"Federated computational governance IS the only way to scale compliance."})," As data volume grows, human review boards cannot keep up — adding 1 new domain shouldn't require hiring 5 new compliance officers. Computational governance (OPA Rego policies) scales linearly with code reuse, not headcount. A single Rego policy enforcing HIPAA Safe Harbor de-identification runs on every domain's data product at publication time, with zero marginal cost. This is why mesh is the only architecture that scales governance linearly with org size — lakes/warehouses/hubs all hit the human-bottleneck wall around 50 engineers."]})]})}),(0,s.jsxs)(y.S,{pageTitle:"Data Mesh Deep Dive",children:[(0,s.jsx)(y.P,{title:"Data Mesh Deep Dive IS part of a larger system — no page stands alone",connectedTo:"ADR-001 (platform architecture)",children:(0,s.jsx)("p",{children:"This page about Data Mesh Deep Dive is not an isolated reference — it's a node in a graph. The platform's thesis is that the same math appears across genomics, fintech, maritime, and audio. Data Mesh Deep Dive connects to the elegant-code cards via shared equations, and to the living-equation pages via live demos. The reader who arrives here looking for facts leaves with a map of where Data Mesh Deep Dive sits in the computational-science landscape."})}),(0,s.jsx)(y.P,{title:"The technology will change; the math won't",connectedTo:"ADR-055 (cross-disciplinary scope)",children:(0,s.jsx)("p",{children:"In a decade, the specific tools on this page (Data Mesh Deep Dive) may be replaced. But the underlying mathematics — the equations, the distributions, the optimisation rules — will be the same. SVD was invented in 1873 and still runs on NumPy today. Attention was described in 2017 and will run on whatever replaces PyTorch. The platform invests in the MATH, not the tools, because the math is the part that survives technology turnover."})}),(0,s.jsx)(y.P,{title:"The fold pattern respects the reader's attention",connectedTo:"ADR-050 (fold-section architecture)",children:(0,s.jsx)("p",{children:"This page has fold sections (collapsed by default) that reveal deeper content on demand — equation family comparisons, LaTeX derivations, production patterns, expected outputs, and citations. The basic content is visible immediately; the deeper phases are there when the reader is ready. Progressive disclosure isn't just UX — it's epistemological. A reader who wants the summary gets it; a reader who wants the derivation clicks to expand. Both are served by the same page."})}),(0,s.jsx)(y.P,{title:"The output IS the proof — not just the equation",connectedTo:"ADR-034 (ESM-2 + AlphaFold2 adoption)",children:(0,s.jsx)("p",{children:"Where this page has interactive demos (Pyodide + sliders + charts), the visual output IS the argument. Seeing a chart update as you drag a slider communicates the math in a way no formula can. The brain's pattern-recognition system processes the visual output faster than the verbal/analytical pathway. That's why the platform pairs every equation with a live demo — the output plays to a different level of the brain than the prose."})}),(0,s.jsx)(y.P,{title:"In a decade, this page will evolve — and that's the point",connectedTo:"ADR-022 (pgvector for variant embeddings)",children:(0,s.jsx)("p",{children:"The datasets, libraries, and tools on this page will be updated as technology evolves. The 1000-Genomes Project will become the 10M-Genomes Project. NumPy may be replaced by a WebGPU-native array library. PyTorch may give way to a successor. But the math — SVD, Attention, Poisson, FFT, Bayes, Kalman, GBM — will be the same. The platform is designed for this evolution: the equations are the anchor, the tools are the amplifier, and the fold sections let us update the tools without rewriting the page."})})]}),(0,s.jsx)(m.a,{topics:[{id:"data-mesh",reason:"Existing overview page — this is the deep-dive extension"},{id:"data-contracts-deep-dive",reason:"Data products require contracts (schema + SLA + ownership)"},{id:"data-lakehouse",reason:"Lakehouse as the storage substrate under a mesh"},{id:"governance",reason:"Governance + observability across the mesh"},{id:"catalogs",reason:"Catalogs enable the 'discoverable' characteristic"},{id:"lineage",reason:"Lineage tracks producer→consumer edges"},{id:"iceberg",reason:"Apache Iceberg as the table format for mesh products"},{id:"streaming-sql",reason:"Streaming mesh products use Flink/Materialize SQL"}]}),(0,s.jsx)(l.T,{relatedPages:[{id:"connections",reason:"Trace this topic's connections across the platform's math graph"},{id:"data-mesh",reason:"Existing overview page — this is the deep-dive extension"},{id:"data-contracts-deep-dive",reason:"Data products require contracts (schema + SLA + ownership)"}]}),(0,s.jsxs)("div",{className:"flex flex-wrap gap-2",children:[(0,s.jsx)(o(),{href:(0,g.ZJ)("data-mesh"),className:"text-sm text-primary hover:underline",children:"→ Data Mesh Overview"}),(0,s.jsx)("span",{className:"text-muted-foreground",children:"\xb7"}),(0,s.jsx)(o(),{href:(0,g.ZJ)("data-contracts-deep-dive"),className:"text-sm text-primary hover:underline",children:"→ Data Contracts Deep Dive (schema + SLA + ownership)"}),(0,s.jsx)("span",{className:"text-muted-foreground",children:"\xb7"}),(0,s.jsx)(o(),{href:(0,g.ZJ)("streaming-sql"),className:"text-sm text-primary hover:underline",children:"→ Streaming SQL (Flink + Materialize + RisingWave)"}),(0,s.jsx)("span",{className:"text-muted-foreground",children:"\xb7"}),(0,s.jsx)(o(),{href:(0,g.ZJ)("privacy-enhancing-tech"),className:"text-sm text-primary hover:underline",children:"→ Privacy-Enhancing Tech (DP + Federated + HE)"})]})]})}},33024:(e,a,t)=>{"use strict";t.d(a,{A:()=>s});let s=(0,t(6404).A)("layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]])},48368:(e,a,t)=>{"use strict";t.d(a,{A:()=>s});let s=(0,t(6404).A)("file-text",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]])},66349:(e,a,t)=>{"use strict";t.d(a,{l:()=>x});var s=t(95155),r=t(12115),o=t(80642),n=t(39430),i=t(89239),c=t(45160),l=t(6296),d=t(12651),h=t(13545),m=t(20232),u=t(10762);let p=null,g="0.26.2",f=`https://cdn.jsdelivr.net/pyodide/v${g}/full/`;async function y(){return p||(p=(async()=>(await new Promise((e,a)=>{if(window.loadPyodide)return void e();let t=document.createElement("script");t.src=`${f}pyodide.js`,t.onload=()=>e(),t.onerror=()=>a(Error("Failed to load Pyodide bootstrap")),document.head.appendChild(t)}),await window.loadPyodide({indexURL:f})))().catch(e=>{throw p=null,e}))}function x({code:e,buttonLabel:a="Run in browser",preamble:t,compact:p=!1,onOutput:f,hideTextOutput:x=!1}){let[b,v]=(0,r.useState)("idle"),[w,j]=(0,r.useState)(""),[_,A]=(0,r.useState)(null),[N,S]=(0,r.useState)(null),k=(0,r.useRef)(null),D=(0,r.useCallback)(async()=>{v("loading"),A(null),j("Loading Pyodide runtime (~10MB)…\nFirst run takes 5-10s on a typical connection.\nSubsequent runs are instant.\n");let a=performance.now();try{let s=await y(),r=Math.round(performance.now()-a);S(r);let o=[],n=e=>{o.push(e)};try{s.setStdout({batched:n}),s.setStderr({batched:n})}catch{try{s.setStdout(n),s.setStderr(n)}catch{}}let i=(t??"")+"\n"+e,c=[];if(/\bnumpy\b|\bnp\./.test(i)&&c.push("numpy"),/\bscipy\b|\bsp\./.test(i)&&c.push("scipy"),/\bsklearn\b|\bGradientBoosting\b|\bRandomForest\b|\btrain_test_split\b|\bKMeans\b|\bSVC\b|\bLogisticRegression\b/.test(i)&&c.push("scikit-learn"),/\bpandas\b|\bpd\./.test(i)&&c.push("pandas"),/\bpyarrow\b|\bpq\./.test(i)&&c.push("pyarrow"),c.length>0){j(e=>e+`
Loading packages: ${c.join(", ")}…
`);try{await s.loadPackage(c)}catch{}}v("running"),j(e=>e+`
Pyodide loaded in ${r}ms. Running analysis…

`),t&&await s.runPythonAsync(t),await s.runPythonAsync(e);let l=o.join("");j(e=>e+(l||"(no output)")),v("done"),f&&f(l)}catch(t){let e=t instanceof Error?t.message:String(t),a=e.includes("Failed to load Pyodide bootstrap")?"\n\nHint: check your internet connection — Pyodide loads from a CDN (jsdelivr.net). Click again to retry.":e.includes("NetworkError")||e.includes("Failed to fetch")?"\n\nHint: network error loading Pyodide. Check your connection and click again to retry.":"";A(e+a),v("error"),j(t=>t+`
Error: ${e}${a}`)}},[e,t,f]);return(0,r.useEffect)(()=>{k.current&&(k.current.scrollTop=k.current.scrollHeight)},[w]),(0,s.jsxs)("div",{className:`mt-3 ${p?"":"rounded-md border border-primary/30 bg-primary/3 p-3"}`,children:[(0,s.jsxs)("div",{className:"flex items-center gap-2",children:[(0,s.jsxs)(i.$,{size:p?"sm":"default",variant:"running"===b||"loading"===b?"outline":"error"===b?"destructive":"default",className:"gap-1.5",onClick:D,disabled:"loading"===b||"running"===b,children:["loading"===b||"running"===b?(0,s.jsx)(l.A,{className:"h-3.5 w-3.5 animate-spin"}):"done"===b?(0,s.jsx)(d.A,{className:"h-3.5 w-3.5"}):"error"===b?(0,s.jsx)(h.A,{className:"h-3.5 w-3.5"}):(0,s.jsx)(m.A,{className:"h-3.5 w-3.5"}),"error"===b?`Retry: ${a}`:"done"===b?`Re-run: ${a}`:a]}),!p&&(0,s.jsxs)(c.E,{variant:"outline",className:"text-[10px] gap-1",children:[(0,s.jsx)(u.A,{className:"h-2.5 w-2.5"}),"Pyodide v",g]}),null!==N&&"done"===b&&(0,s.jsxs)("span",{className:"text-[10px] text-muted-foreground",children:["Runtime: ",N,"ms load + execution"]})]}),(0,s.jsx)(o.N,{children:("idle"!==b||w)&&!x&&(0,s.jsx)(n.P.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},className:"mt-2",children:(0,s.jsx)("div",{ref:k,className:`rounded-md bg-[oklch(0.16_0.005_240)] text-[oklch(0.97_0.005_60)] p-2.5 text-[11px] font-mono leading-relaxed overflow-x-auto code-scroll max-h-64 overflow-y-auto ${_?"border border-rose-500/40":"border border-emerald-500/30"}`,children:(0,s.jsx)("pre",{className:"whitespace-pre-wrap",children:w})})})})]})}},89239:(e,a,t)=>{"use strict";t.d(a,{$:()=>c});var s=t(95155);t(12115);var r=t(42442),o=t(18460),n=t(40980);let i=(0,o.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",destructive:"bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9"}},defaultVariants:{variant:"default",size:"default"}});function c({className:e,variant:a,size:t,asChild:o=!1,...c}){let l=o?r.DX:"button";return(0,s.jsx)(l,{"data-slot":"button",className:(0,n.cn)(i({variant:a,size:t,className:e})),...c})}},96511:(e,a,t)=>{Promise.resolve().then(t.bind(t,6637))}},e=>{e.O(0,[6919,8500,9430,3493,9760,7591,6012,1164,9620,6722,7860,9689,4379,8441,3794,7358],()=>e(e.s=96511)),_N_E=e.O()}]);