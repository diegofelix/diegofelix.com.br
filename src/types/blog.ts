export interface PostFrontmatter {
  title: string
  slug: string
  date: string
  category: string
  tags: string[]
  description: string
  image?: string
  published: boolean
}

export interface Post {
  frontmatter: PostFrontmatter
  component: () => Promise<typeof import('*.md')>
  slug: string
}
