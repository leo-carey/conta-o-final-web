<template>
  <header class="w-full absolute z-[999] top-0 left-0">
    <div class="w-[1024px] mx-auto">
      <div class="w-full flex items-end justify-end">
        <div class="flex justify-between items-center">
          <span></span>

          <SwitcherThemeComponent />

          <LanguageComponent />
        </div>
      </div>

      <div>

      </div>
    </div>
  </header>
</template>

<script lang="ts">
import LanguageComponent from '@/components/base/LanguageComponent.vue'
import SwitcherThemeComponent from '@/components/base/SwitcherThemeComponent.vue'

export default {
  components: {
    LanguageComponent,
    SwitcherThemeComponent
  }
}
</script>

<style scoped></style>