<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
const colorMode = useColorMode()
</script>

<style lang="css">
body {
  @apply min-h-screen bg-[#f5f1d4] dark:bg-gray-800 dark:text-gray-200;
}
</style>
