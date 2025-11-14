<script setup lang="ts">
import { useIntersectionObserver } from '@vueuse/core'

const route = useRoute()

const { data: post } = await useAsyncData(
  `blog-post:${route.params.slug}`,
  async () => {
    let query = queryCollection('content').path(`/blogs/${route.params.slug}`)

    if (!import.meta.dev) {
      query = query.where('draft', '<>', true)
    }

    return await query.first()
  },
)

const blogHeroRef = useTemplateRef('blogHeroRef')
const scrollBtnRef = useTemplateRef('scrollBtnRef')

const { stop } = useIntersectionObserver(
  blogHeroRef,
  ([entry]: IntersectionObserverEntry[]) => {
    if (scrollBtnRef.value && entry) {
      scrollBtnRef.value.dataset.show = (!entry.isIntersecting).toString()
    }
  },
)

const scrollToTop = () => {
  document.documentElement.scrollTo({ behavior: 'smooth', top: 0 })
}

onUnmounted(() => {
  stop()
})
</script>

<template>
  <div class="w-full">
    <Button title="Back" to="/blogs" variant="button">
      <template #icon-before>
        <Icon class="text-xl" name="hugeicons:arrow-left-02" />
      </template>
    </Button>

    <div class="mt-8 gap-x-10 lg:flex lg:items-start">
      <BlogTOC
        v-if="post?.body?.toc?.links && post?.body?.toc?.links.length > 0"
        :headings="post?.body?.toc?.links"
      />
      <article data-pagefind-body class="grow wrap-break-word">
        <div id="blog-hero" ref="blogHeroRef">
          <BlogHero
            :post="{
              title: post!.title,
              date: post!.date,
              draft: post!.draft,
              description: post!.description,
              path: post!.path,
              externalLink: post!.externalLink,
              coverImage: post!.coverImage,
              tags: post!.tags as string[],
            }"
          />
        </div>
        <div class="prose prose-base prose-zinc mt-12 text-muted-foreground dark:prose-invert prose-headings:font-medium prose-headings:text-foreground prose-headings:before:absolute prose-headings:before:-ms-4 prose-th:before:content-none">
          <ContentRenderer :value="post!" />
        </div>
      </article>
    </div>
    <button
      id="to-top-btn"
      ref="scrollBtnRef"
      aria-label="Back to Top"
      class="z-90 fixed bottom-8 end-4 flex h-8 w-8 translate-y-28 items-center justify-center rounded-full border-2 border-transparent bg-primary-foreground text-3xl opacity-0 transition-all duration-300 hover:border-border/75 data-[show=true]:translate-y-0 data-[show=true]:opacity-100 sm:end-8 sm:h-12 sm:w-12"
      data-show="false"
      @click="scrollToTop"
    >
      <Icon class="text-xl" name="hugeicons:arrow-up-01" />
    </button>
  </div>
</template>
