<template>
  <Html>
    <Head>
      <Title>{{ title }}</Title>
      <!-- <template v-for="meta in head.meta" :key="meta.id">
        <Meta :id="meta.id" :property="meta.property" :content="meta.content" />
      </template> -->
    </Head>
    <Body>
      <div
        class="text-[#6F5643] bg-[#ECE7C2] dark:text-slate-300 dark:bg-gray-800 top-0"
      >
        <HeaderComponent />

        <slot />

        <section
          class="w-full fixed bottom-0 mx-auto text-center overflow-hidden"
        >
          <adsbygoogle
            ad-slot="8790953411"
            :ad-style="{
              display: 'inline-block',
              width: '728px',
              height: '90px',
              background: '#ccc'
            }"
          />
        </section>
      </div>
    </Body>
  </Html>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'

import HeaderComponent from '@/components/base/HeaderComponent.vue'

const { t } = useI18n()
const title = computed(() => t('layouts_title'))
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
