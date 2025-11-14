<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

import { cn } from '~/utils/styles'

interface Props {
  as?: string | Component
  class?: HTMLAttributes['class']
  to?: string
  heading?: string
  subheading?: string
  image?: {
    src?: string
    alt?: string
    class?: HTMLAttributes['class']
  }
}

const props = withDefaults(defineProps<Props>(), {
  as: 'a',
})
</script>

<template>
  <component
    :is="props.as"
    :class="cn(
      props.class,
      'flex flex-col gap-y-3 rounded-2xl border border-border bg-primary-foreground',
      props.to && 'transition-all hover:border-foreground/25 hover:shadow-sm',
    )"
    :href="props.to"
  >
    <img
      v-if="props.image"
      loading="eager"
      :alt="props.image.alt"
      :class="cn('h-48 w-full rounded-2xl rounded-bl-none rounded-br-none object-cover', props.image.class)"
      :src="props.image.src"
    />
    <div class="flex flex-col gap-y-0.5 px-5 py-4">
      <h1 v-if="props.heading" class="text-lg font-medium">
        {{ props.heading }}
      </h1>
      <h2 v-if="props.subheading" class="text-muted-foreground">
        {{ props.subheading }}
      </h2>
    </div>

    <slot></slot>
  </component>
</template>
