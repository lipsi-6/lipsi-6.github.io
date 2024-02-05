---
title: $\sigma$-代数
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
* 若 $A \in\mathcal A$，则 $\Omega \backslash A=\overline A\in \mathcal A$
* 若 $A, B\in\mathcal A$，则 $A\cap B\in\mathcal A$

进一步，如果 $\Omega\in\mathcal A$，则 $\mathcal A$ 称为一个“代数”或“布尔域（Boolean field）”

#### $\lambda$-system / monotone class
$\mathcal C$ 是 $\Omega$ 的子集族，首先 $\Omega\in\mathcal C$，其次 $\mathcal C$ 中单调集合序列可以取极限。即若 $$\{A_n\}_{n\geq 0}$$ 是一个不减的（或不增的）集合序列，则 $$\bigcup_{n\geq 0}A_n\in\mathcal C$$（或 $$\bigcap_{n\geq 0} A_n\in\mathcal C$$）。

#### $\sigma$-algebra / $\sigma$-field
$\mathcal F$ 是 $\Omega$ 的子集族，在取补和有限并的操作下封闭，即
* $\Omega\in\mathcal F$
* 若 $A\in\mathcal F$，则 $\overline A\in\mathcal F$
* 若 $A_n\in\mathcal F(\forall n\in\mathbb N)$，则 $\bigcup_{n\geq 0}A_n\in\mathcal F$
这里，二元组 $(\Omega,\mathcal F)$ 被称为“可测空间”（Measurable Space），而 $\mathcal F$ 中的元素为“可测集”，在概率论中称为“事件”（event）。

> 最小和最大的 $\sigma$ 代数：平凡 $$\sigma$$ 代数 $\{\varnothing,\Omega\}$ 和幂集 $\mathcal P(\Omega)$

---

### **生成 $\sigma$-代数**
对于 $\mathcal P(\Omega)$ 的子集 $\mathcal C$，$\mathcal C$ 生成的 $\sigma$ 代数为包含 $\mathcal C$ 的最小的 $\sigma$ 代数。即

$$
\mathcal F=\sigma(\mathcal C)\Longleftrightarrow
\begin{cases}
\mathcal F\text{ }\sigma\text{-algebra on }\Omega,\\
\mathcal C\subset\mathcal F,\\
\forall\mathcal F'\text{ }\sigma\text{-algebra on }\Omega,\text{ }\mathcal C\subset\mathcal F'\Rightarrow\mathcal F\subset\mathcal F'
\end{cases}
$$

特别地，对于 $A\in\mathcal F$，$\sigma(A)=\{\varnothing,A,\overline A,\Omega\}$；而对于 $\mathcal C,\mathcal D\subset\mathcal P(\Omega)$， 

$$\sigma(\mathcal C\cup\mathcal D)=\sigma(\{C\cup D|C\in\mathcal C,D\in\mathcal D\})=\sigma(\{C\cap D|C\in\mathcal C,D\in\mathcal D\}),$$

记为 $\sigma(C,D)$。

> 定理（Monotone Class）：如果一个 $\pi$-system $\mathcal A$ 包含在 $\lambda$-system $\mathcal C$ 中，则其生成 $\sigma$-代数 $\sigma(\mathcal A)$ 也包含在 $\mathcal C$ 中。

---

### **Borel $\sigma$-代数**
如果 $(\Omega,\mathcal O)$ 是一个拓扑空间，则 $\sigma(\mathcal O)$ 称为 $\Omega$ 的 Borel $\sigma$-代数，一般记作 $\mathcal B(\Omega)$。$\mathcal B(\Omega)$ 中的元素为 Borel 集。

以下考虑实数集上赋予的欧式拓扑 $(\mathcal R,\mathcal O)$，其中 $\mathcal O$ 为 $\mathbb R$ 上开集的集合。于是 $\mathcal B(\mathbb R)$ 为包含所有开集的最小的 $\sigma$ 代数。此外，容易证明 $\mathcal B(\mathbb R)$ 还有如下的刻画：

$$
\begin{align}
&1.\mathcal B(\mathbb R)=\sigma(\{(x,y):(x,y)\in\mathbb R^2\}),\quad &2.\mathcal B(\mathbb R)=\sigma(\{(-\infty,x):x\in\mathbb R\}),\\
&3.\mathcal B(\mathbb R)=\sigma(\{(x,y]:(x,y)\in\mathbb R^2\}),\quad &4.\mathcal B(\mathbb R)=\sigma(\{(-\infty,x]:x\in\mathbb R\}).\\
\end{align}
$$

---

### **测度（Measures）**
> 定义：测度空间 $(\Omega,\mathcal F)$，一个函数 $\mu:\mathcal F\to\overline R_+$ 被称为（正）测度，若 $\mu(\varnothing)=0$ 且
> <center>$$\mu\left(\bigcup_{n\geq 0}A_n\right)=\sum_{n\geq 0}\mu(A_n),\quad A_n\in\mathcal F,A_i\cap A_j=\varnothing,i\neq j$$</center>
> 第二条性质被称为“可数可加性公理”或 $\sigma$-可加性

在这里，我们只考虑正测度（简称为测度）。三元组 $(\Omega,\mathcal F,\mu)$ 称为测度空间。在不引起歧义的情况下，我们直接说 $\mu$ 为 $\Omega$ 上的一个测度，而不提及 $\Omega$ 上的 $\sigma$-代数。

> 命题：可数可加性公理还可表述如下：
>
> 1.对于任意不交的集合 $A$ 和 $B$，
> <center>$$\mu(A\cup B)=\mu(A)\cup\mu(B)$$</center>
> 2.（可数次可加性公理）对于任意的可测集序列 $$\{A_n\}_{n\geq 0}$$，
> <center>$$\mu\left(\bigcup_{n\geq 0}A_n\right)\leq\sum_{n\geq 0}\mu(A_n)$$</center>

#### 测度的性质
* 若 $A\subset B$，则 $\mu(B)=\mu(B\backslash A)\cup\mu(A)$
* $\mu(A\cup B)=\mu(A)+\mu(B)-\mu(A\cap B)$

如果 $N\in\mathcal F$ 满足 $\mu(N)=0$，则称 $N$ 是 $\mu$-零的。此外，若 $N\in\mathcal P(\Omega), \exists A\in\mathcal F, \mathrm{s.t.} N\subset A$ 且 $\mu(A)=0$（即 $N$ 不一定在 $\sigma$-代数中，但包含在一个 $\sigma$-代数中的测度为零的集合中），那么也称 $N$ 是一个 $\mu$-零的。若每个 $\mu$-零的集合都是可测的集合，则测度 $\mu$ 称为完备的。

#### *“几乎处处”*
令 $(\Omega,\mathcal F,\mu)$ 为任意一个测度空间，令 $(P)$ 为一条关于 $\Omega$ 中元素的性质，如果 $(P)$ 对一个零测度集外的元素都成立，则称 $(P)$ 几乎处处成立。

#### *支撑集* 
如果 $S\subset \Omega$ 且 $\mu(\omega)\neq 0$ 当且仅当 $\omega\in S$，则称 $S$ 为 $\Omega$ 的支撑集。

#### *同构*
两个测度空间 $(\Omega,\mathcal F,\mu)$ 和 $(\Omega',\mathcal F',\mu')$ 称为同构的，若存在一个零测度集 $N\in\mathcal F$ 和一个双射 $\varphi:\Omega\backslash N\rightarrow\Omega'$，使得对所有满足 $A\cap N=\varnothing$ 的 $A\in\mathcal F$，均有 $\mu(A)=\mu'(\varphi(A))$。

#### 定义：测度空间 $(\Omega,\mathcal F)$ 上的测度 $\mu$ 称为：
1.连续的，若对任意的 $\omega\in\Omega$，有 $$\{\omega\}\in\mathcal F$$，且 $$\mu(\{\omega\})=0$$  
2.离散的，若对于某个至多可数的可测集 $S\in\mathcal F$，有 $\mu(\Omega\backslash S)=0$  
3.算数的，若 $(\Omega,\mathcal F)=(\mathbb R_+,\mathcal B(\mathbb R_+))$，且对于 $$x\notin\{x_0+n\delta:n\in\mathbb N\}$$（$x_0\in\mathbb R_+$ 固定）， $$\mu(\{x_0\})=0$$，常数 $\delta\in\mathbb R_+^*$ 称为 $\mu$ 的间距  
4.$\varSigma$-有限的，若存在一个可数的 $\Omega$ 的分划 $$\{A_n\}$$ 使得 $\mu(A_n)<+\infty, \forall n$  
5.有限的，或有界的，若 $\mu(\Omega)<+\infty$

> 命题（Monotone Class 的直接推论）：两个在 $\pi$-system $\mathcal A$ 上相同的测度在 $\mathcal A$ 的生成 $\sigma$-代数上也相同

### **常见测度**

#### *Dirac 测度*
对于任意的 $\omega\in\Omega$，集中在 $\omega$ 上的 Dirac 测度是 $(\Omega,\mathcal F)$ 上的离散有限测度，记作 $\delta_{\omega}$，其定义为

$$
\delta_{\omega}(A)=
\begin{cases}
1,\quad \text{if }\omega\in A,\\
0,\quad \text{otherwise}.
\end{cases}
$$

当 $A$ 和 $\omega$ 都固定时，$\delta_{\omega}(A)=\unicode{x1D7D9}_A(\omega)$。

#### *计数测度（Counting Measure）*
可数的测度空间 $(\Omega,\mathcal F)$ 上的计数测度 $\mu$ 定义为

$$
\mu(A)=\sum_{\omega\in\Omega}\delta_{\omega}(A),\,\forall A\in\mathcal F,
$$

也就是该测度取值为 $\overline{\mathbb N}$（也就是包含无穷）。而如果 $\Omega$ 是有限集，则该测度是有限的。

#### *Lebesgue 测度*
