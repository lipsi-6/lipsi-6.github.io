Jekyll::Hooks.register :posts, :pre_render do |post|
  taxonomy = post.site.data['taxonomy'] || {}
  domains = Array(taxonomy['domains']).map(&:to_s)
  tags = Array(post.data['tags']).map(&:to_s)
  dup = tags & domains
  unless dup.empty?
    Jekyll.logger.warn "Taxonomy", "#{post.path}: tags 与 domains 重复：#{dup.join(', ')}"
  end
end


