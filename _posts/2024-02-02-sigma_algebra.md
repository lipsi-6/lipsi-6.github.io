---
title: $\sigma$-代数
date: 2024-02-02 16:58:00 +0800
categories: [数学, 概率论]
tags: Applied_Probability
math: true
usepackage: 
---
为帮助看书时理解，我在这里放上书上对 $\sigma$-代数的介绍。

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

> 最小和最大的 $\sigma$-代数：平凡 $$\sigma$$-代数 $\{\varnothing,\Omega\}$ 和幂集 $\mathcal P(\Omega)$

---

### **生成 $\sigma$-代数**
对于 $\mathcal P(\Omega)$ 的子集 $\mathcal C$，$\mathcal C$ 生成的 $\sigma$-代数为包含 $\mathcal C$ 的最小的 $\sigma$-代数。即

$$
\mathcal F=\sigma(\mathcal C)\Longleftrightarrow
\begin{cases}
\mathcal F\text{ }\sigma\text{-algebra on }\Omega,\\
\mathcal C\subset\mathcal F,\\
\forall\mathcal F'\text{ }\sigma\text{-algebra on }\Omega,\text{ }\mathcal C\subset\mathcal F'\Rightarrow\mathcal F\subset\mathcal F'
\end{cases}
$$

<p>特别地，对于 $A\in\mathcal F$，$\sigma(A)=\{\varnothing,A,\overline A,\Omega\}$；而对于 $\mathcal C,\mathcal D\subset\mathcal P(\Omega)$，$$\sigma(\mathcal C\cup\mathcal D)=\sigma(\{C\cup D|C\in\mathcal C,D\in\mathcal D\})=\sigma(\{C\cap D|C\in\mathcal C,D\in\mathcal D\})$$，记为 $\sigma(C,D)$。</p>

> **定理**（Monotone Class）：如果一个 $\pi$-system $\mathcal A$ 包含在 $\lambda$-system $\mathcal C$ 中，则其生成 $\sigma$-代数 $\sigma(\mathcal A)$ 也包含在 $\mathcal C$ 中。

---

### **Borel $\sigma$-代数**
如果 $(\Omega,\mathcal O)$ 是一个拓扑空间，则 $\sigma(\mathcal O)$ 称为 $\Omega$ 的 Borel $\sigma$-代数，一般记作 $\mathcal B(\Omega)$。$\mathcal B(\Omega)$ 中的元素为 Borel 集。

以下考虑实数集上赋予的欧式拓扑 $(\mathcal R,\mathcal O)$，其中 $\mathcal O$ 为 $\mathbb R$ 上开集的集合。于是 $\mathcal B(\mathbb R)$ 为包含所有开集的最小的 $\sigma$-代数。此外，容易证明 $\mathcal B(\mathbb R)$ 还有如下的刻画：

$$
\begin{align}
&1.\mathcal B(\mathbb R)=\sigma(\{(x,y):(x,y)\in\mathbb R^2\}),\quad &2.\mathcal B(\mathbb R)=\sigma(\{(-\infty,x):x\in\mathbb R\}),\\
&3.\mathcal B(\mathbb R)=\sigma(\{(x,y]:(x,y)\in\mathbb R^2\}),\quad &4.\mathcal B(\mathbb R)=\sigma(\{(-\infty,x]:x\in\mathbb R\}).\\
\end{align}
$$

---

### **测度（Measures）**
> **定义**：测度空间 $(\Omega,\mathcal F)$，一个函数 $\mu:\mathcal F\to\overline R_+$ 被称为（正）测度，若 $\mu(\varnothing)=0$ 且
> <center>$$\mu\left(\bigcup_{n\geq 0}A_n\right)=\sum_{n\geq 0}\mu(A_n),\quad A_n\in\mathcal F,A_i\cap A_j=\varnothing,i\neq j$$</center>
> 第二条性质被称为“可数可加性公理”或 $\sigma$-可加性

在这里，我们只考虑正测度（简称为测度）。三元组 $(\Omega,\mathcal F,\mu)$ 称为测度空间。在不引起歧义的情况下，我们直接说 $\mu$ 为 $\Omega$ 上的一个测度，而不提及 $\Omega$ 上的 $\sigma$-代数。

> **命题**：可数可加性公理还可表述如下：\\
> 1.对于任意不交的集合 $A$ 和 $B$，
> <center>$$\mu(A\cup B)=\mu(A)\cup\mu(B)$$</center>
> 2.（可数次可加性公理）对于任意的可测集序列 $$\{A_n\}_{n\geq 0}$$，
> <center>$$\mu\left(\bigcup_{n\geq 0}A_n\right)\leq\sum_{n\geq 0}\mu(A_n)$$</center>

#### 测度的性质
* 若 $A\subset B$，则 $\mu(B)=\mu(B\backslash A)\cup\mu(A)$
* $\mu(A\cup B)=\mu(A)+\mu(B)-\mu(A\cap B)$

如果 $N\in\mathcal F$ 满足 $\mu(N)=0$，则称 $N$ 是 $\mu$-零的。此外，若 $N\in\mathcal P(\Omega), \exists A\in\mathcal F,\text{ s.t. }N\subset A$ 且 $\mu(A)=0$（即 $N$ 不一定在 $\sigma$-代数中，但包含在一个 $\sigma$-代数中的测度为零的集合中），那么也称 $N$ 是一个 $\mu$-零的。若每个 $\mu$-零的集合都是可测的集合，则测度 $\mu$ 称为完备的。

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

> **命题**（Monotone Class 的直接推论）：两个在 $\pi$-system $\mathcal A$ 上相同的测度在 $\mathcal A$ 的生成 $\sigma$-代数上也相同

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


---

~~似乎不用这种方式把书翻译一下就看不懂 hh~~
### **可测函数**
$\sigma$-代数之后，就是可测函数（Measurable Functions）的介绍了。
#### 映射
$f:\Omega\to\Omega'$ 是一个映射，对于 $A\subset\Omega$，$A$ 的像集 $$f(A)=\{\omega'\in\Omega':\exists\omega\in A,f(\omega)=\omega'\}$$；而对于 $A'\subset\Omega'$，$A'$ 的原像集 $$f^{-1}(A')=\{\omega\in\Omega:f(\omega)\in A'\}$$。自然地，有 $A\subset f^{-1}(f(A))$ 以及 $f(f^{-1}(A'))\subset A'$。进一步，对于任意指标集，$f^{-1}(\bigcup_{i\in I}A_i')=\bigcup_{i\in I}f^{-1}(A_i')$ 且 $f^{-1}(\bigcap_{i\in I}A_i')=\bigcap_{i\in I}f^{-1}(A_i')$。

#### 示性函数（Indicator Function）
集合 $A\subset\Omega$ 的示性函数定义为：

$$
\unicode{x1D7D9}_A(\omega)=
\begin{cases}
1\quad \text{if }\omega\in A,\\
0\quad \text{if }\omega\in \Omega\backslash A.
\end{cases}
$$

示性函数有如下的性质：

$$
\begin{array}{ll}
\bullet\:\unicode{x1D7D9}_{\overline A}=1-\unicode{x1D7D9}_A,\quad &\bullet\:\unicode{x1D7D9}_{A\cup B}=\unicode{x1D7D9}_A+\unicode{x1D7D9}_B-\unicode{x1D7D9}_{A\cap B}=\max(\unicode{x1D7D9}_A,\unicode{x1D7D9}_B),\\
\bullet\:\sigma(\unicode{x1D7D9}_A)=\sigma(A),\quad &\bullet\:\unicode{x1D7D9}_{A\cap B}=\unicode{x1D7D9}_A\times\unicode{x1D7D9}_B=\min(\unicode{x1D7D9}_A,\unicode{x1D7D9}_B).\\
\end{array}
$$

> **定义**：如果一个函数 $f$ 满足 $$f=\sum_{i=1}^n\alpha_i\unicode{x1D7D9}_{A_i}$$，这里 $$\alpha_i\in\mathbb R$$ 且 $$A_i\in\mathcal P(\Omega)$$，$$\bigcup_{i=1}^n A_i=\Omega$$，则被称为**初等函数**（elemantary function）或**阶梯函数**（step function ）。

如果限定 $i\neq j$ 时，$A_i\cap A_j=\varnothing$，且 $\alpha_i\neq\alpha_j$，则这种加法分解是唯一的。

> **定理 - 定义**：令 $\Omega$ 为一个集合，$(\Omega',\mathcal F')$ 为一个可测空间，$f:\Omega\to\Omega'$ 为一个映射，则集合 $f^{-1}(\mathcal F')$ 为 $\Omega$ 上的一个 $\sigma$-代数，称为由 $f$ 生成的 $\sigma$-代数，记作 $\sigma(f)$。也即
> <center>$$\sigma(f)=\{A\in\mathcal P(\Omega):\exists A'\in\mathcal F'\text{ s.t. }A=f^{-1}(A')\}.$$</center>
>
> 证明：
> * $\Omega=f^{-1}(\Omega')\Longrightarrow\Omega\in\sigma(f)$
> * $A\in\sigma(f)\Longrightarrow\exists A'\in\mathcal F',A=f^{-1}(A')$，于是
>   <center>$$\Omega=f^{-1}(A'\cup\overline{A'})=f^{-1}(A')\cup f^{-1}(\overline{A'})=A\cup f^{-1}(\overline{A'}).$$</center>
>   由于 $A\cap f^{-1}(\overline{A'})=\varnothing$，所以 $\overline A=f^{-1}(\overline{A'})\in\sigma(f)$。
> * 若 $$\{A_n'\}_{n\geq 0}$$ 是一列 $\mathcal F'$ 的元素，则 $\bigcup_{n\geq 0}f^{-1}(A_n')=f^{-1}(\bigcup_{n\geq 0}A_n')\in f^{-1}(\mathcal F')$。

类似地，若 $\{f_i:i\in I\}$ 是一个从 $\Omega$ 到可测空间 $(\Omega_i',\mathcal F_i')$ 的映射集合，则由 $\bigcup_{i\in I}f_i^{-1}(\mathcal F_i')$ 生成的 $\sigma$-代数称为由这个映射集合生成的 $\sigma$-代数，记作 $\sigma(f_i,i\in I)$。

> **定义**：令 $(\Omega,\mathcal F)$ 和 $(\Omega',\mathcal F')$ 为两个可测空间，映射 $f:\Omega\to\Omega'$ 称为 $(\mathcal F,\mathcal F')$-可测的（或 $\mathcal F$-可测的），若 $\sigma(f)\subset\mathcal F$。当 $(\Omega',\mathcal F')=(\mathbb R^d,\mathcal B(\mathbb R^d))$ 时，可测映射称为 Borel 映射。

等价地说， $f$ 是可测的，当且仅当 $\forall A'\in\mathcal F'$，$f^{-1}(A')\in\mathcal F$。  
任何映射关于 $\sigma$-代数 $\mathcal P(\Omega)$ 都是可测的，而关于 $\sigma$-代数 $$\{\Omega,\varnothing\}$$ 可测的映射只有常映射。

<blockquote class="prompt-info">
<p>集合 $f^{-1}(A')$ 一般记作 $(f\in A')$。<br>类似地，$f^{-1}(\{\omega'\})=(f=\omega')$；对于 $(\Omega',\mathcal F')=(\mathbb R,\mathcal B(\mathbb R))$，我们有 $(f\in[a,b])=(a\leq f\leq b)$ 和 $(f\in dx)=(x\leq f\leq x+dx)$。</p>
</blockquote>

如果 $\mathcal C'$ 是 $\Omega'$ 的子集族，则 $\sigma(f^{-1}(\mathcal C'))=f^{-1}(\sigma(\mathcal C'))$。因此，如果 $\mathcal F'=\sigma(\mathcal C')$，则 $f:\Omega\to\Omega'$ 是 $(\mathcal F,\mathcal F')$-可测的当且仅当 $f^{-1}(\mathcal C')\subset\mathcal F$。据此，$f:\Omega\to\mathbb R$ 为 Borel 映射，如果 $(f\geq x)\in\mathcal F$，$\forall x$。

> 如果 $A\subset\Omega$ 属于 $\sigma$-代数 $\mathcal F$，那么 $A$ 的示性函数为一个 Borel 函数。

#### 可测映射的性质
* 可测映射的复合仍是可测映射
* Borel 函数的绝对值仍是 Borel 函数
* 所有有限值 Borel 函数是 $\mathbb R$-线性空间
* 两个 Borel 函数的乘积、商（若良定）、max、min 是 Borel 函数
* Borel 函数列的上极限、下极限是 Borel 函数（若有界）
* 所有单增的 / 连续的实值函数均为 Borel 函数
* 所有定义在有限集合上的 Borel 函数都是阶梯函数。反过来，阶梯函数 $f=\sum_{i=1}^n \alpha_i\unicode{x1D7D9}_{A_i}$ 为 Borel 函数当且仅当 $A_i\in\mathcal F$，此时 $\sigma(f)=\sigma(A_1,\dots,A_n)$。

> **定理**：
> * 任何 Borel 函数都是两个非负 Borel 函数的差
> * 任何非负 Borel 函数都是单调增加的阶梯函数序列的极限
>
> 证明：
> * <p>令 $f^+=\max(f,0)=f\unicode{x1D7D9}_{(f\geq 0)}$ 为 $f$ 的正部， $f^-=\max(-f,0)=-f\unicode{x1D7D9}_{(f\leq 0)}$ 为 $f$ 的负部。则 $f^+$ 和 $f^-$ 都是 Borel 函数且 $f=f^+-f^-$。<p>
> * 令
>   <center>$$f_n=n\unicode{x1D7D9}_{(f\geq n)}+\sum_{k=0}^{n2^n-1}\frac{k}{2^n}\unicode{x1D7D9}_{({k}/{2^n}\leq f\leq {(k+1)}/{2^n})}.$$</center>
>   则 $f_n$ 是阶梯函数，且是单调增加的。  
>   对于 $\omega\in\Omega$，由于 $f$ 是有限的，故存在 $n$ 充分大，$f\leq n$。故存在 $$k_0\in\{0,1,\dots,n2^n-1\}$$ 使得 $k_0/{2^n}\leq f(\omega)<(k+1)/{2^n}$，从而 $|f_n(\omega)-f(\omega)|<1/2^n$，因此序列 $$\{f_n\}$$ 收敛到 $f$。
