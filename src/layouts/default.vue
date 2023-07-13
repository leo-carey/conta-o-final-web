<template>
  <div class="text-slate-500 bg-white dark:text-slate-300 dark:bg-gray-800">
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