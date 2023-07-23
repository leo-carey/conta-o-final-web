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
        class="selection:bg-cof-cyan-100 selection:text-slate-700 text-cof-secondary-200 bg-cof-secondary-100 dark:text-slate-300 dark:bg-gray-800 top-0"
      >
        <LazyHeaderComponent />

        <slot />

        <section
          class="w-full fixed bottom-0 mx-auto text-center overflow-hidden"
        >
          <adsbygoogle
            ad-slot="8790953411"
            :ad-style="{
              display: 'inline-block',
              width: '728px',
              height: '90px'
              // background: '#ccc'
            }"
          />
        </section>
      </div>
    </Body>
  </Html>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const title = computed(() => t('layouts_title'))
</script>

<style lang="css">
html,
body {
  margin: 0;
  top: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

:root {
  /* EL Borders */
  --el-border-color-light: #222;
  --el-card-bg-color: #222;

  /* EL Color Primary */
  /* --el-color-primary: #cc6c4a;
  --el-button-hover-border-color: #ad5c3f;
  --el-button-hover-bg-color: #ad5c3f;
  --el-color-primary-light-5: #ad5c3f;
  --el-color-primary-light-3: #ad5c3f;
  --el-color-primary-light-3: #ad5c3f;
  --el-color-primary-dark-2: #ad5c3f; */

  /* EL Color Success */
  /* --el-color-success: #73bda8;
  --el-color-success-light-5: #61a08e;
  --el-color-success-light-5: #61a08e;
  --el-color-success-light-3: #61a08e;
  --el-color-success-light-3: #61a08e;
  --el-color-success-light-3: #61a08e;
  --el-color-success-light-3: #61a08e;
  --el-color-success-dark-2: #61a08e; */
}
</style>
