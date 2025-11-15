<script setup lang="ts">
import PostPreview from '@/components/blog/PostPreview.vue'

const { data } = await useAsyncData(
  'posts:all',
  async () => {
    let query = queryCollection('content')
      .select('path', 'title', 'description', 'date', 'tags', 'externalLink', 'draft')
      .where('path', 'LIKE', '/blogs/%')

    if (!import.meta.dev) {
      query = query.where('draft', '<>', true)
    }

    const posts = await query.order('date', 'DESC').all()

    const tags = posts
      .map(post => post.tags)
      .flat()
      .filter(tag => tag !== undefined)
      .map(tag => tag.toLowerCase())

    const uniqueTags = [...new Set(tags)]
    return {
      posts,
      tags: uniqueTags,
    }
  },
)

// Pagination props - can be extended later when pagination is implemented
// interface PaginationLink {
//   text: string
//   url: string
// }

// const paginationProps: {
//   prevUrl?: PaginationLink
//   nextUrl?: PaginationLink
// } = {
//   prevUrl: undefined,
//   nextUrl: undefined,
// }
</script>

<template>
  <div class="w-full">
    <Button title="Back" to="/" variant="button">
      <template #icon-before>
        <Icon class="text-xl" name="hugeicons:arrow-left-02" />
      </template>
    </Button>

    <h1 class="mb-6 mt-5 text-2xl font-bold">
      Blog
    </h1>
    <p v-if="data && data.posts.length === 0">
      No posts yet.
    </p>

    <div v-if="data && data.posts.length > 0" class="grid gap-y-16 sm:grid-cols-[3fr_1fr] sm:gap-x-8">
      <section aria-label="Blog posts list">
        <ul class="flex flex-col gap-y-4 text-start">
          <li v-for="p in data.posts" :key="p.path">
            <PostPreview :post="p" />
          </li>
        </ul>
        <!-- <Paginator
          v-if="paginationProps.prevUrl || paginationProps.nextUrl"
          :next-url="paginationProps.nextUrl"
          :prev-url="paginationProps.prevUrl"
        /> -->
      </section>
      <aside v-if="data && data.tags && data.tags.length > 0">
        <h2 class="mb-4 flex items-center gap-x-2 text-lg font-semibold">
          <Icon class="text-xl" name="hugeicons:tag-02" />
          Tags
        </h2>
        <ul class="text-bgColor flex flex-wrap gap-2">
          <li
            v-for="tag in data.tags"
            :key="tag"
          >
            <Button variant="pill" :title="tag" :to="`/tags/${tag}`" />
          </li>
        </ul>
        <!-- <span class="mt-4 block sm:text-end">
          <NuxtLink
            aria-label="View all blog categories"
            class="inline-flex items-center gap-x-1 underline underline-offset-4 decoration-dotted hover:decoration-solid"
            to="/tags"
          >
            View all <Icon class="text-xl" name="hugeicons:arrow-right-02" />
          </NuxtLink>
        </span> -->
      </aside>
    </div>
  </div>
</template>
