<template>
  <Html :class="`${$colorMode.preference}`">
    <Body class="flex items-center justify-center bg-background">
      <NuxtRouteAnnouncer />
      <main class="flex min-h-screen w-screen max-w-5xl flex-col items-center px-6 pb-10 pt-7 font-satoshi text-[0.92rem] leading-relaxed sm:px-10 lg:px-10">
        <SiteHeader />
        <NuxtPage />
        <SiteFooter />
      </main>
    </Body>
  </Html>
</template>
