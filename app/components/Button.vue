<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

import { NuxtLink } from '#components'
import { cn } from '~/utils/styles'

interface Props {
  as?: string | Component
  class?: HTMLAttributes['class']
  title?: string
  to?: string
  variant?: 'button' | 'pill'
}

const props = withDefaults(defineProps<Props>(), {
  as: NuxtLink,
  variant: 'button',
})
</script>

<template>
  <component
    :is="props.as"
    :class="cn(
      'inline-flex items-center gap-x-1 rounded-lg bg-primary-foreground border border-border px-2 py-1 text-sm transition-all hover:bg-input',
      !props.to && 'cursor-default',
      props.variant === 'pill' && 'rounded-xl',
      props.class,
    )"
    :to="props.to"
  >
    <slot name="icon-before"></slot>
    <p v-if="props.title">
      {{ props.title }}
    </p>
    <slot name="icon-after"></slot>
  </component>
</template>
