<script setup lang="ts">
interface PaginationLink {
  url: string
  text?: string
  srLabel?: string
}

interface Props {
  nextUrl?: PaginationLink
  prevUrl?: PaginationLink
}

const props = defineProps<Props>()
</script>

<template>
  <nav
    v-if="props.prevUrl || props.nextUrl"
    class="mt-8 flex items-center gap-x-4"
  >
    <a
      v-if="props.prevUrl"
      class="me-auto py-2"
      :href="props.prevUrl.url"
    >
      <span v-if="props.prevUrl.srLabel" class="sr-only">
        {{ props.prevUrl.srLabel }}
      </span>
      {{ props.prevUrl.text || 'Previous' }}
    </a>
    <a
      v-if="props.nextUrl"
      class="ms-auto py-2"
      :href="props.nextUrl.url"
    >
      <span v-if="props.nextUrl.srLabel" class="sr-only">
        {{ props.nextUrl.srLabel }}
      </span>
      {{ props.nextUrl.text || 'Next' }}
    </a>
  </nav>
</template>
