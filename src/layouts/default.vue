<template>
  <div class="min-h-screen text-slate-500 bg-[#f5f1d4] dark:text-slate-300 dark:bg-gray-800">
    <HeaderComponent />

    <slot />
  </div>
</template>

<script lang="ts">
import HeaderComponent from "@/components/base/HeaderComponent.vue";

export default {
  components: {
    HeaderComponent
  }
}
</script>

<style></style>