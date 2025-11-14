<script setup lang="ts">
import Button from './Button.vue'

interface Props {
  title?: string
  skills?: string[]
}

const props = defineProps<Props>()
</script>

<template>
  <div class="flex flex-col gap-y-2 md:flex-row md:gap-x-5 md:gap-y-0">
    <h3 v-if="props.title" class="w-1/5 font-medium">
      {{ props.title }}
    </h3>
    <div class="flex w-4/5 flex-row flex-wrap gap-x-4 gap-y-2 items-center">
      <Button
        v-for="(skill, index) in props.skills"
        :key="index"
        as="button"
        class="h-min"
        variant="pill"
        :title="skill"
      />
    </div>
  </div>
</template>
