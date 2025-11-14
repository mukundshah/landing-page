<script setup lang="ts">
interface PostData {
  title: string
  date: Date | string
  draft?: boolean
  description?: string
  path?: string
  externalLink?: string
}

interface Props {
  as?: string
  post: PostData
}

const props = withDefaults(defineProps<Props>(), {
  as: 'div',
})
</script>

<template>
  <li class="flex flex-col gap-2 sm:flex-row sm:gap-x-4 [&_q]:basis-full">
    <NuxtTime
      class="min-w-[120px]"
      :datetime="props.post.date"
      v-bind="{
        locale: 'en-GB',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      }"
    />

    <component :is="props.as">
      <span v-if="props.post.draft" class="text-red-500">(Draft) </span>
      <NuxtLink
        class="transition-all hover:text-muted-foreground"
        :rel="props.post.externalLink ? 'noopener noreferrer' : ''"
        :target="props.post.externalLink ? '_blank' : '_self'"
        :to="props.post.externalLink ? props.post.externalLink : props.post.path"
      >
        {{ props.post.title }}
      </NuxtLink>
      <p
        v-if="props.post.description"
        class="line-clamp-3 block text-sm italic text-muted-foreground"
      >
        {{ props.post.description }}
      </p>
    </component>
  </li>
</template>
