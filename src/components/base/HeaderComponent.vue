<template>
  <header class="w-full">
    <div class="w-[1024px] mx-auto">
      <div class="pt-5 -mb-10">
        <p class="text-center text-sm">
          Site pra quem não tem tempo de assistir Netflix.
        </p>
      </div>

      <div class="w-full flex items-end justify-end">
        <div class="flex justify-between items-center">
          <SwitcherThemeComponent />

          <LanguageComponent />
        </div>
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
