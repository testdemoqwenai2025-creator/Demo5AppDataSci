(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8289],{1407:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});let a=(0,r(6404).A)("cloud",[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]])},8195:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});let a=(0,r(6404).A)("database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]])},22164:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});let a=(0,r(6404).A)("external-link",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]])},39166:(e,t,r)=>{Promise.resolve().then(r.bind(r,51648))},51648:(e,t,r)=>{"use strict";r.d(t,{MlPlatformPage:()=>S});var a=r(95155),s=r(98500),i=r.n(s),n=r(58381),o=r(27774),l=r(60508),d=r(92194),c=r(19776),m=r(37108),p=r(66349),h=r(85757),u=r(45160),g=r(83036),f=r(90718),x=r(65576),y=r(33024),v=r(10762),w=r(27413),b=r(8195),k=r(44071),j=r(1407);let M=[{label:"ML lifecycle stages",value:"7",hint:"Prep → Features → Train → Eval → Register → Serve → Monitor",deltaTone:"flat"},{label:"Languages for ML code",value:"4+",hint:"Python (scikit-learn) \xb7 Rust (candle) \xb7 Scala (Spark MLlib) \xb7 Go (ONNX)",deltaTone:"flat"},{label:"Experiment tracking",value:"MLflow",hint:"OSS (Apache 2.0), language-agnostic, ADR-020",deltaTone:"flat"},{label:"In-browser training",value:"Pyodide",hint:"Linear regression demo — train + predict in browser",deltaTone:"flat"}],_=[{stage:"1. Data Prep",desc:"Feature engineering on Bronze/Silver data using DuckDB (ADR-014) or Polars (ADR-018)",tools:"DuckDB \xb7 Polars \xb7 dbt"},{stage:"2. Feature Store",desc:"Online + offline feature serving; consistency between training + serving",tools:"Databricks Feature Store \xb7 Feast"},{stage:"3. Training",desc:"Model training — scikit-learn, XGBoost, PyTorch, Spark MLlib",tools:"Python \xb7 Scala \xb7 Rust \xb7 Go"},{stage:"4. Evaluation",desc:"Cross-validation, A/B testing, champion/challenger comparison",tools:"MLflow Metrics \xb7 Evidently"},{stage:"5. Registry",desc:"Versioned model registry with stages (None → Staging → Production → Archived)",tools:"MLflow Model Registry"},{stage:"6. Serving",desc:"Batch scoring on Spark; real-time inference via containerised endpoints",tools:"MLflow Models \xb7 BentoML \xb7 Ray Serve"},{stage:"7. Monitoring",desc:"Drift detection, performance monitoring, retraining triggers",tools:"Evidently \xb7 NannyML \xb7 Arize"}],N=[{service:"MLflow",free:"100% OSS (Apache 2.0) — self-host tracking server",link:"mlflow.org"},{service:"Databricks Community",free:"Free 1-cluster — MLflow + MLlib + notebooks",link:"databricks.com/learn/community-edition"},{service:"Hugging Face",free:"Free model hub — transformers, datasets, Spaces",link:"huggingface.co"},{service:"Weights & Biases",free:"Free tier — personal projects, 100 GB artifact storage",link:"wandb.ai"},{service:"Feast (Feature Store)",free:"100% OSS — self-hostable feature store",link:"feast.dev"},{service:"Evidently (Monitoring)",free:"100% OSS — drift detection + reports",link:"evidentlyai.com"},{service:"Optuna (HPO)",free:"100% OSS — hyperparameter optimisation",link:"optuna.org"}],L=`# Linear Regression — trained in your browser via Pyodide
# No scikit-learn, no NumPy — pure Python stdlib (math module)
# Shows the core ML loop: initialise → train (gradient descent) → predict → evaluate

import math
import random

# Generate synthetic training data (y = 2x + 1 + noise)
random.seed(42)
X_train = [i * 0.1 for i in range(100)]
y_train = [2.0 * x + 1.0 + random.gauss(0, 0.3) for x in X_train]

# Generate test data
X_test = [i * 0.1 for i in range(100, 120)]
y_test = [2.0 * x + 1.0 + random.gauss(0, 0.3) for x in X_test]

# Linear regression: y = w*x + b
# Train via gradient descent
w = 0.0  # weight (should converge to ~2.0)
b = 0.0  # bias  (should converge to ~1.0)
lr = 0.01  # learning rate
epochs = 200

print("=" * 60)
print("ML Training — Linear Regression (gradient descent)")
print("=" * 60)
print(f"\\nTraining data: {len(X_train)} samples")
print(f"True model: y = 2.0x + 1.0 + noise(σ=0.3)")
print(f"Initial:     w={w:.4f}, b={b:.4f}")
print(f"Hyperparams: lr={lr}, epochs={epochs}")

for epoch in range(epochs):
    # Forward pass
    predictions = [w * x + b for x in X_train]
    errors = [pred - y for pred, y in zip(predictions, y_train)]

    # Gradients
    grad_w = sum(2 * err * x for err, x in zip(errors, X_train)) / len(X_train)
    grad_b = sum(2 * err for err in errors) / len(X_train)

    # Update weights
    w -= lr * grad_w
    b -= lr * grad_b

    # Log every 50 epochs
    if (epoch + 1) % 50 == 0 or epoch == 0:
        mse = sum(e ** 2 for e in errors) / len(errors)
        print(f"  Epoch {epoch+1:>3}: w={w:.4f}, b={b:.4f}, MSE={mse:.6f}")

# Evaluate on test set
test_preds = [w * x + b for x in X_test]
test_mse = sum((p - y) ** 2 for p, y in zip(test_preds, y_test)) / len(y_test)
test_rmse = math.sqrt(test_mse)

print(f"\\n{'=' * 60}")
print("RESULTS — Trained model")
print("=" * 60)
print(f"\\nLearned:    y = {w:.4f}x + {b:.4f}")
print(f"True:       y = 2.0000x + 1.0000")
print(f"Weight error:  {abs(w - 2.0):.4f} ({abs(w - 2.0)/2.0*100:.1f}%)")
print(f"Bias error:    {abs(b - 1.0):.4f} ({abs(b - 1.0)/1.0*100:.1f}%)")
print(f"\\nTest MSE:  {test_mse:.6f}")
print(f"Test RMSE: {test_rmse:.6f}")

# Show predictions
print(f"\\nSample predictions:")
for i in [0, 5, 10, 15]:
    x = X_test[i]
    print(f"  x={x:.1f} → predicted={w*x+b:.4f}, actual={y_test[i]:.4f}, error={abs(w*x+b - y_test[i]):.4f}")

print(f"\\n{'=' * 60}")
print("This model was trained in your browser via Pyodide (Python in Wasm).")
print("In production: log params (lr, epochs) + metrics (MSE, RMSE) to MLflow.")
print("=" * 60)`;function S(){return(0,a.jsxs)("div",{className:"space-y-8",children:[(0,a.jsx)(n.zY,{eyebrow:"Machine Learning \xb7 MLOps lifecycle",title:"ML Platform — Train, Track, Register, Serve, Monitor",description:"The ML lifecycle: data prep → feature engineering → training → evaluation → registry → serving → monitoring. MLflow for experiment tracking + model registry (ADR-020). Feature stores for train/serve consistency. Multi-language training code (Python/Rust/Scala/Go). And a Pyodide demo that trains a linear regression model IN YOUR BROWSER — click Run, watch gradient descent converge in real time.",right:(0,a.jsxs)("div",{className:"flex gap-2",children:[(0,a.jsxs)(u.E,{variant:"outline",className:"gap-1.5",children:[(0,a.jsx)(f.A,{className:"h-3 w-3"})," 7 stages"]}),(0,a.jsxs)(u.E,{variant:"outline",className:"gap-1.5",children:[(0,a.jsx)(x.A,{className:"h-3 w-3"})," MLflow"]})]})}),(0,a.jsx)("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-3",children:M.map(e=>(0,a.jsx)(n.nO,{label:e.label,value:e.value,hint:e.hint,deltaTone:e.deltaTone},e.label))}),(0,a.jsx)(n.iv,{title:"The ML lifecycle — 7 stages",description:"Each stage has its own tools, its own ADR, and its own failure modes. The platform's job is to make each stage self-serve.",icon:(0,a.jsx)(y.A,{className:"h-5 w-5"}),contentClassName:"p-0",children:(0,a.jsx)("div",{className:"divide-y divide-border/60",children:_.map((e,t)=>(0,a.jsx)("div",{className:"px-4 py-3 hover:bg-muted/20 transition-colors",children:(0,a.jsxs)("div",{className:"flex items-start gap-3",children:[(0,a.jsx)("span",{className:"flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold shrink-0 mt-0.5",children:t+1}),(0,a.jsxs)("div",{className:"flex-1 min-w-0",children:[(0,a.jsx)("p",{className:"text-sm font-semibold",children:e.stage.replace(/^\d+\.\s/,"")}),(0,a.jsx)("p",{className:"text-xs text-muted-foreground mt-0.5",children:e.desc}),(0,a.jsx)("p",{className:"text-[10px] font-mono text-primary/70 mt-1",children:e.tools})]})]})},e.stage))})}),(0,a.jsx)(n.iv,{title:"Try it: Train a linear regression model in your browser (Pyodide)",description:"Pure Python (stdlib only — no scikit-learn, no NumPy). Gradient descent converges to y≈2.0x+1.0 on synthetic data. Real ML happening in your browser tab via WebAssembly. In production: log params + metrics to MLflow (ADR-020).",icon:(0,a.jsx)(v.A,{className:"h-5 w-5"}),badge:"executable",children:(0,a.jsx)(p.l,{code:L,buttonLabel:"Train model in browser (Pyodide)"})}),(0,a.jsx)(n.iv,{title:"Multi-language: ML training in Python, Rust, Scala, Go",description:"Same model (linear regression), four languages. Python = scikit-learn default. Rust = candle (Rust ML). Scala = Spark MLlib. Go = ONNX runtime inference. Click to open the drawer.",icon:(0,a.jsx)(w.A,{className:"h-5 w-5"}),badge:"4 languages \xb7 drawer",children:(0,a.jsx)(m.j,{drawerMode:!0,drawerButtonLabel:"View 4-language ML training implementations",title:"Linear regression — 4 idiomatic implementations",description:"Python (scikit-learn + MLflow logging) \xb7 Rust (candle — Rust-native ML) \xb7 Scala (Spark MLlib — distributed) \xb7 Go (ONNX runtime — inference).",samples:[{language:"python",filename:"train_lr.py",note:"Python + scikit-learn + MLflow — the default for data scientists. Logs params, metrics, model artifacts to MLflow Tracking. File types: .py (source), interpreted, MLmodel artifact.",code:`import mlflow
import mlflow.sklearn
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error
import numpy as np

# Start MLflow run — tracks ALL params + metrics + artifacts
with mlflow.start_run(run_name="lr_revenue_v1"):
    # Log hyperparameters
    mlflow.log_param("model_type", "LinearRegression")
    mlflow.log_param("fit_intercept", True)
    mlflow.log_param("features", ["customer_ltv", "region_code", "segment"])

    # Load features from DuckDB (ADR-014) or Feature Store
    X = np.array([[1200, 1, 0], [850, 2, 1], [3200, 0, 2], [200, 3, 0]])
    y = np.array([5200, 850, 9999, 200])

    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.25)

    # Train
    model = LinearRegression(fit_intercept=True)
    model.fit(X_train, y_train)

    # Evaluate
    preds = model.predict(X_test)
    mse = mean_squared_error(y_test, preds)
    rmse = np.sqrt(mse)

    # Log metrics to MLflow
    mlflow.log_metric("mse", mse)
    mlflow.log_metric("rmse", rmse)

    # Log the model itself as an artifact
    mlflow.sklearn.log_model(model, "model")

    print(f"Trained: RMSE={rmse:.2f}")
    print(f"MLflow run: {mlflow.active_run().info.run_id}")
    print(f"Model logged to: mlruns/0/{mlflow.active_run().info.run_id}/artifacts/model")`,highlight:[6,7,8,9,10,11,12,13,19,20,24,25,28,29,30,31,33,34,36]},{language:"rust",filename:"train_lr.rs",note:"Rust + candle — Rust-native ML framework. Memory-safe, no GIL, compiles to single binary. For production inference at scale. File types: .rs → binary.",code:`use candle_core::{Device, Tensor, DType};
use candle_nn::{Linear, Module, VarBuilder, Optimizer, SGD};
use anyhow::Result;

fn train_linear_regression() -> Result<()> {
    let device = Device::Cpu;

    // Synthetic training data (y = 2x + 1 + noise)
    let x_data = vec![0.1_f32, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0];
    let y_data: Vec<f32> = x_data.iter().map(|x| 2.0 * x + 1.0).collect();

    let x = Tensor::from_slice(&x_data, (10, 1), &device)?;
    let y = Tensor::from_slice(&y_data, (10, 1), &device)?;

    // Initialise model: y = w*x + b
    let vs = VarBuilder::new(ScalarDType::F32, &device);
    let model = Linear::new(1, 1, vs.pp("linear"))?;
    let mut optimizer = SGD::new(0.01);

    // Train via gradient descent
    for epoch in 0..200 {
        let preds = model.forward(&x)?;
        let loss = (preds - &y)?.sqr()?.mean_all()?;
        optimizer.step(&loss)?;
        if epoch % 50 == 0 {
            println!("Epoch {}: loss={:?}", epoch, loss);
        }
    }

    println!("Trained linear regression model (Rust + candle)");
    Ok(())
}

fn main() -> Result<()> { train_linear_regression() }`,highlight:[6,7,9,10,12,14,15,17,19,20,22]},{language:"scala",filename:"TrainLR.scala",note:"Scala + Spark MLlib — distributed training across a cluster. For datasets that don't fit on one machine. File types: .scala → JVM bytecode.",code:`import org.apache.spark.ml.regression.LinearRegression
import org.apache.spark.sql.SparkSession
import org.apache.spark.ml.feature.VectorAssembler

val spark = SparkSession.builder.appName("lr-training").getOrCreate()

// Load features from Delta Lake (ADR-013)
val df = spark.read.format("delta")
  .load("s3://moderndatascieng-gold/ml/features/customer_ltv")

// Assemble features into a vector column
val assembler = new VectorAssembler()
  .setInputCols(Array("customer_ltv", "region_code", "segment"))
  .setOutputCol("features")
val featureDf = assembler.transform(df)

// Train distributed linear regression
val lr = new LinearRegression()
  .setMaxIter(200)
  .setRegParam(0.01)
  .setFeaturesCol("features")
  .setLabelCol("revenue")

val model = lr.fit(featureDf)
println(s"Coefficients: \\\${model.coefficients}")
println(s"Intercept: \\\${model.intercept}")

// Log to MLflow (Scala API)
// mlflow.logParam("maxIter", 200)
// mlflow.logMetric("rmse", model.summary.rootMeanSquaredError)`,highlight:[5,6,9,10,14,15,16,17,18,19,21,22,23]},{language:"go",filename:"infer_onnx.go",note:"Go + ONNX Runtime — load a pre-trained ONNX model, run inference. For real-time serving in Go microservices. File types: .go → binary; .onnx model file.",code:`package main

import (
        "fmt"
        "os"

        "github.com/yalue/onnxruntime"
)

func main() {
        // Initialise ONNX Runtime (loads the shared library)
        onnxruntime.InitializeONNXRuntime()
        defer onnxruntime.CleanupONNXRuntime()

        // Load pre-trained model (exported from scikit-learn via skl2onnx)
        model, err := onnxruntime.NewSession(
                "linear_regression.onnx",
                "input", []int64{1, 3},  // 1 sample, 3 features
                "output", []int64{1, 1}, // 1 prediction
        )
        if err != nil {
                fmt.Fprintf(os.Stderr, "Failed to load model: %v\\n", err)
                os.Exit(1)
        }
        defer model.Destroy()

        // Run inference — single sample [customer_ltv=1200, region=1, segment=0]
        input := []float32{1200.0, 1.0, 0.0}
        output, err := model.Predict(input)
        if err != nil {
                fmt.Fprintf(os.Stderr, "Inference failed: %v\\n", err)
                os.Exit(1)
        }

        fmt.Printf("Input:  %v\\n", input)
        fmt.Printf("Output: predicted revenue = \xa3%.2f\\n", output[0])
        fmt.Println("Model: linear_regression.onnx (ONNX format, language-agnostic)")
}

// Compile: go build -o infer_onnx
// Model exported from Python: python -c "import skl2onnx; skl2onnx.to_onnx(model, 'linear_regression.onnx')"
// Same .onnx model runs in Python, Go, Rust, Java, C++ — universal format.`,highlight:[9,10,14,15,16,17,18,19,26,27,28,29,30,33,34,35]}]})}),(0,a.jsx)(n.iv,{title:"MLflow — experiment tracking + model registry (ADR-020)",description:"Every training run logs params, metrics, artifacts. Every model gets a version + stage. Rollback is a stage transition.",icon:(0,a.jsx)(b.A,{className:"h-5 w-5"}),children:(0,a.jsx)(c.N,{language:"python",filename:"mlflow_lifecycle.py",code:`# MLflow lifecycle — the 4 commands that govern ML

# 1. TRACK — log every training run
with mlflow.start_run(run_name="lr_revenue_v2"):
    mlflow.log_param("model_type", "XGBoost")
    mlflow.log_param("n_estimators", 100)
    mlflow.log_metric("rmse", 12.34)
    mlflow.log_metric("r2", 0.95)
    mlflow.sklearn.log_model(model, "model")

# 2. REGISTER — promote a run to the model registry
client = mlflow.tracking.MlflowClient()
client.create_registered_model("revenue_predictor")
client.create_model_version(
    name="revenue_predictor",
    source=f"runs:/{run_id}/model",
    tags={"framework": "sklearn", "dataset": "fct_orders_v3"},
)

# 3. PROMOTE — move versions through stages
client.transition_model_version_stage(
    name="revenue_predictor",
    version=2,
    stage="Staging",      # None → Staging → Production → Archived
)

# 4. SERVE — load production model for inference
import mlflow.pyfunc
model = mlflow.pyfunc.load_model(
    model_uri="models:/revenue_predictor/Production"
)
predictions = model.predict(new_data)`,highlight:[3,4,5,6,7,8,9,12,13,14,15,20,21,22,23,27,28,29,31,32]})}),(0,a.jsx)(n.iv,{title:"My deeper thought: the lakehouse IS the ML platform",description:"Data platforms and ML platforms are converging. The lakehouse (Bronze→Silver→Gold + Arrow + Iceberg) IS the ML infrastructure — features are Gold tables, training reads from them, serving writes back to them.",icon:(0,a.jsx)(k.A,{className:"h-5 w-5"}),badge:"Insight",children:(0,a.jsxs)("div",{className:"space-y-3 text-sm text-muted-foreground leading-relaxed",children:[(0,a.jsx)("p",{children:"Five years ago, you needed separate infrastructure for data engineering (Spark + S3 + Hive) and ML (TensorFlow + GPU clusters + model servers). Two platforms, two teams, two governance models, two pipelines. Features were copy-pasted from the data warehouse to the ML feature store — a fragile, drift-prone process."}),(0,a.jsxs)("p",{children:[(0,a.jsx)("strong",{className:"text-foreground/80",children:"The lakehouse convergence eliminates this split."})," Features are Gold tables in Iceberg (ADR-013). Training reads them via DuckDB (ADR-014) or Polars (ADR-018) — same Arrow format, zero-copy. Serving writes predictions back to a new Gold table. The feature store IS the Gold layer; the model registry IS MLflow; the training pipeline IS dbt + Spark. One platform, one governance, one format."]}),(0,a.jsx)("p",{children:"The ML Platform page you're reading is the bridge. It doesn't introduce new infrastructure — it documents how the existing platform's Gold tables, Arrow format, CI/CD pipeline, and governance controls serve the ML lifecycle. The ML platform doesn't need a separate team; it needs the data engineering team to understand the ML lifecycle and serve it."}),(0,a.jsxs)("p",{children:[(0,a.jsx)("strong",{className:"text-foreground/80",children:"The Pyodide demo on this page is the proof."})," The linear regression trains on the same Bronze→Silver→Gold pattern that powers BI dashboards. The gradient descent loop is the same pattern that powers the Thompson sampling bandit (ADR-019). The model registry is the same versioning pattern that powers dbt slim CI (ADR-006). One platform, many uses."]})]})}),(0,a.jsx)(n.iv,{title:"Free tier matrix — ML without a credit card",description:"Most of the ML stack has a serious free tier. Start here.",icon:(0,a.jsx)(j.A,{className:"h-5 w-5"}),contentClassName:"p-0",children:(0,a.jsx)("div",{className:"overflow-x-auto",children:(0,a.jsxs)("table",{className:"w-full text-sm",children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{className:"border-b border-border/60 bg-muted/40",children:[(0,a.jsx)("th",{className:"text-left px-3 py-2 text-[10px] uppercase tracking-wider text-muted-foreground",children:"Service"}),(0,a.jsx)("th",{className:"text-left px-3 py-2 text-[10px] uppercase tracking-wider text-muted-foreground",children:"Free tier"}),(0,a.jsx)("th",{className:"text-left px-3 py-2 text-[10px] uppercase tracking-wider text-muted-foreground",children:"Link"})]})}),(0,a.jsx)("tbody",{children:N.map(e=>(0,a.jsxs)("tr",{className:"border-b border-border/40 last:border-0 hover:bg-muted/20",children:[(0,a.jsx)("td",{className:"px-3 py-2 text-xs font-semibold",children:e.service}),(0,a.jsx)("td",{className:"px-3 py-2 text-[11px] text-emerald-600 dark:text-emerald-400",children:e.free}),(0,a.jsx)("td",{className:"px-3 py-2 text-[11px] font-mono text-muted-foreground",children:e.link})]},e.service))})]})})}),(0,a.jsxs)(g.S,{pageTitle:"Machine Learning Platform",children:[(0,a.jsx)(g.P,{title:"Machine Learning Platform IS part of a larger system — no page stands alone",connectedTo:"ADR-001 (platform architecture)",children:(0,a.jsx)("p",{children:"This page about Machine Learning Platform is not an isolated reference — it's a node in a graph. The platform's thesis is that the same math appears across genomics, fintech, maritime, and audio. Machine Learning Platform connects to the elegant-code cards via shared equations, and to the living-equation pages via live demos. The reader who arrives here looking for facts leaves with a map of where Machine Learning Platform sits in the computational-science landscape."})}),(0,a.jsx)(g.P,{title:"The technology will change; the math won't",connectedTo:"ADR-055 (cross-disciplinary scope)",children:(0,a.jsx)("p",{children:"In a decade, the specific tools on this page (Machine Learning Platform) may be replaced. But the underlying mathematics — the equations, the distributions, the optimisation rules — will be the same. SVD was invented in 1873 and still runs on NumPy today. Attention was described in 2017 and will run on whatever replaces PyTorch. The platform invests in the MATH, not the tools, because the math is the part that survives technology turnover."})}),(0,a.jsx)(g.P,{title:"The fold pattern respects the reader's attention",connectedTo:"ADR-050 (fold-section architecture)",children:(0,a.jsx)("p",{children:"This page has fold sections (collapsed by default) that reveal deeper content on demand — equation family comparisons, LaTeX derivations, production patterns, expected outputs, and citations. The basic content is visible immediately; the deeper phases are there when the reader is ready. Progressive disclosure isn't just UX — it's epistemological. A reader who wants the summary gets it; a reader who wants the derivation clicks to expand. Both are served by the same page."})}),(0,a.jsx)(g.P,{title:"The output IS the proof — not just the equation",connectedTo:"ADR-034 (ESM-2 + AlphaFold2 adoption)",children:(0,a.jsx)("p",{children:"Where this page has interactive demos (Pyodide + sliders + charts), the visual output IS the argument. Seeing a chart update as you drag a slider communicates the math in a way no formula can. The brain's pattern-recognition system processes the visual output faster than the verbal/analytical pathway. That's why the platform pairs every equation with a live demo — the output plays to a different level of the brain than the prose."})}),(0,a.jsx)(g.P,{title:"In a decade, this page will evolve — and that's the point",connectedTo:"ADR-022 (pgvector for variant embeddings)",children:(0,a.jsx)("p",{children:"The datasets, libraries, and tools on this page will be updated as technology evolves. The 1000-Genomes Project will become the 10M-Genomes Project. NumPy may be replaced by a WebGPU-native array library. PyTorch may give way to a successor. But the math — SVD, Attention, Poisson, FFT, Bayes, Kalman, GBM — will be the same. The platform is designed for this evolution: the equations are the anchor, the tools are the amplifier, and the fold sections let us update the tools without rewriting the page."})})]}),(0,a.jsx)(l.R,{pageId:"ml-platform"}),(0,a.jsx)(d.B,{pageId:"ml-platform"}),(0,a.jsx)(o.T,{relatedPages:[{id:"connections",reason:"Trace this topic's connections across the platform's math graph"},{id:"knowledge",reason:"Continue to knowledge — see also from this page"},{id:"polars",reason:"Continue to polars — see also from this page"}]}),(0,a.jsxs)("div",{className:"flex flex-wrap gap-2",children:[(0,a.jsx)(i(),{href:(0,h.ZJ)("knowledge"),className:"text-sm text-primary hover:underline",children:"→ See ADR-020 (MLflow) + ADR-019 (bandit as recommendation engine)"}),(0,a.jsx)("span",{className:"text-muted-foreground",children:"\xb7"}),(0,a.jsx)(i(),{href:(0,h.ZJ)("polars"),className:"text-sm text-primary hover:underline",children:"→ Polars vs DuckDB vs Pandas (feature engineering tools)"}),(0,a.jsx)("span",{className:"text-muted-foreground",children:"\xb7"}),(0,a.jsx)(i(),{href:(0,h.ZJ)("databricks"),className:"text-sm text-primary hover:underline",children:"→ Databricks (Feature Store + MLlib native)"})]})]})}},60508:(e,t,r)=>{"use strict";r.d(t,{R:()=>v});var a=r(95155),s=r(12115),i=r(45160),n=r(89239),o=r(66349),l=r(85404),d=r(58381),c=r(79275),m=r(48368),p=r(22164),h=r(86901),u=r(89123),g=r(21628),f=r(98500),x=r.n(f),y=r(85757);function v({pageId:e}){let t=(0,c.C6)(e);return 0===t.length?null:(0,a.jsxs)(d.iv,{title:"Recent research (2023-2025)",description:"Modern papers that extend the math, code, and tools on this page.",icon:(0,a.jsx)(m.A,{className:"h-5 w-5"}),badge:`${t.length} paper${1===t.length?"":"s"}`,badgeVariant:"outline",contentClassName:"space-y-4",children:[t.map((e,t)=>(0,a.jsx)(w,{entry:e},t)),(0,a.jsxs)("p",{className:"text-[11px] text-muted-foreground italic",children:[t.length," paper",1===t.length?"":"s"," mapped to this page. Each shows the key algorithm + expected output (rendered as charts when the code produces JSON). Run the code in-browser via Pyodide."]})]})}function w({entry:e}){let[t,r]=(0,s.useState)(!1),[d,c]=(0,s.useState)(null);return(0,a.jsxs)("div",{className:"rounded-lg border border-border/60 p-4 space-y-3 hover:border-primary/30 transition-colors",children:[(0,a.jsxs)("div",{className:"space-y-1",children:[(0,a.jsxs)("div",{className:"flex items-start justify-between gap-3",children:[(0,a.jsx)("h4",{className:"text-sm font-semibold leading-tight flex-1",children:e.paperTitle}),(0,a.jsx)(i.E,{variant:"outline",className:"text-[10px] shrink-0",children:e.venue})]}),(0,a.jsxs)("p",{className:"text-[11px] text-muted-foreground",children:[e.authors," \xb7 ",e.year]}),e.arxivId&&(0,a.jsxs)("a",{href:`https://arxiv.org/abs/${e.arxivId}`,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-1 text-[11px] text-primary hover:underline",children:[(0,a.jsx)(p.A,{className:"h-3 w-3"}),"arXiv:",e.arxivId]}),e.doi&&!e.arxivId&&(0,a.jsxs)("a",{href:`https://doi.org/${e.doi}`,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-1 text-[11px] text-primary hover:underline",children:[(0,a.jsx)(p.A,{className:"h-3 w-3"}),"DOI:",e.doi]})]}),(0,a.jsx)("p",{className:"text-[12px] text-muted-foreground leading-relaxed",children:e.abstract}),(0,a.jsxs)(n.$,{variant:"outline",size:"sm",onClick:()=>r(!t),className:"h-7 text-[11px] gap-1.5",children:[(0,a.jsx)(h.A,{className:"h-3 w-3"}),t?"Hide expected code":"Show expected code + visualization"]}),t&&(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsx)(o.l,{code:e.expectedCode,buttonLabel:"Run in browser",onOutput:e=>{try{let t=e.indexOf("{"),r=e.lastIndexOf("}");if(t>=0&&r>t){let a=e.substring(t,r+1);c(JSON.parse(a))}}catch{}},hideTextOutput:!!d,compact:!0}),d?(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsxs)("div",{className:"flex items-center gap-1.5",children:[(0,a.jsx)(u.A,{className:"h-3.5 w-3.5 text-primary"}),(0,a.jsx)("p",{className:"text-[10px] uppercase tracking-wider text-muted-foreground",children:"Visualization (rendered from code output)"})]}),(0,a.jsx)(l.D,{data:d,accent:"oklch(0.65 0.18 250)",sourceCode:e.expectedCode})]}):(0,a.jsxs)("div",{className:"rounded-md border border-primary/20 bg-primary/5 p-2.5",children:[(0,a.jsx)("p",{className:"text-[10px] uppercase tracking-wider text-muted-foreground mb-1",children:"Expected output"}),(0,a.jsx)("pre",{className:"text-[11px] font-mono whitespace-pre-wrap leading-relaxed",children:e.expectedOutput})]}),(0,a.jsxs)("div",{className:"rounded-md border border-emerald-500/30 bg-emerald-500/5 p-2.5",children:[(0,a.jsx)("p",{className:"text-[10px] uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-1",children:"Key insight"}),(0,a.jsx)("p",{className:"text-[12px] text-foreground/80 leading-relaxed",children:e.keyInsight})]})]}),(0,a.jsxs)(x(),{href:(0,y.ZJ)("analytics-outputs"),className:"inline-flex items-center gap-1 text-[11px] text-primary hover:underline",children:["See this math visualized on Analytics Outputs ",(0,a.jsx)(g.A,{className:"h-3 w-3"})]})]})}},65576:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});let a=(0,r(6404).A)("cpu",[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]])},83036:(e,t,r)=>{"use strict";r.d(t,{P:()=>d,S:()=>c});var a=r(95155),s=r(98500),i=r.n(s),n=r(44071),o=r(97810),l=r(85757);function d({title:e,connectedTo:t,researchHref:r,children:s}){return(0,a.jsxs)("div",{className:"rounded-md border border-primary/30 bg-primary/5 p-4 space-y-2",children:[(0,a.jsxs)("div",{className:"flex items-start gap-2",children:[(0,a.jsx)(n.A,{className:"h-4 w-4 text-primary mt-0.5 shrink-0"}),(0,a.jsxs)("div",{className:"flex-1 min-w-0",children:[(0,a.jsx)("p",{className:"text-sm font-semibold text-foreground/90 leading-tight",children:e}),t&&(0,a.jsxs)("div",{className:"flex items-center gap-1.5 mt-1",children:[(0,a.jsx)(o.A,{className:"h-3 w-3 text-muted-foreground"}),(0,a.jsxs)(i(),{href:r??(0,l.ZJ)("research"),className:"text-[10px] text-muted-foreground hover:text-primary hover:underline",children:["Connected to: ",t," →"]})]})]})]}),(0,a.jsx)("div",{className:"text-xs text-muted-foreground leading-relaxed space-y-2 pl-6",children:s})]})}function c({pageTitle:e,children:t}){return(0,a.jsxs)("div",{className:"space-y-4",children:[(0,a.jsxs)("div",{className:"flex items-center gap-2 border-b border-border/60 pb-2",children:[(0,a.jsx)(n.A,{className:"h-5 w-5 text-primary"}),(0,a.jsxs)("h2",{className:"text-base font-bold text-foreground/90",children:["My deeper thoughts — ",e]})]}),(0,a.jsx)("p",{className:"text-xs text-muted-foreground italic leading-relaxed",children:"These are not summaries. They are arguments — the kind of connections a reader with serious grey matter would make after living with the material for years. Each thought connects to the platform's research section (ADRs, papers, decision records) so it's traceable, not just opinionated."}),(0,a.jsx)("div",{className:"space-y-3",children:t})]})}},86901:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});let a=(0,r(6404).A)("sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]])},90718:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});let a=(0,r(6404).A)("brain",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]])}},e=>{e.O(0,[6919,8500,9430,3493,9760,7591,6012,9237,4843,8656,9620,6722,5404,9275,2194,5079,8441,3794,7358],()=>e(e.s=39166)),_N_E=e.O()}]);