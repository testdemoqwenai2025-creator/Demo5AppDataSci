(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2830],{17243:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});let a=(0,r(6404).A)("image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]])},19776:(e,t,r)=>{"use strict";r.d(t,{N:()=>d,R:()=>l});var a=r(95155),n=r(12115),s=r(94514),i=r(67635),o=r(89239);function d({code:e,language:t="sql",filename:r,highlight:d=[]}){let[l,c]=(0,n.useState)(!1),h=e.replace(/\n$/,"").split("\n"),m=async()=>{try{await navigator.clipboard.writeText(e),c(!0),setTimeout(()=>c(!1),1500)}catch{}};return(0,a.jsxs)("div",{className:"rounded-md border border-border/60 bg-[oklch(0.16_0.005_240)] text-[oklch(0.97_0.005_60)] overflow-hidden",children:[(0,a.jsxs)("div",{className:"flex items-center justify-between px-3 py-1.5 border-b border-white/10 bg-white/5",children:[(0,a.jsxs)("div",{className:"flex items-center gap-2 text-[11px] text-white/60 font-mono",children:[(0,a.jsx)("span",{className:"h-2 w-2 rounded-full bg-rose-400"}),(0,a.jsx)("span",{className:"h-2 w-2 rounded-full bg-amber-400"}),(0,a.jsx)("span",{className:"h-2 w-2 rounded-full bg-emerald-400"}),(0,a.jsx)("span",{className:"ml-2 uppercase tracking-wider",children:t}),r&&(0,a.jsxs)("span",{className:"text-white/40",children:["\xb7 ",r]})]}),(0,a.jsxs)(o.$,{variant:"ghost",size:"sm",className:"h-6 px-2 text-[11px] text-white/70 hover:text-white hover:bg-white/10",onClick:m,"aria-label":"Copy code",children:[l?(0,a.jsx)(s.A,{className:"h-3 w-3 mr-1"}):(0,a.jsx)(i.A,{className:"h-3 w-3 mr-1"}),l?"Copied":"Copy"]})]}),(0,a.jsx)("pre",{className:"code-scroll overflow-x-auto p-3 text-[12.5px] leading-relaxed font-mono",children:(0,a.jsx)("code",{children:h.map((e,t)=>{let r=t+1,n=d.includes(r);return(0,a.jsxs)("div",{className:["flex",n?"bg-primary/20 -mx-3 px-3 border-l-2 border-primary":""].join(" "),children:[(0,a.jsx)("span",{className:"select-none text-white/30 w-8 inline-block text-right pr-3 shrink-0",children:r}),(0,a.jsx)("span",{className:"whitespace-pre",children:e||" "})]},r)})})})]})}function l({children:e}){return(0,a.jsx)("code",{className:"rounded bg-muted px-1.5 py-0.5 text-[12px] font-mono text-foreground/90 border border-border/60",children:e})}},22164:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});let a=(0,r(6404).A)("external-link",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]])},39745:(e,t,r)=>{"use strict";r.d(t,{ComputerVisionPage:()=>M});var a=r(95155),n=r(12115),s=r(39430),i=r(98500),o=r.n(i),d=r(58381),l=r(27774),c=r(60508),h=r(92194),m=r(19776),p=r(66349),u=r(85757),x=r(45160),f=r(83036),g=r(33024),v=r(17243),b=r(53961),j=r(90718),y=r(10762),N=r(93219),k=r(65576),_=r(44071);let w=[{label:"Core operation",value:"conv2d",hint:"Y[i,j] = Σ_{u,v,c} X[i+u,j+v,c] \xb7 K[u,v,c] + b",deltaTone:"flat"},{label:"ViT patch size",value:"16\xd716",hint:"Standard ViT: 224\xd7224 image → 196 patches",deltaTone:"flat"},{label:"ResNet-50 params",value:"25.6M",hint:"CNN workhorse — ImageNet winner 2015",deltaTone:"flat"},{label:"Hardware",value:"Tensor cores",hint:"Same A100 FLOPS for conv & attention — both are matmul",deltaTone:"flat"}];function T(){let[e,t]=(0,n.useState)(0);(0,n.useEffect)(()=>{let e=setInterval(()=>t(e=>(e+1)%9),700);return()=>clearInterval(e)},[]);let r=[[-1,0,1],[-2,0,2],[-1,0,1]],i=Math.floor(e/4),o=e%4;return(0,a.jsxs)("div",{className:"rounded-md border border-border/60 bg-card p-4",children:[(0,a.jsx)("style",{children:`
        .conv-3d { perspective: 800px; }
        .conv-stage { transform: rotateX(18deg); transform-style: preserve-3d; }
      `}),(0,a.jsxs)("p",{className:"text-sm font-semibold mb-3 flex items-center gap-2",children:[(0,a.jsx)(g.A,{className:"h-4 w-4 text-primary"}),"Convolution in motion — kernel sliding over input"]}),(0,a.jsx)("div",{className:"conv-3d",children:(0,a.jsxs)("div",{className:"conv-stage flex justify-center items-start gap-6",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{className:"text-[10px] text-muted-foreground text-center mb-1.5",children:"Input (6\xd76)"}),(0,a.jsx)("div",{className:"inline-block",children:[[1,2,0,3,1,4],[0,5,3,2,1,0],[2,1,4,5,2,3],[3,0,1,4,5,2],[1,4,2,0,3,5],[0,2,3,1,4,2]].map((e,t)=>(0,a.jsx)("div",{className:"flex",children:e.map((e,n)=>{let d=t>=i&&t<i+3&&n>=o&&n<o+3,l=t-i,c=n-o,h=d?r[l][c]:0;return(0,a.jsx)(s.P.div,{animate:{backgroundColor:d?h>0?"oklch(0.55 0.16 165 / 0.35)":h<0?"oklch(0.6 0.20 25 / 0.30)":"oklch(0.7 0 0 / 0.20)":"oklch(0.7 0 0 / 0.10)",scale:d?1.08:1},className:"w-7 h-7 flex items-center justify-center text-[10px] font-mono border border-border/40 rounded-sm",children:e},`${t}-${n}`)})},t))}),(0,a.jsx)("p",{className:"text-[9px] text-muted-foreground text-center mt-1.5",children:"Green = kernel +, Red = kernel −, Gray = 0"})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{className:"text-[10px] text-muted-foreground text-center mb-1.5",children:"Kernel (3\xd73)"}),(0,a.jsx)("div",{className:"inline-block p-1.5 rounded border border-primary/40 bg-primary/5",children:r.map((e,t)=>(0,a.jsx)("div",{className:"flex",children:e.map((e,r)=>(0,a.jsx)(s.P.div,{animate:{scale:1.1,boxShadow:"0 0 0 2px oklch(0.55 0.16 165 / 0.6)"},className:"w-7 h-7 flex items-center justify-center text-[10px] font-mono font-bold border border-border/40 rounded-sm",children:e>0?`+${e}`:e},`${t}-${r}`))},t))}),(0,a.jsx)("p",{className:"text-[9px] text-muted-foreground text-center mt-1.5 font-mono",children:"Sobel-x edge detector"})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{className:"text-[10px] text-muted-foreground text-center mb-1.5",children:"Output (4\xd74)"}),(0,a.jsx)("div",{className:"inline-block",children:[[4,5,3,7],[3,6,4,5],[2,4,6,8],[5,3,7,4]].map((e,t)=>(0,a.jsx)("div",{className:"flex",children:e.map((e,r)=>{let n=t===i&&r===o,d=t<i||t===i&&r<o;return(0,a.jsx)(s.P.div,{animate:{backgroundColor:n?"oklch(0.55 0.16 165 / 0.5)":d?"oklch(0.7 0 0 / 0.18)":"oklch(0.7 0 0 / 0.05)",scale:n?1.15:1},className:"w-7 h-7 flex items-center justify-center text-[10px] font-mono border border-border/40 rounded-sm",children:d||n?e:"\xb7"},`${t}-${r}`)})},t))}),(0,a.jsx)("p",{className:"text-[9px] text-muted-foreground text-center mt-1.5",children:"Filled as kernel slides"})]})]})}),(0,a.jsxs)("div",{className:"flex justify-center gap-2 mt-3",children:[(0,a.jsxs)("span",{className:"text-[10px] px-2 py-0.5 rounded bg-primary text-primary-foreground font-mono",children:["step (",i,",",o,") → output[ki][kj]"]}),(0,a.jsx)("span",{className:"text-[10px] text-muted-foreground",children:"stride=1, padding=0 → (6−3+1)\xb2 = 16 outputs"})]}),(0,a.jsx)("p",{className:"text-[10px] text-muted-foreground text-center mt-2",children:"Each output cell = weighted sum of a 3\xd73 region of the input. The kernel is the learnable filter. Different kernels detect different features: edges, corners, textures, colours."})]})}function C(){return(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsx)("p",{className:"text-sm text-muted-foreground",children:"25 years of vision architectures. Each line is a top-of-class model — the key innovation, parameter count, and what changed. Notice ViT-22B is 350,000\xd7 larger than LeNet-5 — same mathematical structure (matmul), different scale."}),(0,a.jsx)("div",{className:"overflow-x-auto",children:(0,a.jsxs)("table",{className:"w-full text-xs",children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{className:"border-b border-border/60",children:[(0,a.jsx)("th",{className:"text-left px-2 py-1.5 text-muted-foreground font-medium",children:"Year"}),(0,a.jsx)("th",{className:"text-left px-2 py-1.5 text-muted-foreground font-medium",children:"Architecture"}),(0,a.jsx)("th",{className:"text-left px-2 py-1.5 text-muted-foreground font-medium",children:"Params"}),(0,a.jsx)("th",{className:"text-left px-2 py-1.5 text-muted-foreground font-medium",children:"Key innovation"})]})}),(0,a.jsx)("tbody",{children:[{name:"LeNet-5",year:"1998",params:"60K",key:"Conv + pool + FC. First CNN. MNIST digits.",color:"var(--chart-2)"},{name:"AlexNet",year:"2012",params:"60M",key:"ReLU + dropout + GPU. ImageNet winner.",color:"var(--chart-3)"},{name:"VGG-16",year:"2014",params:"138M",key:"3\xd73 convs stacked deep. Simple, uniform.",color:"var(--chart-4)"},{name:"ResNet-50",year:"2015",params:"25.6M",key:"Skip connections. 152 layers trainable. Workhorse.",color:"var(--chart-5)"},{name:"EfficientNet",year:"2019",params:"66M",key:"Compound scaling (depth/width/resolution).",color:"var(--chart-1)"},{name:"ConvNeXt",year:"2022",params:"89M",key:"Modernised conv — matches ViT, same data.",color:"var(--chart-2)"},{name:"ViT-22B",year:"2023",params:"22B",key:"Pure transformer. Scales better with data.",color:"var(--chart-3)"},{name:"CLIP / SigLIP",year:"2024+",params:"1-7B",key:"Multi-modal. Image+text joint embeddings.",color:"var(--chart-4)"}].map(e=>(0,a.jsxs)("tr",{className:"border-b border-border/30",children:[(0,a.jsx)("td",{className:"px-2 py-1.5 font-mono text-[11px]",children:e.year}),(0,a.jsx)("td",{className:"px-2 py-1.5",children:(0,a.jsxs)("span",{className:"inline-flex items-center gap-1.5 font-mono text-xs font-semibold",style:{color:e.color},children:[(0,a.jsx)("span",{className:"h-2 w-2 rounded-full",style:{backgroundColor:e.color}}),e.name]})}),(0,a.jsx)("td",{className:"px-2 py-1.5 font-mono text-[11px]",children:e.params}),(0,a.jsx)("td",{className:"px-2 py-1.5 text-[11px] text-muted-foreground",children:e.key})]},e.name))})]})})]})}let A=`# 2D Convolution — the core operation of CNNs
# Implements conv2d from scratch, no libraries needed
# Same algorithm as torch.nn.functional.conv2d (but slower)

import random

def conv2d(input_img, kernel, stride=1, padding=0):
    """
    2D convolution (cross-correlation in DL terms).
    
    input_img: H x W (grayscale for simplicity)
    kernel:    kH x kW
    output:    ((H + 2*pad - kH) // stride + 1) x similar for W
    
    Formula: Y[i,j] = sum_{u,v} X[i*stride + u - pad, j*stride + v - pad] * K[u,v] + b
    """
    H, W = len(input_img), len(input_img[0])
    kH, kW = len(kernel), len(kernel[0])
    
    # Apply padding (zero-pad)
    if padding > 0:
        padded = [[0] * (W + 2*padding) for _ in range(H + 2*padding)]
        for i in range(H):
            for j in range(W):
                padded[i+padding][j+padding] = input_img[i][j]
        input_img = padded
        H, W = len(input_img), len(input_img[0])
    
    out_h = (H - kH) // stride + 1
    out_w = (W - kW) // stride + 1
    output = [[0.0]*out_w for _ in range(out_h)]
    
    for i in range(out_h):
        for j in range(out_w):
            s = 0.0
            for u in range(kH):
                for v in range(kW):
                    s += input_img[i*stride + u][j*stride + v] * kernel[u][v]
            output[i][j] = s
    return output

def maxpool2d(input_img, size=2, stride=2):
    "Max pooling — downsamples by taking max over windows."
    H, W = len(input_img), len(input_img[0])
    out_h = (H - size) // stride + 1
    out_w = (W - size) // stride + 1
    output = [[0.0]*out_w for _ in range(out_h)]
    for i in range(out_h):
        for j in range(out_w):
            m = float('-inf')
            for u in range(size):
                for v in range(size):
                    val = input_img[i*stride + u][j*stride + v]
                    if val > m:
                        m = val
            output[i][j] = m
    return output

# 6x6 "image" — could be a 6x6 region of a feature map
random.seed(42)
image = [[random.randint(0, 9) for _ in range(6)] for _ in range(6)]

# 3 kernels: edge-x, edge-y, blur
sobel_x = [[-1, 0, 1], [-2, 0, 2], [-1, 0, 1]]
sobel_y = [[-1, -2, -1], [0, 0, 0], [1, 2, 1]]
blur    = [[1/9, 1/9, 1/9], [1/9, 1/9, 1/9], [1/9, 1/9, 1/9]]

print("=" * 60)
print("2D Convolution — 3 Kernels (Pyodide)")
print("=" * 60)

print("\\nInput image (6\xd76):")
for row in image:
    print("  " + " ".join(f"{v:2d}" for v in row))

# Apply each kernel
for name, kernel in [("Sobel-X (vertical edges)", sobel_x),
                     ("Sobel-Y (horizontal edges)", sobel_y),
                     ("Blur (3\xd73 average)", blur)]:
    out = conv2d(image, kernel)
    print(f"\\nAfter conv with {name} → {len(out)}\xd7{len(out[0])} output:")
    for row in out:
        print("  " + " ".join(f"{v:5.1f}" for v in row))

# Stack outputs as 3-channel feature map, then maxpool
feat_map = [conv2d(image, sobel_x), conv2d(image, sobel_y), conv2d(image, blur)]
print(f"\\nStacked: {len(feat_map)} channels \xd7 {len(feat_map[0])}\xd7{len(feat_map[0][0])}")
print("  (this is what a Conv2d(3, 3, kernel_size=3) layer produces)")

# Max-pool each channel
pooled = [maxpool2d(ch, size=2, stride=2) for ch in feat_map]
print(f"\\nAfter maxpool(2,2): {len(pooled)} channels \xd7 {len(pooled[0])}\xd7{len(pooled[0][0])}")
print("  Each channel halved in H,W — keeps dominant features, drops noise.")
print("  This is the 'hierarchical feature' flow: edges → motifs → objects.")

print(f"\\n{'=' * 60}")
print("PRODUCTION FORMULA:")
print("  Conv2d output shape = (batch, out_channels,")
print("    (H + 2*pad - kernel) // stride + 1,")
print("    (W + 2*pad - kernel) // stride + 1)")
print("  Parameters = out_channels * (in_channels * kH * kW + 1)")
print(f"\\n  Conv2d(3, 64, 3, padding=1) has {3 * (64 * 3 * 3 + 1):,} params (first layer)")
print("  Total ResNet-50: 25.6M params, all from this pattern stacked deep.")
print("=" * 60)`,L=`# Convolutional Backpropagation — how kernels are learned
# Shows the gradient flow: how the kernel changes given a loss

import random, math

def conv2d(X, K, stride=1):
    "Forward: Y = X * K (cross-correlation)"
    H, W = len(X), len(X[0])
    kH, kW = len(K), len(K[0])
    out_h = (H - kH) // stride + 1
    out_w = (W - kW) // stride + 1
    Y = [[0.0]*out_w for _ in range(out_h)]
    for i in range(out_h):
        for j in range(out_w):
            s = 0.0
            for u in range(kH):
                for v in range(kW):
                    s += X[i*stride+u][j*stride+v] * K[u][v]
            Y[i][j] = s
    return Y

def conv2d_input_grad(dY, K, X_shape, stride=1):
    """
    Backward wrt input: dX = conv2d(dY, rot180(K), padding=kH-1)
    This is the transpose convolution — used in deconvnets, segmentation.
    """
    H, W = X_shape
    kH, kW = len(K), len(K[0])
    dY_h, dY_w = len(dY), len(dY[0])
    dX = [[0.0]*W for _ in range(H)]
    for i in range(dY_h):
        for j in range(dY_w):
            for u in range(kH):
                for v in range(kW):
                    if 0 <= i*stride+u < H and 0 <= j*stride+v < W:
                        dX[i*stride+u][j*stride+v] += dY[i][j] * K[u][v]
    return dX

def conv2d_kernel_grad(X, dY, K_shape, stride=1):
    """
    Backward wrt kernel: dK[u,v] = sum over (i,j) of X[i+u, j+v] * dY[i,j]
    This is the gradient we use to UPDATE the kernel via SGD.
    """
    kH, kW = K_shape
    dK = [[0.0]*kW for _ in range(kH)]
    for u in range(kH):
        for v in range(kW):
            s = 0.0
            for i in range(len(dY)):
                for j in range(len(dY[0])):
                    s += X[i*stride+u][j*stride+v] * dY[i][j]
            dK[u][v] = s
    return dK

# Set up a tiny CNN: 1 conv layer + ReLU + MSE loss
random.seed(42)
# 5x5 input (synthetic)
X = [[random.gauss(0, 1) for _ in range(5)] for _ in range(5)]
# 3x3 random kernel (initial weights)
K = [[random.gauss(0, 0.1) for _ in range(3)] for _ in range(3)]
# Target output (what we want Y to be — supervised signal)
target = [[1.0, 0.5, 0.0], [0.5, 1.0, 0.5], [0.0, 0.5, 1.0]]

def loss_mse(Y, target):
    "MSE loss = mean((Y - target)^2)"
    n = len(Y) * len(Y[0])
    s = 0.0
    for i in range(len(Y)):
        for j in range(len(Y[0])):
            s += (Y[i][j] - target[i][j]) ** 2
    return s / n

def loss_grad(Y, target):
    "dL/dY = 2/N * (Y - target)"
    n = len(Y) * len(Y[0])
    return [[2 * (Y[i][j] - target[i][j]) / n for j in range(len(Y[0]))] for i in range(len(Y))]

print("=" * 60)
print("Convolutional Backprop — Kernel Learning Demo")
print("=" * 60)

# Training loop
lr = 0.05
for epoch in range(30):
    # Forward
    Y = conv2d(X, K)
    # ReLU
    Y_relu = [[max(0.0, Y[i][j]) for j in range(len(Y[0]))] for i in range(len(Y))]
    # Loss
    L = loss_mse(Y_relu, target)
    # dL/dY (after ReLU: gradient is 0 where Y < 0)
    dY = loss_grad(Y_relu, target)
    for i in range(len(Y)):
        for j in range(len(Y[0])):
            if Y[i][j] < 0:
                dY[i][j] = 0
    # Backward: dK = conv2d_kernel_grad(X, dY)
    dK = conv2d_kernel_grad(X, dY, (3, 3))
    # Update: K -= lr * dK
    for i in range(3):
        for j in range(3):
            K[i][j] -= lr * dK[i][j]
    if epoch % 5 == 0 or epoch == 29:
        print(f"  Epoch {epoch:2d}: loss = {L:.4f}, K[0][0] = {K[0][0]:+.4f}")

print(f"\\n{'=' * 60}")
print("BACKPROP MECHANICS:")
print("  Forward:  Y = X * K       (conv2d)")
print("  Loss:     L = MSE(Y, target)")
print("  dL/dY:    2/N * (Y - target)")
print("  ReLU:     dL/dY[i,j] *= 0 if Y[i,j] < 0")
print("  dL/dK:    dK[u,v] = Σ_ij X[i+u, j+v] * dY[i,j]")
print("            (cross-correlation of X with dY)")
print("  Update:   K -= lr * dK   (gradient descent)")
print("\\n  Each epoch, the kernel 'moves' to reduce the loss.")
print("  After 30 epochs: kernel has converged toward the filter")
print("  that maps X → target.")
print("=" * 60)`,P=`import torch
import torch.nn as nn
import torch.nn.functional as F

# ============================================================
# Conv2d layer — what's actually happening under the hood
# ============================================================

class Conv2d(nn.Module):
    """Conv2d implemented as a learnable convolution layer.
    
    Shape: (N, C_in, H, W) -> (N, C_out, H_out, W_out)
    where H_out = (H + 2*pad - kH) // stride + 1
    
    Parameters: C_out * (C_in * kH * kW + 1)  -- the +1 is the bias
    """
    def __init__(self, in_channels, out_channels, kernel_size, 
                 stride=1, padding=0):
        super().__init__()
        self.stride = stride
        self.padding = padding
        self.kH, self.kW = (kernel_size, kernel_size) \\
            if isinstance(kernel_size, int) else kernel_size
        # Learnable kernel + bias
        self.weight = nn.Parameter(
            torch.randn(out_channels, in_channels, self.kH, self.kW) 
            * (2 / (in_channels * self.kH * self.kW) ** 0.5)  # Kaiming init
        )
        self.bias = nn.Parameter(torch.zeros(out_channels))
    
    def forward(self, x):
        # x: (N, C_in, H, W)
        # Use F.conv2d for production speed (cuDNN underneath)
        return F.conv2d(x, self.weight, self.bias, 
                        stride=self.stride, padding=self.padding)
    
    def backward(self, grad_output):
        # PyTorch autograd handles this — but conceptually:
        # dW = conv2d_kernel_grad(x, grad_output)  ← see Pyodide demo
        # dx = conv2d_input_grad(grad_output, weight)  ← transpose conv
        pass

# ============================================================
# A small CNN — LeNet-style, the architecture that started it all
# ============================================================

class LeNet5(nn.Module):
    """LeNet-5 (Yann LeCun, 1998) — first production CNN.
    Used by US Postal Service to read handwritten digits.
    
    Architecture:
        Input: 1\xd732\xd732 (grayscale digit)
        Conv1: 1→6 channels, 5\xd75 kernel  →  6\xd728\xd728
        Pool:  2\xd72 max, stride 2          →  6\xd714\xd714
        Conv2: 6→16 channels, 5\xd75 kernel  → 16\xd710\xd710
        Pool:  2\xd72 max, stride 2          → 16\xd75\xd75
        FC1:   16*5*5 = 400 → 120
        FC2:   120 → 84
        FC3:   84 → 10 (10 digits)
    
    Total params: ~60K (vs ViT-22B: 22B — 350,000\xd7 larger)
    """
    def __init__(self, num_classes=10):
        super().__init__()
        self.conv1 = nn.Conv2d(1, 6, kernel_size=5)
        self.conv2 = nn.Conv2d(6, 16, kernel_size=5)
        self.fc1 = nn.Linear(16 * 5 * 5, 120)
        self.fc2 = nn.Linear(120, 84)
        self.fc3 = nn.Linear(84, num_classes)
    
    def forward(self, x):
        # Block 1: conv → tanh → pool
        x = F.max_pool2d(F.relu(self.conv1(x)), 2)
        # Block 2: conv → tanh → pool
        x = F.max_pool2d(F.relu(self.conv2(x)), 2)
        # Flatten (keep batch dim)
        x = x.flatten(1)
        # MLP head
        x = F.relu(self.fc1(x))
        x = F.relu(self.fc2(x))
        return self.fc3(x)

# ============================================================
# ViT — Vision Transformer (modern alternative)
# ============================================================

class PatchEmbedding(nn.Module):
    """ViT patch embedding: split image into 16x16 patches, linear project.
    
    Shape: (N, 3, 224, 224) -> (N, 196, 768)
    where 196 = (224/16)^2 patches, 768 = embedding dim
    """
    def __init__(self, img_size=224, patch_size=16, in_chans=3, embed_dim=768):
        super().__init__()
        self.num_patches = (img_size // patch_size) ** 2  # 196
        # A Conv2d with kernel_size=stride=patch_size IS a patch embedding!
        self.proj = nn.Conv2d(in_chans, embed_dim, 
                             kernel_size=patch_size, stride=patch_size)
    
    def forward(self, x):
        # x: (N, 3, 224, 224) -> (N, 768, 14, 14) -> (N, 196, 768)
        x = self.proj(x)  # conv2d: stride=patch_size means non-overlapping
        x = x.flatten(2).transpose(1, 2)  # (N, embed_dim, num_patches) -> (N, num_patches, embed_dim)
        return x

class ViTBlock(nn.Module):
    """One ViT block = LayerNorm -> MultiHeadAttention -> residual
                          -> LayerNorm -> MLP -> residual
    Identical to a Transformer encoder block (see /transformer page).
    """
    def __init__(self, dim=768, heads=12, mlp_dim=3072):
        super().__init__()
        self.norm1 = nn.LayerNorm(dim)
        self.attn = nn.MultiheadAttention(dim, heads, batch_first=True)
        self.norm2 = nn.LayerNorm(dim)
        self.mlp = nn.Sequential(
            nn.Linear(dim, mlp_dim),
            nn.GELU(),
            nn.Linear(mlp_dim, dim),
        )
    
    def forward(self, x):
        # Pre-norm transformer block
        h = self.norm1(x)
        a, _ = self.attn(h, h, h, need_weights=False)
        x = x + a
        h = self.norm2(x)
        x = x + self.mlp(h)
        return x

class VisionTransformer(nn.Module):
    """Full ViT: patch embed + positional enc + N blocks + head."""
    def __init__(self, img_size=224, patch_size=16, in_chans=3,
                 embed_dim=768, depth=12, heads=12, num_classes=1000):
        super().__init__()
        self.patch_embed = PatchEmbedding(img_size, patch_size, in_chans, embed_dim)
        num_patches = self.patch_embed.num_patches
        # CLS token (prepended)
        self.cls_token = nn.Parameter(torch.zeros(1, 1, embed_dim))
        # Positional embedding (learnable)
        self.pos_embed = nn.Parameter(torch.zeros(1, num_patches + 1, embed_dim))
        self.blocks = nn.ModuleList([ViTBlock(embed_dim, heads) for _ in range(depth)])
        self.norm = nn.LayerNorm(embed_dim)
        self.head = nn.Linear(embed_dim, num_classes)
    
    def forward(self, x):
        # (N, 3, 224, 224) -> (N, 196, 768)
        x = self.patch_embed(x)
        # Prepend CLS token
        cls = self.cls_token.expand(x.shape[0], -1, -1)
        x = torch.cat([cls, x], dim=1)  # (N, 197, 768)
        # Add positional embedding
        x = x + self.pos_embed
        # Transformer encoder
        for blk in self.blocks:
            x = blk(x)
        x = self.norm(x)
        # CLS token output → classification head
        return self.head(x[:, 0])  # (N, num_classes)

# ============================================================
# Hybrid architecture (ADR-026): CNN stem + ViT body
# ============================================================

class HybridViT(nn.Module):
    """
    ADR-026: hybrid architecture — CNN stem (cheap inductive bias) 
    + ViT body (scalable attention).
    
    The first 2-3 conv layers act as a 'tokeniser' — they extract local
    features cheaply, then the ViT body does global reasoning.
    """
    def __init__(self, num_classes=1000):
        super().__init__()
        # CNN stem: 3 conv + pool, 224x224 -> 14x14 feature map
        self.stem = nn.Sequential(
            nn.Conv2d(3, 64, 7, stride=2, padding=3),  # 224 -> 112
            nn.BatchNorm2d(64),
            nn.ReLU(),
            nn.Conv2d(64, 128, 3, padding=1),         # 112 -> 112
            nn.BatchNorm2d(128),
            nn.ReLU(),
            nn.MaxPool2d(2),                            # 112 -> 56
            nn.Conv2d(128, 256, 3, padding=1),         # 56 -> 56
            nn.BatchNorm2d(256),
            nn.ReLU(),
            nn.MaxPool2d(4),                            # 56 -> 14
        )
        # Now treat 14x14 = 196 patches, 256 dim as ViT input
        self.vit = VisionTransformer(
            img_size=14, patch_size=1,  # patch_size=1: each pixel is a patch
            in_chans=256, embed_dim=256, depth=6, heads=8, num_classes=num_classes
        )
    
    def forward(self, x):
        x = self.stem(x)  # (N, 256, 14, 14)
        return self.vit(x)

# Sanity check
if __name__ == "__main__":
    # LeNet-5
    model = LeNet5()
    x = torch.randn(1, 1, 32, 32)
    out = model(x)
    print(f"LeNet-5: input {tuple(x.shape)} -> output {tuple(out.shape)}")
    print(f"  Parameters: {sum(p.numel() for p in model.parameters()):,}")
    
    # ViT
    vit = VisionTransformer()
    x = torch.randn(1, 3, 224, 224)
    out = vit(x)
    print(f"\\nViT: input {tuple(x.shape)} -> output {tuple(out.shape)}")
    print(f"  Parameters: {sum(p.numel() for p in vit.parameters()):,}")
    
    # Hybrid
    hybrid = HybridViT()
    x = torch.randn(1, 3, 224, 224)
    out = hybrid(x)
    print(f"\\nHybrid ViT: input {tuple(x.shape)} -> output {tuple(out.shape)}")
    print(f"  Parameters: {sum(p.numel() for p in hybrid.parameters()):,}")`;function M(){return(0,a.jsxs)("div",{className:"space-y-8",children:[(0,a.jsx)(d.zY,{eyebrow:"Computer Vision \xb7 CNNs → ViT",title:"Computer Vision — Convolutional Networks to Vision Transformers",description:"The math behind image understanding: 2D convolution (cross-correlation with learnable kernels), max pooling, convolutional backpropagation (gradient through kernel updates), and the ViT alternative (patches → transformer encoder). With low-level PyTorch implementations of Conv2d, LeNet-5, full VisionTransformer, and the ADR-026 hybrid architecture (CNN stem + ViT body). Code-oriented, mathematical, scientific.",right:(0,a.jsxs)("div",{className:"flex gap-2",children:[(0,a.jsxs)(x.E,{variant:"outline",className:"gap-1.5",children:[(0,a.jsx)(v.A,{className:"h-3 w-3"})," CNN + ViT"]}),(0,a.jsxs)(x.E,{variant:"outline",className:"gap-1.5",children:[(0,a.jsx)(b.A,{className:"h-3 w-3"})," Pyodide"]})]})}),(0,a.jsx)("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-3",children:w.map(e=>(0,a.jsx)(d.nO,{label:e.label,value:e.value,hint:e.hint,deltaTone:e.deltaTone},e.label))}),(0,a.jsx)(d.iv,{title:"Convolution in motion — kernel sliding over input",description:"The 3\xd73 kernel slides across the 6\xd76 input. At each position, it computes a weighted sum of the 9 overlapping cells (kernel weights \xd7 input values). The output is a 4\xd74 feature map. The kernel IS the learnable filter — different kernels detect edges, corners, textures, colours.",icon:(0,a.jsx)(g.A,{className:"h-5 w-5"}),badge:"3D animation",children:(0,a.jsx)(T,{})}),(0,a.jsx)(d.iv,{title:"The convolution equation",description:"The 2D convolution (technically cross-correlation in DL) formula. The output is computed by sliding the kernel over the input, multiplying elementwise, and summing. Padding adds zeros at the boundary to control output size; stride controls how far the kernel jumps between positions.",icon:(0,a.jsx)(j.A,{className:"h-5 w-5"}),badge:"mathematics",children:(0,a.jsxs)("div",{className:"space-y-3",children:[(0,a.jsxs)("div",{className:"rounded-md border border-primary/30 bg-primary/5 p-3 text-center",children:[(0,a.jsxs)("p",{className:"font-mono text-sm text-primary",children:["Y[i, j] = Σ",(0,a.jsx)("sub",{children:"u=0"}),(0,a.jsx)("sup",{children:"kH-1"})," Σ",(0,a.jsx)("sub",{children:"v=0"}),(0,a.jsx)("sup",{children:"kW-1"})," Σ",(0,a.jsx)("sub",{children:"c=0"}),(0,a.jsx)("sup",{children:"C-1"})," X[i\xb7stride + u − pad, j\xb7stride + v − pad, c] \xb7 K[u, v, c] + b"]}),(0,a.jsx)("p",{className:"text-[11px] text-muted-foreground mt-1",children:"2D convolution with multi-channel input. The kernel K ∈ ℝ^(kH\xd7kW\xd7C_in\xd7C_out) is the learnable parameter."})]}),(0,a.jsxs)("div",{className:"grid md:grid-cols-3 gap-2 text-xs",children:[(0,a.jsxs)("div",{className:"rounded-md border border-border/60 p-2.5",children:[(0,a.jsx)("p",{className:"font-semibold mb-1",children:"Output shape"}),(0,a.jsx)("p",{className:"font-mono text-[11px]",children:"(H + 2\xb7pad − kH) / stride + 1"}),(0,a.jsx)("p",{className:"text-muted-foreground text-[11px] mt-1",children:"For 6\xd76 input, 3\xd73 kernel, pad=0, stride=1 → 4\xd74 output. pad=1 → 6\xd76 output."})]}),(0,a.jsxs)("div",{className:"rounded-md border border-border/60 p-2.5",children:[(0,a.jsx)("p",{className:"font-semibold mb-1",children:"Parameter count"}),(0,a.jsx)("p",{className:"font-mono text-[11px]",children:"C_out \xd7 (C_in \xd7 kH \xd7 kW + 1)"}),(0,a.jsx)("p",{className:"text-muted-foreground text-[11px] mt-1",children:"Conv2d(3, 64, 3): 3 \xd7 (64 \xd7 9 + 1) = 1,728 params. Small! Depth comes from stacking."})]}),(0,a.jsxs)("div",{className:"rounded-md border border-border/60 p-2.5",children:[(0,a.jsx)("p",{className:"font-semibold mb-1",children:"Receptive field"}),(0,a.jsxs)("p",{className:"font-mono text-[11px]",children:["RF(layer L) = RF(L-1) + (kL − 1) \xd7 ∏",(0,a.jsx)("sub",{children:"i<L"})," stride",(0,a.jsx)("sub",{children:"i"})]}),(0,a.jsx)("p",{className:"text-muted-foreground text-[11px] mt-1",children:"Grows with depth. 5 conv layers of 3\xd73 = RF of 11 — sees a third of a 32\xd732 image."})]})]})]})}),(0,a.jsx)(d.iv,{title:"Try it: 2D convolution + max pooling — 3 kernels (Pyodide)",description:"Implements conv2d from scratch, applies 3 different kernels (Sobel-X for vertical edges, Sobel-Y for horizontal edges, blur for smoothing) to a 6\xd76 image, stacks the outputs as a multi-channel feature map, and max-pools them. This is one Conv2d + MaxPool block — the building block of every CNN.",icon:(0,a.jsx)(y.A,{className:"h-5 w-5"}),badge:"executable",children:(0,a.jsx)(p.l,{code:A,buttonLabel:"Run conv2d demo (Pyodide)"})}),(0,a.jsx)(d.iv,{title:"Architecture timeline — LeNet to ViT-22B",description:"25 years of vision architectures. Notice ViT-22B is 350,000\xd7 larger than LeNet-5 — same mathematical structure (matmul), different scale. The journey: convolutions (LeNet), GPU training (AlexNet), depth (VGG/ResNet), compound scaling (EfficientNet), modernised conv (ConvNeXt), pure attention (ViT), multi-modal (CLIP).",icon:(0,a.jsx)(N.A,{className:"h-5 w-5"}),children:(0,a.jsx)(C,{})}),(0,a.jsx)(d.iv,{title:"Convolutional backpropagation — how kernels are learned",description:"The forward pass: Y = X ∗ K. The backward pass: dK = X ⊛ dY (cross-correlation of input with output gradient). The kernel is updated via gradient descent: K ← K − η \xb7 dK. This is the same chain rule as for MLPs, but the parameter-sharing structure of convolution makes the gradient a cross-correlation.",icon:(0,a.jsx)(j.A,{className:"h-5 w-5"}),badge:"mathematics",children:(0,a.jsxs)("div",{className:"space-y-3",children:[(0,a.jsxs)("div",{className:"rounded-md border border-primary/30 bg-primary/5 p-3 text-center",children:[(0,a.jsxs)("p",{className:"font-mono text-sm text-primary",children:["∂L/∂K[u, v] = Σ",(0,a.jsx)("sub",{children:"i, j"})," X[i + u, j + v] \xb7 ∂L/∂Y[i, j]"]}),(0,a.jsx)("p",{className:"text-[11px] text-muted-foreground mt-1",children:"Kernel gradient = cross-correlation of input with output gradient. Same as the forward pass with roles swapped."})]}),(0,a.jsxs)("div",{className:"rounded-md border border-border/60 p-3 bg-muted/10",children:[(0,a.jsx)("p",{className:"font-mono text-xs text-foreground/90 font-semibold mb-2",children:"Three gradient rules:"}),(0,a.jsxs)("ul",{className:"text-xs space-y-1 ml-3",children:[(0,a.jsxs)("li",{children:[(0,a.jsx)("span",{className:"font-mono text-primary",children:"dK"})," = conv2d_kernel_grad(X, dY) — gradient wrt kernel (used to update weights)"]}),(0,a.jsxs)("li",{children:[(0,a.jsx)("span",{className:"font-mono text-primary",children:"dX"})," = conv2d_input_grad(dY, K) — gradient wrt input (propagated to previous layer)"]}),(0,a.jsxs)("li",{children:[(0,a.jsx)("span",{className:"font-mono text-primary",children:"db"})," = Σ",(0,a.jsx)("sub",{children:"i,j"})," dY[i, j] — gradient wrt bias (simple sum)"]})]}),(0,a.jsx)("p",{className:"text-[11px] text-muted-foreground mt-2",children:"The magic: convolution + cross-correlation share the same mathematical structure, so backprop is just another convolution. GPUs run both forward and backward on the same tensor cores."})]})]})}),(0,a.jsx)(d.iv,{title:"Try it: Convolutional backprop — train a 3\xd73 kernel (Pyodide)",description:"Implements conv2d forward + conv2d_kernel_grad backward from scratch. Trains a single 3\xd73 kernel via SGD to map a 5\xd75 input to a 3\xd73 target. Watch the loss decrease and the kernel weights evolve. This is the EXACT mechanism PyTorch uses to train Conv2d layers (just slower — PyTorch uses cuDNN's optimised im2col + GEMM).",icon:(0,a.jsx)(y.A,{className:"h-5 w-5"}),badge:"executable",children:(0,a.jsx)(p.l,{code:L,buttonLabel:"Run conv backprop (Pyodide)"})}),(0,a.jsx)(d.iv,{title:"Low-level PyTorch — Conv2d, LeNet-5, VisionTransformer, HybridViT (ADR-026)",description:"The actual PyTorch implementations. Conv2d with Kaiming init. LeNet-5 (1998, 60K params). Full VisionTransformer with patch embedding + CLS token + positional encoding + 12 transformer blocks. HybridViT — the ADR-026 architecture with a CNN stem (cheap inductive bias) feeding a ViT body (scalable attention).",icon:(0,a.jsx)(k.A,{className:"h-5 w-5"}),badge:"low-level",children:(0,a.jsx)(m.N,{language:"python",filename:"vision_models.py",highlight:[14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259],code:P})}),(0,a.jsx)(d.iv,{title:"Hardware implications — both conv and attention are matmul",description:"The Comp Sci & Materials page (#33) showed that matmul is the ONE operation that powers all AI. Convolutions can be implemented as im2col + matmul. Attention is matmul + softmax + matmul. The same A100 GPU runs both at 312 TFLOPS via tensor cores. ViT vs CNN is not a hardware question — both are matmul-bound.",icon:(0,a.jsx)(k.A,{className:"h-5 w-5"}),children:(0,a.jsx)(m.N,{language:"text",filename:"vision_hardware.txt",code:`┌─────────────────────────────────────────────────────────────────────┐
│  VISION MODEL → HARDWARE MAPPING                                       │
│                                                                         │
│  Conv2d(3, 64, 3):                                                      │
│    im2col(X) → (batch*H_out*W_out, C_in*kH*kW) = (N*30*30, 27)          │
│    matmul(im2col(X), reshape(K, (27, 64)))  → (N*30*30, 64)             │
│    reshape → (N, 64, H_out, W_out)                                       │
│    Cost: N*30*30*27*64 FLOPs = 1.55M FLOPs per image                    │
│                                                                         │
│  ViT patch embed:                                                       │
│    Conv2d(3, 768, kernel=16, stride=16)  ← EXACTLY a Conv2d!            │
│    Output: (N, 768, 14, 14) → (N, 196, 768)                            │
│    Cost: N*14*14*3*768 = 451K FLOPs per image (smaller)                 │
│                                                                         │
│  ViT attention block (12 heads, d=768, seq=196):                        │
│    Q,K,V projections: 3 \xd7 (196 \xd7 768 \xd7 768) = 345M FLOPs               │
│    Attention: 2 \xd7 (196 \xd7 196 \xd7 768) = 59M FLOPs                        │
│    FFN: 2 \xd7 (196 \xd7 768 \xd7 3072) = 924M FLOPs                            │
│    Per block: 1.32B FLOPs   \xd712 blocks = 15.8B FLOPs total             │
│                                                                         │
│  Both run on the same A100 tensor cores at 312 TFLOPS                  │
│  Conv im2col → matmul: same shape as ViT projection                     │
│  Attention → matmul: same shape as Conv im2col                          │
│                                                                         │
│  THE INSIGHT: the "CNN vs ViT" debate is a SOFTWARE question            │
│  (inductive bias vs data scale), not a HARDWARE question.               │
│  The hardware sees only matmul either way.                               │
└─────────────────────────────────────────────────────────────────────────┘`})}),(0,a.jsx)(d.iv,{title:"My deeper thought: convolutions ARE learnable DSP filters",description:"Convolutional neural networks rediscovered 50 years of digital signal processing (DSP) research. The Sobel edge detector, Gabor filters, wavelets — all hand-engineered convolutions. CNNs just make the filter coefficients learnable. ViT generalises further: it learns the filter AND the spatial weighting via attention.",icon:(0,a.jsx)(_.A,{className:"h-5 w-5"}),badge:"Insight",children:(0,a.jsxs)("div",{className:"space-y-3 text-sm text-muted-foreground leading-relaxed",children:[(0,a.jsxs)("p",{children:["The convolution operation ",(0,a.jsx)("strong",{className:"text-foreground/80",children:"predates deep learning by decades"}),". The discrete 2D convolution Y[i,j] = Σ X[i+u,j+v] \xb7 K[u,v] is the fundamental operation of digital signal processing — image filtering, audio equalisation, radar processing, medical imaging (CT, MRI reconstruction). The Sobel edge detector in the Pyodide demo above was published in 1968. Canny edge detection (1986). Gabor filters (1946). Wavelet transforms (1980s). All are convolutions with fixed (hand-engineered) kernels. What Yann LeCun did with LeNet-5 in 1998 was to make the kernel coefficients learnable via backpropagation — and the rest is history."]}),(0,a.jsxs)("p",{children:[(0,a.jsx)("strong",{className:"text-foreground/80",children:"This connects to the platform in three concrete ways:"})," First, the platform's vision pipeline (ADR-026) takes dashboard screenshots and invoice scans — these go through convolutions that, when visualised, look exactly like the Sobel-X/Y filters in the Pyodide demo. The model rediscovers classical DSP filters because they're the optimal linear filters for low-level vision. Second, the platform's RAG pipeline (ADR-022) uses CLIP embeddings — CLIP's image encoder IS a Vision Transformer. The same attention mechanism that powers the LLM (see /transformer) powers the image encoder. pgvector stores text AND image embeddings in the same HNSW index — multi-modal retrieval is one index. Third, the platform's semantic layer (ADR-024) NL-to-SQL: when a user uploads a chart image and asks \"what does this show?\", the image is encoded by a ViT, the embedding retrieves similar chart descriptions via pgvector, and the LLM generates SQL grounded in those retrieved patterns. The vision pipeline IS a retrieval-augmented generation pipeline — just with images as the modality."]}),(0,a.jsxs)("p",{children:[(0,a.jsx)("strong",{className:"text-foreground/80",children:"The deep mathematical unification:"}),' convolution is a special case of attention where the attention weights are spatially-fixed (the kernel) rather than content-dependent (the softmax of QKᵀ). Or equivalently: attention is a "soft convolution" where the kernel is dynamically computed from the query. This is why ViT works — it generalises convolution by making the filter input-dependent. The platform\'s trajectory from CNN (ADR-026 fallback) to ViT (ADR-026 default) to multi-modal CLIP (ADR-026 future) is the same trajectory as the field: from fixed filters to learned filters to content-addressable filters. The Math.md mathematical structure (matmul + reduction + nonlinearity) is invariant under this trajectory.']})]})}),(0,a.jsxs)(f.S,{pageTitle:"Computer Vision",children:[(0,a.jsx)(f.P,{title:"Computer Vision IS part of a larger system — no page stands alone",connectedTo:"ADR-001 (platform architecture)",children:(0,a.jsx)("p",{children:"This page about Computer Vision is not an isolated reference — it's a node in a graph. The platform's thesis is that the same math appears across genomics, fintech, maritime, and audio. Computer Vision connects to the elegant-code cards via shared equations, and to the living-equation pages via live demos. The reader who arrives here looking for facts leaves with a map of where Computer Vision sits in the computational-science landscape."})}),(0,a.jsx)(f.P,{title:"The technology will change; the math won't",connectedTo:"ADR-055 (cross-disciplinary scope)",children:(0,a.jsx)("p",{children:"In a decade, the specific tools on this page (Computer Vision) may be replaced. But the underlying mathematics — the equations, the distributions, the optimisation rules — will be the same. SVD was invented in 1873 and still runs on NumPy today. Attention was described in 2017 and will run on whatever replaces PyTorch. The platform invests in the MATH, not the tools, because the math is the part that survives technology turnover."})}),(0,a.jsx)(f.P,{title:"The fold pattern respects the reader's attention",connectedTo:"ADR-050 (fold-section architecture)",children:(0,a.jsx)("p",{children:"This page has fold sections (collapsed by default) that reveal deeper content on demand — equation family comparisons, LaTeX derivations, production patterns, expected outputs, and citations. The basic content is visible immediately; the deeper phases are there when the reader is ready. Progressive disclosure isn't just UX — it's epistemological. A reader who wants the summary gets it; a reader who wants the derivation clicks to expand. Both are served by the same page."})}),(0,a.jsx)(f.P,{title:"The output IS the proof — not just the equation",connectedTo:"ADR-034 (ESM-2 + AlphaFold2 adoption)",children:(0,a.jsx)("p",{children:"Where this page has interactive demos (Pyodide + sliders + charts), the visual output IS the argument. Seeing a chart update as you drag a slider communicates the math in a way no formula can. The brain's pattern-recognition system processes the visual output faster than the verbal/analytical pathway. That's why the platform pairs every equation with a live demo — the output plays to a different level of the brain than the prose."})}),(0,a.jsx)(f.P,{title:"In a decade, this page will evolve — and that's the point",connectedTo:"ADR-022 (pgvector for variant embeddings)",children:(0,a.jsx)("p",{children:"The datasets, libraries, and tools on this page will be updated as technology evolves. The 1000-Genomes Project will become the 10M-Genomes Project. NumPy may be replaced by a WebGPU-native array library. PyTorch may give way to a successor. But the math — SVD, Attention, Poisson, FFT, Bayes, Kalman, GBM — will be the same. The platform is designed for this evolution: the equations are the anchor, the tools are the amplifier, and the fold sections let us update the tools without rewriting the page."})})]}),(0,a.jsx)(c.R,{pageId:"computer-vision"}),(0,a.jsx)(h.B,{pageId:"computer-vision"}),(0,a.jsx)(l.T,{relatedPages:[{id:"connections",reason:"Trace this topic's connections across the platform's math graph"},{id:"transformer",reason:"Continue to transformer — see also from this page"},{id:"comp-sci-materials",reason:"Continue to comp sci materials — see also from this page"}]}),(0,a.jsxs)("div",{className:"flex flex-wrap gap-2",children:[(0,a.jsx)(o(),{href:(0,u.ZJ)("transformer"),className:"text-sm text-primary hover:underline",children:"→ Transformer (ViT IS a Transformer)"}),(0,a.jsx)("span",{className:"text-muted-foreground",children:"\xb7"}),(0,a.jsx)(o(),{href:(0,u.ZJ)("comp-sci-materials"),className:"text-sm text-primary hover:underline",children:"→ Comp Sci & Materials (the hardware)"}),(0,a.jsx)("span",{className:"text-muted-foreground",children:"\xb7"}),(0,a.jsx)(o(),{href:(0,u.ZJ)("neural-networks"),className:"text-sm text-primary hover:underline",children:"→ Neural Networks (the MLP foundation)"}),(0,a.jsx)("span",{className:"text-muted-foreground",children:"\xb7"}),(0,a.jsx)(o(),{href:(0,u.ZJ)("rag-llms"),className:"text-sm text-primary hover:underline",children:"→ RAG (multi-modal pgvector)"}),(0,a.jsx)("span",{className:"text-muted-foreground",children:"\xb7"}),(0,a.jsx)(o(),{href:(0,u.ZJ)("knowledge"),className:"text-sm text-primary hover:underline",children:"→ ADR-026 (hybrid vision architecture)"})]})]})}},53961:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});let a=(0,r(6404).A)("zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]])},60508:(e,t,r)=>{"use strict";r.d(t,{R:()=>b});var a=r(95155),n=r(12115),s=r(45160),i=r(89239),o=r(66349),d=r(85404),l=r(58381),c=r(79275),h=r(48368),m=r(22164),p=r(86901),u=r(89123),x=r(21628),f=r(98500),g=r.n(f),v=r(85757);function b({pageId:e}){let t=(0,c.C6)(e);return 0===t.length?null:(0,a.jsxs)(l.iv,{title:"Recent research (2023-2025)",description:"Modern papers that extend the math, code, and tools on this page.",icon:(0,a.jsx)(h.A,{className:"h-5 w-5"}),badge:`${t.length} paper${1===t.length?"":"s"}`,badgeVariant:"outline",contentClassName:"space-y-4",children:[t.map((e,t)=>(0,a.jsx)(j,{entry:e},t)),(0,a.jsxs)("p",{className:"text-[11px] text-muted-foreground italic",children:[t.length," paper",1===t.length?"":"s"," mapped to this page. Each shows the key algorithm + expected output (rendered as charts when the code produces JSON). Run the code in-browser via Pyodide."]})]})}function j({entry:e}){let[t,r]=(0,n.useState)(!1),[l,c]=(0,n.useState)(null);return(0,a.jsxs)("div",{className:"rounded-lg border border-border/60 p-4 space-y-3 hover:border-primary/30 transition-colors",children:[(0,a.jsxs)("div",{className:"space-y-1",children:[(0,a.jsxs)("div",{className:"flex items-start justify-between gap-3",children:[(0,a.jsx)("h4",{className:"text-sm font-semibold leading-tight flex-1",children:e.paperTitle}),(0,a.jsx)(s.E,{variant:"outline",className:"text-[10px] shrink-0",children:e.venue})]}),(0,a.jsxs)("p",{className:"text-[11px] text-muted-foreground",children:[e.authors," \xb7 ",e.year]}),e.arxivId&&(0,a.jsxs)("a",{href:`https://arxiv.org/abs/${e.arxivId}`,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-1 text-[11px] text-primary hover:underline",children:[(0,a.jsx)(m.A,{className:"h-3 w-3"}),"arXiv:",e.arxivId]}),e.doi&&!e.arxivId&&(0,a.jsxs)("a",{href:`https://doi.org/${e.doi}`,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-1 text-[11px] text-primary hover:underline",children:[(0,a.jsx)(m.A,{className:"h-3 w-3"}),"DOI:",e.doi]})]}),(0,a.jsx)("p",{className:"text-[12px] text-muted-foreground leading-relaxed",children:e.abstract}),(0,a.jsxs)(i.$,{variant:"outline",size:"sm",onClick:()=>r(!t),className:"h-7 text-[11px] gap-1.5",children:[(0,a.jsx)(p.A,{className:"h-3 w-3"}),t?"Hide expected code":"Show expected code + visualization"]}),t&&(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsx)(o.l,{code:e.expectedCode,buttonLabel:"Run in browser",onOutput:e=>{try{let t=e.indexOf("{"),r=e.lastIndexOf("}");if(t>=0&&r>t){let a=e.substring(t,r+1);c(JSON.parse(a))}}catch{}},hideTextOutput:!!l,compact:!0}),l?(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsxs)("div",{className:"flex items-center gap-1.5",children:[(0,a.jsx)(u.A,{className:"h-3.5 w-3.5 text-primary"}),(0,a.jsx)("p",{className:"text-[10px] uppercase tracking-wider text-muted-foreground",children:"Visualization (rendered from code output)"})]}),(0,a.jsx)(d.D,{data:l,accent:"oklch(0.65 0.18 250)",sourceCode:e.expectedCode})]}):(0,a.jsxs)("div",{className:"rounded-md border border-primary/20 bg-primary/5 p-2.5",children:[(0,a.jsx)("p",{className:"text-[10px] uppercase tracking-wider text-muted-foreground mb-1",children:"Expected output"}),(0,a.jsx)("pre",{className:"text-[11px] font-mono whitespace-pre-wrap leading-relaxed",children:e.expectedOutput})]}),(0,a.jsxs)("div",{className:"rounded-md border border-emerald-500/30 bg-emerald-500/5 p-2.5",children:[(0,a.jsx)("p",{className:"text-[10px] uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-1",children:"Key insight"}),(0,a.jsx)("p",{className:"text-[12px] text-foreground/80 leading-relaxed",children:e.keyInsight})]})]}),(0,a.jsxs)(g(),{href:(0,v.ZJ)("analytics-outputs"),className:"inline-flex items-center gap-1 text-[11px] text-primary hover:underline",children:["See this math visualized on Analytics Outputs ",(0,a.jsx)(x.A,{className:"h-3 w-3"})]})]})}},65576:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});let a=(0,r(6404).A)("cpu",[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]])},67635:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});let a=(0,r(6404).A)("copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]])},83036:(e,t,r)=>{"use strict";r.d(t,{P:()=>l,S:()=>c});var a=r(95155),n=r(98500),s=r.n(n),i=r(44071),o=r(97810),d=r(85757);function l({title:e,connectedTo:t,researchHref:r,children:n}){return(0,a.jsxs)("div",{className:"rounded-md border border-primary/30 bg-primary/5 p-4 space-y-2",children:[(0,a.jsxs)("div",{className:"flex items-start gap-2",children:[(0,a.jsx)(i.A,{className:"h-4 w-4 text-primary mt-0.5 shrink-0"}),(0,a.jsxs)("div",{className:"flex-1 min-w-0",children:[(0,a.jsx)("p",{className:"text-sm font-semibold text-foreground/90 leading-tight",children:e}),t&&(0,a.jsxs)("div",{className:"flex items-center gap-1.5 mt-1",children:[(0,a.jsx)(o.A,{className:"h-3 w-3 text-muted-foreground"}),(0,a.jsxs)(s(),{href:r??(0,d.ZJ)("research"),className:"text-[10px] text-muted-foreground hover:text-primary hover:underline",children:["Connected to: ",t," →"]})]})]})]}),(0,a.jsx)("div",{className:"text-xs text-muted-foreground leading-relaxed space-y-2 pl-6",children:n})]})}function c({pageTitle:e,children:t}){return(0,a.jsxs)("div",{className:"space-y-4",children:[(0,a.jsxs)("div",{className:"flex items-center gap-2 border-b border-border/60 pb-2",children:[(0,a.jsx)(i.A,{className:"h-5 w-5 text-primary"}),(0,a.jsxs)("h2",{className:"text-base font-bold text-foreground/90",children:["My deeper thoughts — ",e]})]}),(0,a.jsx)("p",{className:"text-xs text-muted-foreground italic leading-relaxed",children:"These are not summaries. They are arguments — the kind of connections a reader with serious grey matter would make after living with the material for years. Each thought connects to the platform's research section (ADRs, papers, decision records) so it's traceable, not just opinionated."}),(0,a.jsx)("div",{className:"space-y-3",children:t})]})}},86901:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});let a=(0,r(6404).A)("sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]])},88198:(e,t,r)=>{Promise.resolve().then(r.bind(r,39745))},90718:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});let a=(0,r(6404).A)("brain",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]])},94514:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});let a=(0,r(6404).A)("check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]])},97810:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});let a=(0,r(6404).A)("book-open",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]])}},e=>{e.O(0,[6919,8500,9430,3493,9760,7591,6012,9237,4843,9620,6722,5404,9275,2194,8441,3794,7358],()=>e(e.s=88198)),_N_E=e.O()}]);