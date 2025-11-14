<script setup lang="ts">
const PRODUCTIVITY = [
  {
    name: 'Arc',
    description: 'Browser',
    href: 'https://arc.net/',
    icon: 'logos:arc',
  },
  {
    name: 'Notion',
    description: 'Note Taking',
    href: 'https://www.notion.so/product',
    icon: 'logos:notion-icon',
  },
  {
    name: 'Obsidian',
    description: 'Long-form Writing',
    href: 'https://obsidian.md/',
    icon: 'logos:obsidian-icon',
  },
]

const DEVELOPMENT = [
  {
    name: 'VS Code',
    description: 'IDE',
    href: 'https://code.visualstudio.com/',
    icon: 'logos:visual-studio-code',
  },
  {
    name: 'Eclipse',
    description: 'IDE',
    href: 'https://www.eclipse.org/downloads/',
    icon: 'logos:eclipse-icon',
  },
  {
    name: 'ChatGPT',
    description: 'AI',
    href: 'https://chat.openai.com/',
    icon: 'logos:openai-icon',
  },
]
</script>

<template>
  <div class="w-full">
    <Button title="Back" to="/" variant="button">
      <template #icon-before>
        <Icon class="text-xl" name="hugeicons:arrow-left-02" />
      </template>
    </Button>

    <div class="mt-5 flex w-full flex-col gap-y-10">
      <div>
        <h1 class="mb-1 text-2xl font-bold">
          Tools
        </h1>
        <p>Tools and software I use daily</p>
      </div>

      <ToolSection title="Productivity" :tools="PRODUCTIVITY" />
      <ToolSection title="Development" :tools="DEVELOPMENT" />
    </div>
  </div>
</template>
