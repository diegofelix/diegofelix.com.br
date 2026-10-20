import type { Post } from '@/types/blog'
import postsMeta, { loaders } from 'virtual:posts'

// Só o frontmatter vem no bundle principal; o conteúdo de cada post é carregado sob demanda
const posts: Post[] = postsMeta.map((meta) => ({
  frontmatter: meta,
  component: loaders[meta.file]!,
  slug: meta.slug,
}))

export function usePosts() {
  const getPostBySlug = (slug: string): Post | undefined => {
    return posts.find((post) => post.slug === slug)
  }

  return {
    posts,
    getPostBySlug,
  }
}
