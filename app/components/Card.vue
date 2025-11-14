<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

import { cn } from '@/utils/styles'

interface Props {
  as?: string | Component
  class?: HTMLAttributes['class']
  to?: string
  heading?: string
  subheading?: string
  date?: string
  image?: {
    src?: string
    alt?: string
    class?: HTMLAttributes['class']
  }
}

const props = withDefaults(defineProps<Props>(), {
  as: 'div',
})
</script>

<template>
  <component
    :is="props.as"
    :class="cn(
      'relative rounded-2xl border border-border bg-primary-foreground px-5 py-3',
      props.to && 'transition-all hover:border-foreground/25 hover:shadow-sm',
      props.class,
    )"
    :to="props.to"
  >
    <img
      v-if="props.image"
      loading="eager"
      :alt="props.image.alt"
      :class="cn('mb-3 md:absolute md:mb-0', props.image.class)"
      :src="props.image.src"
    />
    <div class="flex flex-col gap-y-1.5">
      <div class="flex flex-col gap-y-0.5">
        <h1 v-if="props.heading" class="text-lg font-medium">
          {{ props.heading }}
        </h1>
        <h2 v-if="props.subheading" class="text-muted-foreground">
          {{ props.subheading }}
        </h2>
        <h2 v-if="props.date" class="text-muted-foreground">
          {{ props.date }}
        </h2>
      </div>
      <slot></slot>
    </div>
  </component>
</template>
