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

> 最小和最大的 $\sigma$ 代数：平凡 $$\sigma$$ 代数 $\{\varnothing,\Omega\}$ 和幂集 $\mathcal P(\Omega)$

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

> 定理（Monotone Class）：如果一个 $\pi$-system $\mathcal A$ 包含在 $\lambda$-system $\mathcal C$ 中，则其生成 $\sigma$-代数 $\sigma(\mathcal A)$ 也包含在 $\mathcal C$ 中。

---

### Borel $\sigma$-代数
如果 $(\Omega,\mathcal O)$ 是一个拓扑空间，则 $\sigma(\mathcal O)$ 称为 $\Omega$ 的 Borel $\sigma$-代数，一般记作 $\mathcal B(\Omega)$。$\mathcal B(\Omega)$ 中的元素为 Borel 集。

以下考虑实数集上赋予的欧式拓扑 $(\mathcal R,\mathcal O)$，其中 $\mathcal O$ 为 $\mathbb R$ 上开集的集合。于是 $\mathcal B(\mathbb R)$ 为包含所有开集的最小的 $\sigma$ 代数。此外，容易证明 $\mathcal B(\mathbb R)$ 还有如下的刻画：

$$
\begin{align}
&1.\mathcal B(\mathbb R)=\sigma(\{(x,y):(x,y)\in\mathbb R^2\}),\quad &2.\mathcal B(\mathbb R)=\sigma(\{(-\infty,x):x\in\mathbb R\}),\\
&3.\mathcal B(\mathbb R)=\sigma(\{(x,y]:(x,y)\in\mathbb R^2\}),\quad &4.\mathcal B(\mathbb R)=\sigma(\{(-\infty,x]:x\in\mathbb R\}).\\
\end{align}
$$

---

### 测度（Measures）
> 定义：测度空间 $(\Omega,\mathcal F)$，一个函数 $\mu:\mathcal F\to\bar R_+$ 被称为（正）测度，若 $\mu(\varnothing)=0$ 且
> <center>$$\mu\left(\bigcup_{n\geq 0}A_n\right)=\sum_{n\geq 0}\mu(A_n),\quad A_n\in\mathcal F,A_i\cap A_j=\varnothing,i\neq j$$</center>
> 第二条性质被称为“可数可加性公理”或 $\sigma$-可加性

在这里，我们只考虑正测度（简称为测度）。三元组 $(\Omega,\mathcal F,\mu)$ 称为测度空间。在不引起歧义的情况下，我们直接说 $\mu$ 为 $\Omega$ 上的一个测度，而不提及 $\Omega$ 上的 $\sigma$-代数。

> 命题：可数可加性公理还可表述如下：
> 1.对于任意不交的集合 $A$ 和 $B$，
> <center>$$\mu(A\cup B)=\mu(A)\cup\mu(B)$$</center>
> 2.（可数次可加性公理）对于任意的可测集序列 $$\{A_n\}_{n\geq 0}$$，
> <center>$$\mu\left(\bigcup_{n\geq 0}A_n\right)\geq\sum_{n\geq 0}\mu(A_n)$$</center>

### 测度的性质
* 若 $A\subset B$，则 $\mu(B)=\mu(B\backslash A)\cup\mu(A)$
* $\mu(A\cup B)=\mu(A)+\mu(B)-\mu(A\cap B)$

如果 $N\in\mathcal F$ 满足 $\mu(N)=0$，则称 $N$ 是 $\mu$-零的。此外，若 $N\in\mathcal P(\Omega), \exists A\in\mathcal F, s.t. N\subset A$ 且 $\mu(A)=0$（即 $N$ 不一定在 $\sigma$-代数中，但包含在一个 $\sigma$-代数中的测度为零的集合中），那么也称 $N$ 是一个 $\mu$-零的。一个测度 $\mu$ 称为完备的，若每个 $\mu$-零的集合都是可测的集合。

### “几乎处处”  
令 $(\Omega,\mathcal F,\mu)$ 为任意一个测度空间，令 $(P)$ 为一条关于 $\Omega$ 中元素的性质，如果 $(P)$ 对一个零测度集外的元素都成立，则称 $(P)$ 几乎处处成立。

### 支撑集 
如果 $S\subset \Omega$ 且 $\mu(\epsilon)$