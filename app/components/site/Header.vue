<script setup lang="ts">
const colorMode = useColorMode()

const toggleTheme = () => {
  if (colorMode.preference === 'dark') {
    colorMode.preference = 'light'
  } else {
    colorMode.preference = 'dark'
  }
}
</script>

<template>
  <header class="mb-12 flex w-full flex-wrap pb-3 text-sm sm:flex-nowrap sm:justify-start">
    <nav
      aria-label="global"
      class="relative mx-auto flex w-full items-center justify-between sm:flex sm:items-center"
    >
      <NuxtLink
        aria-label="Brand"
        class="flex-none text-xl font-semibold"
        to="/"
      >
        wricha
      </NuxtLink>

      <div class="flex flex-row items-center justify-center gap-x-5 sm:gap-x-7">
        <NuxtLink
          aria-label="Nav Menu Item"
          class="flex-none text-[1.05rem] font-medium hover:text-foreground/75"
          to="/blogs"
        >
          Blog
        </NuxtLink>
        <NuxtLink
          aria-label="Nav Menu Item"
          class="flex-none text-[1.05rem] font-medium hover:text-foreground/75"
          to="/tools"
        >
          Tools
        </NuxtLink>

        <button
          class="relative rounded-md border border-border transition-all hover:bg-border size-8"
          type="button"
          @click="toggleTheme"
        >
          <span class="sr-only">{{ $colorMode.preference === 'dark' ? 'Light Theme' : 'Dark Theme' }}</span>

          <div class="flex items-center justify-center dark:hidden">
            <Icon class="text-xl rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" name="hugeicons:sun-03" />
          </div>
          <div class="items-center justify-center hidden dark:flex">
            <Icon class="text-xl rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" name="hugeicons:moon-02" />
          </div>
        </button>
      </div>
    </nav>
  </header>
</template>
