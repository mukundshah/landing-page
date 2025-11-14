<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

import { cn } from '@/utils/styles'

interface Props {
  class?: HTMLAttributes['class']
  title?: string
}

const props = defineProps<Props>()
</script>

<template>
  <section :class="cn(props.class, 'flex flex-col gap-y-5 md:flex-row md:gap-y-0')">
    <div class="text-xl font-semibold md:w-1/3">
      <h2 v-if="props.title">
        {{ props.title }}
      </h2>
    </div>
    <div class="flex flex-col gap-y-3 md:w-2/3">
      <slot></slot>
    </div>
  </section>
</template>
