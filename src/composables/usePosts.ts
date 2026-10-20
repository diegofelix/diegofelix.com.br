import type { Post, UpcomingPost } from '@/types/blog'
import postsMeta, { loaders, upcoming } from 'virtual:posts'

// Só o frontmatter vem no bundle principal; o conteúdo de cada post é carregado sob demanda
const posts: Post[] = postsMeta.map((meta) => ({
  frontmatter: meta,
  component: loaders[meta.file]!,
  slug: meta.slug,
}))

export interface PostGroup {
  category: string
  posts: Post[]
  upcoming: UpcomingPost[]
}

/** Posts agrupados por categoria, na ordem do post mais recente de cada uma */
const groups: PostGroup[] = []
for (const post of posts) {
  let group = groups.find((g) => g.category === post.frontmatter.category)
  if (!group) groups.push((group = { category: post.frontmatter.category, posts: [], upcoming: [] }))
  group.posts.push(post)
}
for (const item of upcoming) {
  let group = groups.find((g) => g.category === item.category)
  if (!group) groups.push((group = { category: item.category, posts: [], upcoming: [] }))
  group.upcoming.push(item)
}

export function usePosts() {
  const getPostBySlug = (slug: string): Post | undefined => {
    return posts.find((post) => post.slug === slug)
  }

  return {
    posts,
    groups,
    getPostBySlug,
  }
}
