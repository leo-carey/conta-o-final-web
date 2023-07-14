<template>
  <div
    class="min-h-screen text-[#6F5643] bg-[#ECE7C2] dark:text-slate-300 dark:bg-gray-800 top-0"
  >
    <HeaderComponent />

    <slot />
  </div>
</template>

<script lang="ts">
import HeaderComponent from '@/components/base/HeaderComponent.vue'

export default {
  components: {
    HeaderComponent
  }
}
</script>

<style lang="css">
html,
body {
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  margin: 0;
  top: 0;
}
</style>
