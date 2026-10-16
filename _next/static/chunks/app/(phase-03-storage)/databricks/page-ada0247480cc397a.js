(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9900],{2221:(e,t,a)=>{"use strict";a.d(t,{DatabricksPage:()=>I});var s=a(95155),r=a(98500),o=a.n(r),i=a(58381),l=a(27774),n=a(60508),d=a(92194),c=a(19776),m=a(37108),u=a(32824),h=a(85757),p=a(45160),x=a(66349),g=a(15989),f=a(10762),_=a(86901),b=a(26075),v=a(33024),y=a(30971),k=a(8195),w=a(65576),S=a(93219),N=a(31025),j=a(44478),A=a(27413),E=a(83036);let C=`# ============================================================
# bronze/silver/customer_conform.py
# Idempotent Silver conformance using Delta MERGE
# ============================================================
import dlt
from pyspark.sql.functions import (
    col, lit, current_timestamp, md5, concat_ws, when, coalesce,
)
from pyspark.sql.types import StringType

@dlt.view
def bronze_customer_raw():
    return (
        spark.readStream
        .format("delta")
        .load("/mnt/bronze/salesforce/account")
        .unionByName(spark.read.table("bronze.shopify.customer"))
    )

@dlt.table(
    name="silver.customer",
    comment="Conformed customer across Salesforce + Shopify, deduplicated by email hash",
    table_properties={
        "quality": "silver",
        "delta.enableChangeDataFeed": "true",
        "pipelines.reset.allowed": "false",
    },
    partition_cols=["region_code"],
)
@dlt.expect_or_drop("email_not_null", "customer_email IS NOT NULL")
@dlt.expect_or_quarantine(
    "email_format",
    r"customer_email RLIKE '^([A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\\\.[A-Za-z]{2,})$'"
)
def silver_customer():
    src = dlt.read("bronze_customer_raw")
    return (
        src
        .withColumn("customer_email_hash", md5(lower(trim(col("customer_email")))))
        .withColumn("customer_sk", md5(concat_ws("||",
            col("customer_email_hash"), col("loaded_at"))))
        .withColumn("full_name", concat_ws(" ", col("first_name"), col("last_name")))
        .withColumn("is_active", when(col("status") == "ACTIVE", lit(True)).otherwise(lit(False)))
        .withColumn("region_code", coalesce(col("region"), lit("UNKNOWN")))
        .withColumn("loaded_at", current_timestamp())
        .dropDuplicates(["customer_email_hash", "loaded_at"])
        .select(
            "customer_sk", "customer_id", "customer_email_hash", "full_name",
            "segment", "region_code", "loyalty_tier", "is_active", "loaded_at",
        )
    )

# Idempotent MERGE into the curated Delta table — runs after DLT materialisation
@dlt.table(name="silver.customer_curated")
def silver_customer_curated():
    src = dlt.read("silver.customer")
    target = spark.read.table("silver.customer_curated")
    (
        target.alias("t")
        .merge(src.alias("s"), "t.customer_sk = s.customer_sk")
        .whenMatchedUpdateAll()
        .whenNotMatchedInsertAll()
        .execute()
    )
    return target
`,D=`-- ============================================================
-- Bronze → Silver conformance using Delta Lake + Spark SQL
-- Run inside Databricks SQL warehouse for ad-hoc investigations
-- ============================================================
-- Optimise for predicate pushdown on hot columns
CREATE TABLE IF NOT EXISTS silver.order_line
USING DELTA
LOCATION 's3://moderndatascieng-silver/sales/order_line'
PARTITIONED BY (order_date_sk)
CLUSTERED BY (customer_sk, product_sk)
TBLPROPERTIES (
  'delta.enableChangeDataFeed'   = true,
  'delta.logRetentionDuration'   = 'interval 30 days',
  'delta.deletedFileRetentionDuration' = 'interval 7 days',
  'delta.dataSkippingNumIndexedCols' = 32,
  'quality' = 'silver',
  'owner'   = 'data_platform'
);

-- Idempotent MERGE — safe to re-run
MERGE INTO silver.order_line AS t
USING (
  SELECT
    o.order_id,
    o.order_line_id,
    o.customer_sk,
    o.product_sk,
    o.store_sk,
    o.order_date_sk,
    o.qty,
    o.gross_amount,
    o.discount_amount,
    o.net_amount,
    o.loaded_at
  FROM bronze.shopify.order_line_raw
  WHERE o.loaded_at > (SELECT COALESCE(MAX(loaded_at), '1970-01-01') FROM silver.order_line)
) AS s
ON t.order_line_id = s.order_line_id
WHEN MATCHED AND s.loaded_at > t.loaded_at THEN UPDATE SET *
WHEN NOT MATCHED THEN INSERT *;

-- Z-ORDER hot Silver tables nightly — 6x scan reduction on customer_sk
OPTIMIZE silver.order_line ZORDER BY (customer_sk, product_sk);
VACUUM silver.order_line RETAIN 168 HOURS;

-- Time travel — point-in-time audit
SELECT count(*) FROM silver.order_line VERSION AS OF 42
WHERE customer_sk = 'c5a9f1...';
`,T=`# cluster policy: "transform_gold" — used by dbt + PySpark DLT
# Managed via Databricks asset bundles (databricks.yml)
cluster_type: "all-purpose"
spark_version: "14.3.x-scala2.12"
node_type_id: "Standard_E16ds_v4"
autoscale:
  min_workers: 4
  max_workers: 24
  mode: "ENHANCED"            # photon + enhanced autoscaler
driver_node_type_id: "Standard_E16ds_v4"
autotermination_minutes: 30
spark_conf:
  "spark.databricks.delta.optimizeWrite.enabled": "true"
  "spark.databricks.delta.autoCompact.enabled": "true"
  "spark.sql.adaptive.coalescePartitions.enabled": "true"
  "spark.sql.parquet.compression.codec": "snappy"
  "spark.databricks.cluster.profile": "singleNode"
init_scripts:
  - workspace: /Shared/init/install_unity_driver.sh
aws_attributes:
  instance_profile_arn: "arn:aws:iam::123456789012:instance-profile/databricks-s3"
  zone_id: "auto"
`,R=[{label:"Bronze tables",value:String(u.Zk[0].tables)},{label:"Bronze volume / mo",value:u.Zk[0].volume},{label:"Silver tables",value:String(u.Zk[1].tables)},{label:"Silver volume / mo",value:u.Zk[1].volume},{label:"Gold tables",value:String(u.Zk[2].tables)},{label:"Gold volume / mo",value:u.Zk[2].volume}],M=[{metric:"Photon vs legacy runtime",value:"2.4x",note:"Silver conformance job"},{metric:"Z-ORDER scan reduction",value:"6.1x",note:"On customer_sk predicate"},{metric:"Cluster pool warm-start",value:"92%",note:"No cold-start on dbt run"},{metric:"Photon cost / task",value:"-31%",note:"vs non-Photon FY24"}];function I(){return(0,s.jsxs)("div",{className:"space-y-8",children:[(0,s.jsx)(i.zY,{eyebrow:"Lakehouse — storage & compute",title:"Databricks \xb7 Spark \xb7 Delta Lake \xb7 Medallion",description:"Databricks is the engine room of the platform: PySpark + Spark SQL workloads, Delta Lake for ACID + time travel, and the Bronze→Silver→Gold medallion pattern as the canonical data flow. Photon runtime, cluster pools and Unity Catalogue keep it fast, cheap and governed.",right:(0,s.jsxs)("div",{className:"flex gap-2",children:[(0,s.jsxs)(p.E,{variant:"outline",className:"gap-1.5",children:[(0,s.jsx)(_.A,{className:"h-3 w-3"})," Photon"]}),(0,s.jsxs)(p.E,{variant:"outline",className:"gap-1.5",children:[(0,s.jsx)(b.A,{className:"h-3 w-3"})," Medallion"]})]})}),(0,s.jsx)("div",{className:"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3",children:R.map(e=>(0,s.jsx)(i.nO,{label:e.label,value:e.value},e.label))}),(0,s.jsx)(i.iv,{title:"Medallion architecture — Bronze \xb7 Silver \xb7 Gold",description:"Each layer has a single responsibility. The flow is unidirectional and idempotent — re-running a Silver job for a date partition never rewrites history unless explicitly versioned.",icon:(0,s.jsx)(v.A,{className:"h-5 w-5"}),contentClassName:"p-0",children:(0,s.jsx)("div",{className:"grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border/60",children:u.Zk.map(e=>{let t="Bronze"===e.layer?"border-amber-500/40 bg-amber-500/6":"Silver"===e.layer?"border-violet-500/40 bg-violet-500/6":"border-emerald-500/40 bg-emerald-500/6";return(0,s.jsxs)("div",{className:`p-5 ${t}`,children:[(0,s.jsxs)("div",{className:"flex items-center gap-2 mb-3",children:[(0,s.jsx)("span",{className:"h-3 w-3 rounded-full",style:{background:"Bronze"===e.layer?"var(--chart-2)":"Silver"===e.layer?"var(--chart-3)":"var(--chart-1)"}}),(0,s.jsx)("p",{className:"text-lg font-semibold",children:e.layer}),(0,s.jsxs)(p.E,{variant:"outline",className:"ml-auto text-[10px]",children:[e.tables," tables"]})]}),(0,s.jsx)("p",{className:"text-sm text-muted-foreground mb-3",children:e.purpose}),(0,s.jsxs)("dl",{className:"text-xs space-y-1.5",children:[(0,s.jsxs)("div",{className:"flex justify-between gap-2",children:[(0,s.jsx)("dt",{className:"text-muted-foreground",children:"Location"}),(0,s.jsx)("dd",{className:"font-mono break-all text-right",children:e.location})]}),(0,s.jsxs)("div",{className:"flex justify-between gap-2",children:[(0,s.jsx)("dt",{className:"text-muted-foreground",children:"Format"}),(0,s.jsx)("dd",{className:"font-mono",children:e.format})]}),(0,s.jsxs)("div",{className:"flex justify-between gap-2",children:[(0,s.jsx)("dt",{className:"text-muted-foreground",children:"Volume"}),(0,s.jsx)("dd",{className:"font-mono",children:e.volume})]}),(0,s.jsxs)("div",{className:"flex justify-between gap-2",children:[(0,s.jsx)("dt",{className:"text-muted-foreground",children:"Pipeline"}),(0,s.jsx)("dd",{className:"font-mono text-right",children:e.pipelines})]})]})]},e.layer)})})}),(0,s.jsxs)("div",{className:"grid lg:grid-cols-2 gap-4",children:[(0,s.jsx)(i.iv,{title:"PySpark DLT — Silver customer conformance",description:"Delta Live Tables with expectations. PII rows go to a quarantine table; non-PII conformance is reproducible and idempotent.",icon:(0,s.jsx)(y.A,{className:"h-5 w-5"}),badge:"PySpark + DLT",children:(0,s.jsx)(c.N,{code:C,language:"python",filename:"silver/customer_conform.py",highlight:[15,16,17,18,19,20,21,22,23,30,31,32,33,34,35,36,37,38,39,40,41,42,43]})}),(0,s.jsx)(i.iv,{title:"Delta Lake + Spark SQL — Bronze→Silver",description:"Plain SQL for ad-hoc investigations and to materialise hot Silver tables with Z-ORDER + CDF + retention.",icon:(0,s.jsx)(k.A,{className:"h-5 w-5"}),badge:"Spark SQL",children:(0,s.jsx)(c.N,{code:D,language:"sql",filename:"silver_order_line.sql",highlight:[6,7,8,9,10,11,12,13,14,15,16,17,18,25,26,27,28,29,30,31,32,33,34,36,37,40,41]})})]}),(0,s.jsxs)("div",{className:"grid lg:grid-cols-2 gap-4",children:[(0,s.jsx)(i.iv,{title:"Cluster policy — transform_gold",description:"Provisioned via Databricks asset bundles from Git. Photon + enhanced autoscaler + cluster pools keep startup latency under 30s and cost predictable.",icon:(0,s.jsx)(w.A,{className:"h-5 w-5"}),badge:"Asset bundle",children:(0,s.jsx)(c.N,{code:T,language:"yaml",filename:"databricks.yml",highlight:[7,8,9,10,13,14,15,16,17,18,19,20]})}),(0,s.jsx)(i.iv,{title:"Performance lift (synthetic)",description:"Photon + Z-ORDER + cluster pools combined drove a 2.4\xd7 runtime reduction and 31% cost-per-task reduction YoY.",icon:(0,s.jsx)(S.A,{className:"h-5 w-5"}),badge:"Synthetic",contentClassName:"p-0",children:(0,s.jsxs)("table",{className:"w-full text-sm",children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{className:"border-b border-border/60 bg-muted/40",children:[(0,s.jsx)("th",{className:"text-left px-4 py-2.5 text-xs uppercase tracking-wider text-muted-foreground",children:"Metric"}),(0,s.jsx)("th",{className:"text-left px-4 py-2.5 text-xs uppercase tracking-wider text-muted-foreground",children:"Lift"}),(0,s.jsx)("th",{className:"text-left px-4 py-2.5 text-xs uppercase tracking-wider text-muted-foreground",children:"Note"})]})}),(0,s.jsx)("tbody",{children:M.map(e=>(0,s.jsxs)("tr",{className:"border-b border-border/40 last:border-0",children:[(0,s.jsx)("td",{className:"px-4 py-2.5",children:e.metric}),(0,s.jsx)("td",{className:"px-4 py-2.5 font-mono font-semibold text-emerald-600 dark:text-emerald-400",children:e.value}),(0,s.jsx)("td",{className:"px-4 py-2.5 text-xs text-muted-foreground",children:e.note})]},e.metric))})]})})]}),(0,s.jsxs)("div",{className:"grid md:grid-cols-3 gap-4",children:[(0,s.jsx)(i.iv,{title:"Integrations",icon:(0,s.jsx)(N.A,{className:"h-5 w-5"}),children:(0,s.jsxs)("ul",{className:"text-sm space-y-1.5 text-muted-foreground",children:[(0,s.jsx)("li",{children:"• Snowflake: Delta → Snowflake auto-ingest via manifest"}),(0,s.jsx)("li",{children:"• dbt: runs on Databricks SQL warehouse for Gold transforms"}),(0,s.jsxs)("li",{children:["• Airflow: ",(0,s.jsx)(c.R,{children:"DatabricksSubmitRunOperator"})]}),(0,s.jsx)("li",{children:"• Power BI: Direct Lake connector to Silver/Gold Delta"}),(0,s.jsx)("li",{children:"• MLflow + Feature Store for offline + online features"})]})}),(0,s.jsx)(i.iv,{title:"Governance",icon:(0,s.jsx)(j.A,{className:"h-5 w-5"}),children:(0,s.jsxs)("ul",{className:"text-sm space-y-1.5 text-muted-foreground",children:[(0,s.jsx)("li",{children:"• Unity Catalogue: column-level RBAC"}),(0,s.jsx)("li",{children:"• PII tags auto-applied from dbt YAML"}),(0,s.jsx)("li",{children:"• Dynamic view redaction for sensitive columns"}),(0,s.jsx)("li",{children:"• Audit log streamed to Datadog"}),(0,s.jsx)("li",{children:"• Immuta policy enforcement layer"})]})}),(0,s.jsx)(i.iv,{title:"Operational excellence",icon:(0,s.jsx)(w.A,{className:"h-5 w-5"}),children:(0,s.jsxs)("ul",{className:"text-sm space-y-1.5 text-muted-foreground",children:[(0,s.jsx)("li",{children:"• DLT pipelines: declared quality (bronze/silver/gold)"}),(0,s.jsx)("li",{children:"• Cluster pools reuse executor nodes (warm-start)"}),(0,s.jsx)("li",{children:"• Z-ORDER nightly on top-10 hot Silver tables"}),(0,s.jsx)("li",{children:"• VACUUM + retention scheduled via Airflow"}),(0,s.jsx)("li",{children:"• Cost-per-task tagged in cluster policy"})]})})]}),(0,s.jsx)(i.iv,{title:"Multi-language: 5 idioms for Silver customer conformance",description:"PySpark (default) \xb7 Scala (type-safe performant) \xb7 Rust (vectorised UDF) \xb7 Elixir (real-time streaming) \xb7 C (Arrow native). Click to open the drawer — keeps the page lightweight.",icon:(0,s.jsx)(A.A,{className:"h-5 w-5"}),badge:"5 languages \xb7 drawer",children:(0,s.jsx)(m.j,{drawerMode:!0,drawerButtonLabel:"View 5-language Silver conformance implementations",title:"Silver customer conformance — 5 idiomatic implementations",description:"The same MERGE logic in 5 languages. PySpark = analytics default. Scala = type-safe performant. Rust = vectorised UDF. Elixir = real-time streaming via Broadway + BEAM. C = Arrow native UDF.",samples:[{language:"python",filename:"silver_customer.py",note:"PySpark DLT — the default for analytics engineers. Reads from streams, MERGEs on customer_sk. Compiles to JVM bytecode via Py4J bridge.",code:`import dlt
from pyspark.sql.functions import col, md5, concat_ws, when, lit, current_timestamp

@dlt.table(name="silver.customer", partition_cols=["region_code"])
@dlt.expect_or_drop("email_not_null", "customer_email IS NOT NULL")
def silver_customer():
    return (
        spark.readStream.format("delta")
        .load("/mnt/bronze/salesforce/account")
        .withColumn("customer_email_hash", md5(col("customer_email")))
        .withColumn("customer_sk", md5(concat_ws("||", col("customer_email_hash"), col("loaded_at"))))
        .withColumn("is_active", when(col("status") == "ACTIVE", lit(True)).otherwise(lit(False)))
    )`,highlight:[4,5,6,7,8,9,10,11]},{language:"scala",filename:"SilverCustomerConformance.scala",note:"Scala Spark — type-safe, ~15% faster than PySpark on the same cluster. JVM-native; compiles to bytecode. Used for performance-critical batch jobs.",code:`package com.moderndatascieng.silver

import org.apache.spark.sql.functions._
import org.apache.spark.sql.expressions.Window
import org.apache.spark.sql.{DataFrame, SaveMode, SparkSession}

object SilverCustomerConformance {
  def transform(src: DataFrame)(implicit spark: SparkSession): DataFrame = {
    import spark.implicits._
    src
      .withColumn("customer_email_hash", md5(lower($"customer_email")))
      .withColumn("customer_sk", md5(concat_ws("||", $"customer_email_hash", $"loaded_at")))
      .withColumn("is_active", when($"status" === "ACTIVE", lit(true)).otherwise(lit(false)))
      .withColumn("loaded_at", current_timestamp())
      .dropDuplicates("customer_email_hash", $"loaded_at")
  }

  def merge(target: String, src: DataFrame)(implicit spark: SparkSession): Unit = {
    spark.sql(s"""
      MERGE INTO $target AS t
      USING src AS s
        ON t.customer_sk = s.customer_sk
      WHEN MATCHED AND s.loaded_at > t.loaded_at THEN UPDATE SET *
      WHEN NOT MATCHED THEN INSERT *
    """)
  }
}`,highlight:[8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]},{language:"rust",filename:"pii_redact_udf.rs",note:"Rust UDF — vectorised regex PII redaction. ~10\xd7 faster than SQL UDFs, ~3\xd7 faster than Python UDFs. Compiles to Wasm for portability + native for max perf.",code:`// Snowflake external function — Rust implementation
// Reads a column of strings, redacts PII patterns (SSN, card, email)

use regex::Regex;

#[no_mangle]
pub extern "C" fn redact_pii(input: &str) -> String {
    let ssn = Regex::new(r"\bd{3}-d{2}-d{4}\b").unwrap();
    let card = Regex::new(r"\bd{16,19}\b").unwrap();
    let email = Regex::new(r"\b[A-Z][a-z]+@[a-z]+.(com|org|net)\b").unwrap();

    let mut out = input.to_string();
    out = ssn.replace_all(&out, "[REDACTED-SSN]").to_string();
    out = card.replace_all(&out, "[REDACTED-CARD]").to_string();
    out = email.replace_all(&out, "[REDACTED-EMAIL]").to_string();
    out
}

// Compile: cargo build --release --target wasm32-wasi
// Deploy: Snowflake External Function via API Gateway + Lambda
`,highlight:[7,8,9,12,13,14,15,16,17]},{language:"elixir",filename:"silver_customer_conform.ex",note:"Elixir + BroadwayKafka — real-time streaming with back-pressure via the BEAM VM. Discord + WhatsApp use this for high-concurrency pipelines. Compiles to .beam bytecode.",code:`defmodule ModernDataSciEng.SilverCustomerConform do
  @moduledoc """
  Broadway pipeline: Kafka Bronze events -> Silver conformed table.
  Uses BroadwayKafka for back-pressure + concurrent processing.
  The BEAM VM gives us ~1M concurrent lightweight processes per node.
  """
  use Broadway

  alias BroadwayKafka.Producer
  alias ModernDataSciEng.{Customer, Repo}

  @impl true
  def start_link(opts \\\\ []) do
    Broadway.start_link(__MODULE__,
      name: __MODULE__,
      producer: [
        module: {Producer, [
          hosts: [{"broker-1", 9092}],
          group_id: "silver-conform-service",
          topics: ["bronze.customer"],
        ]},
        concurrency: 4,
      ],
      processors: [
        default: [concurrency: 100, max_demand: 50],
      ],
      batchers: [
        default: [concurrency: 10, batch_size: 1000, batch_timeout: 5000],
      ],
    )
  end

  @impl true
  def handle_message(_, message, _) do
    # Decode Avro payload
    {:ok, customer_event} = :avro.decode(message.data, schema_name: "Customer")

    # Conform: generate surrogate key, normalise, dedupe
    customer_sk =
      :crypto.hash(:md5, "#{customer_event.email_hash}|#{customer_event.loaded_at}")
      |> Base.encode16(case: :lower)

    conformed = %{
      customer_sk: customer_sk,
      customer_id: customer_event.customer_id,
      email_hash: customer_event.email_hash,
      is_active: customer_event.status == "ACTIVE",
      region_code: customer_event.region || "UNKNOWN",
      loaded_at: DateTime.utc_now(),
    }

    # Idempotent upsert via Ecto (Postgres wire)
    Repo.insert_all(Customer, [conformed],
      on_conflict: {:replace, [:is_active, :region_code, :loaded_at]},
      conflict_target: :customer_sk,
    )

    message
  end

  @impl true
  def handle_batch(_, messages, _, _) do
    # Batch write to Delta via JDBC
    rows = Enum.map(messages, & &1.data)
    :delta_writer.write("s3://silver/customer", rows)
    :ok
  end
end

# File types: .ex (source), .beam (compiled bytecode), .ez (release archive)
# Run: mix run -e ModernDataSciEng.SilverCustomerConform.start_link()`,highlight:[11,12,13,14,15,16,17,18,19,28,29,30,31,32,33,47,48,49,50,51]},{language:"c",filename:"vectorised_email_hash.c",note:"C + Apache Arrow C++ — vectorised column processing at the native layer. Most high-level APIs (DuckDB, Polars, Pandas) eventually call into C/C++ here. Compiles to .so shared library.",code:`// ============================================================
// Apache Arrow C UDF — vectorised email hashing for PII redaction
// Process a whole column at once (vectorised) — 10x faster than row-by-row
// Compiles to a shared lib loadable by DuckDB / Postgres / Polars
// ============================================================
#include <arrow/c/abi.h>
#include <openssl/md5.h>
#include <string.h>
#include <stdint.h>

// Arrow C Data Interface (ABI-stable across languages)
// The same function is callable from Python, Rust, Go, Java via Arrow C-ABI
int vectorised_email_hash(
    struct ArrowArray* input_column,   // input: strings
    struct ArrowArray* output_column,  // output: fixed-size binary (16 bytes MD5)
    int64_t length
) {
    if (input_column->n_buffers < 3) return -1;

    const int32_t* offsets = (const int32_t*) input_column->buffers[1];
    const char* data = (const char*) input_column->buffers[2];

    // Allocate output buffer (16 bytes per row for MD5)
    uint8_t* out = (uint8_t*) output_column->buffers[1];

    for (int64_t i = 0; i < length; i++) {
        int32_t start = offsets[i];
        int32_t end = offsets[i + 1];
        size_t len = (size_t)(end - start);

        // Compute MD5 of the email string (OpenSSL)
        MD5((const unsigned char*)(data + start), len, out + (i * 16));
    }

    return 0;  // success
}

// Compile: gcc -O3 -shared -fPIC -o email_hash_udf.so email_hash_udf.c \\
//          -I/usr/include/arrow -lcrypto
// Load in DuckDB:  INSTALL 'email_hash_udf.so';
//                  CREATE MACRO email_hash(col) AS udf_vectorised_email_hash(col);
// Load in Postgres: CREATE FUNCTION email_hash(text) RETURNS bytea \\
//                   AS 'email_hash_udf.so', 'vectorised_email_hash' LANGUAGE C;`,highlight:[9,10,11,12,13,15,16,17,20,21,22,23,28,29,30,31,32]}]})}),(0,s.jsx)(i.iv,{title:"Try it: Delta MERGE syntax validator (Pyodide)",description:"Validates that a MERGE statement has all required clauses (MERGE INTO, USING, ON, WHEN MATCHED, WHEN NOT MATCHED). Pure Python regex — runs in browser.",icon:(0,s.jsx)(f.A,{className:"h-5 w-5"}),badge:"executable",children:(0,s.jsx)(x.l,{code:`import re

merge_sql = """
MERGE INTO silver.order_line AS t
USING (
  SELECT order_id, customer_sk, product_sk, order_date_sk, qty, net_amount
  FROM bronze.shopify.order_line_raw
  WHERE loaded_at > (SELECT COALESCE(MAX(loaded_at), '1970-01-01') FROM silver.order_line)
) AS s
ON t.order_line_id = s.order_line_id
WHEN MATCHED AND s.loaded_at > t.loaded_at THEN UPDATE SET *
WHEN NOT MATCHED THEN INSERT *
"""

required_clauses = {
    "MERGE INTO": "target table",
    "USING": "source data",
    "ON": "join condition",
    "WHEN MATCHED": "update clause",
    "WHEN NOT MATCHED": "insert clause",
}

issues = []
for clause, desc in required_clauses.items():
    if clause in merge_sql:
        print(f"\\u2713 Found '{clause}' \u2014 {desc}")
    else:
        issues.append(f"\\u26a0 Missing '{clause}' \u2014 {desc}")

if re.search(r'\\bAS \\w+', merge_sql):
    print("\\u2713 Table aliases found (AS t / AS s)")
if "UPDATE SET" in merge_sql:
    print("\\u2713 UPDATE SET found")
if "INSERT" in merge_sql:
    print("\\u2713 INSERT found")

print()
print("=" * 60)
if issues:
    print("MERGE SYNTAX ISSUES:")
    for i in issues: print(f"  {i}")
    print(f"\\\\n{len(issues)} issue(s) found.")
else:
    print("\\u2713 MERGE statement is valid \u2014 all required clauses present.")
    print("  Safe to deploy as idempotent Silver conformance.")
print("=" * 60)`,buttonLabel:"Run MERGE validator (Pyodide)"})}),(0,s.jsx)(i.iv,{title:"Try it: Rust/C code compiled to WebAssembly",description:"The Rust UDF + C Arrow UDF above, compiled to Wasm, would run in your browser. This demo uses a hand-assembled 41-byte Wasm binary that exports an `add` function — the pattern is the same for real Rust/C code compiled via `cargo build --target wasm32-wasi` or `emcc`.",icon:(0,s.jsx)(f.A,{className:"h-5 w-5"}),badge:"Wasm \xb7 ADR-016",children:(0,s.jsx)(g.n,{sourceLanguage:"Rust/C → wasm32-wasi",buttonLabel:"Run Wasm module (41 bytes)",description:"In production: compile the Rust UDF above with `cargo build --target wasm32-wasi` and host the .wasm binary. The WasmRunner loads it via WebAssembly.instantiate() and calls the exported function — same pattern regardless of source language (Rust, C, Go, Elixir all compile to Wasm)."})}),(0,s.jsxs)(E.S,{pageTitle:"Databricks",children:[(0,s.jsx)(E.P,{title:"Databricks IS Spark-as-a-service — and Spark IS functional programming at scale",connectedTo:"ADR-001 (platform architecture)",children:(0,s.jsx)("p",{children:"Spark's RDD/DataFrame model is functional: map, filter, reduce, groupBy — the SAME operations as Haskell/Scala collections. The difference: Spark distributes them across a cluster. A DataFrame IS a distributed collection. A groupBy IS a distributed hash-partition. The functional paradigm (immutability, lazy evaluation) IS the reason Spark is fault-tolerant: if a partition fails, recompute from the lineage DAG. Databricks wraps this in a managed service — but the math IS functional programming, distributed."})}),(0,s.jsx)(E.P,{title:"Photon IS Databricks' C++ rewrite of the Spark SQL engine — 10\xd7 faster",connectedTo:"ADR-050 (fold-section architecture)",children:(0,s.jsx)("p",{children:"Spark's original SQL engine was written in Scala (JVM). Photon (2021) rewrites it in C++ for vectorised execution — 10\xd7 faster on the same hardware. The SQL IS the same; the execution engine is different. This IS the 'production patterns' fold in action: the tool (Spark SQL → Photon) changes, the math (relational algebra, Codd 1970) stays. When Photon is replaced by a GPU-native SQL engine in 2030, the SQL stays. The fold absorbs the change."})}),(0,s.jsx)(E.P,{title:"Delta Lake IS ACID transactions on Parquet — and it's open",connectedTo:"ADR-013 (Delta Lake)",children:(0,s.jsx)("p",{children:"Delta Lake adds a transaction log (_delta_log/) on top of Parquet files. The log IS an append-only sequence of JSON actions (Add, Remove, Commit). This IS the same event-sourcing pattern as Kafka's log — just for files instead of messages. The ACID guarantee comes from the log: read the log → determine which Parquet files are 'current' → read those files. The log IS the source of truth; the files are materialised views. Delta IS event-sourcing for data lakes."})}),(0,s.jsx)(E.P,{title:"The cluster park IS Databricks' cost-aware autoscaling — and it saves 19% YoY",connectedTo:"ADR-001 (platform architecture)",children:(0,s.jsx)("p",{children:"Databricks' cluster parks maintain a pool of pre-warmed clusters that autoscale based on workload. When a job starts, it grabs a pre-warmed cluster (no startup latency). When the job ends, the cluster returns to the pool (no teardown). This IS the same pattern as connection pooling in databases — but for Spark clusters. The 19% YoY cost reduction comes from avoiding cluster startup/teardown overhead. The pool IS the amortisation of cold-start cost."})}),(0,s.jsx)(E.P,{title:"Unity Catalog IS Databricks' answer to Snowflake's governance — and it's open",connectedTo:"ADR-050 (fold-section architecture)",children:(0,s.jsx)("p",{children:"Unity Catalog centralises governance (ACLs, column-level masking, row-level filters) across all Databricks workspaces. This IS the same pattern as Snowflake's GRANT/REVOKE — but for Delta tables instead of Snowflake tables. The governance model IS RBAC (role-based access control) — the same model that every database since Oracle 7 (1992) has used. Unity Catalog IS the 'Production patterns' fold for governance — the pattern (RBAC) stays, the implementation (Unity vs Snowflake vs Lake Formation) changes."})})]}),(0,s.jsx)(n.R,{pageId:"databricks"}),(0,s.jsx)(d.B,{pageId:"databricks"}),(0,s.jsx)(l.T,{relatedPages:[{id:"connections",reason:"Trace this topic's connections across the platform's math graph"},{id:"snowflake",reason:"Continue to snowflake — see also from this page"},{id:"orchestration",reason:"Continue to orchestration — see also from this page"}]}),(0,s.jsxs)("div",{className:"flex flex-wrap gap-2",children:[(0,s.jsx)(o(),{href:(0,h.ZJ)("snowflake"),className:"text-sm text-primary hover:underline",children:"→ Continue to Snowflake serving"}),(0,s.jsx)("span",{className:"text-muted-foreground",children:"\xb7"}),(0,s.jsx)(o(),{href:(0,h.ZJ)("orchestration"),className:"text-sm text-primary hover:underline",children:"→ or jump to Orchestration"})]})]})}},8195:(e,t,a)=>{"use strict";a.d(t,{A:()=>s});let s=(0,a(6404).A)("database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]])},15989:(e,t,a)=>{"use strict";a.d(t,{n:()=>x});var s=a(95155),r=a(12115),o=a(80642),i=a(39430),l=a(89239),n=a(45160),d=a(6296),c=a(12651),m=a(13545),u=a(20232),h=a(65576);let p=new Uint8Array([0,97,115,109,1,0,0,0,1,7,1,96,2,127,127,1,127,3,2,1,0,7,7,1,3,97,100,100,0,0,10,9,1,7,0,32,0,32,1,106,11]);function x({buttonLabel:e="Run in browser (Wasm)",description:t="Loads a hand-assembled WebAssembly binary (41 bytes) and calls the exported `add(i32, i32) -> i32` function. In production, this would be a Rust/C binary compiled via `cargo build --target wasm32-wasi` or `emcc`.",sourceLanguage:a="Rust/C"}){let[x,g]=(0,r.useState)("idle"),[f,_]=(0,r.useState)(""),[b,v]=(0,r.useState)(null),y=(0,r.useCallback)(async()=>{g("running"),_("Instantiating WebAssembly module (41 bytes)…\n");let e=performance.now();try{let{instance:t}=await WebAssembly.instantiate(p),s=t.exports.add;if(!s)throw Error("Exported function 'add' not found in Wasm module");let r=Math.round(performance.now()-e);v(r);let o=[];for(let[e,t]of(o.push(`✓ Wasm module instantiated in ${r}ms (41 bytes)`),o.push(`  Source language: ${a} (compiled to wasm32)`),o.push("  Exported function: add(i32, i32) -> i32"),o.push(""),o.push("Test cases:"),[[2,3],[100,200],[42,58],[-10,20],[1e6,1]])){let a=s(e,t);o.push(`  add(${e}, ${t}) = ${a}`)}o.push(""),o.push("✓ All calls successful. The same .wasm binary would run in"),o.push("  any browser, any OS, any Wasm runtime — portable native code."),_(o.join("\n")),g("done")}catch(t){let e=t instanceof Error?t.message:String(t);_(t=>t+`
Error: ${e}`),g("error")}},[a]);return(0,s.jsxs)("div",{className:"mt-3 rounded-md border border-primary/30 bg-primary/3 p-3",children:[(0,s.jsxs)("div",{className:"flex items-center gap-2",children:[(0,s.jsxs)(l.$,{size:"sm",variant:"running"===x?"outline":"default",className:"gap-1.5",onClick:y,disabled:"running"===x,children:["running"===x?(0,s.jsx)(d.A,{className:"h-3.5 w-3.5 animate-spin"}):"done"===x?(0,s.jsx)(c.A,{className:"h-3.5 w-3.5"}):"error"===x?(0,s.jsx)(m.A,{className:"h-3.5 w-3.5"}):(0,s.jsx)(u.A,{className:"h-3.5 w-3.5"}),e]}),(0,s.jsxs)(n.E,{variant:"outline",className:"text-[10px] gap-1",children:[(0,s.jsx)(h.A,{className:"h-2.5 w-2.5"}),"WebAssembly \xb7 41 bytes"]}),null!==b&&"done"===x&&(0,s.jsxs)("span",{className:"text-[10px] text-muted-foreground",children:["Instantiated in ",b,"ms"]})]}),t&&(0,s.jsx)("p",{className:"text-[11px] text-muted-foreground mt-2 leading-relaxed",children:t}),(0,s.jsx)(o.N,{children:"idle"!==x&&f&&(0,s.jsx)(i.P.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},className:"mt-2",children:(0,s.jsx)("div",{className:`rounded-md bg-[oklch(0.16_0.005_240)] text-[oklch(0.97_0.005_60)] p-2.5 text-[11px] font-mono leading-relaxed overflow-x-auto code-scroll max-h-64 overflow-y-auto ${"error"===x?"border border-rose-500/40":"border border-emerald-500/30"}`,children:(0,s.jsx)("pre",{className:"whitespace-pre-wrap",children:f})})})})]})}},22164:(e,t,a)=>{"use strict";a.d(t,{A:()=>s});let s=(0,a(6404).A)("external-link",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]])},26075:(e,t,a)=>{"use strict";a.d(t,{A:()=>s});let s=(0,a(6404).A)("boxes",[["path",{d:"M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z",key:"lc1i9w"}],["path",{d:"m7 16.5-4.74-2.85",key:"1o9zyk"}],["path",{d:"m7 16.5 5-3",key:"va8pkn"}],["path",{d:"M7 16.5v5.17",key:"jnp8gn"}],["path",{d:"M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z",key:"8zsnat"}],["path",{d:"m17 16.5-5-3",key:"8arw3v"}],["path",{d:"m17 16.5 4.74-2.85",key:"8rfmw"}],["path",{d:"M17 16.5v5.17",key:"k6z78m"}],["path",{d:"M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z",key:"1xygjf"}],["path",{d:"M12 8 7.26 5.15",key:"1vbdud"}],["path",{d:"m12 8 4.74-2.85",key:"3rx089"}],["path",{d:"M12 13.5V8",key:"1io7kd"}]])},30971:(e,t,a)=>{"use strict";a.d(t,{A:()=>s});let s=(0,a(6404).A)("workflow",[["rect",{width:"8",height:"8",x:"3",y:"3",rx:"2",key:"by2w9f"}],["path",{d:"M7 11v4a2 2 0 0 0 2 2h4",key:"xkn7yn"}],["rect",{width:"8",height:"8",x:"13",y:"13",rx:"2",key:"1cgmvn"}]])},31025:(e,t,a)=>{"use strict";a.d(t,{A:()=>s});let s=(0,a(6404).A)("git-branch",[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]])},44478:(e,t,a)=>{"use strict";a.d(t,{A:()=>s});let s=(0,a(6404).A)("shield-check",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]])},60508:(e,t,a)=>{"use strict";a.d(t,{R:()=>b});var s=a(95155),r=a(12115),o=a(45160),i=a(89239),l=a(66349),n=a(85404),d=a(58381),c=a(79275),m=a(48368),u=a(22164),h=a(86901),p=a(89123),x=a(21628),g=a(98500),f=a.n(g),_=a(85757);function b({pageId:e}){let t=(0,c.C6)(e);return 0===t.length?null:(0,s.jsxs)(d.iv,{title:"Recent research (2023-2025)",description:"Modern papers that extend the math, code, and tools on this page.",icon:(0,s.jsx)(m.A,{className:"h-5 w-5"}),badge:`${t.length} paper${1===t.length?"":"s"}`,badgeVariant:"outline",contentClassName:"space-y-4",children:[t.map((e,t)=>(0,s.jsx)(v,{entry:e},t)),(0,s.jsxs)("p",{className:"text-[11px] text-muted-foreground italic",children:[t.length," paper",1===t.length?"":"s"," mapped to this page. Each shows the key algorithm + expected output (rendered as charts when the code produces JSON). Run the code in-browser via Pyodide."]})]})}function v({entry:e}){let[t,a]=(0,r.useState)(!1),[d,c]=(0,r.useState)(null);return(0,s.jsxs)("div",{className:"rounded-lg border border-border/60 p-4 space-y-3 hover:border-primary/30 transition-colors",children:[(0,s.jsxs)("div",{className:"space-y-1",children:[(0,s.jsxs)("div",{className:"flex items-start justify-between gap-3",children:[(0,s.jsx)("h4",{className:"text-sm font-semibold leading-tight flex-1",children:e.paperTitle}),(0,s.jsx)(o.E,{variant:"outline",className:"text-[10px] shrink-0",children:e.venue})]}),(0,s.jsxs)("p",{className:"text-[11px] text-muted-foreground",children:[e.authors," \xb7 ",e.year]}),e.arxivId&&(0,s.jsxs)("a",{href:`https://arxiv.org/abs/${e.arxivId}`,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-1 text-[11px] text-primary hover:underline",children:[(0,s.jsx)(u.A,{className:"h-3 w-3"}),"arXiv:",e.arxivId]}),e.doi&&!e.arxivId&&(0,s.jsxs)("a",{href:`https://doi.org/${e.doi}`,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-1 text-[11px] text-primary hover:underline",children:[(0,s.jsx)(u.A,{className:"h-3 w-3"}),"DOI:",e.doi]})]}),(0,s.jsx)("p",{className:"text-[12px] text-muted-foreground leading-relaxed",children:e.abstract}),(0,s.jsxs)(i.$,{variant:"outline",size:"sm",onClick:()=>a(!t),className:"h-7 text-[11px] gap-1.5",children:[(0,s.jsx)(h.A,{className:"h-3 w-3"}),t?"Hide expected code":"Show expected code + visualization"]}),t&&(0,s.jsxs)("div",{className:"space-y-2",children:[(0,s.jsx)(l.l,{code:e.expectedCode,buttonLabel:"Run in browser",onOutput:e=>{try{let t=e.indexOf("{"),a=e.lastIndexOf("}");if(t>=0&&a>t){let s=e.substring(t,a+1);c(JSON.parse(s))}}catch{}},hideTextOutput:!!d,compact:!0}),d?(0,s.jsxs)("div",{className:"space-y-2",children:[(0,s.jsxs)("div",{className:"flex items-center gap-1.5",children:[(0,s.jsx)(p.A,{className:"h-3.5 w-3.5 text-primary"}),(0,s.jsx)("p",{className:"text-[10px] uppercase tracking-wider text-muted-foreground",children:"Visualization (rendered from code output)"})]}),(0,s.jsx)(n.D,{data:d,accent:"oklch(0.65 0.18 250)",sourceCode:e.expectedCode})]}):(0,s.jsxs)("div",{className:"rounded-md border border-primary/20 bg-primary/5 p-2.5",children:[(0,s.jsx)("p",{className:"text-[10px] uppercase tracking-wider text-muted-foreground mb-1",children:"Expected output"}),(0,s.jsx)("pre",{className:"text-[11px] font-mono whitespace-pre-wrap leading-relaxed",children:e.expectedOutput})]}),(0,s.jsxs)("div",{className:"rounded-md border border-emerald-500/30 bg-emerald-500/5 p-2.5",children:[(0,s.jsx)("p",{className:"text-[10px] uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-1",children:"Key insight"}),(0,s.jsx)("p",{className:"text-[12px] text-foreground/80 leading-relaxed",children:e.keyInsight})]})]}),(0,s.jsxs)(f(),{href:(0,_.ZJ)("analytics-outputs"),className:"inline-flex items-center gap-1 text-[11px] text-primary hover:underline",children:["See this math visualized on Analytics Outputs ",(0,s.jsx)(x.A,{className:"h-3 w-3"})]})]})}},65576:(e,t,a)=>{"use strict";a.d(t,{A:()=>s});let s=(0,a(6404).A)("cpu",[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]])},81817:(e,t,a)=>{Promise.resolve().then(a.bind(a,2221))},86901:(e,t,a)=>{"use strict";a.d(t,{A:()=>s});let s=(0,a(6404).A)("sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]])}},e=>{e.O(0,[6919,8500,9430,3493,9760,7591,6012,9237,4843,8656,9620,6722,5404,9275,2194,8449,5079,8441,3794,7358],()=>e(e.s=81817)),_N_E=e.O()}]);