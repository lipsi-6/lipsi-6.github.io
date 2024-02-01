---
title: 有趣的问题
date: 2024-02-01 21:23:00 +0800
categories: [数学, 概率论]
tags: Applied_Probability
author: lipsi
math: true
---
## **Laplace's Rule of Succession**
有 $N+1$ 个盒子, 标号为 $0,1,\dots,N$, 每个盒子里都有 $N$ 个球, 第 $i$ 个盒子里有 $i$ 个白球.

现在*随机*选取一个盒子, 从中有放回地取出 $n+1$ 个球, 则“前 $n$ 个球都是白球” ($A_n$)的概率是

$$\mathbb P(A_n)=\sum_{k=0}^{N}\frac{1}{N+1}\left(\frac{k}{N}\right)^{n}.\tag{1}$$

于是, 若已知前 $n$ 个球都是白球($A_n$), 则“第 $n+1$ 个球也是白球” ($B_{n+1}$)的概率是

$$\mathbb P(B_{n+1}|A_n)=\frac{\mathbb{P}(A_n\cap B_{n+1})}{\mathbb{P}(A_n)}=\frac{\mathbb{P}(A_{n+1})}{\mathbb{P}(A_{n})}=\frac{\displaystyle \sum_{k=0}^{N}k^{n+1}}{\displaystyle N\sum_{k=0}^{N}k^n}.\tag{2}$$

在 $N\to +\infty$ 时, 我们考虑如下的问题：

一个事件, 我们不知道其概率. 在 $n+1$ 次独立重复试验中, 已知前 $n$ 次试验中该事件都发生, 则第 $n+1$ 次试验中, 该事件发生的概率是什么. 这个问题可用上述模型解决: 实际上, 由于该事件概率的可能取值是 $[0,1]$ 中的全体实数, 在 $N$ 充分大时, 可以认为该事件的概率取值为 $0/N,1/N,\dots,N/N$, 即对应上述模型中第 $0\sim N$ 个盒子中取出白球的概率. 于是, 第 $n+1$ 次试验中该事件发生的概率为

$$
\begin{align}
\lim_{N\to +\infty}\frac{\mathbb P(A_{n+1})}{\mathbb P(A_n)}
& =\lim_{N\to +\infty}\frac{\displaystyle\frac{1}{N+1}\sum_{k=0}^{N}\left(\frac{k}{N}\right)^{n+1}}{\displaystyle\frac{1}{N+1}\sum_{k=0}^{N}\left(\frac{k}{N}\right)^{n}}
=\lim_{N\to +\infty}\frac{\displaystyle\frac{1}{N}\sum_{k=0}^{N}\left(\frac{k}{N}\right)^{n+1}}{\displaystyle\frac{1}{N}\sum_{k=0}^{N}\left(\frac{k}{N}\right)^{n}}\\
& =\frac{\displaystyle\int_0^1 x^{n+1}\,\mathrm dx}{\displaystyle\int_0^1 x^{n}\,\mathrm dx}
=\frac{n+1}{n+2}.
\end{align}
$$

书中给出的实际解释很有趣: 如果太阳连续 $n$ 天都升起, 那么第 $n+1$ 天太阳仍然升起的概率为 $\displaystyle\frac{n+1}{n+2}$.

---

