<script setup lang="ts">
import type { TocLink } from '@nuxt/content'

import TOCHeading from './TOCHeading.vue'

interface Props {
  headings: TocLink[]
}

const props = defineProps<Props>()
</script>

<template>
  <aside class="sticky top-20 order-2 -me-28 hidden basis-60 lg:flex lg:flex-col">
    <h2 class="font-semibold">
      TABLE OF CONTENTS
    </h2>
    <ul class="text-card-foreground">
      <TOCHeading
        v-for="heading in props.headings"
        :key="heading.id"
        :heading="heading"
      />
    </ul>
  </aside>
</template>
