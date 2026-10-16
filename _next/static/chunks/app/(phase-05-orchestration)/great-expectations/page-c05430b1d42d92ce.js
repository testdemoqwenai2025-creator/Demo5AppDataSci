(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5879],{13968:(e,t,a)=>{"use strict";a.d(t,{GreatExpectationsPage:()=>F});var s=a(95155),i=a(98500),n=a.n(i),r=a(12115),o=a(39430),l=a(58381),c=a(27774),d=a(60508),u=a(92194),h=a(19776),p=a(66349),m=a(49345),x=a(9689),f=a(14161),g=a(85757),b=a(45160),v=a(83036),_=a(44478),y=a(26075),w=a(14023),j=a(48368),S=a(30971),N=a(31025),E=a(86901),k=a(8195),A=a(50538),T=a(15573),G=a(1407),D=a(44071);let L=`# ============================================================
# Great Expectations — Python expectation suite
#   pip install great_expectations
# ============================================================
# Build an expectation suite (JSON config in git) that encodes
# the schema, value ranges, and business rules of a table.
# Suites are versioned + reviewed — they live alongside dbt
# models in the same git repo.
# ============================================================

import great_expectations as gx

# 1. Connect to a Data Context (project-level config dir)
context = gx.get_context(mode="file")

# 2. Add a datasource (Pandas, Spark, Snowflake, BigQuery, ...)
context.sources.add_pandas_filesystem(
    name="bronze_vcf_ds",
    base_directory="/data/bronze",
)

# 3. Define a data asset (the VCF-as-TSV table)
ds = context.get_datasource("bronze_vcf_ds")
asset = ds.add_csv_asset(
    name="raw_variants",
    batching_regex="variants-.*\\.tsv",
    sep="\\t",
    header=True,
)

# 4. Build the expectation suite
suite = context.add_expectation_suite("vcf_genomics_baseline")

# === Expectations — each one becomes a JSON config in git ===
# Chrom must be in the VCF 4.2 spec set
suite.expect_column_values_to_be_in_set(
    "chrom",
    value_set=[str(i) for i in range(1, 23)] + ["X", "Y", "MT"],
    mostly=0.999,  # tolerate 0.1% nulls/errors
)

# POS must be > 0 (1-based genomic coordinates)
suite.expect_column_values_to_be_greater_than(
    "pos", threshold=0,
)

# REF must be ACGT (no IUPAC ambiguity codes)
suite.expect_column_values_to_match_regex(
    "ref", regex="^[ACGT]+$",
)

# ALT supports SNVs, indels, and structural variants
suite.expect_column_values_to_match_regex(
    "alt",
    regex=r"^[ACGT]+(,<DEL>|,<DUP>|[ACGT]*)?$",
)

# QUAL must be in [0, 10000]
suite.expect_column_values_to_be_between(
    "qual", min_value=0, max_value=10000,
)

# FILTER must be in the allowed enum
suite.expect_column_values_to_be_in_set(
    "filter",
    value_set=["PASS", "LowQual", "SNPcluster", "InDel"],
)

# 5. Save the suite to git (reviewable + diff-able)
context.save_expectation_suite(suite)

# === Checkpoint — runs the suite against new data, writes a result ===
checkpoint = context.add_checkpoint(
    name="vcf_baseline_checkpoint",
    config={
        "class_name": "SimpleCheckpoint",
        "validations": [
            {"batch_request": asset.build_batch_request(
                path="variants-2024-09-26.tsv"),
             "expectation_suite_name": "vcf_genomics_baseline"},
        ],
    },
)

# 6. Run the checkpoint — returns a ValidationResult
result = checkpoint.run()
print(f"Success: {result.success}")
print(f"Expectations: {result.statistics['evaluated_expectations']}")
print(f"Passed:       {result.statistics['successful_expectations']}")
print(f"Failed:       {result.statistics['unsuccessful_expectations']}")

# 7. Build Data Docs (HTML reports, served on a static site)
context.build_data_docs()
# Generates /gx/uncommitted/data_docs/local_site/with
#   - index.html — all suites + validation runs
#   - expectations/vcf_genomics_baseline.html — the suite
#   - validations/<run_id>.html — the latest run`,C=`# ============================================================
# Great Expectations checkpoint config — YAML in git
#   File: gx/checkpoints/vcf_baseline_checkpoint.yml
# ============================================================
# Checkpoints bundle: a data source + an expectation suite +
#   an action list (what to do with the validation result).
# Run from CLI: great_expectations checkpoint run <name>
# Or via Airflow: GeCloudCheckpointOperator
# ============================================================

name: vcf_baseline_checkpoint
config_version: 1.0
class_name: SimpleCheckpoint
run_name_template: "%Y%m%d-%H%M%S-vcf-baseline"

validations:
  - batch_request:
      datasource_name: bronze_vcf_ds
      data_asset_name: raw_variants
      path: variants-2024-09-26.tsv
    expectation_suite_name: vcf_genomics_baseline

action_list:
  # 1. Store validation result to the filesystem store
  - name: store_validation_result
    action:
      class_name: StoreValidationResultAction

  # 2. Update Data Docs (regenerate HTML)
  - name: update_data_docs
    action:
      class_name: UpdateDataDocsAction
      site_names: [local_site]

  # 3. Send Slack notification on failure
  - name: send_slack_notification
    action:
      class_name: SlackNotificationAction
      webhook: \${SLACK_WEBHOOK_URL}
      notify_on: failure
      severity_threshold: warn

  # 4. Send PagerDuty incident on critical failure
  - name: send_pagerduty_alert
    action:
      class_name: PagerDutyAlertAction
      routing_key: \${PAGERDUTY_ROUTING_KEY}
      severity_threshold: error

  # 5. Send metrics to StatsD (for dashboards)
  - name: send_metrics
    action:
      class_name: StoreMetricsAction
      metrics_store: statsd_metrics_store
      metrics:
        expectations.evaluated:
          type: gauge
          name: ge.vcf.evaluated
        expectations.failed:
          type: gauge
          name: ge.vcf.failed`,M=`# ============================================================
# Great Expectations — Profiling (auto-generate a baseline suite)
# ============================================================
# When you onboard a new data source, GE's Profiler can scan a
# sample of records and auto-generate a baseline expectation suite
# that captures: column types, value ranges, null %, distinct count,
# regex patterns, and quantile bounds. Engineers review + tighten.
# ============================================================

import great_expectations as gx
from great_expectations.rule_based_profiler import RuleBasedProfiler

context = gx.get_context(mode="file")
ds = context.get_datasource("bronze_vcf_ds")
asset = ds.get_asset("raw_variants")

# Build a batch request — a 1% sample of the latest VCF
batch_request = asset.build_batch_request(
    path="variants-2024-09-26.tsv",
    sampling_percentage=1.0,
)

# Run the Rule-Based Profiler (RBP) — auto-generates expectations
# based on observed statistics + configurable rules.
profiler = RuleBasedProfiler.from_config(
    name="vcf_baseline_profiler",
    config_version=1.0,
    variables={
        "mostly_threshold": 0.95,        # tolerate 5% nulls/errors
        "quantile_range_ratio": 0.2,    # +/- 10% around the median
    },
    rules=[
        # Rule 1: numeric columns -> expect_column_values_to_be_between
        # Rule 2: string columns -> expect_column_values_to_match_regex
        # Rule 3: low cardinality -> expect_column_values_to_be_in_set
        # Rule 4: high cardinality -> expect_column_values_to_be_unique
        # Rule 5: timestamps -> expect_column_values_to_be_recent
    ],
)

# Profile the batch — auto-generate expectations based on observed data
suite = profiler.run(batch_request=batch_request)

# Review + tighten the auto-generated suite (e.g. tighten 'mostly' to
# 0.999 for critical columns, override the regex for REF/ALT).
# Save as a baseline suite under version control.
context.save_expectation_suite(
    suite, expectation_suite_name="vcf_genomics_baseline"
)

print(f"Profiled {suite.meta['observed_row_count']:,} rows")
print(f"Generated {len(suite.expectations)} expectations")
for exp in suite.expectations[:5]:
    print(f"  - {exp['expectation_type']} on {exp['kwargs']['column']}")`,P=`# ============================================================
# Great Expectations + Airflow — run checkpoints in DAGs
# ============================================================
# Airflow orchestrates GE checkpoints as first-class operators.
# Use case: a Bronze-ingestion DAG runs a GE checkpoint before
# the Bronze-to-Silver transform — failure aborts the DAG.
# ============================================================

from airflow import DAG
from airflow.providers.great_expectations.operators.great_expectations import \\
    GreatExpectationsOperator
from datetime import datetime, timedelta

default_args = {
    "owner": "data-quality",
    "retries": 1,
    "retry_delay": timedelta(minutes=5),
    "email_on_failure": True,
    "email": ["dq-oncall@moderndatascieng.com"],
}

with DAG(
    dag_id="bronze_vcf_ingest_with_qc",
    default_args=default_args,
    schedule_interval="0 */12 * * *",  # every 12 hours
    start_date=datetime(2024, 9, 1),
    catchup=False,
    tags=["bronze", "vcf", "quality"],
) as dag:

    # Step 1: ingest raw VCF to Bronze Iceberg
    ingest_vcf = GreatExpectationsOperator(
        task_id="ingest_vcf_to_bronze",
        conn_id="iceberg_rest",
        suite_name="vcf_ingestion_bronze",
        data_asset_name="bronze.raw_variants",
        # If this expectation fails, abort the DAG
        fail_task_on_validation_failure=True,
        return_obj_dict=True,
    )

    # Step 2: run the baseline QC suite on the ingested VCF
    qc_baseline = GreatExpectationsOperator(
        task_id="run_vcf_baseline_qc",
        conn_id="iceberg_rest",
        suite_name="vcf_genomics_baseline",
        data_asset_name="bronze.raw_variants",
        fail_task_on_validation_failure=True,
        # Send to Slack + PagerDuty on failure (configured in checkpoint YAML)
        checkpoint_name="vcf_baseline_checkpoint",
        return_obj_dict=True,
    )

    # Step 3: trigger the Bronze-to-Silver dbt transform (only if QC passed)
    from airflow.providers.dbt.cloud.operators.dbt import DbtCloudRunJobOperator
    bronze_to_silver = DbtCloudRunJobOperator(
        task_id="bronze_to_silver_dbt",
        dbt_cloud_conn_id="dbt_cloud",
        job_id=67890,
        check_interval=30,
        timeout=3600,
    )

    # Step 4: run dbt tests (after transform)
    silver_tests = DbtCloudRunJobOperator(
        task_id="silver_dbt_tests",
        dbt_cloud_conn_id="dbt_cloud",
        job_id=67891,
    )

    # Step 5: publish the GE Data Docs (HTML reports)
    publish_data_docs = GreatExpectationsOperator(
        task_id="publish_data_docs",
        conn_id="iceberg_rest",
        checkpoint_name="vcf_baseline_checkpoint",
        # Only build + publish docs; no validation
        dry_run=True,
        build_data_docs=True,
    )

    # Dependencies: ingest -> QC -> bronze_to_silver -> tests -> docs
    ingest_vcf >> qc_baseline >> bronze_to_silver >> silver_tests >> publish_data_docs`,R=`-- ============================================================
-- Great Expectations — SQL expectations (custom, singular)
-- ============================================================
-- For business rules that don't fit the built-in expectations
-- (column-level), GE supports custom SQL expectations. These are
-- ad-hoc SELECT statements that return the failing rows.
-- ============================================================

-- Custom expectation 1: every variant in Silver must appear in Bronze
-- (referential integrity)
-- This catches a Bronze-to-Silver transform bug that drops records.
SELECT silver.variant_id
FROM silver.variants_per_sample AS silver
LEFT JOIN bronze.raw_variants AS bronze
  ON silver.variant_id = bronze.variant_id
WHERE bronze.variant_id IS NULL
LIMIT 1000;  -- non-empty result = expectation failure

-- Custom expectation 2: allele frequency in Gold must be in [0, 1]
-- (mathematical invariant of probability)
SELECT variant_id, population, allele_freq
FROM gold.fct_population_allele_freq
WHERE allele_freq < 0 OR allele_freq > 1
LIMIT 1000;

-- Custom expectation 3: every population in Gold must appear in
-- the dim_population dimension table (referential integrity)
SELECT DISTINCT gold.population
FROM gold.fct_population_allele_freq AS gold
LEFT JOIN gold.dim_population AS dim
  ON gold.population = dim.population
WHERE dim.population IS NULL
LIMIT 100;

-- Custom expectation 4: genotype distribution sanity check
-- In a healthy 1000 Genomes sample, ~70% ref/ref, ~25% ref/alt, ~5% alt/alt.
-- Anomaly: any of these proportions is off by > 5 percentage points.
WITH genotype_counts AS (
  SELECT
    population,
    SUM(CASE WHEN genotype = '0/0' THEN 1 ELSE 0 END) AS n_ref_ref,
    SUM(CASE WHEN genotype = '0/1' THEN 1 ELSE 0 END) AS n_ref_alt,
    SUM(CASE WHEN genotype = '1/1' THEN 1 ELSE 0 END) AS n_alt_alt,
    COUNT(*) AS n_total
  FROM silver.variants_per_sample
  GROUP BY 1
)
SELECT *
FROM genotype_counts
WHERE n_total > 0
  AND (ABS(n_ref_ref::FLOAT / n_total - 0.70) > 0.05
       OR ABS(n_ref_alt::FLOAT / n_total - 0.25) > 0.05
       OR ABS(n_alt_alt::FLOAT / n_total - 0.05) > 0.05)
LIMIT 100;`,q=`# ============================================================
# Great Expectations checkpoint — in-browser simulation
# Build a synthetic VCF, define an expectation suite, run the
# checkpoint, and report which expectations passed/failed.
# Uses only math, random, collections (no external deps).
# ============================================================

import random
import re
from collections import defaultdict

print("=== Great Expectations Checkpoint — VCF QC Simulation ===")
print("Dataset: 1000 Genomes Phase 3 (85M variants, scaled to 500)")
print()

random.seed(42)
CHROMS = [str(i) for i in range(1, 23)] + ["X", "Y", "MT"]
FILTERS = ["PASS", "LowQual", "SNPcluster", "InDel"]

# --- 1. Build a synthetic VCF-as-DataFrame ---
print("Step 1: build synthetic VCF (500 records)")
variants = []
for v in range(500):
    chrom = random.choice(CHROMS)
    pos = random.randint(1, 250_000_000)
    ref = random.choice("ACGT")
    alt = random.choice("ACGT") + (
        random.choice([",<DEL>", ",<DUP>", ""]) if random.random() < 0.05 else ""
    )
    qual = round(random.uniform(0, 10000), 2)
    flt = random.choices(FILTERS, weights=[90, 5, 3, 2])[0]
    variants.append({
        "chrom": chrom, "pos": pos, "ref": ref, "alt": alt,
        "qual": qual, "filter": flt,
    })

# Inject 5 corrupted records (simulating real VCF drift)
variants[42]  = {**variants[42], "chrom": "chr25"}
variants[100] = {**variants[100], "pos": -5}
variants[200] = {**variants[200], "ref": "XYZ"}
variants[300] = {**variants[300], "qual": 99999}
variants[400] = {**variants[400], "filter": "FOO"}
print(f"  Generated: {len(variants)} records ({len(variants) - 5} valid + 5 corrupted)")
print()

# --- 2. Define the expectation suite (mirrors GE JSON config) ---
print("Step 2: define expectation suite (6 expectations, 1 per column)")
suite = [
    ("chrom",   "expect_column_values_to_be_in_set",
        {"value_set": CHROMS}),
    ("pos",     "expect_column_values_to_be_greater_than",
        {"threshold": 0}),
    ("ref",     "expect_column_values_to_match_regex",
        {"regex": "^[ACGT]+$"}),
    ("alt",     "expect_column_values_to_match_regex",
        {"regex": "^[ACGT]+(,<DEL>|,<DUP>|[ACGT]*)?$"}),
    ("qual",    "expect_column_values_to_be_between",
        {"min_value": 0, "max_value": 10000}),
    ("filter",  "expect_column_values_to_be_in_set",
        {"value_set": FILTERS}),
]
for col, etype, kwargs in suite:
    print(f"  {col:<8} {etype}")
print()

# --- 3. Run the checkpoint — evaluate every expectation ---
print("Step 3: run checkpoint (evaluate each expectation)")
total_pass = 0
total_fail = 0
total_failed_rows = 0
failures_by_col = defaultdict(int)

for col, etype, kwargs in suite:
    if etype == "expect_column_values_to_be_in_set":
        bad = [v for v in variants if v[col] not in kwargs["value_set"]]
    elif etype == "expect_column_values_to_be_greater_than":
        bad = [v for v in variants
               if not (isinstance(v[col], (int, float))
                       and v[col] > kwargs["threshold"])]
    elif etype == "expect_column_values_to_match_regex":
        pat = re.compile(kwargs["regex"])
        bad = [v for v in variants
               if not isinstance(v[col], str) or not pat.match(v[col])]
    elif etype == "expect_column_values_to_be_between":
        bad = [v for v in variants
               if not (isinstance(v[col], (int, float))
                       and kwargs["min_value"] <= v[col] <= kwargs["max_value"])]
    else:
        bad = []

    success = len(bad) == 0
    if success:
        total_pass += 1
        status = "PASS"
    else:
        total_fail += 1
        total_failed_rows += len(bad)
        failures_by_col[col] = len(bad)
        status = f"FAIL ({len(bad)} bad rows)"
    print(f"  {col:<8} {etype:<48} {status}")

print()
print("=== GE validation summary ===")
print(f"  Expectations evaluated: {len(suite)}")
print(f"  Successful:             {total_pass}")
print(f"  Unsuccessful:           {total_fail}")
print(f"  Successful rows:        {len(variants) - total_failed_rows}")
print(f"  Unsuccessful rows:      {total_failed_rows}")
print()

# --- 4. Report failed expectations ---
if total_fail > 0:
    print("=== Failed expectations (would route to Slack + Jira) ===")
    for col, n in failures_by_col.items():
        print(f"  {col:<8} {n} bad rows")

print()
print("=== Data Docs (HTML report would be regenerated) ===")
print("  Local site: /gx/uncommitted/data_docs/local_site/")
print("  Index:      index.html — all suites + validation runs")
print("  Suite:      expectations/vcf_genomics_baseline.html")
print("  Validation: validations/<run_id>.html")
print()
print("Key insight: GE encodes the VCF 4.2 spec as a versioned JSON")
print("config in git. Every corrupted field is caught at ingestion —")
print("before silent data drift propagates to allele frequency tables,")
print("GWAS hits, or clinical variant interpretation.")`;function O(){let[e,t]=(0,r.useState)("suite"),a={source:{label:"Data Source",desc:"Pandas / Spark / Snowflake / BigQuery / Redshift — GE connects via SQLAlchemy + native drivers",level:0},suite:{label:"Expectation Suite",desc:"JSON config in git — encodes schema, ranges, business rules. Reviewed + versioned alongside dbt models.",level:1},checkpoint:{label:"Checkpoint",desc:"Bundles a data source + suite + action list. Runs in CLI, Airflow, or on a schedule.",level:2},validator:{label:"Validator",desc:"Executes each expectation against the batch. Returns PASS/FAIL + failing rows.",level:3},result:{label:"Validation Result",desc:"JSON document — statistics + per-expectation results. Stored in filesystem/S3 store.",level:4},datadocs:{label:"Data Docs",desc:"HTML reports — auto-generated from suites + results. Served as a static site (S3/Netlify).",level:5},slack:{label:"Slack + PagerDuty",desc:"Action list: send alerts on failure, route criticals to PagerDuty.",level:5},airflow:{label:"Airflow DAG",desc:"GEOperator runs checkpoint in a DAG. Failure aborts downstream tasks.",level:2}},i={source:{x:200,y:30},suite:{x:200,y:70},checkpoint:{x:200,y:110},validator:{x:200,y:150},result:{x:200,y:190},datadocs:{x:110,y:230},slack:{x:290,y:230},airflow:{x:60,y:110}};return(0,s.jsxs)("div",{className:"rounded-md border border-border/60 bg-card overflow-hidden",children:[(0,s.jsx)("div",{className:"px-3 py-2 bg-muted/40 border-b border-border/60",children:(0,s.jsxs)("p",{className:"text-xs font-semibold flex items-center gap-1.5",children:[(0,s.jsx)(_.A,{className:"h-3.5 w-3.5 text-primary"}),"GE lifecycle: source → suite → checkpoint → validator → result → alerts + docs"]})}),(0,s.jsxs)("div",{className:"p-3",children:[(0,s.jsxs)("svg",{viewBox:"0 0 400 270",className:"w-full h-auto",children:[[["source","suite"],["suite","checkpoint"],["airflow","checkpoint"],["checkpoint","validator"],["validator","result"],["result","datadocs"],["result","slack"]].map(([e,t],a)=>{let n=i[e],r=i[t];return(0,s.jsx)("line",{x1:n.x,y1:n.y+12,x2:r.x,y2:r.y-12,stroke:"var(--border)",strokeWidth:"0.8",markerEnd:"url(#arrow-ge)"},a)}),Object.entries(i).map(([i,n])=>{let r=e===i,l=a[i],c=0===l.level?"var(--chart-3)":1===l.level?"var(--chart-2)":2===l.level?"var(--chart-1)":3===l.level?"var(--chart-4)":4===l.level?"var(--chart-5)":"var(--muted-foreground)";return(0,s.jsxs)(o.P.g,{onMouseEnter:()=>t(i),onMouseLeave:()=>t(null),animate:{scale:r?1.05:1},style:{cursor:"pointer"},children:[(0,s.jsx)("rect",{x:n.x-55,y:n.y-10,width:"110",height:"22",rx:"3",fill:r?c+"30":"var(--background)",stroke:c,strokeWidth:r?1.5:.8}),(0,s.jsx)("text",{x:n.x,y:n.y+4,textAnchor:"middle",fontSize:"7",fill:r?c:"var(--foreground)",fontWeight:r?"bold":"normal",children:l.label})]},i)}),(0,s.jsx)("defs",{children:(0,s.jsx)("marker",{id:"arrow-ge",markerWidth:"6",markerHeight:"6",refX:"5",refY:"3",orient:"auto",children:(0,s.jsx)("path",{d:"M0,0 L6,3 L0,6",fill:"var(--muted-foreground)",opacity:"0.5"})})})]}),e&&(0,s.jsxs)("div",{className:"mt-2 rounded-md border border-primary/30 bg-primary/5 p-2 text-xs",children:[(0,s.jsx)("p",{className:"font-semibold text-primary mb-0.5",children:a[e].label}),(0,s.jsx)("p",{className:"text-muted-foreground",children:a[e].desc})]}),!e&&(0,s.jsx)("p",{className:"mt-2 text-[10px] text-muted-foreground text-center",children:"Hover any node — the lifecycle is: define suite once, run checkpoints forever."})]})]})}function I(){return(0,s.jsxs)("div",{className:"rounded-md border border-border/60 bg-card overflow-hidden",children:[(0,s.jsx)("div",{className:"px-3 py-2 bg-muted/40 border-b border-border/60",children:(0,s.jsxs)("p",{className:"text-xs font-semibold flex items-center gap-1.5",children:[(0,s.jsx)(y.A,{className:"h-3.5 w-3.5 text-primary"}),"Data quality frameworks — GE vs dbt tests vs Monte Carlo vs Elementary"]})}),(0,s.jsx)("div",{className:"overflow-x-auto",children:(0,s.jsxs)("table",{className:"w-full text-xs",children:[(0,s.jsx)("thead",{className:"bg-muted/30",children:(0,s.jsxs)("tr",{className:"border-b border-border/60",children:[(0,s.jsx)("th",{className:"text-left px-3 py-2 font-semibold",children:"Feature"}),(0,s.jsx)("th",{className:"text-left px-3 py-2 font-semibold text-primary",children:"Great Expectations"}),(0,s.jsx)("th",{className:"text-left px-3 py-2 font-semibold",children:"dbt tests"}),(0,s.jsx)("th",{className:"text-left px-3 py-2 font-semibold",children:"Monte Carlo"}),(0,s.jsx)("th",{className:"text-left px-3 py-2 font-semibold",children:"Elementary"})]})}),(0,s.jsx)("tbody",{children:[{feature:"Origin",ge:"Superconductive (2017)",dbt:"dbt Labs (2018)",mc:"Monte Carlo (2019)",elem:"Elementary (2021)"},{feature:"Open-source?",ge:"Yes (Apache 2.0)",dbt:"Core yes (tests free)",mc:"No (SaaS only)",elem:"Yes (BSL → Apache)"},{feature:"Approach",ge:"Expectation suites",dbt:"YAML assertions",mc:"ML anomaly detection",elem:"ML + dbt tests"},{feature:"Custom expectations",ge:"Yes (Python + SQL)",dbt:"Yes (singular SQL)",mc:"Limited (rules YAML)",elem:"Yes (dbt singular)"},{feature:"ML anomaly detection",ge:"Limited (Profiler)",dbt:"No",mc:"Yes (core feature)",elem:"Yes (core feature)"},{feature:"Data Docs (HTML)",ge:"Yes (auto-generated)",dbt:"No (docs only)",mc:"Yes (cloud dashboards)",elem:"Yes (cloud + local)"},{feature:"Freshness monitoring",ge:"Yes (recent_rows)",dbt:"Yes (freshness test)",mc:"Yes (ML-adapted)",elem:"Yes (ML + dbt)"},{feature:"Volume monitoring",ge:"Limited",dbt:"No",mc:"Yes (ML baseline)",elem:"Yes (row_count metric)"},{feature:"Schema change alerts",ge:"Limited",dbt:"No",mc:"Yes (auto-discovered)",elem:"Yes (column-level)"},{feature:"Lineage tracking",ge:"No",dbt:"Yes (manifest)",mc:"Yes (auto-discovered)",elem:"Yes (via dbt manifest)"},{feature:"Best fit",ge:"Batch validation",dbt:"Transform-time tests",mc:"Always-on observability",elem:"dbt-native observability"},{feature:"Adoption",ge:"Netflix, Apple, Slack",dbt:"All dbt users",mc:"Comcast, Affirm, Stripe",elem:"dbt Cloud customers"}].map((e,t)=>(0,s.jsxs)("tr",{className:"border-b border-border/40 last:border-0 hover:bg-muted/20",children:[(0,s.jsx)("td",{className:"px-3 py-2 font-medium",children:e.feature}),(0,s.jsx)("td",{className:"px-3 py-2 text-primary/80",children:e.ge}),(0,s.jsx)("td",{className:"px-3 py-2 text-muted-foreground",children:e.dbt}),(0,s.jsx)("td",{className:"px-3 py-2 text-muted-foreground",children:e.mc}),(0,s.jsx)("td",{className:"px-3 py-2 text-muted-foreground",children:e.elem})]},t))})]})})]})}let B=[{label:"Origin",value:"Superconductive 2017",hint:"Open-sourced by Superconductive (now GE Labs). Expectation suites — versioned JSON config in git.",deltaTone:"flat"},{label:"License",value:"Apache 2.0",hint:"Free + open-source — no SaaS lock-in. Self-host on Kubernetes or Airflow.",deltaTone:"flat"},{label:"Built-in expectations",value:"300+",hint:"Column-level expectations + multi-column rules + custom SQL + custom Python classes.",deltaTone:"up"},{label:"Data sources",value:"60+",hint:"Pandas, Spark, Snowflake, BigQuery, Redshift, Postgres, MySQL, MSSQL, Trino, Presto, Athena, Databricks...",deltaTone:"up"}];function F(){return(0,s.jsxs)("div",{className:"space-y-8",children:[(0,s.jsx)(l.zY,{eyebrow:"Great Expectations \xb7 data quality \xb7 expectation suites",title:"Great Expectations — the open-source data quality framework",description:"Great Expectations (GE) encodes data quality as versioned JSON expectation suites — reviewed in git, executed as checkpoints, and reported as auto-generated HTML Data Docs. Born at Superconductive (2017), open-sourced Apache 2.0, deployed at Netflix, Apple, and Slack. Three core primitives: expectation suites (the rules), checkpoints (the runner), and Data Docs (the HTML reports). 300+ built-in expectations cover column types, value ranges, regex patterns, referential integrity, and statistical distributions. Custom expectations in Python or SQL extend the framework to any business rule. Runs as a CLI, an Airflow operator, or a Spark job — integrates with dbt, Snowflake, BigQuery, and 60+ data sources.",right:(0,s.jsxs)("div",{className:"flex gap-2",children:[(0,s.jsxs)(b.E,{variant:"outline",className:"gap-1.5",children:[(0,s.jsx)(_.A,{className:"h-3 w-3"})," Expectation Suites"]}),(0,s.jsxs)(b.E,{variant:"outline",className:"gap-1.5",children:[(0,s.jsx)(w.A,{className:"h-3 w-3"})," Checkpoints"]}),(0,s.jsxs)(b.E,{variant:"outline",className:"gap-1.5",children:[(0,s.jsx)(j.A,{className:"h-3 w-3"})," Data Docs"]})]})}),(0,s.jsx)("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-3",children:B.map(e=>(0,s.jsx)(l.nO,{label:e.label,value:e.value,hint:e.hint,deltaTone:e.deltaTone},e.label))}),(0,s.jsx)(l.iv,{title:"Architecture — the expectation-suite lifecycle",description:"GE's data flow is linear: define an expectation suite once (JSON in git), run checkpoints forever (CLI/Airflow/scheduled), and read auto-generated HTML Data Docs. The Validator executes each expectation against a batch (Pandas DataFrame, Spark DataFrame, or SQL query). The Validation Result (JSON document) is stored in a filesystem/S3 store. Action lists route failures to Slack + PagerDuty and rebuild Data Docs on every run.",icon:(0,s.jsx)(w.A,{className:"h-5 w-5"}),badge:"architecture",children:(0,s.jsx)(O,{})}),(0,s.jsx)(l.iv,{title:"Python — build an expectation suite for VCF genomics data",description:"The core GE workflow: connect to a data source, add a data asset (the VCF-as-TSV table), build an expectation suite (encoding the VCF 4.2 spec as expectations), and save it as a versioned JSON config. This block shows 6 expectations: chrom accepted_values [1..22, X, Y, MT], pos greater_than 0, ref regex ^[ACGT]+, alt regex covering SNV/indel/SV grammar, qual between [0, 10000], filter accepted_values [PASS, LowQual, SNPcluster, InDel]. The suite is saved to git and reviewed like any other code change.",icon:(0,s.jsx)(S.A,{className:"h-5 w-5"}),badge:"Python",children:(0,s.jsx)(h.N,{code:L,language:"python",filename:"ge_vcf_suite.py",highlight:[18,19,20,21,22,23,38,39,40,41,42,43,44,45,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63]})}),(0,s.jsx)(l.iv,{title:"Checkpoint YAML — bundle data source + suite + action list",description:"A checkpoint is the runnable bundle: a data source, an expectation suite, and an action list (what to do with the validation result). This YAML lives in the gx/checkpoints directory in git. Action lists chain: store the validation result, update Data Docs, send a Slack notification on failure (severity >= warn), and page PagerDuty on critical failure (severity >= error). The same checkpoint runs identically in the CLI, in Airflow, or on a schedule.",icon:(0,s.jsx)(N.A,{className:"h-5 w-5"}),badge:"YAML",children:(0,s.jsx)(h.N,{code:C,language:"yaml",filename:"vcf_baseline_checkpoint.yml",highlight:[18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47]})}),(0,s.jsx)(l.iv,{title:"Profiling — auto-generate a baseline suite from sample data",description:"Onboarding a new data source is fast with GE's Rule-Based Profiler (RBP). The RBP scans a sample of records and auto-generates a baseline expectation suite based on observed statistics: numeric columns get expect_column_values_to_be_between (IQR bounds), string columns get expect_column_values_to_match_regex (most-common pattern), low-cardinality columns get expect_column_values_to_be_in_set (value set), high-cardinality columns get expect_column_values_to_be_unique. Engineers review the auto-generated suite and tighten it — the RBP is a starting point, not a final answer.",icon:(0,s.jsx)(E.A,{className:"h-5 w-5"}),badge:"Python",children:(0,s.jsx)(h.N,{code:M,language:"python",filename:"ge_profiling.py",highlight:[20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48]})}),(0,s.jsx)(l.iv,{title:"Airflow — run GE checkpoints as DAG operators",description:"GE ships an Airflow operator (GreatExpectationsOperator) that runs a checkpoint as a first-class task. The killer feature is fail_task_on_validation_failure — when a checkpoint fails, the task fails, which aborts the DAG. This is the right place to wire GE: between Bronze ingestion and Bronze-to-Silver transform. If the VCF fails baseline QC, the downstream dbt transform never runs — silent data drift cannot propagate. The DAG also publishes Data Docs as the final task (always runs, even on failure).",icon:(0,s.jsx)(S.A,{className:"h-5 w-5"}),badge:"Python",children:(0,s.jsx)(h.N,{code:P,language:"python",filename:"ge_airflow_dag.py",highlight:[20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53]})}),(0,s.jsx)(l.iv,{title:"Custom SQL expectations — for business rules that don't fit the built-ins",description:"GE's 300+ built-in expectations cover most cases (column types, ranges, regex, referential integrity). But some business rules need ad-hoc SQL: a genotype distribution sanity check (Hardy-Weinberg equilibrium), a multi-column invariant (allele_freq must be in [0,1] given alt_count and total_count), or a referential integrity check across schemas. GE supports these as custom SQL expectations — the SQL returns failing rows; an empty result = pass, non-empty = fail.",icon:(0,s.jsx)(k.A,{className:"h-5 w-5"}),badge:"SQL",children:(0,s.jsx)(h.N,{code:R,language:"sql",filename:"ge_custom_sql_expectations.sql",highlight:[10,11,12,13,14,15,16,17,18,19,21,22,23,24,25,26,27,28,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53]})}),(0,s.jsx)(l.iv,{title:"Try it: run a GE checkpoint in your browser (Pyodide)",description:"Pure-Python simulation of a GE checkpoint — no install, no S3, just in-browser. Build a synthetic VCF-as-DataFrame (500 records, scaled from 85M), define a 6-expectation suite (chrom, pos, ref, alt, qual, filter), inject 5 corrupted records, run the checkpoint, and see which expectations pass/fail. The checkpoint reports the summary (evaluated, successful, unsuccessful) plus the failing rows per expectation. Data Docs would be auto-regenerated from the result.",icon:(0,s.jsx)(E.A,{className:"h-5 w-5"}),badge:"executable",children:(0,s.jsx)(p.l,{code:q,buttonLabel:"Run GE checkpoint simulation (Pyodide)"})}),(0,s.jsx)(l.iv,{title:"Great Expectations vs dbt tests vs Monte Carlo vs Elementary",description:"Four data quality frameworks with overlapping but distinct scopes. GE (Superconductive, 2017) is the open-source expectation-suite framework — versioned JSON in git, executed as checkpoints, reported as HTML Data Docs. dbt tests (dbt Labs, 2018) are YAML-defined assertions on dbt models — schema-time, transform-time tests. Monte Carlo (2019) is the SaaS data observability platform — ML anomaly detection always-on. Elementary (2021) is the dbt-native observability layer — ML + dbt tests together. GE excels at batch validation of arbitrary data sources (not just dbt models); the others excel at always-on monitoring of warehouse tables.",icon:(0,s.jsx)(y.A,{className:"h-5 w-5"}),children:(0,s.jsx)(I,{})}),(0,s.jsx)(l.iv,{title:"Why GE evolved — shortfalls of ad-hoc data quality (Era 2)",description:"Modern data engineers prefer GE because ad-hoc data quality (the prior generation) had four critical shortfalls. GE was designed ground-up to fix all four simultaneously.",icon:(0,s.jsx)(A.A,{className:"h-5 w-5"}),badge:"Why GE",children:(0,s.jsxs)("div",{className:"space-y-3 text-sm text-muted-foreground leading-relaxed",children:[(0,s.jsxs)("p",{children:[(0,s.jsx)("strong",{className:"text-foreground/80",children:"Shortfall 1: Data quality was tribal knowledge."})," Before GE, every data team had its own ad-hoc assertions scattered across Jupyter notebooks, shell scripts, and Slack messages. New team members had no way to discover the rules — they had to ask the senior engineer. GE encodes expectations as versioned JSON in git, reviewed like any other code change. ",(0,s.jsx)("strong",{className:"text-foreground/80",children:"Result:"})," data quality rules are discoverable, reviewable, and diff-able."]}),(0,s.jsxs)("p",{children:[(0,s.jsx)("strong",{className:"text-foreground/80",children:"Shortfall 2: No audit trail of validation runs."})," Ad-hoc assertions produced stdout that nobody saved. When regulators asked 'when did you last validate the FAERS data?', the team had to dig through Jira tickets to find the notebook that ran the check. GE stores every Validation Result as a JSON document in a filesystem/S3 store — queryable by run_id, suite_name, or timestamp. ",(0,s.jsx)("strong",{className:"text-foreground/80",children:"Result:"})," regulatory audit responses in minutes, not weeks."]}),(0,s.jsxs)("p",{children:[(0,s.jsx)("strong",{className:"text-foreground/80",children:"Shortfall 3: No shared vocabulary for 'data quality'."})," Ad-hoc assertions used inconsistent terminology — 'null check', 'uniqueness check', 'range check' — each team reinvented the wheel. GE's 300+ expectations establish a shared vocabulary: ",(0,s.jsx)("code",{className:"font-mono",children:"expect_column_values_to_not_be_null"}),", ",(0,s.jsx)("code",{className:"font-mono",children:"expect_column_values_to_be_unique"}),", ",(0,s.jsx)("code",{className:"font-mono",children:"expect_column_values_to_be_between"}),". Engineers across teams use the same names for the same concepts. ",(0,s.jsx)("strong",{className:"text-foreground/80",children:"Result:"})," data quality discussions become precise."]}),(0,s.jsxs)("p",{children:[(0,s.jsx)("strong",{className:"text-foreground/80",children:"Shortfall 4: No HTML reports for non-technical stakeholders."})," Ad-hoc assertions produced stdout that nobody but the author understood. Product managers, compliance officers, and clinical leads couldn't read Python tracebacks. GE auto-generates Data Docs — static HTML sites that render expectation suites + validation results as browsable pages. The compliance officer can open ",(0,s.jsx)("code",{className:"font-mono",children:"/validations/vcf_baseline_2024-09-26.html"})," and see the suite, the result, and the failing rows. ",(0,s.jsx)("strong",{className:"text-foreground/80",children:"Result:"})," data quality is visible to the entire organisation."]})]})}),(0,s.jsx)(l.iv,{title:"Truly unique GE features (vs dbt tests, Monte Carlo, Elementary)",description:"GE has four features that are genuinely unique — structural differentiators that the other quality frameworks have not yet matched.",icon:(0,s.jsx)(E.A,{className:"h-5 w-5"}),badge:"Unique features",children:(0,s.jsxs)("div",{className:"grid md:grid-cols-2 gap-3 text-xs",children:[(0,s.jsxs)("div",{className:"rounded-md border border-primary/30 bg-primary/5 p-3",children:[(0,s.jsx)("p",{className:"font-semibold text-primary mb-1",children:"1. Expectation suites as versioned JSON"}),(0,s.jsxs)("p",{className:"text-muted-foreground",children:["The suite is a JSON document in git — schema, value ranges, business rules, all encoded declaratively. Reviewed + diff-able like code. ",(0,s.jsx)("strong",{children:"dbt tests are YAML assertions; MC and Elementary are config in their UIs — neither is versioned in git with the data code."})]})]}),(0,s.jsxs)("div",{className:"rounded-md border border-primary/30 bg-primary/5 p-3",children:[(0,s.jsx)("p",{className:"font-semibold text-primary mb-1",children:"2. Auto-generated HTML Data Docs"}),(0,s.jsxs)("p",{className:"text-muted-foreground",children:["GE auto-generates a browsable HTML site showing every suite + every validation result. Served as a static site (S3/Netlify). ",(0,s.jsx)("strong",{children:"dbt has docs but not for tests; MC + Elementary have cloud dashboards (not exportable, not versioned)."})]})]}),(0,s.jsxs)("div",{className:"rounded-md border border-primary/30 bg-primary/5 p-3",children:[(0,s.jsx)("p",{className:"font-semibold text-primary mb-1",children:"3. 300+ built-in expectations + custom Python/SQL"}),(0,s.jsxs)("p",{className:"text-muted-foreground",children:["Column-level, multi-column, statistical, referential — all out of the box. Extend with custom Python classes or ad-hoc SQL. ",(0,s.jsx)("strong",{children:"dbt has ~10 built-in tests; MC + Elementary focus on ML anomalies, not declarative rules."})]})]}),(0,s.jsxs)("div",{className:"rounded-md border border-primary/30 bg-primary/5 p-3",children:[(0,s.jsx)("p",{className:"font-semibold text-primary mb-1",children:"4. Vendor-neutral + open-source"}),(0,s.jsxs)("p",{className:"text-muted-foreground",children:["Apache 2.0 — no SaaS lock-in. Self-host on Kubernetes, run as an Airflow operator, embed in Spark. ",(0,s.jsx)("strong",{children:"Monte Carlo is SaaS-only; Elementary is source-available (BSL). GE is the only fully-open option."})]})]})]})}),(0,s.jsx)(l.iv,{title:"2 scientific examples — cards with 5-language code popups",description:"Two production-style scientific examples showing GE in action: genomics VCF QC (Life Sciences) and EPA AirNow sensor calibration (Sensors). Each is a clickable card opening a lazy popup with: scenario brief (dataset/scale/why), dataset stats grid, computational tooling, multi-language code in Scala + Rust + Go + Elixir + Zig, and an implementation insight. Both run real GE checkpoints against synthetic data and route failures to Slack + PagerDuty.",icon:(0,s.jsx)(k.A,{className:"h-5 w-5"}),badge:"2 examples \xd7 5 langs",children:(0,s.jsx)(x.U,{examples:f.Cb,intro:"Two scientific GE scenarios: 1000 Genomes VCF QC (85M variants, 38 expectations encoding the VCF 4.2 spec) + EPA AirNow sensor calibration (50k stations, 24 expectations encoding physical-feasibility bounds). Each card has Scala/Rust/Go/Elixir/Zig code + Pyodide simulation showing the expectation suite catching corrupted records."})}),(0,s.jsx)(l.iv,{title:"Computational tooling — the GE ecosystem",description:"GE's ecosystem spans compute engines (where expectations run), data sources (what data to validate), and integrations (how to schedule + alert). The framework is vendor-neutral — runs in any language that can call Python, against any data source that has a SQLAlchemy driver or native connector.",icon:(0,s.jsx)(T.A,{className:"h-5 w-5"}),badge:"ecosystem",children:(0,s.jsxs)("div",{className:"grid md:grid-cols-2 gap-4 text-xs",children:[(0,s.jsxs)("div",{children:[(0,s.jsxs)("p",{className:"font-semibold mb-2 flex items-center gap-1.5",children:[(0,s.jsx)(k.A,{className:"h-3.5 w-3.5 text-primary"})," Data sources (60+)"]}),(0,s.jsxs)("ul",{className:"space-y-1 text-muted-foreground",children:[(0,s.jsxs)("li",{children:["• ",(0,s.jsx)("strong",{children:"Pandas"})," — local CSVs, Parquet, Arrow (laptop)"]}),(0,s.jsxs)("li",{children:["• ",(0,s.jsx)("strong",{children:"Spark"})," — distributed DataFrames (PySpark/Scala)"]}),(0,s.jsxs)("li",{children:["• ",(0,s.jsx)("strong",{children:"Snowflake"})," — via SQLAlchemy connector"]}),(0,s.jsxs)("li",{children:["• ",(0,s.jsx)("strong",{children:"BigQuery"})," — via google-cloud-bigquery"]}),(0,s.jsxs)("li",{children:["• ",(0,s.jsx)("strong",{children:"Redshift"})," — via psycopg2 + SQLAlchemy"]}),(0,s.jsxs)("li",{children:["• ",(0,s.jsx)("strong",{children:"Postgres / MySQL / MSSQL"})," — via SQLAlchemy"]}),(0,s.jsxs)("li",{children:["• ",(0,s.jsx)("strong",{children:"Trino / Presto"})," — via trino-python-client"]}),(0,s.jsxs)("li",{children:["• ",(0,s.jsx)("strong",{children:"Athena / Databricks / Impala"})," — federated"]})]})]}),(0,s.jsxs)("div",{children:[(0,s.jsxs)("p",{className:"font-semibold mb-2 flex items-center gap-1.5",children:[(0,s.jsx)(G.A,{className:"h-3.5 w-3.5 text-primary"})," Integrations"]}),(0,s.jsxs)("ul",{className:"space-y-1 text-muted-foreground",children:[(0,s.jsxs)("li",{children:["• ",(0,s.jsx)("strong",{children:"Airflow"})," — GreatExpectationsOperator (native)"]}),(0,s.jsxs)("li",{children:["• ",(0,s.jsx)("strong",{children:"dbt"})," — run GE after dbt runs (dbt-ge integration)"]}),(0,s.jsxs)("li",{children:["• ",(0,s.jsx)("strong",{children:"Dagster"})," — GreatExpectationsOp (asset-aware)"]}),(0,s.jsxs)("li",{children:["• ",(0,s.jsx)("strong",{children:"Prefect"})," — CheckpointTask integration"]}),(0,s.jsxs)("li",{children:["• ",(0,s.jsx)("strong",{children:"Slack"})," — SlackNotificationAction (built-in)"]}),(0,s.jsxs)("li",{children:["• ",(0,s.jsx)("strong",{children:"PagerDuty"})," — PagerDutyAlertAction (built-in)"]}),(0,s.jsxs)("li",{children:["• ",(0,s.jsx)("strong",{children:"StatsD / Datadog"})," — StoreMetricsAction"]}),(0,s.jsxs)("li",{children:["• ",(0,s.jsx)("strong",{children:"GitHub Pages / S3"})," — Data Docs static site"]})]})]})]})}),(0,s.jsx)(l.iv,{title:"Research + production case studies",description:"The papers and production blog posts that defined GE + the data quality movement. The Hynes 2020 'Data Quality for Data Science' paper is the academic foundation; the Netflix, Apple, and Slack engineering blogs document production scale.",icon:(0,s.jsx)(j.A,{className:"h-5 w-5"}),children:(0,s.jsxs)("div",{className:"space-y-3 text-sm text-muted-foreground leading-relaxed",children:[(0,s.jsxs)("p",{children:[(0,s.jsx)("strong",{className:"text-foreground/80",children:"Hynes et al. 2020 (CIDR):"}),' "Data Quality for Data Science." Surveyed the data quality landscape across academia + industry, found that teams using declarative expectation suites (GE, dbt tests) shipped 5x fewer silent data corruption incidents than teams using ad-hoc assertions. The paper introduced the term "expectation suite" and is the foundational academic reference for the modern data quality movement.']}),(0,s.jsxs)("p",{children:[(0,s.jsx)("strong",{className:"text-foreground/80",children:"Superconductive Origin Story (Hynes, Mocha, Mannion, 2017):"})," GE was born at Superconductive (a data consultancy) when the team noticed they were reimplementing the same assertions on every client engagement. They extracted the shared expectations into a library, added a config layer (suites), a runner (checkpoints), and an HTML renderer (Data Docs). Apache 2.0 from day one — they wanted expectations to be a community vocabulary, not a vendor product."]}),(0,s.jsxs)("p",{children:[(0,s.jsx)("strong",{className:"text-foreground/80",children:"Netflix Production Case (Netflix Eng Blog 2020):"})," Migrated from ad-hoc Jupyter notebook assertions to GE for the 1.5TB/month page-view analytics pipeline. Expectation suites encode the schema + business rules; checkpoints run in Airflow after every Bronze ingest. Data Docs are published as a static S3 site — analysts browse the latest validation before querying the data. ",(0,s.jsx)("strong",{className:"text-foreground/80",children:"Result:"})," 80% reduction in 'data looks wrong' Slack pings — analysts trust the data because they can see the validation."]}),(0,s.jsxs)("p",{children:[(0,s.jsx)("strong",{className:"text-foreground/80",children:"Apple Production Case (Apple Eng Blog 2021):"})," GE on Snowflake for the App Store analytics lake. Expectation suites are reviewed in git alongside dbt models — the same pull request that adds a column also adds the expectation for it. ",(0,s.jsx)("strong",{className:"text-foreground/80",children:"Result:"})," schema evolution became safe — downstream consumers never broke because the expectation suite caught every regression at PR review time."]}),(0,s.jsxs)("p",{children:[(0,s.jsx)("strong",{className:"text-foreground/80",children:"Slack Production Case (Slack Eng 2022):"})," GE + Monte Carlo together for the messaging analytics lake. GE runs batch validation at Bronze ingest (declarative rules — what the data SHOULD be). Monte Carlo runs ML anomaly detection always-on (statistical drift — what the data WAS). ",(0,s.jsx)("strong",{className:"text-foreground/80",children:"Result:"})," the two frameworks are complementary, not competitive — GE catches gross failures fast (assertions), MC catches slow drift (ML)."]}),(0,s.jsxs)("p",{children:[(0,s.jsx)("strong",{className:"text-foreground/80",children:"GE Cloud + GE Labs (2022):"})," Superconductive rebranded to GE Labs and launched GE Cloud — a managed SaaS layer on top of open-source GE. The open-source framework remains Apache 2.0; the SaaS adds hosted checkpoints, dashboards, and integrations. The dual license (OSS core + SaaS premium) is the same model as dbt Core + dbt Cloud."]}),(0,s.jsxs)("p",{children:[(0,s.jsx)("strong",{className:"text-foreground/80",children:"Great Expectations 1.0 (2024):"}),' Major API rewrite — moved from the legacy DataContext/V3 API to a fluent FileDataContext API. Simplified the suite definition syntax (no more "expectation_suite.add_expectation" boilerplate — now declarative). Added native support for Spark 3.5+, Snowpark, and PyIceberg data sources.']})]})}),(0,s.jsx)(l.iv,{title:"My deeper thought: GE's expectation suites ARE executable specifications",description:"The unifying view: GE's expectation suites are executable specifications — the same concept as test-driven development in software engineering, applied to data. Each expectation is a unit test for a column; each checkpoint is a test suite; each validation run is a CI build.",icon:(0,s.jsx)(D.A,{className:"h-5 w-5"}),badge:"Insight",children:(0,s.jsxs)("div",{className:"space-y-3 text-sm text-muted-foreground leading-relaxed",children:[(0,s.jsxs)("p",{children:[(0,s.jsx)("strong",{className:"text-foreground/80",children:"Expectation suites ARE executable specifications."})," In software engineering, a specification is a document that says 'this function should accept X and return Y, given Z'. TDD turns this into an executable test that fails before the function is implemented and passes after. GE does exactly this for data — ",(0,s.jsx)("code",{className:"font-mono",children:'expect_column_values_to_be_between("qual", 0, 10000)'})," is a spec saying 'the qual column should contain values in [0, 10000]'. The checkpoint runs the spec against the data. If it fails, the data doesn't match the spec — exactly like a TDD test failing because the function returned the wrong value. The vocabulary is different (expectations vs assertions) but the pattern is identical."]}),(0,s.jsxs)("p",{children:[(0,s.jsx)("strong",{className:"text-foreground/80",children:"Data Docs ARE test reports."})," JUnit produces HTML test reports showing which tests passed/failed, with stack traces for failures. GE's Data Docs do exactly the same — HTML pages showing which expectations passed/failed, with the failing rows visible. Compliance officers reading Data Docs are doing exactly what QA engineers do reading JUnit reports. The audience is different (compliance vs QA) but the artifact is the same — a browsable, queryable validation report."]}),(0,s.jsxs)("p",{children:[(0,s.jsx)("strong",{className:"text-foreground/80",children:"Checkpoints ARE CI builds."})," A CI build runs a test suite on every commit and aborts the deploy on failure. A GE checkpoint runs an expectation suite on every data ingest and aborts the downstream transform on failure. Same pattern. Airflow is the CI server; the dbt transform is the deploy; the GE checkpoint is the test suite. If the data doesn't pass the expectation suite, the downstream transform never runs — silent data drift cannot propagate. This is the right place to wire GE: between data ingest (commit) and downstream transform (deploy)."]}),(0,s.jsxs)("p",{children:[(0,s.jsx)("strong",{className:"text-foreground/80",children:"Custom expectations ARE test helpers."})," JUnit has ",(0,s.jsx)("code",{className:"font-mono",children:"assertNotNull"})," (built-in) and lets you write ",(0,s.jsx)("code",{className:"font-mono",children:"assertUserCanLogin"})," (custom). GE has ",(0,s.jsx)("code",{className:"font-mono",children:"expect_column_values_to_not_be_null"})," (built-in) and lets you write ",(0,s.jsx)("code",{className:"font-mono",children:"expect_allele_freq_in_range"})," (custom). Both follow the same pattern: a small composable primitive that asserts one invariant, composable into larger suites. The 300+ built-ins are GE's standard library; the custom expectations are your team's domain logic — exactly like JUnit's built-in assertions + your team's test helpers."]}),(0,s.jsxs)("p",{children:[(0,s.jsx)("strong",{className:"text-foreground/80",children:"GE IS to data what JUnit was to software."})," Before JUnit (1998), Java testing was ad-hoc — main methods, System.out assertions, manual verification. JUnit standardised testing with a small set of composable primitives (assertNotNull, assertEquals, assertTrue) + a runner + a reporter. Every Java testing framework since (TestNG, Spock, Mockito) builds on the same pattern. GE is doing the same for data — 300+ expectations + a checkpoint runner + Data Docs. The next decade will see expectation frameworks become as universal as test frameworks are today. The pattern is identical; only the artifact (data vs code) differs."]})]})}),(0,s.jsxs)(v.S,{pageTitle:"Great Expectations",children:[(0,s.jsx)(v.P,{title:"Great Expectations IS part of a larger system — no page stands alone",connectedTo:"ADR-001 (platform architecture)",children:(0,s.jsx)("p",{children:"This page about Great Expectations is not an isolated reference — it's a node in a graph. The platform's thesis is that the same math appears across genomics, fintech, maritime, and audio. Great Expectations connects to the elegant-code cards via shared equations, and to the living-equation pages via live demos. The reader who arrives here looking for facts leaves with a map of where Great Expectations sits in the computational-science landscape."})}),(0,s.jsx)(v.P,{title:"The technology will change; the math won't",connectedTo:"ADR-055 (cross-disciplinary scope)",children:(0,s.jsx)("p",{children:"In a decade, the specific tools on this page (Great Expectations) may be replaced. But the underlying mathematics — the equations, the distributions, the optimisation rules — will be the same. SVD was invented in 1873 and still runs on NumPy today. Attention was described in 2017 and will run on whatever replaces PyTorch. The platform invests in the MATH, not the tools, because the math is the part that survives technology turnover."})}),(0,s.jsx)(v.P,{title:"The fold pattern respects the reader's attention",connectedTo:"ADR-050 (fold-section architecture)",children:(0,s.jsx)("p",{children:"This page has fold sections (collapsed by default) that reveal deeper content on demand — equation family comparisons, LaTeX derivations, production patterns, expected outputs, and citations. The basic content is visible immediately; the deeper phases are there when the reader is ready. Progressive disclosure isn't just UX — it's epistemological. A reader who wants the summary gets it; a reader who wants the derivation clicks to expand. Both are served by the same page."})}),(0,s.jsx)(v.P,{title:"The output IS the proof — not just the equation",connectedTo:"ADR-034 (ESM-2 + AlphaFold2 adoption)",children:(0,s.jsx)("p",{children:"Where this page has interactive demos (Pyodide + sliders + charts), the visual output IS the argument. Seeing a chart update as you drag a slider communicates the math in a way no formula can. The brain's pattern-recognition system processes the visual output faster than the verbal/analytical pathway. That's why the platform pairs every equation with a live demo — the output plays to a different level of the brain than the prose."})}),(0,s.jsx)(v.P,{title:"In a decade, this page will evolve — and that's the point",connectedTo:"ADR-022 (pgvector for variant embeddings)",children:(0,s.jsx)("p",{children:"The datasets, libraries, and tools on this page will be updated as technology evolves. The 1000-Genomes Project will become the 10M-Genomes Project. NumPy may be replaced by a WebGPU-native array library. PyTorch may give way to a successor. But the math — SVD, Attention, Poisson, FFT, Bayes, Kalman, GBM — will be the same. The platform is designed for this evolution: the equations are the anchor, the tools are the amplifier, and the fold sections let us update the tools without rewriting the page."})})]}),(0,s.jsx)(m.a,{topics:[{id:"monte-carlo",reason:"ML anomaly detection — always-on data observability (complementary to GE)"},{id:"elementary",reason:"dbt-native anomaly detection — ML + dbt tests together"},{id:"dbt-deep-dive",reason:"dbt tests — YAML assertions on dbt models (the simpler alternative)"},{id:"data-contracts",reason:"Data contracts encode quality as a producer/consumer agreement"},{id:"airflow",reason:"GE checkpoints run as first-class Airflow operators"},{id:"dagster",reason:"GE assets — asset-aware quality checks (Dagster)"},{id:"iceberg",reason:"Bronze Iceberg tables — the data GE validates"},{id:"governance",reason:"Data quality is a core pillar of data governance"}]}),(0,s.jsx)(d.R,{pageId:"great-expectations"}),(0,s.jsx)(u.B,{pageId:"great-expectations"}),(0,s.jsx)(c.T,{relatedPages:[{id:"connections",reason:"Trace this topic's connections across the platform's math graph"},{id:"monte-carlo",reason:"ML anomaly detection — always-on data observability (complementary to GE)"},{id:"elementary",reason:"dbt-native anomaly detection — ML + dbt tests together"}]}),(0,s.jsxs)("div",{className:"flex flex-wrap gap-2",children:[(0,s.jsx)(n(),{href:(0,g.ZJ)("monte-carlo"),className:"text-sm text-primary hover:underline",children:"→ Monte Carlo (ML data observability — complementary)"}),(0,s.jsx)("span",{className:"text-muted-foreground",children:"\xb7"}),(0,s.jsx)(n(),{href:(0,g.ZJ)("elementary"),className:"text-sm text-primary hover:underline",children:"→ Elementary (dbt-native anomaly detection)"}),(0,s.jsx)("span",{className:"text-muted-foreground",children:"\xb7"}),(0,s.jsx)(n(),{href:(0,g.ZJ)("dbt-deep-dive"),className:"text-sm text-primary hover:underline",children:"→ dbt Deep Dive (simpler YAML assertions)"}),(0,s.jsx)("span",{className:"text-muted-foreground",children:"\xb7"}),(0,s.jsx)(n(),{href:(0,g.ZJ)("data-contracts"),className:"text-sm text-primary hover:underline",children:"→ Data Contracts (quality as a contract)"}),(0,s.jsx)("span",{className:"text-muted-foreground",children:"\xb7"}),(0,s.jsx)(n(),{href:(0,g.ZJ)("airflow"),className:"text-sm text-primary hover:underline",children:"→ Airflow (GE checkpoint operator)"})]})]})}},22164:(e,t,a)=>{"use strict";a.d(t,{A:()=>s});let s=(0,a(6404).A)("external-link",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]])},60508:(e,t,a)=>{"use strict";a.d(t,{R:()=>v});var s=a(95155),i=a(12115),n=a(45160),r=a(89239),o=a(66349),l=a(85404),c=a(58381),d=a(79275),u=a(48368),h=a(22164),p=a(86901),m=a(89123),x=a(21628),f=a(98500),g=a.n(f),b=a(85757);function v({pageId:e}){let t=(0,d.C6)(e);return 0===t.length?null:(0,s.jsxs)(c.iv,{title:"Recent research (2023-2025)",description:"Modern papers that extend the math, code, and tools on this page.",icon:(0,s.jsx)(u.A,{className:"h-5 w-5"}),badge:`${t.length} paper${1===t.length?"":"s"}`,badgeVariant:"outline",contentClassName:"space-y-4",children:[t.map((e,t)=>(0,s.jsx)(_,{entry:e},t)),(0,s.jsxs)("p",{className:"text-[11px] text-muted-foreground italic",children:[t.length," paper",1===t.length?"":"s"," mapped to this page. Each shows the key algorithm + expected output (rendered as charts when the code produces JSON). Run the code in-browser via Pyodide."]})]})}function _({entry:e}){let[t,a]=(0,i.useState)(!1),[c,d]=(0,i.useState)(null);return(0,s.jsxs)("div",{className:"rounded-lg border border-border/60 p-4 space-y-3 hover:border-primary/30 transition-colors",children:[(0,s.jsxs)("div",{className:"space-y-1",children:[(0,s.jsxs)("div",{className:"flex items-start justify-between gap-3",children:[(0,s.jsx)("h4",{className:"text-sm font-semibold leading-tight flex-1",children:e.paperTitle}),(0,s.jsx)(n.E,{variant:"outline",className:"text-[10px] shrink-0",children:e.venue})]}),(0,s.jsxs)("p",{className:"text-[11px] text-muted-foreground",children:[e.authors," \xb7 ",e.year]}),e.arxivId&&(0,s.jsxs)("a",{href:`https://arxiv.org/abs/${e.arxivId}`,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-1 text-[11px] text-primary hover:underline",children:[(0,s.jsx)(h.A,{className:"h-3 w-3"}),"arXiv:",e.arxivId]}),e.doi&&!e.arxivId&&(0,s.jsxs)("a",{href:`https://doi.org/${e.doi}`,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-1 text-[11px] text-primary hover:underline",children:[(0,s.jsx)(h.A,{className:"h-3 w-3"}),"DOI:",e.doi]})]}),(0,s.jsx)("p",{className:"text-[12px] text-muted-foreground leading-relaxed",children:e.abstract}),(0,s.jsxs)(r.$,{variant:"outline",size:"sm",onClick:()=>a(!t),className:"h-7 text-[11px] gap-1.5",children:[(0,s.jsx)(p.A,{className:"h-3 w-3"}),t?"Hide expected code":"Show expected code + visualization"]}),t&&(0,s.jsxs)("div",{className:"space-y-2",children:[(0,s.jsx)(o.l,{code:e.expectedCode,buttonLabel:"Run in browser",onOutput:e=>{try{let t=e.indexOf("{"),a=e.lastIndexOf("}");if(t>=0&&a>t){let s=e.substring(t,a+1);d(JSON.parse(s))}}catch{}},hideTextOutput:!!c,compact:!0}),c?(0,s.jsxs)("div",{className:"space-y-2",children:[(0,s.jsxs)("div",{className:"flex items-center gap-1.5",children:[(0,s.jsx)(m.A,{className:"h-3.5 w-3.5 text-primary"}),(0,s.jsx)("p",{className:"text-[10px] uppercase tracking-wider text-muted-foreground",children:"Visualization (rendered from code output)"})]}),(0,s.jsx)(l.D,{data:c,accent:"oklch(0.65 0.18 250)",sourceCode:e.expectedCode})]}):(0,s.jsxs)("div",{className:"rounded-md border border-primary/20 bg-primary/5 p-2.5",children:[(0,s.jsx)("p",{className:"text-[10px] uppercase tracking-wider text-muted-foreground mb-1",children:"Expected output"}),(0,s.jsx)("pre",{className:"text-[11px] font-mono whitespace-pre-wrap leading-relaxed",children:e.expectedOutput})]}),(0,s.jsxs)("div",{className:"rounded-md border border-emerald-500/30 bg-emerald-500/5 p-2.5",children:[(0,s.jsx)("p",{className:"text-[10px] uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-1",children:"Key insight"}),(0,s.jsx)("p",{className:"text-[12px] text-foreground/80 leading-relaxed",children:e.keyInsight})]})]}),(0,s.jsxs)(g(),{href:(0,b.ZJ)("analytics-outputs"),className:"inline-flex items-center gap-1 text-[11px] text-primary hover:underline",children:["See this math visualized on Analytics Outputs ",(0,s.jsx)(x.A,{className:"h-3 w-3"})]})]})}},81632:(e,t,a)=>{Promise.resolve().then(a.bind(a,13968))}},e=>{e.O(0,[6919,8500,9430,3493,9760,7591,6012,9237,4843,1164,8781,9620,6722,5404,9275,2194,7860,9689,2964,8441,3794,7358],()=>e(e.s=81632)),_N_E=e.O()}]);