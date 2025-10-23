---
layout: page
title: 主题域
icon: fa-solid fa-book
order: 3
---

<ul>
  {% for domain in site.data.taxonomy.domains %}
    <li>
      <a href="{{ '/categories/' | append: (domain | url_encode) | append: '/' | relative_url }}">{{ domain }}</a>
    </li>
  {% endfor %}
  {% if site.data.taxonomy.domains == nil or site.data.taxonomy.domains == empty %}
    <li>暂无主题域，请在 <code>_data/taxonomy.yml</code> 中配置。</li>
  {% endif %}
</ul>


