---
title: 分布
date: 2024-02-12 11:53:00 +0800
categories:
tags:
math: true
---

### 二项分布
$n$ 次伯努利试验中正好出现 $k$ 次成功的概率为（$q=1-p$）

$$
b(k;n,p)=\binom{n}{k}p^kq^{n-k},\: k=0,1,\dots,n
$$

### 几何分布
伯努利试验首次成功出现在第 $k$ 次（$W_k=\bar A_1\bar A_2\cdots\bar A_{k-1}A_k$）的概率是

$$
\mathbb P(W_k)=\mathbb P(\bar A_1)\mathbb P(\bar A_2)\cdots\mathbb P(\bar A_{k-1})\mathbb P(A_k)=q^{k-1}p
$$

记

$$
g(k;p)=q^{1-k}p,\: k=0,1,\dots,n,\dots
$$

则 $g(k;p)$ 是几何级数的一般项，因此上述分布称为**几何分布**。易见

$$
\sum_{k=1}^{\infty}g(k;p)=\sum_{k=1}^{\infty}q^{k-1}p=p\cdot\frac{1}{1-q}=1
$$

### 帕斯卡分布
仍然考虑伯努利试验。若第 $r$ 次成功出现在第 $k$ 次试验（$C_k$），则必有 $k\geq r$。以 $f(k;r,p)$ 表示其概率，则 $C_k$ 发生当且仅当前 $k-1$ 次中有 $r-1$ 次成功，$k-r$ 次失败，且第 $k$ 次结果为成功。因此

$$
f(k;r,p)=\binom{k-1}{r-1}p^{r-1}q^{k-r}p=\binom{k-1}{r-1}p^{r}q^{k-r},\: k=r,r+1,\dots
$$

而

$$
\begin{align}
\sum_{k=r}^{+\infty}f(k;r,p)&=\sum_{k=r}^{+\infty}\binom{k-1}{r-1}p^{r}q^{k-r}\\&=p^{r}\sum_{k=r}^{+\infty}\binom{k-1}{r-1}q^{k-r}\\&=p^{r}\sum_{k=0}^{+\infty}\binom{r+k-1}{r-1}q^{k}\\&=p^{r}\sum_{k=0}^{+\infty}\binom{-r}{k}(-1)^{k}q^{k}\\&=p^{r}(1-q)^{-r}=1
\end{align}
$$

这里用到了推广的二项式系数公式。

<blockquote class="prompt-tip">
推广的二项式系数公式，指
<div style="text-align:center;">
$$
\begin{align}\binom{-a}{k}&=\frac{(-a)(-a-1)(-a-2)\cdots(-a-k+1)}{k!}\\&=(-1)^{k}\frac{(a+k-1)(a+k-1)\cdots a}{k!}\\&=(-1)^{k}\binom{a+k-1}{k}\end{align}
$$
</div>
</blockquote>

### 随机游动
#### 无限制的随机游动
设向右一格的概率为 $p$，向左一格的概率为 $q$，则时刻 $n$ 位于 $k$ 处的概率为（设 $k$ 为正整数）

$$
\mathbb P(S_n=k)=\binom{\frac{n}{2}}{\frac{n+k}{2}}p^{\frac{n+k}{2}}q^{\frac{n-k}{2}}
$$
