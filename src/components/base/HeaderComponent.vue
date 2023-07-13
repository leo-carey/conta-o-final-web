<template>
  <header class="w-full">
    <div class="w-[1024px] mx-auto">
      <div class="w-full flex items-end justify-end">
        <div class="flex justify-between items-center">
          <SwitcherThemeComponent />
          <LanguageComponent />
        </div>
      </div>

      <div class="flex items-end justify-between">
        <img
          class="w-[400px]"
          src="~/public/img/conta-o-final-logo.png"
          alt="pt-BR"
        />

        <div>
          <p class="mr-16 mb-8 text-right text-2xl">
            Site pra quem não tem tempo<br />
            de assistir Netflix.
          </p>
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
