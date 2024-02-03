---
title: $\sigma$ 代数
date: 2024-02-02 16:58:00 +0800
categories: [数学, 概率论]
tags: Applied_Probability
math: true
usepackage: 
---
为帮助看书时理解，我在这里放上书上对 $\sigma$ 代数的介绍。

记号：
* 样本空间（Sample Space） $\Omega$
* 样本空间的一个子集族，一般用花体，比如 $\mathcal A, \mathcal F$

对于这种子集族，有如下几种类型：
#### $\pi$-system
$\mathcal A$ 是 $\Omega$ 的子集族，在取补和有限交的操作下封闭，即
* 若 $A \in\mathcal A$，则 $\Omega \backslash A=\bar A\in \mathcal A$
* 若 $A, B\in\mathcal A$，则 $A\cap B\in\mathcal A$

进一步，如果 $\Omega\in\mathcal A$，则 $\mathcal A$ 称为一个“代数”或“布尔域（Boolean field）”

#### $\lambda$-system / monotone class
$\mathcal C$ 是 $\Omega$ 的子集族，首先 $\Omega\in\mathcal C$，其次 $\mathcal C$ 中单调集合序列可以取极限。即若 $$\{A_n\}_{n\geq 0}$$ 是一个不减的（或不增的）集合序列，则 $$\bigcup_{n\geq 0}A_n\in\mathcal C$$（或 $$\bigcap_{n\geq 0} A_n\in\mathcal C$$）。

#### $\sigma$-algebra / $\sigma$-field
$\mathcal F$ 是 $\Omega$ 的子集族，在取补和有限并的操作下封闭，即
* $\Omega\in\mathcal F$
* 若 $A\in\mathcal F$，则 $\bar A\in\mathcal F$
* 若 $A_n\in\mathcal F(\forall n\in\mathbb N)$，则 $\bigcup_{n\geq 0}A_n\in\mathcal F$
这里，二元组 $(\Omega,\mathcal F)$ 被称为“可测空间”（Measurable Space），而 $\mathcal F$ 中的元素为“可测集”，在概率论中称为“事件”（event）。

> 最小和最大的 $\sigma$ 代数：平凡 $\sigma$ 代数 $\{\varnothing,\Omega\}$ 和幂集 $\mathcal P(\Omega)$

---

### 生成 $\sigma$ 代数
对于 $\mathcal P(\Omega)$ 的子集 $\mathcal C$，$\mathcal C$ 生成的 $\sigma$ 代数为包含 $\mathcal C$ 的最小的 $\sigma$ 代数。即

$$
\mathcal F=\sigma(\mathcal C)\Longleftrightarrow
\begin{cases}
\mathcal F\text{ }\sigma\text{-algebra on }\Omega,\\
\mathcal C\subset\mathcal F,\\
\forall\mathcal F'\text{ }\sigma\text{-algebra on }\Omega,\text{ }\mathcal C\subset\mathcal F'\Rightarrow\mathcal F\subset\mathcal F'
\end{cases}
$$

特别地，对于 $A\in\mathcal F$，$\sigma(A)=\{\varnothing,A,\bar A,\Omega\}$；而对于 $\mathcal C,\mathcal D\subset\mathcal P(\Omega)$, 

$$\sigma(\mathcal C\cup\mathcal D)=\sigma(\{C\cup D|C\in\mathcal C,D\in\mathcal D\})=\sigma(\{C\cap D|C\in\mathcal C,D\in\mathcal D\}) $$

，记为 $\sigma(C,D)$。