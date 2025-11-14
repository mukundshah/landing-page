<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

import { cn } from '@/utils/styles'

interface Tool {
  name: string
  description: string
  href: string
  icon: string
  iconBgColour?: string
}

interface Props {
  class?: HTMLAttributes['class']
  title: string
  tools: Tool[]
}

const props = defineProps<Props>()
</script>

<template>
  <div
    :class="cn(
      'flex flex-col rounded-xl border border-border py-5 px-3 gap-y-4 sm:gap-y-6',
      props.class,
    )"
  >
    <h2 class="px-2 text-lg font-medium">
      {{ props.title }}
    </h2>
    <div class="grid grid-cols-1 gap-x-2 gap-y-3 sm:grid-cols-2 sm:gap-y-4">
      <a
        v-for="tool in props.tools"
        :id="tool.name"
        :key="tool.name"
        class="group relative hover:bg-transparent"
        target="_blank"
        :href="tool.href"
      >
        <div class="relative flex flex-row items-center gap-x-4 px-2 py-0.5 transition-all">
          <div class="absolute inset-0 z-10 rounded-lg border border-border bg-muted opacity-0 transition-all group-hover:opacity-50"></div>
          <div
            class="z-20 h-10 w-10 rounded-lg bg-muted p-2 flex items-center justify-center"
            :style="{ backgroundColor: tool.iconBgColour }"
          >
            <Icon class="text-2xl" :name="tool.icon" />
          </div>
          <div class="z-20 flex flex-col">
            <h3 class="font-medium">
              {{ tool.name }}
            </h3>
            <p class="text-muted-foreground">
              {{ tool.description }}
            </p>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>
