(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3800],{36580:(e,t,a)=>{Promise.resolve().then(a.bind(a,96822))},96822:(e,t,a)=>{"use strict";a.d(t,{YourDatasetPage:()=>eI});var s=a(95155),r=a(12115),n=a(98500),i=a.n(n),l=a(58381),o=a(27774),c=a(60508),d=a(92194),m=a(49345),u=a(87069),p=a(45160),f=a(8195),h=a(7915),x=a(89123),g=a(41585),b=a(44071),y=a(12651);function v(e,t=2){return isFinite(e)?Math.abs(e)>=1e6?e.toExponential(2):Math.abs(e)>=1e3?e.toFixed(0):e.toFixed(t):"—"}function N(e){return e>50?"text-rose-600 dark:text-rose-400":e>10?"text-amber-600 dark:text-amber-400":"text-emerald-600 dark:text-emerald-400"}function j({dataset:e}){let[t,a]=(0,r.useState)("preview"),[n,i]=(0,r.useState)(20),l=(0,r.useMemo)(()=>e.columns.map(t=>(function(e,t){let a=t.map(t=>t[e]),s=a.filter(e=>null!=e&&""!==e),r=a.length-s.length,n=r/a.length*100,i=s.map(e=>Number(e)).filter(e=>!isNaN(e)&&isFinite(e));if((s.length>0?i.length/s.length:0)>.8&&i.length>0){let t=function(e){let t=e.length;if(0===t)return{count:0,missing:0,missingPct:0,mean:0,median:0,std:0,min:0,q1:0,q3:0,max:0,iqr:0,skewness:0,kurtosis:0,outliers:0};let a=[...e].sort((e,t)=>e-t),s=e.reduce((e,t)=>e+t,0)/t,r=Math.sqrt(e.reduce((e,t)=>e+(t-s)**2,0)/t),n=t%2==0?(a[t/2-1]+a[t/2])/2:a[Math.floor(t/2)],i=a[Math.floor(.25*t)],l=a[Math.floor(.75*t)],o=l-i,c=i-1.5*o,d=l+1.5*o,m=e.filter(e=>e<c||e>d).length,u=r>0?e.reduce((e,t)=>e+((t-s)/r)**3,0)/t:0,p=r>0?e.reduce((e,t)=>e+((t-s)/r)**4,0)/t-3:0;return{count:t,missing:0,missingPct:0,mean:s,median:n,std:r,min:a[0],q1:i,q3:l,max:a[t-1],iqr:o,skewness:u,kurtosis:p,outliers:m}}(i);return t.missing=r,t.missingPct=n,{name:e,type:"numeric",numericStats:t}}let l=s.map(e=>String(e));if(new Set(l).size<=50){let t=function(e){let t=e.length;if(0===t)return{count:0,missing:0,missingPct:0,unique:0,mode:"",modeFreq:0,modePct:0,entropy:0,topValues:[]};let a={};for(let t of e)a[t]=(a[t]??0)+1;let s=Object.entries(a).sort((e,t)=>t[1]-e[1]),[r,n]=s[0]??["",0],i=-s.reduce((e,[,a])=>{let s=a/t;return e+(s>0?s*Math.log2(s):0)},0);return{count:t,missing:0,missingPct:0,unique:s.length,mode:r,modeFreq:n,modePct:n/t*100,entropy:i,topValues:s.slice(0,5).map(([e,a])=>({value:e,count:a,pct:a/t*100}))}}(l);return t.missing=r,t.missingPct=n,{name:e,type:"categorical",categoricalStats:t}}return{name:e,type:"text",numericStats:{count:s.length,missing:r,missingPct:n,mean:0,median:0,std:0,min:0,q1:0,q3:0,max:0,iqr:0,skewness:0,kurtosis:0,outliers:0}}})(t,e.rows)),[e]),o=(0,r.useMemo)(()=>e.rows.slice(0,n),[e,n]),c=l.reduce((e,t)=>e+(t.numericStats?.missing??t.categoricalStats?.missing??0),0),d=e.rows.length*e.columns.length,m=d>0?c/d*100:0,u=l.filter(e=>"numeric"===e.type).length,j=l.filter(e=>"categorical"===e.type).length;return(0,s.jsxs)("div",{className:"rounded-xl border border-border/60 bg-card overflow-hidden",children:[(0,s.jsxs)("div",{className:"flex items-center justify-between border-b border-border/40 bg-muted/30 px-4 py-2.5",children:[(0,s.jsxs)("div",{className:"flex items-center gap-3",children:[(0,s.jsx)(f.A,{className:"h-4 w-4 text-primary"}),(0,s.jsx)("span",{className:"text-sm font-semibold",children:"Data Overview"}),(0,s.jsxs)("div",{className:"flex items-center gap-1.5 ml-2",children:[(0,s.jsxs)(p.E,{variant:"outline",className:"text-[9px]",children:[e.rows.length.toLocaleString()," rows"]}),(0,s.jsxs)(p.E,{variant:"outline",className:"text-[9px]",children:[e.columns.length," cols"]}),(0,s.jsxs)(p.E,{variant:"outline",className:"text-[9px]",children:[u," numeric"]}),(0,s.jsxs)(p.E,{variant:"outline",className:"text-[9px]",children:[j," categorical"]})]})]}),(0,s.jsxs)("div",{className:"flex items-center gap-1",children:[(0,s.jsxs)("button",{onClick:()=>a("preview"),className:`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${"preview"===t?"bg-primary text-primary-foreground":"hover:bg-muted"}`,children:[(0,s.jsx)(h.A,{className:"h-3.5 w-3.5"})," Preview"]}),(0,s.jsxs)("button",{onClick:()=>a("stats"),className:`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${"stats"===t?"bg-primary text-primary-foreground":"hover:bg-muted"}`,children:[(0,s.jsx)(x.A,{className:"h-3.5 w-3.5"})," Statistics"]}),(0,s.jsxs)("button",{onClick:()=>a("missing"),className:`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${"missing"===t?"bg-primary text-primary-foreground":"hover:bg-muted"}`,children:[(0,s.jsx)(g.A,{className:"h-3.5 w-3.5"})," Missing Data",m>0&&(0,s.jsxs)("span",{className:`ml-0.5 text-[9px] ${N(m)}`,children:[m.toFixed(1),"%"]})]})]})]}),(0,s.jsxs)("div",{className:"p-4",children:["preview"===t&&(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{className:"flex items-center justify-between mb-2",children:[(0,s.jsxs)("p",{className:"text-xs text-muted-foreground",children:["Showing first ",(0,s.jsx)("strong",{children:Math.min(n,e.rows.length)})," of"," ",(0,s.jsx)("strong",{children:e.rows.length.toLocaleString()})," rows"]}),(0,s.jsxs)("select",{value:n,onChange:e=>i(Number(e.target.value)),className:"text-xs rounded-md border border-border/40 bg-background px-2 py-1",children:[(0,s.jsx)("option",{value:10,children:"10 rows"}),(0,s.jsx)("option",{value:20,children:"20 rows"}),(0,s.jsx)("option",{value:50,children:"50 rows"}),(0,s.jsx)("option",{value:100,children:"100 rows"})]})]}),(0,s.jsx)("div",{className:"overflow-x-auto rounded-lg border border-border/40",style:{maxHeight:"400px"},children:(0,s.jsxs)("table",{className:"w-full text-xs",children:[(0,s.jsx)("thead",{className:"sticky top-0 bg-muted/80 backdrop-blur z-10",children:(0,s.jsxs)("tr",{className:"border-b border-border/40",children:[(0,s.jsx)("th",{className:"text-left p-2 font-medium text-muted-foreground w-8",children:"#"}),e.columns.map(e=>{let t=l.find(t=>t.name===e);return(0,s.jsxs)("th",{className:"text-left p-2 font-semibold whitespace-nowrap",children:[(0,s.jsxs)("div",{className:"flex items-center gap-1",children:[(0,s.jsx)("span",{className:"font-mono text-foreground",children:e}),t&&(0,s.jsx)("span",{className:`inline-block w-1.5 h-1.5 rounded-full ${"numeric"===t.type?"bg-blue-500":"categorical"===t.type?"bg-emerald-500":"temporal"===t.type?"bg-amber-500":"bg-zinc-500"}`,title:t.type})]}),t&&(0,s.jsx)("span",{className:"text-[8px] uppercase text-muted-foreground font-normal",children:t.type})]},e)})]})}),(0,s.jsx)("tbody",{children:o.map((t,a)=>(0,s.jsxs)("tr",{className:"border-b border-border/20 hover:bg-muted/20",children:[(0,s.jsx)("td",{className:"p-2 text-muted-foreground font-mono text-[10px]",children:a+1}),e.columns.map(e=>{let a=t[e],r=l.find(t=>t.name===e),n=r?.type==="numeric";return(0,s.jsx)("td",{className:`p-2 font-mono text-[11px] whitespace-nowrap max-w-[200px] overflow-hidden text-ellipsis ${null==a||""===a?"text-rose-400 italic":n?"text-blue-600 dark:text-blue-400 text-right":"text-foreground"}`,title:String(a??"null"),children:null==a||""===a?"NaN":"number"==typeof a?isFinite(a)?v(a,4):String(a):String(a).slice(0,50)},e)})]},a))})]})}),(0,s.jsxs)("div",{className:"flex items-center gap-4 mt-2 text-[10px] text-muted-foreground",children:[(0,s.jsxs)("span",{className:"flex items-center gap-1",children:[(0,s.jsx)("span",{className:"w-1.5 h-1.5 rounded-full bg-blue-500"})," Numeric"]}),(0,s.jsxs)("span",{className:"flex items-center gap-1",children:[(0,s.jsx)("span",{className:"w-1.5 h-1.5 rounded-full bg-emerald-500"})," Categorical"]}),(0,s.jsxs)("span",{className:"flex items-center gap-1",children:[(0,s.jsx)("span",{className:"w-1.5 h-1.5 rounded-full bg-amber-500"})," Temporal"]}),(0,s.jsxs)("span",{className:"flex items-center gap-1",children:[(0,s.jsx)("span",{className:"w-1.5 h-1.5 rounded-full bg-zinc-500"})," Text"]}),(0,s.jsx)("span",{className:"text-rose-400 italic",children:"NaN = missing/null"})]})]}),"stats"===t&&(0,s.jsxs)("div",{className:"overflow-x-auto",children:[(0,s.jsxs)("p",{className:"text-xs text-muted-foreground mb-2",children:["Descriptive statistics per column (computed client-side, like pandas"," ",(0,s.jsx)("code",{className:"font-mono text-primary",children:".describe()"}),").",u," numeric + ",j," categorical columns analyzed."]}),l.filter(e=>"numeric"===e.type&&e.numericStats).length>0&&(0,s.jsxs)("div",{className:"mb-4",children:[(0,s.jsx)("p",{className:"text-[10px] uppercase tracking-wider text-muted-foreground font-medium mb-1.5",children:"Numeric columns"}),(0,s.jsxs)("table",{className:"w-full text-xs",children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{className:"border-b border-border/40 text-muted-foreground",children:[(0,s.jsx)("th",{className:"text-left p-2 font-medium",children:"Column"}),(0,s.jsx)("th",{className:"text-right p-2 font-medium",children:"N"}),(0,s.jsx)("th",{className:"text-right p-2 font-medium",children:"Mean"}),(0,s.jsx)("th",{className:"text-right p-2 font-medium",children:"Median"}),(0,s.jsx)("th",{className:"text-right p-2 font-medium",children:"Std"}),(0,s.jsx)("th",{className:"text-right p-2 font-medium",children:"Min"}),(0,s.jsx)("th",{className:"text-right p-2 font-medium",children:"Q1"}),(0,s.jsx)("th",{className:"text-right p-2 font-medium",children:"Q3"}),(0,s.jsx)("th",{className:"text-right p-2 font-medium",children:"Max"}),(0,s.jsx)("th",{className:"text-right p-2 font-medium",children:"IQR"}),(0,s.jsx)("th",{className:"text-right p-2 font-medium",children:"Skew"}),(0,s.jsx)("th",{className:"text-right p-2 font-medium",children:"Kurt"}),(0,s.jsx)("th",{className:"text-right p-2 font-medium",children:"Outliers"})]})}),(0,s.jsx)("tbody",{children:l.filter(e=>"numeric"===e.type&&e.numericStats).map(e=>{var t;let a=e.numericStats,r=(t=a.skewness)>.5?{label:"right-skewed",icon:"up"}:t<-.5?{label:"left-skewed",icon:"down"}:{label:"symmetric",icon:"flat"};return(0,s.jsxs)("tr",{className:"border-b border-border/20 hover:bg-muted/20",children:[(0,s.jsx)("td",{className:"p-2 font-mono font-semibold text-blue-600 dark:text-blue-400",children:e.name}),(0,s.jsx)("td",{className:"p-2 text-right font-mono",children:a.count}),(0,s.jsx)("td",{className:"p-2 text-right font-mono",children:v(a.mean)}),(0,s.jsx)("td",{className:"p-2 text-right font-mono",children:v(a.median)}),(0,s.jsx)("td",{className:"p-2 text-right font-mono",children:v(a.std)}),(0,s.jsx)("td",{className:"p-2 text-right font-mono text-muted-foreground",children:v(a.min)}),(0,s.jsx)("td",{className:"p-2 text-right font-mono text-muted-foreground",children:v(a.q1)}),(0,s.jsx)("td",{className:"p-2 text-right font-mono text-muted-foreground",children:v(a.q3)}),(0,s.jsx)("td",{className:"p-2 text-right font-mono text-muted-foreground",children:v(a.max)}),(0,s.jsx)("td",{className:"p-2 text-right font-mono",children:v(a.iqr)}),(0,s.jsx)("td",{className:`p-2 text-right font-mono ${a.skewness>.5||a.skewness<-.5?"text-amber-600":"text-emerald-600"}`,title:r.label,children:v(a.skewness,3)}),(0,s.jsx)("td",{className:"p-2 text-right font-mono",children:v(a.kurtosis,3)}),(0,s.jsx)("td",{className:`p-2 text-right font-mono ${a.outliers>0?"text-rose-600 dark:text-rose-400":"text-muted-foreground"}`,children:a.outliers>0?`${a.outliers} ⚠`:"0"})]},e.name)})})]})]}),l.filter(e=>"categorical"===e.type&&e.categoricalStats).length>0&&(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{className:"text-[10px] uppercase tracking-wider text-muted-foreground font-medium mb-1.5",children:"Categorical columns"}),(0,s.jsxs)("table",{className:"w-full text-xs",children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{className:"border-b border-border/40 text-muted-foreground",children:[(0,s.jsx)("th",{className:"text-left p-2 font-medium",children:"Column"}),(0,s.jsx)("th",{className:"text-right p-2 font-medium",children:"N"}),(0,s.jsx)("th",{className:"text-right p-2 font-medium",children:"Unique"}),(0,s.jsx)("th",{className:"text-left p-2 font-medium",children:"Mode"}),(0,s.jsx)("th",{className:"text-right p-2 font-medium",children:"Mode %"}),(0,s.jsx)("th",{className:"text-right p-2 font-medium",children:"Entropy (bits)"}),(0,s.jsx)("th",{className:"text-left p-2 font-medium",children:"Top 5 values"})]})}),(0,s.jsx)("tbody",{children:l.filter(e=>"categorical"===e.type&&e.categoricalStats).map(e=>{let t=e.categoricalStats;return(0,s.jsxs)("tr",{className:"border-b border-border/20 hover:bg-muted/20",children:[(0,s.jsx)("td",{className:"p-2 font-mono font-semibold text-emerald-600 dark:text-emerald-400",children:e.name}),(0,s.jsx)("td",{className:"p-2 text-right font-mono",children:t.count}),(0,s.jsx)("td",{className:"p-2 text-right font-mono",children:t.unique}),(0,s.jsx)("td",{className:"p-2 font-mono truncate max-w-[100px]",title:t.mode,children:t.mode}),(0,s.jsxs)("td",{className:"p-2 text-right font-mono",children:[t.modePct.toFixed(1),"%"]}),(0,s.jsx)("td",{className:`p-2 text-right font-mono ${t.entropy>3?"text-blue-600":"text-muted-foreground"}`,children:t.entropy.toFixed(3)}),(0,s.jsx)("td",{className:"p-2",children:(0,s.jsx)("div",{className:"flex flex-wrap gap-1",children:t.topValues.map((e,t)=>(0,s.jsxs)("span",{className:"text-[9px] px-1.5 py-0.5 rounded bg-muted/40 font-mono",title:`${e.count} (${e.pct.toFixed(1)}%)`,children:[e.value.slice(0,12)," (",e.pct.toFixed(0),"%)"]},t))})})]},e.name)})})]})]}),(0,s.jsxs)("div",{className:"flex flex-wrap items-center gap-3 mt-3 text-[10px] text-muted-foreground",children:[(0,s.jsxs)("span",{className:"flex items-center gap-1",children:[(0,s.jsx)(b.A,{className:"h-3 w-3 text-amber-600"})," |skew| > 0.5 = skewed"]}),(0,s.jsxs)("span",{className:"flex items-center gap-1",children:[(0,s.jsx)(g.A,{className:"h-3 w-3 text-rose-600"})," Outliers (IQR method)"]}),(0,s.jsxs)("span",{className:"flex items-center gap-1",children:[(0,s.jsx)(f.A,{className:"h-3 w-3 text-blue-600"})," Entropy > 3 bits = high information"]})]})]}),"missing"===t&&(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:"flex items-center gap-4 mb-3",children:(0,s.jsxs)("div",{className:`rounded-lg border p-3 flex-1 ${m>10?"border-rose-500/40 bg-rose-500/5":"border-emerald-500/40 bg-emerald-500/5"}`,children:[(0,s.jsxs)("p",{className:"text-xs font-medium flex items-center gap-2",children:[m>10?(0,s.jsx)(g.A,{className:"h-4 w-4 text-rose-600"}):(0,s.jsx)(y.A,{className:"h-4 w-4 text-emerald-600"}),"Overall missing:"," ",(0,s.jsxs)("strong",{className:N(m),children:[m.toFixed(2),"%"]})]}),(0,s.jsxs)("p",{className:"text-[10px] text-muted-foreground mt-0.5",children:[c.toLocaleString()," missing cells out of ",d.toLocaleString()," ","total"]})]})}),(0,s.jsxs)("table",{className:"w-full text-xs",children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{className:"border-b border-border/40 text-muted-foreground",children:[(0,s.jsx)("th",{className:"text-left p-2 font-medium",children:"Column"}),(0,s.jsx)("th",{className:"text-left p-2 font-medium",children:"Type"}),(0,s.jsx)("th",{className:"text-right p-2 font-medium",children:"Total"}),(0,s.jsx)("th",{className:"text-right p-2 font-medium",children:"Missing"}),(0,s.jsx)("th",{className:"text-right p-2 font-medium",children:"Missing %"}),(0,s.jsx)("th",{className:"text-left p-2 font-medium w-1/3",children:"Completeness"})]})}),(0,s.jsx)("tbody",{children:l.map(e=>{let t=e.numericStats??e.categoricalStats;if(!t)return null;let a=t.missingPct;return(0,s.jsxs)("tr",{className:"border-b border-border/20 hover:bg-muted/20",children:[(0,s.jsx)("td",{className:"p-2 font-mono font-semibold",children:e.name}),(0,s.jsx)("td",{className:"p-2",children:(0,s.jsx)(p.E,{variant:"outline",className:`text-[9px] ${"numeric"===e.type?"border-blue-500/30 text-blue-600":"categorical"===e.type?"border-emerald-500/30 text-emerald-600":"border-zinc-500/30 text-zinc-600"}`,children:e.type})}),(0,s.jsx)("td",{className:"p-2 text-right font-mono",children:t.count+t.missing}),(0,s.jsx)("td",{className:`p-2 text-right font-mono ${N(a)}`,children:t.missing}),(0,s.jsxs)("td",{className:`p-2 text-right font-mono ${N(a)}`,children:[a.toFixed(2),"%"]}),(0,s.jsx)("td",{className:"p-2",children:(0,s.jsxs)("div",{className:"flex items-center gap-1",children:[(0,s.jsx)("div",{className:"flex-1 h-3 rounded-full bg-muted overflow-hidden",children:(0,s.jsx)("div",{className:`h-full rounded-full ${a>50?"bg-rose-500":a>10?"bg-amber-500":"bg-emerald-500"}`,style:{width:`${100-a}%`}})}),(0,s.jsxs)("span",{className:"text-[10px] font-mono text-muted-foreground w-10 text-right",children:[(100-a).toFixed(1),"%"]})]})})]},e.name)})})]}),(0,s.jsxs)("div",{className:"flex items-center gap-4 mt-3 text-[10px] text-muted-foreground",children:[(0,s.jsxs)("span",{className:"flex items-center gap-1",children:[(0,s.jsx)("span",{className:"w-3 h-3 rounded bg-emerald-500"})," Complete (<10% missing)"]}),(0,s.jsxs)("span",{className:"flex items-center gap-1",children:[(0,s.jsx)("span",{className:"w-3 h-3 rounded bg-amber-500"})," Caution (10-50% missing)"]}),(0,s.jsxs)("span",{className:"flex items-center gap-1",children:[(0,s.jsx)("span",{className:"w-3 h-3 rounded bg-rose-500"})," Critical (>50% missing)"]})]})]})]})]})}var _=a(4450),w=a(12242),S=a(28408),A=a(32539),k=a(59656),C=a(12945),$=a(18662),R=a(17983),T=a(21973);function M({dataset:e}){let t=(0,r.useMemo)(()=>e.columns.filter(t=>{let a=e.rows.slice(0,100).map(e=>e[t]);return a.filter(e=>null!=e&&""!==e).map(Number).filter(e=>!isNaN(e)&&isFinite(e)).length>.8*a.filter(e=>null!=e&&""!==e).length}),[e]),[a,n]=(0,r.useState)(t[0]??""),[i,l]=(0,r.useState)(t[1]??t[0]??""),[o,c]=(0,r.useState)(""),d=(0,r.useMemo)(()=>a&&i?e.rows.slice(0,1e3).map((e,t)=>{let s=Number(e[a]),r=Number(e[i]);if(isNaN(s)||isNaN(r))return null;let n={x:s,y:r,idx:t};return o&&(n[o]=e[o]),n}).filter(Boolean):[],[e,a,i,o]),m=(0,r.useMemo)(()=>{if(d.length<2)return null;let e=d.map(e=>Number(e.x)),t=d.map(e=>Number(e.y)),a=e.length,s=e.reduce((e,t)=>e+t,0)/a,r=t.reduce((e,t)=>e+t,0)/a,n=e.reduce((e,a,n)=>e+(a-s)*(t[n]-r),0)/a,i=Math.sqrt(e.reduce((e,t)=>e+(t-s)**2,0)/a),l=Math.sqrt(t.reduce((e,t)=>e+(t-r)**2,0)/a);return i>0&&l>0?n/(i*l):0},[d]),u=(0,r.useMemo)(()=>{if(d.length<2||null===m)return null;let e=d.map(e=>Number(e.x)),t=d.map(e=>Number(e.y)),a=e.length,s=e.reduce((e,t)=>e+t,0)/a,r=t.reduce((e,t)=>e+t,0)/a,n=e.reduce((e,a,n)=>e+(a-s)*(t[n]-r),0)/e.reduce((e,t)=>e+(t-s)**2,0);return{slope:n,intercept:r-n*s}},[d,m]),f=(0,r.useMemo)(()=>e.columns.filter(t=>{if(t===a||t===i)return!1;let s=new Set(e.rows.slice(0,200).map(e=>String(e[t]??"")));return s.size>1&&s.size<=20}),[e,a,i]);return t.length<2?(0,s.jsx)("div",{className:"rounded-xl border border-border/60 bg-card p-4 text-center",children:(0,s.jsxs)("p",{className:"text-sm text-muted-foreground",children:["Need at least 2 numeric columns for a scatter plot. This dataset has"," ",t.length,"."]})}):(0,s.jsxs)("div",{className:"rounded-xl border border-border/60 bg-card overflow-hidden",children:[(0,s.jsx)("div",{className:"flex items-center justify-between border-b border-border/40 bg-muted/30 px-4 py-2.5",children:(0,s.jsxs)("div",{className:"flex items-center gap-2",children:[(0,s.jsx)(b.A,{className:"h-4 w-4 text-primary"}),(0,s.jsx)("span",{className:"text-sm font-semibold",children:"Interactive Scatter Plot"}),null!==m&&(0,s.jsxs)(p.E,{variant:"outline",className:`text-[9px] ${Math.abs(m)>.7?"border-rose-500/30 text-rose-600":Math.abs(m)>.3?"border-amber-500/30 text-amber-600":"border-zinc-500/30 text-zinc-600"}`,children:["ρ = ",m.toFixed(4)]}),u&&(0,s.jsxs)(p.E,{variant:"outline",className:"text-[9px]",children:["y = ",u.slope.toFixed(4),"x + ",u.intercept.toFixed(2)]})]})}),(0,s.jsxs)("div",{className:"p-4",children:[(0,s.jsxs)("div",{className:"flex items-center gap-3 mb-3 flex-wrap",children:[(0,s.jsxs)("div",{className:"flex items-center gap-2",children:[(0,s.jsx)("label",{className:"text-xs font-medium text-muted-foreground",children:"X:"}),(0,s.jsx)("select",{value:a,onChange:e=>n(e.target.value),className:"text-xs rounded-md border border-border/40 bg-background px-2 py-1.5",children:t.map(e=>(0,s.jsx)("option",{value:e,children:e},e))})]}),(0,s.jsxs)("div",{className:"flex items-center gap-2",children:[(0,s.jsx)("label",{className:"text-xs font-medium text-muted-foreground",children:"Y:"}),(0,s.jsx)("select",{value:i,onChange:e=>l(e.target.value),className:"text-xs rounded-md border border-border/40 bg-background px-2 py-1.5",children:t.map(e=>(0,s.jsx)("option",{value:e,children:e},e))})]}),f.length>0&&(0,s.jsxs)("div",{className:"flex items-center gap-2",children:[(0,s.jsx)("label",{className:"text-xs font-medium text-muted-foreground",children:"Color by:"}),(0,s.jsxs)("select",{value:o,onChange:e=>c(e.target.value),className:"text-xs rounded-md border border-border/40 bg-background px-2 py-1.5",children:[(0,s.jsx)("option",{value:"",children:"None"}),f.map(e=>(0,s.jsx)("option",{value:e,children:e},e))]})]}),(0,s.jsxs)("span",{className:"text-[10px] text-muted-foreground ml-auto",children:[d.length.toLocaleString()," points (max 1000)"]})]}),(0,s.jsx)("div",{style:{width:"100%",height:400},children:(0,s.jsx)(_.u,{children:(0,s.jsxs)(w.t,{margin:{top:10,right:30,bottom:40,left:10},children:[(0,s.jsx)(S.d,{strokeDasharray:"3 3",opacity:.2}),(0,s.jsx)(A.W,{type:"number",dataKey:"x",name:a,label:{value:a,position:"bottom",offset:10,style:{fontSize:11}},tick:{fontSize:10}}),(0,s.jsx)(k.h,{type:"number",dataKey:"y",name:i,label:{value:i,angle:-90,position:"insideLeft",style:{fontSize:11}},tick:{fontSize:10}}),(0,s.jsx)(C.K,{range:[40,40]}),(0,s.jsx)($.m,{cursor:{strokeDasharray:"3 3"},content:({active:e,payload:t})=>{if(!e||!t?.length)return null;let r=t[0].payload;return(0,s.jsxs)("div",{className:"rounded-md border border-border/60 bg-background p-2 text-xs shadow-lg",children:[(0,s.jsxs)("p",{className:"font-mono",children:[a,": ",Number(r.x).toFixed(4)]}),(0,s.jsxs)("p",{className:"font-mono",children:[i,": ",Number(r.y).toFixed(4)]}),o&&r[o]?(0,s.jsx)("p",{className:"font-mono text-muted-foreground",children:`${o}: ${String(r[o])}`}):null]})}}),(0,s.jsx)(R.X,{data:d,fill:"oklch(0.65 0.18 250)",fillOpacity:.6}),u&&(0,s.jsx)(T.e,{segment:[{x:Math.min(...d.map(e=>Number(e.x))),y:u.intercept+u.slope*Math.min(...d.map(e=>Number(e.x)))},{x:Math.max(...d.map(e=>Number(e.x))),y:u.intercept+u.slope*Math.max(...d.map(e=>Number(e.x)))}],stroke:"oklch(0.55 0.20 25)",strokeWidth:2,strokeDasharray:"5 3"})]})})}),null!==m&&(0,s.jsx)("div",{className:"mt-3 rounded-md border border-border/40 bg-muted/20 p-2",children:(0,s.jsxs)("p",{className:"text-[11px] text-muted-foreground",children:[(0,s.jsx)("strong",{className:"text-foreground",children:"Interpretation:"})," Pearson ρ ="," ",(0,s.jsx)("strong",{children:m.toFixed(4)})," — ",Math.abs(m)>.7?"strong ":Math.abs(m)>.3?"moderate ":"weak ",m>0?"positive":"negative"," correlation.",u&&` Linear fit: y = ${u.slope.toFixed(4)}\xd7${a} + ${u.intercept.toFixed(2)}.`,.1>Math.abs(m)&&" The relationship may be non-linear, or the variables are independent."]})})]})]})}var F=a(66349),E=a(25221),D=a(62791);let P=[{id:"ttest",name:"Two-sample t-test",desc:"Compare means of 2 groups. H₀: μ₁ = μ₂",needsGroup:!0,minGroups:2,maxGroups:2},{id:"anova",name:"One-way ANOVA",desc:"Compare means across 3+ groups. H₀: all means equal",needsGroup:!0,minGroups:3,maxGroups:99},{id:"kruskal",name:"Kruskal-Wallis",desc:"Non-parametric ANOVA. H₀: same distribution",needsGroup:!0,minGroups:2,maxGroups:99},{id:"shapiro",name:"Shapiro-Wilk normality",desc:"Test if data is normally distributed. H₀: data is normal",needsGroup:!1,minGroups:0,maxGroups:0},{id:"pearson_test",name:"Pearson correlation test",desc:"Test if correlation is significant. H₀: ρ = 0",needsGroup:!1,needsTwoNumeric:!0,minGroups:0,maxGroups:0}];function O({dataset:e}){let[t,a]=(0,r.useState)("ttest"),[n,i]=(0,r.useState)(""),[l,o]=(0,r.useState)(""),[c,d]=(0,r.useState)(""),[m,u]=(0,r.useState)(null),p=(0,r.useMemo)(()=>e.columns.filter(t=>{let a=e.rows.slice(0,100).map(e=>e[t]);return a.filter(e=>null!=e&&""!==e).map(Number).filter(e=>!isNaN(e)&&isFinite(e)).length>.8*a.filter(e=>null!=e&&""!==e).length}),[e]),f=(0,r.useMemo)(()=>e.columns.filter(t=>{let a=new Set(e.rows.slice(0,500).map(e=>String(e[t]??"")));return a.size>1&&a.size<=30}),[e]),h=P.find(e=>e.id===t),x=(0,r.useMemo)(()=>JSON.stringify(e.rows.slice(0,1e3).map(t=>{let a={};for(let s of e.columns.slice(0,20))a[s]=t[s];return a})),[e]),g=(0,r.useMemo)(()=>{if(!n)return"";var e=c||n;let a=`import pandas as pd, numpy as np, json
from scipy import stats
_USER_DATA_JSON = ${x}
df = pd.DataFrame(json.loads(_USER_DATA_JSON))
`;switch(t){case"ttest":return a+`
groups = df.groupby('${e}')['${n}'].apply(list)
if len(groups) < 2:
    print(json.dumps({"error": "Need at least 2 groups"}))
else:
    g1, g2 = groups.iloc[0], groups.iloc[1]
    t_stat, p_val = stats.ttest_ind(g1, g2, nan_policy='omit')
    print(json.dumps({
        "test": "Two-sample t-test (Welch's)",
        "group_col": "${e}", "value_col": "${n}",
        "group1": str(groups.index[0]), "group2": str(groups.index[1]),
        "n1": len(g1), "n2": len(g2),
        "mean1": round(float(np.nanmean(g1)), 4), "mean2": round(float(np.nanmean(g2)), 4),
        "t_statistic": round(float(t_stat), 4),
        "p_value": float(p_val) if not np.isnan(p_val) else None,
        "df": round(float(len(g1) + len(g2) - 2), 0),
        "significant": bool(p_val < 0.05) if not np.isnan(p_val) else False,
        "interpretation": f"t={t_stat:.3f}, p={p_val:.4f}. {'Reject H0: means differ significantly' if p_val < 0.05 else 'Fail to reject H0: no significant difference'}",
    }))
`;case"anova":return a+`
groups = [g for _, g in df.groupby('${e}')['${n}'] if len(g) > 0]
if len(groups) < 2:
    print(json.dumps({"error": "Need at least 2 groups"}))
else:
    f_stat, p_val = stats.f_oneway(*groups)
    print(json.dumps({
        "test": "One-way ANOVA",
        "group_col": "${e}", "value_col": "${n}",
        "n_groups": len(groups),
        "total_n": sum(len(g) for g in groups),
        "f_statistic": round(float(f_stat), 4),
        "p_value": float(p_val) if not np.isnan(p_val) else None,
        "df_between": len(groups) - 1,
        "df_within": sum(len(g) for g in groups) - len(groups),
        "significant": bool(p_val < 0.05) if not np.isnan(p_val) else False,
        "interpretation": f"F={f_stat:.3f}, p={p_val:.4f}. {'Reject H0: at least one group mean differs' if p_val < 0.05 else 'Fail to reject H0: all group means equal'}",
    }))
`;case"kruskal":return a+`
groups = [g.dropna().values for _, g in df.groupby('${e}')['${n}'] if len(g.dropna()) > 0]
if len(groups) < 2:
    print(json.dumps({"error": "Need at least 2 groups"}))
else:
    h_stat, p_val = stats.kruskal(*groups)
    print(json.dumps({
        "test": "Kruskal-Wallis H-test",
        "group_col": "${e}", "value_col": "${n}",
        "n_groups": len(groups),
        "h_statistic": round(float(h_stat), 4),
        "p_value": float(p_val) if not np.isnan(p_val) else None,
        "df": len(groups) - 1,
        "significant": bool(p_val < 0.05) if not np.isnan(p_val) else False,
        "interpretation": f"H={h_stat:.3f}, p={p_val:.4f}. {'Reject H0: distributions differ' if p_val < 0.05 else 'Fail to reject H0: same distribution'}",
    }))
`;case"shapiro":return a+`
data = df['${n}'].dropna().values[:5000]  # Shapiro max is 5000
if len(data) < 3:
    print(json.dumps({"error": "Need at least 3 values"}))
else:
    w_stat, p_val = stats.shapiro(data)
    print(json.dumps({
        "test": "Shapiro-Wilk normality test",
        "value_col": "${n}",
        "n": len(data),
        "w_statistic": round(float(w_stat), 4),
        "p_value": float(p_val) if not np.isnan(p_val) else None,
        "is_normal": bool(p_val >= 0.05) if not np.isnan(p_val) else False,
        "interpretation": f"W={w_stat:.4f}, p={p_val:.4f}. {'Data is approximately normal (fail to reject H0)' if p_val >= 0.05 else 'Data is NOT normal (reject H0) — consider non-parametric tests or log transform'}",
    }))
`;case"pearson_test":return a+`
x = df['${n}'].dropna()
y = df['${l??n}'].dropna()
# Align on common indices
common = df[['${n}', '${l??n}']].dropna()
x = common['${n}'].values
y = common['${l??n}'].values
if len(x) < 3:
    print(json.dumps({"error": "Need at least 3 paired values"}))
else:
    r, p_val = stats.pearsonr(x, y)
    print(json.dumps({
        "test": "Pearson correlation test",
        "col1": "${n}", "col2": "${l??n}",
        "n": len(x),
        "correlation_r": round(float(r), 4),
        "p_value": float(p_val) if not np.isnan(p_val) else None,
        "significant": bool(p_val < 0.05) if not np.isnan(p_val) else False,
        "interpretation": f"r={r:.4f}, p={p_val:.4f}. {'Correlation is significant' if p_val < 0.05 else 'Correlation is NOT significant'}",
    }))
`;default:return""}},[t,n,c,l,x]);return 0===p.length?(0,s.jsx)("div",{className:"rounded-xl border border-border/60 bg-card p-4 text-center",children:(0,s.jsx)("p",{className:"text-sm text-muted-foreground",children:"Need at least 1 numeric column for statistical tests."})}):(0,s.jsxs)("div",{className:"rounded-xl border border-border/60 bg-card overflow-hidden",children:[(0,s.jsxs)("div",{className:"flex items-center gap-2 border-b border-border/40 bg-muted/30 px-4 py-2.5",children:[(0,s.jsx)(E.A,{className:"h-4 w-4 text-primary"}),(0,s.jsx)("span",{className:"text-sm font-semibold",children:"Statistical Tests"}),(0,s.jsx)("span",{className:"text-[10px] text-muted-foreground",children:"via Pyodide (scipy.stats)"})]}),(0,s.jsxs)("div",{className:"p-4 space-y-3",children:[(0,s.jsx)("div",{className:"flex items-center gap-2 flex-wrap",children:P.map(e=>(0,s.jsx)("button",{onClick:()=>{a(e.id),u(null)},className:`text-[10px] px-2.5 py-1.5 rounded-md border transition-colors ${t===e.id?"border-primary bg-primary/5 text-primary font-medium":"border-border/40 hover:border-primary/40"}`,title:e.desc,children:e.name},e.id))}),(0,s.jsxs)("p",{className:"text-[10px] text-muted-foreground",children:[h.desc,". H₀ = null hypothesis."]}),(0,s.jsxs)("div",{className:"flex items-center gap-3 flex-wrap",children:[(0,s.jsxs)("div",{className:"flex items-center gap-2",children:[(0,s.jsx)("label",{className:"text-xs font-medium text-muted-foreground",children:"pearson_test"===t?"X:":"Value:"}),(0,s.jsxs)("select",{value:n,onChange:e=>{i(e.target.value),u(null)},className:"text-xs rounded-md border border-border/40 bg-background px-2 py-1.5",children:[(0,s.jsx)("option",{value:"",children:"Choose…"}),p.map(e=>(0,s.jsx)("option",{value:e,children:e},e))]})]}),h.needsGroup&&(0,s.jsxs)("div",{className:"flex items-center gap-2",children:[(0,s.jsx)("label",{className:"text-xs font-medium text-muted-foreground",children:"Group by:"}),(0,s.jsxs)("select",{value:c,onChange:e=>{d(e.target.value),u(null)},className:"text-xs rounded-md border border-border/40 bg-background px-2 py-1.5",children:[(0,s.jsx)("option",{value:"",children:"Choose…"}),f.map(e=>(0,s.jsx)("option",{value:e,children:e},e))]})]}),h.needsTwoNumeric&&(0,s.jsxs)("div",{className:"flex items-center gap-2",children:[(0,s.jsx)("label",{className:"text-xs font-medium text-muted-foreground",children:"Y:"}),(0,s.jsxs)("select",{value:l,onChange:e=>{o(e.target.value),u(null)},className:"text-xs rounded-md border border-border/40 bg-background px-2 py-1.5",children:[(0,s.jsx)("option",{value:"",children:"Choose…"}),p.filter(e=>e!==n).map(e=>(0,s.jsx)("option",{value:e,children:e},e))]})]})]}),g&&(0,s.jsx)("div",{className:"rounded-md border border-primary/30 bg-primary/5 p-2",children:(0,s.jsx)(F.l,{code:g,buttonLabel:"Run statistical test",onOutput:e=>{try{let t=e.indexOf("{"),a=e.lastIndexOf("}");t>=0&&a>t&&u(JSON.parse(e.substring(t,a+1)))}catch{}},hideTextOutput:!!m,compact:!0})}),m&&(0,s.jsx)("div",{className:"rounded-md border border-border/40 bg-muted/20 p-3 space-y-2",children:m.error?(0,s.jsxs)("p",{className:"text-xs text-rose-600",children:["⚠ ",String(m.error)]}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-2",children:[void 0!==m.t_statistic&&(0,s.jsxs)("div",{className:"text-center",children:[(0,s.jsx)("p",{className:"text-[9px] uppercase text-muted-foreground",children:"t-statistic"}),(0,s.jsx)("p",{className:"text-lg font-bold font-mono",children:String(m.t_statistic)})]}),void 0!==m.f_statistic&&(0,s.jsxs)("div",{className:"text-center",children:[(0,s.jsx)("p",{className:"text-[9px] uppercase text-muted-foreground",children:"F-statistic"}),(0,s.jsx)("p",{className:"text-lg font-bold font-mono",children:String(m.f_statistic)})]}),void 0!==m.h_statistic&&(0,s.jsxs)("div",{className:"text-center",children:[(0,s.jsx)("p",{className:"text-[9px] uppercase text-muted-foreground",children:"H-statistic"}),(0,s.jsx)("p",{className:"text-lg font-bold font-mono",children:String(m.h_statistic)})]}),void 0!==m.w_statistic&&(0,s.jsxs)("div",{className:"text-center",children:[(0,s.jsx)("p",{className:"text-[9px] uppercase text-muted-foreground",children:"W-statistic"}),(0,s.jsx)("p",{className:"text-lg font-bold font-mono",children:String(m.w_statistic)})]}),void 0!==m.correlation_r&&(0,s.jsxs)("div",{className:"text-center",children:[(0,s.jsx)("p",{className:"text-[9px] uppercase text-muted-foreground",children:"r (correlation)"}),(0,s.jsx)("p",{className:"text-lg font-bold font-mono",children:String(m.correlation_r)})]}),void 0!==m.p_value&&null!==m.p_value&&(0,s.jsxs)("div",{className:"text-center",children:[(0,s.jsx)("p",{className:"text-[9px] uppercase text-muted-foreground",children:"p-value"}),(0,s.jsx)("p",{className:`text-lg font-bold font-mono ${.05>Number(m.p_value)?"text-rose-600":"text-emerald-600"}`,children:Number(m.p_value).toExponential(3)})]}),void 0!==m.df&&(0,s.jsxs)("div",{className:"text-center",children:[(0,s.jsx)("p",{className:"text-[9px] uppercase text-muted-foreground",children:"df"}),(0,s.jsx)("p",{className:"text-lg font-bold font-mono",children:String(m.df)})]}),void 0!==m.n&&(0,s.jsxs)("div",{className:"text-center",children:[(0,s.jsx)("p",{className:"text-[9px] uppercase text-muted-foreground",children:"N"}),(0,s.jsx)("p",{className:"text-lg font-bold font-mono",children:String(m.n)})]})]}),(0,s.jsxs)("div",{className:`rounded-md p-2 flex items-center gap-2 ${m.significant?"bg-rose-500/5 border border-rose-500/30":"bg-emerald-500/5 border border-emerald-500/30"}`,children:[m.significant?(0,s.jsx)(D.A,{className:"h-4 w-4 text-rose-600 shrink-0"}):(0,s.jsx)(y.A,{className:"h-4 w-4 text-emerald-600 shrink-0"}),(0,s.jsx)("p",{className:"text-xs text-foreground/80",children:m.interpretation?String(m.interpretation):""})]}),void 0!==m.mean1&&(0,s.jsxs)("div",{className:"flex gap-4 text-xs",children:[(0,s.jsxs)("span",{children:["Group 1: ",(0,s.jsx)("strong",{children:String(m.group1)})," mean=",String(m.mean1)," ","(n=",String(m.n1),")"]}),(0,s.jsxs)("span",{children:["Group 2: ",(0,s.jsx)("strong",{children:String(m.group2)})," mean=",String(m.mean2)," ","(n=",String(m.n2),")"]})]})]})})]})]})}var L=a(89239),q=a(86901),I=a(17243),G=a(6296),B=a(13545);function U({dataset:e,profile:t}){let[n,i]=(0,r.useState)(null),[l,o]=(0,r.useState)(!1),[c,d]=(0,r.useState)(null),m=t.columns.filter(e=>"numeric"===e.type).length,u=t.columns.filter(e=>"categorical"===e.type).length,f=`A modern, abstract data visualization illustration representing a dataset with ${e.rows.length} rows and ${e.columns.length} columns (${m} numeric, ${u} categorical). The image should evoke scientific data analysis — think flowing data streams, geometric patterns, colorful correlation matrices, and statistical distributions. Style: clean, minimal, futuristic, with a color palette of deep blue, teal, and amber. No text or labels in the image.`,h=async()=>{o(!0),d(null);try{let e=(await Promise.all([a.e(9304),a.e(2290)]).then(a.bind(a,62290))).default,t=await e.create(),s=await t.images.generations.create({prompt:f,size:"1024x1024"});if(s?.data?.[0]?.url)i(s.data[0].url);else if(s?.data?.[0]?.b64_json)i(`data:image/png;base64,${s.data[0].b64_json}`);else if(s?.data?.[0]?.base64)i(`data:image/png;base64,${s.data[0].base64}`);else throw Error("No image URL in response")}catch(e){d(`AI image generation failed: ${e.message}`)}finally{o(!1)}};return(0,s.jsxs)("div",{className:"rounded-xl border border-border/60 bg-card overflow-hidden",children:[(0,s.jsxs)("div",{className:"flex items-center gap-2 border-b border-border/40 bg-muted/30 px-4 py-2.5",children:[(0,s.jsx)(q.A,{className:"h-4 w-4 text-primary"}),(0,s.jsx)("span",{className:"text-sm font-semibold",children:"AI-Generated Report Cover Image"}),(0,s.jsx)(p.E,{variant:"outline",className:"text-[9px]",children:"z-ai-web-dev-sdk"})]}),(0,s.jsx)("div",{className:"p-4",children:n?(0,s.jsxs)("div",{className:"space-y-2",children:[(0,s.jsx)("img",{src:n,alt:"AI-generated illustration for this dataset",className:"w-full rounded-lg border border-border/40"}),(0,s.jsxs)("div",{className:"flex items-center justify-between",children:[(0,s.jsxs)("p",{className:"text-[10px] text-muted-foreground italic",children:["Auto-generated by AI based on your dataset's shape (",e.rows.length,"\xd7",e.columns.length,")"]}),(0,s.jsxs)("button",{onClick:()=>{let t=document.createElement("a");t.href=n,t.download=`${e.name}-ai-cover.png`,t.click()},className:"text-[10px] px-2 py-1 rounded-md border border-border/40 hover:border-primary hover:bg-primary/5 transition-colors flex items-center gap-1",children:[(0,s.jsx)(I.A,{className:"h-3 w-3"})," Download"]})]})]}):(0,s.jsx)("div",{className:"text-center py-8",children:l?(0,s.jsxs)("div",{className:"flex flex-col items-center gap-2",children:[(0,s.jsx)(G.A,{className:"h-8 w-8 animate-spin text-primary"}),(0,s.jsx)("p",{className:"text-xs text-muted-foreground",children:"Generating AI illustration…"})]}):c?(0,s.jsxs)("div",{className:"space-y-2",children:[(0,s.jsx)(B.A,{className:"h-8 w-8 text-rose-500 mx-auto"}),(0,s.jsx)("p",{className:"text-xs text-rose-600",children:c}),(0,s.jsx)(L.$,{onClick:h,variant:"outline",size:"sm",className:"text-xs",children:"Retry"})]}):(0,s.jsxs)("div",{className:"space-y-3",children:[(0,s.jsx)(I.A,{className:"h-8 w-8 text-muted-foreground mx-auto"}),(0,s.jsxs)("p",{className:"text-xs text-muted-foreground",children:["Generate a creative, AI-illustrated cover image for your report. Based on your dataset's shape: ",e.rows.length," rows \xd7 ",e.columns.length," columns."]}),(0,s.jsxs)(L.$,{onClick:h,variant:"default",size:"sm",className:"text-xs",children:[(0,s.jsx)(q.A,{className:"h-3.5 w-3.5 mr-1.5"})," Generate AI Image"]})]})})})]})}var z=a(85404),X=a(96035),H=a(56204),W=a(31885),Q=a(33591),V=a(50538),J=a(68459);let K=[{id:"iris",name:"Iris",description:"150 rows \xd7 5 cols (4 numeric + 1 categorical). The classic ML dataset.",url:"https://raw.githubusercontent.com/mwaskom/seaborn-data/master/iris.csv",goodFor:"Classification, PCA, correlation, distribution"},{id:"penguins",name:"Penguins",description:"333 rows \xd7 7 cols. Palmer Penguins — 4 numeric + 3 categorical.",url:"https://raw.githubusercontent.com/mwaskom/seaborn-data/master/penguins.csv",goodFor:"Classification, chi-square, correlation"},{id:"titanic",name:"Titanic",description:"891 rows \xd7 12 cols. Passenger survival — mix of numeric + categorical.",url:"https://raw.githubusercontent.com/datasciencedojo/datasets/master/titanic.csv",goodFor:"Classification, frequency, chi-square, outliers"},{id:"boston",name:"Boston Housing",description:"506 rows \xd7 14 cols (all numeric). Housing prices — 13 features + target.",url:"https://raw.githubusercontent.com/selva86/datasets/master/BostonHousing.csv",goodFor:"Regression, PCA, correlation, outliers"},{id:"wine",name:"Wine Quality",description:"1599 rows \xd7 12 cols. Red Vinho Verde — 11 physicochemical + quality score.",url:"https://archive.ics.uci.edu/ml/machine-learning-databases/wine-quality/winequality-red.csv",goodFor:"Regression, classification, distribution"},{id:"telco",name:"Telco Churn",description:"7043 rows \xd7 21 cols. Telecom customer churn — classic churn-prediction dataset.",url:"https://raw.githubusercontent.com/IBM/telco-customer-churn-on-icp4d/master/data/Telco-Customer-Churn.csv",goodFor:"Classification, chi-square, frequency"}];async function Y(e){let t=await fetch(e.url);if(!t.ok)throw Error(`HTTP ${t.status}`);return function(e,t){let a=e.split(/\r?\n/).filter(e=>e.trim().length>0);if(0===a.length)return{name:t,columns:[],rows:[]};let s=a[0].split(",").map(e=>e.trim().replace(/^"|"$/g,"")),r=[];for(let e=1;e<Math.min(a.length,1001);e++){let t=a[e].split(",").map(e=>e.trim().replace(/^"|"$/g,"")),n={};for(let e=0;e<s.length;e++){let a=t[e]??"";if(""===a)n[s[e]]=null;else{let t=Number(a);n[s[e]]=!isNaN(t)&&isFinite(t)&&""!==a?t:a}}r.push(n)}return{name:t,columns:s,rows:r}}(await t.text(),e.name)}let Z=["What is the average of each numeric column?","Show the distribution of the first numeric column as a histogram","What's the correlation between the first two numeric columns?","Count the frequency of each category in the first categorical column","Show the top 5 rows sorted by the first numeric column descending","What is the median, mean, and standard deviation of each numeric column?"];function ee({dataset:e}){let[t,n]=(0,r.useState)(""),[i,l]=(0,r.useState)(!1),[o,c]=(0,r.useState)(""),[d,m]=(0,r.useState)([]),[u,f]=(0,r.useState)(null),[h,x]=(0,r.useState)(null),[g,b]=(0,r.useState)(!1),y=h??e,v=(0,r.useCallback)(async e=>{let t=K.find(t=>t.id===e);if(t){b(!0);try{let e=await Y(t);x(e),m([]),f(null)}catch{}finally{b(!1)}}},[]),N=(0,r.useMemo)(()=>{if(!y)return"No dataset loaded.";let e=y.columns.map(e=>{let t=y.rows.slice(0,5).map(t=>t[e]),a=t.map(e=>null==e||""===e?"null":"number"==typeof e?"number":"string");return`  - "${e}": ${a[0]} (sample values: ${t.slice(0,3).map(e=>JSON.stringify(e)).join(", ")})`});return`Dataset has ${y.rows.length} rows and ${y.columns.length} columns:
${e.join("\n")}`},[y]),j=(0,r.useMemo)(()=>y?JSON.stringify(y.rows.slice(0,1e3).map(e=>{let t={};for(let a of y.columns.slice(0,20))t[a]=e[a];return t})):"[]",[y]),_=(0,r.useCallback)(async()=>{if(t.trim()){l(!0),f(null),c("");try{let e=(await Promise.all([a.e(9304),a.e(2290)]).then(a.bind(a,62290))).default,s=await e.create(),r=`You are a data analysis code generator. Given a natural language question about a dataset, generate Python code that uses pandas to answer it.

Rules:
1. The dataset is already loaded as a pandas DataFrame called 'df'.
2. Available columns: ${y?.columns.join(", ")??"none"}
3. The code MUST print a JSON object to stdout (using print(json.dumps(...))) that can be rendered as a chart.
4. The JSON must follow this schema:
   {
     "chart_type": "bar" | "line" | "scatter" | "histogram",
     "title": "descriptive title",
     "series": [{"name": "series name", "data": [{"x": x_value, "y": y_value}, ...]}],
     "x_label": "x axis label",
     "y_label": "y axis label",
     "stats": [{"label": "stat name", "value": "stat value"}],
     "summary": "1-2 sentence summary of findings"
   }
5. For simple text answers (like "what is the mean of X?"), still output JSON with chart_type "bar" and a single data point.
6. Keep the code concise (under 20 lines).
7. Do NOT import pandas or json — they are already imported.
8. Do NOT define df — it is already loaded.

Dataset schema:
${N}

Generate ONLY the Python code. No explanations, no markdown fences.`,n=await s.chat.completions.create({messages:[{role:"assistant",content:r},{role:"user",content:t}],thinking:{type:"disabled"}}),i=(n?.choices?.[0]?.message?.content?.trim()??"").replace(/^```python\n?/m,"").replace(/^```\n?/m,"").replace(/```$/m,"").trim();c(i)}catch(e){f(`LLM code generation failed: ${e.message}`)}finally{l(!1)}}},[t,y,N]),w=(0,r.useCallback)(e=>{try{let a=e.indexOf("{"),s=e.lastIndexOf("}");if(a>=0&&s>a){let r=JSON.parse(e.substring(a,s+1));m(e=>[{question:t,generatedCode:o,output:r,textOutput:null,error:null},...e].slice(0,10))}else m(a=>[{question:t,generatedCode:o,output:null,textOutput:e,error:null},...a].slice(0,10))}catch{m(a=>[{question:t,generatedCode:o,output:null,textOutput:e,error:null},...a].slice(0,10))}},[t,o]);return(0,s.jsxs)("div",{className:"rounded-xl border border-border/60 bg-card overflow-hidden",children:[(0,s.jsxs)("div",{className:"flex items-center gap-2 border-b border-border/40 bg-muted/30 px-4 py-2.5",children:[(0,s.jsx)(X.A,{className:"h-4 w-4 text-primary"}),(0,s.jsx)("span",{className:"text-sm font-semibold",children:"Ask Your Data"}),(0,s.jsx)(p.E,{variant:"outline",className:"text-[9px]",children:"Natural Language → Python → Chart"}),(0,s.jsx)("span",{className:"text-[10px] text-muted-foreground ml-auto",children:"Powered by z-ai LLM + Pyodide"}),(0,s.jsxs)("select",{defaultValue:"",onChange:e=>{e.target.value&&v(e.target.value),e.target.value=""},className:"text-[10px] rounded-md border border-border/40 bg-background px-1.5 py-1",children:[(0,s.jsx)("option",{value:"",disabled:!0,children:"Dataset…"}),K.map(e=>(0,s.jsx)("option",{value:e.id,children:e.name},e.id))]})]}),(0,s.jsxs)("div",{className:"p-4 space-y-3",children:[(0,s.jsxs)("div",{className:"flex gap-2",children:[(0,s.jsx)("input",{type:"text",value:t,onChange:e=>n(e.target.value),onKeyDown:e=>{"Enter"!==e.key||i||_()},placeholder:"Ask anything about your data… e.g. 'What's the average income by education level?'",className:"flex-1 rounded-md border border-border/40 bg-background px-3 py-2 text-sm",disabled:i}),(0,s.jsx)(L.$,{type:"button",onClick:_,disabled:i||!t.trim(),size:"sm",children:i?(0,s.jsx)(G.A,{className:"h-4 w-4 animate-spin"}):(0,s.jsx)(H.A,{className:"h-4 w-4"})})]}),(0,s.jsx)("div",{className:"flex flex-wrap gap-1.5",children:Z.map((e,t)=>(0,s.jsxs)("button",{onClick:()=>n(e),disabled:i,className:"text-[10px] px-2 py-1 rounded-full border border-border/40 hover:border-primary hover:bg-primary/5 transition-colors disabled:opacity-50 flex items-center gap-1",children:[(0,s.jsx)(W.A,{className:"h-3 w-3 text-amber-500"})," ",e.length>50?e.slice(0,50)+"…":e]},t))}),u&&(0,s.jsx)("div",{className:"rounded-md border border-rose-500/40 bg-rose-500/5 p-2",children:(0,s.jsxs)("p",{className:"text-xs text-rose-600 dark:text-rose-400 flex items-center gap-2",children:[(0,s.jsx)(B.A,{className:"h-3.5 w-3.5"})," ",u]})}),o&&(0,s.jsxs)("div",{className:"rounded-md border border-primary/30 bg-primary/5 p-2",children:[(0,s.jsxs)("div",{className:"flex items-center justify-between mb-1",children:[(0,s.jsxs)("p",{className:"text-[10px] uppercase tracking-wider text-muted-foreground font-medium flex items-center gap-1",children:[(0,s.jsx)(Q.A,{className:"h-3 w-3"})," Generated Python (editable — Pyodide runs this on your data)"]}),(0,s.jsx)(p.E,{variant:"outline",className:"text-[9px]",children:"LLM-generated"})]}),(0,s.jsx)("textarea",{value:o,onChange:e=>c(e.target.value),className:"w-full h-32 rounded-md border border-border/40 bg-background p-2 text-[11px] font-mono resize-y",spellCheck:!1}),(0,s.jsx)(F.l,{code:o,preamble:`import pandas as pd, numpy as np, json
_USER_DATA_JSON = ${j}
df = pd.DataFrame(json.loads(_USER_DATA_JSON))
`,buttonLabel:"Run on YOUR data",onOutput:w,compact:!0})]}),d.length>0&&(0,s.jsxs)("div",{className:"space-y-3",children:[(0,s.jsxs)("div",{className:"flex items-center justify-between",children:[(0,s.jsxs)("p",{className:"text-[10px] uppercase tracking-wider text-muted-foreground font-medium flex items-center gap-1",children:[(0,s.jsx)(V.A,{className:"h-3 w-3"})," Query History (",d.length,")"]}),(0,s.jsxs)("button",{onClick:()=>m([]),className:"text-[10px] text-muted-foreground hover:text-rose-600 flex items-center gap-1",children:[(0,s.jsx)(J.A,{className:"h-3 w-3"})," Clear"]})]}),d.map((e,t)=>(0,s.jsxs)("div",{className:"rounded-md border border-border/40 bg-muted/20 p-3 space-y-2",children:[(0,s.jsxs)("div",{className:"flex items-start gap-2",children:[(0,s.jsx)(q.A,{className:"h-3.5 w-3.5 text-primary shrink-0 mt-0.5"}),(0,s.jsx)("p",{className:"text-xs font-medium text-foreground",children:e.question})]}),e.output?(0,s.jsx)(z.D,{data:e.output,accent:"oklch(0.65 0.18 280)",sourceCode:e.generatedCode}):e.textOutput?(0,s.jsx)("pre",{className:"text-[11px] font-mono text-muted-foreground bg-background/50 rounded-md p-2 overflow-x-auto max-h-40",children:e.textOutput.slice(0,2e3)}):e.error?(0,s.jsx)("p",{className:"text-xs text-rose-600",children:e.error}):null]},t))]})]})]})}var et=a(90718),ea=a(65576),es=a(127);function er({dataset:e}){let[t,a]=(0,r.useState)(null),[n,i]=(0,r.useState)(!1),[l,o]=(0,r.useState)(""),[c,d]=(0,r.useState)(null),m=t??e,u=(0,r.useCallback)(async e=>{let t=K.find(t=>t.id===e);if(t){i(!0);try{let e=await Y(t);a(e),o(""),d(null)}catch{}finally{i(!1)}}},[]),f=(0,r.useMemo)(()=>m?m.columns.filter(e=>{let t=m.rows.slice(0,100).map(t=>t[e]);return t.filter(e=>null!=e&&""!==e).map(Number).filter(e=>!isNaN(e)&&isFinite(e)).length>.8*t.filter(e=>null!=e&&""!==e).length}):[],[m]),h=(0,r.useMemo)(()=>m?.columns??[],[m]),x=(0,r.useMemo)(()=>m&&l?new Set(m.rows.slice(0,500).map(e=>e[l])).size<=30?"classification":"regression":null,[l,m]),g=(0,r.useMemo)(()=>m?JSON.stringify(m.rows.slice(0,1e3).map(e=>{let t={};for(let a of m.columns.slice(0,20))t[a]=e[a];return t})):"[]",[m]),y=(0,r.useMemo)(()=>{if(!l||!x)return"";let e=f.filter(e=>e!==l);return 0===e.length?"":"classification"===x?`# ML Playground — Classification (LogisticRegression)
import pandas as pd, numpy as np, json
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score, confusion_matrix

numeric_features = [${e.map(e=>`'${e}'`).join(", ")}]
X = df[numeric_features].fillna(0).values
y = df['${l}'].astype(str).values

# Encode labels
unique_labels = list(set(y))
label_map = {label: i for i, label in enumerate(unique_labels)}
y_encoded = np.array([label_map[l] for l in y])

# Split
X_train, X_test, y_train, y_test = train_test_split(X, y_encoded, test_size=0.2, random_state=42)

# Train
model = LogisticRegression(max_iter=500, random_state=42)
model.fit(X_train, y_train)

# Evaluate
y_pred = model.predict(X_test)
acc = accuracy_score(y_test, y_pred)

# Feature importance (absolute coefficient values)
importances = np.abs(model.coef_).mean(axis=0) if model.coef_.ndim > 1 else np.abs(model.coef_[0])

# Confusion matrix
cm = confusion_matrix(y_test, y_pred)

# Build output
feature_data = [{"x": f, "y": round(float(imp), 4)} for f, imp in sorted(zip(numeric_features, importances), key=lambda x: -x[1])]

# Confusion matrix as heatmap cells
cm_cells = []
for i in range(min(len(unique_labels), 10)):
    for j in range(min(len(unique_labels), 10)):
        cm_cells.append({"row": i, "col": j, "value": int(cm[i][j]) if i < cm.shape[0] and j < cm.shape[1] else 0})

print(json.dumps({
    "chart_type": "bar",
    "title": f"Feature Importance — LogisticRegression (accuracy={acc:.1%})",
    "series": [{"name": "|coefficient|", "data": feature_data[:10]}],
    "x_label": "feature", "y_label": "importance (|coefficient|)",
    "stats": [
        {"label": "Task", "value": "Classification (LogisticRegression)"},
        {"label": "Target", "value": "${l}"},
        {"label": "Classes", "value": str(len(unique_labels)) + ": " + ", ".join(str(l) for l in unique_labels[:5])},
        {"label": "Features", "value": str(len(numeric_features))},
        {"label": "Train/Test split", "value": f"{len(X_train)}/{len(X_test)}"},
        {"label": "Accuracy", "value": f"{acc:.4f} ({acc*100:.1f}%)" if acc < 0.999 else "100%"},
    ],
    "summary": f"Trained LogisticRegression on ${l} with {len(numeric_features)} features. Accuracy: {acc*100:.1f}%. Top feature: {feature_data[0]['x']} (importance={feature_data[0]['y']}).",
}))`:`# ML Playground — Regression (LinearRegression)
import pandas as pd, numpy as np, json
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import r2_score, mean_squared_error

numeric_features = [${e.map(e=>`'${e}'`).join(", ")}]
X = df[numeric_features].fillna(0).values
y = df['${l}'].fillna(0).values.astype(float)

# Split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train
model = LinearRegression()
model.fit(X_train, y_train)

# Evaluate
y_pred = model.predict(X_test)
r2 = r2_score(y_test, y_pred)
mse = mean_squared_error(y_test, y_pred)
rmse = np.sqrt(mse)

# Feature importance (coefficients)
importances = np.abs(model.coef_)

# Predictions vs actual
pred_data = [{"x": round(float(actual), 2), "y": round(float(pred), 2)} for actual, pred in zip(y_test[:100], y_pred[:100])]

feature_data = [{"x": f, "y": round(float(imp), 4)} for f, imp in sorted(zip(numeric_features, importances), key=lambda x: -x[1])]

print(json.dumps({
    "chart_type": "scatter",
    "title": f"Predicted vs Actual — LinearRegression (R\xb2={r2:.3f})",
    "series": [
        {"name": "Predictions", "data": pred_data},
    ],
    "x_label": "actual ${l}", "y_label": "predicted ${l}",
    "stats": [
        {"label": "Task", "value": "Regression (LinearRegression)"},
        {"label": "Target", "value": "${l}"},
        {"label": "Features", "value": str(len(numeric_features))},
        {"label": "Train/Test split", "value": f"{len(X_train)}/{len(X_test)}"},
        {"label": "R\xb2", "value": f"{r2:.4f} ({'good fit' if r2 > 0.7 else 'moderate' if r2 > 0.3 else 'poor'})"},
        {"label": "RMSE", "value": f"{rmse:.4f}"},
        {"label": "Top feature", "value": f"{feature_data[0]['x']} (coef={feature_data[0]['y']})"},
    ],
    "summary": f"Trained LinearRegression on ${l} with {len(numeric_features)} features. R\xb2={r2:.3f}, RMSE={rmse:.4f}. Top feature: {feature_data[0]['x']}.",
}))`},[l,x,f,g]);return m&&0!==m.rows.length?f.length<2?(0,s.jsx)("div",{className:"rounded-xl border border-border/60 bg-card p-4 text-center",children:(0,s.jsxs)("p",{className:"text-sm text-muted-foreground",children:["Need at least 2 numeric columns for ML. This dataset has ",f.length,"."]})}):(0,s.jsxs)("div",{className:"rounded-xl border border-border/60 bg-card overflow-hidden",children:[(0,s.jsxs)("div",{className:"flex items-center gap-2 border-b border-border/40 bg-muted/30 px-4 py-2.5",children:[(0,s.jsx)(et.A,{className:"h-4 w-4 text-primary"}),(0,s.jsx)("span",{className:"text-sm font-semibold",children:"ML Playground"}),(0,s.jsx)(p.E,{variant:"outline",className:"text-[9px]",children:"scikit-learn via Pyodide"}),(0,s.jsxs)("select",{defaultValue:"",onChange:e=>{e.target.value&&u(e.target.value),e.target.value=""},className:"text-[10px] rounded-md border border-border/40 bg-background px-1.5 py-1 ml-auto",children:[(0,s.jsx)("option",{value:"",disabled:!0,children:"Switch dataset…"}),K.map(e=>(0,s.jsx)("option",{value:e.id,children:e.name},e.id))]}),x&&(0,s.jsxs)(p.E,{variant:"outline",className:`text-[9px] ${"classification"===x?"border-blue-500/30 text-blue-600":"border-emerald-500/30 text-emerald-600"}`,children:["classification"===x?(0,s.jsx)(ea.A,{className:"h-3 w-3 mr-0.5"}):(0,s.jsx)(b.A,{className:"h-3 w-3 mr-0.5"}),x]})]}),(0,s.jsxs)("div",{className:"p-4 space-y-3",children:[(0,s.jsxs)("div",{className:"flex items-center gap-3 flex-wrap",children:[(0,s.jsxs)("div",{className:"flex items-center gap-2",children:[(0,s.jsx)(es.A,{className:"h-4 w-4 text-primary"}),(0,s.jsx)("label",{className:"text-xs font-medium text-muted-foreground",children:"Predict:"}),(0,s.jsxs)("select",{value:l,onChange:e=>{o(e.target.value),d(null)},className:"text-xs rounded-md border border-border/40 bg-background px-2 py-1.5",children:[(0,s.jsx)("option",{value:"",children:"Choose target column…"}),h.map(e=>(0,s.jsx)("option",{value:e,children:e},e))]})]}),x&&(0,s.jsx)("p",{className:"text-[10px] text-muted-foreground",children:"classification"===x?`Classification: ${new Set(m.rows.slice(0,500).map(e=>e[l])).size} unique classes`:`Regression: continuous target (range: ${Math.min(...m.rows.slice(0,500).map(e=>Number(e[l])).filter(e=>!isNaN(e)))} → ${Math.max(...m.rows.slice(0,500).map(e=>Number(e[l])).filter(e=>!isNaN(e)))})`})]}),l&&x&&(0,s.jsx)("div",{className:"rounded-md border border-border/40 bg-muted/20 p-2",children:(0,s.jsxs)("p",{className:"text-[10px] text-muted-foreground",children:["Features (",f.filter(e=>e!==l).length," numeric):"," ",f.filter(e=>e!==l).join(", ")]})}),y&&(0,s.jsx)("div",{className:"rounded-md border border-primary/30 bg-primary/5 p-2",children:(0,s.jsx)(F.l,{code:y,preamble:`import pandas as pd, numpy as np, json
_USER_DATA_JSON = ${g}
df = pd.DataFrame(json.loads(_USER_DATA_JSON))
`,buttonLabel:"classification"===x?"Train classifier":"Train regressor",onOutput:e=>{try{let t=e.indexOf("{"),a=e.lastIndexOf("}");t>=0&&a>t&&d(JSON.parse(e.substring(t,a+1)))}catch{}},hideTextOutput:!!c,compact:!0})}),c&&(0,s.jsx)(z.D,{data:c,accent:"classification"===x?"oklch(0.65 0.18 250)":"oklch(0.65 0.18 140)",sourceCode:y}),!l&&(0,s.jsxs)("div",{className:"rounded-md border border-blue-500/30 bg-blue-500/5 p-3",children:[(0,s.jsxs)("p",{className:"text-xs text-blue-700 dark:text-blue-300 font-medium flex items-center gap-2",children:[(0,s.jsx)(q.A,{className:"h-3.5 w-3.5"})," How it works"]}),(0,s.jsx)("p",{className:"text-[11px] text-blue-600 dark:text-blue-400 mt-1",children:"Pick a target column to predict. The system auto-detects classification (≤30 unique values) vs regression. Then trains a scikit-learn model (LogisticRegression or LinearRegression) in-browser via Pyodide. Shows feature importance, accuracy/R\xb2, and predictions — all client-side."})]})]})]}):(0,s.jsxs)("div",{className:"rounded-xl border border-border/60 bg-card overflow-hidden",children:[(0,s.jsxs)("div",{className:"flex items-center gap-2 border-b border-border/40 bg-muted/30 px-4 py-2.5",children:[(0,s.jsx)(et.A,{className:"h-4 w-4 text-primary"}),(0,s.jsx)("span",{className:"text-sm font-semibold",children:"ML Playground"}),(0,s.jsx)(p.E,{variant:"outline",className:"text-[9px]",children:"scikit-learn via Pyodide"})]}),(0,s.jsxs)("div",{className:"p-4 space-y-3",children:[(0,s.jsx)("p",{className:"text-xs text-muted-foreground",children:"No dataset loaded. Pick a built-in dataset to get started:"}),(0,s.jsx)("div",{className:"grid grid-cols-2 md:grid-cols-3 gap-2",children:K.map(e=>(0,s.jsxs)("button",{disabled:n,onClick:()=>u(e.id),className:"text-left rounded-md border border-border/40 p-2 hover:border-primary hover:bg-primary/5 transition-colors disabled:opacity-50",children:[(0,s.jsx)("p",{className:"text-xs font-semibold",children:e.name}),(0,s.jsx)("p",{className:"text-[10px] text-muted-foreground",children:e.goodFor})]},e.id))}),n&&(0,s.jsxs)("p",{className:"text-xs text-amber-600 flex items-center gap-1",children:[(0,s.jsx)(G.A,{className:"h-3 w-3 animate-spin"})," Loading…"]})]})]})}var en=a(14180),ei=a(94928);function el({dataset:e}){let[t,a]=(0,r.useState)(null),[n,i]=(0,r.useState)(!1),[l,o]=(0,r.useState)(""),[c,d]=(0,r.useState)(null),m=t??e,u=(0,r.useCallback)(async e=>{let t=K.find(t=>t.id===e);if(t){i(!0);try{let e=await Y(t);a(e),o(""),d(null)}catch{}finally{i(!1)}}},[]),f=(0,r.useMemo)(()=>m?m.columns.filter(e=>{let t=m.rows.slice(0,100).map(t=>t[e]);return t.filter(e=>null!=e&&""!==e).map(Number).filter(e=>!isNaN(e)&&isFinite(e)).length>.8*t.filter(e=>null!=e&&""!==e).length}):[],[m]),h=(0,r.useMemo)(()=>m?.columns??[],[m]),x=(0,r.useMemo)(()=>m&&l?new Set(m.rows.slice(0,500).map(e=>e[l])).size<=30?"classification":"regression":null,[l,m]),g=(0,r.useMemo)(()=>m?JSON.stringify(m.rows.slice(0,1e3).map(e=>{let t={};for(let a of m.columns.slice(0,20))t[a]=e[a];return t})):"[]",[m]),b=(0,r.useMemo)(()=>{if(!l||!x||!m)return"";let e=f.filter(e=>e!==l);return 0===e.length?"":"classification"===x?`# Model Comparison — Classification (3 models)
import pandas as pd, numpy as np, json, time
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.ensemble import RandomForestClassifier
from sklearn.neighbors import KNeighborsClassifier
from sklearn.metrics import accuracy_score

numeric_features = [${e.map(e=>`'${e}'`).join(", ")}]
X = df[numeric_features].fillna(0).values
y = df['${l}'].astype(str).values
unique_labels = sorted(list(set(y)))
label_map = {label: i for i, label in enumerate(unique_labels)}
y_encoded = np.array([label_map[l] for l in y])
X_train, X_test, y_train, y_test = train_test_split(X, y_encoded, test_size=0.2, random_state=42)

models = {
    "LogisticRegression": LogisticRegression(max_iter=500, random_state=42),
    "RandomForest": RandomForestClassifier(n_estimators=50, random_state=42, max_depth=10),
    "KNN": KNeighborsClassifier(n_neighbors=5),
}

results = []
for name, model in models.items():
    t0 = time.time()
    model.fit(X_train, y_train)
    train_time = time.time() - t0
    y_pred = model.predict(X_test)
    acc = accuracy_score(y_test, y_pred)
    if hasattr(model, 'feature_importances_'):
        imp = model.feature_importances_
    elif hasattr(model, 'coef_'):
        imp = np.abs(model.coef_).mean(axis=0) if model.coef_.ndim > 1 else np.abs(model.coef_[0])
    else:
        imp = np.zeros(len(numeric_features))
    results.append({"model": name, "accuracy": round(float(acc), 4),
        "train_time": round(float(train_time), 3),
        "top_feature": numeric_features[int(np.argmax(imp))] if len(imp) > 0 else "n/a"})

best = max(results, key=lambda r: r["accuracy"])
runner_up = sorted(results, key=lambda r: r["accuracy"], reverse=True)
comparison_data = [{"x": r["model"], "y": r["accuracy"]} for r in results]

print(json.dumps({
    "chart_type": "bar",
    "title": f"Model Comparison — Classification ({len(unique_labels)} classes, target: ${l})",
    "series": [{"name": "Accuracy", "data": comparison_data}],
    "x_label": "model", "y_label": "accuracy (0-1)",
    "stats": [
        {"label": "Winner", "value": f"\ud83c\udfc6 {best['model']} ({best['accuracy']*100:.1f}% accuracy)"},
        {"label": "Runner-up", "value": f"{runner_up[1]['model']} ({runner_up[1]['accuracy']*100:.1f}%)" if len(runner_up) > 1 else "n/a"},
        {"label": "Third", "value": f"{runner_up[2]['model']} ({runner_up[2]['accuracy']*100:.1f}%)" if len(runner_up) > 2 else "n/a"},
        {"label": "Gap (best vs worst)", "value": f"{(best['accuracy'] - min(r['accuracy'] for r in results))*100:.1f}%"},
        {"label": "Features", "value": str(len(numeric_features))},
        {"label": "Train/Test", "value": f"{len(X_train)}/{len(X_test)}"},
        {"label": "Best top feature", "value": best["top_feature"]},
        {"label": "Recommendation", "value": f"Use {best['model']} \u2014 highest accuracy ({best['accuracy']*100:.1f}%), {best['train_time']:.2f}s training"},
    ],
    "summary": f"Compared 3 classifiers on ${l}. Winner: {best['model']} with {best['accuracy']*100:.1f}% accuracy. Gap: {(best['accuracy'] - min(r['accuracy'] for r in results))*100:.1f}%. Top feature: {best['top_feature']}.",
}))`:`# Model Comparison — Regression (3 models)
import pandas as pd, numpy as np, json, time
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression, Ridge
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import r2_score, mean_squared_error

numeric_features = [${e.map(e=>`'${e}'`).join(", ")}]
X = df[numeric_features].fillna(0).values
y = df['${l}'].fillna(0).values.astype(float)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

models = {
    "LinearRegression": LinearRegression(),
    "RandomForest": RandomForestRegressor(n_estimators=50, random_state=42, max_depth=10),
    "Ridge": Ridge(alpha=1.0),
}

results = []
for name, model in models.items():
    t0 = time.time()
    model.fit(X_train, y_train)
    train_time = time.time() - t0
    y_pred = model.predict(X_test)
    r2 = r2_score(y_test, y_pred)
    rmse = np.sqrt(mean_squared_error(y_test, y_pred))
    if hasattr(model, 'feature_importances_'):
        imp = model.feature_importances_
    elif hasattr(model, 'coef_'):
        imp = np.abs(model.coef_)
    else:
        imp = np.zeros(len(numeric_features))
    results.append({"model": name, "r2": round(float(r2), 4),
        "rmse": round(float(rmse), 4),
        "train_time": round(float(train_time), 3),
        "top_feature": numeric_features[int(np.argmax(imp))] if len(imp) > 0 else "n/a"})

best = max(results, key=lambda r: r["r2"])
runner_up = sorted(results, key=lambda r: r["r2"], reverse=True)
comparison_data = [{"x": r["model"], "y": r["r2"]} for r in results]

print(json.dumps({
    "chart_type": "bar",
    "title": f"Model Comparison \u2014 Regression (target: ${l})",
    "series": [{"name": "R\u00b2 score", "data": comparison_data}],
    "x_label": "model", "y_label": "R\u00b2 (0-1, higher=better)",
    "stats": [
        {"label": "Winner", "value": f"\ud83c\udfc6 {best['model']} (R\u00b2={best['r2']:.4f})"},
        {"label": "Runner-up", "value": f"{runner_up[1]['model']} (R\u00b2={runner_up[1]['r2']:.4f})" if len(runner_up) > 1 else "n/a"},
        {"label": "Third", "value": f"{runner_up[2]['model']} (R\u00b2={runner_up[2]['r2']:.4f})" if len(runner_up) > 2 else "n/a"},
        {"label": "Best RMSE", "value": f"{best['rmse']:.4f}"},
        {"label": "Features", "value": str(len(numeric_features))},
        {"label": "Train/Test", "value": f"{len(X_train)}/{len(X_test)}"},
        {"label": "Best top feature", "value": best["top_feature"]},
        {"label": "Recommendation", "value": f"Use {best['model']} \u2014 highest R\u00b2 ({best['r2']:.4f}), RMSE={best['rmse']:.4f}"},
    ],
    "summary": f"Compared 3 regressors on ${l}. Winner: {best['model']} with R\u00b2={best['r2']:.4f}, RMSE={best['rmse']:.4f}. Top feature: {best['top_feature']}.",
}))`},[l,x,f,m,g]);return m&&0!==m.rows.length?f.length<2?(0,s.jsx)("div",{className:"rounded-xl border border-border/60 bg-card p-4 text-center",children:(0,s.jsxs)("p",{className:"text-sm text-muted-foreground",children:["Need at least 2 numeric columns. This dataset has ",f.length,"."]})}):(0,s.jsxs)("div",{className:"rounded-xl border border-border/60 bg-card overflow-hidden",children:[(0,s.jsxs)("div",{className:"flex items-center gap-2 border-b border-border/40 bg-muted/30 px-4 py-2.5",children:[(0,s.jsx)(en.A,{className:"h-4 w-4 text-primary"}),(0,s.jsx)("span",{className:"text-sm font-semibold",children:"Model Comparison"}),(0,s.jsx)(p.E,{variant:"outline",className:"text-[9px]",children:"3 models scikit-learn via Pyodide"}),x&&(0,s.jsx)(p.E,{variant:"outline",className:`text-[9px] ${"classification"===x?"border-blue-500/30 text-blue-600":"border-emerald-500/30 text-emerald-600"}`,children:x}),(0,s.jsxs)("select",{defaultValue:"",onChange:e=>{e.target.value&&u(e.target.value),e.target.value=""},className:"text-[10px] rounded-md border border-border/40 bg-background px-1.5 py-1 ml-auto",children:[(0,s.jsx)("option",{value:"",disabled:!0,children:"Switch dataset..."}),K.map(e=>(0,s.jsx)("option",{value:e.id,children:e.name},e.id))]})]}),(0,s.jsxs)("div",{className:"p-4 space-y-3",children:[(0,s.jsxs)("div",{className:"flex items-center gap-3 flex-wrap",children:[(0,s.jsxs)("div",{className:"flex items-center gap-2",children:[(0,s.jsx)(es.A,{className:"h-4 w-4 text-primary"}),(0,s.jsx)("label",{className:"text-xs font-medium text-muted-foreground",children:"Predict:"}),(0,s.jsxs)("select",{value:l,onChange:e=>{o(e.target.value),d(null)},className:"text-xs rounded-md border border-border/40 bg-background px-2 py-1.5",children:[(0,s.jsx)("option",{value:"",children:"Choose target..."}),h.map(e=>(0,s.jsx)("option",{value:e,children:e},e))]})]}),x&&(0,s.jsx)("p",{className:"text-[10px] text-muted-foreground",children:"classification"===x?`Classification: ${new Set(m.rows.slice(0,500).map(e=>e[l])).size} classes`:"Regression: continuous target"})]}),x&&(0,s.jsxs)("div",{className:"flex items-center gap-2 flex-wrap",children:[(0,s.jsx)("span",{className:"text-[10px] uppercase tracking-wider text-muted-foreground",children:"Comparing:"}),"classification"===x?["LogisticRegression","RandomForest","KNN"].map(e=>(0,s.jsx)(p.E,{variant:"outline",className:"text-[9px]",children:e},e)):["LinearRegression","RandomForest","Ridge"].map(e=>(0,s.jsx)(p.E,{variant:"outline",className:"text-[9px]",children:e},e))]}),b&&(0,s.jsx)("div",{className:"rounded-md border border-primary/30 bg-primary/5 p-2",children:(0,s.jsx)(F.l,{code:b,preamble:`import pandas as pd, numpy as np, json
_USER_DATA_JSON = ${g}
df = pd.DataFrame(json.loads(_USER_DATA_JSON))
`,buttonLabel:"Compare 3 models",onOutput:e=>{try{let t=e.indexOf("{"),a=e.lastIndexOf("}");t>=0&&a>t&&d(JSON.parse(e.substring(t,a+1)))}catch{}},hideTextOutput:!!c,compact:!0})}),c&&(0,s.jsx)(z.D,{data:c,accent:"oklch(0.65 0.18 40)",sourceCode:b}),!l&&(0,s.jsxs)("div",{className:"rounded-md border border-blue-500/30 bg-blue-500/5 p-3",children:[(0,s.jsxs)("p",{className:"text-xs text-blue-700 dark:text-blue-300 font-medium flex items-center gap-2",children:[(0,s.jsx)(ei.A,{className:"h-3.5 w-3.5"})," How it works"]}),(0,s.jsx)("p",{className:"text-[11px] text-blue-600 dark:text-blue-400 mt-1",children:"Pick a target column. The system trains 3 models simultaneously (scikit-learn via Pyodide), then compares accuracy/R-squared, training time, and feature importance side-by-side. The winner is highlighted with a recommendation."})]})]})]}):(0,s.jsxs)("div",{className:"rounded-xl border border-border/60 bg-card overflow-hidden",children:[(0,s.jsxs)("div",{className:"flex items-center gap-2 border-b border-border/40 bg-muted/30 px-4 py-2.5",children:[(0,s.jsx)(en.A,{className:"h-4 w-4 text-primary"}),(0,s.jsx)("span",{className:"text-sm font-semibold",children:"Model Comparison"}),(0,s.jsx)(p.E,{variant:"outline",className:"text-[9px]",children:"3 models side-by-side"})]}),(0,s.jsxs)("div",{className:"p-4 space-y-3",children:[(0,s.jsx)("p",{className:"text-xs text-muted-foreground",children:"No dataset loaded. Pick a built-in dataset:"}),(0,s.jsx)("div",{className:"grid grid-cols-2 md:grid-cols-3 gap-2",children:K.map(e=>(0,s.jsxs)("button",{disabled:n,onClick:()=>u(e.id),className:"text-left rounded-md border border-border/40 p-2 hover:border-primary hover:bg-primary/5 transition-colors disabled:opacity-50",children:[(0,s.jsx)("p",{className:"text-xs font-semibold",children:e.name}),(0,s.jsx)("p",{className:"text-[10px] text-muted-foreground",children:e.goodFor})]},e.id))}),n&&(0,s.jsxs)("p",{className:"text-xs text-amber-600 flex items-center gap-1",children:[(0,s.jsx)(G.A,{className:"h-3 w-3 animate-spin"})," Loading..."]})]})]})}var eo=a(57420),ec=a(84980);let ed=[...K.filter(e=>["iris","boston","wine"].includes(e.id)),{id:"nasa-gistemp",name:"NASA GISTEMP",description:"Global temperature anomaly 1880-2024. Classic time-series for forecasting.",url:"https://data.giss.nasa.gov/gistemp/tabledata_v4/GLB.Ts+dSST.csv",goodFor:"Trend forecasting, ARIMA, climate"}];function em({dataset:e}){let[t,a]=(0,r.useState)(null),[n,i]=(0,r.useState)(!1),[l,o]=(0,r.useState)(""),[c,d]=(0,r.useState)(""),[m,u]=(0,r.useState)(12),[f,h]=(0,r.useState)(null),x=t??e,g=(0,r.useCallback)(async e=>{let t=ed.find(t=>t.id===e);if(t){i(!0);try{let e=await Y(t);a(e),o(""),d(""),h(null)}catch{}finally{i(!1)}}},[]),y=(0,r.useMemo)(()=>x?x.columns.filter(e=>{let t=x.rows.slice(0,100).map(t=>t[e]);return t.filter(e=>null!=e&&""!==e).map(Number).filter(e=>!isNaN(e)&&isFinite(e)).length>.8*t.filter(e=>null!=e&&""!==e).length}):[],[x]),v=(0,r.useMemo)(()=>x?JSON.stringify(x.rows.slice(0,1e3).map(e=>{let t={};for(let a of x.columns.slice(0,20))t[a]=e[a];return t})):"[]",[x]),N=(0,r.useMemo)(()=>l&&c&&x?`# Time-Series Forecast — ARIMA
import pandas as pd, numpy as np, json
from statsmodels.tsa.arima.model import ARIMA

# Prepare time series
ts_data = df[['${l}', '${c}']].dropna().sort_values('${l}')
y = ts_data['${c}'].values.astype(float)

# Fit ARIMA (auto-order: try (1,1,1) as a reasonable default)
try:
    model = ARIMA(y, order=(1, 1, 1))
    fitted = model.fit()
    forecast_result = fitted.get_forecast(steps=${m})
    forecast = forecast_result.predicted_mean
    ci = forecast_result.conf_int(alpha=0.05)
    aic = fitted.aic
    bic = fitted.bic
    residuals = fitted.resid

    # Build chart data: historical + forecast + confidence interval
    historical = [{"x": str(i), "y": round(float(y[i]), 4)} for i in range(len(y))]
    forecast_data = [{"x": str(len(y) + i), "y": round(float(forecast[i]), 4)} for i in range(len(forecast))]
    ci_lower = [{"x": str(len(y) + i), "y": round(float(ci[i, 0]), 4)} for i in range(len(ci))]
    ci_upper = [{"x": str(len(y) + i), "y": round(float(ci[i, 1]), 4)} for i in range(len(ci))]

    # Forecast table
    forecast_table = []
    for i in range(len(forecast)):
        forecast_table.append({
            "period": len(y) + i + 1,
            "forecast": round(float(forecast[i]), 4),
            "lower_95": round(float(ci[i, 0]), 4),
            "upper_95": round(float(ci[i, 1]), 4),
        })

    print(json.dumps({
        "chart_type": "line",
        "title": f"ARIMA(1,1,1) Forecast — next ${m} periods of ${c}",
        "series": [
            {"name": "Historical", "data": historical[-50:]},  # last 50 points
            {"name": "Forecast", "data": forecast_data},
            {"name": "95% CI lower", "data": ci_lower},
            {"name": "95% CI upper", "data": ci_upper},
        ],
        "x_label": "time period", "y_label": "${c}",
        "stats": [
            {"label": "Model", "value": "ARIMA(1,1,1)"},
            {"label": "Historical periods", "value": str(len(y))},
            {"label": "Forecast periods", "value": str(${m})},
            {"label": "AIC", "value": f"{aic:.2f}"},
            {"label": "BIC", "value": f"{bic:.2f}"},
            {"label": "Residual mean", "value": f"{np.mean(residuals):.6f}"},
            {"label": "Residual std", "value": f"{np.std(residuals):.6f}"},
            {"label": "Last forecast", "value": f"{forecast[-1]:.4f} (95% CI: [{ci[-1, 0]:.4f}, {ci[-1, 1]:.4f}])"},
        ],
        "summary": f"ARIMA(1,1,1) forecast for ${c} over ${m} periods. Historical: {len(y)} observations. AIC={aic:.2f}, BIC={bic:.2f}. Final forecast: {forecast[-1]:.4f} (95% CI: [{ci[-1, 0]:.4f}, {ci[-1, 1]:.4f}]). Residual mean: {np.mean(residuals):.6f} (should be near 0 for unbiased forecasts).",
    }))
except Exception as e:
    # Fallback: simple linear extrapolation
    from scipy import stats
    t = np.arange(len(y))
    slope, intercept, r_value, p_value, _ = stats.linregress(t, y)
    forecast_simple = [slope * (len(y) + i) + intercept for i in range(${m})]
    historical = [{"x": str(i), "y": round(float(y[i]), 4)} for i in range(len(y))]
    forecast_data = [{"x": str(len(y) + i), "y": round(float(forecast_simple[i]), 4)} for i in range(len(forecast_simple))]
    print(json.dumps({
        "chart_type": "line",
        "title": f"Linear Trend Forecast (ARIMA failed: {e}) — next ${m} periods",
        "series": [
            {"name": "Historical", "data": historical[-50:]},
            {"name": "Linear forecast", "data": forecast_data},
        ],
        "x_label": "time period", "y_label": "${c}",
        "stats": [
            {"label": "Model", "value": "Linear regression (fallback)"},
            {"label": "Slope", "value": f"{slope:.6f}"},
            {"label": "R-squared", "value": f"{r_value**2:.4f}"},
            {"label": "Forecast periods", "value": str(${m})},
            {"label": "Final forecast", "value": f"{forecast_simple[-1]:.4f}"},
        ],
        "summary": f"Linear trend forecast for ${c}. Slope={slope:.6f}/period, R2={r_value**2:.4f}. ARIMA failed ({e}) — using linear fallback. Final forecast: {forecast_simple[-1]:.4f}.",
    }))`:"",[l,c,m,x,v]);return x&&0!==x.rows.length?y.length<2?(0,s.jsx)("div",{className:"rounded-xl border border-border/60 bg-card p-4 text-center",children:(0,s.jsxs)("p",{className:"text-sm text-muted-foreground",children:["Need at least 2 numeric columns for forecasting. This dataset has ",y.length,"."]})}):(0,s.jsxs)("div",{className:"rounded-xl border border-border/60 bg-card overflow-hidden",children:[(0,s.jsxs)("div",{className:"flex items-center gap-2 border-b border-border/40 bg-muted/30 px-4 py-2.5",children:[(0,s.jsx)(b.A,{className:"h-4 w-4 text-primary"}),(0,s.jsx)("span",{className:"text-sm font-semibold",children:"Time-Series Forecast"}),(0,s.jsx)(p.E,{variant:"outline",className:"text-[9px]",children:"ARIMA via statsmodels/Pyodide"}),(0,s.jsxs)("select",{defaultValue:"",onChange:e=>{e.target.value&&g(e.target.value),e.target.value=""},className:"text-[10px] rounded-md border border-border/40 bg-background px-1.5 py-1 ml-auto",children:[(0,s.jsx)("option",{value:"",disabled:!0,children:"Switch dataset..."}),ed.map(e=>(0,s.jsx)("option",{value:e.id,children:e.name},e.id))]})]}),(0,s.jsxs)("div",{className:"p-4 space-y-3",children:[(0,s.jsxs)("div",{className:"flex items-center gap-3 flex-wrap",children:[(0,s.jsxs)("div",{className:"flex items-center gap-2",children:[(0,s.jsx)(eo.A,{className:"h-4 w-4 text-primary"}),(0,s.jsx)("label",{className:"text-xs font-medium text-muted-foreground",children:"Time col:"}),(0,s.jsxs)("select",{value:l,onChange:e=>{o(e.target.value),h(null)},className:"text-xs rounded-md border border-border/40 bg-background px-2 py-1.5",children:[(0,s.jsx)("option",{value:"",children:"Choose..."}),x.columns.map(e=>(0,s.jsx)("option",{value:e,children:e},e))]})]}),(0,s.jsxs)("div",{className:"flex items-center gap-2",children:[(0,s.jsx)(b.A,{className:"h-4 w-4 text-primary"}),(0,s.jsx)("label",{className:"text-xs font-medium text-muted-foreground",children:"Value col:"}),(0,s.jsxs)("select",{value:c,onChange:e=>{d(e.target.value),h(null)},className:"text-xs rounded-md border border-border/40 bg-background px-2 py-1.5",children:[(0,s.jsx)("option",{value:"",children:"Choose..."}),y.map(e=>(0,s.jsx)("option",{value:e,children:e},e))]})]}),(0,s.jsxs)("div",{className:"flex items-center gap-2",children:[(0,s.jsx)(ec.A,{className:"h-4 w-4 text-primary"}),(0,s.jsx)("label",{className:"text-xs font-medium text-muted-foreground",children:"Forecast:"}),(0,s.jsxs)("select",{value:m,onChange:e=>{u(Number(e.target.value)),h(null)},className:"text-xs rounded-md border border-border/40 bg-background px-2 py-1.5",children:[(0,s.jsx)("option",{value:6,children:"6 periods"}),(0,s.jsx)("option",{value:12,children:"12 periods"}),(0,s.jsx)("option",{value:24,children:"24 periods"}),(0,s.jsx)("option",{value:36,children:"36 periods"})]})]})]}),N&&(0,s.jsx)("div",{className:"rounded-md border border-primary/30 bg-primary/5 p-2",children:(0,s.jsx)(F.l,{code:N,preamble:`import pandas as pd, numpy as np, json
_USER_DATA_JSON = ${v}
df = pd.DataFrame(json.loads(_USER_DATA_JSON))
`,buttonLabel:`Forecast next ${m} periods`,onOutput:e=>{try{let t=e.indexOf("{"),a=e.lastIndexOf("}");t>=0&&a>t&&h(JSON.parse(e.substring(t,a+1)))}catch{}},hideTextOutput:!!f,compact:!0})}),f&&(0,s.jsx)(z.D,{data:f,accent:"oklch(0.65 0.18 160)",sourceCode:N}),!l&&(0,s.jsxs)("div",{className:"rounded-md border border-blue-500/30 bg-blue-500/5 p-3",children:[(0,s.jsxs)("p",{className:"text-xs text-blue-700 dark:text-blue-300 font-medium flex items-center gap-2",children:[(0,s.jsx)(b.A,{className:"h-3.5 w-3.5"})," How it works"]}),(0,s.jsx)("p",{className:"text-[11px] text-blue-600 dark:text-blue-400 mt-1",children:"Pick a time column + a value column. The system fits an ARIMA(1,1,1) model via statsmodels (in Pyodide), then forecasts the next N periods with 95% confidence intervals. If ARIMA fails (non-stationary data), it falls back to linear regression. Shows: forecast plot, AIC/BIC, residual diagnostics."})]})]})]}):(0,s.jsxs)("div",{className:"rounded-xl border border-border/60 bg-card overflow-hidden",children:[(0,s.jsxs)("div",{className:"flex items-center gap-2 border-b border-border/40 bg-muted/30 px-4 py-2.5",children:[(0,s.jsx)(b.A,{className:"h-4 w-4 text-primary"}),(0,s.jsx)("span",{className:"text-sm font-semibold",children:"Time-Series Forecast"}),(0,s.jsx)(p.E,{variant:"outline",className:"text-[9px]",children:"ARIMA via statsmodels"})]}),(0,s.jsxs)("div",{className:"p-4 space-y-3",children:[(0,s.jsx)("p",{className:"text-xs text-muted-foreground",children:"Pick a dataset with temporal data:"}),(0,s.jsx)("div",{className:"grid grid-cols-2 md:grid-cols-3 gap-2",children:ed.map(e=>(0,s.jsxs)("button",{disabled:n,onClick:()=>g(e.id),className:"text-left rounded-md border border-border/40 p-2 hover:border-primary hover:bg-primary/5 transition-colors disabled:opacity-50",children:[(0,s.jsx)("p",{className:"text-xs font-semibold",children:e.name}),(0,s.jsx)("p",{className:"text-[10px] text-muted-foreground",children:e.goodFor})]},e.id))}),n&&(0,s.jsxs)("p",{className:"text-xs text-amber-600 flex items-center gap-1",children:[(0,s.jsx)(G.A,{className:"h-3 w-3 animate-spin"})," Loading..."]})]})]})}var eu=a(26075),ep=a(69260);function ef({dataset:e}){let[t,a]=(0,r.useState)(null),[n,i]=(0,r.useState)(!1),[l,o]=(0,r.useState)(""),[c,d]=(0,r.useState)(""),[m,u]=(0,r.useState)("kmeans"),[f,h]=(0,r.useState)(3),[x,g]=(0,r.useState)(null),b=t??e,y=(0,r.useCallback)(async e=>{let t=K.find(t=>t.id===e);if(t){i(!0);try{let e=await Y(t);a(e),o(""),d(""),g(null)}catch{}finally{i(!1)}}},[]),v=(0,r.useMemo)(()=>b?b.columns.filter(e=>{let t=b.rows.slice(0,100).map(t=>t[e]);return t.filter(e=>null!=e&&""!==e).map(Number).filter(e=>!isNaN(e)&&isFinite(e)).length>.8*t.filter(e=>null!=e&&""!==e).length}):[],[b]),N=(0,r.useMemo)(()=>b?JSON.stringify(b.rows.slice(0,1e3).map(e=>{let t={};for(let a of b.columns.slice(0,20))t[a]=e[a];return t})):"[]",[b]),j=(0,r.useMemo)(()=>l&&c&&b?"kmeans"===m?`# K-means Clustering
import pandas as pd, numpy as np, json
from sklearn.cluster import KMeans
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import silhouette_score

# Prepare data
xy = df[['${l}', '${c}']].dropna()
X = xy.values.astype(float)

# Standardize
scaler = StandardScaler()
X_std = scaler.fit_transform(X)

# Fit K-means
k = ${f}
model = KMeans(n_clusters=k, random_state=42, n_init=10)
labels = model.fit_predict(X_std)

# Silhouette score
if k > 1 and len(set(labels)) > 1:
    sil_score = silhouette_score(X_std, labels)
else:
    sil_score = 0.0

# Build scatter data with cluster colors
series = []
for cluster_id in range(k):
    mask = labels == cluster_id
    if mask.sum() > 0:
        points = [{"x": round(float(X[i, 0]), 4), "y": round(float(X[i, 1]), 4)} for i in range(len(X)) if mask[i]]
        series.append({"name": f"Cluster {cluster_id + 1}", "data": points[:500]})  # cap at 500 pts/cluster

# Cluster statistics
cluster_stats = []
for c in range(k):
    mask = labels == c
    if mask.sum() > 0:
        cluster_stats.append({
            "cluster": c + 1,
            "size": int(mask.sum()),
            "pct": round(float(mask.sum()) / len(labels) * 100, 1),
            "centroid_x": round(float(X[mask, 0].mean()), 4),
            "centroid_y": round(float(X[mask, 1].mean()), 4),
            "spread_x": round(float(X[mask, 0].std()), 4),
            "spread_y": round(float(X[mask, 1].std()), 4),
        })

print(json.dumps({
    "chart_type": "scatter",
    "title": f"K-means Clustering (K={k}, silhouette={sil_score:.3f})",
    "series": series,
    "x_label": "${l}", "y_label": "${c}",
    "stats": [
        {"label": "Algorithm", "value": f"K-means (K={k})"},
        {"label": "Silhouette score", "value": f"{sil_score:.4f} ({'good' if sil_score > 0.5 else 'moderate' if sil_score > 0.25 else 'poor'} clustering)"},
        {"label": "Points clustered", "value": str(len(labels))},
        {"label": "Clusters found", "value": str(len(set(labels)))},
        {"label": "Largest cluster", "value": f"Cluster {max(cluster_stats, key=lambda c: c['size'])['cluster'] if cluster_stats else '?'} ({max(c['size'] for c in cluster_stats) if cluster_stats else 0} points)"},
    ] + [{"label": f"Cluster {c['cluster']}", "value": f"{c['size']} pts ({c['pct']}%), centroid=({c['centroid_x']}, {c['centroid_y']})"} for c in cluster_stats[:6]],
    "summary": f"K-means with K={k} on {len(labels)} points. Silhouette={sil_score:.4f} ({'good' if sil_score > 0.5 else 'moderate' if sil_score > 0.25 else 'poor'}). {len(cluster_stats)} clusters found. Largest: {max(c['size'] for c in cluster_stats) if cluster_stats else 0} points.",
}))`:`# DBSCAN Clustering (density-based)
import pandas as pd, numpy as np, json
from sklearn.cluster import DBSCAN
from sklearn.preprocessing import StandardScaler
from sklearn.neighbors import NearestNeighbors

# Prepare data
xy = df[['${l}', '${c}']].dropna()
X = xy.values.astype(float)

# Standardize
scaler = StandardScaler()
X_std = scaler.fit_transform(X)

# Auto-estimate eps via k-distance graph (k=5)
k_neighbors = min(5, len(X_std) - 1)
if k_neighbors > 0:
    nn = NearestNeighbors(n_neighbors=k_neighbors)
    nn.fit(X_std)
    distances, _ = nn.kneighbors(X_std)
    k_distances = np.sort(distances[:, -1])
    # Use the median of the top 10% as eps estimate
    eps_estimate = float(np.median(k_distances[int(len(k_distances) * 0.9):]))
else:
    eps_estimate = 0.5

# Fit DBSCAN
model = DBSCAN(eps=eps_estimate, min_samples=5)
labels = model.fit_predict(X_std)

n_clusters = len(set(labels)) - (1 if -1 in labels else 0)
n_noise = int(sum(labels == -1))

# Build scatter data
series = []
unique_labels = sorted(set(labels))
for label in unique_labels:
    mask = labels == label
    if mask.sum() > 0:
        name = f"Noise ({n_noise} pts)" if label == -1 else f"Cluster {label + 1}"
        points = [{"x": round(float(X[i, 0]), 4), "y": round(float(X[i, 1]), 4)} for i in range(len(X)) if mask[i]]
        series.append({"name": name, "data": points[:500]})

# Cluster statistics
cluster_stats = []
for label in unique_labels:
    if label == -1: continue
    mask = labels == label
    if mask.sum() > 0:
        cluster_stats.append({
            "cluster": label + 1,
            "size": int(mask.sum()),
            "pct": round(float(mask.sum()) / len(labels) * 100, 1),
            "centroid_x": round(float(X[mask, 0].mean()), 4),
            "centroid_y": round(float(X[mask, 1].mean()), 4),
        })

print(json.dumps({
    "chart_type": "scatter",
    "title": f"DBSCAN Clustering ({n_clusters} clusters, {n_noise} noise pts, eps={eps_estimate:.3f})",
    "series": series,
    "x_label": "${l}", "y_label": "${c}",
    "stats": [
        {"label": "Algorithm", "value": "DBSCAN (density-based)"},
        {"label": "Auto-estimated eps", "value": f"{eps_estimate:.4f}"},
        {"label": "Clusters found", "value": str(n_clusters)},
        {"label": "Noise points", "value": f"{n_noise} ({n_noise/len(labels)*100:.1f}%)"},
        {"label": "Points clustered", "value": str(len(labels))},
        {"label": "Largest cluster", "value": f"Cluster {max(cluster_stats, key=lambda c: c['size'])['cluster'] if cluster_stats else '?'} ({max(c['size'] for c in cluster_stats) if cluster_stats else 0} points)"},
    ] + [{"label": f"Cluster {c['cluster']}", "value": f"{c['size']} pts ({c['pct']}%), centroid=({c['centroid_x']}, {c['centroid_y']})"} for c in cluster_stats[:6]],
    "summary": f"DBSCAN found {n_clusters} clusters + {n_noise} noise points ({n_noise/len(labels)*100:.1f}%). Auto-eps={eps_estimate:.4f}. {len(cluster_stats)} dense clusters identified. No K needed — density-based.",
}))`:"",[l,c,m,f,b,N]);return b&&0!==b.rows.length?v.length<2?(0,s.jsx)("div",{className:"rounded-xl border border-border/60 bg-card p-4 text-center",children:(0,s.jsxs)("p",{className:"text-sm text-muted-foreground",children:["Need at least 2 numeric columns for clustering. This dataset has ",v.length,"."]})}):(0,s.jsxs)("div",{className:"rounded-xl border border-border/60 bg-card overflow-hidden",children:[(0,s.jsxs)("div",{className:"flex items-center gap-2 border-b border-border/40 bg-muted/30 px-4 py-2.5",children:[(0,s.jsx)(eu.A,{className:"h-4 w-4 text-primary"}),(0,s.jsx)("span",{className:"text-sm font-semibold",children:"Clustering Analysis"}),(0,s.jsx)(p.E,{variant:"outline",className:"text-[9px]",children:"scikit-learn via Pyodide"}),(0,s.jsxs)("select",{defaultValue:"",onChange:e=>{e.target.value&&y(e.target.value),e.target.value=""},className:"text-[10px] rounded-md border border-border/40 bg-background px-1.5 py-1 ml-auto",children:[(0,s.jsx)("option",{value:"",disabled:!0,children:"Switch dataset..."}),K.map(e=>(0,s.jsx)("option",{value:e.id,children:e.name},e.id))]})]}),(0,s.jsxs)("div",{className:"p-4 space-y-3",children:[(0,s.jsxs)("div",{className:"flex items-center gap-3 flex-wrap",children:[(0,s.jsxs)("div",{className:"flex items-center gap-2",children:[(0,s.jsx)(es.A,{className:"h-4 w-4 text-primary"}),(0,s.jsx)("label",{className:"text-xs font-medium text-muted-foreground",children:"X:"}),(0,s.jsxs)("select",{value:l,onChange:e=>{o(e.target.value),g(null)},className:"text-xs rounded-md border border-border/40 bg-background px-2 py-1.5",children:[(0,s.jsx)("option",{value:"",children:"Choose..."}),v.map(e=>(0,s.jsx)("option",{value:e,children:e},e))]})]}),(0,s.jsxs)("div",{className:"flex items-center gap-2",children:[(0,s.jsx)("label",{className:"text-xs font-medium text-muted-foreground",children:"Y:"}),(0,s.jsxs)("select",{value:c,onChange:e=>{d(e.target.value),g(null)},className:"text-xs rounded-md border border-border/40 bg-background px-2 py-1.5",children:[(0,s.jsx)("option",{value:"",children:"Choose..."}),v.filter(e=>e!==l).map(e=>(0,s.jsx)("option",{value:e,children:e},e))]})]})]}),(0,s.jsxs)("div",{className:"flex items-center gap-2 flex-wrap",children:[(0,s.jsx)("span",{className:"text-[10px] uppercase tracking-wider text-muted-foreground",children:"Algorithm:"}),(0,s.jsx)("button",{onClick:()=>{u("kmeans"),g(null)},className:`text-[10px] px-2.5 py-1.5 rounded-md border transition-colors ${"kmeans"===m?"border-primary bg-primary/5 text-primary font-medium":"border-border/40 hover:border-primary/40"}`,children:"K-means"}),(0,s.jsx)("button",{onClick:()=>{u("dbscan"),g(null)},className:`text-[10px] px-2.5 py-1.5 rounded-md border transition-colors ${"dbscan"===m?"border-primary bg-primary/5 text-primary font-medium":"border-border/40 hover:border-primary/40"}`,children:"DBSCAN (density)"}),"kmeans"===m&&(0,s.jsxs)("div",{className:"flex items-center gap-2 ml-2",children:[(0,s.jsx)("label",{className:"text-xs font-medium text-muted-foreground",children:"K (clusters):"}),(0,s.jsx)("select",{value:f,onChange:e=>{h(Number(e.target.value)),g(null)},className:"text-xs rounded-md border border-border/40 bg-background px-2 py-1.5",children:[2,3,4,5,6,7,8,10].map(e=>(0,s.jsx)("option",{value:e,children:e},e))})]})]}),(0,s.jsx)("div",{className:"rounded-md border border-border/40 bg-muted/20 p-2",children:"kmeans"===m?(0,s.jsxs)("p",{className:"text-[10px] text-muted-foreground",children:[(0,s.jsx)("strong",{className:"text-foreground",children:"K-means"}),": partitions points into K clusters by minimizing within-cluster variance. Requires choosing K. Good for spherical clusters. Silhouette score measures quality (0-1, higher=better)."]}):(0,s.jsxs)("p",{className:"text-[10px] text-muted-foreground",children:[(0,s.jsx)("strong",{className:"text-foreground",children:"DBSCAN"}),": density-based — finds clusters of arbitrary shape by connecting dense regions. No K needed — auto-estimates eps from k-distance graph. Marks sparse points as noise. Good for non-spherical clusters."]})}),j&&(0,s.jsx)("div",{className:"rounded-md border border-primary/30 bg-primary/5 p-2",children:(0,s.jsx)(F.l,{code:j,preamble:`import pandas as pd, numpy as np, json
_USER_DATA_JSON = ${N}
df = pd.DataFrame(json.loads(_USER_DATA_JSON))
`,buttonLabel:"kmeans"===m?`Run K-means (K=${f})`:"Run DBSCAN",onOutput:e=>{try{let t=e.indexOf("{"),a=e.lastIndexOf("}");t>=0&&a>t&&g(JSON.parse(e.substring(t,a+1)))}catch{}},hideTextOutput:!!x,compact:!0})}),x&&(0,s.jsx)(z.D,{data:x,accent:"oklch(0.65 0.18 300)",sourceCode:j}),!l&&(0,s.jsxs)("div",{className:"rounded-md border border-blue-500/30 bg-blue-500/5 p-3",children:[(0,s.jsxs)("p",{className:"text-xs text-blue-700 dark:text-blue-300 font-medium flex items-center gap-2",children:[(0,s.jsx)(ep.A,{className:"h-3.5 w-3.5"})," How it works"]}),(0,s.jsx)("p",{className:"text-[11px] text-blue-600 dark:text-blue-400 mt-1",children:"Pick 2 numeric columns to cluster on. K-means partitions points into K groups (you choose K). DBSCAN finds dense regions automatically (no K needed). Results show a scatter plot with points colored by cluster, silhouette score (K-means), or noise points (DBSCAN)."})]})]})]}):(0,s.jsxs)("div",{className:"rounded-xl border border-border/60 bg-card overflow-hidden",children:[(0,s.jsxs)("div",{className:"flex items-center gap-2 border-b border-border/40 bg-muted/30 px-4 py-2.5",children:[(0,s.jsx)(eu.A,{className:"h-4 w-4 text-primary"}),(0,s.jsx)("span",{className:"text-sm font-semibold",children:"Clustering Analysis"}),(0,s.jsx)(p.E,{variant:"outline",className:"text-[9px]",children:"K-means + DBSCAN"})]}),(0,s.jsxs)("div",{className:"p-4 space-y-3",children:[(0,s.jsx)("p",{className:"text-xs text-muted-foreground",children:"No dataset loaded. Pick a built-in dataset:"}),(0,s.jsx)("div",{className:"grid grid-cols-2 md:grid-cols-3 gap-2",children:K.map(e=>(0,s.jsxs)("button",{disabled:n,onClick:()=>y(e.id),className:"text-left rounded-md border border-border/40 p-2 hover:border-primary hover:bg-primary/5 transition-colors disabled:opacity-50",children:[(0,s.jsx)("p",{className:"text-xs font-semibold",children:e.name}),(0,s.jsx)("p",{className:"text-[10px] text-muted-foreground",children:e.goodFor})]},e.id))}),n&&(0,s.jsxs)("p",{className:"text-xs text-amber-600 flex items-center gap-1",children:[(0,s.jsx)(G.A,{className:"h-3 w-3 animate-spin"})," Loading..."]})]})]})}var eh=a(85757),ex=a(9294),eg=a(97136);let eb=[{id:"california-housing",name:"California Housing (1990 Census)",description:"Median house values for ~20k California block groups. Classic ML regression dataset. 9 numeric columns (median income, house age, rooms, bedrooms, population, households, latitude, longitude, median value).",category:"Government & Public",url:"https://raw.githubusercontent.com/ageron/handson-ml/master/datasets/housing/housing.csv",format:"csv",expectedRows:20640,sampleRows:5e3,approxSizeMb:1.4,source:"US Census 1990 + Pace & Barry 1997",license:"Public Domain",cors:"ok"},{id:"nyc-311-2017-sample",name:"NYC 311 Service Requests (2017 sample)",description:"Citizen complaints to NYC 311 — noise, parking, heat, rodents, etc. ~25k row sample of the full 2.5M+ 2017 dataset. Mix of categorical (complaint type, borough), temporal (created date), and text.",category:"Government & Public",url:"https://raw.githubusercontent.com/lukewhyte/nyc-311-data/master/nyc_311_2017_sample.csv",format:"csv",expectedRows:25e3,sampleRows:5e3,approxSizeMb:5,source:"NYC Open Data Portal",license:"Public Domain",cors:"likely"},{id:"world-bank-gdp",name:"World Bank GDP per Capita (1960-2023)",description:"GDP per capita (current US$) for every country, 1960-2023. ~16k rows (264 countries \xd7 64 years). Temporal + numeric — perfect for trend + autocorrelation analysis.",category:"Government & Public",url:"https://api.worldbank.org/v2/country/all/indicator/NY.GDP.PCAP.CD?format=csv&per_page=20000",format:"csv",expectedRows:16e3,sampleRows:5e3,approxSizeMb:1.2,source:"World Bank Open Data",license:"CC-BY-4.0",cors:"ok"},{id:"apple-daily-stock",name:"Apple (AAPL) Daily Stock Prices",description:"Daily OHLCV (open, high, low, close, volume) for Apple stock. ~10k rows from 1980-present. Temporal + numeric — classic time-series for trend + ACF analysis.",category:"Finance & Economics",url:"https://stooq.com/q/d/l/?s=aapl.us&i=d",format:"csv",expectedRows:10500,sampleRows:5e3,approxSizeMb:.5,source:"Stooq.com",license:"Free for personal use",cors:"likely"},{id:"bitcoin-daily",name:"Bitcoin (BTC-USD) Daily Prices",description:"Daily OHLC for Bitcoin USD since 2014. ~3000 rows. Heavy-tailed returns — kurtosis typically 5-15. Used in finance + risk modeling.",category:"Finance & Economics",url:"https://stooq.com/q/d/l/?s=btcusd&i=d",format:"csv",expectedRows:3100,sampleRows:3e3,approxSizeMb:.2,source:"Stooq.com",license:"Free for personal use",cors:"likely"},{id:"sp500-daily",name:"S&P 500 (^GSPC) Daily Index",description:"S&P 500 daily closing prices since 1950. ~18k rows. Long-running index — perfect for STL decomposition + autocorrelation analysis. Note log-returns approximate normal; raw prices are NOT normal (heavy positive skew).",category:"Finance & Economics",url:"https://stooq.com/q/d/l/?s=^spx&i=d",format:"csv",expectedRows:18500,sampleRows:5e3,approxSizeMb:.9,source:"Stooq.com",license:"Free for personal use",cors:"likely"},{id:"usgs-earthquakes-30d",name:"USGS Earthquakes — Past 30 Days (M2.5+)",description:"All earthquakes worldwide magnitude 2.5+ in the last 30 days. ~10k rows. Numeric: magnitude, depth, latitude, longitude, gap. Categorical: type, magType, net. Temporal: time. Great for outlier + correlation analysis.",category:"Science & Climate",url:"https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.csv",format:"csv",expectedRows:1e4,sampleRows:5e3,approxSizeMb:1.5,source:"USGS Earthquake Hazards Program",license:"Public Domain",cors:"ok"},{id:"nasa-exoplanets",name:"NASA Confirmed Exoplanets",description:"All confirmed exoplanets from NASA Exoplanet Archive. ~5500 rows. Numeric: orbital period, planet radius, equilibrium temperature, eccentricity, host star mass/radius/temperature. Categorical: discovery method. Great for PCA + correlation analysis.",category:"Science & Climate",url:"https://exoplanetarchive.ipac.caltech.edu/TAP/sync?query=select+pl_name,pl_orbper,pl_rade,pl_masse,pl_eqt,pl_orbeccen,st_teff,st_mass,st_rad,discoverymethod,disc_year+from+ps+where+default_flag=1&format=csv",format:"csv",expectedRows:5500,sampleRows:5e3,approxSizeMb:.5,source:"NASA Exoplanet Archive (Caltech/IPAC)",license:"Public Domain",cors:"ok"},{id:"noaa-gistemp-monthly",name:"NOAA GISTEMP Global Temperature Anomaly (1880-present)",description:"Monthly global surface temperature anomaly vs 1951-1980 baseline. ~1700 rows from 1880 to present. Definitive climate dataset — strong positive trend + autocorrelation. Used in IPCC reports.",category:"Science & Climate",url:"https://data.giss.nasa.gov/gistemp/tabledata_v4/GLB.Ts+dSST.csv",format:"csv",expectedRows:1700,sampleRows:1700,approxSizeMb:.1,source:"NASA GISS — GISTEMP v4",license:"Public Domain",cors:"likely"},{id:"cdc-places-health",name:"CDC PLACES — Local Health Data (2022)",description:"Health estimates for ~28k US census tracts. Numeric: prevalence of obesity, diabetes, BPHIGH, etc. Categorical: state, county. Used by public health officials + researchers.",category:"Health & Medicine",url:"https://chronicdata.cdc.gov/resource/cwsq-ngmh.csv?$limit=5000",format:"csv",expectedRows:28e3,sampleRows:5e3,approxSizeMb:2,source:"CDC PLACES (CDC Foundation + Robert Wood Johnson Foundation)",license:"Public Domain",cors:"ok"},{id:"heart-disease-uci",name:"UCI Heart Disease (Cleveland subset)",description:"303 patients with 14 features (age, sex, chest pain type, resting BP, cholesterol, fasting blood sugar, ECG, max heart rate, exercise angina, ST depression, slope, vessels, thal, target). Classic ML classification dataset.",category:"Health & Medicine",url:"https://archive.ics.uci.edu/ml/machine-learning-databases/heart-disease/processed.cleveland.data",format:"csv",expectedRows:303,sampleRows:303,approxSizeMb:.02,source:"UCI Machine Learning Repository (Detrano 1988)",license:"CC-BY-4.0",cors:"likely"},{id:"open-food-facts-sample",name:"Open Food Facts (5k sample)",description:"5k sample of the global food product database — 200+ columns including nutrition (energy, fat, carbs, sugars, proteins, salt), ingredients, allergens, categories. Great for high-dim PCA + correlation analysis.",category:"Health & Medicine",url:"https://static.openfoodfacts.org/data/en.openfoodfacts.org.products.csv.gz",format:"csv",expectedRows:3e6,sampleRows:2e3,approxSizeMb:800,source:"Open Food Facts",license:"ODbL 1.0",cors:"proxy"},{id:"movie-lens-100k",name:"MovieLens 100k Ratings",description:"100k movie ratings (1-5 stars) from 943 users on 1682 movies. 4 columns (user_id, movie_id, rating, timestamp). Classic recommender-system dataset. Categorical + temporal — good for chi-square (user \xd7 rating) + trend analysis.",category:"Technology",url:"https://raw.githubusercontent.com/sidooms/MovieTweetings/master/latest/ratings.csv",format:"csv",expectedRows:1e6,sampleRows:5e3,approxSizeMb:28,source:"MovieTweetings (Dooms 2015) — successor to MovieLens 100k",license:"Public Domain",cors:"ok"},{id:"wine-quality-red",name:"Wine Quality (Red, Vinho Verde)",description:"1599 red Vinho Verde wines from Portugal, 11 physicochemical features (acidity, sugar, chlorides, sulfur dioxide, density, pH, sulphates, alcohol) + quality score (0-10). Numeric + categorical — great for correlation + outlier analysis.",category:"Technology",url:"https://archive.ics.uci.edu/ml/machine-learning-databases/wine-quality/winequality-red.csv",format:"csv",expectedRows:1599,sampleRows:1599,approxSizeMb:.1,source:"UCI ML Repository (Cortez 2009)",license:"CC-BY-4.0",cors:"likely"},{id:"adult-income",name:"Adult Income (Census 1994)",description:"32k records from 1994 US Census. Predict if income >$50k. Mix of numeric (age, hours-per-week, capital-gain/loss) + categorical (workclass, education, marital-status, occupation, race, sex, native-country). Classic fairness + ethics dataset.",category:"Technology",url:"https://archive.ics.uci.edu/ml/machine-learning-databases/adult/adult.data",format:"csv",expectedRows:32561,sampleRows:5e3,approxSizeMb:3.9,source:"UCI ML Repository (Kohavi 1996)",license:"CC-BY-4.0",cors:"likely"},{id:"nba-player-stats",name:"NBA Player Stats (per-game, all-time)",description:"Per-game stats for every NBA player in history (Player, Pos, Tm, G, GS, MP, FG, FGA, 3P, 3PA, FT, TRB, AST, STL, BLK, TOV, PF, PTS). ~28k rows. Categorical-heavy with numeric performance metrics.",category:"Sports & Culture",url:"https://raw.githubusercontent.com/erikgregoryweb/nba-player-stats/master/Seasons_Stats.csv",format:"csv",expectedRows:28e3,sampleRows:5e3,approxSizeMb:4,source:"Basketball Reference (aggregated)",license:"Free for personal use",cors:"likely"},{id:"imdb-top-1000",name:"IMDB Top 1000 Movies & TV",description:"Top 1000 movies/shows on IMDB (Title, Director, Star, Year, Runtime, Rating, Votes, Revenue, Genre). 16 columns. Mix of numeric (rating, runtime, revenue) + categorical (genre, certificate) + temporal (year).",category:"Sports & Culture",url:"https://raw.githubusercontent.com/ashaheen128/imdb-movies-dataset/main/imdb_top_1000.csv",format:"csv",expectedRows:1e3,sampleRows:1e3,approxSizeMb:.15,source:"IMDB Top 1000 (scraped)",license:"Free for personal use",cors:"ok"},{id:"telco-churn",name:"Telco Customer Churn (IBM)",description:"7043 telecom customers (customerID, gender, SeniorCitizen, Partner, tenure, PhoneService, MultipleLines, InternetService, MonthlyCharges, TotalCharges, Churn). Classic churn-prediction dataset. Mix of categorical + numeric — great for chi-square (contract type \xd7 churn).",category:"Sports & Culture",url:"https://raw.githubusercontent.com/IBM/telco-customer-churn-on-icp4d/master/data/Telco-Customer-Churn.csv",format:"csv",expectedRows:7043,sampleRows:5e3,approxSizeMb:.9,source:"IBM Sample Data",license:"CC-BY-4.0",cors:"ok"}],ey=["QNAME","FLAG","RNAME","POS","MAPQ","CIGAR","RNEXT","PNEXT","TLEN","SEQ","QUAL"],ev={1:"paired",2:"properly_paired",4:"unmapped",8:"mate_unmapped",16:"reverse_strand",32:"mate_reverse_strand",64:"first_in_pair",128:"second_in_pair",256:"secondary",512:"qc_fail",1024:"duplicate",2048:"supplementary"},eN=["CHROM","POS","ID","REF","ALT","QUAL","FILTER","INFO"],ej=["seqid","source","type","start","end","score","strand","phase","attributes"],e_=["chrom","chromStart","chromEnd","name","score","strand","thickStart","thickEnd","itemRgb","blockCount","blockSizes","blockStarts"];function ew(e){let t={};for(let a=0;a<e.length;a++){let s=e[a],r=s.indexOf(":");if(-1===r)continue;let n=s.slice(0,r),i=s.slice(r+1),l=i.indexOf(":");if(-1===l)continue;let o=i.slice(0,l),c=i.slice(l+1);"i"===o?t[n]=parseInt(c,10):"f"===o?t[n]=parseFloat(c):t[n]=c}return t}let eS=["QNAME","FLAG","RNAME","POS","MAPQ","CIGAR","RNEXT","PNEXT","TLEN","SEQ","QUAL"],eA=["QNAME","FLAG","RNAME","POS","MAPQ","CIGAR","RNEXT","PNEXT","TLEN","SEQ","QUAL"],ek=["chrom","chromStart","chromEnd","name","score","strand","thickStart","thickEnd","itemRgb","blockCount","blockSizes","blockStarts"],eC=[{id:"sam",name:"SAM (Sequence Alignment/Map)",description:"TAB-delimited text format for read alignments. 11 mandatory columns (QNAME, FLAG, RNAME, POS, MAPQ, CIGAR, RNEXT, PNEXT, TLEN, SEQ, QUAL) + optional TAGs.",category:"Genomics (text)",extensions:[".sam"],mimeTypes:["text/plain","application/x-sam"],parse:async function e(t,a=5e3){let s=(await t.text()).split(/\r?\n/),r=[],n=0,i=!1;for(let e of s){if(0===e.length)continue;if(e.startsWith("@")){n++;continue}if(r.length>=a){i=!0;break}let t=e.split("	");if(t.length<11)continue;let s={QNAME:t[0],FLAG:parseInt(t[1],10),FLAG_DECODED:function(e){let t=[];for(let[a,s]of Object.entries(ev))e&Number(a)&&t.push(s);return t.length?t.join(","):"none"}(parseInt(t[1],10)),RNAME:"*"===t[2]?null:t[2],POS:parseInt(t[3],10),MAPQ:parseInt(t[4],10),CIGAR:t[5],RNEXT:t[6],PNEXT:parseInt(t[7],10),TLEN:parseInt(t[8],10),SEQ:"*"===t[9]?null:t[9],QUAL:"*"===t[10]?null:t[10]};for(let e=11;e<t.length;e++){let a=t[e].split(":");if(3===a.length){let[e,t,r]=a,n=r;"i"===t?n=parseInt(r,10):"f"===t&&(n=parseFloat(r)),s[`TAG_${e}`]=n}}r.push(s)}let l=new Set(ey.concat(["FLAG_DECODED"]));for(let e of r)for(let t of Object.keys(e))l.add(t);return{columns:ey.concat(["FLAG_DECODED"]).concat(Array.from(l).filter(e=>!ey.includes(e)&&"FLAG_DECODED"!==e)),rows:r,metadata:{header_lines:n,format:"SAM"},truncated:i}},available:!0,sampleUrl:"https://raw.githubusercontent.com/samtools/hts-specs/master/test/dat/view.001.sam",sampleName:"Sample SAM (test alignments)",sampleDescription:"Test SAM file from hts-specs — small, ~50 alignments."},{id:"fasta",name:"FASTA (sequence)",description:"Reference genome / protein sequences. '>' header line + sequence lines. Each record becomes a row with id, description, sequence, length, GC content.",category:"Genomics (text)",extensions:[".fasta",".fa",".fna",".faa",".ffn",".frn"],mimeTypes:["text/plain","application/x-fasta"],parse:async function e(t,a=1e3){let s=(await t.text()).split(/\r?\n/),r=[],n=!1,i=null,l="",o=[];function c(){let e;if(null===i)return;if(r.length>=a){n=!0;return}let t=o.join(""),s=0!==(e=t.toUpperCase().replace(/[^A-Z]/g,"")).length&&e.replace(/[^ACGTUNRYSWKMBDHV]/g,"").length/e.length>.9,c=s?function(e){let t=e.toUpperCase(),a=0,s=0;for(let e of t)"G"===e||"C"===e?a++:("A"===e||"T"===e||"U"===e)&&s++;return a+s===0?null:a/(a+s)*100}(t):null,d=s?function(e){let t=e.toUpperCase(),a={A:0,C:0,G:0,T:0,U:0,N:0,other:0};for(let e of t)void 0!==a[e]?a[e]++:a.other++;return a}(t):{};r.push({id:i,description:l||null,sequence:t,length:t.length,type:s?t.includes("U")?"RNA":"DNA":"protein",gc_content_pct:null!==c?Math.round(100*c)/100:null,...d}),i=null,l="",o=[]}for(let e of s)if(e.startsWith(">")){if(c(),n)break;let t=e.slice(1).trim(),a=t.indexOf(" ");-1===a?(i=t,l=""):(i=t.slice(0,a),l=t.slice(a+1).trim())}else{if(e.startsWith(";"))continue;null!==i&&o.push(e.trim())}return n||c(),{columns:["id","description","sequence","length","type","gc_content_pct","A","C","G","T","U","N","other"],rows:r,metadata:{format:"FASTA",sequences:r.length},truncated:n}},available:!0,sampleUrl:"https://raw.githubusercontent.com/vcrublet/ParseFASTA/main/example_files/HIV-1.fasta",sampleName:"HIV-1 genome (FASTA, ~9.7kb)",sampleDescription:"Single-sequence HIV-1 genome — small enough for instant load."},{id:"fastq",name:"FASTQ (sequencing reads)",description:"4-line records: @id+desc, sequence, +, quality scores. Each read becomes a row with id, sequence, length, GC content, mean quality.",category:"Genomics (text)",extensions:[".fastq",".fq"],mimeTypes:["text/plain","application/x-fastq"],parse:async function e(t,a=5e3){let s=(await t.text()).split(/\r?\n/),r=[],n=!1,i=0;for(;i<s.length;){if(r.length>=a){n=!0;break}let e=s[i];if(!e||0===e.length||!e.startsWith("@")){i++;continue}let t=e.slice(1).trim(),l=t.indexOf(" "),o=-1===l?t:t.slice(0,l),c=-1===l?"":t.slice(l+1).trim(),d=(s[i+1]??"").trim(),m=(s[i+3]??"").trim();d&&m&&r.push({id:o,description:c||null,sequence:d,length:d.length,gc_content_pct:Math.round(100*function(e){let t=e.toUpperCase(),a=0,s=0;for(let e of t)"G"===e||"C"===e?a++:("A"===e||"T"===e)&&s++;return a+s===0?0:a/(a+s)*100}(d))/100,mean_quality_phred:Math.round(100*function(e){if(0===e.length)return 0;let t=0;for(let a=0;a<e.length;a++)t+=e.charCodeAt(a)-33;return t/e.length}(m))/100,quality_scores:m}),i+=4}return{columns:["id","description","sequence","length","gc_content_pct","mean_quality_phred","quality_scores"],rows:r,metadata:{format:"FASTQ",reads:r.length},truncated:n}},available:!0,sampleUrl:"https://raw.githubusercontent.com/lgautier/RcppML-test-data/master/test.fastq",sampleName:"Sample FASTQ reads",sampleDescription:"Small test FASTQ file with ~100 reads."},{id:"vcf",name:"VCF (Variant Call Format)",description:"TAB-delimited variant calls. 8 fixed columns (CHROM, POS, ID, REF, ALT, QUAL, FILTER, INFO) + sample columns. Meta lines (##) parsed separately.",category:"Genomics (text)",extensions:[".vcf"],mimeTypes:["text/plain","application/x-vcf"],parse:async function e(t,a=5e3){let s=(await t.text()).split(/\r?\n/),r=[],n=0,i=!1,l=[],o=new Set;for(let e of s){if(0===e.length)continue;if(e.startsWith("##")){n++;continue}if(e.startsWith("#CHROM")){let t=e.slice(1).split("	");t.length>8&&(l=t.slice(9));continue}if(r.length>=a){i=!0;break}let t=e.split("	");if(t.length<8)continue;let s=function(e){let t={};if(!e||"."===e)return t;for(let a of e.split(";")){let e=a.indexOf("=");if(-1===e)t[a]=!0;else{let s=a.slice(0,e),r=a.slice(e+1),n=Number(r);t[s]=!isNaN(n)&&isFinite(n)&&""!==r?n:r}}return t}(t[7]);for(let e of Object.keys(s))o.add(e);let c={CHROM:t[0],POS:parseInt(t[1],10),ID:"."===t[2]?null:t[2],REF:t[3],ALT:"."===t[4]?null:t[4].split(","),QUAL:"."===t[5]?null:parseFloat(t[5]),FILTER:t[6],INFO_RAW:t[7],...Object.fromEntries(Object.entries(s).map(([e,t])=>[`INFO_${e}`,t]))};for(let e=9;e<t.length;e++){let a=e-9,s=l[a]??`SAMPLE_${a}`;c[`GT_${s}`]=t[e]}r.push(c)}return{columns:[...eN,"INFO_RAW",...Array.from(o).sort().map(e=>`INFO_${e}`),...l.map(e=>`GT_${e}`)],rows:r,metadata:{format:"VCF",meta_lines:n,sample_count:l.length,info_keys:Array.from(o).sort()},truncated:i}},available:!0,sampleUrl:"https://raw.githubusercontent.com/vcftools/vcftools/master/examples/sample.vcf",sampleName:"Sample VCF (variant calls)",sampleDescription:"Sample VCF from vcftools — ~10 variants, easy to inspect."},{id:"gff",name:"GFF/GTF (genome annotations)",description:"TAB-delimited genome annotations. 9 columns: seqid, source, type, start, end, score, strand, phase, attributes.",category:"Genomics (text)",extensions:[".gff",".gff3",".gtf"],mimeTypes:["text/plain","application/x-gff"],parse:async function e(t,a=5e3){let s=(await t.text()).split(/\r?\n/),r=[],n=0,i=!1,l=new Set,o=!1;for(let e of s){if(0===e.length)continue;if(e.startsWith("#")){n++;continue}if(r.length>=a){i=!0;break}let t=e.split("	");if(t.length<8)continue;!o&&t[8]&&t[8].includes('"')&&(o=!0);let s=function(e,t){let a={};if(!e||"."===e)return a;if(t){let t,s=/(\w+)\s+"([^"]*)"\s*;?/g;for(;null!==(t=s.exec(e));)a[t[1]]=t[2]}else for(let t of e.split(";")){let e=t.indexOf("=");if(-1!==e){let s=t.slice(0,e).trim(),r=t.slice(e+1).trim();a[s]=r}}return a}(t[8]??".",o);for(let e of Object.keys(s))l.add(e);let c={seqid:t[0],source:t[1],type:t[2],start:parseInt(t[3],10),end:parseInt(t[4],10),score:"."===t[5]?null:parseFloat(t[5]),strand:t[6],phase:"."===t[7]?null:parseInt(t[7],10),attributes_raw:t[8]??"",...Object.fromEntries(Object.entries(s).map(([e,t])=>[`attr_${e}`,t]))};r.push(c)}return{columns:[...ej,"attributes_raw",...Array.from(l).sort().map(e=>`attr_${e}`)],rows:r,metadata:{format:o?"GTF":"GFF3",meta_lines:n,attr_keys:Array.from(l).sort()},truncated:i}},available:!0,sampleUrl:"https://raw.githubusercontent.com/The-Sequence-Ontology/SO-Ontologies/master/Examples/gff_example.gff3",sampleName:"Sample GFF3 annotations",sampleDescription:"Sample GFF3 file from the Sequence Ontology."},{id:"bed",name:"BED (genomic intervals)",description:"TAB-delimited genomic intervals. 3-12 columns: chrom, chromStart, chromEnd, name, score, strand, thickStart, thickEnd, itemRgb, blockCount, blockSizes, blockStarts.",category:"Genomics (text)",extensions:[".bed"],mimeTypes:["text/plain","application/x-bed"],parse:async function e(t,a=5e3){let s=(await t.text()).split(/\r?\n/),r=[],n=0,i=!1,l=0;for(let e of s){if(0===e.length)continue;if(e.startsWith("#")||e.startsWith("track")||e.startsWith("browser")){n++;continue}if(r.length>=a){i=!0;break}let t=e.split("	");if(t.length<3)continue;l=Math.max(l,t.length);let s={};for(let e=0;e<t.length;e++){let a=e_[e];1===e||2===e||4===e||6===e||7===e||9===e||5===e?s[a]="."===t[e]?null:parseInt(t[e],10):s[a]=t[e]}r.push(s)}return{columns:e_.slice(0,l),rows:r,metadata:{format:"BED",meta_lines:n,column_count:l},truncated:i}},available:!0,sampleUrl:"https://raw.githubusercontent.com/arq5x/bedtools2/master/test/data/test1.bed",sampleName:"Sample BED intervals (bedtools test)",sampleDescription:"Small test BED file with ~10 intervals."},{id:"gfa",name:"GFA (Graph Alignment Format)",description:"Graph-based assembly format. Segments (S), links (L), paths (P). TAB-delimited with format-specific tags.",category:"Genomics (text)",extensions:[".gfa",".gfa1",".gfa2"],mimeTypes:["text/plain","application/x-gfa"],parse:async function e(t,a=5e3){let s=(await t.text()).split(/\r?\n/),r=[],n=!1,i=0;for(let e of s){if(0===e.length)continue;if(r.length>=a){n=!0;break}let t=e.split("	"),s=t[0];if("H"===s){i++;continue}let l={record_type:s};if("S"===s)l.name=t[1],l.sequence="*"===t[2]?null:t[2],Object.assign(l,ew(t.slice(3)));else if("L"===s)l.from=t[1],l.from_orient=t[2],l.to=t[3],l.to_orient=t[4],l.overlap=t[5]??null,Object.assign(l,ew(t.slice(6)));else if("P"===s)l.name=t[1],l.segment_names=t[2],l.overlaps=t[3]??null,Object.assign(l,ew(t.slice(4)));else for(let e=1;e<t.length;e++)l[`field_${e}`]=t[e];r.push(l)}let l=new Set(["record_type"]);for(let e of r)for(let t of Object.keys(e))l.add(t);return{columns:Array.from(l),rows:r,metadata:{format:"GFA",header_lines:i},truncated:n}},available:!0,sampleUrl:"https://raw.githubusercontent.com/GFA-spec/GFA-spec/master/tests/gfa1_spec.gfa",sampleName:"Sample GFA (spec example)",sampleDescription:"GFA spec example file — small graph."},{id:"bam",name:"BAM (Binary Alignment/Map)",description:"BGZF-compressed binary SAM. Same columns as SAM but binary-encoded for efficiency. Requires htslib-style parsing.",category:"Genomics (binary)",extensions:[".bam"],mimeTypes:["application/x-bam","application/octet-stream"],magicBytes:[[31,139,8]],parse:async function e(t,s=5e3){let r;try{let e=await Promise.all([a.e(1997),a.e(7601)]).then(a.bind(a,7601));r=e.BamFile??e.default}catch(e){throw Error(`BAM parser requires @gmod/bam. Install: bun add @gmod/bam. Error: ${e.message}`)}let n=new Uint8Array(await t.arrayBuffer()),i=new r({filehandle:{read:async(e,t,a,s)=>{let r=n.subarray(s,s+a),i=Math.min(a,r.length);for(let a=0;a<i;a++)e[t+a]=r[a];return{bytesRead:i,buffer:e}},stat:async()=>({size:n.length})}});await i.getHeader();let l=i.chrToIndex?Array.from(i.chrToIndex.keys()):[],o=[],c=!1;for(let e of l){if(o.length>=s){c=!0;break}let t=i.chrToIndex.get(e);if(void 0!==t)try{await i.streamRecords(t,0,async t=>o.length>=s?(c=!0,!1):(o.push({QNAME:t.name,FLAG:t.flags,FLAG_DECODED:function(e){let t=[];return 1&e&&t.push("paired"),2&e&&t.push("properly_paired"),4&e&&t.push("unmapped"),8&e&&t.push("mate_unmapped"),16&e&&t.push("reverse_strand"),32&e&&t.push("mate_reverse_strand"),64&e&&t.push("first_in_pair"),128&e&&t.push("second_in_pair"),256&e&&t.push("secondary"),512&e&&t.push("qc_fail"),1024&e&&t.push("duplicate"),2048&e&&t.push("supplementary"),t.length?t.join(","):"none"}(t.flags),RNAME:e,POS:t.start+1,MAPQ:t.mappingQuality,CIGAR:t.CIGAR,RNEXT:t.next_ref?l[t.next_ref]:"*",PNEXT:t.next_pos?t.next_pos+1:0,TLEN:t.template_length||0,SEQ:t.seq,QUAL:t.qual?t.qual:null}),!0))}catch(e){continue}}return{columns:eS.concat(["FLAG_DECODED"]),rows:o,metadata:{format:"BAM",reference_sequences:l,ref_count:l.length},truncated:c}},needsWasm:!0,available:!0,sampleUrl:"https://raw.githubusercontent.com/GMOD/jbrowse-components/main/test_data/seq/demo1/test_sv.bw",sampleName:"BAM sample (test alignments)",sampleDescription:"Small test BAM file — ~100 alignments. CORS-permissive."},{id:"geotiff",name:"GeoTIFF (georeferenced imagery)",description:"TIFF + geospatial metadata. Raster bands sampled as a table — each row is a pixel with bands as columns + lat/lon (if CRS known).",category:"Geospatial (binary)",extensions:[".tif",".tiff",".geotiff"],mimeTypes:["image/tiff","application/x-geotiff"],magicBytes:[[73,73,42,0],[77,77,0,42]],parse:async function e(t,s=5e3){let r,n;try{r=await Promise.all([a.e(1981),a.e(9304),a.e(5237),a.e(4971)]).then(a.bind(a,35933))}catch(e){throw Error(`GeoTIFF parser requires geotiff. Install: bun add geotiff. Error: ${e.message}`)}let i=await t.arrayBuffer(),l=r.default??r,o=await l.fromArrayBuffer(i),c=await o.getImage(),d=c.getWidth(),m=c.getHeight(),u=c.getSamplesPerPixel(),p=c.getFileDirectory(),f=c.getGeoKeys?c.getGeoKeys():{},h=c.getOrigin?c.getOrigin():[0,0],x=c.getResolution?c.getResolution():[1,1],g=Math.max(1,Math.ceil(Math.sqrt(d*m/s))),b=Math.min(d,Math.ceil(s/Math.ceil(m/g))*g),y=Math.min(m,Math.ceil(s/Math.ceil(b/g))*g);try{n=await c.readRasters({window:[0,0,b,y],width:b,height:y})}catch(e){throw Error(`Failed to read GeoTIFF raster: ${e.message}`)}let v=[],N=!1;for(let e=0;e<y;e+=g){for(let t=0;t<b;t+=g){if(v.length>=s){N=!0;break}let a=e*b+t,r={x:t,y:e,lat:h[1]-e*x[1],lon:h[0]+t*x[0]};for(let e=0;e<u;e++){let t=n[e];t&&(r[`band_${e+1}`]=t[a])}v.push(r)}if(N)break}return{columns:["x","y","lat","lon"].concat(Array.from({length:u},(e,t)=>`band_${t+1}`)),rows:v,metadata:{format:"GeoTIFF",image_width:d,image_height:m,samples_per_pixel:u,bits_per_sample:p.BitsPerSample,photometric:p.PhotometricInterpretation,geo_keys:f,origin:h,resolution:x,sampled_step:g},truncated:N}},needsWasm:!0,available:!0,sampleUrl:"https://raw.githubusercontent.com/geotiff/geotiff.js/mastertest/data/rgb_deflate.tif",sampleName:"Sample GeoTIFF (3-band RGB)",sampleDescription:"geotiff.js test file — small RGB raster, ~200x150 pixels."},{id:"netcdf",name:"NetCDF (Network Common Data Form)",description:"Multi-dimensional scientific arrays. Variables become columns; first dimension sampled. Climate models, ocean data, MODIS.",category:"Geospatial (binary)",extensions:[".nc",".nc4",".cdf"],mimeTypes:["application/x-netcdf","application/octet-stream"],magicBytes:[[137,72,68,70]],parse:async function e(t,s=5e3){let r;try{r=await a.e(6862).then(a.bind(a,36862))}catch(e){throw Error(`NetCDF parser requires netcdfjs. Install: bun add netcdfjs. Error: ${e.message}`)}let n=new Uint8Array(await t.arrayBuffer()),i=new(r.default??r)(n),l=i.variables||[],o=l.find(e=>e.dimensions&&1===e.dimensions.length)??l.find(e=>e.dimensions&&2===e.dimensions.length),c=l.filter(e=>e.dimensions&&1===e.dimensions.length);if(!o)throw Error("No 1-D or 2-D variable found in NetCDF file");let d=i.dimensions.find(e=>e.name===o.dimensions[0].name)?.size??0,m=[],u=Math.min(d,s),p={};for(let e of c)try{let t=i.getDataVariable(e.name);p[e.name]=Array.from(t).slice(0,u)}catch(t){p[e.name]=[]}for(let e=0;e<u;e++){let t={};for(let a of Object.keys(p))t[a]=p[a][e]??null;m.push(t)}let f=c.map(e=>e.name),h=u<d;return{columns:f,rows:m,metadata:{format:"NetCDF",dimensions:i.dimensions,variables:l.map(e=>({name:e.name,type:e.type,shape:e.dimensions})),globalAttributes:i.globalAttributes??[]},truncated:h}},needsWasm:!1,available:!0,sampleUrl:"https://raw.githubusercontent.com/cheminfo/netcdfjs/mastertest/data/example.nc",sampleName:"Sample NetCDF (small)",sampleDescription:"netcdfjs test file — small dimensions, easy to inspect."},{id:"hdf5",name:"HDF5 (Hierarchical Data Format)",description:"Hierarchical groups + datasets. Pick the largest dataset, sample first N rows. Used by MODIS, earth science, particle physics.",category:"Geospatial (binary)",extensions:[".h5",".hdf5",".he5"],mimeTypes:["application/x-hdf5","application/octet-stream"],magicBytes:[[137,72,68,70]],parse:async function e(t,s=5e3){let r;try{r=await Promise.all([a.e(748),a.e(4188)]).then(a.bind(a,34188))}catch(e){throw Error(`HDF5 parser requires h5wasm. Install: bun add h5wasm. Error: ${e.message}`)}let n=await t.arrayBuffer(),i="input.h5",l=await r.ready;l.FS.writeFile(i,new Uint8Array(n));let o=new(r.File??l.File)(i,"r"),c=[];if(!function e(t,a=""){for(let s of t.items??[]){let t=s[0],r=s[1],n=a+"/"+t;"Group"===r.type?e(r,n):"Dataset"===r.type&&c.push({path:n,shape:r.shape,dtype:r.dtype})}}(o),0===c.length)throw o.close(),Error("No datasets found in HDF5 file");let d=c.filter(e=>1===e.shape.length||2===e.shape.length);if(0===d.length)throw o.close(),Error("No 1-D or 2-D datasets found in HDF5 file");let m=d.map(e=>({...e,size:e.shape.reduce((e,t)=>e*t,1)})).sort((e,t)=>t.size-e.size)[0],u=o.get(m.path).value,p=[],f=[],h=!1;if(1===m.shape.length){f=[m.path.split("/").pop()??"value"];let e=Array.from(u).slice(0,s);p=e.map(e=>({[f[0]]:e})),h=e.length<m.shape[0]}else{let e=m.shape[1];f=Array.from({length:e},(e,t)=>`col_${t}`);let t=Math.min(m.shape[0],s);for(let a=0;a<t;a++){let t={};for(let s=0;s<e;s++)t[`col_${s}`]=u[a*e+s];p.push(t)}h=t<m.shape[0]}return o.close(),{columns:f,rows:p,metadata:{format:"HDF5",datasets_found:c.length,selected_dataset:m.path,selected_shape:m.shape,selected_dtype:m.dtype},truncated:h}},needsWasm:!0,available:!0,sampleUrl:"https://raw.githubusercontent.com/usnistgov/h5wasm/mastertest/data/test.h5",sampleName:"Sample HDF5 (test file)",sampleDescription:"h5wasm test file — small datasets."},{id:"parquet",name:"Parquet (Apache columnar)",description:"Apache Parquet — columnar storage for big data. Row groups sampled for table view. Used by Spark, Iceberg, Delta Lake, BigQuery exports.",category:"Big Data (columnar)",extensions:[".parquet",".pqt"],mimeTypes:["application/x-parquet","application/octet-stream"],magicBytes:[[80,65,82,49]],parse:async function e(t,s=5e3){let r;try{r=await a.e(4645).then(a.bind(a,94645))}catch(e){throw Error(`Parquet parser requires @duckdb/duckdb-wasm. Error: ${e.message}`)}let n=await r.selectBundle({mvp:{mainModule:"/_next/static/wasm/duckdb-mvp.wasm",mainWorker:"/_next/static/wasm/duckdb-mvp.worker.js"},ehstanden:{mainModule:"/_next/static/wasm/duckdb-ehstanden.wasm",mainWorker:"/_next/static/wasm/duckdb-ehstanden.worker.js"}}),i=new Worker(n.mainWorker),l=new r.ConsoleLogger,o=new r.AsyncDuckDB(l,i);await o.instantiate(n.mainModule,n.pthreadWorker);let c=new Uint8Array(await t.arrayBuffer());await o.registerFileBuffer("input.parquet",c);let d=await o.connect(),m=await d.query(`SELECT * FROM read_parquet('input.parquet') LIMIT ${s}`);await d.close(),await o.terminate(),i.terminate();let u=[],p=m.schema.fields.map(e=>e.name);for(let e of m.toArray()){let t={};for(let a of p){let s=e[a];"bigint"==typeof s&&(s=Number(s)),t[a]=s}u.push(t)}return{columns:p,rows:u,metadata:{format:"Parquet",schema:m.schema.fields.map(e=>({name:e.name,type:e.type.toString()}))},truncated:u.length===s}},needsWasm:!0,available:!0,sampleUrl:"https://raw.githubusercontent.com/duckdb/duckdb/maintest/data/parquet-testing/binary.parquet",sampleName:"Sample Parquet (DuckDB test)",sampleDescription:"DuckDB's test Parquet file — small, 1 row group."},{id:"avro",name:"Avro (Apache row-based)",description:"Apache Avro — row-based serialization with embedded schema. Records sampled for table view. Used by Kafka, Hadoop, data pipelines.",category:"Big Data (columnar)",extensions:[".avro"],mimeTypes:["application/x-avro","application/octet-stream"],magicBytes:[[79,98,106]],parse:async function e(t,s=5e3){let r;try{r=await Promise.all([a.e(9304),a.e(6846)]).then(a.t.bind(a,26846,23))}catch(e){throw Error(`Avro parser requires avsc. Install: bun add avsc. Error: ${e.message}`)}let n=new Uint8Array(await t.arrayBuffer()),i=r.createBlockDecoder();return new Promise((e,t)=>{let a=[],r=null,l=!1;i.on("metadata",e=>{r=e?.schema??null}).on("data",e=>{if(a.length>=s){l=!0,i.removeAllListeners("data"),i.emit("end");return}a.push(e)}).on("end",()=>{let t=new Set;for(let e of a)for(let a of Object.keys(e))t.add(a);e({columns:Array.from(t),rows:a,metadata:{format:"Avro",schema:r},truncated:l})}).on("error",e=>{t(Error(`Avro parse failed: ${e.message}`))}),i.decode(n)})},needsWasm:!1,available:!0,sampleUrl:"https://raw.githubusercontent.com/mtth/avsc/mastertest/identity.avro",sampleName:"Sample Avro (avsc test)",sampleDescription:"avsc's identity test file — small, ~5 records."},{id:"cram",name:"CRAM (Compressed BAM, reference-based)",description:"30-50% smaller than BAM. Uses reference-based compression — stores only differences from the reference genome. Used by 1000 Genomes, gnomAD.",category:"Genomics (binary)",extensions:[".cram"],mimeTypes:["application/x-cram","application/octet-stream"],parse:async function(e,t=5e3){let s;try{let e=await Promise.all([a.e(1997),a.e(7537)]).then(a.bind(a,27537));s=e.CramFile??e.default}catch(e){throw Error(`CRAM parser requires @gmod/cram. Error: ${e.message}`)}let r=new Uint8Array(await e.arrayBuffer()),n=new s({filehandle:{read:async(e,t,a,s)=>{let n=r.subarray(s,s+a),i=Math.min(a,n.length);for(let a=0;a<i;a++)e[t+a]=n[a];return{bytesRead:i,buffer:e}},stat:async()=>({size:r.length})}});await n.getDefinition();let i=[],l=!1;try{for(let e of(await n.recordsAtIndex(0,0,t+1))){if(i.length>=t){l=!0;break}i.push({QNAME:e.readName,FLAG:e.flags,FLAG_DECODED:function(e){let t=[];return 1&e&&t.push("paired"),4&e&&t.push("unmapped"),16&e&&t.push("reverse_strand"),256&e&&t.push("secondary"),1024&e&&t.push("duplicate"),2048&e&&t.push("supplementary"),t.length?t.join(","):"none"}(e.flags),RNAME:void 0!==e.sequenceId?`ref_${e.sequenceId}`:"*",POS:e.alignmentStart??0,MAPQ:e.mappingQuality??0,CIGAR:e.cigar?e.cigar.map(e=>`${e.length}${e.op}`).join(""):"*",RNEXT:"*",PNEXT:e.mate?e.mate.alignmentStart??0:0,TLEN:0,SEQ:e.readBases||null,QUAL:null})}}catch(e){throw Error(`CRAM parsing requires an index or reference sequence. Error: ${e.message}`)}return{columns:eA.concat(["FLAG_DECODED"]),rows:i,metadata:{format:"CRAM",records:i.length},truncated:l}},needsWasm:!1,available:!0},{id:"arrow",name:"Apache Arrow / Feather (columnar IPC)",description:"In-memory columnar format used by R (feather), Python (pyarrow), Spark. Zero-copy reads. The .arrow/.feather file format is the IPC stream.",category:"Big Data (columnar)",extensions:[".arrow",".feather",".ipc"],mimeTypes:["application/x-arrow","application/vnd.apache.arrow.file","application/octet-stream"],magicBytes:[[65,82,82,79,87,49]],parse:async function(e,t=5e3){let s;try{s=await a.e(5264).then(a.bind(a,55264))}catch(e){throw Error(`Arrow parser requires apache-arrow. Error: ${e.message}`)}let r=await e.arrayBuffer(),n=s.Table.from(r),i=n.schema.fields.map(e=>e.name),l=[],o=!1;for(let e of n){if(l.length>=t){o=!0;break}let a={};for(let t of i){let s=e[t];"bigint"==typeof s&&(s=Number(s)),a[t]=s}l.push(a)}return{columns:i,rows:l,metadata:{format:"Apache Arrow / Feather",schema:n.schema.fields.map(e=>({name:e.name,type:e.type.toString()}))},truncated:o}},needsWasm:!1,available:!0},{id:"orc",name:"ORC (Optimized Row Columnar, Hive)",description:"Apache Hive's columnar format. Similar to Parquet but with light-weight indexes + bloom filters. Parsed via DuckDB-WASM.",category:"Big Data (columnar)",extensions:[".orc"],mimeTypes:["application/x-orc","application/octet-stream"],magicBytes:[[79,82,67]],parse:async function(e,t=5e3){try{let s=await a.e(4645).then(a.bind(a,94645)),r=await s.selectBundle({mvp:{mainModule:"/_next/static/wasm/duckdb-mvp.wasm",mainWorker:"/_next/static/wasm/duckdb-mvp.worker.js"}}),n=new Worker(r.mainWorker),i=new s.ConsoleLogger,l=new s.AsyncDuckDB(i,n);await l.instantiate(r.mainModule,r.pthreadWorker);let o=await e.arrayBuffer(),c=new Uint8Array(o);await l.registerFileBuffer("input.orc",c);let d=await l.connect(),m=await d.query(`SELECT * FROM read_orc('input.orc') LIMIT ${t}`);await d.close(),await l.terminate(),n.terminate();let u=[],p=m.schema.fields.map(e=>e.name);for(let e of m.toArray()){let t={};for(let a of p){let s=e[a];"bigint"==typeof s&&(s=Number(s)),t[a]=s}u.push(t)}return{columns:p,rows:u,metadata:{format:"ORC (via DuckDB-WASM)",schema:m.schema.fields.map(e=>({name:e.name,type:e.type.toString()}))},truncated:u.length===t}}catch(e){throw Error(`ORC parsing requires DuckDB-WASM with ORC support. Error: ${e.message}. Tip: convert ORC to Parquet using pyarrow: import pyarrow.orc; table = pyarrow.orc.ORCFile('input.orc').read(); pyarrow.parquet.write_table(table, 'output.parquet')`)}},needsWasm:!0,available:!0},{id:"stac",name:"STAC (SpatioTemporal Asset Catalog)",description:"JSON-based catalog for satellite scenes (Sentinel-2, Landsat). Describes what/where/when + links to actual imagery assets.",category:"Geospatial (binary)",extensions:[".json",".geojson"],mimeTypes:["application/json","application/geo+json"],parse:async function(e,t=5e3){let a=JSON.parse(await e.text()),s=[];if("Feature"===a.type&&a.properties){let e={id:a.id??null,geometry_type:a.geometry?.type??null,bbox:a.bbox?JSON.stringify(a.bbox):null,...Object.fromEntries(Object.entries(a.properties).map(([e,t])=>[`prop_${e}`,"object"==typeof t?JSON.stringify(t):t])),asset_count:a.assets?Object.keys(a.assets).length:0,asset_keys:a.assets?Object.keys(a.assets).join(","):null};s.push(e)}else if("FeatureCollection"===a.type&&Array.isArray(a.features))for(let e of a.features){if(s.length>=t)break;if(!e.properties)continue;let a={id:e.id??null,geometry_type:e.geometry?.type??null,...Object.fromEntries(Object.entries(e.properties).map(([e,t])=>[`prop_${e}`,"object"==typeof t?JSON.stringify(t):t]))};s.push(a)}else if("Catalog"===a.type||"Collection"===a.type)if(a.summaries)for(let[e,r]of Object.entries(a.summaries))for(let a of(Array.isArray(r)?r:[r]).slice(0,t))s.push({summary_key:e,value:"object"==typeof a?JSON.stringify(a):a});else s.push({stac_version:a.stac_version??null,id:a.id??null,description:a.description??null,license:a.license??null,extent_temporal:a.extent?.temporal?JSON.stringify(a.extent.temporal):null,extent_spatial:a.extent?.spatial?JSON.stringify(a.extent.spatial):null,link_count:a.links?a.links.length:0});else throw Error("Not a valid STAC Item, Collection, or Catalog.");let r=new Set;for(let e of s)for(let t of Object.keys(e))r.add(t);return{columns:Array.from(r),rows:s,metadata:{format:"STAC",stac_type:a.type,stac_version:a.stac_version},truncated:!1}},needsWasm:!1,available:!0},{id:"bigbed",name:"BigBed (binary BED, UCSC)",description:"Binary indexed format for genomic intervals at scale. Used by UCSC Genome Browser + ENCODE. Stores chrom/start/end/name/score/strand.",category:"Genomics (binary)",extensions:[".bb",".bigbed"],mimeTypes:["application/x-bigbed","application/octet-stream"],magicBytes:[[135,137,244,149]],parse:async function(e,t=5e3){let s;try{let e=await a.e(1999).then(a.bind(a,1999));s=e.BigBed??e.default}catch(e){throw Error(`BigBed parser requires @gmod/bed. Error: ${e.message}`)}let r=new Uint8Array(await e.arrayBuffer()),n=new s({filehandle:{read:async(e,t,a,s)=>{let n=r.subarray(s,s+a),i=Math.min(a,n.length);for(let a=0;a<i;a++)e[t+a]=n[a];return{bytesRead:i,buffer:e}},stat:async()=>({size:r.length})}});await n.getHeader();let i=Object.keys(n.chrToIndex??{}),l=[],o=!1;for(let e of i.slice(0,5)){if(l.length>=t){o=!0;break}try{for(let a of(await n.getFeatures(e,0,1e9))){if(l.length>=t){o=!0;break}l.push({chrom:e,chromStart:a.start,chromEnd:a.end,name:a.name??null,score:a.score??null,strand:a.strand??null})}}catch(e){continue}}return{columns:l.length>0?Object.keys(l[0]).filter(e=>ek.includes(e)):ek.slice(0,5),rows:l,metadata:{format:"BigBed",reference_sequences:i,ref_count:i.length},truncated:o}},needsWasm:!1,available:!0}];async function e$(e){let t,a=(s=e.name,t="."+s.split(".").pop()?.toLowerCase(),eC.find(e=>e.extensions.includes(t)));if(a)return a;var s,r=new Uint8Array(await e.slice(0,16).arrayBuffer());for(let e of eC)if(e.magicBytes){for(let t of e.magicBytes)if(t.every((e,t)=>r[t]===e))return e}}var eR=a(21975),eT=a(97233),eM=a(92451),eF=a(33024),eE=a(48368),eD=a(93219);function eP(e){let t=e.split(/\r?\n/).filter(e=>e.trim().length>0);if(0===t.length)return{columns:[],rows:[]};function a(e){let t=[],a="",s=!1;for(let r=0;r<e.length;r++){let n=e[r];s?'"'===n?'"'===e[r+1]?(a+='"',r++):s=!1:a+=n:'"'===n?s=!0:","===n?(t.push(a),a=""):a+=n}return t.push(a),t}let s=a(t[0]).map(e=>e.trim()),r=[];for(let e=1;e<t.length;e++){let n=a(t[e]),i={};for(let e=0;e<s.length;e++){let t=String(n[e]??"").trim();if(""===t)i[s[e]]=null;else{let a=Number(t);i[s[e]]=!isNaN(a)&&isFinite(a)&&""!==t?a:t}}r.push(i)}return{columns:s,rows:r}}function eO(e){let t=JSON.parse(e),a=Array.isArray(t)?t:t?.rows??[];return 0===a.length?{columns:[],rows:[]}:{columns:Object.keys(a[0]),rows:a}}async function eL(e,t,a){let s=await fetch(e);if(!s.ok)throw Error(`HTTP ${s.status} ${s.statusText} — ${e}`);if(!s.body)return{text:await s.text(),rowsLoaded:0,truncated:!1};let r=s.headers.get("Content-Length"),n=r?parseInt(r,10):void 0;if("json"===a)return{text:await s.text(),rowsLoaded:0,expectedTotalBytes:n,truncated:!1};let i=s.body.getReader(),l=new TextDecoder,o="",c=null,d=[],m=!1;try{for(;;){let{done:e,value:a}=await i.read();if(e)break;let s=(o+=l.decode(a,{stream:!0})).split(/\r?\n/);for(let e of(o=s.pop()||"",s))if(0!==e.trim().length){if(null===c)c=e;else if(d.push(e),d.length>=t){m=!0,i.cancel("Loaded enough rows");break}}if(m)break}}finally{try{i.releaseLock()}catch{}}if(!c)throw Error("No header row found in CSV stream");return{text:[c,...d].join("\n"),rowsLoaded:d.length,expectedTotalBytes:n,truncated:m}}let eq=[{id:"iris",name:"Iris (150 rows)",description:"Classic ML dataset — 4 numeric + 1 categorical (species). Good for correlation, distribution, PCA.",url:"https://raw.githubusercontent.com/mwaskom/seaborn-data/master/iris.csv",format:"csv"},{id:"penguins",name:"Penguins (333 rows)",description:"Palmer Penguins — 4 numeric + 3 categorical. Good for correlation, chi-square, distribution.",url:"https://raw.githubusercontent.com/mwaskom/seaborn-data/master/penguins.csv",format:"csv"},{id:"titanic",name:"Titanic (891 rows)",description:"Passenger survival — mix of numeric + categorical. Good for chi-square, frequency, outliers.",url:"https://raw.githubusercontent.com/datasciencedojo/datasets/master/titanic.csv",format:"csv"},{id:"boston-housing",name:"Boston Housing (506 rows)",description:"Housing prices — 14 numeric columns. Good for correlation, PCA, outliers, distribution.",url:"https://raw.githubusercontent.com/selva86/datasets/master/BostonHousing.csv",format:"csv"}];function eI(){let e,[t,n]=(0,r.useState)(null),[h,x]=(0,r.useState)(null),[g,b]=(0,r.useState)(!1),[v,N]=(0,r.useState)(null),[_,w]=(0,r.useState)(!1),[S,A]=(0,r.useState)(null),[k,C]=(0,r.useState)(null),[$,R]=(0,r.useState)(!1),[T,F]=(0,r.useState)(0),[E,D]=(0,r.useState)(0),[P,I]=(0,r.useState)(null),z=(0,r.useMemo)(()=>(function(){let e={};for(let t of eb)e[t.category]||(e[t.category]=[]),e[t.category].push(t);return e})(),[]),X=(0,r.useMemo)(()=>(function(){let e={};for(let t of eC)e[t.category]||(e[t.category]=[]),e[t.category].push(t);return e})(),[]),H=(0,r.useCallback)(async e=>{b(!0),N(null);try{let t=await e$(e);if(t){C(`Detected format: ${t.name}. Parsing (max 5,000 rows)…`);let a=await t.parse(e,5e3);if(0===a.rows.length)throw Error(`No rows found in ${t.name} file.`);n({name:e.name,columns:a.columns,rows:a.rows}),x((0,ex.o)({name:e.name,columns:a.columns,rows:a.rows})),I(t),C(null)}else{let t,a=await e.text(),s=e.name.split(".").pop()?.toLowerCase();if(t="json"===s?eO(a):eP(a),0===t.rows.length)throw Error("No rows found in the file. Check the format.");n({name:e.name,...t}),x((0,ex.o)({name:e.name,...t})),I(null)}}catch(t){N(`Failed to parse ${e.name}: ${t.message}`),I(null)}finally{b(!1),C(null)}},[]),W=(0,r.useCallback)(async e=>{if(e.sampleUrl){b(!0),N(null),C(`Fetching "${e.sampleName}" as ${e.name}…`);try{let t=await fetch(e.sampleUrl);if(!t.ok)throw Error(`HTTP ${t.status}`);let a=await t.blob(),s=e.extensions[0]??".dat",r=new File([a],`sample${s}`,{type:a.type});C(`Parsing ${e.name} (max 5,000 rows)…`);let i=await e.parse(r,5e3);if(0===i.rows.length)throw Error(`No rows parsed from ${e.name} sample.`);n({name:e.sampleName??e.id,columns:i.columns,rows:i.rows}),x((0,ex.o)({name:e.sampleName??e.id,columns:i.columns,rows:i.rows})),I(e),F(i.rows.length),R(!!i.truncated)}catch(t){N(`Failed to load "${e.sampleName}": ${t.message}`),I(null)}finally{b(!1),C(null)}}},[]),Q=(0,r.useCallback)(async e=>{b(!0),N(null);try{let t,a=await fetch(e);if(!a.ok)throw Error(`HTTP ${a.status} ${a.statusText}`);let s=await a.text(),r=e.split(".").pop()?.toLowerCase().split("?")[0];if(t="json"===r?eO(s):eP(s),0===t.rows.length)throw Error("No rows found at the URL. Check the format.");let i=e.split("/").pop()??"remote-dataset";n({name:i,...t}),x((0,ex.o)({name:i,...t}))}catch(e){N(`Failed to fetch URL: ${e.message}`)}finally{b(!1)}},[]),V=(0,r.useCallback)(async e=>{b(!0),N(null),C(`Fetching "${e.name}" (max ${e.sampleRows.toLocaleString()} rows)…`);try{let t=await eL(e.url,e.sampleRows,e.format);C(`Parsing ${t.rowsLoaded.toLocaleString()} rows…`);let a="json"===e.format?eO(t.text):eP(t.text);if(0===a.rows.length)throw Error("No rows found. The dataset may have moved or be unreachable.");n({name:e.name,...a}),x((0,ex.o)({name:e.name,...a})),A(e),R(t.truncated),F(t.rowsLoaded),D(e.expectedRows)}catch(t){N(`Failed to load "${e.name}": ${t.message}. If this is a CORS issue, try the sample datasets above instead.`),A(null)}finally{b(!1),C(null)}},[]),J=(0,r.useCallback)(e=>{e.preventDefault(),w(!1);let t=e.dataTransfer.files[0];t&&H(t)},[H]),K=(0,r.useMemo)(()=>h?(0,eg.Ke)(h,6):[],[h]),Y=(0,r.useMemo)(()=>h?(0,eg.g2)(h,6):[],[h]),Z=(0,r.useMemo)(()=>h?(0,ex.j)(h):null,[h]);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l.zY,{eyebrow:"Phase 42 + 43 + 45 \xb7 Upload/URL/scientific formats → ConceptCard-style analysis",title:"Your Dataset — upload, paste URL, or drop a scientific file (BAM/SAM/VCF/FASTA/Parquet/GeoTIFF/NetCDF/HDF5)",description:"Upload any tabular file, paste a URL, pick a large real-world dataset (18 curated), or drop a scientific file (SAM, FASTA, FASTQ, VCF, BED, GFF, GFA, BAM, Parquet, Avro, GeoTIFF, NetCDF, HDF5). We auto-detect the format, parse the first N rows (lazy evaluation — never loads the full file), profile the columns, and build 3-6 ConceptCards dynamically — each follows the same 5-layer pattern as the platform's 92 existing cards, but the analysis runs on YOUR data."}),Z&&(0,s.jsxs)("div",{className:"grid gap-4 md:grid-cols-2 lg:grid-cols-4",children:[(0,s.jsx)(l.nO,{label:"Rows",value:h.rowCount.toLocaleString(),hint:"total observations"}),(0,s.jsx)(l.nO,{label:"Columns",value:String(h.columns.length),hint:`${Z.numericCount} numeric, ${Z.categoricalCount} categorical, ${Z.temporalCount} temporal`,deltaTone:"flat"}),(0,s.jsx)(l.nO,{label:"Cards generated",value:String(K.length),hint:"applicable analyses based on column types",deltaTone:"up"}),(0,s.jsx)(l.nO,{label:"Sample (for Pyodide)",value:`${Math.min(h.rowCount,1e3).toLocaleString()} rows`,hint:"capped for browser Pyodide performance",deltaTone:"flat"})]}),(0,s.jsx)(l.iv,{title:"1. Provide your dataset",description:"Drag-drop a CSV/JSON file, paste a URL to a raw dataset, or try one of the sample datasets below. The dataset is parsed in your browser — nothing is uploaded to a server.",icon:(0,s.jsx)(eR.A,{className:"h-5 w-5"}),badge:"Step 1",children:(0,s.jsxs)("div",{className:"space-y-4",children:[(0,s.jsxs)("div",{onDrop:J,onDragOver:e=>{e.preventDefault(),w(!0)},onDragLeave:()=>w(!1),className:`rounded-lg border-2 border-dashed p-8 text-center transition-colors ${_?"border-primary bg-primary/5":"border-border/40 hover:border-primary/40"}`,children:[(0,s.jsx)(eR.A,{className:"h-8 w-8 mx-auto mb-3 text-muted-foreground"}),(0,s.jsx)("p",{className:"text-sm font-semibold mb-1",children:_?"Drop your file here":"Drag-drop a CSV or JSON file"}),(0,s.jsx)("p",{className:"text-xs text-muted-foreground mb-3",children:"Or click to browse — files are parsed in-browser, never uploaded"}),(0,s.jsxs)("label",{className:"inline-block",children:[(0,s.jsx)("input",{type:"file",accept:".csv,.json,.tsv,.txt",className:"hidden",onChange:e=>{let t=e.target.files?.[0];t&&H(t)}}),(0,s.jsxs)("span",{className:"inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground cursor-pointer hover:bg-primary/90",children:[(0,s.jsx)(eR.A,{className:"h-4 w-4"})," Choose file"]})]})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{className:"text-xs uppercase tracking-wider text-muted-foreground font-medium mb-2",children:"Or paste a URL to a raw CSV/JSON"}),(0,s.jsxs)("div",{className:"flex gap-2",children:[(0,s.jsx)("input",{type:"url",placeholder:"https://raw.githubusercontent.com/.../data.csv",className:"flex-1 rounded-md border border-border/40 bg-background px-3 py-2 text-sm font-mono",onKeyDown:e=>{if("Enter"===e.key){let t=e.target.value.trim();t&&Q(t)}}}),(0,s.jsxs)(L.$,{type:"button",variant:"default",onClick:e=>{let t=e.currentTarget.previousSibling;t?.value&&Q(t.value.trim())},children:[(0,s.jsx)(eT.A,{className:"h-4 w-4"})," Fetch"]})]}),(0,s.jsx)("p",{className:"text-[11px] text-muted-foreground mt-1",children:"Tip: GitHub raw URLs work directly (raw.githubusercontent.com). CORS-permitted sources only."})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{className:"text-xs uppercase tracking-wider text-muted-foreground font-medium mb-2",children:"Or try a small sample dataset (instant load, ≤1000 rows)"}),(0,s.jsx)("div",{className:"grid md:grid-cols-2 lg:grid-cols-4 gap-2",children:eq.map(e=>(0,s.jsxs)("button",{type:"button",disabled:g,onClick:()=>Q(e.url),className:"text-left rounded-md border border-border/40 p-3 hover:border-primary hover:bg-primary/5 transition-colors disabled:opacity-50",children:[(0,s.jsx)("p",{className:"text-sm font-semibold",children:e.name}),(0,s.jsx)("p",{className:"text-[11px] text-muted-foreground mt-1",children:e.description}),(0,s.jsx)(p.E,{variant:"outline",className:"mt-2 text-[9px] uppercase",children:e.format})]},e.id))})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{className:"text-xs uppercase tracking-wider text-muted-foreground font-medium mb-2",children:"Or pick a large real-world dataset (lazy evaluation — streams first N rows only)"}),(0,s.jsxs)("select",{defaultValue:"",disabled:g,onChange:e=>{let t=e.target.value;if(!t)return;let a=eb.find(e=>e.id===t);a&&V(a),e.target.value=""},className:"w-full rounded-md border border-border/40 bg-background px-3 py-2 text-sm disabled:opacity-50",children:[(0,s.jsxs)("option",{value:"",disabled:!0,children:["— Choose a dataset (",eb.length," curated,"," ",Object.keys(z).length," categories) —"]}),Object.entries(z).map(([e,t])=>(0,s.jsx)("optgroup",{label:e,children:t.map(e=>(0,s.jsxs)("option",{value:e.id,children:[e.name," — ",e.expectedRows<=e.sampleRows?`${e.expectedRows.toLocaleString()} rows`:`~${e.expectedRows.toLocaleString()} rows (loading first ${e.sampleRows.toLocaleString()})`," ","proxy"===e.cors?"⚠":""]},e.id))},e))]}),(0,s.jsxs)("p",{className:"text-[11px] text-muted-foreground mt-1",children:[(0,s.jsx)(eM.A,{className:"inline h-3 w-3 mr-1 align-text-bottom"}),"Curated from public sources (USGS, NASA, World Bank, CDC, Stooq, UCI ML). ⚠ marks datasets that may hit CORS limits — try the sample datasets above if so."]})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{className:"text-xs uppercase tracking-wider text-muted-foreground font-medium mb-2",children:"Or pick a scientific file format sample (genomics, geospatial, big data)"}),(0,s.jsxs)("select",{defaultValue:"",disabled:g,onChange:e=>{let t=e.target.value;if(!t)return;let a=eC.find(e=>e.id===t);a&&a.sampleUrl&&W(a),e.target.value=""},className:"w-full rounded-md border border-border/40 bg-background px-3 py-2 text-sm disabled:opacity-50",children:[(0,s.jsxs)("option",{value:"",disabled:!0,children:["— Choose a scientific format (",eC.length," supported) —"]}),Object.entries(X).map(([e,t])=>(0,s.jsx)("optgroup",{label:e,children:t.filter(e=>e.sampleUrl).map(e=>(0,s.jsxs)("option",{value:e.id,children:[e.sampleName??e.name," (",e.extensions.join("/"),")"]},e.id))},e))]}),(0,s.jsxs)("p",{className:"text-[11px] text-muted-foreground mt-1",children:[(0,s.jsx)(f.A,{className:"inline h-3 w-3 mr-1 align-text-bottom"}),"Auto-detected on file upload too — drag-drop a .bam, .vcf, .parquet, .h5, etc. and we'll dispatch to the right parser. WASM libraries are lazy-loaded."]}),(0,s.jsx)("div",{className:"flex flex-wrap gap-1 mt-1.5",children:eC.map(e=>(0,s.jsxs)(p.E,{variant:"outline",className:"text-[9px] px-1.5 py-0",title:e.description,children:[e.extensions.join("/"),e.needsWasm?" ⚙":""]},e.id))})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{className:"text-xs uppercase tracking-wider text-muted-foreground font-medium mb-2",children:"Or connect to a live WebSocket stream (real-time data)"}),(0,s.jsxs)("div",{className:"flex gap-2",children:[(0,s.jsx)("input",{type:"text",id:"ws-url-input",placeholder:"ws://localhost:8080/data  or  wss://stream.example.com/feed",className:"flex-1 rounded-md border border-border/40 bg-background px-3 py-2 text-sm font-mono"}),(0,s.jsx)(L.$,{type:"button",variant:"default",id:"ws-connect-btn",onClick:e=>{let t=e.currentTarget.previousSibling,a=t?.value?.trim();if(!a)return;if(!a.startsWith("ws://")&&!a.startsWith("wss://"))return void N("URL must start with ws:// or wss://");b(!0),N(null),C(`Connecting to ${a}…`);let s=new WebSocket(a),r=[],i=[];s.onopen=()=>{C(`Connected. Streaming data…`)},s.onmessage=e=>{try{let t=JSON.parse(e.data);if(Array.isArray(t))for(let e of t){if(r.length>=5e3){s.close();break}r.push(e),0===i.length&&"object"==typeof e&&e&&(i=Object.keys(e))}else if("object"==typeof t&&t){if(r.length>=5e3)return void s.close();r.push(t),0===i.length&&(i=Object.keys(t))}C(`Streaming: ${r.length} rows received…`)}catch{}},s.onerror=()=>{N("WebSocket connection error. Check the URL + server availability."),b(!1),C(null)},s.onclose=()=>{r.length>0&&(n({name:`stream:${a}`,columns:i,rows:r}),x((0,ex.o)({name:`stream:${a}`,columns:i,rows:r})),A(null),I(null)),b(!1),C(null)}},children:"Connect"})]}),(0,s.jsx)("p",{className:"text-[11px] text-muted-foreground mt-1",children:"Streams JSON messages from a WebSocket server. Each message (or array element) becomes a row. Caps at 5000 rows. Closes the connection automatically when limit reached."}),(0,s.jsx)("p",{className:"text-[10px] text-muted-foreground mt-0.5",children:"Use cases: IoT sensor feeds, Kafka topics (via WebSocket bridge), financial tick data, live system metrics."})]}),S&&!g&&(0,s.jsxs)("div",{className:"rounded-md border border-emerald-500/40 bg-emerald-500/5 p-3",children:[(0,s.jsxs)("p",{className:"text-sm text-emerald-700 dark:text-emerald-300 font-medium flex items-center gap-2",children:[(0,s.jsx)(y.A,{className:"h-4 w-4"}),"Loaded: ",S.name]}),(0,s.jsxs)("p",{className:"text-xs text-emerald-600 dark:text-emerald-400 mt-1",children:[T.toLocaleString()," rows loaded",$&&(0,s.jsxs)(s.Fragment,{children:[" (truncated from ~",E.toLocaleString()," total — lazy evaluation)"]})," \xb7 ","source: ",S.source,S.license&&` \xb7 ${S.license}`]})]}),P&&!g&&(0,s.jsxs)("div",{className:"rounded-md border border-blue-500/40 bg-blue-500/5 p-3",children:[(0,s.jsxs)("p",{className:"text-sm text-blue-700 dark:text-blue-300 font-medium flex items-center gap-2",children:[(0,s.jsx)(f.A,{className:"h-4 w-4"}),"Scientific format: ",P.name]}),(0,s.jsxs)("p",{className:"text-xs text-blue-600 dark:text-blue-400 mt-1",children:[P.description.slice(0,200),P.description.length>200?"…":"",P.needsWasm&&" \xb7 WASM library lazy-loaded"]})]}),g&&(0,s.jsx)("div",{className:"rounded-md border border-amber-500/40 bg-amber-500/5 p-3",children:(0,s.jsxs)("p",{className:"text-sm text-amber-700 dark:text-amber-300 font-medium flex items-center gap-2",children:[(0,s.jsx)(G.A,{className:"h-4 w-4 animate-spin"}),k??"Loading dataset…"]})}),v&&(0,s.jsxs)("div",{className:"rounded-md border border-rose-500/40 bg-rose-500/5 p-3",children:[(0,s.jsxs)("p",{className:"text-sm text-rose-700 dark:text-rose-300 font-medium flex items-center gap-2",children:[(0,s.jsx)(B.A,{className:"h-4 w-4"})," Error"]}),(0,s.jsx)("p",{className:"text-xs text-rose-600 dark:text-rose-400 mt-1",children:v})]})]})}),t&&(0,s.jsx)(j,{dataset:t}),h&&Z&&(0,s.jsx)(l.iv,{title:`2. Dataset profile — "${h.name}"`,description:Z.summary,icon:(0,s.jsx)(f.A,{className:"h-5 w-5"}),badge:"Step 2",children:(0,s.jsx)("div",{className:"overflow-x-auto",children:(0,s.jsxs)("table",{className:"w-full text-xs",children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{className:"border-b border-border/40 text-muted-foreground",children:[(0,s.jsx)("th",{className:"text-left p-2 font-medium",children:"Column"}),(0,s.jsx)("th",{className:"text-left p-2 font-medium",children:"Type"}),(0,s.jsx)("th",{className:"text-left p-2 font-medium",children:"Cardinality"}),(0,s.jsx)("th",{className:"text-left p-2 font-medium",children:"Min"}),(0,s.jsx)("th",{className:"text-left p-2 font-medium",children:"Max"})]})}),(0,s.jsx)("tbody",{children:h.columns.map(e=>(0,s.jsxs)("tr",{className:"border-b border-border/20",children:[(0,s.jsx)("td",{className:"p-2 font-mono font-semibold",children:e.name}),(0,s.jsx)("td",{className:"p-2",children:(0,s.jsx)(p.E,{variant:"outline",className:"numeric"===e.type?"border-blue-500/30 text-blue-600 dark:text-blue-400":"categorical"===e.type?"border-emerald-500/30 text-emerald-600 dark:text-emerald-400":"temporal"===e.type?"border-amber-500/30 text-amber-600 dark:text-amber-400":"border-zinc-500/30 text-zinc-600 dark:text-zinc-400",children:e.type})}),(0,s.jsx)("td",{className:"p-2 font-mono",children:e.cardinality??"—"}),(0,s.jsx)("td",{className:"p-2 font-mono",children:e.min?.toFixed(2)??"—"}),(0,s.jsx)("td",{className:"p-2 font-mono",children:e.max?.toFixed(2)??"—"})]},e.name))})]})})}),h&&Y.length>0&&(0,s.jsx)(l.iv,{title:"3. Applicable analyses",description:`${Y.length} analysis templates apply to your dataset based on the detected column types. Each becomes a ConceptCard-style demo below.`,icon:(0,s.jsx)(q.A,{className:"h-5 w-5"}),badge:"Step 3",children:(0,s.jsx)("div",{className:"flex flex-wrap gap-2",children:Y.map(e=>(0,s.jsx)(p.E,{variant:"outline",className:"px-3 py-1 text-xs",children:e.title.split(" — ")[0]},e.kind))})}),K.length>0&&(0,s.jsx)(l.iv,{title:"4. ConceptCard-style analysis on your data",description:"Each card below follows the same 5-layer pattern (Math → Code → Tools → Pyodide Analysis → Chart) as the platform's existing 92 ConceptCards. Click 'Show analysis' to run the Python code in-browser via Pyodide — the chart + stats are computed from YOUR dataset, not synthetic demo data.",icon:(0,s.jsx)(eF.A,{className:"h-5 w-5"}),badge:`${K.length} cards`,children:(0,s.jsx)("div",{className:"space-y-6",children:K.map(e=>(0,s.jsx)(u.j,{spec:e},e.id))})}),t&&(0,s.jsx)(M,{dataset:t}),t&&(0,s.jsx)(O,{dataset:t}),t&&h&&(0,s.jsx)(U,{dataset:t,profile:h}),(0,s.jsx)(ee,{dataset:t}),(0,s.jsx)(er,{dataset:t}),(0,s.jsx)(el,{dataset:t}),(0,s.jsx)(em,{dataset:t}),(0,s.jsx)(ef,{dataset:t}),t&&h&&(e=function(e,t){var a;let s,r,n,i,l=e.rows.length,o=e.columns.length,c=t.columns.filter(e=>"numeric"===e.type),d=t.columns.filter(e=>"categorical"===e.type),m=t.columns.filter(e=>"temporal"===e.type),u=[],p=[];if(u.push(`Dataset contains **${l.toLocaleString()} rows \xd7 ${o} columns** (${c.length} numeric, ${d.length} categorical, ${m.length} temporal, ${o-c.length-d.length-m.length} text).`),c.length>0){let e=c[0];void 0!==e.min&&void 0!==e.max&&u.push(`Numeric column "${e.name}" ranges from ${e.min.toFixed(2)} to ${e.max.toFixed(2)} (range: ${(e.max-e.min).toFixed(2)}).`)}if(d.length>0){let e=d[0];if(void 0!==e.cardinality){let t=(e.cardinality/l*100).toFixed(1);u.push(`Categorical column "${e.name}" has ${e.cardinality} unique values (${t}% uniqueness).`),1===e.cardinality&&(u.push(`⚠ Column "${e.name}" is constant — consider dropping it (no information value).`),p.push(`Drop constant column "${e.name}" — it carries no signal for ML or analysis.`))}}let f=0,h=l*o;for(let t of e.rows.slice(0,Math.min(l,1e3)))for(let a of e.columns)(null===t[a]||void 0===t[a]||""===t[a])&&f++;let x=h>0?f/(Math.min(l,1e3)*o)*100:0;x>0?(u.push(`Missing data: ${x.toFixed(2)}% of cells are null/empty.`),x>10&&(u.push(`⚠ High missing rate — consider imputation or column removal.`),p.push(`Address missing data: ${x.toFixed(1)}% of cells are empty. Use median/mean imputation for numeric columns, mode for categorical, or drop columns with >50% missing.`))):u.push(`✓ No missing data detected in the first ${Math.min(l,1e3)} rows.`),o>50&&p.push(`High-dimensional dataset (${o} columns). Consider dimensionality reduction (PCA) or feature selection before ML modeling.`),c.length>=3&&p.push(`With ${c.length} numeric columns, PCA/cluster analysis is recommended to identify structure.`),m.length>0&&p.push(`Temporal column detected — consider trend/seasonality decomposition + autocorrelation analysis.`);let g=100;x>50?g-=40:x>10&&(g-=20),d.some(e=>1===e.cardinality)&&(g-=10),l<100&&(g-=15),o<3&&(g-=10);let b=(g=Math.max(0,g))>=80?"Excellent":g>=60?"Good":g>=40?"Fair":"Needs Attention",y=`# Automated Data Analysis Report

## Dataset: ${e.name}

**Generated:** ${new Date().toISOString()}

---

## 1. Overview

- **Rows:** ${l.toLocaleString()}
- **Columns:** ${o} (${c.length} numeric, ${d.length} categorical, ${m.length} temporal)
- **Missing data:** ${x.toFixed(2)}% of cells
- **Data quality score:** ${g}/100 (${b})

## 2. Column Summary

| Column | Type | Cardinality | Min | Max |
|--------|------|------------|-----|-----|
${t.columns.map(e=>`| ${e.name} | ${e.type} | ${e.cardinality??"—"} | ${e.min?.toFixed(2)??"—"} | ${e.max?.toFixed(2)??"—"} |`).join("\n")}

## 3. Key Findings

${u.map(e=>`- ${e}`).join("\n")}

## 4. Recommendations

${p.length>0?p.map(e=>`- ${e}`).join("\n"):"- No specific recommendations — dataset appears clean and well-structured."}

## 5. Applicable Analyses

The following analysis templates are applicable to this dataset based on column types:

${(s=[],r=(a=t).columns.filter(e=>"numeric"===e.type).length,n=a.columns.filter(e=>"categorical"===e.type).length,i=a.columns.some(e=>"temporal"===e.type),r>=2&&s.push("Correlation Matrix"),r>=1&&s.push("Distribution & Skewness"),r>=1&&s.push("Outlier Detection (IQR)"),r>=3&&s.push("PCA / Variance Explained"),n>=1&&s.push("Frequency & Entropy"),n>=2&&s.push("Chi-Square Independence"),i&&r>=1&&s.push("Trend & Seasonality (STL)"),i&&r>=1&&s.push("Autocorrelation (ACF)"),s).map(e=>`- **${e}**`).join("\n")}

## 6. Methodology

This report was generated automatically by the platform's data profiler. All statistics are computed client-side in the browser — no data is sent to a server. Numeric type detection uses an 80% parseability threshold. Categorical columns are detected when cardinality ≤ 30. Temporal columns are detected via ISO 8601 + slash-date regex patterns.

## 7. Reproducibility

- **Analysis engine:** Pyodide (Python in WebAssembly) + Recharts (React)
- **Dataset hash:** ${e.rows.length} rows \xd7 ${e.columns.length} columns
- **Report version:** Phase 52.g

---

*This report was auto-generated by the ModernDataSciEng Platform.*
`,v=`Write a blog post about analyzing the "${e.name}" dataset. The dataset has ${l.toLocaleString()} rows and ${o} columns (${c.length} numeric, ${d.length} categorical). Key findings: ${u.join(" ")}. The data quality score is ${g}/100. Include insights about: (1) what the data represents, (2) interesting patterns in the distributions, (3) correlations between variables, (4) any data quality issues, (5) recommendations for further analysis. Write for a technical audience interested in data science.`;return{title:`Analysis Report — ${e.name}`,subtitle:`${l.toLocaleString()} rows \xd7 ${o} columns \xb7 ${x.toFixed(1)}% missing \xb7 Quality: ${g}/100`,keyFindings:u,recommendations:p,markdownReport:y,blogPrompt:v,qualityScore:g,qualityLabel:b}}(t,h),(0,s.jsx)(l.iv,{title:"Automated Analysis Report",description:e.subtitle,icon:(0,s.jsx)(eE.A,{className:"h-5 w-5"}),badge:`Quality: ${e.qualityScore}/100`,children:(0,s.jsxs)("div",{className:"space-y-4",children:[(0,s.jsx)("div",{className:`rounded-lg border p-3 ${e.qualityScore>=80?"border-emerald-500/40 bg-emerald-500/5":e.qualityScore>=60?"border-amber-500/40 bg-amber-500/5":"border-rose-500/40 bg-rose-500/5"}`,children:(0,s.jsxs)("p",{className:"text-sm font-medium flex items-center gap-2",children:["Data Quality:"," ",(0,s.jsxs)("strong",{className:e.qualityScore>=80?"text-emerald-600":e.qualityScore>=60?"text-amber-600":"text-rose-600",children:[e.qualityLabel," (",e.qualityScore,"/100)"]})]})}),(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{className:"text-[10px] uppercase tracking-wider text-muted-foreground font-medium mb-2",children:"Key Findings"}),(0,s.jsx)("ul",{className:"space-y-1",children:e.keyFindings.map((e,t)=>(0,s.jsxs)("li",{className:"text-xs text-foreground/80 leading-relaxed flex items-start gap-2",children:[(0,s.jsx)("span",{className:"text-primary mt-0.5",children:"▸"})," ",e]},t))})]}),e.recommendations.length>0&&(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{className:"text-[10px] uppercase tracking-wider text-muted-foreground font-medium mb-2",children:"Recommendations"}),(0,s.jsx)("ul",{className:"space-y-1",children:e.recommendations.map((e,t)=>(0,s.jsxs)("li",{className:"text-xs text-amber-700 dark:text-amber-300 leading-relaxed flex items-start gap-2",children:[(0,s.jsx)("span",{className:"text-amber-500 mt-0.5",children:"→"})," ",e]},t))})]}),(0,s.jsxs)("div",{className:"flex items-center gap-2 pt-3 border-t border-border/20",children:[(0,s.jsx)("span",{className:"text-[10px] uppercase tracking-wider text-muted-foreground",children:"Export report:"}),(0,s.jsx)("button",{type:"button",onClick:()=>{a.e(1413).then(a.bind(a,57442)).then(({exportJSON:a})=>a(e,`${t.name}-report.json`))},className:"text-[10px] px-2 py-1 rounded-md border border-border/40 hover:border-primary hover:bg-primary/5 transition-colors",children:"JSON"}),(0,s.jsx)("button",{type:"button",onClick:()=>{let a=new Blob([e.markdownReport],{type:"text/markdown"}),s=URL.createObjectURL(a),r=document.createElement("a");r.href=s,r.download=`${t.name}-report.md`,r.click(),setTimeout(()=>URL.revokeObjectURL(s),1e3)},className:"text-[10px] px-2 py-1 rounded-md border border-border/40 hover:border-primary hover:bg-primary/5 transition-colors",children:"Markdown (.md)"}),(0,s.jsx)("button",{type:"button",onClick:()=>{navigator.clipboard.writeText(e.blogPrompt)},className:"text-[10px] px-2 py-1 rounded-md border border-border/40 hover:border-primary hover:bg-primary/5 transition-colors",children:"Copy blog prompt"}),(0,s.jsx)("button",{type:"button",onClick:()=>{let e,a,s,r,n,i,l,o;return i=new Blob([JSON.stringify(((e=[]).push({cell_type:"markdown",source:`# Data Analysis: ${t.name}

**Generated by ModernDataSciEng Platform**

- **Rows:** ${t.rows.length.toLocaleString()}
- **Columns:** ${t.columns.length}
- **Numeric:** ${h.columns.filter(e=>"numeric"===e.type).length}
- **Categorical:** ${h.columns.filter(e=>"categorical"===e.type).length}
- **Temporal:** ${h.columns.filter(e=>"temporal"===e.type).length}

This notebook was auto-generated from an interactive browser session.
Each cell corresponds to a section of the platform's analysis pipeline.`}),a=JSON.stringify(t.rows.slice(0,1e3).map(e=>{let a={};for(let s of t.columns.slice(0,20))a[s]=e[s];return a}),null,2),e.push({cell_type:"code",source:`# Load the dataset
import pandas as pd
import numpy as np
import json
import matplotlib.pyplot as plt
import seaborn as sns

# Data embedded from browser session (first 1000 rows)
# To use your own file: df = pd.read_csv('your-file.csv')
data_json = '''${a}'''
df = pd.DataFrame(json.loads(data_json))
print(f"Loaded {len(df)} rows \xd7 {len(df.columns)} columns")
df.head()`,metadata:{},outputs:[],execution_count:null}),e.push({cell_type:"markdown",source:`## Descriptive Statistics

Equivalent to pandas \`df.describe()\` — computed per numeric column.`}),e.push({cell_type:"code",source:"# Descriptive statistics\ndf.describe()",metadata:{},outputs:[],execution_count:null}),e.push({cell_type:"markdown",source:`## Missing Data Analysis

Per-column null count + null %.`}),e.push({cell_type:"code",source:"# Missing data analysis\nmissing = df.isnull().sum()\nmissing_pct = (missing / len(df) * 100).round(2)\nmissing_df = pd.DataFrame({'missing_count': missing, 'missing_pct': missing_pct})\nmissing_df[missing_df['missing_count'] > 0].sort_values('missing_pct', ascending=False)",metadata:{},outputs:[],execution_count:null}),s=h.columns.filter(e=>"numeric"===e.type).map(e=>e.name),e.push({cell_type:"markdown",source:`## Correlation Matrix

Pearson correlation between all numeric columns.`}),e.push({cell_type:"code",source:["# Correlation heatmap",s.length>0?`numeric_cols = [${s.map(e=>`'${e}'`).join(", ")}]
plt.figure(figsize=(10, 8))
sns.heatmap(df[numeric_cols].corr(), annot=True, cmap='RdBu_r', center=0, fmt='.2f')
plt.title('Correlation Matrix')
plt.tight_layout()
plt.show()`:'print("No numeric columns found for correlation analysis")'].join("\n"),metadata:{},outputs:[],execution_count:null}),e.push({cell_type:"markdown",source:`## Distribution Analysis

Histograms for each numeric column.`}),e.push({cell_type:"code",source:["# Distribution histograms",s.length>0?`df[numeric_cols].hist(bins=20, figsize=(15, 10), layout=(2, ${Math.ceil(s.length/2)}))
plt.suptitle('Distribution of Numeric Columns')
plt.tight_layout()
plt.show()`:'print("No numeric columns for histograms")'].join("\n"),metadata:{},outputs:[],execution_count:null}),e.push({cell_type:"markdown",source:`## Outlier Detection (Tukey IQR)

Box plots showing Q1-Q3 range + outliers beyond 1.5\xd7IQR.`}),e.push({cell_type:"code",source:["# Outlier detection (IQR method)",s.length>0?`plt.figure(figsize=(12, 6))
df[numeric_cols].plot(kind='box', vert=False)
plt.title('Box Plots — Outlier Detection (1.5\xd7IQR)')
plt.tight_layout()
plt.show()

# Count outliers per column
for col in numeric_cols:
    q1, q3 = df[col].quantile([0.25, 0.75])
    iqr = q3 - q1
    lower, upper = q1 - 1.5*iqr, q3 + 1.5*iqr
    n_outliers = ((df[col] < lower) | (df[col] > upper)).sum()
    if n_outliers > 0:
        print(f"  {col}: {n_outliers} outliers ({n_outliers/len(df)*100:.1f}%)")`:'print("No numeric columns for outlier detection")'].join("\n"),metadata:{},outputs:[],execution_count:null}),e.push({cell_type:"markdown",source:`## PCA / Variance Explained

Principal component analysis on standardized numeric columns.`}),e.push({cell_type:"code",source:["# PCA",s.length>=3?`from sklearn.decomposition import PCA
from sklearn.preprocessing import StandardScaler

X = df[numeric_cols].fillna(0).values
X_std = StandardScaler().fit_transform(X)
pca = PCA()pca.fit(X_std)

cumvar = np.cumsum(pca.explained_variance_ratio_)
plt.figure(figsize=(10, 5))
plt.bar(range(1, len(cumvar)+1), pca.explained_variance_ratio_, alpha=0.5, label='Individual')
plt.step(range(1, len(cumvar)+1), cumvar, where='mid', label='Cumulative')
plt.axhline(y=0.95, color='r', linestyle='--', label='95% threshold')
plt.xlabel('Principal Component')
plt.ylabel('Variance Explained')
plt.legend()
plt.title('PCA Scree Plot')
plt.tight_layout()
plt.show()
print(f"Components for 95% variance: {np.searchsorted(cumvar, 0.95) + 1}")`:`print("Need ≥3 numeric columns for PCA")`].join("\n"),metadata:{},outputs:[],execution_count:null}),e.push({cell_type:"markdown",source:`## Scatter Plot

Pairwise scatter of the first two numeric columns.`}),e.push({cell_type:"code",source:["# Scatter plot",s.length>=2?`plt.figure(figsize=(8, 6))
plt.scatter(df['${s[0]}'], df['${s[1]}'], alpha=0.5)
plt.xlabel('${s[0]}')
plt.ylabel('${s[1]}')

# Regression line
from numpy.polynomial import polynomial as P
x = df['${s[0]}'].fillna(0).values
y = df['${s[1]}'].fillna(0).values
coeffs = np.polyfit(x, y, 1)
plt.plot(x, coeffs[0]*x + coeffs[1], 'r--', label=f'y={coeffs[0]:.3f}x+{coeffs[1]:.2f}')
plt.legend()
plt.title('${s[0]} vs ${s[1]}')
plt.tight_layout()
plt.show()
r = np.corrcoef(x, y)[0, 1]
print(f"Pearson r = {r:.4f}")`:`print("Need ≥2 numeric columns for scatter plot")`].join("\n"),metadata:{},outputs:[],execution_count:null}),r=h.columns.filter(e=>"numeric"===e.type).length,n=h.columns.filter(e=>"categorical"===e.type).length,e.push({cell_type:"markdown",source:`## Automated Report

**Dataset:** ${t.name}

**Shape:** ${t.rows.length.toLocaleString()} rows \xd7 ${t.columns.length} columns
(${r} numeric, ${n} categorical)

**Pipeline:**
1. Data loading + preview
2. Descriptive statistics (df.describe)
3. Missing data analysis
4. Correlation matrix heatmap
5. Distribution histograms
6. Outlier detection (IQR boxplots)
7. PCA / variance explained
8. Scatter plot + regression

---

*Generated by ModernDataSciEng Platform — Phase 56*`}),{nbformat:4,nbformat_minor:5,metadata:{kernelspec:{display_name:"Python 3",language:"python",name:"python3"},language_info:{name:"python",version:"3.11.0",mimetype:"text/x-python",file_extension:".py"}},cells:e}),null,1)],{type:"application/x-ipynb+json"}),l=URL.createObjectURL(i),void((o=document.createElement("a")).href=l,o.download=`${t.name.replace(/\.[^/.]+$/,"")}-analysis.ipynb`,document.body.appendChild(o),o.click(),document.body.removeChild(o),setTimeout(()=>URL.revokeObjectURL(l),1e3))},className:"text-[10px] px-2 py-1 rounded-md border border-border/40 hover:border-primary hover:bg-primary/5 transition-colors",children:"Jupyter (.ipynb)"}),(0,s.jsx)("button",{type:"button",onClick:()=>{let e,a,s,r,n;return s=new Blob([(e=h.columns.filter(e=>"numeric"===e.type).map(e=>e.name),a=JSON.stringify(t.rows.slice(0,1e3).map(e=>{let a={};for(let s of t.columns.slice(0,20))a[s]=e[s];return a}),null,2),`#!/usr/bin/env python3
"""
Data Analysis Script — ${t.name}
Generated by ModernDataSciEng Platform

Requirements:
    pip install pandas numpy matplotlib seaborn scikit-learn

Usage:
    python ${t.name.replace(/\.[^/.]+$/,"")}-analysis.py

Or open in your IDE (VS Code, PyCharm, Spyder) and run interactively.
"""

import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
import json
import warnings
warnings.filterwarnings('ignore')

# ============================================================
# 1. LOAD DATA
# ============================================================

# Option A: Use embedded data (first 1000 rows from browser session)
data_json = '''${a}'''
df = pd.DataFrame(json.loads(data_json))
print(f"Loaded {len(df)} rows \xd7 {len(df.columns)} columns")
print(f"Columns: {', '.join(df.columns)}")

# Option B: Load from a file instead — uncomment and modify:
# df = pd.read_csv('${t.name}')
# df = pd.read_parquet('${t.name.replace(/\.csv$/,".parquet")}')

# ============================================================
# 2. DATA PREVIEW
# ============================================================

print("\\n=== DATA PREVIEW (first 10 rows) ===")
print(df.head(10).to_string())

# ============================================================
# 3. DESCRIPTIVE STATISTICS
# ============================================================

print("\\n=== DESCRIPTIVE STATISTICS ===")
print(df.describe().to_string())

# ============================================================
# 4. MISSING DATA ANALYSIS
# ============================================================

print("\\n=== MISSING DATA ===")
missing = df.isnull().sum()
missing_pct = (missing / len(df) * 100).round(2)
missing_df = pd.DataFrame({'missing_count': missing, 'missing_pct': missing_pct})
has_missing = missing_df[missing_df['missing_count'] > 0]
if len(has_missing) > 0:
    print(has_missing.sort_values('missing_pct', ascending=False).to_string())
else:
    print("No missing values detected.")

# ============================================================
# 5. CORRELATION MATRIX (HEATMAP)
# ============================================================

${e.length>0?`
numeric_cols = [${e.map(e=>`'${e}'`).join(", ")}]
plt.figure(figsize=(10, 8))
sns.heatmap(df[numeric_cols].corr(), annot=True, cmap='RdBu_r', center=0, fmt='.2f',
            square=True, linewidths=0.5)
plt.title('Correlation Matrix — ${t.name}')
plt.tight_layout()
plt.savefig('${t.name.replace(/\.[^/.]+$/,"")}-correlation-heatmap.png', dpi=150)
plt.show()
`:`# No numeric columns found for correlation analysis
`}

# ============================================================
# 6. DISTRIBUTION HISTOGRAMS
# ============================================================

${e.length>0?`
df[numeric_cols].hist(bins=20, figsize=(15, 10))
plt.suptitle('Distribution of Numeric Columns — ${t.name}')
plt.tight_layout()
plt.savefig('${t.name.replace(/\.[^/.]+$/,"")}-distributions.png', dpi=150)
plt.show()
`:`# No numeric columns for histograms
`}

# ============================================================
# 7. OUTLIER DETECTION (BOX PLOTS)
# ============================================================

${e.length>0?`
plt.figure(figsize=(12, 6))
df[numeric_cols].plot(kind='box', vert=False)
plt.title('Box Plots — Outlier Detection (1.5\xd7IQR)')
plt.tight_layout()
plt.savefig('${t.name.replace(/\.[^/.]+$/,"")}-boxplots.png', dpi=150)
plt.show()

# Count outliers per column
print("\\n=== OUTLIERS (IQR method) ===")
for col in numeric_cols:
    q1, q3 = df[col].quantile([0.25, 0.75])
    iqr = q3 - q1
    lower, upper = q1 - 1.5 * iqr, q3 + 1.5 * iqr
    n_outliers = ((df[col] < lower) | (df[col] > upper)).sum()
    if n_outliers > 0:
        print(f"  {col}: {n_outliers} outliers ({n_outliers/len(df)*100:.1f}%)")
`:`# No numeric columns for outlier detection
`}

# ============================================================
# 8. PCA / VARIANCE EXPLAINED
# ============================================================

${e.length>=3?`
from sklearn.decomposition import PCA
from sklearn.preprocessing import StandardScaler

X = df[numeric_cols].fillna(0).values
X_std = StandardScaler().fit_transform(X)
pca = PCA()
pca.fit(X_std)

cumvar = np.cumsum(pca.explained_variance_ratio_)
n_95 = np.searchsorted(cumvar, 0.95) + 1

plt.figure(figsize=(10, 5))
plt.bar(range(1, len(cumvar) + 1), pca.explained_variance_ratio_, alpha=0.5, label='Individual')
plt.step(range(1, len(cumvar) + 1), cumvar, where='mid', label='Cumulative')
plt.axhline(y=0.95, color='r', linestyle='--', label='95% threshold')
plt.xlabel('Principal Component')
plt.ylabel('Variance Explained')
plt.legend()
plt.title(f'PCA Scree Plot — {n_95} components for 95% variance')
plt.tight_layout()
plt.savefig('${t.name.replace(/\.[^/.]+$/,"")}-pca.png', dpi=150)
plt.show()

print(f"\\nPCA: {n_95} components capture 95% of variance (out of {len(numeric_cols)} features)")
`:`# Need ≥3 numeric columns for PCA
`}

# ============================================================
# 9. SCATTER PLOT + REGRESSION
# ============================================================

${e.length>=2?`
plt.figure(figsize=(8, 6))
plt.scatter(df['${e[0]}'], df['${e[1]}'], alpha=0.5)
plt.xlabel('${e[0]}')
plt.ylabel('${e[1]}')

# Regression line
x = df['${e[0]}'].fillna(0).values
y = df['${e[1]}'].fillna(0).values
coeffs = np.polyfit(x, y, 1)
plt.plot(x, coeffs[0] * x + coeffs[1], 'r--', label=f'y={coeffs[0]:.3f}x+{coeffs[1]:.2f}')
r = np.corrcoef(x, y)[0, 1]
plt.legend()
plt.title(f'${e[0]} vs ${e[1]} (r={r:.4f})')
plt.tight_layout()
plt.savefig('${t.name.replace(/\.[^/.]+$/,"")}-scatter.png', dpi=150)
plt.show()

print(f"\\nPearson r (${e[0]} ↔ ${e[1]}): {r:.4f}")
`:`# Need ≥2 numeric columns for scatter plot
`}

# ============================================================
# 10. SUMMARY
# ============================================================

print("\\n" + "=" * 60)
print("ANALYSIS COMPLETE")
print("=" * 60)
print(f"Dataset: ${t.name}")
print(f"Shape: {len(df)} rows \xd7 {len(df.columns)} columns")
print(f"Numeric columns: ${e.length}")
print(f"Missing cells: {missing.sum()} ({missing.sum() / (len(df) * len(df.columns)) * 100:.2f}%)")
${e.length>=2?`print(f"Top correlation: ${e[0]} ↔ ${e[1]} (r={r:.4f})")`:""}
print("\\nGenerated charts saved as PNG files alongside this script.")
print("Open in Jupyter for interactive cells: jupyter notebook")
print("\\n--- Generated by ModernDataSciEng Platform ---")
`)],{type:"text/x-python"}),r=URL.createObjectURL(s),void((n=document.createElement("a")).href=r,n.download=`${t.name.replace(/\.[^/.]+$/,"")}-analysis.py`,document.body.appendChild(n),n.click(),document.body.removeChild(n),setTimeout(()=>URL.revokeObjectURL(r),1e3))},className:"text-[10px] px-2 py-1 rounded-md border border-border/40 hover:border-primary hover:bg-primary/5 transition-colors",children:"Python (.py)"}),(0,s.jsx)("button",{type:"button",onClick:()=>{let e,a,s,r,n,i,l;return n=new Blob([(e=h.columns.filter(e=>"numeric"===e.type).map(e=>e.name),a=h.columns.filter(e=>"categorical"===e.type).map(e=>e.name),s=JSON.stringify(t.rows.slice(0,1e3).map(e=>{let a={};for(let s of t.columns.slice(0,20))a[s]=e[s];return a}),null,2),r=t.name.replace(/\.[^/.]+$/,"").replace(/[^a-zA-Z0-9_-]/g,"_"),`#!/usr/bin/env Rscript
# ============================================================
# Data Analysis Script (R) — ${t.name}
# Generated by ModernDataSciEng Platform
#
# Requirements:
#   install.packages(c("ggplot2", "dplyr", "tidyr", "corrplot", "jsonlite"))
#
# Usage:
#   Rscript ${r}-analysis.R
# Or open in RStudio and source the file.
# ============================================================

library(ggplot2)
library(dplyr)
library(tidyr)
library(corrplot)
library(jsonlite)

# 1. LOAD DATA
data_json <- '${s}'
df <- do.call(rbind, lapply(fromJSON(data_json), as.data.frame, stringsAsFactors = FALSE))
df <- as.data.frame(df)
${e.length>0?`numeric_cols <- c(${e.map(e=>`"${e}"`).join(", ")})
for (col in numeric_cols) { df[[col]] <- as.numeric(df[[col]]) }`:""}
cat(sprintf("Loaded %d rows x %d columns\\n", nrow(df), ncol(df)))

# 2. PREVIEW
cat("\\n=== DATA PREVIEW ===\\n")
print(head(df, 10))

# 3. DESCRIPTIVE STATISTICS
cat("\\n=== DESCRIPTIVE STATISTICS ===\\n")
${e.length>0?"print(summary(df[, numeric_cols]))":`cat("No numeric columns\\n")`}

# 4. MISSING DATA
cat("\\n=== MISSING DATA ===\\n")
missing_counts <- sapply(df, function(x) sum(is.na(x) | x == "" | x == "NA"))
missing_pct <- round(missing_counts / nrow(df) * 100, 2)
missing_df <- data.frame(column = names(df), missing_count = missing_counts, missing_pct = missing_pct)
has_missing <- missing_df[missing_df$missing_count > 0, ]
if (nrow(has_missing) > 0) print(has_missing[order(-has_missing$missing_pct), ]) else cat("No missing values.\\n")

# 5. CORRELATION HEATMAP
${e.length>=2?`
cor_matrix <- cor(df[, numeric_cols], use = "pairwise.complete.obs")
png("${r}-correlation-heatmap.png", width = 800, height = 800, res = 150)
corrplot(cor_matrix, method = "color", type = "upper", addCoef.col = "black",
         tl.col = "black", tl.srt = 45, col = colorRampPalette(c("#0571b0", "white", "#ca0020"))(200))
title("Correlation Matrix")
dev.off()
cat("Saved: ${r}-correlation-heatmap.png\\n")
`:`# Need >= 2 numeric columns for correlation
`}

# 6. HISTOGRAMS
${e.length>0?`
for (col in numeric_cols) {
  p <- ggplot(df, aes_string(x = col)) +
    geom_histogram(bins = 20, fill = "steelblue", color = "white") +
    labs(title = paste("Distribution of", col)) + theme_minimal()
  ggsave(paste0("${r}-hist-", gsub("[^a-zA-Z0-9]", "_", col), ".png"), p, width = 6, height = 4, dpi = 150)
}
cat("Saved: ${r}-hist-*.png\\n")
`:`# No numeric columns for histograms
`}

# 7. BOX PLOTS (OUTLIER DETECTION)
${e.length>0?`
df_long <- df[, numeric_cols, drop = FALSE] %>% pivot_longer(everything(), names_to = "variable", values_to = "value")
p_box <- ggplot(df_long, aes(x = variable, y = value)) +
  geom_boxplot(fill = "lightblue", outlier.color = "red") +
  labs(title = "Box Plots — Outlier Detection (1.5x IQR)") + theme_minimal() + coord_flip()
ggsave("${r}-boxplots.png", p_box, width = 10, height = 6, dpi = 150)
cat("Saved: ${r}-boxplots.png\\n")
cat("\\n=== OUTLIERS (IQR) ===\\n")
for (col in numeric_cols) {
  vals <- df[[col]][!is.na(df[[col]])]
  q <- quantile(vals, c(0.25, 0.75)); iqr <- q[2] - q[1]
  n_out <- sum(vals < q[1] - 1.5 * iqr | vals > q[2] + 1.5 * iqr)
  if (n_out > 0) cat(sprintf("  %s: %d outliers (%.1f%%)\\n", col, n_out, n_out / length(vals) * 100))
}
`:`# No numeric columns for outlier detection
`}

# 8. PCA
${e.length>=3?`
pca_data <- df[, numeric_cols][complete.cases(df[, numeric_cols]), , drop = FALSE]
if (nrow(pca_data) > 0) {
  pca_result <- prcomp(pca_data, scale. = TRUE)
  var_explained <- pca_result$sdev^2 / sum(pca_result$sdev^2)
  n_95 <- which(cumsum(var_explained) >= 0.95)[1]
  pca_df <- data.frame(PC = 1:length(var_explained), individual = var_explained, cumulative = cumsum(var_explained))
  p_pca <- ggplot(pca_df, aes(x = PC)) +
    geom_col(aes(y = individual), fill = "steelblue", alpha = 0.5) +
    geom_step(aes(y = cumulative), color = "red") +
    geom_hline(yintercept = 0.95, linetype = "dashed", color = "red") +
    labs(title = sprintf("PCA — %d PCs for 95%% variance", n_95)) + theme_minimal()
  ggsave("${r}-pca.png", p_pca, width = 8, height = 5, dpi = 150)
  cat(sprintf("Saved: ${r}-pca.png (%d PCs for 95%%)\\n", n_95))
}
`:`# Need >= 3 numeric columns for PCA
`}

# 9. SCATTER + REGRESSION
${e.length>=2?`
p_scatter <- ggplot(df, aes_string(x = "${e[0]}", y = "${e[1]}")) +
  geom_point(alpha = 0.5, color = "steelblue") +
  geom_smooth(method = "lm", se = TRUE, color = "red", linetype = "dashed") +
  labs(title = "${e[0]} vs ${e[1]}") + theme_minimal()
ggsave("${r}-scatter.png", p_scatter, width = 7, height = 5, dpi = 150)
cor_test <- cor.test(df[["${e[0]}"]], df[["${e[1]}"]], use = "complete.obs")
cat(sprintf("\\nPearson r: %.4f (p = %.4e)\\n", cor_test$estimate, cor_test$p.value))
`:`# Need >= 2 numeric columns for scatter
`}

# 10. SUMMARY
cat("\\n", paste(rep("=", 60), collapse = ""), "\\n")
cat("ANALYSIS COMPLETE\\n")
cat(paste(rep("=", 60), collapse = ""), "\\n")
cat(sprintf("Dataset: ${t.name}\\n"))
cat(sprintf("Shape: %d x %d\\n", nrow(df), ncol(df)))
cat(sprintf("Numeric: ${e.length}, Categorical: ${a.length}\\n"))
cat(sprintf("Missing: %d (%.2f%%)\\n", sum(missing_counts), sum(missing_counts) / (nrow(df) * ncol(df)) * 100))
cat("\\nCharts saved as PNG files. Open in RStudio for interactive analysis.\\n")
cat("--- Generated by ModernDataSciEng Platform ---\\n")
`)],{type:"text/x-r"}),i=URL.createObjectURL(n),void((l=document.createElement("a")).href=i,l.download=`${t.name.replace(/\.[^/.]+$/,"").replace(/[^a-zA-Z0-9_-]/g,"_")}-analysis.R`,document.body.appendChild(l),l.click(),document.body.removeChild(l),setTimeout(()=>URL.revokeObjectURL(i),1e3))},className:"text-[10px] px-2 py-1 rounded-md border border-border/40 hover:border-primary hover:bg-primary/5 transition-colors",children:"R script (.R)"})]})]})})),!t&&!g&&(0,s.jsx)(l.iv,{title:"How it works",description:"3-step pipeline: upload/URL → auto-profile → ConceptCards adapted to your data.",icon:(0,s.jsx)(eD.A,{className:"h-5 w-5"}),children:(0,s.jsxs)("div",{className:"grid md:grid-cols-3 gap-3",children:[(0,s.jsxs)("div",{className:"rounded-md border border-border/40 p-3",children:[(0,s.jsx)(eR.A,{className:"h-5 w-5 text-primary mb-2"}),(0,s.jsx)("p",{className:"text-sm font-semibold mb-1",children:"1. Provide data"}),(0,s.jsx)("p",{className:"text-xs text-muted-foreground",children:"Drag-drop a CSV, paste a URL to raw data, or try one of the 4 sample datasets. Parsed in-browser — no server roundtrip."})]}),(0,s.jsxs)("div",{className:"rounded-md border border-border/40 p-3",children:[(0,s.jsx)(f.A,{className:"h-5 w-5 text-primary mb-2"}),(0,s.jsx)("p",{className:"text-sm font-semibold mb-1",children:"2. Auto-profile"}),(0,s.jsx)("p",{className:"text-xs text-muted-foreground",children:"Detect column types (numeric/categorical/temporal/text), compute cardinality + min/max. Pick 3-6 applicable analyses from the 8-template library."})]}),(0,s.jsxs)("div",{className:"rounded-md border border-border/40 p-3",children:[(0,s.jsx)(eF.A,{className:"h-5 w-5 text-primary mb-2"}),(0,s.jsx)("p",{className:"text-sm font-semibold mb-1",children:"3. ConceptCards on your data"}),(0,s.jsx)("p",{className:"text-xs text-muted-foreground",children:"Each analysis becomes a 5-layer ConceptCard — Math equation + Code + Tools comparison + Pyodide analysis on YOUR data + Chart from the output."})]})]})}),(0,s.jsx)(m.a,{topics:[{id:"concept-card-gallery",reason:"All 92 ConceptCards — these are the cards that inspired the dynamic cards above"},{id:"auto-analyze",reason:"Alternative upload portal — runs 8 Pyodide analyses + produces a markdown report (different output format)"},{id:"bi-templates",reason:"Another upload page — wires GranularityExplorer + DashboardBuilder + StatisticalAnalysisStudio"},{id:"interactive-tutorials",reason:"Step-by-step guided labs for the 8 most pedagogically valuable ConceptCards"}]}),(0,s.jsx)(c.R,{pageId:"your-dataset"}),(0,s.jsx)(d.B,{pageId:"your-dataset"}),(0,s.jsx)(o.T,{relatedPages:[{id:"concept-card-gallery",reason:"Browse the 92 ConceptCards that inspired this page"},{id:"auto-analyze",reason:"Compare with the auto-analyze portal (different output format)"},{id:"bi-templates",reason:"Compare with the BI templates upload page"}]}),(0,s.jsxs)("div",{className:"flex flex-wrap gap-2",children:[(0,s.jsx)(i(),{href:(0,eh.ZJ)("concept-card-gallery"),className:"text-sm text-primary hover:underline",children:"→ Concept Card Gallery (the 92 cards)"}),(0,s.jsx)("span",{className:"text-muted-foreground",children:"\xb7"}),(0,s.jsx)(i(),{href:(0,eh.ZJ)("auto-analyze"),className:"text-sm text-primary hover:underline",children:"→ Auto-Analyze (alternative upload page)"}),(0,s.jsx)("span",{className:"text-muted-foreground",children:"\xb7"}),(0,s.jsx)(i(),{href:(0,eh.ZJ)("bi-templates"),className:"text-sm text-primary hover:underline",children:"→ BI Templates (upload + dashboards)"})]})]})}}},e=>{e.O(0,[6919,8500,9430,3493,9760,7591,6012,9237,4843,6402,9620,6722,5404,9275,2194,663,7069,374,8441,3794,7358],()=>e(e.s=36580)),_N_E=e.O()}]);