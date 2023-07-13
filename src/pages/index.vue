<template>
  <div class="home-page flex items-center justify-center">
    <component-custom> Hello Project Start </component-custom>
  </div>
</template>

<script lang="ts">
import ComponentCustom from "@/components/ComponentCustom.vue";

export default {
  components: {
    ComponentCustom,
  },
};
</script>

<style lang="css">
.home-page {
  @apply min-h-screen;
}
</style>
