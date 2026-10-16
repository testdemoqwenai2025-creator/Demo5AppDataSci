(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5785],{127:(e,t,a)=>{"use strict";a.d(t,{A:()=>s});let s=(0,a(6404).A)("target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]])},26974:(e,t,a)=>{Promise.resolve().then(a.bind(a,82048))},82048:(e,t,a)=>{"use strict";a.d(t,{ExperimentTrackingPage:()=>y});var s=a(95155),r=a(58381),n=a(27774),i=a(19776),l=a(45160),o=a(31025),m=a(127),c=a(89123),p=a(439),d=a(93219),h=a(53961),f=a(72709);let u=[{label:"Min sample size (per variant)",value:"~1,000",hint:"For detecting 5% effect size at 80% power, alpha=0.05"},{label:"Statistical test",value:"Welch's t-test",hint:"Unequal variance, robust to non-normal data at scale"},{label:"Significance threshold",value:"p < 0.05",hint:"5% false positive rate (industry standard)"},{label:"Minimum detectable effect",value:"1-5%",hint:"Depends on traffic volume + variance"}],g=[{symbol:"p-value",code:"t_test(control, treatment).pvalue",explanation:"probability of observing this difference by chance. p < 0.05 = significant."},{symbol:"effect_size",code:"(mean_treatment - mean_control) / std_pooled",explanation:"Cohen's d — how large the effect is, not just whether it's significant"},{symbol:"power",code:"1 - beta (false negative rate)",explanation:"probability of detecting a real effect. 80% is the industry standard."},{symbol:"n_sample",code:"(z_alpha/2 + z_beta)^2 * 2 * sigma^2 / delta^2",explanation:"sample size formula: significance + power + variance + effect size"},{symbol:"Thompson sampling",code:"arm = argmax(E[reward | data])",explanation:"multi-armed bandit: exploit best arm, explore uncertain arms, balances automatically"},{symbol:"champion/challenger",code:"if treatment.pvalue < 0.05: promote(treatment)",explanation:"champion = current production model, challenger = new variant. Promote if significant."}],x=`# ============================================================
# A/B Test framework — champion vs challenger
# Free: OSS (BSD-3). pip install scipy numpy
# ============================================================
import numpy as np
from scipy import stats

# Simulate A/B test data
np.random.seed(42)
control = np.random.normal(4.2, 0.5, 1000)  # CTR = 4.2%
treatment = np.random.normal(4.4, 0.5, 1000)  # CTR = 4.4% (+4.8%)

# 1. Welch's t-test (unequal variance, robust)
t_stat, p_value = stats.ttest_ind(treatment, control, equal_var=False)

# 2. Effect size (Cohen's d)
pooled_std = np.sqrt((np.var(control) + np.var(treatment)) / 2)
effect_size = (np.mean(treatment) - np.mean(control)) / pooled_std

# 3. Confidence interval for the difference
diff = np.mean(treatment) - np.mean(control)
se = np.sqrt(np.var(treatment) / len(treatment) + np.var(control) / len(control))
ci_lower = diff - 1.96 * se
ci_upper = diff + 1.96 * se

# 4. Decision: promote treatment if p < 0.05 AND effect > 0
if p_value < 0.05 and diff > 0:
    decision = "PROMOTE: treatment is significantly better"
else:
    decision = "KEEP: no significant improvement"

print(f"Control mean: {np.mean(control):.4f}")
print(f"Treatment mean: {np.mean(treatment):.4f}")
print(f"Difference: {diff:.4f} ({diff/np.mean(control)*100:.1f}%)")
print(f"t-stat: {t_stat:.4f}, p-value: {p_value:.6f}")
print(f"Effect size (Cohen's d): {effect_size:.4f}")
print(f"95% CI: [{ci_lower:.4f}, {ci_upper:.4f}]")
print(f"Decision: {decision}")
`,b=`# ============================================================
# Sample size calculator — how many users per variant?
# Free: OSS. pip install scipy numpy
# ============================================================
import numpy as np
from scipy import stats

# Parameters
alpha = 0.05  # significance level (false positive rate)
power = 0.80  # 1 - beta (false negative rate)
baseline_rate = 0.042  # current CTR = 4.2%
mde = 0.01  # minimum detectable effect = 1% absolute (4.2% -> 5.2%)

# Z-scores
z_alpha = stats.norm.ppf(1 - alpha / 2)  # two-tailed
z_beta = stats.norm.ppf(power)

# Sample size formula (for proportions)
p1 = baseline_rate
p2 = baseline_rate + mde
p_avg = (p1 + p2) / 2

n = ((z_alpha * np.sqrt(2 * p_avg * (1 - p_avg)) +
      z_beta * np.sqrt(p1 * (1 - p1) + p2 * (1 - p2))) ** 2) / (p2 - p1) ** 2

print(f"Baseline rate: {baseline_rate*100:.1f}%")
print(f"MDE: {mde*100:.1f}% absolute ({(baseline_rate+mde)*100:.1f}%)")
print(f"Alpha: {alpha} (significance)")
print(f"Power: {power} (1 - false negative)")
print(f"Required sample size per variant: {int(np.ceil(n)):,}")
print(f"Total (2 variants): {int(np.ceil(n)) * 2:,}")
print(f"At 100K users/day: {int(np.ceil(n)) * 2 / 100000:.1f} days to reach significance")
`,v=`# ============================================================
# Multi-armed bandit — Thompson sampling
# Free: OSS. pip install numpy
# ============================================================
import numpy as np

# 3 arms (e.g. 3 model variants)
true_rates = [0.042, 0.048, 0.039]  # true CTR per variant
n_arms = len(true_rates)

# Beta distribution priors (alpha=1, beta=1 = uniform)
alphas = [1] * n_arms
betas = [1] * n_arms

# Simulate 10000 rounds
total_reward = 0
arm_counts = [0] * n_arms

for round_num in range(10000):
    # Thompson sampling: sample from each arm's posterior
    samples = [np.random.beta(alphas[a], betas[a]) for a in range(n_arms)]
    best_arm = np.argmax(samples)

    # Observe reward (1 = click, 0 = no click)
    reward = 1 if np.random.random() < true_rates[best_arm] else 0
    total_reward += reward
    arm_counts[best_arm] += 1

    # Update posterior
    if reward:
        alphas[best_arm] += 1
    else:
        betas[best_arm] += 1

print(f"True CTRs: {true_rates}")
print(f"Best arm: {np.argmax(true_rates)} (CTR={max(true_rates)})")
print(f"Arm selection counts: {arm_counts}")
print(f"Total reward: {total_reward}")
print(f"Regret: {max(true_rates) * 10000 - total_reward:.0f}")
print(f"\\nPosterior parameters:")
for a in range(n_arms):
    print(f"  Arm {a}: Beta({alphas[a]}, {betas[a]}) -> mean={alphas[a]/(alphas[a]+betas[a]):.4f}")
`;function y(){return(0,s.jsxs)("div",{className:"space-y-8",children:[(0,s.jsx)(r.zY,{eyebrow:"Experiment Tracking + A/B Testing — Phase 21 Task 21.3",title:"Experiment Tracking — A/B testing, feature flags, multi-armed bandits",description:"Champion/challenger A/B testing framework, online vs offline evaluation, statistical significance (Welch's t-test, Cohen's d, sample size calculation), multi-armed bandit (Thompson sampling). The pattern for evaluating AI capabilities in production — does the new model actually beat the old one?",right:(0,s.jsxs)("div",{className:"flex gap-2 flex-wrap",children:[(0,s.jsxs)(l.E,{variant:"outline",className:"gap-1.5",children:[(0,s.jsx)(o.A,{className:"h-3 w-3"})," A/B Test"]}),(0,s.jsxs)(l.E,{variant:"outline",className:"gap-1.5",children:[(0,s.jsx)(m.A,{className:"h-3 w-3"})," Thompson"]}),(0,s.jsxs)(l.E,{variant:"outline",className:"gap-1.5",children:[(0,s.jsx)(c.A,{className:"h-3 w-3"})," Stats"]}),(0,s.jsxs)(l.E,{variant:"outline",className:"gap-1.5",children:[(0,s.jsx)(p.A,{className:"h-3 w-3"})," Feature Flags"]})]})}),(0,s.jsx)(r.iv,{title:"KPIs at a glance",description:"The numbers that matter for experiment tracking.",icon:(0,s.jsx)(d.A,{className:"h-5 w-5"}),children:(0,s.jsx)("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-3",children:u.map(e=>(0,s.jsxs)("div",{className:"rounded-md border border-border/60 p-3 bg-muted/20",children:[(0,s.jsx)("p",{className:"text-[10px] uppercase tracking-wider text-muted-foreground",children:e.label}),(0,s.jsx)("p",{className:"text-lg font-semibold mt-1",children:e.value}),(0,s.jsx)("p",{className:"text-[10px] text-muted-foreground mt-1",children:e.hint})]},e.label))})}),(0,s.jsx)(r.iv,{title:"Math - code mapping table",description:"The 6 equations that govern A/B testing + multi-armed bandits.",icon:(0,s.jsx)(c.A,{className:"h-5 w-5"}),children:(0,s.jsx)("div",{className:"overflow-x-auto",children:(0,s.jsxs)("table",{className:"w-full text-xs",children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{className:"border-b border-border/60 text-[10px] uppercase tracking-wider text-muted-foreground",children:[(0,s.jsx)("th",{className:"text-left px-3 py-2 font-medium",children:"Math symbol"}),(0,s.jsx)("th",{className:"text-left px-3 py-2 font-medium",children:"Code"}),(0,s.jsx)("th",{className:"text-left px-3 py-2 font-medium",children:"Explanation"})]})}),(0,s.jsx)("tbody",{children:g.map(e=>(0,s.jsxs)("tr",{className:"border-b border-border/20",children:[(0,s.jsx)("td",{className:"px-3 py-2 font-mono text-emerald-400",children:e.symbol}),(0,s.jsx)("td",{className:"px-3 py-2 font-mono text-sky-400",children:e.code}),(0,s.jsx)("td",{className:"px-3 py-2 text-muted-foreground",children:e.explanation})]},e.symbol))})]})})}),(0,s.jsxs)(r.iv,{title:"Champion vs Challenger — the A/B test pattern",description:"Champion = current production model. Challenger = new variant. Route 50/50 traffic, measure CTR (or whatever metric), promote if significant.",icon:(0,s.jsx)(o.A,{className:"h-5 w-5"}),children:[(0,s.jsxs)("div",{className:"prose prose-sm dark:prose-invert max-w-none space-y-3",children:[(0,s.jsxs)("p",{className:"text-sm text-muted-foreground leading-relaxed",children:[(0,s.jsx)("strong",{className:"text-foreground/80",children:"The pattern:"}),' the current production model is the "champion". You deploy a new model variant ("challenger") behind a feature flag. 50% of traffic goes to the champion, 50% to the challenger. After N users (calculated from sample size formula), you run a statistical test. If the challenger is significantly better (p < 0.05, effect > 0), promote it to champion. Otherwise, keep the champion.']}),(0,s.jsxs)("p",{className:"text-sm text-muted-foreground leading-relaxed",children:[(0,s.jsx)("strong",{className:"text-foreground/80",children:"Key insight:"}),' statistical significance ("is there a difference?") is not the same as practical significance ("is the difference big enough to matter?"). Always check the effect size (Cohen\'s d) alongside the p-value. A 0.01% improvement may be statistically significant at 1M users but not worth the deployment risk.']})]}),(0,s.jsx)("div",{className:"mt-4",children:(0,s.jsx)(i.N,{code:x,language:"python",filename:"ab_test.py"})})]}),(0,s.jsxs)(r.iv,{title:"Sample size calculation — how many users do you need?",description:"Before starting an A/B test, calculate the required sample size. This depends on: significance level (alpha), power (1-beta), baseline rate, and minimum detectable effect (MDE).",icon:(0,s.jsx)(m.A,{className:"h-5 w-5"}),children:[(0,s.jsxs)("div",{className:"prose prose-sm dark:prose-invert max-w-none space-y-3",children:[(0,s.jsxs)("p",{className:"text-sm text-muted-foreground leading-relaxed",children:[(0,s.jsx)("strong",{className:"text-foreground/80",children:"The formula:"})," ",(0,s.jsx)("code",{className:"text-emerald-400",children:"n = (z_alpha/2 + z_beta)^2 * 2 * sigma^2 / delta^2"}),". Where z_alpha/2 and z_beta are z-scores for the significance level and power, sigma^2 is the variance, and delta is the minimum detectable effect. The formula gives you the sample size PER VARIANT — multiply by 2 for a 2-variant test."]}),(0,s.jsxs)("p",{className:"text-sm text-muted-foreground leading-relaxed",children:[(0,s.jsx)("strong",{className:"text-foreground/80",children:"Rule of thumb:"})," detecting a 1% absolute improvement on a 4% baseline CTR requires ~16,000 users per variant. Detecting a 5% improvement requires ~650 users. The smaller the effect you want to detect, the more users you need — exponentially."]})]}),(0,s.jsx)("div",{className:"mt-4",children:(0,s.jsx)(i.N,{code:b,language:"python",filename:"sample_size.py"})})]}),(0,s.jsxs)(r.iv,{title:"Multi-armed bandit — Thompson sampling",description:"Instead of fixed 50/50 split, Thompson sampling dynamically allocates more traffic to the better-performing variant. Balances exploration (testing uncertain arms) with exploitation (using the best-known arm).",icon:(0,s.jsx)(h.A,{className:"h-5 w-5"}),children:[(0,s.jsxs)("div",{className:"prose prose-sm dark:prose-invert max-w-none space-y-3",children:[(0,s.jsxs)("p",{className:"text-sm text-muted-foreground leading-relaxed",children:[(0,s.jsx)("strong",{className:"text-foreground/80",children:"Thompson sampling:"})," each arm has a"," ",(0,s.jsx)("code",{className:"text-emerald-400",children:"Beta(alpha, beta)"})," posterior distribution (updated after each observation). On each round, sample from each arm's posterior and pick the highest sample. Better arms get sampled higher more often, so they get picked more. Uncertain arms (few observations) have wider posteriors, so they sometimes get picked even if their mean is lower — that's the exploration."]}),(0,s.jsxs)("p",{className:"text-sm text-muted-foreground leading-relaxed",children:[(0,s.jsx)("strong",{className:"text-foreground/80",children:"Advantage over A/B test:"})," the bandit minimizes regret (lost reward during the test) by not wasting 50% of traffic on the worse variant. Disadvantage: you don't get a clean p-value — the bandit is about maximizing reward, not about scientific certainty."]})]}),(0,s.jsx)("div",{className:"mt-4",children:(0,s.jsx)(i.N,{code:v,language:"python",filename:"thompson_sampling.py"})})]}),(0,s.jsx)(r.iv,{title:"Phase 21 Interactive Demos — A/B test simulator + alert triage",description:"2 popup-based demos: A/B Test Simulator (watch p-value converge as samples accumulate, promote when p<0.05) + Alert Triage Simulator (pick a service alert, walk through runbook steps one at a time). Same lazy-evaluation pattern.",icon:(0,s.jsx)(h.A,{className:"h-5 w-5"}),children:(0,s.jsx)(f.D,{})}),(0,s.jsx)(n.T,{relatedPages:[{id:"model-monitoring",reason:"Model monitoring (PSI drift detection). When model drift is detected, trigger an A/B test between the drifted model and a retrained challenger."},{id:"mlflow-deep-dive",reason:"MLflow tracks experiments. The A/B test results should be logged to MLflow as an experiment run."},{id:"inference-serving",reason:"The vLLM serving cluster runs the champion + challenger models. Feature flags route traffic between them."},{id:"postmortems",reason:"INC-2024-003 (model drift) is an example of what happens when you don't have an A/B test — the new region's traffic went to an untrained model without evaluation."}]})]})}},89123:(e,t,a)=>{"use strict";a.d(t,{A:()=>s});let s=(0,a(6404).A)("chart-column",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]])}},e=>{e.O(0,[6919,8500,9430,8656,9620,6722,4974,8441,3794,7358],()=>e(e.s=26974)),_N_E=e.O()}]);