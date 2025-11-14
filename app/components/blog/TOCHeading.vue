<script setup lang="ts">
import type { TocLink } from '@nuxt/content'

interface Props {
  heading: TocLink
}

const props = defineProps<Props>()
</script>

<template>
  <li :class="{ 'ms-2': props.heading.depth > 2 }">
    <NuxtLink
      class="block line-clamp-2 text-foreground/75 transition-all hover:text-foreground"
      :aria-label="`Scroll to section: ${props.heading.text}`"
      :class="[
        props.heading.depth <= 2 ? 'mt-2' : 'mt-1 text-sm',
      ]"
      :to="`#${props.heading.id}`"
    >
      {{ props.heading.text }}
    </NuxtLink>
    <ul v-if="props.heading.children && props.heading.children.length > 0">
      <TOCHeading
        v-for="subheading in props.heading.children"
        :key="subheading.id"
        :heading="subheading"
      />
    </ul>
  </li>
</template>
