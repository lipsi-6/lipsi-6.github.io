---
title: 机器学习数学导引
author: lipsi
date: 2024-09-14 18:54:00 +0800
math: true
---
## generative error = appr.error + esti.error  
$f^{*}-f_{\hat\theta_n}=f^{*}-f_{\theta_{*}}+f_{\theta_{*}}-f_{\hat\theta_n}$

怎么预测? 从分片常数到 $K$-近邻算法.

但如果仍使用 $K$-近邻算法, 在高维时出现维数灾难. 例如, 二维里分成若干小方格, 每个小方格中的点用该方格左下角的点的值预测. 计算误差. 多维中, $n=\left(\frac{1}{h}\right)^d$

出现维数灾难, $\varepsilon_n\leq\left(\frac{1}{n}\right)^{\frac{1}{d}}$. 也就是 维数越高, 越困难. 只要是用附近的点来预测 (求平均等), 一定会出现维数灾难.

Ridge: $\frac{1}{2n}\|X\beta-Y\|^2+\frac{\lambda}{2}\|\beta\|^2$, $L^2$ 正则化

将 $\|\beta\|^2$ 换成 $\beta^T W\beta$

Lasso: $\frac{1}{2n}\|X\beta-Y\|^2+\lambda\|\beta\|_1$, $L^1$ 正则化. 要求 "稀疏性", 即 $\|\beta^{*}\|_{o}\ll d$, 其中 $\|\beta\|_{o}:=\#\{j:\|\beta_{j}\|>0\}$