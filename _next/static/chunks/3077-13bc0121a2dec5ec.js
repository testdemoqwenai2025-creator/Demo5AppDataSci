"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3077],{47468:(e,i,t)=>{t.d(i,{Wh:()=>u,XX:()=>p,Z2:()=>d,_0:()=>m});var a=t(95155),r=t(8195),n=t(44478),s=t(14023),l=t(93219),o=t(69260),c=t(90718);let d=[{id:"mlflow-genomics-variant-tracking",step:"1",title:"Genomics Variant Calling Model Tracking",subtitle:"Life Sciences — track GATK vs DeepVariant vs Strelka2 accuracy",accent:"oklch(0.65 0.16 30)",icon:(0,a.jsx)(r.A,{className:"h-4 w-4"}),badge:"Life Sciences \xb7 Genomics",brief:{dataset:"1000 Genomes Project validation set — 2,504 individuals, ~3B SNPs. Track variant caller accuracy (F1, precision, recall, AUC) across GATK HaplotypeCaller, DeepVariant, Strelka2 via MLflow.",scale:"~3B SNPs \xb7 2,504 individuals \xb7 3 variant callers \xd7 5 hyperparameter configs = 15 runs",why:"Shows MLflow Tracking for genomics: each variant caller is a model, each hyperparameter config is a run, AUC/F1/precision/recall are tracked. Model Registry promotes the best variant caller to Production."},stats:[{label:"SNPs",value:"3 billion"},{label:"Individuals",value:"2,504"},{label:"Runs",value:"15"},{label:"Best AUC",value:"0.95 (DeepVariant)"}],tools:["MLflow Tracking","MLflow Model Registry","GATK","DeepVariant","Strelka2","bcftools"],codeTabs:[{lang:"scala",filename:"GenomicsMLflowTracking.scala",code:`import org.apache.spark.sql.SparkSession
import org.apache.spark.sql.functions._

// Track genomics variant callers in MLflow via Spark
val spark = SparkSession.builder().getOrCreate()

// Evaluate 3 variant callers on 1000 Genomes truth set
val callers = Seq("GATK_HaplotypeCaller", "DeepVariant", "Strelka2")
val configs = Seq(Map("min_conf" -> 10), Map("min_conf" -> 20), Map("min_conf" -> 30))

for (caller <- callers; config <- configs) {
  val variants = spark.read.format("csv")
    .load(s"s3://genomics-results/$caller/")
    .filter($"QUAL" > config("min_conf"))

  val truthSet = spark.read.parquet("s3://genomics-truth/1000g/")
  val tp = variants.join(truthSet, Seq("chrom", "pos", "ref", "alt"), "inner").count()
  val fp = variants.join(truthSet, Seq("chrom", "pos", "ref", "alt"), "left_anti").count()
  val fn = truthSet.join(variants, Seq("chrom", "pos", "ref", "alt"), "left_anti").count()

  val precision = tp.toDouble / (tp + fp)
  val recall = tp.toDouble / (tp + fn)
  val f1 = 2 * precision * recall / (precision + recall)

  // Log to MLflow
  spark.sql(s"""
    SELECT mlflow_log_metric('precision', $precision),
           mlflow_log_metric('recall', $recall),
           mlflow_log_metric('f1', $f1),
           mlflow_log_param('caller', '$caller'),
           mlflow_log_param('min_conf', \${config("min_conf")})
  """)
}`},{lang:"rust",filename:"genomics_mlflow_tracking.rs",code:`use mlflow_rust::tracking::MlflowClient;

// Rust MLflow client — log variant caller metrics from outside Python.
#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let client = MlflowClient::new("http://mlflow:5000")?;
    let experiment_id = client.create_experiment("genomics_variant_calling").await?;

    for caller in &["GATK", "DeepVariant", "Strelka2"] {
        let run = client.create_run(experiment_id, caller).await?;
        client.log_metric(run.run_id, "auc", 0.92 + (caller.len() as f64 * 0.01)).await?;
        client.log_metric(run.run_id, "f1", 0.88).await?;
        client.log_param(run.run_id, "caller", caller).await?;
    }
    Ok(())
}`},{lang:"go",filename:"genomics_mlflow_tracking.go",code:`package main

import (
    "context"
    "fmt"
    "github.com/mlflow/mlflow-go"
)

func main() {
    client := mlflow.NewClient("http://mlflow:5000")
    ctx := context.Background()
    expID, _ := client.CreateExperiment(ctx, "genomics_variant_calling")
    for _, caller := range []string{"GATK", "DeepVariant", "Strelka2"} {
        run, _ := client.CreateRun(ctx, expID, caller)
        client.LogMetric(ctx, run.ID, "auc", 0.92)
        client.LogMetric(ctx, run.ID, "f1", 0.88)
        client.LogParam(ctx, run.ID, "caller", caller)
        fmt.Printf("Logged run for %s\\n", caller)
    }
}`},{lang:"elixir",filename:"genomics_mlflow_tracking.ex",code:`defmodule Genomics.MLflowTracking do
  @moduledoc "Track variant callers in MLflow via HTTP API"
  use GenServer

  def start_link(_), do: GenServer.start_link(__MODULE__, :ok, name: __MODULE__)

  @impl true
  def init(:ok) do
    callers = ["GATK", "DeepVariant", "Strelka2"]
    Enum.each(callers, fn caller ->
      run_id = create_run(caller)
      log_metric(run_id, "auc", 0.92 + (String.length(caller) * 0.01))
      log_metric(run_id, "f1", 0.88)
      log_param(run_id, "caller", caller)
    end)
    {:ok, %{}}
  end

  defp create_run(caller) do
    {:ok, resp} = HTTPoison.post!("http://mlflow:5000/api/2.0/mlflow/runs/create",
      Jason.encode!(%{experiment_id => "genomics", run_name => caller}))
    resp.body["run"]["info"]["run_id"]
  end

  defp log_metric(run_id, key, value) do
    HTTPoison.post!("http://mlflow:5000/api/2.0/mlflow/runs/log-metric",
      Jason.encode!(%{run_id => run_id, metric => key, value => value}))
  end

  defp log_param(run_id, key, value) do
    HTTPoison.post!("http://mlflow:5000/api/2.0/mlflow/runs/log-batch",
      Jason.encode!(%{run_id => run_id, params => [%{key => key, value => value}]}))
  end
end`},{lang:"zig",filename:"genomics_mlflow_tracking.zig",code:`const std = @import("std");
const mlflow = @import("mlflow-zig");

pub fn main() !void {
    var gpa = std.heap.GeneralPurposeAllocator(.{}){};
    defer _ = gpa.deinit();
    const allocator = gpa.allocator();

    var client = try mlflow.Client.init(allocator, .{.url = "http://mlflow:5000"});
    defer client.deinit();

    const callers = [_][]const u8{ "GATK", "DeepVariant", "Strelka2" };
    for (callers) |caller| {
        var run = try client.createRun(allocator, "genomics_variant_calling", caller);
        defer run.deinit();
        try client.logMetric(run.id, "auc", 0.92 + @as(f64, @floatFromInt(caller.len)) * 0.01);
        try client.logMetric(run.id, "f1", 0.88);
        try client.logParam(run.id, "caller", caller);
    }
}`}],runnablePython:`# Genomics MLflow tracking simulation — Pyodide
import random

print("=== MLflow Genomics Variant Calling Tracking ===")
print("3 callers x 5 configs = 15 runs tracked")
print()
callers = ["GATK_HaplotypeCaller", "DeepVariant", "Strelka2"]
random.seed(42)
print(f"{'Run':>4} | {'Caller':<25} | {'min_conf':>9} | {'AUC':>6} | {'F1':>6} | {'Precision':>10} | {'Recall':>7}")
print("-" * 85)
run_id = 0
best_auc = 0
best_run = 0
for caller in callers:
    for min_conf in [10, 20, 30]:
        run_id += 1
        auc = random.uniform(0.85, 0.97)
        f1 = random.uniform(0.80, 0.93)
        prec = random.uniform(0.85, 0.95)
        rec = random.uniform(0.75, 0.92)
        print(f"{run_id:>4} | {caller:<25} | {min_conf:>9} | {auc:.4f} | {f1:.4f} | {prec:>10.4f} | {rec:.4f}")
        if auc > best_auc:
            best_auc = auc
            best_run = run_id
            best_caller = caller
print(f"\\nBest: Run {best_run} ({best_caller}) AUC={best_auc:.4f} → promoted to Production")`,insight:"Genomics variant calling is the canonical ML model tracking use case — each variant caller (GATK, DeepVariant, Strelka2) is a different model architecture, and MLflow tracks which performs best on the 1000 Genomes truth set. Model Registry promotes the winner to Production with full audit trail."},{id:"mlflow-clinical-drug-response",step:"2",title:"Clinical Trial Drug Response Prediction",subtitle:"Life Sciences — track AUC-ROC across patient stratification models",accent:"oklch(0.65 0.16 165)",icon:(0,a.jsx)(n.A,{className:"h-4 w-4"}),badge:"Life Sciences \xb7 Clinical",brief:{dataset:"Synthetic clinical trial — 10,000 patients, 500 drugs, drug response labels (responder/non-responder). Track AUC-ROC across XGBoost, Random Forest, and neural network models with different patient stratifications.",scale:"~10,000 patients \xb7 500 drugs \xb7 200 features per patient \xb7 3 model types \xd7 4 stratifications = 12 runs",why:"Shows MLflow Tracking for clinical ML — AUC-ROC is the key metric (regulatory requirement), patient stratification (age, genotype, disease stage) changes which model wins. Model Registry ensures the FDA-compliant model is in Production."},stats:[{label:"Patients",value:"10,000"},{label:"Drugs",value:"500"},{label:"Features",value:"200"},{label:"Runs",value:"12"}],tools:["MLflow Tracking","XGBoost","Scikit-learn","PyTorch","SHAP","DVC"],codeTabs:[{lang:"scala",filename:"ClinicalDrugResponseMLflow.scala",code:`import org.apache.spark.sql.SparkSession
import org.apache.spark.sql.functions._

val spark = SparkSession.builder().getOrCreate()

// 3 models \xd7 4 stratifications = 12 runs
val models = Seq("XGBoost", "RandomForest", "NeuralNetwork")
val stratifications = Seq("all", "age_lt_65", "genotype_CYP2D6", "stage_III")

for (model <- models; strat <- stratifications) {
  val data = spark.table("clinical.drug_response")
    .filter(if (strat == "all") lit(true) else col(strat))
  // Train model (simplified — use Spark MLlib)
  // ... training code ...
  val auc = 0.75 + random.nextDouble() * 0.2  // simulated AUC
  // Log to MLflow
  spark.sql(s"CALL mlflow_log_metric('auc', $auc)")
  spark.sql(s"CALL mlflow_log_param('model', '$model')")
  spark.sql(s"CALL mlflow_log_param('stratification', '$strat')")
}`},{lang:"rust",filename:"clinical_drug_response.rs",code:`use mlflow_rust::tracking::MlflowClient;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let client = MlflowClient::new("http://mlflow:5000")?;
    let exp = client.create_experiment("clinical_drug_response").await?;
    for model in &["XGBoost", "RandomForest", "NeuralNetwork"] {
        for strat in &["all", "age_lt_65", "genotype_CYP2D6", "stage_III"] {
            let run = client.create_run(exp, &format!("{model}_{strat}")).await?;
            client.log_metric(run.run_id, "auc", 0.75 + rand::random::<f64>() * 0.2).await?;
            client.log_param(run.run_id, "model", model).await?;
            client.log_param(run.run_id, "stratification", strat).await?;
        }
    }
    Ok(())
}`},{lang:"go",filename:"clinical_drug_response.go",code:`package main
import ("context"; "fmt"; "github.com/mlflow/mlflow-go")
func main() {
    client := mlflow.NewClient("http://mlflow:5000")
    ctx := context.Background()
    expID, _ := client.CreateExperiment(ctx, "clinical_drug_response")
    for _, m := range []string{"XGBoost", "RandomForest", "NeuralNetwork"} {
        for _, s := range []string{"all", "age_lt_65", "genotype_CYP2D6", "stage_III"} {
            run, _ := client.CreateRun(ctx, expID, m+"_"+s)
            client.LogMetric(ctx, run.ID, "auc", 0.85)
            client.LogParam(ctx, run.ID, "model", m)
        }
    }
}`},{lang:"elixir",filename:"clinical_drug_response.ex",code:`defmodule Clinical.MLflowTracking do
  use GenServer
  def start_link(_), do: GenServer.start_link(__MODULE__, :ok, name: __MODULE__)
  @impl true
  def init(:ok) do
    models = ["XGBoost", "RandomForest", "NeuralNetwork"]
    strats = ["all", "age_lt_65", "genotype_CYP2D6", "stage_III"]
    for m <- models, s <- strats do
      run_id = create_run(m <> "_" <> s)
      log_metric(run_id, "auc", 0.75 + :rand.uniform() * 0.2)
      log_param(run_id, "model", m)
      log_param(run_id, "stratification", s)
    end
    {:ok, %{}}
  end
  defp create_run(name), do: "run_" <> Integer.to_string(:erlang.unique_integer([:positive]))
  defp log_metric(_, _, _), do: :ok
  defp log_param(_, _, _), do: :ok
end`},{lang:"zig",filename:"clinical_drug_response.zig",code:`const std = @import("std");
const mlflow = @import("mlflow-zig");
pub fn main() !void {
    var gpa = std.heap.GeneralPurposeAllocator(.{}){};
    defer _ = gpa.deinit();
    const allocator = gpa.allocator();
    var client = try mlflow.Client.init(allocator, .{.url = "http://mlflow:5000"});
    defer client.deinit();
    const models = [_][]const u8{ "XGBoost", "RandomForest", "NeuralNetwork" };
    const strats = [_][]const u8{ "all", "age_lt_65", "genotype_CYP2D6", "stage_III" };
    for (models) |m| {
        for (strats) |s| {
            var run = try client.createRun(allocator, "clinical_drug_response", m);
            defer run.deinit();
            try client.logMetric(run.id, "auc", 0.85);
            try client.logParam(run.id, "model", m);
        }
    }
}`}],runnablePython:`# Clinical drug response MLflow simulation — Pyodide
import random
print("=== MLflow Clinical Drug Response Tracking ===")
print("3 models x 4 stratifications = 12 runs")
print()
models = ["XGBoost", "RandomForest", "NeuralNetwork"]
strats = ["all", "age_lt_65", "genotype_CYP2D6", "stage_III"]
random.seed(42)
print(f"{'Run':>4} | {'Model':<15} | {'Stratification':<18} | {'AUC':>6}")
print("-" * 55)
run_id = 0
best_auc = 0
for m in models:
    for s in strats:
        run_id += 1
        auc = random.uniform(0.70, 0.95)
        print(f"{run_id:>4} | {m:<15} | {s:<18} | {auc:.4f}")
        if auc > best_auc:
            best_auc = auc
            best_run = (m, s)
print(f"\\nBest: {best_run[0]} + {best_run[1]} AUC={best_auc:.4f}")
print("→ Registered as model version 3 → transitioned to Production")`,insight:"Clinical drug response prediction is the canonical regulatory ML use case — AUC-ROC is the FDA-mandated metric. MLflow Model Registry ensures only the validated model is in Production, with full audit trail (who approved, when, for which patient stratification)."},{id:"mlflow-protein-structure",step:"3",title:"Protein Structure Prediction Tracking",subtitle:"Life Sciences — track AlphaFold-style pLDDT + RMSD scores",accent:"oklch(0.65 0.16 250)",icon:(0,a.jsx)(s.A,{className:"h-4 w-4"}),badge:"Life Sciences \xb7 Proteomics",brief:{dataset:"Synthetic protein structure prediction — 1,000 proteins from CASP14. Track pLDDT (predicted Local Distance Difference Test) + RMSD (Root Mean Square Deviation) across 5 model variants.",scale:"~1,000 proteins \xb7 5 model variants \xb7 pLDDT + RMSD + GDT_TS metrics \xb7 CASP14 benchmark",why:"Shows MLflow Tracking for structural biology — pLDDT is the AlphaFold confidence metric (0-100), RMSD measures structural deviation from the experimental structure. Model Registry manages which protein structure predictor is in Production."},stats:[{label:"Proteins",value:"1,000"},{label:"Variants",value:"5"},{label:"Metrics",value:"3 (pLDDT+RMSD+GDT)"},{label:"Benchmark",value:"CASP14"}],tools:["MLflow Tracking","AlphaFold2","RoseTTAFold","ESMFold","ColabFold","TM-score"],codeTabs:[{lang:"scala",filename:"ProteinStructureMLflow.scala",code:`import org.apache.spark.sql.SparkSession
val spark = SparkSession.builder().getOrCreate()
val models = Seq("AlphaFold2", "RoseTTAFold", "ESMFold", "ColabFold", "OmegaFold")
for (model <- models) {
  val results = spark.read.parquet(s"s3://protein-results/$model/")
  val avg_plddt = results.agg(mean("plddt")).head().getDouble(0)
  val avg_rmsd = results.agg(mean("rmsd")).head().getDouble(0)
  spark.sql(s"CALL mlflow_log_metric('plddt', $avg_plddt)")
  spark.sql(s"CALL mlflow_log_metric('rmsd', $avg_rmsd)")
  spark.sql(s"CALL mlflow_log_param('model', '$model')")
}`},{lang:"rust",filename:"protein_structure_mlflow.rs",code:`use mlflow_rust::tracking::MlflowClient;
#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let client = MlflowClient::new("http://mlflow:5000")?;
    let exp = client.create_experiment("protein_structure_prediction").await?;
    for model in &["AlphaFold2", "RoseTTAFold", "ESMFold", "ColabFold", "OmegaFold"] {
        let run = client.create_run(exp, model).await?;
        client.log_metric(run.run_id, "plddt", 85.0 + rand::random::<f64>() * 10.0).await?;
        client.log_metric(run.run_id, "rmsd", 1.5 + rand::random::<f64>() * 2.0).await?;
        client.log_param(run.run_id, "model", model).await?;
    }
    Ok(())
}`},{lang:"go",filename:"protein_structure_mlflow.go",code:`package main
import ("context"; "github.com/mlflow/mlflow-go")
func main() {
    client := mlflow.NewClient("http://mlflow:5000")
    ctx := context.Background()
    expID, _ := client.CreateExperiment(ctx, "protein_structure_prediction")
    for _, m := range []string{"AlphaFold2", "RoseTTAFold", "ESMFold", "ColabFold", "OmegaFold"} {
        run, _ := client.CreateRun(ctx, expID, m)
        client.LogMetric(ctx, run.ID, "plddt", 88.5)
        client.LogMetric(ctx, run.ID, "rmsd", 2.1)
        client.LogParam(ctx, run.ID, "model", m)
    }
}`},{lang:"elixir",filename:"protein_structure_mlflow.ex",code:`defmodule Protein.MLflowTracking do
  use GenServer
  def start_link(_), do: GenServer.start_link(__MODULE__, :ok, name: __MODULE__)
  @impl true
  def init(:ok) do
    for m <- ["AlphaFold2", "RoseTTAFold", "ESMFold", "ColabFold", "OmegaFold"] do
      run_id = create_run(m)
      log_metric(run_id, "plddt", 85.0 + :rand.uniform() * 10.0)
      log_metric(run_id, "rmsd", 1.5 + :rand.uniform() * 2.0)
      log_param(run_id, "model", m)
    end
    {:ok, %{}}
  end
  defp create_run(_), do: "run_simulated"
  defp log_metric(_, _, _), do: :ok
  defp log_param(_, _, _), do: :ok
end`},{lang:"zig",filename:"protein_structure_mlflow.zig",code:`const std = @import("std");
const mlflow = @import("mlflow-zig");
pub fn main() !void {
    var gpa = std.heap.GeneralPurposeAllocator(.{}){};
    defer _ = gpa.deinit();
    const allocator = gpa.allocator();
    var client = try mlflow.Client.init(allocator, .{.url = "http://mlflow:5000"});
    defer client.deinit();
    const models = [_][]const u8{ "AlphaFold2", "RoseTTAFold", "ESMFold", "ColabFold", "OmegaFold" };
    for (models) |m| {
        var run = try client.createRun(allocator, "protein_structure", m);
        defer run.deinit();
        try client.logMetric(run.id, "plddt", 88.5);
        try client.logMetric(run.id, "rmsd", 2.1);
    }
}`}],runnablePython:`# Protein structure MLflow tracking simulation — Pyodide
import random
print("=== MLflow Protein Structure Prediction Tracking ===")
print("5 model variants on CASP14 benchmark (1000 proteins)")
print()
models = ["AlphaFold2", "RoseTTAFold", "ESMFold", "ColabFold", "OmegaFold"]
random.seed(42)
print(f"{'Run':>4} | {'Model':<15} | {'pLDDT':>6} | {'RMSD':>6} | {'GDT_TS':>7}")
print("-" * 50)
run_id = 0
best_plddt = 0
for m in models:
    run_id += 1
    plddt = random.uniform(75, 95)
    rmsd = random.uniform(1.0, 4.0)
    gdt = random.uniform(60, 90)
    print(f"{run_id:>4} | {m:<15} | {plddt:.1f} | {rmsd:.2f} | {gdt:.1f}")
    if plddt > best_plddt:
        best_plddt = plddt
        best_model = m
print(f"\\nBest: {best_model} pLDDT={best_plddt:.1f} → Production")`,insight:"Protein structure prediction tracking shows MLflow for structural biology — pLDDT (AlphaFold's confidence score) + RMSD (structural deviation) are tracked across model variants. AlphaFold2 (pLDDT ~92) beats RoseTTAFold (pLDDT ~85) — MLflow Model Registry promotes AlphaFold2 to Production."}],m=[{id:"feature-store-genomics-snp",step:"1",title:"Genomics SNP Features for GWAS",subtitle:"Life Sciences — offline allele frequencies + online variant lookups",accent:"oklch(0.65 0.16 30)",icon:(0,a.jsx)(r.A,{className:"h-4 w-4"}),badge:"Life Sciences \xb7 Genomics",brief:{dataset:"1000 Genomes SNP features — allele frequencies, LD scores, population labels. Offline: Iceberg on S3. Online: Redis for sub-ms variant lookups.",scale:"~3B SNPs \xd7 26 populations = 78B feature rows \xb7 ~500GB offline \xb7 ~10GB online",why:"Shows the feature store pattern for genomics: offline features (allele frequencies computed via Spark batch) → online features (Redis for real-time variant lookups during GWAS). Point-in-time correctness prevents look-ahead bias."},stats:[{label:"SNPs",value:"3 billion"},{label:"Offline size",value:"500 GB"},{label:"Online size",value:"10 GB"},{label:"Lookup latency",value:"<1ms"}],tools:["Feast","Apache Spark","Redis","Iceberg","S3"],codeTabs:[{lang:"scala",filename:"GenomicsFeatureStore.scala",code:`import org.apache.spark.sql.SparkSession
val spark = SparkSession.builder().getOrCreate()
// Write allele frequencies to offline store (Feast)
val features = spark.table("iceberg.gold.allele_frequencies")
features.write.format("parquet").save("s3://feast-offline/genomics/")`},{lang:"rust",filename:"genomics_feature_store.rs",code:`use feast_rust::FeatureStore;
#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let fs = FeatureStore::new("feast-offline")?;
    let features = fs.get_online_features(&["allele_freq", "ld_score"], &["rs12345"]).await?;
    Ok(())
}`},{lang:"go",filename:"genomics_feature_store.go",code:`package main
import ("github.com/feast/feast-go")
func main() {
    fs := feast.NewFeatureStore("feast-offline")
    features, _ := fs.GetOnlineFeatures([]string{"allele_freq"}, []string{"rs12345"})
    _ = features
}`},{lang:"elixir",filename:"genomics_feature_store.ex",code:`defmodule Genomics.FeatureStore do
  def get_snp_features(snp_id) do
    {:ok, features} = Feast.Client.get_online("genomics_features", [snp_id])
    features
  end
end`},{lang:"zig",filename:"genomics_feature_store.zig",code:`const std = @import("std");
const feast = @import("feast-zig");
pub fn main() !void {
    var fs = try feast.FeatureStore.init("feast-offline");
    defer fs.deinit();
    var features = try fs.getOnlineFeatures(&.{"allele_freq"}, &.{"rs12345"});
    defer features.deinit();
}`}],runnablePython:`# Genomics feature store simulation — Pyodide
import random
print("=== Genomics Feature Store (Feast) ===")
print("Offline: 3B SNPs x 26 populations on Iceberg (500GB)")
print("Online: Redis sub-ms lookup for GWAS")
print()
random.seed(42)
snps = [f"rs{random.randint(1, 999999)}" for _ in range(5)]
for snp in snps:
    freq = random.uniform(0.01, 0.99)
    print(f"  {snp}: allele_freq={freq:.4f} (online lookup <1ms)")
print("\\nPoint-in-time correctness: features valued at time T prevent look-ahead bias")`,insight:"Genomics SNP features are the canonical feature store use case for life sciences — offline computation (allele frequencies via Spark on Iceberg) feeds online lookups (Redis for sub-ms GWAS queries). Point-in-time correctness prevents data leakage in ML training."},{id:"feature-store-clinical-features",step:"2",title:"Clinical Trial Patient Features",subtitle:"Life Sciences — demographics + labs with point-in-time correctness",accent:"oklch(0.65 0.16 165)",icon:(0,a.jsx)(n.A,{className:"h-4 w-4"}),badge:"Life Sciences \xb7 Clinical",brief:{dataset:"Synthetic clinical trial — 10,000 patients, 200 features (demographics, lab values, treatment history). Feature store ensures point-in-time correctness — feature values as-of the prediction time, preventing look-ahead bias.",scale:"~10,000 patients \xb7 200 features \xb7 50 features per prediction \xb7 point-in-time joined",why:"Shows the CRITICAL feature store pattern: point-in-time correctness. Without it, training data would include lab values measured AFTER the prediction time → data leakage → over-optimistic model performance. Feature stores solve this via point-in-time joins."},stats:[{label:"Patients",value:"10,000"},{label:"Features",value:"200"},{label:"Point-in-time",value:"Correct"},{label:"Leakage",value:"Prevented"}],tools:["Feast","Tecton","SageMaker Feature Store","Redis","PostgreSQL"],codeTabs:[{lang:"scala",filename:"ClinicalFeatureStore.scala",code:`import org.apache.spark.sql.SparkSession
val spark = SparkSession.builder().getOrCreate()
// Point-in-time join: get lab values as-of prediction time
val features = spark.sql("SELECT * FROM feast.clinical_features POINT_IN_TIME_AS_OF '2024-09-01'")`},{lang:"rust",filename:"clinical_feature_store.rs",code:`use feast_rust::FeatureStore;
#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let fs = FeatureStore::new("clinical_features")?;
    // Point-in-time: features as-of prediction time
    let features = fs.get_features_point_in_time(&["lab_values"], "2024-09-01T00:00:00Z").await?;
    Ok(())
}`},{lang:"go",filename:"clinical_feature_store.go",code:`package main
import ("github.com/feast/feast-go"; "time")
func main() {
    fs := feast.NewFeatureStore("clinical_features")
    t, _ := time.Parse(time.RFC3339, "2024-09-01T00:00:00Z")
    features, _ := fs.GetFeaturesPointInTime([]string{"lab_values"}, t)
    _ = features
}`},{lang:"elixir",filename:"clinical_feature_store.ex",code:`defmodule Clinical.FeatureStore do
  def get_features_point_in_time(patient_id, prediction_time) do
    {:ok, features} = Feast.Client.get_point_in_time(
      "clinical_features", [patient_id], prediction_time)
    features
  end
end`},{lang:"zig",filename:"clinical_feature_store.zig",code:`const std = @import("std");
const feast = @import("feast-zig");
pub fn main() !void {
    var fs = try feast.FeatureStore.init("clinical_features");
    defer fs.deinit();
    // Point-in-time: features as-of prediction time
    var features = try fs.getFeaturesPointInTime(&.{"lab_values"}, "2024-09-01T00:00:00Z");
    defer features.deinit();
}`}],runnablePython:`# Clinical feature store simulation — Pyodide
import random
from datetime import datetime, timedelta
print("=== Clinical Feature Store — Point-in-Time Correctness ===")
print("10,000 patients \xd7 200 features \xd7 point-in-time joined")
print()
random.seed(42)
patients = [f"PT{random.randint(1, 10000):05d}" for _ in range(5)]
prediction_time = datetime(2024, 9, 1, 12, 0, 0)
for pid in patients:
    # Simulate lab values at different times
    lab_time = prediction_time - timedelta(days=random.randint(1, 30))
    glucose = random.uniform(70, 200)
    print(f"  {pid}: prediction @ {prediction_time}, lab @ {lab_time.date()} → glucose={glucose:.1f}")
print("\\nPoint-in-time: features valued BEFORE prediction time only (no leakage)")`,insight:"Point-in-time correctness is the #1 reason feature stores exist — without it, ML models train on future information (data leakage), producing over-optimistic metrics that fail in production. The feature store guarantees that every feature value was known at the prediction time."},{id:"feature-store-sensor-features",step:"3",title:"Environmental Sensor Features",subtitle:"Sensors — rolling averages, anomalies, calibration offsets",accent:"oklch(0.65 0.16 60)",icon:(0,a.jsx)(l.A,{className:"h-4 w-4"}),badge:"Sensors \xb7 Environmental",brief:{dataset:"EPA AirNow sensor data — 50k sensors, 7 metrics. Feature store computes rolling averages (1h, 24h), anomaly scores, and calibration offsets for ML air quality models.",scale:"~50k sensors \xb7 7 metrics \xb7 3 feature windows (1h/24h/7d) \xb7 ~100GB offline",why:"Shows feature stores for time-series sensor data — rolling averages are computed offline (Spark on Iceberg) and materialised to online (Redis) for real-time ML inference. Feature drift (PSI) monitors when sensor calibration drifts."},stats:[{label:"Sensors",value:"50k"},{label:"Metrics",value:"7"},{label:"Windows",value:"3 (1h/24h/7d)"},{label:"Offline size",value:"100 GB"}],tools:["Feast","Apache Spark","Redis","Iceberg","PSI drift monitoring"],codeTabs:[{lang:"scala",filename:"SensorFeatureStore.scala",code:`import org.apache.spark.sql.SparkSession
import org.apache.spark.sql.functions._
val spark = SparkSession.builder().getOrCreate()
val readings = spark.table("iceberg.silver.sensor_calibrated")
val features = readings.groupBy($"sensor_id", window($"sensor_ts", "1 hour"))
  .agg(mean("value_standard").as("avg_1h"), stddev("value_standard").as("std_1h"))
features.write.format("parquet").save("s3://feast-offline/sensor/")`},{lang:"rust",filename:"sensor_feature_store.rs",code:`use feast_rust::FeatureStore;
#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let fs = FeatureStore::new("sensor_features")?;
    let features = fs.get_online_features(&["avg_1h", "std_1h"], &["sensor_12345"]).await?;
    Ok(())
}`},{lang:"go",filename:"sensor_feature_store.go",code:`package main
import "github.com/feast/feast-go"
func main() {
    fs := feast.NewFeatureStore("sensor_features")
    features, _ := fs.GetOnlineFeatures([]string{"avg_1h"}, []string{"sensor_12345"})
    _ = features
}`},{lang:"elixir",filename:"sensor_feature_store.ex",code:`defmodule Sensor.FeatureStore do
  def get_sensor_features(sensor_id) do
    {:ok, features} = Feast.Client.get_online("sensor_features", [sensor_id])
    features
  end
end`},{lang:"zig",filename:"sensor_feature_store.zig",code:`const std = @import("std");
const feast = @import("feast-zig");
pub fn main() !void {
    var fs = try feast.FeatureStore.init("sensor_features");
    defer fs.deinit();
    var features = try fs.getOnlineFeatures(&.{"avg_1h"}, &.{"sensor_12345"});
    defer features.deinit();
}`}],runnablePython:`# Sensor feature store simulation — Pyodide
import random
print("=== Sensor Feature Store (Feast) ===")
print("50k sensors \xd7 7 metrics \xd7 3 windows (1h/24h/7d)")
print()
random.seed(42)
sensors = [f"sensor_{random.randint(1, 50000):05d}" for _ in range(5)]
for s in sensors:
    avg_1h = random.uniform(0, 50)
    avg_24h = random.uniform(0, 50)
    avg_7d = random.uniform(0, 50)
    print(f"  {s}: avg_1h={avg_1h:.2f}, avg_24h={avg_24h:.2f}, avg_7d={avg_7d:.2f}")
print("\\nPSI drift monitoring: alerts when sensor calibration drifts")`,insight:"Sensor feature stores show time-series windowing — rolling averages (1h, 24h, 7d) are computed offline (Spark on Iceberg) and materialised to Redis for real-time ML. PSI (Population Stability Index) monitors feature drift, alerting when sensor calibration degrades."}],u=[{id:"vector-db-protein-embeddings",step:"1",title:"Protein Embedding Search (ESM-2)",subtitle:"Life Sciences — find homologous proteins via HNSW vector search",accent:"oklch(0.65 0.16 30)",icon:(0,a.jsx)(s.A,{className:"h-4 w-4"}),badge:"Life Sciences \xb7 Proteomics",brief:{dataset:"ESM-2 protein embeddings — 250M proteins from UniProt, each embedded as a 1280-dim vector. Stored in Milvus (HNSW index) for sub-ms homology search.",scale:"~250M proteins \xb7 1280-dim embeddings \xb7 ~600GB in Milvus \xb7 HNSW index",why:"Shows vector DB for structural biology — ESM-2 (Meta AI 2023) embeds protein sequences into 1280-dim vectors where homologous proteins are nearby. HNSW enables sub-ms nearest-neighbor search across 250M proteins. This is how AlphaFold finds template structures."},stats:[{label:"Proteins",value:"250M"},{label:"Dimensions",value:"1,280"},{label:"Index",value:"HNSW"},{label:"Search latency",value:"<1ms"}],tools:["Milvus","ESM-2 (Meta AI)","HNSW","UniProt","FAISS"],codeTabs:[{lang:"scala",filename:"ProteinEmbeddingSearch.scala",code:`import org.apache.spark.sql.SparkSession
val spark = SparkSession.builder().getOrCreate()
val embeddings = spark.read.parquet("s3://protein-embeddings/esm2/")
embeddings.write.format("milvus").option("collection", "proteins").save()`},{lang:"rust",filename:"protein_embedding_search.rs",code:`use milvus_rust::MilvusClient;
#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let client = MilvusClient::new("http://milvus:19530").await?;
    let query = vec![0.1f32; 1280]; // ESM-2 embedding
    let results = client.search("proteins", &query, 10).await?;
    println!("Found {} homologous proteins", results.len());
    Ok(())
}`},{lang:"go",filename:"protein_embedding_search.go",code:`package main
import "github.com/milvus-io/milvus-sdk-go"
func main() {
    client, _ := milvus.NewClient(milvus.Config{Address: "milvus:19530"})
    query := make([]float32, 1280)
    results, _ := client.Search("proteins", query, 10)
    _ = results
}`},{lang:"elixir",filename:"protein_embedding_search.ex",code:`defmodule Protein.VectorSearch do
  def find_homologs(embedding) do
    {:ok, results} = Milvus.Client.search("proteins", embedding, 10)
    results
  end
end`},{lang:"zig",filename:"protein_embedding_search.zig",code:`const std = @import("std");
const milvus = @import("milvus-zig");
pub fn main() !void {
    var client = try milvus.Client.init("milvus:19530");
    defer client.deinit();
    var query: [1280]f32 = .{0.1} ** 1280;
    var results = try client.search("proteins", &query, 10);
    defer results.deinit();
}`}],runnablePython:`# Protein embedding search simulation — Pyodide
import math, random
print("=== Protein Embedding Search (ESM-2 + Milvus HNSW) ===")
print("250M proteins \xd7 1280-dim embeddings → HNSW → sub-ms search")
print()
random.seed(42)
# Simulate 5 protein embeddings (1280-dim)
proteins = [("P12345", "hemoglobin"), ("P69905", "hemoglobin alpha"),
            ("P68871", "hemoglobin beta"), ("P00398", "cytochrome c"),
            ("P0A3T5", "GFP")]
query = [random.gauss(0, 1) for _ in range(64)]  # simplified 64-dim
for pid, name in proteins:
    emb = [random.gauss(0, 1) for _ in range(64)]
    # Cosine similarity
    dot = sum(q*e for q, e in zip(query, emb))
    norm_q = math.sqrt(sum(q*q for q in query))
    norm_e = math.sqrt(sum(e*e for e in emb))
    cos_sim = dot / (norm_q * norm_e)
    print(f"  {pid} ({name}): cosine={cos_sim:.4f} {'<-- homolog' if cos_sim > 0.8 else ''}")
print("\\nHNSW: O(log n) search — sub-ms for 250M proteins")`,insight:"ESM-2 protein embeddings enable structural biology at scale — 250M proteins embedded as 1280-dim vectors, HNSW index in Milvus enables sub-ms homology search. This is how AlphaFold finds template structures for novel proteins. The cosine similarity in embedding space predicts structural similarity."},{id:"vector-db-molecular-similarity",step:"2",title:"Molecular Similarity (ECFP Fingerprints)",subtitle:"Chemistry — virtual screening via cosine similarity",accent:"oklch(0.65 0.16 165)",icon:(0,a.jsx)(r.A,{className:"h-4 w-4"}),badge:"Chemistry \xb7 Drug Discovery",brief:{dataset:"ZINC database — 1B molecules, each as 2048-bit ECFP4 fingerprint. Stored in Milvus (IVF index) for sub-second virtual screening.",scale:"~1B molecules \xb7 2048-dim ECFP4 fingerprints \xb7 ~200GB in Milvus \xb7 IVF index",why:"Shows vector DB for drug discovery — ECFP4 (Extended-Connectivity Fingerprints) encode molecular structure. Cosine similarity finds structurally similar molecules → potential drug candidates. IVF index enables sub-second search across 1B molecules."},stats:[{label:"Molecules",value:"1 billion"},{label:"Dimensions",value:"2,048"},{label:"Index",value:"IVF"},{label:"Search time",value:"<1s"}],tools:["Milvus","RDKit","ECFP4","IVF","ZINC database"],codeTabs:[{lang:"scala",filename:"MolecularSimilarity.scala",code:`import org.apache.spark.sql.SparkSession
val spark = SparkSession.builder().getOrCreate()
val fingerprints = spark.read.parquet("s3://zinc-ecfp4/")
fingerprints.write.format("milvus").option("collection", "molecules").save()`},{lang:"rust",filename:"molecular_similarity.rs",code:`use milvus_rust::MilvusClient;
#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let client = MilvusClient::new("http://milvus:19530").await?;
    let query = vec![0.0f32; 2048]; // ECFP4 fingerprint
    let results = client.search("molecules", &query, 100).await?;
    println!("Found {} similar molecules", results.len());
    Ok(())
}`},{lang:"go",filename:"molecular_similarity.go",code:`package main
import "github.com/milvus-io/milvus-sdk-go"
func main() {
    client, _ := milvus.NewClient(milvus.Config{Address: "milvus:19530"})
    query := make([]float32, 2048)
    results, _ := client.Search("molecules", query, 100)
    _ = results
}`},{lang:"elixir",filename:"molecular_similarity.ex",code:`defmodule Molecule.VectorSearch do
  def find_similar(fingerprint) do
    {:ok, results} = Milvus.Client.search("molecules", fingerprint, 100)
    results
  end
end`},{lang:"zig",filename:"molecular_similarity.zig",code:`const std = @import("std");
const milvus = @import("milvus-zig");
pub fn main() !void {
    var client = try milvus.Client.init("milvus:19530");
    defer client.deinit();
    var query: [2048]f32 = .{0.0} ** 2048;
    var results = try client.search("molecules", &query, 100);
    defer results.deinit();
}`}],runnablePython:`# Molecular similarity simulation — Pyodide
import math, random
print("=== Molecular Similarity (ECFP4 + Milvus IVF) ===")
print("1B molecules \xd7 2048-dim ECFP4 → IVF → sub-second search")
print()
random.seed(42)
query_fp = [random.randint(0, 1) for _ in range(256)]  # simplified 256-dim
molecules = [("ZINC000123", "aspirin"), ("ZINC000456", "ibuprofen"),
             ("ZINC000789", "paracetamol"), ("ZINC000abc", "omeprazole")]
for zinc_id, name in molecules:
    mol_fp = [random.randint(0, 1) for _ in range(256)]
    # Tanimoto similarity (for binary fingerprints)
    intersection = sum(1 for a, b in zip(query_fp, mol_fp) if a == 1 and b == 1)
    union = sum(1 for a, b in zip(query_fp, mol_fp) if a == 1 or b == 1)
    tani = intersection / max(union, 1)
    print(f"  {zinc_id} ({name}): Tanimoto={tani:.4f} {'<-- hit' if tani > 0.7 else ''}")
print("\\nIVF: Voronoi partitioning → sub-second search across 1B molecules")`,insight:"ECFP4 fingerprints encode molecular structure as 2048-bit vectors. Cosine/Tanimoto similarity finds structurally similar molecules for virtual screening — 1B molecules searched in <1s via IVF index. This is how pharma companies find drug candidates from compound libraries."},{id:"vector-db-genomics-variants",step:"3",title:"Genomics Variant Clustering",subtitle:"Life Sciences — sequence embeddings → IVF → variant grouping",accent:"oklch(0.65 0.16 250)",icon:(0,a.jsx)(o.A,{className:"h-4 w-4"}),badge:"Life Sciences \xb7 Genomics",brief:{dataset:"Genomics variant embeddings — 3B SNPs from 1000 Genomes, each embedded as a 768-dim vector via DNA-BERT. Stored in Pinecone for clustering analysis.",scale:"~3B variants \xb7 768-dim DNA-BERT embeddings \xb7 ~500GB in Pinecone \xb7 HNSW + IVF hybrid",why:"Shows vector DB for genomics — DNA-BERT (2023) embeds genomic sequences so functional variants cluster together. Vector search finds variants with similar regulatory effects, enabling genotype-phenotype association discovery."},stats:[{label:"Variants",value:"3 billion"},{label:"Dimensions",value:"768"},{label:"Index",value:"HNSW+IVF"},{label:"Backend",value:"Pinecone"}],tools:["Pinecone","DNA-BERT","HNSW+IVF","1000 Genomes"],codeTabs:[{lang:"scala",filename:"GenomicsVariantClustering.scala",code:`import org.apache.spark.sql.SparkSession
val spark = SparkSession.builder().getOrCreate()
val embeddings = spark.read.parquet("s3://genomics-embeddings/dna-bert/")
embeddings.write.format("pinecone").option("index", "genomic-variants").save()`},{lang:"rust",filename:"genomics_variant_clustering.rs",code:`use pinecone_rust::PineconeClient;
#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let client = PineconeClient::new("api_key").await?;
    let query = vec![0.1f32; 768];
    let results = client.query("genomic-variants", &query, 100).await?;
    Ok(())
}`},{lang:"go",filename:"genomics_variant_clustering.go",code:`package main
import "github.com/pinecone-io/pinecone-go"
func main() {
    client := pinecone.NewClient("api_key")
    query := make([]float32, 768)
    results, _ := client.Query("genomic-variants", query, 100)
    _ = results
}`},{lang:"elixir",filename:"genomics_variant_clustering.ex",code:`defmodule Genomics.VectorSearch do
  def find_similar_variants(embedding) do
    {:ok, results} = Pinecone.Client.query("genomic-variants", embedding, 100)
    results
  end
end`},{lang:"zig",filename:"genomics_variant_clustering.zig",code:`const std = @import("std");
const pinecone = @import("pinecone-zig");
pub fn main() !void {
    var client = try pinecone.Client.init("api_key");
    defer client.deinit();
    var query: [768]f32 = .{0.1} ** 768;
    var results = try client.query("genomic-variants", &query, 100);
    defer results.deinit();
}`}],runnablePython:`# Genomics variant clustering simulation — Pyodide
import math, random
print("=== Genomics Variant Clustering (DNA-BERT + Pinecone) ===")
print("3B variants \xd7 768-dim DNA-BERT → HNSW+IVF → similar-effect search")
print()
random.seed(42)
query_emb = [random.gauss(0, 1) for _ in range(64)]  # simplified 64-dim
variants = [("rs12345", "regulatory"), ("rs67890", "missense"),
            ("rs11111", "synonymous"), ("rs22222", "regulatory")]
for rsid, vtype in variants:
    emb = [random.gauss(0, 1) for _ in range(64)]
    dot = sum(q*e for q, e in zip(query_emb, emb))
    norm = math.sqrt(sum(q*q for q in query_emb)) * math.sqrt(sum(e*e for e in emb))
    cos_sim = dot / max(norm, 0.001)
    print(f"  {rsid} ({vtype}): cosine={cos_sim:.4f} {'<-- similar effect' if cos_sim > 0.8 else ''}")
print("\\nDNA-BERT: variants with similar regulatory effects cluster together in embedding space")`,insight:"DNA-BERT (2023) embeds genomic sequences so functionally similar variants are nearby in embedding space. Vector search finds variants with similar regulatory effects — enabling genotype-phenotype discovery without expensive functional assays. 3B variants searched in <1s via HNSW+IVF hybrid index."}],p=[{id:"llmops-biomedical-rag",step:"1",title:"Biomedical RAG (PubMed + BioBERT)",subtitle:"Life Sciences — hybrid retrieval → LLM generation → citations",accent:"oklch(0.65 0.16 30)",icon:(0,a.jsx)(c.A,{className:"h-4 w-4"}),badge:"Life Sciences \xb7 Biomedical NLP",brief:{dataset:"PubMed abstracts — 35M biomedical papers. BioBERT embeddings + BM25 hybrid retrieval → LLM (GPT-4) generates answers with citations from PubMed.",scale:"~35M PubMed abstracts \xb7 768-dim BioBERT embeddings \xb7 BM25 + vector hybrid \xb7 GPT-4 generation",why:"Shows LLMOps for biomedical research — the RAG pipeline retrieves relevant PubMed papers (hybrid: BM25 for keyword + vector for semantic), generates answers with citations. Guardrails prevent hallucination (every claim must have a PubMed citation)."},stats:[{label:"Papers",value:"35M"},{label:"Dimensions",value:"768"},{label:"Retrieval",value:"Hybrid (BM25+vector)"},{label:"Generation",value:"GPT-4 + citations"}],tools:["LangChain","BioBERT","Pinecone","BM25","GPT-4","PubMed API"],codeTabs:[{lang:"scala",filename:"BiomedicalRAG.scala",code:`import org.apache.spark.sql.SparkSession
val spark = SparkSession.builder().getOrCreate()
val pubmed = spark.read.parquet("s3://pubmed-embeddings/")
pubmed.write.format("pinecone").option("index", "pubmed").save()`},{lang:"rust",filename:"biomedical_rag.rs",code:`use pinecone_rust::PineconeClient;
#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let client = PineconeClient::new("api_key").await?;
    let query = vec![0.1f32; 768]; // BioBERT embedding
    let docs = client.query("pubmed", &query, 10).await?;
    // Generate answer with GPT-4 + citations
    let prompt = format!("Answer based on: {:?}\\nQuestion: What is the mechanism of action of aspirin?", docs);
    Ok(())
}`},{lang:"go",filename:"biomedical_rag.go",code:`package main
import ("github.com/pinecone-io/pinecone-go"; "fmt")
func main() {
    client := pinecone.NewClient("api_key")
    query := make([]float32, 768)
    docs, _ := client.Query("pubmed", query, 10)
    fmt.Printf("Retrieved %d PubMed papers for RAG generation\\n", len(docs))
}`},{lang:"elixir",filename:"biomedical_rag.ex",code:`defmodule Biomedical.RAG do
  def answer(question) do
    {:ok, docs} = Pinecone.Client.query("pubmed", embed_bert(question), 10)
    prompt = "Answer based on: " <> Enum.join(docs, "\\n") <> "\\nQ: " <> question
    {:ok, answer} = GPT.Client.chat(prompt)
    answer
  end
  defp embed_bert(_text), do: [0.1]  # simplified
end`},{lang:"zig",filename:"biomedical_rag.zig",code:`const std = @import("std");
const pinecone = @import("pinecone-zig");
pub fn main() !void {
    var client = try pinecone.Client.init("api_key");
    defer client.deinit();
    var query: [768]f32 = .{0.1} ** 768;
    var docs = try client.query("pubmed", &query, 10);
    defer docs.deinit();
}`}],runnablePython:`# Biomedical RAG simulation — Pyodide
import random
print("=== Biomedical RAG (PubMed + BioBERT + GPT-4) ===")
print("35M PubMed abstracts → hybrid retrieval (BM25 + vector) → GPT-4 + citations")
print()
random.seed(42)
question = "What is the mechanism of action of aspirin?"
print(f"Question: {question}")
print()
# Simulate retrieved papers
papers = [("PMID:12345", "Aspirin inhibits COX-1...", 0.92),
          ("PMID:67890", "Aspirin irreversibly acetylates COX-1...", 0.89),
          ("PMID:11111", "COX-1 inhibition reduces prostaglandin synthesis...", 0.85)]
print("Retrieved papers (hybrid BM25 + vector):")
for pmid, title, score in papers:
    print(f"  {pmid} (score={score:.2f}): {title[:60]}...")
print()
print("GPT-4 answer (with citations):")
print("  Aspirin irreversibly inhibits COX-1 (cyclooxygenase-1) by")
print("  acetylating a serine residue at position 529 [PMID:67890],")
print("  reducing prostaglandin synthesis [PMID:11111].")
print()
print("Guardrail: every claim has a PMID citation — no hallucination")`,insight:"Biomedical RAG is the canonical LLMOps use case for life sciences — 35M PubMed papers indexed via BioBERT + BM25 hybrid retrieval, GPT-4 generates answers with mandatory citations. The guardrail (every claim must cite a PMID) prevents hallucination — critical in medical applications where a fabricated citation could endanger patients."},{id:"llmops-chemistry-llm",step:"2",title:"Chemistry LLM (Molecule Generation)",subtitle:"Chemistry — SMILES generation with validation guardrails",accent:"oklch(0.65 0.16 165)",icon:(0,a.jsx)(s.A,{className:"h-4 w-4"}),badge:"Chemistry \xb7 Drug Discovery",brief:{dataset:"ZINC molecule database — 1B SMILES strings. LLM generates novel SMILES for drug candidates. Guardrail: RDKit validates every generated SMILES is chemically valid (no impossible bonds, valid valence).",scale:"~1B molecules in training set \xb7 generated SMILES validated by RDKit \xb7 ~20% rejection rate (invalid SMILES)",why:"Shows LLMOps for chemistry — LLM generates SMILES strings for novel drug candidates. Without the RDKit guardrail, ~20% of generated molecules would be chemically impossible (invalid valence, impossible bonds). The guardrail catches these before they reach the screening pipeline."},stats:[{label:"Training set",value:"1B SMILES"},{label:"Guardrail",value:"RDKit validation"},{label:"Rejection rate",value:"~20%"},{label:"Valid output",value:"~80%"}],tools:["LangChain","GPT-4","RDKit","SMILES","ZINC database"],codeTabs:[{lang:"scala",filename:"ChemistryLLM.scala",code:`import org.apache.spark.sql.SparkSession
val spark = SparkSession.builder().getOrCreate()
val smiles = spark.read.text("s3://zinc/smiles/")
// Fine-tune LLM on SMILES strings
// Guardrail: validate generated SMILES via RDKit`},{lang:"rust",filename:"chemistry_llm.rs",code:`use rdkit_rust::SmilesParser;
#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let parser = SmilesParser::new();
    let generated = "CC(=O)Oc1ccccc1C(=O)O"; // aspirin SMILES
    match parser.parse(generated) {
        Ok(mol) => println!("Valid molecule: {} atoms", mol.n_atoms()),
        Err(e) => println!("INVALID SMILES: {}", e),
    }
    Ok(())
}`},{lang:"go",filename:"chemistry_llm.go",code:`package main
import "github.com/rdkit/rdkit-go"
func main() {
    parser := rdkit.NewSmilesParser()
    smiles := "CC(=O)Oc1ccccc1C(=O)O"
    if mol, err := parser.Parse(smiles); err == nil {
        println("Valid:", mol.NumAtoms())
    } else {
        println("INVALID SMILES")
    }
}`},{lang:"elixir",filename:"chemistry_llm.ex",code:`defmodule Chemistry.LLM do
  def generate_molecule(prompt) do
    {:ok, smiles} = GPT.Client.chat("Generate a SMILES for: " <> prompt)
    case validate_smiles(smiles) do
      {:ok, mol} -> {:ok, mol}
      {:error, reason} -> generate_molecule(prompt)  # retry
    end
  end
  defp validate_smiles(smiles), do: {:ok, smiles}
end`},{lang:"zig",filename:"chemistry_llm.zig",code:`const std = @import("std");
const rdkit = @import("rdkit-zig");
pub fn main() !void {
    var parser = try rdkit.SmilesParser.init();
    defer parser.deinit();
    const smiles = "CC(=O)Oc1ccccc1C(=O)O";
    var mol = parser.parse(smiles) catch {
        std.debug.print("INVALID SMILES\\n", .{});
        return;
    };
    defer mol.deinit();
    std.debug.print("Valid: {d} atoms\\n", .{mol.numAtoms()});
}`}],runnablePython:`# Chemistry LLM with SMILES guardrail — Pyodide
import random
print("=== Chemistry LLM (SMILES generation + RDKit guardrail) ===")
print("LLM generates SMILES → RDKit validates → ~20% rejected")
print()
random.seed(42)
valid_smiles = ["CC(=O)Oc1ccccc1C(=O)O", "CC(C)CC1=CC=C(C=C1)C(C)C(=O)O",
                "CN1C=NC2=C1C(=O)N(C(=O)N2C)C", "INVALID_SMILES_123"]
for i, smiles in enumerate(valid_smiles):
    valid = all(c in "CNOPSFIclBr()=#-1234567890[]" for c in smiles)
    status = "VALID" if valid else "REJECTED"
    print(f"  Molecule {i+1}: {smiles[:40]}... → {status}")
print(f"\\nGuardrail: {sum(1 for s in valid_smiles if all(c in 'CNOPSFIclBr()=#-1234567890[]' for c in s))}/{len(valid_smiles)} valid")`,insight:"Chemistry LLMs need RDKit guardrails because ~20% of generated SMILES are chemically invalid — impossible valence, forbidden bonds. Without the guardrail, the drug discovery pipeline would waste screening time on impossible molecules. The LLM generates; RDKit validates; only valid SMILES reach the screening pipeline."},{id:"llmops-clinical-trial-nlp",step:"3",title:"Clinical Trial Matching via LLM",subtitle:"Life Sciences — patient-trial matching with hallucination prevention",accent:"oklch(0.65 0.16 250)",icon:(0,a.jsx)(n.A,{className:"h-4 w-4"}),badge:"Life Sciences \xb7 Clinical",brief:{dataset:"ClinicalTrials.gov — 500k+ clinical trials with eligibility criteria. LLM matches patient profiles to trials. Guardrail: every trial recommendation must cite specific eligibility criteria (hallucination prevention).",scale:"~500k clinical trials \xb7 10k patient profiles \xb7 LLM matching with criteria citations",why:"Shows LLMOps for clinical trial matching — LLM reads patient profiles (diagnosis, biomarkers, treatment history) and matches to trial eligibility criteria. The guardrail ensures every recommendation cites the specific criterion — preventing hallucinated trial matches that could endanger patients."},stats:[{label:"Trials",value:"500k+"},{label:"Patients",value:"10k"},{label:"Guardrail",value:"Citation required"},{label:"Matching",value:"LLM + criteria"}],tools:["LangChain","GPT-4","ClinicalTrials.gov API","LlamaIndex"],codeTabs:[{lang:"scala",filename:"ClinicalTrialNLP.scala",code:`import org.apache.spark.sql.SparkSession
val spark = SparkSession.builder().getOrCreate()
val trials = spark.read.json("s3://clinical-trials-gov/")
// LLM matches patient profile to trial eligibility criteria`},{lang:"rust",filename:"clinical_trial_nlp.rs",code:`use llm_rust::LlmClient;
#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let client = LlmClient::new("gpt-4")?;
    let prompt = "Match patient: 55yo male, NSCLC, EGFR+\\nTo trial: NCT12345 (criteria: EGFR+, age 18+)\\nCite specific criteria.";
    let answer = client.chat(prompt).await?;
    println!("{}", answer);
    Ok(())
}`},{lang:"go",filename:"clinical_trial_nlp.go",code:`package main
import "github.com/llm/llm-go"
func main() {
    client := llm.NewClient("gpt-4")
    answer, _ := client.Chat("Match patient to trial NCT12345. Cite criteria.")
    println(answer)
}`},{lang:"elixir",filename:"clinical_trial_nlp.ex",code:`defmodule Clinical.TrialMatching do
  def match_trial(patient, trial_nct) do
    prompt = "Match patient #{patient} to trial #{trial_nct}. Cite eligibility criteria."
    {:ok, answer} = GPT.Client.chat(prompt)
    # Guardrail: verify every claim cites a criterion
    answer
  end
end`},{lang:"zig",filename:"clinical_trial_nlp.zig",code:`const std = @import("std");
const llm = @import("llm-zig");
pub fn main() !void {
    var client = try llm.Client.init("gpt-4");
    defer client.deinit();
    var answer = try client.chat("Match patient to trial NCT12345. Cite criteria.");
    defer answer.deinit();
}`}],runnablePython:`# Clinical trial matching LLM — Pyodide
import random
print("=== Clinical Trial Matching via LLM (with guardrails) ===")
print("Patient profile → LLM → trial match with eligibility criteria citations")
print()
random.seed(42)
patient = {"age": 55, "diagnosis": "NSCLC", "biomarker": "EGFR+", "prior_tx": "carboplatin"}
trials = [("NCT12345", "EGFR+, age 18+"), ("NCT67890", "ALK+, age 18+"),
          ("NCT11111", "EGFR+, age 18-70, no prior TKI")]
print(f"Patient: {patient['age']}yo {patient['diagnosis']} {patient['biomarker']}")
print()
for nct, criteria in trials:
    match = patient['biomarker'] in criteria and str(patient['age']) in criteria.replace('+','')
    status = "MATCH" if match else "NO MATCH"
    print(f"  {nct}: criteria='{criteria}' → {status}")
print()
print("Guardrail: LLM must cite the specific criterion (e.g. 'EGFR+ matched')")
print("→ prevents hallucinated matches that could endanger patients")`,insight:"Clinical trial matching via LLM is the highest-stakes LLMOps use case — a hallucinated trial match could endanger a patient. The guardrail (every recommendation must cite the specific eligibility criterion) ensures the LLM grounds its answer in the actual trial protocol, not in a plausible-sounding fabrication."}]},49345:(e,i,t)=>{t.d(i,{a:()=>o});var a=t(95155),r=t(98500),n=t.n(r),s=t(33024),l=t(85757);function o({topics:e}){return 0===e.length?null:(0,a.jsxs)("div",{className:"rounded-md border border-border/60 bg-muted/20 p-4",children:[(0,a.jsxs)("p",{className:"text-xs font-semibold mb-2 flex items-center gap-1.5",children:[(0,a.jsx)(s.A,{className:"h-3.5 w-3.5 text-primary"})," Related topics — cross-page navigation"]}),(0,a.jsx)("div",{className:"flex flex-wrap gap-2 text-sm",children:e.map((i,t)=>(0,a.jsxs)("span",{className:"flex items-center gap-1",children:[(0,a.jsxs)(n(),{href:(0,l.ZJ)(i.id),className:"text-primary hover:underline",children:["→ ",i.reason]}),t<e.length-1&&(0,a.jsx)("span",{className:"text-muted-foreground",children:"\xb7"})]},i.id))})]})}},83036:(e,i,t)=>{t.d(i,{P:()=>c,S:()=>d});var a=t(95155),r=t(98500),n=t.n(r),s=t(44071),l=t(97810),o=t(85757);function c({title:e,connectedTo:i,researchHref:t,children:r}){return(0,a.jsxs)("div",{className:"rounded-md border border-primary/30 bg-primary/5 p-4 space-y-2",children:[(0,a.jsxs)("div",{className:"flex items-start gap-2",children:[(0,a.jsx)(s.A,{className:"h-4 w-4 text-primary mt-0.5 shrink-0"}),(0,a.jsxs)("div",{className:"flex-1 min-w-0",children:[(0,a.jsx)("p",{className:"text-sm font-semibold text-foreground/90 leading-tight",children:e}),i&&(0,a.jsxs)("div",{className:"flex items-center gap-1.5 mt-1",children:[(0,a.jsx)(l.A,{className:"h-3 w-3 text-muted-foreground"}),(0,a.jsxs)(n(),{href:t??(0,o.ZJ)("research"),className:"text-[10px] text-muted-foreground hover:text-primary hover:underline",children:["Connected to: ",i," →"]})]})]})]}),(0,a.jsx)("div",{className:"text-xs text-muted-foreground leading-relaxed space-y-2 pl-6",children:r})]})}function d({pageTitle:e,children:i}){return(0,a.jsxs)("div",{className:"space-y-4",children:[(0,a.jsxs)("div",{className:"flex items-center gap-2 border-b border-border/60 pb-2",children:[(0,a.jsx)(s.A,{className:"h-5 w-5 text-primary"}),(0,a.jsxs)("h2",{className:"text-base font-bold text-foreground/90",children:["My deeper thoughts — ",e]})]}),(0,a.jsx)("p",{className:"text-xs text-muted-foreground italic leading-relaxed",children:"These are not summaries. They are arguments — the kind of connections a reader with serious grey matter would make after living with the material for years. Each thought connects to the platform's research section (ADRs, papers, decision records) so it's traceable, not just opinionated."}),(0,a.jsx)("div",{className:"space-y-3",children:i})]})}}}]);