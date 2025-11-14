<script setup lang="ts">
interface PostData {
  title: string
  date: Date | string
  draft?: boolean
  description?: string
  path?: string
  externalLink?: string
  coverImage?: {
    src: string
    alt: string
  }
  tags?: string[]
}

interface Props {
  post: PostData
}

const props = defineProps<Props>()
</script>

<template>
  <div>
    <div
      v-if="props.post.coverImage"
      class="aspect-h-9 aspect-w-16 mb-6"
    >
      <img
        class="rounded-2xl object-cover"
        fetchpriority="high"
        loading="eager"
        :alt="props.post.coverImage.alt"
        :src="props.post.coverImage.src"
      />
    </div>
    <span v-if="props.post.draft" class="text-red-500">(Draft)</span>
    <div class="flex flex-wrap items-center gap-x-3 gap-y-2">
      <p class="text-xs">
        <NuxtTime
          :datetime="props.post.date"
          v-bind="{
            locale: 'en-GB',
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          }"
        />

        <!-- <span v-if="props.post.minutesRead"> / {{ props.post.minutesRead }}</span> -->
      </p>
    </div>
    <h1 class="mt-2 text-3xl font-medium sm:mb-1">
      {{ props.post.title }}
    </h1>

    <div
      v-if="props.post.tags && props.post.tags.length > 0"
      class="mt-3 flex flex-row items-center gap-x-1"
    >
      <Icon class="text-xl" name="hugeicons:tag-01" />
      <template
        v-for="(tag, i) in props.post.tags"
        :key="tag"
      >
        <div>
          <NuxtLink
            class="inline-block before:content-['#'] hover:underline hover:underline-offset-4"
            :aria-label="`View more blogs with the tag ${tag}`"
            :to="`/tags/${tag}/`"
          >
            {{ tag }}
          </NuxtLink>
          <span v-if="i < props.post.tags!.length - 1">, </span>
        </div>
      </template>
    </div>
  </div>
</template>
