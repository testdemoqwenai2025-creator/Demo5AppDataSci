(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2090],{1407:(e,t,s)=>{"use strict";s.d(t,{A:()=>r});let r=(0,s(6404).A)("cloud",[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]])},8195:(e,t,s)=>{"use strict";s.d(t,{A:()=>r});let r=(0,s(6404).A)("database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]])},14023:(e,t,s)=>{"use strict";s.d(t,{A:()=>r});let r=(0,s(6404).A)("atom",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["path",{d:"M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z",key:"1l2ple"}],["path",{d:"M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z",key:"1wam0m"}]])},15573:(e,t,s)=>{"use strict";s.d(t,{A:()=>r});let r=(0,s(6404).A)("server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]])},18861:(e,t,s)=>{"use strict";s.d(t,{DruidPage:()=>B});var r=s(95155),i=s(98500),a=s.n(i),n=s(12115),o=s(39430),d=s(58381),l=s(27774),c=s(60508),u=s(92194),h=s(19776),m=s(66349),p=s(49345),g=s(9689),x=s(94680),y=s(85757),f=s(45160),v=s(83036),b=s(14023),k=s(26075),j=s(93219),N=s(8195),A=s(65576),S=s(15573),w=s(86901),L=s(50538),D=s(1407),M=s(48368),T=s(44071);let _=`-- ============================================================
-- Apache Druid — time-series OLAP (2011)
-- Components: Coordinator + Overlord + Historical + MiddleManager
-- ============================================================

-- Create a Kafka supervisor for real-time ingestion
-- The supervisor manages MiddleManager tasks that consume Kafka events
-- + build segments in real-time.
SUBMIT SUPervisor
{
  "type": "kafka",
  "dataSchema": {
    "dataSource": "netflix_events",
    "timestampSpec": { "column": "ts", "format": "auto" },
    "dimensionsSpec": {
      "dimensions": ["user_id", "title_id", "event_type", "country", "device"]
    },
    "metricsSpec": [
      { "type": "count", "name": "events" },
      { "type": "sum", "name": "duration_sec", "fieldName": "duration_sec" },
      { "type": "hyperUnique", "name": "unique_users", "fieldName": "user_id" },
      { "type": "quantilesDoublesSketch", "name": "duration_dist",
        "fieldName": "duration_sec" }
    ],
    "granularitySpec": {
      "type": "uniform",
      "segmentGranularity": "HOUR",
      "queryGranularity": "MINUTE",
      "rollup": true
    }
  },
  "tuningConfig": {
    "type": "kafka",
    "maxRowsPerSegment": 5000000,
    "intermediatePersistPeriod": "PT10M"
  },
  "ioConfig": {
    "topic": "netflix.events",
    "consumerProperties": { "bootstrap.servers": "kafka:9092" },
    "taskDuration": "PT1H"
  }
}

-- SQL query (Druid SQL layer translates to native queries)
-- APPROX_COUNT_DISTINCT uses HLL — sub-1s on billions of events
SELECT
  title_id,
  APPROX_COUNT_DISTINCT(user_id) AS unique_users,
  SUM(events) AS total_events,
  SUM(duration_sec) AS total_watch_sec
FROM netflix_events
WHERE __time >= CURRENT_TIMESTAMP - INTERVAL '1' HOUR
GROUP BY title_id
ORDER BY unique_users DESC
LIMIT 10;`,P=`# ============================================================
# Druid Python client — broker SQL queries + ingestion
#   pip install pydruid
# ============================================================

from pydruid.db import connect
import pandas as pd

# Connect to Druid broker via SQL (Avatica JDBC)
conn = connect(host='druid-router', port=8888, path='/druid/v2/sql',
               scheme='http')

# Sub-1s query: top titles by unique viewers last hour
with conn.cursor() as cur:
    cur.execute("""
        SELECT title_id,
               APPROX_COUNT_DISTINCT(user_id) AS unique_users,
               SUM(events) AS total_events
        FROM netflix_events
        WHERE __time >= current_timestamp - interval '1' hour
        GROUP BY title_id
        ORDER BY unique_users DESC
        LIMIT 10
    """)
    rows = cur.fetchall()
    cols = [d[0] for d in cur.description]

df = pd.DataFrame(rows, columns=cols)
print(f"Top 10 titles (last hour):")
print(df.to_string(index=False))
print(f"\\nApproximate distinct counts via HLL — sub-1s on 1B events/day")

# Native JSON query (older API, but exposes more Druid features)
from pydruid.client import *
druid = DruidClient('http://druid-router:8888')

# Timeseries query: events per minute for last hour
ts = druid.timeseries(
    datasource='netflix_events',
    granularity='minute',
    intervals='2024-09-25T10:00:00/2024-09-25T11:00:00',
    aggregations={
        'events': longsum('events'),
        'unique_users': hyperunique('user_id'),
    }
)
df_ts = pd.DataFrame(ts[0]['result'])
print(f"\\nTimeseries (per minute):")
print(df_ts.head(10).to_string(index=False))`,q=`-- ============================================================
-- Druid + Spark — batch segment ingestion (historical backfill)
-- Spark builds segments from Parquet + submits to Druid Overlord
-- ============================================================

import org.apache.druid.spark.{DruidSegmentBuilder, DruidCluster}

val spark = SparkSession.builder()
  .appName("Druid Historical Segment Builder")
  .config("druid.overlord.url", "http://druid-overlord:8090")
  .config("druid.datasource", "netflix_events")
  .getOrCreate()

// Load Parquet from S3
val df = spark.read.parquet("s3a://bronze/netflix-events/2024/09/24/")
  .filter("ts is not null")

// Build Druid segments (columnar, time-chunked)
df.write
  .format("druid")
  .option("druid.datasource", "netflix_events")
  .option("druid.segmentGranularity", "HOUR")
  .option("druid.queryGranularity", "MINUTE")
  .option("druid.rollup", "true")
  .option("druid.metrics", "events:count,duration_sec:sum,unique_users:hyperUnique")
  .option("druid.dimensions", "user_id,title_id,event_type,country,device")
  .mode("append")
  .save()

// Overlord distributes segments to Historical nodes
// Coordinator rebalances segments across the cluster
val druid = DruidCluster("http://druid-overlord:8090")
druid.waitForSegmentsLoad("netflix_events")  // block until queryable`,H=`-- ============================================================
-- Druid Kafka supervisor — real-time ingestion from Kafka
-- The supervisor manages MiddleManager indexing tasks per Kafka partition
-- ============================================================

-- Submit a Kafka supervisor spec via the Overlord REST API
-- (POST to /druid/indexer/v1/supervisor)
{
  "type": "kafka",
  "dataSchema": {
    "dataSource": "airbnb_events",
    "timestampSpec": { "column": "event_ts", "format": "auto" },
    "dimensionsSpec": {
      "dimensions": ["guest_id", "listing_id", "event_type", "country"],
      "dimensionExclusions": []
    },
    "metricsSpec": [
      { "type": "count", "name": "events" },
      { "type": "sum", "name": "total_usd", "fieldName": "total_usd" },
      { "type": "hyperUnique", "name": "unique_guests", "fieldName": "guest_id" },
      { "type": "quantilesDoublesSketch", "name": "usd_dist",
        "fieldName": "total_usd", "k": 128 }
    ],
    "granularitySpec": {
      "type": "uniform",
      "segmentGranularity": "HOUR",
      "queryGranularity": "MINUTE",
      "rollup": true
    }
  },
  "ioConfig": {
    "topic": "airbnb.guest.events",
    "consumerProperties": { "bootstrap.servers": "kafka:9092" },
    "taskDuration": "PT1H",
    "replicas": 2,
    "startDelay": "PT1M"
  },
  "tuningConfig": {
    "type": "kafka",
    "maxRowsPerSegment": 5000000,
    "intermediatePersistPeriod": "PT10M",
    "maxPendingPersists": 3
  }
}

-- MiddleManager lifecycle:
-- 1. Supervisor creates indexing tasks (one per Kafka partition)
-- 2. Each task consumes Kafka events + builds an in-memory segment
-- 3. Every 10 minutes, intermediate persist to disk
-- 4. After 1 hour, segment is sealed + pushed to deep storage (S3/HDFS)
-- 5. Historical node loads the segment; broker routes queries

-- Query the data via Druid SQL or native JSON queries
SELECT
  country,
  SUM(total_usd) AS gmv,
  APPROX_COUNT_DISTINCT(guest_id) AS unique_guests,
  APPROX_QUANTILE(total_usd, 0.99) AS p99_booking
FROM airbnb_events
WHERE __time >= CURRENT_TIMESTAMP - INTERVAL '1' HOUR
  AND event_type = 'booking'
GROUP BY country
ORDER BY gmv DESC;`,O=`# ============================================================
# Druid approximate aggregation — in-browser simulation
# 1. Generate synthetic Netflix events (1B/day scaled)
# 2. Build HLL sketches for unique user counts
# 3. Compare HLL vs exact count distinct
# 4. Measure latency + memory tradeoff
# ============================================================

import random
import time
import math
from collections import defaultdict

random.seed(42)
print("=== Apache Druid — HLL sketch vs exact distinct ===")
print("Synthetic Netflix events (1B/day scaled to 1M)\\n")

# Generate synthetic events
n_events = 1_000_000  # scale-down of 1B/day
titles = [f"title_{i:04d}" for i in range(5000)]
countries = ['US', 'UK', 'DE', 'FR', 'JP', 'BR', 'IN', 'CA']

# Each event has a user_id (50M distinct possible)
events = []
for _ in range(n_events):
    events.append({
        'title': random.choice(titles),
        'country': random.choice(countries),
        'user_id': random.randint(1, 50_000_000),
    })

# Exact count distinct per (title, country)
print("--- Exact count distinct (slow at scale) ---")
t0 = time.time()
exact = defaultdict(set)
for e in events:
    exact[(e['title'], e['country'])].add(e['user_id'])
t_exact = (time.time() - t0) * 1000
print(f"Time: {t_exact:.1f}ms")
print(f"Groups: {len(exact)}")
total_distinct = sum(len(s) for s in exact.values())
print(f"Sum of unique users across groups: {total_distinct:,}")

# HLL sketch per (title, country)
# Real HLL uses ~2KB per sketch regardless of input size
print("\\n--- HLL sketch (sub-1s at scale) ---")
def hll_sketch(elements, p=14):
    """Simplified HLL — real HLL uses bias-corrected harmonic mean."""
    m = 1 << p  # 2^p buckets
    registers = [0] * m
    for e in elements:
        h = hash(e) & 0xFFFFFFFF
        bucket = h >> (32 - p)
        rest = (h << p) & 0xFFFFFFFF
        leading = bin(rest | (1 << 31)).zfill(33).index('1', 1)
        registers[bucket] = max(registers[bucket], leading)
    # Alpha correction + harmonic mean
    alpha = 0.7213 / (1 + 1.079 / m)
    sum_inv = sum(2 ** -r for r in registers)
    return int(alpha * m * m / sum_inv)

t0 = time.time()
sketches = defaultdict(list)
for e in events:
    sketches[(e['title'], e['country'])].append(e['user_id'])
hll_results = {k: hll_sketch(v) for k, v in sketches.items()}
t_hll = (time.time() - t0) * 1000

print(f"Time: {t_hll:.1f}ms")
print(f"Memory: ~2KB per sketch \xd7 {len(hll_results)} sketches = "
      f"~{2 * len(hll_results) / 1024:.1f}KB total")

# Compare error
print("\\n--- Accuracy comparison (top 3 groups) ---")
print(f"{'Title':<10} {'Country':<8} {'Exact':>12} {'HLL':>12} {'Error%':>8}")
print("-" * 55)
top = sorted(exact.items(), key=lambda x: len(x[1]), reverse=True)[:3]
for (title, country), users in top:
    exact_count = len(users)
    hll_count = hll_results[(title, country)]
    error = abs(hll_count - exact_count) / exact_count * 100
    print(f"{title:<10} {country:<8} {exact_count:>12,} {hll_count:>12,} {error:>7.2f}%")

print(f"\\nKey insight: HLL uses ~2KB memory regardless of distinct count.")
print(f"At 1B events/day \xd7 50M distinct users, exact = O(N) memory;")
print(f"HLL = O(1) memory per sketch. Sub-1s query latency preserved.")
print(f"\\nThis is why Netflix serves real-time dashboards on Druid.")`;function I(){let[e,t]=(0,n.useState)("historical"),s={kafka:{label:"Kafka topic",desc:"Source events (e.g. netflix.events) — Druid consumes via Kafka supervisor",level:0},mm:{label:"MiddleManager",desc:"Manages indexing tasks — each consumes Kafka partition + builds in-memory segment",level:1},deep_storage:{label:"Deep storage (S3)",desc:"Sealed segments pushed to S3/HDFS — shared across cluster, durable",level:2},historical:{label:"Historical (x N)",desc:"Loads sealed segments + serves queries — scales horizontally, in-memory + mmap",level:3},broker:{label:"Broker",desc:"Receives SQL/native query, routes to relevant Historicals + MiddleManagers, merges",level:4},coordinator:{label:"Coordinator",desc:"Manages segment assignment + load balancing across Historicals",level:4},client:{label:"Client (BI)",desc:"Looks like single Druid cluster — broker abstracts the topology",level:5}},i={kafka:{x:60,y:40},mm:{x:180,y:40},deep_storage:{x:320,y:40},historical:{x:320,y:100},broker:{x:180,y:160},coordinator:{x:60,y:100},client:{x:180,y:210}};return(0,r.jsxs)("div",{className:"rounded-md border border-border/60 bg-card overflow-hidden",children:[(0,r.jsx)("div",{className:"px-3 py-2 bg-muted/40 border-b border-border/60",children:(0,r.jsxs)("p",{className:"text-xs font-semibold flex items-center gap-1.5",children:[(0,r.jsx)(b.A,{className:"h-3.5 w-3.5 text-primary"}),"Druid segment architecture — Kafka → MiddleManager → Deep Storage → Historical → Broker"]})}),(0,r.jsxs)("div",{className:"p-3",children:[(0,r.jsxs)("svg",{viewBox:"0 0 400 250",className:"w-full h-auto",children:[[["kafka","mm"],["mm","deep_storage"],["deep_storage","historical"],["mm","broker"],["historical","broker"],["coordinator","historical"],["broker","client"]].map(([e,t],s)=>{let a=i[e],n=i[t];return(0,r.jsx)("line",{x1:a.x,y1:a.y+12,x2:n.x,y2:n.y-12,stroke:"var(--border)",strokeWidth:"0.8",markerEnd:"url(#arrow)"},s)}),Object.entries(i).map(([i,a])=>{let n=e===i,d=s[i],l=0===d.level?"var(--chart-3)":1===d.level?"var(--chart-2)":2===d.level?"var(--chart-1)":3===d.level?"var(--chart-4)":4===d.level?"var(--chart-5)":"var(--muted-foreground)";return(0,r.jsxs)(o.P.g,{onMouseEnter:()=>t(i),onMouseLeave:()=>t(null),animate:{scale:n?1.05:1},style:{cursor:"pointer"},children:[(0,r.jsx)("rect",{x:a.x-65,y:a.y-10,width:"130",height:"22",rx:"3",fill:n?l+"30":"var(--background)",stroke:l,strokeWidth:n?1.5:.8}),(0,r.jsx)("text",{x:a.x,y:a.y+4,textAnchor:"middle",fontSize:"7",fill:n?l:"var(--foreground)",fontWeight:n?"bold":"normal",children:d.label})]},i)}),(0,r.jsx)("defs",{children:(0,r.jsx)("marker",{id:"arrow",markerWidth:"6",markerHeight:"6",refX:"5",refY:"3",orient:"auto",children:(0,r.jsx)("path",{d:"M0,0 L6,3 L0,6",fill:"var(--muted-foreground)",opacity:"0.5"})})})]}),e&&(0,r.jsxs)("div",{className:"mt-2 rounded-md border border-primary/30 bg-primary/5 p-2 text-xs",children:[(0,r.jsx)("p",{className:"font-semibold text-primary mb-0.5",children:s[e].label}),(0,r.jsx)("p",{className:"text-muted-foreground",children:s[e].desc})]}),!e&&(0,r.jsx)("p",{className:"mt-2 text-[10px] text-muted-foreground text-center",children:"Hover any node — Druid's 4-component architecture separates ingestion from serving."})]})]})}function C(){return(0,r.jsxs)("div",{className:"rounded-md border border-border/60 bg-card overflow-hidden",children:[(0,r.jsx)("div",{className:"px-3 py-2 bg-muted/40 border-b border-border/60",children:(0,r.jsxs)("p",{className:"text-xs font-semibold flex items-center gap-1.5",children:[(0,r.jsx)(k.A,{className:"h-3.5 w-3.5 text-primary"}),"Druid vs Pinot vs ClickHouse vs Presto — real-time OLAP siblings"]})}),(0,r.jsx)("div",{className:"overflow-x-auto",children:(0,r.jsxs)("table",{className:"w-full text-xs",children:[(0,r.jsx)("thead",{className:"bg-muted/30",children:(0,r.jsxs)("tr",{className:"border-b border-border/60",children:[(0,r.jsx)("th",{className:"text-left px-3 py-2 font-semibold",children:"Feature"}),(0,r.jsx)("th",{className:"text-left px-3 py-2 font-semibold text-primary",children:"Druid"}),(0,r.jsx)("th",{className:"text-left px-3 py-2 font-semibold",children:"Pinot"}),(0,r.jsx)("th",{className:"text-left px-3 py-2 font-semibold",children:"ClickHouse"}),(0,r.jsx)("th",{className:"text-left px-3 py-2 font-semibold",children:"Presto"})]})}),(0,r.jsx)("tbody",{children:[{feature:"Origin",druid:"Metamarkets (2011)",pinot:"LinkedIn (2013)",clickhouse:"Yandex (2016)",presto:"Facebook (2012)"},{feature:"Time-chunked segments",druid:"Yes (primary)",pinot:"Yes",clickhouse:"Yes (MergeTree parts)",presto:"No (relies on connector)"},{feature:"In-memory + mmap hybrid",druid:"Yes (unique)",pinot:"Limited",clickhouse:"Yes",presto:"No"},{feature:"Approximate aggregation",druid:"HLL + quantiles",pinot:"HLL + Theta",clickhouse:"HLL + T-Digest",presto:"Limited"},{feature:"Kafka real-time ingestion",druid:"Yes (supervisor)",pinot:"Yes (low-level)",clickhouse:"Yes (Kafka engine)",presto:"Via connectors"},{feature:"Star-tree pre-aggregation",druid:"No",pinot:"Yes (unique)",clickhouse:"No",presto:"No"},{feature:"SQL interface",druid:"Yes (Druid SQL)",pinot:"Yes (Pinot SQL)",clickhouse:"Yes (rich SQL)",presto:"Yes (ANSI SQL)"},{feature:"Best fit",druid:"Time-series events",pinot:"Real-time dashboards",clickhouse:"Event analytics",presto:"Federated SQL"},{feature:"Adoption",druid:"Netflix, Airbnb, Alibaba",pinot:"LinkedIn, Uber",clickhouse:"Cloudflare, Uber",presto:"Meta, Airbnb"}].map((e,t)=>(0,r.jsxs)("tr",{className:"border-b border-border/40 last:border-0 hover:bg-muted/20",children:[(0,r.jsx)("td",{className:"px-3 py-2 font-medium",children:e.feature}),(0,r.jsx)("td",{className:"px-3 py-2 text-primary/80",children:e.druid}),(0,r.jsx)("td",{className:"px-3 py-2 text-muted-foreground",children:e.pinot}),(0,r.jsx)("td",{className:"px-3 py-2 text-muted-foreground",children:e.clickhouse}),(0,r.jsx)("td",{className:"px-3 py-2 text-muted-foreground",children:e.presto})]},t))})]})})]})}let R=[{label:"Origin",value:"Metamarkets 2011",hint:"Built for ad-tech real-time analytics; open-sourced 2012; Apache top-level 2015",deltaTone:"flat"},{label:"Production scale",value:"1B+ events/day",hint:"Netflix serves 1B+ events/day; Airbnb 100M events/day; Alibaba 10B+ events/day",deltaTone:"up"},{label:"Query latency",value:"Sub-second p99",hint:"In-memory + mmap hybrid + HLL sketches = sub-second on billions of events",deltaTone:"up"},{label:"Architecture",value:"4-component",hint:"Coordinator + Overlord + Historical + MiddleManager (ingestion + serving separated)",deltaTone:"flat"}];function B(){return(0,r.jsxs)("div",{className:"space-y-8",children:[(0,r.jsx)(d.zY,{eyebrow:"Apache Druid \xb7 time-series OLAP \xb7 Metamarkets origin",title:"Apache Druid — sub-second analytics on event/time-series data",description:"Druid is the time-series OLAP engine (born at Metamarkets in 2011) that powers real-time analytics at Netflix, Airbnb, Alibaba, and Salesforce. Its segment format is time-chunked (each segment covers a time range, e.g. 1 hour) and immutable — perfect for time-range queries ('last hour', 'last day') that prune to relevant segments immediately. The in-memory + mmap hybrid storage keeps recent time chunks hot in RAM and older chunks mmap'd from disk. Approximate aggregation primitives (HyperLogLog for distinct counts, quantile sketches) trade ~1% error for sub-second latency on billions of events. Druid's 4-component architecture (Coordinator + Overlord + Historical + MiddleManager) separates ingestion from serving — MiddleManagers consume Kafka + build segments; Historicals serve queries.",right:(0,r.jsxs)("div",{className:"flex gap-2",children:[(0,r.jsxs)(f.E,{variant:"outline",className:"gap-1.5",children:[(0,r.jsx)(j.A,{className:"h-3 w-3"})," Time-chunked"]}),(0,r.jsxs)(f.E,{variant:"outline",className:"gap-1.5",children:[(0,r.jsx)(b.A,{className:"h-3 w-3"})," HLL sketches"]})]})}),(0,r.jsx)("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-3",children:R.map(e=>(0,r.jsx)(d.nO,{label:e.label,value:e.value,hint:e.hint,deltaTone:e.deltaTone},e.label))}),(0,r.jsx)(d.iv,{title:"Segment architecture — Druid's 4-component design",description:"Druid separates ingestion from serving. The MiddleManager runs indexing tasks that consume Kafka events and build segments in-memory. Sealed segments are pushed to deep storage (S3/HDFS) — durable and shared across the cluster. Historical nodes load segments for serving queries, scaling horizontally. The Coordinator manages segment assignment + load balancing. The Broker receives queries, routes to relevant Historicals + MiddleManagers (for consuming segments), and merges results. The client sees a single cluster — the topology is abstracted.",icon:(0,r.jsx)(b.A,{className:"h-5 w-5"}),badge:"architecture",children:(0,r.jsx)(I,{})}),(0,r.jsx)(d.iv,{title:"Druid SQL — Kafka supervisor + sub-second queries",description:"Druid SQL is an ANSI SQL layer on top of native JSON queries. The Kafka supervisor (submitted via Overlord REST API) manages MiddleManager indexing tasks per Kafka partition — each consumes events + builds a segment. Metrics spec includes count, sum, hyperUnique (HLL), and quantilesDoublesSketch. The granularitySpec sets segment (1 hour) and query (1 minute) granularity + rollup (boolean — should the segment pre-aggregate during ingestion). The result: sub-1s queries on 1B+ events/day via HLL + segment pruning + in-memory caching.",icon:(0,r.jsx)(N.A,{className:"h-5 w-5"}),badge:"Druid SQL",children:(0,r.jsx)(h.N,{code:_,language:"sql",filename:"druid_supervisor.sql",highlight:[7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37]})}),(0,r.jsx)(d.iv,{title:"pydruid — Python broker client",description:"The pydruid Python package speaks both Druid SQL (via Avatica JDBC) and the native JSON query API. The SQL layer is the most convenient for pandas integration; the native JSON API exposes more Druid-specific features (timeseries, topN, groupBy, search). HLL-based approximate distinct counts are transparent in SQL — APPROX_COUNT_DISTINCT(user_id) returns the HLL estimate in sub-second on billions of events.",icon:(0,r.jsx)(A.A,{className:"h-5 w-5"}),badge:"Python",children:(0,r.jsx)(h.N,{code:P,language:"python",filename:"druid_python.py",highlight:[8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32]})}),(0,r.jsx)(d.iv,{title:"Druid + Spark — batch segment ingestion (historical backfill)",description:"For historical backfill + batch ingestion, Druid ships a Spark segment builder. The builder reads Parquet from S3, builds time-chunked Druid segments, and submits them to the Overlord. The Coordinator distributes segments across Historicals; the broker picks up new segments automatically. The pattern: real-time Kafka for live events + Spark batch for historical — both write the same datasource.",icon:(0,r.jsx)(S.A,{className:"h-5 w-5"}),badge:"Spark batch",children:(0,r.jsx)(h.N,{code:q,language:"scala",filename:"druid_spark_ingestion.scala",highlight:[10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]})}),(0,r.jsx)(d.iv,{title:"Kafka supervisor — real-time ingestion from Kafka",description:"The Kafka supervisor is Druid's real-time ingestion pattern. Submitted via the Overlord REST API, the supervisor manages MiddleManager indexing tasks per Kafka partition. Each task consumes events + builds an in-memory segment. Intermediate persists (every 10 minutes) flush to disk for durability. After taskDuration (1 hour), the segment is sealed + pushed to deep storage. The Coordinator picks up sealed segments and assigns to Historicals; the Broker routes queries across both consuming + sealed segments transparently.",icon:(0,r.jsx)(j.A,{className:"h-5 w-5"}),badge:"Kafka supervisor",children:(0,r.jsx)(h.N,{code:H,language:"sql",filename:"druid_kafka_supervisor.sql",highlight:[8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38]})}),(0,r.jsx)(d.iv,{title:"Try it: build an HLL sketch in your browser (Pyodide)",description:"Pure-Python simulation of Druid's HLL-based approximate aggregation. Generate synthetic Netflix events, build HLL sketches per (title, country), and compare approximate distinct counts vs exact counts. See the memory trade-off: HLL uses ~2KB per sketch regardless of distinct count, while exact count distinct uses O(N) memory. At 1B events/day, HLL = sub-second; exact = OOM or minutes.",icon:(0,r.jsx)(w.A,{className:"h-5 w-5"}),badge:"executable",children:(0,r.jsx)(m.l,{code:O,buttonLabel:"Run Druid HLL simulation (Pyodide)"})}),(0,r.jsx)(d.iv,{title:"Druid vs Pinot vs ClickHouse vs Presto — real-time OLAP siblings",description:"Four open-source OLAP engines compete for the real-time analytics workload. Druid (Metamarkets origin) emphasises time-series + approximate aggregation + in-memory/mmap hybrid. Pinot (LinkedIn origin) has the star-tree pre-aggregation. ClickHouse (Yandex origin) is the SQL-on-event-data specialist with the richest SQL dialect. Presto (Facebook origin) is the federated SQL layer. Druid wins when you need time-series + approximate aggregation + sub-second p99 on streaming event data.",icon:(0,r.jsx)(k.A,{className:"h-5 w-5"}),children:(0,r.jsx)(C,{})}),(0,r.jsx)(d.iv,{title:"Why Druid evolved — shortfalls of Hadoop/Hive (Era 1)",description:"Druid was built at Metamarkets in 2011 because Hadoop/Hive couldn't do sub-second queries on event/time-series data at the scale of ad-tech (10B+ events/day). Four structural shortfalls motivated Druid's design.",icon:(0,r.jsx)(L.A,{className:"h-5 w-5"}),badge:"Why Druid",children:(0,r.jsxs)("div",{className:"space-y-3 text-sm text-muted-foreground leading-relaxed",children:[(0,r.jsxs)("p",{children:[(0,r.jsx)("strong",{className:"text-foreground/80",children:"Shortfall 1: Hadoop/Hive couldn't do sub-second queries."})," Ad-tech needed real-time dashboards on 10B+ events/day — Hive-on-Mapreduce took minutes. Druid's segment + in-memory pattern gave sub-second p99 on the same data. ",(0,r.jsx)("strong",{className:"text-foreground/80",children:"Result:"})," ops teams got 'now' data on live dashboards; ad-tech real-time bidding + analytics became possible."]}),(0,r.jsxs)("p",{children:[(0,r.jsx)("strong",{className:"text-foreground/80",children:"Shortfall 2: No system handled time-series event data at scale."})," Hadoop was for batch + Parquet; HBase was for key-value; no system was built for time-bucketed event analytics. Druid's segment format is time-chunked by design — each segment covers a time range (hour, day), making time-range queries the fastest path. ",(0,r.jsx)("strong",{className:"text-foreground/80",children:"Result:"})," 'last hour' or 'last day' queries hit only relevant segments; sub-second on billions of events."]}),(0,r.jsxs)("p",{children:[(0,r.jsx)("strong",{className:"text-foreground/80",children:"Shortfall 3: SQL warehouses were too expensive for event analytics."})," Teradata, Exadata, Vertica cost tens of thousands per TB per month — ad-tech margins couldn't afford it. Druid on commodity hardware = ~10\xd7 cheaper. ",(0,r.jsx)("strong",{className:"text-foreground/80",children:"Result:"})," ad-tech + media + telecom real-time analytics became economically viable at scale."]}),(0,r.jsxs)("p",{children:[(0,r.jsx)("strong",{className:"text-foreground/80",children:"Shortfall 4: No approximate aggregation."})," Exact count distinct on 10B events required O(N) memory + seconds. Druid's HyperLogLog + quantile sketches gave ~1% error in sub-second + O(2KB) memory per sketch. ",(0,r.jsx)("strong",{className:"text-foreground/80",children:"Result:"})," 'unique users last hour' on 1B events = sub-second; the right trade-off for dashboards (which tolerate ~1% error)."]})]})}),(0,r.jsx)(d.iv,{title:"Truly unique Druid features (vs Pinot + ClickHouse + Presto)",description:"Druid has four features that are genuinely unique — structural differentiators no other open-source OLAP engine has matched.",icon:(0,r.jsx)(w.A,{className:"h-5 w-5"}),badge:"Unique features",children:(0,r.jsxs)("div",{className:"grid md:grid-cols-2 gap-3 text-xs",children:[(0,r.jsxs)("div",{className:"rounded-md border border-primary/30 bg-primary/5 p-3",children:[(0,r.jsx)("p",{className:"font-semibold text-primary mb-1",children:"1. In-memory + mmap hybrid storage"}),(0,r.jsxs)("p",{className:"text-muted-foreground",children:["Recent time chunks in RAM, older chunks mmap'd from disk — automatic tiering by recency. ",(0,r.jsx)("strong",{children:"Pinot is segment-level only; ClickHouse is in-memory only; Presto has no caching layer."})," Druid's hybrid is unique."]})]}),(0,r.jsxs)("div",{className:"rounded-md border border-primary/30 bg-primary/5 p-3",children:[(0,r.jsx)("p",{className:"font-semibold text-primary mb-1",children:"2. Time-chunked segment format"}),(0,r.jsxs)("p",{className:"text-muted-foreground",children:["Each segment covers a time range (hour, day); time is always the primary axis. Time-range queries prune to relevant segments immediately. ",(0,r.jsx)("strong",{children:"Pinot + ClickHouse have time-bucketed parts but not as primary structure."})]})]}),(0,r.jsxs)("div",{className:"rounded-md border border-primary/30 bg-primary/5 p-3",children:[(0,r.jsx)("p",{className:"font-semibold text-primary mb-1",children:"3. Approximate aggregation primitives"}),(0,r.jsxs)("p",{className:"text-muted-foreground",children:["HLL (distinct), quantile sketches (median, p99), theta sketches (set operations) built-in. ~1% error for sub-second latency. ",(0,r.jsx)("strong",{children:"ClickHouse has HLL + T-Digest; Pinot has HLL + Theta; Presto has limited."})]})]}),(0,r.jsxs)("div",{className:"rounded-md border border-primary/30 bg-primary/5 p-3",children:[(0,r.jsx)("p",{className:"font-semibold text-primary mb-1",children:"4. Auto-compaction tiering"}),(0,r.jsxs)("p",{className:"text-muted-foreground",children:["Coordinator auto-tiers segments by age — recent in-memory, mid-age mmap, oldest on cold storage. Auto-compaction merges small segments. ",(0,r.jsx)("strong",{children:"No other OLAP engine has automatic tiering + compaction."})]})]})]})}),(0,r.jsx)(d.iv,{title:"3 large-dataset examples — cards with 5-language code popups",description:"Three production-style dataset examples showing Druid in action. Each is a clickable card opening a lazy popup with: scenario brief (dataset/scale/why), dataset stats grid, computational tooling, multi-language code in Scala + Rust + Go + Elixir + Zig, and an implementation insight. All scenarios use synthetic Netflix/Airbnb/IoT-scale data.",icon:(0,r.jsx)(N.A,{className:"h-5 w-5"}),badge:"3 examples \xd7 5 langs",children:(0,r.jsx)(g.U,{examples:x.xf,intro:"Three synthetic scenarios at Netflix/Airbnb/IoT scale: (1) 1B/day Netflix events with HLL approximate distinct, (2) 100M/day Airbnb guest dashboards with sub-800ms p99, (3) 500M IoT sensors with time-series aggregation. Each card has Scala/Rust/Go/Elixir/Zig code highlighting Druid's unique time-chunked segment + in-memory/mmap hybrid differentiators."})}),(0,r.jsx)(d.iv,{title:"Computational tooling — the Druid ecosystem",description:"Druid's 4-component architecture (Coordinator + Overlord + Historical + MiddleManager) is the operational core. The ingestion layer spans real-time (Kafka supervisor) and batch (Spark segment builder). The query layer supports SQL + native JSON + multi-tenant routing + approximate aggregation primitives.",icon:(0,r.jsx)(S.A,{className:"h-5 w-5"}),badge:"ecosystem",children:(0,r.jsxs)("div",{className:"grid md:grid-cols-2 gap-4 text-xs",children:[(0,r.jsxs)("div",{children:[(0,r.jsxs)("p",{className:"font-semibold mb-2 flex items-center gap-1.5",children:[(0,r.jsx)(A.A,{className:"h-3.5 w-3.5 text-primary"})," Compute components (4)"]}),(0,r.jsxs)("ul",{className:"space-y-1 text-muted-foreground",children:[(0,r.jsxs)("li",{children:["• ",(0,r.jsx)("strong",{children:"Druid Coordinator"})," — segment assignment + load balancing + auto-compaction"]}),(0,r.jsxs)("li",{children:["• ",(0,r.jsx)("strong",{children:"Druid Overlord"})," — task management + supervisor API for real-time"]}),(0,r.jsxs)("li",{children:["• ",(0,r.jsx)("strong",{children:"Druid Historical (x N)"})," — segment storage + query serving (in-memory + mmap)"]}),(0,r.jsxs)("li",{children:["• ",(0,r.jsx)("strong",{children:"Druid MiddleManager"})," — indexing tasks (Kafka consumer + segment builder)"]}),(0,r.jsxs)("li",{children:["• ",(0,r.jsx)("strong",{children:"Druid Broker"})," — query routing + result merge + multi-tenant"]}),(0,r.jsxs)("li",{children:["• ",(0,r.jsx)("strong",{children:"Druid Router"})," — unified API endpoint (SQL + native JSON)"]}),(0,r.jsxs)("li",{children:["• ",(0,r.jsx)("strong",{children:"Spark Segment Builder"})," — batch ingestion from HDFS/S3/Parquet"]}),(0,r.jsxs)("li",{children:["• ",(0,r.jsx)("strong",{children:"Flink Druid Sink"})," — exactly-once streaming writes"]})]})]}),(0,r.jsxs)("div",{children:[(0,r.jsxs)("p",{className:"font-semibold mb-2 flex items-center gap-1.5",children:[(0,r.jsx)(D.A,{className:"h-3.5 w-3.5 text-primary"})," Storage + tooling"]}),(0,r.jsxs)("ul",{className:"space-y-1 text-muted-foreground",children:[(0,r.jsxs)("li",{children:["• ",(0,r.jsx)("strong",{children:"Deep storage"})," — S3 / HDFS / ADLS for sealed segments"]}),(0,r.jsxs)("li",{children:["• ",(0,r.jsx)("strong",{children:"Metadata storage"})," — PostgreSQL / MySQL for cluster state"]}),(0,r.jsxs)("li",{children:["• ",(0,r.jsx)("strong",{children:"Zookeeper"})," — coordination between Coordinator + Historicals"]}),(0,r.jsxs)("li",{children:["• ",(0,r.jsx)("strong",{children:"HLL sketch"})," — approximate distinct counts (~2KB per sketch)"]}),(0,r.jsxs)("li",{children:["• ",(0,r.jsx)("strong",{children:"Quantile sketches"})," — approximate median, p95, p99 (Kll + Quantiles)"]}),(0,r.jsxs)("li",{children:["• ",(0,r.jsx)("strong",{children:"Theta sketches"})," — set operations (union, intersection)"]}),(0,r.jsxs)("li",{children:["• ",(0,r.jsx)("strong",{children:"Segment format"})," — columnar + time-chunked + immutable"]}),(0,r.jsxs)("li",{children:["• ",(0,r.jsx)("strong",{children:"Druid SQL"})," — ANSI SQL layer on native JSON queries"]})]})]})]})}),(0,r.jsx)(d.iv,{title:"Research + production case studies",description:"The papers + production blog posts that defined Druid + real-time time-series analytics. The 2011 Metamarkets paper is the academic foundation; Netflix + Airbnb + Alibaba production posts document scale deployments.",icon:(0,r.jsx)(M.A,{className:"h-5 w-5"}),children:(0,r.jsxs)("div",{className:"space-y-3 text-sm text-muted-foreground leading-relaxed",children:[(0,r.jsxs)("p",{children:[(0,r.jsx)("strong",{className:"text-foreground/80",children:'Metamarkets 2011: "Druid: A Real-time Analytical Data Store":'})," The origin paper by Yang Fang et al. Described the segment format (columnar + time-chunked + immutable), the 4-component architecture (Coordinator + Overlord + Historical + MiddleManager), and the rationale for building a new system: Hadoop/Hive couldn't do sub-second queries on event data at ad-tech scale (10B+ events/day). The paper is the academic foundation for the time-series OLAP category."]}),(0,r.jsxs)("p",{children:[(0,r.jsx)("strong",{className:"text-foreground/80",children:'Netflix Eng 2017: "Druid at Netflix — Real-time Analytics at Scale":'})," Netflix adopted Druid for real-time playback + engagement analytics. The post covers the architecture (Kafka → MiddleManager → Historical), the metric spec design (HLL for unique users, quantiles for watch duration), and the operational practices (segment compaction cadence, multi-tenant routing for product + ops + finance teams). Netflix serves 1B+ events/day on Druid."]}),(0,r.jsxs)("p",{children:[(0,r.jsx)("strong",{className:"text-foreground/80",children:'Airbnb Eng 2018: "Druid at Airbnb — Sub-second Analytics":'})," Airbnb uses Druid for guest-experience dashboards — bookings, searches, reviews. The post covers the time-chunked segment pattern (1-hour segments, 1-minute query granularity), the in-memory + mmap hybrid (recent segments in RAM for sub-second, older in mmap), and the multi-tenant resource quotas. 100M events/day at sub-second p99."]}),(0,r.jsxs)("p",{children:[(0,r.jsx)("strong",{className:"text-foreground/80",children:'Alibaba Tech 2019: "Druid at Alibaba — 10B Events/day":'})," Alibaba runs Druid at 10B+ events/day for cross-BU real-time analytics. The post covers the cluster topology (50+ Historicals, 20+ MiddleManagers), the auto-tiering (recent segments in-memory, oldest on cold storage), and the multi-tenant routing (per-BU broker quotas). The scale stresses the limits of Druid's design."]}),(0,r.jsxs)("p",{children:[(0,r.jsx)("strong",{className:"text-foreground/80",children:"Apache Druid 0.20+ (2020-2024):"})," Recent releases added Druid SQL (ANSI SQL layer), multi-stage query engine (JOIN support), inline data ingestion, and the Kafka supervisor (replacing the older Kafka firehose). The Druid SQL layer made Druid accessible to BI tools without learning the native JSON query API — strategically important for adoption."]}),(0,r.jsxs)("p",{children:[(0,r.jsx)("strong",{className:"text-foreground/80",children:"Imply (2015):"})," The commercial Druid company founded by the original Metarmarkets team. Imply provides managed Druid + adds query acceleration (Pull-up Mode for hybrid batch + real-time) + multi-tenant UI. The Imply fork is the basis for many commercial Druid deployments; the open-source Apache Druid is the reference implementation."]})]})}),(0,r.jsx)(d.iv,{title:"My deeper thought: Druid's segment format IS the time-chunked columnar store — time is always the primary axis",description:"The unifying view: Druid's segment format is structurally a time-chunked columnar store — the design choice that makes time-range queries the fastest path. This is fundamentally different from Pinot/ClickHouse which partition by dimensions + use time as one of many.",icon:(0,r.jsx)(T.A,{className:"h-5 w-5"}),badge:"Insight",children:(0,r.jsxs)("div",{className:"space-y-3 text-sm text-muted-foreground leading-relaxed",children:[(0,r.jsxs)("p",{children:[(0,r.jsx)("strong",{className:"text-foreground/80",children:"Time is always the primary axis."})," Every Druid segment covers a time range (typically 1 hour or 1 day). This is the structural choice — segments are time-chunked first, dimension-partitioned second. A query like ",(0,r.jsx)("code",{className:"font-mono",children:"WHERE __time >= now() - interval '1' hour"})," hits only the segments covering that hour — pruning to a tiny fraction of the total data. Pinot + ClickHouse partition by dimensions and use time as one of many — time-range queries scan more data. The insight: for event/time-series workloads (where 90% of queries are time-range), making time the primary axis is the optimal storage layout."]}),(0,r.jsxs)("p",{children:[(0,r.jsx)("strong",{className:"text-foreground/80",children:"The in-memory + mmap hybrid IS the working-set theory applied to OLAP."})," The OS virtual memory subsystem has understood the working-set theory since the 1960s — recently-accessed data stays in RAM, less-recent gets paged out. Druid applies this to OLAP: recent time chunks (last hour, last day) are pre-loaded in RAM; older chunks are mmap'd from disk (the OS handles page cache + eviction). The result is automatic tiering by recency — no DBA deciding what to cache. This is the same pattern as Linux's page cache for file access, applied to analytical segments. No other OLAP engine has this hybrid; Pinot has in-memory only, ClickHouse has in-memory only, Presto relies on the connector."]}),(0,r.jsxs)("p",{children:[(0,r.jsx)("strong",{className:"text-foreground/80",children:"Approximate aggregation IS the streaming algorithm pattern."})," HLL, quantile sketches, theta sketches are streaming algorithms — they process each event once + maintain O(1) memory state regardless of input size. Druid's structural insight is that these algorithms are perfect for OLAP — you can pre-compute them during ingestion (per segment) + combine across segments (HLL union is merge). The result: 'unique users last hour' on 1B events = sub-second because the query only merges HLL sketches (one per segment), not the raw events. This is the same pattern as streaming aggregators (Flink, Kafka Streams) — Druid applies it to OLAP segments."]}),(0,r.jsxs)("p",{children:[(0,r.jsx)("strong",{className:"text-foreground/80",children:"Druid IS the trade-off of time-series-first vs dimensional generality."})," Druid chose time as the primary axis — optimal for time-series workloads (Netflix, Airbnb, IoT), suboptimal for dimensional generality (where time isn't the dominant filter). Pinot chose dimensions-first with the star-tree — optimal for ad-tech dashboards, suboptimal for time-series. The deeper insight: there is no universally best OLAP layout; the choice depends on the workload. Druid is the right tool when 90%+ of queries have a time-range filter; Pinot is the right tool when dimensional GROUP BY dominates. Both are correct — they serve different workloads."]})]})}),(0,r.jsxs)(v.S,{pageTitle:"Apache Druid",children:[(0,r.jsx)(v.P,{title:"Apache Druid IS part of a larger system — no page stands alone",connectedTo:"ADR-001 (platform architecture)",children:(0,r.jsx)("p",{children:"This page about Apache Druid is not an isolated reference — it's a node in a graph. The platform's thesis is that the same math appears across genomics, fintech, maritime, and audio. Apache Druid connects to the elegant-code cards via shared equations, and to the living-equation pages via live demos. The reader who arrives here looking for facts leaves with a map of where Apache Druid sits in the computational-science landscape."})}),(0,r.jsx)(v.P,{title:"The technology will change; the math won't",connectedTo:"ADR-055 (cross-disciplinary scope)",children:(0,r.jsx)("p",{children:"In a decade, the specific tools on this page (Apache Druid) may be replaced. But the underlying mathematics — the equations, the distributions, the optimisation rules — will be the same. SVD was invented in 1873 and still runs on NumPy today. Attention was described in 2017 and will run on whatever replaces PyTorch. The platform invests in the MATH, not the tools, because the math is the part that survives technology turnover."})}),(0,r.jsx)(v.P,{title:"The fold pattern respects the reader's attention",connectedTo:"ADR-050 (fold-section architecture)",children:(0,r.jsx)("p",{children:"This page has fold sections (collapsed by default) that reveal deeper content on demand — equation family comparisons, LaTeX derivations, production patterns, expected outputs, and citations. The basic content is visible immediately; the deeper phases are there when the reader is ready. Progressive disclosure isn't just UX — it's epistemological. A reader who wants the summary gets it; a reader who wants the derivation clicks to expand. Both are served by the same page."})}),(0,r.jsx)(v.P,{title:"The output IS the proof — not just the equation",connectedTo:"ADR-034 (ESM-2 + AlphaFold2 adoption)",children:(0,r.jsx)("p",{children:"Where this page has interactive demos (Pyodide + sliders + charts), the visual output IS the argument. Seeing a chart update as you drag a slider communicates the math in a way no formula can. The brain's pattern-recognition system processes the visual output faster than the verbal/analytical pathway. That's why the platform pairs every equation with a live demo — the output plays to a different level of the brain than the prose."})}),(0,r.jsx)(v.P,{title:"In a decade, this page will evolve — and that's the point",connectedTo:"ADR-022 (pgvector for variant embeddings)",children:(0,r.jsx)("p",{children:"The datasets, libraries, and tools on this page will be updated as technology evolves. The 1000-Genomes Project will become the 10M-Genomes Project. NumPy may be replaced by a WebGPU-native array library. PyTorch may give way to a successor. But the math — SVD, Attention, Poisson, FFT, Bayes, Kalman, GBM — will be the same. The platform is designed for this evolution: the equations are the anchor, the tools are the amplifier, and the fold sections let us update the tools without rewriting the page."})})]}),(0,r.jsx)(p.a,{topics:[{id:"pinot",reason:"Sibling real-time OLAP (LinkedIn origin)"},{id:"iceberg",reason:"Open table format — Druid segment vs Iceberg manifest"},{id:"streaming",reason:"Kafka + Druid supervisor pattern"},{id:"modern-big-data",reason:"OLAP engine comparison landscape"},{id:"arrow",reason:"Columnar format underneath Druid segments"},{id:"databricks",reason:"Spark as Druid batch segment builder"}]}),(0,r.jsx)(c.R,{pageId:"druid"}),(0,r.jsx)(u.B,{pageId:"druid"}),(0,r.jsx)(l.T,{relatedPages:[{id:"connections",reason:"Trace this topic's connections across the platform's math graph"},{id:"pinot",reason:"Sibling real-time OLAP (LinkedIn origin)"},{id:"iceberg",reason:"Open table format — Druid segment vs Iceberg manifest"}]}),(0,r.jsxs)("div",{className:"flex flex-wrap gap-2",children:[(0,r.jsx)(a(),{href:(0,y.ZJ)("pinot"),className:"text-sm text-primary hover:underline",children:"→ Apache Pinot (sibling real-time OLAP)"}),(0,r.jsx)("span",{className:"text-muted-foreground",children:"\xb7"}),(0,r.jsx)(a(),{href:(0,y.ZJ)("iceberg"),className:"text-sm text-primary hover:underline",children:"→ Apache Iceberg (open table format)"}),(0,r.jsx)("span",{className:"text-muted-foreground",children:"\xb7"}),(0,r.jsx)(a(),{href:(0,y.ZJ)("streaming"),className:"text-sm text-primary hover:underline",children:"→ Streaming (Kafka + Druid supervisor)"}),(0,r.jsx)("span",{className:"text-muted-foreground",children:"\xb7"}),(0,r.jsx)(a(),{href:(0,y.ZJ)("modern-big-data"),className:"text-sm text-primary hover:underline",children:"→ Modern Big Data landscape (OLAP comparison)"})]})]})}},21362:(e,t,s)=>{"use strict";s.d(t,{A:()=>r});let r=(0,s(6404).A)("chevron-right",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]])},22164:(e,t,s)=>{"use strict";s.d(t,{A:()=>r});let r=(0,s(6404).A)("external-link",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]])},26075:(e,t,s)=>{"use strict";s.d(t,{A:()=>r});let r=(0,s(6404).A)("boxes",[["path",{d:"M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z",key:"lc1i9w"}],["path",{d:"m7 16.5-4.74-2.85",key:"1o9zyk"}],["path",{d:"m7 16.5 5-3",key:"va8pkn"}],["path",{d:"M7 16.5v5.17",key:"jnp8gn"}],["path",{d:"M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z",key:"8zsnat"}],["path",{d:"m17 16.5-5-3",key:"8arw3v"}],["path",{d:"m17 16.5 4.74-2.85",key:"8rfmw"}],["path",{d:"M17 16.5v5.17",key:"k6z78m"}],["path",{d:"M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z",key:"1xygjf"}],["path",{d:"M12 8 7.26 5.15",key:"1vbdud"}],["path",{d:"m12 8 4.74-2.85",key:"3rx089"}],["path",{d:"M12 13.5V8",key:"1io7kd"}]])},30971:(e,t,s)=>{"use strict";s.d(t,{A:()=>r});let r=(0,s(6404).A)("workflow",[["rect",{width:"8",height:"8",x:"3",y:"3",rx:"2",key:"by2w9f"}],["path",{d:"M7 11v4a2 2 0 0 0 2 2h4",key:"xkn7yn"}],["rect",{width:"8",height:"8",x:"13",y:"13",rx:"2",key:"1cgmvn"}]])},33210:(e,t,s)=>{"use strict";s.d(t,{A:()=>r});let r=(0,s(6404).A)("x",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]])},44478:(e,t,s)=>{"use strict";s.d(t,{A:()=>r});let r=(0,s(6404).A)("shield-check",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]])},50538:(e,t,s)=>{"use strict";s.d(t,{A:()=>r});let r=(0,s(6404).A)("history",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]])},53961:(e,t,s)=>{"use strict";s.d(t,{A:()=>r});let r=(0,s(6404).A)("zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]])},60508:(e,t,s)=>{"use strict";s.d(t,{R:()=>v});var r=s(95155),i=s(12115),a=s(45160),n=s(89239),o=s(66349),d=s(85404),l=s(58381),c=s(79275),u=s(48368),h=s(22164),m=s(86901),p=s(89123),g=s(21628),x=s(98500),y=s.n(x),f=s(85757);function v({pageId:e}){let t=(0,c.C6)(e);return 0===t.length?null:(0,r.jsxs)(l.iv,{title:"Recent research (2023-2025)",description:"Modern papers that extend the math, code, and tools on this page.",icon:(0,r.jsx)(u.A,{className:"h-5 w-5"}),badge:`${t.length} paper${1===t.length?"":"s"}`,badgeVariant:"outline",contentClassName:"space-y-4",children:[t.map((e,t)=>(0,r.jsx)(b,{entry:e},t)),(0,r.jsxs)("p",{className:"text-[11px] text-muted-foreground italic",children:[t.length," paper",1===t.length?"":"s"," mapped to this page. Each shows the key algorithm + expected output (rendered as charts when the code produces JSON). Run the code in-browser via Pyodide."]})]})}function b({entry:e}){let[t,s]=(0,i.useState)(!1),[l,c]=(0,i.useState)(null);return(0,r.jsxs)("div",{className:"rounded-lg border border-border/60 p-4 space-y-3 hover:border-primary/30 transition-colors",children:[(0,r.jsxs)("div",{className:"space-y-1",children:[(0,r.jsxs)("div",{className:"flex items-start justify-between gap-3",children:[(0,r.jsx)("h4",{className:"text-sm font-semibold leading-tight flex-1",children:e.paperTitle}),(0,r.jsx)(a.E,{variant:"outline",className:"text-[10px] shrink-0",children:e.venue})]}),(0,r.jsxs)("p",{className:"text-[11px] text-muted-foreground",children:[e.authors," \xb7 ",e.year]}),e.arxivId&&(0,r.jsxs)("a",{href:`https://arxiv.org/abs/${e.arxivId}`,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-1 text-[11px] text-primary hover:underline",children:[(0,r.jsx)(h.A,{className:"h-3 w-3"}),"arXiv:",e.arxivId]}),e.doi&&!e.arxivId&&(0,r.jsxs)("a",{href:`https://doi.org/${e.doi}`,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-1 text-[11px] text-primary hover:underline",children:[(0,r.jsx)(h.A,{className:"h-3 w-3"}),"DOI:",e.doi]})]}),(0,r.jsx)("p",{className:"text-[12px] text-muted-foreground leading-relaxed",children:e.abstract}),(0,r.jsxs)(n.$,{variant:"outline",size:"sm",onClick:()=>s(!t),className:"h-7 text-[11px] gap-1.5",children:[(0,r.jsx)(m.A,{className:"h-3 w-3"}),t?"Hide expected code":"Show expected code + visualization"]}),t&&(0,r.jsxs)("div",{className:"space-y-2",children:[(0,r.jsx)(o.l,{code:e.expectedCode,buttonLabel:"Run in browser",onOutput:e=>{try{let t=e.indexOf("{"),s=e.lastIndexOf("}");if(t>=0&&s>t){let r=e.substring(t,s+1);c(JSON.parse(r))}}catch{}},hideTextOutput:!!l,compact:!0}),l?(0,r.jsxs)("div",{className:"space-y-2",children:[(0,r.jsxs)("div",{className:"flex items-center gap-1.5",children:[(0,r.jsx)(p.A,{className:"h-3.5 w-3.5 text-primary"}),(0,r.jsx)("p",{className:"text-[10px] uppercase tracking-wider text-muted-foreground",children:"Visualization (rendered from code output)"})]}),(0,r.jsx)(d.D,{data:l,accent:"oklch(0.65 0.18 250)",sourceCode:e.expectedCode})]}):(0,r.jsxs)("div",{className:"rounded-md border border-primary/20 bg-primary/5 p-2.5",children:[(0,r.jsx)("p",{className:"text-[10px] uppercase tracking-wider text-muted-foreground mb-1",children:"Expected output"}),(0,r.jsx)("pre",{className:"text-[11px] font-mono whitespace-pre-wrap leading-relaxed",children:e.expectedOutput})]}),(0,r.jsxs)("div",{className:"rounded-md border border-emerald-500/30 bg-emerald-500/5 p-2.5",children:[(0,r.jsx)("p",{className:"text-[10px] uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-1",children:"Key insight"}),(0,r.jsx)("p",{className:"text-[12px] text-foreground/80 leading-relaxed",children:e.keyInsight})]})]}),(0,r.jsxs)(y(),{href:(0,f.ZJ)("analytics-outputs"),className:"inline-flex items-center gap-1 text-[11px] text-primary hover:underline",children:["See this math visualized on Analytics Outputs ",(0,r.jsx)(g.A,{className:"h-3 w-3"})]})]})}},65576:(e,t,s)=>{"use strict";s.d(t,{A:()=>r});let r=(0,s(6404).A)("cpu",[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]])},66088:(e,t,s)=>{"use strict";s.d(t,{A:()=>r});let r=(0,s(6404).A)("chevron-down",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]])},67635:(e,t,s)=>{"use strict";s.d(t,{A:()=>r});let r=(0,s(6404).A)("copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]])},69260:(e,t,s)=>{"use strict";s.d(t,{A:()=>r});let r=(0,s(6404).A)("network",[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]])},76498:(e,t,s)=>{"use strict";s.d(t,{A:()=>r});let r=(0,s(6404).A)("dollar-sign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]])},81094:(e,t,s)=>{Promise.resolve().then(s.bind(s,18861))},86901:(e,t,s)=>{"use strict";s.d(t,{A:()=>r});let r=(0,s(6404).A)("sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]])},90718:(e,t,s)=>{"use strict";s.d(t,{A:()=>r});let r=(0,s(6404).A)("brain",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]])},94514:(e,t,s)=>{"use strict";s.d(t,{A:()=>r});let r=(0,s(6404).A)("check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]])},97810:(e,t,s)=>{"use strict";s.d(t,{A:()=>r});let r=(0,s(6404).A)("book-open",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]])}},e=>{e.O(0,[6919,8500,9430,3493,9760,7591,6012,9237,4843,1164,9620,6722,5404,9275,2194,7860,9689,9969,8441,3794,7358],()=>e(e.s=81094)),_N_E=e.O()}]);