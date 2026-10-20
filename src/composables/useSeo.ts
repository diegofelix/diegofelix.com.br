import { computed, toValue, type MaybeRefOrGetter } from 'vue'
import { useHead } from '@unhead/vue'

const SITE_URL = 'https://diegofelix.com.br'
const SITE_NAME = 'Diego Felix'
const DEFAULT_DESCRIPTION =
  'Diego Felix, Engenheiro de Software Especialista. Backend, PHP, Laravel e liderança técnica.'

interface SeoOptions {
  title?: string
  description?: string
  path: string
  image?: string
  type?: 'website' | 'article'
}

export function useSeo(options: MaybeRefOrGetter<SeoOptions>) {
  const seo = computed(() => {
    const {
      title,
      description = DEFAULT_DESCRIPTION,
      path,
      image,
      type = 'website',
    } = toValue(options)
    return {
      title: title ? `${title} · ${SITE_NAME}` : `${SITE_NAME} · Engenheiro de Software`,
      description,
      url: SITE_URL + path,
      image: image ? SITE_URL + image : undefined,
      type,
    }
  })

  useHead({
    title: () => seo.value.title,
    link: () => [{ rel: 'canonical', href: seo.value.url }],
    meta: () => [
      { name: 'description', content: seo.value.description },
      { property: 'og:site_name', content: SITE_NAME },
      { property: 'og:locale', content: 'pt_BR' },
      { property: 'og:type', content: seo.value.type },
      { property: 'og:title', content: seo.value.title },
      { property: 'og:description', content: seo.value.description },
      { property: 'og:url', content: seo.value.url },
      ...(seo.value.image ? [{ property: 'og:image', content: seo.value.image }] : []),
      { name: 'twitter:card', content: seo.value.image ? 'summary_large_image' : 'summary' },
    ],
  })
}
