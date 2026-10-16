(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6041],{1407:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});let a=(0,r(6404).A)("cloud",[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]])},9921:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});let a=(0,r(6404).A)("chevron-up",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]])},10968:(e,t,r)=>{"use strict";r.d(t,{ModernBigDataPage:()=>Q});var a=r(95155),s=r(98500),o=r.n(s),i=r(58381),n=r(27774),l=r(60508),c=r(92194),d=r(19776),p=r(37108),m=r(21910),u=r(66349),h=r(10762),g=r(85757),f=r(45160),x=r(83036),y=r(1407),b=r(53961),v=r(44071),k=r(26075),S=r(27413),w=r(48368),_=r(66669),j=r(21628),A=r(46029),N=r(44478),T=r(31025);let C=`-- ============================================================
-- Google BigQuery — serverless analytical SQL
-- Free tier: 1 TB queries/mo + 10 GB storage (always-free)
-- ============================================================

-- Create a partitioned + clustered table (most efficient layout)
CREATE TABLE IF NOT EXISTS \`moderndatascieng.orders.fct_orders\` (
  order_id        STRING,
  customer_id     STRING,
  order_ts        TIMESTAMP,
  order_total     NUMERIC,
  region_code    STRING
)
PARTITION BY DATE(order_ts)
CLUSTER BY customer_id, region_code
OPTIONS(
  description       = 'Canonical orders fact table',
  expiration_timestamp = TIMESTAMP_ADD(CURRENT_TIMESTAMP(), INTERVAL 365 DAY)
);

-- Query with column pruning + partition pruning + cluster pruning
-- (BigQuery bills by bytes scanned, so this matters)
SELECT
  region_code,
  DATE(order_ts)                       AS order_date,
  COUNT(DISTINCT customer_id)           AS customers,
  SUM(order_total)                       AS revenue_gbp
FROM \`moderndatascieng.orders.fct_orders\`
WHERE order_ts >= TIMESTAMP_SUB(CURRENT_TIMESTAMP(), INTERVAL 7 DAY)
  AND region_code IN ('UK', 'EU')
GROUP BY region_code, order_date
ORDER BY revenue_gbp DESC;

-- BI Engine reservation — accelerate hot tables in-memory
ALTER CAPACITY \`moderndatascieng.bi_engine\` SET
  SIZE_GB = 100,
  plan = 'FLEX';
`,P=`-- ============================================================
-- DuckDB — in-process analytical SQL (OSS, free)
-- "Just open a Parquet file" pattern — no server required
-- ============================================================

-- Install + load the httpfs extension to query S3 / HTTPS directly
INSTALL httpfs; LOAD httpfs;
SET s3_region = 'eu-west-1';
SET s3_access_key_id = '...';
SET s3_secret_access_key = '...';

-- Query 100s of Parquet files on S3 without copying them locally
CREATE VIEW bronze_orders AS
  SELECT * FROM read_parquet('s3://moderndatascieng-bronze/shopify/orders/*.parquet');

-- DuckDB is fast at OLAP — 10\xd7 faster than Postgres on a single node
SELECT
  date_trunc('day', order_ts) AS day,
  count(*)                     AS orders,
  sum(order_total)             AS revenue
FROM bronze_orders
WHERE order_ts >= CURRENT_DATE - INTERVAL 7 DAY
GROUP BY 1
ORDER BY day DESC;

-- Native Apache Arrow support — read Parquet without deserialising
-- to row-format. Zero-copy handoff to pandas / polars / R / Python.
COPY (SELECT * FROM bronze_orders WHERE region_code = 'UK')
TO '/tmp/uk_orders.parquet' (FORMAT 'parquet', COMPRESSION 'zstd');

-- MotherDuck is the managed DuckDB — same SQL, no ops.
-- Connect: 'duckdb_md:moderndatascieng?attach=true'
`,E=`# ============================================================
# Apache Spark Structured Streaming — micro-batch + continuous
# Free: OSS; Databricks Community Edition (free cluster)
# ============================================================
from pyspark.sql import SparkSession
from pyspark.sql.functions import from_json, col, window, current_timestamp
from pyspark.sql.types import StructType, StringType, TimestampType, DoubleType

spark = (SparkSession.builder
    .appName("orders-stream")
    .config("spark.sql.streaming.checkpointLocation", "/tmp/orders-cp")
    .getOrCreate())

# Schema for Kafka payload (Avro / Protobuf / JSON — pick one)
ORDER_SCHEMA = (StructType()
    .add("order_id",     StringType())
    .add("customer_id",  StringType())
    .add("order_total",  DoubleType())
    .add("order_ts",     TimestampType()))

# Read from Kafka topic "orders" (could also be Kinesis / Pulsar / file stream)
stream = (spark
    .readStream
    .format("kafka")
    .option("kafka.bootstrap.servers", "broker-1:9092,broker-2:9092")
    .option("subscribe", "orders")
    .option("startingOffsets", "latest")
    .load())

# Parse JSON payload → structured columns
parsed = (stream
    .select(from_json(col("value").cast("string"), ORDER_SCHEMA).alias("p"))
    .select("p.*"))

# Tumbling window aggregation — write to Delta table (idempotent MERGE)
agg = (parsed
    .withWatermark("order_ts", "10 minutes")  # late-data tolerance
    .groupBy(window(col("order_ts"), "5 minutes"), col("customer_id"))
    .agg({"order_total": "sum", "order_id": "count"}))

# Idempotent write to Delta — MERGE on window + customer_id
(agg.writeStream
    .format("delta")
    .option("checkpointLocation", "/tmp/orders-cp/delta")
    .option("mergeSchema", "true")
    .toTable("delta.sales_daily_window")
    .start()
    .awaitTermination())
`,R=`-- ============================================================
-- Apache Flink SQL — true streaming (event-time + exactly-once)
-- Free: OSS; Ververica Platform Community Edition
-- ============================================================

-- Define a Kafka source (Avro schema, watermark strategy)
CREATE TABLE kafka_orders (
  order_id       STRING,
  customer_id    STRING,
  order_total    DECIMAL(18, 2),
  order_ts       TIMESTAMP(3),
  WATERMARK FOR order_ts AS order_ts - INTERVAL '5' SECOND
) WITH (
  'connector'         = 'kafka',
  'topic'              = 'orders',
  'properties.bootstrap.servers' = 'broker-1:9092',
  'properties.group.id' = 'flink-orders-agg',
  'format'            = 'avro-confluent',
  'avro-confluent.url' = 'https://schema-registry:8081',
  'scan.startup.mode'  = 'latest-offset'
);

-- Define a sink — append to a Delta/Iceberg table via connector
CREATE TABLE delta_sales_hourly (
  hour_bucket    TIMESTAMP(3),
  customer_id    STRING,
  total_revenue   DECIMAL(18, 2),
  order_count    BIGINT,
  PRIMARY KEY (hour_bucket, customer_id) NOT ENFORCED
) WITH (
  'connector'           = 'delta',
  'table-path'          = 's3://moderndatascieng-delta/sales_hourly',
  'mode'                = 'upsert',
  'parquet.compression' = 'zstd'
);

-- Continuous aggregation — exactly-once semantics
INSERT INTO delta_sales_hourly
SELECT
  TUMBLE_START(order_ts, INTERVAL '1' HOUR) AS hour_bucket,
  customer_id,
  SUM(order_total) AS total_revenue,
  COUNT(*)          AS order_count
FROM kafka_orders
GROUP BY
  TUMBLE(order_ts, INTERVAL '1' HOUR),
  customer_id;
`,D=`# ============================================================
# Apache Kafka — distributed event streaming
# Free tier: Confluent Cloud (basic cluster), Upstash (serverless 10k/day)
# ============================================================
from confluent_kafka import Producer, Consumer, SerializingProducer
from confluent_kafka.serialization import StringSerializer
from confluent_kafka.schema_registry import SchemaRegistryClient
from confluent_kafka.schema_registry.avro import AvroSerializer
import json, os

# Schema Registry — Avro schema for the order event
ORDER_SCHEMA = """
{
  "type": "record",
  "name": "Order",
  "namespace": "com.moderndatascieng.events",
  "fields": [
    {"name": "order_id", "type": "string"},
    {"name": "customer_id", "type": "string"},
    {"name": "order_total", "type": "double"},
    {"name": "order_ts", "type": {"type": "long", "logicalType": "timestamp-millis"}}
  ]
}
"""

# Producer — Avro-serialised + exactly-once (idempotent producer)
sr_client = SchemaRegistryClient({"url": os.environ["SCHEMA_REGISTRY_URL"]})
avro_serializer = AvroSerializer(sr_client, ORDER_SCHEMA)

producer = SerializingProducer({
    "bootstrap.servers": os.environ["KAFKA_BOOTSTRAP"],
    "enable.idempotence": True,            # exactly-once producer
    "acks": "all",                         # wait for all ISR replicas
    "compression.type": "zstd",            # wire compression
    "value.serializer": avro_serializer,
    "key.serializer": StringSerializer("utf-8"),
})

def delivery_report(err, msg):
    if err:
        print(f"Delivery failed: {err}")
    else:
        print(f"Delivered to {msg.topic()}-{msg.partition()}@{msg.offset()}")

# Publish — partitioned by customer_id for ordering guarantees
def publish_order(order: dict):
    producer.produce(
        topic="orders",
        key=order["customer_id"],
        value=order,
        on_delivery=delivery_report,
    )
    producer.poll(0)  # serve delivery callbacks

# Consumer — consumer group = parallel processing
consumer = Consumer({
    "bootstrap.servers": os.environ["KAFKA_BOOTSTRAP"],
    "group.id": "silver-conform-service",
    "auto.offset.reset": "earliest",
    "enable.auto.commit": False,           # manual commit = exactly-once downstream
    "partition.assignment.strategy": "cooperative-sticky",
})
consumer.subscribe(["orders"])
`,I=`# ============================================================
# Apache Pulsar — multi-tenant pub/sub + geo-replication
# Free tier: StreamNative Cloud (free tier)
# ============================================================
import pulsar

client = pulsar.Client("pulsar+ssl://free-tier-streamnative.io:6651",
                       authentication=pulsar.AuthenticationToken(os.environ["PULSAR_TOKEN"]))

# Producer — keyed topics enable ordering per-key
producer = client.create_producer(
    topic="persistent://moderndatascieng/tenant-1/orders",
    schema=pulsar.schema.AvroSchema(ORDER_SCHEMA),
    send_timeout_millis=30000,
    compression_type=pulsar.CompressionType.ZSTD,
    batching_enabled=True,
    batching_max_messages=1000,
    # Geo-replication: this topic is replicated to 'us-east' and 'eu-west' clusters
    # automatically — consumers in either region see the same events.
)

# Publish
producer.send(Order(
    order_id="ord_42",
    customer_id="cust_1",
    order_total=42.50,
    order_ts=int(time.time() * 1000),
))

# Consumer — shared subscription for parallel processing
consumer = client.subscribe(
    topic="persistent://moderndatascieng/tenant-1/orders",
    subscription_name="silver-conform",
    schema=pulsar.schema.AvroSchema(ORDER_SCHEMA),
    subscription_type=pulsar.Shared,  # round-robin across consumer instances
    initial_position=pulsar.InitialPosition.Earliest,
)

while True:
    msg = consumer.receive()
    try:
        order = msg.value()
        # Process + ack (exactly-once if downstream is idempotent)
        process_order(order)
        consumer.acknowledge(msg)
    except Exception:
        consumer.negative_acknowledge(msg)  # re-deliver later

client.close()
`,O=`-- ============================================================
-- Apache Iceberg — open table format (vendor-neutral)
-- Free: OSS, runs on any compute (Spark, Trino, Flink, Athena)
-- ============================================================

-- Create an Iceberg table (uses Hive catalog — alternatives: REST, Glue, Nessie)
CREATE TABLE moderndatascieng.sales.fct_orders (
  order_id        STRING,
  customer_id     STRING,
  order_ts        TIMESTAMP,
  order_total     DECIMAL(18,2),
  region_code    STRING
) USING iceberg
PARTITIONED BY (days(order_ts))
TBLPROPERTIES (
  'write.format.default'             = 'parquet',
  'write.parquet.compression-codec'  = 'zstd',
  'format-version'                   = '2',          -- v2 enables row-level deletes
  'write.delete.mode'                = 'merge-on-read',
  'history.expire.max-snapshots'     = '30',
  'write.distribution-mode'          = 'hash'        # hash partition on order_id
);

-- MERGE INTO — Iceberg supports row-level updates via the v2 spec
MERGE INTO moderndatascieng.sales.fct_orders AS t
USING (SELECT * FROM staging.updates WHERE order_ts > now() - INTERVAL '1' DAY) AS s
  ON t.order_id = s.order_id
WHEN MATCHED THEN UPDATE SET *
WHEN NOT MATCHED THEN INSERT *;

-- Time travel — query any historical snapshot
SELECT * FROM moderndatascieng.sales.fct_orders.history;
SELECT * FROM moderndatascieng.sales.fct_orders.snapshots;

-- Branch + tag (Nessie catalog only) — git-like table versioning
-- Useful for ML reproducibility: train on the 'training-v2' branch
ALTER TABLE moderndatascieng.sales.fct_orders
CREATE BRANCH IF NOT EXISTS training_v2
AS OF VERSION 42;
`,M=[{label:"Streaming sources",value:"6",hint:"Kafka \xb7 Pulsar \xb7 Kinesis \xb7 Snowplow \xb7 CDC \xb7 S3 events",deltaTone:"flat"},{label:"Compute engines",value:"5",hint:"Spark \xb7 Flink \xb7 Trino \xb7 BigQuery \xb7 DuckDB",deltaTone:"flat"},{label:"Open table formats",value:"3",hint:"Delta \xb7 Iceberg \xb7 Hudi",deltaTone:"flat"},{label:"Columnar file formats",value:"4",hint:"Parquet \xb7 ORC \xb7 Arrow \xb7 Feather",deltaTone:"flat"}],L=[{name:"Google BigQuery",category:"Serverless warehouse",role:"Ad-hoc + scheduled analytical SQL on petabytes, with no infra",free_tier:"1 TB queries/mo + 10 GB storage (always-free)",when:"Cost-predictable batch analytics; standard SQL; multi-region",when_not:"Workloads needing fine-grained cost control; sub-second P95 latency",file_types:"Parquet, Avro, ORC, CSV, JSON, BigQuery native (Capacitor)",code_lang:"SQL",repo:"GoogleCloudPlatform/bigquery-utils"},{name:"DuckDB",category:"In-process OLAP",role:"Analytical SQL on local files (Parquet, CSV, Arrow) without a server",free_tier:"100% OSS; MotherDuck has 14-day free trial",when:"Notebook analytics; CI tests; small/medium data (<1TB); edge processing",when_not:"Petabyte-scale; high-concurrency multi-user workloads",file_types:"Parquet, CSV, JSON, Arrow IPC, Excel, SQLite",code_lang:"SQL",repo:"duckdb/duckdb"},{name:"Apache Spark Streaming",category:"Micro-batch + continuous",role:"Unified batch + streaming on Delta Lake; native CDF + MERGE",free_tier:"OSS; Databricks Community Edition (free 1-cluster)",when:"Lakehouse-first teams; existing Spark batch code reuse; ML pipelines",when_not:"True sub-second streaming (use Flink); 100% greenfield streaming",file_types:"Parquet, Delta, Avro, Kafka offsets, JSON",code_lang:"Python/Scala/SQL",repo:"apache/spark"},{name:"Apache Flink",category:"True streaming",role:"Event-time + exactly-once; stateful streaming + batch unification",free_tier:"OSS; Ververica Platform Community Edition",when:"Sub-second latency; complex event processing; stateful joins",when_not:"Simple ETL (use Spark); batch-heavy workloads",file_types:"Avro, Protobuf, Parquet, Iceberg, Kafka topics",code_lang:"Java/SQL/Python",repo:"apache/flink"},{name:"Apache Kafka",category:"Event streaming",role:"Durable, partitioned, ordered event log; backbone for events",free_tier:"Confluent Cloud basic (single-broker); Upstash 10k req/day",when:"Event backbone; CDC; high-throughput pub-sub; replayable logs",when_not:"Low-volume message queues (use SQS); CRUD requests",file_types:"Avro (Schema Registry), Protobuf, JSON Schema",code_lang:"Java/Python/Go",repo:"apache/kafka"},{name:"Apache Pulsar",category:"Multi-tenant pub/sub",role:"Geo-replication native; tiered storage; native functions",free_tier:"StreamNative Cloud free tier",when:"Multi-tenant isolation; geo-replication; compute-on-broker (Functions)",when_not:"Single-region teams (Kafka is simpler); very low ops tolerance",file_types:"Avro, JSON, Protobuf, MessagePack",code_lang:"Java/Python/Go",repo:"apache/pulsar"},{name:"Apache Iceberg",category:"Open table format",role:"Vendor-neutral ACID table format; spec-driven multi-engine support",free_tier:"100% OSS; runs on Spark, Trino, Flink, Athena, BigQuery, Snowflake",when:"Avoiding engine lock-in; multi-engine same-table access",when_not:"Already on Databricks (Delta is more native there); needs Hudi's upsert focus",file_types:"Parquet (data), Avro (delete files), metadata JSON",code_lang:"SQL/Python/Java",repo:"apache/iceberg"},{name:"Apache Hudi",category:"Open table format",role:"Streaming-first table format; upserts + incremental processing",free_tier:"100% OSS; OneTable (Hudi/Iceberg/Delta interop)",when:"CDC-heavy workloads; need upsert-heavy tables; incremental queries",when_not:"Append-only Bronze/Silver (Delta or Iceberg simpler)",file_types:"Parquet, Avro (log files)",code_lang:"Python/Java/SQL",repo:"apache/hudi"},{name:"Trino (formerly PrestoSQL)",category:"Distributed SQL engine",role:"Federated SQL across 30+ sources; sub-second interactive queries",free_tier:"100% OSS; Starburst has free trial",when:"Federated queries (Snowflake + S3 + MySQL + Kafka); ad-hoc",when_not:"Need OLAP-optimised storage (use a warehouse); ETL pipelines",file_types:"Parquet, ORC, Avro, RCFile, JSON, Iceberg, Delta",code_lang:"SQL",repo:"trinodb/trino"},{name:"Apache Pinot",category:"Real-time OLAP",role:"Sub-second user-facing analytics on real-time + batch data",free_tier:"100% OSS; self-hostable on K8s",when:"User-facing dashboards needing real-time; high-QPS slicing",when_not:"Internal-only BI (use Snowflake/Tableau); petabyte-scale storage",file_types:"Parquet, Avro, JSON, Kafka topics",code_lang:"Java/SQL",repo:"apache/pinot"},{name:"ClickHouse",category:"Columnar OLAP",role:"Massively parallel columnar DB for OLAP; 100\xd7 faster than Postgres",free_tier:"OSS; ClickHouse Cloud free trial",when:"High-QPS user-facing analytics; log/event aggregation",when_not:"Transactional workloads; need joins across wide tables",file_types:"Parquet, ORC, Arrow, JSON, native",code_lang:"SQL",repo:"ClickHouse/ClickHouse"},{name:"Apache Arrow / Flight",category:"Columnar in-memory format",role:"Zero-copy data exchange; Flight = RPC protocol for transfer",free_tier:"100% OSS",when:"Building blocks for analytical engines; cross-language IPC",when_not:"Direct end-user API (use DuckDB/Polars)",file_types:"Arrow IPC (.arrow, .feather)",code_lang:"C++/Rust/Python/JS",repo:"apache/arrow"}],B=[{name:"Apache Parquet",type:"Columnar storage",role:"Default for analytical workloads. Nested columnar + predicate pushdown.",used_by:"Spark, Flink, Trino, BigQuery, Snowflake, DuckDB, Iceberg, Delta, Hudi",compression:"Snappy (default), Zstd (modern), Gzip, LZO, Brotli, LZ4",when:"Always use for analytical columnar storage. Period.",when_not:"Streaming wire format (row-based is faster to serialise)"},{name:"Apache ORC",type:"Columnar storage",role:"Hive-native alternative to Parquet; comparable performance.",used_by:"Hive, Presto/Trino, Spark (legacy), Apache Pinot",compression:"Zlib, Snappy, LZO, Zstd",when:"Hive-first platforms; HCatalog integrations",when_not:"Greenfield — prefer Parquet (broader engine support)"},{name:"Apache Arrow / Feather",type:"Columnar in-memory + IPC",role:"Zero-copy cross-language exchange; building block for analytical engines.",used_by:"Polars, DuckDB, Pandas, R, Python, JS, Rust",compression:"LZ4, Zstd",when:"Cross-engine IPC; in-process analytics; columnar caching",when_not:"Long-term storage (use Parquet)"},{name:"Apache Avro",type:"Row-based serialisation",role:"Schema-evolution-friendly row format; default for Kafka/Pulsar.",used_by:"Kafka (Schema Registry), Pulsar, Hudi, Iceberg delete files",compression:"Deflate, Snappy, Zstd",when:"Streaming wire format; schema evolution; row-level data",when_not:"Analytical columnar storage (use Parquet)"},{name:"Protocol Buffers",type:"Row-based serialisation",role:"Compact binary wire format with strong schema; widely used in microservices.",used_by:"Kafka (ProtobufSerde), Pulsar, gRPC services",compression:"None (already compact); can wrap with Snappy",when:"Service-to-service; backward-compat critical; field-masking needed",when_not:"Schema registry governance is easier with Avro"},{name:"JSON / JSON Schema",type:"Text-based serialisation",role:"Human-readable; ubiquitous; default for ad-hoc integration.",used_by:"Kafka (default), Pulsar, REST APIs, BigQuery (export), webhooks",compression:"None; pair with Gzip/Zstd on transport",when:"Prototyping; non-volume-sensitive; human inspection needed",when_not:"Volume-sensitive pipelines (10\xd7 larger than Avro)"},{name:"Delta Lake",type:"Open table format (on Parquet)",role:"ACID on cloud object stores; native to Databricks Lakehouse.",used_by:"Databricks, Apache Spark, Apache Flink (connector), Apache Iceberg (via UniForm)",compression:"Inherits Parquet compression",when:"On Databricks; need ACID on S3/ADLS/GCS",when_not:"Need vendor-neutral multi-engine access (use Iceberg)"},{name:"Apache Iceberg",type:"Open table format (on Parquet/Avro)",role:"Vendor-neutral; spec-driven; multi-engine native access.",used_by:"Spark, Trino, Flink, Athena, BigQuery, Snowflake, DuckDB, Impala",compression:"Inherits Parquet compression",when:"Multi-engine same-table; avoiding Databricks/Snowflake lock-in",when_not:"Hudi-style upsert-heavy CDC (use Hudi)"},{name:"Apache Hudi",type:"Open table format (on Parquet)",role:"Streaming-first; upsert-optimised; incremental processing built-in.",used_by:"Spark, Flink (Beta), Hive, Trino (connector)",compression:"Inherits Parquet compression",when:"CDC pipelines; need upserts without MERGE; incremental queries",when_not:"Append-only Bronze (Delta/Iceberg simpler)"}],q=[{decision:"Streaming: Kafka vs Pulsar vs Kinesis",options:[{option:"Kafka",strengths:"Mature, broad ecosystem, Confluent Cloud free tier",weaknesses:"Multi-tenancy is hard; ops overhead self-hosted",verdict:"Default for most teams"},{option:"Pulsar",strengths:"Native geo-replication, tiered storage, Functions",weaknesses:"Smaller community, more complex ops",verdict:"Multi-region or compute-on-broker"},{option:"Kinesis",strengths:"AWS-native, zero ops",weaknesses:"AWS-only, per-shard pricing adds up",verdict:"AWS-only teams with light traffic"}]},{decision:"Compute: Spark Streaming vs Flink",options:[{option:"Spark Structured Streaming",strengths:"Same engine as batch; Delta native; easy migration",weaknesses:"Micro-batch by default; not true sub-second",verdict:"Lakehouse-first teams"},{option:"Flink",strengths:"True streaming; event-time + exactly-once; stateful joins",weaknesses:"Steeper learning curve; smaller ecosystem",verdict:"Real-time / complex event processing"}]},{decision:"Table format: Delta vs Iceberg vs Hudi",options:[{option:"Delta",strengths:"Best on Databricks; UniForm interop with Iceberg",weaknesses:"Less mature off-Databricks",verdict:"On Databricks"},{option:"Iceberg",strengths:"Vendor-neutral; broadest engine support; spec-driven",weaknesses:"Merge-on-read deletes less mature",verdict:"Multi-engine, avoid lock-in"},{option:"Hudi",strengths:"Upsert-first; incremental queries; CoW + MoR",weaknesses:"Smaller ecosystem; Flink support still maturing",verdict:"CDC-heavy upsert pipelines"}]},{decision:"Warehouse: BigQuery vs Snowflake vs ClickHouse",options:[{option:"BigQuery",strengths:"Serverless, generous free tier, GCP-native",weaknesses:"GCP-only feel; cost less predictable at scale",verdict:"GCP teams; ad-hoc analytics"},{option:"Snowflake",strengths:"Multi-cloud, mature RLS, secure sharing",weaknesses:"Cost adds up; less OSS-friendly",verdict:"Multi-cloud enterprise"},{option:"ClickHouse",strengths:"10\xd7 faster on OLAP; OSS; user-facing analytics",weaknesses:"Smaller ecosystem; joins are harder",verdict:"High-QPS user-facing analytics"}]}],F=[{service:"BigQuery",free:"1 TB queries/mo + 10 GB storage",link:"cloud.google.com/bigquery/pricing"},{service:"DuckDB",free:"100% OSS (MIT)",link:"duckdb.org"},{service:"MotherDuck",free:"14-day free trial",link:"motherduck.com"},{service:"Apache Spark",free:"OSS; Databricks Community Edition (1 free cluster)",link:"databricks.com/learn/community-edition"},{service:"Apache Flink",free:"OSS; Ververica Platform Community Edition",link:"ververica.com"},{service:"Confluent Cloud (Kafka)",free:"Free tier — basic cluster, ~100 topics",link:"confluent.io"},{service:"Upstash Kafka",free:"10,000 requests/day (serverless)",link:"upstash.com"},{service:"StreamNative (Pulsar)",free:"Free tier — 1 namespace, 100 topics",link:"streamnative.io"},{service:"Apache Iceberg / Hudi / Delta",free:"100% OSS (Apache 2.0)",link:"iceberg.apache.org"},{service:"Trino",free:"OSS; Starburst 30-day trial",link:"trino.io"},{service:"Apache Pinot",free:"OSS; self-hostable",link:"pinot.apache.org"},{service:"ClickHouse Cloud",free:"30-day trial; self-host free",link:"clickhouse.com"}];function Q(){return(0,a.jsxs)("div",{className:"space-y-8",children:[(0,a.jsx)(i.zY,{eyebrow:"Modern Big Data Stack",title:"BigQuery \xb7 DuckDB \xb7 Spark Streaming \xb7 Flink \xb7 Kafka \xb7 Pulsar \xb7 Iceberg",description:"The modern big-data stack is a hybrid of serverless warehouses (BigQuery), in-process OLAP (DuckDB), true streaming (Flink), and open table formats (Delta/Iceberg/Hudi) wired together by event backbones (Kafka/Pulsar). This page covers each engine with code, free tiers, file formats, and the trade-offs that decide which one to pick.",right:(0,a.jsxs)("div",{className:"flex gap-2",children:[(0,a.jsxs)(f.E,{variant:"outline",className:"gap-1.5",children:[(0,a.jsx)(y.A,{className:"h-3 w-3"})," Serverless + OSS"]}),(0,a.jsxs)(f.E,{variant:"outline",className:"gap-1.5",children:[(0,a.jsx)(b.A,{className:"h-3 w-3"})," Real-time"]})]})}),(0,a.jsx)("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-3",children:M.map(e=>(0,a.jsx)(i.nO,{label:e.label,value:e.value,hint:e.hint,deltaTone:e.deltaTone},e.label))}),(0,a.jsx)(i.iv,{title:"My deeper thought: the convergence pattern",description:"The most important trend in the modern big-data stack isn't any one engine — it's the convergence of batch + streaming + warehouse + lakehouse into one hybrid fabric.",icon:(0,a.jsx)(v.A,{className:"h-5 w-5"}),badge:"Insight",children:(0,a.jsxs)("div",{className:"space-y-3 text-sm text-muted-foreground leading-relaxed",children:[(0,a.jsxs)("p",{children:["Ten years ago you had three separate stacks: a data warehouse (Snowflake/BigQuery) for BI, a streaming system (Kafka + Storm) for real-time, and a data lake (S3 + Hive) for ad-hoc. Each had its own format, its own compute, its own governance. Data moved between them via fragile ETL jobs. ",(0,a.jsx)("strong",{className:"text-foreground/80",children:"Three silos, three formats, three governances, three sets of bugs."})]}),(0,a.jsxs)("p",{children:["The modern stack is converging on one pattern: ",(0,a.jsx)("strong",{className:"text-foreground/80",children:"an open table format (Delta/Iceberg/Hudi) on cloud object storage, queried by any engine (Spark, Flink, Trino, BigQuery, Snowflake, DuckDB) via a shared catalog"}),'. The warehouse and the lake are the same thing now. Streaming and batch are the same query with different window sizes. The "Kappa architecture" promise — one stack for both modalities — is finally real.']}),(0,a.jsxs)("p",{children:["The implication: ",(0,a.jsx)("strong",{className:"text-foreground/80",children:"the file format matters more than the engine"}),". Parquet + Arrow are the lingua franca. Avro + Protobuf are the wire formats. The engines are interchangeable; the data format is sticky. Pick formats for portability, engines for the job at hand. This is the opposite of where the industry was in 2015, when engine-lock-in was the norm."]}),(0,a.jsxs)("p",{children:["The next convergence is happening now: ",(0,a.jsx)("strong",{className:"text-foreground/80",children:"DuckDB + Arrow + MotherDuck"})," are bringing OLAP to the laptop, the edge, and the notebook. Big data is becoming small enough to fit in your pocket — and that changes which decisions are made where."]})]})}),(0,a.jsx)(i.iv,{title:"Stack inventory — 12 engines / formats",description:"Each row = a serious option in the modern big-data stack. Click the GitHub repo on each to see real implementations.",icon:(0,a.jsx)(k.A,{className:"h-5 w-5"}),contentClassName:"p-0",children:(0,a.jsx)("div",{className:"overflow-x-auto",children:(0,a.jsxs)("table",{className:"w-full text-sm",children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{className:"border-b border-border/60 bg-muted/40",children:[(0,a.jsx)("th",{className:"text-left px-3 py-2 text-[10px] uppercase tracking-wider text-muted-foreground",children:"Engine / format"}),(0,a.jsx)("th",{className:"text-left px-3 py-2 text-[10px] uppercase tracking-wider text-muted-foreground",children:"Category"}),(0,a.jsx)("th",{className:"text-left px-3 py-2 text-[10px] uppercase tracking-wider text-muted-foreground",children:"Role"}),(0,a.jsx)("th",{className:"text-left px-3 py-2 text-[10px] uppercase tracking-wider text-muted-foreground",children:"Free tier"}),(0,a.jsx)("th",{className:"text-left px-3 py-2 text-[10px] uppercase tracking-wider text-muted-foreground",children:"When to use"}),(0,a.jsx)("th",{className:"text-left px-3 py-2 text-[10px] uppercase tracking-wider text-muted-foreground",children:"File types"})]})}),(0,a.jsx)("tbody",{children:(0,a.jsx)(m.V,{items:L,initialCount:6,increment:6,getKey:e=>e.name,disableWrapper:!0,showMoreLabel:e=>`Show ${e} more engines`,showLessLabel:"Collapse to top 6",children:e=>(0,a.jsxs)("tr",{className:"border-b border-border/40 last:border-0 hover:bg-muted/20",children:[(0,a.jsxs)("td",{className:"px-3 py-2",children:[(0,a.jsx)("p",{className:"font-semibold text-xs",children:e.name}),(0,a.jsx)("a",{href:`https://github.com/${e.repo}`,target:"_blank",rel:"noopener noreferrer",className:"text-[10px] text-primary hover:underline font-mono",children:e.repo})]}),(0,a.jsx)("td",{className:"px-3 py-2 text-[11px] text-muted-foreground",children:e.category}),(0,a.jsx)("td",{className:"px-3 py-2 text-[11px] text-muted-foreground",children:e.role}),(0,a.jsx)("td",{className:"px-3 py-2 text-[11px] text-emerald-600 dark:text-emerald-400",children:e.free_tier}),(0,a.jsx)("td",{className:"px-3 py-2 text-[11px] text-foreground/80",children:e.when}),(0,a.jsx)("td",{className:"px-3 py-2 text-[10px] font-mono text-muted-foreground",children:e.file_types})]},e.name)})})]})})}),(0,a.jsx)(i.iv,{title:"Multi-language: serverless SQL across BigQuery, DuckDB & Iceberg (drawer)",description:"The same analytical query written for three different engines. Note how the SQL is nearly identical — the file format (Parquet) is the constant, the engine is the variable.",icon:(0,a.jsx)(S.A,{className:"h-5 w-5"}),badge:"3 engines",children:(0,a.jsx)(p.j,{drawerMode:!0,drawerButtonLabel:"View code samples",title:"Aggregation across three serverless engines",samples:[{language:"sql",filename:"bigquery_orders.sql",note:"Google BigQuery — serverless. Bills by bytes scanned, so always partition + cluster. Free tier: 1 TB/mo.",code:C,highlight:[7,8,9,10,11,12,13,14,15,24,25,26,27,28,29,30]},{language:"sql",filename:"duckdb_orders.sql",note:"DuckDB — in-process OSS OLAP. 10\xd7 faster than Postgres on a single node. No server needed; reads S3 directly via httpfs extension.",code:P,highlight:[6,7,8,9,10,12,13,14,21,22,23,27,28]},{language:"sql",filename:"iceberg_orders.sql",note:"Apache Iceberg — open table format. The same SQL works on Spark, Trino, Flink, Athena, BigQuery, Snowflake — engine-portable ACID.",code:O,highlight:[7,8,9,10,11,12,13,14,15,16,19,20,21,22,23,30,31,32,33]}]})}),(0,a.jsx)(i.iv,{title:"Multi-language: streaming across Spark, Flink, Kafka, Pulsar (drawer)",description:"The same order-event pipeline implemented in four different streaming stacks. Notice the convergence: Flink SQL and Spark Structured Streaming look almost identical.",icon:(0,a.jsx)(S.A,{className:"h-5 w-5"}),badge:"4 stacks",children:(0,a.jsx)(p.j,{drawerMode:!0,drawerButtonLabel:"View code samples",title:"Order event processing — 4 streaming implementations",samples:[{language:"python",filename:"spark_streaming.py",note:"Spark Structured Streaming — micro-batch by default, continuous as opt-in. Idempotent Delta writes via MERGE.",code:E,highlight:[10,11,12,13,14,15,22,23,24,25,26,27,30,31,32,35,36,37,38,41,42,43,44,45,46]},{language:"sql",filename:"flink_orders.sql",note:"Flink SQL — true streaming with event-time + watermark + exactly-once. The most powerful streaming SQL.",code:R,highlight:[7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,26,27,28,29,30,31,33,34,35,36,37,38,39,40]},{language:"python",filename:"kafka_producer.py",note:"Kafka — Avro-serialised, idempotent producer (exactly-once). Schema Registry for governance. Confluent Cloud free tier.",code:D,highlight:[11,12,13,14,15,16,17,18,19,20,21,28,29,30,31,32,33,34,35,47,48,49,50,51,52]},{language:"python",filename:"pulsar_consumer.py",note:"Pulsar — multi-tenant, geo-replication native, compute-on-broker via Functions. StreamNative free tier.",code:I,highlight:[7,8,11,12,13,14,15,16,17,18,19,20,21,27,28,29,30,31,32,33,34,35,39,40,41,42]}]})}),(0,a.jsx)(i.iv,{title:"File format cheat sheet — the lingua franca of big data",description:"The engine is interchangeable; the file format is sticky. Pick formats for portability + longevity.",icon:(0,a.jsx)(w.A,{className:"h-5 w-5"}),contentClassName:"p-0",children:(0,a.jsx)("div",{className:"overflow-x-auto",children:(0,a.jsxs)("table",{className:"w-full text-sm",children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{className:"border-b border-border/60 bg-muted/40",children:[(0,a.jsx)("th",{className:"text-left px-3 py-2 text-[10px] uppercase tracking-wider text-muted-foreground",children:"Format"}),(0,a.jsx)("th",{className:"text-left px-3 py-2 text-[10px] uppercase tracking-wider text-muted-foreground",children:"Type"}),(0,a.jsx)("th",{className:"text-left px-3 py-2 text-[10px] uppercase tracking-wider text-muted-foreground",children:"Role"}),(0,a.jsx)("th",{className:"text-left px-3 py-2 text-[10px] uppercase tracking-wider text-muted-foreground",children:"Used by"}),(0,a.jsx)("th",{className:"text-left px-3 py-2 text-[10px] uppercase tracking-wider text-muted-foreground",children:"Compression"}),(0,a.jsx)("th",{className:"text-left px-3 py-2 text-[10px] uppercase tracking-wider text-muted-foreground",children:"When to use"})]})}),(0,a.jsx)("tbody",{children:(0,a.jsx)(m.V,{items:B,initialCount:5,increment:4,getKey:e=>e.name,disableWrapper:!0,showMoreLabel:e=>`Show ${e} more formats`,showLessLabel:"Collapse to top 5",children:e=>(0,a.jsxs)("tr",{className:"border-b border-border/40 last:border-0 hover:bg-muted/20",children:[(0,a.jsx)("td",{className:"px-3 py-2 font-mono text-xs font-semibold",children:e.name}),(0,a.jsx)("td",{className:"px-3 py-2 text-[11px] text-muted-foreground",children:e.type}),(0,a.jsx)("td",{className:"px-3 py-2 text-[11px] text-muted-foreground",children:e.role}),(0,a.jsx)("td",{className:"px-3 py-2 text-[10px] font-mono text-muted-foreground",children:e.used_by}),(0,a.jsx)("td",{className:"px-3 py-2 text-[10px] font-mono text-muted-foreground",children:e.compression}),(0,a.jsx)("td",{className:"px-3 py-2 text-[11px] text-foreground/80",children:e.when})]},e.name)})})]})})}),(0,a.jsx)(i.iv,{title:"Free tier matrix — start building without a credit card",description:"Most of the modern big-data stack has a serious free tier. Here's where to start for each component.",icon:(0,a.jsx)(y.A,{className:"h-5 w-5"}),contentClassName:"p-0",children:(0,a.jsx)("div",{className:"overflow-x-auto",children:(0,a.jsxs)("table",{className:"w-full text-sm",children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{className:"border-b border-border/60 bg-muted/40",children:[(0,a.jsx)("th",{className:"text-left px-3 py-2 text-[10px] uppercase tracking-wider text-muted-foreground",children:"Service"}),(0,a.jsx)("th",{className:"text-left px-3 py-2 text-[10px] uppercase tracking-wider text-muted-foreground",children:"Free tier"}),(0,a.jsx)("th",{className:"text-left px-3 py-2 text-[10px] uppercase tracking-wider text-muted-foreground",children:"Link"})]})}),(0,a.jsx)("tbody",{children:(0,a.jsx)(m.V,{items:F,initialCount:6,increment:6,getKey:e=>e.service,disableWrapper:!0,showMoreLabel:e=>`Show ${e} more services`,showLessLabel:"Collapse to top 6",children:e=>(0,a.jsxs)("tr",{className:"border-b border-border/40 last:border-0 hover:bg-muted/20",children:[(0,a.jsx)("td",{className:"px-3 py-2 text-xs font-semibold",children:e.service}),(0,a.jsx)("td",{className:"px-3 py-2 text-[11px] text-emerald-600 dark:text-emerald-400",children:e.free}),(0,a.jsx)("td",{className:"px-3 py-2 text-[11px] font-mono text-muted-foreground",children:e.link})]},e.service)})})]})})}),(0,a.jsx)(i.iv,{title:"Trade-off matrices — which engine for which job",description:"For the four architectural forks that come up most often: streaming backbone, streaming compute, table format, and warehouse.",icon:(0,a.jsx)(_.A,{className:"h-5 w-5"}),children:(0,a.jsx)("div",{className:"space-y-5",children:q.map(e=>(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{className:"text-sm font-semibold mb-2",children:e.decision}),(0,a.jsx)("div",{className:"grid md:grid-cols-3 gap-2",children:e.options.map(e=>{let t=e.verdict.toLowerCase().startsWith("default")||e.verdict.toLowerCase().startsWith("on ")||e.verdict.toLowerCase().includes("teams")||e.verdict.toLowerCase().includes("use");return(0,a.jsxs)("div",{className:`rounded-md border p-3 ${t?"border-primary/50 bg-primary/5":"border-border/60"}`,children:[(0,a.jsxs)("div",{className:"flex items-center justify-between gap-2 mb-1.5",children:[(0,a.jsx)("p",{className:"font-semibold text-sm",children:e.option}),t&&(0,a.jsx)(j.A,{className:"h-3 w-3 text-primary"})]}),(0,a.jsxs)("p",{className:"text-[11px] text-muted-foreground mb-1.5",children:[(0,a.jsx)("strong",{className:"text-foreground/80",children:"Strengths:"})," ",e.strengths]}),(0,a.jsxs)("p",{className:"text-[11px] text-muted-foreground",children:[(0,a.jsx)("strong",{className:"text-foreground/80",children:"Weaknesses:"})," ",e.weaknesses]}),(0,a.jsxs)("p",{className:`text-[11px] mt-2 font-medium ${t?"text-primary":"text-muted-foreground"}`,children:["Verdict: ",e.verdict]})]},e.option)})})]},e.decision))})}),(0,a.jsx)(i.iv,{title:"My deeper thought: the Lambda→Kappa evolution is finally winning",description:"The debate between dual-pipeline (Lambda) and unified (Kappa) is being settled in Kappa's favour — and that has real architectural consequences.",icon:(0,a.jsx)(A.A,{className:"h-5 w-5"}),badge:"Insight",children:(0,a.jsxs)("div",{className:"space-y-3 text-sm text-muted-foreground leading-relaxed",children:[(0,a.jsxs)("p",{children:["The Lambda architecture (2011-2018) had a speed layer (Storm / Spark Streaming) for real-time and a batch layer (Hadoop / Spark) for correctness. They wrote to separate views; a serving layer stitched them. ",(0,a.jsx)("strong",{className:"text-foreground/80",children:"Two pipelines, two codebases, two bugs."}),' Every real-time metric had a "wait for the batch to catch up" caveat.']}),(0,a.jsxs)("p",{children:["The Kappa architecture (proposed 2014, viable 2022) says: ",(0,a.jsx)("strong",{className:"text-foreground/80",children:"treat everything as a stream; batch is just a bounded stream."})," One pipeline, one codebase. Spark Structured Streaming + Flink SQL make this real because they support both micro-batch and continuous execution. The same SQL that runs on the live stream runs on a historical replay."]}),(0,a.jsxs)("p",{children:["The breakthrough that made Kappa viable: ",(0,a.jsx)("strong",{className:"text-foreground/80",children:"change data feeds (Delta CDF, Iceberg snapshots, Kafka log compaction)"}),'. You no longer need a separate "real-time path" — the table format itself emits the change stream. A single MERGE into a Delta table is simultaneously: (a) a batch write, (b) a stream event, (c) a queryable history. Three modalities, one operation.']}),(0,a.jsxs)("p",{children:["The implication: ",(0,a.jsx)("strong",{className:"text-foreground/80",children:'stop designing "batch" and "streaming" separately'}),". Design one logical pipeline; pick the runtime characteristic (latency vs throughput) per workload. The era of separate batch + streaming teams is ending. The era of unified data engineering is here."]})]})}),(0,a.jsx)(i.iv,{title:"Open standards: the sub-2% lock-in play",description:"Where to standardise on open formats vs where vendor-lock is acceptable.",icon:(0,a.jsx)(N.A,{className:"h-5 w-5"}),children:(0,a.jsxs)("div",{className:"grid md:grid-cols-2 gap-4",children:[(0,a.jsxs)("div",{className:"rounded-md border border-emerald-500/40 bg-emerald-500/5 p-4",children:[(0,a.jsx)("p",{className:"text-sm font-semibold text-emerald-600 dark:text-emerald-400 mb-2",children:"Always open"}),(0,a.jsxs)("ul",{className:"text-xs space-y-1.5 text-muted-foreground",children:[(0,a.jsxs)("li",{children:["• File format: ",(0,a.jsx)(d.R,{children:"Parquet"})," + ",(0,a.jsx)(d.R,{children:"Arrow"})]}),(0,a.jsxs)("li",{children:["• Wire format: ",(0,a.jsx)(d.R,{children:"Avro"})," (with Schema Registry)"]}),(0,a.jsxs)("li",{children:["• Table format: ",(0,a.jsx)(d.R,{children:"Iceberg"})," (vendor-neutral)"]}),(0,a.jsxs)("li",{children:["• Catalog: ",(0,a.jsx)(d.R,{children:"Nessie"})," or ",(0,a.jsx)(d.R,{children:"REST catalog"})]}),(0,a.jsxs)("li",{children:["• Compute: ",(0,a.jsx)(d.R,{children:"Spark"})," or ",(0,a.jsx)(d.R,{children:"Trino"})," (OSS)"]}),(0,a.jsxs)("li",{children:["• Streaming: ",(0,a.jsx)(d.R,{children:"Kafka protocol"})," (not just Confluent)"]})]})]}),(0,a.jsxs)("div",{className:"rounded-md border border-amber-500/40 bg-amber-500/5 p-4",children:[(0,a.jsx)("p",{className:"text-sm font-semibold text-amber-600 dark:text-amber-400 mb-2",children:"Acceptable lock-in"}),(0,a.jsxs)("ul",{className:"text-xs space-y-1.5 text-muted-foreground",children:[(0,a.jsxs)("li",{children:["• Warehouse: ",(0,a.jsx)(d.R,{children:"Snowflake"})," / ",(0,a.jsx)(d.R,{children:"BigQuery"})," (RLS, sharing)"]}),(0,a.jsxs)("li",{children:["• BI: ",(0,a.jsx)(d.R,{children:"Tableau"})," / ",(0,a.jsx)(d.R,{children:"Looker"})," (semantic layer)"]}),(0,a.jsxs)("li",{children:["• Ingestion: ",(0,a.jsx)(d.R,{children:"Fivetran"})," (managed connectors)"]}),(0,a.jsxs)("li",{children:["• Activation: ",(0,a.jsx)(d.R,{children:"Hightouch"})," (sync UI)"]}),(0,a.jsxs)("li",{children:["• Observability: ",(0,a.jsx)(d.R,{children:"Monte Carlo"})," (DQ + lineage)"]})]}),(0,a.jsx)("p",{className:"text-[10px] text-muted-foreground mt-2 italic",children:"The rule: lock-in is OK at the consumption layer (BI / activation) — never at the storage layer (where data accumulates and is hard to move)."})]})]})}),(0,a.jsx)(i.iv,{title:"Try it: Kafka streaming simulation (Pyodide)",description:"Simulates a Kafka producer + consumer group with Python queues. Shows message flow, lag calculation, consumer-group rebalancing. Pure Python stdlib — runs in browser.",icon:(0,a.jsx)(h.A,{className:"h-5 w-5"}),badge:"executable",children:(0,a.jsx)(u.l,{code:`import queue, random
from collections import defaultdict

# Kafka-like topic (in-memory queue)
topic = queue.Queue(maxsize=1000)
consumer_offsets = defaultdict(int)
messages_produced = 0
messages_consumed = 0

# Simulate producer (100 messages)
print("=== Kafka Producer Simulation ===")
for i in range(100):
    msg = {
        "offset": i,
        "key": f"customer_{random.randint(1, 10)}",
        "value": f"order_{i}",
        "timestamp": i * 100,
    }
    topic.put(msg)
    messages_produced += 1
print(f"Produced {messages_produced} messages to topic 'orders'")

# Simulate consumer group (3 consumers, round-robin)
print("
=== Consumer Group 'silver-conform' (3 consumers) ===")
consumers = ["consumer-0", "consumer-1", "consumer-2"]
lag_by_consumer = {c: 0 for c in consumers}

while not topic.empty():
    for consumer in consumers:
        try:
            msg = topic.get_nowait()
            consumer_offsets[consumer] += 1
            messages_consumed += 1
            lag = random.randint(10, 100)
            lag_by_consumer[consumer] += lag
        except queue.Empty:
            break

# Report
print(f"
{'Consumer':<15} {'Messages':<12} {'Avg Lag (ms)':<12}")
print("-" * 39)
for c in consumers:
    avg_lag = lag_by_consumer[c] / max(consumer_offsets[c], 1)
    print(f"{c:<15} {consumer_offsets[c]:<12} {avg_lag:<12.1f}")

print(f"
{'Total produced:':<20} {messages_produced}")
print(f"{'Total consumed:':<20} {messages_consumed}")
print(f"{'Throughput:':<20} {messages_consumed/3:.1f} msgs/consumer")
print(f"{'Avg lag:':<20} {sum(lag_by_consumer.values())/max(messages_consumed,1):.1f} ms")
print(f"
✓ All messages consumed. Consumer group rebalanced successfully.")`,buttonLabel:"Run streaming simulation (Pyodide)"})}),(0,a.jsx)(i.iv,{title:"File-format decision tree",description:"Pick the right format in under a minute.",icon:(0,a.jsx)(T.A,{className:"h-5 w-5"}),children:(0,a.jsx)(d.N,{language:"text",filename:"file_format_decision_tree.txt",code:`Q1: Is the data flowing through a stream?
├─ Yes → Avro (with Schema Registry) for governance
│        or Protobuf if you need field-masking
│        or JSON for prototyping only
└─ No  → Q2

Q2: Is the data analytical (columnar access pattern)?
├─ Yes → Parquet (always; Zstd compression)
│        On Databricks? → Delta (Parquet + log)
│        Multi-engine?  → Iceberg (vendor-neutral)
│        CDC-heavy?     → Hudi (upsert-first)
└─ No  → Q3

Q3: Is it in-memory / cross-language exchange?
├─ Yes → Arrow IPC (.arrow / .feather) — zero-copy
└─ No  → Q4

Q4: Is it service-to-service wire format?
├─ Yes → Protobuf (if backward-compat critical)
│        or JSON (if human-readable matters)
└─ No  → revisit Q1`})}),(0,a.jsxs)(x.S,{pageTitle:"Modern Big Data Stack",children:[(0,a.jsx)(x.P,{title:"Modern Big Data Stack IS part of a larger system — no page stands alone",connectedTo:"ADR-001 (platform architecture)",children:(0,a.jsx)("p",{children:"This page about Modern Big Data Stack is not an isolated reference — it's a node in a graph. The platform's thesis is that the same math appears across genomics, fintech, maritime, and audio. Modern Big Data Stack connects to the elegant-code cards via shared equations, and to the living-equation pages via live demos. The reader who arrives here looking for facts leaves with a map of where Modern Big Data Stack sits in the computational-science landscape."})}),(0,a.jsx)(x.P,{title:"The technology will change; the math won't",connectedTo:"ADR-055 (cross-disciplinary scope)",children:(0,a.jsx)("p",{children:"In a decade, the specific tools on this page (Modern Big Data Stack) may be replaced. But the underlying mathematics — the equations, the distributions, the optimisation rules — will be the same. SVD was invented in 1873 and still runs on NumPy today. Attention was described in 2017 and will run on whatever replaces PyTorch. The platform invests in the MATH, not the tools, because the math is the part that survives technology turnover."})}),(0,a.jsx)(x.P,{title:"The fold pattern respects the reader's attention",connectedTo:"ADR-050 (fold-section architecture)",children:(0,a.jsx)("p",{children:"This page has fold sections (collapsed by default) that reveal deeper content on demand — equation family comparisons, LaTeX derivations, production patterns, expected outputs, and citations. The basic content is visible immediately; the deeper phases are there when the reader is ready. Progressive disclosure isn't just UX — it's epistemological. A reader who wants the summary gets it; a reader who wants the derivation clicks to expand. Both are served by the same page."})}),(0,a.jsx)(x.P,{title:"The output IS the proof — not just the equation",connectedTo:"ADR-034 (ESM-2 + AlphaFold2 adoption)",children:(0,a.jsx)("p",{children:"Where this page has interactive demos (Pyodide + sliders + charts), the visual output IS the argument. Seeing a chart update as you drag a slider communicates the math in a way no formula can. The brain's pattern-recognition system processes the visual output faster than the verbal/analytical pathway. That's why the platform pairs every equation with a live demo — the output plays to a different level of the brain than the prose."})}),(0,a.jsx)(x.P,{title:"In a decade, this page will evolve — and that's the point",connectedTo:"ADR-022 (pgvector for variant embeddings)",children:(0,a.jsx)("p",{children:"The datasets, libraries, and tools on this page will be updated as technology evolves. The 1000-Genomes Project will become the 10M-Genomes Project. NumPy may be replaced by a WebGPU-native array library. PyTorch may give way to a successor. But the math — SVD, Attention, Poisson, FFT, Bayes, Kalman, GBM — will be the same. The platform is designed for this evolution: the equations are the anchor, the tools are the amplifier, and the fold sections let us update the tools without rewriting the page."})})]}),(0,a.jsx)(l.R,{pageId:"modern-big-data"}),(0,a.jsx)(c.B,{pageId:"modern-big-data"}),(0,a.jsx)(n.T,{relatedPages:[{id:"connections",reason:"Trace this topic's connections across the platform's math graph"},{id:"databricks",reason:"Continue to databricks — see also from this page"},{id:"evolution",reason:"Continue to evolution — see also from this page"}]}),(0,a.jsxs)("div",{className:"flex flex-wrap gap-2",children:[(0,a.jsx)(o(),{href:(0,g.ZJ)("databricks"),className:"text-sm text-primary hover:underline",children:"→ Continue to Databricks Lakehouse"}),(0,a.jsx)("span",{className:"text-muted-foreground",children:"\xb7"}),(0,a.jsx)(o(),{href:(0,g.ZJ)("evolution"),className:"text-sm text-primary hover:underline",children:"→ See where these fit in the platform evolution"}),(0,a.jsx)("span",{className:"text-muted-foreground",children:"\xb7"}),(0,a.jsx)(o(),{href:(0,g.ZJ)("research"),className:"text-sm text-primary hover:underline",children:"→ Research papers behind these technologies"})]})]})}},21910:(e,t,r)=>{"use strict";r.d(t,{V:()=>d});var a=r(95155),s=r(12115),o=r(80642),i=r(39430),n=r(66088),l=r(9921),c=r(89239);function d({items:e,initialCount:t=5,increment:r=5,children:d,getKey:p,autoLoadOnScroll:m=!1,collapsible:u=!0,showMoreLabel:h,showLessLabel:g="Show less",disableLazy:f=!1,disableWrapper:x=!1}){let y=e.length,b=f?y:Math.min(t,y),[v,k]=(0,s.useState)(b),S=(0,s.useRef)(null),w=v<y,_=u&&v>b,j=(0,s.useCallback)(()=>{k(e=>Math.min(e+r,y))},[r,y]),A=(0,s.useCallback)(()=>{k(b)},[b]);(0,s.useEffect)(()=>{if(!m||!w)return;let e=S.current;if(!e)return;let t=new IntersectionObserver(e=>{for(let t of e)if(t.isIntersecting){j();break}},{rootMargin:"200px"});return t.observe(e),()=>t.disconnect()},[m,w,j]);let N=(0,s.useRef)(e.length);(0,s.useEffect)(()=>{if(N.current!==e.length){N.current=e.length;let r=setTimeout(()=>k(Math.min(t,e.length)),0);return()=>clearTimeout(r)}},[e.length,t]);let T=h?h(y-v):`Show ${y-v} more`;return(0,a.jsxs)("div",{children:[(0,a.jsx)(o.N,{initial:!1,children:e.slice(0,v).map((e,t)=>x?(0,a.jsx)(s.Fragment,{children:d(e,t)},p?p(e,t):t):(0,a.jsx)(i.P.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},transition:{duration:.2},className:"overflow-hidden",children:d(e,t)},p?p(e,t):t))}),m&&w&&(0,a.jsx)("div",{ref:S,className:"h-4","aria-hidden":"true"}),(w||_)&&(0,a.jsxs)("div",{className:"mt-3 flex items-center gap-2 justify-center",children:[w&&(0,a.jsxs)(c.$,{variant:"outline",size:"sm",onClick:j,className:"gap-1.5",children:[(0,a.jsx)(n.A,{className:"h-3.5 w-3.5"})," ",T]}),_&&(0,a.jsxs)(c.$,{variant:"ghost",size:"sm",onClick:A,className:"gap-1.5",children:[(0,a.jsx)(l.A,{className:"h-3 w-3"})," ",g]})]}),(0,a.jsxs)("p",{className:"text-[10px] text-muted-foreground text-center mt-2",children:["Showing ",Math.min(v,y)," of ",y]})]})}},22164:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});let a=(0,r(6404).A)("external-link",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]])},26075:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});let a=(0,r(6404).A)("boxes",[["path",{d:"M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z",key:"lc1i9w"}],["path",{d:"m7 16.5-4.74-2.85",key:"1o9zyk"}],["path",{d:"m7 16.5 5-3",key:"va8pkn"}],["path",{d:"M7 16.5v5.17",key:"jnp8gn"}],["path",{d:"M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z",key:"8zsnat"}],["path",{d:"m17 16.5-5-3",key:"8arw3v"}],["path",{d:"m17 16.5 4.74-2.85",key:"8rfmw"}],["path",{d:"M17 16.5v5.17",key:"k6z78m"}],["path",{d:"M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z",key:"1xygjf"}],["path",{d:"M12 8 7.26 5.15",key:"1vbdud"}],["path",{d:"m12 8 4.74-2.85",key:"3rx089"}],["path",{d:"M12 13.5V8",key:"1io7kd"}]])},28871:(e,t,r)=>{Promise.resolve().then(r.bind(r,10968))},31025:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});let a=(0,r(6404).A)("git-branch",[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]])},44478:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});let a=(0,r(6404).A)("shield-check",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]])},46029:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});let a=(0,r(6404).A)("radio",[["path",{d:"M16.247 7.761a6 6 0 0 1 0 8.478",key:"1fwjs5"}],["path",{d:"M19.075 4.933a10 10 0 0 1 0 14.134",key:"ehdyv1"}],["path",{d:"M4.925 19.067a10 10 0 0 1 0-14.134",key:"1q22gi"}],["path",{d:"M7.753 16.239a6 6 0 0 1 0-8.478",key:"r2q7qm"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]])},53961:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});let a=(0,r(6404).A)("zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]])},60508:(e,t,r)=>{"use strict";r.d(t,{R:()=>b});var a=r(95155),s=r(12115),o=r(45160),i=r(89239),n=r(66349),l=r(85404),c=r(58381),d=r(79275),p=r(48368),m=r(22164),u=r(86901),h=r(89123),g=r(21628),f=r(98500),x=r.n(f),y=r(85757);function b({pageId:e}){let t=(0,d.C6)(e);return 0===t.length?null:(0,a.jsxs)(c.iv,{title:"Recent research (2023-2025)",description:"Modern papers that extend the math, code, and tools on this page.",icon:(0,a.jsx)(p.A,{className:"h-5 w-5"}),badge:`${t.length} paper${1===t.length?"":"s"}`,badgeVariant:"outline",contentClassName:"space-y-4",children:[t.map((e,t)=>(0,a.jsx)(v,{entry:e},t)),(0,a.jsxs)("p",{className:"text-[11px] text-muted-foreground italic",children:[t.length," paper",1===t.length?"":"s"," mapped to this page. Each shows the key algorithm + expected output (rendered as charts when the code produces JSON). Run the code in-browser via Pyodide."]})]})}function v({entry:e}){let[t,r]=(0,s.useState)(!1),[c,d]=(0,s.useState)(null);return(0,a.jsxs)("div",{className:"rounded-lg border border-border/60 p-4 space-y-3 hover:border-primary/30 transition-colors",children:[(0,a.jsxs)("div",{className:"space-y-1",children:[(0,a.jsxs)("div",{className:"flex items-start justify-between gap-3",children:[(0,a.jsx)("h4",{className:"text-sm font-semibold leading-tight flex-1",children:e.paperTitle}),(0,a.jsx)(o.E,{variant:"outline",className:"text-[10px] shrink-0",children:e.venue})]}),(0,a.jsxs)("p",{className:"text-[11px] text-muted-foreground",children:[e.authors," \xb7 ",e.year]}),e.arxivId&&(0,a.jsxs)("a",{href:`https://arxiv.org/abs/${e.arxivId}`,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-1 text-[11px] text-primary hover:underline",children:[(0,a.jsx)(m.A,{className:"h-3 w-3"}),"arXiv:",e.arxivId]}),e.doi&&!e.arxivId&&(0,a.jsxs)("a",{href:`https://doi.org/${e.doi}`,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-1 text-[11px] text-primary hover:underline",children:[(0,a.jsx)(m.A,{className:"h-3 w-3"}),"DOI:",e.doi]})]}),(0,a.jsx)("p",{className:"text-[12px] text-muted-foreground leading-relaxed",children:e.abstract}),(0,a.jsxs)(i.$,{variant:"outline",size:"sm",onClick:()=>r(!t),className:"h-7 text-[11px] gap-1.5",children:[(0,a.jsx)(u.A,{className:"h-3 w-3"}),t?"Hide expected code":"Show expected code + visualization"]}),t&&(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsx)(n.l,{code:e.expectedCode,buttonLabel:"Run in browser",onOutput:e=>{try{let t=e.indexOf("{"),r=e.lastIndexOf("}");if(t>=0&&r>t){let a=e.substring(t,r+1);d(JSON.parse(a))}}catch{}},hideTextOutput:!!c,compact:!0}),c?(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsxs)("div",{className:"flex items-center gap-1.5",children:[(0,a.jsx)(h.A,{className:"h-3.5 w-3.5 text-primary"}),(0,a.jsx)("p",{className:"text-[10px] uppercase tracking-wider text-muted-foreground",children:"Visualization (rendered from code output)"})]}),(0,a.jsx)(l.D,{data:c,accent:"oklch(0.65 0.18 250)",sourceCode:e.expectedCode})]}):(0,a.jsxs)("div",{className:"rounded-md border border-primary/20 bg-primary/5 p-2.5",children:[(0,a.jsx)("p",{className:"text-[10px] uppercase tracking-wider text-muted-foreground mb-1",children:"Expected output"}),(0,a.jsx)("pre",{className:"text-[11px] font-mono whitespace-pre-wrap leading-relaxed",children:e.expectedOutput})]}),(0,a.jsxs)("div",{className:"rounded-md border border-emerald-500/30 bg-emerald-500/5 p-2.5",children:[(0,a.jsx)("p",{className:"text-[10px] uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-1",children:"Key insight"}),(0,a.jsx)("p",{className:"text-[12px] text-foreground/80 leading-relaxed",children:e.keyInsight})]})]}),(0,a.jsxs)(x(),{href:(0,y.ZJ)("analytics-outputs"),className:"inline-flex items-center gap-1 text-[11px] text-primary hover:underline",children:["See this math visualized on Analytics Outputs ",(0,a.jsx)(g.A,{className:"h-3 w-3"})]})]})}},66088:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});let a=(0,r(6404).A)("chevron-down",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]])},66669:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});let a=(0,r(6404).A)("gauge",[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]])},83036:(e,t,r)=>{"use strict";r.d(t,{P:()=>c,S:()=>d});var a=r(95155),s=r(98500),o=r.n(s),i=r(44071),n=r(97810),l=r(85757);function c({title:e,connectedTo:t,researchHref:r,children:s}){return(0,a.jsxs)("div",{className:"rounded-md border border-primary/30 bg-primary/5 p-4 space-y-2",children:[(0,a.jsxs)("div",{className:"flex items-start gap-2",children:[(0,a.jsx)(i.A,{className:"h-4 w-4 text-primary mt-0.5 shrink-0"}),(0,a.jsxs)("div",{className:"flex-1 min-w-0",children:[(0,a.jsx)("p",{className:"text-sm font-semibold text-foreground/90 leading-tight",children:e}),t&&(0,a.jsxs)("div",{className:"flex items-center gap-1.5 mt-1",children:[(0,a.jsx)(n.A,{className:"h-3 w-3 text-muted-foreground"}),(0,a.jsxs)(o(),{href:r??(0,l.ZJ)("research"),className:"text-[10px] text-muted-foreground hover:text-primary hover:underline",children:["Connected to: ",t," →"]})]})]})]}),(0,a.jsx)("div",{className:"text-xs text-muted-foreground leading-relaxed space-y-2 pl-6",children:s})]})}function d({pageTitle:e,children:t}){return(0,a.jsxs)("div",{className:"space-y-4",children:[(0,a.jsxs)("div",{className:"flex items-center gap-2 border-b border-border/60 pb-2",children:[(0,a.jsx)(i.A,{className:"h-5 w-5 text-primary"}),(0,a.jsxs)("h2",{className:"text-base font-bold text-foreground/90",children:["My deeper thoughts — ",e]})]}),(0,a.jsx)("p",{className:"text-xs text-muted-foreground italic leading-relaxed",children:"These are not summaries. They are arguments — the kind of connections a reader with serious grey matter would make after living with the material for years. Each thought connects to the platform's research section (ADRs, papers, decision records) so it's traceable, not just opinionated."}),(0,a.jsx)("div",{className:"space-y-3",children:t})]})}},86901:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});let a=(0,r(6404).A)("sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]])}},e=>{e.O(0,[6919,8500,9430,3493,9760,7591,6012,9237,4843,8656,9620,6722,5404,9275,2194,5079,8441,3794,7358],()=>e(e.s=28871)),_N_E=e.O()}]);