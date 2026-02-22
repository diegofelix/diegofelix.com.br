import type { Post, PostFrontmatter } from '@/types/blog'

// O plugin unplugin-vue-markdown expõe as propriedades do frontmatter diretamente no módulo
const postModules = import.meta.glob<PostFrontmatter & { default: unknown }>(
  '../content/posts/*.md',
  { eager: true }
)

const postComponents = import.meta.glob('../content/posts/*.md')

export function usePosts() {
  const posts: Post[] = Object.entries(postModules)
    .map(([path, module]) => {
      const filename = path.replace('../content/posts/', '').replace('.md', '')
      const slug = filename.replace(/^\d{4}-\d{2}-\d{2}-/, '')

      // Extrair frontmatter diretamente do módulo (não está em module.frontmatter)
      const frontmatter: PostFrontmatter = {
        title: module.title,
        slug: module.slug,
        date: module.date,
        category: module.category,
        tags: module.tags,
        description: module.description,
        image: module.image,
        published: module.published,
      }

      return {
        frontmatter,
        component: postComponents[path] as () => Promise<typeof import('*.md')>,
        slug: frontmatter.slug || slug,
      }
    })
    .filter((post) => post.frontmatter && post.frontmatter.published)
    .sort((a, b) => {
      const dateA = a.frontmatter.date ? new Date(a.frontmatter.date).getTime() : 0
      const dateB = b.frontmatter.date ? new Date(b.frontmatter.date).getTime() : 0
      return dateB - dateA
    })

  const getPostBySlug = (slug: string): Post | undefined => {
    return posts.find(
      (post) => post.frontmatter.slug === slug || post.slug === slug
    )
  }

  const getPostsByCategory = (category: string): Post[] => {
    return posts.filter((post) => post.frontmatter.category === category)
  }

  const getCategories = (): string[] => {
    return [...new Set(posts.map((post) => post.frontmatter.category))]
  }

  return {
    posts,
    getPostBySlug,
    getPostsByCategory,
    getCategories,
  }
}
