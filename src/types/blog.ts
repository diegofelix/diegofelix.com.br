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

export interface PostMeta extends PostFrontmatter {
  /** Nome do arquivo em src/content/posts */
  file: string
  /** Tamanho do arquivo markdown em bytes */
  size: number
}

export interface Post {
  frontmatter: PostMeta
  component: () => Promise<unknown>
  slug: string
}
