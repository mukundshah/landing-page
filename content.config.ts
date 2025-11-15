import { defineCollection, defineContentConfig, z } from '@nuxt/content'
import { asSeoCollection } from '@nuxtjs/seo/content'

// const removeDupsAndLowerCase = (array: string[]) => {
//   if (!array.length) return array
//   const lowercaseItems = array.map(str => str.toLowerCase())
//   const distinctItems = new Set(lowercaseItems)
//   return Array.from(distinctItems)
// }

export default defineContentConfig({
  collections: {
    content: defineCollection(
      asSeoCollection({
        type: 'page',
        source: '**',
        schema: z.object({
          title: z.string().max(60),
          description: z.string().min(50).max(160),
          date: z.coerce.date(),
          draft: z.boolean().default(false),
          externalLink: z.string().url({ protocol: /^https$/ }).optional(),
          tags: z.array(z.string()).default([]),
          coverImage: z.object({ src: z.string(), alt: z.string() }).optional(),
        }),
      }),
    ),
  },
})
