(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6069],{4069:(e,a,t)=>{"use strict";t.d(a,{A:()=>s});let s=(0,t(6404).A)("file-warning",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]])},8195:(e,a,t)=>{"use strict";t.d(a,{A:()=>s});let s=(0,t(6404).A)("database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]])},9199:(e,a,t)=>{"use strict";t.d(a,{A:()=>s});let s=(0,t(6404).A)("rotate-ccw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]])},21975:(e,a,t)=>{"use strict";t.d(a,{A:()=>s});let s=(0,t(6404).A)("upload",[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]])},22164:(e,a,t)=>{"use strict";t.d(a,{A:()=>s});let s=(0,t(6404).A)("external-link",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]])},26075:(e,a,t)=>{"use strict";t.d(a,{A:()=>s});let s=(0,t(6404).A)("boxes",[["path",{d:"M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z",key:"lc1i9w"}],["path",{d:"m7 16.5-4.74-2.85",key:"1o9zyk"}],["path",{d:"m7 16.5 5-3",key:"va8pkn"}],["path",{d:"M7 16.5v5.17",key:"jnp8gn"}],["path",{d:"M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z",key:"8zsnat"}],["path",{d:"m17 16.5-5-3",key:"8arw3v"}],["path",{d:"m17 16.5 4.74-2.85",key:"8rfmw"}],["path",{d:"M17 16.5v5.17",key:"k6z78m"}],["path",{d:"M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z",key:"1xygjf"}],["path",{d:"M12 8 7.26 5.15",key:"1vbdud"}],["path",{d:"m12 8 4.74-2.85",key:"3rx089"}],["path",{d:"M12 13.5V8",key:"1io7kd"}]])},33210:(e,a,t)=>{"use strict";t.d(a,{A:()=>s});let s=(0,t(6404).A)("x",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]])},33591:(e,a,t)=>{"use strict";t.d(a,{A:()=>s});let s=(0,t(6404).A)("code-xml",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]])},34412:(e,a,t)=>{"use strict";t.d(a,{BigQueryAdvancedPage:()=>I});var s=t(95155),r=t(98500),i=t.n(r),n=t(58381),o=t(87069),c=t(75041),l=t(27774),d=t(60508),h=t(92194),m=t(19776),p=t(49345),u=t(85757),g=t(45160),y=t(83036),x=t(86901),b=t(8195),f=t(53961),v=t(33024),_=t(26075);let k=[{label:"BI Engine speedup",value:"~1000\xd7",hint:"in-memory columnar cache for repeated queries vs cold scan",deltaTone:"flat"},{label:"BigLake format",value:"Iceberg",hint:"open table format on GCS, BigQuery metadata, external engines read same data",deltaTone:"flat"},{label:"BQML model types",value:"50+",hint:"CREATE MODEL in SQL — ARIMA_PLUS, DNN_CLASSIFIER, KMEANS, BOOSTED_TREE etc.",deltaTone:"flat"},{label:"Vector Search recall",value:"~95%",hint:"HNSW index, sub-second on billion-vector tables (same math as card 50)",deltaTone:"flat"}],S=[{num:1,name:"BI Engine",dbAnalogue:"Snowflake Result Cache + Databricks Photon + Delta Cache",color:"text-emerald-400",desc:"In-memory columnar cache for repeated queries. Sub-second latency on dashboards. Combines the best of Snowflake Result Cache (24h, per-user, query-level) and Databricks Delta Cache (per-node, persistent) — BigQuery's variant is per-reservation, shared across queries/users in the same project.",focus:"in-memory acceleration",math:"T_hit / T_cold ≈ 1000\xd7"},{num:2,name:"BigLake",dbAnalogue:"Databricks Delta (open spec) + Snowflake Polaris (Iceberg catalog)",color:"text-violet-400",desc:"Iceberg-on-GCS with BigQuery metadata. Open table format — BigQuery reads it natively; Spark, Trino, Flink can read the same Iceberg tables via the BigLake catalog. Google's bet: be format-agnostic (Iceberg + Delta + Parquet + Avro) and the warehouse wins by being the easiest place to query.",focus:"open format access",math:"table_state = fold(apply, ∅, Iceberg_manifest_log)"},{num:3,name:"BigQuery ML (BQML)",dbAnalogue:"Databricks MLflow + Snowflake Snowpark",color:"text-sky-400",desc:"Train ML models in SQL via CREATE MODEL. ~50+ model types: ARIMA_PLUS (time-series), DNN_CLASSIFIER (deep learning), KMEANS (clustering), BOOSTED_TREE_CLASSIFIER (XGBoost), ARIMA (forecasting). Lowest-barrier ML platform for analytics engineers — no Python, no notebooks, just SQL.",focus:"SQL-as-ML-tooling",math:"M̂ = argmin_θ L(X_train, θ) — in SQL"},{num:4,name:"BigQuery Vector Search + ANN",dbAnalogue:"pgvector HNSW + FAISS HNSW + Milvus HNSW (ConceptCard #50)",color:"text-amber-400",desc:"VECTOR_SEARCH() function + CREATE VECTOR INDEX (HNSW internally). Same HNSW math as ConceptCard 50 — greedy walk through a navigable small-world graph. Sub-second on billion-vector tables. Same algorithm as pgvector/FAISS/Milvus; different productization (SQL-native, serverless).",focus:"ANN search",math:"recall@k ≈ 1 - O(1/ln(N))"}],E=[{symbol:"BI Engine: T_hit / T_cold",code:"ALTER BI_CAPACITY reservation_id.reservation_name OPTIONS (size = 'LARGE')",explanation:"BI Engine is an in-memory columnar cache attached to a BigQuery reservation. Repeated queries hit the cache → sub-second latency. Cold scan: ~seconds. Ratio ≈ 1000\xd7 on dashboard workloads."},{symbol:"BI Engine cache placement",code:"SELECT ... FROM table_with_bi_cache — automatic",explanation:"Cache is per-reservation (shared across queries/users in the same project). Contrast Snowflake Result Cache (per-user, 24h TTL) and Databricks Delta Cache (per-worker, persistent across query)."},{symbol:"BigLake: format-agnostic",code:"CREATE EXTERNAL TABLE t WITH CONNECTION ... WITH FORMAT 'ICEBERG'",explanation:"BigLake unifies access: BigQuery reads Iceberg tables on GCS via BigQuery metadata. Spark/Trino/Flink read the same Iceberg tables via BigLake catalog. No data duplication."},{symbol:"BQML: CREATE MODEL",code:"CREATE MODEL m FROM t OPTIONS(model_type='DNN_CLASSIFIER')",explanation:"BQML trains ML models in SQL — no Python, no notebooks, no MLflow registry. Same train/test split + loss-minimization math as scikit-learn / PyTorch, but expressed in SQL."},{symbol:"BQML: ARIMA_PLUS",code:"CREATE OR REPLACE MODEL m OPTIONS(model_type='ARIMA_PLUS', ...) AS SELECT ts, value FROM t",explanation:"ARIMA_PLUS = state-space time-series model with automatic seasonal decomposition + holiday + trend changepoint detection. Same math as Prophet / statsmodels SARIMAX, but in SQL."},{symbol:"HNSW search (card 50)",code:"CREATE VECTOR INDEX idx ON t(embedding) OPTIONS(index_type='VECTOR_INDEX')",explanation:"BigQuery Vector Index uses HNSW (Hierarchical Navigable Small World) — same algorithm as ConceptCard 50, pgvector HNSW, FAISS HNSW, Milvus HNSW. Greedy walk through layered graph; recall@k ≈ 1 - O(1/ln(N))."},{symbol:"VECTOR_SEARCH (SQL-native KNN)",code:"SELECT * FROM VECTOR_SEARCH( TABLE t, 'embedding', (SELECT embedding FROM queries), top_k => 10)",explanation:"SQL-native ANN search: pass a query embedding, get top-k nearest neighbors. Uses the HNSW index under the hood. Same algorithm as pgvector '<=> ORDER BY ... LIMIT k' but serverless + scale."}],N=`-- ============================================================
-- BigQuery Advanced — BI Engine + BigLake + BQML + Vector Search
-- The 4 advanced primitives, all in one SQL file.
-- ============================================================

-- 1. BI ENGINE (in-memory columnar cache for repeated queries)
--    = Snowflake Result Cache + Databricks Photon + Delta Cache combined
ALTER PROJECT \`my-project\` SET OPTIONS (
  -- reservation for BI Engine capacity (shares with all queries in project)
  -- BI Engine size: SMALL/MEDIUM/LARGE — corresponds to in-memory cache size
);
-- Once enabled, BI Engine automatically caches hot data across queries.
-- Repeated dashboard queries hit the cache → sub-second latency.
-- Cold scan: ~seconds. Cache hit: ~1000\xd7 speedup.
-- Compare Snowflake:
--   Result Cache — 24h TTL, per-user (each user has own cache)
-- Compare Databricks:
--   Delta Cache — per-worker, persistent across query (one query, multiple scans)
-- BigQuery's BI Engine: per-reservation, shared across queries/users
-- (project-level — like an in-memory materialized view shared by everyone).

-- 2. BIGLAKE (Iceberg-on-GCS with BigQuery metadata)
--    = Databricks Delta (open spec) + Snowflake Polaris (Iceberg catalog)
CREATE EXTERNAL TABLE \`my-project.dataset.iceberg_orders\`
WITH CONNECTION \`my-project.us.my-connection\`
OPTIONS (
  format = 'ICEBERG',
  catalog = 'biglake.my-catalog',
  table = 'orders'
);
-- BigLake unifies access: BigQuery reads the Iceberg table natively;
-- Spark, Trino, Flink can read the SAME Iceberg table via the BigLake
-- catalog (open REST API, Apache Iceberg spec). No data duplication.
-- Compare Databricks:
--   CREATE TABLE orders USING DELTA;  -- Delta format (open spec, but
--   -- separate from Iceberg). Unity catalog is the metadata service.
--   -- UniForm can emit Iceberg metadata for Delta tables (one-way).
-- Compare Snowflake:
--   CREATE CATALOG polaris EXTERNAL_VOLUME ... ;  -- Iceberg native,
--   -- Snowflake reads Iceberg tables on S3/GCS via Polaris catalog.
-- BigLake's differentiator: format-agnostic (Iceberg + Delta + Parquet
-- + Avro) AND cross-engine (BigQuery + Spark + Trino + Flink).

-- 3. BIGQUERY ML (BQML) — train ML models in SQL
--    = Databricks MLflow + Snowflake Snowpark (50+ model types)
-- 3a. Logistic regression (binary classifier)
CREATE OR REPLACE MODEL \`my-project.dataset.churn_model\`
OPTIONS(
  model_type = 'LOGISTIC_REG',
  auto_class_weights = TRUE
) AS
SELECT * FROM \`my-project.dataset.training_data\` WHERE split = 'train';
-- 3b. DNN classifier (deep learning, in SQL — no PyTorch, no Keras)
CREATE OR REPLACE MODEL \`my-project.dataset.dnn_model\`
OPTIONS(
  model_type = 'DNN_CLASSIFIER',
  hidden_units = [128, 64, 32],
  activation_fn = 'RELU',
  dropout = 0.2,
  learn_rate = 0.001,
  max_steps = 1000
) AS
SELECT features, label FROM \`my-project.dataset.training_data\`;
-- 3c. ARIMA_PLUS (time-series forecasting with seasonal decomposition)
CREATE OR REPLACE MODEL \`my-project.dataset.sales_forecast\`
OPTIONS(
  model_type = 'ARIMA_PLUS',
  auto_arima = TRUE,
  data_frequency = 'DAILY_FREQUENCY',
  horizon = 30,
  decompose_time_series = TRUE
) AS
SELECT date_col AS ds, sales AS value FROM \`my-project.dataset.daily_sales\`;
-- 3d. KMEANS clustering
CREATE OR REPLACE MODEL \`my-project.dataset.customer_segments\`
OPTIONS(model_type = 'KMEANS', num_clusters = 5) AS
SELECT * FROM \`my-project.dataset.customer_features\`;
-- 3e. Predict with the model — pure SQL, no UDF
SELECT predicted_label, predicted_probability
FROM ML.PREDICT(MODEL \`my-project.dataset.churn_model\`,
  (SELECT * FROM \`my-project.dataset.holdout_data\`));
-- Compare Databricks:
--   import mlflow; mlflow.sklearn.log_model(...)  -- Python-first,
--   -- MLflow is the registry. Spark MLlib for SQL-callable models.
-- Compare Snowflake:
--   CREATE FUNCTION predict(...) RETURNS FLOAT LANGUAGE PYTHON ...;
--   -- Snowpark Python UDFs call scikit-learn / PyTorch — more flexible
--   -- but more operational overhead (BYO Python, deploy UDF).
-- BQML's differentiator: lowest-barrier — SQL-as-ML-tooling, no Python
-- needed. Best for analytics engineers (SQL-fluent, Python-light).

-- 4. BIGQUERY VECTOR SEARCH + ANN (HNSW — same math as card 50)
--    = pgvector HNSW + FAISS HNSW + Milvus HNSW
-- 4a. Create a vector index (HNSW under the hood)
CREATE OR REPLACE VECTOR INDEX \`my-doc-idx\`
ON \`my-project.dataset.documents\`(embedding)
OPTIONS(
  index_type = 'VECTOR_INDEX',
  distance_type = 'COSINE',
  tree_depth = 5,  -- HNSW layer depth
  num_leaves = 1000  -- leaf count at deepest layer
);
-- 4b. VECTOR_SEARCH — SQL-native ANN query
SELECT query.id AS query_id, base.id AS doc_id, distance
FROM VECTOR_SEARCH(
  TABLE \`my-project.dataset.documents\`,
  'embedding',
  (SELECT id, embedding FROM \`my-project.dataset.queries\` LIMIT 10),
  top_k => 10,
  distance_type => 'COSINE'
);
-- HNSW algorithm: greedy walk through a layered navigable small-world
-- graph. Each layer is a coarse approximation of the next; queries
-- descend layers, narrowing the candidate set. recall@k ≈ 1 - O(1/ln(N)).
-- Compare pgvector:
--   CREATE INDEX ON docs USING hnsw (embedding vector_cosine_ops);
--   SELECT id FROM docs ORDER BY embedding <=> query LIMIT 10;
-- Compare Milvus / FAISS:
--   collection.create_index(field='embedding', index_type='HNSW',
--   metric_type='COSINE');  -- Python API, not SQL
-- BigQuery's differentiator: SQL-native + serverless — no cluster
-- management, no separate vector DB deployment, scale to billions.`,w=`# ============================================================
# BI Engine cache simulation — repeated queries hit in-memory cache
# ~1000x speedup vs cold scan on dashboard workloads
# Compare: Snowflake Result Cache (per-user, 24h TTL),
#          Databricks Delta Cache (per-worker, persistent)
#          BigQuery BI Engine (per-reservation, shared across project)
# ============================================================
import random, json

random.seed(42)

# Simulate a dashboard workload: 200 queries over 1 hour
# Most are repeats (top-20 dashboards) — typical BI pattern.
N_QUERIES = 200
N_UNIQUE_DASHBOARDS = 20  # 20 unique queries, repeated across users

# Each query has: cold_scan_time_ms (uncached), warm_cache_time_ms (BI Engine)
# Realistic numbers: cold scan on 100GB = ~5s; cache hit on 1GB hot data = ~5ms
def cold_scan_ms(query_id):
    # simulate parquet scan + network + shuffle: 3000-8000ms
    return random.randint(3000, 8000)

def warm_cache_ms():
    # BI Engine: in-memory columnar scan, ~1ms to ~10ms
    return random.randint(1, 10)

# 3 cache strategies:
# 1. NO cache — every query does full scan
# 2. Per-user cache (Snowflake Result Cache model): each user has own cache
#    Cache hits only if same user re-runs same query within TTL.
# 3. Shared reservation cache (BigQuery BI Engine model): all queries/users
#    share one cache. Cache hits whenever same query was run recently.

# Simulate: 50 users, each runs 4 queries; 80% repeat queries (from top-20 dashboards).
users = [f"user_{u}" for u in range(50)]
queries = [f"dash_{random.randint(0, N_UNIQUE_DASHBOARDS-1)}" for _ in range(N_QUERIES)]
query_users = random.choices(users, k=N_QUERIES)

# Strategy 1: No cache — every query does full scan
total_no_cache = sum(cold_scan_ms(q) for q in queries)

# Strategy 2: Per-user cache (Snowflake Result Cache)
per_user_cache = {}  # (user, query) -> timestamp of last run
TTL_HOURS = 24
total_per_user = 0
hits_per_user, misses_per_user = 0, 0
for u, q in zip(query_users, queries):
    key = (u, q)
    if key in per_user_cache:
        # cache hit
        total_per_user += warm_cache_ms()
        hits_per_user += 1
    else:
        total_per_user += cold_scan_ms(q)
        per_user_cache[key] = True
        misses_per_user += 1

# Strategy 3: Shared reservation cache (BigQuery BI Engine)
shared_cache = set()  # query_id -> cached (BI Engine is shared across users)
total_bi_engine = 0
hits_bi, misses_bi = 0, 0
# BI Engine has capacity limit — let's say it caches top-20 hottest dashboards
CAPACITY = 20
cache_order = []  # FIFO eviction if full
for q in queries:
    if q in shared_cache:
        total_bi_engine += warm_cache_ms()
        hits_bi += 1
    else:
        total_bi_engine += cold_scan_ms(q)
        if len(shared_cache) >= CAPACITY:
            evicted = cache_order.pop(0)
            shared_cache.discard(evicted)
        shared_cache.add(q)
        cache_order.append(q)
        misses_bi += 1

avg_no_cache = total_no_cache / N_QUERIES
avg_per_user = total_per_user / N_QUERIES
avg_bi_engine = total_bi_engine / N_QUERIES

print(json.dumps({
    "chart_type": "bar",
    "title": "BI Engine cache hit ratio — BigQuery shared vs Snowflake per-user vs no cache",
    "series": [
        {"name": "avg query latency (ms, lower = better)", "data": [
            {"x": "no cache (cold scan)", "y": round(avg_no_cache, 1)},
            {"x": "Snowflake per-user cache", "y": round(avg_per_user, 1)},
            {"x": "BigQuery BI Engine (shared)", "y": round(avg_bi_engine, 1)},
        ]},
        {"name": "cache hit count (of 200 queries)", "data": [
            {"x": "no cache (cold scan)", "y": 0},
            {"x": "Snowflake per-user cache", "y": hits_per_user},
            {"x": "BigQuery BI Engine (shared)", "y": hits_bi},
        ]},
    ],
    "x_label": "cache strategy", "y_label": "avg latency (ms) or hit count",
    "stats": [
        {"label": "BigQuery vs Snowflake", "value": "SAME math (LRU + TTL) — different sharing scope"},
        {"label": "BigQuery sharing scope", "value": "per-reservation (shared across project users)"},
        {"label": "Snowflake sharing scope", "value": "per-user (each user has own cache, 24h TTL)"},
        {"label": "Databricks comparison", "value": "Delta Cache: per-worker (persistent, not shared across users)"},
        {"label": "BI Engine capacity", "value": "in-memory columnar cache (GB-scale per reservation)"},
        {"label": "Snowflake TTL", "value": "24h (cached result discarded after 24h of inactivity)"},
        {"label": "Cache hit speedup target", "value": "~1000x (cold scan ~5s, cache hit ~5ms)"},
        {"label": "Total queries simulated", "value": f"{N_QUERIES} (across {len(users)} users, {N_UNIQUE_DASHBOARDS} unique)"},
        {"label": "No cache — total latency", "value": f"{total_no_cache:,} ms ({avg_no_cache:.0f} ms/query avg)"},
        {"label": "Per-user cache — total latency", "value": f"{total_per_user:,} ms (hit ratio: {hits_per_user/N_QUERIES*100:.0f}%)"},
        {"label": "BI Engine — total latency", "value": f"{total_bi_engine:,} ms (hit ratio: {hits_bi/N_QUERIES*100:.0f}%)"},
        {"label": "BI Engine vs no cache", "value": f"{total_no_cache/max(total_bi_engine,1):.0f}x speedup (the ~1000x claim, workload-dependent)"},
    ],
    "summary": "BigQuery BI Engine and Snowflake Result Cache are the SAME math (LRU eviction + TTL on cached query results), with different sharing scope. Snowflake: per-user (each user has own 24h cache — cache hits only when the SAME user re-runs the SAME query). BigQuery: per-reservation (all users in the same project share one cache — any user's query warms the cache for everyone). Databricks Delta Cache sits between: per-worker (one query's scans are cached for re-scans within the same query, but not across queries). The math is LRU + TTL; the productization choice is the sharing scope. For BI dashboard workloads (where 20 unique dashboards serve 50 users), shared BI Engine achieves ~80-95% hit ratio vs ~30-40% for per-user Result Cache — the 1000x speedup is workload-dependent but achievable on the right pattern."
}))`,A=`# ============================================================
# BigLake vs Delta vs Iceberg — same data, three formats compared
# All three implement the same math: S_N = fold(apply, empty, manifest_log)
# The productization differs: format spec, catalog, ACID guarantees.
# ============================================================
import random, json

random.seed(42)

# Simulate 1 million rows in 1000 files (~1000 rows/file)
N_ROWS = 1_000_000
N_FILES = 1000
ROWS_PER_FILE = N_ROWS // N_FILES

# Each format has different metadata overhead + scan profile
# Numbers below are realistic ballparks (your mileage will vary)

# Format 1: BigLake (Iceberg-on-GCS with BigQuery metadata)
# - Manifest: Iceberg manifest files (one per partition) + snapshot log
# - Catalog: BigLake REST catalog (open spec, Apache Iceberg-compatible)
# - ACID: snapshot isolation, time-travel, schema evolution
# - External engine access: Spark/Trino/Flink read same Iceberg tables
biglake = {
    "format": "Iceberg (via BigLake catalog)",
    "storage_cost_per_tb_month": 23.0,  # GCS standard
    "metadata_overhead_pct": 0.5,  # manifest files + snapshot log
    "scan_speed_gbps": 6.0,  # BigQuery scan speed on BigLake
    "external_engine_support": "Spark, Trino, Flink, DuckDB",
    "acid": True,
    "time_travel": True,
    "schema_evolution": True,
    "cross_vendor": "open (Apache Iceberg spec)",
}

# Format 2: Databricks Delta (open spec since 2024)
# - Manifest: Delta log (JSON actions + Parquet checkpoints)
# - Catalog: Unity Catalog (proprietary), UniForm emits Iceberg metadata
# - ACID: snapshot isolation, time-travel, schema evolution
# - External engine access: via UniForm (one-way: Delta -> Iceberg metadata)
delta = {
    "format": "Delta Lake (open spec, Unity catalog)",
    "storage_cost_per_tb_month": 23.0,  # S3 standard (Databricks runs on S3)
    "metadata_overhead_pct": 0.8,  # _delta_log JSON + checkpoint parquet
    "scan_speed_gbps": 8.0,  # Photon-accelerated Delta scan
    "external_engine_support": "Via UniForm (Delta -> Iceberg metadata emit)",
    "acid": True,
    "time_travel": True,
    "schema_evolution": True,
    "cross_vendor": "open spec + UniForm bridge",
}

# Format 3: Apache Iceberg (native, no vendor)
# - Manifest: native Iceberg manifest + snapshot log
# - Catalog: Nessie / REST / Hive (any catalog)
# - ACID: full ACID, time-travel, schema evolution
# - External engine access: native (Spark, Trino, Flink, DuckDB, etc.)
iceberg = {
    "format": "Apache Iceberg (native, no vendor)",
    "storage_cost_per_tb_month": 23.0,  # S3/GCS/Azure same price tier
    "metadata_overhead_pct": 0.6,  # manifest + snapshot files
    "scan_speed_gbps": 4.0,  # depends on engine (Trino slower than BigQuery)
    "external_engine_support": "Spark, Trino, Flink, DuckDB, PolarDB, etc.",
    "acid": True,
    "time_travel": True,
    "schema_evolution": True,
    "cross_vendor": "fully open (Apache project)",
}

# Scan a 100GB table — measure: scan time, cost, ACID guarantee
TABLE_SIZE_GB = 100
TABLE_SIZE_TB = TABLE_SIZE_GB / 1024

def scan(format_dict):
    scan_time_s = TABLE_SIZE_GB / format_dict["scan_speed_gbps"]
    cost_storage_month = TABLE_SIZE_TB * format_dict["storage_cost_per_tb_month"]
    cost_metadata_month = cost_storage_month * format_dict["metadata_overhead_pct"] / 100
    return {
        "scan_time_s": round(scan_time_s, 2),
        "storage_cost_usd_month": round(cost_storage_month, 2),
        "metadata_cost_usd_month": round(cost_metadata_month, 2),
        "acid_guarantee": "yes" if format_dict["acid"] else "no",
        "external_engines": format_dict["external_engine_support"],
    }

biglake_scan = scan(biglake)
delta_scan = scan(delta)
iceberg_scan = scan(iceberg)

# Format-agnostic access: same Iceberg table read by 4 engines
# Compare: BigLake (BigQuery + Spark + Trino + Flink) vs native Iceberg
biglake_engines = ["BigQuery", "Spark", "Trino", "Flink"]
iceberg_engines = ["Spark", "Trino", "Flink", "DuckDB"]
delta_engines = ["Databricks Spark only (via UniForm: emits Iceberg for read by others)"]

print(json.dumps({
    "chart_type": "bar",
    "title": "BigLake vs Delta vs Iceberg — same data, three formats compared",
    "series": [
        {"name": "scan time on 100GB (s, lower = better)", "data": [
            {"x": "BigLake (Iceberg via BigQuery)", "y": biglake_scan["scan_time_s"]},
            {"x": "Delta (Databricks Unity)", "y": delta_scan["scan_time_s"]},
            {"x": "Apache Iceberg (native)", "y": iceberg_scan["scan_time_s"]},
        ]},
        {"name": "monthly cost for 100GB table (USD, lower = better)", "data": [
            {"x": "BigLake (Iceberg via BigQuery)", "y": round(biglake_scan["storage_cost_usd_month"] + biglake_scan["metadata_cost_usd_month"], 2)},
            {"x": "Delta (Databricks Unity)", "y": round(delta_scan["storage_cost_usd_month"] + delta_scan["metadata_cost_usd_month"], 2)},
            {"x": "Apache Iceberg (native)", "y": round(iceberg_scan["storage_cost_usd_month"] + iceberg_scan["metadata_cost_usd_month"], 2)},
        ]},
        {"name": "engines that can read this format", "data": [
            {"x": "BigLake (Iceberg via BigQuery)", "y": len(biglake_engines)},
            {"x": "Delta (Databricks Unity)", "y": 1},  # only Databricks Spark directly
            {"x": "Apache Iceberg (native)", "y": len(iceberg_engines)},
        ]},
    ],
    "x_label": "table format", "y_label": "scan time (s) or cost (USD) or engine count",
    "stats": [
        {"label": "BigLake vs Delta vs Iceberg", "value": "SAME math: S_N = fold(apply, empty, manifest_log)"},
        {"label": "All three formats support", "value": "ACID, time-travel, schema evolution"},
        {"label": "Storage cost", "value": "Identical (~$23/TB/month on GCS/S3 standard tier)"},
        {"label": "BigLake scan speed", "value": f"{biglake['scan_speed_gbps']} GB/s (BigQuery's reader)"},
        {"label": "Delta scan speed", "value": f"{delta['scan_speed_gbps']} GB/s (Photon SIMD)"},
        {"label": "Iceberg native scan speed", "value": f"{iceberg['scan_speed_gbps']} GB/s (Trino typical)"},
        {"label": "BigLake external engines", "value": ", ".join(biglake_engines)},
        {"label": "Delta external engines", "value": "UniForm one-way: Delta -> Iceberg metadata emit"},
        {"label": "Iceberg native external engines", "value": ", ".join(iceberg_engines)},
        {"label": "BigQuery reads Iceberg via", "value": "BigLake catalog (REST, Apache Iceberg spec)"},
        {"label": "Databricks reads Iceberg via", "value": "Unity catalog (Iceberg catalog API support since 2024)"},
        {"label": "Snowflake reads Iceberg via", "value": "Polaris catalog (Iceberg native, open spec)"},
        {"label": "Conclusion", "value": "BigLake's bet: format-agnostic + cross-engine wins the open-format battle"},
    ],
    "summary": "BigLake, Delta, and Iceberg implement the same core math: table state is the left-fold of the manifest/snapshot log (S_N = fold(apply, empty, manifest_log)). All three support ACID transactions, time-travel, and schema evolution. The differences are productization: (1) BigLake runs on GCS, uses BigQuery metadata, and explicitly supports Spark/Trino/Flink as equal readers (BigQuery is the easiest place to query, but the format is owned by no one). (2) Delta runs on S3, uses Unity catalog, and emits Iceberg metadata via UniForm (one-way: Delta tables get Iceberg read access, but writes go through Delta). (3) Native Apache Iceberg has no vendor lock-in — any engine can read/write natively. BigLake's strategic bet is to be format-agnostic (Iceberg + Delta + Parquet + Avro) and win the warehouse race by being the easiest place to query any open format. The math is universal; the catalog + reader quality is the differentiator."
}))`;function I(){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.zY,{eyebrow:"Phase 31 \xb7 BigQuery Advanced \xb7 BI Engine + BigLake + BQML + Vector Search",title:"BigQuery Advanced — the 4 serverless primitives that ship with BigQuery",description:"Consolidated deep-dive into 4 advanced BigQuery primitives, completing the cross-vendor triangle with /databricks-advanced/ (Phase 27) and /snowflake-advanced/ (Phase 30). BI Engine (= Snowflake Result Cache + Databricks Photon combined), BigLake (= Iceberg-on-GCS with BigQuery metadata, Google's bet on open formats), BigQuery ML (= SQL-as-ML-tooling, 50+ model types via CREATE MODEL), BigQuery Vector Search + ANN (= HNSW, same math as ConceptCard 50). The same math, different productization — the third vertex of the lakehouse vendor triangle."}),(0,s.jsx)("div",{className:"grid gap-4 md:grid-cols-2 lg:grid-cols-4",children:k.map(e=>(0,s.jsxs)("div",{className:"rounded-xl border border-zinc-200/20 bg-zinc-900/60 p-4 backdrop-blur",children:[(0,s.jsx)("p",{className:"text-[10px] uppercase tracking-wider text-zinc-500 font-medium",children:e.label}),(0,s.jsx)("p",{className:"text-2xl font-bold text-zinc-100 mt-1",children:e.value}),(0,s.jsx)("p",{className:"text-[11px] text-zinc-400 mt-0.5",children:e.hint})]},e.label))}),(0,s.jsx)(n.iv,{title:"The 4 advanced BigQuery primitives — Databricks/Snowflake analogue shown for each",description:"Four primitives, each with explicit cross-vendor analogues. The thesis: the math is universal, the productization differs. When BigQuery's tool evolves (or Google sunsets one), the row gets swapped; the table stands.",icon:(0,s.jsx)(x.A,{className:"h-5 w-5"}),badge:"Cross-vendor",children:(0,s.jsx)("div",{className:"space-y-2",children:S.map(e=>(0,s.jsxs)("div",{className:"flex items-start gap-3 p-3 rounded-md border border-border/40 hover:border-primary/40 hover:bg-primary/3 transition-colors",children:[(0,s.jsx)("div",{className:"flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-primary/10 font-mono text-xs font-bold text-primary",children:e.num}),(0,s.jsxs)("div",{className:"min-w-0 flex-1",children:[(0,s.jsxs)("div",{className:"flex items-center gap-2 flex-wrap",children:[(0,s.jsx)("p",{className:`text-sm font-semibold ${e.color}`,children:e.name}),(0,s.jsx)(g.E,{variant:"outline",className:"text-[10px] gap-1 px-1.5 py-0",children:e.dbAnalogue}),(0,s.jsxs)("span",{className:"text-[10px] text-zinc-500 uppercase tracking-wider",children:["focus: ",e.focus]})]}),(0,s.jsx)("p",{className:"text-xs text-muted-foreground mt-1 leading-relaxed",children:e.desc}),(0,s.jsx)("p",{className:"text-[10px] font-mono text-zinc-500 mt-1",children:e.math})]})]},e.num))})}),(0,s.jsx)(n.iv,{title:"Math → Code mapping — the 7 BigQuery invariants",description:"Each BigQuery primitive maps to a single mathematical invariant. The table shows the symbol, the SQL that implements it, and the conceptual explanation.",icon:(0,s.jsx)(b.A,{className:"h-5 w-5"}),children:(0,s.jsx)("div",{className:"overflow-x-auto",children:(0,s.jsxs)("table",{className:"w-full text-xs",children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{className:"border-b border-border/60 text-[10px] uppercase tracking-wider text-muted-foreground",children:[(0,s.jsx)("th",{className:"text-left px-3 py-2 font-medium",children:"Math symbol"}),(0,s.jsx)("th",{className:"text-left px-3 py-2 font-medium",children:"SQL"}),(0,s.jsx)("th",{className:"text-left px-3 py-2 font-medium",children:"Explanation"})]})}),(0,s.jsx)("tbody",{children:E.map(e=>(0,s.jsxs)("tr",{className:"border-b border-border/20",children:[(0,s.jsx)("td",{className:"px-3 py-2 font-mono text-emerald-400 whitespace-nowrap",children:e.symbol}),(0,s.jsx)("td",{className:"px-3 py-2 font-mono text-sky-400 text-[11px]",children:e.code}),(0,s.jsx)("td",{className:"px-3 py-2 text-muted-foreground",children:e.explanation})]},e.symbol))})]})})}),(0,s.jsx)(n.iv,{title:"BigQuery SQL — the 4 primitives in one code sample",description:"A single SQL file demonstrating all 4 advanced BigQuery primitives: BI Engine, BigLake, BigQuery ML (BQML), BigQuery Vector Search + ANN. Cross-vendor (Databricks + Snowflake) comparison comments inline.",icon:(0,s.jsx)(b.A,{className:"h-5 w-5"}),children:(0,s.jsx)(m.N,{code:N,language:"sql",filename:"bigquery_advanced.sql"})}),(0,s.jsxs)(n.iv,{title:"BI Engine cache hit ratio — BigQuery shared vs Snowflake per-user vs no cache",description:"BI Engine and Snowflake Result Cache are the SAME math (LRU + TTL on cached query results), with different sharing scope. Snowflake: per-user (24h TTL). BigQuery: per-reservation (shared across project users). Databricks Delta Cache: per-worker (one query's scans cached for re-scans within the same query). The math is universal; the sharing scope is the productization choice.",icon:(0,s.jsx)(f.A,{className:"h-5 w-5"}),children:[(0,s.jsxs)("div",{className:"prose prose-sm dark:prose-invert max-w-none",children:[(0,s.jsxs)("p",{className:"text-sm text-muted-foreground leading-relaxed",children:[(0,s.jsx)("strong",{className:"text-foreground/80",children:"Three sharing scopes"}),": (1) ",(0,s.jsx)("em",{children:"No cache"})," — every query does a full scan of the underlying Parquet/Iceberg files. Best case for one-off analytical queries that won't repeat. (2) ",(0,s.jsx)("em",{children:"Per-user cache"})," (Snowflake Result Cache) — each user gets their own 24h cache. Cache hits only when the SAME user re-runs the SAME query within 24h. Hit ratio on typical BI workloads: ~30-40% (many users, each re-running their own dashboards). (3) ",(0,s.jsx)("em",{children:"Shared reservation cache"})," (BigQuery BI Engine) — all users in the same project share one in-memory columnar cache. Any user's query warms the cache for everyone. Hit ratio on typical BI workloads: ~80-95% (the top-20 dashboards serve most users)."]}),(0,s.jsxs)("p",{className:"text-sm text-muted-foreground leading-relaxed",children:[(0,s.jsx)("strong",{className:"text-foreground/80",children:"Why BI Engine's sharing scope wins for BI workloads"}),": dashboards are inherently shared — 20 unique dashboards serve 50+ users. Per-user caches duplicate the same 20 dashboards 50 times (once per user). BI Engine deduplicates: one cache entry per unique dashboard, served to all 50 users. The math is LRU + TTL; the productization choice is the sharing scope. For OLAP-only workloads, BI Engine wins. For ad-hoc analytical queries (one-off, no repeats), per-user Result Cache is cheaper (no reservation needed)."]})]}),(0,s.jsx)("div",{className:"mt-4",children:(0,s.jsx)(m.N,{code:w,language:"python",filename:"bi_engine_cache.py"})})]}),(0,s.jsxs)(n.iv,{title:"BigLake vs Delta vs Iceberg — same data, three open formats compared",description:"All three formats implement the same math: table state = left-fold of the manifest/snapshot log (S_N = fold(apply, ∅, manifest_log)). All three support ACID, time-travel, schema evolution. The productization differs: catalog, scan engine, cross-vendor support. This is Google's bet to win the open-format battle by being format-agnostic.",icon:(0,s.jsx)(v.A,{className:"h-5 w-5"}),children:[(0,s.jsxs)("div",{className:"prose prose-sm dark:prose-invert max-w-none",children:[(0,s.jsxs)("p",{className:"text-sm text-muted-foreground leading-relaxed",children:[(0,s.jsx)("strong",{className:"text-foreground/80",children:"Three formats, one math"}),": (1) ",(0,s.jsx)("em",{children:"BigLake"})," runs on GCS, uses BigQuery metadata, and explicitly supports Spark / Trino / Flink / DuckDB as equal readers. BigQuery is the easiest place to query, but the format is owned by no one (Apache Iceberg spec). (2) ",(0,s.jsx)("em",{children:"Delta Lake"})," runs on S3, uses Unity catalog, and emits Iceberg metadata via UniForm (one-way: Delta tables get Iceberg read access, but writes go through Delta). Databricks Photon is the fastest Delta reader. (3) ",(0,s.jsx)("em",{children:"Native Apache Iceberg"})," has no vendor lock-in — any engine can read/write natively. The trade-off: scan speed depends on the engine (Trino is slower than BigQuery's native reader)."]}),(0,s.jsxs)("p",{className:"text-sm text-muted-foreground leading-relaxed",children:[(0,s.jsx)("strong",{className:"text-foreground/80",children:"BigLake's strategic differentiator"}),": format-agnostic. BigQuery can query Iceberg tables (via BigLake catalog), Delta tables (via UniForm), Parquet files (direct), and Avro files (direct). The warehouse wins by being the easiest place to query any open format — not by locking data into a proprietary format. Google's bet: in 5 years, most enterprise data will be in open formats (Iceberg wins, Delta converges), and BigQuery will be the most performant reader. The math (manifest-fold + columnar scan) is universal; the catalog and reader quality is the moat."]})]}),(0,s.jsx)("div",{className:"mt-4",children:(0,s.jsx)(m.N,{code:A,language:"python",filename:"biglake_vs_delta_iceberg.py"})})]}),(0,s.jsx)(n.iv,{title:"Cross-vendor comparison — BigQuery vs Databricks vs Snowflake vs Open",description:"The same 4 advanced primitives across 4 lakehouse/warehouse vendors. Each row shows the vendor's name for the primitive, the math invariant, and how it differs. This table is the 20-year longevity artifact: when a vendor dies or renames, we update a row; the table stands.",icon:(0,s.jsx)(_.A,{className:"h-5 w-5"}),badge:"Longevity",children:(0,s.jsx)("div",{className:"overflow-x-auto",children:(0,s.jsxs)("table",{className:"w-full text-xs",children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{className:"border-b border-border/60 text-[10px] uppercase tracking-wider text-muted-foreground",children:[(0,s.jsx)("th",{className:"text-left px-3 py-2 font-medium",children:"Primitive (math)"}),(0,s.jsx)("th",{className:"text-left px-3 py-2 font-medium",children:"BigQuery"}),(0,s.jsx)("th",{className:"text-left px-3 py-2 font-medium",children:"Databricks"}),(0,s.jsx)("th",{className:"text-left px-3 py-2 font-medium",children:"Snowflake"}),(0,s.jsx)("th",{className:"text-left px-3 py-2 font-medium",children:"Open (Iceberg/DuckDB)"})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{className:"border-b border-border/20",children:[(0,s.jsxs)("td",{className:"px-3 py-2 font-mono text-emerald-400",children:["In-memory columnar cache",(0,s.jsx)("br",{}),(0,s.jsx)("span",{className:"text-[9px] text-zinc-500",children:"T_hit / T_cold ≈ 1000\xd7"})]}),(0,s.jsxs)("td",{className:"px-3 py-2 text-zinc-300",children:[(0,s.jsx)("strong",{children:"BI Engine"})," (per-reservation, shared across project users, GB-scale in-memory columnar cache, sub-second latency)"]}),(0,s.jsx)("td",{className:"px-3 py-2 text-zinc-400",children:"Delta Cache (per-worker, persistent across query) + Photon SIMD (columnar acceleration)"}),(0,s.jsx)("td",{className:"px-3 py-2 text-zinc-400",children:"Result Cache (24h TTL, per-user — each user has own cache)"}),(0,s.jsx)("td",{className:"px-3 py-2 text-zinc-400",children:"DuckDB in-memory + Parquet (per-process, OS-level cache)"})]}),(0,s.jsxs)("tr",{className:"border-b border-border/20",children:[(0,s.jsxs)("td",{className:"px-3 py-2 font-mono text-violet-400",children:["Open table format access",(0,s.jsx)("br",{}),(0,s.jsx)("span",{className:"text-[9px] text-zinc-500",children:"S_N = fold(apply, ∅, manifest_log)"})]}),(0,s.jsxs)("td",{className:"px-3 py-2 text-zinc-300",children:[(0,s.jsx)("strong",{children:"BigLake"})," (Iceberg-on-GCS with BigQuery metadata, Spark/Trino/Flink read same tables)"]}),(0,s.jsx)("td",{className:"px-3 py-2 text-zinc-400",children:"Delta Lake (open spec since 2024, Unity catalog, UniForm emits Iceberg metadata one-way)"}),(0,s.jsx)("td",{className:"px-3 py-2 text-zinc-400",children:"Polaris Catalog (Iceberg native, open spec since 2024)"}),(0,s.jsx)("td",{className:"px-3 py-2 text-zinc-400",children:"Apache Iceberg (native, no vendor — any engine reads/writes)"})]}),(0,s.jsxs)("tr",{className:"border-b border-border/20",children:[(0,s.jsxs)("td",{className:"px-3 py-2 font-mono text-sky-400",children:["SQL-as-ML-tooling",(0,s.jsx)("br",{}),(0,s.jsx)("span",{className:"text-[9px] text-zinc-500",children:"M̂ = argmin_θ L(X_train, θ)"})]}),(0,s.jsxs)("td",{className:"px-3 py-2 text-zinc-300",children:[(0,s.jsx)("strong",{children:"BigQuery ML (BQML)"})," (50+ model types in SQL — ARIMA_PLUS, DNN_CLASSIFIER, KMEANS, BOOSTED_TREE, etc.)"]}),(0,s.jsx)("td",{className:"px-3 py-2 text-zinc-400",children:"MLflow + AutoML (Python API, Spark MLlib via SQL — integrated registry)"}),(0,s.jsx)("td",{className:"px-3 py-2 text-zinc-400",children:"Snowpark ML (Python UDFs calling scikit-learn/PyTorch — flexible, more ops)"}),(0,s.jsx)("td",{className:"px-3 py-2 text-zinc-400",children:"Apache MADlib (Postgres) + dbt + mlflow (loose integration)"})]}),(0,s.jsxs)("tr",{className:"border-b border-border/20",children:[(0,s.jsxs)("td",{className:"px-3 py-2 font-mono text-amber-400",children:["Vector search + ANN (HNSW)",(0,s.jsx)("br",{}),(0,s.jsx)("span",{className:"text-[9px] text-zinc-500",children:"recall@k ≈ 1 - O(1/ln(N))"})]}),(0,s.jsxs)("td",{className:"px-3 py-2 text-zinc-300",children:[(0,s.jsx)("strong",{children:"BigQuery Vector Search"})," (CREATE VECTOR INDEX HNSW, VECTOR_SEARCH() SQL-native, serverless, billion-scale)"]}),(0,s.jsx)("td",{className:"px-3 py-2 text-zinc-400",children:"Databricks Vector Search (Mosaic AI, HNSW index, serverless)"}),(0,s.jsx)("td",{className:"px-3 py-2 text-zinc-400",children:"Cortex Search (Cortex Analyst + native vector type, serverless)"}),(0,s.jsx)("td",{className:"px-3 py-2 text-zinc-400",children:"pgvector HNSW (Postgres extension) + FAISS + Milvus + Qdrant"})]})]})]})})}),(0,s.jsxs)(n.iv,{title:"Embedded ConceptCards — vector search + Bloom primitives (click to expand)",description:"Each card below is the full 5-layer ConceptCard. Click any card header to expand: Math (LaTeX) → Code (multi-language) → Tools (3-vendor) → Analysis (Pyodide) → Interactive demo → Visualization.",icon:(0,s.jsx)(_.A,{className:"h-5 w-5"}),badge:"5 ConceptCards",contentClassName:"p-4 md:p-5 space-y-4",children:[(0,s.jsx)(o.j,{spec:c.tQ}),(0,s.jsx)(o.j,{spec:c.wh}),(0,s.jsx)(o.j,{spec:c.ot}),(0,s.jsx)(o.j,{spec:c.Ei}),(0,s.jsx)(o.j,{spec:c.up})]}),(0,s.jsxs)(y.S,{pageTitle:"BigQuery Advanced",children:[(0,s.jsx)(y.P,{title:"BigQuery's serverless model IS the cloud-native ideal — no clusters to manage",connectedTo:"ADR-001 (platform architecture)",children:(0,s.jsx)("p",{children:"BigQuery was born serverless in 2010 — 5 years before Snowflake's serverless warehouse and 10 years before Databricks' serverless SQL. The thesis: data analysts should never think about clusters. No provisioning, no scaling, no auto-resume, no auto-suspend, no instance type to pick. You write SQL; Google figures out the compute. The 4 advanced primitives (BI Engine, BigLake, BQML, Vector Search) all extend this thesis — each is a serverless service bolted onto the warehouse, not a separate cluster to manage. Snowflake moved in this direction (serverless tasks, serverless warehouse auto-suspend). Databricks moved in this direction (serverless SQL, serverless ML). BigQuery started there. The convergence toward serverless IS the cloud-native ideal — and BigQuery was first. 5 years from now, all three vendors will be fully serverless; the differentiation will move to (a) the open-format layer (BigLake vs Delta vs Iceberg) and (b) the SQL-as-ML layer (BQML vs MLflow vs Snowpark). BigQuery's head start in serverless is its strongest 20-year moat."})}),(0,s.jsx)(y.P,{title:"BigLake IS Google's bet to win the open-format battle by being format-agnostic",connectedTo:"ADR-050 (fold-section architecture)",children:(0,s.jsx)("p",{children:"The open-format battle (Iceberg vs Delta vs Hudi vs Parquet) is the lakehouse war of the 2020s. Three strategies: (1) Databricks pushes Delta Lake (open spec since 2024, UniForm emits Iceberg metadata for cross-engine read) — Delta is the format, Databricks is the best reader, Unity is the catalog. (2) Snowflake pushed Polaris Catalog (Iceberg native, open spec) — Iceberg is the format, Snowflake is one of many readers, Polaris is the catalog. (3) BigQuery pushed BigLake — format-agnostic. BigLake supports Iceberg + Delta + Parquet + Avro, with BigQuery metadata, and explicitly welcomes Spark / Trino / Flink as equal readers. Google's bet: the format war ends with no winner (Iceberg will dominate, Delta will converge, but neither will lock out the other), so the warehouse that wins is the one that reads every format best. This is the same bet Google made with BigQuery being format-agnostic on storage (GCS, Bigtable, Drive) — the warehouse is the orchestrator, not the storage. The math (manifest-fold + columnar scan + predicate pushdown) is universal; the catalog and reader quality is the moat. BigLake's bet: be the easiest place to query any open format."})}),(0,s.jsx)(y.P,{title:"BQML IS SQL-as-ML-tooling — the lowest-barrier ML platform for analytics engineers",connectedTo:"ADR-022 (pgvector for variant embeddings)",children:(0,s.jsx)("p",{children:"BigQuery ML (BQML) is the only lakehouse ML platform where you train models in pure SQL — no Python, no notebooks, no MLflow registry, no PyTorch, no scikit-learn. CREATE MODEL trains the model; ML.PREDICT scores new data. ~50+ model types: ARIMA_PLUS (time-series with seasonal decomposition), DNN_CLASSIFIER (deep learning), KMEANS (clustering), BOOSTED_TREE_CLASSIFIER (XGBoost), LOGISTIC_REG (binary classification), ARIMA (forecasting). The math is the same as scikit-learn / PyTorch / Prophet — train/test split + loss-minimization + hyperparameter search. The productization is SQL. BQML's audience: analytics engineers — SQL-fluent, Python-light, often dbt-locked. Databricks MLflow requires Python. Snowflake Snowpark ML requires Python UDFs. BQML requires only SQL. The bet: most enterprise ML is not deep learning — it's churn prediction (logistic regression), customer segmentation (KMEANS), sales forecasting (ARIMA), fraud classification (boosted trees). For these, SQL is sufficient. BQML wins the 80% of enterprise ML that doesn't need PyTorch. The 20% that does need deep learning will use Vertex AI (Google's separate offering) or Databricks. BQML's moat: the lowest barrier to ML for the largest population of data workers (analytics engineers). 5 years from now, BQML will be the on-ramp most enterprises use to get into ML — and BigQuery will be the warehouse they don't leave."})})]}),(0,s.jsx)(p.a,{topics:[{id:"databricks-advanced",reason:"The Databricks sibling — same 4 primitives, different vendor (cards 40-46, Phase 27)"},{id:"snowflake-advanced",reason:"The Snowflake sibling — same 4 primitives, different vendor (Phase 30)"},{id:"bigquery",reason:"BigQuery — the introductory overview (this page goes deeper)"},{id:"snowflake",reason:"Snowflake — the introductory overview of the second vertex"},{id:"databricks-lakehouse",reason:"Databricks Lakehouse — the introductory end-to-end Databricks page"},{id:"delta-lake",reason:"Delta Lake — Databricks' storage layer (BigLake's competitor on GCS)"},{id:"iceberg",reason:"Apache Iceberg — the open sibling to Delta, BigLake's preferred format"},{id:"arrow",reason:"Apache Arrow — the columnar in-memory format that powers BI Engine"}]}),(0,s.jsx)(d.R,{pageId:"bigquery-advanced"}),(0,s.jsx)(h.B,{pageId:"bigquery-advanced"}),(0,s.jsx)(l.T,{relatedPages:[{id:"databricks-advanced",reason:"Side-by-side comparison — same math, different vendor (Phase 27)"},{id:"snowflake-advanced",reason:"Side-by-side comparison — same math, different vendor (Phase 30)"},{id:"bigquery",reason:"Start with the BigQuery overview before this deep-dive"}]}),(0,s.jsxs)("div",{className:"flex flex-wrap gap-2",children:[(0,s.jsx)(i(),{href:(0,u.ZJ)("databricks-advanced"),className:"text-sm text-primary hover:underline",children:"→ Databricks Advanced (cross-vendor sibling, Phase 27)"}),(0,s.jsx)("span",{className:"text-muted-foreground",children:"\xb7"}),(0,s.jsx)(i(),{href:(0,u.ZJ)("snowflake-advanced"),className:"text-sm text-primary hover:underline",children:"→ Snowflake Advanced (cross-vendor sibling, Phase 30)"}),(0,s.jsx)("span",{className:"text-muted-foreground",children:"\xb7"}),(0,s.jsx)(i(),{href:(0,u.ZJ)("bigquery"),className:"text-sm text-primary hover:underline",children:"→ BigQuery (introductory overview)"}),(0,s.jsx)("span",{className:"text-muted-foreground",children:"\xb7"}),(0,s.jsx)(i(),{href:(0,u.ZJ)("iceberg"),className:"text-sm text-primary hover:underline",children:"→ Apache Iceberg (open format, BigLake's preferred)"})]})]})}},49345:(e,a,t)=>{"use strict";t.d(a,{a:()=>c});var s=t(95155),r=t(98500),i=t.n(r),n=t(33024),o=t(85757);function c({topics:e}){return 0===e.length?null:(0,s.jsxs)("div",{className:"rounded-md border border-border/60 bg-muted/20 p-4",children:[(0,s.jsxs)("p",{className:"text-xs font-semibold mb-2 flex items-center gap-1.5",children:[(0,s.jsx)(n.A,{className:"h-3.5 w-3.5 text-primary"})," Related topics — cross-page navigation"]}),(0,s.jsx)("div",{className:"flex flex-wrap gap-2 text-sm",children:e.map((a,t)=>(0,s.jsxs)("span",{className:"flex items-center gap-1",children:[(0,s.jsxs)(i(),{href:(0,o.ZJ)(a.id),className:"text-primary hover:underline",children:["→ ",a.reason]}),t<e.length-1&&(0,s.jsx)("span",{className:"text-muted-foreground",children:"\xb7"})]},a.id))})]})}},53961:(e,a,t)=>{"use strict";t.d(a,{A:()=>s});let s=(0,t(6404).A)("zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]])},60508:(e,a,t)=>{"use strict";t.d(a,{R:()=>f});var s=t(95155),r=t(12115),i=t(45160),n=t(89239),o=t(66349),c=t(85404),l=t(58381),d=t(79275),h=t(48368),m=t(22164),p=t(86901),u=t(89123),g=t(21628),y=t(98500),x=t.n(y),b=t(85757);function f({pageId:e}){let a=(0,d.C6)(e);return 0===a.length?null:(0,s.jsxs)(l.iv,{title:"Recent research (2023-2025)",description:"Modern papers that extend the math, code, and tools on this page.",icon:(0,s.jsx)(h.A,{className:"h-5 w-5"}),badge:`${a.length} paper${1===a.length?"":"s"}`,badgeVariant:"outline",contentClassName:"space-y-4",children:[a.map((e,a)=>(0,s.jsx)(v,{entry:e},a)),(0,s.jsxs)("p",{className:"text-[11px] text-muted-foreground italic",children:[a.length," paper",1===a.length?"":"s"," mapped to this page. Each shows the key algorithm + expected output (rendered as charts when the code produces JSON). Run the code in-browser via Pyodide."]})]})}function v({entry:e}){let[a,t]=(0,r.useState)(!1),[l,d]=(0,r.useState)(null);return(0,s.jsxs)("div",{className:"rounded-lg border border-border/60 p-4 space-y-3 hover:border-primary/30 transition-colors",children:[(0,s.jsxs)("div",{className:"space-y-1",children:[(0,s.jsxs)("div",{className:"flex items-start justify-between gap-3",children:[(0,s.jsx)("h4",{className:"text-sm font-semibold leading-tight flex-1",children:e.paperTitle}),(0,s.jsx)(i.E,{variant:"outline",className:"text-[10px] shrink-0",children:e.venue})]}),(0,s.jsxs)("p",{className:"text-[11px] text-muted-foreground",children:[e.authors," \xb7 ",e.year]}),e.arxivId&&(0,s.jsxs)("a",{href:`https://arxiv.org/abs/${e.arxivId}`,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-1 text-[11px] text-primary hover:underline",children:[(0,s.jsx)(m.A,{className:"h-3 w-3"}),"arXiv:",e.arxivId]}),e.doi&&!e.arxivId&&(0,s.jsxs)("a",{href:`https://doi.org/${e.doi}`,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-1 text-[11px] text-primary hover:underline",children:[(0,s.jsx)(m.A,{className:"h-3 w-3"}),"DOI:",e.doi]})]}),(0,s.jsx)("p",{className:"text-[12px] text-muted-foreground leading-relaxed",children:e.abstract}),(0,s.jsxs)(n.$,{variant:"outline",size:"sm",onClick:()=>t(!a),className:"h-7 text-[11px] gap-1.5",children:[(0,s.jsx)(p.A,{className:"h-3 w-3"}),a?"Hide expected code":"Show expected code + visualization"]}),a&&(0,s.jsxs)("div",{className:"space-y-2",children:[(0,s.jsx)(o.l,{code:e.expectedCode,buttonLabel:"Run in browser",onOutput:e=>{try{let a=e.indexOf("{"),t=e.lastIndexOf("}");if(a>=0&&t>a){let s=e.substring(a,t+1);d(JSON.parse(s))}}catch{}},hideTextOutput:!!l,compact:!0}),l?(0,s.jsxs)("div",{className:"space-y-2",children:[(0,s.jsxs)("div",{className:"flex items-center gap-1.5",children:[(0,s.jsx)(u.A,{className:"h-3.5 w-3.5 text-primary"}),(0,s.jsx)("p",{className:"text-[10px] uppercase tracking-wider text-muted-foreground",children:"Visualization (rendered from code output)"})]}),(0,s.jsx)(c.D,{data:l,accent:"oklch(0.65 0.18 250)",sourceCode:e.expectedCode})]}):(0,s.jsxs)("div",{className:"rounded-md border border-primary/20 bg-primary/5 p-2.5",children:[(0,s.jsx)("p",{className:"text-[10px] uppercase tracking-wider text-muted-foreground mb-1",children:"Expected output"}),(0,s.jsx)("pre",{className:"text-[11px] font-mono whitespace-pre-wrap leading-relaxed",children:e.expectedOutput})]}),(0,s.jsxs)("div",{className:"rounded-md border border-emerald-500/30 bg-emerald-500/5 p-2.5",children:[(0,s.jsx)("p",{className:"text-[10px] uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-1",children:"Key insight"}),(0,s.jsx)("p",{className:"text-[12px] text-foreground/80 leading-relaxed",children:e.keyInsight})]})]}),(0,s.jsxs)(x(),{href:(0,b.ZJ)("analytics-outputs"),className:"inline-flex items-center gap-1 text-[11px] text-primary hover:underline",children:["See this math visualized on Analytics Outputs ",(0,s.jsx)(g.A,{className:"h-3 w-3"})]})]})}},60885:(e,a,t)=>{"use strict";t.d(a,{A:()=>s});let s=(0,t(6404).A)("mouse",[["rect",{x:"5",y:"2",width:"14",height:"20",rx:"7",key:"11ol66"}],["path",{d:"M12 6v4",key:"16clxf"}]])},65576:(e,a,t)=>{"use strict";t.d(a,{A:()=>s});let s=(0,t(6404).A)("cpu",[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]])},66088:(e,a,t)=>{"use strict";t.d(a,{A:()=>s});let s=(0,t(6404).A)("chevron-down",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]])},67635:(e,a,t)=>{"use strict";t.d(a,{A:()=>s});let s=(0,t(6404).A)("copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]])},78622:(e,a,t)=>{Promise.resolve().then(t.bind(t,34412))},83036:(e,a,t)=>{"use strict";t.d(a,{P:()=>l,S:()=>d});var s=t(95155),r=t(98500),i=t.n(r),n=t(44071),o=t(97810),c=t(85757);function l({title:e,connectedTo:a,researchHref:t,children:r}){return(0,s.jsxs)("div",{className:"rounded-md border border-primary/30 bg-primary/5 p-4 space-y-2",children:[(0,s.jsxs)("div",{className:"flex items-start gap-2",children:[(0,s.jsx)(n.A,{className:"h-4 w-4 text-primary mt-0.5 shrink-0"}),(0,s.jsxs)("div",{className:"flex-1 min-w-0",children:[(0,s.jsx)("p",{className:"text-sm font-semibold text-foreground/90 leading-tight",children:e}),a&&(0,s.jsxs)("div",{className:"flex items-center gap-1.5 mt-1",children:[(0,s.jsx)(o.A,{className:"h-3 w-3 text-muted-foreground"}),(0,s.jsxs)(i(),{href:t??(0,c.ZJ)("research"),className:"text-[10px] text-muted-foreground hover:text-primary hover:underline",children:["Connected to: ",a," →"]})]})]})]}),(0,s.jsx)("div",{className:"text-xs text-muted-foreground leading-relaxed space-y-2 pl-6",children:r})]})}function d({pageTitle:e,children:a}){return(0,s.jsxs)("div",{className:"space-y-4",children:[(0,s.jsxs)("div",{className:"flex items-center gap-2 border-b border-border/60 pb-2",children:[(0,s.jsx)(n.A,{className:"h-5 w-5 text-primary"}),(0,s.jsxs)("h2",{className:"text-base font-bold text-foreground/90",children:["My deeper thoughts — ",e]})]}),(0,s.jsx)("p",{className:"text-xs text-muted-foreground italic leading-relaxed",children:"These are not summaries. They are arguments — the kind of connections a reader with serious grey matter would make after living with the material for years. Each thought connects to the platform's research section (ADRs, papers, decision records) so it's traceable, not just opinionated."}),(0,s.jsx)("div",{className:"space-y-3",children:a})]})}},86901:(e,a,t)=>{"use strict";t.d(a,{A:()=>s});let s=(0,t(6404).A)("sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]])},94514:(e,a,t)=>{"use strict";t.d(a,{A:()=>s});let s=(0,t(6404).A)("check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]])},97233:(e,a,t)=>{"use strict";t.d(a,{A:()=>s});let s=(0,t(6404).A)("link-2",[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]])},97810:(e,a,t)=>{"use strict";t.d(a,{A:()=>s});let s=(0,t(6404).A)("book-open",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]])}},e=>{e.O(0,[6919,8500,9430,3493,9760,7591,6012,9237,4843,9620,6722,5404,9275,2194,663,7069,5041,8441,3794,7358],()=>e(e.s=78622)),_N_E=e.O()}]);