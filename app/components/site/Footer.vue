<template>
  <footer class="mx-auto mt-24 w-full">
    <div class="border-t border-border pt-5">
      <div class="flex flex-col items-center gap-y-3 sm:flex sm:flex-row sm:items-center sm:justify-between sm:gap-y-0">
        <div class="flex gap-x-4 text-sm">
          <p>&copy; <NuxtTime year="numeric" :datetime="new Date()" /> wricha. All rights reserved.</p>
        </div>

        <div class="flex items-center justify-between">
          <!-- Social Brands -->
          <div class="flex items-center gap-x-4">
            <!-- Linkedin -->
            <a
              class="inline-block text-muted-foreground transition-all hover:text-muted-foreground/75"
              href="https://www.linkedin.com/in/wricha/"
            >
              <Icon class="text-xl" name="hugeicons:linkedin-01" />
              <span class="sr-only">LinkedIn</span>
            </a>

            <!-- Github -->
            <a
              class="inline-block text-muted-foreground transition-all hover:text-muted-foreground/75"
              href="https://github.com/wricha"
            >
              <Icon class="text-xl" name="hugeicons:github-01" />
              <span class="sr-only">GitHub</span>
            </a>
          </div>
          <!-- End Social Brands -->
        </div>
      </div>
    </div>
  </footer>
</template>
