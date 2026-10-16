(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2742],{42479:(e,s,a)=>{"use strict";a.d(s,{LakebaseDeepDivePage:()=>R});var t=a(95155),r=a(98500),n=a.n(r),o=a(58381),i=a(87069),c=a(75041),d=a(27774),l=a(60508),p=a(92194),h=a(19776),m=a(49345),b=a(85757),u=a(20528),x=a(62125),g=a(83036),y=a(15573),f=a(93219),v=a(69260),w=a(439),k=a(1407),j=a(31025),N=a(44071),P=a(86901);let L=[{label:"LBM lifecycle states",value:"6",hint:"create → active → suspend → wake → failover → delete",deltaTone:"flat"},{label:"RTO target",value:"<30s",hint:"primary failure → standby promoted",deltaTone:"flat"},{label:"RPO target",value:"<1s",hint:"synchronous WAL replication",deltaTone:"flat"},{label:"Branch create",value:"<500msONG",hint:"copy-on-write snapshot branching (Neon-style)",deltaTone:"flat"}],S=[{name:"create",color:"text-violet-400",desc:"LBM provisions VM, attaches S3 storage, runs initdb. ~2-5 min cold start, <30s warm-start from snapshot."},{name:"active",color:"text-emerald-400",desc:"Database is serving traffic. WAL streamed to S3 + standby. Health checks every 5s."},{name:"suspended",color:"text-amber-400",desc:"VM paused, storage retained. ~$0.05/hr storage cost (vs $1-2/hr active). Wake-up <30s."},{name:"wake",color:"text-sky-400",desc:"Resume from suspended — VM unpauses, replays WAL since suspension, opens connections. No data loss."},{name:"failover",color:"text-rose-400",desc:"Primary failed — promote hot standby. Proxy redirects. New standby spawned. Client sees <30s disconnect."},{name:"delete",color:"text-zinc-400",desc:"Final snapshot to long-term S3, then VM terminated + S3 prefix tombstoned. Snapshot retained per policy."}],T=`// ============================================================
// Lakebase Manager (LBM) — control plane interface
// The "brain" of Lakebase: owns database lifecycle, failover, snapshots.
// ============================================================

interface ILakebaseManager {
  // 1. Lifecycle (create → active → suspend → wake → delete)
  createDatabase(config: DBConfig): Promise<DatabaseHandle>;
  deleteDatabase(id: string, opts?: { snapshot?: boolean }): Promise<void>;
  wakeUp(id: string): Promise<DatabaseHandle>;
  suspend(id: string): Promise<void>;

  // 2. High availability
  failover(id: string, toReplica: string): Promise<DatabaseHandle>;
  promoteStandby(standbyId: string): Promise<DatabaseHandle>;
  spawnStandby(primaryId: string, az: string): Promise<StandbyHandle>;

  // 3. Snapshots + branching (Neon-style copy-on-write)
  createSnapshot(id: string, name: string): Promise<SnapshotHandle>;
  branchFromSnapshot(snapshotId: string, name: string): Promise<DatabaseHandle>;
  listSnapshots(id: string): Promise<SnapshotHandle[]>;
  restoreFromSnapshot(id: string, snapshotId: string): Promise<DatabaseHandle>;

  // 4. Health + observability
  getHealth(id: string): Promise<HealthStatus>;
  getMetrics(id: string): Promise<DatabaseMetrics>;
  listDatabases(filter?: { status?: string; owner?: string }): Promise<DatabaseHandle[]>;

  // 5. Cost + governance
  tagDatabase(id: string, tags: Record<string, string>): Promise<void>;
  getCostEstimate(id: string, window: TimeWindow): Promise<CostEstimate>;
}

// HealthStatus: 'healthy' | 'degraded' | 'unhealthy' | 'failed'
// DatabaseMetrics: connections, qps, replicationLagMs, storageUsedGB,
//                  iops, cpuPct, memPct, errorRate`,A=`// ============================================================
// Lakebase Proxy — data plane / network edge
// Every client connection goes through the proxy. Routes by protocol,
// load-balances across replicas, terminates SSL, enforces auth.
// ============================================================

interface ILakebaseProxy {
  // 1. Connection routing (the data path)
  route(connection: ClientConnection): Promise<BackendHandle>;
  routeByProtocol(conn: ClientConnection): Promise<BackendHandle> {
    switch (conn.protocol) {
      case 'postgres':  return this.routePostgres(conn);
      case 'http':      return this.routeHttp(conn);
      case 'websocket': return this.routeWebSocket(conn);
      case 'data-api':  return this.routeDataApi(conn);
    }
  }

  // 2. Authentication + RBAC
  authenticate(token: string): Promise<{ valid: boolean; userId?: string; scopes?: string[] }>;
  authorize(userId: string, action: string, resource: string): Promise<boolean>;

  // 3. Load balancing + read/write splitting
  balanceLoad(requests: ClientConnection[]): BackendHandle[];
  routeRead(conn: ClientConnection): Promise<BackendHandle>;  // → read replica
  routeWrite(conn: ClientConnection): Promise<BackendHandle>; // → primary

  // 4. SSL/TLS termination
  terminateTLS(rawSocket: net.Socket): Promise<TLSSocket>;
  // Cert is per-database (managed by LBM), rotates every 90 days via ACME

  // 5. Metrics (exported to Prometheus)
  getMetrics(): Promise<ProxyMetrics>;
  // ProxyMetrics: activeConnections, bytesTransferred, queriesPerSecond,
  //   avgLatencyMs, p99LatencyMs, errorRate, tlsHandshakesPerSec
}`,M=`# ============================================================
# Lakebase HA Failover — multi-AZ, RPO<1s, RTO<30s
# Triggered when primary health check fails for 3 consecutive checks
# (15 seconds total — avoids false-positive failovers).
# ============================================================

# Timeline of a failover event:
T+0s   primary health check FAILS (3rd consecutive miss)
T+1s   LBM declares primary unhealthy
T+1s   LBM promotes hot standby → new primary
       - Standby was already receiving synchronous WAL
       - Promotion = flip 'primary' flag + open write path
T+2s   LBM notifies proxy via WebSocket (push, not poll)
T+2s   Proxy updates routing table — new connections → new primary
T+3s   Proxy actively redirects existing connections (RST + retry hint)
T+5s   New primary: verified healthy + serving writes
T+5s   LBM spawns NEW hot standby in different AZ (replace promoted)
T+25s  New hot standby: WAL synced, ready for next failover
T+30s  System fully recovered (RTO<30s target met)

# RPO guarantee:
# - Synchronous WAL replication: every commit is acked by primary
#   AND by hot standby before client receives 'COMMITTED'.
# - If primary fails between WAL writes: standby has all committed data.
# - Worst case RPO: 0 (no data loss) for synchronous, <1s for async.

# Multi-AZ topology:
#  primary  (us-east-1a)  ←── synchronous WAL ──→  standby (us-east-1b)
#                                                              │
#                                                              └── async WAL → warm standby (us-west-2)`,_=`# ============================================================
# Lakebase Branching — Neon-style copy-on-write snapshots
# Branch from a snapshot in <500ms — no full data copy.
# ============================================================

import time
from dataclasses import dataclass

@dataclass
class Snapshot:
    snap_id: str
    parent_db: str
    created_at: float
    s3_prefix: str  # path to snapshot data in S3
    size_gb: float

@dataclass
class Database:
    db_id: str
    name: str
    parent_snap: str | None  # if branched, the snapshot it came from
    s3_prefix: str
    status: str  # 'creating' | 'active' | 'suspended'

class LakebaseManager:
    def __init__(self, s3_client):
        self.s3 = s3_client
        self.dbs: dict[str, Database] = {}

    def create_snapshot(self, db_id: str, name: str) -> Snapshot:
        """Snapshot a database — no data copy, just metadata."""
        # Real implementation: S3 PUT to copy-on-write marker
        # The 'snapshot' is just a reference to the current WAL LSN
        snap = Snapshot(
            snap_id=f"snap_{int(time.time()*1000)}",
            parent_db=db_id,
            created_at=time.time(),
            s3_prefix=f"s3://lakebase/{db_id}/snapshots/{name}/",
            size_gb=self.dbs[db_id].size_gb,
        )
        # Copy-on-write: snapshot shares data files with parent
        # Only NEW writes after the snapshot create new S3 objects
        return snap

    def branch_from_snapshot(self, snap_id: str, name: str) -> Database:
        """Branch a new database from a snapshot — <500ms."""
        # 1. Look up snapshot
        snap = self._find_snapshot(snap_id)
        # 2. Create new DB that shares S3 prefix with snapshot (copy-on-write)
        new_db = Database(
            db_id=f"db_{int(time.time()*1000)}",
            name=name,
            parent_snap=snap_id,
            s3_prefix=snap.s3_prefix,  # SAME prefix — shares data!
            status='creating',
        )
        # 3. Provision VM, attach to S3 prefix, run initdb (recover from WAL)
        # Real implementation: spawn EC2, mount S3, run 'postgres --recover'
        # Time: <500ms (no data copy, just metadata + VM spawn from AMI)
        new_db.status = 'active'
        self.dbs[new_db.db_id] = new_db
        return new_db

# Demo: branch a production database for development
lbm = LakebaseManager(s3_client=None)
lbm.dbs['db_prod_01'] = Database('db_prod_01', 'production', None, 's3://lakebase/db_prod_01/', 'active')
lbm.dbs['db_prod_01'].size_gb = 500  # 500GB production database

t0 = time.time()
snap = lbm.create_snapshot('db_prod_01', 'pre-release-2024-10')
branch = lbm.branch_from_snapshot(snap.snap_id, 'dev-branch')
t1 = time.time()

print(f"Snapshot creation: {t1-t0:.3f}s")
print(f"Branched database: {branch.db_id} ({branch.status})")
print(f"Parent snapshot: {branch.parent_snap}")
print(f"S3 prefix: {branch.s3_prefix} (shared with snapshot — copy-on-write)")
print(f"Storage cost of branch: ~0 GB (only new writes create new S3 objects)")`,D=`┌─────────────────────────────────────────────────────────────┐
│                   Lakebase Multi-AZ Topology                 │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  us-east-1a (primary)                                        │
│  ┌──────────────────────┐                                    │
│  │ Postgres primary VM  │                                    │
│  │ - WAL source         │◄────── client writes (via proxy)   │
│  │ - Synchronous WAL    │                                    │
│  └──────────┬───────────┘                                    │
│             │                                                │
│             │ synchronous WAL replication (RPO<1s)         │
│             ▼                                                │
│  us-east-1b (hot standby)                                    │
│  ┌──────────────────────┐                                    │
│  │ Postgres standby VM  │                                    │
│  │ - WAL receiver       │────── client reads (load split)   │
│  │ - Promotable         │                                    │
│  └──────────┬───────────┘                                    │
│             │                                                │
│             │ async WAL replication (RPO<60s, DR)           │
│             ▼                                                │
│  us-west-2 (warm standby / DR)                              │
│  ┌──────────────────────┐                                    │
│  │ Postgres warm standby│                                    │
│  │ - Async WAL          │                                    │
│  │ - Cross-region DR    │                                    │
│  └──────────────────────┘                                    │
│                                                              │
└─────────────────────────────────────────────────────────────┘

S3 Storage (shared):
  - WAL segments: s3://lakebase/{db_id}/wal/*.seg  (1GB files)
  - Data files:   s3://lakebase/{db_id}/data/*.parquet  (copy-on-write)
  - Snapshots:    s3://lakebase/{db_id}/snapshots/{name}/  (metadata only)`;function R(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.zY,{eyebrow:"Phase 27 \xb7 Lakebase Deep Dive \xb7 control plane + proxy + HA + branching",title:"Lakebase Deep Dive — control plane, proxy, HA failover, branching",description:"Real deep-dive into Lakebase architecture, replacing the placeholder StubLakebaseManager/StubLakebaseProxy interfaces on /infrastructure/. Covers LBM lifecycle (create → active → suspend → wake → failover → delete), Lakebase Proxy data plane (Postgres/HTTP/WebSocket routing + SSL + read/write splitting), multi-AZ HA (RPO<1s, RTO<30s), and Neon-style copy-on-write branching. The Databricks-managed Postgres-on-S3 alternative."}),(0,t.jsx)("div",{className:"grid gap-4 md:grid-cols-2 lg:grid-cols-4",children:L.map(e=>(0,t.jsxs)("div",{className:"rounded-xl border border-zinc-200/20 bg-zinc-900/60 p-4 backdrop-blur",children:[(0,t.jsx)("p",{className:"text-[10px] uppercase tracking-wider text-zinc-500 font-medium",children:e.label}),(0,t.jsx)("p",{className:"text-2xl font-bold text-zinc-100 mt-1",children:e.value}),(0,t.jsx)("p",{className:"text-[11px] text-zinc-400 mt-0.5",children:e.hint})]},e.label))}),(0,t.jsxs)(o.iv,{title:"Lakebase Manager (LBM) — control plane",description:"The 'brain' of Lakebase. Owns database lifecycle (create, suspend, wake, failover, delete), snapshots, branching, and cross-AZ replication setup. LBM is a control-plane service — it never touches the data path; it manages VMs + metadata.",icon:(0,t.jsx)(y.A,{className:"h-5 w-5"}),badge:"Control Plane",children:[(0,t.jsxs)("div",{className:"prose prose-sm dark:prose-invert max-w-none space-y-3",children:[(0,t.jsxs)("p",{className:"text-sm text-muted-foreground leading-relaxed",children:[(0,t.jsx)("strong",{className:"text-foreground/80",children:"LBM"})," is the control plane: it provisions VMs, attaches them to S3 storage prefixes, runs Postgres initdb (or recover from snapshot), and manages lifecycle state. It does NOT route data — that's the Lakebase Proxy. The split is the standard control-plane/data-plane separation: LBM manages state (slow, metadata-heavy), Proxy forwards bytes (fast, stateless)."]}),(0,t.jsxs)("p",{className:"text-sm text-muted-foreground leading-relaxed",children:[(0,t.jsx)("strong",{className:"text-foreground/80",children:"VM lifecycle"})," uses pre-warmed AMIs (Amazon Machine Images) with Postgres + lakebase-agent pre-installed. Cold start from AMI: 2-5 minutes. Warm start from snapshot: <30 seconds. Suspended state: VM paused but storage retained — wake-up is just unpausing the VM (no initdb, no recovery). The pre-warmed pool keeps 3-5 standby VMs ready for instant wake-up."]})]}),(0,t.jsx)("div",{className:"mt-4",children:(0,t.jsx)(h.N,{code:T,language:"typescript",filename:"lakebase-manager.ts"})})]}),(0,t.jsx)(o.iv,{title:"Database lifecycle — 6 states, atomic transitions",description:"Every Lakebase database moves through these 6 states. Each transition is atomic and recoverable — LBM writes state changes to its own metadata table before performing the action, so a crash mid-transition is recoverable on restart.",icon:(0,t.jsx)(f.A,{className:"h-5 w-5"}),children:(0,t.jsx)("div",{className:"space-y-2",children:S.map(e=>(0,t.jsxs)("div",{className:"flex items-start gap-3 p-3 rounded-md border border-border/40 hover:border-primary/40 hover:bg-primary/3 transition-colors",children:[(0,t.jsx)("div",{className:`font-mono text-xs font-bold ${e.color} w-20 shrink-0`,children:e.name}),(0,t.jsx)("p",{className:"text-xs text-muted-foreground leading-relaxed",children:e.desc})]},e.name))})}),(0,t.jsxs)(o.iv,{title:"Lakebase Proxy — data plane / network edge",description:"Every client connection goes through the proxy. Routes by protocol (Postgres/HTTP/WebSocket/Data API), load-balances across replicas, terminates SSL, enforces auth + RBAC. Stateless — scales horizontally.",icon:(0,t.jsx)(v.A,{className:"h-5 w-5"}),badge:"Data Plane",children:[(0,t.jsxs)("div",{className:"prose prose-sm dark:prose-invert max-w-none space-y-3",children:[(0,t.jsxs)("p",{className:"text-sm text-muted-foreground leading-relaxed",children:[(0,t.jsx)("strong",{className:"text-foreground/80",children:"The proxy"})," is the network edge: it accepts client connections (Postgres wire protocol on 5432, HTTP/WebSocket on 443, Data API on /v1/data), terminates TLS, authenticates the JWT/API token, and routes the connection to the right backend (primary for writes, read replica for reads). The proxy is",(0,t.jsx)("strong",{className:"text-foreground/80",children:" stateless"})," — it holds no per-connection state beyond the open socket, so it scales horizontally by adding more proxy instances behind a network load balancer."]}),(0,t.jsxs)("p",{className:"text-sm text-muted-foreground leading-relaxed",children:[(0,t.jsx)("strong",{className:"text-foreground/80",children:"Read/write splitting"})," is the key optimization: Postgres wire protocol doesn't distinguish reads from writes at the protocol level, but the proxy can sniff the first packet (a SELECT vs INSERT/UPDATE/DELETE) and route accordingly. Writes go to the primary (synchronous WAL replication ensures consistency). Reads go to read replicas (eventual consistency, but ~10\xd7 higher throughput for read-heavy workloads)."]})]}),(0,t.jsx)("div",{className:"mt-4",children:(0,t.jsx)(h.N,{code:A,language:"typescript",filename:"lakebase-proxy.ts"})})]}),(0,t.jsxs)(o.iv,{title:"HA Failover — multi-AZ, RPO<1s, RTO<30s",description:"When the primary fails, LBM promotes the hot standby. The proxy redirects connections. Target: Recovery Time Objective <30s, Recovery Point Objective <1s (synchronous WAL replication means zero data loss for committed transactions).",icon:(0,t.jsx)(w.A,{className:"h-5 w-5"}),children:[(0,t.jsxs)("div",{className:"prose prose-sm dark:prose-invert max-w-none space-y-3",children:[(0,t.jsxs)("p",{className:"text-sm text-muted-foreground leading-relaxed",children:[(0,t.jsx)("strong",{className:"text-foreground/80",children:"Three replicas in three AZs:"}),' primary (writes), hot standby (synchronous WAL, promotable in <1s), warm standby (async WAL, cross-region DR). Synchronous WAL means every COMMIT is acked by both primary AND hot standby before the client receives "committed" — so a primary failure cannot lose committed data. RPO is effectively 0 for synchronous, <1s for the rare case where async is in flight.']}),(0,t.jsxs)("p",{className:"text-sm text-muted-foreground leading-relaxed",children:[(0,t.jsx)("strong",{className:"text-foreground/80",children:"Failover timeline"}),": T+0s health check fails (3rd consecutive miss = 15s) → T+1s LBM declares unhealthy → T+2s LBM promotes hot standby (flip primary flag, open write path) → T+2s proxy notified via WebSocket push → T+3s existing connections get RST+retry → T+5s new primary verified healthy → T+25s new hot standby spawned (replace promoted) → T+30s system fully recovered."]})]}),(0,t.jsx)("div",{className:"mt-4",children:(0,t.jsx)(h.N,{code:M,language:"bash",filename:"failover_timeline.sh"})})]}),(0,t.jsx)(o.iv,{title:"Multi-AZ topology — primary + hot standby + warm DR",description:"Three replicas in three AZs (or three regions for full DR). Synchronous WAL between primary and hot standby (RPO<1s). Async WAL to warm standby (cross-region DR, RPO<60s).",icon:(0,t.jsx)(k.A,{className:"h-5 w-5"}),children:(0,t.jsx)("pre",{className:"rounded-md border border-border/40 bg-muted/20 p-3 text-[10px] font-mono text-muted-foreground overflow-x-auto",children:D})}),(0,t.jsxs)(o.iv,{title:"Branching — Neon-style copy-on-write snapshots",description:"Branch a new database from a snapshot in <500ms — no full data copy. The branch shares S3 data with the parent; only new writes create new S3 objects. Perfect for dev/test environments that need production-scale data.",icon:(0,t.jsx)(j.A,{className:"h-5 w-5"}),children:[(0,t.jsxs)("div",{className:"prose prose-sm dark:prose-invert max-w-none space-y-3",children:[(0,t.jsxs)("p",{className:"text-sm text-muted-foreground leading-relaxed",children:[(0,t.jsx)("strong",{className:"text-foreground/80",children:"Neon-style branching"})," is the killer feature of modern serverless Postgres (Neon, Supabase, and now Lakebase). The branch shares the S3 data prefix with its parent snapshot — both databases read the same Parquet/WAL files. When the branch writes, it creates new S3 objects (copy-on-write semantics) — only the changed blocks cost additional storage. A 500GB production database can be branched in <500ms with effectively zero additional storage cost (only deltas)."]}),(0,t.jsxs)("p",{className:"text-sm text-muted-foreground leading-relaxed",children:[(0,t.jsx)("strong",{className:"text-foreground/80",children:"Use cases:"})," (1) Preview environments — each PR gets its own database branch with production-scale data, torn down on merge. (2) Database CI/CD — schema migrations tested against a real data shape, not synthetic. (3) Analytics — branch a production OLTP database, run heavy analytical queries on the branch without impacting production. (4) Recovery — branch from yesterday's snapshot to recover deleted rows without restoring the whole database."]})]}),(0,t.jsx)("div",{className:"mt-4",children:(0,t.jsx)(h.N,{code:_,language:"python",filename:"lakebase_branching.py"})})]}),(0,t.jsx)(o.iv,{title:"Cost optimization — suspend, snapshot, branch instead of clone",description:"Three cost tiers: active (~$1-2/hr), suspended (~$0.05/hr storage only), snapshot (~$0.023/hr S3 Glacier). Branch dev environments off snapshots — no full-data copy.",icon:(0,t.jsx)(N.A,{className:"h-5 w-5"}),badge:"FinOps",children:(0,t.jsx)("div",{className:"overflow-x-auto",children:(0,t.jsxs)("table",{className:"w-full text-xs",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{className:"border-b border-border/60 text-[10px] uppercase tracking-wider text-muted-foreground",children:[(0,t.jsx)("th",{className:"text-left px-3 py-2 font-medium",children:"State"}),(0,t.jsx)("th",{className:"text-left px-3 py-2 font-medium",children:"Cost (per hour)"}),(0,t.jsx)("th",{className:"text-left px-3 py-2 font-medium",children:"Wake-up time"}),(0,t.jsx)("th",{className:"text-left px-3 py-2 font-medium",children:"Use case"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{className:"border-b border-border/20",children:[(0,t.jsx)("td",{className:"px-3 py-2 font-mono text-emerald-400",children:"active"}),(0,t.jsx)("td",{className:"px-3 py-2 text-zinc-300",children:"$1-2/hr (compute + storage)"}),(0,t.jsx)("td",{className:"px-3 py-2 text-zinc-400",children:"— (already running)"}),(0,t.jsx)("td",{className:"px-3 py-2 text-zinc-400",children:"production, hot path"})]}),(0,t.jsxs)("tr",{className:"border-b border-border/20",children:[(0,t.jsx)("td",{className:"px-3 py-2 font-mono text-amber-400",children:"suspended"}),(0,t.jsx)("td",{className:"px-3 py-2 text-zinc-300",children:"$0.05/hr (storage only)"}),(0,t.jsx)("td",{className:"px-3 py-2 text-zinc-400",children:"<30s (warm start)"}),(0,t.jsx)("td",{className:"px-3 py-2 text-zinc-400",children:"dev/test, off-hours"})]}),(0,t.jsxs)("tr",{className:"border-b border-border/20",children:[(0,t.jsx)("td",{className:"px-3 py-2 font-mono text-sky-400",children:"snapshot"}),(0,t.jsx)("td",{className:"px-3 py-2 text-zinc-300",children:"$0.023/hr (S3 Glacier)"}),(0,t.jsx)("td",{className:"px-3 py-2 text-zinc-400",children:"2-5 min (cold start)"}),(0,t.jsx)("td",{className:"px-3 py-2 text-zinc-400",children:"backup, audit, branch source"})]}),(0,t.jsxs)("tr",{className:"border-b border-border/20",children:[(0,t.jsx)("td",{className:"px-3 py-2 font-mono text-violet-400",children:"branch (COW)"}),(0,t.jsx)("td",{className:"px-3 py-2 text-zinc-300",children:"~$0 (only new writes)"}),(0,t.jsx)("td",{className:"px-3 py-2 text-zinc-400",children:"<500ms (metadata only)"}),(0,t.jsx)("td",{className:"px-3 py-2 text-zinc-400",children:"preview env, dev branch"})]}),(0,t.jsxs)("tr",{className:"border-b border-border/20",children:[(0,t.jsx)("td",{className:"px-3 py-2 font-mono text-zinc-400",children:"deleted"}),(0,t.jsx)("td",{className:"px-3 py-2 text-zinc-300",children:"$0 (snapshot retained per policy)"}),(0,t.jsx)("td",{className:"px-3 py-2 text-zinc-400",children:"N/A — restore from snapshot"}),(0,t.jsx)("td",{className:"px-3 py-2 text-zinc-400",children:"end-of-life, audit retention"})]})]})]})})}),(0,t.jsxs)(o.iv,{title:"Phase 27 popup demos — interactive Lakebase failover",description:"Two interactive visualizers that complement the Lakebase deep-dive: HA failover timeline simulator (trigger a primary failure, watch the 11-step failover unfold) and FinOps cost anomaly detector (cloud spend monitoring).",icon:(0,t.jsx)(P.A,{className:"h-5 w-5"}),badge:"Interactive",children:[(0,t.jsxs)("div",{className:"space-y-3 text-sm text-muted-foreground leading-relaxed",children:[(0,t.jsxs)("p",{children:[(0,t.jsx)("strong",{className:"text-foreground/80",children:"Lakebase Failover Simulator"})," — pick a failure mode (VM crash / AZ outage / network partition) and trigger failover. Watch the 11-step timeline unfold: T+0s health check fails (3rd consecutive miss = 15s) → T+1s LBM declares unhealthy → T+2s promote hot standby → T+3s proxy redirects → T+5s new primary verified → T+25s new standby spawned → T+30s system recovered (RTO<30s for VM crash, <5min for AZ outage). No data loss for committed transactions (RPO<1s via synchronous WAL)."]}),(0,t.jsxs)("p",{children:[(0,t.jsx)("strong",{className:"text-foreground/80",children:"FinOps Cost Anomaly Detector"})," — scans 30 days of cloud spend, detects anomalies via z-score against 7-day rolling window. Color-coded bars (green=normal, amber=drift, red=spike). Watch for the day-25 spike (PAGE — z>2.5σ) and the gradual drift on days 5-10 (TICKET — sustained z>1.5σ). Combined with multi-burn-rate alerting (Google SRE pattern) for production deployment."]})]}),(0,t.jsx)(u.v,{})]}),(0,t.jsxs)(o.iv,{title:"Embedded ConceptCards — platform infrastructure primitives (click to expand)",description:"Each card is the full 5-layer ConceptCard. Click header to expand: Math → Code → Tools → Analysis → Interactive demo → Viz.",icon:(0,t.jsx)(P.A,{className:"h-5 w-5"}),badge:"3 ConceptCards",contentClassName:"p-4 md:p-5 space-y-4",children:[(0,t.jsx)(i.j,{spec:c.Ny}),(0,t.jsx)(i.j,{spec:c.w6}),(0,t.jsx)(i.j,{spec:c.T4})]}),(0,t.jsxs)(o.iv,{title:"Phase 34 popup demos — visualizers for the 2 DeeperThoughts below",description:"Two interactive demos that make the abstract insights concrete: 'Lakebase = Neon on AWS' (side-by-side architecture) + 'control-plane/data-plane split is universal' (5-vendor pattern showcase).",icon:(0,t.jsx)(P.A,{className:"h-5 w-5"}),badge:"DeeperThought demos",children:[(0,t.jsx)("div",{className:"space-y-3 text-sm text-muted-foreground leading-relaxed",children:(0,t.jsxs)("p",{children:[(0,t.jsx)("strong",{className:"text-foreground/80",children:"Why these demos:"})," the two DeeperThoughts below are the most forward-looking insights on this page. Visualization makes them concrete: the Neon-vs-Lakebase architecture diagram shows the parallel deployment layers; the 5-vendor control-plane/data-plane toggle shows the universal pattern."]})}),(0,t.jsx)(x.Ej,{})]}),(0,t.jsxs)(g.S,{pageTitle:"Lakebase Deep Dive",children:[(0,t.jsx)(g.P,{title:"Lakebase IS Neon on AWS — with Databricks governance + Unity Catalog",connectedTo:"ADR-001 (platform architecture)",children:(0,t.jsx)("p",{children:"Lakebase is structurally Neon (serverless Postgres with branching + copy-on-write snapshots) running on AWS, integrated with Databricks governance (Unity Catalog tags, RBAC, audit). The branching math is the same: S_N + delta_N where delta is only the new S3 objects written since the branch point. The control-plane/data-plane split is the same: LBM manages metadata (slow, stateful), Proxy forwards bytes (fast, stateless). What Databricks adds on top: (1) Unity Catalog for cross-table RBAC + tags (Neon doesn't have this), (2) MLflow integration for ML feature serving from Postgres, (3) Photon-style vectorized query acceleration on hot paths. Neon won the open-source serverless-Postgres battle; Lakebase is the Databricks enterprise wrapper around the same primitives."})}),(0,t.jsx)(g.P,{title:"The control-plane / data-plane split IS the universal cloud-native pattern",connectedTo:"ADR-022 (pgvector for variant embeddings)",children:(0,t.jsx)("p",{children:"LBM + Proxy follows the universal cloud-native pattern: control plane (slow, stateful, metadata) separated from data plane (fast, stateless, byte forwarding). AWS RDS does this (control plane = RDS API, data plane = RDS proxy). Snowflake does this (control plane = cloud services layer, data plane = compute warehouses). Databricks does this (control plane = workspace + Unity, data plane = clusters + Photon). Kubernetes does this (control plane = API server + etcd, data plane = kubelets + containers). Lakebase is just one more instance: LBM = control plane (manages VM lifecycle, snapshots, branching metadata), Proxy = data plane (forwards Postgres/HTTP bytes). The split is the architectural invariant; the substrate (Postgres on EC2 vs containers on EKS vs Spark on EMR) is the variable. The math IS the same — only the productization differs."})})]}),(0,t.jsx)(m.a,{topics:[{id:"infrastructure",reason:"Placeholder LBM/Proxy interfaces — this deep-dive replaces them"},{id:"data-platform",reason:"DuckDB SQL playground + connector architecture (Phase 15 sibling)"},{id:"multi-region-failover",reason:"Phase 18: surviving region-level failures (DR patterns)"},{id:"databricks-lakehouse",reason:"Databricks Lakehouse — the lakehouse LBM sits beneath"},{id:"delta-lake",reason:"Delta _delta_log/ — analogous to LBM's metadata table"},{id:"postmortems",reason:"Phase 19: Mountain-View Postgres outage (HA failover case study)"},{id:"runbook",reason:"Phase 21: per-service runbooks (Bronze Kafka, Snowflake, vLLM, MLflow, DuckDB)"}]}),(0,t.jsx)(l.R,{pageId:"lakebase-deep-dive"}),(0,t.jsx)(p.B,{pageId:"lakebase-deep-dive"}),(0,t.jsx)(d.T,{relatedPages:[{id:"infrastructure",reason:"Start with the placeholder interfaces this deep-dive replaces"},{id:"multi-region-failover",reason:"Phase 18: HA patterns and region-level DR"},{id:"finops-platform",reason:"Phase 27 sibling: cloud cost monitoring for data platforms"}]}),(0,t.jsxs)("div",{className:"flex flex-wrap gap-2",children:[(0,t.jsx)(n(),{href:(0,b.ZJ)("infrastructure"),className:"text-sm text-primary hover:underline",children:"→ Infrastructure (placeholder interfaces this deep-dive replaces)"}),(0,t.jsx)("span",{className:"text-muted-foreground",children:"\xb7"}),(0,t.jsx)(n(),{href:(0,b.ZJ)("multi-region-failover"),className:"text-sm text-primary hover:underline",children:"→ Multi-region failover (Phase 18)"}),(0,t.jsx)("span",{className:"text-muted-foreground",children:"\xb7"}),(0,t.jsx)(n(),{href:(0,b.ZJ)("finops-platform"),className:"text-sm text-primary hover:underline",children:"→ FinOps for data platforms (Phase 27 sibling)"})]})]})}},62017:(e,s,a)=>{Promise.resolve().then(a.bind(a,42479))}},e=>{e.O(0,[6919,8500,9430,3493,9760,7591,6012,9237,4843,8656,860,9620,6722,5404,9275,2194,663,7069,5041,1059,8147,8441,3794,7358],()=>e(e.s=62017)),_N_E=e.O()}]);