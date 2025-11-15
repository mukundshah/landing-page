<script setup lang="ts">
const route = useRoute()

const tag = route.params.tag as string

const { data: posts } = await useAsyncData(
  `posts:tag:${tag.replace(/\s+/g, '-')}`,
  async () => {
    let query = queryCollection('content')
      .select('path', 'title', 'description', 'date', 'tags', 'externalLink', 'draft')
      .where('path', 'LIKE', '/blogs/%')

    if (!import.meta.dev) {
      query = query.where('draft', '<>', true)
    }

    const posts = await query.order('date', 'DESC').all()

    return posts.filter(post => post.tags.map(t => t.toLowerCase()).includes(tag.toLowerCase()))
  },
)

useSeoMeta({
  title: () => `Tag: ${tag}`,
  description: () => `View all posts with the tag - ${tag}`,
})

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
    <Button title="Back" to="/blogs" variant="button">
      <template #icon-before>
        <Icon class="text-xl" name="hugeicons:arrow-left-02" />
      </template>
    </Button>

    <h1 class="mb-6 mt-5 flex items-end gap-x-2 text-2xl font-bold">
      Tags:
      <span class="text-xl">#{{ tag }}</span>
    </h1>

    <p v-if="posts && posts.length === 0">
      No posts yet.
    </p>

    <div v-if="posts && posts.length > 0" class="grid gap-y-16 sm:grid-cols-[3fr_1fr] sm:gap-x-8">
      <section aria-label="Blog posts list">
        <ul class="flex flex-col gap-y-4 text-start">
          <li v-for="p in posts" :key="p.path">
            <BlogPostPreview :post="p" />
          </li>
        </ul>
        <!-- <Paginator
          v-if="paginationProps.prevUrl || paginationProps.nextUrl"
          :next-url="paginationProps.nextUrl"
          :prev-url="paginationProps.prevUrl"
        /> -->
      </section>
    </div>
  </div>
</template>
