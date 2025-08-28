---
layout: page
icon: fa-solid fa-tools
order: 6
---

<div class="tool-container">
  <h2>网页小工具集合</h2>
  <p>这里收集了一些实用的网页小工具</p>
  
  <div class="tools-grid">
    <div class="tool-card">
      <h3>字符试验田</h3>
      <p>一个用于字符处理和测试的工具</p>
      <a href="/tools/char-playground/" class="btn btn-primary">打开工具</a>
    </div>
    
    <div class="tool-card">
      <h3>简易计算器</h3>
      <p>基础的数学计算工具</p>
      <a href="/test/calculator/" class="btn btn-primary">打开工具</a>
    </div>
  </div>
</div>

<style>
.tool-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.tools-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 30px;
}

.tool-card {
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 20px;
  background: var(--card-bg);
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: transform 0.2s ease;
}

.tool-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.15);
}

.tool-card h3 {
  margin-top: 0;
  color: var(--heading-color);
}

.tool-card p {
  color: var(--text-muted);
  margin-bottom: 15px;
}

.btn {
  display: inline-block;
  padding: 8px 16px;
  background: var(--btn-bg);
  color: var(--btn-text);
  text-decoration: none;
  border-radius: 4px;
  transition: background 0.2s ease;
}

.btn:hover {
  background: var(--btn-bg-hover);
  text-decoration: none;
}

.btn-primary {
  background: #007bff;
  color: white;
}

.btn-primary:hover {
  background: #0056b3;
}
</style>
