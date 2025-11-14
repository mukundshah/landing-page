<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

import { cn } from '@/utils/styles'

interface Props {
  class?: HTMLAttributes['class']
  as?: string | Component
  title?: string
  to?: string
}

const props = withDefaults(defineProps<Props>(), {
  as: 'div',
})
</script>

<template>
  <component
    :is="props.as"
    :class="cn(
      'flex flex-row items-center justify-center gap-x-2',
      props.to && 'hover:opacity-75 transition-all',
      props.class,
    )"
    :to="props.to"
  >
    <slot name="icon"></slot>
    <p v-if="props.title">
      {{ props.title }}
    </p>
  </component>
</template>
