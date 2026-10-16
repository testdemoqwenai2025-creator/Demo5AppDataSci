(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8014],{19776:(e,t,a)=>{"use strict";a.d(t,{N:()=>d,R:()=>l});var r=a(95155),s=a(12115),i=a(94514),n=a(67635),o=a(89239);function d({code:e,language:t="sql",filename:a,highlight:d=[]}){let[l,p]=(0,s.useState)(!1),c=e.replace(/\n$/,"").split("\n"),h=async()=>{try{await navigator.clipboard.writeText(e),p(!0),setTimeout(()=>p(!1),1500)}catch{}};return(0,r.jsxs)("div",{className:"rounded-md border border-border/60 bg-[oklch(0.16_0.005_240)] text-[oklch(0.97_0.005_60)] overflow-hidden",children:[(0,r.jsxs)("div",{className:"flex items-center justify-between px-3 py-1.5 border-b border-white/10 bg-white/5",children:[(0,r.jsxs)("div",{className:"flex items-center gap-2 text-[11px] text-white/60 font-mono",children:[(0,r.jsx)("span",{className:"h-2 w-2 rounded-full bg-rose-400"}),(0,r.jsx)("span",{className:"h-2 w-2 rounded-full bg-amber-400"}),(0,r.jsx)("span",{className:"h-2 w-2 rounded-full bg-emerald-400"}),(0,r.jsx)("span",{className:"ml-2 uppercase tracking-wider",children:t}),a&&(0,r.jsxs)("span",{className:"text-white/40",children:["\xb7 ",a]})]}),(0,r.jsxs)(o.$,{variant:"ghost",size:"sm",className:"h-6 px-2 text-[11px] text-white/70 hover:text-white hover:bg-white/10",onClick:h,"aria-label":"Copy code",children:[l?(0,r.jsx)(i.A,{className:"h-3 w-3 mr-1"}):(0,r.jsx)(n.A,{className:"h-3 w-3 mr-1"}),l?"Copied":"Copy"]})]}),(0,r.jsx)("pre",{className:"code-scroll overflow-x-auto p-3 text-[12.5px] leading-relaxed font-mono",children:(0,r.jsx)("code",{children:c.map((e,t)=>{let a=t+1,s=d.includes(a);return(0,r.jsxs)("div",{className:["flex",s?"bg-primary/20 -mx-3 px-3 border-l-2 border-primary":""].join(" "),children:[(0,r.jsx)("span",{className:"select-none text-white/30 w-8 inline-block text-right pr-3 shrink-0",children:a}),(0,r.jsx)("span",{className:"whitespace-pre",children:e||" "})]},a)})})})]})}function l({children:e}){return(0,r.jsx)("code",{className:"rounded bg-muted px-1.5 py-0.5 text-[12px] font-mono text-foreground/90 border border-border/60",children:e})}},30089:(e,t,a)=>{"use strict";a.d(t,{MlopsTracingPage:()=>S});var r=a(95155),s=a(12115),i=a(39430),n=a(98500),o=a.n(n),d=a(58381),l=a(27774),p=a(19776),c=a(66349),h=a(85757),u=a(45160),m=a(83036),g=a(93219),x=a(53961),f=a(69260),_=a(90718),b=a(44478),v=a(10762),y=a(65576),w=a(33024),j=a(44071);let k=[{label:"Span shape",value:"(trace_id, span_id, parent_id, t, dur, attrs)",hint:"OTLP wire format — 1 span = 1 unit of work",deltaTone:"flat"},{label:"Trace",value:"DAG of spans",hint:"Tree (mostly) sharing trace_id — parent_id forms edges",deltaTone:"flat"},{label:"Critical path",value:"O(V+E)",hint:"Topo sort + DP — longest path through span DAG",deltaTone:"flat"},{label:"SLO",value:"P99(trace_duration) < T",hint:"99% of traces complete within T seconds",deltaTone:"flat"}];function T(){let[e,t]=(0,s.useState)(0);(0,s.useEffect)(()=>{let e=setInterval(()=>t(e=>(e+1)%5),1200);return()=>clearInterval(e)},[]);let a=[{id:"root",parent:null,label:"root",dur:1450,x:50,y:30,level:0},{id:"ingest",parent:"root",label:"ingest",dur:200,x:150,y:100,level:1},{id:"validate",parent:"ingest",label:"validate",dur:80,x:150,y:170,level:2},{id:"train",parent:"root",label:"train",dur:1100,x:270,y:100,level:1},{id:"ddp0",parent:"train",label:"DDP-rank0",dur:950,x:220,y:170,level:2},{id:"ddp1",parent:"train",label:"DDP-rank1",dur:950,x:270,y:170,level:2},{id:"ar0",parent:"ddp0",label:"AllReduce",dur:280,x:200,y:240,level:3},{id:"ar1",parent:"ddp1",label:"AllReduce",dur:280,x:280,y:240,level:3},{id:"eval",parent:"root",label:"evaluate",dur:130,x:360,y:100,level:1},{id:"deploy",parent:"eval",label:"deploy",dur:100,x:360,y:170,level:2}],n=new Set(["root","train","ddp0","ar0"]);return(0,r.jsxs)("div",{className:"rounded-md border border-border/60 bg-card p-4",children:[(0,r.jsx)("style",{children:`
        .td-3d { perspective: 700px; }
        .td-stage { transform: rotateX(12deg); transform-style: preserve-3d; }
      `}),(0,r.jsxs)("p",{className:"text-sm font-semibold mb-3 flex items-center gap-2",children:[(0,r.jsx)(g.A,{className:"h-4 w-4 text-primary"}),"Trace DAG + critical path",(0,r.jsx)("span",{className:"text-[10px] font-mono text-muted-foreground ml-auto",children:["1. Spans emitted","2. Build span DAG","3. Topo sort","4. DP: longest path","5. Critical path"][e]})]}),(0,r.jsx)("div",{className:"td-3d",children:(0,r.jsx)("div",{className:"td-stage",children:(0,r.jsxs)("svg",{width:"450",height:"290",viewBox:"0 0 450 290",children:[a.filter(e=>e.parent).map(t=>{let s=a.find(e=>e.id===t.parent),o=e>=4&&n.has(t.id)&&n.has(t.parent);return(0,r.jsx)(i.P.line,{x1:s.x+25,y1:s.y+10,x2:t.x+25,y2:t.y-10,stroke:o?"var(--primary)":"var(--border)",strokeWidth:o?2.5:1,initial:{opacity:0},animate:{opacity:e>=1?o?1:.5:0,strokeDasharray:e>=3&&o?"0":e>=1?"4 2":"0"}},`e-${t.id}`)}),a.map(t=>{let a=e>=4&&n.has(t.id);return(0,r.jsxs)(i.P.g,{children:[(0,r.jsx)(i.P.rect,{x:t.x,y:t.y,width:50,height:20,rx:4,fill:a?"var(--primary)":"var(--muted)",animate:{scale:0===e?0:a?1.05:1,opacity:1},transition:{duration:.4}}),(0,r.jsx)("text",{x:t.x+25,y:t.y+13,textAnchor:"middle",fontSize:9,fill:a?"var(--primary-foreground)":"var(--muted-foreground)",fontWeight:a?"bold":"normal",children:t.label}),e>=2&&(0,r.jsxs)(i.P.text,{x:t.x+25,y:t.y+32,textAnchor:"middle",fontSize:8,fill:"var(--muted-foreground)",initial:{opacity:0},animate:{opacity:1},transition:{delay:.2},children:[t.dur,"ms"]})]},t.id)})]})})}),(0,r.jsxs)("div",{className:"grid grid-cols-2 gap-2 mt-3 text-xs",children:[(0,r.jsxs)("div",{className:"rounded-md border border-border/60 p-2.5",children:[(0,r.jsx)("p",{className:"font-semibold mb-1",children:"Critical path"}),(0,r.jsxs)("p",{className:"text-muted-foreground text-[11px]",children:["root (1450) → train (1100) → ddp0 (950) → AllReduce (280) = ",(0,r.jsx)("span",{className:"font-mono font-bold",children:"1450ms total"}),". Train dominates — this is the SLI to optimise."]})]}),(0,r.jsxs)("div",{className:"rounded-md border border-border/60 p-2.5",children:[(0,r.jsx)("p",{className:"font-semibold mb-1",children:"Optimisation target"}),(0,r.jsx)("p",{className:"text-muted-foreground text-[11px]",children:"ddp0 AllReduce is 280ms out of 950ms train (29%). Moving it off the critical path (overlap with backward) saves up to 280ms."})]})]}),(0,r.jsx)("p",{className:"text-[10px] text-muted-foreground text-center mt-3",children:"Critical path = longest-duration path through span DAG. Computed via topo sort + DP: dist[v] = max(dist[u] + dur[v]) for all edges (u→v). Reveals which spans to optimise for end-to-end latency."})]})}let A=`# Distributed Tracing — span DAG, critical path, SLO (Pyodide)
# Implements: trace reconstruction, topo sort, critical path, p99 SLO check

import math, random

# ============================================================
# Span model — OTLP wire format (simplified)
# ============================================================
# span = {
#     trace_id, span_id, parent_span_id,
#     name, start_time_ns, end_time_ns,
#     attributes: {service, http.method, ml.framework, ...},
#     status: OK / ERROR
# }

# ============================================================
# Build span DAG from a list of spans
# ============================================================

def build_span_graph(spans):
    "Build adjacency list from parent->child edges."
    graph = {s["span_id"]: [] for s in spans}
    span_by_id = {s["span_id"]: s for s in spans}
    for s in spans:
        if s["parent_span_id"]:
            graph[s["parent_span_id"]].append(s["span_id"])
    return graph, span_by_id

def topo_sort(graph):
    "Kahn's algorithm: O(V+E). Returns nodes in dependency order."
    in_degree = {n: 0 for n in graph}
    for u in graph:
        for v in graph[u]:
            in_degree[v] += 1
    queue = [n for n in in_degree if in_degree[n] == 0]
    order = []
    while queue:
        u = queue.pop(0)
        order.append(u)
        for v in graph[u]:
            in_degree[v] -= 1
            if in_degree[v] == 0:
                queue.append(v)
    return order

def critical_path(spans):
    """
    Longest-duration path through span DAG.
    DP: dist[v] = dist[u] + dur[v] for edge (u->v).
    Track parent for path reconstruction.
    """
    graph, span_by_id = build_span_graph(spans)
    order = topo_sort(graph)
    dist = {n: 0 for n in graph}
    parent = {n: None for n in graph}
    for v in order:
        for u in graph:
            if v in graph[u]:
                # edge u -> v: relax
                if dist[u] + span_by_id[v]["duration_ms"] > dist[v]:
                    dist[v] = dist[u] + span_by_id[v]["duration_ms"]
                    parent[v] = u
    # Find max-distance node
    end_node = max(dist, key=dist.get)
    # Reconstruct path
    path = []
    n = end_node
    while n is not None:
        path.append(n)
        n = parent[n]
    path.reverse()
    return path, dist[end_node]

# ============================================================
# Demo trace: data pipeline → ML training → deploy
# ============================================================
trace_id = "abc123"
spans = [
    {"trace_id": trace_id, "span_id": "root",     "parent_span_id": None,    "name": "pipeline.root",     "duration_ms": 1450},
    {"trace_id": trace_id, "span_id": "ingest",   "parent_span_id": "root",  "name": "data.ingest",       "duration_ms": 200},
    {"trace_id": trace_id, "span_id": "validate", "parent_span_id": "ingest","name": "data.validate",     "duration_ms": 80},
    {"trace_id": trace_id, "span_id": "train",    "parent_span_id": "root",  "name": "ml.train",          "duration_ms": 1100},
    {"trace_id": trace_id, "span_id": "ddp0",     "parent_span_id": "train", "name": "ml.train.rank0",    "duration_ms": 950},
    {"trace_id": trace_id, "span_id": "ddp1",     "parent_span_id": "train", "name": "ml.train.rank1",    "duration_ms": 950},
    {"trace_id": trace_id, "span_id": "ar0",      "parent_span_id": "ddp0",  "name": "ml.allreduce.r0",   "duration_ms": 280},
    {"trace_id": trace_id, "span_id": "ar1",      "parent_span_id": "ddp1",  "name": "ml.allreduce.r1",   "duration_ms": 280},
    {"trace_id": trace_id, "span_id": "eval",     "parent_span_id": "root",  "name": "ml.evaluate",       "duration_ms": 130},
    {"trace_id": trace_id, "span_id": "deploy",   "parent_span_id": "eval",  "name": "ml.deploy",         "duration_ms": 100},
]

print("=" * 60)
print("Distributed Tracing — Critical Path Analysis")
print("=" * 60)

path, total_dur = critical_path(spans)
print(f"\\nTrace: {trace_id} ({len(spans)} spans)")
print(f"Critical path ({len(path)} spans): {' → '.join(path)}")
print(f"Critical path duration: {total_dur} ms")

# Span breakdown
print(f"\\nSpan durations:")
for s in spans:
    is_critical = s["span_id"] in path
    pct = (s["duration_ms"] / total_dur) * 100
    marker = " *" if is_critical else "  "
    print(f"  {marker}{s['name']:30s} {s['duration_ms']:5d} ms  ({pct:5.1f}% of trace)")

# ============================================================
# SLO check: 99% of traces should complete within 2000ms
# ============================================================
slo_target_ms = 2000
slo_status = "PASS" if total_dur < slo_target_ms else "FAIL"
burn_rate = total_dur / slo_target_ms
print(f"\\n{'=' * 60}")
print(f"SLO check (target: p99 < {slo_target_ms}ms)")
print(f"  This trace: {total_dur}ms → {slo_status}")
print(f"  Error budget burn rate: {burn_rate:.2f}x (1.0 = budget-neutral)")
print(f"  If burn > 1.0 sustained: SLO violated → page SRE")

# ============================================================
# Percentile simulation — multiple traces
# ============================================================
print(f"\\n{'=' * 60}")
print(f"Trace duration distribution (1000 simulated traces):")
random.seed(42)
durations = []
for _ in range(1000):
    # Random trace: pick a critical path length with some noise
    base = 1450
    noise = random.gauss(0, 200)  # +/- 200ms variation
    # Occasionally a slow trace (AllReduce takes longer)
    if random.random() < 0.05:
        noise += 800  # 5% of traces have +800ms (network blip)
    durations.append(max(500, base + noise))

durations.sort()
p50 = durations[500]
p95 = durations[950]
p99 = durations[990]
p999 = durations[999]

print(f"  p50:  {p50:.0f} ms")
print(f"  p95:  {p95:.0f} ms")
print(f"  p99:  {p99:.0f} ms  ← SLO threshold (target: <2000ms)")
print(f"  p999: {p999:.0f} ms  ← alert threshold")
print(f"\\n  SLO: {p99:.0f} < 2000 = {'PASS' if p99 < 2000 else 'FAIL'}")
print(f"  Burn rate: {p99 / 2000:.2f}x")

print(f"\\n{'=' * 60}")
print("KEY MATH:")
print("  - Critical path = longest path in span DAG")
print("  - Computed via Kahn's topo sort + DP relaxation: O(V+E)")
print("  - SLO: P99(trace_duration) < T  → 99% of traces complete within T")
print("  - Burn rate = observed_p99 / target  → >1.0 = SLO violation")
print("  - Error budget: (1 - 1/SLO_target) of requests can fail per quarter")
print("=" * 60)`,N=`┌─────────────────────────────────────────────────────────────────────┐
│  OPENTELEMETRY (OTLP) WIRE PROTOCOL                                      │
│                                                                            │
│  Span (one unit of work):                                                 │
│  ┌──────────────────────────────────────────────────────────────┐         │
│  │ trace_id      : 16 bytes (W3C Trace Context)                  │         │
│  │ span_id       : 8 bytes                                       │         │
│  │ parent_span_id: 8 bytes (or empty for root)                  │         │
│  │ name          : string (e.g. "ml.train.step")                │         │
│  │ start_time    : uint64 nanoseconds since epoch               │         │
│  │ end_time      : uint64 nanoseconds                           │         │
│  │ duration      : end - start (derived)                        │         │
│  │ status        : OK / ERROR / UNSET                            │         │
│  │ attributes    : map<string, Value>                            │         │
│  │   service.name      = "training-worker"                       │         │
│  │   ml.framework      = "pytorch"                               │         │
│  │   ml.model_id       = "llama-7b-lora-v3"                      │         │
│  │   ml.world_size     = 8                                       │         │
│  │   gpus.rank          = 0                                      │         │
│  │   ml.train.step      = 1234                                   │         │
│  │   ml.train.loss      = 0.4532                                 │         │
│  │   ml.allreduce_bytes = 573_000_000                            │         │
│  │ events        : [{name, ts, attrs}, ...]                      │         │
│  │ links         : [other_span_ids related]                      │         │
│  └──────────────────────────────────────────────────────────────┘         │
│                                                                            │
│  Trace (DAG of spans sharing trace_id):                                   │
│  ┌──────────────────────────────────────────────────────────────┐         │
│  │ trace_id: 16 bytes shared by all spans in a trace             │         │
│  │ Spans form a tree (mostly) via parent_span_id edges           │         │
│  │ Distributed across services — propagated via W3C headers     │         │
│  └──────────────────────────────────────────────────────────────┘         │
│                                                                            │
│  Propagation (HTTP/gRPC):                                                 │
│    traceparent: 00-<trace_id>-<span_id>-<flags>                          │
│    Example: traceparent: 00-0af7651916cd43dd8448eb211c80319c-b7ad...-01│
│                                                                            │
│  Collector pipeline:                                                      │
│    [SDK] → OTLP/gRPC → [Collector] → processors → [Exporters]            │
│                            ├── sampling                                    │
│                            ├── batch (10s / 1024 spans)                   │
│                            ├── tail-based sampling (errors + p99)          │
│                            └── attribute enrichment (add k8s.pod)         │
│                                                                            │
│  Exporters:                                                               │
│    traces  → Tempo (Grafana) / Jaeger / Datadog                            │
│    metrics → Mimir / Prometheus / InfluxDB                                 │
│    logs    → Loki / Elasticsearch / Splunk                                  │
└─────────────────────────────────────────────────────────────────────────────┘`,P=`import os
from opentelemetry import trace
from opentelemetry.sdk.trace import TracerProvider
from opentelemetry.sdk.trace.export import BatchSpanProcessor
from opentelemetry.sdk.resources import Resource, SERVICE_NAME
from opentelemetry.exporter.otlp.proto.grpc.trace_exporter import OTLPSpanExporter
from opentelemetry.trace import Status, StatusCode
import contextlib
import time

# ============================================================
# 1. Initialise OpenTelemetry — once per process
# ============================================================

def setup_telemetry(service_name: str, otlp_endpoint: str = "http://otel-collector:4317"):
    """Configure the OTel SDK to emit spans to a collector.
    
    Wire format: OTLP over gRPC (also supports HTTP).
    Sampling: 10% in production, 100% in staging (env var).
    """
    # Resource identifies this service — every span carries it
    resource = Resource.create({
        SERVICE_NAME: service_name,
        # Kubernetes metadata (auto-detected via env vars)
        "k8s.pod.name": os.environ.get("POD_NAME", "unknown"),
        "k8s.namespace": os.environ.get("POD_NAMESPACE", "default"),
        # Custom attributes for ML context
        "service.version": os.environ.get("IMAGE_TAG", "latest"),
    })
    
    provider = TracerProvider(resource=resource)
    
    # OTLP exporter — sends spans to the collector
    exporter = OTLPSpanExporter(endpoint=otlp_endpoint, insecure=True)
    
    # Batch processor — buffers spans, flushes every 5s or 1024 spans
    processor = BatchSpanProcessor(
        exporter,
        max_queue_size=8192,
        schedule_delay_millis=5000,
        max_export_batch_size=512,
    )
    provider.add_span_processor(processor)
    
    # Set as global tracer provider — every tracer shares it
    trace.set_tracer_provider(provider)
    return trace.get_tracer(service_name)

# ============================================================
# 2. Manual span creation — explicit instrumentation
# ============================================================

tracer = setup_telemetry("training-worker")

def train_step(model, batch, optimizer, step_num):
    """One training step, fully traced.
    
    Creates a parent span (train.step) and child spans for forward,
    backward, optimizer.step, and the AllReduce if DDP/FSDP.
    """
    # context manager: span starts on __enter__, ends on __exit__
    with tracer.start_as_current_span(
        "ml.train.step",
        attributes={
            "ml.framework": "pytorch",
            "ml.train.step": step_num,
            "ml.world_size": dist.get_world_size() if dist.is_initialized() else 1,
            "gpus.rank": dist.get_rank() if dist.is_initialized() else 0,
            "ml.batch_size": batch[0].shape[0],
        },
    ) as step_span:
        t0 = time.perf_counter()
        
        # Child span: forward
        with tracer.start_as_current_span("ml.train.forward") as fwd_span:
            loss = model(batch)
            fwd_span.set_attribute("ml.train.loss", float(loss.item()))
            fwd_span.set_attribute("ml.train.seq_len", batch[0].shape[1])
        
        # Child span: backward
        with tracer.start_as_current_span("ml.train.backward"):
            loss.backward()
            # DDP AllReduce happens INSIDE backward (DDP hooks fire on .grad access)
            # This makes the AllReduce visible as part of the backward span.
        
        # Child span: optimizer step
        with tracer.start_as_current_span("ml.train.optimizer_step"):
            optimizer.step()
            optimizer.zero_grad()
        
        # Record the loss as a span event (timestamped log entry)
        step_span.add_event(
            name="step_complete",
            attributes={
                "ml.train.loss": float(loss.item()),
                "ml.train.lr": optimizer.param_groups[0]["lr"],
                "duration_ms": (time.perf_counter() - t0) * 1000,
            },
        )
        
        # Mark errors (exceptions auto-record via __exit__ but we can be explicit)
        if torch.isnan(loss):
            step_span.set_status(Status(StatusCode.ERROR, "NaN loss detected"))
            step_span.set_attribute("error.type", "nan_loss")

# ============================================================
# 3. Custom AllReduce span (for distributed training)
# ============================================================

@contextlib.contextmanager
def trace_allreduce(tensor_size_bytes: int):
    """Manually wrap NCCL AllReduce in a span.
    
    Default DDP doesn't expose AllReduce as a span — we add it
    by hooking into torch.distributed's _allreduce_base.
    """
    rank = dist.get_rank() if dist.is_initialized() else 0
    with tracer.start_as_current_span(
        "ml.allreduce",
        attributes={
            "gpus.rank": rank,
            "ml.allreduce.bytes": tensor_size_bytes,
            "ml.allreduce.world_size": dist.get_world_size() if dist.is_initialized() else 1,
        },
    ) as ar_span:
        t0 = time.perf_counter()
        yield
        duration_ms = (time.perf_counter() - t0) * 1000
        # Compute achieved bandwidth (algebraic, like the distributed-training page)
        achieved_gbps = (tensor_size_bytes * 2) / (duration_ms / 1000) / 1e9  # 2x for send+recv
        ar_span.set_attribute("ml.allreduce.duration_ms", duration_ms)
        ar_span.set_attribute("ml.allreduce.achieved_gbps", achieved_gbps)

# ============================================================
# 4. Context propagation across services
# ============================================================

def call_data_pipeline(dataset_id: str):
    """HTTP call to the data pipeline service.
    
    Propagates the current trace context via W3C Trace Context headers.
    The downstream service will create child spans under this trace.
    """
    import requests
    from opentelemetry.propagate import inject
    
    headers = {"Content-Type": "application/json"}
    # inject() adds traceparent + tracestate headers from the current context
    inject(headers)
    
    # The data pipeline receives the headers, extracts the context,
    # and any spans it creates become children of THIS service's span.
    with tracer.start_as_current_span("http.client.data_pipeline") as http_span:
        http_span.set_attribute("http.method", "POST")
        http_span.set_attribute("http.url", f"http://data-pipeline/api/v1/datasets/{dataset_id}")
        response = requests.post(
            f"http://data-pipeline/api/v1/datasets/{dataset_id}",
            headers=headers,
            json={"action": "validate"},
        )
        http_span.set_attribute("http.status_code", response.status_code)
        if response.status_code != 200:
            http_span.set_status(Status(StatusCode.ERROR, f"HTTP {response.status_code}"))

# ============================================================
# 5. Critical path computation (post-hoc analysis on stored traces)
# ============================================================

import networkx as nx
from collections import deque

def compute_critical_path(spans: list[dict]) -> tuple[list[str], float]:
    """
    Critical path = longest-duration path through span DAG.
    
    Args:
        spans: list of {span_id, parent_span_id, duration_ms}
    
    Returns:
        (path of span_ids, total_duration_ms)
    
    Algorithm: O(V+E) via Kahn's topo sort + DP relaxation.
    """
    # Build graph
    span_by_id = {s["span_id"]: s for s in spans}
    children = {s["span_id"]: [] for s in spans}
    in_degree = {s["span_id"]: 0 for s in spans}
    for s in spans:
        if s["parent_span_id"] and s["parent_span_id"] in span_by_id:
            children[s["parent_span_id"]].append(s["span_id"])
            in_degree[s["span_id"]] += 1
    
    # Topo sort (Kahn)
    queue = deque([n for n in in_degree if in_degree[n] == 0])
    topo = []
    while queue:
        u = queue.popleft()
        topo.append(u)
        for v in children[u]:
            in_degree[v] -= 1
            if in_degree[v] == 0:
                queue.append(v)
    
    # DP: dist[v] = max(dist[u] + dur[v]) over parents
    dist = {n: 0.0 for n in span_by_id}
    parent = {n: None for n in span_by_id}
    for v in topo:
        for u in span_by_id:
            if v in children.get(u, []):
                candidate = dist[u] + span_by_id[v]["duration_ms"]
                if candidate > dist[v]:
                    dist[v] = candidate
                    parent[v] = u
    
    # Find max-distance node
    end_node = max(dist, key=dist.get)
    
    # Reconstruct path
    path = []
    n = end_node
    while n is not None:
        path.append(n)
        n = parent[n]
    path.reverse()
    return path, dist[end_node]

# ============================================================
# 6. SLO computation (error budget, burn rate)
# ============================================================

def slo_status(observed_p99_ms: float, target_p99_ms: float = 2000) -> dict:
    """
    Compute SLO burn rate and error budget.
    
    SLO: 99% of traces complete within target_p99_ms.
    Burn rate > 1.0 means we're consuming error budget faster than allowed.
    """
    # Burn rate = observed / target
    burn_rate = observed_p99_ms / target_p99_ms
    # Error budget = (1 - SLO_target) = 1% of traces can be slow
    # If burn_rate > 1, we're losing budget faster than it's replenished
    # At burn_rate 2.0, we exhaust a quarter's budget in 1.5 months
    return {
        "observed_p99_ms": observed_p99_ms,
        "target_p99_ms": target_p99_ms,
        "burn_rate": burn_rate,
        "status": "PASS" if burn_rate < 1.0 else "FAIL",
        "alert_threshold": burn_rate > 2.0,  # page SRE if > 2x for 1h
    }

# Sanity check
if __name__ == "__main__":
    # Test the critical path
    spans = [
        {"span_id": "root",     "parent_span_id": None,    "duration_ms": 1450},
        {"span_id": "ingest",   "parent_span_id": "root",  "duration_ms": 200},
        {"span_id": "validate", "parent_span_id": "ingest","duration_ms": 80},
        {"span_id": "train",    "parent_span_id": "root",  "duration_ms": 1100},
        {"span_id": "ddp0",     "parent_span_id": "train", "duration_ms": 950},
        {"span_id": "ar0",      "parent_span_id": "ddp0",  "duration_ms": 280},
        {"span_id": "eval",     "parent_span_id": "root",  "duration_ms": 130},
    ]
    path, total = compute_critical_path(spans)
    print(f"Critical path: {' -> '.join(path)}")
    print(f"Total duration: {total} ms")
    print(f"SLO check: {slo_status(total)}")`;function S(){return(0,r.jsxs)("div",{className:"space-y-8",children:[(0,r.jsx)(d.zY,{eyebrow:"MLOps \xb7 OpenTelemetry \xb7 distributed tracing",title:"MLOps & Tracing — Unified Observability for Data + ML",description:"The math behind distributed tracing: span DAGs (each span = (trace_id, span_id, parent_id, t, dur, attrs)), critical-path computation via Kahn's topo sort + DP relaxation (O(V+E)), SLO math (P99 < target, error budget, burn rate). With low-level PyTorch code showing OpenTelemetry instrumentation for ML training (manual spans for forward/backward/AllReduce), W3C Trace Context propagation across services, and the post-hoc critical-path + SLO analysis. Code-oriented, mathematical, scientific.",right:(0,r.jsxs)("div",{className:"flex gap-2",children:[(0,r.jsxs)(u.E,{variant:"outline",className:"gap-1.5",children:[(0,r.jsx)(g.A,{className:"h-3 w-3"})," OTel + spans"]}),(0,r.jsxs)(u.E,{variant:"outline",className:"gap-1.5",children:[(0,r.jsx)(x.A,{className:"h-3 w-3"})," Pyodide"]})]})}),(0,r.jsx)("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-3",children:k.map(e=>(0,r.jsx)(d.nO,{label:e.label,value:e.value,hint:e.hint,deltaTone:e.deltaTone},e.label))}),(0,r.jsx)(d.iv,{title:"Trace DAG with critical path — animated",description:"A trace is a DAG of spans sharing trace_id, with parent_id forming edges. The critical path is the longest-duration path through this DAG — it identifies which spans dominate end-to-end latency. Animation phases: (1) spans emitted, (2) build DAG via parent_id edges, (3) Kahn's topo sort, (4) DP relaxation dist[v]=max(dist[u]+dur[v]), (5) reconstruct longest path.",icon:(0,r.jsx)(g.A,{className:"h-5 w-5"}),badge:"3D animation",children:(0,r.jsx)(T,{})}),(0,r.jsx)(d.iv,{title:"The OTLP wire format — what a span actually contains",description:"OpenTelemetry Protocol (OTLP) is the CNCF standard wire format. A span is a typed record: trace_id (16B W3C), span_id (8B), parent_span_id (8B), start/end times in nanoseconds, status (OK/ERROR/UNSET), attributes (semantic conventions), events (timestamped logs), links (related spans). Traces propagate via W3C traceparent HTTP/gRPC header.",icon:(0,r.jsx)(f.A,{className:"h-5 w-5"}),children:(0,r.jsx)(p.N,{language:"text",filename:"otlp_protocol.txt",code:N})}),(0,r.jsx)(d.iv,{title:"Critical path — the longest-duration path through the span DAG",description:"Given a trace (DAG of spans), the critical path is the longest-duration path. It reveals which spans dominate end-to-end latency. Computed in O(V+E) via Kahn's topological sort + DP relaxation. The dist[] table tracks the longest distance to each node; reconstruct by walking parents backward.",icon:(0,r.jsx)(_.A,{className:"h-5 w-5"}),badge:"mathematics",children:(0,r.jsxs)("div",{className:"space-y-3",children:[(0,r.jsxs)("div",{className:"rounded-md border border-primary/30 bg-primary/5 p-3 text-center",children:[(0,r.jsxs)("p",{className:"font-mono text-sm text-primary",children:["dist[v] = max",(0,r.jsx)("sub",{children:"u: (u→v) ∈ E"}),"(dist[u] + dur[v])"]}),(0,r.jsx)("p",{className:"text-[11px] text-muted-foreground mt-1",children:"DP relaxation: for each edge u→v in topo order, relax v's distance with u's distance + v's duration. O(V+E)."})]}),(0,r.jsxs)("div",{className:"rounded-md border border-border/60 p-3 bg-muted/10",children:[(0,r.jsx)("p",{className:"font-mono text-xs text-foreground/90 font-semibold mb-2",children:"Algorithm (Kahn + DP):"}),(0,r.jsxs)("ol",{className:"text-xs space-y-1 ml-3 list-decimal",children:[(0,r.jsx)("li",{children:"Build adjacency list from parent_id edges"}),(0,r.jsx)("li",{children:"Compute in-degree[v] for each node v"}),(0,r.jsx)("li",{children:"Initialise queue with nodes where in_degree = 0 (roots)"}),(0,r.jsx)("li",{children:"Pop u from queue; append to topo order; decrement in_degree of u's children; enqueue any that hit 0"}),(0,r.jsx)("li",{children:"For each v in topo order, relax: dist[v] = max over parents of (dist[parent] + dur[v])"}),(0,r.jsx)("li",{children:"end_node = argmax(dist); walk parents backward to reconstruct path"})]}),(0,r.jsx)("p",{className:"text-[11px] text-muted-foreground mt-2",children:"Kahn's algorithm is O(V+E) — same complexity as BFS/DFS. For a 1000-span trace, this is microseconds — feasible to compute on every query."})]}),(0,r.jsxs)("div",{className:"rounded-md border border-border/60 p-3 bg-muted/10",children:[(0,r.jsx)("p",{className:"font-mono text-xs text-foreground/90 font-semibold mb-2",children:"Why this matters for ML:"}),(0,r.jsx)("p",{className:"text-xs text-muted-foreground",children:"In a distributed training step (DDP), the critical path usually goes: train → backward → AllReduce. The AllReduce is on the critical path because it's synchronous — every GPU waits for it. Overlapping backward with AllReduce (using torch.cuda.Stream) moves AllReduce off the critical path, saving up to 30% per step. Critical-path analysis is how this is measured in production."})]})]})}),(0,r.jsx)(d.iv,{title:"SLO math — percentiles, error budgets, burn rate",description:"Service Level Objective (SLO): 99% of traces complete within T ms. The 1% slack is the error budget. Burn rate = observed_p99 / target — if >1.0, we're consuming budget faster than replenished, alerting threshold is typically 2\xd7 for 1 hour.",icon:(0,r.jsx)(b.A,{className:"h-5 w-5"}),badge:"mathematics",children:(0,r.jsxs)("div",{className:"space-y-3",children:[(0,r.jsxs)("div",{className:"rounded-md border border-primary/30 bg-primary/5 p-3 text-center",children:[(0,r.jsxs)("p",{className:"font-mono text-sm text-primary",children:["SLO: P",(0,r.jsx)("sub",{children:"99"}),"(trace_duration) < T \xa0\xa0\xb7\xa0\xa0 Burn = observed_p99 / T"]}),(0,r.jsx)("p",{className:"text-[11px] text-muted-foreground mt-1",children:"P99 = 99th percentile of trace durations. Error budget = (1 - 0.99) \xd7 total_traces per quarter."})]}),(0,r.jsxs)("div",{className:"grid md:grid-cols-3 gap-2 text-xs",children:[(0,r.jsxs)("div",{className:"rounded-md border border-emerald-500/40 bg-emerald-500/5 p-2.5",children:[(0,r.jsx)("p",{className:"font-semibold text-sm text-emerald-600 dark:text-emerald-400 mb-1",children:"Burn < 1.0"}),(0,r.jsx)("p",{className:"text-muted-foreground text-[11px]",children:"Healthy. Error budget replenishes faster than consumed. No alerts."})]}),(0,r.jsxs)("div",{className:"rounded-md border border-amber-500/40 bg-amber-500/5 p-2.5",children:[(0,r.jsx)("p",{className:"font-semibold text-sm text-amber-600 dark:text-amber-400 mb-1",children:"1.0 ≤ Burn < 2.0"}),(0,r.jsx)("p",{className:"text-muted-foreground text-[11px]",children:"At-risk. Slack notification. Trending toward violation if sustained."})]}),(0,r.jsxs)("div",{className:"rounded-md border border-rose-500/40 bg-rose-500/5 p-2.5",children:[(0,r.jsx)("p",{className:"font-semibold text-sm text-rose-600 dark:text-rose-400 mb-1",children:"Burn ≥ 2.0 (1h)"}),(0,r.jsx)("p",{className:"text-muted-foreground text-[11px]",children:"Page SRE. Error budget being consumed 2\xd7 faster than allowed. Action required."})]})]}),(0,r.jsxs)("div",{className:"rounded-md border border-border/60 p-3 bg-muted/10",children:[(0,r.jsx)("p",{className:"font-mono text-xs text-foreground/90 font-semibold mb-2",children:"Error budget arithmetic:"}),(0,r.jsx)("p",{className:"font-mono text-xs ml-2",children:"Quarter budget = (1 - 0.99) \xd7 total_traces = 0.01 \xd7 N"}),(0,r.jsx)("p",{className:"font-mono text-xs ml-2",children:"Burn rate \xd7 time → budget consumed = burn \xd7 elapsed_time"}),(0,r.jsx)("p",{className:"font-mono text-xs ml-2",children:"At burn = 2.0 for 1 hour → 2 \xd7 1/2160 of quarter budget consumed (quarter = 2160h)"}),(0,r.jsx)("p",{className:"text-[11px] text-muted-foreground mt-2",children:"If budget consumed > 100% before quarter-end → SLO violation → freeze feature releases (Google SRE practice)."})]})]})}),(0,r.jsx)(d.iv,{title:"Try it: Critical path + SLO analysis on a real trace (Pyodide)",description:"Builds a span DAG for a data-pipeline + ML-training + deploy trace. Computes the critical path via Kahn's topo sort + DP relaxation. Reports per-span duration as % of trace. Simulates 1000 traces to compute p50/p95/p99/p999 and checks the SLO. Shows burn-rate computation.",icon:(0,r.jsx)(v.A,{className:"h-5 w-5"}),badge:"executable",children:(0,r.jsx)(c.l,{code:A,buttonLabel:"Run trace analysis (Pyodide)"})}),(0,r.jsx)(d.iv,{title:"Low-level PyTorch + OpenTelemetry — manual spans, propagation, critical path, SLO",description:"The actual production code. setup_telemetry() configures the OTel SDK with a Resource (service.name + k8s metadata), OTLPSpanExporter to the collector, BatchSpanProcessor (5s/1024 spans flush). train_step() shows manual span creation with attributes (ml.framework, ml.world_size, gpus.rank, ml.train.loss). trace_allreduce() wraps NCCL AllReduce in a span with bandwidth computation. call_data_pipeline() shows W3C Trace Context propagation via inject(). compute_critical_path() implements Kahn's topo sort + DP. slo_status() computes burn rate.",icon:(0,r.jsx)(y.A,{className:"h-5 w-5"}),badge:"low-level",children:(0,r.jsx)(p.N,{language:"python",filename:"mlops_tracing.py",highlight:[10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301],code:P})}),(0,r.jsx)(d.iv,{title:"The unified observability stack — data + ML under one trace store",description:"Before ADR-029: dual stacks (OpenLineage for data, MLflow for ML). After: one OTel pipeline — every service emits spans, the collector samples + batches + enriches, then exports to Tempo (traces), Loki (logs), Mimir (metrics). Grafana queries all three. The model-monitoring page can now trace a degradation back to the specific training run that produced the model, then to the pipeline that produced the training data.",icon:(0,r.jsx)(w.A,{className:"h-5 w-5"}),children:(0,r.jsx)(p.N,{language:"text",filename:"observability_arch.txt",code:`┌──────────────────────────────────────────────────────────────────────┐
│  UNIFIED OBSERVABILITY STACK (post ADR-029)                              │
│                                                                            │
│  PRODUCERS (each emits OTel spans):                                       │
│  ┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐       │
│  │ Airflow / Dagster│  │ Spark / DuckDB   │  │ PyTorch (DDP/FSDP)│       │
│  │ (data pipelines) │  │ (data processing)│  │ (training)       │       │
│  │ OTel auto-instr  │  │ OTel native SDK  │  │ manual spans      │       │
│  └──────────────────┘  └──────────────────┘  └──────────────────┘       │
│  ┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐       │
│  │ /api/agent-triage│  │ Model serving    │  │ GenAI pipelines  │       │
│  │ (ISR Stage 3)    │  │ (Triton/PyTorch) │  │ (RAG, diffusion) │       │
│  └──────────────────┘  └──────────────────┘  └──────────────────┘       │
│         │                  │                      │                       │
│         └──── OTLP/gRPC ──┴──────────────────────┘                      │
│                              │                                            │
│                              ▼                                            │
│                  ┌───────────────────────┐                                │
│                  │  OTel Collector        │                                │
│                  │  - receive OTLP       │                                │
│                  │  - batch (5s/1024)     │                                │
│                  │  - tail sampling       │                                │
│                  │    (errors + p99)      │                                │
│                  │  - k8s enrichment      │                                │
│                  └───────────────────────┘                                │
│                              │                                            │
│                              ▼                                            │
│         ┌────────────────────┼────────────────────┐                       │
│         ▼                    ▼                    ▼                       │
│  ┌────────────┐      ┌────────────┐      ┌────────────┐                  │
│  │   Tempo     │      │   Loki     │      │   Mimir    │                  │
│  │   (traces)  │      │   (logs)   │      │  (metrics) │                  │
│  │  30-day ret │      │ 14-day ret │      │ 90-day ret │                  │
│  └────────────┘      └────────────┘      └────────────┘                  │
│         │                    │                    │                       │
│         └────────────────────┼────────────────────┘                      │
│                              │                                            │
│                              ▼                                            │
│                    ┌────────────────┐                                    │
│                    │     Grafana     │                                    │
│                    │  - TraceQL      │                                    │
│                    │  - LogQL        │                                    │
│                    │  - PromQL       │                                    │
│                    │  - Critical path│                                    │
│                    │    plugin       │                                    │
│                    └────────────────┘                                    │
│                                                                            │
│  CORRELATION (the unification value):                                    │
│    model degrades → find training trace → find data pipeline trace        │
│    → find upstream dataset → identify drift source                        │
│                                                                            │
│  ALL OSS — no vendor lock-in (Tempo/Loki/Mimir/Grafana)                  │
└────────────────────────────────────────────────────────────────────────────┘`})}),(0,r.jsx)(d.iv,{title:"My deeper thought: traces ARE distributed backpropagation",description:"The structure of a trace (DAG of causal dependencies) is mathematically identical to the computational graph in PyTorch autograd. Critical-path analysis is the dual of backward propagation — both compute the longest path through a DAG, just for different reasons (latency vs gradient).",icon:(0,r.jsx)(j.A,{className:"h-5 w-5"}),badge:"Insight",children:(0,r.jsxs)("div",{className:"space-y-3 text-sm text-muted-foreground leading-relaxed",children:[(0,r.jsxs)("p",{children:["The structural isomorphism between an OpenTelemetry trace and a PyTorch computational graph is exact, not metaphorical. ",(0,r.jsx)("strong",{className:"text-foreground/80",children:"Both are DAGs of typed operations with parent-child edges."}),' A trace\'s spans correspond to autograd\'s nodes; parent_span_id corresponds to the gradient-input edges in autograd. The critical-path algorithm (Kahn topo sort + DP) is the same algorithm used to determine operation ordering in Just-In-Time compilers (TorchDynamo, XLA). The dist[] table that tracks "longest path to this node" in critical-path analysis is the same DP table that tracks "gradient w.r.t. this node" in chain-rule backpropagation. The recurrence dist[v] = max(dist[u] + dur[v]) is the "max" version of autograd\'s grad[v] = Σ(grad[u] \xb7 ∂v/∂u) — both propagate information backward through a DAG.']}),(0,r.jsxs)("p",{children:[(0,r.jsx)("strong",{className:"text-foreground/80",children:"This unification explains why distributed tracing and distributed training hit the same fundamental trade-offs."}),' The DDP AllReduce is on the critical path of a training trace because it\'s a synchronous barrier — every GPU waits. The analogous operation in autograd is the gradient accumulation across branches of the DAG — every consumer waits for every producer. The "overlap AllReduce with backward" optimisation (use a separate CUDA stream) is the same idea as "fused operations in autograd" (use a custom kernel) — both move work off the critical path. The roofline model (compute-bound vs comm-bound, see the comp-sci page) is the same model whether applied to GPU throughput or trace latency. The mathematics of "where is the bottleneck" is invariant to the substrate.']}),(0,r.jsxs)("p",{children:[(0,r.jsx)("strong",{className:"text-foreground/80",children:"This connects ADR-029 (OpenTelemetry) to ADR-028 (FSDP) to ADR-019 (bandit) to ADR-027 (diffusion)."}),' The bandit is a 1-step decision process — a 1-span trace. The LLM generation is a T-step autoregressive process — a chain of T spans. The diffusion reverse process is a T-step stochastic process — a chain of T spans (one per denoising step). The FSDP training loop is an N-step iterative process with per-step sub-traces (forward → AllReduce → backward → optimiser). All four are temporal DAGs, and OpenTelemetry gives a single language to describe all of them. When the model-monitoring page reports "drift detected on model X trained at T", the trace_id from T is the key that joins ML telemetry back to data telemetry back to the pipeline that produced the data. The platform\'s three loops — data engineering loop, ML training loop, model monitoring loop — become one continuous observability loop. The deeper insight: observability is to operations what autograd is to learning — both make DAGs debuggable by computing their duals.']})]})}),(0,r.jsxs)(m.S,{pageTitle:"MLOps & Tracing",children:[(0,r.jsx)(m.P,{title:"MLOps & Tracing IS part of a larger system — no page stands alone",connectedTo:"ADR-001 (platform architecture)",children:(0,r.jsx)("p",{children:"This page about MLOps & Tracing is not an isolated reference — it's a node in a graph. The platform's thesis is that the same math appears across genomics, fintech, maritime, and audio. MLOps & Tracing connects to the elegant-code cards via shared equations, and to the living-equation pages via live demos. The reader who arrives here looking for facts leaves with a map of where MLOps & Tracing sits in the computational-science landscape."})}),(0,r.jsx)(m.P,{title:"The technology will change; the math won't",connectedTo:"ADR-055 (cross-disciplinary scope)",children:(0,r.jsx)("p",{children:"In a decade, the specific tools on this page (MLOps & Tracing) may be replaced. But the underlying mathematics — the equations, the distributions, the optimisation rules — will be the same. SVD was invented in 1873 and still runs on NumPy today. Attention was described in 2017 and will run on whatever replaces PyTorch. The platform invests in the MATH, not the tools, because the math is the part that survives technology turnover."})}),(0,r.jsx)(m.P,{title:"The fold pattern respects the reader's attention",connectedTo:"ADR-050 (fold-section architecture)",children:(0,r.jsx)("p",{children:"This page has fold sections (collapsed by default) that reveal deeper content on demand — equation family comparisons, LaTeX derivations, production patterns, expected outputs, and citations. The basic content is visible immediately; the deeper phases are there when the reader is ready. Progressive disclosure isn't just UX — it's epistemological. A reader who wants the summary gets it; a reader who wants the derivation clicks to expand. Both are served by the same page."})}),(0,r.jsx)(m.P,{title:"The output IS the proof — not just the equation",connectedTo:"ADR-034 (ESM-2 + AlphaFold2 adoption)",children:(0,r.jsx)("p",{children:"Where this page has interactive demos (Pyodide + sliders + charts), the visual output IS the argument. Seeing a chart update as you drag a slider communicates the math in a way no formula can. The brain's pattern-recognition system processes the visual output faster than the verbal/analytical pathway. That's why the platform pairs every equation with a live demo — the output plays to a different level of the brain than the prose."})}),(0,r.jsx)(m.P,{title:"In a decade, this page will evolve — and that's the point",connectedTo:"ADR-022 (pgvector for variant embeddings)",children:(0,r.jsx)("p",{children:"The datasets, libraries, and tools on this page will be updated as technology evolves. The 1000-Genomes Project will become the 10M-Genomes Project. NumPy may be replaced by a WebGPU-native array library. PyTorch may give way to a successor. But the math — SVD, Attention, Poisson, FFT, Bayes, Kalman, GBM — will be the same. The platform is designed for this evolution: the equations are the anchor, the tools are the amplifier, and the fold sections let us update the tools without rewriting the page."})})]}),(0,r.jsx)(l.T,{relatedPages:[{id:"connections",reason:"Trace this topic's connections across the platform's math graph"},{id:"distributed-training",reason:"Continue to distributed training — see also from this page"},{id:"model-monitoring",reason:"Continue to model monitoring — see also from this page"}]}),(0,r.jsxs)("div",{className:"flex flex-wrap gap-2",children:[(0,r.jsx)(o(),{href:(0,h.ZJ)("distributed-training"),className:"text-sm text-primary hover:underline",children:"→ Distributed Training (FSDP — what we trace)"}),(0,r.jsx)("span",{className:"text-muted-foreground",children:"\xb7"}),(0,r.jsx)(o(),{href:(0,h.ZJ)("model-monitoring"),className:"text-sm text-primary hover:underline",children:"→ Model Monitoring (the trigger for trace investigation)"}),(0,r.jsx)("span",{className:"text-muted-foreground",children:"\xb7"}),(0,r.jsx)(o(),{href:(0,h.ZJ)("governance"),className:"text-sm text-primary hover:underline",children:"→ Governance (OpenLineage → OTel bridge)"}),(0,r.jsx)("span",{className:"text-muted-foreground",children:"\xb7"}),(0,r.jsx)(o(),{href:(0,h.ZJ)("dashboard"),className:"text-sm text-primary hover:underline",children:"→ Live Dashboard (where traces surface)"}),(0,r.jsx)("span",{className:"text-muted-foreground",children:"\xb7"}),(0,r.jsx)(o(),{href:(0,h.ZJ)("knowledge"),className:"text-sm text-primary hover:underline",children:"→ ADR-029 (OpenTelemetry adoption)"})]})]})}},33024:(e,t,a)=>{"use strict";a.d(t,{A:()=>r});let r=(0,a(6404).A)("layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]])},44478:(e,t,a)=>{"use strict";a.d(t,{A:()=>r});let r=(0,a(6404).A)("shield-check",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]])},53961:(e,t,a)=>{"use strict";a.d(t,{A:()=>r});let r=(0,a(6404).A)("zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]])},56856:(e,t,a)=>{Promise.resolve().then(a.bind(a,30089))},65576:(e,t,a)=>{"use strict";a.d(t,{A:()=>r});let r=(0,a(6404).A)("cpu",[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]])},66349:(e,t,a)=>{"use strict";a.d(t,{l:()=>_});var r=a(95155),s=a(12115),i=a(80642),n=a(39430),o=a(89239),d=a(45160),l=a(6296),p=a(12651),c=a(13545),h=a(20232),u=a(10762);let m=null,g="0.26.2",x=`https://cdn.jsdelivr.net/pyodide/v${g}/full/`;async function f(){return m||(m=(async()=>(await new Promise((e,t)=>{if(window.loadPyodide)return void e();let a=document.createElement("script");a.src=`${x}pyodide.js`,a.onload=()=>e(),a.onerror=()=>t(Error("Failed to load Pyodide bootstrap")),document.head.appendChild(a)}),await window.loadPyodide({indexURL:x})))().catch(e=>{throw m=null,e}))}function _({code:e,buttonLabel:t="Run in browser",preamble:a,compact:m=!1,onOutput:x,hideTextOutput:_=!1}){let[b,v]=(0,s.useState)("idle"),[y,w]=(0,s.useState)(""),[j,k]=(0,s.useState)(null),[T,A]=(0,s.useState)(null),N=(0,s.useRef)(null),P=(0,s.useCallback)(async()=>{v("loading"),k(null),w("Loading Pyodide runtime (~10MB)…\nFirst run takes 5-10s on a typical connection.\nSubsequent runs are instant.\n");let t=performance.now();try{let r=await f(),s=Math.round(performance.now()-t);A(s);let i=[],n=e=>{i.push(e)};try{r.setStdout({batched:n}),r.setStderr({batched:n})}catch{try{r.setStdout(n),r.setStderr(n)}catch{}}let o=(a??"")+"\n"+e,d=[];if(/\bnumpy\b|\bnp\./.test(o)&&d.push("numpy"),/\bscipy\b|\bsp\./.test(o)&&d.push("scipy"),/\bsklearn\b|\bGradientBoosting\b|\bRandomForest\b|\btrain_test_split\b|\bKMeans\b|\bSVC\b|\bLogisticRegression\b/.test(o)&&d.push("scikit-learn"),/\bpandas\b|\bpd\./.test(o)&&d.push("pandas"),/\bpyarrow\b|\bpq\./.test(o)&&d.push("pyarrow"),d.length>0){w(e=>e+`
Loading packages: ${d.join(", ")}…
`);try{await r.loadPackage(d)}catch{}}v("running"),w(e=>e+`
Pyodide loaded in ${s}ms. Running analysis…

`),a&&await r.runPythonAsync(a),await r.runPythonAsync(e);let l=i.join("");w(e=>e+(l||"(no output)")),v("done"),x&&x(l)}catch(a){let e=a instanceof Error?a.message:String(a),t=e.includes("Failed to load Pyodide bootstrap")?"\n\nHint: check your internet connection — Pyodide loads from a CDN (jsdelivr.net). Click again to retry.":e.includes("NetworkError")||e.includes("Failed to fetch")?"\n\nHint: network error loading Pyodide. Check your connection and click again to retry.":"";k(e+t),v("error"),w(a=>a+`
Error: ${e}${t}`)}},[e,a,x]);return(0,s.useEffect)(()=>{N.current&&(N.current.scrollTop=N.current.scrollHeight)},[y]),(0,r.jsxs)("div",{className:`mt-3 ${m?"":"rounded-md border border-primary/30 bg-primary/3 p-3"}`,children:[(0,r.jsxs)("div",{className:"flex items-center gap-2",children:[(0,r.jsxs)(o.$,{size:m?"sm":"default",variant:"running"===b||"loading"===b?"outline":"error"===b?"destructive":"default",className:"gap-1.5",onClick:P,disabled:"loading"===b||"running"===b,children:["loading"===b||"running"===b?(0,r.jsx)(l.A,{className:"h-3.5 w-3.5 animate-spin"}):"done"===b?(0,r.jsx)(p.A,{className:"h-3.5 w-3.5"}):"error"===b?(0,r.jsx)(c.A,{className:"h-3.5 w-3.5"}):(0,r.jsx)(h.A,{className:"h-3.5 w-3.5"}),"error"===b?`Retry: ${t}`:"done"===b?`Re-run: ${t}`:t]}),!m&&(0,r.jsxs)(d.E,{variant:"outline",className:"text-[10px] gap-1",children:[(0,r.jsx)(u.A,{className:"h-2.5 w-2.5"}),"Pyodide v",g]}),null!==T&&"done"===b&&(0,r.jsxs)("span",{className:"text-[10px] text-muted-foreground",children:["Runtime: ",T,"ms load + execution"]})]}),(0,r.jsx)(i.N,{children:("idle"!==b||y)&&!_&&(0,r.jsx)(n.P.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},className:"mt-2",children:(0,r.jsx)("div",{ref:N,className:`rounded-md bg-[oklch(0.16_0.005_240)] text-[oklch(0.97_0.005_60)] p-2.5 text-[11px] font-mono leading-relaxed overflow-x-auto code-scroll max-h-64 overflow-y-auto ${j?"border border-rose-500/40":"border border-emerald-500/30"}`,children:(0,r.jsx)("pre",{className:"whitespace-pre-wrap",children:y})})})})]})}},67635:(e,t,a)=>{"use strict";a.d(t,{A:()=>r});let r=(0,a(6404).A)("copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]])},69260:(e,t,a)=>{"use strict";a.d(t,{A:()=>r});let r=(0,a(6404).A)("network",[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]])},83036:(e,t,a)=>{"use strict";a.d(t,{P:()=>l,S:()=>p});var r=a(95155),s=a(98500),i=a.n(s),n=a(44071),o=a(97810),d=a(85757);function l({title:e,connectedTo:t,researchHref:a,children:s}){return(0,r.jsxs)("div",{className:"rounded-md border border-primary/30 bg-primary/5 p-4 space-y-2",children:[(0,r.jsxs)("div",{className:"flex items-start gap-2",children:[(0,r.jsx)(n.A,{className:"h-4 w-4 text-primary mt-0.5 shrink-0"}),(0,r.jsxs)("div",{className:"flex-1 min-w-0",children:[(0,r.jsx)("p",{className:"text-sm font-semibold text-foreground/90 leading-tight",children:e}),t&&(0,r.jsxs)("div",{className:"flex items-center gap-1.5 mt-1",children:[(0,r.jsx)(o.A,{className:"h-3 w-3 text-muted-foreground"}),(0,r.jsxs)(i(),{href:a??(0,d.ZJ)("research"),className:"text-[10px] text-muted-foreground hover:text-primary hover:underline",children:["Connected to: ",t," →"]})]})]})]}),(0,r.jsx)("div",{className:"text-xs text-muted-foreground leading-relaxed space-y-2 pl-6",children:s})]})}function p({pageTitle:e,children:t}){return(0,r.jsxs)("div",{className:"space-y-4",children:[(0,r.jsxs)("div",{className:"flex items-center gap-2 border-b border-border/60 pb-2",children:[(0,r.jsx)(n.A,{className:"h-5 w-5 text-primary"}),(0,r.jsxs)("h2",{className:"text-base font-bold text-foreground/90",children:["My deeper thoughts — ",e]})]}),(0,r.jsx)("p",{className:"text-xs text-muted-foreground italic leading-relaxed",children:"These are not summaries. They are arguments — the kind of connections a reader with serious grey matter would make after living with the material for years. Each thought connects to the platform's research section (ADRs, papers, decision records) so it's traceable, not just opinionated."}),(0,r.jsx)("div",{className:"space-y-3",children:t})]})}},89239:(e,t,a)=>{"use strict";a.d(t,{$:()=>d});var r=a(95155);a(12115);var s=a(42442),i=a(18460),n=a(40980);let o=(0,i.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",destructive:"bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9"}},defaultVariants:{variant:"default",size:"default"}});function d({className:e,variant:t,size:a,asChild:i=!1,...d}){let l=i?s.DX:"button";return(0,r.jsx)(l,{"data-slot":"button",className:(0,n.cn)(o({variant:t,size:a,className:e})),...d})}},90718:(e,t,a)=>{"use strict";a.d(t,{A:()=>r});let r=(0,a(6404).A)("brain",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]])},93219:(e,t,a)=>{"use strict";a.d(t,{A:()=>r});let r=(0,a(6404).A)("activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]])},94514:(e,t,a)=>{"use strict";a.d(t,{A:()=>r});let r=(0,a(6404).A)("check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]])},97810:(e,t,a)=>{"use strict";a.d(t,{A:()=>r});let r=(0,a(6404).A)("book-open",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]])}},e=>{e.O(0,[6919,8500,9430,3493,9620,6722,8441,3794,7358],()=>e(e.s=56856)),_N_E=e.O()}]);