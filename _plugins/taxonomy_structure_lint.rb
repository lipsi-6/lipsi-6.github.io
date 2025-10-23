Jekyll::Hooks.register :posts, :pre_render do |post|
  taxonomy = post.site.data['taxonomy'] || {}
  forms = Array(taxonomy['forms']).map(&:to_s)
  domains = Array(taxonomy['domains']).map(&:to_s)

  cats = Array(post.data['categories']).map(&:to_s)

  if cats.empty?
    Jekyll.logger.warn "Taxonomy", "#{post.path}: 未设置 categories"
    next
  end

  if cats.size > 2
    Jekyll.logger.warn "Taxonomy", "#{post.path}: categories 多于 2 个 (#{cats.size})"
  end

  first = cats[0]
  unless forms.include?(first)
    Jekyll.logger.warn "Taxonomy", "#{post.path}: 一级分类不在 forms 白名单内：#{first}"
  end

  if cats.size >= 2
    second = cats[1]
    unless domains.include?(second)
      Jekyll.logger.warn "Taxonomy", "#{post.path}: 二级分类不在 domains 白名单内：#{second}"
    end
  end
end


