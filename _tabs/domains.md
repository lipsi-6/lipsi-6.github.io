---
layout: page
title: 主题域
icon: fa-solid fa-book
order: 3
---

<ul>
  {% assign allowed_domains = site.data.taxonomy.domains | default: empty %}
  {% assign base = site.baseurl | default: '' %}
  {% assign found = 0 %}
  {% for pair in site.categories %}
    {% assign name = pair[0] %}
    {% if allowed_domains contains name %}
      {% assign found = found | plus: 1 %}
      {% assign slug = name | url_encode %}
      <li><a href="{{ base }}/categories/{{ slug }}/">{{ name }}</a></li>
    {% endif %}
  {% endfor %}
  {% if found == 0 %}
    <li>暂无主题域文章。可在 <code>_data/taxonomy.yml</code> 配置 domains，并为文章设置二级分类。</li>
  {% endif %}
</ul>


