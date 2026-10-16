(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8077],{127:(e,t,a)=>{"use strict";a.d(t,{A:()=>r});let r=(0,a(6404).A)("target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]])},7915:(e,t,a)=>{"use strict";a.d(t,{A:()=>r});let r=(0,a(6404).A)("eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]])},9199:(e,t,a)=>{"use strict";a.d(t,{A:()=>r});let r=(0,a(6404).A)("rotate-ccw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]])},11951:(e,t,a)=>{"use strict";a.d(t,{A:()=>r});let r=(0,a(6404).A)("award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]])},14101:(e,t,a)=>{"use strict";a.d(t,{A:()=>r});let r=(0,a(6404).A)("git-compare-arrows",[["circle",{cx:"5",cy:"6",r:"3",key:"1qnov2"}],["path",{d:"M12 6h5a2 2 0 0 1 2 2v7",key:"1yj91y"}],["path",{d:"m15 9-3-3 3-3",key:"1lwv8l"}],["circle",{cx:"19",cy:"18",r:"3",key:"1qljk2"}],["path",{d:"M12 18H7a2 2 0 0 1-2-2V9",key:"16sdep"}],["path",{d:"m9 15 3 3-3 3",key:"1m3kbl"}]])},24922:(e,t,a)=>{Promise.resolve().then(a.bind(a,26059))},26059:(e,t,a)=>{"use strict";a.d(t,{MLPlaygroundPage:()=>q});var r=a(95155),s=a(12115),i=a(98500),n=a.n(i),l=a(58381),o=a(66349),d=a(85404),c=a(27774),m=a(83036),p=a(31045),h=a(85757),u=a(45160),g=a(89239);let x={python:`# Python version is generated dynamically by buildTrainCode()
# in ml-playground.tsx based on the reader's hyperparameter choices.
# It's the primary version — runs in-browser via Pyodide + scikit-learn.
# See the "Train BDT" button output above for the actual Python code.
# Key libraries: numpy (arrays), scikit-learn (GradientBoostingClassifier),
# scipy.stats (evaluation), json (output for AnalysisChart).`,r:`# R — gradient boosting via gbm + caret packages
# R is the lingua franca of statistics. The gbm package (Ridgeway 2007)
# is the canonical BDT implementation; caret provides a uniform interface.

library(gbm)
library(caret)
library(pROC)
library(jsonlite)

set.seed(42)

# Generate synthetic data (LHC jet tagging — quark vs gluon)
n_sig <- 3000; n_bg <- 3000
X_sig <- matrix(rnorm(n_sig * 8, mean = 0), nrow = n_sig) +
         matrix(rep(c(0.8, 0.4, -0.2, 0.6, 0.3, -0.1, 0.5, -0.3), n_sig),
                nrow = n_sig, byrow = TRUE)
X_bg  <- matrix(rnorm(n_bg * 8, mean = 0),  nrow = n_bg)  +
         matrix(rep(c(-0.5, -0.3, 0.4, -0.4, -0.2, 0.2, -0.3, 0.2), n_bg),
                nrow = n_bg, byrow = TRUE)
X <- rbind(X_sig, X_bg)
y <- c(rep(1, n_sig), rep(0, n_bg))

# Train/test split (70/30)
idx <- sample(seq_along(y))
n_train <- as.integer(0.7 * length(y))
train_idx <- idx[1:n_train]
test_idx  <- idx[(n_train + 1):length(y)]

# Train BDT via gbm
# Hyperparameters (matching the Python version):
#   n.trees = 100, interaction.depth = 3, shrinkage = 0.1
t0 <- Sys.time()
model <- gbm(y ~ ., data = data.frame(X[train_idx,], y = y[train_idx]),
             distribution = "bernoulli",
             n.trees = 100, interaction.depth = 3, shrinkage = 0.1,
             bag.fraction = 0.8, verbose = FALSE)
train_time <- as.numeric(difftime(Sys.time(), t0, units = "secs"))

# Predict + ROC
y_score <- predict(model, newdata = data.frame(X[test_idx,]),
                   n.trees = 100, type = "response")
roc_obj <- roc(y[test_idx], y_score, quiet = TRUE)
auc_val <- as.numeric(auc(roc_obj))

# Confusion matrix at threshold = 0.5
y_pred <- as.integer(y_score > 0.5)
cm <- table(Actual = y[test_idx], Predicted = y_pred)
TP <- cm["1", "1"]; TN <- cm["0", "0"]
FP <- cm["0", "1"]; FN <- cm["1", "0"]
precision <- TP / (TP + FP)
recall    <- TP / (TP + FN)
f1        <- 2 * precision * recall / (precision + recall)

cat(sprintf("AUC = %.4f\\n", auc_val))
cat(sprintf("Precision = %.4f, Recall = %.4f, F1 = %.4f\\n",
           precision, recall, f1))
cat(sprintf("Training time: %.2fs\\n", train_time))

# Feature importance
imp <- summary.gbm(model, plotit = FALSE)
print(imp[order(-imp$rel.inf), ])

# Key insight: gbm's interaction.depth parameter is the same as scikit-learn's
# max_depth. R statisticians prefer caret::train() for hyperparameter tuning
# via cross-validation; Python users prefer GridSearchCV. Same math, different
# ergonomics. R's formula interface (y ~ .) is more concise than Python's
# explicit X/y split — a 30-year tradition from S/R.`,scala:`// Scala — Spark MLlib GBTClassifier for distributed ML
// Scala + Spark is the production stack at scale: LinkedIn, Netflix, Uber.
// The same BDT runs on a laptop (Pyodide) or a 1000-node cluster (Spark).

import org.apache.spark.ml.Pipeline
import org.apache.spark.ml.classification.GBTClassifier
import org.apache.spark.ml.evaluation.{BinaryClassificationEvaluator, MulticlassClassificationEvaluator}
import org.apache.spark.ml.feature.{VectorAssembler, StringIndexer}
import org.apache.spark.sql.SparkSession
import org.apache.spark.sql.functions._

val spark = SparkSession.builder().appName("ML Playground BDT").master("local[*]").getOrCreate()
import spark.implicits._

// Generate synthetic data (LHC jet tagging — quark vs gluon)
val nSig = 3000; val nBg = 3000
val sigDF = spark.range(nSig).select(
  randn() + 0.8 as "f0", randn() + 0.4 as "f1", randn() - 0.2 as "f2",
  randn() + 0.6 as "f3", randn() + 0.3 as "f4", randn() - 0.1 as "f5",
  randn() + 0.5 as "f6", randn() - 0.3 as "f7", lit(1.0) as "label"
)
val bgDF = spark.range(nBg).select(
  randn() - 0.5 as "f0", randn() - 0.3 as "f1", randn() + 0.4 as "f2",
  randn() - 0.4 as "f3", randn() - 0.2 as "f4", randn() + 0.2 as "f5",
  randn() - 0.3 as "f6", randn() + 0.2 as "f7", lit(0.0) as "label"
)
val data = sigDF.union(bgDF)

// Assemble features into a single vector column (Spark MLlib convention)
val assembler = new VectorAssembler()
  .setInputCols(Array("f0","f1","f2","f3","f4","f5","f6","f7"))
  .setOutputCol("features")

val labelIndexer = new StringIndexer().setInputCol("label").setOutputCol("indexedLabel")

// Train GBTClassifier — Spark's gradient-boosted trees
// Hyperparameters matching the Python version:
//   maxIter = 100 (n_estimators), maxDepth = 3, stepSize = 0.1 (learning_rate)
val gbt = new GBTClassifier()
  .setLabelCol("indexedLabel")
  .setFeaturesCol("features")
  .setMaxIter(100)
  .setMaxDepth(3)
  .setStepSize(0.1)
  .setSubsamplingRate(0.8)

val pipeline = new Pipeline().setStages(Array(assembler, labelIndexer, gbt))

// Train/test split (70/30)
val Array(train, test) = data.randomSplit(Array(0.7, 0.3), seed = 42L)

val t0 = System.nanoTime()
val model = pipeline.fit(train)
val trainTime = (System.nanoTime() - t0) / 1e9

// Predict + evaluate
val predictions = model.transform(test)
val binaryEval = new BinaryClassificationEvaluator()
  .setLabelCol("indexedLabel")
  .setRawPredictionCol("rawPrediction")
val auc = binaryEval.evaluate(predictions)

val multiEval = new MulticlassClassificationEvaluator()
  .setLabelCol("indexedLabel")
  .setPredictionCol("prediction")
  .setMetricName("f1")
val f1 = multiEval.evaluate(predictions)

println(f"AUC = $auc%.4f")
println(f"F1  = $f1%.4f")
println(f"Training time: $trainTime%.2fs")

// Feature importance
val gbtModel = model.stages(2).asInstanceOf[org.apache.spark.ml.classification.GBTClassificationModel]
gbtModel.featureImportances.toArray.zipWithIndex
  .sortBy(-_._1).foreach { case (imp, i) => println(f"feature_$i%d: $imp%.4f") }

// Key insight: Spark's GBTClassifier is mathematically identical to
// scikit-learn's GradientBoostingClassifier. The difference is distributed
// vs single-node. Same hyperparameters (maxIter = n_estimators, maxDepth =
// max_depth, stepSize = learning_rate). Spark adds subsamplingRate (= 0.8,
// matching Python's subsample=0.8). The practicing DS who knows Pyodide
// also knows Spark — only the syntax changes, not the math.`,sql:`-- SQL — BigQuery ML for in-warehouse ML
-- BigQuery ML trains models directly inside the data warehouse — no data
-- movement, no separate ML server. The DBA's preferred way to do ML.

-- Step 1: Create the training table (synthetic LHC jet tagging data)
-- In production, this would be a real table partitioned by event_date
CREATE OR REPLACE TABLE ml_playground.lhc_jets (
  tau21 FLOAT64, tau32 FLOAT64, jet_mass FLOAT64, pt FLOAT64,
  delta_r_12 FLOAT64, delta_r_23 FLOAT64, ecf FLOAT64, b_tag FLOAT64,
  label INT64  -- 1 = quark jet (signal), 0 = gluon jet (background)
) AS
SELECT
  randn() + 0.8 AS tau21, randn() + 0.4 AS tau32,
  randn() - 0.2 AS jet_mass, randn() + 0.6 AS pt,
  randn() + 0.3 AS delta_r_12, randn() - 0.1 AS delta_r_23,
  randn() + 0.5 AS ecf, randn() - 0.3 AS b_tag,
  1 AS label
FROM UNNEST(GENERATE_ARRAY(1, 3000))
UNION ALL
SELECT
  randn() - 0.5 AS tau21, randn() - 0.3 AS tau32,
  randn() + 0.4 AS jet_mass, randn() - 0.4 AS pt,
  randn() - 0.2 AS delta_r_12, randn() + 0.2 AS delta_r_23,
  randn() - 0.3 AS ecf, randn() + 0.2 AS b_tag,
  0 AS label
FROM UNNEST(GENERATE_ARRAY(1, 3000));

-- Step 2: Train a boosted-tree classifier
-- Hyperparameters matching the Python version:
--   num_boost_round = 100 (n_estimators), max_depth = 3, learn_rate = 0.1
CREATE OR REPLACE MODEL ml_playground.bdt_lhc_jets
OPTIONS(
  model_type = 'BOOSTED_TREE_CLASSIFIER',
  num_boost_round = 100,
  max_depth = 3,
  learn_rate = 0.1,
  subsample = 0.8,             -- matches Python subsample=0.8
  input_label_cols = ['label'],
  data_split_method = 'AUTO_SPLIT',
  data_split_eval_fraction = 0.3,  -- 30% test set
  data_split_method = 'AUTO_SPLIT'
) AS
SELECT * FROM ml_playground.lhc_jets;

-- Step 3: Evaluate the model — ROC AUC + confusion matrix
SELECT
  *
FROM
  ML.EVALUATE(MODEL ml_playground.bdt_lhc_jets,
              (SELECT * FROM ml_playground.lhc_jets));

-- Step 4: Predict on the test set (threshold = 0.5 by default)
SELECT
  label AS actual,
  predicted_label AS predicted,
  predicted_label_probs[OFFSET(1)] AS prob_signal
FROM
  ML.PREDICT(MODEL ml_playground.bdt_lhc_jets,
             (SELECT * FROM ml_playground.lhc_jets))
LIMIT 100;

-- Step 5: Feature importance (BigQuery ML exposes this automatically)
SELECT
  *
FROM
  ML.FEATURE_IMPORTANCE(MODEL ml_playground.bdt_lhc_jets)
ORDER BY importance_weight DESC;

-- Key insight: BigQuery ML's BOOSTED_TREE_CLASSIFIER is the same algorithm
-- as scikit-learn's GradientBoostingClassifier — same hyperparameters, same
-- math, same output. The difference is WHERE it runs: scikit-learn on a
-- laptop, BigQuery on Google's warehouse (with 1000s of CPUs in parallel).
-- AUC, ROC, confusion matrix — all identical. The SQL is verbose but the
-- practicing DS who can read scikit-learn can read this.`,julia:`# Julia — MLJ.jl for machine learning
# Julia is the language of numerical computing — MATLAB speed with Python syntax.
# MLJ.jl (Machine Learning in Julia) is the unified ML ecosystem.

using MLJ
using MLJBase
using StableRNGs
using Statistics
using Printf

# Generate synthetic data (LHC jet tagging — quark vs gluon)
rng = StableRNG(42)
n_sig = 3000; n_bg = 3000
n_features = 8

X_sig = randn(rng, n_sig, n_features) .+ [0.8 0.4 -0.2 0.6 0.3 -0.1 0.5 -0.3]
X_bg  = randn(rng, n_bg,  n_features) .+ [-0.5 -0.3 0.4 -0.4 -0.2 0.2 -0.3 0.2]
X = vcat(X_sig, X_bg)
y = vcat(ones(n_sig), zeros(n_bg))

# Train/test split (70/30)
n = length(y)
idx = randperm(rng, n)
n_train = floor(Int, 0.7n)
train_idx = idx[1:n_train]
test_idx  = idx[n_train+1:end]

# Load the GradientBoostingClassifier from MLJ (scikit-learn interface)
# Hyperparameters matching the Python version:
#   n_estimators = 100, max_depth = 3, learning_rate = 0.1
BDT = @load GradientBoostingClassifier pkg=ScikitLearn verbosity=0
model = BDT(n_estimators = 100,
            max_depth = 3,
            learning_rate = 0.1,
            subsample = 0.8,
            random_state = 42)

# Wrap in a machine (MLJ's term for a fitted model + data)
mach = machine(model, X, y)

# Train + time
t0 = time()
fit!(mach, rows = train_idx, verbosity = 0)
train_time = time() - t0

# Predict + ROC
y_score = MLJ.predict(mach, X[test_idx, :])  # returns probability of class 1
y_pred  = mode.(y_score)  # hard prediction at threshold 0.5

# AUC via trapz integration of ROC curve
fpr, tpr, _ = roc(y[test_idx], pdf.(y_score, 1))
auc_val = trapz(fpr, tpr)

# Confusion matrix
TP = sum((y[test_idx] .== 1) .& (y_pred .== 1))
TN = sum((y[test_idx] .== 0) .& (y_pred .== 0))
FP = sum((y[test_idx] .== 0) .& (y_pred .== 1))
FN = sum((y[test_idx] .== 1) .& (y_pred .== 0))
precision = TP / (TP + FP)
recall    = TP / (TP + FN)
f1        = 2 * precision * recall / (precision + recall)

@printf("AUC = %.4f\\n", auc_val)
@printf("Precision = %.4f, Recall = %.4f, F1 = %.4f\\n", precision, recall, f1)
@printf("Training time: %.2fs\\n", train_time)

# Feature importance (via permutation importance — Julia idiom)
fi = feature_importance(mach, X[test_idx, :], y[test_idx])
println("Feature importance:")
for (name, imp) in sort(fi, by = x -> -x[2])
    println("  $name: $(round(imp, digits=4))")
end

# Key insight: Julia's MLJ.jl is a unified interface that wraps scikit-learn
# (via PyCall.jl), XGBoost.jl, and pure-Julia implementations under one API.
# The @load macro handles package installation automatically. Julia's
# multiple dispatch means the SAME fit!() call works for any model —
# unlike Python where each library has its own .fit() signature. Speed:
# Julia compiles to native code, so the second call to fit!() is ~10x
# faster than the first (JIT warmup). Python+Pyodide can't match this.`};var f=a(127),y=a(53961),b=a(67514),v=a(33024),_=a(69048),j=a(65576),N=a(20232),T=a(31885),A=a(86901),k=a(90718),w=a(11951),C=a(97309),S=a(48155),M=a(14101),L=a(9199),P=a(21628),F=a(7915),E=a(52475),R=a(55243),D=a(71876);let B=[{id:"lhc",name:"LHC Jet Tagging (quark vs gluon)",description:"8 jet substructure features. Signal: quark jets. Background: gluon jets. AUC target: >0.82.",nFeatures:8,featureNames:["τ21","τ32","Jet mass","pT","ΔR(12)","ΔR(23)","ECF","b-tag"],accent:"oklch(0.65 0.18 250)"},{id:"genomics",name:"Genomics Variant Calling (pathogenic vs benign)",description:"10 variant annotation features. Signal: pathogenic. Background: benign. AUC target: >0.90.",nFeatures:10,featureNames:["Conservation","MAF","SIFT","PolyPhen","CADD","GERP","PhyloP","PhastCons","REVEL","MutTaster"],accent:"oklch(0.65 0.18 140)"},{id:"finance",name:"Finance Fraud Detection (fraud vs legitimate)",description:"12 transaction features. Signal: fraud. Background: legitimate. AUC target: >0.85. 1:1000 class imbalance in production.",nFeatures:12,featureNames:["Amount","Time","Merchant_risk","Card_freq","Distance","Velocity","Device_new","IP_mismatch","Tx_count_1h","Failed_attempts","Avg_dev","Behavior"],accent:"oklch(0.65 0.18 30)"}],O=[{id:"conservative",label:"Conservative",description:"50 trees, depth 2, lr 0.05. Fast, low-overfit baseline.",icon:function(e){return(0,r.jsx)(v.A,{className:e.className})},values:{nEstimators:50,maxDepth:2,learningRate:.05},color:"oklch(0.65 0.15 220)"},{id:"sweet-spot",label:"Sweet Spot",description:"100 trees, depth 3, lr 0.1. Standard BDT config (recommended).",icon:f.A,values:{nEstimators:100,maxDepth:3,learningRate:.1},color:"oklch(0.65 0.18 145)"},{id:"aggressive",label:"Aggressive",description:"300 trees, depth 5, lr 0.05. Slow but high AUC.",icon:y.A,values:{nEstimators:300,maxDepth:5,learningRate:.05},color:"oklch(0.65 0.20 30)"},{id:"overfit",label:"Overfit Demo",description:"500 trees, depth 10, lr 0.3. Train AUC ≈ 1.0, test AUC collapses.",icon:b.A,values:{nEstimators:500,maxDepth:10,learningRate:.3},color:"oklch(0.65 0.20 0)"}];function U({latex:e}){let t;try{t=D.default.renderToString(e,{throwOnError:!1,displayMode:!0})}catch{t=`<code class="font-mono text-xs">${e.replace(/</g,"&lt;")}</code>`}return(0,r.jsx)("div",{className:"text-sm overflow-x-auto py-1",dangerouslySetInnerHTML:{__html:t}})}function I({label:e,value:t,min:a,max:s,step:i,onChange:n,description:l}){return(0,r.jsxs)("div",{className:"space-y-1",children:[(0,r.jsxs)("div",{className:"flex items-center justify-between",children:[(0,r.jsx)("label",{className:"text-[11px] font-medium",children:e}),(0,r.jsx)("span",{className:"text-[11px] font-mono font-bold text-primary",children:t})]}),(0,r.jsx)("input",{type:"range",min:a,max:s,step:i,value:t,onChange:e=>n(parseFloat(e.target.value)),className:"w-full h-2 rounded-lg appearance-none cursor-pointer bg-muted accent-primary"}),(0,r.jsx)("p",{className:"text-[9px] text-muted-foreground",children:l})]})}let $="ml_playground_saved_runs";function H(){try{let e=localStorage.getItem($);return e?JSON.parse(e):[]}catch{return[]}}let G=[{id:"mathematics",label:"Mathematics of BDT",icon:_.A},{id:"controls",label:"Hyperparameter Controls",icon:j.A},{id:"train",label:"Train & Evaluate",icon:N.A},{id:"tradeoffs",label:"Tradeoff Hints",icon:T.A},{id:"why",label:"Why this matters",icon:A.A},{id:"thoughts",label:"My Deeper Thoughts",icon:k.A},{id:"journey",label:"Cross-Domain Journey",icon:w.A}],X=[{label:"Model type",value:"BDT (XGBoost-style)",hint:"GradientBoostingClassifier from scikit-learn. Runs in-browser via Pyodide + micropip.",deltaTone:"up"},{label:"Datasets",value:"3",hint:"LHC jets (8 features), genomics variants (10 features), finance fraud (12 features). Switch between them.",deltaTone:"up"},{label:"Hyperparameters",value:"4 adjustable + 4 presets",hint:"n_estimators, max_depth, learning_rate, feature selection. Plus 1-click presets: Conservative / Sweet / Aggressive / Overfit.",deltaTone:"up"},{label:"Output charts",value:"4 per run",hint:"ROC (train vs test), Feature importance, Confusion matrix, Loss curve (train vs test). All interactive (Recharts).",deltaTone:"up"}];function q(){let[e,t]=(0,s.useState)("lhc"),[a,i]=(0,s.useState)(100),[f,y]=(0,s.useState)(3),[b,v]=(0,s.useState)(.1),[D,q]=(0,s.useState)(Array(8).fill(!0)),[z,J]=(0,s.useState)(null),[V,Y]=(0,s.useState)(null),[Q,W]=(0,s.useState)(!1),[K,Z]=(0,s.useState)([]),[ee,et]=(0,s.useState)(!1),[ea,er]=(0,s.useState)("hide"),es=B.find(t=>t.id===e),ei=(0,s.useMemo)(()=>(function(e){let{dataset:t,nEstimators:a,maxDepth:r,learningRate:s,selectedFeatures:i}=e,n=B.find(e=>e.id===t),l=i.map((e,t)=>e?t:-1).filter(e=>e>=0),o=`[${l.join(", ")}]`,d=l.length,c=l.map(e=>n.featureNames[e]),m={lhc:`X_sig = np.random.randn(3000, 8) + np.array([0.8, 0.4, -0.2, 0.6, 0.3, -0.1, 0.5, -0.3])
X_bg = np.random.randn(3000, 8) + np.array([-0.5, -0.3, 0.4, -0.4, -0.2, 0.2, -0.3, 0.2])`,genomics:`X_sig = np.random.randn(3000, 10) + np.array([1.2, -0.8, 0.6, 0.9, -0.5, 0.7, -0.3, 0.4, 0.5, -0.6])
X_bg = np.random.randn(3000, 10) + np.array([-0.4, 0.3, -0.2, -0.3, 0.2, -0.3, 0.1, -0.2, -0.2, 0.2])`,finance:`X_sig = np.random.randn(3000, 12) + np.array([1.5, 0.8, -0.6, 1.2, 0.9, -0.4, 0.7, -0.3, 0.5, 0.8, -0.5, 0.6])
X_bg = np.random.randn(3000, 12) + np.array([-0.3, -0.2, 0.1, -0.2, -0.2, 0.1, -0.1, 0.1, -0.1, -0.2, 0.1, -0.1])`};return`# ML Playground — Interactive BDT Training
# Hyperparameters (reader-adjusted):
#   n_estimators = ${a}
#   max_depth = ${r}
#   learning_rate = ${s}
#   dataset = ${n.name}
#   features = ${d} of ${n.nFeatures} selected

import numpy as np, json, time
np.random.seed(42)

# Generate synthetic data
${m[t]}
X = np.vstack([X_sig, X_bg])
y = np.concatenate([np.ones(3000), np.zeros(3000)])

# Select features
X = X[:, ${o}]

# Train/test split (70/30)
idx = np.random.permutation(len(y))
n_train = int(0.7 * len(y))
X_train, X_test = X[idx[:n_train]], X[idx[n_train:]]
y_train, y_test = y[idx[:n_train]], y[idx[n_train:]]

# Train BDT
from sklearn.ensemble import GradientBoostingClassifier
from sklearn.metrics import roc_curve, auc, confusion_matrix

t0 = time.time()
model = GradientBoostingClassifier(
    n_estimators=${a},
    max_depth=${r},
    learning_rate=${s},
    random_state=42,
    subsample=0.8,
)
model.fit(X_train, y_train)
train_time = time.time() - t0

# Evaluate
y_score = model.predict_proba(X_test)[:, 1]
y_train_score = model.predict_proba(X_train)[:, 1]
fpr, tpr, _ = roc_curve(y_test, y_score)
fpr_tr, tpr_tr, _ = roc_curve(y_train, y_train_score)
auc_val = auc(fpr, tpr)
auc_tr = auc(fpr_tr, tpr_tr)
y_pred = model.predict(X_test)
cm = confusion_matrix(y_test, y_pred)
tn, fp, fn, tp = cm.ravel()
precision = tp / (tp + fp) if (tp + fp) > 0 else 0
recall = tp / (tp + fn) if (tp + fn) > 0 else 0
f1 = 2 * precision * recall / (precision + recall) if (precision + recall) > 0 else 0

# Loss curve (binomial deviance) — train and test
loss = model.train_score_.tolist()
# Approximate test loss using staged_predict_proba
test_loss = []
for s_pred in model.staged_predict_proba(X_test):
    # Binomial deviance: -mean(y*log(p) + (1-y)*log(1-p))
    p = np.clip(s_pred[:, 1], 1e-15, 1 - 1e-15)
    test_loss.append(float(-np.mean(y_test * np.log(p) + (1 - y_test) * np.log(1 - p))))

# Feature importance
imp = model.feature_importances_.tolist()
feat_names = ${JSON.stringify(c)}
imp_pairs = sorted(zip(feat_names, imp), key=lambda x: -x[1])

# ============================
# Chart 1: ROC curve (test + train)
# ============================
roc_chart = {
    "chart_type": "line",
    "title": "ROC Curve — Test vs Train (" + f"AUC={auc_val:.4f}" + ")",
    "x_label": "False positive rate",
    "y_label": "True positive rate",
    "series": [
        {"name": f"Test (AUC={auc_val:.4f})", "data": [{"x": float(f), "y": float(t)} for f, t in zip(fpr, tpr)]},
        {"name": f"Train (AUC={auc_tr:.4f})", "data": [{"x": float(f), "y": float(t)} for f, t in zip(fpr_tr, tpr_tr)], "dashed": True},
    ],
    "stats": [
        {"label": "Test AUC", "value": f"{auc_val:.4f}", "tone": "success" if auc_val > 0.85 else "warning"},
        {"label": "Train AUC", "value": f"{auc_tr:.4f}", "tone": "default"},
        {"label": "Overfit gap", "value": f"{auc_tr - auc_val:+.4f}", "tone": "danger" if (auc_tr - auc_val) > 0.05 else "default"},
        {"label": "Training time", "value": f"{train_time:.2f}s", "tone": "default"},
        {"label": "n_estimators", "value": str(${a}), "tone": "default"},
        {"label": "max_depth", "value": str(${r}), "tone": "default"},
        {"label": "learning_rate", "value": str(${s}), "tone": "default"},
    ],
    "reference_lines": [{"y": 0, "label": "Random (AUC=0.5)", "color": "#94a3b8"}, {"diagonal": True, "label": "", "color": "#94a3b8"}],
    "summary": f"BDT with ${a} trees, depth ${r}, lr ${s}. Test AUC={auc_val:.4f}, Train AUC={auc_tr:.4f}. The gap (Train-Test) is the OVERFITTING signal — gap>0.05 means the model is memorising noise. Compare the two curves: if they diverge at high TPR, you've overfit. Training took {train_time:.2f}s in your browser."
}

# ============================
# Chart 2: Feature importance (sorted bar)
# ============================
imp_chart = {
    "chart_type": "bar",
    "title": "Feature Importance — which features drive the BDT?",
    "x_label": "Feature",
    "y_label": "Importance (sum=1.0)",
    "series": [{"name": "Importance", "data": [{"x": n, "y": float(v)} for n, v in imp_pairs]}],
    "stats": [
        {"label": "Top feature", "value": imp_pairs[0][0], "tone": "success"},
        {"label": "Top importance", "value": f"{imp_pairs[0][1]:.3f}", "tone": "default"},
        {"label": "Top-3 cumulative", "value": f"{sum(v for _, v in imp_pairs[:3]):.2%}", "tone": "default"},
        {"label": "Features used", "value": str(${d}), "tone": "default"},
    ],
    "summary": f"The BDT's feature_importances_ attribute shows how much each feature contributed. Top-3 features carry {sum(v for _, v in imp_pairs[:3]):.0%} of total importance — the Pareto principle in ML. In production you'd drop the bottom 30% of features and retrain: simpler model, ~same AUC."
}

# ============================
# Chart 3: Confusion matrix (heatmap-style bar)
# ============================
cm_chart = {
    "chart_type": "bar",
    "title": "Confusion Matrix (test set, threshold=0.5)",
    "x_label": "Cell",
    "y_label": "Count",
    "series": [{"name": "Confusion", "data": [
        {"x": "TP (signal, predicted signal)", "y": int(tp)},
        {"x": "TN (bg, predicted bg)", "y": int(tn)},
        {"x": "FP (bg, predicted signal)", "y": int(fp)},
        {"x": "FN (signal, predicted bg)", "y": int(fn)},
    ]}],
    "stats": [
        {"label": "Precision", "value": f"{precision:.4f}", "tone": "success" if precision > 0.8 else "warning"},
        {"label": "Recall (TPR)", "value": f"{recall:.4f}", "tone": "success" if recall > 0.8 else "warning"},
        {"label": "F1 score", "value": f"{f1:.4f}", "tone": "default"},
        {"label": "Test size", "value": f"{len(y_test)}", "tone": "default"},
    ],
    "summary": f"At the default 0.5 threshold: TP={tp}, TN={tn}, FP={fp}, FN={fn}. Precision={precision:.2%} (of all predicted signal, how many were real). Recall={recall:.2%} (of all real signal, how many you caught). For LHC, recall is more important than precision (you don't want to lose Higgs events). For fraud, precision matters (false positives cost customer trust)."
}

# ============================
# Chart 4: Loss curve (train vs test)
# ============================
loss_chart = {
    "chart_type": "line",
    "title": "Loss Curve — binomial deviance per tree",
    "x_label": "Iteration (tree #)",
    "y_label": "Binomial deviance",
    "series": [
        {"name": "Train loss", "data": [{"x": i, "y": float(l)} for i, l in enumerate(loss)]},
        {"name": "Test loss", "data": [{"x": i, "y": float(l)} for i, l in enumerate(test_loss)], "dashed": True},
    ],
    "stats": [
        {"label": "Final train loss", "value": f"{loss[-1]:.4f}", "tone": "default"},
        {"label": "Final test loss", "value": f"{test_loss[-1]:.4f}", "tone": "default"},
        {"label": "Min test loss", "value": f"{min(test_loss):.4f} @ iter {test_loss.index(min(test_loss))}", "tone": "success"},
        {"label": "Overfitting?", "value": "Yes" if test_loss[-1] > min(test_loss) * 1.05 else "No", "tone": "danger" if test_loss[-1] > min(test_loss) * 1.05 else "success"},
    ],
    "summary": f"Train loss decreases monotonically (boosting always fits residuals). Test loss decreases THEN FLATLINES (or rises) — the inflection point is the optimal number of trees. Past that, you're adding trees that memorise noise. If min_test_loss << final_test_loss, you should use early stopping (or reduce n_estimators)."
}

# Emit ALL FOUR charts as a single JSON array — the page parses and shows each
print(json.dumps([
    roc_chart,
    imp_chart,
    cm_chart,
    loss_chart,
]))`})({dataset:e,nEstimators:a,maxDepth:f,learningRate:b,selectedFeatures:D}),[e,a,f,b,D]);(0,s.useEffect)(()=>{Z(H())},[]);let en=e=>{i(e.values.nEstimators),y(e.values.maxDepth),v(e.values.learningRate)},el=z?parseFloat(z[0]?.stats?.find(e=>"Test AUC"===e.label)?.value??"0"):null;return(0,r.jsxs)("div",{className:"space-y-8",children:[(0,r.jsx)(l.zY,{eyebrow:"Phase 6 — Interactive ML training in-browser",title:"ML Playground — Train Your Own BDT",description:"Adjust hyperparameters via sliders, select features, choose a dataset, and click Train. The BDT (Gradient Boosting Decision Tree) runs in-browser via Pyodide + scikit-learn. FOUR charts update per run: ROC curve (train vs test), Feature importance, Confusion matrix, Loss curve. Every slider reveals a tradeoff — more trees = better AUC but slower; deeper trees = more capacity but overfitting. Use the 1-click presets (Conservative / Sweet Spot / Aggressive / Overfit Demo) to feel the tradeoffs in seconds.",right:(0,r.jsxs)("div",{className:"flex gap-2",children:[(0,r.jsxs)(u.E,{variant:"outline",className:"gap-1.5",children:[(0,r.jsx)(k.A,{className:"h-3 w-3"})," scikit-learn"]}),(0,r.jsxs)(u.E,{variant:"outline",className:"gap-1.5",children:[(0,r.jsx)(j.A,{className:"h-3 w-3"})," Pyodide"]}),(0,r.jsxs)(u.E,{variant:"outline",className:"gap-1.5",children:[(0,r.jsx)(A.A,{className:"h-3 w-3"})," Interactive"]})]})}),(0,r.jsx)("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-3",children:X.map(e=>(0,r.jsx)(l.nO,{label:e.label,value:e.value,hint:e.hint,deltaTone:e.deltaTone},e.label))}),(0,r.jsxs)("div",{className:"rounded-lg border border-border/60 bg-muted/20 p-3",children:[(0,r.jsxs)("p",{className:"text-[10px] uppercase tracking-wider text-muted-foreground mb-2 flex items-center gap-1.5",children:[(0,r.jsx)(C.A,{className:"h-3 w-3"})," Page map — where each section is attached"]}),(0,r.jsx)("div",{className:"flex flex-wrap gap-2",children:G.map(e=>{let t=e.icon;return(0,r.jsxs)("a",{href:`#${e.id}`,className:"inline-flex items-center gap-1.5 text-[11px] px-2 py-1 rounded border border-border/60 bg-background hover:bg-primary/10 hover:border-primary/40 transition-colors",children:[(0,r.jsx)(t,{className:"h-3 w-3 text-primary"}),(0,r.jsx)("span",{children:e.label})]},e.id)})})]}),(0,r.jsx)("div",{id:"mathematics",className:"scroll-mt-20",children:(0,r.jsx)(l.iv,{title:"Mathematics of BDT — what the sliders actually control",description:"Gradient Boosting builds an additive model F_M(x) = Σ ν \xb7 h_m(x) by sequentially fitting each tree h_m to the negative gradient of the loss. Every slider here maps to a term in these equations.",icon:(0,r.jsx)(_.A,{className:"h-5 w-5"}),badge:"LaTeX",badgeVariant:"outline",children:(0,r.jsxs)("div",{className:"grid md:grid-cols-2 gap-4",children:[(0,r.jsxs)("div",{className:"space-y-3",children:[(0,r.jsxs)("div",{className:"rounded-md border border-border/40 bg-muted/20 p-3",children:[(0,r.jsx)("p",{className:"text-[10px] uppercase tracking-wider text-muted-foreground mb-1",children:"1. Additive model (the boosting update rule)"}),(0,r.jsx)(U,{latex:"F_m(x) = F_{m-1}(x) + \\nu \\cdot h_m(x)"}),(0,r.jsx)("p",{className:"text-[10px] text-muted-foreground mt-1",children:"ν = learning_rate slider (0.01–1.0). h_m = the m-th decision tree. Each tree corrects the residual error of the ensemble so far. Smaller ν → need more trees (m_max = n_estimators slider)."})]}),(0,r.jsxs)("div",{className:"rounded-md border border-border/40 bg-muted/20 p-3",children:[(0,r.jsx)("p",{className:"text-[10px] uppercase tracking-wider text-muted-foreground mb-1",children:"2. Binomial deviance loss (what we minimise)"}),(0,r.jsx)(U,{latex:"L(y, F) = \\log\\!\\bigl(1 + e^{-2yF}\\bigr), \\quad y \\in \\{-1, +1\\}"}),(0,r.jsxs)("p",{className:"text-[10px] text-muted-foreground mt-1",children:["Equivalent to logistic-regression log-loss. The negative gradient (pseudo-residual) is ",(0,r.jsx)("span",{className:"font-mono",children:"r_m = 2y / (1 + e^(2yF))"})," — each tree fits this residual."]})]}),(0,r.jsxs)("div",{className:"rounded-md border border-border/40 bg-muted/20 p-3",children:[(0,r.jsx)("p",{className:"text-[10px] uppercase tracking-wider text-muted-foreground mb-1",children:"3. Tree depth = interaction order"}),(0,r.jsx)(U,{latex:"h_m(x) = \\text{CART}(x;\\, \\text{depth} = d)"}),(0,r.jsx)("p",{className:"text-[10px] text-muted-foreground mt-1",children:"max_depth = d slider. A depth-3 tree can express 3-way feature interactions (e.g. “high pT AND low τ21 AND high b-tag”). Depth 1 = pure additive model (like logistic regression). Depth 10 = can memorise training noise."})]})]}),(0,r.jsxs)("div",{className:"space-y-3",children:[(0,r.jsxs)("div",{className:"rounded-md border border-border/40 bg-muted/20 p-3",children:[(0,r.jsx)("p",{className:"text-[10px] uppercase tracking-wider text-muted-foreground mb-1",children:"4. ROC curve & AUC"}),(0,r.jsx)(U,{latex:"\\text{AUC} = \\int_0^1 \\text{TPR}(\\text{FPR}^{-1}(t))\\, dt"}),(0,r.jsx)("p",{className:"text-[10px] text-muted-foreground mt-1",children:"TPR = TP / (TP + FN); FPR = FP / (FP + TN). AUC = probability that the model ranks a random signal higher than a random background. AUC = 0.5 = random; AUC = 1.0 = perfect."})]}),(0,r.jsxs)("div",{className:"rounded-md border border-border/40 bg-muted/20 p-3",children:[(0,r.jsx)("p",{className:"text-[10px] uppercase tracking-wider text-muted-foreground mb-1",children:"5. Confusion matrix → precision / recall / F1"}),(0,r.jsx)(U,{latex:"\\text{Precision} = \\frac{TP}{TP + FP}, \\quad \\text{Recall} = \\frac{TP}{TP + FN}"}),(0,r.jsx)(U,{latex:"F_1 = 2 \\cdot \\frac{\\text{Precision} \\cdot \\text{Recall}}{\\text{Precision} + \\text{Recall}}"}),(0,r.jsx)("p",{className:"text-[10px] text-muted-foreground mt-1",children:"Threshold = 0.5 by default. For LHC you tune for HIGH recall (don't miss Higgs). For fraud detection you tune for HIGH precision (don't freeze customer cards)."})]}),(0,r.jsxs)("div",{className:"rounded-md border border-primary/30 bg-primary/5 p-3",children:[(0,r.jsx)("p",{className:"text-[10px] uppercase tracking-wider text-primary mb-1",children:"Slider → math mapping (cheat sheet)"}),(0,r.jsxs)("ul",{className:"text-[11px] text-muted-foreground space-y-0.5 font-mono",children:[(0,r.jsx)("li",{children:"n_estimators → m (number of boosting rounds)"}),(0,r.jsx)("li",{children:"max_depth → d (interaction order in each tree)"}),(0,r.jsx)("li",{children:"learning_rate → ν (shrinkage on each tree)"}),(0,r.jsx)("li",{children:"feature selection → which x_i are visible to the CART splits"})]})]})]})]})})}),(0,r.jsx)("div",{id:"controls",className:"scroll-mt-20",children:(0,r.jsxs)(l.iv,{title:"Hyperparameter Control Panel",description:"Adjust the sliders and feature selection, apply a preset, or roll random values. Then click Train below.",icon:(0,r.jsx)(j.A,{className:"h-5 w-5"}),children:[(0,r.jsxs)("div",{className:"mb-4 space-y-2",children:[(0,r.jsx)("p",{className:"text-[10px] uppercase tracking-wider text-muted-foreground",children:"1-click presets — each tells a story"}),(0,r.jsx)("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-2",children:O.map(e=>{let t=e.icon,s=a===e.values.nEstimators&&f===e.values.maxDepth&&b===e.values.learningRate;return(0,r.jsxs)("button",{type:"button",onClick:()=>en(e),className:`rounded-md border p-2 text-left transition-all ${s?"border-primary bg-primary/10 shadow-sm":"border-border/60 bg-background hover:bg-muted/40"}`,style:s?{borderLeftWidth:3,borderLeftColor:e.color}:void 0,children:[(0,r.jsxs)("div",{className:"flex items-center gap-1.5 mb-0.5",children:[(0,r.jsx)(t,{className:"h-3.5 w-3.5",style:{color:e.color}}),(0,r.jsx)("span",{className:"text-[11px] font-semibold",children:e.label})]}),(0,r.jsx)("p",{className:"text-[9px] text-muted-foreground leading-tight",children:e.description})]},e.id)})}),(0,r.jsxs)("div",{className:"flex gap-2 mt-2",children:[(0,r.jsxs)(g.$,{variant:"outline",size:"sm",onClick:()=>{let e=(e,t,a)=>{let r=Math.floor((t-e)/a)+1;return e+Math.floor(Math.random()*r)*a};i(e(10,500,10)),y(e(1,10,1)),v(parseFloat(e(.01,1,.01).toFixed(2)))},className:"h-7 text-[11px] gap-1.5",children:[(0,r.jsx)(S.A,{className:"h-3 w-3"})," Roll random hyperparameters"]}),K.length>0&&(0,r.jsxs)(g.$,{variant:"outline",size:"sm",onClick:()=>et(!ee),className:"h-7 text-[11px] gap-1.5",children:[(0,r.jsx)(M.A,{className:"h-3 w-3"})," Saved runs (",K.length,")"]})]}),ee&&K.length>0&&(0,r.jsx)("div",{className:"rounded-md border border-border/40 bg-muted/20 p-2 mt-2 space-y-1",children:K.map((e,a)=>(0,r.jsxs)("button",{type:"button",onClick:()=>{t(e.dataset),q(Array(B.find(t=>t.id===e.dataset).nFeatures).fill(!0)),i(e.nEstimators),y(e.maxDepth),v(e.learningRate),et(!1)},className:"w-full text-left text-[10px] font-mono px-2 py-1 rounded hover:bg-muted/60 flex justify-between gap-2",children:[(0,r.jsxs)("span",{children:[(0,r.jsxs)("span",{className:"text-muted-foreground",children:["[",new Date(e.ts).toLocaleString(),"]"]})," ",(0,r.jsx)("span",{className:"text-primary",children:e.dataset})," ",(0,r.jsxs)("span",{className:"text-muted-foreground",children:["n=",e.nEstimators," d=",e.maxDepth," lr=",e.learningRate]})]}),(0,r.jsxs)("span",{className:"text-emerald-600 dark:text-emerald-400",children:["AUC=",e.auc.toFixed(4)]})]},a))})]}),(0,r.jsxs)("div",{className:"grid md:grid-cols-2 gap-6",children:[(0,r.jsxs)("div",{className:"space-y-4",children:[(0,r.jsxs)("div",{className:"space-y-1",children:[(0,r.jsx)("label",{className:"text-[11px] font-medium",children:"Dataset"}),(0,r.jsx)("select",{value:e,onChange:e=>{var a;let r;return a=e.target.value,r=B.find(e=>e.id===a),void(t(a),q(Array(r.nFeatures).fill(!0)),J(null),W(!1),Y(null))},className:"w-full h-8 text-[12px] rounded border border-border/60 bg-background px-2 cursor-pointer",children:B.map(e=>(0,r.jsx)("option",{value:e.id,children:e.name},e.id))}),(0,r.jsx)("p",{className:"text-[9px] text-muted-foreground",children:es.description})]}),(0,r.jsx)(I,{label:"n_estimators (number of trees)",value:a,min:10,max:500,step:10,onChange:i,description:"More trees = better AUC but slower training + overfitting risk at high values."}),(0,r.jsx)(I,{label:"max_depth (tree depth)",value:f,min:1,max:10,step:1,onChange:y,description:"Deeper trees = more capacity but overfitting. Depth 3 is the sweet spot for most datasets."}),(0,r.jsx)(I,{label:"learning_rate (shrinkage ν)",value:b,min:.01,max:1,step:.01,onChange:v,description:"Higher = faster convergence but less stable. 0.1 is standard; 0.01 needs more trees."}),(0,r.jsxs)(g.$,{variant:"outline",size:"sm",onClick:()=>{i(100),y(3),v(.1),q(Array(es.nFeatures).fill(!0)),J(null),W(!1),Y(null)},className:"h-7 text-[11px] gap-1.5",children:[(0,r.jsx)(L.A,{className:"h-3 w-3"})," Reset to defaults"]})]}),(0,r.jsxs)("div",{className:"space-y-2",children:[(0,r.jsxs)("label",{className:"text-[11px] font-medium",children:["Feature Selection (",D.filter(Boolean).length,"/",es.nFeatures," selected)"]}),(0,r.jsx)("p",{className:"text-[9px] text-muted-foreground mb-2",children:"Uncheck features to see how AUC changes. Fewer features = simpler model but maybe lower AUC."}),(0,r.jsx)("div",{className:"grid grid-cols-2 gap-1.5",children:es.featureNames.map((e,t)=>(0,r.jsxs)("label",{className:"flex items-center gap-1.5 text-[10px] cursor-pointer rounded border border-border/40 px-2 py-1 hover:bg-muted/30",children:[(0,r.jsx)("input",{type:"checkbox",checked:D[t]??!1,onChange:e=>{let a=[...D];a[t]=e.target.checked,q(a)},className:"h-3 w-3 accent-primary"}),(0,r.jsx)("span",{className:"font-mono",children:e})]},t))})]})]})]})}),(0,r.jsx)("div",{id:"train",className:"scroll-mt-20",children:(0,r.jsxs)(l.iv,{title:"Train and Evaluate — 4 charts per run",description:"Click Train to run the BDT with your hyperparameters. Four charts update: ROC (train vs test), Feature importance, Confusion matrix, Loss curve (train vs test).",icon:(0,r.jsx)(N.A,{className:"h-5 w-5"}),badge:Q?"Trained":"Not trained",badgeVariant:Q?"default":"outline",contentClassName:"p-4 md:p-5 space-y-4",children:[(0,r.jsxs)("div",{className:"rounded-md border border-border/40 bg-muted/20 p-3",children:[(0,r.jsx)("p",{className:"text-[10px] uppercase tracking-wider text-muted-foreground mb-2",children:"Current configuration"}),(0,r.jsxs)("div",{className:"grid grid-cols-2 md:grid-cols-5 gap-2 text-[11px]",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("span",{className:"text-muted-foreground",children:"Dataset:"})," ",(0,r.jsx)("span",{className:"font-mono font-medium",children:es.name.split("(")[0].trim()})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("span",{className:"text-muted-foreground",children:"n_estimators:"})," ",(0,r.jsx)("span",{className:"font-mono font-bold text-primary",children:a})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("span",{className:"text-muted-foreground",children:"max_depth:"})," ",(0,r.jsx)("span",{className:"font-mono font-bold text-primary",children:f})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("span",{className:"text-muted-foreground",children:"learning_rate:"})," ",(0,r.jsx)("span",{className:"font-mono font-bold text-primary",children:b})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("span",{className:"text-muted-foreground",children:"features:"})," ",(0,r.jsxs)("span",{className:"font-mono font-bold text-primary",children:[D.filter(Boolean).length,"/",es.nFeatures]})]})]})]}),Q&&null!==V&&null!==el&&(0,r.jsxs)("div",{className:`rounded-md border p-2 flex items-center justify-between text-[11px] ${el>V?"border-emerald-500/40 bg-emerald-500/10":el<V?"border-rose-500/40 bg-rose-500/10":"border-border/40 bg-muted/30"}`,children:[(0,r.jsxs)("span",{className:"flex items-center gap-1.5",children:[(0,r.jsx)(M.A,{className:"h-3.5 w-3.5"}),(0,r.jsxs)("span",{className:"text-muted-foreground",children:["Previous AUC: ",(0,r.jsx)("span",{className:"font-mono font-bold",children:V.toFixed(4)})]}),(0,r.jsx)(P.A,{className:"h-3 w-3 text-muted-foreground"}),(0,r.jsxs)("span",{className:"text-muted-foreground",children:["Current AUC: ",(0,r.jsx)("span",{className:"font-mono font-bold",children:el.toFixed(4)})]})]}),(0,r.jsx)("span",{className:"font-mono font-bold",children:el>V?`+${(el-V).toFixed(4)}`:el<V?`${(el-V).toFixed(4)}`:"\xb10"})]}),(0,r.jsxs)("div",{className:"rounded-md border border-primary/30 bg-primary/5 p-3",children:[(0,r.jsxs)("p",{className:"text-[10px] uppercase tracking-wider text-muted-foreground mb-2 flex items-center gap-1.5",children:[(0,r.jsx)(F.A,{className:"h-3 w-3"})," Click to train the BDT (scikit-learn via Pyodide)"]}),(0,r.jsx)(o.l,{code:ei,buttonLabel:"Train BDT",onOutput:e=>{try{let t=e.indexOf("["),a=e.lastIndexOf("]");if(t>=0&&a>t){let r=JSON.parse(e.substring(t,a+1));if(Array.isArray(r)&&4===r.length){if(z){let e=z[0],t=e?.stats?.find(e=>"Test AUC"===e.label)?.value??"0";Y(parseFloat(t))}J(r),W(!0)}}}catch{}},hideTextOutput:!!z,compact:!0}),(0,r.jsxs)("div",{className:"flex items-center gap-2 mt-2",children:[(0,r.jsxs)("label",{className:"text-[10px] uppercase tracking-wider text-muted-foreground flex items-center gap-1",children:[(0,r.jsx)(E.A,{className:"h-3 w-3"})," Code:"]}),(0,r.jsxs)("select",{value:ea,onChange:e=>er(e.target.value),className:"h-7 text-[11px] rounded border border-border/60 bg-background px-2 cursor-pointer",title:"Select a language to view the BDT training code",children:[(0,r.jsx)("option",{value:"hide",children:"Hide code"}),(0,r.jsx)("option",{value:"python",children:"Python (runnable via Pyodide)"}),(0,r.jsx)("option",{value:"r",children:"R — gbm + caret (statistician)"}),(0,r.jsx)("option",{value:"scala",children:"Scala — Spark MLlib (data engineer)"}),(0,r.jsx)("option",{value:"sql",children:"SQL — BigQuery ML (DBA)"}),(0,r.jsx)("option",{value:"julia",children:"Julia — MLJ.jl (numerical computing)"})]})]}),"hide"!==ea&&(0,r.jsx)("pre",{className:"text-[10px] font-mono whitespace-pre-wrap leading-relaxed max-h-96 overflow-auto bg-background/60 rounded p-2 border border-border/40 mt-2",children:"python"===ea?ei:x[ea]??x.python})]}),Q&&(0,r.jsxs)(g.$,{variant:"outline",size:"sm",onClick:()=>{if(!z)return;let t=z[0],r=t?.stats?.find(e=>"Test AUC"===e.label)?.value??"0",s=t?.stats?.find(e=>"Training time"===e.label)?.value??"0s";var i={ts:Date.now(),dataset:e,nEstimators:a,maxDepth:f,learningRate:b,nFeatures:D.filter(Boolean).length,auc:parseFloat(r),trainTime:parseFloat(s)};let n=H();n.unshift(i);let l=n.slice(0,8);try{localStorage.setItem($,JSON.stringify(l))}catch{}Z(H())},className:"h-7 text-[11px] gap-1.5",children:[(0,r.jsx)(R.A,{className:"h-3 w-3"})," Save this run (localStorage)"]}),z&&4===z.length?(0,r.jsxs)("div",{className:"space-y-4",children:[(0,r.jsx)(d.D,{data:z[0],accent:es.accent,sourceCode:ei,multiLangCode:x}),(0,r.jsxs)("div",{className:"grid md:grid-cols-2 gap-4",children:[(0,r.jsx)(d.D,{data:z[1],accent:"oklch(0.65 0.18 145)",sourceCode:ei,multiLangCode:x}),(0,r.jsx)(d.D,{data:z[2],accent:"oklch(0.65 0.18 30)",sourceCode:ei,multiLangCode:x})]}),(0,r.jsx)(d.D,{data:z[3],accent:"oklch(0.65 0.18 280)",sourceCode:ei,multiLangCode:x})]}):(0,r.jsxs)("div",{className:"rounded-md border border-dashed border-border/40 p-8 text-center",children:[(0,r.jsx)(k.A,{className:"h-8 w-8 text-muted-foreground/40 mx-auto mb-2"}),(0,r.jsx)("p",{className:"text-sm text-muted-foreground/70",children:"Click “Train BDT” to see the four charts: ROC (train vs test), Feature importance, Confusion matrix, and Loss curve."}),(0,r.jsx)("p",{className:"text-[10px] text-muted-foreground/50 mt-1",children:"First run takes ~5s longer (scikit-learn install via micropip). Subsequent runs are instant."})]})]})}),(0,r.jsx)("div",{id:"tradeoffs",className:"scroll-mt-20",children:Q&&(0,r.jsx)(l.iv,{title:"Tradeoff hints — what to try next",description:"Each hint below changes ONE slider at a time so you can isolate the effect on AUC and training time.",icon:(0,r.jsx)(T.A,{className:"h-5 w-5"}),badge:"3 experiments",badgeVariant:"outline",children:(0,r.jsxs)("div",{className:"grid md:grid-cols-3 gap-3",children:[(0,r.jsxs)("button",{type:"button",onClick:()=>en(O[2]),className:"rounded-md border border-blue-500/30 bg-blue-500/5 p-3 text-left hover:bg-blue-500/10 transition-colors",children:[(0,r.jsx)("p",{className:"text-[10px] uppercase tracking-wider text-blue-700 dark:text-blue-400 mb-1",children:"Try: Aggressive"}),(0,r.jsx)("p",{className:"text-[11px] text-muted-foreground",children:"Increase n_estimators to 300, depth to 5. AUC should improve — but training time triples. At some point (>500 trees), AUC plateaus and you're just wasting compute."}),(0,r.jsx)("p",{className:"text-[10px] text-blue-700 dark:text-blue-400 mt-2 font-medium",children:"→ Click to apply"})]}),(0,r.jsxs)("button",{type:"button",onClick:()=>en(O[3]),className:"rounded-md border border-amber-500/30 bg-amber-500/5 p-3 text-left hover:bg-amber-500/10 transition-colors",children:[(0,r.jsx)("p",{className:"text-[10px] uppercase tracking-wider text-amber-700 dark:text-amber-400 mb-1",children:"Try: Overfit Demo"}),(0,r.jsx)("p",{className:"text-[11px] text-muted-foreground",children:"Set depth=10, n=500, lr=0.3. Train AUC will hit ~1.0 — but test AUC collapses. The gap between train and test AUC IS the overfitting signal. Watch the loss curve diverge."}),(0,r.jsx)("p",{className:"text-[10px] text-amber-700 dark:text-amber-400 mt-2 font-medium",children:"→ Click to apply"})]}),(0,r.jsxs)("button",{type:"button",onClick:()=>{let e=Math.ceil(es.nFeatures/2);q(Array(es.nFeatures).fill(!1).map((t,a)=>a<e))},className:"rounded-md border border-emerald-500/30 bg-emerald-500/5 p-3 text-left hover:bg-emerald-500/10 transition-colors",children:[(0,r.jsx)("p",{className:"text-[10px] uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-1",children:"Try: Half the features"}),(0,r.jsx)("p",{className:"text-[11px] text-muted-foreground",children:"Uncheck half the features. AUC drops — but not as much as you'd think. The top 3 features carry 80% of the signal. Feature engineering IS pruning."}),(0,r.jsx)("p",{className:"text-[10px] text-emerald-700 dark:text-emerald-400 mt-2 font-medium",children:"→ Click to apply"})]})]})})}),(0,r.jsx)("div",{id:"why",className:"scroll-mt-20",children:(0,r.jsx)(l.iv,{title:"Why this matters — training vs inference",description:"Every other card on the platform runs pre-written code (inference). This page lets you TRAIN the model — and feel the tradeoffs.",icon:(0,r.jsx)(A.A,{className:"h-5 w-5"}),children:(0,r.jsxs)("div",{className:"prose prose-sm dark:prose-invert max-w-none space-y-3",children:[(0,r.jsxs)("p",{className:"text-sm text-muted-foreground leading-relaxed",children:["A reader who sees a pre-trained BDT ROC curve (AUC=0.82) learns a"," ",(0,r.jsx)("strong",{className:"text-foreground/80",children:"fact"}),". A reader who TRAINS that BDT themselves — adjusting tree depth from 3 to 5, watching AUC go from 0.78 to 0.85 but training time from 2s to 8s — learns a"," ",(0,r.jsx)("strong",{className:"text-foreground/80",children:"tradeoff"}),". The tradeoff IS the data science. The playground makes tradeoffs visceral."]}),(0,r.jsx)("p",{className:"text-sm text-muted-foreground leading-relaxed",children:(0,r.jsx)("strong",{className:"text-foreground/80",children:"Every slider reveals a tradeoff:"})}),(0,r.jsxs)("ul",{className:"text-sm text-muted-foreground space-y-0.5 ml-4 list-disc",children:[(0,r.jsxs)("li",{children:[(0,r.jsx)("strong",{children:"n_estimators:"})," more trees → better AUC but slower training + overfitting plateau"]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("strong",{children:"max_depth:"})," deeper trees → more capacity but overfitting (train AUC > test AUC)"]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("strong",{children:"learning_rate:"})," higher → faster convergence but noisier (less stable)"]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("strong",{children:"feature selection:"})," fewer features → simpler model, lower AUC, but more interpretable"]})]}),(0,r.jsxs)("p",{className:"text-sm text-muted-foreground leading-relaxed",children:[(0,r.jsx)("strong",{className:"text-foreground/80",children:"The BDT → CNN → GNN evolution:"})," The BDT here (engineered features, AUC~0.82) is the baseline. On the LHC page, the CNN (jet images, AUC~0.89) and GNN (particle graphs, AUC~0.93) improve by capturing spatial structure. But the BDT is always the starting point — fast, interpretable, and good enough for a first analysis. The practicing DS knows: try the simple model first."]})]})})}),(0,r.jsx)("div",{id:"thoughts",className:"scroll-mt-20",children:(0,r.jsxs)(m.S,{pageTitle:"ML Playground",children:[(0,r.jsx)(m.P,{title:"The bias-variance tradeoff IS the slider you can feel",connectedTo:"Phase 8: living-equations cards",children:(0,r.jsx)("p",{className:"text-xs",children:"In a textbook, “bias-variance tradeoff” is a U-curve drawn once and forgotten. Here it's the depth slider. Depth=1 = high bias (underfits), depth=10 = high variance (overfits). The minimum on the U-curve is dataset-dependent — that's why no textbook can tell you “use depth 3” with a straight face. You tune it. The playground makes the U-curve something you can FEEL by watching the train-test AUC gap open and close as you drag the slider."})}),(0,r.jsx)(m.P,{title:"Loss curves lie — until you draw the test one too",connectedTo:"Phase 1: architecture",children:(0,r.jsxs)("p",{className:"text-xs",children:["Every ML tutorial shows a training loss curve going down. That curve ALWAYS goes down — boosting fits residuals, residuals shrink, loss decreases. The curve carries no information by itself. The INFORMATIVE curve is the test loss, plotted alongside. It goes down, then flatlines, then rises. The inflection point is the optimal number of trees — past it, you're memorising noise. Without the test curve, you cannot see overfitting. This is why we plot both — and why scikit-learn's",(0,r.jsx)("span",{className:"font-mono",children:" staged_predict_proba"})," is the most underused method in the library."]})}),(0,r.jsx)(m.P,{title:"Feature importance is the Pareto principle made visible",connectedTo:"Elegant Code: SVD, attention",children:(0,r.jsxs)("p",{className:"text-xs",children:["The feature-importance chart almost always shows the top 3 features carrying 70–80% of the total importance. This is the Pareto principle (80/20 rule) appearing in ML — and it's the reason feature selection works at all. The corollary: the bottom 30% of features contribute almost nothing. In production you'd drop them and retrain: simpler model, ~same AUC, faster inference, lower memory. The BDT's",(0,r.jsx)("span",{className:"font-mono",children:" feature_importances_"})," attribute is the cheapest feature-engineering signal you'll ever get — and it's free after every training run."]})}),(0,r.jsx)(m.P,{title:"Precision vs recall is the ethics of thresholding",connectedTo:"LHC + finance + insurance pages",children:(0,r.jsx)("p",{className:"text-xs",children:"The default threshold of 0.5 is a convention, not a law. For LHC (signal = Higgs), recall matters more than precision — you don't want to lose a Nobel prize because the threshold was too high. For fraud detection, precision matters more — false positives freeze customer cards and erode trust. For insurance claims, the right threshold depends on the cost of investigation vs the cost of payout. The AUC is threshold-independent (that's its strength); the confusion matrix IS threshold-dependent (that's its strength). You need both. Thresholding is where ML meets business logic — and where data scientists earn their salary."})}),(0,r.jsx)(m.P,{title:"BDT → CNN → GNN is the universal ML evolution",connectedTo:"LHC data analysis page + molecular modelling",children:(0,r.jsx)("p",{className:"text-xs",children:"On the LHC page, the BDT (engineered features, AUC~0.82) is the baseline. The CNN (jet images, AUC~0.89) captures 2D spatial structure. The GNN (particle graphs, AUC~0.93) captures the irregular topology of particle decay. The same progression appears in protein folding (sequence → contact map → graph), in fraud (transaction features → user session graph → bipartite user-merchant graph). The pattern: engineer features → let the model learn spatial features → let the model learn graph structure. Each step adds ~5–10 AUC points. Each step also adds 10–100\xd7 compute. The playground is step 1 of that ladder — and the ladder never ends."})}),(0,r.jsx)(m.P,{title:"Every hyperparameter is a bet on the data",connectedTo:"Causal inference page",children:(0,r.jsx)("p",{className:"text-xs",children:"n_estimators=100 says “I believe 100 rounds of boosting will saturate the signal”. max_depth=3 says “I believe 3-way interactions are the ceiling of useful structure”. learning_rate=0.1 says “I believe the signal is strong enough that 10% of each tree's correction is safe to add”. None of these are right a priori — they're educated bets. The practicing data scientist tunes not because the defaults are wrong, but because every dataset has its own structure. The playground is the place where these bets become evidence in seconds, not hours."})})]})}),(0,r.jsx)("div",{id:"journey",className:"scroll-mt-20",children:(0,r.jsx)(l.iv,{title:"Cross-Domain Journey Tracker — Gamification",description:"Your exploration progress across the platform's math cousins. The ML Playground now contributes to a new 'ML Trainer' badge. Climate Analyst badge added — visit the climate-science page to unlock.",icon:(0,r.jsx)(w.A,{className:"h-5 w-5"}),badge:"Phase 4 + Climate",badgeVariant:"outline",children:(0,r.jsx)(p.Hv,{})})}),(0,r.jsx)(c.T,{relatedPages:[{id:"lhc-data-analysis",reason:"LHC page has 15 analysis cards — see where the BDT fits in the full pipeline"},{id:"analytics-outputs",reason:"29 visualization cards — the chart infrastructure used here"},{id:"elegant-code",reason:"29 equation cards + 5 DS workflow methodology cards"},{id:"dashboard",reason:"Live multi-source dashboard + journey tracker"}]}),(0,r.jsxs)("div",{className:"flex flex-wrap gap-2",children:[(0,r.jsx)(n(),{href:(0,h.ZJ)("home"),className:"text-sm text-primary hover:underline",children:"→ Return to overview"}),(0,r.jsx)("span",{className:"text-muted-foreground",children:"\xb7"}),(0,r.jsx)(n(),{href:(0,h.ZJ)("lhc-data-analysis"),className:"text-sm text-primary hover:underline",children:"→ LHC Data Analysis"}),(0,r.jsx)("span",{className:"text-muted-foreground",children:"\xb7"}),(0,r.jsx)(n(),{href:(0,h.ZJ)("analytics-outputs"),className:"text-sm text-primary hover:underline",children:"→ Analytics Outputs"})]})]})}},31885:(e,t,a)=>{"use strict";a.d(t,{A:()=>r});let r=(0,a(6404).A)("lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]])},48155:(e,t,a)=>{"use strict";a.d(t,{A:()=>r});let r=(0,a(6404).A)("dice-5",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"M16 8h.01",key:"cr5u4v"}],["path",{d:"M8 8h.01",key:"1e4136"}],["path",{d:"M8 16h.01",key:"18s6g9"}],["path",{d:"M16 16h.01",key:"1f9h7w"}],["path",{d:"M12 12h.01",key:"1mp3jc"}]])},53961:(e,t,a)=>{"use strict";a.d(t,{A:()=>r});let r=(0,a(6404).A)("zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]])},55243:(e,t,a)=>{"use strict";a.d(t,{A:()=>r});let r=(0,a(6404).A)("save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]])},65576:(e,t,a)=>{"use strict";a.d(t,{A:()=>r});let r=(0,a(6404).A)("cpu",[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]])},66349:(e,t,a)=>{"use strict";a.d(t,{l:()=>y});var r=a(95155),s=a(12115),i=a(80642),n=a(39430),l=a(89239),o=a(45160),d=a(6296),c=a(12651),m=a(13545),p=a(20232),h=a(10762);let u=null,g="0.26.2",x=`https://cdn.jsdelivr.net/pyodide/v${g}/full/`;async function f(){return u||(u=(async()=>(await new Promise((e,t)=>{if(window.loadPyodide)return void e();let a=document.createElement("script");a.src=`${x}pyodide.js`,a.onload=()=>e(),a.onerror=()=>t(Error("Failed to load Pyodide bootstrap")),document.head.appendChild(a)}),await window.loadPyodide({indexURL:x})))().catch(e=>{throw u=null,e}))}function y({code:e,buttonLabel:t="Run in browser",preamble:a,compact:u=!1,onOutput:x,hideTextOutput:y=!1}){let[b,v]=(0,s.useState)("idle"),[_,j]=(0,s.useState)(""),[N,T]=(0,s.useState)(null),[A,k]=(0,s.useState)(null),w=(0,s.useRef)(null),C=(0,s.useCallback)(async()=>{v("loading"),T(null),j("Loading Pyodide runtime (~10MB)…\nFirst run takes 5-10s on a typical connection.\nSubsequent runs are instant.\n");let t=performance.now();try{let r=await f(),s=Math.round(performance.now()-t);k(s);let i=[],n=e=>{i.push(e)};try{r.setStdout({batched:n}),r.setStderr({batched:n})}catch{try{r.setStdout(n),r.setStderr(n)}catch{}}let l=(a??"")+"\n"+e,o=[];if(/\bnumpy\b|\bnp\./.test(l)&&o.push("numpy"),/\bscipy\b|\bsp\./.test(l)&&o.push("scipy"),/\bsklearn\b|\bGradientBoosting\b|\bRandomForest\b|\btrain_test_split\b|\bKMeans\b|\bSVC\b|\bLogisticRegression\b/.test(l)&&o.push("scikit-learn"),/\bpandas\b|\bpd\./.test(l)&&o.push("pandas"),/\bpyarrow\b|\bpq\./.test(l)&&o.push("pyarrow"),o.length>0){j(e=>e+`
Loading packages: ${o.join(", ")}…
`);try{await r.loadPackage(o)}catch{}}v("running"),j(e=>e+`
Pyodide loaded in ${s}ms. Running analysis…

`),a&&await r.runPythonAsync(a),await r.runPythonAsync(e);let d=i.join("");j(e=>e+(d||"(no output)")),v("done"),x&&x(d)}catch(a){let e=a instanceof Error?a.message:String(a),t=e.includes("Failed to load Pyodide bootstrap")?"\n\nHint: check your internet connection — Pyodide loads from a CDN (jsdelivr.net). Click again to retry.":e.includes("NetworkError")||e.includes("Failed to fetch")?"\n\nHint: network error loading Pyodide. Check your connection and click again to retry.":"";T(e+t),v("error"),j(a=>a+`
Error: ${e}${t}`)}},[e,a,x]);return(0,s.useEffect)(()=>{w.current&&(w.current.scrollTop=w.current.scrollHeight)},[_]),(0,r.jsxs)("div",{className:`mt-3 ${u?"":"rounded-md border border-primary/30 bg-primary/3 p-3"}`,children:[(0,r.jsxs)("div",{className:"flex items-center gap-2",children:[(0,r.jsxs)(l.$,{size:u?"sm":"default",variant:"running"===b||"loading"===b?"outline":"error"===b?"destructive":"default",className:"gap-1.5",onClick:C,disabled:"loading"===b||"running"===b,children:["loading"===b||"running"===b?(0,r.jsx)(d.A,{className:"h-3.5 w-3.5 animate-spin"}):"done"===b?(0,r.jsx)(c.A,{className:"h-3.5 w-3.5"}):"error"===b?(0,r.jsx)(m.A,{className:"h-3.5 w-3.5"}):(0,r.jsx)(p.A,{className:"h-3.5 w-3.5"}),"error"===b?`Retry: ${t}`:"done"===b?`Re-run: ${t}`:t]}),!u&&(0,r.jsxs)(o.E,{variant:"outline",className:"text-[10px] gap-1",children:[(0,r.jsx)(h.A,{className:"h-2.5 w-2.5"}),"Pyodide v",g]}),null!==A&&"done"===b&&(0,r.jsxs)("span",{className:"text-[10px] text-muted-foreground",children:["Runtime: ",A,"ms load + execution"]})]}),(0,r.jsx)(i.N,{children:("idle"!==b||_)&&!y&&(0,r.jsx)(n.P.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},className:"mt-2",children:(0,r.jsx)("div",{ref:w,className:`rounded-md bg-[oklch(0.16_0.005_240)] text-[oklch(0.97_0.005_60)] p-2.5 text-[11px] font-mono leading-relaxed overflow-x-auto code-scroll max-h-64 overflow-y-auto ${N?"border border-rose-500/40":"border border-emerald-500/30"}`,children:(0,r.jsx)("pre",{className:"whitespace-pre-wrap",children:_})})})})]})}},67514:(e,t,a)=>{"use strict";a.d(t,{A:()=>r});let r=(0,a(6404).A)("trending-down",[["path",{d:"M16 17h6v-6",key:"t6n2it"}],["path",{d:"m22 17-8.5-8.5-5 5L2 7",key:"x473p"}]])},69048:(e,t,a)=>{"use strict";a.d(t,{A:()=>r});let r=(0,a(6404).A)("square-function",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3",key:"m1af9g"}],["path",{d:"M9 11.2h5.7",key:"3zgcl2"}]])},83036:(e,t,a)=>{"use strict";a.d(t,{P:()=>d,S:()=>c});var r=a(95155),s=a(98500),i=a.n(s),n=a(44071),l=a(97810),o=a(85757);function d({title:e,connectedTo:t,researchHref:a,children:s}){return(0,r.jsxs)("div",{className:"rounded-md border border-primary/30 bg-primary/5 p-4 space-y-2",children:[(0,r.jsxs)("div",{className:"flex items-start gap-2",children:[(0,r.jsx)(n.A,{className:"h-4 w-4 text-primary mt-0.5 shrink-0"}),(0,r.jsxs)("div",{className:"flex-1 min-w-0",children:[(0,r.jsx)("p",{className:"text-sm font-semibold text-foreground/90 leading-tight",children:e}),t&&(0,r.jsxs)("div",{className:"flex items-center gap-1.5 mt-1",children:[(0,r.jsx)(l.A,{className:"h-3 w-3 text-muted-foreground"}),(0,r.jsxs)(i(),{href:a??(0,o.ZJ)("research"),className:"text-[10px] text-muted-foreground hover:text-primary hover:underline",children:["Connected to: ",t," →"]})]})]})]}),(0,r.jsx)("div",{className:"text-xs text-muted-foreground leading-relaxed space-y-2 pl-6",children:s})]})}function c({pageTitle:e,children:t}){return(0,r.jsxs)("div",{className:"space-y-4",children:[(0,r.jsxs)("div",{className:"flex items-center gap-2 border-b border-border/60 pb-2",children:[(0,r.jsx)(n.A,{className:"h-5 w-5 text-primary"}),(0,r.jsxs)("h2",{className:"text-base font-bold text-foreground/90",children:["My deeper thoughts — ",e]})]}),(0,r.jsx)("p",{className:"text-xs text-muted-foreground italic leading-relaxed",children:"These are not summaries. They are arguments — the kind of connections a reader with serious grey matter would make after living with the material for years. Each thought connects to the platform's research section (ADRs, papers, decision records) so it's traceable, not just opinionated."}),(0,r.jsx)("div",{className:"space-y-3",children:t})]})}},86901:(e,t,a)=>{"use strict";a.d(t,{A:()=>r});let r=(0,a(6404).A)("sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]])},90718:(e,t,a)=>{"use strict";a.d(t,{A:()=>r});let r=(0,a(6404).A)("brain",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]])},97309:(e,t,a)=>{"use strict";a.d(t,{A:()=>r});let r=(0,a(6404).A)("list-tree",[["path",{d:"M21 12h-8",key:"1bmf0i"}],["path",{d:"M21 6H8",key:"1pqkrb"}],["path",{d:"M21 18h-8",key:"1tm79t"}],["path",{d:"M3 6v4c0 1.1.9 2 2 2h3",key:"1ywdgy"}],["path",{d:"M3 10v6c0 1.1.9 2 2 2h3",key:"2wc746"}]])},97810:(e,t,a)=>{"use strict";a.d(t,{A:()=>r});let r=(0,a(6404).A)("book-open",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]])}},e=>{e.O(0,[7330,6919,8500,9430,3493,9760,7591,6012,9237,4843,9620,6722,5404,1045,8441,3794,7358],()=>e(e.s=24922)),_N_E=e.O()}]);