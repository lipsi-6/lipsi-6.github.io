---
title: 求解一般的三次方程
date: 2024-01-16 21:17:00 +0800
categories: [草稿]
tags:
math: true
---

尽管抽象代数的学习已经结束,，而且不出意外的话应该成绩会很糟糕。不过，一学期过去，仍然不会解三次和四次方程着实说不过去——这是老师最后一节课讲过的内容。因此，这里我仍然要强制自己复盘一下，掏出本已打算不再翻开的《近世代数引论》，重读并用自己的语言记录下来如何求解一般的三次和四次方程。

实在看不下去，遂放弃。

---

还是回来写完吧。

设有三次方程 $f(x) = x^3 - t_{1}x^2 + t_{2}x - t_{3}\in\mathbb{F}[x]$（$\text{char }\mathbb{F} = 0$） ，又设 $f(x)$ 在分裂域上写成 $f(x) = (x-x_1)(x-x_2)(x-x_3)$ 的形式。作变量替换：

$$y_i = x_i - \frac{1}{3}t_1\quad(i = 1, 2, 3),$$

于是

$$\begin{align}
y_1 + y_2 + y_3 & = 0\tag{1}\\
y_1y_2 + y_2y_3 + y_3y_1 & = x_1x_2 + x_2x_3 + x_3x_1 - \frac{1}{3} t_1(x_1x_2 + x_2x_3 +x_3x_1) + \frac{1}{3} t_1^2\notag\\
& = t_2 - \frac{1}{3} t_1^2 \triangleq p\tag{2}\\
y_1y_2y_3 & = x_1x_2x_3 - \frac{t_1}{3}(x_1x_2 +x_2x_3 +x_3x_1) + \frac{1}{9}t_1^2(x_1 + x_2 + x_3) - \frac{1}{27}t_1^3\notag\\
& = t_3 - \frac{1}{3}t_1t_2 + \frac{2}{27}t_1^3 \triangleq -q\tag{3}
\end{align}$$

则 $g(y) = (y-y_1)(y-y_2)(y-y_3) = y^3 + py +q\in K[y]$，这里 $K = \mathbb{F}(t_1,t_2,t_3)$，于是 $g(y)$ 的判别式 $d = -4p^3 - 27q^2$ 。

又看不下去了，放弃。是我不配了(T_T)

---

决定不折磨自己了，直接把公式放上来。上述方程的解为：

$$
x_1 = \frac{1}{3}t_1 + \alpha + \beta,\notag\quad
x_2 = \frac{1}{3}t_1 + \omega^2\alpha + \omega\beta,\notag\quad
x_3 = \frac{1}{3}t_1 + \omega\alpha +\omega^2\beta,\notag
$$

这里

$$\begin{gather}
\alpha = \sqrt[3]{-\frac{q}{2} + \sqrt{\left(\frac{q}{2}\right)^2 + \left(\frac{p}{3}\right)^3}},\quad
\beta = \sqrt[3]{-\frac{q}{2} - \sqrt{\left(\frac{q}{2}\right)^2 + \left(\frac{p}{3}\right)^3}},\\
\alpha\beta = -\frac{p}{3}.
\end{gather}$$